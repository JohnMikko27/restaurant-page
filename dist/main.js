(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'html,\nbody {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\nheader {\n  height: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5rem;\n  background-color: rgb(198, 46, 36);\n}\n\nnav {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  height: 3rem;\n  font-size: 1.5rem;\n}\n\nnav > div {\n  border: 2px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: pink;\n}\n\nnav > div:hover {\n  cursor: pointer;\n}\n\nnav > div > a {\n    color: black;\n    text-decoration: none;\n}\n\nnav > div > a:hover {\n    color: red;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n#content > div {\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#content > div:first-child {\n  font-size: 2rem;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n#content > div > img {\n  width: 25rem;\n  height: auto;\n}\n\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"e630e418d59884a889bb.jpeg";(()=>{const e=document.querySelector("body"),n=document.createElement("header"),t=document.createElement("div");t.textContent="THE MASTER OF DISASTER'S FOOD",n.appendChild(t);const r=document.createElement("nav"),o=(()=>{const e=document.createElement("div"),n=document.createElement("a");return n.textContent="Home",n.href="https://www.jollibeefoods.com/",e.appendChild(n),e})(),a=(()=>{const e=document.createElement("div"),n=document.createElement("a");return n.textContent="About",n.href="https://www.jollibeefoods.com/",e.appendChild(n),e})(),i=(()=>{const e=document.createElement("div"),n=document.createElement("a");return n.textContent="Contact",n.href="https://www.jollibeefoods.com/",e.appendChild(n),e})();r.appendChild(o),r.appendChild(a),r.appendChild(i);const c=document.querySelector("#content"),s=document.createElement("div"),d=document.createElement("div"),l=document.createElement("img");s.textContent="This is one of The Master of Disaster's favorite foods! Rejoice and be glad as you now know!",l.src=h,d.appendChild(l),c.appendChild(s),c.appendChild(d),e.appendChild(n),e.appendChild(r),e.appendChild(c)})()})()})();