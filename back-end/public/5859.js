"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[5859],{65859:(I,f,o)=>{o.r(f),o.d(f,{AreaAtividadeExternaModule:()=>c});var h=o(76733),O=o(58568),y=o(72133),v=o(55579),l=o(1391),r=o(2314),p=o(74040),T=o(1184),b=o(64368);class d extends b.X{constructor(i){super(),this.nome="",this.ativo=1,this.initialization(i)}}var A=o(14710),t=o(20755),R=o(88820),C=o(92392);class s extends T.F{constructor(i){super(i,d,A.G),this.injector=i,this.validate=(a,e)=>{let n=null;return["nome"].indexOf(e)>=0&&!a.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=a=>"Editando "+(a?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}loadData(i,a){let e=Object.assign({},a.value);a.patchValue(this.util.fillForm(e,i))}initializeData(i){i.patchValue(new d)}saveData(i){return new Promise((a,e)=>{const n=this.util.fill(new d,this.entity);a(this.util.fillForm(n,this.form.value))})}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["area-atividade-externa-form"]],viewQuery:function(a,e){if(1&a&&t.Gf(p.Q,5),2&a){let n;t.iGM(n=t.CRH())&&(e.editableForm=n.first)}},features:[t.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome da \xc1rea da Atividade Externa","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(a,e){1&a&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),t.TgZ(1,"div",1),t._UZ(2,"input-text",2)(3,"input-switch",3),t.qZA()()),2&a&&(t.Q6J("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),t.xp6(2),t.Q6J("size",10),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2))},dependencies:[p.Q,R.a,C.m]})}var g=o(73150),F=o(78509),Q=o(57224),N=o(83351),z=o(57765),B=o(45512),D=o(42704);function M(E,i){1&E&&t._UZ(0,"toolbar")}class m extends F.E{constructor(i){super(i,d,A.G),this.injector=i,this.filterWhere=a=>{let e=[],n=a.value;return n.nome_area?.length&&e.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("\xc1reas da Atividade Externa"),this.code="MOD_RX_CURR",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(i){i.controls.nome.setValue(""),super.filterClear(i)}static#t=this.\u0275fac=function(a){return new(a||m)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["area-atividade-externa-list"]],viewQuery:function(a,e){if(1&a&&t.Gf(g.M,5),2&a){let n;t.iGM(n=t.CRH())&&(e.grid=n.first)}},features:[t.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da \xc1rea da Atividade Externa","controlName","nome","placeholder","Nome da \xc1rea da Atividade Externa",3,"size","control"],["title","Nome da \xc1rea da Atividade Externa","field","nome","orderBy","nome"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(a,e){1&a&&(t.TgZ(0,"grid",0),t.NdJ("select",function(Z){return e.onSelect(Z)}),t.YNc(1,M,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns"),t._UZ(6,"column",5)(7,"column",6),t.qZA(),t._UZ(8,"pagination",7),t.qZA()),2&a&&(t.Q6J("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_RX_OUT_EDT")),t.xp6(1),t.Q6J("ngIf",!e.selectable),t.xp6(1),t.Q6J("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("clear",e.filterClear.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),t.xp6(2),t.Q6J("size",12)("control",e.filter.controls.nome),t.uIk("maxlength",250),t.xp6(3),t.Q6J("onEdit",e.edit)("options",e.options),t.xp6(1),t.Q6J("rows",e.rowsLimit))},dependencies:[h.O5,g.M,Q.a,N.b,z.z,B.n,D.Q,C.m]})}const U=[{path:"",component:m,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class u{static#t=this.\u0275fac=function(a){return new(a||u)};static#e=this.\u0275mod=t.oAB({type:u});static#a=this.\u0275inj=t.cJS({imports:[v.Bz.forChild(U),v.Bz]})}class c{static#t=this.\u0275fac=function(a){return new(a||c)};static#e=this.\u0275mod=t.oAB({type:c});static#a=this.\u0275inj=t.cJS({imports:[h.ez,O.K,y.UX,u]})}}}]);