import { ChangeDetectorRef, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarButton } from './components/toolbar/toolbar.component';
import { ListenerAllPagesService } from './listeners/listener-all-pages.service';
import { IIndexable } from './models/base.model';
import { Usuario } from './models/usuario.model';
import { AuthService } from './services/auth.service';
import { DialogService } from './services/dialog.service';
import { DialogComponent } from './services/dialog/dialog.component';
import { GlobalsService } from './services/globals.service';
import { LexicalService } from './services/lexical.service';
import { FullRoute, NavigateService } from './services/navigate.service';
import { UtilService } from './services/util.service';
import { LookupService } from './services/lookup.service';
import { EntityService } from './services/entity.service';
import { NotificacaoService } from './modules/uteis/notificacoes/notificacao.service';

export let appInjector: Injector;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: 'ID_GENERATOR_BASE',
    useFactory: (self: AppComponent, go: NavigateService, util: UtilService) => {
      return util.onlyAlphanumeric(go.getRouteUrl());
    },
    deps: [AppComponent, NavigateService, UtilService]
  }]
})
export class AppComponent {
  @ViewChild('dialogs', { read: ViewContainerRef }) dialogs?: ViewContainerRef;

  public title: string = 'petrvs';
  public error: string = '';
  public unidadeHora: string = "";

  public globals: GlobalsService;
  public cdRef: ChangeDetectorRef;
  public auth: AuthService;
  public dialog: DialogService;
  public lex: LexicalService;
  public router: Router;
  public route: ActivatedRoute;
  public go: NavigateService;
  public allPages: ListenerAllPagesService;
  public utils: UtilService;
  public lookup: LookupService;
  public entity: EntityService;
  public notificacao: NotificacaoService;
  public menuSchema: any;
  public menuToolbar: any[] = [];
  public menuContexto: any[] = [];
  public contexto: any;

  private _menu: any;
  private _menuDetectChanges: any;

  constructor(public injector: Injector) {
    /* Injector */
    appInjector = injector;
    this.globals = injector.get<GlobalsService>(GlobalsService);
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    this.auth = injector.get<AuthService>(AuthService);
    this.dialog = injector.get<DialogService>(DialogService);
    this.lex = injector.get<LexicalService>(LexicalService);
    this.router = injector.get<Router>(Router);
    this.route = injector.get<ActivatedRoute>(ActivatedRoute);
    this.go = injector.get<NavigateService>(NavigateService);
    this.allPages = injector.get<ListenerAllPagesService>(ListenerAllPagesService);
    this.utils = injector.get<UtilService>(UtilService);
    this.lookup = injector.get<LookupService>(LookupService);
    this.entity = injector.get<EntityService>(EntityService);
    this.notificacao = injector.get<NotificacaoService>(NotificacaoService);
    /* Inicializações */
    this.notificacao.heartbeat();
    this.auth.success = (usuario: Usuario, redirectTo?: FullRoute) => {
      this.go.navigate(redirectTo || { route: this.globals.initialRoute });
    };
    this.auth.fail = (error: any) => {
      this.go.navigate({ route: ['login'], params: { error: error?.error || error?.message || error } });
    };
    this.auth.leave = () => {
      this.go.navigate({ route: ['login'] });
    };
    this.lex.update = (() => {
      this.setMenuVars();
    }).bind(this);
    this.globals.refresh = () => {
      this.cdRef.detectChanges();
    };
    if (this.globals.isEmbedded && this.globals.initialRoute?.length) {
      this.go.navigate({ route: this.globals.initialRoute });
    }
    setInterval(() => {
      let hora = this.auth.unidade ? this.auth.unidadeHora : "--:--";
      if (this.unidadeHora != hora) {
        this.unidadeHora = hora;
        this.cdRef.detectChanges();
      }
    }, 1000);
    this.lex.cdRef = this.cdRef;
    //this.auth.loadGapi();
    /* Definição do menu do sistema */
    this.setMenuVars();
  }

