(this.webpackJsonpworkdesk=this.webpackJsonpworkdesk||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},107:function(e,t,c){},110:function(e,t,c){},156:function(e,t,c){"use strict";c.r(t);var n={};c.r(n),c.d(n,"readTodos",(function(){return B})),c.d(n,"addTodo",(function(){return F})),c.d(n,"deleteTodo",(function(){return H})),c.d(n,"doneTodo",(function(){return G})),c.d(n,"toggleSideBar",(function(){return L}));var r=c(0),s=c.n(r),o=c(16),a=c.n(o),d=(c(101),c(102),c(12)),j=c(49),i=c(169),l=(c(103),c(1));var b=function(){return Object(l.jsxs)(j.a,{id:"faqclass",children:[Object(l.jsx)("div",{id:"faqtitle",children:Object(l.jsx)("h1",{children:"F.A.Qs"})}),Object(l.jsxs)(i.a,{children:[Object(l.jsxs)(i.a.Item,{eventKey:"0",children:[Object(l.jsx)(i.a.Header,{children:" What can WorkDesk help you with? "}),Object(l.jsx)(i.a.Body,{children:"WorkDesk lets you create ToDos and Notes."})]}),Object(l.jsxs)(i.a.Item,{eventKey:"1",children:[Object(l.jsx)(i.a.Header,{children:" How to create a Todo? "}),Object(l.jsx)(i.a.Body,{children:"Go to the Todo page and use the create button to create a Todo task."})]}),Object(l.jsxs)(i.a.Item,{eventKey:"2",children:[Object(l.jsx)(i.a.Header,{children:" How to create a Notes? "}),Object(l.jsx)(i.a.Body,{children:"Go to the Notes page and use the add button to add a new Note."})]})]})]})},O=c(164),h=c(88),x=c(171),u=c(165),p=c(31);c(107);var g=function(){return Object(l.jsx)("div",{className:"featuresclass",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(O.a,{className:"justify-content-center",children:[Object(l.jsx)(h.a,{md:{span:3,offset:0},children:Object(l.jsxs)(x.a,{className:"featurecard",children:[Object(l.jsx)(x.a.Title,{children:" TODO"}),Object(l.jsx)(x.a.Text,{children:"Create a Todo list to keep a track on your tasks."}),Object(l.jsx)(p.b,{to:"/todos",id:"featurebutton",children:Object(l.jsx)(u.a,{variant:"primary",children:"Get Started"})})]})}),Object(l.jsx)(h.a,{md:{span:3,offset:3},children:Object(l.jsxs)(x.a,{className:"featurecard",children:[Object(l.jsx)(x.a.Title,{children:"  NOTES"}),Object(l.jsx)(x.a.Text,{children:"Store long notes to keep everything at one place."}),Object(l.jsx)(p.b,{to:"/notes",id:"featurebutton",children:Object(l.jsx)(u.a,{variant:"primary",children:"Get Started"})})]})})]})})})};c(110);var f=function(){return Object(l.jsxs)(x.a,{className:"homecard",children:[Object(l.jsx)(x.a.Title,{className:"title",children:"WorkDesk"}),Object(l.jsx)(x.a.Text,{style:{fontSize:"30px",marginLeft:"140px",marginTop:"10px"},children:"Your own notebook on your Desktop."})]})},m=c(170),v=c(167);var y=function(){return Object(l.jsx)(m.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(m.a.Brand,{href:"/workdesk",style:{fontSize:"25px"},children:"WorkDesk"}),Object(l.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(l.jsx)(v.a,{className:"me-auto"}),Object(l.jsxs)(v.a,{children:[Object(l.jsx)(v.a.Link,{href:"/workdesk/todos",children:"Todos"}),Object(l.jsx)(v.a.Link,{href:"/workdesk/notes",children:"Notes"})]})]})]})})};var k=Object(d.f)((function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)(f,{}),Object(l.jsx)(g,{}),Object(l.jsx)(b,{})]})})),I=c(10),T=c(166),S=c(168),C=c(91),N=c.n(C),w=c(37),D=c(25),J=c(22),B=(c(87),c(77),function(){var e=window.localStorage,t={Completed:JSON.parse(e.getItem("completed")||"[]"),Inprogress:JSON.parse(e.getItem("inprogress")||"[]"),selected:1};return function(e){e({type:"readTodo",payload:t})}}),F=function(e){var t=window.localStorage,c=JSON.parse(t.getItem("inprogress")||"[]");c.push(e),t.setItem("inprogress",JSON.stringify(c));var n={Completed:c,Inprogress:c,selected:1};return function(e){e({type:"addTodo",payload:n})}},H=function(e){console.log("Inside DeleteTodos");var t=window.localStorage,c=JSON.parse(t.getItem("inprogress")||"[]"),n={Completed:c=c.filter((function(t,c){if(c!==e)return t})),Inprogress:c,selected:1};return t.setItem("inprogress",JSON.stringify(c)),function(e){e({type:"deleteTodo",payload:n})}},G=function(e){var t=window.localStorage,c=JSON.parse(t.getItem("completed")||"[]"),n=JSON.parse(t.getItem("inprogress")||"[]");c.push(n[e]);var r={Completed:c,Inprogress:n=n.filter((function(t,c){if(c!==e)return t})),selected:1};return t.setItem("inprogress",JSON.stringify(n)),t.setItem("completed",JSON.stringify(c)),function(e){e({type:"doneTodo",payload:r})}},L=function(e){var t=window.localStorage,c=JSON.parse(t.getItem("inprogress")||"[]"),n={Completed:JSON.parse(t.getItem("completed")||"[]"),Inprogress:c,selected:e};return console.log("Inside toggleSideBar"),console.log(n),function(e){e({type:"toggleSidebar",payload:n})}},P=c(2),W={Completed:[],Inprogress:[],selected:1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"readTodo":return Object(P.a)(Object(P.a)({},e),{},{Completed:t.payload.Completed,Inprogress:t.payload.Inprogress});case"addTodo":case"deleteTodo":return Object(P.a)(Object(P.a)({},e),{},{Inprogress:t.payload.Inprogress});case"doneTodo":return Object(P.a)(Object(P.a)({},e),{},{Completed:t.payload.Completed,Inprogress:t.payload.Inprogress});case"toggleSidebar":return Object(P.a)(Object(P.a)({},e),{},{selected:t.payload.selected});default:return e}},K=Object(J.c)({todo:E}),M=function(){var e=Object(r.useState)(new Date),t=Object(I.a)(e,2),c=t[0],s=t[1],o=Object(r.useState)(new String),a=Object(I.a)(o,2),d=a[0],j=a[1],i=Object(r.useState)(new String),b=Object(I.a)(i,2),x=b[0],p=b[1],g=Object(r.useState)(!1),f=Object(I.a)(g,2),m=f[0],v=f[1],y=function(){return v(!1)},k=Object(D.b)(),C=Object(J.b)(n,k),B=C.addTodo,F=C.toggleSideBar,H=Object(D.c)((function(e){return e.todo})),G=function(e,t,n){""!==e||""!==t||""!==n?(B({Title:d,Description:x,Date:c,Completed:!1}),y()):console.log("Please make sure every field is filled.")};return Object(l.jsxs)("div",{children:[Object(l.jsxs)(O.a,{className:"todoHeader",children:[Object(l.jsx)("h1",{children:" Todos "}),Object(l.jsxs)(T.a,{show:m,onHide:y,children:[Object(l.jsx)(T.a.Header,{closeButton:!0,children:Object(l.jsx)(T.a.Title,{children:"TODO"})}),Object(l.jsx)(T.a.Body,{children:Object(l.jsxs)(S.a,{children:[Object(l.jsx)(S.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(h.a,{children:Object(l.jsx)(S.a.Control,{type:"textarea",placeholder:"Your title goes here",onChange:function(e){var t;t=e.target.value,j(t)}})}),Object(l.jsx)(h.a,{children:Object(l.jsx)(N.a,{selected:c,onChange:function(e){s(e)}})})]})}),Object(l.jsx)(S.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(l.jsx)(S.a.Control,{as:"textarea",rows:3,placeholder:"description",onChange:function(e){return t=e.target.value,void p(t);var t}})})]})}),Object(l.jsxs)(T.a.Footer,{children:[Object(l.jsx)(u.a,{variant:"secondary",onClick:y,children:"Close"}),Object(l.jsx)(u.a,{variant:"primary",onClick:function(){G(c,d,x)},children:"Save Changes"})]})]})]}),Object(l.jsx)(O.a,{id:"todoSidebar-createbutton",children:Object(l.jsx)(u.a,{variant:"primary",onClick:function(){return v(!0)},children:"Create a TODO"})}),Object(l.jsx)(O.a,{className:"todoSidebar-buttons",children:Object(l.jsxs)("button",{onClick:function(){return F(1)},children:[Object(l.jsx)("h4",{children:"In-Progress"}),Object(l.jsx)("h4",{children:Object(l.jsx)(w.a,{bg:"secondary",children:H.Inprogress.length})})]})}),Object(l.jsx)(O.a,{className:"todoSidebar-buttons",children:Object(l.jsxs)("button",{onClick:function(){return F(0)},children:[Object(l.jsx)("h4",{children:"Completed"}),Object(l.jsx)("h4",{children:Object(l.jsx)(w.a,{bg:"secondary",children:H.Completed.length})})]})}),Object(l.jsx)(O.a,{style:{height:"600px"}})]})},q=function(){var e=Object(D.b)(),t=Object(J.b)(n,e).readTodos,c=Object(D.c)((function(e){return e.todo}));return Object(r.useEffect)((function(){t()}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)(O.a,{className:"todoStats",children:[Object(l.jsxs)(h.a,{children:[Object(l.jsx)("h1",{children:Object(l.jsx)(w.a,{bg:"warning",children:c.Inprogress.length})}),Object(l.jsx)("h5",{children:"Ongoing"})]}),Object(l.jsxs)(h.a,{children:[Object(l.jsx)("h1",{children:Object(l.jsxs)(w.a,{bg:"info",children:[" ",c.Completed.length]})}),Object(l.jsx)("h5",{children:"Completed"})]}),Object(l.jsxs)(h.a,{children:[Object(l.jsx)("h1",{children:Object(l.jsxs)(w.a,{bg:"secondary",children:[c.Completed.length+c.Inprogress.length," "]})}),Object(l.jsx)("h5",{children:"Total"})]}),Object(l.jsxs)(h.a,{children:[Object(l.jsx)("h1",{children:Object(l.jsxs)(w.a,{bg:"success",children:[" ",function(){var e=Math.round(c.Completed.length/(c.Completed.length+c.Inprogress.length)*100);return Number.isInteger(e)?Math.round(e):0}()," %"]})}),Object(l.jsx)("h5",{children:"Progress"})]})]})})},z=function(){var e=Object(D.b)(),t=Object(J.b)(n,e),c=t.deleteTodo,s=t.doneTodo,o=Object(D.c)((function(e){return e.todo})),a=Object(r.useState)({Inprogress:[],Completed:[],selected:1}),d=Object(I.a)(a,2),i=d[0],b=d[1];return Object(r.useEffect)((function(){b(o)}),[o]),1==i.selected?Object(l.jsx)(j.a,{children:Object(l.jsx)(O.a,{children:o.Inprogress.length>0&&o.Inprogress.map((function(e,t){return Object(l.jsxs)("div",{className:"todoItem",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:e.Title}),Object(l.jsx)("p",{children:e.Description})]}),Object(l.jsx)("button",{onClick:function(){return c(t)},children:"Delete"}),Object(l.jsx)("button",{onClick:function(){return s(t)},children:"Done"})]},t)}))})}):Object(l.jsx)(j.a,{children:Object(l.jsx)(O.a,{children:o.Completed.length>0&&o.Completed.map((function(e,t){return Object(l.jsx)("div",{className:"todoItem",children:Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("h4",{children:e.Title}),Object(l.jsx)("p",{children:e.Description})]})},t)}))})})};var Y=Object(d.f)((function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)(j.a,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(h.a,{xs:2,className:"todoSidebar",children:Object(l.jsx)(M,{})}),Object(l.jsxs)(h.a,{xs:10,children:[Object(l.jsx)(q,{}),Object(l.jsx)(z,{})]})]})})]})}));var A=Object(d.f)((function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{}),Object(l.jsx)("h1",{children:"This is Notes Section"})]})}));c(154);var Q=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/workdesk",children:Object(l.jsx)(k,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/workdesk/todos",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(d.a,{exact:!0,path:"/workdesk/notes",children:Object(l.jsx)(A,{})}),Object(l.jsx)(d.a,{children:Object(l.jsx)(k,{})})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,172)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),s(e),o(e)}))},U=c(93),V=Object(J.d)(K,{},Object(J.a)(U.a));a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p.a,{children:Object(l.jsx)(D.a,{store:V,children:Object(l.jsx)(Q,{})})})}),document.getElementById("root")),R()},77:function(e,t,c){}},[[156,1,2]]]);
//# sourceMappingURL=main.2363cc97.chunk.js.map