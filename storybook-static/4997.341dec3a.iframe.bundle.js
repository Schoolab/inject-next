/*! For license information please see 4997.341dec3a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[4997],{"./node_modules/dompurify/dist/purify.es.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>purify});var console=__webpack_require__("./node_modules/console-browserify/index.js");const{entries,setPrototypeOf,isFrozen,getPrototypeOf,getOwnPropertyDescriptor}=Object;let{freeze,seal,create}=Object,{apply,construct}="undefined"!=typeof Reflect&&Reflect;freeze||(freeze=function freeze(x){return x}),seal||(seal=function seal(x){return x}),apply||(apply=function apply(fun,thisValue,args){return fun.apply(thisValue,args)}),construct||(construct=function construct(Func,args){return new Func(...args)});const arrayForEach=unapply(Array.prototype.forEach),arrayPop=unapply(Array.prototype.pop),arrayPush=unapply(Array.prototype.push),stringToLowerCase=unapply(String.prototype.toLowerCase),stringToString=unapply(String.prototype.toString),stringMatch=unapply(String.prototype.match),stringReplace=unapply(String.prototype.replace),stringIndexOf=unapply(String.prototype.indexOf),stringTrim=unapply(String.prototype.trim),objectHasOwnProperty=unapply(Object.prototype.hasOwnProperty),regExpTest=unapply(RegExp.prototype.test),typeErrorCreate=function unconstruct(func){return function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return construct(func,args)}}(TypeError);function unapply(func){return function(thisArg){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];return apply(func,thisArg,args)}}function addToSet(set,array){let transformCaseFunc=arguments.length>2&&void 0!==arguments[2]?arguments[2]:stringToLowerCase;setPrototypeOf&&setPrototypeOf(set,null);let l=array.length;for(;l--;){let element=array[l];if("string"==typeof element){const lcElement=transformCaseFunc(element);lcElement!==element&&(isFrozen(array)||(array[l]=lcElement),element=lcElement)}set[element]=!0}return set}function cleanArray(array){for(let index=0;index<array.length;index++){objectHasOwnProperty(array,index)||(array[index]=null)}return array}function clone(object){const newObject=create(null);for(const[property,value]of entries(object)){objectHasOwnProperty(object,property)&&(Array.isArray(value)?newObject[property]=cleanArray(value):value&&"object"==typeof value&&value.constructor===Object?newObject[property]=clone(value):newObject[property]=value)}return newObject}function lookupGetter(object,prop){for(;null!==object;){const desc=getOwnPropertyDescriptor(object,prop);if(desc){if(desc.get)return unapply(desc.get);if("function"==typeof desc.value)return unapply(desc.value)}object=getPrototypeOf(object)}return function fallbackValue(){return null}}const html$1=freeze(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),svg$1=freeze(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),svgFilters=freeze(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),svgDisallowed=freeze(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),mathMl$1=freeze(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),mathMlDisallowed=freeze(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=freeze(["#text"]),html=freeze(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),svg=freeze(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mathMl=freeze(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xml=freeze(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),MUSTACHE_EXPR=seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ERB_EXPR=seal(/<%[\w\W]*|[\w\W]*%>/gm),TMPLIT_EXPR=seal(/\${[\w\W]*}/gm),DATA_ATTR=seal(/^data-[\-\w.\u00B7-\uFFFF]/),ARIA_ATTR=seal(/^aria-[\-\w]+$/),IS_ALLOWED_URI=seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),IS_SCRIPT_OR_DATA=seal(/^(?:\w+script|data):/i),ATTR_WHITESPACE=seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),DOCTYPE_NAME=seal(/^html$/i),CUSTOM_ELEMENT=seal(/^[a-z][.\w]*(-[.\w]+)+$/i);var EXPRESSIONS=Object.freeze({__proto__:null,ARIA_ATTR,ATTR_WHITESPACE,CUSTOM_ELEMENT,DATA_ATTR,DOCTYPE_NAME,ERB_EXPR,IS_ALLOWED_URI,IS_SCRIPT_OR_DATA,MUSTACHE_EXPR,TMPLIT_EXPR});const NODE_TYPE_element=1,NODE_TYPE_text=3,NODE_TYPE_progressingInstruction=7,NODE_TYPE_comment=8,NODE_TYPE_document=9,getGlobal=function getGlobal(){return"undefined"==typeof window?null:window};var purify=function createDOMPurify(){let window=arguments.length>0&&void 0!==arguments[0]?arguments[0]:getGlobal();const DOMPurify=root=>createDOMPurify(root);if(DOMPurify.version="3.2.0",DOMPurify.removed=[],!window||!window.document||window.document.nodeType!==NODE_TYPE_document)return DOMPurify.isSupported=!1,DOMPurify;let{document}=window;const originalDocument=document,currentScript=originalDocument.currentScript,{DocumentFragment,HTMLTemplateElement,Node,Element,NodeFilter,NamedNodeMap=window.NamedNodeMap||window.MozNamedAttrMap,HTMLFormElement,DOMParser,trustedTypes}=window,ElementPrototype=Element.prototype,cloneNode=lookupGetter(ElementPrototype,"cloneNode"),remove=lookupGetter(ElementPrototype,"remove"),getNextSibling=lookupGetter(ElementPrototype,"nextSibling"),getChildNodes=lookupGetter(ElementPrototype,"childNodes"),getParentNode=lookupGetter(ElementPrototype,"parentNode");if("function"==typeof HTMLTemplateElement){const template=document.createElement("template");template.content&&template.content.ownerDocument&&(document=template.content.ownerDocument)}let trustedTypesPolicy,emptyHTML="";const{implementation,createNodeIterator,createDocumentFragment,getElementsByTagName}=document,{importNode}=originalDocument;let hooks={};DOMPurify.isSupported="function"==typeof entries&&"function"==typeof getParentNode&&implementation&&void 0!==implementation.createHTMLDocument;const{MUSTACHE_EXPR,ERB_EXPR,TMPLIT_EXPR,DATA_ATTR,ARIA_ATTR,IS_SCRIPT_OR_DATA,ATTR_WHITESPACE,CUSTOM_ELEMENT}=EXPRESSIONS;let{IS_ALLOWED_URI:IS_ALLOWED_URI$1}=EXPRESSIONS,ALLOWED_TAGS=null;const DEFAULT_ALLOWED_TAGS=addToSet({},[...html$1,...svg$1,...svgFilters,...mathMl$1,...text]);let ALLOWED_ATTR=null;const DEFAULT_ALLOWED_ATTR=addToSet({},[...html,...svg,...mathMl,...xml]);let CUSTOM_ELEMENT_HANDLING=Object.seal(create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),FORBID_TAGS=null,FORBID_ATTR=null,ALLOW_ARIA_ATTR=!0,ALLOW_DATA_ATTR=!0,ALLOW_UNKNOWN_PROTOCOLS=!1,ALLOW_SELF_CLOSE_IN_ATTR=!0,SAFE_FOR_TEMPLATES=!1,SAFE_FOR_XML=!0,WHOLE_DOCUMENT=!1,SET_CONFIG=!1,FORCE_BODY=!1,RETURN_DOM=!1,RETURN_DOM_FRAGMENT=!1,RETURN_TRUSTED_TYPE=!1,SANITIZE_DOM=!0,SANITIZE_NAMED_PROPS=!1,KEEP_CONTENT=!0,IN_PLACE=!1,USE_PROFILES={},FORBID_CONTENTS=null;const DEFAULT_FORBID_CONTENTS=addToSet({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let DATA_URI_TAGS=null;const DEFAULT_DATA_URI_TAGS=addToSet({},["audio","video","img","source","image","track"]);let URI_SAFE_ATTRIBUTES=null;const DEFAULT_URI_SAFE_ATTRIBUTES=addToSet({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),MATHML_NAMESPACE="http://www.w3.org/1998/Math/MathML",SVG_NAMESPACE="http://www.w3.org/2000/svg",HTML_NAMESPACE="http://www.w3.org/1999/xhtml";let NAMESPACE=HTML_NAMESPACE,IS_EMPTY_INPUT=!1,ALLOWED_NAMESPACES=null;const DEFAULT_ALLOWED_NAMESPACES=addToSet({},[MATHML_NAMESPACE,SVG_NAMESPACE,HTML_NAMESPACE],stringToString);let MATHML_TEXT_INTEGRATION_POINTS=addToSet({},["mi","mo","mn","ms","mtext"]),HTML_INTEGRATION_POINTS=addToSet({},["annotation-xml"]);const COMMON_SVG_AND_HTML_ELEMENTS=addToSet({},["title","style","font","a","script"]);let PARSER_MEDIA_TYPE=null;const SUPPORTED_PARSER_MEDIA_TYPES=["application/xhtml+xml","text/html"];let transformCaseFunc=null,CONFIG=null;const formElement=document.createElement("form"),isRegexOrFunction=function isRegexOrFunction(testValue){return testValue instanceof RegExp||testValue instanceof Function},_parseConfig=function _parseConfig(){let cfg=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!CONFIG||CONFIG!==cfg){if(cfg&&"object"==typeof cfg||(cfg={}),cfg=clone(cfg),PARSER_MEDIA_TYPE=-1===SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE)?"text/html":cfg.PARSER_MEDIA_TYPE,transformCaseFunc="application/xhtml+xml"===PARSER_MEDIA_TYPE?stringToString:stringToLowerCase,ALLOWED_TAGS=objectHasOwnProperty(cfg,"ALLOWED_TAGS")?addToSet({},cfg.ALLOWED_TAGS,transformCaseFunc):DEFAULT_ALLOWED_TAGS,ALLOWED_ATTR=objectHasOwnProperty(cfg,"ALLOWED_ATTR")?addToSet({},cfg.ALLOWED_ATTR,transformCaseFunc):DEFAULT_ALLOWED_ATTR,ALLOWED_NAMESPACES=objectHasOwnProperty(cfg,"ALLOWED_NAMESPACES")?addToSet({},cfg.ALLOWED_NAMESPACES,stringToString):DEFAULT_ALLOWED_NAMESPACES,URI_SAFE_ATTRIBUTES=objectHasOwnProperty(cfg,"ADD_URI_SAFE_ATTR")?addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),cfg.ADD_URI_SAFE_ATTR,transformCaseFunc):DEFAULT_URI_SAFE_ATTRIBUTES,DATA_URI_TAGS=objectHasOwnProperty(cfg,"ADD_DATA_URI_TAGS")?addToSet(clone(DEFAULT_DATA_URI_TAGS),cfg.ADD_DATA_URI_TAGS,transformCaseFunc):DEFAULT_DATA_URI_TAGS,FORBID_CONTENTS=objectHasOwnProperty(cfg,"FORBID_CONTENTS")?addToSet({},cfg.FORBID_CONTENTS,transformCaseFunc):DEFAULT_FORBID_CONTENTS,FORBID_TAGS=objectHasOwnProperty(cfg,"FORBID_TAGS")?addToSet({},cfg.FORBID_TAGS,transformCaseFunc):{},FORBID_ATTR=objectHasOwnProperty(cfg,"FORBID_ATTR")?addToSet({},cfg.FORBID_ATTR,transformCaseFunc):{},USE_PROFILES=!!objectHasOwnProperty(cfg,"USE_PROFILES")&&cfg.USE_PROFILES,ALLOW_ARIA_ATTR=!1!==cfg.ALLOW_ARIA_ATTR,ALLOW_DATA_ATTR=!1!==cfg.ALLOW_DATA_ATTR,ALLOW_UNKNOWN_PROTOCOLS=cfg.ALLOW_UNKNOWN_PROTOCOLS||!1,ALLOW_SELF_CLOSE_IN_ATTR=!1!==cfg.ALLOW_SELF_CLOSE_IN_ATTR,SAFE_FOR_TEMPLATES=cfg.SAFE_FOR_TEMPLATES||!1,SAFE_FOR_XML=!1!==cfg.SAFE_FOR_XML,WHOLE_DOCUMENT=cfg.WHOLE_DOCUMENT||!1,RETURN_DOM=cfg.RETURN_DOM||!1,RETURN_DOM_FRAGMENT=cfg.RETURN_DOM_FRAGMENT||!1,RETURN_TRUSTED_TYPE=cfg.RETURN_TRUSTED_TYPE||!1,FORCE_BODY=cfg.FORCE_BODY||!1,SANITIZE_DOM=!1!==cfg.SANITIZE_DOM,SANITIZE_NAMED_PROPS=cfg.SANITIZE_NAMED_PROPS||!1,KEEP_CONTENT=!1!==cfg.KEEP_CONTENT,IN_PLACE=cfg.IN_PLACE||!1,IS_ALLOWED_URI$1=cfg.ALLOWED_URI_REGEXP||IS_ALLOWED_URI,NAMESPACE=cfg.NAMESPACE||HTML_NAMESPACE,MATHML_TEXT_INTEGRATION_POINTS=cfg.MATHML_TEXT_INTEGRATION_POINTS||MATHML_TEXT_INTEGRATION_POINTS,HTML_INTEGRATION_POINTS=cfg.HTML_INTEGRATION_POINTS||HTML_INTEGRATION_POINTS,CUSTOM_ELEMENT_HANDLING=cfg.CUSTOM_ELEMENT_HANDLING||{},cfg.CUSTOM_ELEMENT_HANDLING&&isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(CUSTOM_ELEMENT_HANDLING.tagNameCheck=cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck),cfg.CUSTOM_ELEMENT_HANDLING&&isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(CUSTOM_ELEMENT_HANDLING.attributeNameCheck=cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),cfg.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),SAFE_FOR_TEMPLATES&&(ALLOW_DATA_ATTR=!1),RETURN_DOM_FRAGMENT&&(RETURN_DOM=!0),USE_PROFILES&&(ALLOWED_TAGS=addToSet({},text),ALLOWED_ATTR=[],!0===USE_PROFILES.html&&(addToSet(ALLOWED_TAGS,html$1),addToSet(ALLOWED_ATTR,html)),!0===USE_PROFILES.svg&&(addToSet(ALLOWED_TAGS,svg$1),addToSet(ALLOWED_ATTR,svg),addToSet(ALLOWED_ATTR,xml)),!0===USE_PROFILES.svgFilters&&(addToSet(ALLOWED_TAGS,svgFilters),addToSet(ALLOWED_ATTR,svg),addToSet(ALLOWED_ATTR,xml)),!0===USE_PROFILES.mathMl&&(addToSet(ALLOWED_TAGS,mathMl$1),addToSet(ALLOWED_ATTR,mathMl),addToSet(ALLOWED_ATTR,xml))),cfg.ADD_TAGS&&(ALLOWED_TAGS===DEFAULT_ALLOWED_TAGS&&(ALLOWED_TAGS=clone(ALLOWED_TAGS)),addToSet(ALLOWED_TAGS,cfg.ADD_TAGS,transformCaseFunc)),cfg.ADD_ATTR&&(ALLOWED_ATTR===DEFAULT_ALLOWED_ATTR&&(ALLOWED_ATTR=clone(ALLOWED_ATTR)),addToSet(ALLOWED_ATTR,cfg.ADD_ATTR,transformCaseFunc)),cfg.ADD_URI_SAFE_ATTR&&addToSet(URI_SAFE_ATTRIBUTES,cfg.ADD_URI_SAFE_ATTR,transformCaseFunc),cfg.FORBID_CONTENTS&&(FORBID_CONTENTS===DEFAULT_FORBID_CONTENTS&&(FORBID_CONTENTS=clone(FORBID_CONTENTS)),addToSet(FORBID_CONTENTS,cfg.FORBID_CONTENTS,transformCaseFunc)),KEEP_CONTENT&&(ALLOWED_TAGS["#text"]=!0),WHOLE_DOCUMENT&&addToSet(ALLOWED_TAGS,["html","head","body"]),ALLOWED_TAGS.table&&(addToSet(ALLOWED_TAGS,["tbody"]),delete FORBID_TAGS.tbody),cfg.TRUSTED_TYPES_POLICY){if("function"!=typeof cfg.TRUSTED_TYPES_POLICY.createHTML)throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL)throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');trustedTypesPolicy=cfg.TRUSTED_TYPES_POLICY,emptyHTML=trustedTypesPolicy.createHTML("")}else void 0===trustedTypesPolicy&&(trustedTypesPolicy=function _createTrustedTypesPolicy(trustedTypes,purifyHostElement){if("object"!=typeof trustedTypes||"function"!=typeof trustedTypes.createPolicy)return null;let suffix=null;purifyHostElement&&purifyHostElement.hasAttribute("data-tt-policy-suffix")&&(suffix=purifyHostElement.getAttribute("data-tt-policy-suffix"));const policyName="dompurify"+(suffix?"#"+suffix:"");try{return trustedTypes.createPolicy(policyName,{createHTML:html=>html,createScriptURL:scriptUrl=>scriptUrl})}catch(_){return console.warn("TrustedTypes policy "+policyName+" could not be created."),null}}(trustedTypes,currentScript)),null!==trustedTypesPolicy&&"string"==typeof emptyHTML&&(emptyHTML=trustedTypesPolicy.createHTML(""));freeze&&freeze(cfg),CONFIG=cfg}},ALL_SVG_TAGS=addToSet({},[...svg$1,...svgFilters,...svgDisallowed]),ALL_MATHML_TAGS=addToSet({},[...mathMl$1,...mathMlDisallowed]),_forceRemove=function _forceRemove(node){arrayPush(DOMPurify.removed,{element:node});try{getParentNode(node).removeChild(node)}catch(_){remove(node)}},_removeAttribute=function _removeAttribute(name,element){try{arrayPush(DOMPurify.removed,{attribute:element.getAttributeNode(name),from:element})}catch(_){arrayPush(DOMPurify.removed,{attribute:null,from:element})}if(element.removeAttribute(name),"is"===name&&!ALLOWED_ATTR[name])if(RETURN_DOM||RETURN_DOM_FRAGMENT)try{_forceRemove(element)}catch(_){}else try{element.setAttribute(name,"")}catch(_){}},_initDocument=function _initDocument(dirty){let doc=null,leadingWhitespace=null;if(FORCE_BODY)dirty="<remove></remove>"+dirty;else{const matches=stringMatch(dirty,/^[\r\n\t ]+/);leadingWhitespace=matches&&matches[0]}"application/xhtml+xml"===PARSER_MEDIA_TYPE&&NAMESPACE===HTML_NAMESPACE&&(dirty='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+dirty+"</body></html>");const dirtyPayload=trustedTypesPolicy?trustedTypesPolicy.createHTML(dirty):dirty;if(NAMESPACE===HTML_NAMESPACE)try{doc=(new DOMParser).parseFromString(dirtyPayload,PARSER_MEDIA_TYPE)}catch(_){}if(!doc||!doc.documentElement){doc=implementation.createDocument(NAMESPACE,"template",null);try{doc.documentElement.innerHTML=IS_EMPTY_INPUT?emptyHTML:dirtyPayload}catch(_){}}const body=doc.body||doc.documentElement;return dirty&&leadingWhitespace&&body.insertBefore(document.createTextNode(leadingWhitespace),body.childNodes[0]||null),NAMESPACE===HTML_NAMESPACE?getElementsByTagName.call(doc,WHOLE_DOCUMENT?"html":"body")[0]:WHOLE_DOCUMENT?doc.documentElement:body},_createNodeIterator=function _createNodeIterator(root){return createNodeIterator.call(root.ownerDocument||root,root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_PROCESSING_INSTRUCTION|NodeFilter.SHOW_CDATA_SECTION,null)},_isClobbered=function _isClobbered(element){return element instanceof HTMLFormElement&&("string"!=typeof element.nodeName||"string"!=typeof element.textContent||"function"!=typeof element.removeChild||!(element.attributes instanceof NamedNodeMap)||"function"!=typeof element.removeAttribute||"function"!=typeof element.setAttribute||"string"!=typeof element.namespaceURI||"function"!=typeof element.insertBefore||"function"!=typeof element.hasChildNodes)},_isNode=function _isNode(value){return"function"==typeof Node&&value instanceof Node};function _executeHook(entryPoint,currentNode,data){hooks[entryPoint]&&arrayForEach(hooks[entryPoint],(hook=>{hook.call(DOMPurify,currentNode,data,CONFIG)}))}const _sanitizeElements=function _sanitizeElements(currentNode){let content=null;if(_executeHook("beforeSanitizeElements",currentNode,null),_isClobbered(currentNode))return _forceRemove(currentNode),!0;const tagName=transformCaseFunc(currentNode.nodeName);if(_executeHook("uponSanitizeElement",currentNode,{tagName,allowedTags:ALLOWED_TAGS}),currentNode.hasChildNodes()&&!_isNode(currentNode.firstElementChild)&&regExpTest(/<[/\w]/g,currentNode.innerHTML)&&regExpTest(/<[/\w]/g,currentNode.textContent))return _forceRemove(currentNode),!0;if(currentNode.nodeType===NODE_TYPE_progressingInstruction)return _forceRemove(currentNode),!0;if(SAFE_FOR_XML&&currentNode.nodeType===NODE_TYPE_comment&&regExpTest(/<[/\w]/g,currentNode.data))return _forceRemove(currentNode),!0;if(!ALLOWED_TAGS[tagName]||FORBID_TAGS[tagName]){if(!FORBID_TAGS[tagName]&&_isBasicCustomElement(tagName)){if(CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp&&regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck,tagName))return!1;if(CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function&&CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))return!1}if(KEEP_CONTENT&&!FORBID_CONTENTS[tagName]){const parentNode=getParentNode(currentNode)||currentNode.parentNode,childNodes=getChildNodes(currentNode)||currentNode.childNodes;if(childNodes&&parentNode){for(let i=childNodes.length-1;i>=0;--i){const childClone=cloneNode(childNodes[i],!0);childClone.__removalCount=(currentNode.__removalCount||0)+1,parentNode.insertBefore(childClone,getNextSibling(currentNode))}}}return _forceRemove(currentNode),!0}return currentNode instanceof Element&&!function _checkValidNamespace(element){let parent=getParentNode(element);parent&&parent.tagName||(parent={namespaceURI:NAMESPACE,tagName:"template"});const tagName=stringToLowerCase(element.tagName),parentTagName=stringToLowerCase(parent.tagName);return!!ALLOWED_NAMESPACES[element.namespaceURI]&&(element.namespaceURI===SVG_NAMESPACE?parent.namespaceURI===HTML_NAMESPACE?"svg"===tagName:parent.namespaceURI===MATHML_NAMESPACE?"svg"===tagName&&("annotation-xml"===parentTagName||MATHML_TEXT_INTEGRATION_POINTS[parentTagName]):Boolean(ALL_SVG_TAGS[tagName]):element.namespaceURI===MATHML_NAMESPACE?parent.namespaceURI===HTML_NAMESPACE?"math"===tagName:parent.namespaceURI===SVG_NAMESPACE?"math"===tagName&&HTML_INTEGRATION_POINTS[parentTagName]:Boolean(ALL_MATHML_TAGS[tagName]):element.namespaceURI===HTML_NAMESPACE?!(parent.namespaceURI===SVG_NAMESPACE&&!HTML_INTEGRATION_POINTS[parentTagName])&&!(parent.namespaceURI===MATHML_NAMESPACE&&!MATHML_TEXT_INTEGRATION_POINTS[parentTagName])&&!ALL_MATHML_TAGS[tagName]&&(COMMON_SVG_AND_HTML_ELEMENTS[tagName]||!ALL_SVG_TAGS[tagName]):!("application/xhtml+xml"!==PARSER_MEDIA_TYPE||!ALLOWED_NAMESPACES[element.namespaceURI]))}(currentNode)?(_forceRemove(currentNode),!0):"noscript"!==tagName&&"noembed"!==tagName&&"noframes"!==tagName||!regExpTest(/<\/no(script|embed|frames)/i,currentNode.innerHTML)?(SAFE_FOR_TEMPLATES&&currentNode.nodeType===NODE_TYPE_text&&(content=currentNode.textContent,arrayForEach([MUSTACHE_EXPR,ERB_EXPR,TMPLIT_EXPR],(expr=>{content=stringReplace(content,expr," ")})),currentNode.textContent!==content&&(arrayPush(DOMPurify.removed,{element:currentNode.cloneNode()}),currentNode.textContent=content)),_executeHook("afterSanitizeElements",currentNode,null),!1):(_forceRemove(currentNode),!0)},_isValidAttribute=function _isValidAttribute(lcTag,lcName,value){if(SANITIZE_DOM&&("id"===lcName||"name"===lcName)&&(value in document||value in formElement))return!1;if(ALLOW_DATA_ATTR&&!FORBID_ATTR[lcName]&&regExpTest(DATA_ATTR,lcName));else if(ALLOW_ARIA_ATTR&&regExpTest(ARIA_ATTR,lcName));else if(!ALLOWED_ATTR[lcName]||FORBID_ATTR[lcName]){if(!(_isBasicCustomElement(lcTag)&&(CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp&&regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck,lcTag)||CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function&&CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag))&&(CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp&&regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck,lcName)||CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function&&CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName))||"is"===lcName&&CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp&&regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck,value)||CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function&&CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))))return!1}else if(URI_SAFE_ATTRIBUTES[lcName]);else if(regExpTest(IS_ALLOWED_URI$1,stringReplace(value,ATTR_WHITESPACE,"")));else if("src"!==lcName&&"xlink:href"!==lcName&&"href"!==lcName||"script"===lcTag||0!==stringIndexOf(value,"data:")||!DATA_URI_TAGS[lcTag]){if(ALLOW_UNKNOWN_PROTOCOLS&&!regExpTest(IS_SCRIPT_OR_DATA,stringReplace(value,ATTR_WHITESPACE,"")));else if(value)return!1}else;return!0},_isBasicCustomElement=function _isBasicCustomElement(tagName){return"annotation-xml"!==tagName&&stringMatch(tagName,CUSTOM_ELEMENT)},_sanitizeAttributes=function _sanitizeAttributes(currentNode){_executeHook("beforeSanitizeAttributes",currentNode,null);const{attributes}=currentNode;if(!attributes)return;const hookEvent={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ALLOWED_ATTR,forceKeepAttr:void 0};let l=attributes.length;for(;l--;){const attr=attributes[l],{name,namespaceURI,value:attrValue}=attr,lcName=transformCaseFunc(name);let value="value"===name?attrValue:stringTrim(attrValue);if(hookEvent.attrName=lcName,hookEvent.attrValue=value,hookEvent.keepAttr=!0,hookEvent.forceKeepAttr=void 0,_executeHook("uponSanitizeAttribute",currentNode,hookEvent),value=hookEvent.attrValue,!SANITIZE_NAMED_PROPS||"id"!==lcName&&"name"!==lcName||(_removeAttribute(name,currentNode),value="user-content-"+value),SAFE_FOR_XML&&regExpTest(/((--!?|])>)|<\/(style|title)/i,value)){_removeAttribute(name,currentNode);continue}if(hookEvent.forceKeepAttr)continue;if(_removeAttribute(name,currentNode),!hookEvent.keepAttr)continue;if(!ALLOW_SELF_CLOSE_IN_ATTR&&regExpTest(/\/>/i,value)){_removeAttribute(name,currentNode);continue}SAFE_FOR_TEMPLATES&&arrayForEach([MUSTACHE_EXPR,ERB_EXPR,TMPLIT_EXPR],(expr=>{value=stringReplace(value,expr," ")}));const lcTag=transformCaseFunc(currentNode.nodeName);if(_isValidAttribute(lcTag,lcName,value)){if(trustedTypesPolicy&&"object"==typeof trustedTypes&&"function"==typeof trustedTypes.getAttributeType)if(namespaceURI);else switch(trustedTypes.getAttributeType(lcTag,lcName)){case"TrustedHTML":value=trustedTypesPolicy.createHTML(value);break;case"TrustedScriptURL":value=trustedTypesPolicy.createScriptURL(value)}try{namespaceURI?currentNode.setAttributeNS(namespaceURI,name,value):currentNode.setAttribute(name,value),_isClobbered(currentNode)?_forceRemove(currentNode):arrayPop(DOMPurify.removed)}catch(_){}}}_executeHook("afterSanitizeAttributes",currentNode,null)},_sanitizeShadowDOM=function _sanitizeShadowDOM(fragment){let shadowNode=null;const shadowIterator=_createNodeIterator(fragment);for(_executeHook("beforeSanitizeShadowDOM",fragment,null);shadowNode=shadowIterator.nextNode();)_executeHook("uponSanitizeShadowNode",shadowNode,null),_sanitizeElements(shadowNode)||(shadowNode.content instanceof DocumentFragment&&_sanitizeShadowDOM(shadowNode.content),_sanitizeAttributes(shadowNode));_executeHook("afterSanitizeShadowDOM",fragment,null)};return DOMPurify.sanitize=function(dirty){let cfg=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},body=null,importedNode=null,currentNode=null,returnNode=null;if(IS_EMPTY_INPUT=!dirty,IS_EMPTY_INPUT&&(dirty="\x3c!--\x3e"),"string"!=typeof dirty&&!_isNode(dirty)){if("function"!=typeof dirty.toString)throw typeErrorCreate("toString is not a function");if("string"!=typeof(dirty=dirty.toString()))throw typeErrorCreate("dirty is not a string, aborting")}if(!DOMPurify.isSupported)return dirty;if(SET_CONFIG||_parseConfig(cfg),DOMPurify.removed=[],"string"==typeof dirty&&(IN_PLACE=!1),IN_PLACE){if(dirty.nodeName){const tagName=transformCaseFunc(dirty.nodeName);if(!ALLOWED_TAGS[tagName]||FORBID_TAGS[tagName])throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place")}}else if(dirty instanceof Node)body=_initDocument("\x3c!----\x3e"),importedNode=body.ownerDocument.importNode(dirty,!0),importedNode.nodeType===NODE_TYPE_element&&"BODY"===importedNode.nodeName||"HTML"===importedNode.nodeName?body=importedNode:body.appendChild(importedNode);else{if(!RETURN_DOM&&!SAFE_FOR_TEMPLATES&&!WHOLE_DOCUMENT&&-1===dirty.indexOf("<"))return trustedTypesPolicy&&RETURN_TRUSTED_TYPE?trustedTypesPolicy.createHTML(dirty):dirty;if(body=_initDocument(dirty),!body)return RETURN_DOM?null:RETURN_TRUSTED_TYPE?emptyHTML:""}body&&FORCE_BODY&&_forceRemove(body.firstChild);const nodeIterator=_createNodeIterator(IN_PLACE?dirty:body);for(;currentNode=nodeIterator.nextNode();)_sanitizeElements(currentNode)||(currentNode.content instanceof DocumentFragment&&_sanitizeShadowDOM(currentNode.content),_sanitizeAttributes(currentNode));if(IN_PLACE)return dirty;if(RETURN_DOM){if(RETURN_DOM_FRAGMENT)for(returnNode=createDocumentFragment.call(body.ownerDocument);body.firstChild;)returnNode.appendChild(body.firstChild);else returnNode=body;return(ALLOWED_ATTR.shadowroot||ALLOWED_ATTR.shadowrootmode)&&(returnNode=importNode.call(originalDocument,returnNode,!0)),returnNode}let serializedHTML=WHOLE_DOCUMENT?body.outerHTML:body.innerHTML;return WHOLE_DOCUMENT&&ALLOWED_TAGS["!doctype"]&&body.ownerDocument&&body.ownerDocument.doctype&&body.ownerDocument.doctype.name&&regExpTest(DOCTYPE_NAME,body.ownerDocument.doctype.name)&&(serializedHTML="<!DOCTYPE "+body.ownerDocument.doctype.name+">\n"+serializedHTML),SAFE_FOR_TEMPLATES&&arrayForEach([MUSTACHE_EXPR,ERB_EXPR,TMPLIT_EXPR],(expr=>{serializedHTML=stringReplace(serializedHTML,expr," ")})),trustedTypesPolicy&&RETURN_TRUSTED_TYPE?trustedTypesPolicy.createHTML(serializedHTML):serializedHTML},DOMPurify.setConfig=function(){_parseConfig(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),SET_CONFIG=!0},DOMPurify.clearConfig=function(){CONFIG=null,SET_CONFIG=!1},DOMPurify.isValidAttribute=function(tag,attr,value){CONFIG||_parseConfig({});const lcTag=transformCaseFunc(tag),lcName=transformCaseFunc(attr);return _isValidAttribute(lcTag,lcName,value)},DOMPurify.addHook=function(entryPoint,hookFunction){"function"==typeof hookFunction&&(hooks[entryPoint]=hooks[entryPoint]||[],arrayPush(hooks[entryPoint],hookFunction))},DOMPurify.removeHook=function(entryPoint){if(hooks[entryPoint])return arrayPop(hooks[entryPoint])},DOMPurify.removeHooks=function(entryPoint){hooks[entryPoint]&&(hooks[entryPoint]=[])},DOMPurify.removeAllHooks=function(){hooks={}},DOMPurify}()}}]);