/*! For license information please see 723.f640b6eb.chunk.js.LICENSE.txt */
(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[723],{3734:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return R}});var t=r(5671),o=r(3144),i=r(136),u=r(516),s=r(2791),l=r(8687),a=r(2338),c=r(5987),f=r(4942),p=r(9439),g={selectedPage:"Paginator_selectedPage__ghZFe"},d=r(1694),h=r.n(d),v=r(184),y=function(e){for(var n=e.totalItemsCount,r=e.pageSize,t=e.currentPage,o=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,l=Math.ceil(n/r),a=[],c=1;c<=l;c++)a.push(c);var d=Math.ceil(l/u),y=(0,s.useState)(1),P=(0,p.Z)(y,2),w=P[0],j=P[1],x=(w-1)*u+1,m=w*u;return(0,v.jsxs)("div",{className:g.paginator,children:[w>1&&(0,v.jsx)("button",{onClick:function(){j(w-1)},children:"Back"}),a.filter((function(e){return e>=x&&e<=m})).map((function(e){return(0,v.jsxs)("span",{className:h()((0,f.Z)({},g.selectedPage,t===e),g.pageNumber),onClick:function(n){o(e)},children:[" ",e]},e)})),d>w&&(0,v.jsx)("button",{onClick:function(){j(w+1)},children:"Next"})]})},P="Users_userPhoto__1Q3+e",w=r.p+"static/media/user.a6143582309785dca610.png",j=r(1087),x=function(e){var n=e.user,r=e.followingInProgress,t=e.unfollow,o=e.follow,i=n;return(0,v.jsx)("div",{children:(0,v.jsxs)("div",{children:[(0,v.jsxs)("span",{children:[(0,v.jsx)("div",{children:(0,v.jsx)(j.OL,{to:"/profile/"+i.id,children:(0,v.jsx)("img",{src:null!=i.photos.small?i.photos.small:w,className:P})})}),(0,v.jsx)("div",{children:i.followed?(0,v.jsx)("button",{disabled:r.some((function(e){return e===i.id})),onClick:function(){t(i.id)},children:"Unfollow"}):(0,v.jsx)("button",{disabled:r.some((function(e){return e===i.id})),onClick:function(){o(i.id)},children:"Follow"})})]}),(0,v.jsxs)("span",{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:i.name}),(0,v.jsx)("div",{children:i.status})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:"u.location.country"}),(0,v.jsx)("div",{children:"u.location.city"})]})]})]},i.id)})},m=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],C=function(e){var n=e.currentPage,r=e.totalUsersCount,t=e.pageSize,o=e.onPageChanged,i=e.users,u=(0,c.Z)(e,m);return(0,v.jsxs)("div",{children:[(0,v.jsx)(y,{totalItemsCount:r,pageSize:t,currentPage:n,onPageChanged:o}),i.map((function(e){return(0,v.jsx)(x,{user:e,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow},e.id)}))]})},b=r(1628),S="NOT_FOUND";var k=function(e,n){return e===n};function z(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?k:t,i=r.maxSize,u=void 0===i?1:i,s=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),a=1===u?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:S},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return S}return{get:t,put:function(n,o){t(n)===S&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,l);function c(){var n=a.get(arguments);if(n===S){if(n=e.apply(null,arguments),s){var r=a.getEntries(),t=r.find((function(e){return s(e.value,n)}));t&&(n=t.value)}a.put(arguments,n)}return n}return c.clearCache=function(){return a.clear()},c}function O(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function U(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,u=0,s={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(s=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var a=s,c=a.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=O(t),d=e.apply(void 0,[function(){return u++,l.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=g.length,r=0;r<n;r++)e.push(g[r].apply(null,arguments));return i=d.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:d,dependencies:g,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return o}var Z=U(z),F=function(e){return e.usersPage.users},I=function(e){return e.usersPage.isFetching},_=Z(F,I,(function(e,n){return e.filter((function(e){return!0}))})),A=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalUsersCount},q=function(e){return e.usersPage.currentPage},E=function(e){return e.usersPage.followingInProgress},D=r(7781),M=function(e){(0,i.Z)(r,e);var n=(0,u.Z)(r);function r(){var e;(0,t.Z)(this,r);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(e=n.call.apply(n,[this].concat(i))).onPageChanged=function(n){e.props.requestUsers(n,e.props.pageSize)},e}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,r=e.pageSize;this.props.requestUsers(n,r)}},{key:"render",value:function(){return(0,v.jsxs)(v.Fragment,{children:[this.props.isFetching?(0,v.jsx)(b.Z,{}):null,(0,v.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),r}(s.Component),R=(0,D.qC)((0,l.$j)((function(e){return{users:_(e),pageSize:A(e),totalUsersCount:N(e),currentPage:q(e),isFetching:I(e),followingInProgress:E(e)}}),{follow:a.ZN,unfollow:a.fv,setUsers:a.HM,setCurrentPage:a.D4,toggleFollowingProgress:a.ZH,requestUsers:a.D7}))(M)},1694:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},5987:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(3366);function o(e,n){if(null==e)return{};var r,o,i=(0,t.Z)(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}}}]);
//# sourceMappingURL=723.f640b6eb.chunk.js.map