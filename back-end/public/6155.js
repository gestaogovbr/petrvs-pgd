"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[6155],{93164:(N,C,s)=>{s.d(C,{O:()=>v});var c=s(64368);class v extends c.X{constructor(m){super(),this.perfil_id=null,this.tipo_capacidade_id="",this.initialization(m)}}},36155:(N,C,s)=>{s.r(C),s.d(C,{PerfilModule:()=>w});var c=s(76733),v=s(55579),p=s(1391),m=s(2314),P=s(8239),y=s(74040),b=s(73150),Z=s(65298);class Q{constructor(e){e&&Object.assign(this,e)}}var I=s(96150),T=s(93164),J=s(64368);class x extends J.X{constructor(e){super(),this.capacidades=[],this.nivel=0,this.nome="",this.descricao="",this.initialization(e)}}var h,L=s(1184),t=s(20755),O=s(57224),E=s(83351),U=s(88820),D=s(92392),j=s(66384),z=s(74978);function R(o,e){if(1&o&&(t.TgZ(0,"h3",9),t._uU(1),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Oqu(i.title)}}function W(o,e){if(1&o&&(t.TgZ(0,"span",24),t._UZ(1,"i",25),t._uU(2),t.qZA()),2&o){const i=t.oxw().row;t.xp6(2),t.hij(" ",null==i.filhos?null:i.filhos.length,"")}}function B(o,e){if(1&o&&t.YNc(0,W,3,1,"span",23),2&o){const i=e.row;t.Q6J("ngIf",null==i.filhos?null:i.filhos.length)}}function G(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",28)(3,"span",29)(4,"small",30),t._UZ(5,"i",31),t._uU(6),t.qZA(),t._UZ(7,"span",32),t.qZA()()(),t.TgZ(8,"td")(9,"div",33)(10,"span",34),t._uU(11),t.qZA()()(),t.TgZ(12,"td",35)(13,"div",36)(14,"span",37)(15,"input-switch",38,39),t.NdJ("change",function(){const l=t.CHM(i).$implicit,d=t.MAs(16),r=t.oxw(3);return t.KtG(r.onHabilitadoChangeFilha(l,d.value))}),t.qZA()()()()()}if(2&o){const i=e.$implicit,a=t.oxw(3);t.xp6(6),t.hij(" ",i.codigo,""),t.xp6(5),t.Oqu(i.descricao),t.xp6(4),t.Q6J("size",1)("size",2)("disabled","consult"==a.action?"true":void 0)("source",i)}}function H(o,e){if(1&o&&(t.TgZ(0,"table",26)(1,"tbody"),t.YNc(2,G,17,6,"tr",27),t.qZA()()),2&o){const i=e.row;t.xp6(2),t.Q6J("ngForOf",i.filhos)}}function Y(o,e){if(1&o&&(t.TgZ(0,"span",40)(1,"strong",41),t._uU(2),t.qZA()()),2&o){const i=e.row;t.xp6(2),t.Oqu(i.codigo)}}function S(o,e){if(1&o&&(t.TgZ(0,"span",32),t._uU(1),t.qZA()),2&o){const i=e.row;t.xp6(1),t.hij(" ",i.descricao,"")}}function X(o,e){if(1&o){const i=t.EpF();t.TgZ(0,"input-switch",42,39),t.NdJ("change",function(){const l=t.CHM(i).row,d=t.MAs(1),r=t.oxw(2);return t.KtG(r.onHabilitadoChange(l,d.value))}),t.qZA()}if(2&o){const i=e.row,a=t.oxw(2);t.Q6J("disabled","consult"==a.action?"true":void 0)("source",i)}}function V(o,e){if(1&o&&(t.TgZ(0,"tab",10)(1,"grid",11,12)(3,"columns")(4,"column",13),t.YNc(5,B,1,1,"ng-template",null,14,t.W1O),t.YNc(7,H,3,1,"ng-template",15,16,t.W1O),t.qZA(),t.TgZ(9,"column",17),t.YNc(10,Y,3,1,"ng-template",null,18,t.W1O),t.qZA(),t.TgZ(12,"column",19),t.YNc(13,S,2,1,"ng-template",null,20,t.W1O),t.qZA(),t.TgZ(15,"column",21),t.YNc(16,X,2,2,"ng-template",null,22,t.W1O),t.qZA()()()()),2&o){const i=t.MAs(6),a=t.MAs(8),n=t.MAs(11),l=t.MAs(14),d=t.MAs(17),r=t.oxw();t.Q6J("label",r.lex.translate("Capacidades")),t.xp6(1),t.Q6J("items",r.tiposCapacidades)("scrollable",!0),t.xp6(3),t.Q6J("align","center")("hint","Lista das capacidades com status m\xf3dulo")("template",i)("expandTemplate",a)("minWidth",50),t.xp6(5),t.Q6J("template",n)("minWidth",160)("maxWidth",160),t.xp6(3),t.Q6J("title",r.lex.translate("M\xf3dulo/Capacidade"))("template",l)("minWidth",600),t.xp6(3),t.Q6J("template",d)}}class A extends L.F{constructor(e){super(e,x,Z.r),this.injector=e,this.tiposCapacidades=[],this.validate=(i,a)=>{let n=null;return["nome","descricao"].indexOf(a)>=0&&!i.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=i=>"Editando "+this.lex.translate("Perfil")+": "+(i?.nome||""),this.tipoCapacidadeDao=e.get(I.r),this.form=this.fh.FormBuilder({nome:{default:""},capacidades:{default:[]},descricao:{default:""},nivel:{default:""},data_inicio:{default:""},data_fim:{default:""}},this.cdRef,this.validate),this.join=["capacidades.tipo_capacidade"]}loadData(e,i){var a=this;return(0,P.Z)(function*(){let n=Object.assign({},i.value);a.entity=e;var l=new Q({where:[["grupo_id","==",null]],orderBy:[["codigo","asc"]],join:["filhos"]});a.tiposCapacidades=yield a.tipoCapacidadeDao.query(l).asPromise(),n=a.util.fillForm(n,e);for(let d of a.tiposCapacidades){const r=e.capacidades?.find(_=>_.tipo_capacidade?.codigo==d.codigo);d._metadata=Object.assign(d._metadata||{},{habilitado:!!r}),r&&console.log(r.tipo_capacidade?.codigo);for(let _ of d.filhos){const nt=e.capacidades?.find(st=>st.tipo_capacidade?.codigo==_.codigo);_._metadata=Object.assign(_._metadata||{},{habilitado:!!nt})}}i.patchValue(n)})()}onHabilitadoChange(e,i){let a=this.entity.capacidades?.find(n=>n.tipo_capacidade_id==e.id);if(i)a&&"DELETE"==a._status&&(a._status=void 0),a||this.entity.capacidades.push(new T.O({tipo_capacidade_id:e.id,perfil_id:this.entity.id,_status:"ADD"}));else{a&&!a._status&&(a._status="DELETE"),a&&"ADD"==a._status&&this.entity.capacidades.splice(this.entity.capacidades.findIndex(n=>n.tipo_capacidade_id==e.id),1);for(let n of e.filhos){n._metadata=Object.assign(n._metadata||{},{habilitado:!1});let l=this.entity.capacidades?.find(d=>d.tipo_capacidade_id==n.id);l&&!l._status&&(l._status="DELETE"),l&&"ADD"==l._status&&this.entity.capacidades.splice(this.entity.capacidades.findIndex(d=>d.tipo_capacidade_id==n.id),1)}}this.refreshCapacidadesHabilitadas()}refreshCapacidadesHabilitadas(){var e=this;return(0,P.Z)(function*(){let i=Object.assign({},e.form.value);i=e.util.fillForm(i,e.entity),e.form.patchValue(i),e.cdRef.detectChanges()})()}onHabilitadoChangeFilha(e,i){let a=this.entity.capacidades?.find(l=>l.tipo_capacidade_id==e.id),n=this.tiposCapacidades.find(l=>l.id==e.grupo_id);if(i){if(!n._metadata.habilitado){n._metadata=Object.assign(n._metadata||{},{habilitado:!0});let l=this.entity.capacidades?.find(d=>d.tipo_capacidade_id==n.id);l&&"DELETE"==l._status&&(l._status=void 0),l||this.entity.capacidades.push(new T.O({tipo_capacidade_id:n.id,perfil_id:this.entity.id,_status:"ADD"}))}a&&"DELETE"==a._status&&(a._status=void 0),a||this.entity.capacidades.push(new T.O({tipo_capacidade_id:e.id,perfil_id:this.entity.id,_status:"ADD"}))}else a&&!a._status&&(a._status="DELETE"),a&&"ADD"==a._status&&this.entity.capacidades.splice(this.entity.capacidades.findIndex(l=>l.tipo_capacidade_id==e.id),1);this.refreshCapacidadesHabilitadas()}initializeData(e){e.patchValue(new x)}saveData(e){return new Promise((i,a)=>{let n=this.util.fill(new x,this.entity);n=this.util.fillForm(n,this.form.value),n.capacidades=n.capacidades.filter(l=>["ADD","DELETE"].includes(l._status||"")),i(n)})}}(h=A).\u0275fac=function(e){return new(e||h)(t.Y36(t.zs3))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-perfil-form"]],viewQuery:function(e,i){if(1&e&&(t.Gf(y.Q,5),t.Gf(b.M,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.editableForm=a.first),t.iGM(a=t.CRH())&&(i.gridPai=a.first)}},features:[t.qOj],decls:10,vars:10,consts:[["class","my-2",4,"ngIf"],["initialFocus","nome",3,"form","disabled","submit","cancel"],["display","","right",""],["key","PRINCIPAL","label","Principal"],[1,"row"],["label","Nome","controlName","nome","required","",3,"size"],["numbers","","label","N\xedvel","controlName","nivel",3,"size"],["label","Descri\xe7\xe3o","controlName","descricao","required","",3,"size"],["key","CAPACIDADES",3,"label",4,"ngIf"],[1,"my-2"],["key","CAPACIDADES",3,"label"],[3,"items","scrollable"],["gridPai",""],["type","expand","icon","bi bi-shield-lock",3,"align","hint","template","expandTemplate","minWidth"],["columnCapacidades",""],["style","justify-content: inherit;"],["columnExpandedCapacidades",""],["title","C\xf3digo","orderBy","codigo",3,"template","minWidth","maxWidth"],["columnCodCapacidade",""],[3,"title","template","minWidth"],["columnTipoCapacidade",""],["title","Habilitado",3,"template"],["columnSelecionado",""],["class","badge rounded-pill bg-light text-dark",4,"ngIf"],[1,"badge","rounded-pill","bg-light","text-dark"],[1,"bi","bi-grid"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[2,"width","220px"],[1,"text-wrap","text-center"],[1,"micro-text","fw-light"],[1,"bi","bi-key"],[1,"badge","bg-light","text-dark"],[2,"width","450px"],[1,"badge","bg-light","text-dark","text-wrap"],[2,"text-align","right"],[2,"width","60px","margin-left","40px"],[1,"text-align"],["scale","medium","path","_metadata.habilitado",1,"text-align",2,"right","10px",3,"size","disabled","source","change"],["habilitado",""],[1,"text-wrap"],[1,"grid-group-text"],["path","_metadata.habilitado",2,"width","45px","margin-right","70px",3,"disabled","source","change"]],template:function(e,i){1&e&&(t.YNc(0,R,2,1,"h3",0),t.TgZ(1,"editable-form",1),t.NdJ("submit",function(){return i.onSaveData()})("cancel",function(){return i.onCancel()}),t.TgZ(2,"tabs",2)(3,"tab",3)(4,"div",4),t._UZ(5,"input-text",5)(6,"input-text",6),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"input-text",7),t.qZA()(),t.YNc(9,V,18,15,"tab",8),t.qZA()()),2&e&&(t.Q6J("ngIf",!i.isModal),t.xp6(1),t.Q6J("form",i.form)("disabled",i.formDisabled),t.xp6(4),t.Q6J("size",10),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2),t.uIk("maxlength",250),t.xp6(2),t.Q6J("size",12),t.uIk("maxlength",250),t.xp6(1),t.Q6J("ngIf",i.auth.hasPermissionTo("MOD_TIPO_CAP")))},dependencies:[c.sg,c.O5,b.M,O.a,E.b,y.Q,U.a,D.m,j.n,z.i]});var g,u,q=s(78509),K=s(57765),$=s(45512),k=s(42704);function tt(o,e){if(1&o&&(t.TgZ(0,"h3",11),t._uU(1),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Oqu(i.title)}}function it(o,e){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=e.row;t.xp6(1),t.Oqu(i.nivel)}}class F extends q.E{constructor(e){super(e,x,Z.r),this.injector=e,this.options=[],this.filterWhere=i=>{let a=[],n=i.value;return n.nome?.length&&a.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),a},this.title=this.lex.translate("Perfis"),this.code="MOD_CFG_PERFS",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_PERF_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}}(g=F).\u0275fac=function(e){return new(e||g)(t.Y36(t.zs3))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-perfil-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(b.M,5),2&e){let a;t.iGM(a=t.CRH())&&(i.grid=a.first)}},features:[t.qOj],decls:14,vars:22,consts:[["class","my-2",4,"ngIf"],[3,"dao","add","orderBy","groupBy","join","hasAdd","hasEdit"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","nome","placeholder","Nome...",3,"size","label","control"],["title","Nome","field","nome"],["title","Descri\xe7\xe3o","field","descricao"],["title","N\xedvel de acesso",3,"template"],["columnNivel",""],["type","options",3,"onEdit","options"],[3,"rows"],[1,"my-2"]],template:function(e,i){if(1&e&&(t.YNc(0,tt,2,1,"h3",0),t.TgZ(1,"grid",1),t._UZ(2,"toolbar"),t.TgZ(3,"filter",2)(4,"div",3),t._UZ(5,"input-text",4),t.qZA()(),t.TgZ(6,"columns"),t._UZ(7,"column",5)(8,"column",6),t.TgZ(9,"column",7),t.YNc(10,it,2,1,"ng-template",null,8,t.W1O),t.qZA(),t._UZ(12,"column",9),t.qZA(),t._UZ(13,"pagination",10),t.qZA()),2&e){const a=t.MAs(11);t.Q6J("ngIf",!i.isModal),t.xp6(1),t.Q6J("dao",i.dao)("add",i.add)("orderBy",i.orderBy)("groupBy",i.groupBy)("join",i.join)("hasAdd",i.auth.hasPermissionTo("MOD_PERF_INCL"))("hasEdit",i.auth.hasPermissionTo("MOD_PERF_EDT")),t.xp6(2),t.Q6J("deleted",i.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",i.filter)("where",i.filterWhere)("submit",i.filterSubmit.bind(i))("collapseChange",i.filterCollapseChange.bind(i))("collapsed",i.filterCollapsed),t.xp6(2),t.Q6J("size",12)("label","Nome "+i.lex.translate("Perfil"))("control",i.filter.controls.nome),t.uIk("maxlength",250),t.xp6(4),t.Q6J("template",a),t.xp6(3),t.Q6J("onEdit",i.edit)("options",i.options),t.xp6(1),t.Q6J("rows",i.rowsLimit)}},dependencies:[c.O5,b.M,O.a,E.b,K.z,$.n,k.Q,D.m]});const et=[{path:"",component:F,canActivate:[p.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Perfils"}},{path:"new",component:A,canActivate:[p.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Perfil",modal:!0}},{path:":id/edit",component:A,canActivate:[p.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Perfil",modal:!0}},{path:":perfil_id/capacidade",loadChildren:()=>s.e(7472).then(s.bind(s,57472)).then(o=>o.CapacidadeModule),canActivate:[p.a]},{path:":id/consult",component:A,canActivate:[p.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Perfil",modal:!0}}];class M{}(u=M).\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[v.Bz.forChild(et),v.Bz]});var f,at=s(58568),ot=s(72133);class w{}(f=w).\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[c.ez,at.K,ot.UX,M]})}}]);