(window.webpackJsonpui=window.webpackJsonpui||[]).push([[0],{174:function(e,t,a){e.exports=a(312)},179:function(e,t,a){},180:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),i=a.n(s),o=(a(179),a(24)),c=a(18),l=a(19),p=a(20),u=a(21),h=a(22),g=(a(180),a(181),a(327)),f=a(328),m=a(324),d=a(330),v=a(313),y=a(325),O=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.warning?r.a.createElement(y.a,{color:"yellow",size:"small",content:this.props.message}):r.a.createElement("div",{style:{height:"44.18px"}})}}]),t}(n.Component);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={register:a.props.register,name:"",email:"",password:"",warning:!1},a.activeButton=function(){return a.state.register?""===a.state.name||""===a.state.email||""===a.state.password:""===a.state.email||""===a.state.password},a.inputWarning=function(){return a.props.apiWarning?r.a.createElement(O,{message:"API call limit reached please wait and try again later",warning:a.props.apiWarning}):a.state.register?r.a.createElement(O,{message:"You can only sign up for an account once with a given e-mail address",warning:a.state.warning}):r.a.createElement(O,{message:"Please enter valid email and password",warning:a.state.warning})},a.toggleRegister=function(e){e.preventDefault();var t=w({},a.state,{register:!a.state.register,warning:!1});a.setState(t)},a.handleChange=function(e){var t=w({},a.state);t[e.target.placeholder]=e.target.value,a.setState(t)},a.handleClick=function(e){a.state.register?fetch("https://mighty-hamlet-54458.herokuapp.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){if(e.name)a.props.loginUser(e);else if(a.setState(w({},a.state,{name:"",email:"",password:""})),!a.state.warning){a.setState(w({},a.state,{warning:!0}));var t=setInterval((function(){a.setState(w({},a.state,{warning:!1})),window.clearInterval(t)}),5e3)}})):fetch("https://mighty-hamlet-54458.herokuapp.com/sessions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){if(e.name)a.props.loginUser(e);else if(a.setState(w({},a.state,{email:"",password:""})),!a.state.warning){a.setState(w({},a.state,{warning:!0}));var t=setInterval((function(){a.setState(w({},a.state,{warning:!1})),window.clearInterval(t)}),3e3)}}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},r.a.createElement(g.a.Column,{style:{maxWidth:450}},r.a.createElement(f.a,{as:"h2",style:{color:"#44829e"},textAlign:"center"},this.state.register?"Register":"Sign In"),r.a.createElement(m.a,{size:"large"},r.a.createElement(d.a,null,this.state.register?r.a.createElement(m.a.Input,{fluid:!0,placeholder:"name",value:this.state.name,onChange:this.handleChange}):null,r.a.createElement(m.a.Input,{fluid:!0,placeholder:"email",warning:"email already used",value:this.state.email,onChange:this.handleChange}),r.a.createElement(m.a.Input,{fluid:!0,placeholder:"password",value:this.state.password,onChange:this.handleChange,type:"password"}),r.a.createElement(v.a,{disabled:this.activeButton(),style:{backgroundColor:"#44829e",color:"white"},fluid:!0,size:"large",onClick:this.handleClick},this.state.register?"Create Account":"Login"))),r.a.createElement(y.a,null,r.a.createElement("a",{href:"#",onClick:this.toggleRegister},this.state.register?"Login":"Sign Up")),this.inputWarning()))}}]),t}(n.Component),k=a(321);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={ticker:"",quantity:"",tickerWarning:!1,decimalWarning:!1,cashWarning:!1},a.handleChange=function(e){var t=S({},a.state);t[e.target.id]=e.target.value.toUpperCase(),a.setState(t)},a.inputWarning=function(){return a.props.apiWarning?r.a.createElement(O,{message:"API call limit reached please wait and try again later",warning:a.props.apiWarning}):a.state.tickerWarning?r.a.createElement(O,{message:"Please enter valid ticker",warning:a.state.tickerWarning}):a.state.decimalWarning?r.a.createElement(O,{message:"Please enter whole number of shares",warning:a.state.decimalWarning}):r.a.createElement(O,{message:"You do not have enough cash to make this purchase",warning:a.state.cashWarning})},a.activeButton=function(){return""===a.state.ticker||""===a.state.quantity},a.handleClick=function(e){if(a.state.quantity.includes(".")){a.setState(S({},a.state,{decimalWarning:!0,ticker:"",quantity:""}));var t=setInterval((function(){a.setState(S({},a.state,{decimalWarning:!1})),window.clearInterval(t)}),3e3)}else{var n,r;fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=".concat(a.state.ticker,"&interval=1min&outputsize=full&apikey=3RDVDP5T21BBP1FG")).then((function(e){return e.json()})).then((function(e){if(e["Time Series (1min)"])n=parseFloat(e["Time Series (1min)"][e["Meta Data"]["3. Last Refreshed"]]["4. close"]),r=parseFloat(e["Time Series (1min)"]["".concat(a.props.getDate()," 09:31:00")]["1. open"]),fetch("https://mighty-hamlet-54458.herokuapp.com/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:a.props.user,ticker:a.state.ticker,shares:parseInt(a.state.quantity),price:n})}).then((function(e){return e.json()})).then((function(e){if(e.invalid){a.setState(S({},a.state,{cashWarning:!0,ticker:"",quantity:""}));var t=setInterval((function(){a.setState(S({},a.state,{cashWarning:!1})),window.clearInterval(t)}),3e3)}else a.props.setValue(a.state.ticker,a.state.quantity,n,r),a.setState(S({},a.state,{ticker:"",quantity:""})),a.props.setUser(e)}));else if(e.Note)a.setState(S({},a.state,{ticker:"",quantity:""})),a.props.setApiWarning();else{a.setState(S({},a.state,{tickerWarning:!0,ticker:"",quantity:""}));var t=setInterval((function(){a.setState(S({},a.state,{tickerWarning:!1})),window.clearInterval(t)}),3e3)}}))}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a.Column,null,r.a.createElement(f.a,{as:"h3",textAlign:"center"},"Cash - $",parseFloat(this.props.user.cash).toFixed(2)),r.a.createElement(k.a,{type:"text",id:"ticker",placeholder:"Ticker",onChange:this.handleChange,value:this.state.ticker}),r.a.createElement("br",null),r.a.createElement(k.a,{type:"number",id:"quantity",placeholder:"Qty",style:{padding:"10px"},onChange:this.handleChange,value:this.state.quantity}),r.a.createElement("br",null),r.a.createElement(v.a,{disabled:this.activeButton(),style:{backgroundColor:"#44829e",color:"white"},onClick:this.handleClick},"Buy"),this.inputWarning())}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setFont=function(){return a.props.value>a.props.openValue?"green":a.props.value<a.props.openValue?"red":"grey"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{vertical:!0,textAlign:"left"},this.props.portfolio?r.a.createElement("span",null,r.a.createElement("span",{style:{color:"".concat(this.setFont())}},this.props.stock.ticker.toUpperCase())," - ",this.props.stock.shares," Shares"):"BUY (".concat(this.props.stock.ticker,") - ").concat(this.props.stock.shares," Shares @ ").concat(parseFloat(this.props.stock.price).toFixed(2)," each"),this.props.portfolio?r.a.createElement("span",{style:{float:"right",color:"".concat(this.setFont())}},"$".concat((this.props.value*this.props.stock.shares).toFixed(2))):null)}}]),t}(n.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(g.a.Column,null,r.a.createElement(f.a,{as:"h3",content:this.props.portfolio?"Portfolio ($".concat(this.props.total.toFixed(2),")"):"Transactions",textAlign:"center"}),this.props.portfolio?this.props.user.stocks.map((function(t){return r.a.createElement(C,{stock:t,portfolio:e.props.portfolio,value:e.props.values[t.ticker],openValue:e.props.values["".concat(t.ticker,"-open")]})})):this.props.user.transactions.map((function(t){return r.a.createElement(C,{stock:t,portfolio:e.props.portfolio,value:e.props.values[t.ticker]})})))}}]),t}(n.Component),D=a(322),I=a(326),A=a(323);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={portfolio:!0,updateValues:!1,values:{},total:0,loading:!0},a.getDate=function(){var e=new Date,t=""+(e.getMonth()+1),a=""+e.getDate(),n=e.getFullYear();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),[n,t,a].join("-")},a.getValues=function(){0===a.props.user.stocks.length&&a.setState(x({},a.state,{loading:!1})),a.props.user.stocks.forEach((function(e,t){fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=".concat(e.ticker,"&interval=1min&outputsize=full&apikey=3RDVDP5T21BBP1FG")).then((function(e){return e.json()})).then((function(t){if(t.Note)a.props.setApiWarningLogin();else{var n=x({},a.state.values);n[e.ticker]=parseFloat(t["Time Series (1min)"][t["Meta Data"]["3. Last Refreshed"]]["4. close"]),n["".concat(e.ticker,"-open")]=parseFloat(t["Time Series (1min)"]["".concat(a.getDate()," 09:31:00")]["1. open"]),a.setState(x({},a.state,{values:n,total:a.state.total+n[e.ticker]*e.shares}))}})).then((function(e){t===a.props.user.stocks.length-1&&a.setState(x({},a.state,{loading:!1}))}))}))},a.setValue=function(e,t,n,r){var s=x({},a.state.values);s[e]=n,s["".concat(e,"-open")]=r,a.setState(x({},a.state,{values:s,total:a.state.total+n*t}))},a.handleClick=function(e){"portfolio"===e.target.id?a.setState(x({},a.state,{portfolio:!0})):a.setState(x({},a.state,{portfolio:!1}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getValues()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D.a,null,r.a.createElement(I.a,{style:{border:"0px solid black",boxShadow:"0px 0px 0px black"}},r.a.createElement(I.a.Menu,{position:"right"},r.a.createElement(I.a.Item,{id:"portfolio",name:"Portfolio",onClick:this.handleClick}),r.a.createElement(I.a.Item,{name:"Transactions",onClick:this.handleClick})))),r.a.createElement(f.a,{as:"h3",content:"",textAlign:"center"}),this.state.loading?r.a.createElement(A.a,{active:!0}):r.a.createElement(g.a,{container:!0,columns:2,divided:!0,relaxed:!0,stackable:!0},r.a.createElement(W,{values:this.state.values,portfolio:this.state.portfolio,user:this.props.user,total:this.state.total}),this.state.portfolio?r.a.createElement(P,{user:this.props.user,setUser:this.props.setUser,setValue:this.setValue,getDate:this.getDate,apiWarning:this.props.apiWarning,setApiWarning:this.props.setApiWarning}):null))}}]),t}(n.Component);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={page:"LOGIN",user:{},apiWarning:!1},a.loginUser=function(e){a.setState(q({},a.state,{user:e})),a.setPage("ACCOUNT")},a.setUser=function(e){a.setState(q({},a.state,{user:e}))},a.setApiWarningLogin=function(){a.setState(q({},a.state,{apiWarning:!0}));var e=setInterval((function(){a.setState(q({},a.state,{apiWarning:!1})),window.clearInterval(e)}),5e3);a.setPage("LOGIN")},a.setApiWarning=function(){a.setState(q({},a.state,{apiWarning:!0}));var e=setInterval((function(){a.setState(q({},a.state,{apiWarning:!1})),window.clearInterval(e)}),5e3)},a.setPage=function(e){var t=q({},a.state,{page:e});a.setState(t)},a.renderPage=function(){switch(a.state.page){case"LOGIN":return r.a.createElement(j,{loginUser:a.loginUser,register:!1,apiWarning:a.state.apiWarning});case"ACCOUNT":return r.a.createElement(U,{user:a.state.user,setUser:a.setUser,apiWarning:a.state.apiWarning,setApiWarning:a.setApiWarning,setApiWarningLogin:a.setApiWarningLogin})}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderPage())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[174,1,2]]]);
//# sourceMappingURL=main.3746782b.chunk.js.map