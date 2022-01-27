"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[328],{2992:function(e,s,t){t.d(s,{T:function(){return i},p:function(){return n}});var i=function(e,s){var t=function(e){return e.split("").map((function(e){return e.charCodeAt(0)}))};return s.split("").map(t).map((function(s){return t(e).reduce((function(e,s){return e^s}),s)})).map((function(e){return("0"+Number(e).toString(16)).substr(-2)})).join("")},n=function(e,s){return s.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})).map((function(s){return(t=e,t.split("").map((function(e){return e.charCodeAt(0)}))).reduce((function(e,s){return e^s}),s);var t})).map((function(e){return String.fromCharCode(e)})).join("")}},8706:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});var i=t(1413),n=t(885),r=t(2791),a=t(5671),o=t(3144),c=t(9340),l=t(5716),u=t(5717),d=(t(3037),t(8688),t(184)),m=function(e){(0,c.Z)(t,e);var s=(0,l.Z)(t);function t(){return(0,a.Z)(this,t),s.apply(this,arguments)}return(0,o.Z)(t,[{key:"render",value:function(){return(0,d.jsx)("div",{className:"banners",children:(0,d.jsxs)(u.Z,(0,i.Z)((0,i.Z)({},{dots:!1,arrows:!1,fade:!0,infinite:!0,autoplay:!0,speed:500,lazyLoad:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1}),{},{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{loading:"lazy",src:"/img/hero-bg.jpg",alt:"banner 1"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{loading:"lazy",src:"/img/inter-bg.jpg",alt:"banner 2"})}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{loading:"lazy",src:"/img/inter-bg2.jpg",alt:"banner 3"})})]}))})}}]),t}(r.Component),p=t(3504),h=t(4569),j=t.n(h),f=t(1786),x=t(1447),g=t(7141);function v(){var e=(0,r.useState)(""),s=(0,n.Z)(e,2),t=s[0],a=s[1],o=(0,r.useState)(""),c=(0,n.Z)(o,2),l=c[0],u=c[1],h=(0,r.useState)({inc:"",amount:""}),v=(0,n.Z)(h,2),b=v[0],N=v[1],y=(0,r.useState)(null),S=(0,n.Z)(y,2),C=S[0],Z=S[1],_=(0,r.useState)([]),q=(0,n.Z)(_,2),F=q[0],w=q[1];return(0,r.useEffect)((function(){j().get("api/innerhomes",{headers:{"Content-Type":"application/json"}}).then((function(e){w(e.data)})).catch((function(e){console.log(e)}))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("section",{className:"hero-section",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"hero-warp",children:(0,d.jsx)(f.Z,{})})})}),(0,d.jsx)("section",{className:"intro-section spad",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"section-title",children:(0,d.jsx)("h2",{children:"Sell Faster. Save Thousands."})}),(0,d.jsxs)("div",{className:"row intro-first",children:[(0,d.jsx)("div",{className:"col-lg-6 order-lg-2",children:(0,d.jsx)("img",{src:"/img/about/1.jpg",alt:""})}),(0,d.jsx)("div",{className:"col-lg-6 order-lg-1",children:(0,d.jsxs)("div",{className:"about-text",children:[(0,d.jsx)("h3",{children:"We charge 2% total. No hidden fees or upfront costs."}),(0,d.jsx)("p",{children:"Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus."}),(0,d.jsx)(p.rU,{to:"/about",className:"readmore-btn",children:"Find out more"})]})})]}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-lg-6",children:(0,d.jsx)("img",{src:"/img/about/2.jpg",alt:""})}),(0,d.jsx)("div",{className:"col-lg-6 ",children:(0,d.jsxs)("div",{className:"about-text",children:[(0,d.jsx)("h3",{children:"How Much Can You Save? We work for you, not commission."}),(0,d.jsx)("p",{children:"Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus."}),(0,d.jsx)(p.rU,{to:"/about",className:"readmore-btn",children:"Find out more"})]})})]})]})}),F.length>0?(0,d.jsx)("section",{className:"property-section",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"section-title",children:(0,d.jsx)("h2",{children:"Recently Add Homes"})}),(0,d.jsx)("div",{className:"row",children:F.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4",children:(0,d.jsxs)("div",{className:"open"===e.user_upload_status?"property-item":"property-item disabled",children:[(0,d.jsxs)("div",{className:"pi-image",children:[(0,d.jsx)("img",{src:g.Z+e.img,alt:"image "+(s+1)}),"New"===e.status?(0,d.jsx)("div",{className:"pi-badge new",children:"New"}):"Offer"===e.status?(0,d.jsx)("div",{className:"pi-badge offer",children:"Offer"}):""]}),(0,d.jsxs)("h3",{children:[(0,d.jsx)("i",{className:"fas fa-rupee-sign"}),e.price.toLocaleString(),"rent_out"===e.want_to?(0,d.jsx)("span",{className:"per_month",children:"/Month"}):""]}),"Private"===e.property_type?(0,d.jsxs)("h5",{children:["N/A"!==e.bedrooms&&"1"!==e.bedrooms?e.bedrooms+" Bedrooms":"1"===e.bedrooms?e.bedrooms+" Bedroom":"","  ",e.house_type]}):"Commercial"===e.property_type?(0,d.jsxs)("h5",{children:["N/A"===e.patio?e.patio:e.patio+" SF"," ",e.house_type]}):(0,d.jsx)("h5",{children:e.property_type}),"Private"===e.property_type||"Upcoming Private Project"===e.property_type?(0,d.jsxs)("div",{className:"pi-metas",children:["N/A"!==e.bedrooms?(0,d.jsxs)("div",{className:"pi-meta",children:[e.bedrooms," Bed"]}):"","N/A"!==e.bathrooms&&"No"!==e.bathrooms?(0,d.jsxs)("div",{className:"pi-meta",children:[e.bathrooms," Bath"]}):"","Garage"===e.parking_type?(0,d.jsx)("div",{className:"pi-meta",children:"Garage"}):"",(0,d.jsx)("div",{className:"pi-meta",children:e.property_area+" SF"})]}):(0,d.jsx)("div",{className:"pi-metas",children:(0,d.jsxs)("div",{className:"pi-meta",children:["For ",e.hse_for]})}),"open"===e.user_upload_status?(0,d.jsx)(p.rU,{to:"/property/"+e.id,className:"readmore-btn",children:"Find out more"}):(0,d.jsx)("span",{className:"readmore-btn",children:"Find out more"})]})},e.id)}))})]})}):"",(0,d.jsx)("section",{className:"loan-section",children:(0,d.jsx)("div",{className:"loan-warp",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"section-title text-white",children:[(0,d.jsx)("h2",{children:"See If You Qualify for a Mortgage"}),(0,d.jsx)("p",{children:"Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. "})]}),(0,d.jsxs)("form",{className:"row loan-form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var s=0;(""===t?(s++,N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{inc:"Your Income is Required"})})),(0,x.Z)()):isNaN(t)?(s++,N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{inc:"Income must be in Mumber"})})),(0,x.Z)()):N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{inc:""})})),""===l?(s++,N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{amount:"Your Income is Required"})})),(0,x.Z)()):isNaN(l)||l>t?(s++,N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{amount:"Invalid Amount"})})),(0,x.Z)()):N((function(e){return(0,i.Z)((0,i.Z)({},e),{},{amount:""})})),0===s)&&(Z(t/100*32*180>l),setTimeout((function(){Z(null)}),2e3))},children:[(0,d.jsx)("div",{className:"col-lg-5",children:(0,d.jsxs)("div",{className:"form_wr_input",children:[(0,d.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},placeholder:"Your monthly income"}),(0,d.jsx)("span",{className:"form_err",children:b.inc})]})}),(0,d.jsx)("div",{className:"col-lg-5",children:(0,d.jsxs)("div",{className:"form_wr_input",children:[(0,d.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},placeholder:"Amount needed"}),(0,d.jsx)("span",{className:"form_err",children:b.amount})]})}),(0,d.jsx)("div",{className:"col-lg-2",children:(0,d.jsx)("button",{className:"site-btn",children:"Submit"})})]}),!0===C?(0,d.jsx)("p",{className:"eligible_succ",children:"You Are Eligible"}):!1===C?(0,d.jsx)("p",{className:"eligible_not",children:"You Are Not Eligible"}):""]})})}),(0,d.jsx)("section",{className:"stories-section spad",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row ",children:[(0,d.jsx)("div",{className:"col-lg-5 order-lg-2",children:(0,d.jsx)("img",{className:"w-100",src:"/img/about/3.jpg",alt:""})}),(0,d.jsx)("div",{className:"col-lg-7 order-lg-1",children:(0,d.jsxs)("div",{className:"about-text",children:[(0,d.jsx)("h2",{children:"Seller Success Stories"}),(0,d.jsx)("p",{children:"Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora. Donec eget efficitur ex. Donec eget dolor vitae eros feugiat tristique id vitae massa. Proin vulputate congue rutrum. Fusce lobortis a enim eget tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Ut gravida mattis magna, non varius lorem sodales nec. In libero orci, ornare non nisl a, auctor euismod purus. Morbi pretium interdum vestibulum. Fusce nec eleifend ipsum. Sed non blandit tellus. "}),(0,d.jsx)(p.rU,{to:"/testimonials",className:"readmore-btn",children:"Find out more"})]})})]})})})]})}},1786:function(e,s,t){t.d(s,{Z:function(){return l}});var i=t(885),n=t(2791),r=t(6871),a=t(2992),o=function(e){return!(e.toString().includes("?")||e.toString().includes("&")||e.toString().includes("@")||e.toString().includes("$"))},c=t(184),l=function(e){var s=e.srch,t=(0,r.s0)(),l=(0,n.useState)("Sell"),u=(0,i.Z)(l,2),d=u[0],m=u[1],p=(0,n.useState)("Private"),h=(0,i.Z)(p,2),j=h[0],f=h[1],x=(0,n.useState)(""),g=(0,i.Z)(x,2),v=g[0],b=g[1];return(0,n.useEffect)((function(){s&&(b(s.query3),m(s.query1),f(s.query2))}),[]),(0,c.jsxs)("form",{className:"main-search-form",onSubmit:function(e){e.preventDefault(),o(d+" "+j+" "+v)&&t("/searchresult/"+(0,a.T)("myRealsujan",d+"?"+j+"?"+v))},autoComplete:"off",children:[(0,c.jsxs)("div",{className:"search-type",children:[(0,c.jsxs)("div",{className:"st-item",children:[(0,c.jsx)("input",{defaultChecked:!s||"Sell"===s.query1,type:"radio",name:"st",value:"Sell",onChange:function(e){return m(e.target.value)},id:"buy"}),(0,c.jsx)("label",{htmlFor:"buy",children:"Buy"})]}),(0,c.jsxs)("div",{className:"st-item",children:[(0,c.jsx)("input",{type:"radio",defaultChecked:!(!s||"rent_out"!==s.query1),name:"st",value:"rent_out",onChange:function(e){return m(e.target.value)},id:"rent"}),(0,c.jsx)("label",{htmlFor:"rent",children:"Rent"})]}),(0,c.jsxs)("div",{className:"st-item",children:[(0,c.jsx)("input",{type:"radio",defaultChecked:!(!s||"Upcoming"!==s.query1),name:"st",value:"Upcoming",onChange:function(e){return m(e.target.value)},id:"projects"}),(0,c.jsx)("label",{htmlFor:"projects",children:"Upcoming Projects"})]})]}),(0,c.jsxs)("div",{className:"search-input",children:[(0,c.jsx)("input",{type:"text",name:"searchField",defaultValue:s?s.query3:"",onChange:function(e){return b(e.target.value)},placeholder:"Search by state, postcode or suburb"}),(0,c.jsx)("button",{className:"site-btn",children:"Search"})]}),(0,c.jsxs)("div",{className:"custom-control custom-radio ib_radio",children:[(0,c.jsx)("input",{type:"radio",defaultChecked:!s||"Private"===s.query2,id:"Private",name:"prvComm",value:"Private",onChange:function(e){return f(e.target.value)},className:"custom-control-input"}),(0,c.jsx)("label",{className:"custom-control-label",htmlFor:"Private",children:"Private"})]}),(0,c.jsxs)("div",{className:"custom-control custom-radio ib_radio",children:[(0,c.jsx)("input",{type:"radio",defaultChecked:!(!s||"Commercial"!==s.query2),id:"Commercial",name:"prvComm",value:"Commercial",onChange:function(e){return f(e.target.value)},className:"custom-control-input"}),(0,c.jsx)("label",{className:"custom-control-label",htmlFor:"Commercial",children:"Commercial"})]}),(0,c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. "})]})}},1447:function(e,s){s.Z=function(){var e=document.querySelectorAll(".form_err");e.forEach((function(e){e.classList.add("err_animate")})),setTimeout((function(){e.forEach((function(e){e.classList.remove("err_animate")}))}),410)}},7141:function(e,s,t){t.d(s,{C:function(){return i}});var i=12;s.Z="/"}}]);
//# sourceMappingURL=328.42ff0052.chunk.js.map