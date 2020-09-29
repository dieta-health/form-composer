"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.FormProgress=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _styledComponents=_interopRequireDefault(require("styled-components"));var _propTypes=_interopRequireDefault(require("prop-types"));var _FormProvider=require("./FormProvider");var _color=_interopRequireDefault(require("color"));var _Questions=_interopRequireDefault(require("./Questions"));var _jsxFileName="/Users/bneigher/Desktop/Dieta/form-composer/src/Form/FormProgress.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var ProgressContainer=_styledComponents.default.div.withConfig({displayName:"ProgressContainer",componentId:"sc-1rrst0b-0"})(["display:flex;flex-direction:row;"]);var IndicatorContainer=_styledComponents.default.div.withConfig({displayName:"IndicatorContainer",componentId:"sc-1rrst0b-1"})(["padding:5px ",";&:first-child{padding:5px "," 0 0;}&:last-child{padding:5px 0 5px ",";}&:only-child{padding:5px 0;}flex-grow:1;"],function(props){return props.count?Math.ceil(20/props.count)+"px":"10px";},function(props){return props.count?Math.ceil(10/props.count)+"px":"10px";},function(props){return props.count?Math.ceil(10/props.count)+"px":"10px";});var ProgressIndicator=_styledComponents.default.div.withConfig({displayName:"ProgressIndicator",componentId:"sc-1rrst0b-2"})(["border-radius:20px;padding:5px;&:hover{cursor:pointer;}&.active{background-color:",";}&:not(.active){background-color:",";}&[disabled]{background-color:",";}&[disabled]:hover{cursor:not-allowed;}"],function(props){return props.completedColor?completedColor:props.theme.colors.PRIMARY_LIGHT;},function(props){return props.completedColor?(0,_color.default)(completedColor).lighten(0.2).rgb().round().string():(0,_color.default)(props.theme.colors.PRIMARY_LIGHT).lighten(0.2).rgb().round().string();},function(props){return props.theme.colors.MID;});var ProgressIndicatorGroups=function(_Component){(0,_inherits2.default)(ProgressIndicatorGroups,_Component);var _super=_createSuper(ProgressIndicatorGroups);function ProgressIndicatorGroups(){var _this;(0,_classCallCheck2.default)(this,ProgressIndicatorGroups);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{states:_this.props.states});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"pressIndicator",function(step){_this.setState({active:true});if(_this.props.onStateClick){_this.props.onStateClick(step);}});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"generateHeritageGroups",function(stateMap){var states=stateMap.split("-");return states.reduce(function(acc,node){if(!acc.length){acc.push(node);}else{var last=acc[acc.length-1];acc.push(last+"-"+node);}return acc;},[]);});return _this;}(0,_createClass2.default)(ProgressIndicatorGroups,[{key:"render",value:function render(){var _this2=this;return _react.default.createElement(_FormProvider.FormConsumer,{__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:7}},function(context){var activeStateDepth=context.activeState.split("-").length;return _react.default.createElement(ProgressContainer,{__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:13}},_this2.props.states.map(function(state,index){var thisStateDepth=state.step.split("-").length;var active=context.activeState===state.step;var complete=state.complete||active&&context.checkStateComplete(state.answer);var generationNodes=_this2.generateHeritageGroups(context.activeState);var currentGenerationNodes=_this2.generateHeritageGroups(state.step);var isDirectAncestor=generationNodes.includes(state.step);var sharedAncestor=generationNodes.filter(function(x){return currentGenerationNodes.includes(x);});var ComponentStatics=context.activeStateContent.component?_Questions.default[context.activeStateContent.component.element]:null;var componentType=ComponentStatics?ComponentStatics.type:"question";var isCousin=!!sharedAncestor.length;var isCheckpoint=componentType==="content";if(_this2.props.depth>0){if(isDirectAncestor||isCousin){if(activeStateDepth>=thisStateDepth){return _react.default.createElement(IndicatorContainer,{count:_this2.props.states.length,key:index,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:27}},_react.default.createElement(ProgressIndicator,{question:state.question,complete:complete,active:active,onClick:function onClick(){return(complete||active)&&_this2.pressIndicator(state.step);},disabled:!complete&&!active&&!isDirectAncestor,className:active?"active":"",__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:29}}));}else{return _react.default.createElement(IndicatorContainer,{count:_this2.props.states.length,key:index,__source:{fileName:_jsxFileName,lineNumber:161,columnNumber:27}},_react.default.createElement("div",{style:{height:"10px"},__source:{fileName:_jsxFileName,lineNumber:165,columnNumber:29}},"\xA0"));}}else{if(activeStateDepth===1&&thisStateDepth>1){return _react.default.createElement(IndicatorContainer,{count:_this2.props.states.length,key:index,__source:{fileName:_jsxFileName,lineNumber:172,columnNumber:27}},_react.default.createElement("div",{style:{height:"10px"},__source:{fileName:_jsxFileName,lineNumber:176,columnNumber:29}},"\xA0"));}if(thisStateDepth>activeStateDepth){return _react.default.createElement(IndicatorContainer,{count:_this2.props.states.length,key:index,__source:{fileName:_jsxFileName,lineNumber:182,columnNumber:27}},_react.default.createElement("div",{style:{height:"10px"},__source:{fileName:_jsxFileName,lineNumber:186,columnNumber:29}},"\xA0"));}}}else{return _react.default.createElement(IndicatorContainer,{count:_this2.props.states.length,key:index,__source:{fileName:_jsxFileName,lineNumber:193,columnNumber:23}},_react.default.createElement(ProgressIndicator,{question:state.question,complete:complete,active:active||isDirectAncestor,onClick:function onClick(){return(complete||active)&&_this2.pressIndicator(state.step);},disabled:!complete&&!active&&!isDirectAncestor,className:active?"active":"",__source:{fileName:_jsxFileName,lineNumber:197,columnNumber:25}}));}}).filter(function(i){return i;}));});}}]);return ProgressIndicatorGroups;}(_react.Component);(0,_defineProperty2.default)(ProgressIndicatorGroups,"propTypes",{states:_propTypes.default.array.isRequired});(0,_defineProperty2.default)(ProgressIndicatorGroups,"defaultProps",{states:[]});var FormProgress=function(_Component2){(0,_inherits2.default)(FormProgress,_Component2);var _super2=_createSuper(FormProgress);function FormProgress(){(0,_classCallCheck2.default)(this,FormProgress);return _super2.apply(this,arguments);}(0,_createClass2.default)(FormProgress,[{key:"render",value:function render(){return _react.default.createElement("div",{style:{margin:"10px"},__source:{fileName:_jsxFileName,lineNumber:234,columnNumber:7}},_react.default.createElement(_FormProvider.FormConsumer,{__source:{fileName:_jsxFileName,lineNumber:239,columnNumber:9}},function(context){return context.depths.map(function(state,index){return _react.default.createElement(ProgressIndicatorGroups,{key:index,onStateClick:context.goToState,depth:index,states:state,__source:{fileName:_jsxFileName,lineNumber:242,columnNumber:15}});});}));}}]);return FormProgress;}(_react.Component);exports.FormProgress=FormProgress;(0,_defineProperty2.default)(FormProgress,"propTypes",{completedColor:_propTypes.default.string.isRequired});(0,_defineProperty2.default)(FormProgress,"defaultProps",{completedColor:"PRIMARY_LIGHT"});