"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[588],{40588:(Se,F,r)=>{r.r(F),r.d(F,{CadeiaValorModule:()=>ee});var T,x,_=r(76733),oe=r(72133),P=r(44575),ie=r(58568),L=r(55579),f=r(1391),g=r(2314),c=r(8239),N=r(78509),u=r(73150),v=r(69478),h=r(19520),R=r(66384),e=r(20755),ae=r(74978),ne=r(15316),U=r(81214),Q=r(57224),I=r(83351),z=r(57765),S=r(45512),B=r(42704),j=r(32802),k=r(84495),C=r(74040),O=r(67501),M=r(76229),Y=r(76298),E=r(92392),se=r(31720);function le(n,o){if(1&n&&(e.TgZ(0,"small",10),e._uU(1),e.qZA()),2&n){const t=o.row,i=o.metadata,a=e.oxw();e.xp6(1),e.Oqu(a.getSequencia(i,t))}}function re(n,o){if(1&n&&e._UZ(0,"input-level",11),2&n){const t=e.oxw();e.Q6J("size",6)("validate",t.validateLevel)}}function de(n,o){if(1&n&&(e.TgZ(0,"strong",12),e._uU(1),e.qZA()),2&n){const t=o.row,i=o.metadata,a=e.oxw();e.Udp("margin-left",a.getNivelSequencia(i),"px"),e.xp6(1),e.Oqu(t.nome||"")}}function ce(n,o){if(1&n&&e._UZ(0,"input-text",13),2&n){const t=e.oxw();e.Q6J("size",6)("control",t.form.controls.nome),e.uIk("maxlength",250)}}class J extends Y.D{set noPersist(o){super.noPersist=o}get noPersist(){return super.noPersist}set control(o){super.control=o}get control(){return super.control}set entity(o){super.entity=o}get entity(){return super.entity}get items(){return this.gridControl.value||this.gridControl.setValue(new v.y),this.gridControl.value.processos||(this.gridControl.value.processos=[]),this.gridControl.value.processos}constructor(o){super(o),this.injector=o,this.validate=(t,i)=>{let a=null;return["nome"].indexOf(i)>=0&&!t.value?.length&&(a="Obrigat\xf3rio"),["nivel"].indexOf(i)>=0&&(a=this.existePai(t)),a},this.validateLevel=(t,i,a)=>{if(a.length){let s=[...t.map(l=>l.value),i.value];return this.processos(s).length==s.length}{let s=this.processos(t.map(d=>d.value));return(s.length==t.length&&s.length?this.items.filter(d=>d.processo_pai_id==s[s.length-1].id):[]).length+1>=i.value}},this.processos=t=>{let i=[];return t.reduce((a,s)=>{let l=a.find(d=>d.sequencia==s);return l?(i.push(l),this.items.filter(d=>d.processo_pai_id==l?.id)):[]},this.items.filter(a=>!a.processo_pai_id)),i},this.cdRef=o.get(e.sBO),this.dao=o.get(h.m),this.processosDao=o.get(O.k),this.form=this.fh.FormBuilder({nome:{default:""},sequencia:{default:1},nivel:{default:""}},this.cdRef,this.validate)}existePai(o){let t=null,i=o.value.split("."),a=this.items;if(i.length>1){let s=a.reduce((d,m)=>d.created_at>m.created_at?d:m),l=this.processos(i.slice(0,i.length-1));if(s.processo_pai_id){let p,d=s.processo_pai_id,m="";for(;d;){let te=this.items.find(ze=>ze.id==d);m=(te?.sequencia||"")+"."+m,d=te?.processo_pai_id||null}p=m.split("."),p.pop(),p.push((s.sequencia-1).toString()),this.JSON.stringify(i)<=this.JSON.stringify(p)&&i[i.length-1].parseInt()<=p[p.length-1].parseInt()?t="N\xedvel j\xe1 existente":i.length>p.length&&(t=l.length+1==i.length?"Adicione o n\xedvel filho pelo bot\xe3o 'Adicionar filho'":"N\xe3o existe o n\xedvel pai")}else t=l[0].id==s.id?"N\xe3o existe o n\xedvel pai":l.length+1==i.length?"Adicione o n\xedvel filho pelo bot\xe3o 'Adicionar filho'":"N\xe3o existe o n\xedvel pai"}else if(a.length>0){let s=a.reduce((l,d)=>l.created_at>d.created_at?l:d);t=i[0]<s.sequencia?"N\xedvel j\xe1 existente":i[0]>s.sequencia?"Insira o n\xedvel em sequ\xeancia num\xe9rica":null==s.processo_pai_id?null:"Adicione este n\xedvel pelo bot\xe3o 'Adicionar n\xedvel'"}return t}loadData(o,t){this.cdRef.detectChanges(),this.sortProcessos()}addChildProcesso(o,t,i){var a=this;return(0,c.Z)(function*(){let s=new M.q({id:a.dao.generateUuid(),processo_pai_id:o.id,sequencia:a.items.filter(l=>l.processo_pai_id==o.id).length+1,nome:""});a.items.push(s),a.grid.setMetadata(s,{nivel:a.getSequencia({},s)}),a.sortProcessos(),a.grid.adding=!0,yield a.grid.edit(s)})()}getSequencia(o,t){if(!o.nivel){let i=t.processo_pai_id,a="",s=[];for(;i;){s.push(i);let l=this.items.find(d=>d.id==i);a=(l?.sequencia||"")+"."+a,i=l?.processo_pai_id||null}a+=t.sequencia,o.nivel!=a&&(o.nivel=a,o.path=s),this.grid||this.sortProcessosItems()}return o.nivel}getNivelSequencia(o){return 10*(o.nivel.match(/\./g)||[]).length}sortProcessos(){this.items.sort((o,t)=>{const i=(this.grid.getMetadata(o)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join("."),a=(this.grid.getMetadata(t)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join(".");return i<a?-1:i>a?1:0})}sortProcessosItems(){this.items.sort((o,t)=>{let i=o.processo_pai_id?this.retornaNivel(o):o.sequencia.toString(),a=t.processo_pai_id?this.retornaNivel(t):t.sequencia.toString();const s=(i||"").split(".").map(d=>("000"+d).substr(-3)).join("."),l=(a||"").split(".").map(d=>("000"+d).substr(-3)).join(".");return s<l?-1:s>l?1:0})}retornaNivel(o){let t=o.processo_pai_id,i="";for(;t;){let a=this.items.find(s=>s.id==t);i=(a?.sequencia||"")+"."+i,t=a?.processo_pai_id||null}return i+=o.sequencia,i}addProcesso(){var o=this;return(0,c.Z)(function*(){return new M.q({id:o.dao.generateUuid(),sequencia:o.items.filter(i=>!i.processo_pai_id).length+1,nome:""})})()}loadProcesso(o,t){var i=this;return(0,c.Z)(function*(){o.controls.nivel.setValue(i.getSequencia(i.grid?.getMetadata(t),t)),o.controls.sequencia.setValue(t.sequencia),o.controls.nome.setValue(t.nome),i.cdRef.detectChanges()})()}removeProcesso(o){var t=this;return(0,c.Z)(function*(){if(yield t.dialog.confirm("Exclui ?","Deseja realmente excluir o item ?")){let a=o;return(t.items.filter(l=>l.processo_pai_id==a.id)||[]).forEach(l=>t.removeProcesso(l)),t.items.splice(t.items.findIndex(l=>l.id==a.id),1),t.isNoPersist||(yield t.processosDao?.delete(o)),!0}return!1})()}saveProcesso(o,t){var i=this;return(0,c.Z)(function*(){let a;if(i.form.markAllAsTouched(),i.form.valid){let s=o.controls.nivel.value.split("."),l=i.processos(s.slice(0,s.length-1)),d=l?.length?l[l.length-1].id:null,m=1*s[s.length-1];i.items.filter(p=>p.processo_pai_id==d&&p.sequencia>=m).forEach(p=>p.sequencia++),t.id="NEW"==t.id?i.dao.generateUuid():t.id,t.sequencia=m,t.cadeia_valor_id=i.entity?.id,t.processo_pai_id=d,t.nome=o.controls.nome.value,a=t,i.isNoPersist||(a=yield i.processosDao?.save(t))}return a})()}editEndProcesso(o){this.grid?.clearMetadata(),this.cdRef.detectChanges(),this.sortProcessos(),this.cdRef.detectChanges()}dynamicButtons(o){let t=[];return t.push({hint:"Adicionar filho",icon:"bi bi-plus-circle",onClick:this.addChildProcesso.bind(this)}),t}}(T=J).\u0275fac=function(o){return new(o||T)(e.Y36(e.zs3))},T.\u0275cmp=e.Xpm({type:T,selectors:[["cadeia-valor-list-processos"]],viewQuery:function(o,t){if(1&o&&(e.Gf(C.Q,5),e.Gf(u.M,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first),e.iGM(i=e.CRH())&&(t.grid=i.first)}},inputs:{cdRef:"cdRef",noPersist:"noPersist",control:"control",entity:"entity"},features:[e.qOj],decls:15,vars:15,consts:[["noButtons","",3,"form","disabled"],[1,"row"],["editable","",3,"items","form","hasDelete","add","load","remove","save","editEnd"],["title","N\xedvel",3,"template","editTemplate"],["nivel",""],["editNivel",""],["title","Processos",3,"template","editTemplate"],["processo",""],["editProcesso",""],["type","options",3,"dynamicButtons"],[1,"d-block"],["controlName","nivel",3,"size","validate"],[1,"d-block","text-break","w-100"],["controlName","nome",3,"size","control"]],template:function(o,t){if(1&o&&(e.TgZ(0,"editable-form",0)(1,"div",1)(2,"grid",2)(3,"columns")(4,"column",3),e.YNc(5,le,2,1,"ng-template",null,4,e.W1O),e.YNc(7,re,1,2,"ng-template",null,5,e.W1O),e.qZA(),e.TgZ(9,"column",6),e.YNc(10,de,2,3,"ng-template",null,7,e.W1O),e.YNc(12,ce,1,3,"ng-template",null,8,e.W1O),e.qZA(),e._UZ(14,"column",9),e.qZA()()()()),2&o){const i=e.MAs(6),a=e.MAs(8),s=e.MAs(11),l=e.MAs(13);e.Q6J("form",t.form)("disabled",t.formDisabled),e.xp6(2),e.Q6J("items",t.items)("form",t.form)("hasDelete",!0)("add",t.addProcesso.bind(t))("load",t.loadProcesso.bind(t))("remove",t.removeProcesso.bind(t))("save",t.saveProcesso.bind(t))("editEnd",t.editEndProcesso.bind(t)),e.xp6(2),e.Q6J("template",i)("editTemplate",a),e.xp6(5),e.Q6J("template",s)("editTemplate",l),e.xp6(5),e.Q6J("dynamicButtons",t.dynamicButtons.bind(t))}},dependencies:[u.M,Q.a,I.b,C.Q,E.m,se.E]});const pe=["unidade"];function me(n,o){1&n&&e._UZ(0,"toolbar")}function ue(n,o){if(1&n&&(e.TgZ(0,"span",21),e._UZ(1,"i",22),e._uU(2),e.qZA()),2&n){const t=e.oxw().row;e.xp6(2),e.hij(" ",null==t?null:t.length,"")}}function _e(n,o){if(1&n&&e.YNc(0,ue,3,1,"span",20),2&n){const t=o.row;e.Q6J("ngIf",null==t?null:t.length)}}function fe(n,o){if(1&n&&e._UZ(0,"cadeia-valor-list-processos",23,24),2&n){const t=o.row,i=e.oxw(2);e.Q6J("entity",t)("cdRef",i.cdRef)}}function ge(n,o){if(1&n&&(e.TgZ(0,"column",17),e.YNc(1,_e,1,1,"ng-template",null,18,e.W1O),e.YNc(3,fe,2,2,"ng-template",null,19,e.W1O),e.qZA()),2&n){const t=e.MAs(2),i=e.MAs(4),a=e.oxw();e.Q6J("align","center")("hint",a.lex.translate("Processos"))("template",t)("expandTemplate",i)}}function ve(n,o){if(1&n&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&n){const t=o.row;e.xp6(1),e.Oqu(t.nome)}}function he(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=o.row,i=e.oxw();e.xp6(1),e.Oqu(i.dao.getDateFormatted(t.data_inicio))}}function Ce(n,o){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=o.row,i=e.oxw();e.xp6(1),e.Oqu(i.dao.getDateFormatted(t.data_fim))}}function be(n,o){if(1&n&&e._UZ(0,"column",26),2&n){const t=e.oxw();e.Q6J("onEdit",t.edit)("options",t.options)}}class q extends N.E{constructor(o){super(o,v.y,h.m),this.injector=o,this.selectable=!1,this.filterWhere=t=>{let i=[],a=t.value;return a.unidade_id?.length&&i.push(["unidade_id","==",a.unidade_id]),a.data_inicio&&i.push(["data_fim",">=",a.data_inicio]),a.data_fim&&i.push(["data_inicio","<=",a.data_fim]),i},this.entidadeDao=o.get(ne.i),this.unidadeDao=o.get(U.J),this.join=["processos"],this.code="MOD_CADV",this.filter=this.fh.FormBuilder({data_inicio:{default:null},data_fim:{default:null},unidade_id:{default:""},entidade_id:{default:null}}),this.addOption(this.OPTION_INFORMACOES),this.addOption(this.OPTION_EXCLUIR,"MOD_CADV_EXCL"),this.addOption(this.OPTION_LOGS,"MOD_AUDIT_LOG")}onChangeData(){const o=new Date(this.filter.controls.data_inicio.value).getTime();if(new Date(this.filter.controls.data_fim.value).getTime()<o){let i=new Date(o);i.setDate(i.getDate()+1),this.filter.controls.data_fim.setValue(i)}}}(x=q).\u0275fac=function(o){return new(o||x)(e.Y36(e.zs3))},x.\u0275cmp=e.Xpm({type:x,selectors:[["cadeia-valor-list-grid"]],viewQuery:function(o,t){if(1&o&&(e.Gf(u.M,5),e.Gf(pe,7)),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first),e.iGM(i=e.CRH())&&(t.unidade=i.first)}},inputs:{snapshot:"snapshot",fixedFilter:"fixedFilter",selectable:"selectable"},features:[e.qOj],decls:21,vars:30,consts:[[3,"dao","add","orderBy","groupBy","join","selectable","hasAdd","hasEdit","select"],[4,"ngIf"],[3,"deleted","form","where","submit","collapseChange","collapsed"],[1,"row"],["controlName","unidade_id","required","",3,"size","control","dao"],["unidade",""],["date","","label","In\xedcio","icon","bi bi-calendar-date","controlName","data_inicio",3,"size","control","labelInfo","change"],["date","","label","Fim","icon","bi bi-calendar-date","controlName","data_fim",3,"size","control","labelInfo","change"],["type","expand","icon","bi bi-boxes",3,"align","hint","template","expandTemplate",4,"ngIf"],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["title","In\xedcio",3,"template"],["columnInicio",""],["title","Fim",3,"template"],["columnFim",""],["type","options",3,"onEdit","options",4,"ngIf"],[3,"rows"],["type","expand","icon","bi bi-boxes",3,"align","hint","template","expandTemplate"],["columnProcessos",""],["columnExpandedProcessos",""],["class","badge rounded-pill bg-light text-dark",4,"ngIf"],[1,"badge","rounded-pill","bg-light","text-dark"],[1,"bi","bi-boxes"],[3,"entity","cdRef"],["processos",""],[1,"text-break","w-100"],["type","options",3,"onEdit","options"]],template:function(o,t){if(1&o&&(e.TgZ(0,"grid",0),e.NdJ("select",function(a){return t.onSelect(a)}),e.YNc(1,me,1,0,"toolbar",1),e.TgZ(2,"filter",2)(3,"div",3),e._UZ(4,"input-search",4,5),e.TgZ(6,"input-datetime",6),e.NdJ("change",function(){return t.onChangeData()}),e.qZA(),e.TgZ(7,"input-datetime",7),e.NdJ("change",function(){return t.onChangeData()}),e.qZA()()(),e.TgZ(8,"columns"),e.YNc(9,ge,5,4,"column",8),e.TgZ(10,"column",9),e.YNc(11,ve,2,1,"ng-template",null,10,e.W1O),e.qZA(),e.TgZ(13,"column",11),e.YNc(14,he,2,1,"ng-template",null,12,e.W1O),e.qZA(),e.TgZ(16,"column",13),e.YNc(17,Ce,2,1,"ng-template",null,14,e.W1O),e.qZA(),e.YNc(19,be,1,2,"column",15),e.qZA(),e._UZ(20,"pagination",16),e.qZA()),2&o){const i=e.MAs(12),a=e.MAs(15),s=e.MAs(18);e.Q6J("dao",t.dao)("add",t.add)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable)("hasAdd",t.auth.hasPermissionTo("MOD_CADV_INCL"))("hasEdit",t.auth.hasPermissionTo("MOD_CADV_EDT")),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",6)("control",t.filter.controls.unidade_id)("dao",t.unidadeDao),e.xp6(2),e.Q6J("size",3)("control",t.filter.controls.data_inicio)("labelInfo","In\xedcio "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",3)("control",t.filter.controls.data_fim)("labelInfo","Fim "+t.lex.translate("cadeia de valor")),e.xp6(2),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("template",i),e.xp6(3),e.Q6J("template",a),e.xp6(3),e.Q6J("template",s),e.xp6(3),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[_.O5,u.M,Q.a,I.b,z.z,S.n,B.Q,j.V,k.k,J]});var V,Ae=r(64603),Me=r(28032);const Te=["cadeiaValorInstitucional"],xe=["editProcessoForm"];function Ve(n,o){if(1&n&&(e.TgZ(0,"editable-form",1)(1,"div",14),e._UZ(2,"input-text",15),e.qZA()()),2&n){const t=e.oxw();e.Q6J("form",t.form),e.xp6(2),e.Q6J("size",12)("label","Nome do "+t.lex.translate("processo"))("control",t.form.controls.nome),e.uIk("maxlength",250)}}const H=function(n){return{processo:n}};function ye(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32),e.NdJ("dndEnd",function(a){e.CHM(t);const s=e.oxw(4);return e.KtG(s.onDragEnd(a))})("dndMoved",function(){const s=e.CHM(t).$implicit,l=e.oxw().processo,d=e.oxw(3);return e.KtG(d.onDragged(s,l.children,"move"))})("dndStart",function(a){e.CHM(t);const s=e.oxw(4);return e.KtG(s.onDragStart(a))}),e.TgZ(1,"div",22)(2,"h5",17),e._uU(3),e.qZA(),e.TgZ(4,"div",33),e._UZ(5,"action-button",19),e.qZA()(),e.GkF(6,27),e.qZA()}if(2&n){const t=o.$implicit;e.oxw(2);const i=e.MAs(8),a=e.oxw(2);e.Akn("--bg:"+t.cor+";--color:black;"),e.Q6J("dndDisableIf",!a.canEdit)("dndDraggable",t),e.xp6(3),e.AsE("",t.level,". ",t.nome,""),e.xp6(2),e.Q6J("data",t)("items",a.options),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(10,H,t))}}const G=function(){return["processo"]};function Ze(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",29),e.NdJ("dndDrop",function(a){const l=e.CHM(t).processo,d=e.oxw(3);return e.KtG(d.onDrop(a,l.children))}),e.TgZ(1,"div",30)(2,"p",9),e._UZ(3,"span",23)(4,"span",24),e.qZA()(),e.YNc(5,ye,7,12,"div",31),e.qZA()}if(2&n){const t=o.processo;e.Q6J("dndDropzone",e.DdM(4,G)),e.xp6(1),e.Akn("--bg:gray;--color:black;"),e.xp6(4),e.Q6J("ngForOf",t.children)}}function De(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",26),e.NdJ("dndEnd",function(a){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onDragEnd(a))})("dndMoved",function(){const s=e.CHM(t).$implicit,l=e.oxw().$implicit,d=e.oxw();return e.KtG(d.onDragged(s,l.children,"move"))})("dndStart",function(a){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onDragStart(a))}),e.TgZ(1,"div",22)(2,"h4",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18),e._UZ(5,"action-button",19),e.qZA()(),e.GkF(6,27),e.YNc(7,Ze,6,5,"ng-template",null,28,e.W1O),e.qZA()}if(2&n){const t=o.$implicit,i=e.MAs(8),a=e.oxw(2);e.Akn("--bg:"+t.cor+";--color:black;"),e.Q6J("dndDisableIf",!a.canEdit)("dndDraggable",t),e.xp6(3),e.AsE("",t.level,". ",t.nome,""),e.xp6(2),e.Q6J("data",t)("items",a.options),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(10,H,t))}}function Pe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",16),e.NdJ("dndEnd",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.onDragEnd(a))})("dndMoved",function(){const s=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.onDragged(s,l.processos,"move"))})("dndStart",function(a){e.CHM(t);const s=e.oxw();return e.KtG(s.onDragStart(a))}),e.TgZ(1,"div",7)(2,"div",8)(3,"h3",17),e._uU(4),e.qZA(),e.TgZ(5,"div",18),e._UZ(6,"action-button",19),e.qZA()(),e.TgZ(7,"div",20),e.NdJ("dndDrop",function(a){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.onDrop(a,l.children))}),e.TgZ(8,"div",21)(9,"div",22)(10,"p",9),e._UZ(11,"span",23)(12,"span",24),e.qZA()()(),e.YNc(13,De,9,12,"div",25),e.qZA()()()}if(2&n){const t=o.$implicit,i=e.oxw();e.Q6J("dndDisableIf",!i.canEdit)("dndDraggable",t),e.xp6(1),e.Akn("--border-color:"+t.cor+";--bg:white;--color:black;"),e.xp6(3),e.AsE("",t.level,". ",t.nome,""),e.xp6(2),e.Q6J("data",t)("items",i.options),e.xp6(1),e.Q6J("dndDropzone",e.DdM(12,G)),e.xp6(1),e.Akn("--bg:gray;--color:black;"),e.xp6(5),e.Q6J("ngForOf",t.children)}}class Oe extends M.q{constructor(o){super(),this.children=[],this.cor="#010101",this.level="",this.initialization(o)}}class W extends Y.D{constructor(o){super(o),this.injector=o,this.cadeiasValor=[],this.processos=[],this.canEdit=!0,this.options=[{icon:"bi bi-file-earmark-bar-graph",label:"Entregas",onClick:this.consultProcesso.bind(this)},{divider:!0},{icon:"bi bi-plus-circle",label:"Incluir subprocesso",onClick:this.addProcesso.bind(this)},{icon:"bi bi-pencil-square",label:"Alterar",onClick:this.editProcesso.bind(this)},{divider:!0},{icon:"bi bi-trash",label:"Excluir",onClick:this.deleteProcesso.bind(this)}],this.validate=(t,i)=>{let a=null;return"nome"==i&&!t.value?.length&&(a="Obrigat\xf3rio"),a},this.dao=o.get(h.m),this.cadeiaValorProcessoDao=o.get(O.k),this.join=["processos"],this.title=this.lex.translate("Cadeias de Valores"),this.form=this.fh.FormBuilder({cadeia_valor_id:{default:null},nome:{default:""}},this.cdRef,this.validate)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadData(this.entity)}consultProcesso(o){this.go.navigate({route:["gestao","plano-entrega","entrega","processos",o.id]})}addProcesso(o){var t=this;return(0,c.Z)(function*(){let i=new M.q({path:o.path+"/"+o.id,cadeia_valor_id:o.cadeia_valor_id,processo_pai_id:o.id,nome:"",sequencia:1});yield t.editProcesso(i)})()}editProcesso(o){var t=this;return(0,c.Z)(function*(){t.entity=o,t.form.controls.nome.setValue(o.nome),t.form.controls.nome.setErrors(null);let i=yield t.dialog.template({title:"Processo",modalWidth:500},t.editProcessoForm,[{label:"Gravar",icon:"bi bi-check-circle",color:"btn-outline-success",value:"GRAVAR"},{label:"Cancelar",icon:"bi bi-dash-circle",color:"btn btn-outline-danger",value:"CANCELAR"}]).asPromise();if("GRAVAR"==i.button.value)if(t.form.valid){t.entity.nome=t.form.controls.nome.value,t.submitting=!0;try{(yield t.cadeiaValorProcessoDao.save(t.entity))&&i.dialog.close(),yield t.refreshCadeiaValor()}catch(a){t.dialog.alert("Error",a.message?a.message:a||"Erro desconhecido")}finally{t.submitting=!1}}else t.form.markAllAsTouched();else i.dialog.close()})()}deleteProcesso(o){var t=this;return(0,c.Z)(function*(){if(yield t.dialog.confirm("Exclui ?","Deseja realmente excluir?"))try{yield t.cadeiaValorProcessoDao.delete(o.id),yield t.refreshCadeiaValor()}catch(a){t.dialog.alert("Erro","Erro ao excluir: "+(a?.message?a?.message:a||"Erro desconhecido"))}})()}loadData(o,t){var i=this;return(0,c.Z)(function*(){i.query=i.dao.query({where:[["data_arquivamento","==",null]],orderBy:[["data_inicio","desc"]],join:i.join}),i.query.asPromise().then(a=>{let s=i.form.controls.cadeia_valor_id.value;i.form.controls.cadeia_valor_id.setValue(null),i.cadeiasValor=a.map(l=>Object.assign({},{key:l.id,value:l.nome,data:l})),i.cdRef.detectChanges(),i.form.controls.cadeia_valor_id.setValue(s||(i.cadeiasValor.length?i.cadeiasValor[0].key:null))})})()}onCadeiaValorChange(){const o=(t,i)=>i.sort((a,s)=>a.sequencia-s.sequencia).map(a=>Object.assign(new Oe({children:o(t+a.sequencia+".",this.cadeiaValor.processos.filter(s=>s.processo_pai_id==a.id)),level:t+a.sequencia,cor:this.lookup.CORES_BACKGROUND[Math.floor(Math.random()*this.lookup.CORES_BACKGROUND.length)].color}),a));this.cadeiaValor=this.cadeiaValorInstitucional?.selectedItem?.data,this.cadeiaValor&&(this.processos=o("",this.cadeiaValor.processos.filter(t=>!t.processo_pai_id)))}refreshCadeiaValor(){var o=this;return(0,c.Z)(function*(){yield o.loadData(o.entity,o.form)})()}onProcessoClick(o){let t=o;this.go.navigate({route:["gestao","cadeiaValor",this.cadeiaValor?.id,"objetivos",t.id]})}onObjetivoDeleteClick(o){}onObjetivoEditClick(o){}onDrop(o,t){console.log("Drop",o),t?.splice(typeof o.index>"u"?t.length:o.index,0,o.data)}onDragEnd(o){console.log("DragEnd",o)}onDragged(o,t,i){console.log("Dragged",o,t),t.splice(t.indexOf(o),1)}onDragStart(o){console.log("DragStart",o)}}var y;function Ee(n,o){if(1&n&&e._UZ(0,"cadeia-valor-list-grid",4),2&n){const t=e.oxw();e.Q6J("selectable",t.selectable)("snapshot",t.snapshot||t.modalRoute||t.route.snapshot)}}function we(n,o){1&n&&e._UZ(0,"cadeia-valor-mapa")}function Ne(n,o){if(1&n&&(e.TgZ(0,"tab",5),e.YNc(1,we,1,0,"ng-template",null,6,e.W1O),e.qZA()),2&n){const t=e.MAs(2);e.Q6J("template",t)}}(V=W).\u0275fac=function(o){return new(o||V)(e.Y36(e.zs3))},V.\u0275cmp=e.Xpm({type:V,selectors:[["cadeia-valor-mapa"]],viewQuery:function(o,t){if(1&o&&(e.Gf(C.Q,5),e.Gf(Te,5),e.Gf(xe,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first),e.iGM(i=e.CRH())&&(t.cadeiaValorInstitucional=i.first),e.iGM(i=e.CRH())&&(t.editProcessoForm=i.first)}},features:[e.qOj],decls:15,vars:9,consts:[["editProcessoForm",""],["noButtons","",3,"form"],[1,"row","my-2"],["controlName","cadeia_valor_id",3,"size","control","items","change"],["cadeiaValorInstitucional",""],[1,"row","my-2",3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"row","cadeia-valor"],[1,"nivel-1"],[1,"d-flex","justify-content-between"],[1,"card-text","placeholder-glow"],[1,"placeholder","col-2"],[1,"placeholder","col-4"],[1,"placeholder","col-6"],["class","row cadeia-valor","dndType","processo","dndEffectAllowed","move",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],[1,"row"],["icon","bi bi-textarea-t","controlName","nome",3,"size","label","control"],["dndType","processo","dndEffectAllowed","move",1,"row","cadeia-valor",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[1,"texto","text-break"],[1,"btn-group","dropstart","dropdown-menu-button","ms-2"],["noArrow","","icon","bi bi-wrench-adjustable-circle","color","transparent-black p-1 py-0",3,"data","items"],[1,"d-flex","align-content-stretch","flex-wrap",3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"nivel-2"],[1,"d-flex","justify-content-between","mb-2"],[1,"placeholder","col-5"],[1,"placeholder","col-7"],["class","nivel-2","dndType","processo","dndEffectAllowed","move",3,"style","dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],["dndType","processo","dndEffectAllowed","move",1,"nivel-2",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["innerProcessos",""],[3,"dndDropzone","dndDrop"],["dndPlaceholderRef","",1,"nivel-3"],["class","nivel-3","dndType","processo","dndEffectAllowed","move",3,"style","dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart",4,"ngFor","ngForOf"],["dndType","processo","dndEffectAllowed","move",1,"nivel-3",3,"dndDisableIf","dndDraggable","dndEnd","dndMoved","dndStart"],[1,"btn-group","dropstart","dropdown-menu-button","ms-2","align-button"]],template:function(o,t){1&o&&(e.YNc(0,Ve,3,5,"ng-template",null,0,e.W1O),e.TgZ(2,"editable-form",1)(3,"div",2)(4,"input-select",3,4),e.NdJ("change",function(){return t.onCadeiaValorChange()}),e.qZA()()(),e.TgZ(6,"div",5),e.NdJ("dndDrop",function(a){return t.onDrop(a,t.processos)}),e.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"p",9),e._UZ(11,"span",10)(12,"span",11)(13,"span",12),e.qZA()()()(),e.YNc(14,Pe,14,13,"div",13),e.qZA()),2&o&&(e.xp6(2),e.Q6J("form",t.form),e.xp6(2),e.Q6J("size",12)("control",t.form.controls.cadeia_valor_id)("items",t.cadeiasValor),e.xp6(2),e.Q6J("dndDropzone",e.DdM(8,G)),e.xp6(2),e.Akn("--border-color:gray;--bg:white;--color:black;"),e.xp6(6),e.Q6J("ngForOf",t.processos))},dependencies:[_.sg,_.tP,C.Q,E.m,Ae.p,Me.x,P.jk,P.Q4,P.s1],styles:['.cadeia-valor[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{border:0;padding:0;background:none}.cadeia-valor[_ngcontent-%COMP%]   .dropdown-menu-button[_ngcontent-%COMP%]{margin-top:-5px}.cadeia-valor[_ngcontent-%COMP%]   .align-button[_ngcontent-%COMP%]{margin-top:-10px}.cadeia-valor[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{max-width:200px}.nivel-1[_ngcontent-%COMP%]{border:2px solid var(--border-color);padding:5px;background:var(--bg);position:relative;margin-bottom:15px;color:var(--color)}.nivel-1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:18px}.nivel-1[_ngcontent-%COMP%]:after, .nivel-1[_ngcontent-%COMP%]:before{top:100%;left:95%;border:solid #fff;content:"";height:0;width:0;position:absolute;pointer-events:none}.nivel-1[_ngcontent-%COMP%]:after{border-width:20px;margin-left:-20px;border-color:#88b7d500;border-top-color:var(--bg)}.nivel-1[_ngcontent-%COMP%]:before{border-width:23px;margin-left:-23px;border-color:#c2e1f500;border-top-color:var(--border-color)}.nivel-2[_ngcontent-%COMP%]{position:relative;padding:10px;color:var(--color);background-color:var(--bg);margin-bottom:10px;margin-right:40px}.nivel-2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;text-align:center}.nivel-2[_ngcontent-%COMP%]:before, .nivel-2[_ngcontent-%COMP%]:after{width:20px;height:50%;position:absolute;left:100%;content:""}.nivel-2[_ngcontent-%COMP%]:before{top:0;background:linear-gradient(to right top,var(--bg) 50%,transparent 50%)}.nivel-2[_ngcontent-%COMP%]:after{top:50%;background:linear-gradient(to right bottom,var(--bg) 50%,transparent 50%)}.nivel-3[_ngcontent-%COMP%]{background-color:var(--bg);color:var(--color);padding:5px;margin-bottom:10px}.nivel-3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin:0}.nivel-3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:10px;margin-top:5px;padding:5px;font-size:13px;background-color:var(--bg);color:var(--color)}']});class K extends N.E{constructor(o){super(o,v.y,h.m),this.injector=o,this.filterWhere=t=>{t.value;return[]},this.code="MOD_CADV",this.title=this.lex.translate("Cadeias de Valores"),this.filter=this.fh.FormBuilder({})}ngAfterViewInit(){super.ngAfterViewInit(),this.tabs.active=["TABELA","MAPA"].includes(this.usuarioConfig.active_tab)?this.usuarioConfig.active_tab:"TABELA"}onSelectTab(o){var t=this;return(0,c.Z)(function*(){t.viewInit&&t.saveUsuarioConfig({active_tab:o.key})})()}filterClear(o){o.controls.nome.setValue(""),super.filterClear(o)}}(y=K).\u0275fac=function(o){return new(o||y)(e.Y36(e.zs3))},y.\u0275cmp=e.Xpm({type:y,selectors:[["app-cadeia-valor-list"]],viewQuery:function(o,t){if(1&o&&(e.Gf(u.M,5),e.Gf(R.n,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first),e.iGM(i=e.CRH())&&(t.tabs=i.first)}},features:[e.qOj],decls:5,vars:4,consts:[["right","",3,"title","select"],["key","TABELA","icon","bi bi-table","label","Lista",3,"template"],["grid",""],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template",4,"ngIf"],[3,"selectable","snapshot"],["key","MAPA","icon","bi bi-card-heading","label","Mapa",3,"template"],["mapa",""]],template:function(o,t){if(1&o&&(e.TgZ(0,"tabs",0)(1,"tab",1),e.YNc(2,Ee,1,2,"ng-template",null,2,e.W1O),e.qZA(),e.YNc(4,Ne,3,1,"tab",3),e.qZA()),2&o){const i=e.MAs(3);e.Q6J("title",t.isModal?"":t.title)("select",t.onSelectTab.bind(t)),e.xp6(1),e.Q6J("template",i),e.xp6(3),e.Q6J("ngIf",!t.selectable)}},dependencies:[_.O5,R.n,ae.i,q,W]});var Z,Qe=r(1184),Ie=r(25560);const Je=["processos"],qe=["unidade"];class w extends Qe.F{constructor(o){super(o,v.y,h.m),this.injector=o,this.validate=(t,i)=>{let a=null;return["nome","unidade_id"].indexOf(i)>=0&&!t.value?.length&&(a="Obrigat\xf3rio"),["data_inicio"].indexOf(i)>=0&&!this.dao?.validDateTime(t.value)&&(a="Inv\xe1lido"),"data_fim"==i&&t.value&&!this.dao?.validDateTime(t.value)&&(a="Inv\xe1lido"),a},this.formValidation=t=>this.form.controls.data_fim.value&&this.form.controls.data_inicio.value>this.form.controls.data_fim.value?"A data do in\xedcio n\xe3o pode ser maior que a data do fim!":null,this.titleEdit=t=>"Editando "+this.lex.translate("Cadeia de Valor")+": "+(t?.nome||""),this.unidadeDao=o.get(U.J),this.join=["processos"],this.form=this.fh.FormBuilder({nome:{default:""},data_inicio:{default:new Date},data_fim:{default:null},unidade_id:{default:""},moveFilhos:{default:!1}},this.cdRef,this.validate)}loadData(o,t){let i=Object.assign({},t.value);t.patchValue(this.util.fillForm(i,o))}initializeData(o){this.entity=new v.y,this.loadData(this.entity,o)}saveData(o){var t=this;return(0,c.Z)(function*(){return new Promise((i,a)=>{t.processos.grid.confirm();let s=t.util.fill(new v.y,t.entity);t.form.value.entidade_id=t.auth.entidade?.id,s=t.util.fillForm(s,t.form.value),s.processos=t.processos.items,i(s)})})()}}var D,b;function Ge(n,o){if(1&n&&(e.TgZ(0,"h3",12),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.title)}}function Fe(n,o){if(1&n&&e._UZ(0,"toolbar",13),2&n){const t=e.oxw();e.Q6J("buttons",t.buttons)}}function Le(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=o.row,i=o.metadata,a=e.oxw();e.xp6(1),e.Oqu(a.getSequencia(i,t))}}function Re(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=o.row;e.xp6(1),e.Oqu(t.nome)}}(Z=w).\u0275fac=function(o){return new(o||Z)(e.Y36(e.zs3))},Z.\u0275cmp=e.Xpm({type:Z,selectors:[["app-cadeia-valor-form"]],viewQuery:function(o,t){if(1&o&&(e.Gf(C.Q,5),e.Gf(Je,5),e.Gf(qe,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.editableForm=i.first),e.iGM(i=e.CRH())&&(t.processos=i.first),e.iGM(i=e.CRH())&&(t.unidade=i.first)}},features:[e.qOj],decls:12,vars:17,consts:[["initialFocus","nome",3,"form","disabled","title","submit","cancel"],[1,"row"],["icon","bi bi-textarea-t","controlName","nome","required","",3,"size","label","control"],["date","","label","In\xedcio","icon","bi bi-calendar-date","controlName","data_inicio","required","",3,"size","control","labelInfo"],["date","","label","Fim","icon","bi bi-calendar-date","controlName","data_fim","required","",3,"size","control","labelInfo"],["controlName","unidade_id",3,"size","dao"],["unidade",""],["noPersist","",3,"entity","cdRef"],["processos",""]],template:function(o,t){1&o&&(e.TgZ(0,"editable-form",0),e.NdJ("submit",function(){return t.onSaveData()})("cancel",function(){return t.onCancel()}),e.TgZ(1,"div",1)(2,"div",1),e._UZ(3,"input-text",2),e.qZA(),e.TgZ(4,"div",1),e._UZ(5,"input-datetime",3)(6,"input-datetime",4)(7,"input-search",5,6),e.qZA()(),e._UZ(9,"separator")(10,"cadeia-valor-list-processos",7,8),e.qZA()),2&o&&(e.Q6J("form",t.form)("disabled",t.formDisabled)("title",t.isModal?"":t.title),e.xp6(3),e.Q6J("size",12)("label","Nome da "+t.lex.translate("cadeia de valor"))("control",t.form.controls.nome),e.uIk("maxlength",250),e.xp6(2),e.Q6J("size",4)("control",t.form.controls.data_inicio)("labelInfo","In\xedcio da "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",4)("control",t.form.controls.data_fim)("labelInfo","Fim da "+t.lex.translate("cadeia de valor")),e.xp6(1),e.Q6J("size",4)("dao",t.unidadeDao),e.xp6(3),e.Q6J("entity",t.entity)("cdRef",t.cdRef))},dependencies:[C.Q,j.V,E.m,k.k,Ie.N,J]});class X extends N.E{constructor(o){super(o,M.q,O.k),this.injector=o,this.buttons=[],this.filterWhere=t=>{let i=t.value,a=[];return i.planejamento_id?.length&&a.push(["cadeia_valor_id","==",i.cadeia_valor_id]),i.nome?.length&&a.push(["or",["nome","like","%"+i.nome.trim().replace(" ","%")+"%"],["sigla","like","%"+i.nome.trim().replace(" ","%")+"%"]]),a},this.cadeiaValorDao=o.get(h.m),this.cadeiaValorProcessoDao=o.get(O.k),this.title=this.lex.translate("Processos"),this.filter=this.fh.FormBuilder({nome:{default:""},cadeia_valor_id:{default:null}}),this.OPTION_INFORMACOES.onClick=t=>this.go.navigate({route:["gestao","cadeia-valor","processo",t.id,"consult"]},{modal:!0}),this.addOption(this.OPTION_INFORMACOES)}filterClear(o){super.filterClear(o)}getSequencia(o,t){if(!o.nivel){let i=t.processo_pai_id,a="";for(;i;){let s=this.grid?.items.find(l=>l.id==i);a=(s?.sequencia||"")+"."+a,i=s?.processo_pai_id||null}a+=t.sequencia,o.nivel!=a&&(o.nivel=a)}return this.sortProcessos(),o.nivel}sortProcessos(){this.grid?.items.sort((o,t)=>{const i=(this.grid.getMetadata(o)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join("."),a=(this.grid.getMetadata(t)?.nivel||"").split(".").map(s=>("000"+s).substr(-3)).join(".");return i<a?-1:i>a?1:0})}}(D=X).\u0275fac=function(o){return new(o||D)(e.Y36(e.zs3))},D.\u0275cmp=e.Xpm({type:D,selectors:[["cadeia-valor-list-processos-entregas"]],viewQuery:function(o,t){if(1&o&&e.Gf(u.M,5),2&o){let i;e.iGM(i=e.CRH())&&(t.grid=i.first)}},features:[e.qOj],decls:15,vars:23,consts:[["class","my-2",4,"ngIf"],[3,"dao","add","orderBy","groupBy","join","selectable","select"],[3,"buttons",4,"ngIf"],[3,"deleted","form","where","submit","clear","collapseChange","collapsed"],[1,"row"],["label","Nome","controlName","nome","placeholder","Nome",3,"size","control"],["title","N\xedvel",3,"template"],["columnNivel",""],["title","Nome","orderBy","nome",3,"template"],["columnNome",""],["type","options",3,"onEdit","options"],[3,"rows"],[1,"my-2"],[3,"buttons"],[1,"d-block"]],template:function(o,t){if(1&o&&(e.YNc(0,Ge,2,1,"h3",0),e.TgZ(1,"grid",1),e.NdJ("select",function(a){return t.onSelect(a)}),e.YNc(2,Fe,1,1,"toolbar",2),e.TgZ(3,"filter",3)(4,"div",4),e._UZ(5,"input-text",5),e.qZA()(),e.TgZ(6,"columns")(7,"column",6),e.YNc(8,Le,2,1,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(10,"column",8),e.YNc(11,Re,2,1,"ng-template",null,9,e.W1O),e.qZA(),e._UZ(13,"column",10),e.qZA(),e._UZ(14,"pagination",11),e.qZA()),2&o){const i=e.MAs(9),a=e.MAs(12);e.Q6J("ngIf",!t.isModal),e.xp6(1),e.Q6J("dao",t.dao)("add",t.add)("orderBy",t.orderBy)("groupBy",t.groupBy)("join",t.join)("selectable",t.selectable),e.xp6(1),e.Q6J("ngIf",!t.selectable),e.xp6(1),e.Q6J("deleted",t.auth.hasPermissionTo("MOD_AUDIT_DEL"))("form",t.filter)("where",t.filterWhere)("submit",t.filterSubmit.bind(t))("clear",t.filterClear.bind(t))("collapseChange",t.filterCollapseChange.bind(t))("collapsed",!t.selectable&&t.filterCollapsed),e.xp6(2),e.Q6J("size",7)("control",t.filter.controls.nome),e.uIk("maxlength",250),e.xp6(2),e.Q6J("template",i),e.xp6(3),e.Q6J("template",a),e.xp6(3),e.Q6J("onEdit",t.edit)("options",t.options),e.xp6(1),e.Q6J("rows",t.rowsLimit)}},dependencies:[_.O5,u.M,Q.a,I.b,z.z,S.n,B.Q,E.m]});const Ue=[{path:"",component:K,canActivate:[f.a],resolve:{config:g.o},runGuardsAndResolvers:"always",data:{title:"Cadeia de Valor"}},{path:"grid",component:q,canActivate:[f.a],resolve:{config:g.o},data:{title:"Cadeia de Valor"}},{path:"new",component:w,canActivate:[f.a],resolve:{config:g.o},runGuardsAndResolvers:"always",data:{title:"Inclus\xe3o de Cadeia de Valor",modal:!0}},{path:":id/edit",component:w,canActivate:[f.a],resolve:{config:g.o},runGuardsAndResolvers:"always",data:{title:"Edi\xe7\xe3o de Cadeia de Valor",modal:!0}},{path:":id/consult",component:w,canActivate:[f.a],resolve:{config:g.o},runGuardsAndResolvers:"always",data:{title:"Consulta a Cadeia de Valor",modal:!0}},{path:"processoList",component:X,canActivate:[f.a],resolve:{config:g.o},runGuardsAndResolvers:"always",data:{title:"Lista de Processos da Cadeia de Valor",modal:!0}}];class ${}var A;(b=$).\u0275fac=function(o){return new(o||b)},b.\u0275mod=e.oAB({type:b}),b.\u0275inj=e.cJS({imports:[L.Bz.forChild(Ue),L.Bz]});class ee{}(A=ee).\u0275fac=function(o){return new(o||A)},A.\u0275mod=e.oAB({type:A}),A.\u0275inj=e.cJS({imports:[_.ez,ie.K,oe.UX,P.c8,$]})}}]);