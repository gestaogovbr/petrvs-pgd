"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[3697],{53697:(Y,p,a)=>{a.r(p),a.d(p,{MateriaModule:()=>D});var v=a(76733),y=a(58568),z=a(72133),g=a(55579),d=a(1391),c=a(2314),C=a(73150),Q=a(78509),J=a(64368);class h extends J.X{constructor(o){super(),this.nome="",this.horas_aula=0,this.ativo=1,this.curso_id="",this.initialization(o)}}var u,M=a(35871),T=a(24997),e=a(20755),_=a(57224),F=a(83351),N=a(57765),R=a(45512),U=a(42704),A=a(92392);function E(n,o){1&n&&e._UZ(0,"toolbar")}function B(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=o.row;e.xp6(1),e.Oqu(t.curso.area_conhecimento.nome)}}function I(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=o.row;e.xp6(1),e.Oqu(t.curso.nome)}}class b extends Q.E{constructor(o){super(o,h,M.j),this.injector=o,this.filterWhere=t=>{let i=[],l=t.value;return l.nome?.length&&i.push(["nome","like","%"+l.nome.trim().replace(" ","%")+"%"]),l.horas_aula?.length&&i.push(["horas_aula","like","%"+l.horas_aula.trim().replace(" ","%")+"%"]),i},this.area=o.get(T.s),this.title=this.lex.translate("Disciplinas"),this.code="MOD_RX",this.join=["curso","curso.area_conhecimento"],this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({area_id:{default:""},nome:{default:""},horas_aula:{default:0},ativo:{default:!0}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(o){o.controls.nome.setValue(""),o.controls.horas_aula.setValue(""),super.filterClear(o)}}(u=b).\u0275fac=function(o){return new(o||u)(e.Y36(e.zs3))},u.\u0275cmp=e.Xpm({type:u,selectors:[["materia-list"]],viewQuery:function(o,t){if(1&o&&e.Gf(C.M,5),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:17,vars:28,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da Disciplina","controlName","nome","placeholder","Nome da Disciplina",3,"size","control"],["label","\xc1rea","controlName","area_id","placeholder","Nome da \xc1rea",3,"size","control"],["title","Nome da Disciplina","field","nome"],["title","\xc1rea do Conhecimento",3,"template"],["columnNomeArea",""],["title","Curso",3,"template"],["columnCurso",""],["title","Horas Aula","field","horas_aula"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(o,t){if(1&o&&(e.TgZ(0,"grid",0),e.NdJ("select",function(l){return t.onSelect(l)}),e.YNc(1,E,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4)(5,"input-text",5),e.qZA()(),e.TgZ(6,"columns"),e._UZ(7,"column",6),e.TgZ(8,"column",7),e.YNc(9,B,2,1,"ng-template",null,8,e.W1O),e.qZA(),e.TgZ(11,"column",9),e.YNc(12,I,2,1,"ng-template",null,10,e.W1O),e.qZA(),e._UZ(14,"column",11)(15,"column",12),e.qZA(),e._UZ(16,"pagination",13),e.qZA()),2&o){const i=e.MAs(10),l=e.MAs(13);e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_OUT_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_OUT_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",5)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",5)("control",t.filter.controls.area_id),e.uIk("maxlength",250),e.xp6(3),e.Q6J("template",i),e.xp6(3),e.Q6J("template",l),e.xp6(4),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[v.O5,C.M,_.a,F.b,N.z,R.n,U.Q,A.m]});var m,Z=a(74040),L=a(34406),S=a(1184),j=a(88820),G=a(32802),P=a(64603),V=a(9224);const X=function(){return["raiox","cadastros","curso","new"]},W=function(n){return{route:n}};class f extends S.F{constructor(o){super(o,h,M.j),this.injector=o,this.cursos=[],this.titulo=[],this.cursoWhere=[["id","==",null]],this.validate=(t,i)=>{let l=null;return["nome"].indexOf(i)>=0&&!t.value?.length&&(l="Obrigat\xf3rio"),["area_id"].indexOf(i)>=0&&!t.value?.length&&(l="Obrigat\xf3rio"),["curso_id"].indexOf(i)>=0&&!t.value?.length&&(l="Obrigat\xf3rio"),["horas_aula"].indexOf(i)>=0&&!t.value?.length&&(l="Obrigat\xf3rio"),["titulo"].indexOf(i)>=0&&!t.value?.length&&(l="Obrigat\xf3rio"),l},this.titleEdit=t=>"Editando "+(t?.nome||""),this.areaDao=o.get(T.s),this.cursoDao=o.get(L.E),this.form=this.fh.FormBuilder({area_id:{default:""},curso_id:{default:""},nome:{default:""},titulo:{default:""},horas_aula:{default:0},ativo:{default:!0}},this.cdRef,this.validate)}loadData(o,t){let i=Object.assign({},t.value);t.patchValue(this.util.fillForm(i,o))}initializeData(o){o.patchValue(new h)}saveData(o){return new Promise((t,i)=>{const l=this.util.fill(new h,this.entity);t(this.util.fillForm(l,this.form.value))})}onAreaGraducaoChange(){}onTituloChange(){console.log(this.form.controls.titulo.value),this.form.controls.area_id.value&&this.form.controls.titulo.value&&(this.cursoWhere=[["area_id","==",this.form.controls.area_id.value],["titulo","==",this.form.controls.titulo.value]],this.cdRef.detectChanges())}}var s;(m=f).\u0275fac=function(o){return new(o||m)(e.Y36(e.zs3))},m.\u0275cmp=e.Xpm({type:m,selectors:[["materia-form"]],viewQuery:function(o,t){if(1&o&&e.Gf(Z.Q,5),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first)}},features:[e.qOj],decls:9,vars:19,consts:[["initialFocus","area_id",3,"form","disabled","title","submit","cancel"],[1,"row"],["controlName","area_id","required","",3,"size","dao","change"],["label","Titulo","controlName","titulo","required","",3,"size","items","change"],["label","Curso","icon","fas fa-user-graduate","controlName","curso_id","liveSearch","","required","",3,"size","control","dao","where","addRoute"],["label","Nome da Disciplina","controlName","nome","required","",3,"size"],["label","Horas Aula","controlName","horas_aula","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(o,t){1&o&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1)(2,"input-search",2),e.NdJ("change",function(){return t.onTituloChange()}),e.qZA(),e.TgZ(3,"input-select",3),e.NdJ("change",function(){return t.onTituloChange()}),e.qZA(),e._UZ(4,"input-select",4),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"input-text",5)(7,"input-number",6)(8,"input-switch",7),e.qZA()()),2&o&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",4)("dao",t.areaDao),e.xp6(1),e.Q6J("size",3)("items",t.lookup.TITULOS_CURSOS_INST),e.xp6(1),e.Q6J("size",5)("control",t.form.controls.curso_id)("dao",t.cursoDao)("where",t.cursoWhere)("addRoute",e.VKq(17,W,e.DdM(16,X))),e.xp6(2),e.Q6J("size",5),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2),e.xp6(1),e.Q6J("size",2))},dependencies:[Z.Q,j.a,G.V,A.m,P.p,V.l]});const w=[{path:"",component:b,canActivate:[d.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:f,canActivate:[d.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:f,canActivate:[d.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:f,canActivate:[d.a],resolve:{config:c.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class O{}var r;(s=O).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.Bz.forChild(w),g.Bz]});class D{}(r=D).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,y.K,z.UX,O]})}}]);