import { Component, Injector, ViewChild } from '@angular/core';
import { MetadadosUnidade, PageReportBase } from 'src/app/modules/base/page-report-base';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioDaoService } from 'src/app/dao/usuario-dao.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { UnidadeDaoService } from 'src/app/dao/unidade-dao.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-forcadetrabalho-report-area',
  templateUrl: './forcadetrabalho-report-area.component.html',
  styleUrls: ['./forcadetrabalho-report-area.component.scss']
})

export class ForcaDeTrabalhoReportAreaComponent extends PageReportBase<Usuario, UsuarioDaoService> {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public unidadeDao: UnidadeDaoService;
  public parametros?: any;
  public row?: any;
  public horaAtual: Date = new Date();

  public tipoGrafico: ChartType = 'bar';
  public labelsX: Array<string> = [];
  public opcoesGraficoPizzaGeral: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
/*         formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        }, */
      },
    }
  };
  public opcoesGraficoPizzaDetalhado: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {}
    }
  };
  public opcoesGraficoBarrasHoras: ChartOptions = {
    scales: {
      xAxes: [{
        labels: ['Total de Horas ' + this.lex.translate('Unidades')],
        display: false,
        //stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        //stacked: true,
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
  public opcoesGraficoBarrasAtividades: ChartOptions = {
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        labels: ['Total de ' + this.lex.translate('Atividades') + this.lex.translate('Unidades')],
        display: false,
        stacked: true,
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
/*   public opcoesGraficoAvaliacao: ChartOptions = {
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
  }; */

/*   public labelsGraficoPizza: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = []; */

  constructor(public injector: Injector) {
    super(injector, UsuarioDaoService);
    this.unidadeDao = injector.get<UnidadeDaoService>(UnidadeDaoService);
  }

  public async report(filter: any) {
    this.parametros = Object.assign({}, filter);
    let result = await this.unidadeDao.metadadosArea(this.parametros.unidade_id, this.parametros.programa_id);

    result['dadosArea']['percentualHorasNaoIniciadas'] = Math.round(result['dadosArea']['percentualHorasNaoIniciadas'] * 10000)/100;
    result['dadosArea']['percentualHorasEmAndamento'] = Math.round(result['dadosArea']['percentualHorasEmAndamento'] * 10000)/100;
    result['dadosArea']['percentualHorasConcluidas'] = Math.round(result['dadosArea']['percentualHorasConcluidas'] * 10000)/100;
    result['dadosArea']['percentualHorasAvaliadas'] = Math.round(result['dadosArea']['percentualHorasAvaliadas'] * 10000)/100;
    result['dadosArea']['percentualHorasTotaisAlocadas'] = Math.round(result['dadosArea']['percentualHorasTotaisAlocadas'] * 10000)/100;
    result['dadosArea']['percentualPlanoDecorrido'] = Math.round(result['dadosArea']['percentualPlanoDecorrido'] * 10000)/100;

    result['dadosUnidade']['percentualHorasNaoIniciadas'] = Math.round(result['dadosUnidade']['percentualHorasNaoIniciadas'] * 10000)/100;
    result['dadosUnidade']['percentualHorasEmAndamento'] = Math.round(result['dadosUnidade']['percentualHorasEmAndamento'] * 10000)/100;
    result['dadosUnidade']['percentualHorasConcluidas'] = Math.round(result['dadosUnidade']['percentualHorasConcluidas'] * 10000)/100;
    result['dadosUnidade']['percentualHorasAvaliadas'] = Math.round(result['dadosUnidade']['percentualHorasAvaliadas'] * 10000)/100;
    result['dadosUnidade']['percentualHorasTotaisAlocadas'] = Math.round(result['dadosUnidade']['percentualHorasTotaisAlocadas'] * 10000)/100;
    result['dadosUnidade']['percentualPlanoDecorrido'] = Math.round(result['dadosUnidade']['percentualPlanoDecorrido'] * 10000)/100;

    result['graficoAreaGeral'] = this.obterDadosGraficoPizza(result['dadosArea'], 'GERAL');
    result['graficoAreaDetalhado'] = this.obterDadosGraficoPizza(result['dadosArea'], 'DETALHADO');

    result['graficoUnidadeGeral'] = this.obterDadosGraficoBarras(result['dadosUnidade'], 'GERAL');
    result['graficoUnidadeDetalhado'] = this.obterDadosGraficoBarras(result['dadosUnidade'], 'DETALHADO');
    return [result];
  }

  public obterDadosGraficoBarras(metadados: MetadadosUnidade, tipo: 'GERAL' | 'DETALHADO') {
    let $dados: any = null;
    let dadosGraficoGeral: ChartDataSets[] = [
      {
        label: 'Horas Totais',
        data: [metadados.horasUteisTotais],
        backgroundColor: '#6c757d'
      },
      {
        label: 'Horas Alocadas',
        data: [metadados.horasTotaisAlocadas],
        backgroundColor: '#FF7043'
      }
    ];
    let dadosGraficoDetalhado: ChartDataSets[] = [
      {
        label: this.lex.translate('Atividades') + ' Não-iniciadas',
        data: [metadados.horasAtividadesNaoIniciadas],
        backgroundColor: '#0dcaf0',
        stack: this.lex.translate('Atividades')
      },
      {
        label: this.lex.translate('Atividades') + ' Iniciadas',
        data: [metadados.horasAtividadesEmAndamento],
        backgroundColor: '#ffc107',
        stack: this.lex.translate('Atividades')
      },
      {
        label: this.lex.translate('Atividades') + ' Concluídas',
        data: [metadados.horasAtividadesConcluidas],
        backgroundColor: '#af4201',
        stack: this.lex.translate('Atividades')
      },
      {
        label: 'Disponível no Plano',
        data: [metadados.horasUteisTotais - metadados.horasTotaisAlocadas],
        backgroundColor: '#6c757d',
        stack: this.lex.translate('Atividades')
      }
    ];
    let dadosGraficoAvaliacao: ChartDataSets[] = [
      {
        label: '',
        data: [10],
        backgroundColor: '#F5F5F5'
      },
      {
        label: '',
        data: [metadados.horasUteisTotais],
        backgroundColor: '#6c757d' // #EF5350 (vermelha) ou #283593 (azul)
      }
    ];
    switch (tipo) {
      case 'GERAL':
        $dados = dadosGraficoGeral;
        break;

      case 'DETALHADO':
        $dados = dadosGraficoDetalhado;
        break;
    }
    return $dados;
  }

  public obterDadosGraficoPizza(metadados: MetadadosUnidade, tipo: 'GERAL' | 'DETALHADO') {
    //let $dados: any = null;
    let dadosGraficoPizzaGeral: ChartDataSets[] = [
      {
        label: this.lex.translate('Atividades') + ' Não-iniciadas',
        data: [metadados.horasAtividadesNaoIniciadas],
        backgroundColor: '#0dcaf0'
      },
      {
        label: this.lex.translate('Atividades') + ' Iniciadas',
        data: [metadados.horasAtividadesEmAndamento],
        backgroundColor: '#ffc107'
      }];
/*     let dadosGraficoPizzaGeral: ChartData = {
      datasets: [{
        data: [ 300, 500, 100 ]
      }],
      labels: [ 'Download', 'Sales', 'Mail Sales' ]
    }; */
/*     let dadosGraficoPizzaDetalhado: ChartData = {
      datasets: [{
        data: [ 300, 500, 100 ]
      }],
      labels: [ 'Download', 'Sales', 'Mail Sales' ]
    }; */

    let dadosGraficoPizzaDetalhado: ChartDataSets[] = [
      {
        label: this.lex.translate('Atividades') + ' Não-iniciadas',
        data: [metadados.horasAtividadesNaoIniciadas],
        backgroundColor: '#0dcaf0'
      },
      {
        label: this.lex.translate('Atividades') + ' Iniciadas',
        data: [metadados.horasAtividadesEmAndamento],
        backgroundColor: '#ffc107'
      },
/*       {
        label: 'Atividades Concluídas',
        data: [metadados.horasAtividadesConcluidas],
        backgroundColor: '#af4201'
      },
      {
        label: 'Atividades Avaliadas',
        data: [metadados.horasAtividadesAvaliadas],
        backgroundColor: '#af4af0'
      },
      {
        label: 'Disponível no Plano',
        data: [metadados.horasUteisTotais - metadados.horasTotaisAlocadas],
        backgroundColor: '#6c757d'
      } */
    ];
    switch (tipo) {
      case 'GERAL':
        //$dados = dadosGraficoPizzaGeral;
        return dadosGraficoPizzaGeral;
        break;

      case 'DETALHADO':
        //$dados = dadosGraficoPizzaDetalhado;
        return dadosGraficoPizzaDetalhado;
        break;
    }
    //return $dados;
  }
}
