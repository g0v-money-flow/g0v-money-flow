(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return m}),n.d(t,"YearsList",function(){return p}),n.d(t,"ElectionBlocks",function(){return f}),n.d(t,"Years",function(){return g});n(153);var a=n(0),r=n.n(a),i=n(148),o=n(152),c=n(157),s=n(155),l=n(171),u=n.n(l),m="2515657787",d=function(e,t){this.name=e.name,this.title=e.title,this.showCities=e.showCities,this.regions=t.regions.map(function(e){return{name:e.name,constituencies:[{name:"第01選區"}]}})},p=function(e){var t=e.data,n=g({data:t}).map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"#"},e.year))});return r.a.createElement("div",null,r.a.createElement("ul",{className:u.a.yearsList},n))},f=function(e){var t=e.data,n=[].concat.apply([],g({data:t}).map(function(e){return e.elections})).map(function(e){return!0===e.showCities?r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement(c.a,{regions:e.regions,urlPrefix:"elections/"+e.name})):r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(i.a,{to:"elections/"+e.name+"/regions/全國/constituencies/全國"},e.title)))});return r.a.createElement("div",null,n)},g=function(e){var t=e.data;return[{year:"2016",elections:[{name:"2016-president-election",title:"總統選舉",showCities:!1},{name:"2016-legislator-election",title:"立法委員選舉",showCities:!0}].map(function(e){return new d(e,t)})}]};t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{to:"/"},"< 返回"),r.a.createElement(s.a,{title:"選舉金流"}),r.a.createElement(p,{data:t.electionsJsonData}),r.a.createElement(f,{data:t.electionsJsonData}))}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a});n(149);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科"}}}}},152:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(148),l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1440,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,m=(n(154),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1440,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m},153:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(161),l=n.n(s);function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,c=a.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(e,t,n){"use strict";n(153);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(148),s=n(162),l=n.n(s),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).regionsLinks=n.props.regions.map(function(e){return o.a.createElement(m,{urlPrefix:n.props.urlPrefix,regionName:e.name,constituencyName:e.constituencies[0].name})}),n}return r()(t,e),t.prototype.render=function(){return this.regionsLinks.length<2?null:o.a.createElement("ul",{className:l.a.regionsLinks},this.regionsLinks)},t}(o.a.Component),m=function(e){var t=e.urlPrefix,n=e.regionName,a=e.constituencyName;return o.a.createElement("li",{className:l.a.regionLink},o.a.createElement(c.a,{to:t+"/regions/"+n+"/constituencies/"+a},n))};t.a=u}}]);
//# sourceMappingURL=component---src-pages-elections-js-fce60f0dcb65f93ba554.js.map