"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{5922:function(t,e,n){n.r(e),n.d(e,{startStatusTap:function(){return startStatusTap}});var r=n(1119),s=n(6367),a=n(4927);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let startStatusTap=()=>{let t=window;t.addEventListener("statusTap",()=>{(0,r.wj)(()=>{let e=t.innerWidth,n=t.innerHeight,i=document.elementFromPoint(e/2,n/2);if(!i)return;let o=(0,s.a)(i);o&&new Promise(t=>(0,a.c)(o,t)).then(()=>{(0,r.Iu)(async()=>{o.style.setProperty("--overflow","hidden"),await (0,s.s)(o,300),o.style.removeProperty("--overflow")})})})})}}}]);