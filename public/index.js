!function(e){var t={};function i(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const s=new WeakMap,r=e=>"function"==typeof e&&s.has(e),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},a={},h={},d=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${d}--\x3e`,c=new RegExp(`${d}|${l}`);class p{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let n=0,o=-1,a=0;const{strings:h,values:{length:l}}=e;for(;a<l;){const e=r.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)u(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=h[a],i=v.exec(t)[2],s=i.toLowerCase()+"$lit$",r=e.getAttribute(s);e.removeAttribute(s);const n=r.split(c);this.parts.push({type:"attribute",index:o,name:i,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const s=e.parentNode,r=t.split(c),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=m();else{const e=v.exec(n);null!==e&&u(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}s.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===r[n]?(s.insertBefore(m(),e),i.push(e)):e.data=r[n],a+=n}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&o!==n||(o++,t.insertBefore(m(),e)),n=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const u=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},f=e=>-1!==e.index,m=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class y{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,h=s.nextNode();for(;o<i.length;)if(r=i[o],f(r)){for(;a<r.index;)a++,"TEMPLATE"===h.nodeName&&(t.push(h),s.currentNode=h.content),null===(h=s.nextNode())&&(s.currentNode=t.pop(),h=s.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(h.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}const b=` ${d} `;class w{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const n=v.exec(e);t+=null===n?e+(i?b:l):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+d}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const x=e=>null===e||!("object"==typeof e||"function"==typeof e),g=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class _{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let s=0;s<t;s++){i+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(x(e)||!g(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||x(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):g(e)?this.__commitIterable(e):e===h?(this.value=h,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const i=new y(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const r of e)i=t[s],void 0===i&&(i=new S(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(r),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class N extends _{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends k{}let $=!1;try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class D{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const V=new class{handleAttributeExpressions(e,t,i,s){const r=t[0];if("."===r){return new N(e,t.slice(1),i).parts}return"@"===r?[new D(e,t.slice(1),s.eventContext)]:"?"===r?[new P(e,t.slice(1),i)]:new _(e,t,i).parts}handleTextExpression(e){return new S(e)}};function E(e){let t=U.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},U.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(d);return i=t.keyString.get(s),void 0===i&&(i=new p(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const U=new Map,T=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(e,...t)=>new w(e,t,"html",V);function j(e,t){const{element:{content:i},parts:s}=e,r=document.createTreeWalker(i,133,null,!1);let n=R(s),o=s[n],a=-1,h=0;const d=[];let l=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&h++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-h,n=R(s,n),o=s[n]}d.forEach(e=>e.parentNode.removeChild(e))}const I=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},R=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(f(t))return i}return-1};const B=(e,t)=>`${e}--${t}`;let M=!0;void 0===window.ShadyCSS?M=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),M=!1);const z=e=>t=>{const i=B(t.type,e);let s=U.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},U.set(i,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(d);if(r=s.keyString.get(n),void 0===r){const i=t.getTemplateElement();M&&window.ShadyCSS.prepareTemplateDom(i,e),r=new p(t,i),s.keyString.set(n,r)}return s.stringsArray.set(t.strings,r),r},q=["html","svg"],L=new Set,W=(e,t,i)=>{L.add(e);const s=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{q.forEach(t=>{const i=U.get(B(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),j(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:r}=e;if(null==i)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let o=R(r),a=0,h=-1;for(;n.nextNode();){for(h++,n.currentNode===i&&(a=I(t),i.parentNode.insertBefore(t,i));-1!==o&&r[o].index===h;){if(a>0){for(;-1!==o;)r[o].index+=a,o=R(r,o);return}o=R(r,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)t.insertBefore(h.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),j(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:J},G=Promise.resolve(!0);class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=H){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const s=this[e];this[i]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=J){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||F,r="function"==typeof s?s:s.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||F.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=H){const s=this.constructor,r=s._attributeNameForProperty(e,i);if(void 0!==r){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i._classProperties.get(s)||H;this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const s=this.constructor,r=s._classProperties.get(e)||H;s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{e=i,t=s});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:Object.assign({},t,{finisher(i){i.createProperty(t.key,e)}});function Z(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):K(e,t)}const Q="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol();class te{constructor(e,t){if(t!==ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof te)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new te(i,ee)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const se=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let s=0,r=t.length;s<r;s++){const r=t[s];Array.isArray(r)?e(r,i):i.push(r)}return i}(e);class re extends Y{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){se(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof w&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=T.has(t),n=M&&11===t.nodeType&&!!t.host,a=n&&!L.has(s),h=a?document.createDocumentFragment():t;if(((e,t,i)=>{let s=T.get(t);void 0===s&&(o(t,t.firstChild),T.set(t,s=new S(Object.assign({templateFactory:E},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,h,Object.assign({templateFactory:z(s)},i)),a){const e=T.get(h);T.delete(h);const i=e.value instanceof y?e.value.template:void 0;W(s,h,i),o(t,t.firstChild),t.appendChild(h),T.set(t,e)}!r&&n&&window.ShadyCSS.styleElement(t.host)};var ne=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let oe=class extends re{visitDemo(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("visit-demo",{detail:{sketchNumber:e.currentTarget.dataset.sketchNumber},composed:!0,bubbles:!0}))}render(){return O`
      <section>
        <img src="/images/brainstorm-ui-20200302.png" alt="UI Sketches." />
        <!-- Row 1 -->
        <a href="/ui-1" @click="${this.visitDemo}" data-sketch-number="1"><div style="left: 45px; top: 42px;"></div></a>
        <a href="/ui-2" @click="${this.visitDemo}" data-sketch-number="2"><div style="left: 129px; top: 42px;"></div></a>
        <a href="/ui-3" @click="${this.visitDemo}" data-sketch-number="3"><div style="left: 211px; top: 42px;"></div></a>
        <a href="/ui-4" @click="${this.visitDemo}" data-sketch-number="4"><div style="left: 295px; top: 42px;"></div></a>
        <a href="/ui-5" @click="${this.visitDemo}" data-sketch-number="5"><div style="left: 380px; top: 42px;"></div></a>
        <a href="/ui-6" @click="${this.visitDemo}" data-sketch-number="6"><div style="left: 464px; top: 42px;"></div></a>
        <a href="/ui-7" @click="${this.visitDemo}" data-sketch-number="7"><div style="left: 545px; top: 42px;"></div></a>
        <a href="/ui-8" @click="${this.visitDemo}" data-sketch-number="8"><div style="left: 630px; top: 42px;"></div></a>
        <a href="/ui-9" @click="${this.visitDemo}" data-sketch-number="9"><div style="left: 713px; top: 42px;"></div></a>
        <!-- Row 2 -->
        <a href="/ui-10" @click="${this.visitDemo}" data-sketch-number="10"><div style="left: 45px; top: 125px;"></div></a>
        <a href="/ui-11" @click="${this.visitDemo}" data-sketch-number="11"><div style="left: 129px; top: 125px;"></div></a>
        <a href="/ui-12" @click="${this.visitDemo}" data-sketch-number="12"><div style="left: 211px; top: 125px;"></div></a>
        <a href="/ui-13" @click="${this.visitDemo}" data-sketch-number="13"><div style="left: 295px; top: 125px;"></div></a>
        <a href="/ui-14" @click="${this.visitDemo}" data-sketch-number="14"><div style="left: 380px; top: 125px;"></div></a>
        <a href="/ui-15" @click="${this.visitDemo}" data-sketch-number="15"><div style="left: 464px; top: 125px;"></div></a>
        <a href="/ui-16" @click="${this.visitDemo}" data-sketch-number="16"><div style="left: 545px; top: 125px;"></div></a>
        <a href="/ui-17" @click="${this.visitDemo}" data-sketch-number="17"><div style="left: 630px; top: 125px;"></div></a>
        <a href="/ui-18" @click="${this.visitDemo}" data-sketch-number="18"><div style="left: 713px; top: 125px;"></div></a>
        <!-- Row 3 -->
        <a href="/ui-19" @click="${this.visitDemo}" data-sketch-number="19"><div style="left: 45px; top: 208px;"></div></a>
        <a href="/ui-20" @click="${this.visitDemo}" data-sketch-number="20"><div style="left: 129px; top: 208px;"></div></a>
        <a href="/ui-21" @click="${this.visitDemo}" data-sketch-number="21"><div style="left: 211px; top: 208px;"></div></a>
        <a href="/ui-22" @click="${this.visitDemo}" data-sketch-number="22"><div style="left: 295px; top: 208px;"></div></a>
        <a href="/ui-23" @click="${this.visitDemo}" data-sketch-number="23"><div style="left: 380px; top: 208px;"></div></a>
        <a href="/ui-24" @click="${this.visitDemo}" data-sketch-number="24"><div style="left: 464px; top: 208px;"></div></a>
        <a href="/ui-25" @click="${this.visitDemo}" data-sketch-number="25"><div style="left: 545px; top: 208px;"></div></a>
        <a href="/ui-26" @click="${this.visitDemo}" data-sketch-number="26"><div style="left: 630px; top: 208px;"></div></a>
        <a href="/ui-27" @click="${this.visitDemo}" data-sketch-number="27"><div style="left: 713px; top: 208px;"></div></a>
        <!-- Row 4 -->
        <a href="/ui-28" @click="${this.visitDemo}" data-sketch-number="28"><div style="left: 45px; top: 291px;"></div></a>
        <a href="/ui-29" @click="${this.visitDemo}" data-sketch-number="29"><div style="left: 129px; top: 291px;"></div></a>
        <a href="/ui-30" @click="${this.visitDemo}" data-sketch-number="30"><div style="left: 211px; top: 291px;"></div></a>
        <a href="/ui-31" @click="${this.visitDemo}" data-sketch-number="31"><div style="left: 295px; top: 291px;"></div></a>
        <a href="/ui-32" @click="${this.visitDemo}" data-sketch-number="32"><div style="left: 380px; top: 291px;"></div></a>
        <a href="/ui-33" @click="${this.visitDemo}" data-sketch-number="33"><div style="left: 464px; top: 291px;"></div></a>
        <a href="/ui-34" @click="${this.visitDemo}" data-sketch-number="34"><div style="left: 545px; top: 291px;"></div></a>
        <a href="/ui-35" @click="${this.visitDemo}" data-sketch-number="35"><div style="left: 630px; top: 291px;"></div></a>
        <a href="/ui-36" @click="${this.visitDemo}" data-sketch-number="36"><div style="left: 713px; top: 291px;"></div></a>
        <!-- Row 5 -->
        <a href="/ui-37" @click="${this.visitDemo}" data-sketch-number="37"><div style="left: 45px; top: 375px;"></div></a>
        <a href="/ui-38" @click="${this.visitDemo}" data-sketch-number="38"><div style="left: 129px; top: 375px;"></div></a>
        <a href="/ui-39" @click="${this.visitDemo}" data-sketch-number="39"><div style="left: 211px; top: 375px;"></div></a>
        <a href="/ui-40" @click="${this.visitDemo}" data-sketch-number="40"><div style="left: 295px; top: 375px;"></div></a>
        <a href="/ui-41" @click="${this.visitDemo}" data-sketch-number="41"><div style="left: 380px; top: 375px;"></div></a>
        <a href="/ui-42" @click="${this.visitDemo}" data-sketch-number="42"><div style="left: 464px; top: 375px;"></div></a>
        <a href="/ui-43" @click="${this.visitDemo}" data-sketch-number="43"><div style="left: 545px; top: 375px;"></div></a>
        <a href="/ui-44" @click="${this.visitDemo}" data-sketch-number="44"><div style="left: 630px; top: 375px;"></div></a>
        <a href="/ui-45" @click="${this.visitDemo}" data-sketch-number="45"><div style="left: 713px; top: 375px;"></div></a>
        <!-- Row 6 -->
        <a href="/ui-46" @click="${this.visitDemo}" data-sketch-number="46"><div style="left: 45px; top: 459px;"></div></a>
        <a href="/ui-47" @click="${this.visitDemo}" data-sketch-number="47"><div style="left: 129px; top: 459px;"></div></a>
        <a href="/ui-48" @click="${this.visitDemo}" data-sketch-number="48"><div style="left: 211px; top: 459px;"></div></a>
        <a href="/ui-49" @click="${this.visitDemo}" data-sketch-number="49"><div style="left: 295px; top: 459px;"></div></a>
        <a href="/ui-50" @click="${this.visitDemo}" data-sketch-number="50"><div style="left: 380px; top: 459px;"></div></a>
        <a href="/ui-51" @click="${this.visitDemo}" data-sketch-number="51"><div style="left: 464px; top: 459px;"></div></a>
        <a href="/ui-52" @click="${this.visitDemo}" data-sketch-number="52"><div style="left: 545px; top: 459px;"></div></a>
        <a href="/ui-53" @click="${this.visitDemo}" data-sketch-number="53"><div style="left: 630px; top: 459px;"></div></a>
        <a href="/ui-54" @click="${this.visitDemo}" data-sketch-number="54"><div style="left: 713px; top: 459px;"></div></a>
      </section>
    `}};oe.styles=ie`
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
      width: 51px;
      height: 52px;
    }
    div:hover {
      -webkit-box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
      -moz-box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
      box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.35);
    }
  `,oe=ne([X("ui-sketches-img")],oe);var ae={1:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 1"
      src="https://codepen.io/wurde/embed/mdJqjJw?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/mdJqjJw">UI Sketch 1</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},2:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 2"
      src="https://codepen.io/wurde/embed/XWbzBYX?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/XWbzBYX">UI Sketch 2</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},3:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 3"
      src="https://codepen.io/wurde/embed/jOPappo?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/jOPappo">UI Sketch 3</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},4:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 4"
      src="https://codepen.io/wurde/embed/KKpyBxj?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/KKpyBxj">UI Sketch 4</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},5:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 5"
      src="https://codepen.io/wurde/embed/yLNPqGL?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/yLNPqGL">UI Sketch 5</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},6:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 6"
      src="https://codepen.io/wurde/embed/bGdYjOz?height=265&theme-id=dark&default-tab=html,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/bGdYjOz">UI Sketch 6</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},7:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 7"
      src="https://codepen.io/wurde/embed/VwLrBgy?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/VwLrBgy">UI Sketch 7</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},8:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 8"
      src="https://codepen.io/wurde/embed/eYNejXJ?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/eYNejXJ">UI Sketch 8</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},9:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 9"
      src="https://codepen.io/wurde/embed/wvaPxZN?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/wvaPxZN">UI Sketch 9</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},10:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 10"
      src="https://codepen.io/wurde/embed/dyoZqpe?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/dyoZqpe">UI Sketch 10</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},11:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 11"
      src="https://codepen.io/wurde/embed/qBdVMqx?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/qBdVMqx">UI Sketch 11</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},12:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 12"
      src="https://codepen.io/wurde/embed/zYGPJWP?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/zYGPJWP">UI Sketch 12</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},13:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 13"
      src="https://codepen.io/wurde/embed/QWbOVRG?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/QWbOVRG">UI Sketch 13</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},14:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 14"
      src="https://codepen.io/wurde/embed/VwLrGON?height=265&theme-id=dark&default-tab=css,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/VwLrGON">UI Sketch 14</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},15:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 15"
      src="https://codepen.io/wurde/embed/abOVaej?height=265&theme-id=dark&default-tab=html,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/abOVaej">UI Sketch 15</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `},16:function(){return O`
    <iframe
      scrolling="no"
      title="UI Sketch 16"
      src="https://codepen.io/wurde/embed/ExjbdVe?height=265&theme-id=dark&default-tab=html,result"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a href="https://codepen.io/wurde/pen/ExjbdVe">UI Sketch 16</a> by Andy
      Bettisworth (<a href="https://codepen.io/wurde">@wurde</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  `}},he=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let de=class extends re{constructor(){super(...arguments),this.sketchNumber=0}goHome(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("visit-home",{composed:!0,bubbles:!0}))}render(){return O`
      <a href="/" @click="${this.goHome}">Back</a>

      ${this.sketchNumber in ae?ae[this.sketchNumber]():O`
        <h2>Pending...</h2>
      `}
    `}};de.styles=ie`
    :host {
      display: flex;
      flex-direction: column;
      color: #DDD;
    }

    a {
      padding: 15px 0px;
      color: #DDD;
      font-size: 22px;
      font-weight: bold;
    }

    iframe {
      width: 90vw;
      height: 90vh;
    }

    @media (min-width: 1024px) {
      iframe {
        width: 85vw;
        height: 85vh;
      }
    }
  `,he([Z({type:Number})],de.prototype,"sketchNumber",void 0),de=he([X("ui-demo")],de),i.d(t,"GridFunApp",(function(){return ce}));var le=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let ce=class extends re{constructor(){super(),this.currentView="ui-sketches",this.sketchNumber=1,this.addEventListener("visit-demo",e=>{this.sketchNumber=e.detail.sketchNumber,this.currentView="ui-demo"}),this.addEventListener("visit-home",e=>{this.currentView="ui-sketches"})}renderCurrentView(){switch(this.currentView){case"ui-sketches":return O`<ui-sketches-img></ui-sketches-img>`;case"ui-demo":return O`
          <ui-demo .sketchNumber="${this.sketchNumber}"></ui-demo>
        `;default:return O`<ui-sketches-img></ui-sketches-img>`}}render(){return O`
      ${this.renderCurrentView()}
    `}};ce.styles=ie`
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

    ui-sketches-img, ui-demo {
      grid-area: c;
    }
  `,le([Z({type:String})],ce.prototype,"currentView",void 0),le([Z({type:Number})],ce.prototype,"sketchNumber",void 0),ce=le([X("grid-fun-app")],ce)}]);