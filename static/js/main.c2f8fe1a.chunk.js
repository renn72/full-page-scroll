(this["webpackJsonpscroll-scss"]=this["webpackJsonpscroll-scss"]||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),o=t(4),l=t.n(o),r=(t(9),t(3)),a=(t(10),t(0));var i=function(){var e=Object(c.useState)(0),n=Object(r.a)(e,2),t=n[0],s=n[1],o=Object(c.useRef)(null);return console.log("main loop "+t),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"wheel",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600,o=Object(c.useState)(!1),l=Object(r.a)(o,2),a=l[0],i=l[1],u=Object(c.useCallback)((function(e){a||(n(e),i(!0),setTimeout((function(){return i(!1)}),s))}),[s,e,n]);Object(c.useEffect)((function(){var n=e.current;return n&&n.addEventListener(t,u),function(){null===n||void 0===n||n.removeEventListener(t,u)}}),[u,e,t])}(o,(function(e){console.log("scroll"),console.log(e),e.wheelDelta<0?t<2&&(console.log("down"),s((function(e){return e+1}))):t>0&&(console.log("up"),s((function(e){return e-1})))})),Object(a.jsxs)("div",{ref:o,className:"container",children:[Object(a.jsx)("section",{className:0===t?"background up-scroll":"background down-scroll",children:Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsx)("p",{className:"content-title",children:"I'm a hipster cafe"}),Object(a.jsx)("p",{className:"content-subtitle",children:"Scroll down and up to see the effect!"})]})}),Object(a.jsx)("section",{className:1===t?"background up-scroll":"background down-scroll",children:Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsx)("p",{className:"content-title",children:"I also do catering"}),Object(a.jsx)("p",{className:"content-subtitle",children:"yummy, yummy"})]})}),Object(a.jsx)("section",{className:2===t?"background up-scroll":"background down-scroll",children:Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsx)("p",{className:"content-title",children:"come and give me your money"}),Object(a.jsx)("p",{className:"content-subtitle",children:"please, I am desperate"})]})})]})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,o=n.getLCP,l=n.getTTFB;t(e),c(e),s(e),o(e),l(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(i,{})}),document.getElementById("root")),u()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.c2f8fe1a.chunk.js.map