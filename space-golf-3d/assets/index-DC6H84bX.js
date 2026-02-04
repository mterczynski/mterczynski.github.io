(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="161",Kr={ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,fh=1,RM=2,qd=1,CM=2,Li=3,ir=0,Sn=1,di=2,er=0,ms=1,hh=2,dh=3,ph=4,PM=5,xr=100,LM=101,DM=102,mh=103,gh=104,IM=200,UM=201,NM=202,OM=203,bc=204,wc=205,FM=206,BM=207,zM=208,GM=209,HM=210,VM=211,WM=212,kM=213,XM=214,qM=0,YM=1,KM=2,So=3,$M=4,ZM=5,jM=6,JM=7,zc=0,QM=1,eS=2,tr=0,tS=1,nS=2,iS=3,rS=4,sS=5,aS=6,Yd=300,vs=301,xs=302,Rc=303,Cc=304,wo=306,Pc=1e3,ai=1001,Lc=1002,xn=1003,_h=1004,Xs=1005,Pn=1006,kl=1007,Sr=1008,nr=1009,oS=1010,lS=1011,Gc=1012,Kd=1013,Ji=1014,Di=1015,ea=1016,$d=1017,Zd=1018,Er=1020,cS=1021,oi=1023,uS=1024,fS=1025,yr=1026,Ms=1027,hS=1028,jd=1029,dS=1030,Jd=1031,Qd=1033,Xl=33776,ql=33777,Yl=33778,Kl=33779,vh=35840,xh=35841,Mh=35842,Sh=35843,ep=36196,Eh=37492,yh=37496,Th=37808,Ah=37809,bh=37810,wh=37811,Rh=37812,Ch=37813,Ph=37814,Lh=37815,Dh=37816,Ih=37817,Uh=37818,Nh=37819,Oh=37820,Fh=37821,$l=36492,Bh=36494,zh=36495,pS=36283,Gh=36284,Hh=36285,Vh=36286,tp=3e3,Tr=3001,mS=3200,gS=3201,np=0,_S=1,Zn="",ln="srgb",Ui="srgb-linear",Hc="display-p3",Ro="display-p3-linear",Eo="linear",Ft="srgb",yo="rec709",To="p3",Zr=7680,Wh=519,vS=512,xS=513,MS=514,ip=515,SS=516,ES=517,yS=518,TS=519,kh=35044,Xh="300 es",Dc=1035,Ii=2e3,Ao=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Ic=180/Math.PI;function na(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Mn(s,e,t){return Math.max(e,Math.min(t,s))}function AS(s,e){return(s%e+e)%e}function Zl(s,e,t){return(1-t)*s+t*e}function qh(s){return(s&s-1)===0&&s!==0}function Uc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bS={DEG2RAD:xo};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,a,o,u,c,h,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,c,h,d)}set(e,t,i,a,o,u,c,h,d){const p=this.elements;return p[0]=e,p[1]=a,p[2]=c,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],_=i[7],v=i[2],M=i[5],T=i[8],w=a[0],m=a[3],g=a[6],U=a[1],R=a[4],I=a[7],V=a[2],F=a[5],A=a[8];return o[0]=u*w+c*U+h*V,o[3]=u*m+c*R+h*F,o[6]=u*g+c*I+h*A,o[1]=d*w+p*U+_*V,o[4]=d*m+p*R+_*F,o[7]=d*g+p*I+_*A,o[2]=v*w+M*U+T*V,o[5]=v*m+M*R+T*F,o[8]=v*g+M*I+T*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*o*p+i*c*h+a*o*d-a*u*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*h-p*o,M=d*o-u*h,T=t*_+i*v+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(a*d-p*i)*w,e[2]=(c*i-a*u)*w,e[3]=v*w,e[4]=(p*t-a*h)*w,e[5]=(a*o-c*t)*w,e[6]=M*w,e[7]=(i*h-d*t)*w,e[8]=(u*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,c){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*u+d*c)+u+e,-a*d,a*h,-a*(-d*u+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new mt;function rp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wS(){const s=ta("canvas");return s.style.display="block",s}const Yh={};function gs(s){s in Yh||(Yh[s]=!0,console.warn(s))}const Kh=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ka={[Ui]:{transfer:Eo,primaries:yo,toReference:s=>s,fromReference:s=>s},[ln]:{transfer:Ft,primaries:yo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ro]:{transfer:Eo,primaries:To,toReference:s=>s.applyMatrix3($h),fromReference:s=>s.applyMatrix3(Kh)},[Hc]:{transfer:Ft,primaries:To,toReference:s=>s.convertSRGBToLinear().applyMatrix3($h),fromReference:s=>s.applyMatrix3(Kh).convertLinearToSRGB()}},RS=new Set([Ui,Ro]),Pt={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!RS.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Ka[e].toReference,a=Ka[t].fromReference;return a(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ka[s].primaries},getTransfer:function(s){return s===Zn?Eo:Ka[s].transfer}};function _s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jr;class sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=ta("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=_s(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_s(t[i]/255)*255):t[i]=_s(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(Ql(a[u].image)):o.push(Ql(a[u]))}else o=Ql(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class En extends wr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=ai,a=ai,o=Pn,u=Sr,c=oi,h=nr,d=En.DEFAULT_ANISOTROPY,p=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=na(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Tr?ln:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?Tr:tp}set encoding(e){gs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?ln:Zn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Yd;En.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,d=h[0],p=h[4],_=h[8],v=h[1],M=h[5],T=h[9],w=h[2],m=h[6],g=h[10];if(Math.abs(p-v)<.01&&Math.abs(_-w)<.01&&Math.abs(T-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+w)<.1&&Math.abs(T+m)<.1&&Math.abs(d+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(d+1)/2,I=(M+1)/2,V=(g+1)/2,F=(p+v)/4,A=(_+w)/4,z=(T+m)/4;return R>I&&R>V?R<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(R),a=F/i,o=A/i):I>V?I<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(I),i=F/a,o=z/a):V<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(V),i=A/o,a=z/o),this.set(i,a,o,t),this}let U=Math.sqrt((m-T)*(m-T)+(_-w)*(_-w)+(v-p)*(v-p));return Math.abs(U)<.001&&(U=1),this.x=(m-T)/U,this.y=(_-w)/U,this.z=(v-p)/U,this.w=Math.acos((d+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LS extends wr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(gs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?ln:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ap(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends LS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class op extends En{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DS extends En{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=xn,this.minFilter=xn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,c){let h=i[a+0],d=i[a+1],p=i[a+2],_=i[a+3];const v=o[u+0],M=o[u+1],T=o[u+2],w=o[u+3];if(c===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=M,e[t+2]=T,e[t+3]=w;return}if(_!==w||h!==v||d!==M||p!==T){let m=1-c;const g=h*v+d*M+p*T+_*w,U=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const V=Math.sqrt(R),F=Math.atan2(V,g*U);m=Math.sin(m*F)/V,c=Math.sin(c*F)/V}const I=c*U;if(h=h*m+v*I,d=d*m+M*I,p=p*m+T*I,_=_*m+w*I,m===1-c){const V=1/Math.sqrt(h*h+d*d+p*p+_*_);h*=V,d*=V,p*=V,_*=V}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,u){const c=i[a],h=i[a+1],d=i[a+2],p=i[a+3],_=o[u],v=o[u+1],M=o[u+2],T=o[u+3];return e[t]=c*T+p*_+h*M-d*v,e[t+1]=h*T+p*v+d*_-c*M,e[t+2]=d*T+p*M+c*v-h*_,e[t+3]=p*T-c*_-h*v-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(a/2),_=c(o/2),v=h(i/2),M=h(a/2),T=h(o/2);switch(u){case"XYZ":this._x=v*p*_+d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_-v*M*T;break;case"YXZ":this._x=v*p*_+d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_+v*M*T;break;case"ZXY":this._x=v*p*_-d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_-v*M*T;break;case"ZYX":this._x=v*p*_-d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_+v*M*T;break;case"YZX":this._x=v*p*_+d*M*T,this._y=d*M*_+v*p*T,this._z=d*p*T-v*M*_,this._w=d*p*_-v*M*T;break;case"XZY":this._x=v*p*_-d*M*T,this._y=d*M*_-v*p*T,this._z=d*p*T+v*M*_,this._w=d*p*_+v*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],c=t[5],h=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(p-h)*M,this._y=(o-d)*M,this._z=(u-a)*M}else if(i>c&&i>_){const M=2*Math.sqrt(1+i-c-_);this._w=(p-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(o+d)/M}else if(c>_){const M=2*Math.sqrt(1+c-i-_);this._w=(o-d)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+p)/M}else{const M=2*Math.sqrt(1+_-i-c);this._w=(u-a)/M,this._x=(o+d)/M,this._y=(h+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,c=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+a*d-o*h,this._y=a*p+u*h+o*c-i*d,this._z=o*p+u*d+i*h-a*c,this._w=u*p-i*c-a*h-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,u=this._w;let c=u*e._w+i*e._x+a*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=a,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*a+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=a*_+this._y*v,this._z=o*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(o),i*Math.cos(o),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,c=e.z,h=e.w,d=2*(u*a-c*i),p=2*(c*t-o*a),_=2*(o*i-u*t);return this.x=t+h*d+u*_-c*p,this.y=i+h*p+c*d-o*_,this.z=a+h*_+o*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,c=t.y,h=t.z;return this.x=a*h-o*c,this.y=o*u-i*h,this.z=i*c-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new H,Zh=new br;class ia{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ii):ii.fromBufferAttribute(o,u),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Za.subVectors(this.max,Ys),Jr.subVectors(e.a,Ys),Qr.subVectors(e.b,Ys),es.subVectors(e.c,Ys),ki.subVectors(Qr,Jr),Xi.subVectors(es,Qr),pr.subVectors(Jr,es);let t=[0,-ki.z,ki.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,ki.z,0,-ki.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-ki.y,ki.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!tc(t,Jr,Qr,es,Za)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,Jr,Qr,es,Za))?!1:(ja.crossVectors(ki,Xi),t=[ja.x,ja.y,ja.z],tc(t,Jr,Qr,es,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,$a=new ia,Jr=new H,Qr=new H,es=new H,ki=new H,Xi=new H,pr=new H,Ys=new H,Za=new H,ja=new H,mr=new H;function tc(s,e,t,i,a){for(let o=0,u=s.length-3;o<=u;o+=3){mr.fromArray(s,o);const c=a.x*Math.abs(mr.x)+a.y*Math.abs(mr.y)+a.z*Math.abs(mr.z),h=e.dot(mr),d=t.dot(mr),p=i.dot(mr);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const IS=new ia,Ks=new H,nc=new H;class Co{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IS.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ks,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(nc)),this.expandByPoint(Ks.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new H,ic=new H,Ja=new H,qi=new H,rc=new H,Qa=new H,sc=new H;class Vc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){ic.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(ic);const o=e.distanceTo(t)*.5,u=-this.direction.dot(Ja),c=qi.dot(this.direction),h=-qi.dot(Ja),d=qi.lengthSq(),p=Math.abs(1-u*u);let _,v,M,T;if(p>0)if(_=u*h-c,v=u*c-h,T=o*p,_>=0)if(v>=-T)if(v<=T){const w=1/p;_*=w,v*=w,M=_*(_+u*v+2*c)+v*(u*_+v+2*h)+d}else v=o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v=-o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;else v<=-T?(_=Math.max(0,-(-u*o+c)),v=_>0?-o:Math.min(Math.max(-o,-h),o),M=-_*_+v*(v+2*h)+d):v<=T?(_=0,v=Math.min(Math.max(-o,-h),o),M=v*(v+2*h)+d):(_=Math.max(0,-(u*o+c)),v=_>0?o:Math.min(Math.max(-o,-h),o),M=-_*_+v*(v+2*h)+d);else v=u>0?-o:o,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(ic).addScaledVector(Ja,v),M}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),a=wi.dot(wi)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=i-u,h=i+u;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,a=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,a=(e.min.x-v.x)*d),p>=0?(o=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(o=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),_>=0?(c=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),i>h||c>a)||((c>i||i!==i)&&(i=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,a,o){rc.subVectors(t,e),Qa.subVectors(i,e),sc.crossVectors(rc,Qa);let u=this.direction.dot(sc),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;qi.subVectors(this.origin,e);const h=c*this.direction.dot(Qa.crossVectors(qi,Qa));if(h<0)return null;const d=c*this.direction.dot(rc.cross(qi));if(d<0||h+d>u)return null;const p=-c*qi.dot(sc);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,t,i,a,o,u,c,h,d,p,_,v,M,T,w,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,c,h,d,p,_,v,M,T,w,m)}set(e,t,i,a,o,u,c,h,d,p,_,v,M,T,w,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=o,g[5]=u,g[9]=c,g[13]=h,g[2]=d,g[6]=p,g[10]=_,g[14]=v,g[3]=M,g[7]=T,g[11]=w,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ts.setFromMatrixColumn(e,0).length(),o=1/ts.setFromMatrixColumn(e,1).length(),u=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const v=u*p,M=u*_,T=c*p,w=c*_;t[0]=h*p,t[4]=-h*_,t[8]=d,t[1]=M+T*d,t[5]=v-w*d,t[9]=-c*h,t[2]=w-v*d,t[6]=T+M*d,t[10]=u*h}else if(e.order==="YXZ"){const v=h*p,M=h*_,T=d*p,w=d*_;t[0]=v+w*c,t[4]=T*c-M,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=M*c-T,t[6]=w+v*c,t[10]=u*h}else if(e.order==="ZXY"){const v=h*p,M=h*_,T=d*p,w=d*_;t[0]=v-w*c,t[4]=-u*_,t[8]=T+M*c,t[1]=M+T*c,t[5]=u*p,t[9]=w-v*c,t[2]=-u*d,t[6]=c,t[10]=u*h}else if(e.order==="ZYX"){const v=u*p,M=u*_,T=c*p,w=c*_;t[0]=h*p,t[4]=T*d-M,t[8]=v*d+w,t[1]=h*_,t[5]=w*d+v,t[9]=M*d-T,t[2]=-d,t[6]=c*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,M=u*d,T=c*h,w=c*d;t[0]=h*p,t[4]=w-v*_,t[8]=T*_+M,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=M*_+T,t[10]=v-w*_}else if(e.order==="XZY"){const v=u*h,M=u*d,T=c*h,w=c*d;t[0]=h*p,t[4]=-_,t[8]=d*p,t[1]=v*_+w,t[5]=u*p,t[9]=M*_-T,t[2]=T*_-M,t[6]=c*p,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,NS)}lookAt(e,t,i){const a=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Yi.crossVectors(i,Bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Yi.crossVectors(i,Bn)),Yi.normalize(),eo.crossVectors(Bn,Yi),a[0]=Yi.x,a[4]=eo.x,a[8]=Bn.x,a[1]=Yi.y,a[5]=eo.y,a[9]=Bn.y,a[2]=Yi.z,a[6]=eo.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],_=i[5],v=i[9],M=i[13],T=i[2],w=i[6],m=i[10],g=i[14],U=i[3],R=i[7],I=i[11],V=i[15],F=a[0],A=a[4],z=a[8],X=a[12],S=a[1],P=a[5],$=a[9],ie=a[13],G=a[2],ee=a[6],Z=a[10],ae=a[14],re=a[3],ce=a[7],ue=a[11],me=a[15];return o[0]=u*F+c*S+h*G+d*re,o[4]=u*A+c*P+h*ee+d*ce,o[8]=u*z+c*$+h*Z+d*ue,o[12]=u*X+c*ie+h*ae+d*me,o[1]=p*F+_*S+v*G+M*re,o[5]=p*A+_*P+v*ee+M*ce,o[9]=p*z+_*$+v*Z+M*ue,o[13]=p*X+_*ie+v*ae+M*me,o[2]=T*F+w*S+m*G+g*re,o[6]=T*A+w*P+m*ee+g*ce,o[10]=T*z+w*$+m*Z+g*ue,o[14]=T*X+w*ie+m*ae+g*me,o[3]=U*F+R*S+I*G+V*re,o[7]=U*A+R*P+I*ee+V*ce,o[11]=U*z+R*$+I*Z+V*ue,o[15]=U*X+R*ie+I*ae+V*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],c=e[5],h=e[9],d=e[13],p=e[2],_=e[6],v=e[10],M=e[14],T=e[3],w=e[7],m=e[11],g=e[15];return T*(+o*h*_-a*d*_-o*c*v+i*d*v+a*c*M-i*h*M)+w*(+t*h*M-t*d*v+o*u*v-a*u*M+a*d*p-o*h*p)+m*(+t*d*_-t*c*M-o*u*_+i*u*M+o*c*p-i*d*p)+g*(-a*c*p-t*h*_+t*c*v+a*u*_-i*u*v+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],c=e[5],h=e[6],d=e[7],p=e[8],_=e[9],v=e[10],M=e[11],T=e[12],w=e[13],m=e[14],g=e[15],U=_*m*d-w*v*d+w*h*M-c*m*M-_*h*g+c*v*g,R=T*v*d-p*m*d-T*h*M+u*m*M+p*h*g-u*v*g,I=p*w*d-T*_*d+T*c*M-u*w*M-p*c*g+u*_*g,V=T*_*h-p*w*h-T*c*v+u*w*v+p*c*m-u*_*m,F=t*U+i*R+a*I+o*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/F;return e[0]=U*A,e[1]=(w*v*o-_*m*o-w*a*M+i*m*M+_*a*g-i*v*g)*A,e[2]=(c*m*o-w*h*o+w*a*d-i*m*d-c*a*g+i*h*g)*A,e[3]=(_*h*o-c*v*o-_*a*d+i*v*d+c*a*M-i*h*M)*A,e[4]=R*A,e[5]=(p*m*o-T*v*o+T*a*M-t*m*M-p*a*g+t*v*g)*A,e[6]=(T*h*o-u*m*o-T*a*d+t*m*d+u*a*g-t*h*g)*A,e[7]=(u*v*o-p*h*o+p*a*d-t*v*d-u*a*M+t*h*M)*A,e[8]=I*A,e[9]=(T*_*o-p*w*o-T*i*M+t*w*M+p*i*g-t*_*g)*A,e[10]=(u*w*o-T*c*o+T*i*d-t*w*d-u*i*g+t*c*g)*A,e[11]=(p*c*o-u*_*o-p*i*d+t*_*d+u*i*M-t*c*M)*A,e[12]=V*A,e[13]=(p*w*a-T*_*a+T*i*v-t*w*v-p*i*m+t*_*m)*A,e[14]=(T*c*a-u*w*a-T*i*h+t*w*h+u*i*m-t*c*m)*A,e[15]=(u*_*a-p*c*a+p*i*h-t*_*h-u*i*v+t*c*v)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,c=e.y,h=e.z,d=o*u,p=o*c;return this.set(d*u+i,d*c-a*h,d*h+a*c,0,d*c+a*h,p*c+i,p*h-a*u,0,d*h-a*c,p*h+a*u,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,c=t._z,h=t._w,d=o+o,p=u+u,_=c+c,v=o*d,M=o*p,T=o*_,w=u*p,m=u*_,g=c*_,U=h*d,R=h*p,I=h*_,V=i.x,F=i.y,A=i.z;return a[0]=(1-(w+g))*V,a[1]=(M+I)*V,a[2]=(T-R)*V,a[3]=0,a[4]=(M-I)*F,a[5]=(1-(v+g))*F,a[6]=(m+U)*F,a[7]=0,a[8]=(T+R)*A,a[9]=(m-U)*A,a[10]=(1-(v+w))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=ts.set(a[0],a[1],a[2]).length();const u=ts.set(a[4],a[5],a[6]).length(),c=ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const d=1/o,p=1/u,_=1/c;return ri.elements[0]*=d,ri.elements[1]*=d,ri.elements[2]*=d,ri.elements[4]*=p,ri.elements[5]*=p,ri.elements[6]*=p,ri.elements[8]*=_,ri.elements[9]*=_,ri.elements[10]*=_,t.setFromRotationMatrix(ri),i.x=o,i.y=u,i.z=c,this}makePerspective(e,t,i,a,o,u,c=Ii){const h=this.elements,d=2*o/(t-e),p=2*o/(i-a),_=(t+e)/(t-e),v=(i+a)/(i-a);let M,T;if(c===Ii)M=-(u+o)/(u-o),T=-2*u*o/(u-o);else if(c===Ao)M=-u/(u-o),T=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,c=Ii){const h=this.elements,d=1/(t-e),p=1/(i-a),_=1/(u-o),v=(t+e)*d,M=(i+a)*p;let T,w;if(c===Ii)T=(u+o)*_,w=-2*_;else if(c===Ao)T=o*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=w,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new H,ri=new Yt,US=new H(0,0,0),NS=new H(1,1,1),Yi=new H,eo=new H,Bn=new H,jh=new Yt,Jh=new br;class Po{constructor(e=0,t=0,i=0,a=Po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],c=a[8],h=a[1],d=a[5],p=a[9],_=a[2],v=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Mn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Po.DEFAULT_ORDER="XYZ";class lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const Qh=new H,ns=new br,Ri=new Yt,to=new H,$s=new H,FS=new H,BS=new br,ed=new H(1,0,0),td=new H(0,1,0),nd=new H(0,0,1),zS={type:"added"},GS={type:"removed"};class pn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new H,t=new Po,i=new br,a=new H(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?to.copy(e):to.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt($s,to,this.up):Ri.lookAt(to,$s,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),ns.setFromRotationMatrix(Ri),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++){const c=a[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const _=h[d];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(e.materials,this.material[h]));a.material=c}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(e.animations,h))}}if(t){const c=u(e.geometries),h=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),T=u(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),M.length>0&&(i.animations=M),T.length>0&&(i.nodes=T)}return i.object=a,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}pn.DEFAULT_UP=new H(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new H,Ci=new H,ac=new H,Pi=new H,is=new H,rs=new H,id=new H,oc=new H,lc=new H,cc=new H;class pi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),si.subVectors(e,t),a.cross(si);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){si.subVectors(a,t),Ci.subVectors(i,t),ac.subVectors(e,t);const u=si.dot(si),c=si.dot(Ci),h=si.dot(ac),d=Ci.dot(Ci),p=Ci.dot(ac),_=u*d-c*c;if(_===0)return o.set(0,0,0),null;const v=1/_,M=(d*h-c*p)*v,T=(u*p-c*h)*v;return o.set(1-M-T,T,M)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,a,o,u,c,h){return this.getBarycoord(e,t,i,a,Pi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Pi.x),h.addScaledVector(u,Pi.y),h.addScaledVector(c,Pi.z),h)}static isFrontFacing(e,t,i,a){return si.subVectors(i,t),Ci.subVectors(e,t),si.cross(Ci).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,c;is.subVectors(a,i),rs.subVectors(o,i),oc.subVectors(e,i);const h=is.dot(oc),d=rs.dot(oc);if(h<=0&&d<=0)return t.copy(i);lc.subVectors(e,a);const p=is.dot(lc),_=rs.dot(lc);if(p>=0&&_<=p)return t.copy(a);const v=h*_-p*d;if(v<=0&&h>=0&&p<=0)return u=h/(h-p),t.copy(i).addScaledVector(is,u);cc.subVectors(e,o);const M=is.dot(cc),T=rs.dot(cc);if(T>=0&&M<=T)return t.copy(o);const w=M*d-h*T;if(w<=0&&d>=0&&T<=0)return c=d/(d-T),t.copy(i).addScaledVector(rs,c);const m=p*T-M*_;if(m<=0&&_-p>=0&&M-T>=0)return id.subVectors(o,a),c=(_-p)/(_-p+(M-T)),t.copy(a).addScaledVector(id,c);const g=1/(m+w+v);return u=w*g,c=v*g,t.copy(i).addScaledVector(is,u).addScaledVector(rs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},no={h:0,s:0,l:0};function uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=Pt.workingColorSpace){if(e=AS(e,1),t=Mn(t,0,1),i=Mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=uc(u,o,e+1/3),this.g=uc(u,o,e),this.b=uc(u,o,e-1/3)}return Pt.toWorkingColorSpace(this,a),this}setStyle(e,t=ln){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Pt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Mn(dn.r*255,0,255))*65536+Math.round(Mn(dn.g*255,0,255))*256+Math.round(Mn(dn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,a=dn.g,o=dn.b,u=Math.max(i,a,o),c=Math.min(i,a,o);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:h=(a-o)/_+(a<o?6:0);break;case a:h=(o-i)/_+2;break;case o:h=(i-a)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=ln){Pt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,a=dn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(no);const i=Zl(Ki.h,no.h,t),a=Zl(Ki.s,no.s,t),o=Zl(Ki.l,no.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new At;At.NAMES=cp;let HS=0;class Es extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=na(),this.name="",this.type="Material",this.blending=ms,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=wc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bc&&(i.blendSrc=this.blendSrc),this.blendDst!==wc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ys extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new H,io=new et;class mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),i=Cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),i=Cn(i,this.array),a=Cn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),i=Cn(i,this.array),a=Cn(a,this.array),o=Cn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class up extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fp extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let VS=0;const $n=new Yt,fc=new pn,ss=new H,zn=new ia,Zs=new ia,nn=new H;class jn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?fp:up)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new mt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];Zs.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(zn.min,Zs.min),zn.expandByPoint(nn),nn.addVectors(zn.max,Zs.max),zn.expandByPoint(nn)):(zn.expandByPoint(Zs.min),zn.expandByPoint(Zs.max))}zn.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)nn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(nn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)nn.fromBufferAttribute(c,d),h&&(ss.fromBufferAttribute(e,d),nn.add(ss)),a=Math.max(a,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,o=t.normal.array,u=t.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let S=0;S<c;S++)d[S]=new H,p[S]=new H;const _=new H,v=new H,M=new H,T=new et,w=new et,m=new et,g=new H,U=new H;function R(S,P,$){_.fromArray(a,S*3),v.fromArray(a,P*3),M.fromArray(a,$*3),T.fromArray(u,S*2),w.fromArray(u,P*2),m.fromArray(u,$*2),v.sub(_),M.sub(_),w.sub(T),m.sub(T);const ie=1/(w.x*m.y-m.x*w.y);isFinite(ie)&&(g.copy(v).multiplyScalar(m.y).addScaledVector(M,-w.y).multiplyScalar(ie),U.copy(M).multiplyScalar(w.x).addScaledVector(v,-m.x).multiplyScalar(ie),d[S].add(g),d[P].add(g),d[$].add(g),p[S].add(U),p[P].add(U),p[$].add(U))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let S=0,P=I.length;S<P;++S){const $=I[S],ie=$.start,G=$.count;for(let ee=ie,Z=ie+G;ee<Z;ee+=3)R(i[ee+0],i[ee+1],i[ee+2])}const V=new H,F=new H,A=new H,z=new H;function X(S){A.fromArray(o,S*3),z.copy(A);const P=d[S];V.copy(P),V.sub(A.multiplyScalar(A.dot(P))).normalize(),F.crossVectors(z,P);const ie=F.dot(p[S])<0?-1:1;h[S*4]=V.x,h[S*4+1]=V.y,h[S*4+2]=V.z,h[S*4+3]=ie}for(let S=0,P=I.length;S<P;++S){const $=I[S],ie=$.start,G=$.count;for(let ee=ie,Z=ie+G;ee<Z;ee+=3)X(i[ee+0]),X(i[ee+1]),X(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,M=i.count;v<M;v++)i.setXYZ(v,0,0,0);const a=new H,o=new H,u=new H,c=new H,h=new H,d=new H,p=new H,_=new H;if(e)for(let v=0,M=e.count;v<M;v+=3){const T=e.getX(v+0),w=e.getX(v+1),m=e.getX(v+2);a.fromBufferAttribute(t,T),o.fromBufferAttribute(t,w),u.fromBufferAttribute(t,m),p.subVectors(u,o),_.subVectors(a,o),p.cross(_),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,m),c.add(p),h.add(p),d.add(p),i.setXYZ(T,c.x,c.y,c.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,M=t.count;v<M;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,o),_.subVectors(a,o),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(c,h){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(h.length*p);let M=0,T=0;for(let w=0,m=h.length;w<m;w++){c.isInterleavedBufferAttribute?M=h[w]*c.data.stride+c.offset:M=h[w]*p;for(let g=0;g<p;g++)v[T++]=d[M++]}return new mi(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,a=this.attributes;for(const c in a){const h=a[c],d=e(h,i);t.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],M=e(v,i);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let _=0,v=d.length;_<v;_++){const M=d[_];p.push(M.toJSON(e.data))}p.length>0&&(a[h]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],_=o[d];for(let v=0,M=_.length;v<M;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new Yt,gr=new Vc,ro=new Co,sd=new H,as=new H,os=new H,ls=new H,hc=new H,so=new H,ao=new et,oo=new et,lo=new et,ad=new H,od=new H,ld=new H,co=new H,uo=new H;class Ln extends pn{constructor(e=new jn,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const c=this.morphTargetInfluences;if(o&&c){so.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=c[h],_=o[h];p!==0&&(hc.fromBufferAttribute(_,e),u?so.addScaledVector(hc,p):so.addScaledVector(hc.sub(t),p))}t.add(so)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(o),gr.copy(e.ray).recast(e.near),!(ro.containsPoint(gr.origin)===!1&&(gr.intersectSphere(ro,sd)===null||gr.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(rd.copy(o).invert(),gr.copy(e.ray).applyMatrix4(rd),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,v=o.groups,M=o.drawRange;if(c!==null)if(Array.isArray(u))for(let T=0,w=v.length;T<w;T++){const m=v[T],g=u[m.materialIndex],U=Math.max(m.start,M.start),R=Math.min(c.count,Math.min(m.start+m.count,M.start+M.count));for(let I=U,V=R;I<V;I+=3){const F=c.getX(I),A=c.getX(I+1),z=c.getX(I+2);a=fo(this,g,e,i,d,p,_,F,A,z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(c.count,M.start+M.count);for(let m=T,g=w;m<g;m+=3){const U=c.getX(m),R=c.getX(m+1),I=c.getX(m+2);a=fo(this,u,e,i,d,p,_,U,R,I),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,w=v.length;T<w;T++){const m=v[T],g=u[m.materialIndex],U=Math.max(m.start,M.start),R=Math.min(h.count,Math.min(m.start+m.count,M.start+M.count));for(let I=U,V=R;I<V;I+=3){const F=I,A=I+1,z=I+2;a=fo(this,g,e,i,d,p,_,F,A,z),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let m=T,g=w;m<g;m+=3){const U=m,R=m+1,I=m+2;a=fo(this,u,e,i,d,p,_,U,R,I),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function WS(s,e,t,i,a,o,u,c){let h;if(e.side===Sn?h=i.intersectTriangle(u,o,a,!0,c):h=i.intersectTriangle(a,o,u,e.side===ir,c),h===null)return null;uo.copy(c),uo.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(uo);return d<t.near||d>t.far?null:{distance:d,point:uo.clone(),object:s}}function fo(s,e,t,i,a,o,u,c,h,d){s.getVertexPosition(c,as),s.getVertexPosition(h,os),s.getVertexPosition(d,ls);const p=WS(s,e,t,i,as,os,ls,co);if(p){a&&(ao.fromBufferAttribute(a,c),oo.fromBufferAttribute(a,h),lo.fromBufferAttribute(a,d),p.uv=pi.getInterpolation(co,as,os,ls,ao,oo,lo,new et)),o&&(ao.fromBufferAttribute(o,c),oo.fromBufferAttribute(o,h),lo.fromBufferAttribute(o,d),p.uv1=pi.getInterpolation(co,as,os,ls,ao,oo,lo,new et),p.uv2=p.uv1),u&&(ad.fromBufferAttribute(u,c),od.fromBufferAttribute(u,h),ld.fromBufferAttribute(u,d),p.normal=pi.getInterpolation(co,as,os,ls,ad,od,ld,new H),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new H,materialIndex:0};pi.getNormal(as,os,ls,_.normal),p.face=_}return p}class Ts extends jn{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],d=[],p=[],_=[];let v=0,M=0;T("z","y","x",-1,-1,i,t,e,u,o,0),T("z","y","x",1,-1,i,t,-e,u,o,1),T("x","z","y",1,1,e,i,t,a,u,2),T("x","z","y",1,-1,e,i,-t,a,u,3),T("x","y","z",1,-1,e,t,i,a,o,4),T("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new yn(d,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(_,2));function T(w,m,g,U,R,I,V,F,A,z,X){const S=I/A,P=V/z,$=I/2,ie=V/2,G=F/2,ee=A+1,Z=z+1;let ae=0,re=0;const ce=new H;for(let ue=0;ue<Z;ue++){const me=ue*P-ie;for(let Ee=0;Ee<ee;Ee++){const Ze=Ee*S-$;ce[w]=Ze*U,ce[m]=me*R,ce[g]=G,d.push(ce.x,ce.y,ce.z),ce[w]=0,ce[m]=0,ce[g]=F>0?1:-1,p.push(ce.x,ce.y,ce.z),_.push(Ee/A),_.push(1-ue/z),ae+=1}}for(let ue=0;ue<z;ue++)for(let me=0;me<A;me++){const Ee=v+me+ee*ue,Ze=v+me+ee*(ue+1),ne=v+(me+1)+ee*(ue+1),de=v+(me+1)+ee*ue;h.push(Ee,Ze,de),h.push(Ze,ne,de),re+=6}c.addGroup(M,re,X),M+=re,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function vn(s){const e={};for(let t=0;t<s.length;t++){const i=Ss(s[t]);for(const a in i)e[a]=i[a]}return e}function kS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hp(s){return s.getRenderTarget()===null?s.outputColorSpace:Pt.workingColorSpace}const XS={clone:Ss,merge:vn};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=kS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dp extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new H,cd=new et,ud=new et;class rn extends dp{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ic*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ic*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ud),t.subVectors(ud,cd)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/h,t-=u.offsetY*i/d,a*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class KS extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new rn(cs,us,e,t);a.layers=this.layers,this.add(a);const o=new rn(cs,us,e,t);o.layers=this.layers,this.add(o);const u=new rn(cs,us,e,t);u.layers=this.layers,this.add(u);const c=new rn(cs,us,e,t);c.layers=this.layers,this.add(c);const h=new rn(cs,us,e,t);h.layers=this.layers,this.add(h);const d=new rn(cs,us,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,c,h]=t;for(const d of t)this.remove(d);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,u),e.setRenderTarget(i,2,a),e.render(t,c),e.setRenderTarget(i,3,a),e.render(t,h),e.setRenderTarget(i,4,a),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,v,M),e.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class pp extends En{constructor(e,t,i,a,o,u,c,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,a,o,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(gs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Tr?ln:Zn),this.texture=new pp(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ts(5,5,5),o=new rr({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:er});o.uniforms.tEquirect.value=t;const u=new Ln(a,o),c=t.minFilter;return t.minFilter===Sr&&(t.minFilter=Pn),new KS(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}const dc=new H,ZS=new H,jS=new mt;class ji{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=dc.subVectors(i,t).cross(ZS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jS.getNormalMatrix(e),a=this.coplanarPoint(dc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Co,ho=new H;class Wc{constructor(e=new ji,t=new ji,i=new ji,a=new ji,o=new ji,u=new ji){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,a=e.elements,o=a[0],u=a[1],c=a[2],h=a[3],d=a[4],p=a[5],_=a[6],v=a[7],M=a[8],T=a[9],w=a[10],m=a[11],g=a[12],U=a[13],R=a[14],I=a[15];if(i[0].setComponents(h-o,v-d,m-M,I-g).normalize(),i[1].setComponents(h+o,v+d,m+M,I+g).normalize(),i[2].setComponents(h+u,v+p,m+T,I+U).normalize(),i[3].setComponents(h-u,v-p,m-T,I-U).normalize(),i[4].setComponents(h-c,v-_,m-w,I-R).normalize(),t===Ii)i[5].setComponents(h+c,v+_,m+w,I+R).normalize();else if(t===Ao)i[5].setComponents(c,_,w,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ho.x=a.normal.x>0?e.max.x:e.min.x,ho.y=a.normal.y>0?e.max.y:e.min.y,ho.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mp(){let s=null,e=!1,t=null,i=null;function a(o,u){t(o,u),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function JS(s,e){const t=e.isWebGL2,i=new WeakMap;function a(d,p){const _=d.array,v=d.usage,M=_.byteLength,T=s.createBuffer();s.bindBuffer(p,T),s.bufferData(p,_,v),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=s.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=s.SHORT;else if(_ instanceof Uint32Array)w=s.UNSIGNED_INT;else if(_ instanceof Int32Array)w=s.INT;else if(_ instanceof Int8Array)w=s.BYTE;else if(_ instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:T,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:M}}function o(d,p,_){const v=p.array,M=p._updateRange,T=p.updateRanges;if(s.bindBuffer(_,d),M.count===-1&&T.length===0&&s.bufferSubData(_,0,v),T.length!==0){for(let w=0,m=T.length;w<m;w++){const g=T[w];t?s.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):s.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}M.count!==-1&&(t?s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):s.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(s.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,a(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:h}}class Lo extends jn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,c=Math.floor(i),h=Math.floor(a),d=c+1,p=h+1,_=e/c,v=t/h,M=[],T=[],w=[],m=[];for(let g=0;g<p;g++){const U=g*v-u;for(let R=0;R<d;R++){const I=R*_-o;T.push(I,-U,0),w.push(0,0,1),m.push(R/c),m.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<c;U++){const R=U+d*g,I=U+d*(g+1),V=U+1+d*(g+1),F=U+1+d*g;M.push(R,I,F),M.push(I,V,F)}this.setIndex(M),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(w,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
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
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EE=`#define PI 3.141592653589793
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
} // validated`,yE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`
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
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,IE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
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
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
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
#endif`,JE=`struct PhysicalMaterial {
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
}`,QE=`
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cy=`#if defined( USE_POINTS_UV )
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
#endif`,uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
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
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
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
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,sT=`#if DEPTH_PACKING == 3200
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
}`,aT=`#define DISTANCE
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
}`,oT=`#define DISTANCE
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
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
}`,fT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#define LAMBERT
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
}`,mT=`#define LAMBERT
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
}`,gT=`#define MATCAP
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
}`,_T=`#define MATCAP
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
}`,vT=`#define NORMAL
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
}`,xT=`#define NORMAL
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
}`,MT=`#define PHONG
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
}`,ST=`#define PHONG
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
}`,ET=`#define STANDARD
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
}`,yT=`#define STANDARD
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
}`,TT=`#define TOON
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
}`,AT=`#define TOON
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
}`,bT=`uniform float size;
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
}`,wT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,LT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:QS,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:rE,aomap_fragment:sE,aomap_pars_fragment:aE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:_E,color_fragment:vE,color_pars_fragment:xE,color_pars_vertex:ME,color_vertex:SE,common:EE,cube_uv_reflection_fragment:yE,defaultnormal_vertex:TE,displacementmap_pars_vertex:AE,displacementmap_vertex:bE,emissivemap_fragment:wE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:PE,envmap_fragment:LE,envmap_common_pars_fragment:DE,envmap_pars_fragment:IE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:qE,envmap_vertex:NE,fog_vertex:OE,fog_pars_vertex:FE,fog_fragment:BE,fog_pars_fragment:zE,gradientmap_pars_fragment:GE,lightmap_fragment:HE,lightmap_pars_fragment:VE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:kE,lights_pars_begin:XE,lights_toon_fragment:YE,lights_toon_pars_fragment:KE,lights_phong_fragment:$E,lights_phong_pars_fragment:ZE,lights_physical_fragment:jE,lights_physical_pars_fragment:JE,lights_fragment_begin:QE,lights_fragment_maps:ey,lights_fragment_end:ty,logdepthbuf_fragment:ny,logdepthbuf_pars_fragment:iy,logdepthbuf_pars_vertex:ry,logdepthbuf_vertex:sy,map_fragment:ay,map_pars_fragment:oy,map_particle_fragment:ly,map_particle_pars_fragment:cy,metalnessmap_fragment:uy,metalnessmap_pars_fragment:fy,morphcolor_vertex:hy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:My,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:by,packing:wy,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Ly,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Iy,shadowmap_pars_fragment:Uy,shadowmap_pars_vertex:Ny,shadowmap_vertex:Oy,shadowmask_pars_fragment:Fy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:Gy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Wy,tonemapping_fragment:ky,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Ky,uv_pars_vertex:$y,uv_vertex:Zy,worldpos_vertex:jy,background_vert:Jy,background_frag:Qy,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:rT,depth_frag:sT,distanceRGBA_vert:aT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:_T,meshnormal_vert:vT,meshnormal_frag:xT,meshphong_vert:MT,meshphong_frag:ST,meshphysical_vert:ET,meshphysical_frag:yT,meshtoon_vert:TT,meshtoon_frag:AT,points_vert:bT,points_frag:wT,shadow_vert:RT,shadow_frag:CT,sprite_vert:PT,sprite_frag:LT},Se={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},hi={basic:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:vn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:vn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new At(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:vn([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:vn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:vn([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:vn([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:vn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:vn([Se.lights,Se.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};hi.physical={uniforms:vn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const po={r:0,b:0,g:0};function DT(s,e,t,i,a,o,u){const c=new At(0);let h=o===!0?0:1,d,p,_=null,v=0,M=null;function T(m,g){let U=!1,R=g.isScene===!0?g.background:null;R&&R.isTexture&&(R=(g.backgroundBlurriness>0?t:e).get(R)),R===null?w(c,h):R&&R.isColor&&(w(R,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||U)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===wo)?(p===void 0&&(p=new Ln(new Ts(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Ss(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ft,(_!==R||v!==R.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Ln(new Lo(2,2),new rr({name:"BackgroundMaterial",uniforms:Ss(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||M!==s.toneMapping)&&(d.material.needsUpdate=!0,_=R,v=R.version,M=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function w(m,g){m.getRGB(po,hp(s)),i.buffers.color.setClear(po.r,po.g,po.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),h=g,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,w(c,h)},render:T}}function IT(s,e,t,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},h=m(null);let d=h,p=!1;function _(G,ee,Z,ae,re){let ce=!1;if(u){const ue=w(ae,Z,ee);d!==ue&&(d=ue,M(d.object)),ce=g(G,ae,Z,re),ce&&U(G,ae,Z,re)}else{const ue=ee.wireframe===!0;(d.geometry!==ae.id||d.program!==Z.id||d.wireframe!==ue)&&(d.geometry=ae.id,d.program=Z.id,d.wireframe=ue,ce=!0)}re!==null&&t.update(re,s.ELEMENT_ARRAY_BUFFER),(ce||p)&&(p=!1,z(G,ee,Z,ae),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function v(){return i.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function M(G){return i.isWebGL2?s.bindVertexArray(G):o.bindVertexArrayOES(G)}function T(G){return i.isWebGL2?s.deleteVertexArray(G):o.deleteVertexArrayOES(G)}function w(G,ee,Z){const ae=Z.wireframe===!0;let re=c[G.id];re===void 0&&(re={},c[G.id]=re);let ce=re[ee.id];ce===void 0&&(ce={},re[ee.id]=ce);let ue=ce[ae];return ue===void 0&&(ue=m(v()),ce[ae]=ue),ue}function m(G){const ee=[],Z=[],ae=[];for(let re=0;re<a;re++)ee[re]=0,Z[re]=0,ae[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Z,attributeDivisors:ae,object:G,attributes:{},index:null}}function g(G,ee,Z,ae){const re=d.attributes,ce=ee.attributes;let ue=0;const me=Z.getAttributes();for(const Ee in me)if(me[Ee].location>=0){const ne=re[Ee];let de=ce[Ee];if(de===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(de=G.instanceColor)),ne===void 0||ne.attribute!==de||de&&ne.data!==de.data)return!0;ue++}return d.attributesNum!==ue||d.index!==ae}function U(G,ee,Z,ae){const re={},ce=ee.attributes;let ue=0;const me=Z.getAttributes();for(const Ee in me)if(me[Ee].location>=0){let ne=ce[Ee];ne===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor));const de={};de.attribute=ne,ne&&ne.data&&(de.data=ne.data),re[Ee]=de,ue++}d.attributes=re,d.attributesNum=ue,d.index=ae}function R(){const G=d.newAttributes;for(let ee=0,Z=G.length;ee<Z;ee++)G[ee]=0}function I(G){V(G,0)}function V(G,ee){const Z=d.newAttributes,ae=d.enabledAttributes,re=d.attributeDivisors;Z[G]=1,ae[G]===0&&(s.enableVertexAttribArray(G),ae[G]=1),re[G]!==ee&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,ee),re[G]=ee)}function F(){const G=d.newAttributes,ee=d.enabledAttributes;for(let Z=0,ae=ee.length;Z<ae;Z++)ee[Z]!==G[Z]&&(s.disableVertexAttribArray(Z),ee[Z]=0)}function A(G,ee,Z,ae,re,ce,ue){ue===!0?s.vertexAttribIPointer(G,ee,Z,re,ce):s.vertexAttribPointer(G,ee,Z,ae,re,ce)}function z(G,ee,Z,ae){if(i.isWebGL2===!1&&(G.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const re=ae.attributes,ce=Z.getAttributes(),ue=ee.defaultAttributeValues;for(const me in ce){const Ee=ce[me];if(Ee.location>=0){let Ze=re[me];if(Ze===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Ze=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Ze=G.instanceColor)),Ze!==void 0){const ne=Ze.normalized,de=Ze.itemSize,Re=t.get(Ze);if(Re===void 0)continue;const We=Re.buffer,Ge=Re.type,Le=Re.bytesPerElement,vt=i.isWebGL2===!0&&(Ge===s.INT||Ge===s.UNSIGNED_INT||Ze.gpuType===Kd);if(Ze.isInterleavedBufferAttribute){const je=Ze.data,q=je.stride,Vt=Ze.offset;if(je.isInstancedInterleavedBuffer){for(let De=0;De<Ee.locationSize;De++)V(Ee.location+De,je.meshPerAttribute);G.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let De=0;De<Ee.locationSize;De++)I(Ee.location+De);s.bindBuffer(s.ARRAY_BUFFER,We);for(let De=0;De<Ee.locationSize;De++)A(Ee.location+De,de/Ee.locationSize,Ge,ne,q*Le,(Vt+de/Ee.locationSize*De)*Le,vt)}else{if(Ze.isInstancedBufferAttribute){for(let je=0;je<Ee.locationSize;je++)V(Ee.location+je,Ze.meshPerAttribute);G.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let je=0;je<Ee.locationSize;je++)I(Ee.location+je);s.bindBuffer(s.ARRAY_BUFFER,We);for(let je=0;je<Ee.locationSize;je++)A(Ee.location+je,de/Ee.locationSize,Ge,ne,de*Le,de/Ee.locationSize*je*Le,vt)}}else if(ue!==void 0){const ne=ue[me];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(Ee.location,ne);break;case 3:s.vertexAttrib3fv(Ee.location,ne);break;case 4:s.vertexAttrib4fv(Ee.location,ne);break;default:s.vertexAttrib1fv(Ee.location,ne)}}}}F()}function X(){$();for(const G in c){const ee=c[G];for(const Z in ee){const ae=ee[Z];for(const re in ae)T(ae[re].object),delete ae[re];delete ee[Z]}delete c[G]}}function S(G){if(c[G.id]===void 0)return;const ee=c[G.id];for(const Z in ee){const ae=ee[Z];for(const re in ae)T(ae[re].object),delete ae[re];delete ee[Z]}delete c[G.id]}function P(G){for(const ee in c){const Z=c[ee];if(Z[G.id]===void 0)continue;const ae=Z[G.id];for(const re in ae)T(ae[re].object),delete ae[re];delete Z[G.id]}}function $(){ie(),p=!0,d!==h&&(d=h,M(d.object))}function ie(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:_,reset:$,resetDefaultState:ie,dispose:X,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:I,disableUnusedAttributes:F}}function UT(s,e,t,i){const a=i.isWebGL2;let o;function u(p){o=p}function c(p,_){s.drawArrays(o,p,_),t.update(_,o,1)}function h(p,_,v){if(v===0)return;let M,T;if(a)M=s,T="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[T](o,p,_,v),t.update(_,o,v)}function d(p,_,v){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<v;T++)this.render(p[T],_[T]);else{M.multiDrawArraysWEBGL(o,p,0,_,0,v);let T=0;for(let w=0;w<v;w++)T+=_[w];t.update(T,o,1)}}this.setMode=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function NT(s,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,I=u||e.has("OES_texture_float"),V=R&&I,F=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:T,maxAttributes:w,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:U,vertexTextures:R,floatFragmentTextures:I,floatVertexTextures:V,maxSamples:F}}function OT(s){const e=this;let t=null,i=0,a=!1,o=!1;const u=new ji,c=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||i!==0||a;return a=v,i=_.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,M){const T=_.clippingPlanes,w=_.clipIntersection,m=_.clipShadows,g=s.get(_);if(!a||T===null||T.length===0||o&&!m)o?p(null):d();else{const U=o?0:i,R=U*4;let I=g.clippingState||null;h.value=I,I=p(T,v,R,M);for(let V=0;V!==R;++V)I[V]=t[V];g.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,M,T){const w=_!==null?_.length:0;let m=null;if(w!==0){if(m=h.value,T!==!0||m===null){const g=M+w*4,U=v.matrixWorldInverse;c.getNormalMatrix(U),(m===null||m.length<g)&&(m=new Float32Array(g));for(let R=0,I=M;R!==w;++R,I+=4)u.copy(_[R]).applyMatrix4(U,c),u.normal.toArray(m,I),m[I+3]=u.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,m}}function FT(s){let e=new WeakMap;function t(u,c){return c===Rc?u.mapping=vs:c===Cc&&(u.mapping=xs),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Rc||c===Cc)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new $S(h.height);return d.fromEquirectangularTexture(s,u),e.set(u,d),u.addEventListener("dispose",a),t(d.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class BT extends dp{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ds=4,fd=[.125,.215,.35,.446,.526,.582],Mr=20,pc=new BT,hd=new At;let mc=null,gc=0,_c=0;const vr=(1+Math.sqrt(5))/2,fs=1/vr,dd=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,vr,fs),new H(0,vr,-fs),new H(fs,0,vr),new H(-fs,0,vr),new H(vr,fs,0),new H(-vr,fs,0)];class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,_c),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ea,format:oi,colorSpace:Ui,depthBuffer:!1},a=md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zT(o)),this._blurMaterial=GT(o,e,t)}return a}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,i,a){const c=new rn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(hd),p.toneMapping=tr,p.autoClear=!1;const M=new ys({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),T=new Ln(new Ts,M);let w=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,w=!0):(M.color.copy(hd),w=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(c.up.set(0,h[g],0),c.lookAt(d[g],0,0)):U===1?(c.up.set(0,0,h[g]),c.lookAt(0,d[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,d[g]));const R=this._cubeSize;mo(a,U*R,g>2?R:0,R,R),p.setRenderTarget(a),w&&p.render(T,c),p.render(e,c)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===vs||e.mapping===xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new Ln(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;mo(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=dd[(a-1)%dd.length];this._blur(e,a-1,a,o,u)}t.autoClear=i}_blur(e,t,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",o),this._halfBlur(u,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Ln(this._lodPlanes[a],d),v=d.uniforms,M=this._sizeLods[i]-1,T=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Mr-1),w=o/T,m=isFinite(o)?1+Math.floor(p*w):Mr;m>Mr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const g=[];let U=0;for(let A=0;A<Mr;++A){const z=A/w,X=Math.exp(-z*z/2);g.push(X),A===0?U+=X:A<m&&(U+=2*X)}for(let A=0;A<g.length;A++)g[A]=g[A]/U;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:R}=this;v.dTheta.value=T,v.mipInt.value=R-i;const I=this._sizeLods[a],V=3*I*(a>R-ds?a-R+ds:0),F=4*(this._cubeSize-I);mo(t,V,F,3*I,2*I),h.setRenderTarget(t),h.render(_,pc)}}function zT(s){const e=[],t=[],i=[];let a=s;const o=s-ds+1+fd.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);t.push(c);let h=1/c;u>s-ds?h=fd[u-s+ds-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],M=6,T=6,w=3,m=2,g=1,U=new Float32Array(w*T*M),R=new Float32Array(m*T*M),I=new Float32Array(g*T*M);for(let F=0;F<M;F++){const A=F%3*2/3-1,z=F>2?0:-1,X=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];U.set(X,w*T*F),R.set(v,m*T*F);const S=[F,F,F,F,F,F];I.set(S,g*T*F)}const V=new jn;V.setAttribute("position",new mi(U,w)),V.setAttribute("uv",new mi(R,m)),V.setAttribute("faceIndex",new mi(I,g)),e.push(V),a>ds&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function md(s,e,t){const i=new Ar(s,e,t);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function GT(s,e,t){const i=new Float32Array(Mr),a=new H(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:kc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function gd(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function _d(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function HT(s){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===Rc||h===Cc,p=h===vs||h===xs;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new pd(s)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&a(_)){t===null&&(t=new pd(s));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",o),v.texture}else return null}}}return c}function a(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function VT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function WT(s,e,t,i){const a={},o=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const w=v.morphAttributes[T];for(let m=0,g=w.length;m<g;m++)e.remove(w[m])}v.removeEventListener("dispose",u),delete a[v.id];const M=o.get(v);M&&(e.remove(M),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const T in v)e.update(v[T],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const T in M){const w=M[T];for(let m=0,g=w.length;m<g;m++)e.update(w[m],s.ARRAY_BUFFER)}}function d(_){const v=[],M=_.index,T=_.attributes.position;let w=0;if(M!==null){const U=M.array;w=M.version;for(let R=0,I=U.length;R<I;R+=3){const V=U[R+0],F=U[R+1],A=U[R+2];v.push(V,F,F,A,A,V)}}else if(T!==void 0){const U=T.array;w=T.version;for(let R=0,I=U.length/3-1;R<I;R+=3){const V=R+0,F=R+1,A=R+2;v.push(V,F,F,A,A,V)}}else return;const m=new(rp(v)?fp:up)(v,1);m.version=w;const g=o.get(_);g&&e.remove(g),o.set(_,m)}function p(_){const v=o.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&d(_)}else d(_);return o.get(_)}return{get:c,update:h,getWireframeAttribute:p}}function kT(s,e,t,i){const a=i.isWebGL2;let o;function u(M){o=M}let c,h;function d(M){c=M.type,h=M.bytesPerElement}function p(M,T){s.drawElements(o,T,c,M*h),t.update(T,o,1)}function _(M,T,w){if(w===0)return;let m,g;if(a)m=s,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](o,T,c,M*h,w),t.update(T,o,w)}function v(M,T,w){if(w===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<w;g++)this.render(M[g]/h,T[g]);else{m.multiDrawElementsWEBGL(o,T,0,c,M,0,w);let g=0;for(let U=0;U<w;U++)g+=T[U];t.update(g,o,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function XT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(o/3);break;case s.LINES:t.lines+=c*(o/2);break;case s.LINE_STRIP:t.lines+=c*(o-1);break;case s.LINE_LOOP:t.lines+=c*o;break;case s.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function qT(s,e){return s[0]-e[0]}function YT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function KT(s,e,t){const i={},a=new Float32Array(8),o=new WeakMap,u=new Gt,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const T=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=T!==void 0?T.length:0;let m=o.get(p);if(m===void 0||m.count!==w){let ee=function(){ie.dispose(),o.delete(p),p.removeEventListener("dispose",ee)};var M=ee;m!==void 0&&m.texture.dispose();const R=p.morphAttributes.position!==void 0,I=p.morphAttributes.normal!==void 0,V=p.morphAttributes.color!==void 0,F=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let X=0;R===!0&&(X=1),I===!0&&(X=2),V===!0&&(X=3);let S=p.attributes.position.count*X,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const $=new Float32Array(S*P*4*w),ie=new op($,S,P,w);ie.type=Di,ie.needsUpdate=!0;const G=X*4;for(let Z=0;Z<w;Z++){const ae=F[Z],re=A[Z],ce=z[Z],ue=S*P*4*Z;for(let me=0;me<ae.count;me++){const Ee=me*G;R===!0&&(u.fromBufferAttribute(ae,me),$[ue+Ee+0]=u.x,$[ue+Ee+1]=u.y,$[ue+Ee+2]=u.z,$[ue+Ee+3]=0),I===!0&&(u.fromBufferAttribute(re,me),$[ue+Ee+4]=u.x,$[ue+Ee+5]=u.y,$[ue+Ee+6]=u.z,$[ue+Ee+7]=0),V===!0&&(u.fromBufferAttribute(ce,me),$[ue+Ee+8]=u.x,$[ue+Ee+9]=u.y,$[ue+Ee+10]=u.z,$[ue+Ee+11]=ce.itemSize===4?u.w:1)}}m={count:w,texture:ie,size:new et(S,P)},o.set(p,m),p.addEventListener("dispose",ee)}let g=0;for(let R=0;R<v.length;R++)g+=v[R];const U=p.morphTargetsRelative?1:1-g;_.getUniforms().setValue(s,"morphTargetBaseInfluence",U),_.getUniforms().setValue(s,"morphTargetInfluences",v),_.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const T=v===void 0?0:v.length;let w=i[p.id];if(w===void 0||w.length!==T){w=[];for(let I=0;I<T;I++)w[I]=[I,0];i[p.id]=w}for(let I=0;I<T;I++){const V=w[I];V[0]=I,V[1]=v[I]}w.sort(YT);for(let I=0;I<8;I++)I<T&&w[I][1]?(c[I][0]=w[I][0],c[I][1]=w[I][1]):(c[I][0]=Number.MAX_SAFE_INTEGER,c[I][1]=0);c.sort(qT);const m=p.morphAttributes.position,g=p.morphAttributes.normal;let U=0;for(let I=0;I<8;I++){const V=c[I],F=V[0],A=V[1];F!==Number.MAX_SAFE_INTEGER&&A?(m&&p.getAttribute("morphTarget"+I)!==m[F]&&p.setAttribute("morphTarget"+I,m[F]),g&&p.getAttribute("morphNormal"+I)!==g[F]&&p.setAttribute("morphNormal"+I,g[F]),a[I]=A,U+=A):(m&&p.hasAttribute("morphTarget"+I)===!0&&p.deleteAttribute("morphTarget"+I),g&&p.hasAttribute("morphNormal"+I)===!0&&p.deleteAttribute("morphNormal"+I),a[I]=0)}const R=p.morphTargetsRelative?1:1-U;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function $T(s,e,t,i){let a=new WeakMap;function o(h){const d=i.render.frame,p=h.geometry,_=e.get(h,p);if(a.get(_)!==d&&(e.update(_),a.set(_,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==d&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return _}function u(){a=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:u}}class gp extends En{constructor(e,t,i,a,o,u,c,h,d,p){if(p=p!==void 0?p:yr,p!==yr&&p!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===yr&&(i=Ji),i===void 0&&p===Ms&&(i=Er),super(null,a,o,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:xn,this.minFilter=h!==void 0?h:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _p=new En,vp=new gp(1,1);vp.compareFunction=ip;const xp=new op,Mp=new DS,Sp=new pp,vd=[],xd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function As(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=vd[a];if(o===void 0&&(o=new Float32Array(a),vd[a]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(o,c)}return o}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Do(s,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function ZT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function JT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function QT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function eA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Ed.set(i),s.uniformMatrix2fv(this.addr,!1,Ed),en(t,i)}}function tA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Sd.set(i),s.uniformMatrix3fv(this.addr,!1,Sd),en(t,i)}}function nA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Md.set(i),s.uniformMatrix4fv(this.addr,!1,Md),en(t,i)}}function iA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function oA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function lA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function cA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function fA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const o=this.type===s.SAMPLER_2D_SHADOW?vp:_p;t.setTexture2D(e||o,a)}function hA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Mp,a)}function dA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Sp,a)}function pA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||xp,a)}function mA(s){switch(s){case 5126:return ZT;case 35664:return jT;case 35665:return JT;case 35666:return QT;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return aA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(s,e){s.uniform1fv(this.addr,e)}function _A(s,e){const t=As(e,this.size,2);s.uniform2fv(this.addr,t)}function vA(s,e){const t=As(e,this.size,3);s.uniform3fv(this.addr,t)}function xA(s,e){const t=As(e,this.size,4);s.uniform4fv(this.addr,t)}function MA(s,e){const t=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function SA(s,e){const t=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function EA(s,e){const t=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yA(s,e){s.uniform1iv(this.addr,e)}function TA(s,e){s.uniform2iv(this.addr,e)}function AA(s,e){s.uniform3iv(this.addr,e)}function bA(s,e){s.uniform4iv(this.addr,e)}function wA(s,e){s.uniform1uiv(this.addr,e)}function RA(s,e){s.uniform2uiv(this.addr,e)}function CA(s,e){s.uniform3uiv(this.addr,e)}function PA(s,e){s.uniform4uiv(this.addr,e)}function LA(s,e,t){const i=this.cache,a=e.length,o=Do(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||_p,o[u])}function DA(s,e,t){const i=this.cache,a=e.length,o=Do(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Mp,o[u])}function IA(s,e,t){const i=this.cache,a=e.length,o=Do(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Sp,o[u])}function UA(s,e,t){const i=this.cache,a=e.length,o=Do(t,a);Qt(i,o)||(s.uniform1iv(this.addr,o),en(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||xp,o[u])}function NA(s){switch(s){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return MA;case 35675:return SA;case 35676:return EA;case 5124:case 35670:return yA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return bA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}class OA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mA(t.type)}}class FA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NA(t.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(e,t[c.id],i)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function yd(s,e){s.seq.push(e),s.map[e.id]=e}function zA(s,e,t){const i=s.name,a=i.length;for(vc.lastIndex=0;;){const o=vc.exec(i),u=vc.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===a){yd(t,d===void 0?new OA(c,s,e):new FA(c,s,e));break}else{let _=t.map[c];_===void 0&&(_=new BA(c),yd(t,_)),t=_}}}class Mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);zA(o,u,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const c=t[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function Td(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const GA=37297;let HA=0;function VA(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function WA(s){const e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(s);let i;switch(e===t?i="":e===To&&t===yo?i="LinearDisplayP3ToLinearSRGB":e===yo&&t===To&&(i="LinearSRGBToLinearDisplayP3"),s){case Ui:case Ro:return[i,"LinearTransferOETF"];case ln:case Hc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Ad(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const u=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+VA(s.getShaderSource(e),u)}else return a}function kA(s,e){const t=WA(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function XA(s,e){let t;switch(e){case tS:t="Linear";break;case nS:t="Reinhard";break;case iS:t="OptimizedCineon";break;case rS:t="ACESFilmic";break;case aS:t="AgX";break;case sS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qA(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function YA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function KA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $A(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),u=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function ps(s){return s!==""}function bd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(ZA,JA)}const jA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JA(s,e){let t=ht[e];if(t===void 0){const i=jA.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(s){return s.replace(QA,eb)}function eb(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Cd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function tb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case QM:e="ENVMAP_BLENDING_MIX";break;case eS:e="ENVMAP_BLENDING_ADD";break}return e}function sb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ab(s,e,t,i){const a=s.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const h=tb(t),d=nb(t),p=ib(t),_=rb(t),v=sb(t),M=t.isWebGL2?"":qA(t),T=YA(t),w=KA(o),m=a.createProgram();let g,U,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ps).join(`
`),g.length>0&&(g+=`
`),U=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ps).join(`
`),U.length>0&&(U+=`
`)):(g=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),U=[M,Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ht.tonemapping_pars_fragment:"",t.toneMapping!==tr?XA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,kA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),u=Nc(u),u=bd(u,t),u=wd(u,t),c=Nc(c),c=bd(c,t),c=wd(c,t),u=Rd(u),c=Rd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,U=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const I=R+g+u,V=R+U+c,F=Td(a,a.VERTEX_SHADER,I),A=Td(a,a.FRAGMENT_SHADER,V);a.attachShader(m,F),a.attachShader(m,A),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function z($){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(m).trim(),G=a.getShaderInfoLog(F).trim(),ee=a.getShaderInfoLog(A).trim();let Z=!0,ae=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,m,F,A);else{const re=Ad(a,F,"vertex"),ce=Ad(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+ie+`
`+re+`
`+ce)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(G===""||ee==="")&&(ae=!1);ae&&($.diagnostics={runnable:Z,programLog:ie,vertexShader:{log:G,prefix:g},fragmentShader:{log:ee,prefix:U}})}a.deleteShader(F),a.deleteShader(A),X=new Mo(a,m),S=$A(a,m)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let S;this.getAttributes=function(){return S===void 0&&z(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(m,GA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=F,this.fragmentShader=A,this}let ob=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cb(e),t.set(e,i)),i}}class cb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function ub(s,e,t,i,a,o,u){const c=new lp,h=new lb,d=new Set,p=[],_=a.isWebGL2,v=a.logarithmicDepthBuffer,M=a.vertexTextures;let T=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return d.add(S),S===0?"uv":`uv${S}`}function g(S,P,$,ie,G){const ee=ie.fog,Z=G.geometry,ae=S.isMeshStandardMaterial?ie.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||ae),ce=re&&re.mapping===wo?re.image.height:null,ue=w[S.type];S.precision!==null&&(T=a.getMaxPrecision(S.precision),T!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",T,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=me!==void 0?me.length:0;let Ze=0;Z.morphAttributes.position!==void 0&&(Ze=1),Z.morphAttributes.normal!==void 0&&(Ze=2),Z.morphAttributes.color!==void 0&&(Ze=3);let ne,de,Re,We;if(ue){const dt=hi[ue];ne=dt.vertexShader,de=dt.fragmentShader}else ne=S.vertexShader,de=S.fragmentShader,h.update(S),Re=h.getVertexShaderID(S),We=h.getFragmentShaderID(S);const Ge=s.getRenderTarget(),Le=G.isInstancedMesh===!0,vt=G.isBatchedMesh===!0,je=!!S.map,q=!!S.matcap,Vt=!!re,De=!!S.aoMap,ke=!!S.lightMap,Fe=!!S.bumpMap,Mt=!!S.normalMap,tt=!!S.displacementMap,L=!!S.emissiveMap,y=!!S.metalnessMap,K=!!S.roughnessMap,_e=S.anisotropy>0,he=S.clearcoat>0,ve=S.iridescence>0,Ie=S.sheen>0,ye=S.transmission>0,we=_e&&!!S.anisotropyMap,Be=he&&!!S.clearcoatMap,Qe=he&&!!S.clearcoatNormalMap,pe=he&&!!S.clearcoatRoughnessMap,St=ve&&!!S.iridescenceMap,st=ve&&!!S.iridescenceThicknessMap,Je=Ie&&!!S.sheenColorMap,ze=Ie&&!!S.sheenRoughnessMap,be=!!S.specularMap,nt=!!S.specularColorMap,O=!!S.specularIntensityMap,Me=ye&&!!S.transmissionMap,Te=ye&&!!S.thicknessMap,He=!!S.gradientMap,D=!!S.alphaMap,xe=S.alphaTest>0,ge=!!S.alphaHash,Ue=!!S.extensions;let Ve=tr;S.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const yt={isWebGL2:_,shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:de,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:We,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:T,batching:vt,instancing:Le,instancingColor:Le&&G.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:q,envMap:Vt,envMapMode:Vt&&re.mapping,envMapCubeUVHeight:ce,aoMap:De,lightMap:ke,bumpMap:Fe,normalMap:Mt,displacementMap:M&&tt,emissiveMap:L,normalMapObjectSpace:Mt&&S.normalMapType===_S,normalMapTangentSpace:Mt&&S.normalMapType===np,metalnessMap:y,roughnessMap:K,anisotropy:_e,anisotropyMap:we,clearcoat:he,clearcoatMap:Be,clearcoatNormalMap:Qe,clearcoatRoughnessMap:pe,iridescence:ve,iridescenceMap:St,iridescenceThicknessMap:st,sheen:Ie,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:be,specularColorMap:nt,specularIntensityMap:O,transmission:ye,transmissionMap:Me,thicknessMap:Te,gradientMap:He,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:D,alphaTest:xe,alphaHash:ge,combine:S.combine,mapUv:je&&m(S.map.channel),aoMapUv:De&&m(S.aoMap.channel),lightMapUv:ke&&m(S.lightMap.channel),bumpMapUv:Fe&&m(S.bumpMap.channel),normalMapUv:Mt&&m(S.normalMap.channel),displacementMapUv:tt&&m(S.displacementMap.channel),emissiveMapUv:L&&m(S.emissiveMap.channel),metalnessMapUv:y&&m(S.metalnessMap.channel),roughnessMapUv:K&&m(S.roughnessMap.channel),anisotropyMapUv:we&&m(S.anisotropyMap.channel),clearcoatMapUv:Be&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(S.sheenRoughnessMap.channel),specularMapUv:be&&m(S.specularMap.channel),specularColorMapUv:nt&&m(S.specularColorMap.channel),specularIntensityMapUv:O&&m(S.specularIntensityMap.channel),transmissionMapUv:Me&&m(S.transmissionMap.channel),thicknessMapUv:Te&&m(S.thicknessMap.channel),alphaMapUv:D&&m(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Mt||_e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(je||D),fog:!!ee,useFog:S.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ze,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,useLegacyLights:s._useLegacyLights,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&Pt.getTransfer(S.map.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ue&&S.extensions.derivatives===!0,extensionFragDepth:Ue&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ue&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=d.has(1),yt.vertexUv2s=d.has(2),yt.vertexUv3s=d.has(3),d.clear(),yt}function U(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)P.push($),P.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(R(P,S),I(P,S),P.push(s.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function R(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function I(S,P){c.disableAll(),P.isWebGL2&&c.enable(0),P.supportsVertexTextures&&c.enable(1),P.instancing&&c.enable(2),P.instancingColor&&c.enable(3),P.matcap&&c.enable(4),P.envMap&&c.enable(5),P.normalMapObjectSpace&&c.enable(6),P.normalMapTangentSpace&&c.enable(7),P.clearcoat&&c.enable(8),P.iridescence&&c.enable(9),P.alphaTest&&c.enable(10),P.vertexColors&&c.enable(11),P.vertexAlphas&&c.enable(12),P.vertexUv1s&&c.enable(13),P.vertexUv2s&&c.enable(14),P.vertexUv3s&&c.enable(15),P.vertexTangents&&c.enable(16),P.anisotropy&&c.enable(17),P.alphaHash&&c.enable(18),P.batching&&c.enable(19),S.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.skinning&&c.enable(4),P.morphTargets&&c.enable(5),P.morphNormals&&c.enable(6),P.morphColors&&c.enable(7),P.premultipliedAlpha&&c.enable(8),P.shadowMapEnabled&&c.enable(9),P.useLegacyLights&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.alphaToCoverage&&c.enable(20),S.push(c.mask)}function V(S){const P=w[S.type];let $;if(P){const ie=hi[P];$=XS.clone(ie.uniforms)}else $=S.uniforms;return $}function F(S,P){let $;for(let ie=0,G=p.length;ie<G;ie++){const ee=p[ie];if(ee.cacheKey===P){$=ee,++$.usedTimes;break}}return $===void 0&&($=new ab(s,P,S,o),p.push($)),$}function A(S){if(--S.usedTimes===0){const P=p.indexOf(S);p[P]=p[p.length-1],p.pop(),S.destroy()}}function z(S){h.remove(S)}function X(){h.dispose()}return{getParameters:g,getProgramCacheKey:U,getUniforms:V,acquireProgram:F,releaseProgram:A,releaseShaderCache:z,programs:p,dispose:X}}function fb(){let s=new WeakMap;function e(o){let u=s.get(o);return u===void 0&&(u={},s.set(o,u)),u}function t(o){s.delete(o)}function i(o,u,c){s.get(o)[u]=c}function a(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ld(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(_,v,M,T,w,m){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:M,groupOrder:T,renderOrder:_.renderOrder,z:w,group:m},s[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=M,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=w,g.group=m),e++,g}function c(_,v,M,T,w,m){const g=u(_,v,M,T,w,m);M.transmission>0?i.push(g):M.transparent===!0?a.push(g):t.push(g)}function h(_,v,M,T,w,m){const g=u(_,v,M,T,w,m);M.transmission>0?i.unshift(g):M.transparent===!0?a.unshift(g):t.unshift(g)}function d(_,v){t.length>1&&t.sort(_||hb),i.length>1&&i.sort(v||Pd),a.length>1&&a.sort(v||Pd)}function p(){for(let _=e,v=s.length;_<v;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:c,unshift:h,finish:p,sort:d}}function db(){let s=new WeakMap;function e(i,a){const o=s.get(i);let u;return o===void 0?(u=new Ld,s.set(i,[u])):a>=o.length?(u=new Ld,o.push(u)):u=o[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function pb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new At};break;case"SpotLight":t={position:new H,direction:new H,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gb=0;function _b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vb(s,e){const t=new pb,i=mb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new H);const o=new H,u=new Yt,c=new Yt;function h(p,_){let v=0,M=0,T=0;for(let $=0;$<9;$++)a.probe[$].set(0,0,0);let w=0,m=0,g=0,U=0,R=0,I=0,V=0,F=0,A=0,z=0,X=0;p.sort(_b);const S=_===!0?Math.PI:1;for(let $=0,ie=p.length;$<ie;$++){const G=p[$],ee=G.color,Z=G.intensity,ae=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=ee.r*Z*S,M+=ee.g*Z*S,T+=ee.b*Z*S;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)a.probe[ce].addScaledVector(G.sh.coefficients[ce],Z);X++}else if(G.isDirectionalLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*S),G.castShadow){const ue=G.shadow,me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,a.directionalShadow[w]=me,a.directionalShadowMap[w]=re,a.directionalShadowMatrix[w]=G.shadow.matrix,I++}a.directional[w]=ce,w++}else if(G.isSpotLight){const ce=t.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(ee).multiplyScalar(Z*S),ce.distance=ae,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,a.spot[g]=ce;const ue=G.shadow;if(G.map&&(a.spotLightMap[A]=G.map,A++,ue.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[g]=ue.matrix,G.castShadow){const me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,a.spotShadow[g]=me,a.spotShadowMap[g]=re,F++}g++}else if(G.isRectAreaLight){const ce=t.get(G);ce.color.copy(ee).multiplyScalar(Z),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),a.rectArea[U]=ce,U++}else if(G.isPointLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*S),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const ue=G.shadow,me=i.get(G);me.shadowBias=ue.bias,me.shadowNormalBias=ue.normalBias,me.shadowRadius=ue.radius,me.shadowMapSize=ue.mapSize,me.shadowCameraNear=ue.camera.near,me.shadowCameraFar=ue.camera.far,a.pointShadow[m]=me,a.pointShadowMap[m]=re,a.pointShadowMatrix[m]=G.shadow.matrix,V++}a.point[m]=ce,m++}else if(G.isHemisphereLight){const ce=t.get(G);ce.skyColor.copy(G.color).multiplyScalar(Z*S),ce.groundColor.copy(G.groundColor).multiplyScalar(Z*S),a.hemi[R]=ce,R++}}U>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=M,a.ambient[2]=T;const P=a.hash;(P.directionalLength!==w||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==U||P.hemiLength!==R||P.numDirectionalShadows!==I||P.numPointShadows!==V||P.numSpotShadows!==F||P.numSpotMaps!==A||P.numLightProbes!==X)&&(a.directional.length=w,a.spot.length=g,a.rectArea.length=U,a.point.length=m,a.hemi.length=R,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=V,a.pointShadowMap.length=V,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=V,a.spotLightMatrix.length=F+A-z,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=X,P.directionalLength=w,P.pointLength=m,P.spotLength=g,P.rectAreaLength=U,P.hemiLength=R,P.numDirectionalShadows=I,P.numPointShadows=V,P.numSpotShadows=F,P.numSpotMaps=A,P.numLightProbes=X,a.version=gb++)}function d(p,_){let v=0,M=0,T=0,w=0,m=0;const g=_.matrixWorldInverse;for(let U=0,R=p.length;U<R;U++){const I=p[U];if(I.isDirectionalLight){const V=a.directional[v];V.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(g),v++}else if(I.isSpotLight){const V=a.spot[T];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),V.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(o),V.direction.transformDirection(g),T++}else if(I.isRectAreaLight){const V=a.rectArea[w];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),c.identity(),u.copy(I.matrixWorld),u.premultiply(g),c.extractRotation(u),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),V.halfWidth.applyMatrix4(c),V.halfHeight.applyMatrix4(c),w++}else if(I.isPointLight){const V=a.point[M];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),M++}else if(I.isHemisphereLight){const V=a.hemi[m];V.direction.setFromMatrixPosition(I.matrixWorld),V.direction.transformDirection(g),m++}}}return{setup:h,setupView:d,state:a}}function Dd(s,e){const t=new vb(s,e),i=[],a=[];function o(){i.length=0,a.length=0}function u(_){i.push(_)}function c(_){a.push(_)}function h(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:o,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:h,setupLightsView:d,pushLight:u,pushShadow:c}}function xb(s,e){let t=new WeakMap;function i(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new Dd(s,e),t.set(o,[h])):u>=c.length?(h=new Dd(s,e),c.push(h)):h=c[u],h}function a(){t=new WeakMap}return{get:i,dispose:a}}class Mb extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
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
}`;function Tb(s,e,t){let i=new Wc;const a=new et,o=new et,u=new Gt,c=new Mb({depthPacking:gS}),h=new Sb,d={},p=t.maxTextureSize,_={[ir]:Sn,[Sn]:ir,[di]:di},v=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Eb,fragmentShader:yb}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new jn;T.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ln(T,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let g=this.type;this.render=function(F,A,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const X=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),$=s.state;$.setBlending(er),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=g!==Li&&this.type===Li,G=g===Li&&this.type!==Li;for(let ee=0,Z=F.length;ee<Z;ee++){const ae=F[ee],re=ae.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;a.copy(re.mapSize);const ce=re.getFrameExtents();if(a.multiply(ce),o.copy(re.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/ce.x),a.x=o.x*ce.x,re.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/ce.y),a.y=o.y*ce.y,re.mapSize.y=o.y)),re.map===null||ie===!0||G===!0){const me=this.type!==Li?{minFilter:xn,magFilter:xn}:{};re.map!==null&&re.map.dispose(),re.map=new Ar(a.x,a.y,me),re.map.texture.name=ae.name+".shadowMap",re.camera.updateProjectionMatrix()}s.setRenderTarget(re.map),s.clear();const ue=re.getViewportCount();for(let me=0;me<ue;me++){const Ee=re.getViewport(me);u.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),$.viewport(u),re.updateMatrices(ae,me),i=re.getFrustum(),I(A,z,re.camera,ae,this.type)}re.isPointLightShadow!==!0&&this.type===Li&&U(re,z),re.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(X,S,P)};function U(F,A){const z=e.update(w);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ar(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(A,null,z,v,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(A,null,z,M,w,null)}function R(F,A,z,X){let S=null;const P=z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(P!==void 0)S=P;else if(S=z.isPointLight===!0?h:c,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const $=S.uuid,ie=A.uuid;let G=d[$];G===void 0&&(G={},d[$]=G);let ee=G[ie];ee===void 0&&(ee=S.clone(),G[ie]=ee,A.addEventListener("dispose",V)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,X===Li?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:_[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=s.properties.get(S);$.light=z}return S}function I(F,A,z,X,S){if(F.visible===!1)return;if(F.layers.test(A.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&S===Li)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,F.matrixWorld);const ie=e.update(F),G=F.material;if(Array.isArray(G)){const ee=ie.groups;for(let Z=0,ae=ee.length;Z<ae;Z++){const re=ee[Z],ce=G[re.materialIndex];if(ce&&ce.visible){const ue=R(F,ce,X,S);F.onBeforeShadow(s,F,A,z,ie,ue,re),s.renderBufferDirect(z,null,ie,ue,F,re),F.onAfterShadow(s,F,A,z,ie,ue,re)}}}else if(G.visible){const ee=R(F,G,X,S);F.onBeforeShadow(s,F,A,z,ie,ee,null),s.renderBufferDirect(z,null,ie,ee,F,null),F.onAfterShadow(s,F,A,z,ie,ee,null)}}const $=F.children;for(let ie=0,G=$.length;ie<G;ie++)I($[ie],A,z,X,S)}function V(F){F.target.removeEventListener("dispose",V);for(const z in d){const X=d[z],S=F.target.uuid;S in X&&(X[S].dispose(),delete X[S])}}}function Ab(s,e,t){const i=t.isWebGL2;function a(){let D=!1;const xe=new Gt;let ge=null;const Ue=new Gt(0,0,0,0);return{setMask:function(Ve){ge!==Ve&&!D&&(s.colorMask(Ve,Ve,Ve,Ve),ge=Ve)},setLocked:function(Ve){D=Ve},setClear:function(Ve,yt,dt,Ct,$t){$t===!0&&(Ve*=Ct,yt*=Ct,dt*=Ct),xe.set(Ve,yt,dt,Ct),Ue.equals(xe)===!1&&(s.clearColor(Ve,yt,dt,Ct),Ue.copy(xe))},reset:function(){D=!1,ge=null,Ue.set(-1,0,0,0)}}}function o(){let D=!1,xe=null,ge=null,Ue=null;return{setTest:function(Ve){Ve?Le(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(Ve){xe!==Ve&&!D&&(s.depthMask(Ve),xe=Ve)},setFunc:function(Ve){if(ge!==Ve){switch(Ve){case qM:s.depthFunc(s.NEVER);break;case YM:s.depthFunc(s.ALWAYS);break;case KM:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case $M:s.depthFunc(s.EQUAL);break;case ZM:s.depthFunc(s.GEQUAL);break;case jM:s.depthFunc(s.GREATER);break;case JM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ve}},setLocked:function(Ve){D=Ve},setClear:function(Ve){Ue!==Ve&&(s.clearDepth(Ve),Ue=Ve)},reset:function(){D=!1,xe=null,ge=null,Ue=null}}}function u(){let D=!1,xe=null,ge=null,Ue=null,Ve=null,yt=null,dt=null,Ct=null,$t=null;return{setTest:function(Tt){D||(Tt?Le(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Tt){xe!==Tt&&!D&&(s.stencilMask(Tt),xe=Tt)},setFunc:function(Tt,It,sn){(ge!==Tt||Ue!==It||Ve!==sn)&&(s.stencilFunc(Tt,It,sn),ge=Tt,Ue=It,Ve=sn)},setOp:function(Tt,It,sn){(yt!==Tt||dt!==It||Ct!==sn)&&(s.stencilOp(Tt,It,sn),yt=Tt,dt=It,Ct=sn)},setLocked:function(Tt){D=Tt},setClear:function(Tt){$t!==Tt&&(s.clearStencil(Tt),$t=Tt)},reset:function(){D=!1,xe=null,ge=null,Ue=null,Ve=null,yt=null,dt=null,Ct=null,$t=null}}}const c=new a,h=new o,d=new u,p=new WeakMap,_=new WeakMap;let v={},M={},T=new WeakMap,w=[],m=null,g=!1,U=null,R=null,I=null,V=null,F=null,A=null,z=null,X=new At(0,0,0),S=0,P=!1,$=null,ie=null,G=null,ee=null,Z=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ce=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ue)[1]),re=ce>=1):ue.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),re=ce>=2);let me=null,Ee={};const Ze=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),de=new Gt().fromArray(Ze),Re=new Gt().fromArray(ne);function We(D,xe,ge,Ue){const Ve=new Uint8Array(4),yt=s.createTexture();s.bindTexture(D,yt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ge;dt++)i&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(xe,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(xe+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return yt}const Ge={};Ge[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),Ge[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ge[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Le(s.DEPTH_TEST),h.setFunc(So),tt(!1),L(fh),Le(s.CULL_FACE),Fe(er);function Le(D){v[D]!==!0&&(s.enable(D),v[D]=!0)}function vt(D){v[D]!==!1&&(s.disable(D),v[D]=!1)}function je(D,xe){return M[D]!==xe?(s.bindFramebuffer(D,xe),M[D]=xe,i&&(D===s.DRAW_FRAMEBUFFER&&(M[s.FRAMEBUFFER]=xe),D===s.FRAMEBUFFER&&(M[s.DRAW_FRAMEBUFFER]=xe)),!0):!1}function q(D,xe){let ge=w,Ue=!1;if(D)if(ge=T.get(xe),ge===void 0&&(ge=[],T.set(xe,ge)),D.isWebGLMultipleRenderTargets){const Ve=D.texture;if(ge.length!==Ve.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,dt=Ve.length;yt<dt;yt++)ge[yt]=s.COLOR_ATTACHMENT0+yt;ge.length=Ve.length,Ue=!0}}else ge[0]!==s.COLOR_ATTACHMENT0&&(ge[0]=s.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&(t.isWebGL2?s.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Vt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const De={[xr]:s.FUNC_ADD,[LM]:s.FUNC_SUBTRACT,[DM]:s.FUNC_REVERSE_SUBTRACT};if(i)De[mh]=s.MIN,De[gh]=s.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(De[mh]=D.MIN_EXT,De[gh]=D.MAX_EXT)}const ke={[IM]:s.ZERO,[UM]:s.ONE,[NM]:s.SRC_COLOR,[bc]:s.SRC_ALPHA,[HM]:s.SRC_ALPHA_SATURATE,[zM]:s.DST_COLOR,[FM]:s.DST_ALPHA,[OM]:s.ONE_MINUS_SRC_COLOR,[wc]:s.ONE_MINUS_SRC_ALPHA,[GM]:s.ONE_MINUS_DST_COLOR,[BM]:s.ONE_MINUS_DST_ALPHA,[VM]:s.CONSTANT_COLOR,[WM]:s.ONE_MINUS_CONSTANT_COLOR,[kM]:s.CONSTANT_ALPHA,[XM]:s.ONE_MINUS_CONSTANT_ALPHA};function Fe(D,xe,ge,Ue,Ve,yt,dt,Ct,$t,Tt){if(D===er){g===!0&&(vt(s.BLEND),g=!1);return}if(g===!1&&(Le(s.BLEND),g=!0),D!==PM){if(D!==U||Tt!==P){if((R!==xr||F!==xr)&&(s.blendEquation(s.FUNC_ADD),R=xr,F=xr),Tt)switch(D){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ph:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}I=null,V=null,A=null,z=null,X.set(0,0,0),S=0,U=D,P=Tt}return}Ve=Ve||xe,yt=yt||ge,dt=dt||Ue,(xe!==R||Ve!==F)&&(s.blendEquationSeparate(De[xe],De[Ve]),R=xe,F=Ve),(ge!==I||Ue!==V||yt!==A||dt!==z)&&(s.blendFuncSeparate(ke[ge],ke[Ue],ke[yt],ke[dt]),I=ge,V=Ue,A=yt,z=dt),(Ct.equals(X)===!1||$t!==S)&&(s.blendColor(Ct.r,Ct.g,Ct.b,$t),X.copy(Ct),S=$t),U=D,P=!1}function Mt(D,xe){D.side===di?vt(s.CULL_FACE):Le(s.CULL_FACE);let ge=D.side===Sn;xe&&(ge=!ge),tt(ge),D.blending===ms&&D.transparent===!1?Fe(er):Fe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),c.setMask(D.colorWrite);const Ue=D.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(D.stencilWriteMask),d.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),d.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),K(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(D){$!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),$=D)}function L(D){D!==wM?(Le(s.CULL_FACE),D!==ie&&(D===fh?s.cullFace(s.BACK):D===RM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),ie=D}function y(D){D!==G&&(re&&s.lineWidth(D),G=D)}function K(D,xe,ge){D?(Le(s.POLYGON_OFFSET_FILL),(ee!==xe||Z!==ge)&&(s.polygonOffset(xe,ge),ee=xe,Z=ge)):vt(s.POLYGON_OFFSET_FILL)}function _e(D){D?Le(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function he(D){D===void 0&&(D=s.TEXTURE0+ae-1),me!==D&&(s.activeTexture(D),me=D)}function ve(D,xe,ge){ge===void 0&&(me===null?ge=s.TEXTURE0+ae-1:ge=me);let Ue=Ee[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},Ee[ge]=Ue),(Ue.type!==D||Ue.texture!==xe)&&(me!==ge&&(s.activeTexture(ge),me=ge),s.bindTexture(D,xe||Ge[D]),Ue.type=D,Ue.texture=xe)}function Ie(){const D=Ee[me];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ye(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(D){de.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function O(D){Re.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function Me(D,xe){let ge=_.get(xe);ge===void 0&&(ge=new WeakMap,_.set(xe,ge));let Ue=ge.get(D);Ue===void 0&&(Ue=s.getUniformBlockIndex(xe,D.name),ge.set(D,Ue))}function Te(D,xe){const Ue=_.get(xe).get(D);p.get(xe)!==Ue&&(s.uniformBlockBinding(xe,Ue,D.__bindingPointIndex),p.set(xe,Ue))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},me=null,Ee={},M={},T=new WeakMap,w=[],m=null,g=!1,U=null,R=null,I=null,V=null,F=null,A=null,z=null,X=new At(0,0,0),S=0,P=!1,$=null,ie=null,G=null,ee=null,Z=null,de.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Le,disable:vt,bindFramebuffer:je,drawBuffers:q,useProgram:Vt,setBlending:Fe,setMaterial:Mt,setFlipSided:tt,setCullFace:L,setLineWidth:y,setPolygonOffset:K,setScissorTest:_e,activeTexture:he,bindTexture:ve,unbindTexture:Ie,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:ze,texImage3D:be,updateUBOMapping:Me,uniformBlockBinding:Te,texStorage2D:st,texStorage3D:Je,texSubImage2D:Be,texSubImage3D:Qe,compressedTexSubImage2D:pe,compressedTexSubImage3D:St,scissor:nt,viewport:O,reset:He}}function bb(s,e,t,i,a,o,u){const c=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,y){return M?new OffscreenCanvas(L,y):ta("canvas")}function w(L,y,K,_e){let he=1;if((L.width>_e||L.height>_e)&&(he=_e/Math.max(L.width,L.height)),he<1||y===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ve=y?Uc:Math.floor,Ie=ve(he*L.width),ye=ve(he*L.height);_===void 0&&(_=T(Ie,ye));const we=K?T(Ie,ye):_;return we.width=Ie,we.height=ye,we.getContext("2d").drawImage(L,0,0,Ie,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ie+"x"+ye+")."),we}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return qh(L.width)&&qh(L.height)}function g(L){return c?!1:L.wrapS!==ai||L.wrapT!==ai||L.minFilter!==xn&&L.minFilter!==Pn}function U(L,y){return L.generateMipmaps&&y&&L.minFilter!==xn&&L.minFilter!==Pn}function R(L){s.generateMipmap(L)}function I(L,y,K,_e,he=!1){if(c===!1)return y;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve=y;if(y===s.RED&&(K===s.FLOAT&&(ve=s.R32F),K===s.HALF_FLOAT&&(ve=s.R16F),K===s.UNSIGNED_BYTE&&(ve=s.R8)),y===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(ve=s.R8UI),K===s.UNSIGNED_SHORT&&(ve=s.R16UI),K===s.UNSIGNED_INT&&(ve=s.R32UI),K===s.BYTE&&(ve=s.R8I),K===s.SHORT&&(ve=s.R16I),K===s.INT&&(ve=s.R32I)),y===s.RG&&(K===s.FLOAT&&(ve=s.RG32F),K===s.HALF_FLOAT&&(ve=s.RG16F),K===s.UNSIGNED_BYTE&&(ve=s.RG8)),y===s.RGBA){const Ie=he?Eo:Pt.getTransfer(_e);K===s.FLOAT&&(ve=s.RGBA32F),K===s.HALF_FLOAT&&(ve=s.RGBA16F),K===s.UNSIGNED_BYTE&&(ve=Ie===Ft?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function V(L,y,K){return U(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==Pn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function F(L){return L===xn||L===_h||L===Xs?s.NEAREST:s.LINEAR}function A(L){const y=L.target;y.removeEventListener("dispose",A),X(y),y.isVideoTexture&&p.delete(y)}function z(L){const y=L.target;y.removeEventListener("dispose",z),P(y)}function X(L){const y=i.get(L);if(y.__webglInit===void 0)return;const K=L.source,_e=v.get(K);if(_e){const he=_e[y.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(L),Object.keys(_e).length===0&&v.delete(K)}i.remove(L)}function S(L){const y=i.get(L);s.deleteTexture(y.__webglTexture);const K=L.source,_e=v.get(K);delete _e[y.__cacheKey],u.memory.textures--}function P(L){const y=L.texture,K=i.get(L),_e=i.get(y);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(K.__webglFramebuffer[he]))for(let ve=0;ve<K.__webglFramebuffer[he].length;ve++)s.deleteFramebuffer(K.__webglFramebuffer[he][ve]);else s.deleteFramebuffer(K.__webglFramebuffer[he]);K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[he])}else{if(Array.isArray(K.__webglFramebuffer))for(let he=0;he<K.__webglFramebuffer.length;he++)s.deleteFramebuffer(K.__webglFramebuffer[he]);else s.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let he=0;he<K.__webglColorRenderbuffer.length;he++)K.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[he]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let he=0,ve=y.length;he<ve;he++){const Ie=i.get(y[he]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),u.memory.textures--),i.remove(y[he])}i.remove(y),i.remove(L)}let $=0;function ie(){$=0}function G(){const L=$;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),$+=1,L}function ee(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function Z(L,y){const K=i.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const _e=L.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(K,L,y);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+y)}function ae(L,y){const K=i.get(L);if(L.version>0&&K.__version!==L.version){de(K,L,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+y)}function re(L,y){const K=i.get(L);if(L.version>0&&K.__version!==L.version){de(K,L,y);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+y)}function ce(L,y){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Re(K,L,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+y)}const ue={[Pc]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Lc]:s.MIRRORED_REPEAT},me={[xn]:s.NEAREST,[_h]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[kl]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},Ee={[vS]:s.NEVER,[TS]:s.ALWAYS,[xS]:s.LESS,[ip]:s.LEQUAL,[MS]:s.EQUAL,[yS]:s.GEQUAL,[SS]:s.GREATER,[ES]:s.NOTEQUAL};function Ze(L,y,K){if(y.type===Di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Pn||y.magFilter===kl||y.magFilter===Xs||y.magFilter===Sr||y.minFilter===Pn||y.minFilter===kl||y.minFilter===Xs||y.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(s.texParameteri(L,s.TEXTURE_WRAP_S,ue[y.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[y.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[y.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,me[y.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,me[y.minFilter])):(s.texParameteri(L,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(L,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==ai||y.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,s.TEXTURE_MAG_FILTER,F(y.magFilter)),s.texParameteri(L,s.TEXTURE_MIN_FILTER,F(y.minFilter)),y.minFilter!==xn&&y.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===xn||y.minFilter!==Xs&&y.minFilter!==Sr||y.type===Di&&e.has("OES_texture_float_linear")===!1||c===!1&&y.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(L,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function ne(L,y){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",A));const _e=y.source;let he=v.get(_e);he===void 0&&(he={},v.set(_e,he));const ve=ee(y);if(ve!==L.__cacheKey){he[ve]===void 0&&(he[ve]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),he[ve].usedTimes++;const Ie=he[L.__cacheKey];Ie!==void 0&&(he[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(y)),L.__cacheKey=ve,L.__webglTexture=he[ve].texture}return K}function de(L,y,K){let _e=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(_e=s.TEXTURE_3D);const he=ne(L,y),ve=y.source;t.bindTexture(_e,L.__webglTexture,s.TEXTURE0+K);const Ie=i.get(ve);if(ve.version!==Ie.__version||he===!0){t.activeTexture(s.TEXTURE0+K);const ye=Pt.getPrimaries(Pt.workingColorSpace),we=y.colorSpace===Zn?null:Pt.getPrimaries(y.colorSpace),Be=y.colorSpace===Zn||ye===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Qe=g(y)&&m(y.image)===!1;let pe=w(y.image,Qe,!1,a.maxTextureSize);pe=tt(y,pe);const St=m(pe)||c,st=o.convert(y.format,y.colorSpace);let Je=o.convert(y.type),ze=I(y.internalFormat,st,Je,y.colorSpace,y.isVideoTexture);Ze(_e,y,St);let be;const nt=y.mipmaps,O=c&&y.isVideoTexture!==!0&&ze!==ep,Me=Ie.__version===void 0||he===!0,Te=ve.dataReady,He=V(y,pe,St);if(y.isDepthTexture)ze=s.DEPTH_COMPONENT,c?y.type===Di?ze=s.DEPTH_COMPONENT32F:y.type===Ji?ze=s.DEPTH_COMPONENT24:y.type===Er?ze=s.DEPTH24_STENCIL8:ze=s.DEPTH_COMPONENT16:y.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===yr&&ze===s.DEPTH_COMPONENT&&y.type!==Gc&&y.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ji,Je=o.convert(y.type)),y.format===Ms&&ze===s.DEPTH_COMPONENT&&(ze=s.DEPTH_STENCIL,y.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Er,Je=o.convert(y.type))),Me&&(O?t.texStorage2D(s.TEXTURE_2D,1,ze,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,ze,pe.width,pe.height,0,st,Je,null));else if(y.isDataTexture)if(nt.length>0&&St){O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,Je,be.data):t.texImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,st,Je,be.data);y.generateMipmaps=!1}else O?(Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height),Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe.width,pe.height,st,Je,pe.data)):t.texImage2D(s.TEXTURE_2D,0,ze,pe.width,pe.height,0,st,Je,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,nt[0].width,nt[0].height,pe.depth);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],y.format!==oi?st!==null?O?Te&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,pe.depth,st,be.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,D,ze,be.width,be.height,pe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,D,0,0,0,be.width,be.height,pe.depth,st,Je,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,D,ze,be.width,be.height,pe.depth,0,st,Je,be.data)}else{O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],y.format!==oi?st!==null?O?Te&&t.compressedTexSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,be.data):t.compressedTexImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,be.width,be.height,st,Je,be.data):t.texImage2D(s.TEXTURE_2D,D,ze,be.width,be.height,0,st,Je,be.data)}else if(y.isDataArrayTexture)O?(Me&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,ze,pe.width,pe.height,pe.depth),Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,st,Je,pe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,pe.width,pe.height,pe.depth,0,st,Je,pe.data);else if(y.isData3DTexture)O?(Me&&t.texStorage3D(s.TEXTURE_3D,He,ze,pe.width,pe.height,pe.depth),Te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,st,Je,pe.data)):t.texImage3D(s.TEXTURE_3D,0,ze,pe.width,pe.height,pe.depth,0,st,Je,pe.data);else if(y.isFramebufferTexture){if(Me)if(O)t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height);else{let D=pe.width,xe=pe.height;for(let ge=0;ge<He;ge++)t.texImage2D(s.TEXTURE_2D,ge,ze,D,xe,0,st,Je,null),D>>=1,xe>>=1}}else if(nt.length>0&&St){O&&Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,nt[0].width,nt[0].height);for(let D=0,xe=nt.length;D<xe;D++)be=nt[D],O?Te&&t.texSubImage2D(s.TEXTURE_2D,D,0,0,st,Je,be):t.texImage2D(s.TEXTURE_2D,D,ze,st,Je,be);y.generateMipmaps=!1}else O?(Me&&t.texStorage2D(s.TEXTURE_2D,He,ze,pe.width,pe.height),Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,st,Je,pe)):t.texImage2D(s.TEXTURE_2D,0,ze,st,Je,pe);U(y,St)&&R(_e),Ie.__version=ve.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function Re(L,y,K){if(y.image.length!==6)return;const _e=ne(L,y),he=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const ve=i.get(he);if(he.version!==ve.__version||_e===!0){t.activeTexture(s.TEXTURE0+K);const Ie=Pt.getPrimaries(Pt.workingColorSpace),ye=y.colorSpace===Zn?null:Pt.getPrimaries(y.colorSpace),we=y.colorSpace===Zn||Ie===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Be=y.isCompressedTexture||y.image[0].isCompressedTexture,Qe=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let D=0;D<6;D++)!Be&&!Qe?pe[D]=w(y.image[D],!1,!0,a.maxCubemapSize):pe[D]=Qe?y.image[D].image:y.image[D],pe[D]=tt(y,pe[D]);const St=pe[0],st=m(St)||c,Je=o.convert(y.format,y.colorSpace),ze=o.convert(y.type),be=I(y.internalFormat,Je,ze,y.colorSpace),nt=c&&y.isVideoTexture!==!0,O=ve.__version===void 0||_e===!0,Me=he.dataReady;let Te=V(y,St,st);Ze(s.TEXTURE_CUBE_MAP,y,st);let He;if(Be){nt&&O&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,be,St.width,St.height);for(let D=0;D<6;D++){He=pe[D].mipmaps;for(let xe=0;xe<He.length;xe++){const ge=He[xe];y.format!==oi?Je!==null?nt?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,0,0,ge.width,ge.height,Je,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,0,0,ge.width,ge.height,Je,ze,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe,be,ge.width,ge.height,0,Je,ze,ge.data)}}}else{He=y.mipmaps,nt&&O&&(He.length>0&&Te++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,be,pe[0].width,pe[0].height));for(let D=0;D<6;D++)if(Qe){nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,pe[D].width,pe[D].height,Je,ze,pe[D].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,pe[D].width,pe[D].height,0,Je,ze,pe[D].data);for(let xe=0;xe<He.length;xe++){const Ue=He[xe].image[D].image;nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,0,0,Ue.width,Ue.height,Je,ze,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,be,Ue.width,Ue.height,0,Je,ze,Ue.data)}}else{nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Je,ze,pe[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,be,Je,ze,pe[D]);for(let xe=0;xe<He.length;xe++){const ge=He[xe];nt?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,0,0,Je,ze,ge.image[D]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe+1,be,Je,ze,ge.image[D])}}}U(y,st)&&R(s.TEXTURE_CUBE_MAP),ve.__version=he.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function We(L,y,K,_e,he,ve){const Ie=o.convert(K.format,K.colorSpace),ye=o.convert(K.type),we=I(K.internalFormat,Ie,ye,K.colorSpace);if(!i.get(y).__hasExternalTextures){const Qe=Math.max(1,y.width>>ve),pe=Math.max(1,y.height>>ve);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,ve,we,Qe,pe,y.depth,0,Ie,ye,null):t.texImage2D(he,ve,we,Qe,pe,0,Ie,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Fe(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,he,i.get(K).__webglTexture,0,ke(y)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,he,i.get(K).__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,y,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),y.depthBuffer&&!y.stencilBuffer){let _e=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||Fe(y)){const he=y.depthTexture;he&&he.isDepthTexture&&(he.type===Di?_e=s.DEPTH_COMPONENT32F:he.type===Ji&&(_e=s.DEPTH_COMPONENT24));const ve=ke(y);Fe(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,_e,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,_e,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,L)}else if(y.depthBuffer&&y.stencilBuffer){const _e=ke(y);K&&Fe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,y.width,y.height):Fe(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,L)}else{const _e=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let he=0;he<_e.length;he++){const ve=_e[he],Ie=o.convert(ve.format,ve.colorSpace),ye=o.convert(ve.type),we=I(ve.internalFormat,Ie,ye,ve.colorSpace),Be=ke(y);K&&Fe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,we,y.width,y.height):Fe(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Be,we,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,we,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(L,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const _e=i.get(y.depthTexture).__webglTexture,he=ke(y);if(y.depthTexture.format===yr)Fe(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(y.depthTexture.format===Ms)Fe(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function vt(L){const y=i.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!y.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Le(y.__webglFramebuffer,L)}else if(K){y.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[_e]),y.__webglDepthbuffer[_e]=s.createRenderbuffer(),Ge(y.__webglDepthbuffer[_e],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ge(y.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(L,y,K){const _e=i.get(L);y!==void 0&&We(_e.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&vt(L)}function q(L){const y=L.texture,K=i.get(L),_e=i.get(y);L.addEventListener("dispose",z),L.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=y.version,u.memory.textures++);const he=L.isWebGLCubeRenderTarget===!0,ve=L.isWebGLMultipleRenderTargets===!0,Ie=m(L)||c;if(he){K.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer[ye]=[];for(let we=0;we<y.mipmaps.length;we++)K.__webglFramebuffer[ye][we]=s.createFramebuffer()}else K.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(c&&y.mipmaps&&y.mipmaps.length>0){K.__webglFramebuffer=[];for(let ye=0;ye<y.mipmaps.length;ye++)K.__webglFramebuffer[ye]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(ve)if(a.drawBuffers){const ye=L.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=i.get(ye[we]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Fe(L)===!1){const ye=ve?y:[y];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Be=ye[we];K.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[we]);const Qe=o.convert(Be.format,Be.colorSpace),pe=o.convert(Be.type),St=I(Be.internalFormat,Qe,pe,Be.colorSpace,L.isXRRenderTarget===!0),st=ke(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,St,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,K.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,y,Ie);for(let ye=0;ye<6;ye++)if(c&&y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)We(K.__webglFramebuffer[ye][we],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else We(K.__webglFramebuffer[ye],L,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);U(y,Ie)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const ye=L.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=ye[we],pe=i.get(Qe);t.bindTexture(s.TEXTURE_2D,pe.__webglTexture),Ze(s.TEXTURE_2D,Qe,Ie),We(K.__webglFramebuffer,L,Qe,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),U(Qe,Ie)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?ye=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,_e.__webglTexture),Ze(ye,y,Ie),c&&y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)We(K.__webglFramebuffer[we],L,y,s.COLOR_ATTACHMENT0,ye,we);else We(K.__webglFramebuffer,L,y,s.COLOR_ATTACHMENT0,ye,0);U(y,Ie)&&R(ye),t.unbindTexture()}L.depthBuffer&&vt(L)}function Vt(L){const y=m(L)||c,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let _e=0,he=K.length;_e<he;_e++){const ve=K[_e];if(U(ve,y)){const Ie=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ye=i.get(ve).__webglTexture;t.bindTexture(Ie,ye),R(Ie),t.unbindTexture()}}}function De(L){if(c&&L.samples>0&&Fe(L)===!1){const y=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,_e=L.height;let he=s.COLOR_BUFFER_BIT;const ve=[],Ie=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=i.get(L),we=L.isWebGLMultipleRenderTargets===!0;if(we)for(let Be=0;Be<y.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Be=0;Be<y.length;Be++){ve.push(s.COLOR_ATTACHMENT0+Be),L.depthBuffer&&ve.push(Ie);const Qe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Qe===!1&&(L.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),we&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]),Qe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ie]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ie])),we){const pe=i.get(y[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,K,_e,0,0,K,_e,he,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Be=0;Be<y.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]);const Qe=i.get(y[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ke(L){return Math.min(a.maxSamples,L.samples)}function Fe(L){const y=i.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(L){const y=u.render.frame;p.get(L)!==y&&(p.set(L,y),L.update())}function tt(L,y){const K=L.colorSpace,_e=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dc||K!==Ui&&K!==Zn&&(Pt.getTransfer(K)===Ft?c===!1?e.has("EXT_sRGB")===!0&&_e===oi?(L.format=Dc,L.minFilter=Pn,L.generateMipmaps=!1):y=sp.sRGBToLinear(y):(_e!==oi||he!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),y}this.allocateTextureUnit=G,this.resetTextureUnits=ie,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=je,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Fe}function wb(s,e,t){const i=t.isWebGL2;function a(o,u=Zn){let c;const h=Pt.getTransfer(u);if(o===nr)return s.UNSIGNED_BYTE;if(o===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(o===oS)return s.BYTE;if(o===lS)return s.SHORT;if(o===Gc)return s.UNSIGNED_SHORT;if(o===Kd)return s.INT;if(o===Ji)return s.UNSIGNED_INT;if(o===Di)return s.FLOAT;if(o===ea)return i?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===cS)return s.ALPHA;if(o===oi)return s.RGBA;if(o===uS)return s.LUMINANCE;if(o===fS)return s.LUMINANCE_ALPHA;if(o===yr)return s.DEPTH_COMPONENT;if(o===Ms)return s.DEPTH_STENCIL;if(o===Dc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===hS)return s.RED;if(o===jd)return s.RED_INTEGER;if(o===dS)return s.RG;if(o===Jd)return s.RG_INTEGER;if(o===Qd)return s.RGBA_INTEGER;if(o===Xl||o===ql||o===Yl||o===Kl)if(h===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Xl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ql)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Xl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ql)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Yl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Kl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===vh||o===xh||o===Mh||o===Sh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Sh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===ep)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Eh||o===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===Eh)return h===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===yh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Th||o===Ah||o===bh||o===wh||o===Rh||o===Ch||o===Ph||o===Lh||o===Dh||o===Ih||o===Uh||o===Nh||o===Oh||o===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===Th)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ah)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===bh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===wh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Rh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ch)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Ph)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Lh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Dh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ih)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Uh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Nh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Oh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Fh)return h===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===$l||o===Bh||o===zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===$l)return h===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===pS||o===Gh||o===Hh||o===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===$l)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Gh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Hh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Er?i?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:a}}class Rb extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const w of e.hand.values()){const m=t.getJointPose(w,i),g=this._getHandJoint(d,w);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),M=.02,T=.005;d.inputState.pinching&&v>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
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

}`;class Db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new En,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,a=new rr({extensions:{fragDepth:!0},vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new Lo(20,20),a)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Ib extends wr{constructor(e,t){super();const i=this;let a=null,o=1,u=null,c="local-floor",h=1,d=null,p=null,_=null,v=null,M=null,T=null;const w=new Db,m=t.getContextAttributes();let g=null,U=null;const R=[],I=[],V=new et;let F=null;const A=new rn;A.layers.enable(1),A.viewport=new Gt;const z=new rn;z.layers.enable(2),z.viewport=new Gt;const X=[A,z],S=new Rb;S.layers.enable(1),S.layers.enable(2);let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=R[ne];return de===void 0&&(de=new xc,R[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=R[ne];return de===void 0&&(de=new xc,R[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=R[ne];return de===void 0&&(de=new xc,R[ne]=de),de.getHandSpace()};function ie(ne){const de=I.indexOf(ne.inputSource);if(de===-1)return;const Re=R[de];Re!==void 0&&(Re.update(ne.inputSource,ne.frame,d||u),Re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",ee);for(let ne=0;ne<R.length;ne++){const de=I[ne];de!==null&&(I[ne]=null,R[ne].disconnect(de))}P=null,$=null,w.reset(),e.setRenderTarget(g),M=null,v=null,_=null,a=null,U=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){c=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",G),a.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:a.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(a,t,de),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Ar(M.framebufferWidth,M.framebufferHeight,{format:oi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,Re=null,We=null;m.depth&&(We=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Ms:yr,Re=m.stencil?Er:Ji);const Ge={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};_=new XRWebGLBinding(a,t),v=_.createProjectionLayer(Ge),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new Ar(v.textureWidth,v.textureHeight,{format:oi,type:nr,depthTexture:new gp(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Le=e.properties.get(U);Le.__ignoreDepthValues=v.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await a.requestReferenceSpace(c),Ze.setContext(a),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ee(ne){for(let de=0;de<ne.removed.length;de++){const Re=ne.removed[de],We=I.indexOf(Re);We>=0&&(I[We]=null,R[We].disconnect(Re))}for(let de=0;de<ne.added.length;de++){const Re=ne.added[de];let We=I.indexOf(Re);if(We===-1){for(let Le=0;Le<R.length;Le++)if(Le>=I.length){I.push(Re),We=Le;break}else if(I[Le]===null){I[Le]=Re,We=Le;break}if(We===-1)break}const Ge=R[We];Ge&&Ge.connect(Re)}}const Z=new H,ae=new H;function re(ne,de,Re){Z.setFromMatrixPosition(de.matrixWorld),ae.setFromMatrixPosition(Re.matrixWorld);const We=Z.distanceTo(ae),Ge=de.projectionMatrix.elements,Le=Re.projectionMatrix.elements,vt=Ge[14]/(Ge[10]-1),je=Ge[14]/(Ge[10]+1),q=(Ge[9]+1)/Ge[5],Vt=(Ge[9]-1)/Ge[5],De=(Ge[8]-1)/Ge[0],ke=(Le[8]+1)/Le[0],Fe=vt*De,Mt=vt*ke,tt=We/(-De+ke),L=tt*-De;de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(L),ne.translateZ(tt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const y=vt+tt,K=je+tt,_e=Fe-L,he=Mt+(We-L),ve=q*je/K*y,Ie=Vt*je/K*y;ne.projectionMatrix.makePerspective(_e,he,ve,Ie,y,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ce(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;w.texture!==null&&(ne.near=w.depthNear,ne.far=w.depthFar),S.near=z.near=A.near=ne.near,S.far=z.far=A.far=ne.far,(P!==S.near||$!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,$=S.far,A.near=P,A.far=$,z.near=P,z.far=$,A.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const de=ne.parent,Re=S.cameras;ce(S,de);for(let We=0;We<Re.length;We++)ce(Re[We],de);Re.length===2?re(S,A,z):S.projectionMatrix.copy(A.projectionMatrix),ue(ne,S,de)};function ue(ne,de,Re){Re===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(Re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ic*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(ne){h=ne,v!==null&&(v.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return w.texture!==null};let me=null;function Ee(ne,de){if(p=de.getViewerPose(d||u),T=de,p!==null){const Re=p.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let We=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,We=!0);for(let Le=0;Le<Re.length;Le++){const vt=Re[Le];let je=null;if(M!==null)je=M.getViewport(vt);else{const Vt=_.getViewSubImage(v,vt);je=Vt.viewport,Le===0&&(e.setRenderTargetTextures(U,Vt.colorTexture,v.ignoreDepthValues?void 0:Vt.depthStencilTexture),e.setRenderTarget(U))}let q=X[Le];q===void 0&&(q=new rn,q.layers.enable(Le),q.viewport=new Gt,X[Le]=q),q.matrix.fromArray(vt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(vt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(je.x,je.y,je.width,je.height),Le===0&&(S.matrix.copy(q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),We===!0&&S.cameras.push(q)}const Ge=a.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Le=_.getDepthInformation(Re[0]);Le&&Le.isValid&&Le.texture&&w.init(e,Le,a.renderState)}}for(let Re=0;Re<R.length;Re++){const We=I[Re],Ge=R[Re];We!==null&&Ge!==void 0&&Ge.update(We,de,d||u)}w.render(e,S),me&&me(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ze=new mp;Ze.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){me=ne},this.dispose=function(){}}}function Ub(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,hp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function a(m,g,U,R,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),_(m,g)):g.isMeshPhongMaterial?(o(m,g),p(m,g)):g.isMeshStandardMaterial?(o(m,g),v(m,g),g.isMeshPhysicalMaterial&&M(m,g,I)):g.isMeshMatcapMaterial?(o(m,g),T(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),w(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(u(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?h(m,g,U,R):g.isSpriteMaterial?d(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const U=e.get(g).envMap;if(U&&(m.envMap.value=U,m.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const R=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*R,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function h(m,g,U,R){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*U,m.scale.value=R*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function p(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function _(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function M(m,g,U){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=U.texture,m.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function T(m,g){g.matcap&&(m.matcap.value=g.matcap)}function w(m,g){const U=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(U.matrixWorld),m.nearDistance.value=U.shadow.camera.near,m.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Nb(s,e,t,i){let a={},o={},u=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(U,R){const I=R.program;i.uniformBlockBinding(U,I)}function d(U,R){let I=a[U.id];I===void 0&&(T(U),I=p(U),a[U.id]=I,U.addEventListener("dispose",m));const V=R.program;i.updateUBOMapping(U,V);const F=e.render.frame;o[U.id]!==F&&(v(U),o[U.id]=F)}function p(U){const R=_();U.__bindingPointIndex=R;const I=s.createBuffer(),V=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,V,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,I),I}function _(){for(let U=0;U<c;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=a[U.id],I=U.uniforms,V=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let F=0,A=I.length;F<A;F++){const z=Array.isArray(I[F])?I[F]:[I[F]];for(let X=0,S=z.length;X<S;X++){const P=z[X];if(M(P,F,X,V)===!0){const $=P.__offset,ie=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let ee=0;ee<ie.length;ee++){const Z=ie[ee],ae=w(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,$+G,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,G),G+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,R,I,V){const F=U.value,A=R+"_"+I;if(V[A]===void 0)return typeof F=="number"||typeof F=="boolean"?V[A]=F:V[A]=F.clone(),!0;{const z=V[A];if(typeof F=="number"||typeof F=="boolean"){if(z!==F)return V[A]=F,!0}else if(z.equals(F)===!1)return z.copy(F),!0}return!1}function T(U){const R=U.uniforms;let I=0;const V=16;for(let A=0,z=R.length;A<z;A++){const X=Array.isArray(R[A])?R[A]:[R[A]];for(let S=0,P=X.length;S<P;S++){const $=X[S],ie=Array.isArray($.value)?$.value:[$.value];for(let G=0,ee=ie.length;G<ee;G++){const Z=ie[G],ae=w(Z),re=I%V;re!==0&&V-re<ae.boundary&&(I+=V-re),$.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=I,I+=ae.storage}}}const F=I%V;return F>0&&(I+=V-F),U.__size=I,U.__cache={},this}function w(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function m(U){const R=U.target;R.removeEventListener("dispose",m);const I=u.indexOf(R.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete o[R.id]}function g(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},o={}}return{bind:h,update:d,dispose:g}}class Ep{constructor(e={}){const{canvas:t=wS(),context:i=null,depth:a=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const M=new Uint32Array(4),T=new Int32Array(4);let w=null,m=null;const g=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const R=this;let I=!1,V=0,F=0,A=null,z=-1,X=null;const S=new Gt,P=new Gt;let $=null;const ie=new At(0);let G=0,ee=t.width,Z=t.height,ae=1,re=null,ce=null;const ue=new Gt(0,0,ee,Z),me=new Gt(0,0,ee,Z);let Ee=!1;const Ze=new Wc;let ne=!1,de=!1,Re=null;const We=new Yt,Ge=new et,Le=new H,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return A===null?ae:1}let q=i;function Vt(C,Y){for(let J=0;J<C.length;J++){const te=C[J],j=t.getContext(te,Y);if(j!==null)return j}return null}try{const C={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",xe,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&Y.shift(),q=Vt(Y,C),q===null)throw Vt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let De,ke,Fe,Mt,tt,L,y,K,_e,he,ve,Ie,ye,we,Be,Qe,pe,St,st,Je,ze,be,nt,O;function Me(){De=new VT(q),ke=new NT(q,De,e),De.init(ke),be=new wb(q,De,ke),Fe=new Ab(q,De,ke),Mt=new XT(q),tt=new fb,L=new bb(q,De,Fe,tt,ke,be,Mt),y=new FT(R),K=new HT(R),_e=new JS(q,ke),nt=new IT(q,De,_e,ke),he=new WT(q,_e,Mt,nt),ve=new $T(q,he,_e,Mt),st=new KT(q,ke,L),Qe=new OT(tt),Ie=new ub(R,y,K,De,ke,nt,Qe),ye=new Ub(R,tt),we=new db,Be=new xb(De,ke),St=new DT(R,y,K,Fe,ve,v,h),pe=new Tb(R,ve,ke),O=new Nb(q,Mt,ke,Fe),Je=new UT(q,De,Mt,ke),ze=new kT(q,De,Mt,ke),Mt.programs=Ie.programs,R.capabilities=ke,R.extensions=De,R.properties=tt,R.renderLists=we,R.shadowMap=pe,R.state=Fe,R.info=Mt}Me();const Te=new Ib(R,q);this.xr=Te,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(ee,Z,!1))},this.getSize=function(C){return C.set(ee,Z)},this.setSize=function(C,Y,J=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,Z=Y,t.width=Math.floor(C*ae),t.height=Math.floor(Y*ae),J===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ee*ae,Z*ae).floor()},this.setDrawingBufferSize=function(C,Y,J){ee=C,Z=Y,ae=J,t.width=Math.floor(C*J),t.height=Math.floor(Y*J),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,Y,J,te){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Y,J,te),Fe.viewport(S.copy(ue).multiplyScalar(ae).floor())},this.getScissor=function(C){return C.copy(me)},this.setScissor=function(C,Y,J,te){C.isVector4?me.set(C.x,C.y,C.z,C.w):me.set(C,Y,J,te),Fe.scissor(P.copy(me).multiplyScalar(ae).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Fe.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(C=!0,Y=!0,J=!0){let te=0;if(C){let j=!1;if(A!==null){const Ce=A.texture.format;j=Ce===Qd||Ce===Jd||Ce===jd}if(j){const Ce=A.texture.type,Ne=Ce===nr||Ce===Ji||Ce===Gc||Ce===Er||Ce===$d||Ce===Zd,qe=St.getClearColor(),Ye=St.getClearAlpha(),lt=qe.r,it=qe.g,at=qe.b;Ne?(M[0]=lt,M[1]=it,M[2]=at,M[3]=Ye,q.clearBufferuiv(q.COLOR,0,M)):(T[0]=lt,T[1]=it,T[2]=at,T[3]=Ye,q.clearBufferiv(q.COLOR,0,T))}else te|=q.COLOR_BUFFER_BIT}Y&&(te|=q.DEPTH_BUFFER_BIT),J&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),we.dispose(),Be.dispose(),tt.dispose(),y.dispose(),K.dispose(),ve.dispose(),nt.dispose(),O.dispose(),Ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",$t),Te.removeEventListener("sessionend",Tt),Re&&(Re.dispose(),Re=null),It.stop()};function He(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=Mt.autoReset,Y=pe.enabled,J=pe.autoUpdate,te=pe.needsUpdate,j=pe.type;Me(),Mt.autoReset=C,pe.enabled=Y,pe.autoUpdate=J,pe.needsUpdate=te,pe.type=j}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const Y=C.target;Y.removeEventListener("dispose",ge),Ue(Y)}function Ue(C){Ve(C),tt.remove(C)}function Ve(C){const Y=tt.get(C).programs;Y!==void 0&&(Y.forEach(function(J){Ie.releaseProgram(J)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,J,te,j,Ce){Y===null&&(Y=vt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,qe=Uo(C,Y,J,te,j);Fe.setMaterial(te,Ne);let Ye=J.index,lt=1;if(te.wireframe===!0){if(Ye=he.getWireframeAttribute(J),Ye===void 0)return;lt=2}const it=J.drawRange,at=J.attributes.position;let Bt=it.start*lt,cn=(it.start+it.count)*lt;Ce!==null&&(Bt=Math.max(Bt,Ce.start*lt),cn=Math.min(cn,(Ce.start+Ce.count)*lt)),Ye!==null?(Bt=Math.max(Bt,0),cn=Math.min(cn,Ye.count)):at!=null&&(Bt=Math.max(Bt,0),cn=Math.min(cn,at.count));const kt=cn-Bt;if(kt<0||kt===1/0)return;nt.setup(j,te,qe,J,Ye);let Jn,Ut=Je;if(Ye!==null&&(Jn=_e.get(Ye),Ut=ze,Ut.setIndex(Jn)),j.isMesh)te.wireframe===!0?(Fe.setLineWidth(te.wireframeLinewidth*je()),Ut.setMode(q.LINES)):Ut.setMode(q.TRIANGLES);else if(j.isLine){let ut=te.linewidth;ut===void 0&&(ut=1),Fe.setLineWidth(ut*je()),j.isLineSegments?Ut.setMode(q.LINES):j.isLineLoop?Ut.setMode(q.LINE_LOOP):Ut.setMode(q.LINE_STRIP)}else j.isPoints?Ut.setMode(q.POINTS):j.isSprite&&Ut.setMode(q.TRIANGLES);if(j.isBatchedMesh)Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Ut.renderInstances(Bt,kt,j.count);else if(J.isInstancedBufferGeometry){const ut=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ws=Math.min(J.instanceCount,ut);Ut.renderInstances(Bt,kt,ws)}else Ut.render(Bt,kt)};function yt(C,Y,J){C.transparent===!0&&C.side===di&&C.forceSinglePass===!1?(C.side=Sn,C.needsUpdate=!0,Pr(C,Y,J),C.side=ir,C.needsUpdate=!0,Pr(C,Y,J),C.side=di):Pr(C,Y,J)}this.compile=function(C,Y,J=null){J===null&&(J=C),m=Be.get(J),m.init(),U.push(m),J.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),C!==J&&C.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(R._useLegacyLights);const te=new Set;return C.traverse(function(j){const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const qe=Ce[Ne];yt(qe,J,j),te.add(qe)}else yt(Ce,J,j),te.add(Ce)}),U.pop(),m=null,te},this.compileAsync=function(C,Y,J=null){const te=this.compile(C,Y,J);return new Promise(j=>{function Ce(){if(te.forEach(function(Ne){tt.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){j(C);return}setTimeout(Ce,10)}De.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let dt=null;function Ct(C){dt&&dt(C)}function $t(){It.stop()}function Tt(){It.start()}const It=new mp;It.setAnimationLoop(Ct),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(C){dt=C,Te.setAnimationLoop(C),C===null?It.stop():It.start()},Te.addEventListener("sessionstart",$t),Te.addEventListener("sessionend",Tt),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(Y),Y=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,A),m=Be.get(C,U.length),m.init(),U.push(m),We.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ze.setFromProjectionMatrix(We),de=this.localClippingEnabled,ne=Qe.init(this.clippingPlanes,de),w=we.get(C,g.length),w.init(),g.push(w),sn(C,Y,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(re,ce),this.info.render.frame++,ne===!0&&Qe.beginShadows();const J=m.state.shadowsArray;if(pe.render(J,C,Y),ne===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1)&&St.render(w,C),m.setupLights(R._useLegacyLights),Y.isArrayCamera){const te=Y.cameras;for(let j=0,Ce=te.length;j<Ce;j++){const Ne=te[j];Rr(w,C,Ne,Ne.viewport)}}else Rr(w,C,Y);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(R,C,Y),nt.resetDefaultState(),z=-1,X=null,U.pop(),U.length>0?m=U[U.length-1]:m=null,g.pop(),g.length>0?w=g[g.length-1]:w=null};function sn(C,Y,J,te){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ze.intersectsSprite(C)){te&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(We);const Ne=ve.update(C),qe=C.material;qe.visible&&w.push(C,Ne,qe,J,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ze.intersectsObject(C))){const Ne=ve.update(C),qe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Le.copy(Ne.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(We)),Array.isArray(qe)){const Ye=Ne.groups;for(let lt=0,it=Ye.length;lt<it;lt++){const at=Ye[lt],Bt=qe[at.materialIndex];Bt&&Bt.visible&&w.push(C,Ne,Bt,J,Le.z,at)}}else qe.visible&&w.push(C,Ne,qe,J,Le.z,null)}}const Ce=C.children;for(let Ne=0,qe=Ce.length;Ne<qe;Ne++)sn(Ce[Ne],Y,J,te)}function Rr(C,Y,J,te){const j=C.opaque,Ce=C.transmissive,Ne=C.transparent;m.setupLightsView(J),ne===!0&&Qe.setGlobalState(R.clippingPlanes,J),Ce.length>0&&Io(j,Ce,Y,J),te&&Fe.viewport(S.copy(te)),j.length>0&&Cr(j,Y,J),Ce.length>0&&Cr(Ce,Y,J),Ne.length>0&&Cr(Ne,Y,J),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Io(C,Y,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const Ce=ke.isWebGL2;Re===null&&(Re=new Ar(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?ea:nr,minFilter:Sr,samples:Ce?4:0})),R.getDrawingBufferSize(Ge),Ce?Re.setSize(Ge.x,Ge.y):Re.setSize(Uc(Ge.x),Uc(Ge.y));const Ne=R.getRenderTarget();R.setRenderTarget(Re),R.getClearColor(ie),G=R.getClearAlpha(),G<1&&R.setClearColor(16777215,.5),R.clear();const qe=R.toneMapping;R.toneMapping=tr,Cr(C,J,te),L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re);let Ye=!1;for(let lt=0,it=Y.length;lt<it;lt++){const at=Y[lt],Bt=at.object,cn=at.geometry,kt=at.material,Jn=at.group;if(kt.side===di&&Bt.layers.test(te.layers)){const Ut=kt.side;kt.side=Sn,kt.needsUpdate=!0,ra(Bt,J,te,cn,kt,Jn),kt.side=Ut,kt.needsUpdate=!0,Ye=!0}}Ye===!0&&(L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re)),R.setRenderTarget(Ne),R.setClearColor(ie,G),R.toneMapping=qe}function Cr(C,Y,J){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Ce=C.length;j<Ce;j++){const Ne=C[j],qe=Ne.object,Ye=Ne.geometry,lt=te===null?Ne.material:te,it=Ne.group;qe.layers.test(J.layers)&&ra(qe,Y,J,Ye,lt,it)}}function ra(C,Y,J,te,j,Ce){C.onBeforeRender(R,Y,J,te,j,Ce),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(R,Y,J,te,C,Ce),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=Sn,j.needsUpdate=!0,R.renderBufferDirect(J,Y,te,j,C,Ce),j.side=ir,j.needsUpdate=!0,R.renderBufferDirect(J,Y,te,j,C,Ce),j.side=di):R.renderBufferDirect(J,Y,te,j,C,Ce),C.onAfterRender(R,Y,J,te,j,Ce)}function Pr(C,Y,J){Y.isScene!==!0&&(Y=vt);const te=tt.get(C),j=m.state.lights,Ce=m.state.shadowsArray,Ne=j.state.version,qe=Ie.getParameters(C,j.state,Ce,Y,J),Ye=Ie.getProgramCacheKey(qe);let lt=te.programs;te.environment=C.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(C.isMeshStandardMaterial?K:y).get(C.envMap||te.environment),lt===void 0&&(C.addEventListener("dispose",ge),lt=new Map,te.programs=lt);let it=lt.get(Ye);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ne)return aa(C,qe),it}else qe.uniforms=Ie.getUniforms(C),C.onBuild(J,qe,R),C.onBeforeCompile(qe,R),it=Ie.acquireProgram(qe,Ye),lt.set(Ye,it),te.uniforms=qe.uniforms;const at=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=Qe.uniform),aa(C,qe),te.needsLights=oa(C),te.lightsStateVersion=Ne,te.needsLights&&(at.ambientLightColor.value=j.state.ambient,at.lightProbe.value=j.state.probe,at.directionalLights.value=j.state.directional,at.directionalLightShadows.value=j.state.directionalShadow,at.spotLights.value=j.state.spot,at.spotLightShadows.value=j.state.spotShadow,at.rectAreaLights.value=j.state.rectArea,at.ltc_1.value=j.state.rectAreaLTC1,at.ltc_2.value=j.state.rectAreaLTC2,at.pointLights.value=j.state.point,at.pointLightShadows.value=j.state.pointShadow,at.hemisphereLights.value=j.state.hemi,at.directionalShadowMap.value=j.state.directionalShadowMap,at.directionalShadowMatrix.value=j.state.directionalShadowMatrix,at.spotShadowMap.value=j.state.spotShadowMap,at.spotLightMatrix.value=j.state.spotLightMatrix,at.spotLightMap.value=j.state.spotLightMap,at.pointShadowMap.value=j.state.pointShadowMap,at.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function sa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Mo.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function aa(C,Y){const J=tt.get(C);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function Uo(C,Y,J,te,j){Y.isScene!==!0&&(Y=vt),L.resetTextureUnits();const Ce=Y.fog,Ne=te.isMeshStandardMaterial?Y.environment:null,qe=A===null?R.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ui,Ye=(te.isMeshStandardMaterial?K:y).get(te.envMap||Ne),lt=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),at=!!J.morphAttributes.position,Bt=!!J.morphAttributes.normal,cn=!!J.morphAttributes.color;let kt=tr;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(kt=R.toneMapping);const Jn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ut=Jn!==void 0?Jn.length:0,ut=tt.get(te),ws=m.state.lights;if(ne===!0&&(de===!0||C!==X)){const Tn=C===X&&te.id===z;Qe.setState(te,C,Tn)}let Nt=!1;te.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==ws.state.version||ut.outputColorSpace!==qe||j.isBatchedMesh&&ut.batching===!1||!j.isBatchedMesh&&ut.batching===!0||j.isInstancedMesh&&ut.instancing===!1||!j.isInstancedMesh&&ut.instancing===!0||j.isSkinnedMesh&&ut.skinning===!1||!j.isSkinnedMesh&&ut.skinning===!0||j.isInstancedMesh&&ut.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ut.instancingColor===!1&&j.instanceColor!==null||ut.envMap!==Ye||te.fog===!0&&ut.fog!==Ce||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Qe.numPlanes||ut.numIntersection!==Qe.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==it||ut.morphTargets!==at||ut.morphNormals!==Bt||ut.morphColors!==cn||ut.toneMapping!==kt||ke.isWebGL2===!0&&ut.morphTargetsCount!==Ut)&&(Nt=!0):(Nt=!0,ut.__version=te.version);let li=ut.currentProgram;Nt===!0&&(li=Pr(te,Y,j));let Rs=!1,gi=!1,Cs=!1;const Zt=li.getUniforms(),Gn=ut.uniforms;if(Fe.useProgram(li.program)&&(Rs=!0,gi=!0,Cs=!0),te.id!==z&&(z=te.id,gi=!0),Rs||X!==C){Zt.setValue(q,"projectionMatrix",C.projectionMatrix),Zt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Tn=Zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(q,Le.setFromMatrixPosition(C.matrixWorld)),ke.logarithmicDepthBuffer&&Zt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Zt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,gi=!0,Cs=!0)}if(j.isSkinnedMesh){Zt.setOptional(q,j,"bindMatrix"),Zt.setOptional(q,j,"bindMatrixInverse");const Tn=j.skeleton;Tn&&(ke.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Zt.setValue(q,"boneTexture",Tn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Zt.setOptional(q,j,"batchingTexture"),Zt.setValue(q,"batchingTexture",j._matricesTexture,L));const Lr=J.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0&&ke.isWebGL2===!0)&&st.update(j,J,li),(gi||ut.receiveShadow!==j.receiveShadow)&&(ut.receiveShadow=j.receiveShadow,Zt.setValue(q,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Gn.envMap.value=Ye,Gn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),gi&&(Zt.setValue(q,"toneMappingExposure",R.toneMappingExposure),ut.needsLights&&No(Gn,Cs),Ce&&te.fog===!0&&ye.refreshFogUniforms(Gn,Ce),ye.refreshMaterialUniforms(Gn,te,ae,Z,Re),Mo.upload(q,sa(ut),Gn,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Mo.upload(q,sa(ut),Gn,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Zt.setValue(q,"center",j.center),Zt.setValue(q,"modelViewMatrix",j.modelViewMatrix),Zt.setValue(q,"normalMatrix",j.normalMatrix),Zt.setValue(q,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Tn=te.uniformsGroups;for(let Dr=0,la=Tn.length;Dr<la;Dr++)if(ke.isWebGL2){const Ir=Tn[Dr];O.update(Ir,li),O.bind(Ir,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function No(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function oa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,Y,J){tt.get(C.texture).__webglTexture=Y,tt.get(C.depthTexture).__webglTexture=J;const te=tt.get(C);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const J=tt.get(C);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,J=0){A=C,V=Y,F=J;let te=!0,j=null,Ce=!1,Ne=!1;if(C){const Ye=tt.get(C);Ye.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(q.FRAMEBUFFER,null),te=!1):Ye.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ye.__hasExternalTextures&&L.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);const lt=C.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ne=!0);const it=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?j=it[Y][J]:j=it[Y],Ce=!0):ke.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?j=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[J]:j=it,S.copy(C.viewport),P.copy(C.scissor),$=C.scissorTest}else S.copy(ue).multiplyScalar(ae).floor(),P.copy(me).multiplyScalar(ae).floor(),$=Ee;if(Fe.bindFramebuffer(q.FRAMEBUFFER,j)&&ke.drawBuffers&&te&&Fe.drawBuffers(C,j),Fe.viewport(S),Fe.scissor(P),Fe.setScissorTest($),Ce){const Ye=tt.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ye.__webglTexture,J)}else if(Ne){const Ye=tt.get(C.texture),lt=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,lt)}z=-1},this.readRenderTargetPixels=function(C,Y,J,te,j,Ce,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(qe=qe[Ne]),qe){Fe.bindFramebuffer(q.FRAMEBUFFER,qe);try{const Ye=C.texture,lt=Ye.format,it=Ye.type;if(lt!==oi&&be.convert(lt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===ea&&(De.has("EXT_color_buffer_half_float")||ke.isWebGL2&&De.has("EXT_color_buffer_float"));if(it!==nr&&be.convert(it)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Di&&(ke.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-te&&J>=0&&J<=C.height-j&&q.readPixels(Y,J,te,j,be.convert(lt),be.convert(it),Ce)}finally{const Ye=A!==null?tt.get(A).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(C,Y,J=0){const te=Math.pow(2,-J),j=Math.floor(Y.image.width*te),Ce=Math.floor(Y.image.height*te);L.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,C.x,C.y,j,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(C,Y,J,te=0){const j=Y.image.width,Ce=Y.image.height,Ne=be.convert(J.format),qe=be.convert(J.type);L.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,j,Ce,Ne,qe,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,te,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ne,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,te,C.x,C.y,Ne,qe,Y.image),te===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,J,te,j=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,Ye=be.convert(te.format),lt=be.convert(te.type);let it;if(te.isData3DTexture)L.setTexture3D(te,0),it=q.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),it=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,te.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,te.unpackAlignment);const at=q.getParameter(q.UNPACK_ROW_LENGTH),Bt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),cn=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),Jn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ut=J.isCompressedTexture?J.mipmaps[j]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ut.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ut.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,lt,Ut.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,Ut.data)):q.texSubImage3D(it,j,Y.x,Y.y,Y.z,Ce,Ne,qe,Ye,lt,Ut),q.pixelStorei(q.UNPACK_ROW_LENGTH,at),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,cn),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Jn),j===0&&te.generateMipmaps&&q.generateMipmap(it),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){V=0,F=0,A=null,Fe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hc?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===Ro?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?Tr:tp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?ln:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ob extends Ep{}Ob.prototype.isWebGL1Renderer=!0;class Fb extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xc extends Es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Id=new H,Ud=new H,Nd=new Yt,Mc=new Vc,go=new Co;class qc extends pn{constructor(e=new jn,t=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)Id.fromBufferAttribute(t,a-1),Ud.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Id.distanceTo(Ud);e.setAttribute("lineDistance",new yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(a),go.radius+=o,e.ray.intersectsSphere(go)===!1)return;Nd.copy(a).invert(),Mc.copy(e.ray).applyMatrix4(Nd);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=new H,p=new H,_=new H,v=new H,M=this.isLineSegments?2:1,T=i.index,m=i.attributes.position;if(T!==null){const g=Math.max(0,u.start),U=Math.min(T.count,u.start+u.count);for(let R=g,I=U-1;R<I;R+=M){const V=T.getX(R),F=T.getX(R+1);if(d.fromBufferAttribute(m,V),p.fromBufferAttribute(m,F),Mc.distanceSqToSegment(d,p,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(v);z<e.near||z>e.far||t.push({distance:z,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,u.start),U=Math.min(m.count,u.start+u.count);for(let R=g,I=U-1;R<I;R+=M){if(d.fromBufferAttribute(m,R),p.fromBufferAttribute(m,R+1),Mc.distanceSqToSegment(d,p,v,_)>h)continue;v.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(v);F<e.near||F>e.far||t.push({distance:F,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}class Yc extends jn{constructor(e=1,t=1,i=1,a=32,o=1,u=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:h};const d=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],v=[],M=[];let T=0;const w=[],m=i/2;let g=0;U(),u===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(p),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(v,3)),this.setAttribute("uv",new yn(M,2));function U(){const I=new H,V=new H;let F=0;const A=(t-e)/i;for(let z=0;z<=o;z++){const X=[],S=z/o,P=S*(t-e)+e;for(let $=0;$<=a;$++){const ie=$/a,G=ie*h+c,ee=Math.sin(G),Z=Math.cos(G);V.x=P*ee,V.y=-S*i+m,V.z=P*Z,_.push(V.x,V.y,V.z),I.set(ee,A,Z).normalize(),v.push(I.x,I.y,I.z),M.push(ie,1-S),X.push(T++)}w.push(X)}for(let z=0;z<a;z++)for(let X=0;X<o;X++){const S=w[X][z],P=w[X+1][z],$=w[X+1][z+1],ie=w[X][z+1];p.push(S,P,ie),p.push(P,$,ie),F+=6}d.addGroup(g,F,0),g+=F}function R(I){const V=T,F=new et,A=new H;let z=0;const X=I===!0?e:t,S=I===!0?1:-1;for(let $=1;$<=a;$++)_.push(0,m*S,0),v.push(0,S,0),M.push(.5,.5),T++;const P=T;for(let $=0;$<=a;$++){const G=$/a*h+c,ee=Math.cos(G),Z=Math.sin(G);A.x=X*Z,A.y=m*S,A.z=X*ee,_.push(A.x,A.y,A.z),v.push(0,S,0),F.x=ee*.5+.5,F.y=Z*.5*S+.5,M.push(F.x,F.y),T++}for(let $=0;$<a;$++){const ie=V+$,G=P+$;I===!0?p.push(G,G+1,ie):p.push(G+1,G,ie),z+=3}d.addGroup(g,z,I===!0?1:2),g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends jn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(u+c,Math.PI);let d=0;const p=[],_=new H,v=new H,M=[],T=[],w=[],m=[];for(let g=0;g<=i;g++){const U=[],R=g/i;let I=0;g===0&&u===0?I=.5/t:g===i&&h===Math.PI&&(I=-.5/t);for(let V=0;V<=t;V++){const F=V/t;_.x=-e*Math.cos(a+F*o)*Math.sin(u+R*c),_.y=e*Math.cos(u+R*c),_.z=e*Math.sin(a+F*o)*Math.sin(u+R*c),T.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),m.push(F+I,1-R),U.push(d++)}p.push(U)}for(let g=0;g<i;g++)for(let U=0;U<t;U++){const R=p[g][U+1],I=p[g][U],V=p[g+1][U],F=p[g+1][U+1];(g!==0||u>0)&&M.push(R,I,F),(g!==i-1||h<Math.PI)&&M.push(I,V,F)}this.setIndex(M),this.setAttribute("position",new yn(T,3)),this.setAttribute("normal",new yn(w,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bb extends Es{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Od={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zb{constructor(e,t,i){const a=this;let o=!1,u=0,c=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){c++,o===!1&&a.onStart!==void 0&&a.onStart(p,u,c),o=!0},this.itemEnd=function(p){u++,a.onProgress!==void 0&&a.onProgress(p,u,c),u===c&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return d.push(p,_),this},this.removeHandler=function(p){const _=d.indexOf(p);return _!==-1&&d.splice(_,2),this},this.getHandler=function(p){for(let _=0,v=d.length;_<v;_+=2){const M=d[_],T=d[_+1];if(M.global&&(M.lastIndex=0),M.test(p))return T}return null}}}const Gb=new zb;class Kc{constructor(e){this.manager=e!==void 0?e:Gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hb extends Kc{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=Od.get(e);if(u!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0),u;const c=ta("img");function h(){p(),Od.add(e,this),t&&t(this),o.manager.itemEnd(e)}function d(_){p(),a&&a(_),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class Vb extends Kc{constructor(e){super(e)}load(e,t,i,a){const o=new En,u=new Hb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class Wb extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sc=new Yt,Fd=new H,Bd=new H;class kb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zd=new Yt,js=new H,Ec=new H;class Xb extends kb{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),i.position.copy(js),Ec.copy(i.position),Ec.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ec),i.updateMatrixWorld(),a.makeTranslation(-js.x,-js.y,-js.z),zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}}class yp extends Wb{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Xb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Gd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gd(){return(typeof performance>"u"?Date:performance).now()}class Hd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vd=new H;let _o,yc;class Yb extends pn{constructor(e=new H(0,0,1),t=new H(0,0,0),i=1,a=16776960,o=i*.2,u=o*.2){super(),this.type="ArrowHelper",_o===void 0&&(_o=new jn,_o.setAttribute("position",new yn([0,0,0,0,1,0],3)),yc=new Yc(0,.5,1,5,1),yc.translate(0,-.5,0)),this.position.copy(t),this.line=new qc(_o,new Xc({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ln(yc,new ys({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,o,u)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Vd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Vd,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const Wd={type:"change"},Tc={type:"start"},kd={type:"end"},vo=new Vc,Xd=new ji,Kb=Math.cos(70*bS.DEG2RAD);class Tp extends wr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Be),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wd),i.update(),o=a.NONE},this.update=function(){const O=new H,Me=new br().setFromUnitVectors(e.up,new H(0,1,0)),Te=Me.clone().invert(),He=new H,D=new br,xe=new H,ge=2*Math.PI;return function(Ve=null){const yt=i.object.position;O.copy(yt).sub(i.target),O.applyQuaternion(Me),c.setFromVector3(O),i.autoRotate&&o===a.NONE&&$(S(Ve)),i.enableDamping?(c.theta+=h.theta*i.dampingFactor,c.phi+=h.phi*i.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let dt=i.minAzimuthAngle,Ct=i.maxAzimuthAngle;isFinite(dt)&&isFinite(Ct)&&(dt<-Math.PI?dt+=ge:dt>Math.PI&&(dt-=ge),Ct<-Math.PI?Ct+=ge:Ct>Math.PI&&(Ct-=ge),dt<=Ct?c.theta=Math.max(dt,Math.min(Ct,c.theta)):c.theta=c.theta>(dt+Ct)/2?Math.max(dt,c.theta):Math.min(Ct,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&F||i.object.isOrthographicCamera?c.radius=ue(c.radius):c.radius=ue(c.radius*d),O.setFromSpherical(c),O.applyQuaternion(Te),yt.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let $t=!1;if(i.zoomToCursor&&F){let Tt=null;if(i.object.isPerspectiveCamera){const It=O.length();Tt=ue(It*d);const sn=It-Tt;i.object.position.addScaledVector(I,sn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const It=new H(V.x,V.y,0);It.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),$t=!0;const sn=new H(V.x,V.y,0);sn.unproject(i.object),i.object.position.sub(sn).add(It),i.object.updateMatrixWorld(),Tt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Tt).add(i.object.position):(vo.origin.copy(i.object.position),vo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(vo.direction))<Kb?e.lookAt(i.target):(Xd.setFromNormalAndCoplanarPoint(i.object.up,i.target),vo.intersectPlane(Xd,i.target))))}else i.object.isOrthographicCamera&&($t=d!==1,$t&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix()));return d=1,F=!1,$t||He.distanceToSquared(i.object.position)>u||8*(1-D.dot(i.object.quaternion))>u||xe.distanceToSquared(i.target)>0?(i.dispatchEvent(Wd),He.copy(i.object.position),D.copy(i.object.quaternion),xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",St),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",K),i.domElement.removeEventListener("wheel",ve),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",K),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Be),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=a.NONE;const u=1e-6,c=new Hd,h=new Hd;let d=1;const p=new H,_=new et,v=new et,M=new et,T=new et,w=new et,m=new et,g=new et,U=new et,R=new et,I=new H,V=new et;let F=!1;const A=[],z={};let X=!1;function S(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function P(O){const Me=Math.abs(O*.01);return Math.pow(.95,i.zoomSpeed*Me)}function $(O){h.theta-=O}function ie(O){h.phi-=O}const G=function(){const O=new H;return function(Te,He){O.setFromMatrixColumn(He,0),O.multiplyScalar(-Te),p.add(O)}}(),ee=function(){const O=new H;return function(Te,He){i.screenSpacePanning===!0?O.setFromMatrixColumn(He,1):(O.setFromMatrixColumn(He,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(Te),p.add(O)}}(),Z=function(){const O=new H;return function(Te,He){const D=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;O.copy(xe).sub(i.target);let ge=O.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),G(2*Te*ge/D.clientHeight,i.object.matrix),ee(2*He*ge/D.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(Te*(i.object.right-i.object.left)/i.object.zoom/D.clientWidth,i.object.matrix),ee(He*(i.object.top-i.object.bottom)/i.object.zoom/D.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ae(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(O,Me){if(!i.zoomToCursor)return;F=!0;const Te=i.domElement.getBoundingClientRect(),He=O-Te.left,D=Me-Te.top,xe=Te.width,ge=Te.height;V.x=He/xe*2-1,V.y=-(D/ge)*2+1,I.set(V.x,V.y,1).unproject(i.object).sub(i.object.position).normalize()}function ue(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function me(O){_.set(O.clientX,O.clientY)}function Ee(O){ce(O.clientX,O.clientX),g.set(O.clientX,O.clientY)}function Ze(O){T.set(O.clientX,O.clientY)}function ne(O){v.set(O.clientX,O.clientY),M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const Me=i.domElement;$(2*Math.PI*M.x/Me.clientHeight),ie(2*Math.PI*M.y/Me.clientHeight),_.copy(v),i.update()}function de(O){U.set(O.clientX,O.clientY),R.subVectors(U,g),R.y>0?ae(P(R.y)):R.y<0&&re(P(R.y)),g.copy(U),i.update()}function Re(O){w.set(O.clientX,O.clientY),m.subVectors(w,T).multiplyScalar(i.panSpeed),Z(m.x,m.y),T.copy(w),i.update()}function We(O){ce(O.clientX,O.clientY),O.deltaY<0?re(P(O.deltaY)):O.deltaY>0&&ae(P(O.deltaY)),i.update()}function Ge(O){let Me=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),Me=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),Me=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),Me=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),Me=!0;break}Me&&(O.preventDefault(),i.update())}function Le(O){if(A.length===1)_.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);_.set(Te,He)}}function vt(O){if(A.length===1)T.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);T.set(Te,He)}}function je(O){const Me=be(O),Te=O.pageX-Me.x,He=O.pageY-Me.y,D=Math.sqrt(Te*Te+He*He);g.set(0,D)}function q(O){i.enableZoom&&je(O),i.enablePan&&vt(O)}function Vt(O){i.enableZoom&&je(O),i.enableRotate&&Le(O)}function De(O){if(A.length==1)v.set(O.pageX,O.pageY);else{const Te=be(O),He=.5*(O.pageX+Te.x),D=.5*(O.pageY+Te.y);v.set(He,D)}M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const Me=i.domElement;$(2*Math.PI*M.x/Me.clientHeight),ie(2*Math.PI*M.y/Me.clientHeight),_.copy(v)}function ke(O){if(A.length===1)w.set(O.pageX,O.pageY);else{const Me=be(O),Te=.5*(O.pageX+Me.x),He=.5*(O.pageY+Me.y);w.set(Te,He)}m.subVectors(w,T).multiplyScalar(i.panSpeed),Z(m.x,m.y),T.copy(w)}function Fe(O){const Me=be(O),Te=O.pageX-Me.x,He=O.pageY-Me.y,D=Math.sqrt(Te*Te+He*He);U.set(0,D),R.set(0,Math.pow(U.y/g.y,i.zoomSpeed)),ae(R.y),g.copy(U);const xe=(O.pageX+Me.x)*.5,ge=(O.pageY+Me.y)*.5;ce(xe,ge)}function Mt(O){i.enableZoom&&Fe(O),i.enablePan&&ke(O)}function tt(O){i.enableZoom&&Fe(O),i.enableRotate&&De(O)}function L(O){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",K)),st(O),O.pointerType==="touch"?Qe(O):_e(O))}function y(O){i.enabled!==!1&&(O.pointerType==="touch"?pe(O):he(O))}function K(O){switch(Je(O),A.length){case 0:i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",K),i.dispatchEvent(kd),o=a.NONE;break;case 1:const Me=A[0],Te=z[Me];Qe({pointerId:Me,pageX:Te.x,pageY:Te.y});break}}function _e(O){let Me;switch(O.button){case 0:Me=i.mouseButtons.LEFT;break;case 1:Me=i.mouseButtons.MIDDLE;break;case 2:Me=i.mouseButtons.RIGHT;break;default:Me=-1}switch(Me){case Kr.DOLLY:if(i.enableZoom===!1)return;Ee(O),o=a.DOLLY;break;case Kr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;Ze(O),o=a.PAN}else{if(i.enableRotate===!1)return;me(O),o=a.ROTATE}break;case Kr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;me(O),o=a.ROTATE}else{if(i.enablePan===!1)return;Ze(O),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(Tc)}function he(O){switch(o){case a.ROTATE:if(i.enableRotate===!1)return;ne(O);break;case a.DOLLY:if(i.enableZoom===!1)return;de(O);break;case a.PAN:if(i.enablePan===!1)return;Re(O);break}}function ve(O){i.enabled===!1||i.enableZoom===!1||o!==a.NONE||(O.preventDefault(),i.dispatchEvent(Tc),We(Ie(O)),i.dispatchEvent(kd))}function Ie(O){const Me=O.deltaMode,Te={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(Me){case 1:Te.deltaY*=16;break;case 2:Te.deltaY*=100;break}return O.ctrlKey&&!X&&(Te.deltaY*=10),Te}function ye(O){O.key==="Control"&&(X=!0,i.domElement.getRootNode().addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(O){O.key==="Control"&&(X=!1,i.domElement.getRootNode().removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Be(O){i.enabled===!1||i.enablePan===!1||Ge(O)}function Qe(O){switch(ze(O),A.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;Le(O),o=a.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;vt(O),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(O),o=a.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Vt(O),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&i.dispatchEvent(Tc)}function pe(O){switch(ze(O),o){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(O),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;ke(O),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Mt(O),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;tt(O),i.update();break;default:o=a.NONE}}function St(O){i.enabled!==!1&&O.preventDefault()}function st(O){A.push(O.pointerId)}function Je(O){delete z[O.pointerId];for(let Me=0;Me<A.length;Me++)if(A[Me]==O.pointerId){A.splice(Me,1);return}}function ze(O){let Me=z[O.pointerId];Me===void 0&&(Me=new et,z[O.pointerId]=Me),Me.set(O.pageX,O.pageY)}function be(O){const Me=O.pointerId===A[0]?A[1]:A[0];return z[Me]}i.domElement.addEventListener("contextmenu",St),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",K),i.domElement.addEventListener("wheel",ve,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}var Qs=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++s%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===p?"block":"none";s=p}var a=(performance||Date).now(),o=a,u=0,c=t(new Qs.Panel("FPS","#0ff","#002")),h=t(new Qs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=t(new Qs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){u++;var p=(performance||Date).now();if(h.update(p-a,200),p>=o+1e3&&(c.update(u*1e3/(p-o),100),o=p,u=0,d)){var _=performance.memory;d.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};Qs.Panel=function(s,e,t){var i=1/0,a=0,o=Math.round,u=o(window.devicePixelRatio||1),c=80*u,h=48*u,d=3*u,p=2*u,_=3*u,v=15*u,M=74*u,T=30*u,w=document.createElement("canvas");w.width=c,w.height=h,w.style.cssText="width:80px;height:48px";var m=w.getContext("2d");return m.font="bold "+9*u+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,c,h),m.fillStyle=e,m.fillText(s,d,p),m.fillRect(_,v,M,T),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(_,v,M,T),{dom:w,update:function(g,U){i=Math.min(i,g),a=Math.max(a,g),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,c,v),m.fillStyle=e,m.fillText(o(g)+" "+s+" ("+o(i)+"-"+o(a)+")",d,p),m.drawImage(w,_+u,v,M-u,T,_,v,M-u,T),m.fillRect(_+M-u,v,u,T),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(_+M-u,v,u,o((1-g/U)*T))}}};const gt=Object.freeze({ball:Object.freeze({bounciness:.8,launchForce:3.5,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6}),simulationMode:!0,maxFlightDurationInSeconds:30,ticksPerSecond:500,camera:{fov:30,near:.1,far:Math.pow(10,6)},defaultPlanetDensity:14e-5,maxPlanetOffset:700,showFPSCounter:!0,showInfoTab:!1,skyboxOpacity:1});function $b(s){const e=new ys({color:"rgb(0,0,0)",side:Sn}),t=32,i=32,a=1;return new Ln(new bs(s+a,t,i),e)}class Ap extends Ln{get mass(){const e=Math.PI*4/3;return this.density*this.radius**3*e}constructor({radius:e,color:t="rgb(255,0,0)",density:i=gt.defaultPlanetDensity}){super(new bs(e,32,32),new Bb({color:t})),this.radius=e,this.density=i,this.add($b(e))}}class Zb{constructor(e){this.scene=e}getPlanets(){return this.getInstancesOf(Ap)}getLines(){return this.getInstancesOf(qc)}getInstancesOf(e){return this.scene.children.filter(t=>t instanceof e)}}const jb=document.getElementById("infoTab"),Jb=document.getElementById("infoTab__text"),Qb={updateText(s){const e=`Ball: {
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
}`;Jb.innerHTML=e}};gt.showInfoTab||(jb.style.display="none");class ew extends rn{constructor(e){super(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),this.position.set(400,200,40),this.lookAt(new H)}setupLockControls(){}reset(e){var u;if(!e.landedPlanet)return;const t=e.position.clone(),a=((u=e.landedPlanet)==null?void 0:u.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(t)}getControlsObject(){}}const Zi=()=>new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far);class tw extends Js{constructor(){super(),this.cameras=[Zi(),Zi(),Zi(),Zi(),Zi(),Zi(),Zi(),Zi()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const e=gt.maxPlanetOffset+900,t=-e,i=e;this.cameras[0].position.set(t,t/2,t),this.cameras[1].position.set(t,t/2,i),this.cameras[2].position.set(t,i/2,t),this.cameras[3].position.set(t,i/2,i),this.cameras[4].position.set(i,t/2,t),this.cameras[5].position.set(i,t/2,i),this.cameras[6].position.set(i,i/2,t),this.cameras[7].position.set(i,i/2,i)}selectActiveCamera(e){if(Date.now()-this.lastSwitchDate<3e3)return;const a=+(e.x>0)*4+ +(e.y>0)*2+ +(e.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[a]}updateActiveCamera(e){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(e)}getActiveCamera(){return this.activeCamera}update(e){this.selectActiveCamera(e),this.updateActiveCamera(e)}}class nw extends rn{constructor(e){super(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),this.position.set(400,200,40),this.orbitControls=new Tp(this,e),this.lookAt(new H)}reset(e){var u;if(!e.landedPlanet)return;const t=e.position.clone(),a=((u=e.landedPlanet)==null?void 0:u.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(2e3));this.orbitControls.target=t,this.position.copy(o),this.lookAt(t)}}const Oc={ballHit:(s=1)=>Ac("audio-ping-pong-ball-hit",{volume:s}),ballFlightStart:(s=.5)=>Ac("audio-ball-flight-start",{volume:s,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>Ac("audio-ambient",{volume:.5})};function Ac(s,{volume:e=1,startTimeMS:t=0,stopTimeMS:i}){const a=document.getElementById(s);if(!a)throw new Error(`Audio not found: ${s}`);a.pause(),a.volume=e,a.currentTime=t/1e3,a.play(),typeof i=="number"&&setTimeout(function(){a.pause()},i)}function bp(s,e){const t=new H((e==null?void 0:e.x)||Math.random(),(e==null?void 0:e.y)||Math.random(),(e==null?void 0:e.z)||Math.random()).normalize().multiplyScalar(gt.ball.launchForce);s.landedPlanet=null,s.velocity=t,Oc.ballFlightStart()}var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fc={exports:{}};(function(s,e){(function(t,i){{var a=i();s&&s.exports&&(e=s.exports=a),e.randomColor=a}})(hs,function(){var t=null,i={};g();var a=[],o=function(A){if(A=A||{},A.seed!==void 0&&A.seed!==null&&A.seed===parseInt(A.seed,10))t=A.seed;else if(typeof A.seed=="string")t=V(A.seed);else{if(A.seed!==void 0&&A.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var z,X,S;if(A.count!==null&&A.count!==void 0){for(var P=A.count,$=[],ie=0;ie<A.count;ie++)a.push(!1);for(A.count=null;P>$.length;){var G=o(A);t!==null&&(A.seed=t),$.push(G)}return A.count=P,$}return z=u(A),X=c(z,A),S=h(z,X,A),d([z,X,S],A)};function u(A){if(a.length>0){var z=F(A.hue),X=T(z),S=(z[1]-z[0])/a.length,P=parseInt((X-z[0])/S);a[P]===!0?P=(P+2)%a.length:a[P]=!0;var $=(z[0]+P*S)%359,ie=(z[0]+(P+1)*S)%359;return z=[$,ie],X=T(z),X<0&&(X=360+X),X}else{var z=_(A.hue);return X=T(z),X<0&&(X=360+X),X}}function c(A,z){if(z.hue==="monochrome")return 0;if(z.luminosity==="random")return T([0,100]);var X=v(A),S=X[0],P=X[1];switch(z.luminosity){case"bright":S=55;break;case"dark":S=P-10;break;case"light":P=55;break}return T([S,P])}function h(A,z,X){var S=p(A,z),P=100;switch(X.luminosity){case"dark":P=S+20;break;case"light":S=(P+S)/2;break;case"random":S=0,P=100;break}return T([S,P])}function d(A,z){switch(z.format){case"hsvArray":return A;case"hslArray":return I(A);case"hsl":var X=I(A);return"hsl("+X[0]+", "+X[1]+"%, "+X[2]+"%)";case"hsla":var S=I(A),ie=z.alpha||Math.random();return"hsla("+S[0]+", "+S[1]+"%, "+S[2]+"%, "+ie+")";case"rgbArray":return U(A);case"rgb":var P=U(A);return"rgb("+P.join(", ")+")";case"rgba":var $=U(A),ie=z.alpha||Math.random();return"rgba("+$.join(", ")+", "+ie+")";default:return w(A)}}function p(A,z){for(var X=M(A).lowerBounds,S=0;S<X.length-1;S++){var P=X[S][0],$=X[S][1],ie=X[S+1][0],G=X[S+1][1];if(z>=P&&z<=ie){var ee=(G-$)/(ie-P),Z=$-ee*P;return ee*z+Z}}return 0}function _(A){if(typeof parseInt(A)=="number"){var z=parseInt(A);if(z<360&&z>0)return[z,z]}if(typeof A=="string"){if(i[A]){var X=i[A];if(X.hueRange)return X.hueRange}else if(A.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var S=R(A)[0];return[S,S]}}return[0,360]}function v(A){return M(A).saturationRange}function M(A){A>=334&&A<=360&&(A-=360);for(var z in i){var X=i[z];if(X.hueRange&&A>=X.hueRange[0]&&A<=X.hueRange[1])return i[z]}return"Color not found"}function T(A){if(t===null){var z=.618033988749895,X=Math.random();return X+=z,X%=1,Math.floor(A[0]+X*(A[1]+1-A[0]))}else{var S=A[1]||1,P=A[0]||0;t=(t*9301+49297)%233280;var $=t/233280;return Math.floor(P+$*(S-P))}}function w(A){var z=U(A);function X(P){var $=P.toString(16);return $.length==1?"0"+$:$}var S="#"+X(z[0])+X(z[1])+X(z[2]);return S}function m(A,z,X){var S=X[0][0],P=X[X.length-1][0],$=X[X.length-1][1],ie=X[0][1];i[A]={hueRange:z,lowerBounds:X,saturationRange:[S,P],brightnessRange:[$,ie]}}function g(){m("monochrome",null,[[0,0],[100,0]]),m("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),m("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),m("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),m("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),m("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),m("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),m("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function U(A){var z=A[0];z===0&&(z=1),z===360&&(z=359),z=z/360;var X=A[1]/100,S=A[2]/100,P=Math.floor(z*6),$=z*6-P,ie=S*(1-X),G=S*(1-$*X),ee=S*(1-(1-$)*X),Z=256,ae=256,re=256;switch(P){case 0:Z=S,ae=ee,re=ie;break;case 1:Z=G,ae=S,re=ie;break;case 2:Z=ie,ae=S,re=ee;break;case 3:Z=ie,ae=G,re=S;break;case 4:Z=ee,ae=ie,re=S;break;case 5:Z=S,ae=ie,re=G;break}var ce=[Math.floor(Z*255),Math.floor(ae*255),Math.floor(re*255)];return ce}function R(A){A=A.replace(/^#/,""),A=A.length===3?A.replace(/(.)/g,"$1$1"):A;var z=parseInt(A.substr(0,2),16)/255,X=parseInt(A.substr(2,2),16)/255,S=parseInt(A.substr(4,2),16)/255,P=Math.max(z,X,S),$=P-Math.min(z,X,S),ie=P?$/P:0;switch(P){case z:return[60*((X-S)/$%6)||0,ie,P];case X:return[60*((S-z)/$+2)||0,ie,P];case S:return[60*((z-X)/$+4)||0,ie,P]}}function I(A){var z=A[0],X=A[1]/100,S=A[2]/100,P=(2-X)*S;return[z,Math.round(X*S/(P<1?P:2-P)*1e4)/100,P/2*100]}function V(A){for(var z=0,X=0;X!==A.length&&!(z>=Number.MAX_SAFE_INTEGER);X++)z+=A.charCodeAt(X);return z}function F(A){if(isNaN(A)){if(typeof A=="string"){if(i[A]){var X=i[A];if(X.hueRange)return X.hueRange}else if(A.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var S=R(A)[0];return M(S).hueRange}}}else{var z=parseInt(A);if(z<360&&z>0)return M(A).hueRange}return[0,360]}return o})})(Fc,Fc.exports);var iw=Fc.exports;const Rp=wp(iw);function rw(s){return new bs(s,32,32)}function sw(s){return new ys({color:s})}class aw extends Ln{constructor({radius:e=gt.ball.radius}={}){const t=Rp({luminosity:"dark",alpha:1});super(rw(e),sw(t)),this._velocity=new H(0,0,0),this.arrowHelper=new Yb(new H,new H),this.pathVertices=[],this.camera=new rn(gt.camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.mass=3,this.light=new yp(t,16e3,1e4),this.color=t,this.radius=e,gt.ball.showVelocityVector&&this.add(this.arrowHelper),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}get velocity(){return this._velocity.clone()}set velocity(e){this._velocity=e}addVelocity(e){this._velocity.add(e)}createTrace(){const e=new Xc({color:16755200,opacity:gt.ball.traceTransparency,transparent:!0}),t=new jn().setFromPoints(this.pathVertices);return new qc(t,e)}tick(){this.landedPlanet!==null&&(this.velocity=new H,gt.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{bp(this,new H(-.8,.18,-.72)),this.launchBallTimeout=null},1e3))),this.rotation.set(0,0,0),this.position.add(this.velocity);const e=this.velocity.normalize();this.rotation.set(e.x,e.y,e.z),this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},gt.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class ow extends Ln{constructor(){super(new Ts,[]),this.init()}async init(){const t=await new Vb().loadAsync(`${document.baseURI}public/assets/gfx/sphere-skybox.jpg`),i=new ys({side:di,map:t,opacity:gt.skyboxOpacity,transparent:!0,color:new At(.15,.2,.4)}),a=10**5.8,o=new bs(a);this.geometry=o,this.material=i}}function lw(s,e){return s.position.distanceTo(e.position)<=s.radius+e.radius}function cw({pulled:s,puller:e,timeDelta:t}){const i=e.position.clone().sub(s.position),a=e.position.distanceTo(s.position);return i.normalize().multiplyScalar(e.mass).multiplyScalar(s.mass).multiplyScalar(t*100).divideScalar(a**2)}function uw({staticSphere:s,movingSphere:e,onBounceVelocityMultiplier:t=gt.ball.bounciness}){const i=e.position.clone().sub(s.position).normalize(),a=i.dot(e.velocity);return e.velocity.clone().sub(i.clone().multiplyScalar(2*a)).multiplyScalar(t)}function fw(s,e){const t=s.position.clone().sub(e.position).normalize().multiplyScalar(e.radius+s.radius),i=e.position.clone().add(t);return s.position.set(i.x,i.y,i.z),i}var bo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */bo.exports;(function(s,e){(function(){var t,i="4.17.23",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,M=4,T=1,w=2,m=1,g=2,U=4,R=8,I=16,V=32,F=64,A=128,z=256,X=512,S=30,P="...",$=800,ie=16,G=1,ee=2,Z=3,ae=1/0,re=9007199254740991,ce=17976931348623157e292,ue=NaN,me=4294967295,Ee=me-1,Ze=me>>>1,ne=[["ary",A],["bind",m],["bindKey",g],["curry",R],["curryRight",I],["flip",X],["partial",V],["partialRight",F],["rearg",z]],de="[object Arguments]",Re="[object Array]",We="[object AsyncFunction]",Ge="[object Boolean]",Le="[object Date]",vt="[object DOMException]",je="[object Error]",q="[object Function]",Vt="[object GeneratorFunction]",De="[object Map]",ke="[object Number]",Fe="[object Null]",Mt="[object Object]",tt="[object Promise]",L="[object Proxy]",y="[object RegExp]",K="[object Set]",_e="[object String]",he="[object Symbol]",ve="[object Undefined]",Ie="[object WeakMap]",ye="[object WeakSet]",we="[object ArrayBuffer]",Be="[object DataView]",Qe="[object Float32Array]",pe="[object Float64Array]",St="[object Int8Array]",st="[object Int16Array]",Je="[object Int32Array]",ze="[object Uint8Array]",be="[object Uint8ClampedArray]",nt="[object Uint16Array]",O="[object Uint32Array]",Me=/\b__p \+= '';/g,Te=/\b(__p \+=) '' \+/g,He=/(__e\(.*?\)|\b__t\)) \+\n'';/g,D=/&(?:amp|lt|gt|quot|#39);/g,xe=/[&<>"']/g,ge=RegExp(D.source),Ue=RegExp(xe.source),Ve=/<%-([\s\S]+?)%>/g,yt=/<%([\s\S]+?)%>/g,dt=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$t=/^\w*$/,Tt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/[\\^$.*+?()[\]{}|]/g,sn=RegExp(It.source),Rr=/^\s+/,Io=/\s/,Cr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ra=/\{\n\/\* \[wrapped with (.+)\] \*/,Pr=/,? & /,sa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,aa=/[()=,{}\[\]\/\s]/,Uo=/\\(\\)?/g,No=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,oa=/\w*$/,C=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,J=/^\[object .+?Constructor\]$/,te=/^0o[0-7]+$/i,j=/^(?:0|[1-9]\d*)$/,Ce=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ne=/($^)/,qe=/['\n\r\u2028\u2029\\]/g,Ye="\\ud800-\\udfff",lt="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",Bt=lt+it+at,cn="\\u2700-\\u27bf",kt="a-z\\xdf-\\xf6\\xf8-\\xff",Jn="\\xac\\xb1\\xd7\\xf7",Ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",ws=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nt="A-Z\\xc0-\\xd6\\xd8-\\xde",li="\\ufe0e\\ufe0f",Rs=Jn+Ut+ut+ws,gi="['’]",Cs="["+Ye+"]",Zt="["+Rs+"]",Gn="["+Bt+"]",Lr="\\d+",Tn="["+cn+"]",Dr="["+kt+"]",la="[^"+Ye+Rs+Lr+cn+kt+Nt+"]",Ir="\\ud83c[\\udffb-\\udfff]",Cp="(?:"+Gn+"|"+Ir+")",$c="[^"+Ye+"]",Oo="(?:\\ud83c[\\udde6-\\uddff]){2}",Fo="[\\ud800-\\udbff][\\udc00-\\udfff]",Ur="["+Nt+"]",Zc="\\u200d",jc="(?:"+Dr+"|"+la+")",Pp="(?:"+Ur+"|"+la+")",Jc="(?:"+gi+"(?:d|ll|m|re|s|t|ve))?",Qc="(?:"+gi+"(?:D|LL|M|RE|S|T|VE))?",eu=Cp+"?",tu="["+li+"]?",Lp="(?:"+Zc+"(?:"+[$c,Oo,Fo].join("|")+")"+tu+eu+")*",Dp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ip="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nu=tu+eu+Lp,Up="(?:"+[Tn,Oo,Fo].join("|")+")"+nu,Np="(?:"+[$c+Gn+"?",Gn,Oo,Fo,Cs].join("|")+")",Op=RegExp(gi,"g"),Fp=RegExp(Gn,"g"),Bo=RegExp(Ir+"(?="+Ir+")|"+Np+nu,"g"),Bp=RegExp([Ur+"?"+Dr+"+"+Jc+"(?="+[Zt,Ur,"$"].join("|")+")",Pp+"+"+Qc+"(?="+[Zt,Ur+jc,"$"].join("|")+")",Ur+"?"+jc+"+"+Jc,Ur+"+"+Qc,Ip,Dp,Lr,Up].join("|"),"g"),zp=RegExp("["+Zc+Ye+Bt+li+"]"),Gp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Hp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Vp=-1,Ot={};Ot[Qe]=Ot[pe]=Ot[St]=Ot[st]=Ot[Je]=Ot[ze]=Ot[be]=Ot[nt]=Ot[O]=!0,Ot[de]=Ot[Re]=Ot[we]=Ot[Ge]=Ot[Be]=Ot[Le]=Ot[je]=Ot[q]=Ot[De]=Ot[ke]=Ot[Mt]=Ot[y]=Ot[K]=Ot[_e]=Ot[Ie]=!1;var Dt={};Dt[de]=Dt[Re]=Dt[we]=Dt[Be]=Dt[Ge]=Dt[Le]=Dt[Qe]=Dt[pe]=Dt[St]=Dt[st]=Dt[Je]=Dt[De]=Dt[ke]=Dt[Mt]=Dt[y]=Dt[K]=Dt[_e]=Dt[he]=Dt[ze]=Dt[be]=Dt[nt]=Dt[O]=!0,Dt[je]=Dt[q]=Dt[Ie]=!1;var Wp={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},kp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},qp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Yp=parseFloat,Kp=parseInt,iu=typeof hs=="object"&&hs&&hs.Object===Object&&hs,$p=typeof self=="object"&&self&&self.Object===Object&&self,an=iu||$p||Function("return this")(),zo=e&&!e.nodeType&&e,sr=zo&&!0&&s&&!s.nodeType&&s,ru=sr&&sr.exports===zo,Go=ru&&iu.process,Hn=function(){try{var W=sr&&sr.require&&sr.require("util").types;return W||Go&&Go.binding&&Go.binding("util")}catch{}}(),su=Hn&&Hn.isArrayBuffer,au=Hn&&Hn.isDate,ou=Hn&&Hn.isMap,lu=Hn&&Hn.isRegExp,cu=Hn&&Hn.isSet,uu=Hn&&Hn.isTypedArray;function Dn(W,se,Q){switch(Q.length){case 0:return W.call(se);case 1:return W.call(se,Q[0]);case 2:return W.call(se,Q[0],Q[1]);case 3:return W.call(se,Q[0],Q[1],Q[2])}return W.apply(se,Q)}function Zp(W,se,Q,Pe){for(var rt=-1,bt=W==null?0:W.length;++rt<bt;){var jt=W[rt];se(Pe,jt,Q(jt),W)}return Pe}function Vn(W,se){for(var Q=-1,Pe=W==null?0:W.length;++Q<Pe&&se(W[Q],Q,W)!==!1;);return W}function jp(W,se){for(var Q=W==null?0:W.length;Q--&&se(W[Q],Q,W)!==!1;);return W}function fu(W,se){for(var Q=-1,Pe=W==null?0:W.length;++Q<Pe;)if(!se(W[Q],Q,W))return!1;return!0}function Ni(W,se){for(var Q=-1,Pe=W==null?0:W.length,rt=0,bt=[];++Q<Pe;){var jt=W[Q];se(jt,Q,W)&&(bt[rt++]=jt)}return bt}function ca(W,se){var Q=W==null?0:W.length;return!!Q&&Nr(W,se,0)>-1}function Ho(W,se,Q){for(var Pe=-1,rt=W==null?0:W.length;++Pe<rt;)if(Q(se,W[Pe]))return!0;return!1}function zt(W,se){for(var Q=-1,Pe=W==null?0:W.length,rt=Array(Pe);++Q<Pe;)rt[Q]=se(W[Q],Q,W);return rt}function Oi(W,se){for(var Q=-1,Pe=se.length,rt=W.length;++Q<Pe;)W[rt+Q]=se[Q];return W}function Vo(W,se,Q,Pe){var rt=-1,bt=W==null?0:W.length;for(Pe&&bt&&(Q=W[++rt]);++rt<bt;)Q=se(Q,W[rt],rt,W);return Q}function Jp(W,se,Q,Pe){var rt=W==null?0:W.length;for(Pe&&rt&&(Q=W[--rt]);rt--;)Q=se(Q,W[rt],rt,W);return Q}function Wo(W,se){for(var Q=-1,Pe=W==null?0:W.length;++Q<Pe;)if(se(W[Q],Q,W))return!0;return!1}var Qp=ko("length");function em(W){return W.split("")}function tm(W){return W.match(sa)||[]}function hu(W,se,Q){var Pe;return Q(W,function(rt,bt,jt){if(se(rt,bt,jt))return Pe=bt,!1}),Pe}function ua(W,se,Q,Pe){for(var rt=W.length,bt=Q+(Pe?1:-1);Pe?bt--:++bt<rt;)if(se(W[bt],bt,W))return bt;return-1}function Nr(W,se,Q){return se===se?dm(W,se,Q):ua(W,du,Q)}function nm(W,se,Q,Pe){for(var rt=Q-1,bt=W.length;++rt<bt;)if(Pe(W[rt],se))return rt;return-1}function du(W){return W!==W}function pu(W,se){var Q=W==null?0:W.length;return Q?qo(W,se)/Q:ue}function ko(W){return function(se){return se==null?t:se[W]}}function Xo(W){return function(se){return W==null?t:W[se]}}function mu(W,se,Q,Pe,rt){return rt(W,function(bt,jt,Lt){Q=Pe?(Pe=!1,bt):se(Q,bt,jt,Lt)}),Q}function im(W,se){var Q=W.length;for(W.sort(se);Q--;)W[Q]=W[Q].value;return W}function qo(W,se){for(var Q,Pe=-1,rt=W.length;++Pe<rt;){var bt=se(W[Pe]);bt!==t&&(Q=Q===t?bt:Q+bt)}return Q}function Yo(W,se){for(var Q=-1,Pe=Array(W);++Q<W;)Pe[Q]=se(Q);return Pe}function rm(W,se){return zt(se,function(Q){return[Q,W[Q]]})}function gu(W){return W&&W.slice(0,Mu(W)+1).replace(Rr,"")}function In(W){return function(se){return W(se)}}function Ko(W,se){return zt(se,function(Q){return W[Q]})}function Ps(W,se){return W.has(se)}function _u(W,se){for(var Q=-1,Pe=W.length;++Q<Pe&&Nr(se,W[Q],0)>-1;);return Q}function vu(W,se){for(var Q=W.length;Q--&&Nr(se,W[Q],0)>-1;);return Q}function sm(W,se){for(var Q=W.length,Pe=0;Q--;)W[Q]===se&&++Pe;return Pe}var am=Xo(Wp),om=Xo(kp);function lm(W){return"\\"+qp[W]}function cm(W,se){return W==null?t:W[se]}function Or(W){return zp.test(W)}function um(W){return Gp.test(W)}function fm(W){for(var se,Q=[];!(se=W.next()).done;)Q.push(se.value);return Q}function $o(W){var se=-1,Q=Array(W.size);return W.forEach(function(Pe,rt){Q[++se]=[rt,Pe]}),Q}function xu(W,se){return function(Q){return W(se(Q))}}function Fi(W,se){for(var Q=-1,Pe=W.length,rt=0,bt=[];++Q<Pe;){var jt=W[Q];(jt===se||jt===p)&&(W[Q]=p,bt[rt++]=Q)}return bt}function fa(W){var se=-1,Q=Array(W.size);return W.forEach(function(Pe){Q[++se]=Pe}),Q}function hm(W){var se=-1,Q=Array(W.size);return W.forEach(function(Pe){Q[++se]=[Pe,Pe]}),Q}function dm(W,se,Q){for(var Pe=Q-1,rt=W.length;++Pe<rt;)if(W[Pe]===se)return Pe;return-1}function pm(W,se,Q){for(var Pe=Q+1;Pe--;)if(W[Pe]===se)return Pe;return Pe}function Fr(W){return Or(W)?gm(W):Qp(W)}function Qn(W){return Or(W)?_m(W):em(W)}function Mu(W){for(var se=W.length;se--&&Io.test(W.charAt(se)););return se}var mm=Xo(Xp);function gm(W){for(var se=Bo.lastIndex=0;Bo.test(W);)++se;return se}function _m(W){return W.match(Bo)||[]}function vm(W){return W.match(Bp)||[]}var xm=function W(se){se=se==null?an:Br.defaults(an.Object(),se,Br.pick(an,Hp));var Q=se.Array,Pe=se.Date,rt=se.Error,bt=se.Function,jt=se.Math,Lt=se.Object,Zo=se.RegExp,Mm=se.String,Wn=se.TypeError,ha=Q.prototype,Sm=bt.prototype,zr=Lt.prototype,da=se["__core-js_shared__"],pa=Sm.toString,wt=zr.hasOwnProperty,Em=0,Su=function(){var n=/[^.]+$/.exec(da&&da.keys&&da.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ma=zr.toString,ym=pa.call(Lt),Tm=an._,Am=Zo("^"+pa.call(wt).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ga=ru?se.Buffer:t,Bi=se.Symbol,_a=se.Uint8Array,Eu=ga?ga.allocUnsafe:t,va=xu(Lt.getPrototypeOf,Lt),yu=Lt.create,Tu=zr.propertyIsEnumerable,xa=ha.splice,Au=Bi?Bi.isConcatSpreadable:t,Ls=Bi?Bi.iterator:t,ar=Bi?Bi.toStringTag:t,Ma=function(){try{var n=fr(Lt,"defineProperty");return n({},"",{}),n}catch{}}(),bm=se.clearTimeout!==an.clearTimeout&&se.clearTimeout,wm=Pe&&Pe.now!==an.Date.now&&Pe.now,Rm=se.setTimeout!==an.setTimeout&&se.setTimeout,Sa=jt.ceil,Ea=jt.floor,jo=Lt.getOwnPropertySymbols,Cm=ga?ga.isBuffer:t,bu=se.isFinite,Pm=ha.join,Lm=xu(Lt.keys,Lt),Jt=jt.max,un=jt.min,Dm=Pe.now,Im=se.parseInt,wu=jt.random,Um=ha.reverse,Jo=fr(se,"DataView"),Ds=fr(se,"Map"),Qo=fr(se,"Promise"),Gr=fr(se,"Set"),Is=fr(se,"WeakMap"),Us=fr(Lt,"create"),ya=Is&&new Is,Hr={},Nm=hr(Jo),Om=hr(Ds),Fm=hr(Qo),Bm=hr(Gr),zm=hr(Is),Ta=Bi?Bi.prototype:t,Ns=Ta?Ta.valueOf:t,Ru=Ta?Ta.toString:t;function E(n){if(Wt(n)&&!ot(n)&&!(n instanceof xt)){if(n instanceof kn)return n;if(wt.call(n,"__wrapped__"))return Pf(n)}return new kn(n)}var Vr=function(){function n(){}return function(r){if(!Ht(r))return{};if(yu)return yu(r);n.prototype=r;var l=new n;return n.prototype=t,l}}();function Aa(){}function kn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:Ve,evaluate:yt,interpolate:dt,variable:"",imports:{_:E}},E.prototype=Aa.prototype,E.prototype.constructor=E,kn.prototype=Vr(Aa.prototype),kn.prototype.constructor=kn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=me,this.__views__=[]}function Gm(){var n=new xt(this.__wrapped__);return n.__actions__=An(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=An(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=An(this.__views__),n}function Hm(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Vm(){var n=this.__wrapped__.value(),r=this.__dir__,l=ot(n),f=r<0,x=l?n.length:0,b=e_(0,x,this.__views__),N=b.start,B=b.end,k=B-N,oe=f?B:N-1,le=this.__iteratees__,fe=le.length,Ae=0,Oe=un(k,this.__takeCount__);if(!l||!f&&x==k&&Oe==k)return Ju(n,this.__actions__);var Ke=[];e:for(;k--&&Ae<Oe;){oe+=r;for(var ft=-1,$e=n[oe];++ft<fe;){var _t=le[ft],Et=_t.iteratee,On=_t.type,_n=Et($e);if(On==ee)$e=_n;else if(!_n){if(On==G)continue e;break e}}Ke[Ae++]=$e}return Ke}xt.prototype=Vr(Aa.prototype),xt.prototype.constructor=xt;function or(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function Wm(){this.__data__=Us?Us(null):{},this.size=0}function km(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function Xm(n){var r=this.__data__;if(Us){var l=r[n];return l===h?t:l}return wt.call(r,n)?r[n]:t}function qm(n){var r=this.__data__;return Us?r[n]!==t:wt.call(r,n)}function Ym(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Us&&r===t?h:r,this}or.prototype.clear=Wm,or.prototype.delete=km,or.prototype.get=Xm,or.prototype.has=qm,or.prototype.set=Ym;function _i(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function Km(){this.__data__=[],this.size=0}function $m(n){var r=this.__data__,l=ba(r,n);if(l<0)return!1;var f=r.length-1;return l==f?r.pop():xa.call(r,l,1),--this.size,!0}function Zm(n){var r=this.__data__,l=ba(r,n);return l<0?t:r[l][1]}function jm(n){return ba(this.__data__,n)>-1}function Jm(n,r){var l=this.__data__,f=ba(l,n);return f<0?(++this.size,l.push([n,r])):l[f][1]=r,this}_i.prototype.clear=Km,_i.prototype.delete=$m,_i.prototype.get=Zm,_i.prototype.has=jm,_i.prototype.set=Jm;function vi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function Qm(){this.size=0,this.__data__={hash:new or,map:new(Ds||_i),string:new or}}function eg(n){var r=Ba(this,n).delete(n);return this.size-=r?1:0,r}function tg(n){return Ba(this,n).get(n)}function ng(n){return Ba(this,n).has(n)}function ig(n,r){var l=Ba(this,n),f=l.size;return l.set(n,r),this.size+=l.size==f?0:1,this}vi.prototype.clear=Qm,vi.prototype.delete=eg,vi.prototype.get=tg,vi.prototype.has=ng,vi.prototype.set=ig;function lr(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new vi;++r<l;)this.add(n[r])}function rg(n){return this.__data__.set(n,h),this}function sg(n){return this.__data__.has(n)}lr.prototype.add=lr.prototype.push=rg,lr.prototype.has=sg;function ei(n){var r=this.__data__=new _i(n);this.size=r.size}function ag(){this.__data__=new _i,this.size=0}function og(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function lg(n){return this.__data__.get(n)}function cg(n){return this.__data__.has(n)}function ug(n,r){var l=this.__data__;if(l instanceof _i){var f=l.__data__;if(!Ds||f.length<a-1)return f.push([n,r]),this.size=++l.size,this;l=this.__data__=new vi(f)}return l.set(n,r),this.size=l.size,this}ei.prototype.clear=ag,ei.prototype.delete=og,ei.prototype.get=lg,ei.prototype.has=cg,ei.prototype.set=ug;function Cu(n,r){var l=ot(n),f=!l&&dr(n),x=!l&&!f&&Wi(n),b=!l&&!f&&!x&&qr(n),N=l||f||x||b,B=N?Yo(n.length,Mm):[],k=B.length;for(var oe in n)(r||wt.call(n,oe))&&!(N&&(oe=="length"||x&&(oe=="offset"||oe=="parent")||b&&(oe=="buffer"||oe=="byteLength"||oe=="byteOffset")||Ei(oe,k)))&&B.push(oe);return B}function Pu(n){var r=n.length;return r?n[ul(0,r-1)]:t}function fg(n,r){return za(An(n),cr(r,0,n.length))}function hg(n){return za(An(n))}function el(n,r,l){(l!==t&&!ti(n[r],l)||l===t&&!(r in n))&&xi(n,r,l)}function Os(n,r,l){var f=n[r];(!(wt.call(n,r)&&ti(f,l))||l===t&&!(r in n))&&xi(n,r,l)}function ba(n,r){for(var l=n.length;l--;)if(ti(n[l][0],r))return l;return-1}function dg(n,r,l,f){return zi(n,function(x,b,N){r(f,x,l(x),N)}),f}function Lu(n,r){return n&&ui(r,tn(r),n)}function pg(n,r){return n&&ui(r,wn(r),n)}function xi(n,r,l){r=="__proto__"&&Ma?Ma(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function tl(n,r){for(var l=-1,f=r.length,x=Q(f),b=n==null;++l<f;)x[l]=b?t:Nl(n,r[l]);return x}function cr(n,r,l){return n===n&&(l!==t&&(n=n<=l?n:l),r!==t&&(n=n>=r?n:r)),n}function Xn(n,r,l,f,x,b){var N,B=r&_,k=r&v,oe=r&M;if(l&&(N=x?l(n,f,x,b):l(n)),N!==t)return N;if(!Ht(n))return n;var le=ot(n);if(le){if(N=n_(n),!B)return An(n,N)}else{var fe=fn(n),Ae=fe==q||fe==Vt;if(Wi(n))return tf(n,B);if(fe==Mt||fe==de||Ae&&!x){if(N=k||Ae?{}:Sf(n),!B)return k?Xg(n,pg(N,n)):kg(n,Lu(N,n))}else{if(!Dt[fe])return x?n:{};N=i_(n,fe,B)}}b||(b=new ei);var Oe=b.get(n);if(Oe)return Oe;b.set(n,N),Zf(n)?n.forEach(function($e){N.add(Xn($e,r,l,$e,n,b))}):Kf(n)&&n.forEach(function($e,_t){N.set(_t,Xn($e,r,l,_t,n,b))});var Ke=oe?k?Sl:Ml:k?wn:tn,ft=le?t:Ke(n);return Vn(ft||n,function($e,_t){ft&&(_t=$e,$e=n[_t]),Os(N,_t,Xn($e,r,l,_t,n,b))}),N}function mg(n){var r=tn(n);return function(l){return Du(l,n,r)}}function Du(n,r,l){var f=l.length;if(n==null)return!f;for(n=Lt(n);f--;){var x=l[f],b=r[x],N=n[x];if(N===t&&!(x in n)||!b(N))return!1}return!0}function Iu(n,r,l){if(typeof n!="function")throw new Wn(u);return Ws(function(){n.apply(t,l)},r)}function Fs(n,r,l,f){var x=-1,b=ca,N=!0,B=n.length,k=[],oe=r.length;if(!B)return k;l&&(r=zt(r,In(l))),f?(b=Ho,N=!1):r.length>=a&&(b=Ps,N=!1,r=new lr(r));e:for(;++x<B;){var le=n[x],fe=l==null?le:l(le);if(le=f||le!==0?le:0,N&&fe===fe){for(var Ae=oe;Ae--;)if(r[Ae]===fe)continue e;k.push(le)}else b(r,fe,f)||k.push(le)}return k}var zi=of(ci),Uu=of(il,!0);function gg(n,r){var l=!0;return zi(n,function(f,x,b){return l=!!r(f,x,b),l}),l}function wa(n,r,l){for(var f=-1,x=n.length;++f<x;){var b=n[f],N=r(b);if(N!=null&&(B===t?N===N&&!Nn(N):l(N,B)))var B=N,k=b}return k}function _g(n,r,l,f){var x=n.length;for(l=ct(l),l<0&&(l=-l>x?0:x+l),f=f===t||f>x?x:ct(f),f<0&&(f+=x),f=l>f?0:Jf(f);l<f;)n[l++]=r;return n}function Nu(n,r){var l=[];return zi(n,function(f,x,b){r(f,x,b)&&l.push(f)}),l}function on(n,r,l,f,x){var b=-1,N=n.length;for(l||(l=s_),x||(x=[]);++b<N;){var B=n[b];r>0&&l(B)?r>1?on(B,r-1,l,f,x):Oi(x,B):f||(x[x.length]=B)}return x}var nl=lf(),Ou=lf(!0);function ci(n,r){return n&&nl(n,r,tn)}function il(n,r){return n&&Ou(n,r,tn)}function Ra(n,r){return Ni(r,function(l){return yi(n[l])})}function ur(n,r){r=Hi(r,n);for(var l=0,f=r.length;n!=null&&l<f;)n=n[fi(r[l++])];return l&&l==f?n:t}function Fu(n,r,l){var f=r(n);return ot(n)?f:Oi(f,l(n))}function mn(n){return n==null?n===t?ve:Fe:ar&&ar in Lt(n)?Qg(n):h_(n)}function rl(n,r){return n>r}function vg(n,r){return n!=null&&wt.call(n,r)}function xg(n,r){return n!=null&&r in Lt(n)}function Mg(n,r,l){return n>=un(r,l)&&n<Jt(r,l)}function sl(n,r,l){for(var f=l?Ho:ca,x=n[0].length,b=n.length,N=b,B=Q(b),k=1/0,oe=[];N--;){var le=n[N];N&&r&&(le=zt(le,In(r))),k=un(le.length,k),B[N]=!l&&(r||x>=120&&le.length>=120)?new lr(N&&le):t}le=n[0];var fe=-1,Ae=B[0];e:for(;++fe<x&&oe.length<k;){var Oe=le[fe],Ke=r?r(Oe):Oe;if(Oe=l||Oe!==0?Oe:0,!(Ae?Ps(Ae,Ke):f(oe,Ke,l))){for(N=b;--N;){var ft=B[N];if(!(ft?Ps(ft,Ke):f(n[N],Ke,l)))continue e}Ae&&Ae.push(Ke),oe.push(Oe)}}return oe}function Sg(n,r,l,f){return ci(n,function(x,b,N){r(f,l(x),b,N)}),f}function Bs(n,r,l){r=Hi(r,n),n=Af(n,r);var f=n==null?n:n[fi(Yn(r))];return f==null?t:Dn(f,n,l)}function Bu(n){return Wt(n)&&mn(n)==de}function Eg(n){return Wt(n)&&mn(n)==we}function yg(n){return Wt(n)&&mn(n)==Le}function zs(n,r,l,f,x){return n===r?!0:n==null||r==null||!Wt(n)&&!Wt(r)?n!==n&&r!==r:Tg(n,r,l,f,zs,x)}function Tg(n,r,l,f,x,b){var N=ot(n),B=ot(r),k=N?Re:fn(n),oe=B?Re:fn(r);k=k==de?Mt:k,oe=oe==de?Mt:oe;var le=k==Mt,fe=oe==Mt,Ae=k==oe;if(Ae&&Wi(n)){if(!Wi(r))return!1;N=!0,le=!1}if(Ae&&!le)return b||(b=new ei),N||qr(n)?vf(n,r,l,f,x,b):jg(n,r,k,l,f,x,b);if(!(l&T)){var Oe=le&&wt.call(n,"__wrapped__"),Ke=fe&&wt.call(r,"__wrapped__");if(Oe||Ke){var ft=Oe?n.value():n,$e=Ke?r.value():r;return b||(b=new ei),x(ft,$e,l,f,b)}}return Ae?(b||(b=new ei),Jg(n,r,l,f,x,b)):!1}function Ag(n){return Wt(n)&&fn(n)==De}function al(n,r,l,f){var x=l.length,b=x,N=!f;if(n==null)return!b;for(n=Lt(n);x--;){var B=l[x];if(N&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++x<b;){B=l[x];var k=B[0],oe=n[k],le=B[1];if(N&&B[2]){if(oe===t&&!(k in n))return!1}else{var fe=new ei;if(f)var Ae=f(oe,le,k,n,r,fe);if(!(Ae===t?zs(le,oe,T|w,f,fe):Ae))return!1}}return!0}function zu(n){if(!Ht(n)||o_(n))return!1;var r=yi(n)?Am:J;return r.test(hr(n))}function bg(n){return Wt(n)&&mn(n)==y}function wg(n){return Wt(n)&&fn(n)==K}function Rg(n){return Wt(n)&&Xa(n.length)&&!!Ot[mn(n)]}function Gu(n){return typeof n=="function"?n:n==null?Rn:typeof n=="object"?ot(n)?Wu(n[0],n[1]):Vu(n):ch(n)}function ol(n){if(!Vs(n))return Lm(n);var r=[];for(var l in Lt(n))wt.call(n,l)&&l!="constructor"&&r.push(l);return r}function Cg(n){if(!Ht(n))return f_(n);var r=Vs(n),l=[];for(var f in n)f=="constructor"&&(r||!wt.call(n,f))||l.push(f);return l}function ll(n,r){return n<r}function Hu(n,r){var l=-1,f=bn(n)?Q(n.length):[];return zi(n,function(x,b,N){f[++l]=r(x,b,N)}),f}function Vu(n){var r=yl(n);return r.length==1&&r[0][2]?yf(r[0][0],r[0][1]):function(l){return l===n||al(l,n,r)}}function Wu(n,r){return Al(n)&&Ef(r)?yf(fi(n),r):function(l){var f=Nl(l,n);return f===t&&f===r?Ol(l,n):zs(r,f,T|w)}}function Ca(n,r,l,f,x){n!==r&&nl(r,function(b,N){if(x||(x=new ei),Ht(b))Pg(n,r,N,l,Ca,f,x);else{var B=f?f(wl(n,N),b,N+"",n,r,x):t;B===t&&(B=b),el(n,N,B)}},wn)}function Pg(n,r,l,f,x,b,N){var B=wl(n,l),k=wl(r,l),oe=N.get(k);if(oe){el(n,l,oe);return}var le=b?b(B,k,l+"",n,r,N):t,fe=le===t;if(fe){var Ae=ot(k),Oe=!Ae&&Wi(k),Ke=!Ae&&!Oe&&qr(k);le=k,Ae||Oe||Ke?ot(B)?le=B:Xt(B)?le=An(B):Oe?(fe=!1,le=tf(k,!0)):Ke?(fe=!1,le=nf(k,!0)):le=[]:ks(k)||dr(k)?(le=B,dr(B)?le=Qf(B):(!Ht(B)||yi(B))&&(le=Sf(k))):fe=!1}fe&&(N.set(k,le),x(le,k,f,b,N),N.delete(k)),el(n,l,le)}function ku(n,r){var l=n.length;if(l)return r+=r<0?l:0,Ei(r,l)?n[r]:t}function Xu(n,r,l){r.length?r=zt(r,function(b){return ot(b)?function(N){return ur(N,b.length===1?b[0]:b)}:b}):r=[Rn];var f=-1;r=zt(r,In(Xe()));var x=Hu(n,function(b,N,B){var k=zt(r,function(oe){return oe(b)});return{criteria:k,index:++f,value:b}});return im(x,function(b,N){return Wg(b,N,l)})}function Lg(n,r){return qu(n,r,function(l,f){return Ol(n,f)})}function qu(n,r,l){for(var f=-1,x=r.length,b={};++f<x;){var N=r[f],B=ur(n,N);l(B,N)&&Gs(b,Hi(N,n),B)}return b}function Dg(n){return function(r){return ur(r,n)}}function cl(n,r,l,f){var x=f?nm:Nr,b=-1,N=r.length,B=n;for(n===r&&(r=An(r)),l&&(B=zt(n,In(l)));++b<N;)for(var k=0,oe=r[b],le=l?l(oe):oe;(k=x(B,le,k,f))>-1;)B!==n&&xa.call(B,k,1),xa.call(n,k,1);return n}function Yu(n,r){for(var l=n?r.length:0,f=l-1;l--;){var x=r[l];if(l==f||x!==b){var b=x;Ei(x)?xa.call(n,x,1):dl(n,x)}}return n}function ul(n,r){return n+Ea(wu()*(r-n+1))}function Ig(n,r,l,f){for(var x=-1,b=Jt(Sa((r-n)/(l||1)),0),N=Q(b);b--;)N[f?b:++x]=n,n+=l;return N}function fl(n,r){var l="";if(!n||r<1||r>re)return l;do r%2&&(l+=n),r=Ea(r/2),r&&(n+=n);while(r);return l}function pt(n,r){return Rl(Tf(n,r,Rn),n+"")}function Ug(n){return Pu(Yr(n))}function Ng(n,r){var l=Yr(n);return za(l,cr(r,0,l.length))}function Gs(n,r,l,f){if(!Ht(n))return n;r=Hi(r,n);for(var x=-1,b=r.length,N=b-1,B=n;B!=null&&++x<b;){var k=fi(r[x]),oe=l;if(k==="__proto__"||k==="constructor"||k==="prototype")return n;if(x!=N){var le=B[k];oe=f?f(le,k,B):t,oe===t&&(oe=Ht(le)?le:Ei(r[x+1])?[]:{})}Os(B,k,oe),B=B[k]}return n}var Ku=ya?function(n,r){return ya.set(n,r),n}:Rn,Og=Ma?function(n,r){return Ma(n,"toString",{configurable:!0,enumerable:!1,value:Bl(r),writable:!0})}:Rn;function Fg(n){return za(Yr(n))}function qn(n,r,l){var f=-1,x=n.length;r<0&&(r=-r>x?0:x+r),l=l>x?x:l,l<0&&(l+=x),x=r>l?0:l-r>>>0,r>>>=0;for(var b=Q(x);++f<x;)b[f]=n[f+r];return b}function Bg(n,r){var l;return zi(n,function(f,x,b){return l=r(f,x,b),!l}),!!l}function Pa(n,r,l){var f=0,x=n==null?f:n.length;if(typeof r=="number"&&r===r&&x<=Ze){for(;f<x;){var b=f+x>>>1,N=n[b];N!==null&&!Nn(N)&&(l?N<=r:N<r)?f=b+1:x=b}return x}return hl(n,r,Rn,l)}function hl(n,r,l,f){var x=0,b=n==null?0:n.length;if(b===0)return 0;r=l(r);for(var N=r!==r,B=r===null,k=Nn(r),oe=r===t;x<b;){var le=Ea((x+b)/2),fe=l(n[le]),Ae=fe!==t,Oe=fe===null,Ke=fe===fe,ft=Nn(fe);if(N)var $e=f||Ke;else oe?$e=Ke&&(f||Ae):B?$e=Ke&&Ae&&(f||!Oe):k?$e=Ke&&Ae&&!Oe&&(f||!ft):Oe||ft?$e=!1:$e=f?fe<=r:fe<r;$e?x=le+1:b=le}return un(b,Ee)}function $u(n,r){for(var l=-1,f=n.length,x=0,b=[];++l<f;){var N=n[l],B=r?r(N):N;if(!l||!ti(B,k)){var k=B;b[x++]=N===0?0:N}}return b}function Zu(n){return typeof n=="number"?n:Nn(n)?ue:+n}function Un(n){if(typeof n=="string")return n;if(ot(n))return zt(n,Un)+"";if(Nn(n))return Ru?Ru.call(n):"";var r=n+"";return r=="0"&&1/n==-ae?"-0":r}function Gi(n,r,l){var f=-1,x=ca,b=n.length,N=!0,B=[],k=B;if(l)N=!1,x=Ho;else if(b>=a){var oe=r?null:$g(n);if(oe)return fa(oe);N=!1,x=Ps,k=new lr}else k=r?[]:B;e:for(;++f<b;){var le=n[f],fe=r?r(le):le;if(le=l||le!==0?le:0,N&&fe===fe){for(var Ae=k.length;Ae--;)if(k[Ae]===fe)continue e;r&&k.push(fe),B.push(le)}else x(k,fe,l)||(k!==B&&k.push(fe),B.push(le))}return B}function dl(n,r){r=Hi(r,n);var l=-1,f=r.length;if(!f)return!0;for(var x=n==null||typeof n!="object"&&typeof n!="function";++l<f;){var b=r[l];if(typeof b=="string"){if(b==="__proto__"&&!wt.call(n,"__proto__"))return!1;if(b==="constructor"&&l+1<f&&typeof r[l+1]=="string"&&r[l+1]==="prototype"){if(x&&l===0)continue;return!1}}}var N=Af(n,r);return N==null||delete N[fi(Yn(r))]}function ju(n,r,l,f){return Gs(n,r,l(ur(n,r)),f)}function La(n,r,l,f){for(var x=n.length,b=f?x:-1;(f?b--:++b<x)&&r(n[b],b,n););return l?qn(n,f?0:b,f?b+1:x):qn(n,f?b+1:0,f?x:b)}function Ju(n,r){var l=n;return l instanceof xt&&(l=l.value()),Vo(r,function(f,x){return x.func.apply(x.thisArg,Oi([f],x.args))},l)}function pl(n,r,l){var f=n.length;if(f<2)return f?Gi(n[0]):[];for(var x=-1,b=Q(f);++x<f;)for(var N=n[x],B=-1;++B<f;)B!=x&&(b[x]=Fs(b[x]||N,n[B],r,l));return Gi(on(b,1),r,l)}function Qu(n,r,l){for(var f=-1,x=n.length,b=r.length,N={};++f<x;){var B=f<b?r[f]:t;l(N,n[f],B)}return N}function ml(n){return Xt(n)?n:[]}function gl(n){return typeof n=="function"?n:Rn}function Hi(n,r){return ot(n)?n:Al(n,r)?[n]:Cf(Rt(n))}var zg=pt;function Vi(n,r,l){var f=n.length;return l=l===t?f:l,!r&&l>=f?n:qn(n,r,l)}var ef=bm||function(n){return an.clearTimeout(n)};function tf(n,r){if(r)return n.slice();var l=n.length,f=Eu?Eu(l):new n.constructor(l);return n.copy(f),f}function _l(n){var r=new n.constructor(n.byteLength);return new _a(r).set(new _a(n)),r}function Gg(n,r){var l=r?_l(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Hg(n){var r=new n.constructor(n.source,oa.exec(n));return r.lastIndex=n.lastIndex,r}function Vg(n){return Ns?Lt(Ns.call(n)):{}}function nf(n,r){var l=r?_l(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function rf(n,r){if(n!==r){var l=n!==t,f=n===null,x=n===n,b=Nn(n),N=r!==t,B=r===null,k=r===r,oe=Nn(r);if(!B&&!oe&&!b&&n>r||b&&N&&k&&!B&&!oe||f&&N&&k||!l&&k||!x)return 1;if(!f&&!b&&!oe&&n<r||oe&&l&&x&&!f&&!b||B&&l&&x||!N&&x||!k)return-1}return 0}function Wg(n,r,l){for(var f=-1,x=n.criteria,b=r.criteria,N=x.length,B=l.length;++f<N;){var k=rf(x[f],b[f]);if(k){if(f>=B)return k;var oe=l[f];return k*(oe=="desc"?-1:1)}}return n.index-r.index}function sf(n,r,l,f){for(var x=-1,b=n.length,N=l.length,B=-1,k=r.length,oe=Jt(b-N,0),le=Q(k+oe),fe=!f;++B<k;)le[B]=r[B];for(;++x<N;)(fe||x<b)&&(le[l[x]]=n[x]);for(;oe--;)le[B++]=n[x++];return le}function af(n,r,l,f){for(var x=-1,b=n.length,N=-1,B=l.length,k=-1,oe=r.length,le=Jt(b-B,0),fe=Q(le+oe),Ae=!f;++x<le;)fe[x]=n[x];for(var Oe=x;++k<oe;)fe[Oe+k]=r[k];for(;++N<B;)(Ae||x<b)&&(fe[Oe+l[N]]=n[x++]);return fe}function An(n,r){var l=-1,f=n.length;for(r||(r=Q(f));++l<f;)r[l]=n[l];return r}function ui(n,r,l,f){var x=!l;l||(l={});for(var b=-1,N=r.length;++b<N;){var B=r[b],k=f?f(l[B],n[B],B,l,n):t;k===t&&(k=n[B]),x?xi(l,B,k):Os(l,B,k)}return l}function kg(n,r){return ui(n,Tl(n),r)}function Xg(n,r){return ui(n,xf(n),r)}function Da(n,r){return function(l,f){var x=ot(l)?Zp:dg,b=r?r():{};return x(l,n,Xe(f,2),b)}}function Wr(n){return pt(function(r,l){var f=-1,x=l.length,b=x>1?l[x-1]:t,N=x>2?l[2]:t;for(b=n.length>3&&typeof b=="function"?(x--,b):t,N&&gn(l[0],l[1],N)&&(b=x<3?t:b,x=1),r=Lt(r);++f<x;){var B=l[f];B&&n(r,B,f,b)}return r})}function of(n,r){return function(l,f){if(l==null)return l;if(!bn(l))return n(l,f);for(var x=l.length,b=r?x:-1,N=Lt(l);(r?b--:++b<x)&&f(N[b],b,N)!==!1;);return l}}function lf(n){return function(r,l,f){for(var x=-1,b=Lt(r),N=f(r),B=N.length;B--;){var k=N[n?B:++x];if(l(b[k],k,b)===!1)break}return r}}function qg(n,r,l){var f=r&m,x=Hs(n);function b(){var N=this&&this!==an&&this instanceof b?x:n;return N.apply(f?l:this,arguments)}return b}function cf(n){return function(r){r=Rt(r);var l=Or(r)?Qn(r):t,f=l?l[0]:r.charAt(0),x=l?Vi(l,1).join(""):r.slice(1);return f[n]()+x}}function kr(n){return function(r){return Vo(oh(ah(r).replace(Op,"")),n,"")}}function Hs(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Vr(n.prototype),f=n.apply(l,r);return Ht(f)?f:l}}function Yg(n,r,l){var f=Hs(n);function x(){for(var b=arguments.length,N=Q(b),B=b,k=Xr(x);B--;)N[B]=arguments[B];var oe=b<3&&N[0]!==k&&N[b-1]!==k?[]:Fi(N,k);if(b-=oe.length,b<l)return pf(n,r,Ia,x.placeholder,t,N,oe,t,t,l-b);var le=this&&this!==an&&this instanceof x?f:n;return Dn(le,this,N)}return x}function uf(n){return function(r,l,f){var x=Lt(r);if(!bn(r)){var b=Xe(l,3);r=tn(r),l=function(B){return b(x[B],B,x)}}var N=n(r,l,f);return N>-1?x[b?r[N]:N]:t}}function ff(n){return Si(function(r){var l=r.length,f=l,x=kn.prototype.thru;for(n&&r.reverse();f--;){var b=r[f];if(typeof b!="function")throw new Wn(u);if(x&&!N&&Fa(b)=="wrapper")var N=new kn([],!0)}for(f=N?f:l;++f<l;){b=r[f];var B=Fa(b),k=B=="wrapper"?El(b):t;k&&bl(k[0])&&k[1]==(A|R|V|z)&&!k[4].length&&k[9]==1?N=N[Fa(k[0])].apply(N,k[3]):N=b.length==1&&bl(b)?N[B]():N.thru(b)}return function(){var oe=arguments,le=oe[0];if(N&&oe.length==1&&ot(le))return N.plant(le).value();for(var fe=0,Ae=l?r[fe].apply(this,oe):le;++fe<l;)Ae=r[fe].call(this,Ae);return Ae}})}function Ia(n,r,l,f,x,b,N,B,k,oe){var le=r&A,fe=r&m,Ae=r&g,Oe=r&(R|I),Ke=r&X,ft=Ae?t:Hs(n);function $e(){for(var _t=arguments.length,Et=Q(_t),On=_t;On--;)Et[On]=arguments[On];if(Oe)var _n=Xr($e),Fn=sm(Et,_n);if(f&&(Et=sf(Et,f,x,Oe)),b&&(Et=af(Et,b,N,Oe)),_t-=Fn,Oe&&_t<oe){var qt=Fi(Et,_n);return pf(n,r,Ia,$e.placeholder,l,Et,qt,B,k,oe-_t)}var ni=fe?l:this,Ai=Ae?ni[n]:n;return _t=Et.length,B?Et=d_(Et,B):Ke&&_t>1&&Et.reverse(),le&&k<_t&&(Et.length=k),this&&this!==an&&this instanceof $e&&(Ai=ft||Hs(Ai)),Ai.apply(ni,Et)}return $e}function hf(n,r){return function(l,f){return Sg(l,n,r(f),{})}}function Ua(n,r){return function(l,f){var x;if(l===t&&f===t)return r;if(l!==t&&(x=l),f!==t){if(x===t)return f;typeof l=="string"||typeof f=="string"?(l=Un(l),f=Un(f)):(l=Zu(l),f=Zu(f)),x=n(l,f)}return x}}function vl(n){return Si(function(r){return r=zt(r,In(Xe())),pt(function(l){var f=this;return n(r,function(x){return Dn(x,f,l)})})})}function Na(n,r){r=r===t?" ":Un(r);var l=r.length;if(l<2)return l?fl(r,n):r;var f=fl(r,Sa(n/Fr(r)));return Or(r)?Vi(Qn(f),0,n).join(""):f.slice(0,n)}function Kg(n,r,l,f){var x=r&m,b=Hs(n);function N(){for(var B=-1,k=arguments.length,oe=-1,le=f.length,fe=Q(le+k),Ae=this&&this!==an&&this instanceof N?b:n;++oe<le;)fe[oe]=f[oe];for(;k--;)fe[oe++]=arguments[++B];return Dn(Ae,x?l:this,fe)}return N}function df(n){return function(r,l,f){return f&&typeof f!="number"&&gn(r,l,f)&&(l=f=t),r=Ti(r),l===t?(l=r,r=0):l=Ti(l),f=f===t?r<l?1:-1:Ti(f),Ig(r,l,f,n)}}function Oa(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Kn(r),l=Kn(l)),n(r,l)}}function pf(n,r,l,f,x,b,N,B,k,oe){var le=r&R,fe=le?N:t,Ae=le?t:N,Oe=le?b:t,Ke=le?t:b;r|=le?V:F,r&=~(le?F:V),r&U||(r&=-4);var ft=[n,r,x,Oe,fe,Ke,Ae,B,k,oe],$e=l.apply(t,ft);return bl(n)&&bf($e,ft),$e.placeholder=f,wf($e,n,r)}function xl(n){var r=jt[n];return function(l,f){if(l=Kn(l),f=f==null?0:un(ct(f),292),f&&bu(l)){var x=(Rt(l)+"e").split("e"),b=r(x[0]+"e"+(+x[1]+f));return x=(Rt(b)+"e").split("e"),+(x[0]+"e"+(+x[1]-f))}return r(l)}}var $g=Gr&&1/fa(new Gr([,-0]))[1]==ae?function(n){return new Gr(n)}:Hl;function mf(n){return function(r){var l=fn(r);return l==De?$o(r):l==K?hm(r):rm(r,n(r))}}function Mi(n,r,l,f,x,b,N,B){var k=r&g;if(!k&&typeof n!="function")throw new Wn(u);var oe=f?f.length:0;if(oe||(r&=-97,f=x=t),N=N===t?N:Jt(ct(N),0),B=B===t?B:ct(B),oe-=x?x.length:0,r&F){var le=f,fe=x;f=x=t}var Ae=k?t:El(n),Oe=[n,r,l,f,x,le,fe,b,N,B];if(Ae&&u_(Oe,Ae),n=Oe[0],r=Oe[1],l=Oe[2],f=Oe[3],x=Oe[4],B=Oe[9]=Oe[9]===t?k?0:n.length:Jt(Oe[9]-oe,0),!B&&r&(R|I)&&(r&=-25),!r||r==m)var Ke=qg(n,r,l);else r==R||r==I?Ke=Yg(n,r,B):(r==V||r==(m|V))&&!x.length?Ke=Kg(n,r,l,f):Ke=Ia.apply(t,Oe);var ft=Ae?Ku:bf;return wf(ft(Ke,Oe),n,r)}function gf(n,r,l,f){return n===t||ti(n,zr[l])&&!wt.call(f,l)?r:n}function _f(n,r,l,f,x,b){return Ht(n)&&Ht(r)&&(b.set(r,n),Ca(n,r,t,_f,b),b.delete(r)),n}function Zg(n){return ks(n)?t:n}function vf(n,r,l,f,x,b){var N=l&T,B=n.length,k=r.length;if(B!=k&&!(N&&k>B))return!1;var oe=b.get(n),le=b.get(r);if(oe&&le)return oe==r&&le==n;var fe=-1,Ae=!0,Oe=l&w?new lr:t;for(b.set(n,r),b.set(r,n);++fe<B;){var Ke=n[fe],ft=r[fe];if(f)var $e=N?f(ft,Ke,fe,r,n,b):f(Ke,ft,fe,n,r,b);if($e!==t){if($e)continue;Ae=!1;break}if(Oe){if(!Wo(r,function(_t,Et){if(!Ps(Oe,Et)&&(Ke===_t||x(Ke,_t,l,f,b)))return Oe.push(Et)})){Ae=!1;break}}else if(!(Ke===ft||x(Ke,ft,l,f,b))){Ae=!1;break}}return b.delete(n),b.delete(r),Ae}function jg(n,r,l,f,x,b,N){switch(l){case Be:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case we:return!(n.byteLength!=r.byteLength||!b(new _a(n),new _a(r)));case Ge:case Le:case ke:return ti(+n,+r);case je:return n.name==r.name&&n.message==r.message;case y:case _e:return n==r+"";case De:var B=$o;case K:var k=f&T;if(B||(B=fa),n.size!=r.size&&!k)return!1;var oe=N.get(n);if(oe)return oe==r;f|=w,N.set(n,r);var le=vf(B(n),B(r),f,x,b,N);return N.delete(n),le;case he:if(Ns)return Ns.call(n)==Ns.call(r)}return!1}function Jg(n,r,l,f,x,b){var N=l&T,B=Ml(n),k=B.length,oe=Ml(r),le=oe.length;if(k!=le&&!N)return!1;for(var fe=k;fe--;){var Ae=B[fe];if(!(N?Ae in r:wt.call(r,Ae)))return!1}var Oe=b.get(n),Ke=b.get(r);if(Oe&&Ke)return Oe==r&&Ke==n;var ft=!0;b.set(n,r),b.set(r,n);for(var $e=N;++fe<k;){Ae=B[fe];var _t=n[Ae],Et=r[Ae];if(f)var On=N?f(Et,_t,Ae,r,n,b):f(_t,Et,Ae,n,r,b);if(!(On===t?_t===Et||x(_t,Et,l,f,b):On)){ft=!1;break}$e||($e=Ae=="constructor")}if(ft&&!$e){var _n=n.constructor,Fn=r.constructor;_n!=Fn&&"constructor"in n&&"constructor"in r&&!(typeof _n=="function"&&_n instanceof _n&&typeof Fn=="function"&&Fn instanceof Fn)&&(ft=!1)}return b.delete(n),b.delete(r),ft}function Si(n){return Rl(Tf(n,t,If),n+"")}function Ml(n){return Fu(n,tn,Tl)}function Sl(n){return Fu(n,wn,xf)}var El=ya?function(n){return ya.get(n)}:Hl;function Fa(n){for(var r=n.name+"",l=Hr[r],f=wt.call(Hr,r)?l.length:0;f--;){var x=l[f],b=x.func;if(b==null||b==n)return x.name}return r}function Xr(n){var r=wt.call(E,"placeholder")?E:n;return r.placeholder}function Xe(){var n=E.iteratee||zl;return n=n===zl?Gu:n,arguments.length?n(arguments[0],arguments[1]):n}function Ba(n,r){var l=n.__data__;return a_(r)?l[typeof r=="string"?"string":"hash"]:l.map}function yl(n){for(var r=tn(n),l=r.length;l--;){var f=r[l],x=n[f];r[l]=[f,x,Ef(x)]}return r}function fr(n,r){var l=cm(n,r);return zu(l)?l:t}function Qg(n){var r=wt.call(n,ar),l=n[ar];try{n[ar]=t;var f=!0}catch{}var x=ma.call(n);return f&&(r?n[ar]=l:delete n[ar]),x}var Tl=jo?function(n){return n==null?[]:(n=Lt(n),Ni(jo(n),function(r){return Tu.call(n,r)}))}:Vl,xf=jo?function(n){for(var r=[];n;)Oi(r,Tl(n)),n=va(n);return r}:Vl,fn=mn;(Jo&&fn(new Jo(new ArrayBuffer(1)))!=Be||Ds&&fn(new Ds)!=De||Qo&&fn(Qo.resolve())!=tt||Gr&&fn(new Gr)!=K||Is&&fn(new Is)!=Ie)&&(fn=function(n){var r=mn(n),l=r==Mt?n.constructor:t,f=l?hr(l):"";if(f)switch(f){case Nm:return Be;case Om:return De;case Fm:return tt;case Bm:return K;case zm:return Ie}return r});function e_(n,r,l){for(var f=-1,x=l.length;++f<x;){var b=l[f],N=b.size;switch(b.type){case"drop":n+=N;break;case"dropRight":r-=N;break;case"take":r=un(r,n+N);break;case"takeRight":n=Jt(n,r-N);break}}return{start:n,end:r}}function t_(n){var r=n.match(ra);return r?r[1].split(Pr):[]}function Mf(n,r,l){r=Hi(r,n);for(var f=-1,x=r.length,b=!1;++f<x;){var N=fi(r[f]);if(!(b=n!=null&&l(n,N)))break;n=n[N]}return b||++f!=x?b:(x=n==null?0:n.length,!!x&&Xa(x)&&Ei(N,x)&&(ot(n)||dr(n)))}function n_(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&wt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Sf(n){return typeof n.constructor=="function"&&!Vs(n)?Vr(va(n)):{}}function i_(n,r,l){var f=n.constructor;switch(r){case we:return _l(n);case Ge:case Le:return new f(+n);case Be:return Gg(n,l);case Qe:case pe:case St:case st:case Je:case ze:case be:case nt:case O:return nf(n,l);case De:return new f;case ke:case _e:return new f(n);case y:return Hg(n);case K:return new f;case he:return Vg(n)}}function r_(n,r){var l=r.length;if(!l)return n;var f=l-1;return r[f]=(l>1?"& ":"")+r[f],r=r.join(l>2?", ":" "),n.replace(Cr,`{
/* [wrapped with `+r+`] */
`)}function s_(n){return ot(n)||dr(n)||!!(Au&&n&&n[Au])}function Ei(n,r){var l=typeof n;return r=r??re,!!r&&(l=="number"||l!="symbol"&&j.test(n))&&n>-1&&n%1==0&&n<r}function gn(n,r,l){if(!Ht(l))return!1;var f=typeof r;return(f=="number"?bn(l)&&Ei(r,l.length):f=="string"&&r in l)?ti(l[r],n):!1}function Al(n,r){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Nn(n)?!0:$t.test(n)||!Ct.test(n)||r!=null&&n in Lt(r)}function a_(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function bl(n){var r=Fa(n),l=E[r];if(typeof l!="function"||!(r in xt.prototype))return!1;if(n===l)return!0;var f=El(l);return!!f&&n===f[0]}function o_(n){return!!Su&&Su in n}var l_=da?yi:Wl;function Vs(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||zr;return n===l}function Ef(n){return n===n&&!Ht(n)}function yf(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==t||n in Lt(l))}}function c_(n){var r=Wa(n,function(f){return l.size===d&&l.clear(),f}),l=r.cache;return r}function u_(n,r){var l=n[1],f=r[1],x=l|f,b=x<(m|g|A),N=f==A&&l==R||f==A&&l==z&&n[7].length<=r[8]||f==(A|z)&&r[7].length<=r[8]&&l==R;if(!(b||N))return n;f&m&&(n[2]=r[2],x|=l&m?0:U);var B=r[3];if(B){var k=n[3];n[3]=k?sf(k,B,r[4]):B,n[4]=k?Fi(n[3],p):r[4]}return B=r[5],B&&(k=n[5],n[5]=k?af(k,B,r[6]):B,n[6]=k?Fi(n[5],p):r[6]),B=r[7],B&&(n[7]=B),f&A&&(n[8]=n[8]==null?r[8]:un(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=x,n}function f_(n){var r=[];if(n!=null)for(var l in Lt(n))r.push(l);return r}function h_(n){return ma.call(n)}function Tf(n,r,l){return r=Jt(r===t?n.length-1:r,0),function(){for(var f=arguments,x=-1,b=Jt(f.length-r,0),N=Q(b);++x<b;)N[x]=f[r+x];x=-1;for(var B=Q(r+1);++x<r;)B[x]=f[x];return B[r]=l(N),Dn(n,this,B)}}function Af(n,r){return r.length<2?n:ur(n,qn(r,0,-1))}function d_(n,r){for(var l=n.length,f=un(r.length,l),x=An(n);f--;){var b=r[f];n[f]=Ei(b,l)?x[b]:t}return n}function wl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var bf=Rf(Ku),Ws=Rm||function(n,r){return an.setTimeout(n,r)},Rl=Rf(Og);function wf(n,r,l){var f=r+"";return Rl(n,r_(f,p_(t_(f),l)))}function Rf(n){var r=0,l=0;return function(){var f=Dm(),x=ie-(f-l);if(l=f,x>0){if(++r>=$)return arguments[0]}else r=0;return n.apply(t,arguments)}}function za(n,r){var l=-1,f=n.length,x=f-1;for(r=r===t?f:r;++l<r;){var b=ul(l,x),N=n[b];n[b]=n[l],n[l]=N}return n.length=r,n}var Cf=c_(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Tt,function(l,f,x,b){r.push(x?b.replace(Uo,"$1"):f||l)}),r});function fi(n){if(typeof n=="string"||Nn(n))return n;var r=n+"";return r=="0"&&1/n==-ae?"-0":r}function hr(n){if(n!=null){try{return pa.call(n)}catch{}try{return n+""}catch{}}return""}function p_(n,r){return Vn(ne,function(l){var f="_."+l[0];r&l[1]&&!ca(n,f)&&n.push(f)}),n.sort()}function Pf(n){if(n instanceof xt)return n.clone();var r=new kn(n.__wrapped__,n.__chain__);return r.__actions__=An(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function m_(n,r,l){(l?gn(n,r,l):r===t)?r=1:r=Jt(ct(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var x=0,b=0,N=Q(Sa(f/r));x<f;)N[b++]=qn(n,x,x+=r);return N}function g_(n){for(var r=-1,l=n==null?0:n.length,f=0,x=[];++r<l;){var b=n[r];b&&(x[f++]=b)}return x}function __(){var n=arguments.length;if(!n)return[];for(var r=Q(n-1),l=arguments[0],f=n;f--;)r[f-1]=arguments[f];return Oi(ot(l)?An(l):[l],on(r,1))}var v_=pt(function(n,r){return Xt(n)?Fs(n,on(r,1,Xt,!0)):[]}),x_=pt(function(n,r){var l=Yn(r);return Xt(l)&&(l=t),Xt(n)?Fs(n,on(r,1,Xt,!0),Xe(l,2)):[]}),M_=pt(function(n,r){var l=Yn(r);return Xt(l)&&(l=t),Xt(n)?Fs(n,on(r,1,Xt,!0),t,l):[]});function S_(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),qn(n,r<0?0:r,f)):[]}function E_(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),r=f-r,qn(n,0,r<0?0:r)):[]}function y_(n,r){return n&&n.length?La(n,Xe(r,3),!0,!0):[]}function T_(n,r){return n&&n.length?La(n,Xe(r,3),!0):[]}function A_(n,r,l,f){var x=n==null?0:n.length;return x?(l&&typeof l!="number"&&gn(n,r,l)&&(l=0,f=x),_g(n,r,l,f)):[]}function Lf(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(f+x,0)),ua(n,Xe(r,3),x)}function Df(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=f-1;return l!==t&&(x=ct(l),x=l<0?Jt(f+x,0):un(x,f-1)),ua(n,Xe(r,3),x,!0)}function If(n){var r=n==null?0:n.length;return r?on(n,1):[]}function b_(n){var r=n==null?0:n.length;return r?on(n,ae):[]}function w_(n,r){var l=n==null?0:n.length;return l?(r=r===t?1:ct(r),on(n,r)):[]}function R_(n){for(var r=-1,l=n==null?0:n.length,f={};++r<l;){var x=n[r];f[x[0]]=x[1]}return f}function Uf(n){return n&&n.length?n[0]:t}function C_(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(f+x,0)),Nr(n,r,x)}function P_(n){var r=n==null?0:n.length;return r?qn(n,0,-1):[]}var L_=pt(function(n){var r=zt(n,ml);return r.length&&r[0]===n[0]?sl(r):[]}),D_=pt(function(n){var r=Yn(n),l=zt(n,ml);return r===Yn(l)?r=t:l.pop(),l.length&&l[0]===n[0]?sl(l,Xe(r,2)):[]}),I_=pt(function(n){var r=Yn(n),l=zt(n,ml);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===n[0]?sl(l,t,r):[]});function U_(n,r){return n==null?"":Pm.call(n,r)}function Yn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function N_(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var x=f;return l!==t&&(x=ct(l),x=x<0?Jt(f+x,0):un(x,f-1)),r===r?pm(n,r,x):ua(n,du,x,!0)}function O_(n,r){return n&&n.length?ku(n,ct(r)):t}var F_=pt(Nf);function Nf(n,r){return n&&n.length&&r&&r.length?cl(n,r):n}function B_(n,r,l){return n&&n.length&&r&&r.length?cl(n,r,Xe(l,2)):n}function z_(n,r,l){return n&&n.length&&r&&r.length?cl(n,r,t,l):n}var G_=Si(function(n,r){var l=n==null?0:n.length,f=tl(n,r);return Yu(n,zt(r,function(x){return Ei(x,l)?+x:x}).sort(rf)),f});function H_(n,r){var l=[];if(!(n&&n.length))return l;var f=-1,x=[],b=n.length;for(r=Xe(r,3);++f<b;){var N=n[f];r(N,f,n)&&(l.push(N),x.push(f))}return Yu(n,x),l}function Cl(n){return n==null?n:Um.call(n)}function V_(n,r,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&gn(n,r,l)?(r=0,l=f):(r=r==null?0:ct(r),l=l===t?f:ct(l)),qn(n,r,l)):[]}function W_(n,r){return Pa(n,r)}function k_(n,r,l){return hl(n,r,Xe(l,2))}function X_(n,r){var l=n==null?0:n.length;if(l){var f=Pa(n,r);if(f<l&&ti(n[f],r))return f}return-1}function q_(n,r){return Pa(n,r,!0)}function Y_(n,r,l){return hl(n,r,Xe(l,2),!0)}function K_(n,r){var l=n==null?0:n.length;if(l){var f=Pa(n,r,!0)-1;if(ti(n[f],r))return f}return-1}function $_(n){return n&&n.length?$u(n):[]}function Z_(n,r){return n&&n.length?$u(n,Xe(r,2)):[]}function j_(n){var r=n==null?0:n.length;return r?qn(n,1,r):[]}function J_(n,r,l){return n&&n.length?(r=l||r===t?1:ct(r),qn(n,0,r<0?0:r)):[]}function Q_(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:ct(r),r=f-r,qn(n,r<0?0:r,f)):[]}function e0(n,r){return n&&n.length?La(n,Xe(r,3),!1,!0):[]}function t0(n,r){return n&&n.length?La(n,Xe(r,3)):[]}var n0=pt(function(n){return Gi(on(n,1,Xt,!0))}),i0=pt(function(n){var r=Yn(n);return Xt(r)&&(r=t),Gi(on(n,1,Xt,!0),Xe(r,2))}),r0=pt(function(n){var r=Yn(n);return r=typeof r=="function"?r:t,Gi(on(n,1,Xt,!0),t,r)});function s0(n){return n&&n.length?Gi(n):[]}function a0(n,r){return n&&n.length?Gi(n,Xe(r,2)):[]}function o0(n,r){return r=typeof r=="function"?r:t,n&&n.length?Gi(n,t,r):[]}function Pl(n){if(!(n&&n.length))return[];var r=0;return n=Ni(n,function(l){if(Xt(l))return r=Jt(l.length,r),!0}),Yo(r,function(l){return zt(n,ko(l))})}function Of(n,r){if(!(n&&n.length))return[];var l=Pl(n);return r==null?l:zt(l,function(f){return Dn(r,t,f)})}var l0=pt(function(n,r){return Xt(n)?Fs(n,r):[]}),c0=pt(function(n){return pl(Ni(n,Xt))}),u0=pt(function(n){var r=Yn(n);return Xt(r)&&(r=t),pl(Ni(n,Xt),Xe(r,2))}),f0=pt(function(n){var r=Yn(n);return r=typeof r=="function"?r:t,pl(Ni(n,Xt),t,r)}),h0=pt(Pl);function d0(n,r){return Qu(n||[],r||[],Os)}function p0(n,r){return Qu(n||[],r||[],Gs)}var m0=pt(function(n){var r=n.length,l=r>1?n[r-1]:t;return l=typeof l=="function"?(n.pop(),l):t,Of(n,l)});function Ff(n){var r=E(n);return r.__chain__=!0,r}function g0(n,r){return r(n),n}function Ga(n,r){return r(n)}var _0=Si(function(n){var r=n.length,l=r?n[0]:0,f=this.__wrapped__,x=function(b){return tl(b,n)};return r>1||this.__actions__.length||!(f instanceof xt)||!Ei(l)?this.thru(x):(f=f.slice(l,+l+(r?1:0)),f.__actions__.push({func:Ga,args:[x],thisArg:t}),new kn(f,this.__chain__).thru(function(b){return r&&!b.length&&b.push(t),b}))});function v0(){return Ff(this)}function x0(){return new kn(this.value(),this.__chain__)}function M0(){this.__values__===t&&(this.__values__=jf(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function S0(){return this}function E0(n){for(var r,l=this;l instanceof Aa;){var f=Pf(l);f.__index__=0,f.__values__=t,r?x.__wrapped__=f:r=f;var x=f;l=l.__wrapped__}return x.__wrapped__=n,r}function y0(){var n=this.__wrapped__;if(n instanceof xt){var r=n;return this.__actions__.length&&(r=new xt(this)),r=r.reverse(),r.__actions__.push({func:Ga,args:[Cl],thisArg:t}),new kn(r,this.__chain__)}return this.thru(Cl)}function T0(){return Ju(this.__wrapped__,this.__actions__)}var A0=Da(function(n,r,l){wt.call(n,l)?++n[l]:xi(n,l,1)});function b0(n,r,l){var f=ot(n)?fu:gg;return l&&gn(n,r,l)&&(r=t),f(n,Xe(r,3))}function w0(n,r){var l=ot(n)?Ni:Nu;return l(n,Xe(r,3))}var R0=uf(Lf),C0=uf(Df);function P0(n,r){return on(Ha(n,r),1)}function L0(n,r){return on(Ha(n,r),ae)}function D0(n,r,l){return l=l===t?1:ct(l),on(Ha(n,r),l)}function Bf(n,r){var l=ot(n)?Vn:zi;return l(n,Xe(r,3))}function zf(n,r){var l=ot(n)?jp:Uu;return l(n,Xe(r,3))}var I0=Da(function(n,r,l){wt.call(n,l)?n[l].push(r):xi(n,l,[r])});function U0(n,r,l,f){n=bn(n)?n:Yr(n),l=l&&!f?ct(l):0;var x=n.length;return l<0&&(l=Jt(x+l,0)),qa(n)?l<=x&&n.indexOf(r,l)>-1:!!x&&Nr(n,r,l)>-1}var N0=pt(function(n,r,l){var f=-1,x=typeof r=="function",b=bn(n)?Q(n.length):[];return zi(n,function(N){b[++f]=x?Dn(r,N,l):Bs(N,r,l)}),b}),O0=Da(function(n,r,l){xi(n,l,r)});function Ha(n,r){var l=ot(n)?zt:Hu;return l(n,Xe(r,3))}function F0(n,r,l,f){return n==null?[]:(ot(r)||(r=r==null?[]:[r]),l=f?t:l,ot(l)||(l=l==null?[]:[l]),Xu(n,r,l))}var B0=Da(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function z0(n,r,l){var f=ot(n)?Vo:mu,x=arguments.length<3;return f(n,Xe(r,4),l,x,zi)}function G0(n,r,l){var f=ot(n)?Jp:mu,x=arguments.length<3;return f(n,Xe(r,4),l,x,Uu)}function H0(n,r){var l=ot(n)?Ni:Nu;return l(n,ka(Xe(r,3)))}function V0(n){var r=ot(n)?Pu:Ug;return r(n)}function W0(n,r,l){(l?gn(n,r,l):r===t)?r=1:r=ct(r);var f=ot(n)?fg:Ng;return f(n,r)}function k0(n){var r=ot(n)?hg:Fg;return r(n)}function X0(n){if(n==null)return 0;if(bn(n))return qa(n)?Fr(n):n.length;var r=fn(n);return r==De||r==K?n.size:ol(n).length}function q0(n,r,l){var f=ot(n)?Wo:Bg;return l&&gn(n,r,l)&&(r=t),f(n,Xe(r,3))}var Y0=pt(function(n,r){if(n==null)return[];var l=r.length;return l>1&&gn(n,r[0],r[1])?r=[]:l>2&&gn(r[0],r[1],r[2])&&(r=[r[0]]),Xu(n,on(r,1),[])}),Va=wm||function(){return an.Date.now()};function K0(n,r){if(typeof r!="function")throw new Wn(u);return n=ct(n),function(){if(--n<1)return r.apply(this,arguments)}}function Gf(n,r,l){return r=l?t:r,r=n&&r==null?n.length:r,Mi(n,A,t,t,t,t,r)}function Hf(n,r){var l;if(typeof r!="function")throw new Wn(u);return n=ct(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=t),l}}var Ll=pt(function(n,r,l){var f=m;if(l.length){var x=Fi(l,Xr(Ll));f|=V}return Mi(n,f,r,l,x)}),Vf=pt(function(n,r,l){var f=m|g;if(l.length){var x=Fi(l,Xr(Vf));f|=V}return Mi(r,f,n,l,x)});function Wf(n,r,l){r=l?t:r;var f=Mi(n,R,t,t,t,t,t,r);return f.placeholder=Wf.placeholder,f}function kf(n,r,l){r=l?t:r;var f=Mi(n,I,t,t,t,t,t,r);return f.placeholder=kf.placeholder,f}function Xf(n,r,l){var f,x,b,N,B,k,oe=0,le=!1,fe=!1,Ae=!0;if(typeof n!="function")throw new Wn(u);r=Kn(r)||0,Ht(l)&&(le=!!l.leading,fe="maxWait"in l,b=fe?Jt(Kn(l.maxWait)||0,r):b,Ae="trailing"in l?!!l.trailing:Ae);function Oe(qt){var ni=f,Ai=x;return f=x=t,oe=qt,N=n.apply(Ai,ni),N}function Ke(qt){return oe=qt,B=Ws(_t,r),le?Oe(qt):N}function ft(qt){var ni=qt-k,Ai=qt-oe,uh=r-ni;return fe?un(uh,b-Ai):uh}function $e(qt){var ni=qt-k,Ai=qt-oe;return k===t||ni>=r||ni<0||fe&&Ai>=b}function _t(){var qt=Va();if($e(qt))return Et(qt);B=Ws(_t,ft(qt))}function Et(qt){return B=t,Ae&&f?Oe(qt):(f=x=t,N)}function On(){B!==t&&ef(B),oe=0,f=k=x=B=t}function _n(){return B===t?N:Et(Va())}function Fn(){var qt=Va(),ni=$e(qt);if(f=arguments,x=this,k=qt,ni){if(B===t)return Ke(k);if(fe)return ef(B),B=Ws(_t,r),Oe(k)}return B===t&&(B=Ws(_t,r)),N}return Fn.cancel=On,Fn.flush=_n,Fn}var $0=pt(function(n,r){return Iu(n,1,r)}),Z0=pt(function(n,r,l){return Iu(n,Kn(r)||0,l)});function j0(n){return Mi(n,X)}function Wa(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Wn(u);var l=function(){var f=arguments,x=r?r.apply(this,f):f[0],b=l.cache;if(b.has(x))return b.get(x);var N=n.apply(this,f);return l.cache=b.set(x,N)||b,N};return l.cache=new(Wa.Cache||vi),l}Wa.Cache=vi;function ka(n){if(typeof n!="function")throw new Wn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function J0(n){return Hf(2,n)}var Q0=zg(function(n,r){r=r.length==1&&ot(r[0])?zt(r[0],In(Xe())):zt(on(r,1),In(Xe()));var l=r.length;return pt(function(f){for(var x=-1,b=un(f.length,l);++x<b;)f[x]=r[x].call(this,f[x]);return Dn(n,this,f)})}),Dl=pt(function(n,r){var l=Fi(r,Xr(Dl));return Mi(n,V,t,r,l)}),qf=pt(function(n,r){var l=Fi(r,Xr(qf));return Mi(n,F,t,r,l)}),ev=Si(function(n,r){return Mi(n,z,t,t,t,r)});function tv(n,r){if(typeof n!="function")throw new Wn(u);return r=r===t?r:ct(r),pt(n,r)}function nv(n,r){if(typeof n!="function")throw new Wn(u);return r=r==null?0:Jt(ct(r),0),pt(function(l){var f=l[r],x=Vi(l,0,r);return f&&Oi(x,f),Dn(n,this,x)})}function iv(n,r,l){var f=!0,x=!0;if(typeof n!="function")throw new Wn(u);return Ht(l)&&(f="leading"in l?!!l.leading:f,x="trailing"in l?!!l.trailing:x),Xf(n,r,{leading:f,maxWait:r,trailing:x})}function rv(n){return Gf(n,1)}function sv(n,r){return Dl(gl(r),n)}function av(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function ov(n){return Xn(n,M)}function lv(n,r){return r=typeof r=="function"?r:t,Xn(n,M,r)}function cv(n){return Xn(n,_|M)}function uv(n,r){return r=typeof r=="function"?r:t,Xn(n,_|M,r)}function fv(n,r){return r==null||Du(n,r,tn(r))}function ti(n,r){return n===r||n!==n&&r!==r}var hv=Oa(rl),dv=Oa(function(n,r){return n>=r}),dr=Bu(function(){return arguments}())?Bu:function(n){return Wt(n)&&wt.call(n,"callee")&&!Tu.call(n,"callee")},ot=Q.isArray,pv=su?In(su):Eg;function bn(n){return n!=null&&Xa(n.length)&&!yi(n)}function Xt(n){return Wt(n)&&bn(n)}function mv(n){return n===!0||n===!1||Wt(n)&&mn(n)==Ge}var Wi=Cm||Wl,gv=au?In(au):yg;function _v(n){return Wt(n)&&n.nodeType===1&&!ks(n)}function vv(n){if(n==null)return!0;if(bn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||Wi(n)||qr(n)||dr(n)))return!n.length;var r=fn(n);if(r==De||r==K)return!n.size;if(Vs(n))return!ol(n).length;for(var l in n)if(wt.call(n,l))return!1;return!0}function xv(n,r){return zs(n,r)}function Mv(n,r,l){l=typeof l=="function"?l:t;var f=l?l(n,r):t;return f===t?zs(n,r,t,l):!!f}function Il(n){if(!Wt(n))return!1;var r=mn(n);return r==je||r==vt||typeof n.message=="string"&&typeof n.name=="string"&&!ks(n)}function Sv(n){return typeof n=="number"&&bu(n)}function yi(n){if(!Ht(n))return!1;var r=mn(n);return r==q||r==Vt||r==We||r==L}function Yf(n){return typeof n=="number"&&n==ct(n)}function Xa(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=re}function Ht(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Wt(n){return n!=null&&typeof n=="object"}var Kf=ou?In(ou):Ag;function Ev(n,r){return n===r||al(n,r,yl(r))}function yv(n,r,l){return l=typeof l=="function"?l:t,al(n,r,yl(r),l)}function Tv(n){return $f(n)&&n!=+n}function Av(n){if(l_(n))throw new rt(o);return zu(n)}function bv(n){return n===null}function wv(n){return n==null}function $f(n){return typeof n=="number"||Wt(n)&&mn(n)==ke}function ks(n){if(!Wt(n)||mn(n)!=Mt)return!1;var r=va(n);if(r===null)return!0;var l=wt.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&pa.call(l)==ym}var Ul=lu?In(lu):bg;function Rv(n){return Yf(n)&&n>=-re&&n<=re}var Zf=cu?In(cu):wg;function qa(n){return typeof n=="string"||!ot(n)&&Wt(n)&&mn(n)==_e}function Nn(n){return typeof n=="symbol"||Wt(n)&&mn(n)==he}var qr=uu?In(uu):Rg;function Cv(n){return n===t}function Pv(n){return Wt(n)&&fn(n)==Ie}function Lv(n){return Wt(n)&&mn(n)==ye}var Dv=Oa(ll),Iv=Oa(function(n,r){return n<=r});function jf(n){if(!n)return[];if(bn(n))return qa(n)?Qn(n):An(n);if(Ls&&n[Ls])return fm(n[Ls]());var r=fn(n),l=r==De?$o:r==K?fa:Yr;return l(n)}function Ti(n){if(!n)return n===0?n:0;if(n=Kn(n),n===ae||n===-ae){var r=n<0?-1:1;return r*ce}return n===n?n:0}function ct(n){var r=Ti(n),l=r%1;return r===r?l?r-l:r:0}function Jf(n){return n?cr(ct(n),0,me):0}function Kn(n){if(typeof n=="number")return n;if(Nn(n))return ue;if(Ht(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ht(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=gu(n);var l=Y.test(n);return l||te.test(n)?Kp(n.slice(2),l?2:8):C.test(n)?ue:+n}function Qf(n){return ui(n,wn(n))}function Uv(n){return n?cr(ct(n),-re,re):n===0?n:0}function Rt(n){return n==null?"":Un(n)}var Nv=Wr(function(n,r){if(Vs(r)||bn(r)){ui(r,tn(r),n);return}for(var l in r)wt.call(r,l)&&Os(n,l,r[l])}),eh=Wr(function(n,r){ui(r,wn(r),n)}),Ya=Wr(function(n,r,l,f){ui(r,wn(r),n,f)}),Ov=Wr(function(n,r,l,f){ui(r,tn(r),n,f)}),Fv=Si(tl);function Bv(n,r){var l=Vr(n);return r==null?l:Lu(l,r)}var zv=pt(function(n,r){n=Lt(n);var l=-1,f=r.length,x=f>2?r[2]:t;for(x&&gn(r[0],r[1],x)&&(f=1);++l<f;)for(var b=r[l],N=wn(b),B=-1,k=N.length;++B<k;){var oe=N[B],le=n[oe];(le===t||ti(le,zr[oe])&&!wt.call(n,oe))&&(n[oe]=b[oe])}return n}),Gv=pt(function(n){return n.push(t,_f),Dn(th,t,n)});function Hv(n,r){return hu(n,Xe(r,3),ci)}function Vv(n,r){return hu(n,Xe(r,3),il)}function Wv(n,r){return n==null?n:nl(n,Xe(r,3),wn)}function kv(n,r){return n==null?n:Ou(n,Xe(r,3),wn)}function Xv(n,r){return n&&ci(n,Xe(r,3))}function qv(n,r){return n&&il(n,Xe(r,3))}function Yv(n){return n==null?[]:Ra(n,tn(n))}function Kv(n){return n==null?[]:Ra(n,wn(n))}function Nl(n,r,l){var f=n==null?t:ur(n,r);return f===t?l:f}function $v(n,r){return n!=null&&Mf(n,r,vg)}function Ol(n,r){return n!=null&&Mf(n,r,xg)}var Zv=hf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),n[r]=l},Bl(Rn)),jv=hf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=ma.call(r)),wt.call(n,r)?n[r].push(l):n[r]=[l]},Xe),Jv=pt(Bs);function tn(n){return bn(n)?Cu(n):ol(n)}function wn(n){return bn(n)?Cu(n,!0):Cg(n)}function Qv(n,r){var l={};return r=Xe(r,3),ci(n,function(f,x,b){xi(l,r(f,x,b),f)}),l}function ex(n,r){var l={};return r=Xe(r,3),ci(n,function(f,x,b){xi(l,x,r(f,x,b))}),l}var tx=Wr(function(n,r,l){Ca(n,r,l)}),th=Wr(function(n,r,l,f){Ca(n,r,l,f)}),nx=Si(function(n,r){var l={};if(n==null)return l;var f=!1;r=zt(r,function(b){return b=Hi(b,n),f||(f=b.length>1),b}),ui(n,Sl(n),l),f&&(l=Xn(l,_|v|M,Zg));for(var x=r.length;x--;)dl(l,r[x]);return l});function ix(n,r){return nh(n,ka(Xe(r)))}var rx=Si(function(n,r){return n==null?{}:Lg(n,r)});function nh(n,r){if(n==null)return{};var l=zt(Sl(n),function(f){return[f]});return r=Xe(r),qu(n,l,function(f,x){return r(f,x[0])})}function sx(n,r,l){r=Hi(r,n);var f=-1,x=r.length;for(x||(x=1,n=t);++f<x;){var b=n==null?t:n[fi(r[f])];b===t&&(f=x,b=l),n=yi(b)?b.call(n):b}return n}function ax(n,r,l){return n==null?n:Gs(n,r,l)}function ox(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:Gs(n,r,l,f)}var ih=mf(tn),rh=mf(wn);function lx(n,r,l){var f=ot(n),x=f||Wi(n)||qr(n);if(r=Xe(r,4),l==null){var b=n&&n.constructor;x?l=f?new b:[]:Ht(n)?l=yi(b)?Vr(va(n)):{}:l={}}return(x?Vn:ci)(n,function(N,B,k){return r(l,N,B,k)}),l}function cx(n,r){return n==null?!0:dl(n,r)}function ux(n,r,l){return n==null?n:ju(n,r,gl(l))}function fx(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:ju(n,r,gl(l),f)}function Yr(n){return n==null?[]:Ko(n,tn(n))}function hx(n){return n==null?[]:Ko(n,wn(n))}function dx(n,r,l){return l===t&&(l=r,r=t),l!==t&&(l=Kn(l),l=l===l?l:0),r!==t&&(r=Kn(r),r=r===r?r:0),cr(Kn(n),r,l)}function px(n,r,l){return r=Ti(r),l===t?(l=r,r=0):l=Ti(l),n=Kn(n),Mg(n,r,l)}function mx(n,r,l){if(l&&typeof l!="boolean"&&gn(n,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Ti(n),r===t?(r=n,n=0):r=Ti(r)),n>r){var f=n;n=r,r=f}if(l||n%1||r%1){var x=wu();return un(n+x*(r-n+Yp("1e-"+((x+"").length-1))),r)}return ul(n,r)}var gx=kr(function(n,r,l){return r=r.toLowerCase(),n+(l?sh(r):r)});function sh(n){return Fl(Rt(n).toLowerCase())}function ah(n){return n=Rt(n),n&&n.replace(Ce,am).replace(Fp,"")}function _x(n,r,l){n=Rt(n),r=Un(r);var f=n.length;l=l===t?f:cr(ct(l),0,f);var x=l;return l-=r.length,l>=0&&n.slice(l,x)==r}function vx(n){return n=Rt(n),n&&Ue.test(n)?n.replace(xe,om):n}function xx(n){return n=Rt(n),n&&sn.test(n)?n.replace(It,"\\$&"):n}var Mx=kr(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),Sx=kr(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),Ex=cf("toLowerCase");function yx(n,r,l){n=Rt(n),r=ct(r);var f=r?Fr(n):0;if(!r||f>=r)return n;var x=(r-f)/2;return Na(Ea(x),l)+n+Na(Sa(x),l)}function Tx(n,r,l){n=Rt(n),r=ct(r);var f=r?Fr(n):0;return r&&f<r?n+Na(r-f,l):n}function Ax(n,r,l){n=Rt(n),r=ct(r);var f=r?Fr(n):0;return r&&f<r?Na(r-f,l)+n:n}function bx(n,r,l){return l||r==null?r=0:r&&(r=+r),Im(Rt(n).replace(Rr,""),r||0)}function wx(n,r,l){return(l?gn(n,r,l):r===t)?r=1:r=ct(r),fl(Rt(n),r)}function Rx(){var n=arguments,r=Rt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Cx=kr(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function Px(n,r,l){return l&&typeof l!="number"&&gn(n,r,l)&&(r=l=t),l=l===t?me:l>>>0,l?(n=Rt(n),n&&(typeof r=="string"||r!=null&&!Ul(r))&&(r=Un(r),!r&&Or(n))?Vi(Qn(n),0,l):n.split(r,l)):[]}var Lx=kr(function(n,r,l){return n+(l?" ":"")+Fl(r)});function Dx(n,r,l){return n=Rt(n),l=l==null?0:cr(ct(l),0,n.length),r=Un(r),n.slice(l,l+r.length)==r}function Ix(n,r,l){var f=E.templateSettings;l&&gn(n,r,l)&&(r=t),n=Rt(n),r=Ya({},r,f,gf);var x=Ya({},r.imports,f.imports,gf),b=tn(x),N=Ko(x,b),B,k,oe=0,le=r.interpolate||Ne,fe="__p += '",Ae=Zo((r.escape||Ne).source+"|"+le.source+"|"+(le===dt?No:Ne).source+"|"+(r.evaluate||Ne).source+"|$","g"),Oe="//# sourceURL="+(wt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Vp+"]")+`
`;n.replace(Ae,function($e,_t,Et,On,_n,Fn){return Et||(Et=On),fe+=n.slice(oe,Fn).replace(qe,lm),_t&&(B=!0,fe+=`' +
__e(`+_t+`) +
'`),_n&&(k=!0,fe+=`';
`+_n+`;
__p += '`),Et&&(fe+=`' +
((__t = (`+Et+`)) == null ? '' : __t) +
'`),oe=Fn+$e.length,$e}),fe+=`';
`;var Ke=wt.call(r,"variable")&&r.variable;if(!Ke)fe=`with (obj) {
`+fe+`
}
`;else if(aa.test(Ke))throw new rt(c);fe=(k?fe.replace(Me,""):fe).replace(Te,"$1").replace(He,"$1;"),fe="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(k?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ft=lh(function(){return bt(b,Oe+"return "+fe).apply(t,N)});if(ft.source=fe,Il(ft))throw ft;return ft}function Ux(n){return Rt(n).toLowerCase()}function Nx(n){return Rt(n).toUpperCase()}function Ox(n,r,l){if(n=Rt(n),n&&(l||r===t))return gu(n);if(!n||!(r=Un(r)))return n;var f=Qn(n),x=Qn(r),b=_u(f,x),N=vu(f,x)+1;return Vi(f,b,N).join("")}function Fx(n,r,l){if(n=Rt(n),n&&(l||r===t))return n.slice(0,Mu(n)+1);if(!n||!(r=Un(r)))return n;var f=Qn(n),x=vu(f,Qn(r))+1;return Vi(f,0,x).join("")}function Bx(n,r,l){if(n=Rt(n),n&&(l||r===t))return n.replace(Rr,"");if(!n||!(r=Un(r)))return n;var f=Qn(n),x=_u(f,Qn(r));return Vi(f,x).join("")}function zx(n,r){var l=S,f=P;if(Ht(r)){var x="separator"in r?r.separator:x;l="length"in r?ct(r.length):l,f="omission"in r?Un(r.omission):f}n=Rt(n);var b=n.length;if(Or(n)){var N=Qn(n);b=N.length}if(l>=b)return n;var B=l-Fr(f);if(B<1)return f;var k=N?Vi(N,0,B).join(""):n.slice(0,B);if(x===t)return k+f;if(N&&(B+=k.length-B),Ul(x)){if(n.slice(B).search(x)){var oe,le=k;for(x.global||(x=Zo(x.source,Rt(oa.exec(x))+"g")),x.lastIndex=0;oe=x.exec(le);)var fe=oe.index;k=k.slice(0,fe===t?B:fe)}}else if(n.indexOf(Un(x),B)!=B){var Ae=k.lastIndexOf(x);Ae>-1&&(k=k.slice(0,Ae))}return k+f}function Gx(n){return n=Rt(n),n&&ge.test(n)?n.replace(D,mm):n}var Hx=kr(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),Fl=cf("toUpperCase");function oh(n,r,l){return n=Rt(n),r=l?t:r,r===t?um(n)?vm(n):tm(n):n.match(r)||[]}var lh=pt(function(n,r){try{return Dn(n,t,r)}catch(l){return Il(l)?l:new rt(l)}}),Vx=Si(function(n,r){return Vn(r,function(l){l=fi(l),xi(n,l,Ll(n[l],n))}),n});function Wx(n){var r=n==null?0:n.length,l=Xe();return n=r?zt(n,function(f){if(typeof f[1]!="function")throw new Wn(u);return[l(f[0]),f[1]]}):[],pt(function(f){for(var x=-1;++x<r;){var b=n[x];if(Dn(b[0],this,f))return Dn(b[1],this,f)}})}function kx(n){return mg(Xn(n,_))}function Bl(n){return function(){return n}}function Xx(n,r){return n==null||n!==n?r:n}var qx=ff(),Yx=ff(!0);function Rn(n){return n}function zl(n){return Gu(typeof n=="function"?n:Xn(n,_))}function Kx(n){return Vu(Xn(n,_))}function $x(n,r){return Wu(n,Xn(r,_))}var Zx=pt(function(n,r){return function(l){return Bs(l,n,r)}}),jx=pt(function(n,r){return function(l){return Bs(n,l,r)}});function Gl(n,r,l){var f=tn(r),x=Ra(r,f);l==null&&!(Ht(r)&&(x.length||!f.length))&&(l=r,r=n,n=this,x=Ra(r,tn(r)));var b=!(Ht(l)&&"chain"in l)||!!l.chain,N=yi(n);return Vn(x,function(B){var k=r[B];n[B]=k,N&&(n.prototype[B]=function(){var oe=this.__chain__;if(b||oe){var le=n(this.__wrapped__),fe=le.__actions__=An(this.__actions__);return fe.push({func:k,args:arguments,thisArg:n}),le.__chain__=oe,le}return k.apply(n,Oi([this.value()],arguments))})}),n}function Jx(){return an._===this&&(an._=Tm),this}function Hl(){}function Qx(n){return n=ct(n),pt(function(r){return ku(r,n)})}var eM=vl(zt),tM=vl(fu),nM=vl(Wo);function ch(n){return Al(n)?ko(fi(n)):Dg(n)}function iM(n){return function(r){return n==null?t:ur(n,r)}}var rM=df(),sM=df(!0);function Vl(){return[]}function Wl(){return!1}function aM(){return{}}function oM(){return""}function lM(){return!0}function cM(n,r){if(n=ct(n),n<1||n>re)return[];var l=me,f=un(n,me);r=Xe(r),n-=me;for(var x=Yo(f,r);++l<n;)r(l);return x}function uM(n){return ot(n)?zt(n,fi):Nn(n)?[n]:An(Cf(Rt(n)))}function fM(n){var r=++Em;return Rt(n)+r}var hM=Ua(function(n,r){return n+r},0),dM=xl("ceil"),pM=Ua(function(n,r){return n/r},1),mM=xl("floor");function gM(n){return n&&n.length?wa(n,Rn,rl):t}function _M(n,r){return n&&n.length?wa(n,Xe(r,2),rl):t}function vM(n){return pu(n,Rn)}function xM(n,r){return pu(n,Xe(r,2))}function MM(n){return n&&n.length?wa(n,Rn,ll):t}function SM(n,r){return n&&n.length?wa(n,Xe(r,2),ll):t}var EM=Ua(function(n,r){return n*r},1),yM=xl("round"),TM=Ua(function(n,r){return n-r},0);function AM(n){return n&&n.length?qo(n,Rn):0}function bM(n,r){return n&&n.length?qo(n,Xe(r,2)):0}return E.after=K0,E.ary=Gf,E.assign=Nv,E.assignIn=eh,E.assignInWith=Ya,E.assignWith=Ov,E.at=Fv,E.before=Hf,E.bind=Ll,E.bindAll=Vx,E.bindKey=Vf,E.castArray=av,E.chain=Ff,E.chunk=m_,E.compact=g_,E.concat=__,E.cond=Wx,E.conforms=kx,E.constant=Bl,E.countBy=A0,E.create=Bv,E.curry=Wf,E.curryRight=kf,E.debounce=Xf,E.defaults=zv,E.defaultsDeep=Gv,E.defer=$0,E.delay=Z0,E.difference=v_,E.differenceBy=x_,E.differenceWith=M_,E.drop=S_,E.dropRight=E_,E.dropRightWhile=y_,E.dropWhile=T_,E.fill=A_,E.filter=w0,E.flatMap=P0,E.flatMapDeep=L0,E.flatMapDepth=D0,E.flatten=If,E.flattenDeep=b_,E.flattenDepth=w_,E.flip=j0,E.flow=qx,E.flowRight=Yx,E.fromPairs=R_,E.functions=Yv,E.functionsIn=Kv,E.groupBy=I0,E.initial=P_,E.intersection=L_,E.intersectionBy=D_,E.intersectionWith=I_,E.invert=Zv,E.invertBy=jv,E.invokeMap=N0,E.iteratee=zl,E.keyBy=O0,E.keys=tn,E.keysIn=wn,E.map=Ha,E.mapKeys=Qv,E.mapValues=ex,E.matches=Kx,E.matchesProperty=$x,E.memoize=Wa,E.merge=tx,E.mergeWith=th,E.method=Zx,E.methodOf=jx,E.mixin=Gl,E.negate=ka,E.nthArg=Qx,E.omit=nx,E.omitBy=ix,E.once=J0,E.orderBy=F0,E.over=eM,E.overArgs=Q0,E.overEvery=tM,E.overSome=nM,E.partial=Dl,E.partialRight=qf,E.partition=B0,E.pick=rx,E.pickBy=nh,E.property=ch,E.propertyOf=iM,E.pull=F_,E.pullAll=Nf,E.pullAllBy=B_,E.pullAllWith=z_,E.pullAt=G_,E.range=rM,E.rangeRight=sM,E.rearg=ev,E.reject=H0,E.remove=H_,E.rest=tv,E.reverse=Cl,E.sampleSize=W0,E.set=ax,E.setWith=ox,E.shuffle=k0,E.slice=V_,E.sortBy=Y0,E.sortedUniq=$_,E.sortedUniqBy=Z_,E.split=Px,E.spread=nv,E.tail=j_,E.take=J_,E.takeRight=Q_,E.takeRightWhile=e0,E.takeWhile=t0,E.tap=g0,E.throttle=iv,E.thru=Ga,E.toArray=jf,E.toPairs=ih,E.toPairsIn=rh,E.toPath=uM,E.toPlainObject=Qf,E.transform=lx,E.unary=rv,E.union=n0,E.unionBy=i0,E.unionWith=r0,E.uniq=s0,E.uniqBy=a0,E.uniqWith=o0,E.unset=cx,E.unzip=Pl,E.unzipWith=Of,E.update=ux,E.updateWith=fx,E.values=Yr,E.valuesIn=hx,E.without=l0,E.words=oh,E.wrap=sv,E.xor=c0,E.xorBy=u0,E.xorWith=f0,E.zip=h0,E.zipObject=d0,E.zipObjectDeep=p0,E.zipWith=m0,E.entries=ih,E.entriesIn=rh,E.extend=eh,E.extendWith=Ya,Gl(E,E),E.add=hM,E.attempt=lh,E.camelCase=gx,E.capitalize=sh,E.ceil=dM,E.clamp=dx,E.clone=ov,E.cloneDeep=cv,E.cloneDeepWith=uv,E.cloneWith=lv,E.conformsTo=fv,E.deburr=ah,E.defaultTo=Xx,E.divide=pM,E.endsWith=_x,E.eq=ti,E.escape=vx,E.escapeRegExp=xx,E.every=b0,E.find=R0,E.findIndex=Lf,E.findKey=Hv,E.findLast=C0,E.findLastIndex=Df,E.findLastKey=Vv,E.floor=mM,E.forEach=Bf,E.forEachRight=zf,E.forIn=Wv,E.forInRight=kv,E.forOwn=Xv,E.forOwnRight=qv,E.get=Nl,E.gt=hv,E.gte=dv,E.has=$v,E.hasIn=Ol,E.head=Uf,E.identity=Rn,E.includes=U0,E.indexOf=C_,E.inRange=px,E.invoke=Jv,E.isArguments=dr,E.isArray=ot,E.isArrayBuffer=pv,E.isArrayLike=bn,E.isArrayLikeObject=Xt,E.isBoolean=mv,E.isBuffer=Wi,E.isDate=gv,E.isElement=_v,E.isEmpty=vv,E.isEqual=xv,E.isEqualWith=Mv,E.isError=Il,E.isFinite=Sv,E.isFunction=yi,E.isInteger=Yf,E.isLength=Xa,E.isMap=Kf,E.isMatch=Ev,E.isMatchWith=yv,E.isNaN=Tv,E.isNative=Av,E.isNil=wv,E.isNull=bv,E.isNumber=$f,E.isObject=Ht,E.isObjectLike=Wt,E.isPlainObject=ks,E.isRegExp=Ul,E.isSafeInteger=Rv,E.isSet=Zf,E.isString=qa,E.isSymbol=Nn,E.isTypedArray=qr,E.isUndefined=Cv,E.isWeakMap=Pv,E.isWeakSet=Lv,E.join=U_,E.kebabCase=Mx,E.last=Yn,E.lastIndexOf=N_,E.lowerCase=Sx,E.lowerFirst=Ex,E.lt=Dv,E.lte=Iv,E.max=gM,E.maxBy=_M,E.mean=vM,E.meanBy=xM,E.min=MM,E.minBy=SM,E.stubArray=Vl,E.stubFalse=Wl,E.stubObject=aM,E.stubString=oM,E.stubTrue=lM,E.multiply=EM,E.nth=O_,E.noConflict=Jx,E.noop=Hl,E.now=Va,E.pad=yx,E.padEnd=Tx,E.padStart=Ax,E.parseInt=bx,E.random=mx,E.reduce=z0,E.reduceRight=G0,E.repeat=wx,E.replace=Rx,E.result=sx,E.round=yM,E.runInContext=W,E.sample=V0,E.size=X0,E.snakeCase=Cx,E.some=q0,E.sortedIndex=W_,E.sortedIndexBy=k_,E.sortedIndexOf=X_,E.sortedLastIndex=q_,E.sortedLastIndexBy=Y_,E.sortedLastIndexOf=K_,E.startCase=Lx,E.startsWith=Dx,E.subtract=TM,E.sum=AM,E.sumBy=bM,E.template=Ix,E.times=cM,E.toFinite=Ti,E.toInteger=ct,E.toLength=Jf,E.toLower=Ux,E.toNumber=Kn,E.toSafeInteger=Uv,E.toString=Rt,E.toUpper=Nx,E.trim=Ox,E.trimEnd=Fx,E.trimStart=Bx,E.truncate=zx,E.unescape=Gx,E.uniqueId=fM,E.upperCase=Hx,E.upperFirst=Fl,E.each=Bf,E.eachRight=zf,E.first=Uf,Gl(E,function(){var n={};return ci(E,function(r,l){wt.call(E.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),E.VERSION=i,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Vn(["drop","take"],function(n,r){xt.prototype[n]=function(l){l=l===t?1:Jt(ct(l),0);var f=this.__filtered__&&!r?new xt(this):this.clone();return f.__filtered__?f.__takeCount__=un(l,f.__takeCount__):f.__views__.push({size:un(l,me),type:n+(f.__dir__<0?"Right":"")}),f},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Vn(["filter","map","takeWhile"],function(n,r){var l=r+1,f=l==G||l==Z;xt.prototype[n]=function(x){var b=this.clone();return b.__iteratees__.push({iteratee:Xe(x,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),Vn(["head","last"],function(n,r){var l="take"+(r?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),Vn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(Rn)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=pt(function(n,r){return typeof n=="function"?new xt(this):this.map(function(l){return Bs(l,n,r)})}),xt.prototype.reject=function(n){return this.filter(ka(Xe(n)))},xt.prototype.slice=function(n,r){n=ct(n);var l=this;return l.__filtered__&&(n>0||r<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==t&&(r=ct(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(me)},ci(xt.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),x=E[f?"take"+(r=="last"?"Right":""):r],b=f||/^find/.test(r);x&&(E.prototype[r]=function(){var N=this.__wrapped__,B=f?[1]:arguments,k=N instanceof xt,oe=B[0],le=k||ot(N),fe=function(_t){var Et=x.apply(E,Oi([_t],B));return f&&Ae?Et[0]:Et};le&&l&&typeof oe=="function"&&oe.length!=1&&(k=le=!1);var Ae=this.__chain__,Oe=!!this.__actions__.length,Ke=b&&!Ae,ft=k&&!Oe;if(!b&&le){N=ft?N:new xt(this);var $e=n.apply(N,B);return $e.__actions__.push({func:Ga,args:[fe],thisArg:t}),new kn($e,Ae)}return Ke&&ft?n.apply(this,B):($e=this.thru(fe),Ke?f?$e.value()[0]:$e.value():$e)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(n){var r=ha[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var x=arguments;if(f&&!this.__chain__){var b=this.value();return r.apply(ot(b)?b:[],x)}return this[l](function(N){return r.apply(ot(N)?N:[],x)})}}),ci(xt.prototype,function(n,r){var l=E[r];if(l){var f=l.name+"";wt.call(Hr,f)||(Hr[f]=[]),Hr[f].push({name:r,func:l})}}),Hr[Ia(t,g).name]=[{name:"wrapper",func:t}],xt.prototype.clone=Gm,xt.prototype.reverse=Hm,xt.prototype.value=Vm,E.prototype.at=_0,E.prototype.chain=v0,E.prototype.commit=x0,E.prototype.next=M0,E.prototype.plant=E0,E.prototype.reverse=y0,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=T0,E.prototype.first=E.prototype.head,Ls&&(E.prototype[Ls]=S0),E},Br=xm();sr?((sr.exports=Br)._=Br,zo._=Br):an._=Br}).call(hs)})(bo,bo.exports);var hw=bo.exports;const Qi=wp(hw);function dw(s,e,t){return s.position.distanceTo(e.position)<s.radius+e.radius+t}function pw(s,e){const t=Qi.sample(s),i=new H(Qi.random(-.5,.5),Qi.random(-.5,.5),Qi.random(-.5,.5)).normalize().multiplyScalar(t.radius).addScalar(e+.1);return t.position.clone().add(i)}function mw(){let t=[];for(;t.length<10;){const a=Qi.random(20,100),o=new H(Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset),Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset),Qi.random(-gt.maxPlanetOffset,gt.maxPlanetOffset)),u={radius:a,position:o,color:Rp()};t.some(c=>dw(u,c,20))||t.push(u)}return{planets:t,initialBallPosition:pw(t,gt.ball.radius)}}class gw{constructor(){this.renderer=new Ep({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new Fb,this.cameras={aim:new ew(this.renderer.domElement),landedBallTopDown:new nw(this.renderer.domElement),staticManualOrbit:new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),autoRotatingOrbit:new rn(gt.camera.fov,innerWidth/innerHeight,gt.camera.near,gt.camera.far),distant:new tw},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new Zb(this.scene),this.clock=new qb,this.level=mw(),this.balls=[],this.stats=Qs(),this.setup={level:()=>{this.level.planets.forEach(t=>{const i=new Ap({radius:t.radius,color:t.color});i.position.set(t.position.x,t.position.y,t.position.z),this.scene.add(i)});const e=new aw;e.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(e),this.scene.add(e)},light:()=>{const e=new yp(16777215,5e7);e.position.set(0,100,5e3),this.scene.add(e)},sound:()=>{this.addListeners(()=>Oc.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new H),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new H),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>this.scene.add(new ow),orbitControls:()=>{new Tp(this.cameras.staticManualOrbit,this.renderer.domElement)},listeners:()=>{gt.simulationMode||addEventListener("keypress",e=>{if(e.key===" "){const t=this.getCurrentBall();if(t.landedPlanet){const i=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone());bp(t,i),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.onNewAnimationFrame(),gt.showFPSCounter&&document.body.appendChild(this.stats.dom)}addListeners(e,t){const i=["mousedown","keypress","touchstart"],a=()=>{e(),t&&i.forEach(o=>removeEventListener(o,a))};i.forEach(o=>addEventListener(o,a))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight)}updateCameras(){const e=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const t=2e3,i=64e-6;this.cameras.autoRotatingOrbit.position.set(Math.sin(e*i)*t,Math.abs(Math.cos(e*i)*t),Math.cos(e*i)*t),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(e){const t=this.eGetter.getPlanets();this.bounceBallsOffPlanets(t),this.gravitateBalls(e),this.balls.forEach(i=>i.tick())}bounceBallsOffPlanets(e){e.forEach(t=>{this.balls.forEach(i=>{if(lw(t,i)){const a=uw({staticSphere:t,movingSphere:i});gt.simulationMode&&console.log("## simulation","hit",i.position.toArray().map(u=>Math.floor(u)).toString());const o=Math.min(1,i.velocity.length()/5);Oc.ballHit(o),i.velocity=a,fw(i,t),i.velocity.length()<.2&&!i.landedPlanet&&this.stopBall(i,t)}})})}gravitateBalls(e){this.eGetter.getPlanets().forEach(i=>{this.balls.forEach(a=>{a.addVelocity(cw({puller:i,pulled:a,timeDelta:e}))})})}stopBall(e,t){e.landedPlanet=t,gt.simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(e),this.cameras.aim.reset(e),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(e=>this.scene.remove(e)),this.balls.forEach(e=>{this.scene.add(e.createTrace())})}onNewAnimationFrame(){const e=this.clock.getDelta();this.renderer.render(this.scene,this.activeCamera),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(e),this.updateBallTrace(),Qb.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new gw;
