"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[2982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=s,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:9,sidebar_label:"Test Triggers"},o="Test Triggers",i={unversionedId:"using-testkube/triggers",id:"using-testkube/triggers",title:"Test Triggers",description:"Testkube allows you to automate running tests and test suites by defining triggers on certain events for various",source:"@site/docs/3-using-testkube/triggers.md",sourceDirName:"3-using-testkube",slug:"/using-testkube/triggers",permalink:"/using-testkube/triggers",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/3-using-testkube/triggers.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Test Triggers"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/using-testkube/metrics"},next:{title:"Test Types",permalink:"/category/test-types"}},c={},l=[{value:"<strong>Architecture</strong>",id:"architecture",level:2},{value:"<strong>Model</strong>",id:"model",level:2},{value:"Schema",id:"schema",level:3},{value:"Example",id:"example",level:3},{value:"API",id:"api",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-triggers"},"Test Triggers"),(0,s.kt)("p",null,"Testkube allows you to automate running tests and test suites by defining triggers on certain events for various\nKubernetes resources."),(0,s.kt)("h2",{id:"architecture"},(0,s.kt)("strong",{parentName:"h2"},"Architecture")),(0,s.kt)("p",null,"Testkube uses ",(0,s.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/client-go/informers"},"Informers")," to watch Kubernetes resources and register handlers\non certain actions on the watched Kubernetes resources."),(0,s.kt)("p",null,"Informers are a reliable, scalable and fault-tolerant Kubernetes concept where each informer registers handlers with the\nKubernetes API and gets notified by Kubernetes on each event on the watched resources."),(0,s.kt)("h2",{id:"model"},(0,s.kt)("strong",{parentName:"h2"},"Model")),(0,s.kt)("h3",{id:"schema"},"Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v1\nkind: TestTrigger\nmetadata:\n  name: Kubernetes object name\n  namespace: Kubernetes object namespace\nspec:\n  resource: for which Resource do we monitor Event which triggers an Action\n  resourceSelector: resourceSelector identifies which Kubernetes objects should be watched\n  event: on which Event for a Resource should an Action be triggered\n  action: action represents what needs to be executed for selected execution\n  execution: execution identifies for which test execution should an action be executed\n  testSelector: testSelector identifies on which Testkube Kubernetes Objects an action should be taken\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"resourceSelector")," and ",(0,s.kt)("strong",{parentName:"p"},"testSelector")," support selecting resources by name or using\nKubernetes ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements"},"Label Selector")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"selector := resourceSelector | testSelector\n")),(0,s.kt)("p",null,"Selecting resources by name:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"selector:\n  name: Kubernetes object name\n  namespace: Kubernetes object namespace (default is **testkube**)\n")),(0,s.kt)("p",null,"Selecting resources using Label Selector:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'selector:\n  namespace: Kubernetes object namespace (default is **testkube**)\n  labelSelector:\n    matchLabels: map of key-value pairs\n    matchExpressions: "array of key: string, operator: string and values: []string objects"\n')),(0,s.kt)("p",null,"Supported values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"resource"),"  - pod, deployment, statefulset, daemonset, service, ingress, event"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"action"),"    - run"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"event"),"     - created, modified, deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"execution")," - test, testsuite")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE"),": All resources support the above-mentioned events, a list of finer-grained events is in the works, stay tuned..."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Here is an example which creates a test trigger with the name ",(0,s.kt)("strong",{parentName:"p"},"testtrigger-example")," in the ",(0,s.kt)("strong",{parentName:"p"},"default")," namespace for ",(0,s.kt)("strong",{parentName:"p"},"pods"),"\nthat have the ",(0,s.kt)("strong",{parentName:"p"},"testkube.io/tier: backend")," label which gets triggered on ",(0,s.kt)("strong",{parentName:"p"},"modified")," event and ",(0,s.kt)("strong",{parentName:"p"},"runs")," a ",(0,s.kt)("strong",{parentName:"p"},"testsuite"),"\nidentified by the name ",(0,s.kt)("strong",{parentName:"p"},"sanity-test")," in the ",(0,s.kt)("strong",{parentName:"p"},"frontend")," namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: tests.testkube.io/v1\nkind: TestTrigger\nmetadata:\n  name: testtrigger-example\n  namespace: default\nspec:\n  resource: pod\n  resourceSelector:\n    labelSelector:\n      matchLabels:\n        testkube.io/tier: backend\n  event: modified\n  action: run\n  execution: testsuite\n  testSelector:\n    name: sanity-test\n    namespace: frontend\n")),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("p",null,"Testkube exposes CRUD operations on test triggers in the REST API. Check out the ",(0,s.kt)("a",{parentName:"p",href:"/openapi"},"Open API")," docs for more info."))}p.isMDXComponent=!0}}]);