"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[9971],{"./src/stories/components/Forms/FormOption.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Caption:()=>Caption,Card:()=>Card,Checked:()=>Checked,Default:()=>Default,Disabled:()=>Disabled,Icon:()=>Icon,Radio:()=>Radio,Switch:()=>Switch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Form/Option",component:__webpack_require__("./src/app/components/forms/FormOption.tsx")._,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},card:{control:"boolean"}},args:{type:"checkbox",label:"Category",disabled:!1,card:!1}},Default={args:{}},Radio={args:{type:"radio"}},Switch={args:{type:"switch"}},Checked={args:{checked:!0}},Disabled={args:{disabled:!0}},Caption={args:{caption:"This user can manage categories of this organization’s programs"}},Card={args:{card:!0,caption:"This user can manage categories of this organization’s programs"}},Icon={args:{card:!0,caption:"This user can manage categories of this organization’s programs",icon:"tag"}},__namedExportsOrder=["Default","Radio","Switch","Checked","Disabled","Caption","Card","Icon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},Radio.parameters={...Radio.parameters,docs:{...Radio.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "radio"\n  }\n}',...Radio.parameters?.docs?.source}}},Switch.parameters={...Switch.parameters,docs:{...Switch.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "switch"\n  }\n}',...Switch.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"{\n  args: {\n    checked: true\n  }\n}",...Checked.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Caption.parameters={...Caption.parameters,docs:{...Caption.parameters?.docs,source:{originalSource:'{\n  args: {\n    caption: "This user can manage categories of this organization’s programs"\n  }\n}',...Caption.parameters?.docs?.source}}},Card.parameters={...Card.parameters,docs:{...Card.parameters?.docs,source:{originalSource:'{\n  args: {\n    card: true,\n    caption: "This user can manage categories of this organization’s programs"\n  }\n}',...Card.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  args: {\n    card: true,\n    caption: "This user can manage categories of this organization’s programs",\n    icon: "tag"\n  }\n}',...Icon.parameters?.docs?.source}}}},"./src/app/components/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Icon=({name,size="default",addClass,...props})=>{let classTab=["icon"];return"default"!==size&&classTab.push(`is-${size}`),name&&classTab.push(`icon-${name}`),addClass&&classTab.push(addClass),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:classTab.join(" "),...props})};Icon.__docgenInfo={description:"Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"Icon name"},size:{required:!1,tsType:{name:"union",raw:'"default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"2xs"'},{name:"literal",value:'"xs"'},{name:"literal",value:'"2sm"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"2xl"'}]},description:"How large should the icon be?",defaultValue:{value:'"default"',computed:!1}},addClass:{required:!1,tsType:{name:"string"},description:"Custom class"}}}},"./src/app/components/forms/FormOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>FormOption});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/app/components/Icon.tsx"));const FormOption=({type,id,name="option",label,caption,icon,value,checked,defaultChecked,disabled,card,addClass,...props})=>{let classTab=["custom-control"];return addClass&&classTab.push(addClass),"checkbox"===type&&classTab.push("custom-checkbox"),"radio"===type&&classTab.push("custom-radio"),"switch"===type&&classTab.push("custom-switch"),card&&classTab.push("custom-control-card"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:classTab.join(" "),...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"radio"!==type?"checkbox":"radio",id:"option-"+id,name,className:"custom-control-input",defaultValue:value,defaultChecked,disabled,checked}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"custom-control-label text-nowrap d-flex flex-column gap-xs",htmlFor:"option-"+id,"aria-describedby":"caption-"+id,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_2__.I,{name:icon,size:"sm"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:label})]}),caption&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small",{id:"caption-"+id,className:"form-text text-muted",children:caption})]})};FormOption.__docgenInfo={description:"",methods:[],displayName:"FormOption",props:{type:{required:!0,tsType:{name:"union",raw:'"checkbox" | "radio" | "switch"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'},{name:"literal",value:'"switch"'}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"option"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},card:{required:!1,tsType:{name:"boolean"},description:""},addClass:{required:!1,tsType:{name:"string"},description:""}}}}}]);