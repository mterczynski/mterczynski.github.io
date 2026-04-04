(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const ih="182",Ds={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},US=0,Wd=1,NS=2,Ko=1,FS=2,pa=3,yr=0,Jt=1,hi=2,fi=0,Ls=1,tl=2,Xd=3,qd=4,OS=5,Vr=100,BS=101,zS=102,GS=103,HS=104,VS=200,kS=201,WS=202,XS=203,lu=204,cu=205,qS=206,YS=207,KS=208,ZS=209,$S=210,JS=211,jS=212,QS=213,eE=214,uu=0,hu=1,fu=2,Us=3,du=4,pu=5,mu=6,gu=7,rh=0,tE=1,nE=2,Ui=0,sh=1,ah=2,oh=3,lh=4,ch=5,uh=6,hh=7,jp=300,qr=301,Ns=302,_u=303,vu=304,cl=306,xu=1e3,ji=1001,Mu=1002,Sn=1003,iE=1004,Mo=1005,Pn=1006,Ac=1007,Wr=1008,jn=1009,Qp=1010,em=1011,xa=1012,fh=1013,Ni=1014,Li=1015,Rn=1016,dh=1017,ph=1018,Ma=1020,tm=35902,nm=35899,im=1021,rm=1022,Ti=1023,tr=1026,Xr=1027,sm=1028,mh=1029,Fs=1030,gh=1031,_h=1033,Zo=33776,$o=33777,Jo=33778,jo=33779,Su=35840,Eu=35841,yu=35842,Tu=35843,bu=36196,Au=37492,wu=37496,Cu=37488,Ru=37489,Pu=37490,Du=37491,Lu=37808,Iu=37809,Uu=37810,Nu=37811,Fu=37812,Ou=37813,Bu=37814,zu=37815,Gu=37816,Hu=37817,Vu=37818,ku=37819,Wu=37820,Xu=37821,qu=36492,Yu=36494,Ku=36495,Zu=36283,$u=36284,Ju=36285,ju=36286,rE=3200,sE=3201,am=0,aE=1,Mr="",ui="srgb",Os="srgb-linear",nl="linear",Ft="srgb",ds=7680,Yd=519,oE=512,lE=513,cE=514,vh=515,uE=516,hE=517,xh=518,fE=519,Kd=35044,Zd="300 es",Ii=2e3,il=2001;function om(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dE(){const r=Sa("canvas");return r.style.display="block",r}const $d={};function Jd(...r){const e="THREE."+r.shift();console.log(e,...r)}function Qe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ct(...r){const e="THREE."+r.shift();console.error(e,...r)}function Ea(...r){const e=r.join(" ");e in $d||($d[e]=!0,Qe(...r))}function pE(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qo=Math.PI/180,Qu=180/Math.PI;function Ta(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function mE(r,e){return(r%e+e)%e}function wc(r,e,t){return(1-t)*r+t*e}function aa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gE={DEG2RAD:Qo};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],m=i[a+3],_=o[c+0],x=o[c+1],y=o[c+2],A=o[c+3];if(u<=0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u>=1){e[t+0]=_,e[t+1]=x,e[t+2]=y,e[t+3]=A;return}if(m!==A||d!==_||h!==x||p!==y){let v=d*_+h*x+p*y+m*A;v<0&&(_=-_,x=-x,y=-y,A=-A,v=-v);let g=1-u;if(v<.9995){const L=Math.acos(v),I=Math.sin(L);g=Math.sin(g*L)/I,u=Math.sin(u*L)/I,d=d*g+_*u,h=h*g+x*u,p=p*g+y*u,m=m*g+A*u}else{d=d*g+_*u,h=h*g+x*u,p=p*g+y*u,m=m*g+A*u;const L=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=L,h*=L,p*=L,m*=L}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],m=o[c],_=o[c+1],x=o[c+2],y=o[c+3];return e[t]=u*y+p*m+d*x-h*_,e[t+1]=d*y+p*_+h*m-u*x,e[t+2]=h*y+p*x+u*_-d*m,e[t+3]=p*y-u*m-d*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),m=u(o/2),_=d(i/2),x=d(a/2),y=d(o/2);switch(c){case"XYZ":this._x=_*p*m+h*x*y,this._y=h*x*m-_*p*y,this._z=h*p*y+_*x*m,this._w=h*p*m-_*x*y;break;case"YXZ":this._x=_*p*m+h*x*y,this._y=h*x*m-_*p*y,this._z=h*p*y-_*x*m,this._w=h*p*m+_*x*y;break;case"ZXY":this._x=_*p*m-h*x*y,this._y=h*x*m+_*p*y,this._z=h*p*y+_*x*m,this._w=h*p*m-_*x*y;break;case"ZYX":this._x=_*p*m-h*x*y,this._y=h*x*m+_*p*y,this._z=h*p*y-_*x*m,this._w=h*p*m+_*x*y;break;case"YZX":this._x=_*p*m+h*x*y,this._y=h*x*m+_*p*y,this._z=h*p*y-_*x*m,this._w=h*p*m-_*x*y;break;case"XZY":this._x=_*p*m-h*x*y,this._y=h*x*m-_*p*y,this._z=h*p*y+_*x*m,this._w=h*p*m+_*x*y;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],_=i+u+m;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(i>u&&i>m){const x=2*Math.sqrt(1+i-u-m);this._w=(p-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>m){const x=2*Math.sqrt(1+u-i-m);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+m-i-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-o*d,this._y=a*p+c*d+o*u-i*h,this._z=o*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,a=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,a=-a,o=-o,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-o*a),m=2*(o*i-c*t);return this.x=t+d*h+c*m-u*p,this.y=i+d*p+u*h-o*m,this.z=a+d*m+o*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new H,jd=new Yr;class ct{constructor(e,t,i,a,o,c,u,d,h){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h)}set(e,t,i,a,o,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],m=i[7],_=i[2],x=i[5],y=i[8],A=a[0],v=a[3],g=a[6],L=a[1],I=a[4],D=a[7],F=a[2],B=a[5],R=a[8];return o[0]=c*A+u*L+d*F,o[3]=c*v+u*I+d*B,o[6]=c*g+u*D+d*R,o[1]=h*A+p*L+m*F,o[4]=h*v+p*I+m*B,o[7]=h*g+p*D+m*R,o[2]=_*A+x*L+y*F,o[5]=_*v+x*I+y*B,o[8]=_*g+x*D+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*o*p+i*u*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*c-u*h,_=u*d-p*o,x=h*o-c*d,y=t*m+i*_+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return e[0]=m*A,e[1]=(a*h-p*i)*A,e[2]=(u*i-a*c)*A,e[3]=_*A,e[4]=(p*t-a*d)*A,e[5]=(a*o-u*t)*A,e[6]=x*A,e[7]=(i*d-h*t)*A,e[8]=(c*t-i*o)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new ct,Qd=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _E(){const r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ft&&(a.r=er(a.r),a.g=er(a.g),a.b=er(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(a.r=Is(a.r),a.g=Is(a.g),a.b=Is(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?nl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Os]:{primaries:e,whitePoint:i,transfer:nl,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const yt=_E();function er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class vE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=Sa("canvas")),ps.width=e.width,ps.height=e.height;const a=ps.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=er(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xE=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Pc(a[c].image)):o.push(Pc(a[c]))}else o=Pc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Pc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let ME=0;const Dc=new H;class Dn extends Kr{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,i=ji,a=ji,o=Pn,c=Wr,u=Ti,d=jn,h=Dn.DEFAULT_ANISOTROPY,p=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ta(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xu:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xu:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=jp;Dn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,i=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],p=d[4],m=d[8],_=d[1],x=d[5],y=d[9],A=d[2],v=d[6],g=d[10];if(Math.abs(p-_)<.01&&Math.abs(m-A)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+A)<.1&&Math.abs(y+v)<.1&&Math.abs(h+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,D=(x+1)/2,F=(g+1)/2,B=(p+_)/4,R=(m+A)/4,O=(y+v)/4;return I>D&&I>F?I<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(I),a=B/i,o=R/i):D>F?D<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(D),i=B/a,o=O/a):F<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(F),i=R/o,a=O/o),this.set(i,a,o,t),this}let L=Math.sqrt((v-y)*(v-y)+(m-A)*(m-A)+(_-p)*(_-p));return Math.abs(L)<.001&&(L=1),this.x=(v-y)/L,this.y=(m-A)/L,this.z=(_-p)/L,this.w=Math.acos((h+x+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SE extends Kr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:i.depth},o=new Dn(a);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Mh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends SE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lm extends Dn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EE extends Dn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ba{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,vi):vi.fromBufferAttribute(o,c),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Eo.subVectors(this.max,oa),ms.subVectors(e.a,oa),gs.subVectors(e.b,oa),_s.subVectors(e.c,oa),fr.subVectors(gs,ms),dr.subVectors(_s,gs),Fr.subVectors(ms,_s);let t=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-Fr.z,Fr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,Fr.z,0,-Fr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-Fr.y,Fr.x,0];return!Lc(t,ms,gs,_s,Eo)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,ms,gs,_s,Eo))?!1:(yo.crossVectors(fr,dr),t=[yo.x,yo.y,yo.z],Lc(t,ms,gs,_s,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new H,new H,new H,new H,new H,new H,new H,new H],vi=new H,So=new ba,ms=new H,gs=new H,_s=new H,fr=new H,dr=new H,Fr=new H,oa=new H,Eo=new H,yo=new H,Or=new H;function Lc(r,e,t,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){Or.fromArray(r,o);const u=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),d=e.dot(Or),h=t.dot(Or),p=i.dot(Or);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const yE=new ba,la=new H,Ic=new H;class Aa{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(la,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Ic)),this.expandByPoint(la.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new H,Uc=new H,To=new H,pr=new H,Nc=new H,bo=new H,Fc=new H;class ul{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Uc.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Uc);const o=e.distanceTo(t)*.5,c=-this.direction.dot(To),u=pr.dot(this.direction),d=-pr.dot(To),h=pr.lengthSq(),p=Math.abs(1-c*c);let m,_,x,y;if(p>0)if(m=c*d-u,_=c*u-d,y=o*p,m>=0)if(_>=-y)if(_<=y){const A=1/p;m*=A,_*=A,x=m*(m+c*_+2*u)+_*(c*m+_+2*d)+h}else _=o,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;else _=-o,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;else _<=-y?(m=Math.max(0,-(-c*o+u)),_=m>0?-o:Math.min(Math.max(-o,-d),o),x=-m*m+_*(_+2*d)+h):_<=y?(m=0,_=Math.min(Math.max(-o,-d),o),x=_*(_+2*d)+h):(m=Math.max(0,-(c*o+u)),_=m>0?o:Math.min(Math.max(-o,-d),o),x=-m*m+_*(_+2*d)+h);else _=c>0?-o:o,m=Math.max(0,-(c*_+u)),x=-m*m+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Uc).addScaledVector(To,_),x}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),a=Ki.dot(Ki)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,a=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,a=(e.min.x-_.x)*h),p>=0?(o=(e.min.y-_.y)*p,c=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,c=(e.min.y-_.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),m>=0?(u=(e.min.z-_.z)*m,d=(e.max.z-_.z)*m):(u=(e.max.z-_.z)*m,d=(e.min.z-_.z)*m),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,a,o){Nc.subVectors(t,e),bo.subVectors(i,e),Fc.crossVectors(Nc,bo);let c=this.direction.dot(Fc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;pr.subVectors(this.origin,e);const d=u*this.direction.dot(bo.crossVectors(pr,bo));if(d<0)return null;const h=u*this.direction.dot(Nc.cross(pr));if(h<0||d+h>c)return null;const p=-u*pr.dot(Fc);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,a,o,c,u,d,h,p,m,_,x,y,A,v){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h,p,m,_,x,y,A,v)}set(e,t,i,a,o,c,u,d,h,p,m,_,x,y,A,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=a,g[1]=o,g[5]=c,g[9]=u,g[13]=d,g[2]=h,g[6]=p,g[10]=m,g[14]=_,g[3]=x,g[7]=y,g[11]=A,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/vs.setFromMatrixColumn(e,0).length(),o=1/vs.setFromMatrixColumn(e,1).length(),c=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const _=c*p,x=c*m,y=u*p,A=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=x+y*h,t[5]=_-A*h,t[9]=-u*d,t[2]=A-_*h,t[6]=y+x*h,t[10]=c*d}else if(e.order==="YXZ"){const _=d*p,x=d*m,y=h*p,A=h*m;t[0]=_+A*u,t[4]=y*u-x,t[8]=c*h,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=x*u-y,t[6]=A+_*u,t[10]=c*d}else if(e.order==="ZXY"){const _=d*p,x=d*m,y=h*p,A=h*m;t[0]=_-A*u,t[4]=-c*m,t[8]=y+x*u,t[1]=x+y*u,t[5]=c*p,t[9]=A-_*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const _=c*p,x=c*m,y=u*p,A=u*m;t[0]=d*p,t[4]=y*h-x,t[8]=_*h+A,t[1]=d*m,t[5]=A*h+_,t[9]=x*h-y,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const _=c*d,x=c*h,y=u*d,A=u*h;t[0]=d*p,t[4]=A-_*m,t[8]=y*m+x,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*m+y,t[10]=_-A*m}else if(e.order==="XZY"){const _=c*d,x=c*h,y=u*d,A=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=_*m+A,t[5]=c*p,t[9]=x*m-y,t[2]=y*m-x,t[6]=u*p,t[10]=A*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,bE)}lookAt(e,t,i){const a=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),mr.crossVectors(i,$n),mr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),mr.crossVectors(i,$n)),mr.normalize(),Ao.crossVectors($n,mr),a[0]=mr.x,a[4]=Ao.x,a[8]=$n.x,a[1]=mr.y,a[5]=Ao.y,a[9]=$n.y,a[2]=mr.z,a[6]=Ao.z,a[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],m=i[5],_=i[9],x=i[13],y=i[2],A=i[6],v=i[10],g=i[14],L=i[3],I=i[7],D=i[11],F=i[15],B=a[0],R=a[4],O=a[8],S=a[12],T=a[1],N=a[5],q=a[9],K=a[13],ne=a[2],ie=a[6],ee=a[10],$=a[14],oe=a[3],we=a[7],Se=a[11],Ee=a[15];return o[0]=c*B+u*T+d*ne+h*oe,o[4]=c*R+u*N+d*ie+h*we,o[8]=c*O+u*q+d*ee+h*Se,o[12]=c*S+u*K+d*$+h*Ee,o[1]=p*B+m*T+_*ne+x*oe,o[5]=p*R+m*N+_*ie+x*we,o[9]=p*O+m*q+_*ee+x*Se,o[13]=p*S+m*K+_*$+x*Ee,o[2]=y*B+A*T+v*ne+g*oe,o[6]=y*R+A*N+v*ie+g*we,o[10]=y*O+A*q+v*ee+g*Se,o[14]=y*S+A*K+v*$+g*Ee,o[3]=L*B+I*T+D*ne+F*oe,o[7]=L*R+I*N+D*ie+F*we,o[11]=L*O+I*q+D*ee+F*Se,o[15]=L*S+I*K+D*$+F*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],_=e[10],x=e[14],y=e[3],A=e[7],v=e[11],g=e[15],L=d*x-h*_,I=u*x-h*m,D=u*_-d*m,F=c*x-h*p,B=c*_-d*p,R=c*m-u*p;return t*(A*L-v*I+g*D)-i*(y*L-v*F+g*B)+a*(y*I-A*F+g*R)-o*(y*D-A*B+v*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],_=e[10],x=e[11],y=e[12],A=e[13],v=e[14],g=e[15],L=m*v*h-A*_*h+A*d*x-u*v*x-m*d*g+u*_*g,I=y*_*h-p*v*h-y*d*x+c*v*x+p*d*g-c*_*g,D=p*A*h-y*m*h+y*u*x-c*A*x-p*u*g+c*m*g,F=y*m*d-p*A*d-y*u*_+c*A*_+p*u*v-c*m*v,B=t*L+i*I+a*D+o*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/B;return e[0]=L*R,e[1]=(A*_*o-m*v*o-A*a*x+i*v*x+m*a*g-i*_*g)*R,e[2]=(u*v*o-A*d*o+A*a*h-i*v*h-u*a*g+i*d*g)*R,e[3]=(m*d*o-u*_*o-m*a*h+i*_*h+u*a*x-i*d*x)*R,e[4]=I*R,e[5]=(p*v*o-y*_*o+y*a*x-t*v*x-p*a*g+t*_*g)*R,e[6]=(y*d*o-c*v*o-y*a*h+t*v*h+c*a*g-t*d*g)*R,e[7]=(c*_*o-p*d*o+p*a*h-t*_*h-c*a*x+t*d*x)*R,e[8]=D*R,e[9]=(y*m*o-p*A*o-y*i*x+t*A*x+p*i*g-t*m*g)*R,e[10]=(c*A*o-y*u*o+y*i*h-t*A*h-c*i*g+t*u*g)*R,e[11]=(p*u*o-c*m*o-p*i*h+t*m*h+c*i*x-t*u*x)*R,e[12]=F*R,e[13]=(p*A*a-y*m*a+y*i*_-t*A*_-p*i*v+t*m*v)*R,e[14]=(y*u*a-c*A*a-y*i*d+t*A*d+c*i*v-t*u*v)*R,e[15]=(c*m*a-p*u*a+p*i*d-t*m*d-c*i*_+t*u*_)*R,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,d=e.z,h=o*c,p=o*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,h=o+o,p=c+c,m=u+u,_=o*h,x=o*p,y=o*m,A=c*p,v=c*m,g=u*m,L=d*h,I=d*p,D=d*m,F=i.x,B=i.y,R=i.z;return a[0]=(1-(A+g))*F,a[1]=(x+D)*F,a[2]=(y-I)*F,a[3]=0,a[4]=(x-D)*B,a[5]=(1-(_+g))*B,a[6]=(v+L)*B,a[7]=0,a[8]=(y+I)*R,a[9]=(v-L)*R,a[10]=(1-(_+A))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let o=vs.set(a[0],a[1],a[2]).length();const c=vs.set(a[4],a[5],a[6]).length(),u=vs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),xi.copy(this);const h=1/o,p=1/c,m=1/u;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=m,xi.elements[9]*=m,xi.elements[10]*=m,t.setFromRotationMatrix(xi),i.x=o,i.y=c,i.z=u,this}makePerspective(e,t,i,a,o,c,u=Ii,d=!1){const h=this.elements,p=2*o/(t-e),m=2*o/(i-a),_=(t+e)/(t-e),x=(i+a)/(i-a);let y,A;if(d)y=o/(c-o),A=c*o/(c-o);else if(u===Ii)y=-(c+o)/(c-o),A=-2*c*o/(c-o);else if(u===il)y=-c/(c-o),A=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=Ii,d=!1){const h=this.elements,p=2/(t-e),m=2/(i-a),_=-(t+e)/(t-e),x=-(i+a)/(i-a);let y,A;if(d)y=1/(c-o),A=c/(c-o);else if(u===Ii)y=-2/(c-o),A=-(c+o)/(c-o);else if(u===il)y=-1/(c-o),A=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=m,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=y,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new H,xi=new Wt,TE=new H(0,0,0),bE=new H(1,1,1),mr=new H,Ao=new H,$n=new H,tp=new Wt,np=new Yr;class Fi{constructor(e=0,t=0,i=0,a=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],m=a[2],_=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class cm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AE=0;const ip=new H,xs=new Yr,Zi=new Wt,wo=new H,ca=new H,wE=new H,CE=new Yr,rp=new H(1,0,0),sp=new H(0,1,0),ap=new H(0,0,1),op={type:"added"},RE={type:"removed"},Ms={type:"childadded",child:null},Oc={type:"childremoved",child:null};class En extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new H,t=new Fi,i=new Yr,a=new H(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ct}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ca,wo,this.up):Zi.lookAt(wo,ca,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),xs.setFromRotationMatrix(Zi),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RE),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];o(e.shapes,m)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(e.materials,this.material[d]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),m=c(e.shapes),_=c(e.skeletons),x=c(e.animations),y=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}En.DEFAULT_UP=new H(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new H,$i=new H,Bc=new H,Ji=new H,Ss=new H,Es=new H,lp=new H,zc=new H,Gc=new H,Hc=new H,Vc=new jt,kc=new jt,Wc=new jt;class yi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Mi.subVectors(e,t),a.cross(Mi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Mi.subVectors(a,t),$i.subVectors(i,t),Bc.subVectors(e,t);const c=Mi.dot(Mi),u=Mi.dot($i),d=Mi.dot(Bc),h=$i.dot($i),p=$i.dot(Bc),m=c*h-u*u;if(m===0)return o.set(0,0,0),null;const _=1/m,x=(h*d-u*p)*_,y=(c*p-u*d)*_;return o.set(1-x-y,y,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,a,o,c,u,d){return this.getBarycoord(e,t,i,a,Ji)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Ji.x),d.addScaledVector(c,Ji.y),d.addScaledVector(u,Ji.z),d)}static getInterpolatedAttribute(e,t,i,a,o,c){return Vc.setScalar(0),kc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,i),Wc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Vc,o.x),c.addScaledVector(kc,o.y),c.addScaledVector(Wc,o.z),c}static isFrontFacing(e,t,i,a){return Mi.subVectors(i,t),$i.subVectors(e,t),Mi.cross($i).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Mi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return yi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;Ss.subVectors(a,i),Es.subVectors(o,i),zc.subVectors(e,i);const d=Ss.dot(zc),h=Es.dot(zc);if(d<=0&&h<=0)return t.copy(i);Gc.subVectors(e,a);const p=Ss.dot(Gc),m=Es.dot(Gc);if(p>=0&&m<=p)return t.copy(a);const _=d*m-p*h;if(_<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Ss,c);Hc.subVectors(e,o);const x=Ss.dot(Hc),y=Es.dot(Hc);if(y>=0&&x<=y)return t.copy(o);const A=x*h-d*y;if(A<=0&&h>=0&&y<=0)return u=h/(h-y),t.copy(i).addScaledVector(Es,u);const v=p*y-x*m;if(v<=0&&m-p>=0&&x-y>=0)return lp.subVectors(o,a),u=(m-p)/(m-p+(x-y)),t.copy(a).addScaledVector(lp,u);const g=1/(v+A+_);return c=A*g,u=_*g,t.copy(i).addScaledVector(Ss,c).addScaledVector(Es,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Xc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=yt.workingColorSpace){if(e=mE(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Xc(c,o,e+1/3),this.g=Xc(c,o,e),this.b=Xc(c,o,e-1/3)}return yt.colorSpaceToWorking(this,a),this}setStyle(e,t=ui){function i(o){o!==void 0&&parseFloat(o)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const i=um[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return yt.workingToColorSpace(Cn.copy(this),e),Math.round(_t(Cn.r*255,0,255))*65536+Math.round(_t(Cn.g*255,0,255))*256+Math.round(_t(Cn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,a=Cn.g,o=Cn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const m=c-u;switch(h=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(a-o)/m+(a<o?6:0);break;case a:d=(o-i)/m+2;break;case o:d=(i-a)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ui){yt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,i=Cn.g,a=Cn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Co);const i=wc(gr.h,Co.h,t),a=wc(gr.s,Co.s,t),o=wc(gr.l,Co.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new tt;tt.NAMES=um;let PE=0;class Zr extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ta(),this.name="",this.type="Material",this.blending=Ls,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lu&&(i.blendSrc=this.blendSrc),this.blendDst!==cu&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kn extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new H,Ro=new Xe;let DE=0;class Qn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),a=Hn(a,this.array),o=Hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kd&&(e.usage=this.usage),e}}class hm extends Qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fm extends Qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends Qn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let LE=0;const ci=new Wt,qc=new En,ys=new H,Jn=new ba,ua=new ba,dn=new H;class yn extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?fm:hm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new on(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Jn.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];ua.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(Jn.min,ua.min),Jn.expandByPoint(dn),dn.addVectors(Jn.max,ua.max),Jn.expandByPoint(dn)):(Jn.expandByPoint(ua.min),Jn.expandByPoint(ua.max))}Jn.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)dn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(dn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)dn.fromBufferAttribute(u,h),d&&(ys.fromBufferAttribute(e,h),dn.add(ys)),a=Math.max(a,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let O=0;O<i.count;O++)u[O]=new H,d[O]=new H;const h=new H,p=new H,m=new H,_=new Xe,x=new Xe,y=new Xe,A=new H,v=new H;function g(O,S,T){h.fromBufferAttribute(i,O),p.fromBufferAttribute(i,S),m.fromBufferAttribute(i,T),_.fromBufferAttribute(o,O),x.fromBufferAttribute(o,S),y.fromBufferAttribute(o,T),p.sub(h),m.sub(h),x.sub(_),y.sub(_);const N=1/(x.x*y.y-y.x*x.y);isFinite(N)&&(A.copy(p).multiplyScalar(y.y).addScaledVector(m,-x.y).multiplyScalar(N),v.copy(m).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(N),u[O].add(A),u[S].add(A),u[T].add(A),d[O].add(v),d[S].add(v),d[T].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,S=L.length;O<S;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,ne=N+q;K<ne;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new H,D=new H,F=new H,B=new H;function R(O){F.fromBufferAttribute(a,O),B.copy(F);const S=u[O];I.copy(S),I.sub(F.multiplyScalar(F.dot(S))).normalize(),D.crossVectors(B,S);const N=D.dot(d[O])<0?-1:1;c.setXYZW(O,I.x,I.y,I.z,N)}for(let O=0,S=L.length;O<S;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,ne=N+q;K<ne;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const a=new H,o=new H,c=new H,u=new H,d=new H,h=new H,p=new H,m=new H;if(e)for(let _=0,x=e.count;_<x;_+=3){const y=e.getX(_+0),A=e.getX(_+1),v=e.getX(_+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,A),c.fromBufferAttribute(t,v),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,v),u.add(p),d.add(p),h.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(A,d.x,d.y,d.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let _=0,x=t.count;_<x;_+=3)a.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,_=new h.constructor(d.length*p);let x=0,y=0;for(let A=0,v=d.length;A<v;A++){u.isInterleavedBufferAttribute?x=d[A]*u.data.stride+u.offset:x=d[A]*p;for(let g=0;g<p;g++)_[y++]=h[x++]}return new Qn(_,p,m)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const _=h[p],x=e(_,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,_=h.length;m<_;m++){const x=h[m];p.push(x.toJSON(e.data))}p.length>0&&(a[d]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let _=0,x=m.length;_<x;_++)p.push(m[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cp=new Wt,Br=new ul,Po=new Aa,up=new H,Do=new H,Lo=new H,Io=new H,Yc=new H,Uo=new H,hp=new H,No=new H;class gn extends En{constructor(e=new yn,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){Uo.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=u[d],m=o[d];p!==0&&(Yc.fromBufferAttribute(m,e),c?Uo.addScaledVector(Yc,p):Uo.addScaledVector(Yc.sub(t),p))}t.add(Uo)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(o),Br.copy(e.ray).recast(e.near),!(Po.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Po,up)===null||Br.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(cp.copy(o).invert(),Br.copy(e.ray).applyMatrix4(cp),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,A=_.length;y<A;y++){const v=_[y],g=c[v.materialIndex],L=Math.max(v.start,x.start),I=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let D=L,F=I;D<F;D+=3){const B=u.getX(D),R=u.getX(D+1),O=u.getX(D+2);a=Fo(this,g,e,i,h,p,m,B,R,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),A=Math.min(u.count,x.start+x.count);for(let v=y,g=A;v<g;v+=3){const L=u.getX(v),I=u.getX(v+1),D=u.getX(v+2);a=Fo(this,c,e,i,h,p,m,L,I,D),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,A=_.length;y<A;y++){const v=_[y],g=c[v.materialIndex],L=Math.max(v.start,x.start),I=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let D=L,F=I;D<F;D+=3){const B=D,R=D+1,O=D+2;a=Fo(this,g,e,i,h,p,m,B,R,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let v=y,g=A;v<g;v+=3){const L=v,I=v+1,D=v+2;a=Fo(this,c,e,i,h,p,m,L,I,D),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function IE(r,e,t,i,a,o,c,u){let d;if(e.side===Jt?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,e.side===yr,u),d===null)return null;No.copy(u),No.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(No);return h<t.near||h>t.far?null:{distance:h,point:No.clone(),object:r}}function Fo(r,e,t,i,a,o,c,u,d,h){r.getVertexPosition(u,Do),r.getVertexPosition(d,Lo),r.getVertexPosition(h,Io);const p=IE(r,e,t,i,Do,Lo,Io,hp);if(p){const m=new H;yi.getBarycoord(hp,Do,Lo,Io,m),a&&(p.uv=yi.getInterpolatedAttribute(a,u,d,h,m,new Xe)),o&&(p.uv1=yi.getInterpolatedAttribute(o,u,d,h,m,new Xe)),c&&(p.normal=yi.getInterpolatedAttribute(c,u,d,h,m,new H),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:u,b:d,c:h,normal:new H,materialIndex:0};yi.getNormal(Do,Lo,Io,_.normal),p.face=_,p.barycoord=m}return p}class Tr extends yn{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],p=[],m=[];let _=0,x=0;y("z","y","x",-1,-1,i,t,e,c,o,0),y("z","y","x",1,-1,i,t,-e,c,o,1),y("x","z","y",1,1,e,i,t,a,c,2),y("x","z","y",1,-1,e,i,-t,a,c,3),y("x","y","z",1,-1,e,t,i,a,o,4),y("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new on(h,3)),this.setAttribute("normal",new on(p,3)),this.setAttribute("uv",new on(m,2));function y(A,v,g,L,I,D,F,B,R,O,S){const T=D/R,N=F/O,q=D/2,K=F/2,ne=B/2,ie=R+1,ee=O+1;let $=0,oe=0;const we=new H;for(let Se=0;Se<ee;Se++){const Ee=Se*N-K;for(let ut=0;ut<ie;ut++){const it=ut*T-q;we[A]=it*L,we[v]=Ee*I,we[g]=ne,h.push(we.x,we.y,we.z),we[A]=0,we[v]=0,we[g]=B>0?1:-1,p.push(we.x,we.y,we.z),m.push(ut/R),m.push(1-Se/O),$+=1}}for(let Se=0;Se<O;Se++)for(let Ee=0;Ee<R;Ee++){const ut=_+Ee+ie*Se,it=_+Ee+ie*(Se+1),Ht=_+(Ee+1)+ie*(Se+1),bt=_+(Ee+1)+ie*Se;d.push(ut,it,bt),d.push(it,Ht,bt),oe+=6}u.addGroup(x,oe,S),x+=oe,_+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Fn(r){const e={};for(let t=0;t<r.length;t++){const i=Bs(r[t]);for(const a in i)e[a]=i[a]}return e}function UE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const hl={clone:Bs,merge:Fn};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=UE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class pm extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new H,fp=new Xe,dp=new Xe;class mn extends pm{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,fp,dp),t.subVectors(dp,fp)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,bs=1;class OE extends En{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new mn(Ts,bs,e,t);a.layers=this.layers,this.add(a);const o=new mn(Ts,bs,e,t);o.layers=this.layers,this.add(o);const c=new mn(Ts,bs,e,t);c.layers=this.layers,this.add(c);const u=new mn(Ts,bs,e,t);u.layers=this.layers,this.add(u);const d=new mn(Ts,bs,e,t);d.layers=this.layers,this.add(d);const h=new mn(Ts,bs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,d]=t;for(const h of t)this.remove(h);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,p]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(m,_,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class mm extends Dn{constructor(e=[],t=qr,i,a,o,c,u,d,h,p){super(e,t,i,a,o,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gm extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new mm(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Tr(5,5,5),o=new Mn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:fi});o.uniforms.tEquirect.value=t;const c=new gn(a,o),u=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Pn),new OE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}class Ps extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const v=t.getJointPose(A,i),g=this._getHandJoint(h,A);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],_=p.position.distanceTo(m.position),x=.02,y=.005;h.inputState.pinching&&_>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zE extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class GE extends Dn{constructor(e=null,t=1,i=1,a,o,c,u,d,h=Sn,p=Sn,m,_){super(null,c,u,d,h,p,a,o,m,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new H,HE=new H,VE=new ct;class xr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Zc.subVectors(i,t).cross(HE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VE.getNormalMatrix(e),a=this.coplanarPoint(Zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Aa,kE=new Xe(.5,.5),Oo=new H;class Sh{constructor(e=new xr,t=new xr,i=new xr,a=new xr,o=new xr,c=new xr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){const a=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],p=o[4],m=o[5],_=o[6],x=o[7],y=o[8],A=o[9],v=o[10],g=o[11],L=o[12],I=o[13],D=o[14],F=o[15];if(a[0].setComponents(h-c,x-p,g-y,F-L).normalize(),a[1].setComponents(h+c,x+p,g+y,F+L).normalize(),a[2].setComponents(h+u,x+m,g+A,F+I).normalize(),a[3].setComponents(h-u,x-m,g-A,F-I).normalize(),i)a[4].setComponents(d,_,v,D).normalize(),a[5].setComponents(h-d,x-_,g-v,F-D).normalize();else if(a[4].setComponents(h-d,x-_,g-v,F-D).normalize(),t===Ii)a[5].setComponents(h+d,x+_,g+v,F+D).normalize();else if(t===il)a[5].setComponents(d,_,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const t=kE.distanceTo(e.center);return zr.radius=.7071067811865476+t,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Oo.x=a.normal.x>0?e.max.x:e.min.x,Oo.y=a.normal.y>0?e.max.y:e.min.y,Oo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new H,sl=new H,pp=new Wt,ha=new ul,Bo=new Aa,$c=new H,mp=new H;class yh extends En{constructor(e=new yn,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)rl.fromBufferAttribute(t,a-1),sl.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=rl.distanceTo(sl);e.setAttribute("lineDistance",new on(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(a),Bo.radius+=o,e.ray.intersectsSphere(Bo)===!1)return;pp.copy(a).invert(),ha.copy(e.ray).applyMatrix4(pp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=i.index,_=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let A=x,v=y-1;A<v;A+=h){const g=p.getX(A),L=p.getX(A+1),I=zo(this,e,ha,d,g,L,A);I&&t.push(I)}if(this.isLineLoop){const A=p.getX(y-1),v=p.getX(x),g=zo(this,e,ha,d,A,v,y-1);g&&t.push(g)}}else{const x=Math.max(0,c.start),y=Math.min(_.count,c.start+c.count);for(let A=x,v=y-1;A<v;A+=h){const g=zo(this,e,ha,d,A,A+1,A);g&&t.push(g)}if(this.isLineLoop){const A=zo(this,e,ha,d,y-1,x,y-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function zo(r,e,t,i,a,o,c){const u=r.geometry.attributes.position;if(rl.fromBufferAttribute(u,a),sl.fromBufferAttribute(u,o),t.distanceSqToSegment(rl,sl,$c,mp)>i)return;$c.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo($c);if(!(h<e.near||h>e.far))return{distance:h,point:mp.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}class _m extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gp=new Wt,eh=new ul,Go=new Aa,Ho=new H;class WE extends En{constructor(e=new yn,t=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(a),Go.radius+=o,e.ray.intersectsSphere(Go)===!1)return;gp.copy(a).invert(),eh.copy(e.ray).applyMatrix4(gp);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=i.index,m=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let y=_,A=x;y<A;y++){const v=h.getX(y);Ho.fromBufferAttribute(m,v),_p(Ho,v,d,a,e,t,this)}}else{const _=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let y=_,A=x;y<A;y++)Ho.fromBufferAttribute(m,y),_p(Ho,y,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function _p(r,e,t,i,a,o,c){const u=eh.distanceSqToPoint(r);if(u<t){const d=new H;eh.closestPointToPoint(r,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class ya extends Dn{constructor(e,t,i=Ni,a,o,c,u=Sn,d=Sn,h,p=tr,m=1){if(p!==tr&&p!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:m};super(_,a,o,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class XE extends ya{constructor(e,t=Ni,i=qr,a,o,c=Sn,u=Sn,d,h=tr){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,i,a,o,c,u,d,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vm extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Th extends yn{constructor(e=1,t=1,i=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};const h=this;a=Math.floor(a),o=Math.floor(o);const p=[],m=[],_=[],x=[];let y=0;const A=[],v=i/2;let g=0;L(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(p),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(x,2));function L(){const D=new H,F=new H;let B=0;const R=(t-e)/i;for(let O=0;O<=o;O++){const S=[],T=O/o,N=T*(t-e)+e;for(let q=0;q<=a;q++){const K=q/a,ne=K*d+u,ie=Math.sin(ne),ee=Math.cos(ne);F.x=N*ie,F.y=-T*i+v,F.z=N*ee,m.push(F.x,F.y,F.z),D.set(ie,R,ee).normalize(),_.push(D.x,D.y,D.z),x.push(K,1-T),S.push(y++)}A.push(S)}for(let O=0;O<a;O++)for(let S=0;S<o;S++){const T=A[S][O],N=A[S+1][O],q=A[S+1][O+1],K=A[S][O+1];(e>0||S!==0)&&(p.push(T,N,K),B+=3),(t>0||S!==o-1)&&(p.push(N,q,K),B+=3)}h.addGroup(g,B,0),g+=B}function I(D){const F=y,B=new Xe,R=new H;let O=0;const S=D===!0?e:t,T=D===!0?1:-1;for(let q=1;q<=a;q++)m.push(0,v*T,0),_.push(0,T,0),x.push(.5,.5),y++;const N=y;for(let q=0;q<=a;q++){const ne=q/a*d+u,ie=Math.cos(ne),ee=Math.sin(ne);R.x=S*ee,R.y=v*T,R.z=S*ie,m.push(R.x,R.y,R.z),_.push(0,T,0),B.x=ie*.5+.5,B.y=ee*.5*T+.5,x.push(B.x,B.y),y++}for(let q=0;q<a;q++){const K=F+q,ne=N+q;D===!0?p.push(ne,ne+1,K):p.push(ne+1,ne,K),O+=3}h.addGroup(g,O,D===!0?1:2),g+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bh extends Th{constructor(e=1,t=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,e,t,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(e){return new bh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fl extends yn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,m=e/u,_=t/d,x=[],y=[],A=[],v=[];for(let g=0;g<p;g++){const L=g*_-c;for(let I=0;I<h;I++){const D=I*m-o;y.push(D,-L,0),A.push(0,0,1),v.push(I/u),v.push(1-g/d)}}for(let g=0;g<d;g++)for(let L=0;L<u;L++){const I=L+h*g,D=L+h*(g+1),F=L+1+h*(g+1),B=L+1+h*g;x.push(I,D,B),x.push(D,F,B)}this.setIndex(x),this.setAttribute("position",new on(y,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}class br extends yn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let h=0;const p=[],m=new H,_=new H,x=[],y=[],A=[],v=[];for(let g=0;g<=i;g++){const L=[],I=g/i;let D=0;g===0&&c===0?D=.5/t:g===i&&d===Math.PI&&(D=-.5/t);for(let F=0;F<=t;F++){const B=F/t;m.x=-e*Math.cos(a+B*o)*Math.sin(c+I*u),m.y=e*Math.cos(c+I*u),m.z=e*Math.sin(a+B*o)*Math.sin(c+I*u),y.push(m.x,m.y,m.z),_.copy(m).normalize(),A.push(_.x,_.y,_.z),v.push(B+D,1-I),L.push(h++)}p.push(L)}for(let g=0;g<i;g++)for(let L=0;L<t;L++){const I=p[g][L+1],D=p[g][L],F=p[g+1][L],B=p[g+1][L+1];(g!==0||c>0)&&x.push(I,D,B),(g!==i-1||d<Math.PI)&&x.push(D,F,B)}this.setIndex(x),this.setAttribute("position",new on(y,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xm extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qE extends Zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mm extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YE extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class KE{constructor(e,t,i){const a=this;let o=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,_=h.length;m<_;m+=2){const x=h[m],y=h[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZE=new KE;class Ah{constructor(e){this.manager=e!==void 0?e:ZE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";const As=new WeakMap;class $E extends Ah{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Jc.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let m=As.get(c);m===void 0&&(m=[],As.set(c,m)),m.push({onLoad:t,onError:a})}return c}const u=Sa("img");function d(){p(),t&&t(this);const m=As.get(this)||[];for(let _=0;_<m.length;_++){const x=m[_];x.onLoad&&x.onLoad(this)}As.delete(this),o.manager.itemEnd(e)}function h(m){p(),a&&a(m),Jc.remove(`image:${e}`);const _=As.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onError&&y.onError(m)}As.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Jc.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class wh extends Ah{constructor(e){super(e)}load(e,t,i,a){const o=new Dn,c=new $E(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class JE extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const jc=new Wt,vp=new H,xp=new H;class jE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(vp),xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xp),t.updateMatrixWorld(),jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QE extends jE{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ch extends JE{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Rh extends pm{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ey extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Mp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=_t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sp=new H;let Vo,Qc;class ty extends En{constructor(e=new H(0,0,1),t=new H(0,0,0),i=1,a=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Vo===void 0&&(Vo=new yn,Vo.setAttribute("position",new on([0,0,0,0,1,0],3)),Qc=new bh(.5,1,5,1),Qc.translate(0,-.5,0)),this.position.copy(t),this.line=new yh(Vo,new Eh({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gn(Qc,new kn({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,o,c)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Sp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Sp,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ny extends Kr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ep(r,e,t,i){const a=iy(i);switch(t){case im:return r*e;case sm:return r*e/a.components*a.byteLength;case mh:return r*e/a.components*a.byteLength;case Fs:return r*e*2/a.components*a.byteLength;case gh:return r*e*2/a.components*a.byteLength;case rm:return r*e*3/a.components*a.byteLength;case Ti:return r*e*4/a.components*a.byteLength;case _h:return r*e*4/a.components*a.byteLength;case Zo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jo:case jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eu:case Tu:return Math.max(r,16)*Math.max(e,8)/4;case Su:case yu:return Math.max(r,8)*Math.max(e,8)/2;case bu:case Au:case Cu:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:case Pu:case Du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ku:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case qu:case Yu:case Ku:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zu:case $u:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ju:case ju:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(r){switch(r){case jn:case Qp:return{byteLength:1,components:1};case xa:case em:case Rn:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Ni:case fh:case Li:return{byteLength:4,components:1};case tm:case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);function Em(){let r=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function ry(r){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,m=h.byteLength,_=r.createBuffer();r.bindBuffer(d,_),r.bufferData(d,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=r.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,d,h){const p=d.array,m=d.updateRanges;if(r.bindBuffer(h,u),m.length===0)r.bufferSubData(h,0,p);else{m.sort((x,y)=>x.start-y.start);let _=0;for(let x=1;x<m.length;x++){const y=m[_],A=m[x];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++_,m[_]=A)}m.length=_+1;for(let x=0,y=m.length;x<y;x++){const A=m[x];r.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(r.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,xy=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
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
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pT=`#if defined( USE_POINTS_UV )
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
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,KT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QT=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sb=`uniform sampler2D t2D;
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fb=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
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
}`,vb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,xb=`uniform vec3 diffuse;
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
}`,Mb=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Sb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Eb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,yb=`#define MATCAP
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
}`,Tb=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ab=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Cb=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Rb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Pb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Lb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Ib=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Nb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Fb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ob=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:sy,alphahash_pars_fragment:ay,alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:yy,color_fragment:Ty,color_pars_fragment:by,color_pars_vertex:Ay,color_vertex:wy,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:Dy,displacementmap_vertex:Ly,emissivemap_fragment:Iy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ny,colorspace_pars_fragment:Fy,envmap_fragment:Oy,envmap_common_pars_fragment:By,envmap_pars_fragment:zy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:Jy,envmap_vertex:Hy,fog_vertex:Vy,fog_pars_vertex:ky,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Zy,lights_pars_begin:$y,lights_toon_fragment:jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:aT,logdepthbuf_fragment:oT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:hT,map_pars_fragment:fT,map_particle_fragment:dT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:_T,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:MT,morphtarget_vertex:ST,normal_fragment_begin:ET,normal_fragment_maps:yT,normal_pars_fragment:TT,normal_pars_vertex:bT,normal_vertex:AT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:RT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:DT,opaque_fragment:LT,packing:IT,premultiplied_alpha_fragment:UT,project_vertex:NT,dithering_fragment:FT,dithering_pars_fragment:OT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:kT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:qT,skinnormal_vertex:YT,specularmap_fragment:KT,specularmap_pars_fragment:ZT,tonemapping_fragment:$T,tonemapping_pars_fragment:JT,transmission_fragment:jT,transmission_pars_fragment:QT,uv_pars_fragment:eb,uv_pars_vertex:tb,uv_vertex:nb,worldpos_vertex:ib,background_vert:rb,background_frag:sb,backgroundCube_vert:ab,backgroundCube_frag:ob,cube_vert:lb,cube_frag:cb,depth_vert:ub,depth_frag:hb,distance_vert:fb,distance_frag:db,equirect_vert:pb,equirect_frag:mb,linedashed_vert:gb,linedashed_frag:_b,meshbasic_vert:vb,meshbasic_frag:xb,meshlambert_vert:Mb,meshlambert_frag:Sb,meshmatcap_vert:Eb,meshmatcap_frag:yb,meshnormal_vert:Tb,meshnormal_frag:bb,meshphong_vert:Ab,meshphong_frag:wb,meshphysical_vert:Cb,meshphysical_frag:Rb,meshtoon_vert:Pb,meshtoon_frag:Db,points_vert:Lb,points_frag:Ib,shadow_vert:Ub,shadow_frag:Nb,sprite_vert:Fb,sprite_frag:Ob},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Di={basic:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Fn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Fn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Fn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Fn([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Di.physical={uniforms:Fn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const ko={r:0,b:0,g:0},Gr=new Fi,Bb=new Wt;function zb(r,e,t,i,a,o,c){const u=new tt(0);let d=o===!0?0:1,h,p,m=null,_=0,x=null;function y(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?t:e).get(D)),D}function A(I){let D=!1;const F=y(I);F===null?g(u,d):F&&F.isColor&&(g(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(I,D){const F=y(D);F&&(F.isCubeTexture||F.mapping===cl)?(p===void 0&&(p=new gn(new Tr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Bs(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Gr.copy(D.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Gr)),p.material.toneMapped=yt.getTransfer(F.colorSpace)!==Ft,(m!==F||_!==F.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,m=F,_=F.version,x=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(h===void 0&&(h=new gn(new fl(2,2),new Mn({name:"BackgroundMaterial",uniforms:Bs(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=F,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=yt.getTransfer(F.colorSpace)!==Ft,F.matrixAutoUpdate===!0&&F.updateMatrix(),h.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||_!==F.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,m=F,_=F.version,x=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function g(I,D){I.getRGB(ko,dm(r)),i.buffers.color.setClear(ko.r,ko.g,ko.b,D,c)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,D=1){u.set(I),d=D,g(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,g(u,d)},render:A,addToRenderList:v,dispose:L}}function Gb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=_(null);let o=a,c=!1;function u(T,N,q,K,ne){let ie=!1;const ee=m(K,q,N);o!==ee&&(o=ee,h(o.object)),ie=x(T,K,q,ne),ie&&y(T,K,q,ne),ne!==null&&e.update(ne,r.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,D(T,N,q,K),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function m(T,N,q){const K=q.wireframe===!0;let ne=i[T.id];ne===void 0&&(ne={},i[T.id]=ne);let ie=ne[N.id];ie===void 0&&(ie={},ne[N.id]=ie);let ee=ie[K];return ee===void 0&&(ee=_(d()),ie[K]=ee),ee}function _(T){const N=[],q=[],K=[];for(let ne=0;ne<t;ne++)N[ne]=0,q[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:K,object:T,attributes:{},index:null}}function x(T,N,q,K){const ne=o.attributes,ie=N.attributes;let ee=0;const $=q.getAttributes();for(const oe in $)if($[oe].location>=0){const Se=ne[oe];let Ee=ie[oe];if(Ee===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),Se===void 0||Se.attribute!==Ee||Ee&&Se.data!==Ee.data)return!0;ee++}return o.attributesNum!==ee||o.index!==K}function y(T,N,q,K){const ne={},ie=N.attributes;let ee=0;const $=q.getAttributes();for(const oe in $)if($[oe].location>=0){let Se=ie[oe];Se===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor));const Ee={};Ee.attribute=Se,Se&&Se.data&&(Ee.data=Se.data),ne[oe]=Ee,ee++}o.attributes=ne,o.attributesNum=ee,o.index=K}function A(){const T=o.newAttributes;for(let N=0,q=T.length;N<q;N++)T[N]=0}function v(T){g(T,0)}function g(T,N){const q=o.newAttributes,K=o.enabledAttributes,ne=o.attributeDivisors;q[T]=1,K[T]===0&&(r.enableVertexAttribArray(T),K[T]=1),ne[T]!==N&&(r.vertexAttribDivisor(T,N),ne[T]=N)}function L(){const T=o.newAttributes,N=o.enabledAttributes;for(let q=0,K=N.length;q<K;q++)N[q]!==T[q]&&(r.disableVertexAttribArray(q),N[q]=0)}function I(T,N,q,K,ne,ie,ee){ee===!0?r.vertexAttribIPointer(T,N,q,ne,ie):r.vertexAttribPointer(T,N,q,K,ne,ie)}function D(T,N,q,K){A();const ne=K.attributes,ie=q.getAttributes(),ee=N.defaultAttributeValues;for(const $ in ie){const oe=ie[$];if(oe.location>=0){let we=ne[$];if(we===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),we!==void 0){const Se=we.normalized,Ee=we.itemSize,ut=e.get(we);if(ut===void 0)continue;const it=ut.buffer,Ht=ut.type,bt=ut.bytesPerElement,ae=Ht===r.INT||Ht===r.UNSIGNED_INT||we.gpuType===fh;if(we.isInterleavedBufferAttribute){const de=we.data,Pe=de.stride,Je=we.offset;if(de.isInstancedInterleavedBuffer){for(let ze=0;ze<oe.locationSize;ze++)g(oe.location+ze,de.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ze=0;ze<oe.locationSize;ze++)v(oe.location+ze);r.bindBuffer(r.ARRAY_BUFFER,it);for(let ze=0;ze<oe.locationSize;ze++)I(oe.location+ze,Ee/oe.locationSize,Ht,Se,Pe*bt,(Je+Ee/oe.locationSize*ze)*bt,ae)}else{if(we.isInstancedBufferAttribute){for(let de=0;de<oe.locationSize;de++)g(oe.location+de,we.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let de=0;de<oe.locationSize;de++)v(oe.location+de);r.bindBuffer(r.ARRAY_BUFFER,it);for(let de=0;de<oe.locationSize;de++)I(oe.location+de,Ee/oe.locationSize,Ht,Se,Ee*bt,Ee/oe.locationSize*de*bt,ae)}}else if(ee!==void 0){const Se=ee[$];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(oe.location,Se);break;case 3:r.vertexAttrib3fv(oe.location,Se);break;case 4:r.vertexAttrib4fv(oe.location,Se);break;default:r.vertexAttrib1fv(oe.location,Se)}}}}L()}function F(){O();for(const T in i){const N=i[T];for(const q in N){const K=N[q];for(const ne in K)p(K[ne].object),delete K[ne];delete N[q]}delete i[T]}}function B(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const q in N){const K=N[q];for(const ne in K)p(K[ne].object),delete K[ne];delete N[q]}delete i[T.id]}function R(T){for(const N in i){const q=i[N];if(q[T.id]===void 0)continue;const K=q[T.id];for(const ne in K)p(K[ne].object),delete K[ne];delete q[T.id]}}function O(){S(),c=!0,o!==a&&(o=a,h(o.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:O,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:R,initAttributes:A,enableAttribute:v,disableUnusedAttributes:L}}function Hb(r,e,t){let i;function a(h){i=h}function o(h,p){r.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,m){m!==0&&(r.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let x=0;for(let y=0;y<m;y++)x+=p[y];t.update(x,i,1)}function d(h,p,m,_){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<h.length;y++)c(h[y],p[y],_[y]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,_,0,m);let y=0;for(let A=0;A<m;A++)y+=p[A]*_[A];t.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vb(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(R){return!(R!==Ti&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(R){const O=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==jn&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Li&&!O)}function d(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(Qe("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:D,maxSamples:F,samples:B}}function kb(r){const e=this;let t=null,i=0,a=!1,o=!1;const c=new xr,u=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const x=m.length!==0||_||i!==0||a;return a=_,i=m.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){t=p(m,_,0)},this.setState=function(m,_,x){const y=m.clippingPlanes,A=m.clipIntersection,v=m.clipShadows,g=r.get(m);if(!a||y===null||y.length===0||o&&!v)o?p(null):h();else{const L=o?0:i,I=L*4;let D=g.clippingState||null;d.value=D,D=p(y,_,I,x);for(let F=0;F!==I;++F)D[F]=t[F];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,_,x,y){const A=m!==null?m.length:0;let v=null;if(A!==0){if(v=d.value,y!==!0||v===null){const g=x+A*4,L=_.matrixWorldInverse;u.getNormalMatrix(L),(v===null||v.length<g)&&(v=new Float32Array(g));for(let I=0,D=x;I!==A;++I,D+=4)c.copy(m[I]).applyMatrix4(L,u),c.normal.toArray(v,D),v[D+3]=c.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function Wb(r){let e=new WeakMap;function t(c,u){return u===_u?c.mapping=qr:u===vu&&(c.mapping=Ns),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===_u||u===vu)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new gm(d.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const Sr=4,yp=[.125,.215,.35,.446,.526,.582],kr=20,Xb=256,fa=new Rh,Tp=new tt;let eu=null,tu=0,nu=0,iu=!1;const qb=new H;class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:u=qb}=o;eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,a,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eu,tu,nu),this._renderer.xr.enabled=iu,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eu=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Rn,format:Ti,colorSpace:Os,depthBuffer:!1},a=Ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(o)),this._blurMaterial=Zb(o,e,t),this._ggxMaterial=Kb(o,e,t)}return a}_compileMaterial(e){const t=new gn(new yn,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,a,o){const d=new mn(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(Tp),m.toneMapping=Ui,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new Tr,new kn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,v=A.material;let g=!1;const L=e.background;L?L.isColor&&(v.color.copy(L),e.background=null,g=!0):(v.color.copy(Tp),g=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[I],o.y,o.z)):D===1?(d.up.set(0,0,h[I]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[I],o.z)):(d.up.set(0,h[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[I]));const F=this._cubeSize;ws(a,D*F,I>2?F:0,F,F),m.setRenderTarget(a),g&&m.render(A,d),m.render(e,d)}m.toneMapping=x,m.autoClear=_,e.background=L}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===qr||e.mapping===Ns;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;ws(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),_=0+h*1.25,x=m*_,{_lodMax:y}=this,A=this._sizeLods[i],v=3*A*(i>y-Sr?i-y+Sr:0),g=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=y-t,ws(o,v,g,3*A,2*A),a.setRenderTarget(o),a.render(u,fa),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=y-i,ws(e,v,g,3*A,2*A),a.setRenderTarget(e),a.render(u,fa)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[a];m.material=h;const _=h.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*kr-1),A=o/y,v=isFinite(o)?1+Math.floor(p*A):kr;v>kr&&Qe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${kr}`);const g=[];let L=0;for(let R=0;R<kr;++R){const O=R/A,S=Math.exp(-O*O/2);g.push(S),R===0?L+=S:R<v&&(L+=2*S)}for(let R=0;R<g.length;R++)g[R]=g[R]/L;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=g,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:I}=this;_.dTheta.value=y,_.mipInt.value=I-i;const D=this._sizeLods[a],F=3*D*(a>I-Sr?a-I+Sr:0),B=4*(this._cubeSize-D);ws(t,F,B,3*D,2*D),d.setRenderTarget(t),d.render(m,fa)}}function Yb(r){const e=[],t=[],i=[];let a=r;const o=r-Sr+1+yp.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let d=1/u;c>r-Sr?d=yp[c-r+Sr-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,y=6,A=3,v=2,g=1,L=new Float32Array(A*y*x),I=new Float32Array(v*y*x),D=new Float32Array(g*y*x);for(let B=0;B<x;B++){const R=B%3*2/3-1,O=B>2?0:-1,S=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];L.set(S,A*y*B),I.set(_,v*y*B);const T=[B,B,B,B,B,B];D.set(T,g*y*B)}const F=new yn;F.setAttribute("position",new Qn(L,A)),F.setAttribute("uv",new Qn(I,v)),F.setAttribute("faceIndex",new Qn(D,g)),i.push(new gn(F,null)),a>Sr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ap(r,e,t){const i=new pn(r,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function Kb(r,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Zb(r,e,t){const i=new Float32Array(kr),a=new H(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:dl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function wp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Cp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function $b(r){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===_u||d===vu,p=d===qr||d===Ns;if(h||p){let m=e.get(u);const _=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new bp(r)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&a(x)?(t===null&&(t=new bp(r)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Jb(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ea("WebGLRenderer: "+i+" extension not supported."),a}}}function jb(r,e,t,i){const a={},o=new WeakMap;function c(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const y in _.attributes)e.remove(_.attributes[y]);_.removeEventListener("dispose",c),delete a[_.id];const x=o.get(_);x&&(e.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(m,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function d(m){const _=m.attributes;for(const x in _)e.update(_[x],r.ARRAY_BUFFER)}function h(m){const _=[],x=m.index,y=m.attributes.position;let A=0;if(x!==null){const L=x.array;A=x.version;for(let I=0,D=L.length;I<D;I+=3){const F=L[I+0],B=L[I+1],R=L[I+2];_.push(F,B,B,R,R,F)}}else if(y!==void 0){const L=y.array;A=y.version;for(let I=0,D=L.length/3-1;I<D;I+=3){const F=I+0,B=I+1,R=I+2;_.push(F,B,B,R,R,F)}}else return;const v=new(om(_)?fm:hm)(_,1);v.version=A;const g=o.get(m);g&&e.remove(g),o.set(m,v)}function p(m){const _=o.get(m);if(_){const x=m.index;x!==null&&_.version<x.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function Qb(r,e,t){let i;function a(_){i=_}let o,c;function u(_){o=_.type,c=_.bytesPerElement}function d(_,x){r.drawElements(i,x,o,_*c),t.update(x,i,1)}function h(_,x,y){y!==0&&(r.drawElementsInstanced(i,x,o,_*c,y),t.update(x,i,y))}function p(_,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,_,0,y);let v=0;for(let g=0;g<y;g++)v+=x[g];t.update(v,i,1)}function m(_,x,y,A){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<_.length;g++)h(_[g]/c,x[g],A[g]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,o,_,0,A,0,y);let g=0;for(let L=0;L<y;L++)g+=x[L]*A[L];t.update(g,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function eA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(o/3);break;case r.LINES:t.lines+=u*(o/2);break;case r.LINE_STRIP:t.lines+=u*(o-1);break;case r.LINE_LOOP:t.lines+=u*o;break;case r.POINTS:t.points+=u*o;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function tA(r,e,t){const i=new WeakMap,a=new jt;function o(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=i.get(u);if(_===void 0||_.count!==m){let T=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,g=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),A===!0&&(D=2),v===!0&&(D=3);let F=u.attributes.position.count*D,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const R=new Float32Array(F*B*4*m),O=new lm(R,F,B,m);O.type=Li,O.needsUpdate=!0;const S=D*4;for(let N=0;N<m;N++){const q=g[N],K=L[N],ne=I[N],ie=F*B*4*N;for(let ee=0;ee<q.count;ee++){const $=ee*S;y===!0&&(a.fromBufferAttribute(q,ee),R[ie+$+0]=a.x,R[ie+$+1]=a.y,R[ie+$+2]=a.z,R[ie+$+3]=0),A===!0&&(a.fromBufferAttribute(K,ee),R[ie+$+4]=a.x,R[ie+$+5]=a.y,R[ie+$+6]=a.z,R[ie+$+7]=0),v===!0&&(a.fromBufferAttribute(ne,ee),R[ie+$+8]=a.x,R[ie+$+9]=a.y,R[ie+$+10]=a.z,R[ie+$+11]=ne.itemSize===4?a.w:1)}}_={count:m,texture:O,size:new Xe(F,B)},i.set(u,_),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let y=0;for(let v=0;v<h.length;v++)y+=h[v];const A=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",A),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:o}}function nA(r,e,t,i){let a=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,m=e.get(d,p);if(a.get(m)!==h&&(e.update(m),a.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==h&&(_.update(),a.set(_,h))}return m}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const iA={[sh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[oh]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function rA(r,e,t,i,a){const o=new pn(e,t,{type:r,depthBuffer:i,stencilBuffer:a}),c=new pn(e,t,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),u=new yn;u.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new on([0,2,0,0,2,0],2));const d=new xm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new gn(u,d),p=new Rh(-1,1,1,-1,0,1);let m=null,_=null,x=!1,y,A=null,v=[],g=!1;this.setSize=function(L,I){o.setSize(L,I),c.setSize(L,I);for(let D=0;D<v.length;D++){const F=v[D];F.setSize&&F.setSize(L,I)}},this.setEffects=function(L){v=L,g=v.length>0&&v[0].isRenderPass===!0;const I=o.width,D=o.height;for(let F=0;F<v.length;F++){const B=v[F];B.setSize&&B.setSize(I,D)}},this.begin=function(L,I){if(x||L.toneMapping===Ui&&v.length===0)return!1;if(A=I,I!==null){const D=I.width,F=I.height;(o.width!==D||o.height!==F)&&this.setSize(D,F)}return g===!1&&L.setRenderTarget(o),y=L.toneMapping,L.toneMapping=Ui,!0},this.hasRenderPass=function(){return g},this.end=function(L,I){L.toneMapping=y,x=!0;let D=o,F=c;for(let B=0;B<v.length;B++){const R=v[B];if(R.enabled!==!1&&(R.render(L,F,D,I),R.needsSwap!==!1)){const O=D;D=F,F=O}}if(m!==L.outputColorSpace||_!==L.toneMapping){m=L.outputColorSpace,_=L.toneMapping,d.defines={},yt.getTransfer(m)===Ft&&(d.defines.SRGB_TRANSFER="");const B=iA[_];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(A),L.render(h,p),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),c.dispose(),u.dispose(),d.dispose()}}const ym=new Dn,th=new ya(1,1),Tm=new lm,bm=new EE,Am=new mm,Rp=[],Pp=[],Dp=new Float32Array(16),Lp=new Float32Array(9),Ip=new Float32Array(4);function zs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=Rp[a];if(o===void 0&&(o=new Float32Array(a),Rp[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(o,u)}return o}function ln(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function cn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function pl(r,e){let t=Pp[e];t===void 0&&(t=new Int32Array(e),Pp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function sA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2fv(this.addr,e),cn(t,e)}}function oA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;r.uniform3fv(this.addr,e),cn(t,e)}}function lA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4fv(this.addr,e),cn(t,e)}}function cA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ip.set(i),r.uniformMatrix2fv(this.addr,!1,Ip),cn(t,i)}}function uA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Lp.set(i),r.uniformMatrix3fv(this.addr,!1,Lp),cn(t,i)}}function hA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Dp.set(i),r.uniformMatrix4fv(this.addr,!1,Dp),cn(t,i)}}function fA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2iv(this.addr,e),cn(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3iv(this.addr,e),cn(t,e)}}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4iv(this.addr,e),cn(t,e)}}function gA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _A(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;r.uniform2uiv(this.addr,e),cn(t,e)}}function vA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;r.uniform3uiv(this.addr,e),cn(t,e)}}function xA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;r.uniform4uiv(this.addr,e),cn(t,e)}}function MA(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(th.compareFunction=t.isReversedDepthBuffer()?xh:vh,o=th):o=ym,t.setTexture2D(e||o,a)}function SA(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||bm,a)}function EA(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Am,a)}function yA(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Tm,a)}function TA(r){switch(r){case 5126:return sA;case 35664:return aA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return hA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return yA}}function bA(r,e){r.uniform1fv(this.addr,e)}function AA(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function wA(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function CA(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function RA(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function PA(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DA(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function LA(r,e){r.uniform1iv(this.addr,e)}function IA(r,e){r.uniform2iv(this.addr,e)}function UA(r,e){r.uniform3iv(this.addr,e)}function NA(r,e){r.uniform4iv(this.addr,e)}function FA(r,e){r.uniform1uiv(this.addr,e)}function OA(r,e){r.uniform2uiv(this.addr,e)}function BA(r,e){r.uniform3uiv(this.addr,e)}function zA(r,e){r.uniform4uiv(this.addr,e)}function GA(r,e,t){const i=this.cache,a=e.length,o=pl(t,a);ln(i,o)||(r.uniform1iv(this.addr,o),cn(i,o));let c;this.type===r.SAMPLER_2D_SHADOW?c=th:c=ym;for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c,o[u])}function HA(r,e,t){const i=this.cache,a=e.length,o=pl(t,a);ln(i,o)||(r.uniform1iv(this.addr,o),cn(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||bm,o[c])}function VA(r,e,t){const i=this.cache,a=e.length,o=pl(t,a);ln(i,o)||(r.uniform1iv(this.addr,o),cn(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Am,o[c])}function kA(r,e,t){const i=this.cache,a=e.length,o=pl(t,a);ln(i,o)||(r.uniform1iv(this.addr,o),cn(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Tm,o[c])}function WA(r){switch(r){case 5126:return bA;case 35664:return AA;case 35665:return wA;case 35666:return CA;case 35674:return RA;case 35675:return PA;case 35676:return DA;case 5124:case 35670:return LA;case 35667:case 35671:return IA;case 35668:case 35672:return UA;case 35669:case 35673:return NA;case 5125:return FA;case 36294:return OA;case 36295:return BA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return kA}}class XA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TA(t.type)}}class qA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WA(t.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function Up(r,e){r.seq.push(e),r.map[e.id]=e}function KA(r,e,t){const i=r.name,a=i.length;for(ru.lastIndex=0;;){const o=ru.exec(i),c=ru.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){Up(t,h===void 0?new XA(u,r,e):new qA(u,r,e));break}else{let m=t.map[u];m===void 0&&(m=new YA(u),Up(t,m)),t=m}}}class el{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);KA(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Np(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const ZA=37297;let $A=0;function JA(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Fp=new ct;function jA(r){yt._getMatrix(Fp,yt.workingColorSpace,r);const e=`mat3( ${Fp.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(r)){case nl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Op(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+JA(r.getShaderSource(e),u)}else return o}function QA(r,e){const t=jA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const e1={[sh]:"Linear",[ah]:"Reinhard",[oh]:"Cineon",[lh]:"ACESFilmic",[uh]:"AgX",[hh]:"Neutral",[ch]:"Custom"};function t1(r,e){const t=e1[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wo=new H;function n1(){yt.getLuminanceCoefficients(Wo);const r=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function r1(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s1(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),c=o.name;let u=1;o.type===r.FLOAT_MAT2&&(u=2),o.type===r.FLOAT_MAT3&&(u=3),o.type===r.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function ma(r){return r!==""}function Bp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(r){return r.replace(a1,l1)}const o1=new Map;function l1(r,e){let t=ft[e];if(t===void 0){const i=o1.get(e);if(i!==void 0)t=ft[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nh(t)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(r){return r.replace(c1,u1)}function u1(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Hp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const h1={[Ko]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function f1(r){return h1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const d1={[qr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function p1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":d1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const m1={[Ns]:"ENVMAP_MODE_REFRACTION"};function g1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":m1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _1={[rh]:"ENVMAP_BLENDING_MULTIPLY",[tE]:"ENVMAP_BLENDING_MIX",[nE]:"ENVMAP_BLENDING_ADD"};function v1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":_1[r.combine]||"ENVMAP_BLENDING_NONE"}function x1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function M1(r,e,t,i){const a=r.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=f1(t),h=p1(t),p=g1(t),m=v1(t),_=x1(t),x=i1(t),y=r1(o),A=a.createProgram();let v,g,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ma).join(`
`),v.length>0&&(v+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ma).join(`
`),g.length>0&&(g+=`
`)):(v=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),g=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ui?t1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,QA("linearToOutputTexel",t.outputColorSpace),n1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),c=nh(c),c=Bp(c,t),c=zp(c,t),u=nh(u),u=Bp(u,t),u=zp(u,t),c=Gp(c),u=Gp(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,g=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const I=L+v+c,D=L+g+u,F=Np(a,a.VERTEX_SHADER,I),B=Np(a,a.FRAGMENT_SHADER,D);a.attachShader(A,F),a.attachShader(A,B),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function R(N){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(A)||"",K=a.getShaderInfoLog(F)||"",ne=a.getShaderInfoLog(B)||"",ie=q.trim(),ee=K.trim(),$=ne.trim();let oe=!0,we=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,A,F,B);else{const Se=Op(a,F,"vertex"),Ee=Op(a,B,"fragment");Ct("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+Se+`
`+Ee)}else ie!==""?Qe("WebGLProgram: Program Info Log:",ie):(ee===""||$==="")&&(we=!1);we&&(N.diagnostics={runnable:oe,programLog:ie,vertexShader:{log:ee,prefix:v},fragmentShader:{log:$,prefix:g}})}a.deleteShader(F),a.deleteShader(B),O=new el(a,A),S=s1(a,A)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(A,ZA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let S1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new y1(e),t.set(e,i)),i}}class y1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function T1(r,e,t,i,a,o,c){const u=new cm,d=new E1,h=new Set,p=[],m=new Map,_=a.logarithmicDepthBuffer;let x=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(S){return h.add(S),S===0?"uv":`uv${S}`}function v(S,T,N,q,K){const ne=q.fog,ie=K.geometry,ee=S.isMeshStandardMaterial?q.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),oe=$&&$.mapping===cl?$.image.height:null,we=y[S.type];S.precision!==null&&(x=a.getMaxPrecision(S.precision),x!==S.precision&&Qe("WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const Se=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ee=Se!==void 0?Se.length:0;let ut=0;ie.morphAttributes.position!==void 0&&(ut=1),ie.morphAttributes.normal!==void 0&&(ut=2),ie.morphAttributes.color!==void 0&&(ut=3);let it,Ht,bt,ae;if(we){const Rt=Di[we];it=Rt.vertexShader,Ht=Rt.fragmentShader}else it=S.vertexShader,Ht=S.fragmentShader,d.update(S),bt=d.getVertexShaderID(S),ae=d.getFragmentShaderID(S);const de=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Je=K.isInstancedMesh===!0,ze=K.isBatchedMesh===!0,mt=!!S.map,Yt=!!S.matcap,vt=!!$,rt=!!S.aoMap,Tt=!!S.lightMap,st=!!S.bumpMap,Lt=!!S.normalMap,z=!!S.displacementMap,Zt=!!S.emissiveMap,xt=!!S.metalnessMap,pt=!!S.roughnessMap,Ue=S.anisotropy>0,P=S.clearcoat>0,E=S.dispersion>0,k=S.iridescence>0,se=S.sheen>0,ue=S.transmission>0,te=Ue&&!!S.anisotropyMap,Ge=P&&!!S.clearcoatMap,_e=P&&!!S.clearcoatNormalMap,Fe=P&&!!S.clearcoatRoughnessMap,qe=k&&!!S.iridescenceMap,pe=k&&!!S.iridescenceThicknessMap,xe=se&&!!S.sheenColorMap,Ie=se&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,ve=!!S.specularColorMap,at=!!S.specularIntensityMap,V=ue&&!!S.transmissionMap,Ce=ue&&!!S.thicknessMap,ge=!!S.gradientMap,Re=!!S.alphaMap,me=S.alphaTest>0,he=!!S.alphaHash,Me=!!S.extensions;let je=Ui;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(je=r.toneMapping);const Ot={shaderID:we,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:Ht,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:ze,batchingColor:ze&&K._colorsTexture!==null,instancing:Je,instancingColor:Je&&K.instanceColor!==null,instancingMorph:Je&&K.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Os,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:Yt,envMap:vt,envMapMode:vt&&$.mapping,envMapCubeUVHeight:oe,aoMap:rt,lightMap:Tt,bumpMap:st,normalMap:Lt,displacementMap:z,emissiveMap:Zt,normalMapObjectSpace:Lt&&S.normalMapType===aE,normalMapTangentSpace:Lt&&S.normalMapType===am,metalnessMap:xt,roughnessMap:pt,anisotropy:Ue,anisotropyMap:te,clearcoat:P,clearcoatMap:Ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:Fe,dispersion:E,iridescence:k,iridescenceMap:qe,iridescenceThicknessMap:pe,sheen:se,sheenColorMap:xe,sheenRoughnessMap:Ie,specularMap:Oe,specularColorMap:ve,specularIntensityMap:at,transmission:ue,transmissionMap:V,thicknessMap:Ce,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:me,alphaHash:he,combine:S.combine,mapUv:mt&&A(S.map.channel),aoMapUv:rt&&A(S.aoMap.channel),lightMapUv:Tt&&A(S.lightMap.channel),bumpMapUv:st&&A(S.bumpMap.channel),normalMapUv:Lt&&A(S.normalMap.channel),displacementMapUv:z&&A(S.displacementMap.channel),emissiveMapUv:Zt&&A(S.emissiveMap.channel),metalnessMapUv:xt&&A(S.metalnessMap.channel),roughnessMapUv:pt&&A(S.roughnessMap.channel),anisotropyMapUv:te&&A(S.anisotropyMap.channel),clearcoatMapUv:Ge&&A(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&A(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&A(S.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&A(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&A(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&A(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&A(S.sheenRoughnessMap.channel),specularMapUv:Oe&&A(S.specularMap.channel),specularColorMapUv:ve&&A(S.specularColorMap.channel),specularIntensityMapUv:at&&A(S.specularIntensityMap.channel),transmissionMapUv:V&&A(S.transmissionMap.channel),thicknessMapUv:Ce&&A(S.thicknessMap.channel),alphaMapUv:Re&&A(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Lt||Ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ie.attributes.uv&&(mt||Re),fog:!!ne,useFog:S.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Pe,skinning:K.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Ft,decodeVideoTextureEmissive:Zt&&S.emissiveMap.isVideoTexture===!0&&yt.getTransfer(S.emissiveMap.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&S.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(L(T,S),I(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function L(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function I(S,T){u.disableAll(),T.instancing&&u.enable(0),T.instancingColor&&u.enable(1),T.instancingMorph&&u.enable(2),T.matcap&&u.enable(3),T.envMap&&u.enable(4),T.normalMapObjectSpace&&u.enable(5),T.normalMapTangentSpace&&u.enable(6),T.clearcoat&&u.enable(7),T.iridescence&&u.enable(8),T.alphaTest&&u.enable(9),T.vertexColors&&u.enable(10),T.vertexAlphas&&u.enable(11),T.vertexUv1s&&u.enable(12),T.vertexUv2s&&u.enable(13),T.vertexUv3s&&u.enable(14),T.vertexTangents&&u.enable(15),T.anisotropy&&u.enable(16),T.alphaHash&&u.enable(17),T.batching&&u.enable(18),T.dispersion&&u.enable(19),T.batchingColor&&u.enable(20),T.gradientMap&&u.enable(21),S.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reversedDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),S.push(u.mask)}function D(S){const T=y[S.type];let N;if(T){const q=Di[T];N=hl.clone(q.uniforms)}else N=S.uniforms;return N}function F(S,T){let N=m.get(T);return N!==void 0?++N.usedTimes:(N=new M1(r,T,S,o),p.push(N),m.set(T,N)),N}function B(S){if(--S.usedTimes===0){const T=p.indexOf(S);p[T]=p[p.length-1],p.pop(),m.delete(S.cacheKey),S.destroy()}}function R(S){d.remove(S)}function O(){d.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:R,programs:p,dispose:O}}function b1(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,d){r.get(c)[u]=d}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function A1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function kp(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(m,_,x,y,A,v){let g=r[e];return g===void 0?(g={id:m.id,object:m,geometry:_,material:x,groupOrder:y,renderOrder:m.renderOrder,z:A,group:v},r[e]=g):(g.id=m.id,g.object=m,g.geometry=_,g.material=x,g.groupOrder=y,g.renderOrder=m.renderOrder,g.z=A,g.group=v),e++,g}function u(m,_,x,y,A,v){const g=c(m,_,x,y,A,v);x.transmission>0?i.push(g):x.transparent===!0?a.push(g):t.push(g)}function d(m,_,x,y,A,v){const g=c(m,_,x,y,A,v);x.transmission>0?i.unshift(g):x.transparent===!0?a.unshift(g):t.unshift(g)}function h(m,_){t.length>1&&t.sort(m||A1),i.length>1&&i.sort(_||Vp),a.length>1&&a.sort(_||Vp)}function p(){for(let m=e,_=r.length;m<_;m++){const x=r[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:d,finish:p,sort:h}}function w1(){let r=new WeakMap;function e(i,a){const o=r.get(i);let c;return o===void 0?(c=new kp,r.set(i,[c])):a>=o.length?(c=new kp,o.push(c)):c=o[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function C1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new tt};break;case"SpotLight":t={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function R1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let P1=0;function D1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function L1(r){const e=new C1,t=R1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new H);const a=new H,o=new Wt,c=new Wt;function u(h){let p=0,m=0,_=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let x=0,y=0,A=0,v=0,g=0,L=0,I=0,D=0,F=0,B=0,R=0;h.sort(D1);for(let S=0,T=h.length;S<T;S++){const N=h[S],q=N.color,K=N.intensity,ne=N.distance;let ie=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Fs?ie=N.shadow.map.texture:ie=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=q.r*K,m+=q.g*K,_+=q.b*K;else if(N.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(N.sh.coefficients[ee],K);R++}else if(N.isDirectionalLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,oe=t.get(N);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.directionalShadow[x]=oe,i.directionalShadowMap[x]=ie,i.directionalShadowMatrix[x]=N.shadow.matrix,L++}i.directional[x]=ee,x++}else if(N.isSpotLight){const ee=e.get(N);ee.position.setFromMatrixPosition(N.matrixWorld),ee.color.copy(q).multiplyScalar(K),ee.distance=ne,ee.coneCos=Math.cos(N.angle),ee.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ee.decay=N.decay,i.spot[A]=ee;const $=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,$.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[A]=$.matrix,N.castShadow){const oe=t.get(N);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,i.spotShadow[A]=oe,i.spotShadowMap[A]=ie,D++}A++}else if(N.isRectAreaLight){const ee=e.get(N);ee.color.copy(q).multiplyScalar(K),ee.halfWidth.set(N.width*.5,0,0),ee.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=ee,v++}else if(N.isPointLight){const ee=e.get(N);if(ee.color.copy(N.color).multiplyScalar(N.intensity),ee.distance=N.distance,ee.decay=N.decay,N.castShadow){const $=N.shadow,oe=t.get(N);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,oe.shadowCameraNear=$.camera.near,oe.shadowCameraFar=$.camera.far,i.pointShadow[y]=oe,i.pointShadowMap[y]=ie,i.pointShadowMatrix[y]=N.shadow.matrix,I++}i.point[y]=ee,y++}else if(N.isHemisphereLight){const ee=e.get(N);ee.skyColor.copy(N.color).multiplyScalar(K),ee.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[g]=ee,g++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=_;const O=i.hash;(O.directionalLength!==x||O.pointLength!==y||O.spotLength!==A||O.rectAreaLength!==v||O.hemiLength!==g||O.numDirectionalShadows!==L||O.numPointShadows!==I||O.numSpotShadows!==D||O.numSpotMaps!==F||O.numLightProbes!==R)&&(i.directional.length=x,i.spot.length=A,i.rectArea.length=v,i.point.length=y,i.hemi.length=g,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=D+F-B,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=R,O.directionalLength=x,O.pointLength=y,O.spotLength=A,O.rectAreaLength=v,O.hemiLength=g,O.numDirectionalShadows=L,O.numPointShadows=I,O.numSpotShadows=D,O.numSpotMaps=F,O.numLightProbes=R,i.version=P1++)}function d(h,p){let m=0,_=0,x=0,y=0,A=0;const v=p.matrixWorldInverse;for(let g=0,L=h.length;g<L;g++){const I=h[g];if(I.isDirectionalLight){const D=i.directional[m];D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),m++}else if(I.isSpotLight){const D=i.spot[x];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),x++}else if(I.isRectAreaLight){const D=i.rectArea[y];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(v),c.identity(),o.copy(I.matrixWorld),o.premultiply(v),c.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),y++}else if(I.isPointLight){const D=i.point[_];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(v),_++}else if(I.isHemisphereLight){const D=i.hemi[A];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(v),A++}}}return{setup:u,setupView:d,state:i}}function Wp(r){const e=new L1(r),t=[],i=[];function a(p){h.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function I1(r){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new Wp(r),e.set(a,[u])):o>=c.length?(u=new Wp(r),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F1=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],O1=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Xp=new Wt,da=new H,su=new H;function B1(r,e,t){let i=new Sh;const a=new Xe,o=new Xe,c=new jt,u=new Mm,d=new YE,h={},p=t.maxTextureSize,m={[yr]:Jt,[Jt]:yr,[hi]:hi},_=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:U1,fragmentShader:N1}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const y=new yn;y.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new gn(y,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let g=this.type;this.render=function(B,R,O){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;B.type===FS&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Ko);const S=r.getRenderTarget(),T=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),q=r.state;q.setBlending(fi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=g!==this.type;K&&R.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(ie=>ie.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,ie=B.length;ne<ie;ne++){const ee=B[ne],$=ee.shadow;if($===void 0){Qe("WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const oe=$.getFrameExtents();if(a.multiply(oe),o.copy($.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/oe.x),a.x=o.x*oe.x,$.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/oe.y),a.y=o.y*oe.y,$.mapSize.y=o.y)),$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===pa){if(ee.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new pn(a.x,a.y,{format:Fs,type:Rn,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),$.map.texture.name=ee.name+".shadowMap",$.map.depthTexture=new ya(a.x,a.y,Li),$.map.depthTexture.name=ee.name+".shadowMapDepth",$.map.depthTexture.format=tr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Sn,$.map.depthTexture.magFilter=Sn}else{ee.isPointLight?($.map=new gm(a.x),$.map.depthTexture=new XE(a.x,Ni)):($.map=new pn(a.x,a.y),$.map.depthTexture=new ya(a.x,a.y,Ni)),$.map.depthTexture.name=ee.name+".shadowMap",$.map.depthTexture.format=tr;const Se=r.state.buffers.depth.getReversed();this.type===Ko?($.map.depthTexture.compareFunction=Se?xh:vh,$.map.depthTexture.minFilter=Pn,$.map.depthTexture.magFilter=Pn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Sn,$.map.depthTexture.magFilter=Sn)}$.camera.updateProjectionMatrix()}const we=$.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<we;Se++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,Se),r.clear();else{Se===0&&(r.setRenderTarget($.map),r.clear());const Ee=$.getViewport(Se);c.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),q.viewport(c)}if(ee.isPointLight){const Ee=$.camera,ut=$.matrix,it=ee.distance||Ee.far;it!==Ee.far&&(Ee.far=it,Ee.updateProjectionMatrix()),da.setFromMatrixPosition(ee.matrixWorld),Ee.position.copy(da),su.copy(Ee.position),su.add(F1[Se]),Ee.up.copy(O1[Se]),Ee.lookAt(su),Ee.updateMatrixWorld(),ut.makeTranslation(-da.x,-da.y,-da.z),Xp.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Xp,Ee.coordinateSystem,Ee.reversedDepth)}else $.updateMatrices(ee);i=$.getFrustum(),D(R,O,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===pa&&L($,O),$.needsUpdate=!1}g=this.type,v.needsUpdate=!1,r.setRenderTarget(S,T,N)};function L(B,R){const O=e.update(A);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new pn(a.x,a.y,{format:Fs,type:Rn})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(R,null,O,_,A,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(R,null,O,x,A,null)}function I(B,R,O,S){let T=null;const N=O.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)T=N;else if(T=O.isPointLight===!0?d:u,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=T.uuid,K=R.uuid;let ne=h[q];ne===void 0&&(ne={},h[q]=ne);let ie=ne[K];ie===void 0&&(ie=T.clone(),ne[K]=ie,R.addEventListener("dispose",F)),T=ie}if(T.visible=R.visible,T.wireframe=R.wireframe,S===pa?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:m[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=r.properties.get(T);q.light=O}return T}function D(B,R,O,S,T){if(B.visible===!1)return;if(B.layers.test(R.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===pa)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,B.matrixWorld);const K=e.update(B),ne=B.material;if(Array.isArray(ne)){const ie=K.groups;for(let ee=0,$=ie.length;ee<$;ee++){const oe=ie[ee],we=ne[oe.materialIndex];if(we&&we.visible){const Se=I(B,we,S,T);B.onBeforeShadow(r,B,R,O,K,Se,oe),r.renderBufferDirect(O,null,K,Se,B,oe),B.onAfterShadow(r,B,R,O,K,Se,oe)}}}else if(ne.visible){const ie=I(B,ne,S,T);B.onBeforeShadow(r,B,R,O,K,ie,null),r.renderBufferDirect(O,null,K,ie,B,null),B.onAfterShadow(r,B,R,O,K,ie,null)}}const q=B.children;for(let K=0,ne=q.length;K<ne;K++)D(q[K],R,O,S,T)}function F(B){B.target.removeEventListener("dispose",F);for(const O in h){const S=h[O],T=B.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const z1={[uu]:hu,[fu]:mu,[du]:gu,[Us]:pu,[hu]:uu,[mu]:fu,[gu]:du,[pu]:Us};function G1(r,e){function t(){let V=!1;const Ce=new jt;let ge=null;const Re=new jt(0,0,0,0);return{setMask:function(me){ge!==me&&!V&&(r.colorMask(me,me,me,me),ge=me)},setLocked:function(me){V=me},setClear:function(me,he,Me,je,Ot){Ot===!0&&(me*=je,he*=je,Me*=je),Ce.set(me,he,Me,je),Re.equals(Ce)===!1&&(r.clearColor(me,he,Me,je),Re.copy(Ce))},reset:function(){V=!1,ge=null,Re.set(-1,0,0,0)}}}function i(){let V=!1,Ce=!1,ge=null,Re=null,me=null;return{setReversed:function(he){if(Ce!==he){const Me=e.get("EXT_clip_control");he?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Ce=he;const je=me;me=null,this.setClear(je)}},getReversed:function(){return Ce},setTest:function(he){he?de(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(he){ge!==he&&!V&&(r.depthMask(he),ge=he)},setFunc:function(he){if(Ce&&(he=z1[he]),Re!==he){switch(he){case uu:r.depthFunc(r.NEVER);break;case hu:r.depthFunc(r.ALWAYS);break;case fu:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case du:r.depthFunc(r.EQUAL);break;case pu:r.depthFunc(r.GEQUAL);break;case mu:r.depthFunc(r.GREATER);break;case gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=he}},setLocked:function(he){V=he},setClear:function(he){me!==he&&(Ce&&(he=1-he),r.clearDepth(he),me=he)},reset:function(){V=!1,ge=null,Re=null,me=null,Ce=!1}}}function a(){let V=!1,Ce=null,ge=null,Re=null,me=null,he=null,Me=null,je=null,Ot=null;return{setTest:function(Rt){V||(Rt?de(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Rt){Ce!==Rt&&!V&&(r.stencilMask(Rt),Ce=Rt)},setFunc:function(Rt,ei,di){(ge!==Rt||Re!==ei||me!==di)&&(r.stencilFunc(Rt,ei,di),ge=Rt,Re=ei,me=di)},setOp:function(Rt,ei,di){(he!==Rt||Me!==ei||je!==di)&&(r.stencilOp(Rt,ei,di),he=Rt,Me=ei,je=di)},setLocked:function(Rt){V=Rt},setClear:function(Rt){Ot!==Rt&&(r.clearStencil(Rt),Ot=Rt)},reset:function(){V=!1,Ce=null,ge=null,Re=null,me=null,he=null,Me=null,je=null,Ot=null}}}const o=new t,c=new i,u=new a,d=new WeakMap,h=new WeakMap;let p={},m={},_=new WeakMap,x=[],y=null,A=!1,v=null,g=null,L=null,I=null,D=null,F=null,B=null,R=new tt(0,0,0),O=0,S=!1,T=null,N=null,q=null,K=null,ne=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const oe=r.getParameter(r.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ee=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ee=$>=2);let we=null,Se={};const Ee=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),it=new jt().fromArray(Ee),Ht=new jt().fromArray(ut);function bt(V,Ce,ge,Re){const me=new Uint8Array(4),he=r.createTexture();r.bindTexture(V,he),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Me=0;Me<ge;Me++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(Ce+Me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return he}const ae={};ae[r.TEXTURE_2D]=bt(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(r.DEPTH_TEST),c.setFunc(Us),st(!1),Lt(Wd),de(r.CULL_FACE),rt(fi);function de(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Pe(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function Je(V,Ce){return m[V]!==Ce?(r.bindFramebuffer(V,Ce),m[V]=Ce,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ce),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function ze(V,Ce){let ge=x,Re=!1;if(V){ge=_.get(Ce),ge===void 0&&(ge=[],_.set(Ce,ge));const me=V.textures;if(ge.length!==me.length||ge[0]!==r.COLOR_ATTACHMENT0){for(let he=0,Me=me.length;he<Me;he++)ge[he]=r.COLOR_ATTACHMENT0+he;ge.length=me.length,Re=!0}}else ge[0]!==r.BACK&&(ge[0]=r.BACK,Re=!0);Re&&r.drawBuffers(ge)}function mt(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const Yt={[Vr]:r.FUNC_ADD,[BS]:r.FUNC_SUBTRACT,[zS]:r.FUNC_REVERSE_SUBTRACT};Yt[GS]=r.MIN,Yt[HS]=r.MAX;const vt={[VS]:r.ZERO,[kS]:r.ONE,[WS]:r.SRC_COLOR,[lu]:r.SRC_ALPHA,[$S]:r.SRC_ALPHA_SATURATE,[KS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[XS]:r.ONE_MINUS_SRC_COLOR,[cu]:r.ONE_MINUS_SRC_ALPHA,[ZS]:r.ONE_MINUS_DST_COLOR,[YS]:r.ONE_MINUS_DST_ALPHA,[JS]:r.CONSTANT_COLOR,[jS]:r.ONE_MINUS_CONSTANT_COLOR,[QS]:r.CONSTANT_ALPHA,[eE]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(V,Ce,ge,Re,me,he,Me,je,Ot,Rt){if(V===fi){A===!0&&(Pe(r.BLEND),A=!1);return}if(A===!1&&(de(r.BLEND),A=!0),V!==OS){if(V!==v||Rt!==S){if((g!==Vr||D!==Vr)&&(r.blendEquation(r.FUNC_ADD),g=Vr,D=Vr),Rt)switch(V){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFunc(r.ONE,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",V);break}else switch(V){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Xd:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qd:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",V);break}L=null,I=null,F=null,B=null,R.set(0,0,0),O=0,v=V,S=Rt}return}me=me||Ce,he=he||ge,Me=Me||Re,(Ce!==g||me!==D)&&(r.blendEquationSeparate(Yt[Ce],Yt[me]),g=Ce,D=me),(ge!==L||Re!==I||he!==F||Me!==B)&&(r.blendFuncSeparate(vt[ge],vt[Re],vt[he],vt[Me]),L=ge,I=Re,F=he,B=Me),(je.equals(R)===!1||Ot!==O)&&(r.blendColor(je.r,je.g,je.b,Ot),R.copy(je),O=Ot),v=V,S=!1}function Tt(V,Ce){V.side===hi?Pe(r.CULL_FACE):de(r.CULL_FACE);let ge=V.side===Jt;Ce&&(ge=!ge),st(ge),V.blending===Ls&&V.transparent===!1?rt(fi):rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const Re=V.stencilWrite;u.setTest(Re),Re&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Zt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){T!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),T=V)}function Lt(V){V!==US?(de(r.CULL_FACE),V!==N&&(V===Wd?r.cullFace(r.BACK):V===NS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),N=V}function z(V){V!==q&&(ee&&r.lineWidth(V),q=V)}function Zt(V,Ce,ge){V?(de(r.POLYGON_OFFSET_FILL),(K!==Ce||ne!==ge)&&(r.polygonOffset(Ce,ge),K=Ce,ne=ge)):Pe(r.POLYGON_OFFSET_FILL)}function xt(V){V?de(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function pt(V){V===void 0&&(V=r.TEXTURE0+ie-1),we!==V&&(r.activeTexture(V),we=V)}function Ue(V,Ce,ge){ge===void 0&&(we===null?ge=r.TEXTURE0+ie-1:ge=we);let Re=Se[ge];Re===void 0&&(Re={type:void 0,texture:void 0},Se[ge]=Re),(Re.type!==V||Re.texture!==Ce)&&(we!==ge&&(r.activeTexture(ge),we=ge),r.bindTexture(V,Ce||ae[V]),Re.type=V,Re.texture=Ce)}function P(){const V=Se[we];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function se(){try{r.texSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function ue(){try{r.texSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function te(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Ge(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function _e(){try{r.texStorage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function Fe(){try{r.texStorage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function qe(){try{r.texImage2D(...arguments)}catch(V){Ct("WebGLState:",V)}}function pe(){try{r.texImage3D(...arguments)}catch(V){Ct("WebGLState:",V)}}function xe(V){it.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),it.copy(V))}function Ie(V){Ht.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ht.copy(V))}function Oe(V,Ce){let ge=h.get(Ce);ge===void 0&&(ge=new WeakMap,h.set(Ce,ge));let Re=ge.get(V);Re===void 0&&(Re=r.getUniformBlockIndex(Ce,V.name),ge.set(V,Re))}function ve(V,Ce){const Re=h.get(Ce).get(V);d.get(Ce)!==Re&&(r.uniformBlockBinding(Ce,Re,V.__bindingPointIndex),d.set(Ce,Re))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},we=null,Se={},m={},_=new WeakMap,x=[],y=null,A=!1,v=null,g=null,L=null,I=null,D=null,F=null,B=null,R=new tt(0,0,0),O=0,S=!1,T=null,N=null,q=null,K=null,ne=null,it.set(0,0,r.canvas.width,r.canvas.height),Ht.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:de,disable:Pe,bindFramebuffer:Je,drawBuffers:ze,useProgram:mt,setBlending:rt,setMaterial:Tt,setFlipSided:st,setCullFace:Lt,setLineWidth:z,setPolygonOffset:Zt,setScissorTest:xt,activeTexture:pt,bindTexture:Ue,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:qe,texImage3D:pe,updateUBOMapping:Oe,uniformBlockBinding:ve,texStorage2D:_e,texStorage3D:Fe,texSubImage2D:se,texSubImage3D:ue,compressedTexSubImage2D:te,compressedTexSubImage3D:Ge,scissor:xe,viewport:Ie,reset:at}}function H1(r,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xe,p=new WeakMap;let m;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,E){return x?new OffscreenCanvas(P,E):Sa("canvas")}function A(P,E,k){let se=1;const ue=Ue(P);if((ue.width>k||ue.height>k)&&(se=k/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(se*ue.width),Ge=Math.floor(se*ue.height);m===void 0&&(m=y(te,Ge));const _e=E?y(te,Ge):m;return _e.width=te,_e.height=Ge,_e.getContext("2d").drawImage(P,0,0,te,Ge),Qe("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+te+"x"+Ge+")."),_e}else return"data"in P&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function v(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(P,E,k,se,ue=!1){if(P!==null){if(r[P]!==void 0)return r[P];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=E;if(E===r.RED&&(k===r.FLOAT&&(te=r.R32F),k===r.HALF_FLOAT&&(te=r.R16F),k===r.UNSIGNED_BYTE&&(te=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(te=r.R8UI),k===r.UNSIGNED_SHORT&&(te=r.R16UI),k===r.UNSIGNED_INT&&(te=r.R32UI),k===r.BYTE&&(te=r.R8I),k===r.SHORT&&(te=r.R16I),k===r.INT&&(te=r.R32I)),E===r.RG&&(k===r.FLOAT&&(te=r.RG32F),k===r.HALF_FLOAT&&(te=r.RG16F),k===r.UNSIGNED_BYTE&&(te=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(te=r.RG8UI),k===r.UNSIGNED_SHORT&&(te=r.RG16UI),k===r.UNSIGNED_INT&&(te=r.RG32UI),k===r.BYTE&&(te=r.RG8I),k===r.SHORT&&(te=r.RG16I),k===r.INT&&(te=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(te=r.RGB8UI),k===r.UNSIGNED_SHORT&&(te=r.RGB16UI),k===r.UNSIGNED_INT&&(te=r.RGB32UI),k===r.BYTE&&(te=r.RGB8I),k===r.SHORT&&(te=r.RGB16I),k===r.INT&&(te=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(te=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(te=r.RGBA16UI),k===r.UNSIGNED_INT&&(te=r.RGBA32UI),k===r.BYTE&&(te=r.RGBA8I),k===r.SHORT&&(te=r.RGBA16I),k===r.INT&&(te=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(te=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(te=r.R11F_G11F_B10F)),E===r.RGBA){const Ge=ue?nl:yt.getTransfer(se);k===r.FLOAT&&(te=r.RGBA32F),k===r.HALF_FLOAT&&(te=r.RGBA16F),k===r.UNSIGNED_BYTE&&(te=Ge===Ft?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(P,E){let k;return P?E===null||E===Ni||E===Ma?k=r.DEPTH24_STENCIL8:E===Li?k=r.DEPTH32F_STENCIL8:E===xa&&(k=r.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===Ma?k=r.DEPTH_COMPONENT24:E===Li?k=r.DEPTH_COMPONENT32F:E===xa&&(k=r.DEPTH_COMPONENT16),k}function F(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function B(P){const E=P.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&p.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),T(E)}function O(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,se=_.get(k);if(se){const ue=se[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(P),Object.keys(se).length===0&&_.delete(k)}i.remove(P)}function S(P){const E=i.get(P);r.deleteTexture(E.__webglTexture);const k=P.source,se=_.get(k);delete se[E.__cacheKey],c.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ue=0;ue<E.__webglFramebuffer[se].length;ue++)r.deleteFramebuffer(E.__webglFramebuffer[se][ue]);else r.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)r.deleteFramebuffer(E.__webglFramebuffer[se]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let se=0,ue=k.length;se<ue;se++){const te=i.get(k[se]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),c.memory.textures--),i.remove(k[se])}i.remove(P)}let N=0;function q(){N=0}function K(){const P=N;return P>=a.maxTextures&&Qe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),N+=1,P}function ne(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ie(P,E){const k=i.get(P);if(P.isVideoTexture&&xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const se=P.image;if(se===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,P,E);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function ee(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ae(k,P,E);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function $(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ae(k,P,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function oe(P,E){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){de(k,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const we={[xu]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[Mu]:r.MIRRORED_REPEAT},Se={[Sn]:r.NEAREST,[iE]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},Ee={[oE]:r.NEVER,[fE]:r.ALWAYS,[lE]:r.LESS,[vh]:r.LEQUAL,[cE]:r.EQUAL,[xh]:r.GEQUAL,[uE]:r.GREATER,[hE]:r.NOTEQUAL};function ut(P,E){if(E.type===Li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Ac||E.magFilter===Mo||E.magFilter===Wr||E.minFilter===Pn||E.minFilter===Ac||E.minFilter===Mo||E.minFilter===Wr)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,we[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,we[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,we[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Se[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Mo&&E.minFilter!==Wr||E.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function it(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",B));const se=E.source;let ue=_.get(se);ue===void 0&&(ue={},_.set(se,ue));const te=ne(E);if(te!==P.__cacheKey){ue[te]===void 0&&(ue[te]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,k=!0),ue[te].usedTimes++;const Ge=ue[P.__cacheKey];Ge!==void 0&&(ue[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&S(E)),P.__cacheKey=te,P.__webglTexture=ue[te].texture}return k}function Ht(P,E,k){return Math.floor(Math.floor(P/k)/E)}function bt(P,E,k,se){const te=P.updateRanges;if(te.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,se,E.data);else{te.sort((pe,xe)=>pe.start-xe.start);let Ge=0;for(let pe=1;pe<te.length;pe++){const xe=te[Ge],Ie=te[pe],Oe=xe.start+xe.count,ve=Ht(Ie.start,E.width,4),at=Ht(xe.start,E.width,4);Ie.start<=Oe+1&&ve===at&&Ht(Ie.start+Ie.count-1,E.width,4)===ve?xe.count=Math.max(xe.count,Ie.start+Ie.count-xe.start):(++Ge,te[Ge]=Ie)}te.length=Ge+1;const _e=r.getParameter(r.UNPACK_ROW_LENGTH),Fe=r.getParameter(r.UNPACK_SKIP_PIXELS),qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let pe=0,xe=te.length;pe<xe;pe++){const Ie=te[pe],Oe=Math.floor(Ie.start/4),ve=Math.ceil(Ie.count/4),at=Oe%E.width,V=Math.floor(Oe/E.width),Ce=ve,ge=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,at,V,Ce,ge,k,se,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,_e),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,qe)}}function ae(P,E,k){let se=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=r.TEXTURE_3D);const ue=it(P,E),te=E.source;t.bindTexture(se,P.__webglTexture,r.TEXTURE0+k);const Ge=i.get(te);if(te.version!==Ge.__version||ue===!0){t.activeTexture(r.TEXTURE0+k);const _e=yt.getPrimaries(yt.workingColorSpace),Fe=E.colorSpace===Mr?null:yt.getPrimaries(E.colorSpace),qe=E.colorSpace===Mr||_e===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let pe=A(E.image,!1,a.maxTextureSize);pe=pt(E,pe);const xe=o.convert(E.format,E.colorSpace),Ie=o.convert(E.type);let Oe=I(E.internalFormat,xe,Ie,E.colorSpace,E.isVideoTexture);ut(se,E);let ve;const at=E.mipmaps,V=E.isVideoTexture!==!0,Ce=Ge.__version===void 0||ue===!0,ge=te.dataReady,Re=F(E,pe);if(E.isDepthTexture)Oe=D(E.format===Xr,E.type),Ce&&(V?t.texStorage2D(r.TEXTURE_2D,1,Oe,pe.width,pe.height):t.texImage2D(r.TEXTURE_2D,0,Oe,pe.width,pe.height,0,xe,Ie,null));else if(E.isDataTexture)if(at.length>0){V&&Ce&&t.texStorage2D(r.TEXTURE_2D,Re,Oe,at[0].width,at[0].height);for(let me=0,he=at.length;me<he;me++)ve=at[me],V?ge&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ve.width,ve.height,xe,Ie,ve.data):t.texImage2D(r.TEXTURE_2D,me,Oe,ve.width,ve.height,0,xe,Ie,ve.data);E.generateMipmaps=!1}else V?(Ce&&t.texStorage2D(r.TEXTURE_2D,Re,Oe,pe.width,pe.height),ge&&bt(E,pe,xe,Ie)):t.texImage2D(r.TEXTURE_2D,0,Oe,pe.width,pe.height,0,xe,Ie,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,at[0].width,at[0].height,pe.depth);for(let me=0,he=at.length;me<he;me++)if(ve=at[me],E.format!==Ti)if(xe!==null)if(V){if(ge)if(E.layerUpdates.size>0){const Me=Ep(ve.width,ve.height,E.format,E.type);for(const je of E.layerUpdates){const Ot=ve.data.subarray(je*Me/ve.data.BYTES_PER_ELEMENT,(je+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,je,ve.width,ve.height,1,xe,Ot)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,pe.depth,xe,ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Oe,ve.width,ve.height,pe.depth,0,ve.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ge&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,pe.depth,xe,Ie,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,Oe,ve.width,ve.height,pe.depth,0,xe,Ie,ve.data)}else{V&&Ce&&t.texStorage2D(r.TEXTURE_2D,Re,Oe,at[0].width,at[0].height);for(let me=0,he=at.length;me<he;me++)ve=at[me],E.format!==Ti?xe!==null?V?ge&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,ve.width,ve.height,xe,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,me,Oe,ve.width,ve.height,0,ve.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ge&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,ve.width,ve.height,xe,Ie,ve.data):t.texImage2D(r.TEXTURE_2D,me,Oe,ve.width,ve.height,0,xe,Ie,ve.data)}else if(E.isDataArrayTexture)if(V){if(Ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Oe,pe.width,pe.height,pe.depth),ge)if(E.layerUpdates.size>0){const me=Ep(pe.width,pe.height,E.format,E.type);for(const he of E.layerUpdates){const Me=pe.data.subarray(he*me/pe.data.BYTES_PER_ELEMENT,(he+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,pe.width,pe.height,1,xe,Ie,Me)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ie,pe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,pe.width,pe.height,pe.depth,0,xe,Ie,pe.data);else if(E.isData3DTexture)V?(Ce&&t.texStorage3D(r.TEXTURE_3D,Re,Oe,pe.width,pe.height,pe.depth),ge&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,xe,Ie,pe.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,pe.width,pe.height,pe.depth,0,xe,Ie,pe.data);else if(E.isFramebufferTexture){if(Ce)if(V)t.texStorage2D(r.TEXTURE_2D,Re,Oe,pe.width,pe.height);else{let me=pe.width,he=pe.height;for(let Me=0;Me<Re;Me++)t.texImage2D(r.TEXTURE_2D,Me,Oe,me,he,0,xe,Ie,null),me>>=1,he>>=1}}else if(at.length>0){if(V&&Ce){const me=Ue(at[0]);t.texStorage2D(r.TEXTURE_2D,Re,Oe,me.width,me.height)}for(let me=0,he=at.length;me<he;me++)ve=at[me],V?ge&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,xe,Ie,ve):t.texImage2D(r.TEXTURE_2D,me,Oe,xe,Ie,ve);E.generateMipmaps=!1}else if(V){if(Ce){const me=Ue(pe);t.texStorage2D(r.TEXTURE_2D,Re,Oe,me.width,me.height)}ge&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,Ie,pe)}else t.texImage2D(r.TEXTURE_2D,0,Oe,xe,Ie,pe);v(E)&&g(se),Ge.__version=te.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,k){if(E.image.length!==6)return;const se=it(P,E),ue=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);const te=i.get(ue);if(ue.version!==te.__version||se===!0){t.activeTexture(r.TEXTURE0+k);const Ge=yt.getPrimaries(yt.workingColorSpace),_e=E.colorSpace===Mr?null:yt.getPrimaries(E.colorSpace),Fe=E.colorSpace===Mr||Ge===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const qe=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let he=0;he<6;he++)!qe&&!pe?xe[he]=A(E.image[he],!0,a.maxCubemapSize):xe[he]=pe?E.image[he].image:E.image[he],xe[he]=pt(E,xe[he]);const Ie=xe[0],Oe=o.convert(E.format,E.colorSpace),ve=o.convert(E.type),at=I(E.internalFormat,Oe,ve,E.colorSpace),V=E.isVideoTexture!==!0,Ce=te.__version===void 0||se===!0,ge=ue.dataReady;let Re=F(E,Ie);ut(r.TEXTURE_CUBE_MAP,E);let me;if(qe){V&&Ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,at,Ie.width,Ie.height);for(let he=0;he<6;he++){me=xe[he].mipmaps;for(let Me=0;Me<me.length;Me++){const je=me[Me];E.format!==Ti?Oe!==null?V?ge&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me,0,0,je.width,je.height,Oe,je.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me,at,je.width,je.height,0,je.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me,0,0,je.width,je.height,Oe,ve,je.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me,at,je.width,je.height,0,Oe,ve,je.data)}}}else{if(me=E.mipmaps,V&&Ce){me.length>0&&Re++;const he=Ue(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,at,he.width,he.height)}for(let he=0;he<6;he++)if(pe){V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,xe[he].width,xe[he].height,Oe,ve,xe[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,xe[he].width,xe[he].height,0,Oe,ve,xe[he].data);for(let Me=0;Me<me.length;Me++){const Ot=me[Me].image[he].image;V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me+1,0,0,Ot.width,Ot.height,Oe,ve,Ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me+1,at,Ot.width,Ot.height,0,Oe,ve,Ot.data)}}else{V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,ve,xe[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Oe,ve,xe[he]);for(let Me=0;Me<me.length;Me++){const je=me[Me];V?ge&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me+1,0,0,Oe,ve,je.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me+1,at,Oe,ve,je.image[he])}}}v(E)&&g(r.TEXTURE_CUBE_MAP),te.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Pe(P,E,k,se,ue,te){const Ge=o.convert(k.format,k.colorSpace),_e=o.convert(k.type),Fe=I(k.internalFormat,Ge,_e,k.colorSpace),qe=i.get(E),pe=i.get(k);if(pe.__renderTarget=E,!qe.__hasExternalTextures){const xe=Math.max(1,E.width>>te),Ie=Math.max(1,E.height>>te);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,te,Fe,xe,Ie,E.depth,0,Ge,_e,null):t.texImage2D(ue,te,Fe,xe,Ie,0,Ge,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Zt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ue,pe.__webglTexture,0,z(E)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ue,pe.__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const se=E.depthTexture,ue=se&&se.isDepthTexture?se.type:null,te=D(E.stencilBuffer,ue),Ge=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Zt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(E),te,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(E),te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,P)}else{const se=E.textures;for(let ue=0;ue<se.length;ue++){const te=se[ue],Ge=o.convert(te.format,te.colorSpace),_e=o.convert(te.type),Fe=I(te.internalFormat,Ge,_e,te.colorSpace);Zt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(E),Fe,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(E),Fe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ze(P,E,k){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(E.depthTexture);if(ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ue.__webglTexture===void 0){ue.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),ut(r.TEXTURE_CUBE_MAP,E.depthTexture);const qe=o.convert(E.depthTexture.format),pe=o.convert(E.depthTexture.type);let xe;E.depthTexture.format===tr?xe=r.DEPTH_COMPONENT24:E.depthTexture.format===Xr&&(xe=r.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,xe,E.width,E.height,0,qe,pe,null)}}else ie(E.depthTexture,0);const te=ue.__webglTexture,Ge=z(E),_e=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Fe=E.depthTexture.format===Xr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===tr)Zt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Fe,_e,te,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Fe,_e,te,0);else if(E.depthTexture.format===Xr)Zt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Fe,_e,te,0,Ge):r.framebufferTexture2D(r.FRAMEBUFFER,Fe,_e,te,0);else throw new Error("Unknown depthTexture format")}function mt(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=se}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)ze(E.__webglFramebuffer[se],P,se);else{const se=P.texture.mipmaps;se&&se.length>0?ze(E.__webglFramebuffer[0],P,0):ze(E.__webglFramebuffer,P,0)}else if(k){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=r.createRenderbuffer(),Je(E.__webglDepthbuffer[se],P,!1);else{const ue=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,te)}}else{const se=P.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Je(E.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,te)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(P,E,k){const se=i.get(P);E!==void 0&&Pe(se.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&mt(P)}function vt(P){const E=P.texture,k=i.get(P),se=i.get(E);P.addEventListener("dispose",R);const ue=P.textures,te=P.isWebGLCubeRenderTarget===!0,Ge=ue.length>1;if(Ge||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=E.version,c.memory.textures++),te){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)k.__webglFramebuffer[_e][Fe]=r.createFramebuffer()}else k.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[_e]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let _e=0,Fe=ue.length;_e<Fe;_e++){const qe=i.get(ue[_e]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&Zt(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let _e=0;_e<ue.length;_e++){const Fe=ue[_e];k.__webglColorRenderbuffer[_e]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[_e]);const qe=o.convert(Fe.format,Fe.colorSpace),pe=o.convert(Fe.type),xe=I(Fe.internalFormat,qe,pe,Fe.colorSpace,P.isXRRenderTarget===!0),Ie=z(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,xe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,k.__webglColorRenderbuffer[_e])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),ut(r.TEXTURE_CUBE_MAP,E);for(let _e=0;_e<6;_e++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Pe(k.__webglFramebuffer[_e][Fe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe);else Pe(k.__webglFramebuffer[_e],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let _e=0,Fe=ue.length;_e<Fe;_e++){const qe=ue[_e],pe=i.get(qe);let xe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,pe.__webglTexture),ut(xe,qe),Pe(k.__webglFramebuffer,P,qe,r.COLOR_ATTACHMENT0+_e,xe,0),v(qe)&&g(xe)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),ut(_e,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Pe(k.__webglFramebuffer[Fe],P,E,r.COLOR_ATTACHMENT0,_e,Fe);else Pe(k.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,_e,0);v(E)&&g(_e),t.unbindTexture()}P.depthBuffer&&mt(P)}function rt(P){const E=P.textures;for(let k=0,se=E.length;k<se;k++){const ue=E[k];if(v(ue)){const te=L(P),Ge=i.get(ue).__webglTexture;t.bindTexture(te,Ge),g(te),t.unbindTexture()}}}const Tt=[],st=[];function Lt(P){if(P.samples>0){if(Zt(P)===!1){const E=P.textures,k=P.width,se=P.height;let ue=r.COLOR_BUFFER_BIT;const te=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=i.get(P),_e=E.length>1;if(_e)for(let qe=0;qe<E.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Fe=P.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let qe=0;qe<E.length;qe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),_e){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const pe=i.get(E[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pe,0)}r.blitFramebuffer(0,0,k,se,0,0,k,se,ue,r.NEAREST),d===!0&&(Tt.length=0,st.length=0,Tt.push(r.COLOR_ATTACHMENT0+qe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Tt.push(te),st.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_e)for(let qe=0;qe<E.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const pe=i.get(E[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function z(P){return Math.min(a.maxSamples,P.samples)}function Zt(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(P){const E=c.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function pt(P,E){const k=P.colorSpace,se=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Os&&k!==Mr&&(yt.getTransfer(k)===Ft?(se!==Ti||ue!==jn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",k)),E}function Ue(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=ie,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Yt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V1(r,e){function t(i,a=Mr){let o;const c=yt.getTransfer(a);if(i===jn)return r.UNSIGNED_BYTE;if(i===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(i===tm)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===nm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qp)return r.BYTE;if(i===em)return r.SHORT;if(i===xa)return r.UNSIGNED_SHORT;if(i===fh)return r.INT;if(i===Ni)return r.UNSIGNED_INT;if(i===Li)return r.FLOAT;if(i===Rn)return r.HALF_FLOAT;if(i===im)return r.ALPHA;if(i===rm)return r.RGB;if(i===Ti)return r.RGBA;if(i===tr)return r.DEPTH_COMPONENT;if(i===Xr)return r.DEPTH_STENCIL;if(i===sm)return r.RED;if(i===mh)return r.RED_INTEGER;if(i===Fs)return r.RG;if(i===gh)return r.RG_INTEGER;if(i===_h)return r.RGBA_INTEGER;if(i===Zo||i===$o||i===Jo||i===jo)if(c===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===Eu||i===yu||i===Tu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Su)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bu||i===Au||i===wu||i===Cu||i===Ru||i===Pu||i===Du)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===bu||i===Au)return c===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===wu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cu)return o.COMPRESSED_R11_EAC;if(i===Ru)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Pu)return o.COMPRESSED_RG11_EAC;if(i===Du)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lu||i===Iu||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===zu||i===Gu||i===Hu||i===Vu||i===ku||i===Wu||i===Xu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Lu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Iu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ou)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ku)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xu)return c===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qu||i===Yu||i===Ku)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===qu)return c===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zu||i===$u||i===Ju||i===ju)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Zu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$u)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ju)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mn({vertexShader:k1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends Kr{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,p=null,m=null,_=null,x=null,y=null;const A=typeof XRWebGLBinding<"u",v=new X1,g={},L=t.getContextAttributes();let I=null,D=null;const F=[],B=[],R=new Xe;let O=null;const S=new mn;S.viewport=new jt;const T=new mn;T.viewport=new jt;const N=[S,T],q=new ey;let K=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let de=F[ae];return de===void 0&&(de=new Kc,F[ae]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ae){let de=F[ae];return de===void 0&&(de=new Kc,F[ae]=de),de.getGripSpace()},this.getHand=function(ae){let de=F[ae];return de===void 0&&(de=new Kc,F[ae]=de),de.getHandSpace()};function ie(ae){const de=B.indexOf(ae.inputSource);if(de===-1)return;const Pe=F[de];Pe!==void 0&&(Pe.update(ae.inputSource,ae.frame,h||c),Pe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ee(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",$);for(let ae=0;ae<F.length;ae++){const de=B[ae];de!==null&&(B[ae]=null,F[ae].disconnect(de))}K=null,ne=null,v.reset();for(const ae in g)delete g[ae];e.setRenderTarget(I),x=null,_=null,m=null,a=null,D=null,bt.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){u=ae,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(a,t)),m},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(R),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Je=null,ze=null;L.depth&&(ze=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=L.stencil?Xr:tr,Je=L.stencil?Ma:Ni);const mt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:o};m=this.getBinding(),_=m.createProjectionLayer(mt),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new pn(_.textureWidth,_.textureHeight,{format:Ti,type:jn,depthTexture:new ya(_.textureWidth,_.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Pe={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,Pe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new pn(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),bt.setContext(a),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(ae){for(let de=0;de<ae.removed.length;de++){const Pe=ae.removed[de],Je=B.indexOf(Pe);Je>=0&&(B[Je]=null,F[Je].disconnect(Pe))}for(let de=0;de<ae.added.length;de++){const Pe=ae.added[de];let Je=B.indexOf(Pe);if(Je===-1){for(let mt=0;mt<F.length;mt++)if(mt>=B.length){B.push(Pe),Je=mt;break}else if(B[mt]===null){B[mt]=Pe,Je=mt;break}if(Je===-1)break}const ze=F[Je];ze&&ze.connect(Pe)}}const oe=new H,we=new H;function Se(ae,de,Pe){oe.setFromMatrixPosition(de.matrixWorld),we.setFromMatrixPosition(Pe.matrixWorld);const Je=oe.distanceTo(we),ze=de.projectionMatrix.elements,mt=Pe.projectionMatrix.elements,Yt=ze[14]/(ze[10]-1),vt=ze[14]/(ze[10]+1),rt=(ze[9]+1)/ze[5],Tt=(ze[9]-1)/ze[5],st=(ze[8]-1)/ze[0],Lt=(mt[8]+1)/mt[0],z=Yt*st,Zt=Yt*Lt,xt=Je/(-st+Lt),pt=xt*-st;if(de.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(pt),ae.translateZ(xt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),ze[10]===-1)ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ue=Yt+xt,P=vt+xt,E=z-pt,k=Zt+(Je-pt),se=rt*vt/P*Ue,ue=Tt*vt/P*Ue;ae.projectionMatrix.makePerspective(E,k,se,ue,Ue,P),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Ee(ae,de){de===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(de.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let de=ae.near,Pe=ae.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Pe=v.depthFar)),q.near=T.near=S.near=de,q.far=T.far=S.far=Pe,(K!==q.near||ne!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,ne=q.far),q.layers.mask=ae.layers.mask|6,S.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;const Je=ae.parent,ze=q.cameras;Ee(q,Je);for(let mt=0;mt<ze.length;mt++)Ee(ze[mt],Je);ze.length===2?Se(q,S,T):q.projectionMatrix.copy(S.projectionMatrix),ut(ae,q,Je)};function ut(ae,de,Pe){Pe===null?ae.matrix.copy(de.matrixWorld):(ae.matrix.copy(Pe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(de.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(de.projectionMatrix),ae.projectionMatrixInverse.copy(de.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Qu*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(ae){d=ae,_!==null&&(_.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(q)},this.getCameraTexture=function(ae){return g[ae]};let it=null;function Ht(ae,de){if(p=de.getViewerPose(h||c),y=de,p!==null){const Pe=p.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Je=!1;Pe.length!==q.cameras.length&&(q.cameras.length=0,Je=!0);for(let vt=0;vt<Pe.length;vt++){const rt=Pe[vt];let Tt=null;if(x!==null)Tt=x.getViewport(rt);else{const Lt=m.getViewSubImage(_,rt);Tt=Lt.viewport,vt===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let st=N[vt];st===void 0&&(st=new mn,st.layers.enable(vt),st.viewport=new jt,N[vt]=st),st.matrix.fromArray(rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),vt===0&&(q.matrix.copy(st.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Je===!0&&q.cameras.push(st)}const ze=a.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){m=i.getBinding();const vt=m.getDepthInformation(Pe[0]);vt&&vt.isValid&&vt.texture&&v.init(vt,a.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),m=i.getBinding();for(let vt=0;vt<Pe.length;vt++){const rt=Pe[vt].camera;if(rt){let Tt=g[rt];Tt||(Tt=new vm,g[rt]=Tt);const st=m.getCameraImage(rt);Tt.sourceTexture=st}}}}for(let Pe=0;Pe<F.length;Pe++){const Je=B[Pe],ze=F[Pe];Je!==null&&ze!==void 0&&ze.update(Je,de,h||c)}it&&it(ae,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),y=null}const bt=new Em;bt.setAnimationLoop(Ht),this.setAnimationLoop=function(ae){it=ae},this.dispose=function(){}}}const Hr=new Fi,Y1=new Wt;function K1(r,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,dm(r)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,L,I,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(v,g):g.isMeshToonMaterial?(o(v,g),m(v,g)):g.isMeshPhongMaterial?(o(v,g),p(v,g)):g.isMeshStandardMaterial?(o(v,g),_(v,g),g.isMeshPhysicalMaterial&&x(v,g,D)):g.isMeshMatcapMaterial?(o(v,g),y(v,g)):g.isMeshDepthMaterial?o(v,g):g.isMeshDistanceMaterial?(o(v,g),A(v,g)):g.isMeshNormalMaterial?o(v,g):g.isLineBasicMaterial?(c(v,g),g.isLineDashedMaterial&&u(v,g)):g.isPointsMaterial?d(v,g,L,I):g.isSpriteMaterial?h(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Jt&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Jt&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const L=e.get(g),I=L.envMap,D=L.envMapRotation;I&&(v.envMap.value=I,Hr.copy(D),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),v.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(Hr)),v.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function c(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function u(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function d(v,g,L,I){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*L,v.scale.value=I*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function h(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function m(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function _(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function x(v,g,L){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,g){g.matcap&&(v.matcap.value=g.matcap)}function A(v,g){const L=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Z1(r,e,t,i){let a={},o={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,I){const D=I.program;i.uniformBlockBinding(L,D)}function h(L,I){let D=a[L.id];D===void 0&&(y(L),D=p(L),a[L.id]=D,L.addEventListener("dispose",v));const F=I.program;i.updateUBOMapping(L,F);const B=e.render.frame;o[L.id]!==B&&(_(L),o[L.id]=B)}function p(L){const I=m();L.__bindingPointIndex=I;const D=r.createBuffer(),F=L.__size,B=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,D),D}function m(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const I=a[L.id],D=L.uniforms,F=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let B=0,R=D.length;B<R;B++){const O=Array.isArray(D[B])?D[B]:[D[B]];for(let S=0,T=O.length;S<T;S++){const N=O[S];if(x(N,B,S,F)===!0){const q=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let ne=0;for(let ie=0;ie<K.length;ie++){const ee=K[ie],$=A(ee);typeof ee=="number"||typeof ee=="boolean"?(N.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,q+ne,N.__data)):ee.isMatrix3?(N.__data[0]=ee.elements[0],N.__data[1]=ee.elements[1],N.__data[2]=ee.elements[2],N.__data[3]=0,N.__data[4]=ee.elements[3],N.__data[5]=ee.elements[4],N.__data[6]=ee.elements[5],N.__data[7]=0,N.__data[8]=ee.elements[6],N.__data[9]=ee.elements[7],N.__data[10]=ee.elements[8],N.__data[11]=0):(ee.toArray(N.__data,ne),ne+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,I,D,F){const B=L.value,R=I+"_"+D;if(F[R]===void 0)return typeof B=="number"||typeof B=="boolean"?F[R]=B:F[R]=B.clone(),!0;{const O=F[R];if(typeof B=="number"||typeof B=="boolean"){if(O!==B)return F[R]=B,!0}else if(O.equals(B)===!1)return O.copy(B),!0}return!1}function y(L){const I=L.uniforms;let D=0;const F=16;for(let R=0,O=I.length;R<O;R++){const S=Array.isArray(I[R])?I[R]:[I[R]];for(let T=0,N=S.length;T<N;T++){const q=S[T],K=Array.isArray(q.value)?q.value:[q.value];for(let ne=0,ie=K.length;ne<ie;ne++){const ee=K[ne],$=A(ee),oe=D%F,we=oe%$.boundary,Se=oe+we;D+=we,Se!==0&&F-Se<$.storage&&(D+=F-Se),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=$.storage}}}const B=D%F;return B>0&&(D+=F-B),L.__size=D,L.__cache={},this}function A(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",L),I}function v(L){const I=L.target;I.removeEventListener("dispose",v);const D=c.indexOf(I.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function g(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},o={}}return{bind:d,update:h,dispose:g}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function J1(){return Pi===null&&(Pi=new GE($1,16,16,Fs,Rn),Pi.name="DFG_LUT",Pi.minFilter=Pn,Pi.magFilter=Pn,Pi.wrapS=ji,Pi.wrapT=ji,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class j1{constructor(e={}){const{canvas:t=dE(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:_=!1,outputBufferType:x=jn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const A=x,v=new Set([_h,gh,mh]),g=new Set([jn,Ni,xa,Ma,dh,ph]),L=new Uint32Array(4),I=new Int32Array(4);let D=null,F=null;const B=[],R=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=ui;let N=0,q=0,K=null,ne=-1,ie=null;const ee=new jt,$=new jt;let oe=null;const we=new tt(0);let Se=0,Ee=t.width,ut=t.height,it=1,Ht=null,bt=null;const ae=new jt(0,0,Ee,ut),de=new jt(0,0,Ee,ut);let Pe=!1;const Je=new Sh;let ze=!1,mt=!1;const Yt=new Wt,vt=new H,rt=new jt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Lt(){return K===null?it:1}let z=i;function Zt(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),z===null){const X="webgl2";if(z=Zt(X,w),z===null)throw Zt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ct("WebGLRenderer: "+w.message),w}let xt,pt,Ue,P,E,k,se,ue,te,Ge,_e,Fe,qe,pe,xe,Ie,Oe,ve,at,V,Ce,ge,Re,me;function he(){xt=new Jb(z),xt.init(),ge=new V1(z,xt),pt=new Vb(z,xt,e,ge),Ue=new G1(z,xt),pt.reversedDepthBuffer&&_&&Ue.buffers.depth.setReversed(!0),P=new eA(z),E=new b1,k=new H1(z,xt,Ue,E,pt,ge,P),se=new Wb(S),ue=new $b(S),te=new ry(z),Re=new Gb(z,te),Ge=new jb(z,te,P,Re),_e=new nA(z,Ge,te,P),at=new tA(z,pt,k),Ie=new kb(E),Fe=new T1(S,se,ue,xt,pt,Re,Ie),qe=new K1(S,E),pe=new w1,xe=new I1(xt),ve=new zb(S,se,ue,Ue,_e,y,d),Oe=new B1(S,_e,pt),me=new Z1(z,P,pt,Ue),V=new Hb(z,xt,P),Ce=new Qb(z,xt,P),P.programs=Fe.programs,S.capabilities=pt,S.extensions=xt,S.properties=E,S.renderLists=pe,S.shadowMap=Oe,S.state=Ue,S.info=P}he(),A!==jn&&(O=new rA(A,t.width,t.height,a,o));const Me=new q1(S,z);this.xr=Me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(Ee,ut,!1))},this.getSize=function(w){return w.set(Ee,ut)},this.setSize=function(w,X,j=!0){if(Me.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=w,ut=X,t.width=Math.floor(w*it),t.height=Math.floor(X*it),j===!0&&(t.style.width=w+"px",t.style.height=X+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Ee*it,ut*it).floor()},this.setDrawingBufferSize=function(w,X,j){Ee=w,ut=X,it=j,t.width=Math.floor(w*j),t.height=Math.floor(X*j),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(A===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,X,j,J){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,X,j,J),Ue.viewport(ee.copy(ae).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,X,j,J){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,X,j,J),Ue.scissor($.copy(de).multiplyScalar(it).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(w){Ue.setScissorTest(Pe=w)},this.setOpaqueSort=function(w){Ht=w},this.setTransparentSort=function(w){bt=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,j=!0){let J=0;if(w){let Z=!1;if(K!==null){const ye=K.texture.format;Z=v.has(ye)}if(Z){const ye=K.texture.type,De=g.has(ye),Te=ve.getClearColor(),Ne=ve.getClearAlpha(),Ve=Te.r,Ye=Te.g,ke=Te.b;De?(L[0]=Ve,L[1]=Ye,L[2]=ke,L[3]=Ne,z.clearBufferuiv(z.COLOR,0,L)):(I[0]=Ve,I[1]=Ye,I[2]=ke,I[3]=Ne,z.clearBufferiv(z.COLOR,0,I))}else J|=z.COLOR_BUFFER_BIT}X&&(J|=z.DEPTH_BUFFER_BIT),j&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),ve.dispose(),pe.dispose(),xe.dispose(),E.dispose(),se.dispose(),ue.dispose(),_e.dispose(),Re.dispose(),me.dispose(),Fe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ca),Me.removeEventListener("sessionend",Ra),Oi.stop()};function je(w){w.preventDefault(),Jd("WebGLRenderer: Context Lost."),T=!0}function Ot(){Jd("WebGLRenderer: Context Restored."),T=!1;const w=P.autoReset,X=Oe.enabled,j=Oe.autoUpdate,J=Oe.needsUpdate,Z=Oe.type;he(),P.autoReset=w,Oe.enabled=X,Oe.autoUpdate=j,Oe.needsUpdate=J,Oe.type=Z}function Rt(w){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ei(w){const X=w.target;X.removeEventListener("dispose",ei),di(X)}function di(w){Hs(w),E.remove(w)}function Hs(w){const X=E.get(w).programs;X!==void 0&&(X.forEach(function(j){Fe.releaseProgram(j)}),w.isShaderMaterial&&Fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,j,J,Z,ye){X===null&&(X=Tt);const De=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=gl(w,X,j,J,Z);Ue.setMaterial(J,De);let Ne=j.index,Ve=1;if(J.wireframe===!0){if(Ne=Ge.getWireframeAttribute(j),Ne===void 0)return;Ve=2}const Ye=j.drawRange,ke=j.attributes.position;let ot=Ye.start*Ve,At=(Ye.start+Ye.count)*Ve;ye!==null&&(ot=Math.max(ot,ye.start*Ve),At=Math.min(At,(ye.start+ye.count)*Ve)),Ne!==null?(ot=Math.max(ot,0),At=Math.min(At,Ne.count)):ke!=null&&(ot=Math.max(ot,0),At=Math.min(At,ke.count));const Xt=At-ot;if(Xt<0||Xt===1/0)return;Re.setup(Z,J,Te,j,Ne);let Vt,wt=V;if(Ne!==null&&(Vt=te.get(Ne),wt=Ce,wt.setIndex(Vt)),Z.isMesh)J.wireframe===!0?(Ue.setLineWidth(J.wireframeLinewidth*Lt()),wt.setMode(z.LINES)):wt.setMode(z.TRIANGLES);else if(Z.isLine){let We=J.linewidth;We===void 0&&(We=1),Ue.setLineWidth(We*Lt()),Z.isLineSegments?wt.setMode(z.LINES):Z.isLineLoop?wt.setMode(z.LINE_LOOP):wt.setMode(z.LINE_STRIP)}else Z.isPoints?wt.setMode(z.POINTS):Z.isSprite&&wt.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))wt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const We=Z._multiDrawStarts,Pt=Z._multiDrawCounts,St=Z._multiDrawCount,Tn=Ne?te.get(Ne).bytesPerElement:1,bi=E.get(J).currentProgram.getUniforms();for(let Ln=0;Ln<St;Ln++)bi.setValue(z,"_gl_DrawID",Ln),wt.render(We[Ln]/Tn,Pt[Ln])}else if(Z.isInstancedMesh)wt.renderInstances(ot,Xt,Z.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pt=Math.min(j.instanceCount,We);wt.renderInstances(ot,Xt,Pt)}else wt.render(ot,Xt)};function wa(w,X,j){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Jr(w,X,j),w.side=yr,w.needsUpdate=!0,Jr(w,X,j),w.side=hi):Jr(w,X,j)}this.compile=function(w,X,j=null){j===null&&(j=w),F=xe.get(j),F.init(X),R.push(F),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),w!==j&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const J=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const ye=Z.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Te=ye[De];wa(Te,j,Z),J.add(Te)}else wa(ye,j,Z),J.add(ye)}),F=R.pop(),J},this.compileAsync=function(w,X,j=null){const J=this.compile(w,X,j);return new Promise(Z=>{function ye(){if(J.forEach(function(De){E.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){Z(w);return}setTimeout(ye,10)}xt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ar=null;function ml(w){Ar&&Ar(w)}function Ca(){Oi.stop()}function Ra(){Oi.start()}const Oi=new Em;Oi.setAnimationLoop(ml),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){Ar=w,Me.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},Me.addEventListener("sessionstart",Ca),Me.addEventListener("sessionend",Ra),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=Me.enabled===!0&&Me.isPresenting===!0,J=O!==null&&(K===null||j)&&O.begin(S,K);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(X),X=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,X,K),F=xe.get(w,R.length),F.init(X),R.push(F),Yt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Je.setFromProjectionMatrix(Yt,Ii,X.reversedDepth),mt=this.localClippingEnabled,ze=Ie.init(this.clippingPlanes,mt),D=pe.get(w,B.length),D.init(),B.push(D),Me.enabled===!0&&Me.isPresenting===!0){const De=S.xr.getDepthSensingMesh();De!==null&&Vs(De,X,-1/0,S.sortObjects)}Vs(w,X,0,S.sortObjects),D.finish(),S.sortObjects===!0&&D.sort(Ht,bt),st=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,st&&ve.addToRenderList(D,w),this.info.render.frame++,ze===!0&&Ie.beginShadows();const Z=F.state.shadowsArray;if(Oe.render(Z,w,X),ze===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&O.hasRenderPass())===!1){const De=D.opaque,Te=D.transmissive;if(F.setupLights(),X.isArrayCamera){const Ne=X.cameras;if(Te.length>0)for(let Ve=0,Ye=Ne.length;Ve<Ye;Ve++){const ke=Ne[Ve];Da(De,Te,w,ke)}st&&ve.render(w);for(let Ve=0,Ye=Ne.length;Ve<Ye;Ve++){const ke=Ne[Ve];Pa(D,w,ke,ke.viewport)}}else Te.length>0&&Da(De,Te,w,X),st&&ve.render(w),Pa(D,w,X)}K!==null&&q===0&&(k.updateMultisampleRenderTarget(K),k.updateRenderTargetMipmap(K)),J&&O.end(S),w.isScene===!0&&w.onAfterRender(S,w,X),Re.resetDefaultState(),ne=-1,ie=null,R.pop(),R.length>0?(F=R[R.length-1],ze===!0&&Ie.setGlobalState(S.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Vs(w,X,j,J){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)F.pushLight(w),w.castShadow&&F.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){J&&rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Yt);const De=_e.update(w),Te=w.material;Te.visible&&D.push(w,De,Te,j,rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const De=_e.update(w),Te=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),rt.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),rt.copy(De.boundingSphere.center)),rt.applyMatrix4(w.matrixWorld).applyMatrix4(Yt)),Array.isArray(Te)){const Ne=De.groups;for(let Ve=0,Ye=Ne.length;Ve<Ye;Ve++){const ke=Ne[Ve],ot=Te[ke.materialIndex];ot&&ot.visible&&D.push(w,De,ot,j,rt.z,ke)}}else Te.visible&&D.push(w,De,Te,j,rt.z,null)}}const ye=w.children;for(let De=0,Te=ye.length;De<Te;De++)Vs(ye[De],X,j,J)}function Pa(w,X,j,J){const{opaque:Z,transmissive:ye,transparent:De}=w;F.setupLightsView(j),ze===!0&&Ie.setGlobalState(S.clippingPlanes,j),J&&Ue.viewport(ee.copy(J)),Z.length>0&&$r(Z,X,j),ye.length>0&&$r(ye,X,j),De.length>0&&$r(De,X,j),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Da(w,X,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[J.id]===void 0){const ot=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[J.id]=new pn(1,1,{generateMipmaps:!0,type:ot?Rn:jn,minFilter:Wr,samples:pt.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const ye=F.state.transmissionRenderTarget[J.id],De=J.viewport||ee;ye.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Te=S.getRenderTarget(),Ne=S.getActiveCubeFace(),Ve=S.getActiveMipmapLevel();S.setRenderTarget(ye),S.getClearColor(we),Se=S.getClearAlpha(),Se<1&&S.setClearColor(16777215,.5),S.clear(),st&&ve.render(j);const Ye=S.toneMapping;S.toneMapping=Ui;const ke=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),F.setupLightsView(J),ze===!0&&Ie.setGlobalState(S.clippingPlanes,J),$r(w,j,J),k.updateMultisampleRenderTarget(ye),k.updateRenderTargetMipmap(ye),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let At=0,Xt=X.length;At<Xt;At++){const Vt=X[At],{object:wt,geometry:We,material:Pt,group:St}=Vt;if(Pt.side===hi&&wt.layers.test(J.layers)){const Tn=Pt.side;Pt.side=Jt,Pt.needsUpdate=!0,ks(wt,j,J,We,Pt,St),Pt.side=Tn,Pt.needsUpdate=!0,ot=!0}}ot===!0&&(k.updateMultisampleRenderTarget(ye),k.updateRenderTargetMipmap(ye))}S.setRenderTarget(Te,Ne,Ve),S.setClearColor(we,Se),ke!==void 0&&(J.viewport=ke),S.toneMapping=Ye}function $r(w,X,j){const J=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,ye=w.length;Z<ye;Z++){const De=w[Z],{object:Te,geometry:Ne,group:Ve}=De;let Ye=De.material;Ye.allowOverride===!0&&J!==null&&(Ye=J),Te.layers.test(j.layers)&&ks(Te,X,j,Ne,Ye,Ve)}}function ks(w,X,j,J,Z,ye){w.onBeforeRender(S,X,j,J,Z,ye),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(S,X,j,J,w,ye),Z.transparent===!0&&Z.side===hi&&Z.forceSinglePass===!1?(Z.side=Jt,Z.needsUpdate=!0,S.renderBufferDirect(j,X,J,Z,w,ye),Z.side=yr,Z.needsUpdate=!0,S.renderBufferDirect(j,X,J,Z,w,ye),Z.side=hi):S.renderBufferDirect(j,X,J,Z,w,ye),w.onAfterRender(S,X,j,J,Z,ye)}function Jr(w,X,j){X.isScene!==!0&&(X=Tt);const J=E.get(w),Z=F.state.lights,ye=F.state.shadowsArray,De=Z.state.version,Te=Fe.getParameters(w,Z.state,ye,X,j),Ne=Fe.getProgramCacheKey(Te);let Ve=J.programs;J.environment=w.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(w.isMeshStandardMaterial?ue:se).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",ei),Ve=new Map,J.programs=Ve);let Ye=Ve.get(Ne);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===De)return Ia(w,Te),Ye}else Te.uniforms=Fe.getUniforms(w),w.onBeforeCompile(Te,S),Ye=Fe.acquireProgram(Te,Ne),Ve.set(Ne,Ye),J.uniforms=Te.uniforms;const ke=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),Ia(w,Te),J.needsLights=vl(w),J.lightsStateVersion=De,J.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotLightMatrix.value=Z.state.spotLightMatrix,ke.spotLightMap.value=Z.state.spotLightMap,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function La(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Ia(w,X){const j=E.get(w);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function gl(w,X,j,J,Z){X.isScene!==!0&&(X=Tt),k.resetTextureUnits();const ye=X.fog,De=J.isMeshStandardMaterial?X.environment:null,Te=K===null?S.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Os,Ne=(J.isMeshStandardMaterial?ue:se).get(J.envMap||De),Ve=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ye=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,At=!!j.morphAttributes.color;let Xt=Ui;J.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=S.toneMapping);const Vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=Vt!==void 0?Vt.length:0,We=E.get(J),Pt=F.state.lights;if(ze===!0&&(mt===!0||w!==ie)){const hn=w===ie&&J.id===ne;Ie.setState(J,w,hn)}let St=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Pt.state.version||We.outputColorSpace!==Te||Z.isBatchedMesh&&We.batching===!1||!Z.isBatchedMesh&&We.batching===!0||Z.isBatchedMesh&&We.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&We.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||Z.isInstancedMesh&&We.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&We.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&We.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&We.instancingMorph===!1&&Z.morphTexture!==null||We.envMap!==Ne||J.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ie.numPlanes||We.numIntersection!==Ie.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Ye||We.morphTargets!==ke||We.morphNormals!==ot||We.morphColors!==At||We.toneMapping!==Xt||We.morphTargetsCount!==wt)&&(St=!0):(St=!0,We.__version=J.version);let Tn=We.currentProgram;St===!0&&(Tn=Jr(J,X,Z));let bi=!1,Ln=!1,nr=!1;const It=Tn.getUniforms(),un=We.uniforms;if(Ue.useProgram(Tn.program)&&(bi=!0,Ln=!0,nr=!0),J.id!==ne&&(ne=J.id,Ln=!0),bi||ie!==w){Ue.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(z,"projectionMatrix",w.projectionMatrix),It.setValue(z,"viewMatrix",w.matrixWorldInverse);const _n=It.map.cameraPosition;_n!==void 0&&_n.setValue(z,vt.setFromMatrixPosition(w.matrixWorld)),pt.logarithmicDepthBuffer&&It.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&It.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),ie!==w&&(ie=w,Ln=!0,nr=!0)}if(We.needsLights&&(Pt.state.directionalShadowMap.length>0&&It.setValue(z,"directionalShadowMap",Pt.state.directionalShadowMap,k),Pt.state.spotShadowMap.length>0&&It.setValue(z,"spotShadowMap",Pt.state.spotShadowMap,k),Pt.state.pointShadowMap.length>0&&It.setValue(z,"pointShadowMap",Pt.state.pointShadowMap,k)),Z.isSkinnedMesh){It.setOptional(z,Z,"bindMatrix"),It.setOptional(z,Z,"bindMatrixInverse");const hn=Z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),It.setValue(z,"boneTexture",hn.boneTexture,k))}Z.isBatchedMesh&&(It.setOptional(z,Z,"batchingTexture"),It.setValue(z,"batchingTexture",Z._matricesTexture,k),It.setOptional(z,Z,"batchingIdTexture"),It.setValue(z,"batchingIdTexture",Z._indirectTexture,k),It.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&It.setValue(z,"batchingColorTexture",Z._colorsTexture,k));const nn=j.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&at.update(Z,j,Tn),(Ln||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,It.setValue(z,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(un.envMap.value=Ne,un.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=J1()),Ln&&(It.setValue(z,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&_l(un,nr),ye&&J.fog===!0&&qe.refreshFogUniforms(un,ye),qe.refreshMaterialUniforms(un,J,it,ut,F.state.transmissionRenderTarget[w.id]),el.upload(z,La(We),un,k)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(el.upload(z,La(We),un,k),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&It.setValue(z,"center",Z.center),It.setValue(z,"modelViewMatrix",Z.modelViewMatrix),It.setValue(z,"normalMatrix",Z.normalMatrix),It.setValue(z,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const hn=J.uniformsGroups;for(let _n=0,Ws=hn.length;_n<Ws;_n++){const Ai=hn[_n];me.update(Ai,Tn),me.bind(Ai,Tn)}}return Tn}function _l(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function vl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,X,j){const J=E.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=X,E.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const j=E.get(w);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};const jr=z.createFramebuffer();this.setRenderTarget=function(w,X=0,j=0){K=w,N=X,q=j;let J=null,Z=!1,ye=!1;if(w){const Te=E.get(w);if(Te.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(z.FRAMEBUFFER,Te.__webglFramebuffer),ee.copy(w.viewport),$.copy(w.scissor),oe=w.scissorTest,Ue.viewport(ee),Ue.scissor($),Ue.setScissorTest(oe),ne=-1;return}else if(Te.__webglFramebuffer===void 0)k.setupRenderTarget(w);else if(Te.__hasExternalTextures)k.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ye=w.depthTexture;if(Te.__boundDepthTexture!==Ye){if(Ye!==null&&E.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Ve=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?J=Ve[X][j]:J=Ve[X],Z=!0):w.samples>0&&k.useMultisampledRTT(w)===!1?J=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?J=Ve[j]:J=Ve,ee.copy(w.viewport),$.copy(w.scissor),oe=w.scissorTest}else ee.copy(ae).multiplyScalar(it).floor(),$.copy(de).multiplyScalar(it).floor(),oe=Pe;if(j!==0&&(J=jr),Ue.bindFramebuffer(z.FRAMEBUFFER,J)&&Ue.drawBuffers(w,J),Ue.viewport(ee),Ue.scissor($),Ue.setScissorTest(oe),Z){const Te=E.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,j)}else if(ye){const Te=X;for(let Ne=0;Ne<w.textures.length;Ne++){const Ve=E.get(w.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Ve.__webglTexture,j,Te)}}else if(w!==null&&j!==0){const Te=E.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Te.__webglTexture,j)}ne=-1},this.readRenderTargetPixels=function(w,X,j,J,Z,ye,De,Te=0){if(!(w&&w.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){Ue.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Ve=w.textures[Te],Ye=Ve.format,ke=Ve.type;if(!pt.textureFormatReadable(Ye)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(ke)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-J&&j>=0&&j<=w.height-Z&&(w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te),z.readPixels(X,j,J,Z,ge.convert(Ye),ge.convert(ke),ye))}finally{const Ve=K!==null?E.get(K).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(w,X,j,J,Z,ye,De,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(X>=0&&X<=w.width-J&&j>=0&&j<=w.height-Z){Ue.bindFramebuffer(z.FRAMEBUFFER,Ne);const Ve=w.textures[Te],Ye=Ve.format,ke=Ve.type;if(!pt.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.bufferData(z.PIXEL_PACK_BUFFER,ye.byteLength,z.STREAM_READ),w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te),z.readPixels(X,j,J,Z,ge.convert(Ye),ge.convert(ke),0);const At=K!==null?E.get(K).__webglFramebuffer:null;Ue.bindFramebuffer(z.FRAMEBUFFER,At);const Xt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pE(z,Xt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ot),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ye),z.deleteBuffer(ot),z.deleteSync(Xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,j=0){const J=Math.pow(2,-j),Z=Math.floor(w.image.width*J),ye=Math.floor(w.image.height*J),De=X!==null?X.x:0,Te=X!==null?X.y:0;k.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,De,Te,Z,ye),Ue.unbindTexture()};const xl=z.createFramebuffer(),Qr=z.createFramebuffer();this.copyTextureToTexture=function(w,X,j=null,J=null,Z=0,ye=null){ye===null&&(Z!==0?(Ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=Z,Z=0):ye=0);let De,Te,Ne,Ve,Ye,ke,ot,At,Xt;const Vt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(j!==null)De=j.max.x-j.min.x,Te=j.max.y-j.min.y,Ne=j.isBox3?j.max.z-j.min.z:1,Ve=j.min.x,Ye=j.min.y,ke=j.isBox3?j.min.z:0;else{const nn=Math.pow(2,-Z);De=Math.floor(Vt.width*nn),Te=Math.floor(Vt.height*nn),w.isDataArrayTexture?Ne=Vt.depth:w.isData3DTexture?Ne=Math.floor(Vt.depth*nn):Ne=1,Ve=0,Ye=0,ke=0}J!==null?(ot=J.x,At=J.y,Xt=J.z):(ot=0,At=0,Xt=0);const wt=ge.convert(X.format),We=ge.convert(X.type);let Pt;X.isData3DTexture?(k.setTexture3D(X,0),Pt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(k.setTexture2DArray(X,0),Pt=z.TEXTURE_2D_ARRAY):(k.setTexture2D(X,0),Pt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const St=z.getParameter(z.UNPACK_ROW_LENGTH),Tn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),bi=z.getParameter(z.UNPACK_SKIP_PIXELS),Ln=z.getParameter(z.UNPACK_SKIP_ROWS),nr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Vt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Vt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ve),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ye),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ke);const It=w.isDataArrayTexture||w.isData3DTexture,un=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const nn=E.get(w),hn=E.get(X),_n=E.get(nn.__renderTarget),Ws=E.get(hn.__renderTarget);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Ai=0;Ai<Ne;Ai++)It&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(w).__webglTexture,Z,ke+Ai),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,ye,Xt+Ai)),z.blitFramebuffer(Ve,Ye,De,Te,ot,At,De,Te,z.DEPTH_BUFFER_BIT,z.NEAREST);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||E.has(w)){const nn=E.get(w),hn=E.get(X);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,xl),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qr);for(let _n=0;_n<Ne;_n++)It?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Z,ke+_n):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Z),un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,ye,Xt+_n):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,ye),Z!==0?z.blitFramebuffer(Ve,Ye,De,Te,ot,At,De,Te,z.COLOR_BUFFER_BIT,z.NEAREST):un?z.copyTexSubImage3D(Pt,ye,ot,At,Xt+_n,Ve,Ye,De,Te):z.copyTexSubImage2D(Pt,ye,ot,At,Ve,Ye,De,Te);Ue.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else un?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Pt,ye,ot,At,Xt,De,Te,Ne,wt,We,Vt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,ye,ot,At,Xt,De,Te,Ne,wt,Vt.data):z.texSubImage3D(Pt,ye,ot,At,Xt,De,Te,Ne,wt,We,Vt):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ye,ot,At,De,Te,wt,We,Vt.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ye,ot,At,Vt.width,Vt.height,wt,Vt.data):z.texSubImage2D(z.TEXTURE_2D,ye,ot,At,De,Te,wt,We,Vt);z.pixelStorei(z.UNPACK_ROW_LENGTH,St),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,bi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ln),z.pixelStorei(z.UNPACK_SKIP_IMAGES,nr),ye===0&&X.generateMipmaps&&z.generateMipmap(Pt),Ue.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&k.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?k.setTextureCube(w,0):w.isData3DTexture?k.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?k.setTexture2DArray(w,0):k.setTexture2D(w,0),Ue.unbindTexture()},this.resetState=function(){N=0,q=0,K=null,Ue.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const wm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q1=new Rh(-1,1,1,-1,0,1);class ew extends yn{constructor(){super(),this.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new on([0,2,0,0,2,0],2))}}const tw=new ew;class Ph{constructor(e){this._mesh=new gn(tw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Q1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nw extends Gs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hl.clone(e.uniforms),this.material=new Mn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ph(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qp extends Gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class iw extends Gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Xe);this._width=i.width,this._height=i.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nw(wm),this.copyPass.material.blending=fi,this.clock=new Sm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let a=0,o=this.passes.length;a<o;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}qp!==void 0&&(c instanceof qp?i=!0:c instanceof iw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sw extends Gs{constructor(e,t,i=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,i){const a=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=a}}class Er extends Gs{constructor(e,t,i,a){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=a!==void 0?a:[],this.visibleEdgeColor=new tt(1,1,1),this.hiddenEdgeColor=new tt(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Xe(e.x,e.y):new Xe(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),c=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new pn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Mm,this.depthMaterial.side=hi,this.depthMaterial.depthPacking=sE,this.depthMaterial.blending=fi,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=hi,this.prepareMaskMaterial.fragmentShader=p(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new pn(this.resolution.x,this.resolution.y,{type:Rn}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new pn(o,c,{type:Rn}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new pn(o,c,{type:Rn}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new pn(Math.round(o/2),Math.round(c/2),{type:Rn}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new pn(o,c,{type:Rn}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new pn(Math.round(o/2),Math.round(c/2),{type:Rn}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const u=4,d=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(u),this.separableBlurMaterial1.uniforms.texSize.value.set(o,c),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(d),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(c/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=d,this.overlayMaterial=this._getOverlayMaterial();const h=wm;this.copyUniforms=hl.clone(h.uniforms),this.materialCopy=new Mn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fi,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new tt,this.oldClearAlpha=1,this._fsQuad=new Ph(null),this.tempPulseColor1=new tt,this.tempPulseColor2=new tt,this.textureMatrix=new Wt;function p(m,_){const x=_.isPerspectiveCamera?"perspective":"orthographic";return m.replace(/DEPTH_TO_VIEW_Z/g,x+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),a=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,a),this.renderTargetBlurBuffer1.setSize(i,a),this.renderTargetEdgeBuffer1.setSize(i,a),this.separableBlurMaterial1.uniforms.texSize.value.set(i,a),i=Math.round(i/2),a=Math.round(a/2),this.renderTargetBlurBuffer2.setSize(i,a),this.renderTargetEdgeBuffer2.setSize(i,a),this.separableBlurMaterial2.uniforms.texSize.value.set(i,a)}render(e,t,i,a,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const u=this.renderScene.background,d=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=u,this.renderScene.overrideMaterial=d,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const h=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(h),this.tempPulseColor2.multiplyScalar(h)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Er.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Er.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Er.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Er.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=c}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function a(o){if(o.isPoints||o.isLine||o.isLine2)e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e);else if((o.isMesh||o.isSprite)&&!i.has(o)){const c=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,c)}}this.renderScene.traverse(a)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new Mn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Xe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new Mn({uniforms:{maskTexture:{value:null},texSize:{value:new Xe(.5,.5)},visibleEdgeColor:{value:new H(1,1,1)},hiddenEdgeColor:{value:new H(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new Mn({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Xe(.5,.5)},direction:{value:new Xe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new Mn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:tl,depthTest:!1,depthWrite:!1,transparent:!0})}}Er.BlurDirectionX=new Xe(1,0);Er.BlurDirectionY=new Xe(0,1);const Xo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class aw extends Gs{constructor(){super(),this.isOutputPass=!0,this.uniforms=hl.clone(Xo.uniforms),this.material=new xm({name:Xo.name,uniforms:this.uniforms,vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader}),this._fsQuad=new Ph(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ah?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ch&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Yp={type:"change"},Dh={type:"start"},Cm={type:"end"},qo=new ul,Kp=new xr,ow=Math.cos(70*gE.DEG2RAD),an=new H,Vn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},au=1e-6;class Rm extends ny{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Yr,this._lastTargetPosition=new H,this._quat=new Yr().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mp,this._sphericalDelta=new Mp,this._scale=1,this._panOffset=new H,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new H,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cw.bind(this),this._onPointerDown=lw.bind(this),this._onPointerUp=uw.bind(this),this._onContextMenu=_w.bind(this),this._onMouseWheel=dw.bind(this),this._onKeyDown=pw.bind(this),this._onTouchStart=mw.bind(this),this._onTouchMove=gw.bind(this),this._onMouseDown=hw.bind(this),this._onMouseMove=fw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=xw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yp),this.update(),this.state=Bt.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Vn:i>Math.PI&&(i-=Vn),a<-Math.PI?a+=Vn:a>Math.PI&&(a-=Vn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=an.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const u=new H(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const h=new H(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<ow?this.object.lookAt(this.target):(Kp.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Kp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>au||8*(1-this._lastQuaternion.dot(this.object.quaternion))>au||this._lastTargetPosition.distanceToSquared(this.target)>au?(this.dispatchEvent(Yp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;an.copy(a).sub(this.target);let o=an.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function cw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cm),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Bt.DOLLY;break;case Ds.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Bt.ROTATE}break;case Ds.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(Dh)}function fw(r){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(r.preventDefault(),this.dispatchEvent(Dh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cm))}function pw(r){this.enabled!==!1&&this._handleKeyDown(r)}function mw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Bt.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Bt.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(Dh)}function gw(r){switch(this._trackPointer(r),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Bt.NONE}}function _w(r){this.enabled!==!1&&r.preventDefault()}function vw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var va=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++r%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var m=0;m<e.children.length;m++)e.children[m].style.display=m===p?"block":"none";r=p}var a=(performance||Date).now(),o=a,c=0,u=t(new va.Panel("FPS","#0ff","#002")),d=t(new va.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new va.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};va.Panel=function(r,e,t){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,m=3*c,_=15*c,x=74*c,y=30*c,A=document.createElement("canvas");A.width=u,A.height=d,A.style.cssText="width:80px;height:48px";var v=A.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,u,d),v.fillStyle=e,v.fillText(r,h,p),v.fillRect(m,_,x,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(m,_,x,y),{dom:A,update:function(g,L){i=Math.min(i,g),a=Math.max(a,g),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,u,_),v.fillStyle=e,v.fillText(o(g)+" "+r+" ("+o(i)+"-"+o(a)+")",h,p),v.drawImage(A,m+c,_,x-c,y,m,_,x-c,y),v.fillRect(m+x-c,_,c,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(m+x-c,_,c,o((1-g/L)*y))}}};var al=(r=>(r.SPHERE="SPHERE",r.BOX="BOX",r.PROCEDURAL="PROCEDURAL",r))(al||{});const Mw=!0,Be=Object.freeze({ball:Object.freeze({bounciness:.8,launchForce:3.6,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6,outline:Object.freeze({enabled:!1,edgeStrength:3,edgeGlow:0,color:"#00bfff"})}),camera:{fov:30,near:.1,far:Math.pow(10,6),rotationSpeed:0},planet:{defaultDensity:14e-5,borderThickness:2,maxOffset:700},skybox:{type:al.PROCEDURAL,opacity:1},simulationMode:!0,useRandomLevel:Mw,usePreCalculatedFlight:!1,maxFlightDurationInSeconds:30,ticksPerSecond:128,showFPSCounter:!0,showInfoTab:!1}),Sw=new wh;function Ew(r){const e=new kn({color:"rgb(0,0,0)",side:Jt}),t=32,i=32,a=Be.planet.borderThickness;return new gn(new br(r+a,t,i),e)}class Pm extends gn{get mass(){const e=Math.PI*4/3;return this.density*this.radius**3*e}constructor({radius:e,color:t="rgb(255,0,0)",density:i=Be.planet.defaultDensity,textureUrl:a}){super(new br(e,32,32),new qE({color:t})),this.radius=e,this.density=i,this.add(Ew(e)),a&&this.loadTexture(a)}async loadTexture(e){try{const t=await Sw.loadAsync(e);this.material.map=t,this.material.needsUpdate=!0}catch(t){console.warn(`Failed to load planet texture from ${e}:`,t)}}}class yw{constructor(e){this.scene=e}getPlanets(){return this.getInstancesOf(Pm)}getLines(){return this.getInstancesOf(yh)}getInstancesOf(e){return this.scene.children.filter(t=>t instanceof e)}}const Tw=document.getElementById("infoTab"),bw=document.getElementById("infoTab__text"),Aw={updateText(r){const e=`Ball: {
	position: {
		x: ${r.position.x.toFixed(0)},
		y: ${r.position.y.toFixed(0)},
		z: ${r.position.z.toFixed(0)}
	},
	velocity: {
		length: ${r.velocity.length().toFixed(2)},
		x: ${r.velocity.x.toFixed(2)},
		y: ${r.velocity.y.toFixed(2)},
		z: ${r.velocity.z.toFixed(2)}
	}
}`;bw.innerHTML=e}};Be.showInfoTab||(Tw.style.display="none");class ww extends mn{constructor(e){super(Be.camera.fov,innerWidth/innerHeight,Be.camera.near,Be.camera.far),this.position.set(400,200,40),this.lookAt(new H)}setupLockControls(){}reset(e){if(!e.landedPlanet)return;const t=e.position.clone(),a=(e.landedPlanet?.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(t)}getControlsObject(){}}const vr=()=>new mn(Be.camera.fov,innerWidth/innerHeight,Be.camera.near,Be.camera.far);class Cw extends Ps{constructor(){super(),this.cameras=[vr(),vr(),vr(),vr(),vr(),vr(),vr(),vr()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const e=Be.planet.maxOffset+900,t=-e,i=e;this.cameras[0].position.set(t,t/2,t),this.cameras[1].position.set(t,t/2,i),this.cameras[2].position.set(t,i/2,t),this.cameras[3].position.set(t,i/2,i),this.cameras[4].position.set(i,t/2,t),this.cameras[5].position.set(i,t/2,i),this.cameras[6].position.set(i,i/2,t),this.cameras[7].position.set(i,i/2,i)}selectActiveCamera(e){if(Date.now()-this.lastSwitchDate<3e3)return;const a=+(e.x>0)*4+ +(e.y>0)*2+ +(e.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[a]}updateActiveCamera(e){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(e)}getActiveCamera(){return this.activeCamera}update(e){this.selectActiveCamera(e),this.updateActiveCamera(e)}}class Rw extends mn{constructor(e){super(Be.camera.fov,innerWidth/innerHeight,Be.camera.near,Be.camera.far),this.position.set(400,200,40),this.orbitControls=new Rm(this,e),this.lookAt(new H)}reset(e){if(!e.landedPlanet)return;const t=e.position.clone(),a=(e.landedPlanet?.position.clone()).sub(t),o=t.clone().sub(a.normalize().multiplyScalar(2e3));this.orbitControls.target=t,this.position.copy(o),this.lookAt(t)}}const ol={ballHit:(r=1)=>ou("audio-ping-pong-ball-hit",{volume:r}),ballFlightStart:(r=.5)=>ou("audio-ball-flight-start",{volume:r,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>ou("audio-ambient",{volume:.5})};function ou(r,{volume:e=1,startTimeMS:t=0,stopTimeMS:i}){const a=document.getElementById(r);if(!a)throw new Error(`Audio not found: ${r}`);a.pause(),a.volume=e,a.currentTime=t/1e3,a.play(),typeof i=="number"&&setTimeout(function(){a.pause()},i)}function Dm({pulled:r,puller:e,timeDelta:t}){const i=e.position.clone().sub(r.position),a=e.position.distanceTo(r.position);return i.normalize().multiplyScalar(e.mass).multiplyScalar(r.mass).multiplyScalar(t*100).divideScalar(a**2)}function Lm({staticSphere:r,movingSphere:e,onBounceVelocityMultiplier:t=Be.ball.bounciness}){const i=e.position.clone().sub(r.position).normalize(),a=i.dot(e.velocity);return e.velocity.clone().sub(i.clone().multiplyScalar(2*a)).multiplyScalar(t)}function Im(r,e){const t=r.position.clone().sub(e.position).normalize().multiplyScalar(e.radius+r.radius),i=e.position.clone().add(t);return r.position.set(i.x,i.y,i.z),i}function Pw(r,e){return r.position.distanceTo(e.position)<=r.radius+e.radius}function Dw(r,e){return r.position.distanceTo(e.position)+r.radius<=e.radius}function Lw(r,e){return Pw(r,e)||Dw(r,e)}function Iw(r,e,t,i={ticksPerSecond:Be.ticksPerSecond,maxFlightDurationInSeconds:Be.maxFlightDurationInSeconds??30}){const a=i.ticksPerSecond,o=i.maxFlightDurationInSeconds,u=[{position:e.position.clone().clone(),velocity:r.clone()}],d=[];let h=!1;for(let p=1;p<a*o;p++){const m=u[p-1],_=Nw({position:m.position.clone(),radius:e.radius,velocity:m.velocity.clone()},t);if(_&&!h)d.push(p),h=!0,u.push({velocity:_.newVelocity,position:_.contactPoint.clone()});else{h=!1;const x=m.velocity.clone().add(Uw(a,e,t)),y=1/a,A=m.position.clone().add(m.velocity.clone().multiplyScalar(y*60));u.push({velocity:x,position:A})}}return{ticks:u,ticksWithCollisions:d}}function Uw(r,e,t){const i=1/r,a=new H(0,0,0);return t.forEach(o=>{a.add(Dm({puller:o,pulled:e,timeDelta:i}))}),a}function Nw(r,e){let t=null;return e.some(i=>{if(Lw(r,i)){const a=Lm({staticSphere:i,movingSphere:r}),o=Math.min(1,r.velocity.length()/5);ol.ballHit(o);const c=Im(r,i);return a.length()<.2?t={newVelocity:new H(0,0,0),contactPoint:c,stopsBall:!0}:t={newVelocity:a,contactPoint:c,stopsBall:!1},!0}return!1}),t}function Um(r,e,t=[]){const i=new H(e.x,e.y,e.z).normalize().multiplyScalar(Be.ball.launchForce);if(r.landedPlanet=null,r.velocity=i,Be.usePreCalculatedFlight&&t.length>0){const a=Iw(i,r,t);r.setPreCalculatedFlight(a)}ol.ballFlightStart()}var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ga={exports:{}},Fw=ga.exports,Zp;function Ow(){return Zp||(Zp=1,(function(r,e){(function(t,i){{var a=i();r&&r.exports&&(e=r.exports=a),e.randomColor=a}})(Fw,function(){var t=null,i={};g();var a=[],o=function(R){if(R=R||{},R.seed!==void 0&&R.seed!==null&&R.seed===parseInt(R.seed,10))t=R.seed;else if(typeof R.seed=="string")t=F(R.seed);else{if(R.seed!==void 0&&R.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var O,S,T;if(R.count!==null&&R.count!==void 0){for(var N=R.count,q=[],K=0;K<R.count;K++)a.push(!1);for(R.count=null;N>q.length;){var ne=o(R);t!==null&&(R.seed=t),q.push(ne)}return R.count=N,q}return O=c(R),S=u(O,R),T=d(O,S,R),h([O,S,T],R)};function c(R){if(a.length>0){var O=B(R.hue),S=y(O),T=(O[1]-O[0])/a.length,N=parseInt((S-O[0])/T);a[N]===!0?N=(N+2)%a.length:a[N]=!0;var q=(O[0]+N*T)%359,K=(O[0]+(N+1)*T)%359;return O=[q,K],S=y(O),S<0&&(S=360+S),S}else{var O=m(R.hue);return S=y(O),S<0&&(S=360+S),S}}function u(R,O){if(O.hue==="monochrome")return 0;if(O.luminosity==="random")return y([0,100]);var S=_(R),T=S[0],N=S[1];switch(O.luminosity){case"bright":T=55;break;case"dark":T=N-10;break;case"light":N=55;break}return y([T,N])}function d(R,O,S){var T=p(R,O),N=100;switch(S.luminosity){case"dark":N=T+20;break;case"light":T=(N+T)/2;break;case"random":T=0,N=100;break}return y([T,N])}function h(R,O){switch(O.format){case"hsvArray":return R;case"hslArray":return D(R);case"hsl":var S=D(R);return"hsl("+S[0]+", "+S[1]+"%, "+S[2]+"%)";case"hsla":var T=D(R),K=O.alpha||Math.random();return"hsla("+T[0]+", "+T[1]+"%, "+T[2]+"%, "+K+")";case"rgbArray":return L(R);case"rgb":var N=L(R);return"rgb("+N.join(", ")+")";case"rgba":var q=L(R),K=O.alpha||Math.random();return"rgba("+q.join(", ")+", "+K+")";default:return A(R)}}function p(R,O){for(var S=x(R).lowerBounds,T=0;T<S.length-1;T++){var N=S[T][0],q=S[T][1],K=S[T+1][0],ne=S[T+1][1];if(O>=N&&O<=K){var ie=(ne-q)/(K-N),ee=q-ie*N;return ie*O+ee}}return 0}function m(R){if(typeof parseInt(R)=="number"){var O=parseInt(R);if(O<360&&O>0)return[O,O]}if(typeof R=="string"){if(i[R]){var S=i[R];if(S.hueRange)return S.hueRange}else if(R.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(R)[0];return[T,T]}}return[0,360]}function _(R){return x(R).saturationRange}function x(R){R>=334&&R<=360&&(R-=360);for(var O in i){var S=i[O];if(S.hueRange&&R>=S.hueRange[0]&&R<=S.hueRange[1])return i[O]}return"Color not found"}function y(R){if(t===null){var O=.618033988749895,S=Math.random();return S+=O,S%=1,Math.floor(R[0]+S*(R[1]+1-R[0]))}else{var T=R[1]||1,N=R[0]||0;t=(t*9301+49297)%233280;var q=t/233280;return Math.floor(N+q*(T-N))}}function A(R){var O=L(R);function S(N){var q=N.toString(16);return q.length==1?"0"+q:q}var T="#"+S(O[0])+S(O[1])+S(O[2]);return T}function v(R,O,S){var T=S[0][0],N=S[S.length-1][0],q=S[S.length-1][1],K=S[0][1];i[R]={hueRange:O,lowerBounds:S,saturationRange:[T,N],brightnessRange:[q,K]}}function g(){v("monochrome",null,[[0,0],[100,0]]),v("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),v("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),v("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),v("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),v("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),v("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),v("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function L(R){var O=R[0];O===0&&(O=1),O===360&&(O=359),O=O/360;var S=R[1]/100,T=R[2]/100,N=Math.floor(O*6),q=O*6-N,K=T*(1-S),ne=T*(1-q*S),ie=T*(1-(1-q)*S),ee=256,$=256,oe=256;switch(N){case 0:ee=T,$=ie,oe=K;break;case 1:ee=ne,$=T,oe=K;break;case 2:ee=K,$=T,oe=ie;break;case 3:ee=K,$=ne,oe=T;break;case 4:ee=ie,$=K,oe=T;break;case 5:ee=T,$=K,oe=ne;break}var we=[Math.floor(ee*255),Math.floor($*255),Math.floor(oe*255)];return we}function I(R){R=R.replace(/^#/,""),R=R.length===3?R.replace(/(.)/g,"$1$1"):R;var O=parseInt(R.substr(0,2),16)/255,S=parseInt(R.substr(2,2),16)/255,T=parseInt(R.substr(4,2),16)/255,N=Math.max(O,S,T),q=N-Math.min(O,S,T),K=N?q/N:0;switch(N){case O:return[60*((S-T)/q%6)||0,K,N];case S:return[60*((T-O)/q+2)||0,K,N];case T:return[60*((O-S)/q+4)||0,K,N]}}function D(R){var O=R[0],S=R[1]/100,T=R[2]/100,N=(2-S)*T;return[O,Math.round(S*T/(N<1?N:2-N)*1e4)/100,N/2*100]}function F(R){for(var O=0,S=0;S!==R.length&&!(O>=Number.MAX_SAFE_INTEGER);S++)O+=R.charCodeAt(S);return O}function B(R){if(isNaN(R)){if(typeof R=="string"){if(i[R]){var S=i[R];if(S.hueRange)return S.hueRange}else if(R.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(R)[0];return x(T).hueRange}}}else{var O=parseInt(R);if(O<360&&O>0)return x(R).hueRange}return[0,360]}return o})})(ga,ga.exports)),ga.exports}var Bw=Ow();const Fm=Nm(Bw);function zw(r){return new br(r,32,32)}function Gw(r){return new kn({color:r})}class Hw extends gn{constructor({radius:e=Be.ball.radius}={}){const t=Fm({luminosity:"dark",alpha:1});super(zw(e),Gw(t)),this._velocity=new H(0,0,0),this.arrowHelper=new ty(new H,new H),this.pathVertices=[],this.camera=new mn(Be.camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null,this.mass=3,this.light=new Ch(t,16e3,1e4),this.color=t,this.radius=e,Be.ball.showVelocityVector&&this.add(this.arrowHelper),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}get velocity(){return this._velocity.clone()}set velocity(e){this._velocity=e}addVelocity(e){this._velocity.add(e)}setPreCalculatedFlight(e){this.preCalculatedFlight=e,this.currentFlightTick=0,this.flightStartTime=Date.now()}clearPreCalculatedFlight(){this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null}createTrace(){const e=new Eh({color:16755200,opacity:Be.ball.traceTransparency,transparent:!0}),t=new yn().setFromPoints(this.pathVertices);return new yh(t,e)}tick(e=[]){if(this.landedPlanet!==null&&(this.velocity=new H,Be.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{Um(this,new H(-.8,.18,-.72),e),this.launchBallTimeout=null},1e3))),Be.usePreCalculatedFlight&&this.preCalculatedFlight&&this.flightStartTime!==null){const t=(Date.now()-this.flightStartTime)/1e3,i=Math.floor(t*Be.ticksPerSecond);if(i<this.preCalculatedFlight.ticks.length){const a=this.preCalculatedFlight.ticks[i];this.position.copy(a.position),this.velocity=a.velocity.clone(),this.currentFlightTick=i}else{const a=this.preCalculatedFlight.ticks[this.preCalculatedFlight.ticks.length-1];this.position.copy(a.position),this.velocity=a.velocity.clone(),this.clearPreCalculatedFlight()}}else if(!Be.usePreCalculatedFlight||!this.preCalculatedFlight){this.rotation.set(0,0,0),this.position.add(this.velocity);const t=this.velocity.normalize();this.rotation.set(t.x,t.y,t.z)}this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},Be.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class Vw extends gn{constructor(){super(new Tr,[]),this.init()}async init(){const t=await new wh().loadAsync(`${document.baseURI}assets/gfx/sphere-skybox.jpg`),i=new kn({side:hi,map:t,opacity:Be.skybox.opacity,transparent:!0,color:new tt(.15,.2,.4)}),a=10**5.8,o=new br(a);this.geometry=o,this.material=i}}function $p(r,e){return r.position.distanceTo(e.position)<=r.radius+e.radius}var _a={exports:{}};var kw=_a.exports,Jp;function Ww(){return Jp||(Jp=1,(function(r,e){(function(){var t,i="4.17.23",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",m=1,_=2,x=4,y=1,A=2,v=1,g=2,L=4,I=8,D=16,F=32,B=64,R=128,O=256,S=512,T=30,N="...",q=800,K=16,ne=1,ie=2,ee=3,$=1/0,oe=9007199254740991,we=17976931348623157e292,Se=NaN,Ee=4294967295,ut=Ee-1,it=Ee>>>1,Ht=[["ary",R],["bind",v],["bindKey",g],["curry",I],["curryRight",D],["flip",S],["partial",F],["partialRight",B],["rearg",O]],bt="[object Arguments]",ae="[object Array]",de="[object AsyncFunction]",Pe="[object Boolean]",Je="[object Date]",ze="[object DOMException]",mt="[object Error]",Yt="[object Function]",vt="[object GeneratorFunction]",rt="[object Map]",Tt="[object Number]",st="[object Null]",Lt="[object Object]",z="[object Promise]",Zt="[object Proxy]",xt="[object RegExp]",pt="[object Set]",Ue="[object String]",P="[object Symbol]",E="[object Undefined]",k="[object WeakMap]",se="[object WeakSet]",ue="[object ArrayBuffer]",te="[object DataView]",Ge="[object Float32Array]",_e="[object Float64Array]",Fe="[object Int8Array]",qe="[object Int16Array]",pe="[object Int32Array]",xe="[object Uint8Array]",Ie="[object Uint8ClampedArray]",Oe="[object Uint16Array]",ve="[object Uint32Array]",at=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Ce=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ge=/&(?:amp|lt|gt|quot|#39);/g,Re=/[&<>"']/g,me=RegExp(ge.source),he=RegExp(Re.source),Me=/<%-([\s\S]+?)%>/g,je=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ei=/^\w*$/,di=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/[\\^$.*+?()[\]{}|]/g,wa=RegExp(Hs.source),Ar=/^\s+/,ml=/\s/,Ca=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ra=/\{\n\/\* \[wrapped with (.+)\] \*/,Oi=/,? & /,Vs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Pa=/[()=,{}\[\]\/\s]/,Da=/\\(\\)?/g,$r=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ks=/\w*$/,Jr=/^[-+]0x[0-9a-f]+$/i,La=/^0b[01]+$/i,Ia=/^\[object .+?Constructor\]$/,gl=/^0o[0-7]+$/i,_l=/^(?:0|[1-9]\d*)$/,vl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jr=/($^)/,xl=/['\n\r\u2028\u2029\\]/g,Qr="\\ud800-\\udfff",w="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",J=w+X+j,Z="\\u2700-\\u27bf",ye="a-z\\xdf-\\xf6\\xf8-\\xff",De="\\xac\\xb1\\xd7\\xf7",Te="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ne="\\u2000-\\u206f",Ve=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ye="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",ot=De+Te+Ne+Ve,At="['’]",Xt="["+Qr+"]",Vt="["+ot+"]",wt="["+J+"]",We="\\d+",Pt="["+Z+"]",St="["+ye+"]",Tn="[^"+Qr+ot+We+Z+ye+Ye+"]",bi="\\ud83c[\\udffb-\\udfff]",Ln="(?:"+wt+"|"+bi+")",nr="[^"+Qr+"]",It="(?:\\ud83c[\\udde6-\\uddff]){2}",un="[\\ud800-\\udbff][\\udc00-\\udfff]",nn="["+Ye+"]",hn="\\u200d",_n="(?:"+St+"|"+Tn+")",Ws="(?:"+nn+"|"+Tn+")",Ai="(?:"+At+"(?:d|ll|m|re|s|t|ve))?",Lh="(?:"+At+"(?:D|LL|M|RE|S|T|VE))?",Ih=Ln+"?",Uh="["+ke+"]?",Bm="(?:"+hn+"(?:"+[nr,It,un].join("|")+")"+Uh+Ih+")*",zm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nh=Uh+Ih+Bm,Hm="(?:"+[Pt,It,un].join("|")+")"+Nh,Vm="(?:"+[nr+wt+"?",wt,It,un,Xt].join("|")+")",km=RegExp(At,"g"),Wm=RegExp(wt,"g"),Ml=RegExp(bi+"(?="+bi+")|"+Vm+Nh,"g"),Xm=RegExp([nn+"?"+St+"+"+Ai+"(?="+[Vt,nn,"$"].join("|")+")",Ws+"+"+Lh+"(?="+[Vt,nn+_n,"$"].join("|")+")",nn+"?"+_n+"+"+Ai,nn+"+"+Lh,Gm,zm,We,Hm].join("|"),"g"),qm=RegExp("["+hn+Qr+J+ke+"]"),Ym=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Km=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zm=-1,kt={};kt[Ge]=kt[_e]=kt[Fe]=kt[qe]=kt[pe]=kt[xe]=kt[Ie]=kt[Oe]=kt[ve]=!0,kt[bt]=kt[ae]=kt[ue]=kt[Pe]=kt[te]=kt[Je]=kt[mt]=kt[Yt]=kt[rt]=kt[Tt]=kt[Lt]=kt[xt]=kt[pt]=kt[Ue]=kt[k]=!1;var Gt={};Gt[bt]=Gt[ae]=Gt[ue]=Gt[te]=Gt[Pe]=Gt[Je]=Gt[Ge]=Gt[_e]=Gt[Fe]=Gt[qe]=Gt[pe]=Gt[rt]=Gt[Tt]=Gt[Lt]=Gt[xt]=Gt[pt]=Gt[Ue]=Gt[P]=Gt[xe]=Gt[Ie]=Gt[Oe]=Gt[ve]=!0,Gt[mt]=Gt[Yt]=Gt[k]=!1;var $m={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Jm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},eg=parseFloat,tg=parseInt,Fh=typeof Yo=="object"&&Yo&&Yo.Object===Object&&Yo,ng=typeof self=="object"&&self&&self.Object===Object&&self,vn=Fh||ng||Function("return this")(),Sl=e&&!e.nodeType&&e,wr=Sl&&!0&&r&&!r.nodeType&&r,Oh=wr&&wr.exports===Sl,El=Oh&&Fh.process,ti=(function(){try{var W=wr&&wr.require&&wr.require("util").types;return W||El&&El.binding&&El.binding("util")}catch{}})(),Bh=ti&&ti.isArrayBuffer,zh=ti&&ti.isDate,Gh=ti&&ti.isMap,Hh=ti&&ti.isRegExp,Vh=ti&&ti.isSet,kh=ti&&ti.isTypedArray;function Wn(W,re,Q){switch(Q.length){case 0:return W.call(re);case 1:return W.call(re,Q[0]);case 2:return W.call(re,Q[0],Q[1]);case 3:return W.call(re,Q[0],Q[1],Q[2])}return W.apply(re,Q)}function ig(W,re,Q,Le){for(var et=-1,Dt=W==null?0:W.length;++et<Dt;){var rn=W[et];re(Le,rn,Q(rn),W)}return Le}function ni(W,re){for(var Q=-1,Le=W==null?0:W.length;++Q<Le&&re(W[Q],Q,W)!==!1;);return W}function rg(W,re){for(var Q=W==null?0:W.length;Q--&&re(W[Q],Q,W)!==!1;);return W}function Wh(W,re){for(var Q=-1,Le=W==null?0:W.length;++Q<Le;)if(!re(W[Q],Q,W))return!1;return!0}function ir(W,re){for(var Q=-1,Le=W==null?0:W.length,et=0,Dt=[];++Q<Le;){var rn=W[Q];re(rn,Q,W)&&(Dt[et++]=rn)}return Dt}function Ua(W,re){var Q=W==null?0:W.length;return!!Q&&es(W,re,0)>-1}function yl(W,re,Q){for(var Le=-1,et=W==null?0:W.length;++Le<et;)if(Q(re,W[Le]))return!0;return!1}function qt(W,re){for(var Q=-1,Le=W==null?0:W.length,et=Array(Le);++Q<Le;)et[Q]=re(W[Q],Q,W);return et}function rr(W,re){for(var Q=-1,Le=re.length,et=W.length;++Q<Le;)W[et+Q]=re[Q];return W}function Tl(W,re,Q,Le){var et=-1,Dt=W==null?0:W.length;for(Le&&Dt&&(Q=W[++et]);++et<Dt;)Q=re(Q,W[et],et,W);return Q}function sg(W,re,Q,Le){var et=W==null?0:W.length;for(Le&&et&&(Q=W[--et]);et--;)Q=re(Q,W[et],et,W);return Q}function bl(W,re){for(var Q=-1,Le=W==null?0:W.length;++Q<Le;)if(re(W[Q],Q,W))return!0;return!1}var ag=Al("length");function og(W){return W.split("")}function lg(W){return W.match(Vs)||[]}function Xh(W,re,Q){var Le;return Q(W,function(et,Dt,rn){if(re(et,Dt,rn))return Le=Dt,!1}),Le}function Na(W,re,Q,Le){for(var et=W.length,Dt=Q+(Le?1:-1);Le?Dt--:++Dt<et;)if(re(W[Dt],Dt,W))return Dt;return-1}function es(W,re,Q){return re===re?Mg(W,re,Q):Na(W,qh,Q)}function cg(W,re,Q,Le){for(var et=Q-1,Dt=W.length;++et<Dt;)if(Le(W[et],re))return et;return-1}function qh(W){return W!==W}function Yh(W,re){var Q=W==null?0:W.length;return Q?Cl(W,re)/Q:Se}function Al(W){return function(re){return re==null?t:re[W]}}function wl(W){return function(re){return W==null?t:W[re]}}function Kh(W,re,Q,Le,et){return et(W,function(Dt,rn,zt){Q=Le?(Le=!1,Dt):re(Q,Dt,rn,zt)}),Q}function ug(W,re){var Q=W.length;for(W.sort(re);Q--;)W[Q]=W[Q].value;return W}function Cl(W,re){for(var Q,Le=-1,et=W.length;++Le<et;){var Dt=re(W[Le]);Dt!==t&&(Q=Q===t?Dt:Q+Dt)}return Q}function Rl(W,re){for(var Q=-1,Le=Array(W);++Q<W;)Le[Q]=re(Q);return Le}function hg(W,re){return qt(re,function(Q){return[Q,W[Q]]})}function Zh(W){return W&&W.slice(0,Qh(W)+1).replace(Ar,"")}function Xn(W){return function(re){return W(re)}}function Pl(W,re){return qt(re,function(Q){return W[Q]})}function Xs(W,re){return W.has(re)}function $h(W,re){for(var Q=-1,Le=W.length;++Q<Le&&es(re,W[Q],0)>-1;);return Q}function Jh(W,re){for(var Q=W.length;Q--&&es(re,W[Q],0)>-1;);return Q}function fg(W,re){for(var Q=W.length,Le=0;Q--;)W[Q]===re&&++Le;return Le}var dg=wl($m),pg=wl(Jm);function mg(W){return"\\"+Qm[W]}function gg(W,re){return W==null?t:W[re]}function ts(W){return qm.test(W)}function _g(W){return Ym.test(W)}function vg(W){for(var re,Q=[];!(re=W.next()).done;)Q.push(re.value);return Q}function Dl(W){var re=-1,Q=Array(W.size);return W.forEach(function(Le,et){Q[++re]=[et,Le]}),Q}function jh(W,re){return function(Q){return W(re(Q))}}function sr(W,re){for(var Q=-1,Le=W.length,et=0,Dt=[];++Q<Le;){var rn=W[Q];(rn===re||rn===p)&&(W[Q]=p,Dt[et++]=Q)}return Dt}function Fa(W){var re=-1,Q=Array(W.size);return W.forEach(function(Le){Q[++re]=Le}),Q}function xg(W){var re=-1,Q=Array(W.size);return W.forEach(function(Le){Q[++re]=[Le,Le]}),Q}function Mg(W,re,Q){for(var Le=Q-1,et=W.length;++Le<et;)if(W[Le]===re)return Le;return-1}function Sg(W,re,Q){for(var Le=Q+1;Le--;)if(W[Le]===re)return Le;return Le}function ns(W){return ts(W)?yg(W):ag(W)}function pi(W){return ts(W)?Tg(W):og(W)}function Qh(W){for(var re=W.length;re--&&ml.test(W.charAt(re)););return re}var Eg=wl(jm);function yg(W){for(var re=Ml.lastIndex=0;Ml.test(W);)++re;return re}function Tg(W){return W.match(Ml)||[]}function bg(W){return W.match(Xm)||[]}var Ag=(function W(re){re=re==null?vn:is.defaults(vn.Object(),re,is.pick(vn,Km));var Q=re.Array,Le=re.Date,et=re.Error,Dt=re.Function,rn=re.Math,zt=re.Object,Ll=re.RegExp,wg=re.String,ii=re.TypeError,Oa=Q.prototype,Cg=Dt.prototype,rs=zt.prototype,Ba=re["__core-js_shared__"],za=Cg.toString,Ut=rs.hasOwnProperty,Rg=0,ef=(function(){var n=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ga=rs.toString,Pg=za.call(zt),Dg=vn._,Lg=Ll("^"+za.call(Ut).replace(Hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ha=Oh?re.Buffer:t,ar=re.Symbol,Va=re.Uint8Array,tf=Ha?Ha.allocUnsafe:t,ka=jh(zt.getPrototypeOf,zt),nf=zt.create,rf=rs.propertyIsEnumerable,Wa=Oa.splice,sf=ar?ar.isConcatSpreadable:t,qs=ar?ar.iterator:t,Cr=ar?ar.toStringTag:t,Xa=(function(){try{var n=Ir(zt,"defineProperty");return n({},"",{}),n}catch{}})(),Ig=re.clearTimeout!==vn.clearTimeout&&re.clearTimeout,Ug=Le&&Le.now!==vn.Date.now&&Le.now,Ng=re.setTimeout!==vn.setTimeout&&re.setTimeout,qa=rn.ceil,Ya=rn.floor,Il=zt.getOwnPropertySymbols,Fg=Ha?Ha.isBuffer:t,af=re.isFinite,Og=Oa.join,Bg=jh(zt.keys,zt),sn=rn.max,bn=rn.min,zg=Le.now,Gg=re.parseInt,of=rn.random,Hg=Oa.reverse,Ul=Ir(re,"DataView"),Ys=Ir(re,"Map"),Nl=Ir(re,"Promise"),ss=Ir(re,"Set"),Ks=Ir(re,"WeakMap"),Zs=Ir(zt,"create"),Ka=Ks&&new Ks,as={},Vg=Ur(Ul),kg=Ur(Ys),Wg=Ur(Nl),Xg=Ur(ss),qg=Ur(Ks),Za=ar?ar.prototype:t,$s=Za?Za.valueOf:t,lf=Za?Za.toString:t;function b(n){if($t(n)&&!nt(n)&&!(n instanceof Mt)){if(n instanceof ri)return n;if(Ut.call(n,"__wrapped__"))return cd(n)}return new ri(n)}var os=(function(){function n(){}return function(s){if(!Kt(s))return{};if(nf)return nf(s);n.prototype=s;var l=new n;return n.prototype=t,l}})();function $a(){}function ri(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}b.templateSettings={escape:Me,evaluate:je,interpolate:Ot,variable:"",imports:{_:b}},b.prototype=$a.prototype,b.prototype.constructor=b,ri.prototype=os($a.prototype),ri.prototype.constructor=ri;function Mt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ee,this.__views__=[]}function Yg(){var n=new Mt(this.__wrapped__);return n.__actions__=On(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=On(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=On(this.__views__),n}function Kg(){if(this.__filtered__){var n=new Mt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Zg(){var n=this.__wrapped__.value(),s=this.__dir__,l=nt(n),f=s<0,M=l?n.length:0,C=o0(0,M,this.__views__),U=C.start,G=C.end,Y=G-U,le=f?G:U-1,ce=this.__iteratees__,fe=ce.length,be=0,He=bn(Y,this.__takeCount__);if(!l||!f&&M==Y&&He==Y)return Lf(n,this.__actions__);var Ze=[];e:for(;Y--&&be<He;){le+=s;for(var ht=-1,$e=n[le];++ht<fe;){var gt=ce[ht],Et=gt.iteratee,Kn=gt.type,Nn=Et($e);if(Kn==ie)$e=Nn;else if(!Nn){if(Kn==ne)continue e;break e}}Ze[be++]=$e}return Ze}Mt.prototype=os($a.prototype),Mt.prototype.constructor=Mt;function Rr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function $g(){this.__data__=Zs?Zs(null):{},this.size=0}function Jg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function jg(n){var s=this.__data__;if(Zs){var l=s[n];return l===d?t:l}return Ut.call(s,n)?s[n]:t}function Qg(n){var s=this.__data__;return Zs?s[n]!==t:Ut.call(s,n)}function e_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Zs&&s===t?d:s,this}Rr.prototype.clear=$g,Rr.prototype.delete=Jg,Rr.prototype.get=jg,Rr.prototype.has=Qg,Rr.prototype.set=e_;function Bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function t_(){this.__data__=[],this.size=0}function n_(n){var s=this.__data__,l=Ja(s,n);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Wa.call(s,l,1),--this.size,!0}function i_(n){var s=this.__data__,l=Ja(s,n);return l<0?t:s[l][1]}function r_(n){return Ja(this.__data__,n)>-1}function s_(n,s){var l=this.__data__,f=Ja(l,n);return f<0?(++this.size,l.push([n,s])):l[f][1]=s,this}Bi.prototype.clear=t_,Bi.prototype.delete=n_,Bi.prototype.get=i_,Bi.prototype.has=r_,Bi.prototype.set=s_;function zi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var f=n[s];this.set(f[0],f[1])}}function a_(){this.size=0,this.__data__={hash:new Rr,map:new(Ys||Bi),string:new Rr}}function o_(n){var s=co(this,n).delete(n);return this.size-=s?1:0,s}function l_(n){return co(this,n).get(n)}function c_(n){return co(this,n).has(n)}function u_(n,s){var l=co(this,n),f=l.size;return l.set(n,s),this.size+=l.size==f?0:1,this}zi.prototype.clear=a_,zi.prototype.delete=o_,zi.prototype.get=l_,zi.prototype.has=c_,zi.prototype.set=u_;function Pr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new zi;++s<l;)this.add(n[s])}function h_(n){return this.__data__.set(n,d),this}function f_(n){return this.__data__.has(n)}Pr.prototype.add=Pr.prototype.push=h_,Pr.prototype.has=f_;function mi(n){var s=this.__data__=new Bi(n);this.size=s.size}function d_(){this.__data__=new Bi,this.size=0}function p_(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function m_(n){return this.__data__.get(n)}function g_(n){return this.__data__.has(n)}function __(n,s){var l=this.__data__;if(l instanceof Bi){var f=l.__data__;if(!Ys||f.length<a-1)return f.push([n,s]),this.size=++l.size,this;l=this.__data__=new zi(f)}return l.set(n,s),this.size=l.size,this}mi.prototype.clear=d_,mi.prototype.delete=p_,mi.prototype.get=m_,mi.prototype.has=g_,mi.prototype.set=__;function cf(n,s){var l=nt(n),f=!l&&Nr(n),M=!l&&!f&&hr(n),C=!l&&!f&&!M&&hs(n),U=l||f||M||C,G=U?Rl(n.length,wg):[],Y=G.length;for(var le in n)(s||Ut.call(n,le))&&!(U&&(le=="length"||M&&(le=="offset"||le=="parent")||C&&(le=="buffer"||le=="byteLength"||le=="byteOffset")||ki(le,Y)))&&G.push(le);return G}function uf(n){var s=n.length;return s?n[ql(0,s-1)]:t}function v_(n,s){return uo(On(n),Dr(s,0,n.length))}function x_(n){return uo(On(n))}function Fl(n,s,l){(l!==t&&!gi(n[s],l)||l===t&&!(s in n))&&Gi(n,s,l)}function Js(n,s,l){var f=n[s];(!(Ut.call(n,s)&&gi(f,l))||l===t&&!(s in n))&&Gi(n,s,l)}function Ja(n,s){for(var l=n.length;l--;)if(gi(n[l][0],s))return l;return-1}function M_(n,s,l,f){return or(n,function(M,C,U){s(f,M,l(M),U)}),f}function hf(n,s){return n&&Ci(s,fn(s),n)}function S_(n,s){return n&&Ci(s,zn(s),n)}function Gi(n,s,l){s=="__proto__"&&Xa?Xa(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Ol(n,s){for(var l=-1,f=s.length,M=Q(f),C=n==null;++l<f;)M[l]=C?t:_c(n,s[l]);return M}function Dr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function si(n,s,l,f,M,C){var U,G=s&m,Y=s&_,le=s&x;if(l&&(U=M?l(n,f,M,C):l(n)),U!==t)return U;if(!Kt(n))return n;var ce=nt(n);if(ce){if(U=c0(n),!G)return On(n,U)}else{var fe=An(n),be=fe==Yt||fe==vt;if(hr(n))return Nf(n,G);if(fe==Lt||fe==bt||be&&!M){if(U=Y||be?{}:ed(n),!G)return Y?j_(n,S_(U,n)):J_(n,hf(U,n))}else{if(!Gt[fe])return M?n:{};U=u0(n,fe,G)}}C||(C=new mi);var He=C.get(n);if(He)return He;C.set(n,U),Rd(n)?n.forEach(function($e){U.add(si($e,s,l,$e,n,C))}):wd(n)&&n.forEach(function($e,gt){U.set(gt,si($e,s,l,gt,n,C))});var Ze=le?Y?ic:nc:Y?zn:fn,ht=ce?t:Ze(n);return ni(ht||n,function($e,gt){ht&&(gt=$e,$e=n[gt]),Js(U,gt,si($e,s,l,gt,n,C))}),U}function E_(n){var s=fn(n);return function(l){return ff(l,n,s)}}function ff(n,s,l){var f=l.length;if(n==null)return!f;for(n=zt(n);f--;){var M=l[f],C=s[M],U=n[M];if(U===t&&!(M in n)||!C(U))return!1}return!0}function df(n,s,l){if(typeof n!="function")throw new ii(c);return ra(function(){n.apply(t,l)},s)}function js(n,s,l,f){var M=-1,C=Ua,U=!0,G=n.length,Y=[],le=s.length;if(!G)return Y;l&&(s=qt(s,Xn(l))),f?(C=yl,U=!1):s.length>=a&&(C=Xs,U=!1,s=new Pr(s));e:for(;++M<G;){var ce=n[M],fe=l==null?ce:l(ce);if(ce=f||ce!==0?ce:0,U&&fe===fe){for(var be=le;be--;)if(s[be]===fe)continue e;Y.push(ce)}else C(s,fe,f)||Y.push(ce)}return Y}var or=Gf(wi),pf=Gf(zl,!0);function y_(n,s){var l=!0;return or(n,function(f,M,C){return l=!!s(f,M,C),l}),l}function ja(n,s,l){for(var f=-1,M=n.length;++f<M;){var C=n[f],U=s(C);if(U!=null&&(G===t?U===U&&!Yn(U):l(U,G)))var G=U,Y=C}return Y}function T_(n,s,l,f){var M=n.length;for(l=lt(l),l<0&&(l=-l>M?0:M+l),f=f===t||f>M?M:lt(f),f<0&&(f+=M),f=l>f?0:Dd(f);l<f;)n[l++]=s;return n}function mf(n,s){var l=[];return or(n,function(f,M,C){s(f,M,C)&&l.push(f)}),l}function xn(n,s,l,f,M){var C=-1,U=n.length;for(l||(l=f0),M||(M=[]);++C<U;){var G=n[C];s>0&&l(G)?s>1?xn(G,s-1,l,f,M):rr(M,G):f||(M[M.length]=G)}return M}var Bl=Hf(),gf=Hf(!0);function wi(n,s){return n&&Bl(n,s,fn)}function zl(n,s){return n&&gf(n,s,fn)}function Qa(n,s){return ir(s,function(l){return Wi(n[l])})}function Lr(n,s){s=cr(s,n);for(var l=0,f=s.length;n!=null&&l<f;)n=n[Ri(s[l++])];return l&&l==f?n:t}function _f(n,s,l){var f=s(n);return nt(n)?f:rr(f,l(n))}function In(n){return n==null?n===t?E:st:Cr&&Cr in zt(n)?a0(n):x0(n)}function Gl(n,s){return n>s}function b_(n,s){return n!=null&&Ut.call(n,s)}function A_(n,s){return n!=null&&s in zt(n)}function w_(n,s,l){return n>=bn(s,l)&&n<sn(s,l)}function Hl(n,s,l){for(var f=l?yl:Ua,M=n[0].length,C=n.length,U=C,G=Q(C),Y=1/0,le=[];U--;){var ce=n[U];U&&s&&(ce=qt(ce,Xn(s))),Y=bn(ce.length,Y),G[U]=!l&&(s||M>=120&&ce.length>=120)?new Pr(U&&ce):t}ce=n[0];var fe=-1,be=G[0];e:for(;++fe<M&&le.length<Y;){var He=ce[fe],Ze=s?s(He):He;if(He=l||He!==0?He:0,!(be?Xs(be,Ze):f(le,Ze,l))){for(U=C;--U;){var ht=G[U];if(!(ht?Xs(ht,Ze):f(n[U],Ze,l)))continue e}be&&be.push(Ze),le.push(He)}}return le}function C_(n,s,l,f){return wi(n,function(M,C,U){s(f,l(M),C,U)}),f}function Qs(n,s,l){s=cr(s,n),n=rd(n,s);var f=n==null?n:n[Ri(oi(s))];return f==null?t:Wn(f,n,l)}function vf(n){return $t(n)&&In(n)==bt}function R_(n){return $t(n)&&In(n)==ue}function P_(n){return $t(n)&&In(n)==Je}function ea(n,s,l,f,M){return n===s?!0:n==null||s==null||!$t(n)&&!$t(s)?n!==n&&s!==s:D_(n,s,l,f,ea,M)}function D_(n,s,l,f,M,C){var U=nt(n),G=nt(s),Y=U?ae:An(n),le=G?ae:An(s);Y=Y==bt?Lt:Y,le=le==bt?Lt:le;var ce=Y==Lt,fe=le==Lt,be=Y==le;if(be&&hr(n)){if(!hr(s))return!1;U=!0,ce=!1}if(be&&!ce)return C||(C=new mi),U||hs(n)?Jf(n,s,l,f,M,C):r0(n,s,Y,l,f,M,C);if(!(l&y)){var He=ce&&Ut.call(n,"__wrapped__"),Ze=fe&&Ut.call(s,"__wrapped__");if(He||Ze){var ht=He?n.value():n,$e=Ze?s.value():s;return C||(C=new mi),M(ht,$e,l,f,C)}}return be?(C||(C=new mi),s0(n,s,l,f,M,C)):!1}function L_(n){return $t(n)&&An(n)==rt}function Vl(n,s,l,f){var M=l.length,C=M,U=!f;if(n==null)return!C;for(n=zt(n);M--;){var G=l[M];if(U&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++M<C;){G=l[M];var Y=G[0],le=n[Y],ce=G[1];if(U&&G[2]){if(le===t&&!(Y in n))return!1}else{var fe=new mi;if(f)var be=f(le,ce,Y,n,s,fe);if(!(be===t?ea(ce,le,y|A,f,fe):be))return!1}}return!0}function xf(n){if(!Kt(n)||p0(n))return!1;var s=Wi(n)?Lg:Ia;return s.test(Ur(n))}function I_(n){return $t(n)&&In(n)==xt}function U_(n){return $t(n)&&An(n)==pt}function N_(n){return $t(n)&&_o(n.length)&&!!kt[In(n)]}function Mf(n){return typeof n=="function"?n:n==null?Gn:typeof n=="object"?nt(n)?yf(n[0],n[1]):Ef(n):Vd(n)}function kl(n){if(!ia(n))return Bg(n);var s=[];for(var l in zt(n))Ut.call(n,l)&&l!="constructor"&&s.push(l);return s}function F_(n){if(!Kt(n))return v0(n);var s=ia(n),l=[];for(var f in n)f=="constructor"&&(s||!Ut.call(n,f))||l.push(f);return l}function Wl(n,s){return n<s}function Sf(n,s){var l=-1,f=Bn(n)?Q(n.length):[];return or(n,function(M,C,U){f[++l]=s(M,C,U)}),f}function Ef(n){var s=sc(n);return s.length==1&&s[0][2]?nd(s[0][0],s[0][1]):function(l){return l===n||Vl(l,n,s)}}function yf(n,s){return oc(n)&&td(s)?nd(Ri(n),s):function(l){var f=_c(l,n);return f===t&&f===s?vc(l,n):ea(s,f,y|A)}}function eo(n,s,l,f,M){n!==s&&Bl(s,function(C,U){if(M||(M=new mi),Kt(C))O_(n,s,U,l,eo,f,M);else{var G=f?f(cc(n,U),C,U+"",n,s,M):t;G===t&&(G=C),Fl(n,U,G)}},zn)}function O_(n,s,l,f,M,C,U){var G=cc(n,l),Y=cc(s,l),le=U.get(Y);if(le){Fl(n,l,le);return}var ce=C?C(G,Y,l+"",n,s,U):t,fe=ce===t;if(fe){var be=nt(Y),He=!be&&hr(Y),Ze=!be&&!He&&hs(Y);ce=Y,be||He||Ze?nt(G)?ce=G:Qt(G)?ce=On(G):He?(fe=!1,ce=Nf(Y,!0)):Ze?(fe=!1,ce=Ff(Y,!0)):ce=[]:sa(Y)||Nr(Y)?(ce=G,Nr(G)?ce=Ld(G):(!Kt(G)||Wi(G))&&(ce=ed(Y))):fe=!1}fe&&(U.set(Y,ce),M(ce,Y,f,C,U),U.delete(Y)),Fl(n,l,ce)}function Tf(n,s){var l=n.length;if(l)return s+=s<0?l:0,ki(s,l)?n[s]:t}function bf(n,s,l){s.length?s=qt(s,function(C){return nt(C)?function(U){return Lr(U,C.length===1?C[0]:C)}:C}):s=[Gn];var f=-1;s=qt(s,Xn(Ke()));var M=Sf(n,function(C,U,G){var Y=qt(s,function(le){return le(C)});return{criteria:Y,index:++f,value:C}});return ug(M,function(C,U){return $_(C,U,l)})}function B_(n,s){return Af(n,s,function(l,f){return vc(n,f)})}function Af(n,s,l){for(var f=-1,M=s.length,C={};++f<M;){var U=s[f],G=Lr(n,U);l(G,U)&&ta(C,cr(U,n),G)}return C}function z_(n){return function(s){return Lr(s,n)}}function Xl(n,s,l,f){var M=f?cg:es,C=-1,U=s.length,G=n;for(n===s&&(s=On(s)),l&&(G=qt(n,Xn(l)));++C<U;)for(var Y=0,le=s[C],ce=l?l(le):le;(Y=M(G,ce,Y,f))>-1;)G!==n&&Wa.call(G,Y,1),Wa.call(n,Y,1);return n}function wf(n,s){for(var l=n?s.length:0,f=l-1;l--;){var M=s[l];if(l==f||M!==C){var C=M;ki(M)?Wa.call(n,M,1):Zl(n,M)}}return n}function ql(n,s){return n+Ya(of()*(s-n+1))}function G_(n,s,l,f){for(var M=-1,C=sn(qa((s-n)/(l||1)),0),U=Q(C);C--;)U[f?C:++M]=n,n+=l;return U}function Yl(n,s){var l="";if(!n||s<1||s>oe)return l;do s%2&&(l+=n),s=Ya(s/2),s&&(n+=n);while(s);return l}function dt(n,s){return uc(id(n,s,Gn),n+"")}function H_(n){return uf(fs(n))}function V_(n,s){var l=fs(n);return uo(l,Dr(s,0,l.length))}function ta(n,s,l,f){if(!Kt(n))return n;s=cr(s,n);for(var M=-1,C=s.length,U=C-1,G=n;G!=null&&++M<C;){var Y=Ri(s[M]),le=l;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return n;if(M!=U){var ce=G[Y];le=f?f(ce,Y,G):t,le===t&&(le=Kt(ce)?ce:ki(s[M+1])?[]:{})}Js(G,Y,le),G=G[Y]}return n}var Cf=Ka?function(n,s){return Ka.set(n,s),n}:Gn,k_=Xa?function(n,s){return Xa(n,"toString",{configurable:!0,enumerable:!1,value:Mc(s),writable:!0})}:Gn;function W_(n){return uo(fs(n))}function ai(n,s,l){var f=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var C=Q(M);++f<M;)C[f]=n[f+s];return C}function X_(n,s){var l;return or(n,function(f,M,C){return l=s(f,M,C),!l}),!!l}function to(n,s,l){var f=0,M=n==null?f:n.length;if(typeof s=="number"&&s===s&&M<=it){for(;f<M;){var C=f+M>>>1,U=n[C];U!==null&&!Yn(U)&&(l?U<=s:U<s)?f=C+1:M=C}return M}return Kl(n,s,Gn,l)}function Kl(n,s,l,f){var M=0,C=n==null?0:n.length;if(C===0)return 0;s=l(s);for(var U=s!==s,G=s===null,Y=Yn(s),le=s===t;M<C;){var ce=Ya((M+C)/2),fe=l(n[ce]),be=fe!==t,He=fe===null,Ze=fe===fe,ht=Yn(fe);if(U)var $e=f||Ze;else le?$e=Ze&&(f||be):G?$e=Ze&&be&&(f||!He):Y?$e=Ze&&be&&!He&&(f||!ht):He||ht?$e=!1:$e=f?fe<=s:fe<s;$e?M=ce+1:C=ce}return bn(C,ut)}function Rf(n,s){for(var l=-1,f=n.length,M=0,C=[];++l<f;){var U=n[l],G=s?s(U):U;if(!l||!gi(G,Y)){var Y=G;C[M++]=U===0?0:U}}return C}function Pf(n){return typeof n=="number"?n:Yn(n)?Se:+n}function qn(n){if(typeof n=="string")return n;if(nt(n))return qt(n,qn)+"";if(Yn(n))return lf?lf.call(n):"";var s=n+"";return s=="0"&&1/n==-$?"-0":s}function lr(n,s,l){var f=-1,M=Ua,C=n.length,U=!0,G=[],Y=G;if(l)U=!1,M=yl;else if(C>=a){var le=s?null:n0(n);if(le)return Fa(le);U=!1,M=Xs,Y=new Pr}else Y=s?[]:G;e:for(;++f<C;){var ce=n[f],fe=s?s(ce):ce;if(ce=l||ce!==0?ce:0,U&&fe===fe){for(var be=Y.length;be--;)if(Y[be]===fe)continue e;s&&Y.push(fe),G.push(ce)}else M(Y,fe,l)||(Y!==G&&Y.push(fe),G.push(ce))}return G}function Zl(n,s){s=cr(s,n);var l=-1,f=s.length;if(!f)return!0;for(var M=n==null||typeof n!="object"&&typeof n!="function";++l<f;){var C=s[l];if(typeof C=="string"){if(C==="__proto__"&&!Ut.call(n,"__proto__"))return!1;if(C==="constructor"&&l+1<f&&typeof s[l+1]=="string"&&s[l+1]==="prototype"){if(M&&l===0)continue;return!1}}}var U=rd(n,s);return U==null||delete U[Ri(oi(s))]}function Df(n,s,l,f){return ta(n,s,l(Lr(n,s)),f)}function no(n,s,l,f){for(var M=n.length,C=f?M:-1;(f?C--:++C<M)&&s(n[C],C,n););return l?ai(n,f?0:C,f?C+1:M):ai(n,f?C+1:0,f?M:C)}function Lf(n,s){var l=n;return l instanceof Mt&&(l=l.value()),Tl(s,function(f,M){return M.func.apply(M.thisArg,rr([f],M.args))},l)}function $l(n,s,l){var f=n.length;if(f<2)return f?lr(n[0]):[];for(var M=-1,C=Q(f);++M<f;)for(var U=n[M],G=-1;++G<f;)G!=M&&(C[M]=js(C[M]||U,n[G],s,l));return lr(xn(C,1),s,l)}function If(n,s,l){for(var f=-1,M=n.length,C=s.length,U={};++f<M;){var G=f<C?s[f]:t;l(U,n[f],G)}return U}function Jl(n){return Qt(n)?n:[]}function jl(n){return typeof n=="function"?n:Gn}function cr(n,s){return nt(n)?n:oc(n,s)?[n]:ld(Nt(n))}var q_=dt;function ur(n,s,l){var f=n.length;return l=l===t?f:l,!s&&l>=f?n:ai(n,s,l)}var Uf=Ig||function(n){return vn.clearTimeout(n)};function Nf(n,s){if(s)return n.slice();var l=n.length,f=tf?tf(l):new n.constructor(l);return n.copy(f),f}function Ql(n){var s=new n.constructor(n.byteLength);return new Va(s).set(new Va(n)),s}function Y_(n,s){var l=s?Ql(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function K_(n){var s=new n.constructor(n.source,ks.exec(n));return s.lastIndex=n.lastIndex,s}function Z_(n){return $s?zt($s.call(n)):{}}function Ff(n,s){var l=s?Ql(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Of(n,s){if(n!==s){var l=n!==t,f=n===null,M=n===n,C=Yn(n),U=s!==t,G=s===null,Y=s===s,le=Yn(s);if(!G&&!le&&!C&&n>s||C&&U&&Y&&!G&&!le||f&&U&&Y||!l&&Y||!M)return 1;if(!f&&!C&&!le&&n<s||le&&l&&M&&!f&&!C||G&&l&&M||!U&&M||!Y)return-1}return 0}function $_(n,s,l){for(var f=-1,M=n.criteria,C=s.criteria,U=M.length,G=l.length;++f<U;){var Y=Of(M[f],C[f]);if(Y){if(f>=G)return Y;var le=l[f];return Y*(le=="desc"?-1:1)}}return n.index-s.index}function Bf(n,s,l,f){for(var M=-1,C=n.length,U=l.length,G=-1,Y=s.length,le=sn(C-U,0),ce=Q(Y+le),fe=!f;++G<Y;)ce[G]=s[G];for(;++M<U;)(fe||M<C)&&(ce[l[M]]=n[M]);for(;le--;)ce[G++]=n[M++];return ce}function zf(n,s,l,f){for(var M=-1,C=n.length,U=-1,G=l.length,Y=-1,le=s.length,ce=sn(C-G,0),fe=Q(ce+le),be=!f;++M<ce;)fe[M]=n[M];for(var He=M;++Y<le;)fe[He+Y]=s[Y];for(;++U<G;)(be||M<C)&&(fe[He+l[U]]=n[M++]);return fe}function On(n,s){var l=-1,f=n.length;for(s||(s=Q(f));++l<f;)s[l]=n[l];return s}function Ci(n,s,l,f){var M=!l;l||(l={});for(var C=-1,U=s.length;++C<U;){var G=s[C],Y=f?f(l[G],n[G],G,l,n):t;Y===t&&(Y=n[G]),M?Gi(l,G,Y):Js(l,G,Y)}return l}function J_(n,s){return Ci(n,ac(n),s)}function j_(n,s){return Ci(n,jf(n),s)}function io(n,s){return function(l,f){var M=nt(l)?ig:M_,C=s?s():{};return M(l,n,Ke(f,2),C)}}function ls(n){return dt(function(s,l){var f=-1,M=l.length,C=M>1?l[M-1]:t,U=M>2?l[2]:t;for(C=n.length>3&&typeof C=="function"?(M--,C):t,U&&Un(l[0],l[1],U)&&(C=M<3?t:C,M=1),s=zt(s);++f<M;){var G=l[f];G&&n(s,G,f,C)}return s})}function Gf(n,s){return function(l,f){if(l==null)return l;if(!Bn(l))return n(l,f);for(var M=l.length,C=s?M:-1,U=zt(l);(s?C--:++C<M)&&f(U[C],C,U)!==!1;);return l}}function Hf(n){return function(s,l,f){for(var M=-1,C=zt(s),U=f(s),G=U.length;G--;){var Y=U[n?G:++M];if(l(C[Y],Y,C)===!1)break}return s}}function Q_(n,s,l){var f=s&v,M=na(n);function C(){var U=this&&this!==vn&&this instanceof C?M:n;return U.apply(f?l:this,arguments)}return C}function Vf(n){return function(s){s=Nt(s);var l=ts(s)?pi(s):t,f=l?l[0]:s.charAt(0),M=l?ur(l,1).join(""):s.slice(1);return f[n]()+M}}function cs(n){return function(s){return Tl(Gd(zd(s).replace(km,"")),n,"")}}function na(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=os(n.prototype),f=n.apply(l,s);return Kt(f)?f:l}}function e0(n,s,l){var f=na(n);function M(){for(var C=arguments.length,U=Q(C),G=C,Y=us(M);G--;)U[G]=arguments[G];var le=C<3&&U[0]!==Y&&U[C-1]!==Y?[]:sr(U,Y);if(C-=le.length,C<l)return Yf(n,s,ro,M.placeholder,t,U,le,t,t,l-C);var ce=this&&this!==vn&&this instanceof M?f:n;return Wn(ce,this,U)}return M}function kf(n){return function(s,l,f){var M=zt(s);if(!Bn(s)){var C=Ke(l,3);s=fn(s),l=function(G){return C(M[G],G,M)}}var U=n(s,l,f);return U>-1?M[C?s[U]:U]:t}}function Wf(n){return Vi(function(s){var l=s.length,f=l,M=ri.prototype.thru;for(n&&s.reverse();f--;){var C=s[f];if(typeof C!="function")throw new ii(c);if(M&&!U&&lo(C)=="wrapper")var U=new ri([],!0)}for(f=U?f:l;++f<l;){C=s[f];var G=lo(C),Y=G=="wrapper"?rc(C):t;Y&&lc(Y[0])&&Y[1]==(R|I|F|O)&&!Y[4].length&&Y[9]==1?U=U[lo(Y[0])].apply(U,Y[3]):U=C.length==1&&lc(C)?U[G]():U.thru(C)}return function(){var le=arguments,ce=le[0];if(U&&le.length==1&&nt(ce))return U.plant(ce).value();for(var fe=0,be=l?s[fe].apply(this,le):ce;++fe<l;)be=s[fe].call(this,be);return be}})}function ro(n,s,l,f,M,C,U,G,Y,le){var ce=s&R,fe=s&v,be=s&g,He=s&(I|D),Ze=s&S,ht=be?t:na(n);function $e(){for(var gt=arguments.length,Et=Q(gt),Kn=gt;Kn--;)Et[Kn]=arguments[Kn];if(He)var Nn=us($e),Zn=fg(Et,Nn);if(f&&(Et=Bf(Et,f,M,He)),C&&(Et=zf(Et,C,U,He)),gt-=Zn,He&&gt<le){var en=sr(Et,Nn);return Yf(n,s,ro,$e.placeholder,l,Et,en,G,Y,le-gt)}var _i=fe?l:this,qi=be?_i[n]:n;return gt=Et.length,G?Et=M0(Et,G):Ze&&gt>1&&Et.reverse(),ce&&Y<gt&&(Et.length=Y),this&&this!==vn&&this instanceof $e&&(qi=ht||na(qi)),qi.apply(_i,Et)}return $e}function Xf(n,s){return function(l,f){return C_(l,n,s(f),{})}}function so(n,s){return function(l,f){var M;if(l===t&&f===t)return s;if(l!==t&&(M=l),f!==t){if(M===t)return f;typeof l=="string"||typeof f=="string"?(l=qn(l),f=qn(f)):(l=Pf(l),f=Pf(f)),M=n(l,f)}return M}}function ec(n){return Vi(function(s){return s=qt(s,Xn(Ke())),dt(function(l){var f=this;return n(s,function(M){return Wn(M,f,l)})})})}function ao(n,s){s=s===t?" ":qn(s);var l=s.length;if(l<2)return l?Yl(s,n):s;var f=Yl(s,qa(n/ns(s)));return ts(s)?ur(pi(f),0,n).join(""):f.slice(0,n)}function t0(n,s,l,f){var M=s&v,C=na(n);function U(){for(var G=-1,Y=arguments.length,le=-1,ce=f.length,fe=Q(ce+Y),be=this&&this!==vn&&this instanceof U?C:n;++le<ce;)fe[le]=f[le];for(;Y--;)fe[le++]=arguments[++G];return Wn(be,M?l:this,fe)}return U}function qf(n){return function(s,l,f){return f&&typeof f!="number"&&Un(s,l,f)&&(l=f=t),s=Xi(s),l===t?(l=s,s=0):l=Xi(l),f=f===t?s<l?1:-1:Xi(f),G_(s,l,f,n)}}function oo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=li(s),l=li(l)),n(s,l)}}function Yf(n,s,l,f,M,C,U,G,Y,le){var ce=s&I,fe=ce?U:t,be=ce?t:U,He=ce?C:t,Ze=ce?t:C;s|=ce?F:B,s&=~(ce?B:F),s&L||(s&=-4);var ht=[n,s,M,He,fe,Ze,be,G,Y,le],$e=l.apply(t,ht);return lc(n)&&sd($e,ht),$e.placeholder=f,ad($e,n,s)}function tc(n){var s=rn[n];return function(l,f){if(l=li(l),f=f==null?0:bn(lt(f),292),f&&af(l)){var M=(Nt(l)+"e").split("e"),C=s(M[0]+"e"+(+M[1]+f));return M=(Nt(C)+"e").split("e"),+(M[0]+"e"+(+M[1]-f))}return s(l)}}var n0=ss&&1/Fa(new ss([,-0]))[1]==$?function(n){return new ss(n)}:yc;function Kf(n){return function(s){var l=An(s);return l==rt?Dl(s):l==pt?xg(s):hg(s,n(s))}}function Hi(n,s,l,f,M,C,U,G){var Y=s&g;if(!Y&&typeof n!="function")throw new ii(c);var le=f?f.length:0;if(le||(s&=-97,f=M=t),U=U===t?U:sn(lt(U),0),G=G===t?G:lt(G),le-=M?M.length:0,s&B){var ce=f,fe=M;f=M=t}var be=Y?t:rc(n),He=[n,s,l,f,M,ce,fe,C,U,G];if(be&&_0(He,be),n=He[0],s=He[1],l=He[2],f=He[3],M=He[4],G=He[9]=He[9]===t?Y?0:n.length:sn(He[9]-le,0),!G&&s&(I|D)&&(s&=-25),!s||s==v)var Ze=Q_(n,s,l);else s==I||s==D?Ze=e0(n,s,G):(s==F||s==(v|F))&&!M.length?Ze=t0(n,s,l,f):Ze=ro.apply(t,He);var ht=be?Cf:sd;return ad(ht(Ze,He),n,s)}function Zf(n,s,l,f){return n===t||gi(n,rs[l])&&!Ut.call(f,l)?s:n}function $f(n,s,l,f,M,C){return Kt(n)&&Kt(s)&&(C.set(s,n),eo(n,s,t,$f,C),C.delete(s)),n}function i0(n){return sa(n)?t:n}function Jf(n,s,l,f,M,C){var U=l&y,G=n.length,Y=s.length;if(G!=Y&&!(U&&Y>G))return!1;var le=C.get(n),ce=C.get(s);if(le&&ce)return le==s&&ce==n;var fe=-1,be=!0,He=l&A?new Pr:t;for(C.set(n,s),C.set(s,n);++fe<G;){var Ze=n[fe],ht=s[fe];if(f)var $e=U?f(ht,Ze,fe,s,n,C):f(Ze,ht,fe,n,s,C);if($e!==t){if($e)continue;be=!1;break}if(He){if(!bl(s,function(gt,Et){if(!Xs(He,Et)&&(Ze===gt||M(Ze,gt,l,f,C)))return He.push(Et)})){be=!1;break}}else if(!(Ze===ht||M(Ze,ht,l,f,C))){be=!1;break}}return C.delete(n),C.delete(s),be}function r0(n,s,l,f,M,C,U){switch(l){case te:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case ue:return!(n.byteLength!=s.byteLength||!C(new Va(n),new Va(s)));case Pe:case Je:case Tt:return gi(+n,+s);case mt:return n.name==s.name&&n.message==s.message;case xt:case Ue:return n==s+"";case rt:var G=Dl;case pt:var Y=f&y;if(G||(G=Fa),n.size!=s.size&&!Y)return!1;var le=U.get(n);if(le)return le==s;f|=A,U.set(n,s);var ce=Jf(G(n),G(s),f,M,C,U);return U.delete(n),ce;case P:if($s)return $s.call(n)==$s.call(s)}return!1}function s0(n,s,l,f,M,C){var U=l&y,G=nc(n),Y=G.length,le=nc(s),ce=le.length;if(Y!=ce&&!U)return!1;for(var fe=Y;fe--;){var be=G[fe];if(!(U?be in s:Ut.call(s,be)))return!1}var He=C.get(n),Ze=C.get(s);if(He&&Ze)return He==s&&Ze==n;var ht=!0;C.set(n,s),C.set(s,n);for(var $e=U;++fe<Y;){be=G[fe];var gt=n[be],Et=s[be];if(f)var Kn=U?f(Et,gt,be,s,n,C):f(gt,Et,be,n,s,C);if(!(Kn===t?gt===Et||M(gt,Et,l,f,C):Kn)){ht=!1;break}$e||($e=be=="constructor")}if(ht&&!$e){var Nn=n.constructor,Zn=s.constructor;Nn!=Zn&&"constructor"in n&&"constructor"in s&&!(typeof Nn=="function"&&Nn instanceof Nn&&typeof Zn=="function"&&Zn instanceof Zn)&&(ht=!1)}return C.delete(n),C.delete(s),ht}function Vi(n){return uc(id(n,t,fd),n+"")}function nc(n){return _f(n,fn,ac)}function ic(n){return _f(n,zn,jf)}var rc=Ka?function(n){return Ka.get(n)}:yc;function lo(n){for(var s=n.name+"",l=as[s],f=Ut.call(as,s)?l.length:0;f--;){var M=l[f],C=M.func;if(C==null||C==n)return M.name}return s}function us(n){var s=Ut.call(b,"placeholder")?b:n;return s.placeholder}function Ke(){var n=b.iteratee||Sc;return n=n===Sc?Mf:n,arguments.length?n(arguments[0],arguments[1]):n}function co(n,s){var l=n.__data__;return d0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function sc(n){for(var s=fn(n),l=s.length;l--;){var f=s[l],M=n[f];s[l]=[f,M,td(M)]}return s}function Ir(n,s){var l=gg(n,s);return xf(l)?l:t}function a0(n){var s=Ut.call(n,Cr),l=n[Cr];try{n[Cr]=t;var f=!0}catch{}var M=Ga.call(n);return f&&(s?n[Cr]=l:delete n[Cr]),M}var ac=Il?function(n){return n==null?[]:(n=zt(n),ir(Il(n),function(s){return rf.call(n,s)}))}:Tc,jf=Il?function(n){for(var s=[];n;)rr(s,ac(n)),n=ka(n);return s}:Tc,An=In;(Ul&&An(new Ul(new ArrayBuffer(1)))!=te||Ys&&An(new Ys)!=rt||Nl&&An(Nl.resolve())!=z||ss&&An(new ss)!=pt||Ks&&An(new Ks)!=k)&&(An=function(n){var s=In(n),l=s==Lt?n.constructor:t,f=l?Ur(l):"";if(f)switch(f){case Vg:return te;case kg:return rt;case Wg:return z;case Xg:return pt;case qg:return k}return s});function o0(n,s,l){for(var f=-1,M=l.length;++f<M;){var C=l[f],U=C.size;switch(C.type){case"drop":n+=U;break;case"dropRight":s-=U;break;case"take":s=bn(s,n+U);break;case"takeRight":n=sn(n,s-U);break}}return{start:n,end:s}}function l0(n){var s=n.match(Ra);return s?s[1].split(Oi):[]}function Qf(n,s,l){s=cr(s,n);for(var f=-1,M=s.length,C=!1;++f<M;){var U=Ri(s[f]);if(!(C=n!=null&&l(n,U)))break;n=n[U]}return C||++f!=M?C:(M=n==null?0:n.length,!!M&&_o(M)&&ki(U,M)&&(nt(n)||Nr(n)))}function c0(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Ut.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function ed(n){return typeof n.constructor=="function"&&!ia(n)?os(ka(n)):{}}function u0(n,s,l){var f=n.constructor;switch(s){case ue:return Ql(n);case Pe:case Je:return new f(+n);case te:return Y_(n,l);case Ge:case _e:case Fe:case qe:case pe:case xe:case Ie:case Oe:case ve:return Ff(n,l);case rt:return new f;case Tt:case Ue:return new f(n);case xt:return K_(n);case pt:return new f;case P:return Z_(n)}}function h0(n,s){var l=s.length;if(!l)return n;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),n.replace(Ca,`{
/* [wrapped with `+s+`] */
`)}function f0(n){return nt(n)||Nr(n)||!!(sf&&n&&n[sf])}function ki(n,s){var l=typeof n;return s=s??oe,!!s&&(l=="number"||l!="symbol"&&_l.test(n))&&n>-1&&n%1==0&&n<s}function Un(n,s,l){if(!Kt(l))return!1;var f=typeof s;return(f=="number"?Bn(l)&&ki(s,l.length):f=="string"&&s in l)?gi(l[s],n):!1}function oc(n,s){if(nt(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Yn(n)?!0:ei.test(n)||!Rt.test(n)||s!=null&&n in zt(s)}function d0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function lc(n){var s=lo(n),l=b[s];if(typeof l!="function"||!(s in Mt.prototype))return!1;if(n===l)return!0;var f=rc(l);return!!f&&n===f[0]}function p0(n){return!!ef&&ef in n}var m0=Ba?Wi:bc;function ia(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||rs;return n===l}function td(n){return n===n&&!Kt(n)}function nd(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in zt(l))}}function g0(n){var s=mo(n,function(f){return l.size===h&&l.clear(),f}),l=s.cache;return s}function _0(n,s){var l=n[1],f=s[1],M=l|f,C=M<(v|g|R),U=f==R&&l==I||f==R&&l==O&&n[7].length<=s[8]||f==(R|O)&&s[7].length<=s[8]&&l==I;if(!(C||U))return n;f&v&&(n[2]=s[2],M|=l&v?0:L);var G=s[3];if(G){var Y=n[3];n[3]=Y?Bf(Y,G,s[4]):G,n[4]=Y?sr(n[3],p):s[4]}return G=s[5],G&&(Y=n[5],n[5]=Y?zf(Y,G,s[6]):G,n[6]=Y?sr(n[5],p):s[6]),G=s[7],G&&(n[7]=G),f&R&&(n[8]=n[8]==null?s[8]:bn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function v0(n){var s=[];if(n!=null)for(var l in zt(n))s.push(l);return s}function x0(n){return Ga.call(n)}function id(n,s,l){return s=sn(s===t?n.length-1:s,0),function(){for(var f=arguments,M=-1,C=sn(f.length-s,0),U=Q(C);++M<C;)U[M]=f[s+M];M=-1;for(var G=Q(s+1);++M<s;)G[M]=f[M];return G[s]=l(U),Wn(n,this,G)}}function rd(n,s){return s.length<2?n:Lr(n,ai(s,0,-1))}function M0(n,s){for(var l=n.length,f=bn(s.length,l),M=On(n);f--;){var C=s[f];n[f]=ki(C,l)?M[C]:t}return n}function cc(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var sd=od(Cf),ra=Ng||function(n,s){return vn.setTimeout(n,s)},uc=od(k_);function ad(n,s,l){var f=s+"";return uc(n,h0(f,S0(l0(f),l)))}function od(n){var s=0,l=0;return function(){var f=zg(),M=K-(f-l);if(l=f,M>0){if(++s>=q)return arguments[0]}else s=0;return n.apply(t,arguments)}}function uo(n,s){var l=-1,f=n.length,M=f-1;for(s=s===t?f:s;++l<s;){var C=ql(l,M),U=n[C];n[C]=n[l],n[l]=U}return n.length=s,n}var ld=g0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(di,function(l,f,M,C){s.push(M?C.replace(Da,"$1"):f||l)}),s});function Ri(n){if(typeof n=="string"||Yn(n))return n;var s=n+"";return s=="0"&&1/n==-$?"-0":s}function Ur(n){if(n!=null){try{return za.call(n)}catch{}try{return n+""}catch{}}return""}function S0(n,s){return ni(Ht,function(l){var f="_."+l[0];s&l[1]&&!Ua(n,f)&&n.push(f)}),n.sort()}function cd(n){if(n instanceof Mt)return n.clone();var s=new ri(n.__wrapped__,n.__chain__);return s.__actions__=On(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function E0(n,s,l){(l?Un(n,s,l):s===t)?s=1:s=sn(lt(s),0);var f=n==null?0:n.length;if(!f||s<1)return[];for(var M=0,C=0,U=Q(qa(f/s));M<f;)U[C++]=ai(n,M,M+=s);return U}function y0(n){for(var s=-1,l=n==null?0:n.length,f=0,M=[];++s<l;){var C=n[s];C&&(M[f++]=C)}return M}function T0(){var n=arguments.length;if(!n)return[];for(var s=Q(n-1),l=arguments[0],f=n;f--;)s[f-1]=arguments[f];return rr(nt(l)?On(l):[l],xn(s,1))}var b0=dt(function(n,s){return Qt(n)?js(n,xn(s,1,Qt,!0)):[]}),A0=dt(function(n,s){var l=oi(s);return Qt(l)&&(l=t),Qt(n)?js(n,xn(s,1,Qt,!0),Ke(l,2)):[]}),w0=dt(function(n,s){var l=oi(s);return Qt(l)&&(l=t),Qt(n)?js(n,xn(s,1,Qt,!0),t,l):[]});function C0(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===t?1:lt(s),ai(n,s<0?0:s,f)):[]}function R0(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===t?1:lt(s),s=f-s,ai(n,0,s<0?0:s)):[]}function P0(n,s){return n&&n.length?no(n,Ke(s,3),!0,!0):[]}function D0(n,s){return n&&n.length?no(n,Ke(s,3),!0):[]}function L0(n,s,l,f){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&Un(n,s,l)&&(l=0,f=M),T_(n,s,l,f)):[]}function ud(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:lt(l);return M<0&&(M=sn(f+M,0)),Na(n,Ke(s,3),M)}function hd(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=f-1;return l!==t&&(M=lt(l),M=l<0?sn(f+M,0):bn(M,f-1)),Na(n,Ke(s,3),M,!0)}function fd(n){var s=n==null?0:n.length;return s?xn(n,1):[]}function I0(n){var s=n==null?0:n.length;return s?xn(n,$):[]}function U0(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:lt(s),xn(n,s)):[]}function N0(n){for(var s=-1,l=n==null?0:n.length,f={};++s<l;){var M=n[s];f[M[0]]=M[1]}return f}function dd(n){return n&&n.length?n[0]:t}function F0(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:lt(l);return M<0&&(M=sn(f+M,0)),es(n,s,M)}function O0(n){var s=n==null?0:n.length;return s?ai(n,0,-1):[]}var B0=dt(function(n){var s=qt(n,Jl);return s.length&&s[0]===n[0]?Hl(s):[]}),z0=dt(function(n){var s=oi(n),l=qt(n,Jl);return s===oi(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Hl(l,Ke(s,2)):[]}),G0=dt(function(n){var s=oi(n),l=qt(n,Jl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Hl(l,t,s):[]});function H0(n,s){return n==null?"":Og.call(n,s)}function oi(n){var s=n==null?0:n.length;return s?n[s-1]:t}function V0(n,s,l){var f=n==null?0:n.length;if(!f)return-1;var M=f;return l!==t&&(M=lt(l),M=M<0?sn(f+M,0):bn(M,f-1)),s===s?Sg(n,s,M):Na(n,qh,M,!0)}function k0(n,s){return n&&n.length?Tf(n,lt(s)):t}var W0=dt(pd);function pd(n,s){return n&&n.length&&s&&s.length?Xl(n,s):n}function X0(n,s,l){return n&&n.length&&s&&s.length?Xl(n,s,Ke(l,2)):n}function q0(n,s,l){return n&&n.length&&s&&s.length?Xl(n,s,t,l):n}var Y0=Vi(function(n,s){var l=n==null?0:n.length,f=Ol(n,s);return wf(n,qt(s,function(M){return ki(M,l)?+M:M}).sort(Of)),f});function K0(n,s){var l=[];if(!(n&&n.length))return l;var f=-1,M=[],C=n.length;for(s=Ke(s,3);++f<C;){var U=n[f];s(U,f,n)&&(l.push(U),M.push(f))}return wf(n,M),l}function hc(n){return n==null?n:Hg.call(n)}function Z0(n,s,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&Un(n,s,l)?(s=0,l=f):(s=s==null?0:lt(s),l=l===t?f:lt(l)),ai(n,s,l)):[]}function $0(n,s){return to(n,s)}function J0(n,s,l){return Kl(n,s,Ke(l,2))}function j0(n,s){var l=n==null?0:n.length;if(l){var f=to(n,s);if(f<l&&gi(n[f],s))return f}return-1}function Q0(n,s){return to(n,s,!0)}function ev(n,s,l){return Kl(n,s,Ke(l,2),!0)}function tv(n,s){var l=n==null?0:n.length;if(l){var f=to(n,s,!0)-1;if(gi(n[f],s))return f}return-1}function nv(n){return n&&n.length?Rf(n):[]}function iv(n,s){return n&&n.length?Rf(n,Ke(s,2)):[]}function rv(n){var s=n==null?0:n.length;return s?ai(n,1,s):[]}function sv(n,s,l){return n&&n.length?(s=l||s===t?1:lt(s),ai(n,0,s<0?0:s)):[]}function av(n,s,l){var f=n==null?0:n.length;return f?(s=l||s===t?1:lt(s),s=f-s,ai(n,s<0?0:s,f)):[]}function ov(n,s){return n&&n.length?no(n,Ke(s,3),!1,!0):[]}function lv(n,s){return n&&n.length?no(n,Ke(s,3)):[]}var cv=dt(function(n){return lr(xn(n,1,Qt,!0))}),uv=dt(function(n){var s=oi(n);return Qt(s)&&(s=t),lr(xn(n,1,Qt,!0),Ke(s,2))}),hv=dt(function(n){var s=oi(n);return s=typeof s=="function"?s:t,lr(xn(n,1,Qt,!0),t,s)});function fv(n){return n&&n.length?lr(n):[]}function dv(n,s){return n&&n.length?lr(n,Ke(s,2)):[]}function pv(n,s){return s=typeof s=="function"?s:t,n&&n.length?lr(n,t,s):[]}function fc(n){if(!(n&&n.length))return[];var s=0;return n=ir(n,function(l){if(Qt(l))return s=sn(l.length,s),!0}),Rl(s,function(l){return qt(n,Al(l))})}function md(n,s){if(!(n&&n.length))return[];var l=fc(n);return s==null?l:qt(l,function(f){return Wn(s,t,f)})}var mv=dt(function(n,s){return Qt(n)?js(n,s):[]}),gv=dt(function(n){return $l(ir(n,Qt))}),_v=dt(function(n){var s=oi(n);return Qt(s)&&(s=t),$l(ir(n,Qt),Ke(s,2))}),vv=dt(function(n){var s=oi(n);return s=typeof s=="function"?s:t,$l(ir(n,Qt),t,s)}),xv=dt(fc);function Mv(n,s){return If(n||[],s||[],Js)}function Sv(n,s){return If(n||[],s||[],ta)}var Ev=dt(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,md(n,l)});function gd(n){var s=b(n);return s.__chain__=!0,s}function yv(n,s){return s(n),n}function ho(n,s){return s(n)}var Tv=Vi(function(n){var s=n.length,l=s?n[0]:0,f=this.__wrapped__,M=function(C){return Ol(C,n)};return s>1||this.__actions__.length||!(f instanceof Mt)||!ki(l)?this.thru(M):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:ho,args:[M],thisArg:t}),new ri(f,this.__chain__).thru(function(C){return s&&!C.length&&C.push(t),C}))});function bv(){return gd(this)}function Av(){return new ri(this.value(),this.__chain__)}function wv(){this.__values__===t&&(this.__values__=Pd(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function Cv(){return this}function Rv(n){for(var s,l=this;l instanceof $a;){var f=cd(l);f.__index__=0,f.__values__=t,s?M.__wrapped__=f:s=f;var M=f;l=l.__wrapped__}return M.__wrapped__=n,s}function Pv(){var n=this.__wrapped__;if(n instanceof Mt){var s=n;return this.__actions__.length&&(s=new Mt(this)),s=s.reverse(),s.__actions__.push({func:ho,args:[hc],thisArg:t}),new ri(s,this.__chain__)}return this.thru(hc)}function Dv(){return Lf(this.__wrapped__,this.__actions__)}var Lv=io(function(n,s,l){Ut.call(n,l)?++n[l]:Gi(n,l,1)});function Iv(n,s,l){var f=nt(n)?Wh:y_;return l&&Un(n,s,l)&&(s=t),f(n,Ke(s,3))}function Uv(n,s){var l=nt(n)?ir:mf;return l(n,Ke(s,3))}var Nv=kf(ud),Fv=kf(hd);function Ov(n,s){return xn(fo(n,s),1)}function Bv(n,s){return xn(fo(n,s),$)}function zv(n,s,l){return l=l===t?1:lt(l),xn(fo(n,s),l)}function _d(n,s){var l=nt(n)?ni:or;return l(n,Ke(s,3))}function vd(n,s){var l=nt(n)?rg:pf;return l(n,Ke(s,3))}var Gv=io(function(n,s,l){Ut.call(n,l)?n[l].push(s):Gi(n,l,[s])});function Hv(n,s,l,f){n=Bn(n)?n:fs(n),l=l&&!f?lt(l):0;var M=n.length;return l<0&&(l=sn(M+l,0)),vo(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&es(n,s,l)>-1}var Vv=dt(function(n,s,l){var f=-1,M=typeof s=="function",C=Bn(n)?Q(n.length):[];return or(n,function(U){C[++f]=M?Wn(s,U,l):Qs(U,s,l)}),C}),kv=io(function(n,s,l){Gi(n,l,s)});function fo(n,s){var l=nt(n)?qt:Sf;return l(n,Ke(s,3))}function Wv(n,s,l,f){return n==null?[]:(nt(s)||(s=s==null?[]:[s]),l=f?t:l,nt(l)||(l=l==null?[]:[l]),bf(n,s,l))}var Xv=io(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function qv(n,s,l){var f=nt(n)?Tl:Kh,M=arguments.length<3;return f(n,Ke(s,4),l,M,or)}function Yv(n,s,l){var f=nt(n)?sg:Kh,M=arguments.length<3;return f(n,Ke(s,4),l,M,pf)}function Kv(n,s){var l=nt(n)?ir:mf;return l(n,go(Ke(s,3)))}function Zv(n){var s=nt(n)?uf:H_;return s(n)}function $v(n,s,l){(l?Un(n,s,l):s===t)?s=1:s=lt(s);var f=nt(n)?v_:V_;return f(n,s)}function Jv(n){var s=nt(n)?x_:W_;return s(n)}function jv(n){if(n==null)return 0;if(Bn(n))return vo(n)?ns(n):n.length;var s=An(n);return s==rt||s==pt?n.size:kl(n).length}function Qv(n,s,l){var f=nt(n)?bl:X_;return l&&Un(n,s,l)&&(s=t),f(n,Ke(s,3))}var ex=dt(function(n,s){if(n==null)return[];var l=s.length;return l>1&&Un(n,s[0],s[1])?s=[]:l>2&&Un(s[0],s[1],s[2])&&(s=[s[0]]),bf(n,xn(s,1),[])}),po=Ug||function(){return vn.Date.now()};function tx(n,s){if(typeof s!="function")throw new ii(c);return n=lt(n),function(){if(--n<1)return s.apply(this,arguments)}}function xd(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Hi(n,R,t,t,t,t,s)}function Md(n,s){var l;if(typeof s!="function")throw new ii(c);return n=lt(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var dc=dt(function(n,s,l){var f=v;if(l.length){var M=sr(l,us(dc));f|=F}return Hi(n,f,s,l,M)}),Sd=dt(function(n,s,l){var f=v|g;if(l.length){var M=sr(l,us(Sd));f|=F}return Hi(s,f,n,l,M)});function Ed(n,s,l){s=l?t:s;var f=Hi(n,I,t,t,t,t,t,s);return f.placeholder=Ed.placeholder,f}function yd(n,s,l){s=l?t:s;var f=Hi(n,D,t,t,t,t,t,s);return f.placeholder=yd.placeholder,f}function Td(n,s,l){var f,M,C,U,G,Y,le=0,ce=!1,fe=!1,be=!0;if(typeof n!="function")throw new ii(c);s=li(s)||0,Kt(l)&&(ce=!!l.leading,fe="maxWait"in l,C=fe?sn(li(l.maxWait)||0,s):C,be="trailing"in l?!!l.trailing:be);function He(en){var _i=f,qi=M;return f=M=t,le=en,U=n.apply(qi,_i),U}function Ze(en){return le=en,G=ra(gt,s),ce?He(en):U}function ht(en){var _i=en-Y,qi=en-le,kd=s-_i;return fe?bn(kd,C-qi):kd}function $e(en){var _i=en-Y,qi=en-le;return Y===t||_i>=s||_i<0||fe&&qi>=C}function gt(){var en=po();if($e(en))return Et(en);G=ra(gt,ht(en))}function Et(en){return G=t,be&&f?He(en):(f=M=t,U)}function Kn(){G!==t&&Uf(G),le=0,f=Y=M=G=t}function Nn(){return G===t?U:Et(po())}function Zn(){var en=po(),_i=$e(en);if(f=arguments,M=this,Y=en,_i){if(G===t)return Ze(Y);if(fe)return Uf(G),G=ra(gt,s),He(Y)}return G===t&&(G=ra(gt,s)),U}return Zn.cancel=Kn,Zn.flush=Nn,Zn}var nx=dt(function(n,s){return df(n,1,s)}),ix=dt(function(n,s,l){return df(n,li(s)||0,l)});function rx(n){return Hi(n,S)}function mo(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new ii(c);var l=function(){var f=arguments,M=s?s.apply(this,f):f[0],C=l.cache;if(C.has(M))return C.get(M);var U=n.apply(this,f);return l.cache=C.set(M,U)||C,U};return l.cache=new(mo.Cache||zi),l}mo.Cache=zi;function go(n){if(typeof n!="function")throw new ii(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function sx(n){return Md(2,n)}var ax=q_(function(n,s){s=s.length==1&&nt(s[0])?qt(s[0],Xn(Ke())):qt(xn(s,1),Xn(Ke()));var l=s.length;return dt(function(f){for(var M=-1,C=bn(f.length,l);++M<C;)f[M]=s[M].call(this,f[M]);return Wn(n,this,f)})}),pc=dt(function(n,s){var l=sr(s,us(pc));return Hi(n,F,t,s,l)}),bd=dt(function(n,s){var l=sr(s,us(bd));return Hi(n,B,t,s,l)}),ox=Vi(function(n,s){return Hi(n,O,t,t,t,s)});function lx(n,s){if(typeof n!="function")throw new ii(c);return s=s===t?s:lt(s),dt(n,s)}function cx(n,s){if(typeof n!="function")throw new ii(c);return s=s==null?0:sn(lt(s),0),dt(function(l){var f=l[s],M=ur(l,0,s);return f&&rr(M,f),Wn(n,this,M)})}function ux(n,s,l){var f=!0,M=!0;if(typeof n!="function")throw new ii(c);return Kt(l)&&(f="leading"in l?!!l.leading:f,M="trailing"in l?!!l.trailing:M),Td(n,s,{leading:f,maxWait:s,trailing:M})}function hx(n){return xd(n,1)}function fx(n,s){return pc(jl(s),n)}function dx(){if(!arguments.length)return[];var n=arguments[0];return nt(n)?n:[n]}function px(n){return si(n,x)}function mx(n,s){return s=typeof s=="function"?s:t,si(n,x,s)}function gx(n){return si(n,m|x)}function _x(n,s){return s=typeof s=="function"?s:t,si(n,m|x,s)}function vx(n,s){return s==null||ff(n,s,fn(s))}function gi(n,s){return n===s||n!==n&&s!==s}var xx=oo(Gl),Mx=oo(function(n,s){return n>=s}),Nr=vf((function(){return arguments})())?vf:function(n){return $t(n)&&Ut.call(n,"callee")&&!rf.call(n,"callee")},nt=Q.isArray,Sx=Bh?Xn(Bh):R_;function Bn(n){return n!=null&&_o(n.length)&&!Wi(n)}function Qt(n){return $t(n)&&Bn(n)}function Ex(n){return n===!0||n===!1||$t(n)&&In(n)==Pe}var hr=Fg||bc,yx=zh?Xn(zh):P_;function Tx(n){return $t(n)&&n.nodeType===1&&!sa(n)}function bx(n){if(n==null)return!0;if(Bn(n)&&(nt(n)||typeof n=="string"||typeof n.splice=="function"||hr(n)||hs(n)||Nr(n)))return!n.length;var s=An(n);if(s==rt||s==pt)return!n.size;if(ia(n))return!kl(n).length;for(var l in n)if(Ut.call(n,l))return!1;return!0}function Ax(n,s){return ea(n,s)}function wx(n,s,l){l=typeof l=="function"?l:t;var f=l?l(n,s):t;return f===t?ea(n,s,t,l):!!f}function mc(n){if(!$t(n))return!1;var s=In(n);return s==mt||s==ze||typeof n.message=="string"&&typeof n.name=="string"&&!sa(n)}function Cx(n){return typeof n=="number"&&af(n)}function Wi(n){if(!Kt(n))return!1;var s=In(n);return s==Yt||s==vt||s==de||s==Zt}function Ad(n){return typeof n=="number"&&n==lt(n)}function _o(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=oe}function Kt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function $t(n){return n!=null&&typeof n=="object"}var wd=Gh?Xn(Gh):L_;function Rx(n,s){return n===s||Vl(n,s,sc(s))}function Px(n,s,l){return l=typeof l=="function"?l:t,Vl(n,s,sc(s),l)}function Dx(n){return Cd(n)&&n!=+n}function Lx(n){if(m0(n))throw new et(o);return xf(n)}function Ix(n){return n===null}function Ux(n){return n==null}function Cd(n){return typeof n=="number"||$t(n)&&In(n)==Tt}function sa(n){if(!$t(n)||In(n)!=Lt)return!1;var s=ka(n);if(s===null)return!0;var l=Ut.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&za.call(l)==Pg}var gc=Hh?Xn(Hh):I_;function Nx(n){return Ad(n)&&n>=-oe&&n<=oe}var Rd=Vh?Xn(Vh):U_;function vo(n){return typeof n=="string"||!nt(n)&&$t(n)&&In(n)==Ue}function Yn(n){return typeof n=="symbol"||$t(n)&&In(n)==P}var hs=kh?Xn(kh):N_;function Fx(n){return n===t}function Ox(n){return $t(n)&&An(n)==k}function Bx(n){return $t(n)&&In(n)==se}var zx=oo(Wl),Gx=oo(function(n,s){return n<=s});function Pd(n){if(!n)return[];if(Bn(n))return vo(n)?pi(n):On(n);if(qs&&n[qs])return vg(n[qs]());var s=An(n),l=s==rt?Dl:s==pt?Fa:fs;return l(n)}function Xi(n){if(!n)return n===0?n:0;if(n=li(n),n===$||n===-$){var s=n<0?-1:1;return s*we}return n===n?n:0}function lt(n){var s=Xi(n),l=s%1;return s===s?l?s-l:s:0}function Dd(n){return n?Dr(lt(n),0,Ee):0}function li(n){if(typeof n=="number")return n;if(Yn(n))return Se;if(Kt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Kt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Zh(n);var l=La.test(n);return l||gl.test(n)?tg(n.slice(2),l?2:8):Jr.test(n)?Se:+n}function Ld(n){return Ci(n,zn(n))}function Hx(n){return n?Dr(lt(n),-oe,oe):n===0?n:0}function Nt(n){return n==null?"":qn(n)}var Vx=ls(function(n,s){if(ia(s)||Bn(s)){Ci(s,fn(s),n);return}for(var l in s)Ut.call(s,l)&&Js(n,l,s[l])}),Id=ls(function(n,s){Ci(s,zn(s),n)}),xo=ls(function(n,s,l,f){Ci(s,zn(s),n,f)}),kx=ls(function(n,s,l,f){Ci(s,fn(s),n,f)}),Wx=Vi(Ol);function Xx(n,s){var l=os(n);return s==null?l:hf(l,s)}var qx=dt(function(n,s){n=zt(n);var l=-1,f=s.length,M=f>2?s[2]:t;for(M&&Un(s[0],s[1],M)&&(f=1);++l<f;)for(var C=s[l],U=zn(C),G=-1,Y=U.length;++G<Y;){var le=U[G],ce=n[le];(ce===t||gi(ce,rs[le])&&!Ut.call(n,le))&&(n[le]=C[le])}return n}),Yx=dt(function(n){return n.push(t,$f),Wn(Ud,t,n)});function Kx(n,s){return Xh(n,Ke(s,3),wi)}function Zx(n,s){return Xh(n,Ke(s,3),zl)}function $x(n,s){return n==null?n:Bl(n,Ke(s,3),zn)}function Jx(n,s){return n==null?n:gf(n,Ke(s,3),zn)}function jx(n,s){return n&&wi(n,Ke(s,3))}function Qx(n,s){return n&&zl(n,Ke(s,3))}function eM(n){return n==null?[]:Qa(n,fn(n))}function tM(n){return n==null?[]:Qa(n,zn(n))}function _c(n,s,l){var f=n==null?t:Lr(n,s);return f===t?l:f}function nM(n,s){return n!=null&&Qf(n,s,b_)}function vc(n,s){return n!=null&&Qf(n,s,A_)}var iM=Xf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ga.call(s)),n[s]=l},Mc(Gn)),rM=Xf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ga.call(s)),Ut.call(n,s)?n[s].push(l):n[s]=[l]},Ke),sM=dt(Qs);function fn(n){return Bn(n)?cf(n):kl(n)}function zn(n){return Bn(n)?cf(n,!0):F_(n)}function aM(n,s){var l={};return s=Ke(s,3),wi(n,function(f,M,C){Gi(l,s(f,M,C),f)}),l}function oM(n,s){var l={};return s=Ke(s,3),wi(n,function(f,M,C){Gi(l,M,s(f,M,C))}),l}var lM=ls(function(n,s,l){eo(n,s,l)}),Ud=ls(function(n,s,l,f){eo(n,s,l,f)}),cM=Vi(function(n,s){var l={};if(n==null)return l;var f=!1;s=qt(s,function(C){return C=cr(C,n),f||(f=C.length>1),C}),Ci(n,ic(n),l),f&&(l=si(l,m|_|x,i0));for(var M=s.length;M--;)Zl(l,s[M]);return l});function uM(n,s){return Nd(n,go(Ke(s)))}var hM=Vi(function(n,s){return n==null?{}:B_(n,s)});function Nd(n,s){if(n==null)return{};var l=qt(ic(n),function(f){return[f]});return s=Ke(s),Af(n,l,function(f,M){return s(f,M[0])})}function fM(n,s,l){s=cr(s,n);var f=-1,M=s.length;for(M||(M=1,n=t);++f<M;){var C=n==null?t:n[Ri(s[f])];C===t&&(f=M,C=l),n=Wi(C)?C.call(n):C}return n}function dM(n,s,l){return n==null?n:ta(n,s,l)}function pM(n,s,l,f){return f=typeof f=="function"?f:t,n==null?n:ta(n,s,l,f)}var Fd=Kf(fn),Od=Kf(zn);function mM(n,s,l){var f=nt(n),M=f||hr(n)||hs(n);if(s=Ke(s,4),l==null){var C=n&&n.constructor;M?l=f?new C:[]:Kt(n)?l=Wi(C)?os(ka(n)):{}:l={}}return(M?ni:wi)(n,function(U,G,Y){return s(l,U,G,Y)}),l}function gM(n,s){return n==null?!0:Zl(n,s)}function _M(n,s,l){return n==null?n:Df(n,s,jl(l))}function vM(n,s,l,f){return f=typeof f=="function"?f:t,n==null?n:Df(n,s,jl(l),f)}function fs(n){return n==null?[]:Pl(n,fn(n))}function xM(n){return n==null?[]:Pl(n,zn(n))}function MM(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=li(l),l=l===l?l:0),s!==t&&(s=li(s),s=s===s?s:0),Dr(li(n),s,l)}function SM(n,s,l){return s=Xi(s),l===t?(l=s,s=0):l=Xi(l),n=li(n),w_(n,s,l)}function EM(n,s,l){if(l&&typeof l!="boolean"&&Un(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Xi(n),s===t?(s=n,n=0):s=Xi(s)),n>s){var f=n;n=s,s=f}if(l||n%1||s%1){var M=of();return bn(n+M*(s-n+eg("1e-"+((M+"").length-1))),s)}return ql(n,s)}var yM=cs(function(n,s,l){return s=s.toLowerCase(),n+(l?Bd(s):s)});function Bd(n){return xc(Nt(n).toLowerCase())}function zd(n){return n=Nt(n),n&&n.replace(vl,dg).replace(Wm,"")}function TM(n,s,l){n=Nt(n),s=qn(s);var f=n.length;l=l===t?f:Dr(lt(l),0,f);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function bM(n){return n=Nt(n),n&&he.test(n)?n.replace(Re,pg):n}function AM(n){return n=Nt(n),n&&wa.test(n)?n.replace(Hs,"\\$&"):n}var wM=cs(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),CM=cs(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),RM=Vf("toLowerCase");function PM(n,s,l){n=Nt(n),s=lt(s);var f=s?ns(n):0;if(!s||f>=s)return n;var M=(s-f)/2;return ao(Ya(M),l)+n+ao(qa(M),l)}function DM(n,s,l){n=Nt(n),s=lt(s);var f=s?ns(n):0;return s&&f<s?n+ao(s-f,l):n}function LM(n,s,l){n=Nt(n),s=lt(s);var f=s?ns(n):0;return s&&f<s?ao(s-f,l)+n:n}function IM(n,s,l){return l||s==null?s=0:s&&(s=+s),Gg(Nt(n).replace(Ar,""),s||0)}function UM(n,s,l){return(l?Un(n,s,l):s===t)?s=1:s=lt(s),Yl(Nt(n),s)}function NM(){var n=arguments,s=Nt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var FM=cs(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function OM(n,s,l){return l&&typeof l!="number"&&Un(n,s,l)&&(s=l=t),l=l===t?Ee:l>>>0,l?(n=Nt(n),n&&(typeof s=="string"||s!=null&&!gc(s))&&(s=qn(s),!s&&ts(n))?ur(pi(n),0,l):n.split(s,l)):[]}var BM=cs(function(n,s,l){return n+(l?" ":"")+xc(s)});function zM(n,s,l){return n=Nt(n),l=l==null?0:Dr(lt(l),0,n.length),s=qn(s),n.slice(l,l+s.length)==s}function GM(n,s,l){var f=b.templateSettings;l&&Un(n,s,l)&&(s=t),n=Nt(n),s=xo({},s,f,Zf);var M=xo({},s.imports,f.imports,Zf),C=fn(M),U=Pl(M,C),G,Y,le=0,ce=s.interpolate||jr,fe="__p += '",be=Ll((s.escape||jr).source+"|"+ce.source+"|"+(ce===Ot?$r:jr).source+"|"+(s.evaluate||jr).source+"|$","g"),He="//# sourceURL="+(Ut.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zm+"]")+`
`;n.replace(be,function($e,gt,Et,Kn,Nn,Zn){return Et||(Et=Kn),fe+=n.slice(le,Zn).replace(xl,mg),gt&&(G=!0,fe+=`' +
__e(`+gt+`) +
'`),Nn&&(Y=!0,fe+=`';
`+Nn+`;
__p += '`),Et&&(fe+=`' +
((__t = (`+Et+`)) == null ? '' : __t) +
'`),le=Zn+$e.length,$e}),fe+=`';
`;var Ze=Ut.call(s,"variable")&&s.variable;if(!Ze)fe=`with (obj) {
`+fe+`
}
`;else if(Pa.test(Ze))throw new et(u);fe=(Y?fe.replace(at,""):fe).replace(V,"$1").replace(Ce,"$1;"),fe="function("+(Ze||"obj")+`) {
`+(Ze?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var ht=Hd(function(){return Dt(C,He+"return "+fe).apply(t,U)});if(ht.source=fe,mc(ht))throw ht;return ht}function HM(n){return Nt(n).toLowerCase()}function VM(n){return Nt(n).toUpperCase()}function kM(n,s,l){if(n=Nt(n),n&&(l||s===t))return Zh(n);if(!n||!(s=qn(s)))return n;var f=pi(n),M=pi(s),C=$h(f,M),U=Jh(f,M)+1;return ur(f,C,U).join("")}function WM(n,s,l){if(n=Nt(n),n&&(l||s===t))return n.slice(0,Qh(n)+1);if(!n||!(s=qn(s)))return n;var f=pi(n),M=Jh(f,pi(s))+1;return ur(f,0,M).join("")}function XM(n,s,l){if(n=Nt(n),n&&(l||s===t))return n.replace(Ar,"");if(!n||!(s=qn(s)))return n;var f=pi(n),M=$h(f,pi(s));return ur(f,M).join("")}function qM(n,s){var l=T,f=N;if(Kt(s)){var M="separator"in s?s.separator:M;l="length"in s?lt(s.length):l,f="omission"in s?qn(s.omission):f}n=Nt(n);var C=n.length;if(ts(n)){var U=pi(n);C=U.length}if(l>=C)return n;var G=l-ns(f);if(G<1)return f;var Y=U?ur(U,0,G).join(""):n.slice(0,G);if(M===t)return Y+f;if(U&&(G+=Y.length-G),gc(M)){if(n.slice(G).search(M)){var le,ce=Y;for(M.global||(M=Ll(M.source,Nt(ks.exec(M))+"g")),M.lastIndex=0;le=M.exec(ce);)var fe=le.index;Y=Y.slice(0,fe===t?G:fe)}}else if(n.indexOf(qn(M),G)!=G){var be=Y.lastIndexOf(M);be>-1&&(Y=Y.slice(0,be))}return Y+f}function YM(n){return n=Nt(n),n&&me.test(n)?n.replace(ge,Eg):n}var KM=cs(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),xc=Vf("toUpperCase");function Gd(n,s,l){return n=Nt(n),s=l?t:s,s===t?_g(n)?bg(n):lg(n):n.match(s)||[]}var Hd=dt(function(n,s){try{return Wn(n,t,s)}catch(l){return mc(l)?l:new et(l)}}),ZM=Vi(function(n,s){return ni(s,function(l){l=Ri(l),Gi(n,l,dc(n[l],n))}),n});function $M(n){var s=n==null?0:n.length,l=Ke();return n=s?qt(n,function(f){if(typeof f[1]!="function")throw new ii(c);return[l(f[0]),f[1]]}):[],dt(function(f){for(var M=-1;++M<s;){var C=n[M];if(Wn(C[0],this,f))return Wn(C[1],this,f)}})}function JM(n){return E_(si(n,m))}function Mc(n){return function(){return n}}function jM(n,s){return n==null||n!==n?s:n}var QM=Wf(),eS=Wf(!0);function Gn(n){return n}function Sc(n){return Mf(typeof n=="function"?n:si(n,m))}function tS(n){return Ef(si(n,m))}function nS(n,s){return yf(n,si(s,m))}var iS=dt(function(n,s){return function(l){return Qs(l,n,s)}}),rS=dt(function(n,s){return function(l){return Qs(n,l,s)}});function Ec(n,s,l){var f=fn(s),M=Qa(s,f);l==null&&!(Kt(s)&&(M.length||!f.length))&&(l=s,s=n,n=this,M=Qa(s,fn(s)));var C=!(Kt(l)&&"chain"in l)||!!l.chain,U=Wi(n);return ni(M,function(G){var Y=s[G];n[G]=Y,U&&(n.prototype[G]=function(){var le=this.__chain__;if(C||le){var ce=n(this.__wrapped__),fe=ce.__actions__=On(this.__actions__);return fe.push({func:Y,args:arguments,thisArg:n}),ce.__chain__=le,ce}return Y.apply(n,rr([this.value()],arguments))})}),n}function sS(){return vn._===this&&(vn._=Dg),this}function yc(){}function aS(n){return n=lt(n),dt(function(s){return Tf(s,n)})}var oS=ec(qt),lS=ec(Wh),cS=ec(bl);function Vd(n){return oc(n)?Al(Ri(n)):z_(n)}function uS(n){return function(s){return n==null?t:Lr(n,s)}}var hS=qf(),fS=qf(!0);function Tc(){return[]}function bc(){return!1}function dS(){return{}}function pS(){return""}function mS(){return!0}function gS(n,s){if(n=lt(n),n<1||n>oe)return[];var l=Ee,f=bn(n,Ee);s=Ke(s),n-=Ee;for(var M=Rl(f,s);++l<n;)s(l);return M}function _S(n){return nt(n)?qt(n,Ri):Yn(n)?[n]:On(ld(Nt(n)))}function vS(n){var s=++Rg;return Nt(n)+s}var xS=so(function(n,s){return n+s},0),MS=tc("ceil"),SS=so(function(n,s){return n/s},1),ES=tc("floor");function yS(n){return n&&n.length?ja(n,Gn,Gl):t}function TS(n,s){return n&&n.length?ja(n,Ke(s,2),Gl):t}function bS(n){return Yh(n,Gn)}function AS(n,s){return Yh(n,Ke(s,2))}function wS(n){return n&&n.length?ja(n,Gn,Wl):t}function CS(n,s){return n&&n.length?ja(n,Ke(s,2),Wl):t}var RS=so(function(n,s){return n*s},1),PS=tc("round"),DS=so(function(n,s){return n-s},0);function LS(n){return n&&n.length?Cl(n,Gn):0}function IS(n,s){return n&&n.length?Cl(n,Ke(s,2)):0}return b.after=tx,b.ary=xd,b.assign=Vx,b.assignIn=Id,b.assignInWith=xo,b.assignWith=kx,b.at=Wx,b.before=Md,b.bind=dc,b.bindAll=ZM,b.bindKey=Sd,b.castArray=dx,b.chain=gd,b.chunk=E0,b.compact=y0,b.concat=T0,b.cond=$M,b.conforms=JM,b.constant=Mc,b.countBy=Lv,b.create=Xx,b.curry=Ed,b.curryRight=yd,b.debounce=Td,b.defaults=qx,b.defaultsDeep=Yx,b.defer=nx,b.delay=ix,b.difference=b0,b.differenceBy=A0,b.differenceWith=w0,b.drop=C0,b.dropRight=R0,b.dropRightWhile=P0,b.dropWhile=D0,b.fill=L0,b.filter=Uv,b.flatMap=Ov,b.flatMapDeep=Bv,b.flatMapDepth=zv,b.flatten=fd,b.flattenDeep=I0,b.flattenDepth=U0,b.flip=rx,b.flow=QM,b.flowRight=eS,b.fromPairs=N0,b.functions=eM,b.functionsIn=tM,b.groupBy=Gv,b.initial=O0,b.intersection=B0,b.intersectionBy=z0,b.intersectionWith=G0,b.invert=iM,b.invertBy=rM,b.invokeMap=Vv,b.iteratee=Sc,b.keyBy=kv,b.keys=fn,b.keysIn=zn,b.map=fo,b.mapKeys=aM,b.mapValues=oM,b.matches=tS,b.matchesProperty=nS,b.memoize=mo,b.merge=lM,b.mergeWith=Ud,b.method=iS,b.methodOf=rS,b.mixin=Ec,b.negate=go,b.nthArg=aS,b.omit=cM,b.omitBy=uM,b.once=sx,b.orderBy=Wv,b.over=oS,b.overArgs=ax,b.overEvery=lS,b.overSome=cS,b.partial=pc,b.partialRight=bd,b.partition=Xv,b.pick=hM,b.pickBy=Nd,b.property=Vd,b.propertyOf=uS,b.pull=W0,b.pullAll=pd,b.pullAllBy=X0,b.pullAllWith=q0,b.pullAt=Y0,b.range=hS,b.rangeRight=fS,b.rearg=ox,b.reject=Kv,b.remove=K0,b.rest=lx,b.reverse=hc,b.sampleSize=$v,b.set=dM,b.setWith=pM,b.shuffle=Jv,b.slice=Z0,b.sortBy=ex,b.sortedUniq=nv,b.sortedUniqBy=iv,b.split=OM,b.spread=cx,b.tail=rv,b.take=sv,b.takeRight=av,b.takeRightWhile=ov,b.takeWhile=lv,b.tap=yv,b.throttle=ux,b.thru=ho,b.toArray=Pd,b.toPairs=Fd,b.toPairsIn=Od,b.toPath=_S,b.toPlainObject=Ld,b.transform=mM,b.unary=hx,b.union=cv,b.unionBy=uv,b.unionWith=hv,b.uniq=fv,b.uniqBy=dv,b.uniqWith=pv,b.unset=gM,b.unzip=fc,b.unzipWith=md,b.update=_M,b.updateWith=vM,b.values=fs,b.valuesIn=xM,b.without=mv,b.words=Gd,b.wrap=fx,b.xor=gv,b.xorBy=_v,b.xorWith=vv,b.zip=xv,b.zipObject=Mv,b.zipObjectDeep=Sv,b.zipWith=Ev,b.entries=Fd,b.entriesIn=Od,b.extend=Id,b.extendWith=xo,Ec(b,b),b.add=xS,b.attempt=Hd,b.camelCase=yM,b.capitalize=Bd,b.ceil=MS,b.clamp=MM,b.clone=px,b.cloneDeep=gx,b.cloneDeepWith=_x,b.cloneWith=mx,b.conformsTo=vx,b.deburr=zd,b.defaultTo=jM,b.divide=SS,b.endsWith=TM,b.eq=gi,b.escape=bM,b.escapeRegExp=AM,b.every=Iv,b.find=Nv,b.findIndex=ud,b.findKey=Kx,b.findLast=Fv,b.findLastIndex=hd,b.findLastKey=Zx,b.floor=ES,b.forEach=_d,b.forEachRight=vd,b.forIn=$x,b.forInRight=Jx,b.forOwn=jx,b.forOwnRight=Qx,b.get=_c,b.gt=xx,b.gte=Mx,b.has=nM,b.hasIn=vc,b.head=dd,b.identity=Gn,b.includes=Hv,b.indexOf=F0,b.inRange=SM,b.invoke=sM,b.isArguments=Nr,b.isArray=nt,b.isArrayBuffer=Sx,b.isArrayLike=Bn,b.isArrayLikeObject=Qt,b.isBoolean=Ex,b.isBuffer=hr,b.isDate=yx,b.isElement=Tx,b.isEmpty=bx,b.isEqual=Ax,b.isEqualWith=wx,b.isError=mc,b.isFinite=Cx,b.isFunction=Wi,b.isInteger=Ad,b.isLength=_o,b.isMap=wd,b.isMatch=Rx,b.isMatchWith=Px,b.isNaN=Dx,b.isNative=Lx,b.isNil=Ux,b.isNull=Ix,b.isNumber=Cd,b.isObject=Kt,b.isObjectLike=$t,b.isPlainObject=sa,b.isRegExp=gc,b.isSafeInteger=Nx,b.isSet=Rd,b.isString=vo,b.isSymbol=Yn,b.isTypedArray=hs,b.isUndefined=Fx,b.isWeakMap=Ox,b.isWeakSet=Bx,b.join=H0,b.kebabCase=wM,b.last=oi,b.lastIndexOf=V0,b.lowerCase=CM,b.lowerFirst=RM,b.lt=zx,b.lte=Gx,b.max=yS,b.maxBy=TS,b.mean=bS,b.meanBy=AS,b.min=wS,b.minBy=CS,b.stubArray=Tc,b.stubFalse=bc,b.stubObject=dS,b.stubString=pS,b.stubTrue=mS,b.multiply=RS,b.nth=k0,b.noConflict=sS,b.noop=yc,b.now=po,b.pad=PM,b.padEnd=DM,b.padStart=LM,b.parseInt=IM,b.random=EM,b.reduce=qv,b.reduceRight=Yv,b.repeat=UM,b.replace=NM,b.result=fM,b.round=PS,b.runInContext=W,b.sample=Zv,b.size=jv,b.snakeCase=FM,b.some=Qv,b.sortedIndex=$0,b.sortedIndexBy=J0,b.sortedIndexOf=j0,b.sortedLastIndex=Q0,b.sortedLastIndexBy=ev,b.sortedLastIndexOf=tv,b.startCase=BM,b.startsWith=zM,b.subtract=DS,b.sum=LS,b.sumBy=IS,b.template=GM,b.times=gS,b.toFinite=Xi,b.toInteger=lt,b.toLength=Dd,b.toLower=HM,b.toNumber=li,b.toSafeInteger=Hx,b.toString=Nt,b.toUpper=VM,b.trim=kM,b.trimEnd=WM,b.trimStart=XM,b.truncate=qM,b.unescape=YM,b.uniqueId=vS,b.upperCase=KM,b.upperFirst=xc,b.each=_d,b.eachRight=vd,b.first=dd,Ec(b,(function(){var n={};return wi(b,function(s,l){Ut.call(b.prototype,l)||(n[l]=s)}),n})(),{chain:!1}),b.VERSION=i,ni(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),ni(["drop","take"],function(n,s){Mt.prototype[n]=function(l){l=l===t?1:sn(lt(l),0);var f=this.__filtered__&&!s?new Mt(this):this.clone();return f.__filtered__?f.__takeCount__=bn(l,f.__takeCount__):f.__views__.push({size:bn(l,Ee),type:n+(f.__dir__<0?"Right":"")}),f},Mt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),ni(["filter","map","takeWhile"],function(n,s){var l=s+1,f=l==ne||l==ee;Mt.prototype[n]=function(M){var C=this.clone();return C.__iteratees__.push({iteratee:Ke(M,3),type:l}),C.__filtered__=C.__filtered__||f,C}}),ni(["head","last"],function(n,s){var l="take"+(s?"Right":"");Mt.prototype[n]=function(){return this[l](1).value()[0]}}),ni(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");Mt.prototype[n]=function(){return this.__filtered__?new Mt(this):this[l](1)}}),Mt.prototype.compact=function(){return this.filter(Gn)},Mt.prototype.find=function(n){return this.filter(n).head()},Mt.prototype.findLast=function(n){return this.reverse().find(n)},Mt.prototype.invokeMap=dt(function(n,s){return typeof n=="function"?new Mt(this):this.map(function(l){return Qs(l,n,s)})}),Mt.prototype.reject=function(n){return this.filter(go(Ke(n)))},Mt.prototype.slice=function(n,s){n=lt(n);var l=this;return l.__filtered__&&(n>0||s<0)?new Mt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=lt(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},Mt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Mt.prototype.toArray=function(){return this.take(Ee)},wi(Mt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),M=b[f?"take"+(s=="last"?"Right":""):s],C=f||/^find/.test(s);M&&(b.prototype[s]=function(){var U=this.__wrapped__,G=f?[1]:arguments,Y=U instanceof Mt,le=G[0],ce=Y||nt(U),fe=function(gt){var Et=M.apply(b,rr([gt],G));return f&&be?Et[0]:Et};ce&&l&&typeof le=="function"&&le.length!=1&&(Y=ce=!1);var be=this.__chain__,He=!!this.__actions__.length,Ze=C&&!be,ht=Y&&!He;if(!C&&ce){U=ht?U:new Mt(this);var $e=n.apply(U,G);return $e.__actions__.push({func:ho,args:[fe],thisArg:t}),new ri($e,be)}return Ze&&ht?n.apply(this,G):($e=this.thru(fe),Ze?f?$e.value()[0]:$e.value():$e)})}),ni(["pop","push","shift","sort","splice","unshift"],function(n){var s=Oa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var M=arguments;if(f&&!this.__chain__){var C=this.value();return s.apply(nt(C)?C:[],M)}return this[l](function(U){return s.apply(nt(U)?U:[],M)})}}),wi(Mt.prototype,function(n,s){var l=b[s];if(l){var f=l.name+"";Ut.call(as,f)||(as[f]=[]),as[f].push({name:s,func:l})}}),as[ro(t,g).name]=[{name:"wrapper",func:t}],Mt.prototype.clone=Yg,Mt.prototype.reverse=Kg,Mt.prototype.value=Zg,b.prototype.at=Tv,b.prototype.chain=bv,b.prototype.commit=Av,b.prototype.next=wv,b.prototype.plant=Rv,b.prototype.reverse=Pv,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=Dv,b.prototype.first=b.prototype.head,qs&&(b.prototype[qs]=Cv),b}),is=Ag();wr?((wr.exports=is)._=is,Sl._=is):vn._=is}).call(kw)})(_a,_a.exports)),_a.exports}var Xw=Ww();const Qi=Nm(Xw),Om=14;function qw(){const r=Qi.random(1,Om);return Si(r)}function Si(r){return(r<1||r>Om)&&(console.warn(`Invalid texture number ${r}. Using default texture 1.`),r=1),`${document.baseURI}assets/gfx/planets/${r}.jpg`}function Yw(){return{planets:[{color:"#87e5b0",radius:21,position:new H(278,-304,-313),textureUrl:Si(1)},{color:"#c964ea",radius:94,position:new H(-22,-183,-595),textureUrl:Si(2)},{color:"#2ef279",radius:31,position:new H(656,495,-617),textureUrl:Si(3)},{color:"#5ecc4d",radius:94,position:new H(296,438,-38),textureUrl:Si(4)},{color:"#d66e51",radius:96,position:new H(612,578,491),textureUrl:Si(5)},{color:"#45ef86",radius:63,position:new H(-338,-190,656),textureUrl:Si(6)},{color:"#9a2aea",radius:94,position:new H(-295,-243,-382),textureUrl:Si(7)},{color:"#9683f7",radius:64,position:new H(674,-392,466),textureUrl:Si(8)},{color:"#f23ebc",radius:50,position:new H(413,-445,272),textureUrl:Si(9)},{color:"#5d9aea",radius:55,position:new H(684,-395,-566),textureUrl:Si(10)}],initialBallPosition:new H(393.04081542468845,-477.8397276414723,274.04848270177894)}}function Kw(r,e,t){return r.position.distanceTo(e.position)<r.radius+e.radius+t}function Zw(r,e){const t=Qi.sample(r),i=new H(Qi.random(-.5,.5),Qi.random(-.5,.5),Qi.random(-.5,.5)).normalize().multiplyScalar(t.radius).addScalar(e+.1);return t.position.clone().add(i)}function $w(){const t=[];for(;t.length<10;){const a=Qi.random(20,100),o=new H(Qi.random(-Be.planet.maxOffset,Be.planet.maxOffset),Qi.random(-Be.planet.maxOffset,Be.planet.maxOffset),Qi.random(-Be.planet.maxOffset,Be.planet.maxOffset)),c={radius:a,position:o,color:Fm(),textureUrl:qw()};t.some(u=>Kw(c,u,20))||t.push(c)}return{planets:t,initialBallPosition:Zw(t,Be.ball.radius)}}function Cs(r){return`${document.baseURI}assets/gfx/box-skybox/sky${r}.png`}class Jw extends gn{constructor(){super(new Tr,[]),this.init()}async init(){const e=new wh,t=await Promise.all([e.loadAsync(Cs(1)),e.loadAsync(Cs(2)),e.loadAsync(Cs(3)),e.loadAsync(Cs(4)),e.loadAsync(Cs(5)),e.loadAsync(Cs(6))]),i=[new kn({side:Jt,map:t[3],opacity:Be.skybox.opacity,transparent:!0}),new kn({side:Jt,map:t[1],opacity:Be.skybox.opacity,transparent:!0}),new kn({side:Jt,map:t[0],opacity:Be.skybox.opacity,transparent:!0}),new kn({side:Jt,map:t[5],opacity:Be.skybox.opacity,transparent:!0}),new kn({side:Jt,map:t[2],opacity:Be.skybox.opacity,transparent:!0}),new kn({side:Jt,map:t[4],opacity:Be.skybox.opacity,transparent:!0})],a=10**5,o=new Tr(a,a,a);this.geometry=o,this.material=i}}const Ei=class Ei extends Ps{constructor(){super(),this.animationTime=0,this.init()}init(){const e=10**Ei.SKYBOX_RADIUS_EXPONENT,t=new br(e,64,64),i=new kn({side:Jt,color:new tt(0,0,.015),opacity:Be.skybox.opacity,transparent:!0}),a=new gn(t,i);this.add(a),this.createStarField(e*.95),this.createSun(e*.9)}createStarField(e){const i=new Float32Array(9e3),a=new Float32Array(3e3*3),o=new Float32Array(3e3);for(let h=0;h<3e3;h++){const p=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),_=e*Math.sin(m)*Math.cos(p),x=e*Math.sin(m)*Math.sin(p),y=e*Math.cos(m);i[h*3]=_,i[h*3+1]=x,i[h*3+2]=y;const A=Math.random();A<.7?(a[h*3]=.9+Math.random()*.1,a[h*3+1]=.9+Math.random()*.1,a[h*3+2]=.9+Math.random()*.1):A<.85?(a[h*3]=.7+Math.random()*.2,a[h*3+1]=.8+Math.random()*.2,a[h*3+2]=.9+Math.random()*.1):(a[h*3]=.9+Math.random()*.1,a[h*3+1]=.9+Math.random()*.1,a[h*3+2]=.7+Math.random()*.2),o[h]=Math.random()*3+.5}const c=new yn;c.setAttribute("position",new Qn(i,3)),c.setAttribute("color",new Qn(a,3)),c.setAttribute("size",new Qn(o,1));const u=new _m({size:50,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:tl}),d=new WE(c,u);this.add(d)}createSun(e){const t=e*.7,i=-e*.3,a=e*.6,o=new br(5e3,32,32),c=new kn({color:new tt(1,.3,.2),transparent:!0,opacity:.8});this.sunMesh=new gn(o,c),this.sunMesh.position.set(t,i,a),this.add(this.sunMesh),this.sun=new Ch(new tt(1,.2,.1),.3,0),this.sun.position.set(t,i,a),this.add(this.sun)}update(e){this.animationTime+=e;const t=Ei.SUN_MIN_INTENSITY+(Ei.SUN_MAX_INTENSITY-Ei.SUN_MIN_INTENSITY)*(Math.sin(this.animationTime*Ei.SUN_PULSE_SPEED)*.5+.5);this.sun.intensity=t;const i=this.sunMesh.material;i.opacity=.6+t*.4}};Ei.SKYBOX_RADIUS_EXPONENT=5.8,Ei.SUN_PULSE_SPEED=2,Ei.SUN_MIN_INTENSITY=.2,Ei.SUN_MAX_INTENSITY=.5;let ll=Ei;class jw{constructor(){this.renderer=new j1({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new zE,this.cameras={aim:new ww(this.renderer.domElement),landedBallTopDown:new Rw(this.renderer.domElement),staticManualOrbit:new mn(Be.camera.fov,innerWidth/innerHeight,Be.camera.near,Be.camera.far),autoRotatingOrbit:new mn(Be.camera.fov,innerWidth/innerHeight,Be.camera.near,Be.camera.far),distant:new Cw},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new yw(this.scene),this.clock=new Sm,this.level=Be.useRandomLevel?$w():Yw(),this.balls=[],this.accumulatedTime=0,this.stats=va(),this.setup={level:()=>{this.level.planets.forEach(i=>{const a=new Pm({radius:i.radius,color:i.color,textureUrl:i.textureUrl});a.position.set(i.position.x,i.position.y,i.position.z),this.scene.add(a)});const e=new Hw;e.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(e),this.scene.add(e),this.eGetter.getPlanets().forEach(i=>{$p(i,e)&&(e.landedPlanet=i)})},light:()=>{const e=new Ch(16777215,5e7);e.position.set(0,100,5e3),this.scene.add(e)},sound:()=>{this.addListeners(()=>ol.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new H),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new H),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>{Be.skybox.type===al.SPHERE?this.skybox=new Vw:Be.skybox.type===al.BOX?this.skybox=new Jw:this.skybox=new ll,this.scene.add(this.skybox)},orbitControls:()=>{new Rm(this.cameras.staticManualOrbit,this.renderer.domElement)},outlinePass:()=>{if(!Be.ball.outline.enabled){this.outlinePass=void 0;return}this.outlinePass=new Er(new Xe(innerWidth,innerHeight),this.scene,this.activeCamera),this.outlinePass.edgeStrength=Be.ball.outline.edgeStrength,this.outlinePass.edgeGlow=Be.ball.outline.edgeGlow,this.outlinePass.visibleEdgeColor.set(Be.ball.outline.color),this.outlinePass.hiddenEdgeColor.set(Be.ball.outline.color),this.outlinePass.selectedObjects=this.balls},composer:()=>{this.composer=new rw(this.renderer),this.composer.addPass(this.renderPass),this.outlinePass&&this.composer.addPass(this.outlinePass),this.composer.addPass(new aw)},listeners:()=>{Be.simulationMode||addEventListener("keypress",e=>{if(e.key===" "){const t=this.getCurrentBall();if(t.landedPlanet){const i=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone()),a=this.eGetter.getPlanets();Um(t,i,a),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.renderPass=new sw(this.scene,this.activeCamera),this.setup.outlinePass(),this.setup.composer(),this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.onNewAnimationFrame(),Be.showFPSCounter&&document.body.appendChild(this.stats.dom)}addListeners(e,t){const i=["mousedown","keypress","touchstart"],a=()=>{e(),t&&i.forEach(o=>removeEventListener(o,a))};i.forEach(o=>addEventListener(o,a))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight)}updateCameras(){const e=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const t=2e3,i=64e-6*Be.camera.rotationSpeed;this.cameras.autoRotatingOrbit.position.set(Math.sin(e*i)*t,Math.abs(Math.cos(e*i)*t),Math.cos(e*i)*t),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(e){const t=this.eGetter.getPlanets(),i=1/Be.ticksPerSecond;if(this.accumulatedTime+=e,!Be.usePreCalculatedFlight)for(;this.accumulatedTime>=i;)this.bounceBallsOffPlanets(t),this.gravitateBalls(i),this.accumulatedTime-=i;this.balls.forEach(a=>a.tick(t))}bounceBallsOffPlanets(e){e.forEach(t=>{this.balls.forEach(i=>{if($p(t,i)){const a=Lm({staticSphere:t,movingSphere:i});Be.simulationMode&&console.log("## simulation","hit",i.position.toArray().map(c=>Math.floor(c)).toString());const o=Math.min(1,i.velocity.length()/5);ol.ballHit(o),i.velocity=a,Im(i,t),i.velocity.length()<.2&&!i.landedPlanet&&this.stopBall(i,t)}})})}gravitateBalls(e){this.eGetter.getPlanets().forEach(i=>{this.balls.forEach(a=>{a.addVelocity(Dm({puller:i,pulled:a,timeDelta:e}))})})}stopBall(e,t){e.landedPlanet=t,Be.simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(e),this.cameras.aim.reset(e),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(e=>this.scene.remove(e)),this.balls.forEach(e=>{this.scene.add(e.createTrace())})}onNewAnimationFrame(){const e=this.clock.getDelta();this.renderPass.camera=this.activeCamera,this.outlinePass&&(this.outlinePass.renderCamera=this.activeCamera),this.composer.render(),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(e),this.updateBallTrace(),this.skybox instanceof ll&&this.skybox.update(e),Aw.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new jw;
