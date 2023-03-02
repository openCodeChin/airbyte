"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[44031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Low-code connector development",l={unversionedId:"connector-development/config-based/low-code-cdk-overview",id:"connector-development/config-based/low-code-cdk-overview",title:"Low-code connector development",description:"Airbyte\u2019s low-code framework enables you to build source connectors for REST APIs via a connector builder UI or by modifying boilerplate YAML files via terminal or text editor.",source:"@site/../docs/connector-development/config-based/low-code-cdk-overview.md",sourceDirName:"connector-development/config-based",slug:"/connector-development/config-based/low-code-cdk-overview",permalink:"/connector-development/config-based/low-code-cdk-overview",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/config-based/low-code-cdk-overview.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Builder UI",permalink:"/connector-development/config-based/connector-builder-ui"},next:{title:"Getting Started",permalink:"/connector-development/config-based/tutorial/getting-started"}},c={},s=[{value:"Why low-code?",id:"why-low-code",level:2},{value:"API Connectors are common and formulaic",id:"api-connectors-are-common-and-formulaic",level:3},{value:"A declarative, low-code paradigm commoditizes solving formulaic problems",id:"a-declarative-low-code-paradigm-commoditizes-solving-formulaic-problems",level:3},{value:"What connectors can I build using the low-code framework?",id:"what-connectors-can-i-build-using-the-low-code-framework",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview of the process",id:"overview-of-the-process",level:2},{value:"Connector Builder UI",id:"connector-builder-ui",level:2},{value:"Configuring the YAML file",id:"configuring-the-yaml-file",level:2},{value:"Tutorial",id:"tutorial",level:2},{value:"Sample connectors",id:"sample-connectors",level:2}],d={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"low-code-connector-development"},"Low-code connector development"),(0,r.kt)("p",null,"Airbyte\u2019s low-code framework enables you to build source connectors for REST APIs via a ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/connector-builder-ui"},"connector builder UI")," or by modifying boilerplate YAML files via terminal or text editor."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Developer updates will be announced via our #using-the-cdk Slack channel. If you are using the CDK, please join to stay up to date on changes and issues. ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The low-code framework is in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/project-overview/product-release-stages/#alpha"},"alpha"),", which means it\u2019s still in active development and may include backward-incompatible changes. Share feedback and requests with us on our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.com/"},"Slack channel")," or email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:feedback@airbyte.io"},"feedback@airbyte.io"))),(0,r.kt)("h2",{id:"why-low-code"},"Why low-code?"),(0,r.kt)("h3",{id:"api-connectors-are-common-and-formulaic"},"API Connectors are common and formulaic"),(0,r.kt)("p",null,"In building and maintaining hundreds of connectors at Airbyte, we've observed that whereas API source connectors constitute the overwhelming majority of connectors, they are also the most formulaic. API connector code almost always solves small variations of these problems: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Making requests to various endpoints under the same API URL e.g: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://api.stripe.com/customers"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https://api.stripe.com/transactions"),", etc.. "),(0,r.kt)("li",{parentName:"ol"},"Authenticating using a common auth strategy such as Oauth or API keys"),(0,r.kt)("li",{parentName:"ol"},"Pagination using one of the 4 ubiquitous pagination strategies: limit-offset, page-number, cursor pagination, and header link pagination"),(0,r.kt)("li",{parentName:"ol"},"Gracefully handling rate limiting by implementing exponential backoff, fixed-time backoff, or variable-time backoff"),(0,r.kt)("li",{parentName:"ol"},"Describing the schema of the data returned by the API, so that downstream warehouses can create normalized tables"),(0,r.kt)("li",{parentName:"ol"},"Decoding the format of the data returned by the API (e.g JSON, XML, CSV, etc..) and handling compression (GZIP, BZIP, etc..) "),(0,r.kt)("li",{parentName:"ol"},"Supporting incremental data exports by remembering what data was already synced, usually using date-based cursors")),(0,r.kt)("p",null,"and so on. "),(0,r.kt)("h3",{id:"a-declarative-low-code-paradigm-commoditizes-solving-formulaic-problems"},"A declarative, low-code paradigm commoditizes solving formulaic problems"),(0,r.kt)("p",null,"Given that these problems each have a very finite number of solutions, we can remove the need for writing the code to build these API connectors by providing configurable off-the-shelf components to solve them. In doing so, we significantly decrease development effort and bugs while improving maintainability and accessibility. In this paradigm, instead of having to write the exact lines of code to solve this problem over and over, a developer can pick the solution to each problem from an available component, and rely on the framework to run the logic for them. "),(0,r.kt)("h2",{id:"what-connectors-can-i-build-using-the-low-code-framework"},"What connectors can I build using the low-code framework?"),(0,r.kt)("p",null,"Refer to the REST API documentation for the source you want to build the connector for and answer the following questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the REST API documentation show which HTTP method to use to retrieve data, and that the response is a JSON object?"),(0,r.kt)("li",{parentName:"ul"},"Do the queries return data synchronously?"),(0,r.kt)("li",{parentName:"ul"},"Does the API support any of the following pagination mechanisms:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Offset count passed either by query params or request header"),(0,r.kt)("li",{parentName:"ul"},"Page count passed either by query params or request header"),(0,r.kt)("li",{parentName:"ul"},"Cursor field pointing to the URL of the next page of records"))),(0,r.kt)("li",{parentName:"ul"},"Does the API support any of the following authentication mechanisms:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/config-based/understanding-the-yaml-file/authentication#apikeyauthenticator"},"A query param or a HTTP header")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/config-based/understanding-the-yaml-file/authentication#basichttpauthenticator"},"Basic Auth over HTTPS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/connector-development/config-based/understanding-the-yaml-file/authentication#oauth"},"OAuth 2.0")))),(0,r.kt)("li",{parentName:"ul"},"Does the API support static schema?"),(0,r.kt)("li",{parentName:"ul"},"Does the endpoint have a strict rate limit?\nThrottling is not supported, but the connector can use exponential backoff to avoid API bans in case it gets rate limited. This can work for APIs with high rate limits, but not for those that have strict limits on a small time-window."),(0,r.kt)("li",{parentName:"ul"},"Are the following features sufficient:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource type"),(0,r.kt)("td",{parentName:"tr",align:null},"Collections",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/partition-router#SubstreamPartitionRouter"},"Sub-collection"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Full refresh",(0,r.kt)("br",null),"Incremental")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema discovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Static schemas")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/incremental-syncs"},"Incremental syncs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/incremental-syncs#DatetimeBasedCursor"},"Sync checkpointing by date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/partition-router"},"Partition routing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/partition-router#ListPartitionRouter"},"lists"),", ",(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/partition-router#SubstreamPartitionRouter"},"parent-resource id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector"},"Record transformation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector#selecting-a-field"},"Field selection"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector#adding-fields"},"Adding fields"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector#removing-fields"},"Removing fields"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/record-selector#filtering-records"},"Filtering records"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling"},"Error detection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#from-status-code"},"From HTTP status  code"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#from-error-message"},"From error message"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#Backoff-Strategies"},"Backoff strategies")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#Exponential-backoff"},"Exponential"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#Constant-Backoff"},"Constant"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"/connector-development/config-based/understanding-the-yaml-file/error-handling#Wait-time-defined-in-header"},"Derived from headers"))))),(0,r.kt)("p",null,"If the answer to all questions is yes, you can use the low-code framework to build a connector for the source. If not, use the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/"},"Python CDK"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An API key for the source you want to build a connector for"),(0,r.kt)("li",{parentName:"ul"},"Python >= 3.9"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"NodeJS")),(0,r.kt)("h2",{id:"overview-of-the-process"},"Overview of the process"),(0,r.kt)("p",null,"To use the low-code framework to build an REST API Source connector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate the API key or credentials for the source you want to build a connector for"),(0,r.kt)("li",{parentName:"ol"},"Set up the project on your local machine"),(0,r.kt)("li",{parentName:"ol"},"Set up your local development environment"),(0,r.kt)("li",{parentName:"ol"},"Use the connector builder UI to define the connector YAML manifest and test the connector"),(0,r.kt)("li",{parentName:"ol"},"Specify stream schemas"),(0,r.kt)("li",{parentName:"ol"},"Add the connector to the Airbyte platform")),(0,r.kt)("p",null,"For a step-by-step tutorial, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/tutorial/getting-started"},"Getting Started tutorial")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/i7VSL2bDvmw"},"video tutorial")),(0,r.kt)("h2",{id:"connector-builder-ui"},"Connector Builder UI"),(0,r.kt)("p",null,"The main concept powering the lowcode connector framework is the Connector Manifest, a YAML file which describes the features and functionality of the connector. The structure of this YAML file is described in more detail ",(0,r.kt)("a",{parentName:"p",href:"./understanding-the-yaml-file/yaml-overview"},"here"),". "),(0,r.kt)("p",null,"We recommend iterating on this YAML file is via the ",(0,r.kt)("a",{parentName:"p",href:"./connector-builder-ui"},"connector builder UI")," as it makes it easy to inspect and debug your connector in greater detail than you would be able to through the commandline. While you can still iterate via the commandline (and the docs contain instructions for how to do it), we're investing heavily in making the UI give you iteration superpowers, so we recommend you check it out!"),(0,r.kt)("h2",{id:"configuring-the-yaml-file"},"Configuring the YAML file"),(0,r.kt)("p",null,"The low-code framework involves editing a boilerplate YAML file. The general structure of the YAML file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'version: "0.1.0"\ndefinitions:\n  <key-value pairs defining objects which will be reused in the YAML connector>\nstreams:\n  <list stream definitions>\ncheck:\n  <definition of connection checker>\nspec: \n  <connector spec>\n')),(0,r.kt)("p",null,"The following table describes the components of the YAML file:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the framework version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"definitions")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the objects to be reused in the YAML connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"streams")),(0,r.kt)("td",{parentName:"tr",align:null},"Lists the streams of the source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"check")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to test the connection to the source by trying to read a record from a specified list of streams and failing if no records could be read")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spec")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"../../understanding-airbyte/airbyte-protocol#actor-specification"},"connector specification")," which describes the required and optional parameters which can be input by the end user to configure this connector")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Streams define the schema of the data to sync, as well as how to read it from the underlying API source. A stream generally corresponds to a resource within the API. They are analogous to tables for a relational database source.")),(0,r.kt)("p",null,"For each stream, configure the following components:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Sub-component"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary key (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Used to uniquely identify records, enabling deduplication. Can be a string for single primary keys, a list of strings for composite primary keys, or a list of list of strings for composite primary keys consisting of nested fields")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schema"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the data to sync")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incremental sync"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the behavior of an incremental sync which enables checkpointing and replicating only the data that has changed since the last sync to a destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data retriever"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to retrieve data from the API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Requester"),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to prepare HTTP requests to send to the source API and defines the base URL and path, the request options provider, the HTTP method, authenticator, error handler components")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pagination"),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to navigate through the API's pages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Record Selector"),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to extract records from a HTTP response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Partition Router"),(0,r.kt)("td",{parentName:"tr",align:null},"Describes how to partition the stream, enabling incremental syncs and checkpointing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cursor field"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Field to use as stream cursor. Can either be a string, or a list of strings if the cursor is a nested field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformations"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A set of transformations to be applied on the records read from the source before emitting them to the destination")))),(0,r.kt)("p",null,"For a deep dive into each of the components, refer to ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/config-based/understanding-the-yaml-file/yaml-overview"},"Understanding the YAML file")," or the ",(0,r.kt)("a",{target:"_blank",href:n(29631).Z},"full YAML Schema definition")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"This section a tutorial that will guide you through the end-to-end process of implementing a low-code connector."),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/getting-started"},"Getting started")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/create-source"},"Creating a source")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/install-dependencies"},"Installing dependencies")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/connecting-to-the-API-source"},"Connecting to the API")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/reading-data"},"Reading data")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/incremental-reads"},"Incremental reads")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/connector-development/config-based/tutorial/testing"},"Testing"))),(0,r.kt)("h2",{id:"sample-connectors"},"Sample connectors"),(0,r.kt)("p",null,"For examples of production-ready config-based connectors, refer to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-greenhouse/source_greenhouse/manifest.yaml"},"Greenhouse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-sendgrid/source_sendgrid/manifest.yaml"},"Sendgrid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-sentry/source_sentry/manifest.yaml"},"Sentry"))))}m.isMDXComponent=!0},29631:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/declarative_component_schema-32e91eb96a8f78b8e0d6d29e5e65cb3e.yaml"}}]);