(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{213:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(19),l=t.n(s),c=(t(99),t(22)),o=t(5),i=t(0),m=t(82),d=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"lead text-center mb-0 p-4"},"Developed by"," ",r.a.createElement(i.b.Provider,{value:{color:"red",className:""}},r.a.createElement(m.a,null))," ",r.a.createElement("a",{href:"https://facebook.com/emon.hossain.7475/",target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer"},"Emon Hossain"))))},u=t(8),h=t.n(u),v=t(13),p=t(83),f=t(84),E=t(93),g=t(91),y=t(37),N=t(39),b=t.n(N),w="https://corona.lmao.ninja/v2",x=function(){var e=Object(v.a)(h.a.mark((function e(){var a,t,n,r,s,l,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(w,"/all"));case 3:return a=e.sent,t=a.data,n=t.cases,r=t.todayCases,s=t.recovered,l=t.deaths,c=t.todayDeaths,o=t.updated,i={cases:n,todayCases:r,recovered:s,todayDeaths:c,deaths:l,updated:o},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(v.a)(h.a.mark((function e(a){var t,n,r,s,l,c,o,i,m,d,u,v,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="Bangladesh",a&&(t=a.value),e.prev=2,e.next=5,b.a.get("".concat(w,"/countries/").concat(t));case 5:return n=e.sent,r=n.data,s=r.country,l=r.countryInfo,c=r.cases,o=r.todayCases,i=r.recovered,m=r.deaths,d=r.todayDeaths,u=r.critical,v=r.updated,p={country:s,flag:l.flag,cases:c,todayCases:o,recovered:i,todayDeaths:d,deaths:m,critical:u,updated:v},e.abrupt("return",p);case 20:e.prev=20,e.t0=e.catch(2),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[2,20]])})));return function(a){return e.apply(this,arguments)}}(),D=function(){var e=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(w,"/countries"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){return{country:e.country,code:e.countryInfo.iso2,flag:e.countryInfo.flag}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=t(85);var O=function(e){e.data;var a=Object(n.useState)({}),t=Object(y.a)(a,2),s=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),(null===s||void 0===s?void 0:s.cases)?r.a.createElement(C.a,{data:{labels:["Confirmed","Deaths","Recovered"],datasets:[{label:"COVID-19",backgroundColor:["rgba(26, 16, 83, 0.603)","rgb(255, 99, 132)","rgb(29, 209, 161)"],borderColor:"#fff",data:[null===s||void 0===s?void 0:s.cases,null===s||void 0===s?void 0:s.deaths,null===s||void 0===s?void 0:s.recovered]}]}}):r.a.createElement("div",{style:{textAlign:"center",height:"10rem",paddingTop:"4rem"}},r.a.createElement("div",{className:"spinner-border spinner-border-lg",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},j=t(87),I=t.n(j),W=t(14),L=t.n(W),S=t(28),V=t.n(S),_=t(24),T=t.n(_),R=t(35),A=t.n(R),B=function(e){var a=e.data;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row py-5 justify-content-between align-items-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Global information : ")),r.a.createElement("div",{className:"col-sm-6 text-sm-right"},r.a.createElement("h5",null,(null===a||void 0===a?void 0:a.updated)?r.a.createElement("div",{className:"text-muted"},"Last updated ",r.a.createElement(I.a,{fromNow:!0},null===a||void 0===a?void 0:a.updated)):r.a.createElement("small",{className:"text-info"},"Updating . . ."))))),r.a.createElement("div",{className:"col-lg-8 text-center my-3"},r.a.createElement(O,null)),r.a.createElement("div",{className:"col-lg-4 my-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:V.a,alt:"Cases",className:"img-fluid logo rotate"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===a||void 0===a?void 0:a.cases)?r.a.createElement(L.a,{start:0,end:null===a||void 0===a?void 0:a.cases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Confirmed")))),r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:T.a,alt:"Deaths",className:"img-fluid logo rotate"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===a||void 0===a?void 0:a.deaths)?r.a.createElement(L.a,{start:0,end:null===a||void 0===a?void 0:a.deaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Deaths")))),r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row recovered shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:A.a,alt:"Recovered",className:"img-fluid logo rotate"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-success"},(null===a||void 0===a?void 0:a.recovered)?r.a.createElement(L.a,{start:0,end:null===a||void 0===a?void 0:a.recovered,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Recovered"))))))))},M=t(53),H=t(3),P=t(92),F=function(e){var a=e.handleCountryChange,t=e.localData,s=Object(n.useState)([]),l=Object(y.a)(s,2),c=l[0],o=l[1];Object(n.useEffect)((function(){(function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,D();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var i=[];c.map((function(e){return i.push({value:e.code,label:e.country})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{className:"mb-5"},"Search for Country's Update")),r.a.createElement(P.a,{closeMenuOnSelect:!0,components:{Placeholder:function(e){return r.a.createElement(H.z.Placeholder,e)}},placeholder:"Bangladesh",styles:{placeholder:function(e){return Object(M.a)(Object(M.a)({},e),{},{fontSize:"1em",fontWeight:400,width:"5rem"})}},onChange:function(e){return a(e)},options:i}),r.a.createElement("div",{className:"row justify-content-between align-items-center p-3"},r.a.createElement("div",{className:"my-3 d-flex align-items-center"},r.a.createElement("h4",{className:"mb-0"},(null===t||void 0===t?void 0:t.country)?t.country:r.a.createElement("small",{className:"text-primary"},"Loading . . .")),"\xa0 \xa0",r.a.createElement("div",null,(null===t||void 0===t?void 0:t.flag)?r.a.createElement("img",{src:t.flag,style:{width:"35px"},alt:t.country}):null))),r.a.createElement("div",{className:"row local"},r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:V.a,alt:"Cases",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===t||void 0===t?void 0:t.cases)>=0?r.a.createElement(L.a,{start:0,end:t.cases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Confirmed")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:T.a,alt:"Deaths",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===t||void 0===t?void 0:t.deaths)>=0?r.a.createElement(L.a,{start:0,end:t.deaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Deaths")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row recovered shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:A.a,alt:"Recovered",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-success"},(null===t||void 0===t?void 0:t.recovered)>=0?r.a.createElement(L.a,{start:0,end:t.recovered,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Recovered"))))),r.a.createElement("div",{className:"row local"},r.a.createElement("div",{className:"col-md-12 my-3 py-3 text-left"},r.a.createElement("h3",null,"Today's Last Updates :")),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:V.a,alt:"Cases",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===t||void 0===t?void 0:t.todayCases)>=0?r.a.createElement(L.a,{start:0,end:t.todayCases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"New Cases")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:T.a,alt:"Deaths",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===t||void 0===t?void 0:t.todayDeaths)>=0?r.a.createElement(L.a,{start:0,end:t.todayDeaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"New Deaths")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row critical shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:T.a,alt:"Recovered",className:"img-fluid logo svgMinLogo",style:{opacity:.7}})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-warning"},(null===t||void 0===t?void 0:t.critical)>=0?r.a.createElement(L.a,{start:0,end:t.critical,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Critical"))))))},U=t(89),q=t.n(U);var z=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:q.a,className:"svgLogo rotate",alt:"coronaBL"}),r.a.createElement("div",{className:"container alert alert-danger mt-2",role:"alert"},"Disclaimer: All the information collected from different type of sources. I will not be liable or responsible in any way if it does not match with real data. Data sources:"," ",r.a.createElement("a",{href:"https://covid19.who.int/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"WHO"),", ",r.a.createElement("a",{href:"https://corona.lmao.ninja/",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"corona.lmao.ninja"),", ",r.a.createElement("a",{href:"https://www.worldometers.info/",target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer"},"Worldometers.info"),", ",r.a.createElement("a",{href:"https://corona.gov.bd",target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer"},"corona.gov.bd"),", ",r.a.createElement("a",{href:" https://dghs.gov.bd",target:"_blank",style:{textDecoration:"none"},rel:"noopener noreferrer"},"dghs.gov.bd")))},J=function(e){Object(E.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={data:{},localData:{},country:"",flag:""},e.handleCountryChange=function(){var a=Object(v.a)(h.a.mark((function a(t){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k(t);case 2:n=a.sent,console.log(n),e.setState({localData:n});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(h.a.mark((function e(){var a,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return a=e.sent,e.next=6,k();case 6:t=e.sent,this.setState({data:a,localData:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.localData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(B,{data:a}),r.a.createElement("div",{className:"container"},r.a.createElement(F,{localData:t,handleCountryChange:this.handleCountryChange})))}}]),t}(n.Component),G=function(e,a){return e.location.pathname===a?{color:"#ff9900"}:{color:"#ffffff"}},$=Object(o.f)((function(e){var a=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-primary"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",style:G(a,"/"),to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",style:G(a,"/corona"),to:"/corona"},"About Covid-19"))))}));var K=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row p-b-40 "},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"What you need to know about COVID-19"),r.a.createElement("p",null,"COVID-19 is a respiratory illness caused by SARS-CoV-2, a new virus from the corona family. Common symptoms include fever, dry cough and, in severe cases, shortness of breath. COVID-19 spreads from person to person, but can survive on hard surfaces for up to 3 days. Hand-washing, social distancing and cleaning frequently touched surfaces can prevent the spread of the virus."))),r.a.createElement("div",{className:"panel panel-transparent"},r.a.createElement("div",null,r.a.createElement("div",{className:"row p-l-20 p-r-20 p-b-20 p-t-5 xs-no-padding"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"tab-pane active"},r.a.createElement("h5",{className:"font-montserrat text-uppercase fs-14 hint-text"},"Facts about COVID-19"),r.a.createElement("h2",null,"What is COVID-19?"),r.a.createElement("p",{className:"fs-15 font-open-sans"},r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Coronavirus_disease_2019",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"COVID-19")," ","is a novel infectious disease based on the SARS-CoV-2 virus that originated from Wuhan, China in late 2019. WHO classNameified COVID-19 as a pandemic on March 11, 2020.",r.a.createElement("strong",null,"Often mistakenly likened to the flu, COVID-19 is much more severe.")," ","As many potentially dangerous diseases, COVID-19 starts with flu like symptoms. Fever, dry cough, sore throat and eventually shortness of breath are most common ones, with fever often being the determining factor when self diagnosing."),r.a.createElement("p",null,"If your body temperature is 37.5\xb0C or 99.5\xb0F you have a mild fever, which is the most common symptom of COVID-19, though it does not necessarily mean you've contracted the disease. If you have traveled to Wuhan or Italy in the last 14 days, you should call your doctor. It's important to call your doctor instead of going to the hospital, to prevent spreading the virus if you're infected or catching it you're not."),r.a.createElement("iframe",{title:"My Daily Marathon Tracker",src:"https://ourworldindata.org/grapher/daily-cases-covid-19-who",style:{width:"100%",height:"600px",border:"0px none"}}),r.a.createElement("p",{className:"fs-15 font-open-sans"},r.a.createElement("a",{href:"https://ourworldindata.org/coronavirus",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"Data source")),r.a.createElement("p",{className:"fs-15 font-open-sans"},"Preventive measures like social distancing and good hygiene put in place to slow down the spread of the virus have been shown to work in China, while combating the first wave of the outbreak. We will see fewer global infections once similar measures are implemented in other high-risk countries."),r.a.createElement("h2",null,"What can you do to stop COVID-19 from spreading?"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h6",{className:"block-title"},"DO"),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2713 Wash your hands.")," Washing your hands for at least 20 seconds protects you from getting sick."),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2713 Stay home.")," Social distancing slows the spread of the virus from person to person."),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2713 Take this seriously.")," This is not the flu. This is a global pandemic that's pushing healthcare to its limits."),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2713 Wear a mask if you're sick.")," Wearing a mask does little to prevent you from getting sick, but it does prevent you from infecting others.")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h6",{className:"block-title"},"DON'T"),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2613 Panic buy.")," When shopping think about the next person. Don't buy more than you need."),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2613 Touch your face.")," Touching your mouth, nose or eyes is how the virus gets in your system."),r.a.createElement("p",{className:"hint-text"},r.a.createElement("strong",null,"\u2613 Spread misinformation.")," Before sharing information on social media, do a quick fact check.")))))))))},Q=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/corona",component:K}),r.a.createElement(o.a,{path:"/",component:J})),r.a.createElement(d,null))},X=(t(213),function(){return r.a.createElement(c.a,null,r.a.createElement(Q,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,a,t){e.exports=t.p+"static/media/deaths-large.b379f9d1.png"},28:function(e,a,t){e.exports=t.p+"static/media/cases.feea5fb1.png"},35:function(e,a,t){e.exports=t.p+"static/media/recovered.66525ad4.png"},89:function(e,a,t){e.exports=t.p+"static/media/corona.e15730a5.svg"},94:function(e,a,t){e.exports=t(214)},99:function(e,a,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.64399550.chunk.js.map