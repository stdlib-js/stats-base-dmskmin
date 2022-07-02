// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},_=r()?l:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=function(e){return e!=e},b=Number.NEGATIVE_INFINITY,s=function(e){return 0===e&&1/e===b};function y(e,r,t,n,o){var i,u,a,f,l;if(e<=0)return NaN;for(u=t<0?(1-e)*t:0,a=o<0?(1-e)*o:0,l=0;l<e&&0!==n[a];l++)u+=t,a+=o;if(l===e)return NaN;if(i=r[u],d(i))return i;for(l+=1;l<e;l++)if(u+=t,!n[a+=o]){if(f=r[u],d(f))return f;(f<i||f===i&&s(f))&&(i=f)}return i}return p(y,"ndarray",(function(e,r,t,n,o,i,u){var a,f,l,c,_;if(e<=0)return NaN;for(f=n,l=u,_=0;_<e&&0!==o[l];_++)f+=t,l+=i;if(_===e)return NaN;if(a=r[f],d(a))return a;for(_+=1;_<e;_++)if(f+=t,!o[l+=i]){if(c=r[f],d(c))return c;(c<a||c===a&&s(c))&&(a=c)}return a})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dmskmin=r();
//# sourceMappingURL=index.js.map
