import { Component, Injector, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { EditableFormComponent } from 'src/app/components/editable-form/editable-form.component';
import { InputSelectComponent } from 'src/app/components/input/input-select/input-select.component';
import { ToolbarButton } from 'src/app/components/toolbar/toolbar.component';
import { DemandaDaoService } from 'src/app/dao/demanda-dao.service';
import { TipoMotivoAfastamentoDaoService } from 'src/app/dao/tipo-motivo-afastamento-dao.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { Afastamento } from 'src/app/models/afastamento.model';
import { IIndexable } from 'src/app/models/base.model';
import { DemandaPausa } from 'src/app/models/demanda-pausa.model';
import { Demanda } from 'src/app/models/demanda.model';
import { Unidade } from 'src/app/models/unidade.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CalendarService, Efemerides, TipoContagem } from 'src/app/services/calendar.service';
import { LookupItem } from 'src/app/services/lookup.service';
import { NavigateResult } from 'src/app/services/navigate.service';
import { Interval } from 'src/app/services/util.service';
import { forEachChild } from 'typescript';
import { PageFormBase } from '../../base/page-form-base';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.scss']
})
export class TesteFormComponent extends PageFormBase<Usuario, UsuarioDaoService> {
  @ViewChild(EditableFormComponent, { static: false }) public editableForm?: EditableFormComponent;
  @ViewChild('demandas', { static: false }) public demandas?: InputSelectComponent;

  //public editableForm?: EditableFormComponent | undefined;
  public calendar: CalendarService;
  public efemeridesFrontEnd?: Efemerides;
  public efemeridesBackEnd?: Efemerides;

  public usuarioDao: UsuarioDaoService;
  public usuario?: Usuario;
  public unidadeDao: UnidadeDaoService;
  public demandaDao!: DemandaDaoService;
  public demandas_usuario: LookupItem[] = [];
  public demanda?: Demanda;
  public tipoMotivoAfastamentoDao: TipoMotivoAfastamentoDaoService;
  public form: FormGroup;
  public disabled_datetime: boolean = false;
  public disabled_pausas: boolean = false;
  public disabled_afastamentos: boolean = false;
  public opcoes_calculo: LookupItem[] = [
    {'key': 0, 'value': 'Data-fim'},{'key': 1, 'value': 'Tempo'}
  ];
  public erros: string = '';
  public toolbarButtons: ToolbarButton[] = [
    {
      label: "Comparar calculaDataTempo",
      icon: "bi bi-backspace",
      onClick: () => {
        let error: any = undefined;
        if(this.formValidation) {
          try {
            error = this.formValidation(this.form!);
          } catch (e: any) {
            error = e; 
          }
        }
        if(this.form!.valid && !error){
          try {
            this.compararFuncoes();
          } catch (error: any) {
            this.erros = error;
          }
        } else {
          this.form!.markAllAsTouched();
          if(error) {
            this.erros = error;
          }
          Object.entries(this.form!.controls).forEach(([key, value]) => {
            if(value.invalid) console.log("Validate => " + key, value.value, value.errors);
          });
        }
      }
    }
   ];

