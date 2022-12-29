import { Component, Injector, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioDaoService, UsuarioDashboard } from 'src/app/dao/usuario-dao.service';
import { AtividadeDaoService } from 'src/app/dao/atividade-dao.service';
import { LexicalService } from 'src/app/services/lexical.service';
import { NavigateService } from 'src/app/services/navigate.service';
import { ListenerAllPagesService } from 'src/app/listeners/listener-all-pages.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UtilService } from 'src/app/services/util.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formSearch: FormGroup;
  public dashUsuario: UsuarioDashboard = {
    planos: [{
      data_inicio_vigencia: new Date,
      data_fim_vigencia: new Date,
      horas_alocadas: 0,
      horas_consolidadas: 0,
      progresso: 0,
      total_horas: 0
    }],
    demandas: {
      atrasadas: 0,
      avaliadas: 0,
      concluidas: 0,
      media_avaliacoes: 0,
      nao_concluidas: 0,
      nao_iniciadas: 0,
      total_demandas: 0
    },
    horas_afastamentos: 0
  };

  public data_inicial: Date;
  public data_final: Date;

  constructor(
    public auth: AuthService,
    public utils: UtilService,
    public usuarioDao: UsuarioDaoService,
    public unidadeDao: UnidadeDaoService,
    public atividadeDao: AtividadeDaoService,
    public injector: Injector,
    public lex: LexicalService,
    public go: NavigateService,
    public gb: GlobalsService,
    public allPages: ListenerAllPagesService
  ) {
    const hoje = new Date()
    const lastDayCurrentMonth = this.getLastDayOfMonth(
      hoje.getFullYear(),
      hoje.getMonth(),
    );

    this.data_inicial = new Date(hoje.getFullYear(), hoje.getMonth(), 1)
    this.data_final = new Date(lastDayCurrentMonth)

    this.formSearch = new FormGroup({
      data_inicial: new FormControl(this.data_inicial),
      data_final: new FormControl(this.data_final)
    })
  }

  ngOnInit(): void {
    Chart.plugins.register(ChartDataLabels);
    if (this.gb.isEmbedded) {
      this.allPages.visibilidadeMenuSei(!this.auth.usuario!.config.ocultar_menu_sei);
    }
  }

  async ngAfterViewInit() {
    this.filtrarDemandas();
  }

  async filtrarDemandas() {
    this.data_inicial = this.formSearch.controls['data_inicial'].value;
    this.data_final = this.formSearch.controls['data_final'].value;

    const dadosUsuario = await this.usuarioDao.dashboard(this.data_inicial, this.data_final, this.auth.usuario!.id)
    if (dadosUsuario) this.dashUsuario = dadosUsuario;
  }

  public mensagemSaudacao() {
    const hora = parseInt(this.auth.unidadeHora.replace(":", ""));
    const apelido = this.auth.usuario?.apelido;
    const mail = this.auth.usuario?.email;
    return hora < 1200 ? "Bom dia, " + apelido : hora < 1800 ? "Boa tarde, " + apelido : "Boa noite, " + apelido;
  }

  public emailUsuario() {
    const mail = this.auth.usuario?.email;
    return mail;
  }

  public tokenGAPI() {
    this.auth.googleApi.getAccessToken().then(res => {
      const sei = res || ''
    });
  }

  getLastDayOfMonth(year: number, month: number) {
    return new Date(year, month + 1, 0);
  }

}

