import"./react-NX0r4bef.js";import"./preview-errors-Dwjpnz8h.js";import"./esm-D-grMb2I.js";import"./react-dom-DQyN7wN3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Cyey4TpT.js";import"./inheritsLoose-riykfhLK.js";import"./prop-types-X27JUbnB.js";import{ChakraProvider as e,action as t,jsx as n}from"./jsx-runtime--pC3LNoF.js";import{PhoneCall as r}from"./PhoneCall-Bs9F6MIG.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;const b={title:`Phone Pressure/States`,component:r,decorators:t=>n(e,{children:n(t,{})}),args:{activist:{name:`João da Silva`,email:`joao.da.silva@email.com.br`,phone:`22 00000-0000`},guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,postActionHtml:`<p>A pós-ação vai aqui!</p>`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],onFail:t(`onFail`),onFinish:t(`onFinish`),onSuccess:t(`onSuccess`)},parameters:{controls:{exclude:[`action`,`onFail`,`onFinish`,`onSuccess`]}}};var x=b;function S(e){return async function(t,n){n(e)}}const C={args:{action:S(`busy`)}},w={args:{action:S(`canceled`)}},T={args:{action:S(`completed`)}},E={args:{action:S(`failed`)}},D={args:{action:S(`in-progress`)}},O={args:{action:S(`initiated`)}},k={args:{action:S(`no-answer`)}},A={args:{action:S(`ringing`)}};C.parameters={...C.parameters,docs:{...(i=C.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('busy')
  }
}`,...(a=C.parameters)==null||(a=a.docs)==null?void 0:a.source}}},w.parameters={...w.parameters,docs:{...(o=w.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('canceled')
  }
}`,...(s=w.parameters)==null||(s=s.docs)==null?void 0:s.source}}},T.parameters={...T.parameters,docs:{...(c=T.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('completed')
  }
}`,...(l=T.parameters)==null||(l=l.docs)==null?void 0:l.source}}},E.parameters={...E.parameters,docs:{...(u=E.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('failed')
  }
}`,...(d=E.parameters)==null||(d=d.docs)==null?void 0:d.source}}},D.parameters={...D.parameters,docs:{...(f=D.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('in-progress')
  }
}`,...(p=D.parameters)==null||(p=p.docs)==null?void 0:p.source}}},O.parameters={...O.parameters,docs:{...(m=O.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('initiated')
  }
}`,...(h=O.parameters)==null||(h=h.docs)==null?void 0:h.source}}},k.parameters={...k.parameters,docs:{...(g=k.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('no-answer')
  }
}`,...(_=k.parameters)==null||(_=_.docs)==null?void 0:_.source}}},A.parameters={...A.parameters,docs:{...(v=A.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('ringing')
  }
}`,...(y=A.parameters)==null||(y=y.docs)==null?void 0:y.source}}};const j=[`Busy`,`Canceled`,`Completed`,`Failed`,`InProgress`,`Initiated`,`NoAnswer`,`Ringing`];export{C as Busy,w as Canceled,T as Completed,E as Failed,D as InProgress,O as Initiated,k as NoAnswer,A as Ringing,j as __namedExportsOrder,x as default};