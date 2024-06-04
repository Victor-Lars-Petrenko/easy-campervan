"use strict";(self.webpackChunkeasy_campervan=self.webpackChunkeasy_campervan||[]).push([[375],{375:(e,t,a)=>{a.r(t),a.d(t,{default:()=>he});var s=a(43);const n="Button_btn__RBtNK",c="Button_primaryBtn__jLSNn",i="Button_submitBtn__Xtf41",r="Button_loadMoreBtn__bhrx+";var o=a(579);const l=e=>{let{type:t,text:a,btnStyle:s,onClick:l=null}=e,d=n;switch(s){case"loadMoreBtn":d+=" ".concat(r);break;case"submitBtn":d+=" ".concat(i);break;case"primaryBtn":d+=" ".concat(c)}return(0,o.jsx)("button",{type:t,className:d,onClick:l,children:a})},d="CustomInput_fieldset__Paapj",_="CustomInput_lagrerMargin__buoMM",u="CustomInput_legend__ITRvY",h="CustomInput_inputButtonList__ZJ5DB";const p=function(e){return"TV"===e||"AC"===e?e:"shower"===e?"Shower/WC":"fullyIntegrated"===e?"Fully Integrated":e.charAt(0).toUpperCase()+e.slice(1)};var m=a(676);const x="InputButton_inputButtonWrapper__mXwCM",j="InputButton_inputButton__LtE6Z",C="InputButton_inputIcon__OYTd+",g="InputButton_inputIconSpec__5RWEK",I="InputButton_inputIconType__saCZg",v="InputButton_inputBtnText__IJmNF",N=e=>{let{name:t,icon:a,type:s,isChecked:n,onChange:c}=e,i=C;return"AC"===a&&(i+=" ".concat(g)),"van"!==a&&"fullyIntegrated"!==a&&"alcove"!==a||(i+=" ".concat(g," ").concat(I)),(0,o.jsxs)("label",{className:x,children:[(0,o.jsx)("input",{className:j,name:t,type:s,value:a,checked:n===a,onChange:c}),(0,o.jsx)("svg",{className:i,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-").concat(a)})}),(0,o.jsx)("span",{className:v,children:p(a)})]})},b=e=>{let{text:t,inputType:a,inputName:s,iconArr:n,isChecked:c,handleChange:i}=e,r=d;return"radio"===a&&(r+=" ".concat(_)),(0,o.jsxs)("fieldset",{className:r,children:[(0,o.jsx)("legend",{className:u,children:t}),(0,o.jsx)("ul",{className:h,children:n.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)(N,{name:s,icon:e,type:a,isChecked:c,onChange:i})},"".concat(e,"CustomInput"))))})]})},y=["AC","automatic","kitchen","TV","shower"],w=["van","fullyIntegrated","alcove"],f="Filters_filtersForm__nNzlf",B="Filters_labelInputLocation__LK8YO",k="Filters_locationInputWrap__WSWt2",A="Filters_inputLocation__egllZ",L="Filters_inputIcon__JvrTj",T="Filters_filtersHeading__iz9W5",R=()=>{const[e,t]=(0,s.useState)({location:"",camperEquipment:"",camperType:""}),a=a=>{let{target:s}=a;const{name:n,value:c}=s;t({...e,[n]:c})};return(0,o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log(e)},className:f,children:[(0,o.jsx)("label",{className:B,htmlFor:"location-input",children:"Location"}),(0,o.jsxs)("div",{className:k,children:[(0,o.jsx)("input",{id:"location-input",type:"text",name:"location",placeholder:"City",onChange:a,className:A}),(0,o.jsx)("svg",{className:L,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-map-pin")})})]}),(0,o.jsx)("h4",{className:T,children:"Filters"}),(0,o.jsx)(b,{text:"Vehicle equipment",inputType:"checkbox",inputName:"camperEquipment",iconArr:y,isChecked:e.camperEquipment,handleChange:a}),(0,o.jsx)(b,{text:"Vehicle type",inputType:"radio",inputName:"camperType",iconArr:w,isChecked:e.camperType,handleChange:a}),(0,o.jsx)(l,{type:"submit",text:"Search",btnStyle:"submitBtn"})]})};var F=a(3);const S="CardList_cardList__AmB9m",H=e=>e.campers.items,W={cardHeading:"CardHeading_cardHeading__fF0qZ",cardHeadingRight:"CardHeading_cardHeadingRight__JqnNc",cardTitle:"CardHeading_cardTitle__X+4Zx",heartIcon:"CardHeading_heartIcon__BkqoJ",heartIconFavorite:"CardHeading_heartIconFavorite__WJQwZ"},q=e=>{let{name:t,price:a}=e;const s=W.heartIcon;return(0,o.jsxs)("div",{className:W.cardHeading,children:[(0,o.jsx)("h2",{className:W.cardTitle,children:t}),(0,o.jsxs)("div",{className:W.cardHeadingRight,children:[(0,o.jsx)("h2",{className:W.cardTile,children:"\u20ac".concat(a,".00")}),(0,o.jsx)("button",{type:"button",onClick:()=>{},children:(0,o.jsx)("svg",{className:s,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-heart")})})})]})]})},D="CardReviewsLocation_cardReviewsLocation__uaRyG",M="CardReviewsLocation_cardWrapper__k+aaw",Z="CardReviewsLocation_icon__xlLZX",V="CardReviewsLocation_starIcon__Xc6xg",J="CardReviewsLocation_locationIcon__vtDGe",z="CardReviewsLocation_cardText__0AO6+",E="CardReviewsLocation_cardReviewsText__tmdkB",K=e=>{let{rating:t,reviews:a,location:s}=e;const n="".concat(t," (").concat(a.length," ").concat(1===a.length?"Review":"Reviews",")"),c="".concat(s.split(", ").reverse().join(", "));return(0,o.jsxs)("div",{className:D,children:[(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("svg",{className:Z+" "+V,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-star")})}),(0,o.jsx)("h3",{className:z+" "+E,children:n})]}),(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("svg",{className:Z+" "+J,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-map-pin")})}),(0,o.jsx)("h3",{className:z,children:c})]})]})};const P=function(e,t){const a=[];return"short"===e?(t.adults>0&&a.push("".concat(t.adults," adults, adults")),"automatic"===t.transmission&&a.push("Automatic, automatic"),"petrol"===t.engine&&a.push("Petrol, petrol"),t.details.kitchen>0&&a.push("Kitchen, kitchen"),t.details.beds>0&&a.push("".concat(t.details.beds," beds, beds")),t.details.airConditioner>0&&a.push("AC, AC"),a):(t.adults>0&&a.push("".concat(t.adults," adults, adults")),"automatic"===t.transmission&&a.push("Automatic, automatic"),t.details.airConditioner>0&&a.push("AC, AC"),"petrol"===t.engine&&a.push("Petrol, petrol"),t.details.kitchen>0&&a.push("kitchen, kitchen"),t.details.beds>0&&a.push("".concat(t.details.beds," beds, beds")),t.details.airConditioner>0&&a.push("".concat(t.details.airConditioner," air conditioner, airConditioner")),t.details.CD>0&&a.push("CD, CD"),t.details.radio>0&&a.push("Radio, radio"),t.details.hob>0&&a.push("".concat(t.details.hob," hob, hob")),t.details.toilet>0&&a.push("Toilet, toilet"),t.details.shower>0&&a.push("Shower, shower"),t.details.freezer>0&&a.push("Freezer, freezer"),t.details.gas&&a.push("Gas, gas"),t.details.water&&a.push("Water, water"),t.details.microwave>0&&a.push("Microwave, microwave"),a)},X="InfoIconsList_list__DPM9q",Y="InfoIconItem_item__5LBny",G="InfoIconItem_icon__2g1eg",O="InfoIconItem_weirdIcon__GwYDc",Q="InfoIconItem_text__jI4ih",U=e=>{let{detail:t}=e;const[a,s]=t.split(", ");let n=G;return["adults","AC","petrol","toilet","gas"].includes(s)&&(n+=" ".concat(O)),(0,o.jsxs)("li",{className:Y,children:[(0,o.jsx)("svg",{className:n,children:(0,o.jsx)("use",{href:"".concat(m.A,"#icon-").concat(s)})}),(0,o.jsx)("span",{className:Q,children:a})]})},$=e=>{let{listVariant:t,card:a}=e;const s=P(t,a);return(0,o.jsx)("ul",{className:X,children:s.map((e=>(0,o.jsx)(U,{detail:e},a._id+t+e)))})},ee="CardItem_cardItem__5aoSm",te="CardItem_imageContainer__A17x3",ae="CardItem_cardPicture__ekg8D",se="CardItem_cardInfo__M94jW",ne="CardItem_cardInfoHeading__2qmfv",ce="CardItem_descrWrap__AjVQI",ie="CardItem_cardDescription__jxb0K",re=e=>{let{card:t}=e;return(0,o.jsxs)("div",{className:ee,children:[(0,o.jsx)("div",{className:te,children:(0,o.jsx)("img",{alt:t.name,className:ae,src:t.gallery[0]})}),(0,o.jsxs)("div",{className:se,children:[(0,o.jsxs)("div",{className:ne,children:[(0,o.jsx)(q,{name:t.name,price:t.price}),(0,o.jsx)(K,{rating:t.rating,reviews:t.reviews,location:t.location})]}),(0,o.jsx)("div",{className:ce,children:(0,o.jsx)("p",{className:ie,children:t.description})}),(0,o.jsx)($,{listVariant:"short",card:t}),(0,o.jsx)(l,{type:"button",text:"Show more",btnStyle:"primaryBtn"})]})]})},oe=()=>{const e=(0,F.d4)(H);return(0,o.jsx)("ul",{className:S,children:e.map((e=>(0,o.jsx)("li",{children:(0,o.jsx)(re,{card:e})},e._id)))})},le=()=>(0,o.jsx)(l,{type:"button",text:"Load more",btnStyle:"loadMoreBtn"}),de="Cards_cards__YCpqn",_e=()=>(0,o.jsxs)("div",{className:de,children:[(0,o.jsx)(oe,{}),(0,o.jsx)(le,{})]}),ue="Catalog_catalog__7Z2yq",he=()=>(0,o.jsxs)("section",{className:ue,children:[(0,o.jsx)(R,{}),(0,o.jsx)(_e,{})]})}}]);
//# sourceMappingURL=375.4f011982.chunk.js.map