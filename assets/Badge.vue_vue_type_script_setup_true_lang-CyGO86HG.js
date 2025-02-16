import{d as I,e as x,x as c,o as s,y as S,p as g,z as h,i as n,P,a0 as F,a1 as T,as as E,aj as R,au as j,t as w,a as k,c as _,Y as f,aw as l,F as D,_ as N,$ as V,aN as B,aO as O,aH as H}from"./index-D_FrGYAD.js";const L=I({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(u){const a=u,d=["horizontal","vertical"];function v(r){return d.includes(r)}const i=x(()=>v(a.orientation)?a.orientation:"horizontal"),e=x(()=>i.value==="vertical"?a.orientation:void 0),t=x(()=>a.decorative?{role:"none"}:{"aria-orientation":e.value,role:"separator"});return(r,z)=>(s(),c(n(P),h({as:r.as,"as-child":r.asChild,"data-orientation":i.value},t.value),{default:S(()=>[g(r.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),U=I({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(u){const a=u;return(d,v)=>(s(),c(L,F(T(a)),{default:S(()=>[g(d.$slots,"default")]),_:3},16))}}),Y={slots:{root:"flex items-center align-center text-center",border:"",container:"font-medium text-[var(--ui-text)] flex",icon:"shrink-0 size-5",avatar:"shrink-0",avatarSize:"2xs",label:"text-sm"},variants:{color:{primary:{border:"border-[var(--ui-primary)]"},secondary:{border:"border-[var(--ui-secondary)]"},success:{border:"border-[var(--ui-success)]"},info:{border:"border-[var(--ui-info)]"},warning:{border:"border-[var(--ui-warning)]"},error:{border:"border-[var(--ui-error)]"},neutral:{border:"border-[var(--ui-border)]"}},orientation:{horizontal:{root:"w-full flex-row",border:"w-full",container:"mx-3 whitespace-nowrap"},vertical:{root:"h-full flex-col",border:"h-full",container:"my-2"}},size:{xs:"",sm:"",md:"",lg:"",xl:""},type:{solid:{border:"border-solid"},dashed:{border:"border-dashed"},dotted:{border:"border-dotted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{border:"border-t"}},{orientation:"horizontal",size:"sm",class:{border:"border-t-[2px]"}},{orientation:"horizontal",size:"md",class:{border:"border-t-[3px]"}},{orientation:"horizontal",size:"lg",class:{border:"border-t-[4px]"}},{orientation:"horizontal",size:"xl",class:{border:"border-t-[5px]"}},{orientation:"vertical",size:"xs",class:{border:"border-s"}},{orientation:"vertical",size:"sm",class:{border:"border-s-[2px]"}},{orientation:"vertical",size:"md",class:{border:"border-s-[3px]"}},{orientation:"vertical",size:"lg",class:{border:"border-s-[4px]"}},{orientation:"vertical",size:"xl",class:{border:"border-s-[5px]"}}],defaultVariants:{color:"neutral",size:"xs",type:"solid"}},q=N;var $;const G=w({extend:w(Y),...(($=q.ui)==null?void 0:$.separator)||{}}),W=I({__name:"Separator",props:{as:{},label:{},icon:{},avatar:{},color:{},size:{},type:{},orientation:{default:"horizontal"},class:{},ui:{},decorative:{type:Boolean}},setup(u){const a=u,d=E(),v=R(j(a,"as","decorative","orientation")),i=x(()=>G({color:a.color,orientation:a.orientation,size:a.size,type:a.type}));return(e,t)=>{var r;return s(),c(n(U),h(n(v),{class:i.value.root({class:[a.class,(r=a.ui)==null?void 0:r.root]})}),{default:S(()=>{var z,y,b;return[k("div",{class:l(i.value.border({class:(z=a.ui)==null?void 0:z.border}))},null,2),e.label||e.icon||e.avatar||d.default?(s(),_(D,{key:0},[k("div",{class:l(i.value.container({class:(y=a.ui)==null?void 0:y.container}))},[g(e.$slots,"default",{},()=>{var o,p,m,A;return[e.label?(s(),_("span",{key:0,class:l(i.value.label({class:(o=a.ui)==null?void 0:o.label}))},V(e.label),3)):e.icon?(s(),c(B,{key:1,name:e.icon,class:l(i.value.icon({class:(p=a.ui)==null?void 0:p.icon}))},null,8,["name","class"])):e.avatar?(s(),c(O,h({key:2,size:((m=a.ui)==null?void 0:m.avatarSize)||i.value.avatarSize()},e.avatar,{class:i.value.avatar({class:(A=a.ui)==null?void 0:A.avatar})}),null,16,["size","class"])):f("",!0)]})],2),k("div",{class:l(i.value.border({class:(b=a.ui)==null?void 0:b.border}))},null,2)],64)):f("",!0)]}),_:3},16,["class"])}}}),J={slots:{base:"font-medium inline-flex items-center",label:"truncate",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",trailingIcon:"shrink-0"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{solid:"",outline:"",soft:"",subtle:""},size:{xs:{base:"text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",leadingIcon:"size-3",leadingAvatarSize:"3xs",trailingIcon:"size-3"},sm:{base:"text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",leadingIcon:"size-3",leadingAvatarSize:"3xs",trailingIcon:"size-3"},md:{base:"text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-4",leadingAvatarSize:"3xs",trailingIcon:"size-4"},lg:{base:"text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-5",leadingAvatarSize:"2xs",trailingIcon:"size-5"},xl:{base:"text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",leadingIcon:"size-6",leadingAvatarSize:"2xs",trailingIcon:"size-6"}}},compoundVariants:[{color:"primary",variant:"solid",class:"bg-[var(--ui-primary)] text-[var(--ui-bg)]"},{color:"secondary",variant:"solid",class:"bg-[var(--ui-secondary)] text-[var(--ui-bg)]"},{color:"success",variant:"solid",class:"bg-[var(--ui-success)] text-[var(--ui-bg)]"},{color:"info",variant:"solid",class:"bg-[var(--ui-info)] text-[var(--ui-bg)]"},{color:"warning",variant:"solid",class:"bg-[var(--ui-warning)] text-[var(--ui-bg)]"},{color:"error",variant:"solid",class:"bg-[var(--ui-error)] text-[var(--ui-bg)]"},{color:"primary",variant:"outline",class:"text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/50"},{color:"secondary",variant:"outline",class:"text-[var(--ui-secondary)] ring ring-inset ring-[var(--ui-secondary)]/50"},{color:"success",variant:"outline",class:"text-[var(--ui-success)] ring ring-inset ring-[var(--ui-success)]/50"},{color:"info",variant:"outline",class:"text-[var(--ui-info)] ring ring-inset ring-[var(--ui-info)]/50"},{color:"warning",variant:"outline",class:"text-[var(--ui-warning)] ring ring-inset ring-[var(--ui-warning)]/50"},{color:"error",variant:"outline",class:"text-[var(--ui-error)] ring ring-inset ring-[var(--ui-error)]/50"},{color:"primary",variant:"soft",class:"bg-[var(--ui-primary)]/10 text-[var(--ui-primary)]"},{color:"secondary",variant:"soft",class:"bg-[var(--ui-secondary)]/10 text-[var(--ui-secondary)]"},{color:"success",variant:"soft",class:"bg-[var(--ui-success)]/10 text-[var(--ui-success)]"},{color:"info",variant:"soft",class:"bg-[var(--ui-info)]/10 text-[var(--ui-info)]"},{color:"warning",variant:"soft",class:"bg-[var(--ui-warning)]/10 text-[var(--ui-warning)]"},{color:"error",variant:"soft",class:"bg-[var(--ui-error)]/10 text-[var(--ui-error)]"},{color:"primary",variant:"subtle",class:"bg-[var(--ui-primary)]/10 text-[var(--ui-primary)] ring ring-inset ring-[var(--ui-primary)]/25"},{color:"secondary",variant:"subtle",class:"bg-[var(--ui-secondary)]/10 text-[var(--ui-secondary)] ring ring-inset ring-[var(--ui-secondary)]/25"},{color:"success",variant:"subtle",class:"bg-[var(--ui-success)]/10 text-[var(--ui-success)] ring ring-inset ring-[var(--ui-success)]/25"},{color:"info",variant:"subtle",class:"bg-[var(--ui-info)]/10 text-[var(--ui-info)] ring ring-inset ring-[var(--ui-info)]/25"},{color:"warning",variant:"subtle",class:"bg-[var(--ui-warning)]/10 text-[var(--ui-warning)] ring ring-inset ring-[var(--ui-warning)]/25"},{color:"error",variant:"subtle",class:"bg-[var(--ui-error)]/10 text-[var(--ui-error)] ring ring-inset ring-[var(--ui-error)]/25"},{color:"neutral",variant:"solid",class:"text-[var(--ui-bg)] bg-[var(--ui-bg-inverted)]"},{color:"neutral",variant:"outline",class:"ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg)]"},{color:"neutral",variant:"soft",class:"text-[var(--ui-text)] bg-[var(--ui-bg-elevated)]"},{color:"neutral",variant:"subtle",class:"ring ring-inset ring-[var(--ui-border-accented)] text-[var(--ui-text)] bg-[var(--ui-bg-elevated)]"}],defaultVariants:{color:"primary",variant:"solid",size:"md"}},K=N;var C;const M=w({extend:w(J),...((C=K.ui)==null?void 0:C.badge)||{}}),X=I({__name:"Badge",props:{as:{default:"span"},label:{},color:{},variant:{},size:{},class:{},ui:{},icon:{},avatar:{},leading:{type:Boolean},leadingIcon:{},trailing:{type:Boolean},trailingIcon:{}},setup(u){const a=u,{isLeading:d,isTrailing:v,leadingIconName:i,trailingIconName:e}=H(a),t=x(()=>M({color:a.color,variant:a.variant,size:a.size}));return(r,z)=>{var b;const y=O;return s(),c(n(P),{as:r.as,class:l(t.value.base({class:[a.class,(b=a.ui)==null?void 0:b.base]}))},{default:S(()=>[g(r.$slots,"leading",{},()=>{var o,p,m;return[n(d)&&n(i)?(s(),c(B,{key:0,name:n(i),class:l(t.value.leadingIcon({class:(o=a.ui)==null?void 0:o.leadingIcon}))},null,8,["name","class"])):r.avatar?(s(),c(y,h({key:1,size:((p=a.ui)==null?void 0:p.leadingAvatarSize)||t.value.leadingAvatarSize()},r.avatar,{class:t.value.leadingAvatar({class:(m=a.ui)==null?void 0:m.leadingAvatar})}),null,16,["size","class"])):f("",!0)]}),g(r.$slots,"default",{},()=>{var o;return[r.label?(s(),_("span",{key:0,class:l(t.value.label({class:(o=a.ui)==null?void 0:o.label}))},V(r.label),3)):f("",!0)]}),g(r.$slots,"trailing",{},()=>{var o;return[n(v)&&n(e)?(s(),c(B,{key:0,name:n(e),class:l(t.value.trailingIcon({class:(o=a.ui)==null?void 0:o.trailingIcon}))},null,8,["name","class"])):f("",!0)]})]),_:3},8,["as","class"])}}});export{W as _,X as a};
