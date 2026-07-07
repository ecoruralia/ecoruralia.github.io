"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88611],{15734:(e,t,i)=>{i.d(t,{a:()=>p});var a=i(2329),r=i(5963),o=i(53982),n=i.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)(function(e,t){var i=e.color,a=e.size,o=void 0===a?24:a,n=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["color","size"]);return r.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.createElement("polyline",{points:"12 5 19 12 12 19"}))});l.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},l.displayName="ArrowRight";var d=i(59715),c=(0,r.forwardRef)((e,t)=>{let{color:i="currentColor",size:r=32}=e,o=(0,a.c)(e,["color","size"]);return(0,d.jsx)(l,(0,a.a)({ref:t,color:i,size:r},o))});c.displayName="@do/kraken/icons/ArrowRight (feather)";var p=c},18195:(e,t,i)=>{i.d(t,{a:()=>p});var a=i(2329),r=i(5963),o=i(53982),n=i.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)(function(e,t){var i=e.color,a=e.size,o=void 0===a?24:a,n=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["color","size"]);return r.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.createElement("circle",{cx:"12",cy:"12",r:"1"}),r.createElement("circle",{cx:"19",cy:"12",r:"1"}),r.createElement("circle",{cx:"5",cy:"12",r:"1"}))});l.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},l.displayName="MoreHorizontal";var d=i(59715),c=(0,r.forwardRef)((e,t)=>{let{color:i="currentColor",size:r=32}=e,o=(0,a.c)(e,["color","size"]);return(0,d.jsx)(l,(0,a.a)({ref:t,color:i,size:r},o))});c.displayName="@do/kraken/icons/MoreHorizontal (feather)";var p=c},19657:(e,t,i)=>{i.d(t,{a:()=>d});var a=i(22198),r=i(2329),o=i(5963),n=i(59715),s=a.a.span.withConfig({displayName:"Tagstyles",componentId:"sc-ohbvtg-0"})`align-items:center;background-color:${({theme:e})=>e.semantic.tagsPrimary};border-radius:${({theme:e})=>e.borders.rounded.md};color:${({theme:e})=>e.semantic.textDefault};display:inline-flex;font-size:${({theme:e})=>e.font.sm.base.size};font-weight:${({theme:e})=>e.fontWeight[500]};gap:${({theme:e})=>e.spacing.size0p5};line-height:${({theme:e})=>e.font.sm.base.lineHeight};padding:${({theme:e})=>`${e.spacing.size0p5} ${e.spacing.size1}`};transition:background-color ${({theme:e})=>e.transitions.short},color ${({theme:e})=>e.transitions.short};${({$isInteractive:e})=>e&&`
    cursor: pointer;
  `};svg{flex-shrink:0;}&:focus-visible{outline-offset:2px;outline-style:solid;outline-width:2px;}${({$variant:e,theme:t})=>"product-card-tag"===e&&`
      background-color: ${t.semantic.tagsProductBlue};
      border-radius: ${t.borders.rounded.full};
      height: max-content;
      justify-content: center;
      padding: ${t.spacing.size0p75} ${t.spacing.size2};
  `} ${({$variant:e,$isInteractive:t,theme:i})=>"default"===e&&t&&`
    &:hover {
      background-color: ${i.semantic.tagsHover};
      color: ${i.semantic.textAlwaysDark};
    }

    &:focus-visible {
      background-color: ${i.semantic.tagsHover};
      color: ${i.semantic.textAlwaysDark};
      outline-color: ${i.semantic.tagsHover};
    }
  `} ${({$variant:e,$isInteractive:t,theme:i})=>"close"===e&&t&&`
    &:hover {
      svg {
        background-color: ${i.semantic.tagsProductDarkGray};
        color: ${i.semantic.textAlwaysDark};
      }
    }

    &:focus-visible {
      outline-color: ${i.semantic.tagsHover};

      svg {
        background-color: ${i.semantic.tagsProductDarkGray};
        color: ${i.semantic.textAlwaysDark};
      }
    }

    svg {
      border-radius: ${i.borders.rounded.full};
      transition: background-color ${i.transitions.short}, color ${i.transitions.short};
    }
  `}`,l=(0,o.forwardRef)((e,t)=>{var{as:i,children:a,variant:o="default"}=e,l=(0,r.c)(e,["as","children","variant"]);return(0,n.jsx)(s,(0,r.b)((0,r.a)({as:i||"span",ref:t,$variant:o,$isInteractive:(null==l?void 0:l.onClick)||(null==l?void 0:l.href)},l),{children:a}))});l.displayName="@do/kraken/Tag";var d=l},48928:(e,t,i)=>{i.d(t,{a:()=>b});var a=i(76568),r=i(22198),o=i(57565),n=r.a.div.withConfig({displayName:"TabMediaCenterstyles__StyledMediaCenterTabs",componentId:"sc-1kvo769-0"})`display:flex;flex-direction:column;gap:0;${(0,o.g)("xl")}{gap:${({theme:e})=>e.spacing.size3};}`,s=r.a.div.withConfig({displayName:"TabMediaCenterstyles__StyledMediaCenter",componentId:"sc-1kvo769-1"})`display:flex;flex-direction:column;gap:${({theme:e})=>e.spacing.size8};${(0,o.g)("xl")}{flex-direction:${({$layoutDirection:e})=>"horizontal"===e?"row":"column"};${({$layoutDirection:e,$tabsColumnWidth:t})=>"horizontal"===e&&t&&`
        > ${n} {
          flex: 0 0 ${t};
          min-width: ${t};
          max-width: ${t};
        }

        > *:not(${n}) {
          flex: 1 1 0;
          min-width: 0;
        }
      `}}`,l=r.a.div.withConfig({displayName:"TabMediaCenterstyles__StyledButtonContainer",componentId:"sc-1kvo769-2"})`align-items:center;align-self:center;background-color:${({theme:e})=>e.semantic.tabsContainer};border-radius:${({theme:e})=>e.borders.rounded.full};display:flex;flex-direction:row;gap:${({theme:e})=>e.spacing.size1};justify-content:flex-start;max-width:100%;min-width:0;overflow:auto;padding:${({theme:e})=>e.spacing.size1};scrollbar-width:none;width:fit-content;&::-webkit-scrollbar{display:none;}${(0,o.g)("xl")}{align-items:flex-start;${({$layoutDirection:e,theme:t})=>"horizontal"===e&&`
        background-color: transparent;
        border-radius: 0;
        flex-direction: column;
        gap: ${t.spacing.size2};
      `};}`,d=(r.a.div.withConfig({displayName:"TabMediaCenterstyles__StyledButtonWrapper",componentId:"sc-1kvo769-3"})`align-items:center;display:flex;> svg{flex-shrink:0;}${({$iconTrackWidth:e})=>e&&`
      flex-shrink: 0;

      > *:first-child {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex: 0 0 ${e};
        justify-content: center;
        max-width: ${e};
        min-width: ${e};
        width: ${e};
      }
    `}`,r.a.button.withConfig({displayName:"TabMediaCenterstyles__StyledFilterButton",componentId:"sc-1kvo769-4"})`border-radius:${({theme:e})=>e.borders.rounded.xl5};color:${({theme:e})=>e.semantic.textDefault};display:block;font-size:${({theme:e})=>e.font.base.base.size};font-weight:${({theme:e})=>e.fontWeight[400]};line-height:${({theme:e})=>e.font.base.base.lineHeight};padding:${({theme:e})=>`${e.spacing.size1} ${e.spacing.size2}`};-webkit-tap-highlight-color:transparent;transition:background-color ${({theme:e})=>e.transitions.short},color ${({theme:e})=>e.transitions.short};white-space:nowrap;${({$active:e,theme:t})=>e&&`
    background-color: ${t.semantic.tabsSelected};
    color: ${t.semantic.tabsTextSelected};
    font-weight: ${t.fontWeight[500]};
  }
  `} &:hover{background-color:${({theme:e})=>e.semantic.tabsHover};color:${({theme:e})=>e.semantic.textPrimary};${({$active:e,theme:t})=>e&&`
        background-color: ${t.semantic.tabsSelected};
        color: ${t.semantic.tabsTextSelected};
      `}}`);(0,r.a)(a.a).withConfig({displayName:"TabMediaCenterstyles__StyledGridItem",componentId:"sc-1kvo769-5"})`grid-area:1 / 1;opacity:${({$isActive:e})=>+!!e};visibility:${({$isActive:e})=>e?"visible":"hidden"};`;var c=i(45951),p=i(5963),g=i(92065),h=i(2329),m=i(59715),u=(0,r.a)(c.a).withConfig({displayName:"Tabsstyles__StyledDivider",componentId:"sc-dxgfsg-0"})`display:none;height:1px;${(0,o.g)("lg")}{display:block;}`,f=(0,p.forwardRef)((e,t)=>{var{tabs:i}=e,a=(0,h.c)(e,["tabs"]);let{handleTabSelect:r,selectedTab:o,tabsContainerRef:c}=((e=0)=>{let[t,i]=(0,p.useState)(e),a=(0,p.useRef)(null),r=e=>{var t;let i=null==(t=a.current)?void 0:t.children.item(e);i instanceof HTMLElement&&i.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})};return{handleTabSelect:e=>{e===t||(0,g.flushSync)(()=>{i(e)}),r(e)},selectedTab:t,tabsContainerRef:a}})();return(0,m.jsxs)(s,(0,h.b)((0,h.a)({ref:t,$layoutDirection:"vertical"},a),{children:[(0,m.jsxs)(n,{children:[(0,m.jsx)(l,{ref:c,$layoutDirection:"vertical",children:i.map((e,t)=>(0,m.jsx)(d,{$active:o===t,onClick:()=>r(t),children:e.title},e.title))}),(0,m.jsx)(u,{dasharray:"0"})]}),i[o].children]}))});f.displayName="@do/kraken/Tabs";var b=f},57891:(e,t,i)=>{i.d(t,{a:()=>m});var a=i(45745),r=i(82074),o=i(22198),n=i(2329),s=i(5963),l=i(59715),d=o.a.nav.withConfig({displayName:"TabbedSideNavigationstyles__StyledTabbedSideNavigation",componentId:"sc-og8kyu-0"})`align-items:flex-start;display:flex;flex-direction:column;gap:${({theme:e})=>e.spacing.size2};`,c=o.a.ol.withConfig({displayName:"TabbedSideNavigationstyles__StyledTabbedSideNavigationContainer",componentId:"sc-og8kyu-1"})`display:flex;flex-direction:column;gap:${({$use:e,theme:t})=>"table-of-contents"===e?t.spacing.size2:t.spacing.size0p25};list-style-type:none;margin:0;padding:0;width:100%;`,p=o.a.div.withConfig({displayName:"TabbedSideNavigationstyles__StyledTabbedSideNavigationIcon",componentId:"sc-og8kyu-2"})`width:${({theme:e})=>e.icons.size2};svg{height:auto;width:100%;}`,g=o.a.li.withConfig({displayName:"TabbedSideNavigationstyles__StyledTabbedSideNavigationItem",componentId:"sc-og8kyu-3"})`position:relative;${({$use:e,theme:t})=>"table-of-contents"===e&&`
    padding: 0 0 0 ${t.spacing.size3};

    a {
      transition: color ${t.transitions.short};

      &:hover {
        color: ${t.semantic.navigationSideNavHover};
      }
    }

    ${p} {
      position: absolute;
      top: ${t.spacing.size0p25};
      left: 0;
    }
  `} ${({$active:e,$use:t,theme:i})=>"topics"===t&&`
    a {
      padding: ${i.spacing.size1} ${i.spacing.size2};
      border-radius: ${i.borders.rounded.xl3};
      display: block;
      background-color: ${e?i.semantic.borderSubtle:"transparent"};
      color: ${e?i.semantic.textPrimary:"inherit"};
      transition: color ${i.transitions.short}, background-color ${i.transitions.short};

      &:hover {
        background-color: ${i.semantic.navigationSideNavHover};
        color: ${i.semantic.textOnColor};
      }
    }
  `} > span{display:block;}`,h=(0,s.forwardRef)((e,t)=>{var{active:i,links:o,children:h,hideTitle:m=!1,icon:u,title:f="Table of contents",use:b="table-of-contents"}=e,y=(0,n.c)(e,["active","links","children","hideTitle","icon","title","use"]);let $=(0,s.useId)();return(0,l.jsxs)(d,(0,n.b)((0,n.a)({ref:t,"aria-labelledby":$},y),{children:[(0,l.jsx)(r.a,{size:"lg",weight:700,as:"h2",color:"textPrimary",id:$,srOnly:m,children:f}),(0,l.jsx)(c,{$use:b,children:o.map(e=>(0,l.jsxs)(g,{$active:i===e.href,$use:b,children:[i===e.href&&u&&"table-of-contents"===b&&(0,l.jsx)(p,{children:u}),(0,l.jsx)(r.a,{color:i===e.href?"navigationSideNavActive":"navigationSideNavDefault",size:"table-of-contents"===b?"sm":"base",weight:500,children:(0,l.jsx)(a.a,(0,n.b)((0,n.a)({},e),{children:e.children}))})]},e.href))}),h]}))});h.displayName="@do/kraken/TabbedSideNavigation";var m=h},79133:(e,t,i)=>{i.d(t,{a:()=>f});var a=i(52357),r=i(12103),o=i(90715),n=i(82074),s=i(22198),l=i(57565),d=i(2329),c=i(5963),p=i(59715),g=s.a.div.withConfig({displayName:"Headlinestyles__StyledSubtitle",componentId:"sc-14uj3bo-0"})`margin:0 auto;max-width:640px;`,h=s.a.div.withConfig({displayName:"Headlinestyles__StyledHeadline",componentId:"sc-14uj3bo-1"})`display:flex;flex-direction:column;gap:${({theme:e})=>e.spacing.size3};padding-bottom:${({$collapsePadding:e,theme:t})=>!e&&t.spacing.size10};${({$align:e})=>`
    text-align: ${e};
    ${g} {
      margin: ${"center"===e?"0 auto;":"0;"}
    }
  `};${({$bottomPadding:e})=>"string"==typeof e?`padding-bottom: ${(0,l.f)(e)};`:e&&"object"==typeof e?(0,r.a)(e,"padding-bottom",l.f):null}`,m=s.a.div.withConfig({displayName:"Headlinestyles__StyledHeadlineHeader",componentId:"sc-14uj3bo-2"})`display:flex;flex-direction:column;gap:${({theme:e})=>e.spacing.size1};`,u=(0,c.forwardRef)((e,t)=>{var{align:i="center",bodyColor:r="textDefault",collapsePadding:s=!1,bottomPadding:l,title:c,titleAs:u="h2",textColor:f="textPrimary",titleSize:b="xl4",titleFamily:y="display",titleWeight:$=700,children:v,link:x}=e,w=(0,d.c)(e,["align","bodyColor","collapsePadding","bottomPadding","title","titleAs","textColor","titleSize","titleFamily","titleWeight","children","link"]);let k=typeof v;return(0,p.jsx)(a.a,{collapsePadding:!0,children:(0,p.jsxs)(h,(0,d.b)((0,d.a)({ref:t,$align:i,$collapsePadding:s,$bottomPadding:l},w),{children:[(0,p.jsxs)(m,{children:[(0,p.jsx)(n.a,{as:u,color:f,size:b,family:y,weight:$,children:c}),v&&(0,p.jsx)(g,{children:"string"===k?(0,p.jsx)(n.a,{as:"p",color:r,children:v}):v})]}),x&&(0,p.jsx)(n.a,{as:"p",color:f,weight:600,children:(0,p.jsx)(o.a,(0,d.a)({},x))})]}))})});u.displayName="@do/kraken/Headline";var f=u},87149:(e,t,i)=>{i.d(t,{a:()=>p});var a=i(82074),r=i(7195),o=i(22198),n=i(2329),s=i(5963),l=i(59715),d=o.a.span.withConfig({displayName:"ButtonCirclestyles",componentId:"sc-17yid1o-0"})`background-color:${({theme:e})=>e.semantic.buttonPrimaryDefault};border-radius:${({theme:e})=>e.borders.rounded.full};color:${({theme:e})=>e.semantic.buttonCircleIcon};cursor:pointer;display:flex;flex-shrink:0;transition:background-color ${({theme:e})=>e.transitions.short};${({$size:e})=>"medium"===e&&`
    width: 32px;
    height: 32px;
  `} ${({$size:e})=>"large"===e&&`
    height: 40px;
    width: 40px;
  `} &:hover{background-color:${({theme:e})=>e.semantic.buttonPrimaryHover};}&:focus-visible{outline:${({theme:e})=>e.semantic.buttonPrimaryDefault} solid 2px;outline-offset:2px;}&[disabled]{background-color:${({theme:e})=>e.semantic.buttonDisabledDefault};color:${({theme:e})=>e.semantic.buttonCircleIconDisabled};pointer-events:none;}svg{height:16px;margin:auto;width:16px;}`,c=(0,s.forwardRef)((e,t)=>{var{as:i,children:o,size:s="medium",srText:c}=e,p=(0,n.c)(e,["as","children","size","srText"]);let{link:g}=(0,r.a)();return(0,l.jsxs)(d,(0,n.b)((0,n.a)({as:i||g,ref:t,$size:s},p),{children:[o,c&&"string"==typeof c&&(0,l.jsx)(a.a,{srOnly:!0,children:c})]}))});c.displayName="@do/kraken/ButtonCircle";var p=c},88814:(e,t,i)=>{i.d(t,{a:()=>b});var a=i(90715),r=i(60071),o=i(82074),n=i(22198),s=i(57565),l=i(2329),d=i(5963),c=i(59715),p=n.a.div.withConfig({displayName:"CTAFeaturestyles__StyledCTAFeature",componentId:"sc-1ln8abg-0"})`${({$backgroundColor:e})=>e&&`
    background-color: ${(0,s.e)(e)};
  `};border-radius:${({theme:e})=>e.borders.rounded.xl2};${({$textColor:e})=>e&&`
    color: ${(0,s.e)(e)};
  `};overflow:hidden;position:relative;&::after{border:2px solid ${({theme:e})=>e.semantic.borderTransparent};border-radius:${({theme:e})=>e.borders.rounded.xl2};content:'';inset:0;pointer-events:none;position:absolute;}`,g=n.a.div.withConfig({displayName:"CTAFeaturestyles__StyledCTAFeatureContent",componentId:"sc-1ln8abg-1"})`display:flex;flex-direction:column;${(0,s.g)("md")}{flex-direction:row;${({$flip:e})=>e&&"flex-direction: row-reverse"};max-width:1088px;}`,h=n.a.div.withConfig({displayName:"CTAFeaturestyles__StyledCTAFeatureImage",componentId:"sc-1ln8abg-2"})`aspect-ratio:16 / 9;overflow:hidden;position:relative;width:100%;img{height:100%;object-fit:cover;position:absolute;width:100%;}${(0,s.g)("md")}{aspect-ratio:auto;width:${31.25}%;}`,m=n.a.div.withConfig({displayName:"CTAFeaturestyles__StyledCTAFeatureText",componentId:"sc-1ln8abg-3"})`display:flex;flex-direction:column;gap:${({theme:e})=>`${e.spacing.size3}`};padding:${({theme:e})=>`${e.spacing.size3} ${e.spacing.size4}`};${(0,s.g)("md")}{padding:${({theme:e})=>`${e.spacing.size8}`};width:${68.75}%;}> *{&:last-child{margin-bottom:0;}}`,u=n.a.div.withConfig({displayName:"CTAFeaturestyles__StyledCTAFeatureBody",componentId:"sc-1ln8abg-4"})`display:flex;flex-direction:column;gap:${({theme:e})=>`${e.spacing.size1}`};`,f=(0,d.forwardRef)((e,t)=>{var{backgroundColor:i,bodyColor:n="textDefault",bodySize:s="base",children:d,flip:f,image:b,link:y,textColor:$="textPrimary",title:v,titleAs:x="h3"}=e,w=(0,l.c)(e,["backgroundColor","bodyColor","bodySize","children","flip","image","link","textColor","title","titleAs"]);return(0,c.jsx)(p,(0,l.b)((0,l.a)({$backgroundColor:i,$textColor:$,ref:t},w),{children:(0,c.jsxs)(g,{$flip:f,children:[(0,c.jsx)(h,{children:(0,c.jsx)(r.a,(0,l.b)((0,l.a)({},b),{alt:b.alt||""}))}),(0,c.jsxs)(m,{children:[(0,c.jsxs)(u,{children:[v&&(0,c.jsx)(o.a,{as:x,color:$,family:"display",size:"xl2",weight:700,children:v}),d&&(0,c.jsx)("div",{children:"string"==typeof d?(0,c.jsx)(o.a,{size:s,color:n||$,as:"p",children:d}):d})]}),y&&(0,c.jsx)(o.a,{as:"p",color:$,weight:500,children:(0,c.jsx)(a.a,(0,l.a)({},y))})]})]})}))});f.displayName="@do/kraken/ctas/CTAFeature";var b=f},91862:(e,t,i)=>{i.d(t,{a:()=>h});var a=i(59576),r=i(82074),o=i(22198),n=i(57565),s=i(2329),l=i(5963),d=i(59715),c=o.a.div.withConfig({displayName:"CTASimplestyles__StyledCTASimple",componentId:"sc-j39es-0"})`align-items:start;background-color:${({$bgColor:e,theme:t})=>e?(0,n.e)(e):t.semantic.backgroundExpandedJordySubtle};border:2px solid ${({theme:e})=>e.semantic.borderTransparent};border-radius:${({theme:e})=>e.borders.rounded.xl2};display:flex;flex-direction:column;gap:${({theme:e})=>e.spacing.size4};padding:${({theme:e})=>e.spacing.size3};${(0,n.g)("lg")}{align-items:center;flex-direction:row;justify-content:space-between;}`,p=o.a.div.withConfig({displayName:"CTASimplestyles__StyledCTASimpleButtonWrap",componentId:"sc-j39es-1"})`flex-shrink:1;text-align:center;width:max-content;${(0,n.g)("lg")}{flex-shrink:0;}`,g=(0,l.forwardRef)((e,t)=>{var{bgColor:i,button:o,children:n}=e,l=(0,s.c)(e,["bgColor","button","children"]);return(0,d.jsxs)(c,(0,s.b)((0,s.a)({ref:t,$bgColor:i},l),{children:["string"==typeof n?(0,d.jsx)(r.a,{as:"p",color:"textAlwaysDark",size:"lg",weight:700,children:n}):n,o&&(0,d.jsx)(p,{children:(0,d.jsx)(a.a,(0,s.a)({color:"secondary",size:"large"},o))})]}))});g.displayName="@do/kraken/ctas/CTASimple";var h=g},98274:(e,t,i)=>{i.d(t,{a:()=>$});var a=i(87149),r=i(45745),o=i(82074),n=i(18195),s=i(15734),l=i(99740),d=i(22198),c=i(2329),p=i(5963),g=i(41307),h=i(59715),m=d.a.nav.withConfig({displayName:"ButtonPaginationstyles__StyledContainer",componentId:"sc-18k2vbz-0"})`align-items:center;display:flex;gap:${({theme:e})=>e.spacing.size1};justify-content:center;`,u=(0,d.a)(m).attrs({as:"div"}).withConfig({displayName:"ButtonPaginationstyles__StyledInnerContainer",componentId:"sc-18k2vbz-1"})``,f=(0,d.a)(r.a).withConfig({displayName:"ButtonPaginationstyles__StyledPage",componentId:"sc-18k2vbz-2"})`color:${({theme:e})=>e.semantic.paginationNumbersDefault};cursor:pointer;font-variant-numeric:tabular-nums;padding:${({theme:e})=>`${e.spacing.size0p5} ${e.spacing.size1}`};text-align:center;transition:background-color ${({theme:e})=>e.transitions.short},color ${({theme:e})=>e.transitions.short},font-weight ${({theme:e})=>e.transitions.short};&:not([disabled]){&:hover,&:focus{background-color:${({theme:e})=>e.semantic.paginationNumbersHover};border-radius:${({theme:e})=>e.borders.rounded.full};color:${({theme:e})=>e.semantic.textPrimary};}}&[disabled]{color:${({theme:e})=>e.semantic.paginationNumbersActive};cursor:default;font-weight:${({theme:e})=>e.fontWeight[700]};pointer-events:none;}`,b=d.a.span.withConfig({displayName:"ButtonPaginationstyles__StyledEllipsis",componentId:"sc-18k2vbz-3"})`color:${({theme:e})=>e.semantic.paginationNumbersDefault};flex-shrink:0;padding:0 ${({theme:e})=>e.spacing.size1};`,y=(0,p.forwardRef)((e,t)=>{var{value:i,onChange:r,href:d,min:y=1,max:$}=e,v=(0,c.c)(e,["value","onChange","href","min","max"]);let x=(0,g.DP)(),w=Math.min(Math.max(y,i),$),k=(0,p.useCallback)(e=>{let t=e<y||e>$||e===w,i=(0,c.b)((0,c.a)((0,c.a)({},e===w&&{"aria-current":"page"}),r&&{onClick:t=>r(e,t)}),{disabled:t});return d?(0,c.b)((0,c.a)({},i),{"aria-disabled":t,href:t?"#":d(e)}):(0,c.b)((0,c.a)({},i),{as:"button",type:"button"})},[w,y,$,d,r]),C=(0,p.useMemo)(()=>{let e=$-y+1;return e<=6?Array(e).fill(null).map((e,t)=>({page:y+t,props:k(y+t)})):w-y<3?[{page:y,props:k(y)},{page:y+1,props:k(y+1)},{page:y+2,props:k(y+2)},{ellipsis:y+3},{page:$,props:k($)}]:$-w<3?[{page:y,props:k(y)},{ellipsis:$-3},{page:$-2,props:k($-2)},{page:$-1,props:k($-1)},{page:$,props:k($)}]:[{page:y,props:k(y)},{ellipsis:w-1},{page:w,props:k(w)},{ellipsis:w+1},{page:$,props:k($)}]},[w,y,$,k]),z=(0,p.useMemo)(()=>k(w-1),[w,k]),j=(0,p.useMemo)(()=>k(w+1),[w,k]);return(0,h.jsxs)(m,(0,c.b)((0,c.a)({ref:t,"aria-label":"Pagination"},v),{children:[(0,h.jsxs)(a.a,(0,c.b)((0,c.a)({size:"large"},z),{children:[(0,h.jsx)(l.a,{size:x.icons.size2}),(0,h.jsx)(o.a,{srOnly:!0,children:"Previous page"})]})),(0,h.jsx)(u,{children:C.map(e=>"ellipsis"in e?(0,h.jsx)(b,{children:(0,h.jsx)(n.a,{size:x.icons.size2})},e.ellipsis):(0,h.jsxs)(f,(0,c.b)((0,c.a)({},e.props),{children:[(0,h.jsx)(o.a,{srOnly:!0,children:"Page "}),e.page.toLocaleString()]}),e.page))}),(0,h.jsxs)(a.a,(0,c.b)((0,c.a)({size:"large"},j),{children:[(0,h.jsx)(s.a,{size:x.icons.size2}),(0,h.jsx)(o.a,{srOnly:!0,children:"Next page"})]}))]}))});y.displayName="@do/kraken/ButtonPagination";var $=y},99740:(e,t,i)=>{i.d(t,{a:()=>p});var a=i(2329),r=i(5963),o=i(53982),n=i.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var l=(0,r.forwardRef)(function(e,t){var i=e.color,a=e.size,o=void 0===a?24:a,n=function(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["color","size"]);return r.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===i?"currentColor":i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.createElement("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),r.createElement("polyline",{points:"12 19 5 12 12 5"}))});l.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},l.displayName="ArrowLeft";var d=i(59715),c=(0,r.forwardRef)((e,t)=>{let{color:i="currentColor",size:r=32}=e,o=(0,a.c)(e,["color","size"]);return(0,d.jsx)(l,(0,a.a)({ref:t,color:i,size:r},o))});c.displayName="@do/kraken/icons/ArrowLeft (feather)";var p=c}}]);