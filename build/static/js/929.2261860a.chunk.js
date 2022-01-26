"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[929],{8929:function(e,s,r){r.r(s),r.d(s,{default:function(){return d}});var a=r(885),t=r(2791),i=r(3504),n=r(4569),l=r.n(n),o=r(7141),c=r(184);function d(){var e=(0,t.useState)([]),s=(0,a.Z)(e,2),r=s[0],n=s[1],d=(0,t.useState)([]),p=(0,a.Z)(d,2),h=p[0],m=p[1],x=(0,t.useState)(null),j=(0,a.Z)(x,2),u=j[0],N=j[1],_=(0,t.useState)([]),f=(0,a.Z)(_,2),g=f[0],y=f[1];return(0,t.useEffect)((function(){var e=localStorage.getItem("token");l().get("api/dashboardofferlist",{headers:{"x-access-token":e,"Content-Type":"application/json"}}).then((function(e){n(e.data.offerList),m(e.data.shortList)})).catch((function(e){N(e.response.data)})),l().get("api/randomproperties",{headers:{"x-access-token":e,"Content-Type":"application/json"}}).then((function(e){y(e.data)})).catch((function(e){N(e.response.data)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[u?(0,c.jsx)("div",{className:"server_error",children:(0,c.jsx)("span",{className:"form_err",children:u})}):"",(0,c.jsx)("section",{className:"logged spad",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"inner_boxes",children:[(0,c.jsx)("h3",{children:"Offered Properties by you"}),r.length>0?(0,c.jsx)("div",{className:"property_lst",children:r.map((function(e){return(0,c.jsxs)("div",{className:"open"===e.user_upload_status?"prop_list_wr":"prop_list_wr disabled",children:[(0,c.jsx)("img",{src:o.Z+e.img,className:"inline_list_img",alt:"offered property "+r.length}),(0,c.jsx)("span",{className:"prop_location",children:e.city}),"open"===e.user_upload_status?(0,c.jsx)(i.rU,{to:"/property/"+e.id,children:"Details"}):(0,c.jsx)("span",{children:"Details"})]},e.id)}))}):(0,c.jsxs)("div",{className:"property_lst",children:[(0,c.jsx)("p",{className:"onthing_quote",children:"You have not offered anything yet."}),(0,c.jsx)("div",{className:"btn-right",children:(0,c.jsx)(i.rU,{to:"/searchresult/1e282121721d3f243b2c392872",className:"site-btn",children:"Search"})})]}),r.length>1?(0,c.jsx)("div",{className:"text-right",children:(0,c.jsx)(i.rU,{to:"/offerred-property",className:"readmore-btn",children:"View All"})}):""]})}),(0,c.jsx)("div",{className:"col-lg-6",children:(0,c.jsxs)("div",{className:"inner_boxes",children:[(0,c.jsx)("h3",{children:"Shortlisted Properties"}),h.length>0?(0,c.jsx)("div",{className:"property_lst",children:h.map((function(e){return(0,c.jsxs)("div",{className:"open"===e.user_upload_status?"prop_list_wr":"prop_list_wr disabled",children:[(0,c.jsx)("img",{src:o.Z+e.img,className:"inline_list_img",alt:"shortlist property "+h.length}),(0,c.jsx)("span",{className:"prop_location",children:e.city}),"open"===e.user_upload_status?(0,c.jsx)(i.rU,{to:"/property/"+e.id,children:"Details"}):(0,c.jsx)("span",{children:"Details"})]},e.id)}))}):(0,c.jsxs)("div",{className:"property_lst",children:[(0,c.jsx)("p",{className:"onthing_quote",children:"All your shortlisted propertes will show here."}),(0,c.jsx)("div",{className:"btn-right",children:(0,c.jsx)(i.rU,{to:"/searchresult/1e282121721d3f243b2c392872",className:"site-btn",children:"Search"})})]}),h.length>1?(0,c.jsx)("div",{className:"text-right",children:(0,c.jsx)(i.rU,{to:"/shortlisted-property",className:"readmore-btn",children:"View All"})}):""]})})]}),(0,c.jsx)("a",{href:"https://www.facebook.com/Jjackeyy/",className:"dash_banner",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("img",{src:"/img/banner.jpg",alt:"Banner"})}),g.length>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{className:"prop_list_head",children:"Some property you may interested"}),(0,c.jsx)("div",{className:"row",children:g.map((function(e,s){return(0,c.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,c.jsxs)("div",{className:"open"===e.user_upload_status?"property-item":"property-item disabled",children:[(0,c.jsxs)("div",{className:"pi-image",children:[(0,c.jsx)("img",{src:o.Z+e.img,alt:"image "+(s+1)}),"New"===e.status?(0,c.jsx)("div",{className:"pi-badge new",children:"New"}):"Offer"===e.status?(0,c.jsx)("div",{className:"pi-badge offer",children:"Offer"}):""]}),(0,c.jsxs)("h3",{children:[(0,c.jsx)("i",{className:"fas fa-rupee-sign"}),e.price.toLocaleString(),"rent_out"===e.want_to?(0,c.jsx)("span",{className:"per_month",children:"/Month"}):""]}),"Private"===e.property_type?(0,c.jsxs)("h5",{children:["N/A"!==e.bedrooms&&"1"!==e.bedrooms?e.bedrooms+" Bedrooms":"1"===e.bedrooms?e.bedrooms+" Bedroom":"","  ",e.house_type]}):"Commercial"===e.property_type?(0,c.jsxs)("h5",{children:["N/A"===e.patio?e.patio:e.patio+" SF"," ",e.house_type]}):(0,c.jsx)("h5",{children:e.property_type}),"Private"===e.property_type||"Upcoming Private Project"===e.property_type?(0,c.jsxs)("div",{className:"pi-metas",children:["N/A"!==e.bedrooms?(0,c.jsxs)("div",{className:"pi-meta",children:[e.bedrooms," Bed"]}):"","N/A"!==e.bathrooms&&"No"!==e.bathrooms?(0,c.jsxs)("div",{className:"pi-meta",children:[e.bathrooms," Bath"]}):"","Garage"===e.parking_type?(0,c.jsx)("div",{className:"pi-meta",children:"Garage"}):"",(0,c.jsx)("div",{className:"pi-meta",children:e.property_area+" SF"})]}):(0,c.jsx)("div",{className:"pi-metas",children:(0,c.jsxs)("div",{className:"pi-meta",children:["For ",e.hse_for]})}),"open"===e.user_upload_status?(0,c.jsx)(i.rU,{to:"/property/"+e.id,className:"readmore-btn",children:"Find out more"}):(0,c.jsx)("span",{className:"readmore-btn",children:"Find out more"})]})},e.id)}))})]}):"",(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-lg-12",children:(0,c.jsxs)("div",{className:"inner_boxes",children:[(0,c.jsx)("h3",{children:"I wan't to Sell/Rent out"}),(0,c.jsxs)("div",{className:"property_lst",children:[(0,c.jsx)("p",{className:"onthing_quote",children:"You have not posted anything yet."}),(0,c.jsx)("div",{className:"btn-right",children:(0,c.jsx)(i.rU,{to:"/post-property",className:"site-btn",children:"Post now"})})]})]})})}),(0,c.jsxs)("div",{className:"inner_boxes full_inner",children:[(0,c.jsx)("h3",{children:"People offered to your property"}),(0,c.jsx)("p",{className:"onthing_quote",children:"Price offering details will appear as soon as people offered to your properties"})]})]})})]})}},7141:function(e,s,r){r.d(s,{C:function(){return a}});var a=12;s.Z="/"}}]);
//# sourceMappingURL=929.2261860a.chunk.js.map