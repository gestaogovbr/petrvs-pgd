"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[6426],{36426:(L,h,o)=>{o.r(h),o.d(h,{CapacidadeTecnicaModule:()=>p});var v=o(76733),b=o(58568),E=o(72133),T=o(55579),r=o(1391),c=o(2314),C=o(74040),Q=o(1184),Z=o(64368);class d extends Z.X{constructor(i){super(),this.nome="",this.ativo=1,this.area_tematica_id="",this.initialization(i)}}var g=o(53399),z=o(88653),e=o(20755),D=o(88820),A=o(92392),J=o(64603);const M=function(){return["raiox","cadastros","gerais","areatematica","new"]},N=function(l){return{route:l}};class s extends Q.F{constructor(i){super(i,d,g.j),this.injector=i,this.validate=(a,t)=>{let n=null;return["nome"].indexOf(t)>=0&&!a.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=a=>"Editando "+(a?.nome||""),this.areaTematicaDao=i.get(z.K),this.form=this.fh.FormBuilder({area_tematica_id:{default:""},nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(i,a){let t=Object.assign({},a.value);a.patchValue(this.util.fillForm(t,i))}initializeData(i){i.patchValue(new d)}saveData(i){return new Promise((a,t)=>{const n=this.util.fill(new d,this.entity);a(this.util.fillForm(n,this.form.value))})}static#e=this.\u0275fac=function(a){return new(a||s)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["capacidade-tecnica-form"]],viewQuery:function(a,t){if(1&a&&e.Gf(C.Q,5),2&a){let n;e.iGM(n=e.CRH())&&(t.editableForm=n.first)}},features:[e.qOj],decls:6,vars:13,consts:[["initialFocus","areaTematica",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","\xc1rea Tem\xe1tica","icon","fas fa-layer-group","controlName","areaTematica","liveSearch","",3,"size","control","dao","addRoute"],["curso",""],["label","Nome da Capacidade T\xe9cnica","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(a,t){1&a&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-select",2,3)(4,"input-text",4)(5,"input-switch",5),e.qZA()()),2&a&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",5)("control",t.form.controls.areaTematica)("dao",t.areaTematicaDao)("addRoute",e.VKq(11,N,e.DdM(10,M))),e.xp6(2),e.Q6J("size",5),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))},dependencies:[C.Q,D.a,A.m,J.p]})}var O=o(78509),y=o(73150),F=o(57224),B=o(83351),I=o(57765),R=o(45512),j=o(42704);function P(l,i){1&l&&e._UZ(0,"toolbar")}function S(l,i){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const a=i.row;e.xp6(1),e.Oqu(a.area_tematica.nome)}}function V(l,i){if(1&l&&e._uU(0),2&l){const a=i.row,t=e.oxw();e.hij(" ",t.lookup.getValue(t.lookup.SIMNAO,a.ativo)," ")}}class m extends O.E{constructor(i){super(i,d,g.j),this.injector=i,this.filterWhere=a=>{let t=[],n=a.value;return n.nome?.length&&t.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),n.area_tematica_id?.length&&t.push(["id","like","%"+n.area_tematica_id.trim().replace(" ","%")+"%"]),t},this.title=this.lex.translate("Capacidades T\xe9cnicas"),this.code="MOD_RX",this.join=["area_tematica:id,nome"],this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""},area_tematica_id:{default:""},ativo:{default:""}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(i){i.controls.nome.setValue(""),i.controls.area_tematica_id.setValue(""),super.filterClear(i)}static#e=this.\u0275fac=function(a){return new(a||m)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["capacidade-tecnica-list"]],viewQuery:function(a,t){if(1&a&&e.Gf(y.M,5),2&a){let n;e.iGM(n=e.CRH())&&(t.grid=n.first)}},features:[e.qOj],decls:17,vars:31,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da Capacidade T\xe9cnica","controlName","nome","placeholder","Nome da Capacidade T\xe9cnica",3,"size","control"],["label","Nome da \xc1rea Tem\xe1tica","controlName","area_tematica_id","placeholder","Nome da \xc1rea Tem\xe1tica",3,"size","control"],["label","Ativo","controlName","ativo","placeholder","",3,"size","control"],["title","Capacidade T\xe9cnica","field","nome","orderBy","nome"],["title","\xc1rea Tem\xe1tica",3,"template"],["columnAreaTematica",""],["title","Ativo",3,"template"],["columnAtivo",""],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(a,t){if(1&a&&(e.TgZ(0,"grid",0),e.NdJ("select",function(f){return t.onSelect(f)}),e.YNc(1,P,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4)(5,"input-text",5)(6,"input-text",6),e.qZA()(),e.TgZ(7,"columns"),e._UZ(8,"column",7),e.TgZ(9,"column",8),e.YNc(10,S,2,1,"ng-template",null,9,e.W1O),e.qZA(),e.TgZ(12,"column",10),e.YNc(13,V,1,1,"ng-template",null,11,e.W1O),e.qZA(),e._UZ(15,"column",12),e.qZA(),e._UZ(16,"pagination",13),e.qZA()),2&a){const n=e.MAs(11),f=e.MAs(14);e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_VIS_DPE")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",5)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("control",t.filter.controls.area_tematica_id),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2)("control",t.filter.controls.ativo),e.uIk("maxlength",250),e.xp6(3),e.Q6J("template",n),e.xp6(3),e.Q6J("template",f),e.xp6(3),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[v.O5,y.M,F.a,B.b,I.z,R.n,j.Q,A.m]})}const U=[{path:"",component:m,canActivate:[r.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:s,canActivate:[r.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:s,canActivate:[r.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:s,canActivate:[r.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class u{static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275mod=e.oAB({type:u});static#a=this.\u0275inj=e.cJS({imports:[T.Bz.forChild(U),T.Bz]})}class p{static#e=this.\u0275fac=function(a){return new(a||p)};static#t=this.\u0275mod=e.oAB({type:p});static#a=this.\u0275inj=e.cJS({imports:[v.ez,b.K,E.UX,u]})}}}]);