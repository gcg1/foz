(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,9,10,11],{"2NtL":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("ZOHq");t.default=function(e){return a.a.createElement("a",{className:"button "+(e.inline&&"button--inline"),href:e.href,target:e.extenal&&"_blank",rel:e.extenal&&"noopener noreferrer"},e.text,a.a.createElement(o.default,null))}},AJC2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var r,a=(r=n("FM9S"))&&r.__esModule?r:{default:r}},CQc8:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);n("J9yo"),n("Do4B");t.default=function(e){var t=document.getElementsByClassName("animate"),n=function(){for(var e=0;e<t.length;e++)!0==(n=t[e],r=5,a=void 0,o=void 0,a=n.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight,!(Math.floor(100-(a.top>=0?0:a.top)/(+-a.height/1)*100)<r||Math.floor(100-(a.bottom-o)/a.height*100)<r))?t[e].classList.add("is-visible"):t[e].classList.remove("is-visible");var n,r,a,o};return Object(r.useEffect)((function(){window.scrollTo(0,0),n(),window.addEventListener("scroll",(function(e){n()}),!1)})),a.a.createElement("div",{className:e.dark&&"dark-mode"},e.children)}},Do4B:function(e,t,n){},FM9S:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.containsRvh=function(e){return/(\d+(\.\d*)?)rvh(?!\w)/.test(e)},t.default=void 0;var a=function(e,t){!function(e,t){if("object"!==r(e)&&void 0!==e||Array.isArray(e))throw Error("style (the first argument) must be an object or undefined");if("number"!=typeof t||t<0)throw Error("Second argument (windowHeight) must be a non-negative number")}(e,t);var n=void 0===e?{height:"100rvh"}:e,a={};return Object.keys(n).forEach((function(e){a[e]="string"==typeof n[e]?function(e,t){return e.replace(/(\d+(\.\d*)?)rvh(?!\w)/g,(function(e,n){return"".concat(t*parseFloat(n)/100,"px")}))}(n[e],t):n[e]})),a};t.default=a},J9yo:function(e,t,n){},"K4v/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}}),n("sviS");var r,a=(r=n("iYA0"))&&r.__esModule?r:{default:r}},YfrF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return document&&document.documentElement&&document.documentElement.clientHeight||window.innerHeight};t.default=r},ZOHq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r);t.default=function(){return a.a.createElement("svg",{className:"HoverArrow",width:"10",height:"10",viewBox:"0 0 10 10","aria-hidden":"true"},a.a.createElement("g",{fillRule:"evenodd"},a.a.createElement("path",{className:"HoverArrow__linePath",d:"M0 5h7"}),a.a.createElement("path",{className:"HoverArrow__tipPath",d:"M1 1l4 4-4 4"})))}},iYA0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("q1tI")),a=i(n("AJC2")),o=i(n("YfrF"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;s(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return v(y(y(n=d(this,(e=m(t)).call.apply(e,[this].concat(i))))),"state",{style:{}}),v(y(y(n)),"updateStyle",(function(){var e=(0,a.default)(n.props.style,(0,o.default)());n.setState({style:e})})),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){this.updateStyle(),window.addEventListener("resize",this.updateStyle)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateStyle)}},{key:"render",value:function(){var e=this.props,t=e.as,n=void 0===t?"div":t,a=c(e,["as"]);return r.default.createElement(n,u({},a,{style:this.state.style}))}}])&&f(n.prototype,i),l&&f(n,l),t}(r.default.Component);t.default=b},mpsJ:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("ZOHq");t.default=function(){return a.a.createElement("header",{className:"site-header transparent"},a.a.createElement("nav",{className:"grid-parent"},a.a.createElement("ul",{className:"grid-item nav-list"},a.a.createElement("li",{className:"nav-list-logo"},a.a.createElement(o.a,{to:"/"},a.a.createElement("svg",{width:"35",height:"23",viewBox:"0 0 35 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M3.27159 22.7313H0V0.268677H9.31278V3.65419H3.27159V9.79827H7.68564V13.2017H3.27159V22.7313Z",fill:"black"}),a.a.createElement("path",{d:"M16.8749 0C18.3174 0 19.5407 0.525441 20.5446 1.57632C21.5602 2.62721 22.0679 3.89304 22.0679 5.37383V17.6262C22.0679 19.1189 21.5602 20.3907 20.5446 21.4416C19.5291 22.4805 18.3059 23 16.8749 23C15.4324 23 14.2092 22.4746 13.2052 21.4237C12.2012 20.3728 11.6992 19.107 11.6992 17.6262V5.37383C11.6992 3.8811 12.207 2.61526 13.2225 1.57632C14.238 0.525441 15.4555 0 16.8749 0ZM18.6578 5.30218C18.6578 4.7648 18.4732 4.31101 18.1039 3.94081C17.7462 3.55867 17.3077 3.3676 16.7884 3.3676C16.2691 3.3676 15.8248 3.55867 15.4555 3.94081C15.0862 4.31101 14.9016 4.7648 14.9016 5.30218V17.5903C14.9016 18.1277 15.0862 18.5875 15.4555 18.9696C15.8248 19.3398 16.2691 19.5249 16.7884 19.5249C17.3077 19.5249 17.7462 19.3398 18.1039 18.9696C18.4732 18.5875 18.6578 18.1277 18.6578 17.5903V5.30218Z",fill:"black"}),a.a.createElement("path",{d:"M34.8051 0.286621V3.67214L28.7812 19.3637H34.8051V22.7313H25.25V19.3637L31.2912 3.67214H25.25V0.286621H34.8051Z",fill:"black"})))),a.a.createElement("li",{className:"nav-list-item"},a.a.createElement(o.a,{to:"/contact",className:"button"},"Start a project",a.a.createElement(i.default,null))))))}},sviS:function(e,t,n){"use strict";Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)})},w2l6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),a=n.n(r),o=n("K4v/"),i=n.n(o),l=n("CQc8"),u=n("mpsJ"),c=n("2NtL");function s(){return a.a.createElement(l.default,{dark:!0},a.a.createElement("div",{className:"page-not-found"},a.a.createElement(u.default,null),a.a.createElement(i.a,null,a.a.createElement("section",{className:"masthead"},a.a.createElement("div",{className:"grid-parent animate animate--delayed"},a.a.createElement("div",{className:"grid-item"},a.a.createElement("p",{className:"headline headline--massive"},"404"),a.a.createElement("p",{className:"translucent"},"The page could not be found."),a.a.createElement(c.default,{href:"/",inline:!0,text:"Back to home"})))))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-5f1771100785ce258ac3.js.map