import { Component, Injector } from '@angular/core';
import { MetadadosPlano, PageReportBase, PlanoExtendido2 } from 'src/app/modules/base/page-report-base';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { Plano } from 'src/app/models/plano.model';
import { PlanoDaoService } from 'src/app/dao/plano-dao.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-forcadetrabalho-report-servidor',
  templateUrl: './forcadetrabalho-report-servidor.component.html',
  styleUrls: ['./forcadetrabalho-report-servidor.component.scss']
})

export class ForcaDeTrabalhoReportServidorComponent extends PageReportBase<Usuario, UsuarioDaoService> {
  public planoDao: PlanoDaoService;
  public parametros?: any;
  public usuario?: Usuario | null;
  public plano?: Plano | null;
  public row?: any;
  public planoRelatorio?: PlanoExtendido2;
  public buscaPorPeriodo: boolean = false;

  public descricaoPlano: string = '';
  public statusPlano: string = '';
  public horaAtual: Date = new Date();

  public opcoesGraficoPlano: ChartOptions = {
    scales: {
      xAxes: [{
        labels: ['Horas do Plano'],
        display: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'start',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold'
        },
        clamp: true,
        clip: false
      }
    },
    //events: ['click'],
    responsive: true
  };
  public opcoesGraficoDemandas: ChartOptions = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        labels: ['Horas das Demandas'],
        display: false,
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        display: false,
        align: 'start',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold'
        },
        clamp: true,
        clip: false
      }
    },
    responsive: true
  };
  public opcoesGraficoAvaliacao: ChartOptions = {
    scales: {
      xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
      }],
      yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
      }]
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true
  };

  constructor(public injector: Injector) {
    super(injector, UsuarioDaoService);
    this.planoDao = injector.get<PlanoDaoService>(PlanoDaoService);
  }

  public async report(filter: any) {
    this.parametros = Object.assign({}, this.queryParams);
    this.parametros.data_inicio = new Date(this.parametros.data_inicio);
    this.parametros.data_fim = new Date(this.parametros.data_fim);
    let result = await Promise.all([
      this.dao?.getById(this.parametros.usuario_id),
      this.planoDao?.getById(this.parametros.plano_id, ["demandas", "demandas.avaliacao", "unidade", "tipoModalidade"])
    ]);
    this.usuario = result[0];
    this.plano = result[1];
    this.buscaPorPeriodo = !(this.parametros.data_inicio.getTime() == this.plano!.data_inicio_vigencia.getTime() && this.parametros.data_fim.getTime() == this.plano!.data_fim_vigencia.getTime());
    await this.prepararParaRelatorio(this.plano!);
    return [this.planoRelatorio];
  }

  public async prepararParaRelatorio(plano: Plano){
      let $metadados: MetadadosPlano = await this.planoDao.metadadosPlano(plano!.id);
      if (!Array.isArray($metadados.demandasNaoIniciadas)) $metadados.demandasNaoIniciadas = [$metadados.demandasNaoIniciadas];
      if (!Array.isArray($metadados.demandasEmAndamento)) $metadados.demandasEmAndamento = [$metadados.demandasEmAndamento];
      let $horasUteisLiquidasPlano = $metadados.horasUteisTotais - $metadados.horasUteisAfastamento;
      let $horasLiquidasDecorridasPlano = $metadados.horasUteisDecorridas - $metadados.horasAfastamentoDecorridas;
      let $percentualHorasLiquidasDecorridas = $metadados.horasUteisTotais ? Math.round($horasLiquidasDecorridasPlano / $metadados.horasUteisTotais * 10000)/100 : 0;
      this.planoRelatorio = {
          'plano': plano!,
          'extras': $metadados,
          'descricaoPlano': (plano!.tipo_modalidade!.nome || "") + " - " + this.dao!.getDateFormatted(plano!.data_inicio_vigencia) + " a " + this.dao!.getDateFormatted(plano!.data_fim_vigencia) + " (" + plano!.unidade!.sigla + ")",
          'statusPlano': $metadados.concluido ? (plano.demandas.length ? 'CONCLUÍDO - estatísticas CONCLUSIVAS' : 'VAZIO - nenhuma demanda foi cadastrada neste Plano') : 'EM ANDAMENTO - estatísticas sujeitas a alterações',
          'horasDisponiveisPlano': $horasUteisLiquidasPlano - $horasLiquidasDecorridasPlano,
          'horasLiquidasDecorridasPlano': $horasLiquidasDecorridasPlano,
          'horasUteisLiquidasPlano': $horasUteisLiquidasPlano,
          'percentualDecorridoAfastamentos': $metadados.horasUteisAfastamento ? Math.round($metadados.horasAfastamentoDecorridas / $metadados.horasUteisAfastamento * 10000)/100 : 0,
          'percentualDecorridoPlano': $metadados.horasUteisTotais ? Math.round($metadados.horasUteisDecorridas / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualAfastamento': $metadados.horasUteisTotais ? Math.round($metadados.horasUteisAfastamento / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualHorasLiquidasDecorridas': $percentualHorasLiquidasDecorridas,
          'percentualHorasTotaisAlocadas': $metadados.horasUteisTotais ? Math.round($metadados.horasTotaisAlocadas / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualHorasNaoIniciadas': $metadados.horasUteisTotais ? Math.round($metadados.horasDemandasNaoIniciadas / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualHorasDisponiveis' : 100 - $percentualHorasLiquidasDecorridas,
          'percentualHorasEmAndamento': $metadados.horasUteisTotais ? Math.round($metadados.horasDemandasEmAndamento / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualHorasConcluidas': $metadados.horasUteisTotais ? Math.round($metadados.horasDemandasConcluidas / $metadados.horasUteisTotais * 10000)/100 : 0,
          'percentualHorasAvaliadas': $metadados.horasUteisTotais ? Math.round($metadados.horasDemandasAvaliadas / $metadados.horasUteisTotais * 10000)/100 : 0,
          'dadosGraficoPlano': this.obterDadosGrafico($metadados, 'GERAL'),
          'dadosGraficoDemandas': this.obterDadosGrafico($metadados, 'DETALHADO')
      };
  }

  public obterDadosGrafico(metadados: MetadadosPlano, tipo: 'GERAL' | 'DETALHADO' | 'AVALIACAO') {
      let result: any = null;
      let dadosPlano: ChartDataSets[] = [
        {
          label: 'Horas Totais',
          data: [metadados.horasUteisTotais],
          backgroundColor: '#6c757d'
        },
        {
          label: 'Horas Alocadas',
          data: [metadados.horasDemandasNaoIniciadas + metadados.horasDemandasEmAndamento + metadados.horasDemandasConcluidas + metadados.horasDemandasAvaliadas],
          backgroundColor: '#FF7043'
        }
      ];
      let dadosDemandas: ChartDataSets[] = [
        {
          label: 'Não-iniciadas',
          data: [metadados.horasDemandasNaoIniciadas],
          backgroundColor: '#0dcaf0',
          stack: 'Demandas'
        },
        {
          label: 'Em Andamento',
          data: [metadados.horasDemandasEmAndamento],
          backgroundColor: '#ffc107',
          stack: 'Demandas'
        },
        {
          label: 'Concluídas',
          data: [metadados.horasDemandasConcluidas],
          backgroundColor: '#af4201',
          stack: 'Demandas'
        },
        {
          label: 'Avaliadas',
          data: [metadados.horasDemandasAvaliadas],
          backgroundColor: '#af4af0',
          stack: 'Demandas'
        },
        {
          label: 'Disponível no Plano',
          data: [metadados.horasUteisTotais - metadados.horasDemandasNaoIniciadas - metadados.horasDemandasEmAndamento - metadados.horasDemandasConcluidas - metadados.horasDemandasAvaliadas],
          backgroundColor: '#6c757d',
          stack: 'Demandas'
        }
      ];
      let dadosAvaliacao: ChartDataSets[] = [
        {
          label: '',
          data: [2],
          backgroundColor: '#F5F5F5',
          stack: 'Nota'
        },
        {
          label: '',
          data: [8],
          backgroundColor: '#6c757d',
          stack: 'Nota' // #EF5350 (vermelha) ou #283593 (azul)
        }
      ];
      switch (tipo) {
        case 'GERAL':
          result = dadosPlano;
          break;

        case 'DETALHADO':
          result = dadosDemandas;
          break;
        case 'AVALIACAO':
          result = dadosAvaliacao;
          break;
      }
    return result;
  }

}
