(function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)c=i[p],o[c]&&f.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/chemtrails-tracker/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"4b63":function(e,t,n){"use strict";var r=n("7350"),o=n.n(r);o.a},5490:function(e,t,n){"use strict";var r=n("bdf3"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r,o,a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav",{attrs:{msg:"Welcome to Chemtrails Tracker!"}}),n("Map")],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("h1",[e._v(e._s(e.msg))])])},u=[],s={name:"Nav",props:{msg:String}},p=s,f=(n("4b63"),n("2877")),d=Object(f["a"])(p,l,u,!1,null,"1d81301d",null),A=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"})},g=[],v=n("cebc"),w=(n("96cf"),n("3b8d")),y=n("967a"),h=n.n(y),b=n("795b"),k=n.n(b),x="gmapsCallback",W=!!window.google,P=new k.a(function(e,t){r=e,o=t});function j(){if(W)return P;W=!0,window[x]=function(){return r(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAMVbh4uSxAyRGE1rRAmHCeWIOUCkUqY7w","&callback=").concat(x),e.onerror=o,document.querySelector("head").appendChild(e),P}var O=n("9313"),S=n.n(O),C=[{callsign:"DLH722 ",origin_country:"Germany",position:{lng:22.9349,lat:52.7172},true_track:58.05},{callsign:"AUH07 ",origin_country:"United Arab Emirates",position:{lng:21.1932,lat:51.8919},true_track:4.83},{callsign:"ENT7362 ",origin_country:"Poland",position:{lng:20.9635,lat:52.1743},true_track:36},{callsign:"LOT2MF ",origin_country:"Poland",position:{lng:19.7079,lat:52.3782},true_track:95.25},{callsign:"LOT3GP ",origin_country:"Poland",position:{lng:20.9952,lat:52.1337},true_track:331.98}],H={name:"Map",mounted:function(){var e=Object(w["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:t=e.sent,n=new t.maps.Geocoder,r=new t.maps.Map(this.$el),o="Austria",n.geocode({address:o},function(e,n){if(n!==t.maps.GeocoderStatus.OK||!e[0])throw new Error(n);r.setCenter(e[0].geometry.location),r.fitBounds(e[0].geometry.viewport)}),a=function(e){r.setZoom(13),r.setCenter(e.getPosition())},c=C.map(function(e){var n=new t.maps.Marker(Object(v["a"])({},e,{map:r,icon:S.a}));return n.addListener("click",function(){return a(n)}),n}),new h.a(r,c,{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.error(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));function t(){return e.apply(this,arguments)}return t}()},E=H,L=(n("5490"),Object(f["a"])(E,m,g,!1,null,null,null)),M=L.exports,V={name:"app",components:{Nav:A,Map:M}},I=V,R=(n("034f"),Object(f["a"])(I,c,i,!1,null,null,null)),U=R.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(U)}}).$mount("#app")},"64a9":function(e,t,n){},7350:function(e,t,n){},9313:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA4QAAAOEBcBgcLgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUkSURBVFiF7ZddbBRVFMd/987szHaXFkr5ahf5lFq+VlAWKFYBQYn6JBoTH3zQBBMfTCmi8QFs0AdN/AA0EgW/HozRhIQgyEdCiUEDiEi0Fiylgm2B0o/FtaXL7szce30oJSAtNEStD/4f55w55zfn3DP3XmGMYSAlBzT7/wD/BQD7305492vkOy4JoXlES4rFPzkFS94gqgUzFSRyHMqA0oxPYY9dQPPfVoFZGwnldRIXkoRjMc+WlGmLsfkR0lOLEJ4y0cO/dacVAuNIY/xAvH5TFVizBvnNIEqQJCxJqWtx90Wf4qiLVzIKHY8RnThMi7FDA35qgk37bX5Pdy+3XNcwf4LPjlonkIpYvyqwcB3jpCZhSebmhJifGcLUsAW3DsePjyZaPMLI8QWKaEjZnqfwA0VNs81be1zauyTiUpyZsYDHZmTZUu1iS/btrKD1GoDF6xmJIoEgEXVY4AXMdAThCSO5GB9NpGQU9sQCxdCIwvNUOOtrlNIYDy54cLzV4sPvorR0SvIjxji2QWkhnpqdoWyCz4+nbWpbrS5P8R6AvXAts6RmcTTM/ECTkIYhsaGkp8dwpxThFI8wjMpV+L4Keb7C8xUmgFTH1eAnk5IPDuZw5g/J8KjR8UIla1os8nO0WH1fmvyIJuMLTiUlXb4QbogvAWxXssE3JOIxeGIujMnXaKVys77C8xSB0pxP9d2eppRk4/4wjSmLoTlGPzTZkzXNNtXNFmXjfbGsNHPZt6VTUJ+0Awxf7HiWLICdV0RpspEnq0/zxro9Ku+x27Ni0nB1w3XR3CF5/0CYU0mLwWGjHyjxZCSE3PFLSPtayIr5F5kRC65651yH5ES75WvBpp5nl6fgwXdwXamfD4xcNWm4ch6NZ8SYfH1N4rYLko0HwtS1WeS6RpeO9eXowZqaczbfN9kU5mlW3Z8m6lw9XR0ZwbYah72/hs7uLhexawB6tHADg4bA6qyiYmaRH1oa9xiZq0mlJe8dcKltsYk4Rs8Z48tx+RqtYVedo1s6pVxS4vH4HdleK3aizeLTw26mIWW9uqeCl/sE6NHidynIlbyS9c3ThYONbEhKEQ4ZPfuWQE4s6G5RW5dk93FHC2HkygUZikcEvcYyBvbVh/jkh7CvFZOqnqPhhgA9WrSWmAVHpxUGg++8oqc/nLGpPmszvkDx4uI0rtV3jPYuyZZqh0ONocM7y0lcabvhblhVwRlp8W0k1A2qDWz+2dXVZ22W3p6lcsn1kwO0dgiOt9oXPM2Gv9r6tR37ioPtXdIDOHLGpiMjZMQxxAt7L/mVCjQ0nLdIpoWT9dl8UwDGUJ1MywxAw3mpCyIax0JX7ory/v4w12tiW6ekrt3SlmTbty/QeXMAkupURuQYAx1ZIaeMVDw8LSvnjfU52Bgyy74YxLkLvYdq6ZTUtloXfc3G3uz9Avh6OQ0Yo35qtkEIc+uw7ilIpiVaG+Er0bZqezTYftRBX1GOjC+ob7fwFN49Hey5aQADxpbUHWuxyHONOZ+WfPZjWNW1WcogyqtWMMKHOVtrnPpVX0WDppS89PWCE21W1iA+rqzk2r9afwEAlBGHMoFAgNx6zDHZgFpLU7R3BW8DVC3nSCYlJjd3yjWVuyL+50dcTv8uqU9KAsNHfcXt94Hk3jdZIwQvCYEyhpVVK1jXp+96bnPgMymYro05uatclPTl2/8jmc1+FPWW4q7dK2m9nuveco4LmLVoLc8YJWqv5/uPHkr7owG/F/wPMOAAfwKhwkcodKKz1gAAAABJRU5ErkJggg=="},bdf3:function(e,t,n){}});
//# sourceMappingURL=app.fc3cf9fc.js.map