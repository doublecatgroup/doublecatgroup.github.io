webpackJsonp([1],{"7vDR":function(e,t){},"9nz+":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),t("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:"/static/logo.png",height:"200",width:"200"}})])}]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("7vDR")},null,null).exports,a=n("/ocq"),u=n("mw3O"),s=n.n(u),l=n("Gu7T"),c=n.n(l),m=n("woOf"),p=n.n(m),d=n("fZjL"),v=n.n(d),f=n("ivXw");function h(e){return f.path(e,this.$route.query)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_.call(this,f.assocPath(e,t),n)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_.call(this,f.dissocPath(e),t)}function _(e,t){var n=e(this.$route.query);(t?this.$router.replace:this.$router.push).call(this.$router,{query:n})}var w={beforeCreate:function(){var e={qget:h,qset:g,qdel:y};this.$options.methods=f.merge(this.$options.methods||{},e)}},b=n("Dd8w"),x=n.n(b),k=n("aFK5"),N=n.n(k),$=function(){function e(e){this.fixation={key:"track",price:15,mounting:"ceiling"},this.width=240,this.drop=230,this.fabric={key:"custom",design:"custom",price:26},this.heading="deepPleat",this.ratio=2,this.name=e}return Object.defineProperty(e.prototype,"materialUsage",{get:function(){return this.width*this.ratio/100},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fixationTotal",{get:function(){return this.width/100*this.fixation.price},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"total",{get:function(){return this.materialUsage*this.fabric.price+this.fixationTotal},enumerable:!0,configurable:!0}),e}(),P={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:e.original&&e.input!=e.original?"modified":"",domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})},staticRenderFns:[]};var I=n("VU/8")({props:["value","original"],computed:{input:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},P,!1,function(e){n("RXa9")},null,null).exports,T=n("ivXw"),U={none:{name:"None",price:0},track:{name:"Track",price:15},rod:{name:"Rod",price:26}},R={ceiling:"Ceiling",wall:"Wall"},F={components:{ShowModificationsInput:I},props:["value"],data:function(){return{fixations:U,mountings:R}},computed:{key:{get:function(){return this.value.key},set:function(e){this.$emit("input",T.merge(this.value,{key:e,price:this.fixations[e].price}))}},price:{get:function(){return this.value.price},set:function(e){this.$emit("input",T.assoc("price",e,this.value))}},mounting:{get:function(){return this.value.mounting},set:function(e){this.$emit("input",T.assoc("mounting",e,this.value))}}}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.key=t.target.multiple?n:n[0]}}},e._l(e.fixations,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.name))])})),e._v(" "),n("show-modifications-input",{attrs:{placeholder:"price",type:"number",step:"any",original:e.fixations[e.value.key].price},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mounting,expression:"mounting"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.mounting=t.target.multiple?n:n[0]}}},e._l(e.mountings,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t))])}))],1)},staticRenderFns:[]},A=n("VU/8")(F,D,!1,null,null,null).exports,V=n("ivXw"),q=n("0XFg").sprintf;function K(e,t){return{key:e,name:t.name,price:t.price,designs:V.mapObjIndexed(function(e,n,i){var r=V.merge({key:n},e);return{name:q(t.designNameTemplate,r),value:{design:n,no:q(t.designNoTemplate,r),color:e.color}}},t.designs)}}var O=V.mapObjIndexed(function(e,t,n){return K(t,e)},{custom:{name:"-",designNameTemplate:"-",designNoTemplate:"",designs:{custom:{price:26}}},bolove:{name:"BoLove",price:26,designNameTemplate:"P%(key)s",designNoTemplate:"TH305-%(key)02d",designs:{18:{color:"blue"},19:{color:"grey"},21:{color:"red"},22:{color:"purple"}}},chenille:{name:"Chenille",price:30,designNameTemplate:"%(key)s",designNoTemplate:"018-%(key)s",designs:{12:{color:"brown"},19:{color:"red"},23:{color:"green"}}}}),j={mkFabric:K,components:{ShowModificationsInput:I},props:["value"],data:function(){return{fabrics:O}},computed:{fabricKey:{get:function(){return this.value.key},set:function(e){var t=this.fabrics[e],n=V.keys(t.designs)[0],i=t.designs[n];this.$emit("input",V.merge(i.value,{key:e,price:t.price}))}},designKey:{get:function(){return this.value.design},set:function(e){var t=this.designs[e];this.$emit("input",V.merge(this.value,t.value))}},color:{get:function(){return this.value.color},set:function(e){this.$emit("input",V.assoc("color",e,this.value))}},no:{get:function(){return this.value.no},set:function(e){this.$emit("input",V.assoc("no",e,this.value))}},price:{get:function(){return this.value.price},set:function(e){this.$emit("input",V.assoc("price",e,this.value))}},fabric:function(){return this.fabrics[this.value.key]},designs:function(){return this.fabric.designs},design:function(){return this.designs[this.value.design]}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.fabricKey,expression:"fabricKey"}],attrs:{name:"fabric"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.fabricKey=t.target.multiple?n:n[0]}}},e._l(e.fabrics,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t.name))])})),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.designKey,expression:"designKey"}],attrs:{name:"design"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.designKey=t.target.multiple?n:n[0]}}},e._l(e.designs,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t.name))])})),e._v(" "),"custom"!==e.designKey?n("img",{staticClass:"design",attrs:{src:"/static/"+e.value.key+"/"+e.value.design+".png",height:"64",width:"64"}}):e._e(),e._v(" "),n("show-modifications-input",{attrs:{placeholder:"color",original:e.design.value.color},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),e._v(" "),n("show-modifications-input",{attrs:{placeholder:"no",original:e.design.value.no},model:{value:e.no,callback:function(t){e.no=t},expression:"no"}}),e._v(" "),n("label",[e._v("price: "),n("show-modifications-input",{attrs:{placeholder:"price",type:"number",step:"any",original:e.fabric.price},model:{value:e.price,callback:function(t){e.price=e._n(t)},expression:"price"}})],1)],1)},staticRenderFns:[]};var X=n("VU/8")(j,E,!1,function(e){n("Rpcw")},null,null).exports,B={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.valueByUnit,expression:"valueByUnit"}],attrs:{type:"number",step:"any"},domProps:{value:e.valueByUnit},on:{input:function(t){t.target.composing||(e.valueByUnit=t.target.value)}}})},staticRenderFns:[]},C=n("VU/8")({props:["value","unit"],computed:{valueByUnit:{get:function(){return this.value/this.unit.multiplier},set:function(e){this.$emit("input",e*this.unit.multiplier)}}}},B,!1,null,null,null).exports,z=n("ivXw"),M=N()(new $),H={deepPleat:{cn:"四脚勾",en:"Deep Pleat"},doublePleat:{cn:"韩折",en:"Double Pleat"},eylet:{cn:"打孔",en:"Eyelet"},tabTop:{cn:"吊带",en:"Tab Top"},rodPocket:{cn:"穿杆",en:"Rod Pocket"}},Q=[{name:"window",value:function(){return this.name}},{name:"fabric",value:function(){return this.fabric.key}},{name:"design",value:function(){return this.fabric.no}},{name:"color",value:function(){return this.fabric.color}},{name:"width",value:function(){return this.width/100}},{name:"height",value:function(){return this.drop/100}},{name:"ratio",value:function(){return this.ratio}},{name:"heading",value:function(){var e=this.headings[this.heading];return e.cn+" ("+e.en+")"}},{name:"material usage",value:function(){return this.windowItem.materialUsage}}],S={components:{InputByUnit:C,Fixation:A,Fabric:X},exportedData:Q,props:["path","unit","exportView","value"],data:function(){return{headings:H}},computed:x()({},z.map(function(e){return{get:function(){return this.windowItem[e]},set:function(t){this.$emit("input",z.assoc(e,t,this.value))}}},z.zipObj(M,M)),{windowItem:function(){return p()(new $,this.value)},exportedData:function(){var e=this;return z.map(function(t){return{name:t.name,value:t.value.call(e)}},Q)}})},W={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.exportView?n("tr",e._l(e.exportedData,function(t){return n("td",{key:t.name},[e._v(e._s(t.value))])})):n("li",{staticClass:"item",attrs:{id:e.path.join("-")}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],attrs:{autocapitalize:"none"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("fixation",{model:{value:e.fixation,callback:function(t){e.fixation=t},expression:"fixation"}}),e._v(" "),n("input-by-unit",{attrs:{unit:e.unit,placeholder:"width"},model:{value:e.width,callback:function(t){e.width=e._n(t)},expression:"width"}}),e._v(" "),n("input-by-unit",{attrs:{unit:e.unit,placeholder:"drop"},model:{value:e.drop,callback:function(t){e.drop=e._n(t)},expression:"drop"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.ratio,expression:"ratio",modifiers:{number:!0}}],attrs:{type:"number",step:"0.1",placeholder:"ratio"},domProps:{value:e.ratio},on:{input:function(t){t.target.composing||(e.ratio=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("fabric",{model:{value:e.fabric,callback:function(t){e.fabric=t},expression:"fabric"}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.heading,expression:"heading"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.heading=t.target.multiple?n:n[0]}}},e._l(e.headings,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(" "+e._s(t.en))])})),e._v(" "),n("input",{attrs:{placeholder:"total",readonly:""},domProps:{value:e.windowItem.total.toFixed(2)}}),e._v(" "),n("button",{attrs:{name:"remove"},on:{click:function(t){e.$emit("remove")}}},[e._v("Remove")])],1)},staticRenderFns:[]};var L=n("VU/8")(S,W,!1,function(e){n("9nz+")},null,null).exports,G=n("ivXw"),J={components:{WindowView:L},mixins:[w],data:function(){return{newItemName:"",units:{m:100,cm:1,inch:2.54},unitName:"cm",debug:!1,exportedData:Q}},computed:{hasItems:function(){return 0!==v()(this.items).length},items:function(){return this.qget(["item"])||{}},windowItems:function(){return G.map(function(e){return p()(new $,e)},this.items)},total:function(){return G.sum(G.pluck("total",G.values(this.windowItems)))},unit:function(){return{name:this.unitName,multiplier:this.units[this.unitName]}}},methods:{storeItem:function(e,t){this.qset(["item"],G.assoc(e,t,this.items))},removeItem:function(e){this.qdel(["item",e])},newItem:function(){var e=(Math.max.apply(Math,[0].concat(c()(G.keys(this.items))))+1).toString();this.storeItem(e,{name:this.newItemName}),this.newItemName=""}}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ol",e._l(e.items,function(t,i){return n("window-view",{key:i,attrs:{value:t,path:["item",i],unit:e.unit,exportView:!1},on:{input:function(t){e.storeItem(i,t)},remove:function(t){e.removeItem(i)}}})})),e._v(" "),e.hasItems?n("div",[e._v("\n    total: "+e._s(e.total.toFixed(2))+"\n  ")]):e._e(),e._v(" "),n("form",{staticClass:"controls",on:{submit:function(t){return t.preventDefault(),e.newItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newItemName,expression:"newItemName",modifiers:{trim:!0}}],attrs:{id:"new-item-name",autocapitalize:"none"},domProps:{value:e.newItemName},on:{input:function(t){t.target.composing||(e.newItemName=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("button",{attrs:{id:"new-item"}},[e._v("Add")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.unitName,expression:"unitName"}],attrs:{id:"select-unit"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.unitName=t.target.multiple?n:n[0]}}},e._l(e.units,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])})),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.debug,expression:"debug"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.debug=t.target.multiple?n:n[0]}}},[n("option",{key:!1,domProps:{value:!1}},[e._v("normal")]),e._v(" "),n("option",{key:!0,domProps:{value:!0}},[e._v("debug")])])]),e._v(" "),n("div",{style:e.debug?"":"display: none"},[n("table",[n("tr",e._l(e.exportedData,function(t){return n("th",{key:t.name},[e._v(e._s(t.name))])})),e._v(" "),e._l(e.items,function(t,i){return n("window-view",{key:i,attrs:{value:t,path:["item",i],unit:e.unit,exportView:!0},on:{input:function(t){e.storeItem(i,t)}}})})],2)])])},staticRenderFns:[]};var Y=n("VU/8")(J,Z,!1,function(e){n("TvyD")},null,null).exports;i.a.use(a.a);var ee=new a.a({parseQuery:function(e){return s.a.parse(e,{parseArrays:!1})},stringifyQuery:function(e){return s.a.stringify(e,{addQueryPrefix:!0})},mode:"history",routes:[{path:"*",name:"OrderForm",component:Y}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:ee,components:{App:o},template:"<App/>"})},RXa9:function(e,t){},Rpcw:function(e,t){},TvyD:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f7f8aba302787b8e72d5.js.map