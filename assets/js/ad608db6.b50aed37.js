"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},u=Object.keys(e);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),c=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||u;return n?s.createElement(g,a(a({ref:t},l),{},{components:n})):s.createElement(g,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<u;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const u={},a="Running Test Suites",o={unversionedId:"concepts/test-suites/testsuites-running",id:"concepts/test-suites/testsuites-running",title:"Running Test Suites",description:"To run your Tests Suites, pass the testsuites run command with the test name to your kubectl testkube plugin. Test Suites are started asynchronously by default.",source:"@site/docs/concepts/test-suites/testsuites-running.md",sourceDirName:"concepts/test-suites",slug:"/concepts/test-suites/testsuites-running",permalink:"/testkube/concepts/test-suites/testsuites-running",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/concepts/test-suites/testsuites-running.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Test Suites",permalink:"/testkube/concepts/test-suites/testsuites-creating"},next:{title:"Getting Results",permalink:"/testkube/concepts/test-suites/testsuites-getting-results"}},i={},c=[{value:"Running Testsuites Synchronously",id:"running-testsuites-synchronously",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-test-suites"},"Running Test Suites"),(0,r.kt)("p",null,"To run your Tests Suites, pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"testsuites run")," command with the test name to your ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl testkube")," plugin. Test Suites are started asynchronously by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run testsuite test-example\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"Name: test-example.fairly-humble-tick\nStatus: pending\n\n  STEP | STATUS | ID | ERROR\n+------+--------+----+-------+\n\n\n\nUse the following command to get test suite  execution details:\n$ kubectl testkube get tse 61e1136165e59a3183465125\n\n\nUse the following command to get test suite execution details:\n$ kubectl testkube watch tse 61e1136165e59a3183465125\n")),(0,r.kt)("p",null,"After the test is started, you can check the current status of the test with ",(0,r.kt)("inlineCode",{parentName:"p"},"tests execution EXECUTION_ID"),"."),(0,r.kt)("h2",{id:"running-testsuites-synchronously"},"Running Testsuites Synchronously"),(0,r.kt)("p",null,"You can start a testsuite synchronously by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag (like --follow) to your command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"testkube run testsuite test-example -f\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Expected output:"',title:'"Expected','output:"':!0},"\nName: test-example.equally-enabled-heron\nStatus: pending\n\n  STEP | STATUS | ID | ERROR\n+------+--------+----+-------+\n\n...\n\n\n             STEP            | STATUS  |            ID            | ERROR\n+----------------------------+---------+--------------------------+-------+\n  run test: testkube/test1 | success | 61e1142465e59a318346512d |\n\n\nName: test-example.equally-enabled-heron\nStatus: pending\n\n             STEP            | STATUS  |            ID            | ERROR\n+----------------------------+---------+--------------------------+-------+\n  run test: testkube/test1 | success | 61e1142465e59a318346512d |\n  delay 2000ms               | success |                          |\n\n\n...\n\n\nName: test-example.equally-enabled-heron\nStatus: success\n\n             STEP            | STATUS  |            ID            | ERROR\n+----------------------------+---------+--------------------------+-------+\n  run test: testkube/test1 | success | 61e1142465e59a318346512d |\n  delay 2000ms               | success |                          |\n  run test: testkube/test1 | success | 61e1142a65e59a318346512f |\n\n\n\nUse the following command to get test execution details:\n$ kubectl testkube get tse 61e1142465e59a318346512b\n``\xec\n")))}p.isMDXComponent=!0}}]);