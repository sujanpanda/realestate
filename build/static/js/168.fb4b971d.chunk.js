"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[168],{7386:function(e,r,t){var a=t(2982),n=t(885),o=t(2791),s=t(7005),i=t(184);r.Z=function(e){var r=e.setProp_images,t=e.prop_images,l=e.oldImgLength,c=(0,o.useState)({x:0,y:0}),d=(0,n.Z)(c,2),u=d[0],m=d[1],p=(0,o.useState)(null),h=(0,n.Z)(p,2),f=h[0],g=h[1],x=(0,o.useState)([]),j=(0,n.Z)(x,2),v=j[0],N=j[1],Z=(0,o.useCallback)((function(e,r){g(r)}),[]),_=(0,o.useState)(null),y=(0,n.Z)(_,2),b=y[0],C=y[1],S=(0,o.useState)(""),w=(0,n.Z)(S,2),P=w[0],k=w[1],A=(0,o.useState)(null),F=(0,n.Z)(A,2),I=F[0],R=F[1],q=function(e){var a=e.target.getAttribute("name");N(v.filter((function(e){return e.imgSrc!==a}))),r(t.filter((function(e){return e.imgSrc!==a}))),C(null),R(null)},B=v.map((function(e,r){return(0,i.jsxs)("span",{className:"rounded border border-primary",children:[(0,i.jsx)("img",{src:e.imgSrc,alt:"image "+r,className:"cropped_image_res rounded"}),(0,i.jsx)("span",{className:"close_img",name:e.imgSrc,onClick:q,children:"\xd7"})]},r)}));return(0,i.jsxs)(i.Fragment,{children:[v.length+l>0?(0,i.jsx)("div",{className:"added_img_list",children:B}):"",v.length+l<5?(0,i.jsx)("div",{className:"form-row",children:(0,i.jsx)("div",{className:"form-group col-md-12",children:(0,i.jsxs)("div",{className:"custom-file",children:[(0,i.jsx)("input",{id:"file",type:"file",className:"custom-file-input",accept:"image/*",onChange:function(e){if(e.target.files[0])if("image/jpeg"===e.target.files[0].type||"image/png"===e.target.files[0].type)if(e.target.files[0].size<3145728){var r=document.createElement("img"),t=URL.createObjectURL(e.target.files[0]);r.src=t,r.onload=function(){var t=r.width,a=r.height;t>500&&a>350?(C(URL.createObjectURL(e.target.files[0])),R(e.target.files[0]),k("")):(C(null),k("Image is too small"),R(null))}}else C(null),k("Image is too big"),R(null);else C(null),k("Only png and jpg allowed"),R(null)}}),(0,i.jsx)("label",{className:"custom-file-label",htmlFor:"file",children:"Choose image"}),(0,i.jsx)("small",{children:"Minimum size of image is 500x350 in px"}),(0,i.jsx)("span",{className:"form_err",children:P||""})]})})}):(0,i.jsx)("p",{className:"maximum_img",children:"Maximum You can upload upto 5 images"}),b?(0,i.jsxs)("div",{className:"image_cropper_box",children:[(0,i.jsx)("p",{children:"Reposition and crop the image"}),(0,i.jsx)("div",{className:"image_crop_inner",children:(0,i.jsx)("div",{className:"crop-container",children:(0,i.jsx)(s.Z,{image:b,crop:u,zoom:1,aspect:10/7,onCropChange:m,onCropComplete:Z,objectFit:"horizontal-cover"})})}),(0,i.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){C(null),R(null);var e=document.createElement("img");e.src=b,e.onload=function(){var t=document.createElement("canvas");t.width=f.width,t.height=f.height,t.getContext("2d").drawImage(e,f.x,f.y,f.width,f.height,0,0,f.width,f.height);var n=t.toDataURL("image/jpeg");N((function(e){return[].concat((0,a.Z)(e),[{imgSrc:n}])})),r((function(e){return[].concat((0,a.Z)(e),[{prop_img:I,posX:f.x,posY:f.y,crWidth:f.width,crHeight:f.height,imgSrc:n}])}))}},children:"Crop Image and add to queue"})]}):""]})}},6168:function(e,r,t){t.r(r),t.d(r,{default:function(){return g}});var a=t(1413),n=t(885),o=t(2791),s=t(4569),i=t.n(s),l=t(6871),c=t(7918),d=t(432),u=t(7386),m=t(6275),p=t(5306),h=t(9691),f=t(184);function g(){var e=(0,o.useState)([]),r=(0,n.Z)(e,2),t=r[0],s=r[1],g=(0,l.s0)(),x=(0,o.useState)([]),j=(0,n.Z)(x,2),v=j[0],N=j[1],Z=(0,o.useState)(!1),_=(0,n.Z)(Z,2),y=_[0],b=_[1],C=(0,o.useState)(!1),S=(0,n.Z)(C,2),w=S[0],P=S[1],k=(0,o.useState)(""),A=(0,n.Z)(k,2),F=A[0],I=A[1],R=(0,o.useState)(""),q=(0,n.Z)(R,2),B=q[0],L=q[1],H=(0,o.useState)(""),E=(0,n.Z)(H,2),O=E[0],T=E[1],U=(0,o.useState)(""),D=(0,n.Z)(U,2),Y=D[0],M=D[1],G=(0,o.useState)(""),W=(0,n.Z)(G,2),z=W[0],K=W[1],X=(0,o.useState)(""),J=(0,n.Z)(X,2),V=J[0],Q=J[1],$=(0,o.useState)(""),ee=(0,n.Z)($,2),re=ee[0],te=ee[1],ae=(0,o.useState)(""),ne=(0,n.Z)(ae,2),oe=ne[0],se=ne[1],ie=(0,o.useState)(""),le=(0,n.Z)(ie,2),ce=le[0],de=le[1],ue=(0,o.useState)(""),me=(0,n.Z)(ue,2),pe=me[0],he=me[1],fe=(0,o.useState)(!1),ge=(0,n.Z)(fe,2),xe=ge[0],je=ge[1],ve=(0,o.useState)("N/A"),Ne=(0,n.Z)(ve,2),Ze=Ne[0],_e=Ne[1],ye=(0,o.useState)(""),be=(0,n.Z)(ye,2),Ce=be[0],Se=be[1],we=(0,o.useState)(""),Pe=(0,n.Z)(we,2),ke=Pe[0],Ae=Pe[1],Fe=(0,o.useState)(""),Ie=(0,n.Z)(Fe,2),Re=Ie[0],qe=Ie[1],Be=(0,o.useState)(""),Le=(0,n.Z)(Be,2),He=Le[0],Ee=Le[1],Oe=(0,o.useState)(""),Te=(0,n.Z)(Oe,2),Ue=Te[0],De=Te[1],Ye=(0,o.useState)(""),Me=(0,n.Z)(Ye,2),Ge=Me[0],We=Me[1],ze=(0,o.useState)(""),Ke=(0,n.Z)(ze,2),Xe=Ke[0],Je=Ke[1],Ve=(0,o.useState)(""),Qe=(0,n.Z)(Ve,2),$e=Qe[0],er=Qe[1],rr=(0,o.useState)(""),tr=(0,n.Z)(rr,2),ar=tr[0],nr=tr[1],or=(0,o.useState)(""),sr=(0,n.Z)(or,2),ir=sr[0],lr=sr[1],cr=(0,o.useState)(""),dr=(0,n.Z)(cr,2),ur=dr[0],mr=dr[1],pr=(0,o.useState)(""),hr=(0,n.Z)(pr,2),fr=hr[0],gr=hr[1],xr=(0,o.useState)(""),jr=(0,n.Z)(xr,2),vr=jr[0],Nr=jr[1],Zr=(0,o.useState)(""),_r=(0,n.Z)(Zr,2),yr=_r[0],br=_r[1],Cr=(0,o.useState)(""),Sr=(0,n.Z)(Cr,2),wr=Sr[0],Pr=Sr[1],kr=(0,o.useState)(""),Ar=(0,n.Z)(kr,2),Fr=Ar[0],Ir=Ar[1],Rr=(0,o.useState)({pro_type:"",stories:"",A_C:"",heating:"",bathrooms:"",pool:"",fireplace:"",parkplace:"",parking_type:"",patio:"",playground:"",description:"",details:"",yt_url:"",g_map_url:"",hse_type:"",hse_for:"",bedrooms:"",want_to:"",price:"",pro_status:"",city:"",state:"",place:"",pin:"",propertyArea:"",images:""}),qr=(0,n.Z)(Rr,2),Br=qr[0],Lr=qr[1];(0,o.useEffect)((function(){"Private"===F?(document.getElementById("hse_type").selectedIndex=0,document.getElementById("hse_for").selectedIndex=0,document.getElementById("bedrooms").selectedIndex=0,document.getElementById("want_to").selectedIndex=0,document.getElementById("pro_status").selectedIndex=0,We("0"),Je("0"),er("0"),nr("0"),mr("0")):"Commercial"===F?(document.getElementById("hse_type").selectedIndex=0,document.getElementById("hse_for").selectedIndex=0,document.getElementById("want_to").selectedIndex=0,document.getElementById("pro_status").selectedIndex=0,We("0"),Je("0"),er("upcoming_default"),nr("0"),mr("0")):("Upcoming Private Project"===F||"Upcoming Commercial Project"===F)&&(document.getElementById("hse_type").selectedIndex=0,We("0"),Je("upcoming_default"),er("upcoming_default"),nr("upcoming_default"),mr("upcoming_default"))}),[F]);var Hr=["Yes","No","N/A"],Er=["Office","Retail","Commercial Plot","Hotels","Medical Center","Industrial","Other"],Or=(0,o.useState)(""),Tr=(0,n.Z)(Or,2),Ur=Tr[0],Dr=Tr[1],Yr=(0,o.useState)(!1),Mr=(0,n.Z)(Yr,2),Gr=Mr[0],Wr=Mr[1],zr=function(e){document.getElementById("city").value=e.target.getAttribute("name"),Wr(!1),gr(e.target.getAttribute("name"))},Kr=p.Z.filter((function(e){return e.toLowerCase().match(Ur.toLowerCase())}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"admin-pages container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-3",children:(0,f.jsx)(h.Z,{})}),(0,f.jsxs)("div",{className:"col-md-9",children:[(0,f.jsx)("h3",{className:"mb-4",children:"Add Property"}),(0,f.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),N([]);var r=0;if(""===F||"0"===F?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pro_type:"Property type is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pro_type:""})})),""===B||"0"===B?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{stories:"Stories is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{stories:""})})),""===O?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{year_build:"Type Year"})}))):isNaN(O)||4!==O.toString().length?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{year_build:"Type a valid Year"})}))):O>2035||O<1920?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{year_build:"Year must not older than 1920 or greater than 2035"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{year_build:""})})),""===Y||"0"===Y?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{A_C:"Ac is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{A_C:""})})),""===z||"0"===z?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{heating:"Heating is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{heating:""})})),""===V||"0"===V?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{bathrooms:"Bathrooms is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{bathrooms:""})})),""===re||"0"===re?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pool:"Pool is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pool:""})})),""===oe||"0"===oe?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{fireplace:"Fireplace is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{fireplace:""})})),""===ce||"0"===ce?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{parkplace:"Parking Spaces is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{parkplace:""})})),""===pe||"0"===pe?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{parking_type:"Parking Type is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{parking_type:""})})),xe&&""===Ze?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{patio:"Patio is Required"})}))):xe&&isNaN(Ze)||xe&&Ze<2?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{patio:"Patio Not valid"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{patio:""})})),""===Ce||"0"===Ce?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{playground:"Playground is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{playground:""})})),""===ke||"0"===ke?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{description:"Description is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{description:""})})),""===Re||"0"===Re?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{details:"Details is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{details:""})})),""===He?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{yt_url:"Please paste the iframe copied from youtube"})}))):(0,d.Z)(He)||!1===(0,m.b)(He)?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{yt_url:"Please paste valid embed code"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{yt_url:""})})),""===Ue?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{g_map_url:"Please paste the iframe copied from Google map"})}))):(0,c.Z)(Ue)||!1===(0,m.C)(Ue)?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{g_map_url:"Please paste valid map code"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{g_map_url:""})})),""===Ge||"0"===Ge?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{hse_type:"House Type is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{hse_type:""})})),""===Xe||"0"===Xe?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{hse_for:"House for is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{hse_for:""})})),""===$e||"0"===$e?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{bedrooms:"Bedrooms is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{bedrooms:""})})),""===ar||"0"===ar?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{want_to:"please Select"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{want_to:""})})),""===ir?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{price:"Price is Required"})}))):isNaN(ir)||ir<1?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{price:"Price is not valid"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{price:""})})),""===ur||"0"===ur?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pro_status:"Status is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pro_status:""})})),!t.length>0?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{images:"Images is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{images:""})})),""===fr?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{city:"City is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{city:""})})),""===vr||"0"===vr?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{state:"State is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{state:""})})),""===yr?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{place:"Place is Required"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{place:""})})),""===wr?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pin:"Pin is Required"})}))):isNaN(wr)||6!==wr.toString().length?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pin:"Pin is not valid"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{pin:""})})),""===Fr?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{propertyArea:"Area is Required"})}))):isNaN(Fr)?(r++,Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{propertyArea:"Area is not valid"})}))):Lr((function(e){return(0,a.Z)((0,a.Z)({},e),{},{propertyArea:""})})),0===r){b(!0);var n=new FormData;n.append("property_type",F),n.append("stories",B),n.append("year_build",O),n.append("A_C",Y),n.append("heating",z),n.append("bathrooms",V),n.append("pool",re),n.append("fireplace",oe),n.append("parking_space",ce),n.append("parking_type",pe),n.append("patio",Ze),n.append("playground",Ce),n.append("description",ke),n.append("details",Re),n.append("yt_url",(0,m.b)(He)),n.append("g_map_url",(0,m.C)(Ue)),n.append("house_type",Ge),n.append("hse_for",Xe),n.append("bedrooms",$e),n.append("want_to",ar),n.append("price",ir),n.append("status",ur),n.append("city",fr),n.append("state",vr),n.append("place",yr),n.append("pin",wr),n.append("property_area",Fr);for(var o=0;o<t.length;o++)n.append("prop_img",t[o].prop_img),n.append("posX",t[o].posX),n.append("posY",t[o].posY),n.append("crWidth",t[o].crWidth),n.append("crHeight",t[o].crHeight);i().post("api/uploadproperty",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){P(!0),setTimeout((function(){g("/admindashboard")}),1500)})).catch((function(e){b(!1),N(e.response.data)}))}},children:[(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"pro_type",children:"Property Type"}),(0,f.jsxs)("select",{id:"pro_type",className:"form-control",onChange:function(e){return I(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Type"}),(0,f.jsx)("option",{value:"Private",children:"Private"}),(0,f.jsx)("option",{value:"Commercial",children:"Commercial"}),(0,f.jsx)("option",{value:"Upcoming Private Project",children:"Upcoming Private Project"}),(0,f.jsx)("option",{value:"Upcoming Commercial Project",children:"Upcoming Commercial Project"})]}),(0,f.jsx)("small",{children:"(Above field will not editable in case you want to edit after property added to Data Base.)"}),(0,f.jsx)("span",{className:"form_err",children:Br.pro_type?Br.pro_type:""})]})}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"property_area",children:"Property area"}),(0,f.jsx)("input",{type:"text",className:"form-control",id:"property_area",onChange:function(e){return Ir(e.target.value)},placeholder:"Total Area In Square Feet"}),(0,f.jsx)("span",{className:"form_err",children:Br.propertyArea?Br.propertyArea:""})]})}),"Private"===F||"Upcoming Private Project"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"hse_type",children:"House Type"}),(0,f.jsxs)("select",{id:"hse_type",className:"form-control",onChange:function(e){return We(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose House Type"}),["Bungalow","Apartment","Penthouse","Studio Flat","Villa","Society","Farmhouse","Hut","Indian House","Private Plot","Other"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.hse_type?Br.hse_type:""})]})}):"Commercial"===F||"Upcoming Commercial Project"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"hse_type",children:"House Type"}),(0,f.jsxs)("select",{id:"hse_type",className:"form-control",onChange:function(e){return We(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose House Type"}),Er.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.hse_type?Br.hse_type:""})]})}):"","Private"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"hse_for",children:"For"}),(0,f.jsxs)("select",{id:"hse_for",className:"form-control",onChange:function(e){return Je(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),["Family","Bachelor","Hostel","Spiritual","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.hse_for?Br.hse_for:""})]})}):"Commercial"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"hse_for",children:"For"}),(0,f.jsxs)("select",{id:"hse_for",className:"form-control",onChange:function(e){return Je(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),Er.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.hse_for?Br.hse_for:""})]})}):"","Private"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"bedrooms",children:"Bedrooms"}),(0,f.jsxs)("select",{id:"bedrooms",className:"form-control",onChange:function(e){return er(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Bedrooms"}),["1","2","3","4","5","5+","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.bedrooms?Br.bedrooms:""})]})}):"","Private"===F||"Commercial"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"want_to",children:"Want to"}),(0,f.jsxs)("select",{id:"want_to",className:"form-control",onChange:function(e){return nr(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),(0,f.jsx)("option",{value:"Sell",children:"Sell"}),(0,f.jsx)("option",{value:"rent_out",children:"Rent Out"})]}),(0,f.jsx)("span",{className:"form_err",children:Br.want_to?Br.want_to:""})]})}):"","Private"===F||"Commercial"===F?(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"pro_status",children:"Status"}),(0,f.jsxs)("select",{id:"pro_status",className:"form-control",onChange:function(e){return mr(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),(0,f.jsx)("option",{value:"Normal",children:"Normal"}),(0,f.jsx)("option",{value:"New",children:"New"}),(0,f.jsx)("option",{value:"Offer",children:"Offer"})]}),(0,f.jsx)("span",{className:"form_err",children:Br.pro_status?Br.pro_status:""})]})}):"",(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"price",children:"Price"}),(0,f.jsx)("input",{type:"text",className:"form-control",id:"price",onChange:function(e){return lr(e.target.value)},placeholder:"Price of the property"}),"rent_out"===ar?(0,f.jsx)("small",{children:"This Price will show as monthly charges"}):"",(0,f.jsx)("span",{className:"form_err",children:Br.price?Br.price:""})]})}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"stories",children:"Stories(How many floors are there)"}),(0,f.jsxs)("select",{id:"stories",className:"form-control",onChange:function(e){return L(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Stories"}),["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15+","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.stories?Br.stories:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"year_build",children:"Year Built"}),(0,f.jsx)("input",{id:"year_build",type:"text",className:"form-control",placeholder:"Year",onChange:function(e){return T(e.target.value)}}),(0,f.jsx)("span",{className:"form_err",children:Br.year_build?Br.year_build:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"place",children:"Place of Property"}),(0,f.jsx)("input",{id:"place",type:"text",className:"form-control",placeholder:"e.g. Sector 10",onChange:function(e){return br(e.target.value)}}),(0,f.jsx)("span",{className:"form_err",children:Br.place?Br.place:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6 relative",children:[(0,f.jsx)("label",{htmlFor:"city",children:"City"}),(0,f.jsx)("input",{type:"text",className:"form-control",id:"city",onChange:function(e){e.target.value.length>2?Wr(!0):Wr(!1),Dr(e.target.value),gr(e.target.value)},placeholder:"City",autoComplete:"off"}),Gr&&0!==Kr.length?(0,f.jsx)("div",{className:"page_city_wrap",children:Kr.map((function(e){return(0,f.jsx)("span",{className:"page_city_list",name:e,onClick:zr,children:e},e)}))}):"",(0,f.jsx)("span",{className:"form_err",children:Br.city?Br.city:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"state",children:"State"}),(0,f.jsxs)("select",{id:"state",className:"form-control",onChange:function(e){return Nr(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose State"}),["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.state?Br.state:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"pin",children:"Pin"}),(0,f.jsx)("input",{id:"pin",type:"text",className:"form-control",placeholder:"Pin Code of the place",onChange:function(e){return Pr(e.target.value)}}),(0,f.jsx)("span",{className:"form_err",children:Br.pin?Br.pin:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"A_C",children:"A/C"}),(0,f.jsxs)("select",{id:"A_C",className:"form-control",onChange:function(e){return M(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Ac Type"}),["Central","Split","Window","Portable","Floor Mounted","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.A_C?Br.A_C:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"heating",children:"Heating"}),(0,f.jsxs)("select",{id:"heating",className:"form-control",onChange:function(e){return K(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Heating"}),["Forced Air","Heat Pumps","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.heating?Br.heating:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"bathrooms",children:"Bathrooms"}),(0,f.jsxs)("select",{id:"bathrooms",className:"form-control",onChange:function(e){return Q(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose Bathrooms"}),["1","2","3","4","5","5+","10+","No","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.bathrooms?Br.bathrooms:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"pool",children:"Pool"}),(0,f.jsxs)("select",{id:"pool",className:"form-control",onChange:function(e){return te(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),Hr.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.pool?Br.pool:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"fireplace",children:"Fireplace"}),(0,f.jsxs)("select",{id:"fireplace",className:"form-control",onChange:function(e){return se(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),Hr.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.fireplace?Br.fireplace:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"parkplace",children:"Parking Spaces(how many 4 wheelers can park)"}),(0,f.jsxs)("select",{id:"parkplace",className:"form-control",onChange:function(e){return de(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),["1","2","3","4","5","More than 5","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.parkplace?Br.parkplace:""})]})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"park_type",children:"Parking Type"}),(0,f.jsxs)("select",{id:"park_type",className:"form-control",onChange:function(e){return he(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),["Garage","On Street","Open Air","N/A"].map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.parking_type?Br.parking_type:""})]}),(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{children:"Patio(Living space outside your house)"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",id:"ad_patio",onChange:function(e){return function(e){je(e.target.checked),e.target.checked||(_e("N/A"),document.getElementById("patio_space").value="")}(e)},value:"option2"}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"ad_patio",children:"Add in Square Feet"})]}),(0,f.jsx)("div",{className:"form-check form-check-inline",children:(0,f.jsx)("div",{className:"form-group mx-sm-3 mb-2",children:(0,f.jsx)("input",{type:"text",className:"form-control",disabled:!xe,id:"patio_space",onChange:function(e){return _e(e.target.value)},placeholder:"Add Space"})})})]}),(0,f.jsx)("span",{className:"form_err",children:Br.patio?Br.patio:""})]})]}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-6",children:[(0,f.jsx)("label",{htmlFor:"playground",children:"Playground"}),(0,f.jsxs)("select",{id:"playground",className:"form-control",onChange:function(e){return Se(e.target.value)},children:[(0,f.jsx)("option",{value:"0",children:"Choose"}),Hr.map((function(e,r){return(0,f.jsx)("option",{value:e,children:e},r)}))]}),(0,f.jsx)("span",{className:"form_err",children:Br.playground?Br.playground:""})]})}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"description",children:"Description"}),(0,f.jsx)("textarea",{id:"description",className:"form-control",placeholder:"Write description of property",onChange:function(e){return Ae(e.target.value)}}),(0,f.jsx)("span",{className:"form_err",children:Br.description?Br.description:""})]})}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"details",children:"Details"}),(0,f.jsx)("textarea",{id:"details",className:"form-control",placeholder:"Write details of property",onChange:function(e){return qe(e.target.value)}}),(0,f.jsx)("span",{className:"form_err",children:Br.details?Br.details:""})]})}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"yt_url",children:"Youtube Link"}),(0,f.jsx)("input",{type:"text",id:"yt_url",className:"form-control",placeholder:"Paste Youtube Link",onChange:function(e){return Ee(e.target.value)}}),(0,f.jsxs)("small",{children:["Go to Youtube video(only on desktop/laptop) you want to add -",">",' click on "share" -',">",' click on "Embed" -',">"," Copy iframe code."]}),(0,f.jsx)("span",{className:"form_err",children:Br.yt_url?Br.yt_url:""})]})}),(0,f.jsx)("div",{className:"form-row",children:(0,f.jsxs)("div",{className:"form-group col-md-12",children:[(0,f.jsx)("label",{htmlFor:"g_map_url",children:"Google map Link"}),(0,f.jsx)("input",{type:"text",id:"g_map_url",className:"form-control",placeholder:"Paste Google map Link",onChange:function(e){return De(e.target.value)}}),(0,f.jsxs)("small",{children:["Go to Google map -",">"," search the place you want to add -",">",' click on "share" -',">",' click on "Embed a map" -',">"," Copy iframe code."]}),(0,f.jsx)("span",{className:"form_err",children:Br.g_map_url?Br.g_map_url:""})]})}),(0,f.jsx)(u.Z,{setProp_images:s,prop_images:t,oldImgLength:0}),(0,f.jsx)("span",{className:"form_err",children:Br.images?Br.images:""}),w?(0,f.jsx)("p",{className:"success_msge",children:"Property Added Successfully."}):(0,f.jsx)("div",{className:"mb-5",children:y?(0,f.jsx)("div",{className:"propLoader",children:"Wait..."}):(0,f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Property"})}),(0,f.jsx)("div",{className:"form-row",children:v&&v.map((function(e){return(0,f.jsx)("div",{className:"form_err",children:e.msg},e.msg)}))})]})]})]})})})}},9691:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(2791),n=t(6871),o=t(3504),s=t(6197),i=t(184);function l(){var e=(0,n.s0)(),r=(0,a.useContext)(s.S),t=(r.adm,r.dispadm);return(0,i.jsxs)("div",{className:"list-group",role:"tablist",children:[(0,i.jsx)(o.OL,{to:"/admindashboard",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Dashboard"}),(0,i.jsx)(o.OL,{to:"/addproperty",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Add Property"}),(0,i.jsx)(o.OL,{to:"/editproperty",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Edit Property"}),(0,i.jsx)(o.OL,{to:"/offered",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Offerd"}),(0,i.jsx)(o.OL,{to:"/inquiries",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Inquiries"}),(0,i.jsx)(o.OL,{to:"/contacts",className:"list-group-item list-group-item-action","data-toggle":"list",role:"tab",children:"Contacts"}),(0,i.jsx)("a",{onClick:function(){localStorage.removeItem("admin"),t({type:"USER",payload:!1}),e("/")},className:"list-group-item list-group-item-action cursor","data-toggle":"list",children:"Logout"})]})}},7918:function(e,r){r.Z=function(e){return!e.includes("<iframe")||!e.includes("www.google.com/maps")}},6275:function(e,r,t){t.d(r,{b:function(){return a},C:function(){return n}});var a=function(e){for(var r=e.split('"'),t=0;t<r.length;t++)if("https://www.youtube.com"==r[t].slice(0,23))return r[t];return!1},n=function(e){for(var r=e.split('"'),t=0;t<r.length;t++)if("https://www.google"==r[t].slice(0,18))return r[t];return!1}},432:function(e,r){r.Z=function(e){return!e.includes("<iframe")||!e.includes("www.youtube.com/embed")}}}]);
//# sourceMappingURL=168.fb4b971d.chunk.js.map