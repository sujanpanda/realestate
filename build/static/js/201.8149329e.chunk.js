"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[201],{3201:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(1413),s=n(885),a=n(2791),i=n(1786),c=n(4569),o=n.n(c),u=n(1447),l=n(9730),m=n(184);function d(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],c=t[1],d=(0,a.useState)(""),f=(0,s.Z)(d,2),h=f[0],p=f[1],j=(0,a.useState)(""),v=(0,s.Z)(j,2),x=v[0],g=v[1],b=(0,a.useState)(""),N=(0,s.Z)(b,2),Z=N[0],y=N[1],S=(0,a.useState)({name:"",email:"",subject:"",message:""}),C=(0,s.Z)(S,2),_=C[0],w=C[1],q=(0,a.useState)(!1),O=(0,s.Z)(q,2),P=O[0],D=O[1],k=(0,a.useState)(!1),B=(0,s.Z)(k,2),R=B[0],F=B[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("section",{className:"page-top-section set-bg",style:{backgroundImage:"url('/img/page-top-bg.jpg')"},children:(0,m.jsx)("div",{className:"page-top-warp",children:(0,m.jsx)(i.Z,{})})}),(0,m.jsx)("section",{className:"contact-section",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-lg-5",children:[(0,m.jsx)("div",{className:"section-title text-left",children:(0,m.jsx)("h2",{children:"Get in touch"})}),(0,m.jsx)("div",{className:"contact-text",children:(0,m.jsx)("p",{children:"Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna."})})]}),(0,m.jsx)("div",{className:"col-lg-7",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-sm-4",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"ci-icon",children:(0,m.jsx)("span",{children:"ND"})}),(0,m.jsx)("h4",{children:"New Delhi"}),(0,m.jsx)("p",{children:"2768 XYZ Road New Delhi, ND 001100 "})]})}),(0,m.jsx)("div",{className:"col-sm-4",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"ci-icon",children:(0,m.jsx)("span",{children:"MB"})}),(0,m.jsx)("h4",{children:"Mumbai"}),(0,m.jsx)("p",{children:"2768 XYZ Road Mumbai, MB 001101"})]})}),(0,m.jsx)("div",{className:"col-sm-4",children:(0,m.jsxs)("div",{className:"contact-info-box",children:[(0,m.jsx)("div",{className:"ci-icon",children:(0,m.jsx)("span",{children:"BB"})}),(0,m.jsx)("h4",{children:"Bhubaneswar"}),(0,m.jsx)("p",{children:"2768 XYZ Road Bhubaneswar, BB 001102"})]})})]})})]}),(0,m.jsx)("form",{className:"contact-form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=0;if(""===n?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{name:"Name is Required"})})),(0,u.Z)()):n.length<2||!isNaN(n)?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{name:"Invalid Name"})})),(0,u.Z)()):w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{name:""})})),""===h?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{email:"Email is Required"})})),(0,u.Z)()):(0,l.Z)(h)?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{email:"Email ID not valid"})})),(0,u.Z)()):w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{email:""})})),""===x?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{subject:"Subject is Required"})})),(0,u.Z)()):x.length<2||!isNaN(x)?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{subject:"Invalid Subject"})})),(0,u.Z)()):w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{subject:""})})),""===Z?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{message:"Message is Required"})})),(0,u.Z)()):Z.length<2||!isNaN(Z)?(t++,w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{message:"Invalid Subject"})})),(0,u.Z)()):w((function(e){return(0,r.Z)((0,r.Z)({},e),{},{message:""})})),0===t){var s={name:n,email:h,subject:x,message:Z};D(!0),o().post("api/contactpost",s).then((function(e){F(!0),setTimeout((function(){F(!1),D(!1)}),2e3)})).catch((function(e){F(!1),D(!1)}))}},children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-4",children:(0,m.jsxs)("div",{className:"form_wr_input",children:[(0,m.jsx)("input",{className:"form_input_style",onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Your name"}),(0,m.jsx)("span",{className:"form_err",children:_.name})]})}),(0,m.jsx)("div",{className:"col-lg-4",children:(0,m.jsxs)("div",{className:"form_wr_input",children:[(0,m.jsx)("input",{className:"form_input_style",type:"text",onChange:function(e){return p(e.target.value)},placeholder:"Your e-mail"}),(0,m.jsx)("span",{className:"form_err",children:_.email})]})}),(0,m.jsx)("div",{className:"col-lg-4",children:(0,m.jsxs)("div",{className:"form_wr_input",children:[(0,m.jsx)("input",{className:"form_input_style",type:"text",onChange:function(e){return g(e.target.value)},placeholder:"Subject"}),(0,m.jsx)("span",{className:"form_err",children:_.subject})]})}),(0,m.jsxs)("div",{className:"col-lg-12",children:[(0,m.jsxs)("div",{className:"form_wr_input",children:[(0,m.jsx)("textarea",{className:"form_input_style",onChange:function(e){return y(e.target.value)},placeholder:"Message"}),(0,m.jsx)("span",{className:"form_err",children:_.message})]}),(0,m.jsx)("button",{className:"site-btn sb-big",disabled:P,children:"Send message"}),R?(0,m.jsx)("p",{className:"success_msge",children:"Message send successfully."}):""]})]})})]})})]})}},2992:function(e,t,n){n.d(t,{T:function(){return r},p:function(){return s}});var r=function(e,t){var n=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))};return t.split("").map(n).map((function(t){return n(e).reduce((function(e,t){return e^t}),t)})).map((function(e){return("0"+Number(e).toString(16)).substr(-2)})).join("")},s=function(e,t){return t.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map((function(t){return(n=e,n.split("").map((function(e){return e.charCodeAt(0)}))).reduce((function(e,t){return e^t}),t);var n})).map((function(e){return String.fromCharCode(e)})).join("")}},1786:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(885),s=n(2791),a=n(6871),i=n(2992),c=function(e){return!(e.toString().includes("?")||e.toString().includes("&")||e.toString().includes("@")||e.toString().includes("$"))},o=n(184),u=function(e){var t=e.srch,n=(0,a.s0)(),u=(0,s.useState)("Sell"),l=(0,r.Z)(u,2),m=l[0],d=l[1],f=(0,s.useState)("Private"),h=(0,r.Z)(f,2),p=h[0],j=h[1],v=(0,s.useState)(""),x=(0,r.Z)(v,2),g=x[0],b=x[1];return(0,s.useEffect)((function(){t&&(b(t.query3),d(t.query1),j(t.query2))}),[]),(0,o.jsxs)("form",{className:"main-search-form",onSubmit:function(e){e.preventDefault(),c(m+" "+p+" "+g)&&n("/searchresult/"+(0,i.T)("myRealsujan",m+"?"+p+"?"+g))},autoComplete:"off",children:[(0,o.jsxs)("div",{className:"search-type",children:[(0,o.jsxs)("div",{className:"st-item",children:[(0,o.jsx)("input",{defaultChecked:!t||"Sell"===t.query1,type:"radio",name:"st",value:"Sell",onChange:function(e){return d(e.target.value)},id:"buy"}),(0,o.jsx)("label",{htmlFor:"buy",children:"Buy"})]}),(0,o.jsxs)("div",{className:"st-item",children:[(0,o.jsx)("input",{type:"radio",defaultChecked:!(!t||"rent_out"!==t.query1),name:"st",value:"rent_out",onChange:function(e){return d(e.target.value)},id:"rent"}),(0,o.jsx)("label",{htmlFor:"rent",children:"Rent"})]}),(0,o.jsxs)("div",{className:"st-item",children:[(0,o.jsx)("input",{type:"radio",defaultChecked:!(!t||"Upcoming"!==t.query1),name:"st",value:"Upcoming",onChange:function(e){return d(e.target.value)},id:"projects"}),(0,o.jsx)("label",{htmlFor:"projects",children:"Upcoming Projects"})]})]}),(0,o.jsxs)("div",{className:"search-input",children:[(0,o.jsx)("input",{type:"text",name:"searchField",defaultValue:t?t.query3:"",onChange:function(e){return b(e.target.value)},placeholder:"Search by state, postcode or suburb"}),(0,o.jsx)("button",{className:"site-btn",children:"Search"})]}),(0,o.jsxs)("div",{className:"custom-control custom-radio ib_radio",children:[(0,o.jsx)("input",{type:"radio",defaultChecked:!t||"Private"===t.query2,id:"Private",name:"prvComm",value:"Private",onChange:function(e){return j(e.target.value)},className:"custom-control-input"}),(0,o.jsx)("label",{className:"custom-control-label",htmlFor:"Private",children:"Private"})]}),(0,o.jsxs)("div",{className:"custom-control custom-radio ib_radio",children:[(0,o.jsx)("input",{type:"radio",defaultChecked:!(!t||"Commercial"!==t.query2),id:"Commercial",name:"prvComm",value:"Commercial",onChange:function(e){return j(e.target.value)},className:"custom-control-input"}),(0,o.jsx)("label",{className:"custom-control-label",htmlFor:"Commercial",children:"Commercial"})]}),(0,o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. "})]})}},1447:function(e,t){t.Z=function(){var e=document.querySelectorAll(".form_err");e.forEach((function(e){e.classList.add("err_animate")})),setTimeout((function(){e.forEach((function(e){e.classList.remove("err_animate")}))}),410)}},9730:function(e,t){t.Z=function(e){return!e.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=201.8149329e.chunk.js.map