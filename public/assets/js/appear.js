let appear=function(){"use strict";let e=null,t=0,n={};return window.addEventListener("scroll",(function(){let i=window.scrollY||window.pageYOffset;null!=e&&(n.velocity=i-e,n.delta=n.velocity>=0?n.velocity:-1*n.velocity),e=i,t&&clearTimeout(t),t=setTimeout((function(){e=null}),30)}),!1),function(e){return function(e){var t,i,o,r,a=!1,d=[],u=[],c=0,l=0,p={};function s(){var e,t;n.delta<p.delta.speed&&(o||(o=!0,w(),setTimeout((function(){o=!1}),p.delta.timeout))),(e=function(){w()},t=p.debounce,function(){var n=this,o=arguments;clearTimeout(i),i=setTimeout((function(){e.apply(n,o)}),t)})()}function m(){w(),window.addEventListener("scroll",s,!1),window.addEventListener("resize",s,!1)}function f(){window.removeEventListener("scroll",s,!1),window.removeEventListener("resize",s,!1)}function w(){r||(d.forEach((function(e,t){e&&function(e,t){let n=e.getBoundingClientRect();return n.top+n.height>=0&&n.left+n.width>=0&&n.bottom-n.height<=(window.innerHeight||document.documentElement.clientHeight)+t&&n.right-n.width<=(window.innerWidth||document.documentElement.clientWidth)+t}(e,p.bounds)?u[t]&&(u[t]=!1,c++,p.appear&&p.appear(e),p.disappear||p.reappear||(d[t]=null)):(!1===u[t]&&(p.disappear&&p.disappear(e),l++,p.reappear||(d[t]=null)),u[t]=!0)})),p.reappear||p.appear&&(!p.appear||c!==t)||p.disappear&&(!p.disappear||l!==t)||(r=!0,f(),p.done&&p.done()))}function v(){var e;if(!a&&(a=!0,p.init&&p.init(),e="function"==typeof p.elements?p.elements():p.elements)){t=e.length;for(var n=0;n<t;n+=1)d.push(e[n]),u.push(!0);m()}}return function(e){p={init:(e=e||{}).init,elements:e.elements,appear:e.appear,disappear:e.disappear,done:e.done,reappear:e.reappear,bounds:e.bounds||0,debounce:e.debounce||50,delta:{speed:e.deltaSpeed||50,timeout:e.deltaTimeout||500}},window.addEventListener("DOMContentLoaded",v,!1);var t=!1;Function("/*@cc_on return document.documentMode===10@*/")()&&(t=!0);var n="complete"===document.readyState||"loaded"===document.readyState;return t?n&&v():(n||"interactive"===document.readyState)&&v(),{trigger:function(){w()},pause:function(){f()},resume:function(){m()},destroy:function(){d=[],i&&clearTimeout(i),f()}}}}()(e)}}();