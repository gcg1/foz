(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6,7,8,9,10],{CQc8:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n);a("J9yo"),a("Do4B");t.default=function(e){return Object(n.useEffect)((function(){window.scrollTo(0,0);var e=document.getElementsByClassName("animate"),t=function(){for(var t=0;t<e.length;t++)!0==(a=e[t],n=5,l=void 0,r=void 0,l=a.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,!(Math.floor(100-(l.top>=0?0:l.top)/(+-l.height/1)*100)<n||Math.floor(100-(l.bottom-r)/l.height*100)<n))?e[t].classList.add("is-visible"):e[t].classList.remove("is-visible");var a,n,l,r};t(),window.addEventListener("scroll",(function(e){t()}),!1)})),l.a.createElement("div",{className:e.dark&&"dark-mode"},e.children)}},"Cuy+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),l=a.n(n),r=a("CQc8"),c=a("mpsJ"),i=a("qFMz"),o=a("pL+1");function s(e){var t=Object(n.useState)(""),a=(t[0],t[1]),s=Object(n.useState)(""),m=(s[0],s[1]),u=Object(n.useState)(""),d=(u[0],u[1]),f=Object(n.useState)(!1),E=f[0],h=f[1];return l.a.createElement(r.default,{dark:!1},l.a.createElement("div",{className:"contact-page"},l.a.createElement(c.default,null),l.a.createElement("div",{className:"small-spacer"}),l.a.createElement("div",{className:"contact-form-container grid-parent animate"},l.a.createElement("div",{className:"grid-item grid-item--middle"},"SUCCESS"===E&&l.a.createElement("div",{className:"small-spacer"}),l.a.createElement("p",{className:"headline headline--massive headline--inline"},E&&"ERROR"!==E?"Thank you":"Get in touch"),l.a.createElement("div",null,l.a.createElement("p",{className:"translucent"},E&&"ERROR"!==E?"We'll get back to you shortly.":"Not sure where to start? Tell us about your project, your\n              timeline, how you heard about us and where you're based."),(!E||"ERROR"===E)&&l.a.createElement("div",null,l.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var t=e.target,a=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?h("SUCCESS"):h("ERROR"))},n.send(a)},action:"https://formspree.io/xbjzwdyr",method:"POST"},l.a.createElement("input",{onChange:function(e){return a(e.target.value)},placeholder:"Your name",name:"name",type:"text",required:!0}),l.a.createElement("input",{onChange:function(e){return m(e.target.value)},placeholder:"Your email",name:"email",type:"email",required:!0}),l.a.createElement("textarea",{onChange:function(e){return d(e.target.value)},placeholder:"Your message",name:"message",type:"text",required:!0}),l.a.createElement(o.default,{inline:!0,text:"Send"})),"ERROR"===E&&l.a.createElement("p",{className:"error-message"},"There was a problem sending your message.",l.a.createElement("br",null)," Please try again, or email us at"," ",l.a.createElement("a",{href:"mailto:info@foz.agency"},"info@foz.agency")))))),l.a.createElement("div",{className:"small-spacer"}),l.a.createElement(i.default,null)))}},Do4B:function(e,t,a){},J9yo:function(e,t,a){},ZOHq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n);t.default=function(){return l.a.createElement("svg",{className:"HoverArrow",width:"10",height:"10",viewBox:"0 0 10 10","aria-hidden":"true"},l.a.createElement("g",{fillRule:"evenodd"},l.a.createElement("path",{className:"HoverArrow__linePath",d:"M0 5h7"}),l.a.createElement("path",{className:"HoverArrow__tipPath",d:"M1 1l4 4-4 4"})))}},mpsJ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("ZOHq");t.default=function(){return l.a.createElement("header",{className:"site-header transparent"},l.a.createElement("nav",{className:"grid-parent"},l.a.createElement("ul",{className:"grid-item nav-list"},l.a.createElement("li",{className:"nav-list-logo"},l.a.createElement(r.a,{to:"/"},l.a.createElement("svg",{width:"35",height:"23",viewBox:"0 0 35 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M3.27159 22.7313H0V0.268677H9.31278V3.65419H3.27159V9.79827H7.68564V13.2017H3.27159V22.7313Z",fill:"black"}),l.a.createElement("path",{d:"M16.8749 0C18.3174 0 19.5407 0.525441 20.5446 1.57632C21.5602 2.62721 22.0679 3.89304 22.0679 5.37383V17.6262C22.0679 19.1189 21.5602 20.3907 20.5446 21.4416C19.5291 22.4805 18.3059 23 16.8749 23C15.4324 23 14.2092 22.4746 13.2052 21.4237C12.2012 20.3728 11.6992 19.107 11.6992 17.6262V5.37383C11.6992 3.8811 12.207 2.61526 13.2225 1.57632C14.238 0.525441 15.4555 0 16.8749 0ZM18.6578 5.30218C18.6578 4.7648 18.4732 4.31101 18.1039 3.94081C17.7462 3.55867 17.3077 3.3676 16.7884 3.3676C16.2691 3.3676 15.8248 3.55867 15.4555 3.94081C15.0862 4.31101 14.9016 4.7648 14.9016 5.30218V17.5903C14.9016 18.1277 15.0862 18.5875 15.4555 18.9696C15.8248 19.3398 16.2691 19.5249 16.7884 19.5249C17.3077 19.5249 17.7462 19.3398 18.1039 18.9696C18.4732 18.5875 18.6578 18.1277 18.6578 17.5903V5.30218Z",fill:"black"}),l.a.createElement("path",{d:"M34.8051 0.286621V3.67214L28.7812 19.3637H34.8051V22.7313H25.25V19.3637L31.2912 3.67214H25.25V0.286621H34.8051Z",fill:"black"})))),l.a.createElement("li",{className:"nav-list-item"},l.a.createElement(r.a,{to:"/contact",className:"button"},"Start a project",l.a.createElement(c.default,null))))))}},"pL+1":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("ZOHq");t.default=function(e){return l.a.createElement("button",{className:"button "+(e.inline&&"button--inline"),value:"Send",type:"submit"},e.text,l.a.createElement(r.default,null))}},qFMz:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n);t.default=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"grid-parent"},l.a.createElement("div",{className:"nav grid-item"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:info@foz.agency"},"info@foz.agency")),l.a.createElement("li",null,"10 York Road, London, SE1 7ND")))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-3dd9688d2f7ad8568c38.js.map