!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}System.register([],(function(n,e){"use strict";return{execute:function(){n("t",_);var e,o,i=0,r=0,u=0,c=0,f=0,l=0,a="object"===("undefined"==typeof performance?"undefined":t(performance))&&performance.now?performance:Date,s="object"===("undefined"==typeof window?"undefined":t(window))&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function m(){return f||(s(y),f=a.now()+l)}function y(){f=0}function p(){this._call=this._time=this._next=null}function _(t,n,e){var o=new p;return o.restart(t,n,e),o}function w(){f=(c=a.now())+l,i=r=0;try{!function(){m(),++i;for(var t,n=e;n;)(t=f-n._time)>=0&&n._call.call(null,t),n=n._next;--i}()}finally{i=0,function(){var t,n,i=e,r=1/0;for(;i;)i._call?(r>i._time&&(r=i._time),t=i,i=i._next):(n=i._next,i._next=null,i=t?t._next=n:e=n);o=t,h(r)}(),f=0}}function d(){var t=a.now(),n=t-c;n>1e3&&(l-=n,c=t)}function h(t){i||(r&&(r=clearTimeout(r)),t-f>24?(t<1/0&&(r=setTimeout(w,t-a.now()-l)),u&&(u=clearInterval(u))):(u||(c=a.now(),u=setInterval(d,1e3)),i=1,s(w)))}p.prototype=_.prototype={constructor:p,restart:function(t,n,i){if("function"!=typeof t)throw new TypeError("callback is not a function");i=(null==i?m():+i)+(null==n?0:+n),this._next||o===this||(o?o._next=this:e=this,o=this),this._call=t,this._time=i,h()},stop:function(){this._call&&(this._call=null,this._time=1/0,h())}}}}}))}();