import{L as e}from"./client.c0259050.js";
/*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var t,r,n,i,o,s,a,l,c,f,u,d,p,h,g,v,m,x,b,y,w,T,k,C,O,M,S,E=1,P=[],L=[],_=Date.now,R=_(),B=0,z=1,A=function(e){return e},I=function(){return"undefined"!=typeof window},N=function(){return t||I()&&(t=window.gsap)&&t.registerPlugin&&t},W=function(e){return!!~a.indexOf(e)},F=function(e,t){return~P.indexOf(e)&&P[P.indexOf(e)+1][t]},D=function(e,t){var r=t.s,n=t.sc,i=L.indexOf(e),o=n===ee.sc?1:2;return!~i&&(i=L.push(e)-1),L[i+o]||(L[i+o]=F(e,r)||(W(e)?n:function(t){return arguments.length?e[r]=t:e[r]}))},H=function(e){return F(e,"getBoundingClientRect")||(W(e)?function(){return Fe.width=n.innerWidth,Fe.height=n.innerHeight,Fe}:function(){return ne(e)})},q=function(e,t){var r=t.s,i=t.d2,a=t.d,l=t.a;return(r="scroll"+i)&&(l=F(e,r))?l()-H(e)()[a]:W(e)?Math.max(o[r],s[r])-(n["inner"+i]||o["client"+i]||s["client"+i]):e[r]-e["offset"+i]},X=function(e,t){for(var r=0;r<w.length;r+=3)(!t||~t.indexOf(w[r+1]))&&e(w[r],w[r+1],w[r+2])},Y=function(e){return"string"==typeof e},j=function(e){return"function"==typeof e},V=function(e){return"number"==typeof e},U=function(t){return"object"===e(t)},Z=function(e){return j(e)&&e()},$=function(e,t){return function(){var r=Z(e),n=Z(t);return function(){Z(r),Z(n)}}},G=Math.abs,J="padding",K="px",Q={s:"scrollLeft",p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:function(e){return arguments.length?n.scrollTo(e,ee.sc()):n.pageXOffset||i.scrollLeft||o.scrollLeft||s.scrollLeft||0}},ee={s:"scrollTop",p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Q,sc:function(e){return arguments.length?n.scrollTo(Q.sc(),e):n.pageYOffset||i.scrollTop||o.scrollTop||s.scrollTop||0}},te=function(e){return n.getComputedStyle(e)},re=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},ne=function(e,r){var n=r&&"matrix(1, 0, 0, 1, 0, 0)"!==te(e)[m]&&t.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ie=function(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0},oe=function(e){var t,r=[],n=e.labels,i=e.duration();for(t in n)r.push(n[t]/i);return r},se=function(e,t,r,n){return r.split(",").forEach((function(r){return e(t,r,n)}))},ae=function(e,t,r){return e.addEventListener(t,r,{passive:!0})},le=function(e,t,r){return e.removeEventListener(t,r)},ce={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fe={toggleActions:"play",anticipatePin:0},ue={top:0,left:0,center:.5,bottom:1,right:1},de=function(e,t){if(Y(e)){var r=e.indexOf("="),n=~r?+(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in ue?ue[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pe=function(e,t,r,n,o,a,l){var c=o.startColor,f=o.endColor,u=o.fontSize,d=o.indent,p=o.fontWeight,h=i.createElement("div"),g=W(r)||"fixed"===F(r,"pinType"),v=-1!==e.indexOf("scroller"),m=g?s:r,x=-1!==e.indexOf("start"),b=x?c:f,y="border-color:"+b+";font-size:"+u+";color:"+b+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+(v&&g?"fixed;":"absolute;"),(v||!g)&&(y+=(n===ee?"right":"bottom")+":"+(a+parseFloat(d))+"px;"),l&&(y+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),h._isStart=x,h.setAttribute("class","gsap-marker-"+e),h.style.cssText=y,h.innerText=t||0===t?e+"-"+t:e,m.children[0]?m.insertBefore(h,m.children[0]):m.appendChild(h),h._offset=h["offset"+n.op.d2],he(h,0,n,x),h},he=function(e,r,n,i){var o={display:"block"},s=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+s+"Width"]=1,o["border"+a+"Width"]=0,o[n.p]=r+"px",t.set(e,o)},ge=[],ve={},me=function(){return f||(f=c(Re))},xe=function(){f||(f=c(Re),B||Oe("scrollStart"),B=_())},be=function(){return!g&&!C&&!i.fullscreenElement&&l.restart(!0)},ye={},we=[],Te=[],ke=function(e){var i,o=t.ticker.frame,s=[],a=0;if(S!==o||E){for(Ee();a<Te.length;a+=4)(i=n.matchMedia(Te[a]).matches)!==Te[a+3]&&(Te[a+3]=i,i?s.push(a):Ee(1,Te[a])||j(Te[a+2])&&Te[a+2]());for(Se(),a=0;a<s.length;a++)i=s[a],M=Te[i],Te[i+2]=Te[i+1](e);M=0,r&&Pe(0,1),S=o,Oe("matchMedia")}},Ce=function e(){return le(Ye,"scrollEnd",e)||Pe(!0)},Oe=function(e){return ye[e]&&ye[e].map((function(e){return e()}))||we},Me=[],Se=function(e){for(var t=0;t<Me.length;t+=4)e&&Me[t+3]!==e||(Me[t].style.cssText=Me[t+1],Me[t+2].uncache=1)},Ee=function(e,t){var r;for(x=0;x<ge.length;x++)r=ge[x],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));Se(t),t||Oe("revert")},Pe=function(e,t){if(!B||e){var r=Oe("refreshInit");for(T&&Ye.sort(),t||Ee(),x=0;x<ge.length;x++)ge[x].refresh();for(r.forEach((function(e){return e&&e.render&&e.render(-1)})),x=ge.length;x--;)ge[x].scroll.rec=0;l.pause(),Oe("refresh")}else ae(Ye,"scrollEnd",Ce)},Le=0,_e=1,Re=function(){var e=ge.length,t=_(),r=t-R>=50,n=e&&ge[0].scroll();if(_e=Le>n?-1:1,Le=n,r&&(B&&!v&&t-B>200&&(B=0,Oe("scrollEnd")),p=R,R=t),_e<0){for(x=e;x--;)ge[x]&&ge[x].update(0,r);_e=1}else for(x=0;x<e;x++)ge[x]&&ge[x].update(0,r);f=0},Be=["left","top","bottom","right","marginBottom","marginRight","marginTop","marginLeft","display","flexShrink","float","zIndex"],ze=Be.concat(["width","height","boxSizing","maxWidth","maxHeight","position","margin",J,"paddingTop","paddingRight","paddingBottom","paddingLeft"]),Ae=function(e,t,r,n){if(e.parentNode!==t){for(var i,o=Be.length,s=t.style,a=e.style;o--;)s[i=Be[o]]=r[i];s.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(s.display="inline-block"),a.bottom=a.right="auto",s.overflow="visible",s.boxSizing="border-box",s.width=ie(e,Q)+K,s.height=ie(e,ee)+K,s.padding=a.margin=a.top=a.left="0",Ne(n),a.width=a.maxWidth=r.width,a.height=a.maxHeight=r.height,a.padding=r.padding,e.parentNode.insertBefore(t,e),t.appendChild(e)}},Ie=/([A-Z])/g,Ne=function(e){if(e){var r,n,i=e.t.style,o=e.length,s=0;for((e.t._gsap||t.core.getCache(e.t)).uncache=1;s<o;s+=2)n=e[s+1],r=e[s],n?i[r]=n:i[r]&&i.removeProperty(r.replace(Ie,"-$1").toLowerCase())}},We=function(e){for(var t=ze.length,r=e.style,n=[],i=0;i<t;i++)n.push(ze[i],r[ze[i]]);return n.t=e,n},Fe={left:0,top:0},De=function(e,t,r,n,i,a,l,c,f,d,p,h){if(j(e)&&(e=e(c)),Y(e)&&"max"===e.substr(0,3)&&(e=h+("="===e.charAt(4)?de("0"+e.substr(3),r):0)),V(e))l&&he(l,r,n,!0);else{j(t)&&(t=t(c));var g,v,m,x=u(t)[0]||s,b=ne(x)||{},y=e.split(" ");b&&(b.left||b.top)||"none"!==te(x).display||(m=x.style.display,x.style.display="block",b=ne(x),m?x.style.display=m:x.style.removeProperty("display")),g=de(y[0],b[n.d]),v=de(y[1]||"0",r),e=b[n.p]-f[n.p]-d+g+i-v,l&&he(l,v,n,r-v<20||l._isStart&&v>20),r-=r-v}if(a){var w=e+r,T=a._isStart;h="scroll"+n.d2,he(a,w,n,T&&w>20||!T&&(p?Math.max(s[h],o[h]):a.parentNode[h])<=w+1),p&&(f=ne(l),p&&(a.style[n.op.p]=f[n.op.p]-n.op.m-a._offset+K))}return Math.round(e)},He=/(?:webkit|moz|length|cssText|inset)/i,qe=function(e,r,n,i){if(e.parentNode!==r){var o,a,l=e.style;if(r===s){for(o in e._stOrig=l.cssText,a=te(e))+o||He.test(o)||!a[o]||"string"!=typeof l[o]||"0"===o||(l[o]=a[o]);l.top=n,l.left=i}else l.cssText=e._stOrig;t.core.getCache(e).uncache=1,r.appendChild(e)}},Xe=function(e,r){var n,i,o=D(e,r),s="_scroll"+r.p2,a=function r(a,l,c,f,u){var d=r.tween,p=l.onComplete,h={};return d&&d.kill(),n=Math.round(c),l[s]=a,l.modifiers=h,h[s]=function(e){return(e=Math.round(o()))!==n&&e!==i&&Math.abs(e-n)>2?(d.kill(),r.tween=0):e=c+f*d.ratio+u*d.ratio*d.ratio,i=n,n=Math.round(e)},l.onComplete=function(){r.tween=0,p&&p.call(d)},d=r.tween=t.to(e,l)};return e[s]=o,e.addEventListener("mousewheel",(function(){return a.tween&&a.tween.kill()&&(a.tween=0)})),a};Q.op=ee;var Ye=function(){function e(n,i){r||e.register(t)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(n,i)}return e.prototype.init=function(r,a){if(this.progress=this.start=0,this.vars&&this.kill(1),z){var l,c,f,h,m,b,y,w,C,S,L,R,I,N,X,Z,$,se,ue,he,me,ye,we,Te,ke,Oe,Me,Se,Ee,Pe,Le,Re,Be,ze,Ie,He,Ye,je,Ve,Ue=(r=re(Y(r)||V(r)||r.nodeType?{trigger:r}:r,fe)).horizontal?Q:ee,Ze=r,$e=Ze.onUpdate,Ge=Ze.toggleClass,Je=Ze.id,Ke=Ze.onToggle,Qe=Ze.onRefresh,et=Ze.scrub,tt=Ze.trigger,rt=Ze.pin,nt=Ze.pinSpacing,it=Ze.invalidateOnRefresh,ot=Ze.anticipatePin,st=Ze.onScrubComplete,at=Ze.onSnapComplete,lt=Ze.once,ct=Ze.snap,ft=Ze.pinReparent,ut=!et&&0!==et,dt=u(r.scroller||n)[0],pt=t.core.getCache(dt),ht=W(dt),gt="pinType"in r?"fixed"===r.pinType:ht||"fixed"===F(dt,"pinType"),vt=[r.onEnter,r.onLeave,r.onEnterBack,r.onLeaveBack],mt=ut&&r.toggleActions.split(" "),xt="markers"in r?r.markers:fe.markers,bt=ht?0:parseFloat(te(dt)["border"+Ue.p2+"Width"])||0,yt=this,wt=r.onRefreshInit&&function(){return r.onRefreshInit(yt)},Tt=function(e,t,r){var i=r.d,o=r.d2,s=r.a;return(s=F(e,"getBoundingClientRect"))?function(){return s()[i]}:function(){return(t?n["inner"+o]:e["client"+o])||0}}(dt,ht,Ue),kt=function(e,t){return!t||~P.indexOf(e)?H(e):function(){return Fe}}(dt,ht);yt.media=M,ot*=45,ge.push(yt),yt.scroller=dt,yt.scroll=D(dt,Ue),m=yt.scroll(),yt.vars=r,a=a||r.animation,"refreshPriority"in r&&(T=1),pt.tweenScroll=pt.tweenScroll||{top:Xe(dt,ee),left:Xe(dt,Q)},yt.tweenTo=l=pt.tweenScroll[Ue.p],a&&(a.vars.lazy=!1,a._initted||!1!==a.vars.immediateRender&&!1!==r.immediateRender&&a.render(0,!0,!0),yt.animation=a.pause(),a.scrollTrigger=yt,(Re=V(et)&&et)&&(Le=t.to(a,{ease:"power3",duration:Re,onComplete:function(){return st&&st(yt)}})),Ee=0,Je||(Je=a.vars.id)),ct&&(U(ct)||(ct={snapTo:ct}),"scrollBehavior"in s.style&&t.set(ht?[s,o]:dt,{scrollBehavior:"auto"}),f=j(ct.snapTo)?ct.snapTo:"labels"===ct.snapTo?function(e){return function(r){return t.utils.snap(oe(e),r)}}(a):"labelsDirectional"===ct.snapTo?(je=a,function(e,t){var r,n=oe(je);if(n.sort((function(e,t){return e-t})),t.direction>0){for(r=0;r<n.length;r++)if(n[r]>=e)return n[r];return n.pop()}for(r=n.length;r--;)if(n[r]<=e)return n[r];return n[0]}):t.utils.snap(ct.snapTo),Be=ct.duration||{min:.1,max:2},Be=U(Be)?d(Be.min,Be.max):d(Be,Be),ze=t.delayedCall(ct.delay||Re/2||.1,(function(){if(Math.abs(yt.getVelocity())<10&&!v){var e=a&&!ut?a.totalProgress():yt.progress,t=(e-Pe)/(_()-p)*1e3||0,r=G(t/2)*t/.185,n=e+r,i=d(0,1,f(n,yt)),o=yt.scroll(),s=Math.round(y+i*N),c=l.tween;if(o<=w&&o>=y&&s!==o){if(c&&!c._initted&&c.data<=Math.abs(s-o))return;l(s,{duration:Be(G(.185*Math.max(G(n-e),G(i-e))/t/.05||0)),ease:ct.ease||"power3",data:Math.abs(s-o),onComplete:function(){Ee=Pe=a&&!ut?a.totalProgress():yt.progress,at&&at(yt)}},o,r*N,s-o-r*N)}}else yt.isActive&&ze.restart(!0)})).pause()),Je&&(ve[Je]=yt),tt=yt.trigger=u(tt||rt)[0],rt=!0===rt?tt:u(rt)[0],Y(Ge)&&(Ge={targets:tt,className:Ge}),rt&&(!1===nt||"margin"===nt||(nt=!(!nt&&"flex"===te(rt.parentNode).display)&&J),yt.pin=rt,!1!==r.force3D&&t.set(rt,{force3D:!0}),(c=t.core.getCache(rt)).spacer?X=c.pinState:(c.spacer=se=i.createElement("div"),se.setAttribute("class","pin-spacer"+(Je?" pin-spacer-"+Je:"")),c.pinState=X=We(rt)),yt.spacer=se=c.spacer,Se=te(rt),Te=Se[nt+Ue.os2],he=t.getProperty(rt),me=t.quickSetter(rt,Ue.a,K),Ae(rt,se,Se),$=We(rt)),xt&&(I=U(xt)?re(xt,ce):ce,L=pe("scroller-start",Je,dt,Ue,I,0),R=pe("scroller-end",Je,dt,Ue,I,0,L),ue=L["offset"+Ue.op.d2],C=pe("start",Je,dt,Ue,I,ue),S=pe("end",Je,dt,Ue,I,ue),gt||((Ve=ht?s:dt).style.position="absolute"===te(Ve).position?"absolute":"relative",t.set([L,R],{force3D:!0}),Oe=t.quickSetter(L,Ue.a,K),Me=t.quickSetter(R,Ue.a,K))),yt.revert=function(e){var t=!1!==e||!yt.enabled,r=g;t!==h&&(t&&(He=Math.max(yt.scroll(),yt.scroll.rec||0),Ie=yt.progress,Ye=a&&a.progress()),C&&[C,S,L,R].forEach((function(e){return e.style.display=t?"none":"block"})),t&&(g=1),yt.update(t),g=r,rt&&(t?function(e,t,r){if(Ne(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(rt,se,X):(!ft||!yt.isActive)&&Ae(rt,se,te(rt),ke)),h=t)},yt.refresh=function(n){if(!g&&yt.enabled)if(rt&&n&&B)ae(e,"scrollEnd",Ce);else{g=1,Le&&Le.pause(),it&&a&&a.progress(0).invalidate(),h||yt.revert();for(var i,o,l,c,f,u,d,p,v,x=Tt(),T=kt(),O=q(dt,Ue),M=0,E=0,P=r.end,_=r.endTrigger||tt,z=r.start||(0!==r.start&&tt?rt?"0 0":"0 100%":0),A=tt&&Math.max(0,ge.indexOf(yt))||0,I=A;I--;)(d=ge[I].pin)&&(d===tt||d===rt)&&ge[I].revert();for(y=De(z,tt,x,Ue,yt.scroll(),C,L,yt,T,bt,gt,O)||(rt?-.001:0),j(P)&&(P=P(yt)),Y(P)&&!P.indexOf("+=")&&(~P.indexOf(" ")?P=(Y(z)?z.split(" ")[0]:"")+P:(M=de(P.substr(2),x),P=Y(z)?z:y+M,_=tt)),w=Math.max(y,De(P||(_?"100% 0":O),_,x,Ue,yt.scroll()+M,S,R,yt,T,bt,gt,O))||-.001,N=w-y||(y-=.01)&&.001,M=0,I=A;I--;)(d=(u=ge[I]).pin)&&u.start-u._pinPush<y&&(i=u.end-u.start,d===tt&&(M+=i),d===rt&&(E+=i));if(y+=M,w+=M,yt._pinPush=E,C&&M&&((i={})[Ue.a]="+="+M,t.set([C,S],i)),rt)i=te(rt),c=Ue===ee,l=yt.scroll(),ye=parseFloat(he(Ue.a))+E,!O&&w>1&&((ht?s:dt).style["overflow-"+Ue.a]="scroll"),Ae(rt,se,i),$=We(rt),o=ne(rt,!0),p=gt&&D(dt,c?Q:ee)(),nt&&((ke=[nt+Ue.os2,N+E+K]).t=se,(I=nt===J?ie(rt,Ue)+N+E:0)&&ke.push(Ue.d,I+K),Ne(ke),gt&&yt.scroll(He)),gt&&((f={top:o.top+(c?l-y:p)+K,left:o.left+(c?p:l-y)+K,boxSizing:"border-box",position:"fixed"}).width=f.maxWidth=Math.ceil(o.width)+K,f.height=f.maxHeight=Math.ceil(o.height)+K,f.margin=f.marginTop=f.marginRight=f.marginBottom=f.marginLeft="0",f.padding=i.padding,f.paddingTop=i.paddingTop,f.paddingRight=i.paddingRight,f.paddingBottom=i.paddingBottom,f.paddingLeft=i.paddingLeft,Z=function(e,t,r){for(var n,i=[],o=e.length,s=r?8:0;s<o;s+=2)n=e[s],i.push(n,n in t?t[n]:e[s+1]);return i.t=e.t,i}(X,f,ft)),a?(v=a._initted,k(1),a.progress(1,!0),we=he(Ue.a)-ye+N+E,N!==we&&Z.splice(Z.length-2,2),a.progress(0,!0),v||a.invalidate(),k(0)):we=N;else if(tt&&yt.scroll())for(o=tt.parentNode;o&&o!==s;)o._pinOffset&&(y-=o._pinOffset,w-=o._pinOffset),o=o.parentNode;for(I=0;I<A;I++)(u=ge[I].pin)&&(u===tt||u===rt)&&ge[I].revert(!1);yt.start=y,yt.end=w,(m=b=yt.scroll())<He&&yt.scroll(He),yt.revert(!1),g=0,a&&ut&&a._initted&&a.progress(Ye,!0).render(a.time(),!0,!0),Ie!==yt.progress&&(Le&&a.totalProgress(Ie,!0),yt.progress=Ie,yt.update()),rt&&nt&&(se._pinOffset=Math.round(yt.progress*we)),Qe&&Qe(yt)}},yt.getVelocity=function(){return(yt.scroll()-b)/(_()-p)*1e3||0},yt.update=function(e,t){var r,n,i,o,c,f=yt.scroll(),d=e?0:(f-y)/N,h=d<0?0:d>1?1:d||0,v=yt.progress;if(t&&(b=m,m=f,ct&&(Pe=Ee,Ee=a&&!ut?a.totalProgress():h)),ot&&!h&&rt&&!g&&!E&&B&&y<f+(f-b)/(_()-p)*ot&&(h=1e-4),h!==v&&yt.enabled){if(o=(c=(r=yt.isActive=!!h&&h<1)!==(!!v&&v<1))||!!h!=!!v,yt.direction=h>v?1:-1,yt.progress=h,ut||(!Le||g||E?a&&a.totalProgress(h,!!g):(Le.vars.totalProgress=h,Le.invalidate().restart())),rt)if(e&&nt&&(se.style[nt+Ue.os2]=Te),gt){if(o){if(i=!e&&h>v&&w+1>f&&f+1>=q(dt,Ue),ft)if(e||!r&&!i)qe(rt,se);else{var x=ne(rt,!0),T=f-y;qe(rt,s,x.top+(Ue===ee?T:0)+K,x.left+(Ue===ee?0:T)+K)}Ne(r||i?Z:$),we!==N&&h<1&&r||me(ye+(1!==h||i?0:we))}}else me(ye+we*h);ct&&!l.tween&&!g&&!E&&ze.restart(!0),Ge&&(c||lt&&h&&(h<1||!O))&&u(Ge.targets).forEach((function(e){return e.classList[r||lt?"add":"remove"](Ge.className)})),$e&&!ut&&!e&&$e(yt),o&&!g?(n=h&&!v?0:1===h?1:1===v?2:3,ut&&(i=!c&&"none"!==mt[n+1]&&mt[n+1]||mt[n],a&&("complete"===i||"reset"===i||i in a)&&("complete"===i?a.pause().totalProgress(1):"reset"===i?a.restart(!0).pause():a[i]()),$e&&$e(yt)),!c&&O||(Ke&&c&&Ke(yt),vt[n]&&vt[n](yt),lt&&(1===h?yt.kill(!1,1):vt[n]=0),c||vt[n=1===h?1:3]&&vt[n](yt))):ut&&$e&&!g&&$e(yt)}Me&&(Oe(f+(L._isFlipped?1:0)),Me(f))},yt.enable=function(){yt.enabled||(yt.enabled=!0,ae(dt,"resize",be),ae(dt,"scroll",xe),wt&&ae(e,"refreshInit",wt),a&&a.add?t.delayedCall(.01,(function(){return y||w||yt.refresh()}))&&(N=.01)&&(y=w=0):yt.refresh())},yt.disable=function(t,r){if(yt.enabled&&(!1!==t&&yt.revert(),yt.enabled=yt.isActive=!1,r||Le&&Le.pause(),He=0,c&&(c.uncache=1),wt&&le(e,"refreshInit",wt),ze&&(ze.pause(),l.tween&&l.tween.kill()&&(l.tween=0)),!ht)){for(var n=ge.length;n--;)if(ge[n].scroller===dt&&ge[n]!==yt)return;le(dt,"resize",be),le(dt,"scroll",xe)}},yt.kill=function(e,t){yt.disable(e,t),Je&&delete ve[Je];var r=ge.indexOf(yt);ge.splice(r,1),r===x&&_e>0&&x--,a&&(a.scrollTrigger=null,e&&a.render(-1),t||a.kill()),C&&[C,S,L,R].forEach((function(e){return e.parentNode.removeChild(e)})),rt&&(c&&(c.uncache=1),r=0,ge.forEach((function(e){return e.pin===rt&&r++})),r||(c.spacer=0))},yt.enable()}else this.update=this.refresh=this.kill=A},e.register=function(f){if(!r&&(t=f||N(),I()&&window.document&&(n=window,i=document,o=i.documentElement,s=i.body),t&&(u=t.utils.toArray,d=t.utils.clamp,k=t.core.suppressOverwrites||A,t.core.globals("ScrollTrigger",e),s))){c=n.requestAnimationFrame||function(e){return setTimeout(e,16)},ae(n,"mousewheel",xe),a=[n,i,o,s],ae(i,"scroll",xe);var p,g=s.style,x=g.borderTop;g.borderTop="1px solid #000",p=ne(s),ee.m=Math.round(p.top+ee.sc())||0,Q.m=Math.round(p.left+Q.sc())||0,x?g.borderTop=x:g.removeProperty("border-top"),h=setInterval(me,200),t.delayedCall(.5,(function(){return E=0})),ae(i,"touchcancel",A),ae(s,"touchstart",A),se(ae,i,"pointerdown,touchstart,mousedown",(function(){return v=1})),se(ae,i,"pointerup,touchend,mouseup",(function(){return v=0})),m=t.utils.checkPrefix("transform"),ze.push(m),r=_(),l=t.delayedCall(.2,Pe).pause(),w=[i,"visibilitychange",function(){var e=n.innerWidth,t=n.innerHeight;i.hidden?(b=e,y=t):b===e&&y===t||be()},i,"DOMContentLoaded",Pe,n,"load",function(){return B||Pe()},n,"resize",be],X(ae)}return r},e.defaults=function(e){for(var t in e)fe[t]=e[t]},e.kill=function(){z=0,ge.slice(0).forEach((function(e){return e.kill(1)}))},e.config=function(e){"limitCallbacks"in e&&(O=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(h)||(h=t)&&setInterval(me,t),"autoRefreshEvents"in e&&(X(le)||X(ae,e.autoRefreshEvents||"none"),C=-1===(e.autoRefreshEvents+"").indexOf("resize"))},e.scrollerProxy=function(e,t){var r=u(e)[0],i=L.indexOf(r),a=W(r);~i&&L.splice(i,a?6:2),a?P.unshift(n,t,s,t,o,t):P.unshift(r,t)},e.matchMedia=function(e){var t,r,i,o,s;for(r in e)i=Te.indexOf(r),o=e[r],M=r,"all"===r?o():(t=n.matchMedia(r))&&(t.matches&&(s=o()),~i?(Te[i+1]=$(Te[i+1],o),Te[i+2]=$(Te[i+2],s)):(i=Te.length,Te.push(r,o,s),t.addListener?t.addListener(ke):t.addEventListener("change",ke)),Te[i+3]=t.matches),M=0;return Te},e.clearMatchMedia=function(e){e||(Te.length=0),(e=Te.indexOf(e))>=0&&Te.splice(e,4)},e}();Ye.version="3.6.0",Ye.saveStyles=function(e){return e?u(e).forEach((function(e){if(e&&e.style){var r=Me.indexOf(e);r>=0&&Me.splice(r,4),Me.push(e,e.style.cssText,t.core.getCache(e),M)}})):Me},Ye.revert=function(e,t){return Ee(!e,t)},Ye.create=function(e,t){return new Ye(e,t)},Ye.refresh=function(e){return e?be():Pe(!0)},Ye.update=Re,Ye.maxScroll=function(e,t){return q(e,t?Q:ee)},Ye.getScrollFunc=function(e,t){return D(u(e)[0],t?Q:ee)},Ye.getById=function(e){return ve[e]},Ye.getAll=function(){return ge.slice(0)},Ye.isScrolling=function(){return!!B},Ye.addEventListener=function(e,t){var r=ye[e]||(ye[e]=[]);~r.indexOf(t)||r.push(t)},Ye.removeEventListener=function(e,t){var r=ye[e],n=r&&r.indexOf(t);n>=0&&r.splice(n,1)},Ye.batch=function(e,r){var n,i=[],o={},s=r.interval||.016,a=r.batchMax||1e9,l=function(e,r){var n=[],i=[],o=t.delayedCall(s,(function(){r(n,i),n=[],i=[]})).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),i.push(e),a<=n.length&&o.progress(1)}};for(n in r)o[n]="on"===n.substr(0,2)&&j(r[n])&&"onRefreshInit"!==n?l(0,r[n]):r[n];return j(a)&&(a=a(),ae(Ye,"refresh",(function(){return a=r.batchMax()}))),u(e).forEach((function(e){var t={};for(n in o)t[n]=o[n];t.trigger=e,i.push(Ye.create(t))})),i},Ye.sort=function(e){return ge.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},N()&&t.registerPlugin(Ye);export{Ye as S};
