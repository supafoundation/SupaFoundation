(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251976a1"],{"0255":function(e,t,n){"use strict";n.r(t);var o=n("7a23");Object(o["pushScopeId"])("data-v-472bae43");const i=Object(o["createTextVNode"])("Team"),r=Object(o["createTextVNode"])("Team Members "),a=["src"],l={key:0,class:"logged-in"},s={key:1,class:"logged-out"},c={key:0},d={key:1};function u(e,t,n,u,b,p){const m=Object(o["resolveComponent"])("ion-title"),w=Object(o["resolveComponent"])("ion-toolbar"),v=Object(o["resolveComponent"])("ion-header"),f=(Object(o["resolveComponent"])("ion-button"),Object(o["resolveComponent"])("ion-card-title")),h=Object(o["resolveComponent"])("ion-card-subtitle"),g=Object(o["resolveComponent"])("ion-card-header"),j=Object(o["resolveComponent"])("ion-avatar"),O=Object(o["resolveComponent"])("ion-label"),y=Object(o["resolveComponent"])("ion-item"),C=Object(o["resolveComponent"])("ion-list"),N=Object(o["resolveComponent"])("ion-card-content"),P=Object(o["resolveComponent"])("ion-card"),x=Object(o["resolveComponent"])("ion-content"),L=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(L,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[i]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(x,{fullscreen:!0},{default:Object(o["withCtx"])(()=>[Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(P,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[r]),_:1}),Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Total: "+Object(o["toDisplayString"])(p.groupInfo.length),1)]),_:1})]),_:1}),Object(o["createVNode"])(N,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(C,{key:e.timeNow},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(p.groupInfo,t=>(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:t.nick},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{slot:"start"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:t.photoURL.replace("_normal","")},null,8,a)]),_:2},1024),Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(t.name),1),Object(o["createElementVNode"])("h3",null,[Object(o["createTextVNode"])("@"+Object(o["toDisplayString"])(t.nick)+" ",1),t.endTime>=e.timeNow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",l,"● Active")):Object(o["createCommentVNode"])("",!0),t.endTime<e.timeNow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",s,"● Inactive")):Object(o["createCommentVNode"])("",!0)]),t.endTime<e.timeNow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",c,Object(o["toDisplayString"])(((void 0===t.balEnd?0:t.balEnd)/1e3).toFixed(3))+" sFuel",1)):Object(o["createCommentVNode"])("",!0),t.endTime>=e.timeNow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",d,Object(o["toDisplayString"])((((t.balEnd-(void 0===t.balStart?0:t.balStart))*((86400-(t.endTime-e.timeNow))/86400)+(void 0===t.balStart?0:t.balStart))/1e3).toFixed(3))+" sFuel ",1)):Object(o["createCommentVNode"])("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}Object(o["popScopeId"])();var b=n("d867"),p=n("1547");const m=Object(p["b"])("Share",{web:()=>n.e("chunk-2d0f0050").then(n.bind(null,"9b1b")).then(e=>new e.ShareWeb)});class w extends p["a"]{async write(e){if("undefined"===typeof navigator||!navigator.clipboard)throw this.unavailable("Clipboard API not available in this browser");if(void 0!==e.string)await this.writeText(e.string);else if(e.url)await this.writeText(e.url);else{if(!e.image)throw new Error("Nothing to write");if("undefined"===typeof ClipboardItem)throw this.unavailable("Writing images to the clipboard is not supported in this browser");try{const t=await(await fetch(e.image)).blob(),n=new ClipboardItem({[t.type]:t});await navigator.clipboard.write([n])}catch(t){throw new Error("Failed to write image")}}}async read(){if("undefined"===typeof navigator||!navigator.clipboard)throw this.unavailable("Clipboard API not available in this browser");if("undefined"===typeof ClipboardItem)return this.readText();try{const e=await navigator.clipboard.read(),t=e[0].types[0],n=await e[0].getType(t),o=await this._getBlobData(n,t);return{value:o,type:t}}catch(e){return this.readText()}}async readText(){if("undefined"===typeof navigator||!navigator.clipboard||!navigator.clipboard.readText)throw this.unavailable("Reading from clipboard not supported in this browser");const e=await navigator.clipboard.readText();return{value:e,type:"text/plain"}}async writeText(e){if("undefined"===typeof navigator||!navigator.clipboard||!navigator.clipboard.writeText)throw this.unavailable("Writting to clipboard not supported in this browser");await navigator.clipboard.writeText(e)}_getBlobData(e,t){return new Promise((n,o)=>{const i=new FileReader;t.includes("image")?i.readAsDataURL(e):i.readAsText(e),i.onloadend=()=>{const e=i.result;n(e)},i.onerror=e=>{o(e)}})}}const v=Object(p["b"])("Clipboard",{web:()=>new w});var f=n("5502"),h={name:"Tab2",components:{IonHeader:b["k"],IonToolbar:b["C"],IonTitle:b["B"],IonContent:b["j"],IonCard:b["e"],IonCardHeader:b["g"],IonCardTitle:b["i"],IonCardSubtitle:b["h"],IonPage:b["r"],IonButton:b["c"],IonCardContent:b["f"],IonItem:b["n"],IonLabel:b["p"],IonList:b["q"],IonAvatar:b["b"]},data:()=>({timeNow:Math.round(new Date/1e3)}),setup(){const e=Object(f["b"])(),t=Object(o["ref"])("http://app.supa.foundation/r/"+e.state.accounts.accountDetails.nick),n=async()=>{await m.share({title:"See cool stuff",text:"Really awesome thing you need to see right meow",url:"http://ionicframework.com/",dialogTitle:"Share with buddies"})},i=async()=>{await v.write({string:"http://app.supa.foundation/r/"+e.state.accounts.accountDetails.nick}),r("Referral link copied to clipboard!","success")},r=async(e,t)=>{const n=await b["F"].create({message:e,color:t,duration:3e3});return n.present()};return{shareReferral:n,copyReferral:i,referralCode:t,accountInfo:Object(o["computed"])(()=>e.getters["accounts/getAccountDetails"])}},computed:{groupInfo(){const e=this.$store.getters["accounts/getGroupDetails"];return e.sort((e,t)=>parseFloat(t.endTime)-parseFloat(e.endTime))}},methods:{getTime(){var e=this;this.task&&clearInterval(this.task),this.task=setInterval(()=>{e.getTime()},1e3),this.timeNow=Math.round(new Date/1e3)}},updated(){this.getTime()}},g=(n("459d"),n("6b0d")),j=n.n(g);t["default"]=j()(h,[["render",u],["__scopeId","data-v-472bae43"]])},1547:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const o=e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t},o=(e,t)=>{n.platforms.set(e,t)},i=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))};return n.addPlatform=o,n.setPlatform=i,n},i=e=>e.CapacitorPlatforms=o(e),r=i("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{});r.addPlatform,r.setPlatform;var a;(function(e){e["Unimplemented"]="UNIMPLEMENTED",e["Unavailable"]="UNAVAILABLE"})(a||(a={}));class l extends Error{constructor(e,t){super(e),this.message=e,this.code=t}}const s=e=>{var t,n;return(null===e||void 0===e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null===e||void 0===e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"},c=e=>{var t,n,o,i,r;const c=e.CapacitorCustomPlatform||null,d=e.Capacitor||{},u=d.Plugins=d.Plugins||{},b=e.CapacitorPlatforms,p=()=>null!==c?c.name:s(e),m=(null===(t=null===b||void 0===b?void 0:b.currentPlatform)||void 0===t?void 0:t.getPlatform)||p,w=()=>"web"!==m(),v=(null===(n=null===b||void 0===b?void 0:b.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||w,f=e=>{const t=C.get(e);return!!(null===t||void 0===t?void 0:t.platforms.has(m()))||!!j(e)},h=(null===(o=null===b||void 0===b?void 0:b.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||f,g=e=>{var t;return null===(t=d.PluginHeaders)||void 0===t?void 0:t.find(t=>t.name===e)},j=(null===(i=null===b||void 0===b?void 0:b.currentPlatform)||void 0===i?void 0:i.getPluginHeader)||g,O=t=>e.console.error(t),y=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),C=new Map,N=(e,t={})=>{const n=C.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const o=m(),i=j(e);let r;const s=async()=>(!r&&o in t?r=r="function"===typeof t[o]?await t[o]():t[o]:null!==c&&!r&&"web"in t&&(r=r="function"===typeof t["web"]?await t["web"]():t["web"]),r),b=(t,n)=>{var r,s;if(!i){if(t)return null===(s=t[n])||void 0===s?void 0:s.bind(t);throw new l(`"${e}" plugin is not implemented on ${o}`,a.Unimplemented)}{const o=null===i||void 0===i?void 0:i.methods.find(e=>n===e.name);if(o)return"promise"===o.rtype?t=>d.nativePromise(e,n.toString(),t):(t,o)=>d.nativeCallback(e,n.toString(),t,o);if(t)return null===(r=t[n])||void 0===r?void 0:r.bind(t)}},p=t=>{let n;const i=(...i)=>{const r=s().then(r=>{const s=b(r,t);if(s){const e=s(...i);return n=null===e||void 0===e?void 0:e.remove,e}throw new l(`"${e}.${t}()" is not implemented on ${o}`,a.Unimplemented)});return"addListener"===t&&(r.remove=async()=>n()),r};return i.toString=()=>t.toString()+"() { [capacitor code] }",Object.defineProperty(i,"name",{value:t,writable:!1,configurable:!1}),i},w=p("addListener"),v=p("removeListener"),f=(e,t)=>{const n=w({eventName:e},t),o=async()=>{const o=await n;v({eventName:e,callbackId:o},t)},i=new Promise(e=>n.then(()=>e({remove:o})));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await o()},i},h=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return i?f:w;case"removeListener":return v;default:return p(t)}}});return u[e]=h,C.set(e,{name:e,proxy:h,platforms:new Set([...Object.keys(t),...i?[o]:[]])}),h},P=(null===(r=null===b||void 0===b?void 0:b.currentPlatform)||void 0===r?void 0:r.registerPlugin)||N;return d.convertFileSrc||(d.convertFileSrc=e=>e),d.getPlatform=m,d.handleError=O,d.isNativePlatform=v,d.isPluginAvailable=h,d.pluginMethodNoop=y,d.registerPlugin=P,d.Exception=l,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},d=e=>e.Capacitor=c(e),u=d("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}),b=u.registerPlugin;u.Plugins;class p{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){const n=this.listeners[e];n||(this.listeners[e]=[]),this.listeners[e].push(t);const o=this.windowListeners[e];o&&!o.registered&&this.addWindowListener(o);const i=async()=>this.removeListener(e,t),r=Promise.resolve({remove:i});return Object.defineProperty(r,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()}}),r}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t){const n=this.listeners[e];n&&n.forEach(e=>e(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new u.Exception(e,a.Unimplemented)}unavailable(e="not available"){return new u.Exception(e,a.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const o=n.indexOf(t);this.listeners[e].splice(o,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}}).call(this,n("c8ba"))},"459d":function(e,t,n){"use strict";n("a267")},a267:function(e,t,n){}}]);
//# sourceMappingURL=chunk-251976a1.1adb1bbd.js.map