(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71),c=n.n(o),l=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,148)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)})},i=n(7),u=n(147),s=n(156),d=n(56),h=n(3),m=n(159),f=n(160),p=n(162),y=n(163),g=n(164),v=n(165),E=n(152),b=n(18),O={selectedCountry:"Egypt",updateCountry:function(e){},selectedCamp:"",updateCamp:function(e,t){},selectedSchool:"",updateSchool:function(e,t){},themeMode:"light",updateTheme:function(e){},loading:!1,updateLoading:function(e){}},j=function(e,t){var n=t.type,a=t.payload;switch(n){case"UPDATE_COUNTRY":return Object(b.a)({},e,{selectedCountry:a.country});case"UPDATE_CAMP":return Object(b.a)({},e,{selectedCamp:a.camp});case"UPDATE_SCHOOL":return Object(b.a)({},e,{selectedSchool:a.school});case"UPDATE_THEME":return Object(b.a)({},e,{themeMode:a.themeMode});case"UPDATE_LOADING":return Object(b.a)({},e,{loading:a.loading});default:throw new Error("".concat(n," is not a valid reducer type"))}},w=Object(a.createContext)(O),x=function(e){var t=e.children,n=Object(a.useReducer)(j,O),o=Object(i.a)(n,2),c=o[0],l=o[1];return r.a.createElement(w.Provider,{value:{selectedCountry:c.selectedCountry,selectedSchool:c.selectedSchool,selectedCamp:c.selectedCamp,updateSchool:function(e){l({type:"UPDATE_SCHOOL",payload:Object(b.a)({},c,{school:e})})},updateCamp:function(e){l({type:"UPDATE_CAMP",payload:Object(b.a)({},c,{camp:e})})},updateCountry:function(e){l({type:"UPDATE_COUNTRY",payload:Object(b.a)({},c,{country:e})})},themeMode:c.themeMode,updateTheme:function(e){l({type:"UPDATE_THEME",payload:Object(b.a)({},c,{themeMode:e})})},loading:c.loading,updateLoading:function(e){l({type:"UPDATE_LOADING",payload:Object(b.a)({},c,{loading:e})})}}},t)},C=(Object(a.createContext)({themeMode:"dark",setThemeMode:function(e){}}),function(){var e=Object(a.useContext)(w),t=e.themeMode,n=e.updateTheme;return r.a.createElement(m.a,{sx:{flexGrow:1}},r.a.createElement(f.a,{className:"app-bar",position:"static",sx:{backgroundColor:"#3e3e3e",marginBottom:"1em"}},r.a.createElement(p.a,null,r.a.createElement(y.a,{variant:"h6",component:"div","data-testid":"app-bar-title",sx:{flexGrow:1}},"Number Of Lessons"),r.a.createElement(g.a,null,r.a.createElement(v.a,{control:r.a.createElement(E.a,{defaultChecked:!0,onChange:function(e){n(e.target.checked?"light":"dark")},"aria-label":"login switch"}),label:"dark"==t?"Dark":"Light"})))))}),L=function(){return r.a.createElement(s.a,{className:"section-container",sx:{flexGrow:1},container:!0,spacing:4},r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(q,null)),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(B,null)),r.a.createElement(s.a,{item:!0,xs:4},r.a.createElement(Y,null)))},S=function(){return r.a.createElement(s.a,{className:"section-container",container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:11},r.a.createElement(U,null)))},k=n(31),T=n(75),P=n(30),_={dataURL:"https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json"};function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function i(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),c=new w(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return C()}for(n.method=r,n.arg=o;;){var c=n.delegate;if(c){var l=b(c,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var i=u(e,t,n);if("normal"===i.type){if(a=n.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(a="completed",n.method="throw",n.arg=i.arg)}}}(e,n,c),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var s={};function d(){}function h(){}function m(){}var f={};l(f,r,function(){return this});var p=Object.getPrototypeOf,y=p&&p(p(x([])));y&&y!==t&&n.call(y,r)&&(f=y);var g=m.prototype=d.prototype=Object.create(f);function v(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(r,o){function c(){return new t(function(a,c){!function a(r,o,c,l){var i=u(e[r],e,o);if("throw"!==i.type){var s=i.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then(function(e){a("next",e,c,l)},function(e){a("throw",e,c,l)}):t.resolve(d).then(function(e){s.value=e,c(s)},function(e){return a("throw",e,c,l)})}l(i.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=m,l(g,"constructor",m),l(m,"constructor",h),h.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var c=new E(i(t,n,a,r),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},v(g),l(g,c,"Generator"),l(g,r,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=x,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return c.type="throw",c.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),i=n.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var M=function(e,t){return e.filter(function(n,a){return a===e.findIndex(function(e){return n[t]===e[t]})})},N=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(),c=Object(i.a)(o,2),l=c[0],u=c[1],s=function(){var e=Object(P.a)(A().mark(function e(){var t,a;return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(_.dataURL);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(Object(b.a)({},n,{allData:a,countries:M(a,"country"),camps:M(a,"camp"),schools:M(a,"school")})),e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",u(e.t0));case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){s()},[]),{data:n,error:l}},D=n(12),F=function(e){var t=["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=[];return e.forEach(function(e){var a=Array(2).fill("#".concat(Math.floor(16777215*Math.random()).toString(16))),r=Array.from(Array(12).fill(0));r[t.indexOf(e.month)]=e.lessons,n.push({label:e.school,data:r,backgroundColor:a,borderWidth:"2",borderColor:a[0],tension:.2,spanGaps:!0,pointHitRadius:"2",pointRadius:"2"})}),n},I=function(e,t,n,a){var r=function(e,t){var n=new Map(e.map(function(e){return[e[t],e]})).values();return Object(D.a)(n)}(e.filter(function(e){var r=!0;return""!==t&&(r=e.country===t),""!==n&&(r=e.camp===n),""!==a&&"all"!==a&&(r=e.school===a),r}),"school");return F(r)},G=function(){var e=Object(a.useState)(function(){var e=localStorage.getItem("chart-data");return null!==e?JSON.parse(e):n}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){void 0!==typeof window&&setTimeout(function(){localStorage.setItem("chart-data",JSON.stringify(n||{}))},500)},[n]),[n,r]};k.d.register(k.c,k.i,k.k,k.h,k.o,k.p,k.f);var U=function(){var e=G(),t=Object(i.a)(e,1)[0],n=Object(h.l)(),o=N(),c=o.data,l=o.error,u=Object(a.useContext)(w),s=u.selectedCountry,d=u.updateCountry,m=u.selectedCamp,f=u.updateCamp,p=u.selectedSchool,y=u.updateSchool,g=Object(a.useState)({labels:["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[]}),v=Object(i.a)(g,2),E=v[0],O=v[1];Object(a.useEffect)(function(){var e=Object.keys(c).length?I(c.allData,s,m,p):[];O(Object(b.a)({},E,{datasets:e}))},[s,m,p,c]),Object(a.useMemo)(function(){Object.keys(t).length&&(Object(t).hasOwnProperty("country")&&""!==t.country&&d(t.country),Object(t).hasOwnProperty("camp")&&""!==t.camp&&f(t.camp,!1),Object(t).hasOwnProperty("school")&&""!==t.country&&y(t.school,!1))},[]);var j=r.a.createElement(T.a,{"data-testid":"line-chart-container",data:E,options:{onClick:function(e,t){if(t.length){var a=t[0].datasetIndex,r=E.datasets[a];y(r.label,!1),n("/details")}},plugins:{title:{display:!0,text:"Click to toggle schools"},legend:{display:!0,position:"right",labels:{usePointStyle:!0}}}}});return l||c.length<1?'<span data-testid="error-container"><Error '.concat(l||"Invalid Data, Chart Data Is Empty","/span>"):j},J=n(153),R=n(154),H=n(149),W=n(151),Y=function(){var e=G(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=N(),l=c.data,u=c.error,s=l.schools,d=Object(a.useContext)(w),h=d.selectedSchool,m=d.updateSchool;return r.a.createElement(r.a.Fragment,null,!s||u?r.a.createElement("div",null,"Loading"):r.a.createElement(J.a,{fullWidth:!0},r.a.createElement(R.a,{id:"demo-simple-select-label"},"Select School"),r.a.createElement(H.a,{labelId:"demo-simple-select-label",id:"demo-simple-select","data-testid":"schools",value:h,label:"School",onChange:function(e){o(Object(b.a)({},n,{school:e.target.value})),m(e.target.value,!0)}},r.a.createElement(W.a,{value:"all"},"Show All"),s.length?s.map(function(e){return r.a.createElement(W.a,{key:e.id,value:e.school},e.school)}):r.a.createElement(W.a,null))))},B=function(){var e=G(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=N(),l=c.data,u=c.error,s=l.camps,d=Object(a.useContext)(w),h=d.selectedCamp,m=d.updateCamp;return r.a.createElement(r.a.Fragment,null,!s||u?r.a.createElement("div",null,"Loading"):r.a.createElement(J.a,{fullWidth:!0},r.a.createElement(R.a,{id:"demo-simple-select-label"},"Select Camp"),r.a.createElement(H.a,{labelId:"demo-simple-select-label",id:"demo-simple-select","data-testid":"camps",value:h,label:"Camp",onChange:function(e){o(Object(b.a)({},n,{camp:e.target.value})),m(e.target.value,!0)}},r.a.createElement(W.a,null,"Select Camp"),s.length?s.map(function(e){return r.a.createElement(W.a,{key:e.id,value:e.camp},e.camp)}):r.a.createElement(W.a,null))))},q=function(){var e=G(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=N(),l=c.data,u=c.error,s=l.countries,d=Object(a.useContext)(w),h=d.selectedCountry,m=d.updateCountry;return r.a.createElement(r.a.Fragment,null,!s||u?r.a.createElement("div",null,"Loading"):r.a.createElement(J.a,{fullWidth:!0},r.a.createElement(R.a,{id:"demo-simple-select-label"},"Select Country"),r.a.createElement(H.a,{"data-testid":"countries",labelId:"demo-simple-select-label",id:"demo-simple-select",value:h,label:"Country",onChange:function(e){o(Object(b.a)({},n,{country:e.target.value})),m(e.target.value)}},s.length?s.map(function(e){return r.a.createElement(W.a,{key:e.id,value:e.country},e.country)}):r.a.createElement(W.a,null))))},z=n(157),K=n(167),Q=n(161),V=n(168),X=n(169),Z=n(170),$=n(171),ee=n(172),te=function(){var e=N(),t=e.data,n=(e.error,Object(h.l)()),o=Object(a.useContext)(w),c=(o.selectedCountry,o.selectedCamp,o.selectedSchool),l=Object(a.useState)([]),u=Object(i.a)(l,2),d=u[0],m=u[1];return Object(a.useEffect)(function(){var e=Object.keys(t).length?function(e,t,n,a){return console.log(a),e.filter(function(e){return e.school===a})}(t.allData,0,0,c):[];m(e)},[t]),r.a.createElement(s.a,{className:"section-container",container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:8},r.a.createElement(z.a,{component:"button",variant:"body2",onClick:function(){n("/")}},"Go back"),d.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"section-heading"},r.a.createElement("b",null,c)," Details"),r.a.createElement(K.a,{component:Q.a},r.a.createElement(V.a,{sx:{minWidth:650},"aria-label":"simple table"},r.a.createElement(X.a,null,r.a.createElement(Z.a,null,["Country","Camp","# Of Lessons","Month"].map(function(e){return r.a.createElement($.a,{key:e.toLowerCase().replace(" ",""),align:"left"},e)}))),r.a.createElement(ee.a,null,d.map(function(e){return r.a.createElement(Z.a,{key:e.id,sx:{"&:last-child td, &:last-child th":{border:0}}},r.a.createElement($.a,{align:"left"},e.country),r.a.createElement($.a,{align:"left"},e.camp),r.a.createElement($.a,{align:"left"},e.lessons),r.a.createElement($.a,{align:"left"},e.month))}))))):r.a.createElement("p",null,"Please select a school")))},ne=n(173),ae=function(){return a.createElement(m.a,{className:"loading-screen",sx:{width:"200px",margin:"50vh auto auto auto"}},a.createElement(ne.a,null))},re=n(105),oe=n(158),ce=(n(102),function(){var e=Object(a.useContext)(w),t=e.themeMode,n=e.loading,o=e.updateLoading,c=Object(a.useState)(Object(re.a)({palette:{mode:t}})),l=Object(i.a)(c,2),m=l[0],f=l[1];return Object(a.useEffect)(function(){return f(Object(re.a)({palette:{mode:t}}))},[t]),Object(a.useEffect)(function(){setTimeout(function(){o(!1)},1e3)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{theme:m},r.a.createElement(u.a,null),n?r.a.createElement(ae,null):r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(C,null)),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(L,null)),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",element:r.a.createElement(S,null)}),r.a.createElement(h.a,{path:"/details",element:r.a.createElement(te,null)})))))))});c.a.createRoot(document.getElementById("app")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null,r.a.createElement(ce,null)))),l()},87:function(e,t,n){e.exports=n(104)}},[[87,3,2]]]);
//# sourceMappingURL=main.972fba74.chunk.js.map