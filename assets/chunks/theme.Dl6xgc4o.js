const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.CBldbu_T.js","assets/chunks/framework.B9qR_F1m.js"])))=>i.map(i=>d[i]);
import{d as p,c as u,r as c,n as S,o as a,a as G,t as M,b as g,w as f,T as de,e as m,_ as b,u as Ae,i as Ee,f as De,g as W,h as $,j as d,k as i,l as U,m as ie,p as V,q as D,s as X,v as z,x as ve,y as he,z as Fe,A as Oe,F as T,B as N,C as K,D as Q,E as k,G as we,H as A,I as Pe,J as Z,K as j,L as ee,M as je,N as Le,O as re,P as Ve,Q as xe,R as te,S as ze,U as Ge,V as Ue,W as Se,X as Me,Y as Ke,Z as Re,$ as We,a0 as qe,a1 as Je,a2 as be}from"./framework.B9qR_F1m.js";const Ye=p({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(e){return(t,n)=>(a(),u("span",{class:S(["VPBadge",e.type])},[c(t.$slots,"default",{},()=>[G(M(e.text),1)])],2))}}),Xe={key:0,class:"VPBackdrop"},Qe=p({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(e){return(t,n)=>(a(),g(de,{name:"fade"},{default:f(()=>[e.show?(a(),u("div",Xe)):m("",!0)]),_:1}))}}),Ze=b(Qe,[["__scopeId","data-v-54a304ca"]]),P=Ae;function et(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),(o=!0)&&setTimeout(()=>o=!1,t))}}function le(e){return e.startsWith("/")?e:`/${e}`}function fe(e){const{pathname:t,search:n,hash:o,protocol:s}=new URL(e,"http://a.com");if(Ee(e)||e.startsWith("#")||!s.startsWith("http")||!De(t))return e;const{site:r}=P(),l=t.endsWith("/")||t.endsWith(".html")?e:e.replace(/(?:(^\.+)\/)?.*$/,`$1${t.replace(/(\.md)?$/,r.value.cleanUrls?"":".html")}${n}${o}`);return W(l)}function q({correspondingLink:e=!1}={}){const{site:t,localeIndex:n,page:o,theme:s,hash:r}=P(),l=$(()=>{var h,y;return{label:(h=t.value.locales[n.value])==null?void 0:h.label,link:((y=t.value.locales[n.value])==null?void 0:y.link)||(n.value==="root"?"/":`/${n.value}/`)}});return{localeLinks:$(()=>Object.entries(t.value.locales).flatMap(([h,y])=>l.value.label===y.label?[]:{text:y.label,link:tt(y.link||(h==="root"?"/":`/${h}/`),s.value.i18nRouting!==!1&&e,o.value.relativePath.slice(l.value.link.length-1),!t.value.cleanUrls)+r.value})),currentLang:l}}function tt(e,t,n,o){return t?e.replace(/\/$/,"")+le(n.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,o?".html":"")):e}const nt={class:"NotFound"},ot={class:"code"},st={class:"title"},at={class:"quote"},it={class:"action"},rt=["href","aria-label"],lt=p({__name:"NotFound",setup(e){const{theme:t}=P(),{currentLang:n}=q();return(o,s)=>{var r,l,v,h,y;return a(),u("div",nt,[d("p",ot,M(((r=i(t).notFound)==null?void 0:r.code)??"404"),1),d("h1",st,M(((l=i(t).notFound)==null?void 0:l.title)??"PAGE NOT FOUND"),1),s[0]||(s[0]=d("div",{class:"divider"},null,-1)),d("blockquote",at,M(((v=i(t).notFound)==null?void 0:v.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),d("div",it,[d("a",{class:"link",href:i(W)(i(n).link),"aria-label":((h=i(t).notFound)==null?void 0:h.linkLabel)??"go to home"},M(((y=i(t).notFound)==null?void 0:y.linkText)??"Take me home"),9,rt)])])}}}),ct=b(lt,[["__scopeId","data-v-6ff51ddd"]]);function Te(e,t){if(Array.isArray(e))return J(e);if(e==null)return[];t=le(t);const n=Object.keys(e).sort((s,r)=>r.split("/").length-s.split("/").length).find(s=>t.startsWith(le(s))),o=n?e[n]:[];return Array.isArray(o)?J(o):J(o.items,o.base)}function ut(e){const t=[];let n=0;for(const o in e){const s=e[o];if(s.items){n=t.push(s);continue}t[n]||t.push({items:[]}),t[n].items.push(s)}return t}function dt(e){const t=[];function n(o){for(const s of o)s.text&&s.link&&t.push({text:s.text,link:s.link,docFooterText:s.docFooterText}),s.items&&n(s.items)}return n(e),t}function ce(e,t){return Array.isArray(t)?t.some(n=>ce(e,n)):U(e,t.link)?!0:t.items?ce(e,t.items):!1}function J(e,t){return[...e].map(n=>{const o={...n},s=o.base||t;return s&&o.link&&(o.link=s+o.link),o.items&&(o.items=J(o.items,s)),o})}function F(){const{frontmatter:e,page:t,theme:n}=P(),o=ie("(min-width: 960px)"),s=V(!1),r=$(()=>{const C=n.value.sidebar,B=t.value.relativePath;return C?Te(C,B):[]}),l=V(r.value);D(r,(C,B)=>{JSON.stringify(C)!==JSON.stringify(B)&&(l.value=r.value)});const v=$(()=>e.value.sidebar!==!1&&l.value.length>0&&e.value.layout!=="home"),h=$(()=>y?e.value.aside==null?n.value.aside==="left":e.value.aside==="left":!1),y=$(()=>e.value.layout==="home"?!1:e.value.aside!=null?!!e.value.aside:n.value.aside!==!1),L=$(()=>v.value&&o.value),_=$(()=>v.value?ut(l.value):[]);function w(){s.value=!0}function x(){s.value=!1}function I(){s.value?x():w()}return{isOpen:s,sidebar:l,sidebarGroups:_,hasSidebar:v,hasAside:y,leftAside:h,isSidebarEnabled:L,open:w,close:x,toggle:I}}function vt(e,t){let n;X(()=>{n=e.value?document.activeElement:void 0}),z(()=>{window.addEventListener("keyup",o)}),ve(()=>{window.removeEventListener("keyup",o)});function o(s){s.key==="Escape"&&e.value&&(t(),n==null||n.focus())}}function ht(e){const{page:t,hash:n}=P(),o=V(!1),s=$(()=>e.value.collapsed!=null),r=$(()=>!!e.value.link),l=V(!1),v=()=>{l.value=U(t.value.relativePath,e.value.link)};D([t,e,n],v),z(v);const h=$(()=>l.value?!0:e.value.items?ce(t.value.relativePath,e.value.items):!1),y=$(()=>!!(e.value.items&&e.value.items.length));X(()=>{o.value=!!(s.value&&e.value.collapsed)}),he(()=>{(l.value||h.value)&&(o.value=!1)});function L(){s.value&&(o.value=!o.value)}return{collapsed:o,collapsible:s,isLink:r,isActiveLink:l,hasActiveLink:h,hasChildren:y,toggle:L}}function ft(){const{hasSidebar:e}=F(),t=ie("(min-width: 960px)"),n=ie("(min-width: 1280px)");return{isAsideEnabled:$(()=>!n.value&&!t.value?!1:e.value?n.value:t.value)}}const mt=/\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/,ue=[];function Ie(e){return typeof e.outline=="object"&&!Array.isArray(e.outline)&&e.outline.label||e.outlineTitle||"On this page"}function me(e){const t=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const o=Number(n.tagName[1]);return{element:n,title:pt(n),link:"#"+n.id,level:o}});return kt(t,e)}function pt(e){let t="";for(const n of e.childNodes)if(n.nodeType===1){if(mt.test(n.className))continue;t+=n.textContent}else n.nodeType===3&&(t+=n.textContent);return t.trim()}function kt(e,t){if(t===!1)return[];const n=(typeof t=="object"&&!Array.isArray(t)?t.level:t)||2,[o,s]=typeof n=="number"?[n,n]:n==="deep"?[2,6]:n;return bt(e,o,s)}function gt(e,t){const{isAsideEnabled:n}=ft(),o=et(r,100);let s=null;z(()=>{requestAnimationFrame(r),window.addEventListener("scroll",o)}),Fe(()=>{l(location.hash)}),ve(()=>{window.removeEventListener("scroll",o)});function r(){if(!n.value)return;const v=window.scrollY,h=window.innerHeight,y=document.body.offsetHeight,L=Math.abs(v+h-y)<1,_=ue.map(({element:x,link:I})=>({link:I,top:_t(x)})).filter(({top:x})=>!Number.isNaN(x)).sort((x,I)=>x.top-I.top);if(!_.length){l(null);return}if(v<1){l(null);return}if(L){l(_[_.length-1].link);return}let w=null;for(const{link:x,top:I}of _){if(I>v+Oe()+4)break;w=x}l(w)}function l(v){s&&s.classList.remove("active"),v==null?s=null:s=e.value.querySelector(`a[href="${decodeURIComponent(v)}"]`);const h=s;h?(h.classList.add("active"),t.value.style.top=h.offsetTop+39+"px",t.value.style.opacity="1"):(t.value.style.top="33px",t.value.style.opacity="0")}}function _t(e){let t=0;for(;e!==document.body;){if(e===null)return NaN;t+=e.offsetTop,e=e.offsetParent}return t}function bt(e,t,n){ue.length=0;const o=[],s=[];return e.forEach(r=>{const l={...r,children:[]};let v=s[s.length-1];for(;v&&v.level>=l.level;)s.pop(),v=s[s.length-1];if(l.element.classList.contains("ignore-header")||v&&"shouldIgnore"in v){s.push({level:l.level,shouldIgnore:!0});return}l.level>n||l.level<t||(ue.push({element:l.element,link:l.link}),v?v.children.push(l):o.push(l),s.push(l))}),o}const $t=["href","title"],yt=p({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(e){function t({target:n}){const o=n.href.split("#")[1],s=document.getElementById(decodeURIComponent(o));s==null||s.focus({preventScroll:!0})}return(n,o)=>{const s=K("VPDocOutlineItem",!0);return a(),u("ul",{class:S(["VPDocOutlineItem",e.root?"root":"nested"])},[(a(!0),u(T,null,N(e.headers,({children:r,link:l,title:v})=>(a(),u("li",null,[d("a",{class:"outline-link",href:l,onClick:t,title:v},M(v),9,$t),r!=null&&r.length?(a(),g(s,{key:0,headers:r},null,8,["headers"])):m("",!0)]))),256))],2)}}}),Ce=b(yt,[["__scopeId","data-v-53c99d69"]]),wt={class:"content"},Pt={"aria-level":"2",class:"outline-title",id:"doc-outline-aria-label",role:"heading"},Lt=p({__name:"VPDocAsideOutline",setup(e){const{frontmatter:t,theme:n}=P(),o=we([]);Q(()=>{o.value=me(t.value.outline??n.value.outline)});const s=V(),r=V();return gt(s,r),(l,v)=>(a(),u("nav",{"aria-labelledby":"doc-outline-aria-label",class:S(["VPDocAsideOutline",{"has-outline":o.value.length>0}]),ref_key:"container",ref:s},[d("div",wt,[d("div",{class:"outline-marker",ref_key:"marker",ref:r},null,512),d("div",Pt,M(i(Ie)(i(n))),1),k(Ce,{headers:o.value,root:!0},null,8,["headers"])])],2))}}),Vt=b(Lt,[["__scopeId","data-v-f610f197"]]),xt={class:"VPDocAsideCarbonAds"},St=p({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(e){const t=()=>null;return(n,o)=>(a(),u("div",xt,[k(i(t),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),Mt={class:"VPDocAside"},Tt=p({__name:"VPDocAside",setup(e){const{theme:t}=P();return(n,o)=>(a(),u("div",Mt,[c(n.$slots,"aside-top",{},void 0,!0),c(n.$slots,"aside-outline-before",{},void 0,!0),k(Vt),c(n.$slots,"aside-outline-after",{},void 0,!0),o[0]||(o[0]=d("div",{class:"spacer"},null,-1)),c(n.$slots,"aside-ads-before",{},void 0,!0),i(t).carbonAds?(a(),g(St,{key:0,"carbon-ads":i(t).carbonAds},null,8,["carbon-ads"])):m("",!0),c(n.$slots,"aside-ads-after",{},void 0,!0),c(n.$slots,"aside-bottom",{},void 0,!0)]))}}),It=b(Tt,[["__scopeId","data-v-cb998dce"]]);function Ct(){const{theme:e,page:t}=P();return $(()=>{const{text:n="Edit this page",pattern:o=""}=e.value.editLink||{};let s;return typeof o=="function"?s=o(t.value):s=o.replace(/:path/g,t.value.filePath),{url:s,text:n}})}function Nt(){const{page:e,theme:t,frontmatter:n}=P();return $(()=>{var y,L,_,w,x,I,C,B;const o=Te(t.value.sidebar,e.value.relativePath),s=dt(o),r=Bt(s,H=>H.link.replace(/[?#].*$/,"")),l=r.findIndex(H=>U(e.value.relativePath,H.link)),v=((y=t.value.docFooter)==null?void 0:y.prev)===!1&&!n.value.prev||n.value.prev===!1,h=((L=t.value.docFooter)==null?void 0:L.next)===!1&&!n.value.next||n.value.next===!1;return{prev:v?void 0:{text:(typeof n.value.prev=="string"?n.value.prev:typeof n.value.prev=="object"?n.value.prev.text:void 0)??((_=r[l-1])==null?void 0:_.docFooterText)??((w=r[l-1])==null?void 0:w.text),link:(typeof n.value.prev=="object"?n.value.prev.link:void 0)??((x=r[l-1])==null?void 0:x.link)},next:h?void 0:{text:(typeof n.value.next=="string"?n.value.next:typeof n.value.next=="object"?n.value.next.text:void 0)??((I=r[l+1])==null?void 0:I.docFooterText)??((C=r[l+1])==null?void 0:C.text),link:(typeof n.value.next=="object"?n.value.next.link:void 0)??((B=r[l+1])==null?void 0:B.link)}}})}function Bt(e,t){const n=new Set;return e.filter(o=>{const s=t(o);return n.has(s)?!1:n.add(s)})}const E=p({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(e){const t=e,n=$(()=>t.tag??(t.href?"a":"span")),o=$(()=>t.href&&Pe.test(t.href)||t.target==="_blank");return(s,r)=>(a(),g(A(n.value),{class:S(["VPLink",{link:e.href,"vp-external-link-icon":o.value,"no-icon":e.noIcon}]),href:e.href?i(fe)(e.href):void 0,target:e.target??(o.value?"_blank":void 0),rel:e.rel??(o.value?"noreferrer":void 0)},{default:f(()=>[c(s.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ht={class:"VPLastUpdated"},At=["datetime"],Et=p({__name:"VPDocFooterLastUpdated",setup(e){const{theme:t,page:n,lang:o}=P(),s=$(()=>new Date(n.value.lastUpdated)),r=$(()=>s.value.toISOString()),l=V("");return z(()=>{X(()=>{var v,h,y;l.value=new Intl.DateTimeFormat((h=(v=t.value.lastUpdated)==null?void 0:v.formatOptions)!=null&&h.forceLocale?o.value:void 0,((y=t.value.lastUpdated)==null?void 0:y.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(s.value)})}),(v,h)=>{var y;return a(),u("p",Ht,[G(M(((y=i(t).lastUpdated)==null?void 0:y.text)||i(t).lastUpdatedText||"Last updated")+": ",1),d("time",{datetime:r.value},M(l.value),9,At)])}}}),Dt=b(Et,[["__scopeId","data-v-1bb0c8a8"]]),Ft={key:0,class:"VPDocFooter"},Ot={key:0,class:"edit-info"},jt={key:0,class:"edit-link"},zt={key:1,class:"last-updated"},Gt={key:1,class:"prev-next","aria-labelledby":"doc-footer-aria-label"},Ut={class:"pager"},Kt=["innerHTML"],Rt=["innerHTML"],Wt={class:"pager"},qt=["innerHTML"],Jt=["innerHTML"],Yt=p({__name:"VPDocFooter",setup(e){const{theme:t,page:n,frontmatter:o}=P(),s=Ct(),r=Nt(),l=$(()=>t.value.editLink&&o.value.editLink!==!1),v=$(()=>n.value.lastUpdated),h=$(()=>l.value||v.value||r.value.prev||r.value.next);return(y,L)=>{var _,w,x,I;return h.value?(a(),u("footer",Ft,[c(y.$slots,"doc-footer-before",{},void 0,!0),l.value||v.value?(a(),u("div",Ot,[l.value?(a(),u("div",jt,[k(E,{class:"edit-link-button",href:i(s).url,"no-icon":!0},{default:f(()=>[L[0]||(L[0]=d("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),G(" "+M(i(s).text),1)]),_:1},8,["href"])])):m("",!0),v.value?(a(),u("div",zt,[k(Dt)])):m("",!0)])):m("",!0),(_=i(r).prev)!=null&&_.link||(w=i(r).next)!=null&&w.link?(a(),u("nav",Gt,[L[1]||(L[1]=d("span",{class:"visually-hidden",id:"doc-footer-aria-label"},"Pager",-1)),d("div",Ut,[(x=i(r).prev)!=null&&x.link?(a(),g(E,{key:0,class:"pager-link prev",href:i(r).prev.link},{default:f(()=>{var C;return[d("span",{class:"desc",innerHTML:((C=i(t).docFooter)==null?void 0:C.prev)||"Previous page"},null,8,Kt),d("span",{class:"title",innerHTML:i(r).prev.text},null,8,Rt)]}),_:1},8,["href"])):m("",!0)]),d("div",Wt,[(I=i(r).next)!=null&&I.link?(a(),g(E,{key:0,class:"pager-link next",href:i(r).next.link},{default:f(()=>{var C;return[d("span",{class:"desc",innerHTML:((C=i(t).docFooter)==null?void 0:C.next)||"Next page"},null,8,qt),d("span",{class:"title",innerHTML:i(r).next.text},null,8,Jt)]}),_:1},8,["href"])):m("",!0)])])):m("",!0)])):m("",!0)}}}),Xt=b(Yt,[["__scopeId","data-v-1bcd8184"]]),Qt={class:"container"},Zt={class:"aside-container"},en={class:"aside-content"},tn={class:"content"},nn={class:"content-container"},on={class:"main"},sn=p({__name:"VPDoc",setup(e){const{theme:t}=P(),n=Z(),{hasSidebar:o,hasAside:s,leftAside:r}=F(),l=$(()=>n.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(v,h)=>{const y=K("Content");return a(),u("div",{class:S(["VPDoc",{"has-sidebar":i(o),"has-aside":i(s)}])},[c(v.$slots,"doc-top",{},void 0,!0),d("div",Qt,[i(s)?(a(),u("div",{key:0,class:S(["aside",{"left-aside":i(r)}])},[h[0]||(h[0]=d("div",{class:"aside-curtain"},null,-1)),d("div",Zt,[d("div",en,[k(It,null,{"aside-top":f(()=>[c(v.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[c(v.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[c(v.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[c(v.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[c(v.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[c(v.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):m("",!0),d("div",tn,[d("div",nn,[c(v.$slots,"doc-before",{},void 0,!0),d("main",on,[k(y,{class:S(["vp-doc",[l.value,i(t).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),k(Xt,null,{"doc-footer-before":f(()=>[c(v.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),c(v.$slots,"doc-after",{},void 0,!0)])])]),c(v.$slots,"doc-bottom",{},void 0,!0)],2)}}}),an=b(sn,[["__scopeId","data-v-e6f2a212"]]),rn=p({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(e){const t=e,n=$(()=>t.href&&Pe.test(t.href)),o=$(()=>t.tag||(t.href?"a":"button"));return(s,r)=>(a(),g(A(o.value),{class:S(["VPButton",[e.size,e.theme]]),href:e.href?i(fe)(e.href):void 0,target:t.target??(n.value?"_blank":void 0),rel:t.rel??(n.value?"noreferrer":void 0)},{default:f(()=>[G(M(e.text),1)]),_:1},8,["class","href","target","rel"]))}}),ln=b(rn,[["__scopeId","data-v-93dc4167"]]),cn=["src","alt"],un=p({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(e){return(t,n)=>{const o=K("VPImage",!0);return e.image?(a(),u(T,{key:0},[typeof e.image=="string"||"src"in e.image?(a(),u("img",j({key:0,class:"VPImage"},typeof e.image=="string"?t.$attrs:{...e.image,...t.$attrs},{src:i(W)(typeof e.image=="string"?e.image:e.image.src),alt:e.alt??(typeof e.image=="string"?"":e.image.alt||"")}),null,16,cn)):(a(),u(T,{key:1},[k(o,j({class:"dark",image:e.image.dark,alt:e.image.alt},t.$attrs),null,16,["image","alt"]),k(o,j({class:"light",image:e.image.light,alt:e.image.alt},t.$attrs),null,16,["image","alt"])],64))],64)):m("",!0)}}}),Y=b(un,[["__scopeId","data-v-ab19afbb"]]),dn={class:"container"},vn={class:"main"},hn={class:"heading"},fn=["innerHTML"],mn=["innerHTML"],pn=["innerHTML"],kn={key:0,class:"actions"},gn={key:0,class:"image"},_n={class:"image-container"},bn=p({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(e){const t=ee("hero-image-slot-exists");return(n,o)=>(a(),u("div",{class:S(["VPHero",{"has-image":e.image||i(t)}])},[d("div",dn,[d("div",vn,[c(n.$slots,"home-hero-info-before",{},void 0,!0),c(n.$slots,"home-hero-info",{},()=>[d("h1",hn,[e.name?(a(),u("span",{key:0,innerHTML:e.name,class:"name clip"},null,8,fn)):m("",!0),e.text?(a(),u("span",{key:1,innerHTML:e.text,class:"text"},null,8,mn)):m("",!0)]),e.tagline?(a(),u("p",{key:0,innerHTML:e.tagline,class:"tagline"},null,8,pn)):m("",!0)],!0),c(n.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(a(),u("div",kn,[(a(!0),u(T,null,N(e.actions,s=>(a(),u("div",{key:s.link,class:"action"},[k(ln,{tag:"a",size:"medium",theme:s.theme,text:s.text,href:s.link,target:s.target,rel:s.rel},null,8,["theme","text","href","target","rel"])]))),128))])):m("",!0),c(n.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||i(t)?(a(),u("div",gn,[d("div",_n,[o[0]||(o[0]=d("div",{class:"image-bg"},null,-1)),c(n.$slots,"home-hero-image",{},()=>[e.image?(a(),g(Y,{key:0,class:"image-src",image:e.image},null,8,["image"])):m("",!0)],!0)])])):m("",!0)])],2))}}),$n=b(bn,[["__scopeId","data-v-dd8814ff"]]),yn=p({__name:"VPHomeHero",setup(e){const{frontmatter:t}=P();return(n,o)=>i(t).hero?(a(),g($n,{key:0,class:"VPHomeHero",name:i(t).hero.name,text:i(t).hero.text,tagline:i(t).hero.tagline,image:i(t).hero.image,actions:i(t).hero.actions},{"home-hero-info-before":f(()=>[c(n.$slots,"home-hero-info-before")]),"home-hero-info":f(()=>[c(n.$slots,"home-hero-info")]),"home-hero-info-after":f(()=>[c(n.$slots,"home-hero-info-after")]),"home-hero-actions-after":f(()=>[c(n.$slots,"home-hero-actions-after")]),"home-hero-image":f(()=>[c(n.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):m("",!0)}}),wn={class:"box"},Pn={key:0,class:"icon"},Ln=["innerHTML"],Vn=["innerHTML"],xn=["innerHTML"],Sn={key:4,class:"link-text"},Mn={class:"link-text-value"},Tn=p({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(e){return(t,n)=>(a(),g(E,{class:"VPFeature",href:e.link,rel:e.rel,target:e.target,"no-icon":!0,tag:e.link?"a":"div"},{default:f(()=>[d("article",wn,[typeof e.icon=="object"&&e.icon.wrap?(a(),u("div",Pn,[k(Y,{image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])])):typeof e.icon=="object"?(a(),g(Y,{key:1,image:e.icon,alt:e.icon.alt,height:e.icon.height||48,width:e.icon.width||48},null,8,["image","alt","height","width"])):e.icon?(a(),u("div",{key:2,class:"icon",innerHTML:e.icon},null,8,Ln)):m("",!0),d("h2",{class:"title",innerHTML:e.title},null,8,Vn),e.details?(a(),u("p",{key:3,class:"details",innerHTML:e.details},null,8,xn)):m("",!0),e.linkText?(a(),u("div",Sn,[d("p",Mn,[G(M(e.linkText)+" ",1),n[0]||(n[0]=d("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):m("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),In=b(Tn,[["__scopeId","data-v-bd37d1a2"]]),Cn={key:0,class:"VPFeatures"},Nn={class:"container"},Bn={class:"items"},Hn=p({__name:"VPFeatures",props:{features:{}},setup(e){const t=e,n=$(()=>{const o=t.features.length;if(o){if(o===2)return"grid-2";if(o===3)return"grid-3";if(o%3===0)return"grid-6";if(o>3)return"grid-4"}else return});return(o,s)=>e.features?(a(),u("div",Cn,[d("div",Nn,[d("div",Bn,[(a(!0),u(T,null,N(e.features,r=>(a(),u("div",{key:r.title,class:S(["item",[n.value]])},[k(In,{icon:r.icon,title:r.title,details:r.details,link:r.link,"link-text":r.linkText,rel:r.rel,target:r.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):m("",!0)}}),An=b(Hn,[["__scopeId","data-v-b1eea84a"]]),En=p({__name:"VPHomeFeatures",setup(e){const{frontmatter:t}=P();return(n,o)=>i(t).features?(a(),g(An,{key:0,class:"VPHomeFeatures",features:i(t).features},null,8,["features"])):m("",!0)}}),Dn=p({__name:"VPHomeContent",setup(e){const{width:t}=je({initialWidth:0,includeScrollbar:!1});return(n,o)=>(a(),u("div",{class:"vp-doc container",style:Le(i(t)?{"--vp-offset":`calc(50% - ${i(t)/2}px)`}:{})},[c(n.$slots,"default",{},void 0,!0)],4))}}),Fn=b(Dn,[["__scopeId","data-v-c141a4bd"]]),On=p({__name:"VPHome",setup(e){const{frontmatter:t,theme:n}=P();return(o,s)=>{const r=K("Content");return a(),u("div",{class:S(["VPHome",{"external-link-icon-enabled":i(n).externalLinkIcon}])},[c(o.$slots,"home-hero-before",{},void 0,!0),k(yn,null,{"home-hero-info-before":f(()=>[c(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[c(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[c(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[c(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[c(o.$slots,"home-hero-image",{},void 0,!0)]),_:3}),c(o.$slots,"home-hero-after",{},void 0,!0),c(o.$slots,"home-features-before",{},void 0,!0),k(En),c(o.$slots,"home-features-after",{},void 0,!0),i(t).markdownStyles!==!1?(a(),g(Fn,{key:0},{default:f(()=>[k(r)]),_:1})):(a(),g(r,{key:1}))],2)}}}),jn=b(On,[["__scopeId","data-v-e07eaea7"]]),zn={},Gn={class:"VPPage"};function Un(e,t){const n=K("Content");return a(),u("div",Gn,[c(e.$slots,"page-top"),k(n),c(e.$slots,"page-bottom")])}const Kn=b(zn,[["render",Un]]),Rn=p({__name:"VPContent",setup(e){const{page:t,frontmatter:n}=P(),{hasSidebar:o}=F();return(s,r)=>(a(),u("div",{class:S(["VPContent",{"has-sidebar":i(o),"is-home":i(n).layout==="home"}]),id:"VPContent"},[i(t).isNotFound?c(s.$slots,"not-found",{},()=>[k(ct)],!0,0):i(n).layout==="page"?(a(),g(Kn,{key:1},{"page-top":f(()=>[c(s.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[c(s.$slots,"page-bottom",{},void 0,!0)]),_:3})):i(n).layout==="home"?(a(),g(jn,{key:2},{"home-hero-before":f(()=>[c(s.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[c(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[c(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[c(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[c(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[c(s.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[c(s.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[c(s.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[c(s.$slots,"home-features-after",{},void 0,!0)]),_:3})):i(n).layout&&i(n).layout!=="doc"?(a(),g(A(i(n).layout),{key:3})):(a(),g(an,{key:4},{"doc-top":f(()=>[c(s.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[c(s.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":f(()=>[c(s.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[c(s.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[c(s.$slots,"doc-after",{},void 0,!0)]),"aside-top":f(()=>[c(s.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":f(()=>[c(s.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[c(s.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[c(s.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[c(s.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":f(()=>[c(s.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Wn=b(Rn,[["__scopeId","data-v-9a6c75ad"]]),qn={class:"container"},Jn=["innerHTML"],Yn=["innerHTML"],Xn=p({__name:"VPFooter",setup(e){const{theme:t,frontmatter:n}=P(),{hasSidebar:o}=F();return(s,r)=>i(t).footer&&i(n).footer!==!1?(a(),u("footer",{key:0,class:S(["VPFooter",{"has-sidebar":i(o)}])},[d("div",qn,[i(t).footer.message?(a(),u("p",{key:0,class:"message",innerHTML:i(t).footer.message},null,8,Jn)):m("",!0),i(t).footer.copyright?(a(),u("p",{key:1,class:"copyright",innerHTML:i(t).footer.copyright},null,8,Yn)):m("",!0)])],2)):m("",!0)}}),Qn=b(Xn,[["__scopeId","data-v-566314d4"]]);function Zn(){const{theme:e,frontmatter:t}=P(),n=we([]),o=$(()=>n.value.length>0);return Q(()=>{n.value=me(t.value.outline??e.value.outline)}),{headers:n,hasLocalNav:o}}const eo={class:"menu-text"},to={class:"header"},no={class:"outline"},oo=p({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(e){const t=e,{theme:n}=P(),o=V(!1),s=V(0),r=V(),l=V();function v(_){var w;(w=r.value)!=null&&w.contains(_.target)||(o.value=!1)}D(o,_=>{if(_){document.addEventListener("click",v);return}document.removeEventListener("click",v)}),re("Escape",()=>{o.value=!1}),Q(()=>{o.value=!1});function h(){o.value=!o.value,s.value=window.innerHeight+Math.min(window.scrollY-t.navHeight,0)}function y(_){_.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),Ve(()=>{o.value=!1}))}function L(){o.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(_,w)=>(a(),u("div",{class:"VPLocalNavOutlineDropdown",style:Le({"--vp-vh":s.value+"px"}),ref_key:"main",ref:r},[e.headers.length>0?(a(),u("button",{key:0,onClick:h,class:S({open:o.value})},[d("span",eo,M(i(Ie)(i(n))),1),w[0]||(w[0]=d("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(a(),u("button",{key:1,onClick:L},M(i(n).returnToTopLabel||"Return to top"),1)),k(de,{name:"flyout"},{default:f(()=>[o.value?(a(),u("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:y},[d("div",to,[d("a",{class:"top-link",href:"#",onClick:L},M(i(n).returnToTopLabel||"Return to top"),1)]),d("div",no,[k(Ce,{headers:e.headers},null,8,["headers"])])],512)):m("",!0)]),_:1})],4))}}),so=b(oo,[["__scopeId","data-v-6b867909"]]),ao={class:"container"},io=["aria-expanded"],ro={class:"menu-text"},lo=p({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(e){const{theme:t,frontmatter:n}=P(),{hasSidebar:o}=F(),{headers:s}=Zn(),{y:r}=xe(),l=V(0);z(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),Q(()=>{s.value=me(n.value.outline??t.value.outline)});const v=$(()=>s.value.length===0),h=$(()=>v.value&&!o.value),y=$(()=>({VPLocalNav:!0,"has-sidebar":o.value,empty:v.value,fixed:h.value}));return(L,_)=>i(n).layout!=="home"&&(!h.value||i(r)>=l.value)?(a(),u("div",{key:0,class:S(y.value)},[d("div",ao,[i(o)?(a(),u("button",{key:0,class:"menu","aria-expanded":e.open,"aria-controls":"VPSidebarNav",onClick:_[0]||(_[0]=w=>L.$emit("open-menu"))},[_[1]||(_[1]=d("span",{class:"vpi-align-left menu-icon"},null,-1)),d("span",ro,M(i(t).sidebarMenuLabel||"Menu"),1)],8,io)):m("",!0),k(so,{headers:i(s),navHeight:l.value},null,8,["headers","navHeight"])])],2)):m("",!0)}}),co=b(lo,[["__scopeId","data-v-2488c25a"]]);function uo(){const e=V(!1);function t(){e.value=!0,window.addEventListener("resize",s)}function n(){e.value=!1,window.removeEventListener("resize",s)}function o(){e.value?n():t()}function s(){window.outerWidth>=768&&n()}const r=Z();return D(()=>r.path,n),{isScreenOpen:e,openScreen:t,closeScreen:n,toggleScreen:o}}const vo={},ho={class:"VPSwitch",type:"button",role:"switch"},fo={class:"check"},mo={key:0,class:"icon"};function po(e,t){return a(),u("button",ho,[d("span",fo,[e.$slots.default?(a(),u("span",mo,[c(e.$slots,"default",{},void 0,!0)])):m("",!0)])])}const ko=b(vo,[["render",po],["__scopeId","data-v-b4ccac88"]]),go=p({__name:"VPSwitchAppearance",setup(e){const{isDark:t,theme:n}=P(),o=ee("toggle-appearance",()=>{t.value=!t.value}),s=V("");return he(()=>{s.value=t.value?n.value.lightModeSwitchTitle||"Switch to light theme":n.value.darkModeSwitchTitle||"Switch to dark theme"}),(r,l)=>(a(),g(ko,{title:s.value,class:"VPSwitchAppearance","aria-checked":i(t),onClick:i(o)},{default:f(()=>[...l[0]||(l[0]=[d("span",{class:"vpi-sun sun"},null,-1),d("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),pe=b(go,[["__scopeId","data-v-be9742d9"]]),_o={key:0,class:"VPNavBarAppearance"},bo=p({__name:"VPNavBarAppearance",setup(e){const{site:t}=P();return(n,o)=>i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(a(),u("div",_o,[k(pe)])):m("",!0)}}),$o=b(bo,[["__scopeId","data-v-3f90c1a5"]]),ke=V();let Ne=!1,ae=0;function yo(e){const t=V(!1);if(te){!Ne&&wo(),ae++;const n=D(ke,o=>{var s,r,l;o===e.el.value||(s=e.el.value)!=null&&s.contains(o)?(t.value=!0,(r=e.onFocus)==null||r.call(e)):(t.value=!1,(l=e.onBlur)==null||l.call(e))});ve(()=>{n(),ae--,ae||Po()})}return ze(t)}function wo(){document.addEventListener("focusin",Be),Ne=!0,ke.value=document.activeElement}function Po(){document.removeEventListener("focusin",Be)}function Be(){ke.value=document.activeElement}const Lo={class:"VPMenuLink"},Vo=["innerHTML"],xo=p({__name:"VPMenuLink",props:{item:{}},setup(e){const{page:t}=P();return(n,o)=>(a(),u("div",Lo,[k(E,{class:S({active:i(U)(i(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon},{default:f(()=>[d("span",{innerHTML:e.item.text},null,8,Vo)]),_:1},8,["class","href","target","rel","no-icon"])]))}}),ne=b(xo,[["__scopeId","data-v-7eeeb2dc"]]),So={class:"VPMenuGroup"},Mo={key:0,class:"title"},To=p({__name:"VPMenuGroup",props:{text:{},items:{}},setup(e){return(t,n)=>(a(),u("div",So,[e.text?(a(),u("p",Mo,M(e.text),1)):m("",!0),(a(!0),u(T,null,N(e.items,o=>(a(),u(T,null,["link"in o?(a(),g(ne,{key:0,item:o},null,8,["item"])):m("",!0)],64))),256))]))}}),Io=b(To,[["__scopeId","data-v-a6b0397c"]]),Co={class:"VPMenu"},No={key:0,class:"items"},Bo=p({__name:"VPMenu",props:{items:{}},setup(e){return(t,n)=>(a(),u("div",Co,[e.items?(a(),u("div",No,[(a(!0),u(T,null,N(e.items,o=>(a(),u(T,{key:JSON.stringify(o)},["link"in o?(a(),g(ne,{key:0,item:o},null,8,["item"])):"component"in o?(a(),g(A(o.component),j({key:1,ref_for:!0},o.props),null,16)):(a(),g(Io,{key:2,text:o.text,items:o.items},null,8,["text","items"]))],64))),128))])):m("",!0),c(t.$slots,"default",{},void 0,!0)]))}}),Ho=b(Bo,[["__scopeId","data-v-20ed86d6"]]),Ao=["aria-expanded","aria-label"],Eo={key:0,class:"text"},Do=["innerHTML"],Fo={key:1,class:"vpi-more-horizontal icon"},Oo={class:"menu"},jo=p({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(e){const t=V(!1),n=V();yo({el:n,onBlur:o});function o(){t.value=!1}return(s,r)=>(a(),u("div",{class:"VPFlyout",ref_key:"el",ref:n,onMouseenter:r[1]||(r[1]=l=>t.value=!0),onMouseleave:r[2]||(r[2]=l=>t.value=!1)},[d("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":t.value,"aria-label":e.label,onClick:r[0]||(r[0]=l=>t.value=!t.value)},[e.button||e.icon?(a(),u("span",Eo,[e.icon?(a(),u("span",{key:0,class:S([e.icon,"option-icon"])},null,2)):m("",!0),e.button?(a(),u("span",{key:1,innerHTML:e.button},null,8,Do)):m("",!0),r[3]||(r[3]=d("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(a(),u("span",Fo))],8,Ao),d("div",Oo,[k(Ho,{items:e.items},{default:f(()=>[c(s.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),ge=b(jo,[["__scopeId","data-v-bfe7971f"]]),zo=["href","aria-label","innerHTML"],Go=p({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(e){const t=e,n=V();z(async()=>{var r;await Ve();const s=(r=n.value)==null?void 0:r.children[0];s instanceof HTMLElement&&s.className.startsWith("vpi-social-")&&(getComputedStyle(s).maskImage||getComputedStyle(s).webkitMaskImage)==="none"&&s.style.setProperty("--icon",`url('https://api.iconify.design/simple-icons/${t.icon}.svg')`)});const o=$(()=>typeof t.icon=="object"?t.icon.svg:`<span class="vpi-social-${t.icon}"></span>`);return(s,r)=>(a(),u("a",{ref_key:"el",ref:n,class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:o.value},null,8,zo))}}),Uo=b(Go,[["__scopeId","data-v-60a9a2d3"]]),Ko={class:"VPSocialLinks"},Ro=p({__name:"VPSocialLinks",props:{links:{}},setup(e){return(t,n)=>(a(),u("div",Ko,[(a(!0),u(T,null,N(e.links,({link:o,icon:s,ariaLabel:r})=>(a(),g(Uo,{key:o,icon:s,link:o,ariaLabel:r},null,8,["icon","link","ariaLabel"]))),128))]))}}),_e=b(Ro,[["__scopeId","data-v-e71e869c"]]),Wo={key:0,class:"group translations"},qo={class:"trans-title"},Jo={key:1,class:"group"},Yo={class:"item appearance"},Xo={class:"label"},Qo={class:"appearance-action"},Zo={key:2,class:"group"},es={class:"item social-links"},ts=p({__name:"VPNavBarExtra",setup(e){const{site:t,theme:n}=P(),{localeLinks:o,currentLang:s}=q({correspondingLink:!0}),r=$(()=>o.value.length&&s.value.label||t.value.appearance||n.value.socialLinks);return(l,v)=>r.value?(a(),g(ge,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:f(()=>[i(o).length&&i(s).label?(a(),u("div",Wo,[d("p",qo,M(i(s).label),1),(a(!0),u(T,null,N(i(o),h=>(a(),g(ne,{key:h.link,item:h},null,8,["item"]))),128))])):m("",!0),i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(a(),u("div",Jo,[d("div",Yo,[d("p",Xo,M(i(n).darkModeSwitchLabel||"Appearance"),1),d("div",Qo,[k(pe)])])])):m("",!0),i(n).socialLinks?(a(),u("div",Zo,[d("div",es,[k(_e,{class:"social-links-list",links:i(n).socialLinks},null,8,["links"])])])):m("",!0)]),_:1})):m("",!0)}}),ns=b(ts,[["__scopeId","data-v-f953d92f"]]),os=["aria-expanded"],ss=p({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(a(),u("button",{type:"button",class:S(["VPNavBarHamburger",{active:e.active}]),"aria-label":"mobile navigation","aria-expanded":e.active,"aria-controls":"VPNavScreen",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[d("span",{class:"container"},[d("span",{class:"top"}),d("span",{class:"middle"}),d("span",{class:"bottom"})],-1)])],10,os))}}),as=b(ss,[["__scopeId","data-v-6bee1efd"]]),is=["innerHTML"],rs=p({__name:"VPNavBarMenuLink",props:{item:{}},setup(e){const{page:t}=P();return(n,o)=>(a(),g(E,{class:S({VPNavBarMenuLink:!0,active:i(U)(i(t).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,tabindex:"0"},{default:f(()=>[d("span",{innerHTML:e.item.text},null,8,is)]),_:1},8,["class","href","target","rel","no-icon"]))}}),ls=b(rs,[["__scopeId","data-v-815115f5"]]),cs=p({__name:"VPNavBarMenuGroup",props:{item:{}},setup(e){const t=e,{page:n}=P(),o=r=>"component"in r?!1:"link"in r?U(n.value.relativePath,r.link,!!t.item.activeMatch):r.items.some(o),s=$(()=>o(t.item));return(r,l)=>(a(),g(ge,{class:S({VPNavBarMenuGroup:!0,active:i(U)(i(n).relativePath,e.item.activeMatch,!!e.item.activeMatch)||s.value}),button:e.item.text,items:e.item.items},null,8,["class","button","items"]))}}),us={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},ds=p({__name:"VPNavBarMenu",setup(e){const{theme:t}=P();return(n,o)=>i(t).nav?(a(),u("nav",us,[o[0]||(o[0]=d("span",{id:"main-nav-aria-label",class:"visually-hidden"}," Main Navigation ",-1)),(a(!0),u(T,null,N(i(t).nav,s=>(a(),u(T,{key:JSON.stringify(s)},["link"in s?(a(),g(ls,{key:0,item:s},null,8,["item"])):"component"in s?(a(),g(A(s.component),j({key:1,ref_for:!0},s.props),null,16)):(a(),g(cs,{key:2,item:s},null,8,["item"]))],64))),128))])):m("",!0)}}),vs=b(ds,[["__scopeId","data-v-afb2845e"]]);function hs(e){const{localeIndex:t,theme:n}=P();function o(s){var I,C,B;const r=s.split("."),l=(I=n.value.search)==null?void 0:I.options,v=l&&typeof l=="object",h=v&&((B=(C=l.locales)==null?void 0:C[t.value])==null?void 0:B.translations)||null,y=v&&l.translations||null;let L=h,_=y,w=e;const x=r.pop();for(const H of r){let O=null;const R=w==null?void 0:w[H];R&&(O=w=R);const oe=_==null?void 0:_[H];oe&&(O=_=oe);const se=L==null?void 0:L[H];se&&(O=L=se),R||(w=O),oe||(_=O),se||(L=O)}return(L==null?void 0:L[x])??(_==null?void 0:_[x])??(w==null?void 0:w[x])??""}return o}const fs=["aria-label"],ms={class:"DocSearch-Button-Container"},ps={class:"DocSearch-Button-Placeholder"},$e=p({__name:"VPNavBarSearchButton",setup(e){const n=hs({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(o,s)=>(a(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":i(n)("button.buttonAriaLabel")},[d("span",ms,[s[0]||(s[0]=d("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),d("span",ps,M(i(n)("button.buttonText")),1)]),s[1]||(s[1]=d("span",{class:"DocSearch-Button-Keys"},[d("kbd",{class:"DocSearch-Button-Key"}),d("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,fs))}}),ks={class:"VPNavBarSearch"},gs={id:"local-search"},_s={key:1,id:"docsearch"},bs=p({__name:"VPNavBarSearch",setup(e){const t=Ge(()=>Ue(()=>import("./VPLocalSearchBox.CBldbu_T.js"),__vite__mapDeps([0,1]))),n=()=>null,{theme:o}=P(),s=V(!1),r=V(!1);z(()=>{});function l(){s.value||(s.value=!0,setTimeout(v,16))}function v(){const _=new Event("keydown");_.key="k",_.metaKey=!0,window.dispatchEvent(_),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||v()},16)}function h(_){const w=_.target,x=w.tagName;return w.isContentEditable||x==="INPUT"||x==="SELECT"||x==="TEXTAREA"}const y=V(!1);re("k",_=>{(_.ctrlKey||_.metaKey)&&(_.preventDefault(),y.value=!0)}),re("/",_=>{h(_)||(_.preventDefault(),y.value=!0)});const L="local";return(_,w)=>{var x;return a(),u("div",ks,[i(L)==="local"?(a(),u(T,{key:0},[y.value?(a(),g(i(t),{key:0,onClose:w[0]||(w[0]=I=>y.value=!1)})):m("",!0),d("div",gs,[k($e,{onClick:w[1]||(w[1]=I=>y.value=!0)})])],64)):i(L)==="algolia"?(a(),u(T,{key:1},[s.value?(a(),g(i(n),{key:0,algolia:((x=i(o).search)==null?void 0:x.options)??i(o).algolia,onVnodeBeforeMount:w[2]||(w[2]=I=>r.value=!0)},null,8,["algolia"])):m("",!0),r.value?m("",!0):(a(),u("div",_s,[k($e,{onClick:l})]))],64)):m("",!0)])}}}),$s=p({__name:"VPNavBarSocialLinks",setup(e){const{theme:t}=P();return(n,o)=>i(t).socialLinks?(a(),g(_e,{key:0,class:"VPNavBarSocialLinks",links:i(t).socialLinks},null,8,["links"])):m("",!0)}}),ys=b($s,[["__scopeId","data-v-ef6192dc"]]),ws=["href","rel","target"],Ps=["innerHTML"],Ls={key:2},Vs=p({__name:"VPNavBarTitle",setup(e){const{site:t,theme:n}=P(),{hasSidebar:o}=F(),{currentLang:s}=q(),r=$(()=>{var h;return typeof n.value.logoLink=="string"?n.value.logoLink:(h=n.value.logoLink)==null?void 0:h.link}),l=$(()=>{var h;return typeof n.value.logoLink=="string"||(h=n.value.logoLink)==null?void 0:h.rel}),v=$(()=>{var h;return typeof n.value.logoLink=="string"||(h=n.value.logoLink)==null?void 0:h.target});return(h,y)=>(a(),u("div",{class:S(["VPNavBarTitle",{"has-sidebar":i(o)}])},[d("a",{class:"title",href:r.value??i(fe)(i(s).link),rel:l.value,target:v.value},[c(h.$slots,"nav-bar-title-before",{},void 0,!0),i(n).logo?(a(),g(Y,{key:0,class:"logo",image:i(n).logo},null,8,["image"])):m("",!0),i(n).siteTitle?(a(),u("span",{key:1,innerHTML:i(n).siteTitle},null,8,Ps)):i(n).siteTitle===void 0?(a(),u("span",Ls,M(i(t).title),1)):m("",!0),c(h.$slots,"nav-bar-title-after",{},void 0,!0)],8,ws)],2))}}),xs=b(Vs,[["__scopeId","data-v-9f43907a"]]),Ss={class:"items"},Ms={class:"title"},Ts=p({__name:"VPNavBarTranslations",setup(e){const{theme:t}=P(),{localeLinks:n,currentLang:o}=q({correspondingLink:!0});return(s,r)=>i(n).length&&i(o).label?(a(),g(ge,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:i(t).langMenuLabel||"Change language"},{default:f(()=>[d("div",Ss,[d("p",Ms,M(i(o).label),1),(a(!0),u(T,null,N(i(n),l=>(a(),g(ne,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):m("",!0)}}),Is=b(Ts,[["__scopeId","data-v-acee064b"]]),Cs={class:"wrapper"},Ns={class:"container"},Bs={class:"title"},Hs={class:"content"},As={class:"content-body"},Es=p({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(e){const t=e,{y:n}=xe(),{hasSidebar:o}=F(),{frontmatter:s}=P(),r=V({});return he(()=>{r.value={"has-sidebar":o.value,home:s.value.layout==="home",top:n.value===0,"screen-open":t.isScreenOpen}}),(l,v)=>(a(),u("div",{class:S(["VPNavBar",r.value])},[d("div",Cs,[d("div",Ns,[d("div",Bs,[k(xs,null,{"nav-bar-title-before":f(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),d("div",Hs,[d("div",As,[c(l.$slots,"nav-bar-content-before",{},void 0,!0),k(bs,{class:"search"}),k(vs,{class:"menu"}),k(Is,{class:"translations"}),k($o,{class:"appearance"}),k(ys,{class:"social-links"}),k(ns,{class:"extra"}),c(l.$slots,"nav-bar-content-after",{},void 0,!0),k(as,{class:"hamburger",active:e.isScreenOpen,onClick:v[0]||(v[0]=h=>l.$emit("toggle-screen"))},null,8,["active"])])])])]),v[1]||(v[1]=d("div",{class:"divider"},[d("div",{class:"divider-line"})],-1))],2))}}),Ds=b(Es,[["__scopeId","data-v-9fd4d1dd"]]),Fs={key:0,class:"VPNavScreenAppearance"},Os={class:"text"},js=p({__name:"VPNavScreenAppearance",setup(e){const{site:t,theme:n}=P();return(o,s)=>i(t).appearance&&i(t).appearance!=="force-dark"&&i(t).appearance!=="force-auto"?(a(),u("div",Fs,[d("p",Os,M(i(n).darkModeSwitchLabel||"Appearance"),1),k(pe)])):m("",!0)}}),zs=b(js,[["__scopeId","data-v-a3e2920d"]]),Gs=["innerHTML"],Us=p({__name:"VPNavScreenMenuLink",props:{item:{}},setup(e){const t=ee("close-screen");return(n,o)=>(a(),g(E,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:i(t)},{default:f(()=>[d("span",{innerHTML:e.item.text},null,8,Gs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),Ks=b(Us,[["__scopeId","data-v-fa963d97"]]),Rs=["innerHTML"],Ws=p({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(e){const t=ee("close-screen");return(n,o)=>(a(),g(E,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,"no-icon":e.item.noIcon,onClick:i(t)},{default:f(()=>[d("span",{innerHTML:e.item.text},null,8,Rs)]),_:1},8,["href","target","rel","no-icon","onClick"]))}}),He=b(Ws,[["__scopeId","data-v-e04f3e85"]]),qs={class:"VPNavScreenMenuGroupSection"},Js={key:0,class:"title"},Ys=p({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(e){return(t,n)=>(a(),u("div",qs,[e.text?(a(),u("p",Js,M(e.text),1)):m("",!0),(a(!0),u(T,null,N(e.items,o=>(a(),g(He,{key:o.text,item:o},null,8,["item"]))),128))]))}}),Xs=b(Ys,[["__scopeId","data-v-f60dbfa7"]]),Qs=["aria-controls","aria-expanded"],Zs=["innerHTML"],ea=["id"],ta={key:0,class:"item"},na={key:1,class:"item"},oa={key:2,class:"group"},sa=p({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(e){const t=e,n=V(!1),o=$(()=>`NavScreenGroup-${t.text.replace(" ","-").toLowerCase()}`);function s(){n.value=!n.value}return(r,l)=>(a(),u("div",{class:S(["VPNavScreenMenuGroup",{open:n.value}])},[d("button",{class:"button","aria-controls":o.value,"aria-expanded":n.value,onClick:s},[d("span",{class:"button-text",innerHTML:e.text},null,8,Zs),l[0]||(l[0]=d("span",{class:"vpi-plus button-icon"},null,-1))],8,Qs),d("div",{id:o.value,class:"items"},[(a(!0),u(T,null,N(e.items,v=>(a(),u(T,{key:JSON.stringify(v)},["link"in v?(a(),u("div",ta,[k(He,{item:v},null,8,["item"])])):"component"in v?(a(),u("div",na,[(a(),g(A(v.component),j({ref_for:!0},v.props,{"screen-menu":""}),null,16))])):(a(),u("div",oa,[k(Xs,{text:v.text,items:v.items},null,8,["text","items"])]))],64))),128))],8,ea)],2))}}),aa=b(sa,[["__scopeId","data-v-d99bfeec"]]),ia={key:0,class:"VPNavScreenMenu"},ra=p({__name:"VPNavScreenMenu",setup(e){const{theme:t}=P();return(n,o)=>i(t).nav?(a(),u("nav",ia,[(a(!0),u(T,null,N(i(t).nav,s=>(a(),u(T,{key:JSON.stringify(s)},["link"in s?(a(),g(Ks,{key:0,item:s},null,8,["item"])):"component"in s?(a(),g(A(s.component),j({key:1,ref_for:!0},s.props,{"screen-menu":""}),null,16)):(a(),g(aa,{key:2,text:s.text||"",items:s.items},null,8,["text","items"]))],64))),128))])):m("",!0)}}),la=p({__name:"VPNavScreenSocialLinks",setup(e){const{theme:t}=P();return(n,o)=>i(t).socialLinks?(a(),g(_e,{key:0,class:"VPNavScreenSocialLinks",links:i(t).socialLinks},null,8,["links"])):m("",!0)}}),ca={class:"list"},ua=p({__name:"VPNavScreenTranslations",setup(e){const{localeLinks:t,currentLang:n}=q({correspondingLink:!0}),o=V(!1);function s(){o.value=!o.value}return(r,l)=>i(t).length&&i(n).label?(a(),u("div",{key:0,class:S(["VPNavScreenTranslations",{open:o.value}])},[d("button",{class:"title",onClick:s},[l[0]||(l[0]=d("span",{class:"vpi-languages icon lang"},null,-1)),G(" "+M(i(n).label)+" ",1),l[1]||(l[1]=d("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),d("ul",ca,[(a(!0),u(T,null,N(i(t),v=>(a(),u("li",{key:v.link,class:"item"},[k(E,{class:"link",href:v.link},{default:f(()=>[G(M(v.text),1)]),_:2},1032,["href"])]))),128))])],2)):m("",!0)}}),da=b(ua,[["__scopeId","data-v-516e4bc3"]]),va={class:"container"},ha=p({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(e){const t=V(null),n=Se(te?document.body:null);return(o,s)=>(a(),g(de,{name:"fade",onEnter:s[0]||(s[0]=r=>n.value=!0),onAfterLeave:s[1]||(s[1]=r=>n.value=!1)},{default:f(()=>[e.open?(a(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:t,id:"VPNavScreen"},[d("div",va,[c(o.$slots,"nav-screen-content-before",{},void 0,!0),k(ra,{class:"menu"}),k(da,{class:"translations"}),k(zs,{class:"appearance"}),k(la,{class:"social-links"}),c(o.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):m("",!0)]),_:3}))}}),fa=b(ha,[["__scopeId","data-v-2dd6d0c7"]]),ma={key:0,class:"VPNav"},pa=p({__name:"VPNav",setup(e){const{isScreenOpen:t,closeScreen:n,toggleScreen:o}=uo(),{frontmatter:s}=P(),r=$(()=>s.value.navbar!==!1);return Me("close-screen",n),X(()=>{te&&document.documentElement.classList.toggle("hide-nav",!r.value)}),(l,v)=>r.value?(a(),u("header",ma,[k(Ds,{"is-screen-open":i(t),onToggleScreen:i(o)},{"nav-bar-title-before":f(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[c(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[c(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),k(fa,{open:i(t)},{"nav-screen-content-before":f(()=>[c(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[c(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):m("",!0)}}),ka=b(pa,[["__scopeId","data-v-7ad780c2"]]),ga=["role","tabindex"],_a={key:1,class:"items"},ba=p({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(e){const t=e,{collapsed:n,collapsible:o,isLink:s,isActiveLink:r,hasActiveLink:l,hasChildren:v,toggle:h}=ht($(()=>t.item)),y=$(()=>v.value?"section":"div"),L=$(()=>s.value?"a":"div"),_=$(()=>v.value?t.depth+2===7?"p":`h${t.depth+2}`:"p"),w=$(()=>s.value?void 0:"button"),x=$(()=>[[`level-${t.depth}`],{collapsible:o.value},{collapsed:n.value},{"is-link":s.value},{"is-active":r.value},{"has-active":l.value}]);function I(B){"key"in B&&B.key!=="Enter"||!t.item.link&&h()}function C(){t.item.link&&h()}return(B,H)=>{const O=K("VPSidebarItem",!0);return a(),g(A(y.value),{class:S(["VPSidebarItem",x.value])},{default:f(()=>[e.item.text?(a(),u("div",j({key:0,class:"item",role:w.value},Ke(e.item.items?{click:I,keydown:I}:{},!0),{tabindex:e.item.items&&0}),[H[1]||(H[1]=d("div",{class:"indicator"},null,-1)),e.item.link?(a(),g(E,{key:0,tag:L.value,class:"link",href:e.item.link,rel:e.item.rel,target:e.item.target},{default:f(()=>[(a(),g(A(_.value),{class:"text",innerHTML:e.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),g(A(_.value),{key:1,class:"text",innerHTML:e.item.text},null,8,["innerHTML"])),e.item.collapsed!=null&&e.item.items&&e.item.items.length?(a(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:C,onKeydown:Re(C,["enter"]),tabindex:"0"},[...H[0]||(H[0]=[d("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):m("",!0)],16,ga)):m("",!0),e.item.items&&e.item.items.length?(a(),u("div",_a,[e.depth<5?(a(!0),u(T,{key:0},N(e.item.items,R=>(a(),g(O,{key:R.text,item:R,depth:e.depth+1},null,8,["item","depth"]))),128)):m("",!0)])):m("",!0)]),_:1},8,["class"])}}}),$a=b(ba,[["__scopeId","data-v-0009425e"]]),ya=p({__name:"VPSidebarGroup",props:{items:{}},setup(e){const t=V(!0);let n=null;return z(()=>{n=setTimeout(()=>{n=null,t.value=!1},300)}),We(()=>{n!=null&&(clearTimeout(n),n=null)}),(o,s)=>(a(!0),u(T,null,N(e.items,r=>(a(),u("div",{key:r.text,class:S(["group",{"no-transition":t.value}])},[k($a,{item:r,depth:0},null,8,["item"])],2))),128))}}),wa=b(ya,[["__scopeId","data-v-51288d80"]]),Pa={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},La=p({__name:"VPSidebar",props:{open:{type:Boolean}},setup(e){const{sidebarGroups:t,hasSidebar:n}=F(),o=e,s=V(null),r=Se(te?document.body:null);D([o,s],()=>{var v;o.open?(r.value=!0,(v=s.value)==null||v.focus()):r.value=!1},{immediate:!0,flush:"post"});const l=V(0);return D(t,()=>{l.value+=1},{deep:!0}),(v,h)=>i(n)?(a(),u("aside",{key:0,class:S(["VPSidebar",{open:e.open}]),ref_key:"navEl",ref:s,onClick:h[0]||(h[0]=qe(()=>{},["stop"]))},[h[2]||(h[2]=d("div",{class:"curtain"},null,-1)),d("nav",Pa,[h[1]||(h[1]=d("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),c(v.$slots,"sidebar-nav-before",{},void 0,!0),(a(),g(wa,{items:i(t),key:l.value},null,8,["items"])),c(v.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):m("",!0)}}),Va=b(La,[["__scopeId","data-v-42c4c606"]]),xa=p({__name:"VPSkipLink",setup(e){const{theme:t}=P(),n=Z(),o=V();D(()=>n.path,()=>o.value.focus());function s({target:r}){const l=document.getElementById(decodeURIComponent(r.hash).slice(1));if(l){const v=()=>{l.removeAttribute("tabindex"),l.removeEventListener("blur",v)};l.setAttribute("tabindex","-1"),l.addEventListener("blur",v),l.focus(),window.scrollTo(0,0)}}return(r,l)=>(a(),u(T,null,[d("span",{ref_key:"backToTop",ref:o,tabindex:"-1"},null,512),d("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:s},M(i(t).skipToContentLabel||"Skip to content"),1)],64))}}),Sa=b(xa,[["__scopeId","data-v-fcbfc0e0"]]),Ma=p({__name:"Layout",setup(e){const{isOpen:t,open:n,close:o}=F(),s=Z();D(()=>s.path,o),vt(t,o);const{frontmatter:r}=P(),l=Je(),v=$(()=>!!l["home-hero-image"]);return Me("hero-image-slot-exists",v),(h,y)=>{const L=K("Content");return i(r).layout!==!1?(a(),u("div",{key:0,class:S(["Layout",i(r).pageClass])},[c(h.$slots,"layout-top",{},void 0,!0),k(Sa),k(Ze,{class:"backdrop",show:i(t),onClick:i(o)},null,8,["show","onClick"]),k(ka,null,{"nav-bar-title-before":f(()=>[c(h.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":f(()=>[c(h.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":f(()=>[c(h.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":f(()=>[c(h.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":f(()=>[c(h.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":f(()=>[c(h.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),k(co,{open:i(t),onOpenMenu:i(n)},null,8,["open","onOpenMenu"]),k(Va,{open:i(t)},{"sidebar-nav-before":f(()=>[c(h.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":f(()=>[c(h.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),k(Wn,null,{"page-top":f(()=>[c(h.$slots,"page-top",{},void 0,!0)]),"page-bottom":f(()=>[c(h.$slots,"page-bottom",{},void 0,!0)]),"not-found":f(()=>[c(h.$slots,"not-found",{},void 0,!0)]),"home-hero-before":f(()=>[c(h.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":f(()=>[c(h.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":f(()=>[c(h.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":f(()=>[c(h.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":f(()=>[c(h.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":f(()=>[c(h.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":f(()=>[c(h.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":f(()=>[c(h.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":f(()=>[c(h.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":f(()=>[c(h.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":f(()=>[c(h.$slots,"doc-before",{},void 0,!0)]),"doc-after":f(()=>[c(h.$slots,"doc-after",{},void 0,!0)]),"doc-top":f(()=>[c(h.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":f(()=>[c(h.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":f(()=>[c(h.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":f(()=>[c(h.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":f(()=>[c(h.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":f(()=>[c(h.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":f(()=>[c(h.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":f(()=>[c(h.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),k(Qn),c(h.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),g(L,{key:1}))}}}),Ta=b(Ma,[["__scopeId","data-v-d8b57b2d"]]),ye={Layout:Ta,enhanceApp:({app:e})=>{e.component("Badge",Ye)}},Ia=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-layout-dashboard"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="7" height="9" x="3" y="3" rx="1" />
  <rect width="7" height="5" x="14" y="3" rx="1" />
  <rect width="7" height="9" x="14" y="12" rx="1" />
  <rect width="7" height="5" x="3" y="16" rx="1" />
</svg>
`,Ca=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-radar"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
  <path d="M4 6h.01" />
  <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
  <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
  <path d="M12 18h.01" />
  <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
  <circle cx="12" cy="12" r="2" />
  <path d="m13.41 10.59 5.66-5.66" />
</svg>
`,Na=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-plane"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
</svg>
`,Ba=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-timer"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="10" x2="14" y1="2" y2="2" />
  <line x1="12" x2="15" y1="14" y2="11" />
  <circle cx="12" cy="14" r="8" />
</svg>
`,Ha=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-notebook-tabs"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2 6h4" />
  <path d="M2 10h4" />
  <path d="M2 14h4" />
  <path d="M2 18h4" />
  <rect width="16" height="20" x="4" y="2" rx="2" />
  <path d="M15 2v20" />
  <path d="M15 7h5" />
  <path d="M15 12h5" />
  <path d="M15 17h5" />
</svg>
`,Aa=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-clipboard-list"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M12 11h4" />
  <path d="M12 16h4" />
  <path d="M8 11h.01" />
  <path d="M8 16h.01" />
</svg>
`,Ea=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-pen-tool"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18" />
  <path d="M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z" />
  <path d="m3 3 6.586 6.586" />
  <circle cx="11" cy="11" r="2" />
</svg>
`,Da=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-network"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="16" y="16" width="6" height="6" rx="1" />
  <rect x="2" y="16" width="6" height="6" rx="1" />
  <rect x="9" y="2" width="6" height="6" rx="1" />
  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
  <path d="M12 12V8" />
</svg>
`,Fa=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-memory-stick"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 12v-2" />
  <path d="M12 18v-2" />
  <path d="M16 12v-2" />
  <path d="M16 18v-2" />
  <path d="M2 11h1.5" />
  <path d="M20 18v-2" />
  <path d="M20.5 11H22" />
  <path d="M4 18v-2" />
  <path d="M8 12v-2" />
  <path d="M8 18v-2" />
  <rect x="2" y="6" width="20" height="10" rx="2" />
</svg>
`,Oa=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,ja=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-shield-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  <path d="m9 12 2 2 4-4" />
</svg>
`,za=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-compass"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
</svg>
`,Ga=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-crosshair"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <line x1="22" x2="18" y1="12" y2="12" />
  <line x1="6" x2="2" y1="12" y2="12" />
  <line x1="12" x2="12" y1="6" y2="2" />
  <line x1="12" x2="12" y1="22" y2="18" />
</svg>
`,Ua=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-bomb"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="11" cy="13" r="9" />
  <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
  <path d="m22 2-1.5 1.5" />
</svg>
`,Ka=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-file-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M12 18v-6" />
  <path d="m9 15 3 3 3-3" />
</svg>
`,Ra=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-save"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" />
</svg>
`,Wa=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,qa=`<!-- @license lucide-static v1.57.0 - ISC -->
<svg
  class="lucide lucide-pencil-ruler"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
  <path d="m8 6 2-2" />
  <path d="m18 16 2-2" />
  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`,Ja={"layout-dashboard":Ia,radar:Ca,plane:Na,timer:Ba,"notebook-tabs":Ha,"clipboard-list":Aa,"pen-tool":Ea,network:Da,"memory-stick":Fa,users:Oa,"shield-check":ja,compass:za,crosshair:Ga,bomb:Ua,"file-down":Ka,save:Ra,download:Wa,"pencil-ruler":qa},Ya=["innerHTML"],Xa=p({__name:"Icon",props:{name:{}},setup(e){const t=e,n=$(()=>(Ja[t.name]??"").replace(/<!--[\s\S]*?-->\s*/,""));return(o,s)=>(a(),u("span",{class:"icon","aria-hidden":"true",innerHTML:n.value},null,8,Ya))}}),Qa={class:"legal-links"},Za=["href"],ei=["href"],ti=["href"],ni=p({__name:"LegalLinks",setup(e){return(t,n)=>(a(),u("div",Qa,[d("a",{href:i(W)("/rechtliches/impressum")},"Impressum",8,Za),n[0]||(n[0]=d("span",null,"·",-1)),d("a",{href:i(W)("/rechtliches/datenschutz")},"Datenschutz",8,ei),n[1]||(n[1]=d("span",null,"·",-1)),d("a",{href:i(W)("/rechtliches/lizenzen")},"Lizenzen",8,ti)]))}}),si={extends:ye,Layout:()=>be(ye.Layout,null,{"sidebar-nav-after":()=>be(ni)}),enhanceApp({app:e}){e.component("Icon",Xa)}};export{si as R,hs as c,P as u};
