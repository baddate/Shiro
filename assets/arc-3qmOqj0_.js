import{w as ln,c as K}from"./path-aUcfwwLI.js";import{H as rn,I as Q,J as I,K as an,L as y,M as on,N as B,O as _,P as un,Q as t,R as sn,S as tn,T as fn}from"./mermaid.core-IeqpUcYM.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,q,O,v,R,L,r){var D=q-l,i=O-h,n=L-v,m=r-R,a=m*D-n*i;if(!(a*a<y))return a=(n*(h-R)-m*(l-v))/a,[l+a*D,h+a*i]}function W(l,h,q,O,v,R,L){var r=l-q,D=h-O,i=(L?R:-R)/B(r*r+D*D),n=i*D,m=-i*r,a=l+n,s=h+m,f=q+n,c=O+m,M=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,A=p*p+g*g,T=v-R,P=a*c-f*s,E=(g<0?-1:1)*B(fn(0,T*T*A-P*P)),H=(P*g-p*E)/A,J=(-P*p-g*E)/A,w=(P*g+p*E)/A,d=(-P*p+g*E)/A,x=H-M,e=J-o,u=w-M,N=d-o;return x*x+e*e>u*u+N*N&&(H=w,J=d),{cx:H,cy:J,x01:-n,y01:-m,x11:H*(v/T-1),y11:J*(v/T-1)}}function vn(){var l=cn,h=yn,q=K(0),O=null,v=gn,R=mn,L=pn,r=null,D=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=R.apply(this,arguments)-an,M=un(c-f),o=c>f;if(r||(r=n=D()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(M>on-y)r.moveTo(s*Q(f),s*I(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*Q(c),a*I(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,A=f,T=c,P=M,E=M,H=L.apply(this,arguments)/2,J=H>y&&(O?+O.apply(this,arguments):B(a*a+s*s)),w=_(un(s-a)/2,+q.apply(this,arguments)),d=w,x=w,e,u;if(J>y){var N=sn(J/a*I(H)),C=sn(J/s*I(H));(P-=N*2)>y?(N*=o?1:-1,A+=N,T-=N):(P=0,A=T=(f+c)/2),(E-=C*2)>y?(C*=o?1:-1,p+=C,g-=C):(E=0,p=g=(f+c)/2)}var j=s*Q(p),z=s*I(p),F=a*Q(T),G=a*I(T);if(w>y){var U=s*Q(g),V=s*I(g),X=a*Q(A),Y=a*I(A),S;if(M<rn)if(S=dn(j,z,X,Y,U,V,F,G)){var Z=j-S[0],$=z-S[1],k=U-S[0],b=V-S[1],nn=1/I(tn((Z*k+$*b)/(B(Z*Z+$*$)*B(k*k+b*b)))/2),en=B(S[0]*S[0]+S[1]*S[1]);d=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}E>y?x>y?(e=W(X,Y,j,z,s,x,o),u=W(U,V,F,G,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(j,z),r.arc(0,0,s,p,g,!o)):r.moveTo(j,z),!(a>y)||!(P>y)?r.lineTo(F,G):d>y?(e=W(F,G,U,V,a,-d,o),u=W(j,z,X,Y,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,T,A,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-rn/2;return[Q(m)*n,I(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:K(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:K(+n),i):h},i.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:K(+n),i):q},i.padRadius=function(n){return arguments.length?(O=n==null?null:typeof n=="function"?n:K(+n),i):O},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:K(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:K(+n),i):R},i.padAngle=function(n){return arguments.length?(L=typeof n=="function"?n:K(+n),i):L},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
