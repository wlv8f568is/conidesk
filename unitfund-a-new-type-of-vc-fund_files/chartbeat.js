(function(){var g=void 0,h=true,i=null,j=false,l,m=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function ba(a,b){function c(){}c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a};function ca(){}
function da(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==i){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),da(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),ea(e,c),c.push(":"),da(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ga={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},ha=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){b.push('"',a.replace(ha,function(a){if(a in ga)return ga[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return ga[a]=e+b.toString(16)}),'"')};var ia={scroll:5E3,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3},ja={scroll:2E4,keydown:5E3,mousemove:5E3,resize:5E3,mousedown:5E3,focus:5E3,pageload:5E3};function ka(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function o(a,b){var c="",d=la(encodeURIComponent(a));d.splice(b||5,d.length);q(d,function(a){if(a==0)a="A";else{a>>>=0;for(var b="",d;a>0;)d=a%64,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+b,a>>>=6;a=b}c+=a});return c}
function la(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,n=3285377520,p=[],k,u,x,J,K,fa=Math.ceil((a.length/4+2)/16),V=[fa],z=0,w;z<fa;z++){V[z]=[];for(k=0;k<16;k++)V[z][k]=a.charCodeAt(z*64+k*4)<<24|a.charCodeAt(z*64+k*4+1)<<16|a.charCodeAt(z*64+k*4+2)<<8|a.charCodeAt(z*64+k*4+3)}z=(a.length-1)*8;a=fa-1;V[a][14]=Math.floor(z/Math.pow(2,32));V[a][15]=z&4294967295;for(z=0;z<fa;z++){for(w=0;w<16;w++)p[w]=V[z][w];
for(w=16;w<80;w++)p[w]=(p[w-3]^p[w-8]^p[w-14]^p[w-16])<<1|(p[w-3]^p[w-8]^p[w-14]^p[w-16])>>>31;a=c;k=d;u=e;x=f;J=n;for(w=0;w<80;w++)K=Math.floor(w/20),K=(a<<5|a>>>27)+(K==0?k&u^~k&x:K==1?k^u^x:K==2?k&u^k&x^u&x:k^u^x)+J+b[K]+p[w]&4294967295,J=x,x=u,u=k<<30|k>>>2,k=a,a=K;c=c+a&4294967295;d=d+k&4294967295;e=e+u&4294967295;f=f+x&4294967295;n=n+J&4294967295}return[c,d,e,f,n]}
function ma(a){var b=m.navigator,c=m.window.screen,d=[b.userAgent,b.platform,(new Date).getTimezoneOffset(),c.width+c.height+c.colorDepth];q(b.plugins,function(a){d.push(a.name+a.description+a.filename+a[0].type)});b=m.performance;d=d.concat([b&&b.now?b.now():"",document.title,m.location.href,r(),ka()]);return d.concat(a||[]).join()}function s(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}
function t(a){return typeof a!=="undefined"}function na(a){return a.replace(/^www\./,"")}var oa=/^((https?\:)?(\/\/))/i;function pa(a){return a.replace(oa,"")}var qa=/^((https?\:)?(\/\/))?[^\/]*/;function ra(a){return a.replace(qa,"")}var sa=/\#.*/;function ta(a){return a.replace(sa,"")}var ua=/\?[^\#]*/;function va(a){return a.toLowerCase()}var wa=/\/+((\?|\#).*)?$/;function xa(a){return a.replace(wa,"$1")}function ya(a){return a.replace(ua,"")}
function za(a,b){if(a===b)return 0;var c=i;q([va,xa,pa,ra,ta,ya],function(d,e){a=d(a);b=d(b);if(a===b)return c=e+1,j});return c}function v(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}function Aa(a,b){var c=m;c.removeEventListener?c.removeEventListener(a,b,j):c.detachEvent&&c.detachEvent("on"+a,b)}function y(a){return typeof a==="number"}function A(a){return typeof a==="string"}
function Ba(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function r(){return(new Date).getTime()}function Ca(){return m.location.protocol==="https:"?"https:":"http:"}function q(a,b){if((!!a&&a.constructor===Object)===h)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===j)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===j)break}}function Da(a,b){for(var c=0,d=a.length;c<d;c++)if(b(a[c]))return c;return-1}
function Ea(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,n=a.length;f<=n;f++)c[0][f]=f;for(var p,k,u,d=1;d<=e;d++)for(f=1;f<=n;f++)p=d-1,k=f-1,u=c[p][k],b.charAt(p)==a.charAt(k)?c[d][f]=u:(k=c[d][k]+1,p=c[p][f]+1,u+=2,c[d][f]=Math.min(k,p,u));return c[b.length][a.length]}var Fa,Ga=m.setInterval,Ha=m.clearInterval,Ia=m.setTimeout,B=m.clearTimeout;
function Ja(a){switch(a){case g:return"undefined";case "":return"empty";default:return a}};function Ka(a,b,c){c=c||"";if(a===g)a=j;else{var d;if(!(d=c===""&&a.getAttribute(b)))if(d=a.getAttribute(b))d=a.getAttribute(b)===c;a=d?a:a===document.body?j:Ka(a.parentNode,b,c)}return a}
function La(a,b,c){a="page"+a+"Offset";b="scroll"+b;if(c){var d,e;d=d||"*";e=e||document;if("querySelectorAll"in e)c=e.querySelectorAll(d+"[data-cb-scroll-element]");else{c=[];d=e.getElementsByTagName(d);for(e=d.length;e--;)d[e].getAttribute("data-cb-scroll-element")&&c.push(d[e])}if(c&&c.length)return c[0][b]}if(y(m[a]))return m[a];else if(document.body&&document.body[b])return document.body[b];else if(document.documentElement[b])return document.documentElement[b];return 0}
function Ma(a){var b=document,b=b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0;window["inner"+a]&&(b=Math.min(window["inner"+a],b));return b}function C(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}
function Na(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return i;var d=a.ownerDocument.documentElement,e=0,f=t(c)?c+1:-1;A(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return i}function Oa(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}
function Pa(a){a=a||window.event;return!a?i:Na(a.target||a.srcElement,Oa,10)}function Qa(a,b){var c=document.createElement(a);q(b,function(a,b){c.setAttribute(b,a)});return c};function Ra(){this.G={};this.Sa=1}function D(a,b,c,d){a.Sa++;a.G[b]=a.G[b]||{};a.G[b][a.Sa]=[c,d];return a.Sa}function E(a,b){if(A(b))a.G[b]=g,delete a.G[b];else if(y(b)){var c=h;q(a.G,function(a){q(a,function(e,f){if(parseInt(f,10)===b)return a[f]=g,delete a[f],c=j});return c})}}Ra.prototype.O=function(a,b){if(this.G[a]){var c=arguments.length>1?Array.prototype.slice.call(arguments,1):[];q(this.G[a],function(a){var b;a&&a.length===2&&(b=a[0],a=a[1],b.apply(a,c))})}};
Ra.prototype.addEventListener=function(a,b){var c=D(this,a,b);b._cbEventId=c};Ra.prototype.removeEventListener=function(a,b){this.G[a]&&this.G[a][b._cbEventId]&&this.G[a][b._cbEventId][0]===b&&E(this,b._cbEventId)};var F=new Ra,Sa="a";var G={};
G.B=function(){G.Ea?G.oa("pageload"):(G.mb=[{target:m,event:"scroll"},{target:document.body,event:"keydown"},{target:document.body,event:"mousemove"},{target:m,event:"resize"},{target:document.body,event:"mousedown"}],G.va=i,G.T=i,G.Da={},G.Ca={},G.bb={},G.wa={},q(G.mb,function(a){var b=a.event;v(a.target,b,function(a){G.oa.call(G,b,a)})}),D(F,"f",function(){G.oa("focus")}),G.oa("pageload"),v(document.body,"click",function(a){(a=Pa(a))&&F.O("c",a)},h),v(document.body,"contextmenu",function(a){(a=Pa(a))&&
F.O("r",a)}),G.Ea=h)};G.tb=function(){var a,b=G.bb.keydown;if(b===g)return j;b=r()-b;return b<=(a||15E3)&&b>=0};G.ea=function(a,b){var c=G.wa[a];if(!c)return"";var b=b||r(),d,e=0;q(c,function(a){d=Math.floor((b-a)/1E3);d>=0&&d<16&&(e|=1<<d)});c=("0000"+e.toString(16)).slice(-4);return c=="0000"?"":c};G.Sb=function(){G.wa={}};G.Wa=100;
G.oa=function(a,b){if(!b)b=window.event;if(b&&a==="keydown"){var c=b.keyCode?b.keyCode:b.which;if(c===32||c>36&&c<41)a="scroll"}G.Zb(a);if(G.va===i)G.kb(a);else if(!G.T||ia[G.T]<ia[a]||ja[G.T]<ja[a])G.T=a};G.Zb=function(a){var b=r();G.bb[a]=b;var c=G.wa[a];c?c.length<2?c.push(b):c[c.length-2]>b-1E3?c[c.length-1]=b:c.push(b):c=[b];c.length>32&&c.shift();G.wa[a]=c};G.kb=function(a){G.va=Ia(G.xb,G.Wa);F.O(Sa);G.Da[a]!==i&&B(G.Da[a]);G.Ca[a]!==i&&B(G.Ca[a]);G.jb(a,G.Da,ia,"i");G.jb(a,G.Ca,ja,"j")};
G.jb=function(a,b,c,d){b[a]=Ia(function(){B(b[a]);delete b[a];var c=j;q(b,function(){c=h;return j});c||F.O(d)},c[a]+G.Wa)};G.xb=function(){B(G.va);G.va=i;if(G.T)G.kb(G.T),G.T=i};var Ta,Ua,H,Va,Wa;(function(){var a,b;q(["","moz","o","ms","webkit"],function(c){a=(c+"Hidden").charAt(0).toLowerCase()+(c+"Hidden").slice(1);if(typeof m.document[a]==="boolean")return b=c,j});b!==g&&(Va=a,Wa=(b+"VisibilityState").charAt(0).toLowerCase()+(b+"VisibilityState").slice(1),H=b+"visibilitychange")})();var I=j;function Xa(){I=Wa&&m.document[Wa]==="prerender"?h:j}function Ya(){Ua=h;F.O("f")}function Za(){Ua=j;F.O("b")}
function $a(a,b,c){m.addEventListener?m.addEventListener(a,c,j):m.document.attachEvent&&m.document.attachEvent(b,c)}function ab(){var a=h;m.document.hasFocus&&(a=m.document.hasFocus());var b=j;Va&&(b=m.document[Va]);return a&&!b}function bb(){ab()?Ya():Za()}function cb(a){Xa();if(I){var b=j,c=function(){b||(Xa(),I||(b=h,a(),m.window.setTimeout(function(){m.document.removeEventListener(H,c,j)},100)))};m.document.addEventListener(H,c,j)}else a()};function L(){this.a=m._sf_async_config||{};this.Xa=s(this.gb,this)}L.prototype.B=function(){this.hb=0};L.prototype.gb=function(){};L.prototype.sa=function(a){if(!I){var b=this.Xa,c;c=new Image(1,1);if(b)c.onerror=b;c.src=a}};L.prototype.ca=function(){this.Xa=i};function db(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),q(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function eb(a,b){var c="",d=m.location.href.match(/[^?]+[?]([^#]+).*/);if(d){var d=db(d[1]),e=b||a;d[e]&&(c=d[e])}return encodeURIComponent(c)}function fb(a,b){return!b?h:a==="http:"&&b==="80"||a==="https:"&&b==="443"}
function gb(a){var b=[];q(hb,function(c){var d=a[c];t(d)&&(Object.prototype.toString.call(d)==="[object Array]"?q(d,function(a){b.push(c+"="+a)}):d&&d.constructor===Object?q(d,function(a,c){b.push(c+"="+a)}):((d+"").length||c=="r")&&b.push(c+"="+d))});b.push("_");return b.join("&")}
function ib(a){var b={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(!a)return b;var c=document.createElement("a"),d=m.location;if(!/^https?:/.test(a)&&a.indexOf("javascript:")!==0&&a.indexOf("app:")<0)if(a.indexOf("//")===0)a=d.protocol+a;else if(a.indexOf("/")===0)var e=fb(d.protocol,d.port)?"":d.port,a=d.protocol+"//"+d.hostname+(e?":"+e:"")+a;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",f);a=f===-1?
"/"+a:e.substr(0,f)+"/"+a}c.href=a;b.hostname=c.hostname;b.pathname=c.pathname;b.search=c.search;b.protocol=c.protocol;b.port=c.port;b.hash=c.hash;if(b.pathname.charAt(0)!=="/")b.pathname="/"+b.pathname;if(b.hostname==="")b.hostname=d.hostname;if(b.protocol==="")b.protocol=d.protocol;if(b.protocol==="javascript:")b.pathname="",b.hostname="",b.port="",b.hash="";if(fb(b.protocol,b.port)||b.port==="0")b.port="";return b}
function jb(a){var b=a.protocol;a.hostname&&(b+="//"+a.hostname,a.port&&(b+=":"+a.port));return b+a.pathname+a.search+a.hash};function M(a,b,c){a[b]=a[b]||c}function kb(a,b){for(var c=m[a]||[];c.length;)b(c.shift());m[a]={push:b}}function lb(a){q(document.getElementsByTagName("script"),function(b){if(b.src.match(/chartbeat.js/))return b=db(b.src.split("?")[1]),M(a,"uid",b.uid),M(a,"domain",b.domain),j})}function mb(a,b){return a[b]?encodeURIComponent(a[b]):""}function nb(a){var b={};q(a,function(a,d){d.charAt(0)=="_"&&(b[d]=a)});return b};var N={};N.wb=function(){try{N.create("_cb_test","1",1);var a=N.k("_cb_test");N.remove("_cb_test");return a==="1"}catch(b){return j}};N.k=function(a){a+="=";var b="";q(document.cookie.split(";"),function(c){for(;c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return b=c.substring(a.length,c.length),j});return b};
N.create=function(a,b,c){var d=m._sf_async_config;if(d&&d.noCookies)return"";d=new Date;d.setTime(r()+c*1E3);a=a+"="+b+("; expires="+d.toGMTString())+"; path=/";return document.cookie=a};N.remove=function(a){return N.k(a)?N.create(a,"",-86400):""};var O={};O.D=function(a){var b=m._sf_async_config;if(!a&&b&&b.noCookies)return i;if(O.D.Aa!==g)return O.D.Aa;var a=r()+"",c,d;try{if((d=m.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return O.D.Aa=d}catch(e){}return O.D.Aa=i};O.k=function(a){var b=O.D();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&r()>c)?(O.remove(a),""):b.getItem(a)||""};
O.create=function(a,b,c){var d=O.D();if(d){var e=new Date;e.setTime(r()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};O.remove=function(a){var b=O.D();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function ob(a){this.ra=a||"";this.yb=O.D()!==i||N.wb();this.Ra=j;pb(this)}l=ob.prototype;l.isSupported=function(){return this.yb};
function pb(a){if(!N.k("_cb_ls")){var b=O.D()!==i,c=N.k("_SUPERFLY_lockout");c&&q(["","_v_","_p_"],function(b){a.create(b+"_SUPERFLY_lockout",c,600,h)});var d=N.k("_chartbeat3");d&&(a.create("_v__chartbeat3",d,34128E3,h),N.remove("_chartbeat3"));b&&((b=N.k("_chartbeat2"))&&a.create("_chartbeat2",b,34128E3,h),(b=N.k("_chartbeat5"))&&a.create("_chartbeat5",b,60,h));N.create("_cb_ls","1",34128E3)}}l.create=function(a,b,c,d){a=d?a:this.ra+a;(O.D()?O:N).create(a,b,c);O.D()&&N.create(a,b,c)};
l.update=function(a,b,c,d,e,f,n){a=d?a:this.ra+a;e=A(e)?e:"::";d=(d=this.k(a,h))?d.split(e):[];if(n&&d.length){var p=n(b),k=Da(d,function(a){return n(a)===p});k!==-1&&d.splice(k,1)}d.push(b);for(y(f)&&d.length>f&&d.splice(0,d.length-f);d.length>1&&d.join(e).length>4E3;)d.shift();this.create(a,d.join(e),c,h)};
l.k=function(a,b){var a=b?a:this.ra+a,c=(O.D()?O:N).k(a);if(!c&&O.D()&&(c=N.k(a))&&N.k("_cb_ls")){this.Ra=h;var d;switch(a){case "_SUPERFLY_lockout":d=600;break;case "_chartbeat4":d=60;break;case "_cb_cp":d=60;break;case "_chartbeat3":d=34128E3;break;default:d=34128E3}O.create(a,c,d)}return c};l.remove=function(a,b){a=b?a:this.ra+a;(O.D()?O:N).remove(a);O.D()&&N.remove(a)};function qb(a){var b=i;if(a&&(b=rb()))return b;var c=m.location,b=P(c.pathname),a=c.search||"",a=a.replace(/PHPSESSID=[^&]+/,""),d=/&utm_[^=]+=[^&]+/ig;(c=d.exec(c.search))&&(a=a.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(c=d.exec(a))&&(a=a.replace(d,c[1]!=""?"?"+c[1]:""));return b+a}function rb(){var a=i;q(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return b=ib(b.href),a=P(b.pathname)+b.search+b.hash,j});return a}
for(var sb={},tb=0;tb<81;tb++)sb["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(tb)]=h;function ub(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return sb[c]?String.fromCharCode(c):"%"+b.toUpperCase()}function P(a){if(!A(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,ub);return a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent)};function Q(a,b){var c=R();return t(b)&&!t(c[a])?b:c[a]}function R(){t(m._cb_shared)||(m._cb_shared={});return m._cb_shared};var S={pb:{IDLE:0,ob:1,nb:2,xa:3},qb:{IDLE:0,ob:1,nb:2,xa:3},H:0,J:0};S.B=function(){if(!S.Ea)D(F,Sa,S.Fb,S),D(F,"i",S.Jb,S),D(F,"f",S.Hb,S),D(F,"b",S.Gb,S),D(F,"j",S.Ib,S),S.Ea=h};S.Cb=function(){return S.H};S.Db=function(){return S.J};S.Fb=function(){S.H===1?S.Q(3):S.H===0&&S.Q(2);S.J===1?S.P(3):S.J===0&&S.P(2)};S.Jb=function(){S.H===3?S.Q(1):S.H===2&&S.Q(0)};S.Ib=function(){S.J===3?S.P(1):S.J===2&&S.P(0)};S.Hb=function(){(S.H===0||S.H===2)&&S.Q(3);(S.J===0||S.J===2)&&S.P(3)};
S.Gb=function(){S.H===3?S.Q(2):S.H===1&&S.Q(0);S.J===3?S.P(2):S.J===1&&S.P(0)};S.Q=function(a){S.H=a;F.O("s",a)};S.P=function(a){S.J=a;F.O("x",a)};function vb(a,b){this.Ba=a||g;this.Ia=b||g;this.Z=this.N=0;this.$a=s(this.Mb,this);this.Qa=this.M=i}l=vb.prototype;l.B=function(){this.Z=this.N=0;this.M=i;this.Qa=D(F,"s",this.fa,this);this.fa(S.Cb())};l.fa=function(a){Ha(this.M);this.M=i;if(a===S.pb.xa)this.M=Ga(this.$a,1E3)};l.Mb=function(){if(this.Ba===g||this.Ba())this.N++,this.Z++,this.Ia&&this.Ia()};l.terminate=function(){Ha(this.M);this.M=i;E(F,this.Qa)};l.ca=function(){this.terminate();this.Ia=this.Ba=g};function wb(a,b){vb.call(this,a,b)}ba(wb,vb);wb.prototype.B=function(){this.Z=this.N=0;this.M=i;this.Qa=D(F,"x",this.fa,this);this.fa(S.Db())};wb.prototype.fa=function(a){Ha(this.M);this.M=i;if(a===S.qb.xa)this.M=Ga(this.$a,1E3)};function T(){L.call(this);this.X=[];this.q=new ob(this.Wb);this.q.remove("_SUPERFLY_nosample");this.F=new vb;this.U=new wb;this.Ja=s(this.qa,this);v(m,"unload",this.Ja);cb(s(this.B,this))}ba(T,L);l=T.prototype;l.Na=h;
l.B=function(){T.S.B.call(this);this.ma=this.$=0;this.ba=r();this.Ma=o(xb(this));this.La=h;this.Fa=72E5;if(this.Na){var a=+this.a.sessionLength;if(!isNaN(a))this.Fa=a*6E4}a=Q("d");if(!a){var a=[],b=this.q.k("_chartbeat2",h);b.length>0&&(a=b.split("."));a.length>5&&(a=[]);var b=r(),c=this.q.k("_cb",h);c.length>0?a[1]=a[1]||b:c=a[0];a[0]="";var d=b-+(a[1]||0),e=b-+(a[2]||0);R().n=c&&d>18E5&&e<2592E6?0:1;d=a[4];if(!(e=e>18E5))if(yb(this))e=j;else{var e=U(this),e=decodeURIComponent(e),e=zb(e)||e,f;f=
Ab(this);f=decodeURIComponent(f);f=zb(f)||f;e=e!==f}if(!d||e)d=o(xb(this)),a[4]=d,this.q.remove("_cb_svref",h);e="1";f=a&&+a[2];d=a&&a[3];if(a&&f&&d)if(e=Math.abs((Ba(b)-Ba(f))/864E5)){e=Math.min(e,16)-1;for(f="";e--;)f+=0;e=(d+f+"1").slice(-16)}else e=d;d=e;c||(c=this.a.utoken||o(xb(this),3),a[1]=b);a[2]=b;a[3]=d;this.a.utoken=this.ka;this.q.create("_cb",c,34128E3,h);this.q.create("_chartbeat2",a.join("."),34128E3,h);a[0]=c;R().d=a}this.jc=a.join(".");var n;c=+a[1];d=+a[2];if((b=a[3])&&c&&d)n=(Math.min((Math.abs((Ba(d)-
Ba(c))/864E5)||0)+1,16,b.length)-1).toString(16),n+=("0000"+parseInt(b,2).toString(16)).slice(-4);this.Za=n;this.Ob=Q("n",1);this.ka=a[0];this.Vb=a[4];this.Ub=Ab(this);this.q.create("_cb_svref",Ab(this)||"null",1800,h);this.F.B();this.U.B();S.B();G.B();Ta||(Ua=ab(),H&&m.document.addEventListener&&m.document.addEventListener(H,bb,j),$a("focus","onfocusin",Ya),$a("blur","onfocusout",Za),Ua&&Ya(),Ta=h);this.ha=0;this.sb=D(F,Sa,this.Pb,this)};
function Bb(a){if(!a.q.k("_SUPERFLY_lockout")&&!I)a.Nb?a.ta():(a.Nb=h,!m._sf_async_config&&!m._cbq?(a.pa=s(a.ta,a),v(m,"load",a.pa)):a.ta())}l.ta=function(){this.Ka=Cb();G.B();var a=s(this.ia,this);this.ab=Ga(a,15E3);this.ia()};
l.ia=function(){var a=this.F.Z,a=this.a.reading&&+this.a.reading||a>0;if(this.ma<this.$&&!a)this.ma++;else{var b;if(Fa===g)b=m.navigator.userAgent,Fa=b.indexOf("AppleWebKit")>0&&b.indexOf("FBIOS")>0;b=Fa;b&&!a?this.ma++:(a?this.$=0:Db(this),this.ma=0,this.X.push(0),this.X.length>18&&this.X.shift(),this.Na&&r()-this.ba>=this.Fa?this.terminate():this.ja())}};
l.gb=function(){this.X.push(1);var a=0;q(this.X,function(b){a+=b});a<3?(this.La=h,Db(this)):(this.terminate(),this.q.create("_SUPERFLY_lockout","1",600))};l.qa=function(){};l.Pb=function(){var a=Eb(this);this.ha=Math.max(this.ha,a)};function Eb(a){return Math.floor(La("Y","Top",!!a.a.scrollElement))}function Db(a){var b=a.$,b=b?Math.min(b*2,16):1;a.$=b}l.la=function(){this.qa();this.terminate()};l.lb=function(){this.B();Bb(this)};
function yb(a){if(a.a.virtualReferrer)return h;if(Fb(a))return j;a=document.referrer.indexOf("://"+m.location.hostname+"/");return a!=-1&&a<9}function Fb(a){var b=a.a.referrerOverrideQueryParam,c="";q(window.location.search.substr(1).split("&"),function(a){a=a.split("=");if(a.length==2&&a[0]==b&&a[1])return c=decodeURIComponent(a[1]).replace(/\+/g," "),j});c&&c.indexOf("::")==-1&&(c="external::"+c);return c}
function U(a){a=a.a.virtualReferrer||Fb(a);if(!a&&(a=document.referrer||"")&&!/^(android-)?app:/.test(a)){var b=ib(a);if(b.protocol==="http:"||b.protocol==="https:")b.pathname=P(b.pathname),a=jb(b)}return encodeURIComponent(a)}function Gb(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}function xb(a){a=[U(a),C("Width"),C("Height")];return ma(a)}
function Hb(a){var b=[],c=a.q.k("_chartbeat4");c&&(q(c.split("::"),function(a){b.push(encodeURIComponent(a))}),a.q.remove("_chartbeat4"));return b}function Ab(a){a=a.q.k("_cb_svref",h)||U(a)||"null";a==="null"&&(a="");return a}function zb(a){a=a.match(/^https?:\/\/([^\/]*)/);return!a?i:a[1]}function Cb(){var a=m.performance&&m.performance.timing;if(!a||a.navigationStart==0)return-1;var b=a.navigationStart,a=a.loadEventStart;return y(b)&&b?y(a)&&a>b?a-b:r()-b:-1}
l.terminate=function(){this.F.terminate();this.U.terminate();E(F,this.sb);this.pa!==g&&Aa("load",this.pa);Ha(this.ab);R().d=g;R().n=g};l.ca=function(){this.terminate();Aa("unload",this.Ja);this.Ja=this.pa=this.q=this.X=this.a=i;this.F.ca();this.F=i;this.U.ca();this.U=i;T.S.ca.call(this)};function Ib(a){for(var b=Q("m")||[];b.length;)a(b.shift());a={push:a};R().m=a};function Jb(a,b,c){var d=a.offsetLeft,e=a.offsetTop,f=Kb(a);d+=f.x;e+=f.y;for(var n=j,p=c?0:Math.floor(La("X","Left",g)),k=c?0:Math.floor(La("Y","Top",g)),f=a.offsetParent;a&&a!==b&&a!==document.body;){if(a===f)f=Kb(a),d+=a.offsetLeft+f.x,e+=a.offsetTop+f.y,f=a.offsetParent;c||(d-=a.scrollLeft,e-=a.scrollTop);if(Lb(a,["position"]).position==="fixed"){n=h;break}a=a.parentElement}c||(d-=b?b.scrollLeft:p,e-=b?b.scrollTop:k);n&&(d+=p,e+=k);return{x:d,y:e}}
function Lb(a,b){var c={},d,e;m.getComputedStyle?d=m.getComputedStyle(a,i):a.currentStyle?e="currentStyle":a.style&&(e="style");q(b,function(b){c[b]=d?d[b]||d.getPropertyValue(b):a[e][b]});return c}var Mb=/matrix(3d)?\((.*)\)/;function Kb(a){var b={x:0,y:0},a=Lb(a,["transform"]).transform;if(!A(a))return b;var c=a.match(Mb);if(!c)return b;var a=c[2].split(", "),d;t(c[1])?(c=12,d=13):(c=4,d=5);b.x=parseInt(a[c],10);b.y=parseInt(a[d],10);return b};function Nb(){var a=m.location.href,a=a.replace(/-{2,}/g,"-"),a=ib(a);a.pathname=P(a.pathname);return a}
function Ob(a){var b=N.k("_chartbeat6");if(!b)return i;var b=b.split("::"),c,d;if(b.length===1)c=b[0].split(","),d=0;else{var e,f=Nb(),n=jb(f);q(b,function(a,b){var f=a.split(","),k=Ea(n,decodeURIComponent(f[0]));if(k===0)return c=f,d=b,j;if(e===g||k<e)e=k,c=f,d=b})}b.splice(d,1);a="_chartbeat6="+b.join("::")+Pb(a);document.cookie=a;var a=[],b=decodeURIComponent(c[0]),f=decodeURIComponent(c[1]),p=c[2];c.splice(0,3);for(var k=c.length/2,u=0;u<k;u++)a.push({hc:b,origin:f,aa:p,zb:c[u*2],$b:c[u*2+1]});
return a}function Pb(a){var b="",c;if(!(a&&a.constructor===Object))return b;a.eb&&(c=new Date,c.setTime(c.getTime()+a.eb),b+="; expires="+c.toGMTString());a.domain&&(b+="; domain="+a.domain);a.path&&(b+="; path="+a.path);return b}function Qb(a){var b=a.topStorageDomain,a=a.domain,c=m.location.hostname;return b?b:Rb(c,a)?a:c.replace(/^www\./,"")}function Rb(a,b){if(a===b)return h;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return j;if(c.pop()!==d.pop())return j}return h}
function Sb(a,b,c,d){this.Bb=a;this.Ab=b;this.ac=c;this.aa=d};function Tb(a,b){for(var c=b||document.documentElement,d=[],e=i,f=a,n,p,k,u,x,J;f&&f!==c;){n=f.nodeName.toLowerCase();e=f;p=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){k=f.children;u=0;for(x=0,J=k.length;x<J;x++){if(e===k[x]){n+="["+(1+x-u)+"]";break}k[x].nodeName!==p&&u++}}d.unshift(n)}return d.join("/")};function W(){this.Wb="_t_";T.call(this)}ba(W,T);l=W.prototype;
l.B=function(){W.S.B.call(this);lb(this.a);var a=m.location;M(this.a,"mabServer","mabping.chartbeat.net");M(this.a,"title",document.title);M(this.a,"domain",a.hostname);M(this.a,"path",qb(!!this.a.useCanonical));this.ga=na(a.hostname);this.a.domain=na(this.a.domain);this.Yb=Qb(this.a);this.da=this.na=j;this.Ya=[];var b=this,a=Ob({domain:"."+this.Yb,eb:6E4,path:"/"});if(a!==i)this.na=h,q(a,function(a){b.Ya.push(new Sb(a.origin,a.zb,a.$b,a.aa))});this.fb=0;this.ua=i;Ib(s(this.Lb,this))};
l.ja=function(){var a=this.F.N,b=Ub(this),c,d=this;this.na&&q(this.Ya,function(e){c=b+"&x="+e.Ab+"&v="+e.ac+"&ml="+e.aa+"&xo="+e.Bb+"&e="+a;d.sa(c)});!this.da&&this.ua&&Vb(this,this.ua);this.da=h};l.ta=function(){this.Ka=Cb();G.B();if(this.na){var a=s(this.ia,this);this.ab=Ga(a,500)}this.ia()};l.ia=function(){var a,b;this.da?(a=this.F.N,b=this.fb*15,a-b>=15&&(this.ja(),this.fb+=1),a>=45&&this.terminate()):this.ja()};
function Ub(a){var b=a.a;return Ca()+"//"+b.mabServer+"/ping/mab?h="+encodeURIComponent(b.domain)+"&p="+encodeURIComponent(b.path)+"&d="+encodeURIComponent(a.ga)+"&u="+a.ka+"&c="+Math.round((r()-a.ba)/600)/100}l.qa=function(){};l.Xb=function(a){var b=a.d,c=i;b!==i&&(c={Oa:b.s,aa:b.g,cb:b.m});a={status:a.s,data:c,code:a.c,message:a.m};this.da?Vb(this,a):this.ua=a};
function Vb(a,b){var c=Ub(a),d=b.status,e=b.data;if(d=="s"&&e!==i){var f=s(a.sa,a);e.Oa&&e.Oa.constructor===Object&&q(e.Oa,function(a,b){f(c+"&x="+b+"&v="+a+"&ml="+e.aa+"&e=-1")});Object.prototype.toString.call(e.cb)==="[object Array]"&&q(e.cb,function(a){f(c+"&me=3&ml="+e.aa+"&x="+a)})}else d=="e"&&a.sa(c+"&me="+b.code)}l.Lb=function(a,b){for(var c=0,d=arguments.length;c<d;c++){var a=arguments[c],e=a.shift();e==="t"?this.Xb.apply(this,a):e==="v"&&this.Tb.apply(this,a)}};
l.la=function(){R().m=[];t(this.Ta)&&this.Ta();W.S.la.call(this)};l.Tb=function(a){this.Ta=a};l.terminate=function(){this.Ta=this.ic=g;this.ua=i;this.da=this.na=g;W.S.terminate.call(this)};if(!m.pSUPERFLY_mab){var Wb=new W,Xb={};Xb.evps=s(Wb.la,Wb);Xb.svps=s(Wb.lb,Wb);m.pSUPERFLY_mab=Xb;Bb(Wb)};var Yb="engagedSeconds",Zb={fc:"id",ec:Yb,bc:"campaignId",cc:"creativeId",gc:"placementId",dc:"element"};var $b,ac,X;
function bc(a){if(a.origin==="https://chartbeat.com"&&(a=String(a.data),a.indexOf("_cb_hud_version=")===0)){var b=a.substr(16);cc();if(b!=="NONE")b=b.indexOf("HUD2.")===0?b.substr(5):"OLD",a="https://static.chartbeat.com/js/inpage.js",b!=="OLD"&&(a="https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-"+b+".js"),b=t(g)?g:{},b.src=a,a=Qa("script",b),a.setAttribute("type","text/javascript"),b=document.head||document.getElementsByTagName("head")[0],t(g)?g.appendChild(a):b&&b.appendChild(a)}}
function cc(){B(ac);ac=g;Aa("message",bc);X&&X.parentNode&&X.parentNode.removeChild(X);X=g};function dc(){var a=m._sf_async_config&&m._sf_async_config.domain;if(a&&!$b){$b=h;a="https://chartbeat.com/publishing/hud2/versioninfo/?host="+encodeURIComponent(a);v(m,"message",bc);ac=Ia(cc,1E4);var b=t(g)?g:{};b.src=a;a=Qa("iframe",b);a.style.display="none";t(g)?g.appendChild(a):document.body&&document.body.appendChild(a);X=a}}
function ec(a){if(/[\/.]chartbeat\.com$/.test(a.origin)){var b=O.D(h),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),dc(),Aa("message",ec))}};function Y(){"postMessage"in window&&v(m,"message",s(this.Kb,this));T.call(this);kb("_cbq",s(this.ib,this))}ba(Y,T);
Y.prototype.B=function(){Y.S.B.call(this);var a=this.ka;R().u=a;a=this.Ma;R().t=a;this.za=i;lb(this.a);a=m.location;M(this.a,"pingServer","ping.chartbeat.net");M(this.a,"title",document.title);M(this.a,"domain",a.hostname);this.a.path=this.a.path?P(this.a.path):qb(!!this.a.useCanonical);this.ga=na(a.hostname);this.a.domain=na(this.a.domain);this.ub=D(F,"c",this.Qb,this);this.vb=D(F,"r",this.Rb,this);this.Y=i};Y.prototype.rb=function(a){this.za=a};
Y.prototype.qa=function(){this.q.update("_chartbeat4",["t="+this.Ma,"E="+this.F.N,"EE="+this.U.N,"x="+Eb(this),"c="+Math.round((r()-this.ba)/600)/100,"y="+C("Height"),"w="+Ma("Height")].join("&"),60,g,g,1)};var hb="h,p,u,d,g,g0,g1,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,eS,eM,eD,eK,eR,EE,sv,sr".split(",");l=Y.prototype;
l.ja=function(a){this.hb++;var b={};b.g=this.a.uid;b.g0=mb(this.a,"sections");b.g1=mb(this.a,"authors");b.g2=mb(this.a,"zone");b.g3=mb(this.a,"sponsorName");b.g4=mb(this.a,"type");!this.a.noCookies&&this.q.isSupported()?b.n=this.Ob:b.nc=1;b.c=Math.round((r()-this.ba)/600)/100;b.E=this.F.N;b.EE=this.U.N;var c=Eb(this);this.ha=Math.max(this.ha,c);b.x=c;b.m=this.ha;b.y=C("Height");b.o=C("Width");b.w=Ma("Height");b.b=this.Ka>0?this.Ka:"";if(this.Za)b.f=this.Za;b[""]=nb(this.a);b.t=this.Ma;b.V=93;b.tz=
(new Date).getTimezoneOffset();b.sn=this.hb;b.sv=this.Vb;b.sr=this.Ub;c=this.F.Z;b.h=encodeURIComponent(this.a.domain);b.p=encodeURIComponent(this.a.path);b.u=this.ka;b.d=encodeURIComponent(this.ga);b.j=Math.round((this.$+2)*15E3/1E3);b.R=0;b.W=0;b.I=0;var d=b.c*6E4+this.ba;b.eD=G.ea("mousedown",d);b.eM=G.ea("mousemove",d);b.eK=G.ea("keydown",d);b.eR=G.ea("resize",d);b.eS=G.ea("scroll",d);G.Sb();G.tb()?b.W=1:this.a.reading&&+this.a.reading||c>0||b.c<0.09?b.R=1:b.I=1;b.e=c;c=yb(this);if(this.La){this.La=
j;if(c)this.Y=fc(this);b.i=Gb(this);d=this.a.hudTrackable;d!==g&&(b.L=d?"1":"0");this.a.alias&&(b.PA=encodeURIComponent(this.a.alias))}if(c){if(this.Y){if(b.v=encodeURIComponent(this.Y.path),b.K=gc(this.Y),this.Y.Ha>1)b.l1=this.Y.Ha}else b.v=U(this);this.a.virtualReferrer&&(b.vp=1)}else b.r=U(this);c=Ja(b.v);R().v=c;c=Ja(b.r);R().r=c;b.A=this.za?this.za:"";b._c=eb("utm_campaign",this.a.campaignTag);b._m=eb("utm_medium",this.a.mediumTag);b._x=eb("utm_source",this.a.sourceTag);b._y=eb("utm_content",
this.a.contentTag);b._z=eb("utm_term",this.a.termTag);this.a.idSync?(c=[],da(new ca,this.a.idSync,c),c=encodeURIComponent(c.join(""))):c="";b._s=c;b.z=Hb(this);b.C=this.a.mobileApp?1:"";b.KK=a?gc(a):"";a=this.q;c=a.Ra;a.Ra=j;b.l=c?1:"";this.F.Z=0;this.sa(Ca()+"//"+this.a.pingServer+"/ping?"+gb(b))};
l.Kb=function(a){var b=this.a,c=b.playerdomain||this.ga;if(pa(a.origin)===pa(c))if(c=a.data,A(c)&&c.indexOf("cbqpush::")===0)a=c.split("::"),a.length==3&&(a=a.slice(1),a[0].indexOf("_")===0&&this.ib(a));else if(c=="cbdata?"){var c="&u="+Q("u"),d="&t="+Q("t"),e="&v="+Q("v"),f="&r="+Q("r"),b="domain="+encodeURIComponent(b.domain)+"&uid="+encodeURIComponent(b.uid)+"&path="+encodeURIComponent(b.path)+"&title="+Gb(this)+"&referrer="+U(this)+"&internal="+(yb(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.ga)+
c+d+e+f+"&utoken="+this.ka;a.source.postMessage(b,"*")}};l.ib=function(a){a[0]==="_demo"&&this.a._demo?this.a._demo=this.a._demo+"%2C"+a[1]:this.a[a[0]]=a[1];this.$=0};function hc(a){a=a.replace(/-{2,}/g,"-");a=ib(a);a.pathname=P(a.pathname);return a}l.Qb=function(a){ic(this,a,"c")};l.Rb=function(a){ic(this,a,"r")};
function ic(a,b,c){if(a.Na&&r()-a.ba>=a.Fa)a.terminate();else{var d=b.href||"",d=hc(d);if(d.protocol.indexOf("http")===0){var e=d.hostname!==m.location.hostname,d=jb(d),f=Na(b,function(a){return a.id}),n=Tb(b,f),p="";a.a.moduleAttribute&&(p=(p=Ka(b,a.a.moduleAttribute))?p.getAttribute(a.a.moduleAttribute):"",p=p.replace(/::/g,"-").substr(0,40));f?(n&&(n="/"+n),n="*[@id='"+f.id+"']"+n,f=Tb(b)):f=n;n=o(n);f=o(f);b=Jb(b,g,h);c={left:b.x,top:b.y,path:a.a.path,href:d,Va:n,ya:f,Ua:"",Pa:c,Ha:0,Eb:a.a.domain,
Ga:p};a.ja(c);e||a.q.update("_chartbeat5",jc(c),60,j,g,3,function(a){a=a.split(",");return a[2]+","+a[3]})}}}function gc(a){return[a.left,a.top,a.Va,encodeURIComponent(a.Ua),a.Pa,encodeURIComponent(a.href),a.ya,a.Ga].join("::")}function jc(a){var b=encodeURIComponent(a.Ua),b=b.replace(/-/g,"%2D");b.length>512&&(b="");return[a.left,a.top,encodeURIComponent(a.path),encodeURIComponent(a.href),a.Va,b,a.Pa,a.ya,encodeURIComponent(a.Eb),a.Ga].join(",")}
function fc(a){var b=a.q.k("_chartbeat5");if(!b)return i;var c=b.split("::"),b=c.length,d,e=i,f,n=hc(m.location.href),p=jb(n);q(c,function(a,b){var c=a.split(","),n=za(p,decodeURIComponent(c[3]));if(n===0)return d=c,e=b,j;else if(n===i)return h;if(f===g||n<f)f=n,d=c,e=b});if(e===i)return i;c.splice(e,1);a.q.create("_chartbeat5",c.join("::"),60);(a=d[5])?(a=a.replace(/%2D/g,"-"),a=decodeURIComponent(a)):a="";return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),href:decodeURIComponent(d[3]),Va:d[4]||
"",Ua:"",ya:d.length>7?d[7]:"",Pa:d.length>6?d[6]:"c",Ha:b,Ga:d[9]?d[9]:""}}l.terminate=function(){E(F,this.ub);E(F,this.vb);Y.S.terminate.call(this)};if(!m.pSUPERFLY){var kc=new Y,Z={};m.pSUPERFLY=Z;var lc=m.pSUPERFLY_mab,$=m.pSUPERFLY_pub,mc=[];lc&&mc.push(lc);if($)mc.push($),$.addEngagedAdFilter&&(Z.addEngagedAdFilter=$.addEngagedAdFilter),$.refreshAd&&(Z.refreshAd=$.refreshAd),$.registerGptSlot&&(Z.registerGptSlot=$.registerGptSlot),kb("_cba",function(a){a()});Z.virtualPage=function(a,b){if(!I){var c=m._sf_async_config;c.virtualReferrer=Ca()+"//"+c.domain+c.path;c.path=P(a);b&&(c.title=b);kc.la();q(mc,function(a){a.evps()});kc.lb();q(mc,function(a){a.svps()})}};
Z.activity=s(kc.rb,kc);Bb(kc);var nc=O.D(h);if(nc)if(nc.getItem("_cb_ip")){var oc=m.location;(!/^(.+[.])?chartbeat\.com$/.test(oc.hostname)?0:/^\/publishing\/(overlay|hud|mab)\//.test(oc.pathname))||dc()}else v(m,"message",ec)};})();
