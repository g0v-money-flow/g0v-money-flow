(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+BvF":function(e,t,i){e.exports={mainContentWrapper:"landing_page-module--mainContentWrapper--1hgJR",landingImgDesktop:"landing_page-module--landingImgDesktop--1j9zZ",landingImgMobile:"landing_page-module--landingImgMobile--2JQA8",titleBlockWrapper:"landing_page-module--titleBlockWrapper--2ok-D",titleWrapper:"landing_page-module--titleWrapper--atTK8",desktopHeading:"landing_page-module--desktopHeading--3nTHD",mobileHeading:"landing_page-module--mobileHeading--1mGKu",navBtnsWrapper:"landing_page-module--navBtnsWrapper--2VslT",subtitle:"landing_page-module--subtitle--2GT5h",coinImage:"landing_page-module--coinImage--2N7Tc",informationsWrapper:"landing_page-module--informationsWrapper--QcVri",leftColumn:"landing_page-module--leftColumn--3yELz",newsBlock:"landing_page-module--newsBlock--1KdxQ",g0vLink:"landing_page-module--g0vLink--2eMz7",watchoutLink:"landing_page-module--watchoutLink--2yD7E"}},"3nLz":function(e,t,i){"use strict";i("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,i){"use strict";i("rzGZ"),i("Dq+y"),i("8npG"),i("YbXK"),i("eMsz"),i("zTTH"),i("3nLz");var a=i("5NKs");t.__esModule=!0,t.default=void 0;var n,r=a(i("v06X")),s=a(i("XEEL")),u=a(i("uDP2")),o=a(i("j8BX")),L=a(i("q1tI")),M=a(i("17x9")),d=function(e){var t=(0,o.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},l=function(e){var t=e.media;return!!t&&(m&&!!window.matchMedia(t).matches)},c=function(e){var t=e.fluid,i=e.fixed;return g(t||i).src},g=function(e){if(m&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(l);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},j=Object.create({}),f=function(e){var t=d(e),i=c(t);return j[i]||!1},w="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,C=m&&window.IntersectionObserver,y=new WeakMap;function p(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return L.default.createElement(L.default.Fragment,{key:t},a&&L.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:r}),L.default.createElement("source",{media:n,srcSet:i,sizes:r}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return L.default.createElement("source",{key:t,media:i,srcSet:a})}))}function N(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return L.default.createElement("source",{key:t,media:i,srcSet:a})}))}function h(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var T=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),y.set(e,t)),function(){i.unobserve(e),y.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",L=e.loading?'loading="'+e.loading+'" ':"",M=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?h(e,!0):"")+h(e)})).join("")+"<img "+L+s+u+i+a+t+r+n+o+M+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,r=e.ariaHidden,s=L.default.createElement(D,(0,o.default)({src:t},n,{ariaHidden:r}));return i.length>1?L.default.createElement("picture",null,a(i),s):s},D=L.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,r=e.style,s=e.onLoad,M=e.onError,d=e.loading,l=e.draggable,c=e.ariaHidden,g=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return L.default.createElement("img",(0,o.default)({"aria-hidden":c,sizes:i,srcSet:a,src:n},g,{onLoad:s,onError:M,ref:t,loading:d,draggable:l,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));D.propTypes={style:M.default.object,onError:M.default.func,onLoad:M.default.func};var x=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=m&&f(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!w&&C&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||m&&(w||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=L.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)(i)),i.handleRef=i.handleRef.bind((0,r.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=T(e,(function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=d(e),i=c(t),j[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=d(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,u=void 0===s?{}:s,M=e.placeholderStyle,l=void 0===M?{}:M,c=e.placeholderClassName,j=e.fluid,f=e.fixed,w=e.backgroundColor,m=e.durationFadeIn,C=e.Tag,y=e.itemProp,S=e.loading,h=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,b=(0,o.default)({opacity:T?1:0,transition:x?"opacity "+m+"ms":"none"},u),z="boolean"==typeof w?"lightgray":w,k={transitionDelay:m+"ms"},Z=(0,o.default)({opacity:this.state.imgLoaded?0:1},x&&k,{},u,{},l),v={title:t,alt:this.state.isVisible?"":i,style:Z,className:c,itemProp:y};if(j){var J=j,O=g(j);return L.default.createElement(C,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},L.default.createElement(C,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),z&&L.default.createElement(C,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&k)}),O.base64&&L.default.createElement(A,{ariaHidden:!0,src:O.base64,spreadProps:v,imageVariants:J,generateSources:N}),O.tracedSVG&&L.default.createElement(A,{ariaHidden:!0,src:O.tracedSVG,spreadProps:v,imageVariants:J,generateSources:I}),this.state.isVisible&&L.default.createElement("picture",null,p(J),L.default.createElement(D,{alt:i,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:b,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:h})),this.addNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:i,title:t,loading:S},O,{imageVariants:J}))}}))}if(f){var Y=f,Q=g(f),W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},r);return"inherit"===r.display&&delete W.display,L.default.createElement(C,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},z&&L.default.createElement(C,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:z,width:Q.width,opacity:this.state.imgLoaded?0:1,height:Q.height},x&&k)}),Q.base64&&L.default.createElement(A,{ariaHidden:!0,src:Q.base64,spreadProps:v,imageVariants:Y,generateSources:N}),Q.tracedSVG&&L.default.createElement(A,{ariaHidden:!0,src:Q.tracedSVG,spreadProps:v,imageVariants:Y,generateSources:I}),this.state.isVisible&&L.default.createElement("picture",null,p(Y),L.default.createElement(D,{alt:i,title:t,width:Q.width,height:Q.height,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:b,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:h})),this.addNoScript&&L.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,o.default)({alt:i,title:t,loading:S},Q,{imageVariants:Y}))}}))}return null},t}(L.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var b=M.default.shape({width:M.default.number.isRequired,height:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string,media:M.default.string}),z=M.default.shape({aspectRatio:M.default.number.isRequired,src:M.default.string.isRequired,srcSet:M.default.string.isRequired,sizes:M.default.string.isRequired,base64:M.default.string,tracedSVG:M.default.string,srcWebp:M.default.string,srcSetWebp:M.default.string,media:M.default.string});x.propTypes={resolutions:b,sizes:z,fixed:M.default.oneOfType([b,M.default.arrayOf(b)]),fluid:M.default.oneOfType([z,M.default.arrayOf(z)]),fadeIn:M.default.bool,durationFadeIn:M.default.number,title:M.default.string,alt:M.default.string,className:M.default.oneOfType([M.default.string,M.default.object]),critical:M.default.bool,crossOrigin:M.default.oneOfType([M.default.string,M.default.bool]),style:M.default.object,imgStyle:M.default.object,placeholderStyle:M.default.object,placeholderClassName:M.default.string,backgroundColor:M.default.oneOfType([M.default.string,M.default.bool]),onLoad:M.default.func,onError:M.default.func,onStartLoad:M.default.func,Tag:M.default.string,itemProp:M.default.string,loading:M.default.oneOf(["auto","lazy","eager"]),draggable:M.default.bool};var k=x;t.default=k},AyOd:function(e,t,i){},BC2n:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMTMgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMxMyAzMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBvbHlnb24gZmlsbD0iI0I5MjAyNSIgcG9pbnRzPSIyMjEuNCw2LjIgMjA0LjEsMjguMiAyMDguMiwyOC4yIDIyNS40LDYuMiAJCSIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxnPgoJCQkJPHBhdGggZmlsbD0iI0I5MjAyNSIgZD0iTTMwMi40LDE3LjJoLTI4LjljLTAuNCwwLTAuNy0wLjMtMC44LTAuN2MtMC4xLTAuNCwwLTEsMC0xLjdjMC0wLjMsMC0wLjUsMC0wLjcKCQkJCQljMC02LjIsNC4xLTEwLjQsMTAuMy0xMC40YzQuNywwLDguMywyLjQsMTAsNi41YzEuMS0xLjUsMi43LTIuMyw0LjQtMi4zYzMuNCwwLDUuNywyLjMsNS43LDUuNnYyLjkKCQkJCQlDMzAzLjIsMTYuOSwzMDIuOCwxNy4yLDMwMi40LDE3LjJ6IE0yNzQuMiwxNS43aDI3LjR2LTIuMWMwLTIuOC0yLjEtNC4xLTQuMi00LjFjLTEuNywwLTMuMywxLjItMy45LDMKCQkJCQljLTAuMSwwLjMtMC40LDAuNS0wLjgsMC41Yy0wLjMsMC0wLjYtMC4yLTAuNy0wLjZDMjkxLDgsMjg3LjYsNS40LDI4Myw1LjRjLTUuMywwLTguOCwzLjUtOC44LDguOGMwLDAuMiwwLDAuNCwwLDAuNwoJCQkJCUMyNzQuMiwxNS4yLDI3NC4yLDE1LjQsMjc0LjIsMTUuN3oiLz4KCQkJPC9nPgoJCTwvZz4KCQk8Zz4KCQkJPGc+CgkJCQk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMzAwLjIsMjMuNGMtMi4xLDAtMy45LTEuNS00LjYtMy41Yy0xLjEsNC40LTQuNSw3LjctOS44LDcuN2MtNS40LDAtOS41LTMuNS05LjUtOS42CgkJCQkJYzAtMC42LTAuMS0xLjgsMC0yLjJoMjguOWMwLDEsMCwyLjEsMCwyLjlDMzA1LjIsMjEuNiwzMDMsMjMuNCwzMDAuMiwyMy40eiIvPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTE4OC4zLDEyYzQuMSwwLDcsMC42LDkuMSwxLjRWMTBjLTEuOC0wLjYtNC42LTEuMi05LTEuMmMtNS43LDAtOC40LDEuMS05LjcsMi41CgkJCWMtMS4yLDEuMi0xLjksMi45LTEuOSw1LjFzMC42LDMuOCwxLjksNS4xYzEuNCwxLjQsNCwyLjUsOS41LDIuNWM0LjQsMCw3LjItMC42LDguOC0yLjNjMC45LTAuOSwxLjQtMi4yLDEuNC00LjV2LTEuOWgtMTIuNHYyLjgKCQkJaDguN2MwLDAuMywwLDEuMS0wLjUsMS42Yy0wLjksMC45LTMuMSwxLjItNi4xLDEuMmMtMy42LDAtNS41LTAuNy02LjQtMS41Yy0wLjYtMC43LTEtMS42LTEtMi45YzAtMS4zLDAuNC0yLjMsMS4xLTMKCQkJQzE4Mi43LDEyLjcsMTg0LjYsMTIsMTg4LjMsMTJDMTg4LjMsMTIsMTg0LjYsMTIsMTg4LjMsMTJMMTg4LjMsMTJMMTg4LjMsMTJ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjUzLjcsOS40aC00LjZsLTcuNCwxMS4xbC03LjQtMTEuMWgtNC44bDkuNywxNGg0LjlsMCwwTDI1My43LDkuNEwyNTMuNyw5LjR6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjI0LjcsMTEuNGMtMS4zLTEuMy0zLjktMi41LTkuNS0yLjVjLTUuNCwwLTguMSwxLjItOS41LDIuNWMtMS4yLDEuMi0xLjksMi43LTEuOSw1czAuNywzLjgsMS45LDUKCQkJYzEuMywxLjMsNCwyLjUsOS41LDIuNWM1LjUsMCw4LjEtMS4yLDkuNS0yLjVjMS4yLTEuMiwxLjktMi43LDEuOS01QzIyNi41LDE0LjEsMjI1LjksMTIuNiwyMjQuNywxMS40eiBNMjE1LjIsMjAuOQoJCQljLTMuNiwwLTUuNS0wLjctNi4zLTEuNWMtMC42LTAuNi0xLjEtMS40LTEuMS0yLjlzMC40LTIuMywxLTNjMC44LTAuOCwyLjctMS41LDYuMy0xLjVzNS40LDAuNyw2LjMsMS41YzAuNywwLjcsMS4xLDEuNCwxLjEsMwoJCQlzLTAuNCwyLjMtMSwzQzIyMC42LDIwLjMsMjE4LjgsMjAuOSwyMTUuMiwyMC45eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEyLjksMTkuMnY1LjVIOS4xVjguNWg2LjRjMS4yLDAsMi4zLDAuMiwzLjMsMC43YzAuOSwwLjUsMS43LDEuMSwyLjIsMS45czAuOCwxLjgsMC44LDIuOQoJCQljMCwxLjYtMC42LDIuOC0xLjcsMy44cy0yLjcsMS40LTQuNiwxLjRIMTIuOXogTTEyLjksMTYuMmgyLjVjMC44LDAsMS4zLTAuMiwxLjctMC42YzAuNC0wLjQsMC42LTAuOSwwLjYtMS42CgkJCWMwLTAuOC0wLjItMS40LTAuNi0xLjhjLTAuNC0wLjUtMS0wLjctMS43LTAuN2gtMi42VjE2LjJ6Ii8+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTM4LjYsMTYuOWMwLDEuNi0wLjMsMy0wLjksNC4yYy0wLjYsMS4yLTEuNCwyLjEtMi41LDIuOGMtMS4xLDAuNy0yLjMsMS0zLjcsMXMtMi42LTAuMy0zLjctMC45CgkJCWMtMS4xLTAuNi0xLjktMS41LTIuNS0yLjdjLTAuNi0xLjItMC45LTIuNS0wLjktNHYtMC45YzAtMS42LDAuMy0zLDAuOS00LjJjMC42LTEuMiwxLjQtMi4xLDIuNS0yLjhjMS4xLTAuNywyLjMtMSwzLjctMQoJCQljMS40LDAsMi42LDAuMywzLjcsMWMxLjEsMC43LDEuOSwxLjYsMi41LDIuOGMwLjYsMS4yLDAuOSwyLjYsMC45LDQuMVYxNi45eiBNMzQuNywxNi4yYzAtMS42LTAuMy0yLjgtMC44LTMuNgoJCQljLTAuNS0wLjgtMS4zLTEuMi0yLjMtMS4yYy0xLjksMC0zLDEuNS0zLjEsNC40bDAsMS4yYzAsMS42LDAuMywyLjgsMC44LDMuNmMwLjUsMC44LDEuMywxLjMsMi4zLDEuM2MxLDAsMS43LTAuNCwyLjMtMS4zCgkJCXMwLjgtMiwwLjgtMy42VjE2LjJ6Ii8+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTU0LjIsMTguNmwxLjgtMTAuMWgzLjlsLTMuNCwxNi4xaC00bC0yLjItOS4ybC0yLjEsOS4yaC00TDQwLjgsOC41aDMuOWwxLjgsMTAuMWwyLjItMTAuMUg1Mkw1NC4yLDE4LjZ6CgkJCSIvPgoJCTxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik03Mi42LDE3LjhoLTYuMXYzLjloNy4ydjNINjIuNlY4LjVoMTEuMXYzaC03LjJ2My40aDYuMVYxNy44eiIvPgoJCTxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik04Mi40LDE4LjloLTIuMXY1LjdoLTMuOVY4LjVoNi4zYzEuOSwwLDMuNCwwLjQsNC41LDEuM2MxLjEsMC44LDEuNiwyLDEuNiwzLjZjMCwxLjEtMC4yLDItMC43LDIuOAoJCQljLTAuNSwwLjctMS4yLDEuMy0yLjEsMS44bDMuNCw2LjV2MC4yaC00LjJMODIuNCwxOC45eiBNODAuMywxNS45aDIuNWMwLjcsMCwxLjMtMC4yLDEuNy0wLjZzMC42LTAuOSwwLjYtMS42CgkJCWMwLTAuNy0wLjItMS4yLTAuNi0xLjZjLTAuNC0wLjQtMC45LTAuNi0xLjctMC42aC0yLjVWMTUuOXoiLz4KCQk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTAyLjQsMTcuOGgtNi4xdjMuOWg3LjJ2M0g5Mi40VjguNWgxMS4xdjNoLTcuMnYzLjRoNi4xVjE3Ljh6Ii8+CgkJPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTEwNi4yLDI0LjZWOC41aDUuMmMxLjQsMCwyLjcsMC4zLDMuOCwxYzEuMSwwLjYsMiwxLjYsMi43LDIuN3MxLDIuNSwxLDR2MC43YzAsMS41LTAuMywyLjgtMC45LDQKCQkJYy0wLjYsMS4yLTEuNSwyLjEtMi42LDIuN2MtMS4xLDAuNy0yLjQsMS0zLjgsMUgxMDYuMnogTTExMC4xLDExLjV2MTAuMWgxLjRjMS4xLDAsMi0wLjQsMi42LTEuMmMwLjYtMC44LDAuOS0yLDAuOS0zLjV2LTAuNwoJCQljMC0xLjYtMC4zLTIuNy0wLjktMy41Yy0wLjYtMC44LTEuNS0xLjItMi42LTEuMkgxMTAuMXoiLz4KCQk8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTI4LjgsMjQuNlY4LjVoNS44YzIuMSwwLDMuNywwLjQsNC43LDEuMWMxLjEsMC44LDEuNiwxLjksMS42LDMuM2MwLDAuOC0wLjIsMS41LTAuNiwyLjFzLTAuOSwxLTEuNywxLjMKCQkJYzAuOCwwLjIsMS41LDAuNiwxLjksMS4yczAuNywxLjMsMC43LDIuMmMwLDEuNi0wLjUsMi44LTEuNSwzLjZjLTEsMC44LTIuNSwxLjItNC40LDEuMkgxMjguOHogTTEzMi42LDE1LjJoMgoJCQljMC44LDAsMS41LTAuMiwxLjgtMC41czAuNS0wLjgsMC41LTEuM2MwLTAuNy0wLjItMS4yLTAuNi0xLjVjLTAuNC0wLjMtMS0wLjUtMS45LTAuNWgtMS45VjE1LjJ6IE0xMzIuNiwxNy44djMuOWgyLjUKCQkJYzAuNywwLDEuMi0wLjIsMS42LTAuNXMwLjYtMC44LDAuNi0xLjRjMC0xLjMtMC43LTItMi0ySDEzMi42eiIvPgoJCTxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xNDkuOCwxNS41bDMtN2g0LjJsLTUuMiwxMC4zdjUuOGgtMy45di01LjhsLTUuMi0xMC4zaDQuMkwxNDkuOCwxNS41eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},Bl7J:function(e,t,i){"use strict";i("3nLz");var a=i("DzdI"),n=i("q1tI"),r=i.n(n),s=i("Wbzz"),u=i("BC2n"),o=i.n(u),L=i("JSXE"),M=i.n(L),d=(i("E5k/"),i("9eSz")),l=i.n(d),c=(i("Xt7u"),function(e){var t=e.siteTitle,i=e.logoImage;return r.a.createElement("header",{style:{background:"#fcfcfc",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(s.Link,{to:"/",style:{color:"black",textDecoration:"none",height:"44px"}},r.a.createElement(l.a,{fixed:i,alt:t})))))});c.defaultProps={siteTitle:""};var g=c,j=(i("AyOd"),i("+BvF")),f=i.n(j);t.a=function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"3090882636",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{siteTitle:e.site.siteMetadata.title,logoImage:e.logoImage.childImageSharp.fixed}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1280,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",{className:f.a.footer},r.a.createElement("a",{href:"https://g0v.tw",className:f.a.g0vLink,target:"_blank"},r.a.createElement("img",{src:o.a})),r.a.createElement("a",{href:"https://watchout.tw",className:f.a.watchoutLink,target:"_blank"},r.a.createElement("img",{src:M.a})))))},data:a})}},DzdI:function(e){e.exports=JSON.parse('{"data":{"logoImage":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQY0wGVAWr+AAAAAAD/9rgUsohxX6FtXgkAAAAAjpd8IIqSeSCQooM0eHZnP2tiXxKNi5UrjImSP4aCilCLhY05bGJlMrmJiy6Rbm9OnG9xFaN6fEN7YmMhAP/apRzAm35qpYRvZax3ZWSTZFkggYx1JHp6akt9eWmEfHZneXJnXD+YoLMUjYyVYIJ8gnaCeoFNbWpuGKFzdFqBXl+IhGJjLJlydGp9ZWYnAMSjgzWykXdcpYFtj5d1ZWR9XFZEbm9jIXJuY1l2bWFseXRnbWtcTCaZp7grgYGIbo6JkRiCf4Zyc3+HFqh2eFOJZWael3FzJplxc2R5Xl8+AM2mhBLAmXxcpoRvfauQeHNmXlkadG5iMYmVe053d2hod3JlbXB1VRWXo68zhYiQeZmjsCyFhY16iH6EIZ12eGSNbG1so3ByMJxwcn98X19PANy4kCmxi3NhpoRvda+OdmSdhnEwd4JvRXl/bl53e2sydW5iVnN1ZWB+gYkdfn6FYY+apT18foRlWVxfE5pycxmGaGk+AAAAAJl2eD96Y2MiOOCt6xDZ46oAAAAASUVORK5CYII=","width":120,"height":32,"src":"/static/8d006bbe1534a30b9d5ef21884999881/16c7d/logoImage.png","srcSet":"/static/8d006bbe1534a30b9d5ef21884999881/16c7d/logoImage.png 1x,\\n/static/8d006bbe1534a30b9d5ef21884999881/e0491/logoImage.png 1.5x,\\n/static/8d006bbe1534a30b9d5ef21884999881/2b087/logoImage.png 2x"}}},"site":{"siteMetadata":{"title":"金流百科"}}}}')},JSXE:function(e,t,i){e.exports=i.p+"static/watchoutLogo-6599e84f364f254317007087f240c051.png"},R48M:function(e,t,i){var a=i("P8UN");a(a.S+a.F*!i("QPJK"),"Object",{defineProperty:i("rjfK").f})},SGlo:function(e,t,i){"use strict";var a=i("rj/q"),n=i("N+BI").getWeak,r=i("1a8y"),s=i("BjK0"),u=i("xa9o"),o=i("yde8"),L=i("Wadk"),M=i("qDzq"),d=i("O1i0"),l=L(5),c=L(6),g=0,j=function(e){return e._l||(e._l=new f)},f=function(){this.a=[]},w=function(e,t){return l(e.a,(function(e){return e[0]===t}))};f.prototype={get:function(e){var t=w(this,e);if(t)return t[1]},has:function(e){return!!w(this,e)},set:function(e,t){var i=w(this,e);i?i[1]=t:this.a.push([e,t])},delete:function(e){var t=c(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,i,r){var L=e((function(e,a){u(e,L,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=a&&o(a,i,e[r],e)}));return a(L.prototype,{delete:function(e){if(!s(e))return!1;var i=n(e);return!0===i?j(d(this,t)).delete(e):i&&M(i,this._i)&&delete i[this._i]},has:function(e){if(!s(e))return!1;var i=n(e);return!0===i?j(d(this,t)).has(e):i&&M(i,this._i)}}),L},def:function(e,t,i){var a=n(r(t),!0);return!0===a?j(e).set(t,i):a[e._i]=i,e},ufstore:j}},Xt7u:function(e,t,i){},eMsz:function(e,t,i){"use strict";var a,n=i("emib"),r=i("Wadk")(0),s=i("IYdN"),u=i("N+BI"),o=i("k5Iv"),L=i("SGlo"),M=i("BjK0"),d=i("O1i0"),l=i("O1i0"),c=!n.ActiveXObject&&"ActiveXObject"in n,g=u.getWeak,j=Object.isExtensible,f=L.ufstore,w=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(e){if(M(e)){var t=g(e);return!0===t?f(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return L.def(d(this,"WeakMap"),e,t)}},C=e.exports=i("94Pd")("WeakMap",w,m,L,!0,!0);l&&c&&(o((a=L.getConstructor(w,"WeakMap")).prototype,m),u.NEED=!0,r(["delete","has","get","set"],(function(e){var t=C.prototype,i=t[e];s(t,e,(function(t,n){if(M(t)&&!j(t)){this._f||(this._f=new a);var r=this._f[e](t,n);return"set"==e?this:r}return i.call(this,t,n)}))})))},"t+fG":function(e,t,i){var a=i("P8UN"),n=i("96qb"),r=i("ap2Z"),s=/"/g,u=function(e,t,i,a){var n=String(r(e)),u="<"+t;return""!==i&&(u+=" "+i+'="'+String(a).replace(s,"&quot;")+'"'),u+">"+n+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(u),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",i)}},zTTH:function(e,t,i){"use strict";var a=i("P8UN"),n=i("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("Dq1/")(r)}}]);
//# sourceMappingURL=commons-0bc2562b5ef0301aef57.js.map