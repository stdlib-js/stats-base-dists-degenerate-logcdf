"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(g,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/constants-float64-ninf/dist');function q(e,r){return i(e)||i(r)?NaN:e<r?N:0}a.exports=q
});var s=n(function(I,o){
var v=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/constants-float64-ninf/dist');function d(e){if(c(e))return v(NaN);return r;function r(t){return c(t)?NaN:t<e?y:0}}o.exports=d
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=u(),p=s();l(f,"factory",p);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
