"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[3928],{43928:(R,h,i)=>{i.r(h),i.d(h,{TipoModalidadeModule:()=>u});var g=i(76733),v=i(55579),d=i(1391),r=i(2314),b=i(74040),T=i(66075),C=i(64368);class p extends C.X{constructor(o){super(),this.nome="",this.plano_trabalho_calcula_horas=!1,this.atividade_tempo_despendido=!1,this.atividade_esforco=!1,this.initialization(o)}}var Z=i(1184),e=i(20755),O=i(88820),M=i(92392),_=i(25560);class s extends Z.F{constructor(o){super(o,p,T.D),this.injector=o,this.validate=(a,t)=>{let l=null;return["nome"].indexOf(t)>=0&&!a.value?.length&&(l="Obrigat\xf3rio"),l},this.titleEdit=a=>"Editando "+this.lex.translate("Tipo de Modalidade")+": "+(a?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},plano_trabalho_calcula_horas:{default:!1},atividade_tempo_despendido:{default:!1},atividade_esforco:{default:!1}},this.cdRef,this.validate)}loadData(o,a){let t=Object.assign({},a.value);a.patchValue(this.util.fillForm(t,o))}initializeData(o){o.patchValue(new p)}saveData(o){return new Promise((a,t)=>{const l=this.util.fill(new p,this.entity);a(this.util.fillForm(l,this.form.value))})}static#e=this.\u0275fac=function(a){return new(a||s)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-modalidade-form"]],viewQuery:function(a,t){if(1&a&&e.Gf(b.Q,5),2&a){let l;e.iGM(l=e.CRH())&&(t.editableForm=l.first)}},features:[e.qOj],decls:8,vars:13,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","T\xedtulo","controlName","nome","required","",3,"size"],["transparent","",3,"title"],["scale","small","labelPosition","right","controlName","plano_trabalho_calcula_horas",3,"size","label"],["scale","small","labelPosition","right","controlName","atividade_tempo_despendido",3,"size","label"],["scale","small","labelPosition","right","controlName","atividade_esforco",3,"size","label"]],template:function(a,t){1&a&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2),e.qZA(),e.TgZ(3,"separator",3),e._UZ(4,"input-switch",4),e.qZA(),e.TgZ(5,"separator",3),e._UZ(6,"input-switch",5)(7,"input-switch",6),e.qZA()()),2&a&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",12),e.uIk("maxlength",250),e.xp6(1),e.Q6J("title","Configura\xe7\xf5es "+t.lex.translate("plano de trabalho")),e.xp6(1),e.Q6J("size",12)("label","Se o "+t.lex.translate("plano de trabalho")+" calcula horas (considerando a carga hor\xe1ria e os dias)"),e.xp6(1),e.Q6J("title","Configura\xe7\xf5es "+t.lex.translate("atividade")),e.xp6(1),e.Q6J("size",12)("label","Calcula "+t.lex.translate("tempo despendido")+t.lex.translate("atividade")),e.xp6(1),e.Q6J("size",12)("label","Usa "+t.lex.translate("esfor\xe7o")+" (tempo para execu\xe7\xe3o)"+t.lex.translate("atividade")))},dependencies:[b.Q,O.a,M.m,_.N]})}var A=i(73150),Q=i(78509),y=i(57224),D=i(83351),I=i(57765),J=i(45512),E=i(42704),N=i(95489);function L(n,o){1&n&&e._UZ(0,"toolbar")}function F(n,o){if(1&n&&e._UZ(0,"badge",13),2&n){const a=e.oxw(2);e.Q6J("label","Usa horas no "+a.lex.translate("plano de trabalho"))}}function z(n,o){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,F,1,1,"badge",12),e.qZA()),2&n){const a=o.row;e.xp6(1),e.Q6J("ngIf",a.plano_trabalho_calcula_horas)}}function U(n,o){1&n&&e._UZ(0,"badge",16)}function P(n,o){1&n&&e._UZ(0,"badge",17)}function B(n,o){if(1&n&&(e.TgZ(0,"div",11),e.YNc(1,U,1,0,"badge",14),e.YNc(2,P,1,0,"badge",15),e.qZA()),2&n){const a=o.row;e.xp6(1),e.Q6J("ngIf",a.atividade_tempo_despendido),e.xp6(1),e.Q6J("ngIf",a.atividade_esforco)}}class m extends Q.E{constructor(o){super(o,p,T.D),this.injector=o,this.filterWhere=a=>{let t=[],l=a.value;return l.nome?.length&&t.push(["nome","like","%"+l.nome.trim().replace(" ","%")+"%"]),t},this.title=this.lex.translate("Tipos de Modalidade"),this.code="MOD_TIPO_MDL",this.filter=this.fh.FormBuilder({nome:{default:""},atividades_homologadas:{default:""},dispensa_avaliacao:{default:""},exige_assinatura:{default:""},data_inicio:{default:""},data_fim:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_TIPO_MDL_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}static#e=this.\u0275fac=function(a){return new(a||m)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-tipo-modalidade-list"]],viewQuery:function(a,t){if(1&a&&e.Gf(A.M,5),2&a){let l;e.iGM(l=e.CRH())&&(t.grid=l.first)}},features:[e.qOj],decls:15,vars:27,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","nome","placeholder","Nome...",3,"size","label","control"],["title","Descri\xe7\xe3o","field","nome"],[3,"title","template"],["columnPlanoTrabalho",""],["columnAtividade",""],["type","options",3,"onEdit","options"],[3,"rows"],[1,"one-per-line"],["color","light","icon","bi bi-clock",3,"label",4,"ngIf"],["color","light","icon","bi bi-clock",3,"label"],["color","light","icon","bi bi-hourglass-bottom","label","Assinatura do participante",4,"ngIf"],["color","light","icon","bi bi-stopwatch","label","Assinatura do gestor da unidade",4,"ngIf"],["color","light","icon","bi bi-hourglass-bottom","label","Assinatura do participante"],["color","light","icon","bi bi-stopwatch","label","Assinatura do gestor da unidade"]],template:function(a,t){if(1&a&&(e.TgZ(0,"grid",0),e.NdJ("select",function(f){return t.onSelect(f)}),e.YNc(1,L,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5),e.TgZ(7,"column",6),e.YNc(8,z,2,1,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(10,"column",6),e.YNc(11,B,3,2,"ng-template",null,8,e.W1O),e.qZA(),e._UZ(13,"column",9),e.qZA(),e._UZ(14,"pagination",10),e.qZA()),2&a){const l=e.MAs(9),f=e.MAs(12);e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_TIPO_MDL_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_TIPO_MDL_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("label","Nome "+t.lex.translate("tipo de Modalidade"))("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(3),e.Q6J("title",t.lex.translate("Plano de trabalho"))("template",l),e.xp6(3),e.Q6J("title",t.lex.translate("Atividade"))("template",f),e.xp6(3),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[g.O5,A.M,y.a,D.b,I.z,J.n,E.Q,M.m,N.F]})}const w=[{path:"",component:m,canActivate:[d.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Tipos de Modalidade"}},{path:"new",component:s,canActivate:[d.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Tipo de Modalidade",modal:!0}},{path:":id/edit",component:s,canActivate:[d.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Tipo de Modalidade",modal:!0}},{path:":id/consult",component:s,canActivate:[d.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Tipo de Modalidade",modal:!0}}];class c{static#e=this.\u0275fac=function(a){return new(a||c)};static#t=this.\u0275mod=e.oAB({type:c});static#a=this.\u0275inj=e.cJS({imports:[v.Bz.forChild(w),v.Bz]})}var G=i(58568),j=i(72133);class u{static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275mod=e.oAB({type:u});static#a=this.\u0275inj=e.cJS({imports:[g.ez,G.K,j.UX,c]})}}}]);