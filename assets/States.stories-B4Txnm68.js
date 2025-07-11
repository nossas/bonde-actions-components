import"./react-NX0r4bef.js";import"./preview-errors-Dwjpnz8h.js";import"./esm-D-grMb2I.js";import"./react-dom-DQyN7wN3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Cyey4TpT.js";import"./inheritsLoose-riykfhLK.js";import"./prop-types-X27JUbnB.js";import{ChakraProvider as e,action as t,jsx as n}from"./jsx-runtime--pC3LNoF.js";import{PhoneCall as r,ShareButtons as i}from"./ShareButtons-DJqsskB3.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;const x={title:`Phone Pressure/States`,component:r,decorators:t=>n(e,{children:n(t,{})}),args:{activist:{name:`João da Silva`,email:`joao.da.silva@email.com.br`,phone:`22 00000-0000`},children:n(i,{}),guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],onFail:t(`onFail`),onFinish:t(`onFinish`),onSuccess:t(`onSuccess`)},parameters:{controls:{exclude:[`action`,`children`,`onFail`,`onFinish`,`onSuccess`]}}};var S=x;function C(e){return async function(t){t(e)}}const w={args:{action:C(`busy`)}},T={args:{action:C(`canceled`)}},E={args:{action:C(`completed`)}},D={args:{action:C(`failed`)}},O={args:{action:C(`in-progress`)}},k={args:{action:C(`initiated`)}},A={args:{action:C(`no-answer`)}},j={args:{action:C(`ringing`)}};w.parameters={...w.parameters,docs:{...(a=w.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('busy')
  }
}`,...(o=w.parameters)==null||(o=o.docs)==null?void 0:o.source}}},T.parameters={...T.parameters,docs:{...(s=T.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('canceled')
  }
}`,...(c=T.parameters)==null||(c=c.docs)==null?void 0:c.source}}},E.parameters={...E.parameters,docs:{...(l=E.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('completed')
  }
}`,...(u=E.parameters)==null||(u=u.docs)==null?void 0:u.source}}},D.parameters={...D.parameters,docs:{...(d=D.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('failed')
  }
}`,...(f=D.parameters)==null||(f=f.docs)==null?void 0:f.source}}},O.parameters={...O.parameters,docs:{...(p=O.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('in-progress')
  }
}`,...(m=O.parameters)==null||(m=m.docs)==null?void 0:m.source}}},k.parameters={...k.parameters,docs:{...(h=k.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('initiated')
  }
}`,...(g=k.parameters)==null||(g=g.docs)==null?void 0:g.source}}},A.parameters={...A.parameters,docs:{...(_=A.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('no-answer')
  }
}`,...(v=A.parameters)==null||(v=v.docs)==null?void 0:v.source}}},j.parameters={...j.parameters,docs:{...(y=j.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('ringing')
  }
}`,...(b=j.parameters)==null||(b=b.docs)==null?void 0:b.source}}};const M=[`Busy`,`Canceled`,`Completed`,`Failed`,`InProgress`,`Initiated`,`NoAnswer`,`Ringing`];export{w as Busy,T as Canceled,E as Completed,D as Failed,O as InProgress,k as Initiated,A as NoAnswer,j as Ringing,M as __namedExportsOrder,S as default};