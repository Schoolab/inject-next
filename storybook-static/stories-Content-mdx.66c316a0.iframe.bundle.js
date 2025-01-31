(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3916],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Content.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_terenceirving_dev_inject_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_components_Cards_CardProgram_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/Cards/CardProgram.stories.ts"),_components_Cards_CardProject_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Cards/CardProject.stories.ts");__webpack_require__("./src/app/components/cards/CardParticipant.tsx"),__webpack_require__("./src/app/components/cards/CardProgram.tsx"),__webpack_require__("./public/styles/styles.css");function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,_Users_terenceirving_dev_inject_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"content",children:"Content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This page aims to list how to write in the application as well as list the example data used on the mockups."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mock-data",children:"Mock data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"programs",children:"Programs"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.gG,{of:_components_Cards_CardProgram_stories__WEBPACK_IMPORTED_MODULE_2__.InProgress}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"projects",children:"Projects"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Healthify"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_8__.gG,{of:_components_Cards_CardProject_stories__WEBPACK_IMPORTED_MODULE_3__.Tags}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"users",children:"Users"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"admins",children:"Admins"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Pierre Lemeteil (Head of Digital, Schoolab) (Bordeaux, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Julien Fayet (CEO, SL Group) (Paris, FR)"}),"\n"]}),"\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"managers",children:"Managers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Marine Martinez (Program Manager, Schoolab) (Paris, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Pierre Forestier (Program Manager, Schoolab) (Paris, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Sarah Lamoureux (Community Builder, Schoolab) (Paris, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Emma Salvarelli (Customer Success Manager, Schoolab) (Paris, FR)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"expertscoaches",children:"Experts/Coaches"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Julien Mulac (Lead developer, Schoolab) (Caen, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Guillaume Yvon (Developer, Schoolab) (Caen, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Robin Tamine (Developer, Schoolab) (Caen, FR)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"jury-members",children:"Jury members"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Terence Irving (Product designer, Schoolab) (Réunion, FR)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Sasha Lehmann (Marketing, Schoolab) (Paris, FR)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"participants",children:"Participants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Alexandra Jolly (Product designer, Schoolab) (Paris, FR)"}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_terenceirving_dev_inject_next_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_7__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}},"./src/app/components/avatars/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const Avatar=({addClass,size="lg",isOval=!0,isBordered=!1,iconName="account",image,...props})=>{let classTab=["thumbnail"];return size&&classTab.push(`is-${size}`),isOval&&classTab.push("is-oval"),isBordered&&classTab.push("is-bordered"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[iconName&&!image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:image})]})};Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},isOval:{required:!1,tsType:{name:"Boolean"},description:"Make the avatar round",defaultValue:{value:"true",computed:!1}},isBordered:{required:!1,tsType:{name:"Boolean"},description:"Add a thin border on the outside of the avatar (useful when superposed)",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"Sizes",defaultValue:{value:'"lg"',computed:!1}},iconName:{required:!1,tsType:{name:"string"},description:"IconName",defaultValue:{value:'"account"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"Image URL"}}}},"./src/app/components/badges/notifs/Notif.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Notif});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Notif=({addClass,status,label})=>{let classTab=["badge badge-notification"];return status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})})};Notif.__docgenInfo={description:"",methods:[],displayName:"Notif",props:{label:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"contents"},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"interactive" | "accent" | "highlight"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"highlight"'}]},description:"Status"}}}},"./src/app/components/badges/roles/Role.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Role});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/tooltips.js");const Role=({addClass,status})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_tooltips__WEBPACK_IMPORTED_MODULE_2__.v)()}),[]);let classTab=["badge badge-role"];status&&classTab.push(`is-${status}`),addClass&&classTab.push(addClass);let statusFirstCapitalize=status.charAt(0).toUpperCase()+status.slice(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),"data-toggle":"tooltip","data-placement":"top","data-original-title":statusFirstCapitalize,"data-boundary":"window"})};Role.__docgenInfo={description:"",methods:[],displayName:"Role",props:{addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},status:{required:!0,tsType:{name:"union",raw:'"admin" | "manager" | "expert" | "jury" | "participant" | "visitor"',elements:[{name:"literal",value:'"admin"'},{name:"literal",value:'"manager"'},{name:"literal",value:'"expert"'},{name:"literal",value:'"jury"'},{name:"literal",value:'"participant"'},{name:"literal",value:'"visitor"'}]},description:"Status"}}}},"./src/app/components/dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Dropdown=({children,addClass,style,...props})=>{let classTab=["dropdown"];return addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style,...props,children})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./src/app/components/dropdown/DropdownItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>DropdownItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx")),_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/badges/notifs/Notif.tsx");const DropdownItem=({children,type,addClass,outbound,active,label,iconName,caption,toggle,href="#",target,rel,badge,...props})=>{let classTab=["dropdown-item"];return type&&classTab.push(`is-${type}`),active&&classTab.push("active"),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:classTab.join(" "),href,target,...props,children:[void 0!==active&&(active?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"check",addClass:"dropdown-item--icon"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"",addClass:"dropdown-item--icon"})),children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconName&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:iconName,addClass:"dropdown-item--icon"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dropdown-item--label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"d-flex",children:[label," ",badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_badges_notifs_Notif__WEBPACK_IMPORTED_MODULE_3__.X,{label:badge,status:"highlight",addClass:"ml-auto"})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"caption",children:caption})]}),outbound&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"arrow-top-right",addClass:"dropdown-item--shortcut"})]}),toggle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:"chevron-right",addClass:"dropdown-item--toggle"})]})};DropdownItem.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"interactive" | "danger" | "ai"',elements:[{name:"literal",value:'"interactive"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"ai"'}]},description:""},iconName:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},toggle:{required:!1,tsType:{name:"boolean"},description:""},outbound:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#"',computed:!1}},target:{required:!1,tsType:{name:"string"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},badge:{required:!1,tsType:{name:"string"},description:""}}}},"./src/app/components/dropdown/DropdownMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>DropdownMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const DropdownMenu=({direction,addClass,children,show,style,...props})=>{let classTab=["dropdown-menu"];return direction&&classTab.push(`dropdown-menu-${direction}`),addClass&&classTab.push(addClass),show&&classTab.push("show"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:classTab.join(" "),style:{...style},...props,children})};DropdownMenu.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"Direction"},show:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);