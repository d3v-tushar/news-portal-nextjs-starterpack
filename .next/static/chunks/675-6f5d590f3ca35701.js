(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let i=r(8754),n=r(1757),o=n._(r(7294)),l=i._(r(2636)),a=r(6781),s=r(3735),u=r(3341);r(4210);let d=i._(r(7746)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function g(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,i,n,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function h(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:i,widthInt:n,qualityInt:l,className:a,imgStyle:s,blurStyle:u,isLazy:d,fetchPriority:c,fill:f,placeholder:g,loading:m,srcString:v,config:b,unoptimized:w,loader:y,onLoadRef:E,onLoadingCompleteRef:_,setBlurComplete:S,setShowAltText:C,onLoad:j,onError:x,...P}=e;return m=d?"lazy":m,o.default.createElement("img",{...P,...h(c),loading:m,width:n,height:i,decoding:"async","data-nimg":f?"fill":"1",className:a,style:{...s,...u},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,v,g,E,_,S,w))},[v,g,E,_,S,x,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,g,E,_,S,w)},onError:e=>{C(!0),"blur"===g&&S(!0),x&&x(e)}})}),v=(0,o.forwardRef)((e,t)=>{var r;let i,n,{src:p,sizes:v,unoptimized:b=!1,priority:w=!1,loading:y,className:E,quality:_,width:S,height:C,fill:j,style:x,onLoad:P,onLoadingComplete:k,placeholder:z="empty",blurDataURL:O,fetchPriority:M,layout:R,objectFit:I,objectPosition:N,lazyBoundary:A,lazyRoot:D,...F}=e,W=(0,o.useContext)(u.ImageConfigContext),B=(0,o.useMemo)(()=>{let e=c||W||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[W]),G=F.loader||d.default;delete F.loader;let T="__next_img_default"in G;if(T){if("custom"===B.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(R){"fill"===R&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let V="",q=g(S),J=g(C);if("object"==typeof(r=p)&&(f(r)||void 0!==r.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(i=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,V=e.src,!j){if(q||J){if(q&&!J){let t=q/e.width;J=Math.round(e.height*t)}else if(!q&&J){let t=J/e.height;q=Math.round(e.width*t)}}else q=e.width,J=e.height}}let L=!w&&("lazy"===y||void 0===y);(!(p="string"==typeof p?p:V)||p.startsWith("data:")||p.startsWith("blob:"))&&(b=!0,L=!1),B.unoptimized&&(b=!0),T&&p.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0),w&&(M="high");let[U,Y]=(0,o.useState)(!1),[H,$]=(0,o.useState)(!1),K=g(_),Q=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:N}:{},H?{}:{color:"transparent"},x),X="blur"===z&&O&&!U?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:q,heightInt:J,blurWidth:i,blurHeight:n,blurDataURL:O,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:B,src:p,unoptimized:b,width:q,quality:K,sizes:v,loader:G}),ee=p,et=(0,o.useRef)(P);(0,o.useEffect)(()=>{et.current=P},[P]);let er=(0,o.useRef)(k);(0,o.useEffect)(()=>{er.current=k},[k]);let ei={isLazy:L,imgAttributes:Z,heightInt:J,widthInt:q,qualityInt:K,className:E,imgStyle:Q,blurStyle:X,loading:y,config:B,fetchPriority:M,fill:j,unoptimized:b,placeholder:z,loader:G,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:Y,setShowAltText:$,...F};return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{...ei,ref:t}),w?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:F.crossOrigin,referrerPolicy:F.referrerPolicy,...h(M)})):null)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6781:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,a=i||t,s=n||r,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(i&&n?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5675:function(e,t,r){e.exports=r(3740)}}]);