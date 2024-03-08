"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[7517],{27517:(U,u,n)=>{n.r(u),n.d(u,{AreaConhecimentoModule:()=>h});var f=n(76733),T=n(58568),O=n(72133),p=n(55579),l=n(1391),r=n(2314),v=n(73150),b=n(64368);class m extends b.X{constructor(a){super(),this.nome="",this.ativo=1,this.initialization(a)}}var E=n(78509),C=n(24997),e=n(20755),D=n(57224),Q=n(83351),F=n(57765),z=n(45512),B=n(42704),g=n(92392);function Z(y,a){1&y&&e._UZ(0,"toolbar")}class d extends E.E{constructor(a){super(a,m,C.s),this.injector=a,this.filterWhere=o=>{let t=[],i=o.value;return i.nome_area?.length&&t.push(["nome","like","%"+i.nome_area.trim().replace(" ","%")+"%"]),t},this.title=this.lex.translate("\xc1reas de Conhecimento"),this.code="MOD_RX",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome_area:{default:""}}),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(a){a.controls.nome_area.setValue(""),super.filterClear(a)}static#e=this.\u0275fac=function(o){return new(o||d)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["area-conhecimento-list"]],viewQuery:function(o,t){if(1&o&&e.Gf(v.M,5),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","hasDelete","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da \xe1rea de conhecimento","controlName","nome_area","placeholder","Nome da \xe1rea de conhecimento",3,"size","control"],["title","Nome da \xe1rea","field","nome","orderBy","nome"],["type","options",3,"onEdit"],[3,"rows"]],template:function(o,t){1&o&&(e.TgZ(0,"grid",0),e.NdJ("select",function(N){return t.onSelect(N)}),e.YNc(1,Z,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6),e.qZA(),e._UZ(8,"pagination",7),e.qZA()),2&o&&(e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_OUT_EDT"))("hasDelete",t.auth.hasPermissionTo("MOD_RX_OUT_EXCL")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("control",t.filter.controls.nome_area),e.uIk("maxlength",250),e.xp6(3),e.Q6J("onEdit",t.edit),e.xp6(1),e.Q6J("rows",t.rowsLimit))},dependencies:[f.O5,v.M,D.a,Q.b,F.z,z.n,B.Q,g.m]})}var A=n(74040),J=n(1184),M=n(88820);class s extends J.F{constructor(a){super(a,m,C.s),this.injector=a,this.validate=(o,t)=>{let i=null;return["nome_area"].indexOf(t)>=0&&!o.value?.length&&(i="Obrigat\xf3rio"),i},this.titleEdit=o=>"Editando "+(o?.nome||""),this.form=this.fh.FormBuilder({nome_area:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(a,o){let t=Object.assign({},o.value);o.patchValue(this.util.fillForm(t,a))}initializeData(a){a.patchValue(new m)}saveData(a){return new Promise((o,t)=>{const i=this.util.fill(new m,this.entity);o(this.util.fillForm(i,this.form.value))})}static#e=this.\u0275fac=function(o){return new(o||s)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["area-conhecimento-form"]],viewQuery:function(o,t){if(1&o&&e.Gf(A.Q,5),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first)}},features:[e.qOj],decls:4,vars:6,consts:[["initialFocus","nome_area",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome da \xe1rea de conhecimento","controlName","nome_area","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(o,t){1&o&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-switch",3),e.qZA()()),2&o&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",10),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))},dependencies:[A.Q,M.a,g.m]})}const R=[{path:"",component:d,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:s,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class c{static#e=this.\u0275fac=function(o){return new(o||c)};static#t=this.\u0275mod=e.oAB({type:c});static#o=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(R),p.Bz]})}class h{static#e=this.\u0275fac=function(o){return new(o||h)};static#t=this.\u0275mod=e.oAB({type:h});static#o=this.\u0275inj=e.cJS({imports:[f.ez,T.K,O.UX,c]})}}}]);