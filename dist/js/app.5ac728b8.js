(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chemtrails-tracker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"4b63":function(e,t,n){"use strict";var r=n("7350"),o=n.n(r);o.a},5490:function(e,t,n){"use strict";var r=n("bdf3"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r,o,a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav",{attrs:{msg:"Welcome to Chemtrails Tracker!"}}),n("Map")],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("h1",[e._v(e._s(e.msg))])])},s=[],l={name:"Nav",props:{msg:String}},p=l,f=(n("4b63"),n("2877")),d=Object(f["a"])(p,u,s,!1,null,"1d81301d",null),m=d.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"})},g=[],b=n("cebc"),h=(n("96cf"),n("3b8d")),w=n("967a"),y=n.n(w),O=n("795b"),j=n.n(O),k="gmapsCallback",x=!!window.google,_=new j.a(function(e,t){r=e,o=t});function M(){if(x)return _;x=!0,window[k]=function(){return r(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAMVbh4uSxAyRGE1rRAmHCeWIOUCkUqY7w","&callback=").concat(k),e.onerror=o,document.querySelector("head").appendChild(e),_}var C=[{position:{lat:48.16091,lng:16.38333}},{position:{lat:48.17427,lng:16.32962}},{position:{lat:48.14614,lng:16.29703}},{position:{lat:48.13583,lng:16.19446}},{position:{lat:48.306091,lng:14.28644}},{position:{lat:47.50304,lng:9.74707}}],S={name:"Map",mounted:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M();case 3:t=e.sent,n=new t.maps.Geocoder,r=new t.maps.Map(this.$el),n.geocode({address:"Austria"},function(e,t){if("OK"!==t||!e[0])throw new Error(t);r.setCenter(e[0].geometry.location),r.fitBounds(e[0].geometry.viewport)}),o=function(e){r.setZoom(13),r.setCenter(e.getPosition())},a=C.map(function(e){var n=new t.maps.Marker(Object(b["a"])({},e,{map:r}));return n.addListener("click",function(){return o(n)}),n}),new y.a(r,a,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));function t(){return e.apply(this,arguments)}return t}()},P=S,E=(n("5490"),Object(f["a"])(P,v,g,!1,null,null,null)),A=E.exports,$={name:"app",components:{Nav:m,Map:A}},R=$,T=(n("034f"),Object(f["a"])(R,i,c,!1,null,null,null)),N=T.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(N)}}).$mount("#app")},"64a9":function(e,t,n){},7350:function(e,t,n){},bdf3:function(e,t,n){}});
//# sourceMappingURL=app.5ac728b8.js.map