  public setMenuVars() {
    this.menuContexto = [
      { name: "PGD" },
      { name: "Projetos" },
      { name: "Gestão" },
      { name: "Operacional" }
    ];
    this.contexto = this.menuContexto[0];
    this.menuToolbar = [
      { name: "Cadastros", permition: "MENU_CAD_ACESSO", route: ['cadastros'], id: "navbarDropdownCadastros", menu: "cadastros" },
      { name: "Gestão", permition: "MENU_GESTAO_ACESSO", route: ['gestao'], id: "navbarDropdownGestao", menu: "gestao" },
      { name: "Relatórios", permition: "MENU_REL_ACESSO", route: ['relatorios'], id: "navbarDropdownRelatorios", menu: "relatorios" },
      { name: "Configurações", permition: "MENU_CONFIG_ACESSO", route: ['configuracoes'], id: "navbarDropdownConfiguracoes", menu: "configuracoes" },
      { name: "Desenvolvedor", permition: "DEV_MENU_LOGS_ACESSO", route: ['logs'], id: "navbarDropdownLogs", menu: "logs" }
    ];
    this.menuSchema = {
      cadastros: [
        { name: this.lex.noun("Afastamento", true), permition: 'MOD_AFT', route: ['cadastros', 'afastamento'], icon: this.entity.getIcon('Afastamento') },
        { name: this.lex.noun("Cidade", true), permition: 'MOD_CID', route: ['cadastros', 'cidade'], icon: this.entity.getIcon('Cidade') },
        { name: this.lex.noun("Eixo Temático", true), permition: 'MOD_EXTM', route: ['cadastros', 'eixo-tematico'], icon: this.entity.getIcon('EixoTematico') },
        { name: this.lex.noun("Entrega", true), permition: 'MOD_ENTRG', route: ['cadastros', 'entrega'], icon: this.entity.getIcon('Entrega') },
        { name: this.lex.noun("Feriado", true), permition: 'MOD_FER', route: ['cadastros', 'feriado'], icon: this.entity.getIcon('Feriado') },
        { name: this.lex.noun("Material e Serviço", true), permition: '', route: ['cadastros', 'material-servico'], icon: this.entity.getIcon('MaterialServico') },
        { name: this.lex.noun("Tarefa", true), permition: 'MOD_DMD', route: ['cadastros', 'tarefa'], icon: this.entity.getIcon('Tarefa') },
        { name: this.lex.noun("Template", true), permition: 'MOD_TEMP', route: ['cadastros', 'template'], icon: this.entity.getIcon('Template') },
        { name: this.lex.noun("Tipo de Atividade", true), permition: 'MOD_TIPO_ATV', route: ['cadastros', 'tipo-atividade'], icon: this.entity.getIcon('TipoAtividade') },
        "-",
        { name: this.lex.noun("Atividade", true), permition: 'MOD_ATV', route: ['cadastros', 'atividade'], icon: this.entity.getIcon('Atividade') },
        { name: this.lex.noun("Tipos de Avaliação", true), permition: 'MOD_TIPO_AVAL', route: ['cadastros', 'tipo-avaliacao'], icon: this.entity.getIcon('TipoAvaliacao') },
        { name: this.lex.noun("Tipos de Documento", true), permition: 'MOD_TIPO_DOC', route: ['cadastros', 'tipo-documento'], icon: this.entity.getIcon('TipoDocumento') },
        { name: this.lex.noun("Tipos de Justificativa", true), permition: 'MOD_TIPO_JUST', route: ['cadastros', 'tipo-justificativa'], icon: this.entity.getIcon('TipoJustificativa') },
        { name: this.lex.noun("Tipos de Modalidade", true), permition: 'MOD_TIPO_MDL', route: ['cadastros', 'tipo-modalidade'], icon: this.entity.getIcon('TipoModalidade') },
        { name: this.lex.noun("Tipos de Motivo de Afastamento", true), permition: 'MOD_TIPO_MTV_AFT', route: ['cadastros', 'tipo-motivo-afastamento'], icon: this.entity.getIcon('TipoMotivoAfastamento') },
        { name: this.lex.noun("Tipos de Processo", true), permition: 'MOD_TIPO_PROC', route: ['cadastros', 'tipo-processo'], icon: this.entity.getIcon('TipoProcesso') }
      ],
      gestao: [
        { name: this.lex.noun("Adesao", true), permition: 'MOD_ADES', route: ['gestao', 'adesao'], icon: this.entity.getIcon('Adesao') },
        { name: this.lex.noun("Cadeia de valor", true), permition: 'MOD_CADV', route: ['gestao', 'cadeia-valor'], icon: this.entity.getIcon('CadeiaValor') },
        { name: this.lex.noun("Demanda", true), permition: '', route: ['gestao', 'demanda'], icon: this.entity.getIcon('Demanda') },
        { name: this.lex.noun("Planejamento Institucional", true), permition: 'MOD_PLAN_INST', route: ['gestao', 'planejamento'], icon: this.entity.getIcon('Planejamento') },
        { name: this.lex.noun("Plano de Entrega", true), permition: 'MOD_PENT', route: ['gestao', 'plano-entrega'], icon: this.entity.getIcon('PlanoEntrega') },
        { name: this.lex.noun("Plano de Trabalho", true), permition: 'MOD_PTR', route: ['gestao', 'plano-trabalho'], icon: this.entity.getIcon('Plano') },
        { name: this.lex.noun("Programa de Gestão", true), permition: 'MOD_PRGT', route: ['gestao', 'programa'], icon: this.entity.getIcon('Programa') },
        { name: this.lex.noun("Projeto", true), permition: 'MOD_PROJ', route: ['gestao', 'projeto'], icon: this.entity.getIcon('Projeto') }
      ],
      relatorios: [
        { name: "Força de Trabalho - Servidor", permition: 'MOD_PTR_CONS', route: ['relatorios', 'forca-de-trabalho', 'servidor'], icon: this.entity.getIcon('RelatorioServidor') },
        { name: "Força de Trabalho - Área", permition: 'MOD_PTR_CONS', route: ['relatorios', 'forca-de-trabalho', 'area'], icon: this.entity.getIcon('RelatorioArea') }
      ],
      configuracoes: [
        { name: "Preferências", permition: '', route: ['configuracoes', 'preferencia'], metadata: { root: true, modal: true }, icon: this.entity.getIcon('Preferencia') },
        "-",
        { name: this.lex.noun("Entidade", true), permition: 'MOD_CFG_ENTD', route: ['configuracoes', 'entidade'], icon: this.entity.getIcon('Entidade') },
        { name: this.lex.noun("Unidade", true), permition: 'MOD_CFG_UND', route: ['configuracoes', 'unidade'], icon: this.entity.getIcon('Unidade') },
        { name: this.lex.noun("Usuário", true), permition: 'MOD_CFG_USER', route: ['configuracoes', 'usuario'], icon: this.entity.getIcon('Usuario') },
        { name: "Perfis", permition: 'MOD_CFG_PERFS', route: ['configuracoes', 'perfil'], icon: this.entity.getIcon('Perfil') },
        "-",
        { name: "Sobre", permition: '', route: ['configuracoes', 'sobre'], icon: "" }
      ],
      logs: [
        { name: "Rotina de Integração", permition: '', route: ['rotinas', 'integracao'], icon: "bi bi-pencil-square" },
        "-",
        { name: "Log das Alterações", permition: '', route: ['logs', 'change'], icon: "bi bi-pencil-square" },
        { name: "Log dos Erros", permition: '', route: ['logs', 'error'], icon: "bi bi-bug" },
        { name: "Log do Tráfego", permition: '', route: ['logs', 'traffic'], icon: "bi bi-stoplights" },
        "-",
        { name: "Teste Expediente", permition: '', route: ['teste'], icon: "bi bi-check-all" },
        { name: "Teste calculaDataTempo", permition: '', route: ['teste', 'calcula-tempo'], icon: "bi bi-check-all" }
      ],
    };    
  }

