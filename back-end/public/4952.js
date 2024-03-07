"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[4952],{44952:(X,h,a)=>{a.r(h),a.d(h,{CargoModule:()=>y});var v=a(76733),J=a(58568),O=a(72133),g=a(55579),m=a(1391),d=a(2314),C=a(73150),T=a(78509),D=a(64368);class p extends D.X{constructor(t){super(),this.nome="",this.nivel="",this.descricao="",this.siape="",this.cbo="",this.efetivo=1,this.ativo=1,this.initialization(t)}}var c,b=a(99255),e=a(20755),I=a(57224),F=a(83351),M=a(57765),B=a(45512),R=a(42704),z=a(88820),E=a(92392);function Z(n,t){1&n&&e._UZ(0,"toolbar")}function L(n,t){if(1&n&&e._uU(0),2&n){const o=t.row,l=e.oxw();e.hij(" ",l.lookup.getValue(l.lookup.SIMNAO,o.efetivo)," ")}}function U(n,t){if(1&n&&e._uU(0),2&n){const o=t.row,l=e.oxw();e.hij(" ",l.lookup.getValue(l.lookup.SIMNAO,o.ativo)," ")}}class A extends T.E{constructor(t){super(t,p,b.R),this.injector=t,this.filterWhere=o=>{let l=[],i=o.value;i.efetivo.value,i.ativo.value;return i.nome?.length&&l.push(["nome","like","%"+i.nome.trim().replace(" ","%")+"%"]),i.descricao?.length&&l.push(["descricao","like","%"+i.descricao.trim().replace(" ","%")+"%"]),i.nivel?.length&&l.push(["nivel","like","%"+i.nivel.trim().replace(" ","%")+"%"]),i.siape?.length&&l.push(["siape","like","%"+i.siape.trim().replace(" ","%")+"%"]),i.cbo?.length&&l.push(["cbo","like","%"+i.cbo.trim().replace(" ","%")+"%"]),i.ativo&&l.push(["ativo","==",1]),l.push(["efetivo","==",i.efetivo?1:0]),l},this.title=this.lex.translate("Cargos"),this.code="MOD_RX",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""},descricao:{default:""},nivel:{default:""},siape:{default:""},cbo:{default:""},efetivo:{default:1},ativo:{default:1}}),this.addOption(this.OPTION_EXCLUIR,"MOD_RX_OUT_EXCL")}filterClear(t){t.controls.nome.setValue(""),t.controls.descri\u00e7\u00e3o.setValue(""),t.controls.nivel.setValue(""),t.controls.siape.setValue(""),t.controls.cbo.setValue(""),super.filterClear(t)}}(c=A).\u0275fac=function(t){return new(t||c)(e.Y36(e.zs3))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-cargo-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(C.M,5),2&t){let l;e.iGM(l=e.CRH())&&(o.grid=l.first)}},features:[e.qOj],decls:25,vars:41,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","hasDelete","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome do Cargo","controlName","nome","placeholder","Nome da \xe1rea de conhecimento",3,"size","control"],["label","N\xedvel","controlName","nivel","placeholder","",3,"size","control"],["label","Descri\xe7\xe3o","controlName","descricao","placeholder","",3,"size","control"],["label","C\xf3digo SIAPE","controlName","siape","placeholder","",3,"size","control"],["label","C\xf3digo CBO","controlName","cbo","placeholder","",3,"size","control"],["label","Efetivo","controlName","efetivo","placeholder","",3,"size","control"],["label","Ativo","controlName","ativo","placeholder","",3,"size","control"],["title","Cargos","field","nome","orderBy","nome"],["title","N\xedvel","field","nivel"],["title","Descri\xe7\xe3o","field","descricao"],["title","SIAPE","field","siape"],["title","CBO","field","cbo"],["title","Efetivo",3,"template"],["columnEfetivo",""],["title","Ativo",3,"template"],["columnAtivo",""],["type","options",3,"onEdit"],[3,"rows"]],template:function(t,o){if(1&t&&(e.TgZ(0,"grid",0),e.NdJ("select",function(i){return o.onSelect(i)}),e.YNc(1,Z,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4)(5,"input-text",5)(6,"input-text",6)(7,"input-text",7)(8,"input-text",8)(9,"input-switch",9)(10,"input-switch",10),e.qZA()(),e.TgZ(11,"columns"),e._UZ(12,"column",11)(13,"column",12)(14,"column",13)(15,"column",14)(16,"column",15)(17,"column",16),e.YNc(18,L,1,1,"ng-template",null,17,e.W1O),e.TgZ(20,"column",18),e.YNc(21,U,1,1,"ng-template",null,19,e.W1O),e.qZA(),e._UZ(23,"column",20),e.qZA(),e._UZ(24,"pagination",21),e.qZA()),2&t){const l=e.MAs(19),i=e.MAs(22);e.Q6J("dao",o.dao)("add",o.add)("title",o.isModal?"":o.title)("orderBy",o.orderBy)("groupBy",o.groupBy)("join",o.join)("selectable",o.selectable)("hasAdd",o.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",o.auth.hasPermissionTo("MOD_RX_OUT_EDT"))("hasDelete",o.auth.hasPermissionTo("MOD_RX_OUT_EXCL")),e.xp6(1),e.Q6J("ngIf",!o.selectable),e.xp6(1),e.Q6J("deleted",o.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",o.filter)("where",o.filterWhere)("submit",o.filterSubmit.bind(o))("clear",o.filterClear.bind(o))("collapseChange",o.filterCollapseChange.bind(o))("collapsed",!o.selectable&&o.filterCollapsed),e.xp6(2),e.Q6J("size",3)("control",o.filter.controls.nome),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.nivel),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.descricao),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.siape),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.cbo),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.efetivo),e.xp6(1),e.Q6J("size",3)("control",o.filter.controls.ativo),e.xp6(7),e.Q6J("template",l),e.xp6(3),e.Q6J("template",i),e.xp6(3),e.Q6J("onEdit",o.edit),e.xp6(1),e.Q6J("rows",o.rowsLimit)}},dependencies:[v.O5,C.M,I.a,F.b,M.z,B.n,R.Q,z.a,E.m]});var u,s,N=a(74040),w=a(1184);class f extends w.F{constructor(t){super(t,p,b.R),this.injector=t,this.titulos=[],this.validate=(o,l)=>{let i=null;return["nome"].indexOf(l)>=0&&!o.value?.length&&(i="Obrigat\xf3rio"),i},this.titleEdit=o=>"Editando "+(o?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},nivel:{default:""},cbo:{default:""},siape:{default:""},descricao:{default:""},ativo:{default:!0},efetivo:{default:!0}},this.cdRef,this.validate)}loadData(t,o){let l=Object.assign({},o.value);o.patchValue(this.util.fillForm(l,t))}initializeData(t){t.patchValue(new p)}saveData(t){return new Promise((o,l)=>{const i=this.util.fill(new p,this.entity);o(this.util.fillForm(i,this.form.value))})}}(u=f).\u0275fac=function(t){return new(t||u)(e.Y36(e.zs3))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cargo-form"]],viewQuery:function(t,o){if(1&t&&e.Gf(N.Q,5),2&t){let l;e.iGM(l=e.CRH())&&(o.editableForm=l.first)}},features:[e.qOj],decls:9,vars:15,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome do Cargo","controlName","nome","required","",3,"size"],["label","N\xedvel do Cargo","controlName","nivel",3,"size"],["label","C\xf3digo SIAPE do Cargo","controlName","siape",3,"size"],["label","C\xf3digo CBO do Cargo","controlName","cbo",3,"size"],["label","Descri\xe7\xe3o do Cargo","controlName","descricao",3,"size"],["labelPosition","left","label","Efetivo","controlName","efetivo",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(t,o){1&t&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return o.onSaveData()})("cancel",function(){return o.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-text",3)(4,"input-text",4)(5,"input-text",5)(6,"input-text",6)(7,"input-switch",7)(8,"input-switch",8),e.qZA()()),2&t&&(e.Q6J("form",o.form)("disabled",o.formDisabled)("title",o.isModal?"":o.title),e.xp6(2),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",8),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2),e.xp6(1),e.Q6J("size",2))},dependencies:[N.Q,z.a,E.m]});const x=[{path:"",component:A,canActivate:[m.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:f,canActivate:[m.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:f,canActivate:[m.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:f,canActivate:[m.a],resolve:{config:d.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class Q{}var r;(s=Q).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.Bz.forChild(x),g.Bz]});class y{}(r=y).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,J.K,O.UX,Q]})}}]);