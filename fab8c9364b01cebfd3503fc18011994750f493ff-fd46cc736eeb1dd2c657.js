(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8oxB":function(e,n){var i,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===o||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(n){try{return i.call(null,e,0)}catch(n){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:o}catch(e){i=o}try{t="function"==typeof clearTimeout?clearTimeout:s}catch(e){t=s}}();var l,u=[],c=!1,d=-1;function m(){c&&l&&(c=!1,l.length?u=l.concat(u):d=-1,u.length&&f())}function f(){if(!c){var e=a(m);c=!0;for(var n=u.length;n;){for(l=u,u=[];++d<n;)l&&l[d].run();d=-1,n=u.length}l=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function w(e,n){this.fun=e,this.array=n}function p(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)n[i-1]=arguments[i];u.push(new w(e,n)),1!==u.length||c||a(f)},w.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},BC7C:function(e,n,i){var t=i("XKFU");t(t.S,"Math",{fround:i("kcoS")})},CS7O:function(e,n,i){"use strict";i("pIFo");var t=i("q1tI"),r=(i("5D9J"),i("qKvR")),o=(i("b6Qr"),i("9VmF"),i("f3/d"),i("NO8f"),i("JmBL")),s=function(e,n){console.log("WAFLASH> load from =>",n);e.ccall("reopenBuffer","int",["string","number","number"],[n,0,0])},a=function(e,n){if(n.size<104857600){var i=new FileReader;i.onload=function(i){console.log("WAFLASH> file loaded!");var t=i.target.result;if(t){console.log("WAFLASH> content length: "+t.byteLength);var r=new Uint8Array(t),o=e._malloc(r.length);e.HEAP8.set(r,o);var s=e.ccall("reopenBuffer","int",["string","number","number"],[n.name,o,r.length]);e._free(o),0==s&&console.warn("WAFLASH> load failed!")}else console.warn("WAFLASH> load result empty!")},i.readAsArrayBuffer(n)}else console.warn("WAFLASH> ignoring dropped file because it is too big")},l=function(e){var n=document;n.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault()}),!1),n.addEventListener("dragleave",(function(e){e.stopPropagation(),e.preventDefault()}),!1),n.addEventListener("dragover",(function(e){e.stopPropagation(),e.preventDefault()}),!1),n.addEventListener("drop",(function(n){n.stopPropagation(),n.preventDefault(),function(e,n){var i=n.dataTransfer.getData("text");i&&/^https?:\/\/.*\.swf$/.test(i)?s(e,i):n.dataTransfer.files.length>0&&a(e,n.dataTransfer.files[0]),e.hideStatus()}(e,n)}),!1),e.setStatus(navigator.language&&navigator.language.startsWith("ko")?"SWF 파일을 재생하려면 드래그하여 여기에 놓으세요!":"Drop a SWF file here to play!")},u=o.a,c={name:"jwh8kt",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70%;color:white;margin:0px auto;padding:20px;font-size:1.2rem;text-align:center;background-color:rgba(0,0,0,0.1);display:none;"};n.a=function(e){if(e.disable)return Object(r.c)("div",null);Object(t.useEffect)((function(){var n,i=e.src&&e.src.publicURL?window.location.origin+e.src.publicURL:"",t={arguments:[i],preRun:[],postRun:[],locateFile:function(e,n){return"/wasm/"+e},print:function(e){console.log(e)},printErr:function(e){console.error(e)},canvas:(n=document.getElementById("canvas"),n.addEventListener("webglcontextlost",(function(e){alert("WebGL context lost. You will need to reload the page."),e.preventDefault()}),!1),n),statusElement:document.getElementById("waflashStatus"),setStatus:function(e){e&&(e=e.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/,(function(e,n,i){return"Downloading data... "+Math.floor(parseInt(n)/parseInt(i)*100)+"%"})),console.log("WAFLASH> "+e),t.statusElement.innerHTML=e,t.showStatus())},showStatus:function(){t.statusElement.style.display="block"},hideStatus:function(){t.statusElement.style.display="none"},unload:function(){}};return t.setStatus("Prepairing..."),u(t).then((function(e){console.log("WAFLASH> Waflash module created!"),t.hideStatus(),i||l(t)})),function(){console.log("WAFLASH> Waflash component will unmount!"),t.unload(),t=null}}));var n=Object(r.b)("padding-right:0;margin-left:auto;margin-right:auto;display:block;border:0px none;background-color:black;width:",e.width||"100%",";height:",e.height||"480px",";@media (max-width:640px){width:100%;height:75vw;}@media (max-width:319px){width:240px;height:180px;}@media (orientation:landscape) and (max-height:480px){width:100%;height:75vh;}"),i=c;return Object(r.c)("div",{id:"waflashContainer",style:{position:"relative",border:"1px solid black"}},Object(r.c)("canvas",{id:"canvas",css:n,onContextMenu:function(e){return e.preventDefault()},tabIndex:-1}),Object(r.c)("div",{id:"waflashStatus",css:i}))}},FLlr:function(e,n,i){var t=i("XKFU");t(t.P,"String",{repeat:i("l0Rn")})},Faw5:function(e,n,i){i("7DDg")("Int16",2,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},MtdB:function(e,n,i){var t=i("XKFU");t(t.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},Tdpu:function(e,n,i){i("7DDg")("Float64",8,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},URgk:function(e,n,i){(function(e){var t=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(e,n){this._id=e,this._clearFn=n}n.setTimeout=function(){return new o(r.call(setTimeout,t,arguments),clearTimeout)},n.setInterval=function(){return new o(r.call(setInterval,t,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(t,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),n))},i("YBdB"),n.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,n.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i("yLpj"))},Y9lz:function(e,n,i){i("7DDg")("Float32",4,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},YBdB:function(e,n,i){(function(e,n){i("Btvt"),i("V+eJ"),function(e,i){"use strict";if(!e.setImmediate){var t,r,o,s,a,l=1,u={},c=!1,d=e.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(e);m=m&&m.setTimeout?m:e,"[object process]"==={}.toString.call(e.process)?t=function(e){n.nextTick((function(){w(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var n=!0,i=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=i,n}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){w(e.data)},t=function(e){o.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,t=function(e){var n=d.createElement("script");n.onreadystatechange=function(){w(e),n.onreadystatechange=null,r.removeChild(n),n=null},r.appendChild(n)}):t=function(e){setTimeout(w,0,e)}:(s="setImmediate$"+Math.random()+"$",a=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(s)&&w(+n.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),t=function(n){e.postMessage(s+n,"*")}),m.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),i=0;i<n.length;i++)n[i]=arguments[i+1];var r={callback:e,args:n};return u[l]=r,t(l),l++},m.clearImmediate=f}function f(e){delete u[e]}function w(e){if(c)setTimeout(w,0,e);else{var n=u[e];if(n){c=!0;try{!function(e){var n=e.callback,i=e.args;switch(i.length){case 0:n();break;case 1:n(i[0]);break;case 2:n(i[0],i[1]);break;case 3:n(i[0],i[1],i[2]);break;default:n.apply(void 0,i)}}(n)}finally{f(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,i("yLpj"),i("8oxB"))},b6Qr:function(e,n,i){"use strict";i("2Spj"),i("f3/d"),i("/SS/"),i("hHhE"),i("WLL4"),i("jm62"),i("8+KV"),i("0l/t"),i("rGqo"),i("yt8O"),i("Btvt"),i("RW0V"),i("91GP"),i("rE2o"),i("ioFf"),i("V+eJ"),i("HAE/"),Object.defineProperty(n,"__esModule",{value:!0});var t,r=i("q1tI"),o=(t=r)&&"object"==typeof t&&"default"in t?t.default:t,s=new(i("peHP")),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),u=s.getEngine(),c=s.getOS(),d=s.getUA(),m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||n},f=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},w=function(e){var n=f();return n&&n.platform&&(-1!==n.platform.indexOf(e)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function g(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function b(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x="mobile",S="tablet",O="smarttv",k="console",A="wearable",N=void 0,C="Chrome",F="Firefox",L="Opera",M="Yandex",P="Safari",V="Internet Explorer",I="Edge",j="Chromium",_="IE",W="Mobile Safari",B="iOS",D="Android",z="Windows Phone",R="Windows",U="Mac OS",H={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},G=function(e,n,i,t){return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?b(i,!0).forEach((function(n){g(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(i).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({},e,{vendor:m(n.vendor),model:m(n.model),os:m(i.name),osVersion:m(i.version),ua:m(t)})},q=function(e){switch(e){case x:return{isMobile:!0};case S:return{isTablet:!0};case O:return{isSmartTV:!0};case k:return{isConsole:!0};case A:return{isWearable:!0};case N:return{isBrowser:!0};default:return H}}(l.type);var K,X=function(){return c.name===R&&"10"===c.version&&("string"==typeof d&&-1!==d.indexOf("Edg/"))},Y=function(){return a.name===I},J=function(){return w("iPad")},$=l.type===O,Q=l.type===k,Z=l.type===A,ee=a.name===W||J(),ne=a.name===j,ie=function(){switch(l.type){case x:case S:return!0;default:return!1}}()||J(),te=l.type===x,re=l.type===S||J(),oe=l.type===N,se=c.name===D,ae=c.name===z,le=c.name===B||J(),ue=a.name===C,ce=a.name===F,de=a.name===P||a.name===W,me=a.name===L,fe=a.name===V||a.name===_,we=m(c.version),pe=m(c.name),he=m(a.version),ge=m(a.major),ve=m(a.name),be=m(l.vendor),ye=m(l.model),Ee=m(u.name),Te=m(u.version),xe=m(d),Se=Y()||X(),Oe=a.name===M,ke=m(l.type,"browser"),Ae=(K=f())&&(/iPad|iPhone|iPod/.test(K.platform)||"MacIntel"===K.platform&&K.maxTouchPoints>1)&&!window.MSStream,Ne=J(),Ce=w("iPhone"),Fe=w("iPod"),Le=function(){var e=f(),n=e&&e.userAgent.toLowerCase();return"string"==typeof n&&/electron/.test(n)}(),Me=X(),Pe=Y(),Ve=c.name===R,Ie=c.name===U;n.AndroidView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return se?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.BrowserView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return oe?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.ConsoleView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return Q?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.CustomView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return e.condition?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.IEView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return fe?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.IOSView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return le?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.MobileOnlyView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return te?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.MobileView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return ie?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.SmartTVView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return $?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.TabletView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return re?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.WearableView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return Z?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.WinPhoneView=function(e){var n=e.renderWithFragment,i=e.children,t=e.viewClassName,s=e.style;return ae?n?o.createElement(r.Fragment,null,i):o.createElement("div",{className:t,style:s},i):null},n.browserName=ve,n.browserVersion=ge,n.deviceDetect=function(){var e=q.isBrowser,n=q.isMobile,i=q.isTablet,t=q.isSmartTV,r=q.isConsole,o=q.isWearable;return e?function(e,n,i,t,r){return{isBrowser:e,browserMajorVersion:m(n.major),browserFullVersion:m(n.version),browserName:m(n.name),engineName:m(i.name),engineVersion:m(i.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}}(e,a,u,c,d):t?function(e,n,i,t){return{isSmartTV:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(i.name),osVersion:m(i.version),userAgent:m(t)}}(t,u,c,d):r?function(e,n,i,t){return{isConsole:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(i.name),osVersion:m(i.version),userAgent:m(t)}}(r,u,c,d):n||i?G(q,l,c,d):o?function(e,n,i,t){return{isWearable:e,engineName:m(n.name),engineVersion:m(n.version),osName:m(i.name),osVersion:m(i.version),userAgent:m(t)}}(o,u,c,d):void 0},n.deviceType=ke,n.engineName=Ee,n.engineVersion=Te,n.fullBrowserVersion=he,n.getUA=xe,n.isAndroid=se,n.isBrowser=oe,n.isChrome=ue,n.isChromium=ne,n.isConsole=Q,n.isEdge=Se,n.isEdgeChromium=Me,n.isElectron=Le,n.isFirefox=ce,n.isIE=fe,n.isIOS=le,n.isIOS13=Ae,n.isIPad13=Ne,n.isIPhone13=Ce,n.isIPod13=Fe,n.isLegacyEdge=Pe,n.isMacOs=Ie,n.isMobile=ie,n.isMobileOnly=te,n.isMobileSafari=ee,n.isOpera=me,n.isSafari=de,n.isSmartTV=$,n.isTablet=re,n.isWearable=Z,n.isWinPhone=ae,n.isWindows=Ve,n.isYandex=Oe,n.mobileModel=ye,n.mobileVendor=be,n.osName=pe,n.osVersion=we,n.withOrientationChange=function(e){return function(n){function i(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(n=function(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?T(e):n}(this,y(i).call(this,e))).isEventListenerAdded=!1,n.handleOrientationChange=n.handleOrientationChange.bind(T(n)),n.onOrientationChange=n.onOrientationChange.bind(T(n)),n.onPageLoad=n.onPageLoad.bind(T(n)),n.state={isLandscape:!1,isPortrait:!1},n}var t,r,s;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(i,n),t=i,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":p(window))&&ie&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,v({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&h(t.prototype,r),s&&h(t,s),i}(o.Component)}},bHtr:function(e,n,i){var t=i("XKFU");t(t.P,"Array",{fill:i("Nr18")}),i("nGyu")("fill")},"dE+T":function(e,n,i){var t=i("XKFU");t(t.P,"Array",{copyWithin:i("upKx")}),i("nGyu")("copyWithin")},kcoS:function(e,n,i){var t=i("lvtm"),r=Math.pow,o=r(2,-52),s=r(2,-23),a=r(2,127)*(2-s),l=r(2,-126);e.exports=Math.fround||function(e){var n,i,r=Math.abs(e),u=t(e);return r<l?u*(r/l/s+1/o-1/o)*l*s:(i=(n=(1+s/o)*r)-(n-r))>a||i!=i?u*(1/0):u*i}},lvtm:function(e,n){e.exports=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1}},nCnK:function(e,n,i){i("7DDg")("Uint32",4,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},peHP:function(e,n,i){var t;i("Tze0"),i("pIFo"),i("KKXr"),i("V+eJ"),function(r,o){"use strict";var s="model",a="name",l="type",u="vendor",c="version",d="mobile",m="tablet",f="smarttv",w={extend:function(e,n){var i={};for(var t in e)n[t]&&n[t].length%2==0?i[t]=n[t].concat(e[t]):i[t]=e[t];return i},has:function(e,n){return"string"==typeof e&&-1!==n.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},p={rgx:function(e,n){for(var i,t,r,o,s,a,l=0;l<n.length&&!s;){var u=n[l],c=n[l+1];for(i=t=0;i<u.length&&!s;)if(s=u[i++].exec(e))for(r=0;r<c.length;r++)a=s[++t],"object"==typeof(o=c[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,n){for(var i in n)if("object"==typeof n[i]&&n[i].length>0){for(var t=0;t<n[i].length;t++)if(w.has(n[i][t],e))return"?"===i?void 0:i}else if(w.has(n[i],e))return"?"===i?void 0:i;return e}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},g={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,c],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],c],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],c],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,c],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],c],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],c],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],c],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],c],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],c],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],c],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],c],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],c],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],c],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],c],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],c],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],c],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],c],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],c],[/(qqbrowserlite)\/([\w\.]+)/i],[a,c],[/(QQ)\/([\d\.]+)/i],[a,c],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,c],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,c],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,c],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[c,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[c,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,c],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[c,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],c],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],c],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[c,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],c],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,c],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],c],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],c],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],c],[/fxios\/([\w\.-]+)/i],[c,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[c,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[c,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[c,p.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,c],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],c],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,u,[l,m]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[u,"Apple"],[l,m]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[u,"Apple"],[l,f]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[u,s,[l,m]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[u,"Amazon"],[l,m]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,p.str,h.device.amazon.model],[u,"Amazon"],[l,d]],[/android.+aft([bms])\sbuild/i],[s,[u,"Amazon"],[l,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,u,[l,d]],[/\((ip[honed|\s\w*]+);/i],[s,[u,"Apple"],[l,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[u,s,[l,d]],[/\(bb10;\s(\w+)/i],[s,[u,"BlackBerry"],[l,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[u,"Asus"],[l,m]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[u,"Sony"],[s,"Xperia Tablet"],[l,m]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[u,"Sony"],[l,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[u,s,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[u,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[u,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[u,p.str,h.device.sprint.vendor],[s,p.str,h.device.sprint.model],[l,d]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[u,[s,/_/g," "],[l,d]],[/(nexus\s9)/i],[s,[u,"HTC"],[l,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[s,[u,"Huawei"],[l,d]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[u,"Huawei"],[l,m]],[/(microsoft);\s(lumia[\s\w]+)/i],[u,s,[l,d]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[u,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[u,"Microsoft"],[l,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[u,"Motorola"],[l,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[u,"Motorola"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[u,w.trim],[s,w.trim],[l,f]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[u,"Samsung"],[l,f]],[/\(dtv[\);].+(aquos)/i],[s,[u,"Sharp"],[l,f]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[u,"Samsung"],s,[l,m]],[/smart-tv.+(samsung)/i],[u,[l,f],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[u,"Samsung"],s,[l,d]],[/sie-(\w*)/i],[s,[u,"Siemens"],[l,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[u,"Nokia"],s,[l,d]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[u,"Acer"],[l,m]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[u,"LG"],[l,m]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[u,"LG"],s,[l,m]],[/(lg) netcast\.tv/i],[u,s,[l,f]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[u,"LG"],[l,d]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[u,s,[l,m]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[u,"Lenovo"],[l,m]],[/(lenovo)[_\s-]?([\w-]+)/i],[u,s,[l,d]],[/linux;.+((jolla));/i],[u,s,[l,d]],[/((pebble))app\/[\d\.]+\s/i],[u,s,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[u,s,[l,d]],[/crkey/i],[[s,"Chromecast"],[u,"Google"],[l,f]],[/android.+;\s(glass)\s\d/i],[s,[u,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[u,"Google"],[l,m]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[u,"Google"],[l,d]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[u,"Xiaomi"],[l,d]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[u,"Xiaomi"],[l,m]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[u,"Meizu"],[l,d]],[/(mz)-([\w-]{2,})/i],[[u,"Meizu"],s,[l,d]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[u,"OnePlus"],[l,d]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[u,"RCA"],[l,m]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[u,"Dell"],[l,m]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[u,"Verizon"],[l,m]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[u,"Barnes & Noble"],s,[l,m]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[u,"NuVision"],[l,m]],[/android.+;\s(k88)\sbuild/i],[s,[u,"ZTE"],[l,m]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[u,"Swiss"],[l,d]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[u,"Swiss"],[l,m]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[u,"Zeki"],[l,m]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[u,"Dragon Touch"],s,[l,m]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[u,"Insignia"],[l,m]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[u,"NextBook"],[l,m]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[u,"Voice"],s,[l,d]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[u,"LvTel"],s,[l,d]],[/android.+;\s(PH-1)\s/i],[s,[u,"Essential"],[l,d]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[u,"Envizen"],[l,m]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[u,s,[l,m]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[u,"MachSpeed"],[l,m]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[u,s,[l,m]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[u,"Rotor"],[l,m]],[/android.+(KS(.+))\s+build/i],[s,[u,"Amazon"],[l,m]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[u,s,[l,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,w.lowerize],u,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,f]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[u,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[c,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,c],[/rv\:([\w\.]{1,9}).+(gecko)/i],[c,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,c],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[c,p.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[c,p.str,h.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],c],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,c],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],c],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],c],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,c],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],c],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],c],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,c],[/(haiku)\s(\w+)/i],[a,c],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[c,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[c,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,c]]},v=function e(n,i){if("object"==typeof n&&(i=n,n=void 0),!(this instanceof e))return new e(n,i).getResult();var t=n||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=i?w.extend(g,i):g;return this.getBrowser=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return p.rgx.call(e,t,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return p.rgx.call(e,t,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};v.VERSION="0.7.21",v.BROWSER={NAME:a,MAJOR:"major",VERSION:c},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:s,VENDOR:u,TYPE:l,CONSOLE:"console",MOBILE:d,SMARTTV:f,TABLET:m,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:c},v.OS={NAME:a,VERSION:c},void 0!==n?(void 0!==e&&e.exports&&(n=e.exports=v),n.UAParser=v):void 0===(t=function(){return v}.call(n,i,n,e))||(e.exports=t);var b=r&&(r.jQuery||r.Zepto);if(b&&!b.ua){var y=new v;b.ua=y.getResult(),b.ua.get=function(){return y.getUA()},b.ua.set=function(e){y.setUA(e);var n=y.getResult();for(var i in n)b.ua[i]=n[i]}}}("object"==typeof window?window:this)},r1bV:function(e,n,i){i("7DDg")("Uint16",2,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},sFw1:function(e,n,i){i("7DDg")("Int8",1,(function(e){return function(n,i,t){return e(this,n,i,t)}}))},tUrg:function(e,n,i){"use strict";i("OGtf")("link",(function(e){return function(n){return e(this,"a","href",n)}}))}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-fd46cc736eeb1dd2c657.js.map