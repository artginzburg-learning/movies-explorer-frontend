(this["webpackJsonpmovies-explorer-frontend"]=this["webpackJsonpmovies-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":{"name":"Art Ginzburg","email":"art.ginzburg@ya.ru","url":"https://github.com/artginzburg"},"c":"https://github.com/artginzburg-learning/movies-explorer-frontend","b":"https://deeplomka.nomoredomains.club"}')},,,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),i=n.n(r),s=(n(32),n(3)),l=n(9),o=n.n(l),u=n(25),j=n(10),d=n(5),b=n(4),h="api.nomoreparties.co",m="/",O="/movies",f="/saved-movies",_="/signin",p="/signup",v="/profile",g={title:"Movies Explorer"},x={title:"\u0424\u0438\u043b\u044c\u043c\u044b"},N={title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"},k={title:"\u0412\u0445\u043e\u0434",action:"\u0412\u043e\u0439\u0442\u0438"},y={title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",action:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},C={title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"};var S=n(11),w=n(12),I=n(20),E=n(19),F=n(15),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(S.a)(this,e),this._handleFetch=function(e){return e.ok?e.json():Promise.reject(e.statusText)},this._handleData=function(e){var t;return null!==(t=e.data)&&void 0!==t?t:e},this._baseUrl=t.baseUrl,this._headers=t.headers,this._credentials=t.credentials}return Object(w.a)(e,[{key:"_customFetch",value:function(e,t,n){var a,c={headers:null!==(a=this._headers)&&void 0!==a?a:{},credentials:this._credentials};return t&&"GET"!==t&&(c.method=t,"DELETE"!==t&&(c.headers["Content-Type"]="application/json")),n&&(c.body=JSON.stringify(n)),fetch("".concat(this._baseUrl).concat(e),c).then(this._handleFetch).then(this._handleData)}}]),e}(),D=new URL(F.b);D.hostname="api.".concat(D.hostname);var L={host:D,endpoints:{register:"signup",login:"signin",logout:"signout",user:"users/me",movies:"movies"}},M=new(function(e){Object(I.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(S.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).saveMovie=function(t){return e._customFetch(L.endpoints.movies,"POST",t)},e.deleteMovie=function(t){return e._customFetch("".concat(L.endpoints.movies,"/").concat(t),"DELETE")},e}return Object(w.a)(n,[{key:"register",value:function(e,t,n){return this._customFetch(L.endpoints.register,"POST",{name:n,password:t,email:e})}},{key:"login",value:function(e,t){return this._customFetch(L.endpoints.login,"POST",{password:t,email:e})}},{key:"logout",value:function(){return this._customFetch(L.endpoints.logout,"DELETE")}},{key:"getUserInfo",value:function(){return this._customFetch(L.endpoints.user)}},{key:"updateUserInfo",value:function(e){var t=e.name,n=e.email;return this._customFetch(L.endpoints.user,"PATCH",{name:t,email:n})}},{key:"getMovies",value:function(){return this._customFetch(L.endpoints.movies)}}]),n}(T))({baseUrl:L.host,credentials:"include"}),U=new(function(e){Object(I.a)(n,e);var t=Object(E.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"getAllMovies",value:function(){return this._customFetch("")}}]),n}(T))({baseUrl:"https://".concat(h,"/beatfilm-movies")});function R(e,t){var n=Object(a.useState)((function(){try{var n=localStorage[e];return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(d.a)(n,2),r=c[0],i=c[1],s=Object(a.useCallback)((function(t){localStorage[e]=JSON.stringify(t),i(t)}),[e]);return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(n&&n.addEventListener){var t=function(e){return c.current(e)};return n.addEventListener(e,t),function(){n.removeEventListener(e,t)}}}),[e,n])}("storage",Object(a.useCallback)((function(n){n.key===e&&i(n.newValue?JSON.parse(n.newValue):t)}),[e,t])),[r,s]}var J=n(2),P=n(0),z={name:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439",about:"\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"},q=c.a.createContext(),A=c.a.createContext();function B(e){var t=e.state,n=e.dispatch,a=e.children;return Object(P.jsx)(q.Provider,{value:t,children:Object(P.jsx)(A.Provider,{value:n,children:a})})}function G(){var e=c.a.useContext(q);if(void 0===e)throw new Error("useCurrentUser must be used within a CurrentUserProvider");return e}function H(e,t){return JSON.stringify(e)===JSON.stringify(t)}function V(e,t,n,a){return Y.apply(this,arguments)}function Y(){return(Y=Object(j.a)(o.a.mark((function e(t,n,a,c){var r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(J.a)(Object(J.a)({},n),a),t(r),e.prev=2,e.next=5,M[c](a);case 5:return i=e.sent,H(r,i)||t(i),e.abrupt("return",i);case 10:throw e.prev=10,e.t0=e.catch(2),t(n),console.log("Couldnt update user information on the server",e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var K=n(16),Z={},Q=!0;function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(Z),s=Object(d.a)(i,2),l=s[0],o=s[1],u=Object(a.useState)(Q),j=Object(d.a)(u,2),b=j[0],h=j[1];function m(t,n){r((function(a){var c=Object(J.a)(Object(J.a)({},a),{},Object(K.a)({},t,n));return JSON.stringify(Object(J.a)(Object(J.a)({},e),c))===JSON.stringify(e)&&h(!0),c}))}function O(e,t){o((function(n){return Object(J.a)(Object(J.a)({},n),{},Object(K.a)({},e,t))}))}var f=Object(a.useCallback)((function(t,n){r(null!==n&&void 0!==n?n:e),o(Z),h(Q)}),[e]);return{registerForm:function(){return{isSubmitDisabled:b,onReset:f}},register:function(e){var t;return{value:null!==(t=c[e])&&void 0!==t?t:"",onChange:function(t){var n=t.currentTarget,a=n.value,c=n.validationMessage;m(e,a),O(e,a.length?c:"");var r=n.closest("form").checkValidity();h(!r)},validationMessage:l[e],name:e}},reset:f,getData:function(){return c},isInvalid:b}}var X=g.title,$=function(e){Object(a.useEffect)((function(){document.title=e?"".concat(e," \xb7 ").concat(X):X}),[e])},ee=n(6),te=n.p+"static/media/logo.1edc39b5.svg",ne="form__input",ae="form__button",ce=(n(35),["onSubmit"]),re=Object(a.memo)((function(e){var t=e.onSubmit,n=Object(ee.a)(e,ce),c=Object(a.useCallback)((function(e){t&&(e.preventDefault(),t(e))}),[t]);return Object(P.jsx)("form",Object(J.a)(Object(J.a)({action:"#",onSubmit:c,className:"form"},n),{},{children:n.children}))})),ie=function(e){return e.filter(Boolean).join(" ")},se=function(e){return{className:ie(e)}},le=(n(36),["isFocused","validationMessage","labelTitle"]),oe="text",ue=!0,je=2,de=Object(a.forwardRef)((function(e,t){var n,c,r,i=e.isFocused,s=e.validationMessage,l=(e.labelTitle,Object(ee.a)(e,le)),o=null!==t&&void 0!==t?t:Object(a.createRef)(),u=null!==(n=l.type)&&void 0!==n?n:oe,j=null!==(c=l.required)&&void 0!==c?c:ue,d=u===oe?je:null,b={type:u,minLength:null!==(r=l.minLength)&&void 0!==r?r:d,required:j,ref:o};return Object(a.useEffect)((function(){i&&o&&o.current&&o.current.parentElement!==document.activeElement.parentElement&&setTimeout((function(){o&&o.current&&o.current.focus()}),50)}),[i,o]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("input",Object(J.a)(Object(J.a)(Object(J.a)({},l),se([ne,s&&"".concat(ne,"_type_error"),l.className])),b)),Object(P.jsx)("p",Object(J.a)(Object(J.a)({},se(["".concat(ne,"-error"),"".concat(l.className,"-error"),s&&"".concat(ne,"-error_visible")])),{},{id:"".concat(l.id,"-error"),children:s}))]})})),be=["form","additionalInput"],he={autoCorrect:"off",spellCheck:!1,className:"".concat(ne,"_theme_dark")},me="email",Oe="password",fe=Object(a.memo)((function(e){var t=e.form,n=e.additionalInput,c=Object(ee.a)(e,be),r=Object(a.useState)(!1),i=Object(d.a)(r,2),l=i[0],o=i[1],u=l?"".concat(c.buttonSavingTitle,"..."):c.buttonTitle;return Object(P.jsxs)("div",{className:"auth",children:[Object(P.jsx)(s.b,{to:m,className:"logo auth__logo",children:Object(P.jsx)("img",{className:"logo__img",alt:g.title,src:te})}),Object(P.jsx)("h2",{className:"auth__title",children:c.title}),Object(P.jsxs)(re,{onSubmit:function(e){o(!0);var n=t.getData(),a=n.name,r=n.email,i=n.password;c.handleSubmit(e,r,i,a).finally((function(){o(!1)}))},onReset:t.reset,children:[Object(P.jsxs)("div",{className:"form__container",children:[n&&Object(P.jsxs)("label",{children:[Object(P.jsx)("p",{className:"auth__label",children:n.title}),Object(P.jsx)(de,Object(J.a)(Object(J.a)(Object(J.a)({},he),{},{autoFocus:!0},t.register(n.name)),{},{id:n.name,type:n.name,autoComplete:n.name},n.props))]}),Object(P.jsxs)("label",{children:[Object(P.jsx)("p",{className:"auth__label",children:"E-mail"}),Object(P.jsx)(de,Object(J.a)(Object(J.a)(Object(J.a)({},he),{},{autoFocus:!n},t.register(me)),{},{id:me,type:me,autoComplete:me,placeholder:"mail@example.com"}))]}),Object(P.jsxs)("label",{children:[Object(P.jsx)("p",{className:"auth__label",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(P.jsx)(de,Object(J.a)(Object(J.a)(Object(J.a)({},he),t.register(Oe)),{},{type:Oe,id:c.passwordAutocomplete,autoComplete:c.passwordAutocomplete,placeholder:"n4Gorshke7idelKING"}))]})]}),Object(P.jsx)("button",{type:"submit",disabled:t.isInvalid||l,className:"auth__button ".concat(ae," ").concat(ae,"_theme_dark"),children:u})]}),Object(P.jsxs)("p",{className:"auth__signin",children:["".concat(c.otherOption.tagline," "),Object(P.jsx)(s.b,{to:c.otherOption.path,className:"auth__signin-link",children:c.otherOption.title})]})]})})),_e={passwordAutocomplete:"current-password",title:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!",buttonTitle:k.action,buttonSavingTitle:k.title,otherOption:{tagline:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:p,title:y.title}},pe=Object(a.memo)((function(e){return $(k.title),Object(P.jsx)(fe,Object(J.a)(Object(J.a)({},e),_e))})),ve={passwordAutocomplete:"new-password",title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",buttonTitle:y.action,buttonSavingTitle:y.title,otherOption:{tagline:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",path:_,title:k.action}},ge=Object(a.memo)((function(e){return $(y.title),Object(P.jsx)(fe,Object(J.a)(Object(J.a)(Object(J.a)({},e),ve),{},{additionalInput:{title:"\u0418\u043c\u044f",name:"name",props:{placeholder:"\u0410\u0440\u0442",pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]+"}}}))})),xe=(n(45),Object(a.memo)((function(e){var t,n,a=W({email:null!==(n="email",t=localStorage[n]&&atob(JSON.parse(localStorage[n])))&&void 0!==t?t:"",password:""});return e.loggedIn?Object(P.jsx)(b.a,{to:m}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(b.b,{path:_,children:Object(P.jsx)(pe,{handleSubmit:e.handleLogin,form:a})}),Object(P.jsx)(b.b,{path:p,children:Object(P.jsx)(ge,{handleSubmit:e.handleRegister,form:a})})]})}))),Ne=(n(46),(new Date).getFullYear());var ke=function(){return Object(P.jsxs)("footer",{className:"footer",children:[Object(P.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(P.jsxs)("div",{className:"footer__copyright",children:[Object(P.jsxs)("div",{className:"footer__links",children:[Object(P.jsx)("a",{className:"footer__link",href:"https://practicum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"}),Object(P.jsx)("a",{className:"footer__link",href:F.c,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(P.jsx)("a",{className:"footer__link",href:"https://t.me/artginzburg",target:"_blank",rel:"noreferrer",children:"Telegram"})]}),Object(P.jsxs)("a",{className:"footer__link footer__link-copyright",href:F.a.url,target:"_blank",rel:"noreferrer",children:["\xa9 ",Ne]})]})]})},ye=(n(47),document.getElementById("modal-root"));function Ce(e){function t(t){t.target.className.includes("active")||e.onClose()}return Object(r.createPortal)(Object(P.jsx)("section",{onClick:e.onClose,className:"navigation",children:Object(P.jsxs)("nav",{className:"navigation__container",children:[Object(P.jsx)("button",{onClick:e.onClose,type:"button",className:"navigation__close-button"}),Object(P.jsxs)("ul",{className:"navigation__list",children:[Object(P.jsx)("li",{className:"navigation__list-item",children:Object(P.jsx)(s.c,{exact:!0,to:m,className:"navigation__link",activeClassName:"navigation__link_active",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(P.jsx)("li",{className:"navigation__list-item",children:Object(P.jsx)(s.c,{to:O,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:x.title})}),Object(P.jsx)("li",{className:"navigation__list-item",children:Object(P.jsx)(s.c,{to:f,className:"navigation__link",activeClassName:"navigation__link_active",onClick:t,children:N.title})})]}),Object(P.jsx)(s.b,{to:v,className:"profile-button navigation__profile-button",children:C.title})]})}),ye)}n(48);var Se=function(e){var t=e.loggedIn,n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],i=c[1],l=Object(a.useCallback)((function(){i(!0)}),[]),o=Object(a.useCallback)((function(e){e&&e.target!==e.currentTarget||i(!1)}),[]);return Object(P.jsxs)("header",{className:"header",children:[Object(P.jsxs)("nav",{className:"header__links",children:[Object(P.jsx)(s.b,{to:m,className:"logo header__logo",children:Object(P.jsx)("img",{className:"logo__img",alt:g.title,src:te})}),t&&Object(P.jsxs)("div",{className:"header__navigation",children:[Object(P.jsx)(s.c,{activeClassName:"header__navigation-link_active",to:O,className:"header__navigation-link",children:x.title}),Object(P.jsx)(s.c,{activeClassName:"header__navigation-link_active",to:f,className:"header__navigation-link",children:N.title})]})]}),Object(P.jsx)("div",{className:"header__profile",children:t?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(s.b,{to:v,className:"profile-button header__profile-button",children:C.title}),Object(P.jsx)("button",{type:"button",onClick:l,className:"header__burger"}),r&&Object(P.jsx)(Ce,{onClose:o})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(s.b,{to:p,className:"header__profile-link",children:y.title}),Object(P.jsx)(s.b,{to:_,className:"header__profile-link",children:k.action})]})})]})},we=n.p+"static/media/student.22e6909b.jpg";n(49);var Ie=function(e){var t=new Date,n=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();return(a<0||0===a&&t.getDate()<e.getDate())&&n--,n}(new Date(2002,3,25));var Ee=function(){return Object(P.jsx)("section",{className:"aboutme",id:"student",children:Object(P.jsxs)("article",{children:[Object(P.jsx)("h2",{className:"aboutme__title",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"}),Object(P.jsxs)("div",{className:"aboutme__content",children:[Object(P.jsx)("img",{className:"aboutme__image",src:we,alt:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}),Object(P.jsxs)("div",{className:"aboutme__student",children:[Object(P.jsxs)("div",{className:"aboutme__student-article",children:[Object(P.jsx)("h3",{className:"aboutme__heading",children:"\u0410\u0440\u0442\u0443\u0440"}),Object(P.jsxs)("p",{className:"aboutme__subheading",children:["\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, ",Ie," \u043b\u0435\u0442"]}),Object(P.jsx)("p",{className:"aboutme__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan volutpat sollicitudin. Nullam eget mauris ante. Nullam id mattis sapien. Praesent mollis, diam eget dictum semper, velit diam ultrices ante, vitae condimentum lorem eros vitae tortor. Etiam elit leo, hendrerit et nisi a, aliquam suscipit tellus. Suspendisse pretium tellus ac erat ultrices viverra. Donec placerat dui nibh, vel aliquet tellus ultricies et."})]}),Object(P.jsxs)("div",{className:"aboutme__links",children:[Object(P.jsx)("a",{className:"aboutme__link",href:"https://t.me/ginzart",target:"_blank",rel:"noreferrer",children:"Telegram"}),Object(P.jsx)("a",{className:"aboutme__link",href:"https://github.com/artginzburg",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]})]})]})})};n(50);function Fe(e){var t=e.heading,n=e.children;return Object(P.jsxs)("li",{className:"aboutproject__column",children:[Object(P.jsx)("h3",{className:"aboutproject__heading",children:t}),Object(P.jsx)("p",{className:"aboutproject__text",children:n})]})}var Te=function(){return Object(P.jsx)("section",{className:"aboutproject",id:"about",children:Object(P.jsxs)("article",{children:[Object(P.jsx)("h2",{className:"aboutproject__title",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"}),Object(P.jsxs)("ul",{className:"aboutproject__columns",children:[Object(P.jsx)(Fe,{heading:"\u0414\u0438\u043f\u043b\u043e\u043c\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u043b 5 \u044d\u0442\u0430\u043f\u043e\u0432",children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u0430\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0434 \u0431\u044d\u043a\u0435\u043d\u0434\u043e\u043c, \u0432\u0451\u0440\u0441\u0442\u043a\u0443, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0438."}),Object(P.jsx)(Fe,{heading:"\u041d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0438\u043f\u043b\u043e\u043c\u0430 \u0443\u0448\u043b\u043e < 5 \u043d\u0435\u0434\u0435\u043b\u044c",children:"\u0423 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u0431\u044b\u043b \u043c\u044f\u0433\u043a\u0438\u0439 \u0438 \u0436\u0451\u0441\u0442\u043a\u0438\u0439 \u0434\u0435\u0434\u043b\u0430\u0439\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c\u0441\u044f."})]}),Object(P.jsxs)("ul",{className:"aboutproject__plan",children:[Object(P.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(P.jsx)("p",{className:"aboutproject__plan-heading",children:"3 \u0434\u043d\u044f"}),Object(P.jsx)("p",{className:"aboutproject__plan-text",children:"Back-end"})]}),Object(P.jsxs)("li",{className:"aboutproject__plan-segment",children:[Object(P.jsx)("p",{className:"aboutproject__plan-heading",children:"4 \u043d\u0435\u0434\u0435\u043b\u0438"}),Object(P.jsx)("p",{className:"aboutproject__plan-text",children:"Front-end"})]})]})]})})};n(51);var De=function(){return Object(P.jsx)("nav",{className:"navtab",children:Object(P.jsxs)("ul",{className:"navtab__links",children:[Object(P.jsx)("li",{className:"navtab__link-container",children:Object(P.jsx)("a",{className:"navtab__link",href:"#about",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})}),Object(P.jsx)("li",{className:"navtab__link-container",children:Object(P.jsx)("a",{className:"navtab__link",href:"#techs",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"})}),Object(P.jsx)("li",{className:"navtab__link-container",children:Object(P.jsx)("a",{className:"navtab__link",href:"#student",children:"\u0421\u0442\u0443\u0434\u0435\u043d\u0442"})})]})})};n(52);var Le=function(){return Object(P.jsxs)("section",{className:"portfolio",id:"portfolio",children:[Object(P.jsx)("h2",{className:"portfolio__title",children:"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"}),Object(P.jsxs)("ul",{className:"portfolio__links",children:[Object(P.jsx)("li",{className:"portfolio__links-item",children:Object(P.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/how-to-learn/",target:"_blank",rel:"noreferrer",children:"\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(P.jsx)("li",{className:"portfolio__links-item",children:Object(P.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/russian-travel/",target:"_blank",rel:"noreferrer",children:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0430\u0439\u0442"})}),Object(P.jsx)("li",{className:"portfolio__links-item",children:Object(P.jsx)("a",{className:"portfolio__link",href:"https://artginzburg.github.io/react-mesto-auth/",target:"_blank",rel:"noreferrer",children:"\u041e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})};n(53);var Me=function(){return Object(P.jsx)("section",{className:"promo",children:Object(P.jsx)("h1",{className:"promo__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430 \u0444\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442\u0430 \u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438."})})},Ue=(n(54),[["HTML"],["CSS"],["JS","javascript"],["React"],["Git"],["Express.js","express"],["mongoDB"]]);var Re=function(){return Object(P.jsxs)("section",{className:"techs",id:"techs",children:[Object(P.jsx)("h2",{className:"techs__title",children:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}),Object(P.jsxs)("article",{className:"techs__content",children:[Object(P.jsx)("h3",{className:"techs__heading",children:"7 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"}),Object(P.jsx)("p",{className:"techs__text",children:"\u041d\u0430 \u043a\u0443\u0440\u0441\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043c\u044b \u043e\u0441\u0432\u043e\u0438\u043b\u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043b\u0438 \u0432 \u0434\u0438\u043f\u043b\u043e\u043c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."}),Object(P.jsx)("ul",{className:"techs__list",children:Ue.map((function(e,t){var n;return Object(P.jsx)("li",{className:"techs__list-item",children:Object(P.jsx)("a",{className:"techs__list-link",href:"https://github.com/topics/".concat((null!==(n=e[1])&&void 0!==n?n:e[0]).toLowerCase()),target:"_blank",rel:"noreferrer",children:e[0]})},t)}))})]})]})};var Je=function(e){var t=e.loggedIn;return $("\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Se,{loggedIn:t}),Object(P.jsxs)("main",{children:[Object(P.jsx)(Me,{}),Object(P.jsx)(De,{}),Object(P.jsx)(Te,{}),Object(P.jsx)(Re,{}),Object(P.jsx)(Ee,{}),Object(P.jsx)(Le,{})]}),Object(P.jsx)(ke,{})]})},Pe=(n(55),["card","isSaved","type"]);function ze(e){return"".concat(e," ").concat(["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"][(t=e)%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?Math.abs(t)%10:5]]);var t}function qe(e){var t=e.card,n=e.isSaved,a=e.type,c=Object(ee.a)(e,Pe),r=["moviescard__button","moviescard__button_type_".concat(a)],i=t.nameRU||t.nameEN;return Object(P.jsxs)("li",{className:"moviescard",children:[Object(P.jsx)("a",{className:"moviescard__link",href:t.trailerLink,target:"_blank",rel:"noreferrer",children:Object(P.jsxs)("figure",{className:"moviescard__figure",children:[Object(P.jsxs)("div",{className:"moviescard__text-container",children:[Object(P.jsx)("figcaption",{className:"moviescard__title",children:i}),Object(P.jsx)("p",{className:"moviescard__duration",children:ze(t.duration)})]}),Object(P.jsx)("img",{className:"moviescard__image",src:"add"===a?"https://".concat(h).concat(t.image.url):t.image,alt:i})]})}),Object(P.jsx)("input",Object(J.a)({type:"checkbox",checked:"add"===a?n:!n,onChange:function(){n?c.onCardDelete(t):c.onCardSave(t)}},se(r)))]})}n(56);var Ae=["query","filterShort","cards","savedCards","type"];function Be(e){var t=e.query,n=e.filterShort,c=e.cards,r=e.savedCards,i=e.type,s=Object(ee.a)(e,Ae),l=G(),o=r.filter((function(e){var t;return!e.owner||(null!==(t=e.owner._id)&&void 0!==t?t:e.owner)===l._id})),u=function(e){return!n||e.duration<=40},j=function(e){var n,a;return!t||((null===(n=e.nameRU)||void 0===n?void 0:n.toLowerCase().includes(t.toLowerCase()))||(null===(a=e.nameEN)||void 0===a?void 0:a.toLowerCase().includes(t.toLowerCase())))};return Object(P.jsx)("section",{className:"moviescards",children:Object(P.jsx)("ul",{className:"moviescards__list",children:"add"===i?c.filter(u).filter(j).map((function(e){var t;return Object(a.createElement)(qe,Object(J.a)(Object(J.a)({},s),{},{card:e,isSaved:o.some((function(t){return t.movieId===String(e.id)})),type:i,key:null!==(t=e.id)&&void 0!==t?t:Math.random()}))})):o.filter(u).filter(j).map((function(e){var t;return Object(a.createElement)(qe,Object(J.a)(Object(J.a)({},s),{},{card:e,isSaved:!0,type:i,key:null!==(t=e.movieId)&&void 0!==t?t:Math.random()}))}))})})}n(57);function Ge(e){var t=e.filterShortState,n=e.queryState,a=Object(d.a)(t,2),c=a[0],r=a[1],i=n[1];function s(e){var t;e.preventDefault(),i(null!==(t=e.target.value)&&void 0!==t?t:e.target.search.value)}return Object(P.jsx)("section",{className:"searchform",children:Object(P.jsxs)("form",{onSubmit:s,className:"searchform__form",children:[Object(P.jsx)("fieldset",{className:"searchform__fieldset",children:Object(P.jsxs)("label",{className:"searchform__fieldset-container",children:[Object(P.jsx)("input",{onBlur:s,name:"search",required:!0,className:"searchform__input",type:"search",placeholder:"\u0424\u0438\u043b\u044c\u043c"}),Object(P.jsx)("button",{className:"searchform__submit",type:"submit"})]})}),Object(P.jsxs)("label",{className:"searchform__label",children:[Object(P.jsx)("input",{checked:c,onChange:function(){r(!c)},className:"searchform__switch",type:"checkbox"}),"\u041a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0438"]})]})})}var He=["cards","savedCards","type","loggedIn"];function Ve(e){var t=e.cards,n=void 0===t?[]:t,c=e.savedCards,r=void 0===c?[]:c,i=e.type,s=void 0===i?"add":i,l=e.loggedIn,o=Object(ee.a)(e,He);$("add"===s?x.title:N.title);var u=Object(a.useState)(!1),j=Object(a.useState)("");return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Se,{loggedIn:l}),Object(P.jsxs)("main",{children:[Object(P.jsx)(Ge,{filterShortState:u,queryState:j}),Object(P.jsx)(Be,Object(J.a)(Object(J.a)({},o),{},{filterShort:u[0],query:j[0],type:s,cards:n,savedCards:r}))]}),Object(P.jsx)(ke,{})]})}n(58);function Ye(){return Object(P.jsxs)("main",{className:"notfound",children:[Object(P.jsx)("h1",{className:"notfound__title",children:"404"}),Object(P.jsx)("h2",{className:"notfound__subtitle",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(P.jsx)("nav",{className:"notfound__navigation",children:Object(P.jsx)(s.b,{to:m,className:"notfound__link",children:"\u041d\u0430\u0437\u0430\u0434"})})]})}n(59);var Ke=["loggedIn"],Ze=["reset"],Qe={autoCorrect:"off",spellCheck:!1,className:"".concat(ne,"_theme_dark profile__details-text")};function We(e){var t=e.loggedIn,n=Object(ee.a)(e,Ke);$("\u041f\u0440\u043e\u0444\u0438\u043b\u044c");var a=G(),r=function(){var e=c.a.useContext(A);if(void 0===e)throw new Error("useCurrentUserDispatcher must be used within a CurrentUserProvider");return e}(),i=W(a),s=(i.reset,Object(ee.a)(i,Ze));function l(){return(l=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(r,a,s.getData(),"updateUserInfo");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Se,{loggedIn:t}),Object(P.jsx)("main",{children:Object(P.jsxs)(re,{className:"profile",onSubmit:function(){return l.apply(this,arguments)},onReset:s.reset,children:[Object(P.jsxs)("h2",{className:"profile__title",children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",a.name,"!"]}),Object(P.jsxs)("div",{className:"profile__details",children:[Object(P.jsxs)("label",{className:"profile__details-item",children:[Object(P.jsx)("p",{className:"profile__details-heading",children:"\u0418\u043c\u044f"}),Object(P.jsx)("div",{className:"profile__input-container",children:Object(P.jsx)(de,Object(J.a)(Object(J.a)(Object(J.a)({},Qe),{},{autoComplete:"name"},s.register("name")),{},{placeholder:"\u0410\u0440\u0442 \u0413\u0438\u043d\u0437\u0431\u0443\u0440\u0433"}))})]}),Object(P.jsxs)("label",{className:"profile__details-item",children:[Object(P.jsx)("p",{className:"profile__details-heading",children:"E-mail"}),Object(P.jsx)("div",{className:"profile__input-container",children:Object(P.jsx)(de,Object(J.a)(Object(J.a)(Object(J.a)({},Qe),{},{type:"email",autoComplete:"email"},s.register("email")),{},{placeholder:"art.ginzburg@ya.ru"}))})]})]}),Object(P.jsxs)("div",{className:"profile__buttons",children:[Object(P.jsx)("button",{type:"submit",disabled:s.isInvalid,className:"profile__button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(P.jsx)("button",{onClick:n.handleSignOut,type:"button",className:"profile__button profile__button_type_dangerous",children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})]})]})})]})}var Xe=function(e){return Object(P.jsx)(b.b,{path:e.path,children:e.loggedIn?e.children:Object(P.jsx)(b.a,{to:_})})};var $e=function(){var e=Object(b.g)(),t=R("currentUser",z),n=Object(d.a)(t,2),c=n[0],r=n[1],i=R("loggedIn",!1),s=Object(d.a)(i,2),l=s[0],g=s[1],x=function(e,t){var n=R(e,t),c=Object(d.a)(n,2),r=c[0],i=c[1],s=Object(a.useCallback)((function(e){i(btoa(e))}),[i]),l=Object(a.useRef)(atob(r));return Object(a.useEffect)((function(){l.current=atob(r)})),[l.current,s]}("email","")[1],N=R("cards",[]),k=Object(d.a)(N,2),y=k[0],C=k[1],S=R("savedCards",[]),w=Object(d.a)(S,2),I=w[0],E=w[1];Object(a.useEffect)((function(){l&&(M.getUserInfo().then(r).catch((function(e){return console.log("Couldnt get user info from the server",e)})),U.getAllMovies().then(C).catch((function(e){return console.log("Couldnt get initial cards from the server",e)})),M.getMovies().then(E).catch((function(e){return console.log("Couldnt get saved cards from the server",e)})))}),[l,C,r,E]);var F=Object(a.useCallback)((function(e){var t=I,n=e.id?I.find((function(t){return t.movieId===String(e.id)})):e;return E(I.filter((function(t){return e.id?t.movieId!==String(e.id):t._id!==e._id}))),M.deleteMovie(n._id).catch((function(e){E(t),console.log("Couldnt delete card on the server",e)}))}),[I,E]);function T(e){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I,a={country:t.country,director:t.director,duration:t.duration,year:t.year,description:t.description,image:"https://".concat(h).concat(t.image.url),trailer:t.trailerLink,thumbnail:"https://".concat(h).concat(t.image.formats.thumbnail.url),movieId:String(t.id),nameRU:t.nameRU,nameEN:t.nameEN},E([a].concat(Object(u.a)(I))),e.prev=3,e.next=6,M.saveMovie(a);case 6:return c=e.sent,E([c].concat(Object(u.a)(I))),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(3),E(n),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}var L=Object(a.useCallback)((function(e){x(e),g(!0)}),[x,g]),J=Object(a.useCallback)((function(){M.getUserInfo().then((function(e){e&&L(e.email)})).catch((function(e){g(!1),console.log(e)}))}),[L,g]);return Object(a.useEffect)((function(){J()}),[J]),Object(P.jsx)(B,{state:c,dispatch:r,children:Object(P.jsxs)(b.d,{children:[Object(P.jsx)(b.b,{exact:!0,path:m,children:Object(P.jsx)(Je,{loggedIn:l})}),Object(P.jsx)(b.b,{path:[p,_],children:Object(P.jsx)(xe,{loggedIn:l,handleLogin:function(t,n,a){if(n&&a)return M.login(n,a).then((function(a){a&&(t.target.reset(),L(n),e.push(O))})).catch((function(e){console.log(e)}))},handleRegister:function(t,n,a,c){return M.register(n,a,c).then((function(){e.replace(_)})).catch((function(e){console.log(e)}))}})}),Object(P.jsx)(Xe,{path:O,loggedIn:l,children:Object(P.jsx)(Ve,{onCardSave:T,onCardDelete:F,savedCards:I,cards:y,loggedIn:l})}),Object(P.jsx)(Xe,{path:f,loggedIn:l,children:Object(P.jsx)(Ve,{onCardSave:T,onCardDelete:F,savedCards:I,cards:y,type:"remove",loggedIn:l})}),Object(P.jsx)(Xe,{path:v,loggedIn:l,children:Object(P.jsx)(We,{handleSignOut:function(){M.logout().then((function(){g(!1),e.replace(m),window.scrollTo(0,0)})).catch((function(e){console.log(e)}))},loggedIn:l})}),Object(P.jsx)(b.b,{component:Ye})]})})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(s.a,{basename:"",children:Object(P.jsx)($e,{})})}),document.getElementById("root")),et()}],[[60,1,2]]]);
//# sourceMappingURL=main.d10dc586.chunk.js.map