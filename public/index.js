!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);const i=new WeakMap,n=e=>"function"==typeof e&&i.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`);class p{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:h}}=e;for(;a<h;){const e=n.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)u(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[a],s=_.exec(t)[2],i=s.toLowerCase()+"$lit$",n=e.getAttribute(i);e.removeAttribute(i);const r=n.split(d);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const i=e.parentNode,n=t.split(d),r=n.length-1;for(let t=0;t<r;t++){let s,r=n[t];if(""===r)s=m();else{const e=_.exec(r);null!==e&&u(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(r)}i.insertBefore(s,e),this.parts.push({type:"node",index:++o})}""===n[r]?(i.insertBefore(m(),e),s.push(e)):e.data=n[r],a+=r}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&o!==r||(o++,t.insertBefore(m(),e)),r=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(s.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const u=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},f=e=>-1!==e.index,m=()=>document.createComment(""),_=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class y{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(n=s[o],f(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const g=` ${c} `;class v{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const r=_.exec(e);t+=null===r?e+(s?g:h):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+c}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),b=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class w{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(S(e)||!b(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||S(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):b(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new P(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends w{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends x{}let A=!1;try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const O=new class{handleAttributeExpressions(e,t,s,i){const n=t[0];if("."===n){return new N(e,t.slice(1),s).parts}return"@"===n?[new E(e,t.slice(1),i.eventContext)]:"?"===n?[new C(e,t.slice(1),s)]:new w(e,t,s).parts}handleTextExpression(e){return new P(e)}};function V(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(c);return s=t.keyString.get(i),void 0===s&&(s=new p(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const j=new Map,R=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(e,...t)=>new v(e,t,"html",O);function U(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,133,null,!1);let r=z(i),o=i[r],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=z(i,r),o=i[r]}c.forEach(e=>e.parentNode.removeChild(e))}const $=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},z=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(f(t))return s}return-1};const q=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=e=>t=>{const s=q(t.type,e);let i=j.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},j.set(s,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(c);if(n=i.keyString.get(r),void 0===n){const s=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,e),n=new p(t,s),i.keyString.set(r,n)}return i.stringsArray.set(t.strings,n),n},L=["html","svg"],B=new Set,H=(e,t,s)=>{B.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{L.forEach(t=>{const s=j.get(q(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let o=z(n),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===s&&(a=$(t),s.parentNode.insertBefore(t,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=z(n,o);return}o=z(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),U(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:D},G=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const i=this[e];this[s]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=D){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||W.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=J){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s._classProperties.get(i)||J;this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||J;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{e=s,t=i});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}K.finalized=!0;const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),X=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}}:Object.assign({},t,{finisher(s){s.createProperty(t.key,e)}});function Y(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):X(e,t)}const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new te(s,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ie=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,s):s.push(n)}return s}(e);class ne extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ne.finalized=!0,ne.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=R.has(t),r=F&&11===t.nodeType&&!!t.host,a=r&&!B.has(i),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let i=R.get(t);void 0===i&&(o(t,t.firstChild),R.set(t,i=new P(Object.assign({templateFactory:V},s))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:I(i)},s)),a){const e=R.get(l);R.delete(l);const s=e.value instanceof y?e.value.template:void 0;H(i,l,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!n&&r&&window.ShadyCSS.styleElement(t.host)};var re=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o};let oe=class extends ne{render(){return M`
      <section>
        <img
          src="/images/brainstorm-ui-20200226.png"
          usemap="#ui-links"
          alt="UI Sketches."
        />
        <a href="/ui-1"><div style="left: 45px; top: 42px;"></div></a>
        <a href="/ui-2"><div style="left: 135px; top: 42px;"></div></a>
      </section>
    `}};oe.styles=se`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333;
    }

    * {
      box-sizing: border-box;
    }

    section {
      position: relative;
    }

    img {
      width: 825px;
      padding: 15px;
      background-color: #fff;
      border-radius: 10px;
      -webkit-box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
      box-shadow: -15px 15px 19px -12px rgba(0, 0, 0, 0.75);
    }

    div {
      position: absolute;
      width: 52px;
      height: 52px;
      background-color: rgba(0, 0, 0, 0.25);
    }
  `,re([Y({type:String})],oe.prototype,"usemap",void 0),oe=re([Q("ui-sketches-img")],oe);var ae=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o};let le=class extends ne{render(){return M`
    `}};le.styles=se`
    div {
      position: absolute;
      width: 4%; height: 8%;
      background-color: rgba(0, 0, 0, .25);
    }
  `,ae([Y({type:String})],le.prototype,"name",void 0),le=ae([Q("ui-sketches-map")],le),s.d(t,"GridFunApp",(function(){return he}));var ce=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o};let he=class extends ne{render(){return M`
      <ui-sketches-img .usemap="ui-links"></ui-sketches-img>
      <ui-sketches-map .name="ui-links"></ui-sketches-map>
    `}};he.styles=se`
    :host {
      height: 100vh;
      display: grid;
      grid-template-areas:
        ". . ."
        ". c ."
        ". . .";
      grid-template-columns: 1fr auto 1fr;
      grid-template-rows: 1fr auto 1fr;
      background-color: #333;
    }

    ui-sketches-img {
      grid-area: c;
    }
  `,he=ce([Q("grid-fun-app")],he)}]);