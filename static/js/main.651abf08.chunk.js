(this.webpackJsonptextutiles=this.webpackJsonptextutiles||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),l=c(4),s=c.n(l),r=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("light"===e.mode?"light":"dark"," bg-").concat("light"===e.mode?"light":"dark"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",a:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-2"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleBluMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",style:{cursor:"pointer"}}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{cursor:"pointer"},children:"light"===e.mode?"Enable Blue Dark Mode":"Enable Light Mode"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-2"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",style:{cursor:"pointer"}}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",style:{cursor:"pointer"},children:"light"===e.mode?"Enable Dark Mode":"Enable Light Mode"})]})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],l=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3 my-2",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){l(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"10"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toUpperCase();l(t),e.alert(" Text transform to Upper Case!","success")},children:"Convert to UPPERCASE"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();l(t),e.alert(" Text transform to Lower Case!","success")},children:"Convert to lowercase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){if(n.length>0){for(var t=n.toLowerCase().split(". "),c=0;c<t.length;c++)t[c]=t[c][0].toUpperCase()+t[c].slice(1);l(t.join(". "))}e.alert(" Text transform to Sentance Case!","success")},children:"Convert to Sentence case"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.alert(" Text Copied!","success")},children:"Copy Text"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){l(""),e.alert(" Text Section is Cleared!","success")},children:"Clear"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h3",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[" "," "===n.charAt(n.length-1)||""===n.charAt(n.length-1)?n.split(" ").length-1:n.split(" ").length," Words and ",n.length," Characters "]}),Object(o.jsxs)("p",{children:[" Avg. Time to Read this text : ",n.length>0?.008*n.split(" ").length:0," Minutes "]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsxs)("p",{children:[" ",n.length>0?n:"Enter something in the Text Box to preview it here"," "]})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ)}),e.alert.msg]})}i.defaultProps={title:"Set Title here",second:"About Text here"};var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],l=Object(a.useState)(null),s=Object(r.a)(l,2),h=s[0],u=s[1],m=function(e,t){u({msg:e,typ:t}),setTimeout((function(){u(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtiles",second:"About Us",mode:c,toggleMode:function(){"dark"===c?(n("light"),document.body.style.backgroundColor="white",m(" Light Mode has been Enabled!","success")):(n("dark"),document.body.style.backgroundColor="rgb(62 62 80)",m(" Dark Mode has been Enabled!","success"))},toggleBluMode:function(){"blue"===c?(n("light"),document.body.style.backgroundColor="white",m(" Light Mode has been Enabled!","success")):(n("blue"),document.body.style.backgroundColor="#000064",m(" Dark Mode has been Enabled!","success"))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter your Text here to Analize",mode:c,alert:m})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.651abf08.chunk.js.map