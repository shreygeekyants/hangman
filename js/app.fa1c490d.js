(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],d=0,v=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"08dd":function(e,t,a){e.exports=a.p+"img/scene0.778adcda.png"},"1a54":function(e,t,a){e.exports=a.p+"img/scene2.653c9578.png"},4241:function(e,t,a){e.exports=a.p+"img/scene3.689a85f1.png"},5672:function(e,t,a){e.exports=a.p+"img/scene6.1a70e2de.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],s=(a("034f"),a("2877")),c={},i=Object(s["a"])(c,r,o,!1,null,null,null),u=i.exports,l=a("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",style:{"background-image":"url("+a("d31f")("./scene"+e.count+".png")+")",backgroundRepeat:"no-repeat",backgroundSize:"cover",transition:"background-image 0.2s ease-in-out"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"left-container"},[n("div",{staticClass:"score-blocks-left"},[n("h1",{staticClass:"game-over",style:{color:"black"}},[e._v("Score: "+e._s(e.finalscore))]),n("div",{staticClass:"reset-container"},[e.gameover||99===e.count?e._e():n("button",{on:{click:function(t){return e.resetgame(2)}}},[e._v("Reset")])]),e.gameover&&99!==e.count?n("h1",{staticClass:"game-over"},[e._v("Game Over!")]):e._e()])]),n("div",{staticClass:"right-container"},[n("div",{staticClass:"score-blocks"},[n("h1",{staticClass:"game-over",style:{color:"black"}},[e._v("Score: "+e._s(e.finalscore))]),n("div",{staticClass:"reset-container"},[e.gameover||99===e.count?e._e():n("button",{on:{click:function(t){return e.resetgame(2)}}},[e._v("Reset")])]),e.gameover&&99!==e.count?n("h1",{staticClass:"game-over"},[e._v("Game Over!")]):e._e()]),e.gameover?e._e():n("div",{staticClass:"right-blocks"},[n("div",{staticClass:"category"},[e._v("Guess the "+e._s(e.category))]),n("div",{staticClass:"text-value"},e._l(e.textArray,(function(t){return n("div",{style:{width:"10%"}},[n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-block",style:[e.setTextStyle(t)]},[e._v(e._s(t))])])])})),0),n("KeyboardComponent",{attrs:{addCharacterToList:e.addCharacterToList,selectedCharacters:e.selectedCharacters,textArray:e.textArray}})],1),e.gameover?n("div",{staticClass:"right-blocks"},[99!==e.count?n("div",{staticClass:"category"},[e._v("The Correct Answer was")]):e._e(),99===e.count?n("div",{staticClass:"category"},[e._v("Correct Answer !")]):e._e(),n("div",{staticClass:"text-value"},[e._v(e._s(e.textValue))]),99===e.count?n("div",{staticClass:"button-container"},[n("button",{on:{click:function(t){return e.resetgame(1)}}},[e._v("Next")])]):e._e(),99!==e.count?n("div",{staticClass:"button-container"},[n("button",{on:{click:function(t){return e.resetgame(2)}}},[e._v("Retry")]),e._v(" Share on : "),n("button",{staticClass:"facebook"},[n("ShareNetwork",{attrs:{network:"facebook",url:"https://shreygeekyants.github.io/shreygeekyants.fleptile.github.io/",title:"Hangman - A Vue.js implementation by Shrey",quote:e.getMessage(),hashtags:"ShreyIsAwesome"}},[n("div",{staticClass:"button-element"},[n("vue-fontawesome",{attrs:{icon:"facebook",size:"2",color:"white"}})],1)])],1),n("button",{staticClass:"whatsapp"},[n("ShareNetwork",{attrs:{title:"Hangman - A Vue.js implementation by Shrey",network:"whatsapp",url:"https://shreygeekyants.github.io/shreygeekyants.fleptile.github.io/",description:e.getMessage()}},[n("div",{staticClass:"button-element"},[n("vue-fontawesome",{attrs:{icon:"whatsapp",size:"2",color:"white"}})],1)])],1)]):e._e()]):e._e()])])])},v=[],h=(a("a623"),a("caad"),a("ac1f"),a("2532"),a("5319"),a("1276"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keyboard-layout"},e._l(e.keyboardButtons,(function(t){return a("div",{key:t.key,staticClass:"keyboard-button-container"},[a("div",{staticClass:"keyboard-button",style:e.generateStyles(t.value),on:{click:function(a){return e.addCharacterToList(t.value)}}},[e._v(e._s(t.value))])])})),0)}),f=[],p=[{key:"Q",value:"Q"},{key:"W",value:"W"},{key:"E",value:"E"},{key:"R",value:"R"},{key:"T",value:"T"},{key:"Y",value:"Y"},{key:"U",value:"U"},{key:"I",value:"I"},{key:"O",value:"O"},{key:"P",value:"P"},{key:"A",value:"A"},{key:"S",value:"S"},{key:"D",value:"D"},{key:"F",value:"F"},{key:"G",value:"G"},{key:"H",value:"H"},{key:"J",value:"J"},{key:"K",value:"K"},{key:"L",value:"L"},{key:"Z",value:"Z"},{key:"X",value:"X"},{key:"C",value:"C"},{key:"V",value:"V"},{key:"B",value:"B"},{key:"N",value:"N"},{key:"M",value:"M"}],y={animal:["GOAT","LION","ELEPHANT","DOG","CAT","HORSE","LION","BEAR","SNAKE","FOX","KANGAROO","RABBIT","TIGER","LEOPARD","GOOSE","FROG","MONKEY","SHEEP","WHALE","CHICKEN","PANDA","ZEBRA","DONKEY","LIZARD","GORILLA","RACOON","TURTLE"],city:["PARIS","LONDON","KANPUR","NEWDELHI","NEWYORK","BALI","MUMBAI","PUNE","CHICAGO","MILAN","SYDNEY","TOKYO","BERLIN","DUBLIN","JAIPUR","VENICE","KYOTO","ATHENS","BUDAPEST","BUSAN","BEIJING","ROME"],country:["INDIA","CHINA","USA","CANADA","PAKISTAN","RUSSIA","SPAIN","ITALY","FRANCE","GERMANY","TURKEY","ENGLAND","BRAZIL","ARGENTINA","GREECE","ALBANIA","AUSTRIA","NORWAY","OMAN","BULGARIA","QATAR"],body_part:["HAND","LEG","FEET","HEAD","LUNGS","HEART","THROAT","EYE","NOSE","MOUTH","NECK","STOMACH","ELBOW","EAR","SPINE","KNEE","FINGER","LIPS","CHEST","WAIST","ANKLE","CHIN"]},g={name:"KeyboardComponent",props:["addCharacterToList","selectedCharacters","textArray"],data:function(){return{keyboardButtons:p}},methods:{generateStyles:function(e){return this.textArray.includes(e)&&this.selectedCharacters.includes(e)?{backgroundColor:"#23bf1b",color:"white",pointerEvents:"none"}:this.selectedCharacters.includes(e)&&!this.textArray.includes(e)?{backgroundColor:"red",color:"white",pointerEvents:"none"}:void 0}}},m=g,b=(a("cad2"),Object(s["a"])(m,h,f,!1,null,null,null)),A=b.exports,C=a("2ef0"),k=a.n(C),E={name:"Home",data:function(){return{textValue:"",textFamily:"",category:"",textArray:[],selectedCharacters:[],count:0,gameover:!1,nextround:!1}},computed:{finalscore:function(){return Object(C["get"])(this.$store,"state.score",0)}},beforeDestroy:function(){this.gameover&&this.$store.dispatch("clearScore")},mounted:function(){this.generateCategory(),this.splitText(this.textValue),console.log(this.textValue,"*** khv")},methods:{getMessage:function(){return"Check this game out and beat my score of ".concat(this.finalscore)},resetgame:function(e){2===e&&this.$store.dispatch("clearScore"),this.resetValues(),this.generateCategory(),this.splitText(this.textValue)},resetValues:function(){this.textValue="",this.textFamily="",this.category="",this.textArray=[],this.selectedCharacters=[],this.count=0,this.gameover=!1},setTextStyle:function(e){return this.selectedCharacters.includes(e)?{visibility:"visible"}:{visibility:"hidden"}},generateCategory:function(){var e=["animal","city","country","body_part"],t=e[Math.floor(Math.random()*e.length)],a=y[t];this.category=t.replace("_"," "),this.textValue=a[Math.floor(Math.random()*a.length)]},addCharacterToList:function(e){this.selectedCharacters.push(e),this.textArray.includes(e)||(this.count+=1),this.checkGameOver(),this.checkVictoryCondition()},checkGameOver:function(){6===this.count&&(this.gameover=!0)},updateScore:function(){this.$store.dispatch("updateScore",100),this.gameover=!0},checkVictoryCondition:function(){var e=this,t=this.textArray.every((function(t){return e.selectedCharacters.includes(t)}));t&&(this.updateScore(),this.count=99)},splitText:function(e){this.textArray=e.split("")}},components:{KeyboardComponent:A}},O=E,S=(a("cccb"),Object(s["a"])(O,d,v,!1,null,null,null)),N=S.exports;n["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:N}],_=new l["a"]({mode:"history",base:"/",routes:x}),T=_,I=a("2f62"),R=a("bfa9");n["a"].use(I["a"]);var w=new R["a"]({key:"vuex",storage:window.localStorage}),L=new I["a"].Store({state:{score:0},mutations:{updateScoreCard:function(e,t){e.score=e.score+t},clearScoreCard:function(e){e.score=0}},actions:{updateScore:function(e,t){var a=e.commit;a("updateScoreCard",t)},clearScore:function(e){var t=e.commit;t("clearScoreCard")}},modules:{},plugins:[w.plugin]}),G=a("bd8c"),H=a.n(G),M=a("9955"),P=a.n(M);a("1f54");n["a"].use(P.a,{name:"custom",lodash:k.a}),n["a"].use(H.a),n["a"].component("VueFontawesome",a("150d").default),n["a"].config.productionTip=!1,new n["a"]({router:T,store:L,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,a){},7901:function(e,t,a){e.exports=a.p+"img/scene5.dc1b1ad9.png"},"85ec":function(e,t,a){},b894:function(e,t,a){e.exports=a.p+"img/scene99.ced5d11f.png"},b8a3:function(e,t,a){},cad2:function(e,t,a){"use strict";var n=a("b8a3"),r=a.n(n);r.a},cccb:function(e,t,a){"use strict";var n=a("5ced"),r=a.n(n);r.a},d31f:function(e,t,a){var n={"./scene0.png":"08dd","./scene1.png":"fda4","./scene2.png":"1a54","./scene3.png":"4241","./scene4.png":"fe12","./scene5.png":"7901","./scene6.png":"5672","./scene99.png":"b894"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="d31f"},fda4:function(e,t,a){e.exports=a.p+"img/scene1.27d14891.png"},fe12:function(e,t,a){e.exports=a.p+"img/scene4.fbde2670.png"}});
//# sourceMappingURL=app.fa1c490d.js.map