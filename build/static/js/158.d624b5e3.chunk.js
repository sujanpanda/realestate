"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[158],{9691:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(2791),r=a(6871),s=a(3504),i=a(6197),o=a(184);function l(){var e=(0,r.s0)(),t=(0,n.useContext)(i.S),a=(t.adm,t.dispadm);return(0,o.jsxs)("div",{className:"list-group",role:"tablist",children:[(0,o.jsx)(s.OL,{to:"/admindashboard",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Dashboard"}),(0,o.jsx)(s.OL,{to:"/addproperty",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Add Property"}),(0,o.jsx)(s.OL,{to:"/editproperty",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Edit Property"}),(0,o.jsx)(s.OL,{to:"/offered",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Offerd"}),(0,o.jsx)(s.OL,{to:"/inquiries",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Inquiries"}),(0,o.jsx)(s.OL,{to:"/contacts",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Contacts"}),(0,o.jsx)("a",{onClick:function(){localStorage.removeItem("admin"),a({type:"USER",payload:!1}),e("/")},className:"list-group-item list-group-item-action cursor","data-toggle":"list",children:"Logout"})]})}},2158:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(2982),r=a(885),s=a(2791),i=a(3504),o=a(4569),l=a.n(o),c=a(9691),d=a(7141),h=a(184);function u(){var e=(0,s.useState)(0),t=(0,r.Z)(e,2),a=t[0],o=t[1],u=(0,s.useState)(!1),m=(0,r.Z)(u,2),p=m[0],g=m[1],x=(0,s.useState)([]),j=(0,r.Z)(x,2),f=j[0],b=j[1],y=(0,s.useState)(!1),N=(0,r.Z)(y,2),v=N[0],S=N[1],k=(0,s.useState)(!1),Z=(0,r.Z)(k,2),_=Z[0],C=Z[1];(0,s.useEffect)((function(){O("load")}),[]);function O(e){S(!0);var t=localStorage.getItem("admin");t&&l().get("api/admininquiries/"+a,{headers:{"x-access-token":t,"Content-Type":"application/json"}}).then((function(t){o(a+d.C),b("push"===e?function(e){return[].concat((0,n.Z)(e),(0,n.Z)(t.data))}:t.data),t.data.length===d.C?C(!0):C(!1),S(!1)})).catch((function(e){g(!0),S(!1)}))}return(0,h.jsx)("div",{className:"admin-pages container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-md-3",children:(0,h.jsx)(c.Z,{})}),p?(0,h.jsx)("div",{className:"col-9",children:(0,h.jsxs)("div",{className:"error-page text-center",children:[(0,h.jsx)("div",{style:{height:"60px"},children:"\xa0"}),(0,h.jsx)("h5",{className:"not_fnd_hd",children:"OOPS... Something went wrong!"}),(0,h.jsxs)("p",{className:"not_fnd_body",children:["Please try again later or",(0,h.jsx)("br",{}),(0,h.jsx)(i.rU,{to:"/",className:"readmore-btn",children:"Back to Home Page"})]})]})}):(0,h.jsxs)("div",{className:"col-md-9",children:[(0,h.jsx)("h3",{className:"mb-4",children:"Inquiries by users on properties"}),f.length>0?(0,h.jsxs)("table",{className:"table table-bordered",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"Sl No."}),(0,h.jsx)("th",{scope:"col",children:"By"}),(0,h.jsx)("th",{scope:"col",children:"Mobile"}),(0,h.jsx)("th",{scope:"col",children:"Property"}),(0,h.jsx)("th",{scope:"col",children:"Action"})]})}),(0,h.jsx)("tbody",{children:f.map((function(e,t){return(0,h.jsxs)("tr",{className:"yes"===e.read?"checked":"",children:[(0,h.jsx)("td",{children:t+1}),(0,h.jsx)("td",{children:e.name}),(0,h.jsx)("td",{children:e.phone}),(0,h.jsx)("td",{children:(0,h.jsx)(i.rU,{to:"/property/"+e.prop_id,target:"_blank",children:"View Detail"})}),(0,h.jsx)("td",{children:"yes"===e.read?(0,h.jsx)("span",{children:"Checked"}):(0,h.jsx)("button",{disabled:!1,onClick:function(a){return function(e,t,a){e.target.disabled=!0;var r=localStorage.getItem("admin");r&&l().get("api/adminqdone/"+t,{headers:{"x-access-token":r,"Content-Type":"application/json"}}).then((function(e){var t=(0,n.Z)(f);t[a].read="yes",b(t)})).catch((function(e){console.log(e)}))}(a,e._id,t)},className:"adm_btn",children:"Done"})})]},t)}))})]}):(0,h.jsxs)("div",{className:"error-page text-center",children:[(0,h.jsx)("div",{style:{height:"60px"},children:"\xa0"}),(0,h.jsx)("h5",{className:"not_fnd_hd",children:"NO ITEMS FOUND"}),(0,h.jsxs)("p",{className:"not_fnd_body",children:["Please try again later or",(0,h.jsx)("br",{}),(0,h.jsx)(i.rU,{to:"/admindashboard",className:"readmore-btn",children:"Back to dashboard"})]})]}),v?(0,h.jsx)("div",{className:"ad_list_loader",children:"Loading..."}):_?(0,h.jsx)("button",{className:"site-btn sb-big load-more",onClick:function(){O("push")},children:"Load More"}):""]})]})})}},7141:function(e,t,a){a.d(t,{C:function(){return n}});var n=12;t.Z="/"},2982:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(907);var r=a(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=158.d624b5e3.chunk.js.map