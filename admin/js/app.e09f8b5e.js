(function(e){function t(t){for(var s,i,r=t[0],o=t[1],l=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a={app:0},c=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"94884510","chunk-c552551c":"cf8ccf23","chunk-207d5f71":"8d3efc8f","chunk-85a819ce":"4342b2ce","chunk-b6ef9416":"edf51c08"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-c552551c":1,"chunk-207d5f71":1,"chunk-85a819ce":1,"chunk-b6ef9416":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"31d6cfe0","chunk-c552551c":"eb111a12","chunk-207d5f71":"9deb4d24","chunk-85a819ce":"0e954629","chunk-b6ef9416":"b7e762e7"}[e]+".css",a=o.p+s,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===a))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===s||u===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete i[e],m.parentNode.removeChild(m),n(c)},m.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){i[e]=0})));var s=a[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,n){s=a[e]=[t,n]}));t.push(s[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/contrib/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuthenticated?[n("NavigationBar"),n("AppBar")]:e._e(),n("v-main",[n("router-view")],1)],2)},a=[],c=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"pa-1",attrs:{app:"",width:e.updatePanelWidthServiceList},model:{value:e.updateOpenPanelServiceList,callback:function(t){e.updateOpenPanelServiceList=t},expression:"updateOpenPanelServiceList"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v("Сompany Name")]),n("v-list-item-subtitle",[e._v("Brief description of the company.")])],1)],1),n("v-list-item",{staticClass:"panel-width-service-list pl-1"},[n("v-list-item-content",[n("v-slider",{staticClass:"panel-width-service-list__slider",attrs:{dense:"","hide-details":"","prepend-icon":"mdi-arrow-split-vertical",min:"256",max:"600"},model:{value:e.updatePanelWidthServiceList,callback:function(t){e.updatePanelWidthServiceList=t},expression:"updatePanelWidthServiceList"}})],1)],1),n("v-expansion-panels",{staticClass:"service-list"},e._l(e.serviceList,(function(t,s){return n("v-expansion-panel",{key:t.service.title},[n("v-expansion-panel-header",{staticClass:"text-subtitle-1 font-weight-medium pl-0"},[n("div",{staticClass:"pl-1 service-list__icon"},[n("v-icon",{staticClass:"pos-relative pos-top-n2",domProps:{textContent:e._s("mdi-"+t.service.icon)}})],1),n("span",{},[e._v(e._s(t.service.title))])]),n("v-expansion-panel-content",{staticClass:"service-list__content"},[n("v-list",{attrs:{shaped:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedService[s],callback:function(t){e.$set(e.selectedService,s,t)},expression:"selectedService[indexService]"}},e._l(t.collections,(function(i,a){return n("v-list-item",{key:i.model_key,staticClass:"px-1",attrs:{to:e.createUrlDocumentList(t.service.title,i.title,s,a)},on:{click:function(t){e.ajaxGetDocumentList({indexService:s,indexCollection:a}),e.setCurrentPageNumber(1),e.resetPreActivatedService(s)}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[e._v("mdi-circle-medium")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1 font-weight-regular",domProps:{textContent:e._s(i.title)}})],1)],1)})),1)],1)],1)],1)})),1)],1)},o=[],l=n("d3bd"),u=n.n(l),d={name:"NavigationBar",computed:{...Object(c["d"])(["openPanelServiceList","panelWidthServiceList","selectedService","serviceList"]),updateOpenPanelServiceList:{get:function(){return this.openPanelServiceList},set:function(e){this.setOpenPanelServiceList(e)}},updatePanelWidthServiceList:{get:function(){return this.panelWidthServiceList},set:function(e){this.setPanelWidthServiceList(e)}}},methods:{...Object(c["c"])(["setOpenPanelServiceList","setPanelWidthServiceList","setSelectedService"]),...Object(c["c"])("documentList",["setCurrentPageNumber"]),...Object(c["b"])("documentList",["ajaxGetDocumentList"]),resetPreActivatedService:function(e){this.setSelectedService(this.selectedService.map((function(t,n){return n!==e&&(t=void 0),t})))},createUrlDocumentList:function(e,t,n,s){const i=this.$i18n.locale,a=u()(e,{locale:i}),c=u()(t,{locale:i});return`/${a}/${n}/${c}/${s}/document-list`}}},m=d,v=n("2877"),p=n("6544"),h=n.n(p),f=n("cd55"),b=n("49e2"),g=n("c865"),S=n("0393"),L=n("132d"),_=n("8860"),x=n("da13"),k=n("5d23"),P=n("1baa"),y=n("34c3"),C=n("f774"),w=n("ba0d"),O=Object(v["a"])(m,r,o,!1,null,null,null),j=O.exports;h()(O,{VExpansionPanel:f["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:g["a"],VExpansionPanels:S["a"],VIcon:L["a"],VList:_["a"],VListItem:x["a"],VListItemContent:k["a"],VListItemGroup:P["a"],VListItemIcon:y["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VNavigationDrawer:C["a"],VSlider:w["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setOpenPanelServiceList(!e.openPanelServiceList)}}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",href:e.homeUrl}},"v-btn",i,!1),s),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.0")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},"v-btn",i,!1),s),[n("v-icon",[e._v("mdi-brightness-4")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.1")))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.logout}},"v-btn",i,!1),s),[n("v-icon",[e._v("mdi-logout")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.2")))])])],1)},V=[],$={name:"AppBar",data:()=>({homeUrl:"/admin",panelServiceList:null}),computed:{...Object(c["d"])(["openPanelServiceList"])},methods:{...Object(c["c"])(["setUsername","setIsAuthenticated","setOpenPanelServiceList"]),logout(){this.axios.post("/admin/logout",{}).then(e=>{this.setUsername(".."),this.setIsAuthenticated(!1)}).catch(e=>{console.log(e)})}}},I=$,D=n("40dc"),N=n("5bc1"),E=n("8336"),B=n("2fa4"),U=n("3a2f"),W=Object(v["a"])(I,A,V,!1,null,null,null),T=W.exports;h()(W,{VAppBar:D["a"],VAppBarNavIcon:N["a"],VBtn:E["a"],VIcon:L["a"],VSpacer:B["a"],VTooltip:U["a"]});var q={name:"App",components:{NavigationBar:j,AppBar:T},computed:{...Object(c["d"])(["isStart","username","isAuthenticated","serviceList"])},watch:{isAuthenticated:function(e){this.isStart?this.setIsStart(!1):e?(this.$session.start(),this.$session.set("username",this.username),this.$router.push({name:"home"}),0===this.serviceList.length&&this.getServiceList()):(this.setSelectedService([]),this.setServiceList([]),this.$session.destroy(),this.$router.push("/sign-in"))}},methods:{...Object(c["c"])(["setIsStart","setUsername","setIsAuthenticated","setSelectedService","setServiceList"]),getServiceList(){this.axios.get("/admin/service-list").then(e=>{const t=e.data,n=t.service_list.length;if(n>0){const e=[];for(let t=0;t<n;t++)e.push(void 0);this.setSelectedService(e),this.setServiceList(t.service_list)}else console.log("No data available")}).catch(e=>{console.log(e)})}},created(){this.$session.exists()?(this.setUsername(this.$session.get("username")),this.setIsAuthenticated(!0),this.getServiceList()):(this.setIsStart(!1),this.setUsername(".."),this.setSelectedService([]),this.setServiceList([]))}},R=q,G=(n("034f"),n("7496")),M=n("f6c4"),Q=Object(v["a"])(R,i,a,!1,null,null,null),F=Q.exports;h()(Q,{VApp:G["a"],VMain:M["a"]});var H=n("a925"),J=n("8c4f"),K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{staticClass:"mt-16 mb-5",attrs:{cols:"12"}},[s("v-img",{attrs:{src:n("9b19"),contain:"",height:"140"}})],1),s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-h4 font-weight-bold mb-3",domProps:{textContent:e._s(e.$t("message.11")+", "+e.username+".")}}),s("p",{staticClass:"text-h5 font-weight-regular orange--text",domProps:{textContent:e._s(e.$t("message.12"))}})])],1)],1)},z=[],X={name:"Home",computed:{...Object(c["d"])(["username"])}},Y=X,Z=n("62ad"),ee=n("a523"),te=n("adda"),ne=n("0fd9"),se=Object(v["a"])(Y,K,z,!1,null,null,null),ie=se.exports;h()(se,{VCol:Z["a"],VContainer:ee["a"],VImg:te["a"],VRow:ne["a"]}),s["a"].use(J["a"]);const ae=[{path:"/",name:"home",component:ie,meta:{authRequired:!0}},{path:"/sign-in",name:"signin",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-207d5f71")]).then(n.bind(null,"4a33"))},{path:"/:service/:indexService/:collection/:indexCollection/document-list",name:"documentList",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-85a819ce")]).then(n.bind(null,"898f")),meta:{authRequired:!0}},{path:"/:service/:indexService/:collection/:indexCollection/document/:indexDoc",name:"documenForm",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-b6ef9416")]).then(n.bind(null,"ab20")),meta:{authRequired:!0}},{path:"*",name:"notFound",component:()=>n.e("chunk-54b2b4a8").then(n.bind(null,"9703")),meta:{authRequired:!0}}],ce=new J["a"]({mode:"history",base:"/admin/",routes:ae});ce.beforeEach((e,t,n)=>{e.matched.some(e=>e.meta.authRequired)?s["a"].prototype.$session.exists()?n():n({path:"/sign-in"}):n()});var re=ce,oe={setIsStart(e,t){e.isStart=t},setIsAuthenticated(e,t){e.isAuthenticated=t},setUsername(e,t){e.username=t},setOpenPanelServiceList(e,t){e.openPanelServiceList=t},setPanelWidthServiceList(e,t){e.panelWidthServiceList=t},setSelectedService(e,t){e.selectedService=t},setServiceList(e,t){e.serviceList=t}},le={},ue={namespaced:!0,state:{documents:[],currentPageNumber:1,searchQuery:null,blockLoadDocs:!1},getters:{},mutations:{setDocuments(e,t){e.documents=t},setCurrentPageNumber(e,t){e.currentPageNumber=t},setSearchQuery(e,t){e.searchQuery=t},setBlockLoadDocs(e,t){e.blockLoadDocs=t}},actions:{ajaxGetDocumentList({state:e,commit:t,rootState:n},i={}){if(!e.blockLoadDocs&&n.serviceList.length>0){let a;t("setBlockLoadDocs",!0),a=Object.keys(i).length>0?n.serviceList[i.indexService].collections[i.indexCollection]:n.serviceList[re.currentRoute.params.indexService].collections[re.currentRoute.params.indexCollection],s["a"].axios.get("/admin/document-list",{params:{model_key:a.model_key,field_name:a.doc_name.field,page_num:e.currentPageNumber,search_query:e.searchQuery||""}}).then(e=>{const n=e.data;n.documents.length>0&&t("setDocuments",n.documents)}).catch(e=>{console.log(e)}).then(()=>{t("setBlockLoadDocs",!1)})}}}};s["a"].use(c["a"]);var de=new c["a"].Store({state:{isStart:!0,isAuthenticated:!1,username:"..",openPanelServiceList:null,panelWidthServiceList:360,selectedService:[],serviceList:[]},mutations:oe,actions:le,modules:{documentList:ue}}),me={message:{0:"Reload panel",1:"Light or Dark theme",2:"Logout",3:"Search",4:"Is delete selected documents ?",5:"Username",6:"Password",7:"Username is required.",8:"Password is required.",9:"Sign in",10:"Clear",11:"Welcome",12:"Good luck on your business !",13:"Delete document",14:"Save and create a new document",15:"Save and continue editing the document",16:"Save document",17:"Time",18:"Close",19:"Save",20:"Remove irrelevant items",21:"Delete",22:"Add new list item",23:"Title",24:"Value",25:"Create a new document",26:"New document",27:"Access denied",28:"Access allowed"}},ve={message:{0:"Перезагрузить панель",1:"Светлая или темная тема",2:"Выйти",3:"Поиск",4:"Удалить выбранные документы ?",5:"Имя пользователя",6:"Пароль",7:"Требуется имя пользователя.",8:"Требуется пароль.",9:"Войти",10:"Очистить",11:"Добро пожаловать",12:"Успеха Вам, в ваших делах !",13:"Удалить документ",14:"Сохранить и создать новый документ",15:"Сохранить и продолжить редактировать документ",16:"Сохранить документ",17:"Время",18:"Закрыть",19:"Сохранить",20:"Удалите ненужные элементы",21:"Удалить",22:"Добавить новый элемент списка",23:"Название",24:"Значение",25:"Создать новый документ",26:"Новый документ",27:"В доступе отказано",28:"Доступ разрешен"}},pe={en:me,ru:ve},he=n("f309");s["a"].use(he["a"]);const fe={icons:{iconfont:"mdi"}};var be=new he["a"](fe),ge=(n("744d"),n("bc3a")),Se=n.n(ge),Le=n("2106"),_e=n.n(Le),xe=n("0628"),ke=n.n(xe);s["a"].config.productionTip=!1,s["a"].config.devtools=!1,s["a"].config.debug=!1,s["a"].config.silent=!0,s["a"].use(H["a"]),s["a"].use(_e.a,Se.a),s["a"].use(ke.a,{persist:!0});const Pe=new H["a"]({locale:"en",fallbackLocale:"en",messages:pe});new s["a"]({router:re,store:de,i18n:Pe,vuetify:be,render:e=>e(F)}).$mount("#app")},"744d":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ffa5eefe.svg"}});
//# sourceMappingURL=app.e09f8b5e.js.map