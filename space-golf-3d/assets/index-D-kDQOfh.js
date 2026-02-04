(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const ku="182",Es={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oS=0,Md=1,lS=2,zo=1,cS=2,la=3,vr=0,Dn=1,yi=2,Ki=0,ys=1,Sd=2,Ed=3,yd=4,uS=5,Fr=100,hS=101,fS=102,dS=103,pS=104,mS=200,_S=201,gS=202,xS=203,Kc=204,Zc=205,vS=206,MS=207,SS=208,ES=209,yS=210,TS=211,bS=212,AS=213,wS=214,$c=0,Jc=1,jc=2,bs=3,Qc=4,tu=5,eu=6,nu=7,Wu=0,RS=1,CS=2,Ai=0,bp=1,Ap=2,wp=3,Rp=4,Cp=5,Pp=6,Dp=7,Lp=300,Gr=301,As=302,iu=303,ru=304,$o=306,su=1e3,Yi=1001,au=1002,_n=1003,PS=1004,po=1005,yn=1006,fc=1007,Br=1008,Kn=1009,Ip=1010,Up=1011,pa=1012,Xu=1013,Ci=1014,Ti=1015,$i=1016,qu=1017,Yu=1018,ma=1020,Np=35902,Fp=35899,Op=1021,Bp=1022,mi=1023,Ji=1026,zr=1027,zp=1028,Ku=1029,ws=1030,Zu=1031,$u=1033,Go=33776,Ho=33777,Vo=33778,ko=33779,ou=35840,lu=35841,cu=35842,uu=35843,hu=36196,fu=37492,du=37496,pu=37488,mu=37489,_u=37490,gu=37491,xu=37808,vu=37809,Mu=37810,Su=37811,Eu=37812,yu=37813,Tu=37814,bu=37815,Au=37816,wu=37817,Ru=37818,Cu=37819,Pu=37820,Du=37821,Lu=36492,Iu=36494,Uu=36495,Nu=36283,Fu=36284,Ou=36285,Bu=36286,DS=3200,Gp=0,LS=1,_r="",si="srgb",Rs="srgb-linear",qo="linear",Oe="srgb",as=7680,Td=519,IS=512,US=513,NS=514,Ju=515,FS=516,OS=517,ju=518,BS=519,bd=35044,Ad="300 es",bi=2e3,Yo=2001;function Hp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function _a(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zS(){const s=_a("canvas");return s.style.display="block",s}const wd={};function Rd(...s){const t="THREE."+s.shift();console.log(t,...s)}function Jt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Re(...s){const t="THREE."+s.shift();console.error(t,...s)}function ga(...s){const t=s.join(" ");t in wd||(wd[t]=!0,Jt(...s))}function GS(s,t,e){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}class Vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wo=Math.PI/180,zu=180/Math.PI;function va(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function HS(s,t){return(s%t+t)%t}function dc(s,t,e){return(1-e)*s+e*t}function ta(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const VS={DEG2RAD:Wo};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*a+t.x,this.y=o*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hr{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,c,u){let d=i[a+0],f=i[a+1],p=i[a+2],_=i[a+3],x=o[c+0],v=o[c+1],y=o[c+2],w=o[c+3];if(u<=0){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u>=1){t[e+0]=x,t[e+1]=v,t[e+2]=y,t[e+3]=w;return}if(_!==w||d!==x||f!==v||p!==y){let g=d*x+f*v+p*y+_*w;g<0&&(x=-x,v=-v,y=-y,w=-w,g=-g);let m=1-u;if(g<.9995){const L=Math.acos(g),I=Math.sin(L);m=Math.sin(m*L)/I,u=Math.sin(u*L)/I,d=d*m+x*u,f=f*m+v*u,p=p*m+y*u,_=_*m+w*u}else{d=d*m+x*u,f=f*m+v*u,p=p*m+y*u,_=_*m+w*u;const L=1/Math.sqrt(d*d+f*f+p*p+_*_);d*=L,f*=L,p*=L,_*=L}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,a,o,c){const u=i[a],d=i[a+1],f=i[a+2],p=i[a+3],_=o[c],x=o[c+1],v=o[c+2],y=o[c+3];return t[e]=u*y+p*_+d*v-f*x,t[e+1]=d*y+p*x+f*_-u*v,t[e+2]=f*y+p*v+u*x-d*_,t[e+3]=p*y-u*_-d*x-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,d=Math.sin,f=u(i/2),p=u(a/2),_=u(o/2),x=d(i/2),v=d(a/2),y=d(o/2);switch(c){case"XYZ":this._x=x*p*_+f*v*y,this._y=f*v*_-x*p*y,this._z=f*p*y+x*v*_,this._w=f*p*_-x*v*y;break;case"YXZ":this._x=x*p*_+f*v*y,this._y=f*v*_-x*p*y,this._z=f*p*y-x*v*_,this._w=f*p*_+x*v*y;break;case"ZXY":this._x=x*p*_-f*v*y,this._y=f*v*_+x*p*y,this._z=f*p*y+x*v*_,this._w=f*p*_-x*v*y;break;case"ZYX":this._x=x*p*_-f*v*y,this._y=f*v*_+x*p*y,this._z=f*p*y-x*v*_,this._w=f*p*_+x*v*y;break;case"YZX":this._x=x*p*_+f*v*y,this._y=f*v*_+x*p*y,this._z=f*p*y-x*v*_,this._w=f*p*_-x*v*y;break;case"XZY":this._x=x*p*_-f*v*y,this._y=f*v*_-x*p*y,this._z=f*p*y+x*v*_,this._w=f*p*_+x*v*y;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],f=e[2],p=e[6],_=e[10],x=i+u+_;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(p-d)*v,this._y=(o-f)*v,this._z=(c-a)*v}else if(i>u&&i>_){const v=2*Math.sqrt(1+i-u-_);this._w=(p-d)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(o+f)/v}else if(u>_){const v=2*Math.sqrt(1+u-i-_);this._w=(o-f)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(d+p)/v}else{const v=2*Math.sqrt(1+_-i-u);this._w=(c-a)/v,this._x=(o+f)/v,this._y=(d+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,o=t._z,c=t._w,u=e._x,d=e._y,f=e._z,p=e._w;return this._x=i*p+c*u+a*f-o*d,this._y=a*p+c*d+o*u-i*f,this._z=o*p+c*f+i*d-a*u,this._w=c*p-i*u-a*d-o*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,a=t._y,o=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,a=-a,o=-o,c=-c,u=-u);let d=1-e;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);d=Math.sin(d*f)/p,e=Math.sin(e*f)/p,this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+o*e,this._w=this._w*d+c*e,this._onChangeCallback()}else this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+o*e,this._w=this._w*d+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,o=t.x,c=t.y,u=t.z,d=t.w,f=2*(c*a-u*i),p=2*(u*e-o*a),_=2*(o*i-c*e);return this.x=e+d*f+c*_-u*p,this.y=i+d*p+u*f-o*_,this.z=a+d*_+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,o=t.z,c=e.x,u=e.y,d=e.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new X,Cd=new Hr;class oe{constructor(t,e,i,a,o,c,u,d,f){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f)}set(t,e,i,a,o,c,u,d,f){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],p=i[4],_=i[7],x=i[2],v=i[5],y=i[8],w=a[0],g=a[3],m=a[6],L=a[1],I=a[4],D=a[7],F=a[2],B=a[5],C=a[8];return o[0]=c*w+u*L+d*F,o[3]=c*g+u*I+d*B,o[6]=c*m+u*D+d*C,o[1]=f*w+p*L+_*F,o[4]=f*g+p*I+_*B,o[7]=f*m+p*D+_*C,o[2]=x*w+v*L+y*F,o[5]=x*g+v*I+y*B,o[8]=x*m+v*D+y*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8];return e*c*p-e*u*f-i*o*p+i*u*d+a*o*f-a*c*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],_=p*c-u*f,x=u*d-p*o,v=f*o-c*d,y=e*_+i*x+a*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return t[0]=_*w,t[1]=(a*f-p*i)*w,t[2]=(u*i-a*c)*w,t[3]=x*w,t[4]=(p*e-a*d)*w,t[5]=(a*o-u*e)*w,t[6]=v*w,t[7]=(i*d-f*e)*w,t[8]=(c*e-i*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,c,u){const d=Math.cos(o),f=Math.sin(o);return this.set(i*d,i*f,-i*(d*c+f*u)+c+t,-a*f,a*d,-a*(-f*c+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new oe,Pd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Oe&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Oe&&(a.r=Ts(a.r),a.g=Ts(a.g),a.b=Ts(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?qo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:i,transfer:qo,toXYZ:Pd,fromXYZ:Dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Oe,toXYZ:Pd,fromXYZ:Dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Te=kS();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class WS{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{os===void 0&&(os=_a("canvas")),os.width=t.width,os.height=t.height;const a=os.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=os}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Zi(o[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let XS=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(_c(a[c].image)):o.push(_c(a[c]))}else o=_c(a);i.url=o}return e||(t.images[this.uuid]=i),i}}function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?WS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let qS=0;const gc=new X;class Tn extends Vr{constructor(t=Tn.DEFAULT_IMAGE,e=Tn.DEFAULT_MAPPING,i=Yi,a=Yi,o=yn,c=Br,u=mi,d=Kn,f=Tn.DEFAULT_ANISOTROPY,p=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=va(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case su:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case au:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case su:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case au:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Lp;Tn.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,e=0,i=0,a=1){Je.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o;const d=t.elements,f=d[0],p=d[4],_=d[8],x=d[1],v=d[5],y=d[9],w=d[2],g=d[6],m=d[10];if(Math.abs(p-x)<.01&&Math.abs(_-w)<.01&&Math.abs(y-g)<.01){if(Math.abs(p+x)<.1&&Math.abs(_+w)<.1&&Math.abs(y+g)<.1&&Math.abs(f+v+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(f+1)/2,D=(v+1)/2,F=(m+1)/2,B=(p+x)/4,C=(_+w)/4,O=(y+g)/4;return I>D&&I>F?I<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(I),a=B/i,o=C/i):D>F?D<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(D),i=B/a,o=O/a):F<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(F),i=C/o,a=O/o),this.set(i,a,o,e),this}let L=Math.sqrt((g-y)*(g-y)+(_-w)*(_-w)+(x-p)*(x-p));return Math.abs(L)<.001&&(L=1),this.x=(g-y)/L,this.y=(_-w)/L,this.z=(x-p)/L,this.w=Math.acos((f+v+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_e(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YS extends Vr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e);const a={width:t,height:e,depth:i.depth},o=new Tn(a);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new Qu(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends YS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Vp extends Tn{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends Tn{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,hi):hi.fromBufferAttribute(o,c),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),_o.subVectors(this.max,ea),ls.subVectors(t.a,ea),cs.subVectors(t.b,ea),us.subVectors(t.c,ea),lr.subVectors(cs,ls),cr.subVectors(us,cs),Pr.subVectors(ls,us);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Pr.z,Pr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Pr.z,0,-Pr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Pr.y,Pr.x,0];return!xc(e,ls,cs,us,_o)||(e=[1,0,0,0,1,0,0,0,1],!xc(e,ls,cs,us,_o))?!1:(go.crossVectors(lr,cr),e=[go.x,go.y,go.z],xc(e,ls,cs,us,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new X,new X,new X,new X,new X,new X,new X,new X],hi=new X,mo=new Ma,ls=new X,cs=new X,us=new X,lr=new X,cr=new X,Pr=new X,ea=new X,_o=new X,go=new X,Dr=new X;function xc(s,t,e,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){Dr.fromArray(s,o);const u=a.x*Math.abs(Dr.x)+a.y*Math.abs(Dr.y)+a.z*Math.abs(Dr.z),d=t.dot(Dr),f=e.dot(Dr),p=i.dot(Dr);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const ZS=new Ma,na=new X,vc=new X;class Jo{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ZS.setFromPoints(t).getCenter(i);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);const e=na.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(na,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(vc)),this.expandByPoint(na.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ki=new X,Mc=new X,xo=new X,ur=new X,Sc=new X,vo=new X,Ec=new X;class th{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ki.copy(this.origin).addScaledVector(this.direction,e),ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Mc.copy(t).add(e).multiplyScalar(.5),xo.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(Mc);const o=t.distanceTo(e)*.5,c=-this.direction.dot(xo),u=ur.dot(this.direction),d=-ur.dot(xo),f=ur.lengthSq(),p=Math.abs(1-c*c);let _,x,v,y;if(p>0)if(_=c*d-u,x=c*u-d,y=o*p,_>=0)if(x>=-y)if(x<=y){const w=1/p;_*=w,x*=w,v=_*(_+c*x+2*u)+x*(c*_+x+2*d)+f}else x=o,_=Math.max(0,-(c*x+u)),v=-_*_+x*(x+2*d)+f;else x=-o,_=Math.max(0,-(c*x+u)),v=-_*_+x*(x+2*d)+f;else x<=-y?(_=Math.max(0,-(-c*o+u)),x=_>0?-o:Math.min(Math.max(-o,-d),o),v=-_*_+x*(x+2*d)+f):x<=y?(_=0,x=Math.min(Math.max(-o,-d),o),v=x*(x+2*d)+f):(_=Math.max(0,-(c*o+u)),x=_>0?o:Math.min(Math.max(-o,-d),o),v=-_*_+x*(x+2*d)+f);else x=c>0?-o:o,_=Math.max(0,-(c*x+u)),v=-_*_+x*(x+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Mc).addScaledVector(xo,x),v}intersectSphere(t,e){ki.subVectors(t.center,this.origin);const i=ki.dot(this.direction),a=ki.dot(ki)-i*i,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,x=this.origin;return f>=0?(i=(t.min.x-x.x)*f,a=(t.max.x-x.x)*f):(i=(t.max.x-x.x)*f,a=(t.min.x-x.x)*f),p>=0?(o=(t.min.y-x.y)*p,c=(t.max.y-x.y)*p):(o=(t.max.y-x.y)*p,c=(t.min.y-x.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-x.z)*_,d=(t.max.z-x.z)*_):(u=(t.max.z-x.z)*_,d=(t.min.z-x.z)*_),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,ki)!==null}intersectTriangle(t,e,i,a,o){Sc.subVectors(e,t),vo.subVectors(i,t),Ec.crossVectors(Sc,vo);let c=this.direction.dot(Ec),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ur.subVectors(this.origin,t);const d=u*this.direction.dot(vo.crossVectors(ur,vo));if(d<0)return null;const f=u*this.direction.dot(Sc.cross(ur));if(f<0||d+f>c)return null;const p=-u*ur.dot(Ec);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,e,i,a,o,c,u,d,f,p,_,x,v,y,w,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f,p,_,x,v,y,w,g)}set(t,e,i,a,o,c,u,d,f,p,_,x,v,y,w,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=d,m[2]=f,m[6]=p,m[10]=_,m[14]=x,m[3]=v,m[7]=y,m[11]=w,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/hs.setFromMatrixColumn(t,0).length(),o=1/hs.setFromMatrixColumn(t,1).length(),c=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const x=c*p,v=c*_,y=u*p,w=u*_;e[0]=d*p,e[4]=-d*_,e[8]=f,e[1]=v+y*f,e[5]=x-w*f,e[9]=-u*d,e[2]=w-x*f,e[6]=y+v*f,e[10]=c*d}else if(t.order==="YXZ"){const x=d*p,v=d*_,y=f*p,w=f*_;e[0]=x+w*u,e[4]=y*u-v,e[8]=c*f,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=v*u-y,e[6]=w+x*u,e[10]=c*d}else if(t.order==="ZXY"){const x=d*p,v=d*_,y=f*p,w=f*_;e[0]=x-w*u,e[4]=-c*_,e[8]=y+v*u,e[1]=v+y*u,e[5]=c*p,e[9]=w-x*u,e[2]=-c*f,e[6]=u,e[10]=c*d}else if(t.order==="ZYX"){const x=c*p,v=c*_,y=u*p,w=u*_;e[0]=d*p,e[4]=y*f-v,e[8]=x*f+w,e[1]=d*_,e[5]=w*f+x,e[9]=v*f-y,e[2]=-f,e[6]=u*d,e[10]=c*d}else if(t.order==="YZX"){const x=c*d,v=c*f,y=u*d,w=u*f;e[0]=d*p,e[4]=w-x*_,e[8]=y*_+v,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-f*p,e[6]=v*_+y,e[10]=x-w*_}else if(t.order==="XZY"){const x=c*d,v=c*f,y=u*d,w=u*f;e[0]=d*p,e[4]=-_,e[8]=f*p,e[1]=x*_+w,e[5]=c*p,e[9]=v*_-y,e[2]=y*_-v,e[6]=u*p,e[10]=w*_+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($S,t,JS)}lookAt(t,e,i){const a=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),hr.crossVectors(i,qn),hr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),hr.crossVectors(i,qn)),hr.normalize(),Mo.crossVectors(qn,hr),a[0]=hr.x,a[4]=Mo.x,a[8]=qn.x,a[1]=hr.y,a[5]=Mo.y,a[9]=qn.y,a[2]=hr.z,a[6]=Mo.z,a[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],p=i[1],_=i[5],x=i[9],v=i[13],y=i[2],w=i[6],g=i[10],m=i[14],L=i[3],I=i[7],D=i[11],F=i[15],B=a[0],C=a[4],O=a[8],S=a[12],T=a[1],N=a[5],q=a[9],K=a[13],nt=a[2],it=a[6],tt=a[10],$=a[14],ot=a[3],wt=a[7],St=a[11],Et=a[15];return o[0]=c*B+u*T+d*nt+f*ot,o[4]=c*C+u*N+d*it+f*wt,o[8]=c*O+u*q+d*tt+f*St,o[12]=c*S+u*K+d*$+f*Et,o[1]=p*B+_*T+x*nt+v*ot,o[5]=p*C+_*N+x*it+v*wt,o[9]=p*O+_*q+x*tt+v*St,o[13]=p*S+_*K+x*$+v*Et,o[2]=y*B+w*T+g*nt+m*ot,o[6]=y*C+w*N+g*it+m*wt,o[10]=y*O+w*q+g*tt+m*St,o[14]=y*S+w*K+g*$+m*Et,o[3]=L*B+I*T+D*nt+F*ot,o[7]=L*C+I*N+D*it+F*wt,o[11]=L*O+I*q+D*tt+F*St,o[15]=L*S+I*K+D*$+F*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],c=t[1],u=t[5],d=t[9],f=t[13],p=t[2],_=t[6],x=t[10],v=t[14],y=t[3],w=t[7],g=t[11],m=t[15],L=d*v-f*x,I=u*v-f*_,D=u*x-d*_,F=c*v-f*p,B=c*x-d*p,C=c*_-u*p;return e*(w*L-g*I+m*D)-i*(y*L-g*F+m*B)+a*(y*I-w*F+m*C)-o*(y*D-w*B+g*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],_=t[9],x=t[10],v=t[11],y=t[12],w=t[13],g=t[14],m=t[15],L=_*g*f-w*x*f+w*d*v-u*g*v-_*d*m+u*x*m,I=y*x*f-p*g*f-y*d*v+c*g*v+p*d*m-c*x*m,D=p*w*f-y*_*f+y*u*v-c*w*v-p*u*m+c*_*m,F=y*_*d-p*w*d-y*u*x+c*w*x+p*u*g-c*_*g,B=e*L+i*I+a*D+o*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/B;return t[0]=L*C,t[1]=(w*x*o-_*g*o-w*a*v+i*g*v+_*a*m-i*x*m)*C,t[2]=(u*g*o-w*d*o+w*a*f-i*g*f-u*a*m+i*d*m)*C,t[3]=(_*d*o-u*x*o-_*a*f+i*x*f+u*a*v-i*d*v)*C,t[4]=I*C,t[5]=(p*g*o-y*x*o+y*a*v-e*g*v-p*a*m+e*x*m)*C,t[6]=(y*d*o-c*g*o-y*a*f+e*g*f+c*a*m-e*d*m)*C,t[7]=(c*x*o-p*d*o+p*a*f-e*x*f-c*a*v+e*d*v)*C,t[8]=D*C,t[9]=(y*_*o-p*w*o-y*i*v+e*w*v+p*i*m-e*_*m)*C,t[10]=(c*w*o-y*u*o+y*i*f-e*w*f-c*i*m+e*u*m)*C,t[11]=(p*u*o-c*_*o-p*i*f+e*_*f+c*i*v-e*u*v)*C,t[12]=F*C,t[13]=(p*w*a-y*_*a+y*i*x-e*w*x-p*i*g+e*_*g)*C,t[14]=(y*u*a-c*w*a-y*i*d+e*w*d+c*i*g-e*u*g)*C,t[15]=(c*_*a-p*u*a+p*i*d-e*_*d-c*i*x+e*u*x)*C,this}scale(t){const e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),o=1-i,c=t.x,u=t.y,d=t.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-a*d,f*d+a*u,0,f*u+a*d,p*u+i,p*d-a*c,0,f*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,c){return this.set(1,i,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,o=e._x,c=e._y,u=e._z,d=e._w,f=o+o,p=c+c,_=u+u,x=o*f,v=o*p,y=o*_,w=c*p,g=c*_,m=u*_,L=d*f,I=d*p,D=d*_,F=i.x,B=i.y,C=i.z;return a[0]=(1-(w+m))*F,a[1]=(v+D)*F,a[2]=(y-I)*F,a[3]=0,a[4]=(v-D)*B,a[5]=(1-(x+m))*B,a[6]=(g+L)*B,a[7]=0,a[8]=(y+I)*C,a[9]=(g-L)*C,a[10]=(1-(x+w))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;if(t.x=a[12],t.y=a[13],t.z=a[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let o=hs.set(a[0],a[1],a[2]).length();const c=hs.set(a[4],a[5],a[6]).length(),u=hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),fi.copy(this);const f=1/o,p=1/c,_=1/u;return fi.elements[0]*=f,fi.elements[1]*=f,fi.elements[2]*=f,fi.elements[4]*=p,fi.elements[5]*=p,fi.elements[6]*=p,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,e.setFromRotationMatrix(fi),i.x=o,i.y=c,i.z=u,this}makePerspective(t,e,i,a,o,c,u=bi,d=!1){const f=this.elements,p=2*o/(e-t),_=2*o/(i-a),x=(e+t)/(e-t),v=(i+a)/(i-a);let y,w;if(d)y=o/(c-o),w=c*o/(c-o);else if(u===bi)y=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Yo)y=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=x,f[12]=0,f[1]=0,f[5]=_,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,a,o,c,u=bi,d=!1){const f=this.elements,p=2/(e-t),_=2/(i-a),x=-(e+t)/(e-t),v=-(i+a)/(i-a);let y,w;if(d)y=1/(c-o),w=c/(c-o);else if(u===bi)y=-2/(c-o),w=-(c+o)/(c-o);else if(u===Yo)y=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=x,f[1]=0,f[5]=_,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=y,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new X,fi=new Ke,$S=new X(0,0,0),JS=new X(1,1,1),hr=new X,Mo=new X,qn=new X,Ld=new Ke,Id=new Hr;class Pi{constructor(t=0,e=0,i=0,a=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],d=a[1],f=a[5],p=a[9],_=a[2],x=a[6],v=a[10];switch(e){case"XYZ":this._y=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jS=0;const Ud=new X,fs=new Hr,Wi=new Ke,So=new X,ia=new X,QS=new X,tE=new Hr,Nd=new X(1,0,0),Fd=new X(0,1,0),Od=new X(0,0,1),Bd={type:"added"},eE={type:"removed"},ds={type:"childadded",child:null},yc={type:"childremoved",child:null};class bn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new X,e=new Pi,i=new Hr,a=new X(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ke},normalMatrix:{value:new oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Fd,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Ud.copy(t).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Fd,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ia,So,this.up):Wi.lookAt(So,ia,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),fs.setFromRotationMatrix(Wi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bd),ds.child=t,this.dispatchEvent(ds),ds.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eE),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bd),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,QS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,tE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const _=d[f];o(t.shapes,_)}else o(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(t.materials,this.material[d]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(t.animations,d))}}if(e){const u=c(t.geometries),d=c(t.materials),f=c(t.textures),p=c(t.images),_=c(t.shapes),x=c(t.skeletons),v=c(t.animations),y=c(t.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),x.length>0&&(i.skeletons=x),v.length>0&&(i.animations=v),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}bn.DEFAULT_UP=new X(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new X,Xi=new X,Tc=new X,qi=new X,ps=new X,ms=new X,zd=new X,bc=new X,Ac=new X,wc=new X,Rc=new Je,Cc=new Je,Pc=new Je;class pi{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),di.subVectors(t,e),a.cross(di);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){di.subVectors(a,e),Xi.subVectors(i,e),Tc.subVectors(t,e);const c=di.dot(di),u=di.dot(Xi),d=di.dot(Tc),f=Xi.dot(Xi),p=Xi.dot(Tc),_=c*f-u*u;if(_===0)return o.set(0,0,0),null;const x=1/_,v=(f*d-u*p)*x,y=(c*p-u*d)*x;return o.set(1-v-y,y,v)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,i,a,o,c,u,d){return this.getBarycoord(t,e,i,a,qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,qi.x),d.addScaledVector(c,qi.y),d.addScaledVector(u,qi.z),d)}static getInterpolatedAttribute(t,e,i,a,o,c){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(Rc,o.x),c.addScaledVector(Cc,o.y),c.addScaledVector(Pc,o.z),c}static isFrontFacing(t,e,i,a){return di.subVectors(i,e),Xi.subVectors(t,e),di.cross(Xi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),di.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return pi.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,o=this.c;let c,u;ps.subVectors(a,i),ms.subVectors(o,i),bc.subVectors(t,i);const d=ps.dot(bc),f=ms.dot(bc);if(d<=0&&f<=0)return e.copy(i);Ac.subVectors(t,a);const p=ps.dot(Ac),_=ms.dot(Ac);if(p>=0&&_<=p)return e.copy(a);const x=d*_-p*f;if(x<=0&&d>=0&&p<=0)return c=d/(d-p),e.copy(i).addScaledVector(ps,c);wc.subVectors(t,o);const v=ps.dot(wc),y=ms.dot(wc);if(y>=0&&v<=y)return e.copy(o);const w=v*f-d*y;if(w<=0&&f>=0&&y<=0)return u=f/(f-y),e.copy(i).addScaledVector(ms,u);const g=p*y-v*_;if(g<=0&&_-p>=0&&v-y>=0)return zd.subVectors(o,a),u=(_-p)/(_-p+(v-y)),e.copy(a).addScaledVector(zd,u);const m=1/(g+w+x);return c=w*m,u=x*m,e.copy(i).addScaledVector(ps,c).addScaledVector(ms,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Dc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=Te.workingColorSpace){if(t=HS(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Dc(c,o,t+1/3),this.g=Dc(c,o,t),this.b=Dc(c,o,t-1/3)}return Te.colorSpaceToWorking(this,a),this}setStyle(t,e=si){function i(o){o!==void 0&&parseFloat(o)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=Wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Te.workingToColorSpace(En.copy(this),t),Math.round(_e(En.r*255,0,255))*65536+Math.round(_e(En.g*255,0,255))*256+Math.round(_e(En.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(En.copy(this),e);const i=En.r,a=En.g,o=En.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const _=c-u;switch(f=p<=.5?_/(c+u):_/(2-c-u),c){case i:d=(a-o)/_+(a<o?6:0);break;case a:d=(o-i)/_+2;break;case o:d=(i-a)/_+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=si){Te.workingToColorSpace(En.copy(this),t);const e=En.r,i=En.g,a=En.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+e,fr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fr),t.getHSL(Eo);const i=dc(fr.h,Eo.h,e),a=dc(fr.s,Eo.s,e),o=dc(fr.l,Eo.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ee;Ee.NAMES=Wp;let nE=0;class Ps extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=va(),this.name="",this.type="Material",this.blending=ys,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Zc&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ds extends Ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new X,yo=new te;let iE=0;class Ri{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ta(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ta(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ta(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ta(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ta(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array),a=Fn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),i=Fn(i,this.array),a=Fn(a,this.array),o=Fn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bd&&(t.usage=this.usage),t}}class Xp extends Ri{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qp extends Ri{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gn extends Ri{constructor(t,e,i){super(new Float32Array(t),e,i)}}let rE=0;const ri=new Ke,Lc=new bn,_s=new X,Yn=new Ma,ra=new Ma,hn=new X;class zn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?qp:Xp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new oe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,i){return ri.makeTranslation(t,e,i),this.applyMatrix4(ri),this}scale(t,e,i){return ri.makeScale(t,e,i),this.applyMatrix4(ri),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Yn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];ra.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Yn.min,ra.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,ra.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(ra.min),Yn.expandByPoint(ra.max))}Yn.getCenter(i);let a=0;for(let o=0,c=t.count;o<c;o++)hn.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(hn));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)hn.fromBufferAttribute(u,f),d&&(_s.fromBufferAttribute(t,f),hn.add(_s)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let O=0;O<i.count;O++)u[O]=new X,d[O]=new X;const f=new X,p=new X,_=new X,x=new te,v=new te,y=new te,w=new X,g=new X;function m(O,S,T){f.fromBufferAttribute(i,O),p.fromBufferAttribute(i,S),_.fromBufferAttribute(i,T),x.fromBufferAttribute(o,O),v.fromBufferAttribute(o,S),y.fromBufferAttribute(o,T),p.sub(f),_.sub(f),v.sub(x),y.sub(x);const N=1/(v.x*y.y-y.x*v.y);isFinite(N)&&(w.copy(p).multiplyScalar(y.y).addScaledVector(_,-v.y).multiplyScalar(N),g.copy(_).multiplyScalar(v.x).addScaledVector(p,-y.x).multiplyScalar(N),u[O].add(w),u[S].add(w),u[T].add(w),d[O].add(g),d[S].add(g),d[T].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let O=0,S=L.length;O<S;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,nt=N+q;K<nt;K+=3)m(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const I=new X,D=new X,F=new X,B=new X;function C(O){F.fromBufferAttribute(a,O),B.copy(F);const S=u[O];I.copy(S),I.sub(F.multiplyScalar(F.dot(S))).normalize(),D.crossVectors(B,S);const N=D.dot(d[O])<0?-1:1;c.setXYZW(O,I.x,I.y,I.z,N)}for(let O=0,S=L.length;O<S;++O){const T=L[O],N=T.start,q=T.count;for(let K=N,nt=N+q;K<nt;K+=3)C(t.getX(K+0)),C(t.getX(K+1)),C(t.getX(K+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let x=0,v=i.count;x<v;x++)i.setXYZ(x,0,0,0);const a=new X,o=new X,c=new X,u=new X,d=new X,f=new X,p=new X,_=new X;if(t)for(let x=0,v=t.count;x<v;x+=3){const y=t.getX(x+0),w=t.getX(x+1),g=t.getX(x+2);a.fromBufferAttribute(e,y),o.fromBufferAttribute(e,w),c.fromBufferAttribute(e,g),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,g),u.add(p),d.add(p),f.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(g,f.x,f.y,f.z)}else for(let x=0,v=e.count;x<v;x+=3)a.fromBufferAttribute(e,x+0),o.fromBufferAttribute(e,x+1),c.fromBufferAttribute(e,x+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),i.setXYZ(x+0,p.x,p.y,p.z),i.setXYZ(x+1,p.x,p.y,p.z),i.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,d){const f=u.array,p=u.itemSize,_=u.normalized,x=new f.constructor(d.length*p);let v=0,y=0;for(let w=0,g=d.length;w<g;w++){u.isInterleavedBufferAttribute?v=d[w]*u.data.stride+u.offset:v=d[w]*p;for(let m=0;m<p;m++)x[y++]=f[v++]}return new Ri(x,p,_)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],f=t(d,i);e.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let p=0,_=f.length;p<_;p++){const x=f[p],v=t(x,i);d.push(v)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const a={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let _=0,x=f.length;_<x;_++){const v=f[_];p.push(v.toJSON(t.data))}p.length>0&&(a[d]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const f in a){const p=a[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],_=o[f];for(let x=0,v=_.length;x<v;x++)p.push(_[x].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gd=new Ke,Lr=new th,To=new Jo,Hd=new X,bo=new X,Ao=new X,wo=new X,Ic=new X,Ro=new X,Vd=new X,Co=new X;class Bn extends bn{constructor(t=new zn,e=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){Ro.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const p=u[d],_=o[d];p!==0&&(Ic.fromBufferAttribute(_,t),c?Ro.addScaledVector(Ic,p):Ro.addScaledVector(Ic.sub(e),p))}e.add(Ro)}return e}raycast(t,e){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(o),Lr.copy(t.ray).recast(t.near),!(To.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(To,Hd)===null||Lr.origin.distanceToSquared(Hd)>(t.far-t.near)**2))&&(Gd.copy(o).invert(),Lr.copy(t.ray).applyMatrix4(Gd),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,x=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,w=x.length;y<w;y++){const g=x[y],m=c[g.materialIndex],L=Math.max(g.start,v.start),I=Math.min(u.count,Math.min(g.start+g.count,v.start+v.count));for(let D=L,F=I;D<F;D+=3){const B=u.getX(D),C=u.getX(D+1),O=u.getX(D+2);a=Po(this,m,t,i,f,p,_,B,C,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const y=Math.max(0,v.start),w=Math.min(u.count,v.start+v.count);for(let g=y,m=w;g<m;g+=3){const L=u.getX(g),I=u.getX(g+1),D=u.getX(g+2);a=Po(this,c,t,i,f,p,_,L,I,D),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,w=x.length;y<w;y++){const g=x[y],m=c[g.materialIndex],L=Math.max(g.start,v.start),I=Math.min(d.count,Math.min(g.start+g.count,v.start+v.count));for(let D=L,F=I;D<F;D+=3){const B=D,C=D+1,O=D+2;a=Po(this,m,t,i,f,p,_,B,C,O),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const y=Math.max(0,v.start),w=Math.min(d.count,v.start+v.count);for(let g=y,m=w;g<m;g+=3){const L=g,I=g+1,D=g+2;a=Po(this,c,t,i,f,p,_,L,I,D),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}}}function sE(s,t,e,i,a,o,c,u){let d;if(t.side===Dn?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,t.side===vr,u),d===null)return null;Co.copy(u),Co.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Co);return f<e.near||f>e.far?null:{distance:f,point:Co.clone(),object:s}}function Po(s,t,e,i,a,o,c,u,d,f){s.getVertexPosition(u,bo),s.getVertexPosition(d,Ao),s.getVertexPosition(f,wo);const p=sE(s,t,e,i,bo,Ao,wo,Vd);if(p){const _=new X;pi.getBarycoord(Vd,bo,Ao,wo,_),a&&(p.uv=pi.getInterpolatedAttribute(a,u,d,f,_,new te)),o&&(p.uv1=pi.getInterpolatedAttribute(o,u,d,f,_,new te)),c&&(p.normal=pi.getInterpolatedAttribute(c,u,d,f,_,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const x={a:u,b:d,c:f,normal:new X,materialIndex:0};pi.getNormal(bo,Ao,wo,x.normal),p.face=x,p.barycoord=_}return p}class Ls extends zn{constructor(t=1,e=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],f=[],p=[],_=[];let x=0,v=0;y("z","y","x",-1,-1,i,e,t,c,o,0),y("z","y","x",1,-1,i,e,-t,c,o,1),y("x","z","y",1,1,t,i,e,a,c,2),y("x","z","y",1,-1,t,i,-e,a,c,3),y("x","y","z",1,-1,t,e,i,a,o,4),y("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(_,2));function y(w,g,m,L,I,D,F,B,C,O,S){const T=D/C,N=F/O,q=D/2,K=F/2,nt=B/2,it=C+1,tt=O+1;let $=0,ot=0;const wt=new X;for(let St=0;St<tt;St++){const Et=St*N-K;for(let le=0;le<it;le++){const ee=le*T-q;wt[w]=ee*L,wt[g]=Et*I,wt[m]=nt,f.push(wt.x,wt.y,wt.z),wt[w]=0,wt[g]=0,wt[m]=B>0?1:-1,p.push(wt.x,wt.y,wt.z),_.push(le/C),_.push(1-St/O),$+=1}}for(let St=0;St<O;St++)for(let Et=0;Et<C;Et++){const le=x+Et+it*St,ee=x+Et+it*(St+1),He=x+(Et+1)+it*(St+1),be=x+(Et+1)+it*St;d.push(le,ee,be),d.push(ee,He,be),ot+=6}u.addGroup(v,ot,S),v+=ot,x+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Pn(s){const t={};for(let e=0;e<s.length;e++){const i=Cs(s[e]);for(const a in i)t[a]=i[a]}return t}function aE(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Yp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const oE={clone:Cs,merge:Pn};var lE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lE,this.fragmentShader=cE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=aE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Kp extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new X,kd=new te,Wd=new te;class fn extends Kp{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,kd,Wd),e.subVectors(Wd,kd)}setViewOffset(t,e,i,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/d,e-=c.offsetY*i/f,a*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,xs=1;class uE extends bn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fn(gs,xs,t,e);a.layers=this.layers,this.add(a);const o=new fn(gs,xs,t,e);o.layers=this.layers,this.add(o);const c=new fn(gs,xs,t,e);c.layers=this.layers,this.add(c);const u=new fn(gs,xs,t,e);u.layers=this.layers,this.add(u);const d=new fn(gs,xs,t,e);d.layers=this.layers,this.add(d);const f=new fn(gs,xs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,o,c,u,d]=e;for(const f of e)this.remove(f);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,f,p]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,u),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,f),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(_,x,v),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Zp extends Tn{constructor(t=[],e=Gr,i,a,o,c,u,d,f,p){super(t,e,i,a,o,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $p extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Zp(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ls(5,5,5),o=new Di({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Ki});o.uniforms.tEquirect.value=e;const c=new Bn(a,o),u=e.minFilter;return e.minFilter===Br&&(e.minFilter=yn),new uE(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(o)}}class ca extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hE={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const w of t.hand.values()){const g=e.getJointPose(w,i),m=this._getHandJoint(f,w);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],x=p.position.distanceTo(_.position),v=.02,y=.005;f.inputState.pinching&&x>v+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&x<=v-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(hE)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class fE extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dE extends Tn{constructor(t=null,e=1,i=1,a,o,c,u,d,f=_n,p=_n,_,x){super(null,c,u,d,f,p,a,o,_,x),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new X,pE=new X,mE=new oe;class mr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Nc.subVectors(i,e).cross(pE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Nc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mE.getNormalMatrix(t),a=this.coplanarPoint(Nc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Jo,_E=new te(.5,.5),Do=new X;class eh{constructor(t=new mr,e=new mr,i=new mr,a=new mr,o=new mr,c=new mr){this.planes=[t,e,i,a,o,c]}set(t,e,i,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi,i=!1){const a=this.planes,o=t.elements,c=o[0],u=o[1],d=o[2],f=o[3],p=o[4],_=o[5],x=o[6],v=o[7],y=o[8],w=o[9],g=o[10],m=o[11],L=o[12],I=o[13],D=o[14],F=o[15];if(a[0].setComponents(f-c,v-p,m-y,F-L).normalize(),a[1].setComponents(f+c,v+p,m+y,F+L).normalize(),a[2].setComponents(f+u,v+_,m+w,F+I).normalize(),a[3].setComponents(f-u,v-_,m-w,F-I).normalize(),i)a[4].setComponents(d,x,g,D).normalize(),a[5].setComponents(f-d,v-x,m-g,F-D).normalize();else if(a[4].setComponents(f-d,v-x,m-g,F-D).normalize(),e===bi)a[5].setComponents(f+d,v+x,m+g,F+D).normalize();else if(e===Yo)a[5].setComponents(d,x,g,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){Ir.center.set(0,0,0);const e=_E.distanceTo(t.center);return Ir.radius=.7071067811865476+e,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Do.x=a.normal.x>0?t.max.x:t.min.x,Do.y=a.normal.y>0?t.max.y:t.min.y,Do.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nh extends Ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new X,Zo=new X,Xd=new Ke,sa=new th,Lo=new Jo,Fc=new X,qd=new X;class ih extends bn{constructor(t=new zn,e=new nh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,o=e.count;a<o;a++)Ko.fromBufferAttribute(e,a-1),Zo.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=Ko.distanceTo(Zo);t.setAttribute("lineDistance",new gn(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(a),Lo.radius+=o,t.ray.intersectsSphere(Lo)===!1)return;Xd.copy(a).invert(),sa.copy(t.ray).applyMatrix4(Xd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=i.index,x=i.attributes.position;if(p!==null){const v=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let w=v,g=y-1;w<g;w+=f){const m=p.getX(w),L=p.getX(w+1),I=Io(this,t,sa,d,m,L,w);I&&e.push(I)}if(this.isLineLoop){const w=p.getX(y-1),g=p.getX(v),m=Io(this,t,sa,d,w,g,y-1);m&&e.push(m)}}else{const v=Math.max(0,c.start),y=Math.min(x.count,c.start+c.count);for(let w=v,g=y-1;w<g;w+=f){const m=Io(this,t,sa,d,w,w+1,w);m&&e.push(m)}if(this.isLineLoop){const w=Io(this,t,sa,d,y-1,v,y-1);w&&e.push(w)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Io(s,t,e,i,a,o,c){const u=s.geometry.attributes.position;if(Ko.fromBufferAttribute(u,a),Zo.fromBufferAttribute(u,o),e.distanceSqToSegment(Ko,Zo,Fc,qd)>i)return;Fc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Fc);if(!(f<t.near||f>t.far))return{distance:f,point:qd.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}class xa extends Tn{constructor(t,e,i=Ci,a,o,c,u=_n,d=_n,f,p=Ji,_=1){if(p!==Ji&&p!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:e,depth:_};super(x,a,o,c,u,d,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gE extends xa{constructor(t,e=Ci,i=Gr,a,o,c=_n,u=_n,d,f=Ji){const p={width:t,height:t,depth:1},_=[p,p,p,p,p,p];super(t,t,e,i,a,o,c,u,d,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jp extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rh extends zn{constructor(t=1,e=1,i=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};const f=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],x=[],v=[];let y=0;const w=[],g=i/2;let m=0;L(),c===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(p),this.setAttribute("position",new gn(_,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(v,2));function L(){const D=new X,F=new X;let B=0;const C=(e-t)/i;for(let O=0;O<=o;O++){const S=[],T=O/o,N=T*(e-t)+t;for(let q=0;q<=a;q++){const K=q/a,nt=K*d+u,it=Math.sin(nt),tt=Math.cos(nt);F.x=N*it,F.y=-T*i+g,F.z=N*tt,_.push(F.x,F.y,F.z),D.set(it,C,tt).normalize(),x.push(D.x,D.y,D.z),v.push(K,1-T),S.push(y++)}w.push(S)}for(let O=0;O<a;O++)for(let S=0;S<o;S++){const T=w[S][O],N=w[S+1][O],q=w[S+1][O+1],K=w[S][O+1];(t>0||S!==0)&&(p.push(T,N,K),B+=3),(e>0||S!==o-1)&&(p.push(N,q,K),B+=3)}f.addGroup(m,B,0),m+=B}function I(D){const F=y,B=new te,C=new X;let O=0;const S=D===!0?t:e,T=D===!0?1:-1;for(let q=1;q<=a;q++)_.push(0,g*T,0),x.push(0,T,0),v.push(.5,.5),y++;const N=y;for(let q=0;q<=a;q++){const nt=q/a*d+u,it=Math.cos(nt),tt=Math.sin(nt);C.x=S*tt,C.y=g*T,C.z=S*it,_.push(C.x,C.y,C.z),x.push(0,T,0),B.x=it*.5+.5,B.y=tt*.5*T+.5,v.push(B.x,B.y),y++}for(let q=0;q<a;q++){const K=F+q,nt=N+q;D===!0?p.push(nt,nt+1,K):p.push(nt+1,nt,K),O+=3}f.addGroup(m,O,D===!0?1:2),m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sh extends rh{constructor(t=1,e=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new sh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jo extends zn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(i),d=Math.floor(a),f=u+1,p=d+1,_=t/u,x=e/d,v=[],y=[],w=[],g=[];for(let m=0;m<p;m++){const L=m*x-c;for(let I=0;I<f;I++){const D=I*_-o;y.push(D,-L,0),w.push(0,0,1),g.push(I/u),g.push(1-m/d)}}for(let m=0;m<d;m++)for(let L=0;L<u;L++){const I=L+f*m,D=L+f*(m+1),F=L+1+f*(m+1),B=L+1+f*m;v.push(I,D,B),v.push(D,F,B)}this.setIndex(v),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Is extends zn{constructor(t=1,e=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const p=[],_=new X,x=new X,v=[],y=[],w=[],g=[];for(let m=0;m<=i;m++){const L=[],I=m/i;let D=0;m===0&&c===0?D=.5/e:m===i&&d===Math.PI&&(D=-.5/e);for(let F=0;F<=e;F++){const B=F/e;_.x=-t*Math.cos(a+B*o)*Math.sin(c+I*u),_.y=t*Math.cos(c+I*u),_.z=t*Math.sin(a+B*o)*Math.sin(c+I*u),y.push(_.x,_.y,_.z),x.copy(_).normalize(),w.push(x.x,x.y,x.z),g.push(B+D,1-I),L.push(f++)}p.push(L)}for(let m=0;m<i;m++)for(let L=0;L<e;L++){const I=p[m][L+1],D=p[m][L],F=p[m+1][L],B=p[m+1][L+1];(m!==0||c>0)&&v.push(I,D,B),(m!==i-1||d<Math.PI)&&v.push(D,F,B)}this.setIndex(v),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(w,3)),this.setAttribute("uv",new gn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xE extends Di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vE extends Ps{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gp,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ME extends Ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SE extends Ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class EE{constructor(t,e,i){const a=this;let o=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){const _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,x=f.length;_<x;_+=2){const v=f[_],y=f[_+1];if(v.global&&(v.lastIndex=0),v.test(p))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yE=new EE;class ah{constructor(t){this.manager=t!==void 0?t:yE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,o){i.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ah.DEFAULT_MATERIAL_NAME="__DEFAULT";const vs=new WeakMap;class TE extends ah{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,c=Oc.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(c),o.manager.itemEnd(t)},0);else{let _=vs.get(c);_===void 0&&(_=[],vs.set(c,_)),_.push({onLoad:e,onError:a})}return c}const u=_a("img");function d(){p(),e&&e(this);const _=vs.get(this)||[];for(let x=0;x<_.length;x++){const v=_[x];v.onLoad&&v.onLoad(this)}vs.delete(this),o.manager.itemEnd(t)}function f(_){p(),a&&a(_),Oc.remove(`image:${t}`);const x=vs.get(this)||[];for(let v=0;v<x.length;v++){const y=x[v];y.onError&&y.onError(_)}vs.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Oc.add(`image:${t}`,u),o.manager.itemStart(t),u.src=t,u}}class bE extends ah{constructor(t){super(t)}load(t,e,i,a){const o=new Tn,c=new TE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){o.image=u,o.needsUpdate=!0,e!==void 0&&e(o)},i,a),o}}class AE extends bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Bc=new Ke,Yd=new X,Kd=new X;class wE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yd),Kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kd),e.updateMatrixWorld(),Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class RE extends wE{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class jp extends AE{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new RE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Qp extends Kp{constructor(t=-1,e=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-t,c=i+t,u=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class CE extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class PE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Zd{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $d=new X;let Uo,zc;class DE extends bn{constructor(t=new X(0,0,1),e=new X(0,0,0),i=1,a=16776960,o=i*.2,c=o*.2){super(),this.type="ArrowHelper",Uo===void 0&&(Uo=new zn,Uo.setAttribute("position",new gn([0,0,0,0,1,0],3)),zc=new sh(.5,1,5,1),zc.translate(0,-.5,0)),this.position.copy(e),this.line=new ih(Uo,new nh({color:a,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Bn(zc,new Ds({color:a,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,o,c)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{$d.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle($d,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class LE extends Vr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Jd(s,t,e,i){const a=IE(i);switch(e){case Op:return s*t;case zp:return s*t/a.components*a.byteLength;case Ku:return s*t/a.components*a.byteLength;case ws:return s*t*2/a.components*a.byteLength;case Zu:return s*t*2/a.components*a.byteLength;case Bp:return s*t*3/a.components*a.byteLength;case mi:return s*t*4/a.components*a.byteLength;case $u:return s*t*4/a.components*a.byteLength;case Go:case Ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vo:case ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lu:case uu:return Math.max(s,16)*Math.max(t,8)/4;case ou:case cu:return Math.max(s,8)*Math.max(t,8)/2;case hu:case fu:case pu:case mu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case du:case _u:case gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Su:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Au:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ru:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Cu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Pu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Du:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lu:case Iu:case Uu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Nu:case Fu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ou:case Bu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function IE(s){switch(s){case Kn:case Ip:return{byteLength:1,components:1};case pa:case Up:case $i:return{byteLength:2,components:1};case qu:case Yu:return{byteLength:2,components:4};case Ci:case Xu:case Ti:return{byteLength:4,components:1};case Np:case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);function tm(){let s=null,t=!1,e=null,i=null;function a(o,c){e(o,c),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function UE(s){const t=new WeakMap;function e(u,d){const f=u.array,p=u.usage,_=f.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,f,p),u.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=s.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,d,f){const p=d.array,_=d.updateRanges;if(s.bindBuffer(f,u),_.length===0)s.bufferSubData(f,0,p);else{_.sort((v,y)=>v.start-y.start);let x=0;for(let v=1;v<_.length;v++){const y=_[x],w=_[v];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++x,_[x]=w)}_.length=x+1;for(let v=0,y=_.length;v<y;v++){const w=_[v];s.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(s.deleteBuffer(d.buffer),t.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:a,remove:o,update:c}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FE=`#ifdef USE_ALPHAHASH
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
#endif`,OE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,VE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kE=`#ifdef USE_BATCHING
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
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KE=`#ifdef USE_IRIDESCENCE
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
#endif`,ZE=`#ifdef USE_BUMPMAP
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ry=`#define PI 3.141592653589793
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ay=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
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
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
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
#endif`,Iy=`uniform sampler2D dfgLUT;
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
}`,Uy=`
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wy=`#if defined( USE_POINTS_UV )
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
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vT=`float getShadowMask() {
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
}`,MT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,ET=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,TT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,CT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
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
}`,HT=`#if DEPTH_PACKING == 3200
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
}`,VT=`#define DISTANCE
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
}`,kT=`#define DISTANCE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
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
}`,YT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,ZT=`uniform vec3 diffuse;
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
}`,$T=`#define LAMBERT
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
}`,JT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,QT=`#define MATCAP
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
}`,tb=`#define NORMAL
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
}`,eb=`#define NORMAL
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
}`,nb=`#define PHONG
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
}`,ib=`#define PHONG
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
}`,rb=`#define STANDARD
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
}`,sb=`#define STANDARD
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
}`,ab=`#define TOON
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
}`,ob=`#define TOON
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
}`,lb=`uniform float size;
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
}`,cb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,hb=`uniform vec3 color;
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
}`,fb=`uniform float rotation;
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
}`,db=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:NE,alphahash_pars_fragment:FE,alphamap_fragment:OE,alphamap_pars_fragment:BE,alphatest_fragment:zE,alphatest_pars_fragment:GE,aomap_fragment:HE,aomap_pars_fragment:VE,batching_pars_vertex:kE,batching_vertex:WE,begin_vertex:XE,beginnormal_vertex:qE,bsdfs:YE,iridescence_fragment:KE,bumpmap_pars_fragment:ZE,clipping_planes_fragment:$E,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:jE,clipping_planes_vertex:QE,color_fragment:ty,color_pars_fragment:ey,color_pars_vertex:ny,color_vertex:iy,common:ry,cube_uv_reflection_fragment:sy,defaultnormal_vertex:ay,displacementmap_pars_vertex:oy,displacementmap_vertex:ly,emissivemap_fragment:cy,emissivemap_pars_fragment:uy,colorspace_fragment:hy,colorspace_pars_fragment:fy,envmap_fragment:dy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:_y,envmap_physical_pars_fragment:wy,envmap_vertex:gy,fog_vertex:xy,fog_pars_vertex:vy,fog_fragment:My,fog_pars_fragment:Sy,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:yy,lights_lambert_fragment:Ty,lights_lambert_pars_fragment:by,lights_pars_begin:Ay,lights_toon_fragment:Ry,lights_toon_pars_fragment:Cy,lights_phong_fragment:Py,lights_phong_pars_fragment:Dy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Iy,lights_fragment_begin:Uy,lights_fragment_maps:Ny,lights_fragment_end:Fy,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Gy,map_fragment:Hy,map_pars_fragment:Vy,map_particle_fragment:ky,map_particle_pars_fragment:Wy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Yy,morphcolor_vertex:Ky,morphnormal_vertex:Zy,morphtarget_pars_vertex:$y,morphtarget_vertex:Jy,normal_fragment_begin:jy,normal_fragment_maps:Qy,normal_pars_fragment:tT,normal_pars_vertex:eT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:aT,iridescence_pars_fragment:oT,opaque_fragment:lT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:hT,dithering_fragment:fT,dithering_pars_fragment:dT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:gT,shadowmap_vertex:xT,shadowmask_pars_fragment:vT,skinbase_vertex:MT,skinning_pars_vertex:ST,skinning_vertex:ET,skinnormal_vertex:yT,specularmap_fragment:TT,specularmap_pars_fragment:bT,tonemapping_fragment:AT,tonemapping_pars_fragment:wT,transmission_fragment:RT,transmission_pars_fragment:CT,uv_pars_fragment:PT,uv_pars_vertex:DT,uv_vertex:LT,worldpos_vertex:IT,background_vert:UT,background_frag:NT,backgroundCube_vert:FT,backgroundCube_frag:OT,cube_vert:BT,cube_frag:zT,depth_vert:GT,depth_frag:HT,distance_vert:VT,distance_frag:kT,equirect_vert:WT,equirect_frag:XT,linedashed_vert:qT,linedashed_frag:YT,meshbasic_vert:KT,meshbasic_frag:ZT,meshlambert_vert:$T,meshlambert_frag:JT,meshmatcap_vert:jT,meshmatcap_frag:QT,meshnormal_vert:tb,meshnormal_frag:eb,meshphong_vert:nb,meshphong_frag:ib,meshphysical_vert:rb,meshphysical_frag:sb,meshtoon_vert:ab,meshtoon_frag:ob,points_vert:lb,points_frag:cb,shadow_vert:ub,shadow_frag:hb,sprite_vert:fb,sprite_frag:db},At={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Pn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Pn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Pn([At.points,At.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Pn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Pn([At.common,At.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Pn([At.sprite,At.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Pn([At.common,At.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Pn([At.lights,At.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ei.physical={uniforms:Pn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const No={r:0,b:0,g:0},Ur=new Pi,pb=new Ke;function mb(s,t,e,i,a,o,c){const u=new Ee(0);let d=o===!0?0:1,f,p,_=null,x=0,v=null;function y(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?e:t).get(D)),D}function w(I){let D=!1;const F=y(I);F===null?m(u,d):F&&F.isColor&&(m(F,1),D=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(I,D){const F=y(D);F&&(F.isCubeTexture||F.mapping===$o)?(p===void 0&&(p=new Bn(new Ls(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Cs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Ur.copy(D.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.material.uniforms.envMap.value=F,p.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(pb.makeRotationFromEuler(Ur)),p.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,(_!==F||x!==F.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=F,x=F.version,v=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):F&&F.isTexture&&(f===void 0&&(f=new Bn(new jo(2,2),new Di({name:"BackgroundMaterial",uniforms:Cs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=F,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Te.getTransfer(F.colorSpace)!==Oe,F.matrixAutoUpdate===!0&&F.updateMatrix(),f.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||x!==F.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,_=F,x=F.version,v=s.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function m(I,D){I.getRGB(No,Yp(s)),i.buffers.color.setClear(No.r,No.g,No.b,D,c)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,D=1){u.set(I),d=D,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,m(u,d)},render:w,addToRenderList:g,dispose:L}}function _b(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=x(null);let o=a,c=!1;function u(T,N,q,K,nt){let it=!1;const tt=_(K,q,N);o!==tt&&(o=tt,f(o.object)),it=v(T,K,q,nt),it&&y(T,K,q,nt),nt!==null&&t.update(nt,s.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,D(T,N,q,K),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function d(){return s.createVertexArray()}function f(T){return s.bindVertexArray(T)}function p(T){return s.deleteVertexArray(T)}function _(T,N,q){const K=q.wireframe===!0;let nt=i[T.id];nt===void 0&&(nt={},i[T.id]=nt);let it=nt[N.id];it===void 0&&(it={},nt[N.id]=it);let tt=it[K];return tt===void 0&&(tt=x(d()),it[K]=tt),tt}function x(T){const N=[],q=[],K=[];for(let nt=0;nt<e;nt++)N[nt]=0,q[nt]=0,K[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:K,object:T,attributes:{},index:null}}function v(T,N,q,K){const nt=o.attributes,it=N.attributes;let tt=0;const $=q.getAttributes();for(const ot in $)if($[ot].location>=0){const St=nt[ot];let Et=it[ot];if(Et===void 0&&(ot==="instanceMatrix"&&T.instanceMatrix&&(Et=T.instanceMatrix),ot==="instanceColor"&&T.instanceColor&&(Et=T.instanceColor)),St===void 0||St.attribute!==Et||Et&&St.data!==Et.data)return!0;tt++}return o.attributesNum!==tt||o.index!==K}function y(T,N,q,K){const nt={},it=N.attributes;let tt=0;const $=q.getAttributes();for(const ot in $)if($[ot].location>=0){let St=it[ot];St===void 0&&(ot==="instanceMatrix"&&T.instanceMatrix&&(St=T.instanceMatrix),ot==="instanceColor"&&T.instanceColor&&(St=T.instanceColor));const Et={};Et.attribute=St,St&&St.data&&(Et.data=St.data),nt[ot]=Et,tt++}o.attributes=nt,o.attributesNum=tt,o.index=K}function w(){const T=o.newAttributes;for(let N=0,q=T.length;N<q;N++)T[N]=0}function g(T){m(T,0)}function m(T,N){const q=o.newAttributes,K=o.enabledAttributes,nt=o.attributeDivisors;q[T]=1,K[T]===0&&(s.enableVertexAttribArray(T),K[T]=1),nt[T]!==N&&(s.vertexAttribDivisor(T,N),nt[T]=N)}function L(){const T=o.newAttributes,N=o.enabledAttributes;for(let q=0,K=N.length;q<K;q++)N[q]!==T[q]&&(s.disableVertexAttribArray(q),N[q]=0)}function I(T,N,q,K,nt,it,tt){tt===!0?s.vertexAttribIPointer(T,N,q,nt,it):s.vertexAttribPointer(T,N,q,K,nt,it)}function D(T,N,q,K){w();const nt=K.attributes,it=q.getAttributes(),tt=N.defaultAttributeValues;for(const $ in it){const ot=it[$];if(ot.location>=0){let wt=nt[$];if(wt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(wt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(wt=T.instanceColor)),wt!==void 0){const St=wt.normalized,Et=wt.itemSize,le=t.get(wt);if(le===void 0)continue;const ee=le.buffer,He=le.type,be=le.bytesPerElement,at=He===s.INT||He===s.UNSIGNED_INT||wt.gpuType===Xu;if(wt.isInterleavedBufferAttribute){const dt=wt.data,Pt=dt.stride,Zt=wt.offset;if(dt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<ot.locationSize;Bt++)m(ot.location+Bt,dt.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Bt=0;Bt<ot.locationSize;Bt++)g(ot.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Bt=0;Bt<ot.locationSize;Bt++)I(ot.location+Bt,Et/ot.locationSize,He,St,Pt*be,(Zt+Et/ot.locationSize*Bt)*be,at)}else{if(wt.isInstancedBufferAttribute){for(let dt=0;dt<ot.locationSize;dt++)m(ot.location+dt,wt.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let dt=0;dt<ot.locationSize;dt++)g(ot.location+dt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let dt=0;dt<ot.locationSize;dt++)I(ot.location+dt,Et/ot.locationSize,He,St,Et*be,Et/ot.locationSize*dt*be,at)}}else if(tt!==void 0){const St=tt[$];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(ot.location,St);break;case 3:s.vertexAttrib3fv(ot.location,St);break;case 4:s.vertexAttrib4fv(ot.location,St);break;default:s.vertexAttrib1fv(ot.location,St)}}}}L()}function F(){O();for(const T in i){const N=i[T];for(const q in N){const K=N[q];for(const nt in K)p(K[nt].object),delete K[nt];delete N[q]}delete i[T]}}function B(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const q in N){const K=N[q];for(const nt in K)p(K[nt].object),delete K[nt];delete N[q]}delete i[T.id]}function C(T){for(const N in i){const q=i[N];if(q[T.id]===void 0)continue;const K=q[T.id];for(const nt in K)p(K[nt].object),delete K[nt];delete q[T.id]}}function O(){S(),c=!0,o!==a&&(o=a,f(o.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:O,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:g,disableUnusedAttributes:L}}function gb(s,t,e){let i;function a(f){i=f}function o(f,p){s.drawArrays(i,f,p),e.update(p,i,1)}function c(f,p,_){_!==0&&(s.drawArraysInstanced(i,f,p,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,_);let v=0;for(let y=0;y<_;y++)v+=p[y];e.update(v,i,1)}function d(f,p,_,x){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<f.length;y++)c(f[y],p[y],x[y]);else{v.multiDrawArraysInstancedWEBGL(i,f,0,p,0,x,0,_);let y=0;for(let w=0;w<_;w++)y+=p[w]*x[w];e.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function xb(s,t,e,i){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");a=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(C){return!(C!==mi&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(C){const O=C===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Kn&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ti&&!O)}function d(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=d(f);p!==f&&(Jt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=e.logarithmicDepthBuffer===!0,x=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),B=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:v,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:D,maxSamples:F,samples:B}}function vb(s){const t=this;let e=null,i=0,a=!1,o=!1;const c=new mr,u=new oe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const v=_.length!==0||x||i!==0||a;return a=x,i=_.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,x){e=p(_,x,0)},this.setState=function(_,x,v){const y=_.clippingPlanes,w=_.clipIntersection,g=_.clipShadows,m=s.get(_);if(!a||y===null||y.length===0||o&&!g)o?p(null):f();else{const L=o?0:i,I=L*4;let D=m.clippingState||null;d.value=D,D=p(y,x,I,v);for(let F=0;F!==I;++F)D[F]=e[F];m.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,x,v,y){const w=_!==null?_.length:0;let g=null;if(w!==0){if(g=d.value,y!==!0||g===null){const m=v+w*4,L=x.matrixWorldInverse;u.getNormalMatrix(L),(g===null||g.length<m)&&(g=new Float32Array(m));for(let I=0,D=v;I!==w;++I,D+=4)c.copy(_[I]).applyMatrix4(L,u),c.normal.toArray(g,D),g[D+3]=c.constant}d.value=g,d.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}function Mb(s){let t=new WeakMap;function e(c,u){return u===iu?c.mapping=Gr:u===ru&&(c.mapping=As),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===iu||u===ru)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new $p(d.height);return f.fromEquirectangularTexture(s,c),t.set(c,f),c.addEventListener("dispose",a),e(f.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const gr=4,jd=[.125,.215,.35,.446,.526,.582],Or=20,Sb=256,aa=new Qp,Qd=new Ee;let Gc=null,Hc=0,Vc=0,kc=!1;const Eb=new X;class tp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,o={}){const{size:c=256,position:u=Eb}=o;Gc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,a,d,u),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gc,Hc,Vc),this._renderer.xr.enabled=kc,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gr||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:$i,format:mi,colorSpace:Rs,depthBuffer:!1},a=ep(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(t,e,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yb(o)),this._blurMaterial=bb(o,t,e),this._ggxMaterial=Tb(o,t,e)}return a}_compileMaterial(t){const e=new Bn(new zn,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,i,a,o){const d=new fn(90,1,e,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,v=_.toneMapping;_.getClearColor(Qd),_.toneMapping=Ai,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Ls,new Ds({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,g=w.material;let m=!1;const L=t.background;L?L.isColor&&(g.color.copy(L),t.background=null,m=!0):(g.color.copy(Qd),m=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(d.up.set(0,f[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[I],o.y,o.z)):D===1?(d.up.set(0,0,f[I]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[I],o.z)):(d.up.set(0,f[I],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[I]));const F=this._cubeSize;Ms(a,D*F,I>2?F:0,F,F),_.setRenderTarget(a),m&&_.render(w,d),_.render(t,d)}_.toneMapping=v,_.autoClear=x,t.background=L}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Gr||t.mapping===As;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=t;const d=this._cubeSize;Ms(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,aa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=i/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),_=Math.sqrt(f*f-p*p),x=0+f*1.25,v=_*x,{_lodMax:y}=this,w=this._sizeLods[i],g=3*w*(i>y-gr?i-y+gr:0),m=4*(this._cubeSize-w);d.envMap.value=t.texture,d.roughness.value=v,d.mipInt.value=y-e,Ms(o,g,m,3*w,2*w),a.setRenderTarget(o),a.render(u,aa),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=y-i,Ms(t,g,m,3*w,2*w),a.setRenderTarget(t),a.render(u,aa)}_blur(t,e,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",o),this._halfBlur(c,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[a];_.material=f;const x=f.uniforms,v=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Or-1),w=o/y,g=isFinite(o)?1+Math.floor(p*w):Or;g>Or&&Jt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Or}`);const m=[];let L=0;for(let C=0;C<Or;++C){const O=C/w,S=Math.exp(-O*O/2);m.push(S),C===0?L+=S:C<g&&(L+=2*S)}for(let C=0;C<m.length;C++)m[C]=m[C]/L;x.envMap.value=t.texture,x.samples.value=g,x.weights.value=m,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:I}=this;x.dTheta.value=y,x.mipInt.value=I-i;const D=this._sizeLods[a],F=3*D*(a>I-gr?a-I+gr:0),B=4*(this._cubeSize-D);Ms(e,F,B,3*D,2*D),d.setRenderTarget(e),d.render(_,aa)}}function yb(s){const t=[],e=[],i=[];let a=s;const o=s-gr+1+jd.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>s-gr?d=jd[c-s+gr-1]:c===0&&(d=0),e.push(d);const f=1/(u-2),p=-f,_=1+f,x=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,y=6,w=3,g=2,m=1,L=new Float32Array(w*y*v),I=new Float32Array(g*y*v),D=new Float32Array(m*y*v);for(let B=0;B<v;B++){const C=B%3*2/3-1,O=B>2?0:-1,S=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];L.set(S,w*y*B),I.set(x,g*y*B);const T=[B,B,B,B,B,B];D.set(T,m*y*B)}const F=new zn;F.setAttribute("position",new Ri(L,w)),F.setAttribute("uv",new Ri(I,g)),F.setAttribute("faceIndex",new Ri(D,m)),i.push(new Bn(F,null)),a>gr&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ep(s,t,e){const i=new wi(s,t,e);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function Tb(s,t,e){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function bb(s,t,e){const i=new Float32Array(Or),a=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function np(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ip(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function Ab(s){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===iu||d===ru,p=d===Gr||d===As;if(f||p){let _=t.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return e===null&&(e=new tp(s)),_=f?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const v=u.image;return f&&v&&v.height>0||p&&v&&a(v)?(e===null&&(e=new tp(s)),_=f?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function wb(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=s.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&ga("WebGLRenderer: "+i+" extension not supported."),a}}}function Rb(s,t,e,i){const a={},o=new WeakMap;function c(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const y in x.attributes)t.remove(x.attributes[y]);x.removeEventListener("dispose",c),delete a[x.id];const v=o.get(x);v&&(t.remove(v),o.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function u(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,e.memory.geometries++),x}function d(_){const x=_.attributes;for(const v in x)t.update(x[v],s.ARRAY_BUFFER)}function f(_){const x=[],v=_.index,y=_.attributes.position;let w=0;if(v!==null){const L=v.array;w=v.version;for(let I=0,D=L.length;I<D;I+=3){const F=L[I+0],B=L[I+1],C=L[I+2];x.push(F,B,B,C,C,F)}}else if(y!==void 0){const L=y.array;w=y.version;for(let I=0,D=L.length/3-1;I<D;I+=3){const F=I+0,B=I+1,C=I+2;x.push(F,B,B,C,C,F)}}else return;const g=new(Hp(x)?qp:Xp)(x,1);g.version=w;const m=o.get(_);m&&t.remove(m),o.set(_,g)}function p(_){const x=o.get(_);if(x){const v=_.index;v!==null&&x.version<v.version&&f(_)}else f(_);return o.get(_)}return{get:u,update:d,getWireframeAttribute:p}}function Cb(s,t,e){let i;function a(x){i=x}let o,c;function u(x){o=x.type,c=x.bytesPerElement}function d(x,v){s.drawElements(i,v,o,x*c),e.update(v,i,1)}function f(x,v,y){y!==0&&(s.drawElementsInstanced(i,v,o,x*c,y),e.update(v,i,y))}function p(x,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,x,0,y);let g=0;for(let m=0;m<y;m++)g+=v[m];e.update(g,i,1)}function _(x,v,y,w){if(y===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x.length;m++)f(x[m]/c,v[m],w[m]);else{g.multiDrawElementsInstancedWEBGL(i,v,0,o,x,0,w,0,y);let m=0;for(let L=0;L<y;L++)m+=v[L]*w[L];e.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function Pb(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=u*(o/3);break;case s.LINES:e.lines+=u*(o/2);break;case s.LINE_STRIP:e.lines+=u*(o-1);break;case s.LINE_LOOP:e.lines+=u*o;break;case s.POINTS:e.points+=u*o;break;default:Re("WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function Db(s,t,e){const i=new WeakMap,a=new Je;function o(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=i.get(u);if(x===void 0||x.count!==_){let T=function(){O.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var v=T;x!==void 0&&x.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,g=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),w===!0&&(D=2),g===!0&&(D=3);let F=u.attributes.position.count*D,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const C=new Float32Array(F*B*4*_),O=new Vp(C,F,B,_);O.type=Ti,O.needsUpdate=!0;const S=D*4;for(let N=0;N<_;N++){const q=m[N],K=L[N],nt=I[N],it=F*B*4*N;for(let tt=0;tt<q.count;tt++){const $=tt*S;y===!0&&(a.fromBufferAttribute(q,tt),C[it+$+0]=a.x,C[it+$+1]=a.y,C[it+$+2]=a.z,C[it+$+3]=0),w===!0&&(a.fromBufferAttribute(K,tt),C[it+$+4]=a.x,C[it+$+5]=a.y,C[it+$+6]=a.z,C[it+$+7]=0),g===!0&&(a.fromBufferAttribute(nt,tt),C[it+$+8]=a.x,C[it+$+9]=a.y,C[it+$+10]=a.z,C[it+$+11]=nt.itemSize===4?a.w:1)}}x={count:_,texture:O,size:new te(F,B)},i.set(u,x),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,e);else{let y=0;for(let g=0;g<f.length;g++)y+=f[g];const w=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:o}}function Lb(s,t,e,i){let a=new WeakMap;function o(d){const f=i.render.frame,p=d.geometry,_=t.get(d,p);if(a.get(_)!==f&&(t.update(_),a.set(_,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==f&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,f))),d.isSkinnedMesh){const x=d.skeleton;a.get(x)!==f&&(x.update(),a.set(x,f))}return _}function c(){a=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:c}}const Ib={[bp]:"LINEAR_TONE_MAPPING",[Ap]:"REINHARD_TONE_MAPPING",[wp]:"CINEON_TONE_MAPPING",[Rp]:"ACES_FILMIC_TONE_MAPPING",[Pp]:"AGX_TONE_MAPPING",[Dp]:"NEUTRAL_TONE_MAPPING",[Cp]:"CUSTOM_TONE_MAPPING"};function Ub(s,t,e,i,a){const o=new wi(t,e,{type:s,depthBuffer:i,stencilBuffer:a}),c=new wi(t,e,{type:$i,depthBuffer:!1,stencilBuffer:!1}),u=new zn;u.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new gn([0,2,0,0,2,0],2));const d=new xE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bn(u,d),p=new Qp(-1,1,1,-1,0,1);let _=null,x=null,v=!1,y,w=null,g=[],m=!1;this.setSize=function(L,I){o.setSize(L,I),c.setSize(L,I);for(let D=0;D<g.length;D++){const F=g[D];F.setSize&&F.setSize(L,I)}},this.setEffects=function(L){g=L,m=g.length>0&&g[0].isRenderPass===!0;const I=o.width,D=o.height;for(let F=0;F<g.length;F++){const B=g[F];B.setSize&&B.setSize(I,D)}},this.begin=function(L,I){if(v||L.toneMapping===Ai&&g.length===0)return!1;if(w=I,I!==null){const D=I.width,F=I.height;(o.width!==D||o.height!==F)&&this.setSize(D,F)}return m===!1&&L.setRenderTarget(o),y=L.toneMapping,L.toneMapping=Ai,!0},this.hasRenderPass=function(){return m},this.end=function(L,I){L.toneMapping=y,v=!0;let D=o,F=c;for(let B=0;B<g.length;B++){const C=g[B];if(C.enabled!==!1&&(C.render(L,F,D,I),C.needsSwap!==!1)){const O=D;D=F,F=O}}if(_!==L.outputColorSpace||x!==L.toneMapping){_=L.outputColorSpace,x=L.toneMapping,d.defines={},Te.getTransfer(_)===Oe&&(d.defines.SRGB_TRANSFER="");const B=Ib[x];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(w),L.render(f,p),w=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),c.dispose(),u.dispose(),d.dispose()}}const em=new Tn,Gu=new xa(1,1),nm=new Vp,im=new KS,rm=new Zp,rp=[],sp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function Us(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let o=rp[a];if(o===void 0&&(o=new Float32Array(a),rp[a]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,s[c].toArray(o,u)}return o}function an(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function on(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function tl(s,t){let e=sp[t];e===void 0&&(e=new Int32Array(t),sp[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Nb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Fb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2fv(this.addr,t),on(e,t)}}function Ob(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;s.uniform3fv(this.addr,t),on(e,t)}}function Bb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4fv(this.addr,t),on(e,t)}}function zb(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;lp.set(i),s.uniformMatrix2fv(this.addr,!1,lp),on(e,i)}}function Gb(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;op.set(i),s.uniformMatrix3fv(this.addr,!1,op),on(e,i)}}function Hb(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(an(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(an(e,i))return;ap.set(i),s.uniformMatrix4fv(this.addr,!1,ap),on(e,i)}}function Vb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2iv(this.addr,t),on(e,t)}}function Wb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3iv(this.addr,t),on(e,t)}}function Xb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4iv(this.addr,t),on(e,t)}}function qb(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Yb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2uiv(this.addr,t),on(e,t)}}function Kb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3uiv(this.addr,t),on(e,t)}}function Zb(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4uiv(this.addr,t),on(e,t)}}function $b(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(Gu.compareFunction=e.isReversedDepthBuffer()?ju:Ju,o=Gu):o=em,e.setTexture2D(t||o,a)}function Jb(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||im,a)}function jb(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||rm,a)}function Qb(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||nm,a)}function tA(s){switch(s){case 5126:return Nb;case 35664:return Fb;case 35665:return Ob;case 35666:return Bb;case 35674:return zb;case 35675:return Gb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return kb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function eA(s,t){s.uniform1fv(this.addr,t)}function nA(s,t){const e=Us(t,this.size,2);s.uniform2fv(this.addr,e)}function iA(s,t){const e=Us(t,this.size,3);s.uniform3fv(this.addr,e)}function rA(s,t){const e=Us(t,this.size,4);s.uniform4fv(this.addr,e)}function sA(s,t){const e=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function aA(s,t){const e=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function oA(s,t){const e=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function lA(s,t){s.uniform1iv(this.addr,t)}function cA(s,t){s.uniform2iv(this.addr,t)}function uA(s,t){s.uniform3iv(this.addr,t)}function hA(s,t){s.uniform4iv(this.addr,t)}function fA(s,t){s.uniform1uiv(this.addr,t)}function dA(s,t){s.uniform2uiv(this.addr,t)}function pA(s,t){s.uniform3uiv(this.addr,t)}function mA(s,t){s.uniform4uiv(this.addr,t)}function _A(s,t,e){const i=this.cache,a=t.length,o=tl(e,a);an(i,o)||(s.uniform1iv(this.addr,o),on(i,o));let c;this.type===s.SAMPLER_2D_SHADOW?c=Gu:c=em;for(let u=0;u!==a;++u)e.setTexture2D(t[u]||c,o[u])}function gA(s,t,e){const i=this.cache,a=t.length,o=tl(e,a);an(i,o)||(s.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||im,o[c])}function xA(s,t,e){const i=this.cache,a=t.length,o=tl(e,a);an(i,o)||(s.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||rm,o[c])}function vA(s,t,e){const i=this.cache,a=t.length,o=tl(e,a);an(i,o)||(s.uniform1iv(this.addr,o),on(i,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||nm,o[c])}function MA(s){switch(s){case 5126:return eA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return aA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return hA;case 5125:return fA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return vA}}class SA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tA(e.type)}}class EA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=MA(e.type)}}class yA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function cp(s,t){s.seq.push(t),s.map[t.id]=t}function TA(s,t,e){const i=s.name,a=i.length;for(Wc.lastIndex=0;;){const o=Wc.exec(i),c=Wc.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===a){cp(e,f===void 0?new SA(u,s,t):new EA(u,s,t));break}else{let _=e.map[u];_===void 0&&(_=new yA(u),cp(e,_)),e=_}}}class Xo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=t.getActiveUniform(e,c),d=t.getUniformLocation(e,u.name);TA(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(t,e,i,a){const o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function up(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const bA=37297;let AA=0;function wA(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const hp=new oe;function RA(s){Te._getMatrix(hp,Te.workingColorSpace,s);const t=`mat3( ${hp.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(s)){case qo:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function fp(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+wA(s.getShaderSource(t),u)}else return o}function CA(s,t){const e=RA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const PA={[bp]:"Linear",[Ap]:"Reinhard",[wp]:"Cineon",[Rp]:"ACESFilmic",[Pp]:"AgX",[Dp]:"Neutral",[Cp]:"Custom"};function DA(s,t){const e=PA[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new X;function LA(){Te.getLuminanceCoefficients(Fo);const s=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function UA(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function NA(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(t,a),c=o.name;let u=1;o.type===s.FLOAT_MAT2&&(u=2),o.type===s.FLOAT_MAT3&&(u=3),o.type===s.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:s.getAttribLocation(t,c),locationSize:u}}return e}function ua(s){return s!==""}function dp(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(s){return s.replace(FA,BA)}const OA=new Map;function BA(s,t){let e=ue[t];if(e===void 0){const i=OA.get(t);if(i!==void 0)e=ue[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hu(e)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mp(s){return s.replace(zA,GA)}function GA(s,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function _p(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const HA={[zo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function VA(s){return HA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kA={[Gr]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function WA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":kA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const XA={[As]:"ENVMAP_MODE_REFRACTION"};function qA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YA={[Wu]:"ENVMAP_BLENDING_MULTIPLY",[RS]:"ENVMAP_BLENDING_MIX",[CS]:"ENVMAP_BLENDING_ADD"};function KA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":YA[s.combine]||"ENVMAP_BLENDING_NONE"}function ZA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $A(s,t,e,i){const a=s.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const d=VA(e),f=WA(e),p=qA(e),_=KA(e),x=ZA(e),v=IA(e),y=UA(o),w=a.createProgram();let g,m,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ua).join(`
`),m.length>0&&(m+=`
`)):(g=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),m=[_p(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?ue.tonemapping_pars_fragment:"",e.toneMapping!==Ai?DA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,CA("linearToOutputTexel",e.outputColorSpace),LA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ua).join(`
`)),c=Hu(c),c=dp(c,e),c=pp(c,e),u=Hu(u),u=dp(u,e),u=pp(u,e),c=mp(c),u=mp(u),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=L+g+c,D=L+m+u,F=up(a,a.VERTEX_SHADER,I),B=up(a,a.FRAGMENT_SHADER,D);a.attachShader(w,F),a.attachShader(w,B),e.index0AttributeName!==void 0?a.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function C(N){if(s.debug.checkShaderErrors){const q=a.getProgramInfoLog(w)||"",K=a.getShaderInfoLog(F)||"",nt=a.getShaderInfoLog(B)||"",it=q.trim(),tt=K.trim(),$=nt.trim();let ot=!0,wt=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ot=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,F,B);else{const St=fp(a,F,"vertex"),Et=fp(a,B,"fragment");Re("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+it+`
`+St+`
`+Et)}else it!==""?Jt("WebGLProgram: Program Info Log:",it):(tt===""||$==="")&&(wt=!1);wt&&(N.diagnostics={runnable:ot,programLog:it,vertexShader:{log:tt,prefix:g},fragmentShader:{log:$,prefix:m}})}a.deleteShader(F),a.deleteShader(B),O=new Xo(a,w),S=NA(a,w)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(w,bA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=AA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=B,this}let JA=0;class jA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new QA(t),e.set(t,i)),i}}class QA{constructor(t){this.id=JA++,this.code=t,this.usedTimes=0}}function t1(s,t,e,i,a,o,c){const u=new kp,d=new jA,f=new Set,p=[],_=new Map,x=a.logarithmicDepthBuffer;let v=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(S){return f.add(S),S===0?"uv":`uv${S}`}function g(S,T,N,q,K){const nt=q.fog,it=K.geometry,tt=S.isMeshStandardMaterial?q.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||tt),ot=$&&$.mapping===$o?$.image.height:null,wt=y[S.type];S.precision!==null&&(v=a.getMaxPrecision(S.precision),v!==S.precision&&Jt("WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const St=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Et=St!==void 0?St.length:0;let le=0;it.morphAttributes.position!==void 0&&(le=1),it.morphAttributes.normal!==void 0&&(le=2),it.morphAttributes.color!==void 0&&(le=3);let ee,He,be,at;if(wt){const Ce=Ei[wt];ee=Ce.vertexShader,He=Ce.fragmentShader}else ee=S.vertexShader,He=S.fragmentShader,d.update(S),be=d.getVertexShaderID(S),at=d.getFragmentShaderID(S);const dt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Zt=K.isInstancedMesh===!0,Bt=K.isBatchedMesh===!0,pe=!!S.map,qe=!!S.matcap,ge=!!$,ne=!!S.aoMap,ye=!!S.lightMap,ie=!!S.bumpMap,Le=!!S.normalMap,z=!!S.displacementMap,Ze=!!S.emissiveMap,xe=!!S.metalnessMap,fe=!!S.roughnessMap,Ut=S.anisotropy>0,P=S.clearcoat>0,E=S.dispersion>0,V=S.iridescence>0,st=S.sheen>0,ut=S.transmission>0,et=Ut&&!!S.anisotropyMap,zt=P&&!!S.clearcoatMap,gt=P&&!!S.clearcoatNormalMap,Ft=P&&!!S.clearcoatRoughnessMap,Wt=V&&!!S.iridescenceMap,pt=V&&!!S.iridescenceThicknessMap,vt=st&&!!S.sheenColorMap,It=st&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,xt=!!S.specularColorMap,re=!!S.specularIntensityMap,H=ut&&!!S.transmissionMap,Rt=ut&&!!S.thicknessMap,_t=!!S.gradientMap,Ct=!!S.alphaMap,mt=S.alphaTest>0,ht=!!S.alphaHash,Mt=!!S.extensions;let $t=Ai;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&($t=s.toneMapping);const Fe={shaderID:wt,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:He,defines:S.defines,customVertexShaderID:be,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:Bt,batchingColor:Bt&&K._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&K.instanceColor!==null,instancingMorph:Zt&&K.morphTexture!==null,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:qe,envMap:ge,envMapMode:ge&&$.mapping,envMapCubeUVHeight:ot,aoMap:ne,lightMap:ye,bumpMap:ie,normalMap:Le,displacementMap:z,emissiveMap:Ze,normalMapObjectSpace:Le&&S.normalMapType===LS,normalMapTangentSpace:Le&&S.normalMapType===Gp,metalnessMap:xe,roughnessMap:fe,anisotropy:Ut,anisotropyMap:et,clearcoat:P,clearcoatMap:zt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ft,dispersion:E,iridescence:V,iridescenceMap:Wt,iridescenceThicknessMap:pt,sheen:st,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:Ot,specularColorMap:xt,specularIntensityMap:re,transmission:ut,transmissionMap:H,thicknessMap:Rt,gradientMap:_t,opaque:S.transparent===!1&&S.blending===ys&&S.alphaToCoverage===!1,alphaMap:Ct,alphaTest:mt,alphaHash:ht,combine:S.combine,mapUv:pe&&w(S.map.channel),aoMapUv:ne&&w(S.aoMap.channel),lightMapUv:ye&&w(S.lightMap.channel),bumpMapUv:ie&&w(S.bumpMap.channel),normalMapUv:Le&&w(S.normalMap.channel),displacementMapUv:z&&w(S.displacementMap.channel),emissiveMapUv:Ze&&w(S.emissiveMap.channel),metalnessMapUv:xe&&w(S.metalnessMap.channel),roughnessMapUv:fe&&w(S.roughnessMap.channel),anisotropyMapUv:et&&w(S.anisotropyMap.channel),clearcoatMapUv:zt&&w(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&w(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&w(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&w(S.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&w(S.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(S.sheenRoughnessMap.channel),specularMapUv:Ot&&w(S.specularMap.channel),specularColorMapUv:xt&&w(S.specularColorMap.channel),specularIntensityMapUv:re&&w(S.specularIntensityMap.channel),transmissionMapUv:H&&w(S.transmissionMap.channel),thicknessMapUv:Rt&&w(S.thicknessMap.channel),alphaMapUv:Ct&&w(S.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Le||Ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!it.attributes.uv&&(pe||Ct),fog:!!nt,useFog:S.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Pt,skinning:K.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&Te.getTransfer(S.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ze&&S.emissiveMap.isVideoTexture===!0&&Te.getTransfer(S.emissiveMap.colorSpace)===Oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yi,flipSided:S.side===Dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Mt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&S.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Fe.vertexUv1s=f.has(1),Fe.vertexUv2s=f.has(2),Fe.vertexUv3s=f.has(3),f.clear(),Fe}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(L(T,S),I(T,S),T.push(s.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function L(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function I(S,T){u.disableAll(),T.instancing&&u.enable(0),T.instancingColor&&u.enable(1),T.instancingMorph&&u.enable(2),T.matcap&&u.enable(3),T.envMap&&u.enable(4),T.normalMapObjectSpace&&u.enable(5),T.normalMapTangentSpace&&u.enable(6),T.clearcoat&&u.enable(7),T.iridescence&&u.enable(8),T.alphaTest&&u.enable(9),T.vertexColors&&u.enable(10),T.vertexAlphas&&u.enable(11),T.vertexUv1s&&u.enable(12),T.vertexUv2s&&u.enable(13),T.vertexUv3s&&u.enable(14),T.vertexTangents&&u.enable(15),T.anisotropy&&u.enable(16),T.alphaHash&&u.enable(17),T.batching&&u.enable(18),T.dispersion&&u.enable(19),T.batchingColor&&u.enable(20),T.gradientMap&&u.enable(21),S.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reversedDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),S.push(u.mask)}function D(S){const T=y[S.type];let N;if(T){const q=Ei[T];N=oE.clone(q.uniforms)}else N=S.uniforms;return N}function F(S,T){let N=_.get(T);return N!==void 0?++N.usedTimes:(N=new $A(s,T,S,o),p.push(N),_.set(T,N)),N}function B(S){if(--S.usedTimes===0){const T=p.indexOf(S);p[T]=p[p.length-1],p.pop(),_.delete(S.cacheKey),S.destroy()}}function C(S){d.remove(S)}function O(){d.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:D,acquireProgram:F,releaseProgram:B,releaseShaderCache:C,programs:p,dispose:O}}function e1(){let s=new WeakMap;function t(c){return s.has(c)}function e(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function a(c,u,d){s.get(c)[u]=d}function o(){s=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:o}}function n1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function gp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xp(){const s=[];let t=0;const e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function c(_,x,v,y,w,g){let m=s[t];return m===void 0?(m={id:_.id,object:_,geometry:x,material:v,groupOrder:y,renderOrder:_.renderOrder,z:w,group:g},s[t]=m):(m.id=_.id,m.object=_,m.geometry=x,m.material=v,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=w,m.group=g),t++,m}function u(_,x,v,y,w,g){const m=c(_,x,v,y,w,g);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):e.push(m)}function d(_,x,v,y,w,g){const m=c(_,x,v,y,w,g);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):e.unshift(m)}function f(_,x){e.length>1&&e.sort(_||n1),i.length>1&&i.sort(x||gp),a.length>1&&a.sort(x||gp)}function p(){for(let _=t,x=s.length;_<x;_++){const v=s[_];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:u,unshift:d,finish:p,sort:f}}function i1(){let s=new WeakMap;function t(i,a){const o=s.get(i);let c;return o===void 0?(c=new xp,s.set(i,[c])):a>=o.length?(c=new xp,o.push(c)):c=o[a],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function r1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Ee};break;case"SpotLight":e={position:new X,direction:new X,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":e={color:new Ee,position:new X,halfWidth:new X,halfHeight:new X};break}return s[t.id]=e,e}}}function s1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let a1=0;function o1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l1(s){const t=new r1,e=s1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new X);const a=new X,o=new Ke,c=new Ke;function u(f){let p=0,_=0,x=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let v=0,y=0,w=0,g=0,m=0,L=0,I=0,D=0,F=0,B=0,C=0;f.sort(o1);for(let S=0,T=f.length;S<T;S++){const N=f[S],q=N.color,K=N.intensity,nt=N.distance;let it=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ws?it=N.shadow.map.texture:it=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=q.r*K,_+=q.g*K,x+=q.b*K;else if(N.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(N.sh.coefficients[tt],K);C++}else if(N.isDirectionalLight){const tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const $=N.shadow,ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.directionalShadow[v]=ot,i.directionalShadowMap[v]=it,i.directionalShadowMatrix[v]=N.shadow.matrix,L++}i.directional[v]=tt,v++}else if(N.isSpotLight){const tt=t.get(N);tt.position.setFromMatrixPosition(N.matrixWorld),tt.color.copy(q).multiplyScalar(K),tt.distance=nt,tt.coneCos=Math.cos(N.angle),tt.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),tt.decay=N.decay,i.spot[w]=tt;const $=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,$.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[w]=$.matrix,N.castShadow){const ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,i.spotShadow[w]=ot,i.spotShadowMap[w]=it,D++}w++}else if(N.isRectAreaLight){const tt=t.get(N);tt.color.copy(q).multiplyScalar(K),tt.halfWidth.set(N.width*.5,0,0),tt.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=tt,g++}else if(N.isPointLight){const tt=t.get(N);if(tt.color.copy(N.color).multiplyScalar(N.intensity),tt.distance=N.distance,tt.decay=N.decay,N.castShadow){const $=N.shadow,ot=e.get(N);ot.shadowIntensity=$.intensity,ot.shadowBias=$.bias,ot.shadowNormalBias=$.normalBias,ot.shadowRadius=$.radius,ot.shadowMapSize=$.mapSize,ot.shadowCameraNear=$.camera.near,ot.shadowCameraFar=$.camera.far,i.pointShadow[y]=ot,i.pointShadowMap[y]=it,i.pointShadowMatrix[y]=N.shadow.matrix,I++}i.point[y]=tt,y++}else if(N.isHemisphereLight){const tt=t.get(N);tt.skyColor.copy(N.color).multiplyScalar(K),tt.groundColor.copy(N.groundColor).multiplyScalar(K),i.hemi[m]=tt,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=x;const O=i.hash;(O.directionalLength!==v||O.pointLength!==y||O.spotLength!==w||O.rectAreaLength!==g||O.hemiLength!==m||O.numDirectionalShadows!==L||O.numPointShadows!==I||O.numSpotShadows!==D||O.numSpotMaps!==F||O.numLightProbes!==C)&&(i.directional.length=v,i.spot.length=w,i.rectArea.length=g,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=D+F-B,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=C,O.directionalLength=v,O.pointLength=y,O.spotLength=w,O.rectAreaLength=g,O.hemiLength=m,O.numDirectionalShadows=L,O.numPointShadows=I,O.numSpotShadows=D,O.numSpotMaps=F,O.numLightProbes=C,i.version=a1++)}function d(f,p){let _=0,x=0,v=0,y=0,w=0;const g=p.matrixWorldInverse;for(let m=0,L=f.length;m<L;m++){const I=f[m];if(I.isDirectionalLight){const D=i.directional[_];D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),_++}else if(I.isSpotLight){const D=i.spot[v];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),v++}else if(I.isRectAreaLight){const D=i.rectArea[y];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(g),c.identity(),o.copy(I.matrixWorld),o.premultiply(g),c.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),y++}else if(I.isPointLight){const D=i.point[x];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(g),x++}else if(I.isHemisphereLight){const D=i.hemi[w];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(g),w++}}}return{setup:u,setupView:d,state:i}}function vp(s){const t=new l1(s),e=[],i=[];function a(p){f.camera=p,e.length=0,i.length=0}function o(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function d(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function c1(s){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new vp(s),t.set(a,[u])):o>=c.length?(u=new vp(s),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h1=`uniform sampler2D shadow_pass;
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
}`,f1=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],d1=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Mp=new Ke,oa=new X,Xc=new X;function p1(s,t,e){let i=new eh;const a=new te,o=new te,c=new Je,u=new ME,d=new SE,f={},p=e.maxTextureSize,_={[vr]:Dn,[Dn]:vr,[yi]:yi},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:u1,fragmentShader:h1}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const y=new zn;y.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Bn(y,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zo;let m=this.type;this.render=function(B,C,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;B.type===cS&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=zo);const S=s.getRenderTarget(),T=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Ki),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=m!==this.type;K&&C.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(it=>it.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,it=B.length;nt<it;nt++){const tt=B[nt],$=tt.shadow;if($===void 0){Jt("WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ot=$.getFrameExtents();if(a.multiply(ot),o.copy($.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/ot.x),a.x=o.x*ot.x,$.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/ot.y),a.y=o.y*ot.y,$.mapSize.y=o.y)),$.map===null||K===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===la){if(tt.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new wi(a.x,a.y,{format:ws,type:$i,minFilter:yn,magFilter:yn,generateMipmaps:!1}),$.map.texture.name=tt.name+".shadowMap",$.map.depthTexture=new xa(a.x,a.y,Ti),$.map.depthTexture.name=tt.name+".shadowMapDepth",$.map.depthTexture.format=Ji,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n}else{tt.isPointLight?($.map=new $p(a.x),$.map.depthTexture=new gE(a.x,Ci)):($.map=new wi(a.x,a.y),$.map.depthTexture=new xa(a.x,a.y,Ci)),$.map.depthTexture.name=tt.name+".shadowMap",$.map.depthTexture.format=Ji;const St=s.state.buffers.depth.getReversed();this.type===zo?($.map.depthTexture.compareFunction=St?ju:Ju,$.map.depthTexture.minFilter=yn,$.map.depthTexture.magFilter=yn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n)}$.camera.updateProjectionMatrix()}const wt=$.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<wt;St++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,St),s.clear();else{St===0&&(s.setRenderTarget($.map),s.clear());const Et=$.getViewport(St);c.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),q.viewport(c)}if(tt.isPointLight){const Et=$.camera,le=$.matrix,ee=tt.distance||Et.far;ee!==Et.far&&(Et.far=ee,Et.updateProjectionMatrix()),oa.setFromMatrixPosition(tt.matrixWorld),Et.position.copy(oa),Xc.copy(Et.position),Xc.add(f1[St]),Et.up.copy(d1[St]),Et.lookAt(Xc),Et.updateMatrixWorld(),le.makeTranslation(-oa.x,-oa.y,-oa.z),Mp.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Mp,Et.coordinateSystem,Et.reversedDepth)}else $.updateMatrices(tt);i=$.getFrustum(),D(C,O,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===la&&L($,O),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(S,T,N)};function L(B,C){const O=t.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,v.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new wi(a.x,a.y,{format:ws,type:$i})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(C,null,O,x,w,null),v.uniforms.shadow_pass.value=B.mapPass.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(C,null,O,v,w,null)}function I(B,C,O,S){let T=null;const N=O.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)T=N;else if(T=O.isPointLight===!0?d:u,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const q=T.uuid,K=C.uuid;let nt=f[q];nt===void 0&&(nt={},f[q]=nt);let it=nt[K];it===void 0&&(it=T.clone(),nt[K]=it,C.addEventListener("dispose",F)),T=it}if(T.visible=C.visible,T.wireframe=C.wireframe,S===la?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:_[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=s.properties.get(T);q.light=O}return T}function D(B,C,O,S,T){if(B.visible===!1)return;if(B.layers.test(C.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===la)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,B.matrixWorld);const K=t.update(B),nt=B.material;if(Array.isArray(nt)){const it=K.groups;for(let tt=0,$=it.length;tt<$;tt++){const ot=it[tt],wt=nt[ot.materialIndex];if(wt&&wt.visible){const St=I(B,wt,S,T);B.onBeforeShadow(s,B,C,O,K,St,ot),s.renderBufferDirect(O,null,K,St,B,ot),B.onAfterShadow(s,B,C,O,K,St,ot)}}}else if(nt.visible){const it=I(B,nt,S,T);B.onBeforeShadow(s,B,C,O,K,it,null),s.renderBufferDirect(O,null,K,it,B,null),B.onAfterShadow(s,B,C,O,K,it,null)}}const q=B.children;for(let K=0,nt=q.length;K<nt;K++)D(q[K],C,O,S,T)}function F(B){B.target.removeEventListener("dispose",F);for(const O in f){const S=f[O],T=B.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const m1={[$c]:Jc,[jc]:eu,[Qc]:nu,[bs]:tu,[Jc]:$c,[eu]:jc,[nu]:Qc,[tu]:bs};function _1(s,t){function e(){let H=!1;const Rt=new Je;let _t=null;const Ct=new Je(0,0,0,0);return{setMask:function(mt){_t!==mt&&!H&&(s.colorMask(mt,mt,mt,mt),_t=mt)},setLocked:function(mt){H=mt},setClear:function(mt,ht,Mt,$t,Fe){Fe===!0&&(mt*=$t,ht*=$t,Mt*=$t),Rt.set(mt,ht,Mt,$t),Ct.equals(Rt)===!1&&(s.clearColor(mt,ht,Mt,$t),Ct.copy(Rt))},reset:function(){H=!1,_t=null,Ct.set(-1,0,0,0)}}}function i(){let H=!1,Rt=!1,_t=null,Ct=null,mt=null;return{setReversed:function(ht){if(Rt!==ht){const Mt=t.get("EXT_clip_control");ht?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),Rt=ht;const $t=mt;mt=null,this.setClear($t)}},getReversed:function(){return Rt},setTest:function(ht){ht?dt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(ht){_t!==ht&&!H&&(s.depthMask(ht),_t=ht)},setFunc:function(ht){if(Rt&&(ht=m1[ht]),Ct!==ht){switch(ht){case $c:s.depthFunc(s.NEVER);break;case Jc:s.depthFunc(s.ALWAYS);break;case jc:s.depthFunc(s.LESS);break;case bs:s.depthFunc(s.LEQUAL);break;case Qc:s.depthFunc(s.EQUAL);break;case tu:s.depthFunc(s.GEQUAL);break;case eu:s.depthFunc(s.GREATER);break;case nu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ct=ht}},setLocked:function(ht){H=ht},setClear:function(ht){mt!==ht&&(Rt&&(ht=1-ht),s.clearDepth(ht),mt=ht)},reset:function(){H=!1,_t=null,Ct=null,mt=null,Rt=!1}}}function a(){let H=!1,Rt=null,_t=null,Ct=null,mt=null,ht=null,Mt=null,$t=null,Fe=null;return{setTest:function(Ce){H||(Ce?dt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Ce){Rt!==Ce&&!H&&(s.stencilMask(Ce),Rt=Ce)},setFunc:function(Ce,Zn,ai){(_t!==Ce||Ct!==Zn||mt!==ai)&&(s.stencilFunc(Ce,Zn,ai),_t=Ce,Ct=Zn,mt=ai)},setOp:function(Ce,Zn,ai){(ht!==Ce||Mt!==Zn||$t!==ai)&&(s.stencilOp(Ce,Zn,ai),ht=Ce,Mt=Zn,$t=ai)},setLocked:function(Ce){H=Ce},setClear:function(Ce){Fe!==Ce&&(s.clearStencil(Ce),Fe=Ce)},reset:function(){H=!1,Rt=null,_t=null,Ct=null,mt=null,ht=null,Mt=null,$t=null,Fe=null}}}const o=new e,c=new i,u=new a,d=new WeakMap,f=new WeakMap;let p={},_={},x=new WeakMap,v=[],y=null,w=!1,g=null,m=null,L=null,I=null,D=null,F=null,B=null,C=new Ee(0,0,0),O=0,S=!1,T=null,N=null,q=null,K=null,nt=null;const it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,$=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ot)[1]),tt=$>=1):ot.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),tt=$>=2);let wt=null,St={};const Et=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),ee=new Je().fromArray(Et),He=new Je().fromArray(le);function be(H,Rt,_t,Ct){const mt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(H,ht),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<_t;Mt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Rt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(Rt+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ht}const at={};at[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),dt(s.DEPTH_TEST),c.setFunc(bs),ie(!1),Le(Md),dt(s.CULL_FACE),ne(Ki);function dt(H){p[H]!==!0&&(s.enable(H),p[H]=!0)}function Pt(H){p[H]!==!1&&(s.disable(H),p[H]=!1)}function Zt(H,Rt){return _[H]!==Rt?(s.bindFramebuffer(H,Rt),_[H]=Rt,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Rt),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Bt(H,Rt){let _t=v,Ct=!1;if(H){_t=x.get(Rt),_t===void 0&&(_t=[],x.set(Rt,_t));const mt=H.textures;if(_t.length!==mt.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Mt=mt.length;ht<Mt;ht++)_t[ht]=s.COLOR_ATTACHMENT0+ht;_t.length=mt.length,Ct=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,Ct=!0);Ct&&s.drawBuffers(_t)}function pe(H){return y!==H?(s.useProgram(H),y=H,!0):!1}const qe={[Fr]:s.FUNC_ADD,[hS]:s.FUNC_SUBTRACT,[fS]:s.FUNC_REVERSE_SUBTRACT};qe[dS]=s.MIN,qe[pS]=s.MAX;const ge={[mS]:s.ZERO,[_S]:s.ONE,[gS]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[yS]:s.SRC_ALPHA_SATURATE,[SS]:s.DST_COLOR,[vS]:s.DST_ALPHA,[xS]:s.ONE_MINUS_SRC_COLOR,[Zc]:s.ONE_MINUS_SRC_ALPHA,[ES]:s.ONE_MINUS_DST_COLOR,[MS]:s.ONE_MINUS_DST_ALPHA,[TS]:s.CONSTANT_COLOR,[bS]:s.ONE_MINUS_CONSTANT_COLOR,[AS]:s.CONSTANT_ALPHA,[wS]:s.ONE_MINUS_CONSTANT_ALPHA};function ne(H,Rt,_t,Ct,mt,ht,Mt,$t,Fe,Ce){if(H===Ki){w===!0&&(Pt(s.BLEND),w=!1);return}if(w===!1&&(dt(s.BLEND),w=!0),H!==uS){if(H!==g||Ce!==S){if((m!==Fr||D!==Fr)&&(s.blendEquation(s.FUNC_ADD),m=Fr,D=Fr),Ce)switch(H){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFunc(s.ONE,s.ONE);break;case Ed:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Re("WebGLState: Invalid blending: ",H);break}else switch(H){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ed:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yd:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",H);break}L=null,I=null,F=null,B=null,C.set(0,0,0),O=0,g=H,S=Ce}return}mt=mt||Rt,ht=ht||_t,Mt=Mt||Ct,(Rt!==m||mt!==D)&&(s.blendEquationSeparate(qe[Rt],qe[mt]),m=Rt,D=mt),(_t!==L||Ct!==I||ht!==F||Mt!==B)&&(s.blendFuncSeparate(ge[_t],ge[Ct],ge[ht],ge[Mt]),L=_t,I=Ct,F=ht,B=Mt),($t.equals(C)===!1||Fe!==O)&&(s.blendColor($t.r,$t.g,$t.b,Fe),C.copy($t),O=Fe),g=H,S=!1}function ye(H,Rt){H.side===yi?Pt(s.CULL_FACE):dt(s.CULL_FACE);let _t=H.side===Dn;Rt&&(_t=!_t),ie(_t),H.blending===ys&&H.transparent===!1?ne(Ki):ne(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Ct=H.stencilWrite;u.setTest(Ct),Ct&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(H){T!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),T=H)}function Le(H){H!==oS?(dt(s.CULL_FACE),H!==N&&(H===Md?s.cullFace(s.BACK):H===lS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),N=H}function z(H){H!==q&&(tt&&s.lineWidth(H),q=H)}function Ze(H,Rt,_t){H?(dt(s.POLYGON_OFFSET_FILL),(K!==Rt||nt!==_t)&&(s.polygonOffset(Rt,_t),K=Rt,nt=_t)):Pt(s.POLYGON_OFFSET_FILL)}function xe(H){H?dt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function fe(H){H===void 0&&(H=s.TEXTURE0+it-1),wt!==H&&(s.activeTexture(H),wt=H)}function Ut(H,Rt,_t){_t===void 0&&(wt===null?_t=s.TEXTURE0+it-1:_t=wt);let Ct=St[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},St[_t]=Ct),(Ct.type!==H||Ct.texture!==Rt)&&(wt!==_t&&(s.activeTexture(_t),wt=_t),s.bindTexture(H,Rt||at[H]),Ct.type=H,Ct.texture=Rt)}function P(){const H=St[wt];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function st(){try{s.texSubImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function ut(){try{s.texSubImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function gt(){try{s.texStorage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function Ft(){try{s.texStorage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function Wt(){try{s.texImage2D(...arguments)}catch(H){Re("WebGLState:",H)}}function pt(){try{s.texImage3D(...arguments)}catch(H){Re("WebGLState:",H)}}function vt(H){ee.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ee.copy(H))}function It(H){He.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function Ot(H,Rt){let _t=f.get(Rt);_t===void 0&&(_t=new WeakMap,f.set(Rt,_t));let Ct=_t.get(H);Ct===void 0&&(Ct=s.getUniformBlockIndex(Rt,H.name),_t.set(H,Ct))}function xt(H,Rt){const Ct=f.get(Rt).get(H);d.get(Rt)!==Ct&&(s.uniformBlockBinding(Rt,Ct,H.__bindingPointIndex),d.set(Rt,Ct))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},wt=null,St={},_={},x=new WeakMap,v=[],y=null,w=!1,g=null,m=null,L=null,I=null,D=null,F=null,B=null,C=new Ee(0,0,0),O=0,S=!1,T=null,N=null,q=null,K=null,nt=null,ee.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:dt,disable:Pt,bindFramebuffer:Zt,drawBuffers:Bt,useProgram:pe,setBlending:ne,setMaterial:ye,setFlipSided:ie,setCullFace:Le,setLineWidth:z,setPolygonOffset:Ze,setScissorTest:xe,activeTexture:fe,bindTexture:Ut,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:Wt,texImage3D:pt,updateUBOMapping:Ot,uniformBlockBinding:xt,texStorage2D:gt,texStorage3D:Ft,texSubImage2D:st,texSubImage3D:ut,compressedTexSubImage2D:et,compressedTexSubImage3D:zt,scissor:vt,viewport:It,reset:re}}function g1(s,t,e,i,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new te,p=new WeakMap;let _;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,E){return v?new OffscreenCanvas(P,E):_a("canvas")}function w(P,E,V){let st=1;const ut=Ut(P);if((ut.width>V||ut.height>V)&&(st=V/Math.max(ut.width,ut.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(st*ut.width),zt=Math.floor(st*ut.height);_===void 0&&(_=y(et,zt));const gt=E?y(et,zt):_;return gt.width=et,gt.height=zt,gt.getContext("2d").drawImage(P,0,0,et,zt),Jt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+et+"x"+zt+")."),gt}else return"data"in P&&Jt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(P,E,V,st,ut=!1){if(P!==null){if(s[P]!==void 0)return s[P];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===s.RED&&(V===s.FLOAT&&(et=s.R32F),V===s.HALF_FLOAT&&(et=s.R16F),V===s.UNSIGNED_BYTE&&(et=s.R8)),E===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.R8UI),V===s.UNSIGNED_SHORT&&(et=s.R16UI),V===s.UNSIGNED_INT&&(et=s.R32UI),V===s.BYTE&&(et=s.R8I),V===s.SHORT&&(et=s.R16I),V===s.INT&&(et=s.R32I)),E===s.RG&&(V===s.FLOAT&&(et=s.RG32F),V===s.HALF_FLOAT&&(et=s.RG16F),V===s.UNSIGNED_BYTE&&(et=s.RG8)),E===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.RG8UI),V===s.UNSIGNED_SHORT&&(et=s.RG16UI),V===s.UNSIGNED_INT&&(et=s.RG32UI),V===s.BYTE&&(et=s.RG8I),V===s.SHORT&&(et=s.RG16I),V===s.INT&&(et=s.RG32I)),E===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.RGB8UI),V===s.UNSIGNED_SHORT&&(et=s.RGB16UI),V===s.UNSIGNED_INT&&(et=s.RGB32UI),V===s.BYTE&&(et=s.RGB8I),V===s.SHORT&&(et=s.RGB16I),V===s.INT&&(et=s.RGB32I)),E===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),V===s.UNSIGNED_INT&&(et=s.RGBA32UI),V===s.BYTE&&(et=s.RGBA8I),V===s.SHORT&&(et=s.RGBA16I),V===s.INT&&(et=s.RGBA32I)),E===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),E===s.RGBA){const zt=ut?qo:Te.getTransfer(st);V===s.FLOAT&&(et=s.RGBA32F),V===s.HALF_FLOAT&&(et=s.RGBA16F),V===s.UNSIGNED_BYTE&&(et=zt===Oe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function D(P,E){let V;return P?E===null||E===Ci||E===ma?V=s.DEPTH24_STENCIL8:E===Ti?V=s.DEPTH32F_STENCIL8:E===pa&&(V=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ci||E===ma?V=s.DEPTH_COMPONENT24:E===Ti?V=s.DEPTH_COMPONENT32F:E===pa&&(V=s.DEPTH_COMPONENT16),V}function F(P,E){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==_n&&P.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function B(P){const E=P.target;E.removeEventListener("dispose",B),O(E),E.isVideoTexture&&p.delete(E)}function C(P){const E=P.target;E.removeEventListener("dispose",C),T(E)}function O(P){const E=i.get(P);if(E.__webglInit===void 0)return;const V=P.source,st=x.get(V);if(st){const ut=st[E.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(P),Object.keys(st).length===0&&x.delete(V)}i.remove(P)}function S(P){const E=i.get(P);s.deleteTexture(E.__webglTexture);const V=P.source,st=x.get(V);delete st[E.__cacheKey],c.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ut=0;ut<E.__webglFramebuffer[st].length;ut++)s.deleteFramebuffer(E.__webglFramebuffer[st][ut]);else s.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)s.deleteFramebuffer(E.__webglFramebuffer[st]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=P.textures;for(let st=0,ut=V.length;st<ut;st++){const et=i.get(V[st]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),c.memory.textures--),i.remove(V[st])}i.remove(P)}let N=0;function q(){N=0}function K(){const P=N;return P>=a.maxTextures&&Jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),N+=1,P}function nt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function it(P,E){const V=i.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const st=P.image;if(st===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(V,P,E);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+E)}function tt(P,E){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){at(V,P,E);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+E)}function $(P,E){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){at(V,P,E);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+E)}function ot(P,E){const V=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){dt(V,P,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+E)}const wt={[su]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[au]:s.MIRRORED_REPEAT},St={[_n]:s.NEAREST,[PS]:s.NEAREST_MIPMAP_NEAREST,[po]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[fc]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Et={[IS]:s.NEVER,[BS]:s.ALWAYS,[US]:s.LESS,[Ju]:s.LEQUAL,[NS]:s.EQUAL,[ju]:s.GEQUAL,[FS]:s.GREATER,[OS]:s.NOTEQUAL};function le(P,E){if(E.type===Ti&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===fc||E.magFilter===po||E.magFilter===Br||E.minFilter===yn||E.minFilter===fc||E.minFilter===po||E.minFilter===Br)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,wt[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,wt[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,wt[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,St[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==po&&E.minFilter!==Br||E.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ee(P,E){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",B));const st=E.source;let ut=x.get(st);ut===void 0&&(ut={},x.set(st,ut));const et=nt(E);if(et!==P.__cacheKey){ut[et]===void 0&&(ut[et]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,V=!0),ut[et].usedTimes++;const zt=ut[P.__cacheKey];zt!==void 0&&(ut[P.__cacheKey].usedTimes--,zt.usedTimes===0&&S(E)),P.__cacheKey=et,P.__webglTexture=ut[et].texture}return V}function He(P,E,V){return Math.floor(Math.floor(P/V)/E)}function be(P,E,V,st){const et=P.updateRanges;if(et.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,V,st,E.data);else{et.sort((pt,vt)=>pt.start-vt.start);let zt=0;for(let pt=1;pt<et.length;pt++){const vt=et[zt],It=et[pt],Ot=vt.start+vt.count,xt=He(It.start,E.width,4),re=He(vt.start,E.width,4);It.start<=Ot+1&&xt===re&&He(It.start+It.count-1,E.width,4)===xt?vt.count=Math.max(vt.count,It.start+It.count-vt.start):(++zt,et[zt]=It)}et.length=zt+1;const gt=s.getParameter(s.UNPACK_ROW_LENGTH),Ft=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let pt=0,vt=et.length;pt<vt;pt++){const It=et[pt],Ot=Math.floor(It.start/4),xt=Math.ceil(It.count/4),re=Ot%E.width,H=Math.floor(Ot/E.width),Rt=xt,_t=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),e.texSubImage2D(s.TEXTURE_2D,0,re,H,Rt,_t,V,st,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,gt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function at(P,E,V){let st=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=s.TEXTURE_3D);const ut=ee(P,E),et=E.source;e.bindTexture(st,P.__webglTexture,s.TEXTURE0+V);const zt=i.get(et);if(et.version!==zt.__version||ut===!0){e.activeTexture(s.TEXTURE0+V);const gt=Te.getPrimaries(Te.workingColorSpace),Ft=E.colorSpace===_r?null:Te.getPrimaries(E.colorSpace),Wt=E.colorSpace===_r||gt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let pt=w(E.image,!1,a.maxTextureSize);pt=fe(E,pt);const vt=o.convert(E.format,E.colorSpace),It=o.convert(E.type);let Ot=I(E.internalFormat,vt,It,E.colorSpace,E.isVideoTexture);le(st,E);let xt;const re=E.mipmaps,H=E.isVideoTexture!==!0,Rt=zt.__version===void 0||ut===!0,_t=et.dataReady,Ct=F(E,pt);if(E.isDepthTexture)Ot=D(E.format===zr,E.type),Rt&&(H?e.texStorage2D(s.TEXTURE_2D,1,Ot,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,pt.width,pt.height,0,vt,It,null));else if(E.isDataTexture)if(re.length>0){H&&Rt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,re[0].width,re[0].height);for(let mt=0,ht=re.length;mt<ht;mt++)xt=re[mt],H?_t&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(s.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,vt,It,xt.data);E.generateMipmaps=!1}else H?(Rt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,pt.width,pt.height),_t&&be(E,pt,vt,It)):e.texImage2D(s.TEXTURE_2D,0,Ot,pt.width,pt.height,0,vt,It,pt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,re[0].width,re[0].height,pt.depth);for(let mt=0,ht=re.length;mt<ht;mt++)if(xt=re[mt],E.format!==mi)if(vt!==null)if(H){if(_t)if(E.layerUpdates.size>0){const Mt=Jd(xt.width,xt.height,E.format,E.type);for(const $t of E.layerUpdates){const Fe=xt.data.subarray($t*Mt/xt.data.BYTES_PER_ELEMENT,($t+1)*Mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,$t,xt.width,xt.height,1,vt,Fe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,pt.depth,vt,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,Ot,xt.width,xt.height,pt.depth,0,xt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,xt.width,xt.height,pt.depth,vt,It,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,Ot,xt.width,xt.height,pt.depth,0,vt,It,xt.data)}else{H&&Rt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,re[0].width,re[0].height);for(let mt=0,ht=re.length;mt<ht;mt++)xt=re[mt],E.format!==mi?vt!==null?H?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,xt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_t&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,xt.width,xt.height,vt,It,xt.data):e.texImage2D(s.TEXTURE_2D,mt,Ot,xt.width,xt.height,0,vt,It,xt.data)}else if(E.isDataArrayTexture)if(H){if(Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,pt.width,pt.height,pt.depth),_t)if(E.layerUpdates.size>0){const mt=Jd(pt.width,pt.height,E.format,E.type);for(const ht of E.layerUpdates){const Mt=pt.data.subarray(ht*mt/pt.data.BYTES_PER_ELEMENT,(ht+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,vt,It,Mt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,vt,It,pt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,pt.width,pt.height,pt.depth,0,vt,It,pt.data);else if(E.isData3DTexture)H?(Rt&&e.texStorage3D(s.TEXTURE_3D,Ct,Ot,pt.width,pt.height,pt.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,vt,It,pt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,pt.width,pt.height,pt.depth,0,vt,It,pt.data);else if(E.isFramebufferTexture){if(Rt)if(H)e.texStorage2D(s.TEXTURE_2D,Ct,Ot,pt.width,pt.height);else{let mt=pt.width,ht=pt.height;for(let Mt=0;Mt<Ct;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,Ot,mt,ht,0,vt,It,null),mt>>=1,ht>>=1}}else if(re.length>0){if(H&&Rt){const mt=Ut(re[0]);e.texStorage2D(s.TEXTURE_2D,Ct,Ot,mt.width,mt.height)}for(let mt=0,ht=re.length;mt<ht;mt++)xt=re[mt],H?_t&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,vt,It,xt):e.texImage2D(s.TEXTURE_2D,mt,Ot,vt,It,xt);E.generateMipmaps=!1}else if(H){if(Rt){const mt=Ut(pt);e.texStorage2D(s.TEXTURE_2D,Ct,Ot,mt.width,mt.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,It,pt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,vt,It,pt);g(E)&&m(st),zt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function dt(P,E,V){if(E.image.length!==6)return;const st=ee(P,E),ut=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const et=i.get(ut);if(ut.version!==et.__version||st===!0){e.activeTexture(s.TEXTURE0+V);const zt=Te.getPrimaries(Te.workingColorSpace),gt=E.colorSpace===_r?null:Te.getPrimaries(E.colorSpace),Ft=E.colorSpace===_r||zt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,pt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let ht=0;ht<6;ht++)!Wt&&!pt?vt[ht]=w(E.image[ht],!0,a.maxCubemapSize):vt[ht]=pt?E.image[ht].image:E.image[ht],vt[ht]=fe(E,vt[ht]);const It=vt[0],Ot=o.convert(E.format,E.colorSpace),xt=o.convert(E.type),re=I(E.internalFormat,Ot,xt,E.colorSpace),H=E.isVideoTexture!==!0,Rt=et.__version===void 0||st===!0,_t=ut.dataReady;let Ct=F(E,It);le(s.TEXTURE_CUBE_MAP,E);let mt;if(Wt){H&&Rt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,re,It.width,It.height);for(let ht=0;ht<6;ht++){mt=vt[ht].mipmaps;for(let Mt=0;Mt<mt.length;Mt++){const $t=mt[Mt];E.format!==mi?Ot!==null?H?_t&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,$t.width,$t.height,Ot,$t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,re,$t.width,$t.height,0,$t.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,0,0,$t.width,$t.height,Ot,xt,$t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt,re,$t.width,$t.height,0,Ot,xt,$t.data)}}}else{if(mt=E.mipmaps,H&&Rt){mt.length>0&&Ct++;const ht=Ut(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,re,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){H?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,vt[ht].width,vt[ht].height,Ot,xt,vt[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,vt[ht].width,vt[ht].height,0,Ot,xt,vt[ht].data);for(let Mt=0;Mt<mt.length;Mt++){const Fe=mt[Mt].image[ht].image;H?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,Fe.width,Fe.height,Ot,xt,Fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,re,Fe.width,Fe.height,0,Ot,xt,Fe.data)}}else{H?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,xt,vt[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,re,Ot,xt,vt[ht]);for(let Mt=0;Mt<mt.length;Mt++){const $t=mt[Mt];H?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,0,0,Ot,xt,$t.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Mt+1,re,Ot,xt,$t.image[ht])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),et.__version=ut.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Pt(P,E,V,st,ut,et){const zt=o.convert(V.format,V.colorSpace),gt=o.convert(V.type),Ft=I(V.internalFormat,zt,gt,V.colorSpace),Wt=i.get(E),pt=i.get(V);if(pt.__renderTarget=E,!Wt.__hasExternalTextures){const vt=Math.max(1,E.width>>et),It=Math.max(1,E.height>>et);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,et,Ft,vt,It,E.depth,0,zt,gt,null):e.texImage2D(ut,et,Ft,vt,It,0,zt,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Ze(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ut,pt.__webglTexture,0,z(E)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ut,pt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(P,E,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const st=E.depthTexture,ut=st&&st.isDepthTexture?st.type:null,et=D(E.stencilBuffer,ut),zt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),et,E.width,E.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,zt,s.RENDERBUFFER,P)}else{const st=E.textures;for(let ut=0;ut<st.length;ut++){const et=st[ut],zt=o.convert(et.format,et.colorSpace),gt=o.convert(et.type),Ft=I(et.internalFormat,zt,gt,et.colorSpace);Ze(E)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),Ft,E.width,E.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),Ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ft,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(P,E,V){const st=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=i.get(E.depthTexture);if(ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ut.__webglTexture===void 0){ut.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),le(s.TEXTURE_CUBE_MAP,E.depthTexture);const Wt=o.convert(E.depthTexture.format),pt=o.convert(E.depthTexture.type);let vt;E.depthTexture.format===Ji?vt=s.DEPTH_COMPONENT24:E.depthTexture.format===zr&&(vt=s.DEPTH24_STENCIL8);for(let It=0;It<6;It++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,E.width,E.height,0,Wt,pt,null)}}else it(E.depthTexture,0);const et=ut.__webglTexture,zt=z(E),gt=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,Ft=E.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ji)Ze(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ft,gt,et,0,zt):s.framebufferTexture2D(s.FRAMEBUFFER,Ft,gt,et,0);else if(E.depthTexture.format===zr)Ze(E)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ft,gt,et,0,zt):s.framebufferTexture2D(s.FRAMEBUFFER,Ft,gt,et,0);else throw new Error("Unknown depthTexture format")}function pe(P){const E=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const st=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ut=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ut)};st.addEventListener("dispose",ut),E.__depthDisposeCallback=ut}E.__boundDepthTexture=st}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let st=0;st<6;st++)Bt(E.__webglFramebuffer[st],P,st);else{const st=P.texture.mipmaps;st&&st.length>0?Bt(E.__webglFramebuffer[0],P,0):Bt(E.__webglFramebuffer,P,0)}else if(V){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=s.createRenderbuffer(),Zt(E.__webglDepthbuffer[st],P,!1);else{const ut=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,et)}}else{const st=P.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Zt(E.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,et)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(P,E,V){const st=i.get(P);E!==void 0&&Pt(st.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&pe(P)}function ge(P){const E=P.texture,V=i.get(P),st=i.get(E);P.addEventListener("dispose",C);const ut=P.textures,et=P.isWebGLCubeRenderTarget===!0,zt=ut.length>1;if(zt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=E.version,c.memory.textures++),et){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let Ft=0;Ft<E.mipmaps.length;Ft++)V.__webglFramebuffer[gt][Ft]=s.createFramebuffer()}else V.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)V.__webglFramebuffer[gt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(zt)for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Wt=i.get(ut[gt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&Ze(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const Ft=ut[gt];V.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const Wt=o.convert(Ft.format,Ft.colorSpace),pt=o.convert(Ft.type),vt=I(Ft.internalFormat,Wt,pt,Ft.colorSpace,P.isXRRenderTarget===!0),It=z(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,vt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),le(s.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)Pt(V.__webglFramebuffer[gt][Ft],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft);else Pt(V.__webglFramebuffer[gt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let gt=0,Ft=ut.length;gt<Ft;gt++){const Wt=ut[gt],pt=i.get(Wt);let vt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(vt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,pt.__webglTexture),le(vt,Wt),Pt(V.__webglFramebuffer,P,Wt,s.COLOR_ATTACHMENT0+gt,vt,0),g(Wt)&&m(vt)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,st.__webglTexture),le(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)Pt(V.__webglFramebuffer[Ft],P,E,s.COLOR_ATTACHMENT0,gt,Ft);else Pt(V.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,gt,0);g(E)&&m(gt),e.unbindTexture()}P.depthBuffer&&pe(P)}function ne(P){const E=P.textures;for(let V=0,st=E.length;V<st;V++){const ut=E[V];if(g(ut)){const et=L(P),zt=i.get(ut).__webglTexture;e.bindTexture(et,zt),m(et),e.unbindTexture()}}}const ye=[],ie=[];function Le(P){if(P.samples>0){if(Ze(P)===!1){const E=P.textures,V=P.width,st=P.height;let ut=s.COLOR_BUFFER_BIT;const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,zt=i.get(P),gt=E.length>1;if(gt)for(let Wt=0;Wt<E.length;Wt++)e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Ft=P.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const pt=i.get(E[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,V,st,0,0,V,st,ut,s.NEAREST),d===!0&&(ye.length=0,ie.length=0,ye.push(s.COLOR_ATTACHMENT0+Wt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ye.push(et),ie.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let Wt=0;Wt<E.length;Wt++){e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,zt.__webglColorRenderbuffer[Wt]);const pt=i.get(E[Wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&d){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(P){return Math.min(a.maxSamples,P.samples)}function Ze(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xe(P){const E=c.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function fe(P,E){const V=P.colorSpace,st=P.format,ut=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Rs&&V!==_r&&(Te.getTransfer(V)===Oe?(st!==mi||ut!==Kn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",V)),E}function Ut(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=it,this.setTexture2DArray=tt,this.setTexture3D=$,this.setTextureCube=ot,this.rebindTextures=qe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function x1(s,t){function e(i,a=_r){let o;const c=Te.getTransfer(a);if(i===Kn)return s.UNSIGNED_BYTE;if(i===qu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Yu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Np)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Fp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ip)return s.BYTE;if(i===Up)return s.SHORT;if(i===pa)return s.UNSIGNED_SHORT;if(i===Xu)return s.INT;if(i===Ci)return s.UNSIGNED_INT;if(i===Ti)return s.FLOAT;if(i===$i)return s.HALF_FLOAT;if(i===Op)return s.ALPHA;if(i===Bp)return s.RGB;if(i===mi)return s.RGBA;if(i===Ji)return s.DEPTH_COMPONENT;if(i===zr)return s.DEPTH_STENCIL;if(i===zp)return s.RED;if(i===Ku)return s.RED_INTEGER;if(i===ws)return s.RG;if(i===Zu)return s.RG_INTEGER;if(i===$u)return s.RGBA_INTEGER;if(i===Go||i===Ho||i===Vo||i===ko)if(c===Oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===lu||i===cu||i===uu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ou)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hu||i===fu||i===du||i===pu||i===mu||i===_u||i===gu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===hu||i===fu)return c===Oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===du)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===pu)return o.COMPRESSED_R11_EAC;if(i===mu)return o.COMPRESSED_SIGNED_R11_EAC;if(i===_u)return o.COMPRESSED_RG11_EAC;if(i===gu)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xu||i===vu||i===Mu||i===Su||i===Eu||i===yu||i===Tu||i===bu||i===Au||i===wu||i===Ru||i===Cu||i===Pu||i===Du)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Su)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Eu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Au)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ru)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pu)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Du)return c===Oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lu||i===Iu||i===Uu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Lu)return c===Oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Iu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nu||i===Fu||i===Ou||i===Bu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Nu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ou)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const v1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Jp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Di({vertexShader:v1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends Vr{constructor(t,e){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,f=null,p=null,_=null,x=null,v=null,y=null;const w=typeof XRWebGLBinding<"u",g=new S1,m={},L=e.getContextAttributes();let I=null,D=null;const F=[],B=[],C=new te;let O=null;const S=new fn;S.viewport=new Je;const T=new fn;T.viewport=new Je;const N=[S,T],q=new CE;let K=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=F[at];return dt===void 0&&(dt=new Uc,F[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=F[at];return dt===void 0&&(dt=new Uc,F[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=F[at];return dt===void 0&&(dt=new Uc,F[at]=dt),dt.getHandSpace()};function it(at){const dt=B.indexOf(at.inputSource);if(dt===-1)return;const Pt=F[dt];Pt!==void 0&&(Pt.update(at.inputSource,at.frame,f||c),Pt.dispatchEvent({type:at.type,data:at.inputSource}))}function tt(){a.removeEventListener("select",it),a.removeEventListener("selectstart",it),a.removeEventListener("selectend",it),a.removeEventListener("squeeze",it),a.removeEventListener("squeezestart",it),a.removeEventListener("squeezeend",it),a.removeEventListener("end",tt),a.removeEventListener("inputsourceschange",$);for(let at=0;at<F.length;at++){const dt=B[at];dt!==null&&(B[at]=null,F[at].disconnect(dt))}K=null,nt=null,g.reset();for(const at in m)delete m[at];t.setRenderTarget(I),v=null,x=null,_=null,a=null,D=null,be.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){o=at,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(a,e)),_},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(at){if(a=at,a!==null){if(I=t.getRenderTarget(),a.addEventListener("select",it),a.addEventListener("selectstart",it),a.addEventListener("selectend",it),a.addEventListener("squeeze",it),a.addEventListener("squeezestart",it),a.addEventListener("squeezeend",it),a.addEventListener("end",tt),a.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,Zt=null,Bt=null;L.depth&&(Bt=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=L.stencil?zr:Ji,Zt=L.stencil?ma:Ci);const pe={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:o};_=this.getBinding(),x=_.createProjectionLayer(pe),a.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new wi(x.textureWidth,x.textureHeight,{format:mi,type:Kn,depthTexture:new xa(x.textureWidth,x.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Pt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(a,e,Pt),a.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),D=new wi(v.framebufferWidth,v.framebufferHeight,{format:mi,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await a.requestReferenceSpace(u),be.setContext(a),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(at){for(let dt=0;dt<at.removed.length;dt++){const Pt=at.removed[dt],Zt=B.indexOf(Pt);Zt>=0&&(B[Zt]=null,F[Zt].disconnect(Pt))}for(let dt=0;dt<at.added.length;dt++){const Pt=at.added[dt];let Zt=B.indexOf(Pt);if(Zt===-1){for(let pe=0;pe<F.length;pe++)if(pe>=B.length){B.push(Pt),Zt=pe;break}else if(B[pe]===null){B[pe]=Pt,Zt=pe;break}if(Zt===-1)break}const Bt=F[Zt];Bt&&Bt.connect(Pt)}}const ot=new X,wt=new X;function St(at,dt,Pt){ot.setFromMatrixPosition(dt.matrixWorld),wt.setFromMatrixPosition(Pt.matrixWorld);const Zt=ot.distanceTo(wt),Bt=dt.projectionMatrix.elements,pe=Pt.projectionMatrix.elements,qe=Bt[14]/(Bt[10]-1),ge=Bt[14]/(Bt[10]+1),ne=(Bt[9]+1)/Bt[5],ye=(Bt[9]-1)/Bt[5],ie=(Bt[8]-1)/Bt[0],Le=(pe[8]+1)/pe[0],z=qe*ie,Ze=qe*Le,xe=Zt/(-ie+Le),fe=xe*-ie;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(fe),at.translateZ(xe),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Bt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ut=qe+xe,P=ge+xe,E=z-fe,V=Ze+(Zt-fe),st=ne*ge/P*Ut,ut=ye*ge/P*Ut;at.projectionMatrix.makePerspective(E,V,st,ut,Ut,P),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Et(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(a===null)return;let dt=at.near,Pt=at.far;g.texture!==null&&(g.depthNear>0&&(dt=g.depthNear),g.depthFar>0&&(Pt=g.depthFar)),q.near=T.near=S.near=dt,q.far=T.far=S.far=Pt,(K!==q.near||nt!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,nt=q.far),q.layers.mask=at.layers.mask|6,S.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;const Zt=at.parent,Bt=q.cameras;Et(q,Zt);for(let pe=0;pe<Bt.length;pe++)Et(Bt[pe],Zt);Bt.length===2?St(q,S,T):q.projectionMatrix.copy(S.projectionMatrix),le(at,q,Zt)};function le(at,dt,Pt){Pt===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(Pt.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=zu*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&v===null))return d},this.setFoveation=function(at){d=at,x!==null&&(x.fixedFoveation=at),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=at)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(at){return m[at]};let ee=null;function He(at,dt){if(p=dt.getViewerPose(f||c),y=dt,p!==null){const Pt=p.views;v!==null&&(t.setRenderTargetFramebuffer(D,v.framebuffer),t.setRenderTarget(D));let Zt=!1;Pt.length!==q.cameras.length&&(q.cameras.length=0,Zt=!0);for(let ge=0;ge<Pt.length;ge++){const ne=Pt[ge];let ye=null;if(v!==null)ye=v.getViewport(ne);else{const Le=_.getViewSubImage(x,ne);ye=Le.viewport,ge===0&&(t.setRenderTargetTextures(D,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(D))}let ie=N[ge];ie===void 0&&(ie=new fn,ie.layers.enable(ge),ie.viewport=new Je,N[ge]=ie),ie.matrix.fromArray(ne.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ye.x,ye.y,ye.width,ye.height),ge===0&&(q.matrix.copy(ie.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Zt===!0&&q.cameras.push(ie)}const Bt=a.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){_=i.getBinding();const ge=_.getDepthInformation(Pt[0]);ge&&ge.isValid&&ge.texture&&g.init(ge,a.renderState)}if(Bt&&Bt.includes("camera-access")&&w){t.state.unbindTexture(),_=i.getBinding();for(let ge=0;ge<Pt.length;ge++){const ne=Pt[ge].camera;if(ne){let ye=m[ne];ye||(ye=new Jp,m[ne]=ye);const ie=_.getCameraImage(ne);ye.sourceTexture=ie}}}}for(let Pt=0;Pt<F.length;Pt++){const Zt=B[Pt],Bt=F[Pt];Zt!==null&&Bt!==void 0&&Bt.update(Zt,dt,f||c)}ee&&ee(at,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),y=null}const be=new tm;be.setAnimationLoop(He),this.setAnimationLoop=function(at){ee=at},this.dispose=function(){}}}const Nr=new Pi,y1=new Ke;function T1(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Yp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function a(g,m,L,I,D){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),_(g,m)):m.isMeshPhongMaterial?(o(g,m),p(g,m)):m.isMeshStandardMaterial?(o(g,m),x(g,m),m.isMeshPhysicalMaterial&&v(g,m,D)):m.isMeshMatcapMaterial?(o(g,m),y(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),w(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(c(g,m),m.isLineDashedMaterial&&u(g,m)):m.isPointsMaterial?d(g,m,L,I):m.isSpriteMaterial?f(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const L=t.get(m),I=L.envMap,D=L.envMapRotation;I&&(g.envMap.value=I,Nr.copy(D),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Nr)),g.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function u(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function d(g,m,L,I){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*L,g.scale.value=I*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function p(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function _(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function x(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function v(g,m,L){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function w(g,m){const L=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function b1(s,t,e,i){let a={},o={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,I){const D=I.program;i.uniformBlockBinding(L,D)}function f(L,I){let D=a[L.id];D===void 0&&(y(L),D=p(L),a[L.id]=D,L.addEventListener("dispose",g));const F=I.program;i.updateUBOMapping(L,F);const B=t.render.frame;o[L.id]!==B&&(x(L),o[L.id]=B)}function p(L){const I=_();L.__bindingPointIndex=I;const D=s.createBuffer(),F=L.__size,B=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,D),D}function _(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const I=a[L.id],D=L.uniforms,F=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let B=0,C=D.length;B<C;B++){const O=Array.isArray(D[B])?D[B]:[D[B]];for(let S=0,T=O.length;S<T;S++){const N=O[S];if(v(N,B,S,F)===!0){const q=N.__offset,K=Array.isArray(N.value)?N.value:[N.value];let nt=0;for(let it=0;it<K.length;it++){const tt=K[it],$=w(tt);typeof tt=="number"||typeof tt=="boolean"?(N.__data[0]=tt,s.bufferSubData(s.UNIFORM_BUFFER,q+nt,N.__data)):tt.isMatrix3?(N.__data[0]=tt.elements[0],N.__data[1]=tt.elements[1],N.__data[2]=tt.elements[2],N.__data[3]=0,N.__data[4]=tt.elements[3],N.__data[5]=tt.elements[4],N.__data[6]=tt.elements[5],N.__data[7]=0,N.__data[8]=tt.elements[6],N.__data[9]=tt.elements[7],N.__data[10]=tt.elements[8],N.__data[11]=0):(tt.toArray(N.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(L,I,D,F){const B=L.value,C=I+"_"+D;if(F[C]===void 0)return typeof B=="number"||typeof B=="boolean"?F[C]=B:F[C]=B.clone(),!0;{const O=F[C];if(typeof B=="number"||typeof B=="boolean"){if(O!==B)return F[C]=B,!0}else if(O.equals(B)===!1)return O.copy(B),!0}return!1}function y(L){const I=L.uniforms;let D=0;const F=16;for(let C=0,O=I.length;C<O;C++){const S=Array.isArray(I[C])?I[C]:[I[C]];for(let T=0,N=S.length;T<N;T++){const q=S[T],K=Array.isArray(q.value)?q.value:[q.value];for(let nt=0,it=K.length;nt<it;nt++){const tt=K[nt],$=w(tt),ot=D%F,wt=ot%$.boundary,St=ot+wt;D+=wt,St!==0&&F-St<$.storage&&(D+=F-St),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=$.storage}}}const B=D%F;return B>0&&(D+=F-B),L.__size=D,L.__cache={},this}function w(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Jt("WebGLRenderer: Unsupported uniform value type.",L),I}function g(L){const I=L.target;I.removeEventListener("dispose",g);const D=c.indexOf(I.__bindingPointIndex);c.splice(D,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function m(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},o={}}return{bind:d,update:f,dispose:m}}const A1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function w1(){return Si===null&&(Si=new dE(A1,16,16,ws,$i),Si.name="DFG_LUT",Si.minFilter=yn,Si.magFilter=yn,Si.wrapS=Yi,Si.wrapT=Yi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class R1{constructor(t={}){const{canvas:e=zS(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:v=Kn}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=v,g=new Set([$u,Zu,Ku]),m=new Set([Kn,Ci,pa,ma,qu,Yu]),L=new Uint32Array(4),I=new Int32Array(4);let D=null,F=null;const B=[],C=[];let O=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=si;let N=0,q=0,K=null,nt=-1,it=null;const tt=new Je,$=new Je;let ot=null;const wt=new Ee(0);let St=0,Et=e.width,le=e.height,ee=1,He=null,be=null;const at=new Je(0,0,Et,le),dt=new Je(0,0,Et,le);let Pt=!1;const Zt=new eh;let Bt=!1,pe=!1;const qe=new Ke,ge=new X,ne=new Je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Le(){return K===null?ee:1}let z=i;function Ze(A,W){return e.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ku}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),z===null){const W="webgl2";if(z=Ze(W,A),z===null)throw Ze(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Re("WebGLRenderer: "+A.message),A}let xe,fe,Ut,P,E,V,st,ut,et,zt,gt,Ft,Wt,pt,vt,It,Ot,xt,re,H,Rt,_t,Ct,mt;function ht(){xe=new wb(z),xe.init(),_t=new x1(z,xe),fe=new xb(z,xe,t,_t),Ut=new _1(z,xe),fe.reversedDepthBuffer&&x&&Ut.buffers.depth.setReversed(!0),P=new Pb(z),E=new e1,V=new g1(z,xe,Ut,E,fe,_t,P),st=new Mb(S),ut=new Ab(S),et=new UE(z),Ct=new _b(z,et),zt=new Rb(z,et,P,Ct),gt=new Lb(z,zt,et,P),re=new Db(z,fe,V),It=new vb(E),Ft=new t1(S,st,ut,xe,fe,Ct,It),Wt=new T1(S,E),pt=new i1,vt=new c1(xe),xt=new mb(S,st,ut,Ut,gt,y,d),Ot=new p1(S,gt,fe),mt=new b1(z,P,fe,Ut),H=new gb(z,xe,P),Rt=new Cb(z,xe,P),P.programs=Ft.programs,S.capabilities=fe,S.extensions=xe,S.properties=E,S.renderLists=pt,S.shadowMap=Ot,S.state=Ut,S.info=P}ht(),w!==Kn&&(O=new Ub(w,e.width,e.height,a,o));const Mt=new E1(S,z);this.xr=Mt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(Et,le,!1))},this.getSize=function(A){return A.set(Et,le)},this.setSize=function(A,W,j=!0){if(Mt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=A,le=W,e.width=Math.floor(A*ee),e.height=Math.floor(W*ee),j===!0&&(e.style.width=A+"px",e.style.height=W+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Et*ee,le*ee).floor()},this.setDrawingBufferSize=function(A,W,j){Et=A,le=W,ee=j,e.width=Math.floor(A*j),e.height=Math.floor(W*j),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===Kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(tt)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,W,j,J){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,W,j,J),Ut.viewport(tt.copy(at).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,W,j,J){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,W,j,J),Ut.scissor($.copy(dt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){Ut.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){be=A},this.getClearColor=function(A){return A.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,j=!0){let J=0;if(A){let Z=!1;if(K!==null){const yt=K.texture.format;Z=g.has(yt)}if(Z){const yt=K.texture.type,Dt=m.has(yt),Tt=xt.getClearColor(),Nt=xt.getClearAlpha(),Ht=Tt.r,Xt=Tt.g,Vt=Tt.b;Dt?(L[0]=Ht,L[1]=Xt,L[2]=Vt,L[3]=Nt,z.clearBufferuiv(z.COLOR,0,L)):(I[0]=Ht,I[1]=Xt,I[2]=Vt,I[3]=Nt,z.clearBufferiv(z.COLOR,0,I))}else J|=z.COLOR_BUFFER_BIT}W&&(J|=z.DEPTH_BUFFER_BIT),j&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),xt.dispose(),pt.dispose(),vt.dispose(),E.dispose(),st.dispose(),ut.dispose(),gt.dispose(),Ct.dispose(),mt.dispose(),Ft.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Ea),Mt.removeEventListener("sessionend",ya),Li.stop()};function $t(A){A.preventDefault(),Rd("WebGLRenderer: Context Lost."),T=!0}function Fe(){Rd("WebGLRenderer: Context Restored."),T=!1;const A=P.autoReset,W=Ot.enabled,j=Ot.autoUpdate,J=Ot.needsUpdate,Z=Ot.type;ht(),P.autoReset=A,Ot.enabled=W,Ot.autoUpdate=j,Ot.needsUpdate=J,Ot.type=Z}function Ce(A){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const W=A.target;W.removeEventListener("dispose",Zn),ai(W)}function ai(A){Ns(A),E.remove(A)}function Ns(A){const W=E.get(A).programs;W!==void 0&&(W.forEach(function(j){Ft.releaseProgram(j)}),A.isShaderMaterial&&Ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,j,J,Z,yt){W===null&&(W=ye);const Dt=Z.isMesh&&Z.matrixWorld.determinant()<0,Tt=nl(A,W,j,J,Z);Ut.setMaterial(J,Dt);let Nt=j.index,Ht=1;if(J.wireframe===!0){if(Nt=zt.getWireframeAttribute(j),Nt===void 0)return;Ht=2}const Xt=j.drawRange,Vt=j.attributes.position;let se=Xt.start*Ht,Ae=(Xt.start+Xt.count)*Ht;yt!==null&&(se=Math.max(se,yt.start*Ht),Ae=Math.min(Ae,(yt.start+yt.count)*Ht)),Nt!==null?(se=Math.max(se,0),Ae=Math.min(Ae,Nt.count)):Vt!=null&&(se=Math.max(se,0),Ae=Math.min(Ae,Vt.count));const We=Ae-se;if(We<0||We===1/0)return;Ct.setup(Z,J,Tt,j,Nt);let Ve,we=H;if(Nt!==null&&(Ve=et.get(Nt),we=Rt,we.setIndex(Ve)),Z.isMesh)J.wireframe===!0?(Ut.setLineWidth(J.wireframeLinewidth*Le()),we.setMode(z.LINES)):we.setMode(z.TRIANGLES);else if(Z.isLine){let kt=J.linewidth;kt===void 0&&(kt=1),Ut.setLineWidth(kt*Le()),Z.isLineSegments?we.setMode(z.LINES):Z.isLineLoop?we.setMode(z.LINE_LOOP):we.setMode(z.LINE_STRIP)}else Z.isPoints?we.setMode(z.POINTS):Z.isSprite&&we.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))we.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,Pe=Z._multiDrawCounts,Me=Z._multiDrawCount,xn=Nt?et.get(Nt).bytesPerElement:1,_i=E.get(J).currentProgram.getUniforms();for(let An=0;An<Me;An++)_i.setValue(z,"_gl_DrawID",An),we.render(kt[An]/xn,Pe[An])}else if(Z.isInstancedMesh)we.renderInstances(se,We,Z.count);else if(j.isInstancedBufferGeometry){const kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,kt);we.renderInstances(se,We,Pe)}else we.render(se,We)};function Sa(A,W,j){A.transparent===!0&&A.side===yi&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,Wr(A,W,j),A.side=vr,A.needsUpdate=!0,Wr(A,W,j),A.side=yi):Wr(A,W,j)}this.compile=function(A,W,j=null){j===null&&(j=A),F=vt.get(j),F.init(W),C.push(F),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),A!==j&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const J=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const yt=Z.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){const Tt=yt[Dt];Sa(Tt,j,Z),J.add(Tt)}else Sa(yt,j,Z),J.add(yt)}),F=C.pop(),J},this.compileAsync=function(A,W,j=null){const J=this.compile(A,W,j);return new Promise(Z=>{function yt(){if(J.forEach(function(Dt){E.get(Dt).currentProgram.isReady()&&J.delete(Dt)}),J.size===0){Z(A);return}setTimeout(yt,10)}xe.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Mr=null;function el(A){Mr&&Mr(A)}function Ea(){Li.stop()}function ya(){Li.start()}const Li=new tm;Li.setAnimationLoop(el),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Mr=A,Mt.setAnimationLoop(A),A===null?Li.stop():Li.start()},Mt.addEventListener("sessionstart",Ea),Mt.addEventListener("sessionend",ya),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=Mt.enabled===!0&&Mt.isPresenting===!0,J=O!==null&&(K===null||j)&&O.begin(S,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(W),W=Mt.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,W,K),F=vt.get(A,C.length),F.init(W),C.push(F),qe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Zt.setFromProjectionMatrix(qe,bi,W.reversedDepth),pe=this.localClippingEnabled,Bt=It.init(this.clippingPlanes,pe),D=pt.get(A,B.length),D.init(),B.push(D),Mt.enabled===!0&&Mt.isPresenting===!0){const Dt=S.xr.getDepthSensingMesh();Dt!==null&&Fs(Dt,W,-1/0,S.sortObjects)}Fs(A,W,0,S.sortObjects),D.finish(),S.sortObjects===!0&&D.sort(He,be),ie=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ie&&xt.addToRenderList(D,A),this.info.render.frame++,Bt===!0&&It.beginShadows();const Z=F.state.shadowsArray;if(Ot.render(Z,A,W),Bt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&O.hasRenderPass())===!1){const Dt=D.opaque,Tt=D.transmissive;if(F.setupLights(),W.isArrayCamera){const Nt=W.cameras;if(Tt.length>0)for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht];ba(Dt,Tt,A,Vt)}ie&&xt.render(A);for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht];Ta(D,A,Vt,Vt.viewport)}}else Tt.length>0&&ba(Dt,Tt,A,W),ie&&xt.render(A),Ta(D,A,W)}K!==null&&q===0&&(V.updateMultisampleRenderTarget(K),V.updateRenderTargetMipmap(K)),J&&O.end(S),A.isScene===!0&&A.onAfterRender(S,A,W),Ct.resetDefaultState(),nt=-1,it=null,C.pop(),C.length>0?(F=C[C.length-1],Bt===!0&&It.setGlobalState(S.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Fs(A,W,j,J){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Zt.intersectsSprite(A)){J&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(qe);const Dt=gt.update(A),Tt=A.material;Tt.visible&&D.push(A,Dt,Tt,j,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Zt.intersectsObject(A))){const Dt=gt.update(A),Tt=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ne.copy(Dt.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(qe)),Array.isArray(Tt)){const Nt=Dt.groups;for(let Ht=0,Xt=Nt.length;Ht<Xt;Ht++){const Vt=Nt[Ht],se=Tt[Vt.materialIndex];se&&se.visible&&D.push(A,Dt,se,j,ne.z,Vt)}}else Tt.visible&&D.push(A,Dt,Tt,j,ne.z,null)}}const yt=A.children;for(let Dt=0,Tt=yt.length;Dt<Tt;Dt++)Fs(yt[Dt],W,j,J)}function Ta(A,W,j,J){const{opaque:Z,transmissive:yt,transparent:Dt}=A;F.setupLightsView(j),Bt===!0&&It.setGlobalState(S.clippingPlanes,j),J&&Ut.viewport(tt.copy(J)),Z.length>0&&kr(Z,W,j),yt.length>0&&kr(yt,W,j),Dt.length>0&&kr(Dt,W,j),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function ba(A,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[J.id]===void 0){const se=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[J.id]=new wi(1,1,{generateMipmaps:!0,type:se?$i:Kn,minFilter:Br,samples:fe.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const yt=F.state.transmissionRenderTarget[J.id],Dt=J.viewport||tt;yt.setSize(Dt.z*S.transmissionResolutionScale,Dt.w*S.transmissionResolutionScale);const Tt=S.getRenderTarget(),Nt=S.getActiveCubeFace(),Ht=S.getActiveMipmapLevel();S.setRenderTarget(yt),S.getClearColor(wt),St=S.getClearAlpha(),St<1&&S.setClearColor(16777215,.5),S.clear(),ie&&xt.render(j);const Xt=S.toneMapping;S.toneMapping=Ai;const Vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),F.setupLightsView(J),Bt===!0&&It.setGlobalState(S.clippingPlanes,J),kr(A,j,J),V.updateMultisampleRenderTarget(yt),V.updateRenderTargetMipmap(yt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ae=0,We=W.length;Ae<We;Ae++){const Ve=W[Ae],{object:we,geometry:kt,material:Pe,group:Me}=Ve;if(Pe.side===yi&&we.layers.test(J.layers)){const xn=Pe.side;Pe.side=Dn,Pe.needsUpdate=!0,Os(we,j,J,kt,Pe,Me),Pe.side=xn,Pe.needsUpdate=!0,se=!0}}se===!0&&(V.updateMultisampleRenderTarget(yt),V.updateRenderTargetMipmap(yt))}S.setRenderTarget(Tt,Nt,Ht),S.setClearColor(wt,St),Vt!==void 0&&(J.viewport=Vt),S.toneMapping=Xt}function kr(A,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,yt=A.length;Z<yt;Z++){const Dt=A[Z],{object:Tt,geometry:Nt,group:Ht}=Dt;let Xt=Dt.material;Xt.allowOverride===!0&&J!==null&&(Xt=J),Tt.layers.test(j.layers)&&Os(Tt,W,j,Nt,Xt,Ht)}}function Os(A,W,j,J,Z,yt){A.onBeforeRender(S,W,j,J,Z,yt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(S,W,j,J,A,yt),Z.transparent===!0&&Z.side===yi&&Z.forceSinglePass===!1?(Z.side=Dn,Z.needsUpdate=!0,S.renderBufferDirect(j,W,J,Z,A,yt),Z.side=vr,Z.needsUpdate=!0,S.renderBufferDirect(j,W,J,Z,A,yt),Z.side=yi):S.renderBufferDirect(j,W,J,Z,A,yt),A.onAfterRender(S,W,j,J,Z,yt)}function Wr(A,W,j){W.isScene!==!0&&(W=ye);const J=E.get(A),Z=F.state.lights,yt=F.state.shadowsArray,Dt=Z.state.version,Tt=Ft.getParameters(A,Z.state,yt,W,j),Nt=Ft.getProgramCacheKey(Tt);let Ht=J.programs;J.environment=A.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(A.isMeshStandardMaterial?ut:st).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Zn),Ht=new Map,J.programs=Ht);let Xt=Ht.get(Nt);if(Xt!==void 0){if(J.currentProgram===Xt&&J.lightsStateVersion===Dt)return wa(A,Tt),Xt}else Tt.uniforms=Ft.getUniforms(A),A.onBeforeCompile(Tt,S),Xt=Ft.acquireProgram(Tt,Nt),Ht.set(Nt,Xt),J.uniforms=Tt.uniforms;const Vt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=It.uniform),wa(A,Tt),J.needsLights=rl(A),J.lightsStateVersion=Dt,J.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Xt,J.uniformsList=null,Xt}function Aa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Xo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function wa(A,W){const j=E.get(A);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function nl(A,W,j,J,Z){W.isScene!==!0&&(W=ye),V.resetTextureUnits();const yt=W.fog,Dt=J.isMeshStandardMaterial?W.environment:null,Tt=K===null?S.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Rs,Nt=(J.isMeshStandardMaterial?ut:st).get(J.envMap||Dt),Ht=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Vt=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,Ae=!!j.morphAttributes.color;let We=Ai;J.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(We=S.toneMapping);const Ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=Ve!==void 0?Ve.length:0,kt=E.get(J),Pe=F.state.lights;if(Bt===!0&&(pe===!0||A!==it)){const cn=A===it&&J.id===nt;It.setState(J,A,cn)}let Me=!1;J.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Pe.state.version||kt.outputColorSpace!==Tt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==Nt||J.fog===!0&&kt.fog!==yt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==It.numPlanes||kt.numIntersection!==It.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Xt||kt.morphTargets!==Vt||kt.morphNormals!==se||kt.morphColors!==Ae||kt.toneMapping!==We||kt.morphTargetsCount!==we)&&(Me=!0):(Me=!0,kt.__version=J.version);let xn=kt.currentProgram;Me===!0&&(xn=Wr(J,W,Z));let _i=!1,An=!1,ji=!1;const Ie=xn.getUniforms(),ln=kt.uniforms;if(Ut.useProgram(xn.program)&&(_i=!0,An=!0,ji=!0),J.id!==nt&&(nt=J.id,An=!0),_i||it!==A){Ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(z,"projectionMatrix",A.projectionMatrix),Ie.setValue(z,"viewMatrix",A.matrixWorldInverse);const dn=Ie.map.cameraPosition;dn!==void 0&&dn.setValue(z,ge.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),it!==A&&(it=A,An=!0,ji=!0)}if(kt.needsLights&&(Pe.state.directionalShadowMap.length>0&&Ie.setValue(z,"directionalShadowMap",Pe.state.directionalShadowMap,V),Pe.state.spotShadowMap.length>0&&Ie.setValue(z,"spotShadowMap",Pe.state.spotShadowMap,V),Pe.state.pointShadowMap.length>0&&Ie.setValue(z,"pointShadowMap",Pe.state.pointShadowMap,V)),Z.isSkinnedMesh){Ie.setOptional(z,Z,"bindMatrix"),Ie.setOptional(z,Z,"bindMatrixInverse");const cn=Z.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ie.setValue(z,"boneTexture",cn.boneTexture,V))}Z.isBatchedMesh&&(Ie.setOptional(z,Z,"batchingTexture"),Ie.setValue(z,"batchingTexture",Z._matricesTexture,V),Ie.setOptional(z,Z,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",Z._indirectTexture,V),Ie.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",Z._colorsTexture,V));const en=j.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&re.update(Z,j,xn),(An||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,Ie.setValue(z,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ln.envMap.value=Nt,ln.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=w1()),An&&(Ie.setValue(z,"toneMappingExposure",S.toneMappingExposure),kt.needsLights&&il(ln,ji),yt&&J.fog===!0&&Wt.refreshFogUniforms(ln,yt),Wt.refreshMaterialUniforms(ln,J,ee,le,F.state.transmissionRenderTarget[A.id]),Xo.upload(z,Aa(kt),ln,V)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Xo.upload(z,Aa(kt),ln,V),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(z,"center",Z.center),Ie.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(z,"normalMatrix",Z.normalMatrix),Ie.setValue(z,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const cn=J.uniformsGroups;for(let dn=0,Bs=cn.length;dn<Bs;dn++){const gi=cn[dn];mt.update(gi,xn),mt.bind(gi,xn)}}return xn}function il(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,W,j){const J=E.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=W,E.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const j=E.get(A);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const Xr=z.createFramebuffer();this.setRenderTarget=function(A,W=0,j=0){K=A,N=W,q=j;let J=null,Z=!1,yt=!1;if(A){const Tt=E.get(A);if(Tt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(z.FRAMEBUFFER,Tt.__webglFramebuffer),tt.copy(A.viewport),$.copy(A.scissor),ot=A.scissorTest,Ut.viewport(tt),Ut.scissor($),Ut.setScissorTest(ot),nt=-1;return}else if(Tt.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(Tt.__hasExternalTextures)V.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Tt.__boundDepthTexture!==Xt){if(Xt!==null&&E.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}const Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(yt=!0);const Ht=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?J=Ht[W][j]:J=Ht[W],Z=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?J=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?J=Ht[j]:J=Ht,tt.copy(A.viewport),$.copy(A.scissor),ot=A.scissorTest}else tt.copy(at).multiplyScalar(ee).floor(),$.copy(dt).multiplyScalar(ee).floor(),ot=Pt;if(j!==0&&(J=Xr),Ut.bindFramebuffer(z.FRAMEBUFFER,J)&&Ut.drawBuffers(A,J),Ut.viewport(tt),Ut.scissor($),Ut.setScissorTest(ot),Z){const Tt=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,j)}else if(yt){const Tt=W;for(let Nt=0;Nt<A.textures.length;Nt++){const Ht=E.get(A.textures[Nt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Nt,Ht.__webglTexture,j,Tt)}}else if(A!==null&&j!==0){const Tt=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Tt.__webglTexture,j)}nt=-1},this.readRenderTargetPixels=function(A,W,j,J,Z,yt,Dt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Ut.bindFramebuffer(z.FRAMEBUFFER,Nt);try{const Ht=A.textures[Tt],Xt=Ht.format,Vt=Ht.type;if(!fe.textureFormatReadable(Xt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Vt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-J&&j>=0&&j<=A.height-Z&&(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt),z.readPixels(W,j,J,Z,_t.convert(Xt),_t.convert(Vt),yt))}finally{const Ht=K!==null?E.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,W,j,J,Z,yt,Dt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(W>=0&&W<=A.width-J&&j>=0&&j<=A.height-Z){Ut.bindFramebuffer(z.FRAMEBUFFER,Nt);const Ht=A.textures[Tt],Xt=Ht.format,Vt=Ht.type;if(!fe.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,se),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Tt),z.readPixels(W,j,J,Z,_t.convert(Xt),_t.convert(Vt),0);const Ae=K!==null?E.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Ae);const We=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await GS(z,We,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(se),z.deleteSync(We),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,j=0){const J=Math.pow(2,-j),Z=Math.floor(A.image.width*J),yt=Math.floor(A.image.height*J),Dt=W!==null?W.x:0,Tt=W!==null?W.y:0;V.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Dt,Tt,Z,yt),Ut.unbindTexture()};const sl=z.createFramebuffer(),qr=z.createFramebuffer();this.copyTextureToTexture=function(A,W,j=null,J=null,Z=0,yt=null){yt===null&&(Z!==0?(ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Z,Z=0):yt=0);let Dt,Tt,Nt,Ht,Xt,Vt,se,Ae,We;const Ve=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(j!==null)Dt=j.max.x-j.min.x,Tt=j.max.y-j.min.y,Nt=j.isBox3?j.max.z-j.min.z:1,Ht=j.min.x,Xt=j.min.y,Vt=j.isBox3?j.min.z:0;else{const en=Math.pow(2,-Z);Dt=Math.floor(Ve.width*en),Tt=Math.floor(Ve.height*en),A.isDataArrayTexture?Nt=Ve.depth:A.isData3DTexture?Nt=Math.floor(Ve.depth*en):Nt=1,Ht=0,Xt=0,Vt=0}J!==null?(se=J.x,Ae=J.y,We=J.z):(se=0,Ae=0,We=0);const we=_t.convert(W.format),kt=_t.convert(W.type);let Pe;W.isData3DTexture?(V.setTexture3D(W,0),Pe=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(V.setTexture2DArray(W,0),Pe=z.TEXTURE_2D_ARRAY):(V.setTexture2D(W,0),Pe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const Me=z.getParameter(z.UNPACK_ROW_LENGTH),xn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),_i=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),ji=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ve.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);const Ie=A.isDataArrayTexture||A.isData3DTexture,ln=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const en=E.get(A),cn=E.get(W),dn=E.get(en.__renderTarget),Bs=E.get(cn.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,dn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let gi=0;gi<Nt;gi++)Ie&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Z,Vt+gi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(W).__webglTexture,yt,We+gi)),z.blitFramebuffer(Ht,Xt,Dt,Tt,se,Ae,Dt,Tt,z.DEPTH_BUFFER_BIT,z.NEAREST);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||E.has(A)){const en=E.get(A),cn=E.get(W);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,sl),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,qr);for(let dn=0;dn<Nt;dn++)Ie?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,en.__webglTexture,Z,Vt+dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,en.__webglTexture,Z),ln?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,cn.__webglTexture,yt,We+dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,cn.__webglTexture,yt),Z!==0?z.blitFramebuffer(Ht,Xt,Dt,Tt,se,Ae,Dt,Tt,z.COLOR_BUFFER_BIT,z.NEAREST):ln?z.copyTexSubImage3D(Pe,yt,se,Ae,We+dn,Ht,Xt,Dt,Tt):z.copyTexSubImage2D(Pe,yt,se,Ae,Ht,Xt,Dt,Tt);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Pe,yt,se,Ae,We,Dt,Tt,Nt,we,kt,Ve.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Pe,yt,se,Ae,We,Dt,Tt,Nt,we,Ve.data):z.texSubImage3D(Pe,yt,se,Ae,We,Dt,Tt,Nt,we,kt,Ve):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,se,Ae,Dt,Tt,we,kt,Ve.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,se,Ae,Ve.width,Ve.height,we,Ve.data):z.texSubImage2D(z.TEXTURE_2D,yt,se,Ae,Dt,Tt,we,kt,Ve);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,_i),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ji),yt===0&&W.generateMipmaps&&z.generateMipmap(Pe),Ut.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),Ut.unbindTexture()},this.resetState=function(){N=0,q=0,K=null,Ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}const Sp={type:"change"},oh={type:"start"},sm={type:"end"},Oo=new th,Ep=new mr,C1=Math.cos(70*VS.DEG2RAD),sn=new X,On=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qc=1e-6;class am extends LE{constructor(t,e=null){super(t,e),this.state=Be.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Hr,this._lastTargetPosition=new X,this._quat=new Hr().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zd,this._sphericalDelta=new Zd,this._scale=1,this._panOffset=new X,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new X,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=P1.bind(this),this._onPointerUp=L1.bind(this),this._onContextMenu=z1.bind(this),this._onMouseWheel=N1.bind(this),this._onKeyDown=F1.bind(this),this._onTouchStart=O1.bind(this),this._onTouchMove=B1.bind(this),this._onMouseDown=I1.bind(this),this._onMouseMove=U1.bind(this),this._interceptControlDown=G1.bind(this),this._interceptControlUp=H1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sp),this.update(),this.state=Be.NONE}update(t=null){const e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),a<-Math.PI?a+=On:a>Math.PI&&(a-=On),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=sn.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const u=new X(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const f=new X(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),c=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<C1?this.object.lookAt(this.target):(Ep.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Ep,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>qc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qc||this._lastTargetPosition.distanceToSquared(this.target)>qc?(this.dispatchEvent(Sp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?On/60*this.autoRotateSpeed*t:On/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;sn.copy(a).sub(this.target);let o=sn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=t-i.left,o=e-i.top,c=i.width,u=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(i,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),a=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(On*this._rotateDelta.x/e.clientHeight),this._rotateUp(On*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,a=t.pageY-e.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(t.pageX+e.x)*.5,u=(t.pageY+e.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function P1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function D1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function L1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sm),this.state=Be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function I1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Be.DOLLY;break;case Es.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}break;case Es.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(oh)}function U1(s){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function N1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(s.preventDefault(),this.dispatchEvent(oh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sm))}function F1(s){this.enabled!==!1&&this._handleKeyDown(s)}function O1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Be.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Be.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(oh)}function B1(s){switch(this._trackPointer(s),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Be.NONE}}function z1(s){this.enabled!==!1&&s.preventDefault()}function G1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var da=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++s%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===p?"block":"none";s=p}var a=(performance||Date).now(),o=a,c=0,u=e(new da.Panel("FPS","#0ff","#002")),d=e(new da.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new da.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:t,setMode:i}};da.Panel=function(s,t,e){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,d=48*c,f=3*c,p=2*c,_=3*c,x=15*c,v=74*c,y=30*c,w=document.createElement("canvas");w.width=u,w.height=d,w.style.cssText="width:80px;height:48px";var g=w.getContext("2d");return g.font="bold "+9*c+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=e,g.fillRect(0,0,u,d),g.fillStyle=t,g.fillText(s,f,p),g.fillRect(_,x,v,y),g.fillStyle=e,g.globalAlpha=.9,g.fillRect(_,x,v,y),{dom:w,update:function(m,L){i=Math.min(i,m),a=Math.max(a,m),g.fillStyle=e,g.globalAlpha=1,g.fillRect(0,0,u,x),g.fillStyle=t,g.fillText(o(m)+" "+s+" ("+o(i)+"-"+o(a)+")",f,p),g.drawImage(w,_+c,x,v-c,y,_,x,v-c,y),g.fillRect(_+v-c,x,c,y),g.fillStyle=e,g.globalAlpha=.9,g.fillRect(_+v-c,x,c,o((1-m/L)*y))}}};const de=Object.freeze({ball:Object.freeze({bounciness:.8,launchForce:3.5,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6}),simulationMode:!0,maxFlightDurationInSeconds:30,ticksPerSecond:500,camera:{fov:30,near:.1,far:Math.pow(10,6)},defaultPlanetDensity:14e-5,maxPlanetOffset:700,showFPSCounter:!0,showInfoTab:!1,skyboxOpacity:1});function V1(s){const t=new Ds({color:"rgb(0,0,0)",side:Dn}),e=32,i=32,a=1;return new Bn(new Is(s+a,e,i),t)}class om extends Bn{get mass(){const t=Math.PI*4/3;return this.density*this.radius**3*t}constructor({radius:t,color:e="rgb(255,0,0)",density:i=de.defaultPlanetDensity}){super(new Is(t,32,32),new vE({color:e})),this.radius=t,this.density=i,this.add(V1(t))}}class k1{constructor(t){this.scene=t}getPlanets(){return this.getInstancesOf(om)}getLines(){return this.getInstancesOf(ih)}getInstancesOf(t){return this.scene.children.filter(e=>e instanceof t)}}const W1=document.getElementById("infoTab"),X1=document.getElementById("infoTab__text"),q1={updateText(s){const t=`Ball: {
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
}`;X1.innerHTML=t}};de.showInfoTab||(W1.style.display="none");class Y1 extends fn{constructor(t){super(de.camera.fov,innerWidth/innerHeight,de.camera.near,de.camera.far),this.position.set(400,200,40),this.lookAt(new X)}setupLockControls(){}reset(t){if(!t.landedPlanet)return;const e=t.position.clone(),a=(t.landedPlanet?.position.clone()).sub(e),o=e.clone().sub(a.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(e)}getControlsObject(){}}const pr=()=>new fn(de.camera.fov,innerWidth/innerHeight,de.camera.near,de.camera.far);class K1 extends ca{constructor(){super(),this.cameras=[pr(),pr(),pr(),pr(),pr(),pr(),pr(),pr()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const t=de.maxPlanetOffset+900,e=-t,i=t;this.cameras[0].position.set(e,e/2,e),this.cameras[1].position.set(e,e/2,i),this.cameras[2].position.set(e,i/2,e),this.cameras[3].position.set(e,i/2,i),this.cameras[4].position.set(i,e/2,e),this.cameras[5].position.set(i,e/2,i),this.cameras[6].position.set(i,i/2,e),this.cameras[7].position.set(i,i/2,i)}selectActiveCamera(t){if(Date.now()-this.lastSwitchDate<3e3)return;const a=+(t.x>0)*4+ +(t.y>0)*2+ +(t.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[a]}updateActiveCamera(t){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(t)}getActiveCamera(){return this.activeCamera}update(t){this.selectActiveCamera(t),this.updateActiveCamera(t)}}class Z1 extends fn{constructor(t){super(de.camera.fov,innerWidth/innerHeight,de.camera.near,de.camera.far),this.position.set(400,200,40),this.orbitControls=new am(this,t),this.lookAt(new X)}reset(t){if(!t.landedPlanet)return;const e=t.position.clone(),a=(t.landedPlanet?.position.clone()).sub(e),o=e.clone().sub(a.normalize().multiplyScalar(2e3));this.orbitControls.target=e,this.position.copy(o),this.lookAt(e)}}const Vu={ballHit:(s=1)=>Yc("audio-ping-pong-ball-hit",{volume:s}),ballFlightStart:(s=.5)=>Yc("audio-ball-flight-start",{volume:s,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>Yc("audio-ambient",{volume:.5})};function Yc(s,{volume:t=1,startTimeMS:e=0,stopTimeMS:i}){const a=document.getElementById(s);if(!a)throw new Error(`Audio not found: ${s}`);a.pause(),a.volume=t,a.currentTime=e/1e3,a.play(),typeof i=="number"&&setTimeout(function(){a.pause()},i)}function lm(s,t){const e=new X(t?.x||Math.random(),t?.y||Math.random(),t?.z||Math.random()).normalize().multiplyScalar(de.ball.launchForce);s.landedPlanet=null,s.velocity=e,Vu.ballFlightStart()}var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ha={exports:{}},$1=ha.exports,yp;function J1(){return yp||(yp=1,(function(s,t){(function(e,i){{var a=i();s&&s.exports&&(t=s.exports=a),t.randomColor=a}})($1,function(){var e=null,i={};m();var a=[],o=function(C){if(C=C||{},C.seed!==void 0&&C.seed!==null&&C.seed===parseInt(C.seed,10))e=C.seed;else if(typeof C.seed=="string")e=F(C.seed);else{if(C.seed!==void 0&&C.seed!==null)throw new TypeError("The seed value must be an integer or string");e=null}var O,S,T;if(C.count!==null&&C.count!==void 0){for(var N=C.count,q=[],K=0;K<C.count;K++)a.push(!1);for(C.count=null;N>q.length;){var nt=o(C);e!==null&&(C.seed=e),q.push(nt)}return C.count=N,q}return O=c(C),S=u(O,C),T=d(O,S,C),f([O,S,T],C)};function c(C){if(a.length>0){var O=B(C.hue),S=y(O),T=(O[1]-O[0])/a.length,N=parseInt((S-O[0])/T);a[N]===!0?N=(N+2)%a.length:a[N]=!0;var q=(O[0]+N*T)%359,K=(O[0]+(N+1)*T)%359;return O=[q,K],S=y(O),S<0&&(S=360+S),S}else{var O=_(C.hue);return S=y(O),S<0&&(S=360+S),S}}function u(C,O){if(O.hue==="monochrome")return 0;if(O.luminosity==="random")return y([0,100]);var S=x(C),T=S[0],N=S[1];switch(O.luminosity){case"bright":T=55;break;case"dark":T=N-10;break;case"light":N=55;break}return y([T,N])}function d(C,O,S){var T=p(C,O),N=100;switch(S.luminosity){case"dark":N=T+20;break;case"light":T=(N+T)/2;break;case"random":T=0,N=100;break}return y([T,N])}function f(C,O){switch(O.format){case"hsvArray":return C;case"hslArray":return D(C);case"hsl":var S=D(C);return"hsl("+S[0]+", "+S[1]+"%, "+S[2]+"%)";case"hsla":var T=D(C),K=O.alpha||Math.random();return"hsla("+T[0]+", "+T[1]+"%, "+T[2]+"%, "+K+")";case"rgbArray":return L(C);case"rgb":var N=L(C);return"rgb("+N.join(", ")+")";case"rgba":var q=L(C),K=O.alpha||Math.random();return"rgba("+q.join(", ")+", "+K+")";default:return w(C)}}function p(C,O){for(var S=v(C).lowerBounds,T=0;T<S.length-1;T++){var N=S[T][0],q=S[T][1],K=S[T+1][0],nt=S[T+1][1];if(O>=N&&O<=K){var it=(nt-q)/(K-N),tt=q-it*N;return it*O+tt}}return 0}function _(C){if(typeof parseInt(C)=="number"){var O=parseInt(C);if(O<360&&O>0)return[O,O]}if(typeof C=="string"){if(i[C]){var S=i[C];if(S.hueRange)return S.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(C)[0];return[T,T]}}return[0,360]}function x(C){return v(C).saturationRange}function v(C){C>=334&&C<=360&&(C-=360);for(var O in i){var S=i[O];if(S.hueRange&&C>=S.hueRange[0]&&C<=S.hueRange[1])return i[O]}return"Color not found"}function y(C){if(e===null){var O=.618033988749895,S=Math.random();return S+=O,S%=1,Math.floor(C[0]+S*(C[1]+1-C[0]))}else{var T=C[1]||1,N=C[0]||0;e=(e*9301+49297)%233280;var q=e/233280;return Math.floor(N+q*(T-N))}}function w(C){var O=L(C);function S(N){var q=N.toString(16);return q.length==1?"0"+q:q}var T="#"+S(O[0])+S(O[1])+S(O[2]);return T}function g(C,O,S){var T=S[0][0],N=S[S.length-1][0],q=S[S.length-1][1],K=S[0][1];i[C]={hueRange:O,lowerBounds:S,saturationRange:[T,N],brightnessRange:[q,K]}}function m(){g("monochrome",null,[[0,0],[100,0]]),g("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),g("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),g("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),g("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),g("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),g("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),g("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function L(C){var O=C[0];O===0&&(O=1),O===360&&(O=359),O=O/360;var S=C[1]/100,T=C[2]/100,N=Math.floor(O*6),q=O*6-N,K=T*(1-S),nt=T*(1-q*S),it=T*(1-(1-q)*S),tt=256,$=256,ot=256;switch(N){case 0:tt=T,$=it,ot=K;break;case 1:tt=nt,$=T,ot=K;break;case 2:tt=K,$=T,ot=it;break;case 3:tt=K,$=nt,ot=T;break;case 4:tt=it,$=K,ot=T;break;case 5:tt=T,$=K,ot=nt;break}var wt=[Math.floor(tt*255),Math.floor($*255),Math.floor(ot*255)];return wt}function I(C){C=C.replace(/^#/,""),C=C.length===3?C.replace(/(.)/g,"$1$1"):C;var O=parseInt(C.substr(0,2),16)/255,S=parseInt(C.substr(2,2),16)/255,T=parseInt(C.substr(4,2),16)/255,N=Math.max(O,S,T),q=N-Math.min(O,S,T),K=N?q/N:0;switch(N){case O:return[60*((S-T)/q%6)||0,K,N];case S:return[60*((T-O)/q+2)||0,K,N];case T:return[60*((O-S)/q+4)||0,K,N]}}function D(C){var O=C[0],S=C[1]/100,T=C[2]/100,N=(2-S)*T;return[O,Math.round(S*T/(N<1?N:2-N)*1e4)/100,N/2*100]}function F(C){for(var O=0,S=0;S!==C.length&&!(O>=Number.MAX_SAFE_INTEGER);S++)O+=C.charCodeAt(S);return O}function B(C){if(isNaN(C)){if(typeof C=="string"){if(i[C]){var S=i[C];if(S.hueRange)return S.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=I(C)[0];return v(T).hueRange}}}else{var O=parseInt(C);if(O<360&&O>0)return v(C).hueRange}return[0,360]}return o})})(ha,ha.exports)),ha.exports}var j1=J1();const um=cm(j1);function Q1(s){return new Is(s,32,32)}function tw(s){return new Ds({color:s})}class ew extends Bn{constructor({radius:t=de.ball.radius}={}){const e=um({luminosity:"dark",alpha:1});super(Q1(t),tw(e)),this._velocity=new X(0,0,0),this.arrowHelper=new DE(new X,new X),this.pathVertices=[],this.camera=new fn(de.camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.mass=3,this.light=new jp(e,16e3,1e4),this.color=e,this.radius=t,de.ball.showVelocityVector&&this.add(this.arrowHelper),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}get velocity(){return this._velocity.clone()}set velocity(t){this._velocity=t}addVelocity(t){this._velocity.add(t)}createTrace(){const t=new nh({color:16755200,opacity:de.ball.traceTransparency,transparent:!0}),e=new zn().setFromPoints(this.pathVertices);return new ih(e,t)}tick(){this.landedPlanet!==null&&(this.velocity=new X,de.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{lm(this,new X(-.8,.18,-.72)),this.launchBallTimeout=null},1e3))),this.rotation.set(0,0,0),this.position.add(this.velocity);const t=this.velocity.normalize();this.rotation.set(t.x,t.y,t.z),this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},de.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class nw extends Bn{constructor(){super(new Ls,[]),this.init()}async init(){const e=await new bE().loadAsync(`${document.baseURI}assets/gfx/sphere-skybox.jpg`),i=new Ds({side:yi,map:e,opacity:de.skyboxOpacity,transparent:!0,color:new Ee(.15,.2,.4)}),a=10**5.8,o=new Is(a);this.geometry=o,this.material=i}}function iw(s,t){return s.position.distanceTo(t.position)<=s.radius+t.radius}function rw({pulled:s,puller:t,timeDelta:e}){const i=t.position.clone().sub(s.position),a=t.position.distanceTo(s.position);return i.normalize().multiplyScalar(t.mass).multiplyScalar(s.mass).multiplyScalar(e*100).divideScalar(a**2)}function sw({staticSphere:s,movingSphere:t,onBounceVelocityMultiplier:e=de.ball.bounciness}){const i=t.position.clone().sub(s.position).normalize(),a=i.dot(t.velocity);return t.velocity.clone().sub(i.clone().multiplyScalar(2*a)).multiplyScalar(e)}function aw(s,t){const e=s.position.clone().sub(t.position).normalize().multiplyScalar(t.radius+s.radius),i=t.position.clone().add(e);return s.position.set(i.x,i.y,i.z),i}var fa={exports:{}};var ow=fa.exports,Tp;function lw(){return Tp||(Tp=1,(function(s,t){(function(){var e,i="4.17.23",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",_=1,x=2,v=4,y=1,w=2,g=1,m=2,L=4,I=8,D=16,F=32,B=64,C=128,O=256,S=512,T=30,N="...",q=800,K=16,nt=1,it=2,tt=3,$=1/0,ot=9007199254740991,wt=17976931348623157e292,St=NaN,Et=4294967295,le=Et-1,ee=Et>>>1,He=[["ary",C],["bind",g],["bindKey",m],["curry",I],["curryRight",D],["flip",S],["partial",F],["partialRight",B],["rearg",O]],be="[object Arguments]",at="[object Array]",dt="[object AsyncFunction]",Pt="[object Boolean]",Zt="[object Date]",Bt="[object DOMException]",pe="[object Error]",qe="[object Function]",ge="[object GeneratorFunction]",ne="[object Map]",ye="[object Number]",ie="[object Null]",Le="[object Object]",z="[object Promise]",Ze="[object Proxy]",xe="[object RegExp]",fe="[object Set]",Ut="[object String]",P="[object Symbol]",E="[object Undefined]",V="[object WeakMap]",st="[object WeakSet]",ut="[object ArrayBuffer]",et="[object DataView]",zt="[object Float32Array]",gt="[object Float64Array]",Ft="[object Int8Array]",Wt="[object Int16Array]",pt="[object Int32Array]",vt="[object Uint8Array]",It="[object Uint8ClampedArray]",Ot="[object Uint16Array]",xt="[object Uint32Array]",re=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,Rt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_t=/&(?:amp|lt|gt|quot|#39);/g,Ct=/[&<>"']/g,mt=RegExp(_t.source),ht=RegExp(Ct.source),Mt=/<%-([\s\S]+?)%>/g,$t=/<%([\s\S]+?)%>/g,Fe=/<%=([\s\S]+?)%>/g,Ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/,ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ns=/[\\^$.*+?()[\]{}|]/g,Sa=RegExp(Ns.source),Mr=/^\s+/,el=/\s/,Ea=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ya=/\{\n\/\* \[wrapped with (.+)\] \*/,Li=/,? & /,Fs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ta=/[()=,{}\[\]\/\s]/,ba=/\\(\\)?/g,kr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Os=/\w*$/,Wr=/^[-+]0x[0-9a-f]+$/i,Aa=/^0b[01]+$/i,wa=/^\[object .+?Constructor\]$/,nl=/^0o[0-7]+$/i,il=/^(?:0|[1-9]\d*)$/,rl=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xr=/($^)/,sl=/['\n\r\u2028\u2029\\]/g,qr="\\ud800-\\udfff",A="\\u0300-\\u036f",W="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",J=A+W+j,Z="\\u2700-\\u27bf",yt="a-z\\xdf-\\xf6\\xf8-\\xff",Dt="\\xac\\xb1\\xd7\\xf7",Tt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Nt="\\u2000-\\u206f",Ht=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Xt="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",se=Dt+Tt+Nt+Ht,Ae="['’]",We="["+qr+"]",Ve="["+se+"]",we="["+J+"]",kt="\\d+",Pe="["+Z+"]",Me="["+yt+"]",xn="[^"+qr+se+kt+Z+yt+Xt+"]",_i="\\ud83c[\\udffb-\\udfff]",An="(?:"+we+"|"+_i+")",ji="[^"+qr+"]",Ie="(?:\\ud83c[\\udde6-\\uddff]){2}",ln="[\\ud800-\\udbff][\\udc00-\\udfff]",en="["+Xt+"]",cn="\\u200d",dn="(?:"+Me+"|"+xn+")",Bs="(?:"+en+"|"+xn+")",gi="(?:"+Ae+"(?:d|ll|m|re|s|t|ve))?",lh="(?:"+Ae+"(?:D|LL|M|RE|S|T|VE))?",ch=An+"?",uh="["+Vt+"]?",hm="(?:"+cn+"(?:"+[ji,Ie,ln].join("|")+")"+uh+ch+")*",fm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",dm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hh=uh+ch+hm,pm="(?:"+[Pe,Ie,ln].join("|")+")"+hh,mm="(?:"+[ji+we+"?",we,Ie,ln,We].join("|")+")",_m=RegExp(Ae,"g"),gm=RegExp(we,"g"),al=RegExp(_i+"(?="+_i+")|"+mm+hh,"g"),xm=RegExp([en+"?"+Me+"+"+gi+"(?="+[Ve,en,"$"].join("|")+")",Bs+"+"+lh+"(?="+[Ve,en+dn,"$"].join("|")+")",en+"?"+dn+"+"+gi,en+"+"+lh,dm,fm,kt,pm].join("|"),"g"),vm=RegExp("["+cn+qr+J+Vt+"]"),Mm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Em=-1,ke={};ke[zt]=ke[gt]=ke[Ft]=ke[Wt]=ke[pt]=ke[vt]=ke[It]=ke[Ot]=ke[xt]=!0,ke[be]=ke[at]=ke[ut]=ke[Pt]=ke[et]=ke[Zt]=ke[pe]=ke[qe]=ke[ne]=ke[ye]=ke[Le]=ke[xe]=ke[fe]=ke[Ut]=ke[V]=!1;var Ge={};Ge[be]=Ge[at]=Ge[ut]=Ge[et]=Ge[Pt]=Ge[Zt]=Ge[zt]=Ge[gt]=Ge[Ft]=Ge[Wt]=Ge[pt]=Ge[ne]=Ge[ye]=Ge[Le]=Ge[xe]=Ge[fe]=Ge[Ut]=Ge[P]=Ge[vt]=Ge[It]=Ge[Ot]=Ge[xt]=!0,Ge[pe]=Ge[qe]=Ge[V]=!1;var ym={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Tm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Am={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},wm=parseFloat,Rm=parseInt,fh=typeof Bo=="object"&&Bo&&Bo.Object===Object&&Bo,Cm=typeof self=="object"&&self&&self.Object===Object&&self,pn=fh||Cm||Function("return this")(),ol=t&&!t.nodeType&&t,Sr=ol&&!0&&s&&!s.nodeType&&s,dh=Sr&&Sr.exports===ol,ll=dh&&fh.process,$n=(function(){try{var k=Sr&&Sr.require&&Sr.require("util").types;return k||ll&&ll.binding&&ll.binding("util")}catch{}})(),ph=$n&&$n.isArrayBuffer,mh=$n&&$n.isDate,_h=$n&&$n.isMap,gh=$n&&$n.isRegExp,xh=$n&&$n.isSet,vh=$n&&$n.isTypedArray;function Gn(k,rt,Q){switch(Q.length){case 0:return k.call(rt);case 1:return k.call(rt,Q[0]);case 2:return k.call(rt,Q[0],Q[1]);case 3:return k.call(rt,Q[0],Q[1],Q[2])}return k.apply(rt,Q)}function Pm(k,rt,Q,Lt){for(var jt=-1,De=k==null?0:k.length;++jt<De;){var nn=k[jt];rt(Lt,nn,Q(nn),k)}return Lt}function Jn(k,rt){for(var Q=-1,Lt=k==null?0:k.length;++Q<Lt&&rt(k[Q],Q,k)!==!1;);return k}function Dm(k,rt){for(var Q=k==null?0:k.length;Q--&&rt(k[Q],Q,k)!==!1;);return k}function Mh(k,rt){for(var Q=-1,Lt=k==null?0:k.length;++Q<Lt;)if(!rt(k[Q],Q,k))return!1;return!0}function Qi(k,rt){for(var Q=-1,Lt=k==null?0:k.length,jt=0,De=[];++Q<Lt;){var nn=k[Q];rt(nn,Q,k)&&(De[jt++]=nn)}return De}function Ra(k,rt){var Q=k==null?0:k.length;return!!Q&&Yr(k,rt,0)>-1}function cl(k,rt,Q){for(var Lt=-1,jt=k==null?0:k.length;++Lt<jt;)if(Q(rt,k[Lt]))return!0;return!1}function Xe(k,rt){for(var Q=-1,Lt=k==null?0:k.length,jt=Array(Lt);++Q<Lt;)jt[Q]=rt(k[Q],Q,k);return jt}function tr(k,rt){for(var Q=-1,Lt=rt.length,jt=k.length;++Q<Lt;)k[jt+Q]=rt[Q];return k}function ul(k,rt,Q,Lt){var jt=-1,De=k==null?0:k.length;for(Lt&&De&&(Q=k[++jt]);++jt<De;)Q=rt(Q,k[jt],jt,k);return Q}function Lm(k,rt,Q,Lt){var jt=k==null?0:k.length;for(Lt&&jt&&(Q=k[--jt]);jt--;)Q=rt(Q,k[jt],jt,k);return Q}function hl(k,rt){for(var Q=-1,Lt=k==null?0:k.length;++Q<Lt;)if(rt(k[Q],Q,k))return!0;return!1}var Im=fl("length");function Um(k){return k.split("")}function Nm(k){return k.match(Fs)||[]}function Sh(k,rt,Q){var Lt;return Q(k,function(jt,De,nn){if(rt(jt,De,nn))return Lt=De,!1}),Lt}function Ca(k,rt,Q,Lt){for(var jt=k.length,De=Q+(Lt?1:-1);Lt?De--:++De<jt;)if(rt(k[De],De,k))return De;return-1}function Yr(k,rt,Q){return rt===rt?Ym(k,rt,Q):Ca(k,Eh,Q)}function Fm(k,rt,Q,Lt){for(var jt=Q-1,De=k.length;++jt<De;)if(Lt(k[jt],rt))return jt;return-1}function Eh(k){return k!==k}function yh(k,rt){var Q=k==null?0:k.length;return Q?pl(k,rt)/Q:St}function fl(k){return function(rt){return rt==null?e:rt[k]}}function dl(k){return function(rt){return k==null?e:k[rt]}}function Th(k,rt,Q,Lt,jt){return jt(k,function(De,nn,ze){Q=Lt?(Lt=!1,De):rt(Q,De,nn,ze)}),Q}function Om(k,rt){var Q=k.length;for(k.sort(rt);Q--;)k[Q]=k[Q].value;return k}function pl(k,rt){for(var Q,Lt=-1,jt=k.length;++Lt<jt;){var De=rt(k[Lt]);De!==e&&(Q=Q===e?De:Q+De)}return Q}function ml(k,rt){for(var Q=-1,Lt=Array(k);++Q<k;)Lt[Q]=rt(Q);return Lt}function Bm(k,rt){return Xe(rt,function(Q){return[Q,k[Q]]})}function bh(k){return k&&k.slice(0,Ch(k)+1).replace(Mr,"")}function Hn(k){return function(rt){return k(rt)}}function _l(k,rt){return Xe(rt,function(Q){return k[Q]})}function zs(k,rt){return k.has(rt)}function Ah(k,rt){for(var Q=-1,Lt=k.length;++Q<Lt&&Yr(rt,k[Q],0)>-1;);return Q}function wh(k,rt){for(var Q=k.length;Q--&&Yr(rt,k[Q],0)>-1;);return Q}function zm(k,rt){for(var Q=k.length,Lt=0;Q--;)k[Q]===rt&&++Lt;return Lt}var Gm=dl(ym),Hm=dl(Tm);function Vm(k){return"\\"+Am[k]}function km(k,rt){return k==null?e:k[rt]}function Kr(k){return vm.test(k)}function Wm(k){return Mm.test(k)}function Xm(k){for(var rt,Q=[];!(rt=k.next()).done;)Q.push(rt.value);return Q}function gl(k){var rt=-1,Q=Array(k.size);return k.forEach(function(Lt,jt){Q[++rt]=[jt,Lt]}),Q}function Rh(k,rt){return function(Q){return k(rt(Q))}}function er(k,rt){for(var Q=-1,Lt=k.length,jt=0,De=[];++Q<Lt;){var nn=k[Q];(nn===rt||nn===p)&&(k[Q]=p,De[jt++]=Q)}return De}function Pa(k){var rt=-1,Q=Array(k.size);return k.forEach(function(Lt){Q[++rt]=Lt}),Q}function qm(k){var rt=-1,Q=Array(k.size);return k.forEach(function(Lt){Q[++rt]=[Lt,Lt]}),Q}function Ym(k,rt,Q){for(var Lt=Q-1,jt=k.length;++Lt<jt;)if(k[Lt]===rt)return Lt;return-1}function Km(k,rt,Q){for(var Lt=Q+1;Lt--;)if(k[Lt]===rt)return Lt;return Lt}function Zr(k){return Kr(k)?$m(k):Im(k)}function oi(k){return Kr(k)?Jm(k):Um(k)}function Ch(k){for(var rt=k.length;rt--&&el.test(k.charAt(rt)););return rt}var Zm=dl(bm);function $m(k){for(var rt=al.lastIndex=0;al.test(k);)++rt;return rt}function Jm(k){return k.match(al)||[]}function jm(k){return k.match(xm)||[]}var Qm=(function k(rt){rt=rt==null?pn:$r.defaults(pn.Object(),rt,$r.pick(pn,Sm));var Q=rt.Array,Lt=rt.Date,jt=rt.Error,De=rt.Function,nn=rt.Math,ze=rt.Object,xl=rt.RegExp,t_=rt.String,jn=rt.TypeError,Da=Q.prototype,e_=De.prototype,Jr=ze.prototype,La=rt["__core-js_shared__"],Ia=e_.toString,Ue=Jr.hasOwnProperty,n_=0,Ph=(function(){var n=/[^.]+$/.exec(La&&La.keys&&La.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})(),Ua=Jr.toString,i_=Ia.call(ze),r_=pn._,s_=xl("^"+Ia.call(Ue).replace(Ns,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Na=dh?rt.Buffer:e,nr=rt.Symbol,Fa=rt.Uint8Array,Dh=Na?Na.allocUnsafe:e,Oa=Rh(ze.getPrototypeOf,ze),Lh=ze.create,Ih=Jr.propertyIsEnumerable,Ba=Da.splice,Uh=nr?nr.isConcatSpreadable:e,Gs=nr?nr.iterator:e,Er=nr?nr.toStringTag:e,za=(function(){try{var n=wr(ze,"defineProperty");return n({},"",{}),n}catch{}})(),a_=rt.clearTimeout!==pn.clearTimeout&&rt.clearTimeout,o_=Lt&&Lt.now!==pn.Date.now&&Lt.now,l_=rt.setTimeout!==pn.setTimeout&&rt.setTimeout,Ga=nn.ceil,Ha=nn.floor,vl=ze.getOwnPropertySymbols,c_=Na?Na.isBuffer:e,Nh=rt.isFinite,u_=Da.join,h_=Rh(ze.keys,ze),rn=nn.max,vn=nn.min,f_=Lt.now,d_=rt.parseInt,Fh=nn.random,p_=Da.reverse,Ml=wr(rt,"DataView"),Hs=wr(rt,"Map"),Sl=wr(rt,"Promise"),jr=wr(rt,"Set"),Vs=wr(rt,"WeakMap"),ks=wr(ze,"create"),Va=Vs&&new Vs,Qr={},m_=Rr(Ml),__=Rr(Hs),g_=Rr(Sl),x_=Rr(jr),v_=Rr(Vs),ka=nr?nr.prototype:e,Ws=ka?ka.valueOf:e,Oh=ka?ka.toString:e;function b(n){if($e(n)&&!Qt(n)&&!(n instanceof ve)){if(n instanceof Qn)return n;if(Ue.call(n,"__wrapped__"))return zf(n)}return new Qn(n)}var ts=(function(){function n(){}return function(r){if(!Ye(r))return{};if(Lh)return Lh(r);n.prototype=r;var l=new n;return n.prototype=e,l}})();function Wa(){}function Qn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}b.templateSettings={escape:Mt,evaluate:$t,interpolate:Fe,variable:"",imports:{_:b}},b.prototype=Wa.prototype,b.prototype.constructor=b,Qn.prototype=ts(Wa.prototype),Qn.prototype.constructor=Qn;function ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Et,this.__views__=[]}function M_(){var n=new ve(this.__wrapped__);return n.__actions__=Ln(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ln(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ln(this.__views__),n}function S_(){if(this.__filtered__){var n=new ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function E_(){var n=this.__wrapped__.value(),r=this.__dir__,l=Qt(n),h=r<0,M=l?n.length:0,R=Ug(0,M,this.__views__),U=R.start,G=R.end,Y=G-U,lt=h?G:U-1,ct=this.__iteratees__,ft=ct.length,bt=0,Gt=vn(Y,this.__takeCount__);if(!l||!h&&M==Y&&Gt==Y)return lf(n,this.__actions__);var Yt=[];t:for(;Y--&&bt<Gt;){lt+=r;for(var ce=-1,Kt=n[lt];++ce<ft;){var me=ct[ce],Se=me.iteratee,Wn=me.type,Cn=Se(Kt);if(Wn==it)Kt=Cn;else if(!Cn){if(Wn==nt)continue t;break t}}Yt[bt++]=Kt}return Yt}ve.prototype=ts(Wa.prototype),ve.prototype.constructor=ve;function yr(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function y_(){this.__data__=ks?ks(null):{},this.size=0}function T_(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function b_(n){var r=this.__data__;if(ks){var l=r[n];return l===d?e:l}return Ue.call(r,n)?r[n]:e}function A_(n){var r=this.__data__;return ks?r[n]!==e:Ue.call(r,n)}function w_(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=ks&&r===e?d:r,this}yr.prototype.clear=y_,yr.prototype.delete=T_,yr.prototype.get=b_,yr.prototype.has=A_,yr.prototype.set=w_;function Ii(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function R_(){this.__data__=[],this.size=0}function C_(n){var r=this.__data__,l=Xa(r,n);if(l<0)return!1;var h=r.length-1;return l==h?r.pop():Ba.call(r,l,1),--this.size,!0}function P_(n){var r=this.__data__,l=Xa(r,n);return l<0?e:r[l][1]}function D_(n){return Xa(this.__data__,n)>-1}function L_(n,r){var l=this.__data__,h=Xa(l,n);return h<0?(++this.size,l.push([n,r])):l[h][1]=r,this}Ii.prototype.clear=R_,Ii.prototype.delete=C_,Ii.prototype.get=P_,Ii.prototype.has=D_,Ii.prototype.set=L_;function Ui(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function I_(){this.size=0,this.__data__={hash:new yr,map:new(Hs||Ii),string:new yr}}function U_(n){var r=io(this,n).delete(n);return this.size-=r?1:0,r}function N_(n){return io(this,n).get(n)}function F_(n){return io(this,n).has(n)}function O_(n,r){var l=io(this,n),h=l.size;return l.set(n,r),this.size+=l.size==h?0:1,this}Ui.prototype.clear=I_,Ui.prototype.delete=U_,Ui.prototype.get=N_,Ui.prototype.has=F_,Ui.prototype.set=O_;function Tr(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new Ui;++r<l;)this.add(n[r])}function B_(n){return this.__data__.set(n,d),this}function z_(n){return this.__data__.has(n)}Tr.prototype.add=Tr.prototype.push=B_,Tr.prototype.has=z_;function li(n){var r=this.__data__=new Ii(n);this.size=r.size}function G_(){this.__data__=new Ii,this.size=0}function H_(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function V_(n){return this.__data__.get(n)}function k_(n){return this.__data__.has(n)}function W_(n,r){var l=this.__data__;if(l instanceof Ii){var h=l.__data__;if(!Hs||h.length<a-1)return h.push([n,r]),this.size=++l.size,this;l=this.__data__=new Ui(h)}return l.set(n,r),this.size=l.size,this}li.prototype.clear=G_,li.prototype.delete=H_,li.prototype.get=V_,li.prototype.has=k_,li.prototype.set=W_;function Bh(n,r){var l=Qt(n),h=!l&&Cr(n),M=!l&&!h&&or(n),R=!l&&!h&&!M&&rs(n),U=l||h||M||R,G=U?ml(n.length,t_):[],Y=G.length;for(var lt in n)(r||Ue.call(n,lt))&&!(U&&(lt=="length"||M&&(lt=="offset"||lt=="parent")||R&&(lt=="buffer"||lt=="byteLength"||lt=="byteOffset")||Bi(lt,Y)))&&G.push(lt);return G}function zh(n){var r=n.length;return r?n[Ll(0,r-1)]:e}function X_(n,r){return ro(Ln(n),br(r,0,n.length))}function q_(n){return ro(Ln(n))}function El(n,r,l){(l!==e&&!ci(n[r],l)||l===e&&!(r in n))&&Ni(n,r,l)}function Xs(n,r,l){var h=n[r];(!(Ue.call(n,r)&&ci(h,l))||l===e&&!(r in n))&&Ni(n,r,l)}function Xa(n,r){for(var l=n.length;l--;)if(ci(n[l][0],r))return l;return-1}function Y_(n,r,l,h){return ir(n,function(M,R,U){r(h,M,l(M),U)}),h}function Gh(n,r){return n&&vi(r,un(r),n)}function K_(n,r){return n&&vi(r,Un(r),n)}function Ni(n,r,l){r=="__proto__"&&za?za(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function yl(n,r){for(var l=-1,h=r.length,M=Q(h),R=n==null;++l<h;)M[l]=R?e:ic(n,r[l]);return M}function br(n,r,l){return n===n&&(l!==e&&(n=n<=l?n:l),r!==e&&(n=n>=r?n:r)),n}function ti(n,r,l,h,M,R){var U,G=r&_,Y=r&x,lt=r&v;if(l&&(U=M?l(n,h,M,R):l(n)),U!==e)return U;if(!Ye(n))return n;var ct=Qt(n);if(ct){if(U=Fg(n),!G)return Ln(n,U)}else{var ft=Mn(n),bt=ft==qe||ft==ge;if(or(n))return hf(n,G);if(ft==Le||ft==be||bt&&!M){if(U=Y||bt?{}:Pf(n),!G)return Y?bg(n,K_(U,n)):Tg(n,Gh(U,n))}else{if(!Ge[ft])return M?n:{};U=Og(n,ft,G)}}R||(R=new li);var Gt=R.get(n);if(Gt)return Gt;R.set(n,U),sd(n)?n.forEach(function(Kt){U.add(ti(Kt,r,l,Kt,n,R))}):id(n)&&n.forEach(function(Kt,me){U.set(me,ti(Kt,r,l,me,n,R))});var Yt=lt?Y?kl:Vl:Y?Un:un,ce=ct?e:Yt(n);return Jn(ce||n,function(Kt,me){ce&&(me=Kt,Kt=n[me]),Xs(U,me,ti(Kt,r,l,me,n,R))}),U}function Z_(n){var r=un(n);return function(l){return Hh(l,n,r)}}function Hh(n,r,l){var h=l.length;if(n==null)return!h;for(n=ze(n);h--;){var M=l[h],R=r[M],U=n[M];if(U===e&&!(M in n)||!R(U))return!1}return!0}function Vh(n,r,l){if(typeof n!="function")throw new jn(c);return js(function(){n.apply(e,l)},r)}function qs(n,r,l,h){var M=-1,R=Ra,U=!0,G=n.length,Y=[],lt=r.length;if(!G)return Y;l&&(r=Xe(r,Hn(l))),h?(R=cl,U=!1):r.length>=a&&(R=zs,U=!1,r=new Tr(r));t:for(;++M<G;){var ct=n[M],ft=l==null?ct:l(ct);if(ct=h||ct!==0?ct:0,U&&ft===ft){for(var bt=lt;bt--;)if(r[bt]===ft)continue t;Y.push(ct)}else R(r,ft,h)||Y.push(ct)}return Y}var ir=_f(xi),kh=_f(bl,!0);function $_(n,r){var l=!0;return ir(n,function(h,M,R){return l=!!r(h,M,R),l}),l}function qa(n,r,l){for(var h=-1,M=n.length;++h<M;){var R=n[h],U=r(R);if(U!=null&&(G===e?U===U&&!kn(U):l(U,G)))var G=U,Y=R}return Y}function J_(n,r,l,h){var M=n.length;for(l=ae(l),l<0&&(l=-l>M?0:M+l),h=h===e||h>M?M:ae(h),h<0&&(h+=M),h=l>h?0:od(h);l<h;)n[l++]=r;return n}function Wh(n,r){var l=[];return ir(n,function(h,M,R){r(h,M,R)&&l.push(h)}),l}function mn(n,r,l,h,M){var R=-1,U=n.length;for(l||(l=zg),M||(M=[]);++R<U;){var G=n[R];r>0&&l(G)?r>1?mn(G,r-1,l,h,M):tr(M,G):h||(M[M.length]=G)}return M}var Tl=gf(),Xh=gf(!0);function xi(n,r){return n&&Tl(n,r,un)}function bl(n,r){return n&&Xh(n,r,un)}function Ya(n,r){return Qi(r,function(l){return zi(n[l])})}function Ar(n,r){r=sr(r,n);for(var l=0,h=r.length;n!=null&&l<h;)n=n[Mi(r[l++])];return l&&l==h?n:e}function qh(n,r,l){var h=r(n);return Qt(n)?h:tr(h,l(n))}function wn(n){return n==null?n===e?E:ie:Er&&Er in ze(n)?Ig(n):qg(n)}function Al(n,r){return n>r}function j_(n,r){return n!=null&&Ue.call(n,r)}function Q_(n,r){return n!=null&&r in ze(n)}function tg(n,r,l){return n>=vn(r,l)&&n<rn(r,l)}function wl(n,r,l){for(var h=l?cl:Ra,M=n[0].length,R=n.length,U=R,G=Q(R),Y=1/0,lt=[];U--;){var ct=n[U];U&&r&&(ct=Xe(ct,Hn(r))),Y=vn(ct.length,Y),G[U]=!l&&(r||M>=120&&ct.length>=120)?new Tr(U&&ct):e}ct=n[0];var ft=-1,bt=G[0];t:for(;++ft<M&&lt.length<Y;){var Gt=ct[ft],Yt=r?r(Gt):Gt;if(Gt=l||Gt!==0?Gt:0,!(bt?zs(bt,Yt):h(lt,Yt,l))){for(U=R;--U;){var ce=G[U];if(!(ce?zs(ce,Yt):h(n[U],Yt,l)))continue t}bt&&bt.push(Yt),lt.push(Gt)}}return lt}function eg(n,r,l,h){return xi(n,function(M,R,U){r(h,l(M),R,U)}),h}function Ys(n,r,l){r=sr(r,n),n=Uf(n,r);var h=n==null?n:n[Mi(ni(r))];return h==null?e:Gn(h,n,l)}function Yh(n){return $e(n)&&wn(n)==be}function ng(n){return $e(n)&&wn(n)==ut}function ig(n){return $e(n)&&wn(n)==Zt}function Ks(n,r,l,h,M){return n===r?!0:n==null||r==null||!$e(n)&&!$e(r)?n!==n&&r!==r:rg(n,r,l,h,Ks,M)}function rg(n,r,l,h,M,R){var U=Qt(n),G=Qt(r),Y=U?at:Mn(n),lt=G?at:Mn(r);Y=Y==be?Le:Y,lt=lt==be?Le:lt;var ct=Y==Le,ft=lt==Le,bt=Y==lt;if(bt&&or(n)){if(!or(r))return!1;U=!0,ct=!1}if(bt&&!ct)return R||(R=new li),U||rs(n)?wf(n,r,l,h,M,R):Dg(n,r,Y,l,h,M,R);if(!(l&y)){var Gt=ct&&Ue.call(n,"__wrapped__"),Yt=ft&&Ue.call(r,"__wrapped__");if(Gt||Yt){var ce=Gt?n.value():n,Kt=Yt?r.value():r;return R||(R=new li),M(ce,Kt,l,h,R)}}return bt?(R||(R=new li),Lg(n,r,l,h,M,R)):!1}function sg(n){return $e(n)&&Mn(n)==ne}function Rl(n,r,l,h){var M=l.length,R=M,U=!h;if(n==null)return!R;for(n=ze(n);M--;){var G=l[M];if(U&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++M<R;){G=l[M];var Y=G[0],lt=n[Y],ct=G[1];if(U&&G[2]){if(lt===e&&!(Y in n))return!1}else{var ft=new li;if(h)var bt=h(lt,ct,Y,n,r,ft);if(!(bt===e?Ks(ct,lt,y|w,h,ft):bt))return!1}}return!0}function Kh(n){if(!Ye(n)||Hg(n))return!1;var r=zi(n)?s_:wa;return r.test(Rr(n))}function ag(n){return $e(n)&&wn(n)==xe}function og(n){return $e(n)&&Mn(n)==fe}function lg(n){return $e(n)&&uo(n.length)&&!!ke[wn(n)]}function Zh(n){return typeof n=="function"?n:n==null?Nn:typeof n=="object"?Qt(n)?jh(n[0],n[1]):Jh(n):xd(n)}function Cl(n){if(!Js(n))return h_(n);var r=[];for(var l in ze(n))Ue.call(n,l)&&l!="constructor"&&r.push(l);return r}function cg(n){if(!Ye(n))return Xg(n);var r=Js(n),l=[];for(var h in n)h=="constructor"&&(r||!Ue.call(n,h))||l.push(h);return l}function Pl(n,r){return n<r}function $h(n,r){var l=-1,h=In(n)?Q(n.length):[];return ir(n,function(M,R,U){h[++l]=r(M,R,U)}),h}function Jh(n){var r=Xl(n);return r.length==1&&r[0][2]?Lf(r[0][0],r[0][1]):function(l){return l===n||Rl(l,n,r)}}function jh(n,r){return Yl(n)&&Df(r)?Lf(Mi(n),r):function(l){var h=ic(l,n);return h===e&&h===r?rc(l,n):Ks(r,h,y|w)}}function Ka(n,r,l,h,M){n!==r&&Tl(r,function(R,U){if(M||(M=new li),Ye(R))ug(n,r,U,l,Ka,h,M);else{var G=h?h(Zl(n,U),R,U+"",n,r,M):e;G===e&&(G=R),El(n,U,G)}},Un)}function ug(n,r,l,h,M,R,U){var G=Zl(n,l),Y=Zl(r,l),lt=U.get(Y);if(lt){El(n,l,lt);return}var ct=R?R(G,Y,l+"",n,r,U):e,ft=ct===e;if(ft){var bt=Qt(Y),Gt=!bt&&or(Y),Yt=!bt&&!Gt&&rs(Y);ct=Y,bt||Gt||Yt?Qt(G)?ct=G:je(G)?ct=Ln(G):Gt?(ft=!1,ct=hf(Y,!0)):Yt?(ft=!1,ct=ff(Y,!0)):ct=[]:Qs(Y)||Cr(Y)?(ct=G,Cr(G)?ct=ld(G):(!Ye(G)||zi(G))&&(ct=Pf(Y))):ft=!1}ft&&(U.set(Y,ct),M(ct,Y,h,R,U),U.delete(Y)),El(n,l,ct)}function Qh(n,r){var l=n.length;if(l)return r+=r<0?l:0,Bi(r,l)?n[r]:e}function tf(n,r,l){r.length?r=Xe(r,function(R){return Qt(R)?function(U){return Ar(U,R.length===1?R[0]:R)}:R}):r=[Nn];var h=-1;r=Xe(r,Hn(qt()));var M=$h(n,function(R,U,G){var Y=Xe(r,function(lt){return lt(R)});return{criteria:Y,index:++h,value:R}});return Om(M,function(R,U){return yg(R,U,l)})}function hg(n,r){return ef(n,r,function(l,h){return rc(n,h)})}function ef(n,r,l){for(var h=-1,M=r.length,R={};++h<M;){var U=r[h],G=Ar(n,U);l(G,U)&&Zs(R,sr(U,n),G)}return R}function fg(n){return function(r){return Ar(r,n)}}function Dl(n,r,l,h){var M=h?Fm:Yr,R=-1,U=r.length,G=n;for(n===r&&(r=Ln(r)),l&&(G=Xe(n,Hn(l)));++R<U;)for(var Y=0,lt=r[R],ct=l?l(lt):lt;(Y=M(G,ct,Y,h))>-1;)G!==n&&Ba.call(G,Y,1),Ba.call(n,Y,1);return n}function nf(n,r){for(var l=n?r.length:0,h=l-1;l--;){var M=r[l];if(l==h||M!==R){var R=M;Bi(M)?Ba.call(n,M,1):Nl(n,M)}}return n}function Ll(n,r){return n+Ha(Fh()*(r-n+1))}function dg(n,r,l,h){for(var M=-1,R=rn(Ga((r-n)/(l||1)),0),U=Q(R);R--;)U[h?R:++M]=n,n+=l;return U}function Il(n,r){var l="";if(!n||r<1||r>ot)return l;do r%2&&(l+=n),r=Ha(r/2),r&&(n+=n);while(r);return l}function he(n,r){return $l(If(n,r,Nn),n+"")}function pg(n){return zh(ss(n))}function mg(n,r){var l=ss(n);return ro(l,br(r,0,l.length))}function Zs(n,r,l,h){if(!Ye(n))return n;r=sr(r,n);for(var M=-1,R=r.length,U=R-1,G=n;G!=null&&++M<R;){var Y=Mi(r[M]),lt=l;if(Y==="__proto__"||Y==="constructor"||Y==="prototype")return n;if(M!=U){var ct=G[Y];lt=h?h(ct,Y,G):e,lt===e&&(lt=Ye(ct)?ct:Bi(r[M+1])?[]:{})}Xs(G,Y,lt),G=G[Y]}return n}var rf=Va?function(n,r){return Va.set(n,r),n}:Nn,_g=za?function(n,r){return za(n,"toString",{configurable:!0,enumerable:!1,value:ac(r),writable:!0})}:Nn;function gg(n){return ro(ss(n))}function ei(n,r,l){var h=-1,M=n.length;r<0&&(r=-r>M?0:M+r),l=l>M?M:l,l<0&&(l+=M),M=r>l?0:l-r>>>0,r>>>=0;for(var R=Q(M);++h<M;)R[h]=n[h+r];return R}function xg(n,r){var l;return ir(n,function(h,M,R){return l=r(h,M,R),!l}),!!l}function Za(n,r,l){var h=0,M=n==null?h:n.length;if(typeof r=="number"&&r===r&&M<=ee){for(;h<M;){var R=h+M>>>1,U=n[R];U!==null&&!kn(U)&&(l?U<=r:U<r)?h=R+1:M=R}return M}return Ul(n,r,Nn,l)}function Ul(n,r,l,h){var M=0,R=n==null?0:n.length;if(R===0)return 0;r=l(r);for(var U=r!==r,G=r===null,Y=kn(r),lt=r===e;M<R;){var ct=Ha((M+R)/2),ft=l(n[ct]),bt=ft!==e,Gt=ft===null,Yt=ft===ft,ce=kn(ft);if(U)var Kt=h||Yt;else lt?Kt=Yt&&(h||bt):G?Kt=Yt&&bt&&(h||!Gt):Y?Kt=Yt&&bt&&!Gt&&(h||!ce):Gt||ce?Kt=!1:Kt=h?ft<=r:ft<r;Kt?M=ct+1:R=ct}return vn(R,le)}function sf(n,r){for(var l=-1,h=n.length,M=0,R=[];++l<h;){var U=n[l],G=r?r(U):U;if(!l||!ci(G,Y)){var Y=G;R[M++]=U===0?0:U}}return R}function af(n){return typeof n=="number"?n:kn(n)?St:+n}function Vn(n){if(typeof n=="string")return n;if(Qt(n))return Xe(n,Vn)+"";if(kn(n))return Oh?Oh.call(n):"";var r=n+"";return r=="0"&&1/n==-$?"-0":r}function rr(n,r,l){var h=-1,M=Ra,R=n.length,U=!0,G=[],Y=G;if(l)U=!1,M=cl;else if(R>=a){var lt=r?null:Cg(n);if(lt)return Pa(lt);U=!1,M=zs,Y=new Tr}else Y=r?[]:G;t:for(;++h<R;){var ct=n[h],ft=r?r(ct):ct;if(ct=l||ct!==0?ct:0,U&&ft===ft){for(var bt=Y.length;bt--;)if(Y[bt]===ft)continue t;r&&Y.push(ft),G.push(ct)}else M(Y,ft,l)||(Y!==G&&Y.push(ft),G.push(ct))}return G}function Nl(n,r){r=sr(r,n);var l=-1,h=r.length;if(!h)return!0;for(var M=n==null||typeof n!="object"&&typeof n!="function";++l<h;){var R=r[l];if(typeof R=="string"){if(R==="__proto__"&&!Ue.call(n,"__proto__"))return!1;if(R==="constructor"&&l+1<h&&typeof r[l+1]=="string"&&r[l+1]==="prototype"){if(M&&l===0)continue;return!1}}}var U=Uf(n,r);return U==null||delete U[Mi(ni(r))]}function of(n,r,l,h){return Zs(n,r,l(Ar(n,r)),h)}function $a(n,r,l,h){for(var M=n.length,R=h?M:-1;(h?R--:++R<M)&&r(n[R],R,n););return l?ei(n,h?0:R,h?R+1:M):ei(n,h?R+1:0,h?M:R)}function lf(n,r){var l=n;return l instanceof ve&&(l=l.value()),ul(r,function(h,M){return M.func.apply(M.thisArg,tr([h],M.args))},l)}function Fl(n,r,l){var h=n.length;if(h<2)return h?rr(n[0]):[];for(var M=-1,R=Q(h);++M<h;)for(var U=n[M],G=-1;++G<h;)G!=M&&(R[M]=qs(R[M]||U,n[G],r,l));return rr(mn(R,1),r,l)}function cf(n,r,l){for(var h=-1,M=n.length,R=r.length,U={};++h<M;){var G=h<R?r[h]:e;l(U,n[h],G)}return U}function Ol(n){return je(n)?n:[]}function Bl(n){return typeof n=="function"?n:Nn}function sr(n,r){return Qt(n)?n:Yl(n,r)?[n]:Bf(Ne(n))}var vg=he;function ar(n,r,l){var h=n.length;return l=l===e?h:l,!r&&l>=h?n:ei(n,r,l)}var uf=a_||function(n){return pn.clearTimeout(n)};function hf(n,r){if(r)return n.slice();var l=n.length,h=Dh?Dh(l):new n.constructor(l);return n.copy(h),h}function zl(n){var r=new n.constructor(n.byteLength);return new Fa(r).set(new Fa(n)),r}function Mg(n,r){var l=r?zl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Sg(n){var r=new n.constructor(n.source,Os.exec(n));return r.lastIndex=n.lastIndex,r}function Eg(n){return Ws?ze(Ws.call(n)):{}}function ff(n,r){var l=r?zl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function df(n,r){if(n!==r){var l=n!==e,h=n===null,M=n===n,R=kn(n),U=r!==e,G=r===null,Y=r===r,lt=kn(r);if(!G&&!lt&&!R&&n>r||R&&U&&Y&&!G&&!lt||h&&U&&Y||!l&&Y||!M)return 1;if(!h&&!R&&!lt&&n<r||lt&&l&&M&&!h&&!R||G&&l&&M||!U&&M||!Y)return-1}return 0}function yg(n,r,l){for(var h=-1,M=n.criteria,R=r.criteria,U=M.length,G=l.length;++h<U;){var Y=df(M[h],R[h]);if(Y){if(h>=G)return Y;var lt=l[h];return Y*(lt=="desc"?-1:1)}}return n.index-r.index}function pf(n,r,l,h){for(var M=-1,R=n.length,U=l.length,G=-1,Y=r.length,lt=rn(R-U,0),ct=Q(Y+lt),ft=!h;++G<Y;)ct[G]=r[G];for(;++M<U;)(ft||M<R)&&(ct[l[M]]=n[M]);for(;lt--;)ct[G++]=n[M++];return ct}function mf(n,r,l,h){for(var M=-1,R=n.length,U=-1,G=l.length,Y=-1,lt=r.length,ct=rn(R-G,0),ft=Q(ct+lt),bt=!h;++M<ct;)ft[M]=n[M];for(var Gt=M;++Y<lt;)ft[Gt+Y]=r[Y];for(;++U<G;)(bt||M<R)&&(ft[Gt+l[U]]=n[M++]);return ft}function Ln(n,r){var l=-1,h=n.length;for(r||(r=Q(h));++l<h;)r[l]=n[l];return r}function vi(n,r,l,h){var M=!l;l||(l={});for(var R=-1,U=r.length;++R<U;){var G=r[R],Y=h?h(l[G],n[G],G,l,n):e;Y===e&&(Y=n[G]),M?Ni(l,G,Y):Xs(l,G,Y)}return l}function Tg(n,r){return vi(n,ql(n),r)}function bg(n,r){return vi(n,Rf(n),r)}function Ja(n,r){return function(l,h){var M=Qt(l)?Pm:Y_,R=r?r():{};return M(l,n,qt(h,2),R)}}function es(n){return he(function(r,l){var h=-1,M=l.length,R=M>1?l[M-1]:e,U=M>2?l[2]:e;for(R=n.length>3&&typeof R=="function"?(M--,R):e,U&&Rn(l[0],l[1],U)&&(R=M<3?e:R,M=1),r=ze(r);++h<M;){var G=l[h];G&&n(r,G,h,R)}return r})}function _f(n,r){return function(l,h){if(l==null)return l;if(!In(l))return n(l,h);for(var M=l.length,R=r?M:-1,U=ze(l);(r?R--:++R<M)&&h(U[R],R,U)!==!1;);return l}}function gf(n){return function(r,l,h){for(var M=-1,R=ze(r),U=h(r),G=U.length;G--;){var Y=U[n?G:++M];if(l(R[Y],Y,R)===!1)break}return r}}function Ag(n,r,l){var h=r&g,M=$s(n);function R(){var U=this&&this!==pn&&this instanceof R?M:n;return U.apply(h?l:this,arguments)}return R}function xf(n){return function(r){r=Ne(r);var l=Kr(r)?oi(r):e,h=l?l[0]:r.charAt(0),M=l?ar(l,1).join(""):r.slice(1);return h[n]()+M}}function ns(n){return function(r){return ul(_d(md(r).replace(_m,"")),n,"")}}function $s(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=ts(n.prototype),h=n.apply(l,r);return Ye(h)?h:l}}function wg(n,r,l){var h=$s(n);function M(){for(var R=arguments.length,U=Q(R),G=R,Y=is(M);G--;)U[G]=arguments[G];var lt=R<3&&U[0]!==Y&&U[R-1]!==Y?[]:er(U,Y);if(R-=lt.length,R<l)return yf(n,r,ja,M.placeholder,e,U,lt,e,e,l-R);var ct=this&&this!==pn&&this instanceof M?h:n;return Gn(ct,this,U)}return M}function vf(n){return function(r,l,h){var M=ze(r);if(!In(r)){var R=qt(l,3);r=un(r),l=function(G){return R(M[G],G,M)}}var U=n(r,l,h);return U>-1?M[R?r[U]:U]:e}}function Mf(n){return Oi(function(r){var l=r.length,h=l,M=Qn.prototype.thru;for(n&&r.reverse();h--;){var R=r[h];if(typeof R!="function")throw new jn(c);if(M&&!U&&no(R)=="wrapper")var U=new Qn([],!0)}for(h=U?h:l;++h<l;){R=r[h];var G=no(R),Y=G=="wrapper"?Wl(R):e;Y&&Kl(Y[0])&&Y[1]==(C|I|F|O)&&!Y[4].length&&Y[9]==1?U=U[no(Y[0])].apply(U,Y[3]):U=R.length==1&&Kl(R)?U[G]():U.thru(R)}return function(){var lt=arguments,ct=lt[0];if(U&&lt.length==1&&Qt(ct))return U.plant(ct).value();for(var ft=0,bt=l?r[ft].apply(this,lt):ct;++ft<l;)bt=r[ft].call(this,bt);return bt}})}function ja(n,r,l,h,M,R,U,G,Y,lt){var ct=r&C,ft=r&g,bt=r&m,Gt=r&(I|D),Yt=r&S,ce=bt?e:$s(n);function Kt(){for(var me=arguments.length,Se=Q(me),Wn=me;Wn--;)Se[Wn]=arguments[Wn];if(Gt)var Cn=is(Kt),Xn=zm(Se,Cn);if(h&&(Se=pf(Se,h,M,Gt)),R&&(Se=mf(Se,R,U,Gt)),me-=Xn,Gt&&me<lt){var Qe=er(Se,Cn);return yf(n,r,ja,Kt.placeholder,l,Se,Qe,G,Y,lt-me)}var ui=ft?l:this,Hi=bt?ui[n]:n;return me=Se.length,G?Se=Yg(Se,G):Yt&&me>1&&Se.reverse(),ct&&Y<me&&(Se.length=Y),this&&this!==pn&&this instanceof Kt&&(Hi=ce||$s(Hi)),Hi.apply(ui,Se)}return Kt}function Sf(n,r){return function(l,h){return eg(l,n,r(h),{})}}function Qa(n,r){return function(l,h){var M;if(l===e&&h===e)return r;if(l!==e&&(M=l),h!==e){if(M===e)return h;typeof l=="string"||typeof h=="string"?(l=Vn(l),h=Vn(h)):(l=af(l),h=af(h)),M=n(l,h)}return M}}function Gl(n){return Oi(function(r){return r=Xe(r,Hn(qt())),he(function(l){var h=this;return n(r,function(M){return Gn(M,h,l)})})})}function to(n,r){r=r===e?" ":Vn(r);var l=r.length;if(l<2)return l?Il(r,n):r;var h=Il(r,Ga(n/Zr(r)));return Kr(r)?ar(oi(h),0,n).join(""):h.slice(0,n)}function Rg(n,r,l,h){var M=r&g,R=$s(n);function U(){for(var G=-1,Y=arguments.length,lt=-1,ct=h.length,ft=Q(ct+Y),bt=this&&this!==pn&&this instanceof U?R:n;++lt<ct;)ft[lt]=h[lt];for(;Y--;)ft[lt++]=arguments[++G];return Gn(bt,M?l:this,ft)}return U}function Ef(n){return function(r,l,h){return h&&typeof h!="number"&&Rn(r,l,h)&&(l=h=e),r=Gi(r),l===e?(l=r,r=0):l=Gi(l),h=h===e?r<l?1:-1:Gi(h),dg(r,l,h,n)}}function eo(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=ii(r),l=ii(l)),n(r,l)}}function yf(n,r,l,h,M,R,U,G,Y,lt){var ct=r&I,ft=ct?U:e,bt=ct?e:U,Gt=ct?R:e,Yt=ct?e:R;r|=ct?F:B,r&=~(ct?B:F),r&L||(r&=-4);var ce=[n,r,M,Gt,ft,Yt,bt,G,Y,lt],Kt=l.apply(e,ce);return Kl(n)&&Nf(Kt,ce),Kt.placeholder=h,Ff(Kt,n,r)}function Hl(n){var r=nn[n];return function(l,h){if(l=ii(l),h=h==null?0:vn(ae(h),292),h&&Nh(l)){var M=(Ne(l)+"e").split("e"),R=r(M[0]+"e"+(+M[1]+h));return M=(Ne(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-h))}return r(l)}}var Cg=jr&&1/Pa(new jr([,-0]))[1]==$?function(n){return new jr(n)}:cc;function Tf(n){return function(r){var l=Mn(r);return l==ne?gl(r):l==fe?qm(r):Bm(r,n(r))}}function Fi(n,r,l,h,M,R,U,G){var Y=r&m;if(!Y&&typeof n!="function")throw new jn(c);var lt=h?h.length:0;if(lt||(r&=-97,h=M=e),U=U===e?U:rn(ae(U),0),G=G===e?G:ae(G),lt-=M?M.length:0,r&B){var ct=h,ft=M;h=M=e}var bt=Y?e:Wl(n),Gt=[n,r,l,h,M,ct,ft,R,U,G];if(bt&&Wg(Gt,bt),n=Gt[0],r=Gt[1],l=Gt[2],h=Gt[3],M=Gt[4],G=Gt[9]=Gt[9]===e?Y?0:n.length:rn(Gt[9]-lt,0),!G&&r&(I|D)&&(r&=-25),!r||r==g)var Yt=Ag(n,r,l);else r==I||r==D?Yt=wg(n,r,G):(r==F||r==(g|F))&&!M.length?Yt=Rg(n,r,l,h):Yt=ja.apply(e,Gt);var ce=bt?rf:Nf;return Ff(ce(Yt,Gt),n,r)}function bf(n,r,l,h){return n===e||ci(n,Jr[l])&&!Ue.call(h,l)?r:n}function Af(n,r,l,h,M,R){return Ye(n)&&Ye(r)&&(R.set(r,n),Ka(n,r,e,Af,R),R.delete(r)),n}function Pg(n){return Qs(n)?e:n}function wf(n,r,l,h,M,R){var U=l&y,G=n.length,Y=r.length;if(G!=Y&&!(U&&Y>G))return!1;var lt=R.get(n),ct=R.get(r);if(lt&&ct)return lt==r&&ct==n;var ft=-1,bt=!0,Gt=l&w?new Tr:e;for(R.set(n,r),R.set(r,n);++ft<G;){var Yt=n[ft],ce=r[ft];if(h)var Kt=U?h(ce,Yt,ft,r,n,R):h(Yt,ce,ft,n,r,R);if(Kt!==e){if(Kt)continue;bt=!1;break}if(Gt){if(!hl(r,function(me,Se){if(!zs(Gt,Se)&&(Yt===me||M(Yt,me,l,h,R)))return Gt.push(Se)})){bt=!1;break}}else if(!(Yt===ce||M(Yt,ce,l,h,R))){bt=!1;break}}return R.delete(n),R.delete(r),bt}function Dg(n,r,l,h,M,R,U){switch(l){case et:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case ut:return!(n.byteLength!=r.byteLength||!R(new Fa(n),new Fa(r)));case Pt:case Zt:case ye:return ci(+n,+r);case pe:return n.name==r.name&&n.message==r.message;case xe:case Ut:return n==r+"";case ne:var G=gl;case fe:var Y=h&y;if(G||(G=Pa),n.size!=r.size&&!Y)return!1;var lt=U.get(n);if(lt)return lt==r;h|=w,U.set(n,r);var ct=wf(G(n),G(r),h,M,R,U);return U.delete(n),ct;case P:if(Ws)return Ws.call(n)==Ws.call(r)}return!1}function Lg(n,r,l,h,M,R){var U=l&y,G=Vl(n),Y=G.length,lt=Vl(r),ct=lt.length;if(Y!=ct&&!U)return!1;for(var ft=Y;ft--;){var bt=G[ft];if(!(U?bt in r:Ue.call(r,bt)))return!1}var Gt=R.get(n),Yt=R.get(r);if(Gt&&Yt)return Gt==r&&Yt==n;var ce=!0;R.set(n,r),R.set(r,n);for(var Kt=U;++ft<Y;){bt=G[ft];var me=n[bt],Se=r[bt];if(h)var Wn=U?h(Se,me,bt,r,n,R):h(me,Se,bt,n,r,R);if(!(Wn===e?me===Se||M(me,Se,l,h,R):Wn)){ce=!1;break}Kt||(Kt=bt=="constructor")}if(ce&&!Kt){var Cn=n.constructor,Xn=r.constructor;Cn!=Xn&&"constructor"in n&&"constructor"in r&&!(typeof Cn=="function"&&Cn instanceof Cn&&typeof Xn=="function"&&Xn instanceof Xn)&&(ce=!1)}return R.delete(n),R.delete(r),ce}function Oi(n){return $l(If(n,e,Vf),n+"")}function Vl(n){return qh(n,un,ql)}function kl(n){return qh(n,Un,Rf)}var Wl=Va?function(n){return Va.get(n)}:cc;function no(n){for(var r=n.name+"",l=Qr[r],h=Ue.call(Qr,r)?l.length:0;h--;){var M=l[h],R=M.func;if(R==null||R==n)return M.name}return r}function is(n){var r=Ue.call(b,"placeholder")?b:n;return r.placeholder}function qt(){var n=b.iteratee||oc;return n=n===oc?Zh:n,arguments.length?n(arguments[0],arguments[1]):n}function io(n,r){var l=n.__data__;return Gg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function Xl(n){for(var r=un(n),l=r.length;l--;){var h=r[l],M=n[h];r[l]=[h,M,Df(M)]}return r}function wr(n,r){var l=km(n,r);return Kh(l)?l:e}function Ig(n){var r=Ue.call(n,Er),l=n[Er];try{n[Er]=e;var h=!0}catch{}var M=Ua.call(n);return h&&(r?n[Er]=l:delete n[Er]),M}var ql=vl?function(n){return n==null?[]:(n=ze(n),Qi(vl(n),function(r){return Ih.call(n,r)}))}:uc,Rf=vl?function(n){for(var r=[];n;)tr(r,ql(n)),n=Oa(n);return r}:uc,Mn=wn;(Ml&&Mn(new Ml(new ArrayBuffer(1)))!=et||Hs&&Mn(new Hs)!=ne||Sl&&Mn(Sl.resolve())!=z||jr&&Mn(new jr)!=fe||Vs&&Mn(new Vs)!=V)&&(Mn=function(n){var r=wn(n),l=r==Le?n.constructor:e,h=l?Rr(l):"";if(h)switch(h){case m_:return et;case __:return ne;case g_:return z;case x_:return fe;case v_:return V}return r});function Ug(n,r,l){for(var h=-1,M=l.length;++h<M;){var R=l[h],U=R.size;switch(R.type){case"drop":n+=U;break;case"dropRight":r-=U;break;case"take":r=vn(r,n+U);break;case"takeRight":n=rn(n,r-U);break}}return{start:n,end:r}}function Ng(n){var r=n.match(ya);return r?r[1].split(Li):[]}function Cf(n,r,l){r=sr(r,n);for(var h=-1,M=r.length,R=!1;++h<M;){var U=Mi(r[h]);if(!(R=n!=null&&l(n,U)))break;n=n[U]}return R||++h!=M?R:(M=n==null?0:n.length,!!M&&uo(M)&&Bi(U,M)&&(Qt(n)||Cr(n)))}function Fg(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&Ue.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Pf(n){return typeof n.constructor=="function"&&!Js(n)?ts(Oa(n)):{}}function Og(n,r,l){var h=n.constructor;switch(r){case ut:return zl(n);case Pt:case Zt:return new h(+n);case et:return Mg(n,l);case zt:case gt:case Ft:case Wt:case pt:case vt:case It:case Ot:case xt:return ff(n,l);case ne:return new h;case ye:case Ut:return new h(n);case xe:return Sg(n);case fe:return new h;case P:return Eg(n)}}function Bg(n,r){var l=r.length;if(!l)return n;var h=l-1;return r[h]=(l>1?"& ":"")+r[h],r=r.join(l>2?", ":" "),n.replace(Ea,`{
/* [wrapped with `+r+`] */
`)}function zg(n){return Qt(n)||Cr(n)||!!(Uh&&n&&n[Uh])}function Bi(n,r){var l=typeof n;return r=r??ot,!!r&&(l=="number"||l!="symbol"&&il.test(n))&&n>-1&&n%1==0&&n<r}function Rn(n,r,l){if(!Ye(l))return!1;var h=typeof r;return(h=="number"?In(l)&&Bi(r,l.length):h=="string"&&r in l)?ci(l[r],n):!1}function Yl(n,r){if(Qt(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||kn(n)?!0:Zn.test(n)||!Ce.test(n)||r!=null&&n in ze(r)}function Gg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Kl(n){var r=no(n),l=b[r];if(typeof l!="function"||!(r in ve.prototype))return!1;if(n===l)return!0;var h=Wl(l);return!!h&&n===h[0]}function Hg(n){return!!Ph&&Ph in n}var Vg=La?zi:hc;function Js(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||Jr;return n===l}function Df(n){return n===n&&!Ye(n)}function Lf(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==e||n in ze(l))}}function kg(n){var r=lo(n,function(h){return l.size===f&&l.clear(),h}),l=r.cache;return r}function Wg(n,r){var l=n[1],h=r[1],M=l|h,R=M<(g|m|C),U=h==C&&l==I||h==C&&l==O&&n[7].length<=r[8]||h==(C|O)&&r[7].length<=r[8]&&l==I;if(!(R||U))return n;h&g&&(n[2]=r[2],M|=l&g?0:L);var G=r[3];if(G){var Y=n[3];n[3]=Y?pf(Y,G,r[4]):G,n[4]=Y?er(n[3],p):r[4]}return G=r[5],G&&(Y=n[5],n[5]=Y?mf(Y,G,r[6]):G,n[6]=Y?er(n[5],p):r[6]),G=r[7],G&&(n[7]=G),h&C&&(n[8]=n[8]==null?r[8]:vn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=M,n}function Xg(n){var r=[];if(n!=null)for(var l in ze(n))r.push(l);return r}function qg(n){return Ua.call(n)}function If(n,r,l){return r=rn(r===e?n.length-1:r,0),function(){for(var h=arguments,M=-1,R=rn(h.length-r,0),U=Q(R);++M<R;)U[M]=h[r+M];M=-1;for(var G=Q(r+1);++M<r;)G[M]=h[M];return G[r]=l(U),Gn(n,this,G)}}function Uf(n,r){return r.length<2?n:Ar(n,ei(r,0,-1))}function Yg(n,r){for(var l=n.length,h=vn(r.length,l),M=Ln(n);h--;){var R=r[h];n[h]=Bi(R,l)?M[R]:e}return n}function Zl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Nf=Of(rf),js=l_||function(n,r){return pn.setTimeout(n,r)},$l=Of(_g);function Ff(n,r,l){var h=r+"";return $l(n,Bg(h,Kg(Ng(h),l)))}function Of(n){var r=0,l=0;return function(){var h=f_(),M=K-(h-l);if(l=h,M>0){if(++r>=q)return arguments[0]}else r=0;return n.apply(e,arguments)}}function ro(n,r){var l=-1,h=n.length,M=h-1;for(r=r===e?h:r;++l<r;){var R=Ll(l,M),U=n[R];n[R]=n[l],n[l]=U}return n.length=r,n}var Bf=kg(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(ai,function(l,h,M,R){r.push(M?R.replace(ba,"$1"):h||l)}),r});function Mi(n){if(typeof n=="string"||kn(n))return n;var r=n+"";return r=="0"&&1/n==-$?"-0":r}function Rr(n){if(n!=null){try{return Ia.call(n)}catch{}try{return n+""}catch{}}return""}function Kg(n,r){return Jn(He,function(l){var h="_."+l[0];r&l[1]&&!Ra(n,h)&&n.push(h)}),n.sort()}function zf(n){if(n instanceof ve)return n.clone();var r=new Qn(n.__wrapped__,n.__chain__);return r.__actions__=Ln(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Zg(n,r,l){(l?Rn(n,r,l):r===e)?r=1:r=rn(ae(r),0);var h=n==null?0:n.length;if(!h||r<1)return[];for(var M=0,R=0,U=Q(Ga(h/r));M<h;)U[R++]=ei(n,M,M+=r);return U}function $g(n){for(var r=-1,l=n==null?0:n.length,h=0,M=[];++r<l;){var R=n[r];R&&(M[h++]=R)}return M}function Jg(){var n=arguments.length;if(!n)return[];for(var r=Q(n-1),l=arguments[0],h=n;h--;)r[h-1]=arguments[h];return tr(Qt(l)?Ln(l):[l],mn(r,1))}var jg=he(function(n,r){return je(n)?qs(n,mn(r,1,je,!0)):[]}),Qg=he(function(n,r){var l=ni(r);return je(l)&&(l=e),je(n)?qs(n,mn(r,1,je,!0),qt(l,2)):[]}),t0=he(function(n,r){var l=ni(r);return je(l)&&(l=e),je(n)?qs(n,mn(r,1,je,!0),e,l):[]});function e0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:ae(r),ei(n,r<0?0:r,h)):[]}function n0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:ae(r),r=h-r,ei(n,0,r<0?0:r)):[]}function i0(n,r){return n&&n.length?$a(n,qt(r,3),!0,!0):[]}function r0(n,r){return n&&n.length?$a(n,qt(r,3),!0):[]}function s0(n,r,l,h){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&Rn(n,r,l)&&(l=0,h=M),J_(n,r,l,h)):[]}function Gf(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(h+M,0)),Ca(n,qt(r,3),M)}function Hf(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=h-1;return l!==e&&(M=ae(l),M=l<0?rn(h+M,0):vn(M,h-1)),Ca(n,qt(r,3),M,!0)}function Vf(n){var r=n==null?0:n.length;return r?mn(n,1):[]}function a0(n){var r=n==null?0:n.length;return r?mn(n,$):[]}function o0(n,r){var l=n==null?0:n.length;return l?(r=r===e?1:ae(r),mn(n,r)):[]}function l0(n){for(var r=-1,l=n==null?0:n.length,h={};++r<l;){var M=n[r];h[M[0]]=M[1]}return h}function kf(n){return n&&n.length?n[0]:e}function c0(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(h+M,0)),Yr(n,r,M)}function u0(n){var r=n==null?0:n.length;return r?ei(n,0,-1):[]}var h0=he(function(n){var r=Xe(n,Ol);return r.length&&r[0]===n[0]?wl(r):[]}),f0=he(function(n){var r=ni(n),l=Xe(n,Ol);return r===ni(l)?r=e:l.pop(),l.length&&l[0]===n[0]?wl(l,qt(r,2)):[]}),d0=he(function(n){var r=ni(n),l=Xe(n,Ol);return r=typeof r=="function"?r:e,r&&l.pop(),l.length&&l[0]===n[0]?wl(l,e,r):[]});function p0(n,r){return n==null?"":u_.call(n,r)}function ni(n){var r=n==null?0:n.length;return r?n[r-1]:e}function m0(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=h;return l!==e&&(M=ae(l),M=M<0?rn(h+M,0):vn(M,h-1)),r===r?Km(n,r,M):Ca(n,Eh,M,!0)}function _0(n,r){return n&&n.length?Qh(n,ae(r)):e}var g0=he(Wf);function Wf(n,r){return n&&n.length&&r&&r.length?Dl(n,r):n}function x0(n,r,l){return n&&n.length&&r&&r.length?Dl(n,r,qt(l,2)):n}function v0(n,r,l){return n&&n.length&&r&&r.length?Dl(n,r,e,l):n}var M0=Oi(function(n,r){var l=n==null?0:n.length,h=yl(n,r);return nf(n,Xe(r,function(M){return Bi(M,l)?+M:M}).sort(df)),h});function S0(n,r){var l=[];if(!(n&&n.length))return l;var h=-1,M=[],R=n.length;for(r=qt(r,3);++h<R;){var U=n[h];r(U,h,n)&&(l.push(U),M.push(h))}return nf(n,M),l}function Jl(n){return n==null?n:p_.call(n)}function E0(n,r,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&Rn(n,r,l)?(r=0,l=h):(r=r==null?0:ae(r),l=l===e?h:ae(l)),ei(n,r,l)):[]}function y0(n,r){return Za(n,r)}function T0(n,r,l){return Ul(n,r,qt(l,2))}function b0(n,r){var l=n==null?0:n.length;if(l){var h=Za(n,r);if(h<l&&ci(n[h],r))return h}return-1}function A0(n,r){return Za(n,r,!0)}function w0(n,r,l){return Ul(n,r,qt(l,2),!0)}function R0(n,r){var l=n==null?0:n.length;if(l){var h=Za(n,r,!0)-1;if(ci(n[h],r))return h}return-1}function C0(n){return n&&n.length?sf(n):[]}function P0(n,r){return n&&n.length?sf(n,qt(r,2)):[]}function D0(n){var r=n==null?0:n.length;return r?ei(n,1,r):[]}function L0(n,r,l){return n&&n.length?(r=l||r===e?1:ae(r),ei(n,0,r<0?0:r)):[]}function I0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:ae(r),r=h-r,ei(n,r<0?0:r,h)):[]}function U0(n,r){return n&&n.length?$a(n,qt(r,3),!1,!0):[]}function N0(n,r){return n&&n.length?$a(n,qt(r,3)):[]}var F0=he(function(n){return rr(mn(n,1,je,!0))}),O0=he(function(n){var r=ni(n);return je(r)&&(r=e),rr(mn(n,1,je,!0),qt(r,2))}),B0=he(function(n){var r=ni(n);return r=typeof r=="function"?r:e,rr(mn(n,1,je,!0),e,r)});function z0(n){return n&&n.length?rr(n):[]}function G0(n,r){return n&&n.length?rr(n,qt(r,2)):[]}function H0(n,r){return r=typeof r=="function"?r:e,n&&n.length?rr(n,e,r):[]}function jl(n){if(!(n&&n.length))return[];var r=0;return n=Qi(n,function(l){if(je(l))return r=rn(l.length,r),!0}),ml(r,function(l){return Xe(n,fl(l))})}function Xf(n,r){if(!(n&&n.length))return[];var l=jl(n);return r==null?l:Xe(l,function(h){return Gn(r,e,h)})}var V0=he(function(n,r){return je(n)?qs(n,r):[]}),k0=he(function(n){return Fl(Qi(n,je))}),W0=he(function(n){var r=ni(n);return je(r)&&(r=e),Fl(Qi(n,je),qt(r,2))}),X0=he(function(n){var r=ni(n);return r=typeof r=="function"?r:e,Fl(Qi(n,je),e,r)}),q0=he(jl);function Y0(n,r){return cf(n||[],r||[],Xs)}function K0(n,r){return cf(n||[],r||[],Zs)}var Z0=he(function(n){var r=n.length,l=r>1?n[r-1]:e;return l=typeof l=="function"?(n.pop(),l):e,Xf(n,l)});function qf(n){var r=b(n);return r.__chain__=!0,r}function $0(n,r){return r(n),n}function so(n,r){return r(n)}var J0=Oi(function(n){var r=n.length,l=r?n[0]:0,h=this.__wrapped__,M=function(R){return yl(R,n)};return r>1||this.__actions__.length||!(h instanceof ve)||!Bi(l)?this.thru(M):(h=h.slice(l,+l+(r?1:0)),h.__actions__.push({func:so,args:[M],thisArg:e}),new Qn(h,this.__chain__).thru(function(R){return r&&!R.length&&R.push(e),R}))});function j0(){return qf(this)}function Q0(){return new Qn(this.value(),this.__chain__)}function tx(){this.__values__===e&&(this.__values__=ad(this.value()));var n=this.__index__>=this.__values__.length,r=n?e:this.__values__[this.__index__++];return{done:n,value:r}}function ex(){return this}function nx(n){for(var r,l=this;l instanceof Wa;){var h=zf(l);h.__index__=0,h.__values__=e,r?M.__wrapped__=h:r=h;var M=h;l=l.__wrapped__}return M.__wrapped__=n,r}function ix(){var n=this.__wrapped__;if(n instanceof ve){var r=n;return this.__actions__.length&&(r=new ve(this)),r=r.reverse(),r.__actions__.push({func:so,args:[Jl],thisArg:e}),new Qn(r,this.__chain__)}return this.thru(Jl)}function rx(){return lf(this.__wrapped__,this.__actions__)}var sx=Ja(function(n,r,l){Ue.call(n,l)?++n[l]:Ni(n,l,1)});function ax(n,r,l){var h=Qt(n)?Mh:$_;return l&&Rn(n,r,l)&&(r=e),h(n,qt(r,3))}function ox(n,r){var l=Qt(n)?Qi:Wh;return l(n,qt(r,3))}var lx=vf(Gf),cx=vf(Hf);function ux(n,r){return mn(ao(n,r),1)}function hx(n,r){return mn(ao(n,r),$)}function fx(n,r,l){return l=l===e?1:ae(l),mn(ao(n,r),l)}function Yf(n,r){var l=Qt(n)?Jn:ir;return l(n,qt(r,3))}function Kf(n,r){var l=Qt(n)?Dm:kh;return l(n,qt(r,3))}var dx=Ja(function(n,r,l){Ue.call(n,l)?n[l].push(r):Ni(n,l,[r])});function px(n,r,l,h){n=In(n)?n:ss(n),l=l&&!h?ae(l):0;var M=n.length;return l<0&&(l=rn(M+l,0)),ho(n)?l<=M&&n.indexOf(r,l)>-1:!!M&&Yr(n,r,l)>-1}var mx=he(function(n,r,l){var h=-1,M=typeof r=="function",R=In(n)?Q(n.length):[];return ir(n,function(U){R[++h]=M?Gn(r,U,l):Ys(U,r,l)}),R}),_x=Ja(function(n,r,l){Ni(n,l,r)});function ao(n,r){var l=Qt(n)?Xe:$h;return l(n,qt(r,3))}function gx(n,r,l,h){return n==null?[]:(Qt(r)||(r=r==null?[]:[r]),l=h?e:l,Qt(l)||(l=l==null?[]:[l]),tf(n,r,l))}var xx=Ja(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function vx(n,r,l){var h=Qt(n)?ul:Th,M=arguments.length<3;return h(n,qt(r,4),l,M,ir)}function Mx(n,r,l){var h=Qt(n)?Lm:Th,M=arguments.length<3;return h(n,qt(r,4),l,M,kh)}function Sx(n,r){var l=Qt(n)?Qi:Wh;return l(n,co(qt(r,3)))}function Ex(n){var r=Qt(n)?zh:pg;return r(n)}function yx(n,r,l){(l?Rn(n,r,l):r===e)?r=1:r=ae(r);var h=Qt(n)?X_:mg;return h(n,r)}function Tx(n){var r=Qt(n)?q_:gg;return r(n)}function bx(n){if(n==null)return 0;if(In(n))return ho(n)?Zr(n):n.length;var r=Mn(n);return r==ne||r==fe?n.size:Cl(n).length}function Ax(n,r,l){var h=Qt(n)?hl:xg;return l&&Rn(n,r,l)&&(r=e),h(n,qt(r,3))}var wx=he(function(n,r){if(n==null)return[];var l=r.length;return l>1&&Rn(n,r[0],r[1])?r=[]:l>2&&Rn(r[0],r[1],r[2])&&(r=[r[0]]),tf(n,mn(r,1),[])}),oo=o_||function(){return pn.Date.now()};function Rx(n,r){if(typeof r!="function")throw new jn(c);return n=ae(n),function(){if(--n<1)return r.apply(this,arguments)}}function Zf(n,r,l){return r=l?e:r,r=n&&r==null?n.length:r,Fi(n,C,e,e,e,e,r)}function $f(n,r){var l;if(typeof r!="function")throw new jn(c);return n=ae(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=e),l}}var Ql=he(function(n,r,l){var h=g;if(l.length){var M=er(l,is(Ql));h|=F}return Fi(n,h,r,l,M)}),Jf=he(function(n,r,l){var h=g|m;if(l.length){var M=er(l,is(Jf));h|=F}return Fi(r,h,n,l,M)});function jf(n,r,l){r=l?e:r;var h=Fi(n,I,e,e,e,e,e,r);return h.placeholder=jf.placeholder,h}function Qf(n,r,l){r=l?e:r;var h=Fi(n,D,e,e,e,e,e,r);return h.placeholder=Qf.placeholder,h}function td(n,r,l){var h,M,R,U,G,Y,lt=0,ct=!1,ft=!1,bt=!0;if(typeof n!="function")throw new jn(c);r=ii(r)||0,Ye(l)&&(ct=!!l.leading,ft="maxWait"in l,R=ft?rn(ii(l.maxWait)||0,r):R,bt="trailing"in l?!!l.trailing:bt);function Gt(Qe){var ui=h,Hi=M;return h=M=e,lt=Qe,U=n.apply(Hi,ui),U}function Yt(Qe){return lt=Qe,G=js(me,r),ct?Gt(Qe):U}function ce(Qe){var ui=Qe-Y,Hi=Qe-lt,vd=r-ui;return ft?vn(vd,R-Hi):vd}function Kt(Qe){var ui=Qe-Y,Hi=Qe-lt;return Y===e||ui>=r||ui<0||ft&&Hi>=R}function me(){var Qe=oo();if(Kt(Qe))return Se(Qe);G=js(me,ce(Qe))}function Se(Qe){return G=e,bt&&h?Gt(Qe):(h=M=e,U)}function Wn(){G!==e&&uf(G),lt=0,h=Y=M=G=e}function Cn(){return G===e?U:Se(oo())}function Xn(){var Qe=oo(),ui=Kt(Qe);if(h=arguments,M=this,Y=Qe,ui){if(G===e)return Yt(Y);if(ft)return uf(G),G=js(me,r),Gt(Y)}return G===e&&(G=js(me,r)),U}return Xn.cancel=Wn,Xn.flush=Cn,Xn}var Cx=he(function(n,r){return Vh(n,1,r)}),Px=he(function(n,r,l){return Vh(n,ii(r)||0,l)});function Dx(n){return Fi(n,S)}function lo(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new jn(c);var l=function(){var h=arguments,M=r?r.apply(this,h):h[0],R=l.cache;if(R.has(M))return R.get(M);var U=n.apply(this,h);return l.cache=R.set(M,U)||R,U};return l.cache=new(lo.Cache||Ui),l}lo.Cache=Ui;function co(n){if(typeof n!="function")throw new jn(c);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Lx(n){return $f(2,n)}var Ix=vg(function(n,r){r=r.length==1&&Qt(r[0])?Xe(r[0],Hn(qt())):Xe(mn(r,1),Hn(qt()));var l=r.length;return he(function(h){for(var M=-1,R=vn(h.length,l);++M<R;)h[M]=r[M].call(this,h[M]);return Gn(n,this,h)})}),tc=he(function(n,r){var l=er(r,is(tc));return Fi(n,F,e,r,l)}),ed=he(function(n,r){var l=er(r,is(ed));return Fi(n,B,e,r,l)}),Ux=Oi(function(n,r){return Fi(n,O,e,e,e,r)});function Nx(n,r){if(typeof n!="function")throw new jn(c);return r=r===e?r:ae(r),he(n,r)}function Fx(n,r){if(typeof n!="function")throw new jn(c);return r=r==null?0:rn(ae(r),0),he(function(l){var h=l[r],M=ar(l,0,r);return h&&tr(M,h),Gn(n,this,M)})}function Ox(n,r,l){var h=!0,M=!0;if(typeof n!="function")throw new jn(c);return Ye(l)&&(h="leading"in l?!!l.leading:h,M="trailing"in l?!!l.trailing:M),td(n,r,{leading:h,maxWait:r,trailing:M})}function Bx(n){return Zf(n,1)}function zx(n,r){return tc(Bl(r),n)}function Gx(){if(!arguments.length)return[];var n=arguments[0];return Qt(n)?n:[n]}function Hx(n){return ti(n,v)}function Vx(n,r){return r=typeof r=="function"?r:e,ti(n,v,r)}function kx(n){return ti(n,_|v)}function Wx(n,r){return r=typeof r=="function"?r:e,ti(n,_|v,r)}function Xx(n,r){return r==null||Hh(n,r,un(r))}function ci(n,r){return n===r||n!==n&&r!==r}var qx=eo(Al),Yx=eo(function(n,r){return n>=r}),Cr=Yh((function(){return arguments})())?Yh:function(n){return $e(n)&&Ue.call(n,"callee")&&!Ih.call(n,"callee")},Qt=Q.isArray,Kx=ph?Hn(ph):ng;function In(n){return n!=null&&uo(n.length)&&!zi(n)}function je(n){return $e(n)&&In(n)}function Zx(n){return n===!0||n===!1||$e(n)&&wn(n)==Pt}var or=c_||hc,$x=mh?Hn(mh):ig;function Jx(n){return $e(n)&&n.nodeType===1&&!Qs(n)}function jx(n){if(n==null)return!0;if(In(n)&&(Qt(n)||typeof n=="string"||typeof n.splice=="function"||or(n)||rs(n)||Cr(n)))return!n.length;var r=Mn(n);if(r==ne||r==fe)return!n.size;if(Js(n))return!Cl(n).length;for(var l in n)if(Ue.call(n,l))return!1;return!0}function Qx(n,r){return Ks(n,r)}function tv(n,r,l){l=typeof l=="function"?l:e;var h=l?l(n,r):e;return h===e?Ks(n,r,e,l):!!h}function ec(n){if(!$e(n))return!1;var r=wn(n);return r==pe||r==Bt||typeof n.message=="string"&&typeof n.name=="string"&&!Qs(n)}function ev(n){return typeof n=="number"&&Nh(n)}function zi(n){if(!Ye(n))return!1;var r=wn(n);return r==qe||r==ge||r==dt||r==Ze}function nd(n){return typeof n=="number"&&n==ae(n)}function uo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=ot}function Ye(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function $e(n){return n!=null&&typeof n=="object"}var id=_h?Hn(_h):sg;function nv(n,r){return n===r||Rl(n,r,Xl(r))}function iv(n,r,l){return l=typeof l=="function"?l:e,Rl(n,r,Xl(r),l)}function rv(n){return rd(n)&&n!=+n}function sv(n){if(Vg(n))throw new jt(o);return Kh(n)}function av(n){return n===null}function ov(n){return n==null}function rd(n){return typeof n=="number"||$e(n)&&wn(n)==ye}function Qs(n){if(!$e(n)||wn(n)!=Le)return!1;var r=Oa(n);if(r===null)return!0;var l=Ue.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&Ia.call(l)==i_}var nc=gh?Hn(gh):ag;function lv(n){return nd(n)&&n>=-ot&&n<=ot}var sd=xh?Hn(xh):og;function ho(n){return typeof n=="string"||!Qt(n)&&$e(n)&&wn(n)==Ut}function kn(n){return typeof n=="symbol"||$e(n)&&wn(n)==P}var rs=vh?Hn(vh):lg;function cv(n){return n===e}function uv(n){return $e(n)&&Mn(n)==V}function hv(n){return $e(n)&&wn(n)==st}var fv=eo(Pl),dv=eo(function(n,r){return n<=r});function ad(n){if(!n)return[];if(In(n))return ho(n)?oi(n):Ln(n);if(Gs&&n[Gs])return Xm(n[Gs]());var r=Mn(n),l=r==ne?gl:r==fe?Pa:ss;return l(n)}function Gi(n){if(!n)return n===0?n:0;if(n=ii(n),n===$||n===-$){var r=n<0?-1:1;return r*wt}return n===n?n:0}function ae(n){var r=Gi(n),l=r%1;return r===r?l?r-l:r:0}function od(n){return n?br(ae(n),0,Et):0}function ii(n){if(typeof n=="number")return n;if(kn(n))return St;if(Ye(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ye(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=bh(n);var l=Aa.test(n);return l||nl.test(n)?Rm(n.slice(2),l?2:8):Wr.test(n)?St:+n}function ld(n){return vi(n,Un(n))}function pv(n){return n?br(ae(n),-ot,ot):n===0?n:0}function Ne(n){return n==null?"":Vn(n)}var mv=es(function(n,r){if(Js(r)||In(r)){vi(r,un(r),n);return}for(var l in r)Ue.call(r,l)&&Xs(n,l,r[l])}),cd=es(function(n,r){vi(r,Un(r),n)}),fo=es(function(n,r,l,h){vi(r,Un(r),n,h)}),_v=es(function(n,r,l,h){vi(r,un(r),n,h)}),gv=Oi(yl);function xv(n,r){var l=ts(n);return r==null?l:Gh(l,r)}var vv=he(function(n,r){n=ze(n);var l=-1,h=r.length,M=h>2?r[2]:e;for(M&&Rn(r[0],r[1],M)&&(h=1);++l<h;)for(var R=r[l],U=Un(R),G=-1,Y=U.length;++G<Y;){var lt=U[G],ct=n[lt];(ct===e||ci(ct,Jr[lt])&&!Ue.call(n,lt))&&(n[lt]=R[lt])}return n}),Mv=he(function(n){return n.push(e,Af),Gn(ud,e,n)});function Sv(n,r){return Sh(n,qt(r,3),xi)}function Ev(n,r){return Sh(n,qt(r,3),bl)}function yv(n,r){return n==null?n:Tl(n,qt(r,3),Un)}function Tv(n,r){return n==null?n:Xh(n,qt(r,3),Un)}function bv(n,r){return n&&xi(n,qt(r,3))}function Av(n,r){return n&&bl(n,qt(r,3))}function wv(n){return n==null?[]:Ya(n,un(n))}function Rv(n){return n==null?[]:Ya(n,Un(n))}function ic(n,r,l){var h=n==null?e:Ar(n,r);return h===e?l:h}function Cv(n,r){return n!=null&&Cf(n,r,j_)}function rc(n,r){return n!=null&&Cf(n,r,Q_)}var Pv=Sf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Ua.call(r)),n[r]=l},ac(Nn)),Dv=Sf(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Ua.call(r)),Ue.call(n,r)?n[r].push(l):n[r]=[l]},qt),Lv=he(Ys);function un(n){return In(n)?Bh(n):Cl(n)}function Un(n){return In(n)?Bh(n,!0):cg(n)}function Iv(n,r){var l={};return r=qt(r,3),xi(n,function(h,M,R){Ni(l,r(h,M,R),h)}),l}function Uv(n,r){var l={};return r=qt(r,3),xi(n,function(h,M,R){Ni(l,M,r(h,M,R))}),l}var Nv=es(function(n,r,l){Ka(n,r,l)}),ud=es(function(n,r,l,h){Ka(n,r,l,h)}),Fv=Oi(function(n,r){var l={};if(n==null)return l;var h=!1;r=Xe(r,function(R){return R=sr(R,n),h||(h=R.length>1),R}),vi(n,kl(n),l),h&&(l=ti(l,_|x|v,Pg));for(var M=r.length;M--;)Nl(l,r[M]);return l});function Ov(n,r){return hd(n,co(qt(r)))}var Bv=Oi(function(n,r){return n==null?{}:hg(n,r)});function hd(n,r){if(n==null)return{};var l=Xe(kl(n),function(h){return[h]});return r=qt(r),ef(n,l,function(h,M){return r(h,M[0])})}function zv(n,r,l){r=sr(r,n);var h=-1,M=r.length;for(M||(M=1,n=e);++h<M;){var R=n==null?e:n[Mi(r[h])];R===e&&(h=M,R=l),n=zi(R)?R.call(n):R}return n}function Gv(n,r,l){return n==null?n:Zs(n,r,l)}function Hv(n,r,l,h){return h=typeof h=="function"?h:e,n==null?n:Zs(n,r,l,h)}var fd=Tf(un),dd=Tf(Un);function Vv(n,r,l){var h=Qt(n),M=h||or(n)||rs(n);if(r=qt(r,4),l==null){var R=n&&n.constructor;M?l=h?new R:[]:Ye(n)?l=zi(R)?ts(Oa(n)):{}:l={}}return(M?Jn:xi)(n,function(U,G,Y){return r(l,U,G,Y)}),l}function kv(n,r){return n==null?!0:Nl(n,r)}function Wv(n,r,l){return n==null?n:of(n,r,Bl(l))}function Xv(n,r,l,h){return h=typeof h=="function"?h:e,n==null?n:of(n,r,Bl(l),h)}function ss(n){return n==null?[]:_l(n,un(n))}function qv(n){return n==null?[]:_l(n,Un(n))}function Yv(n,r,l){return l===e&&(l=r,r=e),l!==e&&(l=ii(l),l=l===l?l:0),r!==e&&(r=ii(r),r=r===r?r:0),br(ii(n),r,l)}function Kv(n,r,l){return r=Gi(r),l===e?(l=r,r=0):l=Gi(l),n=ii(n),tg(n,r,l)}function Zv(n,r,l){if(l&&typeof l!="boolean"&&Rn(n,r,l)&&(r=l=e),l===e&&(typeof r=="boolean"?(l=r,r=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&r===e?(n=0,r=1):(n=Gi(n),r===e?(r=n,n=0):r=Gi(r)),n>r){var h=n;n=r,r=h}if(l||n%1||r%1){var M=Fh();return vn(n+M*(r-n+wm("1e-"+((M+"").length-1))),r)}return Ll(n,r)}var $v=ns(function(n,r,l){return r=r.toLowerCase(),n+(l?pd(r):r)});function pd(n){return sc(Ne(n).toLowerCase())}function md(n){return n=Ne(n),n&&n.replace(rl,Gm).replace(gm,"")}function Jv(n,r,l){n=Ne(n),r=Vn(r);var h=n.length;l=l===e?h:br(ae(l),0,h);var M=l;return l-=r.length,l>=0&&n.slice(l,M)==r}function jv(n){return n=Ne(n),n&&ht.test(n)?n.replace(Ct,Hm):n}function Qv(n){return n=Ne(n),n&&Sa.test(n)?n.replace(Ns,"\\$&"):n}var tM=ns(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),eM=ns(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),nM=xf("toLowerCase");function iM(n,r,l){n=Ne(n),r=ae(r);var h=r?Zr(n):0;if(!r||h>=r)return n;var M=(r-h)/2;return to(Ha(M),l)+n+to(Ga(M),l)}function rM(n,r,l){n=Ne(n),r=ae(r);var h=r?Zr(n):0;return r&&h<r?n+to(r-h,l):n}function sM(n,r,l){n=Ne(n),r=ae(r);var h=r?Zr(n):0;return r&&h<r?to(r-h,l)+n:n}function aM(n,r,l){return l||r==null?r=0:r&&(r=+r),d_(Ne(n).replace(Mr,""),r||0)}function oM(n,r,l){return(l?Rn(n,r,l):r===e)?r=1:r=ae(r),Il(Ne(n),r)}function lM(){var n=arguments,r=Ne(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var cM=ns(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function uM(n,r,l){return l&&typeof l!="number"&&Rn(n,r,l)&&(r=l=e),l=l===e?Et:l>>>0,l?(n=Ne(n),n&&(typeof r=="string"||r!=null&&!nc(r))&&(r=Vn(r),!r&&Kr(n))?ar(oi(n),0,l):n.split(r,l)):[]}var hM=ns(function(n,r,l){return n+(l?" ":"")+sc(r)});function fM(n,r,l){return n=Ne(n),l=l==null?0:br(ae(l),0,n.length),r=Vn(r),n.slice(l,l+r.length)==r}function dM(n,r,l){var h=b.templateSettings;l&&Rn(n,r,l)&&(r=e),n=Ne(n),r=fo({},r,h,bf);var M=fo({},r.imports,h.imports,bf),R=un(M),U=_l(M,R),G,Y,lt=0,ct=r.interpolate||Xr,ft="__p += '",bt=xl((r.escape||Xr).source+"|"+ct.source+"|"+(ct===Fe?kr:Xr).source+"|"+(r.evaluate||Xr).source+"|$","g"),Gt="//# sourceURL="+(Ue.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Em+"]")+`
`;n.replace(bt,function(Kt,me,Se,Wn,Cn,Xn){return Se||(Se=Wn),ft+=n.slice(lt,Xn).replace(sl,Vm),me&&(G=!0,ft+=`' +
__e(`+me+`) +
'`),Cn&&(Y=!0,ft+=`';
`+Cn+`;
__p += '`),Se&&(ft+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),lt=Xn+Kt.length,Kt}),ft+=`';
`;var Yt=Ue.call(r,"variable")&&r.variable;if(!Yt)ft=`with (obj) {
`+ft+`
}
`;else if(Ta.test(Yt))throw new jt(u);ft=(Y?ft.replace(re,""):ft).replace(H,"$1").replace(Rt,"$1;"),ft="function("+(Yt||"obj")+`) {
`+(Yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(Y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var ce=gd(function(){return De(R,Gt+"return "+ft).apply(e,U)});if(ce.source=ft,ec(ce))throw ce;return ce}function pM(n){return Ne(n).toLowerCase()}function mM(n){return Ne(n).toUpperCase()}function _M(n,r,l){if(n=Ne(n),n&&(l||r===e))return bh(n);if(!n||!(r=Vn(r)))return n;var h=oi(n),M=oi(r),R=Ah(h,M),U=wh(h,M)+1;return ar(h,R,U).join("")}function gM(n,r,l){if(n=Ne(n),n&&(l||r===e))return n.slice(0,Ch(n)+1);if(!n||!(r=Vn(r)))return n;var h=oi(n),M=wh(h,oi(r))+1;return ar(h,0,M).join("")}function xM(n,r,l){if(n=Ne(n),n&&(l||r===e))return n.replace(Mr,"");if(!n||!(r=Vn(r)))return n;var h=oi(n),M=Ah(h,oi(r));return ar(h,M).join("")}function vM(n,r){var l=T,h=N;if(Ye(r)){var M="separator"in r?r.separator:M;l="length"in r?ae(r.length):l,h="omission"in r?Vn(r.omission):h}n=Ne(n);var R=n.length;if(Kr(n)){var U=oi(n);R=U.length}if(l>=R)return n;var G=l-Zr(h);if(G<1)return h;var Y=U?ar(U,0,G).join(""):n.slice(0,G);if(M===e)return Y+h;if(U&&(G+=Y.length-G),nc(M)){if(n.slice(G).search(M)){var lt,ct=Y;for(M.global||(M=xl(M.source,Ne(Os.exec(M))+"g")),M.lastIndex=0;lt=M.exec(ct);)var ft=lt.index;Y=Y.slice(0,ft===e?G:ft)}}else if(n.indexOf(Vn(M),G)!=G){var bt=Y.lastIndexOf(M);bt>-1&&(Y=Y.slice(0,bt))}return Y+h}function MM(n){return n=Ne(n),n&&mt.test(n)?n.replace(_t,Zm):n}var SM=ns(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),sc=xf("toUpperCase");function _d(n,r,l){return n=Ne(n),r=l?e:r,r===e?Wm(n)?jm(n):Nm(n):n.match(r)||[]}var gd=he(function(n,r){try{return Gn(n,e,r)}catch(l){return ec(l)?l:new jt(l)}}),EM=Oi(function(n,r){return Jn(r,function(l){l=Mi(l),Ni(n,l,Ql(n[l],n))}),n});function yM(n){var r=n==null?0:n.length,l=qt();return n=r?Xe(n,function(h){if(typeof h[1]!="function")throw new jn(c);return[l(h[0]),h[1]]}):[],he(function(h){for(var M=-1;++M<r;){var R=n[M];if(Gn(R[0],this,h))return Gn(R[1],this,h)}})}function TM(n){return Z_(ti(n,_))}function ac(n){return function(){return n}}function bM(n,r){return n==null||n!==n?r:n}var AM=Mf(),wM=Mf(!0);function Nn(n){return n}function oc(n){return Zh(typeof n=="function"?n:ti(n,_))}function RM(n){return Jh(ti(n,_))}function CM(n,r){return jh(n,ti(r,_))}var PM=he(function(n,r){return function(l){return Ys(l,n,r)}}),DM=he(function(n,r){return function(l){return Ys(n,l,r)}});function lc(n,r,l){var h=un(r),M=Ya(r,h);l==null&&!(Ye(r)&&(M.length||!h.length))&&(l=r,r=n,n=this,M=Ya(r,un(r)));var R=!(Ye(l)&&"chain"in l)||!!l.chain,U=zi(n);return Jn(M,function(G){var Y=r[G];n[G]=Y,U&&(n.prototype[G]=function(){var lt=this.__chain__;if(R||lt){var ct=n(this.__wrapped__),ft=ct.__actions__=Ln(this.__actions__);return ft.push({func:Y,args:arguments,thisArg:n}),ct.__chain__=lt,ct}return Y.apply(n,tr([this.value()],arguments))})}),n}function LM(){return pn._===this&&(pn._=r_),this}function cc(){}function IM(n){return n=ae(n),he(function(r){return Qh(r,n)})}var UM=Gl(Xe),NM=Gl(Mh),FM=Gl(hl);function xd(n){return Yl(n)?fl(Mi(n)):fg(n)}function OM(n){return function(r){return n==null?e:Ar(n,r)}}var BM=Ef(),zM=Ef(!0);function uc(){return[]}function hc(){return!1}function GM(){return{}}function HM(){return""}function VM(){return!0}function kM(n,r){if(n=ae(n),n<1||n>ot)return[];var l=Et,h=vn(n,Et);r=qt(r),n-=Et;for(var M=ml(h,r);++l<n;)r(l);return M}function WM(n){return Qt(n)?Xe(n,Mi):kn(n)?[n]:Ln(Bf(Ne(n)))}function XM(n){var r=++n_;return Ne(n)+r}var qM=Qa(function(n,r){return n+r},0),YM=Hl("ceil"),KM=Qa(function(n,r){return n/r},1),ZM=Hl("floor");function $M(n){return n&&n.length?qa(n,Nn,Al):e}function JM(n,r){return n&&n.length?qa(n,qt(r,2),Al):e}function jM(n){return yh(n,Nn)}function QM(n,r){return yh(n,qt(r,2))}function tS(n){return n&&n.length?qa(n,Nn,Pl):e}function eS(n,r){return n&&n.length?qa(n,qt(r,2),Pl):e}var nS=Qa(function(n,r){return n*r},1),iS=Hl("round"),rS=Qa(function(n,r){return n-r},0);function sS(n){return n&&n.length?pl(n,Nn):0}function aS(n,r){return n&&n.length?pl(n,qt(r,2)):0}return b.after=Rx,b.ary=Zf,b.assign=mv,b.assignIn=cd,b.assignInWith=fo,b.assignWith=_v,b.at=gv,b.before=$f,b.bind=Ql,b.bindAll=EM,b.bindKey=Jf,b.castArray=Gx,b.chain=qf,b.chunk=Zg,b.compact=$g,b.concat=Jg,b.cond=yM,b.conforms=TM,b.constant=ac,b.countBy=sx,b.create=xv,b.curry=jf,b.curryRight=Qf,b.debounce=td,b.defaults=vv,b.defaultsDeep=Mv,b.defer=Cx,b.delay=Px,b.difference=jg,b.differenceBy=Qg,b.differenceWith=t0,b.drop=e0,b.dropRight=n0,b.dropRightWhile=i0,b.dropWhile=r0,b.fill=s0,b.filter=ox,b.flatMap=ux,b.flatMapDeep=hx,b.flatMapDepth=fx,b.flatten=Vf,b.flattenDeep=a0,b.flattenDepth=o0,b.flip=Dx,b.flow=AM,b.flowRight=wM,b.fromPairs=l0,b.functions=wv,b.functionsIn=Rv,b.groupBy=dx,b.initial=u0,b.intersection=h0,b.intersectionBy=f0,b.intersectionWith=d0,b.invert=Pv,b.invertBy=Dv,b.invokeMap=mx,b.iteratee=oc,b.keyBy=_x,b.keys=un,b.keysIn=Un,b.map=ao,b.mapKeys=Iv,b.mapValues=Uv,b.matches=RM,b.matchesProperty=CM,b.memoize=lo,b.merge=Nv,b.mergeWith=ud,b.method=PM,b.methodOf=DM,b.mixin=lc,b.negate=co,b.nthArg=IM,b.omit=Fv,b.omitBy=Ov,b.once=Lx,b.orderBy=gx,b.over=UM,b.overArgs=Ix,b.overEvery=NM,b.overSome=FM,b.partial=tc,b.partialRight=ed,b.partition=xx,b.pick=Bv,b.pickBy=hd,b.property=xd,b.propertyOf=OM,b.pull=g0,b.pullAll=Wf,b.pullAllBy=x0,b.pullAllWith=v0,b.pullAt=M0,b.range=BM,b.rangeRight=zM,b.rearg=Ux,b.reject=Sx,b.remove=S0,b.rest=Nx,b.reverse=Jl,b.sampleSize=yx,b.set=Gv,b.setWith=Hv,b.shuffle=Tx,b.slice=E0,b.sortBy=wx,b.sortedUniq=C0,b.sortedUniqBy=P0,b.split=uM,b.spread=Fx,b.tail=D0,b.take=L0,b.takeRight=I0,b.takeRightWhile=U0,b.takeWhile=N0,b.tap=$0,b.throttle=Ox,b.thru=so,b.toArray=ad,b.toPairs=fd,b.toPairsIn=dd,b.toPath=WM,b.toPlainObject=ld,b.transform=Vv,b.unary=Bx,b.union=F0,b.unionBy=O0,b.unionWith=B0,b.uniq=z0,b.uniqBy=G0,b.uniqWith=H0,b.unset=kv,b.unzip=jl,b.unzipWith=Xf,b.update=Wv,b.updateWith=Xv,b.values=ss,b.valuesIn=qv,b.without=V0,b.words=_d,b.wrap=zx,b.xor=k0,b.xorBy=W0,b.xorWith=X0,b.zip=q0,b.zipObject=Y0,b.zipObjectDeep=K0,b.zipWith=Z0,b.entries=fd,b.entriesIn=dd,b.extend=cd,b.extendWith=fo,lc(b,b),b.add=qM,b.attempt=gd,b.camelCase=$v,b.capitalize=pd,b.ceil=YM,b.clamp=Yv,b.clone=Hx,b.cloneDeep=kx,b.cloneDeepWith=Wx,b.cloneWith=Vx,b.conformsTo=Xx,b.deburr=md,b.defaultTo=bM,b.divide=KM,b.endsWith=Jv,b.eq=ci,b.escape=jv,b.escapeRegExp=Qv,b.every=ax,b.find=lx,b.findIndex=Gf,b.findKey=Sv,b.findLast=cx,b.findLastIndex=Hf,b.findLastKey=Ev,b.floor=ZM,b.forEach=Yf,b.forEachRight=Kf,b.forIn=yv,b.forInRight=Tv,b.forOwn=bv,b.forOwnRight=Av,b.get=ic,b.gt=qx,b.gte=Yx,b.has=Cv,b.hasIn=rc,b.head=kf,b.identity=Nn,b.includes=px,b.indexOf=c0,b.inRange=Kv,b.invoke=Lv,b.isArguments=Cr,b.isArray=Qt,b.isArrayBuffer=Kx,b.isArrayLike=In,b.isArrayLikeObject=je,b.isBoolean=Zx,b.isBuffer=or,b.isDate=$x,b.isElement=Jx,b.isEmpty=jx,b.isEqual=Qx,b.isEqualWith=tv,b.isError=ec,b.isFinite=ev,b.isFunction=zi,b.isInteger=nd,b.isLength=uo,b.isMap=id,b.isMatch=nv,b.isMatchWith=iv,b.isNaN=rv,b.isNative=sv,b.isNil=ov,b.isNull=av,b.isNumber=rd,b.isObject=Ye,b.isObjectLike=$e,b.isPlainObject=Qs,b.isRegExp=nc,b.isSafeInteger=lv,b.isSet=sd,b.isString=ho,b.isSymbol=kn,b.isTypedArray=rs,b.isUndefined=cv,b.isWeakMap=uv,b.isWeakSet=hv,b.join=p0,b.kebabCase=tM,b.last=ni,b.lastIndexOf=m0,b.lowerCase=eM,b.lowerFirst=nM,b.lt=fv,b.lte=dv,b.max=$M,b.maxBy=JM,b.mean=jM,b.meanBy=QM,b.min=tS,b.minBy=eS,b.stubArray=uc,b.stubFalse=hc,b.stubObject=GM,b.stubString=HM,b.stubTrue=VM,b.multiply=nS,b.nth=_0,b.noConflict=LM,b.noop=cc,b.now=oo,b.pad=iM,b.padEnd=rM,b.padStart=sM,b.parseInt=aM,b.random=Zv,b.reduce=vx,b.reduceRight=Mx,b.repeat=oM,b.replace=lM,b.result=zv,b.round=iS,b.runInContext=k,b.sample=Ex,b.size=bx,b.snakeCase=cM,b.some=Ax,b.sortedIndex=y0,b.sortedIndexBy=T0,b.sortedIndexOf=b0,b.sortedLastIndex=A0,b.sortedLastIndexBy=w0,b.sortedLastIndexOf=R0,b.startCase=hM,b.startsWith=fM,b.subtract=rS,b.sum=sS,b.sumBy=aS,b.template=dM,b.times=kM,b.toFinite=Gi,b.toInteger=ae,b.toLength=od,b.toLower=pM,b.toNumber=ii,b.toSafeInteger=pv,b.toString=Ne,b.toUpper=mM,b.trim=_M,b.trimEnd=gM,b.trimStart=xM,b.truncate=vM,b.unescape=MM,b.uniqueId=XM,b.upperCase=SM,b.upperFirst=sc,b.each=Yf,b.eachRight=Kf,b.first=kf,lc(b,(function(){var n={};return xi(b,function(r,l){Ue.call(b.prototype,l)||(n[l]=r)}),n})(),{chain:!1}),b.VERSION=i,Jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),Jn(["drop","take"],function(n,r){ve.prototype[n]=function(l){l=l===e?1:rn(ae(l),0);var h=this.__filtered__&&!r?new ve(this):this.clone();return h.__filtered__?h.__takeCount__=vn(l,h.__takeCount__):h.__views__.push({size:vn(l,Et),type:n+(h.__dir__<0?"Right":"")}),h},ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Jn(["filter","map","takeWhile"],function(n,r){var l=r+1,h=l==nt||l==tt;ve.prototype[n]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:qt(M,3),type:l}),R.__filtered__=R.__filtered__||h,R}}),Jn(["head","last"],function(n,r){var l="take"+(r?"Right":"");ve.prototype[n]=function(){return this[l](1).value()[0]}}),Jn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");ve.prototype[n]=function(){return this.__filtered__?new ve(this):this[l](1)}}),ve.prototype.compact=function(){return this.filter(Nn)},ve.prototype.find=function(n){return this.filter(n).head()},ve.prototype.findLast=function(n){return this.reverse().find(n)},ve.prototype.invokeMap=he(function(n,r){return typeof n=="function"?new ve(this):this.map(function(l){return Ys(l,n,r)})}),ve.prototype.reject=function(n){return this.filter(co(qt(n)))},ve.prototype.slice=function(n,r){n=ae(n);var l=this;return l.__filtered__&&(n>0||r<0)?new ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==e&&(r=ae(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ve.prototype.toArray=function(){return this.take(Et)},xi(ve.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),h=/^(?:head|last)$/.test(r),M=b[h?"take"+(r=="last"?"Right":""):r],R=h||/^find/.test(r);M&&(b.prototype[r]=function(){var U=this.__wrapped__,G=h?[1]:arguments,Y=U instanceof ve,lt=G[0],ct=Y||Qt(U),ft=function(me){var Se=M.apply(b,tr([me],G));return h&&bt?Se[0]:Se};ct&&l&&typeof lt=="function"&&lt.length!=1&&(Y=ct=!1);var bt=this.__chain__,Gt=!!this.__actions__.length,Yt=R&&!bt,ce=Y&&!Gt;if(!R&&ct){U=ce?U:new ve(this);var Kt=n.apply(U,G);return Kt.__actions__.push({func:so,args:[ft],thisArg:e}),new Qn(Kt,bt)}return Yt&&ce?n.apply(this,G):(Kt=this.thru(ft),Yt?h?Kt.value()[0]:Kt.value():Kt)})}),Jn(["pop","push","shift","sort","splice","unshift"],function(n){var r=Da[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var M=arguments;if(h&&!this.__chain__){var R=this.value();return r.apply(Qt(R)?R:[],M)}return this[l](function(U){return r.apply(Qt(U)?U:[],M)})}}),xi(ve.prototype,function(n,r){var l=b[r];if(l){var h=l.name+"";Ue.call(Qr,h)||(Qr[h]=[]),Qr[h].push({name:r,func:l})}}),Qr[ja(e,m).name]=[{name:"wrapper",func:e}],ve.prototype.clone=M_,ve.prototype.reverse=S_,ve.prototype.value=E_,b.prototype.at=J0,b.prototype.chain=j0,b.prototype.commit=Q0,b.prototype.next=tx,b.prototype.plant=nx,b.prototype.reverse=ix,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=rx,b.prototype.first=b.prototype.head,Gs&&(b.prototype[Gs]=ex),b}),$r=Qm();Sr?((Sr.exports=$r)._=$r,ol._=$r):pn._=$r}).call(ow)})(fa,fa.exports)),fa.exports}var cw=lw();const xr=cm(cw);function uw(s,t,e){return s.position.distanceTo(t.position)<s.radius+t.radius+e}function hw(s,t){const e=xr.sample(s),i=new X(xr.random(-.5,.5),xr.random(-.5,.5),xr.random(-.5,.5)).normalize().multiplyScalar(e.radius).addScalar(t+.1);return e.position.clone().add(i)}function fw(){const e=[];for(;e.length<10;){const a=xr.random(20,100),o=new X(xr.random(-de.maxPlanetOffset,de.maxPlanetOffset),xr.random(-de.maxPlanetOffset,de.maxPlanetOffset),xr.random(-de.maxPlanetOffset,de.maxPlanetOffset)),c={radius:a,position:o,color:um()};e.some(u=>uw(c,u,20))||e.push(c)}return{planets:e,initialBallPosition:hw(e,de.ball.radius)}}class dw{constructor(){this.renderer=new R1({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new fE,this.cameras={aim:new Y1(this.renderer.domElement),landedBallTopDown:new Z1(this.renderer.domElement),staticManualOrbit:new fn(de.camera.fov,innerWidth/innerHeight,de.camera.near,de.camera.far),autoRotatingOrbit:new fn(de.camera.fov,innerWidth/innerHeight,de.camera.near,de.camera.far),distant:new K1},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new k1(this.scene),this.clock=new PE,this.level=fw(),this.balls=[],this.stats=da(),this.setup={level:()=>{this.level.planets.forEach(e=>{const i=new om({radius:e.radius,color:e.color});i.position.set(e.position.x,e.position.y,e.position.z),this.scene.add(i)});const t=new ew;t.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(t),this.scene.add(t)},light:()=>{const t=new jp(16777215,5e7);t.position.set(0,100,5e3),this.scene.add(t)},sound:()=>{this.addListeners(()=>Vu.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new X),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new X),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>this.scene.add(new nw),orbitControls:()=>{new am(this.cameras.staticManualOrbit,this.renderer.domElement)},listeners:()=>{de.simulationMode||addEventListener("keypress",t=>{if(t.key===" "){const e=this.getCurrentBall();if(e.landedPlanet){const i=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone());lm(e,i),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.onNewAnimationFrame(),de.showFPSCounter&&document.body.appendChild(this.stats.dom)}addListeners(t,e){const i=["mousedown","keypress","touchstart"],a=()=>{t(),e&&i.forEach(o=>removeEventListener(o,a))};i.forEach(o=>addEventListener(o,a))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight)}updateCameras(){const t=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const e=2e3,i=64e-6;this.cameras.autoRotatingOrbit.position.set(Math.sin(t*i)*e,Math.abs(Math.cos(t*i)*e),Math.cos(t*i)*e),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(t){const e=this.eGetter.getPlanets();this.bounceBallsOffPlanets(e),this.gravitateBalls(t),this.balls.forEach(i=>i.tick())}bounceBallsOffPlanets(t){t.forEach(e=>{this.balls.forEach(i=>{if(iw(e,i)){const a=sw({staticSphere:e,movingSphere:i});de.simulationMode&&console.log("## simulation","hit",i.position.toArray().map(c=>Math.floor(c)).toString());const o=Math.min(1,i.velocity.length()/5);Vu.ballHit(o),i.velocity=a,aw(i,e),i.velocity.length()<.2&&!i.landedPlanet&&this.stopBall(i,e)}})})}gravitateBalls(t){this.eGetter.getPlanets().forEach(i=>{this.balls.forEach(a=>{a.addVelocity(rw({puller:i,pulled:a,timeDelta:t}))})})}stopBall(t,e){t.landedPlanet=e,de.simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(t),this.cameras.aim.reset(t),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(t=>this.scene.remove(t)),this.balls.forEach(t=>{this.scene.add(t.createTrace())})}onNewAnimationFrame(){const t=this.clock.getDelta();this.renderer.render(this.scene,this.activeCamera),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(t),this.updateBallTrace(),q1.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new dw;
