"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||a;return n?s.createElement(m,r(r({ref:t},u),{},{components:n})):s.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,sidebar_label:"SoapUI"},r="SoapUI Tests",i={unversionedId:"test-types/executor-soapui",id:"test-types/executor-soapui",title:"SoapUI Tests",description:"Check out our blog post to follow tutorial steps to Learn how to run functional tests in Kubernetes with SoapUI and Testkube.",source:"@site/docs/4-test-types/executor-soapui.md",sourceDirName:"4-test-types",slug:"/test-types/executor-soapui",permalink:"/test-types/executor-soapui",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/4-test-types/executor-soapui.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"SoapUI"},sidebar:"tutorialSidebar",previous:{title:"Postman",permalink:"/test-types/executor-postman"},next:{title:"K6",permalink:"/test-types/executor-k6"}},c={},p=[{value:"<strong>Running a SoapUI Test</strong>",id:"running-a-soapui-test",level:2},{value:"<strong>Using Files as Input</strong>",id:"using-files-as-input",level:3},{value:"<strong>Using Strings as Input</strong>",id:"using-strings-as-input",level:3},{value:"<strong>Running the Tests</strong>",id:"running-the-tests",level:3},{value:"<strong>Using Parameters and Arguments in Your Tests</strong>",id:"using-parameters-and-arguments-in-your-tests",level:3},{value:"<strong>Reports, Plugins and Extensions</strong>",id:"reports-plugins-and-extensions",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"soapui-tests"},"SoapUI Tests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check out our ",(0,o.kt)("a",{parentName:"strong",href:"https://kubeshop.io/blog/run-kubernetes-tests-with-soapui-and-testkube"},"blog post")," to follow tutorial steps to Learn how to run functional tests in Kubernetes with SoapUI and Testkube.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.soapui.org"},"SoapUI")," is an open-source tool used for end-to-end testing of REST, SOAP and GraphQL APIs, as well as JMS, JDBC and other web services. Testkube supports the SoapUI executor implementation."),(0,o.kt)("h2",{id:"running-a-soapui-test"},(0,o.kt)("strong",{parentName:"h2"},"Running a SoapUI Test")),(0,o.kt)("p",null,"In order to run a SoapUI test using Testkube, begin by creating a Testkube Test."),(0,o.kt)("p",null,"An example of an exported SoapUI test looks the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<con:soapui-project xmlns:con="http://eviware.com/soapui/config" id="68931eeb-521d-4870-972f-9d0f99c75cc2" activeEnvironment="Default" name="Testkube project" resourceRoot="${projectDir}" soapui-version="5.7.0" abortOnError="false" runType="SEQUENTIAL">\n   <con:settings>\n      <con:setting id="com.smartbear.swagger.ExportSwaggerAction$FormBase Path" />\n      <con:setting id="com.smartbear.swagger.ExportSwaggerAction$FormTarget File" />\n      <con:setting id="com.smartbear.swagger.ExportSwaggerAction$FormFormat">json</con:setting>\n      <con:setting id="com.smartbear.swagger.ExportSwaggerAction$FormAPI Version">Swagger 2.0</con:setting>\n      <con:setting id="com.smartbear.swagger.ExportSwaggerAction$FormSwagger Version">Swagger 2.0</con:setting>\n   </con:settings>\n   <con:interface xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="con:RestService" id="4bcedf3f-ac64-4f45-9615-7d58b15b9ca1" wadlVersion="http://wadl.dev.java.net/2009/02" name="https://kubeshop.io" type="rest">\n      <con:settings />\n      <con:definitionCache type="TEXT" rootPart="" />\n      <con:endpoints>\n         <con:endpoint>https://kubeshop.io</con:endpoint>\n      </con:endpoints>\n      <con:resource name="" path="" id="538412a5-540d-4772-aca8-2b19e456af77">\n         <con:settings />\n         <con:parameters />\n         <con:method name="1" id="fa5cf353-bafd-4aa1-9fa6-301d0d5c6e95" method="GET">\n            <con:settings />\n            <con:parameters />\n            <con:representation type="RESPONSE">\n               <con:mediaType>text/html</con:mediaType>\n               <con:status>200</con:status>\n               <con:params />\n               <con:element>html</con:element>\n            </con:representation>\n            <con:representation type="RESPONSE">\n               <con:mediaType>application/json</con:mediaType>\n               <con:status>200</con:status>\n               <con:params />\n               <con:element xmlns:pet="https://kubeshop.io/">pet:Response</con:element>\n            </con:representation>\n            <con:representation type="RESPONSE">\n               <con:mediaType>text/html; charset=utf-8</con:mediaType>\n               <con:status>200</con:status>\n               <con:params />\n               <con:element>html</con:element>\n            </con:representation>\n            <con:request name="Request 1" id="e5ee1b97-e7a5-4fd0-9ecd-6671558f25bc" mediaType="application/json">\n               <con:settings>\n                  <con:setting id="com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers">&lt;xml-fragment/&gt;</con:setting>\n               </con:settings>\n               <con:endpoint>https://kubeshop.io</con:endpoint>\n               <con:request />\n               <con:originalUri>https://kubeshop.io/</con:originalUri>\n               <con:credentials>\n                  <con:authType>No Authorization</con:authType>\n               </con:credentials>\n               <con:jmsConfig JMSDeliveryMode="PERSISTENT" />\n               <con:jmsPropertyConfig />\n               <con:parameters />\n            </con:request>\n         </con:method>\n      </con:resource>\n   </con:interface>\n   <con:testSuite id="d01755ab-653a-42e9-82ef-97ffea557480" name="Testkube TestSuite">\n      <con:settings />\n      <con:runType>SEQUENTIAL</con:runType>\n      <con:testCase id="8803628b-cc8d-4aaa-bbba-e1bc878f202b" failOnError="true" failTestCaseOnErrors="true" keepSession="false" maxResults="0" name="Kubeshop TestCase" searchProperties="true">\n         <con:settings />\n         <con:testStep type="restrequest" name="1 - Request 1" id="00e86b82-8ef2-483f-837b-7669bebe3c87">\n            <con:settings />\n            <con:config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="https://kubeshop.io" resourcePath="" methodName="1" xsi:type="con:RestRequestStep">\n               <con:restRequest name="1 - Request 1" id="e5ee1b97-e7a5-4fd0-9ecd-6671558f25bc" mediaType="application/json">\n                  <con:settings>\n                     <con:setting id="com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers">&lt;xml-fragment/&gt;</con:setting>\n                  </con:settings>\n                  <con:endpoint>https://kubeshop.io</con:endpoint>\n                  <con:request />\n                  <con:originalUri>https://kubeshop.io</con:originalUri>\n                  <con:assertion type="Valid HTTP Status Codes" id="c88e07cf-dd80-4b11-b21d-7cad8474202b" name="Valid HTTP Status Codes">\n                     <con:configuration>\n                        <codes>200</codes>\n                     </con:configuration>\n                  </con:assertion>\n                  <con:assertion type="Simple Contains" id="7072dc46-6b93-43b4-b6bd-0464db7b249e" name="Contains">\n                     <con:configuration>\n                        <token>testkube</token>\n                        <ignoreCase>true</ignoreCase>\n                        <useRegEx>false</useRegEx>\n                     </con:configuration>\n                  </con:assertion>\n                  <con:credentials>\n                     <con:authType>No Authorization</con:authType>\n                  </con:credentials>\n                  <con:jmsConfig JMSDeliveryMode="PERSISTENT" />\n                  <con:jmsPropertyConfig />\n                  <con:parameters />\n               </con:restRequest>\n            </con:config>\n         </con:testStep>\n         <con:properties />\n      </con:testCase>\n      <con:testCase id="4c0fc01b-16db-41e9-9844-d4c2a88d27f2" failOnError="true" failTestCaseOnErrors="true" keepSession="false" maxResults="0" name="Testkube TestCase" searchProperties="true">\n         <con:settings />\n         <con:testStep type="restrequest" name="REST Request" id="e1be7e01-5d4d-424e-b2f9-7daf84aaafa9">\n            <con:settings />\n            <con:config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" service="https://kubeshop.io" methodName="1" resourcePath="" xsi:type="con:RestRequestStep">\n               <con:restRequest name="REST Request" id="191f16b4-cb04-4ffa-b8f9-da0e788c8262" mediaType="application/json">\n                  <con:settings>\n                     <con:setting id="com.eviware.soapui.impl.wsdl.WsdlRequest@request-headers">&lt;xml-fragment/&gt;</con:setting>\n                  </con:settings>\n                  <con:encoding>UTF-8</con:encoding>\n                  <con:endpoint>https://kubeshop.github.io/testkube/</con:endpoint>\n                  <con:request />\n                  <con:originalUri>https://kubeshop.io</con:originalUri>\n                  <con:assertion type="Simple Contains" id="d9497693-01e2-4e3e-8ce5-5a292f9b6e41" name="Contains">\n                     <con:configuration>\n                        <token>kubectl</token>\n                        <ignoreCase>false</ignoreCase>\n                        <useRegEx>false</useRegEx>\n                     </con:configuration>\n                  </con:assertion>\n                  <con:credentials>\n                     <con:authType>No Authorization</con:authType>\n                  </con:credentials>\n                  <con:jmsConfig JMSDeliveryMode="PERSISTENT" />\n                  <con:jmsPropertyConfig />\n                  <con:parameters />\n               </con:restRequest>\n            </con:config>\n         </con:testStep>\n         <con:properties />\n      </con:testCase>\n      <con:properties />\n   </con:testSuite>\n   <con:properties />\n   <con:wssContainer />\n   <con:oAuth2ProfileContainer />\n   <con:oAuth1ProfileContainer />\n   <con:sensitiveInformation />\n</con:soapui-project>\n')),(0,o.kt)("h3",{id:"using-files-as-input"},(0,o.kt)("strong",{parentName:"h3"},"Using Files as Input")),(0,o.kt)("p",null,"Testkube and the SoapUI executor accept a project file as input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube create test --file example-project.xml --type soapui/xml --name example-test\nTest created  / example-test \ud83e\udd47\n\n")),(0,o.kt)("h3",{id:"using-strings-as-input"},(0,o.kt)("strong",{parentName:"h3"},"Using Strings as Input")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat example-project.xml | kubectl testkube create test --type soapui/xml --name example-test-string\nTest created  / example-test-string \ud83e\udd47\n\n")),(0,o.kt)("h3",{id:"running-the-tests"},(0,o.kt)("strong",{parentName:"h3"},"Running the Tests")),(0,o.kt)("p",null,"To run the created test, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube run test example-test\n\nType          : soapui/xml\nName          : example-test\nExecution ID  : 624eedd443ed8485ae9289e2\nExecution name: illegally-credible-mouse\n\n\n\nTest execution started\n\nWatch test execution until complete:\n$ kubectl testkube watch execution 624eedd443ed8485ae9289e2\n\n\nUse following command to get test execution details:\n$ kubectl testkube get execution 624eedd443ed8485ae9289e2\n\n")),(0,o.kt)("h3",{id:"using-parameters-and-arguments-in-your-tests"},(0,o.kt)("strong",{parentName:"h3"},"Using Parameters and Arguments in Your Tests")),(0,o.kt)("p",null,"SoapUI lets you configure your test runs using different parameters. To see all available command line arguments, check the ",(0,o.kt)("a",{parentName:"p",href:"https://www.soapui.org/docs/test-automation/running-functional-tests/"},"official SoapUI docs"),"."),(0,o.kt)("p",null,"To use parameters when working with Testkube, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl testkube run")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," parameter."),(0,o.kt)("p",null,"An example would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube run test -f example-test --args '-I -c \"Testkube TestCase\"'\n\nType          : soapui/xml\nName          : successful-test\nExecution ID  : 625404e5a4cc6d2861193c60\nExecution name: currently-amused-pug\n\n\nGetting pod logs\nExecution completed ================================\n=\n= SOAPUI_HOME = /usr/local/SmartBear/SoapUI-5.7.0\n=\n================================\nSoapUI 5.7.0 TestCase Runner\n08:14:18,671 INFO  [DefaultSoapUICore] Creating new settings at [/root/soapui-settings.xml]\n08:14:27,457 INFO  [PluginManager] 0 plugins loaded in 11 ms\n08:14:27,459 INFO  [DefaultSoapUICore] All plugins loaded\n08:14:37,509 INFO  [WsdlProject] Loaded project from [file:/tmp/test-content2412821894]\n08:14:37,579 INFO  [SoapUITestCaseRunner] Running SoapUI tests in project [Testkube project]\n08:14:37,580 INFO  [SoapUITestCaseRunner] Running TestCase [Testkube TestCase]\n08:14:37,653 INFO  [SoapUITestCaseRunner] Running SoapUI testcase [Testkube TestCase]\n08:14:37,700 INFO  [SoapUITestCaseRunner] running step [REST Request]\n08:14:41,816 INFO  [SoapUITestCaseRunner] Assertion [Contains] has status VALID\n08:14:41,878 INFO  [SoapUITestCaseRunner] Finished running SoapUI testcase [Testkube TestCase], time taken: 866ms, status: FINISHED\n08:14:41,909 INFO  [SoapUITestCaseRunner] TestCase [Testkube TestCase] finished with status [FINISHED] in 866ms\n\n\n.\nUse the following command to get test execution details:\n$ kubectl testkube get execution 625404e5a4cc6d2861193c60\n")),(0,o.kt)("h2",{id:"reports-plugins-and-extensions"},(0,o.kt)("strong",{parentName:"h2"},"Reports, Plugins and Extensions")),(0,o.kt)("p",null,"In order to use reports, add the plugins and extensions as described in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.soapui.org/docs/test-automation/running-in-docker/"},"SoapUI docs"),". This is currently not supported by Testkube.\nIf you are interested in using this feature, please create an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube/issues"},"issue")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"Testkube repository"),"."))}l.isMDXComponent=!0}}]);