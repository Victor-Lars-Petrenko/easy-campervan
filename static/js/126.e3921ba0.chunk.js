"use strict";(self.webpackChunkeasy_campervan=self.webpackChunkeasy_campervan||[]).push([[126],{6870:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var a=n(3003),c=n(2099),s=n(4677);const r=e=>e.filter,o=(0,c.Mz)([r,s.Y5],((e,t)=>{const{location:n,camperEquipment:a,camperType:c}=e;let s=t;const r=n.trim().toLowerCase();return r&&(s=s.filter((e=>e.location.toLowerCase().includes(r)))),a.length>0&&(s=s.filter((e=>{let{transmission:t,details:{airConditioner:n,kitchen:c,TV:s,bathroom:r,toilet:o}}=e;return!(a.AC&&n<1)&&((!a.automatic||"automatic"===t)&&(!(a.kitchen&&c<1)&&(!(a.TV&&s<1)&&!(a.shower&&r<1&&o<1))))}))),c&&(s=s.filter((e=>e.form===c))),s}));var i=n(5043),l=n(2004);const u="CustomInput_fieldset__Paapj",p="CustomInput_lagrerMargin__buoMM",_="CustomInput_legend__ITRvY",h="CustomInput_inputButtonList__ZJ5DB";const m=function(e){return"TV"===e||"AC"===e?e:"shower"===e?"Shower/WC":"fullyIntegrated"===e?"Fully Integrated":e.charAt(0).toUpperCase()+e.slice(1)};var d=n(3676);const x="InputButton_inputButtonWrapper__mXwCM",g="InputButton_activeButtonWrapper__2kYsI",C="InputButton_inputButton__LtE6Z",j="InputButton_inputIcon__OYTd+",y="InputButton_inputIconSpec__5RWEK",I="InputButton_inputIconType__saCZg",f="InputButton_inputBtnText__IJmNF";var v=n(579);const N=e=>{let{name:t,icon:n,type:a,checkedArr:c,onChange:s}=e,r=j;"AC"===n&&(r+=" ".concat(y)),"van"!==n&&"fullyIntegrated"!==n&&"alcove"!==n||(r+=" ".concat(y," ").concat(I));let o=x;c.includes(n)&&(o+=" ".concat(g));const i=c.includes(n);return(0,v.jsxs)("label",{className:o,children:[(0,v.jsx)("input",{className:C,name:t,type:a,value:n,checked:i,onChange:s}),(0,v.jsx)("svg",{className:r,children:(0,v.jsx)("use",{href:"".concat(d.A,"#icon-").concat(n)})}),(0,v.jsx)("span",{className:f,children:m(n)})]})},A=e=>{let{text:t,inputType:n,inputName:a,iconArr:c,checkedArr:s,handleChange:r}=e,o=u;return"radio"===n&&(o+=" ".concat(p)),(0,v.jsxs)("fieldset",{className:o,children:[(0,v.jsx)("legend",{className:_,children:t}),(0,v.jsx)("ul",{className:h,children:c.map((e=>(0,v.jsx)("li",{children:(0,v.jsx)(N,{name:a,icon:e,type:n,checkedArr:s,onChange:r})},"".concat(e,"CustomInput"))))})]})},k=["AC","automatic","kitchen","TV","shower"],T=["van","fullyIntegrated","alcove"];var B=n(2606);const b="Filters_filtersForm__nNzlf",w="Filters_labelInputLocation__LK8YO",F="Filters_locationInputWrap__WSWt2",W="Filters_inputLocation__egllZ",L="Filters_inputIcon__JvrTj",q="Filters_filtersHeading__iz9W5",S=()=>{const[e,t]=(0,i.useState)({location:"",camperEquipment:[],camperType:""}),n=(0,a.wA)(),c=n=>{let{target:a}=n;const{name:c,value:s,type:r,checked:o}=a;t("checkbox"===r?e=>{const t=o?[...e[c],s]:e[c].filter((e=>e!==s));return{...e,[c]:t}}:{...e,[c]:s})};return(0,v.jsxs)("form",{onSubmit:t=>{t.preventDefault(),n((0,B.R)(e))},className:b,children:[(0,v.jsx)("label",{className:w,htmlFor:"location-input",children:"Location"}),(0,v.jsxs)("div",{className:F,children:[(0,v.jsx)("input",{id:"location-input",type:"text",name:"location",placeholder:"City",onChange:c,className:W}),(0,v.jsx)("svg",{className:L,children:(0,v.jsx)("use",{href:"".concat(d.A,"#icon-map-pin")})})]}),(0,v.jsx)("h4",{className:q,children:"Filters"}),(0,v.jsx)(A,{text:"Vehicle equipment",inputType:"checkbox",inputName:"camperEquipment",iconArr:k,checkedArr:e.camperEquipment,handleChange:c}),(0,v.jsx)(A,{text:"Vehicle type",inputType:"radio",inputName:"camperType",iconArr:T,checkedArr:e.camperType,handleChange:c}),(0,v.jsx)(l.A,{type:"submit",text:"Search",btnStyle:"submitBtn"})]})};var E=n(2608);const V="Catalog_catalog__7Z2yq",M="Catalog_nothingWrap__PghRP",Y="Catalog_nothingText__Brtdx",Z=()=>{const e=(0,a.d4)(o);return(0,v.jsxs)("section",{className:V,children:[(0,v.jsx)(S,{}),0!==e.length&&(0,v.jsx)(E.A,{cardsArr:e}),0===e.length&&(0,v.jsx)("div",{className:M,children:(0,v.jsx)("p",{className:Y,children:"Nothing was found for your request"})})]})}}}]);
//# sourceMappingURL=126.e3921ba0.chunk.js.map