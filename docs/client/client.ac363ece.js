function t(){}function e(t,e){for(const r in e)t[r]=e[r];return t}function r(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...r){if(null==e)return t;const n=e.subscribe(...r);return n.unsubscribe?()=>n.unsubscribe():n}function i(t,e,r,n){if(t){const s=l(t,e,r,n);return t[0](s)}}function l(t,r,n,s){return t[1]&&s?e(n.ctx.slice(),t[1](s(r))):n.ctx}function f(t,e,r,n,s,a,o){const c=function(t,e,r,n){if(t[2]&&n){const s=t[2](n(r));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],r=Math.max(e.dirty.length,s.length);for(let n=0;n<r;n+=1)t[n]=e.dirty[n]|s[n];return t}return e.dirty|s}return e.dirty}(e,n,s,a);if(c){const s=l(e,r,n,o);t.p(s,c)}}function u(t,e){t.appendChild(e)}function h(t,e,r){t.insertBefore(e,r||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function $(){return v(" ")}function b(){return v("")}function E(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function _(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function y(t){return Array.from(t.childNodes)}function S(t,e,r,n){for(let n=0;n<t.length;n+=1){const s=t[n];if(s.nodeName===e){let e=0;const a=[];for(;e<s.attributes.length;){const t=s.attributes[e++];r[t.name]||a.push(t.name)}for(let t=0;t<a.length;t++)s.removeAttribute(a[t]);return t.splice(n,1)[0]}}return n?g(e):m(e)}function w(t,e){for(let r=0;r<t.length;r+=1){const n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return v(e)}function A(t){return w(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,r=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(r)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}let k;function j(t){k=t}function C(){if(!k)throw new Error("Function called outside component initialization");return k}function R(t){C().$$.on_mount.push(t)}const L=[],O=[],T=[],V=[],D=Promise.resolve();let q=!1;function U(t){T.push(t)}let J=!1;const B=new Set;function M(){if(!J){J=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];j(e),H(e.$$)}for(j(null),L.length=0;O.length;)O.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];B.has(e)||(B.add(e),e())}T.length=0}while(L.length);for(;V.length;)V.pop()();q=!1,J=!1,B.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const G=new Set;let K;function F(){K={r:0,c:[],p:K}}function z(){K.r||s(K.c),K=K.p}function Y(t,e){t&&t.i&&(G.delete(t),t.i(e))}function W(t,e,r,n){if(t&&t.o){if(G.has(t))return;G.add(t),K.c.push((()=>{G.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function X(t,e){t.d(1),e.delete(t.key)}function Q(t,e){W(t,1,1,(()=>{e.delete(t.key)}))}function Z(t,e,r,n,s,a,o,c,i,l,f,u){let h=t.length,p=a.length,d=h;const m={};for(;d--;)m[t[d].key]=d;const g=[],v=new Map,$=new Map;for(d=p;d--;){const t=u(s,a,d),c=r(t);let i=o.get(c);i?n&&i.p(t,e):(i=l(c,t),i.c()),v.set(c,g[d]=i),c in m&&$.set(c,Math.abs(d-m[c]))}const b=new Set,E=new Set;function _(t){Y(t,1),t.m(c,f),o.set(t.key,t),f=t.first,p--}for(;h&&p;){const e=g[p-1],r=t[h-1],n=e.key,s=r.key;e===r?(f=e.first,h--,p--):v.has(s)?!o.has(n)||b.has(n)?_(e):E.has(s)?h--:$.get(n)>$.get(s)?(E.add(n),_(e)):(b.add(s),h--):(i(r,o),h--)}for(;h--;){const e=t[h];v.has(e.key)||i(e,o)}for(;p;)_(g[p-1]);return g}function tt(t,e){const r={},n={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const t in o)t in c||(n[t]=1);for(const t in c)s[t]||(r[t]=c[t],s[t]=1);t[a]=c}else for(const t in o)s[t]=1}for(const t in n)t in r||(r[t]=void 0);return r}function et(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function nt(t,e){t&&t.l(e)}function st(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),U((()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(U)}function at(t,e){const r=t.$$;null!==r.fragment&&(s(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(L.push(t),q||(q=!0,D.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,r,a,o,c,i,l=[-1]){const f=k;j(e);const u=r.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=a?a(e,u,((t,r,...n)=>{const s=n.length?n[0]:r;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),d&&ot(e,t)),r})):[],h.update(),d=!0,s(h.before_update),h.fragment=!!o&&o(h.ctx),r.target){if(r.hydrate){const t=y(r.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();r.intro&&Y(e.$$.fragment),st(e,r.target,r.anchor),M()}j(f)}class it{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function ft(t,e){return{subscribe:ut(t,e).subscribe}}function ut(e,r=t){let n;const s=[];function a(t){if(o(e,t)&&(e=t,n)){const t=!lt.length;for(let t=0;t<s.length;t+=1){const r=s[t];r[1](),lt.push(r,e)}if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,c=t){const i=[o,c];return s.push(i),1===s.length&&(n=r(a)||t),o(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(n(),n=null)}}}}const ht={};function pt(e){let r,n,s,a,o,c,i,l,f,d,g,b,E,P,I,x,N,k,j,C,R,L,O,T,V,D,q,U,J,B,M,H,G,K,F;return{c(){r=m("nav"),n=m("div"),s=m("div"),a=m("a"),o=v("ae app labs"),c=$(),i=m("div"),l=m("span"),f=$(),d=m("span"),g=$(),b=m("span"),E=$(),P=m("div"),I=m("div"),x=m("a"),N=v("about"),k=$(),j=m("a"),C=v("case studies"),R=$(),L=m("div"),O=m("div"),T=m("div"),V=m("a"),D=m("span"),q=m("i"),U=$(),J=m("a"),B=m("span"),M=m("i"),H=$(),G=m("a"),K=m("span"),F=m("i"),this.h()},l(t){r=S(t,"NAV",{class:!0});var e=y(r);n=S(e,"DIV",{class:!0});var u=y(n);s=S(u,"DIV",{class:!0});var h=y(s);a=S(h,"A",{class:!0,href:!0});var m=y(a);o=w(m,"ae app labs"),m.forEach(p),c=A(h),i=S(h,"DIV",{class:!0,"data-target":!0});var v=y(i);l=S(v,"SPAN",{}),y(l).forEach(p),f=A(v),d=S(v,"SPAN",{}),y(d).forEach(p),g=A(v),b=S(v,"SPAN",{}),y(b).forEach(p),v.forEach(p),h.forEach(p),E=A(u),P=S(u,"DIV",{class:!0,id:!0});var $=y(P);I=S($,"DIV",{class:!0});var _=y(I);x=S(_,"A",{class:!0,href:!0});var z=y(x);N=w(z,"about"),z.forEach(p),k=A(_),j=S(_,"A",{class:!0,href:!0});var Y=y(j);C=w(Y,"case studies"),Y.forEach(p),_.forEach(p),R=A($),L=S($,"DIV",{class:!0});var W=y(L);O=S(W,"DIV",{class:!0});var X=y(O);T=S(X,"DIV",{class:!0});var Q=y(T);V=S(Q,"A",{class:!0,href:!0,name:!0});var Z=y(V);D=S(Z,"SPAN",{class:!0});var tt=y(D);q=S(tt,"I",{class:!0}),y(q).forEach(p),tt.forEach(p),Z.forEach(p),U=A(Q),J=S(Q,"A",{class:!0,href:!0,name:!0});var et=y(J);B=S(et,"SPAN",{class:!0});var rt=y(B);M=S(rt,"I",{class:!0}),y(M).forEach(p),rt.forEach(p),et.forEach(p),H=A(Q),G=S(Q,"A",{class:!0,href:!0,name:!0});var nt=y(G);K=S(nt,"SPAN",{class:!0});var st=y(K);F=S(st,"I",{class:!0}),y(F).forEach(p),st.forEach(p),nt.forEach(p),Q.forEach(p),X.forEach(p),W.forEach(p),$.forEach(p),u.forEach(p),e.forEach(p),this.h()},h(){_(a,"class","navbar-item has-text-weight-bold"),_(a,"href","/"),_(i,"class","navbar-burger burger"),_(i,"data-target","navMenu"),_(s,"class","navbar-brand"),_(x,"class","navbar-item"),_(x,"href","/about"),_(j,"class","navbar-item"),_(j,"href","/case-studies"),_(I,"class","navbar-start"),_(q,"class","fab fa-github fa-2x"),_(D,"class","icon"),_(V,"class","button is-primary"),_(V,"href","https://github.com/ae-app-labs"),_(V,"name","Github Page"),_(M,"class","fab fa-twitter fa-2x"),_(B,"class","icon"),_(J,"class","button is-primary"),_(J,"href","https://twitter.com/aeapplabs"),_(J,"name","Twitter"),_(F,"class","fab fa-instagram fa-2x"),_(K,"class","icon"),_(G,"class","button is-primary"),_(G,"href","https://instagram.com/AeAppLabs"),_(G,"name","Instagram"),_(T,"class","buttons"),_(O,"class","navbar-item"),_(L,"class","navbar-end nav-social"),_(P,"class","navbar-menu"),_(P,"id","navMenu"),_(n,"class","container"),_(r,"class","navbar is-primary is-fixed-top")},m(t,e){h(t,r,e),u(r,n),u(n,s),u(s,a),u(a,o),u(s,c),u(s,i),u(i,l),u(i,f),u(i,d),u(i,g),u(i,b),u(n,E),u(n,P),u(P,I),u(I,x),u(x,N),u(I,k),u(I,j),u(j,C),u(P,R),u(P,L),u(L,O),u(O,T),u(T,V),u(V,D),u(D,q),u(T,U),u(T,J),u(J,B),u(B,M),u(T,H),u(T,G),u(G,K),u(K,F)},p:t,i:t,o:t,d(t){t&&p(r)}}}class dt extends it{constructor(t){super(),ct(this,t,null,pt,o,{})}}function mt(e){let r,n,s,a,o,c,i,l,f,d,b,E,P,I,x,N,k,j,C,R,L,O,T,V,D,q,U,J,B,M,H,G,K,F,z,Y,W,X,Q,Z,tt,et,rt,nt,st,at,ot,ct,it,lt,ft,ut,ht,pt,dt,mt,gt,vt,$t,bt,Et,_t,yt,St,wt,At;return{c(){r=m("footer"),n=m("div"),s=g("svg"),a=g("g"),o=g("rect"),c=g("rect"),i=g("rect"),l=$(),f=m("div"),d=m("div"),b=m("div"),E=g("svg"),P=g("g"),I=g("path"),x=g("path"),N=$(),k=m("div"),j=m("b"),C=v("Links"),R=$(),L=m("br"),O=m("br"),T=$(),V=m("ul"),D=m("li"),q=m("a"),U=v("Home"),J=$(),B=m("li"),M=m("a"),H=v("About"),G=$(),K=m("li"),F=m("a"),z=v("Privacy Policy"),Y=$(),W=m("li"),X=m("a"),Q=v("Case Studies"),Z=$(),tt=m("div"),et=$(),rt=m("div"),nt=m("a"),st=m("span"),at=m("i"),ot=$(),ct=m("a"),it=m("span"),lt=m("i"),ft=$(),ut=m("a"),ht=m("span"),pt=m("i"),dt=$(),mt=m("a"),gt=m("span"),vt=m("i"),$t=$(),bt=m("a"),Et=m("span"),_t=m("i"),yt=$(),St=m("div"),wt=m("div"),At=v("© 2021 ae app labs | All rights reserved"),this.h()},l(t){r=S(t,"FOOTER",{class:!0});var e=y(r);n=S(e,"DIV",{id:!0,class:!0});var u=y(n);s=S(u,"svg",{width:!0,height:!0,viewBox:!0},1);var h=y(s);a=S(h,"g",{transform:!0,opacity:!0},1);var m=y(a);o=S(m,"rect",{width:!0,height:!0,transform:!0,fill:!0},1),y(o).forEach(p),c=S(m,"rect",{width:!0,height:!0,transform:!0,fill:!0},1),y(c).forEach(p),i=S(m,"rect",{width:!0,height:!0,transform:!0,fill:!0},1),y(i).forEach(p),m.forEach(p),h.forEach(p),u.forEach(p),l=A(e),f=S(e,"DIV",{class:!0});var g=y(f);d=S(g,"DIV",{class:!0});var v=y(d);b=S(v,"DIV",{class:!0});var $=y(b);E=S($,"svg",{width:!0,height:!0,viewBox:!0},1);var _=y(E);P=S(_,"g",{transform:!0},1);var Pt=y(P);I=S(Pt,"path",{d:!0,transform:!0,fill:!0,stroke:!0,"stroke-linejoin":!0,"stroke-width":!0},1),y(I).forEach(p),x=S(Pt,"path",{d:!0,transform:!0,fill:!0,stroke:!0,"stroke-linejoin":!0,"stroke-width":!0},1),y(x).forEach(p),Pt.forEach(p),_.forEach(p),$.forEach(p),N=A(v),k=S(v,"DIV",{class:!0});var It=y(k);j=S(It,"B",{});var xt=y(j);C=w(xt,"Links"),xt.forEach(p),R=A(It),L=S(It,"BR",{}),O=S(It,"BR",{}),T=A(It),V=S(It,"UL",{});var Nt=y(V);D=S(Nt,"LI",{class:!0});var kt=y(D);q=S(kt,"A",{href:!0});var jt=y(q);U=w(jt,"Home"),jt.forEach(p),kt.forEach(p),J=A(Nt),B=S(Nt,"LI",{class:!0});var Ct=y(B);M=S(Ct,"A",{href:!0});var Rt=y(M);H=w(Rt,"About"),Rt.forEach(p),Ct.forEach(p),G=A(Nt),K=S(Nt,"LI",{class:!0});var Lt=y(K);F=S(Lt,"A",{href:!0});var Ot=y(F);z=w(Ot,"Privacy Policy"),Ot.forEach(p),Lt.forEach(p),Y=A(Nt),W=S(Nt,"LI",{class:!0});var Tt=y(W);X=S(Tt,"A",{href:!0});var Vt=y(X);Q=w(Vt,"Case Studies"),Vt.forEach(p),Tt.forEach(p),Nt.forEach(p),It.forEach(p),Z=A(v),tt=S(v,"DIV",{class:!0}),y(tt).forEach(p),et=A(v),rt=S(v,"DIV",{class:!0});var Dt=y(rt);nt=S(Dt,"A",{class:!0,href:!0,name:!0});var qt=y(nt);st=S(qt,"SPAN",{class:!0});var Ut=y(st);at=S(Ut,"I",{class:!0}),y(at).forEach(p),Ut.forEach(p),qt.forEach(p),ot=A(Dt),ct=S(Dt,"A",{class:!0,href:!0,name:!0});var Jt=y(ct);it=S(Jt,"SPAN",{class:!0});var Bt=y(it);lt=S(Bt,"I",{class:!0}),y(lt).forEach(p),Bt.forEach(p),Jt.forEach(p),ft=A(Dt),ut=S(Dt,"A",{class:!0,href:!0,name:!0});var Mt=y(ut);ht=S(Mt,"SPAN",{class:!0});var Ht=y(ht);pt=S(Ht,"I",{class:!0}),y(pt).forEach(p),Ht.forEach(p),Mt.forEach(p),dt=A(Dt),mt=S(Dt,"A",{class:!0,href:!0,name:!0});var Gt=y(mt);gt=S(Gt,"SPAN",{class:!0});var Kt=y(gt);vt=S(Kt,"I",{class:!0}),y(vt).forEach(p),Kt.forEach(p),Gt.forEach(p),$t=A(Dt),bt=S(Dt,"A",{class:!0,href:!0,name:!0});var Ft=y(bt);Et=S(Ft,"SPAN",{class:!0});var zt=y(Et);_t=S(zt,"I",{class:!0}),y(_t).forEach(p),zt.forEach(p),Ft.forEach(p),Dt.forEach(p),v.forEach(p),g.forEach(p),e.forEach(p),yt=A(t),St=S(t,"DIV",{class:!0});var Yt=y(St);wt=S(Yt,"DIV",{class:!0});var Wt=y(wt);At=w(Wt,"© 2021 ae app labs | All rights reserved"),Wt.forEach(p),Yt.forEach(p),this.h()},h(){_(o,"width","99"),_(o,"height","99"),_(o,"transform","translate(960.5 2107.496) rotate(45)"),_(o,"fill","#09bfa4"),_(c,"width","59"),_(c,"height","61"),_(c,"transform","translate(1045.207 2135.073) rotate(45)"),_(c,"fill","#2de2c7"),_(i,"width","59"),_(i,"height","61"),_(i,"transform","translate(875.207 2135.073) rotate(45)"),_(i,"fill","#2de2c7"),_(a,"transform","translate(-832.074 -2107.496)"),_(a,"opacity","0.6"),_(s,"width","254.853"),_(s,"height","140.007"),_(s,"viewBox","0 0 254.853 140.007"),_(n,"id","footer_bg_graphic"),_(n,"class","bg-graphic is-hidden-mobile"),_(I,"d","M72.4,164.685s69.683-51.825,88.36,29.4c5.864,25.5-1.8,58.854-36.674,68.33-43.769,5.688-46.853-48.027-46.853-48.027l83.527-18.247"),_(I,"transform","translate(437 1924)"),_(I,"fill","none"),_(I,"stroke","#fff"),_(I,"stroke-linejoin","round"),_(I,"stroke-width","17"),_(x,"d","M90.146,95s-69.683,50.16-88.36-28.452C-4.078,41.859,3.585,9.579,38.46.408,82.229-5.1,85.313,46.892,85.313,46.892L1.786,64.553"),_(x,"transform","translate(618.528 2075.318)"),_(x,"fill","none"),_(x,"stroke","#fff"),_(x,"stroke-linejoin","round"),_(x,"stroke-width","17"),_(P,"transform","translate(-504.327 -2063.881)"),_(E,"width","200"),_(E,"height","120"),_(E,"viewBox","0 0 209.313 131.46"),_(b,"class","column is-one-quarter is-desktop is-vcentered"),_(q,"href","/"),_(D,"class","pt-1"),_(M,"href","about"),_(B,"class","pt-1"),_(F,"href","privacy-policy"),_(K,"class","pt-1"),_(X,"href","case-studies"),_(W,"class","pt-1"),_(k,"class","column is-one-quarter"),_(tt,"class","column is-one-quarter"),_(at,"class","fab fa-google-play"),_(st,"class","icon"),_(nt,"class","button is-primary"),_(nt,"href","https://play.google.com/store/apps/dev?id=6177347481993841752&hl=en_US"),_(nt,"name","Play Store"),_(lt,"class","fab fa-facebook"),_(it,"class","icon"),_(ct,"class","button is-primary"),_(ct,"href","https://www.facebook.com/AeAppLabs/"),_(ct,"name","Facebook Page"),_(pt,"class","fab fa-twitter"),_(ht,"class","icon"),_(ut,"class","button is-primary"),_(ut,"href","https://twitter.com/aeapplabs"),_(ut,"name","Twitter"),_(vt,"class","fab fa-instagram"),_(gt,"class","icon"),_(mt,"class","button is-primary"),_(mt,"href","https://instagram.com/AeAppLabs"),_(mt,"name","Instagram"),_(_t,"class","fab fa-github"),_(Et,"class","icon"),_(bt,"class","button is-primary"),_(bt,"href","https://github.com/ae-app-labs"),_(bt,"name","Github Page"),_(rt,"class","column is-one-quarter"),_(d,"class","columns"),_(f,"class","container"),_(r,"class","footer"),_(wt,"class","container"),_(St,"class","footer-bottom p-3")},m(t,e){h(t,r,e),u(r,n),u(n,s),u(s,a),u(a,o),u(a,c),u(a,i),u(r,l),u(r,f),u(f,d),u(d,b),u(b,E),u(E,P),u(P,I),u(P,x),u(d,N),u(d,k),u(k,j),u(j,C),u(k,R),u(k,L),u(k,O),u(k,T),u(k,V),u(V,D),u(D,q),u(q,U),u(V,J),u(V,B),u(B,M),u(M,H),u(V,G),u(V,K),u(K,F),u(F,z),u(V,Y),u(V,W),u(W,X),u(X,Q),u(d,Z),u(d,tt),u(d,et),u(d,rt),u(rt,nt),u(nt,st),u(st,at),u(rt,ot),u(rt,ct),u(ct,it),u(it,lt),u(rt,ft),u(rt,ut),u(ut,ht),u(ht,pt),u(rt,dt),u(rt,mt),u(mt,gt),u(gt,vt),u(rt,$t),u(rt,bt),u(bt,Et),u(Et,_t),h(t,yt,e),h(t,St,e),u(St,wt),u(wt,At)},p:t,i:t,o:t,d(t){t&&p(r),t&&p(yt),t&&p(St)}}}class gt extends it{constructor(t){super(),ct(this,t,null,mt,o,{})}}function vt(t){let e,r,n,s,a,o;e=new dt({props:{segment:t[0]}});const c=t[2].default,l=i(c,t,t[1],null);return a=new gt({}),{c(){rt(e.$$.fragment),r=$(),n=m("main"),l&&l.c(),s=$(),rt(a.$$.fragment)},l(t){nt(e.$$.fragment,t),r=A(t),n=S(t,"MAIN",{});var o=y(n);l&&l.l(o),o.forEach(p),s=A(t),nt(a.$$.fragment,t)},m(t,c){st(e,t,c),h(t,r,c),h(t,n,c),l&&l.m(n,null),h(t,s,c),st(a,t,c),o=!0},p(t,[r]){const n={};1&r&&(n.segment=t[0]),e.$set(n),l&&l.p&&2&r&&f(l,c,t,t[1],r,null,null)},i(t){o||(Y(e.$$.fragment,t),Y(l,t),Y(a.$$.fragment,t),o=!0)},o(t){W(e.$$.fragment,t),W(l,t),W(a.$$.fragment,t),o=!1},d(t){at(e,t),t&&p(r),t&&p(n),l&&l.d(t),t&&p(s),at(a,t)}}}function $t(t,e,r){let{$$slots:n={},$$scope:s}=e,{segment:a}=e;return t.$$set=t=>{"segment"in t&&r(0,a=t.segment),"$$scope"in t&&r(1,s=t.$$scope)},[a,s,n]}class bt extends it{constructor(t){super(),ct(this,t,$t,vt,o,{segment:0})}}function Et(e){let r,n,s,a,o,c,i,l;return{c(){r=m("section"),n=m("div"),s=m("div"),a=m("h1"),o=v(e[0]),c=$(),i=m("h2"),l=v(e[1]),this.h()},l(t){r=S(t,"SECTION",{class:!0});var f=y(r);n=S(f,"DIV",{class:!0});var u=y(n);s=S(u,"DIV",{class:!0});var h=y(s);a=S(h,"H1",{class:!0});var d=y(a);o=w(d,e[0]),d.forEach(p),c=A(h),i=S(h,"H2",{class:!0});var m=y(i);l=w(m,e[1]),m.forEach(p),h.forEach(p),u.forEach(p),f.forEach(p),this.h()},h(){_(a,"class","title"),_(i,"class","subtitle"),_(s,"class","container"),_(n,"class","hero-body"),_(r,"class","hero is-info is-bold")},m(t,e){h(t,r,e),u(r,n),u(n,s),u(s,a),u(a,o),u(s,c),u(s,i),u(i,l)},p(t,[e]){1&e&&P(o,t[0]),2&e&&P(l,t[1])},i:t,o:t,d(t){t&&p(r)}}}function _t(t,e,r){let{title:n}=e,{subtitle:s}=e;return t.$$set=t=>{"title"in t&&r(0,n=t.title),"subtitle"in t&&r(1,s=t.subtitle)},[n,s]}class yt extends it{constructor(t){super(),ct(this,t,_t,Et,o,{title:0,subtitle:1})}}function St(t){let e,r,n=t[1].stack+"";return{c(){e=m("pre"),r=v(n)},l(t){e=S(t,"PRE",{});var s=y(e);r=w(s,n),s.forEach(p)},m(t,n){h(t,e,n),u(e,r)},p(t,e){2&e&&n!==(n=t[1].stack+"")&&P(r,n)},d(t){t&&p(e)}}}function wt(t){let e,r,n,s,a,o,c,i,l,f,d,g,b,E,I,N,k,j,C,R,L,O=t[1].message+"";document.title=e="Status "+t[0],n=new yt({props:{title:"Status "+t[0],subtitle:""}});let T=t[2]&&t[1].stack&&St(t);return{c(){r=$(),rt(n.$$.fragment),s=$(),a=m("section"),o=m("div"),c=m("h1"),i=v("Uh oh!"),l=$(),f=m("p"),d=v("An error has occured and the message is "),g=m("strong"),b=v(O),E=$(),I=m("p"),N=v("Click "),k=m("a"),j=v("here"),C=v(" to visit our home page."),R=$(),T&&T.c(),this.h()},l(t){x('[data-svelte="svelte-1inli4"]',document.head).forEach(p),r=A(t),nt(n.$$.fragment,t),s=A(t),a=S(t,"SECTION",{class:!0});var e=y(a);o=S(e,"DIV",{class:!0});var u=y(o);c=S(u,"H1",{class:!0});var h=y(c);i=w(h,"Uh oh!"),h.forEach(p),l=A(u),f=S(u,"P",{class:!0});var m=y(f);d=w(m,"An error has occured and the message is "),g=S(m,"STRONG",{});var v=y(g);b=w(v,O),v.forEach(p),m.forEach(p),E=A(u),I=S(u,"P",{class:!0});var $=y(I);N=w($,"Click "),k=S($,"A",{href:!0});var _=y(k);j=w(_,"here"),_.forEach(p),C=w($," to visit our home page."),$.forEach(p),R=A(u),T&&T.l(u),u.forEach(p),e.forEach(p),this.h()},h(){_(c,"class","svelte-8od9u6"),_(f,"class","svelte-8od9u6"),_(k,"href","/"),_(I,"class","svelte-8od9u6"),_(o,"class","container"),_(a,"class","section")},m(t,e){h(t,r,e),st(n,t,e),h(t,s,e),h(t,a,e),u(a,o),u(o,c),u(c,i),u(o,l),u(o,f),u(f,d),u(f,g),u(g,b),u(o,E),u(o,I),u(I,N),u(I,k),u(k,j),u(I,C),u(o,R),T&&T.m(o,null),L=!0},p(t,[r]){(!L||1&r)&&e!==(e="Status "+t[0])&&(document.title=e);const s={};1&r&&(s.title="Status "+t[0]),n.$set(s),(!L||2&r)&&O!==(O=t[1].message+"")&&P(b,O),t[2]&&t[1].stack?T?T.p(t,r):(T=St(t),T.c(),T.m(o,null)):T&&(T.d(1),T=null)},i(t){L||(Y(n.$$.fragment,t),L=!0)},o(t){W(n.$$.fragment,t),L=!1},d(t){t&&p(r),at(n,t),t&&p(s),t&&p(a),T&&T.d()}}}function At(t,e,r){let{status:n}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&r(0,n=t.status),"error"in t&&r(1,s=t.error)},[n,s,false]}class Pt extends it{constructor(t){super(),ct(this,t,At,wt,o,{status:0,error:1})}}function It(t){let r,n,s;const a=[{segment:t[2][1]},t[4].props];var o=t[4].component;function c(t){let r={$$slots:{default:[kt]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)r=e(r,a[t]);return{props:r}}return o&&(r=new o(c(t))),{c(){r&&rt(r.$$.fragment),n=b()},l(t){r&&nt(r.$$.fragment,t),n=b()},m(t,e){r&&st(r,t,e),h(t,n,e),s=!0},p(t,e){const s=20&e?tt(a,[4&e&&{segment:t[2][1]},16&e&&et(t[4].props)]):{};if(288&e&&(s.$$scope={dirty:e,ctx:t}),o!==(o=t[4].component)){if(r){F();const t=r;W(t.$$.fragment,1,0,(()=>{at(t,1)})),z()}o?(r=new o(c(t)),rt(r.$$.fragment),Y(r.$$.fragment,1),st(r,n.parentNode,n)):r=null}else o&&r.$set(s)},i(t){s||(r&&Y(r.$$.fragment,t),s=!0)},o(t){r&&W(r.$$.fragment,t),s=!1},d(t){t&&p(n),r&&at(r,t)}}}function xt(t){let e,r;return e=new Pt({props:{error:t[0],status:t[1]}}),{c(){rt(e.$$.fragment)},l(t){nt(e.$$.fragment,t)},m(t,n){st(e,t,n),r=!0},p(t,r){const n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){W(e.$$.fragment,t),r=!1},d(t){at(e,t)}}}function Nt(t){let r,n,s;const a=[t[5].props];var o=t[5].component;function c(t){let r={};for(let t=0;t<a.length;t+=1)r=e(r,a[t]);return{props:r}}return o&&(r=new o(c())),{c(){r&&rt(r.$$.fragment),n=b()},l(t){r&&nt(r.$$.fragment,t),n=b()},m(t,e){r&&st(r,t,e),h(t,n,e),s=!0},p(t,e){const s=32&e?tt(a,[et(t[5].props)]):{};if(o!==(o=t[5].component)){if(r){F();const t=r;W(t.$$.fragment,1,0,(()=>{at(t,1)})),z()}o?(r=new o(c()),rt(r.$$.fragment),Y(r.$$.fragment,1),st(r,n.parentNode,n)):r=null}else o&&r.$set(s)},i(t){s||(r&&Y(r.$$.fragment,t),s=!0)},o(t){r&&W(r.$$.fragment,t),s=!1},d(t){t&&p(n),r&&at(r,t)}}}function kt(t){let e,r,n=t[5]&&Nt(t);return{c(){n&&n.c(),e=b()},l(t){n&&n.l(t),e=b()},m(t,s){n&&n.m(t,s),h(t,e,s),r=!0},p(t,r){t[5]?n?(n.p(t,r),32&r&&Y(n,1)):(n=Nt(t),n.c(),Y(n,1),n.m(e.parentNode,e)):n&&(F(),W(n,1,1,(()=>{n=null})),z())},i(t){r||(Y(n),r=!0)},o(t){W(n),r=!1},d(t){n&&n.d(t),t&&p(e)}}}function jt(t){let e,r,n,s;const a=[xt,It],o=[];function c(t,e){return t[0]?0:1}return e=c(t),r=o[e]=a[e](t),{c(){r.c(),n=b()},l(t){r.l(t),n=b()},m(t,r){o[e].m(t,r),h(t,n,r),s=!0},p(t,s){let i=e;e=c(t),e===i?o[e].p(t,s):(F(),W(o[i],1,1,(()=>{o[i]=null})),z(),r=o[e],r?r.p(t,s):(r=o[e]=a[e](t),r.c()),Y(r,1),r.m(n.parentNode,n))},i(t){s||(Y(r),s=!0)},o(t){W(r),s=!1},d(t){o[e].d(t),t&&p(n)}}}function Ct(t){let r,n;const s=[{segment:t[2][0]},t[3].props];let a={$$slots:{default:[jt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=e(a,s[t]);return r=new bt({props:a}),{c(){rt(r.$$.fragment)},l(t){nt(r.$$.fragment,t)},m(t,e){st(r,t,e),n=!0},p(t,[e]){const n=12&e?tt(s,[4&e&&{segment:t[2][0]},8&e&&et(t[3].props)]):{};311&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){n||(Y(r.$$.fragment,t),n=!0)},o(t){W(r.$$.fragment,t),n=!1},d(t){at(r,t)}}}function Rt(t,e,r){let{stores:n}=e,{error:s}=e,{status:a}=e,{segments:o}=e,{level0:c}=e,{level1:i=null}=e,{level2:l=null}=e,{notify:f}=e;var u,h,p;return u=f,C().$$.after_update.push(u),h=ht,p=n,C().$$.context.set(h,p),t.$$set=t=>{"stores"in t&&r(6,n=t.stores),"error"in t&&r(0,s=t.error),"status"in t&&r(1,a=t.status),"segments"in t&&r(2,o=t.segments),"level0"in t&&r(3,c=t.level0),"level1"in t&&r(4,i=t.level1),"level2"in t&&r(5,l=t.level2),"notify"in t&&r(7,f=t.notify)},[s,a,o,c,i,l,n,f]}class Lt extends it{constructor(t){super(),ct(this,t,Rt,Ct,o,{stores:6,error:0,status:1,segments:2,level0:3,level1:4,level2:5,notify:7})}}const Ot=[/^\/privacy-policy\.json$/,/^\/privacy-policy\/([^/]+?)\.json$/,/^\/case-studies\.json$/,/^\/case-studies\/([^/]+?)\.json$/,/^\/atom\/?$/,/^\/rss\/?$/],Tt=[{js:()=>Promise.all([import("./index.a0531efb.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.4f4e84af.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].7f85873c.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_layout.67508500.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.f20176b4.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./random-contact.e31f509d.js"),__inject_styles(["client-a2a37a6a.css","random-contact-4ce893c8.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./ae-branding.161721c1.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./tlf.cc58383e.js"),__inject_styles(["client-a2a37a6a.css","tlf-78f98772.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.35c24218.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))}],Vt=(Dt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/privacy-policy\/?$/,parts:[{i:1}]},{pattern:/^\/privacy-policy\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:Dt(t[1])})}]},{pattern:/^\/case-studies\/?$/,parts:[{i:3},{i:4}]},{pattern:/^\/case-studies\/random-contact\/?$/,parts:[{i:3},{i:5}]},{pattern:/^\/case-studies\/ae-branding\/?$/,parts:[{i:3},{i:6}]},{pattern:/^\/case-studies\/tlf\/?$/,parts:[{i:3},{i:7}]},{pattern:/^\/about\/?$/,parts:[{i:8}]}]);var Dt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function qt(t,e,r,n){return new(r||(r=Promise))((function(s,a){function o(t){try{i(n.next(t))}catch(t){a(t)}}function c(t){try{i(n.throw(t))}catch(t){a(t)}}function i(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}i((n=n.apply(t,e||[])).next())}))}function Ut(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Jt,Bt=1;const Mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ht={};let Gt,Kt;function Ft(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,r,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[r]&&(e[r]=[e[r]]),"object"==typeof e[r]?e[r].push(n):e[r]=n})),e}function zt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Gt))return null;let e=t.pathname.slice(Gt.length);if(""===e&&(e="/"),!Ot.some((t=>t.test(e))))for(let r=0;r<Vt.length;r+=1){const n=Vt[r],s=n.pattern.exec(e);if(s){const r=Ft(t.search),a=n.parts[n.parts.length-1],o=a.params?a.params(s):{},c={host:location.host,path:e,query:r,params:o};return{href:t.href,route:n,match:s,page:c}}}}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Ut(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,n=String(r?e.href.baseVal:e.href);if(n===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const s=new URL(n);if(s.pathname===location.pathname&&s.search===location.search)return;const a=zt(s);if(a){Qt(a,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),Mt.pushState({id:Jt},"",s.href)}}function Wt(){return{x:pageXOffset,y:pageYOffset}}function Xt(t){if(Ht[Jt]=Wt(),t.state){const e=zt(new URL(location.href));e?Qt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Jt=t}(Bt),Mt.replaceState({id:Jt},"",location.href)}function Qt(t,e,r,n){return qt(this,void 0,void 0,(function*(){const s=!!e;if(s)Jt=e;else{const t=Wt();Ht[Jt]=t,Jt=e=++Bt,Ht[Jt]=r?t:{x:0,y:0}}if(yield Kt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!r){let t,r=Ht[e];n&&(t=document.getElementById(n.slice(1)),t&&(r={x:0,y:t.getBoundingClientRect().top+scrollY})),Ht[Jt]=r,s||t?scrollTo(r.x,r.y):scrollTo(0,0)}}))}function Zt(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}let te,ee=null;function re(t){const e=Ut(t.target);e&&"prefetch"===e.rel&&function(t){const e=zt(new URL(t,Zt(document)));if(e)ee&&t===ee.href||(ee={href:t,promise:be(e)}),ee.promise}(e.href)}function ne(t){clearTimeout(te),te=setTimeout((()=>{re(t)}),20)}function se(t,e={noscroll:!1,replaceState:!1}){const r=zt(new URL(t,Zt(document)));return r?(Mt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Qt(r,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let oe,ce,ie,le=!1,fe=[],ue="{}";const he={page:function(t){const e=ut(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let n;return e.subscribe((e=>{(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:ut(null),session:ut(ae&&ae.session)};let pe,de,me;function ge(t,e){const{error:r}=t;return Object.assign({error:r},e)}function ve(t){return qt(this,void 0,void 0,(function*(){oe&&he.preloading.set(!0);const e=function(t){return ee&&ee.href===t.href?ee.promise:be(t)}(t),r=ce={},n=yield e,{redirect:s}=n;if(r===ce)if(s)yield se(s.location,{replaceState:!0});else{const{props:e,branch:r}=n;yield $e(r,e,ge(e,t.page))}}))}function $e(t,e,r){return qt(this,void 0,void 0,(function*(){he.page.set(r),he.preloading.set(!1),oe?oe.$set(e):(e.stores={page:{subscribe:he.page.subscribe},preloading:{subscribe:he.preloading.subscribe},session:he.session},e.level0={props:yield ie},e.notify=he.page.notify,oe=new Lt({target:me,props:e,hydrate:!0})),fe=t,ue=JSON.stringify(r.query),le=!0,de=!1}))}function be(t){return qt(this,void 0,void 0,(function*(){const{route:e,page:r}=t,n=r.path.split("/").filter(Boolean);let s=null;const a={error:null,status:200,segments:[n[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{a.error="string"==typeof e?new Error(e):e,a.status=t}};if(!ie){const t=()=>({});ie=ae.preloaded[0]||t.call(o,{host:r.host,path:r.path,query:r.query,params:{}},pe)}let c,i=1;try{const s=JSON.stringify(r.query),l=e.pattern.exec(r.path);let f=!1;c=yield Promise.all(e.parts.map(((e,c)=>qt(this,void 0,void 0,(function*(){const u=n[c];if(function(t,e,r,n){if(n!==ue)return!0;const s=fe[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0)}(c,u,l,s)&&(f=!0),a.segments[i]=n[c+1],!e)return{segment:u};const h=i++;if(!de&&!f&&fe[c]&&fe[c].part===e.i)return fe[c];f=!1;const{default:p,preload:d}=yield Tt[e.i].js();let m;return m=le||!ae.preloaded[c+1]?d?yield d.call(o,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},pe):{}:ae.preloaded[c+1],a[`level${h}`]={component:p,props:m,segment:u,match:l,part:e.i}})))))}catch(t){a.error=t,a.status=500,c=[]}return{redirect:s,props:a,branch:c}}))}var Ee,_e,ye;he.session.subscribe((t=>qt(void 0,void 0,void 0,(function*(){if(pe=t,!le)return;de=!0;const e=zt(new URL(location.href)),r=ce={},{redirect:n,props:s,branch:a}=yield be(e);r===ce&&(n?yield se(n.location,{replaceState:!0}):yield $e(a,s,ge(s,e.page)))})))),Ee={target:document.querySelector("#sapper")},_e=Ee.target,me=_e,ye=ae.baseUrl,Gt=ye,Kt=ve,"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Mt.scrollRestoration="auto"})),addEventListener("load",(()=>{Mt.scrollRestoration="manual"})),addEventListener("click",Yt),addEventListener("popstate",Xt),addEventListener("touchstart",re),addEventListener("mousemove",ne),ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:r}=location,{session:n,preloaded:s,status:a,error:o}=ae;ie||(ie=s&&s[0]);const c={error:o,status:a,session:n,level0:{props:ie},level1:{props:{status:a,error:o},component:Pt},segments:s},i=Ft(r);$e([],c,{host:t,path:e,query:i,params:{},error:o})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Bt},"",e);const r=zt(new URL(location.href));if(r)return Qt(r,Bt,!0,t)}));export{st as A,at as B,E as C,ft as D,x as E,R as F,d as G,yt as H,N as I,i as J,f as K,I as L,g as M,it as S,$ as a,y as b,S as c,w as d,m as e,p as f,A as g,_ as h,ct as i,h as j,u as k,X as l,b as m,t as n,P as o,F as p,W as q,z as r,o as s,v as t,Z as u,Y as v,Q as w,c as x,rt as y,nt as z};

import __inject_styles from './inject_styles.5607aec6.js';