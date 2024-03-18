"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[1998],{81998:(x,f,s)=>{s.r(f),s.d(f,{TipoProcessoModule:()=>z});var v=s(76733),g=s(55579),c=s(1391),m=s(2314),T=s(74040),P=s(70361),b=s(64368);class p extends b.X{constructor(o){super(),this.nome="",this.codigo="",this.etiquetas=[],this.checklist=[],this.initialization(o)}}var d,A=s(1184),e=s(20755),C=s(92392),E=s(64603),Q=s(66848),N=s(17819);class h extends A.F{constructor(o){super(o,p,P.n),this.injector=o,this.validate=(t,i)=>{let a=null;return["nome","codigo"].indexOf(i)>=0&&!t.value?.length&&(a="Obrigat\xf3rio"),a},this.titleEdit=t=>"Editando "+this.lex.translate("Tipo de Processo")+": "+(t?.nome||""),this.form=this.fh.FormBuilder({nome:{default:""},codigo:{default:""},etiquetas:{default:[]},checklist:{default:[]},etiqueta_texto:{default:""},etiqueta_icone:{default:null},etiqueta_cor:{default:null},checklist_texto:{default:""}},this.cdRef,this.validate)}loadData(o,t){let i=Object.assign({},t.value);t.patchValue(this.util.fillForm(i,o))}initializeData(o){o.patchValue(new p)}saveData(o){return new Promise((t,i)=>{const a=this.util.fill(new p,this.entity);t(this.util.fillForm(a,this.form.value))})}addItemHandleChecklist(){let o;const t=this.form.controls.checklist_texto.value,i=this.util.textHash(t);return t?.length&&this.util.validateLookupItem(this.form.controls.checklist.value,i)&&(o={key:i,value:this.form.controls.checklist_texto.value},this.form.controls.checklist_texto.setValue("")),o}addItemHandleEtiquetas(){let o;const t=this.form.controls.etiqueta_texto.value,i=this.util.textHash(t);return t?.length&&this.util.validateLookupItem(this.form.controls.etiquetas.value,i)&&(o={key:i,value:this.form.controls.etiqueta_texto.value,color:this.form.controls.etiqueta_cor.value,icon:this.form.controls.etiqueta_icone.value},this.form.controls.etiqueta_texto.setValue(""),this.form.controls.etiqueta_icone.setValue(null),this.form.controls.etiqueta_cor.setValue(null)),o}}(d=h).\u0275fac=function(o){return new(o||d)(e.Y36(e.zs3))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-tipo-processo-form"]],viewQuery:function(o,t){if(1&o&&e.Gf(T.Q,5),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first)}},features:[e.qOj],decls:11,vars:18,consts:[["initialFocus","codigo",3,"form","disabled","title","submit","cancel"],[1,"row"],["label","C\xf3digo","controlName","codigo","required","",3,"size"],["label","Nome","controlName","nome","required","",3,"size"],["label","Etiquetas","controlName","etiquetas",3,"size","addItemHandle"],["label","Texto","controlName","etiqueta_texto",3,"size"],["label","\xcdcone","icon","fas fa-sign-out-alt","controlName","etiqueta_icone","liveSearch","",3,"size","items"],["label","Cor","controlName","etiqueta_cor",3,"size"],["label","Checklists","controlName","checklist",3,"size","addItemHandle"],["controlName","checklist_texto",3,"size"]],template:function(o,t){1&o&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1),e._UZ(2,"input-text",2)(3,"input-text",3),e.qZA(),e.TgZ(4,"div",1)(5,"input-multiselect",4),e._UZ(6,"input-text",5)(7,"input-select",6)(8,"input-color",7),e.qZA(),e.TgZ(9,"input-multiselect",8),e._UZ(10,"input-text",9),e.qZA()()()),2&o&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(2),e.Q6J("size",3),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",9),e.uIk("maxlength",250),e.xp6(2),e.Q6J("size",8)("addItemHandle",t.addItemHandleEtiquetas.bind(t)),e.xp6(1),e.Q6J("size",5),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("items",t.lookup.ICONES),e.xp6(1),e.Q6J("size",4),e.xp6(1),e.Q6J("size",4)("addItemHandle",t.addItemHandleChecklist.bind(t)),e.xp6(1),e.Q6J("size",12),e.uIk("maxlength",250))},dependencies:[T.Q,C.m,E.p,Q.z,N.p]});var u,n,Z=s(8239),O=s(73150),F=s(79084),J=s(78509),M=s(57224),D=s(83351),L=s(57765),R=s(45512),B=s(42704);function S(l,o){1&l&&e._UZ(0,"toolbar")}class y extends J.E{constructor(o){super(o,p,P.n),this.injector=o,this.toolbarButtons=[],this.filterWhere=t=>{let i=[],a=t.value;return a.nome?.length&&i.push(["nome","like","%"+a.nome.trim().replace(" ","%")+"%"]),i},this.allPages=o.get(F.T),this.title=this.lex.translate("Tipos de Processo"),this.code="MOD_TIPO_PROC",this.filter=this.fh.FormBuilder({nome:{default:""}}),this.gb.isEmbedded&&this.toolbarButtons.push({icon:"bi bi-arrow-repeat",color:"btn-outline-primary",label:"Atualizar",onClick:this.atualizarPeloSei.bind(this)}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_TIPO_PROC_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}atualizarPeloSei(){var o=this;return(0,Z.Z)(function*(){try{yield o.allPages.getTiposProcessos()}catch{o.dialog.alert("Erro ao consultar Sei","Erro ao tentar obter a lista de Tipos de Processos do Sei!")}})()}}(u=y).\u0275fac=function(o){return new(o||u)(e.Y36(e.zs3))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-tipo-processo-list"]],viewQuery:function(o,t){if(1&o&&e.Gf(O.M,5),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:10,vars:22,consts:[[3,"dao","add","title","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","nome","placeholder","Nome...",3,"size","label"],["title","C\xf3digo","field","codigo"],["title","Descri\xe7\xe3o","field","nome"],["type","options",3,"onEdit","options"],[3,"rows"]],template:function(o,t){1&o&&(e.TgZ(0,"grid",0),e.NdJ("select",function(a){return t.onSelect(a)}),e.YNc(1,S,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-text",4),e.qZA()(),e.TgZ(5,"columns"),e._UZ(6,"column",5)(7,"column",6)(8,"column",7),e.qZA(),e._UZ(9,"pagination",8),e.qZA()),2&o&&(e.Q6J("dao",t.dao)("add",t.add)("title",t.isModal?"":t.title)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_TIPO_PROC_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_TIPO_PROC_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",12)("label","Nome "+t.lex.translate("tipo de documento")),e.uIk("maxlength",250),e.xp6(4),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit))},dependencies:[v.O5,O.M,M.a,D.b,L.z,R.n,B.Q,C.m]});const H=[{path:"",component:y,canActivate:[c.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Tipos de Processo"}},{path:"new",component:h,canActivate:[c.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Tipo de Processo",modal:!0}},{path:":id/edit",component:h,canActivate:[c.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Tipo de Processo",modal:!0}},{path:":id/consult",component:h,canActivate:[c.a],resolve:{config:m.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Tipo de Processo",modal:!0}}];class I{}(n=I).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(H),g.Bz]});var r,G=s(58568),U=s(72133);class z{}(r=z).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[v.ez,G.K,U.UX,I]})}}]);