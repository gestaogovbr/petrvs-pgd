"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[2215],{92215:(gi,z,d)=>{d.r(z),d.d(z,{UnidadeModule:()=>oe});var I,_=d(76733),R=d(55579),p=d(1391),f=d(2314),m=d(8239),D=d(74040),S=d(20497),F=d(15316),de=d(87744),h=d(81214),P=d(35255),se=d(22559),g=d(53937),le=d(1184),re=d(22067),e=d(20755),N=d(88820),O=d(32802),q=d(92392),L=d(64603),ue=d(66848),V=d(17819),M=d(66384),H=d(74978),ce=d(25560),me=d(55795),pe=d(75007),fe=d(92739);const ge=["unidade_pai"],_e=["cidade"],he=["gestor"],be=["gestorSubstituto"],ve=["gestorDelegado"],Ue=["entidade"],Ie=["notificacoes"];function Ae(n,t){if(1&n&&(e.TgZ(0,"tab",28),e._UZ(1,"notificacoes-config",29,30),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("unidadeId",i.entity.id.length?i.entity.id:"ADD")("entity",i.entity)("disabled",i.formDisabled)}}const Te=function(n){return["entidade_id","==",n]},ye=function(n){return[n]};class E extends le.F{get informalIsDisabled(){return"true"}get instituidoraIsDisabled(){return this.informal?"true":void 0}get codigoIsDisabled(){return this.informal||"new"!=this.action?"true":void 0}get unidadePaiIsDisabled(){return this.unidadeRaiz||!this.informal&&"edit"==this.action?"true":void 0}get isDisabled(){return this.informal||"edit"!=this.action?void 0:"true"}constructor(t){super(t,g.b,h.J),this.injector=t,this.unidadeRaiz=!1,this.informal=!0,this.validate=(i,a)=>{let o=null;return"unidade_pai_id"==a&&!i.value?.length&&!this.unidadeRaiz&&(o="Obrigat\xf3rio"),"codigo"==a&&!this.form?.controls.informal.value&&!parseInt(i.value)&&(o="Obrigat\xf3rio"),o},this.titleEdit=i=>"Editando "+this.lex.translate("Unidade")+": "+(i?.sigla||""),this.entidadeDao=t.get(F.i),this.cidadeDao=t.get(S.l),this.usuarioDao=t.get(P.q),this.planoTrabalhoDao=t.get(de.t),this.notificacao=t.get(re.r),this.modalWidth=1200,this.planoDataset=this.planoTrabalhoDao.dataset(),this.form=this.fh.FormBuilder({codigo:{default:""},sigla:{default:""},nome:{default:""},path:{default:""},cidade_id:{default:""},uf:{default:""},instituidora:{default:!1},informal:{default:!0},atividades_arquivamento_automatico:{default:0},distribuicao_forma_contagem_prazos:{default:"DIAS_UTEIS"},entrega_forma_contagem_prazos:{default:"HORAS_UTEIS"},notificacoes:{default:{}},etiquetas:{default:[]},unidade_pai_id:{default:""},entidade_id:{default:this.auth.unidade?.entidade_id},etiqueta_texto:{default:""},etiqueta_icone:{default:null},etiqueta_cor:{default:null},expediente24:{default:!0},expediente:{default:null},usar_expediente_unidade:{default:!1},texto_complementar_plano:{default:""}},this.cdRef,this.validate),this.join=["cidade","entidade","unidade_pai","gestor.usuario:id,nome","gestores_substitutos.usuario:id,nome","gestores_delegados.usuario:id,nome","notificacoes_templates","gestor.gestor:id","gestores_substitutos.gestor_substituto:id","gestores_delegados.gestor_delegado:id"]}loadData(t,i){var a=this;return(0,m.Z)(function*(){a.informal=!!t.informal,a.cdRef.detectChanges();let o=Object.assign({},i.value);t.etiquetas=t.etiquetas||[],a.form.patchValue(a.util.fillForm(o,t)),yield Promise.all([a.unidadePai.loadSearch(t.unidade_pai||t.unidade_pai_id),a.cidade.loadSearch(t.cidade||t.cidade_id),a.entidade.loadSearch(t.entidade||t.entidade_id)]),a.form.controls.informal.setValue(t.informal),a.unidadeRaiz="edit"==a.action&&!t.unidade_pai_id,a.form.controls.usar_expediente_unidade.setValue(!!t.expediente),a.fh.revalidate(a.form)})()}initializeData(t){this.entity=new g.b({entidade_id:this.auth.unidade?.entidade_id,entidade:this.auth.unidade?.entidade,informal:1}),this.loadData(this.entity,t)}addItemHandle(){let t;const i=this.form.controls.etiqueta_texto.value,a=this.util.textHash(i);return i?.length&&this.util.validateLookupItem(this.form.controls.etiquetas.value,a)&&(t={key:a,value:this.form.controls.etiqueta_texto.value,color:this.form.controls.etiqueta_cor.value,icon:this.form.controls.etiqueta_icone.value},this.form.controls.etiqueta_texto.setValue(""),this.form.controls.etiqueta_icone.setValue(null),this.form.controls.etiqueta_cor.setValue(null)),t}saveData(t){var i=this;return new Promise(function(){var a=(0,m.Z)(function*(o,s){i.notificacoes.saveData();let l=i.util.fill(new g.b,i.entity);l=i.util.fillForm(l,i.form.value),l.notificacoes=i.entity.notificacoes,l.notificacoes_templates=i.entity.notificacoes_templates,i.form.controls.usar_expediente_unidade||(l.expediente=null),o(l)});return function(o,s){return a.apply(this,arguments)}}())}onInformalChange(t){this.informal=this.form.controls.informal.value,this.form.controls.codigo.setValue(""),this.form.controls.instituidora.setValue(!1),this.form.controls.codigo.updateValueAndValidity()}onUsarExpedienteEntidadeChange(){this.form.controls.expediente.setValue(this.form.controls.usar_expediente_unidade.value?this.form.controls.expediente.value||new se.z:null)}}(I=E).\u0275fac=function(t){return new(t||I)(e.Y36(e.zs3))},I.\u0275cmp=e.Xpm({type:I,selectors:[["app-unidade-form"]],viewQuery:function(t,i){if(1&t&&(e.Gf(D.Q,5),e.Gf(ge,5),e.Gf(_e,5),e.Gf(he,5),e.Gf(be,5),e.Gf(ve,5),e.Gf(Ue,5),e.Gf(Ie,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.editableForm=a.first),e.iGM(a=e.CRH())&&(i.unidadePai=a.first),e.iGM(a=e.CRH())&&(i.cidade=a.first),e.iGM(a=e.CRH())&&(i.gestor=a.first),e.iGM(a=e.CRH())&&(i.gestorSubstituto=a.first),e.iGM(a=e.CRH())&&(i.gestorDelegado=a.first),e.iGM(a=e.CRH())&&(i.entidade=a.first),e.iGM(a=e.CRH())&&(i.notificacoes=a.first)}},features:[e.qOj],decls:33,vars:46,consts:[["initialFocus","sigla",3,"title","form","disabled","submit","cancel"],["display","","right",""],["key","PRINCIPAL","label","Principal"],[1,"row"],["label","Informal","labelClass","text-nowrap","controlName","informal",3,"disabled","size","labelInfo","change"],["label","Instit.","labelClass","text-nowrap","controlName","instituidora",3,"disabled","size","labelInfo"],["label","C\xf3digo","controlName","codigo",3,"disabled","size"],["label","Sigla","controlName","sigla","required","",3,"disabled","size"],["label","Nome","controlName","nome","required","",3,"disabled","size"],["controlName","cidade_id","required","",3,"disabled","size","dao"],["cidade",""],["controlName","unidade_pai_id",3,"disabled","size","label","where","dao"],["unidade_pai",""],["disabled","","controlName","entidade_id","required","",3,"size","dao"],["entidade",""],["key","CONFIGURACOES","label","Configura\xe7\xf5es"],["clss","row"],["label","Etiquetas","multiselectStyle","inline","controlName","etiquetas",3,"maxItemWidth","size","addItemHandle"],["label","Texto","controlName","etiqueta_texto",3,"size"],["label","\xcdcone","controlName","etiqueta_icone",3,"size","items"],["label","Cor","controlName","etiqueta_cor",3,"size"],["controlName","texto_complementar_plano",3,"label","dataset"],["key","EXPEDIENTE","label","Expediente"],["label","Usar calend\xe1rio pr\xf3prio","labelPosition","right","icon","bi bi-check2","controlName","usar_expediente_unidade",3,"size","labelInfo","change"],["usarExpedienteEntidade",""],[3,"disabled","expedienteDisabled","control"],["expediente",""],["key","NOTIFICACOES","label","Notifica\xe7\xf5es",4,"ngIf"],["key","NOTIFICACOES","label","Notifica\xe7\xf5es"],[3,"unidadeId","entity","disabled"],["notificacoes",""]],template:function(t,i){1&t&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return i.onSaveData()})("cancel",function(){return i.onCancel()}),e.TgZ(1,"tabs",1)(2,"tab",2)(3,"div",3)(4,"input-switch",4),e.NdJ("change",function(o){return i.onInformalChange(o)}),e.qZA(),e._UZ(5,"input-switch",5)(6,"input-text",6)(7,"input-text",7)(8,"input-text",8),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input-search",9,10)(12,"input-search",11,12)(14,"input-search",13,14),e.qZA()(),e.TgZ(16,"tab",15),e._UZ(17,"separator"),e.TgZ(18,"div",16)(19,"input-multiselect",17),e._UZ(20,"input-text",18)(21,"input-select",19)(22,"input-color",20),e.qZA()(),e._UZ(23,"separator"),e.TgZ(24,"div",3),e._UZ(25,"input-editor",21),e.qZA()(),e.TgZ(26,"tab",22)(27,"div",3)(28,"input-switch",23,24),e.NdJ("change",function(){return i.onUsarExpedienteEntidadeChange()}),e.qZA()(),e._UZ(30,"calendar-expediente",25,26),e.qZA(),e.YNc(32,Ae,3,3,"tab",27),e.qZA()()),2&t&&(e.Q6J("title",i.isModal?"":i.title)("form",i.form)("disabled",i.formDisabled),e.xp6(4),e.Q6J("disabled",i.informalIsDisabled)("size",1)("labelInfo","Definir se "+i.lex.translate("a unidade")+" \xe9 informal ou n\xe3o."+i.lex.translate(" Unidades")+" informais s\xe3o, por exemplo: times volantes, comiss\xf5es, grupos de trabalho, etc."+i.lex.translate(" Unidades")+" informais n\xe3o podem mudar para formais, ou vice-versa."),e.xp6(1),e.Q6J("disabled",i.instituidoraIsDisabled)("size",1)("labelInfo","Se a "+i.lex.translate("unidade")+" \xe9 instituidora de Programas. Unidade administrativa prevista no art. 4\xba do Decreto n\xba 11.072, de 2022."),e.xp6(1),e.Q6J("disabled",i.codigoIsDisabled)("size",2),e.xp6(1),e.Q6J("disabled",i.isDisabled)("size",2),e.xp6(1),e.Q6J("disabled",i.isDisabled)("size",6),e.xp6(2),e.Q6J("disabled",i.isDisabled)("size",4)("dao",i.cidadeDao),e.xp6(2),e.Q6J("disabled",i.unidadePaiIsDisabled)("size",4)("label",i.lex.translate("Unidade")+" pai")("where",e.VKq(44,ye,e.VKq(42,Te,i.form.controls.entidade_id.value)))("dao",i.dao),e.xp6(2),e.Q6J("size",4)("dao",i.entidadeDao),e.xp6(5),e.Q6J("maxItemWidth",250)("size",12)("addItemHandle",i.addItemHandle.bind(i)),e.xp6(1),e.Q6J("size",6),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",3)("items",i.lookup.ICONES),e.xp6(1),e.Q6J("size",3),e.xp6(3),e.Q6J("label","Texto complementar "+i.lex.translate("Plano de Trabalho"))("dataset",i.planoDataset),e.xp6(3),e.hYB("labelInfo","Se o expediente da ",i.lex.translate("unidade")," n\xe3o for definido usaremos o da ",i.lex.translate("entidade"),""),e.Q6J("size",12),e.xp6(2),e.Q6J("disabled",i.form.controls.usar_expediente_unidade.value?void 0:"true")("expedienteDisabled",null==i.entity||null==i.entity.entidade?null:i.entity.entidade.expediente)("control",i.form.controls.expediente),e.xp6(2),e.Q6J("ngIf",i.entity))},dependencies:[_.O5,D.Q,N.a,O.V,q.m,L.p,ue.z,V.p,M.n,H.i,ce.N,me.G,pe.Z,fe.y]});var A,b=d(73150),x=d(78509),G=d(57224),Q=d(83351),Ce=d(57765),w=d(45512),Ze=d(42704),Y=d(95489);const De=["instituidora"];function Ee(n,t){if(1&n&&(e.TgZ(0,"h3",19),e._uU(1),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Oqu(i.title)}}function Ne(n,t){if(1&n&&e._UZ(0,"toolbar",20),2&n){const i=e.oxw();e.Q6J("buttons",i.buttons)}}function Oe(n,t){if(1&n&&(e.TgZ(0,"span",23),e._UZ(1,"i",24),e._uU(2),e.qZA()),2&n){const i=e.oxw().row;e.xp6(2),e.hij(" ",i.unidade.sigla," ")}}function Me(n,t){if(1&n&&(e.TgZ(0,"span",21),e._uU(1),e.qZA(),e.YNc(2,Oe,3,1,"span",22)),2&n){const i=t.row;e.xp6(1),e.Oqu(i.nome),e.xp6(1),e.Q6J("ngIf",i.unidade)}}function xe(n,t){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const i=t.row;e.xp6(1),e.Oqu(((null==i.cidade?null:i.cidade.nome)||"")+"/"+((null==i.cidade?null:i.cidade.uf)||""))}}function Ge(n,t){1&n&&e._UZ(0,"badge",28)}function Qe(n,t){if(1&n&&(e.TgZ(0,"div",25),e.YNc(1,Ge,1,0,"badge",26),e._UZ(2,"badge",27),e.qZA()),2&n){const i=t.row;e.xp6(1),e.Q6J("ngIf",i.instituidora),e.xp6(1),e.Q6J("color",i.data_inativacao?"danger":"success")("icon",i.data_inativacao?"bi bi-x-circle":"bi bi-check-circle")("label",i.data_inativacao?"Inativo":"Ativo")}}class B extends x.E{constructor(t){super(t,g.b,h.J),this.injector=t,this.selectable=!1,this.buttons=[],this.filterWhere=i=>{let a=i.value,o=[];return o.push(this.selectable?["data_inativacao",a.inativos?"!=":"==",null]:["inativos","==",a.inativos]),a.entidade_id?.length&&o.push(["entidade_id","==",a.entidade_id]),a.nome?.length&&o.push(["or",["nome","like","%"+a.nome.trim().replace(" ","%")+"%"],["sigla","like","%"+a.nome.trim().replace(" ","%")+"%"]]),a.instituidora&&o.push(["instituidora","==",1]),o},this.join=["cidade","unidade_pai:id,sigla","entidade:id,sigla","gestor.usuario:id","gestores_substitutos.usuario:id"],this.cidadeDao=t.get(S.l),this.entidadeDao=t.get(F.i),this.code="MOD_CFG_UND",this.filter=this.fh.FormBuilder({entidade_id:{default:this.auth.unidade?.entidade_id},inativos:{default:!1},instituidora:{default:!1},nome:{default:""}}),this.groupBy=[{field:"entidade.sigla",label:"Entidade"}],this.auth.hasPermissionTo("MOD_UND_UNIR")&&this.buttons.push({icon:"bi bi-arrows-collapse",color:"btn-outline-danger",label:"Unificar",onClick:i=>this.go.navigate({route:["configuracoes","unidade","merge"]},this.modalRefresh())}),this.addOption(this.OPTION_INFORMACOES,"MOD_UND"),this.addOption(this.OPTION_EXCLUIR,"MOD_UND_EXCL")}dynamicOptions(t){var i=this;let a=[],o=t;return this.auth.hasPermissionTo("MOD_UND_INATV")&&a.push({icon:o.data_inativacao?"bi bi-check-circle":"bi bi-x-circle",label:o.data_inativacao?"Reativar":"Inativar",onClick:(s=(0,m.Z)(function*(l){return yield i.inativo(l,!l.data_inativacao)}),function(r){return s.apply(this,arguments)})}),this.auth.hasPermissionTo("MOD_UND_INTG")&&a.push({label:"Integrantes",icon:"bi bi-people",onClick:s=>this.go.navigate({route:["configuracoes","unidade","",s.id,"integrante"]},{metadata:{unidade:t}})}),a;var s}inativo(t,i){var a=this;return(0,m.Z)(function*(){if(yield a.dialog.confirm(i?"Inativar":"Reativar",i?"Deseja realmente inativar essa unidade ("+t.nome+")?":"Deseja reativar essa unidade ("+t.nome+")?"))try{a.submitting=!0,yield a.dao.inativar(t.id,i),yield a.modalRefreshId(t).modalClose(void 0)}finally{a.submitting=!1}})()}filterClear(t){super.filterClear(t)}get labelInfoInativas(){return this.selectable?"Se lista s\xf3 as unidades inativas":"Se lista tamb\xe9m as unidades inativas"}}(A=B).\u0275fac=function(t){return new(t||A)(e.Y36(e.zs3))},A.\u0275cmp=e.Xpm({type:A,selectors:[["unidade-list-grid"]],viewQuery:function(t,i){if(1&t&&(e.Gf(b.M,5),e.Gf(De,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.grid=a.first),e.iGM(a=e.CRH())&&(i.instituidora=a.first)}},inputs:{selectable:"selectable",snapshot:"snapshot"},features:[e.qOj],decls:23,vars:34,consts:[["class","my-2",4,"ngIf"],[3,"dao","add","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[3,"buttons",4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome","controlName","nome","placeholder","Nome ou sigla...",3,"size","control"],["label","Instit.","labelClass","text-nowrap","controlName","instituidora",3,"size","control","labelInfo"],["instituidora",""],["label","Inativos","controlName","inativos",3,"size","control","labelInfo"],["title","Sigla","field","sigla"],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["title","C\xf3digo","field","codigo"],[3,"title","template"],["columnCidade",""],["title","Situa\xe7\xe3o",3,"template"],["columnSituacao",""],["type","options",3,"onEdit","options","dynamicOptions"],[3,"rows"],[1,"my-2"],[3,"buttons"],[1,"d-block"],["class","badge bg-light text-dark",4,"ngIf"],[1,"badge","bg-light","text-dark"],[1,"bi","bi-arrow-return-right"],[1,"one-per-line"],["color","primary","icon","bi bi-star","label","Instituidora",4,"ngIf"],[3,"color","icon","label"],["color","primary","icon","bi bi-star","label","Instituidora"]],template:function(t,i){if(1&t&&(e.YNc(0,Ee,2,1,"h3",0),e.TgZ(1,"grid",1),e.NdJ("select",function(o){return i.onSelect(o)}),e.YNc(2,Ne,1,1,"toolbar",2),e.TgZ(3,"filter",3)(4,"div",4),e._UZ(5,"input-text",5)(6,"input-switch",6,7)(8,"input-switch",8),e.qZA()(),e.TgZ(9,"columns"),e._UZ(10,"column",9),e.TgZ(11,"column",10),e.YNc(12,Me,3,2,"ng-template",null,11,e.W1O),e.qZA(),e._UZ(14,"column",12),e.TgZ(15,"column",13),e.YNc(16,xe,2,1,"ng-template",null,14,e.W1O),e.qZA(),e.TgZ(18,"column",15),e.YNc(19,Qe,3,4,"ng-template",null,16,e.W1O),e.qZA(),e._UZ(21,"column",17),e.qZA(),e._UZ(22,"pagination",18),e.qZA()),2&t){const a=e.MAs(13),o=e.MAs(17),s=e.MAs(20);e.Q6J("ngIf",i.isModal),e.xp6(1),e.Q6J("dao",i.dao)("add",i.add)("orderBy",i.orderBy)("groupBy",i.groupBy)("join",i.join)("selectable",i.selectable)("hasAdd",i.auth.hasPermissionTo("MOD_UND_INCL"))("hasEdit",i.auth.hasPermissionTo("MOD_UND_EDT")),e.xp6(1),e.Q6J("ngIf",!i.selectable),e.xp6(1),e.Q6J("deleted",i.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",i.filter)("where",i.filterWhere)("submit",i.filterSubmit.bind(i))("clear",i.filterClear.bind(i))("collapseChange",i.filterCollapseChange.bind(i))("collapsed",!i.selectable&&i.filterCollapsed),e.xp6(2),e.Q6J("size",10)("control",i.filter.controls.nome),e.uIk("maxlength",250),e.xp6(1),e.Q6J("size",1)("control",i.filter.controls.instituidora)("labelInfo","Se lista SOMENTE as "+i.lex.translate("unidades")+" instituidoras de "+i.lex.translate("programas")),e.xp6(2),e.Q6J("size",1)("control",i.filter.controls.inativos)("labelInfo",i.labelInfoInativas),e.xp6(3),e.Q6J("template",a),e.xp6(4),e.Q6J("title",i.lex.translate("Cidade"))("template",o),e.xp6(3),e.Q6J("template",s),e.xp6(3),e.Q6J("onEdit",i.edit)("options",i.options)("dynamicOptions",i.dynamicOptions.bind(i)),e.xp6(1),e.Q6J("rows",i.rowsLimit)}},dependencies:[_.O5,b.M,G.a,Q.b,Ce.z,w.n,Ze.Q,N.a,q.m,Y.F]});var T,y,W=d(75471),Je=d(59838),j=d(3209);function ze(n,t){if(1&n&&(e.TgZ(0,"div",4),e._uU(1),e.qZA()),2&n){const i=t.$implicit;e.xp6(1),e.Oqu(i.label)}}class k extends x.E{constructor(t){super(t,g.b,h.J),this.injector=t,this.data=[],this.dao=t.get(h.J)}ngAfterViewInit(){super.ngAfterViewInit(),this.carregaUnidades()}carregaUnidades(){var t=this;return(0,m.Z)(function*(){let i=t.auth.usuario?.lotacao?.unidade_id,a=yield t.dao.hierarquiaUnidades(i),o=[],s=i;for(;s;){let u=a.find(c=>c.id===s);if(!u)break;o.unshift(s),s=u.unidade_pai_id||void 0}let l=u=>a.filter(c=>c.unidade_pai_id===u).map(c=>({type:"unidade",label:c.sigla,expanded:i!==c.id&&o.includes(c.id),styleClass:i==c.id?"text-bg-primary":"",data:{hint:c.nome,unidade:c},children:r(c.id)?l(c.id):[{type:"fake",expanded:!1,label:"Carregando..."}]})),r=u=>a.some(c=>c.unidade_pai_id===u);t.data=l(null)})()}expandeUnidade(t){this.carregaFilhas(t.node.data.unidade.id,t.node)}carregaFilhas(t,i){var a=this;return(0,m.Z)(function*(){let o=yield a.dao.unidadesFilhas(t);i.children=o.map(s=>({type:"unidade",label:s.sigla,expanded:!1,data:{unidade:s,hint:s.nome},children:[{type:"fake",expanded:!1,label:"Carregando..."}]}))})()}}function Re(n,t){if(1&n&&e._UZ(0,"unidade-list-grid",4),2&n){const i=e.oxw();e.Q6J("selectable",i.selectable)("snapshot",i.snapshot||i.modalRoute||i.route.snapshot)}}function Se(n,t){1&n&&e._UZ(0,"unidade-mapa")}function Fe(n,t){if(1&n&&(e.TgZ(0,"tab",5),e.YNc(1,Se,1,0,"ng-template",null,6,e.W1O),e.qZA()),2&n){const i=e.MAs(2);e.Q6J("template",i)}}(T=k).\u0275fac=function(t){return new(t||T)(e.Y36(e.zs3))},T.\u0275cmp=e.Xpm({type:T,selectors:[["unidade-mapa"]],features:[e.qOj],decls:4,vars:1,consts:[["autoHeightDisabled","false","track","all"],[1,"my-3"],[3,"value","onNodeExpand"],["pTemplate","unidade"],[1,"font-bold"]],template:function(t,i){1&t&&(e.TgZ(0,"ng-scrollbar",0)(1,"div",1)(2,"p-organizationChart",2),e.NdJ("onNodeExpand",function(o){return i.expandeUnidade(o)}),e.YNc(3,ze,2,1,"ng-template",3),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("value",i.data))},dependencies:[W.OE,Je.jx,j.KC]});class J extends x.E{constructor(t){super(t,g.b,h.J),this.injector=t,this.filterWhere=i=>{i.value;return[]},this.title=this.lex.translate("Unidades"),this.code="MOD_CFG_UND",this.filter=this.fh.FormBuilder({})}ngAfterViewInit(){super.ngAfterViewInit(),this.tabs.active=["TABELA","MAPA"].includes(this.usuarioConfig.active_tab)?this.usuarioConfig.active_tab:"TABELA"}onSelectTab(t){var i=this;return(0,m.Z)(function*(){i.viewInit&&i.saveUsuarioConfig({active_tab:t.key})})()}filterClear(t){t.controls.nome.setValue(""),super.filterClear(t)}}(y=J).\u0275fac=function(t){return new(t||y)(e.Y36(e.zs3))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-unidade-list"]],viewQuery:function(t,i){if(1&t&&(e.Gf(b.M,5),e.Gf(M.n,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.grid=a.first),e.iGM(a=e.CRH())&&(i.tabs=a.first)}},features:[e.qOj],decls:5,vars:4,consts:[["right","",3,"title","select"],["key","TABELA","icon","bi bi-table","label","Lista",3,"template"],["grid",""],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template",4,"ngIf"],[3,"selectable","snapshot"],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template"],["mapa",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"tabs",0)(1,"tab",1),e.YNc(2,Re,1,2,"ng-template",null,2,e.W1O),e.qZA(),e.YNc(4,Fe,3,1,"tab",3),e.qZA()),2&t){const a=e.MAs(3);e.Q6J("title",i.isModal?"":i.title)("select",i.onSelectTab.bind(i)),e.xp6(1),e.Q6J("template",a),e.xp6(3),e.Q6J("ngIf",!i.selectable)}},dependencies:[_.O5,M.n,H.i,B,k]});var C,X=d(76298),Pe=d(50933);const qe=["unidadeOrigem"],Le=["unidadeDestino"];function Ve(n,t){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"small"),e._uU(4),e.qZA()),2&n){const i=t.row;e.xp6(1),e.Oqu((null==i.unidade_origem?null:i.unidade_origem.nome)||""),e.xp6(3),e.AsE("",(null==i.unidade_origem?null:i.unidade_origem.codigo)||""," - ",(null==i.unidade_origem?null:i.unidade_origem.sigla)||"","")}}const He=function(){return["inativo","!=",null]},K=function(n){return[n]},$=function(){return["configuracoes","unidade"]},we=function(){return{inativos:!0}},ee=function(n){return{filter:n}},ie=function(n,t){return{route:n,params:t}};function Ye(n,t){if(1&n&&e._UZ(0,"input-search",12,13),2&n){const i=e.oxw();e.Q6J("size",12)("dao",i.dao)("where",e.VKq(5,K,e.DdM(4,He)))("selectRoute",e.WLB(11,ie,e.DdM(7,$),e.VKq(9,ee,e.DdM(8,we))))}}function Be(n,t){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"small"),e._uU(4),e.qZA()),2&n){const i=t.row;e.xp6(1),e.Oqu((null==i.unidade_destino?null:i.unidade_destino.nome)||""),e.xp6(3),e.AsE("",(null==i.unidade_destino?null:i.unidade_destino.codigo)||""," - ",(null==i.unidade_destino?null:i.unidade_destino.sigla)||"","")}}const We=function(){return["inativo","==",null]},je=function(){return{inativos:!1}};function ke(n,t){if(1&n&&e._UZ(0,"input-search",14,15),2&n){const i=e.oxw();e.Q6J("size",12)("dao",i.dao)("where",e.VKq(5,K,e.DdM(4,We)))("selectRoute",e.WLB(11,ie,e.DdM(7,$),e.VKq(9,ee,e.DdM(8,je))))}}class te extends X.D{constructor(t){super(t),this.injector=t,this.items=[],this.toolbarButtons=[{icon:"bi bi-yin-yang",label:"Mesma sigla",hint:"Unificar todos que tenham a mesma sigla. Sendo a inativa considerada como origem.",onClick:this.onMesmaSiglaClick.bind(this)}],this.validate=(i,a)=>null,this.dao=t.get(h.J),this.form=this.fh.FormBuilder({exclui_origem:{default:!1},origem_inativo:{default:!0},unidade_origem_id:{default:""},unidade_destino_id:{default:""}},this.cdRef,this.validate)}onMesmaSiglaClick(){this.loading=!0,this.dao.mesmaSigla().then(t=>{let i=[];i=t.reduce((r,u)=>(!u.data_inativacao&&!r.find(c=>c.sigla==u.sigla)&&r.push(u),r),i);let a=i.map(r=>r.id),o=t.filter(r=>!a.includes(r.id)&&!!r.data_inativacao),s=o.map(r=>r.id);this.items=[];for(let r of o){let u=i.find(c=>c.sigla==r.sigla);u&&this.items.push({id:this.dao.generateUuid(),unidade_origem_id:r.id,unidade_destino_id:u.id,unidade_origem:r,unidade_destino:u})}let l=[];for(let r of t)!a.includes(r.id)&&!s.includes(r.id)&&l.push(r.codigo+" - "+r.sigla+" - "+r.nome);l.length&&(this.editableForm.error=(1==l.length?"A unidade abaixo possui duplicidade de SIGLA, mas n\xe3o est\xe1 inativa:":"As unidades abaixo possuem duplicidade de SIGLA, mas n\xe3o est\xe3o inativas:")+"\n"+l.join("\n"))}).finally(()=>{this.loading=!1})}addMerge(){var t=this;return(0,m.Z)(function*(){return{id:t.dao.generateUuid(),unidade_origem_id:"",unidade_destino_id:"",unidade_origem:void 0,unidade_destino:void 0}})()}loadMerge(t,i){return(0,m.Z)(function*(){t.controls.unidade_origem_id.setValue(i.unidade_origem_id),t.controls.unidade_destino_id.setValue(i.unidade_destino_id)})()}removeMerge(t){return(0,m.Z)(function*(){return!0})()}saveMerge(t,i){var a=this;return(0,m.Z)(function*(){let o;return(a.form.controls.unidade_origem_id.value?.length||a.form.controls.unidade_destino_id.value?.length)&&(i.unidade_origem_id=t.controls.unidade_origem_id.value,i.unidade_origem=a.unidadeOrigem?.selectedEntity||(yield a.dao?.getById(i.unidade_origem_id)),i.unidade_destino_id=t.controls.unidade_destino_id.value,i.unidade_destino=a.unidadeDestino?.selectedEntity||(yield a.dao?.getById(i.unidade_destino_id)),o=i),o})()}onMerge(){let t;for(let i of this.items)t=t||(i.unidade_origem_id?.length&&i.unidade_destino_id?.length?void 0:"A origem e o destino precisam estar preenchidos em todos");this.editableForm.error=t,t?.length||(this.loading=!0,this.dao.unificar(this.items.map(i=>Object.assign({},{unidade_origem_id:i.unidade_origem_id,unidade_destino_id:i.unidade_destino_id})),this.form.controls.exclui_origem.value).then(i=>{i&&this.close()}).finally(()=>{this.loading=!1}))}}(C=te).\u0275fac=function(t){return new(t||C)(e.Y36(e.zs3))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-unidade-merge"]],viewQuery:function(t,i){if(1&t&&(e.Gf(D.Q,5),e.Gf(qe,5),e.Gf(Le,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.editableForm=a.first),e.iGM(a=e.CRH())&&(i.unidadeOrigem=a.first),e.iGM(a=e.CRH())&&(i.unidadeDestino=a.first)}},features:[e.qOj],decls:17,vars:16,consts:[["confirmLabel","Unificar",3,"form","title","submit","cancel"],["type","warning","message","Por motivos de seguran\xe7a ser\xe1 permitido somente unificar unidades inativas para unidade ativas. E caso [Exclui origem] n\xe3o esteja habilitado, a unidade de origem continuar\xe1 na lista (como inativa)."],[3,"buttons"],["labelPosition","left","label","Exclui origem","controlName","exclui_origem",3,"size"],["editable","",3,"items","form","add","load","remove","save"],["titleHint","Unidade que ser\xe1 substitu\xedda pela outra",3,"title","template","editTemplate"],["columnUnidadeOrigem",""],["editUnidadeOrigem",""],["titleHint","Unidade que sobrar\xe1 ap\xf3s a unifica\xe7\xe3o",3,"title","template","editTemplate"],["columnUnidadeDestino",""],["editUnidadeDestino",""],["type","options"],["label","","icon","","controlName","unidade_origem_id",3,"size","dao","where","selectRoute"],["unidade_origem",""],["label","","icon","","controlName","unidade_destino_id",3,"size","dao","where","selectRoute"],["unidade_destino",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return i.onMerge()})("cancel",function(){return i.onCancel()}),e._UZ(1,"top-alert",1),e.TgZ(2,"toolbar",2),e._UZ(3,"input-switch",3),e.qZA(),e.TgZ(4,"grid",4)(5,"columns")(6,"column",5),e.YNc(7,Ve,5,3,"ng-template",null,6,e.W1O),e.YNc(9,Ye,2,14,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(11,"column",8),e.YNc(12,Be,5,3,"ng-template",null,9,e.W1O),e.YNc(14,ke,2,14,"ng-template",null,10,e.W1O),e.qZA(),e._UZ(16,"column",11),e.qZA()()()),2&t){const a=e.MAs(8),o=e.MAs(10),s=e.MAs(13),l=e.MAs(15);e.Q6J("form",i.form)("title",i.isModal?"":i.title),e.xp6(2),e.Q6J("buttons",i.toolbarButtons),e.xp6(1),e.Q6J("size",4),e.xp6(1),e.Q6J("items",i.items)("form",i.form)("add",i.addMerge.bind(i))("load",i.loadMerge.bind(i))("remove",i.removeMerge.bind(i))("save",i.saveMerge.bind(i)),e.xp6(2),e.Q6J("title",i.lex.translate("Unidade")+" origem")("template",a)("editTemplate",o),e.xp6(5),e.Q6J("title",i.lex.translate("Unidade")+" destino")("template",s)("editTemplate",l)}},dependencies:[b.M,G.a,Q.b,w.n,D.Q,N.a,O.V,Pe.o]});var Z,Xe=d(88631),Ke=d(27918),$e=d(65298),ei=d(2729);const ii=["usuario"];function ti(n,t){if(1&n&&(e.TgZ(0,"span")(1,"strong"),e._uU(2),e.qZA()()),2&n){const i=e.oxw();e.xp6(2),e.Oqu("Unidade: "+((null==i.entity?null:i.entity.nome)||""))}}function ai(n,t){if(1&n&&(e.TgZ(0,"div",11)(1,"div",12),e._UZ(2,"profile-picture",13),e.qZA(),e.TgZ(3,"div",14)(4,"strong"),e._uU(5),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"small"),e._uU(8),e.qZA()()()),2&n){const i=t.row;e.xp6(2),e.Q6J("url",i.usuario_url_foto||"")("size",40)("hint",i.usuario_nome||""),e.xp6(3),e.Oqu(i.usuario_nome||""),e.xp6(3),e.Oqu(i.usuario_apelido||"")}}function ni(n,t){if(1&n&&e._UZ(0,"input-search",15,16),2&n){const i=e.oxw(),a=e.MAs(1);e.Q6J("disabled",null!=a&&a.adding?void 0:"true")("size",12)("dao",i.usuarioDao)}}function oi(n,t){if(1&n&&(e.TgZ(0,"div"),e._UZ(1,"badge",18)(2,"br"),e.qZA()),2&n){const i=t.$implicit,a=e.oxw(2);e.xp6(1),e.Q6J("color",a.lookup.getColor(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))("icon",a.lookup.getIcon(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))("label",a.lookup.getValue(a.lookup.UNIDADE_INTEGRANTE_TIPO,i||""))}}function di(n,t){if(1&n&&e.YNc(0,oi,3,3,"div",17),2&n){const i=t.row;e.Q6J("ngForOf",i.atribuicoes)}}function si(n,t){if(1&n&&(e.TgZ(0,"input-multiselect",19),e._UZ(1,"input-select",20),e.qZA()),2&n){const i=e.oxw();e.Q6J("size",8)("addItemHandle",i.addItemHandle.bind(i))("deleteItemHandle",i.deleteItemHandle.bind(i)),e.xp6(1),e.Q6J("size",12)("items",i.tiposAtribuicao)}}function li(n,t){if(1&n&&e._UZ(0,"badge",21)(1,"br"),2&n){const i=t.row,a=e.oxw();e.Q6J("label",a.getPerfil(i.id)||"")}}function ri(n,t){if(1&n&&e._UZ(0,"input-select",22),2&n){const i=e.oxw();e.Q6J("size",12)("label",i.lex.translate("Perfil"))("dao",i.perfilDao)}}class ae extends X.D{set control(t){super.control=t}get control(){return super.control}set entity(t){super.entity=t}get entity(){return super.entity}set noPersist(t){super.noPersist=t}get noPersist(){return super.noPersist}constructor(t){super(t),this.injector=t,this.items=[],this.perfis=[],this.tiposAtribuicao=[],this.validate=(i,a)=>{let o=null;return["usuario_id","atribuicoes"].includes(a)&&!i.value?.length&&(o="Obrigat\xf3rio"),"usuario_id"==a&&this.grid?.adding&&this.items.map(s=>s.id).includes(i.value)&&(o="O usu\xe1rio j\xe1 \xe9 integrante desta unidade. Edite-o, ao inv\xe9s de inclu\xed-lo novamente!"),o},this.formValidation=i=>{let a=i.controls.atribuicoes.value;if(this.util.array_diff(["GESTOR","GESTOR_SUBSTITUTO","GESTOR_DELEGADO"],a.map(o=>o.key)||[]).length<2)return"A um mesmo servidor s\xf3 pode ser atribu\xedda uma fun\xe7\xe3o de gestor (titular, substituto ou delegado), para uma mesma Unidade!"},this.integranteService=t.get(Ke.X),this.integranteDao=t.get(Xe.o),this.usuarioDao=t.get(P.q),this.perfilDao=t.get($e.r),this.form=this.fh.FormBuilder({usuario_id:{default:""},atribuicoes:{default:void 0},atribuicao:{default:""},perfil_id:{default:null}},this.cdRef,this.validate)}ngOnInit(){super.ngOnInit(),this.entity=this.metadata?.unidade,this.tiposAtribuicao=this.lookup.UNIDADE_INTEGRANTE_TIPO}ngAfterViewInit(){var t=this;(0,m.Z)(function*(){yield t.loadData(t.entity,t.form)})()}loadData(t,i){var a=this;return(0,m.Z)(function*(){if(t.id){let o=[],s=[];a.loading=!0;try{yield a.integranteDao.carregarIntegrantes(t.id,"").then(l=>o=l.integrantes.filter(r=>r.atribuicoes?.length>0)),o.forEach(l=>s.push(l.id)),a.perfis=yield a.usuarioDao.query({where:[["id","in",s]]}).asPromise()}finally{a.loading=!1,a.items=[],o.forEach(l=>a.items?.push(a.integranteService.completarIntegrante(l,t.id,l.id,l.atribuicoes))),a.items=a.integranteService.ordenarIntegrantes(a.items),a.cdRef.detectChanges(),a.grid.loading=!1}}})()}getPerfil(t){return this.perfis.find(a=>a.id==t)?.perfil?.nome}addItemHandle(){let t;const i=this.lookup.getValue(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),a=this.form.controls.atribuicao.value;if(i?.length&&this.util.validateLookupItem(this.form.controls.atribuicoes.value,a)){t={key:a,value:i,icon:this.lookup.getIcon(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value),color:this.lookup.getColor(this.lookup.UNIDADE_INTEGRANTE_TIPO,this.form.controls.atribuicao.value)},this.form.controls.atribuicao.setValue("")}return t}deleteItemHandle(t){return this.integranteService.ehPermitidoApagar(t.key)}carregarIntegrante(t,i){var a=this;return(0,m.Z)(function*(){let o=a.perfis.find(s=>s.id==i.id);t.controls.usuario_id.setValue(a.grid?.adding?i.usuario_id:i.id),t.controls.perfil_id.setValue(o?.perfil_id),t.controls.atribuicoes.setValue(a.integranteService.converterAtribuicoes(i.atribuicoes)),t.controls.atribuicao.setValue("")})()}adicionarIntegrante(){var t=this;return(0,m.Z)(function*(){return t.grid&&(t.grid.error=""),{id:t.integranteDao.generateUuid(),usuario_id:"",atribuicoes:[]}})()}removerIntegrante(t){var i=this;return(0,m.Z)(function*(){if(t.atribuicoes[0].includes("LOTADO"))yield i.dialog.alert("IMPOSS\xcdVEL EXCLUIR !","O v\xednculo que inclui "+i.lex.translate("a lota\xe7\xe3o")+" "+i.lex.translate("do servidor")+" n\xe3o pode ser exclu\xeddo. Se desejar excluir as demais atribui\xe7\xf5es, edite o v\xednculo. Se deseja alterar "+i.lex.translate("a lota\xe7\xe3o")+", lote-o em outra "+i.lex.translate("Unidade")+".");else if(yield i.dialog.confirm("Exclui ?","Deseja realmente excluir todas as atribui\xe7\xf5es "+i.lex.translate("do servidor")+t.usuario_nome?.toUpperCase()+" "+i.lex.translate("na unidade")+" "+i.entity.sigla.toUpperCase()+" ?")){let o;try{if(i.isNoPersist)return Object.assign(t,{_status:"DELETE",atribuicoes:[]}),!1;i.loading=!0,yield i.integranteDao.salvarIntegrantes([i.integranteService.completarIntegrante(t,i.entity.id,t.id,[])]).then(s=>{(o=s.find(l=>l._metadata.msg?.length)?._metadata.msg)&&i.grid&&(i.grid.error=o)}),yield i.loadData({id:i.entity.id},i.form)}finally{i.loading=!1}}return!1})()}salvarIntegrante(t,i){var a=this;return(0,m.Z)(function*(){let o=a.lookup.uniqueLookupItem(t.controls.atribuicoes.value);t.controls.atribuicoes.setValue(o),a.grid&&(a.grid.error=""),a.cdRef.detectChanges();let s=a.formValidation(t);if(s)yield a.dialog.alert("Imposs\xedvel incluir/alterar o servidor!",s);else{let l=!0,r=a.integranteService.haAlteracaoGerencia(o.map(u=>u.key),Object.assign(i,{usuario_nome:a.usuario?.selectedItem?.entity.nome}),a.grid?.items||[],a.entity?.sigla||"");if("nenhuma"!=r[0]){if(l=yield a.dialog.confirm("CONFIRMA A ALTERA\xc7\xc3O DA CHEFIA ?",r[2]),!l)return;if("troca"===r[0])a.grid.items[r[1]].atribuicoes=a.grid.items[r[1]].atribuicoes.filter(u=>!["GESTOR"].includes(u));o=a.integranteService.inserirAtribuicao(o,"LOTADO"),t.controls.atribuicoes.setValue(o),a.loading=!0}try{a.isNoPersist?(i.id=a.usuario?.selectedEntity.id,a.grid.items=a.integranteService.substituirItem({id:i.id,itens:a.grid?.items||[],apelidoOuSigla:a.usuario?.selectedItem?.entity.apelido,nome:a.usuario?.selectedItem?.entity.nome,codigo:""},o.map(u=>u.key),new g.b(a.entity))):(yield a.integranteDao.salvarIntegrantes([Object.assign({_metadata:{perfil_id:t.controls.perfil_id.value}},a.integranteService.completarIntegrante(i,a.entity.id,t.controls.usuario_id.value,o.map(u=>u.key)))]).then(u=>{let c;(c=u?.find(fi=>fi._metadata.msg?.length)?._metadata.msg)&&a.dialog.alert("ATEN\xc7\xc3O: ERRO!",c)}),yield a.loadData({id:a.entity.id},a.form),a.grid&&(a.grid.error="")),a.cdRef.detectChanges()}catch(u){a.grid&&(a.grid.error=u),yield a.loadData({id:a.entity.id},a.form)}finally{a.loading=!1}}})()}}var v;(Z=ae).\u0275fac=function(t){return new(t||Z)(e.Y36(e.zs3))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["unidade-integrante"]],viewQuery:function(t,i){if(1&t&&(e.Gf(b.M,5),e.Gf(ii,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.grid=a.first),e.iGM(a=e.CRH())&&(i.usuario=a.first)}},inputs:{control:"control",entity:"entity",noPersist:"noPersist"},features:[e.qOj],decls:20,vars:21,consts:[["editable","",3,"items","minHeight","form","hasDelete","add","load","remove","save"],["grid",""],[4,"ngIf"],[3,"title","template","editTemplate","maxWidth"],["columnUsuario",""],["editUsuario",""],["columnAtribuicoes",""],["editAtribuicoes",""],["columnPerfil",""],["editPerfil",""],["type","options"],[1,"d-flex"],[1,"ms-3"],[3,"url","size","hint"],[1,"flex-fill","ms-3"],["label","","icon","","controlName","usuario_id",3,"disabled","size","dao"],["usuario",""],[4,"ngFor","ngForOf"],[3,"color","icon","label"],["controlName","atribuicoes",3,"size","addItemHandle","deleteItemHandle"],["label","","icon","fas fa-sign-out-alt","controlName","atribuicao",3,"size","items"],["color","gray",3,"label"],["controlName","perfil_id","required","",3,"size","label","dao"]],template:function(t,i){if(1&t&&(e.TgZ(0,"grid",0,1),e.YNc(2,ti,3,1,"span",2),e.TgZ(3,"columns")(4,"column",3),e.YNc(5,ai,9,5,"ng-template",null,4,e.W1O),e.YNc(7,ni,2,3,"ng-template",null,5,e.W1O),e.qZA(),e.TgZ(9,"column",3),e.YNc(10,di,1,1,"ng-template",null,6,e.W1O),e.YNc(12,si,2,5,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(14,"column",3),e.YNc(15,li,2,1,"ng-template",null,8,e.W1O),e.YNc(17,ri,1,3,"ng-template",null,9,e.W1O),e.qZA(),e._UZ(19,"column",10),e.qZA()()),2&t){const a=e.MAs(6),o=e.MAs(8),s=e.MAs(11),l=e.MAs(13),r=e.MAs(16),u=e.MAs(18);e.Q6J("items",i.items)("minHeight",500)("form",i.form)("hasDelete",!0)("add",i.adicionarIntegrante.bind(i))("load",i.carregarIntegrante.bind(i))("remove",i.removerIntegrante.bind(i))("save",i.salvarIntegrante.bind(i)),e.xp6(2),e.Q6J("ngIf",!i.isNoPersist),e.xp6(2),e.Q6J("title",i.lex.translate("Usu\xe1rios"))("template",a)("editTemplate",o)("maxWidth",150),e.xp6(5),e.Q6J("title",i.lex.translate("Atribui\xe7\xf5es"))("template",s)("editTemplate",l)("maxWidth",200),e.xp6(5),e.Q6J("title",i.lex.translate("Perfil"))("template",r)("editTemplate",i.auth.hasPermissionTo("MOD_CFG_USER_PERFIL")?u:r)("maxWidth",300)}},dependencies:[_.sg,_.O5,b.M,G.a,Q.b,O.V,L.p,V.p,Y.F,ei.q]});const ui=[{path:"",component:J,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Unidades"}},{path:"new",component:E,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Unidade",modal:!0}},{path:":id/edit",component:E,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Unidade",modal:!0}},{path:":id/consult",component:E,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Unidade",modal:!0}},{path:":id/:idUnidade/integrante",component:ae,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Integrantes da Unidade",modal:!0}},{path:":id/subordinadas",component:J,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Unidades subordinadas"}},{path:"merge",component:te,canActivate:[p.a],resolve:{config:f.o},runGuardsAndResolvers:"always",data:{title:"Unifica\xe7\xe3o",modal:!0}}];class ne{}(v=ne).\u0275fac=function(t){return new(t||v)},v.\u0275mod=e.oAB({type:v}),v.\u0275inj=e.cJS({imports:[R.Bz.forChild(ui),R.Bz]});var U,ci=d(58568),mi=d(72133),pi=d(32864);class oe{}(U=oe).\u0275fac=function(t){return new(t||U)},U.\u0275mod=e.oAB({type:U}),U.\u0275inj=e.cJS({imports:[_.ez,ci.K,pi.UteisModule,mi.UX,ne,W.lC,j.kb]})}}]);