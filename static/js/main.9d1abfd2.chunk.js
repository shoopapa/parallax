(this.webpackJsonpparallax=this.webpackJsonpparallax||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/blackGirl0.dec534f9.png"},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){e.exports=a.p+"static/media/blackGirl1.485e985a.png"},29:function(e,t,a){e.exports=a.p+"static/media/blackGirl2.94045bd2.png"},30:function(e,t,a){e.exports=a.p+"static/media/anomaly2.ffcf9fbf.png"},31:function(e,t,a){e.exports=a.p+"static/media/anomaly3.a64befc9.png"},32:function(e,t,a){e.exports=a.p+"static/media/anomaly4.f4cd87d7.png"},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),o=a.n(r),c=(a(40),a(12)),i=a(2),s=(a(9),a(27)),u=a.n(s),m=a(66),p=a(3),h=[1,2,3,4,5,6,7,8,9],d=h.map((function(e,t){return 1-Math.pow(t-8,2)/64})).reverse(),f=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p.ParallaxBanner,{layers:h.map((function(e,t){return{image:"http://www.firewatchgame.com/images/parallax/parallax".concat(t,"@2x.png"),amount:d[t],expanded:!1}})),style:{width:"100%",height:"100%",position:"absolute",top:"0px"}}),l.a.createElement("div",{style:{backgroundColor:"#220002",width:"100%",height:"101vh",position:"absolute",top:"99vh"}})))},g=function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"Svg-app"},l.a.createElement(p.Parallax,{className:"custom-class",y:[50,-50],x:[50,-50],tagOuter:"figure"},l.a.createElement("img",{src:"http://www.fillmurray.com/500/320",alt:"fill murray"}))))},v=a(15),E=a.n(v),w=a(28),x=a.n(w),y=a(29),b=a.n(y),k=[E.a,x.a,b.a],O=[1,2,3],P=O.map((function(e,t){return 1-Math.pow(t-3,2)/9})).reverse(),C=function(){var e=Object(p.useController)().parallaxController;return window.onresize=function(){console.log("resize"),e.update()},l.a.createElement(m.a,null,l.a.createElement("div",{className:"Black-girl"},l.a.createElement("div",{style:{backgroundSize:"110%",flexDirection:"column",height:"300vh",backgroundColor:"#937e6c",backgroundRepeat:"repeat",width:"100%",top:"-5%",bottom:"-5%",left:"-5%",right:"-5%",backgroundImage:"url(".concat(E.a,")"),filter:" blur(10px)"}}),l.a.createElement(p.ParallaxBanner,{layers:O.map((function(e,t){return{image:k[t],amount:P[t],alt:"blackgirl",expanded:!1}})),style:{position:"absolute",filter:" blur(0px)",backgroundColor:"rgba(0,0,0, 0.4)",width:"75vh",height:"100vh",top:0}})))},N=a(34),B=a(30),A=a.n(B),L=a(31),j=a.n(L),z=a(32),M=a.n(z),T={alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",position:"relative",backgroundColor:" #000a13",overflowY:"scroll"},G=function(){var e=Object(p.useController)().parallaxController;window.onresize=function(){e.update()};var t=function(){return e.update()};Object(n.useLayoutEffect)((function(){return window.addEventListener("load",(function(){return e.update()})),function(){return window.removeEventListener("load",(function(){return e.update()}))}}),[e]);return l.a.createElement("div",{className:"Anomaly"},l.a.createElement("div",{className:"Anomaly",style:Object(N.a)({},T,{display:"flex"})},l.a.createElement(p.Parallax,{styleOuter:{position:"absolute",top:"".concat(88,"vh"),overflow:"hidden"}},l.a.createElement("svg",{viewBox:" 0 0 100 100",style:{height:"100vh",width:"90vh"}},l.a.createElement("circle",{cx:"50%",cy:"50%",r:"45%",fill:"#002132"}))),l.a.createElement(p.Parallax,{y:[20,-20],styleOuter:{position:"absolute",top:"".concat(85,"vh"),overflow:"hidden"}},l.a.createElement("svg",{viewBox:" 0 0 100 100",style:{position:"absoulte",op:0,height:"100vh",width:"100vh"}},l.a.createElement("circle",{cx:"50%",cy:"50%",r:"35%",fill:"#022d46"}))),l.a.createElement(p.Parallax,{y:[5,-5],styleOuter:{position:"absolute",top:"".concat(85,"vh"),overflow:"hidden"}},l.a.createElement("img",{src:A.a,style:{height:"118vh"},alt:"text",onLoad:t})),l.a.createElement(p.Parallax,{y:[30,-30],x:[-5,5],styleOuter:{position:"absolute",top:"".concat(85,"vh"),overflow:"hidden"}},l.a.createElement("img",{src:j.a,style:{height:"115vh"},alt:"window",onLoad:t})),l.a.createElement(p.Parallax,{y:[35,-35],x:[10,-10],styleOuter:{position:"absolute",top:"".concat(85,"vh"),overflow:"hidden"}},l.a.createElement("img",{src:M.a,style:{height:"120vh"},alt:"person",onLoad:t}))),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",style:{position:"absolute",top:"30vh",height:"5vh",width:"5vh"},viewBox:"0 0 24 24",alt:"arrow"},l.a.createElement("path",{stroke:"gray",d:"M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"})))};function I(){return l.a.createElement(c.a,null,l.a.createElement(p.ParallaxProvider,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/firewatch"},l.a.createElement(f,null)),l.a.createElement(i.a,{path:"/blackgirl"},l.a.createElement(C,null)),l.a.createElement(i.a,{path:"/anomaly"},l.a.createElement(G,null)),l.a.createElement(i.a,{path:"/parallax/svg"},l.a.createElement(g,null)),l.a.createElement(i.a,{path:"/parallax"},l.a.createElement(S,null)),l.a.createElement(i.a,{path:"/"},l.a.createElement(S,null)))))}function S(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Edit ",l.a.createElement("code",null,"src/App.js")," and save to reload."),l.a.createElement(c.b,{to:"/blackgirl"}," /firewatch"),l.a.createElement(c.b,{to:"/parallax/firewatch"}," /parallax/firewatch")))}document.body.addEventListener("touchstart",(function(e){0===this.scrollTop?this.scrollTop+=1:this.scrollTop+this.offsetHeight>=this.scrollHeight&&(this.scrollTop-=1)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.9d1abfd2.chunk.js.map