import{__toESM as e}from"./chunk-D3B-zxXs.js";import{require_react as t}from"./react-NX0r4bef.js";import{Box as n,ChakraProvider as r,action as i,jsx as a,jsxs as o}from"./jsx-runtime--pC3LNoF.js";import{ActionForm as s}from"./ActionForm-D3ml4kND.js";import{PhoneCall as c,ShareButtons as l,bondePhoneCall as u,sleep as d}from"./ShareButtons-DJqsskB3.js";var f,p,m,h,g=e(t());function _(){}const v=[`email`,`name`,`phone`];function y({action:e=u,children:t,guideline:r,linkColor:i=`#1D3D90`,mainColor:l=`#A42828`,targets:d,widgetId:f,onFail:p=_,onSuccess:m=_,...h}){let[y,b]=(0,g.useState)(null),[x,S]=(0,g.useState)(!1),C=(0,g.useCallback)(()=>{S(!1)},[S]),w=(0,g.useCallback)(e=>{b(e),S(!0)},[b,S]);return o(n,{className:`bonde-phone-pressure-form`,...h,children:[a(s,{brandColor:l,fields:v,submitLabel:`Ligar`,widgetId:f,onSubmit:w}),y&&x&&a(c,{action:e,activist:y,guideline:r,linkColor:i,mainColor:l,targets:d,widgetId:f,onFail:p,onFinish:C,onSuccess:m,children:t})]})}try{y.displayName=`PhonePressureForm`,y.__docgenInfo={description:``,displayName:`PhonePressureForm`,props:{action:{defaultValue:null,description:``,name:`action`,required:!1,type:{name:`PhoneCallAction`}},guideline:{defaultValue:null,description:``,name:`guideline`,required:!0,type:{name:`string`}},linkColor:{defaultValue:{value:`#1D3D90`},description:``,name:`linkColor`,required:!1,type:{name:`string`}},mainColor:{defaultValue:{value:`#A42828`},description:``,name:`mainColor`,required:!1,type:{name:`string`}},targets:{defaultValue:null,description:``,name:`targets`,required:!0,type:{name:`PhoneTarget[]`}},widgetId:{defaultValue:null,description:``,name:`widgetId`,required:!0,type:{name:`number`}},onFail:{defaultValue:null,description:``,name:`onFail`,required:!1,type:{name:`((state: PhoneCallState) => void)`}},onSuccess:{defaultValue:null,description:``,name:`onSuccess`,required:!1,type:{name:`(() => void)`}}}}}catch{}const b=function(e){return a(r,{children:a(e,{})})},x={title:`Phone Pressure`,component:y,decorators:b,argTypes:{action:{description:`Callback de ligação telefônica (por padrão, usa API do Bonde)`,type:`function`},guideline:{description:`Roteiro da ligação`,type:`string`},linkColor:{description:`Cor dos links do modal`,type:`string`},mainColor:{description:`Cor primária da campanha`,type:`string`},targets:{description:`Lista de alvos`},widgetId:{description:`ID do widget do Bonde`},onFail:{description:`Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)`,type:`function`},onSuccess:{description:`Evento disparado quando a ligação foi finalizada com sucesso`,type:`function`}},parameters:{controls:{exclude:[`action`,`children`,`maxWidth`,`onFail`,`onSuccess`]}}};var S=x;const C=async e=>{await d(1e3),e(`ringing`),await d(3e3),e(`in-progress`),await d(3e3),e(`completed`)},w=async e=>{await d(1e3),e(`ringing`),await d(3e3),e(`failed`)},T={args:{action:C,children:a(l,{}),guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,maxWidth:`40rem`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],widgetId:0,onFail:i(`onFail`),onSuccess:i(`onSuccess`)}},E={args:{action:w,children:a(l,{}),guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,maxWidth:`40rem`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],widgetId:0,onFail:i(`onFail`),onSuccess:i(`onSuccess`)}};T.parameters={...T.parameters,docs:{...(f=T.parameters)?.docs,source:{originalSource:`{
  args: {
    action: successPhoneCall,
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    maxWidth: '40rem',
    targets: [{
      name: 'Dep. Fulano',
      phone: '+55 22 00000-0000'
    }, {
      name: 'Sen. Sicrana',
      phone: '+55 33 00000-0000'
    }],
    widgetId: 0,
    onFail: action('onFail'),
    onSuccess: action('onSuccess')
  }
}`,...(p=T.parameters)==null||(p=p.docs)==null?void 0:p.source}}},E.parameters={...E.parameters,docs:{...(m=E.parameters)?.docs,source:{originalSource:`{
  args: {
    action: failurePhoneCall,
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    maxWidth: '40rem',
    targets: [{
      name: 'Dep. Fulano',
      phone: '+55 22 00000-0000'
    }, {
      name: 'Sen. Sicrana',
      phone: '+55 33 00000-0000'
    }],
    widgetId: 0,
    onFail: action('onFail'),
    onSuccess: action('onSuccess')
  }
}`,...(h=E.parameters)==null||(h=h.docs)==null?void 0:h.source}}};const D=[`Success`,`Failure`];export{E as Failure,S as Form_stories_default,T as Success,D as __namedExportsOrder};