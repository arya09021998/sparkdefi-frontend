(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[12],{1158:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return yn}));var r,c,a,i,s,o,u,l,b,d,j,p=n(3),x=n.n(p),f=n(14),h=n(15),O=n(0),m=n.n(O).a.createContext({mostRecentLotteryNumber:0,historyError:!1,historyData:[]}),g=n(11),v=n.n(g),y=n(465),w=n(410),k=n(409),S=(n(31),n(35)),C=n(20),L=function(){var e=Object(f.a)(x.a.mark((function e(t,n){var r,c,a,i,s,o,u,l;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(S.q)(),c=new y.b(t),a=[],!(n.length>100)){e.next=12;break}i=0,s=x.a.mark((function e(){var t,s,o,u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.slice(100*i,100*(i+1)),s=t.map((function(e){return[e[0].toLowerCase(),c.encodeFunctionData(e[1],e[2])]})),e.next=4,r.methods.aggregate(s).call();case 4:o=e.sent,u=o.returnData,i++,a=a.concat(u.map((function(e,n){return c.decodeFunctionResult(t[n][1],e)})));case 8:case"end":return e.stop()}}),e)}));case 6:if(!(i<n.length/100)){e.next=10;break}return e.delegateYield(s(),"t0",8);case 8:e.next=6;break;case 10:e.next=18;break;case 12:return o=n.map((function(e){return[e[0].toLowerCase(),c.encodeFunctionData(e[1],e[2])]})),e.next=15,r.methods.aggregate(o).call();case 15:u=e.sent,l=u.returnData,a=l.map((function(e,t){return c.decodeFunctionResult(n[t][1],e)}));case 18:return e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(x.a.mark((function e(t,n,r,c){var a,i,s,o,u,l,b,d,j,p;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,t.methods.issueIndex().call();case 4:e.t0=e.sent;case 5:return a=e.t0,e.next=8,D(n,r);case 8:return i=e.sent,s=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=12,L(w,s);case 12:return o=e.sent,u=o.map((function(e){return e.toString()})),l=u.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=17,L(w,l);case 17:return b=e.sent,d=[],b.forEach(function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new v.a(t).eq(a)&&d.push(u[n]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),j=d.map((function(e){return[n.options.address,"getLotteryNumbers",[e]]})),e.next=23,L(w,j);case 23:return p=e.sent,e.next=26,F(t);case 26:return e.abrupt("return",p);case 27:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.balanceOf(n).call());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(x.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,d,j;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return e.next=4,D(n,r);case 4:return c=e.sent,a=Array.apply(null,{length:c}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=8,L(w,a);case 8:return i=e.sent,s=i.map((function(e){return e.toString()})),o=s.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=13,L(w,o);case 13:return u=e.sent,l=s.filter((function(e,t){return!u[t][0]})),b=l.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=18,L(k,b);case 18:return d=e.sent,j=[],d.forEach((function(e,t){e>0&&j.push(l[t])})),j.length>200&&(j=j.slice(0,200)),e.prev=22,e.abrupt("return",t.methods.multiClaim(j).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 26:return e.prev=26,e.t0=e.catch(22),e.abrupt("return",console.error(e.t0));case 29:case"end":return e.stop()}}),e,null,[[22,26]])})));return function(t,n,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(x.a.mark((function e(t,n,r){var c,a,i,s,o,u,l,b,d,j,p,h,O,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.issueIndex().call();case 3:return c=e.sent,e.next=6,D(n,r);case 6:return a=e.sent,i=Array.apply(null,{length:a}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=10,L(w,i);case 10:return s=e.sent,o=s.map((function(e){return e.toString()})),u=o.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=15,L(w,u);case 15:return l=e.sent,b=o.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=19,L(w,b);case 19:return d=e.sent,e.next=22,F(t);case 22:return j=e.sent,p=[],l.forEach(function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(j||t.toString()!==c)&&(d[n][0]||p.push(o[n]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=p.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=28,L(k,h);case 28:return O=e.sent,m=O.reduce((function(e,t){return v.a.sum(e,t)}),C.d),e.abrupt("return",m);case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0);case 36:return e.abrupt("return",C.d);case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(t,n,r){return e.apply(this,arguments)}}(),M=function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.drawed().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,r,c,a,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,r=[],e.next=6,t.methods.drawed().call();case 6:if((c=e.sent)||0!==parseInt(n,10)){e.next=9;break}return e.abrupt("return",[0,0,0,0]);case 9:if(c){e.next=22;break}a=0;case 11:if(!(a<4)){e.next=20;break}return e.t0=r,e.next=15,t.methods.historyNumbers(n-1,a).call();case 15:e.t1=+e.sent.toString(),e.t0.push.call(e.t0,e.t1);case 17:a++,e.next=11;break;case 20:e.next=32;break;case 22:i=0;case 23:if(!(i<4)){e.next=32;break}return e.t2=r,e.next=27,t.methods.winningNumbers(i).call();case 27:e.t3=+e.sent.toString(),e.t2.push.call(e.t2,e.t3);case 29:i++,e.next=23;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(49),N=n(190),R=n(17),B=n(5),H=n(4),P=n(19),Q=n(193),U=n(1),q=Object(B.e)(H.S).attrs({as:"h1",scale:"xl"})(r||(r=Object(R.a)(["\n  color: #ffffff;\n  margin-bottom: 24px;\n  text-shadow: 2px 2px 2px #00000040;\n"]))),K=Object(B.e)(H.Mb)(c||(c=Object(R.a)(["\n  background: -webkit-linear-gradient(#ffd800, #eb8c00);\n  font-size: 24px;\n  font-weight: 600;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]))),V=B.e.div(a||(a=Object(R.a)(["\n  background-image: linear-gradient(#7645d9, #452a7a);\n  max-height: max-content;\n  overflow: hidden;\n  "," {\n    max-height: 256px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),W=Object(B.e)(Q.a)(i||(i=Object(R.a)(["\n  display: flex;\n\n  flex-direction: column-reverse;\n\n  "," {\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Y=B.e.div(s||(s=Object(R.a)(["\n  flex: 1;\n  padding-right: 0;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    padding-right: 24px;\n  }\n\n  "," {\n    padding-right: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),J=B.e.div(o||(o=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 0;\n\n  & img {\n    width: 80%;\n  }\n\n  "," {\n    margin-top: 0;\n    padding-left: 24px;\n  }\n\n  "," {\n    padding-left: 32px;\n    & img {\n      margin-top: -25px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Z=function(){var e=Object(P.b)().t;return Object(U.jsx)(V,{children:Object(U.jsxs)(W,{children:[Object(U.jsxs)(Y,{children:[Object(U.jsx)(q,{children:e("The Lottery Is Changing!")}),Object(U.jsx)(K,{children:e("Come back soon!")}),Object(U.jsx)(H.cb,{bold:!0,mt:20,external:!0,href:"https://pancakeswap.medium.com/pancakeswap-april-may-recap-a4e7cf990f72",children:e("Learn more")})]}),Object(U.jsx)(J,{children:Object(U.jsx)("img",{src:"/images/tombola.png",alt:"lottery bunny"})})]})})},$=n(10),G=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.pancakeswap.com/api/singleLottery?lotteryNumber=".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(O.useState)(!0),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(O.useState)(null),a=Object(h.a)(c,2),i=a[0],s=a[1],o=Object(O.useState)(null),u=Object(h.a)(o,2),l=u[0],b=u[1],d=Object(O.useContext)(m).mostRecentLotteryNumber;return Object(O.useEffect)((function(){d>0&&function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,G(d);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0);case 11:return e.prev=11,r(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()()}),[d,s,r,b]),{isLoading:n,data:i,mostRecentLotteryNumber:d,error:l}},_=B.e.div(u||(u=Object(R.a)(["\n  margin-bottom: 24px;\n"]))),ee=B.e.div(l||(l=Object(R.a)(["\n  position: relative;\n"]))),te=B.e.div(b||(b=Object(R.a)(["\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  /* Firefox */\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n"]))),ne=B.e.div(d||(d=Object(R.a)(["\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translate(0%, -50%);\n  width: auto;\n"]))),re=function(e){var t=e.initialLotteryNumber,n=e.onSubmit,r=Object(O.useState)(t),c=Object(h.a)(r,2),a=c[0],i=c[1],s=Object(O.useState)(!1),o=Object(h.a)(s,2),u=o[0],l=o[1],b=Object(P.b)().t;return Object(U.jsxs)(_,{children:[Object(U.jsx)(H.Mb,{children:b("Select lottery number:")}),Object(U.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(a)},children:Object(U.jsxs)(ee,{children:[Object(U.jsx)(te,{children:Object(U.jsx)(H.Y,{value:a,type:"number",inputMode:"numeric",min:"0",isWarning:u,max:t,onChange:function(e){if(e.currentTarget.value){var n=parseInt(e.currentTarget.value,10);l(n>t),i(n)}else i(t)}})}),Object(U.jsx)(ne,{children:Object(U.jsx)(H.q,{type:"submit",scale:"sm",disabled:u,children:b("Search")})})]})})]})},ce=function(e){var t=e.error;return Object(U.jsx)(H.Mb,{p:"24px",children:t.message})},ae=n(86),ie=B.e.div(j||(j=Object(R.a)(["\n  margin-right: 16px;\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n"]))),se=function(e){var t=e.valueToDisplay,n=e.children,r=e.Icon,c=Object(ae.a)(e,["valueToDisplay","children","Icon"]);return Object(U.jsxs)(H.R,Object($.a)(Object($.a)({},c),{},{children:[r&&Object(U.jsx)(ie,{children:Object(U.jsx)(r,{})}),Object(U.jsxs)(H.R,{flexDirection:"column",children:[Object(U.jsx)(H.Mb,{fontSize:"14px",color:"textSubtle",children:n}),Object(U.jsx)(H.S,{scale:"lg",children:t})]})]}))};se.defaultProps={valueToDisplay:"",Icon:function(){return Object(U.jsx)("div",{})},children:""};var oe,ue,le,be,de,je,pe,xe,fe,he,Oe,me,ge,ve,ye,we,ke,Se,Ce,Le,ze,De,Ae,Ie,Me,Fe,Te,Ee,Ne,Re,Be,He,Pe,Qe,Ue,qe,Ke,Ve,We,Ye,Je,Ze,$e,Ge,Xe,_e=se,et=n(36),tt=n(100),nt=n(212),rt=function(){var e=Object(O.useState)(C.d),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(O.useState)(!1),a=Object(h.a)(c,2),i=a[0],s=a[1],o=Object(et.c)().account,u=Object(E.m)(),l=Object(E.l)(),b=Object(nt.a)(),d=b.lastUpdated,j=b.setLastUpdated,p=Object(O.useCallback)(Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,I(l,u,o);case 3:t=e.sent,r(t),s(!1);case 6:case"end":return e.stop()}}),e)}))),[o,l,u]);return Object(O.useEffect)((function(){o&&l&&u&&p()}),[o,p,l,u,d]),{claimLoading:i,claimAmount:n,setLastUpdated:j}},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(O.useState)([]),n=Object(h.a)(t,2),r=n[0],c=n[1],a=Object(et.c)(),i=a.account,s=Object(E.m)(),o=Object(E.l)(),u=Object(tt.a)(),l=u.fastRefresh;return Object(O.useEffect)((function(){i&&o&&s&&function(){var t=Object(f.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(o,s,i,e);case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,o,s,l,e]),r},at=n(142),it=B.e.div(oe||(oe=Object(R.a)(["\n  color: #ff8c28;\n"]))),st=B.e.div(ue||(ue=Object(R.a)(["\n  text-align: center;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),ot=Object(B.e)(H.q)(le||(le=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[2]})),ut=function(e){var t=e.myTicketNumbers,n=e.onDismiss,r=e.from,c=function(){var e=Object(O.useState)([0,0,0,0]),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(E.l)(),a=Object(tt.a)().fastRefresh;return Object(O.useEffect)((function(){c&&function(){var e=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(c);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,c,r]),n}(),a=Object(P.b)().t,i=Object(O.useCallback)((function(e){for(var t=0,n=c.length-1;n>=0;n--)c[n]==e[n]&&t++;return t}),[c]),s=t.map((function(e,t){if(i(e[0])>1&&"buy"!==r){var n=new Array(i(e[0])+1).join("\ud83e\udd11");return Object(U.jsxs)(it,{children:[n,e.toString(),n]},t)}return Object(U.jsx)("p",{children:e.toString()},t)}));return Object(U.jsxs)(H.mb,{title:a("My Tickets (Total: %TICKETS%)",{TICKETS:t.length}),onDismiss:n,children:[Object(U.jsx)(st,{children:Object(U.jsx)("h2",{children:s})}),Object(U.jsx)(ot,{variant:"secondary",onClick:n,children:a("Close")})]})},lt=B.e.div(be||(be=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-top: 24px;\n\n  & > div {\n    flex: 1;\n    width: 100%;\n  }\n"]))),bt=Object(B.e)(H.cb)(de||(de=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  height: 48px;\n  justify-content: center;\n  text-decoration: none;\n  width: 100%;\n"]))),dt=function(e){var t=e.contractLink,n=e.lotteryNumber,r=Object(P.b)().t,c=ct(n),a=c.length,i=Object(H.ec)(Object(U.jsx)(ut,{myTicketNumbers:c,from:"buy"})),s=Object(h.a)(i,1)[0];return Object(et.c)().account?Object(U.jsxs)(lt,{children:[Object(U.jsx)(H.q,{disabled:0===a,onClick:s,width:"100%",children:r("View your tickets")}),Object(U.jsx)(bt,{href:t,children:r("View on BscScan")})]}):Object(U.jsx)(lt,{children:Object(U.jsx)(at.a,{})})},jt=n(37),pt=n(918),xt=B.e.div(je||(je=Object(R.a)(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(4, auto);\n"])),(function(e){return e.pastDraw?3:2})),ft=Object(B.e)(H.Mb)(pe||(pe=Object(R.a)(["\n  text-align: right;\n"]))),ht=Object(B.e)(H.S)(xe||(xe=Object(R.a)(["\n  text-align: right;\n"]))),Ot=B.e.div(fe||(fe=Object(R.a)(["\n  margin-bottom: ",";\n"])),(function(e){return e.marginBottom?e.marginBottom:"10px"})),mt=Object(B.e)(Ot)(he||(he=Object(R.a)(["\n  transform: translate(-40%, 0%);\n"]))),gt=function(e){var t=e.lotteryPrizeAmount,n=void 0===t?0:t,r=e.pastDraw,c=void 0!==r&&r,a=e.jackpotMatches,i=e.twoTicketMatches,s=e.threeTicketMatches,o=+(n/100*50).toFixed(0),u=+(n/100*20).toFixed(0),l=+(n/100*10).toFixed(0),b=+(n/100*20).toFixed(0),d=Object(P.b)().t,j=Object(jt.F)(),p=function(e){return new g.BigNumber(e).multipliedBy(j).toNumber()};return Object(U.jsxs)(xt,{pastDraw:c,children:[Object(U.jsx)(Ot,{children:Object(U.jsx)(H.Mb,{fontSize:"14px",color:"textSubtle",children:d("No. Matched")})}),c&&Object(U.jsx)(mt,{children:Object(U.jsx)(ft,{fontSize:"14px",color:"textSubtle",children:d("Winners")})}),Object(U.jsx)(Ot,{children:Object(U.jsx)(ft,{fontSize:"14px",color:"textSubtle",children:d("Prize Pot")})}),Object(U.jsx)(Ot,{children:Object(U.jsx)(H.S,{scale:"md",children:"4"})}),c&&Object(U.jsx)(mt,{children:Object(U.jsx)(ht,{scale:"md",children:a})}),Object(U.jsx)(Ot,{children:Object(U.jsxs)(ht,{scale:"md",children:[o.toLocaleString(),!c&&j.gt(0)&&Object(U.jsx)(pt.a,{value:p(o)})]})}),Object(U.jsx)(Ot,{children:Object(U.jsx)(H.Mb,{bold:!0,children:"3"})}),c&&Object(U.jsx)(mt,{children:Object(U.jsx)(ft,{bold:!0,children:s})}),Object(U.jsx)(Ot,{children:Object(U.jsxs)(ft,{children:[u.toLocaleString(),!c&&j.gt(0)&&Object(U.jsx)(pt.a,{value:p(u)})]})}),Object(U.jsx)(Ot,{children:Object(U.jsx)(H.Mb,{children:"2"})}),c&&Object(U.jsx)(mt,{children:Object(U.jsx)(ft,{children:i})}),Object(U.jsx)(Ot,{children:Object(U.jsxs)(ft,{children:[l.toLocaleString(),!c&&j.gt(0)&&Object(U.jsx)(pt.a,{value:p(l)})]})}),Object(U.jsx)(Ot,{marginBottom:"0",children:Object(U.jsxs)(H.Mb,{children:[d(c?"Burned":"To burn"),":"]})}),c?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Ot,{marginBottom:"0"}),Object(U.jsx)(Ot,{marginBottom:"0",children:Object(U.jsx)(ft,{children:b.toLocaleString()})})]}):Object(U.jsx)(Ot,{marginBottom:"0",children:Object(U.jsx)(ft,{children:b.toLocaleString()})})]})},vt=function(e){if(!e)return{};var t=new Date(e),n=t.toDateString();return{hours:t.getUTCHours(),monthAndDay:n.split(" ").splice(1,2).join(" ")}},yt=B.e.div(Oe||(Oe=Object(R.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),wt=function(e){var t=e.timeValue,n=vt(t),r=n.monthAndDay,c=n.hours;return Object(U.jsx)(yt,{children:Object(U.jsxs)(H.Mb,{fontSize:"14px",children:[r,", ",c,":00 UTC"]})})},kt=B.e.div(me||(me=Object(R.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),St=Object(B.e)(_e)(ge||(ge=Object(R.a)(["\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[4]})),Ct=function(e){var t=e.data,n=Object(P.b)().t,r=t.contractLink,c=t.jackpotTicket,a=t.lotteryDate,i=t.lotteryNumber,s=t.lotteryNumbers,o=t.match2Ticket,u=t.match3Ticket,l=t.poolSize;return!t.error&&t&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(H.v,{children:Object(U.jsxs)(kt,{children:[Object(U.jsx)(wt,{timeValue:a}),Object(U.jsx)(H.S,{scale:"md",mb:"24px",children:n("Round #%num%",{num:i})}),Object(U.jsx)(St,{valueToDisplay:"".concat(s[0],", ").concat(s[1],", ").concat(s[2],", ").concat(s[3]),Icon:H.Ob,children:n("Winning numbers")}),Object(U.jsx)(_e,{valueToDisplay:"".concat(l.toLocaleString()," CAKE"),Icon:H.vb,children:n("Total prizes")})]})}),Object(U.jsxs)(H.w,{children:[Object(U.jsx)(gt,{lotteryPrizeAmount:l,jackpotMatches:c,twoTicketMatches:o,threeTicketMatches:u,pastDraw:!0}),Object(U.jsx)(dt,{contractLink:r,lotteryNumber:i})]})]})},Lt=function(e){var t=e.error,n=e.data;return Object(U.jsx)(H.u,{children:t.message?Object(U.jsx)(ce,{error:t}):Object(U.jsx)(Ct,{data:n})})},zt=B.e.div(ve||(ve=Object(R.a)(["\n  border: 8px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 8px solid #ddd;\n  border-bottom: 8px solid #ddd;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),Dt=function(){return Object(U.jsx)(zt,{})},At=B.e.div(ye||(ye=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),It=Object(B.e)(H.v)(we||(we=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 552px; // height of final card\n"]))),Mt=function(){var e=Object(O.useState)({roundData:null,error:{message:null,type:null},isInitialized:!1,isLoading:!0}),t=Object(h.a)(e,2),n=t[0],r=t[1],c=X(),a=c.data,i=c.mostRecentLotteryNumber,s=Object(P.b)().t,o=n.roundData,u=n.error,l=n.isInitialized,b=n.isLoading;Object(O.useEffect)((function(){a&&r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!1,isInitialized:!0,roundData:a})}))}),[a,r]);var d=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r((function(e){return Object($.a)(Object($.a)({},e),{},{isLoading:!0})})),G(t).then((function(e){e.error?r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("The lottery number you provided does not exist"),type:"out of range"},isLoading:!1,isInitialized:!0})})):r((function(t){return Object($.a)(Object($.a)({},t),{},{error:{message:null,type:null},roundData:e,isLoading:!1,isInitialized:!0})}))})).catch((function(){r((function(e){return Object($.a)(Object($.a)({},e),{},{error:{message:s("Error fetching data"),type:"api"},isLoading:!1,isInitialized:!0})}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsxs)(At,{children:[Object(U.jsx)(re,{initialLotteryNumber:i,onSubmit:d}),!l||b?Object(U.jsx)(H.u,{children:Object(U.jsx)(It,{children:Object(U.jsx)(Dt,{})})}):Object(U.jsx)(Lt,{error:u,data:o})]})},Ft=B.e.div(ke||(ke=Object(R.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n  box-shadow: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n  background: ",";\n  transition: border-radius 0.15s;\n"])),(function(e){return e.theme.shadows.inset}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.colors.input})),Tt=B.e.div(Se||(Se=Object(R.a)(["\n  min-width: 136px;\n  height: 0;\n  position: absolute;\n  overflow: hidden;\n  background: ",";\n  z-index: ",";\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  opacity: 0;\n  width: 100%;\n\n  "," {\n    min-width: 168px;\n  }\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.zIndices.dropdown}),(function(e){return e.theme.mediaQueries.sm})),Et=B.e.div(Ce||(Ce=Object(R.a)(["\n  cursor: pointer;\n  width: ","px;\n  position: relative;\n  background: ",";\n  border-radius: 16px;\n  height: 40px;\n  min-width: 136px;\n  user-select: none;\n\n  "," {\n    min-width: 168px;\n  }\n\n  ","\n\n  svg {\n    position: absolute;\n    right: 16px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.colors.input}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.isOpen&&Object(B.d)(Le||(Le=Object(R.a)(["\n      "," {\n        border-bottom: 1px solid ",";\n        box-shadow: ",";\n        border-radius: 16px 16px 0 0;\n      }\n\n      "," {\n        height: auto;\n        transform: scaleY(1);\n        opacity: 1;\n        border: 1px solid ",";\n        border-top-width: 0;\n        border-radius: 0 0 16px 16px;\n        box-shadow: ",";\n      }\n    "])),Ft,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}),Tt,(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.tooltip.boxShadow}))})),Nt=B.e.ul(ze||(ze=Object(R.a)(["\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  z-index: ",";\n"])),(function(e){return e.theme.zIndices.dropdown})),Rt=B.e.li(De||(De=Object(R.a)(["\n  list-style: none;\n  padding: 8px 16px;\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.inputSecondary})),Bt=function(e){var t=e.options,n=e.onChange,r=Object(O.useRef)(null),c=Object(O.useRef)(null),a=Object(O.useState)(!1),i=Object(h.a)(a,2),s=i[0],o=i[1],u=Object(O.useState)(0),l=Object(h.a)(u,2),b=l[0],d=l[1],j=Object(O.useState)({width:0,height:0}),p=Object(h.a)(j,2),x=p[0],f=p[1],m=function(){return o(!s)};return Object(O.useEffect)((function(){f({width:c.current.offsetWidth,height:c.current.offsetHeight})}),[]),Object(U.jsxs)(Et,Object($.a)(Object($.a)({isOpen:s,ref:r},x),{},{children:[0!==x.width&&Object(U.jsx)(Ft,{onClick:m,children:Object(U.jsx)(H.Mb,{children:t[b].label})}),Object(U.jsx)(H.d,{color:"text",onClick:m}),Object(U.jsx)(Tt,{children:Object(U.jsx)(Nt,{ref:c,children:t.map((function(e,r){return r!==b?Object(U.jsx)(Rt,{onClick:(c=r,function(){d(c),o(!1),n&&n(t[c])}),children:Object(U.jsx)(H.Mb,{children:e.label})},e.label):null;var c}))})})]}))},Ht=n(89),Pt=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,1152))})),Qt=Object(O.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,1153))})),Ut=B.e.div(Ae||(Ae=Object(R.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),qt=function(e){var t=e.showLast,n=Object(P.b)().t,r=Object(Ht.a)().isDark,c=Object(O.useContext)(m),a=c.historyData,i=c.historyError,s=function(e){var n=a.map((function(t){return t[e]})).reverse();return"max"===t?n:n.slice(-1*Number(t))},o=function(e){return{borderColor:e.color,fill:!1,borderWidth:2,pointRadius:0,pointHitRadius:10}},u=function(){return{labels:s("lotteryNumber"),datasets:[Object($.a)({label:n("Pool Size"),data:s("poolSize"),yAxisID:"y-axis-pool"},o({color:"#7A6EAA"})),Object($.a)({label:n("Burned"),data:s("burned"),yAxisID:"y-axis-burned"},o({color:"#1FC7D4"}))]}},l=function(e){var t=e.color,n=e.lineHeight,r=e.prefix,c=void 0===r?"":r;return{borderCapStyle:"round",gridLines:{display:!1},ticks:{fontFamily:"Kanit, sans-serif",fontColor:t,fontSize:12,lineHeight:n,maxRotation:0,beginAtZero:!0,autoSkipPadding:15,userCallback:function(e){return"".concat(c).concat(e.toLocaleString())}}}},b=Object(O.useMemo)((function(){return{tooltips:{mode:"index",intersect:!1,cornerRadius:16,backgroundColor:"#27262c",xPadding:16,yPadding:16,caretSize:6,titleFontFamily:"Kanit, sans-serif",titleFontSize:16,titleMarginBottom:8,bodyFontFamily:"Kanit, sans-serif",bodyFontSize:16,bodySpacing:8,beforeBody:"##",callbacks:{title:function(e){return"".concat(n("Round #%num%",{num:e[0].label}))},label:function(e){return" ".concat(e.yLabel.toLocaleString()," CAKE")},labelColor:function(e,t){return{borderColor:t.config.data.datasets[e.datasetIndex].cardBorder,backgroundColor:t.config.data.datasets[e.datasetIndex].borderColor}}}},legend:{display:!1},scales:{yAxes:[Object($.a)({type:"linear",position:"left",id:"y-axis-pool"},l({color:"#7A6EAA",lineHeight:1.6})),Object($.a)({type:"linear",position:"right",id:"y-axis-burned"},l({color:"#1FC7D4",lineHeight:1.5}))],xAxes:[Object($.a)({},l({color:r?"#FFFFFF":"#452A7A",lineHeight:1,prefix:"#"}))]}}}),[r,n]);return Object(U.jsxs)(U.Fragment,{children:[i&&Object(U.jsx)(Ut,{children:Object(U.jsx)(H.Mb,{children:n("Error fetching data")})}),!i&&a.length>1?Object(U.jsx)(O.Suspense,{fallback:Object(U.jsx)(H.R,{justifyContent:"center",children:Object(U.jsx)(Dt,{})}),children:50===t||100===t?Object(U.jsx)(Qt,{data:u(),options:b}):Object(U.jsx)(Pt,{data:u(),options:b,type:"line"})}):Object(U.jsx)(Ut,{children:Object(U.jsx)(Dt,{})})]})},Kt=B.e.div(Ie||(Ie=Object(R.a)(["\n  display: flex;\n  margin: 24px 0 24px;\n"]))),Vt=B.e.div(Me||(Me=Object(R.a)(["\n  display: flex;\n  margin-right: 18px;\n  align-items: center;\n"]))),Wt=B.e.div(Fe||(Fe=Object(R.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-color: ",";\n  margin-right: 6px;\n"])),(function(e){var t=e.isPoolSize,n=e.theme;return t?"#7A6EAA":n.colors.primary})),Yt=function(){var e=Object(P.b)().t;return Object(U.jsxs)(Kt,{children:[Object(U.jsxs)(Vt,{children:[Object(U.jsx)(Wt,{isPoolSize:!0}),Object(U.jsx)(H.Mb,{children:e("Pool Size")})]}),Object(U.jsxs)(Vt,{children:[Object(U.jsx)(Wt,{}),Object(U.jsx)(H.Mb,{children:e("Burned")})]})]})},Jt=B.e.div(Te||(Te=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex-direction: column-reverse;\n\n  "," {\n    flex-wrap: nowrap;\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Zt=B.e.div(Ee||(Ee=Object(R.a)(["\n  margin-top: 24px;\n\n  "," {\n    margin-top: 0;\n  }\n\n  > "," {\n    font-size: 12px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),H.Mb),$t=function(){var e=Object(P.b)().t,t=Object(O.useState)(50),n=Object(h.a)(t,2),r=n[0],c=n[1];return Object(U.jsx)(H.u,{children:Object(U.jsxs)(H.v,{children:[Object(U.jsx)(H.S,{scale:"md",children:e("History")}),Object(U.jsxs)(Jt,{children:[Object(U.jsx)(Yt,{}),Object(U.jsxs)(Zt,{children:[Object(U.jsx)(H.Mb,{textTransform:"uppercase",children:e("Show Last")}),Object(U.jsx)(Bt,{options:[{label:"50",value:50},{label:"100",value:100},{label:"200",value:200},{label:e("Max"),value:"max"}],onChange:function(e){c(e.value)}})]})]}),Object(U.jsx)(qt,{showLast:r})]})})},Gt=n(23),Xt=B.e.div(Ne||(Ne=Object(R.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),_t=B.e.div(Re||(Re=Object(R.a)(["\n  margin-bottom: 16px;\n\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),en=B.e.div(Be||(Be=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[3]})),tn=B.e.div(He||(He=Object(R.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),nn=Object(B.e)(H.q)(Pe||(Pe=Object(R.a)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.spacing[1]})),rn=function(e){var t=e.onSuccess,n=Object(O.useState)(!1),r=Object(h.a)(n,2),c=r[0],a=r[1],i=Object(P.b)().t,s=rt(),o=s.claimLoading,u=s.claimAmount,l=function(){var e=Object(et.c)().account,t=Object(E.l)(),n=Object(E.m)();return{onMultiClaim:Object(O.useCallback)(Object(f.a)(x.a.mark((function r(){var c;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A(t,n,e);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,t,n])}}().onMultiClaim,b=ct(),d=Object(H.ec)(Object(U.jsx)(ut,{myTicketNumbers:b,from:"buy"})),j=Object(h.a)(d,1)[0],p=Object(O.useCallback)(Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,l();case 4:e.sent&&(t(),a(!1)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[l,a,t]),m=Object(Gt.c)(u).toFixed(2);return Object(U.jsxs)(tn,{children:[Object(U.jsx)(_t,{children:Object(U.jsx)(H.Zb,{})}),Object(U.jsx)(H.S,{as:"h3",scale:"lg",color:"secondary",children:i("You won!")}),o&&Object(U.jsx)(Dt,{}),!o&&Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(Xt,{children:[Object(U.jsx)(H.S,{as:"h4",scale:"xl",style:{marginRight:"6px"},children:m}),Object(U.jsx)(H.S,{as:"h4",scale:"lg",children:"CAKE"})]})}),Object(U.jsx)(en,{children:Object(U.jsx)(H.q,{width:"100%",disabled:c,onClick:p,children:i("Collect")})}),Object(U.jsx)(nn,{variant:"text",onClick:j,children:i("View your tickets")})]})},cn=B.e.div(Qe||(Qe=Object(R.a)(["\n  display: flex;\n"]))),an=B.e.div(Ue||(Ue=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),sn=Object(B.e)(H.Mb)(qe||(qe=Object(R.a)(["\n  padding-left: 12px;\n"]))),on=B.e.img(Ke||(Ke=Object(R.a)(["\n  margin-right: 6px;\n\n  "," {\n    margin-right: 20px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),un=Object(B.e)(H.q)(Ve||(Ve=Object(R.a)(["\n  padding: 0 12px;\n  height: unset;\n"]))),ln=function(){var e=Object(P.b)().t,t=ct(),n=Object(H.ec)(Object(U.jsx)(ut,{myTicketNumbers:t,from:"buy"})),r=Object(h.a)(n,1)[0];return Object(U.jsxs)(cn,{children:[Object(U.jsx)(on,{src:"/images/no-prize.svg",alt:"no prizes won"}),Object(U.jsxs)(an,{children:[Object(U.jsx)(sn,{color:"textDisabled",children:e("Sorry, no prizes to collect")}),Object(U.jsx)(un,{variant:"text",onClick:r,children:e("View your tickets")})]})]})},bn=Object(B.e)(H.u)(We||(We=Object(R.a)(["\n  ","\n"])),(function(e){return e.isDisabled?"  \n        margin-top: 16px;\n        background-color: unset;\n        box-shadow: unset;\n        border: 1px solid ".concat(e.theme.colors.textDisabled,";\n\n        ").concat(e.theme.mediaQueries.sm," {\n          margin-top: 24px;\n        }\n\n        ").concat(e.theme.mediaQueries.lg," {\n          margin-top: 32px;\n        }\n        "):""})),dn=function(e){var t=e.isAWin,n=e.onSuccess;return Object(U.jsx)(bn,{isDisabled:!t,isActive:t,children:Object(U.jsx)(H.v,{children:t?Object(U.jsx)(rn,{onSuccess:n}):Object(U.jsx)(ln,{})})})},jn=Object(B.e)(H.v)(Ye||(Ye=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  max-height: 196px;\n"]))),pn=Object(B.e)(H.S)(Je||(Je=Object(R.a)(["\n  margin: 16px 0;\n"]))),xn=B.e.div(Ze||(Ze=Object(R.a)(["\n  svg {\n    width: 80px;\n    height: 80px;\n  }\n"]))),fn=function(){var e=Object(P.b)().t;return Object(U.jsx)(H.u,{isActive:!0,children:Object(U.jsxs)(jn,{children:[Object(U.jsx)(xn,{children:Object(U.jsx)(H.Nb,{})}),Object(U.jsxs)("div",{children:[Object(U.jsx)(pn,{scale:"md",children:e("Unlock wallet to access lottery")}),Object(U.jsx)(at.a,{})]})]})})},hn=function(){var e=Object(et.c)().account,t=rt(),n=t.claimAmount,r=t.setLastUpdated,c=Object(Gt.c)(n)>0,a=Object(O.useCallback)((function(){r()}),[r]);return Object(U.jsx)(H.m,{mb:"32px",children:e?Object(U.jsx)(dn,{isAWin:c,onSuccess:a}):Object(U.jsx)(fn,{})})},On=Object(B.e)(H.i)($e||($e=Object(R.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),mn=B.e.div(Ge||(Ge=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),gn=B.e.div(Xe||(Xe=Object(R.a)(["\n  display: flex;\n  margin-top: 32px;\n  justify-content: center;\n"]))),vn=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(hn,{}),Object(U.jsxs)(On,{children:[Object(U.jsx)(Mt,{}),Object(U.jsxs)(mn,{children:[Object(U.jsx)($t,{}),Object(U.jsx)(gn,{children:Object(U.jsx)("img",{src:"/images/pancake-lottery-bunny.png",alt:"lottery bunny"})})]})]})]})},yn=function(){var e=Object(E.l)(),t=Object(O.useState)([]),n=Object(h.a)(t,2),r=n[0],c=n[1],a=Object(O.useState)(!1),i=Object(h.a)(a,2),s=i[0],o=i[1],u=Object(O.useState)(0),l=Object(h.a)(u,2),b=l[0],d=l[1],j=Object(O.useState)(1),p=Object(h.a)(j,2),g=p[0],v=p[1];return Object(O.useEffect)((function(){fetch("https://api.pancakeswap.com/api/lotteryHistory").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(){o(!0)}))}),[]),Object(O.useEffect)((function(){e&&function(){var t=Object(f.a)(x.a.mark((function t(){var n,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:n=t.sent,r=n-1,d(n),v(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Z,{}),Object(U.jsx)(N.a,{children:Object(U.jsx)(m.Provider,{value:{historyError:s,historyData:r,mostRecentLotteryNumber:g,currentLotteryNumber:b},children:Object(U.jsx)(vn,{})})})]})}},908:function(e,t,n){"use strict";var r=n(0),c=n(308),a=n(4),i=n(1);t.a=function(e){var t=e.value,n=e.decimals,s=e.fontSize,o=void 0===s?"40px":s,u=e.lineHeight,l=void 0===u?"1":u,b=e.prefix,d=void 0===b?"":b,j=e.bold,p=void 0===j||j,x=e.color,f=void 0===x?"text":x,h=Object(c.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=h.countUp,m=h.update,g=Object(r.useRef)(m);return Object(r.useEffect)((function(){g.current(t)}),[t,g]),Object(i.jsxs)(a.Mb,{bold:p,fontSize:o,style:{lineHeight:l},color:f,children:[d,O]})}},918:function(e,t,n){"use strict";var r=n(10),c=(n(0),n(908)),a=n(1);t.a=function(e){return Object(a.jsx)(c.a,Object(r.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}}}]);
//# sourceMappingURL=12.969132d0.chunk.js.map