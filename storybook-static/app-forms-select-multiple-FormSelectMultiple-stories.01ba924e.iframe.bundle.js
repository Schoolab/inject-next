"use strict";(self.webpackChunk_schoolab_inject_next=self.webpackChunk_schoolab_inject_next||[]).push([[2855],{"./src/app/forms/select-multiple/FormSelectMultiple.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Select",component:__webpack_require__("./src/app/forms/select-multiple/FormSelectMultiple.tsx").p,parameters:{layout:"centered",docs:{controls:{sort:"requiredFirst"}}},args:{options:[{label:"Choose an option...",value:"",disabled:!0},{label:"SaaS",value:"saas",selected:!0},{label:"Project",value:"projects"},{label:"Management",value:"management"},{label:"Design",value:"design"},{label:"UX design",value:"ux-design"},{label:"Figma",value:"figma"},{label:"Product",value:"product"}]}},Multiple={},__namedExportsOrder=["Multiple"];Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:"{}",...Multiple.parameters?.docs?.source}}}},"./public/utils/select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>select});const select=()=>{$((function(){$(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({width:"100%",noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.table-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-transparent",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.card-filter").selectpicker({width:"fit",noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-link card-filter",iconBase:"icon",showTick:!0,tickIcon:"icon-check"}),$("select.dropdown-card").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn",style:"btn-card",iconBase:"icon",showTick:!1}),$("select.select-with-search").selectpicker({width:!1,noneSelectedText:"Nothing selected",styleBase:"btn btn-lg",style:"btn-default",iconBase:"icon",showTick:!0,tickIcon:"icon-check",noneResultsText:"No results for “{0}”…",liveSearch:!0,liveSearchPlaceholder:"Search…",liveSearchNormalize:!0,virtualScroll:"400"}),$("select.custom-select-tags").selectize({delimiter:",",persist:!1,maxItems:null,valueField:"id",labelField:"name",searchField:"name",create:!0,plugins:["remove_button","clear_button"],render:{item:function(item,escape){return'<div class="badge badge-pill"><span>'+escape(item.name)+"</span></div>"}},create:function(input){return{value:input,text:input}}})}))}},"./src/app/forms/select-multiple/FormSelectMultiple.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>FormSelectMultiple});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_public_utils_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./public/utils/select.js");const FormSelectMultiple=({id,defaultValue,disabled,required,options=[{label:"Choose an option...",value:"",disabled:!0,selected:!0}]})=>{(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{(0,_public_utils_select__WEBPACK_IMPORTED_MODULE_2__.L)()}),[]);let listOptions=null==options?void 0:options.map(((option,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option.value,disabled:option.disabled,selected:option.selected,children:option.label},index)));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{defaultValue,id,disabled,required,"aria-required":required?"true":"false","aria-describedby":"hint-"+id,multiple:!0,className:"form-control custom-select-tags",children:listOptions})};FormSelectMultiple.__docgenInfo={description:"",methods:[],displayName:"FormSelectMultiple",props:{id:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n    label: string;\n    value?: string;\n    disabled?: boolean;\n    selected?: boolean;\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"OptionType[]"},description:"",defaultValue:{value:'[\n    { label: "Choose an option...", value: "", disabled: true, selected: true },\n]',computed:!1}}}}}}]);