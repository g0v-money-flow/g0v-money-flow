(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"ConstituenciesOfRegion",function(){return s}),n.d(t,"ConstituencyLink",function(){return d}),n.d(t,"CandidateBlocks",function(){return f}),n.d(t,"CandidateBlock",function(){return p});n(36),n(153);var a=n(0),i=n.n(a),r=n(148),c=n(152),o=n(157),l=n(158),u=n.n(l),m=n(159),s=function(e){var t=e.electionSlug,n=e.constituencies,a=e.regionName,r=n.map(function(e){return i.a.createElement(d,{electionSlug:t,regionName:a,constituencyName:e.name})});return n.length<2?null:i.a.createElement("ul",{className:u.a.constituenciesLinks},r)},d=function(e){var t=e.electionSlug,n=e.regionName,a=e.constituencyName;return i.a.createElement("li",{className:u.a.constituencyLink},i.a.createElement(r.a,{to:"/elections/"+t+"/regions/"+n+"/constituencies/"+a},a))},f=function(e){var t=e.candidates;if(null===t)return i.a.createElement("div",null,"沒有候選人");var n=t.map(function(e){return i.a.createElement(p,{candidate:e})});return i.a.createElement("div",{className:u.a.candidateBlocks},n)},p=function(e){var t=e.candidate;return i.a.createElement("div",{className:u.a.candidateBlockWrapper},i.a.createElement(function(){return t.isElected?i.a.createElement("span",{className:u.a.isElected},"當選"):null},null),i.a.createElement("div",{className:u.a.candidateBlock},i.a.createElement("div",{className:u.a.candidateInfo},i.a.createElement("div",null,i.a.createElement("h6",{className:u.a.partyName},t.partyName),i.a.createElement("h1",null,i.a.createElement(r.a,{to:"/candidates/"+t.alternative_id,className:u.a.candidateName},t.name))),i.a.createElement("div",null,i.a.createElement("h6",null,"得票數:",t.numOfVote),i.a.createElement("h6",null," 得票率: ",t.rateOfVote+"%"," "))),i.a.createElement(m.a,{finance:t.finance})))};t.default=function(e){var t=e.pageContext,n=t.constituenciesOfRegion;return i.a.createElement(c.a,null,i.a.createElement(r.a,{to:"/elections/"},"< 返回"),i.a.createElement("div",null,i.a.createElement(o.a,{regions:t.election.regions,urlPrefix:t.urlPrefix}),i.a.createElement("h1",null,t.election.title," - ",t.regionName),i.a.createElement(s,{electionSlug:t.election.name.toLowerCase().replace(/\s/g,"-"),constituencies:t.constituenciesOfRegion,regionName:t.regionName}),i.a.createElement(function(){return n.length<2?null:i.a.createElement("h2",null,t.constituency.name)},null),i.a.createElement(f,{candidates:t.constituency.candidates}),i.a.createElement("hr",null),i.a.createElement(m.b,{candidates:t.constituency.candidates})))}},148:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=n(33),l=n.n(o);n.d(t,"a",function(){return l.a});n(149);var u=i.a.createContext({}),m=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},150:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=n(55),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"金流百科"}}}}},152:function(e,t,n){"use strict";var a=n(151),i=n(0),r=n.n(i),c=n(4),o=n.n(c),l=n(148),u=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/",style:{color:"black",textDecoration:"none"}},t))))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var m=u,s=(n(154),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© g0v ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});s.propTypes={children:o.a.node.isRequired};t.a=s},157:function(e,t,n){"use strict";n(153);var a=n(7),i=n.n(a),r=n(0),c=n.n(r),o=n(148),l=n(162),u=n.n(l),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).regionsLinks=n.props.regions.map(function(e){return c.a.createElement(s,{urlPrefix:n.props.urlPrefix,regionName:e.name,constituencyName:e.constituencies[0].name})}),n}return i()(t,e),t.prototype.render=function(){return this.regionsLinks.length<2?null:c.a.createElement("ul",{className:u.a.regionsLinks},this.regionsLinks)},t}(c.a.Component),s=function(e){var t=e.urlPrefix,n=e.regionName,a=e.constituencyName;return c.a.createElement("li",{className:u.a.regionLink},c.a.createElement(o.a,{to:"/"+t+"/regions/"+n+"/constituencies/"+a},n))};t.a=m},159:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return d});n(153);var a=n(0),i=n.n(a),r=n(158),c=n.n(r),o=n(160),l=["#70add1","#fec58c","#e49ea2","#8b8181","#c6e1c2"],u=["#70add1","#b4cedf","#fec58c","#ffe7cf","#e49ea2","#f0cacd","#8b8181","#cbcbcb","#c6e1c2","#eaf4e9"],m=function(e,t){var n=e.income.items.map(function(e){return e.name}),a=e.income.items.map(function(e){return e.amount});t=t||"",n.unshift("收入分佈"),a.unshift(t),this.incomeTitles=n,this.incomeAmounts=a;var i=e.outcome.items.map(function(e){return e.name}),r=e.outcome.items.map(function(e){return e.amount});i.unshift("支出分佈"),r.unshift(t),this.outcomeTitles=i,this.outcomeAmounts=r,this.incomeTotal=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.income.total),this.outcomeTotal=new Intl.NumberFormat("zh-Hans-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0}).format(e.outcome.total)},s=function(e){var t=e.finance,n=new m(t=t||{income:{total:0,items:[{name:"無資料",amount:0}]},outcome:{total:0,items:[{name:"無資料",amount:0}]}});return i.a.createElement("div",{className:c.a.candidateFinanceBlock},i.a.createElement("div",{className:c.a.candidateFinanceDetailBlock},i.a.createElement(o.a,{height:"100px",chartType:"BarChart",loader:i.a.createElement("div",null,"Loading Chart"),data:[n.incomeTitles,n.incomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:l}}),i.a.createElement("h6",null,"總收入: ",n.incomeTotal)),i.a.createElement("div",{className:c.a.candidateFinanceDetailBlock},i.a.createElement(o.a,{height:"100px",chartType:"BarChart",loader:i.a.createElement("div",null,"Loading Chart"),data:[n.outcomeTitles,n.outcomeAmounts],options:{title:null,isStacked:"relative",hAxis:{textPosition:"none",minValue:0},legend:{position:"none"},colors:u}}),i.a.createElement("h6",null,"總支出: ",n.outcomeTotal)))},d=function(e){var t=e.candidates.map(function(e){var t=e.finance||{income:{total:0,items:[{name:"個人捐贈收入",amount:0},{name:"營利事業捐贈收入",amount:0},{name:"政黨捐贈收入",amount:0},{name:"人民團體捐贈收入",amount:0},{name:"匿名捐贈",amount:0},{name:"其他收入",amount:0}]},outcome:{total:0,items:[{name:"人事費用支出",amount:0},{name:"宣傳支出",amount:0},{name:"租用宣傳車輛支出",amount:0},{name:"租用競選辦事處支",amount:0},{name:"集會支出",amount:0},{name:"交通旅運支出",amount:0},{name:"雜支支出",amount:0},{name:"返還支出",amount:0},{name:"繳庫支出",amount:0},{name:"公共關係費用支出",amount:0}]}};return new m(t,e.name)}),n=t[1].incomeTitles,a=t[1].outcomeTitles,r=t.map(function(e){return e.incomeAmounts}),s=t.map(function(e){return e.outcomeAmounts});return r.unshift(n),s.unshift(a),i.a.createElement("div",{className:c.a.candidatesFinanceCompareChart},i.a.createElement("div",{className:c.a.candidatesFinanceCompareChartWrapper},i.a.createElement("h3",null,"收入比較"),i.a.createElement(o.a,{chartType:"ColumnChart",height:"600px",loader:i.a.createElement("div",null,"Loading Chart"),data:r,options:{title:null,isStacked:!0,vAxis:{textPosition:"left",minValue:0},legend:{position:"none"},colors:l}})),i.a.createElement("div",{className:c.a.candidatesFinanceCompareChartWrapper},i.a.createElement("h3",null,"支出比較"),i.a.createElement(o.a,{chartType:"ColumnChart",height:"600px",loader:i.a.createElement("div",null,"Loading Chart"),data:s,options:{title:null,isStacked:!0,vAxis:{textPosition:"left",minValue:0},legend:{position:"none"},colors:u}})))}}}]);
//# sourceMappingURL=component---src-templates-constituencies-show-js-96854e145bc9ddcce694.js.map