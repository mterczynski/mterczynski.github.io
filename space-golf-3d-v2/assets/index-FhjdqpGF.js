(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Kd="182",$s={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},w1=0,$_=1,C1=2,Al=1,R1=2,Oa=3,Ur=0,en=1,mi=2,_i=0,Zs=1,Ul=2,Z_=3,J_=4,P1=5,ns=100,D1=101,L1=102,I1=103,U1=104,O1=200,N1=201,F1=202,B1=203,Yf=204,Kf=205,k1=206,z1=207,G1=208,H1=209,V1=210,W1=211,q1=212,X1=213,Y1=214,jf=0,$f=1,Zf=2,Qs=3,Jf=4,Qf=5,ed=6,td=7,jd=0,K1=1,j1=2,Gi=0,$d=1,Zd=2,Jd=3,Qd=4,ep=5,tp=6,np=7,gx=300,as=301,ea=302,nd=303,id=304,Vl=306,rd=1e3,ar=1001,sd=1002,Tn=1003,$1=1004,$o=1005,Un=1006,fu=1007,rs=1008,ni=1009,vx=1010,xx=1011,Xa=1012,ip=1013,Hi=1014,ki=1015,In=1016,rp=1017,sp=1018,Ya=1020,Sx=35902,yx=35899,bx=1021,Mx=1022,Ci=1023,cr=1026,ss=1027,Ex=1028,ap=1029,ta=1030,op=1031,lp=1033,wl=33776,Cl=33777,Rl=33778,Pl=33779,ad=35840,od=35841,ld=35842,cd=35843,ud=36196,hd=37492,fd=37496,dd=37488,pd=37489,md=37490,_d=37491,gd=37808,vd=37809,xd=37810,Sd=37811,yd=37812,bd=37813,Md=37814,Ed=37815,Td=37816,Ad=37817,wd=37818,Cd=37819,Rd=37820,Pd=37821,Dd=36492,Ld=36494,Id=36495,Ud=36283,Od=36284,Nd=36285,Fd=36286,Z1=3200,J1=3201,Tx=0,Q1=1,Cr="",pi="srgb",na="srgb-linear",Ol="linear",Bt="srgb",Rs=7680,Q_=519,ew=512,tw=513,nw=514,cp=515,iw=516,rw=517,up=518,sw=519,eg=35044,tg="300 es",zi=2e3,Nl=2001;function Ax(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function aw(){const i=Ka("canvas");return i.style.display="block",i}const ng={};function ig(...i){const e="THREE."+i.shift();console.log(e,...i)}function it(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Dt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ja(...i){const e=i.join(" ");e in ng||(ng[e]=!0,it(...i))}function ow(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=Math.PI/180,Bd=180/Math.PI;function Ja(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function lw(i,e){return(i%e+e)%e}function du(i,e,t){return(1-t)*i+t*e}function Ta(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cw={DEG2RAD:Dl};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let h=n[s+0],f=n[s+1],m=n[s+2],p=n[s+3],g=o[l+0],x=o[l+1],M=o[l+2],E=o[l+3];if(u<=0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=p;return}if(u>=1){e[t+0]=g,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(p!==E||h!==g||f!==x||m!==M){let v=h*g+f*x+m*M+p*E;v<0&&(g=-g,x=-x,M=-M,E=-E,v=-v);let _=1-u;if(v<.9995){const D=Math.acos(v),U=Math.sin(D);_=Math.sin(_*D)/U,u=Math.sin(u*D)/U,h=h*_+g*u,f=f*_+x*u,m=m*_+M*u,p=p*_+E*u}else{h=h*_+g*u,f=f*_+x*u,m=m*_+M*u,p=p*_+E*u;const D=1/Math.sqrt(h*h+f*f+m*m+p*p);h*=D,f*=D,m*=D,p*=D}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],h=n[s+1],f=n[s+2],m=n[s+3],p=o[l],g=o[l+1],x=o[l+2],M=o[l+3];return e[t]=u*M+m*p+h*x-f*g,e[t+1]=h*M+m*g+f*p-u*x,e[t+2]=f*M+m*x+u*g-h*p,e[t+3]=m*M-u*p-h*g-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,h=Math.sin,f=u(n/2),m=u(s/2),p=u(o/2),g=h(n/2),x=h(s/2),M=h(o/2);switch(l){case"XYZ":this._x=g*m*p+f*x*M,this._y=f*x*p-g*m*M,this._z=f*m*M+g*x*p,this._w=f*m*p-g*x*M;break;case"YXZ":this._x=g*m*p+f*x*M,this._y=f*x*p-g*m*M,this._z=f*m*M-g*x*p,this._w=f*m*p+g*x*M;break;case"ZXY":this._x=g*m*p-f*x*M,this._y=f*x*p+g*m*M,this._z=f*m*M+g*x*p,this._w=f*m*p-g*x*M;break;case"ZYX":this._x=g*m*p-f*x*M,this._y=f*x*p+g*m*M,this._z=f*m*M-g*x*p,this._w=f*m*p+g*x*M;break;case"YZX":this._x=g*m*p+f*x*M,this._y=f*x*p+g*m*M,this._z=f*m*M-g*x*p,this._w=f*m*p-g*x*M;break;case"XZY":this._x=g*m*p-f*x*M,this._y=f*x*p-g*m*M,this._z=f*m*M+g*x*p,this._w=f*m*p+g*x*M;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],h=t[9],f=t[2],m=t[6],p=t[10],g=n+u+p;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-f)*x,this._z=(l-s)*x}else if(n>u&&n>p){const x=2*Math.sqrt(1+n-u-p);this._w=(m-h)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+f)/x}else if(u>p){const x=2*Math.sqrt(1+u-n-p);this._w=(o-f)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+p-n-u);this._w=(l-s)/x,this._x=(o+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+l*u+s*f-o*h,this._y=s*m+l*h+o*u-n*f,this._z=o*m+l*f+n*h-s*u,this._w=l*m-n*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(n=-n,s=-s,o=-o,l=-l,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,h=e.w,f=2*(l*s-u*n),m=2*(u*t-o*s),p=2*(o*n-l*t);return this.x=t+h*f+l*p-u*m,this.y=n+h*m+u*f-o*p,this.z=s+h*p+o*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*l-n*h,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new G,rg=new os;class mt{constructor(e,t,n,s,o,l,u,h,f){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,h,f)}set(e,t,n,s,o,l,u,h,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=o,m[5]=h,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],h=n[6],f=n[1],m=n[4],p=n[7],g=n[2],x=n[5],M=n[8],E=s[0],v=s[3],_=s[6],D=s[1],U=s[4],I=s[7],O=s[2],B=s[5],C=s[8];return o[0]=l*E+u*D+h*O,o[3]=l*v+u*U+h*B,o[6]=l*_+u*I+h*C,o[1]=f*E+m*D+p*O,o[4]=f*v+m*U+p*B,o[7]=f*_+m*I+p*C,o[2]=g*E+x*D+M*O,o[5]=g*v+x*U+M*B,o[8]=g*_+x*I+M*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],m=e[8];return t*l*m-t*u*f-n*o*m+n*u*h+s*o*f-s*l*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],m=e[8],p=m*l-u*f,g=u*h-m*o,x=f*o-l*h,M=t*p+n*g+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=p*E,e[1]=(s*f-m*n)*E,e[2]=(u*n-s*l)*E,e[3]=g*E,e[4]=(m*t-s*h)*E,e[5]=(s*o-u*t)*E,e[6]=x*E,e[7]=(n*h-f*t)*E,e[8]=(l*t-n*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*l+f*u)+l+e,-s*f,s*h,-s*(-f*l+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(mu.makeScale(e,t)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new mt,sg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uw(){const i={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Bt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Bt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cr?Ol:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[na]:{primaries:e,whitePoint:n,transfer:Ol,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:sg,fromXYZ:ag,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),i}const Ct=uw();function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ps;class hw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Ka("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=lr(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fw=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(_u(s[l].image)):o.push(_u(s[l]))}else o=_u(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function _u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hw.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let dw=0;const gu=new G;class On extends ls{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,n=ar,s=ar,o=Un,l=rs,u=Ci,h=ni,f=On.DEFAULT_ANISOTROPY,m=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Ja(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=gx;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,s=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,f=h[0],m=h[4],p=h[8],g=h[1],x=h[5],M=h[9],E=h[2],v=h[6],_=h[10];if(Math.abs(m-g)<.01&&Math.abs(p-E)<.01&&Math.abs(M-v)<.01){if(Math.abs(m+g)<.1&&Math.abs(p+E)<.1&&Math.abs(M+v)<.1&&Math.abs(f+x+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(f+1)/2,I=(x+1)/2,O=(_+1)/2,B=(m+g)/4,C=(p+E)/4,F=(M+v)/4;return U>I&&U>O?U<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(U),s=B/n,o=C/n):I>O?I<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(I),n=B/s,o=F/s):O<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),n=C/o,s=F/o),this.set(n,s,o,t),this}let D=Math.sqrt((v-M)*(v-M)+(p-E)*(p-E)+(g-m)*(g-m));return Math.abs(D)<.001&&(D=1),this.x=(v-M)/D,this.y=(p-E)/D,this.z=(g-m)/D,this.w=Math.acos((f+x+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pw extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const s={width:e,height:t,depth:n.depth},o=new On(s);this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends pw{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wx extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mw extends On{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,bi):bi.fromBufferAttribute(o,l),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),Jo.subVectors(this.max,Aa),Ds.subVectors(e.a,Aa),Ls.subVectors(e.b,Aa),Is.subVectors(e.c,Aa),Sr.subVectors(Ls,Ds),yr.subVectors(Is,Ls),$r.subVectors(Ds,Is);let t=[0,-Sr.z,Sr.y,0,-yr.z,yr.y,0,-$r.z,$r.y,Sr.z,0,-Sr.x,yr.z,0,-yr.x,$r.z,0,-$r.x,-Sr.y,Sr.x,0,-yr.y,yr.x,0,-$r.y,$r.x,0];return!vu(t,Ds,Ls,Is,Jo)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,Ds,Ls,Is,Jo))?!1:(Qo.crossVectors(Sr,yr),t=[Qo.x,Qo.y,Qo.z],vu(t,Ds,Ls,Is,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new G,new G,new G,new G,new G,new G,new G,new G],bi=new G,Zo=new Qa,Ds=new G,Ls=new G,Is=new G,Sr=new G,yr=new G,$r=new G,Aa=new G,Jo=new G,Qo=new G,Zr=new G;function vu(i,e,t,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){Zr.fromArray(i,o);const u=s.x*Math.abs(Zr.x)+s.y*Math.abs(Zr.y)+s.z*Math.abs(Zr.z),h=e.dot(Zr),f=t.dot(Zr),m=n.dot(Zr);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>u)return!1}return!0}const _w=new Qa,wa=new G,xu=new G;class eo{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_w.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(xu)),this.expandByPoint(wa.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const nr=new G,Su=new G,el=new G,br=new G,yu=new G,tl=new G,bu=new G;class Wl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Su.copy(e).add(t).multiplyScalar(.5),el.copy(t).sub(e).normalize(),br.copy(this.origin).sub(Su);const o=e.distanceTo(t)*.5,l=-this.direction.dot(el),u=br.dot(this.direction),h=-br.dot(el),f=br.lengthSq(),m=Math.abs(1-l*l);let p,g,x,M;if(m>0)if(p=l*h-u,g=l*u-h,M=o*m,p>=0)if(g>=-M)if(g<=M){const E=1/m;p*=E,g*=E,x=p*(p+l*g+2*u)+g*(l*p+g+2*h)+f}else g=o,p=Math.max(0,-(l*g+u)),x=-p*p+g*(g+2*h)+f;else g=-o,p=Math.max(0,-(l*g+u)),x=-p*p+g*(g+2*h)+f;else g<=-M?(p=Math.max(0,-(-l*o+u)),g=p>0?-o:Math.min(Math.max(-o,-h),o),x=-p*p+g*(g+2*h)+f):g<=M?(p=0,g=Math.min(Math.max(-o,-h),o),x=g*(g+2*h)+f):(p=Math.max(0,-(l*o+u)),g=p>0?o:Math.min(Math.max(-o,-h),o),x=-p*p+g*(g+2*h)+f);else g=l>0?-o:o,p=Math.max(0,-(l*g+u)),x=-p*p+g*(g+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Su).addScaledVector(el,g),x}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),s=nr.dot(nr)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,h=n+l;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,h;const f=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,s=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,s=(e.min.x-g.x)*f),m>=0?(o=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),p>=0?(u=(e.min.z-g.z)*p,h=(e.max.z-g.z)*p):(u=(e.max.z-g.z)*p,h=(e.min.z-g.z)*p),n>h||u>s)||((u>n||n!==n)&&(n=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,s,o){yu.subVectors(t,e),tl.subVectors(n,e),bu.crossVectors(yu,tl);let l=this.direction.dot(bu),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;br.subVectors(this.origin,e);const h=u*this.direction.dot(tl.crossVectors(br,tl));if(h<0)return null;const f=u*this.direction.dot(yu.cross(br));if(f<0||h+f>l)return null;const m=-u*br.dot(bu);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,n,s,o,l,u,h,f,m,p,g,x,M,E,v){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,h,f,m,p,g,x,M,E,v)}set(e,t,n,s,o,l,u,h,f,m,p,g,x,M,E,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=l,_[9]=u,_[13]=h,_[2]=f,_[6]=m,_[10]=p,_[14]=g,_[3]=x,_[7]=M,_[11]=E,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),o=1/Us.setFromMatrixColumn(e,1).length(),l=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),h=Math.cos(s),f=Math.sin(s),m=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const g=l*m,x=l*p,M=u*m,E=u*p;t[0]=h*m,t[4]=-h*p,t[8]=f,t[1]=x+M*f,t[5]=g-E*f,t[9]=-u*h,t[2]=E-g*f,t[6]=M+x*f,t[10]=l*h}else if(e.order==="YXZ"){const g=h*m,x=h*p,M=f*m,E=f*p;t[0]=g+E*u,t[4]=M*u-x,t[8]=l*f,t[1]=l*p,t[5]=l*m,t[9]=-u,t[2]=x*u-M,t[6]=E+g*u,t[10]=l*h}else if(e.order==="ZXY"){const g=h*m,x=h*p,M=f*m,E=f*p;t[0]=g-E*u,t[4]=-l*p,t[8]=M+x*u,t[1]=x+M*u,t[5]=l*m,t[9]=E-g*u,t[2]=-l*f,t[6]=u,t[10]=l*h}else if(e.order==="ZYX"){const g=l*m,x=l*p,M=u*m,E=u*p;t[0]=h*m,t[4]=M*f-x,t[8]=g*f+E,t[1]=h*p,t[5]=E*f+g,t[9]=x*f-M,t[2]=-f,t[6]=u*h,t[10]=l*h}else if(e.order==="YZX"){const g=l*h,x=l*f,M=u*h,E=u*f;t[0]=h*m,t[4]=E-g*p,t[8]=M*p+x,t[1]=p,t[5]=l*m,t[9]=-u*m,t[2]=-f*m,t[6]=x*p+M,t[10]=g-E*p}else if(e.order==="XZY"){const g=l*h,x=l*f,M=u*h,E=u*f;t[0]=h*m,t[4]=-p,t[8]=f*m,t[1]=g*p+E,t[5]=l*m,t[9]=x*p-M,t[2]=M*p-x,t[6]=u*m,t[10]=E*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gw,e,vw)}lookAt(e,t,n){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Mr.crossVectors(n,ei),Mr.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Mr.crossVectors(n,ei)),Mr.normalize(),nl.crossVectors(ei,Mr),s[0]=Mr.x,s[4]=nl.x,s[8]=ei.x,s[1]=Mr.y,s[5]=nl.y,s[9]=ei.y,s[2]=Mr.z,s[6]=nl.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],h=n[8],f=n[12],m=n[1],p=n[5],g=n[9],x=n[13],M=n[2],E=n[6],v=n[10],_=n[14],D=n[3],U=n[7],I=n[11],O=n[15],B=s[0],C=s[4],F=s[8],S=s[12],T=s[1],L=s[5],W=s[9],X=s[13],ie=s[2],re=s[6],ee=s[10],$=s[14],oe=s[3],Ae=s[7],ye=s[11],Me=s[15];return o[0]=l*B+u*T+h*ie+f*oe,o[4]=l*C+u*L+h*re+f*Ae,o[8]=l*F+u*W+h*ee+f*ye,o[12]=l*S+u*X+h*$+f*Me,o[1]=m*B+p*T+g*ie+x*oe,o[5]=m*C+p*L+g*re+x*Ae,o[9]=m*F+p*W+g*ee+x*ye,o[13]=m*S+p*X+g*$+x*Me,o[2]=M*B+E*T+v*ie+_*oe,o[6]=M*C+E*L+v*re+_*Ae,o[10]=M*F+E*W+v*ee+_*ye,o[14]=M*S+E*X+v*$+_*Me,o[3]=D*B+U*T+I*ie+O*oe,o[7]=D*C+U*L+I*re+O*Ae,o[11]=D*F+U*W+I*ee+O*ye,o[15]=D*S+U*X+I*$+O*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],h=e[9],f=e[13],m=e[2],p=e[6],g=e[10],x=e[14],M=e[3],E=e[7],v=e[11],_=e[15],D=h*x-f*g,U=u*x-f*p,I=u*g-h*p,O=l*x-f*m,B=l*g-h*m,C=l*p-u*m;return t*(E*D-v*U+_*I)-n*(M*D-v*O+_*B)+s*(M*U-E*O+_*C)-o*(M*I-E*B+v*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],m=e[8],p=e[9],g=e[10],x=e[11],M=e[12],E=e[13],v=e[14],_=e[15],D=p*v*f-E*g*f+E*h*x-u*v*x-p*h*_+u*g*_,U=M*g*f-m*v*f-M*h*x+l*v*x+m*h*_-l*g*_,I=m*E*f-M*p*f+M*u*x-l*E*x-m*u*_+l*p*_,O=M*p*h-m*E*h-M*u*g+l*E*g+m*u*v-l*p*v,B=t*D+n*U+s*I+o*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/B;return e[0]=D*C,e[1]=(E*g*o-p*v*o-E*s*x+n*v*x+p*s*_-n*g*_)*C,e[2]=(u*v*o-E*h*o+E*s*f-n*v*f-u*s*_+n*h*_)*C,e[3]=(p*h*o-u*g*o-p*s*f+n*g*f+u*s*x-n*h*x)*C,e[4]=U*C,e[5]=(m*v*o-M*g*o+M*s*x-t*v*x-m*s*_+t*g*_)*C,e[6]=(M*h*o-l*v*o-M*s*f+t*v*f+l*s*_-t*h*_)*C,e[7]=(l*g*o-m*h*o+m*s*f-t*g*f-l*s*x+t*h*x)*C,e[8]=I*C,e[9]=(M*p*o-m*E*o-M*n*x+t*E*x+m*n*_-t*p*_)*C,e[10]=(l*E*o-M*u*o+M*n*f-t*E*f-l*n*_+t*u*_)*C,e[11]=(m*u*o-l*p*o-m*n*f+t*p*f+l*n*x-t*u*x)*C,e[12]=O*C,e[13]=(m*E*s-M*p*s+M*n*g-t*E*g-m*n*v+t*p*v)*C,e[14]=(M*u*s-l*E*s-M*n*h+t*E*h+l*n*v-t*u*v)*C,e[15]=(l*p*s-m*u*s+m*n*h-t*p*h-l*n*g+t*u*g)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,h=e.z,f=o*l,m=o*u;return this.set(f*l+n,f*u-s*h,f*h+s*u,0,f*u+s*h,m*u+n,m*h-s*l,0,f*h-s*u,m*h+s*l,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,h=t._w,f=o+o,m=l+l,p=u+u,g=o*f,x=o*m,M=o*p,E=l*m,v=l*p,_=u*p,D=h*f,U=h*m,I=h*p,O=n.x,B=n.y,C=n.z;return s[0]=(1-(E+_))*O,s[1]=(x+I)*O,s[2]=(M-U)*O,s[3]=0,s[4]=(x-I)*B,s[5]=(1-(g+_))*B,s[6]=(v+D)*B,s[7]=0,s[8]=(M+U)*C,s[9]=(v-D)*C,s[10]=(1-(g+E))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let o=Us.set(s[0],s[1],s[2]).length();const l=Us.set(s[4],s[5],s[6]).length(),u=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),Mi.copy(this);const f=1/o,m=1/l,p=1/u;return Mi.elements[0]*=f,Mi.elements[1]*=f,Mi.elements[2]*=f,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=p,Mi.elements[9]*=p,Mi.elements[10]*=p,t.setFromRotationMatrix(Mi),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,s,o,l,u=zi,h=!1){const f=this.elements,m=2*o/(t-e),p=2*o/(n-s),g=(t+e)/(t-e),x=(n+s)/(n-s);let M,E;if(h)M=o/(l-o),E=l*o/(l-o);else if(u===zi)M=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===Nl)M=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=zi,h=!1){const f=this.elements,m=2/(t-e),p=2/(n-s),g=-(t+e)/(t-e),x=-(n+s)/(n-s);let M,E;if(h)M=1/(l-o),E=l/(l-o);else if(u===zi)M=-2/(l-o),E=-(l+o)/(l-o);else if(u===Nl)M=-1/(l-o),E=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=p,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new G,Mi=new jt,gw=new G(0,0,0),vw=new G(1,1,1),Mr=new G,nl=new G,ei=new G,og=new jt,lg=new os;class Vi{constructor(e=0,t=0,n=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],h=s[1],f=s[5],m=s[9],p=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const cg=new G,Os=new os,ir=new jt,il=new G,Ca=new G,Sw=new G,yw=new os,ug=new G(1,0,0),hg=new G(0,1,0),fg=new G(0,0,1),dg={type:"added"},bw={type:"removed"},Ns={type:"childadded",child:null},Mu={type:"childremoved",child:null};class An extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new G,t=new Vi,n=new os,s=new G(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new mt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(hg,e)}rotateZ(e){return this.rotateOnAxis(fg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(hg,e)}translateZ(e){return this.translateOnAxis(fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?il.copy(e):il.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ca,il,this.up):ir.lookAt(il,Ca,this.up),this.quaternion.setFromRotationMatrix(ir),s&&(ir.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(ir),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dg),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bw),Mu.child=e,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dg),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,Sw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,yw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const p=h[f];o(e.shapes,p)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=l(e.geometries),h=l(e.materials),f=l(e.textures),m=l(e.images),p=l(e.shapes),g=l(e.skeletons),x=l(e.animations),M=l(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),M.length>0&&(n.nodes=M)}return n.object=s,n;function l(u){const h=[];for(const f in u){const m=u[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}An.DEFAULT_UP=new G(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new G,rr=new G,Eu=new G,sr=new G,Fs=new G,Bs=new G,pg=new G,Tu=new G,Au=new G,wu=new G,Cu=new tn,Ru=new tn,Pu=new tn;class wi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ei.subVectors(e,t),s.cross(Ei);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Ei.subVectors(s,t),rr.subVectors(n,t),Eu.subVectors(e,t);const l=Ei.dot(Ei),u=Ei.dot(rr),h=Ei.dot(Eu),f=rr.dot(rr),m=rr.dot(Eu),p=l*f-u*u;if(p===0)return o.set(0,0,0),null;const g=1/p,x=(f*h-u*m)*g,M=(l*m-u*h)*g;return o.set(1-x-M,M,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,s,o,l,u,h){return this.getBarycoord(e,t,n,s,sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,sr.x),h.addScaledVector(l,sr.y),h.addScaledVector(u,sr.z),h)}static getInterpolatedAttribute(e,t,n,s,o,l){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Cu,o.x),l.addScaledVector(Ru,o.y),l.addScaledVector(Pu,o.z),l}static isFrontFacing(e,t,n,s){return Ei.subVectors(n,t),rr.subVectors(e,t),Ei.cross(rr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ei.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;Fs.subVectors(s,n),Bs.subVectors(o,n),Tu.subVectors(e,n);const h=Fs.dot(Tu),f=Bs.dot(Tu);if(h<=0&&f<=0)return t.copy(n);Au.subVectors(e,s);const m=Fs.dot(Au),p=Bs.dot(Au);if(m>=0&&p<=m)return t.copy(s);const g=h*p-m*f;if(g<=0&&h>=0&&m<=0)return l=h/(h-m),t.copy(n).addScaledVector(Fs,l);wu.subVectors(e,o);const x=Fs.dot(wu),M=Bs.dot(wu);if(M>=0&&x<=M)return t.copy(o);const E=x*f-h*M;if(E<=0&&f>=0&&M<=0)return u=f/(f-M),t.copy(n).addScaledVector(Bs,u);const v=m*M-x*p;if(v<=0&&p-m>=0&&x-M>=0)return pg.subVectors(o,s),u=(p-m)/(p-m+(x-M)),t.copy(s).addScaledVector(pg,u);const _=1/(v+E+g);return l=E*_,u=g*_,t.copy(n).addScaledVector(Fs,l).addScaledVector(Bs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},rl={h:0,s:0,l:0};function Du(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=lw(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Du(l,o,e+1/3),this.g=Du(l,o,e),this.b=Du(l,o,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function n(o){o!==void 0&&parseFloat(o)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const n=Rx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ct.workingToColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Ln.copy(this),t);const n=Ln.r,s=Ln.g,o=Ln.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let h,f;const m=(u+l)/2;if(u===l)h=0,f=0;else{const p=l-u;switch(f=m<=.5?p/(l+u):p/(2-l-u),l){case n:h=(s-o)/p+(s<o?6:0);break;case s:h=(o-n)/p+2;break;case o:h=(n-s)/p+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=pi){Ct.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,n=Ln.g,s=Ln.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+t,Er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Er),e.getHSL(rl);const n=du(Er.h,rl.h,t),s=du(Er.s,rl.s,t),o=du(Er.l,rl.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ln=new st;st.NAMES=Rx;let Mw=0;class cs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Zs,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yf,this.blendDst=Kf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yf&&(n.blendSrc=this.blendSrc),this.blendDst!==Kf&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gn extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new G,sl=new je;let Ew=0;class ii{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ew++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eg,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ta(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),n=Xn(n,this.array),s=Xn(s,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eg&&(e.usage=this.usage),e}}class Px extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dx extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tw=0;const di=new jt,Lu=new An,ks=new G,ti=new Qa,Ra=new Qa,_n=new G;class wn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Dx:Px)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new mt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];ti.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Ra.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(ti.min,Ra.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Ra.max),ti.expandByPoint(_n)):(ti.expandByPoint(Ra.min),ti.expandByPoint(Ra.max))}ti.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)_n.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(_n));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)_n.fromBufferAttribute(u,f),h&&(ks.fromBufferAttribute(e,f),_n.add(ks)),s=Math.max(s,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],h=[];for(let F=0;F<n.count;F++)u[F]=new G,h[F]=new G;const f=new G,m=new G,p=new G,g=new je,x=new je,M=new je,E=new G,v=new G;function _(F,S,T){f.fromBufferAttribute(n,F),m.fromBufferAttribute(n,S),p.fromBufferAttribute(n,T),g.fromBufferAttribute(o,F),x.fromBufferAttribute(o,S),M.fromBufferAttribute(o,T),m.sub(f),p.sub(f),x.sub(g),M.sub(g);const L=1/(x.x*M.y-M.x*x.y);isFinite(L)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(p,-x.y).multiplyScalar(L),v.copy(p).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(L),u[F].add(E),u[S].add(E),u[T].add(E),h[F].add(v),h[S].add(v),h[T].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let F=0,S=D.length;F<S;++F){const T=D[F],L=T.start,W=T.count;for(let X=L,ie=L+W;X<ie;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const U=new G,I=new G,O=new G,B=new G;function C(F){O.fromBufferAttribute(s,F),B.copy(O);const S=u[F];U.copy(S),U.sub(O.multiplyScalar(O.dot(S))).normalize(),I.crossVectors(B,S);const L=I.dot(h[F])<0?-1:1;l.setXYZW(F,U.x,U.y,U.z,L)}for(let F=0,S=D.length;F<S;++F){const T=D[F],L=T.start,W=T.count;for(let X=L,ie=L+W;X<ie;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const s=new G,o=new G,l=new G,u=new G,h=new G,f=new G,m=new G,p=new G;if(e)for(let g=0,x=e.count;g<x;g+=3){const M=e.getX(g+0),E=e.getX(g+1),v=e.getX(g+2);s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,v),m.subVectors(l,o),p.subVectors(s,o),m.cross(p),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,v),u.add(m),h.add(m),f.add(m),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),m.subVectors(l,o),p.subVectors(s,o),m.cross(p),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,h){const f=u.array,m=u.itemSize,p=u.normalized,g=new f.constructor(h.length*m);let x=0,M=0;for(let E=0,v=h.length;E<v;E++){u.isInterleavedBufferAttribute?x=h[E]*u.data.stride+u.offset:x=h[E]*m;for(let _=0;_<m;_++)g[M++]=f[x++]}return new ii(g,m,p)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let m=0,p=f.length;m<p;m++){const g=f[m],x=e(g,n);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let p=0,g=f.length;p<g;p++){const x=f[p];m.push(x.toJSON(e.data))}m.length>0&&(s[h]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],p=o[f];for(let g=0,x=p.length;g<x;g++)m.push(p[g].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,m=l.length;f<m;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new jt,Jr=new Wl,al=new eo,_g=new G,ol=new G,ll=new G,cl=new G,Iu=new G,ul=new G,gg=new G,hl=new G;class Sn extends An{constructor(e=new wn,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){ul.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=u[h],p=o[h];m!==0&&(Iu.fromBufferAttribute(p,e),l?ul.addScaledVector(Iu,m):ul.addScaledVector(Iu.sub(t),m))}t.add(ul)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(o),Jr.copy(e.ray).recast(e.near),!(al.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(al,_g)===null||Jr.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(mg.copy(o).invert(),Jr.copy(e.ray).applyMatrix4(mg),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,p=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let M=0,E=g.length;M<E;M++){const v=g[M],_=l[v.materialIndex],D=Math.max(v.start,x.start),U=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let I=D,O=U;I<O;I+=3){const B=u.getX(I),C=u.getX(I+1),F=u.getX(I+2);s=fl(this,_,e,n,f,m,p,B,C,F),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let v=M,_=E;v<_;v+=3){const D=u.getX(v),U=u.getX(v+1),I=u.getX(v+2);s=fl(this,l,e,n,f,m,p,D,U,I),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let M=0,E=g.length;M<E;M++){const v=g[M],_=l[v.materialIndex],D=Math.max(v.start,x.start),U=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let I=D,O=U;I<O;I+=3){const B=I,C=I+1,F=I+2;s=fl(this,_,e,n,f,m,p,B,C,F),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let v=M,_=E;v<_;v+=3){const D=v,U=v+1,I=v+2;s=fl(this,l,e,n,f,m,p,D,U,I),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Aw(i,e,t,n,s,o,l,u){let h;if(e.side===en?h=n.intersectTriangle(l,o,s,!0,u):h=n.intersectTriangle(s,o,l,e.side===Ur,u),h===null)return null;hl.copy(u),hl.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(hl);return f<t.near||f>t.far?null:{distance:f,point:hl.clone(),object:i}}function fl(i,e,t,n,s,o,l,u,h,f){i.getVertexPosition(u,ol),i.getVertexPosition(h,ll),i.getVertexPosition(f,cl);const m=Aw(i,e,t,n,ol,ll,cl,gg);if(m){const p=new G;wi.getBarycoord(gg,ol,ll,cl,p),s&&(m.uv=wi.getInterpolatedAttribute(s,u,h,f,p,new je)),o&&(m.uv1=wi.getInterpolatedAttribute(o,u,h,f,p,new je)),l&&(m.normal=wi.getInterpolatedAttribute(l,u,h,f,p,new G),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new G,materialIndex:0};wi.getNormal(ol,ll,cl,g.normal),m.face=g,m.barycoord=p}return m}class Or extends wn{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const h=[],f=[],m=[],p=[];let g=0,x=0;M("z","y","x",-1,-1,n,t,e,l,o,0),M("z","y","x",1,-1,n,t,-e,l,o,1),M("x","z","y",1,1,e,n,t,s,l,2),M("x","z","y",1,-1,e,n,-t,s,l,3),M("x","y","z",1,-1,e,t,n,s,o,4),M("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(p,2));function M(E,v,_,D,U,I,O,B,C,F,S){const T=I/C,L=O/F,W=I/2,X=O/2,ie=B/2,re=C+1,ee=F+1;let $=0,oe=0;const Ae=new G;for(let ye=0;ye<ee;ye++){const Me=ye*L-X;for(let ut=0;ut<re;ut++){const at=ut*T-W;Ae[E]=at*D,Ae[v]=Me*U,Ae[_]=ie,f.push(Ae.x,Ae.y,Ae.z),Ae[E]=0,Ae[v]=0,Ae[_]=B>0?1:-1,m.push(Ae.x,Ae.y,Ae.z),p.push(ut/C),p.push(1-ye/F),$+=1}}for(let ye=0;ye<F;ye++)for(let Me=0;Me<C;Me++){const ut=g+Me+re*ye,at=g+Me+re*(ye+1),Ht=g+(Me+1)+re*(ye+1),wt=g+(Me+1)+re*ye;h.push(ut,at,wt),h.push(at,Ht,wt),oe+=6}u.addGroup(x,oe,S),x+=oe,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ia(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const n=ia(i[t]);for(const s in n)e[s]=n[s]}return e}function ww(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const ql={clone:ia,merge:zn};var Cw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cw,this.fragmentShader=Rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=ww(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ix extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new G,vg=new je,xg=new je;class vn extends Ix{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,vg,xg),t.subVectors(xg,vg)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/h,t-=l.offsetY*n/f,s*=l.width/h,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Gs=1;class Pw extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(zs,Gs,e,t);s.layers=this.layers,this.add(s);const o=new vn(zs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new vn(zs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new vn(zs,Gs,e,t);u.layers=this.layers,this.add(u);const h=new vn(zs,Gs,e,t);h.layers=this.layers,this.add(h);const f=new vn(zs,Gs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,h]=t;for(const f of t)this.remove(f);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,f,m]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(p,g,x),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Ux extends On{constructor(e=[],t=as,n,s,o,l,u,h,f,m){super(e,t,n,s,o,l,u,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ux(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Or(5,5,5),o=new En({name:"CubemapFromEquirect",uniforms:ia(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:_i});o.uniforms.tEquirect.value=t;const l=new Sn(s,o),u=t.minFilter;return t.minFilter===rs&&(t.minFilter=Un),new Pw(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}class Ks extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dw={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),_=this._getHandJoint(f,E);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const m=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],g=m.position.distanceTo(p.position),x=.02,M=.005;f.inputState.pinching&&g>x+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=x-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Lw extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iw extends On{constructor(e=null,t=1,n=1,s,o,l,u,h,f=Tn,m=Tn,p,g){super(null,l,u,h,f,m,s,o,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ou=new G,Uw=new G,Ow=new mt;class wr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ou.subVectors(n,t).cross(Uw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ou),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ow.getNormalMatrix(e),s=this.coplanarPoint(Ou).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new eo,Nw=new je(.5,.5),dl=new G;class fp{constructor(e=new wr,t=new wr,n=new wr,s=new wr,o=new wr,l=new wr){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi,n=!1){const s=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],f=o[3],m=o[4],p=o[5],g=o[6],x=o[7],M=o[8],E=o[9],v=o[10],_=o[11],D=o[12],U=o[13],I=o[14],O=o[15];if(s[0].setComponents(f-l,x-m,_-M,O-D).normalize(),s[1].setComponents(f+l,x+m,_+M,O+D).normalize(),s[2].setComponents(f+u,x+p,_+E,O+U).normalize(),s[3].setComponents(f-u,x-p,_-E,O-U).normalize(),n)s[4].setComponents(h,g,v,I).normalize(),s[5].setComponents(f-h,x-g,_-v,O-I).normalize();else if(s[4].setComponents(f-h,x-g,_-v,O-I).normalize(),t===zi)s[5].setComponents(f+h,x+g,_+v,O+I).normalize();else if(t===Nl)s[5].setComponents(h,g,v,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const t=Nw.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(dl.x=s.normal.x>0?e.max.x:e.min.x,dl.y=s.normal.y>0?e.max.y:e.min.y,dl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dp extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new G,Bl=new G,Sg=new jt,Pa=new Wl,pl=new eo,Nu=new G,yg=new G;class pp extends An{constructor(e=new wn,t=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Fl.fromBufferAttribute(t,s-1),Bl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fl.distanceTo(Bl);e.setAttribute("lineDistance",new un(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),pl.radius+=o,e.ray.intersectsSphere(pl)===!1)return;Sg.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(Sg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const x=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let E=x,v=M-1;E<v;E+=f){const _=m.getX(E),D=m.getX(E+1),U=ml(this,e,Pa,h,_,D,E);U&&t.push(U)}if(this.isLineLoop){const E=m.getX(M-1),v=m.getX(x),_=ml(this,e,Pa,h,E,v,M-1);_&&t.push(_)}}else{const x=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let E=x,v=M-1;E<v;E+=f){const _=ml(this,e,Pa,h,E,E+1,E);_&&t.push(_)}if(this.isLineLoop){const E=ml(this,e,Pa,h,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function ml(i,e,t,n,s,o,l){const u=i.geometry.attributes.position;if(Fl.fromBufferAttribute(u,s),Bl.fromBufferAttribute(u,o),t.distanceSqToSegment(Fl,Bl,Nu,yg)>n)return;Nu.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Nu);if(!(f<e.near||f>e.far))return{distance:f,point:yg.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}class Nx extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bg=new jt,kd=new Wl,_l=new eo,gl=new G;class Fw extends An{constructor(e=new wn,t=new Nx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),_l.radius+=o,e.ray.intersectsSphere(_l)===!1)return;bg.copy(s).invert(),kd.copy(e.ray).applyMatrix4(bg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=n.index,p=n.attributes.position;if(f!==null){const g=Math.max(0,l.start),x=Math.min(f.count,l.start+l.count);for(let M=g,E=x;M<E;M++){const v=f.getX(M);gl.fromBufferAttribute(p,v),Mg(gl,v,h,s,e,t,this)}}else{const g=Math.max(0,l.start),x=Math.min(p.count,l.start+l.count);for(let M=g,E=x;M<E;M++)gl.fromBufferAttribute(p,M),Mg(gl,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Mg(i,e,t,n,s,o,l){const u=kd.distanceSqToPoint(i);if(u<t){const h=new G;kd.closestPointToPoint(i,h),h.applyMatrix4(n);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class $a extends On{constructor(e,t,n=Hi,s,o,l,u=Tn,h=Tn,f,m=cr,p=1){if(m!==cr&&m!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,s,o,l,u,h,m,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bw extends $a{constructor(e,t=Hi,n=as,s,o,l=Tn,u=Tn,h,f=cr){const m={width:e,height:e,depth:1},p=[m,m,m,m,m,m];super(e,e,t,n,s,o,l,u,h,f),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mp extends wn{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};const f=this;s=Math.floor(s),o=Math.floor(o);const m=[],p=[],g=[],x=[];let M=0;const E=[],v=n/2;let _=0;D(),l===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(x,2));function D(){const I=new G,O=new G;let B=0;const C=(t-e)/n;for(let F=0;F<=o;F++){const S=[],T=F/o,L=T*(t-e)+e;for(let W=0;W<=s;W++){const X=W/s,ie=X*h+u,re=Math.sin(ie),ee=Math.cos(ie);O.x=L*re,O.y=-T*n+v,O.z=L*ee,p.push(O.x,O.y,O.z),I.set(re,C,ee).normalize(),g.push(I.x,I.y,I.z),x.push(X,1-T),S.push(M++)}E.push(S)}for(let F=0;F<s;F++)for(let S=0;S<o;S++){const T=E[S][F],L=E[S+1][F],W=E[S+1][F+1],X=E[S][F+1];(e>0||S!==0)&&(m.push(T,L,X),B+=3),(t>0||S!==o-1)&&(m.push(L,W,X),B+=3)}f.addGroup(_,B,0),_+=B}function U(I){const O=M,B=new je,C=new G;let F=0;const S=I===!0?e:t,T=I===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),M++;const L=M;for(let W=0;W<=s;W++){const ie=W/s*h+u,re=Math.cos(ie),ee=Math.sin(ie);C.x=S*ee,C.y=v*T,C.z=S*re,p.push(C.x,C.y,C.z),g.push(0,T,0),B.x=re*.5+.5,B.y=ee*.5*T+.5,x.push(B.x,B.y),M++}for(let W=0;W<s;W++){const X=O+W,ie=L+W;I===!0?m.push(ie,ie+1,X):m.push(ie+1,ie,X),F+=3}f.addGroup(_,F,I===!0?1:2),_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _p extends mp{constructor(e=1,t=1,n=32,s=1,o=!1,l=0,u=Math.PI*2){super(0,e,t,n,s,o,l,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:u}}static fromJSON(e){return new _p(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),h=Math.floor(s),f=u+1,m=h+1,p=e/u,g=t/h,x=[],M=[],E=[],v=[];for(let _=0;_<m;_++){const D=_*g-l;for(let U=0;U<f;U++){const I=U*p-o;M.push(I,-D,0),E.push(0,0,1),v.push(U/u),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<u;D++){const U=D+f*_,I=D+f*(_+1),O=D+1+f*(_+1),B=D+1+f*_;x.push(U,I,B),x.push(I,O,B)}this.setIndex(x),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nr extends wn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+u,Math.PI);let f=0;const m=[],p=new G,g=new G,x=[],M=[],E=[],v=[];for(let _=0;_<=n;_++){const D=[],U=_/n;let I=0;_===0&&l===0?I=.5/t:_===n&&h===Math.PI&&(I=-.5/t);for(let O=0;O<=t;O++){const B=O/t;p.x=-e*Math.cos(s+B*o)*Math.sin(l+U*u),p.y=e*Math.cos(l+U*u),p.z=e*Math.sin(s+B*o)*Math.sin(l+U*u),M.push(p.x,p.y,p.z),g.copy(p).normalize(),E.push(g.x,g.y,g.z),v.push(B+I,1-U),D.push(f++)}m.push(D)}for(let _=0;_<n;_++)for(let D=0;D<t;D++){const U=m[_][D+1],I=m[_][D],O=m[_+1][D],B=m[_+1][D+1];(_!==0||l>0)&&x.push(U,I,B),(_!==n-1||h<Math.PI)&&x.push(I,O,B)}this.setIndex(x),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bx extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kw extends cs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new st(16777215),this.specular=new st(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tx,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kx extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zw extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fu={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gw{constructor(e,t,n){const s=this;let o=!1,l=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){u++,o===!1&&s.onStart!==void 0&&s.onStart(m,l,u),o=!0},this.itemEnd=function(m){l++,s.onProgress!==void 0&&s.onProgress(m,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,p){return f.push(m,p),this},this.removeHandler=function(m){const p=f.indexOf(m);return p!==-1&&f.splice(p,2),this},this.getHandler=function(m){for(let p=0,g=f.length;p<g;p+=2){const x=f[p],M=f[p+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Hw=new Gw;class gp{constructor(e){this.manager=e!==void 0?e:Hw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hs=new WeakMap;class Vw extends gp{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Fu.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let p=Hs.get(l);p===void 0&&(p=[],Hs.set(l,p)),p.push({onLoad:t,onError:s})}return l}const u=Ka("img");function h(){m(),t&&t(this);const p=Hs.get(this)||[];for(let g=0;g<p.length;g++){const x=p[g];x.onLoad&&x.onLoad(this)}Hs.delete(this),o.manager.itemEnd(e)}function f(p){m(),s&&s(p),Fu.remove(`image:${e}`);const g=Hs.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onError&&M.onError(p)}Hs.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Fu.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class vp extends gp{constructor(e){super(e)}load(e,t,n,s){const o=new On,l=new Vw(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class Ww extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Bu=new jt,Eg=new G,Tg=new G;class qw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xw extends qw{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class xp extends Ww{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Sp extends Ix{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yw extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ag{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wg=new G;let vl,ku;class Kw extends An{constructor(e=new G(0,0,1),t=new G(0,0,0),n=1,s=16776960,o=n*.2,l=o*.2){super(),this.type="ArrowHelper",vl===void 0&&(vl=new wn,vl.setAttribute("position",new un([0,0,0,0,1,0],3)),ku=new _p(.5,1,5,1),ku.translate(0,-.5,0)),this.position.copy(t),this.line=new pp(vl,new dp({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Sn(ku,new Gn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,o,l)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{wg.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(wg,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class jw extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){it("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Cg(i,e,t,n){const s=$w(n);switch(t){case bx:return i*e;case Ex:return i*e/s.components*s.byteLength;case ap:return i*e/s.components*s.byteLength;case ta:return i*e*2/s.components*s.byteLength;case op:return i*e*2/s.components*s.byteLength;case Mx:return i*e*3/s.components*s.byteLength;case Ci:return i*e*4/s.components*s.byteLength;case lp:return i*e*4/s.components*s.byteLength;case wl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case od:case cd:return Math.max(i,16)*Math.max(e,8)/4;case ad:case ld:return Math.max(i,8)*Math.max(e,8)/2;case ud:case hd:case dd:case pd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fd:case md:case _d:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dd:case Ld:case Id:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ud:case Od:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nd:case Fd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $w(i){switch(i){case ni:case vx:return{byteLength:1,components:1};case Xa:case xx:case In:return{byteLength:2,components:1};case rp:case sp:return{byteLength:2,components:4};case Hi:case ip:case ki:return{byteLength:4,components:1};case Sx:case yx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);function Gx(){let i=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Zw(i){const e=new WeakMap;function t(u,h){const f=u.array,m=u.usage,p=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,m),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=i.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function n(u,h,f){const m=h.array,p=h.updateRanges;if(i.bindBuffer(f,u),p.length===0)i.bufferSubData(f,0,m);else{p.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<p.length;x++){const M=p[g],E=p[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,p[g]=E)}p.length=g+1;for(let x=0,M=p.length;x<M;x++){const E=p[x];i.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:l}}var Jw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qw=`#ifdef USE_ALPHAHASH
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
#endif`,eC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rC=`#ifdef USE_AOMAP
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
#endif`,sC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aC=`#ifdef USE_BATCHING
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
#endif`,oC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hC=`#ifdef USE_IRIDESCENCE
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
#endif`,fC=`#ifdef USE_BUMPMAP
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
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yC=`#define PI 3.141592653589793
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
} // validated`,bC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MC=`vec3 transformedNormal = objectNormal;
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
#endif`,EC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CC="gl_FragColor = linearToOutputTexel( gl_FragColor );",RC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PC=`#ifdef USE_ENVMAP
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
#endif`,DC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LC=`#ifdef USE_ENVMAP
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
#endif`,IC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
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
#endif`,OC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kC=`#ifdef USE_GRADIENTMAP
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
}`,zC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VC=`uniform bool receiveShadow;
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
#endif`,WC=`#ifdef USE_ENVMAP
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
#endif`,qC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
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
#endif`,$C=`uniform sampler2D dfgLUT;
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
}`,ZC=`
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
#endif`,JC=`#if defined( RE_IndirectDiffuse )
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
#endif`,QC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oR=`#if defined( USE_POINTS_UV )
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
#endif`,lR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dR=`#ifdef USE_MORPHTARGETS
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
#endif`,pR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_R=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SR=`#ifdef USE_NORMALMAP
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
#endif`,yR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ER=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NR=`float getShadowMask() {
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
}`,FR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BR=`#ifdef USE_SKINNING
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
#endif`,kR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zR=`#ifdef USE_SKINNING
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
#endif`,GR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qR=`#ifdef USE_TRANSMISSION
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
#endif`,XR=`#ifdef USE_TRANSMISSION
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
#endif`,YR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$R=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JR=`uniform sampler2D t2D;
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
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iP=`#include <common>
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
}`,rP=`#if DEPTH_PACKING == 3200
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
}`,sP=`#define DISTANCE
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
}`,aP=`#define DISTANCE
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
}`,oP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cP=`uniform float scale;
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
}`,uP=`uniform vec3 diffuse;
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
}`,hP=`#include <common>
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
}`,fP=`uniform vec3 diffuse;
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
}`,dP=`#define LAMBERT
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
}`,pP=`#define LAMBERT
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
}`,mP=`#define MATCAP
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
}`,_P=`#define MATCAP
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
}`,gP=`#define NORMAL
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
}`,vP=`#define NORMAL
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
}`,xP=`#define PHONG
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
}`,SP=`#define PHONG
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
}`,yP=`#define STANDARD
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
}`,bP=`#define STANDARD
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
}`,MP=`#define TOON
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
}`,EP=`#define TOON
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
}`,TP=`uniform float size;
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
}`,AP=`uniform vec3 diffuse;
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
}`,wP=`#include <common>
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
}`,CP=`uniform vec3 color;
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
}`,RP=`uniform float rotation;
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
}`,PP=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Jw,alphahash_pars_fragment:Qw,alphamap_fragment:eC,alphamap_pars_fragment:tC,alphatest_fragment:nC,alphatest_pars_fragment:iC,aomap_fragment:rC,aomap_pars_fragment:sC,batching_pars_vertex:aC,batching_vertex:oC,begin_vertex:lC,beginnormal_vertex:cC,bsdfs:uC,iridescence_fragment:hC,bumpmap_pars_fragment:fC,clipping_planes_fragment:dC,clipping_planes_pars_fragment:pC,clipping_planes_pars_vertex:mC,clipping_planes_vertex:_C,color_fragment:gC,color_pars_fragment:vC,color_pars_vertex:xC,color_vertex:SC,common:yC,cube_uv_reflection_fragment:bC,defaultnormal_vertex:MC,displacementmap_pars_vertex:EC,displacementmap_vertex:TC,emissivemap_fragment:AC,emissivemap_pars_fragment:wC,colorspace_fragment:CC,colorspace_pars_fragment:RC,envmap_fragment:PC,envmap_common_pars_fragment:DC,envmap_pars_fragment:LC,envmap_pars_vertex:IC,envmap_physical_pars_fragment:WC,envmap_vertex:UC,fog_vertex:OC,fog_pars_vertex:NC,fog_fragment:FC,fog_pars_fragment:BC,gradientmap_pars_fragment:kC,lightmap_pars_fragment:zC,lights_lambert_fragment:GC,lights_lambert_pars_fragment:HC,lights_pars_begin:VC,lights_toon_fragment:qC,lights_toon_pars_fragment:XC,lights_phong_fragment:YC,lights_phong_pars_fragment:KC,lights_physical_fragment:jC,lights_physical_pars_fragment:$C,lights_fragment_begin:ZC,lights_fragment_maps:JC,lights_fragment_end:QC,logdepthbuf_fragment:eR,logdepthbuf_pars_fragment:tR,logdepthbuf_pars_vertex:nR,logdepthbuf_vertex:iR,map_fragment:rR,map_pars_fragment:sR,map_particle_fragment:aR,map_particle_pars_fragment:oR,metalnessmap_fragment:lR,metalnessmap_pars_fragment:cR,morphinstance_vertex:uR,morphcolor_vertex:hR,morphnormal_vertex:fR,morphtarget_pars_vertex:dR,morphtarget_vertex:pR,normal_fragment_begin:mR,normal_fragment_maps:_R,normal_pars_fragment:gR,normal_pars_vertex:vR,normal_vertex:xR,normalmap_pars_fragment:SR,clearcoat_normal_fragment_begin:yR,clearcoat_normal_fragment_maps:bR,clearcoat_pars_fragment:MR,iridescence_pars_fragment:ER,opaque_fragment:TR,packing:AR,premultiplied_alpha_fragment:wR,project_vertex:CR,dithering_fragment:RR,dithering_pars_fragment:PR,roughnessmap_fragment:DR,roughnessmap_pars_fragment:LR,shadowmap_pars_fragment:IR,shadowmap_pars_vertex:UR,shadowmap_vertex:OR,shadowmask_pars_fragment:NR,skinbase_vertex:FR,skinning_pars_vertex:BR,skinning_vertex:kR,skinnormal_vertex:zR,specularmap_fragment:GR,specularmap_pars_fragment:HR,tonemapping_fragment:VR,tonemapping_pars_fragment:WR,transmission_fragment:qR,transmission_pars_fragment:XR,uv_pars_fragment:YR,uv_pars_vertex:KR,uv_vertex:jR,worldpos_vertex:$R,background_vert:ZR,background_frag:JR,backgroundCube_vert:QR,backgroundCube_frag:eP,cube_vert:tP,cube_frag:nP,depth_vert:iP,depth_frag:rP,distance_vert:sP,distance_frag:aP,equirect_vert:oP,equirect_frag:lP,linedashed_vert:cP,linedashed_frag:uP,meshbasic_vert:hP,meshbasic_frag:fP,meshlambert_vert:dP,meshlambert_frag:pP,meshmatcap_vert:mP,meshmatcap_frag:_P,meshnormal_vert:gP,meshnormal_frag:vP,meshphong_vert:xP,meshphong_frag:SP,meshphysical_vert:yP,meshphysical_frag:bP,meshtoon_vert:MP,meshtoon_frag:EP,points_vert:TP,points_frag:AP,shadow_vert:wP,shadow_frag:CP,sprite_vert:RP,sprite_frag:PP},Re={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:zn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:zn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:zn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new st(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:zn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:zn([Re.points,Re.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:zn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:zn([Re.common,Re.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:zn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:zn([Re.sprite,Re.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:zn([Re.common,Re.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:zn([Re.lights,Re.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const xl={r:0,b:0,g:0},es=new Vi,DP=new jt;function LP(i,e,t,n,s,o,l){const u=new st(0);let h=o===!0?0:1,f,m,p=null,g=0,x=null;function M(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?t:e).get(I)),I}function E(U){let I=!1;const O=M(U);O===null?_(u,h):O&&O.isColor&&(_(O,1),I=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(U,I){const O=M(I);O&&(O.isCubeTexture||O.mapping===Vl)?(m===void 0&&(m=new Sn(new Or(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:ia(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),es.copy(I.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DP.makeRotationFromEuler(es)),m.material.toneMapped=Ct.getTransfer(O.colorSpace)!==Bt,(p!==O||g!==O.version||x!==i.toneMapping)&&(m.material.needsUpdate=!0,p=O,g=O.version,x=i.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(f===void 0&&(f=new Sn(new Xl(2,2),new En({name:"BackgroundMaterial",uniforms:ia(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=O,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=Ct.getTransfer(O.colorSpace)!==Bt,O.matrixAutoUpdate===!0&&O.updateMatrix(),f.material.uniforms.uvTransform.value.copy(O.matrix),(p!==O||g!==O.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,p=O,g=O.version,x=i.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function _(U,I){U.getRGB(xl,Lx(i)),n.buffers.color.setClear(xl.r,xl.g,xl.b,I,l)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,I=1){u.set(U),h=I,_(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,_(u,h)},render:E,addToRenderList:v,dispose:D}}function IP(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let o=s,l=!1;function u(T,L,W,X,ie){let re=!1;const ee=p(X,W,L);o!==ee&&(o=ee,f(o.object)),re=x(T,X,W,ie),re&&M(T,X,W,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(re||l)&&(l=!1,I(T,L,W,X),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return i.createVertexArray()}function f(T){return i.bindVertexArray(T)}function m(T){return i.deleteVertexArray(T)}function p(T,L,W){const X=W.wireframe===!0;let ie=n[T.id];ie===void 0&&(ie={},n[T.id]=ie);let re=ie[L.id];re===void 0&&(re={},ie[L.id]=re);let ee=re[X];return ee===void 0&&(ee=g(h()),re[X]=ee),ee}function g(T){const L=[],W=[],X=[];for(let ie=0;ie<t;ie++)L[ie]=0,W[ie]=0,X[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:X,object:T,attributes:{},index:null}}function x(T,L,W,X){const ie=o.attributes,re=L.attributes;let ee=0;const $=W.getAttributes();for(const oe in $)if($[oe].location>=0){const ye=ie[oe];let Me=re[oe];if(Me===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),ye===void 0||ye.attribute!==Me||Me&&ye.data!==Me.data)return!0;ee++}return o.attributesNum!==ee||o.index!==X}function M(T,L,W,X){const ie={},re=L.attributes;let ee=0;const $=W.getAttributes();for(const oe in $)if($[oe].location>=0){let ye=re[oe];ye===void 0&&(oe==="instanceMatrix"&&T.instanceMatrix&&(ye=T.instanceMatrix),oe==="instanceColor"&&T.instanceColor&&(ye=T.instanceColor));const Me={};Me.attribute=ye,ye&&ye.data&&(Me.data=ye.data),ie[oe]=Me,ee++}o.attributes=ie,o.attributesNum=ee,o.index=X}function E(){const T=o.newAttributes;for(let L=0,W=T.length;L<W;L++)T[L]=0}function v(T){_(T,0)}function _(T,L){const W=o.newAttributes,X=o.enabledAttributes,ie=o.attributeDivisors;W[T]=1,X[T]===0&&(i.enableVertexAttribArray(T),X[T]=1),ie[T]!==L&&(i.vertexAttribDivisor(T,L),ie[T]=L)}function D(){const T=o.newAttributes,L=o.enabledAttributes;for(let W=0,X=L.length;W<X;W++)L[W]!==T[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function U(T,L,W,X,ie,re,ee){ee===!0?i.vertexAttribIPointer(T,L,W,ie,re):i.vertexAttribPointer(T,L,W,X,ie,re)}function I(T,L,W,X){E();const ie=X.attributes,re=W.getAttributes(),ee=L.defaultAttributeValues;for(const $ in re){const oe=re[$];if(oe.location>=0){let Ae=ie[$];if(Ae===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor)),Ae!==void 0){const ye=Ae.normalized,Me=Ae.itemSize,ut=e.get(Ae);if(ut===void 0)continue;const at=ut.buffer,Ht=ut.type,wt=ut.bytesPerElement,le=Ht===i.INT||Ht===i.UNSIGNED_INT||Ae.gpuType===ip;if(Ae.isInterleavedBufferAttribute){const _e=Ae.data,Le=_e.stride,et=Ae.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<oe.locationSize;ze++)_(oe.location+ze,_e.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<oe.locationSize;ze++)v(oe.location+ze);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ze=0;ze<oe.locationSize;ze++)U(oe.location+ze,Me/oe.locationSize,Ht,ye,Le*wt,(et+Me/oe.locationSize*ze)*wt,le)}else{if(Ae.isInstancedBufferAttribute){for(let _e=0;_e<oe.locationSize;_e++)_(oe.location+_e,Ae.meshPerAttribute);T.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let _e=0;_e<oe.locationSize;_e++)v(oe.location+_e);i.bindBuffer(i.ARRAY_BUFFER,at);for(let _e=0;_e<oe.locationSize;_e++)U(oe.location+_e,Me/oe.locationSize,Ht,ye,Me*wt,Me/oe.locationSize*_e*wt,le)}}else if(ee!==void 0){const ye=ee[$];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(oe.location,ye);break;case 3:i.vertexAttrib3fv(oe.location,ye);break;case 4:i.vertexAttrib4fv(oe.location,ye);break;default:i.vertexAttrib1fv(oe.location,ye)}}}}D()}function O(){F();for(const T in n){const L=n[T];for(const W in L){const X=L[W];for(const ie in X)m(X[ie].object),delete X[ie];delete L[W]}delete n[T]}}function B(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const W in L){const X=L[W];for(const ie in X)m(X[ie].object),delete X[ie];delete L[W]}delete n[T.id]}function C(T){for(const L in n){const W=n[L];if(W[T.id]===void 0)continue;const X=W[T.id];for(const ie in X)m(X[ie].object),delete X[ie];delete W[T.id]}}function F(){S(),l=!0,o!==s&&(o=s,f(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:S,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:v,disableUnusedAttributes:D}}function UP(i,e,t){let n;function s(f){n=f}function o(f,m){i.drawArrays(n,f,m),t.update(m,n,1)}function l(f,m,p){p!==0&&(i.drawArraysInstanced(n,f,m,p),t.update(m,n,p))}function u(f,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,p);let x=0;for(let M=0;M<p;M++)x+=m[M];t.update(x,n,1)}function h(f,m,p,g){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<f.length;M++)l(f[M],m[M],g[M]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,m,0,g,0,p);let M=0;for(let E=0;E<p;E++)M+=m[E]*g[E];t.update(M,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OP(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(C){return!(C!==Ci&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(C){const F=C===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ni&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ki&&!F)}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(it("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),B=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:I,maxSamples:O,samples:B}}function NP(i){const e=this;let t=null,n=0,s=!1,o=!1;const l=new wr,u=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const x=p.length!==0||g||n!==0||s;return s=g,n=p.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,x){const M=p.clippingPlanes,E=p.clipIntersection,v=p.clipShadows,_=i.get(p);if(!s||M===null||M.length===0||o&&!v)o?m(null):f();else{const D=o?0:n,U=D*4;let I=_.clippingState||null;h.value=I,I=m(M,g,U,x);for(let O=0;O!==U;++O)I[O]=t[O];_.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,g,x,M){const E=p!==null?p.length:0;let v=null;if(E!==0){if(v=h.value,M!==!0||v===null){const _=x+E*4,D=g.matrixWorldInverse;u.getNormalMatrix(D),(v===null||v.length<_)&&(v=new Float32Array(_));for(let U=0,I=x;U!==E;++U,I+=4)l.copy(p[U]).applyMatrix4(D,u),l.normal.toArray(v,I),v[I+3]=l.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function FP(i){let e=new WeakMap;function t(l,u){return u===nd?l.mapping=as:u===id&&(l.mapping=ea),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===nd||u===id)if(e.has(l)){const h=e.get(l).texture;return t(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const f=new Ox(h.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Rr=4,Rg=[.125,.215,.35,.446,.526,.582],is=20,BP=256,Da=new Sp,Pg=new st;let zu=null,Gu=0,Hu=0,Vu=!1;const kP=new G;class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:u=kP}=o;zu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Gu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:In,format:Ci,colorSpace:na,depthBuffer:!1},s=Lg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zP(o)),this._blurMaterial=HP(o,e,t),this._ggxMaterial=GP(o,e,t)}return s}_compileMaterial(e){const t=new Sn(new wn,e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,s,o){const h=new vn(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,x=p.toneMapping;p.getClearColor(Pg),p.toneMapping=Gi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Or,new Gn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,v=E.material;let _=!1;const D=e.background;D?D.isColor&&(v.color.copy(D),e.background=null,_=!0):(v.color.copy(Pg),_=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(h.up.set(0,f[U],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[U],o.y,o.z)):I===1?(h.up.set(0,0,f[U]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[U],o.z)):(h.up.set(0,f[U],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[U]));const O=this._cubeSize;Vs(s,I*O,U>2?O:0,O,O),p.setRenderTarget(s),_&&p.render(E,h),p.render(e,h)}p.toneMapping=x,p.autoClear=g,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===as||e.mapping===ea;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Vs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[n];u.material=l;const h=l.uniforms,f=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),p=Math.sqrt(f*f-m*m),g=0+f*1.25,x=p*g,{_lodMax:M}=this,E=this._sizeLods[n],v=3*E*(n>M-Rr?n-M+Rr:0),_=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,Vs(o,v,_,3*E,2*E),s.setRenderTarget(o),s.render(u,Da),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=M-n,Vs(e,v,_,3*E,2*E),s.setRenderTarget(e),s.render(u,Da)}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const m=3,p=this._lodMeshes[s];p.material=f;const g=f.uniforms,x=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*is-1),E=o/M,v=isFinite(o)?1+Math.floor(m*E):is;v>is&&it(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${is}`);const _=[];let D=0;for(let C=0;C<is;++C){const F=C/E,S=Math.exp(-F*F/2);_.push(S),C===0?D+=S:C<v&&(D+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/D;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=_,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:U}=this;g.dTheta.value=M,g.mipInt.value=U-n;const I=this._sizeLods[s],O=3*I*(s>U-Rr?s-U+Rr:0),B=4*(this._cubeSize-I);Vs(t,O,B,3*I,2*I),h.setRenderTarget(t),h.render(p,Da)}}function zP(i){const e=[],t=[],n=[];let s=i;const o=i-Rr+1+Rg.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let h=1/u;l>i-Rr?h=Rg[l-i+Rr-1]:l===0&&(h=0),t.push(h);const f=1/(u-2),m=-f,p=1+f,g=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,M=6,E=3,v=2,_=1,D=new Float32Array(E*M*x),U=new Float32Array(v*M*x),I=new Float32Array(_*M*x);for(let B=0;B<x;B++){const C=B%3*2/3-1,F=B>2?0:-1,S=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];D.set(S,E*M*B),U.set(g,v*M*B);const T=[B,B,B,B,B,B];I.set(T,_*M*B)}const O=new wn;O.setAttribute("position",new ii(D,E)),O.setAttribute("uv",new ii(U,v)),O.setAttribute("faceIndex",new ii(I,_)),n.push(new Sn(O,null)),s>Rr&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lg(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=Vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function GP(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function HP(i,e,t){const n=new Float32Array(is),s=new G(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ig(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Ug(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function VP(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const h=u.mapping,f=h===nd||h===id,m=h===as||h===ea;if(f||m){let p=e.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new Dg(i)),p=f?t.fromEquirectangular(u,p):t.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const x=u.image;return f&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new Dg(i)),p=f?t.fromEquirectangular(u):t.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",o),p.texture):null}}}return u}function s(u){let h=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&h++;return h===f}function o(u){const h=u.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function WP(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ja("WebGLRenderer: "+n+" extension not supported."),s}}}function qP(i,e,t,n){const s={},o=new WeakMap;function l(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",l),delete s[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(p,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function h(p){const g=p.attributes;for(const x in g)e.update(g[x],i.ARRAY_BUFFER)}function f(p){const g=[],x=p.index,M=p.attributes.position;let E=0;if(x!==null){const D=x.array;E=x.version;for(let U=0,I=D.length;U<I;U+=3){const O=D[U+0],B=D[U+1],C=D[U+2];g.push(O,B,B,C,C,O)}}else if(M!==void 0){const D=M.array;E=M.version;for(let U=0,I=D.length/3-1;U<I;U+=3){const O=U+0,B=U+1,C=U+2;g.push(O,B,B,C,C,O)}}else return;const v=new(Ax(g)?Dx:Px)(g,1);v.version=E;const _=o.get(p);_&&e.remove(_),o.set(p,v)}function m(p){const g=o.get(p);if(g){const x=p.index;x!==null&&g.version<x.version&&f(p)}else f(p);return o.get(p)}return{get:u,update:h,getWireframeAttribute:m}}function XP(i,e,t){let n;function s(g){n=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function h(g,x){i.drawElements(n,x,o,g*l),t.update(x,n,1)}function f(g,x,M){M!==0&&(i.drawElementsInstanced(n,x,o,g*l,M),t.update(x,n,M))}function m(g,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,g,0,M);let v=0;for(let _=0;_<M;_++)v+=x[_];t.update(v,n,1)}function p(g,x,M,E){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<g.length;_++)f(g[_]/l,x[_],E[_]);else{v.multiDrawElementsInstancedWEBGL(n,x,0,o,g,0,E,0,M);let _=0;for(let D=0;D<M;D++)_+=x[D]*E[D];t.update(_,n,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function YP(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:Dt("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function KP(i,e,t){const n=new WeakMap,s=new tn;function o(l,u,h){const f=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let g=n.get(u);if(g===void 0||g.count!==p){let T=function(){F.dispose(),n.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),v===!0&&(I=3);let O=u.attributes.position.count*I,B=1;O>e.maxTextureSize&&(B=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const C=new Float32Array(O*B*4*p),F=new wx(C,O,B,p);F.type=ki,F.needsUpdate=!0;const S=I*4;for(let L=0;L<p;L++){const W=_[L],X=D[L],ie=U[L],re=O*B*4*L;for(let ee=0;ee<W.count;ee++){const $=ee*S;M===!0&&(s.fromBufferAttribute(W,ee),C[re+$+0]=s.x,C[re+$+1]=s.y,C[re+$+2]=s.z,C[re+$+3]=0),E===!0&&(s.fromBufferAttribute(X,ee),C[re+$+4]=s.x,C[re+$+5]=s.y,C[re+$+6]=s.z,C[re+$+7]=0),v===!0&&(s.fromBufferAttribute(ie,ee),C[re+$+8]=s.x,C[re+$+9]=s.y,C[re+$+10]=s.z,C[re+$+11]=ie.itemSize===4?s.w:1)}}g={count:p,texture:F,size:new je(O,B)},n.set(u,g),u.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let M=0;for(let v=0;v<f.length;v++)M+=f[v];const E=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:o}}function jP(i,e,t,n){let s=new WeakMap;function o(h){const f=n.render.frame,m=h.geometry,p=e.get(h,m);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return p}function l(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}const $P={[$d]:"LINEAR_TONE_MAPPING",[Zd]:"REINHARD_TONE_MAPPING",[Jd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[tp]:"AGX_TONE_MAPPING",[np]:"NEUTRAL_TONE_MAPPING",[ep]:"CUSTOM_TONE_MAPPING"};function ZP(i,e,t,n,s){const o=new gn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),l=new gn(e,t,{type:In,depthBuffer:!1,stencilBuffer:!1}),u=new wn;u.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new un([0,2,0,0,2,0],2));const h=new Bx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Sn(u,h),m=new Sp(-1,1,1,-1,0,1);let p=null,g=null,x=!1,M,E=null,v=[],_=!1;this.setSize=function(D,U){o.setSize(D,U),l.setSize(D,U);for(let I=0;I<v.length;I++){const O=v[I];O.setSize&&O.setSize(D,U)}},this.setEffects=function(D){v=D,_=v.length>0&&v[0].isRenderPass===!0;const U=o.width,I=o.height;for(let O=0;O<v.length;O++){const B=v[O];B.setSize&&B.setSize(U,I)}},this.begin=function(D,U){if(x||D.toneMapping===Gi&&v.length===0)return!1;if(E=U,U!==null){const I=U.width,O=U.height;(o.width!==I||o.height!==O)&&this.setSize(I,O)}return _===!1&&D.setRenderTarget(o),M=D.toneMapping,D.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(D,U){D.toneMapping=M,x=!0;let I=o,O=l;for(let B=0;B<v.length;B++){const C=v[B];if(C.enabled!==!1&&(C.render(D,O,I,U),C.needsSwap!==!1)){const F=I;I=O,O=F}}if(p!==D.outputColorSpace||g!==D.toneMapping){p=D.outputColorSpace,g=D.toneMapping,h.defines={},Ct.getTransfer(p)===Bt&&(h.defines.SRGB_TRANSFER="");const B=$P[g];B&&(h.defines[B]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,D.setRenderTarget(E),D.render(f,m),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l.dispose(),u.dispose(),h.dispose()}}const Hx=new On,zd=new $a(1,1),Vx=new wx,Wx=new mw,qx=new Ux,Og=[],Ng=[],Fg=new Float32Array(16),Bg=new Float32Array(9),kg=new Float32Array(4);function ra(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=Og[s];if(o===void 0&&(o=new Float32Array(s),Og[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kl(i,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function JP(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QP(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function eD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function tD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function nD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;kg.set(n),i.uniformMatrix2fv(this.addr,!1,kg),fn(t,n)}}function iD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Bg.set(n),i.uniformMatrix3fv(this.addr,!1,Bg),fn(t,n)}}function rD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Fg.set(n),i.uniformMatrix4fv(this.addr,!1,Fg),fn(t,n)}}function sD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function oD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function lD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function cD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function hD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function fD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function dD(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=t.isReversedDepthBuffer()?up:cp,o=zd):o=Hx,t.setTexture2D(e||o,s)}function pD(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wx,s)}function mD(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||qx,s)}function _D(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vx,s)}function gD(i){switch(i){case 5126:return JP;case 35664:return QP;case 35665:return eD;case 35666:return tD;case 35674:return nD;case 35675:return iD;case 35676:return rD;case 5124:case 35670:return sD;case 35667:case 35671:return aD;case 35668:case 35672:return oD;case 35669:case 35673:return lD;case 5125:return cD;case 36294:return uD;case 36295:return hD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return pD;case 35680:case 36300:case 36308:case 36293:return mD;case 36289:case 36303:case 36311:case 36292:return _D}}function vD(i,e){i.uniform1fv(this.addr,e)}function xD(i,e){const t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function SD(i,e){const t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function yD(i,e){const t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function bD(i,e){const t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function MD(i,e){const t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ED(i,e){const t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function TD(i,e){i.uniform1iv(this.addr,e)}function AD(i,e){i.uniform2iv(this.addr,e)}function wD(i,e){i.uniform3iv(this.addr,e)}function CD(i,e){i.uniform4iv(this.addr,e)}function RD(i,e){i.uniform1uiv(this.addr,e)}function PD(i,e){i.uniform2uiv(this.addr,e)}function DD(i,e){i.uniform3uiv(this.addr,e)}function LD(i,e){i.uniform4uiv(this.addr,e)}function ID(i,e,t){const n=this.cache,s=e.length,o=Kl(t,s);hn(n,o)||(i.uniform1iv(this.addr,o),fn(n,o));let l;this.type===i.SAMPLER_2D_SHADOW?l=zd:l=Hx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||l,o[u])}function UD(i,e,t){const n=this.cache,s=e.length,o=Kl(t,s);hn(n,o)||(i.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Wx,o[l])}function OD(i,e,t){const n=this.cache,s=e.length,o=Kl(t,s);hn(n,o)||(i.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||qx,o[l])}function ND(i,e,t){const n=this.cache,s=e.length,o=Kl(t,s);hn(n,o)||(i.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Vx,o[l])}function FD(i){switch(i){case 5126:return vD;case 35664:return xD;case 35665:return SD;case 35666:return yD;case 35674:return bD;case 35675:return MD;case 35676:return ED;case 5124:case 35670:return TD;case 35667:case 35671:return AD;case 35668:case 35672:return wD;case 35669:case 35673:return CD;case 5125:return RD;case 36294:return PD;case 36295:return DD;case 36296:return LD;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return OD;case 36289:case 36303:case 36311:case 36292:return ND}}class BD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gD(t.type)}}class kD{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FD(t.type)}}class zD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function zg(i,e){i.seq.push(e),i.map[e.id]=e}function GD(i,e,t){const n=i.name,s=n.length;for(Wu.lastIndex=0;;){const o=Wu.exec(n),l=Wu.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&l+2===s){zg(t,f===void 0?new BD(u,i,e):new kD(u,i,e));break}else{let p=t.map[u];p===void 0&&(p=new zD(u),zg(t,p)),t=p}}}class Ll{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l),h=e.getUniformLocation(t,u.name);GD(u,h,this)}const s=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Gg(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const HD=37297;let VD=0;function WD(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const Hg=new mt;function qD(i){Ct._getMatrix(Hg,Ct.workingColorSpace,i);const e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case Ol:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vg(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+WD(i.getShaderSource(e),u)}else return o}function XD(i,e){const t=qD(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YD={[$d]:"Linear",[Zd]:"Reinhard",[Jd]:"Cineon",[Qd]:"ACESFilmic",[tp]:"AgX",[np]:"Neutral",[ep]:"Custom"};function KD(i,e){const t=YD[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sl=new G;function jD(){Ct.getLuminanceCoefficients(Sl);const i=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $D(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function ZD(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JD(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Na(i){return i!==""}function Wg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(i){return i.replace(QD,tL)}const eL=new Map;function tL(i,e){let t=gt[e];if(t===void 0){const n=eL.get(e);if(n!==void 0)t=gt[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gd(t)}const nL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xg(i){return i.replace(nL,iL)}function iL(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Yg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rL={[Al]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function sL(i){return rL[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aL={[as]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[Vl]:"ENVMAP_TYPE_CUBE_UV"};function oL(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aL[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lL={[ea]:"ENVMAP_MODE_REFRACTION"};function cL(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lL[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uL={[jd]:"ENVMAP_BLENDING_MULTIPLY",[K1]:"ENVMAP_BLENDING_MIX",[j1]:"ENVMAP_BLENDING_ADD"};function hL(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uL[i.combine]||"ENVMAP_BLENDING_NONE"}function fL(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dL(i,e,t,n){const s=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const h=sL(t),f=oL(t),m=cL(t),p=hL(t),g=fL(t),x=$D(t),M=ZD(o),E=s.createProgram();let v,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Na).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Na).join(`
`),_.length>0&&(_+=`
`)):(v=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),_=[Yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?KD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,XD("linearToOutputTexel",t.outputColorSpace),jD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),l=Gd(l),l=Wg(l,t),l=qg(l,t),u=Gd(u),u=Wg(u,t),u=qg(u,t),l=Xg(l),u=Xg(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=D+v+l,I=D+_+u,O=Gg(s,s.VERTEX_SHADER,U),B=Gg(s,s.FRAGMENT_SHADER,I);s.attachShader(E,O),s.attachShader(E,B),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function C(L){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(O)||"",ie=s.getShaderInfoLog(B)||"",re=W.trim(),ee=X.trim(),$=ie.trim();let oe=!0,Ae=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,O,B);else{const ye=Vg(s,O,"vertex"),Me=Vg(s,B,"fragment");Dt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+re+`
`+ye+`
`+Me)}else re!==""?it("WebGLProgram: Program Info Log:",re):(ee===""||$==="")&&(Ae=!1);Ae&&(L.diagnostics={runnable:oe,programLog:re,vertexShader:{log:ee,prefix:v},fragmentShader:{log:$,prefix:_}})}s.deleteShader(O),s.deleteShader(B),F=new Ll(s,E),S=JD(s,E)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(E,HD)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VD++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=B,this}let pL=0;class mL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _L(e),t.set(e,n)),n}}class _L{constructor(e){this.id=pL++,this.code=e,this.usedTimes=0}}function gL(i,e,t,n,s,o,l){const u=new Cx,h=new mL,f=new Set,m=[],p=new Map,g=s.logarithmicDepthBuffer;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return f.add(S),S===0?"uv":`uv${S}`}function v(S,T,L,W,X){const ie=W.fog,re=X.geometry,ee=S.isMeshStandardMaterial?W.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),oe=$&&$.mapping===Vl?$.image.height:null,Ae=M[S.type];S.precision!==null&&(x=s.getMaxPrecision(S.precision),x!==S.precision&&it("WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Me=ye!==void 0?ye.length:0;let ut=0;re.morphAttributes.position!==void 0&&(ut=1),re.morphAttributes.normal!==void 0&&(ut=2),re.morphAttributes.color!==void 0&&(ut=3);let at,Ht,wt,le;if(Ae){const Lt=Bi[Ae];at=Lt.vertexShader,Ht=Lt.fragmentShader}else at=S.vertexShader,Ht=S.fragmentShader,h.update(S),wt=h.getVertexShaderID(S),le=h.getFragmentShaderID(S);const _e=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),et=X.isInstancedMesh===!0,ze=X.isBatchedMesh===!0,vt=!!S.map,Xt=!!S.matcap,St=!!$,ot=!!S.aoMap,He=!!S.lightMap,tt=!!S.bumpMap,Ve=!!S.normalMap,k=!!S.displacementMap,kt=!!S.emissiveMap,yt=!!S.metalnessMap,lt=!!S.roughnessMap,Pe=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,H=S.iridescence>0,ae=S.sheen>0,ue=S.transmission>0,te=Pe&&!!S.anisotropyMap,Be=P&&!!S.clearcoatMap,Se=P&&!!S.clearcoatNormalMap,Ne=P&&!!S.clearcoatRoughnessMap,Ke=H&&!!S.iridescenceMap,pe=H&&!!S.iridescenceThicknessMap,ve=ae&&!!S.sheenColorMap,Fe=ae&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,be=!!S.specularColorMap,ft=!!S.specularIntensityMap,V=ue&&!!S.transmissionMap,De=ue&&!!S.thicknessMap,xe=!!S.gradientMap,Ie=!!S.alphaMap,ge=S.alphaTest>0,fe=!!S.alphaHash,Ee=!!S.extensions;let nt=Gi;S.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(nt=i.toneMapping);const zt={shaderID:Ae,shaderType:S.type,shaderName:S.name,vertexShader:at,fragmentShader:Ht,defines:S.defines,customVertexShaderID:wt,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:ze,batchingColor:ze&&X._colorsTexture!==null,instancing:et,instancingColor:et&&X.instanceColor!==null,instancingMorph:et&&X.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:na,alphaToCoverage:!!S.alphaToCoverage,map:vt,matcap:Xt,envMap:St,envMapMode:St&&$.mapping,envMapCubeUVHeight:oe,aoMap:ot,lightMap:He,bumpMap:tt,normalMap:Ve,displacementMap:k,emissiveMap:kt,normalMapObjectSpace:Ve&&S.normalMapType===Q1,normalMapTangentSpace:Ve&&S.normalMapType===Tx,metalnessMap:yt,roughnessMap:lt,anisotropy:Pe,anisotropyMap:te,clearcoat:P,clearcoatMap:Be,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:H,iridescenceMap:Ke,iridescenceThicknessMap:pe,sheen:ae,sheenColorMap:ve,sheenRoughnessMap:Fe,specularMap:Ge,specularColorMap:be,specularIntensityMap:ft,transmission:ue,transmissionMap:V,thicknessMap:De,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:fe,combine:S.combine,mapUv:vt&&E(S.map.channel),aoMapUv:ot&&E(S.aoMap.channel),lightMapUv:He&&E(S.lightMap.channel),bumpMapUv:tt&&E(S.bumpMap.channel),normalMapUv:Ve&&E(S.normalMap.channel),displacementMapUv:k&&E(S.displacementMap.channel),emissiveMapUv:kt&&E(S.emissiveMap.channel),metalnessMapUv:yt&&E(S.metalnessMap.channel),roughnessMapUv:lt&&E(S.roughnessMap.channel),anisotropyMapUv:te&&E(S.anisotropyMap.channel),clearcoatMapUv:Be&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&E(S.sheenRoughnessMap.channel),specularMapUv:Ge&&E(S.specularMap.channel),specularColorMapUv:be&&E(S.specularColorMap.channel),specularIntensityMapUv:ft&&E(S.specularIntensityMap.channel),transmissionMapUv:V&&E(S.transmissionMap.channel),thicknessMapUv:De&&E(S.thicknessMap.channel),alphaMapUv:Ie&&E(S.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ve||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!re.attributes.uv&&(vt||Ie),fog:!!ie,useFog:S.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:vt&&S.map.isVideoTexture===!0&&Ct.getTransfer(S.map.colorSpace)===Bt,decodeVideoTextureEmissive:kt&&S.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(S.emissiveMap.colorSpace)===Bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mi,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return zt.vertexUv1s=f.has(1),zt.vertexUv2s=f.has(2),zt.vertexUv3s=f.has(3),f.clear(),zt}function _(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)T.push(L),T.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(D(T,S),U(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function D(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function U(S,T){u.disableAll(),T.instancing&&u.enable(0),T.instancingColor&&u.enable(1),T.instancingMorph&&u.enable(2),T.matcap&&u.enable(3),T.envMap&&u.enable(4),T.normalMapObjectSpace&&u.enable(5),T.normalMapTangentSpace&&u.enable(6),T.clearcoat&&u.enable(7),T.iridescence&&u.enable(8),T.alphaTest&&u.enable(9),T.vertexColors&&u.enable(10),T.vertexAlphas&&u.enable(11),T.vertexUv1s&&u.enable(12),T.vertexUv2s&&u.enable(13),T.vertexUv3s&&u.enable(14),T.vertexTangents&&u.enable(15),T.anisotropy&&u.enable(16),T.alphaHash&&u.enable(17),T.batching&&u.enable(18),T.dispersion&&u.enable(19),T.batchingColor&&u.enable(20),T.gradientMap&&u.enable(21),S.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reversedDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),S.push(u.mask)}function I(S){const T=M[S.type];let L;if(T){const W=Bi[T];L=ql.clone(W.uniforms)}else L=S.uniforms;return L}function O(S,T){let L=p.get(T);return L!==void 0?++L.usedTimes:(L=new dL(i,T,S,o),m.push(L),p.set(T,L)),L}function B(S){if(--S.usedTimes===0){const T=m.indexOf(S);m[T]=m[m.length-1],m.pop(),p.delete(S.cacheKey),S.destroy()}}function C(S){h.remove(S)}function F(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:I,acquireProgram:O,releaseProgram:B,releaseShaderCache:C,programs:m,dispose:F}}function vL(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function s(l,u,h){i.get(l)[u]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function xL(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jg(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(p,g,x,M,E,v){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:g,material:x,groupOrder:M,renderOrder:p.renderOrder,z:E,group:v},i[e]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=x,_.groupOrder=M,_.renderOrder=p.renderOrder,_.z=E,_.group=v),e++,_}function u(p,g,x,M,E,v){const _=l(p,g,x,M,E,v);x.transmission>0?n.push(_):x.transparent===!0?s.push(_):t.push(_)}function h(p,g,x,M,E,v){const _=l(p,g,x,M,E,v);x.transmission>0?n.unshift(_):x.transparent===!0?s.unshift(_):t.unshift(_)}function f(p,g){t.length>1&&t.sort(p||xL),n.length>1&&n.sort(g||Kg),s.length>1&&s.sort(g||Kg)}function m(){for(let p=e,g=i.length;p<g;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:u,unshift:h,finish:m,sort:f}}function SL(){let i=new WeakMap;function e(n,s){const o=i.get(n);let l;return o===void 0?(l=new jg,i.set(n,[l])):s>=o.length?(l=new jg,o.push(l)):l=o[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function yL(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new st};break;case"SpotLight":t={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function bL(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ML=0;function EL(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TL(i){const e=new yL,t=bL(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new G);const s=new G,o=new jt,l=new jt;function u(f){let m=0,p=0,g=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let x=0,M=0,E=0,v=0,_=0,D=0,U=0,I=0,O=0,B=0,C=0;f.sort(EL);for(let S=0,T=f.length;S<T;S++){const L=f[S],W=L.color,X=L.intensity,ie=L.distance;let re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ta?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)m+=W.r*X,p+=W.g*X,g+=W.b*X;else if(L.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(L.sh.coefficients[ee],X);C++}else if(L.isDirectionalLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,oe=t.get(L);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,n.directionalShadow[x]=oe,n.directionalShadowMap[x]=re,n.directionalShadowMatrix[x]=L.shadow.matrix,D++}n.directional[x]=ee,x++}else if(L.isSpotLight){const ee=e.get(L);ee.position.setFromMatrixPosition(L.matrixWorld),ee.color.copy(W).multiplyScalar(X),ee.distance=ie,ee.coneCos=Math.cos(L.angle),ee.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ee.decay=L.decay,n.spot[E]=ee;const $=L.shadow;if(L.map&&(n.spotLightMap[O]=L.map,O++,$.updateMatrices(L),L.castShadow&&B++),n.spotLightMatrix[E]=$.matrix,L.castShadow){const oe=t.get(L);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,n.spotShadow[E]=oe,n.spotShadowMap[E]=re,I++}E++}else if(L.isRectAreaLight){const ee=e.get(L);ee.color.copy(W).multiplyScalar(X),ee.halfWidth.set(L.width*.5,0,0),ee.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=ee,v++}else if(L.isPointLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),ee.distance=L.distance,ee.decay=L.decay,L.castShadow){const $=L.shadow,oe=t.get(L);oe.shadowIntensity=$.intensity,oe.shadowBias=$.bias,oe.shadowNormalBias=$.normalBias,oe.shadowRadius=$.radius,oe.shadowMapSize=$.mapSize,oe.shadowCameraNear=$.camera.near,oe.shadowCameraFar=$.camera.far,n.pointShadow[M]=oe,n.pointShadowMap[M]=re,n.pointShadowMatrix[M]=L.shadow.matrix,U++}n.point[M]=ee,M++}else if(L.isHemisphereLight){const ee=e.get(L);ee.skyColor.copy(L.color).multiplyScalar(X),ee.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[_]=ee,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==x||F.pointLength!==M||F.spotLength!==E||F.rectAreaLength!==v||F.hemiLength!==_||F.numDirectionalShadows!==D||F.numPointShadows!==U||F.numSpotShadows!==I||F.numSpotMaps!==O||F.numLightProbes!==C)&&(n.directional.length=x,n.spot.length=E,n.rectArea.length=v,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=I+O-B,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=C,F.directionalLength=x,F.pointLength=M,F.spotLength=E,F.rectAreaLength=v,F.hemiLength=_,F.numDirectionalShadows=D,F.numPointShadows=U,F.numSpotShadows=I,F.numSpotMaps=O,F.numLightProbes=C,n.version=ML++)}function h(f,m){let p=0,g=0,x=0,M=0,E=0;const v=m.matrixWorldInverse;for(let _=0,D=f.length;_<D;_++){const U=f[_];if(U.isDirectionalLight){const I=n.directional[p];I.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),p++}else if(U.isSpotLight){const I=n.spot[x];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),I.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(v),x++}else if(U.isRectAreaLight){const I=n.rectArea[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),l.identity(),o.copy(U.matrixWorld),o.premultiply(v),l.extractRotation(o),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),M++}else if(U.isPointLight){const I=n.point[g];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(v),g++}else if(U.isHemisphereLight){const I=n.hemi[E];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(v),E++}}}return{setup:u,setupView:h,state:n}}function $g(i){const e=new TL(i),t=[],n=[];function s(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function u(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function AL(i){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new $g(i),e.set(s,[u])):o>=l.length?(u=new $g(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const wL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CL=`uniform sampler2D shadow_pass;
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
}`,RL=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],PL=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Zg=new jt,La=new G,qu=new G;function DL(i,e,t){let n=new fp;const s=new je,o=new je,l=new tn,u=new kx,h=new zw,f={},m=t.maxTextureSize,p={[Ur]:en,[en]:Ur,[mi]:mi},g=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:wL,fragmentShader:CL}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new wn;M.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Sn(M,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let _=this.type;this.render=function(B,C,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;B.type===R1&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Al);const S=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(_i),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=_!==this.type;X&&C.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(re=>re.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,re=B.length;ie<re;ie++){const ee=B[ie],$=ee.shadow;if($===void 0){it("WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const oe=$.getFrameExtents();if(s.multiply(oe),o.copy($.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/oe.x),s.x=o.x*oe.x,$.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/oe.y),s.y=o.y*oe.y,$.mapSize.y=o.y)),$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Oa){if(ee.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new gn(s.x,s.y,{format:ta,type:In,minFilter:Un,magFilter:Un,generateMipmaps:!1}),$.map.texture.name=ee.name+".shadowMap",$.map.depthTexture=new $a(s.x,s.y,ki),$.map.depthTexture.name=ee.name+".shadowMapDepth",$.map.depthTexture.format=cr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Tn,$.map.depthTexture.magFilter=Tn}else{ee.isPointLight?($.map=new Ox(s.x),$.map.depthTexture=new Bw(s.x,Hi)):($.map=new gn(s.x,s.y),$.map.depthTexture=new $a(s.x,s.y,Hi)),$.map.depthTexture.name=ee.name+".shadowMap",$.map.depthTexture.format=cr;const ye=i.state.buffers.depth.getReversed();this.type===Al?($.map.depthTexture.compareFunction=ye?up:cp,$.map.depthTexture.minFilter=Un,$.map.depthTexture.magFilter=Un):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Tn,$.map.depthTexture.magFilter=Tn)}$.camera.updateProjectionMatrix()}const Ae=$.map.isWebGLCubeRenderTarget?6:1;for(let ye=0;ye<Ae;ye++){if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ye),i.clear();else{ye===0&&(i.setRenderTarget($.map),i.clear());const Me=$.getViewport(ye);l.set(o.x*Me.x,o.y*Me.y,o.x*Me.z,o.y*Me.w),W.viewport(l)}if(ee.isPointLight){const Me=$.camera,ut=$.matrix,at=ee.distance||Me.far;at!==Me.far&&(Me.far=at,Me.updateProjectionMatrix()),La.setFromMatrixPosition(ee.matrixWorld),Me.position.copy(La),qu.copy(Me.position),qu.add(RL[ye]),Me.up.copy(PL[ye]),Me.lookAt(qu),Me.updateMatrixWorld(),ut.makeTranslation(-La.x,-La.y,-La.z),Zg.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Zg,Me.coordinateSystem,Me.reversedDepth)}else $.updateMatrices(ee);n=$.getFrustum(),I(C,F,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Oa&&D($,F),$.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(S,T,L)};function D(B,C){const F=e.update(E);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new gn(s.x,s.y,{format:ta,type:In})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(C,null,F,g,E,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(C,null,F,x,E,null)}function U(B,C,F,S){let T=null;const L=F.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(L!==void 0)T=L;else if(T=F.isPointLight===!0?h:u,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const W=T.uuid,X=C.uuid;let ie=f[W];ie===void 0&&(ie={},f[W]=ie);let re=ie[X];re===void 0&&(re=T.clone(),ie[X]=re,C.addEventListener("dispose",O)),T=re}if(T.visible=C.visible,T.wireframe=C.wireframe,S===Oa?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:p[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=i.properties.get(T);W.light=F}return T}function I(B,C,F,S,T){if(B.visible===!1)return;if(B.layers.test(C.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===Oa)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,B.matrixWorld);const X=e.update(B),ie=B.material;if(Array.isArray(ie)){const re=X.groups;for(let ee=0,$=re.length;ee<$;ee++){const oe=re[ee],Ae=ie[oe.materialIndex];if(Ae&&Ae.visible){const ye=U(B,Ae,S,T);B.onBeforeShadow(i,B,C,F,X,ye,oe),i.renderBufferDirect(F,null,X,ye,B,oe),B.onAfterShadow(i,B,C,F,X,ye,oe)}}}else if(ie.visible){const re=U(B,ie,S,T);B.onBeforeShadow(i,B,C,F,X,re,null),i.renderBufferDirect(F,null,X,re,B,null),B.onAfterShadow(i,B,C,F,X,re,null)}}const W=B.children;for(let X=0,ie=W.length;X<ie;X++)I(W[X],C,F,S,T)}function O(B){B.target.removeEventListener("dispose",O);for(const F in f){const S=f[F],T=B.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const LL={[jf]:$f,[Zf]:ed,[Jf]:td,[Qs]:Qf,[$f]:jf,[ed]:Zf,[td]:Jf,[Qf]:Qs};function IL(i,e){function t(){let V=!1;const De=new tn;let xe=null;const Ie=new tn(0,0,0,0);return{setMask:function(ge){xe!==ge&&!V&&(i.colorMask(ge,ge,ge,ge),xe=ge)},setLocked:function(ge){V=ge},setClear:function(ge,fe,Ee,nt,zt){zt===!0&&(ge*=nt,fe*=nt,Ee*=nt),De.set(ge,fe,Ee,nt),Ie.equals(De)===!1&&(i.clearColor(ge,fe,Ee,nt),Ie.copy(De))},reset:function(){V=!1,xe=null,Ie.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,xe=null,Ie=null,ge=null;return{setReversed:function(fe){if(De!==fe){const Ee=e.get("EXT_clip_control");fe?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),De=fe;const nt=ge;ge=null,this.setClear(nt)}},getReversed:function(){return De},setTest:function(fe){fe?_e(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(fe){xe!==fe&&!V&&(i.depthMask(fe),xe=fe)},setFunc:function(fe){if(De&&(fe=LL[fe]),Ie!==fe){switch(fe){case jf:i.depthFunc(i.NEVER);break;case $f:i.depthFunc(i.ALWAYS);break;case Zf:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Jf:i.depthFunc(i.EQUAL);break;case Qf:i.depthFunc(i.GEQUAL);break;case ed:i.depthFunc(i.GREATER);break;case td:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=fe}},setLocked:function(fe){V=fe},setClear:function(fe){ge!==fe&&(De&&(fe=1-fe),i.clearDepth(fe),ge=fe)},reset:function(){V=!1,xe=null,Ie=null,ge=null,De=!1}}}function s(){let V=!1,De=null,xe=null,Ie=null,ge=null,fe=null,Ee=null,nt=null,zt=null;return{setTest:function(Lt){V||(Lt?_e(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Lt){De!==Lt&&!V&&(i.stencilMask(Lt),De=Lt)},setFunc:function(Lt,ri,gi){(xe!==Lt||Ie!==ri||ge!==gi)&&(i.stencilFunc(Lt,ri,gi),xe=Lt,Ie=ri,ge=gi)},setOp:function(Lt,ri,gi){(fe!==Lt||Ee!==ri||nt!==gi)&&(i.stencilOp(Lt,ri,gi),fe=Lt,Ee=ri,nt=gi)},setLocked:function(Lt){V=Lt},setClear:function(Lt){zt!==Lt&&(i.clearStencil(Lt),zt=Lt)},reset:function(){V=!1,De=null,xe=null,Ie=null,ge=null,fe=null,Ee=null,nt=null,zt=null}}}const o=new t,l=new n,u=new s,h=new WeakMap,f=new WeakMap;let m={},p={},g=new WeakMap,x=[],M=null,E=!1,v=null,_=null,D=null,U=null,I=null,O=null,B=null,C=new st(0,0,0),F=0,S=!1,T=null,L=null,W=null,X=null,ie=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ee=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ee=$>=2);let Ae=null,ye={};const Me=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),at=new tn().fromArray(Me),Ht=new tn().fromArray(ut);function wt(V,De,xe,Ie){const ge=new Uint8Array(4),fe=i.createTexture();i.bindTexture(V,fe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<xe;Ee++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(De+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return fe}const le={};le[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(i.DEPTH_TEST),l.setFunc(Qs),tt(!1),Ve($_),_e(i.CULL_FACE),ot(_i);function _e(V){m[V]!==!0&&(i.enable(V),m[V]=!0)}function Le(V){m[V]!==!1&&(i.disable(V),m[V]=!1)}function et(V,De){return p[V]!==De?(i.bindFramebuffer(V,De),p[V]=De,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=De),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=De),!0):!1}function ze(V,De){let xe=x,Ie=!1;if(V){xe=g.get(De),xe===void 0&&(xe=[],g.set(De,xe));const ge=V.textures;if(xe.length!==ge.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ee=ge.length;fe<Ee;fe++)xe[fe]=i.COLOR_ATTACHMENT0+fe;xe.length=ge.length,Ie=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(xe)}function vt(V){return M!==V?(i.useProgram(V),M=V,!0):!1}const Xt={[ns]:i.FUNC_ADD,[D1]:i.FUNC_SUBTRACT,[L1]:i.FUNC_REVERSE_SUBTRACT};Xt[I1]=i.MIN,Xt[U1]=i.MAX;const St={[O1]:i.ZERO,[N1]:i.ONE,[F1]:i.SRC_COLOR,[Yf]:i.SRC_ALPHA,[V1]:i.SRC_ALPHA_SATURATE,[G1]:i.DST_COLOR,[k1]:i.DST_ALPHA,[B1]:i.ONE_MINUS_SRC_COLOR,[Kf]:i.ONE_MINUS_SRC_ALPHA,[H1]:i.ONE_MINUS_DST_COLOR,[z1]:i.ONE_MINUS_DST_ALPHA,[W1]:i.CONSTANT_COLOR,[q1]:i.ONE_MINUS_CONSTANT_COLOR,[X1]:i.CONSTANT_ALPHA,[Y1]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(V,De,xe,Ie,ge,fe,Ee,nt,zt,Lt){if(V===_i){E===!0&&(Le(i.BLEND),E=!1);return}if(E===!1&&(_e(i.BLEND),E=!0),V!==P1){if(V!==v||Lt!==S){if((_!==ns||I!==ns)&&(i.blendEquation(i.FUNC_ADD),_=ns,I=ns),Lt)switch(V){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFunc(i.ONE,i.ONE);break;case Z_:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case J_:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",V);break}else switch(V){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Z_:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",V);break}D=null,U=null,O=null,B=null,C.set(0,0,0),F=0,v=V,S=Lt}return}ge=ge||De,fe=fe||xe,Ee=Ee||Ie,(De!==_||ge!==I)&&(i.blendEquationSeparate(Xt[De],Xt[ge]),_=De,I=ge),(xe!==D||Ie!==U||fe!==O||Ee!==B)&&(i.blendFuncSeparate(St[xe],St[Ie],St[fe],St[Ee]),D=xe,U=Ie,O=fe,B=Ee),(nt.equals(C)===!1||zt!==F)&&(i.blendColor(nt.r,nt.g,nt.b,zt),C.copy(nt),F=zt),v=V,S=!1}function He(V,De){V.side===mi?Le(i.CULL_FACE):_e(i.CULL_FACE);let xe=V.side===en;De&&(xe=!xe),tt(xe),V.blending===Zs&&V.transparent===!1?ot(_i):ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const Ie=V.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function Ve(V){V!==w1?(_e(i.CULL_FACE),V!==L&&(V===$_?i.cullFace(i.BACK):V===C1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),L=V}function k(V){V!==W&&(ee&&i.lineWidth(V),W=V)}function kt(V,De,xe){V?(_e(i.POLYGON_OFFSET_FILL),(X!==De||ie!==xe)&&(i.polygonOffset(De,xe),X=De,ie=xe)):Le(i.POLYGON_OFFSET_FILL)}function yt(V){V?_e(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function lt(V){V===void 0&&(V=i.TEXTURE0+re-1),Ae!==V&&(i.activeTexture(V),Ae=V)}function Pe(V,De,xe){xe===void 0&&(Ae===null?xe=i.TEXTURE0+re-1:xe=Ae);let Ie=ye[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},ye[xe]=Ie),(Ie.type!==V||Ie.texture!==De)&&(Ae!==xe&&(i.activeTexture(xe),Ae=xe),i.bindTexture(V,De||le[V]),Ie.type=V,Ie.texture=De)}function P(){const V=ye[Ae];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function ae(){try{i.texSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function ue(){try{i.texSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Se(){try{i.texStorage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Ne(){try{i.texStorage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Ke(){try{i.texImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function pe(){try{i.texImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function ve(V){at.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),at.copy(V))}function Fe(V){Ht.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Ht.copy(V))}function Ge(V,De){let xe=f.get(De);xe===void 0&&(xe=new WeakMap,f.set(De,xe));let Ie=xe.get(V);Ie===void 0&&(Ie=i.getUniformBlockIndex(De,V.name),xe.set(V,Ie))}function be(V,De){const Ie=f.get(De).get(V);h.get(De)!==Ie&&(i.uniformBlockBinding(De,Ie,V.__bindingPointIndex),h.set(De,Ie))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Ae=null,ye={},p={},g=new WeakMap,x=[],M=null,E=!1,v=null,_=null,D=null,U=null,I=null,O=null,B=null,C=new st(0,0,0),F=0,S=!1,T=null,L=null,W=null,X=null,ie=null,at.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:_e,disable:Le,bindFramebuffer:et,drawBuffers:ze,useProgram:vt,setBlending:ot,setMaterial:He,setFlipSided:tt,setCullFace:Ve,setLineWidth:k,setPolygonOffset:kt,setScissorTest:yt,activeTexture:lt,bindTexture:Pe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Ke,texImage3D:pe,updateUBOMapping:Ge,uniformBlockBinding:be,texStorage2D:Se,texStorage3D:Ne,texSubImage2D:ae,texSubImage3D:ue,compressedTexSubImage2D:te,compressedTexSubImage3D:Be,scissor:ve,viewport:Fe,reset:ft}}function UL(i,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new je,m=new WeakMap;let p;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,b){return x?new OffscreenCanvas(P,b):Ka("canvas")}function E(P,b,H){let ae=1;const ue=Pe(P);if((ue.width>H||ue.height>H)&&(ae=H/Math.max(ue.width,ue.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ae*ue.width),Be=Math.floor(ae*ue.height);p===void 0&&(p=M(te,Be));const Se=b?M(te,Be):p;return Se.width=te,Se.height=Be,Se.getContext("2d").drawImage(P,0,0,te,Be),it("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+te+"x"+Be+")."),Se}else return"data"in P&&it("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function v(P){return P.generateMipmaps}function _(P){i.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(P,b,H,ae,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=b;if(b===i.RED&&(H===i.FLOAT&&(te=i.R32F),H===i.HALF_FLOAT&&(te=i.R16F),H===i.UNSIGNED_BYTE&&(te=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.R8UI),H===i.UNSIGNED_SHORT&&(te=i.R16UI),H===i.UNSIGNED_INT&&(te=i.R32UI),H===i.BYTE&&(te=i.R8I),H===i.SHORT&&(te=i.R16I),H===i.INT&&(te=i.R32I)),b===i.RG&&(H===i.FLOAT&&(te=i.RG32F),H===i.HALF_FLOAT&&(te=i.RG16F),H===i.UNSIGNED_BYTE&&(te=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RG8UI),H===i.UNSIGNED_SHORT&&(te=i.RG16UI),H===i.UNSIGNED_INT&&(te=i.RG32UI),H===i.BYTE&&(te=i.RG8I),H===i.SHORT&&(te=i.RG16I),H===i.INT&&(te=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGB8UI),H===i.UNSIGNED_SHORT&&(te=i.RGB16UI),H===i.UNSIGNED_INT&&(te=i.RGB32UI),H===i.BYTE&&(te=i.RGB8I),H===i.SHORT&&(te=i.RGB16I),H===i.INT&&(te=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),H===i.UNSIGNED_INT&&(te=i.RGBA32UI),H===i.BYTE&&(te=i.RGBA8I),H===i.SHORT&&(te=i.RGBA16I),H===i.INT&&(te=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),b===i.RGBA){const Be=ue?Ol:Ct.getTransfer(ae);H===i.FLOAT&&(te=i.RGBA32F),H===i.HALF_FLOAT&&(te=i.RGBA16F),H===i.UNSIGNED_BYTE&&(te=Be===Bt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function I(P,b){let H;return P?b===null||b===Hi||b===Ya?H=i.DEPTH24_STENCIL8:b===ki?H=i.DEPTH32F_STENCIL8:b===Xa&&(H=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===Ya?H=i.DEPTH_COMPONENT24:b===ki?H=i.DEPTH_COMPONENT32F:b===Xa&&(H=i.DEPTH_COMPONENT16),H}function O(P,b){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function B(P){const b=P.target;b.removeEventListener("dispose",B),F(b),b.isVideoTexture&&m.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),T(b)}function F(P){const b=n.get(P);if(b.__webglInit===void 0)return;const H=P.source,ae=g.get(H);if(ae){const ue=ae[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(P),Object.keys(ae).length===0&&g.delete(H)}n.remove(P)}function S(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const H=P.source,ae=g.get(H);delete ae[b.__cacheKey],l.memory.textures--}function T(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let ue=0;ue<b.__webglFramebuffer[ae].length;ue++)i.deleteFramebuffer(b.__webglFramebuffer[ae][ue]);else i.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)i.deleteFramebuffer(b.__webglFramebuffer[ae]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=P.textures;for(let ae=0,ue=H.length;ae<ue;ae++){const te=n.get(H[ae]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),l.memory.textures--),n.remove(H[ae])}n.remove(P)}let L=0;function W(){L=0}function X(){const P=L;return P>=s.maxTextures&&it("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function ie(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function re(P,b){const H=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const ae=P.image;if(ae===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{le(H,P,b);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function ee(P,b){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){le(H,P,b);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function $(P,b){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){le(H,P,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function oe(P,b){const H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){_e(H,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const Ae={[rd]:i.REPEAT,[ar]:i.CLAMP_TO_EDGE,[sd]:i.MIRRORED_REPEAT},ye={[Tn]:i.NEAREST,[$1]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[fu]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Me={[ew]:i.NEVER,[sw]:i.ALWAYS,[tw]:i.LESS,[cp]:i.LEQUAL,[nw]:i.EQUAL,[up]:i.GEQUAL,[iw]:i.GREATER,[rw]:i.NOTEQUAL};function ut(P,b){if(b.type===ki&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===fu||b.magFilter===$o||b.magFilter===rs||b.minFilter===Un||b.minFilter===fu||b.minFilter===$o||b.minFilter===rs)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ae[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ae[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ae[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ye[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==$o&&b.minFilter!==rs||b.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function at(P,b){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",B));const ae=b.source;let ue=g.get(ae);ue===void 0&&(ue={},g.set(ae,ue));const te=ie(b);if(te!==P.__cacheKey){ue[te]===void 0&&(ue[te]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,H=!0),ue[te].usedTimes++;const Be=ue[P.__cacheKey];Be!==void 0&&(ue[P.__cacheKey].usedTimes--,Be.usedTimes===0&&S(b)),P.__cacheKey=te,P.__webglTexture=ue[te].texture}return H}function Ht(P,b,H){return Math.floor(Math.floor(P/H)/b)}function wt(P,b,H,ae){const te=P.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,ae,b.data);else{te.sort((pe,ve)=>pe.start-ve.start);let Be=0;for(let pe=1;pe<te.length;pe++){const ve=te[Be],Fe=te[pe],Ge=ve.start+ve.count,be=Ht(Fe.start,b.width,4),ft=Ht(ve.start,b.width,4);Fe.start<=Ge+1&&be===ft&&Ht(Fe.start+Fe.count-1,b.width,4)===be?ve.count=Math.max(ve.count,Fe.start+Fe.count-ve.start):(++Be,te[Be]=Fe)}te.length=Be+1;const Se=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let pe=0,ve=te.length;pe<ve;pe++){const Fe=te[pe],Ge=Math.floor(Fe.start/4),be=Math.ceil(Fe.count/4),ft=Ge%b.width,V=Math.floor(Ge/b.width),De=be,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,ft,V,De,xe,H,ae,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ke)}}function le(P,b,H){let ae=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=i.TEXTURE_3D);const ue=at(P,b),te=b.source;t.bindTexture(ae,P.__webglTexture,i.TEXTURE0+H);const Be=n.get(te);if(te.version!==Be.__version||ue===!0){t.activeTexture(i.TEXTURE0+H);const Se=Ct.getPrimaries(Ct.workingColorSpace),Ne=b.colorSpace===Cr?null:Ct.getPrimaries(b.colorSpace),Ke=b.colorSpace===Cr||Se===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let pe=E(b.image,!1,s.maxTextureSize);pe=lt(b,pe);const ve=o.convert(b.format,b.colorSpace),Fe=o.convert(b.type);let Ge=U(b.internalFormat,ve,Fe,b.colorSpace,b.isVideoTexture);ut(ae,b);let be;const ft=b.mipmaps,V=b.isVideoTexture!==!0,De=Be.__version===void 0||ue===!0,xe=te.dataReady,Ie=O(b,pe);if(b.isDepthTexture)Ge=I(b.format===ss,b.type),De&&(V?t.texStorage2D(i.TEXTURE_2D,1,Ge,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,ve,Fe,null));else if(b.isDataTexture)if(ft.length>0){V&&De&&t.texStorage2D(i.TEXTURE_2D,Ie,Ge,ft[0].width,ft[0].height);for(let ge=0,fe=ft.length;ge<fe;ge++)be=ft[ge],V?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,ve,Fe,be.data):t.texImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,ve,Fe,be.data);b.generateMipmaps=!1}else V?(De&&t.texStorage2D(i.TEXTURE_2D,Ie,Ge,pe.width,pe.height),xe&&wt(b,pe,ve,Fe)):t.texImage2D(i.TEXTURE_2D,0,Ge,pe.width,pe.height,0,ve,Fe,pe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ge,ft[0].width,ft[0].height,pe.depth);for(let ge=0,fe=ft.length;ge<fe;ge++)if(be=ft[ge],b.format!==Ci)if(ve!==null)if(V){if(xe)if(b.layerUpdates.size>0){const Ee=Cg(be.width,be.height,b.format,b.type);for(const nt of b.layerUpdates){const zt=be.data.subarray(nt*Ee/be.data.BYTES_PER_ELEMENT,(nt+1)*Ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,nt,be.width,be.height,1,ve,zt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,pe.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ge,be.width,be.height,pe.depth,0,be.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,pe.depth,ve,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ge,be.width,be.height,pe.depth,0,ve,Fe,be.data)}else{V&&De&&t.texStorage2D(i.TEXTURE_2D,Ie,Ge,ft[0].width,ft[0].height);for(let ge=0,fe=ft.length;ge<fe;ge++)be=ft[ge],b.format!==Ci?ve!==null?V?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,be.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,be.width,be.height,ve,Fe,be.data):t.texImage2D(i.TEXTURE_2D,ge,Ge,be.width,be.height,0,ve,Fe,be.data)}else if(b.isDataArrayTexture)if(V){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Ge,pe.width,pe.height,pe.depth),xe)if(b.layerUpdates.size>0){const ge=Cg(pe.width,pe.height,b.format,b.type);for(const fe of b.layerUpdates){const Ee=pe.data.subarray(fe*ge/pe.data.BYTES_PER_ELEMENT,(fe+1)*ge/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,pe.width,pe.height,1,ve,Fe,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ve,Fe,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,pe.width,pe.height,pe.depth,0,ve,Fe,pe.data);else if(b.isData3DTexture)V?(De&&t.texStorage3D(i.TEXTURE_3D,Ie,Ge,pe.width,pe.height,pe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ve,Fe,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,pe.width,pe.height,pe.depth,0,ve,Fe,pe.data);else if(b.isFramebufferTexture){if(De)if(V)t.texStorage2D(i.TEXTURE_2D,Ie,Ge,pe.width,pe.height);else{let ge=pe.width,fe=pe.height;for(let Ee=0;Ee<Ie;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ge,ge,fe,0,ve,Fe,null),ge>>=1,fe>>=1}}else if(ft.length>0){if(V&&De){const ge=Pe(ft[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Ge,ge.width,ge.height)}for(let ge=0,fe=ft.length;ge<fe;ge++)be=ft[ge],V?xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ve,Fe,be):t.texImage2D(i.TEXTURE_2D,ge,Ge,ve,Fe,be);b.generateMipmaps=!1}else if(V){if(De){const ge=Pe(pe);t.texStorage2D(i.TEXTURE_2D,Ie,Ge,ge.width,ge.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Fe,pe)}else t.texImage2D(i.TEXTURE_2D,0,Ge,ve,Fe,pe);v(b)&&_(ae),Be.__version=te.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _e(P,b,H){if(b.image.length!==6)return;const ae=at(P,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);const te=n.get(ue);if(ue.version!==te.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const Be=Ct.getPrimaries(Ct.workingColorSpace),Se=b.colorSpace===Cr?null:Ct.getPrimaries(b.colorSpace),Ne=b.colorSpace===Cr||Be===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,pe=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let fe=0;fe<6;fe++)!Ke&&!pe?ve[fe]=E(b.image[fe],!0,s.maxCubemapSize):ve[fe]=pe?b.image[fe].image:b.image[fe],ve[fe]=lt(b,ve[fe]);const Fe=ve[0],Ge=o.convert(b.format,b.colorSpace),be=o.convert(b.type),ft=U(b.internalFormat,Ge,be,b.colorSpace),V=b.isVideoTexture!==!0,De=te.__version===void 0||ae===!0,xe=ue.dataReady;let Ie=O(b,Fe);ut(i.TEXTURE_CUBE_MAP,b);let ge;if(Ke){V&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ft,Fe.width,Fe.height);for(let fe=0;fe<6;fe++){ge=ve[fe].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const nt=ge[Ee];b.format!==Ci?Ge!==null?V?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,0,0,nt.width,nt.height,Ge,nt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,ft,nt.width,nt.height,0,nt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,0,0,nt.width,nt.height,Ge,be,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,ft,nt.width,nt.height,0,Ge,be,nt.data)}}}else{if(ge=b.mipmaps,V&&De){ge.length>0&&Ie++;const fe=Pe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(pe){V?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ve[fe].width,ve[fe].height,Ge,be,ve[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,ve[fe].width,ve[fe].height,0,Ge,be,ve[fe].data);for(let Ee=0;Ee<ge.length;Ee++){const zt=ge[Ee].image[fe].image;V?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,0,0,zt.width,zt.height,Ge,be,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,ft,zt.width,zt.height,0,Ge,be,zt.data)}}else{V?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ge,be,ve[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Ge,be,ve[fe]);for(let Ee=0;Ee<ge.length;Ee++){const nt=ge[Ee];V?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,0,0,Ge,be,nt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,ft,Ge,be,nt.image[fe])}}}v(b)&&_(i.TEXTURE_CUBE_MAP),te.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Le(P,b,H,ae,ue,te){const Be=o.convert(H.format,H.colorSpace),Se=o.convert(H.type),Ne=U(H.internalFormat,Be,Se,H.colorSpace),Ke=n.get(b),pe=n.get(H);if(pe.__renderTarget=b,!Ke.__hasExternalTextures){const ve=Math.max(1,b.width>>te),Fe=Math.max(1,b.height>>te);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,te,Ne,ve,Fe,b.depth,0,Be,Se,null):t.texImage2D(ue,te,Ne,ve,Fe,0,Be,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),kt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ue,pe.__webglTexture,0,k(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ue,pe.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(P,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const ae=b.depthTexture,ue=ae&&ae.isDepthTexture?ae.type:null,te=I(b.stencilBuffer,ue),Be=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k(b),te,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,k(b),te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,P)}else{const ae=b.textures;for(let ue=0;ue<ae.length;ue++){const te=ae[ue],Be=o.convert(te.format,te.colorSpace),Se=o.convert(te.type),Ne=U(te.internalFormat,Be,Se,te.colorSpace);kt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k(b),Ne,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,k(b),Ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(P,b,H){const ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=n.get(b.depthTexture);if(ue.__renderTarget=b,(!ue.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),ue.__webglTexture===void 0){ue.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),ut(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ke=o.convert(b.depthTexture.format),pe=o.convert(b.depthTexture.type);let ve;b.depthTexture.format===cr?ve=i.DEPTH_COMPONENT24:b.depthTexture.format===ss&&(ve=i.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ve,b.width,b.height,0,Ke,pe,null)}}else re(b.depthTexture,0);const te=ue.__webglTexture,Be=k(b),Se=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,Ne=b.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===cr)kt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,Se,te,0,Be):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,Se,te,0);else if(b.depthTexture.format===ss)kt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,Se,te,0,Be):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,Se,te,0);else throw new Error("Unknown depthTexture format")}function vt(P){const b=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const ue=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ue)};ae.addEventListener("dispose",ue),b.__depthDisposeCallback=ue}b.__boundDepthTexture=ae}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)ze(b.__webglFramebuffer[ae],P,ae);else{const ae=P.texture.mipmaps;ae&&ae.length>0?ze(b.__webglFramebuffer[0],P,0):ze(b.__webglFramebuffer,P,0)}else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=i.createRenderbuffer(),et(b.__webglDepthbuffer[ae],P,!1);else{const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,te)}}else{const ae=P.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),et(b.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(P,b,H){const ae=n.get(P);b!==void 0&&Le(ae.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&vt(P)}function St(P){const b=P.texture,H=n.get(P),ae=n.get(b);P.addEventListener("dispose",C);const ue=P.textures,te=P.isWebGLCubeRenderTarget===!0,Be=ue.length>1;if(Be||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=b.version,l.memory.textures++),te){H.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Se]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)H.__webglFramebuffer[Se][Ne]=i.createFramebuffer()}else H.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Se=0;Se<b.mipmaps.length;Se++)H.__webglFramebuffer[Se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Be)for(let Se=0,Ne=ue.length;Se<Ne;Se++){const Ke=n.get(ue[Se]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),l.memory.textures++)}if(P.samples>0&&kt(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Se=0;Se<ue.length;Se++){const Ne=ue[Se];H.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Se]);const Ke=o.convert(Ne.format,Ne.colorSpace),pe=o.convert(Ne.type),ve=U(Ne.internalFormat,Ke,pe,Ne.colorSpace,P.isXRRenderTarget===!0),Fe=k(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,H.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),et(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ut(i.TEXTURE_CUBE_MAP,b);for(let Se=0;Se<6;Se++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Le(H.__webglFramebuffer[Se][Ne],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ne);else Le(H.__webglFramebuffer[Se],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Se=0,Ne=ue.length;Se<Ne;Se++){const Ke=ue[Se],pe=n.get(Ke);let ve=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,pe.__webglTexture),ut(ve,Ke),Le(H.__webglFramebuffer,P,Ke,i.COLOR_ATTACHMENT0+Se,ve,0),v(Ke)&&_(ve)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ae.__webglTexture),ut(Se,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Le(H.__webglFramebuffer[Ne],P,b,i.COLOR_ATTACHMENT0,Se,Ne);else Le(H.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,Se,0);v(b)&&_(Se),t.unbindTexture()}P.depthBuffer&&vt(P)}function ot(P){const b=P.textures;for(let H=0,ae=b.length;H<ae;H++){const ue=b[H];if(v(ue)){const te=D(P),Be=n.get(ue).__webglTexture;t.bindTexture(te,Be),_(te),t.unbindTexture()}}}const He=[],tt=[];function Ve(P){if(P.samples>0){if(kt(P)===!1){const b=P.textures,H=P.width,ae=P.height;let ue=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(P),Se=b.length>1;if(Se)for(let Ke=0;Ke<b.length;Ke++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ne=P.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ke=0;Ke<b.length;Ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const pe=n.get(b[Ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,H,ae,0,0,H,ae,ue,i.NEAREST),h===!0&&(He.length=0,tt.length=0,He.push(i.COLOR_ATTACHMENT0+Ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(He.push(te),tt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ke=0;Ke<b.length;Ke++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const pe=n.get(b[Ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function k(P){return Math.min(s.maxSamples,P.samples)}function kt(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(P){const b=l.render.frame;m.get(P)!==b&&(m.set(P,b),P.update())}function lt(P,b){const H=P.colorSpace,ae=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==na&&H!==Cr&&(Ct.getTransfer(H)===Bt?(ae!==Ci||ue!==ni)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",H)),b}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Xt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OL(i,e){function t(n,s=Cr){let o;const l=Ct.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===rp)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sp)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sx)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vx)return i.BYTE;if(n===xx)return i.SHORT;if(n===Xa)return i.UNSIGNED_SHORT;if(n===ip)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===ki)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===bx)return i.ALPHA;if(n===Mx)return i.RGB;if(n===Ci)return i.RGBA;if(n===cr)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Ex)return i.RED;if(n===ap)return i.RED_INTEGER;if(n===ta)return i.RG;if(n===op)return i.RG_INTEGER;if(n===lp)return i.RGBA_INTEGER;if(n===wl||n===Cl||n===Rl||n===Pl)if(l===Bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===wl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===wl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ad||n===od||n===ld||n===cd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ad)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===od)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ld)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ud||n===hd||n===fd||n===dd||n===pd||n===md||n===_d)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ud||n===hd)return l===Bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===fd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===dd)return o.COMPRESSED_R11_EAC;if(n===pd)return o.COMPRESSED_SIGNED_R11_EAC;if(n===md)return o.COMPRESSED_RG11_EAC;if(n===_d)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gd||n===vd||n===xd||n===Sd||n===yd||n===bd||n===Md||n===Ed||n===Td||n===Ad||n===wd||n===Cd||n===Rd||n===Pd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===gd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Md)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ed)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Td)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ad)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pd)return l===Bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dd||n===Ld||n===Id)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Dd)return l===Bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ld)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Id)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ud||n===Od||n===Nd||n===Fd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ud)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const NL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FL=`
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

}`;class BL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:NL,fragmentShader:FL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new Xl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kL extends ls{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",h=1,f=null,m=null,p=null,g=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",v=new BL,_={},D=t.getContextAttributes();let U=null,I=null;const O=[],B=[],C=new je;let F=null;const S=new vn;S.viewport=new tn;const T=new vn;T.viewport=new tn;const L=[S,T],W=new Yw;let X=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let _e=O[le];return _e===void 0&&(_e=new Uu,O[le]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(le){let _e=O[le];return _e===void 0&&(_e=new Uu,O[le]=_e),_e.getGripSpace()},this.getHand=function(le){let _e=O[le];return _e===void 0&&(_e=new Uu,O[le]=_e),_e.getHandSpace()};function re(le){const _e=B.indexOf(le.inputSource);if(_e===-1)return;const Le=O[_e];Le!==void 0&&(Le.update(le.inputSource,le.frame,f||l),Le.dispatchEvent({type:le.type,data:le.inputSource}))}function ee(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",$);for(let le=0;le<O.length;le++){const _e=B[le];_e!==null&&(B[le]=null,O[le].disconnect(_e))}X=null,ie=null,v.reset();for(const le in _)delete _[le];e.setRenderTarget(U),x=null,g=null,p=null,s=null,I=null,wt.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(U=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",$),D.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,et=null,ze=null;D.depth&&(ze=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=D.stencil?ss:cr,et=D.stencil?Ya:Hi);const vt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:o};p=this.getBinding(),g=p.createProjectionLayer(vt),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new gn(g.textureWidth,g.textureHeight,{format:Ci,type:ni,depthTexture:new $a(g.textureWidth,g.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Le={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new gn(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(u),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(le){for(let _e=0;_e<le.removed.length;_e++){const Le=le.removed[_e],et=B.indexOf(Le);et>=0&&(B[et]=null,O[et].disconnect(Le))}for(let _e=0;_e<le.added.length;_e++){const Le=le.added[_e];let et=B.indexOf(Le);if(et===-1){for(let vt=0;vt<O.length;vt++)if(vt>=B.length){B.push(Le),et=vt;break}else if(B[vt]===null){B[vt]=Le,et=vt;break}if(et===-1)break}const ze=O[et];ze&&ze.connect(Le)}}const oe=new G,Ae=new G;function ye(le,_e,Le){oe.setFromMatrixPosition(_e.matrixWorld),Ae.setFromMatrixPosition(Le.matrixWorld);const et=oe.distanceTo(Ae),ze=_e.projectionMatrix.elements,vt=Le.projectionMatrix.elements,Xt=ze[14]/(ze[10]-1),St=ze[14]/(ze[10]+1),ot=(ze[9]+1)/ze[5],He=(ze[9]-1)/ze[5],tt=(ze[8]-1)/ze[0],Ve=(vt[8]+1)/vt[0],k=Xt*tt,kt=Xt*Ve,yt=et/(-tt+Ve),lt=yt*-tt;if(_e.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(lt),le.translateZ(yt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ze[10]===-1)le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Pe=Xt+yt,P=St+yt,b=k-lt,H=kt+(et-lt),ae=ot*St/P*Pe,ue=He*St/P*Pe;le.projectionMatrix.makePerspective(b,H,ae,ue,Pe,P),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Me(le,_e){_e===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(_e.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let _e=le.near,Le=le.far;v.texture!==null&&(v.depthNear>0&&(_e=v.depthNear),v.depthFar>0&&(Le=v.depthFar)),W.near=T.near=S.near=_e,W.far=T.far=S.far=Le,(X!==W.near||ie!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),X=W.near,ie=W.far),W.layers.mask=le.layers.mask|6,S.layers.mask=W.layers.mask&3,T.layers.mask=W.layers.mask&5;const et=le.parent,ze=W.cameras;Me(W,et);for(let vt=0;vt<ze.length;vt++)Me(ze[vt],et);ze.length===2?ye(W,S,T):W.projectionMatrix.copy(S.projectionMatrix),ut(le,W,et)};function ut(le,_e,Le){Le===null?le.matrix.copy(_e.matrixWorld):(le.matrix.copy(Le.matrixWorld),le.matrix.invert(),le.matrix.multiply(_e.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(_e.projectionMatrix),le.projectionMatrixInverse.copy(_e.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Bd*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(W)},this.getCameraTexture=function(le){return _[le]};let at=null;function Ht(le,_e){if(m=_e.getViewerPose(f||l),M=_e,m!==null){const Le=m.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let et=!1;Le.length!==W.cameras.length&&(W.cameras.length=0,et=!0);for(let St=0;St<Le.length;St++){const ot=Le[St];let He=null;if(x!==null)He=x.getViewport(ot);else{const Ve=p.getViewSubImage(g,ot);He=Ve.viewport,St===0&&(e.setRenderTargetTextures(I,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(I))}let tt=L[St];tt===void 0&&(tt=new vn,tt.layers.enable(St),tt.viewport=new tn,L[St]=tt),tt.matrix.fromArray(ot.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ot.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(He.x,He.y,He.width,He.height),St===0&&(W.matrix.copy(tt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),et===!0&&W.cameras.push(tt)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=n.getBinding();const St=p.getDepthInformation(Le[0]);St&&St.isValid&&St.texture&&v.init(St,s.renderState)}if(ze&&ze.includes("camera-access")&&E){e.state.unbindTexture(),p=n.getBinding();for(let St=0;St<Le.length;St++){const ot=Le[St].camera;if(ot){let He=_[ot];He||(He=new Fx,_[ot]=He);const tt=p.getCameraImage(ot);He.sourceTexture=tt}}}}for(let Le=0;Le<O.length;Le++){const et=B[Le],ze=O[Le];et!==null&&ze!==void 0&&ze.update(et,_e,f||l)}at&&at(le,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),M=null}const wt=new Gx;wt.setAnimationLoop(Ht),this.setAnimationLoop=function(le){at=le},this.dispose=function(){}}}const ts=new Vi,zL=new jt;function GL(i,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,Lx(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function s(v,_,D,U,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(v,_):_.isMeshToonMaterial?(o(v,_),p(v,_)):_.isMeshPhongMaterial?(o(v,_),m(v,_)):_.isMeshStandardMaterial?(o(v,_),g(v,_),_.isMeshPhysicalMaterial&&x(v,_,I)):_.isMeshMatcapMaterial?(o(v,_),M(v,_)):_.isMeshDepthMaterial?o(v,_):_.isMeshDistanceMaterial?(o(v,_),E(v,_)):_.isMeshNormalMaterial?o(v,_):_.isLineBasicMaterial?(l(v,_),_.isLineDashedMaterial&&u(v,_)):_.isPointsMaterial?h(v,_,D,U):_.isSpriteMaterial?f(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===en&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===en&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const D=e.get(_),U=D.envMap,I=D.envMapRotation;U&&(v.envMap.value=U,ts.copy(I),ts.x*=-1,ts.y*=-1,ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),v.envMapRotation.value.setFromMatrix4(zL.makeRotationFromEuler(ts)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function l(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function u(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,D,U){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*D,v.scale.value=U*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function f(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function p(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function g(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function x(v,_,D){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===en&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,_){_.matcap&&(v.matcap.value=_.matcap)}function E(v,_){const D=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HL(i,e,t,n){let s={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,U){const I=U.program;n.uniformBlockBinding(D,I)}function f(D,U){let I=s[D.id];I===void 0&&(M(D),I=m(D),s[D.id]=I,D.addEventListener("dispose",v));const O=U.program;n.updateUBOMapping(D,O);const B=e.render.frame;o[D.id]!==B&&(g(D),o[D.id]=B)}function m(D){const U=p();D.__bindingPointIndex=U;const I=i.createBuffer(),O=D.__size,B=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,O,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,I),I}function p(){for(let D=0;D<u;D++)if(l.indexOf(D)===-1)return l.push(D),D;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const U=s[D.id],I=D.uniforms,O=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let B=0,C=I.length;B<C;B++){const F=Array.isArray(I[B])?I[B]:[I[B]];for(let S=0,T=F.length;S<T;S++){const L=F[S];if(x(L,B,S,O)===!0){const W=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let ie=0;for(let re=0;re<X.length;re++){const ee=X[re],$=E(ee);typeof ee=="number"||typeof ee=="boolean"?(L.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,W+ie,L.__data)):ee.isMatrix3?(L.__data[0]=ee.elements[0],L.__data[1]=ee.elements[1],L.__data[2]=ee.elements[2],L.__data[3]=0,L.__data[4]=ee.elements[3],L.__data[5]=ee.elements[4],L.__data[6]=ee.elements[5],L.__data[7]=0,L.__data[8]=ee.elements[6],L.__data[9]=ee.elements[7],L.__data[10]=ee.elements[8],L.__data[11]=0):(ee.toArray(L.__data,ie),ie+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(D,U,I,O){const B=D.value,C=U+"_"+I;if(O[C]===void 0)return typeof B=="number"||typeof B=="boolean"?O[C]=B:O[C]=B.clone(),!0;{const F=O[C];if(typeof B=="number"||typeof B=="boolean"){if(F!==B)return O[C]=B,!0}else if(F.equals(B)===!1)return F.copy(B),!0}return!1}function M(D){const U=D.uniforms;let I=0;const O=16;for(let C=0,F=U.length;C<F;C++){const S=Array.isArray(U[C])?U[C]:[U[C]];for(let T=0,L=S.length;T<L;T++){const W=S[T],X=Array.isArray(W.value)?W.value:[W.value];for(let ie=0,re=X.length;ie<re;ie++){const ee=X[ie],$=E(ee),oe=I%O,Ae=oe%$.boundary,ye=oe+Ae;I+=Ae,ye!==0&&O-ye<$.storage&&(I+=O-ye),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=I,I+=$.storage}}}const B=I%O;return B>0&&(I+=O-B),D.__size=I,D.__cache={},this}function E(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",D),U}function v(D){const U=D.target;U.removeEventListener("dispose",v);const I=l.indexOf(U.__bindingPointIndex);l.splice(I,1),i.deleteBuffer(s[U.id]),delete s[U.id],delete o[U.id]}function _(){for(const D in s)i.deleteBuffer(s[D]);l=[],s={},o={}}return{bind:h,update:f,dispose:_}}const VL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function WL(){return Ni===null&&(Ni=new Iw(VL,16,16,ta,In),Ni.name="DFG_LUT",Ni.minFilter=Un,Ni.magFilter=Un,Ni.wrapS=ar,Ni.wrapT=ar,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class qL{constructor(e={}){const{canvas:t=aw(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ni}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;const E=x,v=new Set([lp,op,ap]),_=new Set([ni,Hi,Xa,Ya,rp,sp]),D=new Uint32Array(4),U=new Int32Array(4);let I=null,O=null;const B=[],C=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=pi;let L=0,W=0,X=null,ie=-1,re=null;const ee=new tn,$=new tn;let oe=null;const Ae=new st(0);let ye=0,Me=t.width,ut=t.height,at=1,Ht=null,wt=null;const le=new tn(0,0,Me,ut),_e=new tn(0,0,Me,ut);let Le=!1;const et=new fp;let ze=!1,vt=!1;const Xt=new jt,St=new G,ot=new tn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function Ve(){return X===null?at:1}let k=n;function kt(w,Y){return t.getContext(w,Y)}try{const w={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),k===null){const Y="webgl2";if(k=kt(Y,w),k===null)throw kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let yt,lt,Pe,P,b,H,ae,ue,te,Be,Se,Ne,Ke,pe,ve,Fe,Ge,be,ft,V,De,xe,Ie,ge;function fe(){yt=new WP(k),yt.init(),xe=new OL(k,yt),lt=new OP(k,yt,e,xe),Pe=new IL(k,yt),lt.reversedDepthBuffer&&g&&Pe.buffers.depth.setReversed(!0),P=new YP(k),b=new vL,H=new UL(k,yt,Pe,b,lt,xe,P),ae=new FP(S),ue=new VP(S),te=new Zw(k),Ie=new IP(k,te),Be=new qP(k,te,P,Ie),Se=new jP(k,Be,te,P),ft=new KP(k,lt,H),Fe=new NP(b),Ne=new gL(S,ae,ue,yt,lt,Ie,Fe),Ke=new GL(S,b),pe=new SL,ve=new AL(yt),be=new LP(S,ae,ue,Pe,Se,M,h),Ge=new DL(S,Se,lt),ge=new HL(k,P,lt,Pe),V=new UP(k,yt,P),De=new XP(k,yt,P),P.programs=Ne.programs,S.capabilities=lt,S.extensions=yt,S.properties=b,S.renderLists=pe,S.shadowMap=Ge,S.state=Pe,S.info=P}fe(),E!==ni&&(F=new ZP(E,t.width,t.height,s,o));const Ee=new kL(S,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(w){w!==void 0&&(at=w,this.setSize(Me,ut,!1))},this.getSize=function(w){return w.set(Me,ut)},this.setSize=function(w,Y,Q=!0){if(Ee.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=w,ut=Y,t.width=Math.floor(w*at),t.height=Math.floor(Y*at),Q===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(Me*at,ut*at).floor()},this.setDrawingBufferSize=function(w,Y,Q){Me=w,ut=Y,at=Q,t.width=Math.floor(w*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(E===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,Y,Q,Z){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,Y,Q,Z),Pe.viewport(ee.copy(le).multiplyScalar(at).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,Y,Q,Z){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,Y,Q,Z),Pe.scissor($.copy(_e).multiplyScalar(at).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){Pe.setScissorTest(Le=w)},this.setOpaqueSort=function(w){Ht=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,Q=!0){let Z=0;if(w){let j=!1;if(X!==null){const Te=X.texture.format;j=v.has(Te)}if(j){const Te=X.texture.type,Ue=_.has(Te),we=be.getClearColor(),ke=be.getClearAlpha(),qe=we.r,$e=we.g,Xe=we.b;Ue?(D[0]=qe,D[1]=$e,D[2]=Xe,D[3]=ke,k.clearBufferuiv(k.COLOR,0,D)):(U[0]=qe,U[1]=$e,U[2]=Xe,U[3]=ke,k.clearBufferiv(k.COLOR,0,U))}else Z|=k.COLOR_BUFFER_BIT}Y&&(Z|=k.DEPTH_BUFFER_BIT),Q&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),be.dispose(),pe.dispose(),ve.dispose(),b.dispose(),ae.dispose(),ue.dispose(),Se.dispose(),Ie.dispose(),ge.dispose(),Ne.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ro),Ee.removeEventListener("sessionend",so),qi.stop()};function nt(w){w.preventDefault(),ig("WebGLRenderer: Context Lost."),T=!0}function zt(){ig("WebGLRenderer: Context Restored."),T=!1;const w=P.autoReset,Y=Ge.enabled,Q=Ge.autoUpdate,Z=Ge.needsUpdate,j=Ge.type;fe(),P.autoReset=w,Ge.enabled=Y,Ge.autoUpdate=Q,Ge.needsUpdate=Z,Ge.type=j}function Lt(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ri(w){const Y=w.target;Y.removeEventListener("dispose",ri),gi(Y)}function gi(w){aa(w),b.remove(w)}function aa(w){const Y=b.get(w).programs;Y!==void 0&&(Y.forEach(function(Q){Ne.releaseProgram(Q)}),w.isShaderMaterial&&Ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,Q,Z,j,Te){Y===null&&(Y=He);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,we=nc(w,Y,Q,Z,j);Pe.setMaterial(Z,Ue);let ke=Q.index,qe=1;if(Z.wireframe===!0){if(ke=Be.getWireframeAttribute(Q),ke===void 0)return;qe=2}const $e=Q.drawRange,Xe=Q.attributes.position;let dt=$e.start*qe,Rt=($e.start+$e.count)*qe;Te!==null&&(dt=Math.max(dt,Te.start*qe),Rt=Math.min(Rt,(Te.start+Te.count)*qe)),ke!==null?(dt=Math.max(dt,0),Rt=Math.min(Rt,ke.count)):Xe!=null&&(dt=Math.max(dt,0),Rt=Math.min(Rt,Xe.count));const $t=Rt-dt;if($t<0||$t===1/0)return;Ie.setup(j,Z,we,Q,ke);let Yt,Pt=V;if(ke!==null&&(Yt=te.get(ke),Pt=De,Pt.setIndex(Yt)),j.isMesh)Z.wireframe===!0?(Pe.setLineWidth(Z.wireframeLinewidth*Ve()),Pt.setMode(k.LINES)):Pt.setMode(k.TRIANGLES);else if(j.isLine){let Ye=Z.linewidth;Ye===void 0&&(Ye=1),Pe.setLineWidth(Ye*Ve()),j.isLineSegments?Pt.setMode(k.LINES):j.isLineLoop?Pt.setMode(k.LINE_LOOP):Pt.setMode(k.LINE_STRIP)}else j.isPoints?Pt.setMode(k.POINTS):j.isSprite&&Pt.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ja("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,It=j._multiDrawCounts,Tt=j._multiDrawCount,Cn=ke?te.get(ke).bytesPerElement:1,Di=b.get(Z).currentProgram.getUniforms();for(let Nn=0;Nn<Tt;Nn++)Di.setValue(k,"_gl_DrawID",Nn),Pt.render(Ye[Nn]/Cn,It[Nn])}else if(j.isInstancedMesh)Pt.renderInstances(dt,$t,j.count);else if(Q.isInstancedBufferGeometry){const Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,It=Math.min(Q.instanceCount,Ye);Pt.renderInstances(dt,$t,It)}else Pt.render(dt,$t)};function io(w,Y,Q){w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,ds(w,Y,Q),w.side=Ur,w.needsUpdate=!0,ds(w,Y,Q),w.side=mi):ds(w,Y,Q)}this.compile=function(w,Y,Q=null){Q===null&&(Q=w),O=ve.get(Q),O.init(Y),C.push(O),Q.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(O.pushLight(j),j.castShadow&&O.pushShadow(j))}),w!==Q&&w.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(O.pushLight(j),j.castShadow&&O.pushShadow(j))}),O.setupLights();const Z=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const we=Te[Ue];io(we,Q,j),Z.add(we)}else io(Te,Q,j),Z.add(Te)}),O=C.pop(),Z},this.compileAsync=function(w,Y,Q=null){const Z=this.compile(w,Y,Q);return new Promise(j=>{function Te(){if(Z.forEach(function(Ue){b.get(Ue).currentProgram.isReady()&&Z.delete(Ue)}),Z.size===0){j(w);return}setTimeout(Te,10)}yt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let zr=null;function tc(w){zr&&zr(w)}function ro(){qi.stop()}function so(){qi.start()}const qi=new Gx;qi.setAnimationLoop(tc),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(w){zr=w,Ee.setAnimationLoop(w),w===null?qi.stop():qi.start()},Ee.addEventListener("sessionstart",ro),Ee.addEventListener("sessionend",so),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Q=Ee.enabled===!0&&Ee.isPresenting===!0,Z=F!==null&&(X===null||Q)&&F.begin(S,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,Y,X),O=ve.get(w,C.length),O.init(Y),C.push(O),Xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(Xt,zi,Y.reversedDepth),vt=this.localClippingEnabled,ze=Fe.init(this.clippingPlanes,vt),I=pe.get(w,B.length),I.init(),B.push(I),Ee.enabled===!0&&Ee.isPresenting===!0){const Ue=S.xr.getDepthSensingMesh();Ue!==null&&oa(Ue,Y,-1/0,S.sortObjects)}oa(w,Y,0,S.sortObjects),I.finish(),S.sortObjects===!0&&I.sort(Ht,wt),tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,tt&&be.addToRenderList(I,w),this.info.render.frame++,ze===!0&&Fe.beginShadows();const j=O.state.shadowsArray;if(Ge.render(j,w,Y),ze===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&F.hasRenderPass())===!1){const Ue=I.opaque,we=I.transmissive;if(O.setupLights(),Y.isArrayCamera){const ke=Y.cameras;if(we.length>0)for(let qe=0,$e=ke.length;qe<$e;qe++){const Xe=ke[qe];oo(Ue,we,w,Xe)}tt&&be.render(w);for(let qe=0,$e=ke.length;qe<$e;qe++){const Xe=ke[qe];ao(I,w,Xe,Xe.viewport)}}else we.length>0&&oo(Ue,we,w,Y),tt&&be.render(w),ao(I,w,Y)}X!==null&&W===0&&(H.updateMultisampleRenderTarget(X),H.updateRenderTargetMipmap(X)),Z&&F.end(S),w.isScene===!0&&w.onAfterRender(S,w,Y),Ie.resetDefaultState(),ie=-1,re=null,C.pop(),C.length>0?(O=C[C.length-1],ze===!0&&Fe.setGlobalState(S.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?I=B[B.length-1]:I=null};function oa(w,Y,Q,Z){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)Q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||et.intersectsSprite(w)){Z&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);const Ue=Se.update(w),we=w.material;we.visible&&I.push(w,Ue,we,Q,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||et.intersectsObject(w))){const Ue=Se.update(w),we=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ot.copy(Ue.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(we)){const ke=Ue.groups;for(let qe=0,$e=ke.length;qe<$e;qe++){const Xe=ke[qe],dt=we[Xe.materialIndex];dt&&dt.visible&&I.push(w,Ue,dt,Q,ot.z,Xe)}}else we.visible&&I.push(w,Ue,we,Q,ot.z,null)}}const Te=w.children;for(let Ue=0,we=Te.length;Ue<we;Ue++)oa(Te[Ue],Y,Q,Z)}function ao(w,Y,Q,Z){const{opaque:j,transmissive:Te,transparent:Ue}=w;O.setupLightsView(Q),ze===!0&&Fe.setGlobalState(S.clippingPlanes,Q),Z&&Pe.viewport(ee.copy(Z)),j.length>0&&fs(j,Y,Q),Te.length>0&&fs(Te,Y,Q),Ue.length>0&&fs(Ue,Y,Q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function oo(w,Y,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[Z.id]===void 0){const dt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[Z.id]=new gn(1,1,{generateMipmaps:!0,type:dt?In:ni,minFilter:rs,samples:lt.samples,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Te=O.state.transmissionRenderTarget[Z.id],Ue=Z.viewport||ee;Te.setSize(Ue.z*S.transmissionResolutionScale,Ue.w*S.transmissionResolutionScale);const we=S.getRenderTarget(),ke=S.getActiveCubeFace(),qe=S.getActiveMipmapLevel();S.setRenderTarget(Te),S.getClearColor(Ae),ye=S.getClearAlpha(),ye<1&&S.setClearColor(16777215,.5),S.clear(),tt&&be.render(Q);const $e=S.toneMapping;S.toneMapping=Gi;const Xe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),O.setupLightsView(Z),ze===!0&&Fe.setGlobalState(S.clippingPlanes,Z),fs(w,Q,Z),H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te),yt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Rt=0,$t=Y.length;Rt<$t;Rt++){const Yt=Y[Rt],{object:Pt,geometry:Ye,material:It,group:Tt}=Yt;if(It.side===mi&&Pt.layers.test(Z.layers)){const Cn=It.side;It.side=en,It.needsUpdate=!0,la(Pt,Q,Z,Ye,It,Tt),It.side=Cn,It.needsUpdate=!0,dt=!0}}dt===!0&&(H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te))}S.setRenderTarget(we,ke,qe),S.setClearColor(Ae,ye),Xe!==void 0&&(Z.viewport=Xe),S.toneMapping=$e}function fs(w,Y,Q){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Te=w.length;j<Te;j++){const Ue=w[j],{object:we,geometry:ke,group:qe}=Ue;let $e=Ue.material;$e.allowOverride===!0&&Z!==null&&($e=Z),we.layers.test(Q.layers)&&la(we,Y,Q,ke,$e,qe)}}function la(w,Y,Q,Z,j,Te){w.onBeforeRender(S,Y,Q,Z,j,Te),w.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(S,Y,Q,Z,w,Te),j.transparent===!0&&j.side===mi&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,S.renderBufferDirect(Q,Y,Z,j,w,Te),j.side=Ur,j.needsUpdate=!0,S.renderBufferDirect(Q,Y,Z,j,w,Te),j.side=mi):S.renderBufferDirect(Q,Y,Z,j,w,Te),w.onAfterRender(S,Y,Q,Z,j,Te)}function ds(w,Y,Q){Y.isScene!==!0&&(Y=He);const Z=b.get(w),j=O.state.lights,Te=O.state.shadowsArray,Ue=j.state.version,we=Ne.getParameters(w,j.state,Te,Y,Q),ke=Ne.getProgramCacheKey(we);let qe=Z.programs;Z.environment=w.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(w.isMeshStandardMaterial?ue:ae).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",ri),qe=new Map,Z.programs=qe);let $e=qe.get(ke);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===Ue)return co(w,we),$e}else we.uniforms=Ne.getUniforms(w),w.onBeforeCompile(we,S),$e=Ne.acquireProgram(we,ke),qe.set(ke,$e),Z.uniforms=we.uniforms;const Xe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Fe.uniform),co(w,we),Z.needsLights=rc(w),Z.lightsStateVersion=Ue,Z.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function lo(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Ll.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function co(w,Y){const Q=b.get(w);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.batchingColor=Y.batchingColor,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.instancingMorph=Y.instancingMorph,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function nc(w,Y,Q,Z,j){Y.isScene!==!0&&(Y=He),H.resetTextureUnits();const Te=Y.fog,Ue=Z.isMeshStandardMaterial?Y.environment:null,we=X===null?S.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:na,ke=(Z.isMeshStandardMaterial?ue:ae).get(Z.envMap||Ue),qe=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Xe=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Rt=!!Q.morphAttributes.color;let $t=Gi;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&($t=S.toneMapping);const Yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=Yt!==void 0?Yt.length:0,Ye=b.get(Z),It=O.state.lights;if(ze===!0&&(vt===!0||w!==re)){const pn=w===re&&Z.id===ie;Fe.setState(Z,w,pn)}let Tt=!1;Z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==It.state.version||Ye.outputColorSpace!==we||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==ke||Z.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==$e||Ye.morphTargets!==Xe||Ye.morphNormals!==dt||Ye.morphColors!==Rt||Ye.toneMapping!==$t||Ye.morphTargetsCount!==Pt)&&(Tt=!0):(Tt=!0,Ye.__version=Z.version);let Cn=Ye.currentProgram;Tt===!0&&(Cn=ds(Z,Y,j));let Di=!1,Nn=!1,ur=!1;const Ot=Cn.getUniforms(),dn=Ye.uniforms;if(Pe.useProgram(Cn.program)&&(Di=!0,Nn=!0,ur=!0),Z.id!==ie&&(ie=Z.id,Nn=!0),Di||re!==w){Pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(k,"projectionMatrix",w.projectionMatrix),Ot.setValue(k,"viewMatrix",w.matrixWorldInverse);const yn=Ot.map.cameraPosition;yn!==void 0&&yn.setValue(k,St.setFromMatrixPosition(w.matrixWorld)),lt.logarithmicDepthBuffer&&Ot.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ot.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),re!==w&&(re=w,Nn=!0,ur=!0)}if(Ye.needsLights&&(It.state.directionalShadowMap.length>0&&Ot.setValue(k,"directionalShadowMap",It.state.directionalShadowMap,H),It.state.spotShadowMap.length>0&&Ot.setValue(k,"spotShadowMap",It.state.spotShadowMap,H),It.state.pointShadowMap.length>0&&Ot.setValue(k,"pointShadowMap",It.state.pointShadowMap,H)),j.isSkinnedMesh){Ot.setOptional(k,j,"bindMatrix"),Ot.setOptional(k,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ot.setValue(k,"boneTexture",pn.boneTexture,H))}j.isBatchedMesh&&(Ot.setOptional(k,j,"batchingTexture"),Ot.setValue(k,"batchingTexture",j._matricesTexture,H),Ot.setOptional(k,j,"batchingIdTexture"),Ot.setValue(k,"batchingIdTexture",j._indirectTexture,H),Ot.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(k,"batchingColorTexture",j._colorsTexture,H));const an=Q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&ft.update(j,Q,Cn),(Nn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,Ot.setValue(k,"receiveShadow",j.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(dn.envMap.value=ke,dn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(dn.envMapIntensity.value=Y.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=WL()),Nn&&(Ot.setValue(k,"toneMappingExposure",S.toneMappingExposure),Ye.needsLights&&ic(dn,ur),Te&&Z.fog===!0&&Ke.refreshFogUniforms(dn,Te),Ke.refreshMaterialUniforms(dn,Z,at,ut,O.state.transmissionRenderTarget[w.id]),Ll.upload(k,lo(Ye),dn,H)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ll.upload(k,lo(Ye),dn,H),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ot.setValue(k,"center",j.center),Ot.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(k,"normalMatrix",j.normalMatrix),Ot.setValue(k,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const pn=Z.uniformsGroups;for(let yn=0,ca=pn.length;yn<ca;yn++){const Li=pn[yn];ge.update(Li,Cn),ge.bind(Li,Cn)}}return Cn}function ic(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function rc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,Y,Q){const Z=b.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=Y,b.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const Q=b.get(w);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0};const ps=k.createFramebuffer();this.setRenderTarget=function(w,Y=0,Q=0){X=w,L=Y,W=Q;let Z=null,j=!1,Te=!1;if(w){const we=b.get(w);if(we.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),ee.copy(w.viewport),$.copy(w.scissor),oe=w.scissorTest,Pe.viewport(ee),Pe.scissor($),Pe.setScissorTest(oe),ie=-1;return}else if(we.__webglFramebuffer===void 0)H.setupRenderTarget(w);else if(we.__hasExternalTextures)H.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(we.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Te=!0);const qe=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?Z=qe[Y][Q]:Z=qe[Y],j=!0):w.samples>0&&H.useMultisampledRTT(w)===!1?Z=b.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[Q]:Z=qe,ee.copy(w.viewport),$.copy(w.scissor),oe=w.scissorTest}else ee.copy(le).multiplyScalar(at).floor(),$.copy(_e).multiplyScalar(at).floor(),oe=Le;if(Q!==0&&(Z=ps),Pe.bindFramebuffer(k.FRAMEBUFFER,Z)&&Pe.drawBuffers(w,Z),Pe.viewport(ee),Pe.scissor($),Pe.setScissorTest(oe),j){const we=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we.__webglTexture,Q)}else if(Te){const we=Y;for(let ke=0;ke<w.textures.length;ke++){const qe=b.get(w.textures[ke]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ke,qe.__webglTexture,Q,we)}}else if(w!==null&&Q!==0){const we=b.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,Q)}ie=-1},this.readRenderTargetPixels=function(w,Y,Q,Z,j,Te,Ue,we=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){Pe.bindFramebuffer(k.FRAMEBUFFER,ke);try{const qe=w.textures[we],$e=qe.format,Xe=qe.type;if(!lt.textureFormatReadable($e)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Xe)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-Z&&Q>=0&&Q<=w.height-j&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),k.readPixels(Y,Q,Z,j,xe.convert($e),xe.convert(Xe),Te))}finally{const qe=X!==null?b.get(X).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,Y,Q,Z,j,Te,Ue,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(Y>=0&&Y<=w.width-Z&&Q>=0&&Q<=w.height-j){Pe.bindFramebuffer(k.FRAMEBUFFER,ke);const qe=w.textures[we],$e=qe.format,Xe=qe.type;if(!lt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we),k.readPixels(Y,Q,Z,j,xe.convert($e),xe.convert(Xe),0);const Rt=X!==null?b.get(X).__webglFramebuffer:null;Pe.bindFramebuffer(k.FRAMEBUFFER,Rt);const $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ow(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.deleteBuffer(dt),k.deleteSync($t),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,Q=0){const Z=Math.pow(2,-Q),j=Math.floor(w.image.width*Z),Te=Math.floor(w.image.height*Z),Ue=Y!==null?Y.x:0,we=Y!==null?Y.y:0;H.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ue,we,j,Te),Pe.unbindTexture()};const sc=k.createFramebuffer(),ms=k.createFramebuffer();this.copyTextureToTexture=function(w,Y,Q=null,Z=null,j=0,Te=null){Te===null&&(j!==0?(ja("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=j,j=0):Te=0);let Ue,we,ke,qe,$e,Xe,dt,Rt,$t;const Yt=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(Q!==null)Ue=Q.max.x-Q.min.x,we=Q.max.y-Q.min.y,ke=Q.isBox3?Q.max.z-Q.min.z:1,qe=Q.min.x,$e=Q.min.y,Xe=Q.isBox3?Q.min.z:0;else{const an=Math.pow(2,-j);Ue=Math.floor(Yt.width*an),we=Math.floor(Yt.height*an),w.isDataArrayTexture?ke=Yt.depth:w.isData3DTexture?ke=Math.floor(Yt.depth*an):ke=1,qe=0,$e=0,Xe=0}Z!==null?(dt=Z.x,Rt=Z.y,$t=Z.z):(dt=0,Rt=0,$t=0);const Pt=xe.convert(Y.format),Ye=xe.convert(Y.type);let It;Y.isData3DTexture?(H.setTexture3D(Y,0),It=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),It=k.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),It=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Tt=k.getParameter(k.UNPACK_ROW_LENGTH),Cn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Di=k.getParameter(k.UNPACK_SKIP_PIXELS),Nn=k.getParameter(k.UNPACK_SKIP_ROWS),ur=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qe),k.pixelStorei(k.UNPACK_SKIP_ROWS,$e),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const Ot=w.isDataArrayTexture||w.isData3DTexture,dn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const an=b.get(w),pn=b.get(Y),yn=b.get(an.__renderTarget),ca=b.get(pn.__renderTarget);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Li=0;Li<ke;Li++)Ot&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(w).__webglTexture,j,Xe+Li),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Te,$t+Li)),k.blitFramebuffer(qe,$e,Ue,we,dt,Rt,Ue,we,k.DEPTH_BUFFER_BIT,k.NEAREST);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||b.has(w)){const an=b.get(w),pn=b.get(Y);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,sc),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,ms);for(let yn=0;yn<ke;yn++)Ot?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,an.__webglTexture,j,Xe+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,an.__webglTexture,j),dn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,Te,$t+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,Te),j!==0?k.blitFramebuffer(qe,$e,Ue,we,dt,Rt,Ue,we,k.COLOR_BUFFER_BIT,k.NEAREST):dn?k.copyTexSubImage3D(It,Te,dt,Rt,$t+yn,qe,$e,Ue,we):k.copyTexSubImage2D(It,Te,dt,Rt,qe,$e,Ue,we);Pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(It,Te,dt,Rt,$t,Ue,we,ke,Pt,Ye,Yt.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(It,Te,dt,Rt,$t,Ue,we,ke,Pt,Yt.data):k.texSubImage3D(It,Te,dt,Rt,$t,Ue,we,ke,Pt,Ye,Yt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,dt,Rt,Ue,we,Pt,Ye,Yt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,dt,Rt,Yt.width,Yt.height,Pt,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Te,dt,Rt,Ue,we,Pt,Ye,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Cn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Di),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ur),Te===0&&Y.generateMipmaps&&k.generateMipmap(It),Pe.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&H.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?H.setTextureCube(w,0):w.isData3DTexture?H.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?H.setTexture2DArray(w,0):H.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){L=0,W=0,X=null,Pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Xx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XL=new Sp(-1,1,1,-1,0,1);class YL extends wn{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const KL=new YL;class yp{constructor(e){this._mesh=new Sn(KL,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XL)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jL extends sa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof En?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ql.clone(e.uniforms),this.material=new En({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jg extends sa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,u;this.inverse?(l=0,u=1):(l=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,l,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class $L extends sa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ZL{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new je);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jL(Xx),this.copyPass.material.blending=_i,this.clock=new zx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const l=this.passes[s];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Jg!==void 0&&(l instanceof Jg?n=!0:l instanceof $L&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JL extends sa{constructor(e,t,n=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new st}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let o,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=s}}class Pr extends sa{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new st(1,1,1),this.hiddenEdgeColor=new st(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new je(e.x,e.y):new je(256,256);const o=Math.round(this.resolution.x/this.downSampleRatio),l=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new gn(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new kx,this.depthMaterial.side=mi,this.depthMaterial.depthPacking=J1,this.depthMaterial.blending=_i,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=mi,this.prepareMaskMaterial.fragmentShader=m(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new gn(this.resolution.x,this.resolution.y,{type:In}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new gn(o,l,{type:In}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new gn(o,l,{type:In}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new gn(Math.round(o/2),Math.round(l/2),{type:In}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new gn(o,l,{type:In}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new gn(Math.round(o/2),Math.round(l/2),{type:In}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const u=4,h=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(u),this.separableBlurMaterial1.uniforms.texSize.value.set(o,l),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(h),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(l/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=h,this.overlayMaterial=this._getOverlayMaterial();const f=Xx;this.copyUniforms=ql.clone(f.uniforms),this.materialCopy=new En({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:_i,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this._fsQuad=new yp(null),this.tempPulseColor1=new st,this.tempPulseColor2=new st,this.textureMatrix=new jt;function m(p,g){const x=g.isPerspectiveCamera?"perspective":"orthographic";return p.replace(/DEPTH_TO_VIEW_Z/g,x+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}render(e,t,n,s,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const u=this.renderScene.background,h=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=u,this.renderScene.overrideMaterial=h,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const f=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(f),this.tempPulseColor2.multiplyScalar(f)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Pr.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Pr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Pr.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Pr.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function s(o){if(o.isPoints||o.isLine||o.isLine2)e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e);else if((o.isMesh||o.isSprite)&&!n.has(o)){const l=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,l)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new En({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new je(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
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

				}`})}_getEdgeDetectionMaterial(){return new En({uniforms:{maskTexture:{value:null},texSize:{value:new je(.5,.5)},visibleEdgeColor:{value:new G(1,1,1)},hiddenEdgeColor:{value:new G(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}_getSeparableBlurMaterial(e){return new En({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new je(.5,.5)},direction:{value:new je(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}_getOverlayMaterial(){return new En({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:Ul,depthTest:!1,depthWrite:!1,transparent:!0})}}Pr.BlurDirectionX=new je(1,0);Pr.BlurDirectionY=new je(0,1);const yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class QL extends sa{constructor(){super(),this.isOutputPass=!0,this.uniforms=ql.clone(yl.uniforms),this.material=new Bx({name:yl.name,uniforms:this.uniforms,vertexShader:yl.vertexShader,fragmentShader:yl.fragmentShader}),this._fsQuad=new yp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$d?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===np?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ep&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Qg={type:"change"},bp={type:"start"},Yx={type:"end"},bl=new Wl,e0=new wr,e2=Math.cos(70*cw.DEG2RAD),cn=new G,Yn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xu=1e-6;class Kx extends jw{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new os,this._lastTargetPosition=new G,this._quat=new os().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ag,this._sphericalDelta=new Ag,this._scale=1,this._panOffset=new G,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new G,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n2.bind(this),this._onPointerDown=t2.bind(this),this._onPointerUp=i2.bind(this),this._onContextMenu=u2.bind(this),this._onMouseWheel=a2.bind(this),this._onKeyDown=o2.bind(this),this._onTouchStart=l2.bind(this),this._onTouchMove=c2.bind(this),this._onMouseDown=r2.bind(this),this._onMouseMove=s2.bind(this),this._interceptControlDown=h2.bind(this),this._interceptControlUp=f2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qg),this.update(),this.state=Gt.NONE}update(e=null){const t=this.object.position;cn.copy(t).sub(this.target),cn.applyQuaternion(this._quat),this._spherical.setFromVector3(cn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Yn:n>Math.PI&&(n-=Yn),s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=l!=this._spherical.radius}if(cn.setFromSpherical(this._spherical),cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const u=cn.length();l=this._clampDistance(u*this._scale);const h=u-l;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const u=new G(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const f=new G(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(u),this.object.updateMatrixWorld(),l=cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(bl.origin.copy(this.object.position),bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bl.direction))<e2?this.object.lookAt(this.target):(e0.setFromNormalAndCoplanarPoint(this.object.up,this.target),bl.intersectPlane(e0,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Xu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xu||this._lastTargetPosition.distanceToSquared(this.target)>Xu?(this.dispatchEvent(Qg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){cn.setFromMatrixColumn(t,0),cn.multiplyScalar(-e),this._panOffset.add(cn)}_panUp(e,t){this.screenSpacePanning===!0?cn.setFromMatrixColumn(t,1):(cn.setFromMatrixColumn(t,0),cn.crossVectors(this.object.up,cn)),cn.multiplyScalar(e),this._panOffset.add(cn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;cn.copy(s).sub(this.target);let o=cn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,l=n.width,u=n.height;this._mouse.x=s/l*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(l,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function t2(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function n2(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function i2(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yx),this.state=Gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r2(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Gt.DOLLY;break;case $s.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}break;case $s.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(bp)}function s2(i){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function a2(i){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(i.preventDefault(),this.dispatchEvent(bp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yx))}function o2(i){this.enabled!==!1&&this._handleKeyDown(i)}function l2(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Gt.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Gt.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(bp)}function c2(i){switch(this._trackPointer(i),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Gt.NONE}}function u2(i){this.enabled!==!1&&i.preventDefault()}function h2(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f2(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Va=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(m){m.preventDefault(),n(++i%e.children.length)},!1);function t(m){return e.appendChild(m.dom),m}function n(m){for(var p=0;p<e.children.length;p++)e.children[p].style.display=p===m?"block":"none";i=m}var s=(performance||Date).now(),o=s,l=0,u=t(new Va.Panel("FPS","#0ff","#002")),h=t(new Va.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new Va.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){l++;var m=(performance||Date).now();if(h.update(m-s,200),m>=o+1e3&&(u.update(l*1e3/(m-o),100),o=m,l=0,f)){var p=performance.memory;f.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return m},update:function(){s=this.end()},domElement:e,setMode:n}};Va.Panel=function(i,e,t){var n=1/0,s=0,o=Math.round,l=o(window.devicePixelRatio||1),u=80*l,h=48*l,f=3*l,m=2*l,p=3*l,g=15*l,x=74*l,M=30*l,E=document.createElement("canvas");E.width=u,E.height=h,E.style.cssText="width:80px;height:48px";var v=E.getContext("2d");return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,u,h),v.fillStyle=e,v.fillText(i,f,m),v.fillRect(p,g,x,M),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(p,g,x,M),{dom:E,update:function(_,D){n=Math.min(n,_),s=Math.max(s,_),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=e,v.fillText(o(_)+" "+i+" ("+o(n)+"-"+o(s)+")",f,m),v.drawImage(E,p+l,g,x-l,M,p,g,x-l,M),v.fillRect(p+x-l,g,l,M),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(p+x-l,g,l,o((1-_/D)*M))}}};function d2(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function js(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),s=Math.round(i.g),o=Math.round(i.b),l=i.a,u=Math.round(i.h),h=i.s.toFixed(1),f=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var m=i.hex.toString(16);m.length<6;)m="0"+m;return"#"+m}else{if(t==="CSS_RGB")return"rgb("+n+","+s+","+o+")";if(t==="CSS_RGBA")return"rgba("+n+","+s+","+o+","+l+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+s+","+o+"]";if(t==="RGBA_ARRAY")return"["+n+","+s+","+o+","+l+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+s+",b:"+o+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+s+",b:"+o+",a:"+l+"}";if(t==="HSV_OBJ")return"{h:"+u+",s:"+h+",v:"+f+"}";if(t==="HSVA_OBJ")return"{h:"+u+",s:"+h+",v:"+f+",a:"+l+"}"}return"unknown format"}var t0=Array.prototype.forEach,Ia=Array.prototype.slice,de={BREAK:{},extend:function(e){return this.each(Ia.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(t[s])||(e[s]=t[s])}).bind(this))},this),e},defaults:function(e){return this.each(Ia.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(e[s])&&(e[s]=t[s])}).bind(this))},this),e},compose:function(){var e=Ia.call(arguments);return function(){for(var t=Ia.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(t0&&e.forEach&&e.forEach===t0)e.forEach(t,n);else if(e.length===e.length+0){var s=void 0,o=void 0;for(s=0,o=e.length;s<o;s++)if(s in e&&t.call(n,e[s],s)===this.BREAK)return}else for(var l in e)if(t.call(n,e[l],l)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var s=void 0;return function(){var o=this,l=arguments;function u(){s=null,n||e.apply(o,l)}var h=n||!s;clearTimeout(s),s=setTimeout(u,t),h&&e.apply(o,l)}},toArray:function(e){return e.toArray?e.toArray():Ia.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e})(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},p2=[{litmus:de.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:js},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:js},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:js},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:js}}},{litmus:de.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:de.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:de.isObject,conversions:{RGBA_OBJ:{read:function(e){return de.isNumber(e.r)&&de.isNumber(e.g)&&de.isNumber(e.b)&&de.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return de.isNumber(e.r)&&de.isNumber(e.g)&&de.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return de.isNumber(e.h)&&de.isNumber(e.s)&&de.isNumber(e.v)&&de.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return de.isNumber(e.h)&&de.isNumber(e.s)&&de.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ua=void 0,Ml=void 0,Hd=function(){Ml=!1;var e=arguments.length>1?de.toArray(arguments):arguments[0];return de.each(p2,function(t){if(t.litmus(e))return de.each(t.conversions,function(n,s){if(Ua=n.read(e),Ml===!1&&Ua!==!1)return Ml=Ua,Ua.conversionName=s,Ua.conversion=n,de.BREAK}),de.BREAK}),Ml},n0=void 0,kl={hsv_to_rgb:function(e,t,n){var s=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),l=n*(1-t),u=n*(1-o*t),h=n*(1-(1-o)*t),f=[[n,h,l],[u,n,l],[l,n,h],[l,u,n],[h,l,n],[n,l,u]][s];return{r:f[0]*255,g:f[1]*255,b:f[2]*255}},rgb_to_hsv:function(e,t,n){var s=Math.min(e,t,n),o=Math.max(e,t,n),l=o-s,u=void 0,h=void 0;if(o!==0)h=l/o;else return{h:NaN,s:0,v:0};return e===o?u=(t-n)/l:t===o?u=2+(n-e)/l:u=4+(e-t)/l,u/=6,u<0&&(u+=1),{h:u*360,s:h,v:o/255}},rgb_to_hex:function(e,t,n){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,n),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(n0=t*8)|e&~(255<<n0)}},m2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ri=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Pi=(function(){function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}})(),Fr=function i(e,t,n){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:i(o,t,n)}else{if("value"in s)return s.value;var l=s.get;return l===void 0?void 0:l.call(n)}},Br=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},kr=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},xn=(function(){function i(){if(Ri(this,i),this.__state=Hd.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Pi(i,[{key:"toString",value:function(){return js(this)}},{key:"toHexString",value:function(){return js(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i})();function Mp(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(xn.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(xn.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function Ep(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(xn.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(xn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}xn.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=kl.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")de.extend(i.__state,kl.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};xn.recalculateHSV=function(i){var e=kl.rgb_to_hsv(i.r,i.g,i.b);de.extend(i.__state,{s:e.s,v:e.v}),de.isNaN(e.h)?de.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};xn.COMPONENTS=["r","g","b","h","s","v","hex","a"];Mp(xn.prototype,"r",2);Mp(xn.prototype,"g",1);Mp(xn.prototype,"b",0);Ep(xn.prototype,"h");Ep(xn.prototype,"s");Ep(xn.prototype,"v");Object.defineProperty(xn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(xn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=kl.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var us=(function(){function i(e,t){Ri(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Pi(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i})(),_2={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},jx={};de.each(_2,function(i,e){de.each(i,function(t){jx[t]=e})});var g2=/(\d+(\.\d+)?)px/;function Fi(i){if(i==="0"||de.isUndefined(i))return 0;var e=i.match(g2);return de.isNull(e)?0:parseFloat(e[1])}var J={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var s=n,o=t;de.isUndefined(o)&&(o=!0),de.isUndefined(s)&&(s=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,s){var o=n||{},l=jx[t];if(!l)throw new Error("Event type "+t+" not supported.");var u=document.createEvent(l);switch(l){case"MouseEvents":{var h=o.x||o.clientX||0,f=o.y||o.clientY||0;u.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,h,f,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var m=u.initKeyboardEvent||u.initKeyEvent;de.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),m(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{u.initEvent(t,o.bubbles||!1,o.cancelable||!0);break}}de.defaults(u,s),e.dispatchEvent(u)},bind:function(e,t,n,s){var o=s||!1;return e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,n),J},unbind:function(e,t,n,s){var o=s||!1;return e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n),J},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return J},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),s=n.indexOf(t);s!==-1&&(n.splice(s,1),e.className=n.join(" "))}else e.className=void 0;return J},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Fi(t["border-left-width"])+Fi(t["border-right-width"])+Fi(t["padding-left"])+Fi(t["padding-right"])+Fi(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Fi(t["border-top-width"])+Fi(t["border-bottom-width"])+Fi(t["padding-top"])+Fi(t["padding-bottom"])+Fi(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},$x=(function(i){Br(e,i);function e(t,n){Ri(this,e);var s=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function l(){o.setValue(!o.__prev)}return J.bind(s.__checkbox,"change",l,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Pi(e,[{key:"setValue",value:function(n){var s=Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(us),v2=(function(i){Br(e,i);function e(t,n,s){Ri(this,e);var o=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=s,u=o;if(o.__select=document.createElement("select"),de.isArray(l)){var h={};de.each(l,function(f){h[f]=f}),l=h}return de.each(l,function(f,m){var p=document.createElement("option");p.innerHTML=m,p.setAttribute("value",f),u.__select.appendChild(p)}),o.updateDisplay(),J.bind(o.__select,"change",function(){var f=this.options[this.selectedIndex].value;u.setValue(f)}),o.domElement.appendChild(o.__select),o}return Pi(e,[{key:"setValue",value:function(n){var s=Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return J.isActive(this.__select)?this:(this.__select.value=this.getValue(),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(us),x2=(function(i){Br(e,i);function e(t,n){Ri(this,e);var s=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;function l(){o.setValue(o.__input.value)}function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),J.bind(s.__input,"keyup",l),J.bind(s.__input,"change",l),J.bind(s.__input,"blur",u),J.bind(s.__input,"keydown",function(h){h.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Pi(e,[{key:"updateDisplay",value:function(){return J.isActive(this.__input)||(this.__input.value=this.getValue()),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(us);function i0(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Zx=(function(i){Br(e,i);function e(t,n,s){Ri(this,e);var o=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=s||{};return o.__min=l.min,o.__max=l.max,o.__step=l.step,de.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=i0(o.__impliedStep),o}return Pi(e,[{key:"setValue",value:function(n){var s=n;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=i0(n),this}}]),e})(us);function S2(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var zl=(function(i){Br(e,i);function e(t,n,s){Ri(this,e);var o=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,s));o.__truncationSuspended=!1;var l=o,u=void 0;function h(){var M=parseFloat(l.__input.value);de.isNaN(M)||l.setValue(M)}function f(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function m(){f()}function p(M){var E=u-M.clientY;l.setValue(l.getValue()+E*l.__impliedStep),u=M.clientY}function g(){J.unbind(window,"mousemove",p),J.unbind(window,"mouseup",g),f()}function x(M){J.bind(window,"mousemove",p),J.bind(window,"mouseup",g),u=M.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),J.bind(o.__input,"change",h),J.bind(o.__input,"blur",m),J.bind(o.__input,"mousedown",x),J.bind(o.__input,"keydown",function(M){M.keyCode===13&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,f())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return Pi(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():S2(this.getValue(),this.__precision),Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Zx);function r0(i,e,t,n,s){return n+(s-n)*((i-e)/(t-e))}var Vd=(function(i){Br(e,i);function e(t,n,s,o,l){Ri(this,e);var u=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:s,max:o,step:l})),h=u;u.__background=document.createElement("div"),u.__foreground=document.createElement("div"),J.bind(u.__background,"mousedown",f),J.bind(u.__background,"touchstart",g),J.addClass(u.__background,"slider"),J.addClass(u.__foreground,"slider-fg");function f(E){document.activeElement.blur(),J.bind(window,"mousemove",m),J.bind(window,"mouseup",p),m(E)}function m(E){E.preventDefault();var v=h.__background.getBoundingClientRect();return h.setValue(r0(E.clientX,v.left,v.right,h.__min,h.__max)),!1}function p(){J.unbind(window,"mousemove",m),J.unbind(window,"mouseup",p),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}function g(E){E.touches.length===1&&(J.bind(window,"touchmove",x),J.bind(window,"touchend",M),x(E))}function x(E){var v=E.touches[0].clientX,_=h.__background.getBoundingClientRect();h.setValue(r0(v,_.left,_.right,h.__min,h.__max))}function M(){J.unbind(window,"touchmove",x),J.unbind(window,"touchend",M),h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}return u.updateDisplay(),u.__background.appendChild(u.__foreground),u.domElement.appendChild(u.__background),u}return Pi(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Fr(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(Zx),Jx=(function(i){Br(e,i);function e(t,n,s){Ri(this,e);var o=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=o;return o.__button=document.createElement("div"),o.__button.innerHTML=s===void 0?"Fire":s,J.bind(o.__button,"click",function(u){return u.preventDefault(),l.fire(),!1}),J.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return Pi(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(us),Wd=(function(i){Br(e,i);function e(t,n){Ri(this,e);var s=kr(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));s.__color=new xn(s.getValue()),s.__temp=new xn(0);var o=s;s.domElement=document.createElement("div"),J.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",J.bind(s.__input,"keydown",function(E){E.keyCode===13&&p.call(this)}),J.bind(s.__input,"blur",p),J.bind(s.__selector,"mousedown",function(){J.addClass(this,"drag").bind(window,"mouseup",function(){J.removeClass(o.__selector,"drag")})}),J.bind(s.__selector,"touchstart",function(){J.addClass(this,"drag").bind(window,"touchend",function(){J.removeClass(o.__selector,"drag")})});var l=document.createElement("div");de.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),de.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),de.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),de.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),de.extend(l.style,{width:"100%",height:"100%",background:"none"}),s0(l,"top","rgba(0,0,0,0)","#000"),de.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),b2(s.__hue_field),de.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),J.bind(s.__saturation_field,"mousedown",u),J.bind(s.__saturation_field,"touchstart",u),J.bind(s.__field_knob,"mousedown",u),J.bind(s.__field_knob,"touchstart",u),J.bind(s.__hue_field,"mousedown",h),J.bind(s.__hue_field,"touchstart",h);function u(E){x(E),J.bind(window,"mousemove",x),J.bind(window,"touchmove",x),J.bind(window,"mouseup",f),J.bind(window,"touchend",f)}function h(E){M(E),J.bind(window,"mousemove",M),J.bind(window,"touchmove",M),J.bind(window,"mouseup",m),J.bind(window,"touchend",m)}function f(){J.unbind(window,"mousemove",x),J.unbind(window,"touchmove",x),J.unbind(window,"mouseup",f),J.unbind(window,"touchend",f),g()}function m(){J.unbind(window,"mousemove",M),J.unbind(window,"touchmove",M),J.unbind(window,"mouseup",m),J.unbind(window,"touchend",m),g()}function p(){var E=Hd(this.value);E!==!1?(o.__color.__state=E,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function g(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}s.__saturation_field.appendChild(l),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function x(E){E.type.indexOf("touch")===-1&&E.preventDefault();var v=o.__saturation_field.getBoundingClientRect(),_=E.touches&&E.touches[0]||E,D=_.clientX,U=_.clientY,I=(D-v.left)/(v.right-v.left),O=1-(U-v.top)/(v.bottom-v.top);return O>1?O=1:O<0&&(O=0),I>1?I=1:I<0&&(I=0),o.__color.v=O,o.__color.s=I,o.setValue(o.__color.toOriginal()),!1}function M(E){E.type.indexOf("touch")===-1&&E.preventDefault();var v=o.__hue_field.getBoundingClientRect(),_=E.touches&&E.touches[0]||E,D=_.clientY,U=1-(D-v.top)/(v.bottom-v.top);return U>1?U=1:U<0&&(U=0),o.__color.h=U*360,o.setValue(o.__color.toOriginal()),!1}return s}return Pi(e,[{key:"updateDisplay",value:function(){var n=Hd(this.getValue());if(n!==!1){var s=!1;de.each(xn.COMPONENTS,function(u){if(!de.isUndefined(n[u])&&!de.isUndefined(this.__color.__state[u])&&n[u]!==this.__color.__state[u])return s=!0,{}},this),s&&de.extend(this.__color.__state,n)}de.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,l=255-o;de.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,s0(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),de.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}}]),e})(us),y2=["-moz-","-o-","-webkit-","-ms-",""];function s0(i,e,t,n){i.style.background="",de.each(y2,function(s){i.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function b2(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var M2={load:function(e,t){var n=t||document,s=n.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,n.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var n=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var o=n.getElementsByTagName("head")[0];try{o.appendChild(s)}catch{}}},E2=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,T2=function(e,t){var n=e[t];return de.isArray(arguments[2])||de.isObject(arguments[2])?new v2(e,t,arguments[2]):de.isNumber(n)?de.isNumber(arguments[2])&&de.isNumber(arguments[3])?de.isNumber(arguments[4])?new Vd(e,t,arguments[2],arguments[3],arguments[4]):new Vd(e,t,arguments[2],arguments[3]):de.isNumber(arguments[4])?new zl(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new zl(e,t,{min:arguments[2],max:arguments[3]}):de.isString(n)?new x2(e,t):de.isFunction(n)?new Jx(e,t,""):de.isBoolean(n)?new $x(e,t):null};function A2(i){setTimeout(i,1e3/60)}var w2=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||A2,C2=(function(){function i(){Ri(this,i),this.backgroundElement=document.createElement("div"),de.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),J.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),de.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;J.bind(this.backgroundElement,"click",function(){e.hide()})}return Pi(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),de.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",J.unbind(t.domElement,"webkitTransitionEnd",s),J.unbind(t.domElement,"transitionend",s),J.unbind(t.domElement,"oTransitionEnd",s)};J.bind(this.domElement,"webkitTransitionEnd",n),J.bind(this.domElement,"transitionend",n),J.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-J.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-J.getHeight(this.domElement)/2+"px"}}]),i})(),R2=d2(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);M2.inject(R2);var a0="dg",o0=72,l0=20,Za="Default",Fa=(function(){try{return!!window.localStorage}catch{return!1}})(),Wa=void 0,c0=!0,qs=void 0,Yu=!1,Qx=[],qt=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),J.addClass(this.domElement,a0),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=de.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=de.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),de.isUndefined(n.load)?n.load={preset:Za}:n.preset&&(n.load.preset=n.preset),de.isUndefined(n.parent)&&n.hideable&&Qx.push(this),n.resizable=de.isUndefined(n.parent)&&n.resizable,n.autoPlace&&de.isUndefined(n.scrollable)&&(n.scrollable=!0);var s=Fa&&localStorage.getItem(Xs(this,"isLocal"))==="true",o=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(g){t.parent?t.getRoot().preset=g:n.load.preset=g,I2(this),t.revert()}},width:{get:function(){return n.width},set:function(g){n.width=g,Yd(t,g)}},name:{get:function(){return n.name},set:function(g){n.name=g,l&&(l.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(g){n.closed=g,n.closed?J.addClass(t.__ul,i.CLASS_CLOSED):J.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=g?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return s},set:function(g){Fa&&(s=g,g?J.bind(window,"unload",o):J.unbind(window,"unload",o),localStorage.setItem(Xs(t,"isLocal"),g))}}}),de.isUndefined(n.parent)){if(this.closed=n.closed||!1,J.addClass(this.domElement,i.CLASS_MAIN),J.makeSelectable(this.domElement,!1),Fa&&s){t.useLocalStorage=!0;var u=localStorage.getItem(Xs(this,"gui"));u&&(n.load=JSON.parse(u))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,J.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(J.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(J.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),J.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var h=document.createTextNode(n.name);J.addClass(h,"controller-name"),l=Tp(t,h);var f=function(g){return g.preventDefault(),t.closed=!t.closed,!1};J.addClass(this.__ul,i.CLASS_CLOSED),J.addClass(l,"title"),J.bind(l,"click",f),n.closed||(this.closed=!1)}n.autoPlace&&(de.isUndefined(n.parent)&&(c0&&(qs=document.createElement("div"),J.addClass(qs,a0),J.addClass(qs,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(qs),c0=!1),qs.appendChild(this.domElement),J.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Yd(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},J.bind(window,"resize",this.__resizeHandler),J.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),J.bind(this.__ul,"transitionend",this.__resizeHandler),J.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&L2(this),o=function(){Fa&&localStorage.getItem(Xs(t,"isLocal"))==="true"&&localStorage.setItem(Xs(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function m(){var p=t.getRoot();p.width+=1,de.defer(function(){p.width-=1})}n.parent||m()};qt.toggleHide=function(){Yu=!Yu,de.each(Qx,function(i){i.domElement.style.display=Yu?"none":""})};qt.CLASS_AUTO_PLACE="a";qt.CLASS_AUTO_PLACE_CONTAINER="ac";qt.CLASS_MAIN="main";qt.CLASS_CONTROLLER_ROW="cr";qt.CLASS_TOO_TALL="taller-than-window";qt.CLASS_CLOSED="closed";qt.CLASS_CLOSE_BUTTON="close-button";qt.CLASS_CLOSE_TOP="close-top";qt.CLASS_CLOSE_BOTTOM="close-bottom";qt.CLASS_DRAG="drag";qt.DEFAULT_WIDTH=245;qt.TEXT_CLOSED="Close Controls";qt.TEXT_OPEN="Open Controls";qt._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===o0||i.keyCode===o0)&&qt.toggleHide()};J.bind(window,"keydown",qt._keydownHandler,!1);de.extend(qt.prototype,{add:function(e,t){return qa(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return qa(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;de.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&qs.removeChild(this.domElement);var e=this;de.each(this.__folders,function(t){e.removeFolder(t)}),J.unbind(window,"keydown",qt._keydownHandler,!1),u0(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new qt(t);this.__folders[e]=n;var s=Tp(this,n.domElement);return J.addClass(s,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],u0(e);var t=this;de.each(e.__folders,function(n){e.removeFolder(n)}),de.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=J.getOffset(e.__ul).top,n=0;de.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(n+=J.getHeight(s))}),window.innerHeight-t-l0<n?(J.addClass(e.domElement,qt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-l0+"px"):(J.removeClass(e.domElement,qt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&de.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:de.debounce(function(){this.onResize()},50),remember:function(){if(de.isUndefined(Wa)&&(Wa=new C2,Wa.domElement.innerHTML=E2),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;de.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&D2(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Yd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=El(this)),e.folders={},de.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=El(this),qd(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Za]=El(this,!0)),this.load.remembered[e]=El(this),this.preset=e,Xd(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){de.each(this.__controllers,function(t){this.getRoot().load.remembered?eS(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),de.each(this.__folders,function(t){t.revert(t)}),e||qd(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&tS(this.__listening)},updateDisplay:function(){de.each(this.__controllers,function(e){e.updateDisplay()}),de.each(this.__folders,function(e){e.updateDisplay()})}});function Tp(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function u0(i){J.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&J.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function qd(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function P2(i,e,t){if(t.__li=e,t.__gui=i,de.extend(t,{options:function(l){if(arguments.length>1){var u=t.__li.nextElementSibling;return t.remove(),qa(i,t.object,t.property,{before:u,factoryArgs:[de.toArray(arguments)]})}if(de.isArray(l)||de.isObject(l)){var h=t.__li.nextElementSibling;return t.remove(),qa(i,t.object,t.property,{before:h,factoryArgs:[l]})}},name:function(l){return t.__li.firstElementChild.firstElementChild.innerHTML=l,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Vd){var n=new zl(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});de.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var l=t[o],u=n[o];t[o]=n[o]=function(){var h=Array.prototype.slice.call(arguments);return u.apply(n,h),l.apply(t,h)}}),J.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof zl){var s=function(l){if(de.isNumber(t.__min)&&de.isNumber(t.__max)){var u=t.__li.firstElementChild.firstElementChild.innerHTML,h=t.__gui.__listening.indexOf(t)>-1;t.remove();var f=qa(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return f.name(u),h&&f.listen(),f}return l};t.min=de.compose(s,t.min),t.max=de.compose(s,t.max)}else t instanceof $x?(J.bind(e,"click",function(){J.fakeEvent(t.__checkbox,"click")}),J.bind(t.__checkbox,"click",function(o){o.stopPropagation()})):t instanceof Jx?(J.bind(e,"click",function(){J.fakeEvent(t.__button,"click")}),J.bind(e,"mouseover",function(){J.addClass(t.__button,"hover")}),J.bind(e,"mouseout",function(){J.removeClass(t.__button,"hover")})):t instanceof Wd&&(J.addClass(e,"color"),t.updateDisplay=de.compose(function(o){return e.style.borderLeftColor=t.__color.toString(),o},t.updateDisplay),t.updateDisplay());t.setValue=de.compose(function(o){return i.getRoot().__preset_select&&t.isModified()&&qd(i.getRoot(),!0),o},t.setValue)}function eS(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var s=t.__rememberedObjectIndecesToControllers[n];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[n]=s),s[e.property]=e,t.load&&t.load.remembered){var o=t.load.remembered,l=void 0;if(o[i.preset])l=o[i.preset];else if(o[Za])l=o[Za];else return;if(l[n]&&l[n][e.property]!==void 0){var u=l[n][e.property];e.initialValue=u,e.setValue(u)}}}}function qa(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(n.color)s=new Wd(e,t);else{var o=[e,t].concat(n.factoryArgs);s=T2.apply(i,o)}n.before instanceof us&&(n.before=n.before.__li),eS(i,s),J.addClass(s.domElement,"c");var l=document.createElement("span");J.addClass(l,"property-name"),l.innerHTML=s.property;var u=document.createElement("div");u.appendChild(l),u.appendChild(s.domElement);var h=Tp(i,u,n.before);return J.addClass(h,qt.CLASS_CONTROLLER_ROW),s instanceof Wd?J.addClass(h,"color"):J.addClass(h,m2(s.getValue())),P2(i,h,s),i.__controllers.push(s),s}function Xs(i,e){return document.location.href+"."+e}function Xd(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function h0(i,e){e.style.display=i.useLocalStorage?"block":"none"}function D2(i){var e=i.__save_row=document.createElement("li");J.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),J.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",J.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",J.addClass(n,"button"),J.addClass(n,"save");var s=document.createElement("span");s.innerHTML="New",J.addClass(s,"button"),J.addClass(s,"save-as");var o=document.createElement("span");o.innerHTML="Revert",J.addClass(o,"button"),J.addClass(o,"revert");var l=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?de.each(i.load.remembered,function(p,g){Xd(i,g,g===i.preset)}):Xd(i,Za,!1),J.bind(l,"change",function(){for(var p=0;p<i.__preset_select.length;p++)i.__preset_select[p].innerHTML=i.__preset_select[p].value;i.preset=this.value}),e.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(o),Fa){var u=document.getElementById("dg-local-explain"),h=document.getElementById("dg-local-storage"),f=document.getElementById("dg-save-locally");f.style.display="block",localStorage.getItem(Xs(i,"isLocal"))==="true"&&h.setAttribute("checked","checked"),h0(i,u),J.bind(h,"change",function(){i.useLocalStorage=!i.useLocalStorage,h0(i,u)})}var m=document.getElementById("dg-new-constructor");J.bind(m,"keydown",function(p){p.metaKey&&(p.which===67||p.keyCode===67)&&Wa.hide()}),J.bind(t,"click",function(){m.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Wa.show(),m.focus(),m.select()}),J.bind(n,"click",function(){i.save()}),J.bind(s,"click",function(){var p=prompt("Enter a new preset name.");p&&i.saveAs(p)}),J.bind(o,"click",function(){i.revert()})}function L2(i){var e=void 0;i.__resize_handle=document.createElement("div"),de.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(o){return o.preventDefault(),i.width+=e-o.clientX,i.onResize(),e=o.clientX,!1}function n(){J.removeClass(i.__closeButton,qt.CLASS_DRAG),J.unbind(window,"mousemove",t),J.unbind(window,"mouseup",n)}function s(o){return o.preventDefault(),e=o.clientX,J.addClass(i.__closeButton,qt.CLASS_DRAG),J.bind(window,"mousemove",t),J.bind(window,"mouseup",n),!1}J.bind(i.__resize_handle,"mousedown",s),J.bind(i.__closeButton,"mousedown",s),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Yd(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function El(i,e){var t={};return de.each(i.__rememberedObjects,function(n,s){var o={},l=i.__rememberedObjectIndecesToControllers[s];de.each(l,function(u,h){o[h]=e?u.initialValue:u.getValue()}),t[s]=o}),t}function I2(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function tS(i){i.length!==0&&w2.call(window,function(){tS(i)}),de.each(i,function(e){e.updateDisplay()})}var f0=qt,Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ap(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ku,d0;function U2(){if(d0)return Ku;d0=1;function i(){this.__data__=[],this.size=0}return Ku=i,Ku}var ju,p0;function nS(){if(p0)return ju;p0=1;function i(e,t){return e===t||e!==e&&t!==t}return ju=i,ju}var $u,m0;function jl(){if(m0)return $u;m0=1;var i=nS();function e(t,n){for(var s=t.length;s--;)if(i(t[s][0],n))return s;return-1}return $u=e,$u}var Zu,_0;function O2(){if(_0)return Zu;_0=1;var i=jl(),e=Array.prototype,t=e.splice;function n(s){var o=this.__data__,l=i(o,s);if(l<0)return!1;var u=o.length-1;return l==u?o.pop():t.call(o,l,1),--this.size,!0}return Zu=n,Zu}var Ju,g0;function N2(){if(g0)return Ju;g0=1;var i=jl();function e(t){var n=this.__data__,s=i(n,t);return s<0?void 0:n[s][1]}return Ju=e,Ju}var Qu,v0;function F2(){if(v0)return Qu;v0=1;var i=jl();function e(t){return i(this.__data__,t)>-1}return Qu=e,Qu}var eh,x0;function B2(){if(x0)return eh;x0=1;var i=jl();function e(t,n){var s=this.__data__,o=i(s,t);return o<0?(++this.size,s.push([t,n])):s[o][1]=n,this}return eh=e,eh}var th,S0;function $l(){if(S0)return th;S0=1;var i=U2(),e=O2(),t=N2(),n=F2(),s=B2();function o(l){var u=-1,h=l==null?0:l.length;for(this.clear();++u<h;){var f=l[u];this.set(f[0],f[1])}}return o.prototype.clear=i,o.prototype.delete=e,o.prototype.get=t,o.prototype.has=n,o.prototype.set=s,th=o,th}var nh,y0;function k2(){if(y0)return nh;y0=1;var i=$l();function e(){this.__data__=new i,this.size=0}return nh=e,nh}var ih,b0;function z2(){if(b0)return ih;b0=1;function i(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}return ih=i,ih}var rh,M0;function G2(){if(M0)return rh;M0=1;function i(e){return this.__data__.get(e)}return rh=i,rh}var sh,E0;function H2(){if(E0)return sh;E0=1;function i(e){return this.__data__.has(e)}return sh=i,sh}var ah,T0;function iS(){if(T0)return ah;T0=1;var i=typeof Dr=="object"&&Dr&&Dr.Object===Object&&Dr;return ah=i,ah}var oh,A0;function Wi(){if(A0)return oh;A0=1;var i=iS(),e=typeof self=="object"&&self&&self.Object===Object&&self,t=i||e||Function("return this")();return oh=t,oh}var lh,w0;function wp(){if(w0)return lh;w0=1;var i=Wi(),e=i.Symbol;return lh=e,lh}var ch,C0;function V2(){if(C0)return ch;C0=1;var i=wp(),e=Object.prototype,t=e.hasOwnProperty,n=e.toString,s=i?i.toStringTag:void 0;function o(l){var u=t.call(l,s),h=l[s];try{l[s]=void 0;var f=!0}catch{}var m=n.call(l);return f&&(u?l[s]=h:delete l[s]),m}return ch=o,ch}var uh,R0;function W2(){if(R0)return uh;R0=1;var i=Object.prototype,e=i.toString;function t(n){return e.call(n)}return uh=t,uh}var hh,P0;function Zl(){if(P0)return hh;P0=1;var i=wp(),e=V2(),t=W2(),n="[object Null]",s="[object Undefined]",o=i?i.toStringTag:void 0;function l(u){return u==null?u===void 0?s:n:o&&o in Object(u)?e(u):t(u)}return hh=l,hh}var fh,D0;function to(){if(D0)return fh;D0=1;function i(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}return fh=i,fh}var dh,L0;function rS(){if(L0)return dh;L0=1;var i=Zl(),e=to(),t="[object AsyncFunction]",n="[object Function]",s="[object GeneratorFunction]",o="[object Proxy]";function l(u){if(!e(u))return!1;var h=i(u);return h==n||h==s||h==t||h==o}return dh=l,dh}var ph,I0;function q2(){if(I0)return ph;I0=1;var i=Wi(),e=i["__core-js_shared__"];return ph=e,ph}var mh,U0;function X2(){if(U0)return mh;U0=1;var i=q2(),e=(function(){var n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function t(n){return!!e&&e in n}return mh=t,mh}var _h,O0;function sS(){if(O0)return _h;O0=1;var i=Function.prototype,e=i.toString;function t(n){if(n!=null){try{return e.call(n)}catch{}try{return n+""}catch{}}return""}return _h=t,_h}var gh,N0;function Y2(){if(N0)return gh;N0=1;var i=rS(),e=X2(),t=to(),n=sS(),s=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,l=Function.prototype,u=Object.prototype,h=l.toString,f=u.hasOwnProperty,m=RegExp("^"+h.call(f).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(g){if(!t(g)||e(g))return!1;var x=i(g)?m:o;return x.test(n(g))}return gh=p,gh}var vh,F0;function K2(){if(F0)return vh;F0=1;function i(e,t){return e?.[t]}return vh=i,vh}var xh,B0;function hs(){if(B0)return xh;B0=1;var i=Y2(),e=K2();function t(n,s){var o=e(n,s);return i(o)?o:void 0}return xh=t,xh}var Sh,k0;function Cp(){if(k0)return Sh;k0=1;var i=hs(),e=Wi(),t=i(e,"Map");return Sh=t,Sh}var yh,z0;function Jl(){if(z0)return yh;z0=1;var i=hs(),e=i(Object,"create");return yh=e,yh}var bh,G0;function j2(){if(G0)return bh;G0=1;var i=Jl();function e(){this.__data__=i?i(null):{},this.size=0}return bh=e,bh}var Mh,H0;function $2(){if(H0)return Mh;H0=1;function i(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}return Mh=i,Mh}var Eh,V0;function Z2(){if(V0)return Eh;V0=1;var i=Jl(),e="__lodash_hash_undefined__",t=Object.prototype,n=t.hasOwnProperty;function s(o){var l=this.__data__;if(i){var u=l[o];return u===e?void 0:u}return n.call(l,o)?l[o]:void 0}return Eh=s,Eh}var Th,W0;function J2(){if(W0)return Th;W0=1;var i=Jl(),e=Object.prototype,t=e.hasOwnProperty;function n(s){var o=this.__data__;return i?o[s]!==void 0:t.call(o,s)}return Th=n,Th}var Ah,q0;function Q2(){if(q0)return Ah;q0=1;var i=Jl(),e="__lodash_hash_undefined__";function t(n,s){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=i&&s===void 0?e:s,this}return Ah=t,Ah}var wh,X0;function eI(){if(X0)return wh;X0=1;var i=j2(),e=$2(),t=Z2(),n=J2(),s=Q2();function o(l){var u=-1,h=l==null?0:l.length;for(this.clear();++u<h;){var f=l[u];this.set(f[0],f[1])}}return o.prototype.clear=i,o.prototype.delete=e,o.prototype.get=t,o.prototype.has=n,o.prototype.set=s,wh=o,wh}var Ch,Y0;function tI(){if(Y0)return Ch;Y0=1;var i=eI(),e=$l(),t=Cp();function n(){this.size=0,this.__data__={hash:new i,map:new(t||e),string:new i}}return Ch=n,Ch}var Rh,K0;function nI(){if(K0)return Rh;K0=1;function i(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}return Rh=i,Rh}var Ph,j0;function Ql(){if(j0)return Ph;j0=1;var i=nI();function e(t,n){var s=t.__data__;return i(n)?s[typeof n=="string"?"string":"hash"]:s.map}return Ph=e,Ph}var Dh,$0;function iI(){if($0)return Dh;$0=1;var i=Ql();function e(t){var n=i(this,t).delete(t);return this.size-=n?1:0,n}return Dh=e,Dh}var Lh,Z0;function rI(){if(Z0)return Lh;Z0=1;var i=Ql();function e(t){return i(this,t).get(t)}return Lh=e,Lh}var Ih,J0;function sI(){if(J0)return Ih;J0=1;var i=Ql();function e(t){return i(this,t).has(t)}return Ih=e,Ih}var Uh,Q0;function aI(){if(Q0)return Uh;Q0=1;var i=Ql();function e(t,n){var s=i(this,t),o=s.size;return s.set(t,n),this.size+=s.size==o?0:1,this}return Uh=e,Uh}var Oh,ev;function oI(){if(ev)return Oh;ev=1;var i=tI(),e=iI(),t=rI(),n=sI(),s=aI();function o(l){var u=-1,h=l==null?0:l.length;for(this.clear();++u<h;){var f=l[u];this.set(f[0],f[1])}}return o.prototype.clear=i,o.prototype.delete=e,o.prototype.get=t,o.prototype.has=n,o.prototype.set=s,Oh=o,Oh}var Nh,tv;function lI(){if(tv)return Nh;tv=1;var i=$l(),e=Cp(),t=oI(),n=200;function s(o,l){var u=this.__data__;if(u instanceof i){var h=u.__data__;if(!e||h.length<n-1)return h.push([o,l]),this.size=++u.size,this;u=this.__data__=new t(h)}return u.set(o,l),this.size=u.size,this}return Nh=s,Nh}var Fh,nv;function cI(){if(nv)return Fh;nv=1;var i=$l(),e=k2(),t=z2(),n=G2(),s=H2(),o=lI();function l(u){var h=this.__data__=new i(u);this.size=h.size}return l.prototype.clear=e,l.prototype.delete=t,l.prototype.get=n,l.prototype.has=s,l.prototype.set=o,Fh=l,Fh}var Bh,iv;function uI(){if(iv)return Bh;iv=1;function i(e,t){for(var n=-1,s=e==null?0:e.length;++n<s&&t(e[n],n,e)!==!1;);return e}return Bh=i,Bh}var kh,rv;function hI(){if(rv)return kh;rv=1;var i=hs(),e=(function(){try{var t=i(Object,"defineProperty");return t({},"",{}),t}catch{}})();return kh=e,kh}var zh,sv;function aS(){if(sv)return zh;sv=1;var i=hI();function e(t,n,s){n=="__proto__"&&i?i(t,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[n]=s}return zh=e,zh}var Gh,av;function oS(){if(av)return Gh;av=1;var i=aS(),e=nS(),t=Object.prototype,n=t.hasOwnProperty;function s(o,l,u){var h=o[l];(!(n.call(o,l)&&e(h,u))||u===void 0&&!(l in o))&&i(o,l,u)}return Gh=s,Gh}var Hh,ov;function ec(){if(ov)return Hh;ov=1;var i=oS(),e=aS();function t(n,s,o,l){var u=!o;o||(o={});for(var h=-1,f=s.length;++h<f;){var m=s[h],p=l?l(o[m],n[m],m,o,n):void 0;p===void 0&&(p=n[m]),u?e(o,m,p):i(o,m,p)}return o}return Hh=t,Hh}var Vh,lv;function fI(){if(lv)return Vh;lv=1;function i(e,t){for(var n=-1,s=Array(e);++n<e;)s[n]=t(n);return s}return Vh=i,Vh}var Wh,cv;function no(){if(cv)return Wh;cv=1;function i(e){return e!=null&&typeof e=="object"}return Wh=i,Wh}var qh,uv;function dI(){if(uv)return qh;uv=1;var i=Zl(),e=no(),t="[object Arguments]";function n(s){return e(s)&&i(s)==t}return qh=n,qh}var Xh,hv;function pI(){if(hv)return Xh;hv=1;var i=dI(),e=no(),t=Object.prototype,n=t.hasOwnProperty,s=t.propertyIsEnumerable,o=i((function(){return arguments})())?i:function(l){return e(l)&&n.call(l,"callee")&&!s.call(l,"callee")};return Xh=o,Xh}var Yh,fv;function Rp(){if(fv)return Yh;fv=1;var i=Array.isArray;return Yh=i,Yh}var Ba={exports:{}},Kh,dv;function mI(){if(dv)return Kh;dv=1;function i(){return!1}return Kh=i,Kh}Ba.exports;var pv;function lS(){return pv||(pv=1,(function(i,e){var t=Wi(),n=mI(),s=e&&!e.nodeType&&e,o=s&&!0&&i&&!i.nodeType&&i,l=o&&o.exports===s,u=l?t.Buffer:void 0,h=u?u.isBuffer:void 0,f=h||n;i.exports=f})(Ba,Ba.exports)),Ba.exports}var jh,mv;function _I(){if(mv)return jh;mv=1;var i=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function t(n,s){var o=typeof n;return s=s??i,!!s&&(o=="number"||o!="symbol"&&e.test(n))&&n>-1&&n%1==0&&n<s}return jh=t,jh}var $h,_v;function cS(){if(_v)return $h;_v=1;var i=9007199254740991;function e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=i}return $h=e,$h}var Zh,gv;function gI(){if(gv)return Zh;gv=1;var i=Zl(),e=cS(),t=no(),n="[object Arguments]",s="[object Array]",o="[object Boolean]",l="[object Date]",u="[object Error]",h="[object Function]",f="[object Map]",m="[object Number]",p="[object Object]",g="[object RegExp]",x="[object Set]",M="[object String]",E="[object WeakMap]",v="[object ArrayBuffer]",_="[object DataView]",D="[object Float32Array]",U="[object Float64Array]",I="[object Int8Array]",O="[object Int16Array]",B="[object Int32Array]",C="[object Uint8Array]",F="[object Uint8ClampedArray]",S="[object Uint16Array]",T="[object Uint32Array]",L={};L[D]=L[U]=L[I]=L[O]=L[B]=L[C]=L[F]=L[S]=L[T]=!0,L[n]=L[s]=L[v]=L[o]=L[_]=L[l]=L[u]=L[h]=L[f]=L[m]=L[p]=L[g]=L[x]=L[M]=L[E]=!1;function W(X){return t(X)&&e(X.length)&&!!L[i(X)]}return Zh=W,Zh}var Jh,vv;function Pp(){if(vv)return Jh;vv=1;function i(e){return function(t){return e(t)}}return Jh=i,Jh}var ka={exports:{}};ka.exports;var xv;function Dp(){return xv||(xv=1,(function(i,e){var t=iS(),n=e&&!e.nodeType&&e,s=n&&!0&&i&&!i.nodeType&&i,o=s&&s.exports===n,l=o&&t.process,u=(function(){try{var h=s&&s.require&&s.require("util").types;return h||l&&l.binding&&l.binding("util")}catch{}})();i.exports=u})(ka,ka.exports)),ka.exports}var Qh,Sv;function vI(){if(Sv)return Qh;Sv=1;var i=gI(),e=Pp(),t=Dp(),n=t&&t.isTypedArray,s=n?e(n):i;return Qh=s,Qh}var ef,yv;function uS(){if(yv)return ef;yv=1;var i=fI(),e=pI(),t=Rp(),n=lS(),s=_I(),o=vI(),l=Object.prototype,u=l.hasOwnProperty;function h(f,m){var p=t(f),g=!p&&e(f),x=!p&&!g&&n(f),M=!p&&!g&&!x&&o(f),E=p||g||x||M,v=E?i(f.length,String):[],_=v.length;for(var D in f)(m||u.call(f,D))&&!(E&&(D=="length"||x&&(D=="offset"||D=="parent")||M&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||s(D,_)))&&v.push(D);return v}return ef=h,ef}var tf,bv;function Lp(){if(bv)return tf;bv=1;var i=Object.prototype;function e(t){var n=t&&t.constructor,s=typeof n=="function"&&n.prototype||i;return t===s}return tf=e,tf}var nf,Mv;function hS(){if(Mv)return nf;Mv=1;function i(e,t){return function(n){return e(t(n))}}return nf=i,nf}var rf,Ev;function xI(){if(Ev)return rf;Ev=1;var i=hS(),e=i(Object.keys,Object);return rf=e,rf}var sf,Tv;function SI(){if(Tv)return sf;Tv=1;var i=Lp(),e=xI(),t=Object.prototype,n=t.hasOwnProperty;function s(o){if(!i(o))return e(o);var l=[];for(var u in Object(o))n.call(o,u)&&u!="constructor"&&l.push(u);return l}return sf=s,sf}var af,Av;function fS(){if(Av)return af;Av=1;var i=rS(),e=cS();function t(n){return n!=null&&e(n.length)&&!i(n)}return af=t,af}var of,wv;function Ip(){if(wv)return of;wv=1;var i=uS(),e=SI(),t=fS();function n(s){return t(s)?i(s):e(s)}return of=n,of}var lf,Cv;function yI(){if(Cv)return lf;Cv=1;var i=ec(),e=Ip();function t(n,s){return n&&i(s,e(s),n)}return lf=t,lf}var cf,Rv;function bI(){if(Rv)return cf;Rv=1;function i(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}return cf=i,cf}var uf,Pv;function MI(){if(Pv)return uf;Pv=1;var i=to(),e=Lp(),t=bI(),n=Object.prototype,s=n.hasOwnProperty;function o(l){if(!i(l))return t(l);var u=e(l),h=[];for(var f in l)f=="constructor"&&(u||!s.call(l,f))||h.push(f);return h}return uf=o,uf}var hf,Dv;function Up(){if(Dv)return hf;Dv=1;var i=uS(),e=MI(),t=fS();function n(s){return t(s)?i(s,!0):e(s)}return hf=n,hf}var ff,Lv;function EI(){if(Lv)return ff;Lv=1;var i=ec(),e=Up();function t(n,s){return n&&i(s,e(s),n)}return ff=t,ff}var za={exports:{}};za.exports;var Iv;function TI(){return Iv||(Iv=1,(function(i,e){var t=Wi(),n=e&&!e.nodeType&&e,s=n&&!0&&i&&!i.nodeType&&i,o=s&&s.exports===n,l=o?t.Buffer:void 0,u=l?l.allocUnsafe:void 0;function h(f,m){if(m)return f.slice();var p=f.length,g=u?u(p):new f.constructor(p);return f.copy(g),g}i.exports=h})(za,za.exports)),za.exports}var df,Uv;function AI(){if(Uv)return df;Uv=1;function i(e,t){var n=-1,s=e.length;for(t||(t=Array(s));++n<s;)t[n]=e[n];return t}return df=i,df}var pf,Ov;function wI(){if(Ov)return pf;Ov=1;function i(e,t){for(var n=-1,s=e==null?0:e.length,o=0,l=[];++n<s;){var u=e[n];t(u,n,e)&&(l[o++]=u)}return l}return pf=i,pf}var mf,Nv;function dS(){if(Nv)return mf;Nv=1;function i(){return[]}return mf=i,mf}var _f,Fv;function Op(){if(Fv)return _f;Fv=1;var i=wI(),e=dS(),t=Object.prototype,n=t.propertyIsEnumerable,s=Object.getOwnPropertySymbols,o=s?function(l){return l==null?[]:(l=Object(l),i(s(l),function(u){return n.call(l,u)}))}:e;return _f=o,_f}var gf,Bv;function CI(){if(Bv)return gf;Bv=1;var i=ec(),e=Op();function t(n,s){return i(n,e(n),s)}return gf=t,gf}var vf,kv;function pS(){if(kv)return vf;kv=1;function i(e,t){for(var n=-1,s=t.length,o=e.length;++n<s;)e[o+n]=t[n];return e}return vf=i,vf}var xf,zv;function mS(){if(zv)return xf;zv=1;var i=hS(),e=i(Object.getPrototypeOf,Object);return xf=e,xf}var Sf,Gv;function _S(){if(Gv)return Sf;Gv=1;var i=pS(),e=mS(),t=Op(),n=dS(),s=Object.getOwnPropertySymbols,o=s?function(l){for(var u=[];l;)i(u,t(l)),l=e(l);return u}:n;return Sf=o,Sf}var yf,Hv;function RI(){if(Hv)return yf;Hv=1;var i=ec(),e=_S();function t(n,s){return i(n,e(n),s)}return yf=t,yf}var bf,Vv;function gS(){if(Vv)return bf;Vv=1;var i=pS(),e=Rp();function t(n,s,o){var l=s(n);return e(n)?l:i(l,o(n))}return bf=t,bf}var Mf,Wv;function PI(){if(Wv)return Mf;Wv=1;var i=gS(),e=Op(),t=Ip();function n(s){return i(s,t,e)}return Mf=n,Mf}var Ef,qv;function DI(){if(qv)return Ef;qv=1;var i=gS(),e=_S(),t=Up();function n(s){return i(s,t,e)}return Ef=n,Ef}var Tf,Xv;function LI(){if(Xv)return Tf;Xv=1;var i=hs(),e=Wi(),t=i(e,"DataView");return Tf=t,Tf}var Af,Yv;function II(){if(Yv)return Af;Yv=1;var i=hs(),e=Wi(),t=i(e,"Promise");return Af=t,Af}var wf,Kv;function UI(){if(Kv)return wf;Kv=1;var i=hs(),e=Wi(),t=i(e,"Set");return wf=t,wf}var Cf,jv;function OI(){if(jv)return Cf;jv=1;var i=hs(),e=Wi(),t=i(e,"WeakMap");return Cf=t,Cf}var Rf,$v;function Np(){if($v)return Rf;$v=1;var i=LI(),e=Cp(),t=II(),n=UI(),s=OI(),o=Zl(),l=sS(),u="[object Map]",h="[object Object]",f="[object Promise]",m="[object Set]",p="[object WeakMap]",g="[object DataView]",x=l(i),M=l(e),E=l(t),v=l(n),_=l(s),D=o;return(i&&D(new i(new ArrayBuffer(1)))!=g||e&&D(new e)!=u||t&&D(t.resolve())!=f||n&&D(new n)!=m||s&&D(new s)!=p)&&(D=function(U){var I=o(U),O=I==h?U.constructor:void 0,B=O?l(O):"";if(B)switch(B){case x:return g;case M:return u;case E:return f;case v:return m;case _:return p}return I}),Rf=D,Rf}var Pf,Zv;function NI(){if(Zv)return Pf;Zv=1;var i=Object.prototype,e=i.hasOwnProperty;function t(n){var s=n.length,o=new n.constructor(s);return s&&typeof n[0]=="string"&&e.call(n,"index")&&(o.index=n.index,o.input=n.input),o}return Pf=t,Pf}var Df,Jv;function FI(){if(Jv)return Df;Jv=1;var i=Wi(),e=i.Uint8Array;return Df=e,Df}var Lf,Qv;function Fp(){if(Qv)return Lf;Qv=1;var i=FI();function e(t){var n=new t.constructor(t.byteLength);return new i(n).set(new i(t)),n}return Lf=e,Lf}var If,ex;function BI(){if(ex)return If;ex=1;var i=Fp();function e(t,n){var s=n?i(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.byteLength)}return If=e,If}var Uf,tx;function kI(){if(tx)return Uf;tx=1;var i=/\w*$/;function e(t){var n=new t.constructor(t.source,i.exec(t));return n.lastIndex=t.lastIndex,n}return Uf=e,Uf}var Of,nx;function zI(){if(nx)return Of;nx=1;var i=wp(),e=i?i.prototype:void 0,t=e?e.valueOf:void 0;function n(s){return t?Object(t.call(s)):{}}return Of=n,Of}var Nf,ix;function GI(){if(ix)return Nf;ix=1;var i=Fp();function e(t,n){var s=n?i(t.buffer):t.buffer;return new t.constructor(s,t.byteOffset,t.length)}return Nf=e,Nf}var Ff,rx;function HI(){if(rx)return Ff;rx=1;var i=Fp(),e=BI(),t=kI(),n=zI(),s=GI(),o="[object Boolean]",l="[object Date]",u="[object Map]",h="[object Number]",f="[object RegExp]",m="[object Set]",p="[object String]",g="[object Symbol]",x="[object ArrayBuffer]",M="[object DataView]",E="[object Float32Array]",v="[object Float64Array]",_="[object Int8Array]",D="[object Int16Array]",U="[object Int32Array]",I="[object Uint8Array]",O="[object Uint8ClampedArray]",B="[object Uint16Array]",C="[object Uint32Array]";function F(S,T,L){var W=S.constructor;switch(T){case x:return i(S);case o:case l:return new W(+S);case M:return e(S,L);case E:case v:case _:case D:case U:case I:case O:case B:case C:return s(S,L);case u:return new W;case h:case p:return new W(S);case f:return t(S);case m:return new W;case g:return n(S)}}return Ff=F,Ff}var Bf,sx;function VI(){if(sx)return Bf;sx=1;var i=to(),e=Object.create,t=(function(){function n(){}return function(s){if(!i(s))return{};if(e)return e(s);n.prototype=s;var o=new n;return n.prototype=void 0,o}})();return Bf=t,Bf}var kf,ax;function WI(){if(ax)return kf;ax=1;var i=VI(),e=mS(),t=Lp();function n(s){return typeof s.constructor=="function"&&!t(s)?i(e(s)):{}}return kf=n,kf}var zf,ox;function qI(){if(ox)return zf;ox=1;var i=Np(),e=no(),t="[object Map]";function n(s){return e(s)&&i(s)==t}return zf=n,zf}var Gf,lx;function XI(){if(lx)return Gf;lx=1;var i=qI(),e=Pp(),t=Dp(),n=t&&t.isMap,s=n?e(n):i;return Gf=s,Gf}var Hf,cx;function YI(){if(cx)return Hf;cx=1;var i=Np(),e=no(),t="[object Set]";function n(s){return e(s)&&i(s)==t}return Hf=n,Hf}var Vf,ux;function KI(){if(ux)return Vf;ux=1;var i=YI(),e=Pp(),t=Dp(),n=t&&t.isSet,s=n?e(n):i;return Vf=s,Vf}var Wf,hx;function jI(){if(hx)return Wf;hx=1;var i=cI(),e=uI(),t=oS(),n=yI(),s=EI(),o=TI(),l=AI(),u=CI(),h=RI(),f=PI(),m=DI(),p=Np(),g=NI(),x=HI(),M=WI(),E=Rp(),v=lS(),_=XI(),D=to(),U=KI(),I=Ip(),O=Up(),B=1,C=2,F=4,S="[object Arguments]",T="[object Array]",L="[object Boolean]",W="[object Date]",X="[object Error]",ie="[object Function]",re="[object GeneratorFunction]",ee="[object Map]",$="[object Number]",oe="[object Object]",Ae="[object RegExp]",ye="[object Set]",Me="[object String]",ut="[object Symbol]",at="[object WeakMap]",Ht="[object ArrayBuffer]",wt="[object DataView]",le="[object Float32Array]",_e="[object Float64Array]",Le="[object Int8Array]",et="[object Int16Array]",ze="[object Int32Array]",vt="[object Uint8Array]",Xt="[object Uint8ClampedArray]",St="[object Uint16Array]",ot="[object Uint32Array]",He={};He[S]=He[T]=He[Ht]=He[wt]=He[L]=He[W]=He[le]=He[_e]=He[Le]=He[et]=He[ze]=He[ee]=He[$]=He[oe]=He[Ae]=He[ye]=He[Me]=He[ut]=He[vt]=He[Xt]=He[St]=He[ot]=!0,He[X]=He[ie]=He[at]=!1;function tt(Ve,k,kt,yt,lt,Pe){var P,b=k&B,H=k&C,ae=k&F;if(kt&&(P=lt?kt(Ve,yt,lt,Pe):kt(Ve)),P!==void 0)return P;if(!D(Ve))return Ve;var ue=E(Ve);if(ue){if(P=g(Ve),!b)return l(Ve,P)}else{var te=p(Ve),Be=te==ie||te==re;if(v(Ve))return o(Ve,b);if(te==oe||te==S||Be&&!lt){if(P=H||Be?{}:M(Ve),!b)return H?h(Ve,s(P,Ve)):u(Ve,n(P,Ve))}else{if(!He[te])return lt?Ve:{};P=x(Ve,te,b)}}Pe||(Pe=new i);var Se=Pe.get(Ve);if(Se)return Se;Pe.set(Ve,P),U(Ve)?Ve.forEach(function(pe){P.add(tt(pe,k,kt,pe,Ve,Pe))}):_(Ve)&&Ve.forEach(function(pe,ve){P.set(ve,tt(pe,k,kt,ve,Ve,Pe))});var Ne=ae?H?m:f:H?O:I,Ke=ue?void 0:Ne(Ve);return e(Ke||Ve,function(pe,ve){Ke&&(ve=pe,pe=Ve[ve]),t(P,ve,tt(pe,k,kt,ve,Ve,Pe))}),P}return Wf=tt,Wf}var qf,fx;function $I(){if(fx)return qf;fx=1;var i=jI(),e=1,t=4;function n(s){return i(s,e|t)}return qf=n,qf}var ZI=$I();const vS=Ap(ZI);function xS(i){return i&&typeof i=="object"&&!Object.isFrozen(i)&&(Object.values(i).forEach(e=>{e&&typeof e=="object"&&xS(e)}),Object.freeze(i)),i}var Lr=(i=>(i.SPHERE="SPHERE",i.BOX="BOX",i.PROCEDURAL="PROCEDURAL",i))(Lr||{});const JI=!0,SS=xS({ball:{bounciness:.8,launchForce:3.6,radius:8,showVelocityVector:!1,traceDuration:5,traceTransparency:.6,outline:{enabled:!0,edgeStrength:3,edgeGlow:0,color:"#00bfff"}},camera:{fov:30,near:.1,far:Math.pow(10,6),rotationSpeed:0},planet:{defaultDensity:14e-5,borderThickness:2,maxOffset:700},skybox:{type:Lr.PROCEDURAL,opacity:1,useSphereSkybox:!1},simulationMode:!0,useRandomLevel:JI,usePreCalculatedFlight:!1,maxFlightDurationInSeconds:30,ticksPerSecond:128,showFPSCounter:!0,showInfoTab:!1}),Tl="space-golf-3d:";class yS{static get(e){try{const t=localStorage.getItem(Tl+e);return t?JSON.parse(t):null}catch(t){return console.error("Error reading from localStorage:",t),null}}static set(e,t){try{localStorage.setItem(Tl+e,JSON.stringify(t))}catch(n){console.error("Error writing to localStorage:",n)}}static remove(e){try{localStorage.removeItem(Tl+e)}catch(t){console.error("Error removing from localStorage:",t)}}static clear(){try{Object.keys(localStorage).forEach(t=>{t.startsWith(Tl)&&localStorage.removeItem(t)})}catch(e){console.error("Error clearing localStorage:",e)}}}function Bp(){return vS(SS)}function bS(i){const e=vS(i);return e.skybox.useSphereSkybox&&e.skybox.type!==Lr.SPHERE?e.skybox.type=Lr.SPHERE:!e.skybox.useSphereSkybox&&e.skybox.type===Lr.SPHERE&&(e.skybox.type=SS.skybox.type),e.skybox.useSphereSkybox=e.skybox.type===Lr.SPHERE,e}function QI(i){const e=Bp();return{...e,...i,ball:{...e.ball,...i.ball||{},outline:{...e.ball.outline,...i.ball?.outline||{}}},camera:{...e.camera,...i.camera||{}},planet:{...e.planet,...i.planet||{}},skybox:{...e.skybox,...i.skybox||{}}}}function e3(){const i=yS.get("settings");return i?bS(QI(i)):Bp()}let Ir=e3();function ht(){return Ir}function MS(i=Ir){Ir=bS(i),yS.set("settings",Ir)}function t3(){Ir=Bp(),MS(Ir)}class n3{constructor(){this.guiSettings=Ir,this.restartCallback=null,this.settingChangeCallback=null,this.restartRequiredSettings=new Set(["simulationMode","ball.radius","useRandomLevel","planet.defaultDensity","planet.maxOffset"]),this.gui=new f0({width:300}),this.setupGUI()}setRestartCallback(e){this.restartCallback=e}setSettingChangeCallback(e){this.settingChangeCallback=e}setupGUI(){this.guiSettings=Ir;const e=this.guiSettings,t=this.gui.addFolder("Ball");this.addControl(t,e.ball,"bounciness",0,1,.01,"ball.bounciness"),this.addControl(t,e.ball,"launchForce",0,10,.1,"ball.launchForce"),this.addControl(t,e.ball,"radius",1,20,1,"ball.radius"),this.addControl(t,e.ball,"showVelocityVector",null,null,null,"ball.showVelocityVector"),this.addControl(t,e.ball,"traceDuration",0,20,1,"ball.traceDuration"),this.addControl(t,e.ball,"traceTransparency",0,1,.05,"ball.traceTransparency"),t.open();const n=this.gui.addFolder("Camera");this.addControl(n,e.camera,"fov",10,120,1,"camera.fov"),this.addControl(n,e.camera,"near",.01,1,.01,"camera.near"),this.addControl(n,e.camera,"far",1e3,2e6,1e3,"camera.far"),this.addControl(n,e.camera,"rotationSpeed",0,2,.1,"camera.rotationSpeed"),n.open();const s=this.gui.addFolder("Planet");this.addControl(s,e.planet,"defaultDensity",1e-5,.001,1e-5,"planet.defaultDensity"),this.addControl(s,e.planet,"borderThickness",0,10,.5,"planet.borderThickness"),this.addControl(s,e.planet,"maxOffset",100,2e3,10,"planet.maxOffset"),s.open();const o=this.gui.addFolder("Skybox");this.addControl(o,e.skybox,"useSphereSkybox",null,null,null,"skybox.useSphereSkybox"),this.addControl(o,e.skybox,"opacity",0,1,.05,"skybox.opacity"),o.open();const l=this.gui.addFolder("General");this.addControl(l,e,"simulationMode",null,null,null,"simulationMode"),this.addControl(l,e,"useRandomLevel",null,null,null,"useRandomLevel"),this.addControl(l,e,"showFPSCounter",null,null,null,"showFPSCounter"),this.addControl(l,e,"showInfoTab",null,null,null,"showInfoTab"),l.open();const u=this.gui.addFolder("Flight");this.addControl(u,e,"usePreCalculatedFlight",null,null,null,"usePreCalculatedFlight"),this.addControl(u,e,"maxFlightDurationInSeconds",1,120,1,"maxFlightDurationInSeconds"),this.addControl(u,e,"ticksPerSecond",10,1e3,10,"ticksPerSecond"),u.open(),this.gui.add({reset:()=>this.handleReset()},"reset").name("Reset to Defaults")}addControl(e,t,n,s,o,l,u){let h;typeof t[n]=="boolean"?h=e.add(t,n):s!==null&&o!==null?(h=e.add(t,n,s,o),l!==null&&h.step(l)):h=e.add(t,n),h.onChange(()=>{MS(this.guiSettings),this.settingChangeCallback?.(u),this.restartRequiredSettings.has(u)&&this.autoRestart()})}autoRestart(){this.restartCallback&&this.restartCallback()}handleReset(){t3(),this.gui.destroy(),this.gui=new f0({width:300}),this.setupGUI(),this.autoRestart()}show(){this.gui.show()}hide(){this.gui.hide()}destroy(){this.gui.destroy()}}const i3=new vp;function dx(i){const e=new Gn({color:"rgb(0,0,0)",side:en}),t=32,n=32,s=ht().planet.borderThickness;return new Sn(new Nr(i+s,t,n),e)}function r3(i){if(Array.isArray(i)){i.forEach(e=>e.dispose());return}i.dispose()}class ES extends Sn{get mass(){const e=Math.PI*4/3;return this.density*this.radius**3*e}constructor({radius:e,color:t="rgb(255,0,0)",density:n=ht().planet.defaultDensity,textureUrl:s}){super(new Nr(e,32,32),new kw({color:t})),this.radius=e,this.density=n,this.borderMesh=dx(e),this.add(this.borderMesh),s&&this.loadTexture(s)}refreshBorder(){this.remove(this.borderMesh),this.borderMesh.geometry.dispose(),r3(this.borderMesh.material),this.borderMesh=dx(this.radius),this.add(this.borderMesh)}async loadTexture(e){try{const t=await i3.loadAsync(e);this.material.map=t,this.material.needsUpdate=!0}catch(t){console.warn(`Failed to load planet texture from ${e}:`,t)}}}class s3{constructor(e){this.scene=e}getPlanets(){return this.getInstancesOf(ES)}getLines(){return this.getInstancesOf(pp)}getInstancesOf(e){return this.scene.children.filter(t=>t instanceof e)}}const a3=document.getElementById("infoTab"),o3=document.getElementById("infoTab__text"),Il={updateText(i){const e=`Ball: {
	position: {
		x: ${i.position.x.toFixed(0)},
		y: ${i.position.y.toFixed(0)},
		z: ${i.position.z.toFixed(0)}
	},
	velocity: {
		length: ${i.velocity.length().toFixed(2)},
		x: ${i.velocity.x.toFixed(2)},
		y: ${i.velocity.y.toFixed(2)},
		z: ${i.velocity.z.toFixed(2)}
	}
}`;o3.textContent=e},setVisible(i){a3.style.display=i?"block":"none"}};Il.setVisible(ht().showInfoTab);class l3 extends vn{constructor(e){const t=ht();super(t.camera.fov,innerWidth/innerHeight,t.camera.near,t.camera.far),this.position.set(400,200,40),this.lookAt(new G)}setupLockControls(){}reset(e){if(!e.landedPlanet)return;const t=e.position.clone(),s=(e.landedPlanet?.position.clone()).sub(t),o=t.clone().sub(s.normalize().multiplyScalar(1));this.position.copy(o),this.lookAt(t)}getControlsObject(){}}const Ar=()=>{const i=ht();return new vn(i.camera.fov,innerWidth/innerHeight,i.camera.near,i.camera.far)};class c3 extends Ks{constructor(){super(),this.cameras=[Ar(),Ar(),Ar(),Ar(),Ar(),Ar(),Ar(),Ar()],this.activeCamera=this.cameras[0],this.lastSwitchDate=Date.now(),this.initializeCameraPositions()}initializeCameraPositions(){const e=ht().planet.maxOffset+900,t=-e,n=e;this.cameras[0].position.set(t,t/2,t),this.cameras[1].position.set(t,t/2,n),this.cameras[2].position.set(t,n/2,t),this.cameras[3].position.set(t,n/2,n),this.cameras[4].position.set(n,t/2,t),this.cameras[5].position.set(n,t/2,n),this.cameras[6].position.set(n,n/2,t),this.cameras[7].position.set(n,n/2,n)}selectActiveCamera(e){if(Date.now()-this.lastSwitchDate<3e3)return;const s=+(e.x>0)*4+ +(e.y>0)*2+ +(e.z>0)*1;this.lastSwitchDate=Date.now(),this.activeCamera=this.cameras[s]}updateActiveCamera(e){this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.activeCamera.lookAt(e)}applySettings(){const e=ht();this.initializeCameraPositions(),this.cameras.forEach(t=>{t.fov=e.camera.fov,t.near=e.camera.near,t.far=e.camera.far,t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix()})}getActiveCamera(){return this.activeCamera}update(e){this.selectActiveCamera(e),this.updateActiveCamera(e)}}class u3 extends vn{constructor(e){const t=ht();super(t.camera.fov,innerWidth/innerHeight,t.camera.near,t.camera.far),this.position.set(400,200,40),this.orbitControls=new Kx(this,e),this.lookAt(new G)}reset(e){if(!e.landedPlanet)return;const t=e.position.clone(),s=(e.landedPlanet?.position.clone()).sub(t),o=t.clone().sub(s.normalize().multiplyScalar(2e3));this.orbitControls.target=t,this.position.copy(o),this.lookAt(t)}}const Gl={ballHit:(i=1)=>Xf("audio-ping-pong-ball-hit",{volume:i}),ballFlightStart:(i=.5)=>Xf("audio-ball-flight-start",{volume:i,startTimeMS:800,stopTimeMS:1e3}),ambient:()=>Xf("audio-ambient",{volume:.5})};function Xf(i,{volume:e=1,startTimeMS:t=0,stopTimeMS:n}){const s=document.getElementById(i);if(!s)throw new Error(`Audio not found: ${i}`);s.pause(),s.volume=e,s.currentTime=t/1e3,s.play(),typeof n=="number"&&setTimeout(function(){s.pause()},n)}function TS({pulled:i,puller:e,timeDelta:t}){const n=e.position.clone().sub(i.position),s=e.position.distanceTo(i.position);return n.normalize().multiplyScalar(e.mass).multiplyScalar(i.mass).multiplyScalar(t*100).divideScalar(s**2)}function AS({staticSphere:i,movingSphere:e,onBounceVelocityMultiplier:t=ht().ball.bounciness}){const n=e.position.clone().sub(i.position).normalize(),s=n.dot(e.velocity);return e.velocity.clone().sub(n.clone().multiplyScalar(2*s)).multiplyScalar(t)}function wS(i,e){const t=i.position.clone().sub(e.position).normalize().multiplyScalar(e.radius+i.radius),n=e.position.clone().add(t);return i.position.set(n.x,n.y,n.z),n}function h3(i,e){return i.position.distanceTo(e.position)<=i.radius+e.radius}function f3(i,e){return i.position.distanceTo(e.position)+i.radius<=e.radius}function d3(i,e){return h3(i,e)||f3(i,e)}function p3(i,e,t,n={ticksPerSecond:ht().ticksPerSecond,maxFlightDurationInSeconds:ht().maxFlightDurationInSeconds??30}){const s=n.ticksPerSecond,o=n.maxFlightDurationInSeconds,u=[{position:e.position.clone().clone(),velocity:i.clone()}],h=[];let f=!1;for(let m=1;m<s*o;m++){const p=u[m-1],g=_3({position:p.position.clone(),radius:e.radius,velocity:p.velocity.clone()},t);if(g&&!f)h.push(m),f=!0,u.push({velocity:g.newVelocity,position:g.contactPoint.clone()});else{f=!1;const x=p.velocity.clone().add(m3(s,e,t)),M=1/s,E=p.position.clone().add(p.velocity.clone().multiplyScalar(M*60));u.push({velocity:x,position:E})}}return{ticks:u,ticksWithCollisions:h}}function m3(i,e,t){const n=1/i,s=new G(0,0,0);return t.forEach(o=>{s.add(TS({puller:o,pulled:e,timeDelta:n}))}),s}function _3(i,e){let t=null;return e.some(n=>{if(d3(i,n)){const s=AS({staticSphere:n,movingSphere:i}),o=Math.min(1,i.velocity.length()/5);Gl.ballHit(o);const l=wS(i,n);return s.length()<.2?t={newVelocity:new G(0,0,0),contactPoint:l,stopsBall:!0}:t={newVelocity:s,contactPoint:l,stopsBall:!1},!0}return!1}),t}function CS(i,e,t=[]){const n=ht(),s=new G(e.x,e.y,e.z).normalize().multiplyScalar(n.ball.launchForce);if(i.landedPlanet=null,i.velocity=s,n.usePreCalculatedFlight&&t.length>0){const o=p3(s,i,t);i.setPreCalculatedFlight(o)}Gl.ballFlightStart()}var Ga={exports:{}},g3=Ga.exports,px;function v3(){return px||(px=1,(function(i,e){(function(t,n){{var s=n();i&&i.exports&&(e=i.exports=s),e.randomColor=s}})(g3,function(){var t=null,n={};_();var s=[],o=function(C){if(C=C||{},C.seed!==void 0&&C.seed!==null&&C.seed===parseInt(C.seed,10))t=C.seed;else if(typeof C.seed=="string")t=O(C.seed);else{if(C.seed!==void 0&&C.seed!==null)throw new TypeError("The seed value must be an integer or string");t=null}var F,S,T;if(C.count!==null&&C.count!==void 0){for(var L=C.count,W=[],X=0;X<C.count;X++)s.push(!1);for(C.count=null;L>W.length;){var ie=o(C);t!==null&&(C.seed=t),W.push(ie)}return C.count=L,W}return F=l(C),S=u(F,C),T=h(F,S,C),f([F,S,T],C)};function l(C){if(s.length>0){var F=B(C.hue),S=M(F),T=(F[1]-F[0])/s.length,L=parseInt((S-F[0])/T);s[L]===!0?L=(L+2)%s.length:s[L]=!0;var W=(F[0]+L*T)%359,X=(F[0]+(L+1)*T)%359;return F=[W,X],S=M(F),S<0&&(S=360+S),S}else{var F=p(C.hue);return S=M(F),S<0&&(S=360+S),S}}function u(C,F){if(F.hue==="monochrome")return 0;if(F.luminosity==="random")return M([0,100]);var S=g(C),T=S[0],L=S[1];switch(F.luminosity){case"bright":T=55;break;case"dark":T=L-10;break;case"light":L=55;break}return M([T,L])}function h(C,F,S){var T=m(C,F),L=100;switch(S.luminosity){case"dark":L=T+20;break;case"light":T=(L+T)/2;break;case"random":T=0,L=100;break}return M([T,L])}function f(C,F){switch(F.format){case"hsvArray":return C;case"hslArray":return I(C);case"hsl":var S=I(C);return"hsl("+S[0]+", "+S[1]+"%, "+S[2]+"%)";case"hsla":var T=I(C),X=F.alpha||Math.random();return"hsla("+T[0]+", "+T[1]+"%, "+T[2]+"%, "+X+")";case"rgbArray":return D(C);case"rgb":var L=D(C);return"rgb("+L.join(", ")+")";case"rgba":var W=D(C),X=F.alpha||Math.random();return"rgba("+W.join(", ")+", "+X+")";default:return E(C)}}function m(C,F){for(var S=x(C).lowerBounds,T=0;T<S.length-1;T++){var L=S[T][0],W=S[T][1],X=S[T+1][0],ie=S[T+1][1];if(F>=L&&F<=X){var re=(ie-W)/(X-L),ee=W-re*L;return re*F+ee}}return 0}function p(C){if(typeof parseInt(C)=="number"){var F=parseInt(C);if(F<360&&F>0)return[F,F]}if(typeof C=="string"){if(n[C]){var S=n[C];if(S.hueRange)return S.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=U(C)[0];return[T,T]}}return[0,360]}function g(C){return x(C).saturationRange}function x(C){C>=334&&C<=360&&(C-=360);for(var F in n){var S=n[F];if(S.hueRange&&C>=S.hueRange[0]&&C<=S.hueRange[1])return n[F]}return"Color not found"}function M(C){if(t===null){var F=.618033988749895,S=Math.random();return S+=F,S%=1,Math.floor(C[0]+S*(C[1]+1-C[0]))}else{var T=C[1]||1,L=C[0]||0;t=(t*9301+49297)%233280;var W=t/233280;return Math.floor(L+W*(T-L))}}function E(C){var F=D(C);function S(L){var W=L.toString(16);return W.length==1?"0"+W:W}var T="#"+S(F[0])+S(F[1])+S(F[2]);return T}function v(C,F,S){var T=S[0][0],L=S[S.length-1][0],W=S[S.length-1][1],X=S[0][1];n[C]={hueRange:F,lowerBounds:S,saturationRange:[T,L],brightnessRange:[W,X]}}function _(){v("monochrome",null,[[0,0],[100,0]]),v("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),v("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),v("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),v("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),v("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),v("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),v("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function D(C){var F=C[0];F===0&&(F=1),F===360&&(F=359),F=F/360;var S=C[1]/100,T=C[2]/100,L=Math.floor(F*6),W=F*6-L,X=T*(1-S),ie=T*(1-W*S),re=T*(1-(1-W)*S),ee=256,$=256,oe=256;switch(L){case 0:ee=T,$=re,oe=X;break;case 1:ee=ie,$=T,oe=X;break;case 2:ee=X,$=T,oe=re;break;case 3:ee=X,$=ie,oe=T;break;case 4:ee=re,$=X,oe=T;break;case 5:ee=T,$=X,oe=ie;break}var Ae=[Math.floor(ee*255),Math.floor($*255),Math.floor(oe*255)];return Ae}function U(C){C=C.replace(/^#/,""),C=C.length===3?C.replace(/(.)/g,"$1$1"):C;var F=parseInt(C.substr(0,2),16)/255,S=parseInt(C.substr(2,2),16)/255,T=parseInt(C.substr(4,2),16)/255,L=Math.max(F,S,T),W=L-Math.min(F,S,T),X=L?W/L:0;switch(L){case F:return[60*((S-T)/W%6)||0,X,L];case S:return[60*((T-F)/W+2)||0,X,L];case T:return[60*((F-S)/W+4)||0,X,L]}}function I(C){var F=C[0],S=C[1]/100,T=C[2]/100,L=(2-S)*T;return[F,Math.round(S*T/(L<1?L:2-L)*1e4)/100,L/2*100]}function O(C){for(var F=0,S=0;S!==C.length&&!(F>=Number.MAX_SAFE_INTEGER);S++)F+=C.charCodeAt(S);return F}function B(C){if(isNaN(C)){if(typeof C=="string"){if(n[C]){var S=n[C];if(S.hueRange)return S.hueRange}else if(C.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var T=U(C)[0];return x(T).hueRange}}}else{var F=parseInt(C);if(F<360&&F>0)return x(C).hueRange}return[0,360]}return o})})(Ga,Ga.exports)),Ga.exports}var x3=v3();const RS=Ap(x3);function S3(i){return new Nr(i,32,32)}function y3(i){return new Gn({color:i})}class b3 extends Sn{constructor({radius:e=ht().ball.radius}={}){const t=RS({luminosity:"dark",alpha:1});super(S3(e),y3(t)),this._velocity=new G(0,0,0),this.arrowHelper=new Kw(new G,new G),this.pathVertices=[],this.camera=new vn(ht().camera.fov),this.launchBallTimeout=null,this.landedPlanet=null,this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null,this.mass=3,this.light=new xp(t,16e3,1e4),this.color=t,this.radius=e,this.setVelocityVectorVisible(ht().ball.showVelocityVector),this.add(this.camera),this.add(this.light)}updateArrowHelper(){this.arrowHelper.setDirection(this.velocity.normalize()),this.arrowHelper.setLength(this.velocity.length()*20)}setVelocityVectorVisible(e){this.children.includes(this.arrowHelper)||this.add(this.arrowHelper),this.arrowHelper.visible=e}get velocity(){return this._velocity.clone()}set velocity(e){this._velocity=e}addVelocity(e){this._velocity.add(e)}setPreCalculatedFlight(e){this.preCalculatedFlight=e,this.currentFlightTick=0,this.flightStartTime=Date.now()}clearPreCalculatedFlight(){this.preCalculatedFlight=null,this.currentFlightTick=0,this.flightStartTime=null}createTrace(){const e=ht(),t=new dp({color:16755200,opacity:e.ball.traceTransparency,transparent:!0}),n=new wn().setFromPoints(this.pathVertices);return new pp(n,t)}tick(e=[]){const t=ht();if(this.landedPlanet!==null&&(this.velocity=new G,t.simulationMode&&!this.launchBallTimeout&&(this.launchBallTimeout=window.setTimeout(()=>{CS(this,new G(-.8,.18,-.72),e),this.launchBallTimeout=null},1e3))),t.usePreCalculatedFlight&&this.preCalculatedFlight&&this.flightStartTime!==null){const n=(Date.now()-this.flightStartTime)/1e3,s=Math.floor(n*t.ticksPerSecond);if(s<this.preCalculatedFlight.ticks.length){const o=this.preCalculatedFlight.ticks[s];this.position.copy(o.position),this.velocity=o.velocity.clone(),this.currentFlightTick=s}else{const o=this.preCalculatedFlight.ticks[this.preCalculatedFlight.ticks.length-1];this.position.copy(o.position),this.velocity=o.velocity.clone(),this.clearPreCalculatedFlight()}}else if(!t.usePreCalculatedFlight||!this.preCalculatedFlight){this.rotation.set(0,0,0),this.position.add(this.velocity);const n=this.velocity.normalize();this.rotation.set(n.x,n.y,n.z)}this.updateArrowHelper(),this.pathVertices.push(this.position.clone()),this.updateCameraPosition(),setTimeout(()=>{this.pathVertices.shift()},t.ball.traceDuration*1e3)}updateCameraPosition(){this.camera.position.setY(400),this.camera.lookAt(this.position)}}class M3 extends Sn{constructor(){super(new Or,[]),this.init()}async init(){const t=await new vp().loadAsync(`${document.baseURI}assets/gfx/sphere-skybox.jpg`),n=new Gn({side:mi,map:t,opacity:ht().skybox.opacity,transparent:!0,color:new st(.15,.2,.4)}),s=10**5.8,o=new Nr(s);this.geometry=o,this.material=n}updateOpacity(e){this.material instanceof Gn&&(this.material.opacity=e)}}function mx(i,e){return i.position.distanceTo(e.position)<=i.radius+e.radius}var Ha={exports:{}};var E3=Ha.exports,_x;function T3(){return _x||(_x=1,(function(i,e){(function(){var t,n="4.17.23",s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,m="__lodash_placeholder__",p=1,g=2,x=4,M=1,E=2,v=1,_=2,D=4,U=8,I=16,O=32,B=64,C=128,F=256,S=512,T=30,L="...",W=800,X=16,ie=1,re=2,ee=3,$=1/0,oe=9007199254740991,Ae=17976931348623157e292,ye=NaN,Me=4294967295,ut=Me-1,at=Me>>>1,Ht=[["ary",C],["bind",v],["bindKey",_],["curry",U],["curryRight",I],["flip",S],["partial",O],["partialRight",B],["rearg",F]],wt="[object Arguments]",le="[object Array]",_e="[object AsyncFunction]",Le="[object Boolean]",et="[object Date]",ze="[object DOMException]",vt="[object Error]",Xt="[object Function]",St="[object GeneratorFunction]",ot="[object Map]",He="[object Number]",tt="[object Null]",Ve="[object Object]",k="[object Promise]",kt="[object Proxy]",yt="[object RegExp]",lt="[object Set]",Pe="[object String]",P="[object Symbol]",b="[object Undefined]",H="[object WeakMap]",ae="[object WeakSet]",ue="[object ArrayBuffer]",te="[object DataView]",Be="[object Float32Array]",Se="[object Float64Array]",Ne="[object Int8Array]",Ke="[object Int16Array]",pe="[object Int32Array]",ve="[object Uint8Array]",Fe="[object Uint8ClampedArray]",Ge="[object Uint16Array]",be="[object Uint32Array]",ft=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,De=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xe=/&(?:amp|lt|gt|quot|#39);/g,Ie=/[&<>"']/g,ge=RegExp(xe.source),fe=RegExp(Ie.source),Ee=/<%-([\s\S]+?)%>/g,nt=/<%([\s\S]+?)%>/g,zt=/<%=([\s\S]+?)%>/g,Lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ri=/^\w*$/,gi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aa=/[\\^$.*+?()[\]{}|]/g,io=RegExp(aa.source),zr=/^\s+/,tc=/\s/,ro=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,so=/\{\n\/\* \[wrapped with (.+)\] \*/,qi=/,? & /,oa=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ao=/[()=,{}\[\]\/\s]/,oo=/\\(\\)?/g,fs=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,la=/\w*$/,ds=/^[-+]0x[0-9a-f]+$/i,lo=/^0b[01]+$/i,co=/^\[object .+?Constructor\]$/,nc=/^0o[0-7]+$/i,ic=/^(?:0|[1-9]\d*)$/,rc=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ps=/($^)/,sc=/['\n\r\u2028\u2029\\]/g,ms="\\ud800-\\udfff",w="\\u0300-\\u036f",Y="\\ufe20-\\ufe2f",Q="\\u20d0-\\u20ff",Z=w+Y+Q,j="\\u2700-\\u27bf",Te="a-z\\xdf-\\xf6\\xf8-\\xff",Ue="\\xac\\xb1\\xd7\\xf7",we="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ke="\\u2000-\\u206f",qe=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$e="A-Z\\xc0-\\xd6\\xd8-\\xde",Xe="\\ufe0e\\ufe0f",dt=Ue+we+ke+qe,Rt="['’]",$t="["+ms+"]",Yt="["+dt+"]",Pt="["+Z+"]",Ye="\\d+",It="["+j+"]",Tt="["+Te+"]",Cn="[^"+ms+dt+Ye+j+Te+$e+"]",Di="\\ud83c[\\udffb-\\udfff]",Nn="(?:"+Pt+"|"+Di+")",ur="[^"+ms+"]",Ot="(?:\\ud83c[\\udde6-\\uddff]){2}",dn="[\\ud800-\\udbff][\\udc00-\\udfff]",an="["+$e+"]",pn="\\u200d",yn="(?:"+Tt+"|"+Cn+")",ca="(?:"+an+"|"+Cn+")",Li="(?:"+Rt+"(?:d|ll|m|re|s|t|ve))?",kp="(?:"+Rt+"(?:D|LL|M|RE|S|T|VE))?",zp=Nn+"?",Gp="["+Xe+"]?",DS="(?:"+pn+"(?:"+[ur,Ot,dn].join("|")+")"+Gp+zp+")*",LS="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",IS="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hp=Gp+zp+DS,US="(?:"+[It,Ot,dn].join("|")+")"+Hp,OS="(?:"+[ur+Pt+"?",Pt,Ot,dn,$t].join("|")+")",NS=RegExp(Rt,"g"),FS=RegExp(Pt,"g"),ac=RegExp(Di+"(?="+Di+")|"+OS+Hp,"g"),BS=RegExp([an+"?"+Tt+"+"+Li+"(?="+[Yt,an,"$"].join("|")+")",ca+"+"+kp+"(?="+[Yt,an+yn,"$"].join("|")+")",an+"?"+yn+"+"+Li,an+"+"+kp,IS,LS,Ye,US].join("|"),"g"),kS=RegExp("["+pn+ms+Z+Xe+"]"),zS=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,GS=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],HS=-1,Kt={};Kt[Be]=Kt[Se]=Kt[Ne]=Kt[Ke]=Kt[pe]=Kt[ve]=Kt[Fe]=Kt[Ge]=Kt[be]=!0,Kt[wt]=Kt[le]=Kt[ue]=Kt[Le]=Kt[te]=Kt[et]=Kt[vt]=Kt[Xt]=Kt[ot]=Kt[He]=Kt[Ve]=Kt[yt]=Kt[lt]=Kt[Pe]=Kt[H]=!1;var Wt={};Wt[wt]=Wt[le]=Wt[ue]=Wt[te]=Wt[Le]=Wt[et]=Wt[Be]=Wt[Se]=Wt[Ne]=Wt[Ke]=Wt[pe]=Wt[ot]=Wt[He]=Wt[Ve]=Wt[yt]=Wt[lt]=Wt[Pe]=Wt[P]=Wt[ve]=Wt[Fe]=Wt[Ge]=Wt[be]=!0,Wt[vt]=Wt[Xt]=Wt[H]=!1;var VS={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},WS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},XS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},YS=parseFloat,KS=parseInt,Vp=typeof Dr=="object"&&Dr&&Dr.Object===Object&&Dr,jS=typeof self=="object"&&self&&self.Object===Object&&self,bn=Vp||jS||Function("return this")(),oc=e&&!e.nodeType&&e,Gr=oc&&!0&&i&&!i.nodeType&&i,Wp=Gr&&Gr.exports===oc,lc=Wp&&Vp.process,si=(function(){try{var q=Gr&&Gr.require&&Gr.require("util").types;return q||lc&&lc.binding&&lc.binding("util")}catch{}})(),qp=si&&si.isArrayBuffer,Xp=si&&si.isDate,Yp=si&&si.isMap,Kp=si&&si.isRegExp,jp=si&&si.isSet,$p=si&&si.isTypedArray;function Kn(q,se,ne){switch(ne.length){case 0:return q.call(se);case 1:return q.call(se,ne[0]);case 2:return q.call(se,ne[0],ne[1]);case 3:return q.call(se,ne[0],ne[1],ne[2])}return q.apply(se,ne)}function $S(q,se,ne,Oe){for(var rt=-1,Ut=q==null?0:q.length;++rt<Ut;){var on=q[rt];se(Oe,on,ne(on),q)}return Oe}function ai(q,se){for(var ne=-1,Oe=q==null?0:q.length;++ne<Oe&&se(q[ne],ne,q)!==!1;);return q}function ZS(q,se){for(var ne=q==null?0:q.length;ne--&&se(q[ne],ne,q)!==!1;);return q}function Zp(q,se){for(var ne=-1,Oe=q==null?0:q.length;++ne<Oe;)if(!se(q[ne],ne,q))return!1;return!0}function hr(q,se){for(var ne=-1,Oe=q==null?0:q.length,rt=0,Ut=[];++ne<Oe;){var on=q[ne];se(on,ne,q)&&(Ut[rt++]=on)}return Ut}function uo(q,se){var ne=q==null?0:q.length;return!!ne&&_s(q,se,0)>-1}function cc(q,se,ne){for(var Oe=-1,rt=q==null?0:q.length;++Oe<rt;)if(ne(se,q[Oe]))return!0;return!1}function Zt(q,se){for(var ne=-1,Oe=q==null?0:q.length,rt=Array(Oe);++ne<Oe;)rt[ne]=se(q[ne],ne,q);return rt}function fr(q,se){for(var ne=-1,Oe=se.length,rt=q.length;++ne<Oe;)q[rt+ne]=se[ne];return q}function uc(q,se,ne,Oe){var rt=-1,Ut=q==null?0:q.length;for(Oe&&Ut&&(ne=q[++rt]);++rt<Ut;)ne=se(ne,q[rt],rt,q);return ne}function JS(q,se,ne,Oe){var rt=q==null?0:q.length;for(Oe&&rt&&(ne=q[--rt]);rt--;)ne=se(ne,q[rt],rt,q);return ne}function hc(q,se){for(var ne=-1,Oe=q==null?0:q.length;++ne<Oe;)if(se(q[ne],ne,q))return!0;return!1}var QS=fc("length");function ey(q){return q.split("")}function ty(q){return q.match(oa)||[]}function Jp(q,se,ne){var Oe;return ne(q,function(rt,Ut,on){if(se(rt,Ut,on))return Oe=Ut,!1}),Oe}function ho(q,se,ne,Oe){for(var rt=q.length,Ut=ne+(Oe?1:-1);Oe?Ut--:++Ut<rt;)if(se(q[Ut],Ut,q))return Ut;return-1}function _s(q,se,ne){return se===se?dy(q,se,ne):ho(q,Qp,ne)}function ny(q,se,ne,Oe){for(var rt=ne-1,Ut=q.length;++rt<Ut;)if(Oe(q[rt],se))return rt;return-1}function Qp(q){return q!==q}function em(q,se){var ne=q==null?0:q.length;return ne?pc(q,se)/ne:ye}function fc(q){return function(se){return se==null?t:se[q]}}function dc(q){return function(se){return q==null?t:q[se]}}function tm(q,se,ne,Oe,rt){return rt(q,function(Ut,on,Vt){ne=Oe?(Oe=!1,Ut):se(ne,Ut,on,Vt)}),ne}function iy(q,se){var ne=q.length;for(q.sort(se);ne--;)q[ne]=q[ne].value;return q}function pc(q,se){for(var ne,Oe=-1,rt=q.length;++Oe<rt;){var Ut=se(q[Oe]);Ut!==t&&(ne=ne===t?Ut:ne+Ut)}return ne}function mc(q,se){for(var ne=-1,Oe=Array(q);++ne<q;)Oe[ne]=se(ne);return Oe}function ry(q,se){return Zt(se,function(ne){return[ne,q[ne]]})}function nm(q){return q&&q.slice(0,am(q)+1).replace(zr,"")}function jn(q){return function(se){return q(se)}}function _c(q,se){return Zt(se,function(ne){return q[ne]})}function ua(q,se){return q.has(se)}function im(q,se){for(var ne=-1,Oe=q.length;++ne<Oe&&_s(se,q[ne],0)>-1;);return ne}function rm(q,se){for(var ne=q.length;ne--&&_s(se,q[ne],0)>-1;);return ne}function sy(q,se){for(var ne=q.length,Oe=0;ne--;)q[ne]===se&&++Oe;return Oe}var ay=dc(VS),oy=dc(WS);function ly(q){return"\\"+XS[q]}function cy(q,se){return q==null?t:q[se]}function gs(q){return kS.test(q)}function uy(q){return zS.test(q)}function hy(q){for(var se,ne=[];!(se=q.next()).done;)ne.push(se.value);return ne}function gc(q){var se=-1,ne=Array(q.size);return q.forEach(function(Oe,rt){ne[++se]=[rt,Oe]}),ne}function sm(q,se){return function(ne){return q(se(ne))}}function dr(q,se){for(var ne=-1,Oe=q.length,rt=0,Ut=[];++ne<Oe;){var on=q[ne];(on===se||on===m)&&(q[ne]=m,Ut[rt++]=ne)}return Ut}function fo(q){var se=-1,ne=Array(q.size);return q.forEach(function(Oe){ne[++se]=Oe}),ne}function fy(q){var se=-1,ne=Array(q.size);return q.forEach(function(Oe){ne[++se]=[Oe,Oe]}),ne}function dy(q,se,ne){for(var Oe=ne-1,rt=q.length;++Oe<rt;)if(q[Oe]===se)return Oe;return-1}function py(q,se,ne){for(var Oe=ne+1;Oe--;)if(q[Oe]===se)return Oe;return Oe}function vs(q){return gs(q)?_y(q):QS(q)}function vi(q){return gs(q)?gy(q):ey(q)}function am(q){for(var se=q.length;se--&&tc.test(q.charAt(se)););return se}var my=dc(qS);function _y(q){for(var se=ac.lastIndex=0;ac.test(q);)++se;return se}function gy(q){return q.match(ac)||[]}function vy(q){return q.match(BS)||[]}var xy=(function q(se){se=se==null?bn:xs.defaults(bn.Object(),se,xs.pick(bn,GS));var ne=se.Array,Oe=se.Date,rt=se.Error,Ut=se.Function,on=se.Math,Vt=se.Object,vc=se.RegExp,Sy=se.String,oi=se.TypeError,po=ne.prototype,yy=Ut.prototype,Ss=Vt.prototype,mo=se["__core-js_shared__"],_o=yy.toString,Nt=Ss.hasOwnProperty,by=0,om=(function(){var r=/[^.]+$/.exec(mo&&mo.keys&&mo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})(),go=Ss.toString,My=_o.call(Vt),Ey=bn._,Ty=vc("^"+_o.call(Nt).replace(aa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vo=Wp?se.Buffer:t,pr=se.Symbol,xo=se.Uint8Array,lm=vo?vo.allocUnsafe:t,So=sm(Vt.getPrototypeOf,Vt),cm=Vt.create,um=Ss.propertyIsEnumerable,yo=po.splice,hm=pr?pr.isConcatSpreadable:t,ha=pr?pr.iterator:t,Hr=pr?pr.toStringTag:t,bo=(function(){try{var r=Yr(Vt,"defineProperty");return r({},"",{}),r}catch{}})(),Ay=se.clearTimeout!==bn.clearTimeout&&se.clearTimeout,wy=Oe&&Oe.now!==bn.Date.now&&Oe.now,Cy=se.setTimeout!==bn.setTimeout&&se.setTimeout,Mo=on.ceil,Eo=on.floor,xc=Vt.getOwnPropertySymbols,Ry=vo?vo.isBuffer:t,fm=se.isFinite,Py=po.join,Dy=sm(Vt.keys,Vt),ln=on.max,Rn=on.min,Ly=Oe.now,Iy=se.parseInt,dm=on.random,Uy=po.reverse,Sc=Yr(se,"DataView"),fa=Yr(se,"Map"),yc=Yr(se,"Promise"),ys=Yr(se,"Set"),da=Yr(se,"WeakMap"),pa=Yr(Vt,"create"),To=da&&new da,bs={},Oy=Kr(Sc),Ny=Kr(fa),Fy=Kr(yc),By=Kr(ys),ky=Kr(da),Ao=pr?pr.prototype:t,ma=Ao?Ao.valueOf:t,pm=Ao?Ao.toString:t;function A(r){if(Qt(r)&&!ct(r)&&!(r instanceof Et)){if(r instanceof li)return r;if(Nt.call(r,"__wrapped__"))return m_(r)}return new li(r)}var Ms=(function(){function r(){}return function(a){if(!Jt(a))return{};if(cm)return cm(a);r.prototype=a;var c=new r;return r.prototype=t,c}})();function wo(){}function li(r,a){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=t}A.templateSettings={escape:Ee,evaluate:nt,interpolate:zt,variable:"",imports:{_:A}},A.prototype=wo.prototype,A.prototype.constructor=A,li.prototype=Ms(wo.prototype),li.prototype.constructor=li;function Et(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Me,this.__views__=[]}function zy(){var r=new Et(this.__wrapped__);return r.__actions__=Hn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Hn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Hn(this.__views__),r}function Gy(){if(this.__filtered__){var r=new Et(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Hy(){var r=this.__wrapped__.value(),a=this.__dir__,c=ct(r),d=a<0,y=c?r.length:0,R=eM(0,y,this.__views__),N=R.start,z=R.end,K=z-N,ce=d?z:N-1,he=this.__iteratees__,me=he.length,Ce=0,We=Rn(K,this.__takeCount__);if(!c||!d&&y==K&&We==K)return Bm(r,this.__actions__);var Je=[];e:for(;K--&&Ce<We;){ce+=a;for(var _t=-1,Qe=r[ce];++_t<me;){var bt=he[_t],At=bt.iteratee,Jn=bt.type,kn=At(Qe);if(Jn==re)Qe=kn;else if(!kn){if(Jn==ie)continue e;break e}}Je[Ce++]=Qe}return Je}Et.prototype=Ms(wo.prototype),Et.prototype.constructor=Et;function Vr(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function Vy(){this.__data__=pa?pa(null):{},this.size=0}function Wy(r){var a=this.has(r)&&delete this.__data__[r];return this.size-=a?1:0,a}function qy(r){var a=this.__data__;if(pa){var c=a[r];return c===h?t:c}return Nt.call(a,r)?a[r]:t}function Xy(r){var a=this.__data__;return pa?a[r]!==t:Nt.call(a,r)}function Yy(r,a){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=pa&&a===t?h:a,this}Vr.prototype.clear=Vy,Vr.prototype.delete=Wy,Vr.prototype.get=qy,Vr.prototype.has=Xy,Vr.prototype.set=Yy;function Xi(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function Ky(){this.__data__=[],this.size=0}function jy(r){var a=this.__data__,c=Co(a,r);if(c<0)return!1;var d=a.length-1;return c==d?a.pop():yo.call(a,c,1),--this.size,!0}function $y(r){var a=this.__data__,c=Co(a,r);return c<0?t:a[c][1]}function Zy(r){return Co(this.__data__,r)>-1}function Jy(r,a){var c=this.__data__,d=Co(c,r);return d<0?(++this.size,c.push([r,a])):c[d][1]=a,this}Xi.prototype.clear=Ky,Xi.prototype.delete=jy,Xi.prototype.get=$y,Xi.prototype.has=Zy,Xi.prototype.set=Jy;function Yi(r){var a=-1,c=r==null?0:r.length;for(this.clear();++a<c;){var d=r[a];this.set(d[0],d[1])}}function Qy(){this.size=0,this.__data__={hash:new Vr,map:new(fa||Xi),string:new Vr}}function eb(r){var a=zo(this,r).delete(r);return this.size-=a?1:0,a}function tb(r){return zo(this,r).get(r)}function nb(r){return zo(this,r).has(r)}function ib(r,a){var c=zo(this,r),d=c.size;return c.set(r,a),this.size+=c.size==d?0:1,this}Yi.prototype.clear=Qy,Yi.prototype.delete=eb,Yi.prototype.get=tb,Yi.prototype.has=nb,Yi.prototype.set=ib;function Wr(r){var a=-1,c=r==null?0:r.length;for(this.__data__=new Yi;++a<c;)this.add(r[a])}function rb(r){return this.__data__.set(r,h),this}function sb(r){return this.__data__.has(r)}Wr.prototype.add=Wr.prototype.push=rb,Wr.prototype.has=sb;function xi(r){var a=this.__data__=new Xi(r);this.size=a.size}function ab(){this.__data__=new Xi,this.size=0}function ob(r){var a=this.__data__,c=a.delete(r);return this.size=a.size,c}function lb(r){return this.__data__.get(r)}function cb(r){return this.__data__.has(r)}function ub(r,a){var c=this.__data__;if(c instanceof Xi){var d=c.__data__;if(!fa||d.length<s-1)return d.push([r,a]),this.size=++c.size,this;c=this.__data__=new Yi(d)}return c.set(r,a),this.size=c.size,this}xi.prototype.clear=ab,xi.prototype.delete=ob,xi.prototype.get=lb,xi.prototype.has=cb,xi.prototype.set=ub;function mm(r,a){var c=ct(r),d=!c&&jr(r),y=!c&&!d&&xr(r),R=!c&&!d&&!y&&ws(r),N=c||d||y||R,z=N?mc(r.length,Sy):[],K=z.length;for(var ce in r)(a||Nt.call(r,ce))&&!(N&&(ce=="length"||y&&(ce=="offset"||ce=="parent")||R&&(ce=="buffer"||ce=="byteLength"||ce=="byteOffset")||Zi(ce,K)))&&z.push(ce);return z}function _m(r){var a=r.length;return a?r[Lc(0,a-1)]:t}function hb(r,a){return Go(Hn(r),qr(a,0,r.length))}function fb(r){return Go(Hn(r))}function bc(r,a,c){(c!==t&&!Si(r[a],c)||c===t&&!(a in r))&&Ki(r,a,c)}function _a(r,a,c){var d=r[a];(!(Nt.call(r,a)&&Si(d,c))||c===t&&!(a in r))&&Ki(r,a,c)}function Co(r,a){for(var c=r.length;c--;)if(Si(r[c][0],a))return c;return-1}function db(r,a,c,d){return mr(r,function(y,R,N){a(d,y,c(y),N)}),d}function gm(r,a){return r&&Ui(a,mn(a),r)}function pb(r,a){return r&&Ui(a,Wn(a),r)}function Ki(r,a,c){a=="__proto__"&&bo?bo(r,a,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[a]=c}function Mc(r,a){for(var c=-1,d=a.length,y=ne(d),R=r==null;++c<d;)y[c]=R?t:iu(r,a[c]);return y}function qr(r,a,c){return r===r&&(c!==t&&(r=r<=c?r:c),a!==t&&(r=r>=a?r:a)),r}function ci(r,a,c,d,y,R){var N,z=a&p,K=a&g,ce=a&x;if(c&&(N=y?c(r,d,y,R):c(r)),N!==t)return N;if(!Jt(r))return r;var he=ct(r);if(he){if(N=nM(r),!z)return Hn(r,N)}else{var me=Pn(r),Ce=me==Xt||me==St;if(xr(r))return Gm(r,z);if(me==Ve||me==wt||Ce&&!y){if(N=K||Ce?{}:a_(r),!z)return K?qb(r,pb(N,r)):Wb(r,gm(N,r))}else{if(!Wt[me])return y?r:{};N=iM(r,me,z)}}R||(R=new xi);var We=R.get(r);if(We)return We;R.set(r,N),O_(r)?r.forEach(function(Qe){N.add(ci(Qe,a,c,Qe,r,R))}):I_(r)&&r.forEach(function(Qe,bt){N.set(bt,ci(Qe,a,c,bt,r,R))});var Je=ce?K?Vc:Hc:K?Wn:mn,_t=he?t:Je(r);return ai(_t||r,function(Qe,bt){_t&&(bt=Qe,Qe=r[bt]),_a(N,bt,ci(Qe,a,c,bt,r,R))}),N}function mb(r){var a=mn(r);return function(c){return vm(c,r,a)}}function vm(r,a,c){var d=c.length;if(r==null)return!d;for(r=Vt(r);d--;){var y=c[d],R=a[y],N=r[y];if(N===t&&!(y in r)||!R(N))return!1}return!0}function xm(r,a,c){if(typeof r!="function")throw new oi(l);return Ma(function(){r.apply(t,c)},a)}function ga(r,a,c,d){var y=-1,R=uo,N=!0,z=r.length,K=[],ce=a.length;if(!z)return K;c&&(a=Zt(a,jn(c))),d?(R=cc,N=!1):a.length>=s&&(R=ua,N=!1,a=new Wr(a));e:for(;++y<z;){var he=r[y],me=c==null?he:c(he);if(he=d||he!==0?he:0,N&&me===me){for(var Ce=ce;Ce--;)if(a[Ce]===me)continue e;K.push(he)}else R(a,me,d)||K.push(he)}return K}var mr=Xm(Ii),Sm=Xm(Tc,!0);function _b(r,a){var c=!0;return mr(r,function(d,y,R){return c=!!a(d,y,R),c}),c}function Ro(r,a,c){for(var d=-1,y=r.length;++d<y;){var R=r[d],N=a(R);if(N!=null&&(z===t?N===N&&!Zn(N):c(N,z)))var z=N,K=R}return K}function gb(r,a,c,d){var y=r.length;for(c=pt(c),c<0&&(c=-c>y?0:y+c),d=d===t||d>y?y:pt(d),d<0&&(d+=y),d=c>d?0:F_(d);c<d;)r[c++]=a;return r}function ym(r,a){var c=[];return mr(r,function(d,y,R){a(d,y,R)&&c.push(d)}),c}function Mn(r,a,c,d,y){var R=-1,N=r.length;for(c||(c=sM),y||(y=[]);++R<N;){var z=r[R];a>0&&c(z)?a>1?Mn(z,a-1,c,d,y):fr(y,z):d||(y[y.length]=z)}return y}var Ec=Ym(),bm=Ym(!0);function Ii(r,a){return r&&Ec(r,a,mn)}function Tc(r,a){return r&&bm(r,a,mn)}function Po(r,a){return hr(a,function(c){return Ji(r[c])})}function Xr(r,a){a=gr(a,r);for(var c=0,d=a.length;r!=null&&c<d;)r=r[Oi(a[c++])];return c&&c==d?r:t}function Mm(r,a,c){var d=a(r);return ct(r)?d:fr(d,c(r))}function Fn(r){return r==null?r===t?b:tt:Hr&&Hr in Vt(r)?Qb(r):fM(r)}function Ac(r,a){return r>a}function vb(r,a){return r!=null&&Nt.call(r,a)}function xb(r,a){return r!=null&&a in Vt(r)}function Sb(r,a,c){return r>=Rn(a,c)&&r<ln(a,c)}function wc(r,a,c){for(var d=c?cc:uo,y=r[0].length,R=r.length,N=R,z=ne(R),K=1/0,ce=[];N--;){var he=r[N];N&&a&&(he=Zt(he,jn(a))),K=Rn(he.length,K),z[N]=!c&&(a||y>=120&&he.length>=120)?new Wr(N&&he):t}he=r[0];var me=-1,Ce=z[0];e:for(;++me<y&&ce.length<K;){var We=he[me],Je=a?a(We):We;if(We=c||We!==0?We:0,!(Ce?ua(Ce,Je):d(ce,Je,c))){for(N=R;--N;){var _t=z[N];if(!(_t?ua(_t,Je):d(r[N],Je,c)))continue e}Ce&&Ce.push(Je),ce.push(We)}}return ce}function yb(r,a,c,d){return Ii(r,function(y,R,N){a(d,c(y),R,N)}),d}function va(r,a,c){a=gr(a,r),r=u_(r,a);var d=r==null?r:r[Oi(hi(a))];return d==null?t:Kn(d,r,c)}function Em(r){return Qt(r)&&Fn(r)==wt}function bb(r){return Qt(r)&&Fn(r)==ue}function Mb(r){return Qt(r)&&Fn(r)==et}function xa(r,a,c,d,y){return r===a?!0:r==null||a==null||!Qt(r)&&!Qt(a)?r!==r&&a!==a:Eb(r,a,c,d,xa,y)}function Eb(r,a,c,d,y,R){var N=ct(r),z=ct(a),K=N?le:Pn(r),ce=z?le:Pn(a);K=K==wt?Ve:K,ce=ce==wt?Ve:ce;var he=K==Ve,me=ce==Ve,Ce=K==ce;if(Ce&&xr(r)){if(!xr(a))return!1;N=!0,he=!1}if(Ce&&!he)return R||(R=new xi),N||ws(r)?i_(r,a,c,d,y,R):Zb(r,a,K,c,d,y,R);if(!(c&M)){var We=he&&Nt.call(r,"__wrapped__"),Je=me&&Nt.call(a,"__wrapped__");if(We||Je){var _t=We?r.value():r,Qe=Je?a.value():a;return R||(R=new xi),y(_t,Qe,c,d,R)}}return Ce?(R||(R=new xi),Jb(r,a,c,d,y,R)):!1}function Tb(r){return Qt(r)&&Pn(r)==ot}function Cc(r,a,c,d){var y=c.length,R=y,N=!d;if(r==null)return!R;for(r=Vt(r);y--;){var z=c[y];if(N&&z[2]?z[1]!==r[z[0]]:!(z[0]in r))return!1}for(;++y<R;){z=c[y];var K=z[0],ce=r[K],he=z[1];if(N&&z[2]){if(ce===t&&!(K in r))return!1}else{var me=new xi;if(d)var Ce=d(ce,he,K,r,a,me);if(!(Ce===t?xa(he,ce,M|E,d,me):Ce))return!1}}return!0}function Tm(r){if(!Jt(r)||oM(r))return!1;var a=Ji(r)?Ty:co;return a.test(Kr(r))}function Ab(r){return Qt(r)&&Fn(r)==yt}function wb(r){return Qt(r)&&Pn(r)==lt}function Cb(r){return Qt(r)&&Yo(r.length)&&!!Kt[Fn(r)]}function Am(r){return typeof r=="function"?r:r==null?qn:typeof r=="object"?ct(r)?Rm(r[0],r[1]):Cm(r):K_(r)}function Rc(r){if(!ba(r))return Dy(r);var a=[];for(var c in Vt(r))Nt.call(r,c)&&c!="constructor"&&a.push(c);return a}function Rb(r){if(!Jt(r))return hM(r);var a=ba(r),c=[];for(var d in r)d=="constructor"&&(a||!Nt.call(r,d))||c.push(d);return c}function Pc(r,a){return r<a}function wm(r,a){var c=-1,d=Vn(r)?ne(r.length):[];return mr(r,function(y,R,N){d[++c]=a(y,R,N)}),d}function Cm(r){var a=qc(r);return a.length==1&&a[0][2]?l_(a[0][0],a[0][1]):function(c){return c===r||Cc(c,r,a)}}function Rm(r,a){return Yc(r)&&o_(a)?l_(Oi(r),a):function(c){var d=iu(c,r);return d===t&&d===a?ru(c,r):xa(a,d,M|E)}}function Do(r,a,c,d,y){r!==a&&Ec(a,function(R,N){if(y||(y=new xi),Jt(R))Pb(r,a,N,c,Do,d,y);else{var z=d?d(jc(r,N),R,N+"",r,a,y):t;z===t&&(z=R),bc(r,N,z)}},Wn)}function Pb(r,a,c,d,y,R,N){var z=jc(r,c),K=jc(a,c),ce=N.get(K);if(ce){bc(r,c,ce);return}var he=R?R(z,K,c+"",r,a,N):t,me=he===t;if(me){var Ce=ct(K),We=!Ce&&xr(K),Je=!Ce&&!We&&ws(K);he=K,Ce||We||Je?ct(z)?he=z:nn(z)?he=Hn(z):We?(me=!1,he=Gm(K,!0)):Je?(me=!1,he=Hm(K,!0)):he=[]:Ea(K)||jr(K)?(he=z,jr(z)?he=B_(z):(!Jt(z)||Ji(z))&&(he=a_(K))):me=!1}me&&(N.set(K,he),y(he,K,d,R,N),N.delete(K)),bc(r,c,he)}function Pm(r,a){var c=r.length;if(c)return a+=a<0?c:0,Zi(a,c)?r[a]:t}function Dm(r,a,c){a.length?a=Zt(a,function(R){return ct(R)?function(N){return Xr(N,R.length===1?R[0]:R)}:R}):a=[qn];var d=-1;a=Zt(a,jn(Ze()));var y=wm(r,function(R,N,z){var K=Zt(a,function(ce){return ce(R)});return{criteria:K,index:++d,value:R}});return iy(y,function(R,N){return Vb(R,N,c)})}function Db(r,a){return Lm(r,a,function(c,d){return ru(r,d)})}function Lm(r,a,c){for(var d=-1,y=a.length,R={};++d<y;){var N=a[d],z=Xr(r,N);c(z,N)&&Sa(R,gr(N,r),z)}return R}function Lb(r){return function(a){return Xr(a,r)}}function Dc(r,a,c,d){var y=d?ny:_s,R=-1,N=a.length,z=r;for(r===a&&(a=Hn(a)),c&&(z=Zt(r,jn(c)));++R<N;)for(var K=0,ce=a[R],he=c?c(ce):ce;(K=y(z,he,K,d))>-1;)z!==r&&yo.call(z,K,1),yo.call(r,K,1);return r}function Im(r,a){for(var c=r?a.length:0,d=c-1;c--;){var y=a[c];if(c==d||y!==R){var R=y;Zi(y)?yo.call(r,y,1):Oc(r,y)}}return r}function Lc(r,a){return r+Eo(dm()*(a-r+1))}function Ib(r,a,c,d){for(var y=-1,R=ln(Mo((a-r)/(c||1)),0),N=ne(R);R--;)N[d?R:++y]=r,r+=c;return N}function Ic(r,a){var c="";if(!r||a<1||a>oe)return c;do a%2&&(c+=r),a=Eo(a/2),a&&(r+=r);while(a);return c}function xt(r,a){return $c(c_(r,a,qn),r+"")}function Ub(r){return _m(Cs(r))}function Ob(r,a){var c=Cs(r);return Go(c,qr(a,0,c.length))}function Sa(r,a,c,d){if(!Jt(r))return r;a=gr(a,r);for(var y=-1,R=a.length,N=R-1,z=r;z!=null&&++y<R;){var K=Oi(a[y]),ce=c;if(K==="__proto__"||K==="constructor"||K==="prototype")return r;if(y!=N){var he=z[K];ce=d?d(he,K,z):t,ce===t&&(ce=Jt(he)?he:Zi(a[y+1])?[]:{})}_a(z,K,ce),z=z[K]}return r}var Um=To?function(r,a){return To.set(r,a),r}:qn,Nb=bo?function(r,a){return bo(r,"toString",{configurable:!0,enumerable:!1,value:au(a),writable:!0})}:qn;function Fb(r){return Go(Cs(r))}function ui(r,a,c){var d=-1,y=r.length;a<0&&(a=-a>y?0:y+a),c=c>y?y:c,c<0&&(c+=y),y=a>c?0:c-a>>>0,a>>>=0;for(var R=ne(y);++d<y;)R[d]=r[d+a];return R}function Bb(r,a){var c;return mr(r,function(d,y,R){return c=a(d,y,R),!c}),!!c}function Lo(r,a,c){var d=0,y=r==null?d:r.length;if(typeof a=="number"&&a===a&&y<=at){for(;d<y;){var R=d+y>>>1,N=r[R];N!==null&&!Zn(N)&&(c?N<=a:N<a)?d=R+1:y=R}return y}return Uc(r,a,qn,c)}function Uc(r,a,c,d){var y=0,R=r==null?0:r.length;if(R===0)return 0;a=c(a);for(var N=a!==a,z=a===null,K=Zn(a),ce=a===t;y<R;){var he=Eo((y+R)/2),me=c(r[he]),Ce=me!==t,We=me===null,Je=me===me,_t=Zn(me);if(N)var Qe=d||Je;else ce?Qe=Je&&(d||Ce):z?Qe=Je&&Ce&&(d||!We):K?Qe=Je&&Ce&&!We&&(d||!_t):We||_t?Qe=!1:Qe=d?me<=a:me<a;Qe?y=he+1:R=he}return Rn(R,ut)}function Om(r,a){for(var c=-1,d=r.length,y=0,R=[];++c<d;){var N=r[c],z=a?a(N):N;if(!c||!Si(z,K)){var K=z;R[y++]=N===0?0:N}}return R}function Nm(r){return typeof r=="number"?r:Zn(r)?ye:+r}function $n(r){if(typeof r=="string")return r;if(ct(r))return Zt(r,$n)+"";if(Zn(r))return pm?pm.call(r):"";var a=r+"";return a=="0"&&1/r==-$?"-0":a}function _r(r,a,c){var d=-1,y=uo,R=r.length,N=!0,z=[],K=z;if(c)N=!1,y=cc;else if(R>=s){var ce=a?null:jb(r);if(ce)return fo(ce);N=!1,y=ua,K=new Wr}else K=a?[]:z;e:for(;++d<R;){var he=r[d],me=a?a(he):he;if(he=c||he!==0?he:0,N&&me===me){for(var Ce=K.length;Ce--;)if(K[Ce]===me)continue e;a&&K.push(me),z.push(he)}else y(K,me,c)||(K!==z&&K.push(me),z.push(he))}return z}function Oc(r,a){a=gr(a,r);var c=-1,d=a.length;if(!d)return!0;for(var y=r==null||typeof r!="object"&&typeof r!="function";++c<d;){var R=a[c];if(typeof R=="string"){if(R==="__proto__"&&!Nt.call(r,"__proto__"))return!1;if(R==="constructor"&&c+1<d&&typeof a[c+1]=="string"&&a[c+1]==="prototype"){if(y&&c===0)continue;return!1}}}var N=u_(r,a);return N==null||delete N[Oi(hi(a))]}function Fm(r,a,c,d){return Sa(r,a,c(Xr(r,a)),d)}function Io(r,a,c,d){for(var y=r.length,R=d?y:-1;(d?R--:++R<y)&&a(r[R],R,r););return c?ui(r,d?0:R,d?R+1:y):ui(r,d?R+1:0,d?y:R)}function Bm(r,a){var c=r;return c instanceof Et&&(c=c.value()),uc(a,function(d,y){return y.func.apply(y.thisArg,fr([d],y.args))},c)}function Nc(r,a,c){var d=r.length;if(d<2)return d?_r(r[0]):[];for(var y=-1,R=ne(d);++y<d;)for(var N=r[y],z=-1;++z<d;)z!=y&&(R[y]=ga(R[y]||N,r[z],a,c));return _r(Mn(R,1),a,c)}function km(r,a,c){for(var d=-1,y=r.length,R=a.length,N={};++d<y;){var z=d<R?a[d]:t;c(N,r[d],z)}return N}function Fc(r){return nn(r)?r:[]}function Bc(r){return typeof r=="function"?r:qn}function gr(r,a){return ct(r)?r:Yc(r,a)?[r]:p_(Ft(r))}var kb=xt;function vr(r,a,c){var d=r.length;return c=c===t?d:c,!a&&c>=d?r:ui(r,a,c)}var zm=Ay||function(r){return bn.clearTimeout(r)};function Gm(r,a){if(a)return r.slice();var c=r.length,d=lm?lm(c):new r.constructor(c);return r.copy(d),d}function kc(r){var a=new r.constructor(r.byteLength);return new xo(a).set(new xo(r)),a}function zb(r,a){var c=a?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Gb(r){var a=new r.constructor(r.source,la.exec(r));return a.lastIndex=r.lastIndex,a}function Hb(r){return ma?Vt(ma.call(r)):{}}function Hm(r,a){var c=a?kc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Vm(r,a){if(r!==a){var c=r!==t,d=r===null,y=r===r,R=Zn(r),N=a!==t,z=a===null,K=a===a,ce=Zn(a);if(!z&&!ce&&!R&&r>a||R&&N&&K&&!z&&!ce||d&&N&&K||!c&&K||!y)return 1;if(!d&&!R&&!ce&&r<a||ce&&c&&y&&!d&&!R||z&&c&&y||!N&&y||!K)return-1}return 0}function Vb(r,a,c){for(var d=-1,y=r.criteria,R=a.criteria,N=y.length,z=c.length;++d<N;){var K=Vm(y[d],R[d]);if(K){if(d>=z)return K;var ce=c[d];return K*(ce=="desc"?-1:1)}}return r.index-a.index}function Wm(r,a,c,d){for(var y=-1,R=r.length,N=c.length,z=-1,K=a.length,ce=ln(R-N,0),he=ne(K+ce),me=!d;++z<K;)he[z]=a[z];for(;++y<N;)(me||y<R)&&(he[c[y]]=r[y]);for(;ce--;)he[z++]=r[y++];return he}function qm(r,a,c,d){for(var y=-1,R=r.length,N=-1,z=c.length,K=-1,ce=a.length,he=ln(R-z,0),me=ne(he+ce),Ce=!d;++y<he;)me[y]=r[y];for(var We=y;++K<ce;)me[We+K]=a[K];for(;++N<z;)(Ce||y<R)&&(me[We+c[N]]=r[y++]);return me}function Hn(r,a){var c=-1,d=r.length;for(a||(a=ne(d));++c<d;)a[c]=r[c];return a}function Ui(r,a,c,d){var y=!c;c||(c={});for(var R=-1,N=a.length;++R<N;){var z=a[R],K=d?d(c[z],r[z],z,c,r):t;K===t&&(K=r[z]),y?Ki(c,z,K):_a(c,z,K)}return c}function Wb(r,a){return Ui(r,Xc(r),a)}function qb(r,a){return Ui(r,r_(r),a)}function Uo(r,a){return function(c,d){var y=ct(c)?$S:db,R=a?a():{};return y(c,r,Ze(d,2),R)}}function Es(r){return xt(function(a,c){var d=-1,y=c.length,R=y>1?c[y-1]:t,N=y>2?c[2]:t;for(R=r.length>3&&typeof R=="function"?(y--,R):t,N&&Bn(c[0],c[1],N)&&(R=y<3?t:R,y=1),a=Vt(a);++d<y;){var z=c[d];z&&r(a,z,d,R)}return a})}function Xm(r,a){return function(c,d){if(c==null)return c;if(!Vn(c))return r(c,d);for(var y=c.length,R=a?y:-1,N=Vt(c);(a?R--:++R<y)&&d(N[R],R,N)!==!1;);return c}}function Ym(r){return function(a,c,d){for(var y=-1,R=Vt(a),N=d(a),z=N.length;z--;){var K=N[r?z:++y];if(c(R[K],K,R)===!1)break}return a}}function Xb(r,a,c){var d=a&v,y=ya(r);function R(){var N=this&&this!==bn&&this instanceof R?y:r;return N.apply(d?c:this,arguments)}return R}function Km(r){return function(a){a=Ft(a);var c=gs(a)?vi(a):t,d=c?c[0]:a.charAt(0),y=c?vr(c,1).join(""):a.slice(1);return d[r]()+y}}function Ts(r){return function(a){return uc(X_(q_(a).replace(NS,"")),r,"")}}function ya(r){return function(){var a=arguments;switch(a.length){case 0:return new r;case 1:return new r(a[0]);case 2:return new r(a[0],a[1]);case 3:return new r(a[0],a[1],a[2]);case 4:return new r(a[0],a[1],a[2],a[3]);case 5:return new r(a[0],a[1],a[2],a[3],a[4]);case 6:return new r(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new r(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var c=Ms(r.prototype),d=r.apply(c,a);return Jt(d)?d:c}}function Yb(r,a,c){var d=ya(r);function y(){for(var R=arguments.length,N=ne(R),z=R,K=As(y);z--;)N[z]=arguments[z];var ce=R<3&&N[0]!==K&&N[R-1]!==K?[]:dr(N,K);if(R-=ce.length,R<c)return Qm(r,a,Oo,y.placeholder,t,N,ce,t,t,c-R);var he=this&&this!==bn&&this instanceof y?d:r;return Kn(he,this,N)}return y}function jm(r){return function(a,c,d){var y=Vt(a);if(!Vn(a)){var R=Ze(c,3);a=mn(a),c=function(z){return R(y[z],z,y)}}var N=r(a,c,d);return N>-1?y[R?a[N]:N]:t}}function $m(r){return $i(function(a){var c=a.length,d=c,y=li.prototype.thru;for(r&&a.reverse();d--;){var R=a[d];if(typeof R!="function")throw new oi(l);if(y&&!N&&ko(R)=="wrapper")var N=new li([],!0)}for(d=N?d:c;++d<c;){R=a[d];var z=ko(R),K=z=="wrapper"?Wc(R):t;K&&Kc(K[0])&&K[1]==(C|U|O|F)&&!K[4].length&&K[9]==1?N=N[ko(K[0])].apply(N,K[3]):N=R.length==1&&Kc(R)?N[z]():N.thru(R)}return function(){var ce=arguments,he=ce[0];if(N&&ce.length==1&&ct(he))return N.plant(he).value();for(var me=0,Ce=c?a[me].apply(this,ce):he;++me<c;)Ce=a[me].call(this,Ce);return Ce}})}function Oo(r,a,c,d,y,R,N,z,K,ce){var he=a&C,me=a&v,Ce=a&_,We=a&(U|I),Je=a&S,_t=Ce?t:ya(r);function Qe(){for(var bt=arguments.length,At=ne(bt),Jn=bt;Jn--;)At[Jn]=arguments[Jn];if(We)var kn=As(Qe),Qn=sy(At,kn);if(d&&(At=Wm(At,d,y,We)),R&&(At=qm(At,R,N,We)),bt-=Qn,We&&bt<ce){var rn=dr(At,kn);return Qm(r,a,Oo,Qe.placeholder,c,At,rn,z,K,ce-bt)}var yi=me?c:this,er=Ce?yi[r]:r;return bt=At.length,z?At=dM(At,z):Je&&bt>1&&At.reverse(),he&&K<bt&&(At.length=K),this&&this!==bn&&this instanceof Qe&&(er=_t||ya(er)),er.apply(yi,At)}return Qe}function Zm(r,a){return function(c,d){return yb(c,r,a(d),{})}}function No(r,a){return function(c,d){var y;if(c===t&&d===t)return a;if(c!==t&&(y=c),d!==t){if(y===t)return d;typeof c=="string"||typeof d=="string"?(c=$n(c),d=$n(d)):(c=Nm(c),d=Nm(d)),y=r(c,d)}return y}}function zc(r){return $i(function(a){return a=Zt(a,jn(Ze())),xt(function(c){var d=this;return r(a,function(y){return Kn(y,d,c)})})})}function Fo(r,a){a=a===t?" ":$n(a);var c=a.length;if(c<2)return c?Ic(a,r):a;var d=Ic(a,Mo(r/vs(a)));return gs(a)?vr(vi(d),0,r).join(""):d.slice(0,r)}function Kb(r,a,c,d){var y=a&v,R=ya(r);function N(){for(var z=-1,K=arguments.length,ce=-1,he=d.length,me=ne(he+K),Ce=this&&this!==bn&&this instanceof N?R:r;++ce<he;)me[ce]=d[ce];for(;K--;)me[ce++]=arguments[++z];return Kn(Ce,y?c:this,me)}return N}function Jm(r){return function(a,c,d){return d&&typeof d!="number"&&Bn(a,c,d)&&(c=d=t),a=Qi(a),c===t?(c=a,a=0):c=Qi(c),d=d===t?a<c?1:-1:Qi(d),Ib(a,c,d,r)}}function Bo(r){return function(a,c){return typeof a=="string"&&typeof c=="string"||(a=fi(a),c=fi(c)),r(a,c)}}function Qm(r,a,c,d,y,R,N,z,K,ce){var he=a&U,me=he?N:t,Ce=he?t:N,We=he?R:t,Je=he?t:R;a|=he?O:B,a&=~(he?B:O),a&D||(a&=-4);var _t=[r,a,y,We,me,Je,Ce,z,K,ce],Qe=c.apply(t,_t);return Kc(r)&&h_(Qe,_t),Qe.placeholder=d,f_(Qe,r,a)}function Gc(r){var a=on[r];return function(c,d){if(c=fi(c),d=d==null?0:Rn(pt(d),292),d&&fm(c)){var y=(Ft(c)+"e").split("e"),R=a(y[0]+"e"+(+y[1]+d));return y=(Ft(R)+"e").split("e"),+(y[0]+"e"+(+y[1]-d))}return a(c)}}var jb=ys&&1/fo(new ys([,-0]))[1]==$?function(r){return new ys(r)}:cu;function e_(r){return function(a){var c=Pn(a);return c==ot?gc(a):c==lt?fy(a):ry(a,r(a))}}function ji(r,a,c,d,y,R,N,z){var K=a&_;if(!K&&typeof r!="function")throw new oi(l);var ce=d?d.length:0;if(ce||(a&=-97,d=y=t),N=N===t?N:ln(pt(N),0),z=z===t?z:pt(z),ce-=y?y.length:0,a&B){var he=d,me=y;d=y=t}var Ce=K?t:Wc(r),We=[r,a,c,d,y,he,me,R,N,z];if(Ce&&uM(We,Ce),r=We[0],a=We[1],c=We[2],d=We[3],y=We[4],z=We[9]=We[9]===t?K?0:r.length:ln(We[9]-ce,0),!z&&a&(U|I)&&(a&=-25),!a||a==v)var Je=Xb(r,a,c);else a==U||a==I?Je=Yb(r,a,z):(a==O||a==(v|O))&&!y.length?Je=Kb(r,a,c,d):Je=Oo.apply(t,We);var _t=Ce?Um:h_;return f_(_t(Je,We),r,a)}function t_(r,a,c,d){return r===t||Si(r,Ss[c])&&!Nt.call(d,c)?a:r}function n_(r,a,c,d,y,R){return Jt(r)&&Jt(a)&&(R.set(a,r),Do(r,a,t,n_,R),R.delete(a)),r}function $b(r){return Ea(r)?t:r}function i_(r,a,c,d,y,R){var N=c&M,z=r.length,K=a.length;if(z!=K&&!(N&&K>z))return!1;var ce=R.get(r),he=R.get(a);if(ce&&he)return ce==a&&he==r;var me=-1,Ce=!0,We=c&E?new Wr:t;for(R.set(r,a),R.set(a,r);++me<z;){var Je=r[me],_t=a[me];if(d)var Qe=N?d(_t,Je,me,a,r,R):d(Je,_t,me,r,a,R);if(Qe!==t){if(Qe)continue;Ce=!1;break}if(We){if(!hc(a,function(bt,At){if(!ua(We,At)&&(Je===bt||y(Je,bt,c,d,R)))return We.push(At)})){Ce=!1;break}}else if(!(Je===_t||y(Je,_t,c,d,R))){Ce=!1;break}}return R.delete(r),R.delete(a),Ce}function Zb(r,a,c,d,y,R,N){switch(c){case te:if(r.byteLength!=a.byteLength||r.byteOffset!=a.byteOffset)return!1;r=r.buffer,a=a.buffer;case ue:return!(r.byteLength!=a.byteLength||!R(new xo(r),new xo(a)));case Le:case et:case He:return Si(+r,+a);case vt:return r.name==a.name&&r.message==a.message;case yt:case Pe:return r==a+"";case ot:var z=gc;case lt:var K=d&M;if(z||(z=fo),r.size!=a.size&&!K)return!1;var ce=N.get(r);if(ce)return ce==a;d|=E,N.set(r,a);var he=i_(z(r),z(a),d,y,R,N);return N.delete(r),he;case P:if(ma)return ma.call(r)==ma.call(a)}return!1}function Jb(r,a,c,d,y,R){var N=c&M,z=Hc(r),K=z.length,ce=Hc(a),he=ce.length;if(K!=he&&!N)return!1;for(var me=K;me--;){var Ce=z[me];if(!(N?Ce in a:Nt.call(a,Ce)))return!1}var We=R.get(r),Je=R.get(a);if(We&&Je)return We==a&&Je==r;var _t=!0;R.set(r,a),R.set(a,r);for(var Qe=N;++me<K;){Ce=z[me];var bt=r[Ce],At=a[Ce];if(d)var Jn=N?d(At,bt,Ce,a,r,R):d(bt,At,Ce,r,a,R);if(!(Jn===t?bt===At||y(bt,At,c,d,R):Jn)){_t=!1;break}Qe||(Qe=Ce=="constructor")}if(_t&&!Qe){var kn=r.constructor,Qn=a.constructor;kn!=Qn&&"constructor"in r&&"constructor"in a&&!(typeof kn=="function"&&kn instanceof kn&&typeof Qn=="function"&&Qn instanceof Qn)&&(_t=!1)}return R.delete(r),R.delete(a),_t}function $i(r){return $c(c_(r,t,v_),r+"")}function Hc(r){return Mm(r,mn,Xc)}function Vc(r){return Mm(r,Wn,r_)}var Wc=To?function(r){return To.get(r)}:cu;function ko(r){for(var a=r.name+"",c=bs[a],d=Nt.call(bs,a)?c.length:0;d--;){var y=c[d],R=y.func;if(R==null||R==r)return y.name}return a}function As(r){var a=Nt.call(A,"placeholder")?A:r;return a.placeholder}function Ze(){var r=A.iteratee||ou;return r=r===ou?Am:r,arguments.length?r(arguments[0],arguments[1]):r}function zo(r,a){var c=r.__data__;return aM(a)?c[typeof a=="string"?"string":"hash"]:c.map}function qc(r){for(var a=mn(r),c=a.length;c--;){var d=a[c],y=r[d];a[c]=[d,y,o_(y)]}return a}function Yr(r,a){var c=cy(r,a);return Tm(c)?c:t}function Qb(r){var a=Nt.call(r,Hr),c=r[Hr];try{r[Hr]=t;var d=!0}catch{}var y=go.call(r);return d&&(a?r[Hr]=c:delete r[Hr]),y}var Xc=xc?function(r){return r==null?[]:(r=Vt(r),hr(xc(r),function(a){return um.call(r,a)}))}:uu,r_=xc?function(r){for(var a=[];r;)fr(a,Xc(r)),r=So(r);return a}:uu,Pn=Fn;(Sc&&Pn(new Sc(new ArrayBuffer(1)))!=te||fa&&Pn(new fa)!=ot||yc&&Pn(yc.resolve())!=k||ys&&Pn(new ys)!=lt||da&&Pn(new da)!=H)&&(Pn=function(r){var a=Fn(r),c=a==Ve?r.constructor:t,d=c?Kr(c):"";if(d)switch(d){case Oy:return te;case Ny:return ot;case Fy:return k;case By:return lt;case ky:return H}return a});function eM(r,a,c){for(var d=-1,y=c.length;++d<y;){var R=c[d],N=R.size;switch(R.type){case"drop":r+=N;break;case"dropRight":a-=N;break;case"take":a=Rn(a,r+N);break;case"takeRight":r=ln(r,a-N);break}}return{start:r,end:a}}function tM(r){var a=r.match(so);return a?a[1].split(qi):[]}function s_(r,a,c){a=gr(a,r);for(var d=-1,y=a.length,R=!1;++d<y;){var N=Oi(a[d]);if(!(R=r!=null&&c(r,N)))break;r=r[N]}return R||++d!=y?R:(y=r==null?0:r.length,!!y&&Yo(y)&&Zi(N,y)&&(ct(r)||jr(r)))}function nM(r){var a=r.length,c=new r.constructor(a);return a&&typeof r[0]=="string"&&Nt.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function a_(r){return typeof r.constructor=="function"&&!ba(r)?Ms(So(r)):{}}function iM(r,a,c){var d=r.constructor;switch(a){case ue:return kc(r);case Le:case et:return new d(+r);case te:return zb(r,c);case Be:case Se:case Ne:case Ke:case pe:case ve:case Fe:case Ge:case be:return Hm(r,c);case ot:return new d;case He:case Pe:return new d(r);case yt:return Gb(r);case lt:return new d;case P:return Hb(r)}}function rM(r,a){var c=a.length;if(!c)return r;var d=c-1;return a[d]=(c>1?"& ":"")+a[d],a=a.join(c>2?", ":" "),r.replace(ro,`{
/* [wrapped with `+a+`] */
`)}function sM(r){return ct(r)||jr(r)||!!(hm&&r&&r[hm])}function Zi(r,a){var c=typeof r;return a=a??oe,!!a&&(c=="number"||c!="symbol"&&ic.test(r))&&r>-1&&r%1==0&&r<a}function Bn(r,a,c){if(!Jt(c))return!1;var d=typeof a;return(d=="number"?Vn(c)&&Zi(a,c.length):d=="string"&&a in c)?Si(c[a],r):!1}function Yc(r,a){if(ct(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||Zn(r)?!0:ri.test(r)||!Lt.test(r)||a!=null&&r in Vt(a)}function aM(r){var a=typeof r;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?r!=="__proto__":r===null}function Kc(r){var a=ko(r),c=A[a];if(typeof c!="function"||!(a in Et.prototype))return!1;if(r===c)return!0;var d=Wc(c);return!!d&&r===d[0]}function oM(r){return!!om&&om in r}var lM=mo?Ji:hu;function ba(r){var a=r&&r.constructor,c=typeof a=="function"&&a.prototype||Ss;return r===c}function o_(r){return r===r&&!Jt(r)}function l_(r,a){return function(c){return c==null?!1:c[r]===a&&(a!==t||r in Vt(c))}}function cM(r){var a=qo(r,function(d){return c.size===f&&c.clear(),d}),c=a.cache;return a}function uM(r,a){var c=r[1],d=a[1],y=c|d,R=y<(v|_|C),N=d==C&&c==U||d==C&&c==F&&r[7].length<=a[8]||d==(C|F)&&a[7].length<=a[8]&&c==U;if(!(R||N))return r;d&v&&(r[2]=a[2],y|=c&v?0:D);var z=a[3];if(z){var K=r[3];r[3]=K?Wm(K,z,a[4]):z,r[4]=K?dr(r[3],m):a[4]}return z=a[5],z&&(K=r[5],r[5]=K?qm(K,z,a[6]):z,r[6]=K?dr(r[5],m):a[6]),z=a[7],z&&(r[7]=z),d&C&&(r[8]=r[8]==null?a[8]:Rn(r[8],a[8])),r[9]==null&&(r[9]=a[9]),r[0]=a[0],r[1]=y,r}function hM(r){var a=[];if(r!=null)for(var c in Vt(r))a.push(c);return a}function fM(r){return go.call(r)}function c_(r,a,c){return a=ln(a===t?r.length-1:a,0),function(){for(var d=arguments,y=-1,R=ln(d.length-a,0),N=ne(R);++y<R;)N[y]=d[a+y];y=-1;for(var z=ne(a+1);++y<a;)z[y]=d[y];return z[a]=c(N),Kn(r,this,z)}}function u_(r,a){return a.length<2?r:Xr(r,ui(a,0,-1))}function dM(r,a){for(var c=r.length,d=Rn(a.length,c),y=Hn(r);d--;){var R=a[d];r[d]=Zi(R,c)?y[R]:t}return r}function jc(r,a){if(!(a==="constructor"&&typeof r[a]=="function")&&a!="__proto__")return r[a]}var h_=d_(Um),Ma=Cy||function(r,a){return bn.setTimeout(r,a)},$c=d_(Nb);function f_(r,a,c){var d=a+"";return $c(r,rM(d,pM(tM(d),c)))}function d_(r){var a=0,c=0;return function(){var d=Ly(),y=X-(d-c);if(c=d,y>0){if(++a>=W)return arguments[0]}else a=0;return r.apply(t,arguments)}}function Go(r,a){var c=-1,d=r.length,y=d-1;for(a=a===t?d:a;++c<a;){var R=Lc(c,y),N=r[R];r[R]=r[c],r[c]=N}return r.length=a,r}var p_=cM(function(r){var a=[];return r.charCodeAt(0)===46&&a.push(""),r.replace(gi,function(c,d,y,R){a.push(y?R.replace(oo,"$1"):d||c)}),a});function Oi(r){if(typeof r=="string"||Zn(r))return r;var a=r+"";return a=="0"&&1/r==-$?"-0":a}function Kr(r){if(r!=null){try{return _o.call(r)}catch{}try{return r+""}catch{}}return""}function pM(r,a){return ai(Ht,function(c){var d="_."+c[0];a&c[1]&&!uo(r,d)&&r.push(d)}),r.sort()}function m_(r){if(r instanceof Et)return r.clone();var a=new li(r.__wrapped__,r.__chain__);return a.__actions__=Hn(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}function mM(r,a,c){(c?Bn(r,a,c):a===t)?a=1:a=ln(pt(a),0);var d=r==null?0:r.length;if(!d||a<1)return[];for(var y=0,R=0,N=ne(Mo(d/a));y<d;)N[R++]=ui(r,y,y+=a);return N}function _M(r){for(var a=-1,c=r==null?0:r.length,d=0,y=[];++a<c;){var R=r[a];R&&(y[d++]=R)}return y}function gM(){var r=arguments.length;if(!r)return[];for(var a=ne(r-1),c=arguments[0],d=r;d--;)a[d-1]=arguments[d];return fr(ct(c)?Hn(c):[c],Mn(a,1))}var vM=xt(function(r,a){return nn(r)?ga(r,Mn(a,1,nn,!0)):[]}),xM=xt(function(r,a){var c=hi(a);return nn(c)&&(c=t),nn(r)?ga(r,Mn(a,1,nn,!0),Ze(c,2)):[]}),SM=xt(function(r,a){var c=hi(a);return nn(c)&&(c=t),nn(r)?ga(r,Mn(a,1,nn,!0),t,c):[]});function yM(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===t?1:pt(a),ui(r,a<0?0:a,d)):[]}function bM(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===t?1:pt(a),a=d-a,ui(r,0,a<0?0:a)):[]}function MM(r,a){return r&&r.length?Io(r,Ze(a,3),!0,!0):[]}function EM(r,a){return r&&r.length?Io(r,Ze(a,3),!0):[]}function TM(r,a,c,d){var y=r==null?0:r.length;return y?(c&&typeof c!="number"&&Bn(r,a,c)&&(c=0,d=y),gb(r,a,c,d)):[]}function __(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=c==null?0:pt(c);return y<0&&(y=ln(d+y,0)),ho(r,Ze(a,3),y)}function g_(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=d-1;return c!==t&&(y=pt(c),y=c<0?ln(d+y,0):Rn(y,d-1)),ho(r,Ze(a,3),y,!0)}function v_(r){var a=r==null?0:r.length;return a?Mn(r,1):[]}function AM(r){var a=r==null?0:r.length;return a?Mn(r,$):[]}function wM(r,a){var c=r==null?0:r.length;return c?(a=a===t?1:pt(a),Mn(r,a)):[]}function CM(r){for(var a=-1,c=r==null?0:r.length,d={};++a<c;){var y=r[a];d[y[0]]=y[1]}return d}function x_(r){return r&&r.length?r[0]:t}function RM(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=c==null?0:pt(c);return y<0&&(y=ln(d+y,0)),_s(r,a,y)}function PM(r){var a=r==null?0:r.length;return a?ui(r,0,-1):[]}var DM=xt(function(r){var a=Zt(r,Fc);return a.length&&a[0]===r[0]?wc(a):[]}),LM=xt(function(r){var a=hi(r),c=Zt(r,Fc);return a===hi(c)?a=t:c.pop(),c.length&&c[0]===r[0]?wc(c,Ze(a,2)):[]}),IM=xt(function(r){var a=hi(r),c=Zt(r,Fc);return a=typeof a=="function"?a:t,a&&c.pop(),c.length&&c[0]===r[0]?wc(c,t,a):[]});function UM(r,a){return r==null?"":Py.call(r,a)}function hi(r){var a=r==null?0:r.length;return a?r[a-1]:t}function OM(r,a,c){var d=r==null?0:r.length;if(!d)return-1;var y=d;return c!==t&&(y=pt(c),y=y<0?ln(d+y,0):Rn(y,d-1)),a===a?py(r,a,y):ho(r,Qp,y,!0)}function NM(r,a){return r&&r.length?Pm(r,pt(a)):t}var FM=xt(S_);function S_(r,a){return r&&r.length&&a&&a.length?Dc(r,a):r}function BM(r,a,c){return r&&r.length&&a&&a.length?Dc(r,a,Ze(c,2)):r}function kM(r,a,c){return r&&r.length&&a&&a.length?Dc(r,a,t,c):r}var zM=$i(function(r,a){var c=r==null?0:r.length,d=Mc(r,a);return Im(r,Zt(a,function(y){return Zi(y,c)?+y:y}).sort(Vm)),d});function GM(r,a){var c=[];if(!(r&&r.length))return c;var d=-1,y=[],R=r.length;for(a=Ze(a,3);++d<R;){var N=r[d];a(N,d,r)&&(c.push(N),y.push(d))}return Im(r,y),c}function Zc(r){return r==null?r:Uy.call(r)}function HM(r,a,c){var d=r==null?0:r.length;return d?(c&&typeof c!="number"&&Bn(r,a,c)?(a=0,c=d):(a=a==null?0:pt(a),c=c===t?d:pt(c)),ui(r,a,c)):[]}function VM(r,a){return Lo(r,a)}function WM(r,a,c){return Uc(r,a,Ze(c,2))}function qM(r,a){var c=r==null?0:r.length;if(c){var d=Lo(r,a);if(d<c&&Si(r[d],a))return d}return-1}function XM(r,a){return Lo(r,a,!0)}function YM(r,a,c){return Uc(r,a,Ze(c,2),!0)}function KM(r,a){var c=r==null?0:r.length;if(c){var d=Lo(r,a,!0)-1;if(Si(r[d],a))return d}return-1}function jM(r){return r&&r.length?Om(r):[]}function $M(r,a){return r&&r.length?Om(r,Ze(a,2)):[]}function ZM(r){var a=r==null?0:r.length;return a?ui(r,1,a):[]}function JM(r,a,c){return r&&r.length?(a=c||a===t?1:pt(a),ui(r,0,a<0?0:a)):[]}function QM(r,a,c){var d=r==null?0:r.length;return d?(a=c||a===t?1:pt(a),a=d-a,ui(r,a<0?0:a,d)):[]}function eE(r,a){return r&&r.length?Io(r,Ze(a,3),!1,!0):[]}function tE(r,a){return r&&r.length?Io(r,Ze(a,3)):[]}var nE=xt(function(r){return _r(Mn(r,1,nn,!0))}),iE=xt(function(r){var a=hi(r);return nn(a)&&(a=t),_r(Mn(r,1,nn,!0),Ze(a,2))}),rE=xt(function(r){var a=hi(r);return a=typeof a=="function"?a:t,_r(Mn(r,1,nn,!0),t,a)});function sE(r){return r&&r.length?_r(r):[]}function aE(r,a){return r&&r.length?_r(r,Ze(a,2)):[]}function oE(r,a){return a=typeof a=="function"?a:t,r&&r.length?_r(r,t,a):[]}function Jc(r){if(!(r&&r.length))return[];var a=0;return r=hr(r,function(c){if(nn(c))return a=ln(c.length,a),!0}),mc(a,function(c){return Zt(r,fc(c))})}function y_(r,a){if(!(r&&r.length))return[];var c=Jc(r);return a==null?c:Zt(c,function(d){return Kn(a,t,d)})}var lE=xt(function(r,a){return nn(r)?ga(r,a):[]}),cE=xt(function(r){return Nc(hr(r,nn))}),uE=xt(function(r){var a=hi(r);return nn(a)&&(a=t),Nc(hr(r,nn),Ze(a,2))}),hE=xt(function(r){var a=hi(r);return a=typeof a=="function"?a:t,Nc(hr(r,nn),t,a)}),fE=xt(Jc);function dE(r,a){return km(r||[],a||[],_a)}function pE(r,a){return km(r||[],a||[],Sa)}var mE=xt(function(r){var a=r.length,c=a>1?r[a-1]:t;return c=typeof c=="function"?(r.pop(),c):t,y_(r,c)});function b_(r){var a=A(r);return a.__chain__=!0,a}function _E(r,a){return a(r),r}function Ho(r,a){return a(r)}var gE=$i(function(r){var a=r.length,c=a?r[0]:0,d=this.__wrapped__,y=function(R){return Mc(R,r)};return a>1||this.__actions__.length||!(d instanceof Et)||!Zi(c)?this.thru(y):(d=d.slice(c,+c+(a?1:0)),d.__actions__.push({func:Ho,args:[y],thisArg:t}),new li(d,this.__chain__).thru(function(R){return a&&!R.length&&R.push(t),R}))});function vE(){return b_(this)}function xE(){return new li(this.value(),this.__chain__)}function SE(){this.__values__===t&&(this.__values__=N_(this.value()));var r=this.__index__>=this.__values__.length,a=r?t:this.__values__[this.__index__++];return{done:r,value:a}}function yE(){return this}function bE(r){for(var a,c=this;c instanceof wo;){var d=m_(c);d.__index__=0,d.__values__=t,a?y.__wrapped__=d:a=d;var y=d;c=c.__wrapped__}return y.__wrapped__=r,a}function ME(){var r=this.__wrapped__;if(r instanceof Et){var a=r;return this.__actions__.length&&(a=new Et(this)),a=a.reverse(),a.__actions__.push({func:Ho,args:[Zc],thisArg:t}),new li(a,this.__chain__)}return this.thru(Zc)}function EE(){return Bm(this.__wrapped__,this.__actions__)}var TE=Uo(function(r,a,c){Nt.call(r,c)?++r[c]:Ki(r,c,1)});function AE(r,a,c){var d=ct(r)?Zp:_b;return c&&Bn(r,a,c)&&(a=t),d(r,Ze(a,3))}function wE(r,a){var c=ct(r)?hr:ym;return c(r,Ze(a,3))}var CE=jm(__),RE=jm(g_);function PE(r,a){return Mn(Vo(r,a),1)}function DE(r,a){return Mn(Vo(r,a),$)}function LE(r,a,c){return c=c===t?1:pt(c),Mn(Vo(r,a),c)}function M_(r,a){var c=ct(r)?ai:mr;return c(r,Ze(a,3))}function E_(r,a){var c=ct(r)?ZS:Sm;return c(r,Ze(a,3))}var IE=Uo(function(r,a,c){Nt.call(r,c)?r[c].push(a):Ki(r,c,[a])});function UE(r,a,c,d){r=Vn(r)?r:Cs(r),c=c&&!d?pt(c):0;var y=r.length;return c<0&&(c=ln(y+c,0)),Ko(r)?c<=y&&r.indexOf(a,c)>-1:!!y&&_s(r,a,c)>-1}var OE=xt(function(r,a,c){var d=-1,y=typeof a=="function",R=Vn(r)?ne(r.length):[];return mr(r,function(N){R[++d]=y?Kn(a,N,c):va(N,a,c)}),R}),NE=Uo(function(r,a,c){Ki(r,c,a)});function Vo(r,a){var c=ct(r)?Zt:wm;return c(r,Ze(a,3))}function FE(r,a,c,d){return r==null?[]:(ct(a)||(a=a==null?[]:[a]),c=d?t:c,ct(c)||(c=c==null?[]:[c]),Dm(r,a,c))}var BE=Uo(function(r,a,c){r[c?0:1].push(a)},function(){return[[],[]]});function kE(r,a,c){var d=ct(r)?uc:tm,y=arguments.length<3;return d(r,Ze(a,4),c,y,mr)}function zE(r,a,c){var d=ct(r)?JS:tm,y=arguments.length<3;return d(r,Ze(a,4),c,y,Sm)}function GE(r,a){var c=ct(r)?hr:ym;return c(r,Xo(Ze(a,3)))}function HE(r){var a=ct(r)?_m:Ub;return a(r)}function VE(r,a,c){(c?Bn(r,a,c):a===t)?a=1:a=pt(a);var d=ct(r)?hb:Ob;return d(r,a)}function WE(r){var a=ct(r)?fb:Fb;return a(r)}function qE(r){if(r==null)return 0;if(Vn(r))return Ko(r)?vs(r):r.length;var a=Pn(r);return a==ot||a==lt?r.size:Rc(r).length}function XE(r,a,c){var d=ct(r)?hc:Bb;return c&&Bn(r,a,c)&&(a=t),d(r,Ze(a,3))}var YE=xt(function(r,a){if(r==null)return[];var c=a.length;return c>1&&Bn(r,a[0],a[1])?a=[]:c>2&&Bn(a[0],a[1],a[2])&&(a=[a[0]]),Dm(r,Mn(a,1),[])}),Wo=wy||function(){return bn.Date.now()};function KE(r,a){if(typeof a!="function")throw new oi(l);return r=pt(r),function(){if(--r<1)return a.apply(this,arguments)}}function T_(r,a,c){return a=c?t:a,a=r&&a==null?r.length:a,ji(r,C,t,t,t,t,a)}function A_(r,a){var c;if(typeof a!="function")throw new oi(l);return r=pt(r),function(){return--r>0&&(c=a.apply(this,arguments)),r<=1&&(a=t),c}}var Qc=xt(function(r,a,c){var d=v;if(c.length){var y=dr(c,As(Qc));d|=O}return ji(r,d,a,c,y)}),w_=xt(function(r,a,c){var d=v|_;if(c.length){var y=dr(c,As(w_));d|=O}return ji(a,d,r,c,y)});function C_(r,a,c){a=c?t:a;var d=ji(r,U,t,t,t,t,t,a);return d.placeholder=C_.placeholder,d}function R_(r,a,c){a=c?t:a;var d=ji(r,I,t,t,t,t,t,a);return d.placeholder=R_.placeholder,d}function P_(r,a,c){var d,y,R,N,z,K,ce=0,he=!1,me=!1,Ce=!0;if(typeof r!="function")throw new oi(l);a=fi(a)||0,Jt(c)&&(he=!!c.leading,me="maxWait"in c,R=me?ln(fi(c.maxWait)||0,a):R,Ce="trailing"in c?!!c.trailing:Ce);function We(rn){var yi=d,er=y;return d=y=t,ce=rn,N=r.apply(er,yi),N}function Je(rn){return ce=rn,z=Ma(bt,a),he?We(rn):N}function _t(rn){var yi=rn-K,er=rn-ce,j_=a-yi;return me?Rn(j_,R-er):j_}function Qe(rn){var yi=rn-K,er=rn-ce;return K===t||yi>=a||yi<0||me&&er>=R}function bt(){var rn=Wo();if(Qe(rn))return At(rn);z=Ma(bt,_t(rn))}function At(rn){return z=t,Ce&&d?We(rn):(d=y=t,N)}function Jn(){z!==t&&zm(z),ce=0,d=K=y=z=t}function kn(){return z===t?N:At(Wo())}function Qn(){var rn=Wo(),yi=Qe(rn);if(d=arguments,y=this,K=rn,yi){if(z===t)return Je(K);if(me)return zm(z),z=Ma(bt,a),We(K)}return z===t&&(z=Ma(bt,a)),N}return Qn.cancel=Jn,Qn.flush=kn,Qn}var jE=xt(function(r,a){return xm(r,1,a)}),$E=xt(function(r,a,c){return xm(r,fi(a)||0,c)});function ZE(r){return ji(r,S)}function qo(r,a){if(typeof r!="function"||a!=null&&typeof a!="function")throw new oi(l);var c=function(){var d=arguments,y=a?a.apply(this,d):d[0],R=c.cache;if(R.has(y))return R.get(y);var N=r.apply(this,d);return c.cache=R.set(y,N)||R,N};return c.cache=new(qo.Cache||Yi),c}qo.Cache=Yi;function Xo(r){if(typeof r!="function")throw new oi(l);return function(){var a=arguments;switch(a.length){case 0:return!r.call(this);case 1:return!r.call(this,a[0]);case 2:return!r.call(this,a[0],a[1]);case 3:return!r.call(this,a[0],a[1],a[2])}return!r.apply(this,a)}}function JE(r){return A_(2,r)}var QE=kb(function(r,a){a=a.length==1&&ct(a[0])?Zt(a[0],jn(Ze())):Zt(Mn(a,1),jn(Ze()));var c=a.length;return xt(function(d){for(var y=-1,R=Rn(d.length,c);++y<R;)d[y]=a[y].call(this,d[y]);return Kn(r,this,d)})}),eu=xt(function(r,a){var c=dr(a,As(eu));return ji(r,O,t,a,c)}),D_=xt(function(r,a){var c=dr(a,As(D_));return ji(r,B,t,a,c)}),eT=$i(function(r,a){return ji(r,F,t,t,t,a)});function tT(r,a){if(typeof r!="function")throw new oi(l);return a=a===t?a:pt(a),xt(r,a)}function nT(r,a){if(typeof r!="function")throw new oi(l);return a=a==null?0:ln(pt(a),0),xt(function(c){var d=c[a],y=vr(c,0,a);return d&&fr(y,d),Kn(r,this,y)})}function iT(r,a,c){var d=!0,y=!0;if(typeof r!="function")throw new oi(l);return Jt(c)&&(d="leading"in c?!!c.leading:d,y="trailing"in c?!!c.trailing:y),P_(r,a,{leading:d,maxWait:a,trailing:y})}function rT(r){return T_(r,1)}function sT(r,a){return eu(Bc(a),r)}function aT(){if(!arguments.length)return[];var r=arguments[0];return ct(r)?r:[r]}function oT(r){return ci(r,x)}function lT(r,a){return a=typeof a=="function"?a:t,ci(r,x,a)}function cT(r){return ci(r,p|x)}function uT(r,a){return a=typeof a=="function"?a:t,ci(r,p|x,a)}function hT(r,a){return a==null||vm(r,a,mn(a))}function Si(r,a){return r===a||r!==r&&a!==a}var fT=Bo(Ac),dT=Bo(function(r,a){return r>=a}),jr=Em((function(){return arguments})())?Em:function(r){return Qt(r)&&Nt.call(r,"callee")&&!um.call(r,"callee")},ct=ne.isArray,pT=qp?jn(qp):bb;function Vn(r){return r!=null&&Yo(r.length)&&!Ji(r)}function nn(r){return Qt(r)&&Vn(r)}function mT(r){return r===!0||r===!1||Qt(r)&&Fn(r)==Le}var xr=Ry||hu,_T=Xp?jn(Xp):Mb;function gT(r){return Qt(r)&&r.nodeType===1&&!Ea(r)}function vT(r){if(r==null)return!0;if(Vn(r)&&(ct(r)||typeof r=="string"||typeof r.splice=="function"||xr(r)||ws(r)||jr(r)))return!r.length;var a=Pn(r);if(a==ot||a==lt)return!r.size;if(ba(r))return!Rc(r).length;for(var c in r)if(Nt.call(r,c))return!1;return!0}function xT(r,a){return xa(r,a)}function ST(r,a,c){c=typeof c=="function"?c:t;var d=c?c(r,a):t;return d===t?xa(r,a,t,c):!!d}function tu(r){if(!Qt(r))return!1;var a=Fn(r);return a==vt||a==ze||typeof r.message=="string"&&typeof r.name=="string"&&!Ea(r)}function yT(r){return typeof r=="number"&&fm(r)}function Ji(r){if(!Jt(r))return!1;var a=Fn(r);return a==Xt||a==St||a==_e||a==kt}function L_(r){return typeof r=="number"&&r==pt(r)}function Yo(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=oe}function Jt(r){var a=typeof r;return r!=null&&(a=="object"||a=="function")}function Qt(r){return r!=null&&typeof r=="object"}var I_=Yp?jn(Yp):Tb;function bT(r,a){return r===a||Cc(r,a,qc(a))}function MT(r,a,c){return c=typeof c=="function"?c:t,Cc(r,a,qc(a),c)}function ET(r){return U_(r)&&r!=+r}function TT(r){if(lM(r))throw new rt(o);return Tm(r)}function AT(r){return r===null}function wT(r){return r==null}function U_(r){return typeof r=="number"||Qt(r)&&Fn(r)==He}function Ea(r){if(!Qt(r)||Fn(r)!=Ve)return!1;var a=So(r);if(a===null)return!0;var c=Nt.call(a,"constructor")&&a.constructor;return typeof c=="function"&&c instanceof c&&_o.call(c)==My}var nu=Kp?jn(Kp):Ab;function CT(r){return L_(r)&&r>=-oe&&r<=oe}var O_=jp?jn(jp):wb;function Ko(r){return typeof r=="string"||!ct(r)&&Qt(r)&&Fn(r)==Pe}function Zn(r){return typeof r=="symbol"||Qt(r)&&Fn(r)==P}var ws=$p?jn($p):Cb;function RT(r){return r===t}function PT(r){return Qt(r)&&Pn(r)==H}function DT(r){return Qt(r)&&Fn(r)==ae}var LT=Bo(Pc),IT=Bo(function(r,a){return r<=a});function N_(r){if(!r)return[];if(Vn(r))return Ko(r)?vi(r):Hn(r);if(ha&&r[ha])return hy(r[ha]());var a=Pn(r),c=a==ot?gc:a==lt?fo:Cs;return c(r)}function Qi(r){if(!r)return r===0?r:0;if(r=fi(r),r===$||r===-$){var a=r<0?-1:1;return a*Ae}return r===r?r:0}function pt(r){var a=Qi(r),c=a%1;return a===a?c?a-c:a:0}function F_(r){return r?qr(pt(r),0,Me):0}function fi(r){if(typeof r=="number")return r;if(Zn(r))return ye;if(Jt(r)){var a=typeof r.valueOf=="function"?r.valueOf():r;r=Jt(a)?a+"":a}if(typeof r!="string")return r===0?r:+r;r=nm(r);var c=lo.test(r);return c||nc.test(r)?KS(r.slice(2),c?2:8):ds.test(r)?ye:+r}function B_(r){return Ui(r,Wn(r))}function UT(r){return r?qr(pt(r),-oe,oe):r===0?r:0}function Ft(r){return r==null?"":$n(r)}var OT=Es(function(r,a){if(ba(a)||Vn(a)){Ui(a,mn(a),r);return}for(var c in a)Nt.call(a,c)&&_a(r,c,a[c])}),k_=Es(function(r,a){Ui(a,Wn(a),r)}),jo=Es(function(r,a,c,d){Ui(a,Wn(a),r,d)}),NT=Es(function(r,a,c,d){Ui(a,mn(a),r,d)}),FT=$i(Mc);function BT(r,a){var c=Ms(r);return a==null?c:gm(c,a)}var kT=xt(function(r,a){r=Vt(r);var c=-1,d=a.length,y=d>2?a[2]:t;for(y&&Bn(a[0],a[1],y)&&(d=1);++c<d;)for(var R=a[c],N=Wn(R),z=-1,K=N.length;++z<K;){var ce=N[z],he=r[ce];(he===t||Si(he,Ss[ce])&&!Nt.call(r,ce))&&(r[ce]=R[ce])}return r}),zT=xt(function(r){return r.push(t,n_),Kn(z_,t,r)});function GT(r,a){return Jp(r,Ze(a,3),Ii)}function HT(r,a){return Jp(r,Ze(a,3),Tc)}function VT(r,a){return r==null?r:Ec(r,Ze(a,3),Wn)}function WT(r,a){return r==null?r:bm(r,Ze(a,3),Wn)}function qT(r,a){return r&&Ii(r,Ze(a,3))}function XT(r,a){return r&&Tc(r,Ze(a,3))}function YT(r){return r==null?[]:Po(r,mn(r))}function KT(r){return r==null?[]:Po(r,Wn(r))}function iu(r,a,c){var d=r==null?t:Xr(r,a);return d===t?c:d}function jT(r,a){return r!=null&&s_(r,a,vb)}function ru(r,a){return r!=null&&s_(r,a,xb)}var $T=Zm(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=go.call(a)),r[a]=c},au(qn)),ZT=Zm(function(r,a,c){a!=null&&typeof a.toString!="function"&&(a=go.call(a)),Nt.call(r,a)?r[a].push(c):r[a]=[c]},Ze),JT=xt(va);function mn(r){return Vn(r)?mm(r):Rc(r)}function Wn(r){return Vn(r)?mm(r,!0):Rb(r)}function QT(r,a){var c={};return a=Ze(a,3),Ii(r,function(d,y,R){Ki(c,a(d,y,R),d)}),c}function eA(r,a){var c={};return a=Ze(a,3),Ii(r,function(d,y,R){Ki(c,y,a(d,y,R))}),c}var tA=Es(function(r,a,c){Do(r,a,c)}),z_=Es(function(r,a,c,d){Do(r,a,c,d)}),nA=$i(function(r,a){var c={};if(r==null)return c;var d=!1;a=Zt(a,function(R){return R=gr(R,r),d||(d=R.length>1),R}),Ui(r,Vc(r),c),d&&(c=ci(c,p|g|x,$b));for(var y=a.length;y--;)Oc(c,a[y]);return c});function iA(r,a){return G_(r,Xo(Ze(a)))}var rA=$i(function(r,a){return r==null?{}:Db(r,a)});function G_(r,a){if(r==null)return{};var c=Zt(Vc(r),function(d){return[d]});return a=Ze(a),Lm(r,c,function(d,y){return a(d,y[0])})}function sA(r,a,c){a=gr(a,r);var d=-1,y=a.length;for(y||(y=1,r=t);++d<y;){var R=r==null?t:r[Oi(a[d])];R===t&&(d=y,R=c),r=Ji(R)?R.call(r):R}return r}function aA(r,a,c){return r==null?r:Sa(r,a,c)}function oA(r,a,c,d){return d=typeof d=="function"?d:t,r==null?r:Sa(r,a,c,d)}var H_=e_(mn),V_=e_(Wn);function lA(r,a,c){var d=ct(r),y=d||xr(r)||ws(r);if(a=Ze(a,4),c==null){var R=r&&r.constructor;y?c=d?new R:[]:Jt(r)?c=Ji(R)?Ms(So(r)):{}:c={}}return(y?ai:Ii)(r,function(N,z,K){return a(c,N,z,K)}),c}function cA(r,a){return r==null?!0:Oc(r,a)}function uA(r,a,c){return r==null?r:Fm(r,a,Bc(c))}function hA(r,a,c,d){return d=typeof d=="function"?d:t,r==null?r:Fm(r,a,Bc(c),d)}function Cs(r){return r==null?[]:_c(r,mn(r))}function fA(r){return r==null?[]:_c(r,Wn(r))}function dA(r,a,c){return c===t&&(c=a,a=t),c!==t&&(c=fi(c),c=c===c?c:0),a!==t&&(a=fi(a),a=a===a?a:0),qr(fi(r),a,c)}function pA(r,a,c){return a=Qi(a),c===t?(c=a,a=0):c=Qi(c),r=fi(r),Sb(r,a,c)}function mA(r,a,c){if(c&&typeof c!="boolean"&&Bn(r,a,c)&&(a=c=t),c===t&&(typeof a=="boolean"?(c=a,a=t):typeof r=="boolean"&&(c=r,r=t)),r===t&&a===t?(r=0,a=1):(r=Qi(r),a===t?(a=r,r=0):a=Qi(a)),r>a){var d=r;r=a,a=d}if(c||r%1||a%1){var y=dm();return Rn(r+y*(a-r+YS("1e-"+((y+"").length-1))),a)}return Lc(r,a)}var _A=Ts(function(r,a,c){return a=a.toLowerCase(),r+(c?W_(a):a)});function W_(r){return su(Ft(r).toLowerCase())}function q_(r){return r=Ft(r),r&&r.replace(rc,ay).replace(FS,"")}function gA(r,a,c){r=Ft(r),a=$n(a);var d=r.length;c=c===t?d:qr(pt(c),0,d);var y=c;return c-=a.length,c>=0&&r.slice(c,y)==a}function vA(r){return r=Ft(r),r&&fe.test(r)?r.replace(Ie,oy):r}function xA(r){return r=Ft(r),r&&io.test(r)?r.replace(aa,"\\$&"):r}var SA=Ts(function(r,a,c){return r+(c?"-":"")+a.toLowerCase()}),yA=Ts(function(r,a,c){return r+(c?" ":"")+a.toLowerCase()}),bA=Km("toLowerCase");function MA(r,a,c){r=Ft(r),a=pt(a);var d=a?vs(r):0;if(!a||d>=a)return r;var y=(a-d)/2;return Fo(Eo(y),c)+r+Fo(Mo(y),c)}function EA(r,a,c){r=Ft(r),a=pt(a);var d=a?vs(r):0;return a&&d<a?r+Fo(a-d,c):r}function TA(r,a,c){r=Ft(r),a=pt(a);var d=a?vs(r):0;return a&&d<a?Fo(a-d,c)+r:r}function AA(r,a,c){return c||a==null?a=0:a&&(a=+a),Iy(Ft(r).replace(zr,""),a||0)}function wA(r,a,c){return(c?Bn(r,a,c):a===t)?a=1:a=pt(a),Ic(Ft(r),a)}function CA(){var r=arguments,a=Ft(r[0]);return r.length<3?a:a.replace(r[1],r[2])}var RA=Ts(function(r,a,c){return r+(c?"_":"")+a.toLowerCase()});function PA(r,a,c){return c&&typeof c!="number"&&Bn(r,a,c)&&(a=c=t),c=c===t?Me:c>>>0,c?(r=Ft(r),r&&(typeof a=="string"||a!=null&&!nu(a))&&(a=$n(a),!a&&gs(r))?vr(vi(r),0,c):r.split(a,c)):[]}var DA=Ts(function(r,a,c){return r+(c?" ":"")+su(a)});function LA(r,a,c){return r=Ft(r),c=c==null?0:qr(pt(c),0,r.length),a=$n(a),r.slice(c,c+a.length)==a}function IA(r,a,c){var d=A.templateSettings;c&&Bn(r,a,c)&&(a=t),r=Ft(r),a=jo({},a,d,t_);var y=jo({},a.imports,d.imports,t_),R=mn(y),N=_c(y,R),z,K,ce=0,he=a.interpolate||ps,me="__p += '",Ce=vc((a.escape||ps).source+"|"+he.source+"|"+(he===zt?fs:ps).source+"|"+(a.evaluate||ps).source+"|$","g"),We="//# sourceURL="+(Nt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++HS+"]")+`
`;r.replace(Ce,function(Qe,bt,At,Jn,kn,Qn){return At||(At=Jn),me+=r.slice(ce,Qn).replace(sc,ly),bt&&(z=!0,me+=`' +
__e(`+bt+`) +
'`),kn&&(K=!0,me+=`';
`+kn+`;
__p += '`),At&&(me+=`' +
((__t = (`+At+`)) == null ? '' : __t) +
'`),ce=Qn+Qe.length,Qe}),me+=`';
`;var Je=Nt.call(a,"variable")&&a.variable;if(!Je)me=`with (obj) {
`+me+`
}
`;else if(ao.test(Je))throw new rt(u);me=(K?me.replace(ft,""):me).replace(V,"$1").replace(De,"$1;"),me="function("+(Je||"obj")+`) {
`+(Je?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(K?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+me+`return __p
}`;var _t=Y_(function(){return Ut(R,We+"return "+me).apply(t,N)});if(_t.source=me,tu(_t))throw _t;return _t}function UA(r){return Ft(r).toLowerCase()}function OA(r){return Ft(r).toUpperCase()}function NA(r,a,c){if(r=Ft(r),r&&(c||a===t))return nm(r);if(!r||!(a=$n(a)))return r;var d=vi(r),y=vi(a),R=im(d,y),N=rm(d,y)+1;return vr(d,R,N).join("")}function FA(r,a,c){if(r=Ft(r),r&&(c||a===t))return r.slice(0,am(r)+1);if(!r||!(a=$n(a)))return r;var d=vi(r),y=rm(d,vi(a))+1;return vr(d,0,y).join("")}function BA(r,a,c){if(r=Ft(r),r&&(c||a===t))return r.replace(zr,"");if(!r||!(a=$n(a)))return r;var d=vi(r),y=im(d,vi(a));return vr(d,y).join("")}function kA(r,a){var c=T,d=L;if(Jt(a)){var y="separator"in a?a.separator:y;c="length"in a?pt(a.length):c,d="omission"in a?$n(a.omission):d}r=Ft(r);var R=r.length;if(gs(r)){var N=vi(r);R=N.length}if(c>=R)return r;var z=c-vs(d);if(z<1)return d;var K=N?vr(N,0,z).join(""):r.slice(0,z);if(y===t)return K+d;if(N&&(z+=K.length-z),nu(y)){if(r.slice(z).search(y)){var ce,he=K;for(y.global||(y=vc(y.source,Ft(la.exec(y))+"g")),y.lastIndex=0;ce=y.exec(he);)var me=ce.index;K=K.slice(0,me===t?z:me)}}else if(r.indexOf($n(y),z)!=z){var Ce=K.lastIndexOf(y);Ce>-1&&(K=K.slice(0,Ce))}return K+d}function zA(r){return r=Ft(r),r&&ge.test(r)?r.replace(xe,my):r}var GA=Ts(function(r,a,c){return r+(c?" ":"")+a.toUpperCase()}),su=Km("toUpperCase");function X_(r,a,c){return r=Ft(r),a=c?t:a,a===t?uy(r)?vy(r):ty(r):r.match(a)||[]}var Y_=xt(function(r,a){try{return Kn(r,t,a)}catch(c){return tu(c)?c:new rt(c)}}),HA=$i(function(r,a){return ai(a,function(c){c=Oi(c),Ki(r,c,Qc(r[c],r))}),r});function VA(r){var a=r==null?0:r.length,c=Ze();return r=a?Zt(r,function(d){if(typeof d[1]!="function")throw new oi(l);return[c(d[0]),d[1]]}):[],xt(function(d){for(var y=-1;++y<a;){var R=r[y];if(Kn(R[0],this,d))return Kn(R[1],this,d)}})}function WA(r){return mb(ci(r,p))}function au(r){return function(){return r}}function qA(r,a){return r==null||r!==r?a:r}var XA=$m(),YA=$m(!0);function qn(r){return r}function ou(r){return Am(typeof r=="function"?r:ci(r,p))}function KA(r){return Cm(ci(r,p))}function jA(r,a){return Rm(r,ci(a,p))}var $A=xt(function(r,a){return function(c){return va(c,r,a)}}),ZA=xt(function(r,a){return function(c){return va(r,c,a)}});function lu(r,a,c){var d=mn(a),y=Po(a,d);c==null&&!(Jt(a)&&(y.length||!d.length))&&(c=a,a=r,r=this,y=Po(a,mn(a)));var R=!(Jt(c)&&"chain"in c)||!!c.chain,N=Ji(r);return ai(y,function(z){var K=a[z];r[z]=K,N&&(r.prototype[z]=function(){var ce=this.__chain__;if(R||ce){var he=r(this.__wrapped__),me=he.__actions__=Hn(this.__actions__);return me.push({func:K,args:arguments,thisArg:r}),he.__chain__=ce,he}return K.apply(r,fr([this.value()],arguments))})}),r}function JA(){return bn._===this&&(bn._=Ey),this}function cu(){}function QA(r){return r=pt(r),xt(function(a){return Pm(a,r)})}var e1=zc(Zt),t1=zc(Zp),n1=zc(hc);function K_(r){return Yc(r)?fc(Oi(r)):Lb(r)}function i1(r){return function(a){return r==null?t:Xr(r,a)}}var r1=Jm(),s1=Jm(!0);function uu(){return[]}function hu(){return!1}function a1(){return{}}function o1(){return""}function l1(){return!0}function c1(r,a){if(r=pt(r),r<1||r>oe)return[];var c=Me,d=Rn(r,Me);a=Ze(a),r-=Me;for(var y=mc(d,a);++c<r;)a(c);return y}function u1(r){return ct(r)?Zt(r,Oi):Zn(r)?[r]:Hn(p_(Ft(r)))}function h1(r){var a=++by;return Ft(r)+a}var f1=No(function(r,a){return r+a},0),d1=Gc("ceil"),p1=No(function(r,a){return r/a},1),m1=Gc("floor");function _1(r){return r&&r.length?Ro(r,qn,Ac):t}function g1(r,a){return r&&r.length?Ro(r,Ze(a,2),Ac):t}function v1(r){return em(r,qn)}function x1(r,a){return em(r,Ze(a,2))}function S1(r){return r&&r.length?Ro(r,qn,Pc):t}function y1(r,a){return r&&r.length?Ro(r,Ze(a,2),Pc):t}var b1=No(function(r,a){return r*a},1),M1=Gc("round"),E1=No(function(r,a){return r-a},0);function T1(r){return r&&r.length?pc(r,qn):0}function A1(r,a){return r&&r.length?pc(r,Ze(a,2)):0}return A.after=KE,A.ary=T_,A.assign=OT,A.assignIn=k_,A.assignInWith=jo,A.assignWith=NT,A.at=FT,A.before=A_,A.bind=Qc,A.bindAll=HA,A.bindKey=w_,A.castArray=aT,A.chain=b_,A.chunk=mM,A.compact=_M,A.concat=gM,A.cond=VA,A.conforms=WA,A.constant=au,A.countBy=TE,A.create=BT,A.curry=C_,A.curryRight=R_,A.debounce=P_,A.defaults=kT,A.defaultsDeep=zT,A.defer=jE,A.delay=$E,A.difference=vM,A.differenceBy=xM,A.differenceWith=SM,A.drop=yM,A.dropRight=bM,A.dropRightWhile=MM,A.dropWhile=EM,A.fill=TM,A.filter=wE,A.flatMap=PE,A.flatMapDeep=DE,A.flatMapDepth=LE,A.flatten=v_,A.flattenDeep=AM,A.flattenDepth=wM,A.flip=ZE,A.flow=XA,A.flowRight=YA,A.fromPairs=CM,A.functions=YT,A.functionsIn=KT,A.groupBy=IE,A.initial=PM,A.intersection=DM,A.intersectionBy=LM,A.intersectionWith=IM,A.invert=$T,A.invertBy=ZT,A.invokeMap=OE,A.iteratee=ou,A.keyBy=NE,A.keys=mn,A.keysIn=Wn,A.map=Vo,A.mapKeys=QT,A.mapValues=eA,A.matches=KA,A.matchesProperty=jA,A.memoize=qo,A.merge=tA,A.mergeWith=z_,A.method=$A,A.methodOf=ZA,A.mixin=lu,A.negate=Xo,A.nthArg=QA,A.omit=nA,A.omitBy=iA,A.once=JE,A.orderBy=FE,A.over=e1,A.overArgs=QE,A.overEvery=t1,A.overSome=n1,A.partial=eu,A.partialRight=D_,A.partition=BE,A.pick=rA,A.pickBy=G_,A.property=K_,A.propertyOf=i1,A.pull=FM,A.pullAll=S_,A.pullAllBy=BM,A.pullAllWith=kM,A.pullAt=zM,A.range=r1,A.rangeRight=s1,A.rearg=eT,A.reject=GE,A.remove=GM,A.rest=tT,A.reverse=Zc,A.sampleSize=VE,A.set=aA,A.setWith=oA,A.shuffle=WE,A.slice=HM,A.sortBy=YE,A.sortedUniq=jM,A.sortedUniqBy=$M,A.split=PA,A.spread=nT,A.tail=ZM,A.take=JM,A.takeRight=QM,A.takeRightWhile=eE,A.takeWhile=tE,A.tap=_E,A.throttle=iT,A.thru=Ho,A.toArray=N_,A.toPairs=H_,A.toPairsIn=V_,A.toPath=u1,A.toPlainObject=B_,A.transform=lA,A.unary=rT,A.union=nE,A.unionBy=iE,A.unionWith=rE,A.uniq=sE,A.uniqBy=aE,A.uniqWith=oE,A.unset=cA,A.unzip=Jc,A.unzipWith=y_,A.update=uA,A.updateWith=hA,A.values=Cs,A.valuesIn=fA,A.without=lE,A.words=X_,A.wrap=sT,A.xor=cE,A.xorBy=uE,A.xorWith=hE,A.zip=fE,A.zipObject=dE,A.zipObjectDeep=pE,A.zipWith=mE,A.entries=H_,A.entriesIn=V_,A.extend=k_,A.extendWith=jo,lu(A,A),A.add=f1,A.attempt=Y_,A.camelCase=_A,A.capitalize=W_,A.ceil=d1,A.clamp=dA,A.clone=oT,A.cloneDeep=cT,A.cloneDeepWith=uT,A.cloneWith=lT,A.conformsTo=hT,A.deburr=q_,A.defaultTo=qA,A.divide=p1,A.endsWith=gA,A.eq=Si,A.escape=vA,A.escapeRegExp=xA,A.every=AE,A.find=CE,A.findIndex=__,A.findKey=GT,A.findLast=RE,A.findLastIndex=g_,A.findLastKey=HT,A.floor=m1,A.forEach=M_,A.forEachRight=E_,A.forIn=VT,A.forInRight=WT,A.forOwn=qT,A.forOwnRight=XT,A.get=iu,A.gt=fT,A.gte=dT,A.has=jT,A.hasIn=ru,A.head=x_,A.identity=qn,A.includes=UE,A.indexOf=RM,A.inRange=pA,A.invoke=JT,A.isArguments=jr,A.isArray=ct,A.isArrayBuffer=pT,A.isArrayLike=Vn,A.isArrayLikeObject=nn,A.isBoolean=mT,A.isBuffer=xr,A.isDate=_T,A.isElement=gT,A.isEmpty=vT,A.isEqual=xT,A.isEqualWith=ST,A.isError=tu,A.isFinite=yT,A.isFunction=Ji,A.isInteger=L_,A.isLength=Yo,A.isMap=I_,A.isMatch=bT,A.isMatchWith=MT,A.isNaN=ET,A.isNative=TT,A.isNil=wT,A.isNull=AT,A.isNumber=U_,A.isObject=Jt,A.isObjectLike=Qt,A.isPlainObject=Ea,A.isRegExp=nu,A.isSafeInteger=CT,A.isSet=O_,A.isString=Ko,A.isSymbol=Zn,A.isTypedArray=ws,A.isUndefined=RT,A.isWeakMap=PT,A.isWeakSet=DT,A.join=UM,A.kebabCase=SA,A.last=hi,A.lastIndexOf=OM,A.lowerCase=yA,A.lowerFirst=bA,A.lt=LT,A.lte=IT,A.max=_1,A.maxBy=g1,A.mean=v1,A.meanBy=x1,A.min=S1,A.minBy=y1,A.stubArray=uu,A.stubFalse=hu,A.stubObject=a1,A.stubString=o1,A.stubTrue=l1,A.multiply=b1,A.nth=NM,A.noConflict=JA,A.noop=cu,A.now=Wo,A.pad=MA,A.padEnd=EA,A.padStart=TA,A.parseInt=AA,A.random=mA,A.reduce=kE,A.reduceRight=zE,A.repeat=wA,A.replace=CA,A.result=sA,A.round=M1,A.runInContext=q,A.sample=HE,A.size=qE,A.snakeCase=RA,A.some=XE,A.sortedIndex=VM,A.sortedIndexBy=WM,A.sortedIndexOf=qM,A.sortedLastIndex=XM,A.sortedLastIndexBy=YM,A.sortedLastIndexOf=KM,A.startCase=DA,A.startsWith=LA,A.subtract=E1,A.sum=T1,A.sumBy=A1,A.template=IA,A.times=c1,A.toFinite=Qi,A.toInteger=pt,A.toLength=F_,A.toLower=UA,A.toNumber=fi,A.toSafeInteger=UT,A.toString=Ft,A.toUpper=OA,A.trim=NA,A.trimEnd=FA,A.trimStart=BA,A.truncate=kA,A.unescape=zA,A.uniqueId=h1,A.upperCase=GA,A.upperFirst=su,A.each=M_,A.eachRight=E_,A.first=x_,lu(A,(function(){var r={};return Ii(A,function(a,c){Nt.call(A.prototype,c)||(r[c]=a)}),r})(),{chain:!1}),A.VERSION=n,ai(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),ai(["drop","take"],function(r,a){Et.prototype[r]=function(c){c=c===t?1:ln(pt(c),0);var d=this.__filtered__&&!a?new Et(this):this.clone();return d.__filtered__?d.__takeCount__=Rn(c,d.__takeCount__):d.__views__.push({size:Rn(c,Me),type:r+(d.__dir__<0?"Right":"")}),d},Et.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),ai(["filter","map","takeWhile"],function(r,a){var c=a+1,d=c==ie||c==ee;Et.prototype[r]=function(y){var R=this.clone();return R.__iteratees__.push({iteratee:Ze(y,3),type:c}),R.__filtered__=R.__filtered__||d,R}}),ai(["head","last"],function(r,a){var c="take"+(a?"Right":"");Et.prototype[r]=function(){return this[c](1).value()[0]}}),ai(["initial","tail"],function(r,a){var c="drop"+(a?"":"Right");Et.prototype[r]=function(){return this.__filtered__?new Et(this):this[c](1)}}),Et.prototype.compact=function(){return this.filter(qn)},Et.prototype.find=function(r){return this.filter(r).head()},Et.prototype.findLast=function(r){return this.reverse().find(r)},Et.prototype.invokeMap=xt(function(r,a){return typeof r=="function"?new Et(this):this.map(function(c){return va(c,r,a)})}),Et.prototype.reject=function(r){return this.filter(Xo(Ze(r)))},Et.prototype.slice=function(r,a){r=pt(r);var c=this;return c.__filtered__&&(r>0||a<0)?new Et(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),a!==t&&(a=pt(a),c=a<0?c.dropRight(-a):c.take(a-r)),c)},Et.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Et.prototype.toArray=function(){return this.take(Me)},Ii(Et.prototype,function(r,a){var c=/^(?:filter|find|map|reject)|While$/.test(a),d=/^(?:head|last)$/.test(a),y=A[d?"take"+(a=="last"?"Right":""):a],R=d||/^find/.test(a);y&&(A.prototype[a]=function(){var N=this.__wrapped__,z=d?[1]:arguments,K=N instanceof Et,ce=z[0],he=K||ct(N),me=function(bt){var At=y.apply(A,fr([bt],z));return d&&Ce?At[0]:At};he&&c&&typeof ce=="function"&&ce.length!=1&&(K=he=!1);var Ce=this.__chain__,We=!!this.__actions__.length,Je=R&&!Ce,_t=K&&!We;if(!R&&he){N=_t?N:new Et(this);var Qe=r.apply(N,z);return Qe.__actions__.push({func:Ho,args:[me],thisArg:t}),new li(Qe,Ce)}return Je&&_t?r.apply(this,z):(Qe=this.thru(me),Je?d?Qe.value()[0]:Qe.value():Qe)})}),ai(["pop","push","shift","sort","splice","unshift"],function(r){var a=po[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",d=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var y=arguments;if(d&&!this.__chain__){var R=this.value();return a.apply(ct(R)?R:[],y)}return this[c](function(N){return a.apply(ct(N)?N:[],y)})}}),Ii(Et.prototype,function(r,a){var c=A[a];if(c){var d=c.name+"";Nt.call(bs,d)||(bs[d]=[]),bs[d].push({name:a,func:c})}}),bs[Oo(t,_).name]=[{name:"wrapper",func:t}],Et.prototype.clone=zy,Et.prototype.reverse=Gy,Et.prototype.value=Hy,A.prototype.at=gE,A.prototype.chain=vE,A.prototype.commit=xE,A.prototype.next=SE,A.prototype.plant=bE,A.prototype.reverse=ME,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=EE,A.prototype.first=A.prototype.head,ha&&(A.prototype[ha]=yE),A}),xs=xy();Gr?((Gr.exports=xs)._=xs,oc._=xs):bn._=xs}).call(E3)})(Ha,Ha.exports)),Ha.exports}var A3=T3();const or=Ap(A3),PS=14;function w3(){const i=or.random(1,PS);return Ti(i)}function Ti(i){return(i<1||i>PS)&&(console.warn(`Invalid texture number ${i}. Using default texture 1.`),i=1),`${document.baseURI}assets/gfx/planets/${i}.jpg`}function C3(){return{planets:[{color:"#87e5b0",radius:21,position:new G(278,-304,-313),textureUrl:Ti(1)},{color:"#c964ea",radius:94,position:new G(-22,-183,-595),textureUrl:Ti(2)},{color:"#2ef279",radius:31,position:new G(656,495,-617),textureUrl:Ti(3)},{color:"#5ecc4d",radius:94,position:new G(296,438,-38),textureUrl:Ti(4)},{color:"#d66e51",radius:96,position:new G(612,578,491),textureUrl:Ti(5)},{color:"#45ef86",radius:63,position:new G(-338,-190,656),textureUrl:Ti(6)},{color:"#9a2aea",radius:94,position:new G(-295,-243,-382),textureUrl:Ti(7)},{color:"#9683f7",radius:64,position:new G(674,-392,466),textureUrl:Ti(8)},{color:"#f23ebc",radius:50,position:new G(413,-445,272),textureUrl:Ti(9)},{color:"#5d9aea",radius:55,position:new G(684,-395,-566),textureUrl:Ti(10)}],initialBallPosition:new G(393.04081542468845,-477.8397276414723,274.04848270177894)}}function R3(i,e,t){return i.position.distanceTo(e.position)<i.radius+e.radius+t}function P3(i,e){const t=or.sample(i),n=new G(or.random(-.5,.5),or.random(-.5,.5),or.random(-.5,.5)).normalize().multiplyScalar(t.radius).addScalar(e+.1);return t.position.clone().add(n)}function D3(){const i=ht(),e=20,t=10,n=[];for(;n.length<t;){const o=or.random(20,100),l=new G(or.random(-i.planet.maxOffset,i.planet.maxOffset),or.random(-i.planet.maxOffset,i.planet.maxOffset),or.random(-i.planet.maxOffset,i.planet.maxOffset)),u={radius:o,position:l,color:RS(),textureUrl:w3()};n.some(h=>R3(u,h,e))||n.push(u)}return{planets:n,initialBallPosition:P3(n,i.ball.radius)}}function Ws(i){return`${document.baseURI}assets/gfx/box-skybox/sky${i}.png`}class L3 extends Sn{constructor(){super(new Or,[]),this.init()}async init(){const e=new vp,t=ht().skybox.opacity,n=await Promise.all([e.loadAsync(Ws(1)),e.loadAsync(Ws(2)),e.loadAsync(Ws(3)),e.loadAsync(Ws(4)),e.loadAsync(Ws(5)),e.loadAsync(Ws(6))]),s=[new Gn({side:en,map:n[3],opacity:t,transparent:!0}),new Gn({side:en,map:n[1],opacity:t,transparent:!0}),new Gn({side:en,map:n[0],opacity:t,transparent:!0}),new Gn({side:en,map:n[5],opacity:t,transparent:!0}),new Gn({side:en,map:n[2],opacity:t,transparent:!0}),new Gn({side:en,map:n[4],opacity:t,transparent:!0})],o=10**5,l=new Or(o,o,o);this.geometry=l,this.material=s}}const Ai=class Ai extends Ks{constructor(){super(),this.animationTime=0,this.init()}init(){const e=10**Ai.SKYBOX_RADIUS_EXPONENT,t=new Nr(e,64,64),n=new Gn({side:en,color:new st(0,0,.015),opacity:ht().skybox.opacity,transparent:!0}),s=new Sn(t,n);this.add(s),this.createStarField(e*.95),this.createSun(e*.9)}createStarField(e){const n=new Float32Array(9e3),s=new Float32Array(3e3*3),o=new Float32Array(3e3);for(let f=0;f<3e3;f++){const m=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),g=e*Math.sin(p)*Math.cos(m),x=e*Math.sin(p)*Math.sin(m),M=e*Math.cos(p);n[f*3]=g,n[f*3+1]=x,n[f*3+2]=M;const E=Math.random();E<.7?(s[f*3]=.9+Math.random()*.1,s[f*3+1]=.9+Math.random()*.1,s[f*3+2]=.9+Math.random()*.1):E<.85?(s[f*3]=.7+Math.random()*.2,s[f*3+1]=.8+Math.random()*.2,s[f*3+2]=.9+Math.random()*.1):(s[f*3]=.9+Math.random()*.1,s[f*3+1]=.9+Math.random()*.1,s[f*3+2]=.7+Math.random()*.2),o[f]=Math.random()*3+.5}const l=new wn;l.setAttribute("position",new ii(n,3)),l.setAttribute("color",new ii(s,3)),l.setAttribute("size",new ii(o,1));const u=new Nx({size:50,vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:Ul}),h=new Fw(l,u);this.add(h)}createSun(e){const t=e*.7,n=-e*.3,s=e*.6,o=new Nr(5e3,32,32),l=new Gn({color:new st(1,.3,.2),transparent:!0,opacity:.8});this.sunMesh=new Sn(o,l),this.sunMesh.position.set(t,n,s),this.add(this.sunMesh),this.sun=new xp(new st(1,.2,.1),.3,0),this.sun.position.set(t,n,s),this.add(this.sun)}update(e){this.animationTime+=e;const t=Ai.SUN_MIN_INTENSITY+(Ai.SUN_MAX_INTENSITY-Ai.SUN_MIN_INTENSITY)*(Math.sin(this.animationTime*Ai.SUN_PULSE_SPEED)*.5+.5);this.sun.intensity=t;const n=this.sunMesh.material;n.opacity=.6+t*.4}};Ai.SKYBOX_RADIUS_EXPONENT=5.8,Ai.SUN_PULSE_SPEED=2,Ai.SUN_MIN_INTENSITY=.2,Ai.SUN_MAX_INTENSITY=.5;let Hl=Ai;class I3{constructor(){this.renderer=new qL({antialias:!0,canvas:document.getElementById("mainCanvas")}),this.scene=new Lw,this.cameras={aim:new l3(this.renderer.domElement),landedBallTopDown:new u3(this.renderer.domElement),staticManualOrbit:new vn(ht().camera.fov,innerWidth/innerHeight,ht().camera.near,ht().camera.far),autoRotatingOrbit:new vn(ht().camera.fov,innerWidth/innerHeight,ht().camera.near,ht().camera.far),distant:new c3},this.activeCamera=this.cameras.autoRotatingOrbit,this.eGetter=new s3(this.scene),this.clock=new zx,this.level=ht().useRandomLevel?D3():C3(),this.balls=[],this.accumulatedTime=0,this.skybox=null,this.stats=new Va,this.settingsManager=new n3,this.setup={level:()=>{this.level.planets.forEach(n=>{const s=new ES({radius:n.radius,color:n.color,textureUrl:n.textureUrl});s.position.set(n.position.x,n.position.y,n.position.z),this.scene.add(s)});const e=new b3;e.position.set(this.level.initialBallPosition.x,this.level.initialBallPosition.y,this.level.initialBallPosition.z),this.balls.push(e),this.scene.add(e),this.eGetter.getPlanets().forEach(n=>{mx(n,e)&&(e.landedPlanet=n)})},light:()=>{const e=new xp(16777215,5e7);e.position.set(0,100,5e3),this.scene.add(e)},sound:()=>{this.addListeners(()=>Gl.ambient(),!0)},cameraLock:()=>{this.addListeners(()=>this.cameras.aim.setupLockControls(),!1)},cameras:()=>{this.cameras.staticManualOrbit.position.set(400,200,40),this.cameras.staticManualOrbit.lookAt(new G),this.cameras.autoRotatingOrbit.position.set(600,0,0),this.cameras.autoRotatingOrbit.lookAt(new G),this.scene.add(this.cameras.distant),this.scene.add(this.cameras.staticManualOrbit),this.scene.add(this.cameras.landedBallTopDown),this.scene.add(this.cameras.aim)},skybox:()=>{const e=ht();e.skybox.type===Lr.SPHERE?this.skybox=new M3:e.skybox.type===Lr.BOX?this.skybox=new L3:this.skybox=new Hl,this.scene.add(this.skybox)},orbitControls:()=>{new Kx(this.cameras.staticManualOrbit,this.renderer.domElement)},outlinePass:()=>{const e=ht();if(!e.ball.outline.enabled){this.outlinePass=void 0;return}this.outlinePass=new Pr(new je(innerWidth,innerHeight),this.scene,this.activeCamera),this.outlinePass.edgeStrength=e.ball.outline.edgeStrength,this.outlinePass.edgeGlow=e.ball.outline.edgeGlow,this.outlinePass.visibleEdgeColor.set(e.ball.outline.color),this.outlinePass.hiddenEdgeColor.set(e.ball.outline.color),this.outlinePass.selectedObjects=this.balls},composer:()=>{this.composer=new ZL(this.renderer),this.composer.addPass(this.renderPass),this.outlinePass&&this.composer.addPass(this.outlinePass),this.composer.addPass(new QL)},listeners:()=>{ht().simulationMode||addEventListener("keypress",e=>{if(e.key===" "){const t=this.getCurrentBall();if(t.landedPlanet){const n=this.getCurrentBall().position.clone().sub(this.cameras.aim.position.clone()),s=this.eGetter.getPlanets();CS(t,n,s),this.activeCamera=this.cameras.autoRotatingOrbit}}})}},this.renderPass=new JL(this.scene,this.activeCamera),this.setup.outlinePass(),this.setup.composer(),this.setup.orbitControls(),this.setup.level(),this.setup.light(),this.setup.cameras(),this.setup.skybox(),this.setup.listeners(),this.setup.sound(),this.setup.cameraLock(),this.updateVelocityVectorVisibility(),this.updateStatsVisibility(),Il.setVisible(ht().showInfoTab),this.settingsManager.setRestartCallback(()=>{window.location.reload()}),this.settingsManager.setSettingChangeCallback(e=>{this.handleSettingChange(e)}),this.onNewAnimationFrame()}addListeners(e,t){const n=["mousedown","keypress","touchstart"],s=()=>{e(),t&&n.forEach(o=>removeEventListener(o,s))};n.forEach(o=>addEventListener(o,s))}getCurrentBall(){return this.balls[0]}adjustRendererSize(){this.renderer.setSize(innerWidth,innerHeight),this.composer.setSize(innerWidth,innerHeight)}updateCameras(){const e=ht(),t=Date.now()-this.clock.getElapsedTime();this.activeCamera.aspect=innerWidth/innerHeight,this.activeCamera.updateProjectionMatrix(),this.cameras.autoRotatingOrbit.lookAt(this.getCurrentBall().position);const n=2e3,s=64e-6*e.camera.rotationSpeed;this.cameras.autoRotatingOrbit.position.set(Math.sin(t*s)*n,Math.abs(Math.cos(t*s)*n),Math.cos(t*s)*n),this.cameras.distant.update(this.getCurrentBall().position)}updateBalls(e){const t=ht(),n=this.eGetter.getPlanets(),s=1/t.ticksPerSecond;if(this.accumulatedTime+=e,!t.usePreCalculatedFlight)for(;this.accumulatedTime>=s;)this.bounceBallsOffPlanets(n),this.gravitateBalls(s),this.accumulatedTime-=s;this.balls.forEach(o=>o.tick(n))}bounceBallsOffPlanets(e){const t=ht();e.forEach(n=>{this.balls.forEach(s=>{if(mx(n,s)){const o=AS({staticSphere:n,movingSphere:s});t.simulationMode&&console.log("## simulation","hit",s.position.toArray().map(u=>Math.floor(u)).toString());const l=Math.min(1,s.velocity.length()/5);Gl.ballHit(l),s.velocity=o,wS(s,n),s.velocity.length()<.2&&!s.landedPlanet&&this.stopBall(s,n)}})})}gravitateBalls(e){this.eGetter.getPlanets().forEach(n=>{this.balls.forEach(s=>{s.addVelocity(TS({puller:n,pulled:s,timeDelta:e}))})})}stopBall(e,t){e.landedPlanet=t,ht().simulationMode||(this.activeCamera=this.cameras.landedBallTopDown,this.cameras.landedBallTopDown.reset(e),this.cameras.aim.reset(e),setTimeout(()=>{this.activeCamera=this.cameras.aim},1e3))}updateBallTrace(){this.eGetter.getLines().forEach(e=>this.scene.remove(e)),this.balls.forEach(e=>{this.scene.add(e.createTrace())})}applyCameraSettings(){const e=ht();[this.cameras.aim,this.cameras.landedBallTopDown,this.cameras.staticManualOrbit,this.cameras.autoRotatingOrbit].forEach(t=>{t.fov=e.camera.fov,t.near=e.camera.near,t.far=e.camera.far,t.updateProjectionMatrix()}),this.cameras.distant.applySettings()}updateVelocityVectorVisibility(){const e=ht();this.balls.forEach(t=>t.setVelocityVectorVisible(e.ball.showVelocityVector))}updatePlanetBorders(){this.eGetter.getPlanets().forEach(e=>e.refreshBorder())}updateStatsVisibility(){document.body.contains(this.stats.dom)||document.body.appendChild(this.stats.dom),this.stats.dom.style.display=ht().showFPSCounter?"block":"none"}updateSkyboxOpacity(e){this.skybox&&this.skybox.traverse(t=>{const n=t.material;Array.isArray(n)?n.forEach(s=>{s.opacity=e,s.transparent=e<1,s.needsUpdate=!0}):n&&(n.opacity=e,n.transparent=e<1,n.needsUpdate=!0)})}recreateSkybox(){this.skybox&&this.scene.remove(this.skybox),this.setup.skybox(),this.updateSkyboxOpacity(ht().skybox.opacity)}handleSettingChange(e){switch(e){case"ball.showVelocityVector":this.updateVelocityVectorVisibility();break;case"camera.fov":case"camera.near":case"camera.far":case"camera.rotationSpeed":this.applyCameraSettings();break;case"planet.borderThickness":this.updatePlanetBorders();break;case"skybox.useSphereSkybox":this.recreateSkybox();break;case"skybox.opacity":this.updateSkyboxOpacity(ht().skybox.opacity);break;case"showFPSCounter":this.updateStatsVisibility();break;case"showInfoTab":Il.setVisible(ht().showInfoTab);break}}onNewAnimationFrame(){const e=this.clock.getDelta();this.renderPass.camera=this.activeCamera,this.outlinePass&&(this.outlinePass.renderCamera=this.activeCamera),this.composer.render(),this.stats.update(),this.adjustRendererSize(),this.updateCameras(),this.updateBalls(e),this.updateBallTrace(),this.skybox instanceof Hl&&this.skybox.update(e),Il.updateText(this.getCurrentBall()),requestAnimationFrame(this.onNewAnimationFrame.bind(this))}}new I3;
