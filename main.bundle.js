(()=>{"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?e(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.getElementById("app").innerHTML="Redux";var r=function(e,n,r){var c=new Set([]),u={getState:function(){return n},dispatch:function(e){n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{counter:0},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"inc":return t(t({},e),{},{counter:e.counter+1});case"dec":return t(t({},e),{},{counter:e.counter-1});case"plus":return t(t({},e),{},{counter:e.counter+n.payload});case"reset":return t(t({},e),{},{counter:0});default:return e}}(n,e),c.forEach((function(e){e()}))},subscribe:function(e){return c.add(e),function(){c.delete(e)}}};return u}(0,void 0);document.getElementById("app").innerHTML='\n  <h1>Counter: 0</h1>\n  <button class="inc">inc</button>\n  <button class="dec">dec</button>\n  <button class="autoSum">auto Sum</button>\n  <br />\n  <input type="number" value="3" /><button class="plus">plus</button>\n  <br />\n  <button class="reset">reset</button>\n';var c=document.querySelector(".inc"),u=document.querySelector(".dec"),o=document.querySelector(".plus"),i=document.querySelector(".reset"),a=document.querySelector('input[type="number"]'),l=document.querySelector(".autoSum"),s=document.querySelector("h1"),d=null;c.addEventListener("click",(function(){return r.dispatch({type:"inc"})})),i.addEventListener("click",(function(){r.dispatch({type:"reset"}),d&&(clearInterval(d),d=null)})),l.addEventListener("click",(function(){d?(clearInterval(d),d=null):d=setInterval((function(){return r.dispatch({type:"inc"})}),1e3)})),u.addEventListener("click",(function(){return r.dispatch({type:"dec"})})),o.addEventListener("click",(function(){return r.dispatch({type:"plus",payload:Number(a.value)})})),r.subscribe((function(){var e;return s.innerHTML="Counter: ".concat(null===(e=r.getState())||void 0===e?void 0:e.counter)}))})();