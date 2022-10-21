"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4453],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,b=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,i={unversionedId:"cli-reference/kubectl-testkube_run_test",id:"cli-reference/kubectl-testkube_run_test",title:"kubectl-testkube_run_test",description:"kubectl-testkube run test",source:"@site/docs/5-cli-reference/kubectl-testkube_run_test.md",sourceDirName:"5-cli-reference",slug:"/cli-reference/kubectl-testkube_run_test",permalink:"/cli-reference/kubectl-testkube_run_test",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/5-cli-reference/kubectl-testkube_run_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubectl-testkube_run",permalink:"/cli-reference/kubectl-testkube_run"},next:{title:"kubectl-testkube_run_testsuite",permalink:"/cli-reference/kubectl-testkube_run_testsuite"}},l={},u=[{value:"kubectl-testkube run test",id:"kubectl-testkube-run-test",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kubectl-testkube-run-test"},"kubectl-testkube run test"),(0,a.kt)("p",null,"Starts new test"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Starts new test based on Test Custom Resource name, returns results to console"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl-testkube run test <testName> [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --args stringArray                           executor binary additional arguments\n      --concurrency int                            concurrency level for multiple test execution (default 10)\n      --copy-files stringArray                     file path mappings from host to pod of form source:destination\n  -d, --download-artifacts                         downlaod artifacts automatically\n      --download-dir string                        download dir (default "artifacts")\n      --env stringToString                         envs in a form of name1=val1 passed to executor (default [])\n      --execution-label stringToString             execution-label key value pair: --execution-label key1=value1 (default [])\n  -h, --help                                       help for test\n      --http-proxy string                          http proxy for executor containers\n      --https-proxy string                         https proxy for executor containers\n      --image string                               execution variable passed to executor\n      --iterations int                             how many times to run the test (default 1)\n  -l, --label strings                              label key value pair: --label key1=value1\n  -n, --name string                                execution name, if empty will be autogenerated\n      --secret stringToString                      secret envs in a form of secret_name1=secret_key1 passed to executor (default [])\n  -s, --secret-variable stringToString             execution secret variable passed to executor (default [])\n      --secret-variable-reference stringToString   secret variable references in a form name1=secret_name1=secret_key1 (default [])\n  -v, --variable stringToString                    execution variable passed to executor (default [])\n      --variables-file string                      variables file path, e.g. postman env file - will be passed to executor if supported\n  -f, --watch                                      watch for changes after start\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n      --verbose            show additional debug messages\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cli-reference/kubectl-testkube_run"},"kubectl-testkube run"),"\t - Runs tests or test suites")))}p.isMDXComponent=!0}}]);