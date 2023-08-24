import { ChangeDetectorRef, Injectable, Injector } from '@angular/core';
import { Unidade } from '../models/unidade.model';
import { Usuario, UsuarioConfig } from '../models/usuario.model';
import { DialogService } from './dialog.service';
import { GlobalsService } from './globals.service';
import { GoogleApiService } from './google-api.service';
import { FullRoute, NavigateService } from './navigate.service';
import { ServerService } from './server.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from './calendar.service';
import { LexicalService } from './lexical.service';
import { UtilService } from './util.service';
import { UsuarioDaoService } from '../dao/usuario-dao.service';
import { IIndexable } from '../models/base.model';
import { Entidade } from '../models/entidade.model';
import { UnidadeDaoService } from '../dao/unidade-dao.service';
import { NotificacaoService } from '../modules/uteis/notificacoes/notificacao.service';
import { AppComponent } from '../app.component';
import { IntegranteAtribuicao } from '../models/unidade-integrante-atribuicao.model';

export type AuthKind = "USERPASSWORD" | "GOOGLE" | "FIREBASE" | "DPRFSEGURANCA" | "SESSION" | "SUPER";
export type Permission = string | (string | string[])[];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public kind?: AuthKind;
  public logged: boolean = false;
  public usuario?: Usuario;
  public capacidades: string[] = [];
  public entidade?: Entidade;
  public unidade?: Unidade;
  public unidades?: Unidade[];
  public app?: AppComponent;

  private _apiToken: string | undefined = undefined;
  private _logging: boolean = false;
  public get logging(): boolean {
    return this._logging;
  };
  public set logging(value: boolean) {
    if (value != this._logging) {
      this._logging = value;
      if (!this.gb.isEmbedded) {
        if (value) {
          this.dialogs.showSppinerOverlay("Logando . . .", 60000);
        } else {
          this.dialogs.closeSppinerOverlay();
        }
      }
    }
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public get apiToken(): string | undefined {
    //@ts-ignore
    return typeof MD_MULTIAGENCIA_PETRVS_SESSION_TOKEN != "undefined" ? MD_MULTIAGENCIA_PETRVS_SESSION_TOKEN : this._apiToken;
  }

  private _server?: ServerService;
  public get server(): ServerService { this._server = this._server || this.injector.get<ServerService>(ServerService); return this._server };
  private _lex?: LexicalService;
  public get lex(): LexicalService { this._lex = this._lex || this.injector.get<LexicalService>(LexicalService); return this._lex };
  private _gb?: GlobalsService;
  public get gb(): GlobalsService { this._gb = this._gb || this.injector.get<GlobalsService>(GlobalsService); return this._gb };
  private _util?: UtilService;
  public get util(): UtilService { this._util = this._util || this.injector.get<UtilService>(UtilService); return this._util }
  private _go?: NavigateService;
  public get go(): NavigateService { this._go = this._go || this.injector.get<NavigateService>(NavigateService); return this._go }
  private _googleApi?: GoogleApiService;
  public get googleApi(): GoogleApiService { this._googleApi = this._googleApi || this.injector.get<GoogleApiService>(GoogleApiService); return this._googleApi };
  private _dialogs?: DialogService;
  public get dialogs(): DialogService { this._dialogs = this._dialogs || this.injector.get<DialogService>(DialogService); return this._dialogs };
  private _route?: ActivatedRoute;
  public get route(): ActivatedRoute { this._route = this._route || this.injector.get<ActivatedRoute>(ActivatedRoute); return this._route };
  private _calendar?: CalendarService;
  public get calendar(): CalendarService { this._calendar = this._calendar || this.injector.get<CalendarService>(CalendarService); return this._calendar };
  private _usuarioDao?: UsuarioDaoService;
  public get usuarioDao(): UsuarioDaoService { this._usuarioDao = this._usuarioDao || this.injector.get<UsuarioDaoService>(UsuarioDaoService); return this._usuarioDao };
  private _unidadeDao?: UnidadeDaoService;
  public get unidadeDao(): UnidadeDaoService { this._unidadeDao = this._unidadeDao || this.injector.get<UnidadeDaoService>(UnidadeDaoService); return this._unidadeDao };
  private _notificacao?: NotificacaoService;
  public get notificacao(): NotificacaoService { this._notificacao = this._notificacao || this.injector.get<NotificacaoService>(NotificacaoService); return this._notificacao };

  public set usuarioConfig(value: IIndexable) {
    this.updateUsuarioConfig(this.usuario!.id, value);
  }
  public get usuarioConfig(): IIndexable {
    const defaults = new UsuarioConfig();
    return this.util.assign(defaults, this.usuario?.config || {});
  }

  constructor(public injector: Injector) { }

  public success(usuario: Usuario, redirectTo?: FullRoute) {
    this.app!.go.navigate(redirectTo || { route: this.app!.globals.initialRoute });
  };

  public fail(error: any) {
    this.app!.go.navigate({ route: ['login'], params: { error: error?.error || error?.message || error } });
  };

  public leave() {
    this.app!.go.navigate({ route: ['login'] });
  };

  public get unidadeHora(): string {
    return moment(this.hora).format("HH:mm");
  }

  public get hora(): Date {
    let dataHora = new Date();
    if (this.unidade?.cidade) {
      const delta = this.gb.horarioDelta.servidor.getTime() - this.gb.horarioDelta.local.getTime();
      const utc = (this.unidade.cidade.timezone + Math.abs(this.unidade.cidade.timezone)) * 60 * 60 * 1000;
      dataHora.setTime(dataHora.getTime() + utc + delta);
    }
    return dataHora;
  }

  public registerPopupLoginResultListener() {
    window.addEventListener("message", (event) => {
      if (event?.data == "COMPLETAR_LOGIN") {
        this.dialogs.closeSppinerOverlay();
        this.authSession().then(success => {
          if (success) this.success!(this.usuario!, { route: ["home"] });
        });
      }
    }, false);
  }

  public updateUsuarioConfig(usuarioId: string, value: IIndexable) {
    if (this.usuario?.id == usuarioId) this.usuario!.config = this.util.assign(this.usuario!.config, value);
    return this.usuarioDao.updateJson(usuarioId, 'config', value);
  }

  public updateUsuarioNotificacoes(usuarioId: string, value: IIndexable) {
    if (this.usuario?.id == usuarioId) this.usuario!.notificacoes = this.util.assign(this.usuario!.notificacoes, value);
    return this.usuarioDao.updateJson(usuarioId, 'notificacoes', value);
  }

  public registerEntity(entity: any) {
    if (entity) {
      this.entidade = Object.assign(new Entidade(), entity) as Entidade;
      this.lex.loadVocabulary(this.entidade.nomenclatura || []);
    } else {
      this.entidade = undefined;
    }
  }

  public registerUser(user: any, token?: string) {
    if (user) {
      this.usuario = Object.assign(new Usuario(), user) as Usuario;
      this.capacidades = this.usuario?.perfil?.capacidades?.filter(x => x.deleted_at == null).map(x => x.tipo_capacidade?.codigo || "") || [];
      this.kind = this.kind;
      this.logged = true;
      this.unidades = this.usuario?.areas_trabalho?.map(x => x.unidade!) || [];
      this.unidade = this.usuario?.areas_trabalho?.find(x => x.atribuicoes?.find(y => y.atribuicao == "LOTADO"))?.unidade;
      if (this.unidade) this.calendar.loadFeriadosCadastrados(this.unidade.id);
      if (token?.length) localStorage.setItem("petrvs_api_token", token);
      this.app!.onContextoSelect(this.app!.menuContexto.find(x => x.key == this.usuarioConfig.menu_contexto) || this.app!.menuContexto[0]);
      this.notificacao.updateNaoLidas();
    } else {
      this.usuario = undefined;
      this.kind = undefined;
      this.logged = false;
      this.unidades = undefined;
    }
    this.logging = false;
  }

  /*
  Checa se tem permissão
  @param string|(string|string[])[] permission Permissão que se deseja testar, deve seguir o seguinte padrão:
    - string: será testado se o código existe nas capacidades do perfil do usuario
    - (string|string[])[]: o primeiro nível será considerado como OR, e o segundo nível como AND, exemplo:
      ["Codigo1", ["Codigo2", "codigo3"]] => Codigo1 ou [codigo2 e codigo3]
  @return boolean
  */
  public hasPermissionTo(permission: Permission) {
    const permissions = typeof permission == "string" ? [permission] : permission;
    for (let permission of permissions) {
      if ((typeof permission == "string" && this.capacidades.includes(permission)) ||
        (Array.isArray(permission) && permission.reduce((a: boolean, v: string) => a && this.capacidades.includes(v), true))) {
        return true;
      }
    }
    return false;
  }

  public get routerTo(): any {
    let routerTo = this.route.snapshot?.queryParams?.redirectTo ? JSON.parse(this.route.snapshot?.queryParams?.redirectTo) : { route: this.gb.initialRoute };
    if (routerTo.route[0] == "login") routerTo = { route: this.gb.initialRoute };
    return routerTo;
  }

  /********************************************************************************************
  Rotinas para autenticar (cada entidade poderá criar a sua, caso as que estejam aqui não atendam). 
  Serve como proxy para a chamada do método logIn, que é quem realmente autentica o usuário. As 
  rotinas atuais estão consideram que a entidade utilizada pelo sistema será a configurada no .env
  do back-end, mas caso haja a necessidade de criar um combobox no login para selecionar a entidade
  isso poderá ser feito sem problema algum, somente sendo necessário criar um novo método para receber
  tambem a informação da entidade selecionada ao invés de utilizar a do GlobalService.ENTIDADE;
  *********************************************************************************************/

  public authAzure() {
    this.dialogs.showSppinerOverlay("Logando...", 300000);
    this.go.openPopup(this.gb.servidorURL + "/web/login-azure-redirect?entidade=" + encodeURI(this.gb.ENTIDADE));
    //this.go.openPopup(this.gb.servidorURL + "/web/login-azure-simulate-callback");
  }

  public authUserPassword(user: string, password: string, redirectTo?: FullRoute) {
    return this.logIn("USERPASSWORD", "login-user-password", {
      entidade: this.gb.ENTIDADE,
      email: user,
      password: password
    }, redirectTo);
  }

  public authDprfSeguranca(cpf: string, password: string, token: string, redirectTo?: FullRoute) {
    return this.logIn("DPRFSEGURANCA", "login-institucional", {
      entidade: this.gb.ENTIDADE,
      cpf: cpf,
      senha: password,
      token: token
    }, redirectTo);
  }

  public authGoogle(tokenId: string, redirectTo?: FullRoute) {
    //this.googleApi.tokenId = tokenId;
    return this.logIn("GOOGLE", "login-google-token", {
      entidade: this.gb.ENTIDADE,
      token: tokenId
    }, redirectTo);
  }

  public authSession(): Promise<boolean> {
    this._apiToken = localStorage.getItem("petrvs_api_token") || undefined;
    return this.logIn("SESSION", "login-session", {});
  }

  private logIn(kind: AuthKind, route: string, params: any, redirectTo?: FullRoute): Promise<boolean> {
    let deviceName = this.gb.isExtension ? "EXTENSION" : this.gb.isSuperModule ? "SUPER" : "BROWSER";
    let login = (): Promise<boolean> => {
      return this.server.post((this.gb.isEmbedded ? "api/" : "web/") + route, { ...params, device_name: deviceName }).toPromise().then(response => {
        if (response?.error)
          throw new Error(response?.error);
        this.kind = response?.kind || kind;
        this.apiToken = response.token;
        this.registerEntity(response.entidade);
        this.registerUser(response.usuario, this.apiToken);
        if (response.horario_servidor?.length) {
          this.gb.horarioDelta.servidor = UtilService.iso8601ToDate(response.horario_servidor);
          this.gb.horarioDelta.local = new Date();
        }
        if (this.success && kind != "SESSION") this.success(this.usuario!, redirectTo);
        if (this.gb.refresh) this.gb.refresh();
        return true;
      }).catch(error => {
        this.registerUser(undefined);
        if (this.fail && kind != "SESSION") this.fail(error?.message || error?.error || error.toString());
        if (this.gb.refresh) this.gb.refresh();
        return false;
      });
    };
    this.logging = true;
    if (this.gb.isEmbedded) {
      return login();
    } else {
      return this.server.get('sanctum/csrf-cookie').toPromise().then(login);
    }
  }

  public logOut() {
    this.logging = true;
    this.server.get((this.gb.isEmbedded ? "api/" : "web/") + "logout").toPromise().then(response => {
      const clearLogin = () => {
        localStorage.removeItem("petrvs_api_token");
        this.registerUser(undefined);
        if (this.leave) this.leave();
        if (this.gb.refresh) this.gb.refresh();
      }
      /* Garante logout do Google */
      if (this.gb.hasGoogleLogin && this.gb.loginGoogleClientId?.length) {
        this.googleApi.initialize().then(googleAuth => {
          if (this.kind == "GOOGLE") {
            this.googleApi.signOut().then(clearLogin);
          }
        });
      } else {
        clearLogin();
      }
    }).finally(() => this.logging = false);
  }

  public selecionaUnidade(id: string, cdRef?: ChangeDetectorRef) {
    if (this.unidades?.find(x => x.id == id)) {
      this.unidade = undefined;
      cdRef?.detectChanges();
      return this.server.post("api/seleciona-unidade", { unidade_id: id }).toPromise().then(response => {
        if (response?.unidade) {
          this.unidade = Object.assign(new Unidade(), response?.unidade) as Unidade;
          //if(!this.unidades?.find(x => x.id == this.unidade!.id)) this.unidades?.push(this.unidade);
          this.calendar.loadFeriadosCadastrados(this.unidade.id);
          if (this.unidade.entidade) this.lex.loadVocabulary(this.unidade.entidade.nomenclatura || []);
        }
        cdRef?.detectChanges();
        return this.unidade;
      }).catch(error => {
        this.dialogs.alert("Erro", "Não foi possível selecionar a unidade!");
        return undefined;
      });
    } else {
      return Promise.resolve(undefined);
    }
  }

  public hasLotacao(unidadeId: string) {
    return this.usuario!.areas_trabalho?.find(x => x.unidade_id == unidadeId);
  }

  /**
   * Informa se o usuário logado é gestor(titular ou substituto) da unidade repassada como parâmetro. Se nenhuma unidade for repassada, 
   * será adotada a unidade selecionada pelo servidor na homepage.
   * @param pUnidade 
   * @returns 
   */
  public isGestorUnidade(pUnidade: Unidade | string | null = null): boolean {
    /*       let unidade = pUnidade == null ? this.unidade! : typeof pUnidade == "string" ? this.unidades?.find(x => x.id == pUnidade) : pUnidade;
          return !!unidade && [unidade.gestor_substituto_id, unidade.gestor_id].includes(this.usuario!.id);  */
    let unidade = pUnidade == null ? this.unidade! : typeof pUnidade == "string" ? [this.usuario!.gerencia_titular?.unidade, ...(this.usuario!.gerencias_substitutas!.map(x => x.unidade))].find(x => x && x.id == pUnidade) : pUnidade;
    return !!unidade && [unidade.gestor_substituto?.usuario_id, unidade.gestor?.usuario_id].includes(this.usuario!.id);
  }

  /**
   * Informa se o usuário logado é gestor de alguma das suas lotações.
   * @returns 
   */
  public isGestorAlgumaLotacao(): boolean {
    return !!this.unidades?.filter(x => this.isGestorUnidade(x)).length;
  }

  /**
   * Retorna a unidade onde o usuário é gestor
   * @returns 
   */
  public unidadeGestor(): Unidade | undefined {
    return this.unidades?.find(x => this.isGestorUnidade(x));
  }

  /**
   * Informa se a unidade repassada como parâmetro é a lotação do usuário logado. Se nenhuma unidade for repassada, 
   * será adotada a unidade selecionada pelo servidor na homepage.
   * @param pUnidade 
   * @returns 
   */
  public isLotacaoUsuario(pUnidade: Unidade | null = null): boolean {
    let unidade = pUnidade || this.unidade!;
    let lotacao = this.usuario?.areas_trabalho?.find(x => x.atribuicoes?.find(y => y.atribuicao == "LOTADO"))?.unidade; 
    return lotacao?.id == unidade.id;
  }

  /**
   * Informa se o usuário logado possui determinada atribuição para uma unidade específica dentre as suas unidades-integrante.
   * @param atribuicao 
   * @param unidade_id 
   */
  public isIntegrante(atribuicao: IntegranteAtribuicao, unidade_id: string): boolean {
    let $vinculo = this.usuario?.unidades_integrante?.find(x => x.unidade_id == unidade_id);
    return !!$vinculo && $vinculo.atribuicoes.map(a => a.atribuicao).includes(atribuicao);
  }

  /**
   * Informa se o usuário logado tem como área de trabalho alguma das unidades pertencentes à linha hierárquica ascendente da unidade 
   * repassada como parâmetro.
   * @param unidade 
   * @returns 
   */
  public isLotadoNaLinhaAscendente(unidade: Unidade): boolean {
    let result = false;
    this.usuario!.areas_trabalho?.map(x => x.unidade_id).forEach(x => { if (unidade.path.split('/').slice(1).includes(x)) result = true; });
    return result;
  }

  /**
   * Informa se o usuário logado é gestor (titular ou substituto) de alguma das unidades pertencentes à linha hierárquica ascendente da unidade 
   * repassada como parâmetro.
   * @param unidade 
   * @returns 
   */
  public isGestorLinhaAscendente(unidade: Unidade): boolean {
    let result = false;
    let $ids_unidades = this.usuario?.gerencias_substitutas?.map(x => x.unidade_id) || [];
    if(this.usuario?.gerencia_titular?.unidade?.id) $ids_unidades.push(this.usuario?.gerencia_titular!.unidade_id);
    $ids_unidades.forEach(x => { if (!!unidade.path && unidade.path.split('/').slice(1).includes(x)) result = true; });
    return false;
  }

}
