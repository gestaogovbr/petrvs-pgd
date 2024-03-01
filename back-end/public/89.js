"use strict";(self.webpackChunkpetrvs=self.webpackChunkpetrvs||[]).push([[89,9108],{61915:(M,b,d)=>{d.d(b,{l:()=>e});var f,t=d(55736),g=d(20755);class e extends t.V{constructor(c){super(c),this.title="",this.by=""}ngOnInit(){}get isActiveOrder(){return!!(this.header?.grid?.orderBy||[]).find(c=>c[0]==this.by)}get orderDirection(){const c=(this.header?.grid?.orderBy||[]).find(r=>r[0]==this.by);return c?c[1]:void 0}get orderClass(){return this.isActiveOrder?"badge bg-secondary":"badge bg-light text-dark"}get orderIcon(){return this.isActiveOrder?"asc"==this.orderDirection?"bi-sort-down":"bi-sort-up":""}onOrderClick(c){if(this.by?.length&&this.header?.grid?.query){const r=this.header.grid,m=(r.orderBy||[]).findIndex(O=>O[0]==this.by),p=(r.orderBy||[]).find(O=>O[0]==this.by)||[this.by,void 0];r.orderBy=c.ctrlKey||c.shiftKey?r?.orderBy:(r?.groupBy||[]).map(O=>[O.field,"asc"]),p[1]=p[1]?"asc"==p[1]?"desc":void 0:"asc",m>=0&&r.orderBy.splice(m,1),p[1]&&r.orderBy.push(p),r.query.order(r.orderBy||[]),this.cdRef.detectChanges()}}}(f=e).\u0275fac=function(c){return new(c||f)(g.Y36(g.zs3))},f.\u0275cmp=g.Xpm({type:f,selectors:[["order"]],inputs:{header:"header",title:"title",by:"by",hint:"hint"},features:[g.qOj],ngContentSelectors:["*"],decls:4,vars:7,consts:[["role","button","data-bs-toggle","tooltip","data-bs-placement","top",3,"id","click"]],template:function(c,r){1&c&&(g.F$t(),g.TgZ(0,"span",0),g.NdJ("click",function(p){return r.onOrderClick(p)}),g._UZ(1,"i"),g._uU(2),g.Hsn(3),g.qZA()),2&c&&(g.Tol(r.orderClass),g.Q6J("id",r.generatedId(r.title)),g.uIk("title",r.hint),g.xp6(1),g.Tol(r.orderIcon),g.xp6(1),g.hij(" ",r.title," "))}})},69756:(M,b,d)=>{d.d(b,{R:()=>c});var f,t=d(20755),g=d(76733);function n(r,m){if(1&r&&(t.ynx(0),t.TgZ(1,"span",5),t._uU(2),t.qZA(),t.BQk()),2&r){const p=t.oxw(2);t.xp6(1),t.MGl("title","",p.percentage,"%"),t.xp6(1),t.hij("",p.percentage,"%")}}function e(r,m){if(1&r&&(t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,n,3,2,"ng-container",4),t.qZA()()),2&r){const p=t.oxw();t.Udp("height",p.height,"px")("min-width",p.minWidth,"px"),t.xp6(1),t.Tol(p.progressClass),t.Udp("width",p.percentage,"%"),t.uIk("aria-valuenow",p.value)("aria-valuemin",p.min)("aria-valuemax",p.max),t.xp6(1),t.Q6J("ngIf",!p.isNoPercentage)}}function a(r,m){if(1&r&&(t.TgZ(0,"div",6)(1,"div",7),t._UZ(2,"div"),t.qZA(),t.TgZ(3,"div",8),t._UZ(4,"div",9),t.qZA()()),2&r){const p=t.oxw();t.Udp("height",p.height,"px")("min-width",p.minWidth,"px"),t.xp6(1),t.Udp("width",p.percentage,"%"),t.uIk("aria-valuenow",p.value)("aria-valuemin",p.min)("aria-valuemax",p.max),t.xp6(1),t.Tol(p.progressClass),t.xp6(1),t.Udp("width",p.goalPercentage,"%"),t.uIk("aria-valuenow",p.goalValue)("aria-valuemin",p.min)("aria-valuemax",p.max)}}class c{constructor(){this.max=100,this.min=0,this.value=0,this.goal=0,this.height=12}ngOnInit(){}get isGoal(){return!!this.goal&&this.goal!=this.max}get percentage(){return Math.round(100*(this.value-this.min)/(this.max-this.min))}get goalPercentage(){return Math.max(this.percentage-Math.round(100*(this.goal-this.min)/(this.max-this.min)),0)}get goalValue(){return Math.max(this.value-this.goal,0)}get isNoPercentage(){return null!=this.noPercentage}get progressClass(){return"progress-bar progress-bar-striped"+(this.color?" bg-"+this.color:"")}}(f=c).\u0275fac=function(m){return new(m||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["progress-bar"]],inputs:{max:"max",min:"min",value:"value",goal:"goal",height:"height",noPercentage:"noPercentage",minWidth:"minWidth",color:"color"},decls:3,vars:2,consts:[["class","progress",3,"height","min-width",4,"ngIf","ngIfElse"],["stacked",""],[1,"progress"],["role","progressbar"],[4,"ngIf"],[3,"title"],[1,"progress-stacked"],["role","progressbar","aria-label","Valor",1,"progress"],["role","progressbar","aria-label","Meta",1,"progress"],[1,"progress-bar","progress-bar-striped","bg-warning"]],template:function(m,p){if(1&m&&(t.YNc(0,e,3,12,"div",0),t.YNc(1,a,5,16,"ng-template",null,1,t.W1O)),2&m){const O=t.MAs(2);t.Q6J("ngIf",!p.isGoal)("ngIfElse",O)}},dependencies:[g.O5],styles:[".progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px}"]})},64792:(M,b,d)=>{d.d(b,{C:()=>E});var t=d(8239),g=d(76298),f=d(64368);class n extends f.X{constructor(i){super(),this.tipo="like",this.usuario_id="",this.atividade_id=null,this.plano_entrega_entrega_id=null,this.plano_trabalho_entrega_id=null,this.initialization(i)}}var m,O,e=d(20755),a=d(49193),c=d(32333),r=d(56976);class p extends r.B{constructor(i){super("Reacao",i),this.injector=i}}(m=p).\u0275fac=function(i){return new(i||m)(e.LFG(e.zs3))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class T{constructor(i,o,_){this.util=i,this.auth=o,this.dao=_}reacaoUsuario(i){return i?i.find(o=>o.usuario_id==this.auth.usuario?.id):void 0}criaReacao(i,o,_){var C=this;return(0,t.Z)(function*(){const A=new n({usuario_id:C.auth.usuario?.id,usuario:C.auth.usuario,tipo:i.key,atividade_id:"atividade_id"==o?_:null,plano_entrega_entrega_id:"plano_entrega_entrega_id"==o?_:null,plano_trabalho_entrega_id:"plano_trabalho_entrega_id"==o?_:null}),y=yield C.dao.save(A);return y&&(y.usuario=C.auth.usuario),y})()}atualizaReacao(i,o){var _=this;return(0,t.Z)(function*(){const C=yield _.dao.update(o.id,{tipo:i.key});return C&&(C.usuario=_.auth.usuario),C})()}removeReacao(i){var o=this;return(0,t.Z)(function*(){return yield o.dao.delete(i)})()}}(O=T).\u0275fac=function(i){return new(i||O)(e.LFG(a.f),e.LFG(c.e),e.LFG(p))},O.\u0275prov=e.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"});var l,v=d(76733);function s(h,i){if(1&h){const o=e.EpF();e.TgZ(0,"span",11)(1,"img",12),e.NdJ("click",function(){const A=e.CHM(o).$implicit,y=e.oxw(2);return e.KtG(y.react(A))}),e.qZA()()}if(2&h){const o=i.$implicit,_=e.oxw(2);e.s9C("title",o.hint),e.xp6(1),e.Q6J("src",_.emojiPath(o.icon),e.LSH)}}function u(h,i){if(1&h&&(e.TgZ(0,"div",9),e.YNc(1,s,2,2,"span",10),e.qZA()),2&h){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.emojiList)}}function x(h,i){if(1&h){const o=e.EpF();e.TgZ(0,"span",13),e.NdJ("click",function(){e.CHM(o);const C=e.oxw();return e.KtG(C.react(C.emojiList[0]))}),e._UZ(1,"i",14),e.TgZ(2,"label"),e._uU(3,"Curtir"),e.qZA()()}}function P(h,i){if(1&h&&(e.TgZ(0,"span",15),e._UZ(1,"img",16),e.TgZ(2,"strong",17),e._uU(3),e.qZA()()),2&h){const o=e.oxw();let _,C;e.xp6(1),e.Q6J("src",o.emojiPath(null==(_=o.getIconReacao())?null:_.icon),e.LSH),e.xp6(2),e.Oqu(null==(C=o.getIconReacao())?null:C.value)}}function I(h,i){if(1&h&&(e.TgZ(0,"small",22),e._uU(1),e.qZA()),2&h){const o=i.$implicit;e.xp6(1),e.hij(" ",null==o.usuario?null:o.usuario.nome," ")}}function R(h,i){if(1&h&&(e.ynx(0),e.TgZ(1,"div",18),e._UZ(2,"img",19),e.TgZ(3,"div",20)(4,"h5"),e._uU(5),e.qZA(),e.YNc(6,I,2,1,"small",21),e.qZA()(),e.BQk()),2&h){const o=i.$implicit,_=e.oxw();e.xp6(2),e.Q6J("src",_.emojiPath(o.tipo),e.LSH),e.xp6(3),e.Oqu(_.lookup.getValue(_.lookup.REACAO_TIPO,o.tipo)),e.xp6(1),e.Q6J("ngForOf",o.reacoes)}}function k(h,i){if(1&h&&(e.TgZ(0,"div",23),e._uU(1),e.qZA()),2&h){const o=e.oxw();e.xp6(1),e.Oqu(o.reacoes.length)}}class E extends g.D{set entity(i){this._entity!=i&&(this._entity=i)}get entity(){return this._entity}constructor(i){super(i),this.injector=i,this.origem=void 0,this.showEmojis=!1,this.emojiList=[],this.reacoes=[],this.reacoesPorTipo=[],this.colunaRelacionada="",this.reacaoService=i.get(T)}ngOnInit(){switch(this.emojiList=this.lookup.REACAO_TIPO,this.reacaoUsuario=this.entity?this.reacaoService.reacaoUsuario(this.entity?.reacoes):void 0,this.reacoes=this.entity?this.entity.reacoes:[],this.reacoesPorTipo=this.separarReacoesPorTipo(this.reacoes),this.origem){case"ATIVIDADE":this.colunaRelacionada="atividade_id";break;case"PLANO_ENTREGA_ENTREGA":this.colunaRelacionada="plano_entrega_entrega_id";break;case"PLANO_TRABALHO_ENTREGA":this.colunaRelacionada="plano_trabalho_entrega_id"}}toggleShow(i){this.showEmojis=i}emojiPath(i){return this.gb.baseURL+`assets/icons/reactions/${i}.svg`}react(i){var o=this;return(0,t.Z)(function*(){if(o.reacaoUsuario&&o.reacaoUsuario.tipo==i.key)yield o.reacaoService.removeReacao(o.reacaoUsuario),o.reacoes=o.reacoes.filter(_=>_.id!==o.reacaoUsuario?.id),o.reacoesPorTipo=o.separarReacoesPorTipo(o.reacoes),o.reacaoUsuario=void 0;else if(o.reacaoUsuario&&o.reacaoUsuario.tipo!=i.key){o.reacaoUsuario=yield o.reacaoService.atualizaReacao(i,o.reacaoUsuario);const _=o.reacoes.findIndex(C=>C.id===o.reacaoUsuario?.id);-1!==_&&(o.reacoes[_]=o.reacaoUsuario),o.reacoesPorTipo=o.separarReacoesPorTipo(o.reacoes)}else o.reacaoUsuario=yield o.reacaoService.criaReacao(i,o.colunaRelacionada,o.entity?.id),o.reacoes.push(o.reacaoUsuario),o.reacoesPorTipo=o.separarReacoesPorTipo(o.reacoes);o.cdRef.detectChanges()})()}getIconReacao(){return this.lookup.REACAO_TIPO.find(i=>i.key===this.reacaoUsuario?.tipo)}separarReacoesPorTipo(i){const o=[];return i.forEach(_=>{const C=_.tipo,A=o.find(y=>y.tipo===C);A?A.reacoes.push(_):o.push({tipo:C,reacoes:[_]})}),o}}(l=E).\u0275fac=function(i){return new(i||l)(e.Y36(e.zs3))},l.\u0275cmp=e.Xpm({type:l,selectors:[["reaction"]],inputs:{origem:"origem",entity:"entity"},features:[e.qOj],decls:9,vars:5,consts:[[1,"d-flex","align-items-center","justify-content-start","mt-2"],[1,"wrapper",3,"mouseenter","mouseleave"],["class","emojis d-flex",4,"ngIf"],["class","btn-reacao",3,"click",4,"ngIf"],["class","btn-reacao",4,"ngIf"],[1,"reactions"],[1,"d-flex","align-items-center"],[4,"ngFor","ngForOf"],["class","total ms-2 flex-grow-1",4,"ngIf"],[1,"emojis","d-flex"],[3,"title",4,"ngFor","ngForOf"],[3,"title"],["width","75px",3,"src","click"],[1,"btn-reacao",3,"click"],[1,"bi","bi-hand-thumbs-up","me-2"],[1,"btn-reacao"],["width","75px",3,"src"],[1,"me-2"],[1,"tipoReacao"],[3,"src"],[1,"participantes","rounded","shadow"],["class","d-block",4,"ngFor","ngForOf"],[1,"d-block"],[1,"total","ms-2","flex-grow-1"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("mouseenter",function(){return o.toggleShow(!0)})("mouseleave",function(){return o.toggleShow(!1)}),e.YNc(2,u,2,1,"div",2),e.YNc(3,x,4,0,"span",3),e.YNc(4,P,4,2,"span",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e.YNc(7,R,7,3,"ng-container",7),e.YNc(8,k,2,1,"div",8),e.qZA()()()),2&i&&(e.xp6(2),e.Q6J("ngIf",o.showEmojis),e.xp6(1),e.Q6J("ngIf",null==o.reacaoUsuario),e.xp6(1),e.Q6J("ngIf",null!=o.reacaoUsuario),e.xp6(3),e.Q6J("ngForOf",o.reacoesPorTipo),e.xp6(1),e.Q6J("ngIf",o.reacoes.length))},dependencies:[v.sg,v.O5],styles:[".wrapper[_ngcontent-%COMP%]{position:relative}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;cursor:pointer;transition:transform .25s ease;padding:5px}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.5);transition:transform .25s ease}.btn-reacao[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.3294117647);display:flex;width:auto;padding:3px 5px;border-radius:80px;max-width:100px;justify-content:center;align-items:center;cursor:pointer}.btn-reacao[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;padding:0;margin-right:5px}.emojis[_ngcontent-%COMP%]{position:absolute;top:-30px;background:white;border:1px lightgray solid;box-shadow:0 0 16px 3px #00000073;border-radius:80px;display:inline-block;z-index:9}.reactions[_ngcontent-%COMP%]{position:relative;margin-left:10px}.reactions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:-2px}.reactions[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first{margin-left:0}.participantes[_ngcontent-%COMP%]{display:none;position:absolute;bottom:20px;background:var(--bs-body-bg);z-index:10;padding:10px;width:max-content;border:1px solid #ddd}.participantes[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .participantes[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--bs-body-color)}.tipoReacao[_ngcontent-%COMP%]:hover > .participantes[_ngcontent-%COMP%]{display:block}.tipoReacao[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15px}"]})},77447:(M,b,d)=>{d.d(b,{f:()=>n});var f,t=d(20755),g=d(39702);class n{constructor(a){this.lookup=a}getValorMeta(a){let c="";switch(a.entrega?.tipo_indicador){case"PORCENTAGEM":c=a.meta.porcentagem+" %";break;case"QUANTIDADE":c=a.meta.quantitativo+"";break;case"VALOR":c=a.meta.valor+"";break;case"QUALITATIVO":c=this.lookup.getValue(a.entrega.lista_qualitativos||[],a.meta.qualitativo);break;default:c="Indicador desconhecido"}return c}getValorRealizado(a){let c="";switch(a.entrega?.tipo_indicador){case"PORCENTAGEM":c=a.realizado.porcentagem+" %";break;case"QUANTIDADE":c=a.realizado.quantitativo+"";break;case"VALOR":c=a.realizado.valor+"";break;case"QUALITATIVO":c=this.lookup.getValue(a.entrega.lista_qualitativos||[],a.realizado.qualitativo);break;default:c="Indicador desconhecido"}return c}getValor(a){return typeof a.porcentagem<"u"?a.porcentagem:typeof a.qualitativo<"u"?a.qualitativo:typeof a.quantitativo<"u"?a.quantitativo:typeof a.valor<"u"?a.valor:0}getEntregaValor(a,c){let r={};return"PORCENTAGEM"==a.tipo_indicador&&(r.porcentagem=c),"QUALITATIVO"==a.tipo_indicador&&(r.qualitativo=c),"QUANTIDADE"==a.tipo_indicador&&(r.quantitativo=c),"VALOR"==a.tipo_indicador&&(r.valor=c),r}isPorcentagem(a){return"PORCENTAGEM"==a.entrega?.tipo_indicador}isAtivo(a){return this.isValido(a)&&"ATIVO"==a.status}isValido(a){return!a.deleted_at&&"CANCELADO"!=a.status&&!a.data_arquivamento}situacaoPlano(a){return a.deleted_at?"EXCLUIDO":a.data_arquivamento?"ARQUIVADO":a.status}}(f=n).\u0275fac=function(a){return new(a||f)(t.LFG(g.W))},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"})},81419:(M,b,d)=>{d.d(b,{y:()=>v});var m,t=d(20755),g=d(2124),f=d(38720),n=d(39702),e=d(92307),a=d(49193),c=d(76733),r=d(25560);function p(l,s){if(1&l){const u=t.EpF();t.TgZ(0,"i",7),t.NdJ("click",function(P){t.CHM(u);const I=t.oxw().$implicit,R=t.oxw();return t.KtG(R.addComentarioClick(P,R.entity,I.id))}),t.qZA()}}function O(l,s){if(1&l){const u=t.EpF();t.TgZ(0,"span",2,3),t.NdJ("click",function(){t.CHM(u);const P=t.MAs(1),I=t.oxw();return t.KtG(I.comentarioClick(P))}),t._UZ(2,"i"),t.TgZ(3,"span",4)(4,"strong"),t._uU(5),t.qZA(),t._uU(6),t._UZ(7,"br"),t.qZA(),t.YNc(8,p,1,0,"i",5),t.TgZ(9,"span",6),t._uU(10),t.qZA()()}if(2&l){const u=s.$implicit,x=t.oxw();t.Udp("margin-left",5*(u.path&&u.path.includes("/")?u.path.split("/").length-1:0)+"px")("background-color",x.util.getBackgroundColor(u.path&&u.path.includes("/")?u.path.split("/").length-1:0,20)+"!important"),t.Q6J("title",x.lookup.getValue(x.lookup.COMENTARIO_TIPO,u.tipo)),t.xp6(2),t.Tol("me-1 "+x.lookup.getIcon(x.lookup.COMENTARIO_TIPO,u.tipo)),t.xp6(3),t.Oqu(x.util.shortName(x.util.apelidoOuNome(u.usuario))),t.xp6(1),t.hij(" \u2022 ",x.util.getDateTimeFormatted(u.data_comentario),""),t.xp6(2),t.Q6J("ngIf",!x.selectable),t.xp6(2),t.hij(" ",u.texto," ")}}const T=function(){return[]};class v{set entity(s){this._entity!=s&&(this._entity=s,s&&this.comentario&&(s.comentarios=this.comentario.orderComentarios(s.comentarios||[])))}get entity(){return this._entity}constructor(s){this.injector=s,this.selectable=!1,this.noPersist=void 0,this.origem=void 0,this.addComentarioButton={icon:"bi bi-plus-circle",hint:"Incluir coment\xe1rio"},this._entity=void 0,this.validate=(u,x)=>null,this.fh=s.get(f.k),this.cdRef=s.get(t.sBO),this.go=s.get(e.o),this.util=s.get(a.f),this.lookup=s.get(n.W),this.comentario=s.get(g.K),this.form=this.fh.FormBuilder({comentarios:{default:[]}},this.cdRef,this.validate)}ngOnInit(){}get isNoPersist(){return null!=this.noPersist}comentarioClick(s){const u=s.getAttribute("data-expanded");s.setAttribute("data-expanded","true"==u?"false":"true")}addComentarioClick(s,u,x){s?.stopPropagation(),this.go.navigate({route:["uteis","comentarios",this.origem,this.isNoPersist?"NOPERSIST":u.id,"new"],params:{comentario_id:x}},{modal:!0,metadata:{entity:u},modalClose:P=>{P&&(this.save&&this.save(P),this.isNoPersist||(this.grid?.query||this.query)?.refreshId(u.id))}})}}(m=v).\u0275fac=function(s){return new(s||m)(t.Y36(t.zs3))},m.\u0275cmp=t.Xpm({type:m,selectors:[["comentarios-widget"]],inputs:{selectable:"selectable",noPersist:"noPersist",origem:"origem",save:"save",grid:"grid",query:"query",entity:"entity"},decls:2,vars:3,consts:[["title","Coment\xe1rios","small","",3,"button","buttonClick"],["class","badge bg-light text-dark comentario-badge","role","button","data-expanded","false","data-bs-toggle","tooltip","data-bs-placement","top",3,"title","margin-left","background-color","click",4,"ngFor","ngForOf"],["role","button","data-expanded","false","data-bs-toggle","tooltip","data-bs-placement","top",1,"badge","bg-light","text-dark","comentario-badge",3,"title","click"],["badge",""],[1,"comentario-title"],["class","bi bi-reply comentario-responder","data-bs-toggle","tooltip","data-bs-placement","top","title","Responder",3,"click",4,"ngIf"],[1,"comentario-text","text-truncate"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Responder",1,"bi","bi-reply","comentario-responder",3,"click"]],template:function(s,u){1&s&&(t.TgZ(0,"separator",0),t.NdJ("buttonClick",function(P){return u.addComentarioClick(P,u.entity)}),t.qZA(),t.YNc(1,O,11,11,"span",1)),2&s&&(t.Q6J("button",u.selectable?void 0:u.addComentarioButton),t.xp6(1),t.Q6J("ngForOf",(null==u.entity?null:u.entity.comentarios)||t.DdM(2,T)))},dependencies:[c.sg,c.O5,r.N],styles:["[_nghost-%COMP%]{max-width:320px;display:block}.comentario-badge[data-expanded=true][_ngcontent-%COMP%]   .comentario-title[_ngcontent-%COMP%]{display:initial;white-space:normal;font-size:12px}.comentario-badge[data-expanded=true][_ngcontent-%COMP%]   .comentario-text[_ngcontent-%COMP%]{font-size:12px;height:auto;display:block;white-space:initial}.comentario-badge[_ngcontent-%COMP%]{white-space:nowrap;display:block;position:relative;background-color:#ffe69c!important;margin-bottom:1px;text-align:left;padding:3px 5px}.comentario-badge[_ngcontent-%COMP%]   .comentario-title[_ngcontent-%COMP%]{display:none}.comentario-badge[_ngcontent-%COMP%]   .comentario-text[_ngcontent-%COMP%]{width:calc(100% - 15px);display:inline-block;font-size:12px}.comentario-badge[_ngcontent-%COMP%]:hover   .comentario-responder[_ngcontent-%COMP%]{display:block}.comentario-responder[_ngcontent-%COMP%]{display:none;position:absolute;right:5px;top:5px}"]})},19108:(M,b,d)=>{d.d(b,{W:()=>T});var a,m,t=d(8239),g=d(5458),f=d(76298),n=d(20755),e=d(76733);function c(v,l){if(1&v&&(n.ynx(0),n.TgZ(1,"div",2)(2,"h6"),n._uU(3),n.qZA(),n._UZ(4,"cite",3),n.qZA(),n.BQk()),2&v){const s=l.$implicit,u=l.index,x=n.oxw();n.xp6(1),n.Udp("border-color",x.util.getBackgroundColor(u,x.colunas.length)+"!important"),n.xp6(2),n.Oqu(s.titulo),n.xp6(1),n.Q6J("innerHTML",s.texto,n.oJD)}}class r extends f.D{constructor(l){super(l),this.injector=l,this.colunas=[]}ngOnInit(){super.ngOnInit()}}function p(v,l){if(1&v&&n._UZ(0,"planejamento-show",2),2&v){const s=n.oxw();n.Q6J("planejamento",s.planejamentoSuperior)}}function O(v,l){if(1&v&&(n.TgZ(0,"div",3)(1,"h6"),n._uU(2,"Planejamento:"),n.qZA(),n.TgZ(3,"h4"),n._uU(4),n.qZA(),n._UZ(5,"app-colunas",4),n.qZA()),2&v){const s=n.oxw();n.Q6J("ngClass",s.planejamento.planejamento_superior_id?"":"first-box"),n.xp6(4),n.Oqu(s.planejamento.nome),n.xp6(1),n.Q6J("colunas",s.colunas)}}(a=r).\u0275fac=function(l){return new(l||a)(n.Y36(n.zs3))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-colunas"]],inputs:{colunas:"colunas"},features:[n.qOj],decls:2,vars:1,consts:[[1,"row"],[4,"ngFor","ngForOf"],[1,"border-start","border-4","ps-3","mt-3","col-md-6","col-12"],[3,"innerHTML"]],template:function(l,s){1&l&&(n.TgZ(0,"div",0),n.YNc(1,c,5,4,"ng-container",1),n.qZA()),2&l&&(n.xp6(1),n.Q6J("ngForOf",s.colunas))},dependencies:[e.sg]});class T extends f.D{constructor(l){super(l),this.injector=l,this.planejamento={},this.planejamentoSuperior=null,this.colunas=[],this.planejamentoDao=l.get(g.U)}ngOnInit(){super.ngOnInit(),this.colunas.push({titulo:"Miss\xe3o",texto:this.planejamento.missao},{titulo:"Vis\xe3o",texto:this.planejamento.visao},{titulo:"Valores",texto:this.planejamento.valores.map(l=>l.value).join("<br>")},{titulo:"Resultados institucionais",texto:this.planejamento.resultados_institucionais?.map(l=>l.value).join("<br>")})}ngAfterViewInit(){super.ngAfterViewInit(),this.planejamento.planejamento_superior_id&&this.buscaPlanejamentoSuperior(this.planejamento.planejamento_superior_id)}buscaPlanejamentoSuperior(l){var s=this;return(0,t.Z)(function*(){s.planejamentoSuperior=yield s.planejamentoDao.getById(l)})()}}(m=T).\u0275fac=function(l){return new(l||m)(n.Y36(n.zs3))},m.\u0275cmp=n.Xpm({type:m,selectors:[["planejamento-show"]],inputs:{planejamento:"planejamento"},features:[n.qOj],decls:2,vars:2,consts:[[3,"planejamento",4,"ngIf"],["class","planejamento arrow_box w-100",3,"ngClass",4,"ngIf"],[3,"planejamento"],[1,"planejamento","arrow_box","w-100",3,"ngClass"],[3,"colunas"]],template:function(l,s){1&l&&(n.YNc(0,p,1,1,"planejamento-show",0),n.YNc(1,O,6,3,"div",1)),2&l&&(n.Q6J("ngIf",s.planejamentoSuperior),n.xp6(1),n.Q6J("ngIf",s.planejamento))},dependencies:[e.mk,e.O5,r,m],styles:["[_nghost-%COMP%]{flex-basis:fit-content}"]})}}]);