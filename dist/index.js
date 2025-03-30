"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(F,x){
var p=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(r,e,u,f,t,o,m){var a,v,s,n,i;if(r<=0)return NaN;for(v=f,s=m,i=0;i<r&&t[s]!==0;i++)v+=u,s+=o;if(i===r)return NaN;if(a=e[v],p(a))return a;for(i+=1,i;i<r;i++)if(v+=u,s+=o,!t[s]){if(n=e[v],p(n))return n;(n<a||n===a&&g(n))&&(a=n)}return a}x.exports=E
});var k=q(function(G,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),O=c();function Z(r,e,u,f,t){var o=y(r,u),m=y(r,t);return O(r,e,u,o,f,t,m)}j.exports=Z
});var _=q(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),w=c();h(l,"ndarray",w);R.exports=l
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),d,b=A(z(__dirname,"./native.js"));B(b)?d=C:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
