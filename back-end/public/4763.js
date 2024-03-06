"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[4763],{44763:(P,h,o)=>{o.r(h),o.d(h,{AreaTematicaModule:()=>M});var v=o(76733),D=o(58568),E=o(72133),T=o(55579),c=o(1391),u=o(2314),g=o(73150),Q=o(78509),z=o(64368);class f extends z.X{constructor(a){super(),this.nome="",this.ativo=1,this.initialization(a)}}var m,A=o(88653),e=o(20755),B=o(57224),O=o(83351),R=o(57765),Z=o(45512),J=o(42704),C=o(92392);function N(n,a){1&n&&e._UZ(0,"toolbar")}class y extends Q.E{constructor(a){super(a,f,A.K),this.injector=a,this.filterWhere=t=>{let i=[],s=t.value;return s.nome?.length&&i.push(["nome","like","%"+s.nome.trim().replace(" ","%")+"%"]),i},this.title=this.lex.translate("\xc1reas Tem\xe1ticas"),this.code="MOD_RX",this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({nome:{default:""}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(a){a.controls.nome.setValue(""),super.filterClear(a)}}(m=y).\u0275fac=function(a){return new(a||m)(e.Y36(e.zs3))},m.\u0275cmp=e.Xpm({type:m,selectors:[["area-tematica-list"]],viewQuery:function(a,t){if(1&a&&e.Gf(g.M,5),2&a){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:9,vars:23,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da \xc1rea Tem\xe1tica","controlName","nome","placeholder","Nome da \xc1rea Tem\xe1tica",3,"size","control"],["title","Nome da \xc1rea Tem\xe1tica","field","nome","orderBy","nome"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(a,t){1&a&&(e.TgZ(0,"grid",0),e.NdJ("select",function(s){return t.onSelect(s)}),e.YNc(1,N,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6),e.qZA(),e._UZ(8,"pagination",7),e.qZA()),2&a&&(e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_OUT_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(3),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit))},dependencies:[v.O5,g.M,B.a,O.b,R.z,Z.n,J.Q,C.m]});var d,l,b=o(74040),I=o(1184),L=o(88820);class p extends I.F{constructor(a){super(a,f,A.K),this.injector=a,this.validate=(t,i)=>{let s=null;return["nome"].indexOf(i)>=0&&!t.value?.length&&(s="Obrigat\xf3rio"),s},this.titleEdit=t=>"Editando "+(t?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},ativo:{default:!0}},this.cdRef,this.validate)}loadData(a,t){let i=Object.assign({},t.value);t.patchValue(this.util.fillForm(i,a))}initializeData(a){a.patchValue(new f)}saveData(a){return new Promise((t,i)=>{const s=this.util.fill(new f,this.entity);t(this.util.fillForm(s,this.form.value))})}}(d=p).\u0275fac=function(a){return new(a||d)(e.Y36(e.zs3))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-area-tematica-form"]],viewQuery:function(a,t){if(1&a&&e.Gf(b.Q,5),2&a){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first)}},features:[e.qOj],decls:4,vars:6,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","Nome da \xc1rea Tematica","controlName","nome","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(a,t){1&a&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-switch",3),e.qZA()()),2&a&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",10),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2))},dependencies:[b.Q,L.a,C.m]});const j=[{path:"",component:y,canActivate:[c.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:p,canActivate:[c.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:p,canActivate:[c.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:p,canActivate:[c.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class F{}var r;(l=F).\u0275fac=function(a){return new(a||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[T.Bz.forChild(j),T.Bz]});class M{}(r=M).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,D.K,E.UX,F]})}}]);