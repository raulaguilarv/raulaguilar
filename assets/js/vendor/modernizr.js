/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgpositionshorthand-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-boxsizing-checked-cssgradients-cssreflections-cssremunit-cssscrollbar-csstransitions-cssvalid-cssvmaxunit-cssvwunit-flexbox-lastchild-mediaqueries-nthchild-opacity-search-siblinggeneral-wrapflow !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var d in b){if(e=[],t=b[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),y.push((i?"":"no-")+a.join("-"))}}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?C.className.baseVal=t:C.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){return e-1===t||e===t||e+1===t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var o,a,d,u,f="modernizr",c=s("div"),p=l();if(parseInt(r,10))for(;r--;)d=s("div"),d.id=i?i[r]:f+(r+1),c.appendChild(d);return o=s("style"),o.type="text/css",o.id="s"+f,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):c.parentNode.removeChild(c),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?f(i,n||t):i);return!1}function p(e,t){return!!~(""+e).indexOf(t)}function h(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(h(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+h(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,i,o){function a(){u&&(delete W.style,delete W.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var l=m(e,i);if(!r(l,"undefined"))return l}for(var u,f,c,h,v,g=["modernizr","tspan"];!W.style;)u=!0,W.modElem=s(g.shift()),W.style=W.modElem.style;for(c=e.length,f=0;c>f;f++)if(h=e[f],v=W.style[h],p(h,"-")&&(h=d(h)),W.style[h]!==n){if(o||r(i,"undefined"))return a(),"pfx"==t?h:!0;try{W.style[h]=i}catch(x){}if(W.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,i,o):(a=(e+" "+P.join(s+" ")+s).split(" "),c(a,t,n))}function x(e,t,r){return g(e,n,n,t,r)}var y=[],b=[],w={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var C=t.documentElement,T="svg"===C.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=s("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("cssremunit",function(){var e=s("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)});var z=function(e){function n(t,n){var i;return t?(n&&"string"!=typeof n||(n=s(n||"div")),t="on"+t,i=t in n,!i&&r&&(n.setAttribute||(n=s("div")),n.setAttribute(t,""),i="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),i):!1}var r=!("onblur"in t.documentElement);return n}();w.hasEvent=z,Modernizr.addTest("inputsearchevent",z("search"));var S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=S,Modernizr.addTest("cssgradients",function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);",r=e+S.join(n+e).slice(0,-e.length);Modernizr._config.usePrefixes&&(r+=e+"-webkit-"+t);var i=s("a"),o=i.style;return o.cssText=r,(""+o.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _=w.testStyles=u;Modernizr.addTest("checked",function(){return _("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=s("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),_("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),_("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;return n})},5),_("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+S.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){Modernizr.addTest("cssscrollbar",40==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return _("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),Modernizr.addTest("cssvalid",function(){return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=s("input");return e.appendChild(t),t.clientWidth>10})}),_("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}",function(t){var n=t.childNodes[1],r=t.childNodes[0],i=parseInt((r.offsetWidth-r.clientWidth)/2,10),o=C.clientWidth/100,s=C.clientHeight/100,d=parseInt(50*Math.max(o,s),10),l=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",a(d,l)||a(d,l-i))},2),_("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var k=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=k,Modernizr.addTest("mediaqueries",k("only all"));var E="Moz O ms Webkit",A=w._config.usePrefixes?E.split(" "):[];w._cssomPrefixes=A;var N=function(t){var r,i=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=S[s],d=a.toUpperCase()+"_"+r;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=N;var P=w._config.usePrefixes?E.toLowerCase().split(" "):[];w._domPrefixes=P;var j={elem:s("modernizr")};Modernizr._q.push(function(){delete j.elem});var W={style:j.elem.style};Modernizr._q.unshift(function(){delete W.style}),w.testAllProps=g,w.testAllProps=x,Modernizr.addTest("bgsizecover",x("backgroundSize","cover")),Modernizr.addTest("bgrepeatround",x("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",x("backgroundRepeat","space")),Modernizr.addTest("boxsizing",x("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("borderradius",x("borderRadius","0px",!0)),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("cssreflections",x("boxReflect","above",!0)),Modernizr.addTest("csstransitions",x("transition","all",!0));var L=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=d(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("wrapflow",function(){var e=L("wrapFlow");if(!e||T)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=s("div"),i=s("div"),o=s("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(i),r.appendChild(o),C.appendChild(r);var a=o.offsetLeft;return C.removeChild(r),i=o=r=n,150==a}),i(),o(y),delete w.addTest,delete w.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);