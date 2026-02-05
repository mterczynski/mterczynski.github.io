(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const Wu="182",ys={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pM=0,Md=1,mM=2,Go=1,_M=2,ca=3,Sr=0,Dn=1,Ti=2,$i=0,Ts=1,Ed=2,yd=3,Td=4,gM=5,Or=100,xM=101,vM=102,SM=103,MM=104,EM=200,yM=201,TM=202,bM=203,$c=204,Jc=205,AM=206,wM=207,RM=208,CM=209,PM=210,DM=211,LM=212,IM=213,UM=214,jc=0,Qc=1,tu=2,As=3,eu=4,nu=5,iu=6,ru=7,Xu=0,NM=1,FM=2,wi=0,wp=1,Rp=2,Cp=3,Pp=4,Dp=5,Lp=6,Ip=7,Up=300,Hr=301,ws=302,su=303,au=304,jo=306,ou=1e3,Ki=1001,lu=1002,_n=1003,OM=1004,mo=1005,yn=1006,pc=1007,zr=1008,Kn=1009,Np=1010,Fp=1011,ma=1012,qu=1013,Pi=1014,bi=1015,ji=1016,Yu=1017,Ku=1018,_a=1020,Op=35902,Bp=35899,zp=1021,Gp=1022,_i=1023,Qi=1026,Gr=1027,Hp=1028,Zu=1029,Rs=1030,$u=1031,Ju=1033,Ho=33776,Vo=33777,ko=33778,Wo=33779,cu=35840,uu=35841,hu=35842,fu=35843,du=36196,pu=37492,mu=37496,_u=37488,gu=37489,xu=37490,vu=37491,Su=37808,Mu=37809,Eu=37810,yu=37811,Tu=37812,bu=37813,Au=37814,wu=37815,Ru=37816,Cu=37817,Pu=37818,Du=37819,Lu=37820,Iu=37821,Uu=36492,Nu=36494,Fu=36495,Ou=36283,Bu=36284,zu=36285,Gu=36286,BM=3200,Vp=0,zM=1,xr="",si="srgb",Cs="srgb-linear",Yo="linear",Oe="srgb",os=7680,bd=519,GM=512,HM=513,VM=514,ju=515,kM=516,WM=517,Qu=518,XM=519,Ad=35044,wd="300 es",Ai=2e3,Ko=2001;function kp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ga(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qM(){const r=ga("canvas");return r.style.display="block",r}const Rd={};function Cd(...r){const t="THREE."+r.shift();console.log(t,...r)}function jt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function xa(...r){const t=r.join(" ");t in Rd||(Rd[t]=!0,jt(...r))}function YM(r,t,e){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}class kr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xo=Math.PI/180,Hu=180/Math.PI;function Sa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function KM(r,t){return(r%t+t)%t}function mc(r,t,e){return(1-e)*r+e*t}function ea(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ZM={DEG2RAD:Xo};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*a+t.x,this.y=o*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,c,u){let d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3],g=o[c+0],v=o[c+1],y=o[c+2],w=o[c+3];if(u<=0){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m;return}if(u>=1){t[e+0]=g,t[e+1]=v,t[e+2]=y,t[e+3]=w;return}if(m!==w||d!==g||f!==v||p!==y){let x=d*g+f*v+p*y+m*w;x<0&&(g=-g,v=-v,y=-y,w=-w,x=-x);let _=1-u;if(x<.9995){const L=Math.acos(x),I=Math.sin(L);_=Math.sin(_*L)/I,u=Math.sin(u*L)/I,d=d*_+g*u,f=f*_+v*u,p=p*_+y*u,m=m*_+w*u}else{d=d*_+g*u,f=f*_+v*u,p=p*_+y*u,m=m*_+w*u;const L=1/Math.sqrt(d*d+f*f+p*p+m*m);d*=L,f*=L,p*=L,m*=L}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,a,o,c){const u=i[a],d=i[a+1],f=i[a+2],p=i[a+3],m=o[c],g=o[c+1],v=o[c+2],y=o[c+3];return t[e]=u*y+p*m+d*v-f*g,t[e+1]=d*y+p*g+f*m-u*v,t[e+2]=f*y+p*v+u*g-d*m,t[e+3]=p*y-u*m-d*g-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,d=Math.sin,f=u(i/2),p=u(a/2),m=u(o/2),g=d(i/2),v=d(a/2),y=d(o/2);switch(c){case"XYZ":this._x=g*p*m+f*v*y,this._y=f*v*m-g*p*y,this._z=f*p*y+g*v*m,this._w=f*p*m-g*v*y;break;case"YXZ":this._x=g*p*m+f*v*y,this._y=f*v*m-g*p*y,this._z=f*p*y-g*v*m,this._w=f*p*m+g*v*y;break;case"ZXY":this._x=g*p*m-f*v*y,this._y=f*v*m+g*p*y,this._z=f*p*y+g*v*m,this._w=f*p*m-g*v*y;break;case"ZYX":this._x=g*p*m-f*v*y,this._y=f*v*m+g*p*y,this._z=f*p*y-g*v*m,this._w=f*p*m+g*v*y;break;case"YZX":this._x=g*p*m+f*v*y,this._y=f*v*m+g*p*y,this._z=f*p*y-g*v*m,this._w=f*p*m-g*v*y;break;case"XZY":this._x=g*p*m-f*v*y,this._y=f*v*m-g*p*y,this._z=f*p*y+g*v*m,this._w=f*p*m+g*v*y;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],f=e[2],p=e[6],m=e[10],g=i+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-d)*v,this._y=(o-f)*v,this._z=(c-a)*v}else if(i>u&&i>m){const v=2*Math.sqrt(1+i-u-m);this._w=(p-d)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(o+f)/v}else if(u>m){const v=2*Math.sqrt(1+u-i-m);this._w=(o-f)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+m-i-u);this._w=(c-a)/v,this._x=(o+f)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,o=t._z,c=t._w,u=e._x,d=e._y,f=e._z,p=e._w;return this._x=i*p+c*u+a*f-o*d,this._y=a*p+c*d+o*u-i*f,this._z=o*p+c*f+i*d-a*u,this._w=c*p-i*u-a*d-o*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,a=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,a=-a,o=-o,c=-c,u=-u);let d=1-e;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);d=Math.sin(d*f)/p,e=Math.sin(e*f)/p,this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+o*e,this._w=this._w*d+c*e,this._onChangeCallback()}else this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+o*e,this._w=this._w*d+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,o=t.x,c=t.y,u=t.z,d=t.w,f=2*(c*a-u*i),p=2*(u*e-o*a),m=2*(o*i-c*e);return this.x=e+d*f+c*m-u*p,this.y=i+d*p+u*f-o*m,this.z=a+d*m+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,o=t.z,c=e.x,u=e.y,d=e.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new V,Pd=new Vr;class le{constructor(t,e,i,a,o,c,u,d,f){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f)}set(t,e,i,a,o,c,u,d,f){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],p=i[4],m=i[7],g=i[2],v=i[5],y=i[8],w=a[0],x=a[3],_=a[6],L=a[1],I=a[4],D=a[7],F=a[2],B=a[5],C=a[8];return o[0]=c*w+u*L+d*F,o[3]=c*x+u*I+d*B,o[6]=c*_+u*D+d*C,o[1]=f*w+p*L+m*F,o[4]=f*x+p*I+m*B,o[7]=f*_+p*D+m*C,o[2]=g*w+v*L+y*F,o[5]=g*x+v*I+y*B,o[8]=g*_+v*D+y*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8];return e*c*p-e*u*f-i*o*p+i*u*d+a*o*f-a*c*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],m=p*c-u*f,g=u*d-p*o,v=f*o-c*d,y=e*m+i*g+a*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return t[0]=m*w,t[1]=(a*f-p*i)*w,t[2]=(u*i-a*c)*w,t[3]=g*w,t[4]=(p*e-a*d)*w,t[5]=(a*o-u*e)*w,t[6]=v*w,t[7]=(i*d-f*e)*w,t[8]=(c*e-i*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,c,u){const d=Math.cos(o),f=Math.sin(o);return this.set(i*d,i*f,-i*(d*c+f*u)+c+t,-a*f,a*d,-a*(-f*c+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(gc.makeScale(t,e)),this}rotate(t){return this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new le,Dd=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const r={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Oe&&(a.r=Ji(a.r),a.g=Ji(a.g),a.b=Ji(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Oe&&(a.r=bs(a.r),a.g=bs(a.g),a.b=bs(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?Yo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Cs]:{primaries:t,whitePoint:i,transfer:Yo,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Oe,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const Te=$M();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class JM{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=ga("canvas")),ls.width=t.width,ls.height=t.height;const a=ls.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=ls}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Ji(o[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ji(e[i]/255)*255):e[i]=Ji(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jM=0;class th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Sa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(xc(a[c].image)):o.push(xc(a[c]))}else o=xc(a);i.url=o}return e||(t.images[this.uuid]=i),i}}function xc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?JM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let QM=0;const vc=new V;class Tn extends kr{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,i=Ki,a=Ki,o=yn,c=zr,u=_i,d=Kn,f=Tn.DEFAULT_ANISOTROPY,p=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Sa(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Up)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ou:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case lu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ou:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case lu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Up;Tn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,e=0,i=0,a=1){Je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o;const d=t.elements,f=d[0],p=d[4],m=d[8],g=d[1],v=d[5],y=d[9],w=d[2],x=d[6],_=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-w)<.01&&Math.abs(y-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+w)<.1&&Math.abs(y+x)<.1&&Math.abs(f+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(f+1)/2,D=(v+1)/2,F=(_+1)/2,B=(p+g)/4,C=(m+w)/4,O=(y+x)/4;return I>D&&I>F?I<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(I),a=B/i,o=C/i):D>F?D<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(D),i=B/a,o=O/a):F<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(F),i=C/o,a=O/o),this.set(i,a,o,e),this}let L=Math.sqrt((x-y)*(x-y)+(m-w)*(m-w)+(g-p)*(g-p));return Math.abs(L)<.001&&(L=1),this.x=(x-y)/L,this.y=(m-w)/L,this.z=(g-p)/L,this.w=Math.acos((f+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends kr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);const a={width:t,height:e,depth:i.depth},o=new Tn(a);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new th(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends tE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wp extends Tn{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eE extends Tn{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,hi):hi.fromBufferAttribute(o,c),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(na),go.subVectors(this.max,na),cs.subVectors(t.a,na),us.subVectors(t.b,na),hs.subVectors(t.c,na),ur.subVectors(us,cs),hr.subVectors(hs,us),Dr.subVectors(cs,hs);let e=[0,-ur.z,ur.y,0,-hr.z,hr.y,0,-Dr.z,Dr.y,ur.z,0,-ur.x,hr.z,0,-hr.x,Dr.z,0,-Dr.x,-ur.y,ur.x,0,-hr.y,hr.x,0,-Dr.y,Dr.x,0];return!Sc(e,cs,us,hs,go)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,cs,us,hs,go))?!1:(xo.crossVectors(ur,hr),e=[xo.x,xo.y,xo.z],Sc(e,cs,us,hs,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ki=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,_o=new Ma,cs=new V,us=new V,hs=new V,ur=new V,hr=new V,Dr=new V,na=new V,go=new V,xo=new V,Lr=new V;function Sc(r,t,e,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){Lr.fromArray(r,o);const u=a.x*Math.abs(Lr.x)+a.y*Math.abs(Lr.y)+a.z*Math.abs(Lr.z),d=t.dot(Lr),f=e.dot(Lr),p=i.dot(Lr);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const nE=new Ma,ia=new V,Mc=new V;class Qo{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):nE.setFromPoints(t).getCenter(i);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ia.subVectors(t,this.center);const e=ia.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(ia,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ia.copy(t.center).add(Mc)),this.expandByPoint(ia.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Wi=new V,Ec=new V,vo=new V,fr=new V,yc=new V,So=new V,Tc=new V;class eh{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Ec.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),fr.copy(this.origin).sub(Ec);const o=t.distanceTo(e)*.5,c=-this.direction.dot(vo),u=fr.dot(this.direction),d=-fr.dot(vo),f=fr.lengthSq(),p=Math.abs(1-c*c);let m,g,v,y;if(p>0)if(m=c*d-u,g=c*u-d,y=o*p,m>=0)if(g>=-y)if(g<=y){const w=1/p;m*=w,g*=w,v=m*(m+c*g+2*u)+g*(c*m+g+2*d)+f}else g=o,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*d)+f;else g=-o,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*d)+f;else g<=-y?(m=Math.max(0,-(-c*o+u)),g=m>0?-o:Math.min(Math.max(-o,-d),o),v=-m*m+g*(g+2*d)+f):g<=y?(m=0,g=Math.min(Math.max(-o,-d),o),v=g*(g+2*d)+f):(m=Math.max(0,-(c*o+u)),g=m>0?o:Math.min(Math.max(-o,-d),o),v=-m*m+g*(g+2*d)+f);else g=c>0?-o:o,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Ec).addScaledVector(vo,g),v}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),a=Wi.dot(Wi)-i*i,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(i=(t.min.x-g.x)*f,a=(t.max.x-g.x)*f):(i=(t.max.x-g.x)*f,a=(t.min.x-g.x)*f),p>=0?(o=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),m>=0?(u=(t.min.z-g.z)*m,d=(t.max.z-g.z)*m):(u=(t.max.z-g.z)*m,d=(t.min.z-g.z)*m),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,i,a,o){yc.subVectors(e,t),So.subVectors(i,t),Tc.crossVectors(yc,So);let c=this.direction.dot(Tc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;fr.subVectors(this.origin,t);const d=u*this.direction.dot(So.crossVectors(fr,So));if(d<0)return null;const f=u*this.direction.dot(yc.cross(fr));if(f<0||d+f>c)return null;const p=-u*fr.dot(Tc);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,e,i,a,o,c,u,d,f,p,m,g,v,y,w,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f,p,m,g,v,y,w,x)}set(t,e,i,a,o,c,u,d,f,p,m,g,v,y,w,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=a,_[1]=o,_[5]=c,_[9]=u,_[13]=d,_[2]=f,_[6]=p,_[10]=m,_[14]=g,_[3]=v,_[7]=y,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/fs.setFromMatrixColumn(t,0).length(),o=1/fs.setFromMatrixColumn(t,1).length(),c=1/fs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){const g=c*p,v=c*m,y=u*p,w=u*m;e[0]=d*p,e[4]=-d*m,e[8]=f,e[1]=v+y*f,e[5]=g-w*f,e[9]=-u*d,e[2]=w-g*f,e[6]=y+v*f,e[10]=c*d}else if(t.order==="YXZ"){const g=d*p,v=d*m,y=f*p,w=f*m;e[0]=g+w*u,e[4]=y*u-v,e[8]=c*f,e[1]=c*m,e[5]=c*p,e[9]=-u,e[2]=v*u-y,e[6]=w+g*u,e[10]=c*d}else if(t.order==="ZXY"){const g=d*p,v=d*m,y=f*p,w=f*m;e[0]=g-w*u,e[4]=-c*m,e[8]=y+v*u,e[1]=v+y*u,e[5]=c*p,e[9]=w-g*u,e[2]=-c*f,e[6]=u,e[10]=c*d}else if(t.order==="ZYX"){const g=c*p,v=c*m,y=u*p,w=u*m;e[0]=d*p,e[4]=y*f-v,e[8]=g*f+w,e[1]=d*m,e[5]=w*f+g,e[9]=v*f-y,e[2]=-f,e[6]=u*d,e[10]=c*d}else if(t.order==="YZX"){const g=c*d,v=c*f,y=u*d,w=u*f;e[0]=d*p,e[4]=w-g*m,e[8]=y*m+v,e[1]=m,e[5]=c*p,e[9]=-u*p,e[2]=-f*p,e[6]=v*m+y,e[10]=g-w*m}else if(t.order==="XZY"){const g=c*d,v=c*f,y=u*d,w=u*f;e[0]=d*p,e[4]=-m,e[8]=f*p,e[1]=g*m+w,e[5]=c*p,e[9]=v*m-y,e[2]=y*m-v,e[6]=u*p,e[10]=w*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iE,t,rE)}lookAt(t,e,i){const a=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),dr.crossVectors(i,qn),dr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),dr.crossVectors(i,qn)),dr.normalize(),Mo.crossVectors(qn,dr),a[0]=dr.x,a[4]=Mo.x,a[8]=qn.x,a[1]=dr.y,a[5]=Mo.y,a[9]=qn.y,a[2]=dr.z,a[6]=Mo.z,a[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],p=i[1],m=i[5],g=i[9],v=i[13],y=i[2],w=i[6],x=i[10],_=i[14],L=i[3],I=i[7],D=i[11],F=i[15],B=a[0],C=a[4],O=a[8],M=a[12],T=a[1],N=a[5],q=a[9],K=a[13],nt=a[2],it=a[6],tt=a[10],$=a[14],ot=a[3],wt=a[7],Mt=a[11],Et=a[15];return o[0]=c*B+u*T+d*nt+f*ot,o[4]=c*C+u*N+d*it+f*wt,o[8]=c*O+u*q+d*tt+f*Mt,o[12]=c*M+u*K+d*$+f*Et,o[1]=p*B+m*T+g*nt+v*ot,o[5]=p*C+m*N+g*it+v*wt,o[9]=p*O+m*q+g*tt+v*Mt,o[13]=p*M+m*K+g*$+v*Et,o[2]=y*B+w*T+x*nt+_*ot,o[6]=y*C+w*N+x*it+_*wt,o[10]=y*O+w*q+x*tt+_*Mt,o[14]=y*M+w*K+x*$+_*Et,o[3]=L*B+I*T+D*nt+F*ot,o[7]=L*C+I*N+D*it+F*wt,o[11]=L*O+I*q+D*tt+F*Mt,o[15]=L*M+I*K+D*$+F*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],c=t[1],u=t[5],d=t[9],f=t[13],p=t[2],m=t[6],g=t[10],v=t[14],y=t[3],w=t[7],x=t[11],_=t[15],L=d*v-f*g,I=u*v-f*m,D=u*g-d*m,F=c*v-f*p,B=c*g-d*p,C=c*m-u*p;return e*(w*L-x*I+_*D)-i*(y*L-x*F+_*B)+a*(y*I-w*F+_*C)-o*(y*D-w*B+x*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],m=t[9],g=t[10],v=t[11],y=t[12],w=t[13],x=t[14],_=t[15],L=m*x*f-w*g*f+w*d*v-u*x*v-m*d*_+u*g*_,I=y*g*f-p*x*f-y*d*v+c*x*v+p*d*_-c*g*_,D=p*w*f-y*m*f+y*u*v-c*w*v-p*u*_+c*m*_,F=y*m*d-p*w*d-y*u*g+c*w*g+p*u*x-c*m*x,B=e*L+i*I+a*D+o*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/B;return t[0]=L*C,t[1]=(w*g*o-m*x*o-w*a*v+i*x*v+m*a*_-i*g*_)*C,t[2]=(u*x*o-w*d*o+w*a*f-i*x*f-u*a*_+i*d*_)*C,t[3]=(m*d*o-u*g*o-m*a*f+i*g*f+u*a*v-i*d*v)*C,t[4]=I*C,t[5]=(p*x*o-y*g*o+y*a*v-e*x*v-p*a*_+e*g*_)*C,t[6]=(y*d*o-c*x*o-y*a*f+e*x*f+c*a*_-e*d*_)*C,t[7]=(c*g*o-p*d*o+p*a*f-e*g*f-c*a*v+e*d*v)*C,t[8]=D*C,t[9]=(y*m*o-p*w*o-y*i*v+e*w*v+p*i*_-e*m*_)*C,t[10]=(c*w*o-y*u*o+y*i*f-e*w*f-c*i*_+e*u*_)*C,t[11]=(p*u*o-c*m*o-p*i*f+e*m*f+c*i*v-e*u*v)*C,t[12]=F*C,t[13]=(p*w*a-y*m*a+y*i*g-e*w*g-p*i*x+e*m*x)*C,t[14]=(y*u*a-c*w*a-y*i*d+e*w*d+c*i*x-e*u*x)*C,t[15]=(c*m*a-p*u*a+p*i*d-e*m*d-c*i*g+e*u*g)*C,this}scale(t){const e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),o=1-i,c=t.x,u=t.y,d=t.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-a*d,f*d+a*u,0,f*u+a*d,p*u+i,p*d-a*c,0,f*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,c){return this.set(1,i,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,o=e._x,c=e._y,u=e._z,d=e._w,f=o+o,p=c+c,m=u+u,g=o*f,v=o*p,y=o*m,w=c*p,x=c*m,_=u*m,L=d*f,I=d*p,D=d*m,F=i.x,B=i.y,C=i.z;return a[0]=(1-(w+_))*F,a[1]=(v+D)*F,a[2]=(y-I)*F,a[3]=0,a[4]=(v-D)*B,a[5]=(1-(g+_))*B,a[6]=(x+L)*B,a[7]=0,a[8]=(y+I)*C,a[9]=(x-L)*C,a[10]=(1-(g+w))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;if(t.x=a[12],t.y=a[13],t.z=a[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let o=fs.set(a[0],a[1],a[2]).length();const c=fs.set(a[4],a[5],a[6]).length(),u=fs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),fi.copy(this);const f=1/o,p=1/c,m=1/u;return fi.elements[0]*=f,fi.elements[1]*=f,fi.elements[2]*=f,fi.elements[4]*=p,fi.elements[5]*=p,fi.elements[6]*=p,fi.elements[8]*=m,fi.elements[9]*=m,fi.elements[10]*=m,e.setFromRotationMatrix(fi),i.x=o,i.y=c,i.z=u,this}makePerspective(t,e,i,a,o,c,u=Ai,d=!1){const f=this.elements,p=2*o/(e-t),m=2*o/(i-a),g=(e+t)/(e-t),v=(i+a)/(i-a);let y,w;if(d)y=o/(c-o),w=c*o/(c-o);else if(u===Ai)y=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Ko)y=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,a,o,c,u=Ai,d=!1){const f=this.elements,p=2/(e-t),m=2/(i-a),g=-(e+t)/(e-t),v=-(i+a)/(i-a);let y,w;if(d)y=1/(c-o),w=c/(c-o);else if(u===Ai)y=-2/(c-o),w=-(c+o)/(c-o);else if(u===Ko)y=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=m,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const fs=new V,fi=new Ke,iE=new V(0,0,0),rE=new V(1,1,1),dr=new V,Mo=new V,qn=new V,Id=new Ke,Ud=new Vr;class Di{constructor(t=0,e=0,i=0,a=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],d=a[1],f=a[5],p=a[9],m=a[2],g=a[6],v=a[10];switch(e){case"XYZ":this._y=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Id.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Id,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sE=0;const Nd=new V,ds=new Vr,Xi=new Ke,Eo=new V,ra=new V,aE=new V,oE=new Vr,Fd=new V(1,0,0),Od=new V(0,1,0),Bd=new V(0,0,1),zd={type:"added"},lE={type:"removed"},ps={type:"childadded",child:null},bc={type:"childremoved",child:null};class bn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new V,e=new Di,i=new Vr,a=new V(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ke},normalMatrix:{value:new le}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Fd,t)}rotateY(t){return this.rotateOnAxis(Od,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Nd.copy(t).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fd,t)}translateY(t){return this.translateOnAxis(Od,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ra,Eo,this.up):Xi.lookAt(Eo,ra,this.up),this.quaternion.setFromRotationMatrix(Xi),a&&(Xi.extractRotation(a.matrixWorld),ds.setFromRotationMatrix(Xi),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zd),ps.child=t,this.dispatchEvent(ps),ps.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lE),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zd),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,aE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,oE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const m=d[f];o(t.shapes,m)}else o(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(t.materials,this.material[d]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(t.animations,d))}}if(e){const u=c(t.geometries),d=c(t.materials),f=c(t.textures),p=c(t.images),m=c(t.shapes),g=c(t.skeletons),v=c(t.animations),y=c(t.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}bn.DEFAULT_UP=new V(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new V,qi=new V,Ac=new V,Yi=new V,ms=new V,_s=new V,Gd=new V,wc=new V,Rc=new V,Cc=new V,Pc=new Je,Dc=new Je,Lc=new Je;class mi{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),di.subVectors(t,e),a.cross(di);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){di.subVectors(a,e),qi.subVectors(i,e),Ac.subVectors(t,e);const c=di.dot(di),u=di.dot(qi),d=di.dot(Ac),f=qi.dot(qi),p=qi.dot(Ac),m=c*f-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(f*d-u*p)*g,y=(c*p-u*d)*g;return o.set(1-v-y,y,v)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,e,i,a,o,c,u,d){return this.getBarycoord(t,e,i,a,Yi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Yi.x),d.addScaledVector(c,Yi.y),d.addScaledVector(u,Yi.z),d)}static getInterpolatedAttribute(t,e,i,a,o,c){return Pc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,i),Lc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(Pc,o.x),c.addScaledVector(Dc,o.y),c.addScaledVector(Lc,o.z),c}static isFrontFacing(t,e,i,a){return di.subVectors(i,e),qi.subVectors(t,e),di.cross(qi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),di.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return mi.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,o=this.c;let c,u;ms.subVectors(a,i),_s.subVectors(o,i),wc.subVectors(t,i);const d=ms.dot(wc),f=_s.dot(wc);if(d<=0&&f<=0)return e.copy(i);Rc.subVectors(t,a);const p=ms.dot(Rc),m=_s.dot(Rc);if(p>=0&&m<=p)return e.copy(a);const g=d*m-p*f;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),e.copy(i).addScaledVector(ms,c);Cc.subVectors(t,o);const v=ms.dot(Cc),y=_s.dot(Cc);if(y>=0&&v<=y)return e.copy(o);const w=v*f-d*y;if(w<=0&&f>=0&&y<=0)return u=f/(f-y),e.copy(i).addScaledVector(_s,u);const x=p*y-v*m;if(x<=0&&m-p>=0&&v-y>=0)return Gd.subVectors(o,a),u=(m-p)/(m-p+(v-y)),e.copy(a).addScaledVector(Gd,u);const _=1/(x+w+g);return c=w*_,u=g*_,e.copy(i).addScaledVector(ms,c).addScaledVector(_s,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Ic(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=Te.workingColorSpace){if(t=KM(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Ic(c,o,t+1/3),this.g=Ic(c,o,t),this.b=Ic(c,o,t-1/3)}return Te.colorSpaceToWorking(this,a),this}setStyle(t,e=si){function i(o){o!==void 0&&parseFloat(o)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=qp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Te.workingToColorSpace(En.copy(this),t),Math.round(_e(En.r*255,0,255))*65536+Math.round(_e(En.g*255,0,255))*256+Math.round(_e(En.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(En.copy(this),e);const i=En.r,a=En.g,o=En.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const m=c-u;switch(f=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(a-o)/m+(a<o?6:0);break;case a:d=(o-i)/m+2;break;case o:d=(i-a)/m+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=si){Te.workingToColorSpace(En.copy(this),t);const e=En.r,i=En.g,a=En.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(pr),this.setHSL(pr.h+t,pr.s+e,pr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pr),t.getHSL(yo);const i=mc(pr.h,yo.h,e),a=mc(pr.s,yo.s,e),o=mc(pr.l,yo.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ee;Ee.NAMES=qp;let cE=0;class Ds extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=Ts,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Jc,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Jc&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ls extends Ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new V,To=new ee;let uE=0;class Ci{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ad,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ea(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ea(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ea(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ea(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ea(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array),a=Fn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array),a=Fn(a,this.array),o=Fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ad&&(t.usage=this.usage),t}}class Yp extends Ci{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Kp extends Ci{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gn extends Ci{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hE=0;const ri=new Ke,Uc=new bn,gs=new V,Yn=new Ma,sa=new Ma,hn=new V;class zn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kp(t)?Kp:Yp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new le().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return Uc.lookAt(t),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];sa.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Yn.min,sa.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,sa.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(sa.min),Yn.expandByPoint(sa.max))}Yn.getCenter(i);let a=0;for(let o=0,c=t.count;o<c;o++)hn.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(hn));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)hn.fromBufferAttribute(u,f),d&&(gs.fromBufferAttribute(t,f),hn.add(gs)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let O=0;O<i.count;O++)u[O]=new V,d[O]=new V;const f=new V,p=new V,m=new V,g=new ee,v=new ee,y=new ee,w=new V,x=new V;function _(O,M,T){f.fromBufferAttribute(i,O),p.fromBufferAttribute(i,M),m.fromBufferAttribute(i,T),g.fromBufferAttribute(o,O),v.fromBufferAttribute(o,M),y.fromBufferAttribute(o,T),p.sub(f),m.sub(f),v.sub(g),y.sub(g);const N=1/(v.x*y.y-y.x*v.y);isFinite(N)&&(w.copy(p).multiplyScalar(y.y).addScaledVector(m,-v.y).multiplyScalar(N),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-y.x).multiplyScalar(N),u[O].add(w),u[M].add(w),u[T].add(w),d[O].add(x),d[M].add(x),d[T].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let O=0,M=L.length;O<M;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,nt=N+q;K<nt;K+=3)_(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const I=new V,D=new V,F=new V,B=new V;function C(O){F.fromBufferAttribute(a,O),B.copy(F);const M=u[O];I.copy(M),I.sub(F.multiplyScalar(F.dot(M))).normalize(),D.crossVectors(B,M);const N=D.dot(d[O])<0?-1:1;c.setXYZW(O,I.x,I.y,I.z,N)}for(let O=0,M=L.length;O<M;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,nt=N+q;K<nt;K+=3)C(t.getX(K+0)),C(t.getX(K+1)),C(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const a=new V,o=new V,c=new V,u=new V,d=new V,f=new V,p=new V,m=new V;if(t)for(let g=0,v=t.count;g<v;g+=3){const y=t.getX(g+0),w=t.getX(g+1),x=t.getX(g+2);a.fromBufferAttribute(e,y),o.fromBufferAttribute(e,w),c.fromBufferAttribute(e,x),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,x),u.add(p),d.add(p),f.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,v=e.count;g<v;g+=3)a.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,o),m.subVectors(a,o),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,d){const f=u.array,p=u.itemSize,m=u.normalized,g=new f.constructor(d.length*p);let v=0,y=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?v=d[w]*u.data.stride+u.offset:v=d[w]*p;for(let _=0;_<p;_++)g[y++]=f[v++]}return new Ci(g,p,m)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],f=t(d,i);e.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let p=0,m=f.length;p<m;p++){const g=f[p],v=t(g,i);d.push(v)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const a={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let m=0,g=f.length;m<g;m++){const v=f[m];p.push(v.toJSON(t.data))}p.length>0&&(a[d]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const f in a){const p=a[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],m=o[f];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const m=c[f];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Ke,Ir=new eh,bo=new Qo,Vd=new V,Ao=new V,wo=new V,Ro=new V,Nc=new V,Co=new V,kd=new V,Po=new V;class Bn extends bn{constructor(t=new zn,e=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){Co.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const p=u[d],m=o[d];p!==0&&(Nc.fromBufferAttribute(m,t),c?Co.addScaledVector(Nc,p):Co.addScaledVector(Nc.sub(e),p))}e.add(Co)}return e}raycast(t,e){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(o),Ir.copy(t.ray).recast(t.near),!(bo.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(bo,Vd)===null||Ir.origin.distanceToSquared(Vd)>(t.far-t.near)**2))&&(Hd.copy(o).invert(),Ir.copy(t.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,w=g.length;y<w;y++){const x=g[y],_=c[x.materialIndex],L=Math.max(x.start,v.start),I=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let D=L,F=I;D<F;D+=3){const B=u.getX(D),C=u.getX(D+1),O=u.getX(D+2);a=Do(this,_,t,i,f,p,m,B,C,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const y=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let x=y,_=w;x<_;x+=3){const L=u.getX(x),I=u.getX(x+1),D=u.getX(x+2);a=Do(this,c,t,i,f,p,m,L,I,D),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,w=g.length;y<w;y++){const x=g[y],_=c[x.materialIndex],L=Math.max(x.start,v.start),I=Math.min(d.count,Math.min(x.start+x.count,v.start+v.count));for(let D=L,F=I;D<F;D+=3){const B=D,C=D+1,O=D+2;a=Do(this,_,t,i,f,p,m,B,C,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const y=Math.max(0,v.start),w=Math.min(d.count,v.start+v.count);for(let x=y,_=w;x<_;x+=3){const L=x,I=x+1,D=x+2;a=Do(this,c,t,i,f,p,m,L,I,D),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}}function fE(r,t,e,i,a,o,c,u){let d;if(t.side===Dn?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,t.side===Sr,u),d===null)return null;Po.copy(u),Po.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Po);return f<e.near||f>e.far?null:{distance:f,point:Po.clone(),object:r}}function Do(r,t,e,i,a,o,c,u,d,f){r.getVertexPosition(u,Ao),r.getVertexPosition(d,wo),r.getVertexPosition(f,Ro);const p=fE(r,t,e,i,Ao,wo,Ro,kd);if(p){const m=new V;mi.getBarycoord(kd,Ao,wo,Ro,m),a&&(p.uv=mi.getInterpolatedAttribute(a,u,d,f,m,new ee)),o&&(p.uv1=mi.getInterpolatedAttribute(o,u,d,f,m,new ee)),c&&(p.normal=mi.getInterpolatedAttribute(c,u,d,f,m,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:f,normal:new V,materialIndex:0};mi.getNormal(Ao,wo,Ro,g.normal),p.face=g,p.barycoord=m}return p}class Is extends zn{constructor(t=1,e=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],f=[],p=[],m=[];let g=0,v=0;y("z","y","x",-1,-1,i,e,t,c,o,0),y("z","y","x",1,-1,i,e,-t,c,o,1),y("x","z","y",1,1,t,i,e,a,c,2),y("x","z","y",1,-1,t,i,-e,a,c,3),y("x","y","z",1,-1,t,e,i,a,o,4),y("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(m,2));function y(w,x,_,L,I,D,F,B,C,O,M){const T=D/C,N=F/O,q=D/2,K=F/2,nt=B/2,it=C+1,tt=O+1;let $=0,ot=0;const wt=new V;for(let Mt=0;Mt<tt;Mt++){const Et=Mt*N-K;for(let ce=0;ce<it;ce++){const ne=ce*T-q;wt[w]=ne*L,wt[x]=Et*I,wt[_]=nt,f.push(wt.x,wt.y,wt.z),wt[w]=0,wt[x]=0,wt[_]=B>0?1:-1,p.push(wt.x,wt.y,wt.z),m.push(ce/C),m.push(1-Mt/O),$+=1}}for(let Mt=0;Mt<O;Mt++)for(let Et=0;Et<C;Et++){const ce=g+Et+it*Mt,ne=g+Et+it*(Mt+1),He=g+(Et+1)+it*(Mt+1),be=g+(Et+1)+it*Mt;d.push(ce,ne,be),d.push(ne,He,be),ot+=6}u.addGroup(v,ot,M),v+=ot,g+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const a=r[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Pn(r){const t={};for(let e=0;e<r.length;e++){const i=Ps(r[e]);for(const a in i)t[a]=i[a]}return t}function dE(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Zp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const pE={clone:Ps,merge:Pn};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=dE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $p extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new V,Wd=new ee,Xd=new ee;class fn extends $p{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hu*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mr.x,mr.y).multiplyScalar(-t/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-t/mr.z)}getViewSize(t,e){return this.getViewBounds(t,Wd,Xd),e.subVectors(Xd,Wd)}setViewOffset(t,e,i,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/d,e-=c.offsetY*i/f,a*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,vs=1;class gE extends bn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fn(xs,vs,t,e);a.layers=this.layers,this.add(a);const o=new fn(xs,vs,t,e);o.layers=this.layers,this.add(o);const c=new fn(xs,vs,t,e);c.layers=this.layers,this.add(c);const u=new fn(xs,vs,t,e);u.layers=this.layers,this.add(u);const d=new fn(xs,vs,t,e);d.layers=this.layers,this.add(d);const f=new fn(xs,vs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,o,c,u,d]=e;for(const f of e)this.remove(f);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,f,p]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,u),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,f),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(m,g,v),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Jp extends Tn{constructor(t=[],e=Hr,i,a,o,c,u,d,f,p){super(t,e,i,a,o,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jp extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Jp(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Is(5,5,5),o=new Li({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:$i});o.uniforms.tEquirect.value=e;const c=new Bn(a,o),u=e.minFilter;return e.minFilter===zr&&(e.minFilter=yn),new gE(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(o)}}class ua extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xE={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const w of t.hand.values()){const x=e.getJointPose(w,i),_=this._getHandJoint(f,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,y=.005;f.inputState.pinching&&g>v+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=v-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class vE extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class SE extends Tn{constructor(t=null,e=1,i=1,a,o,c,u,d,f=_n,p=_n,m,g){super(null,c,u,d,f,p,a,o,m,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new V,ME=new V,EE=new le;class gr{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Oc.subVectors(i,e).cross(ME.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||EE.getNormalMatrix(t),a=this.coplanarPoint(Oc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Qo,yE=new ee(.5,.5),Lo=new V;class nh{constructor(t=new gr,e=new gr,i=new gr,a=new gr,o=new gr,c=new gr){this.planes=[t,e,i,a,o,c]}set(t,e,i,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ai,i=!1){const a=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],g=o[6],v=o[7],y=o[8],w=o[9],x=o[10],_=o[11],L=o[12],I=o[13],D=o[14],F=o[15];if(a[0].setComponents(f-c,v-p,_-y,F-L).normalize(),a[1].setComponents(f+c,v+p,_+y,F+L).normalize(),a[2].setComponents(f+u,v+m,_+w,F+I).normalize(),a[3].setComponents(f-u,v-m,_-w,F-I).normalize(),i)a[4].setComponents(d,g,x,D).normalize(),a[5].setComponents(f-d,v-g,_-x,F-D).normalize();else if(a[4].setComponents(f-d,v-g,_-x,F-D).normalize(),e===Ai)a[5].setComponents(f+d,v+g,_+x,F+D).normalize();else if(e===Ko)a[5].setComponents(d,g,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);const e=yE.distanceTo(t.center);return Ur.radius=.7071067811865476+e,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Lo.x=a.normal.x>0?t.max.x:t.min.x,Lo.y=a.normal.y>0?t.max.y:t.min.y,Lo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zo=new V,$o=new V,qd=new Ke,aa=new eh,Io=new Qo,Bc=new V,Yd=new V;class rh extends bn{constructor(t=new zn,e=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,o=e.count;a<o;a++)Zo.fromBufferAttribute(e,a-1),$o.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=Zo.distanceTo($o);t.setAttribute("lineDistance",new gn(i,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(a),Io.radius+=o,t.ray.intersectsSphere(Io)===!1)return;qd.copy(a).invert(),aa.copy(t.ray).applyMatrix4(qd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const v=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let w=v,x=y-1;w<x;w+=f){const _=p.getX(w),L=p.getX(w+1),I=Uo(this,t,aa,d,_,L,w);I&&e.push(I)}if(this.isLineLoop){const w=p.getX(y-1),x=p.getX(v),_=Uo(this,t,aa,d,w,x,y-1);_&&e.push(_)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let w=v,x=y-1;w<x;w+=f){const _=Uo(this,t,aa,d,w,w+1,w);_&&e.push(_)}if(this.isLineLoop){const w=Uo(this,t,aa,d,y-1,v,y-1);w&&e.push(w)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Uo(r,t,e,i,a,o,c){const u=r.geometry.attributes.position;if(Zo.fromBufferAttribute(u,a),$o.fromBufferAttribute(u,o),e.distanceSqToSegment(Zo,$o,Bc,Yd)>i)return;Bc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Bc);if(!(f<t.near||f>t.far))return{distance:f,point:Yd.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}class va extends Tn{constructor(t,e,i=Pi,a,o,c,u=_n,d=_n,f,p=Qi,m=1){if(p!==Qi&&p!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:m};super(g,a,o,c,u,d,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class TE extends va{constructor(t,e=Pi,i=Hr,a,o,c=_n,u=_n,d,f=Qi){const p={width:t,height:t,depth:1},m=[p,p,p,p,p,p];super(t,t,e,i,a,o,c,u,d,f),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Qp extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sh extends zn{constructor(t=1,e=1,i=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};const f=this;a=Math.floor(a),o=Math.floor(o);const p=[],m=[],g=[],v=[];let y=0;const w=[],x=i/2;let _=0;L(),c===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(p),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(v,2));function L(){const D=new V,F=new V;let B=0;const C=(e-t)/i;for(let O=0;O<=o;O++){const M=[],T=O/o,N=T*(e-t)+t;for(let q=0;q<=a;q++){const K=q/a,nt=K*d+u,it=Math.sin(nt),tt=Math.cos(nt);F.x=N*it,F.y=-T*i+x,F.z=N*tt,m.push(F.x,F.y,F.z),D.set(it,C,tt).normalize(),g.push(D.x,D.y,D.z),v.push(K,1-T),M.push(y++)}w.push(M)}for(let O=0;O<a;O++)for(let M=0;M<o;M++){const T=w[M][O],N=w[M+1][O],q=w[M+1][O+1],K=w[M][O+1];(t>0||M!==0)&&(p.push(T,N,K),B+=3),(e>0||M!==o-1)&&(p.push(N,q,K),B+=3)}f.addGroup(_,B,0),_+=B}function I(D){const F=y,B=new ee,C=new V;let O=0;const M=D===!0?t:e,T=D===!0?1:-1;for(let q=1;q<=a;q++)m.push(0,x*T,0),g.push(0,T,0),v.push(.5,.5),y++;const N=y;for(let q=0;q<=a;q++){const nt=q/a*d+u,it=Math.cos(nt),tt=Math.sin(nt);C.x=M*tt,C.y=x*T,C.z=M*it,m.push(C.x,C.y,C.z),g.push(0,T,0),B.x=it*.5+.5,B.y=tt*.5*T+.5,v.push(B.x,B.y),y++}for(let q=0;q<a;q++){const K=F+q,nt=N+q;D===!0?p.push(nt,nt+1,K):p.push(nt+1,nt,K),O+=3}f.addGroup(_,O,D===!0?1:2),_+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ah extends sh{constructor(t=1,e=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new ah(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tl extends zn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(i),d=Math.floor(a),f=u+1,p=d+1,m=t/u,g=e/d,v=[],y=[],w=[],x=[];for(let _=0;_<p;_++){const L=_*g-c;for(let I=0;I<f;I++){const D=I*m-o;y.push(D,-L,0),w.push(0,0,1),x.push(I/u),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let L=0;L<u;L++){const I=L+f*_,D=L+f*(_+1),F=L+1+f*(_+1),B=L+1+f*_;v.push(I,D,B),v.push(D,F,B)}this.setIndex(v),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Us extends zn{constructor(t=1,e=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const p=[],m=new V,g=new V,v=[],y=[],w=[],x=[];for(let _=0;_<=i;_++){const L=[],I=_/i;let D=0;_===0&&c===0?D=.5/e:_===i&&d===Math.PI&&(D=-.5/e);for(let F=0;F<=e;F++){const B=F/e;m.x=-t*Math.cos(a+B*o)*Math.sin(c+I*u),m.y=t*Math.cos(c+I*u),m.z=t*Math.sin(a+B*o)*Math.sin(c+I*u),y.push(m.x,m.y,m.z),g.copy(m).normalize(),w.push(g.x,g.y,g.z),x.push(B+D,1-I),L.push(f++)}p.push(L)}for(let _=0;_<i;_++)for(let L=0;L<e;L++){const I=p[_][L+1],D=p[_][L],F=p[_+1][L],B=p[_+1][L+1];(_!==0||c>0)&&v.push(I,D,B),(_!==i-1||d<Math.PI)&&v.push(D,F,B)}this.setIndex(v),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bE extends Li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class AE extends Ds{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wE extends Ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RE extends Ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class CE{constructor(t,e,i){const a=this;let o=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const v=f[m],y=f[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const PE=new CE;class oh{constructor(t){this.manager=t!==void 0?t:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,o){i.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}oh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ss=new WeakMap;class DE extends oh{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,c=zc.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(c),o.manager.itemEnd(t)},0);else{let m=Ss.get(c);m===void 0&&(m=[],Ss.set(c,m)),m.push({onLoad:e,onError:a})}return c}const u=ga("img");function d(){p(),e&&e(this);const m=Ss.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onLoad&&v.onLoad(this)}Ss.delete(this),o.manager.itemEnd(t)}function f(m){p(),a&&a(m),zc.remove(`image:${t}`);const g=Ss.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onError&&y.onError(m)}Ss.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),zc.add(`image:${t}`,u),o.manager.itemStart(t),u.src=t,u}}class tm extends oh{constructor(t){super(t)}load(t,e,i,a){const o=new Tn,c=new DE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){o.image=u,o.needsUpdate=!0,e!==void 0&&e(o)},i,a),o}}class LE extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Gc=new Ke,Kd=new V,Zd=new V;class IE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),Zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zd),e.updateMatrixWorld(),Gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class UE extends IE{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class em extends LE{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new UE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class nm extends $p{constructor(t=-1,e=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-t,c=i+t,u=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class NE extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class FE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class $d{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Jd=new V;let No,Hc;class OE extends bn{constructor(t=new V(0,0,1),e=new V(0,0,0),i=1,a=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",No===void 0&&(No=new zn,No.setAttribute("position",new gn([0,0,0,0,1,0],3)),Hc=new ah(.5,1,5,1),Hc.translate(0,-.5,0)),this.position.copy(e),this.line=new rh(No,new ih({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Bn(Hc,new Ls({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Jd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Jd,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class BE extends kr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function jd(r,t,e,i){const a=zE(i);switch(e){case zp:return r*t;case Hp:return r*t/a.components*a.byteLength;case Zu:return r*t/a.components*a.byteLength;case Rs:return r*t*2/a.components*a.byteLength;case $u:return r*t*2/a.components*a.byteLength;case Gp:return r*t*3/a.components*a.byteLength;case _i:return r*t*4/a.components*a.byteLength;case Ju:return r*t*4/a.components*a.byteLength;case Ho:case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ko:case Wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:case fu:return Math.max(r,16)*Math.max(t,8)/4;case cu:case hu:return Math.max(r,8)*Math.max(t,8)/2;case du:case pu:case _u:case gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mu:case xu:case vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case yu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Au:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case wu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Lu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Iu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uu:case Nu:case Fu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ou:case Bu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zu:case Gu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zE(r){switch(r){case Kn:case Np:return{byteLength:1,components:1};case ma:case Fp:case ji:return{byteLength:2,components:1};case Yu:case Ku:return{byteLength:2,components:4};case Pi:case qu:case bi:return{byteLength:4,components:1};case Op:case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);function im(){let r=null,t=!1,e=null,i=null;function a(o,c){e(o,c),i=r.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(a),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){r=o}}}function GE(r){const t=new WeakMap;function e(u,d){const f=u.array,p=u.usage,m=f.byteLength,g=r.createBuffer();r.bindBuffer(d,g),r.bufferData(d,f,p),u.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=r.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,d,f){const p=d.array,m=d.updateRanges;if(r.bindBuffer(f,u),m.length===0)r.bufferSubData(f,0,p);else{m.sort((v,y)=>v.start-y.start);let g=0;for(let v=1;v<m.length;v++){const y=m[g],w=m[v];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++g,m[g]=w)}m.length=g+1;for(let v=0,y=m.length;v<y;v++){const w=m[v];r.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(r.deleteBuffer(d.buffer),t.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:a,remove:o,update:c}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YE=`#ifdef USE_AOMAP
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
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
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
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ty=`#ifdef USE_IRIDESCENCE
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
#endif`,ey=`#ifdef USE_BUMPMAP
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uy=`#define PI 3.141592653589793
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
} // validated`,hy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,zy=`uniform sampler2D dfgLUT;
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
}`,Gy=`
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$y=`#if defined( USE_POINTS_UV )
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
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
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
#endif`,iT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
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
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ST=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bT=`float getShadowMask() {
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`#include <common>
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
}`,YT=`#if DEPTH_PACKING == 3200
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
}`,KT=`#define DISTANCE
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
}`,ZT=`#define DISTANCE
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`uniform float scale;
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
}`,QT=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,rb=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,ab=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,lb=`#define PHONG
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
}`,cb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,hb=`#define STANDARD
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
}`,fb=`#define TOON
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
}`,db=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,vb=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:HE,alphahash_pars_fragment:VE,alphamap_fragment:kE,alphamap_pars_fragment:WE,alphatest_fragment:XE,alphatest_pars_fragment:qE,aomap_fragment:YE,aomap_pars_fragment:KE,batching_pars_vertex:ZE,batching_vertex:$E,begin_vertex:JE,beginnormal_vertex:jE,bsdfs:QE,iridescence_fragment:ty,bumpmap_pars_fragment:ey,clipping_planes_fragment:ny,clipping_planes_pars_fragment:iy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:sy,color_fragment:ay,color_pars_fragment:oy,color_pars_vertex:ly,color_vertex:cy,common:uy,cube_uv_reflection_fragment:hy,defaultnormal_vertex:fy,displacementmap_pars_vertex:dy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:_y,colorspace_fragment:gy,colorspace_pars_fragment:xy,envmap_fragment:vy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Iy,envmap_vertex:yy,fog_vertex:Ty,fog_pars_vertex:by,fog_fragment:Ay,fog_pars_fragment:wy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Cy,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Dy,lights_pars_begin:Ly,lights_toon_fragment:Uy,lights_toon_pars_fragment:Ny,lights_phong_fragment:Fy,lights_phong_pars_fragment:Oy,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:Gy,lights_fragment_maps:Hy,lights_fragment_end:Vy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:qy,map_fragment:Yy,map_pars_fragment:Ky,map_particle_fragment:Zy,map_particle_pars_fragment:$y,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:jy,morphinstance_vertex:Qy,morphcolor_vertex:tT,morphnormal_vertex:eT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:rT,normal_fragment_maps:sT,normal_pars_fragment:aT,normal_pars_vertex:oT,normal_vertex:lT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:fT,iridescence_pars_fragment:dT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:_T,project_vertex:gT,dithering_fragment:xT,dithering_pars_fragment:vT,roughnessmap_fragment:ST,roughnessmap_pars_fragment:MT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:yT,shadowmap_vertex:TT,shadowmask_pars_fragment:bT,skinbase_vertex:AT,skinning_pars_vertex:wT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:PT,specularmap_pars_fragment:DT,tonemapping_fragment:LT,tonemapping_pars_fragment:IT,transmission_fragment:UT,transmission_pars_fragment:NT,uv_pars_fragment:FT,uv_pars_vertex:OT,uv_vertex:BT,worldpos_vertex:zT,background_vert:GT,background_frag:HT,backgroundCube_vert:VT,backgroundCube_frag:kT,cube_vert:WT,cube_frag:XT,depth_vert:qT,depth_frag:YT,distance_vert:KT,distance_frag:ZT,equirect_vert:$T,equirect_frag:JT,linedashed_vert:jT,linedashed_frag:QT,meshbasic_vert:tb,meshbasic_frag:eb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:rb,meshmatcap_frag:sb,meshnormal_vert:ab,meshnormal_frag:ob,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:hb,meshtoon_vert:fb,meshtoon_frag:db,points_vert:pb,points_frag:mb,shadow_vert:_b,shadow_frag:gb,sprite_vert:xb,sprite_frag:vb},At={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},yi={basic:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Pn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Pn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Pn([At.points,At.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Pn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Pn([At.common,At.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Pn([At.sprite,At.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Pn([At.common,At.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Pn([At.lights,At.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};yi.physical={uniforms:Pn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Fo={r:0,b:0,g:0},Nr=new Di,Sb=new Ke;function Mb(r,t,e,i,a,o,c){const u=new Ee(0);let d=o===!0?0:1,f,p,m=null,g=0,v=null;function y(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?e:t).get(D)),D}function w(I){let D=!1;const F=y(I);F===null?_(u,d):F&&F.isColor&&(_(F,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(I,D){const F=y(D);F&&(F.isCubeTexture||F.mapping===jo)?(p===void 0&&(p=new Bn(new Is(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ps(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Nr.copy(D.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(Nr)),p.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,(m!==F||g!==F.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,m=F,g=F.version,v=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(f===void 0&&(f=new Bn(new tl(2,2),new Li({name:"BackgroundMaterial",uniforms:Ps(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=F,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,F.matrixAutoUpdate===!0&&F.updateMatrix(),f.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||g!==F.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,m=F,g=F.version,v=r.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function _(I,D){I.getRGB(Fo,Zp(r)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,D,c)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,D=1){u.set(I),d=D,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,_(u,d)},render:w,addToRenderList:x,dispose:L}}function Eb(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(T,N,q,K,nt){let it=!1;const tt=m(K,q,N);o!==tt&&(o=tt,f(o.object)),it=v(T,K,q,nt),it&&y(T,K,q,nt),nt!==null&&t.update(nt,r.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,D(T,N,q,K),nt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function d(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function m(T,N,q){const K=q.wireframe===!0;let nt=i[T.id];nt===void 0&&(nt={},i[T.id]=nt);let it=nt[N.id];it===void 0&&(it={},nt[N.id]=it);let tt=it[K];return tt===void 0&&(tt=g(d()),it[K]=tt),tt}function g(T){const N=[],q=[],K=[];for(let nt=0;nt<e;nt++)N[nt]=0,q[nt]=0,K[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:K,object:T,attributes:{},index:null}}function v(T,N,q,K){const nt=o.attributes,it=N.attributes;let tt=0;const $=q.getAttributes();for(const ot in $)if($[ot].location>=0){const Mt=nt[ot];let Et=it[ot];if(Et===void 0&&(ot==="instanceMatrix"&&T.instanceMatrix&&(Et=T.instanceMatrix),ot==="instanceColor"&&T.instanceColor&&(Et=T.instanceColor)),Mt===void 0||Mt.attribute!==Et||Et&&Mt.data!==Et.data)return!0;tt++}return o.attributesNum!==tt||o.index!==K}function y(T,N,q,K){const nt={},it=N.attributes;let tt=0;const $=q.getAttributes();for(const ot in $)if($[ot].location>=0){let Mt=it[ot];Mt===void 0&&(ot==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),ot==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor));const Et={};Et.attribute=Mt,Mt&&Mt.data&&(Et.data=Mt.data),nt[ot]=Et,tt++}o.attributes=nt,o.attributesNum=tt,o.index=K}function w(){const T=o.newAttributes;for(let N=0,q=T.length;N<q;N++)T[N]=0}function x(T){_(T,0)}function _(T,N){const q=o.newAttributes,K=o.enabledAttributes,nt=o.attributeDivisors;q[T]=1,K[T]===0&&(r.enableVertexAttribArray(T),K[T]=1),nt[T]!==N&&(r.vertexAttribDivisor(T,N),nt[T]=N)}function L(){const T=o.newAttributes,N=o.enabledAttributes;for(let q=0,K=N.length;q<K;q++)N[q]!==T[q]&&(r.disableVertexAttribArray(q),N[q]=0)}function I(T,N,q,K,nt,it,tt){tt===!0?r.vertexAttribIPointer(T,N,q,nt,it):r.vertexAttribPointer(T,N,q,K,nt,it)}function D(T,N,q,K){w();const nt=K.attributes,it=q.getAttributes(),tt=N.defaultAttributeValues;for(const $ in it){const ot=it[$];if(ot.location>=0){let wt=nt[$];if(wt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(wt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(wt=T.instanceColor)),wt!==void 0){const Mt=wt.normalized,Et=wt.itemSize,ce=t.get(wt);if(ce===void 0)continue;const ne=ce.buffer,He=ce.type,be=ce.bytesPerElement,at=He===r.INT||He===r.UNSIGNED_INT||wt.gpuType===qu;if(wt.isInterleavedBufferAttribute){const dt=wt.data,Pt=dt.stride,$t=wt.offset;if(dt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<ot.locationSize;Bt++)_(ot.location+Bt,dt.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Bt=0;Bt<ot.locationSize;Bt++)x(ot.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Bt=0;Bt<ot.locationSize;Bt++)I(ot.location+Bt,Et/ot.locationSize,He,Mt,Pt*be,($t+Et/ot.locationSize*Bt)*be,at)}else{if(wt.isInstancedBufferAttribute){for(let dt=0;dt<ot.locationSize;dt++)_(ot.location+dt,wt.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let dt=0;dt<ot.locationSize;dt++)x(ot.location+dt);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let dt=0;dt<ot.locationSize;dt++)I(ot.location+dt,Et/ot.locationSize,He,Mt,Et*be,Et/ot.locationSize*dt*be,at)}}else if(tt!==void 0){const Mt=tt[$];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(ot.location,Mt);break;case 3:r.vertexAttrib3fv(ot.location,Mt);break;case 4:r.vertexAttrib4fv(ot.location,Mt);break;default:r.vertexAttrib1fv(ot.location,Mt)}}}}L()}function F(){O();for(const T in i){const N=i[T];for(const q in N){const K=N[q];for(const nt in K)p(K[nt].object),delete K[nt];delete N[q]}delete i[T]}}function B(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const q in N){const K=N[q];for(const nt in K)p(K[nt].object),delete K[nt];delete N[q]}delete i[T.id]}function C(T){for(const N in i){const q=i[N];if(q[T.id]===void 0)continue;const K=q[T.id];for(const nt in K)p(K[nt].object),delete K[nt];delete q[T.id]}}function O(){M(),c=!0,o!==a&&(o=a,f(o.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:O,resetDefaultState:M,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:x,disableUnusedAttributes:L}}function yb(r,t,e){let i;function a(f){i=f}function o(f,p){r.drawArrays(i,f,p),e.update(p,i,1)}function c(f,p,m){m!==0&&(r.drawArraysInstanced(i,f,p,m),e.update(p,i,m))}function u(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,m);let v=0;for(let y=0;y<m;y++)v+=p[y];e.update(v,i,1)}function d(f,p,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<f.length;y++)c(f[y],p[y],g[y]);else{v.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w]*g[w];e.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tb(r,t,e,i){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");a=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(C){return!(C!==_i&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(C){const O=C===ji&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Kn&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bi&&!O)}function d(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=d(f);p!==f&&(jt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:D,maxSamples:F,samples:B}}function bb(r){const t=this;let e=null,i=0,a=!1,o=!1;const c=new gr,u=new le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||i!==0||a;return a=g,i=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){e=p(m,g,0)},this.setState=function(m,g,v){const y=m.clippingPlanes,w=m.clipIntersection,x=m.clipShadows,_=r.get(m);if(!a||y===null||y.length===0||o&&!x)o?p(null):f();else{const L=o?0:i,I=L*4;let D=_.clippingState||null;d.value=D,D=p(y,g,I,v);for(let F=0;F!==I;++F)D[F]=e[F];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,g,v,y){const w=m!==null?m.length:0;let x=null;if(w!==0){if(x=d.value,y!==!0||x===null){const _=v+w*4,L=g.matrixWorldInverse;u.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let I=0,D=v;I!==w;++I,D+=4)c.copy(m[I]).applyMatrix4(L,u),c.normal.toArray(x,D),x[D+3]=c.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function Ab(r){let t=new WeakMap;function e(c,u){return u===su?c.mapping=Hr:u===au&&(c.mapping=ws),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===su||u===au)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new jp(d.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",a),e(f.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const vr=4,Qd=[.125,.215,.35,.446,.526,.582],Br=20,wb=256,oa=new nm,tp=new Ee;let Vc=null,kc=0,Wc=0,Xc=!1;const Rb=new V;class ep{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,o={}){const{size:c=256,position:u=Rb}=o;Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,a,d,u),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,kc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hr||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ji,format:_i,colorSpace:Cs,depthBuffer:!1},a=np(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(t,e,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cb(o)),this._blurMaterial=Db(o,t,e),this._ggxMaterial=Pb(o,t,e)}return a}_compileMaterial(t){const e=new Bn(new zn,t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,i,a,o){const d=new fn(90,1,e,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(tp),m.toneMapping=wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(a),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Is,new Ls({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let _=!1;const L=t.background;L?L.isColor&&(x.color.copy(L),t.background=null,_=!0):(x.color.copy(tp),_=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(d.up.set(0,f[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[I],o.y,o.z)):D===1?(d.up.set(0,0,f[I]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[I],o.z)):(d.up.set(0,f[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[I]));const F=this._cubeSize;Ms(a,D*F,I>2?F:0,F,F),m.setRenderTarget(a),_&&m.render(w,d),m.render(t,d)}m.toneMapping=v,m.autoClear=g,t.background=L}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Hr||t.mapping===ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=t;const d=this._cubeSize;Ms(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,oa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),m=Math.sqrt(f*f-p*p),g=0+f*1.25,v=m*g,{_lodMax:y}=this,w=this._sizeLods[i],x=3*w*(i>y-vr?i-y+vr:0),_=4*(this._cubeSize-w);d.envMap.value=t.texture,d.roughness.value=v,d.mipInt.value=y-e,Ms(o,x,_,3*w,2*w),a.setRenderTarget(o),a.render(u,oa),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=y-i,Ms(t,x,_,3*w,2*w),a.setRenderTarget(t),a.render(u,oa)}_blur(t,e,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",o),this._halfBlur(c,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[a];m.material=f;const g=f.uniforms,v=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Br-1),w=o/y,x=isFinite(o)?1+Math.floor(p*w):Br;x>Br&&jt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const _=[];let L=0;for(let C=0;C<Br;++C){const O=C/w,M=Math.exp(-O*O/2);_.push(M),C===0?L+=M:C<x&&(L+=2*M)}for(let C=0;C<_.length;C++)_[C]=_[C]/L;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:I}=this;g.dTheta.value=y,g.mipInt.value=I-i;const D=this._sizeLods[a],F=3*D*(a>I-vr?a-I+vr:0),B=4*(this._cubeSize-D);Ms(e,F,B,3*D,2*D),d.setRenderTarget(e),d.render(m,oa)}}function Cb(r){const t=[],e=[],i=[];let a=r;const o=r-vr+1+Qd.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>r-vr?d=Qd[c-r+vr-1]:c===0&&(d=0),e.push(d);const f=1/(u-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,y=6,w=3,x=2,_=1,L=new Float32Array(w*y*v),I=new Float32Array(x*y*v),D=new Float32Array(_*y*v);for(let B=0;B<v;B++){const C=B%3*2/3-1,O=B>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];L.set(M,w*y*B),I.set(g,x*y*B);const T=[B,B,B,B,B,B];D.set(T,_*y*B)}const F=new zn;F.setAttribute("position",new Ci(L,w)),F.setAttribute("uv",new Ci(I,x)),F.setAttribute("faceIndex",new Ci(D,_)),i.push(new Bn(F,null)),a>vr&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function np(r,t,e){const i=new Ri(r,t,e);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(r,t,e,i,a){r.viewport.set(t,e,i,a),r.scissor.set(t,e,i,a)}function Pb(r,t,e){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Db(r,t,e){const i=new Float32Array(Br),a=new V(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ip(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function rp(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function Lb(r){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===su||d===au,p=d===Hr||d===ws;if(f||p){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new ep(r)),m=f?e.fromEquirectangular(u,m):e.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return f&&v&&v.height>0||p&&v&&a(v)?(e===null&&(e=new ep(r)),m=f?e.fromEquirectangular(u):e.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function a(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function Ib(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=r.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&xa("WebGLRenderer: "+i+" extension not supported."),a}}}function Ub(r,t,e,i){const a={},o=new WeakMap;function c(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const v=o.get(g);v&&(t.remove(v),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(m,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function d(m){const g=m.attributes;for(const v in g)t.update(g[v],r.ARRAY_BUFFER)}function f(m){const g=[],v=m.index,y=m.attributes.position;let w=0;if(v!==null){const L=v.array;w=v.version;for(let I=0,D=L.length;I<D;I+=3){const F=L[I+0],B=L[I+1],C=L[I+2];g.push(F,B,B,C,C,F)}}else if(y!==void 0){const L=y.array;w=y.version;for(let I=0,D=L.length/3-1;I<D;I+=3){const F=I+0,B=I+1,C=I+2;g.push(F,B,B,C,C,F)}}else return;const x=new(kp(g)?Kp:Yp)(g,1);x.version=w;const _=o.get(m);_&&t.remove(_),o.set(m,x)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&f(m)}else f(m);return o.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function Nb(r,t,e){let i;function a(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,v){r.drawElements(i,v,o,g*c),e.update(v,i,1)}function f(g,v,y){y!==0&&(r.drawElementsInstanced(i,v,o,g*c,y),e.update(v,i,y))}function p(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,y);let x=0;for(let _=0;_<y;_++)x+=v[_];e.update(x,i,1)}function m(g,v,y,w){if(y===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)f(g[_]/c,v[_],w[_]);else{x.multiDrawElementsInstancedWEBGL(i,v,0,o,g,0,w,0,y);let _=0;for(let L=0;L<y;L++)_+=v[L]*w[L];e.update(_,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Fb(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(o/3);break;case r.LINES:e.lines+=u*(o/2);break;case r.LINE_STRIP:e.lines+=u*(o-1);break;case r.LINE_LOOP:e.lines+=u*o;break;case r.POINTS:e.points+=u*o;break;default:Re("WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Ob(r,t,e){const i=new WeakMap,a=new Je;function o(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==m){let T=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var v=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),w===!0&&(D=2),x===!0&&(D=3);let F=u.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const C=new Float32Array(F*B*4*m),O=new Wp(C,F,B,m);O.type=bi,O.needsUpdate=!0;const M=D*4;for(let N=0;N<m;N++){const q=_[N],K=L[N],nt=I[N],it=F*B*4*N;for(let tt=0;tt<q.count;tt++){const $=tt*M;y===!0&&(a.fromBufferAttribute(q,tt),C[it+$+0]=a.x,C[it+$+1]=a.y,C[it+$+2]=a.z,C[it+$+3]=0),w===!0&&(a.fromBufferAttribute(K,tt),C[it+$+4]=a.x,C[it+$+5]=a.y,C[it+$+6]=a.z,C[it+$+7]=0),x===!0&&(a.fromBufferAttribute(nt,tt),C[it+$+8]=a.x,C[it+$+9]=a.y,C[it+$+10]=a.z,C[it+$+11]=nt.itemSize===4?a.w:1)}}g={count:m,texture:O,size:new ee(F,B)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let y=0;for(let x=0;x<f.length;x++)y+=f[x];const w=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",f)}d.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function Bb(r,t,e,i){let a=new WeakMap;function o(d){const f=i.render.frame,p=d.geometry,m=t.get(d,p);if(a.get(m)!==f&&(t.update(m),a.set(m,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==f&&(e.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,f))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==f&&(g.update(),a.set(g,f))}return m}function c(){a=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:c}}const zb={[wp]:"LINEAR_TONE_MAPPING",[Rp]:"REINHARD_TONE_MAPPING",[Cp]:"CINEON_TONE_MAPPING",[Pp]:"ACES_FILMIC_TONE_MAPPING",[Lp]:"AGX_TONE_MAPPING",[Ip]:"NEUTRAL_TONE_MAPPING",[Dp]:"CUSTOM_TONE_MAPPING"};function Gb(r,t,e,i,a){const o=new Ri(t,e,{type:r,depthBuffer:i,stencilBuffer:a}),c=new Ri(t,e,{type:ji,depthBuffer:!1,stencilBuffer:!1}),u=new zn;u.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new gn([0,2,0,0,2,0],2));const d=new bE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bn(u,d),p=new nm(-1,1,1,-1,0,1);let m=null,g=null,v=!1,y,w=null,x=[],_=!1;this.setSize=function(L,I){o.setSize(L,I),c.setSize(L,I);for(let D=0;D<x.length;D++){const F=x[D];F.setSize&&F.setSize(L,I)}},this.setEffects=function(L){x=L,_=x.length>0&&x[0].isRenderPass===!0;const I=o.width,D=o.height;for(let F=0;F<x.length;F++){const B=x[F];B.setSize&&B.setSize(I,D)}},this.begin=function(L,I){if(v||L.toneMapping===wi&&x.length===0)return!1;if(w=I,I!==null){const D=I.width,F=I.height;(o.width!==D||o.height!==F)&&this.setSize(D,F)}return _===!1&&L.setRenderTarget(o),y=L.toneMapping,L.toneMapping=wi,!0},this.hasRenderPass=function(){return _},this.end=function(L,I){L.toneMapping=y,v=!0;let D=o,F=c;for(let B=0;B<x.length;B++){const C=x[B];if(C.enabled!==!1&&(C.render(L,F,D,I),C.needsSwap!==!1)){const O=D;D=F,F=O}}if(m!==L.outputColorSpace||g!==L.toneMapping){m=L.outputColorSpace,g=L.toneMapping,d.defines={},Te.getTransfer(m)===Oe&&(d.defines.SRGB_TRANSFER="");const B=zb[g];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(w),L.render(f,p),w=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),c.dispose(),u.dispose(),d.dispose()}}const rm=new Tn,Vu=new va(1,1),sm=new Wp,am=new eE,om=new Jp,sp=[],ap=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Ns(r,t,e){const i=r[0];if(i<=0||i>0)return r;const a=t*e;let o=sp[a];if(o===void 0&&(o=new Float32Array(a),sp[a]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(o,u)}return o}function an(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function nl(r,t){let e=ap[t];e===void 0&&(e=new Int32Array(t),ap[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Hb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Vb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function kb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function Wb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function Xb(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;cp.set(i),r.uniformMatrix2fv(this.addr,!1,cp),on(e,i)}}function qb(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;lp.set(i),r.uniformMatrix3fv(this.addr,!1,lp),on(e,i)}}function Yb(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;op.set(i),r.uniformMatrix4fv(this.addr,!1,op),on(e,i)}}function Kb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Zb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function $b(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function Jb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function jb(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Qb(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function tA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function eA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function nA(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Vu.compareFunction=e.isReversedDepthBuffer()?Qu:ju,o=Vu):o=rm,e.setTexture2D(t||o,a)}function iA(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||am,a)}function rA(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||om,a)}function sA(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||sm,a)}function aA(r){switch(r){case 5126:return Hb;case 35664:return Vb;case 35665:return kb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return Kb;case 35667:case 35671:return Zb;case 35668:case 35672:return $b;case 35669:case 35673:return Jb;case 5125:return jb;case 36294:return Qb;case 36295:return tA;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function oA(r,t){r.uniform1fv(this.addr,t)}function lA(r,t){const e=Ns(t,this.size,2);r.uniform2fv(this.addr,e)}function cA(r,t){const e=Ns(t,this.size,3);r.uniform3fv(this.addr,e)}function uA(r,t){const e=Ns(t,this.size,4);r.uniform4fv(this.addr,e)}function hA(r,t){const e=Ns(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function fA(r,t){const e=Ns(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function dA(r,t){const e=Ns(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function pA(r,t){r.uniform1iv(this.addr,t)}function mA(r,t){r.uniform2iv(this.addr,t)}function _A(r,t){r.uniform3iv(this.addr,t)}function gA(r,t){r.uniform4iv(this.addr,t)}function xA(r,t){r.uniform1uiv(this.addr,t)}function vA(r,t){r.uniform2uiv(this.addr,t)}function SA(r,t){r.uniform3uiv(this.addr,t)}function MA(r,t){r.uniform4uiv(this.addr,t)}function EA(r,t,e){const i=this.cache,a=t.length,o=nl(e,a);an(i,o)||(r.uniform1iv(this.addr,o),on(i,o));let c;this.type===r.SAMPLER_2D_SHADOW?c=Vu:c=rm;for(let u=0;u!==a;++u)e.setTexture2D(t[u]||c,o[u])}function yA(r,t,e){const i=this.cache,a=t.length,o=nl(e,a);an(i,o)||(r.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||am,o[c])}function TA(r,t,e){const i=this.cache,a=t.length,o=nl(e,a);an(i,o)||(r.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||om,o[c])}function bA(r,t,e){const i=this.cache,a=t.length,o=nl(e,a);an(i,o)||(r.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||sm,o[c])}function AA(r){switch(r){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return hA;case 35675:return fA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return _A;case 35669:case 35673:return gA;case 5125:return xA;case 36294:return vA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return bA}}class wA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=aA(e.type)}}class RA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=AA(e.type)}}class CA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function up(r,t){r.seq.push(t),r.map[t.id]=t}function PA(r,t,e){const i=r.name,a=i.length;for(qc.lastIndex=0;;){const o=qc.exec(i),c=qc.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===a){up(e,f===void 0?new wA(u,r,t):new RA(u,r,t));break}else{let m=e.map[u];m===void 0&&(m=new CA(u),up(e,m)),e=m}}}class qo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=t.getActiveUniform(e,c),d=t.getUniformLocation(e,u.name);PA(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(t,e,i,a){const o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function hp(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const DA=37297;let LA=0;function IA(r,t){const e=r.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const fp=new le;function UA(r){Te._getMatrix(fp,Te.workingColorSpace,r);const t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(r)){case Yo:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dp(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),o=(r.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+IA(r.getShaderSource(t),u)}else return o}function NA(r,t){const e=UA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const FA={[wp]:"Linear",[Rp]:"Reinhard",[Cp]:"Cineon",[Pp]:"ACESFilmic",[Lp]:"AgX",[Ip]:"Neutral",[Dp]:"Custom"};function OA(r,t){const e=FA[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new V;function BA(){Te.getLuminanceCoefficients(Oo);const r=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function GA(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function HA(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(t,a),c=o.name;let u=1;o.type===r.FLOAT_MAT2&&(u=2),o.type===r.FLOAT_MAT3&&(u=3),o.type===r.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function ha(r){return r!==""}function pp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(r){return r.replace(VA,WA)}const kA=new Map;function WA(r,t){let e=he[t];if(e===void 0){const i=kA.get(t);if(i!==void 0)e=he[i],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ku(e)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(r){return r.replace(XA,qA)}function qA(r,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function gp(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const YA={[Go]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function KA(r){return YA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZA={[Hr]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function $A(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ZA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JA={[ws]:"ENVMAP_MODE_REFRACTION"};function jA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QA={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[NM]:"ENVMAP_BLENDING_MIX",[FM]:"ENVMAP_BLENDING_ADD"};function t1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":QA[r.combine]||"ENVMAP_BLENDING_NONE"}function e1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function n1(r,t,e,i){const a=r.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const d=KA(e),f=$A(e),p=jA(e),m=t1(e),g=e1(e),v=zA(e),y=GA(o),w=a.createProgram();let x,_,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ha).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ha).join(`
`),_.length>0&&(_+=`
`)):(x=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),_=[gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?he.tonemapping_pars_fragment:"",e.toneMapping!==wi?OA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,NA("linearToOutputTexel",e.outputColorSpace),BA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),c=ku(c),c=pp(c,e),c=mp(c,e),u=ku(u),u=pp(u,e),u=mp(u,e),c=_p(c),u=_p(u),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=L+x+c,D=L+_+u,F=hp(a,a.VERTEX_SHADER,I),B=hp(a,a.FRAGMENT_SHADER,D);a.attachShader(w,F),a.attachShader(w,B),e.index0AttributeName!==void 0?a.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function C(N){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(w)||"",K=a.getShaderInfoLog(F)||"",nt=a.getShaderInfoLog(B)||"",it=q.trim(),tt=K.trim(),$=nt.trim();let ot=!0,wt=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,F,B);else{const Mt=dp(a,F,"vertex"),Et=dp(a,B,"fragment");Re("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+it+`
`+Mt+`
`+Et)}else it!==""?jt("WebGLProgram: Program Info Log:",it):(tt===""||$==="")&&(wt=!1);wt&&(N.diagnostics={runnable:ot,programLog:it,vertexShader:{log:tt,prefix:x},fragmentShader:{log:$,prefix:_}})}a.deleteShader(F),a.deleteShader(B),O=new qo(a,w),M=HA(a,w)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(w,DA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=B,this}let i1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new s1(t),e.set(t,i)),i}}class s1{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}}function a1(r,t,e,i,a,o,c){const u=new Xp,d=new r1,f=new Set,p=[],m=new Map,g=a.logarithmicDepthBuffer;let v=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return f.add(M),M===0?"uv":`uv${M}`}function x(M,T,N,q,K){const nt=q.fog,it=K.geometry,tt=M.isMeshStandardMaterial?q.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),ot=$&&$.mapping===jo?$.image.height:null,wt=y[M.type];M.precision!==null&&(v=a.getMaxPrecision(M.precision),v!==M.precision&&jt("WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Mt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Et=Mt!==void 0?Mt.length:0;let ce=0;it.morphAttributes.position!==void 0&&(ce=1),it.morphAttributes.normal!==void 0&&(ce=2),it.morphAttributes.color!==void 0&&(ce=3);let ne,He,be,at;if(wt){const Ce=yi[wt];ne=Ce.vertexShader,He=Ce.fragmentShader}else ne=M.vertexShader,He=M.fragmentShader,d.update(M),be=d.getVertexShaderID(M),at=d.getFragmentShaderID(M);const dt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),$t=K.isInstancedMesh===!0,Bt=K.isBatchedMesh===!0,pe=!!M.map,qe=!!M.matcap,ge=!!$,ie=!!M.aoMap,ye=!!M.lightMap,re=!!M.bumpMap,Le=!!M.normalMap,z=!!M.displacementMap,Ze=!!M.emissiveMap,xe=!!M.metalnessMap,de=!!M.roughnessMap,Ut=M.anisotropy>0,P=M.clearcoat>0,E=M.dispersion>0,k=M.iridescence>0,st=M.sheen>0,ut=M.transmission>0,et=Ut&&!!M.anisotropyMap,zt=P&&!!M.clearcoatMap,gt=P&&!!M.clearcoatNormalMap,Ft=P&&!!M.clearcoatRoughnessMap,Wt=k&&!!M.iridescenceMap,pt=k&&!!M.iridescenceThicknessMap,vt=st&&!!M.sheenColorMap,It=st&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,xt=!!M.specularColorMap,se=!!M.specularIntensityMap,H=ut&&!!M.transmissionMap,Rt=ut&&!!M.thicknessMap,_t=!!M.gradientMap,Ct=!!M.alphaMap,mt=M.alphaTest>0,ht=!!M.alphaHash,St=!!M.extensions;let Jt=wi;M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=r.toneMapping);const Fe={shaderID:wt,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:He,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:Bt,batchingColor:Bt&&K._colorsTexture!==null,instancing:$t,instancingColor:$t&&K.instanceColor!==null,instancingMorph:$t&&K.morphTexture!==null,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Cs,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:qe,envMap:ge,envMapMode:ge&&$.mapping,envMapCubeUVHeight:ot,aoMap:ie,lightMap:ye,bumpMap:re,normalMap:Le,displacementMap:z,emissiveMap:Ze,normalMapObjectSpace:Le&&M.normalMapType===zM,normalMapTangentSpace:Le&&M.normalMapType===Vp,metalnessMap:xe,roughnessMap:de,anisotropy:Ut,anisotropyMap:et,clearcoat:P,clearcoatMap:zt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ft,dispersion:E,iridescence:k,iridescenceMap:Wt,iridescenceThicknessMap:pt,sheen:st,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:Ot,specularColorMap:xt,specularIntensityMap:se,transmission:ut,transmissionMap:H,thicknessMap:Rt,gradientMap:_t,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:Ct,alphaTest:mt,alphaHash:ht,combine:M.combine,mapUv:pe&&w(M.map.channel),aoMapUv:ie&&w(M.aoMap.channel),lightMapUv:ye&&w(M.lightMap.channel),bumpMapUv:re&&w(M.bumpMap.channel),normalMapUv:Le&&w(M.normalMap.channel),displacementMapUv:z&&w(M.displacementMap.channel),emissiveMapUv:Ze&&w(M.emissiveMap.channel),metalnessMapUv:xe&&w(M.metalnessMap.channel),roughnessMapUv:de&&w(M.roughnessMap.channel),anisotropyMapUv:et&&w(M.anisotropyMap.channel),clearcoatMapUv:zt&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(M.sheenRoughnessMap.channel),specularMapUv:Ot&&w(M.specularMap.channel),specularColorMapUv:xt&&w(M.specularColorMap.channel),specularIntensityMapUv:se&&w(M.specularIntensityMap.channel),transmissionMapUv:H&&w(M.transmissionMap.channel),thicknessMapUv:Rt&&w(M.thicknessMap.channel),alphaMapUv:Ct&&w(M.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Le||Ut),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!it.attributes.uv&&(pe||Ct),fog:!!nt,useFog:M.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Pt,skinning:K.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&Te.getTransfer(M.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ze&&M.emissiveMap.isVideoTexture===!0&&Te.getTransfer(M.emissiveMap.colorSpace)===Oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ti,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:St&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&M.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=f.has(1),Fe.vertexUv2s=f.has(2),Fe.vertexUv3s=f.has(3),f.clear(),Fe}function _(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)T.push(N),T.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(L(T,M),I(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function L(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function I(M,T){u.disableAll(),T.instancing&&u.enable(0),T.instancingColor&&u.enable(1),T.instancingMorph&&u.enable(2),T.matcap&&u.enable(3),T.envMap&&u.enable(4),T.normalMapObjectSpace&&u.enable(5),T.normalMapTangentSpace&&u.enable(6),T.clearcoat&&u.enable(7),T.iridescence&&u.enable(8),T.alphaTest&&u.enable(9),T.vertexColors&&u.enable(10),T.vertexAlphas&&u.enable(11),T.vertexUv1s&&u.enable(12),T.vertexUv2s&&u.enable(13),T.vertexUv3s&&u.enable(14),T.vertexTangents&&u.enable(15),T.anisotropy&&u.enable(16),T.alphaHash&&u.enable(17),T.batching&&u.enable(18),T.dispersion&&u.enable(19),T.batchingColor&&u.enable(20),T.gradientMap&&u.enable(21),M.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reversedDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),M.push(u.mask)}function D(M){const T=y[M.type];let N;if(T){const q=yi[T];N=pE.clone(q.uniforms)}else N=M.uniforms;return N}function F(M,T){let N=m.get(T);return N!==void 0?++N.usedTimes:(N=new n1(r,T,M,o),p.push(N),m.set(T,N)),N}function B(M){if(--M.usedTimes===0){const T=p.indexOf(M);p[T]=p[p.length-1],p.pop(),m.delete(M.cacheKey),M.destroy()}}function C(M){d.remove(M)}function O(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:C,programs:p,dispose:O}}function o1(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,d){r.get(c)[u]=d}function o(){r=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:o}}function l1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function xp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function vp(){const r=[];let t=0;const e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function c(m,g,v,y,w,x){let _=r[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:y,renderOrder:m.renderOrder,z:w,group:x},r[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=y,_.renderOrder=m.renderOrder,_.z=w,_.group=x),t++,_}function u(m,g,v,y,w,x){const _=c(m,g,v,y,w,x);v.transmission>0?i.push(_):v.transparent===!0?a.push(_):e.push(_)}function d(m,g,v,y,w,x){const _=c(m,g,v,y,w,x);v.transmission>0?i.unshift(_):v.transparent===!0?a.unshift(_):e.unshift(_)}function f(m,g){e.length>1&&e.sort(m||l1),i.length>1&&i.sort(g||xp),a.length>1&&a.sort(g||xp)}function p(){for(let m=t,g=r.length;m<g;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:u,unshift:d,finish:p,sort:f}}function c1(){let r=new WeakMap;function t(i,a){const o=r.get(i);let c;return o===void 0?(c=new vp,r.set(i,[c])):a>=o.length?(c=new vp,o.push(c)):c=o[a],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function u1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Ee};break;case"SpotLight":e={position:new V,direction:new V,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":e={color:new Ee,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function h1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let f1=0;function d1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function p1(r){const t=new u1,e=h1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const a=new V,o=new Ke,c=new Ke;function u(f){let p=0,m=0,g=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let v=0,y=0,w=0,x=0,_=0,L=0,I=0,D=0,F=0,B=0,C=0;f.sort(d1);for(let M=0,T=f.length;M<T;M++){const N=f[M],q=N.color,K=N.intensity,nt=N.distance;let it=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Rs?it=N.shadow.map.texture:it=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=q.r*K,m+=q.g*K,g+=q.b*K;else if(N.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(N.sh.coefficients[tt],K);C++}else if(N.isDirectionalLight){const tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.directionalShadow[v]=ot,i.directionalShadowMap[v]=it,i.directionalShadowMatrix[v]=N.shadow.matrix,L++}i.directional[v]=tt,v++}else if(N.isSpotLight){const tt=t.get(N);tt.position.setFromMatrixPosition(N.matrixWorld),tt.color.copy(q).multiplyScalar(K),tt.distance=nt,tt.coneCos=Math.cos(N.angle),tt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),tt.decay=N.decay,i.spot[w]=tt;const $=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,$.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[w]=$.matrix,N.castShadow){const ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.spotShadow[w]=ot,i.spotShadowMap[w]=it,D++}w++}else if(N.isRectAreaLight){const tt=t.get(N);tt.color.copy(q).multiplyScalar(K),tt.halfWidth.set(N.width*.5,0,0),tt.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=tt,x++}else if(N.isPointLight){const tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),tt.distance=N.distance,tt.decay=N.decay,N.castShadow){const $=N.shadow,ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,ot.shadowCameraNear=$.camera.near,ot.shadowCameraFar=$.camera.far,i.pointShadow[y]=ot,i.pointShadowMap[y]=it,i.pointShadowMatrix[y]=N.shadow.matrix,I++}i.point[y]=tt,y++}else if(N.isHemisphereLight){const tt=t.get(N);tt.skyColor.copy(N.color).multiplyScalar(K),tt.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[_]=tt,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=g;const O=i.hash;(O.directionalLength!==v||O.pointLength!==y||O.spotLength!==w||O.rectAreaLength!==x||O.hemiLength!==_||O.numDirectionalShadows!==L||O.numPointShadows!==I||O.numSpotShadows!==D||O.numSpotMaps!==F||O.numLightProbes!==C)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=x,i.point.length=y,i.hemi.length=_,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=D+F-B,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=C,O.directionalLength=v,O.pointLength=y,O.spotLength=w,O.rectAreaLength=x,O.hemiLength=_,O.numDirectionalShadows=L,O.numPointShadows=I,O.numSpotShadows=D,O.numSpotMaps=F,O.numLightProbes=C,i.version=f1++)}function d(f,p){let m=0,g=0,v=0,y=0,w=0;const x=p.matrixWorldInverse;for(let _=0,L=f.length;_<L;_++){const I=f[_];if(I.isDirectionalLight){const D=i.directional[m];D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(x),m++}else if(I.isSpotLight){const D=i.spot[v];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(x),v++}else if(I.isRectAreaLight){const D=i.rectArea[y];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(x),c.identity(),o.copy(I.matrixWorld),o.premultiply(x),c.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),y++}else if(I.isPointLight){const D=i.point[g];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(x),g++}else if(I.isHemisphereLight){const D=i.hemi[w];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(x),w++}}}return{setup:u,setupView:d,state:i}}function Sp(r){const t=new p1(r),e=[],i=[];function a(p){f.camera=p,e.length=0,i.length=0}function o(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function d(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function m1(r){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new Sp(r),t.set(a,[u])):o>=c.length?(u=new Sp(r),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`,x1=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],v1=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Mp=new Ke,la=new V,Yc=new V;function S1(r,t,e){let i=new nh;const a=new ee,o=new ee,c=new Je,u=new wE,d=new RE,f={},p=e.maxTextureSize,m={[Sr]:Dn,[Dn]:Sr,[Ti]:Ti},g=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:_1,fragmentShader:g1}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const y=new zn;y.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Bn(y,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let _=this.type;this.render=function(B,C,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;B.type===_M&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Go);const M=r.getRenderTarget(),T=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),q=r.state;q.setBlending($i),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=_!==this.type;K&&C.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(it=>it.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,it=B.length;nt<it;nt++){const tt=B[nt],$=tt.shadow;if($===void 0){jt("WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ot=$.getFrameExtents();if(a.multiply(ot),o.copy($.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/ot.x),a.x=o.x*ot.x,$.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/ot.y),a.y=o.y*ot.y,$.mapSize.y=o.y)),$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ca){if(tt.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ri(a.x,a.y,{format:Rs,type:ji,minFilter:yn,magFilter:yn,generateMipmaps:!1}),$.map.texture.name=tt.name+".shadowMap",$.map.depthTexture=new va(a.x,a.y,bi),$.map.depthTexture.name=tt.name+".shadowMapDepth",$.map.depthTexture.format=Qi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n}else{tt.isPointLight?($.map=new jp(a.x),$.map.depthTexture=new TE(a.x,Pi)):($.map=new Ri(a.x,a.y),$.map.depthTexture=new va(a.x,a.y,Pi)),$.map.depthTexture.name=tt.name+".shadowMap",$.map.depthTexture.format=Qi;const Mt=r.state.buffers.depth.getReversed();this.type===Go?($.map.depthTexture.compareFunction=Mt?Qu:ju,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n)}$.camera.updateProjectionMatrix()}const wt=$.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<wt;Mt++){if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget($.map),r.clear());const Et=$.getViewport(Mt);c.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),q.viewport(c)}if(tt.isPointLight){const Et=$.camera,ce=$.matrix,ne=tt.distance||Et.far;ne!==Et.far&&(Et.far=ne,Et.updateProjectionMatrix()),la.setFromMatrixPosition(tt.matrixWorld),Et.position.copy(la),Yc.copy(Et.position),Yc.add(x1[Mt]),Et.up.copy(v1[Mt]),Et.lookAt(Yc),Et.updateMatrixWorld(),ce.makeTranslation(-la.x,-la.y,-la.z),Mp.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Mp,Et.coordinateSystem,Et.reversedDepth)}else $.updateMatrices(tt);i=$.getFrustum(),D(C,O,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===ca&&L($,O),$.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(M,T,N)};function L(B,C){const O=t.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,v.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ri(a.x,a.y,{format:Rs,type:ji})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(C,null,O,g,w,null),v.uniforms.shadow_pass.value=B.mapPass.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(C,null,O,v,w,null)}function I(B,C,O,M){let T=null;const N=O.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)T=N;else if(T=O.isPointLight===!0?d:u,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const q=T.uuid,K=C.uuid;let nt=f[q];nt===void 0&&(nt={},f[q]=nt);let it=nt[K];it===void 0&&(it=T.clone(),nt[K]=it,C.addEventListener("dispose",F)),T=it}if(T.visible=C.visible,T.wireframe=C.wireframe,M===ca?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:m[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=r.properties.get(T);q.light=O}return T}function D(B,C,O,M,T){if(B.visible===!1)return;if(B.layers.test(C.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===ca)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,B.matrixWorld);const K=t.update(B),nt=B.material;if(Array.isArray(nt)){const it=K.groups;for(let tt=0,$=it.length;tt<$;tt++){const ot=it[tt],wt=nt[ot.materialIndex];if(wt&&wt.visible){const Mt=I(B,wt,M,T);B.onBeforeShadow(r,B,C,O,K,Mt,ot),r.renderBufferDirect(O,null,K,Mt,B,ot),B.onAfterShadow(r,B,C,O,K,Mt,ot)}}}else if(nt.visible){const it=I(B,nt,M,T);B.onBeforeShadow(r,B,C,O,K,it,null),r.renderBufferDirect(O,null,K,it,B,null),B.onAfterShadow(r,B,C,O,K,it,null)}}const q=B.children;for(let K=0,nt=q.length;K<nt;K++)D(q[K],C,O,M,T)}function F(B){B.target.removeEventListener("dispose",F);for(const O in f){const M=f[O],T=B.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const M1={[jc]:Qc,[tu]:iu,[eu]:ru,[As]:nu,[Qc]:jc,[iu]:tu,[ru]:eu,[nu]:As};function E1(r,t){function e(){let H=!1;const Rt=new Je;let _t=null;const Ct=new Je(0,0,0,0);return{setMask:function(mt){_t!==mt&&!H&&(r.colorMask(mt,mt,mt,mt),_t=mt)},setLocked:function(mt){H=mt},setClear:function(mt,ht,St,Jt,Fe){Fe===!0&&(mt*=Jt,ht*=Jt,St*=Jt),Rt.set(mt,ht,St,Jt),Ct.equals(Rt)===!1&&(r.clearColor(mt,ht,St,Jt),Ct.copy(Rt))},reset:function(){H=!1,_t=null,Ct.set(-1,0,0,0)}}}function i(){let H=!1,Rt=!1,_t=null,Ct=null,mt=null;return{setReversed:function(ht){if(Rt!==ht){const St=t.get("EXT_clip_control");ht?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),Rt=ht;const Jt=mt;mt=null,this.setClear(Jt)}},getReversed:function(){return Rt},setTest:function(ht){ht?dt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(ht){_t!==ht&&!H&&(r.depthMask(ht),_t=ht)},setFunc:function(ht){if(Rt&&(ht=M1[ht]),Ct!==ht){switch(ht){case jc:r.depthFunc(r.NEVER);break;case Qc:r.depthFunc(r.ALWAYS);break;case tu:r.depthFunc(r.LESS);break;case As:r.depthFunc(r.LEQUAL);break;case eu:r.depthFunc(r.EQUAL);break;case nu:r.depthFunc(r.GEQUAL);break;case iu:r.depthFunc(r.GREATER);break;case ru:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=ht}},setLocked:function(ht){H=ht},setClear:function(ht){mt!==ht&&(Rt&&(ht=1-ht),r.clearDepth(ht),mt=ht)},reset:function(){H=!1,_t=null,Ct=null,mt=null,Rt=!1}}}function a(){let H=!1,Rt=null,_t=null,Ct=null,mt=null,ht=null,St=null,Jt=null,Fe=null;return{setTest:function(Ce){H||(Ce?dt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Ce){Rt!==Ce&&!H&&(r.stencilMask(Ce),Rt=Ce)},setFunc:function(Ce,Zn,ai){(_t!==Ce||Ct!==Zn||mt!==ai)&&(r.stencilFunc(Ce,Zn,ai),_t=Ce,Ct=Zn,mt=ai)},setOp:function(Ce,Zn,ai){(ht!==Ce||St!==Zn||Jt!==ai)&&(r.stencilOp(Ce,Zn,ai),ht=Ce,St=Zn,Jt=ai)},setLocked:function(Ce){H=Ce},setClear:function(Ce){Fe!==Ce&&(r.clearStencil(Ce),Fe=Ce)},reset:function(){H=!1,Rt=null,_t=null,Ct=null,mt=null,ht=null,St=null,Jt=null,Fe=null}}}const o=new e,c=new i,u=new a,d=new WeakMap,f=new WeakMap;let p={},m={},g=new WeakMap,v=[],y=null,w=!1,x=null,_=null,L=null,I=null,D=null,F=null,B=null,C=new Ee(0,0,0),O=0,M=!1,T=null,N=null,q=null,K=null,nt=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,$=0;const ot=r.getParameter(r.VERSION);ot.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ot)[1]),tt=$>=1):ot.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),tt=$>=2);let wt=null,Mt={};const Et=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ne=new Je().fromArray(Et),He=new Je().fromArray(ce);function be(H,Rt,_t,Ct){const mt=new Uint8Array(4),ht=r.createTexture();r.bindTexture(H,ht),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<_t;St++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(Rt+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return ht}const at={};at[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),dt(r.DEPTH_TEST),c.setFunc(As),re(!1),Le(Md),dt(r.CULL_FACE),ie($i);function dt(H){p[H]!==!0&&(r.enable(H),p[H]=!0)}function Pt(H){p[H]!==!1&&(r.disable(H),p[H]=!1)}function $t(H,Rt){return m[H]!==Rt?(r.bindFramebuffer(H,Rt),m[H]=Rt,H===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Rt),H===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Bt(H,Rt){let _t=v,Ct=!1;if(H){_t=g.get(Rt),_t===void 0&&(_t=[],g.set(Rt,_t));const mt=H.textures;if(_t.length!==mt.length||_t[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,St=mt.length;ht<St;ht++)_t[ht]=r.COLOR_ATTACHMENT0+ht;_t.length=mt.length,Ct=!0}}else _t[0]!==r.BACK&&(_t[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(_t)}function pe(H){return y!==H?(r.useProgram(H),y=H,!0):!1}const qe={[Or]:r.FUNC_ADD,[xM]:r.FUNC_SUBTRACT,[vM]:r.FUNC_REVERSE_SUBTRACT};qe[SM]=r.MIN,qe[MM]=r.MAX;const ge={[EM]:r.ZERO,[yM]:r.ONE,[TM]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[PM]:r.SRC_ALPHA_SATURATE,[RM]:r.DST_COLOR,[AM]:r.DST_ALPHA,[bM]:r.ONE_MINUS_SRC_COLOR,[Jc]:r.ONE_MINUS_SRC_ALPHA,[CM]:r.ONE_MINUS_DST_COLOR,[wM]:r.ONE_MINUS_DST_ALPHA,[DM]:r.CONSTANT_COLOR,[LM]:r.ONE_MINUS_CONSTANT_COLOR,[IM]:r.CONSTANT_ALPHA,[UM]:r.ONE_MINUS_CONSTANT_ALPHA};function ie(H,Rt,_t,Ct,mt,ht,St,Jt,Fe,Ce){if(H===$i){w===!0&&(Pt(r.BLEND),w=!1);return}if(w===!1&&(dt(r.BLEND),w=!0),H!==gM){if(H!==x||Ce!==M){if((_!==Or||D!==Or)&&(r.blendEquation(r.FUNC_ADD),_=Or,D=Or),Ce)switch(H){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ed:r.blendFunc(r.ONE,r.ONE);break;case yd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Td:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ed:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case yd:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Td:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",H);break}L=null,I=null,F=null,B=null,C.set(0,0,0),O=0,x=H,M=Ce}return}mt=mt||Rt,ht=ht||_t,St=St||Ct,(Rt!==_||mt!==D)&&(r.blendEquationSeparate(qe[Rt],qe[mt]),_=Rt,D=mt),(_t!==L||Ct!==I||ht!==F||St!==B)&&(r.blendFuncSeparate(ge[_t],ge[Ct],ge[ht],ge[St]),L=_t,I=Ct,F=ht,B=St),(Jt.equals(C)===!1||Fe!==O)&&(r.blendColor(Jt.r,Jt.g,Jt.b,Fe),C.copy(Jt),O=Fe),x=H,M=!1}function ye(H,Rt){H.side===Ti?Pt(r.CULL_FACE):dt(r.CULL_FACE);let _t=H.side===Dn;Rt&&(_t=!_t),re(_t),H.blending===Ts&&H.transparent===!1?ie($i):ie(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ct=H.stencilWrite;u.setTest(Ct),Ct&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(H){T!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),T=H)}function Le(H){H!==pM?(dt(r.CULL_FACE),H!==N&&(H===Md?r.cullFace(r.BACK):H===mM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),N=H}function z(H){H!==q&&(tt&&r.lineWidth(H),q=H)}function Ze(H,Rt,_t){H?(dt(r.POLYGON_OFFSET_FILL),(K!==Rt||nt!==_t)&&(r.polygonOffset(Rt,_t),K=Rt,nt=_t)):Pt(r.POLYGON_OFFSET_FILL)}function xe(H){H?dt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function de(H){H===void 0&&(H=r.TEXTURE0+it-1),wt!==H&&(r.activeTexture(H),wt=H)}function Ut(H,Rt,_t){_t===void 0&&(wt===null?_t=r.TEXTURE0+it-1:_t=wt);let Ct=Mt[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},Mt[_t]=Ct),(Ct.type!==H||Ct.texture!==Rt)&&(wt!==_t&&(r.activeTexture(_t),wt=_t),r.bindTexture(H,Rt||at[H]),Ct.type=H,Ct.texture=Rt)}function P(){const H=Mt[wt];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function st(){try{r.texSubImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function ut(){try{r.texSubImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function et(){try{r.compressedTexSubImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function zt(){try{r.compressedTexSubImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function gt(){try{r.texStorage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function Ft(){try{r.texStorage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function Wt(){try{r.texImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function pt(){try{r.texImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function vt(H){ne.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function It(H){He.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function Ot(H,Rt){let _t=f.get(Rt);_t===void 0&&(_t=new WeakMap,f.set(Rt,_t));let Ct=_t.get(H);Ct===void 0&&(Ct=r.getUniformBlockIndex(Rt,H.name),_t.set(H,Ct))}function xt(H,Rt){const Ct=f.get(Rt).get(H);d.get(Rt)!==Ct&&(r.uniformBlockBinding(Rt,Ct,H.__bindingPointIndex),d.set(Rt,Ct))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},wt=null,Mt={},m={},g=new WeakMap,v=[],y=null,w=!1,x=null,_=null,L=null,I=null,D=null,F=null,B=null,C=new Ee(0,0,0),O=0,M=!1,T=null,N=null,q=null,K=null,nt=null,ne.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:dt,disable:Pt,bindFramebuffer:$t,drawBuffers:Bt,useProgram:pe,setBlending:ie,setMaterial:ye,setFlipSided:re,setCullFace:Le,setLineWidth:z,setPolygonOffset:Ze,setScissorTest:xe,activeTexture:de,bindTexture:Ut,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:Wt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:xt,texStorage2D:gt,texStorage3D:Ft,texSubImage2D:st,texSubImage3D:ut,compressedTexSubImage2D:et,compressedTexSubImage3D:zt,scissor:vt,viewport:It,reset:se}}function y1(r,t,e,i,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ee,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,E){return v?new OffscreenCanvas(P,E):ga("canvas")}function w(P,E,k){let st=1;const ut=Ut(P);if((ut.width>k||ut.height>k)&&(st=k/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(st*ut.width),zt=Math.floor(st*ut.height);m===void 0&&(m=y(et,zt));const gt=E?y(et,zt):m;return gt.width=et,gt.height=zt,gt.getContext("2d").drawImage(P,0,0,et,zt),jt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+et+"x"+zt+")."),gt}else return"data"in P&&jt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(P,E,k,st,ut=!1){if(P!==null){if(r[P]!==void 0)return r[P];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===r.RED&&(k===r.FLOAT&&(et=r.R32F),k===r.HALF_FLOAT&&(et=r.R16F),k===r.UNSIGNED_BYTE&&(et=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.R8UI),k===r.UNSIGNED_SHORT&&(et=r.R16UI),k===r.UNSIGNED_INT&&(et=r.R32UI),k===r.BYTE&&(et=r.R8I),k===r.SHORT&&(et=r.R16I),k===r.INT&&(et=r.R32I)),E===r.RG&&(k===r.FLOAT&&(et=r.RG32F),k===r.HALF_FLOAT&&(et=r.RG16F),k===r.UNSIGNED_BYTE&&(et=r.RG8)),E===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RG8UI),k===r.UNSIGNED_SHORT&&(et=r.RG16UI),k===r.UNSIGNED_INT&&(et=r.RG32UI),k===r.BYTE&&(et=r.RG8I),k===r.SHORT&&(et=r.RG16I),k===r.INT&&(et=r.RG32I)),E===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RGB8UI),k===r.UNSIGNED_SHORT&&(et=r.RGB16UI),k===r.UNSIGNED_INT&&(et=r.RGB32UI),k===r.BYTE&&(et=r.RGB8I),k===r.SHORT&&(et=r.RGB16I),k===r.INT&&(et=r.RGB32I)),E===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),k===r.UNSIGNED_INT&&(et=r.RGBA32UI),k===r.BYTE&&(et=r.RGBA8I),k===r.SHORT&&(et=r.RGBA16I),k===r.INT&&(et=r.RGBA32I)),E===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(et=r.R11F_G11F_B10F)),E===r.RGBA){const zt=ut?Yo:Te.getTransfer(st);k===r.FLOAT&&(et=r.RGBA32F),k===r.HALF_FLOAT&&(et=r.RGBA16F),k===r.UNSIGNED_BYTE&&(et=zt===Oe?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function D(P,E){let k;return P?E===null||E===Pi||E===_a?k=r.DEPTH24_STENCIL8:E===bi?k=r.DEPTH32F_STENCIL8:E===ma&&(k=r.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===_a?k=r.DEPTH_COMPONENT24:E===bi?k=r.DEPTH_COMPONENT32F:E===ma&&(k=r.DEPTH_COMPONENT16),k}function F(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function B(P){const E=P.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&p.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),T(E)}function O(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,st=g.get(k);if(st){const ut=st[E.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&M(P),Object.keys(st).length===0&&g.delete(k)}i.remove(P)}function M(P){const E=i.get(P);r.deleteTexture(E.__webglTexture);const k=P.source,st=g.get(k);delete st[E.__cacheKey],c.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ut=0;ut<E.__webglFramebuffer[st].length;ut++)r.deleteFramebuffer(E.__webglFramebuffer[st][ut]);else r.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)r.deleteFramebuffer(E.__webglFramebuffer[st]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let st=0,ut=k.length;st<ut;st++){const et=i.get(k[st]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),c.memory.textures--),i.remove(k[st])}i.remove(P)}let N=0;function q(){N=0}function K(){const P=N;return P>=a.maxTextures&&jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),N+=1,P}function nt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function it(P,E){const k=i.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){const st=P.image;if(st===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,P,E);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function tt(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){at(k,P,E);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function $(P,E){const k=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){at(k,P,E);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function ot(P,E){const k=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){dt(k,P,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const wt={[ou]:r.REPEAT,[Ki]:r.CLAMP_TO_EDGE,[lu]:r.MIRRORED_REPEAT},Mt={[_n]:r.NEAREST,[OM]:r.NEAREST_MIPMAP_NEAREST,[mo]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},Et={[GM]:r.NEVER,[XM]:r.ALWAYS,[HM]:r.LESS,[ju]:r.LEQUAL,[VM]:r.EQUAL,[Qu]:r.GEQUAL,[kM]:r.GREATER,[WM]:r.NOTEQUAL};function ce(P,E){if(E.type===bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===pc||E.magFilter===mo||E.magFilter===zr||E.minFilter===yn||E.minFilter===pc||E.minFilter===mo||E.minFilter===zr)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,wt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,wt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,wt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Mt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==mo&&E.minFilter!==zr||E.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",B));const st=E.source;let ut=g.get(st);ut===void 0&&(ut={},g.set(st,ut));const et=nt(E);if(et!==P.__cacheKey){ut[et]===void 0&&(ut[et]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,k=!0),ut[et].usedTimes++;const zt=ut[P.__cacheKey];zt!==void 0&&(ut[P.__cacheKey].usedTimes--,zt.usedTimes===0&&M(E)),P.__cacheKey=et,P.__webglTexture=ut[et].texture}return k}function He(P,E,k){return Math.floor(Math.floor(P/k)/E)}function be(P,E,k,st){const et=P.updateRanges;if(et.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,k,st,E.data);else{et.sort((pt,vt)=>pt.start-vt.start);let zt=0;for(let pt=1;pt<et.length;pt++){const vt=et[zt],It=et[pt],Ot=vt.start+vt.count,xt=He(It.start,E.width,4),se=He(vt.start,E.width,4);It.start<=Ot+1&&xt===se&&He(It.start+It.count-1,E.width,4)===xt?vt.count=Math.max(vt.count,It.start+It.count-vt.start):(++zt,et[zt]=It)}et.length=zt+1;const gt=r.getParameter(r.UNPACK_ROW_LENGTH),Ft=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let pt=0,vt=et.length;pt<vt;pt++){const It=et[pt],Ot=Math.floor(It.start/4),xt=Math.ceil(It.count/4),se=Ot%E.width,H=Math.floor(Ot/E.width),Rt=xt,_t=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,se),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),e.texSubImage2D(r.TEXTURE_2D,0,se,H,Rt,_t,k,st,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,gt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function at(P,E,k){let st=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=r.TEXTURE_3D);const ut=ne(P,E),et=E.source;e.bindTexture(st,P.__webglTexture,r.TEXTURE0+k);const zt=i.get(et);if(et.version!==zt.__version||ut===!0){e.activeTexture(r.TEXTURE0+k);const gt=Te.getPrimaries(Te.workingColorSpace),Ft=E.colorSpace===xr?null:Te.getPrimaries(E.colorSpace),Wt=E.colorSpace===xr||gt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let pt=w(E.image,!1,a.maxTextureSize);pt=de(E,pt);const vt=o.convert(E.format,E.colorSpace),It=o.convert(E.type);let Ot=I(E.internalFormat,vt,It,E.colorSpace,E.isVideoTexture);ce(st,E);let xt;const se=E.mipmaps,H=E.isVideoTexture!==!0,Rt=zt.__version===void 0||ut===!0,_t=et.dataReady,Ct=F(E,pt);if(E.isDepthTexture)Ot=D(E.format===Gr,E.type),Rt&&(H?e.texStorage2D(r.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Ot,pt.width,pt.height,0,vt,It,null));else if(E.isDataTexture)if(se.length>0){H&&Rt&&e.texStorage2D(r.TEXTURE_2D,Ct,Ot,se[0].width,se[0].height);for(let mt=0,ht=se.length;mt<ht;mt++)xt=se[mt],H?_t&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(r.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,vt,It,xt.data);E.generateMipmaps=!1}else H?(Rt&&e.texStorage2D(r.TEXTURE_2D,Ct,Ot,pt.width,pt.height),_t&&be(E,pt,vt,It)):e.texImage2D(r.TEXTURE_2D,0,Ot,pt.width,pt.height,0,vt,It,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Ot,se[0].width,se[0].height,pt.depth);for(let mt=0,ht=se.length;mt<ht;mt++)if(xt=se[mt],E.format!==_i)if(vt!==null)if(H){if(_t)if(E.layerUpdates.size>0){const St=jd(xt.width,xt.height,E.format,E.type);for(const Jt of E.layerUpdates){const Fe=xt.data.subarray(Jt*St/xt.data.BYTES_PER_ELEMENT,(Jt+1)*St/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Jt,xt.width,xt.height,1,vt,Fe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,pt.depth,vt,xt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Ot,xt.width,xt.height,pt.depth,0,xt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_t&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,pt.depth,vt,It,xt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Ot,xt.width,xt.height,pt.depth,0,vt,It,xt.data)}else{H&&Rt&&e.texStorage2D(r.TEXTURE_2D,Ct,Ot,se[0].width,se[0].height);for(let mt=0,ht=se.length;mt<ht;mt++)xt=se[mt],E.format!==_i?vt!==null?H?_t&&e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,xt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_t&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(r.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,vt,It,xt.data)}else if(E.isDataArrayTexture)if(H){if(Rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Ot,pt.width,pt.height,pt.depth),_t)if(E.layerUpdates.size>0){const mt=jd(pt.width,pt.height,E.format,E.type);for(const ht of E.layerUpdates){const St=pt.data.subarray(ht*mt/pt.data.BYTES_PER_ELEMENT,(ht+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,vt,It,St)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,vt,It,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,vt,It,pt.data);else if(E.isData3DTexture)H?(Rt&&e.texStorage3D(r.TEXTURE_3D,Ct,Ot,pt.width,pt.height,pt.depth),_t&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,vt,It,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,vt,It,pt.data);else if(E.isFramebufferTexture){if(Rt)if(H)e.texStorage2D(r.TEXTURE_2D,Ct,Ot,pt.width,pt.height);else{let mt=pt.width,ht=pt.height;for(let St=0;St<Ct;St++)e.texImage2D(r.TEXTURE_2D,St,Ot,mt,ht,0,vt,It,null),mt>>=1,ht>>=1}}else if(se.length>0){if(H&&Rt){const mt=Ut(se[0]);e.texStorage2D(r.TEXTURE_2D,Ct,Ot,mt.width,mt.height)}for(let mt=0,ht=se.length;mt<ht;mt++)xt=se[mt],H?_t&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,vt,It,xt):e.texImage2D(r.TEXTURE_2D,mt,Ot,vt,It,xt);E.generateMipmaps=!1}else if(H){if(Rt){const mt=Ut(pt);e.texStorage2D(r.TEXTURE_2D,Ct,Ot,mt.width,mt.height)}_t&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,It,pt)}else e.texImage2D(r.TEXTURE_2D,0,Ot,vt,It,pt);x(E)&&_(st),zt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function dt(P,E,k){if(E.image.length!==6)return;const st=ne(P,E),ut=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);const et=i.get(ut);if(ut.version!==et.__version||st===!0){e.activeTexture(r.TEXTURE0+k);const zt=Te.getPrimaries(Te.workingColorSpace),gt=E.colorSpace===xr?null:Te.getPrimaries(E.colorSpace),Ft=E.colorSpace===xr||zt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,pt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let ht=0;ht<6;ht++)!Wt&&!pt?vt[ht]=w(E.image[ht],!0,a.maxCubemapSize):vt[ht]=pt?E.image[ht].image:E.image[ht],vt[ht]=de(E,vt[ht]);const It=vt[0],Ot=o.convert(E.format,E.colorSpace),xt=o.convert(E.type),se=I(E.internalFormat,Ot,xt,E.colorSpace),H=E.isVideoTexture!==!0,Rt=et.__version===void 0||st===!0,_t=ut.dataReady;let Ct=F(E,It);ce(r.TEXTURE_CUBE_MAP,E);let mt;if(Wt){H&&Rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,se,It.width,It.height);for(let ht=0;ht<6;ht++){mt=vt[ht].mipmaps;for(let St=0;St<mt.length;St++){const Jt=mt[St];E.format!==_i?Ot!==null?H?_t&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St,0,0,Jt.width,Jt.height,Ot,Jt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St,se,Jt.width,Jt.height,0,Jt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St,0,0,Jt.width,Jt.height,Ot,xt,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St,se,Jt.width,Jt.height,0,Ot,xt,Jt.data)}}}else{if(mt=E.mipmaps,H&&Rt){mt.length>0&&Ct++;const ht=Ut(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,se,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){H?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,vt[ht].width,vt[ht].height,Ot,xt,vt[ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,vt[ht].width,vt[ht].height,0,Ot,xt,vt[ht].data);for(let St=0;St<mt.length;St++){const Fe=mt[St].image[ht].image;H?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St+1,0,0,Fe.width,Fe.height,Ot,xt,Fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St+1,se,Fe.width,Fe.height,0,Ot,xt,Fe.data)}}else{H?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,xt,vt[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,se,Ot,xt,vt[ht]);for(let St=0;St<mt.length;St++){const Jt=mt[St];H?_t&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St+1,0,0,Ot,xt,Jt.image[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,St+1,se,Ot,xt,Jt.image[ht])}}}x(E)&&_(r.TEXTURE_CUBE_MAP),et.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Pt(P,E,k,st,ut,et){const zt=o.convert(k.format,k.colorSpace),gt=o.convert(k.type),Ft=I(k.internalFormat,zt,gt,k.colorSpace),Wt=i.get(E),pt=i.get(k);if(pt.__renderTarget=E,!Wt.__hasExternalTextures){const vt=Math.max(1,E.width>>et),It=Math.max(1,E.height>>et);ut===r.TEXTURE_3D||ut===r.TEXTURE_2D_ARRAY?e.texImage3D(ut,et,Ft,vt,It,E.depth,0,zt,gt,null):e.texImage2D(ut,et,Ft,vt,It,0,zt,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Ze(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,ut,pt.__webglTexture,0,z(E)):(ut===r.TEXTURE_2D||ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,ut,pt.__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(P,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const st=E.depthTexture,ut=st&&st.isDepthTexture?st.type:null,et=D(E.stencilBuffer,ut),zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(E),et,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(E),et,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,et,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,zt,r.RENDERBUFFER,P)}else{const st=E.textures;for(let ut=0;ut<st.length;ut++){const et=st[ut],zt=o.convert(et.format,et.colorSpace),gt=o.convert(et.type),Ft=I(et.internalFormat,zt,gt,et.colorSpace);Ze(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,z(E),Ft,E.width,E.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,z(E),Ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ft,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(P,E,k){const st=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=i.get(E.depthTexture);if(ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ut.__webglTexture===void 0){ut.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),ce(r.TEXTURE_CUBE_MAP,E.depthTexture);const Wt=o.convert(E.depthTexture.format),pt=o.convert(E.depthTexture.type);let vt;E.depthTexture.format===Qi?vt=r.DEPTH_COMPONENT24:E.depthTexture.format===Gr&&(vt=r.DEPTH24_STENCIL8);for(let It=0;It<6;It++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,E.width,E.height,0,Wt,pt,null)}}else it(E.depthTexture,0);const et=ut.__webglTexture,zt=z(E),gt=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,Ft=E.depthTexture.format===Gr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qi)Ze(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,gt,et,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,gt,et,0);else if(E.depthTexture.format===Gr)Ze(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,gt,et,0,zt):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,gt,et,0);else throw new Error("Unknown depthTexture format")}function pe(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const st=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ut=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),E.__depthDisposeCallback=ut}E.__boundDepthTexture=st}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(k)for(let st=0;st<6;st++)Bt(E.__webglFramebuffer[st],P,st);else{const st=P.texture.mipmaps;st&&st.length>0?Bt(E.__webglFramebuffer[0],P,0):Bt(E.__webglFramebuffer,P,0)}else if(k){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=r.createRenderbuffer(),$t(E.__webglDepthbuffer[st],P,!1);else{const ut=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,et)}}else{const st=P.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),$t(E.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,et)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,E,k){const st=i.get(P);E!==void 0&&Pt(st.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&pe(P)}function ge(P){const E=P.texture,k=i.get(P),st=i.get(E);P.addEventListener("dispose",C);const ut=P.textures,et=P.isWebGLCubeRenderTarget===!0,zt=ut.length>1;if(zt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=E.version,c.memory.textures++),et){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Ft=0;Ft<E.mipmaps.length;Ft++)k.__webglFramebuffer[gt][Ft]=r.createFramebuffer()}else k.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)k.__webglFramebuffer[gt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(zt)for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Wt=i.get(ut[gt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&Ze(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Ft=ut[gt];k.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const Wt=o.convert(Ft.format,Ft.colorSpace),pt=o.convert(Ft.type),vt=I(Ft.internalFormat,Wt,pt,Ft.colorSpace,P.isXRRenderTarget===!0),It=z(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,vt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),$t(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),ce(r.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)Pt(k.__webglFramebuffer[gt][Ft],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft);else Pt(k.__webglFramebuffer[gt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(E)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Wt=ut[gt],pt=i.get(Wt);let vt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,pt.__webglTexture),ce(vt,Wt),Pt(k.__webglFramebuffer,P,Wt,r.COLOR_ATTACHMENT0+gt,vt,0),x(Wt)&&_(vt)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,st.__webglTexture),ce(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)Pt(k.__webglFramebuffer[Ft],P,E,r.COLOR_ATTACHMENT0,gt,Ft);else Pt(k.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,gt,0);x(E)&&_(gt),e.unbindTexture()}P.depthBuffer&&pe(P)}function ie(P){const E=P.textures;for(let k=0,st=E.length;k<st;k++){const ut=E[k];if(x(ut)){const et=L(P),zt=i.get(ut).__webglTexture;e.bindTexture(et,zt),_(et),e.unbindTexture()}}}const ye=[],re=[];function Le(P){if(P.samples>0){if(Ze(P)===!1){const E=P.textures,k=P.width,st=P.height;let ut=r.COLOR_BUFFER_BIT;const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,zt=i.get(P),gt=E.length>1;if(gt)for(let Wt=0;Wt<E.length;Wt++)e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Ft=P.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const pt=i.get(E[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pt,0)}r.blitFramebuffer(0,0,k,st,0,0,k,st,ut,r.NEAREST),d===!0&&(ye.length=0,re.length=0,ye.push(r.COLOR_ATTACHMENT0+Wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ye.push(et),re.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Wt=0;Wt<E.length;Wt++){e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const pt=i.get(E[Wt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,pt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function z(P){return Math.min(a.maxSamples,P.samples)}function Ze(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(P){const E=c.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function de(P,E){const k=P.colorSpace,st=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Cs&&k!==xr&&(Te.getTransfer(k)===Oe?(st!==_i||ut!==Kn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",k)),E}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=it,this.setTexture2DArray=tt,this.setTexture3D=$,this.setTextureCube=ot,this.rebindTextures=qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function T1(r,t){function e(i,a=xr){let o;const c=Te.getTransfer(a);if(i===Kn)return r.UNSIGNED_BYTE;if(i===Yu)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ku)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Op)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Bp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Np)return r.BYTE;if(i===Fp)return r.SHORT;if(i===ma)return r.UNSIGNED_SHORT;if(i===qu)return r.INT;if(i===Pi)return r.UNSIGNED_INT;if(i===bi)return r.FLOAT;if(i===ji)return r.HALF_FLOAT;if(i===zp)return r.ALPHA;if(i===Gp)return r.RGB;if(i===_i)return r.RGBA;if(i===Qi)return r.DEPTH_COMPONENT;if(i===Gr)return r.DEPTH_STENCIL;if(i===Hp)return r.RED;if(i===Zu)return r.RED_INTEGER;if(i===Rs)return r.RG;if(i===$u)return r.RG_INTEGER;if(i===Ju)return r.RGBA_INTEGER;if(i===Ho||i===Vo||i===ko||i===Wo)if(c===Oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cu||i===uu||i===hu||i===fu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===du||i===pu||i===mu||i===_u||i===gu||i===xu||i===vu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===du||i===pu)return c===Oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===mu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===_u)return o.COMPRESSED_R11_EAC;if(i===gu)return o.COMPRESSED_SIGNED_R11_EAC;if(i===xu)return o.COMPRESSED_RG11_EAC;if(i===vu)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Su||i===Mu||i===Eu||i===yu||i===Tu||i===bu||i===Au||i===wu||i===Ru||i===Cu||i===Pu||i===Du||i===Lu||i===Iu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Su)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Au)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ru)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Du)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Iu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uu||i===Nu||i===Fu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Uu)return c===Oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ou||i===Bu||i===zu||i===Gu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ou)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_a?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Qp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Li({vertexShader:b1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R1 extends kr{constructor(t,e){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,f=null,p=null,m=null,g=null,v=null,y=null;const w=typeof XRWebGLBinding<"u",x=new w1,_={},L=e.getContextAttributes();let I=null,D=null;const F=[],B=[],C=new ee;let O=null;const M=new fn;M.viewport=new Je;const T=new fn;T.viewport=new Je;const N=[M,T],q=new NE;let K=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=F[at];return dt===void 0&&(dt=new Fc,F[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=F[at];return dt===void 0&&(dt=new Fc,F[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=F[at];return dt===void 0&&(dt=new Fc,F[at]=dt),dt.getHandSpace()};function it(at){const dt=B.indexOf(at.inputSource);if(dt===-1)return;const Pt=F[dt];Pt!==void 0&&(Pt.update(at.inputSource,at.frame,f||c),Pt.dispatchEvent({type:at.type,data:at.inputSource}))}function tt(){a.removeEventListener("select",it),a.removeEventListener("selectstart",it),a.removeEventListener("selectend",it),a.removeEventListener("squeeze",it),a.removeEventListener("squeezestart",it),a.removeEventListener("squeezeend",it),a.removeEventListener("end",tt),a.removeEventListener("inputsourceschange",$);for(let at=0;at<F.length;at++){const dt=B[at];dt!==null&&(B[at]=null,F[at].disconnect(dt))}K=null,nt=null,x.reset();for(const at in _)delete _[at];t.setRenderTarget(I),v=null,g=null,m=null,a=null,D=null,be.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(a,e)),m},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(at){if(a=at,a!==null){if(I=t.getRenderTarget(),a.addEventListener("select",it),a.addEventListener("selectstart",it),a.addEventListener("selectend",it),a.addEventListener("squeeze",it),a.addEventListener("squeezestart",it),a.addEventListener("squeezeend",it),a.addEventListener("end",tt),a.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,$t=null,Bt=null;L.depth&&(Bt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=L.stencil?Gr:Qi,$t=L.stencil?_a:Pi);const pe={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(pe),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Ri(g.textureWidth,g.textureHeight,{format:_i,type:Kn,depthTexture:new va(g.textureWidth,g.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Pt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(a,e,Pt),a.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new Ri(v.framebufferWidth,v.framebufferHeight,{format:_i,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await a.requestReferenceSpace(u),be.setContext(a),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(at){for(let dt=0;dt<at.removed.length;dt++){const Pt=at.removed[dt],$t=B.indexOf(Pt);$t>=0&&(B[$t]=null,F[$t].disconnect(Pt))}for(let dt=0;dt<at.added.length;dt++){const Pt=at.added[dt];let $t=B.indexOf(Pt);if($t===-1){for(let pe=0;pe<F.length;pe++)if(pe>=B.length){B.push(Pt),$t=pe;break}else if(B[pe]===null){B[pe]=Pt,$t=pe;break}if($t===-1)break}const Bt=F[$t];Bt&&Bt.connect(Pt)}}const ot=new V,wt=new V;function Mt(at,dt,Pt){ot.setFromMatrixPosition(dt.matrixWorld),wt.setFromMatrixPosition(Pt.matrixWorld);const $t=ot.distanceTo(wt),Bt=dt.projectionMatrix.elements,pe=Pt.projectionMatrix.elements,qe=Bt[14]/(Bt[10]-1),ge=Bt[14]/(Bt[10]+1),ie=(Bt[9]+1)/Bt[5],ye=(Bt[9]-1)/Bt[5],re=(Bt[8]-1)/Bt[0],Le=(pe[8]+1)/pe[0],z=qe*re,Ze=qe*Le,xe=$t/(-re+Le),de=xe*-re;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(de),at.translateZ(xe),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Bt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ut=qe+xe,P=ge+xe,E=z-de,k=Ze+($t-de),st=ie*ge/P*Ut,ut=ye*ge/P*Ut;at.projectionMatrix.makePerspective(E,k,st,ut,Ut,P),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Et(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(a===null)return;let dt=at.near,Pt=at.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),q.near=T.near=M.near=dt,q.far=T.far=M.far=Pt,(K!==q.near||nt!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,nt=q.far),q.layers.mask=at.layers.mask|6,M.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;const $t=at.parent,Bt=q.cameras;Et(q,$t);for(let pe=0;pe<Bt.length;pe++)Et(Bt[pe],$t);Bt.length===2?Mt(q,M,T):q.projectionMatrix.copy(M.projectionMatrix),ce(at,q,$t)};function ce(at,dt,Pt){Pt===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Pt.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Hu*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(at){d=at,g!==null&&(g.fixedFoveation=at),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=at)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(at){return _[at]};let ne=null;function He(at,dt){if(p=dt.getViewerPose(f||c),y=dt,p!==null){const Pt=p.views;v!==null&&(t.setRenderTargetFramebuffer(D,v.framebuffer),t.setRenderTarget(D));let $t=!1;Pt.length!==q.cameras.length&&(q.cameras.length=0,$t=!0);for(let ge=0;ge<Pt.length;ge++){const ie=Pt[ge];let ye=null;if(v!==null)ye=v.getViewport(ie);else{const Le=m.getViewSubImage(g,ie);ye=Le.viewport,ge===0&&(t.setRenderTargetTextures(D,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(D))}let re=N[ge];re===void 0&&(re=new fn,re.layers.enable(ge),re.viewport=new Je,N[ge]=re),re.matrix.fromArray(ie.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ie.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ye.x,ye.y,ye.width,ye.height),ge===0&&(q.matrix.copy(re.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),$t===!0&&q.cameras.push(re)}const Bt=a.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){m=i.getBinding();const ge=m.getDepthInformation(Pt[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,a.renderState)}if(Bt&&Bt.includes("camera-access")&&w){t.state.unbindTexture(),m=i.getBinding();for(let ge=0;ge<Pt.length;ge++){const ie=Pt[ge].camera;if(ie){let ye=_[ie];ye||(ye=new Qp,_[ie]=ye);const re=m.getCameraImage(ie);ye.sourceTexture=re}}}}for(let Pt=0;Pt<F.length;Pt++){const $t=B[Pt],Bt=F[Pt];$t!==null&&Bt!==void 0&&Bt.update($t,dt,f||c)}ne&&ne(at,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),y=null}const be=new im;be.setAnimationLoop(He),this.setAnimationLoop=function(at){ne=at},this.dispose=function(){}}}const Fr=new Di,C1=new Ke;function P1(r,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,Zp(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,L,I,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(x,_):_.isMeshToonMaterial?(o(x,_),m(x,_)):_.isMeshPhongMaterial?(o(x,_),p(x,_)):_.isMeshStandardMaterial?(o(x,_),g(x,_),_.isMeshPhysicalMaterial&&v(x,_,D)):_.isMeshMatcapMaterial?(o(x,_),y(x,_)):_.isMeshDepthMaterial?o(x,_):_.isMeshDistanceMaterial?(o(x,_),w(x,_)):_.isMeshNormalMaterial?o(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?d(x,_,L,I):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Dn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Dn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=t.get(_),I=L.envMap,D=L.envMapRotation;I&&(x.envMap.value=I,Fr.copy(D),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),x.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Fr)),x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,L,I){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=I*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const L=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function D1(r,t,e,i){let a={},o={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,I){const D=I.program;i.uniformBlockBinding(L,D)}function f(L,I){let D=a[L.id];D===void 0&&(y(L),D=p(L),a[L.id]=D,L.addEventListener("dispose",x));const F=I.program;i.updateUBOMapping(L,F);const B=t.render.frame;o[L.id]!==B&&(g(L),o[L.id]=B)}function p(L){const I=m();L.__bindingPointIndex=I;const D=r.createBuffer(),F=L.__size,B=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,F,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,D),D}function m(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const I=a[L.id],D=L.uniforms,F=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let B=0,C=D.length;B<C;B++){const O=Array.isArray(D[B])?D[B]:[D[B]];for(let M=0,T=O.length;M<T;M++){const N=O[M];if(v(N,B,M,F)===!0){const q=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let nt=0;for(let it=0;it<K.length;it++){const tt=K[it],$=w(tt);typeof tt=="number"||typeof tt=="boolean"?(N.__data[0]=tt,r.bufferSubData(r.UNIFORM_BUFFER,q+nt,N.__data)):tt.isMatrix3?(N.__data[0]=tt.elements[0],N.__data[1]=tt.elements[1],N.__data[2]=tt.elements[2],N.__data[3]=0,N.__data[4]=tt.elements[3],N.__data[5]=tt.elements[4],N.__data[6]=tt.elements[5],N.__data[7]=0,N.__data[8]=tt.elements[6],N.__data[9]=tt.elements[7],N.__data[10]=tt.elements[8],N.__data[11]=0):(tt.toArray(N.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(L,I,D,F){const B=L.value,C=I+"_"+D;if(F[C]===void 0)return typeof B=="number"||typeof B=="boolean"?F[C]=B:F[C]=B.clone(),!0;{const O=F[C];if(typeof B=="number"||typeof B=="boolean"){if(O!==B)return F[C]=B,!0}else if(O.equals(B)===!1)return O.copy(B),!0}return!1}function y(L){const I=L.uniforms;let D=0;const F=16;for(let C=0,O=I.length;C<O;C++){const M=Array.isArray(I[C])?I[C]:[I[C]];for(let T=0,N=M.length;T<N;T++){const q=M[T],K=Array.isArray(q.value)?q.value:[q.value];for(let nt=0,it=K.length;nt<it;nt++){const tt=K[nt],$=w(tt),ot=D%F,wt=ot%$.boundary,Mt=ot+wt;D+=wt,Mt!==0&&F-Mt<$.storage&&(D+=F-Mt),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=$.storage}}}const B=D%F;return B>0&&(D+=F-B),L.__size=D,L.__cache={},this}function w(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):jt("WebGLRenderer: Unsupported uniform value type.",L),I}function x(L){const I=L.target;I.removeEventListener("dispose",x);const D=c.indexOf(I.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function _(){for(const L in a)r.deleteBuffer(a[L]);c=[],a={},o={}}return{bind:d,update:f,dispose:_}}const L1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function I1(){return Ei===null&&(Ei=new SE(L1,16,16,Rs,ji),Ei.name="DFG_LUT",Ei.minFilter=yn,Ei.magFilter=yn,Ei.wrapS=Ki,Ei.wrapT=Ki,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class U1{constructor(t={}){const{canvas:e=qM(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Kn}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=v,x=new Set([Ju,$u,Zu]),_=new Set([Kn,Pi,ma,_a,Yu,Ku]),L=new Uint32Array(4),I=new Int32Array(4);let D=null,F=null;const B=[],C=[];let O=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=si;let N=0,q=0,K=null,nt=-1,it=null;const tt=new Je,$=new Je;let ot=null;const wt=new Ee(0);let Mt=0,Et=e.width,ce=e.height,ne=1,He=null,be=null;const at=new Je(0,0,Et,ce),dt=new Je(0,0,Et,ce);let Pt=!1;const $t=new nh;let Bt=!1,pe=!1;const qe=new Ke,ge=new V,ie=new Je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Le(){return K===null?ne:1}let z=i;function Ze(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wu}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const X="webgl2";if(z=Ze(X,A),z===null)throw Ze(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Re("WebGLRenderer: "+A.message),A}let xe,de,Ut,P,E,k,st,ut,et,zt,gt,Ft,Wt,pt,vt,It,Ot,xt,se,H,Rt,_t,Ct,mt;function ht(){xe=new Ib(z),xe.init(),_t=new T1(z,xe),de=new Tb(z,xe,t,_t),Ut=new E1(z,xe),de.reversedDepthBuffer&&g&&Ut.buffers.depth.setReversed(!0),P=new Fb(z),E=new o1,k=new y1(z,xe,Ut,E,de,_t,P),st=new Ab(M),ut=new Lb(M),et=new GE(z),Ct=new Eb(z,et),zt=new Ub(z,et,P,Ct),gt=new Bb(z,zt,et,P),se=new Ob(z,de,k),It=new bb(E),Ft=new a1(M,st,ut,xe,de,Ct,It),Wt=new P1(M,E),pt=new c1,vt=new m1(xe),xt=new Mb(M,st,ut,Ut,gt,y,d),Ot=new S1(M,gt,de),mt=new D1(z,P,de,Ut),H=new yb(z,xe,P),Rt=new Nb(z,xe,P),P.programs=Ft.programs,M.capabilities=de,M.extensions=xe,M.properties=E,M.renderLists=pt,M.shadowMap=Ot,M.state=Ut,M.info=P}ht(),w!==Kn&&(O=new Gb(w,e.width,e.height,a,o));const St=new R1(M,z);this.xr=St,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(Et,ce,!1))},this.getSize=function(A){return A.set(Et,ce)},this.setSize=function(A,X,j=!0){if(St.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=A,ce=X,e.width=Math.floor(A*ne),e.height=Math.floor(X*ne),j===!0&&(e.style.width=A+"px",e.style.height=X+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(Et*ne,ce*ne).floor()},this.setDrawingBufferSize=function(A,X,j){Et=A,ce=X,ne=j,e.width=Math.floor(A*j),e.height=Math.floor(X*j),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(w===Kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(tt)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,X,j,J){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,X,j,J),Ut.viewport(tt.copy(at).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,X,j,J){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,X,j,J),Ut.scissor($.copy(dt).multiplyScalar(ne).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){Ut.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,j=!0){let J=0;if(A){let Z=!1;if(K!==null){const yt=K.texture.format;Z=x.has(yt)}if(Z){const yt=K.texture.type,Dt=_.has(yt),Tt=xt.getClearColor(),Nt=xt.getClearAlpha(),Ht=Tt.r,Xt=Tt.g,Vt=Tt.b;Dt?(L[0]=Ht,L[1]=Xt,L[2]=Vt,L[3]=Nt,z.clearBufferuiv(z.COLOR,0,L)):(I[0]=Ht,I[1]=Xt,I[2]=Vt,I[3]=Nt,z.clearBufferiv(z.COLOR,0,I))}else J|=z.COLOR_BUFFER_BIT}X&&(J|=z.DEPTH_BUFFER_BIT),j&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),xt.dispose(),pt.dispose(),vt.dispose(),E.dispose(),st.dispose(),ut.dispose(),gt.dispose(),Ct.dispose(),mt.dispose(),Ft.dispose(),St.dispose(),St.removeEventListener("sessionstart",ya),St.removeEventListener("sessionend",Ta),Ii.stop()};function Jt(A){A.preventDefault(),Cd("WebGLRenderer: Context Lost."),T=!0}function Fe(){Cd("WebGLRenderer: Context Restored."),T=!1;const A=P.autoReset,X=Ot.enabled,j=Ot.autoUpdate,J=Ot.needsUpdate,Z=Ot.type;ht(),P.autoReset=A,Ot.enabled=X,Ot.autoUpdate=j,Ot.needsUpdate=J,Ot.type=Z}function Ce(A){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const X=A.target;X.removeEventListener("dispose",Zn),ai(X)}function ai(A){Fs(A),E.remove(A)}function Fs(A){const X=E.get(A).programs;X!==void 0&&(X.forEach(function(j){Ft.releaseProgram(j)}),A.isShaderMaterial&&Ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,j,J,Z,yt){X===null&&(X=ye);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Tt=rl(A,X,j,J,Z);Ut.setMaterial(J,Dt);let Nt=j.index,Ht=1;if(J.wireframe===!0){if(Nt=zt.getWireframeAttribute(j),Nt===void 0)return;Ht=2}const Xt=j.drawRange,Vt=j.attributes.position;let ae=Xt.start*Ht,Ae=(Xt.start+Xt.count)*Ht;yt!==null&&(ae=Math.max(ae,yt.start*Ht),Ae=Math.min(Ae,(yt.start+yt.count)*Ht)),Nt!==null?(ae=Math.max(ae,0),Ae=Math.min(Ae,Nt.count)):Vt!=null&&(ae=Math.max(ae,0),Ae=Math.min(Ae,Vt.count));const We=Ae-ae;if(We<0||We===1/0)return;Ct.setup(Z,J,Tt,j,Nt);let Ve,we=H;if(Nt!==null&&(Ve=et.get(Nt),we=Rt,we.setIndex(Ve)),Z.isMesh)J.wireframe===!0?(Ut.setLineWidth(J.wireframeLinewidth*Le()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(Z.isLine){let kt=J.linewidth;kt===void 0&&(kt=1),Ut.setLineWidth(kt*Le()),Z.isLineSegments?we.setMode(z.LINES):Z.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else Z.isPoints?we.setMode(z.POINTS):Z.isSprite&&we.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)xa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))we.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Se=Z._multiDrawCount,xn=Nt?et.get(Nt).bytesPerElement:1,gi=E.get(J).currentProgram.getUniforms();for(let An=0;An<Se;An++)gi.setValue(z,"_gl_DrawID",An),we.render(kt[An]/xn,Pe[An])}else if(Z.isInstancedMesh)we.renderInstances(ae,We,Z.count);else if(j.isInstancedBufferGeometry){const kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,kt);we.renderInstances(ae,We,Pe)}else we.render(ae,We)};function Ea(A,X,j){A.transparent===!0&&A.side===Ti&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,Xr(A,X,j),A.side=Sr,A.needsUpdate=!0,Xr(A,X,j),A.side=Ti):Xr(A,X,j)}this.compile=function(A,X,j=null){j===null&&(j=A),F=vt.get(j),F.init(X),C.push(F),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),A!==j&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const J=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const Tt=yt[Dt];Ea(Tt,j,Z),J.add(Tt)}else Ea(yt,j,Z),J.add(yt)}),F=C.pop(),J},this.compileAsync=function(A,X,j=null){const J=this.compile(A,X,j);return new Promise(Z=>{function yt(){if(J.forEach(function(Dt){E.get(Dt).currentProgram.isReady()&&J.delete(Dt)}),J.size===0){Z(A);return}setTimeout(yt,10)}xe.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Mr=null;function il(A){Mr&&Mr(A)}function ya(){Ii.stop()}function Ta(){Ii.start()}const Ii=new im;Ii.setAnimationLoop(il),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(A){Mr=A,St.setAnimationLoop(A),A===null?Ii.stop():Ii.start()},St.addEventListener("sessionstart",ya),St.addEventListener("sessionend",Ta),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=St.enabled===!0&&St.isPresenting===!0,J=O!==null&&(K===null||j)&&O.begin(M,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(X),X=St.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,X,K),F=vt.get(A,C.length),F.init(X),C.push(F),qe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$t.setFromProjectionMatrix(qe,Ai,X.reversedDepth),pe=this.localClippingEnabled,Bt=It.init(this.clippingPlanes,pe),D=pt.get(A,B.length),D.init(),B.push(D),St.enabled===!0&&St.isPresenting===!0){const Dt=M.xr.getDepthSensingMesh();Dt!==null&&Os(Dt,X,-1/0,M.sortObjects)}Os(A,X,0,M.sortObjects),D.finish(),M.sortObjects===!0&&D.sort(He,be),re=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,re&&xt.addToRenderList(D,A),this.info.render.frame++,Bt===!0&&It.beginShadows();const Z=F.state.shadowsArray;if(Ot.render(Z,A,X),Bt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&O.hasRenderPass())===!1){const Dt=D.opaque,Tt=D.transmissive;if(F.setupLights(),X.isArrayCamera){const Nt=X.cameras;if(Tt.length>0)for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht];Aa(Dt,Tt,A,Vt)}re&&xt.render(A);for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht];ba(D,A,Vt,Vt.viewport)}}else Tt.length>0&&Aa(Dt,Tt,A,X),re&&xt.render(A),ba(D,A,X)}K!==null&&q===0&&(k.updateMultisampleRenderTarget(K),k.updateRenderTargetMipmap(K)),J&&O.end(M),A.isScene===!0&&A.onAfterRender(M,A,X),Ct.resetDefaultState(),nt=-1,it=null,C.pop(),C.length>0?(F=C[C.length-1],Bt===!0&&It.setGlobalState(M.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Os(A,X,j,J){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$t.intersectsSprite(A)){J&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qe);const Dt=gt.update(A),Tt=A.material;Tt.visible&&D.push(A,Dt,Tt,j,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$t.intersectsObject(A))){const Dt=gt.update(A),Tt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ie.copy(Dt.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(qe)),Array.isArray(Tt)){const Nt=Dt.groups;for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht],ae=Tt[Vt.materialIndex];ae&&ae.visible&&D.push(A,Dt,ae,j,ie.z,Vt)}}else Tt.visible&&D.push(A,Dt,Tt,j,ie.z,null)}}const yt=A.children;for(let Dt=0,Tt=yt.length;Dt<Tt;Dt++)Os(yt[Dt],X,j,J)}function ba(A,X,j,J){const{opaque:Z,transmissive:yt,transparent:Dt}=A;F.setupLightsView(j),Bt===!0&&It.setGlobalState(M.clippingPlanes,j),J&&Ut.viewport(tt.copy(J)),Z.length>0&&Wr(Z,X,j),yt.length>0&&Wr(yt,X,j),Dt.length>0&&Wr(Dt,X,j),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Aa(A,X,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[J.id]===void 0){const ae=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[J.id]=new Ri(1,1,{generateMipmaps:!0,type:ae?ji:Kn,minFilter:zr,samples:de.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const yt=F.state.transmissionRenderTarget[J.id],Dt=J.viewport||tt;yt.setSize(Dt.z*M.transmissionResolutionScale,Dt.w*M.transmissionResolutionScale);const Tt=M.getRenderTarget(),Nt=M.getActiveCubeFace(),Ht=M.getActiveMipmapLevel();M.setRenderTarget(yt),M.getClearColor(wt),Mt=M.getClearAlpha(),Mt<1&&M.setClearColor(16777215,.5),M.clear(),re&&xt.render(j);const Xt=M.toneMapping;M.toneMapping=wi;const Vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),F.setupLightsView(J),Bt===!0&&It.setGlobalState(M.clippingPlanes,J),Wr(A,j,J),k.updateMultisampleRenderTarget(yt),k.updateRenderTargetMipmap(yt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Ae=0,We=X.length;Ae<We;Ae++){const Ve=X[Ae],{object:we,geometry:kt,material:Pe,group:Se}=Ve;if(Pe.side===Ti&&we.layers.test(J.layers)){const xn=Pe.side;Pe.side=Dn,Pe.needsUpdate=!0,Bs(we,j,J,kt,Pe,Se),Pe.side=xn,Pe.needsUpdate=!0,ae=!0}}ae===!0&&(k.updateMultisampleRenderTarget(yt),k.updateRenderTargetMipmap(yt))}M.setRenderTarget(Tt,Nt,Ht),M.setClearColor(wt,Mt),Vt!==void 0&&(J.viewport=Vt),M.toneMapping=Xt}function Wr(A,X,j){const J=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,yt=A.length;Z<yt;Z++){const Dt=A[Z],{object:Tt,geometry:Nt,group:Ht}=Dt;let Xt=Dt.material;Xt.allowOverride===!0&&J!==null&&(Xt=J),Tt.layers.test(j.layers)&&Bs(Tt,X,j,Nt,Xt,Ht)}}function Bs(A,X,j,J,Z,yt){A.onBeforeRender(M,X,j,J,Z,yt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(M,X,j,J,A,yt),Z.transparent===!0&&Z.side===Ti&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,M.renderBufferDirect(j,X,J,Z,A,yt),Z.side=Sr,Z.needsUpdate=!0,M.renderBufferDirect(j,X,J,Z,A,yt),Z.side=Ti):M.renderBufferDirect(j,X,J,Z,A,yt),A.onAfterRender(M,X,j,J,Z,yt)}function Xr(A,X,j){X.isScene!==!0&&(X=ye);const J=E.get(A),Z=F.state.lights,yt=F.state.shadowsArray,Dt=Z.state.version,Tt=Ft.getParameters(A,Z.state,yt,X,j),Nt=Ft.getProgramCacheKey(Tt);let Ht=J.programs;J.environment=A.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(A.isMeshStandardMaterial?ut:st).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Zn),Ht=new Map,J.programs=Ht);let Xt=Ht.get(Nt);if(Xt!==void 0){if(J.currentProgram===Xt&&J.lightsStateVersion===Dt)return Ra(A,Tt),Xt}else Tt.uniforms=Ft.getUniforms(A),A.onBeforeCompile(Tt,M),Xt=Ft.acquireProgram(Tt,Nt),Ht.set(Nt,Xt),J.uniforms=Tt.uniforms;const Vt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=It.uniform),Ra(A,Tt),J.needsLights=al(A),J.lightsStateVersion=Dt,J.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Xt,J.uniformsList=null,Xt}function wa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=qo.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ra(A,X){const j=E.get(A);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function rl(A,X,j,J,Z){X.isScene!==!0&&(X=ye),k.resetTextureUnits();const yt=X.fog,Dt=J.isMeshStandardMaterial?X.environment:null,Tt=K===null?M.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Cs,Nt=(J.isMeshStandardMaterial?ut:st).get(J.envMap||Dt),Ht=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!j.morphAttributes.position,ae=!!j.morphAttributes.normal,Ae=!!j.morphAttributes.color;let We=wi;J.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(We=M.toneMapping);const Ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=Ve!==void 0?Ve.length:0,kt=E.get(J),Pe=F.state.lights;if(Bt===!0&&(pe===!0||A!==it)){const cn=A===it&&J.id===nt;It.setState(J,A,cn)}let Se=!1;J.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Pe.state.version||kt.outputColorSpace!==Tt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==Nt||J.fog===!0&&kt.fog!==yt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==It.numPlanes||kt.numIntersection!==It.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Xt||kt.morphTargets!==Vt||kt.morphNormals!==ae||kt.morphColors!==Ae||kt.toneMapping!==We||kt.morphTargetsCount!==we)&&(Se=!0):(Se=!0,kt.__version=J.version);let xn=kt.currentProgram;Se===!0&&(xn=Xr(J,X,Z));let gi=!1,An=!1,tr=!1;const Ie=xn.getUniforms(),ln=kt.uniforms;if(Ut.useProgram(xn.program)&&(gi=!0,An=!0,tr=!0),J.id!==nt&&(nt=J.id,An=!0),gi||it!==A){Ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(z,"projectionMatrix",A.projectionMatrix),Ie.setValue(z,"viewMatrix",A.matrixWorldInverse);const dn=Ie.map.cameraPosition;dn!==void 0&&dn.setValue(z,ge.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),it!==A&&(it=A,An=!0,tr=!0)}if(kt.needsLights&&(Pe.state.directionalShadowMap.length>0&&Ie.setValue(z,"directionalShadowMap",Pe.state.directionalShadowMap,k),Pe.state.spotShadowMap.length>0&&Ie.setValue(z,"spotShadowMap",Pe.state.spotShadowMap,k),Pe.state.pointShadowMap.length>0&&Ie.setValue(z,"pointShadowMap",Pe.state.pointShadowMap,k)),Z.isSkinnedMesh){Ie.setOptional(z,Z,"bindMatrix"),Ie.setOptional(z,Z,"bindMatrixInverse");const cn=Z.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ie.setValue(z,"boneTexture",cn.boneTexture,k))}Z.isBatchedMesh&&(Ie.setOptional(z,Z,"batchingTexture"),Ie.setValue(z,"batchingTexture",Z._matricesTexture,k),Ie.setOptional(z,Z,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",Z._indirectTexture,k),Ie.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",Z._colorsTexture,k));const en=j.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&se.update(Z,j,xn),(An||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,Ie.setValue(z,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ln.envMap.value=Nt,ln.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(ln.envMapIntensity.value=X.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=I1()),An&&(Ie.setValue(z,"toneMappingExposure",M.toneMappingExposure),kt.needsLights&&sl(ln,tr),yt&&J.fog===!0&&Wt.refreshFogUniforms(ln,yt),Wt.refreshMaterialUniforms(ln,J,ne,ce,F.state.transmissionRenderTarget[A.id]),qo.upload(z,wa(kt),ln,k)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qo.upload(z,wa(kt),ln,k),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(z,"center",Z.center),Ie.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(z,"normalMatrix",Z.normalMatrix),Ie.setValue(z,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const cn=J.uniformsGroups;for(let dn=0,zs=cn.length;dn<zs;dn++){const xi=cn[dn];mt.update(xi,xn),mt.bind(xi,xn)}}return xn}function sl(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function al(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,X,j){const J=E.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=X,E.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const j=E.get(A);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};const qr=z.createFramebuffer();this.setRenderTarget=function(A,X=0,j=0){K=A,N=X,q=j;let J=null,Z=!1,yt=!1;if(A){const Tt=E.get(A);if(Tt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(z.FRAMEBUFFER,Tt.__webglFramebuffer),tt.copy(A.viewport),$.copy(A.scissor),ot=A.scissorTest,Ut.viewport(tt),Ut.scissor($),Ut.setScissorTest(ot),nt=-1;return}else if(Tt.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Tt.__hasExternalTextures)k.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Tt.__boundDepthTexture!==Xt){if(Xt!==null&&E.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(yt=!0);const Ht=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[X])?J=Ht[X][j]:J=Ht[X],Z=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?J=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?J=Ht[j]:J=Ht,tt.copy(A.viewport),$.copy(A.scissor),ot=A.scissorTest}else tt.copy(at).multiplyScalar(ne).floor(),$.copy(dt).multiplyScalar(ne).floor(),ot=Pt;if(j!==0&&(J=qr),Ut.bindFramebuffer(z.FRAMEBUFFER,J)&&Ut.drawBuffers(A,J),Ut.viewport(tt),Ut.scissor($),Ut.setScissorTest(ot),Z){const Tt=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Tt.__webglTexture,j)}else if(yt){const Tt=X;for(let Nt=0;Nt<A.textures.length;Nt++){const Ht=E.get(A.textures[Nt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Nt,Ht.__webglTexture,j,Tt)}}else if(A!==null&&j!==0){const Tt=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tt.__webglTexture,j)}nt=-1},this.readRenderTargetPixels=function(A,X,j,J,Z,yt,Dt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Ut.bindFramebuffer(z.FRAMEBUFFER,Nt);try{const Ht=A.textures[Tt],Xt=Ht.format,Vt=Ht.type;if(!de.textureFormatReadable(Xt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Vt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-J&&j>=0&&j<=A.height-Z&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt),z.readPixels(X,j,J,Z,_t.convert(Xt),_t.convert(Vt),yt))}finally{const Ht=K!==null?E.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,X,j,J,Z,yt,Dt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(X>=0&&X<=A.width-J&&j>=0&&j<=A.height-Z){Ut.bindFramebuffer(z.FRAMEBUFFER,Nt);const Ht=A.textures[Tt],Xt=Ht.format,Vt=Ht.type;if(!de.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt),z.readPixels(X,j,J,Z,_t.convert(Xt),_t.convert(Vt),0);const Ae=K!==null?E.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Ae);const We=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await YM(z,We,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ae),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(ae),z.deleteSync(We),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,j=0){const J=Math.pow(2,-j),Z=Math.floor(A.image.width*J),yt=Math.floor(A.image.height*J),Dt=X!==null?X.x:0,Tt=X!==null?X.y:0;k.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Dt,Tt,Z,yt),Ut.unbindTexture()};const ol=z.createFramebuffer(),Yr=z.createFramebuffer();this.copyTextureToTexture=function(A,X,j=null,J=null,Z=0,yt=null){yt===null&&(Z!==0?(xa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Z,Z=0):yt=0);let Dt,Tt,Nt,Ht,Xt,Vt,ae,Ae,We;const Ve=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(j!==null)Dt=j.max.x-j.min.x,Tt=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Ht=j.min.x,Xt=j.min.y,Vt=j.isBox3?j.min.z:0;else{const en=Math.pow(2,-Z);Dt=Math.floor(Ve.width*en),Tt=Math.floor(Ve.height*en),A.isDataArrayTexture?Nt=Ve.depth:A.isData3DTexture?Nt=Math.floor(Ve.depth*en):Nt=1,Ht=0,Xt=0,Vt=0}J!==null?(ae=J.x,Ae=J.y,We=J.z):(ae=0,Ae=0,We=0);const we=_t.convert(X.format),kt=_t.convert(X.type);let Pe;X.isData3DTexture?(k.setTexture3D(X,0),Pe=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(k.setTexture2DArray(X,0),Pe=z.TEXTURE_2D_ARRAY):(k.setTexture2D(X,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Se=z.getParameter(z.UNPACK_ROW_LENGTH),xn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),gi=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),tr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);const Ie=A.isDataArrayTexture||A.isData3DTexture,ln=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const en=E.get(A),cn=E.get(X),dn=E.get(en.__renderTarget),zs=E.get(cn.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,dn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let xi=0;xi<Nt;xi++)Ie&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Z,Vt+xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,yt,We+xi)),z.blitFramebuffer(Ht,Xt,Dt,Tt,ae,Ae,Dt,Tt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||E.has(A)){const en=E.get(A),cn=E.get(X);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,ol),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yr);for(let dn=0;dn<Nt;dn++)Ie?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,Z,Vt+dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,Z),ln?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,yt,We+dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,yt),Z!==0?z.blitFramebuffer(Ht,Xt,Dt,Tt,ae,Ae,Dt,Tt,z.COLOR_BUFFER_BIT,z.NEAREST):ln?z.copyTexSubImage3D(Pe,yt,ae,Ae,We+dn,Ht,Xt,Dt,Tt):z.copyTexSubImage2D(Pe,yt,ae,Ae,Ht,Xt,Dt,Tt);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Pe,yt,ae,Ae,We,Dt,Tt,Nt,we,kt,Ve.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,yt,ae,Ae,We,Dt,Tt,Nt,we,Ve.data):z.texSubImage3D(Pe,yt,ae,Ae,We,Dt,Tt,Nt,we,kt,Ve):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,ae,Ae,Dt,Tt,we,kt,Ve.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,ae,Ae,Ve.width,Ve.height,we,Ve.data):z.texSubImage2D(z.TEXTURE_2D,yt,ae,Ae,Dt,Tt,we,kt,Ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,Se),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gi),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,tr),yt===0&&X.generateMipmaps&&z.generateMipmap(Pe),Ut.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),Ut.unbindTexture()},this.resetState=function(){N=0,q=0,K=null,Ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}const Ep={type:"change"},lh={type:"start"},lm={type:"end"},Bo=new eh,yp=new gr,N1=Math.cos(70*ZM.DEG2RAD),sn=new V,On=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6;class cm extends BE{constructor(t,e=null){super(t,e),this.state=Be.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Vr,this._lastTargetPosition=new V,this._quat=new Vr().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $d,this._sphericalDelta=new $d,this._scale=1,this._panOffset=new V,this._rotateStart=new ee,this._rotateEnd=new ee,this._rotateDelta=new ee,this._panStart=new ee,this._panEnd=new ee,this._panDelta=new ee,this._dollyStart=new ee,this._dollyEnd=new ee,this._dollyDelta=new ee,this._dollyDirection=new V,this._mouse=new ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O1.bind(this),this._onPointerDown=F1.bind(this),this._onPointerUp=B1.bind(this),this._onContextMenu=X1.bind(this),this._onMouseWheel=H1.bind(this),this._onKeyDown=V1.bind(this),this._onTouchStart=k1.bind(this),this._onTouchMove=W1.bind(this),this._onMouseDown=z1.bind(this),this._onMouseMove=G1.bind(this),this._interceptControlDown=q1.bind(this),this._interceptControlUp=Y1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ep),this.update(),this.state=Be.NONE}update(t=null){const e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=sn.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const u=new V(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const f=new V(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<N1?this.object.lookAt(this.target):(yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(yp,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(Ep),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;sn.copy(a).sub(this.target);let o=sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ee,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function F1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function O1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function B1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lm),this.state=Be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function z1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Be.DOLLY;break;case ys.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}break;case ys.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(lh)}function G1(r){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function H1(r){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(r.preventDefault(),this.dispatchEvent(lh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(lm))}function V1(r){this.enabled!==!1&&this._handleKeyDown(r)}function k1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Be.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Be.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(lh)}function W1(r){switch(this._trackPointer(r),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Be.NONE}}function X1(r){this.enabled!==!1&&r.preventDefault()}function q1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pa=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++r%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var m=0;m<t.children.length;m++)t.children[m].style.display=m===p?"block":"none";r=p}var a=(performance||Date).now(),o=a,c=0,u=e(new pa.Panel("FPS","#0ff","#002")),d=e(new pa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new pa.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:t,setMode:i}};pa.Panel=function(r,t,e){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,d=48*c,f=3*c,p=2*c,m=3*c,g=15*c,v=74*c,y=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var x=w.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=e,x.fillRect(0,0,u,d),x.fillStyle=t,x.fillText(r,f,p),x.fillRect(m,g,v,y),x.fillStyle=e,x.globalAlpha=.9,x.fillRect(m,g,v,y),{dom:w,update:function(_,L){i=Math.min(i,_),a=Math.max(a,_),x.fillStyle=e,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=t,x.fillText(o(_)+" "+r+" ("+o(i)+"-"+o(a)+")",f,p),x.drawImage(w,m+c,g,v-c,y,m,g,v-c,y),x.fillRect(m+v-c,g,c,y),x.fillStyle=e,x.globalAlpha=.9,x.fillRect(m+v-c,g,c,o((1-_/L)*y))}}};const K1=!0,Zt=Object.freeze({ball:Object.freeze({bounciness:.8,launchForce:3.6,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6}),simulationMode:!0,useRandomLevel:K1,usePreCalculatedFlight:!1,maxFlightDurationInSeconds:30,ticksPerSecond:128,camera:{fov:30,near:.1,far:Math.pow(10,6),rotationSpeed:0},defaultPlanetDensity:14e-5,maxPlanetOffset:700,showFPSCounter:!0,showInfoTab:!1,skyboxOpacity:1}),Z1=new tm;function $1(r){const t=new Ls({color:"rgb(0,0,0)",side:Dn}),e=32,i=32,a=1;return new Bn(new Us(r+a,e,i),t)}class um extends Bn{get mass(){const t=Math.PI*4/3;return this.density*this.radius**3*t}constructor({radius:t,color:e="rgb(255,0,0)",density:i=Zt.defaultPlanetDensity,textureUrl:a}){super(new Us(t,32,32),new AE({color:e})),this.radius=t,this.density=i,this.add($1(t)),a&&this.loadTexture(a)}async loadTexture(t){try{const e=await Z1.loadAsync(t);this.material.map=e,this.material.needsUpdate=!0}catch(e){console.warn(`Failed to load planet texture from ${t}:`,e)}}}class J1{constructor(t){this.scene=t}getPlanets(){return this.getInstancesOf(um)}getLines(){return this.getInstancesOf(rh)}getInstancesOf(t){return this.scene.children.filter(e=>e instanceof t)}}const j1=document.getElementById("infoTab"),Q1=document.getElementById("infoTab__text"),tw={updateText(r){const t=`Ball: {
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
}`;Q1.innerHTML=t}};Zt.showInfoTab||(j1.style.display="none");class ew extends fn{constructor(t){super(Zt.camera.fov,innerWidth/innerHeight,Zt.camera.near,Zt.camera.far),this.position.set(400,200,40),this.lookAt(new V)}setupLockControls(){}reset(t){if(!t.landedPlanet)return;const e=t.position.clone(),a=(t.landedPlanet?.position.clone()).sub(e),o=e.clone().sub(a.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(e)}getControlsObject(){}}const _r=()=>new fn(Zt.camera.fov,innerWidth/innerHeight,Zt.camera.near,Zt.camera.far);class nw extends ua{constructor(){super(),this.cameras=[_r(),_r(),_r(),_r(),_r(),_r(),_r(),_r()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const t=Zt.maxPlanetOffset+900,e=-t,i=t;this.cameras[0].position.set(e,e/2,e),this.cameras[1].position.set(e,e/2,i),this.cameras[2].position.set(e,i/2,e),this.cameras[3].position.set(e,i/2,i),this.cameras[4].position.set(i,e/2,e),this.cameras[5].position.set(i,e/2,i),this.cameras[6].position.set(i,i/2,e),this.cameras[7].position.set(i,i/2,i)}selectActiveCamera(t){if(Date.now()-this.lastSwitchDate<3e3)return;const a=+(t.x>0)*4+ +(t.y>0)*2+ +(t.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[a]}updateActiveCamera(t){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(t)}getActiveCamera(){return this.activeCamera}update(t){this.selectActiveCamera(t),this.updateActiveCamera(t)}}class iw extends fn{constructor(t){super(Zt.camera.fov,innerWidth/innerHeight,Zt.camera.near,Zt.camera.far),this.position.set(400,200,40),this.orbitControls=new cm(this,t),this.lookAt(new V)}reset(t){if(!t.landedPlanet)return;const e=t.position.clone(),a=(t.landedPlanet?.position.clone()).sub(e),o=e.clone().sub(a.normalize().multiplyScalar(2e3));this.orbitControls.target=e,this.position.copy(o),this.lookAt(e)}}const Jo={ballHit:(r=1)=>Zc("audio-ping-pong-ball-hit",{volume:r}),ballFlightStart:(r=.5)=>Zc("audio-ball-flight-start",{volume:r,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>Zc("audio-ambient",{volume:.5})};function Zc(r,{volume:t=1,startTimeMS:e=0,stopTimeMS:i}){const a=document.getElementById(r);if(!a)throw new Error(`Audio not found: ${r}`);a.pause(),a.volume=t,a.currentTime=e/1e3,a.play(),typeof i=="number"&&setTimeout(function(){a.pause()},i)}function hm({pulled:r,puller:t,timeDelta:e}){const i=t.position.clone().sub(r.position),a=t.position.distanceTo(r.position);return i.normalize().multiplyScalar(t.mass).multiplyScalar(r.mass).multiplyScalar(e*100).divideScalar(a**2)}function fm({staticSphere:r,movingSphere:t,onBounceVelocityMultiplier:e=Zt.ball.bounciness}){const i=t.position.clone().sub(r.position).normalize(),a=i.dot(t.velocity);return t.velocity.clone().sub(i.clone().multiplyScalar(2*a)).multiplyScalar(e)}function dm(r,t){const e=r.position.clone().sub(t.position).normalize().multiplyScalar(t.radius+r.radius),i=t.position.clone().add(e);return r.position.set(i.x,i.y,i.z),i}function rw(r,t){return r.position.distanceTo(t.position)<=r.radius+t.radius}function sw(r,t){return r.position.distanceTo(t.position)+r.radius<=t.radius}function aw(r,t){return rw(r,t)||sw(r,t)}function ow(r,t,e,i={ticksPerSecond:Zt.ticksPerSecond,maxFlightDurationInSeconds:Zt.maxFlightDurationInSeconds??30}){const a=i.ticksPerSecond,o=i.maxFlightDurationInSeconds,u=[{position:t.position.clone().clone(),velocity:r.clone()}],d=[];let f=!1;for(let p=1;p<a*o;p++){const m=u[p-1],g=cw({position:m.position.clone(),radius:t.radius,velocity:m.velocity.clone()},e);if(g&&!f)d.push(p),f=!0,u.push({velocity:g.newVelocity,position:g.contactPoint.clone()});else{f=!1;const v=m.velocity.clone().add(lw(a,t,e)),y=1/a,w=m.position.clone().add(m.velocity.clone().multiplyScalar(y*60));u.push({velocity:v,position:w})}}return{ticks:u,ticksWithCollisions:d}}function lw(r,t,e){const i=1/r,a=new V(0,0,0);return e.forEach(o=>{a.add(hm({puller:o,pulled:t,timeDelta:i}))}),a}function cw(r,t){let e=null;return t.some(i=>{if(aw(r,i)){const a=fm({staticSphere:i,movingSphere:r}),o=Math.min(1,r.velocity.length()/5);Jo.ballHit(o);const c=dm(r,i);return a.length()<.2?e={newVelocity:new V(0,0,0),contactPoint:c,stopsBall:!0}:e={newVelocity:a,contactPoint:c,stopsBall:!1},!0}return!1}),e}function pm(r,t,e=[]){const i=new V(t?.x||Math.random(),t?.y||Math.random(),t?.z||Math.random()).normalize().multiplyScalar(Zt.ball.launchForce);if(r.landedPlanet=null,r.velocity=i,Zt.usePreCalculatedFlight&&e.length>0){const a=ow(i,r,e);r.setPreCalculatedFlight(a)}Jo.ballFlightStart()}var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fa={exports:{}},uw=fa.exports,Tp;function hw(){return Tp||(Tp=1,(function(r,t){(function(e,i){{var a=i();r&&r.exports&&(t=r.exports=a),t.randomColor=a}})(uw,function(){var e=null,i={};_();var a=[],o=function(C){if(C=C||{},C.seed!==void 0&&C.seed!==null&&C.seed===parseInt(C.seed,10))e=C.seed;else if(typeof C.seed=="string")e=F(C.seed);else{if(C.seed!==void 0&&C.seed!==null)throw new TypeError("The seed value must be an integer or string");e=null}var O,M,T;if(C.count!==null&&C.count!==void 0){for(var N=C.count,q=[],K=0;K<C.count;K++)a.push(!1);for(C.count=null;N>q.length;){var nt=o(C);e!==null&&(C.seed=e),q.push(nt)}return C.count=N,q}return O=c(C),M=u(O,C),T=d(O,M,C),f([O,M,T],C)};function c(C){if(a.length>0){var O=B(C.hue),M=y(O),T=(O[1]-O[0])/a.length,N=parseInt((M-O[0])/T);a[N]===!0?N=(N+2)%a.length:a[N]=!0;var q=(O[0]+N*T)%359,K=(O[0]+(N+1)*T)%359;return O=[q,K],M=y(O),M<0&&(M=360+M),M}else{var O=m(C.hue);return M=y(O),M<0&&(M=360+M),M}}function u(C,O){if(O.hue==="monochrome")return 0;if(O.luminosity==="random")return y([0,100]);var M=g(C),T=M[0],N=M[1];switch(O.luminosity){case"bright":T=55;break;case"dark":T=N-10;break;case"light":N=55;break}return y([T,N])}function d(C,O,M){var T=p(C,O),N=100;switch(M.luminosity){case"dark":N=T+20;break;case"light":T=(N+T)/2;break;case"random":T=0,N=100;break}return y([T,N])}function f(C,O){switch(O.format){case"hsvArray":return C;case"hslArray":return D(C);case"hsl":var M=D(C);return"hsl("+M[0]+", "+M[1]+"%, "+M[2]+"%)";case"hsla":var T=D(C),K=O.alpha||Math.random();return"hsla("+T[0]+", "+T[1]+"%, "+T[2]+"%, "+K+")";case"rgbArray":return L(C);case"rgb":var N=L(C);return"rgb("+N.join(", ")+")";case"rgba":var q=L(C),K=O.alpha||Math.random();return"rgba("+q.join(", ")+", "+K+")";default:return w(C)}}function p(C,O){for(var M=v(C).lowerBounds,T=0;T<M.length-1;T++){var N=M[T][0],q=M[T][1],K=M[T+1][0],nt=M[T+1][1];if(O>=N&&O<=K){var it=(nt-q)/(K-N),tt=q-it*N;return it*O+tt}}return 0}function m(C){if(typeof parseInt(C)=="number"){var O=parseInt(C);if(O<360&&O>0)return[O,O]}if(typeof C=="string"){if(i[C]){var M=i[C];if(M.hueRange)return M.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(C)[0];return[T,T]}}return[0,360]}function g(C){return v(C).saturationRange}function v(C){C>=334&&C<=360&&(C-=360);for(var O in i){var M=i[O];if(M.hueRange&&C>=M.hueRange[0]&&C<=M.hueRange[1])return i[O]}return"Color not found"}function y(C){if(e===null){var O=.618033988749895,M=Math.random();return M+=O,M%=1,Math.floor(C[0]+M*(C[1]+1-C[0]))}else{var T=C[1]||1,N=C[0]||0;e=(e*9301+49297)%233280;var q=e/233280;return Math.floor(N+q*(T-N))}}function w(C){var O=L(C);function M(N){var q=N.toString(16);return q.length==1?"0"+q:q}var T="#"+M(O[0])+M(O[1])+M(O[2]);return T}function x(C,O,M){var T=M[0][0],N=M[M.length-1][0],q=M[M.length-1][1],K=M[0][1];i[C]={hueRange:O,lowerBounds:M,saturationRange:[T,N],brightnessRange:[q,K]}}function _(){x("monochrome",null,[[0,0],[100,0]]),x("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),x("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),x("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),x("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),x("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),x("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),x("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function L(C){var O=C[0];O===0&&(O=1),O===360&&(O=359),O=O/360;var M=C[1]/100,T=C[2]/100,N=Math.floor(O*6),q=O*6-N,K=T*(1-M),nt=T*(1-q*M),it=T*(1-(1-q)*M),tt=256,$=256,ot=256;switch(N){case 0:tt=T,$=it,ot=K;break;case 1:tt=nt,$=T,ot=K;break;case 2:tt=K,$=T,ot=it;break;case 3:tt=K,$=nt,ot=T;break;case 4:tt=it,$=K,ot=T;break;case 5:tt=T,$=K,ot=nt;break}var wt=[Math.floor(tt*255),Math.floor($*255),Math.floor(ot*255)];return wt}function I(C){C=C.replace(/^#/,""),C=C.length===3?C.replace(/(.)/g,"$1$1"):C;var O=parseInt(C.substr(0,2),16)/255,M=parseInt(C.substr(2,2),16)/255,T=parseInt(C.substr(4,2),16)/255,N=Math.max(O,M,T),q=N-Math.min(O,M,T),K=N?q/N:0;switch(N){case O:return[60*((M-T)/q%6)||0,K,N];case M:return[60*((T-O)/q+2)||0,K,N];case T:return[60*((O-M)/q+4)||0,K,N]}}function D(C){var O=C[0],M=C[1]/100,T=C[2]/100,N=(2-M)*T;return[O,Math.round(M*T/(N<1?N:2-N)*1e4)/100,N/2*100]}function F(C){for(var O=0,M=0;M!==C.length&&!(O>=Number.MAX_SAFE_INTEGER);M++)O+=C.charCodeAt(M);return O}function B(C){if(isNaN(C)){if(typeof C=="string"){if(i[C]){var M=i[C];if(M.hueRange)return M.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(C)[0];return v(T).hueRange}}}else{var O=parseInt(C);if(O<360&&O>0)return v(C).hueRange}return[0,360]}return o})})(fa,fa.exports)),fa.exports}var fw=hw();const _m=mm(fw);function dw(r){return new Us(r,32,32)}function pw(r){return new Ls({color:r})}class mw extends Bn{constructor({radius:t=Zt.ball.radius}={}){const e=_m({luminosity:"dark",alpha:1});super(dw(t),pw(e)),this._velocity=new V(0,0,0),this.arrowHelper=new OE(new V,new V),this.pathVertices=[],this.camera=new fn(Zt.camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null,this.mass=3,this.light=new em(e,16e3,1e4),this.color=e,this.radius=t,Zt.ball.showVelocityVector&&this.add(this.arrowHelper),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}get velocity(){return this._velocity.clone()}set velocity(t){this._velocity=t}addVelocity(t){this._velocity.add(t)}setPreCalculatedFlight(t){this.preCalculatedFlight=t,this.currentFlightTick=0,this.flightStartTime=Date.now()}clearPreCalculatedFlight(){this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null}createTrace(){const t=new ih({color:16755200,opacity:Zt.ball.traceTransparency,transparent:!0}),e=new zn().setFromPoints(this.pathVertices);return new rh(e,t)}tick(t=[]){if(this.landedPlanet!==null&&(this.velocity=new V,Zt.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{pm(this,new V(-.8,.18,-.72),t),this.launchBallTimeout=null},1e3))),Zt.usePreCalculatedFlight&&this.preCalculatedFlight&&this.flightStartTime!==null){const e=(Date.now()-this.flightStartTime)/1e3,i=Math.floor(e*Zt.ticksPerSecond);if(i<this.preCalculatedFlight.ticks.length){const a=this.preCalculatedFlight.ticks[i];this.position.copy(a.position),this.velocity=a.velocity.clone(),this.currentFlightTick=i}else{const a=this.preCalculatedFlight.ticks[this.preCalculatedFlight.ticks.length-1];this.position.copy(a.position),this.velocity=a.velocity.clone(),this.clearPreCalculatedFlight()}}else if(!Zt.usePreCalculatedFlight||!this.preCalculatedFlight){this.rotation.set(0,0,0),this.position.add(this.velocity);const e=this.velocity.normalize();this.rotation.set(e.x,e.y,e.z)}this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},Zt.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class _w extends Bn{constructor(){super(new Is,[]),this.init()}async init(){const e=await new tm().loadAsync(`${document.baseURI}assets/gfx/sphere-skybox.jpg`),i=new Ls({side:Ti,map:e,opacity:Zt.skyboxOpacity,transparent:!0,color:new Ee(.15,.2,.4)}),a=10**5.8,o=new Us(a);this.geometry=o,this.material=i}}function bp(r,t){return r.position.distanceTo(t.position)<=r.radius+t.radius}var da={exports:{}};var gw=da.exports,Ap;function xw(){return Ap||(Ap=1,(function(r,t){(function(){var e,i="4.17.23",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",m=1,g=2,v=4,y=1,w=2,x=1,_=2,L=4,I=8,D=16,F=32,B=64,C=128,O=256,M=512,T=30,N="...",q=800,K=16,nt=1,it=2,tt=3,$=1/0,ot=9007199254740991,wt=17976931348623157e292,Mt=NaN,Et=4294967295,ce=Et-1,ne=Et>>>1,He=[["ary",C],["bind",x],["bindKey",_],["curry",I],["curryRight",D],["flip",M],["partial",F],["partialRight",B],["rearg",O]],be="[object Arguments]",at="[object Array]",dt="[object AsyncFunction]",Pt="[object Boolean]",$t="[object Date]",Bt="[object DOMException]",pe="[object Error]",qe="[object Function]",ge="[object GeneratorFunction]",ie="[object Map]",ye="[object Number]",re="[object Null]",Le="[object Object]",z="[object Promise]",Ze="[object Proxy]",xe="[object RegExp]",de="[object Set]",Ut="[object String]",P="[object Symbol]",E="[object Undefined]",k="[object WeakMap]",st="[object WeakSet]",ut="[object ArrayBuffer]",et="[object DataView]",zt="[object Float32Array]",gt="[object Float64Array]",Ft="[object Int8Array]",Wt="[object Int16Array]",pt="[object Int32Array]",vt="[object Uint8Array]",It="[object Uint8ClampedArray]",Ot="[object Uint16Array]",xt="[object Uint32Array]",se=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,Rt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_t=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,mt=RegExp(_t.source),ht=RegExp(Ct.source),St=/<%-([\s\S]+?)%>/g,Jt=/<%([\s\S]+?)%>/g,Fe=/<%=([\s\S]+?)%>/g,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/,ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Fs=/[\\^$.*+?()[\]{}|]/g,Ea=RegExp(Fs.source),Mr=/^\s+/,il=/\s/,ya=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ta=/\{\n\/\* \[wrapped with (.+)\] \*/,Ii=/,? & /,Os=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ba=/[()=,{}\[\]\/\s]/,Aa=/\\(\\)?/g,Wr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Bs=/\w*$/,Xr=/^[-+]0x[0-9a-f]+$/i,wa=/^0b[01]+$/i,Ra=/^\[object .+?Constructor\]$/,rl=/^0o[0-7]+$/i,sl=/^(?:0|[1-9]\d*)$/,al=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,qr=/($^)/,ol=/['\n\r\u2028\u2029\\]/g,Yr="\\ud800-\\udfff",A="\\u0300-\\u036f",X="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",J=A+X+j,Z="\\u2700-\\u27bf",yt="a-z\\xdf-\\xf6\\xf8-\\xff",Dt="\\xac\\xb1\\xd7\\xf7",Tt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Nt="\\u2000-\\u206f",Ht=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xt="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",ae=Dt+Tt+Nt+Ht,Ae="['’]",We="["+Yr+"]",Ve="["+ae+"]",we="["+J+"]",kt="\\d+",Pe="["+Z+"]",Se="["+yt+"]",xn="[^"+Yr+ae+kt+Z+yt+Xt+"]",gi="\\ud83c[\\udffb-\\udfff]",An="(?:"+we+"|"+gi+")",tr="[^"+Yr+"]",Ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ln="[\\ud800-\\udbff][\\udc00-\\udfff]",en="["+Xt+"]",cn="\\u200d",dn="(?:"+Se+"|"+xn+")",zs="(?:"+en+"|"+xn+")",xi="(?:"+Ae+"(?:d|ll|m|re|s|t|ve))?",ch="(?:"+Ae+"(?:D|LL|M|RE|S|T|VE))?",uh=An+"?",hh="["+Vt+"]?",xm="(?:"+cn+"(?:"+[tr,Ie,ln].join("|")+")"+hh+uh+")*",vm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fh=hh+uh+xm,Mm="(?:"+[Pe,Ie,ln].join("|")+")"+fh,Em="(?:"+[tr+we+"?",we,Ie,ln,We].join("|")+")",ym=RegExp(Ae,"g"),Tm=RegExp(we,"g"),ll=RegExp(gi+"(?="+gi+")|"+Em+fh,"g"),bm=RegExp([en+"?"+Se+"+"+xi+"(?="+[Ve,en,"$"].join("|")+")",zs+"+"+ch+"(?="+[Ve,en+dn,"$"].join("|")+")",en+"?"+dn+"+"+xi,en+"+"+ch,Sm,vm,kt,Mm].join("|"),"g"),Am=RegExp("["+cn+Yr+J+Vt+"]"),wm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Rm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Cm=-1,ke={};ke[zt]=ke[gt]=ke[Ft]=ke[Wt]=ke[pt]=ke[vt]=ke[It]=ke[Ot]=ke[xt]=!0,ke[be]=ke[at]=ke[ut]=ke[Pt]=ke[et]=ke[$t]=ke[pe]=ke[qe]=ke[ie]=ke[ye]=ke[Le]=ke[xe]=ke[de]=ke[Ut]=ke[k]=!1;var Ge={};Ge[be]=Ge[at]=Ge[ut]=Ge[et]=Ge[Pt]=Ge[$t]=Ge[zt]=Ge[gt]=Ge[Ft]=Ge[Wt]=Ge[pt]=Ge[ie]=Ge[ye]=Ge[Le]=Ge[xe]=Ge[de]=Ge[Ut]=Ge[P]=Ge[vt]=Ge[It]=Ge[Ot]=Ge[xt]=!0,Ge[pe]=Ge[qe]=Ge[k]=!1;var Pm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Dm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Im={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Um=parseFloat,Nm=parseInt,dh=typeof zo=="object"&&zo&&zo.Object===Object&&zo,Fm=typeof self=="object"&&self&&self.Object===Object&&self,pn=dh||Fm||Function("return this")(),cl=t&&!t.nodeType&&t,Er=cl&&!0&&r&&!r.nodeType&&r,ph=Er&&Er.exports===cl,ul=ph&&dh.process,$n=(function(){try{var W=Er&&Er.require&&Er.require("util").types;return W||ul&&ul.binding&&ul.binding("util")}catch{}})(),mh=$n&&$n.isArrayBuffer,_h=$n&&$n.isDate,gh=$n&&$n.isMap,xh=$n&&$n.isRegExp,vh=$n&&$n.isSet,Sh=$n&&$n.isTypedArray;function Gn(W,rt,Q){switch(Q.length){case 0:return W.call(rt);case 1:return W.call(rt,Q[0]);case 2:return W.call(rt,Q[0],Q[1]);case 3:return W.call(rt,Q[0],Q[1],Q[2])}return W.apply(rt,Q)}function Om(W,rt,Q,Lt){for(var Qt=-1,De=W==null?0:W.length;++Qt<De;){var nn=W[Qt];rt(Lt,nn,Q(nn),W)}return Lt}function Jn(W,rt){for(var Q=-1,Lt=W==null?0:W.length;++Q<Lt&&rt(W[Q],Q,W)!==!1;);return W}function Bm(W,rt){for(var Q=W==null?0:W.length;Q--&&rt(W[Q],Q,W)!==!1;);return W}function Mh(W,rt){for(var Q=-1,Lt=W==null?0:W.length;++Q<Lt;)if(!rt(W[Q],Q,W))return!1;return!0}function er(W,rt){for(var Q=-1,Lt=W==null?0:W.length,Qt=0,De=[];++Q<Lt;){var nn=W[Q];rt(nn,Q,W)&&(De[Qt++]=nn)}return De}function Ca(W,rt){var Q=W==null?0:W.length;return!!Q&&Kr(W,rt,0)>-1}function hl(W,rt,Q){for(var Lt=-1,Qt=W==null?0:W.length;++Lt<Qt;)if(Q(rt,W[Lt]))return!0;return!1}function Xe(W,rt){for(var Q=-1,Lt=W==null?0:W.length,Qt=Array(Lt);++Q<Lt;)Qt[Q]=rt(W[Q],Q,W);return Qt}function nr(W,rt){for(var Q=-1,Lt=rt.length,Qt=W.length;++Q<Lt;)W[Qt+Q]=rt[Q];return W}function fl(W,rt,Q,Lt){var Qt=-1,De=W==null?0:W.length;for(Lt&&De&&(Q=W[++Qt]);++Qt<De;)Q=rt(Q,W[Qt],Qt,W);return Q}function zm(W,rt,Q,Lt){var Qt=W==null?0:W.length;for(Lt&&Qt&&(Q=W[--Qt]);Qt--;)Q=rt(Q,W[Qt],Qt,W);return Q}function dl(W,rt){for(var Q=-1,Lt=W==null?0:W.length;++Q<Lt;)if(rt(W[Q],Q,W))return!0;return!1}var Gm=pl("length");function Hm(W){return W.split("")}function Vm(W){return W.match(Os)||[]}function Eh(W,rt,Q){var Lt;return Q(W,function(Qt,De,nn){if(rt(Qt,De,nn))return Lt=De,!1}),Lt}function Pa(W,rt,Q,Lt){for(var Qt=W.length,De=Q+(Lt?1:-1);Lt?De--:++De<Qt;)if(rt(W[De],De,W))return De;return-1}function Kr(W,rt,Q){return rt===rt?t_(W,rt,Q):Pa(W,yh,Q)}function km(W,rt,Q,Lt){for(var Qt=Q-1,De=W.length;++Qt<De;)if(Lt(W[Qt],rt))return Qt;return-1}function yh(W){return W!==W}function Th(W,rt){var Q=W==null?0:W.length;return Q?_l(W,rt)/Q:Mt}function pl(W){return function(rt){return rt==null?e:rt[W]}}function ml(W){return function(rt){return W==null?e:W[rt]}}function bh(W,rt,Q,Lt,Qt){return Qt(W,function(De,nn,ze){Q=Lt?(Lt=!1,De):rt(Q,De,nn,ze)}),Q}function Wm(W,rt){var Q=W.length;for(W.sort(rt);Q--;)W[Q]=W[Q].value;return W}function _l(W,rt){for(var Q,Lt=-1,Qt=W.length;++Lt<Qt;){var De=rt(W[Lt]);De!==e&&(Q=Q===e?De:Q+De)}return Q}function gl(W,rt){for(var Q=-1,Lt=Array(W);++Q<W;)Lt[Q]=rt(Q);return Lt}function Xm(W,rt){return Xe(rt,function(Q){return[Q,W[Q]]})}function Ah(W){return W&&W.slice(0,Ph(W)+1).replace(Mr,"")}function Hn(W){return function(rt){return W(rt)}}function xl(W,rt){return Xe(rt,function(Q){return W[Q]})}function Gs(W,rt){return W.has(rt)}function wh(W,rt){for(var Q=-1,Lt=W.length;++Q<Lt&&Kr(rt,W[Q],0)>-1;);return Q}function Rh(W,rt){for(var Q=W.length;Q--&&Kr(rt,W[Q],0)>-1;);return Q}function qm(W,rt){for(var Q=W.length,Lt=0;Q--;)W[Q]===rt&&++Lt;return Lt}var Ym=ml(Pm),Km=ml(Dm);function Zm(W){return"\\"+Im[W]}function $m(W,rt){return W==null?e:W[rt]}function Zr(W){return Am.test(W)}function Jm(W){return wm.test(W)}function jm(W){for(var rt,Q=[];!(rt=W.next()).done;)Q.push(rt.value);return Q}function vl(W){var rt=-1,Q=Array(W.size);return W.forEach(function(Lt,Qt){Q[++rt]=[Qt,Lt]}),Q}function Ch(W,rt){return function(Q){return W(rt(Q))}}function ir(W,rt){for(var Q=-1,Lt=W.length,Qt=0,De=[];++Q<Lt;){var nn=W[Q];(nn===rt||nn===p)&&(W[Q]=p,De[Qt++]=Q)}return De}function Da(W){var rt=-1,Q=Array(W.size);return W.forEach(function(Lt){Q[++rt]=Lt}),Q}function Qm(W){var rt=-1,Q=Array(W.size);return W.forEach(function(Lt){Q[++rt]=[Lt,Lt]}),Q}function t_(W,rt,Q){for(var Lt=Q-1,Qt=W.length;++Lt<Qt;)if(W[Lt]===rt)return Lt;return-1}function e_(W,rt,Q){for(var Lt=Q+1;Lt--;)if(W[Lt]===rt)return Lt;return Lt}function $r(W){return Zr(W)?i_(W):Gm(W)}function oi(W){return Zr(W)?r_(W):Hm(W)}function Ph(W){for(var rt=W.length;rt--&&il.test(W.charAt(rt)););return rt}var n_=ml(Lm);function i_(W){for(var rt=ll.lastIndex=0;ll.test(W);)++rt;return rt}function r_(W){return W.match(ll)||[]}function s_(W){return W.match(bm)||[]}var a_=(function W(rt){rt=rt==null?pn:Jr.defaults(pn.Object(),rt,Jr.pick(pn,Rm));var Q=rt.Array,Lt=rt.Date,Qt=rt.Error,De=rt.Function,nn=rt.Math,ze=rt.Object,Sl=rt.RegExp,o_=rt.String,jn=rt.TypeError,La=Q.prototype,l_=De.prototype,jr=ze.prototype,Ia=rt["__core-js_shared__"],Ua=l_.toString,Ue=jr.hasOwnProperty,c_=0,Dh=(function(){var n=/[^.]+$/.exec(Ia&&Ia.keys&&Ia.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Na=jr.toString,u_=Ua.call(ze),h_=pn._,f_=Sl("^"+Ua.call(Ue).replace(Fs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fa=ph?rt.Buffer:e,rr=rt.Symbol,Oa=rt.Uint8Array,Lh=Fa?Fa.allocUnsafe:e,Ba=Ch(ze.getPrototypeOf,ze),Ih=ze.create,Uh=jr.propertyIsEnumerable,za=La.splice,Nh=rr?rr.isConcatSpreadable:e,Hs=rr?rr.iterator:e,yr=rr?rr.toStringTag:e,Ga=(function(){try{var n=Rr(ze,"defineProperty");return n({},"",{}),n}catch{}})(),d_=rt.clearTimeout!==pn.clearTimeout&&rt.clearTimeout,p_=Lt&&Lt.now!==pn.Date.now&&Lt.now,m_=rt.setTimeout!==pn.setTimeout&&rt.setTimeout,Ha=nn.ceil,Va=nn.floor,Ml=ze.getOwnPropertySymbols,__=Fa?Fa.isBuffer:e,Fh=rt.isFinite,g_=La.join,x_=Ch(ze.keys,ze),rn=nn.max,vn=nn.min,v_=Lt.now,S_=rt.parseInt,Oh=nn.random,M_=La.reverse,El=Rr(rt,"DataView"),Vs=Rr(rt,"Map"),yl=Rr(rt,"Promise"),Qr=Rr(rt,"Set"),ks=Rr(rt,"WeakMap"),Ws=Rr(ze,"create"),ka=ks&&new ks,ts={},E_=Cr(El),y_=Cr(Vs),T_=Cr(yl),b_=Cr(Qr),A_=Cr(ks),Wa=rr?rr.prototype:e,Xs=Wa?Wa.valueOf:e,Bh=Wa?Wa.toString:e;function b(n){if($e(n)&&!te(n)&&!(n instanceof ve)){if(n instanceof Qn)return n;if(Ue.call(n,"__wrapped__"))return Gf(n)}return new Qn(n)}var es=(function(){function n(){}return function(s){if(!Ye(s))return{};if(Ih)return Ih(s);n.prototype=s;var l=new n;return n.prototype=e,l}})();function Xa(){}function Qn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}b.templateSettings={escape:St,evaluate:Jt,interpolate:Fe,variable:"",imports:{_:b}},b.prototype=Xa.prototype,b.prototype.constructor=b,Qn.prototype=es(Xa.prototype),Qn.prototype.constructor=Qn;function ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Et,this.__views__=[]}function w_(){var n=new ve(this.__wrapped__);return n.__actions__=Ln(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ln(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ln(this.__views__),n}function R_(){if(this.__filtered__){var n=new ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function C_(){var n=this.__wrapped__.value(),s=this.__dir__,l=te(n),h=s<0,S=l?n.length:0,R=Hg(0,S,this.__views__),U=R.start,G=R.end,Y=G-U,lt=h?G:U-1,ct=this.__iteratees__,ft=ct.length,bt=0,Gt=vn(Y,this.__takeCount__);if(!l||!h&&S==Y&&Gt==Y)return cf(n,this.__actions__);var Yt=[];t:for(;Y--&&bt<Gt;){lt+=s;for(var ue=-1,Kt=n[lt];++ue<ft;){var me=ct[ue],Me=me.iteratee,Wn=me.type,Cn=Me(Kt);if(Wn==it)Kt=Cn;else if(!Cn){if(Wn==nt)continue t;break t}}Yt[bt++]=Kt}return Yt}ve.prototype=es(Xa.prototype),ve.prototype.constructor=ve;function Tr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function P_(){this.__data__=Ws?Ws(null):{},this.size=0}function D_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function L_(n){var s=this.__data__;if(Ws){var l=s[n];return l===d?e:l}return Ue.call(s,n)?s[n]:e}function I_(n){var s=this.__data__;return Ws?s[n]!==e:Ue.call(s,n)}function U_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ws&&s===e?d:s,this}Tr.prototype.clear=P_,Tr.prototype.delete=D_,Tr.prototype.get=L_,Tr.prototype.has=I_,Tr.prototype.set=U_;function Ui(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function N_(){this.__data__=[],this.size=0}function F_(n){var s=this.__data__,l=qa(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():za.call(s,l,1),--this.size,!0}function O_(n){var s=this.__data__,l=qa(s,n);return l<0?e:s[l][1]}function B_(n){return qa(this.__data__,n)>-1}function z_(n,s){var l=this.__data__,h=qa(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}Ui.prototype.clear=N_,Ui.prototype.delete=F_,Ui.prototype.get=O_,Ui.prototype.has=B_,Ui.prototype.set=z_;function Ni(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function G_(){this.size=0,this.__data__={hash:new Tr,map:new(Vs||Ui),string:new Tr}}function H_(n){var s=ro(this,n).delete(n);return this.size-=s?1:0,s}function V_(n){return ro(this,n).get(n)}function k_(n){return ro(this,n).has(n)}function W_(n,s){var l=ro(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}Ni.prototype.clear=G_,Ni.prototype.delete=H_,Ni.prototype.get=V_,Ni.prototype.has=k_,Ni.prototype.set=W_;function br(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ni;++s<l;)this.add(n[s])}function X_(n){return this.__data__.set(n,d),this}function q_(n){return this.__data__.has(n)}br.prototype.add=br.prototype.push=X_,br.prototype.has=q_;function li(n){var s=this.__data__=new Ui(n);this.size=s.size}function Y_(){this.__data__=new Ui,this.size=0}function K_(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Z_(n){return this.__data__.get(n)}function $_(n){return this.__data__.has(n)}function J_(n,s){var l=this.__data__;if(l instanceof Ui){var h=l.__data__;if(!Vs||h.length<a-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ni(h)}return l.set(n,s),this.size=l.size,this}li.prototype.clear=Y_,li.prototype.delete=K_,li.prototype.get=Z_,li.prototype.has=$_,li.prototype.set=J_;function zh(n,s){var l=te(n),h=!l&&Pr(n),S=!l&&!h&&cr(n),R=!l&&!h&&!S&&ss(n),U=l||h||S||R,G=U?gl(n.length,o_):[],Y=G.length;for(var lt in n)(s||Ue.call(n,lt))&&!(U&&(lt=="length"||S&&(lt=="offset"||lt=="parent")||R&&(lt=="buffer"||lt=="byteLength"||lt=="byteOffset")||zi(lt,Y)))&&G.push(lt);return G}function Gh(n){var s=n.length;return s?n[Ul(0,s-1)]:e}function j_(n,s){return so(Ln(n),Ar(s,0,n.length))}function Q_(n){return so(Ln(n))}function Tl(n,s,l){(l!==e&&!ci(n[s],l)||l===e&&!(s in n))&&Fi(n,s,l)}function qs(n,s,l){var h=n[s];(!(Ue.call(n,s)&&ci(h,l))||l===e&&!(s in n))&&Fi(n,s,l)}function qa(n,s){for(var l=n.length;l--;)if(ci(n[l][0],s))return l;return-1}function tg(n,s,l,h){return sr(n,function(S,R,U){s(h,S,l(S),U)}),h}function Hh(n,s){return n&&Si(s,un(s),n)}function eg(n,s){return n&&Si(s,Un(s),n)}function Fi(n,s,l){s=="__proto__"&&Ga?Ga(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function bl(n,s){for(var l=-1,h=s.length,S=Q(h),R=n==null;++l<h;)S[l]=R?e:sc(n,s[l]);return S}function Ar(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function ti(n,s,l,h,S,R){var U,G=s&m,Y=s&g,lt=s&v;if(l&&(U=S?l(n,h,S,R):l(n)),U!==e)return U;if(!Ye(n))return n;var ct=te(n);if(ct){if(U=kg(n),!G)return Ln(n,U)}else{var ft=Sn(n),bt=ft==qe||ft==ge;if(cr(n))return ff(n,G);if(ft==Le||ft==be||bt&&!S){if(U=Y||bt?{}:Df(n),!G)return Y?Lg(n,eg(U,n)):Dg(n,Hh(U,n))}else{if(!Ge[ft])return S?n:{};U=Wg(n,ft,G)}}R||(R=new li);var Gt=R.get(n);if(Gt)return Gt;R.set(n,U),ad(n)?n.forEach(function(Kt){U.add(ti(Kt,s,l,Kt,n,R))}):rd(n)&&n.forEach(function(Kt,me){U.set(me,ti(Kt,s,l,me,n,R))});var Yt=lt?Y?Xl:Wl:Y?Un:un,ue=ct?e:Yt(n);return Jn(ue||n,function(Kt,me){ue&&(me=Kt,Kt=n[me]),qs(U,me,ti(Kt,s,l,me,n,R))}),U}function ng(n){var s=un(n);return function(l){return Vh(l,n,s)}}function Vh(n,s,l){var h=l.length;if(n==null)return!h;for(n=ze(n);h--;){var S=l[h],R=s[S],U=n[S];if(U===e&&!(S in n)||!R(U))return!1}return!0}function kh(n,s,l){if(typeof n!="function")throw new jn(c);return Qs(function(){n.apply(e,l)},s)}function Ys(n,s,l,h){var S=-1,R=Ca,U=!0,G=n.length,Y=[],lt=s.length;if(!G)return Y;l&&(s=Xe(s,Hn(l))),h?(R=hl,U=!1):s.length>=a&&(R=Gs,U=!1,s=new br(s));t:for(;++S<G;){var ct=n[S],ft=l==null?ct:l(ct);if(ct=h||ct!==0?ct:0,U&&ft===ft){for(var bt=lt;bt--;)if(s[bt]===ft)continue t;Y.push(ct)}else R(s,ft,h)||Y.push(ct)}return Y}var sr=gf(vi),Wh=gf(wl,!0);function ig(n,s){var l=!0;return sr(n,function(h,S,R){return l=!!s(h,S,R),l}),l}function Ya(n,s,l){for(var h=-1,S=n.length;++h<S;){var R=n[h],U=s(R);if(U!=null&&(G===e?U===U&&!kn(U):l(U,G)))var G=U,Y=R}return Y}function rg(n,s,l,h){var S=n.length;for(l=oe(l),l<0&&(l=-l>S?0:S+l),h=h===e||h>S?S:oe(h),h<0&&(h+=S),h=l>h?0:ld(h);l<h;)n[l++]=s;return n}function Xh(n,s){var l=[];return sr(n,function(h,S,R){s(h,S,R)&&l.push(h)}),l}function mn(n,s,l,h,S){var R=-1,U=n.length;for(l||(l=qg),S||(S=[]);++R<U;){var G=n[R];s>0&&l(G)?s>1?mn(G,s-1,l,h,S):nr(S,G):h||(S[S.length]=G)}return S}var Al=xf(),qh=xf(!0);function vi(n,s){return n&&Al(n,s,un)}function wl(n,s){return n&&qh(n,s,un)}function Ka(n,s){return er(s,function(l){return Gi(n[l])})}function wr(n,s){s=or(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[Mi(s[l++])];return l&&l==h?n:e}function Yh(n,s,l){var h=s(n);return te(n)?h:nr(h,l(n))}function wn(n){return n==null?n===e?E:re:yr&&yr in ze(n)?Gg(n):Qg(n)}function Rl(n,s){return n>s}function sg(n,s){return n!=null&&Ue.call(n,s)}function ag(n,s){return n!=null&&s in ze(n)}function og(n,s,l){return n>=vn(s,l)&&n<rn(s,l)}function Cl(n,s,l){for(var h=l?hl:Ca,S=n[0].length,R=n.length,U=R,G=Q(R),Y=1/0,lt=[];U--;){var ct=n[U];U&&s&&(ct=Xe(ct,Hn(s))),Y=vn(ct.length,Y),G[U]=!l&&(s||S>=120&&ct.length>=120)?new br(U&&ct):e}ct=n[0];var ft=-1,bt=G[0];t:for(;++ft<S&&lt.length<Y;){var Gt=ct[ft],Yt=s?s(Gt):Gt;if(Gt=l||Gt!==0?Gt:0,!(bt?Gs(bt,Yt):h(lt,Yt,l))){for(U=R;--U;){var ue=G[U];if(!(ue?Gs(ue,Yt):h(n[U],Yt,l)))continue t}bt&&bt.push(Yt),lt.push(Gt)}}return lt}function lg(n,s,l,h){return vi(n,function(S,R,U){s(h,l(S),R,U)}),h}function Ks(n,s,l){s=or(s,n),n=Nf(n,s);var h=n==null?n:n[Mi(ni(s))];return h==null?e:Gn(h,n,l)}function Kh(n){return $e(n)&&wn(n)==be}function cg(n){return $e(n)&&wn(n)==ut}function ug(n){return $e(n)&&wn(n)==$t}function Zs(n,s,l,h,S){return n===s?!0:n==null||s==null||!$e(n)&&!$e(s)?n!==n&&s!==s:hg(n,s,l,h,Zs,S)}function hg(n,s,l,h,S,R){var U=te(n),G=te(s),Y=U?at:Sn(n),lt=G?at:Sn(s);Y=Y==be?Le:Y,lt=lt==be?Le:lt;var ct=Y==Le,ft=lt==Le,bt=Y==lt;if(bt&&cr(n)){if(!cr(s))return!1;U=!0,ct=!1}if(bt&&!ct)return R||(R=new li),U||ss(n)?Rf(n,s,l,h,S,R):Bg(n,s,Y,l,h,S,R);if(!(l&y)){var Gt=ct&&Ue.call(n,"__wrapped__"),Yt=ft&&Ue.call(s,"__wrapped__");if(Gt||Yt){var ue=Gt?n.value():n,Kt=Yt?s.value():s;return R||(R=new li),S(ue,Kt,l,h,R)}}return bt?(R||(R=new li),zg(n,s,l,h,S,R)):!1}function fg(n){return $e(n)&&Sn(n)==ie}function Pl(n,s,l,h){var S=l.length,R=S,U=!h;if(n==null)return!R;for(n=ze(n);S--;){var G=l[S];if(U&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++S<R;){G=l[S];var Y=G[0],lt=n[Y],ct=G[1];if(U&&G[2]){if(lt===e&&!(Y in n))return!1}else{var ft=new li;if(h)var bt=h(lt,ct,Y,n,s,ft);if(!(bt===e?Zs(ct,lt,y|w,h,ft):bt))return!1}}return!0}function Zh(n){if(!Ye(n)||Kg(n))return!1;var s=Gi(n)?f_:Ra;return s.test(Cr(n))}function dg(n){return $e(n)&&wn(n)==xe}function pg(n){return $e(n)&&Sn(n)==de}function mg(n){return $e(n)&&ho(n.length)&&!!ke[wn(n)]}function $h(n){return typeof n=="function"?n:n==null?Nn:typeof n=="object"?te(n)?Qh(n[0],n[1]):jh(n):vd(n)}function Dl(n){if(!js(n))return x_(n);var s=[];for(var l in ze(n))Ue.call(n,l)&&l!="constructor"&&s.push(l);return s}function _g(n){if(!Ye(n))return jg(n);var s=js(n),l=[];for(var h in n)h=="constructor"&&(s||!Ue.call(n,h))||l.push(h);return l}function Ll(n,s){return n<s}function Jh(n,s){var l=-1,h=In(n)?Q(n.length):[];return sr(n,function(S,R,U){h[++l]=s(S,R,U)}),h}function jh(n){var s=Yl(n);return s.length==1&&s[0][2]?If(s[0][0],s[0][1]):function(l){return l===n||Pl(l,n,s)}}function Qh(n,s){return Zl(n)&&Lf(s)?If(Mi(n),s):function(l){var h=sc(l,n);return h===e&&h===s?ac(l,n):Zs(s,h,y|w)}}function Za(n,s,l,h,S){n!==s&&Al(s,function(R,U){if(S||(S=new li),Ye(R))gg(n,s,U,l,Za,h,S);else{var G=h?h(Jl(n,U),R,U+"",n,s,S):e;G===e&&(G=R),Tl(n,U,G)}},Un)}function gg(n,s,l,h,S,R,U){var G=Jl(n,l),Y=Jl(s,l),lt=U.get(Y);if(lt){Tl(n,l,lt);return}var ct=R?R(G,Y,l+"",n,s,U):e,ft=ct===e;if(ft){var bt=te(Y),Gt=!bt&&cr(Y),Yt=!bt&&!Gt&&ss(Y);ct=Y,bt||Gt||Yt?te(G)?ct=G:je(G)?ct=Ln(G):Gt?(ft=!1,ct=ff(Y,!0)):Yt?(ft=!1,ct=df(Y,!0)):ct=[]:ta(Y)||Pr(Y)?(ct=G,Pr(G)?ct=cd(G):(!Ye(G)||Gi(G))&&(ct=Df(Y))):ft=!1}ft&&(U.set(Y,ct),S(ct,Y,h,R,U),U.delete(Y)),Tl(n,l,ct)}function tf(n,s){var l=n.length;if(l)return s+=s<0?l:0,zi(s,l)?n[s]:e}function ef(n,s,l){s.length?s=Xe(s,function(R){return te(R)?function(U){return wr(U,R.length===1?R[0]:R)}:R}):s=[Nn];var h=-1;s=Xe(s,Hn(qt()));var S=Jh(n,function(R,U,G){var Y=Xe(s,function(lt){return lt(R)});return{criteria:Y,index:++h,value:R}});return Wm(S,function(R,U){return Pg(R,U,l)})}function xg(n,s){return nf(n,s,function(l,h){return ac(n,h)})}function nf(n,s,l){for(var h=-1,S=s.length,R={};++h<S;){var U=s[h],G=wr(n,U);l(G,U)&&$s(R,or(U,n),G)}return R}function vg(n){return function(s){return wr(s,n)}}function Il(n,s,l,h){var S=h?km:Kr,R=-1,U=s.length,G=n;for(n===s&&(s=Ln(s)),l&&(G=Xe(n,Hn(l)));++R<U;)for(var Y=0,lt=s[R],ct=l?l(lt):lt;(Y=S(G,ct,Y,h))>-1;)G!==n&&za.call(G,Y,1),za.call(n,Y,1);return n}function rf(n,s){for(var l=n?s.length:0,h=l-1;l--;){var S=s[l];if(l==h||S!==R){var R=S;zi(S)?za.call(n,S,1):Ol(n,S)}}return n}function Ul(n,s){return n+Va(Oh()*(s-n+1))}function Sg(n,s,l,h){for(var S=-1,R=rn(Ha((s-n)/(l||1)),0),U=Q(R);R--;)U[h?R:++S]=n,n+=l;return U}function Nl(n,s){var l="";if(!n||s<1||s>ot)return l;do s%2&&(l+=n),s=Va(s/2),s&&(n+=n);while(s);return l}function fe(n,s){return jl(Uf(n,s,Nn),n+"")}function Mg(n){return Gh(as(n))}function Eg(n,s){var l=as(n);return so(l,Ar(s,0,l.length))}function $s(n,s,l,h){if(!Ye(n))return n;s=or(s,n);for(var S=-1,R=s.length,U=R-1,G=n;G!=null&&++S<R;){var Y=Mi(s[S]),lt=l;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return n;if(S!=U){var ct=G[Y];lt=h?h(ct,Y,G):e,lt===e&&(lt=Ye(ct)?ct:zi(s[S+1])?[]:{})}qs(G,Y,lt),G=G[Y]}return n}var sf=ka?function(n,s){return ka.set(n,s),n}:Nn,yg=Ga?function(n,s){return Ga(n,"toString",{configurable:!0,enumerable:!1,value:lc(s),writable:!0})}:Nn;function Tg(n){return so(as(n))}function ei(n,s,l){var h=-1,S=n.length;s<0&&(s=-s>S?0:S+s),l=l>S?S:l,l<0&&(l+=S),S=s>l?0:l-s>>>0,s>>>=0;for(var R=Q(S);++h<S;)R[h]=n[h+s];return R}function bg(n,s){var l;return sr(n,function(h,S,R){return l=s(h,S,R),!l}),!!l}function $a(n,s,l){var h=0,S=n==null?h:n.length;if(typeof s=="number"&&s===s&&S<=ne){for(;h<S;){var R=h+S>>>1,U=n[R];U!==null&&!kn(U)&&(l?U<=s:U<s)?h=R+1:S=R}return S}return Fl(n,s,Nn,l)}function Fl(n,s,l,h){var S=0,R=n==null?0:n.length;if(R===0)return 0;s=l(s);for(var U=s!==s,G=s===null,Y=kn(s),lt=s===e;S<R;){var ct=Va((S+R)/2),ft=l(n[ct]),bt=ft!==e,Gt=ft===null,Yt=ft===ft,ue=kn(ft);if(U)var Kt=h||Yt;else lt?Kt=Yt&&(h||bt):G?Kt=Yt&&bt&&(h||!Gt):Y?Kt=Yt&&bt&&!Gt&&(h||!ue):Gt||ue?Kt=!1:Kt=h?ft<=s:ft<s;Kt?S=ct+1:R=ct}return vn(R,ce)}function af(n,s){for(var l=-1,h=n.length,S=0,R=[];++l<h;){var U=n[l],G=s?s(U):U;if(!l||!ci(G,Y)){var Y=G;R[S++]=U===0?0:U}}return R}function of(n){return typeof n=="number"?n:kn(n)?Mt:+n}function Vn(n){if(typeof n=="string")return n;if(te(n))return Xe(n,Vn)+"";if(kn(n))return Bh?Bh.call(n):"";var s=n+"";return s=="0"&&1/n==-$?"-0":s}function ar(n,s,l){var h=-1,S=Ca,R=n.length,U=!0,G=[],Y=G;if(l)U=!1,S=hl;else if(R>=a){var lt=s?null:Fg(n);if(lt)return Da(lt);U=!1,S=Gs,Y=new br}else Y=s?[]:G;t:for(;++h<R;){var ct=n[h],ft=s?s(ct):ct;if(ct=l||ct!==0?ct:0,U&&ft===ft){for(var bt=Y.length;bt--;)if(Y[bt]===ft)continue t;s&&Y.push(ft),G.push(ct)}else S(Y,ft,l)||(Y!==G&&Y.push(ft),G.push(ct))}return G}function Ol(n,s){s=or(s,n);var l=-1,h=s.length;if(!h)return!0;for(var S=n==null||typeof n!="object"&&typeof n!="function";++l<h;){var R=s[l];if(typeof R=="string"){if(R==="__proto__"&&!Ue.call(n,"__proto__"))return!1;if(R==="constructor"&&l+1<h&&typeof s[l+1]=="string"&&s[l+1]==="prototype"){if(S&&l===0)continue;return!1}}}var U=Nf(n,s);return U==null||delete U[Mi(ni(s))]}function lf(n,s,l,h){return $s(n,s,l(wr(n,s)),h)}function Ja(n,s,l,h){for(var S=n.length,R=h?S:-1;(h?R--:++R<S)&&s(n[R],R,n););return l?ei(n,h?0:R,h?R+1:S):ei(n,h?R+1:0,h?S:R)}function cf(n,s){var l=n;return l instanceof ve&&(l=l.value()),fl(s,function(h,S){return S.func.apply(S.thisArg,nr([h],S.args))},l)}function Bl(n,s,l){var h=n.length;if(h<2)return h?ar(n[0]):[];for(var S=-1,R=Q(h);++S<h;)for(var U=n[S],G=-1;++G<h;)G!=S&&(R[S]=Ys(R[S]||U,n[G],s,l));return ar(mn(R,1),s,l)}function uf(n,s,l){for(var h=-1,S=n.length,R=s.length,U={};++h<S;){var G=h<R?s[h]:e;l(U,n[h],G)}return U}function zl(n){return je(n)?n:[]}function Gl(n){return typeof n=="function"?n:Nn}function or(n,s){return te(n)?n:Zl(n,s)?[n]:zf(Ne(n))}var Ag=fe;function lr(n,s,l){var h=n.length;return l=l===e?h:l,!s&&l>=h?n:ei(n,s,l)}var hf=d_||function(n){return pn.clearTimeout(n)};function ff(n,s){if(s)return n.slice();var l=n.length,h=Lh?Lh(l):new n.constructor(l);return n.copy(h),h}function Hl(n){var s=new n.constructor(n.byteLength);return new Oa(s).set(new Oa(n)),s}function wg(n,s){var l=s?Hl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Rg(n){var s=new n.constructor(n.source,Bs.exec(n));return s.lastIndex=n.lastIndex,s}function Cg(n){return Xs?ze(Xs.call(n)):{}}function df(n,s){var l=s?Hl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function pf(n,s){if(n!==s){var l=n!==e,h=n===null,S=n===n,R=kn(n),U=s!==e,G=s===null,Y=s===s,lt=kn(s);if(!G&&!lt&&!R&&n>s||R&&U&&Y&&!G&&!lt||h&&U&&Y||!l&&Y||!S)return 1;if(!h&&!R&&!lt&&n<s||lt&&l&&S&&!h&&!R||G&&l&&S||!U&&S||!Y)return-1}return 0}function Pg(n,s,l){for(var h=-1,S=n.criteria,R=s.criteria,U=S.length,G=l.length;++h<U;){var Y=pf(S[h],R[h]);if(Y){if(h>=G)return Y;var lt=l[h];return Y*(lt=="desc"?-1:1)}}return n.index-s.index}function mf(n,s,l,h){for(var S=-1,R=n.length,U=l.length,G=-1,Y=s.length,lt=rn(R-U,0),ct=Q(Y+lt),ft=!h;++G<Y;)ct[G]=s[G];for(;++S<U;)(ft||S<R)&&(ct[l[S]]=n[S]);for(;lt--;)ct[G++]=n[S++];return ct}function _f(n,s,l,h){for(var S=-1,R=n.length,U=-1,G=l.length,Y=-1,lt=s.length,ct=rn(R-G,0),ft=Q(ct+lt),bt=!h;++S<ct;)ft[S]=n[S];for(var Gt=S;++Y<lt;)ft[Gt+Y]=s[Y];for(;++U<G;)(bt||S<R)&&(ft[Gt+l[U]]=n[S++]);return ft}function Ln(n,s){var l=-1,h=n.length;for(s||(s=Q(h));++l<h;)s[l]=n[l];return s}function Si(n,s,l,h){var S=!l;l||(l={});for(var R=-1,U=s.length;++R<U;){var G=s[R],Y=h?h(l[G],n[G],G,l,n):e;Y===e&&(Y=n[G]),S?Fi(l,G,Y):qs(l,G,Y)}return l}function Dg(n,s){return Si(n,Kl(n),s)}function Lg(n,s){return Si(n,Cf(n),s)}function ja(n,s){return function(l,h){var S=te(l)?Om:tg,R=s?s():{};return S(l,n,qt(h,2),R)}}function ns(n){return fe(function(s,l){var h=-1,S=l.length,R=S>1?l[S-1]:e,U=S>2?l[2]:e;for(R=n.length>3&&typeof R=="function"?(S--,R):e,U&&Rn(l[0],l[1],U)&&(R=S<3?e:R,S=1),s=ze(s);++h<S;){var G=l[h];G&&n(s,G,h,R)}return s})}function gf(n,s){return function(l,h){if(l==null)return l;if(!In(l))return n(l,h);for(var S=l.length,R=s?S:-1,U=ze(l);(s?R--:++R<S)&&h(U[R],R,U)!==!1;);return l}}function xf(n){return function(s,l,h){for(var S=-1,R=ze(s),U=h(s),G=U.length;G--;){var Y=U[n?G:++S];if(l(R[Y],Y,R)===!1)break}return s}}function Ig(n,s,l){var h=s&x,S=Js(n);function R(){var U=this&&this!==pn&&this instanceof R?S:n;return U.apply(h?l:this,arguments)}return R}function vf(n){return function(s){s=Ne(s);var l=Zr(s)?oi(s):e,h=l?l[0]:s.charAt(0),S=l?lr(l,1).join(""):s.slice(1);return h[n]()+S}}function is(n){return function(s){return fl(gd(_d(s).replace(ym,"")),n,"")}}function Js(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=es(n.prototype),h=n.apply(l,s);return Ye(h)?h:l}}function Ug(n,s,l){var h=Js(n);function S(){for(var R=arguments.length,U=Q(R),G=R,Y=rs(S);G--;)U[G]=arguments[G];var lt=R<3&&U[0]!==Y&&U[R-1]!==Y?[]:ir(U,Y);if(R-=lt.length,R<l)return Tf(n,s,Qa,S.placeholder,e,U,lt,e,e,l-R);var ct=this&&this!==pn&&this instanceof S?h:n;return Gn(ct,this,U)}return S}function Sf(n){return function(s,l,h){var S=ze(s);if(!In(s)){var R=qt(l,3);s=un(s),l=function(G){return R(S[G],G,S)}}var U=n(s,l,h);return U>-1?S[R?s[U]:U]:e}}function Mf(n){return Bi(function(s){var l=s.length,h=l,S=Qn.prototype.thru;for(n&&s.reverse();h--;){var R=s[h];if(typeof R!="function")throw new jn(c);if(S&&!U&&io(R)=="wrapper")var U=new Qn([],!0)}for(h=U?h:l;++h<l;){R=s[h];var G=io(R),Y=G=="wrapper"?ql(R):e;Y&&$l(Y[0])&&Y[1]==(C|I|F|O)&&!Y[4].length&&Y[9]==1?U=U[io(Y[0])].apply(U,Y[3]):U=R.length==1&&$l(R)?U[G]():U.thru(R)}return function(){var lt=arguments,ct=lt[0];if(U&&lt.length==1&&te(ct))return U.plant(ct).value();for(var ft=0,bt=l?s[ft].apply(this,lt):ct;++ft<l;)bt=s[ft].call(this,bt);return bt}})}function Qa(n,s,l,h,S,R,U,G,Y,lt){var ct=s&C,ft=s&x,bt=s&_,Gt=s&(I|D),Yt=s&M,ue=bt?e:Js(n);function Kt(){for(var me=arguments.length,Me=Q(me),Wn=me;Wn--;)Me[Wn]=arguments[Wn];if(Gt)var Cn=rs(Kt),Xn=qm(Me,Cn);if(h&&(Me=mf(Me,h,S,Gt)),R&&(Me=_f(Me,R,U,Gt)),me-=Xn,Gt&&me<lt){var Qe=ir(Me,Cn);return Tf(n,s,Qa,Kt.placeholder,l,Me,Qe,G,Y,lt-me)}var ui=ft?l:this,Vi=bt?ui[n]:n;return me=Me.length,G?Me=t0(Me,G):Yt&&me>1&&Me.reverse(),ct&&Y<me&&(Me.length=Y),this&&this!==pn&&this instanceof Kt&&(Vi=ue||Js(Vi)),Vi.apply(ui,Me)}return Kt}function Ef(n,s){return function(l,h){return lg(l,n,s(h),{})}}function to(n,s){return function(l,h){var S;if(l===e&&h===e)return s;if(l!==e&&(S=l),h!==e){if(S===e)return h;typeof l=="string"||typeof h=="string"?(l=Vn(l),h=Vn(h)):(l=of(l),h=of(h)),S=n(l,h)}return S}}function Vl(n){return Bi(function(s){return s=Xe(s,Hn(qt())),fe(function(l){var h=this;return n(s,function(S){return Gn(S,h,l)})})})}function eo(n,s){s=s===e?" ":Vn(s);var l=s.length;if(l<2)return l?Nl(s,n):s;var h=Nl(s,Ha(n/$r(s)));return Zr(s)?lr(oi(h),0,n).join(""):h.slice(0,n)}function Ng(n,s,l,h){var S=s&x,R=Js(n);function U(){for(var G=-1,Y=arguments.length,lt=-1,ct=h.length,ft=Q(ct+Y),bt=this&&this!==pn&&this instanceof U?R:n;++lt<ct;)ft[lt]=h[lt];for(;Y--;)ft[lt++]=arguments[++G];return Gn(bt,S?l:this,ft)}return U}function yf(n){return function(s,l,h){return h&&typeof h!="number"&&Rn(s,l,h)&&(l=h=e),s=Hi(s),l===e?(l=s,s=0):l=Hi(l),h=h===e?s<l?1:-1:Hi(h),Sg(s,l,h,n)}}function no(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ii(s),l=ii(l)),n(s,l)}}function Tf(n,s,l,h,S,R,U,G,Y,lt){var ct=s&I,ft=ct?U:e,bt=ct?e:U,Gt=ct?R:e,Yt=ct?e:R;s|=ct?F:B,s&=~(ct?B:F),s&L||(s&=-4);var ue=[n,s,S,Gt,ft,Yt,bt,G,Y,lt],Kt=l.apply(e,ue);return $l(n)&&Ff(Kt,ue),Kt.placeholder=h,Of(Kt,n,s)}function kl(n){var s=nn[n];return function(l,h){if(l=ii(l),h=h==null?0:vn(oe(h),292),h&&Fh(l)){var S=(Ne(l)+"e").split("e"),R=s(S[0]+"e"+(+S[1]+h));return S=(Ne(R)+"e").split("e"),+(S[0]+"e"+(+S[1]-h))}return s(l)}}var Fg=Qr&&1/Da(new Qr([,-0]))[1]==$?function(n){return new Qr(n)}:hc;function bf(n){return function(s){var l=Sn(s);return l==ie?vl(s):l==de?Qm(s):Xm(s,n(s))}}function Oi(n,s,l,h,S,R,U,G){var Y=s&_;if(!Y&&typeof n!="function")throw new jn(c);var lt=h?h.length:0;if(lt||(s&=-97,h=S=e),U=U===e?U:rn(oe(U),0),G=G===e?G:oe(G),lt-=S?S.length:0,s&B){var ct=h,ft=S;h=S=e}var bt=Y?e:ql(n),Gt=[n,s,l,h,S,ct,ft,R,U,G];if(bt&&Jg(Gt,bt),n=Gt[0],s=Gt[1],l=Gt[2],h=Gt[3],S=Gt[4],G=Gt[9]=Gt[9]===e?Y?0:n.length:rn(Gt[9]-lt,0),!G&&s&(I|D)&&(s&=-25),!s||s==x)var Yt=Ig(n,s,l);else s==I||s==D?Yt=Ug(n,s,G):(s==F||s==(x|F))&&!S.length?Yt=Ng(n,s,l,h):Yt=Qa.apply(e,Gt);var ue=bt?sf:Ff;return Of(ue(Yt,Gt),n,s)}function Af(n,s,l,h){return n===e||ci(n,jr[l])&&!Ue.call(h,l)?s:n}function wf(n,s,l,h,S,R){return Ye(n)&&Ye(s)&&(R.set(s,n),Za(n,s,e,wf,R),R.delete(s)),n}function Og(n){return ta(n)?e:n}function Rf(n,s,l,h,S,R){var U=l&y,G=n.length,Y=s.length;if(G!=Y&&!(U&&Y>G))return!1;var lt=R.get(n),ct=R.get(s);if(lt&&ct)return lt==s&&ct==n;var ft=-1,bt=!0,Gt=l&w?new br:e;for(R.set(n,s),R.set(s,n);++ft<G;){var Yt=n[ft],ue=s[ft];if(h)var Kt=U?h(ue,Yt,ft,s,n,R):h(Yt,ue,ft,n,s,R);if(Kt!==e){if(Kt)continue;bt=!1;break}if(Gt){if(!dl(s,function(me,Me){if(!Gs(Gt,Me)&&(Yt===me||S(Yt,me,l,h,R)))return Gt.push(Me)})){bt=!1;break}}else if(!(Yt===ue||S(Yt,ue,l,h,R))){bt=!1;break}}return R.delete(n),R.delete(s),bt}function Bg(n,s,l,h,S,R,U){switch(l){case et:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case ut:return!(n.byteLength!=s.byteLength||!R(new Oa(n),new Oa(s)));case Pt:case $t:case ye:return ci(+n,+s);case pe:return n.name==s.name&&n.message==s.message;case xe:case Ut:return n==s+"";case ie:var G=vl;case de:var Y=h&y;if(G||(G=Da),n.size!=s.size&&!Y)return!1;var lt=U.get(n);if(lt)return lt==s;h|=w,U.set(n,s);var ct=Rf(G(n),G(s),h,S,R,U);return U.delete(n),ct;case P:if(Xs)return Xs.call(n)==Xs.call(s)}return!1}function zg(n,s,l,h,S,R){var U=l&y,G=Wl(n),Y=G.length,lt=Wl(s),ct=lt.length;if(Y!=ct&&!U)return!1;for(var ft=Y;ft--;){var bt=G[ft];if(!(U?bt in s:Ue.call(s,bt)))return!1}var Gt=R.get(n),Yt=R.get(s);if(Gt&&Yt)return Gt==s&&Yt==n;var ue=!0;R.set(n,s),R.set(s,n);for(var Kt=U;++ft<Y;){bt=G[ft];var me=n[bt],Me=s[bt];if(h)var Wn=U?h(Me,me,bt,s,n,R):h(me,Me,bt,n,s,R);if(!(Wn===e?me===Me||S(me,Me,l,h,R):Wn)){ue=!1;break}Kt||(Kt=bt=="constructor")}if(ue&&!Kt){var Cn=n.constructor,Xn=s.constructor;Cn!=Xn&&"constructor"in n&&"constructor"in s&&!(typeof Cn=="function"&&Cn instanceof Cn&&typeof Xn=="function"&&Xn instanceof Xn)&&(ue=!1)}return R.delete(n),R.delete(s),ue}function Bi(n){return jl(Uf(n,e,kf),n+"")}function Wl(n){return Yh(n,un,Kl)}function Xl(n){return Yh(n,Un,Cf)}var ql=ka?function(n){return ka.get(n)}:hc;function io(n){for(var s=n.name+"",l=ts[s],h=Ue.call(ts,s)?l.length:0;h--;){var S=l[h],R=S.func;if(R==null||R==n)return S.name}return s}function rs(n){var s=Ue.call(b,"placeholder")?b:n;return s.placeholder}function qt(){var n=b.iteratee||cc;return n=n===cc?$h:n,arguments.length?n(arguments[0],arguments[1]):n}function ro(n,s){var l=n.__data__;return Yg(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Yl(n){for(var s=un(n),l=s.length;l--;){var h=s[l],S=n[h];s[l]=[h,S,Lf(S)]}return s}function Rr(n,s){var l=$m(n,s);return Zh(l)?l:e}function Gg(n){var s=Ue.call(n,yr),l=n[yr];try{n[yr]=e;var h=!0}catch{}var S=Na.call(n);return h&&(s?n[yr]=l:delete n[yr]),S}var Kl=Ml?function(n){return n==null?[]:(n=ze(n),er(Ml(n),function(s){return Uh.call(n,s)}))}:fc,Cf=Ml?function(n){for(var s=[];n;)nr(s,Kl(n)),n=Ba(n);return s}:fc,Sn=wn;(El&&Sn(new El(new ArrayBuffer(1)))!=et||Vs&&Sn(new Vs)!=ie||yl&&Sn(yl.resolve())!=z||Qr&&Sn(new Qr)!=de||ks&&Sn(new ks)!=k)&&(Sn=function(n){var s=wn(n),l=s==Le?n.constructor:e,h=l?Cr(l):"";if(h)switch(h){case E_:return et;case y_:return ie;case T_:return z;case b_:return de;case A_:return k}return s});function Hg(n,s,l){for(var h=-1,S=l.length;++h<S;){var R=l[h],U=R.size;switch(R.type){case"drop":n+=U;break;case"dropRight":s-=U;break;case"take":s=vn(s,n+U);break;case"takeRight":n=rn(n,s-U);break}}return{start:n,end:s}}function Vg(n){var s=n.match(Ta);return s?s[1].split(Ii):[]}function Pf(n,s,l){s=or(s,n);for(var h=-1,S=s.length,R=!1;++h<S;){var U=Mi(s[h]);if(!(R=n!=null&&l(n,U)))break;n=n[U]}return R||++h!=S?R:(S=n==null?0:n.length,!!S&&ho(S)&&zi(U,S)&&(te(n)||Pr(n)))}function kg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Ue.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Df(n){return typeof n.constructor=="function"&&!js(n)?es(Ba(n)):{}}function Wg(n,s,l){var h=n.constructor;switch(s){case ut:return Hl(n);case Pt:case $t:return new h(+n);case et:return wg(n,l);case zt:case gt:case Ft:case Wt:case pt:case vt:case It:case Ot:case xt:return df(n,l);case ie:return new h;case ye:case Ut:return new h(n);case xe:return Rg(n);case de:return new h;case P:return Cg(n)}}function Xg(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(ya,`{
/* [wrapped with `+s+`] */
`)}function qg(n){return te(n)||Pr(n)||!!(Nh&&n&&n[Nh])}function zi(n,s){var l=typeof n;return s=s??ot,!!s&&(l=="number"||l!="symbol"&&sl.test(n))&&n>-1&&n%1==0&&n<s}function Rn(n,s,l){if(!Ye(l))return!1;var h=typeof s;return(h=="number"?In(l)&&zi(s,l.length):h=="string"&&s in l)?ci(l[s],n):!1}function Zl(n,s){if(te(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||kn(n)?!0:Zn.test(n)||!Ce.test(n)||s!=null&&n in ze(s)}function Yg(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function $l(n){var s=io(n),l=b[s];if(typeof l!="function"||!(s in ve.prototype))return!1;if(n===l)return!0;var h=ql(l);return!!h&&n===h[0]}function Kg(n){return!!Dh&&Dh in n}var Zg=Ia?Gi:dc;function js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||jr;return n===l}function Lf(n){return n===n&&!Ye(n)}function If(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in ze(l))}}function $g(n){var s=co(n,function(h){return l.size===f&&l.clear(),h}),l=s.cache;return s}function Jg(n,s){var l=n[1],h=s[1],S=l|h,R=S<(x|_|C),U=h==C&&l==I||h==C&&l==O&&n[7].length<=s[8]||h==(C|O)&&s[7].length<=s[8]&&l==I;if(!(R||U))return n;h&x&&(n[2]=s[2],S|=l&x?0:L);var G=s[3];if(G){var Y=n[3];n[3]=Y?mf(Y,G,s[4]):G,n[4]=Y?ir(n[3],p):s[4]}return G=s[5],G&&(Y=n[5],n[5]=Y?_f(Y,G,s[6]):G,n[6]=Y?ir(n[5],p):s[6]),G=s[7],G&&(n[7]=G),h&C&&(n[8]=n[8]==null?s[8]:vn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=S,n}function jg(n){var s=[];if(n!=null)for(var l in ze(n))s.push(l);return s}function Qg(n){return Na.call(n)}function Uf(n,s,l){return s=rn(s===e?n.length-1:s,0),function(){for(var h=arguments,S=-1,R=rn(h.length-s,0),U=Q(R);++S<R;)U[S]=h[s+S];S=-1;for(var G=Q(s+1);++S<s;)G[S]=h[S];return G[s]=l(U),Gn(n,this,G)}}function Nf(n,s){return s.length<2?n:wr(n,ei(s,0,-1))}function t0(n,s){for(var l=n.length,h=vn(s.length,l),S=Ln(n);h--;){var R=s[h];n[h]=zi(R,l)?S[R]:e}return n}function Jl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Ff=Bf(sf),Qs=m_||function(n,s){return pn.setTimeout(n,s)},jl=Bf(yg);function Of(n,s,l){var h=s+"";return jl(n,Xg(h,e0(Vg(h),l)))}function Bf(n){var s=0,l=0;return function(){var h=v_(),S=K-(h-l);if(l=h,S>0){if(++s>=q)return arguments[0]}else s=0;return n.apply(e,arguments)}}function so(n,s){var l=-1,h=n.length,S=h-1;for(s=s===e?h:s;++l<s;){var R=Ul(l,S),U=n[R];n[R]=n[l],n[l]=U}return n.length=s,n}var zf=$g(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(ai,function(l,h,S,R){s.push(S?R.replace(Aa,"$1"):h||l)}),s});function Mi(n){if(typeof n=="string"||kn(n))return n;var s=n+"";return s=="0"&&1/n==-$?"-0":s}function Cr(n){if(n!=null){try{return Ua.call(n)}catch{}try{return n+""}catch{}}return""}function e0(n,s){return Jn(He,function(l){var h="_."+l[0];s&l[1]&&!Ca(n,h)&&n.push(h)}),n.sort()}function Gf(n){if(n instanceof ve)return n.clone();var s=new Qn(n.__wrapped__,n.__chain__);return s.__actions__=Ln(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function n0(n,s,l){(l?Rn(n,s,l):s===e)?s=1:s=rn(oe(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var S=0,R=0,U=Q(Ha(h/s));S<h;)U[R++]=ei(n,S,S+=s);return U}function i0(n){for(var s=-1,l=n==null?0:n.length,h=0,S=[];++s<l;){var R=n[s];R&&(S[h++]=R)}return S}function r0(){var n=arguments.length;if(!n)return[];for(var s=Q(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return nr(te(l)?Ln(l):[l],mn(s,1))}var s0=fe(function(n,s){return je(n)?Ys(n,mn(s,1,je,!0)):[]}),a0=fe(function(n,s){var l=ni(s);return je(l)&&(l=e),je(n)?Ys(n,mn(s,1,je,!0),qt(l,2)):[]}),o0=fe(function(n,s){var l=ni(s);return je(l)&&(l=e),je(n)?Ys(n,mn(s,1,je,!0),e,l):[]});function l0(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:oe(s),ei(n,s<0?0:s,h)):[]}function c0(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:oe(s),s=h-s,ei(n,0,s<0?0:s)):[]}function u0(n,s){return n&&n.length?Ja(n,qt(s,3),!0,!0):[]}function h0(n,s){return n&&n.length?Ja(n,qt(s,3),!0):[]}function f0(n,s,l,h){var S=n==null?0:n.length;return S?(l&&typeof l!="number"&&Rn(n,s,l)&&(l=0,h=S),rg(n,s,l,h)):[]}function Hf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:oe(l);return S<0&&(S=rn(h+S,0)),Pa(n,qt(s,3),S)}function Vf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h-1;return l!==e&&(S=oe(l),S=l<0?rn(h+S,0):vn(S,h-1)),Pa(n,qt(s,3),S,!0)}function kf(n){var s=n==null?0:n.length;return s?mn(n,1):[]}function d0(n){var s=n==null?0:n.length;return s?mn(n,$):[]}function p0(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:oe(s),mn(n,s)):[]}function m0(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var S=n[s];h[S[0]]=S[1]}return h}function Wf(n){return n&&n.length?n[0]:e}function _0(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=l==null?0:oe(l);return S<0&&(S=rn(h+S,0)),Kr(n,s,S)}function g0(n){var s=n==null?0:n.length;return s?ei(n,0,-1):[]}var x0=fe(function(n){var s=Xe(n,zl);return s.length&&s[0]===n[0]?Cl(s):[]}),v0=fe(function(n){var s=ni(n),l=Xe(n,zl);return s===ni(l)?s=e:l.pop(),l.length&&l[0]===n[0]?Cl(l,qt(s,2)):[]}),S0=fe(function(n){var s=ni(n),l=Xe(n,zl);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?Cl(l,e,s):[]});function M0(n,s){return n==null?"":g_.call(n,s)}function ni(n){var s=n==null?0:n.length;return s?n[s-1]:e}function E0(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var S=h;return l!==e&&(S=oe(l),S=S<0?rn(h+S,0):vn(S,h-1)),s===s?e_(n,s,S):Pa(n,yh,S,!0)}function y0(n,s){return n&&n.length?tf(n,oe(s)):e}var T0=fe(Xf);function Xf(n,s){return n&&n.length&&s&&s.length?Il(n,s):n}function b0(n,s,l){return n&&n.length&&s&&s.length?Il(n,s,qt(l,2)):n}function A0(n,s,l){return n&&n.length&&s&&s.length?Il(n,s,e,l):n}var w0=Bi(function(n,s){var l=n==null?0:n.length,h=bl(n,s);return rf(n,Xe(s,function(S){return zi(S,l)?+S:S}).sort(pf)),h});function R0(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,S=[],R=n.length;for(s=qt(s,3);++h<R;){var U=n[h];s(U,h,n)&&(l.push(U),S.push(h))}return rf(n,S),l}function Ql(n){return n==null?n:M_.call(n)}function C0(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&Rn(n,s,l)?(s=0,l=h):(s=s==null?0:oe(s),l=l===e?h:oe(l)),ei(n,s,l)):[]}function P0(n,s){return $a(n,s)}function D0(n,s,l){return Fl(n,s,qt(l,2))}function L0(n,s){var l=n==null?0:n.length;if(l){var h=$a(n,s);if(h<l&&ci(n[h],s))return h}return-1}function I0(n,s){return $a(n,s,!0)}function U0(n,s,l){return Fl(n,s,qt(l,2),!0)}function N0(n,s){var l=n==null?0:n.length;if(l){var h=$a(n,s,!0)-1;if(ci(n[h],s))return h}return-1}function F0(n){return n&&n.length?af(n):[]}function O0(n,s){return n&&n.length?af(n,qt(s,2)):[]}function B0(n){var s=n==null?0:n.length;return s?ei(n,1,s):[]}function z0(n,s,l){return n&&n.length?(s=l||s===e?1:oe(s),ei(n,0,s<0?0:s)):[]}function G0(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===e?1:oe(s),s=h-s,ei(n,s<0?0:s,h)):[]}function H0(n,s){return n&&n.length?Ja(n,qt(s,3),!1,!0):[]}function V0(n,s){return n&&n.length?Ja(n,qt(s,3)):[]}var k0=fe(function(n){return ar(mn(n,1,je,!0))}),W0=fe(function(n){var s=ni(n);return je(s)&&(s=e),ar(mn(n,1,je,!0),qt(s,2))}),X0=fe(function(n){var s=ni(n);return s=typeof s=="function"?s:e,ar(mn(n,1,je,!0),e,s)});function q0(n){return n&&n.length?ar(n):[]}function Y0(n,s){return n&&n.length?ar(n,qt(s,2)):[]}function K0(n,s){return s=typeof s=="function"?s:e,n&&n.length?ar(n,e,s):[]}function tc(n){if(!(n&&n.length))return[];var s=0;return n=er(n,function(l){if(je(l))return s=rn(l.length,s),!0}),gl(s,function(l){return Xe(n,pl(l))})}function qf(n,s){if(!(n&&n.length))return[];var l=tc(n);return s==null?l:Xe(l,function(h){return Gn(s,e,h)})}var Z0=fe(function(n,s){return je(n)?Ys(n,s):[]}),$0=fe(function(n){return Bl(er(n,je))}),J0=fe(function(n){var s=ni(n);return je(s)&&(s=e),Bl(er(n,je),qt(s,2))}),j0=fe(function(n){var s=ni(n);return s=typeof s=="function"?s:e,Bl(er(n,je),e,s)}),Q0=fe(tc);function tx(n,s){return uf(n||[],s||[],qs)}function ex(n,s){return uf(n||[],s||[],$s)}var nx=fe(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,qf(n,l)});function Yf(n){var s=b(n);return s.__chain__=!0,s}function ix(n,s){return s(n),n}function ao(n,s){return s(n)}var rx=Bi(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,S=function(R){return bl(R,n)};return s>1||this.__actions__.length||!(h instanceof ve)||!zi(l)?this.thru(S):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:ao,args:[S],thisArg:e}),new Qn(h,this.__chain__).thru(function(R){return s&&!R.length&&R.push(e),R}))});function sx(){return Yf(this)}function ax(){return new Qn(this.value(),this.__chain__)}function ox(){this.__values__===e&&(this.__values__=od(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function lx(){return this}function cx(n){for(var s,l=this;l instanceof Xa;){var h=Gf(l);h.__index__=0,h.__values__=e,s?S.__wrapped__=h:s=h;var S=h;l=l.__wrapped__}return S.__wrapped__=n,s}function ux(){var n=this.__wrapped__;if(n instanceof ve){var s=n;return this.__actions__.length&&(s=new ve(this)),s=s.reverse(),s.__actions__.push({func:ao,args:[Ql],thisArg:e}),new Qn(s,this.__chain__)}return this.thru(Ql)}function hx(){return cf(this.__wrapped__,this.__actions__)}var fx=ja(function(n,s,l){Ue.call(n,l)?++n[l]:Fi(n,l,1)});function dx(n,s,l){var h=te(n)?Mh:ig;return l&&Rn(n,s,l)&&(s=e),h(n,qt(s,3))}function px(n,s){var l=te(n)?er:Xh;return l(n,qt(s,3))}var mx=Sf(Hf),_x=Sf(Vf);function gx(n,s){return mn(oo(n,s),1)}function xx(n,s){return mn(oo(n,s),$)}function vx(n,s,l){return l=l===e?1:oe(l),mn(oo(n,s),l)}function Kf(n,s){var l=te(n)?Jn:sr;return l(n,qt(s,3))}function Zf(n,s){var l=te(n)?Bm:Wh;return l(n,qt(s,3))}var Sx=ja(function(n,s,l){Ue.call(n,l)?n[l].push(s):Fi(n,l,[s])});function Mx(n,s,l,h){n=In(n)?n:as(n),l=l&&!h?oe(l):0;var S=n.length;return l<0&&(l=rn(S+l,0)),fo(n)?l<=S&&n.indexOf(s,l)>-1:!!S&&Kr(n,s,l)>-1}var Ex=fe(function(n,s,l){var h=-1,S=typeof s=="function",R=In(n)?Q(n.length):[];return sr(n,function(U){R[++h]=S?Gn(s,U,l):Ks(U,s,l)}),R}),yx=ja(function(n,s,l){Fi(n,l,s)});function oo(n,s){var l=te(n)?Xe:Jh;return l(n,qt(s,3))}function Tx(n,s,l,h){return n==null?[]:(te(s)||(s=s==null?[]:[s]),l=h?e:l,te(l)||(l=l==null?[]:[l]),ef(n,s,l))}var bx=ja(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function Ax(n,s,l){var h=te(n)?fl:bh,S=arguments.length<3;return h(n,qt(s,4),l,S,sr)}function wx(n,s,l){var h=te(n)?zm:bh,S=arguments.length<3;return h(n,qt(s,4),l,S,Wh)}function Rx(n,s){var l=te(n)?er:Xh;return l(n,uo(qt(s,3)))}function Cx(n){var s=te(n)?Gh:Mg;return s(n)}function Px(n,s,l){(l?Rn(n,s,l):s===e)?s=1:s=oe(s);var h=te(n)?j_:Eg;return h(n,s)}function Dx(n){var s=te(n)?Q_:Tg;return s(n)}function Lx(n){if(n==null)return 0;if(In(n))return fo(n)?$r(n):n.length;var s=Sn(n);return s==ie||s==de?n.size:Dl(n).length}function Ix(n,s,l){var h=te(n)?dl:bg;return l&&Rn(n,s,l)&&(s=e),h(n,qt(s,3))}var Ux=fe(function(n,s){if(n==null)return[];var l=s.length;return l>1&&Rn(n,s[0],s[1])?s=[]:l>2&&Rn(s[0],s[1],s[2])&&(s=[s[0]]),ef(n,mn(s,1),[])}),lo=p_||function(){return pn.Date.now()};function Nx(n,s){if(typeof s!="function")throw new jn(c);return n=oe(n),function(){if(--n<1)return s.apply(this,arguments)}}function $f(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,Oi(n,C,e,e,e,e,s)}function Jf(n,s){var l;if(typeof s!="function")throw new jn(c);return n=oe(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var ec=fe(function(n,s,l){var h=x;if(l.length){var S=ir(l,rs(ec));h|=F}return Oi(n,h,s,l,S)}),jf=fe(function(n,s,l){var h=x|_;if(l.length){var S=ir(l,rs(jf));h|=F}return Oi(s,h,n,l,S)});function Qf(n,s,l){s=l?e:s;var h=Oi(n,I,e,e,e,e,e,s);return h.placeholder=Qf.placeholder,h}function td(n,s,l){s=l?e:s;var h=Oi(n,D,e,e,e,e,e,s);return h.placeholder=td.placeholder,h}function ed(n,s,l){var h,S,R,U,G,Y,lt=0,ct=!1,ft=!1,bt=!0;if(typeof n!="function")throw new jn(c);s=ii(s)||0,Ye(l)&&(ct=!!l.leading,ft="maxWait"in l,R=ft?rn(ii(l.maxWait)||0,s):R,bt="trailing"in l?!!l.trailing:bt);function Gt(Qe){var ui=h,Vi=S;return h=S=e,lt=Qe,U=n.apply(Vi,ui),U}function Yt(Qe){return lt=Qe,G=Qs(me,s),ct?Gt(Qe):U}function ue(Qe){var ui=Qe-Y,Vi=Qe-lt,Sd=s-ui;return ft?vn(Sd,R-Vi):Sd}function Kt(Qe){var ui=Qe-Y,Vi=Qe-lt;return Y===e||ui>=s||ui<0||ft&&Vi>=R}function me(){var Qe=lo();if(Kt(Qe))return Me(Qe);G=Qs(me,ue(Qe))}function Me(Qe){return G=e,bt&&h?Gt(Qe):(h=S=e,U)}function Wn(){G!==e&&hf(G),lt=0,h=Y=S=G=e}function Cn(){return G===e?U:Me(lo())}function Xn(){var Qe=lo(),ui=Kt(Qe);if(h=arguments,S=this,Y=Qe,ui){if(G===e)return Yt(Y);if(ft)return hf(G),G=Qs(me,s),Gt(Y)}return G===e&&(G=Qs(me,s)),U}return Xn.cancel=Wn,Xn.flush=Cn,Xn}var Fx=fe(function(n,s){return kh(n,1,s)}),Ox=fe(function(n,s,l){return kh(n,ii(s)||0,l)});function Bx(n){return Oi(n,M)}function co(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new jn(c);var l=function(){var h=arguments,S=s?s.apply(this,h):h[0],R=l.cache;if(R.has(S))return R.get(S);var U=n.apply(this,h);return l.cache=R.set(S,U)||R,U};return l.cache=new(co.Cache||Ni),l}co.Cache=Ni;function uo(n){if(typeof n!="function")throw new jn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function zx(n){return Jf(2,n)}var Gx=Ag(function(n,s){s=s.length==1&&te(s[0])?Xe(s[0],Hn(qt())):Xe(mn(s,1),Hn(qt()));var l=s.length;return fe(function(h){for(var S=-1,R=vn(h.length,l);++S<R;)h[S]=s[S].call(this,h[S]);return Gn(n,this,h)})}),nc=fe(function(n,s){var l=ir(s,rs(nc));return Oi(n,F,e,s,l)}),nd=fe(function(n,s){var l=ir(s,rs(nd));return Oi(n,B,e,s,l)}),Hx=Bi(function(n,s){return Oi(n,O,e,e,e,s)});function Vx(n,s){if(typeof n!="function")throw new jn(c);return s=s===e?s:oe(s),fe(n,s)}function kx(n,s){if(typeof n!="function")throw new jn(c);return s=s==null?0:rn(oe(s),0),fe(function(l){var h=l[s],S=lr(l,0,s);return h&&nr(S,h),Gn(n,this,S)})}function Wx(n,s,l){var h=!0,S=!0;if(typeof n!="function")throw new jn(c);return Ye(l)&&(h="leading"in l?!!l.leading:h,S="trailing"in l?!!l.trailing:S),ed(n,s,{leading:h,maxWait:s,trailing:S})}function Xx(n){return $f(n,1)}function qx(n,s){return nc(Gl(s),n)}function Yx(){if(!arguments.length)return[];var n=arguments[0];return te(n)?n:[n]}function Kx(n){return ti(n,v)}function Zx(n,s){return s=typeof s=="function"?s:e,ti(n,v,s)}function $x(n){return ti(n,m|v)}function Jx(n,s){return s=typeof s=="function"?s:e,ti(n,m|v,s)}function jx(n,s){return s==null||Vh(n,s,un(s))}function ci(n,s){return n===s||n!==n&&s!==s}var Qx=no(Rl),tv=no(function(n,s){return n>=s}),Pr=Kh((function(){return arguments})())?Kh:function(n){return $e(n)&&Ue.call(n,"callee")&&!Uh.call(n,"callee")},te=Q.isArray,ev=mh?Hn(mh):cg;function In(n){return n!=null&&ho(n.length)&&!Gi(n)}function je(n){return $e(n)&&In(n)}function nv(n){return n===!0||n===!1||$e(n)&&wn(n)==Pt}var cr=__||dc,iv=_h?Hn(_h):ug;function rv(n){return $e(n)&&n.nodeType===1&&!ta(n)}function sv(n){if(n==null)return!0;if(In(n)&&(te(n)||typeof n=="string"||typeof n.splice=="function"||cr(n)||ss(n)||Pr(n)))return!n.length;var s=Sn(n);if(s==ie||s==de)return!n.size;if(js(n))return!Dl(n).length;for(var l in n)if(Ue.call(n,l))return!1;return!0}function av(n,s){return Zs(n,s)}function ov(n,s,l){l=typeof l=="function"?l:e;var h=l?l(n,s):e;return h===e?Zs(n,s,e,l):!!h}function ic(n){if(!$e(n))return!1;var s=wn(n);return s==pe||s==Bt||typeof n.message=="string"&&typeof n.name=="string"&&!ta(n)}function lv(n){return typeof n=="number"&&Fh(n)}function Gi(n){if(!Ye(n))return!1;var s=wn(n);return s==qe||s==ge||s==dt||s==Ze}function id(n){return typeof n=="number"&&n==oe(n)}function ho(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ot}function Ye(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function $e(n){return n!=null&&typeof n=="object"}var rd=gh?Hn(gh):fg;function cv(n,s){return n===s||Pl(n,s,Yl(s))}function uv(n,s,l){return l=typeof l=="function"?l:e,Pl(n,s,Yl(s),l)}function hv(n){return sd(n)&&n!=+n}function fv(n){if(Zg(n))throw new Qt(o);return Zh(n)}function dv(n){return n===null}function pv(n){return n==null}function sd(n){return typeof n=="number"||$e(n)&&wn(n)==ye}function ta(n){if(!$e(n)||wn(n)!=Le)return!1;var s=Ba(n);if(s===null)return!0;var l=Ue.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ua.call(l)==u_}var rc=xh?Hn(xh):dg;function mv(n){return id(n)&&n>=-ot&&n<=ot}var ad=vh?Hn(vh):pg;function fo(n){return typeof n=="string"||!te(n)&&$e(n)&&wn(n)==Ut}function kn(n){return typeof n=="symbol"||$e(n)&&wn(n)==P}var ss=Sh?Hn(Sh):mg;function _v(n){return n===e}function gv(n){return $e(n)&&Sn(n)==k}function xv(n){return $e(n)&&wn(n)==st}var vv=no(Ll),Sv=no(function(n,s){return n<=s});function od(n){if(!n)return[];if(In(n))return fo(n)?oi(n):Ln(n);if(Hs&&n[Hs])return jm(n[Hs]());var s=Sn(n),l=s==ie?vl:s==de?Da:as;return l(n)}function Hi(n){if(!n)return n===0?n:0;if(n=ii(n),n===$||n===-$){var s=n<0?-1:1;return s*wt}return n===n?n:0}function oe(n){var s=Hi(n),l=s%1;return s===s?l?s-l:s:0}function ld(n){return n?Ar(oe(n),0,Et):0}function ii(n){if(typeof n=="number")return n;if(kn(n))return Mt;if(Ye(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Ye(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Ah(n);var l=wa.test(n);return l||rl.test(n)?Nm(n.slice(2),l?2:8):Xr.test(n)?Mt:+n}function cd(n){return Si(n,Un(n))}function Mv(n){return n?Ar(oe(n),-ot,ot):n===0?n:0}function Ne(n){return n==null?"":Vn(n)}var Ev=ns(function(n,s){if(js(s)||In(s)){Si(s,un(s),n);return}for(var l in s)Ue.call(s,l)&&qs(n,l,s[l])}),ud=ns(function(n,s){Si(s,Un(s),n)}),po=ns(function(n,s,l,h){Si(s,Un(s),n,h)}),yv=ns(function(n,s,l,h){Si(s,un(s),n,h)}),Tv=Bi(bl);function bv(n,s){var l=es(n);return s==null?l:Hh(l,s)}var Av=fe(function(n,s){n=ze(n);var l=-1,h=s.length,S=h>2?s[2]:e;for(S&&Rn(s[0],s[1],S)&&(h=1);++l<h;)for(var R=s[l],U=Un(R),G=-1,Y=U.length;++G<Y;){var lt=U[G],ct=n[lt];(ct===e||ci(ct,jr[lt])&&!Ue.call(n,lt))&&(n[lt]=R[lt])}return n}),wv=fe(function(n){return n.push(e,wf),Gn(hd,e,n)});function Rv(n,s){return Eh(n,qt(s,3),vi)}function Cv(n,s){return Eh(n,qt(s,3),wl)}function Pv(n,s){return n==null?n:Al(n,qt(s,3),Un)}function Dv(n,s){return n==null?n:qh(n,qt(s,3),Un)}function Lv(n,s){return n&&vi(n,qt(s,3))}function Iv(n,s){return n&&wl(n,qt(s,3))}function Uv(n){return n==null?[]:Ka(n,un(n))}function Nv(n){return n==null?[]:Ka(n,Un(n))}function sc(n,s,l){var h=n==null?e:wr(n,s);return h===e?l:h}function Fv(n,s){return n!=null&&Pf(n,s,sg)}function ac(n,s){return n!=null&&Pf(n,s,ag)}var Ov=Ef(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Na.call(s)),n[s]=l},lc(Nn)),Bv=Ef(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Na.call(s)),Ue.call(n,s)?n[s].push(l):n[s]=[l]},qt),zv=fe(Ks);function un(n){return In(n)?zh(n):Dl(n)}function Un(n){return In(n)?zh(n,!0):_g(n)}function Gv(n,s){var l={};return s=qt(s,3),vi(n,function(h,S,R){Fi(l,s(h,S,R),h)}),l}function Hv(n,s){var l={};return s=qt(s,3),vi(n,function(h,S,R){Fi(l,S,s(h,S,R))}),l}var Vv=ns(function(n,s,l){Za(n,s,l)}),hd=ns(function(n,s,l,h){Za(n,s,l,h)}),kv=Bi(function(n,s){var l={};if(n==null)return l;var h=!1;s=Xe(s,function(R){return R=or(R,n),h||(h=R.length>1),R}),Si(n,Xl(n),l),h&&(l=ti(l,m|g|v,Og));for(var S=s.length;S--;)Ol(l,s[S]);return l});function Wv(n,s){return fd(n,uo(qt(s)))}var Xv=Bi(function(n,s){return n==null?{}:xg(n,s)});function fd(n,s){if(n==null)return{};var l=Xe(Xl(n),function(h){return[h]});return s=qt(s),nf(n,l,function(h,S){return s(h,S[0])})}function qv(n,s,l){s=or(s,n);var h=-1,S=s.length;for(S||(S=1,n=e);++h<S;){var R=n==null?e:n[Mi(s[h])];R===e&&(h=S,R=l),n=Gi(R)?R.call(n):R}return n}function Yv(n,s,l){return n==null?n:$s(n,s,l)}function Kv(n,s,l,h){return h=typeof h=="function"?h:e,n==null?n:$s(n,s,l,h)}var dd=bf(un),pd=bf(Un);function Zv(n,s,l){var h=te(n),S=h||cr(n)||ss(n);if(s=qt(s,4),l==null){var R=n&&n.constructor;S?l=h?new R:[]:Ye(n)?l=Gi(R)?es(Ba(n)):{}:l={}}return(S?Jn:vi)(n,function(U,G,Y){return s(l,U,G,Y)}),l}function $v(n,s){return n==null?!0:Ol(n,s)}function Jv(n,s,l){return n==null?n:lf(n,s,Gl(l))}function jv(n,s,l,h){return h=typeof h=="function"?h:e,n==null?n:lf(n,s,Gl(l),h)}function as(n){return n==null?[]:xl(n,un(n))}function Qv(n){return n==null?[]:xl(n,Un(n))}function tS(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=ii(l),l=l===l?l:0),s!==e&&(s=ii(s),s=s===s?s:0),Ar(ii(n),s,l)}function eS(n,s,l){return s=Hi(s),l===e?(l=s,s=0):l=Hi(l),n=ii(n),og(n,s,l)}function nS(n,s,l){if(l&&typeof l!="boolean"&&Rn(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Hi(n),s===e?(s=n,n=0):s=Hi(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var S=Oh();return vn(n+S*(s-n+Um("1e-"+((S+"").length-1))),s)}return Ul(n,s)}var iS=is(function(n,s,l){return s=s.toLowerCase(),n+(l?md(s):s)});function md(n){return oc(Ne(n).toLowerCase())}function _d(n){return n=Ne(n),n&&n.replace(al,Ym).replace(Tm,"")}function rS(n,s,l){n=Ne(n),s=Vn(s);var h=n.length;l=l===e?h:Ar(oe(l),0,h);var S=l;return l-=s.length,l>=0&&n.slice(l,S)==s}function sS(n){return n=Ne(n),n&&ht.test(n)?n.replace(Ct,Km):n}function aS(n){return n=Ne(n),n&&Ea.test(n)?n.replace(Fs,"\\$&"):n}var oS=is(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),lS=is(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),cS=vf("toLowerCase");function uS(n,s,l){n=Ne(n),s=oe(s);var h=s?$r(n):0;if(!s||h>=s)return n;var S=(s-h)/2;return eo(Va(S),l)+n+eo(Ha(S),l)}function hS(n,s,l){n=Ne(n),s=oe(s);var h=s?$r(n):0;return s&&h<s?n+eo(s-h,l):n}function fS(n,s,l){n=Ne(n),s=oe(s);var h=s?$r(n):0;return s&&h<s?eo(s-h,l)+n:n}function dS(n,s,l){return l||s==null?s=0:s&&(s=+s),S_(Ne(n).replace(Mr,""),s||0)}function pS(n,s,l){return(l?Rn(n,s,l):s===e)?s=1:s=oe(s),Nl(Ne(n),s)}function mS(){var n=arguments,s=Ne(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var _S=is(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function gS(n,s,l){return l&&typeof l!="number"&&Rn(n,s,l)&&(s=l=e),l=l===e?Et:l>>>0,l?(n=Ne(n),n&&(typeof s=="string"||s!=null&&!rc(s))&&(s=Vn(s),!s&&Zr(n))?lr(oi(n),0,l):n.split(s,l)):[]}var xS=is(function(n,s,l){return n+(l?" ":"")+oc(s)});function vS(n,s,l){return n=Ne(n),l=l==null?0:Ar(oe(l),0,n.length),s=Vn(s),n.slice(l,l+s.length)==s}function SS(n,s,l){var h=b.templateSettings;l&&Rn(n,s,l)&&(s=e),n=Ne(n),s=po({},s,h,Af);var S=po({},s.imports,h.imports,Af),R=un(S),U=xl(S,R),G,Y,lt=0,ct=s.interpolate||qr,ft="__p += '",bt=Sl((s.escape||qr).source+"|"+ct.source+"|"+(ct===Fe?Wr:qr).source+"|"+(s.evaluate||qr).source+"|$","g"),Gt="//# sourceURL="+(Ue.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Cm+"]")+`
`;n.replace(bt,function(Kt,me,Me,Wn,Cn,Xn){return Me||(Me=Wn),ft+=n.slice(lt,Xn).replace(ol,Zm),me&&(G=!0,ft+=`' +
__e(`+me+`) +
'`),Cn&&(Y=!0,ft+=`';
`+Cn+`;
__p += '`),Me&&(ft+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),lt=Xn+Kt.length,Kt}),ft+=`';
`;var Yt=Ue.call(s,"variable")&&s.variable;if(!Yt)ft=`with (obj) {
`+ft+`
}
`;else if(ba.test(Yt))throw new Qt(u);ft=(Y?ft.replace(se,""):ft).replace(H,"$1").replace(Rt,"$1;"),ft="function("+(Yt||"obj")+`) {
`+(Yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var ue=xd(function(){return De(R,Gt+"return "+ft).apply(e,U)});if(ue.source=ft,ic(ue))throw ue;return ue}function MS(n){return Ne(n).toLowerCase()}function ES(n){return Ne(n).toUpperCase()}function yS(n,s,l){if(n=Ne(n),n&&(l||s===e))return Ah(n);if(!n||!(s=Vn(s)))return n;var h=oi(n),S=oi(s),R=wh(h,S),U=Rh(h,S)+1;return lr(h,R,U).join("")}function TS(n,s,l){if(n=Ne(n),n&&(l||s===e))return n.slice(0,Ph(n)+1);if(!n||!(s=Vn(s)))return n;var h=oi(n),S=Rh(h,oi(s))+1;return lr(h,0,S).join("")}function bS(n,s,l){if(n=Ne(n),n&&(l||s===e))return n.replace(Mr,"");if(!n||!(s=Vn(s)))return n;var h=oi(n),S=wh(h,oi(s));return lr(h,S).join("")}function AS(n,s){var l=T,h=N;if(Ye(s)){var S="separator"in s?s.separator:S;l="length"in s?oe(s.length):l,h="omission"in s?Vn(s.omission):h}n=Ne(n);var R=n.length;if(Zr(n)){var U=oi(n);R=U.length}if(l>=R)return n;var G=l-$r(h);if(G<1)return h;var Y=U?lr(U,0,G).join(""):n.slice(0,G);if(S===e)return Y+h;if(U&&(G+=Y.length-G),rc(S)){if(n.slice(G).search(S)){var lt,ct=Y;for(S.global||(S=Sl(S.source,Ne(Bs.exec(S))+"g")),S.lastIndex=0;lt=S.exec(ct);)var ft=lt.index;Y=Y.slice(0,ft===e?G:ft)}}else if(n.indexOf(Vn(S),G)!=G){var bt=Y.lastIndexOf(S);bt>-1&&(Y=Y.slice(0,bt))}return Y+h}function wS(n){return n=Ne(n),n&&mt.test(n)?n.replace(_t,n_):n}var RS=is(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),oc=vf("toUpperCase");function gd(n,s,l){return n=Ne(n),s=l?e:s,s===e?Jm(n)?s_(n):Vm(n):n.match(s)||[]}var xd=fe(function(n,s){try{return Gn(n,e,s)}catch(l){return ic(l)?l:new Qt(l)}}),CS=Bi(function(n,s){return Jn(s,function(l){l=Mi(l),Fi(n,l,ec(n[l],n))}),n});function PS(n){var s=n==null?0:n.length,l=qt();return n=s?Xe(n,function(h){if(typeof h[1]!="function")throw new jn(c);return[l(h[0]),h[1]]}):[],fe(function(h){for(var S=-1;++S<s;){var R=n[S];if(Gn(R[0],this,h))return Gn(R[1],this,h)}})}function DS(n){return ng(ti(n,m))}function lc(n){return function(){return n}}function LS(n,s){return n==null||n!==n?s:n}var IS=Mf(),US=Mf(!0);function Nn(n){return n}function cc(n){return $h(typeof n=="function"?n:ti(n,m))}function NS(n){return jh(ti(n,m))}function FS(n,s){return Qh(n,ti(s,m))}var OS=fe(function(n,s){return function(l){return Ks(l,n,s)}}),BS=fe(function(n,s){return function(l){return Ks(n,l,s)}});function uc(n,s,l){var h=un(s),S=Ka(s,h);l==null&&!(Ye(s)&&(S.length||!h.length))&&(l=s,s=n,n=this,S=Ka(s,un(s)));var R=!(Ye(l)&&"chain"in l)||!!l.chain,U=Gi(n);return Jn(S,function(G){var Y=s[G];n[G]=Y,U&&(n.prototype[G]=function(){var lt=this.__chain__;if(R||lt){var ct=n(this.__wrapped__),ft=ct.__actions__=Ln(this.__actions__);return ft.push({func:Y,args:arguments,thisArg:n}),ct.__chain__=lt,ct}return Y.apply(n,nr([this.value()],arguments))})}),n}function zS(){return pn._===this&&(pn._=h_),this}function hc(){}function GS(n){return n=oe(n),fe(function(s){return tf(s,n)})}var HS=Vl(Xe),VS=Vl(Mh),kS=Vl(dl);function vd(n){return Zl(n)?pl(Mi(n)):vg(n)}function WS(n){return function(s){return n==null?e:wr(n,s)}}var XS=yf(),qS=yf(!0);function fc(){return[]}function dc(){return!1}function YS(){return{}}function KS(){return""}function ZS(){return!0}function $S(n,s){if(n=oe(n),n<1||n>ot)return[];var l=Et,h=vn(n,Et);s=qt(s),n-=Et;for(var S=gl(h,s);++l<n;)s(l);return S}function JS(n){return te(n)?Xe(n,Mi):kn(n)?[n]:Ln(zf(Ne(n)))}function jS(n){var s=++c_;return Ne(n)+s}var QS=to(function(n,s){return n+s},0),tM=kl("ceil"),eM=to(function(n,s){return n/s},1),nM=kl("floor");function iM(n){return n&&n.length?Ya(n,Nn,Rl):e}function rM(n,s){return n&&n.length?Ya(n,qt(s,2),Rl):e}function sM(n){return Th(n,Nn)}function aM(n,s){return Th(n,qt(s,2))}function oM(n){return n&&n.length?Ya(n,Nn,Ll):e}function lM(n,s){return n&&n.length?Ya(n,qt(s,2),Ll):e}var cM=to(function(n,s){return n*s},1),uM=kl("round"),hM=to(function(n,s){return n-s},0);function fM(n){return n&&n.length?_l(n,Nn):0}function dM(n,s){return n&&n.length?_l(n,qt(s,2)):0}return b.after=Nx,b.ary=$f,b.assign=Ev,b.assignIn=ud,b.assignInWith=po,b.assignWith=yv,b.at=Tv,b.before=Jf,b.bind=ec,b.bindAll=CS,b.bindKey=jf,b.castArray=Yx,b.chain=Yf,b.chunk=n0,b.compact=i0,b.concat=r0,b.cond=PS,b.conforms=DS,b.constant=lc,b.countBy=fx,b.create=bv,b.curry=Qf,b.curryRight=td,b.debounce=ed,b.defaults=Av,b.defaultsDeep=wv,b.defer=Fx,b.delay=Ox,b.difference=s0,b.differenceBy=a0,b.differenceWith=o0,b.drop=l0,b.dropRight=c0,b.dropRightWhile=u0,b.dropWhile=h0,b.fill=f0,b.filter=px,b.flatMap=gx,b.flatMapDeep=xx,b.flatMapDepth=vx,b.flatten=kf,b.flattenDeep=d0,b.flattenDepth=p0,b.flip=Bx,b.flow=IS,b.flowRight=US,b.fromPairs=m0,b.functions=Uv,b.functionsIn=Nv,b.groupBy=Sx,b.initial=g0,b.intersection=x0,b.intersectionBy=v0,b.intersectionWith=S0,b.invert=Ov,b.invertBy=Bv,b.invokeMap=Ex,b.iteratee=cc,b.keyBy=yx,b.keys=un,b.keysIn=Un,b.map=oo,b.mapKeys=Gv,b.mapValues=Hv,b.matches=NS,b.matchesProperty=FS,b.memoize=co,b.merge=Vv,b.mergeWith=hd,b.method=OS,b.methodOf=BS,b.mixin=uc,b.negate=uo,b.nthArg=GS,b.omit=kv,b.omitBy=Wv,b.once=zx,b.orderBy=Tx,b.over=HS,b.overArgs=Gx,b.overEvery=VS,b.overSome=kS,b.partial=nc,b.partialRight=nd,b.partition=bx,b.pick=Xv,b.pickBy=fd,b.property=vd,b.propertyOf=WS,b.pull=T0,b.pullAll=Xf,b.pullAllBy=b0,b.pullAllWith=A0,b.pullAt=w0,b.range=XS,b.rangeRight=qS,b.rearg=Hx,b.reject=Rx,b.remove=R0,b.rest=Vx,b.reverse=Ql,b.sampleSize=Px,b.set=Yv,b.setWith=Kv,b.shuffle=Dx,b.slice=C0,b.sortBy=Ux,b.sortedUniq=F0,b.sortedUniqBy=O0,b.split=gS,b.spread=kx,b.tail=B0,b.take=z0,b.takeRight=G0,b.takeRightWhile=H0,b.takeWhile=V0,b.tap=ix,b.throttle=Wx,b.thru=ao,b.toArray=od,b.toPairs=dd,b.toPairsIn=pd,b.toPath=JS,b.toPlainObject=cd,b.transform=Zv,b.unary=Xx,b.union=k0,b.unionBy=W0,b.unionWith=X0,b.uniq=q0,b.uniqBy=Y0,b.uniqWith=K0,b.unset=$v,b.unzip=tc,b.unzipWith=qf,b.update=Jv,b.updateWith=jv,b.values=as,b.valuesIn=Qv,b.without=Z0,b.words=gd,b.wrap=qx,b.xor=$0,b.xorBy=J0,b.xorWith=j0,b.zip=Q0,b.zipObject=tx,b.zipObjectDeep=ex,b.zipWith=nx,b.entries=dd,b.entriesIn=pd,b.extend=ud,b.extendWith=po,uc(b,b),b.add=QS,b.attempt=xd,b.camelCase=iS,b.capitalize=md,b.ceil=tM,b.clamp=tS,b.clone=Kx,b.cloneDeep=$x,b.cloneDeepWith=Jx,b.cloneWith=Zx,b.conformsTo=jx,b.deburr=_d,b.defaultTo=LS,b.divide=eM,b.endsWith=rS,b.eq=ci,b.escape=sS,b.escapeRegExp=aS,b.every=dx,b.find=mx,b.findIndex=Hf,b.findKey=Rv,b.findLast=_x,b.findLastIndex=Vf,b.findLastKey=Cv,b.floor=nM,b.forEach=Kf,b.forEachRight=Zf,b.forIn=Pv,b.forInRight=Dv,b.forOwn=Lv,b.forOwnRight=Iv,b.get=sc,b.gt=Qx,b.gte=tv,b.has=Fv,b.hasIn=ac,b.head=Wf,b.identity=Nn,b.includes=Mx,b.indexOf=_0,b.inRange=eS,b.invoke=zv,b.isArguments=Pr,b.isArray=te,b.isArrayBuffer=ev,b.isArrayLike=In,b.isArrayLikeObject=je,b.isBoolean=nv,b.isBuffer=cr,b.isDate=iv,b.isElement=rv,b.isEmpty=sv,b.isEqual=av,b.isEqualWith=ov,b.isError=ic,b.isFinite=lv,b.isFunction=Gi,b.isInteger=id,b.isLength=ho,b.isMap=rd,b.isMatch=cv,b.isMatchWith=uv,b.isNaN=hv,b.isNative=fv,b.isNil=pv,b.isNull=dv,b.isNumber=sd,b.isObject=Ye,b.isObjectLike=$e,b.isPlainObject=ta,b.isRegExp=rc,b.isSafeInteger=mv,b.isSet=ad,b.isString=fo,b.isSymbol=kn,b.isTypedArray=ss,b.isUndefined=_v,b.isWeakMap=gv,b.isWeakSet=xv,b.join=M0,b.kebabCase=oS,b.last=ni,b.lastIndexOf=E0,b.lowerCase=lS,b.lowerFirst=cS,b.lt=vv,b.lte=Sv,b.max=iM,b.maxBy=rM,b.mean=sM,b.meanBy=aM,b.min=oM,b.minBy=lM,b.stubArray=fc,b.stubFalse=dc,b.stubObject=YS,b.stubString=KS,b.stubTrue=ZS,b.multiply=cM,b.nth=y0,b.noConflict=zS,b.noop=hc,b.now=lo,b.pad=uS,b.padEnd=hS,b.padStart=fS,b.parseInt=dS,b.random=nS,b.reduce=Ax,b.reduceRight=wx,b.repeat=pS,b.replace=mS,b.result=qv,b.round=uM,b.runInContext=W,b.sample=Cx,b.size=Lx,b.snakeCase=_S,b.some=Ix,b.sortedIndex=P0,b.sortedIndexBy=D0,b.sortedIndexOf=L0,b.sortedLastIndex=I0,b.sortedLastIndexBy=U0,b.sortedLastIndexOf=N0,b.startCase=xS,b.startsWith=vS,b.subtract=hM,b.sum=fM,b.sumBy=dM,b.template=SS,b.times=$S,b.toFinite=Hi,b.toInteger=oe,b.toLength=ld,b.toLower=MS,b.toNumber=ii,b.toSafeInteger=Mv,b.toString=Ne,b.toUpper=ES,b.trim=yS,b.trimEnd=TS,b.trimStart=bS,b.truncate=AS,b.unescape=wS,b.uniqueId=jS,b.upperCase=RS,b.upperFirst=oc,b.each=Kf,b.eachRight=Zf,b.first=Wf,uc(b,(function(){var n={};return vi(b,function(s,l){Ue.call(b.prototype,l)||(n[l]=s)}),n})(),{chain:!1}),b.VERSION=i,Jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),Jn(["drop","take"],function(n,s){ve.prototype[n]=function(l){l=l===e?1:rn(oe(l),0);var h=this.__filtered__&&!s?new ve(this):this.clone();return h.__filtered__?h.__takeCount__=vn(l,h.__takeCount__):h.__views__.push({size:vn(l,Et),type:n+(h.__dir__<0?"Right":"")}),h},ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Jn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==nt||l==tt;ve.prototype[n]=function(S){var R=this.clone();return R.__iteratees__.push({iteratee:qt(S,3),type:l}),R.__filtered__=R.__filtered__||h,R}}),Jn(["head","last"],function(n,s){var l="take"+(s?"Right":"");ve.prototype[n]=function(){return this[l](1).value()[0]}}),Jn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");ve.prototype[n]=function(){return this.__filtered__?new ve(this):this[l](1)}}),ve.prototype.compact=function(){return this.filter(Nn)},ve.prototype.find=function(n){return this.filter(n).head()},ve.prototype.findLast=function(n){return this.reverse().find(n)},ve.prototype.invokeMap=fe(function(n,s){return typeof n=="function"?new ve(this):this.map(function(l){return Ks(l,n,s)})}),ve.prototype.reject=function(n){return this.filter(uo(qt(n)))},ve.prototype.slice=function(n,s){n=oe(n);var l=this;return l.__filtered__&&(n>0||s<0)?new ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=oe(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ve.prototype.toArray=function(){return this.take(Et)},vi(ve.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),S=b[h?"take"+(s=="last"?"Right":""):s],R=h||/^find/.test(s);S&&(b.prototype[s]=function(){var U=this.__wrapped__,G=h?[1]:arguments,Y=U instanceof ve,lt=G[0],ct=Y||te(U),ft=function(me){var Me=S.apply(b,nr([me],G));return h&&bt?Me[0]:Me};ct&&l&&typeof lt=="function"&&lt.length!=1&&(Y=ct=!1);var bt=this.__chain__,Gt=!!this.__actions__.length,Yt=R&&!bt,ue=Y&&!Gt;if(!R&&ct){U=ue?U:new ve(this);var Kt=n.apply(U,G);return Kt.__actions__.push({func:ao,args:[ft],thisArg:e}),new Qn(Kt,bt)}return Yt&&ue?n.apply(this,G):(Kt=this.thru(ft),Yt?h?Kt.value()[0]:Kt.value():Kt)})}),Jn(["pop","push","shift","sort","splice","unshift"],function(n){var s=La[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var S=arguments;if(h&&!this.__chain__){var R=this.value();return s.apply(te(R)?R:[],S)}return this[l](function(U){return s.apply(te(U)?U:[],S)})}}),vi(ve.prototype,function(n,s){var l=b[s];if(l){var h=l.name+"";Ue.call(ts,h)||(ts[h]=[]),ts[h].push({name:s,func:l})}}),ts[Qa(e,_).name]=[{name:"wrapper",func:e}],ve.prototype.clone=w_,ve.prototype.reverse=R_,ve.prototype.value=C_,b.prototype.at=rx,b.prototype.chain=sx,b.prototype.commit=ax,b.prototype.next=ox,b.prototype.plant=cx,b.prototype.reverse=ux,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=hx,b.prototype.first=b.prototype.head,Hs&&(b.prototype[Hs]=lx),b}),Jr=a_();Er?((Er.exports=Jr)._=Jr,cl._=Jr):pn._=Jr}).call(gw)})(da,da.exports)),da.exports}var vw=xw();const Zi=mm(vw),gm=14;function Sw(){const r=Zi.random(1,gm);return pi(r)}function pi(r){return(r<1||r>gm)&&(console.warn(`Invalid texture number ${r}. Using default texture 1.`),r=1),`${document.baseURI}assets/gfx/planets/${r}.jpg`}function Mw(){return{planets:[{color:"#87e5b0",radius:21,position:new V(278,-304,-313),textureUrl:pi(1)},{color:"#c964ea",radius:94,position:new V(-22,-183,-595),textureUrl:pi(2)},{color:"#2ef279",radius:31,position:new V(656,495,-617),textureUrl:pi(3)},{color:"#5ecc4d",radius:94,position:new V(296,438,-38),textureUrl:pi(4)},{color:"#d66e51",radius:96,position:new V(612,578,491),textureUrl:pi(5)},{color:"#45ef86",radius:63,position:new V(-338,-190,656),textureUrl:pi(6)},{color:"#9a2aea",radius:94,position:new V(-295,-243,-382),textureUrl:pi(7)},{color:"#9683f7",radius:64,position:new V(674,-392,466),textureUrl:pi(8)},{color:"#f23ebc",radius:50,position:new V(413,-445,272),textureUrl:pi(9)},{color:"#5d9aea",radius:55,position:new V(684,-395,-566),textureUrl:pi(10)}],initialBallPosition:new V(393.04081542468845,-477.8397276414723,274.04848270177894)}}function Ew(r,t,e){return r.position.distanceTo(t.position)<r.radius+t.radius+e}function yw(r,t){const e=Zi.sample(r),i=new V(Zi.random(-.5,.5),Zi.random(-.5,.5),Zi.random(-.5,.5)).normalize().multiplyScalar(e.radius).addScalar(t+.1);return e.position.clone().add(i)}function Tw(){const e=[];for(;e.length<10;){const a=Zi.random(20,100),o=new V(Zi.random(-Zt.maxPlanetOffset,Zt.maxPlanetOffset),Zi.random(-Zt.maxPlanetOffset,Zt.maxPlanetOffset),Zi.random(-Zt.maxPlanetOffset,Zt.maxPlanetOffset)),c={radius:a,position:o,color:_m(),textureUrl:Sw()};e.some(u=>Ew(c,u,20))||e.push(c)}return{planets:e,initialBallPosition:yw(e,Zt.ball.radius)}}class bw{constructor(){this.renderer=new U1({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new vE,this.cameras={aim:new ew(this.renderer.domElement),landedBallTopDown:new iw(this.renderer.domElement),staticManualOrbit:new fn(Zt.camera.fov,innerWidth/innerHeight,Zt.camera.near,Zt.camera.far),autoRotatingOrbit:new fn(Zt.camera.fov,innerWidth/innerHeight,Zt.camera.near,Zt.camera.far),distant:new nw},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new J1(this.scene),this.clock=new FE,this.level=Zt.useRandomLevel?Tw():Mw(),this.balls=[],this.accumulatedTime=0,this.stats=pa(),this.setup={level:()=>{this.level.planets.forEach(i=>{const a=new um({radius:i.radius,color:i.color,textureUrl:i.textureUrl});a.position.set(i.position.x,i.position.y,i.position.z),this.scene.add(a)});const t=new mw;t.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(t),this.scene.add(t),this.eGetter.getPlanets().forEach(i=>{bp(i,t)&&(t.landedPlanet=i)})},light:()=>{const t=new em(16777215,5e7);t.position.set(0,100,5e3),this.scene.add(t)},sound:()=>{this.addListeners(()=>Jo.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new V),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new V),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>this.scene.add(new _w),orbitControls:()=>{new cm(this.cameras.staticManualOrbit,this.renderer.domElement)},listeners:()=>{Zt.simulationMode||addEventListener("keypress",t=>{if(t.key===" "){const e=this.getCurrentBall();if(e.landedPlanet){const i=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone()),a=this.eGetter.getPlanets();pm(e,i,a),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.onNewAnimationFrame(),Zt.showFPSCounter&&document.body.appendChild(this.stats.dom)}addListeners(t,e){const i=["mousedown","keypress","touchstart"],a=()=>{t(),e&&i.forEach(o=>removeEventListener(o,a))};i.forEach(o=>addEventListener(o,a))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight)}updateCameras(){const t=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const e=2e3,i=64e-6*Zt.camera.rotationSpeed;this.cameras.autoRotatingOrbit.position.set(Math.sin(t*i)*e,Math.abs(Math.cos(t*i)*e),Math.cos(t*i)*e),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(t){const e=this.eGetter.getPlanets(),i=1/Zt.ticksPerSecond;if(this.accumulatedTime+=t,!Zt.usePreCalculatedFlight)for(;this.accumulatedTime>=i;)this.bounceBallsOffPlanets(e),this.gravitateBalls(i),this.accumulatedTime-=i;this.balls.forEach(a=>a.tick(e))}bounceBallsOffPlanets(t){t.forEach(e=>{this.balls.forEach(i=>{if(bp(e,i)){const a=fm({staticSphere:e,movingSphere:i});Zt.simulationMode&&console.log("## simulation","hit",i.position.toArray().map(c=>Math.floor(c)).toString());const o=Math.min(1,i.velocity.length()/5);Jo.ballHit(o),i.velocity=a,dm(i,e),i.velocity.length()<.2&&!i.landedPlanet&&this.stopBall(i,e)}})})}gravitateBalls(t){this.eGetter.getPlanets().forEach(i=>{this.balls.forEach(a=>{a.addVelocity(hm({puller:i,pulled:a,timeDelta:t}))})})}stopBall(t,e){t.landedPlanet=e,Zt.simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(t),this.cameras.aim.reset(t),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(t=>this.scene.remove(t)),this.balls.forEach(t=>{this.scene.add(t.createTrace())})}onNewAnimationFrame(){const t=this.clock.getDelta();this.renderer.render(this.scene,this.activeCamera),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(t),this.updateBallTrace(),tw.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new bw;
