"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{6023:function(n,e,i){i.r(e),i.d(e,{mdTransitionAnimation:function(){return mdTransitionAnimation}});var t=i(7482),a=i(3404);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let mdTransitionAnimation=(n,e)=>{var i,o,r;let l="40px",c="back"===e.direction,s=e.enteringEl,d=e.leavingEl,u=(0,a.g)(s),m=u.querySelector("ion-toolbar"),f=(0,t.c)();if(f.addElement(u).fill("both").beforeRemoveClass("ion-page-invisible"),c?f.duration((null!==(i=e.duration)&&void 0!==i?i:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):f.duration((null!==(o=e.duration)&&void 0!==o?o:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(".concat(l,")"),"translateY(".concat("0px",")")).fromTo("opacity",.01,1),m){let n=(0,t.c)();n.addElement(m),f.addAnimation(n)}if(d&&c){f.duration((null!==(r=e.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");let n=(0,t.c)();n.addElement((0,a.g)(d)).onFinish(e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(".concat("0px",")"),"translateY(".concat(l,")")).fromTo("opacity",1,0),f.addAnimation(n)}return f}}}]);