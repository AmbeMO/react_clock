(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),o=n(3),s=n(5),l=n(4),r=n(1),u=n.n(r),m=(n(12),n(0)),d=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=null,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.timeGo()}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"timeGo",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:this.state.date.toLocaleTimeString()})}}]),n}(u.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:"default"},t.showTimer=function(){t.setState({isClockVisible:!0})},t.hideTimer=function(){t.setState({isClockVisible:!1})},t.getRandomClockName=function(){var e=String(Math.floor(1e3*Math.random()));t.setState({clockName:e})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.clockName;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"clock",children:[Object(m.jsxs)("p",{className:"clock__time","data-cy":"time",children:[e?Object(m.jsx)(d,{name:n}):null,"    ",Object(m.jsx)("span",{className:"clock__name",children:n})]}),Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:this.showTimer,disabled:e,children:"Show"})," ",Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:this.hideTimer,disabled:!e,children:"Hide"})," ",Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:this.getRandomClockName,children:"Random clock name"})]})})}}]),n}(u.a.Component),h=b;a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0c7afcd3.chunk.js.map