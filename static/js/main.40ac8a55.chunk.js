(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(7),r=n.n(c),o=(n(12),n(2)),a=n(3),l=n(5),i=n(4),h=n(0);var j=function(){return Object(h.jsxs)("form",{class:"form-inline",children:[Object(h.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})};var u=function(){return Object(h.jsxs)("nav",{class:"navbar navbar-light bg-light justify-content-between",children:[Object(h.jsx)("h1",{children:"Employee Directory"}),Object(h.jsx)(j,{})]})};var m=function(e){var t=e.data;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:Object(h.jsx)("img",{src:t.picture.medium})}),Object(h.jsx)("td",{children:t.name.first}),Object(h.jsx)("td",{children:t.name.last}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{children:t.phone})]})},b={fetchEmployeeInfo:function(){return fetch("https://randomuser.me/api/?results=200&nat=us")}},d=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],orderedEmployees:[]},e}return Object(a.a)(n,[{key:"sortByFirstName",value:function(){console.log("hit");var e=this.state.employees;e.sort(this.compare),this.setState({employees:e})}},{key:"compare",value:function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}},{key:"componentDidMount",value:function(){var e=this;b.fetchEmployeeInfo().then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({employees:t.results,orderedEmployees:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{className:"thead-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Photo"}),Object(h.jsx)("th",{scope:"col",children:Object(h.jsx)("button",{className:"btn",onClick:function(){e.sortByFirstName()},children:"First"})}),Object(h.jsx)("th",{scope:"col",children:"Last"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Phone Number"})]})}),Object(h.jsx)("tbody",{children:this.state.employees.length?this.state.employees.map((function(e,t){return Object(h.jsx)(m,{data:e},t)})):Object(h.jsx)(h.Fragment,{children:" "})})]})})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employees:[{}],orderedEmployees:[{}]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.fetchEmployeeInfo().then((function(e){return e.json()})).then((function(t){console.log(t.results),e.setState({employees:t.results,orderedEmployees:t.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{}),Object(h.jsx)(d,{employees:this.state.employees})]})}}]),n}(s.Component);r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.40ac8a55.chunk.js.map