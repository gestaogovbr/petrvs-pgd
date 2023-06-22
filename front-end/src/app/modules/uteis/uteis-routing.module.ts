import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ConfigResolver } from 'src/app/resolvies/config.resolver';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AssinarComponent } from './documentos/assinar/assinar.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { TemplatesComponent } from './templates/templates.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

const routes: Routes = [
  { path: 'comentarios/:origem/:id/new', component: ComentariosComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Comentários", modal: true } },
  { path: 'documentos/:especie/:id', component: DocumentosComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Documentos", modal: true } },
  { path: 'documentos/:especie/:id/:action', component: DocumentosComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Documentos", modal: true } },
  { path: 'documentos/:especie/:id/:action/:documentoId', component: DocumentosComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Documentos", modal: true } },
  { path: 'documentos/assinar', component: AssinarComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Assinar", modal: true } },
  { path: 'notificacoes', component: NotificacoesComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Notificações", modal: true } },
  { path: 'templates/:especie', component: TemplatesComponent, canActivate: [AuthGuard], resolve: { config: ConfigResolver }, runGuardsAndResolvers: 'always', data: { title: "Templates", modal: true } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UteisRoutingModule { }
