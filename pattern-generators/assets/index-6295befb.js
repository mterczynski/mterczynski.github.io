(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();function h(s){return s[Math.floor(Math.random()*s.length)]}function c(s){const{start:t,end:n}=s;return Math.sqrt((t.x-n.x)**2+(t.y-n.y)**2)}function u(s){const t=s.end.x-s.start.x,n=s.end.y-s.start.y;return{x:s.start.x+t*Math.random(),y:s.start.y+n*Math.random()}}const p=4e3,g=300;function x(){return Math.floor(Math.random()*8)*Math.PI/8*2}function L(){return[{start:{x:0,y:50},end:{x:0,y:-50}}]}class I{constructor(t){this.context=t,this.lines=L()}draw(t){this.lines=L(),this.fillLinesArray(),this.drawAllLines(t)}fillLinesArray(){for(let t=0;t<p-1;t++)this.addLine()}addLine(){const t=this.getRandomLine(),n=u(t),o=x(),e={x:n.x+Math.sin(o)*g,y:n.y+Math.cos(o)*g},i={start:n,end:e};this.lines.push(i)}getRandomLine(){return h(this.lines)}drawAllLines(t){const n=this.context,o=window.innerWidth,e=window.innerHeight;n.strokeStyle=t||"rgba(3, 140, 252, 0.4)",this.lines.forEach(i=>{n.beginPath(),n.moveTo(i.start.x+o/2,i.start.y+e/2),n.lineTo(i.end.x+o/2,i.end.y+e/2),n.stroke()})}}function C(){return Math.floor(Math.random()*8)*Math.PI/8*2}function m(){return[{start:{x:0,y:500},end:{x:0,y:-500}}]}class E{constructor(t,n={lineColor:"rgba(3, 255, 129, 0.4)",lineCount:4e3}){this.context=t,this.options=n,this.lines=m()}draw(t){t&&(this.options=t),this.lines=m(),this.fillLinesArray(),this.drawAllLines()}fillLinesArray(){for(let t=0;t<this.options.lineCount-1;t++)this.addLine()}addLine(){const t=this.getRandomLine(),n=c(t),o=u(t),e=C(),i=n*.6,r={x:o.x+Math.sin(e)*i,y:o.y+Math.cos(e)*i},a={start:o,end:r};this.lines.push(a)}getRandomLine(){return h(this.lines)}drawAllLines(){const t=this.context,n=window.innerWidth,o=window.innerHeight;t.strokeStyle=this.options.lineColor||"rgba(3, 255, 129, 0.4)",this.lines.forEach(e=>{t.beginPath(),t.moveTo(e.start.x+n/2,e.start.y+o/2),t.lineTo(e.end.x+n/2,e.end.y+o/2),t.stroke()})}}const v=5e4,l=2e3;function A(){return Math.floor(Math.random()*32)*Math.PI/32*2}function f(){return[{start:{x:0,y:l/2},end:{x:0,y:-l/2}}]}class b{constructor(t){this.context=t,this.lines=f()}draw(t){this.lines=f(),this.fillLinesArray(),this.drawAllLines(t)}fillLinesArray(){for(let t=0;t<v-1;t++)this.addLine()}addLine(){const t=this.getRandomLine(),n=c(t),o=u(t),e=A(),i=n*.8,r={x:o.x+Math.sin(e)*i,y:o.y+Math.cos(e)*i},a={start:o,end:r};this.lines.push(a)}getRandomLine(){return h(this.lines)}drawAllLines(t){const n=this.context,o=window.innerWidth,e=window.innerHeight;let i=t||{red:255,green:108,blue:72};this.lines.forEach(r=>{const a=c(r),{red:d,green:y,blue:w}=i;n.strokeStyle=`rgba(${d}, ${y}, ${w}, ${a/l})`,n.beginPath(),n.moveTo(r.start.x+o/2,r.start.y+e/2),n.lineTo(r.end.x+o/2,r.end.y+e/2),n.stroke()})}}class M{constructor(){this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d"),this.patterns={line1:new I(this.context),line2:new E(this.context),line3:new b(this.context)},this.canvas.width=innerWidth,this.canvas.height=innerHeight,this.draw(),this.addGenerateButtonListener(),this.addDownloadButtonListener(),this.addInputChangeListeners()}draw(){this.drawBackground(),console.log(this.getColorInputValues());const t=this.getColorInputValues()[0],n=this.getColorInputValues()[1],o=this.getAlphaValue(),e=document.getElementById("input-line-count").valueAsNumber;this.patterns.line2.draw({lineColor:`rgba(${t.r}, ${t.g}, ${t.b}, ${o})`,lineCount:e}),this.patterns.line2.draw({lineColor:`rgba(${n.r}, ${n.g}, ${n.b}, ${o})`,lineCount:e})}drawBackground(){const t=document.getElementById("color-background").value;this.context.fillStyle=t,this.context.fillRect(0,0,innerWidth,innerHeight)}addGenerateButtonListener(){const t=document.getElementById("button-generate");t==null||t.addEventListener("click",()=>{this.draw()})}getColorInputValues(){function t(n){var o=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;n=n.replace(o,function(i,r,a,d){return r+r+a+a+d+d});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}return[document.getElementById("color-input-1").value,document.getElementById("color-input-2").value].map(n=>t(n))}getAlphaValue(){return document.getElementById("alpha-input").value}addInputChangeListeners(){document.getElementById("alpha-input").addEventListener("change",()=>this.draw()),document.getElementById("color-input-1").addEventListener("change",()=>this.draw()),document.getElementById("color-input-2").addEventListener("change",()=>this.draw()),document.getElementById("color-background").addEventListener("change",()=>this.draw()),document.getElementById("input-line-count").addEventListener("change",()=>this.draw())}addDownloadButtonListener(){const t=document.getElementById("button-download"),n=document.getElementById("main-canvas");t==null||t.addEventListener("click",()=>{if(!n)return;const o=document.createElement("a");o.download="line-art.jpg",o.href=n.toDataURL(),o.click()})}}new M;