"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[737],{"./src/stories/components/Tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),tooltips=__webpack_require__("./public/utils/tooltips.js");const Tooltip=()=>((0,react.useEffect)((()=>{(0,tooltips.v)()}),[]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-secondary","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top",children:"Tooltip on top"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-secondary","data-toggle":"tooltip","data-placement":"right",title:"Tooltip on right",children:"Tooltip on right"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-secondary","data-toggle":"tooltip","data-placement":"bottom",title:"Tooltip on bottom",children:"Tooltip on bottom"}),(0,jsx_runtime.jsx)("button",{type:"button",className:"btn btn-secondary","data-toggle":"tooltip","data-placement":"left",title:"Tooltip on left",children:"Tooltip on left"})]}));Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const Tooltip_stories={title:"Components/Tooltip",component:Tooltip,parameters:{layout:"centered"},tags:["autodocs"]},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./public/utils/tooltips.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>tooltips});const tooltips=()=>{$((function(){$('[data-toggle="tooltip"]').tooltip({trigger:"hover focus"});var tooltips=$('[data-toggle="tooltip"]');function disableTooltipInMobile(){tooltips.tooltip("enable"),window.matchMedia("(max-width: 991.98px)").matches&&tooltips.tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded a").tooltip("disable"),$(".application-shortcutbar.shortcutbar-expanded div").tooltip("disable")}tooltips.tooltip(),disableTooltipInMobile(),$(window).resize((function(){disableTooltipInMobile()}))}))}}}]);