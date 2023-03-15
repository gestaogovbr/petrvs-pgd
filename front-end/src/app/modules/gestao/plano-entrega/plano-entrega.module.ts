import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { PlanoEntregaRoutingModule } from './plano-entrega-routing.module';

import { PlanoEntregaListComponent } from './plano-entrega-list/plano-entrega-list.component';
import { PlanoEntregaFormComponent } from './plano-entrega-form/plano-entrega-form.component';


@NgModule({
  declarations: [
    PlanoEntregaListComponent,
    PlanoEntregaFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PlanoEntregaRoutingModule
  ]
})
export class PlanoEntregaModule { }
