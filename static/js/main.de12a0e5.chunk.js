(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"betForm_form__1LVSQ",balanse:"betForm_balanse__2F6eU"}},21:function(e,t,n){e.exports=n.p+"static/media/crosshair.0535dddb.svg"},25:function(e,t,n){e.exports=n(37)},3:function(e,t,n){e.exports={result:"result_result__-1Vx9",alert:"result_alert__33kJu",alertSuccess:"result_alertSuccess__BhAtH",alertDanger:"result_alertDanger__1yO7q",spinner:"result_spinner__1cgz8",alertWrap:"result_alertWrap__l2Crj"}},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),l=n.n(s),c=n(7),o=n(8),i=n(14),m=n(15),u=n(23),p=n(24),b=n(10),d=n.n(b);function f(e){return{type:"CHANGE_BALANSE",payload:e}}var E=n(16),v=n(3),h=n.n(v),_=n(17),g=function(e){var t=e.results,n=e.removeResult;return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.alert},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"\u0443\u0441\u043f\u0435\u0445"==e.result?h.a.alertSuccess:h.a.alertDanger},r.a.createElement("div",null,e.result,"\xa0 ",e.koef.toFixed(1),r.a.createElement("button",{className:"close",type:"button",onClick:function(){return n(e.id)}},r.a.createElement("span",null,"\xd7"))))}))))};function N(){var e=Object(E.a)(["\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  top: 30px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n\n  .item {\n    width: 60px;\n    height: 60px;\n    position: absolute;\n\n    &.item-1 {\n      background-color: #fa5667;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      animation: item-1_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;\n    }\n\n    &.item-2 {\n      background-color: #7a45e5;\n      top: 0;\n      right: 0;\n      animation: item-2_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;\n    }\n\n    &.item-3 {\n      background-color: #1b91f7;\n      bottom: 0;\n      right: 0;\n      z-index: 1;\n      animation: item-3_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;\n    }\n\n    &.item-4 {\n      background-color: #fac24c;\n      bottom: 0;\n      left: 0;\n      animation: item-4_move 1.8s cubic-bezier(0.6, 0.01, 0.4, 1) infinite;\n    }\n    @keyframes item-1_move {\n      0%,\n      100% {\n        transform: translate(0, 0);\n      }\n      25% {\n        transform: translate(0, 100px);\n      }\n      50% {\n        transform: translate(100px, 100px);\n      }\n      75% {\n        transform: translate(100px, 0);\n      }\n    }\n\n    @keyframes item-2_move {\n      0%,\n      100% {\n        transform: translate(0, 0);\n      }\n      25% {\n        transform: translate(-100px, 0);\n      }\n      50% {\n        transform: translate(-100px, 100px);\n      }\n      75% {\n        transform: translate(0, 100px);\n      }\n    }\n\n    @keyframes item-3_move {\n      0%,\n      100% {\n        transform: translate(0, 0);\n      }\n      25% {\n        transform: translate(0, -100px);\n      }\n      50% {\n        transform: translate(-100px, -100px);\n      }\n      75% {\n        transform: translate(-100px, 0);\n      }\n    }\n\n    @keyframes item-4_move {\n      0%,\n      100% {\n        transform: translate(0, 0);\n      }\n      25% {\n        transform: translate(100px, 0);\n      }\n      50% {\n        transform: translate(100px, -100px);\n      }\n      75% {\n        transform: translate(0, -100px);\n      }\n    }\n  }\n"]);return N=function(){return e},e}var y=_.a.div(N()),x=function(e){var t=e.bet,n=e.randomNumber,a=e.results,s=e.setResults,l=e.isGenerate,c=e.removeResult;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-4"},r.a.createElement(g,{results:a,bet:t,setResults:s,randomNumber:n,removeResult:c})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:h.a.alertWrap},l?r.a.createElement(y,null,r.a.createElement("div",{className:"item item-1"}),r.a.createElement("div",{className:"item item-2"}),r.a.createElement("div",{className:"item item-3"}),r.a.createElement("div",{className:"item item-4"})):r.a.createElement("div",{className:h.a.result},"\u0412\u0430\u0448 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442: \xa0 ",n))))},O=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={bet:"",randomNumber:"",results:[]},e.randomGenerate=function(t){t.target;var n,a=function(e,t){var n=e+Math.random()*(t-e);return Math.floor(10*n)/10};e.setState((function(e){return{results:[].concat(Object(o.a)(e.results),[n]),randomNumber:a(1,10)}}),(function(){var t,a;e.props.setBetValue(e.state.bet),t=e.state.bet,a=e.state.randomNumber,n=0!==t&&t>=a?{result:"\u0443\u0441\u043f\u0435\u0445",bet:t,randomNumber:a,koef:t*a,id:Date.now().toString()}:0!==t&&t<a&&{result:"\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448",bet:t,randomNumber:a,koef:t*a,id:Date.now().toString()},e.props.setResults(n)})),e.props.setBetValue(0)},e.onBetChange=function(t){t.target.value<=10&&t.target.value>0?e.setState({bet:t.target.value}):t.target.value=""},e.alertLose=function(){e.props.endGame(),alert("\u0432\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438!")},e}return Object(m.a)(n,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement("div",{className:"row bg-secondary"},r.a.createElement(x,{removeResult:this.props.removeResult,isGenerate:this.props.isGenerate,randomNumber:this.state.randomNumber,bet:this.props.bet,results:this.props.results,setResults:this.props.setResults,changeBalanse:this.props.changeBalanse}),r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement("div",{className:d.a.form},r.a.createElement("div",{className:d.a.balanse},"\u0412\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441: \xa0 ",r.a.createElement("span",null,this.props.balanse<=0?"0 \u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438":this.props.balanse+" $")),r.a.createElement("input",{className:"form-control",placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0442\u0430\u0432\u043a\u0430",onChange:this.onBetChange,type:"number"}),r.a.createElement("button",{disabled:!!(this.props.isGenerate||this.props.balanse<=0),className:"btn btn-success",onClick:this.randomGenerate,type:"button"},"Start")),r.a.createElement("div",{class:"card text-center"},r.a.createElement("div",{class:"card-header bg-success"}," ",r.a.createElement("strong",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430")," "),r.a.createElement("div",{class:"card-body bg-info"},r.a.createElement("p",{class:"card-text text-white"},"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443 \u0441\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0442\u0430\u0432\u043a\u0443 \u043e\u0442 1 \u0434\u043e 10, \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 start. \u0412\u044b\u0439\u0433\u0440\u044b\u0448 \u043d\u0430\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043b\u043e (\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0430 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442) \u0431\u044b\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e(\u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442). \u0422\u043e\u0433\u0434\u0430, \u0441\u0443\u043c\u043c\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0430 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0430\u0432\u043a\u0438, \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 (\u0447\u0438\u0441\u043b\u043e). \u0415\u0441\u043b\u0438 \u0441\u0442\u0430\u0432\u043a\u0430 \u043e\u043a\u0430\u0437\u0430\u043b\u0430\u0441\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0433\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430, \u0442\u043e \u0432\u044b \u0442\u0435\u0440\u044f\u0435\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0443\u043c\u043c\u0443."))))))}}]),n}(r.a.Component),S={setBetValue:function(e){return function(t){t({type:"SHOW_LOADER"}),setTimeout((function(){t({type:"SET_BET_VALUE",payload:e}),t({type:"HIDE_LOADER"})}),1500)}},setResults:function(e){return function(t){t({type:"SHOW_LOADER"}),setTimeout((function(){t({type:"SET_RESULTS",payload:e}),t(f("\u0443\u0441\u043f\u0435\u0445"===e.result?e.koef:-e.koef)),t({type:"HIDE_LOADER"})}),1e3)}},removeResult:function(e){return{type:"REMOVE_RESULT",payload:e}},changeBalanse:f,endGame:function(){return{type:"END_GAME"}}},R=Object(c.b)((function(e){return{bet:e.bet.betValue,balanse:e.bet.balanse.toFixed(1),results:e.bet.results,isGenerate:e.app.isGenerate}}),S)(O),j=n(21),k=n.n(j),A=function(){return r.a.createElement("div",{className:"row bg-danger"},r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"nav nav-pills justify-content-between"},r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("img",{width:"30",height:"30",src:k.a,alt:""}))),r.a.createElement("li",{className:"nav-item nav-link"},r.a.createElement("button",{className:"btn btn-success",type:"button"},"\u0412\u043e\u0439\u0442\u0438")))))},G=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(R,null)))},D=n(2),L=n(1),w={betValue:"",balanse:10,results:[]},B={isGenerate:!1},T=Object(D.c)({bet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case"SET_BET_VALUE":return Object(L.a)({},e,{betValue:t.payload});case"CHANGE_BALANSE":return Object(L.a)({},e,{balanse:e.balanse+t.payload});case"END_GAME":return Object(L.a)({},e,{balanse:0});case"SET_RESULTS":return Object(L.a)({},e,{results:[].concat(Object(o.a)(e.results),[t.payload])});case"REMOVE_RESULT":return Object(L.a)({},e,{results:e.results.filter((function(e){return e.id!==t.payload}))});case"SET_IS_GENERATE":return Object(L.a)({},e,{isGenerate:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return Object(L.a)({},e,{isGenerate:!0});case"HIDE_LOADER":return Object(L.a)({},e,{isGenerate:!1});default:return e}}}),V=n(22),C=Object(D.e)(T,Object(D.d)(Object(D.a)(V.a)));l.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(G,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.de12a0e5.chunk.js.map