  public getMenuItems(nome: string) {
    return this.menu[nome];
  }

  public onContextoSelect(item: any) {
    this.contexto = item;
  }

  public get menu(): IIndexable {
    let todos = [...this.menuSchema?.cadastros, ...this.menuSchema?.gestao, ...this.menuSchema?.relatorios, ...this.menuSchema?.configuracoes, ...this.menuSchema?.logs];
    let permitions = todos.map(m => !m.permition?.length || !this.auth.hasPermissionTo(m.permition) ? "" : m.permition);
    let menuDetectChanges = JSON.stringify(permitions);
    let itensMenu = (itens: any[]): any[] => itens.filter(x => !x.permition?.length || permitions.includes(x.permition));

    if (this._menuDetectChanges != menuDetectChanges) {
      this._menuDetectChanges = menuDetectChanges;
      this._menu = {
        cadastros: itensMenu(this.menuSchema.cadastros),
        gestao: itensMenu(this.menuSchema.gestao),
        relatorios: itensMenu(this.menuSchema.relatorios),
        configuracoes: itensMenu(this.menuSchema.configuracoes),
        logs: itensMenu(this.menuSchema.logs)
      };
    }
    return this._menu;
  }

  public ngAfterViewInit() {
    /* Container para a criação de dialogs */
    this.dialog.container = this.dialogs;
    this.dialog.cdRef = this.cdRef;
  }

