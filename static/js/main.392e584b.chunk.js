(this["webpackJsonpsnap-shot"]=this["webpackJsonpsnap-shot"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),s=n.n(r),a=(n(29),n(30),n(6)),o=n(4),u="SEARCH",j="SEARCH_SUCCESS",l="SEARCH_FAIL",d=n(22),b=n.n(d),h=function(e,t){return new Promise((function(n,c){b.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("e2a8bfb2621986d629046a4bab787702","&tags=").concat(e,"&page=").concat(t,"&per_page=25&format=json&nojsoncallback=1")).then((function(e){n(e.data.photos.photo)})).catch((function(e){console.log("Encountered an error with fetching and parsing data",e),c(e)}))}))},g=function(e,t,n){return function(c){c(f(n)),h(e,t,n).then((function(i){return c(O(i,e,t,n))})).catch((function(e){return c(m(e))}))}},f=function(e){return{type:u,isNew:e}},O=function(e,t,n,c){return{type:j,img:e,queryString:t,page:n,isNew:c}},m=function(e){return{type:l,err:e}},p=(n(55),n(0));var x=Object(o.b)(null,(function(e){return{search:function(t,n,c){e(g(t,n,c))}}}))((function(e){var t=e.search,n=["Mountain","Fish","Beaches","Food","Girl"];return Object(c.useEffect)((function(){t(n[0],1,!0)})),Object(p.jsx)("ul",{children:n.map((function(e,n){return Object(p.jsx)("li",{onClick:function(){return function(e){t(e,1,!0)}(e)},children:e},n)}))})}));var v=Object(o.b)(null,(function(e){return{search:function(t,n,c){e(g(t,n,c))}}}))((function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsx)("h1",{children:"SnapShot"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.search(i,1,!0)},className:"form-main",children:[Object(p.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){r(e.target.value)}}),Object(p.jsx)("button",{type:"submit",disabled:""===i,children:"Search"})]}),Object(p.jsx)("div",{className:"nav",children:Object(p.jsx)(x,{})})]})})),w=n(12),N=n.n(w),S=n(23),y=(n(58),function(e){return"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_b.jpg")}),R=function(e){return Object(p.jsxs)("div",{className:"popup-container",children:[Object(p.jsx)("img",{src:y(e.img),alt:e.img.title}),Object(p.jsx)("p",{children:""===e.img.title?"No title":e.img.title}),Object(p.jsx)("button",{type:"button",onClick:function(){return e.setIsShow(!1)}})]})};n(59);function k(e){return Object(p.jsx)("button",{disabled:e.disabled,type:"button",className:"button",onClick:function(){return e.handle()},children:e.name})}function C(e){return Object(p.jsxs)("li",{onClick:function(){return e.handleClick(e.img)},children:[Object(p.jsx)("img",{src:y(e.img),alt:e.img.title}),Object(p.jsx)("p",{children:""===e.img.title?"No Title":e.img.title})]},e.img.key)}n(60);function L(){return Object(p.jsx)("div",{className:"loading",children:Object(p.jsxs)("div",{className:"circ",children:[Object(p.jsx)("div",{className:"load",children:"Loading . . . "}),Object(p.jsx)("div",{className:"hands"}),Object(p.jsx)("div",{className:"body"}),Object(p.jsx)("div",{className:"head",children:Object(p.jsx)("div",{className:"eye"})})]})})}var E=n.p+"static/media/preview.82a49843.jpg";n(61);function F(){return Object(p.jsxs)("div",{className:"nothing",children:[Object(p.jsx)("img",{src:E,alt:"Nothing..."}),Object(p.jsx)("h2",{children:"oops! nothing found"}),Object(p.jsx)("p",{children:"Please try something else !"})]})}var I=n.p+"static/media/something-went-wrong.0b7d80f7.gif";function P(){return Object(p.jsx)("img",{width:"35%",src:I,alt:"Some thing error"})}var T=Object(o.b)((function(e){return{stateImg:e.searchReducer.image,tags:e.searchReducer.tags,page:e.searchReducer.page,noResult:e.searchReducer.noResult,isLoading:e.searchReducer.isLoading,isNew:e.searchReducer.isNew,error:e.searchReducer.error}}),(function(e){return{showMore:function(t,n,c){e(g(t,n,!1))}}}))((function(e){var t=e.stateImg,n=e.tags,i=e.page,r=e.showMore,s=e.noResult,o=e.isLoading,u=e.isNew,j=e.error,l=Object(c.useState)(!1),d=Object(a.a)(l,2),b=d[0],h=d[1],g=Object(c.useState)(),f=Object(a.a)(g,2),O=f[0],m=f[1],x=Object(c.useState)(i),v=Object(a.a)(x,2),w=v[0],y=v[1];Object(c.useEffect)((function(){y(i)}),[i]);var E=function(e){m(e),h(!0)};function I(){return(I=Object(S.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.scrollTo(0,0),w!==t.length){e.next=6;break}return e.next=4,r(n,i+1);case 4:e.next=7;break;case 6:y(w+1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o?(u&&1!==w&&y(1),Object(p.jsx)(L,{})):s?Object(p.jsx)(F,{}):j?Object(p.jsx)(P,{}):Object(p.jsxs)("div",{children:[b?Object(p.jsx)(R,{img:O,setIsShow:h}):"",Object(p.jsxs)("div",{className:"show-img",children:[Object(p.jsx)("h2",{children:null===n?"":n+" Picture"}),Object(p.jsx)("ul",{children:0===t.length?"":t[w-1].map((function(e){return Object(p.jsx)(C,{handleClick:E,img:e})}))}),i>=1&&0!==t.length?Object(p.jsxs)("div",{className:"nav-btn",children:[Object(p.jsx)(k,{disabled:1===w,handle:function(){window.scrollTo(0,0),y(w-1)},name:"PREV"}),Object(p.jsx)(k,{disabled:0===t[w-1].length,handle:function(){return I.apply(this,arguments)},name:"NEXT"})]}):""]})]})}));var _=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(v,{}),Object(p.jsx)(T,{})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},M=n(5),q=n(3),B={image:[],isLoading:!1,error:null,tags:null,page:1,isNew:!1,noResult:!1};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(q.a)(Object(q.a)({},e),{},{isNew:t.isNew,isLoading:!0});case j:return 0===t.img.length?(e.page=t.isNew?1:t.page,Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,noResult:!0,error:!1})):!0===t.isNew?(e.image=e.image.filter((function(){return!1})),e.image.push(t.img),Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,tags:t.queryString,page:t.page,isNew:t.isNew,noResult:!1,error:!1})):(e.image.push(t.img),Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,tags:t.queryString,page:t.page,isNew:!1,error:!1}));case l:return Object(q.a)(Object(q.a)({},e),{},{isLoading:!1,error:!0});default:return Object(q.a)({},e)}},D=Object(M.c)({searchReducer:H}),J=n(24),G=Object(M.d)(D,Object(M.a)(J.a));s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{store:G,children:Object(p.jsx)(_,{})})}),document.getElementById("root")),A()}},[[62,1,2]]]);
//# sourceMappingURL=main.392e584b.chunk.js.map