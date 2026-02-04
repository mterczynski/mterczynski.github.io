(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="161",Kr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CM=0,dh=1,LM=2,Kd=1,PM=2,Pi=3,ir=0,En=1,di=2,er=0,gs=1,ph=2,mh=3,gh=4,DM=5,xr=100,IM=101,UM=102,_h=103,vh=104,NM=200,OM=201,FM=202,BM=203,Rc=204,Cc=205,zM=206,GM=207,HM=208,VM=209,WM=210,kM=211,XM=212,qM=213,YM=214,KM=0,$M=1,ZM=2,yo=3,jM=4,JM=5,QM=6,eS=7,Gc=0,tS=1,nS=2,tr=0,iS=1,rS=2,sS=3,aS=4,oS=5,lS=6,$d=300,xs=301,Ms=302,Lc=303,Pc=304,Lo=306,Dc=1e3,ai=1001,Ic=1002,Sn=1003,xh=1004,Ys=1005,Ln=1006,Yl=1007,Sr=1008,nr=1009,cS=1010,uS=1011,Hc=1012,Zd=1013,Ji=1014,Di=1015,ia=1016,jd=1017,Jd=1018,Er=1020,fS=1021,oi=1023,hS=1024,dS=1025,yr=1026,Ss=1027,pS=1028,Qd=1029,mS=1030,ep=1031,tp=1033,Kl=33776,$l=33777,Zl=33778,jl=33779,Mh=35840,Sh=35841,Eh=35842,yh=35843,np=36196,Th=37492,Ah=37496,bh=37808,wh=37809,Rh=37810,Ch=37811,Lh=37812,Ph=37813,Dh=37814,Ih=37815,Uh=37816,Nh=37817,Oh=37818,Fh=37819,Bh=37820,zh=37821,Jl=36492,Gh=36494,Hh=36495,gS=36283,Vh=36284,Wh=36285,kh=36286,ip=3e3,Tr=3001,_S=3200,vS=3201,rp=0,xS=1,Zn="",ln="srgb",Ui="srgb-linear",Vc="display-p3",Po="display-p3-linear",To="linear",Ft="srgb",Ao="rec709",bo="p3",Zr=7680,Xh=519,MS=512,SS=513,ES=514,sp=515,yS=516,TS=517,AS=518,bS=519,qh=35044,Yh="300 es",Uc=1035,Ii=2e3,wo=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kh=1234567;const ea=Math.PI/180,ra=180/Math.PI;function ys(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function Wc(s,e){return(s%e+e)%e}function wS(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function RS(s,e,t){return s!==e?(t-s)/(e-s):0}function ta(s,e,t){return(1-t)*s+t*e}function CS(s,e,t,i){return ta(s,e,1-Math.exp(-t*i))}function LS(s,e=1){return e-Math.abs(Wc(s,e*2)-e)}function PS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function DS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function IS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function US(s,e){return s+Math.random()*(e-s)}function NS(s){return s*(.5-Math.random())}function OS(s){s!==void 0&&(Kh=s);let e=Kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FS(s){return s*ea}function BS(s){return s*ra}function Nc(s){return(s&s-1)===0&&s!==0}function zS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ro(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function GS(s,e,t,i,a){const o=Math.cos,u=Math.sin,c=o(t/2),h=u(t/2),d=o((e+i)/2),p=u((e+i)/2),_=o((e-i)/2),v=u((e-i)/2),M=o((i-e)/2),y=u((i-e)/2);switch(a){case"XYX":s.set(c*p,h*_,h*v,c*d);break;case"YZY":s.set(h*v,c*p,h*_,c*d);break;case"ZXZ":s.set(h*_,h*v,c*p,c*d);break;case"XZX":s.set(c*p,h*y,h*M,c*d);break;case"YXY":s.set(h*M,c*p,h*y,c*d);break;case"ZYZ":s.set(h*y,h*M,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function hs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const HS={DEG2RAD:ea,RAD2DEG:ra,generateUUID:ys,clamp:pn,euclideanModulo:Wc,mapLinear:wS,inverseLerp:RS,lerp:ta,damp:CS,pingpong:LS,smoothstep:PS,smootherstep:DS,randInt:IS,randFloat:US,randFloatSpread:NS,seededRandom:OS,degToRad:FS,radToDeg:BS,isPowerOfTwo:Nc,ceilPowerOfTwo:zS,floorPowerOfTwo:Ro,setQuaternionFromProperEuler:GS,normalize:xn,denormalize:hs};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,a,o,u,c,h,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,c,h,d)}set(e,t,i,a,o,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=c,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],_=i[7],v=i[2],M=i[5],y=i[8],w=a[0],m=a[3],g=a[6],U=a[1],R=a[4],I=a[7],V=a[2],F=a[5],A=a[8];return o[0]=u*w+c*U+h*V,o[3]=u*m+c*R+h*F,o[6]=u*g+c*I+h*A,o[1]=d*w+p*U+_*V,o[4]=d*m+p*R+_*F,o[7]=d*g+p*I+_*A,o[2]=v*w+M*U+y*V,o[5]=v*m+M*R+y*F,o[8]=v*g+M*I+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*o*p+i*c*h+a*o*d-a*u*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*h-p*o,M=d*o-u*h,y=t*_+i*v+a*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=_*w,e[1]=(a*d-p*i)*w,e[2]=(c*i-a*u)*w,e[3]=v*w,e[4]=(p*t-a*h)*w,e[5]=(a*o-c*t)*w,e[6]=M*w,e[7]=(i*h-d*t)*w,e[8]=(u*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,c){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*u+d*c)+u+e,-a*d,a*h,-a*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new mt;function ap(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function VS(){const s=sa("canvas");return s.style.display="block",s}const $h={};function _s(s){s in $h||($h[s]=!0,console.warn(s))}const Zh=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jh=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[Ui]:{transfer:To,primaries:Ao,toReference:s=>s,fromReference:s=>s},[ln]:{transfer:Ft,primaries:Ao,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Po]:{transfer:To,primaries:bo,toReference:s=>s.applyMatrix3(jh),fromReference:s=>s.applyMatrix3(Zh)},[Vc]:{transfer:Ft,primaries:bo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(jh),fromReference:s=>s.applyMatrix3(Zh).convertLinearToSRGB()}},WS=new Set([Ui,Po]),Lt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!WS.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=ja[e].toReference,a=ja[t].fromReference;return a(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ja[s].primaries},getTransfer:function(s){return s===Zn?To:ja[s].transfer}};function vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ec(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jr;class op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=sa("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=vs(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vs(t[i]/255)*255):t[i]=vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kS=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(tc(a[u].image)):o.push(tc(a[u]))}else o=tc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function tc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?op.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class yn extends wr{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,i=ai,a=ai,o=Ln,u=Sr,c=oi,h=nr,d=yn.DEFAULT_ANISOTROPY,p=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ys(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Tr?ln:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?Tr:ip}set encoding(e){_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?ln:Zn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=$d;yn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,d=h[0],p=h[4],_=h[8],v=h[1],M=h[5],y=h[9],w=h[2],m=h[6],g=h[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(y-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(y+m)<.1&&Math.abs(d+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,I=(M+1)/2,V=(g+1)/2,F=(p+v)/4,A=(_+w)/4,z=(y+m)/4;return R>I&&R>V?R<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(R),a=F/i,o=A/i):I>V?I<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(I),i=F/a,o=z/a):V<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(V),i=A/o,a=z/o),this.set(i,a,o,t),this}let U=Math.sqrt((m-y)*(m-y)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(U)<.001&&(U=1),this.x=(m-y)/U,this.y=(_-w)/U,this.z=(v-p)/U,this.w=Math.acos((d+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(_s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?ln:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends qS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cp extends yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class YS extends yn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,c){let h=i[a+0],d=i[a+1],p=i[a+2],_=i[a+3];const v=o[u+0],M=o[u+1],y=o[u+2],w=o[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=M,e[t+2]=y,e[t+3]=w;return}if(_!==w||h!==v||d!==M||p!==y){let m=1-c;const g=h*v+d*M+p*y+_*w,U=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const V=Math.sqrt(R),F=Math.atan2(V,g*U);m=Math.sin(m*F)/V,c=Math.sin(c*F)/V}const I=c*U;if(h=h*m+v*I,d=d*m+M*I,p=p*m+y*I,_=_*m+w*I,m===1-c){const V=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=V,d*=V,p*=V,_*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,u){const c=i[a],h=i[a+1],d=i[a+2],p=i[a+3],_=o[u],v=o[u+1],M=o[u+2],y=o[u+3];return e[t]=c*y+p*_+h*M-d*v,e[t+1]=h*y+p*v+d*_-c*M,e[t+2]=d*y+p*M+c*v-h*_,e[t+3]=p*y-c*_-h*v-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(a/2),_=c(o/2),v=h(i/2),M=h(a/2),y=h(o/2);switch(u){case"XYZ":this._x=v*p*_+d*M*y,this._y=d*M*_-v*p*y,this._z=d*p*y+v*M*_,this._w=d*p*_-v*M*y;break;case"YXZ":this._x=v*p*_+d*M*y,this._y=d*M*_-v*p*y,this._z=d*p*y-v*M*_,this._w=d*p*_+v*M*y;break;case"ZXY":this._x=v*p*_-d*M*y,this._y=d*M*_+v*p*y,this._z=d*p*y+v*M*_,this._w=d*p*_-v*M*y;break;case"ZYX":this._x=v*p*_-d*M*y,this._y=d*M*_+v*p*y,this._z=d*p*y-v*M*_,this._w=d*p*_+v*M*y;break;case"YZX":this._x=v*p*_+d*M*y,this._y=d*M*_+v*p*y,this._z=d*p*y-v*M*_,this._w=d*p*_-v*M*y;break;case"XZY":this._x=v*p*_-d*M*y,this._y=d*M*_-v*p*y,this._z=d*p*y+v*M*_,this._w=d*p*_+v*M*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(p-h)*M,this._y=(o-d)*M,this._z=(u-a)*M}else if(i>c&&i>_){const M=2*Math.sqrt(1+i-c-_);this._w=(p-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(o+d)/M}else if(c>_){const M=2*Math.sqrt(1+c-i-_);this._w=(o-d)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+p)/M}else{const M=2*Math.sqrt(1+_-i-c);this._w=(u-a)/M,this._x=(o+d)/M,this._y=(h+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+a*d-o*h,this._y=a*p+u*h+o*c-i*d,this._z=o*p+u*d+i*h-a*c,this._w=u*p-i*c-a*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+a*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=a,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*a+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=a*_+this._y*v,this._z=o*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(o),i*Math.cos(o),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*a-c*i),p=2*(c*t-o*a),_=2*(o*i-u*t);return this.x=t+h*d+u*_-c*p,this.y=i+h*p+c*d-o*_,this.z=a+h*_+o*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-o*c,this.y=o*u-i*h,this.z=i*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new H,Jh=new br;class aa{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ii):ii.fromBufferAttribute(o,u),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Qa.subVectors(this.max,Ks),Jr.subVectors(e.a,Ks),Qr.subVectors(e.b,Ks),es.subVectors(e.c,Ks),ki.subVectors(Qr,Jr),Xi.subVectors(es,Qr),pr.subVectors(Jr,es);let t=[0,-ki.z,ki.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,ki.z,0,-ki.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-ki.y,ki.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!ic(t,Jr,Qr,es,Qa)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,Jr,Qr,es,Qa))?!1:(eo.crossVectors(ki,Xi),t=[eo.x,eo.y,eo.z],ic(t,Jr,Qr,es,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,Ja=new aa,Jr=new H,Qr=new H,es=new H,ki=new H,Xi=new H,pr=new H,Ks=new H,Qa=new H,eo=new H,mr=new H;function ic(s,e,t,i,a){for(let o=0,u=s.length-3;o<=u;o+=3){mr.fromArray(s,o);const c=a.x*Math.abs(mr.x)+a.y*Math.abs(mr.y)+a.z*Math.abs(mr.z),h=e.dot(mr),d=t.dot(mr),p=i.dot(mr);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const KS=new aa,$s=new H,rc=new H;class Do{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):KS.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector($s,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(rc)),this.expandByPoint($s.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new H,sc=new H,to=new H,qi=new H,ac=new H,no=new H,oc=new H;class kc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){sc.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(sc);const o=e.distanceTo(t)*.5,u=-this.direction.dot(to),c=qi.dot(this.direction),h=-qi.dot(to),d=qi.lengthSq(),p=Math.abs(1-u*u);let _,v,M,y;if(p>0)if(_=u*h-c,v=u*c-h,y=o*p,_>=0)if(v>=-y)if(v<=y){const w=1/p;_*=w,v*=w,M=_*(_+u*v+2*c)+v*(u*_+v+2*h)+d}else v=o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v=-o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v<=-y?(_=Math.max(0,-(-u*o+c)),v=_>0?-o:Math.min(Math.max(-o,-h),o),M=-_*_+v*(v+2*h)+d):v<=y?(_=0,v=Math.min(Math.max(-o,-h),o),M=v*(v+2*h)+d):(_=Math.max(0,-(u*o+c)),v=_>0?o:Math.min(Math.max(-o,-h),o),M=-_*_+v*(v+2*h)+d);else v=u>0?-o:o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(sc).addScaledVector(to,v),M}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),a=wi.dot(wi)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=i-u,h=i+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,a=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,a=(e.min.x-v.x)*d),p>=0?(o=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),_>=0?(c=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),i>h||c>a)||((c>i||i!==i)&&(i=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,a,o){ac.subVectors(t,e),no.subVectors(i,e),oc.crossVectors(ac,no);let u=this.direction.dot(oc),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;qi.subVectors(this.origin,e);const h=c*this.direction.dot(no.crossVectors(qi,no));if(h<0)return null;const d=c*this.direction.dot(ac.cross(qi));if(d<0||h+d>u)return null;const p=-c*qi.dot(oc);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,a,o,u,c,h,d,p,_,v,M,y,w,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,c,h,d,p,_,v,M,y,w,m)}set(e,t,i,a,o,u,c,h,d,p,_,v,M,y,w,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=o,g[5]=u,g[9]=c,g[13]=h,g[2]=d,g[6]=p,g[10]=_,g[14]=v,g[3]=M,g[7]=y,g[11]=w,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ts.setFromMatrixColumn(e,0).length(),o=1/ts.setFromMatrixColumn(e,1).length(),u=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const v=u*p,M=u*_,y=c*p,w=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=M+y*d,t[5]=v-w*d,t[9]=-c*h,t[2]=w-v*d,t[6]=y+M*d,t[10]=u*h}else if(e.order==="YXZ"){const v=h*p,M=h*_,y=d*p,w=d*_;t[0]=v+w*c,t[4]=y*c-M,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=M*c-y,t[6]=w+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*p,M=h*_,y=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=y+M*c,t[1]=M+y*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*p,M=u*_,y=c*p,w=c*_;t[0]=h*p,t[4]=y*d-M,t[8]=v*d+w,t[1]=h*_,t[5]=w*d+v,t[9]=M*d-y,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,M=u*d,y=c*h,w=c*d;t[0]=h*p,t[4]=w-v*_,t[8]=y*_+M,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=M*_+y,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*h,M=u*d,y=c*h,w=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=M*_-y,t[2]=y*_-M,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,ZS)}lookAt(e,t,i){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Yi.crossVectors(i,Bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Yi.crossVectors(i,Bn)),Yi.normalize(),io.crossVectors(Bn,Yi),a[0]=Yi.x,a[4]=io.x,a[8]=Bn.x,a[1]=Yi.y,a[5]=io.y,a[9]=Bn.y,a[2]=Yi.z,a[6]=io.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],_=i[5],v=i[9],M=i[13],y=i[2],w=i[6],m=i[10],g=i[14],U=i[3],R=i[7],I=i[11],V=i[15],F=a[0],A=a[4],z=a[8],X=a[12],S=a[1],L=a[5],$=a[9],ie=a[13],G=a[2],ee=a[6],Z=a[10],ae=a[14],re=a[3],ce=a[7],ue=a[11],me=a[15];return o[0]=u*F+c*S+h*G+d*re,o[4]=u*A+c*L+h*ee+d*ce,o[8]=u*z+c*$+h*Z+d*ue,o[12]=u*X+c*ie+h*ae+d*me,o[1]=p*F+_*S+v*G+M*re,o[5]=p*A+_*L+v*ee+M*ce,o[9]=p*z+_*$+v*Z+M*ue,o[13]=p*X+_*ie+v*ae+M*me,o[2]=y*F+w*S+m*G+g*re,o[6]=y*A+w*L+m*ee+g*ce,o[10]=y*z+w*$+m*Z+g*ue,o[14]=y*X+w*ie+m*ae+g*me,o[3]=U*F+R*S+I*G+V*re,o[7]=U*A+R*L+I*ee+V*ce,o[11]=U*z+R*$+I*Z+V*ue,o[15]=U*X+R*ie+I*ae+V*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],v=e[10],M=e[14],y=e[3],w=e[7],m=e[11],g=e[15];return y*(+o*h*_-a*d*_-o*c*v+i*d*v+a*c*M-i*h*M)+w*(+t*h*M-t*d*v+o*u*v-a*u*M+a*d*p-o*h*p)+m*(+t*d*_-t*c*M-o*u*_+i*u*M+o*c*p-i*d*p)+g*(-a*c*p-t*h*_+t*c*v+a*u*_-i*u*v+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],v=e[10],M=e[11],y=e[12],w=e[13],m=e[14],g=e[15],U=_*m*d-w*v*d+w*h*M-c*m*M-_*h*g+c*v*g,R=y*v*d-p*m*d-y*h*M+u*m*M+p*h*g-u*v*g,I=p*w*d-y*_*d+y*c*M-u*w*M-p*c*g+u*_*g,V=y*_*h-p*w*h-y*c*v+u*w*v+p*c*m-u*_*m,F=t*U+i*R+a*I+o*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/F;return e[0]=U*A,e[1]=(w*v*o-_*m*o-w*a*M+i*m*M+_*a*g-i*v*g)*A,e[2]=(c*m*o-w*h*o+w*a*d-i*m*d-c*a*g+i*h*g)*A,e[3]=(_*h*o-c*v*o-_*a*d+i*v*d+c*a*M-i*h*M)*A,e[4]=R*A,e[5]=(p*m*o-y*v*o+y*a*M-t*m*M-p*a*g+t*v*g)*A,e[6]=(y*h*o-u*m*o-y*a*d+t*m*d+u*a*g-t*h*g)*A,e[7]=(u*v*o-p*h*o+p*a*d-t*v*d-u*a*M+t*h*M)*A,e[8]=I*A,e[9]=(y*_*o-p*w*o-y*i*M+t*w*M+p*i*g-t*_*g)*A,e[10]=(u*w*o-y*c*o+y*i*d-t*w*d-u*i*g+t*c*g)*A,e[11]=(p*c*o-u*_*o-p*i*d+t*_*d+u*i*M-t*c*M)*A,e[12]=V*A,e[13]=(p*w*a-y*_*a+y*i*v-t*w*v-p*i*m+t*_*m)*A,e[14]=(y*c*a-u*w*a-y*i*h+t*w*h+u*i*m-t*c*m)*A,e[15]=(u*_*a-p*c*a+p*i*h-t*_*h-u*i*v+t*c*v)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,c=e.y,h=e.z,d=o*u,p=o*c;return this.set(d*u+i,d*c-a*h,d*h+a*c,0,d*c+a*h,p*c+i,p*h-a*u,0,d*h-a*c,p*h+a*u,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,d=o+o,p=u+u,_=c+c,v=o*d,M=o*p,y=o*_,w=u*p,m=u*_,g=c*_,U=h*d,R=h*p,I=h*_,V=i.x,F=i.y,A=i.z;return a[0]=(1-(w+g))*V,a[1]=(M+I)*V,a[2]=(y-R)*V,a[3]=0,a[4]=(M-I)*F,a[5]=(1-(v+g))*F,a[6]=(m+U)*F,a[7]=0,a[8]=(y+R)*A,a[9]=(m-U)*A,a[10]=(1-(v+w))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=ts.set(a[0],a[1],a[2]).length();const u=ts.set(a[4],a[5],a[6]).length(),c=ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const d=1/o,p=1/u,_=1/c;return ri.elements[0]*=d,ri.elements[1]*=d,ri.elements[2]*=d,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,t.setFromRotationMatrix(ri),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,a,o,u,c=Ii){const h=this.elements,d=2*o/(t-e),p=2*o/(i-a),_=(t+e)/(t-e),v=(i+a)/(i-a);let M,y;if(c===Ii)M=-(u+o)/(u-o),y=-2*u*o/(u-o);else if(c===wo)M=-u/(u-o),y=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,c=Ii){const h=this.elements,d=1/(t-e),p=1/(i-a),_=1/(u-o),v=(t+e)*d,M=(i+a)*p;let y,w;if(c===Ii)y=(u+o)*_,w=-2*_;else if(c===wo)y=o*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=w,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new H,ri=new Yt,$S=new H(0,0,0),ZS=new H(1,1,1),Yi=new H,io=new H,Bn=new H,Qh=new Yt,ed=new br;class Io{constructor(e=0,t=0,i=0,a=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],h=a[1],d=a[5],p=a[9],_=a[2],v=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jS=0;const td=new H,ns=new br,Ri=new Yt,ro=new H,Zs=new H,JS=new H,QS=new br,nd=new H(1,0,0),id=new H(0,1,0),rd=new H(0,0,1),eE={type:"added"},tE={type:"removed"};class mn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new H,t=new Io,i=new br,a=new H(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Zs,ro,this.up):Ri.lookAt(ro,Zs,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),ns.setFromRotationMatrix(Ri),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,QS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++){const c=a[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(e.materials,this.material[h]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),y=u(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),M.length>0&&(i.animations=M),y.length>0&&(i.nodes=y)}return i.object=a,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}mn.DEFAULT_UP=new H(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new H,Ci=new H,lc=new H,Li=new H,is=new H,rs=new H,sd=new H,cc=new H,uc=new H,fc=new H;class pi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),si.subVectors(e,t),a.cross(si);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){si.subVectors(a,t),Ci.subVectors(i,t),lc.subVectors(e,t);const u=si.dot(si),c=si.dot(Ci),h=si.dot(lc),d=Ci.dot(Ci),p=Ci.dot(lc),_=u*d-c*c;if(_===0)return o.set(0,0,0),null;const v=1/_,M=(d*h-c*p)*v,y=(u*p-c*h)*v;return o.set(1-M-y,y,M)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,a,o,u,c,h){return this.getBarycoord(e,t,i,a,Li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Li.x),h.addScaledVector(u,Li.y),h.addScaledVector(c,Li.z),h)}static isFrontFacing(e,t,i,a){return si.subVectors(i,t),Ci.subVectors(e,t),si.cross(Ci).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,c;is.subVectors(a,i),rs.subVectors(o,i),cc.subVectors(e,i);const h=is.dot(cc),d=rs.dot(cc);if(h<=0&&d<=0)return t.copy(i);uc.subVectors(e,a);const p=is.dot(uc),_=rs.dot(uc);if(p>=0&&_<=p)return t.copy(a);const v=h*_-p*d;if(v<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(i).addScaledVector(is,u);fc.subVectors(e,o);const M=is.dot(fc),y=rs.dot(fc);if(y>=0&&M<=y)return t.copy(o);const w=M*d-h*y;if(w<=0&&d>=0&&y<=0)return c=d/(d-y),t.copy(i).addScaledVector(rs,c);const m=p*y-M*_;if(m<=0&&_-p>=0&&M-y>=0)return sd.subVectors(o,a),c=(_-p)/(_-p+(M-y)),t.copy(a).addScaledVector(sd,c);const g=1/(m+w+v);return u=w*g,c=v*g,t.copy(i).addScaledVector(is,u).addScaledVector(rs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},so={h:0,s:0,l:0};function hc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Lt.workingColorSpace){if(e=Wc(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=hc(u,o,e+1/3),this.g=hc(u,o,e),this.b=hc(u,o,e-1/3)}return Lt.toWorkingColorSpace(this,a),this}setStyle(e,t=ln){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Lt.fromWorkingColorSpace(dn.copy(this),e),Math.round(pn(dn.r*255,0,255))*65536+Math.round(pn(dn.g*255,0,255))*256+Math.round(pn(dn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,a=dn.g,o=dn.b,u=Math.max(i,a,o),c=Math.min(i,a,o);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:h=(a-o)/_+(a<o?6:0);break;case a:h=(o-i)/_+2;break;case o:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ln){Lt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,a=dn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(so);const i=ta(Ki.h,so.h,t),a=ta(Ki.s,so.s,t),o=ta(Ki.l,so.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new At;At.NAMES=fp;let nE=0;class Ts extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=gs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rc&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class As extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new H,ao=new et;class mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),a=xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),i=xn(i,this.array),a=xn(a,this.array),o=xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class hp extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dp extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tn extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iE=0;const $n=new Yt,dc=new mn,ss=new H,zn=new aa,js=new aa,nn=new H;class jn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?dp:hp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new mt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];js.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(zn.min,js.min),zn.expandByPoint(nn),nn.addVectors(zn.max,js.max),zn.expandByPoint(nn)):(zn.expandByPoint(js.min),zn.expandByPoint(js.max))}zn.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)nn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(nn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)nn.fromBufferAttribute(c,d),h&&(ss.fromBufferAttribute(e,d),nn.add(ss)),a=Math.max(a,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,o=t.normal.array,u=t.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let S=0;S<c;S++)d[S]=new H,p[S]=new H;const _=new H,v=new H,M=new H,y=new et,w=new et,m=new et,g=new H,U=new H;function R(S,L,$){_.fromArray(a,S*3),v.fromArray(a,L*3),M.fromArray(a,$*3),y.fromArray(u,S*2),w.fromArray(u,L*2),m.fromArray(u,$*2),v.sub(_),M.sub(_),w.sub(y),m.sub(y);const ie=1/(w.x*m.y-m.x*w.y);isFinite(ie)&&(g.copy(v).multiplyScalar(m.y).addScaledVector(M,-w.y).multiplyScalar(ie),U.copy(M).multiplyScalar(w.x).addScaledVector(v,-m.x).multiplyScalar(ie),d[S].add(g),d[L].add(g),d[$].add(g),p[S].add(U),p[L].add(U),p[$].add(U))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let S=0,L=I.length;S<L;++S){const $=I[S],ie=$.start,G=$.count;for(let ee=ie,Z=ie+G;ee<Z;ee+=3)R(i[ee+0],i[ee+1],i[ee+2])}const V=new H,F=new H,A=new H,z=new H;function X(S){A.fromArray(o,S*3),z.copy(A);const L=d[S];V.copy(L),V.sub(A.multiplyScalar(A.dot(L))).normalize(),F.crossVectors(z,L);const ie=F.dot(p[S])<0?-1:1;h[S*4]=V.x,h[S*4+1]=V.y,h[S*4+2]=V.z,h[S*4+3]=ie}for(let S=0,L=I.length;S<L;++S){const $=I[S],ie=$.start,G=$.count;for(let ee=ie,Z=ie+G;ee<Z;ee+=3)X(i[ee+0]),X(i[ee+1]),X(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,M=i.count;v<M;v++)i.setXYZ(v,0,0,0);const a=new H,o=new H,u=new H,c=new H,h=new H,d=new H,p=new H,_=new H;if(e)for(let v=0,M=e.count;v<M;v+=3){const y=e.getX(v+0),w=e.getX(v+1),m=e.getX(v+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,m),p.subVectors(u,o),_.subVectors(a,o),p.cross(_),c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,m),c.add(p),h.add(p),d.add(p),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,M=t.count;v<M;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,o),_.subVectors(a,o),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(h.length*p);let M=0,y=0;for(let w=0,m=h.length;w<m;w++){c.isInterleavedBufferAttribute?M=h[w]*c.data.stride+c.offset:M=h[w]*p;for(let g=0;g<p;g++)v[y++]=d[M++]}return new mi(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,a=this.attributes;for(const c in a){const h=a[c],d=e(h,i);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],M=e(v,i);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,v=d.length;_<v;_++){const M=d[_];p.push(M.toJSON(e.data))}p.length>0&&(a[h]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],_=o[d];for(let v=0,M=_.length;v<M;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new Yt,gr=new kc,oo=new Do,od=new H,as=new H,os=new H,ls=new H,pc=new H,lo=new H,co=new et,uo=new et,fo=new et,ld=new H,cd=new H,ud=new H,ho=new H,po=new H;class Pn extends mn{constructor(e=new jn,t=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){lo.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=c[h],_=o[h];p!==0&&(pc.fromBufferAttribute(_,e),u?lo.addScaledVector(pc,p):lo.addScaledVector(pc.sub(t),p))}t.add(lo)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(o),gr.copy(e.ray).recast(e.near),!(oo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(oo,od)===null||gr.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(ad.copy(o).invert(),gr.copy(e.ray).applyMatrix4(ad),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,v=o.groups,M=o.drawRange;if(c!==null)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],g=u[m.materialIndex],U=Math.max(m.start,M.start),R=Math.min(c.count,Math.min(m.start+m.count,M.start+M.count));for(let I=U,V=R;I<V;I+=3){const F=c.getX(I),A=c.getX(I+1),z=c.getX(I+2);a=mo(this,g,e,i,d,p,_,F,A,z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,M.start),w=Math.min(c.count,M.start+M.count);for(let m=y,g=w;m<g;m+=3){const U=c.getX(m),R=c.getX(m+1),I=c.getX(m+2);a=mo(this,u,e,i,d,p,_,U,R,I),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let y=0,w=v.length;y<w;y++){const m=v[y],g=u[m.materialIndex],U=Math.max(m.start,M.start),R=Math.min(h.count,Math.min(m.start+m.count,M.start+M.count));for(let I=U,V=R;I<V;I+=3){const F=I,A=I+1,z=I+2;a=mo(this,g,e,i,d,p,_,F,A,z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let m=y,g=w;m<g;m+=3){const U=m,R=m+1,I=m+2;a=mo(this,u,e,i,d,p,_,U,R,I),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function rE(s,e,t,i,a,o,u,c){let h;if(e.side===En?h=i.intersectTriangle(u,o,a,!0,c):h=i.intersectTriangle(a,o,u,e.side===ir,c),h===null)return null;po.copy(c),po.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(po);return d<t.near||d>t.far?null:{distance:d,point:po.clone(),object:s}}function mo(s,e,t,i,a,o,u,c,h,d){s.getVertexPosition(c,as),s.getVertexPosition(h,os),s.getVertexPosition(d,ls);const p=rE(s,e,t,i,as,os,ls,ho);if(p){a&&(co.fromBufferAttribute(a,c),uo.fromBufferAttribute(a,h),fo.fromBufferAttribute(a,d),p.uv=pi.getInterpolation(ho,as,os,ls,co,uo,fo,new et)),o&&(co.fromBufferAttribute(o,c),uo.fromBufferAttribute(o,h),fo.fromBufferAttribute(o,d),p.uv1=pi.getInterpolation(ho,as,os,ls,co,uo,fo,new et),p.uv2=p.uv1),u&&(ld.fromBufferAttribute(u,c),cd.fromBufferAttribute(u,h),ud.fromBufferAttribute(u,d),p.normal=pi.getInterpolation(ho,as,os,ls,ld,cd,ud,new H),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new H,materialIndex:0};pi.getNormal(as,os,ls,_.normal),p.face=_}return p}class bs extends jn{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],d=[],p=[],_=[];let v=0,M=0;y("z","y","x",-1,-1,i,t,e,u,o,0),y("z","y","x",1,-1,i,t,-e,u,o,1),y("x","z","y",1,1,e,i,t,a,u,2),y("x","z","y",1,-1,e,i,-t,a,u,3),y("x","y","z",1,-1,e,t,i,a,o,4),y("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(_,2));function y(w,m,g,U,R,I,V,F,A,z,X){const S=I/A,L=V/z,$=I/2,ie=V/2,G=F/2,ee=A+1,Z=z+1;let ae=0,re=0;const ce=new H;for(let ue=0;ue<Z;ue++){const me=ue*L-ie;for(let Ee=0;Ee<ee;Ee++){const Ze=Ee*S-$;ce[w]=Ze*U,ce[m]=me*R,ce[g]=G,d.push(ce.x,ce.y,ce.z),ce[w]=0,ce[m]=0,ce[g]=F>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(Ee/A),_.push(1-ue/z),ae+=1}}for(let ue=0;ue<z;ue++)for(let me=0;me<A;me++){const Ee=v+me+ee*ue,Ze=v+me+ee*(ue+1),ne=v+(me+1)+ee*(ue+1),de=v+(me+1)+ee*ue;h.push(Ee,Ze,de),h.push(Ze,ne,de),re+=6}c.addGroup(M,re,X),M+=re,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const i=Es(s[t]);for(const a in i)e[a]=i[a]}return e}function sE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pp(s){return s.getRenderTarget()===null?s.outputColorSpace:Lt.workingColorSpace}const aE={clone:Es,merge:Mn};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=sE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mp extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new H,fd=new et,hd=new et;class rn extends mp{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,fd,hd),t.subVectors(hd,fd)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/h,t-=u.offsetY*i/d,a*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class cE extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new rn(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new rn(cs,us,e,t);o.layers=this.layers,this.add(o);const u=new rn(cs,us,e,t);u.layers=this.layers,this.add(u);const c=new rn(cs,us,e,t);c.layers=this.layers,this.add(c);const h=new rn(cs,us,e,t);h.layers=this.layers,this.add(h);const d=new rn(cs,us,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,c,h]=t;for(const d of t)this.remove(d);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,u),e.setRenderTarget(i,2,a),e.render(t,c),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,v,M),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class gp extends yn{constructor(e,t,i,a,o,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,i,a,o,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uE extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(_s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Tr?ln:Zn),this.texture=new gp(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new bs(5,5,5),o=new rr({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:er});o.uniforms.tEquirect.value=t;const u=new Pn(a,o),c=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Ln),new cE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}const mc=new H,fE=new H,hE=new mt;class ji{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=mc.subVectors(i,t).cross(fE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hE.getNormalMatrix(e),a=this.coplanarPoint(mc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Do,go=new H;class Xc{constructor(e=new ji,t=new ji,i=new ji,a=new ji,o=new ji,u=new ji){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,a=e.elements,o=a[0],u=a[1],c=a[2],h=a[3],d=a[4],p=a[5],_=a[6],v=a[7],M=a[8],y=a[9],w=a[10],m=a[11],g=a[12],U=a[13],R=a[14],I=a[15];if(i[0].setComponents(h-o,v-d,m-M,I-g).normalize(),i[1].setComponents(h+o,v+d,m+M,I+g).normalize(),i[2].setComponents(h+u,v+p,m+y,I+U).normalize(),i[3].setComponents(h-u,v-p,m-y,I-U).normalize(),i[4].setComponents(h-c,v-_,m-w,I-R).normalize(),t===Ii)i[5].setComponents(h+c,v+_,m+w,I+R).normalize();else if(t===wo)i[5].setComponents(c,_,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(go.x=a.normal.x>0?e.max.x:e.min.x,go.y=a.normal.y>0?e.max.y:e.min.y,go.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _p(){let s=null,e=!1,t=null,i=null;function a(o,u){t(o,u),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function dE(s,e){const t=e.isWebGL2,i=new WeakMap;function a(d,p){const _=d.array,v=d.usage,M=_.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=s.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=s.SHORT;else if(_ instanceof Uint32Array)w=s.UNSIGNED_INT;else if(_ instanceof Int32Array)w=s.INT;else if(_ instanceof Int8Array)w=s.BYTE;else if(_ instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:M}}function o(d,p,_){const v=p.array,M=p._updateRange,y=p.updateRanges;if(s.bindBuffer(_,d),M.count===-1&&y.length===0&&s.bufferSubData(_,0,v),y.length!==0){for(let w=0,m=y.length;w<m;w++){const g=y[w];t?s.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):s.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}M.count!==-1&&(t?s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(s.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,a(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:h}}class Uo extends jn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(i),h=Math.floor(a),d=c+1,p=h+1,_=e/c,v=t/h,M=[],y=[],w=[],m=[];for(let g=0;g<p;g++){const U=g*v-u;for(let R=0;R<d;R++){const I=R*_-o;y.push(I,-U,0),w.push(0,0,1),m.push(R/c),m.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<c;U++){const R=U+d*g,I=U+d*(g+1),V=U+1+d*(g+1),F=U+1+d*g;M.push(R,I,F),M.push(I,V,F)}this.setIndex(M),this.setAttribute("position",new Tn(y,3)),this.setAttribute("normal",new Tn(w,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,py=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,my=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ty=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,By=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ST=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:_E,alphatest_fragment:vE,alphatest_pars_fragment:xE,aomap_fragment:ME,aomap_pars_fragment:SE,batching_pars_vertex:EE,batching_vertex:yE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:bE,iridescence_fragment:wE,bumpmap_pars_fragment:RE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:DE,color_fragment:IE,color_pars_fragment:UE,color_pars_vertex:NE,color_vertex:OE,common:FE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:GE,displacementmap_vertex:HE,emissivemap_fragment:VE,emissivemap_pars_fragment:WE,colorspace_fragment:kE,colorspace_pars_fragment:XE,envmap_fragment:qE,envmap_common_pars_fragment:YE,envmap_pars_fragment:KE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:oy,envmap_vertex:ZE,fog_vertex:jE,fog_pars_vertex:JE,fog_fragment:QE,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_fragment:ry,lights_lambert_pars_fragment:sy,lights_pars_begin:ay,lights_toon_fragment:ly,lights_toon_pars_fragment:cy,lights_phong_fragment:uy,lights_phong_pars_fragment:fy,lights_physical_fragment:hy,lights_physical_pars_fragment:dy,lights_fragment_begin:py,lights_fragment_maps:my,lights_fragment_end:gy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:My,map_fragment:Sy,map_pars_fragment:Ey,map_particle_fragment:yy,map_particle_pars_fragment:Ty,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:by,morphcolor_vertex:wy,morphnormal_vertex:Ry,morphtarget_pars_vertex:Cy,morphtarget_vertex:Ly,normal_fragment_begin:Py,normal_fragment_maps:Dy,normal_pars_fragment:Iy,normal_pars_vertex:Uy,normal_vertex:Ny,normalmap_pars_fragment:Oy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:By,clearcoat_pars_fragment:zy,iridescence_pars_fragment:Gy,opaque_fragment:Hy,packing:Vy,premultiplied_alpha_fragment:Wy,project_vertex:ky,dithering_fragment:Xy,dithering_pars_fragment:qy,roughnessmap_fragment:Yy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:$y,shadowmap_pars_vertex:Zy,shadowmap_vertex:jy,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:rT,tonemapping_fragment:sT,tonemapping_pars_fragment:aT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:fT,worldpos_vertex:hT,background_vert:dT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:_T,cube_frag:vT,depth_vert:xT,depth_frag:MT,distanceRGBA_vert:ST,distanceRGBA_frag:ET,equirect_vert:yT,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:bT,meshbasic_vert:wT,meshbasic_frag:RT,meshlambert_vert:CT,meshlambert_frag:LT,meshmatcap_vert:PT,meshmatcap_frag:DT,meshnormal_vert:IT,meshnormal_frag:UT,meshphong_vert:NT,meshphong_frag:OT,meshphysical_vert:FT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:GT,points_vert:HT,points_frag:VT,shadow_vert:WT,shadow_frag:kT,sprite_vert:XT,sprite_frag:qT},Se={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},hi={basic:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Mn([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Mn([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Mn([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Mn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Mn([Se.lights,Se.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};hi.physical={uniforms:Mn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _o={r:0,b:0,g:0};function YT(s,e,t,i,a,o,u){const c=new At(0);let h=o===!0?0:1,d,p,_=null,v=0,M=null;function y(m,g){let U=!1,R=g.isScene===!0?g.background:null;R&&R.isTexture&&(R=(g.backgroundBlurriness>0?t:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Lo)?(p===void 0&&(p=new Pn(new bs(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Es(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Ft,(_!==R||v!==R.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Pn(new Uo(2,2),new rr({name:"BackgroundMaterial",uniforms:Es(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||M!==s.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function w(m,g){m.getRGB(_o,pp(s)),i.buffers.color.setClear(_o.r,_o.g,_o.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),h=g,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,w(c,h)},render:y}}function KT(s,e,t,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},h=m(null);let d=h,p=!1;function _(G,ee,Z,ae,re){let ce=!1;if(u){const ue=w(ae,Z,ee);d!==ue&&(d=ue,M(d.object)),ce=g(G,ae,Z,re),ce&&U(G,ae,Z,re)}else{const ue=ee.wireframe===!0;(d.geometry!==ae.id||d.program!==Z.id||d.wireframe!==ue)&&(d.geometry=ae.id,d.program=Z.id,d.wireframe=ue,ce=!0)}re!==null&&t.update(re,s.ELEMENT_ARRAY_BUFFER),(ce||p)&&(p=!1,z(G,ee,Z,ae),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function v(){return i.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function M(G){return i.isWebGL2?s.bindVertexArray(G):o.bindVertexArrayOES(G)}function y(G){return i.isWebGL2?s.deleteVertexArray(G):o.deleteVertexArrayOES(G)}function w(G,ee,Z){const ae=Z.wireframe===!0;let re=c[G.id];re===void 0&&(re={},c[G.id]=re);let ce=re[ee.id];ce===void 0&&(ce={},re[ee.id]=ce);let ue=ce[ae];return ue===void 0&&(ue=m(v()),ce[ae]=ue),ue}function m(G){const ee=[],Z=[],ae=[];for(let re=0;re<a;re++)ee[re]=0,Z[re]=0,ae[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Z,attributeDivisors:ae,object:G,attributes:{},index:null}}function g(G,ee,Z,ae){const re=d.attributes,ce=ee.attributes;let ue=0;const me=Z.getAttributes();for(const Ee in me)if(me[Ee].location>=0){const ne=re[Ee];let de=ce[Ee];if(de===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(de=G.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;ue++}return d.attributesNum!==ue||d.index!==ae}function U(G,ee,Z,ae){const re={},ce=ee.attributes;let ue=0;const me=Z.getAttributes();for(const Ee in me)if(me[Ee].location>=0){let ne=ce[Ee];ne===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor));const de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),re[Ee]=de,ue++}d.attributes=re,d.attributesNum=ue,d.index=ae}function R(){const G=d.newAttributes;for(let ee=0,Z=G.length;ee<Z;ee++)G[ee]=0}function I(G){V(G,0)}function V(G,ee){const Z=d.newAttributes,ae=d.enabledAttributes,re=d.attributeDivisors;Z[G]=1,ae[G]===0&&(s.enableVertexAttribArray(G),ae[G]=1),re[G]!==ee&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,ee),re[G]=ee)}function F(){const G=d.newAttributes,ee=d.enabledAttributes;for(let Z=0,ae=ee.length;Z<ae;Z++)ee[Z]!==G[Z]&&(s.disableVertexAttribArray(Z),ee[Z]=0)}function A(G,ee,Z,ae,re,ce,ue){ue===!0?s.vertexAttribIPointer(G,ee,Z,re,ce):s.vertexAttribPointer(G,ee,Z,ae,re,ce)}function z(G,ee,Z,ae){if(i.isWebGL2===!1&&(G.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const re=ae.attributes,ce=Z.getAttributes(),ue=ee.defaultAttributeValues;for(const me in ce){const Ee=ce[me];if(Ee.location>=0){let Ze=re[me];if(Ze===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Ze=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Ze=G.instanceColor)),Ze!==void 0){const ne=Ze.normalized,de=Ze.itemSize,Re=t.get(Ze);if(Re===void 0)continue;const We=Re.buffer,Ge=Re.type,Pe=Re.bytesPerElement,vt=i.isWebGL2===!0&&(Ge===s.INT||Ge===s.UNSIGNED_INT||Ze.gpuType===Zd);if(Ze.isInterleavedBufferAttribute){const je=Ze.data,q=je.stride,Vt=Ze.offset;if(je.isInstancedInterleavedBuffer){for(let De=0;De<Ee.locationSize;De++)V(Ee.location+De,je.meshPerAttribute);G.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let De=0;De<Ee.locationSize;De++)I(Ee.location+De);s.bindBuffer(s.ARRAY_BUFFER,We);for(let De=0;De<Ee.locationSize;De++)A(Ee.location+De,de/Ee.locationSize,Ge,ne,q*Pe,(Vt+de/Ee.locationSize*De)*Pe,vt)}else{if(Ze.isInstancedBufferAttribute){for(let je=0;je<Ee.locationSize;je++)V(Ee.location+je,Ze.meshPerAttribute);G.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let je=0;je<Ee.locationSize;je++)I(Ee.location+je);s.bindBuffer(s.ARRAY_BUFFER,We);for(let je=0;je<Ee.locationSize;je++)A(Ee.location+je,de/Ee.locationSize,Ge,ne,de*Pe,de/Ee.locationSize*je*Pe,vt)}}else if(ue!==void 0){const ne=ue[me];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(Ee.location,ne);break;case 3:s.vertexAttrib3fv(Ee.location,ne);break;case 4:s.vertexAttrib4fv(Ee.location,ne);break;default:s.vertexAttrib1fv(Ee.location,ne)}}}}F()}function X(){$();for(const G in c){const ee=c[G];for(const Z in ee){const ae=ee[Z];for(const re in ae)y(ae[re].object),delete ae[re];delete ee[Z]}delete c[G]}}function S(G){if(c[G.id]===void 0)return;const ee=c[G.id];for(const Z in ee){const ae=ee[Z];for(const re in ae)y(ae[re].object),delete ae[re];delete ee[Z]}delete c[G.id]}function L(G){for(const ee in c){const Z=c[ee];if(Z[G.id]===void 0)continue;const ae=Z[G.id];for(const re in ae)y(ae[re].object),delete ae[re];delete Z[G.id]}}function $(){ie(),p=!0,d!==h&&(d=h,M(d.object))}function ie(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:$,resetDefaultState:ie,dispose:X,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:R,enableAttribute:I,disableUnusedAttributes:F}}function $T(s,e,t,i){const a=i.isWebGL2;let o;function u(p){o=p}function c(p,_){s.drawArrays(o,p,_),t.update(_,o,1)}function h(p,_,v){if(v===0)return;let M,y;if(a)M=s,y="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[y](o,p,_,v),t.update(_,o,v)}function d(p,_,v){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v;y++)this.render(p[y],_[y]);else{M.multiDrawArraysWEBGL(o,p,0,_,0,v);let y=0;for(let w=0;w<v;w++)y+=_[w];t.update(y,o,1)}}this.setMode=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function ZT(s,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,I=u||e.has("OES_texture_float"),V=R&&I,F=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:y,maxAttributes:w,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:U,vertexTextures:R,floatFragmentTextures:I,floatVertexTextures:V,maxSamples:F}}function jT(s){const e=this;let t=null,i=0,a=!1,o=!1;const u=new ji,c=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||i!==0||a;return a=v,i=_.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,M){const y=_.clippingPlanes,w=_.clipIntersection,m=_.clipShadows,g=s.get(_);if(!a||y===null||y.length===0||o&&!m)o?p(null):d();else{const U=o?0:i,R=U*4;let I=g.clippingState||null;h.value=I,I=p(y,v,R,M);for(let V=0;V!==R;++V)I[V]=t[V];g.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,M,y){const w=_!==null?_.length:0;let m=null;if(w!==0){if(m=h.value,y!==!0||m===null){const g=M+w*4,U=v.matrixWorldInverse;c.getNormalMatrix(U),(m===null||m.length<g)&&(m=new Float32Array(g));for(let R=0,I=M;R!==w;++R,I+=4)u.copy(_[R]).applyMatrix4(U,c),u.normal.toArray(m,I),m[I+3]=u.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}function JT(s){let e=new WeakMap;function t(u,c){return c===Lc?u.mapping=xs:c===Pc&&(u.mapping=Ms),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Lc||c===Pc)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new uE(h.height);return d.fromEquirectangularTexture(s,u),e.set(u,d),u.addEventListener("dispose",a),t(d.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class QT extends mp{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,dd=[.125,.215,.35,.446,.526,.582],Mr=20,gc=new QT,pd=new At;let _c=null,vc=0,xc=0;const vr=(1+Math.sqrt(5))/2,fs=1/vr,md=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,vr,fs),new H(0,vr,-fs),new H(fs,0,vr),new H(-fs,0,vr),new H(vr,fs,0),new H(-vr,fs,0)];class gd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ia,format:oi,colorSpace:Ui,depthBuffer:!1},a=_d(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eA(o)),this._blurMaterial=tA(o,e,t)}return a}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,i,a){const c=new rn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(pd),p.toneMapping=tr,p.autoClear=!1;const M=new As({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),y=new Pn(new bs,M);let w=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,w=!0):(M.color.copy(pd),w=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(c.up.set(0,h[g],0),c.lookAt(d[g],0,0)):U===1?(c.up.set(0,0,h[g]),c.lookAt(0,d[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,d[g]));const R=this._cubeSize;vo(a,U*R,g>2?R:0,R,R),p.setRenderTarget(a),w&&p.render(y,c),p.render(e,c)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===xs||e.mapping===Ms;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new Pn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;vo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,gc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=md[(a-1)%md.length];this._blur(e,a-1,a,o,u)}t.autoClear=i}_blur(e,t,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",o),this._halfBlur(u,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Pn(this._lodPlanes[a],d),v=d.uniforms,M=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=o/y,m=isFinite(o)?1+Math.floor(p*w):Mr;m>Mr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const g=[];let U=0;for(let A=0;A<Mr;++A){const z=A/w,X=Math.exp(-z*z/2);g.push(X),A===0?U+=X:A<m&&(U+=2*X)}for(let A=0;A<g.length;A++)g[A]=g[A]/U;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=y,v.mipInt.value=R-i;const I=this._sizeLods[a],V=3*I*(a>R-ps?a-R+ps:0),F=4*(this._cubeSize-I);vo(t,V,F,3*I,2*I),h.setRenderTarget(t),h.render(_,gc)}}function eA(s){const e=[],t=[],i=[];let a=s;const o=s-ps+1+dd.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);t.push(c);let h=1/c;u>s-ps?h=dd[u-s+ps-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],M=6,y=6,w=3,m=2,g=1,U=new Float32Array(w*y*M),R=new Float32Array(m*y*M),I=new Float32Array(g*y*M);for(let F=0;F<M;F++){const A=F%3*2/3-1,z=F>2?0:-1,X=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];U.set(X,w*y*F),R.set(v,m*y*F);const S=[F,F,F,F,F,F];I.set(S,g*y*F)}const V=new jn;V.setAttribute("position",new mi(U,w)),V.setAttribute("uv",new mi(R,m)),V.setAttribute("faceIndex",new mi(I,g)),e.push(V),a>ps&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _d(s,e,t){const i=new Ar(s,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function tA(s,e,t){const i=new Float32Array(Mr),a=new H(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function vd(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function xd(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nA(s){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===Lc||h===Pc,p=h===xs||h===Ms;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new gd(s)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&a(_)){t===null&&(t=new gd(s));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",o),v.texture}else return null}}}return c}function a(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function iA(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function rA(s,e,t,i){const a={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);for(const y in v.morphAttributes){const w=v.morphAttributes[y];for(let m=0,g=w.length;m<g;m++)e.remove(w[m])}v.removeEventListener("dispose",u),delete a[v.id];const M=o.get(v);M&&(e.remove(M),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const y in M){const w=M[y];for(let m=0,g=w.length;m<g;m++)e.update(w[m],s.ARRAY_BUFFER)}}function d(_){const v=[],M=_.index,y=_.attributes.position;let w=0;if(M!==null){const U=M.array;w=M.version;for(let R=0,I=U.length;R<I;R+=3){const V=U[R+0],F=U[R+1],A=U[R+2];v.push(V,F,F,A,A,V)}}else if(y!==void 0){const U=y.array;w=y.version;for(let R=0,I=U.length/3-1;R<I;R+=3){const V=R+0,F=R+1,A=R+2;v.push(V,F,F,A,A,V)}}else return;const m=new(ap(v)?dp:hp)(v,1);m.version=w;const g=o.get(_);g&&e.remove(g),o.set(_,m)}function p(_){const v=o.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&d(_)}else d(_);return o.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function sA(s,e,t,i){const a=i.isWebGL2;let o;function u(M){o=M}let c,h;function d(M){c=M.type,h=M.bytesPerElement}function p(M,y){s.drawElements(o,y,c,M*h),t.update(y,o,1)}function _(M,y,w){if(w===0)return;let m,g;if(a)m=s,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](o,y,c,M*h,w),t.update(y,o,w)}function v(M,y,w){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<w;g++)this.render(M[g]/h,y[g]);else{m.multiDrawElementsWEBGL(o,y,0,c,M,0,w);let g=0;for(let U=0;U<w;U++)g+=y[U];t.update(g,o,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function aA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(o/3);break;case s.LINES:t.lines+=c*(o/2);break;case s.LINE_STRIP:t.lines+=c*(o-1);break;case s.LINE_LOOP:t.lines+=c*o;break;case s.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function oA(s,e){return s[0]-e[0]}function lA(s,e){return Math.abs(e[1])-Math.abs(s[1])}function cA(s,e,t){const i={},a=new Float32Array(8),o=new WeakMap,u=new Gt,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=y!==void 0?y.length:0;let m=o.get(p);if(m===void 0||m.count!==w){let ee=function(){ie.dispose(),o.delete(p),p.removeEventListener("dispose",ee)};var M=ee;m!==void 0&&m.texture.dispose();const R=p.morphAttributes.position!==void 0,I=p.morphAttributes.normal!==void 0,V=p.morphAttributes.color!==void 0,F=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let X=0;R===!0&&(X=1),I===!0&&(X=2),V===!0&&(X=3);let S=p.attributes.position.count*X,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const $=new Float32Array(S*L*4*w),ie=new cp($,S,L,w);ie.type=Di,ie.needsUpdate=!0;const G=X*4;for(let Z=0;Z<w;Z++){const ae=F[Z],re=A[Z],ce=z[Z],ue=S*L*4*Z;for(let me=0;me<ae.count;me++){const Ee=me*G;R===!0&&(u.fromBufferAttribute(ae,me),$[ue+Ee+0]=u.x,$[ue+Ee+1]=u.y,$[ue+Ee+2]=u.z,$[ue+Ee+3]=0),I===!0&&(u.fromBufferAttribute(re,me),$[ue+Ee+4]=u.x,$[ue+Ee+5]=u.y,$[ue+Ee+6]=u.z,$[ue+Ee+7]=0),V===!0&&(u.fromBufferAttribute(ce,me),$[ue+Ee+8]=u.x,$[ue+Ee+9]=u.y,$[ue+Ee+10]=u.z,$[ue+Ee+11]=ce.itemSize===4?u.w:1)}}m={count:w,texture:ie,size:new et(S,L)},o.set(p,m),p.addEventListener("dispose",ee)}let g=0;for(let R=0;R<v.length;R++)g+=v[R];const U=p.morphTargetsRelative?1:1-g;_.getUniforms().setValue(s,"morphTargetBaseInfluence",U),_.getUniforms().setValue(s,"morphTargetInfluences",v),_.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const y=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==y){w=[];for(let I=0;I<y;I++)w[I]=[I,0];i[p.id]=w}for(let I=0;I<y;I++){const V=w[I];V[0]=I,V[1]=v[I]}w.sort(lA);for(let I=0;I<8;I++)I<y&&w[I][1]?(c[I][0]=w[I][0],c[I][1]=w[I][1]):(c[I][0]=Number.MAX_SAFE_INTEGER,c[I][1]=0);c.sort(oA);const m=p.morphAttributes.position,g=p.morphAttributes.normal;let U=0;for(let I=0;I<8;I++){const V=c[I],F=V[0],A=V[1];F!==Number.MAX_SAFE_INTEGER&&A?(m&&p.getAttribute("morphTarget"+I)!==m[F]&&p.setAttribute("morphTarget"+I,m[F]),g&&p.getAttribute("morphNormal"+I)!==g[F]&&p.setAttribute("morphNormal"+I,g[F]),a[I]=A,U+=A):(m&&p.hasAttribute("morphTarget"+I)===!0&&p.deleteAttribute("morphTarget"+I),g&&p.hasAttribute("morphNormal"+I)===!0&&p.deleteAttribute("morphNormal"+I),a[I]=0)}const R=p.morphTargetsRelative?1:1-U;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function uA(s,e,t,i){let a=new WeakMap;function o(h){const d=i.render.frame,p=h.geometry,_=e.get(h,p);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return _}function u(){a=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:u}}class vp extends yn{constructor(e,t,i,a,o,u,c,h,d,p){if(p=p!==void 0?p:yr,p!==yr&&p!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===yr&&(i=Ji),i===void 0&&p===Ss&&(i=Er),super(null,a,o,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Sn,this.minFilter=h!==void 0?h:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xp=new yn,Mp=new vp(1,1);Mp.compareFunction=sp;const Sp=new cp,Ep=new YS,yp=new gp,Md=[],Sd=[],Ed=new Float32Array(16),yd=new Float32Array(9),Td=new Float32Array(4);function ws(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=Md[a];if(o===void 0&&(o=new Float32Array(a),Md[a]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(o,c)}return o}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function No(s,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function fA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function pA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function mA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Td.set(i),s.uniformMatrix2fv(this.addr,!1,Td),en(t,i)}}function gA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;yd.set(i),s.uniformMatrix3fv(this.addr,!1,yd),en(t,i)}}function _A(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ed.set(i),s.uniformMatrix4fv(this.addr,!1,Ed),en(t,i)}}function vA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function xA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function MA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function SA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function EA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function TA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function AA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function bA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const o=this.type===s.SAMPLER_2D_SHADOW?Mp:xp;t.setTexture2D(e||o,a)}function wA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Ep,a)}function RA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||yp,a)}function CA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Sp,a)}function LA(s){switch(s){case 5126:return fA;case 35664:return hA;case 35665:return dA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return xA;case 35668:case 35672:return MA;case 35669:case 35673:return SA;case 5125:return EA;case 36294:return yA;case 36295:return TA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return RA;case 36289:case 36303:case 36311:case 36292:return CA}}function PA(s,e){s.uniform1fv(this.addr,e)}function DA(s,e){const t=ws(e,this.size,2);s.uniform2fv(this.addr,t)}function IA(s,e){const t=ws(e,this.size,3);s.uniform3fv(this.addr,t)}function UA(s,e){const t=ws(e,this.size,4);s.uniform4fv(this.addr,t)}function NA(s,e){const t=ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OA(s,e){const t=ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FA(s,e){const t=ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function BA(s,e){s.uniform1iv(this.addr,e)}function zA(s,e){s.uniform2iv(this.addr,e)}function GA(s,e){s.uniform3iv(this.addr,e)}function HA(s,e){s.uniform4iv(this.addr,e)}function VA(s,e){s.uniform1uiv(this.addr,e)}function WA(s,e){s.uniform2uiv(this.addr,e)}function kA(s,e){s.uniform3uiv(this.addr,e)}function XA(s,e){s.uniform4uiv(this.addr,e)}function qA(s,e,t){const i=this.cache,a=e.length,o=No(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||xp,o[u])}function YA(s,e,t){const i=this.cache,a=e.length,o=No(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Ep,o[u])}function KA(s,e,t){const i=this.cache,a=e.length,o=No(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||yp,o[u])}function $A(s,e,t){const i=this.cache,a=e.length,o=No(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Sp,o[u])}function ZA(s){switch(s){case 5126:return PA;case 35664:return DA;case 35665:return IA;case 35666:return UA;case 35674:return NA;case 35675:return OA;case 35676:return FA;case 5124:case 35670:return BA;case 35667:case 35671:return zA;case 35668:case 35672:return GA;case 35669:case 35673:return HA;case 5125:return VA;case 36294:return WA;case 36295:return kA;case 36296:return XA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return $A}}class jA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LA(t.type)}}class JA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZA(t.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],i)}}}const Mc=/(\w+)(\])?(\[|\.)?/g;function Ad(s,e){s.seq.push(e),s.map[e.id]=e}function eb(s,e,t){const i=s.name,a=i.length;for(Mc.lastIndex=0;;){const o=Mc.exec(i),u=Mc.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===a){Ad(t,d===void 0?new jA(c,s,e):new JA(c,s,e));break}else{let _=t.map[c];_===void 0&&(_=new QA(c),Ad(t,_)),t=_}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);eb(o,u,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function bd(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const tb=37297;let nb=0;function ib(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function rb(s){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(s);let i;switch(e===t?i="":e===bo&&t===Ao?i="LinearDisplayP3ToLinearSRGB":e===Ao&&t===bo&&(i="LinearSRGBToLinearDisplayP3"),s){case Ui:case Po:return[i,"LinearTransferOETF"];case ln:case Vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function wd(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+ib(s.getShaderSource(e),u)}else return a}function sb(s,e){const t=rb(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ab(s,e){let t;switch(e){case iS:t="Linear";break;case rS:t="Reinhard";break;case sS:t="OptimizedCineon";break;case aS:t="ACESFilmic";break;case lS:t="AgX";break;case oS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ob(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function lb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function cb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ub(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),u=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function ms(s){return s!==""}function Rd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(s){return s.replace(fb,db)}const hb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function db(s,e){let t=ht[e];if(t===void 0){const i=hb.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(s){return s.replace(pb,mb)}function mb(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Pd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function _b(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function xb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gc:e="ENVMAP_BLENDING_MULTIPLY";break;case tS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function Mb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sb(s,e,t,i){const a=s.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=gb(t),d=_b(t),p=vb(t),_=xb(t),v=Mb(t),M=t.isWebGL2?"":ob(t),y=lb(t),w=cb(o),m=a.createProgram();let g,U,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ms).join(`
`),g.length>0&&(g+=`
`),U=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ms).join(`
`),U.length>0&&(U+=`
`)):(g=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),U=[M,Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ht.tonemapping_pars_fragment:"",t.toneMapping!==tr?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,sb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),u=Oc(u),u=Rd(u,t),u=Cd(u,t),c=Oc(c),c=Rd(c,t),c=Cd(c,t),u=Ld(u),c=Ld(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,U=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const I=R+g+u,V=R+U+c,F=bd(a,a.VERTEX_SHADER,I),A=bd(a,a.FRAGMENT_SHADER,V);a.attachShader(m,F),a.attachShader(m,A),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function z($){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(m).trim(),G=a.getShaderInfoLog(F).trim(),ee=a.getShaderInfoLog(A).trim();let Z=!0,ae=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,m,F,A);else{const re=wd(a,F,"vertex"),ce=wd(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+ie+`
`+re+`
`+ce)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(G===""||ee==="")&&(ae=!1);ae&&($.diagnostics={runnable:Z,programLog:ie,vertexShader:{log:G,prefix:g},fragmentShader:{log:ee,prefix:U}})}a.deleteShader(F),a.deleteShader(A),X=new Eo(a,m),S=ub(a,m)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let S;this.getAttributes=function(){return S===void 0&&z(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(m,tb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=F,this.fragmentShader=A,this}let Eb=0;class yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tb(e),t.set(e,i)),i}}class Tb{constructor(e){this.id=Eb++,this.code=e,this.usedTimes=0}}function Ab(s,e,t,i,a,o,u){const c=new up,h=new yb,d=new Set,p=[],_=a.isWebGL2,v=a.logarithmicDepthBuffer,M=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return d.add(S),S===0?"uv":`uv${S}`}function g(S,L,$,ie,G){const ee=ie.fog,Z=G.geometry,ae=S.isMeshStandardMaterial?ie.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||ae),ce=re&&re.mapping===Lo?re.image.height:null,ue=w[S.type];S.precision!==null&&(y=a.getMaxPrecision(S.precision),y!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",y,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=me!==void 0?me.length:0;let Ze=0;Z.morphAttributes.position!==void 0&&(Ze=1),Z.morphAttributes.normal!==void 0&&(Ze=2),Z.morphAttributes.color!==void 0&&(Ze=3);let ne,de,Re,We;if(ue){const dt=hi[ue];ne=dt.vertexShader,de=dt.fragmentShader}else ne=S.vertexShader,de=S.fragmentShader,h.update(S),Re=h.getVertexShaderID(S),We=h.getFragmentShaderID(S);const Ge=s.getRenderTarget(),Pe=G.isInstancedMesh===!0,vt=G.isBatchedMesh===!0,je=!!S.map,q=!!S.matcap,Vt=!!re,De=!!S.aoMap,ke=!!S.lightMap,Fe=!!S.bumpMap,Mt=!!S.normalMap,tt=!!S.displacementMap,P=!!S.emissiveMap,T=!!S.metalnessMap,K=!!S.roughnessMap,_e=S.anisotropy>0,he=S.clearcoat>0,ve=S.iridescence>0,Ie=S.sheen>0,ye=S.transmission>0,we=_e&&!!S.anisotropyMap,Be=he&&!!S.clearcoatMap,Qe=he&&!!S.clearcoatNormalMap,pe=he&&!!S.clearcoatRoughnessMap,St=ve&&!!S.iridescenceMap,st=ve&&!!S.iridescenceThicknessMap,Je=Ie&&!!S.sheenColorMap,ze=Ie&&!!S.sheenRoughnessMap,be=!!S.specularMap,nt=!!S.specularColorMap,O=!!S.specularIntensityMap,Me=ye&&!!S.transmissionMap,Te=ye&&!!S.thicknessMap,He=!!S.gradientMap,D=!!S.alphaMap,xe=S.alphaTest>0,ge=!!S.alphaHash,Ue=!!S.extensions;let Ve=tr;S.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const yt={isWebGL2:_,shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:de,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:We,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:y,batching:vt,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:q,envMap:Vt,envMapMode:Vt&&re.mapping,envMapCubeUVHeight:ce,aoMap:De,lightMap:ke,bumpMap:Fe,normalMap:Mt,displacementMap:M&&tt,emissiveMap:P,normalMapObjectSpace:Mt&&S.normalMapType===xS,normalMapTangentSpace:Mt&&S.normalMapType===rp,metalnessMap:T,roughnessMap:K,anisotropy:_e,anisotropyMap:we,clearcoat:he,clearcoatMap:Be,clearcoatNormalMap:Qe,clearcoatRoughnessMap:pe,iridescence:ve,iridescenceMap:St,iridescenceThicknessMap:st,sheen:Ie,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:be,specularColorMap:nt,specularIntensityMap:O,transmission:ye,transmissionMap:Me,thicknessMap:Te,gradientMap:He,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:D,alphaTest:xe,alphaHash:ge,combine:S.combine,mapUv:je&&m(S.map.channel),aoMapUv:De&&m(S.aoMap.channel),lightMapUv:ke&&m(S.lightMap.channel),bumpMapUv:Fe&&m(S.bumpMap.channel),normalMapUv:Mt&&m(S.normalMap.channel),displacementMapUv:tt&&m(S.displacementMap.channel),emissiveMapUv:P&&m(S.emissiveMap.channel),metalnessMapUv:T&&m(S.metalnessMap.channel),roughnessMapUv:K&&m(S.roughnessMap.channel),anisotropyMapUv:we&&m(S.anisotropyMap.channel),clearcoatMapUv:Be&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(S.sheenRoughnessMap.channel),specularMapUv:be&&m(S.specularMap.channel),specularColorMapUv:nt&&m(S.specularColorMap.channel),specularIntensityMapUv:O&&m(S.specularIntensityMap.channel),transmissionMapUv:Me&&m(S.transmissionMap.channel),thicknessMapUv:Te&&m(S.thicknessMap.channel),alphaMapUv:D&&m(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Mt||_e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(je||D),fog:!!ee,useFog:S.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ze,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&Lt.getTransfer(S.map.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ue&&S.extensions.derivatives===!0,extensionFragDepth:Ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ue&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=d.has(1),yt.vertexUv2s=d.has(2),yt.vertexUv3s=d.has(3),d.clear(),yt}function U(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)L.push($),L.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(R(L,S),I(L,S),L.push(s.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function R(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function I(S,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),S.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.alphaToCoverage&&c.enable(20),S.push(c.mask)}function V(S){const L=w[S.type];let $;if(L){const ie=hi[L];$=aE.clone(ie.uniforms)}else $=S.uniforms;return $}function F(S,L){let $;for(let ie=0,G=p.length;ie<G;ie++){const ee=p[ie];if(ee.cacheKey===L){$=ee,++$.usedTimes;break}}return $===void 0&&($=new Sb(s,L,S,o),p.push($)),$}function A(S){if(--S.usedTimes===0){const L=p.indexOf(S);p[L]=p[p.length-1],p.pop(),S.destroy()}}function z(S){h.remove(S)}function X(){h.dispose()}return{getParameters:g,getProgramCacheKey:U,getUniforms:V,acquireProgram:F,releaseProgram:A,releaseShaderCache:z,programs:p,dispose:X}}function bb(){let s=new WeakMap;function e(o){let u=s.get(o);return u===void 0&&(u={},s.set(o,u)),u}function t(o){s.delete(o)}function i(o,u,c){s.get(o)[u]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function wb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Id(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(_,v,M,y,w,m){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:M,groupOrder:y,renderOrder:_.renderOrder,z:w,group:m},s[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=M,g.groupOrder=y,g.renderOrder=_.renderOrder,g.z=w,g.group=m),e++,g}function c(_,v,M,y,w,m){const g=u(_,v,M,y,w,m);M.transmission>0?i.push(g):M.transparent===!0?a.push(g):t.push(g)}function h(_,v,M,y,w,m){const g=u(_,v,M,y,w,m);M.transmission>0?i.unshift(g):M.transparent===!0?a.unshift(g):t.unshift(g)}function d(_,v){t.length>1&&t.sort(_||wb),i.length>1&&i.sort(v||Dd),a.length>1&&a.sort(v||Dd)}function p(){for(let _=e,v=s.length;_<v;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:c,unshift:h,finish:p,sort:d}}function Rb(){let s=new WeakMap;function e(i,a){const o=s.get(i);let u;return o===void 0?(u=new Id,s.set(i,[u])):a>=o.length?(u=new Id,o.push(u)):u=o[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Cb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new At};break;case"SpotLight":t={position:new H,direction:new H,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function Lb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Pb=0;function Db(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ib(s,e){const t=new Cb,i=Lb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new H);const o=new H,u=new Yt,c=new Yt;function h(p,_){let v=0,M=0,y=0;for(let $=0;$<9;$++)a.probe[$].set(0,0,0);let w=0,m=0,g=0,U=0,R=0,I=0,V=0,F=0,A=0,z=0,X=0;p.sort(Db);const S=_===!0?Math.PI:1;for(let $=0,ie=p.length;$<ie;$++){const G=p[$],ee=G.color,Z=G.intensity,ae=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=ee.r*Z*S,M+=ee.g*Z*S,y+=ee.b*Z*S;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)a.probe[ce].addScaledVector(G.sh.coefficients[ce],Z);X++}else if(G.isDirectionalLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*S),G.castShadow){const ue=G.shadow,me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,a.directionalShadow[w]=me,a.directionalShadowMap[w]=re,a.directionalShadowMatrix[w]=G.shadow.matrix,I++}a.directional[w]=ce,w++}else if(G.isSpotLight){const ce=t.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(ee).multiplyScalar(Z*S),ce.distance=ae,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,a.spot[g]=ce;const ue=G.shadow;if(G.map&&(a.spotLightMap[A]=G.map,A++,ue.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[g]=ue.matrix,G.castShadow){const me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,a.spotShadow[g]=me,a.spotShadowMap[g]=re,F++}g++}else if(G.isRectAreaLight){const ce=t.get(G);ce.color.copy(ee).multiplyScalar(Z),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),a.rectArea[U]=ce,U++}else if(G.isPointLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*S),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const ue=G.shadow,me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,me.shadowCameraNear=ue.camera.near,me.shadowCameraFar=ue.camera.far,a.pointShadow[m]=me,a.pointShadowMap[m]=re,a.pointShadowMatrix[m]=G.shadow.matrix,V++}a.point[m]=ce,m++}else if(G.isHemisphereLight){const ce=t.get(G);ce.skyColor.copy(G.color).multiplyScalar(Z*S),ce.groundColor.copy(G.groundColor).multiplyScalar(Z*S),a.hemi[R]=ce,R++}}U>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=M,a.ambient[2]=y;const L=a.hash;(L.directionalLength!==w||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==U||L.hemiLength!==R||L.numDirectionalShadows!==I||L.numPointShadows!==V||L.numSpotShadows!==F||L.numSpotMaps!==A||L.numLightProbes!==X)&&(a.directional.length=w,a.spot.length=g,a.rectArea.length=U,a.point.length=m,a.hemi.length=R,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=V,a.pointShadowMap.length=V,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=V,a.spotLightMatrix.length=F+A-z,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=X,L.directionalLength=w,L.pointLength=m,L.spotLength=g,L.rectAreaLength=U,L.hemiLength=R,L.numDirectionalShadows=I,L.numPointShadows=V,L.numSpotShadows=F,L.numSpotMaps=A,L.numLightProbes=X,a.version=Pb++)}function d(p,_){let v=0,M=0,y=0,w=0,m=0;const g=_.matrixWorldInverse;for(let U=0,R=p.length;U<R;U++){const I=p[U];if(I.isDirectionalLight){const V=a.directional[v];V.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(g),v++}else if(I.isSpotLight){const V=a.spot[y];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),V.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(g),y++}else if(I.isRectAreaLight){const V=a.rectArea[w];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),c.identity(),u.copy(I.matrixWorld),u.premultiply(g),c.extractRotation(u),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),V.halfWidth.applyMatrix4(c),V.halfHeight.applyMatrix4(c),w++}else if(I.isPointLight){const V=a.point[M];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),M++}else if(I.isHemisphereLight){const V=a.hemi[m];V.direction.setFromMatrixPosition(I.matrixWorld),V.direction.transformDirection(g),m++}}}return{setup:h,setupView:d,state:a}}function Ud(s,e){const t=new Ib(s,e),i=[],a=[];function o(){i.length=0,a.length=0}function u(_){i.push(_)}function c(_){a.push(_)}function h(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:o,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:h,setupLightsView:d,pushLight:u,pushShadow:c}}function Ub(s,e){let t=new WeakMap;function i(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new Ud(s,e),t.set(o,[h])):u>=c.length?(h=new Ud(s,e),c.push(h)):h=c[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}class Nb extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ob extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zb(s,e,t){let i=new Xc;const a=new et,o=new et,u=new Gt,c=new Nb({depthPacking:vS}),h=new Ob,d={},p=t.maxTextureSize,_={[ir]:En,[En]:ir,[di]:di},v=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Fb,fragmentShader:Bb}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const y=new jn;y.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pn(y,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let g=this.type;this.render=function(F,A,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const X=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),$=s.state;$.setBlending(er),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=g!==Pi&&this.type===Pi,G=g===Pi&&this.type!==Pi;for(let ee=0,Z=F.length;ee<Z;ee++){const ae=F[ee],re=ae.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const ce=re.getFrameExtents();if(a.multiply(ce),o.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/ce.x),a.x=o.x*ce.x,re.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/ce.y),a.y=o.y*ce.y,re.mapSize.y=o.y)),re.map===null||ie===!0||G===!0){const me=this.type!==Pi?{minFilter:Sn,magFilter:Sn}:{};re.map!==null&&re.map.dispose(),re.map=new Ar(a.x,a.y,me),re.map.texture.name=ae.name+".shadowMap",re.camera.updateProjectionMatrix()}s.setRenderTarget(re.map),s.clear();const ue=re.getViewportCount();for(let me=0;me<ue;me++){const Ee=re.getViewport(me);u.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),$.viewport(u),re.updateMatrices(ae,me),i=re.getFrustum(),I(A,z,re.camera,ae,this.type)}re.isPointLightShadow!==!0&&this.type===Pi&&U(re,z),re.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(X,S,L)};function U(F,A){const z=e.update(w);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ar(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(A,null,z,v,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(A,null,z,M,w,null)}function R(F,A,z,X){let S=null;const L=z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(L!==void 0)S=L;else if(S=z.isPointLight===!0?h:c,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=S.uuid,ie=A.uuid;let G=d[$];G===void 0&&(G={},d[$]=G);let ee=G[ie];ee===void 0&&(ee=S.clone(),G[ie]=ee,A.addEventListener("dispose",V)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,X===Pi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:_[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=s.properties.get(S);$.light=z}return S}function I(F,A,z,X,S){if(F.visible===!1)return;if(F.layers.test(A.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&S===Pi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,F.matrixWorld);const ie=e.update(F),G=F.material;if(Array.isArray(G)){const ee=ie.groups;for(let Z=0,ae=ee.length;Z<ae;Z++){const re=ee[Z],ce=G[re.materialIndex];if(ce&&ce.visible){const ue=R(F,ce,X,S);F.onBeforeShadow(s,F,A,z,ie,ue,re),s.renderBufferDirect(z,null,ie,ue,F,re),F.onAfterShadow(s,F,A,z,ie,ue,re)}}}else if(G.visible){const ee=R(F,G,X,S);F.onBeforeShadow(s,F,A,z,ie,ee,null),s.renderBufferDirect(z,null,ie,ee,F,null),F.onAfterShadow(s,F,A,z,ie,ee,null)}}const $=F.children;for(let ie=0,G=$.length;ie<G;ie++)I($[ie],A,z,X,S)}function V(F){F.target.removeEventListener("dispose",V);for(const z in d){const X=d[z],S=F.target.uuid;S in X&&(X[S].dispose(),delete X[S])}}}function Gb(s,e,t){const i=t.isWebGL2;function a(){let D=!1;const xe=new Gt;let ge=null;const Ue=new Gt(0,0,0,0);return{setMask:function(Ve){ge!==Ve&&!D&&(s.colorMask(Ve,Ve,Ve,Ve),ge=Ve)},setLocked:function(Ve){D=Ve},setClear:function(Ve,yt,dt,Rt,$t){$t===!0&&(Ve*=Rt,yt*=Rt,dt*=Rt),xe.set(Ve,yt,dt,Rt),Ue.equals(xe)===!1&&(s.clearColor(Ve,yt,dt,Rt),Ue.copy(xe))},reset:function(){D=!1,ge=null,Ue.set(-1,0,0,0)}}}function o(){let D=!1,xe=null,ge=null,Ue=null;return{setTest:function(Ve){Ve?Pe(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(Ve){xe!==Ve&&!D&&(s.depthMask(Ve),xe=Ve)},setFunc:function(Ve){if(ge!==Ve){switch(Ve){case KM:s.depthFunc(s.NEVER);break;case $M:s.depthFunc(s.ALWAYS);break;case ZM:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case jM:s.depthFunc(s.EQUAL);break;case JM:s.depthFunc(s.GEQUAL);break;case QM:s.depthFunc(s.GREATER);break;case eS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ve}},setLocked:function(Ve){D=Ve},setClear:function(Ve){Ue!==Ve&&(s.clearDepth(Ve),Ue=Ve)},reset:function(){D=!1,xe=null,ge=null,Ue=null}}}function u(){let D=!1,xe=null,ge=null,Ue=null,Ve=null,yt=null,dt=null,Rt=null,$t=null;return{setTest:function(Tt){D||(Tt?Pe(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Tt){xe!==Tt&&!D&&(s.stencilMask(Tt),xe=Tt)},setFunc:function(Tt,It,sn){(ge!==Tt||Ue!==It||Ve!==sn)&&(s.stencilFunc(Tt,It,sn),ge=Tt,Ue=It,Ve=sn)},setOp:function(Tt,It,sn){(yt!==Tt||dt!==It||Rt!==sn)&&(s.stencilOp(Tt,It,sn),yt=Tt,dt=It,Rt=sn)},setLocked:function(Tt){D=Tt},setClear:function(Tt){$t!==Tt&&(s.clearStencil(Tt),$t=Tt)},reset:function(){D=!1,xe=null,ge=null,Ue=null,Ve=null,yt=null,dt=null,Rt=null,$t=null}}}const c=new a,h=new o,d=new u,p=new WeakMap,_=new WeakMap;let v={},M={},y=new WeakMap,w=[],m=null,g=!1,U=null,R=null,I=null,V=null,F=null,A=null,z=null,X=new At(0,0,0),S=0,L=!1,$=null,ie=null,G=null,ee=null,Z=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ce=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),re=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),re=ce>=2);let me=null,Ee={};const Ze=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),de=new Gt().fromArray(Ze),Re=new Gt().fromArray(ne);function We(D,xe,ge,Ue){const Ve=new Uint8Array(4),yt=s.createTexture();s.bindTexture(D,yt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ge;dt++)i&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(xe,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(xe+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return yt}const Ge={};Ge[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),Ge[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ge[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Pe(s.DEPTH_TEST),h.setFunc(yo),tt(!1),P(dh),Pe(s.CULL_FACE),Fe(er);function Pe(D){v[D]!==!0&&(s.enable(D),v[D]=!0)}function vt(D){v[D]!==!1&&(s.disable(D),v[D]=!1)}function je(D,xe){return M[D]!==xe?(s.bindFramebuffer(D,xe),M[D]=xe,i&&(D===s.DRAW_FRAMEBUFFER&&(M[s.FRAMEBUFFER]=xe),D===s.FRAMEBUFFER&&(M[s.DRAW_FRAMEBUFFER]=xe)),!0):!1}function q(D,xe){let ge=w,Ue=!1;if(D)if(ge=y.get(xe),ge===void 0&&(ge=[],y.set(xe,ge)),D.isWebGLMultipleRenderTargets){const Ve=D.texture;if(ge.length!==Ve.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,dt=Ve.length;yt<dt;yt++)ge[yt]=s.COLOR_ATTACHMENT0+yt;ge.length=Ve.length,Ue=!0}}else ge[0]!==s.COLOR_ATTACHMENT0&&(ge[0]=s.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Vt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const De={[xr]:s.FUNC_ADD,[IM]:s.FUNC_SUBTRACT,[UM]:s.FUNC_REVERSE_SUBTRACT};if(i)De[_h]=s.MIN,De[vh]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(De[_h]=D.MIN_EXT,De[vh]=D.MAX_EXT)}const ke={[NM]:s.ZERO,[OM]:s.ONE,[FM]:s.SRC_COLOR,[Rc]:s.SRC_ALPHA,[WM]:s.SRC_ALPHA_SATURATE,[HM]:s.DST_COLOR,[zM]:s.DST_ALPHA,[BM]:s.ONE_MINUS_SRC_COLOR,[Cc]:s.ONE_MINUS_SRC_ALPHA,[VM]:s.ONE_MINUS_DST_COLOR,[GM]:s.ONE_MINUS_DST_ALPHA,[kM]:s.CONSTANT_COLOR,[XM]:s.ONE_MINUS_CONSTANT_COLOR,[qM]:s.CONSTANT_ALPHA,[YM]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(D,xe,ge,Ue,Ve,yt,dt,Rt,$t,Tt){if(D===er){g===!0&&(vt(s.BLEND),g=!1);return}if(g===!1&&(Pe(s.BLEND),g=!0),D!==DM){if(D!==U||Tt!==L){if((R!==xr||F!==xr)&&(s.blendEquation(s.FUNC_ADD),R=xr,F=xr),Tt)switch(D){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFunc(s.ONE,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ph:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}I=null,V=null,A=null,z=null,X.set(0,0,0),S=0,U=D,L=Tt}return}Ve=Ve||xe,yt=yt||ge,dt=dt||Ue,(xe!==R||Ve!==F)&&(s.blendEquationSeparate(De[xe],De[Ve]),R=xe,F=Ve),(ge!==I||Ue!==V||yt!==A||dt!==z)&&(s.blendFuncSeparate(ke[ge],ke[Ue],ke[yt],ke[dt]),I=ge,V=Ue,A=yt,z=dt),(Rt.equals(X)===!1||$t!==S)&&(s.blendColor(Rt.r,Rt.g,Rt.b,$t),X.copy(Rt),S=$t),U=D,L=!1}function Mt(D,xe){D.side===di?vt(s.CULL_FACE):Pe(s.CULL_FACE);let ge=D.side===En;xe&&(ge=!ge),tt(ge),D.blending===gs&&D.transparent===!1?Fe(er):Fe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),c.setMask(D.colorWrite);const Ue=D.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(D.stencilWriteMask),d.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),d.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){$!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),$=D)}function P(D){D!==CM?(Pe(s.CULL_FACE),D!==ie&&(D===dh?s.cullFace(s.BACK):D===LM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),ie=D}function T(D){D!==G&&(re&&s.lineWidth(D),G=D)}function K(D,xe,ge){D?(Pe(s.POLYGON_OFFSET_FILL),(ee!==xe||Z!==ge)&&(s.polygonOffset(xe,ge),ee=xe,Z=ge)):vt(s.POLYGON_OFFSET_FILL)}function _e(D){D?Pe(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function he(D){D===void 0&&(D=s.TEXTURE0+ae-1),me!==D&&(s.activeTexture(D),me=D)}function ve(D,xe,ge){ge===void 0&&(me===null?ge=s.TEXTURE0+ae-1:ge=me);let Ue=Ee[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},Ee[ge]=Ue),(Ue.type!==D||Ue.texture!==xe)&&(me!==ge&&(s.activeTexture(ge),me=ge),s.bindTexture(D,xe||Ge[D]),Ue.type=D,Ue.texture=xe)}function Ie(){const D=Ee[me];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ye(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(D){de.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function O(D){Re.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Me(D,xe){let ge=_.get(xe);ge===void 0&&(ge=new WeakMap,_.set(xe,ge));let Ue=ge.get(D);Ue===void 0&&(Ue=s.getUniformBlockIndex(xe,D.name),ge.set(D,Ue))}function Te(D,xe){const Ue=_.get(xe).get(D);p.get(xe)!==Ue&&(s.uniformBlockBinding(xe,Ue,D.__bindingPointIndex),p.set(xe,Ue))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},me=null,Ee={},M={},y=new WeakMap,w=[],m=null,g=!1,U=null,R=null,I=null,V=null,F=null,A=null,z=null,X=new At(0,0,0),S=0,L=!1,$=null,ie=null,G=null,ee=null,Z=null,de.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Pe,disable:vt,bindFramebuffer:je,drawBuffers:q,useProgram:Vt,setBlending:Fe,setMaterial:Mt,setFlipSided:tt,setCullFace:P,setLineWidth:T,setPolygonOffset:K,setScissorTest:_e,activeTexture:he,bindTexture:ve,unbindTexture:Ie,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:ze,texImage3D:be,updateUBOMapping:Me,uniformBlockBinding:Te,texStorage2D:st,texStorage3D:Je,texSubImage2D:Be,texSubImage3D:Qe,compressedTexSubImage2D:pe,compressedTexSubImage3D:St,scissor:nt,viewport:O,reset:He}}function Hb(s,e,t,i,a,o,u){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,T){return M?new OffscreenCanvas(P,T):sa("canvas")}function w(P,T,K,_e){let he=1;if((P.width>_e||P.height>_e)&&(he=_e/Math.max(P.width,P.height)),he<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ve=T?Ro:Math.floor,Ie=ve(he*P.width),ye=ve(he*P.height);_===void 0&&(_=y(Ie,ye));const we=K?y(Ie,ye):_;return we.width=Ie,we.height=ye,we.getContext("2d").drawImage(P,0,0,Ie,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ie+"x"+ye+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Nc(P.width)&&Nc(P.height)}function g(P){return c?!1:P.wrapS!==ai||P.wrapT!==ai||P.minFilter!==Sn&&P.minFilter!==Ln}function U(P,T){return P.generateMipmaps&&T&&P.minFilter!==Sn&&P.minFilter!==Ln}function R(P){s.generateMipmap(P)}function I(P,T,K,_e,he=!1){if(c===!1)return T;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve=T;if(T===s.RED&&(K===s.FLOAT&&(ve=s.R32F),K===s.HALF_FLOAT&&(ve=s.R16F),K===s.UNSIGNED_BYTE&&(ve=s.R8)),T===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.R8UI),K===s.UNSIGNED_SHORT&&(ve=s.R16UI),K===s.UNSIGNED_INT&&(ve=s.R32UI),K===s.BYTE&&(ve=s.R8I),K===s.SHORT&&(ve=s.R16I),K===s.INT&&(ve=s.R32I)),T===s.RG&&(K===s.FLOAT&&(ve=s.RG32F),K===s.HALF_FLOAT&&(ve=s.RG16F),K===s.UNSIGNED_BYTE&&(ve=s.RG8)),T===s.RGBA){const Ie=he?To:Lt.getTransfer(_e);K===s.FLOAT&&(ve=s.RGBA32F),K===s.HALF_FLOAT&&(ve=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ve=Ie===Ft?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function V(P,T,K){return U(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){return P===Sn||P===xh||P===Ys?s.NEAREST:s.LINEAR}function A(P){const T=P.target;T.removeEventListener("dispose",A),X(T),T.isVideoTexture&&p.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),L(T)}function X(P){const T=i.get(P);if(T.__webglInit===void 0)return;const K=P.source,_e=v.get(K);if(_e){const he=_e[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(P),Object.keys(_e).length===0&&v.delete(K)}i.remove(P)}function S(P){const T=i.get(P);s.deleteTexture(T.__webglTexture);const K=P.source,_e=v.get(K);delete _e[T.__cacheKey],u.memory.textures--}function L(P){const T=P.texture,K=i.get(P),_e=i.get(T);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(K.__webglFramebuffer[he]))for(let ve=0;ve<K.__webglFramebuffer[he].length;ve++)s.deleteFramebuffer(K.__webglFramebuffer[he][ve]);else s.deleteFramebuffer(K.__webglFramebuffer[he]);K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[he])}else{if(Array.isArray(K.__webglFramebuffer))for(let he=0;he<K.__webglFramebuffer.length;he++)s.deleteFramebuffer(K.__webglFramebuffer[he]);else s.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let he=0;he<K.__webglColorRenderbuffer.length;he++)K.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[he]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,ve=T.length;he<ve;he++){const Ie=i.get(T[he]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),u.memory.textures--),i.remove(T[he])}i.remove(T),i.remove(P)}let $=0;function ie(){$=0}function G(){const P=$;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),$+=1,P}function ee(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Z(P,T){const K=i.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const _e=P.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,P,T);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+T)}function ae(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+T)}function re(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){de(K,P,T);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+T)}function ce(P,T){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Re(K,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+T)}const ue={[Dc]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Ic]:s.MIRRORED_REPEAT},me={[Sn]:s.NEAREST,[xh]:s.NEAREST_MIPMAP_NEAREST,[Ys]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Yl]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},Ee={[MS]:s.NEVER,[bS]:s.ALWAYS,[SS]:s.LESS,[sp]:s.LEQUAL,[ES]:s.EQUAL,[AS]:s.GEQUAL,[yS]:s.GREATER,[TS]:s.NOTEQUAL};function Ze(P,T,K){if(T.type===Di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===Yl||T.magFilter===Ys||T.magFilter===Sr||T.minFilter===Ln||T.minFilter===Yl||T.minFilter===Ys||T.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(s.texParameteri(P,s.TEXTURE_WRAP_S,ue[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,me[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,me[T.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==ai||T.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,F(T.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,F(T.minFilter)),T.minFilter!==Sn&&T.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Sn||T.minFilter!==Ys&&T.minFilter!==Sr||T.type===Di&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===ia&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(s.texParameterf(P,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ne(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const _e=T.source;let he=v.get(_e);he===void 0&&(he={},v.set(_e,he));const ve=ee(T);if(ve!==P.__cacheKey){he[ve]===void 0&&(he[ve]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),he[ve].usedTimes++;const Ie=he[P.__cacheKey];Ie!==void 0&&(he[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(T)),P.__cacheKey=ve,P.__webglTexture=he[ve].texture}return K}function de(P,T,K){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const he=ne(P,T),ve=T.source;t.bindTexture(_e,P.__webglTexture,s.TEXTURE0+K);const Ie=i.get(ve);if(ve.version!==Ie.__version||he===!0){t.activeTexture(s.TEXTURE0+K);const ye=Lt.getPrimaries(Lt.workingColorSpace),we=T.colorSpace===Zn?null:Lt.getPrimaries(T.colorSpace),Be=T.colorSpace===Zn||ye===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Qe=g(T)&&m(T.image)===!1;let pe=w(T.image,Qe,!1,a.maxTextureSize);pe=tt(T,pe);const St=m(pe)||c,st=o.convert(T.format,T.colorSpace);let Je=o.convert(T.type),ze=I(T.internalFormat,st,Je,T.colorSpace,T.isVideoTexture);Ze(_e,T,St);let be;const nt=T.mipmaps,O=c&&T.isVideoTexture!==!0&&ze!==np,Me=Ie.__version===void 0||he===!0,Te=ve.dataReady,He=V(T,pe,St);if(T.isDepthTexture)ze=s.DEPTH_COMPONENT,c?T.type===Di?ze=s.DEPTH_COMPONENT32F:T.type===Ji?ze=s.DEPTH_COMPONENT24:T.type===Er?ze=s.DEPTH24_STENCIL8:ze=s.DEPTH_COMPONENT16:T.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===yr&&ze===s.DEPTH_COMPONENT&&T.type!==Hc&&T.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ji,Je=o.convert(T.type)),T.format===Ss&&ze===s.DEPTH_COMPONENT&&(ze=s.DEPTH_STENCIL,T.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Er,Je=o.convert(T.type))),Me&&(O?t.texStorage2D(s.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,ze,pe.width,pe.height,0,st,Je,null));else if(T.isDataTexture)if(nt.length>0&&St){O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,Je,be.data):t.texImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,st,Je,be.data);T.generateMipmaps=!1}else O?(Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height),Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,st,Je,pe.data)):t.texImage2D(s.TEXTURE_2D,0,ze,pe.width,pe.height,0,st,Je,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,nt[0].width,nt[0].height,pe.depth);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],T.format!==oi?st!==null?O?Te&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,pe.depth,st,be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,ze,be.width,be.height,pe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,pe.depth,st,Je,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,D,ze,be.width,be.height,pe.depth,0,st,Je,be.data)}else{O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],T.format!==oi?st!==null?O?Te&&t.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,be.data):t.compressedTexImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,Je,be.data):t.texImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,st,Je,be.data)}else if(T.isDataArrayTexture)O?(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,pe.width,pe.height,pe.depth),Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,st,Je,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,st,Je,pe.data);else if(T.isData3DTexture)O?(Me&&t.texStorage3D(s.TEXTURE_3D,He,ze,pe.width,pe.height,pe.depth),Te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,st,Je,pe.data)):t.texImage3D(s.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,st,Je,pe.data);else if(T.isFramebufferTexture){if(Me)if(O)t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height);else{let D=pe.width,xe=pe.height;for(let ge=0;ge<He;ge++)t.texImage2D(s.TEXTURE_2D,ge,ze,D,xe,0,st,Je,null),D>>=1,xe>>=1}}else if(nt.length>0&&St){O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,st,Je,be):t.texImage2D(s.TEXTURE_2D,D,ze,st,Je,be);T.generateMipmaps=!1}else O?(Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height),Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,st,Je,pe)):t.texImage2D(s.TEXTURE_2D,0,ze,st,Je,pe);U(T,St)&&R(_e),Ie.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Re(P,T,K){if(T.image.length!==6)return;const _e=ne(P,T),he=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+K);const ve=i.get(he);if(he.version!==ve.__version||_e===!0){t.activeTexture(s.TEXTURE0+K);const Ie=Lt.getPrimaries(Lt.workingColorSpace),ye=T.colorSpace===Zn?null:Lt.getPrimaries(T.colorSpace),we=T.colorSpace===Zn||Ie===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Be=T.isCompressedTexture||T.image[0].isCompressedTexture,Qe=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let D=0;D<6;D++)!Be&&!Qe?pe[D]=w(T.image[D],!1,!0,a.maxCubemapSize):pe[D]=Qe?T.image[D].image:T.image[D],pe[D]=tt(T,pe[D]);const St=pe[0],st=m(St)||c,Je=o.convert(T.format,T.colorSpace),ze=o.convert(T.type),be=I(T.internalFormat,Je,ze,T.colorSpace),nt=c&&T.isVideoTexture!==!0,O=ve.__version===void 0||_e===!0,Me=he.dataReady;let Te=V(T,St,st);Ze(s.TEXTURE_CUBE_MAP,T,st);let He;if(Be){nt&&O&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,be,St.width,St.height);for(let D=0;D<6;D++){He=pe[D].mipmaps;for(let xe=0;xe<He.length;xe++){const ge=He[xe];T.format!==oi?Je!==null?nt?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,0,0,ge.width,ge.height,Je,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,0,0,ge.width,ge.height,Je,ze,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,be,ge.width,ge.height,0,Je,ze,ge.data)}}}else{He=T.mipmaps,nt&&O&&(He.length>0&&Te++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,be,pe[0].width,pe[0].height));for(let D=0;D<6;D++)if(Qe){nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,pe[D].width,pe[D].height,Je,ze,pe[D].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,pe[D].width,pe[D].height,0,Je,ze,pe[D].data);for(let xe=0;xe<He.length;xe++){const Ue=He[xe].image[D].image;nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,0,0,Ue.width,Ue.height,Je,ze,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,be,Ue.width,Ue.height,0,Je,ze,Ue.data)}}else{nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Je,ze,pe[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,Je,ze,pe[D]);for(let xe=0;xe<He.length;xe++){const ge=He[xe];nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,0,0,Je,ze,ge.image[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,be,Je,ze,ge.image[D])}}}U(T,st)&&R(s.TEXTURE_CUBE_MAP),ve.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function We(P,T,K,_e,he,ve){const Ie=o.convert(K.format,K.colorSpace),ye=o.convert(K.type),we=I(K.internalFormat,Ie,ye,K.colorSpace);if(!i.get(T).__hasExternalTextures){const Qe=Math.max(1,T.width>>ve),pe=Math.max(1,T.height>>ve);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,ve,we,Qe,pe,T.depth,0,Ie,ye,null):t.texImage2D(he,ve,we,Qe,pe,0,Ie,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Fe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,he,i.get(K).__webglTexture,0,ke(T)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,he,i.get(K).__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(P,T,K){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let _e=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||Fe(T)){const he=T.depthTexture;he&&he.isDepthTexture&&(he.type===Di?_e=s.DEPTH_COMPONENT32F:he.type===Ji&&(_e=s.DEPTH_COMPONENT24));const ve=ke(T);Fe(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,_e,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,_e,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const _e=ke(T);K&&Fe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):Fe(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const _e=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let he=0;he<_e.length;he++){const ve=_e[he],Ie=o.convert(ve.format,ve.colorSpace),ye=o.convert(ve.type),we=I(ve.internalFormat,Ie,ye,ve.colorSpace),Be=ke(T);K&&Fe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,we,T.width,T.height):Fe(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,we,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const _e=i.get(T.depthTexture).__webglTexture,he=ke(T);if(T.depthTexture.format===yr)Fe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(T.depthTexture.format===Ss)Fe(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function vt(P){const T=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ge(T.__webglDepthbuffer[_e],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Ge(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(P,T,K){const _e=i.get(P);T!==void 0&&We(_e.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&vt(P)}function q(P){const T=P.texture,K=i.get(P),_e=i.get(T);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,u.memory.textures++);const he=P.isWebGLCubeRenderTarget===!0,ve=P.isWebGLMultipleRenderTargets===!0,Ie=m(P)||c;if(he){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let we=0;we<T.mipmaps.length;we++)K.__webglFramebuffer[ye][we]=s.createFramebuffer()}else K.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)K.__webglFramebuffer[ye]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(ve)if(a.drawBuffers){const ye=P.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=i.get(ye[we]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&P.samples>0&&Fe(P)===!1){const ye=ve?T:[T];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Be=ye[we];K.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const Qe=o.convert(Be.format,Be.colorSpace),pe=o.convert(Be.type),St=I(Be.internalFormat,Qe,pe,Be.colorSpace,P.isXRRenderTarget===!0),st=ke(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,St,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,K.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,T,Ie);for(let ye=0;ye<6;ye++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)We(K.__webglFramebuffer[ye][we],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else We(K.__webglFramebuffer[ye],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);U(T,Ie)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const ye=P.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=ye[we],pe=i.get(Qe);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),Ze(s.TEXTURE_2D,Qe,Ie),We(K.__webglFramebuffer,P,Qe,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),U(Qe,Ie)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(c?ye=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,_e.__webglTexture),Ze(ye,T,Ie),c&&T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)We(K.__webglFramebuffer[we],P,T,s.COLOR_ATTACHMENT0,ye,we);else We(K.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,ye,0);U(T,Ie)&&R(ye),t.unbindTexture()}P.depthBuffer&&vt(P)}function Vt(P){const T=m(P)||c,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let _e=0,he=K.length;_e<he;_e++){const ve=K[_e];if(U(ve,T)){const Ie=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=i.get(ve).__webglTexture;t.bindTexture(Ie,ye),R(Ie),t.unbindTexture()}}}function De(P){if(c&&P.samples>0&&Fe(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,_e=P.height;let he=s.COLOR_BUFFER_BIT;const ve=[],Ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=i.get(P),we=P.isWebGLMultipleRenderTargets===!0;if(we)for(let Be=0;Be<T.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Be=0;Be<T.length;Be++){ve.push(s.COLOR_ATTACHMENT0+Be),P.depthBuffer&&ve.push(Ie);const Qe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Qe===!1&&(P.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),we&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]),Qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ie]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ie])),we){const pe=i.get(T[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,K,_e,0,0,K,_e,he,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Be=0;Be<T.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]);const Qe=i.get(T[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ke(P){return Math.min(a.maxSamples,P.samples)}function Fe(P){const T=i.get(P);return c&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(P){const T=u.render.frame;p.get(P)!==T&&(p.set(P,T),P.update())}function tt(P,T){const K=P.colorSpace,_e=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Uc||K!==Ui&&K!==Zn&&(Lt.getTransfer(K)===Ft?c===!1?e.has("EXT_sRGB")===!0&&_e===oi?(P.format=Uc,P.minFilter=Ln,P.generateMipmaps=!1):T=op.sRGBToLinear(T):(_e!==oi||he!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}this.allocateTextureUnit=G,this.resetTextureUnits=ie,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=je,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Fe}function Vb(s,e,t){const i=t.isWebGL2;function a(o,u=Zn){let c;const h=Lt.getTransfer(u);if(o===nr)return s.UNSIGNED_BYTE;if(o===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Jd)return s.UNSIGNED_SHORT_5_5_5_1;if(o===cS)return s.BYTE;if(o===uS)return s.SHORT;if(o===Hc)return s.UNSIGNED_SHORT;if(o===Zd)return s.INT;if(o===Ji)return s.UNSIGNED_INT;if(o===Di)return s.FLOAT;if(o===ia)return i?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===fS)return s.ALPHA;if(o===oi)return s.RGBA;if(o===hS)return s.LUMINANCE;if(o===dS)return s.LUMINANCE_ALPHA;if(o===yr)return s.DEPTH_COMPONENT;if(o===Ss)return s.DEPTH_STENCIL;if(o===Uc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===pS)return s.RED;if(o===Qd)return s.RED_INTEGER;if(o===mS)return s.RG;if(o===ep)return s.RG_INTEGER;if(o===tp)return s.RGBA_INTEGER;if(o===Kl||o===$l||o===Zl||o===jl)if(h===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Kl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===$l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===jl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Kl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===$l)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===jl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Mh||o===Sh||o===Eh||o===yh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===yh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===np)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Th||o===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===Th)return h===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===Ah)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===bh||o===wh||o===Rh||o===Ch||o===Lh||o===Ph||o===Dh||o===Ih||o===Uh||o===Nh||o===Oh||o===Fh||o===Bh||o===zh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===bh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===wh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Rh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ch)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Lh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ph)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Dh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ih)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Uh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Nh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Oh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Fh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Bh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===zh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Jl||o===Gh||o===Hh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===Jl)return h===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Gh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Hh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===gS||o===Vh||o===Wh||o===kh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===Jl)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===kh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Er?i?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:a}}class Wb extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class Sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,i),g=this._getHandJoint(d,w);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),M=.02,y=.005;d.inputState.pinching&&v>M+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=M-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new yn,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,a=new rr({extensions:{fragDepth:!0},vertexShader:Xb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new Uo(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Kb extends wr{constructor(e,t){super();const i=this;let a=null,o=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,v=null,M=null,y=null;const w=new Yb,m=t.getContextAttributes();let g=null,U=null;const R=[],I=[],V=new et;let F=null;const A=new rn;A.layers.enable(1),A.viewport=new Gt;const z=new rn;z.layers.enable(2),z.viewport=new Gt;const X=[A,z],S=new Wb;S.layers.enable(1),S.layers.enable(2);let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=R[ne];return de===void 0&&(de=new Sc,R[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=R[ne];return de===void 0&&(de=new Sc,R[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=R[ne];return de===void 0&&(de=new Sc,R[ne]=de),de.getHandSpace()};function ie(ne){const de=I.indexOf(ne.inputSource);if(de===-1)return;const Re=R[de];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,d||u),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",ee);for(let ne=0;ne<R.length;ne++){const de=I[ne];de!==null&&(I[ne]=null,R[ne].disconnect(de))}L=null,$=null,w.reset(),e.setRenderTarget(g),M=null,v=null,_=null,a=null,U=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",G),a.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:a.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ar(M.framebufferWidth,M.framebufferHeight,{format:oi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,Re=null,We=null;m.depth&&(We=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Ss:yr,Re=m.stencil?Er:Ji);const Ge={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ge),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Ar(v.textureWidth,v.textureHeight,{format:oi,type:nr,depthTexture:new vp(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Pe=e.properties.get(U);Pe.__ignoreDepthValues=v.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await a.requestReferenceSpace(c),Ze.setContext(a),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ee(ne){for(let de=0;de<ne.removed.length;de++){const Re=ne.removed[de],We=I.indexOf(Re);We>=0&&(I[We]=null,R[We].disconnect(Re))}for(let de=0;de<ne.added.length;de++){const Re=ne.added[de];let We=I.indexOf(Re);if(We===-1){for(let Pe=0;Pe<R.length;Pe++)if(Pe>=I.length){I.push(Re),We=Pe;break}else if(I[Pe]===null){I[Pe]=Re,We=Pe;break}if(We===-1)break}const Ge=R[We];Ge&&Ge.connect(Re)}}const Z=new H,ae=new H;function re(ne,de,Re){Z.setFromMatrixPosition(de.matrixWorld),ae.setFromMatrixPosition(Re.matrixWorld);const We=Z.distanceTo(ae),Ge=de.projectionMatrix.elements,Pe=Re.projectionMatrix.elements,vt=Ge[14]/(Ge[10]-1),je=Ge[14]/(Ge[10]+1),q=(Ge[9]+1)/Ge[5],Vt=(Ge[9]-1)/Ge[5],De=(Ge[8]-1)/Ge[0],ke=(Pe[8]+1)/Pe[0],Fe=vt*De,Mt=vt*ke,tt=We/(-De+ke),P=tt*-De;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(P),ne.translateZ(tt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const T=vt+tt,K=je+tt,_e=Fe-P,he=Mt+(We-P),ve=q*je/K*T,Ie=Vt*je/K*T;ne.projectionMatrix.makePerspective(_e,he,ve,Ie,T,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ce(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;w.texture!==null&&(ne.near=w.depthNear,ne.far=w.depthFar),S.near=z.near=A.near=ne.near,S.far=z.far=A.far=ne.far,(L!==S.near||$!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,$=S.far,A.near=L,A.far=$,z.near=L,z.far=$,A.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const de=ne.parent,Re=S.cameras;ce(S,de);for(let We=0;We<Re.length;We++)ce(Re[We],de);Re.length===2?re(S,A,z):S.projectionMatrix.copy(A.projectionMatrix),ue(ne,S,de)};function ue(ne,de,Re){Re===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ra*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(ne){h=ne,v!==null&&(v.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return w.texture!==null};let me=null;function Ee(ne,de){if(p=de.getViewerPose(d||u),y=de,p!==null){const Re=p.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let We=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,We=!0);for(let Pe=0;Pe<Re.length;Pe++){const vt=Re[Pe];let je=null;if(M!==null)je=M.getViewport(vt);else{const Vt=_.getViewSubImage(v,vt);je=Vt.viewport,Pe===0&&(e.setRenderTargetTextures(U,Vt.colorTexture,v.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(U))}let q=X[Pe];q===void 0&&(q=new rn,q.layers.enable(Pe),q.viewport=new Gt,X[Pe]=q),q.matrix.fromArray(vt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(vt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),We===!0&&S.cameras.push(q)}const Ge=a.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Pe=_.getDepthInformation(Re[0]);Pe&&Pe.isValid&&Pe.texture&&w.init(e,Pe,a.renderState)}}for(let Re=0;Re<R.length;Re++){const We=I[Re],Ge=R[Re];We!==null&&Ge!==void 0&&Ge.update(We,de,d||u)}w.render(e,S),me&&me(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),y=null}const Ze=new _p;Ze.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){me=ne},this.dispose=function(){}}}function $b(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,pp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function a(m,g,U,R,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),_(m,g)):g.isMeshPhongMaterial?(o(m,g),p(m,g)):g.isMeshStandardMaterial?(o(m,g),v(m,g),g.isMeshPhysicalMaterial&&M(m,g,I)):g.isMeshMatcapMaterial?(o(m,g),y(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),w(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(u(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?h(m,g,U,R):g.isSpriteMaterial?d(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===En&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===En&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const U=e.get(g).envMap;if(U&&(m.envMap.value=U,m.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*R,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function h(m,g,U,R){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*U,m.scale.value=R*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function p(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function _(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function M(m,g,U){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=U.texture,m.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function w(m,g){const U=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(U.matrixWorld),m.nearDistance.value=U.shadow.camera.near,m.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Zb(s,e,t,i){let a={},o={},u=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(U,R){const I=R.program;i.uniformBlockBinding(U,I)}function d(U,R){let I=a[U.id];I===void 0&&(y(U),I=p(U),a[U.id]=I,U.addEventListener("dispose",m));const V=R.program;i.updateUBOMapping(U,V);const F=e.render.frame;o[U.id]!==F&&(v(U),o[U.id]=F)}function p(U){const R=_();U.__bindingPointIndex=R;const I=s.createBuffer(),V=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,V,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,I),I}function _(){for(let U=0;U<c;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=a[U.id],I=U.uniforms,V=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let F=0,A=I.length;F<A;F++){const z=Array.isArray(I[F])?I[F]:[I[F]];for(let X=0,S=z.length;X<S;X++){const L=z[X];if(M(L,F,X,V)===!0){const $=L.__offset,ie=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let ee=0;ee<ie.length;ee++){const Z=ie[ee],ae=w(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,$+G,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,G),G+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,R,I,V){const F=U.value,A=R+"_"+I;if(V[A]===void 0)return typeof F=="number"||typeof F=="boolean"?V[A]=F:V[A]=F.clone(),!0;{const z=V[A];if(typeof F=="number"||typeof F=="boolean"){if(z!==F)return V[A]=F,!0}else if(z.equals(F)===!1)return z.copy(F),!0}return!1}function y(U){const R=U.uniforms;let I=0;const V=16;for(let A=0,z=R.length;A<z;A++){const X=Array.isArray(R[A])?R[A]:[R[A]];for(let S=0,L=X.length;S<L;S++){const $=X[S],ie=Array.isArray($.value)?$.value:[$.value];for(let G=0,ee=ie.length;G<ee;G++){const Z=ie[G],ae=w(Z),re=I%V;re!==0&&V-re<ae.boundary&&(I+=V-re),$.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=I,I+=ae.storage}}}const F=I%V;return F>0&&(I+=V-F),U.__size=I,U.__cache={},this}function w(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function m(U){const R=U.target;R.removeEventListener("dispose",m);const I=u.indexOf(R.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete o[R.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},o={}}return{bind:h,update:d,dispose:g}}class Tp{constructor(e={}){const{canvas:t=VS(),context:i=null,depth:a=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const M=new Uint32Array(4),y=new Int32Array(4);let w=null,m=null;const g=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const R=this;let I=!1,V=0,F=0,A=null,z=-1,X=null;const S=new Gt,L=new Gt;let $=null;const ie=new At(0);let G=0,ee=t.width,Z=t.height,ae=1,re=null,ce=null;const ue=new Gt(0,0,ee,Z),me=new Gt(0,0,ee,Z);let Ee=!1;const Ze=new Xc;let ne=!1,de=!1,Re=null;const We=new Yt,Ge=new et,Pe=new H,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return A===null?ae:1}let q=i;function Vt(C,Y){for(let J=0;J<C.length;J++){const te=C[J],j=t.getContext(te,Y);if(j!==null)return j}return null}try{const C={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zc}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",xe,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),q=Vt(Y,C),q===null)throw Vt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let De,ke,Fe,Mt,tt,P,T,K,_e,he,ve,Ie,ye,we,Be,Qe,pe,St,st,Je,ze,be,nt,O;function Me(){De=new iA(q),ke=new ZT(q,De,e),De.init(ke),be=new Vb(q,De,ke),Fe=new Gb(q,De,ke),Mt=new aA(q),tt=new bb,P=new Hb(q,De,Fe,tt,ke,be,Mt),T=new JT(R),K=new nA(R),_e=new dE(q,ke),nt=new KT(q,De,_e,ke),he=new rA(q,_e,Mt,nt),ve=new uA(q,he,_e,Mt),st=new cA(q,ke,P),Qe=new jT(tt),Ie=new Ab(R,T,K,De,ke,nt,Qe),ye=new $b(R,tt),we=new Rb,Be=new Ub(De,ke),St=new YT(R,T,K,Fe,ve,v,h),pe=new zb(R,ve,ke),O=new Zb(q,Mt,ke,Fe),Je=new $T(q,De,Mt,ke),ze=new sA(q,De,Mt,ke),Mt.programs=Ie.programs,R.capabilities=ke,R.extensions=De,R.properties=tt,R.renderLists=we,R.shadowMap=pe,R.state=Fe,R.info=Mt}Me();const Te=new Kb(R,q);this.xr=Te,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(ee,Z,!1))},this.getSize=function(C){return C.set(ee,Z)},this.setSize=function(C,Y,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,Z=Y,t.width=Math.floor(C*ae),t.height=Math.floor(Y*ae),J===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ee*ae,Z*ae).floor()},this.setDrawingBufferSize=function(C,Y,J){ee=C,Z=Y,ae=J,t.width=Math.floor(C*J),t.height=Math.floor(Y*J),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,Y,J,te){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Y,J,te),Fe.viewport(S.copy(ue).multiplyScalar(ae).floor())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,Y,J,te){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,Y,J,te),Fe.scissor(L.copy(me).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Fe.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(C=!0,Y=!0,J=!0){let te=0;if(C){let j=!1;if(A!==null){const Ce=A.texture.format;j=Ce===tp||Ce===ep||Ce===Qd}if(j){const Ce=A.texture.type,Ne=Ce===nr||Ce===Ji||Ce===Hc||Ce===Er||Ce===jd||Ce===Jd,qe=St.getClearColor(),Ye=St.getClearAlpha(),lt=qe.r,it=qe.g,at=qe.b;Ne?(M[0]=lt,M[1]=it,M[2]=at,M[3]=Ye,q.clearBufferuiv(q.COLOR,0,M)):(y[0]=lt,y[1]=it,y[2]=at,y[3]=Ye,q.clearBufferiv(q.COLOR,0,y))}else te|=q.COLOR_BUFFER_BIT}Y&&(te|=q.DEPTH_BUFFER_BIT),J&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),we.dispose(),Be.dispose(),tt.dispose(),T.dispose(),K.dispose(),ve.dispose(),nt.dispose(),O.dispose(),Ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",$t),Te.removeEventListener("sessionend",Tt),Re&&(Re.dispose(),Re=null),It.stop()};function He(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Mt.autoReset,Y=pe.enabled,J=pe.autoUpdate,te=pe.needsUpdate,j=pe.type;Me(),Mt.autoReset=C,pe.enabled=Y,pe.autoUpdate=J,pe.needsUpdate=te,pe.type=j}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const Y=C.target;Y.removeEventListener("dispose",ge),Ue(Y)}function Ue(C){Ve(C),tt.remove(C)}function Ve(C){const Y=tt.get(C).programs;Y!==void 0&&(Y.forEach(function(J){Ie.releaseProgram(J)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,J,te,j,Ce){Y===null&&(Y=vt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,qe=Fo(C,Y,J,te,j);Fe.setMaterial(te,Ne);let Ye=J.index,lt=1;if(te.wireframe===!0){if(Ye=he.getWireframeAttribute(J),Ye===void 0)return;lt=2}const it=J.drawRange,at=J.attributes.position;let Bt=it.start*lt,cn=(it.start+it.count)*lt;Ce!==null&&(Bt=Math.max(Bt,Ce.start*lt),cn=Math.min(cn,(Ce.start+Ce.count)*lt)),Ye!==null?(Bt=Math.max(Bt,0),cn=Math.min(cn,Ye.count)):at!=null&&(Bt=Math.max(Bt,0),cn=Math.min(cn,at.count));const kt=cn-Bt;if(kt<0||kt===1/0)return;nt.setup(j,te,qe,J,Ye);let Jn,Ut=Je;if(Ye!==null&&(Jn=_e.get(Ye),Ut=ze,Ut.setIndex(Jn)),j.isMesh)te.wireframe===!0?(Fe.setLineWidth(te.wireframeLinewidth*je()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(j.isLine){let ut=te.linewidth;ut===void 0&&(ut=1),Fe.setLineWidth(ut*je()),j.isLineSegments?Ut.setMode(q.LINES):j.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else j.isPoints?Ut.setMode(q.POINTS):j.isSprite&&Ut.setMode(q.TRIANGLES);if(j.isBatchedMesh)Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Ut.renderInstances(Bt,kt,j.count);else if(J.isInstancedBufferGeometry){const ut=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Cs=Math.min(J.instanceCount,ut);Ut.renderInstances(Bt,kt,Cs)}else Ut.render(Bt,kt)};function yt(C,Y,J){C.transparent===!0&&C.side===di&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,Lr(C,Y,J),C.side=ir,C.needsUpdate=!0,Lr(C,Y,J),C.side=di):Lr(C,Y,J)}this.compile=function(C,Y,J=null){J===null&&(J=C),m=Be.get(J),m.init(),U.push(m),J.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==J&&C.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(R._useLegacyLights);const te=new Set;return C.traverse(function(j){const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const qe=Ce[Ne];yt(qe,J,j),te.add(qe)}else yt(Ce,J,j),te.add(Ce)}),U.pop(),m=null,te},this.compileAsync=function(C,Y,J=null){const te=this.compile(C,Y,J);return new Promise(j=>{function Ce(){if(te.forEach(function(Ne){tt.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){j(C);return}setTimeout(Ce,10)}De.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let dt=null;function Rt(C){dt&&dt(C)}function $t(){It.stop()}function Tt(){It.start()}const It=new _p;It.setAnimationLoop(Rt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(C){dt=C,Te.setAnimationLoop(C),C===null?It.stop():It.start()},Te.addEventListener("sessionstart",$t),Te.addEventListener("sessionend",Tt),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Y),Y=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,A),m=Be.get(C,U.length),m.init(),U.push(m),We.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ze.setFromProjectionMatrix(We),de=this.localClippingEnabled,ne=Qe.init(this.clippingPlanes,de),w=we.get(C,g.length),w.init(),g.push(w),sn(C,Y,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(re,ce),this.info.render.frame++,ne===!0&&Qe.beginShadows();const J=m.state.shadowsArray;if(pe.render(J,C,Y),ne===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&St.render(w,C),m.setupLights(R._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let j=0,Ce=te.length;j<Ce;j++){const Ne=te[j];Rr(w,C,Ne,Ne.viewport)}}else Rr(w,C,Y);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(R,C,Y),nt.resetDefaultState(),z=-1,X=null,U.pop(),U.length>0?m=U[U.length-1]:m=null,g.pop(),g.length>0?w=g[g.length-1]:w=null};function sn(C,Y,J,te){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ze.intersectsSprite(C)){te&&Pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(We);const Ne=ve.update(C),qe=C.material;qe.visible&&w.push(C,Ne,qe,J,Pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ze.intersectsObject(C))){const Ne=ve.update(C),qe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pe.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(C.matrixWorld).applyMatrix4(We)),Array.isArray(qe)){const Ye=Ne.groups;for(let lt=0,it=Ye.length;lt<it;lt++){const at=Ye[lt],Bt=qe[at.materialIndex];Bt&&Bt.visible&&w.push(C,Ne,Bt,J,Pe.z,at)}}else qe.visible&&w.push(C,Ne,qe,J,Pe.z,null)}}const Ce=C.children;for(let Ne=0,qe=Ce.length;Ne<qe;Ne++)sn(Ce[Ne],Y,J,te)}function Rr(C,Y,J,te){const j=C.opaque,Ce=C.transmissive,Ne=C.transparent;m.setupLightsView(J),ne===!0&&Qe.setGlobalState(R.clippingPlanes,J),Ce.length>0&&Oo(j,Ce,Y,J),te&&Fe.viewport(S.copy(te)),j.length>0&&Cr(j,Y,J),Ce.length>0&&Cr(Ce,Y,J),Ne.length>0&&Cr(Ne,Y,J),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Oo(C,Y,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Ce=ke.isWebGL2;Re===null&&(Re=new Ar(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?ia:nr,minFilter:Sr,samples:Ce?4:0})),R.getDrawingBufferSize(Ge),Ce?Re.setSize(Ge.x,Ge.y):Re.setSize(Ro(Ge.x),Ro(Ge.y));const Ne=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(ie),G=R.getClearAlpha(),G<1&&R.setClearColor(16777215,.5),R.clear();const qe=R.toneMapping;R.toneMapping=tr,Cr(C,J,te),P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re);let Ye=!1;for(let lt=0,it=Y.length;lt<it;lt++){const at=Y[lt],Bt=at.object,cn=at.geometry,kt=at.material,Jn=at.group;if(kt.side===di&&Bt.layers.test(te.layers)){const Ut=kt.side;kt.side=En,kt.needsUpdate=!0,oa(Bt,J,te,cn,kt,Jn),kt.side=Ut,kt.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(Re),P.updateRenderTargetMipmap(Re)),R.setRenderTarget(Ne),R.setClearColor(ie,G),R.toneMapping=qe}function Cr(C,Y,J){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Ce=C.length;j<Ce;j++){const Ne=C[j],qe=Ne.object,Ye=Ne.geometry,lt=te===null?Ne.material:te,it=Ne.group;qe.layers.test(J.layers)&&oa(qe,Y,J,Ye,lt,it)}}function oa(C,Y,J,te,j,Ce){C.onBeforeRender(R,Y,J,te,j,Ce),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(R,Y,J,te,C,Ce),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,R.renderBufferDirect(J,Y,te,j,C,Ce),j.side=ir,j.needsUpdate=!0,R.renderBufferDirect(J,Y,te,j,C,Ce),j.side=di):R.renderBufferDirect(J,Y,te,j,C,Ce),C.onAfterRender(R,Y,J,te,j,Ce)}function Lr(C,Y,J){Y.isScene!==!0&&(Y=vt);const te=tt.get(C),j=m.state.lights,Ce=m.state.shadowsArray,Ne=j.state.version,qe=Ie.getParameters(C,j.state,Ce,Y,J),Ye=Ie.getProgramCacheKey(qe);let lt=te.programs;te.environment=C.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(C.isMeshStandardMaterial?K:T).get(C.envMap||te.environment),lt===void 0&&(C.addEventListener("dispose",ge),lt=new Map,te.programs=lt);let it=lt.get(Ye);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ne)return ca(C,qe),it}else qe.uniforms=Ie.getUniforms(C),C.onBuild(J,qe,R),C.onBeforeCompile(qe,R),it=Ie.acquireProgram(qe,Ye),lt.set(Ye,it),te.uniforms=qe.uniforms;const at=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=Qe.uniform),ca(C,qe),te.needsLights=ua(C),te.lightsStateVersion=Ne,te.needsLights&&(at.ambientLightColor.value=j.state.ambient,at.lightProbe.value=j.state.probe,at.directionalLights.value=j.state.directional,at.directionalLightShadows.value=j.state.directionalShadow,at.spotLights.value=j.state.spot,at.spotLightShadows.value=j.state.spotShadow,at.rectAreaLights.value=j.state.rectArea,at.ltc_1.value=j.state.rectAreaLTC1,at.ltc_2.value=j.state.rectAreaLTC2,at.pointLights.value=j.state.point,at.pointLightShadows.value=j.state.pointShadow,at.hemisphereLights.value=j.state.hemi,at.directionalShadowMap.value=j.state.directionalShadowMap,at.directionalShadowMatrix.value=j.state.directionalShadowMatrix,at.spotShadowMap.value=j.state.spotShadowMap,at.spotLightMatrix.value=j.state.spotLightMatrix,at.spotLightMap.value=j.state.spotLightMap,at.pointShadowMap.value=j.state.pointShadowMap,at.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function la(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Eo.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ca(C,Y){const J=tt.get(C);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function Fo(C,Y,J,te,j){Y.isScene!==!0&&(Y=vt),P.resetTextureUnits();const Ce=Y.fog,Ne=te.isMeshStandardMaterial?Y.environment:null,qe=A===null?R.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ui,Ye=(te.isMeshStandardMaterial?K:T).get(te.envMap||Ne),lt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),at=!!J.morphAttributes.position,Bt=!!J.morphAttributes.normal,cn=!!J.morphAttributes.color;let kt=tr;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=R.toneMapping);const Jn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ut=Jn!==void 0?Jn.length:0,ut=tt.get(te),Cs=m.state.lights;if(ne===!0&&(de===!0||C!==X)){const An=C===X&&te.id===z;Qe.setState(te,C,An)}let Nt=!1;te.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Cs.state.version||ut.outputColorSpace!==qe||j.isBatchedMesh&&ut.batching===!1||!j.isBatchedMesh&&ut.batching===!0||j.isInstancedMesh&&ut.instancing===!1||!j.isInstancedMesh&&ut.instancing===!0||j.isSkinnedMesh&&ut.skinning===!1||!j.isSkinnedMesh&&ut.skinning===!0||j.isInstancedMesh&&ut.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ut.instancingColor===!1&&j.instanceColor!==null||ut.envMap!==Ye||te.fog===!0&&ut.fog!==Ce||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Qe.numPlanes||ut.numIntersection!==Qe.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==it||ut.morphTargets!==at||ut.morphNormals!==Bt||ut.morphColors!==cn||ut.toneMapping!==kt||ke.isWebGL2===!0&&ut.morphTargetsCount!==Ut)&&(Nt=!0):(Nt=!0,ut.__version=te.version);let li=ut.currentProgram;Nt===!0&&(li=Lr(te,Y,j));let Ls=!1,gi=!1,Ps=!1;const Zt=li.getUniforms(),Gn=ut.uniforms;if(Fe.useProgram(li.program)&&(Ls=!0,gi=!0,Ps=!0),te.id!==z&&(z=te.id,gi=!0),Ls||X!==C){Zt.setValue(q,"projectionMatrix",C.projectionMatrix),Zt.setValue(q,"viewMatrix",C.matrixWorldInverse);const An=Zt.map.cameraPosition;An!==void 0&&An.setValue(q,Pe.setFromMatrixPosition(C.matrixWorld)),ke.logarithmicDepthBuffer&&Zt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Zt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,gi=!0,Ps=!0)}if(j.isSkinnedMesh){Zt.setOptional(q,j,"bindMatrix"),Zt.setOptional(q,j,"bindMatrixInverse");const An=j.skeleton;An&&(ke.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Zt.setValue(q,"boneTexture",An.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Zt.setOptional(q,j,"batchingTexture"),Zt.setValue(q,"batchingTexture",j._matricesTexture,P));const Pr=J.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&ke.isWebGL2===!0)&&st.update(j,J,li),(gi||ut.receiveShadow!==j.receiveShadow)&&(ut.receiveShadow=j.receiveShadow,Zt.setValue(q,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Gn.envMap.value=Ye,Gn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),gi&&(Zt.setValue(q,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&Bo(Gn,Ps),Ce&&te.fog===!0&&ye.refreshFogUniforms(Gn,Ce),ye.refreshMaterialUniforms(Gn,te,ae,Z,Re),Eo.upload(q,la(ut),Gn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Eo.upload(q,la(ut),Gn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Zt.setValue(q,"center",j.center),Zt.setValue(q,"modelViewMatrix",j.modelViewMatrix),Zt.setValue(q,"normalMatrix",j.normalMatrix),Zt.setValue(q,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const An=te.uniformsGroups;for(let Dr=0,fa=An.length;Dr<fa;Dr++)if(ke.isWebGL2){const Ir=An[Dr];O.update(Ir,li),O.bind(Ir,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function Bo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ua(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,Y,J){tt.get(C.texture).__webglTexture=Y,tt.get(C.depthTexture).__webglTexture=J;const te=tt.get(C);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const J=tt.get(C);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,J=0){A=C,V=Y,F=J;let te=!0,j=null,Ce=!1,Ne=!1;if(C){const Ye=tt.get(C);Ye.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ye.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ye.__hasExternalTextures&&P.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ne=!0);const it=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?j=it[Y][J]:j=it[Y],Ce=!0):ke.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?j=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[J]:j=it,S.copy(C.viewport),L.copy(C.scissor),$=C.scissorTest}else S.copy(ue).multiplyScalar(ae).floor(),L.copy(me).multiplyScalar(ae).floor(),$=Ee;if(Fe.bindFramebuffer(q.FRAMEBUFFER,j)&&ke.drawBuffers&&te&&Fe.drawBuffers(C,j),Fe.viewport(S),Fe.scissor(L),Fe.setScissorTest($),Ce){const Ye=tt.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ye.__webglTexture,J)}else if(Ne){const Ye=tt.get(C.texture),lt=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,lt)}z=-1},this.readRenderTargetPixels=function(C,Y,J,te,j,Ce,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(qe=qe[Ne]),qe){Fe.bindFramebuffer(q.FRAMEBUFFER,qe);try{const Ye=C.texture,lt=Ye.format,it=Ye.type;if(lt!==oi&&be.convert(lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===ia&&(De.has("EXT_color_buffer_half_float")||ke.isWebGL2&&De.has("EXT_color_buffer_float"));if(it!==nr&&be.convert(it)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Di&&(ke.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-te&&J>=0&&J<=C.height-j&&q.readPixels(Y,J,te,j,be.convert(lt),be.convert(it),Ce)}finally{const Ye=A!==null?tt.get(A).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(C,Y,J=0){const te=Math.pow(2,-J),j=Math.floor(Y.image.width*te),Ce=Math.floor(Y.image.height*te);P.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,C.x,C.y,j,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(C,Y,J,te=0){const j=Y.image.width,Ce=Y.image.height,Ne=be.convert(J.format),qe=be.convert(J.type);P.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,j,Ce,Ne,qe,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ne,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,Ne,qe,Y.image),te===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,J,te,j=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,Ye=be.convert(te.format),lt=be.convert(te.type);let it;if(te.isData3DTexture)P.setTexture3D(te,0),it=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)P.setTexture2DArray(te,0),it=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const at=q.getParameter(q.UNPACK_ROW_LENGTH),Bt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),cn=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),Jn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ut=J.isCompressedTexture?J.mipmaps[j]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ut.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,lt,Ut.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,Ut.data)):q.texSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,lt,Ut),q.pixelStorei(q.UNPACK_ROW_LENGTH,at),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Jn),j===0&&te.generateMipmaps&&q.generateMipmap(it),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){V=0,F=0,A=null,Fe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vc?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Po?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?Tr:ip}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?ln:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jb extends Tp{}jb.prototype.isWebGL1Renderer=!0;class Jb extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yc extends Ts{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nd=new H,Od=new H,Fd=new Yt,Ec=new kc,xo=new Do;class Kc extends mn{constructor(e=new jn,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Nd.fromBufferAttribute(t,a-1),Od.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Nd.distanceTo(Od);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(a),xo.radius+=o,e.ray.intersectsSphere(xo)===!1)return;Fd.copy(a).invert(),Ec.copy(e.ray).applyMatrix4(Fd);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=new H,p=new H,_=new H,v=new H,M=this.isLineSegments?2:1,y=i.index,m=i.attributes.position;if(y!==null){const g=Math.max(0,u.start),U=Math.min(y.count,u.start+u.count);for(let R=g,I=U-1;R<I;R+=M){const V=y.getX(R),F=y.getX(R+1);if(d.fromBufferAttribute(m,V),p.fromBufferAttribute(m,F),Ec.distanceSqToSegment(d,p,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(v);z<e.near||z>e.far||t.push({distance:z,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,u.start),U=Math.min(m.count,u.start+u.count);for(let R=g,I=U-1;R<I;R+=M){if(d.fromBufferAttribute(m,R),p.fromBufferAttribute(m,R+1),Ec.distanceSqToSegment(d,p,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(v);F<e.near||F>e.far||t.push({distance:F,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}class $c extends jn{constructor(e=1,t=1,i=1,a=32,o=1,u=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:h};const d=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],v=[],M=[];let y=0;const w=[],m=i/2;let g=0;U(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(p),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(M,2));function U(){const I=new H,V=new H;let F=0;const A=(t-e)/i;for(let z=0;z<=o;z++){const X=[],S=z/o,L=S*(t-e)+e;for(let $=0;$<=a;$++){const ie=$/a,G=ie*h+c,ee=Math.sin(G),Z=Math.cos(G);V.x=L*ee,V.y=-S*i+m,V.z=L*Z,_.push(V.x,V.y,V.z),I.set(ee,A,Z).normalize(),v.push(I.x,I.y,I.z),M.push(ie,1-S),X.push(y++)}w.push(X)}for(let z=0;z<a;z++)for(let X=0;X<o;X++){const S=w[X][z],L=w[X+1][z],$=w[X+1][z+1],ie=w[X][z+1];p.push(S,L,ie),p.push(L,$,ie),F+=6}d.addGroup(g,F,0),g+=F}function R(I){const V=y,F=new et,A=new H;let z=0;const X=I===!0?e:t,S=I===!0?1:-1;for(let $=1;$<=a;$++)_.push(0,m*S,0),v.push(0,S,0),M.push(.5,.5),y++;const L=y;for(let $=0;$<=a;$++){const G=$/a*h+c,ee=Math.cos(G),Z=Math.sin(G);A.x=X*Z,A.y=m*S,A.z=X*ee,_.push(A.x,A.y,A.z),v.push(0,S,0),F.x=ee*.5+.5,F.y=Z*.5*S+.5,M.push(F.x,F.y),y++}for(let $=0;$<a;$++){const ie=V+$,G=L+$;I===!0?p.push(G,G+1,ie):p.push(G+1,G,ie),z+=3}d.addGroup(g,z,I===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends jn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(u+c,Math.PI);let d=0;const p=[],_=new H,v=new H,M=[],y=[],w=[],m=[];for(let g=0;g<=i;g++){const U=[],R=g/i;let I=0;g===0&&u===0?I=.5/t:g===i&&h===Math.PI&&(I=-.5/t);for(let V=0;V<=t;V++){const F=V/t;_.x=-e*Math.cos(a+F*o)*Math.sin(u+R*c),_.y=e*Math.cos(u+R*c),_.z=e*Math.sin(a+F*o)*Math.sin(u+R*c),y.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),m.push(F+I,1-R),U.push(d++)}p.push(U)}for(let g=0;g<i;g++)for(let U=0;U<t;U++){const R=p[g][U+1],I=p[g][U],V=p[g+1][U],F=p[g+1][U+1];(g!==0||u>0)&&M.push(R,I,F),(g!==i-1||h<Math.PI)&&M.push(I,V,F)}this.setIndex(M),this.setAttribute("position",new Tn(y,3)),this.setAttribute("normal",new Tn(w,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qb extends Ts{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rp,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Bd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ew{constructor(e,t,i){const a=this;let o=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,o===!1&&a.onStart!==void 0&&a.onStart(p,u,c),o=!0},this.itemEnd=function(p){u++,a.onProgress!==void 0&&a.onProgress(p,u,c),u===c&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,v=d.length;_<v;_+=2){const M=d[_],y=d[_+1];if(M.global&&(M.lastIndex=0),M.test(p))return y}return null}}}const tw=new ew;class Zc{constructor(e){this.manager=e!==void 0?e:tw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";class nw extends Zc{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Bd.get(e);if(u!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u;const c=sa("img");function h(){p(),Bd.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(_){p(),a&&a(_),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class iw extends Zc{constructor(e){super(e)}load(e,t,i,a){const o=new yn,u=new nw(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class rw extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const yc=new Yt,zd=new H,Gd=new H;class sw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),Gd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gd),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hd=new Yt,Js=new H,Tc=new H;class aw extends sw{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),Tc.copy(i.position),Tc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Tc),i.updateMatrixWorld(),a.makeTranslation(-Js.x,-Js.y,-Js.z),Hd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}}class Ap extends rw{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ow{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vd(){return(typeof performance>"u"?Date:performance).now()}class Wd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kd=new H;let Mo,Ac;class lw extends mn{constructor(e=new H(0,0,1),t=new H(0,0,0),i=1,a=16776960,o=i*.2,u=o*.2){super(),this.type="ArrowHelper",Mo===void 0&&(Mo=new jn,Mo.setAttribute("position",new Tn([0,0,0,0,1,0],3)),Ac=new $c(0,.5,1,5,1),Ac.translate(0,-.5,0)),this.position.copy(t),this.line=new Kc(Mo,new Yc({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pn(Ac,new As({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,o,u)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{kd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(kd,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const Xd={type:"change"},bc={type:"start"},qd={type:"end"},So=new kc,Yd=new ji,cw=Math.cos(70*HS.DEG2RAD);class bp extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Be),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Xd),i.update(),o=a.NONE},this.update=function(){const O=new H,Me=new br().setFromUnitVectors(e.up,new H(0,1,0)),Te=Me.clone().invert(),He=new H,D=new br,xe=new H,ge=2*Math.PI;return function(Ve=null){const yt=i.object.position;O.copy(yt).sub(i.target),O.applyQuaternion(Me),c.setFromVector3(O),i.autoRotate&&o===a.NONE&&$(S(Ve)),i.enableDamping?(c.theta+=h.theta*i.dampingFactor,c.phi+=h.phi*i.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let dt=i.minAzimuthAngle,Rt=i.maxAzimuthAngle;isFinite(dt)&&isFinite(Rt)&&(dt<-Math.PI?dt+=ge:dt>Math.PI&&(dt-=ge),Rt<-Math.PI?Rt+=ge:Rt>Math.PI&&(Rt-=ge),dt<=Rt?c.theta=Math.max(dt,Math.min(Rt,c.theta)):c.theta=c.theta>(dt+Rt)/2?Math.max(dt,c.theta):Math.min(Rt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&F||i.object.isOrthographicCamera?c.radius=ue(c.radius):c.radius=ue(c.radius*d),O.setFromSpherical(c),O.applyQuaternion(Te),yt.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let $t=!1;if(i.zoomToCursor&&F){let Tt=null;if(i.object.isPerspectiveCamera){const It=O.length();Tt=ue(It*d);const sn=It-Tt;i.object.position.addScaledVector(I,sn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const It=new H(V.x,V.y,0);It.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),$t=!0;const sn=new H(V.x,V.y,0);sn.unproject(i.object),i.object.position.sub(sn).add(It),i.object.updateMatrixWorld(),Tt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Tt).add(i.object.position):(So.origin.copy(i.object.position),So.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(So.direction))<cw?e.lookAt(i.target):(Yd.setFromNormalAndCoplanarPoint(i.object.up,i.target),So.intersectPlane(Yd,i.target))))}else i.object.isOrthographicCamera&&($t=d!==1,$t&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix()));return d=1,F=!1,$t||He.distanceToSquared(i.object.position)>u||8*(1-D.dot(i.object.quaternion))>u||xe.distanceToSquared(i.target)>0?(i.dispatchEvent(Xd),He.copy(i.object.position),D.copy(i.object.quaternion),xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",St),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",K),i.domElement.removeEventListener("wheel",ve),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",K),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Be),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=a.NONE;const u=1e-6,c=new Wd,h=new Wd;let d=1;const p=new H,_=new et,v=new et,M=new et,y=new et,w=new et,m=new et,g=new et,U=new et,R=new et,I=new H,V=new et;let F=!1;const A=[],z={};let X=!1;function S(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function L(O){const Me=Math.abs(O*.01);return Math.pow(.95,i.zoomSpeed*Me)}function $(O){h.theta-=O}function ie(O){h.phi-=O}const G=function(){const O=new H;return function(Te,He){O.setFromMatrixColumn(He,0),O.multiplyScalar(-Te),p.add(O)}}(),ee=function(){const O=new H;return function(Te,He){i.screenSpacePanning===!0?O.setFromMatrixColumn(He,1):(O.setFromMatrixColumn(He,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(Te),p.add(O)}}(),Z=function(){const O=new H;return function(Te,He){const D=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;O.copy(xe).sub(i.target);let ge=O.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),G(2*Te*ge/D.clientHeight,i.object.matrix),ee(2*He*ge/D.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(Te*(i.object.right-i.object.left)/i.object.zoom/D.clientWidth,i.object.matrix),ee(He*(i.object.top-i.object.bottom)/i.object.zoom/D.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ae(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(O,Me){if(!i.zoomToCursor)return;F=!0;const Te=i.domElement.getBoundingClientRect(),He=O-Te.left,D=Me-Te.top,xe=Te.width,ge=Te.height;V.x=He/xe*2-1,V.y=-(D/ge)*2+1,I.set(V.x,V.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function me(O){_.set(O.clientX,O.clientY)}function Ee(O){ce(O.clientX,O.clientX),g.set(O.clientX,O.clientY)}function Ze(O){y.set(O.clientX,O.clientY)}function ne(O){v.set(O.clientX,O.clientY),M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const Me=i.domElement;$(2*Math.PI*M.x/Me.clientHeight),ie(2*Math.PI*M.y/Me.clientHeight),_.copy(v),i.update()}function de(O){U.set(O.clientX,O.clientY),R.subVectors(U,g),R.y>0?ae(L(R.y)):R.y<0&&re(L(R.y)),g.copy(U),i.update()}function Re(O){w.set(O.clientX,O.clientY),m.subVectors(w,y).multiplyScalar(i.panSpeed),Z(m.x,m.y),y.copy(w),i.update()}function We(O){ce(O.clientX,O.clientY),O.deltaY<0?re(L(O.deltaY)):O.deltaY>0&&ae(L(O.deltaY)),i.update()}function Ge(O){let Me=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),Me=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),Me=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),Me=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),Me=!0;break}Me&&(O.preventDefault(),i.update())}function Pe(O){if(A.length===1)_.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);_.set(Te,He)}}function vt(O){if(A.length===1)y.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);y.set(Te,He)}}function je(O){const Me=be(O),Te=O.pageX-Me.x,He=O.pageY-Me.y,D=Math.sqrt(Te*Te+He*He);g.set(0,D)}function q(O){i.enableZoom&&je(O),i.enablePan&&vt(O)}function Vt(O){i.enableZoom&&je(O),i.enableRotate&&Pe(O)}function De(O){if(A.length==1)v.set(O.pageX,O.pageY);else{const Te=be(O),He=.5*(O.pageX+Te.x),D=.5*(O.pageY+Te.y);v.set(He,D)}M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const Me=i.domElement;$(2*Math.PI*M.x/Me.clientHeight),ie(2*Math.PI*M.y/Me.clientHeight),_.copy(v)}function ke(O){if(A.length===1)w.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);w.set(Te,He)}m.subVectors(w,y).multiplyScalar(i.panSpeed),Z(m.x,m.y),y.copy(w)}function Fe(O){const Me=be(O),Te=O.pageX-Me.x,He=O.pageY-Me.y,D=Math.sqrt(Te*Te+He*He);U.set(0,D),R.set(0,Math.pow(U.y/g.y,i.zoomSpeed)),ae(R.y),g.copy(U);const xe=(O.pageX+Me.x)*.5,ge=(O.pageY+Me.y)*.5;ce(xe,ge)}function Mt(O){i.enableZoom&&Fe(O),i.enablePan&&ke(O)}function tt(O){i.enableZoom&&Fe(O),i.enableRotate&&De(O)}function P(O){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",K)),st(O),O.pointerType==="touch"?Qe(O):_e(O))}function T(O){i.enabled!==!1&&(O.pointerType==="touch"?pe(O):he(O))}function K(O){switch(Je(O),A.length){case 0:i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",K),i.dispatchEvent(qd),o=a.NONE;break;case 1:const Me=A[0],Te=z[Me];Qe({pointerId:Me,pageX:Te.x,pageY:Te.y});break}}function _e(O){let Me;switch(O.button){case 0:Me=i.mouseButtons.LEFT;break;case 1:Me=i.mouseButtons.MIDDLE;break;case 2:Me=i.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case Kr.DOLLY:if(i.enableZoom===!1)return;Ee(O),o=a.DOLLY;break;case Kr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;Ze(O),o=a.PAN}else{if(i.enableRotate===!1)return;me(O),o=a.ROTATE}break;case Kr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;me(O),o=a.ROTATE}else{if(i.enablePan===!1)return;Ze(O),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(bc)}function he(O){switch(o){case a.ROTATE:if(i.enableRotate===!1)return;ne(O);break;case a.DOLLY:if(i.enableZoom===!1)return;de(O);break;case a.PAN:if(i.enablePan===!1)return;Re(O);break}}function ve(O){i.enabled===!1||i.enableZoom===!1||o!==a.NONE||(O.preventDefault(),i.dispatchEvent(bc),We(Ie(O)),i.dispatchEvent(qd))}function Ie(O){const Me=O.deltaMode,Te={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Me){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return O.ctrlKey&&!X&&(Te.deltaY*=10),Te}function ye(O){O.key==="Control"&&(X=!0,i.domElement.getRootNode().addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(O){O.key==="Control"&&(X=!1,i.domElement.getRootNode().removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Be(O){i.enabled===!1||i.enablePan===!1||Ge(O)}function Qe(O){switch(ze(O),A.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;Pe(O),o=a.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;vt(O),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(O),o=a.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Vt(O),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(bc)}function pe(O){switch(ze(O),o){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(O),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ke(O),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Mt(O),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(O),i.update();break;default:o=a.NONE}}function St(O){i.enabled!==!1&&O.preventDefault()}function st(O){A.push(O.pointerId)}function Je(O){delete z[O.pointerId];for(let Me=0;Me<A.length;Me++)if(A[Me]==O.pointerId){A.splice(Me,1);return}}function ze(O){let Me=z[O.pointerId];Me===void 0&&(Me=new et,z[O.pointerId]=Me),Me.set(O.pageX,O.pageY)}function be(O){const Me=O.pointerId===A[0]?A[1]:A[0];return z[Me]}i.domElement.addEventListener("contextmenu",St),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",ve,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}var na=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++s%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===p?"block":"none";s=p}var a=(performance||Date).now(),o=a,u=0,c=t(new na.Panel("FPS","#0ff","#002")),h=t(new na.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new na.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){u++;var p=(performance||Date).now();if(h.update(p-a,200),p>=o+1e3&&(c.update(u*1e3/(p-o),100),o=p,u=0,d)){var _=performance.memory;d.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};na.Panel=function(s,e,t){var i=1/0,a=0,o=Math.round,u=o(window.devicePixelRatio||1),c=80*u,h=48*u,d=3*u,p=2*u,_=3*u,v=15*u,M=74*u,y=30*u,w=document.createElement("canvas");w.width=c,w.height=h,w.style.cssText="width:80px;height:48px";var m=w.getContext("2d");return m.font="bold "+9*u+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,c,h),m.fillStyle=e,m.fillText(s,d,p),m.fillRect(_,v,M,y),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(_,v,M,y),{dom:w,update:function(g,U){i=Math.min(i,g),a=Math.max(a,g),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,c,v),m.fillStyle=e,m.fillText(o(g)+" "+s+" ("+o(i)+"-"+o(a)+")",d,p),m.drawImage(w,_+u,v,M-u,y,_,v,M-u,y),m.fillRect(_+M-u,v,u,y),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(_+M-u,v,u,o((1-g/U)*y))}}};const gt=Object.freeze({ball:Object.freeze({bounciness:.8,launchForce:3.5,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6}),simulationMode:!0,maxFlightDurationInSeconds:30,ticksPerSecond:500,camera:{fov:30,near:.1,far:Math.pow(10,6)},defaultPlanetDensity:14e-5,maxPlanetOffset:700,showFPSCounter:!0,showInfoTab:!1,skyboxOpacity:1});function uw(s){const e=new As({color:"rgb(0,0,0)",side:En}),t=32,i=32,a=1;return new Pn(new Rs(s+a,t,i),e)}class wp extends Pn{get mass(){const e=Math.PI*4/3;return this.density*this.radius**3*e}constructor({radius:e,color:t="rgb(255,0,0)",density:i=gt.defaultPlanetDensity}){super(new Rs(e,32,32),new Qb({color:t})),this.radius=e,this.density=i,this.add(uw(e))}}class fw{constructor(e){this.scene=e}getPlanets(){return this.getInstancesOf(wp)}getLines(){return this.getInstancesOf(Kc)}getInstancesOf(e){return this.scene.children.filter(t=>t instanceof e)}}const hw=document.getElementById("infoTab"),dw=document.getElementById("infoTab__text"),pw={updateText(s){const e=`Ball: {
	position: {
		x: ${s.position.x.toFixed(0)},
		y: ${s.position.y.toFixed(0)},
		z: ${s.position.z.toFixed(0)}
	},
	velocity: {
		length: ${s.velocity.length().toFixed(2)},
		x: ${s.velocity.x.toFixed(2)},
		y: ${s.velocity.y.toFixed(2)},
		z: ${s.velocity.z.toFixed(2)}
	}
}`;dw.innerHTML=e}};gt.showInfoTab||(hw.style.display="none");class mw extends rn{constructor(e){super(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),this.position.set(400,200,40),this.lookAt(new H)}setupLockControls(){}reset(e){var u;if(!e.landedPlanet)return;const t=e.position.clone(),a=((u=e.landedPlanet)==null?void 0:u.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(t)}getControlsObject(){}}const Zi=()=>new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far);class gw extends Qs{constructor(){super(),this.cameras=[Zi(),Zi(),Zi(),Zi(),Zi(),Zi(),Zi(),Zi()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const e=gt.maxPlanetOffset+900,t=-e,i=e;this.cameras[0].position.set(t,t/2,t),this.cameras[1].position.set(t,t/2,i),this.cameras[2].position.set(t,i/2,t),this.cameras[3].position.set(t,i/2,i),this.cameras[4].position.set(i,t/2,t),this.cameras[5].position.set(i,t/2,i),this.cameras[6].position.set(i,i/2,t),this.cameras[7].position.set(i,i/2,i)}selectActiveCamera(e){if(Date.now()-this.lastSwitchDate<3e3)return;const a=+(e.x>0)*4+ +(e.y>0)*2+ +(e.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[a]}updateActiveCamera(e){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(e)}getActiveCamera(){return this.activeCamera}update(e){this.selectActiveCamera(e),this.updateActiveCamera(e)}}class _w extends rn{constructor(e){super(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),this.position.set(400,200,40),this.orbitControls=new bp(this,e),this.lookAt(new H)}reset(e){var u;if(!e.landedPlanet)return;const t=e.position.clone(),a=((u=e.landedPlanet)==null?void 0:u.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(2e3));this.orbitControls.target=t,this.position.copy(o),this.lookAt(t)}}const Fc={ballHit:(s=1)=>wc("audio-ping-pong-ball-hit",{volume:s}),ballFlightStart:(s=.5)=>wc("audio-ball-flight-start",{volume:s,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>wc("audio-ambient",{volume:.5})};function wc(s,{volume:e=1,startTimeMS:t=0,stopTimeMS:i}){const a=document.getElementById(s);if(!a)throw new Error(`Audio not found: ${s}`);a.pause(),a.volume=e,a.currentTime=t/1e3,a.play(),typeof i=="number"&&setTimeout(function(){a.pause()},i)}function Rp(s,e){const t=new H((e==null?void 0:e.x)||Math.random(),(e==null?void 0:e.y)||Math.random(),(e==null?void 0:e.z)||Math.random()).normalize().multiplyScalar(gt.ball.launchForce);s.landedPlanet=null,s.velocity=t,Fc.ballFlightStart()}var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bc={exports:{}};(function(s,e){(function(t,i){{var a=i();s&&s.exports&&(e=s.exports=a),e.randomColor=a}})(ds,function(){var t=null,i={};g();var a=[],o=function(A){if(A=A||{},A.seed!==void 0&&A.seed!==null&&A.seed===parseInt(A.seed,10))t=A.seed;else if(typeof A.seed=="string")t=V(A.seed);else{if(A.seed!==void 0&&A.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var z,X,S;if(A.count!==null&&A.count!==void 0){for(var L=A.count,$=[],ie=0;ie<A.count;ie++)a.push(!1);for(A.count=null;L>$.length;){var G=o(A);t!==null&&(A.seed=t),$.push(G)}return A.count=L,$}return z=u(A),X=c(z,A),S=h(z,X,A),d([z,X,S],A)};function u(A){if(a.length>0){var z=F(A.hue),X=y(z),S=(z[1]-z[0])/a.length,L=parseInt((X-z[0])/S);a[L]===!0?L=(L+2)%a.length:a[L]=!0;var $=(z[0]+L*S)%359,ie=(z[0]+(L+1)*S)%359;return z=[$,ie],X=y(z),X<0&&(X=360+X),X}else{var z=_(A.hue);return X=y(z),X<0&&(X=360+X),X}}function c(A,z){if(z.hue==="monochrome")return 0;if(z.luminosity==="random")return y([0,100]);var X=v(A),S=X[0],L=X[1];switch(z.luminosity){case"bright":S=55;break;case"dark":S=L-10;break;case"light":L=55;break}return y([S,L])}function h(A,z,X){var S=p(A,z),L=100;switch(X.luminosity){case"dark":L=S+20;break;case"light":S=(L+S)/2;break;case"random":S=0,L=100;break}return y([S,L])}function d(A,z){switch(z.format){case"hsvArray":return A;case"hslArray":return I(A);case"hsl":var X=I(A);return"hsl("+X[0]+", "+X[1]+"%, "+X[2]+"%)";case"hsla":var S=I(A),ie=z.alpha||Math.random();return"hsla("+S[0]+", "+S[1]+"%, "+S[2]+"%, "+ie+")";case"rgbArray":return U(A);case"rgb":var L=U(A);return"rgb("+L.join(", ")+")";case"rgba":var $=U(A),ie=z.alpha||Math.random();return"rgba("+$.join(", ")+", "+ie+")";default:return w(A)}}function p(A,z){for(var X=M(A).lowerBounds,S=0;S<X.length-1;S++){var L=X[S][0],$=X[S][1],ie=X[S+1][0],G=X[S+1][1];if(z>=L&&z<=ie){var ee=(G-$)/(ie-L),Z=$-ee*L;return ee*z+Z}}return 0}function _(A){if(typeof parseInt(A)=="number"){var z=parseInt(A);if(z<360&&z>0)return[z,z]}if(typeof A=="string"){if(i[A]){var X=i[A];if(X.hueRange)return X.hueRange}else if(A.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var S=R(A)[0];return[S,S]}}return[0,360]}function v(A){return M(A).saturationRange}function M(A){A>=334&&A<=360&&(A-=360);for(var z in i){var X=i[z];if(X.hueRange&&A>=X.hueRange[0]&&A<=X.hueRange[1])return i[z]}return"Color not found"}function y(A){if(t===null){var z=.618033988749895,X=Math.random();return X+=z,X%=1,Math.floor(A[0]+X*(A[1]+1-A[0]))}else{var S=A[1]||1,L=A[0]||0;t=(t*9301+49297)%233280;var $=t/233280;return Math.floor(L+$*(S-L))}}function w(A){var z=U(A);function X(L){var $=L.toString(16);return $.length==1?"0"+$:$}var S="#"+X(z[0])+X(z[1])+X(z[2]);return S}function m(A,z,X){var S=X[0][0],L=X[X.length-1][0],$=X[X.length-1][1],ie=X[0][1];i[A]={hueRange:z,lowerBounds:X,saturationRange:[S,L],brightnessRange:[$,ie]}}function g(){m("monochrome",null,[[0,0],[100,0]]),m("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),m("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),m("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),m("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),m("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),m("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),m("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function U(A){var z=A[0];z===0&&(z=1),z===360&&(z=359),z=z/360;var X=A[1]/100,S=A[2]/100,L=Math.floor(z*6),$=z*6-L,ie=S*(1-X),G=S*(1-$*X),ee=S*(1-(1-$)*X),Z=256,ae=256,re=256;switch(L){case 0:Z=S,ae=ee,re=ie;break;case 1:Z=G,ae=S,re=ie;break;case 2:Z=ie,ae=S,re=ee;break;case 3:Z=ie,ae=G,re=S;break;case 4:Z=ee,ae=ie,re=S;break;case 5:Z=S,ae=ie,re=G;break}var ce=[Math.floor(Z*255),Math.floor(ae*255),Math.floor(re*255)];return ce}function R(A){A=A.replace(/^#/,""),A=A.length===3?A.replace(/(.)/g,"$1$1"):A;var z=parseInt(A.substr(0,2),16)/255,X=parseInt(A.substr(2,2),16)/255,S=parseInt(A.substr(4,2),16)/255,L=Math.max(z,X,S),$=L-Math.min(z,X,S),ie=L?$/L:0;switch(L){case z:return[60*((X-S)/$%6)||0,ie,L];case X:return[60*((S-z)/$+2)||0,ie,L];case S:return[60*((z-X)/$+4)||0,ie,L]}}function I(A){var z=A[0],X=A[1]/100,S=A[2]/100,L=(2-X)*S;return[z,Math.round(X*S/(L<1?L:2-L)*1e4)/100,L/2*100]}function V(A){for(var z=0,X=0;X!==A.length&&!(z>=Number.MAX_SAFE_INTEGER);X++)z+=A.charCodeAt(X);return z}function F(A){if(isNaN(A)){if(typeof A=="string"){if(i[A]){var X=i[A];if(X.hueRange)return X.hueRange}else if(A.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var S=R(A)[0];return M(S).hueRange}}}else{var z=parseInt(A);if(z<360&&z>0)return M(A).hueRange}return[0,360]}return o})})(Bc,Bc.exports);var vw=Bc.exports;const Lp=Cp(vw);function xw(s){return new Rs(s,32,32)}function Mw(s){return new As({color:s})}class Sw extends Pn{constructor({radius:e=gt.ball.radius}={}){const t=Lp({luminosity:"dark",alpha:1});super(xw(e),Mw(t)),this._velocity=new H(0,0,0),this.arrowHelper=new lw(new H,new H),this.pathVertices=[],this.camera=new rn(gt.camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.mass=3,this.light=new Ap(t,16e3,1e4),this.color=t,this.radius=e,gt.ball.showVelocityVector&&this.add(this.arrowHelper),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}get velocity(){return this._velocity.clone()}set velocity(e){this._velocity=e}addVelocity(e){this._velocity.add(e)}createTrace(){const e=new Yc({color:16755200,opacity:gt.ball.traceTransparency,transparent:!0}),t=new jn().setFromPoints(this.pathVertices);return new Kc(t,e)}tick(){this.landedPlanet!==null&&(this.velocity=new H,gt.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{Rp(this,new H(-.8,.18,-.72)),this.launchBallTimeout=null},1e3))),this.rotation.set(0,0,0),this.position.add(this.velocity);const e=this.velocity.normalize();this.rotation.set(e.x,e.y,e.z),this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},gt.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class Ew extends Pn{constructor(){super(new bs,[]),this.init()}async init(){const t=await new iw().loadAsync(`${document.baseURI}public/assets/gfx/sphere-skybox.jpg`),i=new As({side:di,map:t,opacity:gt.skyboxOpacity,transparent:!0,color:new At(.15,.2,.4)}),a=10**5.8,o=new Rs(a);this.geometry=o,this.material=i}}function yw(s,e){return s.position.distanceTo(e.position)<=s.radius+e.radius}function Tw({pulled:s,puller:e,timeDelta:t}){const i=e.position.clone().sub(s.position),a=e.position.distanceTo(s.position);return i.normalize().multiplyScalar(e.mass).multiplyScalar(s.mass).multiplyScalar(t*100).divideScalar(a**2)}function Aw({staticSphere:s,movingSphere:e,onBounceVelocityMultiplier:t=gt.ball.bounciness}){const i=e.position.clone().sub(s.position).normalize(),a=i.dot(e.velocity);return e.velocity.clone().sub(i.clone().multiplyScalar(2*a)).multiplyScalar(t)}function bw(s,e){const t=s.position.clone().sub(e.position).normalize().multiplyScalar(e.radius+s.radius),i=e.position.clone().add(t);return s.position.set(i.x,i.y,i.z),i}var Co={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Co.exports;(function(s,e){(function(){var t,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,M=4,y=1,w=2,m=1,g=2,U=4,R=8,I=16,V=32,F=64,A=128,z=256,X=512,S=30,L="...",$=800,ie=16,G=1,ee=2,Z=3,ae=1/0,re=9007199254740991,ce=17976931348623157e292,ue=NaN,me=4294967295,Ee=me-1,Ze=me>>>1,ne=[["ary",A],["bind",m],["bindKey",g],["curry",R],["curryRight",I],["flip",X],["partial",V],["partialRight",F],["rearg",z]],de="[object Arguments]",Re="[object Array]",We="[object AsyncFunction]",Ge="[object Boolean]",Pe="[object Date]",vt="[object DOMException]",je="[object Error]",q="[object Function]",Vt="[object GeneratorFunction]",De="[object Map]",ke="[object Number]",Fe="[object Null]",Mt="[object Object]",tt="[object Promise]",P="[object Proxy]",T="[object RegExp]",K="[object Set]",_e="[object String]",he="[object Symbol]",ve="[object Undefined]",Ie="[object WeakMap]",ye="[object WeakSet]",we="[object ArrayBuffer]",Be="[object DataView]",Qe="[object Float32Array]",pe="[object Float64Array]",St="[object Int8Array]",st="[object Int16Array]",Je="[object Int32Array]",ze="[object Uint8Array]",be="[object Uint8ClampedArray]",nt="[object Uint16Array]",O="[object Uint32Array]",Me=/\b__p \+= '';/g,Te=/\b(__p \+=) '' \+/g,He=/(__e\(.*?\)|\b__t\)) \+\n'';/g,D=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,ge=RegExp(D.source),Ue=RegExp(xe.source),Ve=/<%-([\s\S]+?)%>/g,yt=/<%([\s\S]+?)%>/g,dt=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$t=/^\w*$/,Tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/[\\^$.*+?()[\]{}|]/g,sn=RegExp(It.source),Rr=/^\s+/,Oo=/\s/,Cr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oa=/\{\n\/\* \[wrapped with (.+)\] \*/,Lr=/,? & /,la=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ca=/[()=,{}\[\]\/\s]/,Fo=/\\(\\)?/g,Bo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ua=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,J=/^\[object .+?Constructor\]$/,te=/^0o[0-7]+$/i,j=/^(?:0|[1-9]\d*)$/,Ce=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ne=/($^)/,qe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",lt="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",Bt=lt+it+at,cn="\\u2700-\\u27bf",kt="a-z\\xdf-\\xf6\\xf8-\\xff",Jn="\\xac\\xb1\\xd7\\xf7",Ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",Cs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nt="A-Z\\xc0-\\xd6\\xd8-\\xde",li="\\ufe0e\\ufe0f",Ls=Jn+Ut+ut+Cs,gi="['’]",Ps="["+Ye+"]",Zt="["+Ls+"]",Gn="["+Bt+"]",Pr="\\d+",An="["+cn+"]",Dr="["+kt+"]",fa="[^"+Ye+Ls+Pr+cn+kt+Nt+"]",Ir="\\ud83c[\\udffb-\\udfff]",Pp="(?:"+Gn+"|"+Ir+")",jc="[^"+Ye+"]",zo="(?:\\ud83c[\\udde6-\\uddff]){2}",Go="[\\ud800-\\udbff][\\udc00-\\udfff]",Ur="["+Nt+"]",Jc="\\u200d",Qc="(?:"+Dr+"|"+fa+")",Dp="(?:"+Ur+"|"+fa+")",eu="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",tu="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",nu=Pp+"?",iu="["+li+"]?",Ip="(?:"+Jc+"(?:"+[jc,zo,Go].join("|")+")"+iu+nu+")*",Up="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Np="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ru=iu+nu+Ip,Op="(?:"+[An,zo,Go].join("|")+")"+ru,Fp="(?:"+[jc+Gn+"?",Gn,zo,Go,Ps].join("|")+")",Bp=RegExp(gi,"g"),zp=RegExp(Gn,"g"),Ho=RegExp(Ir+"(?="+Ir+")|"+Fp+ru,"g"),Gp=RegExp([Ur+"?"+Dr+"+"+eu+"(?="+[Zt,Ur,"$"].join("|")+")",Dp+"+"+tu+"(?="+[Zt,Ur+Qc,"$"].join("|")+")",Ur+"?"+Qc+"+"+eu,Ur+"+"+tu,Np,Up,Pr,Op].join("|"),"g"),Hp=RegExp("["+Jc+Ye+Bt+li+"]"),Vp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],kp=-1,Ot={};Ot[Qe]=Ot[pe]=Ot[St]=Ot[st]=Ot[Je]=Ot[ze]=Ot[be]=Ot[nt]=Ot[O]=!0,Ot[de]=Ot[Re]=Ot[we]=Ot[Ge]=Ot[Be]=Ot[Pe]=Ot[je]=Ot[q]=Ot[De]=Ot[ke]=Ot[Mt]=Ot[T]=Ot[K]=Ot[_e]=Ot[Ie]=!1;var Dt={};Dt[de]=Dt[Re]=Dt[we]=Dt[Be]=Dt[Ge]=Dt[Pe]=Dt[Qe]=Dt[pe]=Dt[St]=Dt[st]=Dt[Je]=Dt[De]=Dt[ke]=Dt[Mt]=Dt[T]=Dt[K]=Dt[_e]=Dt[he]=Dt[ze]=Dt[be]=Dt[nt]=Dt[O]=!0,Dt[je]=Dt[q]=Dt[Ie]=!1;var Xp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},qp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Kp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$p=parseFloat,Zp=parseInt,su=typeof ds=="object"&&ds&&ds.Object===Object&&ds,jp=typeof self=="object"&&self&&self.Object===Object&&self,an=su||jp||Function("return this")(),Vo=e&&!e.nodeType&&e,sr=Vo&&!0&&s&&!s.nodeType&&s,au=sr&&sr.exports===Vo,Wo=au&&su.process,Hn=function(){try{var W=sr&&sr.require&&sr.require("util").types;return W||Wo&&Wo.binding&&Wo.binding("util")}catch{}}(),ou=Hn&&Hn.isArrayBuffer,lu=Hn&&Hn.isDate,cu=Hn&&Hn.isMap,uu=Hn&&Hn.isRegExp,fu=Hn&&Hn.isSet,hu=Hn&&Hn.isTypedArray;function Dn(W,se,Q){switch(Q.length){case 0:return W.call(se);case 1:return W.call(se,Q[0]);case 2:return W.call(se,Q[0],Q[1]);case 3:return W.call(se,Q[0],Q[1],Q[2])}return W.apply(se,Q)}function Jp(W,se,Q,Le){for(var rt=-1,bt=W==null?0:W.length;++rt<bt;){var jt=W[rt];se(Le,jt,Q(jt),W)}return Le}function Vn(W,se){for(var Q=-1,Le=W==null?0:W.length;++Q<Le&&se(W[Q],Q,W)!==!1;);return W}function Qp(W,se){for(var Q=W==null?0:W.length;Q--&&se(W[Q],Q,W)!==!1;);return W}function du(W,se){for(var Q=-1,Le=W==null?0:W.length;++Q<Le;)if(!se(W[Q],Q,W))return!1;return!0}function Ni(W,se){for(var Q=-1,Le=W==null?0:W.length,rt=0,bt=[];++Q<Le;){var jt=W[Q];se(jt,Q,W)&&(bt[rt++]=jt)}return bt}function ha(W,se){var Q=W==null?0:W.length;return!!Q&&Nr(W,se,0)>-1}function ko(W,se,Q){for(var Le=-1,rt=W==null?0:W.length;++Le<rt;)if(Q(se,W[Le]))return!0;return!1}function zt(W,se){for(var Q=-1,Le=W==null?0:W.length,rt=Array(Le);++Q<Le;)rt[Q]=se(W[Q],Q,W);return rt}function Oi(W,se){for(var Q=-1,Le=se.length,rt=W.length;++Q<Le;)W[rt+Q]=se[Q];return W}function Xo(W,se,Q,Le){var rt=-1,bt=W==null?0:W.length;for(Le&&bt&&(Q=W[++rt]);++rt<bt;)Q=se(Q,W[rt],rt,W);return Q}function em(W,se,Q,Le){var rt=W==null?0:W.length;for(Le&&rt&&(Q=W[--rt]);rt--;)Q=se(Q,W[rt],rt,W);return Q}function qo(W,se){for(var Q=-1,Le=W==null?0:W.length;++Q<Le;)if(se(W[Q],Q,W))return!0;return!1}var tm=Yo("length");function nm(W){return W.split("")}function im(W){return W.match(la)||[]}function pu(W,se,Q){var Le;return Q(W,function(rt,bt,jt){if(se(rt,bt,jt))return Le=bt,!1}),Le}function da(W,se,Q,Le){for(var rt=W.length,bt=Q+(Le?1:-1);Le?bt--:++bt<rt;)if(se(W[bt],bt,W))return bt;return-1}function Nr(W,se,Q){return se===se?mm(W,se,Q):da(W,mu,Q)}function rm(W,se,Q,Le){for(var rt=Q-1,bt=W.length;++rt<bt;)if(Le(W[rt],se))return rt;return-1}function mu(W){return W!==W}function gu(W,se){var Q=W==null?0:W.length;return Q?$o(W,se)/Q:ue}function Yo(W){return function(se){return se==null?t:se[W]}}function Ko(W){return function(se){return W==null?t:W[se]}}function _u(W,se,Q,Le,rt){return rt(W,function(bt,jt,Pt){Q=Le?(Le=!1,bt):se(Q,bt,jt,Pt)}),Q}function sm(W,se){var Q=W.length;for(W.sort(se);Q--;)W[Q]=W[Q].value;return W}function $o(W,se){for(var Q,Le=-1,rt=W.length;++Le<rt;){var bt=se(W[Le]);bt!==t&&(Q=Q===t?bt:Q+bt)}return Q}function Zo(W,se){for(var Q=-1,Le=Array(W);++Q<W;)Le[Q]=se(Q);return Le}function am(W,se){return zt(se,function(Q){return[Q,W[Q]]})}function vu(W){return W&&W.slice(0,Eu(W)+1).replace(Rr,"")}function In(W){return function(se){return W(se)}}function jo(W,se){return zt(se,function(Q){return W[Q]})}function Ds(W,se){return W.has(se)}function xu(W,se){for(var Q=-1,Le=W.length;++Q<Le&&Nr(se,W[Q],0)>-1;);return Q}function Mu(W,se){for(var Q=W.length;Q--&&Nr(se,W[Q],0)>-1;);return Q}function om(W,se){for(var Q=W.length,Le=0;Q--;)W[Q]===se&&++Le;return Le}var lm=Ko(Xp),cm=Ko(qp);function um(W){return"\\"+Kp[W]}function fm(W,se){return W==null?t:W[se]}function Or(W){return Hp.test(W)}function hm(W){return Vp.test(W)}function dm(W){for(var se,Q=[];!(se=W.next()).done;)Q.push(se.value);return Q}function Jo(W){var se=-1,Q=Array(W.size);return W.forEach(function(Le,rt){Q[++se]=[rt,Le]}),Q}function Su(W,se){return function(Q){return W(se(Q))}}function Fi(W,se){for(var Q=-1,Le=W.length,rt=0,bt=[];++Q<Le;){var jt=W[Q];(jt===se||jt===p)&&(W[Q]=p,bt[rt++]=Q)}return bt}function pa(W){var se=-1,Q=Array(W.size);return W.forEach(function(Le){Q[++se]=Le}),Q}function pm(W){var se=-1,Q=Array(W.size);return W.forEach(function(Le){Q[++se]=[Le,Le]}),Q}function mm(W,se,Q){for(var Le=Q-1,rt=W.length;++Le<rt;)if(W[Le]===se)return Le;return-1}function gm(W,se,Q){for(var Le=Q+1;Le--;)if(W[Le]===se)return Le;return Le}function Fr(W){return Or(W)?vm(W):tm(W)}function Qn(W){return Or(W)?xm(W):nm(W)}function Eu(W){for(var se=W.length;se--&&Oo.test(W.charAt(se)););return se}var _m=Ko(Yp);function vm(W){for(var se=Ho.lastIndex=0;Ho.test(W);)++se;return se}function xm(W){return W.match(Ho)||[]}function Mm(W){return W.match(Gp)||[]}var Sm=function W(se){se=se==null?an:Br.defaults(an.Object(),se,Br.pick(an,Wp));var Q=se.Array,Le=se.Date,rt=se.Error,bt=se.Function,jt=se.Math,Pt=se.Object,Qo=se.RegExp,Em=se.String,Wn=se.TypeError,ma=Q.prototype,ym=bt.prototype,zr=Pt.prototype,ga=se["__core-js_shared__"],_a=ym.toString,Ct=zr.hasOwnProperty,Tm=0,yu=function(){var n=/[^.]+$/.exec(ga&&ga.keys&&ga.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),va=zr.toString,Am=_a.call(Pt),bm=an._,wm=Qo("^"+_a.call(Ct).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xa=au?se.Buffer:t,Bi=se.Symbol,Ma=se.Uint8Array,Tu=xa?xa.allocUnsafe:t,Sa=Su(Pt.getPrototypeOf,Pt),Au=Pt.create,bu=zr.propertyIsEnumerable,Ea=ma.splice,wu=Bi?Bi.isConcatSpreadable:t,Is=Bi?Bi.iterator:t,ar=Bi?Bi.toStringTag:t,ya=function(){try{var n=fr(Pt,"defineProperty");return n({},"",{}),n}catch{}}(),Rm=se.clearTimeout!==an.clearTimeout&&se.clearTimeout,Cm=Le&&Le.now!==an.Date.now&&Le.now,Lm=se.setTimeout!==an.setTimeout&&se.setTimeout,Ta=jt.ceil,Aa=jt.floor,el=Pt.getOwnPropertySymbols,Pm=xa?xa.isBuffer:t,Ru=se.isFinite,Dm=ma.join,Im=Su(Pt.keys,Pt),Jt=jt.max,un=jt.min,Um=Le.now,Nm=se.parseInt,Cu=jt.random,Om=ma.reverse,tl=fr(se,"DataView"),Us=fr(se,"Map"),nl=fr(se,"Promise"),Gr=fr(se,"Set"),Ns=fr(se,"WeakMap"),Os=fr(Pt,"create"),ba=Ns&&new Ns,Hr={},Fm=hr(tl),Bm=hr(Us),zm=hr(nl),Gm=hr(Gr),Hm=hr(Ns),wa=Bi?Bi.prototype:t,Fs=wa?wa.valueOf:t,Lu=wa?wa.toString:t;function E(n){if(Wt(n)&&!ot(n)&&!(n instanceof xt)){if(n instanceof kn)return n;if(Ct.call(n,"__wrapped__"))return Df(n)}return new kn(n)}var Vr=function(){function n(){}return function(r){if(!Ht(r))return{};if(Au)return Au(r);n.prototype=r;var l=new n;return n.prototype=t,l}}();function Ra(){}function kn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:Ve,evaluate:yt,interpolate:dt,variable:"",imports:{_:E}},E.prototype=Ra.prototype,E.prototype.constructor=E,kn.prototype=Vr(Ra.prototype),kn.prototype.constructor=kn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=me,this.__views__=[]}function Vm(){var n=new xt(this.__wrapped__);return n.__actions__=bn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=bn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=bn(this.__views__),n}function Wm(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function km(){var n=this.__wrapped__.value(),r=this.__dir__,l=ot(n),f=r<0,x=l?n.length:0,b=n_(0,x,this.__views__),N=b.start,B=b.end,k=B-N,oe=f?B:N-1,le=this.__iteratees__,fe=le.length,Ae=0,Oe=un(k,this.__takeCount__);if(!l||!f&&x==k&&Oe==k)return ef(n,this.__actions__);var Ke=[];e:for(;k--&&Ae<Oe;){oe+=r;for(var ft=-1,$e=n[oe];++ft<fe;){var _t=le[ft],Et=_t.iteratee,On=_t.type,vn=Et($e);if(On==ee)$e=vn;else if(!vn){if(On==G)continue e;break e}}Ke[Ae++]=$e}return Ke}xt.prototype=Vr(Ra.prototype),xt.prototype.constructor=xt;function or(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function Xm(){this.__data__=Os?Os(null):{},this.size=0}function qm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Ym(n){var r=this.__data__;if(Os){var l=r[n];return l===h?t:l}return Ct.call(r,n)?r[n]:t}function Km(n){var r=this.__data__;return Os?r[n]!==t:Ct.call(r,n)}function $m(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Os&&r===t?h:r,this}or.prototype.clear=Xm,or.prototype.delete=qm,or.prototype.get=Ym,or.prototype.has=Km,or.prototype.set=$m;function _i(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function Zm(){this.__data__=[],this.size=0}function jm(n){var r=this.__data__,l=Ca(r,n);if(l<0)return!1;var f=r.length-1;return l==f?r.pop():Ea.call(r,l,1),--this.size,!0}function Jm(n){var r=this.__data__,l=Ca(r,n);return l<0?t:r[l][1]}function Qm(n){return Ca(this.__data__,n)>-1}function eg(n,r){var l=this.__data__,f=Ca(l,n);return f<0?(++this.size,l.push([n,r])):l[f][1]=r,this}_i.prototype.clear=Zm,_i.prototype.delete=jm,_i.prototype.get=Jm,_i.prototype.has=Qm,_i.prototype.set=eg;function vi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function tg(){this.size=0,this.__data__={hash:new or,map:new(Us||_i),string:new or}}function ng(n){var r=Ha(this,n).delete(n);return this.size-=r?1:0,r}function ig(n){return Ha(this,n).get(n)}function rg(n){return Ha(this,n).has(n)}function sg(n,r){var l=Ha(this,n),f=l.size;return l.set(n,r),this.size+=l.size==f?0:1,this}vi.prototype.clear=tg,vi.prototype.delete=ng,vi.prototype.get=ig,vi.prototype.has=rg,vi.prototype.set=sg;function lr(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new vi;++r<l;)this.add(n[r])}function ag(n){return this.__data__.set(n,h),this}function og(n){return this.__data__.has(n)}lr.prototype.add=lr.prototype.push=ag,lr.prototype.has=og;function ei(n){var r=this.__data__=new _i(n);this.size=r.size}function lg(){this.__data__=new _i,this.size=0}function cg(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function ug(n){return this.__data__.get(n)}function fg(n){return this.__data__.has(n)}function hg(n,r){var l=this.__data__;if(l instanceof _i){var f=l.__data__;if(!Us||f.length<a-1)return f.push([n,r]),this.size=++l.size,this;l=this.__data__=new vi(f)}return l.set(n,r),this.size=l.size,this}ei.prototype.clear=lg,ei.prototype.delete=cg,ei.prototype.get=ug,ei.prototype.has=fg,ei.prototype.set=hg;function Pu(n,r){var l=ot(n),f=!l&&dr(n),x=!l&&!f&&Wi(n),b=!l&&!f&&!x&&qr(n),N=l||f||x||b,B=N?Zo(n.length,Em):[],k=B.length;for(var oe in n)(r||Ct.call(n,oe))&&!(N&&(oe=="length"||x&&(oe=="offset"||oe=="parent")||b&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Ei(oe,k)))&&B.push(oe);return B}function Du(n){var r=n.length;return r?n[dl(0,r-1)]:t}function dg(n,r){return Va(bn(n),cr(r,0,n.length))}function pg(n){return Va(bn(n))}function il(n,r,l){(l!==t&&!ti(n[r],l)||l===t&&!(r in n))&&xi(n,r,l)}function Bs(n,r,l){var f=n[r];(!(Ct.call(n,r)&&ti(f,l))||l===t&&!(r in n))&&xi(n,r,l)}function Ca(n,r){for(var l=n.length;l--;)if(ti(n[l][0],r))return l;return-1}function mg(n,r,l,f){return zi(n,function(x,b,N){r(f,x,l(x),N)}),f}function Iu(n,r){return n&&ui(r,tn(r),n)}function gg(n,r){return n&&ui(r,Rn(r),n)}function xi(n,r,l){r=="__proto__"&&ya?ya(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function rl(n,r){for(var l=-1,f=r.length,x=Q(f),b=n==null;++l<f;)x[l]=b?t:Bl(n,r[l]);return x}function cr(n,r,l){return n===n&&(l!==t&&(n=n<=l?n:l),r!==t&&(n=n>=r?n:r)),n}function Xn(n,r,l,f,x,b){var N,B=r&_,k=r&v,oe=r&M;if(l&&(N=x?l(n,f,x,b):l(n)),N!==t)return N;if(!Ht(n))return n;var le=ot(n);if(le){if(N=r_(n),!B)return bn(n,N)}else{var fe=fn(n),Ae=fe==q||fe==Vt;if(Wi(n))return rf(n,B);if(fe==Mt||fe==de||Ae&&!x){if(N=k||Ae?{}:yf(n),!B)return k?Yg(n,gg(N,n)):qg(n,Iu(N,n))}else{if(!Dt[fe])return x?n:{};N=s_(n,fe,B)}}b||(b=new ei);var Oe=b.get(n);if(Oe)return Oe;b.set(n,N),Jf(n)?n.forEach(function($e){N.add(Xn($e,r,l,$e,n,b))}):Zf(n)&&n.forEach(function($e,_t){N.set(_t,Xn($e,r,l,_t,n,b))});var Ke=oe?k?Tl:yl:k?Rn:tn,ft=le?t:Ke(n);return Vn(ft||n,function($e,_t){ft&&(_t=$e,$e=n[_t]),Bs(N,_t,Xn($e,r,l,_t,n,b))}),N}function _g(n){var r=tn(n);return function(l){return Uu(l,n,r)}}function Uu(n,r,l){var f=l.length;if(n==null)return!f;for(n=Pt(n);f--;){var x=l[f],b=r[x],N=n[x];if(N===t&&!(x in n)||!b(N))return!1}return!0}function Nu(n,r,l){if(typeof n!="function")throw new Wn(u);return Xs(function(){n.apply(t,l)},r)}function zs(n,r,l,f){var x=-1,b=ha,N=!0,B=n.length,k=[],oe=r.length;if(!B)return k;l&&(r=zt(r,In(l))),f?(b=ko,N=!1):r.length>=a&&(b=Ds,N=!1,r=new lr(r));e:for(;++x<B;){var le=n[x],fe=l==null?le:l(le);if(le=f||le!==0?le:0,N&&fe===fe){for(var Ae=oe;Ae--;)if(r[Ae]===fe)continue e;k.push(le)}else b(r,fe,f)||k.push(le)}return k}var zi=cf(ci),Ou=cf(al,!0);function vg(n,r){var l=!0;return zi(n,function(f,x,b){return l=!!r(f,x,b),l}),l}function La(n,r,l){for(var f=-1,x=n.length;++f<x;){var b=n[f],N=r(b);if(N!=null&&(B===t?N===N&&!Nn(N):l(N,B)))var B=N,k=b}return k}function xg(n,r,l,f){var x=n.length;for(l=ct(l),l<0&&(l=-l>x?0:x+l),f=f===t||f>x?x:ct(f),f<0&&(f+=x),f=l>f?0:eh(f);l<f;)n[l++]=r;return n}function Fu(n,r){var l=[];return zi(n,function(f,x,b){r(f,x,b)&&l.push(f)}),l}function on(n,r,l,f,x){var b=-1,N=n.length;for(l||(l=o_),x||(x=[]);++b<N;){var B=n[b];r>0&&l(B)?r>1?on(B,r-1,l,f,x):Oi(x,B):f||(x[x.length]=B)}return x}var sl=uf(),Bu=uf(!0);function ci(n,r){return n&&sl(n,r,tn)}function al(n,r){return n&&Bu(n,r,tn)}function Pa(n,r){return Ni(r,function(l){return yi(n[l])})}function ur(n,r){r=Hi(r,n);for(var l=0,f=r.length;n!=null&&l<f;)n=n[fi(r[l++])];return l&&l==f?n:t}function zu(n,r,l){var f=r(n);return ot(n)?f:Oi(f,l(n))}function gn(n){return n==null?n===t?ve:Fe:ar&&ar in Pt(n)?t_(n):p_(n)}function ol(n,r){return n>r}function Mg(n,r){return n!=null&&Ct.call(n,r)}function Sg(n,r){return n!=null&&r in Pt(n)}function Eg(n,r,l){return n>=un(r,l)&&n<Jt(r,l)}function ll(n,r,l){for(var f=l?ko:ha,x=n[0].length,b=n.length,N=b,B=Q(b),k=1/0,oe=[];N--;){var le=n[N];N&&r&&(le=zt(le,In(r))),k=un(le.length,k),B[N]=!l&&(r||x>=120&&le.length>=120)?new lr(N&&le):t}le=n[0];var fe=-1,Ae=B[0];e:for(;++fe<x&&oe.length<k;){var Oe=le[fe],Ke=r?r(Oe):Oe;if(Oe=l||Oe!==0?Oe:0,!(Ae?Ds(Ae,Ke):f(oe,Ke,l))){for(N=b;--N;){var ft=B[N];if(!(ft?Ds(ft,Ke):f(n[N],Ke,l)))continue e}Ae&&Ae.push(Ke),oe.push(Oe)}}return oe}function yg(n,r,l,f){return ci(n,function(x,b,N){r(f,l(x),b,N)}),f}function Gs(n,r,l){r=Hi(r,n),n=wf(n,r);var f=n==null?n:n[fi(Yn(r))];return f==null?t:Dn(f,n,l)}function Gu(n){return Wt(n)&&gn(n)==de}function Tg(n){return Wt(n)&&gn(n)==we}function Ag(n){return Wt(n)&&gn(n)==Pe}function Hs(n,r,l,f,x){return n===r?!0:n==null||r==null||!Wt(n)&&!Wt(r)?n!==n&&r!==r:bg(n,r,l,f,Hs,x)}function bg(n,r,l,f,x,b){var N=ot(n),B=ot(r),k=N?Re:fn(n),oe=B?Re:fn(r);k=k==de?Mt:k,oe=oe==de?Mt:oe;var le=k==Mt,fe=oe==Mt,Ae=k==oe;if(Ae&&Wi(n)){if(!Wi(r))return!1;N=!0,le=!1}if(Ae&&!le)return b||(b=new ei),N||qr(n)?Mf(n,r,l,f,x,b):Qg(n,r,k,l,f,x,b);if(!(l&y)){var Oe=le&&Ct.call(n,"__wrapped__"),Ke=fe&&Ct.call(r,"__wrapped__");if(Oe||Ke){var ft=Oe?n.value():n,$e=Ke?r.value():r;return b||(b=new ei),x(ft,$e,l,f,b)}}return Ae?(b||(b=new ei),e_(n,r,l,f,x,b)):!1}function wg(n){return Wt(n)&&fn(n)==De}function cl(n,r,l,f){var x=l.length,b=x,N=!f;if(n==null)return!b;for(n=Pt(n);x--;){var B=l[x];if(N&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++x<b;){B=l[x];var k=B[0],oe=n[k],le=B[1];if(N&&B[2]){if(oe===t&&!(k in n))return!1}else{var fe=new ei;if(f)var Ae=f(oe,le,k,n,r,fe);if(!(Ae===t?Hs(le,oe,y|w,f,fe):Ae))return!1}}return!0}function Hu(n){if(!Ht(n)||c_(n))return!1;var r=yi(n)?wm:J;return r.test(hr(n))}function Rg(n){return Wt(n)&&gn(n)==T}function Cg(n){return Wt(n)&&fn(n)==K}function Lg(n){return Wt(n)&&Ka(n.length)&&!!Ot[gn(n)]}function Vu(n){return typeof n=="function"?n:n==null?Cn:typeof n=="object"?ot(n)?Xu(n[0],n[1]):ku(n):fh(n)}function ul(n){if(!ks(n))return Im(n);var r=[];for(var l in Pt(n))Ct.call(n,l)&&l!="constructor"&&r.push(l);return r}function Pg(n){if(!Ht(n))return d_(n);var r=ks(n),l=[];for(var f in n)f=="constructor"&&(r||!Ct.call(n,f))||l.push(f);return l}function fl(n,r){return n<r}function Wu(n,r){var l=-1,f=wn(n)?Q(n.length):[];return zi(n,function(x,b,N){f[++l]=r(x,b,N)}),f}function ku(n){var r=bl(n);return r.length==1&&r[0][2]?Af(r[0][0],r[0][1]):function(l){return l===n||cl(l,n,r)}}function Xu(n,r){return Rl(n)&&Tf(r)?Af(fi(n),r):function(l){var f=Bl(l,n);return f===t&&f===r?zl(l,n):Hs(r,f,y|w)}}function Da(n,r,l,f,x){n!==r&&sl(r,function(b,N){if(x||(x=new ei),Ht(b))Dg(n,r,N,l,Da,f,x);else{var B=f?f(Ll(n,N),b,N+"",n,r,x):t;B===t&&(B=b),il(n,N,B)}},Rn)}function Dg(n,r,l,f,x,b,N){var B=Ll(n,l),k=Ll(r,l),oe=N.get(k);if(oe){il(n,l,oe);return}var le=b?b(B,k,l+"",n,r,N):t,fe=le===t;if(fe){var Ae=ot(k),Oe=!Ae&&Wi(k),Ke=!Ae&&!Oe&&qr(k);le=k,Ae||Oe||Ke?ot(B)?le=B:Xt(B)?le=bn(B):Oe?(fe=!1,le=rf(k,!0)):Ke?(fe=!1,le=sf(k,!0)):le=[]:qs(k)||dr(k)?(le=B,dr(B)?le=th(B):(!Ht(B)||yi(B))&&(le=yf(k))):fe=!1}fe&&(N.set(k,le),x(le,k,f,b,N),N.delete(k)),il(n,l,le)}function qu(n,r){var l=n.length;if(l)return r+=r<0?l:0,Ei(r,l)?n[r]:t}function Yu(n,r,l){r.length?r=zt(r,function(b){return ot(b)?function(N){return ur(N,b.length===1?b[0]:b)}:b}):r=[Cn];var f=-1;r=zt(r,In(Xe()));var x=Wu(n,function(b,N,B){var k=zt(r,function(oe){return oe(b)});return{criteria:k,index:++f,value:b}});return sm(x,function(b,N){return Xg(b,N,l)})}function Ig(n,r){return Ku(n,r,function(l,f){return zl(n,f)})}function Ku(n,r,l){for(var f=-1,x=r.length,b={};++f<x;){var N=r[f],B=ur(n,N);l(B,N)&&Vs(b,Hi(N,n),B)}return b}function Ug(n){return function(r){return ur(r,n)}}function hl(n,r,l,f){var x=f?rm:Nr,b=-1,N=r.length,B=n;for(n===r&&(r=bn(r)),l&&(B=zt(n,In(l)));++b<N;)for(var k=0,oe=r[b],le=l?l(oe):oe;(k=x(B,le,k,f))>-1;)B!==n&&Ea.call(B,k,1),Ea.call(n,k,1);return n}function $u(n,r){for(var l=n?r.length:0,f=l-1;l--;){var x=r[l];if(l==f||x!==b){var b=x;Ei(x)?Ea.call(n,x,1):gl(n,x)}}return n}function dl(n,r){return n+Aa(Cu()*(r-n+1))}function Ng(n,r,l,f){for(var x=-1,b=Jt(Ta((r-n)/(l||1)),0),N=Q(b);b--;)N[f?b:++x]=n,n+=l;return N}function pl(n,r){var l="";if(!n||r<1||r>re)return l;do r%2&&(l+=n),r=Aa(r/2),r&&(n+=n);while(r);return l}function pt(n,r){return Pl(bf(n,r,Cn),n+"")}function Og(n){return Du(Yr(n))}function Fg(n,r){var l=Yr(n);return Va(l,cr(r,0,l.length))}function Vs(n,r,l,f){if(!Ht(n))return n;r=Hi(r,n);for(var x=-1,b=r.length,N=b-1,B=n;B!=null&&++x<b;){var k=fi(r[x]),oe=l;if(k==="__proto__"||k==="constructor"||k==="prototype")return n;if(x!=N){var le=B[k];oe=f?f(le,k,B):t,oe===t&&(oe=Ht(le)?le:Ei(r[x+1])?[]:{})}Bs(B,k,oe),B=B[k]}return n}var Zu=ba?function(n,r){return ba.set(n,r),n}:Cn,Bg=ya?function(n,r){return ya(n,"toString",{configurable:!0,enumerable:!1,value:Hl(r),writable:!0})}:Cn;function zg(n){return Va(Yr(n))}function qn(n,r,l){var f=-1,x=n.length;r<0&&(r=-r>x?0:x+r),l=l>x?x:l,l<0&&(l+=x),x=r>l?0:l-r>>>0,r>>>=0;for(var b=Q(x);++f<x;)b[f]=n[f+r];return b}function Gg(n,r){var l;return zi(n,function(f,x,b){return l=r(f,x,b),!l}),!!l}function Ia(n,r,l){var f=0,x=n==null?f:n.length;if(typeof r=="number"&&r===r&&x<=Ze){for(;f<x;){var b=f+x>>>1,N=n[b];N!==null&&!Nn(N)&&(l?N<=r:N<r)?f=b+1:x=b}return x}return ml(n,r,Cn,l)}function ml(n,r,l,f){var x=0,b=n==null?0:n.length;if(b===0)return 0;r=l(r);for(var N=r!==r,B=r===null,k=Nn(r),oe=r===t;x<b;){var le=Aa((x+b)/2),fe=l(n[le]),Ae=fe!==t,Oe=fe===null,Ke=fe===fe,ft=Nn(fe);if(N)var $e=f||Ke;else oe?$e=Ke&&(f||Ae):B?$e=Ke&&Ae&&(f||!Oe):k?$e=Ke&&Ae&&!Oe&&(f||!ft):Oe||ft?$e=!1:$e=f?fe<=r:fe<r;$e?x=le+1:b=le}return un(b,Ee)}function ju(n,r){for(var l=-1,f=n.length,x=0,b=[];++l<f;){var N=n[l],B=r?r(N):N;if(!l||!ti(B,k)){var k=B;b[x++]=N===0?0:N}}return b}function Ju(n){return typeof n=="number"?n:Nn(n)?ue:+n}function Un(n){if(typeof n=="string")return n;if(ot(n))return zt(n,Un)+"";if(Nn(n))return Lu?Lu.call(n):"";var r=n+"";return r=="0"&&1/n==-ae?"-0":r}function Gi(n,r,l){var f=-1,x=ha,b=n.length,N=!0,B=[],k=B;if(l)N=!1,x=ko;else if(b>=a){var oe=r?null:jg(n);if(oe)return pa(oe);N=!1,x=Ds,k=new lr}else k=r?[]:B;e:for(;++f<b;){var le=n[f],fe=r?r(le):le;if(le=l||le!==0?le:0,N&&fe===fe){for(var Ae=k.length;Ae--;)if(k[Ae]===fe)continue e;r&&k.push(fe),B.push(le)}else x(k,fe,l)||(k!==B&&k.push(fe),B.push(le))}return B}function gl(n,r){return r=Hi(r,n),n=wf(n,r),n==null||delete n[fi(Yn(r))]}function Qu(n,r,l,f){return Vs(n,r,l(ur(n,r)),f)}function Ua(n,r,l,f){for(var x=n.length,b=f?x:-1;(f?b--:++b<x)&&r(n[b],b,n););return l?qn(n,f?0:b,f?b+1:x):qn(n,f?b+1:0,f?x:b)}function ef(n,r){var l=n;return l instanceof xt&&(l=l.value()),Xo(r,function(f,x){return x.func.apply(x.thisArg,Oi([f],x.args))},l)}function _l(n,r,l){var f=n.length;if(f<2)return f?Gi(n[0]):[];for(var x=-1,b=Q(f);++x<f;)for(var N=n[x],B=-1;++B<f;)B!=x&&(b[x]=zs(b[x]||N,n[B],r,l));return Gi(on(b,1),r,l)}function tf(n,r,l){for(var f=-1,x=n.length,b=r.length,N={};++f<x;){var B=f<b?r[f]:t;l(N,n[f],B)}return N}function vl(n){return Xt(n)?n:[]}function xl(n){return typeof n=="function"?n:Cn}function Hi(n,r){return ot(n)?n:Rl(n,r)?[n]:Pf(wt(n))}var Hg=pt;function Vi(n,r,l){var f=n.length;return l=l===t?f:l,!r&&l>=f?n:qn(n,r,l)}var nf=Rm||function(n){return an.clearTimeout(n)};function rf(n,r){if(r)return n.slice();var l=n.length,f=Tu?Tu(l):new n.constructor(l);return n.copy(f),f}function Ml(n){var r=new n.constructor(n.byteLength);return new Ma(r).set(new Ma(n)),r}function Vg(n,r){var l=r?Ml(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Wg(n){var r=new n.constructor(n.source,ua.exec(n));return r.lastIndex=n.lastIndex,r}function kg(n){return Fs?Pt(Fs.call(n)):{}}function sf(n,r){var l=r?Ml(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function af(n,r){if(n!==r){var l=n!==t,f=n===null,x=n===n,b=Nn(n),N=r!==t,B=r===null,k=r===r,oe=Nn(r);if(!B&&!oe&&!b&&n>r||b&&N&&k&&!B&&!oe||f&&N&&k||!l&&k||!x)return 1;if(!f&&!b&&!oe&&n<r||oe&&l&&x&&!f&&!b||B&&l&&x||!N&&x||!k)return-1}return 0}function Xg(n,r,l){for(var f=-1,x=n.criteria,b=r.criteria,N=x.length,B=l.length;++f<N;){var k=af(x[f],b[f]);if(k){if(f>=B)return k;var oe=l[f];return k*(oe=="desc"?-1:1)}}return n.index-r.index}function of(n,r,l,f){for(var x=-1,b=n.length,N=l.length,B=-1,k=r.length,oe=Jt(b-N,0),le=Q(k+oe),fe=!f;++B<k;)le[B]=r[B];for(;++x<N;)(fe||x<b)&&(le[l[x]]=n[x]);for(;oe--;)le[B++]=n[x++];return le}function lf(n,r,l,f){for(var x=-1,b=n.length,N=-1,B=l.length,k=-1,oe=r.length,le=Jt(b-B,0),fe=Q(le+oe),Ae=!f;++x<le;)fe[x]=n[x];for(var Oe=x;++k<oe;)fe[Oe+k]=r[k];for(;++N<B;)(Ae||x<b)&&(fe[Oe+l[N]]=n[x++]);return fe}function bn(n,r){var l=-1,f=n.length;for(r||(r=Q(f));++l<f;)r[l]=n[l];return r}function ui(n,r,l,f){var x=!l;l||(l={});for(var b=-1,N=r.length;++b<N;){var B=r[b],k=f?f(l[B],n[B],B,l,n):t;k===t&&(k=n[B]),x?xi(l,B,k):Bs(l,B,k)}return l}function qg(n,r){return ui(n,wl(n),r)}function Yg(n,r){return ui(n,Sf(n),r)}function Na(n,r){return function(l,f){var x=ot(l)?Jp:mg,b=r?r():{};return x(l,n,Xe(f,2),b)}}function Wr(n){return pt(function(r,l){var f=-1,x=l.length,b=x>1?l[x-1]:t,N=x>2?l[2]:t;for(b=n.length>3&&typeof b=="function"?(x--,b):t,N&&_n(l[0],l[1],N)&&(b=x<3?t:b,x=1),r=Pt(r);++f<x;){var B=l[f];B&&n(r,B,f,b)}return r})}function cf(n,r){return function(l,f){if(l==null)return l;if(!wn(l))return n(l,f);for(var x=l.length,b=r?x:-1,N=Pt(l);(r?b--:++b<x)&&f(N[b],b,N)!==!1;);return l}}function uf(n){return function(r,l,f){for(var x=-1,b=Pt(r),N=f(r),B=N.length;B--;){var k=N[n?B:++x];if(l(b[k],k,b)===!1)break}return r}}function Kg(n,r,l){var f=r&m,x=Ws(n);function b(){var N=this&&this!==an&&this instanceof b?x:n;return N.apply(f?l:this,arguments)}return b}function ff(n){return function(r){r=wt(r);var l=Or(r)?Qn(r):t,f=l?l[0]:r.charAt(0),x=l?Vi(l,1).join(""):r.slice(1);return f[n]()+x}}function kr(n){return function(r){return Xo(ch(lh(r).replace(Bp,"")),n,"")}}function Ws(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Vr(n.prototype),f=n.apply(l,r);return Ht(f)?f:l}}function $g(n,r,l){var f=Ws(n);function x(){for(var b=arguments.length,N=Q(b),B=b,k=Xr(x);B--;)N[B]=arguments[B];var oe=b<3&&N[0]!==k&&N[b-1]!==k?[]:Fi(N,k);if(b-=oe.length,b<l)return gf(n,r,Oa,x.placeholder,t,N,oe,t,t,l-b);var le=this&&this!==an&&this instanceof x?f:n;return Dn(le,this,N)}return x}function hf(n){return function(r,l,f){var x=Pt(r);if(!wn(r)){var b=Xe(l,3);r=tn(r),l=function(B){return b(x[B],B,x)}}var N=n(r,l,f);return N>-1?x[b?r[N]:N]:t}}function df(n){return Si(function(r){var l=r.length,f=l,x=kn.prototype.thru;for(n&&r.reverse();f--;){var b=r[f];if(typeof b!="function")throw new Wn(u);if(x&&!N&&Ga(b)=="wrapper")var N=new kn([],!0)}for(f=N?f:l;++f<l;){b=r[f];var B=Ga(b),k=B=="wrapper"?Al(b):t;k&&Cl(k[0])&&k[1]==(A|R|V|z)&&!k[4].length&&k[9]==1?N=N[Ga(k[0])].apply(N,k[3]):N=b.length==1&&Cl(b)?N[B]():N.thru(b)}return function(){var oe=arguments,le=oe[0];if(N&&oe.length==1&&ot(le))return N.plant(le).value();for(var fe=0,Ae=l?r[fe].apply(this,oe):le;++fe<l;)Ae=r[fe].call(this,Ae);return Ae}})}function Oa(n,r,l,f,x,b,N,B,k,oe){var le=r&A,fe=r&m,Ae=r&g,Oe=r&(R|I),Ke=r&X,ft=Ae?t:Ws(n);function $e(){for(var _t=arguments.length,Et=Q(_t),On=_t;On--;)Et[On]=arguments[On];if(Oe)var vn=Xr($e),Fn=om(Et,vn);if(f&&(Et=of(Et,f,x,Oe)),b&&(Et=lf(Et,b,N,Oe)),_t-=Fn,Oe&&_t<oe){var qt=Fi(Et,vn);return gf(n,r,Oa,$e.placeholder,l,Et,qt,B,k,oe-_t)}var ni=fe?l:this,Ai=Ae?ni[n]:n;return _t=Et.length,B?Et=m_(Et,B):Ke&&_t>1&&Et.reverse(),le&&k<_t&&(Et.length=k),this&&this!==an&&this instanceof $e&&(Ai=ft||Ws(Ai)),Ai.apply(ni,Et)}return $e}function pf(n,r){return function(l,f){return yg(l,n,r(f),{})}}function Fa(n,r){return function(l,f){var x;if(l===t&&f===t)return r;if(l!==t&&(x=l),f!==t){if(x===t)return f;typeof l=="string"||typeof f=="string"?(l=Un(l),f=Un(f)):(l=Ju(l),f=Ju(f)),x=n(l,f)}return x}}function Sl(n){return Si(function(r){return r=zt(r,In(Xe())),pt(function(l){var f=this;return n(r,function(x){return Dn(x,f,l)})})})}function Ba(n,r){r=r===t?" ":Un(r);var l=r.length;if(l<2)return l?pl(r,n):r;var f=pl(r,Ta(n/Fr(r)));return Or(r)?Vi(Qn(f),0,n).join(""):f.slice(0,n)}function Zg(n,r,l,f){var x=r&m,b=Ws(n);function N(){for(var B=-1,k=arguments.length,oe=-1,le=f.length,fe=Q(le+k),Ae=this&&this!==an&&this instanceof N?b:n;++oe<le;)fe[oe]=f[oe];for(;k--;)fe[oe++]=arguments[++B];return Dn(Ae,x?l:this,fe)}return N}function mf(n){return function(r,l,f){return f&&typeof f!="number"&&_n(r,l,f)&&(l=f=t),r=Ti(r),l===t?(l=r,r=0):l=Ti(l),f=f===t?r<l?1:-1:Ti(f),Ng(r,l,f,n)}}function za(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Kn(r),l=Kn(l)),n(r,l)}}function gf(n,r,l,f,x,b,N,B,k,oe){var le=r&R,fe=le?N:t,Ae=le?t:N,Oe=le?b:t,Ke=le?t:b;r|=le?V:F,r&=~(le?F:V),r&U||(r&=~(m|g));var ft=[n,r,x,Oe,fe,Ke,Ae,B,k,oe],$e=l.apply(t,ft);return Cl(n)&&Rf($e,ft),$e.placeholder=f,Cf($e,n,r)}function El(n){var r=jt[n];return function(l,f){if(l=Kn(l),f=f==null?0:un(ct(f),292),f&&Ru(l)){var x=(wt(l)+"e").split("e"),b=r(x[0]+"e"+(+x[1]+f));return x=(wt(b)+"e").split("e"),+(x[0]+"e"+(+x[1]-f))}return r(l)}}var jg=Gr&&1/pa(new Gr([,-0]))[1]==ae?function(n){return new Gr(n)}:kl;function _f(n){return function(r){var l=fn(r);return l==De?Jo(r):l==K?pm(r):am(r,n(r))}}function Mi(n,r,l,f,x,b,N,B){var k=r&g;if(!k&&typeof n!="function")throw new Wn(u);var oe=f?f.length:0;if(oe||(r&=~(V|F),f=x=t),N=N===t?N:Jt(ct(N),0),B=B===t?B:ct(B),oe-=x?x.length:0,r&F){var le=f,fe=x;f=x=t}var Ae=k?t:Al(n),Oe=[n,r,l,f,x,le,fe,b,N,B];if(Ae&&h_(Oe,Ae),n=Oe[0],r=Oe[1],l=Oe[2],f=Oe[3],x=Oe[4],B=Oe[9]=Oe[9]===t?k?0:n.length:Jt(Oe[9]-oe,0),!B&&r&(R|I)&&(r&=~(R|I)),!r||r==m)var Ke=Kg(n,r,l);else r==R||r==I?Ke=$g(n,r,B):(r==V||r==(m|V))&&!x.length?Ke=Zg(n,r,l,f):Ke=Oa.apply(t,Oe);var ft=Ae?Zu:Rf;return Cf(ft(Ke,Oe),n,r)}function vf(n,r,l,f){return n===t||ti(n,zr[l])&&!Ct.call(f,l)?r:n}function xf(n,r,l,f,x,b){return Ht(n)&&Ht(r)&&(b.set(r,n),Da(n,r,t,xf,b),b.delete(r)),n}function Jg(n){return qs(n)?t:n}function Mf(n,r,l,f,x,b){var N=l&y,B=n.length,k=r.length;if(B!=k&&!(N&&k>B))return!1;var oe=b.get(n),le=b.get(r);if(oe&&le)return oe==r&&le==n;var fe=-1,Ae=!0,Oe=l&w?new lr:t;for(b.set(n,r),b.set(r,n);++fe<B;){var Ke=n[fe],ft=r[fe];if(f)var $e=N?f(ft,Ke,fe,r,n,b):f(Ke,ft,fe,n,r,b);if($e!==t){if($e)continue;Ae=!1;break}if(Oe){if(!qo(r,function(_t,Et){if(!Ds(Oe,Et)&&(Ke===_t||x(Ke,_t,l,f,b)))return Oe.push(Et)})){Ae=!1;break}}else if(!(Ke===ft||x(Ke,ft,l,f,b))){Ae=!1;break}}return b.delete(n),b.delete(r),Ae}function Qg(n,r,l,f,x,b,N){switch(l){case Be:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case we:return!(n.byteLength!=r.byteLength||!b(new Ma(n),new Ma(r)));case Ge:case Pe:case ke:return ti(+n,+r);case je:return n.name==r.name&&n.message==r.message;case T:case _e:return n==r+"";case De:var B=Jo;case K:var k=f&y;if(B||(B=pa),n.size!=r.size&&!k)return!1;var oe=N.get(n);if(oe)return oe==r;f|=w,N.set(n,r);var le=Mf(B(n),B(r),f,x,b,N);return N.delete(n),le;case he:if(Fs)return Fs.call(n)==Fs.call(r)}return!1}function e_(n,r,l,f,x,b){var N=l&y,B=yl(n),k=B.length,oe=yl(r),le=oe.length;if(k!=le&&!N)return!1;for(var fe=k;fe--;){var Ae=B[fe];if(!(N?Ae in r:Ct.call(r,Ae)))return!1}var Oe=b.get(n),Ke=b.get(r);if(Oe&&Ke)return Oe==r&&Ke==n;var ft=!0;b.set(n,r),b.set(r,n);for(var $e=N;++fe<k;){Ae=B[fe];var _t=n[Ae],Et=r[Ae];if(f)var On=N?f(Et,_t,Ae,r,n,b):f(_t,Et,Ae,n,r,b);if(!(On===t?_t===Et||x(_t,Et,l,f,b):On)){ft=!1;break}$e||($e=Ae=="constructor")}if(ft&&!$e){var vn=n.constructor,Fn=r.constructor;vn!=Fn&&"constructor"in n&&"constructor"in r&&!(typeof vn=="function"&&vn instanceof vn&&typeof Fn=="function"&&Fn instanceof Fn)&&(ft=!1)}return b.delete(n),b.delete(r),ft}function Si(n){return Pl(bf(n,t,Nf),n+"")}function yl(n){return zu(n,tn,wl)}function Tl(n){return zu(n,Rn,Sf)}var Al=ba?function(n){return ba.get(n)}:kl;function Ga(n){for(var r=n.name+"",l=Hr[r],f=Ct.call(Hr,r)?l.length:0;f--;){var x=l[f],b=x.func;if(b==null||b==n)return x.name}return r}function Xr(n){var r=Ct.call(E,"placeholder")?E:n;return r.placeholder}function Xe(){var n=E.iteratee||Vl;return n=n===Vl?Vu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ha(n,r){var l=n.__data__;return l_(r)?l[typeof r=="string"?"string":"hash"]:l.map}function bl(n){for(var r=tn(n),l=r.length;l--;){var f=r[l],x=n[f];r[l]=[f,x,Tf(x)]}return r}function fr(n,r){var l=fm(n,r);return Hu(l)?l:t}function t_(n){var r=Ct.call(n,ar),l=n[ar];try{n[ar]=t;var f=!0}catch{}var x=va.call(n);return f&&(r?n[ar]=l:delete n[ar]),x}var wl=el?function(n){return n==null?[]:(n=Pt(n),Ni(el(n),function(r){return bu.call(n,r)}))}:Xl,Sf=el?function(n){for(var r=[];n;)Oi(r,wl(n)),n=Sa(n);return r}:Xl,fn=gn;(tl&&fn(new tl(new ArrayBuffer(1)))!=Be||Us&&fn(new Us)!=De||nl&&fn(nl.resolve())!=tt||Gr&&fn(new Gr)!=K||Ns&&fn(new Ns)!=Ie)&&(fn=function(n){var r=gn(n),l=r==Mt?n.constructor:t,f=l?hr(l):"";if(f)switch(f){case Fm:return Be;case Bm:return De;case zm:return tt;case Gm:return K;case Hm:return Ie}return r});function n_(n,r,l){for(var f=-1,x=l.length;++f<x;){var b=l[f],N=b.size;switch(b.type){case"drop":n+=N;break;case"dropRight":r-=N;break;case"take":r=un(r,n+N);break;case"takeRight":n=Jt(n,r-N);break}}return{start:n,end:r}}function i_(n){var r=n.match(oa);return r?r[1].split(Lr):[]}function Ef(n,r,l){r=Hi(r,n);for(var f=-1,x=r.length,b=!1;++f<x;){var N=fi(r[f]);if(!(b=n!=null&&l(n,N)))break;n=n[N]}return b||++f!=x?b:(x=n==null?0:n.length,!!x&&Ka(x)&&Ei(N,x)&&(ot(n)||dr(n)))}function r_(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&Ct.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function yf(n){return typeof n.constructor=="function"&&!ks(n)?Vr(Sa(n)):{}}function s_(n,r,l){var f=n.constructor;switch(r){case we:return Ml(n);case Ge:case Pe:return new f(+n);case Be:return Vg(n,l);case Qe:case pe:case St:case st:case Je:case ze:case be:case nt:case O:return sf(n,l);case De:return new f;case ke:case _e:return new f(n);case T:return Wg(n);case K:return new f;case he:return kg(n)}}function a_(n,r){var l=r.length;if(!l)return n;var f=l-1;return r[f]=(l>1?"& ":"")+r[f],r=r.join(l>2?", ":" "),n.replace(Cr,`{
/* [wrapped with `+r+`] */
`)}function o_(n){return ot(n)||dr(n)||!!(wu&&n&&n[wu])}function Ei(n,r){var l=typeof n;return r=r??re,!!r&&(l=="number"||l!="symbol"&&j.test(n))&&n>-1&&n%1==0&&n<r}function _n(n,r,l){if(!Ht(l))return!1;var f=typeof r;return(f=="number"?wn(l)&&Ei(r,l.length):f=="string"&&r in l)?ti(l[r],n):!1}function Rl(n,r){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:$t.test(n)||!Rt.test(n)||r!=null&&n in Pt(r)}function l_(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Cl(n){var r=Ga(n),l=E[r];if(typeof l!="function"||!(r in xt.prototype))return!1;if(n===l)return!0;var f=Al(l);return!!f&&n===f[0]}function c_(n){return!!yu&&yu in n}var u_=ga?yi:ql;function ks(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||zr;return n===l}function Tf(n){return n===n&&!Ht(n)}function Af(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==t||n in Pt(l))}}function f_(n){var r=qa(n,function(f){return l.size===d&&l.clear(),f}),l=r.cache;return r}function h_(n,r){var l=n[1],f=r[1],x=l|f,b=x<(m|g|A),N=f==A&&l==R||f==A&&l==z&&n[7].length<=r[8]||f==(A|z)&&r[7].length<=r[8]&&l==R;if(!(b||N))return n;f&m&&(n[2]=r[2],x|=l&m?0:U);var B=r[3];if(B){var k=n[3];n[3]=k?of(k,B,r[4]):B,n[4]=k?Fi(n[3],p):r[4]}return B=r[5],B&&(k=n[5],n[5]=k?lf(k,B,r[6]):B,n[6]=k?Fi(n[5],p):r[6]),B=r[7],B&&(n[7]=B),f&A&&(n[8]=n[8]==null?r[8]:un(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=x,n}function d_(n){var r=[];if(n!=null)for(var l in Pt(n))r.push(l);return r}function p_(n){return va.call(n)}function bf(n,r,l){return r=Jt(r===t?n.length-1:r,0),function(){for(var f=arguments,x=-1,b=Jt(f.length-r,0),N=Q(b);++x<b;)N[x]=f[r+x];x=-1;for(var B=Q(r+1);++x<r;)B[x]=f[x];return B[r]=l(N),Dn(n,this,B)}}function wf(n,r){return r.length<2?n:ur(n,qn(r,0,-1))}function m_(n,r){for(var l=n.length,f=un(r.length,l),x=bn(n);f--;){var b=r[f];n[f]=Ei(b,l)?x[b]:t}return n}function Ll(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Rf=Lf(Zu),Xs=Lm||function(n,r){return an.setTimeout(n,r)},Pl=Lf(Bg);function Cf(n,r,l){var f=r+"";return Pl(n,a_(f,g_(i_(f),l)))}function Lf(n){var r=0,l=0;return function(){var f=Um(),x=ie-(f-l);if(l=f,x>0){if(++r>=$)return arguments[0]}else r=0;return n.apply(t,arguments)}}function Va(n,r){var l=-1,f=n.length,x=f-1;for(r=r===t?f:r;++l<r;){var b=dl(l,x),N=n[b];n[b]=n[l],n[l]=N}return n.length=r,n}var Pf=f_(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Tt,function(l,f,x,b){r.push(x?b.replace(Fo,"$1"):f||l)}),r});function fi(n){if(typeof n=="string"||Nn(n))return n;var r=n+"";return r=="0"&&1/n==-ae?"-0":r}function hr(n){if(n!=null){try{return _a.call(n)}catch{}try{return n+""}catch{}}return""}function g_(n,r){return Vn(ne,function(l){var f="_."+l[0];r&l[1]&&!ha(n,f)&&n.push(f)}),n.sort()}function Df(n){if(n instanceof xt)return n.clone();var r=new kn(n.__wrapped__,n.__chain__);return r.__actions__=bn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function __(n,r,l){(l?_n(n,r,l):r===t)?r=1:r=Jt(ct(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var x=0,b=0,N=Q(Ta(f/r));x<f;)N[b++]=qn(n,x,x+=r);return N}function v_(n){for(var r=-1,l=n==null?0:n.length,f=0,x=[];++r<l;){var b=n[r];b&&(x[f++]=b)}return x}function x_(){var n=arguments.length;if(!n)return[];for(var r=Q(n-1),l=arguments[0],f=n;f--;)r[f-1]=arguments[f];return Oi(ot(l)?bn(l):[l],on(r,1))}var M_=pt(function(n,r){return Xt(n)?zs(n,on(r,1,Xt,!0)):[]}),S_=pt(function(n,r){var l=Yn(r);return Xt(l)&&(l=t),Xt(n)?zs(n,on(r,1,Xt,!0),Xe(l,2)):[]}),E_=pt(function(n,r){var l=Yn(r);return Xt(l)&&(l=t),Xt(n)?zs(n,on(r,1,Xt,!0),t,l):[]});function y_(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),qn(n,r<0?0:r,f)):[]}function T_(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),r=f-r,qn(n,0,r<0?0:r)):[]}function A_(n,r){return n&&n.length?Ua(n,Xe(r,3),!0,!0):[]}function b_(n,r){return n&&n.length?Ua(n,Xe(r,3),!0):[]}function w_(n,r,l,f){var x=n==null?0:n.length;return x?(l&&typeof l!="number"&&_n(n,r,l)&&(l=0,f=x),xg(n,r,l,f)):[]}function If(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(f+x,0)),da(n,Xe(r,3),x)}function Uf(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=f-1;return l!==t&&(x=ct(l),x=l<0?Jt(f+x,0):un(x,f-1)),da(n,Xe(r,3),x,!0)}function Nf(n){var r=n==null?0:n.length;return r?on(n,1):[]}function R_(n){var r=n==null?0:n.length;return r?on(n,ae):[]}function C_(n,r){var l=n==null?0:n.length;return l?(r=r===t?1:ct(r),on(n,r)):[]}function L_(n){for(var r=-1,l=n==null?0:n.length,f={};++r<l;){var x=n[r];f[x[0]]=x[1]}return f}function Of(n){return n&&n.length?n[0]:t}function P_(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(f+x,0)),Nr(n,r,x)}function D_(n){var r=n==null?0:n.length;return r?qn(n,0,-1):[]}var I_=pt(function(n){var r=zt(n,vl);return r.length&&r[0]===n[0]?ll(r):[]}),U_=pt(function(n){var r=Yn(n),l=zt(n,vl);return r===Yn(l)?r=t:l.pop(),l.length&&l[0]===n[0]?ll(l,Xe(r,2)):[]}),N_=pt(function(n){var r=Yn(n),l=zt(n,vl);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===n[0]?ll(l,t,r):[]});function O_(n,r){return n==null?"":Dm.call(n,r)}function Yn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function F_(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=f;return l!==t&&(x=ct(l),x=x<0?Jt(f+x,0):un(x,f-1)),r===r?gm(n,r,x):da(n,mu,x,!0)}function B_(n,r){return n&&n.length?qu(n,ct(r)):t}var z_=pt(Ff);function Ff(n,r){return n&&n.length&&r&&r.length?hl(n,r):n}function G_(n,r,l){return n&&n.length&&r&&r.length?hl(n,r,Xe(l,2)):n}function H_(n,r,l){return n&&n.length&&r&&r.length?hl(n,r,t,l):n}var V_=Si(function(n,r){var l=n==null?0:n.length,f=rl(n,r);return $u(n,zt(r,function(x){return Ei(x,l)?+x:x}).sort(af)),f});function W_(n,r){var l=[];if(!(n&&n.length))return l;var f=-1,x=[],b=n.length;for(r=Xe(r,3);++f<b;){var N=n[f];r(N,f,n)&&(l.push(N),x.push(f))}return $u(n,x),l}function Dl(n){return n==null?n:Om.call(n)}function k_(n,r,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&_n(n,r,l)?(r=0,l=f):(r=r==null?0:ct(r),l=l===t?f:ct(l)),qn(n,r,l)):[]}function X_(n,r){return Ia(n,r)}function q_(n,r,l){return ml(n,r,Xe(l,2))}function Y_(n,r){var l=n==null?0:n.length;if(l){var f=Ia(n,r);if(f<l&&ti(n[f],r))return f}return-1}function K_(n,r){return Ia(n,r,!0)}function $_(n,r,l){return ml(n,r,Xe(l,2),!0)}function Z_(n,r){var l=n==null?0:n.length;if(l){var f=Ia(n,r,!0)-1;if(ti(n[f],r))return f}return-1}function j_(n){return n&&n.length?ju(n):[]}function J_(n,r){return n&&n.length?ju(n,Xe(r,2)):[]}function Q_(n){var r=n==null?0:n.length;return r?qn(n,1,r):[]}function e0(n,r,l){return n&&n.length?(r=l||r===t?1:ct(r),qn(n,0,r<0?0:r)):[]}function t0(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),r=f-r,qn(n,r<0?0:r,f)):[]}function n0(n,r){return n&&n.length?Ua(n,Xe(r,3),!1,!0):[]}function i0(n,r){return n&&n.length?Ua(n,Xe(r,3)):[]}var r0=pt(function(n){return Gi(on(n,1,Xt,!0))}),s0=pt(function(n){var r=Yn(n);return Xt(r)&&(r=t),Gi(on(n,1,Xt,!0),Xe(r,2))}),a0=pt(function(n){var r=Yn(n);return r=typeof r=="function"?r:t,Gi(on(n,1,Xt,!0),t,r)});function o0(n){return n&&n.length?Gi(n):[]}function l0(n,r){return n&&n.length?Gi(n,Xe(r,2)):[]}function c0(n,r){return r=typeof r=="function"?r:t,n&&n.length?Gi(n,t,r):[]}function Il(n){if(!(n&&n.length))return[];var r=0;return n=Ni(n,function(l){if(Xt(l))return r=Jt(l.length,r),!0}),Zo(r,function(l){return zt(n,Yo(l))})}function Bf(n,r){if(!(n&&n.length))return[];var l=Il(n);return r==null?l:zt(l,function(f){return Dn(r,t,f)})}var u0=pt(function(n,r){return Xt(n)?zs(n,r):[]}),f0=pt(function(n){return _l(Ni(n,Xt))}),h0=pt(function(n){var r=Yn(n);return Xt(r)&&(r=t),_l(Ni(n,Xt),Xe(r,2))}),d0=pt(function(n){var r=Yn(n);return r=typeof r=="function"?r:t,_l(Ni(n,Xt),t,r)}),p0=pt(Il);function m0(n,r){return tf(n||[],r||[],Bs)}function g0(n,r){return tf(n||[],r||[],Vs)}var _0=pt(function(n){var r=n.length,l=r>1?n[r-1]:t;return l=typeof l=="function"?(n.pop(),l):t,Bf(n,l)});function zf(n){var r=E(n);return r.__chain__=!0,r}function v0(n,r){return r(n),n}function Wa(n,r){return r(n)}var x0=Si(function(n){var r=n.length,l=r?n[0]:0,f=this.__wrapped__,x=function(b){return rl(b,n)};return r>1||this.__actions__.length||!(f instanceof xt)||!Ei(l)?this.thru(x):(f=f.slice(l,+l+(r?1:0)),f.__actions__.push({func:Wa,args:[x],thisArg:t}),new kn(f,this.__chain__).thru(function(b){return r&&!b.length&&b.push(t),b}))});function M0(){return zf(this)}function S0(){return new kn(this.value(),this.__chain__)}function E0(){this.__values__===t&&(this.__values__=Qf(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function y0(){return this}function T0(n){for(var r,l=this;l instanceof Ra;){var f=Df(l);f.__index__=0,f.__values__=t,r?x.__wrapped__=f:r=f;var x=f;l=l.__wrapped__}return x.__wrapped__=n,r}function A0(){var n=this.__wrapped__;if(n instanceof xt){var r=n;return this.__actions__.length&&(r=new xt(this)),r=r.reverse(),r.__actions__.push({func:Wa,args:[Dl],thisArg:t}),new kn(r,this.__chain__)}return this.thru(Dl)}function b0(){return ef(this.__wrapped__,this.__actions__)}var w0=Na(function(n,r,l){Ct.call(n,l)?++n[l]:xi(n,l,1)});function R0(n,r,l){var f=ot(n)?du:vg;return l&&_n(n,r,l)&&(r=t),f(n,Xe(r,3))}function C0(n,r){var l=ot(n)?Ni:Fu;return l(n,Xe(r,3))}var L0=hf(If),P0=hf(Uf);function D0(n,r){return on(ka(n,r),1)}function I0(n,r){return on(ka(n,r),ae)}function U0(n,r,l){return l=l===t?1:ct(l),on(ka(n,r),l)}function Gf(n,r){var l=ot(n)?Vn:zi;return l(n,Xe(r,3))}function Hf(n,r){var l=ot(n)?Qp:Ou;return l(n,Xe(r,3))}var N0=Na(function(n,r,l){Ct.call(n,l)?n[l].push(r):xi(n,l,[r])});function O0(n,r,l,f){n=wn(n)?n:Yr(n),l=l&&!f?ct(l):0;var x=n.length;return l<0&&(l=Jt(x+l,0)),$a(n)?l<=x&&n.indexOf(r,l)>-1:!!x&&Nr(n,r,l)>-1}var F0=pt(function(n,r,l){var f=-1,x=typeof r=="function",b=wn(n)?Q(n.length):[];return zi(n,function(N){b[++f]=x?Dn(r,N,l):Gs(N,r,l)}),b}),B0=Na(function(n,r,l){xi(n,l,r)});function ka(n,r){var l=ot(n)?zt:Wu;return l(n,Xe(r,3))}function z0(n,r,l,f){return n==null?[]:(ot(r)||(r=r==null?[]:[r]),l=f?t:l,ot(l)||(l=l==null?[]:[l]),Yu(n,r,l))}var G0=Na(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function H0(n,r,l){var f=ot(n)?Xo:_u,x=arguments.length<3;return f(n,Xe(r,4),l,x,zi)}function V0(n,r,l){var f=ot(n)?em:_u,x=arguments.length<3;return f(n,Xe(r,4),l,x,Ou)}function W0(n,r){var l=ot(n)?Ni:Fu;return l(n,Ya(Xe(r,3)))}function k0(n){var r=ot(n)?Du:Og;return r(n)}function X0(n,r,l){(l?_n(n,r,l):r===t)?r=1:r=ct(r);var f=ot(n)?dg:Fg;return f(n,r)}function q0(n){var r=ot(n)?pg:zg;return r(n)}function Y0(n){if(n==null)return 0;if(wn(n))return $a(n)?Fr(n):n.length;var r=fn(n);return r==De||r==K?n.size:ul(n).length}function K0(n,r,l){var f=ot(n)?qo:Gg;return l&&_n(n,r,l)&&(r=t),f(n,Xe(r,3))}var $0=pt(function(n,r){if(n==null)return[];var l=r.length;return l>1&&_n(n,r[0],r[1])?r=[]:l>2&&_n(r[0],r[1],r[2])&&(r=[r[0]]),Yu(n,on(r,1),[])}),Xa=Cm||function(){return an.Date.now()};function Z0(n,r){if(typeof r!="function")throw new Wn(u);return n=ct(n),function(){if(--n<1)return r.apply(this,arguments)}}function Vf(n,r,l){return r=l?t:r,r=n&&r==null?n.length:r,Mi(n,A,t,t,t,t,r)}function Wf(n,r){var l;if(typeof r!="function")throw new Wn(u);return n=ct(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=t),l}}var Ul=pt(function(n,r,l){var f=m;if(l.length){var x=Fi(l,Xr(Ul));f|=V}return Mi(n,f,r,l,x)}),kf=pt(function(n,r,l){var f=m|g;if(l.length){var x=Fi(l,Xr(kf));f|=V}return Mi(r,f,n,l,x)});function Xf(n,r,l){r=l?t:r;var f=Mi(n,R,t,t,t,t,t,r);return f.placeholder=Xf.placeholder,f}function qf(n,r,l){r=l?t:r;var f=Mi(n,I,t,t,t,t,t,r);return f.placeholder=qf.placeholder,f}function Yf(n,r,l){var f,x,b,N,B,k,oe=0,le=!1,fe=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);r=Kn(r)||0,Ht(l)&&(le=!!l.leading,fe="maxWait"in l,b=fe?Jt(Kn(l.maxWait)||0,r):b,Ae="trailing"in l?!!l.trailing:Ae);function Oe(qt){var ni=f,Ai=x;return f=x=t,oe=qt,N=n.apply(Ai,ni),N}function Ke(qt){return oe=qt,B=Xs(_t,r),le?Oe(qt):N}function ft(qt){var ni=qt-k,Ai=qt-oe,hh=r-ni;return fe?un(hh,b-Ai):hh}function $e(qt){var ni=qt-k,Ai=qt-oe;return k===t||ni>=r||ni<0||fe&&Ai>=b}function _t(){var qt=Xa();if($e(qt))return Et(qt);B=Xs(_t,ft(qt))}function Et(qt){return B=t,Ae&&f?Oe(qt):(f=x=t,N)}function On(){B!==t&&nf(B),oe=0,f=k=x=B=t}function vn(){return B===t?N:Et(Xa())}function Fn(){var qt=Xa(),ni=$e(qt);if(f=arguments,x=this,k=qt,ni){if(B===t)return Ke(k);if(fe)return nf(B),B=Xs(_t,r),Oe(k)}return B===t&&(B=Xs(_t,r)),N}return Fn.cancel=On,Fn.flush=vn,Fn}var j0=pt(function(n,r){return Nu(n,1,r)}),J0=pt(function(n,r,l){return Nu(n,Kn(r)||0,l)});function Q0(n){return Mi(n,X)}function qa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Wn(u);var l=function(){var f=arguments,x=r?r.apply(this,f):f[0],b=l.cache;if(b.has(x))return b.get(x);var N=n.apply(this,f);return l.cache=b.set(x,N)||b,N};return l.cache=new(qa.Cache||vi),l}qa.Cache=vi;function Ya(n){if(typeof n!="function")throw new Wn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function ev(n){return Wf(2,n)}var tv=Hg(function(n,r){r=r.length==1&&ot(r[0])?zt(r[0],In(Xe())):zt(on(r,1),In(Xe()));var l=r.length;return pt(function(f){for(var x=-1,b=un(f.length,l);++x<b;)f[x]=r[x].call(this,f[x]);return Dn(n,this,f)})}),Nl=pt(function(n,r){var l=Fi(r,Xr(Nl));return Mi(n,V,t,r,l)}),Kf=pt(function(n,r){var l=Fi(r,Xr(Kf));return Mi(n,F,t,r,l)}),nv=Si(function(n,r){return Mi(n,z,t,t,t,r)});function iv(n,r){if(typeof n!="function")throw new Wn(u);return r=r===t?r:ct(r),pt(n,r)}function rv(n,r){if(typeof n!="function")throw new Wn(u);return r=r==null?0:Jt(ct(r),0),pt(function(l){var f=l[r],x=Vi(l,0,r);return f&&Oi(x,f),Dn(n,this,x)})}function sv(n,r,l){var f=!0,x=!0;if(typeof n!="function")throw new Wn(u);return Ht(l)&&(f="leading"in l?!!l.leading:f,x="trailing"in l?!!l.trailing:x),Yf(n,r,{leading:f,maxWait:r,trailing:x})}function av(n){return Vf(n,1)}function ov(n,r){return Nl(xl(r),n)}function lv(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function cv(n){return Xn(n,M)}function uv(n,r){return r=typeof r=="function"?r:t,Xn(n,M,r)}function fv(n){return Xn(n,_|M)}function hv(n,r){return r=typeof r=="function"?r:t,Xn(n,_|M,r)}function dv(n,r){return r==null||Uu(n,r,tn(r))}function ti(n,r){return n===r||n!==n&&r!==r}var pv=za(ol),mv=za(function(n,r){return n>=r}),dr=Gu(function(){return arguments}())?Gu:function(n){return Wt(n)&&Ct.call(n,"callee")&&!bu.call(n,"callee")},ot=Q.isArray,gv=ou?In(ou):Tg;function wn(n){return n!=null&&Ka(n.length)&&!yi(n)}function Xt(n){return Wt(n)&&wn(n)}function _v(n){return n===!0||n===!1||Wt(n)&&gn(n)==Ge}var Wi=Pm||ql,vv=lu?In(lu):Ag;function xv(n){return Wt(n)&&n.nodeType===1&&!qs(n)}function Mv(n){if(n==null)return!0;if(wn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||Wi(n)||qr(n)||dr(n)))return!n.length;var r=fn(n);if(r==De||r==K)return!n.size;if(ks(n))return!ul(n).length;for(var l in n)if(Ct.call(n,l))return!1;return!0}function Sv(n,r){return Hs(n,r)}function Ev(n,r,l){l=typeof l=="function"?l:t;var f=l?l(n,r):t;return f===t?Hs(n,r,t,l):!!f}function Ol(n){if(!Wt(n))return!1;var r=gn(n);return r==je||r==vt||typeof n.message=="string"&&typeof n.name=="string"&&!qs(n)}function yv(n){return typeof n=="number"&&Ru(n)}function yi(n){if(!Ht(n))return!1;var r=gn(n);return r==q||r==Vt||r==We||r==P}function $f(n){return typeof n=="number"&&n==ct(n)}function Ka(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=re}function Ht(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Wt(n){return n!=null&&typeof n=="object"}var Zf=cu?In(cu):wg;function Tv(n,r){return n===r||cl(n,r,bl(r))}function Av(n,r,l){return l=typeof l=="function"?l:t,cl(n,r,bl(r),l)}function bv(n){return jf(n)&&n!=+n}function wv(n){if(u_(n))throw new rt(o);return Hu(n)}function Rv(n){return n===null}function Cv(n){return n==null}function jf(n){return typeof n=="number"||Wt(n)&&gn(n)==ke}function qs(n){if(!Wt(n)||gn(n)!=Mt)return!1;var r=Sa(n);if(r===null)return!0;var l=Ct.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&_a.call(l)==Am}var Fl=uu?In(uu):Rg;function Lv(n){return $f(n)&&n>=-re&&n<=re}var Jf=fu?In(fu):Cg;function $a(n){return typeof n=="string"||!ot(n)&&Wt(n)&&gn(n)==_e}function Nn(n){return typeof n=="symbol"||Wt(n)&&gn(n)==he}var qr=hu?In(hu):Lg;function Pv(n){return n===t}function Dv(n){return Wt(n)&&fn(n)==Ie}function Iv(n){return Wt(n)&&gn(n)==ye}var Uv=za(fl),Nv=za(function(n,r){return n<=r});function Qf(n){if(!n)return[];if(wn(n))return $a(n)?Qn(n):bn(n);if(Is&&n[Is])return dm(n[Is]());var r=fn(n),l=r==De?Jo:r==K?pa:Yr;return l(n)}function Ti(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ae||n===-ae){var r=n<0?-1:1;return r*ce}return n===n?n:0}function ct(n){var r=Ti(n),l=r%1;return r===r?l?r-l:r:0}function eh(n){return n?cr(ct(n),0,me):0}function Kn(n){if(typeof n=="number")return n;if(Nn(n))return ue;if(Ht(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ht(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=vu(n);var l=Y.test(n);return l||te.test(n)?Zp(n.slice(2),l?2:8):C.test(n)?ue:+n}function th(n){return ui(n,Rn(n))}function Ov(n){return n?cr(ct(n),-re,re):n===0?n:0}function wt(n){return n==null?"":Un(n)}var Fv=Wr(function(n,r){if(ks(r)||wn(r)){ui(r,tn(r),n);return}for(var l in r)Ct.call(r,l)&&Bs(n,l,r[l])}),nh=Wr(function(n,r){ui(r,Rn(r),n)}),Za=Wr(function(n,r,l,f){ui(r,Rn(r),n,f)}),Bv=Wr(function(n,r,l,f){ui(r,tn(r),n,f)}),zv=Si(rl);function Gv(n,r){var l=Vr(n);return r==null?l:Iu(l,r)}var Hv=pt(function(n,r){n=Pt(n);var l=-1,f=r.length,x=f>2?r[2]:t;for(x&&_n(r[0],r[1],x)&&(f=1);++l<f;)for(var b=r[l],N=Rn(b),B=-1,k=N.length;++B<k;){var oe=N[B],le=n[oe];(le===t||ti(le,zr[oe])&&!Ct.call(n,oe))&&(n[oe]=b[oe])}return n}),Vv=pt(function(n){return n.push(t,xf),Dn(ih,t,n)});function Wv(n,r){return pu(n,Xe(r,3),ci)}function kv(n,r){return pu(n,Xe(r,3),al)}function Xv(n,r){return n==null?n:sl(n,Xe(r,3),Rn)}function qv(n,r){return n==null?n:Bu(n,Xe(r,3),Rn)}function Yv(n,r){return n&&ci(n,Xe(r,3))}function Kv(n,r){return n&&al(n,Xe(r,3))}function $v(n){return n==null?[]:Pa(n,tn(n))}function Zv(n){return n==null?[]:Pa(n,Rn(n))}function Bl(n,r,l){var f=n==null?t:ur(n,r);return f===t?l:f}function jv(n,r){return n!=null&&Ef(n,r,Mg)}function zl(n,r){return n!=null&&Ef(n,r,Sg)}var Jv=pf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=va.call(r)),n[r]=l},Hl(Cn)),Qv=pf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=va.call(r)),Ct.call(n,r)?n[r].push(l):n[r]=[l]},Xe),ex=pt(Gs);function tn(n){return wn(n)?Pu(n):ul(n)}function Rn(n){return wn(n)?Pu(n,!0):Pg(n)}function tx(n,r){var l={};return r=Xe(r,3),ci(n,function(f,x,b){xi(l,r(f,x,b),f)}),l}function nx(n,r){var l={};return r=Xe(r,3),ci(n,function(f,x,b){xi(l,x,r(f,x,b))}),l}var ix=Wr(function(n,r,l){Da(n,r,l)}),ih=Wr(function(n,r,l,f){Da(n,r,l,f)}),rx=Si(function(n,r){var l={};if(n==null)return l;var f=!1;r=zt(r,function(b){return b=Hi(b,n),f||(f=b.length>1),b}),ui(n,Tl(n),l),f&&(l=Xn(l,_|v|M,Jg));for(var x=r.length;x--;)gl(l,r[x]);return l});function sx(n,r){return rh(n,Ya(Xe(r)))}var ax=Si(function(n,r){return n==null?{}:Ig(n,r)});function rh(n,r){if(n==null)return{};var l=zt(Tl(n),function(f){return[f]});return r=Xe(r),Ku(n,l,function(f,x){return r(f,x[0])})}function ox(n,r,l){r=Hi(r,n);var f=-1,x=r.length;for(x||(x=1,n=t);++f<x;){var b=n==null?t:n[fi(r[f])];b===t&&(f=x,b=l),n=yi(b)?b.call(n):b}return n}function lx(n,r,l){return n==null?n:Vs(n,r,l)}function cx(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:Vs(n,r,l,f)}var sh=_f(tn),ah=_f(Rn);function ux(n,r,l){var f=ot(n),x=f||Wi(n)||qr(n);if(r=Xe(r,4),l==null){var b=n&&n.constructor;x?l=f?new b:[]:Ht(n)?l=yi(b)?Vr(Sa(n)):{}:l={}}return(x?Vn:ci)(n,function(N,B,k){return r(l,N,B,k)}),l}function fx(n,r){return n==null?!0:gl(n,r)}function hx(n,r,l){return n==null?n:Qu(n,r,xl(l))}function dx(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:Qu(n,r,xl(l),f)}function Yr(n){return n==null?[]:jo(n,tn(n))}function px(n){return n==null?[]:jo(n,Rn(n))}function mx(n,r,l){return l===t&&(l=r,r=t),l!==t&&(l=Kn(l),l=l===l?l:0),r!==t&&(r=Kn(r),r=r===r?r:0),cr(Kn(n),r,l)}function gx(n,r,l){return r=Ti(r),l===t?(l=r,r=0):l=Ti(l),n=Kn(n),Eg(n,r,l)}function _x(n,r,l){if(l&&typeof l!="boolean"&&_n(n,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Ti(n),r===t?(r=n,n=0):r=Ti(r)),n>r){var f=n;n=r,r=f}if(l||n%1||r%1){var x=Cu();return un(n+x*(r-n+$p("1e-"+((x+"").length-1))),r)}return dl(n,r)}var vx=kr(function(n,r,l){return r=r.toLowerCase(),n+(l?oh(r):r)});function oh(n){return Gl(wt(n).toLowerCase())}function lh(n){return n=wt(n),n&&n.replace(Ce,lm).replace(zp,"")}function xx(n,r,l){n=wt(n),r=Un(r);var f=n.length;l=l===t?f:cr(ct(l),0,f);var x=l;return l-=r.length,l>=0&&n.slice(l,x)==r}function Mx(n){return n=wt(n),n&&Ue.test(n)?n.replace(xe,cm):n}function Sx(n){return n=wt(n),n&&sn.test(n)?n.replace(It,"\\$&"):n}var Ex=kr(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),yx=kr(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),Tx=ff("toLowerCase");function Ax(n,r,l){n=wt(n),r=ct(r);var f=r?Fr(n):0;if(!r||f>=r)return n;var x=(r-f)/2;return Ba(Aa(x),l)+n+Ba(Ta(x),l)}function bx(n,r,l){n=wt(n),r=ct(r);var f=r?Fr(n):0;return r&&f<r?n+Ba(r-f,l):n}function wx(n,r,l){n=wt(n),r=ct(r);var f=r?Fr(n):0;return r&&f<r?Ba(r-f,l)+n:n}function Rx(n,r,l){return l||r==null?r=0:r&&(r=+r),Nm(wt(n).replace(Rr,""),r||0)}function Cx(n,r,l){return(l?_n(n,r,l):r===t)?r=1:r=ct(r),pl(wt(n),r)}function Lx(){var n=arguments,r=wt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Px=kr(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function Dx(n,r,l){return l&&typeof l!="number"&&_n(n,r,l)&&(r=l=t),l=l===t?me:l>>>0,l?(n=wt(n),n&&(typeof r=="string"||r!=null&&!Fl(r))&&(r=Un(r),!r&&Or(n))?Vi(Qn(n),0,l):n.split(r,l)):[]}var Ix=kr(function(n,r,l){return n+(l?" ":"")+Gl(r)});function Ux(n,r,l){return n=wt(n),l=l==null?0:cr(ct(l),0,n.length),r=Un(r),n.slice(l,l+r.length)==r}function Nx(n,r,l){var f=E.templateSettings;l&&_n(n,r,l)&&(r=t),n=wt(n),r=Za({},r,f,vf);var x=Za({},r.imports,f.imports,vf),b=tn(x),N=jo(x,b),B,k,oe=0,le=r.interpolate||Ne,fe="__p += '",Ae=Qo((r.escape||Ne).source+"|"+le.source+"|"+(le===dt?Bo:Ne).source+"|"+(r.evaluate||Ne).source+"|$","g"),Oe="//# sourceURL="+(Ct.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++kp+"]")+`
`;n.replace(Ae,function($e,_t,Et,On,vn,Fn){return Et||(Et=On),fe+=n.slice(oe,Fn).replace(qe,um),_t&&(B=!0,fe+=`' +
__e(`+_t+`) +
'`),vn&&(k=!0,fe+=`';
`+vn+`;
__p += '`),Et&&(fe+=`' +
((__t = (`+Et+`)) == null ? '' : __t) +
'`),oe=Fn+$e.length,$e}),fe+=`';
`;var Ke=Ct.call(r,"variable")&&r.variable;if(!Ke)fe=`with (obj) {
`+fe+`
}
`;else if(ca.test(Ke))throw new rt(c);fe=(k?fe.replace(Me,""):fe).replace(Te,"$1").replace(He,"$1;"),fe="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(k?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ft=uh(function(){return bt(b,Oe+"return "+fe).apply(t,N)});if(ft.source=fe,Ol(ft))throw ft;return ft}function Ox(n){return wt(n).toLowerCase()}function Fx(n){return wt(n).toUpperCase()}function Bx(n,r,l){if(n=wt(n),n&&(l||r===t))return vu(n);if(!n||!(r=Un(r)))return n;var f=Qn(n),x=Qn(r),b=xu(f,x),N=Mu(f,x)+1;return Vi(f,b,N).join("")}function zx(n,r,l){if(n=wt(n),n&&(l||r===t))return n.slice(0,Eu(n)+1);if(!n||!(r=Un(r)))return n;var f=Qn(n),x=Mu(f,Qn(r))+1;return Vi(f,0,x).join("")}function Gx(n,r,l){if(n=wt(n),n&&(l||r===t))return n.replace(Rr,"");if(!n||!(r=Un(r)))return n;var f=Qn(n),x=xu(f,Qn(r));return Vi(f,x).join("")}function Hx(n,r){var l=S,f=L;if(Ht(r)){var x="separator"in r?r.separator:x;l="length"in r?ct(r.length):l,f="omission"in r?Un(r.omission):f}n=wt(n);var b=n.length;if(Or(n)){var N=Qn(n);b=N.length}if(l>=b)return n;var B=l-Fr(f);if(B<1)return f;var k=N?Vi(N,0,B).join(""):n.slice(0,B);if(x===t)return k+f;if(N&&(B+=k.length-B),Fl(x)){if(n.slice(B).search(x)){var oe,le=k;for(x.global||(x=Qo(x.source,wt(ua.exec(x))+"g")),x.lastIndex=0;oe=x.exec(le);)var fe=oe.index;k=k.slice(0,fe===t?B:fe)}}else if(n.indexOf(Un(x),B)!=B){var Ae=k.lastIndexOf(x);Ae>-1&&(k=k.slice(0,Ae))}return k+f}function Vx(n){return n=wt(n),n&&ge.test(n)?n.replace(D,_m):n}var Wx=kr(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),Gl=ff("toUpperCase");function ch(n,r,l){return n=wt(n),r=l?t:r,r===t?hm(n)?Mm(n):im(n):n.match(r)||[]}var uh=pt(function(n,r){try{return Dn(n,t,r)}catch(l){return Ol(l)?l:new rt(l)}}),kx=Si(function(n,r){return Vn(r,function(l){l=fi(l),xi(n,l,Ul(n[l],n))}),n});function Xx(n){var r=n==null?0:n.length,l=Xe();return n=r?zt(n,function(f){if(typeof f[1]!="function")throw new Wn(u);return[l(f[0]),f[1]]}):[],pt(function(f){for(var x=-1;++x<r;){var b=n[x];if(Dn(b[0],this,f))return Dn(b[1],this,f)}})}function qx(n){return _g(Xn(n,_))}function Hl(n){return function(){return n}}function Yx(n,r){return n==null||n!==n?r:n}var Kx=df(),$x=df(!0);function Cn(n){return n}function Vl(n){return Vu(typeof n=="function"?n:Xn(n,_))}function Zx(n){return ku(Xn(n,_))}function jx(n,r){return Xu(n,Xn(r,_))}var Jx=pt(function(n,r){return function(l){return Gs(l,n,r)}}),Qx=pt(function(n,r){return function(l){return Gs(n,l,r)}});function Wl(n,r,l){var f=tn(r),x=Pa(r,f);l==null&&!(Ht(r)&&(x.length||!f.length))&&(l=r,r=n,n=this,x=Pa(r,tn(r)));var b=!(Ht(l)&&"chain"in l)||!!l.chain,N=yi(n);return Vn(x,function(B){var k=r[B];n[B]=k,N&&(n.prototype[B]=function(){var oe=this.__chain__;if(b||oe){var le=n(this.__wrapped__),fe=le.__actions__=bn(this.__actions__);return fe.push({func:k,args:arguments,thisArg:n}),le.__chain__=oe,le}return k.apply(n,Oi([this.value()],arguments))})}),n}function eM(){return an._===this&&(an._=bm),this}function kl(){}function tM(n){return n=ct(n),pt(function(r){return qu(r,n)})}var nM=Sl(zt),iM=Sl(du),rM=Sl(qo);function fh(n){return Rl(n)?Yo(fi(n)):Ug(n)}function sM(n){return function(r){return n==null?t:ur(n,r)}}var aM=mf(),oM=mf(!0);function Xl(){return[]}function ql(){return!1}function lM(){return{}}function cM(){return""}function uM(){return!0}function fM(n,r){if(n=ct(n),n<1||n>re)return[];var l=me,f=un(n,me);r=Xe(r),n-=me;for(var x=Zo(f,r);++l<n;)r(l);return x}function hM(n){return ot(n)?zt(n,fi):Nn(n)?[n]:bn(Pf(wt(n)))}function dM(n){var r=++Tm;return wt(n)+r}var pM=Fa(function(n,r){return n+r},0),mM=El("ceil"),gM=Fa(function(n,r){return n/r},1),_M=El("floor");function vM(n){return n&&n.length?La(n,Cn,ol):t}function xM(n,r){return n&&n.length?La(n,Xe(r,2),ol):t}function MM(n){return gu(n,Cn)}function SM(n,r){return gu(n,Xe(r,2))}function EM(n){return n&&n.length?La(n,Cn,fl):t}function yM(n,r){return n&&n.length?La(n,Xe(r,2),fl):t}var TM=Fa(function(n,r){return n*r},1),AM=El("round"),bM=Fa(function(n,r){return n-r},0);function wM(n){return n&&n.length?$o(n,Cn):0}function RM(n,r){return n&&n.length?$o(n,Xe(r,2)):0}return E.after=Z0,E.ary=Vf,E.assign=Fv,E.assignIn=nh,E.assignInWith=Za,E.assignWith=Bv,E.at=zv,E.before=Wf,E.bind=Ul,E.bindAll=kx,E.bindKey=kf,E.castArray=lv,E.chain=zf,E.chunk=__,E.compact=v_,E.concat=x_,E.cond=Xx,E.conforms=qx,E.constant=Hl,E.countBy=w0,E.create=Gv,E.curry=Xf,E.curryRight=qf,E.debounce=Yf,E.defaults=Hv,E.defaultsDeep=Vv,E.defer=j0,E.delay=J0,E.difference=M_,E.differenceBy=S_,E.differenceWith=E_,E.drop=y_,E.dropRight=T_,E.dropRightWhile=A_,E.dropWhile=b_,E.fill=w_,E.filter=C0,E.flatMap=D0,E.flatMapDeep=I0,E.flatMapDepth=U0,E.flatten=Nf,E.flattenDeep=R_,E.flattenDepth=C_,E.flip=Q0,E.flow=Kx,E.flowRight=$x,E.fromPairs=L_,E.functions=$v,E.functionsIn=Zv,E.groupBy=N0,E.initial=D_,E.intersection=I_,E.intersectionBy=U_,E.intersectionWith=N_,E.invert=Jv,E.invertBy=Qv,E.invokeMap=F0,E.iteratee=Vl,E.keyBy=B0,E.keys=tn,E.keysIn=Rn,E.map=ka,E.mapKeys=tx,E.mapValues=nx,E.matches=Zx,E.matchesProperty=jx,E.memoize=qa,E.merge=ix,E.mergeWith=ih,E.method=Jx,E.methodOf=Qx,E.mixin=Wl,E.negate=Ya,E.nthArg=tM,E.omit=rx,E.omitBy=sx,E.once=ev,E.orderBy=z0,E.over=nM,E.overArgs=tv,E.overEvery=iM,E.overSome=rM,E.partial=Nl,E.partialRight=Kf,E.partition=G0,E.pick=ax,E.pickBy=rh,E.property=fh,E.propertyOf=sM,E.pull=z_,E.pullAll=Ff,E.pullAllBy=G_,E.pullAllWith=H_,E.pullAt=V_,E.range=aM,E.rangeRight=oM,E.rearg=nv,E.reject=W0,E.remove=W_,E.rest=iv,E.reverse=Dl,E.sampleSize=X0,E.set=lx,E.setWith=cx,E.shuffle=q0,E.slice=k_,E.sortBy=$0,E.sortedUniq=j_,E.sortedUniqBy=J_,E.split=Dx,E.spread=rv,E.tail=Q_,E.take=e0,E.takeRight=t0,E.takeRightWhile=n0,E.takeWhile=i0,E.tap=v0,E.throttle=sv,E.thru=Wa,E.toArray=Qf,E.toPairs=sh,E.toPairsIn=ah,E.toPath=hM,E.toPlainObject=th,E.transform=ux,E.unary=av,E.union=r0,E.unionBy=s0,E.unionWith=a0,E.uniq=o0,E.uniqBy=l0,E.uniqWith=c0,E.unset=fx,E.unzip=Il,E.unzipWith=Bf,E.update=hx,E.updateWith=dx,E.values=Yr,E.valuesIn=px,E.without=u0,E.words=ch,E.wrap=ov,E.xor=f0,E.xorBy=h0,E.xorWith=d0,E.zip=p0,E.zipObject=m0,E.zipObjectDeep=g0,E.zipWith=_0,E.entries=sh,E.entriesIn=ah,E.extend=nh,E.extendWith=Za,Wl(E,E),E.add=pM,E.attempt=uh,E.camelCase=vx,E.capitalize=oh,E.ceil=mM,E.clamp=mx,E.clone=cv,E.cloneDeep=fv,E.cloneDeepWith=hv,E.cloneWith=uv,E.conformsTo=dv,E.deburr=lh,E.defaultTo=Yx,E.divide=gM,E.endsWith=xx,E.eq=ti,E.escape=Mx,E.escapeRegExp=Sx,E.every=R0,E.find=L0,E.findIndex=If,E.findKey=Wv,E.findLast=P0,E.findLastIndex=Uf,E.findLastKey=kv,E.floor=_M,E.forEach=Gf,E.forEachRight=Hf,E.forIn=Xv,E.forInRight=qv,E.forOwn=Yv,E.forOwnRight=Kv,E.get=Bl,E.gt=pv,E.gte=mv,E.has=jv,E.hasIn=zl,E.head=Of,E.identity=Cn,E.includes=O0,E.indexOf=P_,E.inRange=gx,E.invoke=ex,E.isArguments=dr,E.isArray=ot,E.isArrayBuffer=gv,E.isArrayLike=wn,E.isArrayLikeObject=Xt,E.isBoolean=_v,E.isBuffer=Wi,E.isDate=vv,E.isElement=xv,E.isEmpty=Mv,E.isEqual=Sv,E.isEqualWith=Ev,E.isError=Ol,E.isFinite=yv,E.isFunction=yi,E.isInteger=$f,E.isLength=Ka,E.isMap=Zf,E.isMatch=Tv,E.isMatchWith=Av,E.isNaN=bv,E.isNative=wv,E.isNil=Cv,E.isNull=Rv,E.isNumber=jf,E.isObject=Ht,E.isObjectLike=Wt,E.isPlainObject=qs,E.isRegExp=Fl,E.isSafeInteger=Lv,E.isSet=Jf,E.isString=$a,E.isSymbol=Nn,E.isTypedArray=qr,E.isUndefined=Pv,E.isWeakMap=Dv,E.isWeakSet=Iv,E.join=O_,E.kebabCase=Ex,E.last=Yn,E.lastIndexOf=F_,E.lowerCase=yx,E.lowerFirst=Tx,E.lt=Uv,E.lte=Nv,E.max=vM,E.maxBy=xM,E.mean=MM,E.meanBy=SM,E.min=EM,E.minBy=yM,E.stubArray=Xl,E.stubFalse=ql,E.stubObject=lM,E.stubString=cM,E.stubTrue=uM,E.multiply=TM,E.nth=B_,E.noConflict=eM,E.noop=kl,E.now=Xa,E.pad=Ax,E.padEnd=bx,E.padStart=wx,E.parseInt=Rx,E.random=_x,E.reduce=H0,E.reduceRight=V0,E.repeat=Cx,E.replace=Lx,E.result=ox,E.round=AM,E.runInContext=W,E.sample=k0,E.size=Y0,E.snakeCase=Px,E.some=K0,E.sortedIndex=X_,E.sortedIndexBy=q_,E.sortedIndexOf=Y_,E.sortedLastIndex=K_,E.sortedLastIndexBy=$_,E.sortedLastIndexOf=Z_,E.startCase=Ix,E.startsWith=Ux,E.subtract=bM,E.sum=wM,E.sumBy=RM,E.template=Nx,E.times=fM,E.toFinite=Ti,E.toInteger=ct,E.toLength=eh,E.toLower=Ox,E.toNumber=Kn,E.toSafeInteger=Ov,E.toString=wt,E.toUpper=Fx,E.trim=Bx,E.trimEnd=zx,E.trimStart=Gx,E.truncate=Hx,E.unescape=Vx,E.uniqueId=dM,E.upperCase=Wx,E.upperFirst=Gl,E.each=Gf,E.eachRight=Hf,E.first=Of,Wl(E,function(){var n={};return ci(E,function(r,l){Ct.call(E.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),E.VERSION=i,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Vn(["drop","take"],function(n,r){xt.prototype[n]=function(l){l=l===t?1:Jt(ct(l),0);var f=this.__filtered__&&!r?new xt(this):this.clone();return f.__filtered__?f.__takeCount__=un(l,f.__takeCount__):f.__views__.push({size:un(l,me),type:n+(f.__dir__<0?"Right":"")}),f},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Vn(["filter","map","takeWhile"],function(n,r){var l=r+1,f=l==G||l==Z;xt.prototype[n]=function(x){var b=this.clone();return b.__iteratees__.push({iteratee:Xe(x,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),Vn(["head","last"],function(n,r){var l="take"+(r?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),Vn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Cn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=pt(function(n,r){return typeof n=="function"?new xt(this):this.map(function(l){return Gs(l,n,r)})}),xt.prototype.reject=function(n){return this.filter(Ya(Xe(n)))},xt.prototype.slice=function(n,r){n=ct(n);var l=this;return l.__filtered__&&(n>0||r<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==t&&(r=ct(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(me)},ci(xt.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),x=E[f?"take"+(r=="last"?"Right":""):r],b=f||/^find/.test(r);x&&(E.prototype[r]=function(){var N=this.__wrapped__,B=f?[1]:arguments,k=N instanceof xt,oe=B[0],le=k||ot(N),fe=function(_t){var Et=x.apply(E,Oi([_t],B));return f&&Ae?Et[0]:Et};le&&l&&typeof oe=="function"&&oe.length!=1&&(k=le=!1);var Ae=this.__chain__,Oe=!!this.__actions__.length,Ke=b&&!Ae,ft=k&&!Oe;if(!b&&le){N=ft?N:new xt(this);var $e=n.apply(N,B);return $e.__actions__.push({func:Wa,args:[fe],thisArg:t}),new kn($e,Ae)}return Ke&&ft?n.apply(this,B):($e=this.thru(fe),Ke?f?$e.value()[0]:$e.value():$e)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(n){var r=ma[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var x=arguments;if(f&&!this.__chain__){var b=this.value();return r.apply(ot(b)?b:[],x)}return this[l](function(N){return r.apply(ot(N)?N:[],x)})}}),ci(xt.prototype,function(n,r){var l=E[r];if(l){var f=l.name+"";Ct.call(Hr,f)||(Hr[f]=[]),Hr[f].push({name:r,func:l})}}),Hr[Oa(t,g).name]=[{name:"wrapper",func:t}],xt.prototype.clone=Vm,xt.prototype.reverse=Wm,xt.prototype.value=km,E.prototype.at=x0,E.prototype.chain=M0,E.prototype.commit=S0,E.prototype.next=E0,E.prototype.plant=T0,E.prototype.reverse=A0,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=b0,E.prototype.first=E.prototype.head,Is&&(E.prototype[Is]=y0),E},Br=Sm();sr?((sr.exports=Br)._=Br,Vo._=Br):an._=Br}).call(ds)})(Co,Co.exports);var ww=Co.exports;const Qi=Cp(ww);function Rw(s,e,t){return s.position.distanceTo(e.position)<s.radius+e.radius+t}function Cw(s,e){const t=Qi.sample(s),i=new H(Qi.random(-.5,.5),Qi.random(-.5,.5),Qi.random(-.5,.5)).normalize().multiplyScalar(t.radius).addScalar(e+.1);return t.position.clone().add(i)}function Lw(){let t=[];for(;t.length<10;){const a=Qi.random(20,100),o=new H(Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset),Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset),Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset)),u={radius:a,position:o,color:Lp()};t.some(c=>Rw(u,c,20))||t.push(u)}return{planets:t,initialBallPosition:Cw(t,gt.ball.radius)}}class Pw{constructor(){this.renderer=new Tp({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new Jb,this.cameras={aim:new mw(this.renderer.domElement),landedBallTopDown:new _w(this.renderer.domElement),staticManualOrbit:new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),autoRotatingOrbit:new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),distant:new gw},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new fw(this.scene),this.clock=new ow,this.level=Lw(),this.balls=[],this.stats=na(),this.setup={level:()=>{this.level.planets.forEach(t=>{const i=new wp({radius:t.radius,color:t.color});i.position.set(t.position.x,t.position.y,t.position.z),this.scene.add(i)});const e=new Sw;e.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(e),this.scene.add(e)},light:()=>{const e=new Ap(16777215,5e7);e.position.set(0,100,5e3),this.scene.add(e)},sound:()=>{this.addListeners(()=>Fc.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new H),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new H),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>this.scene.add(new Ew),orbitControls:()=>{new bp(this.cameras.staticManualOrbit,this.renderer.domElement)},listeners:()=>{gt.simulationMode||addEventListener("keypress",e=>{if(e.key===" "){const t=this.getCurrentBall();if(t.landedPlanet){const i=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone());Rp(t,i),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.onNewAnimationFrame(),gt.showFPSCounter&&document.body.appendChild(this.stats.dom)}addListeners(e,t){const i=["mousedown","keypress","touchstart"],a=()=>{e(),t&&i.forEach(o=>removeEventListener(o,a))};i.forEach(o=>addEventListener(o,a))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight)}updateCameras(){const e=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const t=2e3,i=64e-6;this.cameras.autoRotatingOrbit.position.set(Math.sin(e*i)*t,Math.abs(Math.cos(e*i)*t),Math.cos(e*i)*t),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(e){const t=this.eGetter.getPlanets();this.bounceBallsOffPlanets(t),this.gravitateBalls(e),this.balls.forEach(i=>i.tick())}bounceBallsOffPlanets(e){e.forEach(t=>{this.balls.forEach(i=>{if(yw(t,i)){const a=Aw({staticSphere:t,movingSphere:i});gt.simulationMode&&console.log("## simulation","hit",i.position.toArray().map(u=>Math.floor(u)).toString());const o=Math.min(1,i.velocity.length()/5);Fc.ballHit(o),i.velocity=a,bw(i,t),i.velocity.length()<.2&&!i.landedPlanet&&this.stopBall(i,t)}})})}gravitateBalls(e){this.eGetter.getPlanets().forEach(i=>{this.balls.forEach(a=>{a.addVelocity(Tw({puller:i,pulled:a,timeDelta:e}))})})}stopBall(e,t){e.landedPlanet=t,gt.simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(e),this.cameras.aim.reset(e),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(e=>this.scene.remove(e)),this.balls.forEach(e=>{this.scene.add(e.createTrace())})}onNewAnimationFrame(){const e=this.clock.getDelta();this.renderer.render(this.scene,this.activeCamera),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(e),this.updateBallTrace(),pw.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new Pw;
