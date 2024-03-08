"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[5454],{5454:(X,p,s)=>{s.r(p),s.d(p,{TipoCursoModule:()=>c});var f=s(76733),b=s(58568),O=s(72133),h=s(55579),l=s(1391),r=s(2314),v=s(73150),C=s(42277),A=s(64368);class d extends A.X{constructor(i){super(),this.nome="",this.ativo=1,this.initialization(i)}}var D=s(78509),t=s(20755),Q=s(57224),F=s(83351),z=s(57765),Z=s(45512),B=s(42704),T=s(92392);function E(y,i){1&y&&t._UZ(0,"toolbar")}class m extends D.E{constructor(i){super(i,d,C.H),this.injector=i,this.filterWhere=o=>{let e=[],n=o.value;return n.nome?.length&&e.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),e},this.title=this.lex.translate("Tipos de Curso"),this.code="MOD_RX",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(i){i.controls.nome.setValue(""),super.filterClear(i)}static#t=this.\u0275fac=function(o){return new(o||m)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["tipo-curso-list"]],viewQuery:function(o,e){if(1&o&&t.Gf(v.M,5),2&o){let n;t.iGM(n=t.CRH())&&(e.grid=n.first)}},features:[t.qOj],decls:9,vars:24,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","hasDelete","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome do tipo de curso","controlName","nome","placeholder","Nome do tipo de curso",3,"size","control"],["title","Tipo de Curso","field","nome","orderBy","nome"],["type","options",3,"onEdit","onDelete"],[3,"rows"]],template:function(o,e){1&o&&(t.TgZ(0,"grid",0),t.NdJ("select",function(U){return e.onSelect(U)}),t.YNc(1,E,1,0,"toolbar",1),t.TgZ(2,"filter",2)(3,"div",3),t._UZ(4,"input-text",4),t.qZA()(),t.TgZ(5,"columns"),t._UZ(6,"column",5)(7,"column",6),t.qZA(),t._UZ(8,"pagination",7),t.qZA()),2&o&&(t.Q6J("dao",e.dao)("add",e.add)("title",e.isModal?"":e.title)("orderBy",e.orderBy)("groupBy",e.groupBy)("join",e.join)("selectable",e.selectable)("hasAdd",e.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",e.auth.hasPermissionTo("MOD_RX_OUT_EDT"))("hasDelete",e.auth.hasPermissionTo("MOD_RX_OUT_EXCL")),t.xp6(1),t.Q6J("ngIf",!e.selectable),t.xp6(1),t.Q6J("deleted",e.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",e.filter)("where",e.filterWhere)("submit",e.filterSubmit.bind(e))("clear",e.filterClear.bind(e))("collapseChange",e.filterCollapseChange.bind(e))("collapsed",!e.selectable&&e.filterCollapsed),t.xp6(2),t.Q6J("size",9)("control",e.filter.controls.nome),t.uIk("maxlength",250),t.xp6(3),t.Q6J("onEdit",e.edit)("onDelete",e.delete),t.xp6(1),t.Q6J("rows",e.rowsLimit))},dependencies:[f.O5,v.M,Q.a,F.b,z.z,Z.n,B.Q,T.m]})}var g=s(74040),J=s(1184),M=s(88820);class a extends J.F{constructor(i){super(i,d,C.H),this.injector=i,this.validate=(o,e)=>{let n=null;return["labelnome, ativo"].indexOf(e)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=o=>"Editando "+(o?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},labelnome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(i,o){let e=Object.assign({},o.value);o.patchValue(this.util.fillForm(e,i))}initializeData(i){i.patchValue(new d)}saveData(i){return new Promise((o,e)=>{const n=this.util.fill(new d,this.entity);o(this.util.fillForm(n,this.form.value))})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(t.zs3))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["tipo-curso-form"]],viewQuery:function(o,e){if(1&o&&t.Gf(g.Q,5),2&o){let n;t.iGM(n=t.CRH())&&(e.editableForm=n.first)}},features:[t.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome do tipo do curso","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(o,e){1&o&&(t.TgZ(0,"editable-form",0),t.NdJ("submit",function(){return e.onSaveData()})("cancel",function(){return e.onCancel()}),t.TgZ(1,"div",1),t._UZ(2,"input-text",2)(3,"input-switch",3),t.qZA()()),2&o&&(t.Q6J("form",e.form)("disabled",e.formDisabled)("title",e.isModal?"":e.title),t.xp6(2),t.Q6J("size",5),t.uIk("maxlength",250),t.xp6(1),t.Q6J("size",2))},dependencies:[g.Q,M.a,T.m]})}const R=[{path:"",component:m,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:a,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:a,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:a,canActivate:[l.a],resolve:{config:r.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class u{static#t=this.\u0275fac=function(o){return new(o||u)};static#e=this.\u0275mod=t.oAB({type:u});static#o=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(R),h.Bz]})}class c{static#t=this.\u0275fac=function(o){return new(o||c)};static#e=this.\u0275mod=t.oAB({type:c});static#o=this.\u0275inj=t.cJS({imports:[f.ez,b.K,O.UX,u]})}}}]);