(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){e.exports={btn1:"hompage_btn1__1xOCQ",btn2:"hompage_btn2__1Djbc",editBtn:"hompage_editBtn__2FNkX",singleUser:"hompage_singleUser__dXcYK",imgStyle:"hompage_imgStyle__sXQZh",cardIcons:"hompage_cardIcons__1UYW_",btnEdit:"hompage_btnEdit__3nxy8"}},44:function(e,t,n){e.exports={mainDiv:"newUserForm_mainDiv__1Dxmq",header:"newUserForm_header__3M08M",userForm:"newUserForm_userForm__2ACZ-"}},51:function(e,t,n){e.exports={labelEl:"newUser_labelEl__2T5M0",inputEl:"newUser_inputEl__11Ely"}},62:function(e,t,n){e.exports={label:"label_label__1d9e1"}},63:function(e,t,n){e.exports={main:"input_main__3ZHuQ"}},64:function(e,t,n){e.exports={main:"button_main__2ij7I"}},75:function(e,t,n){},76:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=(n(75),n(13)),i=(n(76),n(111)),l=n(115),j=n(59),d=n.n(j),u=n(60),b=n.n(u),h=n(61),m=n.n(h),p=n(15),x=n.n(p),f=n(2),O=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),j=Object(s.a)(o,2),u=j[0],h=j[1];Object(a.useEffect)((function(){}),[]);var p=function(){u||fetch("https://node---prac.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){console.log("All Data",e.result);var t=e.result.map((function(e){return{name:e.name,age:e.age,sex:e.sex,city:e.city,email:e.email,avatar:e.avatar,id:e._id}}));r(t)})).catch((function(e){return console.log(e)})),h((function(e){return!e}))};return Object(f.jsxs)("div",{style:x.a.div,children:[u?Object(f.jsx)(i.a,{className:x.a.btn1,onClick:p,variant:"contained",color:"primary",children:"Click To Unsee!"}):Object(f.jsx)(i.a,{className:x.a.btn1,onClick:p,variant:"contained",color:"primary",children:"Click To see!"}),Object(f.jsx)(l.a,{onClick:e.handleUserAddForm,className:x.a.btn2,color:"primary",fontSize:"large",children:Object(f.jsx)(d.a,{})}),console.log(typeof c,"getting data on click",c),u&&c.map((function(e){return Object(f.jsxs)("div",{className:x.a.singleUser,children:[Object(f.jsxs)("div",{className:x.a.dataHolder,children:[Object(f.jsx)("span",{children:e.name}),Object(f.jsx)("span",{children:e.age}),Object(f.jsx)("span",{children:e.sex}),Object(f.jsx)("span",{children:e.city}),Object(f.jsx)("span",{children:e.email}),Object(f.jsxs)("div",{className:x.a.cardIcons,children:[Object(f.jsx)(l.a,{className:x.a.editBtn,children:Object(f.jsx)(b.a,{color:"primary"})}),Object(f.jsx)(l.a,{className:x.a.deleteBtn,onClick:function(){return function(e){console.log(e),fetch("http://localhost:4000/users/".concat(e.id),{method:"DELETE"})}(e)},children:Object(f.jsx)(m.a,{color:"secondary"})})]})]}),Object(f.jsx)("div",{className:x.a.imageHolder,children:Object(f.jsx)("img",{src:e.avatar,className:x.a.imgStyle,alt:e.name})})]},Math.random())}))]})},g=n(65),_=n(116),v=(n(117),n(122),n(118),n(119),Object(g.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),Object(_.a)((function(e){return{root:{},paper:{justifyContent:"center",alignItems:"center",textAlign:"center",padding:"10px",width:"100%",shadows:"01"},mainContainer:{shadows:"10",background:"info"},mainItem:{background:e.palette.primary.light},avatarContainer:{},contentContainer:{},avatarItem:{},avatar:{height:"128px",width:"128px",objectFit:"cover",shadows:"10"},contentItem:{justifyContent:"center"},typo:{fontSize:"22px",overflowX:"auto"}}})),n(51),n(123),n(120),n(121),n(124),Object(_.a)((function(e){return{root:{width:"50%",height:"100%"},label:{float:"left",justifyContent:"flex-start",margin:"10px 0"},input:{fontSize:"1.2rem",borderRadius:"5px"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px"}}})),n(62)),y=n.n(v),C=function(e){return Object(f.jsx)("label",{className:y.a.label,htmlFor:e.label,children:e.children})},N=n(63),S=n.n(N),k=function(e){return Object(f.jsx)("input",{onChange:e.onChange,className:S.a.main,type:e.type})},w=n(64),F=n.n(w),U=function(e){return Object(f.jsx)("button",{onClick:e.onClick,className:F.a.main,children:e.children})},E=n(44),A=n.n(E),D=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),l=i[0],j=i[1],d=Object(a.useState)(""),u=Object(s.a)(d,2),b=u[0],h=u[1],m=Object(a.useState)(""),p=Object(s.a)(m,2),x=p[0],O=p[1],g=Object(a.useState)(""),_=Object(s.a)(g,2),v=_[0],y=_[1],N=Object(a.useState)(),S=Object(s.a)(N,2),w=S[0],F=S[1];return Object(f.jsxs)("div",{className:A.a.mainDiv,children:[Object(f.jsxs)("header",{className:A.a.header,children:[Object(f.jsx)("h2",{children:"Add New User!"}),Object(f.jsx)("button",{onClick:e.handleCloseForm,children:"X"})]}),Object(f.jsxs)("form",{className:A.a.userForm,onSubmit:function(t){t.preventDefault();var n={name:c,age:l,sex:b,city:x,email:v};console.log(n);var a=new FormData;a.append("user",JSON.stringify(n)),a.append("avatar",w),fetch("https://node---prac.herokuapp.com/users",{body:a,method:"POST"}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.handleCloseForm()},children:[Object(f.jsx)(C,{children:"Name"}),Object(f.jsx)(k,{type:"text",onChange:function(e){r(e.target.value)}}),Object(f.jsx)(C,{children:"Age"}),Object(f.jsx)(k,{type:"Number",onChange:function(e){j(e.target.value)}}),Object(f.jsx)(C,{children:"Sex"}),Object(f.jsx)(k,{type:"text",onChange:function(e){h(e.target.value)}}),Object(f.jsx)(C,{children:"City"}),Object(f.jsx)(k,{type:"text",onChange:function(e){O(e.target.value)}}),Object(f.jsx)(C,{children:"Email"}),Object(f.jsx)(k,{type:"email",onChange:function(e){y(e.target.value)}}),Object(f.jsx)(C,{children:"Image"}),Object(f.jsx)(k,{type:"file",onChange:function(e){console.log(e.target),F(e.target.files[0])}}),Object(f.jsx)(U,{type:"submit",children:"Add User"})]})]})};var I=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),i=(o[0],o[1]);return Object(f.jsxs)("div",{className:"App",children:[n&&Object(f.jsx)(D,{handleCloseForm:function(e){c(!1)}}),Object(f.jsx)(O,{handleUsersDisplay:function(e){i((function(e){return!e}))},handleUserAddForm:function(e){console.log("Please Add User!"),c(!0)}})]})};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.2a25983d.chunk.js.map