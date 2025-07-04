import"./react-NX0r4bef.js";import"./preview-errors-Dwjpnz8h.js";import"./esm-D-grMb2I.js";import"./react-dom-DQyN7wN3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Cyey4TpT.js";import"./cloneDeep-DlBIA5n_.js";import"./_baseForOwn-Bq7u0vxN.js";import"./isSymbol-rHClC8w_.js";import"./isString-DeKAGfy3.js";import{ChakraProvider as e,PhoneCall as t,ShareButtons as n,action as r,jsx as i,theme as a}from"./ShareButtons-BF2dyIiT.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;const S={title:`Phone Call/States`,component:t,decorators:t=>i(e,{children:i(t,{})}),args:{children:i(n,{theme:a}),script:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,userPhoneNumber:`+55 11 00000-0000`,targets:[{label:`Dep. Fulano`,phoneNumber:`+55 22 00000-0000`},{label:`Sen. Sicrana`,phoneNumber:`+55 33 00000-0000`}],theme:a,onFail:r(`onFail`),onFinish:r(`onFinish`),onSuccess:r(`onSuccess`)},parameters:{controls:{exclude:[`action`,`children`,`onFail`,`onFinish`,`onSuccess`]}}};var C=S;function w(e){return async function(t){t(e)}}const T={args:{action:w(`busy`)}},E={args:{action:w(`canceled`)}},D={args:{action:w(`completed`)}},O={args:{action:w(`failed`)}},k={args:{action:w(`in-progress`)}},A={args:{action:w(`initiated`)}},j={args:{action:w(`no-answer`)}},M={args:{action:w(`ringing`)}};T.parameters={...T.parameters,docs:{...(o=T.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('busy')
  }
}`,...(s=T.parameters)==null||(s=s.docs)==null?void 0:s.source}}},E.parameters={...E.parameters,docs:{...(c=E.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('canceled')
  }
}`,...(l=E.parameters)==null||(l=l.docs)==null?void 0:l.source}}},D.parameters={...D.parameters,docs:{...(u=D.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('completed')
  }
}`,...(d=D.parameters)==null||(d=d.docs)==null?void 0:d.source}}},O.parameters={...O.parameters,docs:{...(f=O.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('failed')
  }
}`,...(p=O.parameters)==null||(p=p.docs)==null?void 0:p.source}}},k.parameters={...k.parameters,docs:{...(m=k.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('in-progress')
  }
}`,...(h=k.parameters)==null||(h=h.docs)==null?void 0:h.source}}},A.parameters={...A.parameters,docs:{...(g=A.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('initiated')
  }
}`,...(_=A.parameters)==null||(_=_.docs)==null?void 0:_.source}}},j.parameters={...j.parameters,docs:{...(v=j.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('no-answer')
  }
}`,...(y=j.parameters)==null||(y=y.docs)==null?void 0:y.source}}},M.parameters={...M.parameters,docs:{...(b=M.parameters)?.docs,source:{originalSource:`{
  args: {
    action: wrapAction('ringing')
  }
}`,...(x=M.parameters)==null||(x=x.docs)==null?void 0:x.source}}};const N=[`Busy`,`Canceled`,`Completed`,`Failed`,`InProgress`,`Initiated`,`NoAnswer`,`Ringing`];export{T as Busy,E as Canceled,D as Completed,O as Failed,k as InProgress,A as Initiated,j as NoAnswer,M as Ringing,N as __namedExportsOrder,C as default};