(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"Pud/":function(t,e){var r=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""},n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,s=/@import[^;]*;/gim,o=/^@[^\s]*keyframes/,i=/\s+/g;function a(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var u=/\bvar\(/,c=/\B--[\w-]+\s*:/,l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,p=/^[\t ]+\n/gm;function f(t,e,r){var n=function(t,e){var r=a(u,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?d(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return function(t,e,r){return t[e]?t[e]:r?h(r,t):""}(t,s,o)})),n.end}function h(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function v(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function d(t){var e=0;t=function(t){for(var e="",r=0;;){var n=a(c,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=v(t,s)}return e}(t=t.replace(l,"")).replace(p,"");for(var r=[];e<t.length;)e=f(t,r,e);return r}function m(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=h(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},o=0;o<10&&"break"!==s();o++);return r}function g(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return 1===t.type})).forEach((function(t){var n=function(t){for(var e,r=[];e=y.exec(t.trim());){var n=b(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:d(s),important:o})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})})),e++})),r}var y=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function b(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith("!important");return e&&(t=t.substr(0,t.length-"!important".length).trim()),{value:t,important:e}}function S(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function w(t){var e,a=function t(e,r){var n=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){n=(n=(n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(n=r.substring(e.previous?e.previous.end:e.parent.start,e.start-1))).replace(i," ")).substring(n.lastIndexOf(";")+1);var s=e.parsedSelector=e.selector=n.trim();e.atRule=0===s.indexOf("@"),e.atRule?0===s.indexOf("@media")?e.type=4:s.match(o)&&(e.type=7,e.keyframesName=e.selector.split(i).pop()):e.type=0===s.indexOf("--")?1e3:1}var a=e.rules;if(a)for(var u=0,c=a.length,l=void 0;u<c&&(l=a[u]);u++)t(l,r);return e}(function(t){var e=new r;e.start=0,e.end=t.length;for(var n=e,s=0,o=t.length;s<o;s++)if("{"===t[s]){n.rules||(n.rules=[]);var i=n,a=i.rules[i.rules.length-1]||null;(n=new r).start=s+1,n.parent=i,n.previous=a,i.rules.push(n)}else"}"===t[s]&&(n.end=s+1,n=n.parent||e);return e}(e=(e=t).replace(n,"").replace(s,"")),e),u=d(t);return{original:t,template:u,selectors:g(a),usesCssVars:u.length>1}}function x(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=w(e.textContent);return r.styleEl=e,t.push(r),!0}function M(t){var e=m(S(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=h(t.template,e))}))}function E(t,e,r){var n;return n="."+r,t.replace(new RegExp("\\."+e,"g"),n)}function C(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return x(e,t)})).some(Boolean)}function k(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(((i=s).indexOf("var(")>-1||I.test(i))&&r.parentNode){(function(t){return O.lastIndex=0,O.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(O,(function(t,e){return t.replace(e,r+e)}))}(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,x(e,o),r.parentNode.insertBefore(o,r),r.remove()}var i})).catch((function(t){console.error(t)}))}var I=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,O=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,A=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.initShim=function(){var t=this;return this.didInit?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){var r,n;r=t.doc,n=t.globalScopes,new MutationObserver((function(){C(r,n)&&M(n)})).observe(document.head,{childList:!0}),function(t,e){return C(t,e),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(k(t,e,n[s]));return Promise.all(r)}(t,e)}(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return k(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){x(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s,o,i,a,u=this.registerHostTemplate(r,e,n),c=this.doc.createElement("style");return c.setAttribute("data-styles",""),u.usesCssVars?n?(c["s-sc"]=e=u.scopeId+"-"+this.count,c.textContent="/*needs update*/",this.hostStyleMap.set(t,c),this.hostScopeMap.set(t,(o=e,i=(s=u).template.map((function(t){return"string"==typeof t?E(t,s.scopeId,o):t})),a=s.selectors.map((function(t){return Object.assign(Object.assign({},t),{selector:E(t.selector,s.scopeId,o)})})),Object.assign(Object.assign({},s),{template:i,selectors:a,scopeId:o}))),this.count++):(u.styleEl=c,u.usesCssVars||(c.textContent=h(u.template,{})),this.globalScopes.push(u),this.updateGlobal(),this.hostScopeMap.set(t,u)):c.textContent=r,c},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=m(function(t,e,r){var n,s=[],o=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach((function(t){return s.push(t)})),o.forEach((function(t){return s.push(t)})),(n=S(s).filter((function(e){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,e.selector)}))).sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),n}(t,this.hostScopeMap,this.globalScopes));r.textContent=h(e.template,n)}}},t.prototype.updateGlobal=function(){M(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=w(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),T=window;T.__stencil_cssshim||T.CSS&&T.CSS.supports&&T.CSS.supports("color","var(--c)")||(T.__stencil_cssshim=new A(T,document))}}]);