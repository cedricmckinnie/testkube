"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const s={},a="FAQ",i={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"Frequently asked questions regarding your Testkube installation.",source:"@site/docs/13-FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/FAQ",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/13-FAQ.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secret Variables",permalink:"/Secrets"}},l={},u=[{value:"Why is the UI not working or does not return results?",id:"why-is-the-ui-not-working-or-does-not-return-results",level:3},{value:"Opening the Dashboard Using CLI Is Not Working",id:"opening-the-dashboard-using-cli-is-not-working",level:3},{value:"Access the Service Under Test(SUT) Using Testkube",id:"access-the-service-under-testsut-using-testkube",level:3}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"Frequently asked questions regarding your Testkube installation."),(0,o.kt)("h3",{id:"why-is-the-ui-not-working-or-does-not-return-results"},"Why is the UI not working or does not return results?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the API endpoint is configured:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.gif",src:r(6152).Z,width:"600",height:"341"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the endpoint is providing data, e.g. accessing the executors path:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl <endpoint>/v1/executors \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If no data is provided, make sure that all the Testkube components are running properly:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods -n testkube\nNAME                                                        READY   STATUS    RESTARTS   AGE\npod/testkube-api-server-8445fd7b9f-jq5rh                    1/1     Running   0          10d\npod/testkube-dashboard-99f4c6cf5-x4dkz                      1/1     Running   0          12d\npod/testkube-minio-testkube-76786f8f64-9nl4c                1/1     Running   1          24d\npod/testkube-mongodb-74587998bb-8pzl2                       1/1     Running   0          12d\npod/testkube-operator-controller-manager-77ffbb8fdc-rxhvx   2/2     Running   0          5d23h\n")),(0,o.kt)("h3",{id:"opening-the-dashboard-using-cli-is-not-working"},"Opening the Dashboard Using CLI Is Not Working"),(0,o.kt)("p",null,"If there is a timeout error reported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl-testkube dashboard\nchecking readiness of services (error: timed-out waiting for dashboard and api)\n")),(0,o.kt)("p",null,"Make sure that there is not another dashboard process running in the background like in the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ps aux | grep dashboard\nuser         76005   0.0  0.0 408628368   1648 s002  S+   12:32PM   0:00.00 grep dashboard\nuser         75985   0.0  0.1 409292320  43584 s001  S+   12:32PM   0:00.12 kubectl port-forward --namespace testkube deployment/testkube-dashboard 8080:8080\nuser         75984   0.0  0.1 409263376  37488 s001  S+   12:32PM   0:00.22 testkube dashboard\n")),(0,o.kt)("p",null,"Also, there might be some other process listening on the same port. To debug this, try port-forwarding manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward svc/testkube-dashboard 8080\nkubectl port-forward svc/testkube-api-server 8088\n")),(0,o.kt)("p",null,"Check for errors and try accessing:\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8081/apiEndpoint?apiEndpoint=localhost:8088/v1"},"http://localhost:8081/apiEndpoint?apiEndpoint=localhost:8088/v1")),(0,o.kt)("p",null,"If you see errors like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Unable to listen on port 8080: Listeners failed to create with the following errors: [unable to create listener: Error listen tcp4 127.0.0.1:8080: bind: address already in use unable to create listener: Error listen tcp6 [::1]:8080: bind: address already in use]\nerror: unable to listen on any of the requested ports: [{8080 8080}]\n")),(0,o.kt)("p",null,"Please stop the application that listens on 8080, 8088 ports."),(0,o.kt)("h3",{id:"access-the-service-under-testsut-using-testkube"},"Access the Service Under Test(SUT) Using Testkube"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Services inside the same Kubernetes cluster can be accessed using the address \\<service-name",">",".\\<service-namespace",">",".svc.cluster.local:\\<port-number",">",". If there are network restrictions configured, Testkube will need permissions to access the SUT over the local network of the cluster."),(0,o.kt)("li",{parentName:"ul"},"If Testkube and the SUT are not in the same cluster, SUT will have to be exposed to Testkube using an Ingress or a Load Balancer.")),(0,o.kt)("p",null,"If this does not solve the issue that you encountered or you have other questions or comments, please contact us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/6zupCZFQbe"},"Discord"),"."))}p.isMDXComponent=!0},6152:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/check-dashboard-api-endpoint-601b09015fecd56cd1da990480722a5a.gif"}}]);