  constructor(public injector: Injector) {
    super(injector, Usuario, UsuarioDaoService);
    this.log('constructor');
    this.calendar = injector.get<CalendarService>(CalendarService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
    this.usuarioDao = injector.get<UsuarioDaoService>(UsuarioDaoService);
    this.demandaDao = injector.get<DemandaDaoService>(DemandaDaoService);
    this.tipoMotivoAfastamentoDao = injector.get<TipoMotivoAfastamentoDaoService>(TipoMotivoAfastamentoDaoService);
    this.form = this.fh.FormBuilder({
      inicio: {default: new Date('2023-01-01 09:00:00 -03:00')},
      tipo_calculo: {default: 1},
      datafim_fimoutempo: {default: new Date('2023-02-15 09:00:00 -03:00')},
      tempo_fimoutempo: {default: 0}, 
      carga_horaria: {default: 8},
      unidade_id: {default: ""}, 
      tipo: {default: "DISTRIBUICAO"},
      demanda_id: {default: ""},
      usuario_id: {default: ""},
      inicio_afastamento: {default: ""},
      fim_afastamento: {default: ""},
      tipo_motivo_afastamento_id: {default: ""},
      incluir_pausas: { default: false },
      incluir_afastamentos: { default: false }
    }, this.cdRef, this.validate);
    this.join = ['demandas', 'afastamentos'];
  }

  public loadData(entity: Usuario, form: FormGroup): void | Promise<void> {
    //throw new Error('Method not implemented.');
  }

  public initializeData(form: FormGroup): void | Promise<void> {
    //throw new Error('Method not implemented.');
  }

  public saveData(form: IIndexable): Promise<boolean | Usuario | NavigateResult | null | undefined> {
    throw new Error('Method not implemented.');
  }

  public validate = (control: AbstractControl, controlName: string) => {
    let result = null;
    if(['unidade_id'].indexOf(controlName) >= 0 && !control.value?.length) {
      result = "Obrigatório";
    };
    if(['inicio'].indexOf(controlName) >= 0 && !this.util.isDataValid(control.value)) {
      result = "Data inválida!";
    };
    if(['carga_horaria'].indexOf(controlName) >= 0 && !control.value) {
      result = "Valor não pode ser zero!";
    }
    return result;
  }

  public formValidation = (form?: FormGroup) => {
    if(!this.util.isDataValid(this.form.controls.datafim_fimoutempo.value) && this.form!.controls.tipo_calculo.value == 1) {
      return "Para calcular o tempo, o campo DATA-FIM precisa ser válido!";
    };
    if(!this.form.controls.tempo_fimoutempo.value && this.form!.controls.tipo_calculo.value == 0) {
      return "Para calcular a data-fim, o campo TEMPO não pode ser nulo!";
    };
    if((this.form.controls.incluir_afastamentos.value || this.form.controls.incluir_pausas.value) && !this.form.controls.usuario_id.value?.length){
      return "É necessário escolher um Usuário!"
    };
    return undefined;
  }

  public onPausasChange(evento: Event){
    this.disabled_pausas = !this.form.controls.incluir_pausas.value;
  }

  public onAfastamentosChange(evento: Event){
    this.disabled_afastamentos = !this.form.controls.incluir_afastamentos.value;
  }

  public onTipoCalculoChange(evento: Event){
    this.disabled_datetime = this.form.controls.tipo_calculo.value == 0;
  }

  public async onUsuarioSelect(){
    await this.dao!.getById(this.form.controls.usuario_id.value, this.join).then(usuario => {
      this.usuario = usuario!;
      usuario?.demandas?.forEach(demanda => {
        this.demandas_usuario.push({
          key: demanda.id,
          value: demanda.assunto || ''
        });
      });
      this.demandas!.items = this.demandas_usuario;
      this.cdRef.detectChanges();
    }
    );
  }

  public async onDemandaChange(event: Event){
    await this.demandaDao.getById(this.form.controls.demanda_id.value).then( demanda => {
      this.demanda = demanda!;
    })
  }

  public async compararFuncoes() {
    // Prepara os parâmetros para a requisição...
    let calculo: number = this.form.controls.tipo_calculo.value;
    let inicio: Date = this.form.controls.inicio.value;
    let inicio_dao = inicio.toString().substring(0,33);
    let fim: Date = this.form.controls.datafim_fimoutempo.value;
    let fim_dao = fim ? fim.toString().substring(0,33) : '';
    let tempo: number = this.form.controls.tempo_fimoutempo.value;
    let cargaHoraria: number = this.form.controls.carga_horaria.value;
    let unidade: Unidade | null = await this.unidadeDao.getById(this.form.controls.unidade_id.value, ['entidade']);
    let tipo: TipoContagem = this.form.controls.tipo.value;
    let pausas: DemandaPausa[]  = this.form.controls.incluir_pausas.value ? this.demanda!.pausas : [];
    let afastamentos: Afastamento[]  = this.form.controls.incluir_afastamentos.value ? (this.usuario!.afastamentos ?? []) : [];

    // chama a função no FrontEnd
    this.efemeridesFrontEnd = this.calendar.calculaDataTempoUnidade(inicio, calculo ? fim : tempo, cargaHoraria, unidade!, tipo, pausas, afastamentos);

    // chama a função no BackEnd
    await this.dao!.calculaDataTempoUnidade(inicio_dao, calculo ? fim_dao : tempo, cargaHoraria, unidade!.id, tipo, pausas, afastamentos).then(response => {
      this.efemeridesBackEnd = response;
    });
    this.preparaParaExibicao();
  }

  public preparaParaExibicao() {
    this.efemeridesBackEnd!.inicio = new Date(this.efemeridesBackEnd!.inicio);
    this.efemeridesBackEnd!.fim = new Date(this.efemeridesBackEnd!.fim);
    this.efemeridesBackEnd?.afastamentos.forEach(x => x.inicio_afastamento = new Date(x.inicio_afastamento));
    this.efemeridesBackEnd?.afastamentos.forEach(x => x.fim_afastamento = new Date(x.fim_afastamento));
    this.efemeridesBackEnd?.diasDetalhes.forEach(d => d.intervalos = Object.values(d.intervalos));
    let a = 1;
  }

  public log(message: string){
    console.log(message);
  }
  
  ngOnInit() {
    super.ngOnInit();
    this.log('ngOnInit');
  }

  ngOnChanges() {
    //this.log('ngOnChanges');
  }

  ngDoCheck() {
    //this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    //this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    //this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }



}

/*
   {
      label: "Testar UNION",
      icon: "bi bi-backspace",
      onClick: () => {
        let intervals_i: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                       {start: new Date('2022-03-15T00:00:00'), end: new Date('2022-04-15T00:00:00')},
                                       {start: new Date('2022-05-01T00:00:00'), end: new Date('2022-05-15T00:00:00')}];  
        //Retorno esperado da função UNION:    15/01/22---15/02/22     15/03/22---15/04/22       01/05/22---15/05/22  

        let intervals_ii: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                        {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-04-01T00:00:00')},
                                        {start: new Date('2022-05-01T00:00:00'), end: new Date('2022-05-15T00:00:00')}];
        //Retorno esperado da função UNION:    15/01/22---01/04/22     01/05/22---15/05/22 

        let intervals_iii: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                         {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-04-01T00:00:00')},
                                         {start: new Date('2022-03-15T00:00:00'), end: new Date('2022-05-15T00:00:00')}]; 
        //Retorno esperado da função UNION:    15/01/22---15/05/22 

        let intervals_iv: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-03-01T00:00:00')},
                                        {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                        {start: new Date('2022-03-15T00:00:00'), end: new Date('2022-05-15T00:00:00')},
                                        {start: new Date('2022-04-15T00:00:00'), end: new Date('2022-05-01T00:00:00')}];
        //Retorno esperado da função UNION:    15/01/22---01/03/22     15/03/22---15/05/22  

        let intervals_v: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-05-15T00:00:00')},
                                       {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-05-01T00:00:00')},
                                       {start: new Date('2022-02-15T00:00:00'), end: new Date('2022-04-15T00:00:00')}];
        //Retorno esperado da função UNION:    15/01/22---15/05/22  

        let intervals_vi: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-03-01T00:00:00')},
                                        {start: new Date('2022-04-01T00:00:00'), end: new Date('2022-05-15T00:00:00')},
                                        {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                        {start: new Date('2022-03-15T00:00:00'), end: new Date('2022-04-15T00:00:00')},
                                        {start: new Date('2022-02-15T00:00:00'), end: new Date('2022-04-01T00:00:00')}]; 
        //Retorno esperado da função UNION:    15/01/22---15/05/22  

        let intervals_vii: Interval[] = [{start: new Date('2022-01-15T00:00:00'), end: new Date('2022-02-01T00:00:00')},
                                         {start: new Date('2022-02-01T00:00:00'), end: new Date('2022-02-15T00:00:00')},
                                         {start: new Date('2022-03-01T00:00:00'), end: new Date('2022-04-01T00:00:00')},
                                         {start: new Date('2022-03-15T00:00:00'), end: new Date('2022-04-15T00:00:00')},
                                         {start: new Date('2022-05-01T00:00:00'), end: new Date('2022-05-15T00:00:00')},
                                         {start: new Date('2022-05-15T00:00:00'), end: new Date('2022-06-01T00:00:00')},
                                         {start: new Date('2022-06-15T00:00:00'), end: new Date('2022-07-01T00:00:00')}];                                                                                                                                                                               
        //Retorno esperado da função UNION:    15/01/22---15/02/22     01/03/22---15/04/22     01/05/22---01/06/22   15/06/22---01/07/22

        let result: Interval[];
        result = this.util.union(intervals_i);
        console.log('Resultado Esperado: 15/01/22---15/02/22     15/03/22---15/04/22       01/05/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_ii);
        console.log('Resultado Esperado: 15/01/22---01/04/22     01/05/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_iii);
        console.log('Resultado Esperado: 15/01/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_iv);
        console.log('Resultado Esperado: 15/01/22---01/03/22     15/03/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_v);
        console.log('Resultado Esperado: 15/01/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_vi);
        console.log('Resultado Esperado: 15/01/22---15/05/22');
        console.log('Resultado Obtido: ', result);

        result = this.util.union(intervals_vii);
        console.log('Resultado Esperado: 15/01/22---15/02/22     01/03/22---15/04/22     01/05/22---01/06/22   15/06/22---01/07/22');
        console.log('Resultado Obtido: ', result);
      }
    }

*/