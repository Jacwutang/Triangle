(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),s=(a(15),a(2)),c=a(3),o=a(5),d=a(4),u=a(6),h=(a(17),a(9)),m=a(1),E=(a(19),function(e){return isNaN(e)?{error:"Enter a numeric value",valid:!1}:parseFloat(e)<=0?{error:"Enter a value greater than 0",valid:!1}:{error:"",valid:!0}}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={side_one:"",side_two:"",side_three:""},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(h.a)({},t,a))}},{key:"calculate",value:function(){var e=this.state,t=e.side_one,a=e.side_two,n=e.side_three;return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.every(function(e){return e>0&&E(e).valid})}(t=parseFloat(t),a=parseFloat(a),n=parseFloat(n))?function(e,t,a){return e>t+a||t>e+a||a>e+t?"NOT POSSIBLE":e===t&&e===a?"EQUILATERAL":e===t||e===a||t===a?"ISOCELES":"SCALENE"}(t,a,n):""}},{key:"renderErrors",value:function(e){return e?E(this.state[e]).error:""}},{key:"render",value:function(){return r.a.createElement("div",{className:"calc_container"},r.a.createElement("div",{className:"inputs_container"},r.a.createElement("div",{className:"side_container"},r.a.createElement("h3",null," Side 1 "),r.a.createElement("input",{type:"text",name:"side_one",value:this.state.side_one,onChange:this.handleChange,placeholder:"Side 1"}),r.a.createElement("div",{className:"error_display"}," ",this.renderErrors("side_one")," ")),r.a.createElement("div",{className:"side_container"},r.a.createElement("h3",null," Side 2 "),r.a.createElement("input",{type:"text",name:"side_two",value:this.state.side_two,onChange:this.handleChange,placeholder:"Side 2"}),r.a.createElement("div",{className:"error_display"}," ",this.renderErrors("side_two")," ")),r.a.createElement("div",{className:"side_container"},r.a.createElement("h3",null," Side 3 "),r.a.createElement("input",{type:"text",name:"side_three",value:this.state.side_three,onChange:this.handleChange,placeholder:"Side 3"}),r.a.createElement("div",{className:"error_display"}," ",this.renderErrors("side_three")," "))),r.a.createElement("div",{className:"results_container"},r.a.createElement("h2",null,"The Triangle is:",r.a.createElement("mark",null," ",this.calculate()," "))))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement("h1",null," Triangle Checker "),r.a.createElement(v,null))}}]),t}(n.Component);l.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.734ca821.chunk.js.map