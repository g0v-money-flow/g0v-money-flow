(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{220:function(e,t,n){"use strict";n.r(t);n(150),n(62),n(48),n(38),n(13),n(11),n(5),n(58),n(110),n(109),n(151),n(152),n(19),n(46);var a=n(0),r=n.n(a),i=n(47),o=n(80),c=n.n(o),l=n(215),s=n(228),u=n.n(s);var m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).regionsLinks=n.props.regions.map((function(e){return r.a.createElement(f,{urlPrefix:n.props.urlPrefix,regionName:e.name,constituencyName:e.firstConstituency})})),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("ul",{className:u.a.regionsLinks},this.regionsLinks)},a}(r.a.Component),f=function(e){var t=e.urlPrefix,n=e.regionName,a=e.constituencyName;return r.a.createElement("li",{className:u.a.regionLink},r.a.createElement(i.Link,{to:"/"+t+"/regions/"+n+"/constituencies/"+a},n))},p=m,E=n(216),d=n(229),g=n.n(d);function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"query",(function(){return h})),n.d(t,"YearsList",(function(){return k})),n.d(t,"ElectionBlocks",(function(){return b}));var h="4148637886",v=function(e){switch(this.name=e.name.replace(/\s/g,"-").toLowerCase(),e.name){case"2016 Legislator Election":this.title="立法委員選舉";break;case"2016 President Election":this.title="總統選舉";break;case"2014 Council Election":case"2018 Council Election":this.title="縣市議員選舉";break;case"2014 Mayor Election":case"2018 Mayor Election":this.title="縣市長選舉";break;default:e.title=e.name}this.regions=e.regions.map((function(t){var n="第01選區";return["全國","山地立委","平地立委"].includes(t.name)?n="全國":"2018 Mayor Election"!==e.name&&"2014 Mayor Election"!==e.name||(console.log(e.name),n=t.name),{name:t.name,firstConstituency:n}}))},k=function(e){var t=e.data.allElectionsJsonData.nodes.map((function(e){return e.year})),n=y(new Set(t)).map((function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"#"},e))}));return r.a.createElement("div",null,r.a.createElement("ul",{className:g.a.yearsList},n))},b=function(e){var t=e.data,n=[].concat.apply([],t.allElectionsJsonData.nodes.map((function(e){return new v(e)}))).map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",{className:g.a.electionTitle},r.a.createElement(c.a,{fixed:t.flagImage.childImageSharp.fixed,className:g.a.decorationImage}),e.title),r.a.createElement(p,{regions:e.regions,urlPrefix:"elections/"+e.name}))}));return r.a.createElement("div",{className:g.a.electionBlocks},n)};t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(i.Link,{to:"/"},"< 返回"),r.a.createElement(E.a,{title:"選舉金流"}),r.a.createElement(k,{data:t}),r.a.createElement(b,{data:t}),r.a.createElement(c.a,{fixed:t.boxImage.childImageSharp.fixed,style:{float:"right"}}))}}}]);
//# sourceMappingURL=component---src-pages-elections-js-b4d902cc004bf39badf4.js.map