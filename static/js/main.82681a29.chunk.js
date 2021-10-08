(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"},"c":"https://github.com/artginzburg-learning/movies-explorer-frontend","b":"https://deeplomka.nomoredomains.club"}')},,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),i=(n(32),n(4)),o=n(9),l=n.n(o),u=n(25),j=n(11),d=n(3),b=n(5),h="api.nomoreparties.co",m="/",O="/movies",f="/saved-movies",_="/signin",v="/signup",p="/profile",g={title:"Movies Explorer"},x={title:"\u0424\u0438\u043b\u044c\u043c\u044b"},N={title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"},k={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},y={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},C={title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"},w=40,S="add",E="form__input",I="form__button",F="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$";var T=n(12),D=n(13),R=n(20),L=n(19),U=n(16),M=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(T.a)(this,e),this._handleFetch=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",t.ok?n:Promise.reject(null!==n&&void 0!==n?n:t.statusText));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._handleData=function(e){var t;return null!==(t=e.data)&&void 0!==t?t:e},this._baseUrl=t.baseUrl,this._headers=t.headers,this._credentials=t.credentials}return Object(D.a)(e,[{key:"_customFetch",value:function(e,t,n){var a,c={headers:null!==(a=this._headers)&&void 0!==a?a:{},credentials:this._credentials};return t&&"GET"!==t&&(c.method=t,"DELETE"!==t&&(c.headers["Content-Type"]="application/json")),n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl).concat(e),c).then(this._handleFetch).then(this._handleData)}}]),e}(),P=new URL(U.b);P.hostname="api.".concat(P.hostname);var z={host:P,endpoints:{register:"signup",login:"signin",logout:"signout",user:"users/me",movies:"movies"}},A=new(function(e){Object(R.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).saveMovie=function(t){return e._customFetch(z.endpoints.movies,"POST",t)},e.deleteMovie=function(t){return e._customFetch("".concat(z.endpoints.movies,"/").concat(t),"DELETE")},e}return Object(D.a)(n,[{key:"register",value:function(e,t,n){return this._customFetch(z.endpoints.register,"POST",{name:n,password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(z.endpoints.login,"POST",{password:t,email:e})}},{key:"logout",value:function(){return this._customFetch(z.endpoints.logout,"DELETE")}},{key:"getUserInfo",value:function(){return this._customFetch(z.endpoints.user)}},{key:"updateUserInfo",value:function(e){var t=e.name,n=e.email;return this._customFetch(z.endpoints.user,"PATCH",{name:t,email:n})}},{key:"getMovies",value:function(){return this._customFetch(z.endpoints.movies)}}]),n}(M))({baseUrl:z.host,credentials:"include"});function J(e,t){var n=Object(a.useState)((function(){try{var n=localStorage[e];return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(d.a)(n,2),r=c[0],s=c[1],i=Object(a.useCallback)((function(t){localStorage[e]=JSON.stringify(t),s(t)}),[e]);return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return c.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}("storage",Object(a.useCallback)((function(n){n.key===e&&s(n.newValue?JSON.parse(n.newValue):t)}),[e,t])),[r,i]}var q=n(2),B=n(0),G={name:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"},H=c.a.createContext(),V=c.a.createContext();function Z(e){var t=e.state,n=e.dispatch,a=e.children;return Object(B.jsx)(H.Provider,{value:t,children:Object(B.jsx)(V.Provider,{value:n,children:a})})}function Y(){var e=c.a.useContext(H);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function K(e,t){return JSON.stringify(e)===JSON.stringify(t)}function W(e,t,n,a){return $.apply(this,arguments)}function $(){return($=Object(j.a)(l.a.mark((function e(t,n,a,c){var r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(q.a)(Object(q.a)({},n),a),t(r),e.prev=2,e.next=5,A[c](a);case 5:return s=e.sent,K(r,s)||t(s),e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(2),t(n),console.log("Couldnt update user information on the server",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var Q=n(10),X={},ee=!0;function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(X),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(a.useState)(ee),j=Object(d.a)(u,2),b=j[0],h=j[1];function m(t,n){r((function(a){var c=Object(q.a)(Object(q.a)({},a),{},Object(Q.a)({},t,n));return JSON.stringify(Object(q.a)(Object(q.a)({},e),c))===JSON.stringify(e)&&h(!0),c}))}function O(e,t){l((function(n){return Object(q.a)(Object(q.a)({},n),{},Object(Q.a)({},e,t))}))}var f=Object(a.useCallback)((function(t,n){r(null!==n&&void 0!==n?n:e),l(X),h(ee)}),[e]);return{registerForm:function(){return{isSubmitDisabled:b,onReset:f}},register:function(e){var t;return{value:null!==(t=c[e])&&void 0!==t?t:"",onChange:function(t){var n=t.currentTarget,a=n.value,c=n.validationMessage;m(e,a),O(e,a.length?c:"");var r=n.closest("form").checkValidity();h(!r)},validationMessage:o[e],name:e}},reset:f,getData:function(){return c},isInvalid:b}}var ne=g.title,ae=function(e){Object(a.useEffect)((function(){document.title=e?"".concat(e," \xb7 ").concat(ne):ne}),[e])},ce=n(6),re=n.p+"static/media/logo.1edc39b5.svg",se=function(e){return e.filter(Boolean).join(" ")},ie=function(e){return{className:se(e)}},oe=(n(35),["onSubmit"]),le=Object(a.memo)((function(e){var t=e.onSubmit,n=Object(ce.a)(e,oe),c=Object(a.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(B.jsx)("form",Object(q.a)(Object(q.a)({action:"#",onSubmit:c,className:"form"},n),{},{children:n.children}))})),ue=(n(36),["isFocused","validationMessage","labelTitle"]),je="text",de=!0,be=2,he=Object(a.forwardRef)((function(e,t){var n,c,r,s=e.isFocused,i=e.validationMessage,o=(e.labelTitle,Object(ce.a)(e,ue)),l=null!==t&&void 0!==t?t:Object(a.createRef)(),u=null!==(n=o.type)&&void 0!==n?n:je,j=null!==(c=o.required)&&void 0!==c?c:de,d=u===je?be:null,b={type:u,minLength:null!==(r=o.minLength)&&void 0!==r?r:d,required:j,ref:l};return Object(a.useEffect)((function(){s&&l&&l.current&&l.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){l&&l.current&&l.current.focus()}),50)}),[s,l]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("input",Object(q.a)(Object(q.a)(Object(q.a)({},o),ie([E,i&&"".concat(E,"_type_error"),o.className])),b)),Object(B.jsx)("p",Object(q.a)(Object(q.a)({},ie(["".concat(E,"-error"),"".concat(o.className,"-error"),i&&"".concat(E,"-error_visible")])),{},{id:"".concat(o.id,"-error"),children:i}))]})})),me=["form","additionalInput"],Oe={autoCorrect:"off",spellCheck:!1,className:"".concat(E,"_theme_dark")},fe="email",_e="password",ve=Object(a.memo)((function(e){var t=e.form,n=e.additionalInput,c=Object(ce.a)(e,me),r=Object(a.useState)(!1),s=Object(d.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],O=o?"".concat(c.buttonSavingTitle,"..."):c.buttonTitle;return Object(B.jsxs)("div",{className:"auth",children:[Object(B.jsx)(i.b,{to:m,className:"logo auth__logo",children:Object(B.jsx)("img",{className:"logo__img",alt:g.title,src:re})}),Object(B.jsx)("h2",{className:"auth__title",children:c.title}),Object(B.jsxs)(le,{onSubmit:function(e){l(!0);var n=t.getData(),a=n.name,r=n.email,s=n.password;c.handleSubmit(e,r,s,a).catch((function(e){t.isInvalid=!0,h(""),setTimeout((function(){e.message?h(e.message):console.log(e)}))})).finally((function(){l(!1)}))},onReset:t.reset,children:[Object(B.jsxs)("div",{className:"form__container",children:[n&&Object(B.jsxs)("label",{children:[Object(B.jsx)("p",{className:"auth__label",children:n.title}),Object(B.jsx)(he,Object(q.a)(Object(q.a)(Object(q.a)(Object(q.a)({},Oe),{},{autoFocus:!0},t.register(n.name)),{},{id:n.name,type:n.name,autoComplete:n.name},n.props),{},{disabled:o}))]}),Object(B.jsxs)("label",{children:[Object(B.jsx)("p",{className:"auth__label",children:"E-mail"}),Object(B.jsx)(he,Object(q.a)(Object(q.a)(Object(q.a)({},Oe),{},{autoFocus:!n},t.register(fe)),{},{pattern:F,id:fe,type:fe,autoComplete:fe,placeholder:"mail@example.com",disabled:o}))]}),Object(B.jsxs)("label",{children:[Object(B.jsx)("p",{className:"auth__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(B.jsx)(he,Object(q.a)(Object(q.a)(Object(q.a)({},Oe),t.register(_e)),{},{type:_e,id:c.passwordAutocomplete,autoComplete:c.passwordAutocomplete,placeholder:"n4Gorshke7idelKING",disabled:o}))]})]}),Object(B.jsx)("p",Object(q.a)(Object(q.a)({},ie(["auth__status",b&&"auth__status_visible"])),{},{children:b})),Object(B.jsx)("button",{type:"submit",disabled:t.isInvalid||o,className:"auth__button ".concat(I," ").concat(I,"_theme_dark"),children:O})]}),Object(B.jsxs)("p",{className:"auth__signin",children:["".concat(c.otherOption.tagline," "),Object(B.jsx)(i.b,{to:c.otherOption.path,className:"auth__signin-link",children:c.otherOption.title})]})]})})),pe={passwordAutocomplete:"current-password",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonTitle:k.action,buttonSavingTitle:k.title,otherOption:{tagline:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:v,title:y.title}},ge=Object(a.memo)((function(e){return ae(k.title),Object(B.jsx)(ve,Object(q.a)(Object(q.a)({},e),pe))})),xe={passwordAutocomplete:"new-password",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonTitle:y.action,buttonSavingTitle:y.title,otherOption:{tagline:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:_,title:k.action}},Ne=Object(a.memo)((function(e){return ae(y.title),Object(B.jsx)(ve,Object(q.a)(Object(q.a)(Object(q.a)({},e),xe),{},{additionalInput:{title:"\u0418\u043c\u044f",name:"name",props:{placeholder:"\u0410\u0440\u0442",pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]+"}}}))})),ke=(n(45),Object(a.memo)((function(e){var t,n,a=te({email:null!==(n="email",t=localStorage[n]&&atob(JSON.parse(localStorage[n])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(B.jsx)(b.a,{to:m}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(b.b,{path:_,children:Object(B.jsx)(ge,{handleSubmit:e.handleLogin,form:a})}),Object(B.jsx)(b.b,{path:v,children:Object(B.jsx)(Ne,{handleSubmit:e.handleRegister,form:a})})]})}))),ye=(n(46),(new Date).getFullYear());var Ce=function(){return Object(B.jsxs)("footer",{className:"footer",children:[Object(B.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(B.jsxs)("div",{className:"footer__copyright",children:[Object(B.jsxs)("div",{className:"footer__links",children:[Object(B.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}),Object(B.jsx)("a",{className:"footer__link",href:U.c,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(B.jsx)("a",{className:"footer__link",href:"https://t.me/artginzburg",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),Object(B.jsxs)("a",{className:"footer__link footer__link-copyright",href:U.a.url,target:"_blank",rel:"noreferrer",children:["\xa9 ",ye]})]})]})},we=(n(47),document.getElementById("modal-root"));function Se(e){function t(t){t.target.className.includes("active")||e.onClose()}return Object(r.createPortal)(Object(B.jsx)("section",{onClick:e.onClose,className:"navigation",children:Object(B.jsxs)("nav",{className:"navigation__container",children:[Object(B.jsx)("button",{onClick:e.onClose,type:"button",className:"navigation__close-button"}),Object(B.jsxs)("ul",{className:"navigation__list",children:[Object(B.jsx)("li",{className:"navigation__list-item",children:Object(B.jsx)(i.c,{exact:!0,to:m,className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(B.jsx)("li",{className:"navigation__list-item",children:Object(B.jsx)(i.c,{to:O,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:x.title})}),Object(B.jsx)("li",{className:"navigation__list-item",children:Object(B.jsx)(i.c,{to:f,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:N.title})})]}),Object(B.jsx)(i.b,{to:p,className:"profile-button navigation__profile-button",children:C.title})]})}),we)}n(48);var Ee=function(e){var t=e.loggedIn,n=e.className,c=Object(a.useState)(!1),r=Object(d.a)(c,2),s=r[0],o=r[1],l=Object(a.useCallback)((function(){o(!0)}),[]),u=Object(a.useCallback)((function(e){e&&e.target!==e.currentTarget||o(!1)}),[]);return Object(B.jsxs)("header",Object(q.a)(Object(q.a)({},ie(["header",n])),{},{children:[Object(B.jsxs)("nav",{className:"header__links",children:[Object(B.jsx)(i.b,{to:m,className:"logo header__logo",children:Object(B.jsx)("img",{className:"logo__img",alt:g.title,src:re})}),t&&Object(B.jsxs)("div",{className:"header__navigation",children:[Object(B.jsx)(i.c,{activeClassName:"header__navigation-link_active",to:O,className:"header__navigation-link",children:x.title}),Object(B.jsx)(i.c,{activeClassName:"header__navigation-link_active",to:f,className:"header__navigation-link",children:N.title})]})]}),Object(B.jsx)("div",{className:"header__profile",children:t?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(i.b,{to:p,className:"profile-button header__profile-button",children:C.title}),Object(B.jsx)("button",{type:"button",onClick:l,className:"header__burger"}),s&&Object(B.jsx)(Se,{onClose:u})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(i.b,{to:v,className:"header__profile-link",children:y.title}),Object(B.jsx)(i.b,{to:_,className:"header__profile-link",children:k.action})]})})]}))},Ie=n.p+"static/media/student.22e6909b.jpg";n(49);var Fe=function(e){var t=new Date,n=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();return(a<0||0===a&&t.getDate()<e.getDate())&&n--,n}(new Date(2002,3,25));var Te=function(){return Object(B.jsx)("section",{className:"aboutme",id:"student",children:Object(B.jsxs)("article",{children:[Object(B.jsx)("h2",{className:"aboutme__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(B.jsxs)("div",{className:"aboutme__content",children:[Object(B.jsx)("img",{className:"aboutme__image",src:Ie,alt:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(B.jsxs)("div",{className:"aboutme__student",children:[Object(B.jsxs)("div",{className:"aboutme__student-article",children:[Object(B.jsx)("h3",{className:"aboutme__heading",children:"\u0410\u0440\u0442\u0443\u0440"}),Object(B.jsxs)("p",{className:"aboutme__subheading",children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, ",Fe," \u043b\u0435\u0442"]}),Object(B.jsx)("p",{className:"aboutme__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis, diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus. Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel aliquet tellus ultricies et."})]}),Object(B.jsxs)("div",{className:"aboutme__links",children:[Object(B.jsx)("a",{className:"aboutme__link",href:"https://t.me/ginzart",target:"_blank",rel:"noreferrer",children:"Telegram"}),Object(B.jsx)("a",{className:"aboutme__link",href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})]})})};n(50);function De(e){var t=e.heading,n=e.children;return Object(B.jsxs)("li",{className:"aboutproject__column",children:[Object(B.jsx)("h3",{className:"aboutproject__heading",children:t}),Object(B.jsx)("p",{className:"aboutproject__text",children:n})]})}var Re=function(){return Object(B.jsx)("section",{className:"aboutproject",id:"about",children:Object(B.jsxs)("article",{children:[Object(B.jsx)("h2",{className:"aboutproject__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(B.jsxs)("ul",{className:"aboutproject__columns",children:[Object(B.jsx)(De,{heading:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(B.jsx)(De,{heading:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e < 5 \u043d\u0435\u0434\u0435\u043b\u044c",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]}),Object(B.jsxs)("ul",{className:"aboutproject__plan",children:[Object(B.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(B.jsx)("p",{className:"aboutproject__plan-heading",children:"3 \u0434\u043d\u044f"}),Object(B.jsx)("p",{className:"aboutproject__plan-text",children:"Back-end"})]}),Object(B.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(B.jsx)("p",{className:"aboutproject__plan-heading",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(B.jsx)("p",{className:"aboutproject__plan-text",children:"Front-end"})]})]})]})})};n(51);var Le=function(){return Object(B.jsx)("nav",{className:"navtab",children:Object(B.jsxs)("ul",{className:"navtab__links",children:[Object(B.jsx)("li",{className:"navtab__link-container",children:Object(B.jsx)("a",{className:"navtab__link",href:"#about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(B.jsx)("li",{className:"navtab__link-container",children:Object(B.jsx)("a",{className:"navtab__link",href:"#techs",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(B.jsx)("li",{className:"navtab__link-container",children:Object(B.jsx)("a",{className:"navtab__link",href:"#student",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})})]})})};n(52);var Ue=function(){return Object(B.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(B.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(B.jsxs)("ul",{className:"portfolio__links",children:[Object(B.jsx)("li",{className:"portfolio__links-item",children:Object(B.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(B.jsx)("li",{className:"portfolio__links-item",children:Object(B.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/russian-travel/",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(B.jsx)("li",{className:"portfolio__links-item",children:Object(B.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/react-mesto-auth/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};n(53);var Me=function(){return Object(B.jsx)("section",{className:"promo",children:Object(B.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})},Pe=(n(54),[["HTML"],["CSS"],["JS","javascript"],["React"],["Git"],["Express.js","express"],["mongoDB"]]);var ze=function(){return Object(B.jsxs)("section",{className:"techs",id:"techs",children:[Object(B.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(B.jsxs)("article",{className:"techs__content",children:[Object(B.jsx)("h3",{className:"techs__heading",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(B.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(B.jsx)("ul",{className:"techs__list",children:Pe.map((function(e,t){var n;return Object(B.jsx)("li",{className:"techs__list-item",children:Object(B.jsx)("a",{className:"techs__list-link",href:"https://github.com/topics/".concat((null!==(n=e[1])&&void 0!==n?n:e[0]).toLowerCase()),target:"_blank",rel:"noreferrer",children:e[0]})},t)}))})]})]})};n(55);var Ae=function(e){var t=e.loggedIn;return ae("\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Ee,{className:"main__header",loggedIn:t}),Object(B.jsxs)("main",{children:[Object(B.jsx)(Me,{}),Object(B.jsx)(Le,{}),Object(B.jsx)(Re,{}),Object(B.jsx)(ze,{}),Object(B.jsx)(Te,{}),Object(B.jsx)(Ue,{})]}),Object(B.jsx)(Ce,{})]})},Je=new(function(e){Object(R.a)(n,e);var t=Object(L.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"getAllMovies",value:function(){return this._customFetch("")}}]),n}(M))({baseUrl:"https://".concat(h,"/beatfilm-movies")});n(56);var qe=["card","isSaved","type"];function Be(e){return"".concat(e," ").concat(["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"][(t=e)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]);var t}function Ge(e){var t=e.card,n=e.isSaved,a=e.type,c=Object(ce.a)(e,qe),r=a===S,s=["moviescard__button","moviescard__button_type_".concat(a)],i=t.nameRU||t.nameEN;return Object(B.jsxs)("li",{className:"moviescard",children:[Object(B.jsx)("a",{className:"moviescard__link",href:t.trailerLink,target:"_blank",rel:"noreferrer",children:Object(B.jsxs)("figure",{className:"moviescard__figure",children:[Object(B.jsxs)("div",{className:"moviescard__text-container",children:[Object(B.jsx)("figcaption",{className:"moviescard__title",children:i}),Object(B.jsx)("p",{className:"moviescard__duration",children:Be(t.duration)})]}),Object(B.jsx)("img",{className:"moviescard__image",src:r?"https://".concat(h).concat(t.image.url):t.image,alt:i})]})}),Object(B.jsx)("input",Object(q.a)({type:"checkbox",checked:r?n:!n,onChange:function(){n?c.onCardDelete(t):c.onCardSave(t)}},ie(s)))]})}n(57);var He,Ve=["cards","savedCards","type"],Ze=480,Ye=768,Ke=1280,We=(He={},Object(Q.a)(He,Ke,{cardsPerRow:3,initialRows:4,addRowsOnDemand:1}),Object(Q.a)(He,Ye,{cardsPerRow:2,initialRows:4,addRowsOnDemand:1}),Object(Q.a)(He,Ze,{cardsPerRow:1,initialRows:5,addRowsOnDemand:2}),He);function $e(e){var t=e.cards,n=e.savedCards,c=e.type,r=Object(ce.a)(e,Ve),s=c===S,i=s?t:n,o=Object(a.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(a.useState)(0),h=Object(d.a)(b,2),m=h[0],O=h[1],f=function(){var e=Object(a.useState)([0,0]),t=Object(d.a)(e,2),n=t[0],c=t[1];function r(){c([window.innerWidth,window.innerHeight])}return Object(a.useLayoutEffect)((function(){return window.addEventListener("resize",r),r(),function(){window.removeEventListener("resize",r)}}),[]),n}(),_=Object(d.a)(f,1)[0];return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=Object(a.useRef)();Object(a.useEffect)((function(){clearTimeout(n.current),n.current=setTimeout(e,t)}),[e,t])}(Object(a.useCallback)((function(){var e,t=(e=_)>=Ke?We[Ke]:e>=Ye?We[Ye]:We[Ze],n=t.cardsPerRow*t.initialRows;if(O(t.addRowsOnDemand*t.cardsPerRow),!u.length)return j(i.slice(0,n));j(i.slice(0,u.length))}),[u.length,i,_])),Object(B.jsxs)("section",{className:"moviescards",children:[Object(B.jsx)("ul",{className:"moviescards__list",children:u.map((function(e){var t;return Object(a.createElement)(Ge,Object(q.a)(Object(q.a)({},r),{},{card:e,isSaved:!s||n.some((function(t){return t.movieId===String(e.id)})),type:c,key:null!==(t=s?e.id:e.movieId)&&void 0!==t?t:Math.random()}))}))}),u.length<i.length&&Object(B.jsx)("button",{className:"moviescards__more",type:"button",onClick:function(){j(i.slice(0,u.length+m))},children:"\u0415\u0449\u0451"})]})}n(58);var Qe=function(){return Object(B.jsx)("div",{className:"preloader",children:Object(B.jsx)("div",{className:"preloader__container",children:Object(B.jsx)("span",{className:"preloader__round"})})})};n(59);function Xe(e){var t=e.filterShortState,n=e.queryState,a=Object(d.a)(t,2),c=a[0],r=a[1],s=Object(d.a)(n,2),i=s[0],o=s[1];function l(e){var t;e.preventDefault(),o(null!==(t=e.target.value)&&void 0!==t?t:e.target.search.value)}return Object(B.jsx)("section",{className:"searchform",children:Object(B.jsxs)("form",{onSubmit:l,className:"searchform__form",children:[Object(B.jsx)("fieldset",{className:"searchform__fieldset",children:Object(B.jsxs)("label",{className:"searchform__fieldset-container",children:[Object(B.jsx)("input",{onBlur:l,defaultValue:i,name:"search",required:!0,className:"searchform__input",type:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c"}),Object(B.jsx)("button",{className:"searchform__submit",type:"submit"})]})}),Object(B.jsxs)("label",{title:"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c <= ".concat(w),className:"searchform__label",children:[Object(B.jsx)("input",{checked:c,onChange:function(){r(!c)},className:"searchform__switch",type:"checkbox"}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})]})})}n(60);var et=["savedCards","type","loggedIn"];function tt(e){var t=e.savedCards,n=void 0===t?[]:t,c=e.type,r=void 0===c?S:c,s=e.loggedIn,i=Object(ce.a)(e,et),o=r===S;ae(o?x.title:N.title);var l=Y(),u=Object(a.useState)(!1),j=J("query",""),b=j[0],h=u[0],m=J("cards",[]),O=Object(d.a)(m,2),f=O[0],_=O[1],v=J("lastCardsFetch",0),p=Object(d.a)(v,2),g=p[0],k=p[1],y=Object(a.useState)(""),C=Object(d.a)(y,2),E=C[0],I=C[1],F=(Date.now()-g)/864e5>=1;Object(a.useEffect)((function(){!b||!F&&f.length||Je.getAllMovies().then((function(e){_(e),k(Date.now()),I("")})).catch((function(e){I(f.length?"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c, \u043d\u043e \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u043c\u0443 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d.":"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d. \u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"),console.log("Couldnt get initial cards from the server",e)}))}),[_,b,g,k,F,f]);var T=n.filter((function(e){var t;return!e.owner||(null!==(t=e.owner._id)&&void 0!==t?t:e.owner)===l._id})),D=function(e){return!h||e.duration<=w},R=function(e){var t,n;return!b||(null===(t=e.nameRU)||void 0===t?void 0:t.toLowerCase().includes(b.toLowerCase()))||(null===(n=e.nameEN)||void 0===n?void 0:n.toLowerCase().includes(b.toLowerCase()))},L=f.filter(D).filter(R),U=T.filter(D).filter(R),M=o?!L.length:!U.length;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Ee,{loggedIn:s}),Object(B.jsxs)("main",{children:[Object(B.jsx)(Xe,{filterShortState:u,queryState:j}),f.length&&M?Object(B.jsx)("p",{className:"movies__status",children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):!b&&o?null:f.length?Object(B.jsx)($e,Object(q.a)(Object(q.a)({},i),{},{query:b,type:r,cards:L,savedCards:U})):Object(B.jsx)(Qe,{}),E&&Object(B.jsx)("p",{className:"movies__status movies__status_type_error",children:E})]}),Object(B.jsx)(Ce,{})]})}n(61);function nt(){return Object(B.jsxs)("main",{className:"notfound",children:[Object(B.jsx)("h1",{className:"notfound__title",children:"404"}),Object(B.jsx)("h2",{className:"notfound__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(B.jsx)("nav",{className:"notfound__navigation",children:Object(B.jsx)(i.b,{to:m,className:"notfound__link",children:"\u041d\u0430\u0437\u0430\u0434"})})]})}n(62);var at=["loggedIn"],ct=["reset"],rt={autoCorrect:"off",spellCheck:!1,className:"".concat(E,"_theme_dark profile__details-text")};function st(e){var t=e.loggedIn,n=Object(ce.a)(e,at);ae("\u041f\u0440\u043e\u0444\u0438\u043b\u044c");var r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],u=Y(),b=function(){var e=c.a.useContext(V);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}(),h=te(u),m=(h.reset,Object(ce.a)(h,ct)),O=Object(a.useState)(!1),f=Object(d.a)(O,2),_=f[0],v=f[1],p=_?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c";function g(){return(g=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,W(b,u,m.getData(),"updateUserInfo").then((function(){o(""),setTimeout((function(){o("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.")}))})).catch((function(e){m.isInvalid=!0,o(""),setTimeout((function(){var t,n;e.message?o(e.message+((null===(t=e.validation)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.message)?" \u2014 ".concat(e.validation.body.message):"")):console.log(e)}))})).finally((function(){v(!1)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Ee,{loggedIn:t}),Object(B.jsx)("main",{children:Object(B.jsxs)(le,{className:"profile",onSubmit:function(){return g.apply(this,arguments)},onReset:m.reset,children:[Object(B.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",u.name,"!"]}),Object(B.jsxs)("div",{className:"profile__details",children:[Object(B.jsxs)("label",{className:"profile__details-item",children:[Object(B.jsx)("p",{className:"profile__details-heading",children:"\u0418\u043c\u044f"}),Object(B.jsx)("div",{className:"profile__input-container",children:Object(B.jsx)(he,Object(q.a)(Object(q.a)(Object(q.a)({},rt),{},{autoComplete:"name"},m.register("name")),{},{placeholder:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433",disabled:_}))})]}),Object(B.jsxs)("label",{className:"profile__details-item",children:[Object(B.jsx)("p",{className:"profile__details-heading",children:"E-mail"}),Object(B.jsx)("div",{className:"profile__input-container",children:Object(B.jsx)(he,Object(q.a)(Object(q.a)(Object(q.a)({},rt),{},{type:"email",autoComplete:"email"},m.register("email")),{},{pattern:F,placeholder:"art.ginzburg@ya.ru",disabled:_}))})]})]}),Object(B.jsx)("p",Object(q.a)(Object(q.a)({},ie(["profile__status",i&&"profile__status_visible"])),{},{children:i})),Object(B.jsxs)("div",{className:"profile__buttons",children:[Object(B.jsx)("button",{type:"submit",disabled:m.isInvalid||_,className:"profile__button",children:p}),Object(B.jsx)("button",{onClick:n.handleSignOut,type:"button",className:"profile__button profile__button_type_dangerous",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})})]})}var it=function(e){return Object(B.jsx)(b.b,{path:e.path,children:e.loggedIn?e.children:Object(B.jsx)(b.a,{to:m})})};var ot=function(){var e=Object(b.g)(),t=J("currentUser",G),n=Object(d.a)(t,2),c=n[0],r=n[1],s=J("loggedIn",!1),i=Object(d.a)(s,2),o=i[0],g=i[1],x=function(e,t){var n=J(e,t),c=Object(d.a)(n,2),r=c[0],s=c[1],i=Object(a.useCallback)((function(e){s(btoa(e))}),[s]),o=Object(a.useRef)(atob(r));return Object(a.useEffect)((function(){o.current=atob(r)})),[o.current,i]}("email","")[1],N=J("savedCards",[]),k=Object(d.a)(N,2),y=k[0],C=k[1];Object(a.useEffect)((function(){o&&(A.getUserInfo().then(r).catch((function(e){return console.log("Couldnt get user info from the server",e)})),A.getMovies().then(C).catch((function(e){return console.log("Couldnt get saved cards from the server",e)})))}),[o,r,C]);var w=Object(a.useCallback)((function(e){var t=y,n=e.id?y.find((function(t){return t.movieId===String(e.id)})):e;return C(y.filter((function(t){return e.id?t.movieId!==String(e.id):t._id!==e._id}))),A.deleteMovie(n._id).catch((function(e){C(t),console.log("Couldnt delete card on the server",e)}))}),[y,C]);function S(e){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y,a={country:t.country,director:t.director,duration:t.duration,year:t.year,description:t.description,image:"https://".concat(h).concat(t.image.url),trailer:t.trailerLink,thumbnail:"https://".concat(h).concat(t.image.formats.thumbnail.url),movieId:String(t.id),nameRU:t.nameRU,nameEN:t.nameEN},C([a].concat(Object(u.a)(y))),e.prev=3,e.next=6,A.saveMovie(a);case 6:return c=e.sent,C([c].concat(Object(u.a)(y))),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(3),C(n),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var I=Object(a.useCallback)((function(e){x(e),g(!0)}),[x,g]),F=Object(a.useCallback)((function(){A.getUserInfo().then((function(e){e&&I(e.email)})).catch((function(e){g(!1),console.log(e)}))}),[I,g]);function T(t,n,a){if(n&&a)return A.login(n,a).then((function(a){a&&(t.target.reset(),I(n),e.push(O))}))}return Object(a.useEffect)((function(){F()}),[F]),Object(B.jsx)(Z,{state:c,dispatch:r,children:Object(B.jsxs)(b.d,{children:[Object(B.jsx)(b.b,{exact:!0,path:m,children:Object(B.jsx)(Ae,{loggedIn:o})}),Object(B.jsx)(b.b,{path:[v,_],children:Object(B.jsx)(ke,{loggedIn:o,handleLogin:T,handleRegister:function(e,t,n,a){return A.register(t,n,a).then((function(){T(e,t,n)}))}})}),Object(B.jsx)(it,{path:O,loggedIn:o,children:Object(B.jsx)(tt,{onCardSave:S,onCardDelete:w,savedCards:y,loggedIn:o})}),Object(B.jsx)(it,{path:f,loggedIn:o,children:Object(B.jsx)(tt,{onCardSave:S,onCardDelete:w,savedCards:y,type:"remove",loggedIn:o})}),Object(B.jsx)(it,{path:p,loggedIn:o,children:Object(B.jsx)(st,{handleSignOut:function(){A.logout().then((function(){g(!1),e.replace(m),delete localStorage.query,window.scrollTo(0,0)})).catch((function(e){console.log(e)}))},loggedIn:o})}),Object(B.jsx)(b.b,{component:nt})]})})},lt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(i.a,{basename:"",children:Object(B.jsx)(ot,{})})}),document.getElementById("root")),lt()}],[[63,1,2]]]);
//# sourceMappingURL=main.82681a29.chunk.js.map