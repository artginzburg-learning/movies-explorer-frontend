(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"},"b":"https://github.com/artginzburg/movies-explorer-frontend"}')},,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(11),i=a.n(s),r=(a(23),a(4)),l=a(5),o=a(3),j="/",d="/movies",b="/saved-movies",u="/signin",m="/signup",h="/profile",_={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},O={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"};function f(e,t){var a=Object(c.useState)((function(){try{var a=localStorage[e];return a?JSON.parse(a):t}catch(c){return console.log(c),t}})),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useCallback)((function(t){localStorage[e]=JSON.stringify(t),i(t)}),[e]);return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=t}),[t]),Object(c.useEffect)((function(){if(a&&a.addEventListener){var t=function(e){return n.current(e)};return a.addEventListener(e,t),function(){a.removeEventListener(e,t)}}}),[e,a])}("storage",Object(c.useCallback)((function(a){a.key===e&&i(a.newValue?JSON.parse(a.newValue):t)}),[e,t])),[s,r]}var g=a(10),x=a(2),p={},v=!0;var N=a(8),k="form__input",y="form__button",w=a(0),S=["onSubmit"],C=Object(c.memo)((function(e){var t=e.onSubmit,a=Object(N.a)(e,S),n=Object(c.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(w.jsx)("form",Object(x.a)(Object(x.a)({action:"#",onSubmit:n,className:"form"},a),{},{children:a.children}))})),I=function(e){return e.filter(Boolean).join(" ")},E=function(e){return{className:I(e)}},F=["isFocused","validationMessage"],M="text",T=!0,B=2,D=Object(c.forwardRef)((function(e,t){var a,n,s,i=e.isFocused,r=e.validationMessage,l=Object(N.a)(e,F),o=null!==t&&void 0!==t?t:Object(c.createRef)(),j=null!==(a=l.type)&&void 0!==a?a:M,d=null!==(n=l.required)&&void 0!==n?n:T,b=j===M?B:null,u={type:j,minLength:null!==(s=l.minLength)&&void 0!==s?s:b,required:d,ref:o};return Object(c.useEffect)((function(){i&&o&&o.current&&o.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){o&&o.current&&o.current.focus()}),50)}),[i,o]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",Object(x.a)(Object(x.a)(Object(x.a)({},l),E([k,r&&"form__input_type_error",l.className])),u)),Object(w.jsx)("p",Object(x.a)(Object(x.a)({},E(["form__error",r&&"form__error_visible"])),{},{id:"".concat(l.id,"-error"),children:r}))]})})),L=["form"],z={autoCorrect:"off",spellCheck:!1,className:"".concat(k,"_theme_dark")},J="email",R="password",P=Object(c.memo)((function(e){var t=e.form,a=Object(N.a)(e,L),n=Object(c.useState)(!1),s=Object(l.a)(n,2),i=s[0],r=s[1],o=i?"".concat(a.buttonSavingTitle,"..."):a.buttonTitle;return Object(w.jsxs)("div",{className:"content auth",children:[Object(w.jsx)("h2",{className:"auth__title",children:a.title}),Object(w.jsxs)(C,{onSubmit:function(e){r(!0);var c=t.getData(),n=c.email,s=c.password;a.handleSubmit(e,n,s).finally((function(){r(!1)}))},onReset:t.reset,children:[Object(w.jsx)(D,Object(x.a)(Object(x.a)(Object(x.a)({},z),{},{autoFocus:!0},t.register(J)),{},{id:J,type:J,autoComplete:J,placeholder:"Email"})),Object(w.jsx)(D,Object(x.a)(Object(x.a)(Object(x.a)({},z),t.register(R)),{},{type:R,id:a.passwordAutocomplete,autoComplete:a.passwordAutocomplete,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})),Object(w.jsx)("button",{type:"submit",disabled:t.isInvalid||i,className:"auth__button ".concat(y," ").concat(y,"_theme_dark"),children:o})]}),a.children]})})),A={passwordAutocomplete:"current-password",title:_.title,buttonTitle:_.action,buttonSavingTitle:_.title},W=Object(c.memo)((function(e){return Object(w.jsx)(P,Object(x.a)(Object(x.a)({},e),A))})),q={passwordAutocomplete:"new-password",title:O.title,buttonTitle:O.action,buttonSavingTitle:O.title},G=Object(c.memo)((function(e){return Object(w.jsx)(P,Object(x.a)(Object(x.a)(Object(x.a)({},e),q),{},{children:Object(w.jsxs)("div",{className:"auth__signin",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(w.jsx)(r.b,{to:u,className:"auth__login-link",children:_.action})]})}))})),H=Object(c.memo)((function(e){var t,a,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(p),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)(v),b=Object(l.a)(d,2),u=b[0],m=b[1];function h(t,a){s((function(c){var n=Object(x.a)(Object(x.a)({},c),{},Object(g.a)({},t,a));return JSON.stringify(Object(x.a)(Object(x.a)({},e),n))===JSON.stringify(e)&&m(!0),n}))}function _(e,t){j((function(a){return Object(x.a)(Object(x.a)({},a),{},Object(g.a)({},e,t))}))}var O=Object(c.useCallback)((function(t,a){s(null!==a&&void 0!==a?a:e),j(p),m(v)}),[e]);return{registerForm:function(){return{isSubmitDisabled:u,onReset:O}},register:function(e){var t;return{value:null!==(t=n[e])&&void 0!==t?t:"",onChange:function(t){var a=t.currentTarget,c=a.value,n=a.validationMessage;h(e,c),_(e,c.length?n:"");var s=a.closest("form").checkValidity();m(!s)},validationMessage:o[e],name:e}},reset:O,getData:function(){return n},isInvalid:u}}({email:null!==(a="email",t=localStorage[a]&&atob(JSON.parse(localStorage[a])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(w.jsx)(o.a,{to:j}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.b,{path:u,children:Object(w.jsx)(W,{handleSubmit:e.handleLogin,form:n})}),Object(w.jsx)(o.b,{path:m,children:Object(w.jsx)(G,{handleSubmit:e.handleRegister,form:n})})]})})),V="Movies Explorer",Y=function(e){Object(c.useEffect)((function(){document.title=e?"".concat(e," \xb7 ").concat(V):V}),[e])},K=a(16),Q=(a(33),(new Date).getFullYear());var U=function(){return Object(w.jsxs)("footer",{className:"footer",children:[Object(w.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(w.jsxs)("div",{className:"footer__copyright",children:[Object(w.jsxs)("div",{className:"footer__links",children:[Object(w.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}),Object(w.jsx)("a",{className:"footer__link",href:K.b,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(w.jsx)("a",{className:"footer__link",href:"https://t.me/artginzburg",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),Object(w.jsxs)("a",{className:"footer__link footer__link-copyright",href:K.a.url,target:"_blank",rel:"noreferrer",children:["\xa9 ",Q]})]})]})},X=a.p+"static/media/logo.1edc39b5.svg",Z=(a(34),document.getElementById("modal-root"));function $(e){return Object(s.createPortal)(Object(w.jsx)("section",{onClick:e.onClose,className:"navigation",children:Object(w.jsxs)("nav",{className:"navigation__container",children:[Object(w.jsx)("button",{onClick:e.onClose,type:"button",className:"navigation__close-button"}),Object(w.jsxs)("ul",{className:"navigation__list",children:[Object(w.jsx)("li",{className:"navigation__list-item",children:Object(w.jsx)(r.c,{exact:!0,to:"/",className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(w.jsx)("li",{className:"navigation__list-item",children:Object(w.jsx)(r.c,{to:"/movies",className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0424\u0438\u043b\u044c\u043c\u044b"})}),Object(w.jsx)("li",{className:"navigation__list-item",children:Object(w.jsx)(r.c,{to:"/saved-movies",className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})})]}),Object(w.jsx)(r.b,{to:"/profile",className:"profile-button navigation__profile-button",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"})]})}),Z)}a(35);var ee=function(e){var t=e.loggedIn,a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],o=Object(c.useCallback)((function(){i(!0)}),[]),j=Object(c.useCallback)((function(e){e.target===e.currentTarget&&i(!1)}),[]);return Object(w.jsxs)("header",{className:"header",children:[Object(w.jsxs)("nav",{className:"header__links",children:[Object(w.jsx)(r.b,{to:"/",className:"logo header__logo",children:Object(w.jsx)("img",{className:"logo__img",alt:"Movies Explorer",src:X})}),t&&Object(w.jsxs)("div",{className:"header__navigation",children:[Object(w.jsx)(r.c,{activeClassName:"header__navigation-link_active",to:"/movies",className:"header__navigation-link",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(w.jsx)(r.c,{activeClassName:"header__navigation-link_active",to:"/saved-movies",className:"header__navigation-link",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"})]})]}),Object(w.jsx)("div",{className:"header__profile",children:t?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(r.b,{to:"/profile",className:"profile-button header__profile-button",children:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(w.jsx)("button",{type:"button",onClick:o,className:"header__burger"}),s&&Object(w.jsx)($,{onClose:j})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(r.b,{to:"/signup",className:"header__profile-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(w.jsx)(r.b,{to:"/signin",className:"header__profile-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})},te=a.p+"static/media/student.22e6909b.jpg";a(36);var ae=function(e){var t=new Date,a=t.getFullYear()-e.getFullYear(),c=t.getMonth()-e.getMonth();return(c<0||0===c&&t.getDate()<e.getDate())&&a--,a}(new Date(2002,3,25));var ce=function(){return Object(w.jsx)("section",{className:"aboutme",id:"student",children:Object(w.jsxs)("article",{children:[Object(w.jsx)("h2",{className:"aboutme__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(w.jsxs)("div",{className:"aboutme__content",children:[Object(w.jsx)("img",{className:"aboutme__image",src:te,alt:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(w.jsxs)("div",{className:"aboutme__student",children:[Object(w.jsxs)("div",{className:"aboutme__student-article",children:[Object(w.jsx)("h3",{className:"aboutme__heading",children:"\u0410\u0440\u0442\u0443\u0440"}),Object(w.jsxs)("p",{className:"aboutme__subheading",children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, ",ae," \u043b\u0435\u0442"]}),Object(w.jsx)("p",{className:"aboutme__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis, diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus. Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel aliquet tellus ultricies et."})]}),Object(w.jsxs)("div",{className:"aboutme__links",children:[Object(w.jsx)("a",{className:"aboutme__link",href:"https://t.me/ginzart",target:"_blank",rel:"noreferrer",children:"Telegram"}),Object(w.jsx)("a",{className:"aboutme__link",href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})]})})};a(37);function ne(e){var t=e.heading,a=e.children;return Object(w.jsxs)("li",{className:"aboutproject__column",children:[Object(w.jsx)("h3",{className:"aboutproject__heading",children:t}),Object(w.jsx)("p",{className:"aboutproject__text",children:a})]})}var se=function(){return Object(w.jsx)("section",{className:"aboutproject",id:"about",children:Object(w.jsxs)("article",{children:[Object(w.jsx)("h2",{className:"aboutproject__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(w.jsxs)("ul",{className:"aboutproject__columns",children:[Object(w.jsx)(ne,{heading:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(w.jsx)(ne,{heading:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e < 5 \u043d\u0435\u0434\u0435\u043b\u044c",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]}),Object(w.jsxs)("ul",{className:"aboutproject__plan",children:[Object(w.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(w.jsx)("p",{className:"aboutproject__plan-heading",children:"3 \u0434\u043d\u044f"}),Object(w.jsx)("p",{className:"aboutproject__plan-text",children:"Back-end"})]}),Object(w.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(w.jsx)("p",{className:"aboutproject__plan-heading",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(w.jsx)("p",{className:"aboutproject__plan-text",children:"Front-end"})]})]})]})})};a(38);var ie=function(){return Object(w.jsx)("nav",{className:"navtab",children:Object(w.jsxs)("ul",{className:"navtab__links",children:[Object(w.jsx)("li",{className:"navtab__link-container",children:Object(w.jsx)("a",{className:"navtab__link",href:"#about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(w.jsx)("li",{className:"navtab__link-container",children:Object(w.jsx)("a",{className:"navtab__link",href:"#techs",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(w.jsx)("li",{className:"navtab__link-container",children:Object(w.jsx)("a",{className:"navtab__link",href:"#student",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})})]})})};a(39);var re=function(){return Object(w.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(w.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(w.jsxs)("ul",{className:"portfolio__links",children:[Object(w.jsx)("li",{className:"portfolio__links-item",children:Object(w.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(w.jsx)("li",{className:"portfolio__links-item",children:Object(w.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/russian-travel/",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(w.jsx)("li",{className:"portfolio__links-item",children:Object(w.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/react-mesto-auth/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};a(40);var le=function(){return Object(w.jsx)("section",{className:"promo",children:Object(w.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})},oe=(a(41),[["HTML"],["CSS"],["JS","javascript"],["React"],["Git"],["Express.js","express"],["mongoDB"]]);var je=function(){return Object(w.jsxs)("section",{className:"techs",id:"techs",children:[Object(w.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(w.jsxs)("article",{className:"techs__content",children:[Object(w.jsx)("h3",{className:"techs__heading",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(w.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(w.jsx)("ul",{className:"techs__list",children:oe.map((function(e,t){var a;return Object(w.jsx)("li",{className:"techs__list-item",children:Object(w.jsx)("a",{className:"techs__list-link",href:"https://github.com/topics/".concat((null!==(a=e[1])&&void 0!==a?a:e[0]).toLowerCase()),target:"_blank",rel:"noreferrer",children:e[0]})},t)}))})]})]})};var de=function(e){var t=e.loggedIn;return Y("\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ee,{loggedIn:t}),Object(w.jsxs)("main",{children:[Object(w.jsx)(le,{}),Object(w.jsx)(ie,{}),Object(w.jsx)(se,{}),Object(w.jsx)(je,{}),Object(w.jsx)(ce,{}),Object(w.jsx)(re,{})]}),Object(w.jsx)(U,{})]})};a(42);function be(e){return"".concat(e," ").concat(["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"][(t=e)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]);var t}function ue(e){var t=e.card,a=e.type,c=["moviescard__button","moviescard__button_type_".concat(a)];return Object(w.jsxs)("li",{className:"moviescard",children:[Object(w.jsxs)("figure",{className:"moviescard__figure",children:[Object(w.jsxs)("div",{className:"moviescard__text-container",children:[Object(w.jsx)("figcaption",{className:"moviescard__title",children:t.name}),Object(w.jsx)("p",{className:"moviescard__duration",children:be(t.duration)})]}),Object(w.jsx)("img",{className:"moviescard__image",src:t.img,alt:t.name})]}),Object(w.jsx)("input",Object(x.a)({type:"checkbox",defaultChecked:"add"===a?t.added:!t.added},E(c)))]})}a(43);function me(e){var t=e.cards,a=e.type;return Object(w.jsx)("section",{className:"moviescards",children:Object(w.jsx)("ul",{className:"moviescards__list",children:t.map((function(e){var t;return Object(w.jsx)(ue,{card:e,type:a},null!==(t=e.movieId)&&void 0!==t?t:Math.random())}))})})}a(44);function he(){return Object(w.jsx)("section",{className:"searchform",children:Object(w.jsxs)("form",{className:"searchform__form",children:[Object(w.jsx)("fieldset",{className:"searchform__fieldset",children:Object(w.jsxs)("label",{className:"searchform__fieldset-container",children:[Object(w.jsx)("input",{className:"searchform__input",type:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c"}),Object(w.jsx)("button",{className:"searchform__submit",type:"submit"})]})}),Object(w.jsxs)("label",{className:"searchform__label",children:[Object(w.jsx)("input",{className:"searchform__switch",type:"checkbox"}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})]})})}function _e(e){var t=e.cards,a=void 0===t?[]:t,c=e.type,n=void 0===c?"add":c,s=e.loggedIn;return Y("add"===n?"\u0424\u0438\u043b\u044c\u043c\u044b":"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ee,{loggedIn:s}),Object(w.jsxs)("main",{children:[Object(w.jsx)(he,{}),Object(w.jsx)(me,{type:n,cards:a})]}),Object(w.jsx)(U,{})]})}a(45);function Oe(){return Object(w.jsx)("main",{children:Object(w.jsxs)("section",{className:"notfound",children:[Object(w.jsx)("h1",{className:"notfound__title",children:"404"}),Object(w.jsx)("h2",{className:"notfound__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(w.jsx)("nav",{className:"notfound__navigation",children:Object(w.jsx)(r.b,{to:"/",className:"notfound__link",children:"\u041d\u0430\u0437\u0430\u0434"})})]})})}a(46);var fe=["user","loggedIn"];function ge(e){var t=e.user,a=void 0===t?{}:t,c=e.loggedIn,n=Object(N.a)(e,fe);return Y("\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(ee,{loggedIn:c}),Object(w.jsxs)("main",{className:"profile",children:[Object(w.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",a.name,"!"]}),Object(w.jsxs)("ul",{className:"profile__details",children:[Object(w.jsxs)("li",{className:"profile__details-item",children:[Object(w.jsx)("h3",{className:"profile__details-heading",children:"\u0418\u043c\u044f"}),Object(w.jsx)("p",{className:"profile__details-text",children:a.name})]}),Object(w.jsxs)("li",{className:"profile__details-item",children:[Object(w.jsx)("h3",{className:"profile__details-heading",children:"E-mail"}),Object(w.jsx)("p",{className:"profile__details-text",children:a.email})]})]}),Object(w.jsxs)("div",{className:"profile__buttons",children:[Object(w.jsx)("button",{type:"button",className:"profile__button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(w.jsx)("button",{onClick:n.handleSignOut,type:"button",className:"profile__button profile__button_type_dangerous",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})]})}var xe=[{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:101,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"}],pe=xe.filter((function(e){return e.added}));var ve=function(){var e=Object(o.g)(),t=f("loggedIn",!1),a=Object(l.a)(t,2),n=a[0],s=a[1],i=function(e,t){var a=f(e,t),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useCallback)((function(e){i(btoa(e))}),[i]),o=Object(c.useRef)(atob(s));return Object(c.useEffect)((function(){o.current=atob(s)})),[o.current,r]}("email",""),r=Object(l.a)(i,2),_=r[0],O=r[1],g={name:"\u0410\u0440\u0442\u0443\u0440",email:_},x=Object(c.useCallback)((function(e){O(e),s(!0)}),[O,s]),p=Object(c.useCallback)((function(){localStorage.token?x(_):s(!1)}),[_,x,s]);return Object(c.useEffect)((function(){p()}),[p]),Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{exact:!0,path:j,children:Object(w.jsx)(de,{loggedIn:n})}),Object(w.jsx)(o.b,{path:[m,u],children:Object(w.jsx)(H,{loggedIn:n,handleLogin:function(t,a,c){if(a&&c)return new Promise((function(c,n){t.target.reset(),localStorage.token=Math.random(),x(a),e.push(d),c()}))},handleRegister:function(t,a,c){return new Promise((function(t,a){e.replace(u),t()}))}})}),Object(w.jsx)(o.b,{path:d,children:Object(w.jsx)(_e,{cards:xe,loggedIn:n})}),Object(w.jsx)(o.b,{path:b,children:Object(w.jsx)(_e,{cards:pe,type:"remove",loggedIn:n})}),Object(w.jsx)(o.b,{path:h,children:Object(w.jsx)(ge,{user:g,handleSignOut:function(){delete localStorage.token,s(!1),e.replace(j),window.scrollTo(0,0)},loggedIn:n})}),Object(w.jsx)(o.b,{component:Oe})]})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(r.a,{basename:"/movies-explorer-frontend",children:Object(w.jsx)(ve,{})})}),document.getElementById("root")),Ne()}],[[47,1,2]]]);
//# sourceMappingURL=main.ec858b17.chunk.js.map