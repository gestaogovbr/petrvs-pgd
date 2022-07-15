import { Component, EventEmitter, HostBinding, Injector, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { InputBase, LabelPosition } from '../input-base';

@Component({
  selector: 'input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputButtonComponent extends InputBase implements OnInit {
  @HostBinding('class') class = 'form-group';
  @Output() buttonClick = new EventEmitter<Event>();
  @Output() change = new EventEmitter<Event>();
  @Input() labelPosition: LabelPosition = "top";
  @Input() controlName: string | null = null;
  @Input() disabled?: string;
  @Input() icon: string = "";
  @Input() label: string = "";
  @Input() labelInfo: string = "";
  @Input() bold: boolean = false;
  @Input() value: any = "";
  @Input() size: number = 0;
  @Input() loading: boolean = false;
  @Input() numbers?: string; 
  @Input() textCase: string = "";
  @Input() iconButton: string = "bi-search";
  @Input() form?: FormGroup;
  @Input() source?: any;
  @Input() path?: string;
  @Input() maxLength?: number;
  @Input() set control(value: AbstractControl | undefined) {
    this._control = value;
  }
  get control(): AbstractControl | undefined {
    return this.getControl();
  }

  constructor(public injector: Injector) {
    super(injector);
  }

  public get isNumbers(): boolean {
    return this.numbers !== undefined;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public onButtonClick(event: Event) {
    if(this.buttonClick) this.buttonClick.emit(event);    
  }

  public onChange(event: Event) {
    if(this.change) this.change.emit(event); 
  }
}
