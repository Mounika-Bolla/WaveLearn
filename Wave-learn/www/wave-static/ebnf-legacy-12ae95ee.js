System.register([],(function(e,n){"use strict";return{execute:function(){e("default",(function(e){var n=e.COMMENT(/\(\*/,/\*\)/),a={begin:/=/,end:/[.;]/,contains:[n,{className:"meta",begin:/\?.*\?/},{className:"string",variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"`",end:"`"}]}]};return{name:"Extended Backus-Naur Form",illegal:/\S/,contains:[n,{className:"attribute",begin:/^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/},a]}}))}}}));