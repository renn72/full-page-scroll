(this["webpackJsonpscroll-scss"]=this["webpackJsonpscroll-scss"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),s=t(5),l=t.n(s),r=(t(11),t(4)),a=t(3),i=t(6),u=(t(12),t(0)),d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"wheel",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:600,s=Object(c.useState)(!1),l=Object(a.a)(s,2),r=l[0],i=l[1],u=Object(c.useCallback)((function(e){r||(n(e),i(!0),setTimeout((function(){return i(!1)}),o))}),[o,n,r]);Object(c.useEffect)((function(){return e.current&&window.addEventListener(t,u,!1),function(){var e;null===(e=window)||void 0===e||e.removeEventListener(t,u)}}),[u,e,t])};var j=function(){var e=Object(c.useState)(0),n=Object(a.a)(e,2),t=n[0],o=n[1],s=Object(c.useRef)(null);console.log("main loop "+t);var l=Object(i.useSwipeable)({onSwiped:function(e){var n=e.dir;"Up"===n?t<2&&(console.log("down"),o((function(e){return e+1}))):"Down"===n&&t>0&&(console.log("up"),o((function(e){return e-1})))},preventDefaultTouchmoveEvent:!0,trackMouse:!0});return d(s,(function(e){console.log("scroll"),console.log(e),e.wheelDelta<0?t<2&&(console.log("down"),o((function(e){return e+1}))):t>0&&(console.log("up"),o((function(e){return e-1})))}),"wheel"),d(s,(function(e){var n=e.key;"ArrowDown"===n||"PageDown"===n?t<2&&(console.log("down"),o((function(e){return e+1}))):"ArrowUp"!==n&&"PageUp"!==n||t>0&&(console.log("up"),o((function(e){return e-1})))}),"keydown"),Object(u.jsxs)("div",Object(r.a)(Object(r.a)({},l),{},{ref:s,className:"container",children:[Object(u.jsx)("section",{className:0===t?"background up-scroll":"background down-scroll",children:Object(u.jsxs)("div",{className:"content-wrapper",children:[Object(u.jsx)("p",{className:"content-title",children:"I'm a hipster cafe"}),Object(u.jsx)("p",{className:"content-subtitle",children:"Scroll down and up to see the effect!"})]})}),Object(u.jsx)("section",{className:1===t?"background up-scroll":"background down-scroll",children:Object(u.jsxs)("div",{className:"content-wrapper",children:[Object(u.jsx)("p",{className:"content-title",children:"I also do catering"}),Object(u.jsx)("p",{className:"content-subtitle",children:"yummy, yummy"})]})}),Object(u.jsx)("section",{className:2===t?"background up-scroll":"background down-scroll",children:Object(u.jsxs)("div",{className:"content-wrapper",children:[Object(u.jsx)("p",{className:"content-title",children:"come and give me your money"}),Object(u.jsx)("p",{className:"content-subtitle",children:"please, I am desperate"})]})})]}))},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,s=n.getLCP,l=n.getTTFB;t(e),c(e),o(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.61bbd6ce.chunk.js.map