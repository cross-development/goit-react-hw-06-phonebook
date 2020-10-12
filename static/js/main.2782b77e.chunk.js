(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports={form:"ContactForm_form__2-d1f",input:"ContactForm_input__2ywZC",button:"ContactForm_button__3AtRc"}},,function(t,e,n){t.exports={listItem:"ContactListItem_listItem__1prc0",contact:"ContactListItem_contact__1lOPm",button:"ContactListItem_button__3Ljwe"}},,,,function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__2WJAs",input:"Filter_input__1qoaR"}},function(t,e,n){t.exports={notificationWrapper:"Notification_notificationWrapper__2TXPD",text:"Notification_text__3QpjX"}},,,,function(t,e,n){t.exports={heading:"Heading_heading__2yxB7"}},function(t,e,n){t.exports={section:"Section_section__3bpxT"}},function(t,e,n){t.exports={list:"ContactList_list__2Ei0K"}},function(t,e,n){t.exports={enter:"fadeContactList_enter__3sGDZ",enterActive:"fadeContactList_enterActive__3REnu",exit:"fadeContactList_exit__24Ful",exitActive:"fadeContactList_exitActive__2WwWI"}},,,function(t,e,n){t.exports={enter:"fadeNotification_enter__3myfM",enterActive:"fadeNotification_enterActive__4q0nq",exit:"fadeNotification_exit__1vvF9",exitActive:"fadeNotification_exitActive___FQ2-"}},function(t,e,n){t.exports={enter:"fadeFilter_enter__22BwZ",enterActive:"fadeFilter_enterActive__3vMJZ",exit:"fadeFilter_exit__27Fi1",exitActive:"fadeFilter_exitActive__11AC2"}},function(t,e,n){t.exports={appear:"fadeHeading_appear__i4psE",appearActive:"fadeHeading_appearActive__2QHS6"}},,,,,function(t,e,n){t.exports=n(45)},,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a,c=n(0),o=n.n(c),r=n(5),i=n.n(r),u=n(47),l=n(6),s=n(4),m=n(48),f={addContact:Object(s.b)("contacts/add",(function(t,e){return{payload:{contact:{id:Object(m.a)(),name:t,number:e}}}})),removeContact:Object(s.b)("contacts/remove"),changeFilter:Object(s.b)("contacts/changeFilter")},_=n(16),p=n.n(_),b={onChangeFilter:f.changeFilter},d=Object(l.b)((function(t){var e=t.contacts;return{value:e.filter,contacts:e.items}}),b)((function(t){var e=t.value,n=t.contacts,a=t.onChangeFilter;return n.length>1&&o.a.createElement("div",{className:p.a.filterWrapper},o.a.createElement("label",null,"Find contacts by name",o.a.createElement("input",{type:"text",value:e,autoComplete:"off",className:p.a.input,onChange:function(t){return a(t.target.value)}})))})),v=n(21),C=n.n(v),h=function(){return o.a.createElement("h1",{className:C.a.heading},"Phonebook")},E=n(22),x=n.n(E),N=function(t){var e=t.children;return o.a.createElement("section",{className:x.a.section},e)},g=n(49),F=n(12),O=n.n(F),j=function(t){var e=t.name,n=t.number,a=t.onRemove;return o.a.createElement("li",{className:O.a.listItem},o.a.createElement("p",{className:O.a.contact},o.a.createElement("span",null,e,":")," ",n),o.a.createElement("button",{type:"button",className:O.a.button,onClick:a},"\u2716"))},A=n(23),y=n.n(A),w=n(24),L=n.n(w),S={onRemoveContact:f.removeContact},W=Object(l.b)((function(t){var e=t.contacts,n=e.items,a=e.filter.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}),S)((function(t){var e=t.contacts,n=t.onRemoveContact;return e.length>0&&o.a.createElement(g.a,{component:"ul",className:y.a.list},e.map((function(t){var e=t.id,a=t.name,c=t.number;return o.a.createElement(u.a,{key:e,timeout:250,classNames:L.a},o.a.createElement(j,{name:a,number:c,onRemove:function(){return n(e)}}))})))})),k=n(9),I=n(25),R=n(26),T=n(32),H=n(31),J=n(17),Z=n.n(J),q=function(){return o.a.createElement("div",{className:Z.a.notificationWrapper},o.a.createElement("p",{className:Z.a.text},"Contact is already exists!"))},B=n(10),D=n.n(B),P=n(27),Q=n.n(P),M=function(t){Object(T.a)(n,t);var e=Object(H.a)(n);function n(){var t;Object(I.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",isNotice:!1},t.setNotificationTimeout=function(){return setTimeout((function(){return t.setState({isNotice:!1})}),2e3)},t.handleChange=function(e){return t.setState(Object(k.a)({},e.target.name,e.target.value))},t.handleFormSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()})))return t.setState({name:"",number:"",isNotice:!0}),t.setNotificationTimeout();t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(R.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.isNotice;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{in:a,classNames:Q.a,timeout:250,unmountOnExit:!0},o.a.createElement(q,null)),o.a.createElement("form",{className:D.a.form,onSubmit:this.handleFormSubmit},o.a.createElement("label",null,"Name",o.a.createElement("input",{autoFocus:!0,type:"text",name:"name",value:e,autoComplete:"off",className:D.a.input,onChange:this.handleChange})),o.a.createElement("label",null,"Number",o.a.createElement("input",{type:"text",name:"number",value:n,autoComplete:"off",className:D.a.input,onChange:this.handleChange})),o.a.createElement("button",{className:D.a.button,type:"submit"},"Add contact")))}}]),n}(c.Component),X={onAddContact:f.addContact},G=Object(l.b)((function(t){return{contacts:t.contacts.items}}),X)(M),K=n(28),z=n.n(K),U=n(29),V=n.n(U),Y=function(){return o.a.createElement(N,null,o.a.createElement(u.a,{in:!0,classNames:V.a,timeout:500,appear:!0,unmountOnExit:!0},o.a.createElement(h,null)),o.a.createElement(G,null),o.a.createElement(u.a,{in:!0,classNames:z.a,timeout:250,unmountOnExit:!0},o.a.createElement(d,null)),o.a.createElement(W,null))},$=n(3),tt=n(30),et=function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n.contact])},nt=function(t,e){return e.payload},at=function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))},ct=Object(s.c)([],(a={},Object(k.a)(a,f.addContact,et),Object(k.a)(a,f.removeContact,at),a)),ot=Object(s.c)("",Object(k.a)({},f.changeFilter,nt)),rt=Object($.c)({items:ct,filter:ot}),it=Object(s.a)({reducer:{contacts:rt}});n(44);i.a.render(o.a.createElement(l.a,{store:it},o.a.createElement(Y,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.2782b77e.chunk.js.map