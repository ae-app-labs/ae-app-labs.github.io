import{S as Ve,i as Se,s as Ue,k as v,a as N,G as te,q as Z,l as m,m as f,h as n,c as z,H as ae,r as j,n as e,E as re,I as se,b as K,F as r,V as Ce,P as Pe,Q as Fe,u as Te,C as ge,D as $e,d as Me,f as Ae,R as Ne,t as qe,T as be,J as ze,e as ke,x as He,y as Ye,z as Be,A as Ge,g as Le,_ as Re}from"../../../chunks/index-0a15943d.js";import{t as Je}from"../../../chunks/store-3ee15442.js";import{f as Ee}from"../../../chunks/index-338b94a0.js";function Ie(c,o,t){const a=c.slice();return a[4]=o[t],a}function we(c,o){let t,a=o[4].name+"",s,i;return{key:c,first:null,c(){t=v("span"),s=Z(a),this.h()},l(h){t=m(h,"SPAN",{class:!0});var l=f(t);s=j(l,a),l.forEach(n),this.h()},h(){e(t,"class",i="tag "+o[4].className+" mr-2 mt-2"),this.first=t},m(h,l){K(h,t,l),r(t,s)},p(h,l){o=h,l&1&&a!==(a=o[4].name+"")&&Te(s,a),l&1&&i!==(i="tag "+o[4].className+" mr-2 mt-2")&&e(t,"class",i)},d(h){h&&n(t)}}}function Oe(c){let o,t,a,s=[],i=new Map,h,l,P,E,S,H,T,y,F,I,A,b,g,R,U,Y,D,k,d,_,V,O,q,w,$,B,M,J,G=c[0].title+"",L,W,le,ne,X=c[0].tags;const ce=u=>u[4].id;for(let u=0;u<X.length;u+=1){let p=Ie(c,X,u),C=ce(p);i.set(C,s[u]=we(C,p))}return{c(){o=v("div"),t=v("div"),a=v("p");for(let u=0;u<s.length;u+=1)s[u].c();h=N(),l=v("div"),P=v("div"),E=v("a"),S=v("img"),y=N(),F=v("div"),I=te("svg"),A=te("g"),b=te("circle"),g=te("path"),Y=N(),D=v("div"),k=v("iframe"),O=N(),q=v("div"),w=v("a"),$=v("h3"),B=v("span"),M=v("i"),J=N(),L=Z(G),this.h()},l(u){o=m(u,"DIV",{class:!0});var p=f(o);t=m(p,"DIV",{class:!0});var C=f(t);a=m(C,"P",{class:!0});var de=f(a);for(let oe=0;oe<s.length;oe+=1)s[oe].l(de);de.forEach(n),h=z(C),l=m(C,"DIV",{class:!0});var Q=f(l);P=m(Q,"DIV",{id:!0,class:!0});var ue=f(P);E=m(ue,"A",{href:!0});var x=f(E);S=m(x,"IMG",{src:!0,alt:!0}),y=z(x),F=m(x,"DIV",{class:!0});var fe=f(F);I=ae(fe,"svg",{width:!0,height:!0,viewBox:!0,opacity:!0});var he=f(I);A=ae(he,"g",{transform:!0});var ie=f(A);b=ae(ie,"circle",{cx:!0,cy:!0,r:!0,transform:!0,fill:!0,stroke:!0,"stroke-width":!0}),f(b).forEach(n),g=ae(ie,"path",{d:!0,transform:!0,fill:!0}),f(g).forEach(n),ie.forEach(n),he.forEach(n),fe.forEach(n),x.forEach(n),ue.forEach(n),Y=z(Q),D=m(Q,"DIV",{id:!0,class:!0});var _e=f(D);k=m(_e,"IFRAME",{id:!0,width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),f(k).forEach(n),_e.forEach(n),O=z(Q),q=m(Q,"DIV",{class:!0});var ve=f(q);w=m(ve,"A",{href:!0,class:!0});var me=f(w);$=m(me,"H3",{});var ee=f($);B=m(ee,"SPAN",{});var pe=f(B);M=m(pe,"I",{class:!0,"aria-hidden":!0}),f(M).forEach(n),pe.forEach(n),J=z(ee),L=j(ee,G),ee.forEach(n),me.forEach(n),ve.forEach(n),Q.forEach(n),C.forEach(n),p.forEach(n),this.h()},h(){e(a,"class","mb-2 has-text-centered"),re(S.src,H=c[0].coverImage)||e(S,"src",H),e(S,"alt",T=c[0].title),e(b,"cx","37"),e(b,"cy","37"),e(b,"r","33"),e(b,"transform","translate(315 3181)"),e(b,"fill","#1fa591"),e(b,"stroke","#eaeaea"),e(b,"stroke-width","4"),e(g,"d","M16,0,32,28H0Z"),e(g,"transform","translate(370 3200) rotate(90)"),e(g,"fill","#f3d55f"),e(A,"transform","translate(-315 -3181)"),e(I,"width","74"),e(I,"height","74"),e(I,"viewBox","0 0 74 74"),e(I,"opacity",".9"),e(F,"class","play-overlay"),e(E,"href",R=c[0].videoUrl),e(P,"id",U="coverImage_"+c[1]),e(P,"class","grow-effect"),e(k,"id",d="video_"+c[1]),e(k,"width","560"),e(k,"height","315"),re(k.src,_=c[0].embedUrl+"?controls=1")||e(k,"src",_),e(k,"title","YouTube video player"),e(k,"frameborder","0"),e(k,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),k.allowFullscreen=!0,e(D,"id",V="videoFrame_"+c[1]),e(D,"class","is-hidden"),e(M,"class","fas fa-external-link-alt has-text-white pr-2"),e(M,"aria-hidden","true"),e(w,"href",W=c[0].videoUrl),e(w,"class","has-text-white mt-2"),e(q,"class","has-text-left mt-4 ml-3"),e(l,"class","has-text-centered mt-4 py-4"),e(t,"class","card-content"),se(t,"has-background-primary-dark",c[1]==0),se(t,"has-background-info",c[1]!=0),e(o,"class","card mb-4")},m(u,p){K(u,o,p),r(o,t),r(t,a);for(let C=0;C<s.length;C+=1)s[C].m(a,null);r(t,h),r(t,l),r(l,P),r(P,E),r(E,S),r(E,y),r(E,F),r(F,I),r(I,A),r(A,b),r(A,g),r(l,Y),r(l,D),r(D,k),r(l,O),r(l,q),r(q,w),r(w,$),r($,B),r(B,M),r($,J),r($,L),le||(ne=Ce(E,"click",c[3]),le=!0)},p(u,[p]){p&1&&(X=u[0].tags,s=Pe(s,p,ce,1,u,X,i,a,Fe,we,null,Ie)),p&1&&!re(S.src,H=u[0].coverImage)&&e(S,"src",H),p&1&&T!==(T=u[0].title)&&e(S,"alt",T),p&1&&R!==(R=u[0].videoUrl)&&e(E,"href",R),p&2&&U!==(U="coverImage_"+u[1])&&e(P,"id",U),p&2&&d!==(d="video_"+u[1])&&e(k,"id",d),p&1&&!re(k.src,_=u[0].embedUrl+"?controls=1")&&e(k,"src",_),p&2&&V!==(V="videoFrame_"+u[1])&&e(D,"id",V),p&1&&G!==(G=u[0].title+"")&&Te(L,G),p&1&&W!==(W=u[0].videoUrl)&&e(w,"href",W),p&2&&se(t,"has-background-primary-dark",u[1]==0),p&2&&se(t,"has-background-info",u[1]!=0)},i:ge,o:ge,d(u){u&&n(o);for(let p=0;p<s.length;p+=1)s[p].d();le=!1,ne()}}}function Qe(c,o,t){let{tutorial:a}=o,{index:s}=o;const i=l=>{console.log(l),document.querySelector("#coverImage_"+l).classList.add("is-hidden"),document.querySelector("#videoFrame_"+l).classList.remove("is-hidden"),document.querySelector("#video_"+l).src+="&autoplay=1"},h=l=>{l.preventDefault(),i(s)};return c.$$set=l=>{"tutorial"in l&&t(0,a=l.tutorial),"index"in l&&t(1,s=l.index)},[a,s,i,h]}class Ze extends Ve{constructor(o){super(),Se(this,o,Qe,Oe,Ue,{tutorial:0,index:1})}}function ye(c,o,t){const a=c.slice();return a[2]=o[t],a[4]=t,a}function De(c,o){let t,a,s;return a=new Ze({props:{tutorial:o[2],index:o[4]}}),{key:c,first:null,c(){t=ke(),He(a.$$.fragment),this.h()},l(i){t=ke(),Ye(a.$$.fragment,i),this.h()},h(){this.first=t},m(i,h){K(i,t,h),Be(a,i,h),s=!0},p(i,h){o=i;const l={};h&1&&(l.tutorial=o[2]),h&1&&(l.index=o[4]),a.$set(l)},i(i){s||(Ae(a.$$.fragment,i),s=!0)},o(i){qe(a.$$.fragment,i),s=!1},d(i){i&&n(t),Ge(a,i)}}}function je(c){let o,t,a,s,i,h,l,P,E,S,H,T,y,F,I,A,b,g=[],R=new Map,U,Y,D=c[0].reverse();const k=d=>d[2].id;for(let d=0;d<D.length;d+=1){let _=ye(c,D,d),V=k(_);R.set(V,g[d]=De(V,_))}return{c(){o=N(),t=v("section"),a=v("div"),s=v("div"),i=v("div"),h=v("p"),l=Z("Design and Development Tutorials"),P=N(),E=v("p"),S=Z("See a list of curated video tutorials hosted on Youtube. These range from tutorials on UI design, to complete landing page development."),H=N(),T=v("p"),y=v("a"),F=Z(`Visit Channel \r
						`),I=v("i"),A=N(),b=v("div");for(let d=0;d<g.length;d+=1)g[d].c();this.h()},l(d){$e("svelte-1bumvoo",document.head).forEach(n),o=z(d),t=m(d,"SECTION",{class:!0});var V=f(t);a=m(V,"DIV",{class:!0});var O=f(a);s=m(O,"DIV",{class:!0});var q=f(s);i=m(q,"DIV",{class:!0});var w=f(i);h=m(w,"P",{class:!0});var $=f(h);l=j($,"Design and Development Tutorials"),$.forEach(n),P=z(w),E=m(w,"P",{class:!0});var B=f(E);S=j(B,"See a list of curated video tutorials hosted on Youtube. These range from tutorials on UI design, to complete landing page development."),B.forEach(n),H=z(w),T=m(w,"P",{class:!0});var M=f(T);y=m(M,"A",{href:!0,class:!0,target:!0,rel:!0});var J=f(y);F=j(J,`Visit Channel \r
						`),I=m(J,"I",{class:!0,"aria-hidden":!0}),f(I).forEach(n),J.forEach(n),M.forEach(n),w.forEach(n),A=z(q),b=m(q,"DIV",{class:!0});var G=f(b);for(let L=0;L<g.length;L+=1)g[L].l(G);G.forEach(n),q.forEach(n),O.forEach(n),V.forEach(n),this.h()},h(){document.title="ae app labs | Tutorials",e(h,"class","is-size-3 is-family-secondary"),e(E,"class","subtitle"),e(I,"class","fas fa-external-link-alt has-text-black pl-2"),e(I,"aria-hidden","true"),e(y,"href","https://www.youtube.com/@aeapplabs"),e(y,"class","button is-link is-medium"),e(y,"target","_blank"),e(y,"rel","noreferrer"),e(T,"class","is-size-4 pt-4"),e(i,"class","column is-5 fadeInUp"),e(b,"class","column is-7"),e(s,"class","columns"),e(a,"class","container content"),e(t,"class","section")},m(d,_){K(d,o,_),K(d,t,_),r(t,a),r(a,s),r(s,i),r(i,h),r(h,l),r(i,P),r(i,E),r(E,S),r(i,H),r(i,T),r(T,y),r(y,F),r(y,I),r(s,A),r(s,b);for(let V=0;V<g.length;V+=1)g[V].m(b,null);Y=!0},p(d,[_]){_&1&&(D=d[0].reverse(),Le(),g=Pe(g,_,k,1,d,D,R,b,Re,De,null,ye),Me())},i(d){if(!Y){for(let _=0;_<D.length;_+=1)Ae(g[_]);Ne(()=>{U||(U=be(t,Ee,{},!0)),U.run(1)}),Y=!0}},o(d){for(let _=0;_<g.length;_+=1)qe(g[_]);U||(U=be(t,Ee,{},!1)),U.run(0),Y=!1},d(d){d&&n(o),d&&n(t);for(let _=0;_<g.length;_+=1)g[_].d();d&&U&&U.end()}}}function Ke(c,o,t){let a,s;return ze(c,Je,i=>t(1,s=i)),c.$$.update=()=>{c.$$.dirty&2&&t(0,a=s.data)},[a,s]}class et extends Ve{constructor(o){super(),Se(this,o,Ke,je,Ue,{})}}export{et as default};