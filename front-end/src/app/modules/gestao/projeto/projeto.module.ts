import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoPlanejamentoComponent } from './projeto-planejamento/projeto-planejamento.component';
import { ProjetoFormPrincipalComponent } from './projeto-form-principal/projeto-form-principal.component';
import { ProjetoFormRecursosComponent } from './projeto-form-recursos/projeto-form-recursos.component';
import { ProjetoFormEnvolvidosComponent } from './projeto-form-envolvidos/projeto-form-envolvidos.component';
import { ProjetoFormAlocacoesComponent } from './projeto-form-alocacoes/projeto-form-alocacoes.component';
import { UteisModule } from '../../uteis/uteis.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { ProjetoTarefaFormComponent } from './projeto-tarefa-form/projeto-tarefa-form.component';
import { ProjetoTarefaFormPrincipalComponent } from './projeto-tarefa-form-principal/projeto-tarefa-form-principal.component';
import { ProjetoFormRegrasComponent } from './projeto-form-regras/projeto-form-regras.component';
import { ProjetoTarefaFilterComponent } from './projeto-tarefa-filter/projeto-tarefa-filter.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    ProjetoListComponent,
    ProjetoFormComponent,
    ProjetoPlanejamentoComponent,
    ProjetoFormPrincipalComponent,
    ProjetoFormRecursosComponent,
    ProjetoFormEnvolvidosComponent,
    ProjetoFormAlocacoesComponent,
    ProjetoTarefaFormComponent,
    ProjetoTarefaFormPrincipalComponent,
    ProjetoFormRegrasComponent,
    ProjetoTarefaFilterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UteisModule,
    FullCalendarModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
