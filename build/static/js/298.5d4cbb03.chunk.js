"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[298],{6298:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var r=a(2982),i=a(885),o=a(2791),n=a(3504),l=a(4569),t=a.n(l),d=a(7141),c=a(184);function p(){var e=(0,o.useState)(0),s=(0,i.Z)(e,2),a=s[0],l=s[1],p=(0,o.useState)(!1),m=(0,i.Z)(p,2),h=m[0],u=m[1],_=(0,o.useState)([]),j=(0,i.Z)(_,2),g=j[0],N=j[1],x=(0,o.useState)(!1),v=(0,i.Z)(x,2),f=v[0],b=v[1];return(0,o.useEffect)((function(){var e=localStorage.getItem("token");t().get("api/shortproplist/"+a,{headers:{"x-access-token":e,"Content-Type":"application/json"}}).then((function(e){N((function(s){return[].concat((0,r.Z)(s),(0,r.Z)(e.data))})),u(!1),e.data.length===d.C?b(!0):b(!1)})).catch((function(e){u(!1),b(!0)}))}),[a]),(0,c.jsx)("section",{className:"logged",children:(0,c.jsxs)("div",{className:"search-results",children:[(0,c.jsx)("h1",{className:"prop_list_head",children:"Shortlisted Properties"}),(0,c.jsx)("div",{className:"property_result",children:g.length>0?(0,c.jsx)("div",{className:"row",children:g.map((function(e,s){return(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"open"===e.user_upload_status?"property-item":"property-item disabled",children:[(0,c.jsxs)("div",{className:"pi-image",children:[(0,c.jsx)("img",{src:d.Z+e.img,alt:"image "+(s+1)}),"New"===e.status?(0,c.jsx)("div",{className:"pi-badge new",children:"New"}):"Offer"===e.status?(0,c.jsx)("div",{className:"pi-badge offer",children:"Offer"}):""]}),(0,c.jsxs)("h3",{children:[(0,c.jsx)("i",{className:"fas fa-rupee-sign"}),e.price.toLocaleString(),"rent_out"===e.want_to?(0,c.jsx)("span",{className:"per_month",children:"/Month"}):""]}),"Private"===e.property_type?(0,c.jsxs)("h5",{children:["N/A"!==e.bedrooms&&"1"!==e.bedrooms?e.bedrooms+" Bedrooms":"1"===e.bedrooms?e.bedrooms+" Bedroom":"","  ",e.house_type]}):"Commercial"===e.property_type?(0,c.jsxs)("h5",{children:["N/A"===e.patio?e.patio:e.patio+" SF"," ",e.house_type]}):(0,c.jsx)("h5",{children:e.property_type}),"Private"===e.property_type||"Upcoming Private Project"===e.property_type?(0,c.jsxs)("div",{className:"pi-metas",children:["N/A"!==e.bedrooms?(0,c.jsxs)("div",{className:"pi-meta",children:[e.bedrooms," Bed"]}):"","N/A"!==e.bathrooms&&"No"!==e.bathrooms?(0,c.jsxs)("div",{className:"pi-meta",children:[e.bathrooms," Bath"]}):"","Garage"===e.parking_type?(0,c.jsx)("div",{className:"pi-meta",children:"Garage"}):"",(0,c.jsx)("div",{className:"pi-meta",children:e.property_area+" SF"})]}):(0,c.jsx)("div",{className:"pi-metas",children:(0,c.jsxs)("div",{className:"pi-meta",children:["For ",e.hse_for]})}),"open"===e.user_upload_status?(0,c.jsx)(n.rU,{to:"/property/"+e.id,className:"readmore-btn",children:"Find out more"}):(0,c.jsx)("span",{className:"readmore-btn",children:"Find out more"})]})},e.id)}))}):""}),h?(0,c.jsxs)("div",{className:"row listing_loader",children:[(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"property-item",children:[(0,c.jsx)("div",{className:"skeleton_loading prop_size",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"})]})}),(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"property-item",children:[(0,c.jsx)("div",{className:"skeleton_loading prop_size",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"})]})}),(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"property-item",children:[(0,c.jsx)("div",{className:"skeleton_loading prop_size",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"})]})}),(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"property-item",children:[(0,c.jsx)("div",{className:"skeleton_loading prop_size",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"}),(0,c.jsx)("div",{className:"skeleton_loading prop_sub_heading",children:"\xa0"})]})})]}):f?(0,c.jsx)("button",{className:"site-btn sb-big load-more",onClick:function(){u(!0),l(a+d.C)},children:"Load More"}):""]})})}},7141:function(e,s,a){a.d(s,{C:function(){return r}});var r=12;s.Z="/"},2982:function(e,s,a){a.d(s,{Z:function(){return o}});var r=a(907);var i=a(181);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=298.5d4cbb03.chunk.js.map