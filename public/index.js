!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const s=new WeakMap,r=t=>"function"==typeof t&&s.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`);class p{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)u(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=l[a],i=v.exec(e)[2],s=i.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const n=r.split(d);this.parts.push({type:"attribute",index:o,name:i,strings:n}),a+=n.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const s=t.parentNode,r=e.split(d),n=r.length-1;for(let e=0;e<n;e++){let i,n=r[e];if(""===n)i=f();else{const t=v.exec(n);null!==t&&u(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++o})}""===r[n]?(s.insertBefore(f(),t),i.push(t)):t.data=r[n],a+=n}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(f(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(i.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const u=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},m=t=>-1!==t.index,f=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class y{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=s.nextNode();for(;o<i.length;)if(r=i[o],m(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}const x=` ${c} `;class _{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const n=v.exec(t);e+=null===n?t+(i?x:h):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const g=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(g(t)||!b(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||g(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=f()),t.__insert(this.endNode=f())}insertAfterPart(t){t.__insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(g(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const i=new y(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)i=e[s],void 0===i&&(i=new w(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class N extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new $(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $ extends S{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class D{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const T=new class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new N(t,e.slice(1),i).parts}return"@"===r?[new D(t,e.slice(1),s.eventContext)]:"?"===r?[new P(t,e.slice(1),i)]:new k(t,e,i).parts}handleTextExpression(t){return new w(t)}};function A(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(c);return i=e.keyString.get(s),void 0===i&&(i=new p(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,O=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const R=(t,...e)=>new _(t,e,"html",T);function j(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,133,null,!1);let n=U(s),o=s[n],a=-1,l=0;const c=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,n=U(s,n),o=s[n]}c.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},U=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(m(e))return i}return-1};const z=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const F=t=>e=>{const i=z(e.type,t);let s=V.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(c);if(r=s.keyString.get(n),void 0===r){const i=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(i,t),r=new p(e,i),s.keyString.set(n,r)}return s.stringsArray.set(e.strings,r),r},L=["html","svg"],H=new Set,I=(t,e,i)=>{H.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const i=V.get(z(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),j(t,i)})})})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let o=U(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===i&&(a=M(e),i.parentNode.insertBefore(e,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=U(r,o);return}o=U(r,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),j(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:W},G=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=W){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||B,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||B.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=J){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i._classProperties.get(s)||J;this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,r=s._classProperties.get(t)||J;s._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,s)=>{t=i,e=s});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}K.finalized=!0;const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}});function Y(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const it=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new et(i,tt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const st=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let s=0,r=e.length;s<r;s++){const r=e[s];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class rt extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){st(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}rt.finalized=!0,rt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=O.has(e),n=q&&11===e.nodeType&&!!e.host,a=n&&!H.has(s),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=O.get(e);void 0===s&&(o(e,e.firstChild),O.set(e,s=new w(Object.assign({templateFactory:A},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:F(s)},i)),a){const t=O.get(l);O.delete(l);const i=t.value instanceof y?t.value.template:void 0;I(s,l,i),o(e,e.firstChild),e.appendChild(l),O.set(e,t)}!r&&n&&window.ShadyCSS.styleElement(e.host)};var nt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let ot=class extends rt{visitDemo(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("visit-demo",{detail:{sketchNumber:t.currentTarget.dataset.sketchNumber},composed:!0,bubbles:!0}))}render(){return R`
      <section>
        <img src="/images/brainstorm-ui-20200226.png" alt="UI Sketches." />
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
    `}};ot.styles=it`
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
  `,ot=nt([Q("ui-sketches-img")],ot);var at=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let lt=class extends rt{constructor(){super(...arguments),this.sketchNumber=0}goHome(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("visit-home",{composed:!0,bubbles:!0}))}render(){return R`
      <a href="/" @click="${this.goHome}">Go Back</a>
      ${this.sketchNumber}
    `}};lt.styles=it`
    :host {
      background-color: yellow;
    }
  `,at([Y({type:Number})],lt.prototype,"sketchNumber",void 0),lt=at([Q("ui-demo")],lt),i.d(e,"GridFunApp",(function(){return ht}));var ct=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let ht=class extends rt{constructor(){super(),this.currentView="ui-sketches",this.sketchNumber=1,this.addEventListener("visit-demo",t=>{this.sketchNumber=t.detail.sketchNumber,this.currentView="ui-demo"}),this.addEventListener("visit-home",t=>{this.currentView="ui-sketches"})}renderCurrentView(){switch(this.currentView){case"ui-sketches":return R`<ui-sketches-img></ui-sketches-img>`;case"ui-demo":return R`
          <ui-demo .sketchNumber="${this.sketchNumber}"></ui-demo>
        `;default:return R`<ui-sketches-img></ui-sketches-img>`}}render(){return R`
      ${this.renderCurrentView()}
    `}};ht.styles=it`
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
  `,ct([Y({type:String})],ht.prototype,"currentView",void 0),ct([Y({type:Number})],ht.prototype,"sketchNumber",void 0),ht=ct([Q("grid-fun-app")],ht)}]);