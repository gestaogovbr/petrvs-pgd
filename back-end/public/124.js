"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[124],{70124:(P,f,i)=>{i.r(f),i.d(f,{EixoTematicoModule:()=>h});var v=i(76733),y=i(72133),Z=i(58568),T=i(55579),r=i(1391),m=i(2314),A=i(8239),E=i(74040),g=i(1240),Q=i(64368);class c extends Q.X{constructor(n){super(),this.nome="",this.icone="",this.cor="",this.descricao="",this.initialization(n)}}var z=i(1184),t=i(20755),C=i(92392),x=i(74508),M=i(64603),D=i(66848);class s extends z.F{constructor(n){super(n,c,g.e),this.injector=n,this.validate=(o,e)=>null,this.titleEdit=o=>"Editando "+this.lex.translate("Eixo Tem\xe1tico")+": "+(o?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},icone:{default:""},cor:{default:""},descricao:{default:""}},this.cdRef,this.validate)}loadData(n,o){let e=Object.assign({},o.value);o.patchValue(this.util.fillForm(e,n))}initializeData(n){n.patchValue(new c)}saveData(n){var o=this;return(0,A.Z)(function*(){return new Promise((e,a)=>{const p=o.util.fill(new c,o.entity);e(o.util.fillForm(p,o.form.value))})})()}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-eixo-tematico-form"]],viewQuery:function(o,e){if(1&o&&t.Gf(E.Q,5),2&o){let a;t.iGM(a=t.CRH())&&(e.editableForm=a.first)}},features:[t.qOj],decls:10,vars:12,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["controlName","nome","required","",3,"size","label"],[1,"col"],["label","Descri\xe7\xe3o","controlName","descricao","required","",3,"size","rows"],["label","\xcdcone","icon","fas fa-sign-out-alt","controlName","icone","required","",3,"size","items"],["background","","label","Cor","controlName","cor","required","",3,"size"]],template:function(o,e){1&o&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),t.TgZ(1,"div",1)(2,"div",1),t._UZ(3,"input-text",2),t.qZA(),t.TgZ(4,"div",1)(5,"div",3),t._UZ(6,"input-textarea",4),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"input-select",5)(9,"input-color",6),t.qZA()()()()),2&o&&(t.Q6J("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),t.xp6(3),t.Q6J("size",12)("label","Nome "+e.lex.translate("do eixo tem\xe1tico")),t.uIk("maxlength",250),t.xp6(3),t.Q6J("size",8)("rows",4),t.uIk("maxlength",250),t.xp6(2),t.Q6J("size",3)("items",e.lookup.ICONES),t.xp6(1),t.Q6J("size",3))},dependencies:[E.Q,C.m,x.Q,M.p,D.z]})}var b=i(73150),J=i(78509),N=i(57224),O=i(83351),F=i(57765),I=i(45512),B=i(42704),G=i(95489);function L(l,n){1&l&&t._UZ(0,"toolbar")}function U(l,n){if(1&l&&t._UZ(0,"badge",9),2&l){const o=n.row;t.Q6J("color",o.cor)("icon",o.icone)("label",o.nome)("hint",o.nome)}}class d extends J.E{constructor(n){super(n,c,g.e),this.injector=n,this.filterWhere=o=>{let e=[],a=o.value;return a.nome?.length&&e.push(["nome","like","%"+a.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("Eixos Tem\xe1ticos"),this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.auth.hasPermissionTo("MOD_EXTM")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_EXTM_EXCL")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)}),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}filterClear(n){n.controls.nome.setValue(""),super.filterClear(n)}static#t=this.\u0275fac=function(o){return new(o||d)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-eixo-tematico-list"]],viewQuery:function(o,e){if(1&o&&t.Gf(b.M,5),2&o){let a;t.iGM(a=t.CRH())&&(e.grid=a.first)}},features:[t.qOj],decls:11,vars:24,consts:[[3,"dao","add","title","hasAdd","hasEdit","selectable","orderBy","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["controlName","nome",3,"size","label","control","placeholder"],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["type","options",3,"onEdit","options"],[3,"rows"],[3,"color","icon","label","hint"]],template:function(o,e){if(1&o&&(t.TgZ(0,"grid",0),t.NdJ("select",function(p){return e.onSelect(p)}),t.YNc(1,L,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns")(6,"column",5),t.YNc(7,U,1,4,"ng-template",null,6,t.W1O),t.qZA(),t._UZ(9,"column",7),t.qZA(),t._UZ(10,"pagination",8),t.qZA()),2&o){const a=t.MAs(8);t.Q6J("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("hasAdd",e.auth.hasPermissionTo("MOD_EXTM_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_EXTM_EDT"))("selectable",e.selectable)("orderBy",e.orderBy),t.xp6(1),t.Q6J("ngIf",!e.selectable),t.xp6(1),t.Q6J("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("clear",e.filterClear.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),t.xp6(2),t.Q6J("size",12)("label",e.lex.translate("Eixo tem\xe1tico"))("control",e.filter.controls.nome)("placeholder","Nome "+e.lex.translate("eixo tem\xe1tico")+"..."),t.uIk("maxlength",250),t.xp6(2),t.Q6J("template",a),t.xp6(3),t.Q6J("onEdit",e.edit)("options",e.options),t.xp6(1),t.Q6J("rows",e.rowsLimit)}},dependencies:[v.O5,b.M,N.a,O.b,F.z,I.n,B.Q,C.m,G.F]})}const X=[{path:"",component:d,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Eixos Tem\xe1ticos"}},{path:"new",component:s,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Incluir Eixo Tem\xe1tico",modal:!0}},{path:":id/edit",component:s,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Editar Eixo Tem\xe1tico",modal:!0}},{path:":id/consult",component:s,canActivate:[r.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Consultar Eixo Tem\xe1tico",modal:!0}}];class u{static#t=this.\u0275fac=function(o){return new(o||u)};static#e=this.\u0275mod=t.oAB({type:u});static#o=this.\u0275inj=t.cJS({imports:[T.Bz.forChild(X),T.Bz]})}class h{static#t=this.\u0275fac=function(o){return new(o||h)};static#e=this.\u0275mod=t.oAB({type:h});static#o=this.\u0275inj=t.cJS({imports:[v.ez,Z.K,y.UX,u]})}}}]);