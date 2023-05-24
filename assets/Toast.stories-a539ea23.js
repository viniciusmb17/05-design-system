import{j as e}from"./jsx-runtime-0741ab7f.js";import{a as g,d as D}from"./index-3742ebe4.js";import{r as n}from"./index-902e4630.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const j=x=>{const[T,a]=n.useState(!1),o=n.useRef(0),i=new Date;n.useEffect(()=>()=>clearTimeout(o.current),[]);function h(y){return new Intl.DateTimeFormat("pt-BR",{dateStyle:"full",timeStyle:"short"}).format(y).replace(/(^|\W)([a-zÀ-ÖØ-öø-ÿ])/g,(w,c,s)=>"àd".includes(s)?c+s:c+s.toUpperCase())}return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{a(!1),window.clearTimeout(o.current),o.current=window.setTimeout(()=>a(!0),100)},children:"Agendar"}),e.jsx(D,{...x,open:T,onOpenChange:a,description:h(i),eventDate:i,title:"Agendamento realizado"})]})},R={title:"Form/Toast",component:j,tags:["autodocs"],args:{}},t={},r={args:{action:e.jsx(g,{variant:"tertiary",size:"sm",children:"Desfazer"})}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    action: <Button variant={'tertiary'} size={'sm'}>
        Desfazer
      </Button>
  }
}`,...(f=(l=r.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const _=["Primary","WithAction"];export{t as Primary,r as WithAction,_ as __namedExportsOrder,R as default};
//# sourceMappingURL=Toast.stories-a539ea23.js.map
