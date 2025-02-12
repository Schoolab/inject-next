"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[3092],{"./src/stories/forms/FormRating.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultValue:()=>DefaultValue,FormControl:()=>FormControl,Highlight:()=>Highlight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormRating_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const FormRating=({id,defaultValue=0,inputMode="decimal",addClass,style,...props})=>{const[rating,setRating]=(0,react.useState)(defaultValue);let classTab=["form-options rating"];addClass&&classTab.push(addClass);const handleRatingChange=value=>{setRating(value)};return(0,jsx_runtime.jsx)("div",{className:classTab.join(" "),inputMode,style,...props,children:(0,jsx_runtime.jsxs)("div",{className:"rating-well",children:[(0,jsx_runtime.jsx)("input",{type:"number",id,name:"rating",className:"rating form-control",inputMode,value:rating,"aria-describedby":"hint-"+id,readOnly:!0}),(0,jsx_runtime.jsx)("div",{id:"rating_star_5",className:rating>=5?"star-full":"star","data-value":5,onClick:()=>handleRatingChange(5)}),(0,jsx_runtime.jsx)("div",{id:"rating_star_4",className:rating>=4?"star-full":"star","data-value":4,onClick:()=>handleRatingChange(4)}),(0,jsx_runtime.jsx)("div",{id:"rating_star_3",className:rating>=3?"star-full":"star","data-value":3,onClick:()=>handleRatingChange(3)}),(0,jsx_runtime.jsx)("div",{id:"rating_star_2",className:rating>=2?"star-full":"star","data-value":2,onClick:()=>handleRatingChange(2)}),(0,jsx_runtime.jsx)("div",{id:"rating_star_1",className:rating>=1?"star-full":"star","data-value":1,onClick:()=>handleRatingChange(1)})]})})};FormRating.__docgenInfo={description:"",methods:[],displayName:"FormRating",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},inputMode:{required:!1,tsType:{name:"literal",value:'"decimal"'},description:"",defaultValue:{value:'"decimal"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const FormRating_stories={title:"Forms/Rating",component:FormRating,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{defaultValue:{control:"number"}},args:{defaultValue:0}},Default={},DefaultValue={args:{defaultValue:3}},FormControl={args:{addClass:"form-control d-flex align-items-center"}},Highlight={args:{addClass:"bg-highlight rounded px-md py-sm d-flex align-items-center"}},__namedExportsOrder=["Default","DefaultValue","FormControl","Highlight"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultValue: 3\n  }\n}",...DefaultValue.parameters?.docs?.source}}},FormControl.parameters={...FormControl.parameters,docs:{...FormControl.parameters?.docs,source:{originalSource:'{\n  args: {\n    addClass: "form-control d-flex align-items-center"\n  }\n}',...FormControl.parameters?.docs?.source}}},Highlight.parameters={...Highlight.parameters,docs:{...Highlight.parameters?.docs,source:{originalSource:'{\n  args: {\n    addClass: "bg-highlight rounded px-md py-sm d-flex align-items-center"\n  }\n}',...Highlight.parameters?.docs?.source}}}}}]);