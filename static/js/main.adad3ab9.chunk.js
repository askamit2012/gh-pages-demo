(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){e.exports={btn1:"hompage_btn1__1xOCQ",btn2:"hompage_btn2__1Djbc",editBtn:"hompage_editBtn__2FNkX",singleUser:"hompage_singleUser__dXcYK",imgStyle:"hompage_imgStyle__sXQZh",cardIcons:"hompage_cardIcons__1UYW_",btnEdit:"hompage_btnEdit__3nxy8"}},44:function(e,t,n){e.exports={mainDiv:"newUserForm_mainDiv__1Dxmq",header:"newUserForm_header__3M08M",userForm:"newUserForm_userForm__2ACZ-"}},45:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3WSA8",modal:"Modal_modal__6AfiP","slide-down":"Modal_slide-down__1Smw3"}},52:function(e,t,n){e.exports={labelEl:"newUser_labelEl__2T5M0",inputEl:"newUser_inputEl__11Ely"}},55:function(e,t,n){e.exports={label:"label_label__1d9e1"}},56:function(e,t,n){e.exports={main:"input_main__3ZHuQ"}},57:function(e,t,n){e.exports={main:"button_main__2ij7I"}},76:function(e,t,n){},77:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),s=(n(76),n(12)),i=(n(77),n(113)),l=n(117),d=n(63),j=n.n(d),u=n(64),b=n.n(u),h=n(65),m=n.n(h),p=n(15),x=n.n(p),O=n(55),f=n.n(O),g=n(2),_=function(e){return Object(g.jsx)("label",{className:f.a.label,htmlFor:e.label,children:e.children})},v=n(56),y=n.n(v),C=function(e){return Object(g.jsx)("input",{onChange:e.onChange,className:y.a.main,type:e.type})},k=n(57),N=n.n(k),S=function(e){return Object(g.jsx)("button",{onClick:e.onClick,className:N.a.main,children:e.children})},w=n(44),F=n.n(w),E=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),l=i[0],d=i[1],j=Object(a.useState)(""),u=Object(s.a)(j,2),b=u[0],h=u[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),x=p[0],O=p[1],f=Object(a.useState)(""),v=Object(s.a)(f,2),y=v[0],k=v[1],N=Object(a.useState)(),w=Object(s.a)(N,2),E=w[0],U=w[1];return Object(g.jsxs)("div",{className:F.a.mainDiv,children:[Object(g.jsxs)("header",{className:F.a.header,children:[Object(g.jsx)("h2",{children:"Add New User!"}),Object(g.jsx)("button",{onClick:e.handleCloseForm,children:"X"})]}),Object(g.jsxs)("form",{className:F.a.userForm,onSubmit:function(t){t.preventDefault();var n={name:c,age:l,sex:b,city:x,email:y};console.log(n);var a=new FormData;a.append("user",JSON.stringify(n)),a.append("avatar",E),fetch("https://node---prac.herokuapp.com/users/",{body:a,method:e.method}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.handleCloseForm()},children:[Object(g.jsx)(_,{children:"Name"}),Object(g.jsx)(C,{type:"text",onChange:function(e){r(e.target.value)}}),Object(g.jsx)(_,{children:"Age"}),Object(g.jsx)(C,{type:"Number",onChange:function(e){d(e.target.value)}}),Object(g.jsx)(_,{children:"Sex"}),Object(g.jsx)(C,{type:"text",onChange:function(e){h(e.target.value)}}),Object(g.jsx)(_,{children:"City"}),Object(g.jsx)(C,{type:"text",onChange:function(e){O(e.target.value)}}),Object(g.jsx)(_,{children:"Email"}),Object(g.jsx)(C,{type:"email",onChange:function(e){k(e.target.value)}}),Object(g.jsx)(_,{children:"Image"}),Object(g.jsx)(C,{type:"file",onChange:function(e){console.log(e.target),U(e.target.files[0])}}),Object(g.jsx)(S,{type:"submit",children:"Add User"})]})]})},U=n(124),A=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),d=Object(s.a)(o,2),u=d[0],h=d[1],p=Object(a.useState)(!1),O=Object(s.a)(p,2),f=O[0],_=O[1];Object(a.useEffect)((function(){}),[c]);var v=function(){fetch("https://node---prac.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){console.log("All Data",e.result);var t=e.result.map((function(e){return{name:e.name,age:e.age,sex:e.sex,city:e.city,email:e.email,avatar:e.avatar,id:e._id}}));r(t)})).catch((function(e){return console.log(e)}))},y=function(){u||v(),h((function(e){return!e}))};return Object(g.jsxs)("div",{style:x.a.div,children:[u?Object(g.jsx)(i.a,{className:x.a.btn1,onClick:y,variant:"contained",color:"primary",children:"Click To Unsee!"}):Object(g.jsx)(i.a,{className:x.a.btn1,onClick:y,variant:"contained",color:"primary",children:"Click To see!"}),Object(g.jsx)(l.a,{onClick:e.handleUserAddForm,className:x.a.btn2,color:"primary",fontSize:"large",children:Object(g.jsx)(j.a,{})}),f&&Object(g.jsx)(U.a,{children:"This is a Portal"}),console.log(typeof c,"getting data on click",c),u&&c.map((function(e){return Object(g.jsxs)("div",{className:x.a.singleUser,children:[Object(g.jsxs)("div",{className:x.a.dataHolder,children:[Object(g.jsx)("span",{children:e.name}),Object(g.jsx)("span",{children:e.age}),Object(g.jsx)("span",{children:e.sex}),Object(g.jsx)("span",{children:e.city}),Object(g.jsx)("span",{children:e.email}),Object(g.jsxs)("div",{className:x.a.cardIcons,children:[Object(g.jsx)(l.a,{className:x.a.editBtn,onClick:function(){return function(e){console.log(e),_(!0)}(e)},children:Object(g.jsx)(b.a,{color:"primary"})}),Object(g.jsx)(l.a,{className:x.a.deleteBtn,onClick:function(){return function(e){console.log(e),fetch("https://node---prac.herokuapp.com/users/".concat(e.id),{method:"DELETE"}),v()}(e)},children:Object(g.jsx)(m.a,{color:"secondary"})})]})]}),Object(g.jsx)("div",{className:x.a.imageHolder,children:Object(g.jsx)("img",{src:e.avatar,className:x.a.imgStyle,alt:e.name})})]},Math.random())}))]})},I=n(66),D=n(118),B=(n(119),n(125),n(120),n(121),Object(I.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),Object(D.a)((function(e){return{root:{},paper:{justifyContent:"center",alignItems:"center",textAlign:"center",padding:"10px",width:"100%",shadows:"01"},mainContainer:{shadows:"10",background:"info"},mainItem:{background:e.palette.primary.light},avatarContainer:{},contentContainer:{},avatarItem:{},avatar:{height:"128px",width:"128px",objectFit:"cover",shadows:"10"},contentItem:{justifyContent:"center"},typo:{fontSize:"22px",overflowX:"auto"}}})),n(52),n(126),n(122),n(123),n(127),Object(D.a)((function(e){return{root:{width:"50%",height:"100%"},label:{float:"left",justifyContent:"flex-start",margin:"10px 0"},input:{fontSize:"1.2rem",borderRadius:"5px"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px"}}})),n(45)),M=n.n(B),T=function(e){return Object(g.jsx)("div",{className:M.a.backdrop})},P=function(e){return Object(g.jsx)("div",{className:M.a.modal,children:Object(g.jsx)("div",{className:M.a.content,children:e.children})})},X=document.getElementById("overlays"),z=function(e){return Object(g.jsxs)(g.Fragment,{children:[o.a.createPortal(Object(g.jsx)(T,{}),X),o.a.createPortal(Object(g.jsx)(P,{children:e.children}),X)]})};var H=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),i=(o[0],o[1]);return Object(g.jsxs)("div",{className:"App",children:[n&&Object(g.jsxs)(z,{children:[" ",Object(g.jsx)(E,{handleCloseForm:function(e){c(!1)},method:"POST"})]}),Object(g.jsx)(A,{handleUsersDisplay:function(e){i((function(e){return!e}))},handleUserAddForm:function(e){console.log("Please Add User!"),c(!0)}})]})};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.adad3ab9.chunk.js.map