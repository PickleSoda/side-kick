"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{8830:function(e,t,r){r.r(t),r.d(t,{createSwipeBackGesture:function(){return createSwipeBackGesture}});var i=r(4927),a=r(1286),n=r(4318);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let createSwipeBackGesture=(e,t,r,c,l)=>{let u=e.ownerDocument.defaultView,s=(0,a.i)(e),isAtEdge=e=>{let{startX:t}=e;return s?t>=u.innerWidth-50:t<=50},getDeltaX=e=>s?-e.deltaX:e.deltaX,getVelocityX=e=>s?-e.velocityX:e.velocityX;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(s=(0,a.i)(e),isAtEdge(r)&&t()),onStart:r,onMove:e=>{let t=getDeltaX(e),r=t/u.innerWidth;c(r)},onEnd:e=>{let t=getDeltaX(e),r=u.innerWidth,a=t/r,n=getVelocityX(e),c=n>=0&&(n>.2||t>r/2),s=c?1-a:a,o=s*r,d=0;o>5&&(d=Math.min(o/Math.abs(n),540)),l(c,a<=0?.01:(0,i.m)(0,a,.9999),d)}})}}}]);