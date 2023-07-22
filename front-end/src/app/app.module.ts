import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ConfigComponent } from './modules/config/config.component';
import { DialogComponent } from './services/dialog/dialog.component';
import { SpinnerOverlayComponent } from './services/spinner-overlay/spinner-overlay.component';
import { ComponentsModule } from './components/components.module';
import { TesteComponent } from './modules/teste/teste.component';
import { RelatorioModule } from './modules/relatorios/relatorio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogModule } from './modules/logs/log.module';
import { UteisModule } from './modules/uteis/uteis.module';
import { RotinaModule } from './modules/rotinas/rotina.module';
import { TesteFormComponent } from './modules/teste/teste-form/teste-form.component';
import { CurriculumListComponent } from './modules/cadastros/curriculum/curriculum-list/curriculum-list.component';
import { AtividadeModule } from './modules/gestao/atividade/atividade.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfigComponent,
    DialogComponent,
    SpinnerOverlayComponent,
    TesteComponent,
    TesteFormComponent,
    CurriculumListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
    AtividadeModule,
    ChartsModule,
    //RelatorioModule,
    UteisModule,
    LogModule,
    RotinaModule,
    //CadeiaValorModule,
    //CurriculumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
