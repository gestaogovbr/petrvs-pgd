"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[5454],{5454:(X,h,i)=>{i.r(h),i.d(h,{TipoCursoModule:()=>D});var v=i(76733),F=i(58568),M=i(72133),C=i(55579),m=i(1391),c=i(2314),T=i(73150),g=i(42277),O=i(64368);class p extends O.X{constructor(t){super(),this.nome="",this.ativo=1,this.initialization(t)}}var u,Q=i(78509),e=i(20755),R=i(57224),E=i(83351),z=i(57765),Z=i(45512),J=i(42704),b=i(92392);function I(n,t){1&n&&e._UZ(0,"toolbar")}class y extends Q.E{constructor(t){super(t,p,g.H),this.injector=t,this.filterWhere=o=>{let s=[],l=o.value;return l.nome?.length&&s.push(["nome","like","%"+l.nome.trim().replace(" ","%")+"%"]),s},this.title=this.lex.translate("Tipos de Curso"),this.code="MOD_RX",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(t){t.controls.nome.setValue(""),super.filterClear(t)}dynamicButtons(t){let o=[];const s={label:"Excluir Registro",icon:"bi bi-trash",onClick:this.delete.bind(this)};return o.unshift(s),o}}(u=y).\u0275fac=function(t){return new(t||u)(e.Y36(e.zs3))},u.\u0275cmp=e.Xpm({type:u,selectors:[["tipo-curso-list"]],viewQuery:function(t,o){if(1&t&&e.Gf(T.M,5),2&t){let s;e.iGM(s=e.CRH())&&(o.grid=s.first)}},features:[e.qOj],decls:9,vars:24,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome do tipo de curso","controlName","nome","placeholder","Nome do tipo de curso",3,"size","control"],["title","Tipo de Curso","field","nome","orderBy","nome"],["type","options",3,"onEdit","onDelete","dynamicButtons"],[3,"rows"]],template:function(t,o){1&t&&(e.TgZ(0,"grid",0),e.NdJ("select",function(l){return o.onSelect(l)}),e.YNc(1,I,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6),e.qZA(),e._UZ(8,"pagination",7),e.qZA()),2&t&&(e.Q6J("dao",o.dao)("add",o.add)("title",o.isModal?"":o.title)("orderBy",o.orderBy)("groupBy",o.groupBy)("join",o.join)("selectable",o.selectable)("hasAdd",o.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",o.auth.hasPermissionTo("MOD_RX_OUT_EDT")),e.xp6(1),e.Q6J("ngIf",!o.selectable),e.xp6(1),e.Q6J("deleted",o.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",o.filter)("where",o.filterWhere)("submit",o.filterSubmit.bind(o))("clear",o.filterClear.bind(o))("collapseChange",o.filterCollapseChange.bind(o))("collapsed",!o.selectable&&o.filterCollapsed),e.xp6(2),e.Q6J("size",9)("control",o.filter.controls.nome),e.uIk("maxlength",250),e.xp6(3),e.Q6J("onEdit",o.edit)("onDelete",o.delete)("dynamicButtons",o.dynamicButtons.bind(o)),e.xp6(1),e.Q6J("rows",o.rowsLimit))},dependencies:[v.O5,T.M,R.a,E.b,z.z,Z.n,J.Q,b.m]});var d,a,A=i(74040),L=i(1184),N=i(88820);class f extends L.F{constructor(t){super(t,p,g.H),this.injector=t,this.validate=(o,s)=>{let l=null;return["labelnome, ativo"].indexOf(s)>=0&&!o.value?.length&&(l="Obrigat\xf3rio"),l},this.titleEdit=o=>"Editando "+(o?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},labelnome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(t,o){let s=Object.assign({},o.value);o.patchValue(this.util.fillForm(s,t))}initializeData(t){t.patchValue(new p)}saveData(t){return new Promise((o,s)=>{const l=this.util.fill(new p,this.entity);o(this.util.fillForm(l,this.form.value))})}}(d=f).\u0275fac=function(t){return new(t||d)(e.Y36(e.zs3))},d.\u0275cmp=e.Xpm({type:d,selectors:[["tipo-curso-form"]],viewQuery:function(t,o){if(1&t&&e.Gf(A.Q,5),2&t){let s;e.iGM(s=e.CRH())&&(o.editableForm=s.first)}},features:[e.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome do tipo do curso","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(t,o){1&t&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return o.onSaveData()})("cancel",function(){return o.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-switch",3),e.qZA()()),2&t&&(e.Q6J("form",o.form)("disabled",o.formDisabled)("title",o.isModal?"":o.title),e.xp6(2),e.Q6J("size",5),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))},dependencies:[A.Q,N.a,b.m]});const U=[{path:"",component:y,canActivate:[m.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:f,canActivate:[m.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:f,canActivate:[m.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:f,canActivate:[m.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class B{}var r;(a=B).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[C.Bz.forChild(U),C.Bz]});class D{}(r=D).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,F.K,M.UX,B]})}}]);