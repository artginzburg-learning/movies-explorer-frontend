(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"},"b":"https://github.com/artginzburg/movies-explorer-frontend"}')},,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(11),i=a.n(s),r=(a(23),a(4)),l=a(5),o=a(3),j="/",d="/movies",b="/saved-movies",u="/signin",m="/signup",h="/profile",O={title:"\u0424\u0438\u043b\u044c\u043c\u044b"},_={title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"},f={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},g={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},p={title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"};function x(e,t){var a=Object(c.useState)((function(){try{var a=localStorage[e];return a?JSON.parse(a):t}catch(c){return console.log(c),t}})),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useCallback)((function(t){localStorage[e]=JSON.stringify(t),i(t)}),[e]);return function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=t}),[t]),Object(c.useEffect)((function(){if(a&&a.addEventListener){var t=function(e){return n.current(e)};return a.addEventListener(e,t),function(){a.removeEventListener(e,t)}}}),[e,a])}("storage",Object(c.useCallback)((function(a){a.key===e&&i(a.newValue?JSON.parse(a.newValue):t)}),[e,t])),[s,r]}var v=a(10),N=a(2),k={},y=!0;var w="Movies Explorer",S=function(e){Object(c.useEffect)((function(){document.title=e?"".concat(e," \xb7 ").concat(w):w}),[e])},C=a(8),I=a.p+"static/media/logo.1edc39b5.svg",E="form__input",F="form__button",M=a(0),T=["onSubmit"],B=Object(c.memo)((function(e){var t=e.onSubmit,a=Object(C.a)(e,T),n=Object(c.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(M.jsx)("form",Object(N.a)(Object(N.a)({action:"#",onSubmit:n,className:"form"},a),{},{children:a.children}))})),D=function(e){return e.filter(Boolean).join(" ")},L=function(e){return{className:D(e)}},z=["isFocused","validationMessage"],J="text",R=!0,P=2,A=Object(c.forwardRef)((function(e,t){var a,n,s,i=e.isFocused,r=e.validationMessage,l=Object(C.a)(e,z),o=null!==t&&void 0!==t?t:Object(c.createRef)(),j=null!==(a=l.type)&&void 0!==a?a:J,d=null!==(n=l.required)&&void 0!==n?n:R,b=j===J?P:null,u={type:j,minLength:null!==(s=l.minLength)&&void 0!==s?s:b,required:d,ref:o};return Object(c.useEffect)((function(){i&&o&&o.current&&o.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){o&&o.current&&o.current.focus()}),50)}),[i,o]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("input",Object(N.a)(Object(N.a)(Object(N.a)({},l),L([E,r&&"form__input_type_error",l.className])),u)),Object(M.jsx)("p",Object(N.a)(Object(N.a)({},L(["form__error",r&&"form__error_visible"])),{},{id:"".concat(l.id,"-error"),children:r}))]})})),W=["form","additionalInput"],q={autoCorrect:"off",spellCheck:!1,className:"".concat(E,"_theme_dark")},G="email",H="password",V=Object(c.memo)((function(e){var t=e.form,a=e.additionalInput,n=Object(C.a)(e,W),s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],d=i[1],b=o?"".concat(n.buttonSavingTitle,"..."):n.buttonTitle;return Object(M.jsxs)("div",{className:"content auth",children:[Object(M.jsx)(r.b,{to:j,className:"logo header__logo",children:Object(M.jsx)("img",{className:"logo__img",alt:"Movies Explorer",src:I})}),Object(M.jsx)("h2",{className:"auth__title",children:n.title}),Object(M.jsxs)(B,{onSubmit:function(e){d(!0);var a=t.getData(),c=a.email,s=a.password;n.handleSubmit(e,c,s).finally((function(){d(!1)}))},onReset:t.reset,children:[a&&Object(M.jsxs)("label",{children:[Object(M.jsx)("p",{children:a.title}),Object(M.jsx)(A,Object(N.a)(Object(N.a)(Object(N.a)({},q),{},{autoFocus:!0},t.register(a.name)),{},{id:a.name,type:a.name,autoComplete:a.name},a.props))]}),Object(M.jsxs)("label",{children:[Object(M.jsx)("p",{children:"E-mail"}),Object(M.jsx)(A,Object(N.a)(Object(N.a)(Object(N.a)({},q),{},{autoFocus:!a},t.register(G)),{},{id:G,type:G,autoComplete:G,placeholder:"mail@example.com"}))]}),Object(M.jsxs)("label",{children:[Object(M.jsx)("p",{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(M.jsx)(A,Object(N.a)(Object(N.a)(Object(N.a)({},q),t.register(H)),{},{type:H,id:n.passwordAutocomplete,autoComplete:n.passwordAutocomplete}))]}),Object(M.jsx)("button",{type:"submit",disabled:t.isInvalid||o,className:"auth__button ".concat(F," ").concat(F,"_theme_dark"),children:b})]}),Object(M.jsxs)("p",{className:"auth__signin",children:["".concat(n.otherOption.tagline," "),Object(M.jsx)(r.b,{to:n.otherOption.path,className:"auth__login-link",children:n.otherOption.title})]})]})})),Y={passwordAutocomplete:"current-password",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonTitle:f.action,buttonSavingTitle:f.title,otherOption:{tagline:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:m,title:g.title}},K=Object(c.memo)((function(e){return S(f.title),Object(M.jsx)(V,Object(N.a)(Object(N.a)({},e),Y))})),Q={passwordAutocomplete:"new-password",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonTitle:g.action,buttonSavingTitle:g.title,otherOption:{tagline:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:u,title:f.action}},U=Object(c.memo)((function(e){return S(g.title),Object(M.jsx)(V,Object(N.a)(Object(N.a)(Object(N.a)({},e),Q),{},{additionalInput:{title:"\u0418\u043c\u044f",name:"name",props:{placeholder:"\u0410\u0440\u0442"}}}))})),X=Object(c.memo)((function(e){var t,a,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(k),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)(y),b=Object(l.a)(d,2),u=b[0],m=b[1];function h(t,a){s((function(c){var n=Object(N.a)(Object(N.a)({},c),{},Object(v.a)({},t,a));return JSON.stringify(Object(N.a)(Object(N.a)({},e),n))===JSON.stringify(e)&&m(!0),n}))}function O(e,t){j((function(a){return Object(N.a)(Object(N.a)({},a),{},Object(v.a)({},e,t))}))}var _=Object(c.useCallback)((function(t,a){s(null!==a&&void 0!==a?a:e),j(k),m(y)}),[e]);return{registerForm:function(){return{isSubmitDisabled:u,onReset:_}},register:function(e){var t;return{value:null!==(t=n[e])&&void 0!==t?t:"",onChange:function(t){var a=t.currentTarget,c=a.value,n=a.validationMessage;h(e,c),O(e,c.length?n:"");var s=a.closest("form").checkValidity();m(!s)},validationMessage:o[e],name:e}},reset:_,getData:function(){return n},isInvalid:u}}({email:null!==(a="email",t=localStorage[a]&&atob(JSON.parse(localStorage[a])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(M.jsx)(o.a,{to:j}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(o.b,{path:u,children:Object(M.jsx)(K,{handleSubmit:e.handleLogin,form:n})}),Object(M.jsx)(o.b,{path:m,children:Object(M.jsx)(U,{handleSubmit:e.handleRegister,form:n})})]})})),Z=a(16),$=(a(33),(new Date).getFullYear());var ee=function(){return Object(M.jsxs)("footer",{className:"footer",children:[Object(M.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(M.jsxs)("div",{className:"footer__copyright",children:[Object(M.jsxs)("div",{className:"footer__links",children:[Object(M.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}),Object(M.jsx)("a",{className:"footer__link",href:Z.b,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(M.jsx)("a",{className:"footer__link",href:"https://t.me/artginzburg",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),Object(M.jsxs)("a",{className:"footer__link footer__link-copyright",href:Z.a.url,target:"_blank",rel:"noreferrer",children:["\xa9 ",$]})]})]})},te=(a(34),document.getElementById("modal-root"));function ae(e){return Object(s.createPortal)(Object(M.jsx)("section",{onClick:e.onClose,className:"navigation",children:Object(M.jsxs)("nav",{className:"navigation__container",children:[Object(M.jsx)("button",{onClick:e.onClose,type:"button",className:"navigation__close-button"}),Object(M.jsxs)("ul",{className:"navigation__list",children:[Object(M.jsx)("li",{className:"navigation__list-item",children:Object(M.jsx)(r.c,{exact:!0,to:j,className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(M.jsx)("li",{className:"navigation__list-item",children:Object(M.jsx)(r.c,{to:d,className:"navigation__link",activeClassName:"navigation__link_active",children:O.title})}),Object(M.jsx)("li",{className:"navigation__list-item",children:Object(M.jsx)(r.c,{to:b,className:"navigation__link",activeClassName:"navigation__link_active",children:_.title})})]}),Object(M.jsx)(r.b,{to:h,className:"profile-button navigation__profile-button",children:p.title})]})}),te)}a(35);var ce=function(e){var t=e.loggedIn,a=Object(c.useState)(!1),n=Object(l.a)(a,2),s=n[0],i=n[1],o=Object(c.useCallback)((function(){i(!0)}),[]),x=Object(c.useCallback)((function(e){e.target===e.currentTarget&&i(!1)}),[]);return Object(M.jsxs)("header",{className:"header",children:[Object(M.jsxs)("nav",{className:"header__links",children:[Object(M.jsx)(r.b,{to:j,className:"logo header__logo",children:Object(M.jsx)("img",{className:"logo__img",alt:"Movies Explorer",src:I})}),t&&Object(M.jsxs)("div",{className:"header__navigation",children:[Object(M.jsx)(r.c,{activeClassName:"header__navigation-link_active",to:d,className:"header__navigation-link",children:O.title}),Object(M.jsx)(r.c,{activeClassName:"header__navigation-link_active",to:b,className:"header__navigation-link",children:_.title})]})]}),Object(M.jsx)("div",{className:"header__profile",children:t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(r.b,{to:h,className:"profile-button header__profile-button",children:p.title}),Object(M.jsx)("button",{type:"button",onClick:o,className:"header__burger"}),s&&Object(M.jsx)(ae,{onClose:x})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(r.b,{to:m,className:"header__profile-link",children:g.title}),Object(M.jsx)(r.b,{to:u,className:"header__profile-link",children:f.action})]})})]})},ne=a.p+"static/media/student.22e6909b.jpg";a(36);var se=function(e){var t=new Date,a=t.getFullYear()-e.getFullYear(),c=t.getMonth()-e.getMonth();return(c<0||0===c&&t.getDate()<e.getDate())&&a--,a}(new Date(2002,3,25));var ie=function(){return Object(M.jsx)("section",{className:"aboutme",id:"student",children:Object(M.jsxs)("article",{children:[Object(M.jsx)("h2",{className:"aboutme__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(M.jsxs)("div",{className:"aboutme__content",children:[Object(M.jsx)("img",{className:"aboutme__image",src:ne,alt:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(M.jsxs)("div",{className:"aboutme__student",children:[Object(M.jsxs)("div",{className:"aboutme__student-article",children:[Object(M.jsx)("h3",{className:"aboutme__heading",children:"\u0410\u0440\u0442\u0443\u0440"}),Object(M.jsxs)("p",{className:"aboutme__subheading",children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, ",se," \u043b\u0435\u0442"]}),Object(M.jsx)("p",{className:"aboutme__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis, diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus. Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel aliquet tellus ultricies et."})]}),Object(M.jsxs)("div",{className:"aboutme__links",children:[Object(M.jsx)("a",{className:"aboutme__link",href:"https://t.me/ginzart",target:"_blank",rel:"noreferrer",children:"Telegram"}),Object(M.jsx)("a",{className:"aboutme__link",href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})]})})};a(37);function re(e){var t=e.heading,a=e.children;return Object(M.jsxs)("li",{className:"aboutproject__column",children:[Object(M.jsx)("h3",{className:"aboutproject__heading",children:t}),Object(M.jsx)("p",{className:"aboutproject__text",children:a})]})}var le=function(){return Object(M.jsx)("section",{className:"aboutproject",id:"about",children:Object(M.jsxs)("article",{children:[Object(M.jsx)("h2",{className:"aboutproject__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(M.jsxs)("ul",{className:"aboutproject__columns",children:[Object(M.jsx)(re,{heading:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(M.jsx)(re,{heading:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e < 5 \u043d\u0435\u0434\u0435\u043b\u044c",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]}),Object(M.jsxs)("ul",{className:"aboutproject__plan",children:[Object(M.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(M.jsx)("p",{className:"aboutproject__plan-heading",children:"3 \u0434\u043d\u044f"}),Object(M.jsx)("p",{className:"aboutproject__plan-text",children:"Back-end"})]}),Object(M.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(M.jsx)("p",{className:"aboutproject__plan-heading",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(M.jsx)("p",{className:"aboutproject__plan-text",children:"Front-end"})]})]})]})})};a(38);var oe=function(){return Object(M.jsx)("nav",{className:"navtab",children:Object(M.jsxs)("ul",{className:"navtab__links",children:[Object(M.jsx)("li",{className:"navtab__link-container",children:Object(M.jsx)("a",{className:"navtab__link",href:"#about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(M.jsx)("li",{className:"navtab__link-container",children:Object(M.jsx)("a",{className:"navtab__link",href:"#techs",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(M.jsx)("li",{className:"navtab__link-container",children:Object(M.jsx)("a",{className:"navtab__link",href:"#student",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})})]})})};a(39);var je=function(){return Object(M.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(M.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(M.jsxs)("ul",{className:"portfolio__links",children:[Object(M.jsx)("li",{className:"portfolio__links-item",children:Object(M.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(M.jsx)("li",{className:"portfolio__links-item",children:Object(M.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/russian-travel/",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(M.jsx)("li",{className:"portfolio__links-item",children:Object(M.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/react-mesto-auth/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};a(40);var de=function(){return Object(M.jsx)("section",{className:"promo",children:Object(M.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})},be=(a(41),[["HTML"],["CSS"],["JS","javascript"],["React"],["Git"],["Express.js","express"],["mongoDB"]]);var ue=function(){return Object(M.jsxs)("section",{className:"techs",id:"techs",children:[Object(M.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(M.jsxs)("article",{className:"techs__content",children:[Object(M.jsx)("h3",{className:"techs__heading",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(M.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(M.jsx)("ul",{className:"techs__list",children:be.map((function(e,t){var a;return Object(M.jsx)("li",{className:"techs__list-item",children:Object(M.jsx)("a",{className:"techs__list-link",href:"https://github.com/topics/".concat((null!==(a=e[1])&&void 0!==a?a:e[0]).toLowerCase()),target:"_blank",rel:"noreferrer",children:e[0]})},t)}))})]})]})};var me=function(e){var t=e.loggedIn;return S("\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ce,{loggedIn:t}),Object(M.jsxs)("main",{children:[Object(M.jsx)(de,{}),Object(M.jsx)(oe,{}),Object(M.jsx)(le,{}),Object(M.jsx)(ue,{}),Object(M.jsx)(ie,{}),Object(M.jsx)(je,{})]}),Object(M.jsx)(ee,{})]})};a(42);function he(e){return"".concat(e," ").concat(["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"][(t=e)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]);var t}function Oe(e){var t=e.card,a=e.type,c=["moviescard__button","moviescard__button_type_".concat(a)];return Object(M.jsxs)("li",{className:"moviescard",children:[Object(M.jsxs)("figure",{className:"moviescard__figure",children:[Object(M.jsxs)("div",{className:"moviescard__text-container",children:[Object(M.jsx)("figcaption",{className:"moviescard__title",children:t.name}),Object(M.jsx)("p",{className:"moviescard__duration",children:he(t.duration)})]}),Object(M.jsx)("img",{className:"moviescard__image",src:t.img,alt:t.name})]}),Object(M.jsx)("input",Object(N.a)({type:"checkbox",defaultChecked:"add"===a?t.added:!t.added},L(c)))]})}a(43);function _e(e){var t=e.cards,a=e.type;return Object(M.jsx)("section",{className:"moviescards",children:Object(M.jsx)("ul",{className:"moviescards__list",children:t.map((function(e){var t;return Object(M.jsx)(Oe,{card:e,type:a},null!==(t=e.movieId)&&void 0!==t?t:Math.random())}))})})}a(44);function fe(){return Object(M.jsx)("section",{className:"searchform",children:Object(M.jsxs)("form",{className:"searchform__form",children:[Object(M.jsx)("fieldset",{className:"searchform__fieldset",children:Object(M.jsxs)("label",{className:"searchform__fieldset-container",children:[Object(M.jsx)("input",{className:"searchform__input",type:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c"}),Object(M.jsx)("button",{className:"searchform__submit",type:"submit"})]})}),Object(M.jsxs)("label",{className:"searchform__label",children:[Object(M.jsx)("input",{className:"searchform__switch",type:"checkbox"}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})]})})}function ge(e){var t=e.cards,a=void 0===t?[]:t,c=e.type,n=void 0===c?"add":c,s=e.loggedIn;return S("add"===n?O.title:_.title),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ce,{loggedIn:s}),Object(M.jsxs)("main",{children:[Object(M.jsx)(fe,{}),Object(M.jsx)(_e,{type:n,cards:a})]}),Object(M.jsx)(ee,{})]})}a(45);function pe(){return Object(M.jsxs)("main",{className:"notfound",children:[Object(M.jsx)("h1",{className:"notfound__title",children:"404"}),Object(M.jsx)("h2",{className:"notfound__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(M.jsx)("nav",{className:"notfound__navigation",children:Object(M.jsx)(r.b,{to:j,className:"notfound__link",children:"\u041d\u0430\u0437\u0430\u0434"})})]})}a(46);var xe=["user","loggedIn"];function ve(e){var t=e.user,a=void 0===t?{}:t,c=e.loggedIn,n=Object(C.a)(e,xe);return S("\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ce,{loggedIn:c}),Object(M.jsxs)("main",{className:"profile",children:[Object(M.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",a.name,"!"]}),Object(M.jsxs)("ul",{className:"profile__details",children:[Object(M.jsxs)("li",{className:"profile__details-item",children:[Object(M.jsx)("h3",{className:"profile__details-heading",children:"\u0418\u043c\u044f"}),Object(M.jsx)("p",{className:"profile__details-text",children:a.name})]}),Object(M.jsxs)("li",{className:"profile__details-item",children:[Object(M.jsx)("h3",{className:"profile__details-heading",children:"E-mail"}),Object(M.jsx)("p",{className:"profile__details-text",children:a.email})]})]}),Object(M.jsxs)("div",{className:"profile__buttons",children:[Object(M.jsx)("button",{type:"button",className:"profile__button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(M.jsx)("button",{onClick:n.handleSignOut,type:"button",className:"profile__button profile__button_type_dangerous",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})]})}var Ne=[{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:101,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"},{name:"Banksy Most Wanted",duration:1,img:"https://avatars.mds.yandex.net/get-ott/1531675/2a00000173a565fcbce995019978598333fb/678x380",added:!0},{name:"\u0412 \u043f\u043e\u0433\u043e\u043d\u0435 \u0437\u0430 \u0411\u044d\u043d\u043a\u0441\u0438",duration:228,img:"https://static3.coolconnections.ru/images/12592/standard/hd/b9c88a679ecbec643da28f7d32e8904a3bde4758.jpg?1594733558"},{name:"\u042d\u0442\u043e \u043f\u043e\u0433\u043e\u043d\u044f, \u043a\u0440\u0447",duration:103,img:"https://www.film.ru/sites/default/files/movies/posters/49621981-1239252.jpg"}],ke=Ne.filter((function(e){return e.added}));var ye=function(){var e=Object(o.g)(),t=x("loggedIn",!1),a=Object(l.a)(t,2),n=a[0],s=a[1],i=function(e,t){var a=x(e,t),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useCallback)((function(e){i(btoa(e))}),[i]),o=Object(c.useRef)(atob(s));return Object(c.useEffect)((function(){o.current=atob(s)})),[o.current,r]}("email",""),r=Object(l.a)(i,2),O=r[0],_=r[1],f={name:"\u0410\u0440\u0442\u0443\u0440",email:O},g=Object(c.useCallback)((function(e){_(e),s(!0)}),[_,s]),p=Object(c.useCallback)((function(){localStorage.token?g(O):s(!1)}),[O,g,s]);return Object(c.useEffect)((function(){p()}),[p]),Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{exact:!0,path:j,children:Object(M.jsx)(me,{loggedIn:n})}),Object(M.jsx)(o.b,{path:[m,u],children:Object(M.jsx)(X,{loggedIn:n,handleLogin:function(t,a,c){if(a&&c)return new Promise((function(c,n){t.target.reset(),localStorage.token=Math.random(),g(a),e.push(d),c()}))},handleRegister:function(t,a,c){return new Promise((function(t,a){e.replace(u),t()}))}})}),Object(M.jsx)(o.b,{path:d,children:Object(M.jsx)(ge,{cards:Ne,loggedIn:n})}),Object(M.jsx)(o.b,{path:b,children:Object(M.jsx)(ge,{cards:ke,type:"remove",loggedIn:n})}),Object(M.jsx)(o.b,{path:h,children:Object(M.jsx)(ve,{user:f,handleSignOut:function(){delete localStorage.token,s(!1),e.replace(j),window.scrollTo(0,0)},loggedIn:n})}),Object(M.jsx)(o.b,{component:pe})]})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(M.jsx)(n.a.StrictMode,{children:Object(M.jsx)(r.a,{basename:"/movies-explorer-frontend",children:Object(M.jsx)(ye,{})})}),document.getElementById("root")),we()}],[[47,1,2]]]);
//# sourceMappingURL=main.d5d90a61.chunk.js.map