(this.webpackJsonpnews_searchify=this.webpackJsonpnews_searchify||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},65:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(33),a=c.n(n),r=(c(41),c(18)),i=c(4),o=(c(42),c.p+"static/media/lens.bbeb399a.svg"),l=c.p+"static/media/delete.d9cd9157.svg",j=c(0),d=function(e){var t=e.updateQuery,c=Object(s.useState)(""),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"search-header",children:Object(j.jsxs)("div",{className:"search-box",children:[Object(j.jsxs)("div",{className:"search-box-left",children:[Object(j.jsx)("img",{src:o,width:"20",alt:"img"}),Object(j.jsx)("input",{onKeyPress:function(e){console.log(1),""!==a.trim()&&"Enter"===e.key&&t(a)},onChange:function(e){return r(e.target.value)},value:a,className:"search-input-box",placeholder:"Search.."})]}),Object(j.jsx)("img",{src:l,onClick:function(e){return r("")},width:"18",className:"cursor-pointer",style:{paddingRight:"20px"},alt:"img"})]})})})},h=c(15),b=c.n(h),O=Object(s.createContext)(),m=function(e){var t=e.children,c=Object(s.useState)(null),n=Object(i.a)(c,2),a=n[0],r=n[1],o=Object(s.useState)([]),l=Object(i.a)(o,2),d=l[0],h=l[1];return Object(j.jsx)(O.Provider,{value:{queryState:[a,r],historyState:[d,h]},children:t})},x=c(34),u=c(11),v=c.n(u),f=c(16),p=function(e){var t=e.searchHit,c=e.fetchDetail;return Object(j.jsx)("div",{className:"search-card",children:Object(j.jsxs)(f.a,{className:"block cursor-pointer",onClick:function(){return c(t.objectID,t.num_comments)},children:[Object(j.jsxs)("div",{className:"search-card-title",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"search-card-label",children:"Title : "}),t.title]}),Object(j.jsx)("div",{children:v()(t.created_at).format("DD/MM/YYYY, hh:mm:ss")})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"search-card-label",children:"Ref : "}),Object(j.jsx)("div",{onClick:function(e){return c=e,s=t.url,c.stopPropagation(),void window.open(s,"_blank");var c,s},className:"search-card-link",children:t.url})]}),Object(j.jsxs)("div",{className:"search-card-footer",children:[Object(j.jsxs)("span",{children:["Author : ",t.author]}),Object(j.jsxs)("span",{style:{marginLeft:"2rem",textDecoration:"underline"},children:[" Comments: ",t.num_comments]})]})]})})},y=(c(65),function(e){var t=e.children,c=e.title,s=e.show,n=e.onClose;return Object(j.jsx)("div",{children:s?Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"flex justify-between border-bottom p-1_5",children:[Object(j.jsx)("div",{children:c}),Object(j.jsx)("div",{className:"cursor-pointer",onClick:n,children:" X "})]}),Object(j.jsx)("div",{className:"p-1 modal-content-view",children:t})]})}):Object(j.jsx)("div",{})})}),g=function e(t){var c=t.comments,n=t.root,a={fontSize:"12px",color:"gray",marginTop:"4px",marginLeft:"10px",cursor:"pointer"},r=Object(s.useState)(!0),o=Object(i.a)(r,2),l=o[0];o[1];return Object(j.jsx)("div",{children:c&&c.map((function(t,c){return Object(j.jsxs)("div",{className:"".concat(n?"border-bottom pt-1":""),children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{style:{fontWeight:"bold"},children:t.author}),Object(j.jsx)("div",{style:a,children:v()(t.created_at).format("DD/MM/YYYY, hh:mm:ss")})]}),Object(j.jsx)("div",{style:{fontSize:"14px"},dangerouslySetInnerHTML:{__html:t.text}})]}),Object(j.jsx)("div",{style:{marginLeft:"1rem",display:l?"block":"none"},children:Object(j.jsx)(e,{comments:t.children})})]},c)}))})},N=c(17),S=c.n(N),w=function(e){var t=e.id,c=Object(s.useState)({}),n=Object(i.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){console.log(t+" - mounting"),b.a.get("http://hn.algolia.com/api/v1/items/"+t).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[t]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{paddingBottom:"2rem"},children:[Object(j.jsx)("span",{children:"Title : "}),Object(j.jsx)("span",{style:{fontWeight:"bold"},children:a.title||Object(j.jsx)(S.a,{height:50})})]}),Object(j.jsxs)("div",{className:"search-card-footer border-bottom",style:{paddingBottom:"1rem"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{color:"gray"},children:"Author"}),Object(j.jsxs)("div",{children:[" ",a.author||Object(j.jsx)(S.a,{})]})]}),Object(j.jsxs)("div",{style:{marginLeft:"2rem"},children:[Object(j.jsx)("div",{style:{color:"gray"},children:"Type"}),Object(j.jsxs)("div",{children:[" ",a.type||Object(j.jsx)(S.a,{})]})]})]}),Object(j.jsx)(g,{comments:a.children,root:!0})]})},C=c.p+"static/media/scroll.1c32b784.gif",D=function(e){var t=e.searchHits,c=e.fetchMoreData,n=e.hasMore,a=Object(s.useState)(!1),r=Object(i.a)(a,2),o=r[0],l=r[1],d=Object(s.useState)(null),h=Object(i.a)(d,2),b=h[0],O=h[1],m=function(e){l(!0),O(e)};return Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)(y,{show:o,onClose:function(){return l(!1)},title:"Detail",children:Object(j.jsx)(w,{id:b})}),t&&t.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{dataLength:t.length,next:c,hasMore:!!n,loader:Object(j.jsx)("h4",{children:"Loading..."}),children:t&&t.map((function(e,t){return Object(j.jsx)("div",{style:{margin:"1rem"},children:Object(j.jsx)(p,{searchHit:e,fetchDetail:m})},t)}))}),Object(j.jsx)("img",{style:{position:"fixed",bottom:"5rem",right:"8rem",width:"50px"},alt:"img",src:C})]}):Object(j.jsx)("div",{className:"search-container",style:{marginTop:"4rem",textAlign:"center"},children:"No result founds"})]})},M=c(35),k=c.n(M),T=function(){var e=Object(s.useContext)(O),t=e.queryState,c=e.historyState,n=Object(i.a)(t,2),a=n[0],o=n[1],l=Object(i.a)(c,2),h=l[0],m=l[1],x=Object(s.useState)([]),u=Object(i.a)(x,2),v=u[0],f=u[1],p=Object(s.useState)({}),y=Object(i.a)(p,2),g=y[0],N=y[1],S=Object(s.useState)(!1),w=Object(i.a)(S,2),C=w[0],M=w[1];Object(s.useEffect)((function(){return function(){return o(null)}}),[o]),Object(s.useEffect)((function(){console.log(3),a&&""!==a.trim()&&(M(!0),T(a,!1))}),[a,o]);var T=function(e,t){console.log(4);var c={query:e,page:g.next?g.next:0,tags:"story"},s="http://hn.algolia.com/api/v1/search";b.a.get(s,{params:c}).then((function(e){t?f([].concat(Object(r.a)(v),Object(r.a)(e.data.hits))):(f(e.data.hits),m([{date:new Date,api:s,payload:c}].concat(Object(r.a)(h))));var n=e.data.page+1,a=e.data.nbPages>n;N({next:n,hasMore:a,hits:e.data.nbHits}),M(!1)})).catch((function(e){console.log(e),M(!1)}))};return Object(j.jsxs)("div",{children:[C?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(k.a,{type:"Bars",color:"#ff742a",height:70,width:70})}):Object(j.jsx)("div",{}),Object(j.jsx)(d,{updateQuery:function(e){console.log(2),o(e),N({})},hits:g.hits}),a&&""!==a.trim()?Object(j.jsx)(D,{searchHits:v,fetchMoreData:function(){T(a,!0)},hasMore:g.hasMore}):Object(j.jsx)("div",{className:"search-container",style:{textAlign:"center",marginTop:"5rem",color:"#6f6f6f"},children:"Give your query above and hit enter !"})]})},Y=(c(86),c(12)),L=(c(87),c(3)),_=function(){var e=Object(L.g)();console.log(e.pathname);var t=function(t){return e.pathname.includes(t)};return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("div",{className:"navbar-common navbard-title",children:[Object(j.jsx)("span",{style:{color:"#ff742a"},children:"Search"}),"ify"]}),Object(j.jsxs)("div",{className:"navbar-common",children:[Object(j.jsx)(Y.b,{to:"/home",className:"navbar-menu ".concat(t("home")?"navbar-menu-active":""),style:{marginRight:"3rem"},children:" Search "}),Object(j.jsx)(Y.b,{to:"/history",className:"navbar-menu ".concat(t("history")?"navbar-menu-active":""),children:" History "})]})]})},H=(c(94),function(e){var t=e.children,c=e.classes;return Object(j.jsx)("div",{className:"cards ".concat(c),children:t})}),B=function(){var e=Object(s.useContext)(O).historyState,t=Object(i.a)(e,1)[0];return Object(j.jsxs)(H,{classes:"histroy-container",children:[Object(j.jsx)("div",{className:"history-title histoyr-card",style:{width:"100%"},children:"Recent search history"}),Object(j.jsx)("div",{className:"histoyr-card",children:t&&t.length>0?t.map((function(e,t){return Object(j.jsx)(f.a,{className:"block cursor-pointer",children:Object(j.jsxs)("div",{className:"history-card-items",children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"history-type",children:"GET"}),Object(j.jsx)("span",{style:{marginLeft:"1rem"},children:e.api})]}),Object(j.jsx)("div",{style:{fontSize:"14px",color:"gray"},children:v()(e.date).format("DD/MM/YYYY, hh:mm:ss")})]}),Object(j.jsxs)("div",{style:{marginLeft:"3rem",display:"flex",justifyContent:"space-between"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{fontSize:"14px"},children:"Search :"}),Object(j.jsx)("span",{children:e.payload.query})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{fontSize:"14px"},children:"Tags :"}),Object(j.jsxs)("span",{children:[" [",e.payload.tags,"]"]})]})]})]},t)},t)})):Object(j.jsx)("div",{children:"No history found"})})]})},E=function(){return Object(j.jsx)(m,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(Y.a,{children:[Object(j.jsx)(_,{}),Object(j.jsx)("div",{style:{marginTop:"2rem"},children:Object(j.jsxs)(L.d,{children:[Object(j.jsx)(L.b,{exact:!0,path:"/home",component:T}),Object(j.jsx)(L.b,{exact:!0,path:"/history",component:B}),Object(j.jsx)(L.b,{path:"*",children:Object(j.jsx)(L.a,{to:"/home"})})]})})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};a.a.render(Object(j.jsx)(E,{}),document.getElementById("root")),P()}},[[95,1,2]]]);
//# sourceMappingURL=main.023aa21f.chunk.js.map