  public toolbarLogin() {
    this.go.navigate({ route: ["login"] }, { modal: true });
  }

  public menuItemClass(baseClass: string, activeRoute: string[]) {
    return baseClass + (this.go.isActivePath(activeRoute) ? " fw-bold" : "");
  }

  public isButtonRunning(btn: ToolbarButton): boolean {
    return btn.running || !!btn.items?.find(x => x.running);
  }

  public buttonId(button: ToolbarButton) {
    return "button_" + this.utils.md5((button.icon || "") + (button.hint || "") + (button.label || ""));
  }

  public get unidades(): any[] {
    return this.auth.unidades || [];
  }

  public get usuarioNome(): string {
    return this.utils.shortName(this.auth.usuario?.apelido.length ? this.auth.usuario?.apelido : this.auth.usuario?.nome || "");
  }

  public get usuarioFoto(): string {
    return this.auth.usuario?.url_foto || "assets/images/profile.png";
  }

  public onCollapseContainerClick() {
    //this.auth.usuario!.config.ocultar_container_petrvs = !this.auth.usuario!.config.ocultar_container_petrvs;
    this.auth.usuarioConfig = { ocultar_container_petrvs: !this.auth.usuario!.config.ocultar_container_petrvs };
    this.cdRef.detectChanges();
  }

  public get collapseContainer(): boolean {
    return this.globals.isEmbedded && this.auth.logged && !!this.auth.usuario?.config.ocultar_container_petrvs;
  }

  public onRestoreClick(popup: DialogComponent) {
    popup.restore();
  }

  public selecionaUnidade(event: Event) {
    const key = (event.target as HTMLInputElement).value;
    this.auth.selecionaUnidade(key, this.cdRef);
  }

  public async onToolbarButtonClick(btn: ToolbarButton) {
    try {
      btn.running = true;
      this.cdRef.detectChanges();
      if (btn.onClick) await btn.onClick(btn);
    } finally {
      btn.running = false;
      this.cdRef.detectChanges();
    }
  }

  public get isMinimized(): boolean {
    return !!this.dialog.minimized?.length;
  }

  public logout() {
    this.auth.logOut();
  }

  public get isConfig(): boolean {
    return this.router.url.indexOf("/extension/options") >= 0;
  }
}
