(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(15),r=n.n(c),i=(n(23),n(5)),s=n(6),u=n(9),l=n(7),d=n(8),f=n(34),p=n(32),h=n(35),m=(n(25),n(26),n(10)),v=[{question:"Q1",options:["o1","o2","o3","o4"],answer:"o2"},{question:"Q2",options:["o1","o2","o3","o4"],answer:"o2"},{question:"Q3",options:["o1","o2","o3","o4"],answer:"o2"},{question:"Q4",options:["o1","o2","o3","o4"],answer:"o2"},{question:"Q5",options:["o1","o2","o3","o4"],answer:"o2"}],b=function(e){return a.a.createElement("div",{className:"questionForm"},a.a.createElement("div",null,e.data.question))},j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onNextClick=function(){n.state.current!==v.length&&n.setState(function(e){return{current:e.current+1}})},n.onPrevClick=function(){1!==n.state.current&&n.setState(function(e){return{current:e.current-1}})},n.state={current:1,correct:0},n.onNextClick=n.onNextClick.bind(Object(m.a)(Object(m.a)(n))),n.onPrevClick=n.onPrevClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(b,{onNextClick:this.onNextClick,onPrevClick:this.onPrevClick,data:v[this.state.current-1]}),a.a.createElement("div",{class:"questionAction"},a.a.createElement("div",{class:"qButton",onClick:this.onPrevClick},"Previous"),a.a.createElement("div",{class:"qButton",onClick:this.onNextClick},"Next")))}}]),t}(o.PureComponent),O=Object(h.a)(j),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"homeComponent"}," Home ")}}]),t}(o.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null," Contact ")}}]),t}(o.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null," Thanks")}}]),t}(o.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,"404!")}}]),t}(o.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{class:"AppContainer"},a.a.createElement("div",{className:"App"},"Welcome!"),a.a.createElement(f.a,null,a.a.createElement(p.a,{exact:!0,path:"/",component:k}),a.a.createElement(p.a,{path:"/question",component:O}),a.a.createElement(p.a,{path:"/contact",component:w}),a.a.createElement(p.a,{path:"/thanks",component:g}),a.a.createElement(p.a,{component:C})))}}]),t}(o.Component),y=Object(h.a)(E),N=n(33),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(N.a,null,a.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");q?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.fbe3e449.chunk.js.map