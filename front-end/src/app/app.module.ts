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
import { DemandaModule } from './modules/gestao/demanda/demanda.module';
import { RelatorioModule } from './modules/relatorios/relatorio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeModule } from './modules/logs/change/change.module';
import { UteisModule } from './modules/uteis/uteis.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConfigComponent,
    DialogComponent,
    SpinnerOverlayComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    AppRoutingModule,
    DemandaModule,
    ChartsModule,
    RelatorioModule,
    UteisModule,
    ChangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
