(this["webpackJsonpmars-rover-react"]=this["webpackJsonpmars-rover-react"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),a=n(6),o=n.n(a),c=(n(12),n(13),n(4)),s=n(3),j=n(1),u=function(t,e){var n=Object(i.useState)(Object(j.a)({},e)),r=Object(c.a)(n,2),a=r[0],o=r[1];return{handleSubmit:function(e){e&&e.preventDefault(),t(a)},handleInputChange:function(t){var e;t.persist(),e=!parseInt(t.target.value)&&0!==+t.target.value||""===t.target.value?t.target.value:+t.target.value,o((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(s.a)({},t.target.name,e))}))},inputs:a}},b=n(0);function O(t){var e=t.callbackFn,n=u(e,{xAxis:4,yAxis:4,orientation:"N",xPosition:0,yPosition:0,directions:"MM"}),i=n.inputs,r=n.handleInputChange,a=n.handleSubmit;return Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsxs)("label",{children:["X Axis:",Object(b.jsx)("input",{type:"text",pattern:"[0-9]*",name:"xAxis",onChange:r,value:i.xAxis})]}),Object(b.jsxs)("label",{children:["Y Axis:",Object(b.jsx)("input",{type:"text",pattern:"[0-9]*",name:"yAxis",onChange:r,value:i.yAxis})]}),Object(b.jsxs)("label",{children:["Orientation:",Object(b.jsx)("input",{type:"text",name:"orientation",onChange:r,value:i.orientation})]}),Object(b.jsxs)("label",{children:["Starting X position:",Object(b.jsx)("input",{type:"text",pattern:"[0-9]*",name:"xPosition",onChange:r,value:i.xPosition})]}),Object(b.jsxs)("label",{children:["Starting Y position:",Object(b.jsx)("input",{type:"text",pattern:"[0-9]*",name:"yPosition",onChange:r,value:i.yPosition})]}),Object(b.jsxs)("label",{children:["Directions:",Object(b.jsx)("input",{type:"text",name:"directions",onChange:r,value:i.directions})]}),Object(b.jsx)("button",{type:"submit",children:"Start"})]})}function l(t){var e=x(t);return Object(j.a)(Object(j.a)({},e),{},{directions:t.directions})}function x(t){if(""===t.directions)return t;var e=t.directions.charAt(0),n=Object(j.a)(Object(j.a)({},t),{},{directions:t.directions.substring(1)});return(n="M"===e?function(t){if("E"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{xPosition:t.xPosition+1});if("S"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{yPosition:t.yPosition-1});if("W"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{xPosition:t.xPosition-1});return Object(j.a)(Object(j.a)({},t),{},{yPosition:t.yPosition+1})}(n):"L"===e?function(t){if("W"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"S"});if("S"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"E"});if("E"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"N"});return Object(j.a)(Object(j.a)({},t),{},{orientation:"W"})}(n):function(t){if("E"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"S"});if("S"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"W"});if("W"===t.orientation)return Object(j.a)(Object(j.a)({},t),{},{orientation:"N"});return Object(j.a)(Object(j.a)({},t),{},{orientation:"E"})}(n)).xPosition>n.xAxis||n.xPosition<0||n.yPosition>n.yAxis||n.yPosition<0?Object(j.a)(Object(j.a)({},t),{},{crashed:!0}):x(n)}n(15);var d=n(7),h=n.n(d);function f(t){var e=t.roverResults,n=Array(e.yAxis+1).fill(Array(e.xAxis+1).fill(null));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Danesh"}),Object(b.jsx)("div",{className:"container",children:n.map((function(t,n){return Object(b.jsx)("div",{className:"row",children:t.map((function(t,i){return function(t,n){var i=!1;return e.xPosition===n&&e.yPosition===t&&(i=!0),Object(b.jsxs)("div",{className:h()({square:!0,roverPosition:i,crashed:e.crashed}),children:[Object(b.jsxs)("p",{children:["x: ",n,", y: ",t]}),i&&Object(b.jsx)("p",{children:e.orientation})]},"square-".concat(n,"-").concat(t))}(n,i)}))},"row-".concat(n))}))})]})}function p(){var t=Object(i.useState)(),e=Object(c.a)(t,2),n=e[0],r=e[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"MARS ROVER ADVENTURE"}),Object(b.jsx)(O,{callbackFn:function(t){var e=l(t);r(e)}}),n&&Object(b.jsx)(f,{roverResults:n})]})}var v=function(){return Object(b.jsx)(p,{})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),i(t),r(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.18e3a036.chunk.js.map