"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1085],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(u,l(l({ref:e},p),{},{components:a})):n.createElement(u,l({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40816:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="Source Acceptance Tests Reference",o={unversionedId:"connector-development/testing-connectors/source-acceptance-tests-reference",id:"connector-development/testing-connectors/source-acceptance-tests-reference",title:"Source Acceptance Tests Reference",description:"To ensure a minimum quality bar, Airbyte runs all connectors against the same set of integration tests \\(sources & destinations have two different test suites\\). Those tests ensure that each connector adheres to the Airbyte Specification and responds correctly to Airbyte commands when provided valid \\(or invalid\\) inputs.",source:"@site/../docs/connector-development/testing-connectors/source-acceptance-tests-reference.md",sourceDirName:"connector-development/testing-connectors",slug:"/connector-development/testing-connectors/source-acceptance-tests-reference",permalink:"/connector-development/testing-connectors/source-acceptance-tests-reference",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/testing-connectors/source-acceptance-tests-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Testing Connectors",permalink:"/connector-development/testing-connectors/"},next:{title:"Connector Specification Reference",permalink:"/connector-development/connector-specification-reference"}},s={},d=[{value:"Architecture of standard tests",id:"architecture-of-standard-tests",level:2},{value:"Setting up standard tests for your connector",id:"setting-up-standard-tests-for-your-connector",level:2},{value:"Dynamically managing inputs &amp; resources used in standard tests",id:"dynamically-managing-inputs--resources-used-in-standard-tests",level:2},{value:"Python",id:"python",level:3},{value:"Test Spec",id:"test-spec",level:2},{value:"Test Connection",id:"test-connection",level:2},{value:"Test Discovery",id:"test-discovery",level:2},{value:"Test Basic Read",id:"test-basic-read",level:2},{value:"Schema format checking",id:"schema-format-checking",level:3},{value:"Example of <code>expected_records.txt</code>:",id:"example-of-expected_recordstxt",level:3},{value:"Test Full Refresh sync",id:"test-full-refresh-sync",level:2},{value:"TestSequentialReads",id:"testsequentialreads",level:3},{value:"Test Incremental sync",id:"test-incremental-sync",level:2},{value:"TestTwoSequentialReads",id:"testtwosequentialreads",level:3},{value:"TestReadSequentialSlices",id:"testreadsequentialslices",level:3},{value:"TestStateWithAbnormallyLargeValues",id:"teststatewithabnormallylargevalues",level:3}],p={toc:d};function c(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"source-acceptance-tests-reference"},"Source Acceptance Tests Reference"),(0,r.kt)("p",null,"To ensure a minimum quality bar, Airbyte runs all connectors against the same set of integration tests ","(","sources & destinations have two different test suites",")",". Those tests ensure that each connector adheres to the ",(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol"},"Airbyte Specification")," and responds correctly to Airbyte commands when provided valid ","(","or invalid",")"," inputs."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you are looking for reference documentation for the deprecated first version of test suites, see")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/e378d40236b6a34e1c1cb481c8952735ec687d88/docs/contributing-to-airbyte/building-new-connector/legacy-standard-source-tests.md"},(0,r.kt)("em",{parentName:"a"},"Standard Tests ","(","Legacy",")")),(0,r.kt)("em",{parentName:"p"},".")),(0,r.kt)("h2",{id:"architecture-of-standard-tests"},"Architecture of standard tests"),(0,r.kt)("p",null,"The Standard Test Suite runs its tests against the connector's Docker image. It takes as input the configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-tests-config.yml"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard test sequence diagram",src:a(5003).Z,width:"1178",height:"874"})),(0,r.kt)("p",null,"The Standard Test Suite use pytest as a test runner and was built as pytest plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"source-acceptance-test"),". This plugin adds a new configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2014acceptance-test-config")," - it should points to the folder with ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-tests-config.yml"),"."),(0,r.kt)("p",null,"Each test suite has a timeout and will fail if the limit is exceeded."),(0,r.kt)("p",null,"See all the test cases, their description, and inputs in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/e378d40236b6a34e1c1cb481c8952735ec687d88/docs/contributing-to-airbyte/building-new-connector/source-acceptance-tests.md"},"Source Acceptance Tests"),"."),(0,r.kt)("h2",{id:"setting-up-standard-tests-for-your-connector"},"Setting up standard tests for your connector"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),". In most cases, your connector already has this file in its root folder. Here is an example of the minimal ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'connector_image: airbyte/source-some-connector:dev\ntests:\n  spec:\n    - spec_path: "some_folder/spec.yaml"\n')),(0,r.kt)("p",null,"Build your connector image if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker build .\n")),(0,r.kt)("p",null,"Run one of the two scripts in the root of the connector:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pytest -p integration_tests.acceptance")," - to run tests inside virtual environment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On test completion, a log will be outputted to the terminal verifying:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The connector the tests were ran for "),(0,r.kt)("li",{parentName:"ul"},"The git hash of the code used "),(0,r.kt)("li",{parentName:"ul"},"Whether the tests passed or failed ")),"This is useful to provide in your PR as evidence of the acceptance tests passing locally."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./acceptance-test-docker.sh")," - to run tests from a docker container")),(0,r.kt)("p",null,"If the test fails you will see detail about the test and where to find its inputs and outputs to reproduce it. You can also debug failed tests by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2014pdb \u2014last-failed"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"python -m pytest -p integration_tests.acceptance --pdb --last-failed\n")),(0,r.kt)("p",null,"See other useful pytest options ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/usage.html"},"here")),(0,r.kt)("h2",{id:"dynamically-managing-inputs--resources-used-in-standard-tests"},"Dynamically managing inputs & resources used in standard tests"),(0,r.kt)("p",null,"Since the inputs to standard tests are often static, the file-based runner is sufficient for most connectors. However, in some cases, you may need to run pre or post hooks to dynamically create or destroy resources for use in standard tests. For example, if we need to spin up a Redshift cluster to use in the test then tear it down afterwards, we need the ability to run code before and after the tests, as well as customize the Redshift cluster URL we pass to the standard tests. If you have need for this use case, please reach out to us via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". We currently support it for Java & Python, and other languages can be made available upon request."),(0,r.kt)("h3",{id:"python"},"Python"),(0,r.kt)("p",null,"Create pytest yield-fixture with your custom setup/teardown code and place it in ",(0,r.kt)("inlineCode",{parentName:"p"},"integration_tests/acceptance.py"),", Example of fixture that starts a docker container before tests and stops before exit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@pytest.fixture(scope="session", autouse=True)\ndef connector_setup():\n    """ This fixture is a placeholder for external resources that acceptance test might require.\n    """\n    client = docker.from_env()\n    container = client.containers.run("your/docker-image", detach=True)\n    yield\n    container.stop()\n')),(0,r.kt)("p",null,"These tests are configurable via ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),". Each test has a number of inputs, you can provide multiple sets of inputs which will cause the same to run multiple times - one for each set of inputs."),(0,r.kt)("p",null,"Example of ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptance-test-config.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"connector_image: string  # Docker image to test, for example 'airbyte/source-hubspot:0.1.0'\nbase_path: string  # Base path for all relative paths, optional, default - ./\ntests:  # Tests configuration \n  spec: # list of the test inputs\n  connection: # list of the test inputs\n    - config_path: string  # set #1 of inputs\n      status: string\n    - config_path: string  # set #2 of inputs\n      status: string\n  # discovery:  # skip this test\n  incremental: []  # skip this test as well\n")),(0,r.kt)("h2",{id:"test-spec"},"Test Spec"),(0,r.kt)("p",null,"Verify that a spec operation issued to the connector returns a valid spec."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spec_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/spec.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a YAML or JSON file representing the spec expected to be output by this connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"backward_compatibility_tests_config.previous_connector_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Previous connector version to use for backward compatibility tests (expects a version following semantic versioning).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"backward_compatibility_tests_config.disable_for_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Disable the backward compatibility test for a specific version (expects a version following semantic versioning).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")))),(0,r.kt)("h2",{id:"test-connection"},"Test Connection"),(0,r.kt)("p",null,"Verify that a check operation issued to the connector with the input config file returns a successful response."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"succeed")," ",(0,r.kt)("inlineCode",{parentName:"td"},"failed")," ",(0,r.kt)("inlineCode",{parentName:"td"},"exception")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicate if connection check should succeed with provided config")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")))),(0,r.kt)("h2",{id:"test-discovery"},"Test Discovery"),(0,r.kt)("p",null,"Verifies when a discover operation is run on the connector using the given config file, a valid catalog is produced by the connector."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")))),(0,r.kt)("h2",{id:"test-basic-read"},"Test Basic Read"),(0,r.kt)("p",null,"Configuring all streams in the input catalog to full refresh mode verifies that a read operation produces some RECORD messages. Each stream should have some data, if you can't guarantee this for particular streams - add them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"empty_streams")," list.\nSet ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_data_points=True")," if possible. This validation is going to be enabled by default and won't be configurable in future releases."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"empty_streams")),(0,r.kt)("td",{parentName:"tr",align:"left"},"array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[","]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of streams that might be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"validate_schema")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Verify that structure and types of records matches the schema from discovery command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"validate_data_points")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Validate that all fields in all streams contained at least one data point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5","*","60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_trace_message_on_failure")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ensure that a trace message is emitted when the connector crashes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_records")),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compare produced records with expected records, see details below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_records.path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"File with expected records")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_records.extra_fields")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow output records to have other fields i.e: expected records are a subset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_records.exact_order")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ensure  that records produced in exact same order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expect_records.extra_records")),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow connector to produce extra records, but still enforce all records from the expected file to be produced")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expect_records")," is a nested configuration, if omitted - the part of the test responsible for record matching will be skipped. Due to the fact that we can't identify records without primary keys, only the following flag combinations are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"extra","_","fields"),(0,r.kt)("th",{parentName:"tr",align:"left"},"exact","_","order"),(0,r.kt)("th",{parentName:"tr",align:"left"},"extra","_","records"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"schema-format-checking"},"Schema format checking"),(0,r.kt)("p",null,"If some field has ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/string.html#format"},"format")," attribute specified on its catalog json schema, Source Acceptance Testing framework performs checking against format. It support checking of all ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats"},"builtin")," jsonschema formats for draft 7 specification: email, hostnames, ip addresses, time, date and date-time formats."),(0,r.kt)("p",null,"Note: For date-time we are not checking against compliance against ISO8601 ","(","and RFC3339 as subset of it",")",". Since we are using specified format to set database column type on db normalization stage, value should be compliant to bigquery ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#timestamp_type"},"timestamp"),' and SQL "timestamp with timezone" formats.'),(0,r.kt)("h3",{id:"example-of-expected_recordstxt"},"Example of ",(0,r.kt)("inlineCode",{parentName:"h3"},"expected_records.txt"),":"),(0,r.kt)("p",null,"In general, the expected","_","records.json should contain the subset of output of the records of particular stream you need to test. The required fields are: ",(0,r.kt)("inlineCode",{parentName:"p"},"stream, data, emitted_at")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"stream": "my_stream", "data": {"field_1": "value0", "field_2": "value0", "field_3": null, "field_4": {"is_true": true}, "field_5": 123}, "emitted_at": 1626172757000}\n{"stream": "my_stream", "data": {"field_1": "value1", "field_2": "value1", "field_3": null, "field_4": {"is_true": false}, "field_5": 456}, "emitted_at": 1626172757000}\n{"stream": "my_stream", "data": {"field_1": "value2", "field_2": "value2", "field_3": null, "field_4": {"is_true": true}, "field_5": 678}, "emitted_at": 1626172757000}\n{"stream": "my_stream", "data": {"field_1": "value3", "field_2": "value3", "field_3": null, "field_4": {"is_true": false}, "field_5": 91011}, "emitted_at": 1626172757000}\n')),(0,r.kt)("h2",{id:"test-full-refresh-sync"},"Test Full Refresh sync"),(0,r.kt)("h3",{id:"testsequentialreads"},"TestSequentialReads"),(0,r.kt)("p",null,"This test performs two read operations on all streams which support full refresh syncs. It then verifies that the RECORD messages output from both were identical or the former is a strict subset of the latter."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20","*","60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ignored_fields")),(0,r.kt)("td",{parentName:"tr",align:"left"},"dict"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For each stream, list of fields path ignoring in sequential reads test")))),(0,r.kt)("h2",{id:"test-incremental-sync"},"Test Incremental sync"),(0,r.kt)("h3",{id:"testtwosequentialreads"},"TestTwoSequentialReads"),(0,r.kt)("p",null,"This test verifies that all streams in the input catalog which support incremental sync can do so correctly. It does this by running two read operations: the first takes the configured catalog and config provided to this test as input. It then verifies that the sync produced a non-zero number of ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," messages. The second read takes the same catalog and config used in the first test, plus the last ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," message output by the first read operation as the input state file. It verifies that either no records are produced ","(","since we read all records in the first sync",")"," or all records that produced have cursor value greater or equal to cursor value from ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," message. This test is performed only for streams that support incremental. Streams that do not support incremental sync are ignored. If no streams in the input catalog support incremental sync, this test is skipped."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cursor_paths")),(0,r.kt)("td",{parentName:"tr",align:"left"},"dict"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For each stream, the path of its cursor field in the output state messages. If omitted the path will be taken from the last piece of path from stream cursor","_","field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20","*","60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"threshold_days")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For date-based cursors, allow records to be emitted with a cursor value this number of days before the state value.")))),(0,r.kt)("h3",{id:"testreadsequentialslices"},"TestReadSequentialSlices"),(0,r.kt)("p",null,"This test offers more comprehensive verification that all streams in the input catalog which support incremental syncs perform the sync correctly. It does so in two phases. The first phase uses the configured catalog and config provided to this test as input to make a request to the partner API and assemble the complete set of messages to be synced. It then verifies that the sync produced a non-zero number of ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," messages. This set of messages is partitioned into batches of a ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," message followed by zero or more ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORD")," messages. For each batch of messages, the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," message is used as input for a read operation to get records with respect to the cursor. The test then verifies that all of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORDS")," retrieved have a cursor value greater or equal to the cursor from the current ",(0,r.kt)("inlineCode",{parentName:"p"},"STATE")," message. This test is performed only for streams that support incremental. Streams that do not support incremental sync are ignored. If no streams in the input catalog support incremental sync, this test is skipped."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cursor_paths")),(0,r.kt)("td",{parentName:"tr",align:"left"},"dict"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For each stream, the path of its cursor field in the output state messages. If omitted the path will be taken from the last piece of path from stream cursor","_","field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20","*","60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"threshold_days")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For date-based cursors, allow records to be emitted with a cursor value this number of days before the state value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"skip_comprehensive_incremental_tests")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For non-GA and in-development connectors, control whether the more comprehensive incremental tests will be skipped")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that this test samples a fraction of stream slices across an incremental sync in order to reduce test duration and avoid spamming partner APIs")),(0,r.kt)("h3",{id:"teststatewithabnormallylargevalues"},"TestStateWithAbnormallyLargeValues"),(0,r.kt)("p",null,"This test verifies that sync produces no records when run with the STATE with abnormally large values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secrets/config.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to a JSON object representing a valid connector configuration"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"configured_catalog_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration_tests/configured_catalog.json")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to configured catalog"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"future_state_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path to the state file with abnormally large cursor values"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeout_seconds")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20","*","60"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Test execution timeout in seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0},5003:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/standard_tests_sequence_diagram-e16dc2dfe682e24b9d530650345ce7e2.png"}}]);