// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;var l=t,c=function(r,e,t){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(i.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?l:c;var p=function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})};var b=function(r){return r!=r},v=Number.NEGATIVE_INFINITY;var y=function(r){return 0===r&&1/r===v};function d(r,e,t,n,o){var a,u,i,f,l;if(r<=0)return NaN;for(u=t<0?(1-r)*t:0,i=o<0?(1-r)*o:0,l=0;l<r&&0!==n[i];l++)u+=t,i+=o;if(l===r)return NaN;if(a=e[u],b(a))return a;for(l+=1;l<r;l++)if(u+=t,!n[i+=o]){if(f=e[u],b(f))return f;(f<a||f===a&&y(f))&&(a=f)}return a}function s(r,e,t,n,o,a,u){var i,f,l,c,_;if(r<=0)return NaN;for(f=n,l=u,_=0;_<r&&0!==o[l];_++)f+=t,l+=a;if(_===r)return NaN;if(i=e[f],b(i))return i;for(_+=1;_<r;_++)if(f+=t,!o[l+=a]){if(c=e[f],b(c))return c;(c<i||c===i&&y(c))&&(i=c)}return i}p(d,"ndarray",s);export{d as default,s as ndarray};
//# sourceMappingURL=mod.js.map
