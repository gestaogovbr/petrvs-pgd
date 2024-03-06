"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[3697],{53697:(X,p,i)=>{i.r(p),i.d(p,{MateriaModule:()=>h});var v=i(76733),Z=i(58568),D=i(72133),g=i(55579),r=i(1391),u=i(2314),C=i(73150),O=i(78509),y=i(64368);class d extends y.X{constructor(a){super(),this.nome="",this.horas_aula=0,this.ativo=1,this.curso_id="",this.initialization(a)}}var T=i(35871),A=i(24997),e=i(20755),z=i(57224),Q=i(83351),J=i(57765),N=i(45512),F=i(42704),b=i(92392);function R(s,a){1&s&&e._UZ(0,"toolbar")}function E(s,a){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const o=a.row;e.xp6(1),e.Oqu(o.curso.area_conhecimento.nome)}}function I(s,a){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const o=a.row;e.xp6(1),e.Oqu(o.curso.nome)}}class m extends O.E{constructor(a){super(a,d,T.j),this.injector=a,this.filterWhere=o=>{let t=[],n=o.value;return n.nome?.length&&t.push(["nome","like","%"+n.nome.trim().replace(" ","%")+"%"]),n.horas_aula?.length&&t.push(["horas_aula","like","%"+n.horas_aula.trim().replace(" ","%")+"%"]),t},this.area=a.get(A.s),this.title=this.lex.translate("Disciplinas"),this.code="MOD_RX",this.join=["curso","curso.area_conhecimento"],this.orderBy=[["nome","asc"]],this.filter=this.fh.FormBuilder({area_id:{default:""},nome:{default:""},horas_aula:{default:0},ativo:{default:!0}}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-info-circle",label:"Informa\xe7\xf5es",onClick:this.consult.bind(this)}),this.auth.hasPermissionTo("MOD_RX_VIS_DPE")&&this.options.push({icon:"bi bi-trash",label:"Excluir",onClick:this.delete.bind(this)})}filterClear(a){a.controls.nome.setValue(""),a.controls.horas_aula.setValue(""),super.filterClear(a)}static#e=this.\u0275fac=function(o){return new(o||m)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["materia-list"]],viewQuery:function(o,t){if(1&o&&e.Gf(C.M,5),2&o){let n;e.iGM(n=e.CRH())&&(t.grid=n.first)}},features:[e.qOj],decls:17,vars:28,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome da Disciplina","controlName","nome","placeholder","Nome da Disciplina",3,"size","control"],["label","\xc1rea","controlName","area_id","placeholder","Nome da \xc1rea",3,"size","control"],["title","Nome da Disciplina","field","nome"],["title","\xc1rea do Conhecimento",3,"template"],["columnNomeArea",""],["title","Curso",3,"template"],["columnCurso",""],["title","Horas Aula","field","horas_aula"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(o,t){if(1&o&&(e.TgZ(0,"grid",0),e.NdJ("select",function(f){return t.onSelect(f)}),e.YNc(1,R,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4)(5,"input-text",5),e.qZA()(),e.TgZ(6,"columns"),e._UZ(7,"column",6),e.TgZ(8,"column",7),e.YNc(9,E,2,1,"ng-template",null,8,e.W1O),e.qZA(),e.TgZ(11,"column",9),e.YNc(12,I,2,1,"ng-template",null,10,e.W1O),e.qZA(),e._UZ(14,"column",11)(15,"column",12),e.qZA(),e._UZ(16,"pagination",13),e.qZA()),2&o){const n=e.MAs(10),f=e.MAs(13);e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_RX_VIS_DPE"))("hasEdit",t.auth.hasPermissionTo("MOD_RX_VIS_DPE")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",5)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",5)("control",t.filter.controls.area_id),e.uIk("maxlength",250),e.xp6(3),e.Q6J("template",n),e.xp6(3),e.Q6J("template",f),e.xp6(4),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[v.O5,C.M,z.a,Q.b,J.z,N.n,F.Q,b.m]})}var M=i(74040),S=i(34406),_=i(1184),B=i(88820),U=i(32802),P=i(64603),V=i(9224);const L=function(){return["raiox","cadastros","curso","new"]},j=function(s){return{route:s}};class l extends _.F{constructor(a){super(a,d,T.j),this.injector=a,this.cursos=[],this.titulo=[],this.cursoWhere=[["id","==",null]],this.validate=(o,t)=>{let n=null;return["nome"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),["area_id"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),["curso_id"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),["horas_aula"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),["titulo"].indexOf(t)>=0&&!o.value?.length&&(n="Obrigat\xf3rio"),n},this.titleEdit=o=>"Editando "+(o?.nome||""),this.areaDao=a.get(A.s),this.cursoDao=a.get(S.E),this.form=this.fh.FormBuilder({area_id:{default:""},curso_id:{default:""},nome:{default:""},titulo:{default:""},horas_aula:{default:0},ativo:{default:!0}},this.cdRef,this.validate)}loadData(a,o){let t=Object.assign({},o.value);o.patchValue(this.util.fillForm(t,a))}initializeData(a){a.patchValue(new d)}saveData(a){return new Promise((o,t)=>{const n=this.util.fill(new d,this.entity);o(this.util.fillForm(n,this.form.value))})}onAreaGraducaoChange(){}onTituloChange(){console.log(this.form.controls.titulo.value),this.form.controls.area_id.value&&this.form.controls.titulo.value&&(this.cursoWhere=[["area_id","==",this.form.controls.area_id.value],["titulo","==",this.form.controls.titulo.value]],this.cdRef.detectChanges())}static#e=this.\u0275fac=function(o){return new(o||l)(e.Y36(e.zs3))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["materia-form"]],viewQuery:function(o,t){if(1&o&&e.Gf(M.Q,5),2&o){let n;e.iGM(n=e.CRH())&&(t.editableForm=n.first)}},features:[e.qOj],decls:9,vars:19,consts:[["initialFocus","area_id",3,"form","disabled","title","submit","cancel"],[1,"row"],["controlName","area_id","required","",3,"size","dao","change"],["label","Titulo","controlName","titulo","required","",3,"size","items","change"],["label","Curso","icon","fas fa-user-graduate","controlName","curso_id","liveSearch","","required","",3,"size","control","dao","where","addRoute"],["label","Nome da Disciplina","controlName","nome","required","",3,"size"],["label","Horas Aula","controlName","horas_aula","required","",3,"size"],["labelPosition","left","label","Ativo","controlName","ativo",3,"size"]],template:function(o,t){1&o&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1)(2,"input-search",2),e.NdJ("change",function(){return t.onTituloChange()}),e.qZA(),e.TgZ(3,"input-select",3),e.NdJ("change",function(){return t.onTituloChange()}),e.qZA(),e._UZ(4,"input-select",4),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"input-text",5)(7,"input-number",6)(8,"input-switch",7),e.qZA()()),2&o&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",4)("dao",t.areaDao),e.xp6(1),e.Q6J("size",3)("items",t.lookup.TITULOS_CURSOS_INST),e.xp6(1),e.Q6J("size",5)("control",t.form.controls.curso_id)("dao",t.cursoDao)("where",t.cursoWhere)("addRoute",e.VKq(17,j,e.DdM(16,L))),e.xp6(2),e.Q6J("size",5),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",2),e.xp6(1),e.Q6J("size",2))},dependencies:[M.Q,B.a,U.V,b.m,P.p,V.l]})}const G=[{path:"",component:m,canActivate:[r.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Lista",modal:!1}},{path:"new",component:l,canActivate:[r.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o",modal:!0}},{path:":id/edit",component:l,canActivate:[r.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o",modal:!0}},{path:":id/consult",component:l,canActivate:[r.a],resolve:{config:u.o},runGuardsAndResolvers:"always",data:{title:"Consultar",modal:!0}}];class c{static#e=this.\u0275fac=function(o){return new(o||c)};static#t=this.\u0275mod=e.oAB({type:c});static#o=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(G),g.Bz]})}class h{static#e=this.\u0275fac=function(o){return new(o||h)};static#t=this.\u0275mod=e.oAB({type:h});static#o=this.\u0275inj=e.cJS({imports:[v.ez,Z.K,D.UX,c]})}}}]);