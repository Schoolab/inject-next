(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[9565],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Icons.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),Icon=__webpack_require__("./src/app/components/Icon.tsx");const inject_icons_namespaceObject=JSON.parse('{"account-circle":61720,"account-plus":61721,"account":61728,"admin":61729,"ai":61730,"alert-circle":61731,"alert":61732,"arrow-bottom":62217,"arrow-down":62224,"arrow-left":61733,"arrow-right":62225,"arrow-top":62226,"arrow-up":62227,"attachment":61734,"board":61735,"bookmark-outline":61736,"bookmark":61737,"calendar-blank":61744,"calendar":61745,"cancel":63490,"certificate":62213,"chart-line":61746,"chart-pie":61747,"check-circle":61748,"check":61749,"chevron-down":61750,"chevron-left":61751,"chevron-right":61752,"chevron-up":61753,"close-circle":61760,"close":61761,"cloud-download":61762,"coaching":61763,"code":61764,"comment":61765,"community":61766,"console":61767,"content":61768,"copy":61769,"cut":61776,"dashboard":61777,"delete":61778,"download":61779,"drag":61780,"dropdown":61781,"ecosystem-corporate":62720,"ecosystem-startups":62721,"ecosystem-student":62722,"email":61785,"evaluation":61792,"faq":61793,"file-audio-box":62985,"file-csv-box":62992,"file-document-box":62976,"file-excel-box":62977,"file-google-spreadsheet":62978,"file-pdf-box":62979,"file-play-box":62980,"file-powerpoint-box":62981,"file-presentation-box":62982,"file-word-box":62983,"file-zip-box":62984,"filter":61809,"folder":61810,"form-checkbox-marked":63232,"form-checklist":63233,"form-radiobox-marked":63234,"form-redo":63235,"form-select":63236,"form-textarea":63237,"form-textbox":63238,"form-undo":63239,"format-align-center":63240,"format-align-justify":63241,"format-align-left":63248,"format-align-right":63249,"format-bold":63250,"format-clear":63251,"format-color-fill":63252,"format-color-text":63253,"format-italic":63254,"format-list-bulleted":63255,"format-list-numbered":63256,"format-quote":63257,"format-size":63264,"format-strikethrough":63265,"format-title":63266,"format-underlined":63267,"fullscreen-exit":62228,"fullscreen":62229,"help-center":61847,"help":61848,"home":61849,"image-plus":61952,"image":61953,"impact-equitable":63488,"impact-native":63489,"impact-none":63490,"impact-not-obvious":63491,"impact-push":63492,"impact-sustainable":63493,"improve-writing":61960,"information":61961,"label":61968,"language":61969,"learning":61970,"link-off":61971,"link":61972,"loading":62242,"location":61973,"lock-open":62216,"lock":61974,"longer-text":61975,"markdown":61976,"medal":61977,"members":61984,"menu":61985,"minus-circle":61986,"minus":61987,"new-tab":61988,"newsfeed":61989,"notifications-active":61990,"notifications-none":61991,"notifications-off":61992,"notifications-paused":61993,"notifications":62000,"number":62037,"objective":62001,"options":62002,"org":62003,"paste":62004,"pause":62005,"pencil-off":62006,"pencil":62007,"phone":62008,"pin":62009,"plan-data":62016,"plan-native":62017,"play-circle":62018,"play":62019,"plus-circle":62020,"plus":62021,"point":62022,"preview":62023,"program":62024,"project":62025,"public-page":62032,"questionnaire":62033,"rating":62034,"shapes":62231,"release":62035,"restore":62036,"role-admin":63744,"role-expert":63745,"role-jury":63746,"role-manager":63747,"role-participant":63748,"role-visitor":63749,"save":62240,"search":62049,"selection":62230,"send-circle":62050,"send":62051,"service-saml":62052,"settings":62053,"share":62054,"shorter-text":62055,"signature":62212,"sort-ascending":62056,"sort-descending":62057,"spellcheck":62064,"star-outline":62065,"star":62066,"status-bordered":62067,"status-dashed":62068,"status-filled":62069,"status-iddle":62070,"status-stop":62071,"status-warning":62072,"summarize":62073,"summary":62080,"tab":62081,"table":62082,"tag":62083,"text":62084,"thumb-down":62085,"thumb-up":62086,"time":62087,"timeline":62088,"tone":62089,"toolbox":62096,"translate-generate":62097,"translate":62098,"unfold-less":62215,"unfold":62099,"upload":62214,"vertical-dei":62100,"vertical-food":62101,"vertical-plastic":62102,"visibility-off":62103,"visibility":62104,"volume-off":62105,"volume-on":62208,"votes":62209,"work":62210,"youtube":62211,"zoom-minus":62232,"zoom-plus":62233,"room":62243,"database":62244,"circle":62245,"seo":62246,"chart-donut":62016,"lightning-bolt":61729,"map-marker":61973,"bullseye-arrow":62001,"gavel":61792,"account-supervisor-circle":61763,"help-circle":63491,"sprout":63489,"bullhorn":63492,"barley":62101,"recycle":62102,"scale-balance":63488,"school":62024,"rocket":62721,"briefcase":62720,"frequently-asked-questions":61793,"format-list-checks":63233,"certificate-outline":62213,"zip-box":62984,"book-open-blank-variant":61768,"book-open-variant":61768,"share-variant":62054,"text-box":62976,"checkbox-marked-circle-outline":63234,"checkbox-multiple-marked-circle-outline":63234,"checkbox-multiple-marked-outline":63232,"thumbs-up-down":62209,"bullseye":62083,"paperclip":61734,"calculator-variant-outline":62037,"eye":62104,"eye-off":62103,"dots-vertical":62002,"cog":62053,"lifebuoy":61847,"account-multiple":61984,"account-group":61766,"view-dashboard":61777,"library":61970,"alert-decagram":62035,"filter-variant":61809,"arrow-top-right":61988,"open-in-new":61988,"clipboard-text":62025,"magnify":62049,"newspaper":61989,"menu-down":61781,"information-outline":61961,"key":62052,"bell":62000,"bell-outline":61991,"comment-outline":61765,"pencil-off-outline":62006,"pencil-outline":62007,"file-pdf-outline":62979,"thumb-up-outline":62086,"comment-quote-outline":62209,"note-text-outline":62976,"timeline-text-outline":62088,"toy-brick-outline":61970,"comment-text":61765,"clipboard-text-outline":62033,"comment-text-multiple-outline":61765,"vote":62034,"shield-star":61729,"cog-outline":62053,"web":62032,"webhook":61764,"draw":62212,"note-outline":62976,"file-document-multiple":61734,"more":62002,"emoticon-outline":62033,"exclamation-thick":61732,"newspaper-variant-outline":61989,"clipboard-account-outline":61984,"volume-high":62208,"video":62980,"file-image-outline":61953,"file-table-outline":62992,"file-word-outline":62983,"file-powerpoint-outline":62981,"archive-outline":62984,"file-outline":61734,"arrow-left-thick":61751,"arrow-right-thick":61752,"alert-outline":61732,"clock-outline":62087,"export":61779,"import":62214,"file-import":62214,"account-supervisor":61763,"text-box-outline":62976,"calendar-outline":61744,"unfold-less-horizontal":62215,"signature-freehand":62212,"package-variant":62096,"square-edit-outline":62007,"form-textbox-password":61974,"at":61972,"lock-open-variant":62216,"content-save":62240,"magnify-minus-outline":62232,"magnify-plus-outline":62233,"hammer-screwdriver":62096,"database-arrow-down-outline":61779,"help-circle-outline":63491,"rectangle-outline":62231,"clipboard-outline":62025,"dots-circle":62068,"file-find":62246,"section":61697,"palette-swatch":61698,"microsoft-outlook":61699,"google":61700,"form-fields":61701,"flag":61702,"attachment-generate":61703,"arrow-up-circle":61704,"arrow-right-circle":61705,"arrow-left-circle":61706,"arrow-down-circle":61707,"apple":61708}');function _createMdxContent(props){const _components={h1:"h1",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Iconography"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"iconography",children:"Iconography"}),"\n",(0,jsx_runtime.jsx)(dist.yt,{children:Object.keys(inject_icons_namespaceObject).map((icon=>(0,jsx_runtime.jsx)(dist.xz,{name:icon,children:(0,jsx_runtime.jsx)(Icon.I,{name:icon})})))})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);