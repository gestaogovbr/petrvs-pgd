import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadeiaValorRoutingModule } from './cadeia-valor-routing.module';
import { CadeiaValorListComponent } from './cadeia-valor-list/cadeia-valor-list.component';
import { CadeiaValorFormComponent } from './cadeia-valor-form/cadeia-valor-form.component';
import { CadeiaValorListGridComponent } from './cadeia-valor-list-grid/cadeia-valor-list-grid.component';
import { ComponentsModule } from "../../../components/components.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CadeiaValorFormProcessosComponent } from './cadeia-valor-form-processos/cadeia-valor-form-processos.component';
import { CadeiaValorMapaComponent } from './cadeia-valor-mapa/cadeia-valor-mapa.component';
import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [
    CadeiaValorListComponent,
    CadeiaValorFormComponent,
    CadeiaValorListGridComponent,
    CadeiaValorFormProcessosComponent,
    CadeiaValorMapaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    DndModule,
    CadeiaValorRoutingModule
  ]
})
export class CadeiaValorModule { }
