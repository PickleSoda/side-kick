"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{812:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return iosTransitionAnimation},shadow:function(){return shadow}});var n=o(7482),a=o(3404);let getClonedElement=t=>document.querySelector("".concat(t,".ion-cloned-element")),shadow=t=>t.shadowRoot||t,getLargeTitle=t=>{let e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){let t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},getBackButton=(t,e)=>{let o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),n=[];if(null!=o){let t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(let t of n){let o=t.closest("ion-header"),n=o&&!o.classList.contains("header-collapse-condense-inactive"),a=t.querySelector("ion-back-button"),r=t.classList.contains("buttons-collapse"),l="start"===t.slot||""===t.slot;if(null!==a&&l&&(r&&n&&e||!r))return a}return null},createLargeTitleTransition=(t,e,o,n,a)=>{let r=getBackButton(n,o),l=getLargeTitle(a),c=getLargeTitle(n),i=getBackButton(a,o),s=null!==r&&null!==l&&!o,d=null!==c&&null!==i&&o;if(s){let n=l.getBoundingClientRect(),a=r.getBoundingClientRect(),c=shadow(r).querySelector(".button-text"),i=c.getBoundingClientRect(),s=shadow(l).querySelector(".toolbar-title"),d=s.getBoundingClientRect();animateLargeTitle(t,e,o,l,n,d,c,i),animateBackButton(t,e,o,r,a,c,i,l,d)}else if(d){let n=c.getBoundingClientRect(),a=i.getBoundingClientRect(),r=shadow(i).querySelector(".button-text"),l=r.getBoundingClientRect(),s=shadow(c).querySelector(".toolbar-title"),d=s.getBoundingClientRect();animateLargeTitle(t,e,o,c,n,d,r,l),animateBackButton(t,e,o,i,a,r,l,c,d)}return{forward:s,backward:d}},animateBackButton=(t,e,o,a,l,c,i,s,d)=>{var f,m;let y=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),u=e?"right":"left",p=(null===(f=c.textContent)||void 0===f?void 0:f.trim())===(null===(m=s.textContent)||void 0===m?void 0:m.trim()),g=d.width/i.width,h=(d.height-r)/i.height,b=p?"scale(".concat(g,", ").concat(h,")"):"scale(".concat(h,")"),S="scale(1)",T=shadow(a).querySelector("ion-icon"),q=T.getBoundingClientRect(),E=e?"".concat(q.width/2-(q.right-l.right),"px"):"".concat(l.left-q.width/2,"px"),x=e?"-".concat(window.innerWidth-l.right,"px"):"".concat(l.left,"px"),X="".concat(d.top,"px"),A="".concat(l.top,"px"),w=[{offset:0,transform:"translate3d(".concat(E,", ").concat(X,", 0)")},{offset:1,transform:"translate3d(".concat(x,", ").concat(A,", 0)")}],C=[{offset:0,transform:"translate3d(".concat(x,", ").concat(A,", 0)")},{offset:1,transform:"translate3d(".concat(E,", ").concat(X,", 0)")}],v=o?C:w,k=(0,n.c)(),B=(0,n.c)(),L=(0,n.c)(),P=getClonedElement("ion-back-button"),R=shadow(P).querySelector(".button-text"),W=shadow(P).querySelector("ion-icon");P.text=a.text,P.mode=a.mode,P.icon=a.icon,P.color=a.color,P.disabled=a.disabled,P.style.setProperty("display","block"),P.style.setProperty("position","fixed"),B.addElement(W),k.addElement(R),L.addElement(P),L.beforeStyles({position:"absolute",top:"0px",[e?"right":"left"]:"0px"}).keyframes(v),k.beforeStyles({"transform-origin":"".concat(u," top")}).beforeAddWrite(()=>{a.style.setProperty("display","none"),P.style.setProperty(u,y)}).afterAddWrite(()=>{a.style.setProperty("display",""),P.style.setProperty("display","none"),P.style.removeProperty(u)}).keyframes(o?[{offset:0,opacity:1,transform:S},{offset:1,opacity:0,transform:b}]:[{offset:0,opacity:0,transform:b},{offset:1,opacity:1,transform:S}]),B.beforeStyles({"transform-origin":"".concat(e?"left":"right"," center")}).keyframes(o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addAnimation([k,B,L])},animateLargeTitle=(t,e,o,a,l,c,i,s)=>{var d,f;let m=e?"right":"left",y=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),u="".concat(l.top,"px"),p=e?"-".concat(window.innerWidth-s.right-8,"px"):"".concat(s.x-8,"px"),g="".concat(s.y-2,"px"),h=(null===(d=i.textContent)||void 0===d?void 0:d.trim())===(null===(f=a.textContent)||void 0===f?void 0:f.trim()),b=s.width/c.width,S=s.height/(c.height-r),T="scale(1)",q=h?"scale(".concat(b,", ").concat(S,")"):"scale(".concat(S,")"),E=[{offset:0,opacity:0,transform:"translate3d(".concat(p,", ").concat(g,", 0) ").concat(q)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat("0px",", ").concat(u,", 0) ").concat(T)}],x=[{offset:0,opacity:.99,transform:"translate3d(".concat("0px",", ").concat(u,", 0) ").concat(T)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(p,", ").concat(g,", 0) ").concat(q)}],X=o?E:x,A=getClonedElement("ion-title"),w=(0,n.c)();A.innerText=a.innerText,A.size=a.size,A.color=a.color,w.addElement(A),w.beforeStyles({"transform-origin":"".concat(m," top"),height:"".concat(l.height,"px"),display:"",position:"relative",[m]:y}).beforeAddWrite(()=>{a.style.setProperty("opacity","0")}).afterAddWrite(()=>{a.style.setProperty("opacity",""),A.style.setProperty("display","none")}).keyframes(X),t.addAnimation(w)},iosTransitionAnimation=(t,e)=>{var o;try{let r="opacity",l="transform",c="rtl"===t.ownerDocument.dir,i=c?"-99.5%":"99.5%",s=c?"33%":"-33%",d=e.enteringEl,f=e.leavingEl,m="back"===e.direction,y=d.querySelector(":scope > ion-content"),u=d.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),p=d.querySelectorAll(":scope > ion-header > ion-toolbar"),g=(0,n.c)(),h=(0,n.c)();if(g.addElement(d).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),f&&null!=t){let e=(0,n.c)();e.addElement(t),g.addAnimation(e)}if(y||0!==p.length||0!==u.length?(h.addElement(y),h.addElement(u)):h.addElement(d.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(h),m?h.beforeClearStyles([r]).fromTo("transform","translateX(".concat(s,")"),"translateX(".concat("0%",")")).fromTo(r,.8,1):h.beforeClearStyles([r]).fromTo("transform","translateX(".concat(i,")"),"translateX(".concat("0%",")")),y){let t=shadow(y).querySelector(".transition-effect");if(t){let e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),c=(0,n.c)();a.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([r]).fromTo(r,0,.1),c.addElement(o).beforeClearStyles([r]).fromTo(r,.03,.7),a.addAnimation([l,c]),h.addAnimation([a])}}let b=d.querySelector("ion-header.header-collapse-condense"),{forward:S,backward:T}=createLargeTitleTransition(g,c,m,d,f);if(p.forEach(t=>{let e;let o=(0,n.c)();o.addElement(t),g.addAnimation(o);let a=(0,n.c)();a.addElement(t.querySelector("ion-title"));let l=(0,n.c)(),d=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),f=t.closest("ion-header"),y=null==f?void 0:f.classList.contains("header-collapse-condense-inactive");e=m?d.filter(t=>{let e=t.classList.contains("buttons-collapse");return e&&!y||!e}):d.filter(t=>!t.classList.contains("buttons-collapse")),l.addElement(e);let u=(0,n.c)();u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));let p=(0,n.c)();p.addElement(shadow(t).querySelector(".toolbar-background"));let h=(0,n.c)(),T=t.querySelector("ion-back-button");if(T&&h.addElement(T),o.addAnimation([a,l,u,p,h]),l.fromTo(r,.01,1),u.fromTo(r,.01,1),m)y||a.fromTo("transform","translateX(".concat(s,")"),"translateX(".concat("0%",")")).fromTo(r,.01,1),u.fromTo("transform","translateX(".concat(s,")"),"translateX(".concat("0%",")")),h.fromTo(r,.01,1);else{b||a.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat("0%",")")).fromTo(r,.01,1),u.fromTo("transform","translateX(".concat(i,")"),"translateX(".concat("0%",")")),p.beforeClearStyles([r,"transform"]);let t=null==f?void 0:f.translucent;if(t?p.fromTo("transform",c?"translateX(-100%)":"translateX(100%)","translateX(0px)"):p.fromTo(r,.01,"var(--opacity)"),S||h.fromTo(r,.01,1),T&&!S){let t=(0,n.c)();t.addElement(shadow(T).querySelector(".button-text")).fromTo("transform",c?"translateX(-100px)":"translateX(100px)","translateX(0px)"),o.addAnimation(t)}}}),f){let t=(0,n.c)(),e=f.querySelector(":scope > ion-content"),o=f.querySelectorAll(":scope > ion-header > ion-toolbar"),i=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==i.length?(t.addElement(e),t.addElement(i)):t.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(t),m){t.beforeClearStyles([r]).fromTo("transform","translateX(".concat("0%",")"),c?"translateX(-100%)":"translateX(100%)");let e=(0,a.g)(f);g.afterAddWrite(()=>{"normal"===g.getDirection()&&e.style.setProperty("display","none")})}else t.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(s,")")).fromTo(r,1,.8);if(e){let o=shadow(e).querySelector(".transition-effect");if(o){let e=o.querySelector(".transition-cover"),a=o.querySelector(".transition-shadow"),l=(0,n.c)(),c=(0,n.c)(),i=(0,n.c)();l.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),c.addElement(e).beforeClearStyles([r]).fromTo(r,.1,0),i.addElement(a).beforeClearStyles([r]).fromTo(r,.7,.03),l.addAnimation([c,i]),t.addAnimation([l])}}o.forEach(t=>{let e=(0,n.c)();e.addElement(t);let o=(0,n.c)();o.addElement(t.querySelector("ion-title"));let a=(0,n.c)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),f=null==d?void 0:d.classList.contains("header-collapse-condense-inactive"),y=Array.from(i).filter(t=>{let e=t.classList.contains("buttons-collapse");return e&&!f||!e});a.addElement(y);let u=(0,n.c)(),p=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&u.addElement(p);let h=(0,n.c)();h.addElement(shadow(t).querySelector(".toolbar-background"));let b=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&b.addElement(S),e.addAnimation([o,a,u,b,h]),g.addAnimation(e),b.fromTo(r,.99,0),a.fromTo(r,.99,0),u.fromTo(r,.99,0),m){f||o.fromTo("transform","translateX(".concat("0%",")"),c?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),u.fromTo("transform","translateX(".concat("0%",")"),c?"translateX(-100%)":"translateX(100%)"),h.beforeClearStyles([r,"transform"]);let t=null==d?void 0:d.translucent;if(t?h.fromTo("transform","translateX(0px)",c?"translateX(-100%)":"translateX(100%)"):h.fromTo(r,"var(--opacity)",0),S&&!T){let t=(0,n.c)();t.addElement(shadow(S).querySelector(".button-text")).fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat((c?-124:124)+"px",")")),e.addAnimation(t)}}else f||o.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(s,")")).fromTo(r,.99,0).afterClearStyles([l,r]),u.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(s,")")).afterClearStyles([l,r]),b.afterClearStyles([r]),o.afterClearStyles([r]),a.afterClearStyles([r])})}return g}catch(t){throw t}},r=10}}]);