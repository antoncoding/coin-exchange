(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{100:function(e,t,n){e.exports=n(196)},105:function(e,t,n){},116:function(e,t){},118:function(e,t){},151:function(e,t){},152:function(e,t){},195:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getExchangeAmount",(function(){return b})),n.d(a,"getMinMaxForPair",(function(){return h})),n.d(a,"getCurrenciesSymbolAndLabel",(function(){return E})),n.d(a,"createTransaction",(function(){return g})),n.d(a,"getTransactionStatus",(function(){return y}));var r=n(0),c=n.n(r),o=n(16),u=n.n(o),i=(n(105),n(6)),s=n(3),l=n.n(s),m=n(2),d=n(91),f=function(e,t,n){if(n){if(n.error)throw n.error;if(e){if(n.fixError)throw n.fixError;if(t<n.minAmountFixed)throw Error("Min Amount: ".concat(n.minAmountFixed));if(t>n.maxAmountFixed)throw Error("Max Amount: ".concat(n.maxAmountFixed))}else{if(n.floatError)throw n.floatError;if(t<n.minAmountFloat)throw Error("Min Amount: ".concat(n.minAmountFloat));if(t>n.maxAmountFloat)throw Error("Max Amount ".concat(n.maxAmountFloat))}}},p=new d.Changelly("036087fb5bea4e94b6a0d35cfe2f9771","c11e00533187db1384ae86775f2c68f3828e6cda30106aa42a503b7c7a7cd29f"),x="Changelly",b=function(e,t,n,a,r){var c,o;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,f(a,n,r),a){u.next=9;break}return u.next=5,l.a.awrap(p.getExchangeAmount([{from:e,to:t,amount:n}]));case 5:return c=u.sent,u.abrupt("return",{amount:Number(c[0].result),id:"",exchange:x});case 9:return u.next=11,l.a.awrap(p.getFixRateForAmount([{from:e,to:t,amountFrom:n}]));case 11:return o=u.sent,u.abrupt("return",{amount:Number(o[0].amountTo),id:o[0].id,exchange:x});case 13:u.next=18;break;case 15:return u.prev=15,u.t0=u.catch(0),u.abrupt("return",{amount:0,exchange:x,error:u.t0.toString()});case 18:case"end":return u.stop()}}),null,null,[[0,15]])},h=function(e,t){var n,a,r,c,o,u;return l.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,l.a.awrap(p.getPairsParams([{from:e,to:t}]));case 3:return n=i.sent,a=n[0],r=a.minAmountFloat,c=a.minAmountFixed,o=a.maxAmountFloat,u=a.maxAmountFixed,i.abrupt("return",{minAmountFloat:Number(r),minAmountFixed:Number(c),maxAmountFloat:null===o?Number.MAX_VALUE:Number(o),maxAmountFixed:null===u?Number.MAX_VALUE:Number(u),exchange:x});case 8:return i.prev=8,i.t0=i.catch(0),i.abrupt("return",{exchange:x,error:i.t0});case 11:case"end":return i.stop()}}),null,null,[[0,8]])},E=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(p.getCurrenciesFull());case 2:return e=t.sent,t.abrupt("return",e.filter((function(e){return e.enabled})).map((function(e){return{symbol:e.name,label:"".concat(e.fullName," (").concat(e.name,")")}})));case 4:case"end":return t.stop()}}))},g=function(e,t,n,a,r,c){var o,u,i,s,m,d=arguments;return l.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(o=d.length>6&&void 0!==d[6]?d[6]:null,u=d.length>7&&void 0!==d[7]?d[7]:null,i=d.length>8&&void 0!==d[8]?d[8]:null,!e){f.next=10;break}return f.next=6,l.a.awrap(p.createFixTransaction(n,a,r,t,u,c,null,o,i));case 6:return s=f.sent,f.abrupt("return",{from:s.currencyFrom,to:s.currencyTo,amountFrom:s.amountExpectedFrom,amountTo:s.amountExpectedTo,id:s.id,payoutAddress:s.payoutAddress,payinAddress:s.payinAddress,payinExtraId:s.payinExtraId,expiration:s.payTill,exchange:x});case 10:return f.next=12,l.a.awrap(p.createTransaction(n,a,r,c,o,u,i));case 12:return m=f.sent,f.abrupt("return",{from:m.currencyFrom,to:m.currencyTo,amountFrom:m.amountExpectedFrom,amountTo:m.amountExpectedTo,id:m.id,payoutAddress:m.payoutAddress,payinAddress:m.payinAddress,payinExtraId:m.payinExtraId,exchange:x});case 14:case"end":return f.stop()}}))},y=function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(p.getStatus(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},w="https://cors-anywhere-anton.herokuapp.com/https://api.coinswitch.co/v2/";console.log("CoinSwitch: ".concat(w));var v="VfhANRHp7X4yDybDduiC57Lumfi78ilm4yjZIkZ1";var A=function(e,t){var n,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n={depositCoin:e,destinationCoin:t},r.next=3,l.a.awrap(C("rate","POST",n));case 3:return a=r.sent,r.abrupt("return",a);case 5:case"end":return r.stop()}}))},O=function(){var e,t,n,a,r,c=arguments;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:null,t=c.length>1&&void 0!==c[1]?c[1]:null,e||t){o.next=4;break}throw new Error("One of depositCoin or destinationCoin need to be specified");case 4:return n={},e&&(n.depositCoin=e),t&&(n.destinationCoin=t),o.next=9,l.a.awrap(C("fixed/pairs","POST",n));case 9:if(a=o.sent,0!==(r=a.filter((function(e){return e.isActive}))).length){o.next=13;break}return o.abrupt("return",[{error:"Fix rate trading of this pair not supported"}]);case 13:return o.abrupt("return",r);case 14:case"end":return o.stop()}}))},j=function(e){var t,n,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.depositCoinAmount,n=e.destinationCoinAmount,!(!t&&!n||t&&n)){r.next=3;break}throw new Error("Only specify one of depositCoinAmount or destinationCoinAmount");case 3:return r.next=5,l.a.awrap(C("fixed/offer","POST",e));case 5:return a=r.sent,r.abrupt("return",a);case 7:case"end":return r.stop()}}))},C=function(e,t,n){var a,r,c,o;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a=w+e,r={method:t,headers:{"x-api-key":v,"x-user-ip":"220.132.76.232","content-type":"application/json"}},"POST"===t&&(r.body=JSON.stringify(n)),u.next=5,l.a.awrap(fetch(a,r));case 5:if(200!==(c=u.sent).status){u.next=22;break}return u.prev=7,u.next=10,l.a.awrap(c.json());case 10:if(!(o=u.sent).success){u.next=13;break}return u.abrupt("return",o.data);case 13:throw o.msg;case 16:throw u.prev=16,u.t0=u.catch(7),console.error(u.t0),new Error("Pair not supported");case 20:u.next=25;break;case 22:return u.next=24,l.a.awrap(c.text());case 24:throw u.sent;case 25:case"end":return u.stop()}}),null,null,[[7,16]])},F=function(e,t,n,a,r){var c,o,u,i,s,m,d;return l.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(p.prev=0,f(a,n,r),!a){p.next=11;break}return p.next=5,l.a.awrap(j({depositCoin:e,destinationCoin:t,depositCoinAmount:n}));case 5:return c=p.sent,o=c.offerReferenceId,u=Number(c.destinationCoinAmount),p.abrupt("return",{amount:u,id:o,exchange:"CoinSwitch"});case 11:return p.next=13,l.a.awrap(A(e,t));case 13:return i=p.sent,s=i.rate,m=i.minerFee,d=n*s-m,p.abrupt("return",{amount:d,id:"",exchange:"CoinSwitch"});case 18:p.next=23;break;case 20:return p.prev=20,p.t0=p.catch(0),p.abrupt("return",{amount:0,exchange:"CoinSwitch",error:p.t0.toString()});case 23:case"end":return p.stop()}}),null,null,[[0,20]])},S=function(e,t){var n,a,r,c,o,u,s,m,d;return l.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,l.a.awrap(Promise.all([A(e,t),O(e,t)]));case 3:if(n=f.sent,a=Object(i.a)(n,2),r=a[0],c=a[1],o=r.limitMinDepositCoin,u=r.limitMaxDepositCoin,c[0].error){f.next=13;break}return s=c[0],m=s.limitMinDepositCoin,d=s.limitMaxDepositCoin,f.abrupt("return",{minAmountFloat:o,maxAmountFloat:u,minAmountFixed:m,maxAmountFixed:d,exchange:"CoinSwitch"});case 13:return f.abrupt("return",{minAmountFloat:o,maxAmountFloat:u,fixError:c[0].error});case 14:f.next=19;break;case 16:return f.prev=16,f.t0=f.catch(0),f.abrupt("return",{error:f.t0,exchange:"CoinSwitch"});case 19:case"end":return f.stop()}}),null,null,[[0,16]])};function k(e){var t=Object(r.useState)("unkown"),n=Object(i.a)(t,2),o=n[0],u=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.t,{header:c.a.createElement(m.w,null,c.a.createElement(m.v,{title:"Last Transaction"}))},c.a.createElement(m.w,null,c.a.createElement(m.u,null,c.a.createElement(m.x,null,"Id")),c.a.createElement(m.u,null,c.a.createElement(m.x,null,e.id))),c.a.createElement(m.w,null,c.a.createElement(m.u,null,c.a.createElement(m.x,null,"Transfer")),c.a.createElement(m.u,null,c.a.createElement(m.x,null,e.amountFrom," ",e.from))),c.a.createElement(m.w,null,c.a.createElement(m.u,null,c.a.createElement(m.x,null,"To")),c.a.createElement(m.u,null,c.a.createElement(m.x,null," ",Object(m.A)(e.payinAddress)," "))),c.a.createElement(m.w,null,c.a.createElement(m.u,null,c.a.createElement(m.x,null,"You get")),c.a.createElement(m.u,null,c.a.createElement(m.x,null," ",e.amountTo," ",e.to))),c.a.createElement(m.w,null,c.a.createElement(m.u,null,c.a.createElement(m.x,null,"Status")),c.a.createElement(m.u,null,c.a.createElement(m.c,{onClick:function(){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e.exchange,n.next="Changelly"===n.t0?3:8;break;case 3:return n.next=5,l.a.awrap(a.getTransactionStatus(e.id));case 5:return t=n.sent,u(t),n.abrupt("break",10);case 8:return console.error("Unknown exchange"),n.abrupt("break",10);case 10:case"end":return n.stop()}}))},icon:c.a.createElement(m.i,null),label:o})))))}function T(e,t,n,o,u,s,d,f,p,x,b){var h=Object(r.useState)(!1),E=Object(i.a)(h,2),g=E[0],y=E[1],w=Object(r.useState)(""),v=Object(i.a)(w,2),A=v[0],O=v[1],j=Object(r.useState)(!1),C=Object(i.a)(j,2),F=C[0],S=C[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.c,{onClick:function(){var r;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(s){c.next=5;break}O("You need to specify receive address to proceed"),S(!0),c.next=22;break;case 5:c.prev=5,c.t0=p,c.next="Changelly"===c.t0?9:15;break;case 9:return c.next=11,l.a.awrap(a.createTransaction(e,t,n,o,s,u,null,d,f));case 11:return r=c.sent,y(!0),x(r),c.abrupt("break",16);case 15:throw new Error("".concat(p," transaction not supported yet"));case 16:c.next=22;break;case 18:c.prev=18,c.t1=c.catch(5),O(c.t1.message),S(!0);case 22:case"end":return c.stop()}}),null,null,[[5,18]])},label:"Exchange",mode:"strong"}),c.a.createElement(m.p,{closeButton:!1,width:800,padding:40,visible:g,onClose:function(){return y(!1)}},c.a.createElement("div",{style:{padding:"20px",alignItems:"center"}},c.a.createElement("div",{style:{fontSize:14,paddingLeft:20}}," Transaction Created: ",b.id," "),c.a.createElement("div",{style:{fontSize:24,padding:20}}," ","Please send ",b.amountFrom," ",b.from.toUpperCase()," to:"," "),c.a.createElement("div",{style:{padding:20}},c.a.createElement(m.a,{address:b.payinAddress})),c.a.createElement("div",{style:{fontSize:20,padding:20}},"We will send ",b.amountTo," ",b.to," to ",c.a.createElement(m.k,{entity:b.payoutAddress})," ")),c.a.createElement("div",{style:{fontSize:16,padding:"20px",display:"flex",alignContent:"center"}})),c.a.createElement(m.p,{closeButton:!1,width:600,padding:30,visible:F,onClose:function(){return S(!1)}},c.a.createElement(m.l,{title:"Opps...",mode:"error"},A)))}var M=n(97),L=n(93),I=n(94),N=n(50),P=function(e,t,n,a,r){var c,o,u,i;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l.a.awrap(Promise.all([b(e,t,n,a,r[0]),F(e,t,n,a,r[1])]));case 2:for(c=s.sent,o=0,u=c[0].amount,i=0;i<c.length;i++)c[i].amount>u&&(o=i),u=c[i].amount;return s.abrupt("return",{offers:c,bestOfferIndex:o});case 7:case"end":return s.stop()}}))},z=function(e,t){var n,a,r,c,o;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,l.a.awrap(Promise.all([h(e,t),S(e,t)]));case 2:return n=u.sent,a=n.filter((function(e){return!e.error&&!e.floatError})),r=n.filter((function(e){return!e.error&&!e.fixError})),c=Math.min.apply(Math,Object(N.a)(a.map((function(e){return Number(e.minAmountFloat)})))),o=Math.min.apply(Math,Object(N.a)(r.map((function(e){return Number(e.minAmountFixed)})))),u.abrupt("return",{limits:n,minAmountFixed:o,minAmountFloat:c});case 8:case"end":return u.stop()}}))},B=function(e,t,n,a,r){return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,l.a.awrap(P(e,t,n,a,r));case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}}))},U=function(){var e=Object(r.useState)("btc"),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("eth"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(r.useState)(0),d=Object(i.a)(m,2),f=d[0],p=d[1],x=Object(r.useState)(!1),b=Object(i.a)(x,2),h=b[0],E=b[1],g=Object(r.useState)(0),y=Object(i.a)(g,2),w=y[0],v=y[1],A=Object(r.useState)([]),O=Object(i.a)(A,2),j=O[0],C=O[1],F=Object(r.useState)([]),S=Object(i.a)(F,2),k=S[0],T=S[1],N=Object(I.a)((function(){return Object(M.a)(B,1e3)}));return{debouncedGetOffers:Object(L.useAsync)((function(){var e,t,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n===u||0===f){r.next=8;break}return r.next=3,l.a.awrap(N(n,u,f,h,k));case 3:e=r.sent,t=e.offers,a=e.bestOfferIndex,C(t),v(a);case 8:case"end":return r.stop()}}))}),[n,u,f,h]),from:n,to:u,amount:f,fixed:h,offers:j,limits:k,selectedOfferIndex:w,setUseFix:E,setFrom:a,setTo:s,setAmount:p,setOffers:C,setLimits:T,setOfferIndex:v}};function D(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)("0xbAF99eD5b5663329FA417953007AFCC60f06F781"),s=Object(i.a)(u,2),d=s[0],f=s[1],p=Object(r.useState)("bc1qjl8uwezzlech723lpnyuza0h2cdkvxvh54v3dn"),x=Object(i.a)(p,2),b=x[0],h=x[1],E=U(),g=E.from,y=E.setFrom,w=E.to,v=E.setTo,A=E.amount,O=E.setAmount,j=E.selectedOfferIndex,C=E.debouncedGetOffers,F=E.offers,S=E.fixed,M=E.setUseFix,L=E.setLimits,I=E.setOfferIndex,N=Object(r.useState)(!0),P=Object(i.a)(N,2),B=P[0],D=P[1],R=Object(r.useState)(0),q=Object(i.a)(R,2),W=q[0],J=q[1],V=Object(r.useState)(0),X=Object(i.a)(V,2),Y=X[0],G=X[1],Z=Object(r.useState)({from:"",to:"",amountFrom:0,amountTo:0,payinAddress:"",payoutAddress:"",payinExtraId:"",id:"",exchange:"unkown"}),_=Object(i.a)(Z,2),H=_[0],$=_[1],K=Object(r.useState)(""),Q=Object(i.a)(K,2),ee=Q[0],te=Q[1],ne=Object(r.useState)(""),ae=Object(i.a)(ne,2),re=ae[0],ce=ae[1],oe=Object(r.useState)({symbol:"btc",label:"Bitcoin (btc)"}),ue=Object(i.a)(oe,2),ie=ue[0],se=ue[1],le=Object(r.useState)({symbol:"eth",label:"Ethereum (eth)"}),me=Object(i.a)(le,2),de=me[0],fe=me[1],pe=function(e,t){var n,a,r,c;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,l.a.awrap(z(e,t));case 2:n=o.sent,a=n.limits,r=n.minAmountFixed,c=n.minAmountFloat,L(a),J(c),G(r);case 9:case"end":return o.stop()}}))};return B&&(D(!1),a.getCurrenciesSymbolAndLabel().then((function(e){o(e),pe(g,w)}))),c.a.createElement(m.s,{primary:c.a.createElement("div",null,c.a.createElement("div",{style:{fontSize:16,paddingBottom:8,paddingLeft:"21px",paddingRight:0,textAlign:"left",color:"#637381"}},"You Send"),c.a.createElement(m.b,null,c.a.createElement(m.s,{primary:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.d,{label:"Amount (Min:".concat(S?Y:W,")"),required:!0},c.a.createElement(m.y,{type:"number",value:A,onChange:function(e){!function(e){var t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.target.value,O(t);case 2:case"end":return n.stop()}}))}(e)}})),c.a.createElement(m.d,{label:"Refund Address"},c.a.createElement(m.y,{required:!0,wide:"true",onChange:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:h(e.target.value);case 1:case"end":return t.stop()}}))},type:"text",value:b}))),secondary:c.a.createElement(c.a.Fragment,null,c.a.createElement(m.d,{label:"from"},c.a.createElement(m.z,{items:n.filter((function(e){return!ee||e.label.toLowerCase().indexOf(ee.toLowerCase())>-1})).map((function(e){return e.label})),onChange:te,value:ee,onSelect:function(e){var t,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return te(e),t=n.find((function(t){return t.label===e})),se(t),a=t.symbol,r.next=6,l.a.awrap(pe(a,w));case 6:y(a);case 7:case"end":return r.stop()}}))},renderSelected:function(e){return c.a.createElement(c.a.Fragment,null," ",e.label," ")},selected:ie,onSelectedClick:function(){se(null),te("")},placeholder:"Search To Show More"})))})),c.a.createElement("div",{style:{padding:"15px",display:"flex",justifyContent:"center"}},c.a.createElement("span",{style:{paddingLeft:15,paddingRight:15}}," ",c.a.createElement(m.f,null)," "),c.a.createElement(m.m,{style:{paddingLeft:25},onClick:function(){M(!S)}},S?c.a.createElement(m.g,null):c.a.createElement(m.j,null))),c.a.createElement(m.b,null,c.a.createElement(m.s,{primary:c.a.createElement("div",null,c.a.createElement(m.d,{label:"Offers"},C.loading?c.a.createElement(m.n,null):c.a.createElement(m.q,{onChange:function(e){I(e)},selected:j,items:F.length>0?F.map((function(e){return e.error?{title:"".concat(e.amount," ").concat(w.toUpperCase()),description:"".concat(e.exchange,":  ").concat(e.error)}:{title:"".concat(e.amount," ").concat(w.toUpperCase()),description:"".concat(e.exchange)}})):[{title:"",description:"No ".concat(S?"fix rate":"float rate"," offers ")}]})),c.a.createElement(m.d,{label:"Withdraw Address"},c.a.createElement(m.y,{required:!0,wide:"true",onChange:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:f(e.target.value);case 1:case"end":return t.stop()}}))},type:"text",value:d}))),secondary:c.a.createElement(m.d,{label:"To"},c.a.createElement(m.z,{items:n.filter((function(e){return!re||e.label.toLowerCase().indexOf(re.toLowerCase())>-1})).map((function(e){return e.label})),onChange:ce,value:re,onSelect:function(e){var t,a;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return ce(e),t=n.find((function(t){return t.label===e})),fe(t),a=t.symbol,r.next=6,l.a.awrap(pe(g,a));case 6:v(a);case 7:case"end":return r.stop()}}))},renderSelected:function(e){return c.a.createElement(c.a.Fragment,null,e.label)},selected:de,onSelectedClick:function(){fe(null),ce("")},placeholder:"Ethereum"}))})),c.a.createElement("div",{style:{padding:"20px",display:"flex",justifyContent:"center"}},T(S,0!==F.length?F[j].id:"",g,w,A,d,b,null,0!==F.length?F[j].exchange:"",$,H))),secondary:k(H)})}var R=n(95),q=n.n(R),W=n(96),J=n.n(W);n(195);var V=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement(m.o,null,c.a.createElement(m.e,{primary:c.a.createElement(c.a.Fragment,null),secondary:c.a.createElement(m.c,{label:"Learn More",icon:c.a.createElement(m.h,null),onClick:function(){a(!0)}})}),c.a.createElement(D,null),c.a.createElement(m.r,{title:"About BestSwap",opened:n,onClose:function(){return a(!1)}},c.a.createElement("div",{style:{padding:20,fontSize:15}}," Powered By "),c.a.createElement(m.b,null,c.a.createElement("img",{width:300,src:q.a,alt:"aragon-ui"})),c.a.createElement(m.b,null,c.a.createElement("img",{width:300,src:J.a,alt:"aragon-ui"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,n){e.exports=n.p+"static/media/aragonui-logo.c72415d5.png"},96:function(e,t,n){e.exports=n.p+"static/media/changelly-logo.1cd0e575.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.fcbe99e3.chunk.js.map