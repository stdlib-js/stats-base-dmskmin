"use strict";var s=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var x=s(function(D,l){
var p=require('@stdlib/math-base-assert-is-nan/dist'),_=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(i,a,f,q,o){var u,v,r,n,e;if(i<=0)return NaN;for(f<0?v=(1-i)*f:v=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&q[r]!==0;e++)v+=f,r+=o;if(e===i)return NaN;if(u=a[v],p(u))return u;for(e+=1,e;e<i;e++)if(v+=f,r+=o,!q[r]){if(n=a[v],p(n))return n;(n<u||n===u&&_(n))&&(u=n)}return u}l.exports=E
});var b=s(function(F,j){
var y=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-negative-zero/dist');function d(i,a,f,q,o,u,v){var r,n,e,m,t;if(i<=0)return NaN;for(n=q,e=v,t=0;t<i&&o[e]!==0;t++)n+=f,e+=u;if(t===i)return NaN;if(r=a[n],y(r))return r;for(t+=1,t;t<i;t++)if(n+=f,e+=u,!o[e]){if(m=a[n],y(m))return m;(m<r||m===r&&O(m))&&(r=m)}return r}j.exports=d
});var R=s(function(G,N){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),k=b();h(g,"ndarray",k);N.exports=g
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,Z=z(w(__dirname,"./native.js"));A(Z)?c=B:c=Z;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
