(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),l=n.n(i),u=n("Wbzz");n("kpl1");var c=function(e){function t(t){var n;return(n=e.call(this,t)||this).submitForm=n.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n.state={status:""},n}Object(r.a)(t,e);var n=t.prototype;return n.render=function(){var e=this.state.status;return o.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mknerbbg",method:"POST"},o.a.createElement("label",null,"Full Name"),o.a.createElement("input",{type:"text",name:"name",required:!0}),o.a.createElement("label",null,"Any Other Company Owners/Persons of Significant Control*"),o.a.createElement("input",{type:"text",name:"other companies",required:!0}),o.a.createElement("label",null,"Trading Style*"),o.a.createElement("input",{type:"text",name:"trading style",required:!0,placeholder:"(Partnership, Sole Trader, Limited Company)"}),o.a.createElement("p",null,"We only accept applications from businesses"),o.a.createElement("label",null,"Company Trading Name*"),o.a.createElement("input",{type:"text",name:"trading name",required:!0}),o.a.createElement("label",null,"Your Trading Address*"),o.a.createElement("input",{type:"text",name:"trading address",required:!0}),o.a.createElement("label",null,"Your Registered Office Address (if different)"),o.a.createElement("input",{type:"text",name:"address"}),o.a.createElement("label",null,"Contact Office / Mobile Number*"),o.a.createElement("input",{type:"text",name:"phone number",required:!0}),o.a.createElement("label",null,"Sales Tax Number*"),o.a.createElement("input",{type:"text",name:"tax number",required:!0}),o.a.createElement("label",null,"Email*"),o.a.createElement("input",{type:"email",name:"email",required:!0}),o.a.createElement("label",null,"Website"),o.a.createElement("input",{type:"text",name:"website"}),o.a.createElement("label",null,"Type of Business*"),o.a.createElement("input",{type:"text",name:"website",required:!0,placeholder:"(B2B, B2C or B2B & B2C)"}),o.a.createElement("label",null,"Products of Interest*"),o.a.createElement("input",{type:"text",name:"products of interest",required:!0,placeholder:"Silver Cream Chargers, Grey Cream Chargers, Cold Brew Coffee Chargers, Cartridges, Dispensers, Inflator Kits, Siphons"}),o.a.createElement("label",null,"Current Business Sector Activity*"),o.a.createElement("input",{type:"text",name:"business sector",required:!0}),o.a.createElement("label",null,"Approximate Monthly Order Requirement*"),o.a.createElement("input",{type:"text",name:"monthly requirements",required:!0}),o.a.createElement("label",null,"Business Operational Area*"),o.a.createElement("input",{type:"text",name:"operational area",required:!0,placeholder:"List any city, state, region or country you would like to distribute to"}),o.a.createElement("label",null,"More Information/Comments"),o.a.createElement("input",{type:"text",name:"more info"}),o.a.createElement("p",null,"Distributorships are limited and awarded to the applicants with most potential. Details of current monthly order volume, future requirements, first order value etc will help support your application. Approximate sales value etc. You must read, accept and agree to our Terms of Business, Terms of Use Policy and Charger and Whipper Safety Guidelines"),"SUCCESS"===e?o.a.createElement("p",null,"Thanks!"):o.a.createElement("button",null,"Submit"),o.a.createElement("p",null,"By clicking submit, I hereby acknowledged that I have read, agree and accept the Terms of Business, Terms of Use Policy and Charger and Whipper Safety Guidelines as shown on this website."),"ERROR"===e&&o.a.createElement("p",null,"Ooops! There was an error."))},n.submitForm=function(e){var t=this;e.preventDefault();var n=e.target,r=new FormData(n),a=new XMLHttpRequest;a.open(n.method,n.action),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?(n.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},a.send(r)},t}(o.a.Component),s=n("obyI"),f=n.n(s);function m(){return o.a.createElement("section",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("h2",{className:"major"},"Sign Up"),o.a.createElement(c,null),o.a.createElement("ul",{className:"contact"},o.a.createElement("li",{className:"fa-home"},f.a.address),o.a.createElement("li",{className:"fa-phone"},f.a.phone),f.a.socialLinks.map((function(e){var t="Email"===e.name,n=e.icon,r=e.url;return o.a.createElement("li",{className:""+n,key:r},o.a.createElement("a",{href:(t?"mailto:":"")+r},r))}))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© ",(new Date).getFullYear()," GasCosmos. All rights reserved."))))}var p=n("kkAB");function E(e){var t=e.onMenuToggle,n=void 0===t?function(){}:t;return o.a.createElement("nav",{id:"menu"},o.a.createElement("div",{className:"inner"},o.a.createElement("h2",null,"Menu"),o.a.createElement("ul",{className:"links"},o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Mosa"},"Mosa")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/InfusoSoda"},"Infuso Soda")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Silver"},"Gastro Silver")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Dispenser"},"Dispensers")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Distributors"},"Distributors")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Professional"},"Professional")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Legal"},"Legal")),o.a.createElement("li",null,o.a.createElement(u.Link,{onClick:function(e){n()},to:"/Help"},"Help"))),o.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"")))}function T(e){var t=e.fullMenu,n=Object(a.useState)(!1),r=n[0],i=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"header",className:t?"":"alt"},o.a.createElement("h1",null,o.a.createElement(u.Link,{to:"/"},"Gas Cosmos")),o.a.createElement("nav",null,o.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),i(!r)},className:"menuToggle"},o.a.createElement("span",null,"Menu")))),o.a.createElement("div",{className:r?"is-menu-visible":" "},o.a.createElement(E,{onMenuToggle:function(){return i(!r)}})))}var d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.fullMenu,r=e.footer,a=this.state.isPreloaded;return o.a.createElement(u.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"C02, N20 Gas Supplies"},{name:"keywords",content:"site, web"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:a?" main-body  is-preload":" main-body"},o.a.createElement(p.a,null),o.a.createElement("div",{id:"page-wrapper"},o.a.createElement(T,{fullMenu:n}),t,r&&o.a.createElement(m,null))))}})},t}(a.Component);d.defaultProps={footer:!0};t.a=d},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){s.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},l.render=function(){return o.createElement(r,this.props)},a}(a.Component);return l(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(m,"canUseDOM",u),m}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var s=e[c],f=t[c];if(!1===(a=n?n.call(r,s,f,c):void 0)||void 0===a&&s!==f)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),l=f(n("8+s/")),u=f(n("bmMU")),c=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,d,h,A=(0,l.default)(c.reducePropsToState,c.handleClientStateChange,c.mapStateOnServer)((function(){return null})),y=(T=A,h=d=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=l,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=m(a,["children"]),l=(0,c.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=m(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var e=T.rewind();return e||(e=(0,c.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,u,c,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(l=u;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=f)return!1;var m=t instanceof Date,p=n instanceof Date;if(m!=p)return!1;if(m&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,T=n instanceof RegExp;if(E!=T)return!1;if(E&&T)return t.toString()==n.toString();var d=a(t);if((u=d.length)!==a(n).length)return!1;for(l=u;0!=l--;)if(!o.call(n,d[l]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(l=u;0!=l--;)if(!("_owner"===(c=d[l])&&t.$$typeof||e(t[c],n[c])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kkAB:function(e,t,n){"use strict";(function(e){var r=n("q1tI"),a=n.n(r);t.a=function(){var t=Object(r.useState)(0),n=t[0],o=t[1];return Object(r.useEffect)((function(){setTimeout((function(){o(e.localStorage&&e.localStorage.getItem("legal-accept")||0)}),100)})),Boolean(Number(n))?a.a.createElement("span",null):a.a.createElement("div",{id:"legal"},a.a.createElement("section",null,a.a.createElement("header",null,a.a.createElement("h6",{style:{color:"black"}}," Warning You Must Be A Trade Company And Over 18+ To Use This Site. ")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",null,a.a.createElement("button",{style:{marginRight:"10px"},className:"greenBtn",onClick:function(){return o(1),e.localStorage.setItem("legal-accept","1")}},"I meet the requirements."),a.a.createElement("br",null),a.a.createElement("button",{className:"redBtn",onClick:function(){return e.location.href="https://www.google.com"}},"I do not."))))}}).call(this,n("yLpj"))},kpl1:function(e,t,n){},obyI:function(e,t){e.exports={siteTitle:"Gas Cosmos",manifestName:"Gas",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-solidstate/",heading:"Gas Gosmos",subHeading:"Leading C02, N20 Gas Supplies. We have recently launched Gastro Cream Chargers to B2B Trade Only agents to enable their business to become an area or worldwide wholesale and retail distributor. With constant stock availability, we are committed to providing agents with the world's leading and most Cost-Effective High-Quality N2O Cream Chargers, Whipped Cream Dispensers and CO2 Cartridges.",socialLinks:[{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/gascosmoseu/"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/"},{icon:"fa-envelope-o",name:"Email",url:"info@gascosmos.co.uk"}],phone:"07557055842",address:"19-21 Swan street, West Malling, ME19 6JU"}},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("YVoz")),l=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var c,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,l.TAG_NAMES.TITLE),n=d(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},m=function(e){return d(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},T=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var c=o[u],s=(0,i.default)({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(c=Date.now(),function(e){var t=Date.now();t-c>16?(c=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,m=e.title,p=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,a),_(m,p);var E={baseTag:O(l.TAG_NAMES.BASE,n),linkTags:O(l.TAG_NAMES.LINK,o),metaTags:O(l.TAG_NAMES.META,i),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,u),scriptTags:O(l.TAG_NAMES.SCRIPT,s),styleTags:O(l.TAG_NAMES.STYLE,f)},T={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(d[e]=E[e].oldTags)})),t&&t(),c(e,T,d)},C=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=C(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var f=o.indexOf(c);-1!==f&&o.splice(f,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=M(n,r),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=P(n),o=C(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&S(g),e.defer?g=y((function(){v(e,(function(){g=null}))})):(v(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,m=void 0===f?"":f,p=e.titleAttributes;return{base:w(l.TAG_NAMES.BASE,t,r),bodyAttributes:w(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(l.ATTRIBUTE_NAMES.HTML,a,r),link:w(l.TAG_NAMES.LINK,o,r),meta:w(l.TAG_NAMES.META,i,r),noscript:w(l.TAG_NAMES.NOSCRIPT,u,r),script:w(l.TAG_NAMES.SCRIPT,c,r),style:w(l.TAG_NAMES.STYLE,s,r),title:w(l.TAG_NAMES.TITLE,{title:m,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:E([l.TAG_PROPERTIES.HREF],e),bodyAttributes:p(l.ATTRIBUTE_NAMES.BODY,e),defer:d(e,l.HELMET_PROPS.DEFER),encode:d(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:m(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=ba7b13e700a90cd392d14adfcabd62e8aa2aed6a-d348c0f495398b6318e3.js.map