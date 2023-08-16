import { Component, Injector } from '@angular/core';
import { MetadadosPlano, PageReportBase, PlanoExtendido } from 'src/app/modules/base/page-report-base';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { PlanoTrabalho } from 'src/app/models/plano-trabalho.model';
import { PlanoTrabalhoDaoService } from 'src/app/dao/plano-trabalho-dao.service';
import { ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-forcadetrabalho-report-servidor',
  templateUrl: './forcadetrabalho-report-servidor.component.html',
  styleUrls: ['./forcadetrabalho-report-servidor.component.scss']
})

export class ForcaDeTrabalhoReportServidorComponent extends PageReportBase<Usuario, UsuarioDaoService> {
  public planoDao: PlanoTrabalhoDaoService;
  public parametros?: any;
  public usuario?: Usuario | null;
  public plano?: PlanoTrabalho | null;
  public row?: any;
  public planoRelatorio?: PlanoExtendido;
  public buscaPorPeriodo: boolean = false;

  public descricaoPlano: string = '';
  public statusPlano: string = '';
  public horaAtual: Date = new Date();
  public pluginsGrafico = [ChartDataLabels];
  public labelsX: string[] = [];

  public opcoesGraficoPeriodoComparativo: ChartOptions = {
    
/*     title: {
      // namespace para a configuração do título do gráfico
      display: true,
      text: 'Comparativo de Horas',
      position: "bottom"
    }, */
    tooltips: {
      // namespace para a configuração das dicas de ferramentas
      enabled: false
    },
    scales: {
      xAxes: [{
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
        display: true,
        align: 'start',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold'
        },
        clamp: false,
        clip: false
      }
    },
    layout: {
      padding: 0
    },
    legend: {
      //namespace para configuração das opções da legenda
      display: true,
      position: 'bottom'
    },
    //events: ['click'],
    responsive: true,
    maintainAspectRatio: false
  };
  public opcoesGraficoPeriodoPizza: ChartOptions = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        labels: ['Horas ' + this.lex.translate('das Atividades')],
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
  public opcoesGraficoPeriodoDetalhado: ChartOptions = {
/*     title: {
      // namespace para a configuração do título do gráfico
      display: true,
      text: 'Composição das Atividades',
      position: "bottom"
    }, */
    scales: {
      xAxes: [{
        display: true,
        stacked: true
      }],
      yAxes: [{
        display: false,
        stacked: true
      }]
    },
    plugins: {
      datalabels: {
        display: true,
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
  public opcoesGraficoPlano: ChartOptions = {
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
/*       scaleLabel:{
        display: true,
        labelString: 'scalelabel'
      }, */
      xAxes: [{
        display: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        display: true,
        align: 'start',
        anchor: 'end',
        color: 'black',
        font: {
          weight: 'bold'
        },
        clamp: false,
        clip: false
      }
    },
    //events: ['click'],
    responsive: true
  };
  public opcoesGraficoAtividades: ChartOptions = {
    scales: {
      xAxes: [{
        display: true,
        stacked: true
      }],
      yAxes: [{
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
    this.planoDao = injector.get<PlanoTrabalhoDaoService>(PlanoTrabalhoDaoService);
  }

  public async report(filter: any) {
    this.parametros = Object.assign({}, this.queryParams);
    this.parametros.data_inicio = this.parametros.data_inicio ? new Date(this.parametros.data_inicio) : null;
    this.parametros.data_fim = this.parametros.data_fim ? new Date(this.parametros.data_fim) : null;
    let result = await Promise.all([
      this.dao?.getById(this.parametros.usuario_id),
      this.planoDao?.getById(this.parametros.plano_trabalho_id, ["atividades", "atividades.avaliacao", "unidade", "tipoModalidade"])
    ]);
    this.usuario = result[0];
    this.plano = result[1];
    this.buscaPorPeriodo = this.parametros.data_inicio || this.parametros.data_fim;
    await this.prepararParaRelatorio(this.plano!);
    return [this.planoRelatorio];
  }

  public async prepararParaRelatorio(plano: PlanoTrabalho){
      if(this.buscaPorPeriodo){
        this.parametros.data_inicio = this.parametros.data_inicio || this.plano?.data_inicio; 
        this.parametros.data_fim = this.parametros.data_fim || this.util.minDate(new Date(), this.plano?.data_fim); 
      }
      let $metadados: MetadadosPlano = await this.planoDao.metadadosPlano(plano!.id, this.buscaPorPeriodo ? this.parametros.data_inicio : null, this.buscaPorPeriodo ? this.parametros.data_fim : null);
      if (!Array.isArray($metadados.atividadesNaoIniciadas)) $metadados.atividadesNaoIniciadas = [$metadados.atividadesNaoIniciadas];
      if (!Array.isArray($metadados.atividadesEmAndamento)) $metadados.atividadesEmAndamento = [$metadados.atividadesEmAndamento];
      let $horasUteisLiquidasPlano = $metadados.horasUteisTotais - $metadados.horasUteisAfastamento;
      let $percentualAfastamento = $metadados.horasUteisTotais ? Math.round($metadados.horasUteisAfastamento / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualDecorridoPlano = $metadados.horasUteisTotais ? Math.round($metadados.horasUteisDecorridas / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualDecorridoAfastamentos = $metadados.horasUteisAfastamento ? Math.round($metadados.horasAfastamentoDecorridas / $metadados.horasUteisAfastamento * 10000)/100 : 0;
      let $percentualHorasAvaliadas = $metadados.horasUteisTotais ? Math.round($metadados.horasAtividadesAvaliadas / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualHorasConcluidas = $metadados.horasUteisTotais ? Math.round($metadados.horasAtividadesConcluidas / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualHorasEmAndamento = $metadados.horasUteisTotais ? Math.round($metadados.horasAtividadesEmAndamento / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualHorasNaoIniciadas = $metadados.horasUteisTotais ? Math.round($metadados.horasAtividadesNaoIniciadas / $metadados.horasUteisTotais * 10000)/100 : 0;
      let $percentualHorasTotaisAlocadas = $metadados.horasUteisTotais ? Math.round($metadados.horasTotaisAlocadas / $metadados.horasUteisTotais * 10000)/100 : 0;
      this.planoRelatorio = {
          'plano': plano!,
          'extras': $metadados,
          'descricaoPlano': (plano!.tipo_modalidade!.nome || "") + " - " + this.dao!.getDateFormatted(plano!.data_inicio) + " a " + this.dao!.getDateFormatted(plano!.data_fim) + " (" + plano!.unidade!.sigla + ")",
          'statusPlano': $metadados.concluido ? (plano.atividades.length ? 'CONCLUÍDO - estatísticas CONCLUSIVAS' : 'VAZIO - nenhuma atividade foi cadastrada neste Plano') : 'EM ANDAMENTO - estatísticas sujeitas a alterações',
          'horasDisponiveisPlano': $horasUteisLiquidasPlano - $metadados.horasUteisDecorridas,
          'horasUteisLiquidasPlano': $horasUteisLiquidasPlano,
          'horasAfastamentoTranscorrer': $metadados.horasUteisAfastamento - $metadados.horasAfastamentoDecorridas,
          'percentualDecorridoAfastamentos': $percentualDecorridoAfastamentos,
          'percentualDecorridoPlano': $percentualDecorridoPlano,
          'percentualAfastamento': $percentualAfastamento,
          'percentualHorasAfastamentoTranscorrer': Math.round(100 - $percentualDecorridoAfastamentos),
          'percentualHorasTotaisAlocadas': $percentualHorasTotaisAlocadas,
          'percentualHorasNaoIniciadas': $percentualHorasNaoIniciadas,
          'percentualHorasDisponiveis' : Math.round(100 - $percentualDecorridoPlano),
          'percentualHorasEmAndamento': $percentualHorasEmAndamento,
          'percentualHorasConcluidas': $percentualHorasConcluidas,
          'percentualHorasAvaliadas': $percentualHorasAvaliadas,
          'percentualHorasUteisLiquidasPlano': Math.round(100 - $percentualAfastamento),
          'dadosGraficoPlano': this.obterDadosGrafico($metadados, 'GERAL'),
          'dadosGraficoAtividades': this.obterDadosGrafico($metadados, 'DETALHADO'),
          'dadosGraficoPeriodoComparativo': this.obterDadosGrafico($metadados, 'PERIODO_COMPARATIVO'),
          'dadosGraficoPeriodoPizza': this.obterDadosGrafico($metadados, 'PERIODO_PIZZA'),
          'dadosGraficoPeriodoDetalhado': this.obterDadosGrafico($metadados, 'PERIODO_DETALHADO'),
      };
  }

  public obterDadosGrafico(metadados: MetadadosPlano, tipo: 'GERAL' | 'DETALHADO' | 'AVALIACAO' | 'PERIODO_COMPARATIVO' | 'PERIODO_PIZZA' | 'PERIODO_DETALHADO') {
      let result: any = null;
      let dadosPlano: ChartData = {
        datasets: [
          {
            label: 'Totais',              // será exibido na legenda, se estivel visível
            data: [Math.round((metadados.horasUteisTotais - metadados.horasUteisAfastamento) * 100)/100],  //HULP
            backgroundColor: '#6c757d'
          },
          {
            label: 'Alocadas',            // será exibido na legenda, se estivel visível
            data: [Math.round(metadados.horasTotaisAlocadas * 100)/100],  //HTA
            backgroundColor: '#FF7043'
          }
        ]
      };
      let dadosAtividades: ChartData = {
        datasets: [
          {
            label: 'NÃO INIC',
            data: [metadados.horasAtividadesNaoIniciadas],
            backgroundColor: '#0dcaf0',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'EM ANDAM',
            data: [metadados.horasAtividadesEmAndamento],
            backgroundColor: '#ffc107',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'CONCL',
            data: [metadados.horasAtividadesConcluidas],
            backgroundColor: '#af4201',
            stack: this.lex.translate('Atividades')
          },
          /*{
            label: 'AVAL',
            data: [metadados.horasAtividadesAvaliadas],
            backgroundColor: '#af4af0',
            stack: this.lex.translate('Atividades')
          },*/
          {
            label: 'DISP',
            data: [metadados.horasUteisTotais - metadados.horasUteisAfastamento - metadados.horasUteisDecorridas],
            backgroundColor: '#6c757d',
            stack: this.lex.translate('Atividades')
          }
        ]
      };
      let dadosAvaliacao: ChartData = {
        datasets: [
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
        ]
      };
      let dadosPeriodoComparativo: ChartData = {
        datasets: [
          {
            label: 'Previsto',                  // será exibido na legenda, se estivel visível
            data: [metadados.noPeriodo.tempoTotalPrevistoNoPeriodo.toFixed(2)],
            backgroundColor: '#6c757d'
          },
          {
            label: 'Realizado',                 // será exibido na legenda, se estivel visível
            data: [metadados.noPeriodo.tempoTotalRealizadoNoPeriodo.toFixed(2)],
            backgroundColor: '#FF7043'
          }
        ]
      };
      let dadosPeriodoPizza: ChartData = {
        datasets: [
          {
            label: 'NÃO INIC',
            data: [Math.round(metadados.horasAtividadesNaoIniciadas * 100)/100],
            backgroundColor: '#0dcaf0',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'EM ANDAM',
            data: [Math.round(metadados.horasAtividadesEmAndamento * 100)/100],
            backgroundColor: '#ffc107',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'CONCL',
            data: [Math.round(metadados.horasAtividadesConcluidas * 100)/100],
            backgroundColor: '#af4201',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'AVAL',
            data: [Math.round(metadados.horasAtividadesAvaliadas * 100)/100],
            backgroundColor: '#af4af0',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'DISP',
            data: [Math.round((metadados.horasUteisTotais - metadados.horasUteisAfastamento - metadados.horasUteisDecorridas) * 100)/100],
            backgroundColor: '#6c757d',
            stack: this.lex.translate('Atividades')
          }
        ]
      };
      let dadosPeriodoDetalhado: ChartData = {
        datasets: [
          {
            label: 'Aprov',
            data: [metadados.noPeriodo.tempoTrabalhadoHomologado.toFixed(2)],
            backgroundColor: '#0dcaf0',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'Reprov',
            data: [metadados.noPeriodo.tempoTrabalhadoNaoHomologado.toFixed(2)],
            backgroundColor: '#f44336',
            stack: this.lex.translate('Atividades')
          },
          {
            label: 'Concl',
            data: [metadados.noPeriodo.tempoDespendidoSoConcluidas.toFixed(2)],
            backgroundColor: '#af4201',
            stack: this.lex.translate('Atividades')
          }
        ]
      };
      switch (tipo) {
        case 'GERAL': result = dadosPlano; break;
        case 'DETALHADO': result = dadosAtividades; break;
        case 'AVALIACAO': result = dadosAvaliacao; break;
        case 'PERIODO_COMPARATIVO': result = dadosPeriodoComparativo; break;
        case 'PERIODO_PIZZA': result = dadosPeriodoPizza; break;
        case 'PERIODO_DETALHADO': result = dadosPeriodoDetalhado; break;
      }
    return result;
  }

}
