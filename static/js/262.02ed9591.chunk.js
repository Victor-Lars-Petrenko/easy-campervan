"use strict";(self.webpackChunkeasy_campervan=self.webpackChunkeasy_campervan||[]).push([[262],{623:(e,t,a)=>{a.d(t,{A:()=>o});const s="Button_btn__RBtNK",c="Button_primaryBtn__jLSNn",r="Button_submitBtn__Xtf41",n="Button_loadMoreBtn__bhrx+";var i=a(579);const o=e=>{let{type:t,text:a,btnStyle:o,onClick:d=null}=e,l=s;switch(o){case"loadMoreBtn":l+=" ".concat(n);break;case"submitBtn":l+=" ".concat(r);break;case"primaryBtn":l+=" ".concat(c)}return(0,i.jsx)("button",{type:t,className:l,onClick:d,children:a})}},927:(e,t,a)=>{a.d(t,{A:()=>E});const s="CardList_cardList__AmB9m";var c=a(43),r=a(3),n=a(548),i=a(905),o=a(676);const d={cardHeading:"CardHeading_cardHeading__fF0qZ",cardHeadingRight:"CardHeading_cardHeadingRight__JqnNc",cardTitle:"CardHeading_cardTitle__X+4Zx",heartIcon:"CardHeading_heartIcon__BkqoJ",heartIconFavorite:"CardHeading_heartIconFavorite__WJQwZ"};var l=a(579);const _=e=>{let{id:t,name:a,price:s}=e;const c=(0,r.wA)(),_=(0,i.m6)(),h=(0,r.d4)((e=>_(e,t)))?"".concat(d.heartIcon," ").concat(d.heartIconFavorite):d.heartIcon;return(0,l.jsxs)("div",{className:d.cardHeading,children:[(0,l.jsx)("h2",{className:d.cardTitle,children:a}),(0,l.jsxs)("div",{className:d.cardHeadingRight,children:[(0,l.jsx)("h2",{className:d.cardTile,children:"\u20ac".concat(s,".00")}),(0,l.jsx)("button",{type:"button",onClick:()=>{c((0,n.d)(t))},children:(0,l.jsx)("svg",{className:h,children:(0,l.jsx)("use",{href:"".concat(o.A,"#icon-heart")})})})]})]})},h="CardReviewsLocation_cardReviewsLocation__uaRyG",u="CardReviewsLocation_cardWrapper__k+aaw",m="CardReviewsLocation_icon__xlLZX",p="CardReviewsLocation_starIcon__Xc6xg",v="CardReviewsLocation_locationIcon__vtDGe",x="CardReviewsLocation_cardText__0AO6+",j="CardReviewsLocation_cardReviewsText__tmdkB",C=e=>{let{rating:t,reviews:a,location:s}=e;const c="".concat(t," (").concat(a.length," ").concat(1===a.length?"Review":"Reviews",")"),r="".concat(s.split(", ").reverse().join(", "));return(0,l.jsxs)("div",{className:h,children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("svg",{className:m+" "+p,children:(0,l.jsx)("use",{href:"".concat(o.A,"#icon-star")})}),(0,l.jsx)("h3",{className:x+" "+j,children:c})]}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("svg",{className:m+" "+v,children:(0,l.jsx)("use",{href:"".concat(o.A,"#icon-map-pin")})}),(0,l.jsx)("h3",{className:x,children:r})]})]})};const g=function(e,t){const a=[];return"short"===e?(t.adults>0&&a.push("".concat(t.adults," adults, adults")),"automatic"===t.transmission&&a.push("Automatic, automatic"),"petrol"===t.engine&&a.push("Petrol, petrol"),t.details.kitchen>0&&a.push("Kitchen, kitchen"),t.details.beds>0&&a.push("".concat(t.details.beds," beds, beds")),t.details.airConditioner>0&&a.push("AC, AC"),a):(t.adults>0&&a.push("".concat(t.adults," adults, adults")),"automatic"===t.transmission&&a.push("Automatic, automatic"),t.details.airConditioner>0&&a.push("AC, AC"),"petrol"===t.engine&&a.push("Petrol, petrol"),t.details.kitchen>0&&a.push("kitchen, kitchen"),t.details.beds>0&&a.push("".concat(t.details.beds," beds, beds")),t.details.airConditioner>0&&a.push("".concat(t.details.airConditioner," air conditioner, airConditioner")),t.details.CD>0&&a.push("CD, CD"),t.details.radio>0&&a.push("Radio, radio"),t.details.hob>0&&a.push("".concat(t.details.hob," hob, hob")),t.details.toilet>0&&a.push("Toilet, toilet"),t.details.shower>0&&a.push("Shower, shower"),t.details.freezer>0&&a.push("Freezer, freezer"),t.details.gas&&a.push("Gas, gas"),t.details.water&&a.push("Water, water"),t.details.microwave>0&&a.push("Microwave, microwave"),a)},w="InfoIconsList_list__DPM9q",I="InfoIconItem_item__5LBny",b="InfoIconItem_icon__2g1eg",N="InfoIconItem_weirdIcon__GwYDc",f="InfoIconItem_text__jI4ih",y=e=>{let{detail:t}=e;const[a,s]=t.split(", ");let c=b;return["adults","AC","petrol","toilet","gas"].includes(s)&&(c+=" ".concat(N)),(0,l.jsxs)("li",{className:I,children:[(0,l.jsx)("svg",{className:c,children:(0,l.jsx)("use",{href:"".concat(o.A,"#icon-").concat(s)})}),(0,l.jsx)("span",{className:f,children:a})]})},k=e=>{let{listVariant:t,card:a}=e;const s=g(t,a);return(0,l.jsx)("ul",{className:w,children:s.map((e=>(0,l.jsx)(y,{detail:e},a._id+t+e)))})};var A=a(623);const L="CardItem_cardItem__5aoSm",R="CardItem_imageContainer__A17x3",B="CardItem_cardPicture__ekg8D",H="CardItem_cardInfo__M94jW",M="CardItem_cardInfoHeading__2qmfv",T="CardItem_descrWrap__AjVQI",F="CardItem_cardDescription__jxb0K";var D=a(950);const S=e=>{let{close:t,children:a}=e;const s=(0,c.useCallback)((e=>{e.target!==e.currentTarget&&"Escape"!==e.code||t()}),[t]);(0,c.useEffect)((()=>{document.addEventListener("keydown",s);const e=window.scrollY;return document.body.style.position="fixed",document.body.style.top="-".concat(e,"px"),()=>{document.removeEventListener("keydown",s);const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}}),[s]);const r=document.querySelector("#modal-root");return(0,D.createPortal)((0,l.jsx)("div",{onClick:s,children:(0,l.jsx)("div",{children:a})}),r)},W=e=>{let{card:t}=e;const[a,s]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:L,children:[(0,l.jsx)("div",{className:R,children:(0,l.jsx)("img",{alt:t.name,className:B,src:t.gallery[0]})}),(0,l.jsxs)("div",{className:H,children:[(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)(_,{id:t._id,name:t.name,price:t.price}),(0,l.jsx)(C,{rating:t.rating,reviews:t.reviews,location:t.location})]}),(0,l.jsx)("div",{className:T,children:(0,l.jsx)("p",{className:F,children:t.description})}),(0,l.jsx)(k,{listVariant:"short",card:t}),(0,l.jsx)(A.A,{type:"button",text:"Show more",btnStyle:"primaryBtn",onClick:()=>{s(!0)}})]})]}),a&&(0,l.jsx)(S,{close:()=>s(!1),children:"Hello World"})]})},q=e=>{let{cardsArr:t}=e;return(0,l.jsx)("ul",{className:s,children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsx)(W,{card:e})},e._id)))})},z="Cards_cards__YCpqn",E=e=>{let{cardsArr:t}=e;return(0,l.jsxs)("div",{className:z,children:[(0,l.jsx)(q,{cardsArr:t}),(0,l.jsx)(A.A,{type:"button",text:"Load more",btnStyle:"loadMoreBtn",onClick:null})]})}},262:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var s=a(3),c=a(905),r=a(927);const n="Favorites_favorites__Tfwr1",i="Favorites_favTextWrapper__ukL-5",o="Favorites_favText__gDMZ7",d="Favorites_cardsWrap__-xlRM";var l=a(579);const _=()=>{const e=(0,s.d4)(c.Mp);return(0,l.jsxs)("section",{className:n,children:[(0,l.jsx)("div",{className:i,children:(0,l.jsx)("p",{className:o,children:"Enjoy your favourite Campervans"})}),(0,l.jsx)("div",{className:d,children:(0,l.jsx)(r.A,{cardsArr:e})})]})}},677:(e,t,a)=>{a.d(t,{Y5:()=>s});const s=e=>e.campers.items},905:(e,t,a)=>{a.d(t,{Mp:()=>n,m6:()=>i});var s=a(99),c=a(677);const r=e=>e.favorites.favoriteIds,n=(0,s.Mz)([r,c.Y5],((e,t)=>t.filter((t=>{let{_id:a}=t;return e.includes(a)})))),i=()=>(0,s.Mz)([r,(e,t)=>t],((e,t)=>e.includes(t)))}}]);
//# sourceMappingURL=262.02ed9591.chunk.js.map