"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,k=p["".concat(u,".").concat(f)]||p[f]||b[f]||a;return r?n.createElement(k,c(c({ref:t},s),{},{components:r})):n.createElement(k,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},c=void 0,l={unversionedId:"cli-reference/kubectl-testkube_abort",id:"cli-reference/kubectl-testkube_abort",title:"kubectl-testkube_abort",description:"kubectl-testkube abort",source:"@site/docs/5-cli-reference/kubectl-testkube_abort.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_abort",permalink:"/cli-reference/kubectl-testkube_abort",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_abort.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube",permalink:"/cli-reference/kubectl-testkube"},next:{title:"kubectl-testkube_abort_execution",permalink:"/cli-reference/kubectl-testkube_abort_execution"}},u={},i=[{value:"kubectl-testkube abort",id:"kubectl-testkube-abort",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:i};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kubectl-testkube-abort"},"kubectl-testkube abort"),(0,o.kt)("p",null,"Abort tests or test suites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl-testkube abort <resourceName> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for abort\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-reference/kubectl-testkube"},"kubectl-testkube"),"\t - Testkube entrypoint for kubectl plugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-reference/kubectl-testkube_abort_execution"},"kubectl-testkube abort execution"),"\t - Aborts execution of the test")))}b.isMDXComponent=!0}}]);