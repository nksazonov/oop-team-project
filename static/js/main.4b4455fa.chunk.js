(this["webpackJsonpoop-team-project"]=this["webpackJsonpoop-team-project"]||[]).push([[0],{30:function(t,e,n){},34:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n.n(a),s=n(24),r=n.n(s),o=(n(30),n(22)),l=n(19),c=n(15),d=n(1),u=n(2),p=n(4),h=n(3),f=n(39),y=n(40),j=n(12),v=(n(34),{canvas:"#FFF0CF",point:"#133C55",line:"#DD614A"}),b={canvasWidthMultiplier:1,canvasHeigthMultiplier:.88,pointRadius:4,lineStroke:3,dashStroke:1,dash:[5,10]},k={pointAppear:.2,lineDraw:.1,stepAnimation:1},x=n(7),m=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).point=i.a.createRef(),a}return Object(u.a)(n,[{key:"changeSize",value:function(t){this.point.current.to({scaleX:t,scaleY:t,duration:k.pointAppear})}},{key:"componentDidMount",value:function(){this.changeSize(b.pointRadius)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var t=this.props,e=t.x,n=t.y;return Object(x.jsx)(j.a,{ref:this.point,x:e,y:n,radius:1,fill:v.point})}}]),n}(i.a.Component),g=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).link=i.a.createRef(),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.start,a=e.end;this.link.current.setAttrs({points:[n.x,n.y,n.x,n.y],dash:this.props.dashed?b.dash:[0,0],strokeWidth:this.props.dashed?b.dashStroke:b.lineStroke}),this.link.current.to({points:[n.x,n.y,a.x,a.y],duration:k.lineDraw}),setTimeout((function(){t.link.current.setAttrs({points:[n.x,n.y,a.x,a.y]})}),1e3*k.lineDraw)}},{key:"shouldComponentUpdate",value:function(t){return this.link.current.to({dash:t.dashed?b.dash:[0,0],strokeWidth:t.dashed?b.dashStroke:b.lineStroke,duration:k.lineDraw}),!0}},{key:"render",value:function(){return Object(x.jsx)(j.c,{ref:this.link,stroke:v.line,lineCap:"round",lineJoin:"round"})}}]),n}(i.a.Component),O=function(t,e){return Object.keys(t).length===Object.keys(e).length&&Object.keys(t).every((function(n){return e.hasOwnProperty(n)&&t[n]===e[n]}))},S=n(23),C=n.n(S),w=n(26);function I(){return(I=Object(w.a)(C.a.mark((function t(e,n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:n});case 2:if(200===(a=t.sent).status){t.next=8;break}return console.log("Looks like there was a problem. Status Code: "+a.status),t.abrupt("return");case 8:return t.abrupt("return",a.json());case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var M={playing:!1,playingInterval:null,points:[],lines:[],iterator:null,step:-1,done:!1},A=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).closePoint=function(t){return a.state.points.find((function(e){return Math.abs(t.x-e.x)<2*b.pointRadius&&Math.abs(t.y-e.y)<2*b.pointRadius}))},a.TEMP_loadPoints=function(){a.setState({points:[{x:0,y:400},{x:100,y:0},{x:400,y:400},{x:500,y:0}]})},a.pointIndex=function(t){return a.state.points.findIndex((function(e){return O(e,t)}))},a.modifyLines=function(t){var e=a.state.lines,n=e.findIndex((function(e){return O(e.start,t.start)&&O(e.end,t.end)}));~n?(e[n]=t,a.setState({lines:e})):a.setState({lines:[t].concat(Object(c.a)(e))})},a.loadStep=function(){if(!a.state.iterator||!a.state.iterator.steps)return clearInterval(a.state.playingInterval),void a.setState({playing:!1,playingInterval:null,iterator:null,step:-1});if(a.state.step===a.state.iterator.steps.length)return clearInterval(a.state.playingInterval),void a.setState({playing:!1,playingInterval:null,iterator:null,step:-1,done:!0});var t,e=a.state.iterator.steps[a.state.step],n=Object(l.a)(e.lines);try{for(n.s();!(t=n.n()).done;){var i=t.value,s=i.startPoint,r=i.endPoint,o=i.isSolid;a.modifyLines({start:s,end:r,isSolid:o})}}catch(c){n.e(c)}finally{n.f()}a.setState({step:a.state.step+1})},a.handleStageClick=function(t){var e=t.currentTarget.getPointerPosition(),n=e.x,i=e.y;n=Math.round(n),i=Math.round(i),a.state.playing||-1!==a.state.step||a.closePoint({x:n,y:i})||a.setState({points:[{x:n,y:i}].concat(Object(c.a)(a.state.points))})},a.handleClearClick=function(){a.setState(Object(o.a)({},M))},a.loadIterator=function(t){a.state.iterator?t&&t():function(t,e){return I.apply(this,arguments)}("http://25.92.99.66:18080/convex-hull",JSON.stringify({points:a.state.points})).then((function(e){e?(a.setState({iterator:e,step:0}),t&&t()):console.log("An error has occured while fetching iterator!")}))},a.handleNextStepClick=function(){a.loadIterator((function(){setTimeout(a.loadStep)}))},a.handleAnimateClick=function(){a.loadIterator((function(){setTimeout(a.loadStep);var t=setInterval(a.loadStep,1e3*k.stepAnimation);a.setState({playing:!0,playingInterval:t})}))},a.handleStopClick=function(){clearInterval(a.state.playingInterval),a.setState({playing:!1,playingInterval:null})},a.handleResultClick=function(){a.loadIterator((function(){setTimeout((function(){for(;!a.state.done&&-1!==a.state.step;)a.loadStep()}))}))},a.handleRandomizeClick=function(){for(var t,e,n=[],i=0;i<10;i++)n.push((t=window.innerWidth*b.canvasWidthMultiplier,e=window.innerHeight*b.canvasHeigthMultiplier,{x:Math.round(Math.random()*t),y:Math.round(Math.random()*e)}));a.setState({points:[].concat(n,Object(c.a)(a.state.points))})},a.state=Object(o.a)({},M),a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.points.length>=3;return Object(x.jsxs)(f.a,{fluid:!0,className:"p-0 app d-flex flex-column",children:[Object(x.jsxs)(j.d,{width:window.innerWidth*b.canvasWidthMultiplier,height:window.innerHeight*b.canvasHeigthMultiplier,className:"canvas m-4 mb-0 p-0",style:{backgroundColor:v.canvas},onClick:this.handleStageClick,children:[Object(x.jsx)(j.b,{children:this.state.lines.map((function(t,e){return Object(x.jsx)(g,{start:t.start,end:t.end,dashed:!t.isSolid},"link-".concat(t.start.x,"-").concat(t.start.y,"-").concat(t.end.x,"-").concat(t.end.y))}))}),Object(x.jsx)(j.b,{children:this.state.points.map((function(t){return Object(x.jsx)(m,{x:t.x,y:t.y},"point-".concat(t.x,"-").concat(t.y))}))})]}),Object(x.jsxs)("footer",{className:"toolbar d-flex justify-content-center align-items-center h-100",children:[Object(x.jsx)(y.a,{variant:"outline-secondary",disabled:!this.state.points.length||this.state.playing,onClick:this.handleClearClick,children:"\u2715 Clear \u2715"}),Object(x.jsx)(y.a,{variant:"primary",disabled:!t||this.state.playing||this.state.done,onClick:this.handleNextStepClick,children:"> Next step >"}),this.state.playing?Object(x.jsx)(y.a,{variant:"primary",onClick:this.handleStopClick,children:"\u23f9 Stop \u23f9"}):Object(x.jsx)(y.a,{variant:"primary",disabled:!t||this.state.done,onClick:this.handleAnimateClick,children:"\u23f5 Animate \u23f5"}),Object(x.jsx)(y.a,{variant:"primary",disabled:!t||this.state.playing||this.state.done,onClick:this.handleResultClick,children:">> Result >>"}),Object(x.jsx)(y.a,{variant:"outline-primary",disabled:this.state.playing||this.state.done||-1!==this.state.step,onClick:this.handleRandomizeClick,children:"\u21cb Randomize \u21cb"})]})]})}}]),n}(i.a.Component);r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4b4455fa.chunk.js.map