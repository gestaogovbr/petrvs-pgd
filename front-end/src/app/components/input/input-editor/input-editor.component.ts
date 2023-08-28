import { Component, ElementRef, EventEmitter, HostBinding, Injector, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup, FormGroupDirective } from "@angular/forms";
import { EditorComponent } from '@tinymce/tinymce-angular';
import { IIndexable } from 'src/app/models/base.model';
import { DialogService } from 'src/app/services/dialog.service';
import { Editor, RawEditorOptions } from 'tinymce';
import { InputBase, LabelPosition } from "../input-base";
import { TemplateDataset, TemplateService, VariableTemplate } from 'src/app/modules/uteis/templates/template.service';

@Component({
  selector: 'input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputEditorComponent extends InputBase implements OnInit {
  @ViewChild('helpTemplate') helpTemplate?: TemplateRef<any>;
  @ViewChild('addMacroTemplate') addMacroTemplate?: TemplateRef<any>;
  @ViewChild('editor') editorComponent?: EditorComponent;
  @HostBinding('class') class = 'form-group';
  @ViewChild('inputElement') inputElement?: ElementRef;
  @Output() valueChange = new EventEmitter<string>();
  @Input() hostClass: string = "";
  @Input() labelPosition: LabelPosition = "top";
  @Input() controlName: string | null = null;
  @Input() disabled?: string;
  @Input() icon: string = "";
  @Input() label: string = "";
  @Input() labelInfo: string = "";
  @Input() labelClass?: string;
  @Input() bold: boolean = false;
  @Input() loading: boolean = false;
  @Input() form?: FormGroup;
  @Input() source?: any;
  @Input() path?: string;
  @Input() canEditTemplate: boolean = false;
  @Input() dataset?: TemplateDataset[];
  @Input() required?: string;
  @Input() set template(value: string | undefined) {
    if(this._template != value) {
      this._template = value;
      if(this.viewInit) this.updateEditor();
    }
  }
  get template(): string | undefined {
    return this._template;
  }
  @Input() set datasource(value: any) {
    if(this._datasource != value) {
      this._datasource = value;
      if(this.viewInit) this.updateEditor();
    }
  }
  get datasource(): any {
    return this._datasource;
  }
  @Input() set value(value: string) {
    if(this.isEditingTemplate) {
      this._editingTemplate = value;
    } else if (this._value != value) {
      this._value = value;
      this.valueChange.emit(value);
      if (this.control && this.control.value != value) {
        this.control.setValue(value);
      }
      this.detectChanges();
    }
  };
  get value(): string {
    return this.isEditingTemplate ? this._editingTemplate : this._value;
  }
  @Input() set control(value: AbstractControl | undefined) {
    this._control = value;
  }
  get control(): AbstractControl | undefined {
    return this.getControl();
  }
  @Input() set size(value: number) {
    this.setSize(value);
  }
  get size(): number {
    return this.getSize();
  }

  public toolbars: string[] = [
    'customEditTemplateButton',
    'customDoneEditTemplateButton customCancelEditTemplateButton | customAddMacroTemplate customHelpTemplate | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks',
    'customAddMacroTemplate customHelpTemplate | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks',
    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks'
  ];

  public editor?: Editor;
  public dialog: DialogService;
  public templateService: TemplateService;
  public plugins: string = 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons';
  public editorConfig: RawEditorOptions = {
    imagetools_cors_hosts: ['picsum.photos'],
    toolbar_sticky: true,
    image_advtab: true,
    /*toolbar: [
      'customEditTemplateButton',
      'customDoneEditTemplateButton customCancelEditTemplateButton | customAddMacroTemplate customHelpTemplate | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks',
      'customAddMacroTemplate customHelpTemplate | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks',
      'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl visualblocks'
    ],*/
    menubar: false,
    statusbar: false,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table',
    setup: ((editor: Editor) => {
      this.editor = editor;
      /* Hack para manter compatibilidade entre o @tinymce/tinymce-angular 4.2.4 e o tinymce 6.3.2 */
      (editor as IIndexable)['setMode'] =  (mode: any) => editor.mode.set(mode);      
      /* Botões personalizados para edição do template */
      editor.ui.registry.addButton('customDoneEditTemplateButton', {
        icon: 'checkmark',
        text: 'Concluir',
        tooltip: "Concluir edição do template",
        onAction: (_) => this.onDoneTemplateClick()
      });
      editor.ui.registry.addButton('customCancelEditTemplateButton', {
        icon: 'close',
        text: 'Cancelar',
        tooltip: "Cancelar edição do template",
        onAction: (_) => this.onCancelTemplateClick()
      });
      editor.ui.registry.addButton('customEditTemplateButton', {
        icon: 'edit-block',
        text: 'Editar',
        tooltip: "Editar template",
        onAction: (_) => this.onEditTemplateClick()
      });
      /* Botoes especiais */
      editor.ui.registry.addButton('customAddMacroTemplate', {
        icon: 'code-sample',
        tooltip: "Inserir macro (valores dinâmicos)",
        onAction: (_) => (async () => (await this.dialog.template({ title: "Adicionar macro", modalWidth: 500 }, this.addMacroTemplate!, [{
          label: "Fechar",
          color: "btn btn-outline-danger",
        }]).asPromise()).dialog.close())()
      });
      editor.ui.registry.addButton('customHelpTemplate', {
        icon: 'info',
        tooltip: "Ajuda sobre como utilizar variáveis",
        onAction: (_) => (async () => (await this.dialog.template({ title: "Ajuda sobre variáveis", modalWidth: 800 }, this.helpTemplate!, [{
          label: "Fechar",
          color: "btn btn-outline-danger",
        }]).asPromise()).dialog.close())()
      });
    }).bind(this),
    /*init_instance_callback: ((editor: Editor) => {
      this.updateToolbars();
    }).bind(this)*/
  };

  public get variables(): VariableTemplate[] {
    let result: VariableTemplate[] = [];
    const recursive = (vars: TemplateDataset[], level: number, prefix: string) => {
      for(let variable of vars) {
        result.push({level: level, variable: prefix + variable.field + (variable.type == "ARRAY" ? "[]" : ""), label: variable.label});
        if(variable.type == "ARRAY") recursive(variable.fields || [], level+1, "[].");
        if(variable.type == "OBJECT") recursive(variable.fields || [], level+1, ".");
      }
    };
    recursive(this.dataset || [], 0, "");
    if(JSON.stringify(result) != JSON.stringify(this._variables)) this._variables = result;
    return result;
  }

  private _editingTemplate?: string;
  private _template?: string;
  private _datasource?: any; 
  private _variables: VariableTemplate[] = [];

  constructor(public injector: Injector) {
    super(injector);
    this.dialog = injector.get<DialogService>(DialogService);
    this.templateService = injector.get<TemplateService>(TemplateService);
    this._value = "";
  }

  public onEditTemplateClick() {
    this._editingTemplate = this.template;
    this.cdRef.detectChanges();
    //this.updateToolbars();
  }

  public onDoneTemplateClick() {
    this.template = this._editingTemplate;
    this._editingTemplate = undefined;
    this.updateEditor();
    this.cdRef.detectChanges();
    //this.updateToolbars();
  }

  public onCancelTemplateClick() {
    this._editingTemplate = undefined;
    this.updateEditor();
    this.cdRef.detectChanges();
    //this.updateToolbars();
  }

  public get hasTemplate(): boolean {
    return this.template != undefined;
  }

  public get hasDataset(): boolean {
    return this.dataset != undefined;
  }

  /*public get toolbarButtons(): ToolbarButton[] {
    return this.isEditingTemplate ? this.toolbarEditingTemplate : this.toolbarEditTemplate;
  }*/

  public get toolbar(): string {
    if(this.isEditingTemplate) {
      return this.toolbars[0];
    } else if(this.hasTemplate && this.canEditTemplate) {
      return this.toolbars[1];
    } else if(this.hasDataset) {
      return this.toolbars[2];
    } else if(!this.hasTemplate && !this.disabled) {
      return this.toolbars[3];
    } else {
      return "";
    }
  }

  /*public updateToolbars() {
    const enable = (element: JQuery<HTMLElement>) => {
      element.removeClass('tox-tbtn--disabled');
      element.find(".tox-tbtn--disabled").removeClass('tox-tbtn--disabled');
      element.find("[aria-disabled=true]").attr("aria-disabled", "false");
    };
    let toolbarEdit = $(this.editor!.editorContainer).find(".tox-toolbar-overlord [role=group]:eq(0)").toggle();
    let toolbarEditing = $(this.editor!.editorContainer).find(".tox-toolbar-overlord [role=group]:eq(1)").toggle();
    let toolbarDataset = $(this.editor!.editorContainer).find(".tox-toolbar-overlord [role=group]:eq(2)").toggle();
    let toolbarDefault = $(this.editor!.editorContainer).find(".tox-toolbar-overlord [role=group]:eq(3)").toggle();
    toolbarEdit.hide();
    toolbarEditing.hide();
    toolbarDataset.hide();
    toolbarDefault.hide();
    if(this.isEditingTemplate) {
      toolbarEditing.show();
      enable(toolbarEditing);
    } else if(this.hasTemplate && this.canEditTemplate) {
      toolbarEdit.show();
      enable(toolbarEdit);
    } else if(this.hasDataset) {
      toolbarDataset.show();
    } else if(!this.hasTemplate && !this.disabled) {
      toolbarDefault.show();
    } 
  }*/

  public get isEditingTemplate(): boolean {
    return this._editingTemplate != undefined;
  }

  public get isDisabled(): boolean {
    //tinyMCE.activeEditor.controlManager.get('disable_save').setDisabled(true) ;
    return this.disabled != undefined || (this.template != undefined && !this.isEditingTemplate);
  }

  public updateEditor() {
    if(this.template != undefined && this.datasource != undefined) {
      this.value = this.templateService.renderTemplate(this.template, this.datasource);
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.control) {
      this.control.valueChanges.subscribe(newValue => {
        if (this.value != newValue) {
          this.value = newValue;
          this.updateEditor();
        }
      });
      this.value = this.control.value;
    }
    this.updateEditor();
  }

}
