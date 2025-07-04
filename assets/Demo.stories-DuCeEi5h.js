import{__toESM as e}from"./chunk-D3B-zxXs.js";import{require_react as t}from"./react-NX0r4bef.js";import{Button as n,ChakraProvider as r,PhoneCall as i,ShareButtons as a,action as o,jsx as s,jsxs as c,sleep as l,theme as u}from"./ShareButtons-BF2dyIiT.js";var d,f,p,m,h=e(t());function g(e,t){return(...n)=>{t(!1),e(...n)}}const _=function(e,{args:t}){let[i,a]=(0,h.useState)(!1),o=()=>a(!0),l=g(t.onFinish,a);return c(r,{children:[s(n,{type:`button`,variant:`solid`,onClick:o,children:`Ligar`}),i&&s(e,{args:{...t,onFinish:l}})]})},v={title:`Phone Call`,component:i,decorators:_,argTypes:{action:{description:`Callback de ligação telefônica (por padrão, usa API do Bonde)`,type:`function`},children:{description:`Conteúdo exibido ao compartilhar a campanha`,defaultValue:void 0,table:{type:`JSX.Element`}},script:{description:`Roteiro da ligação`,type:`string`},targets:{description:`Lista de alvos`},theme:{description:`Tema da campanha`},userPhoneNumber:{description:`Número de telefone do usuário`,type:`string`},onFail:{description:`Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)`,type:`function`},onFinish:{description:`Evento disparado quando a interação do usuário foi encerrada (o modal de ligação foi fechado)`,type:`function`},onSuccess:{description:`Evento disparado quando a ligação foi finalizada com sucesso`,type:`function`}},parameters:{controls:{exclude:[`action`,`children`,`onFail`,`onFinish`,`onSuccess`]}}};var y=v;const b=async e=>{await l(1e3),e(`ringing`),await l(3e3),e(`in-progress`),await l(3e3),e(`completed`)},x=async e=>{await l(1e3),e(`ringing`),await l(3e3),e(`failed`)},S={args:{action:b,children:s(a,{theme:u}),script:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,userPhoneNumber:`+55 11 00000-0000`,targets:[{label:`Dep. Fulano`,phoneNumber:`+55 22 00000-0000`},{label:`Sen. Sicrana`,phoneNumber:`+55 33 00000-0000`}],theme:u,onFail:o(`onFail`),onFinish:o(`onFinish`),onSuccess:o(`onSuccess`)}},C={args:{action:x,children:s(a,{theme:u}),script:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,userPhoneNumber:`+55 11 00000-0000`,targets:[{label:`Dep. Fulano`,phoneNumber:`+55 22 00000-0000`},{label:`Sen. Sicrana`,phoneNumber:`+55 33 00000-0000`}],theme:u,onFail:o(`onFail`),onFinish:o(`onFinish`),onSuccess:o(`onSuccess`)}};S.parameters={...S.parameters,docs:{...(d=S.parameters)?.docs,source:{originalSource:`{
  args: {
    action: successPhoneCall,
    children: <ShareButtons theme={Theme} />,
    script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    userPhoneNumber: '+55 11 00000-0000',
    targets: [{
      label: 'Dep. Fulano',
      phoneNumber: '+55 22 00000-0000'
    }, {
      label: 'Sen. Sicrana',
      phoneNumber: '+55 33 00000-0000'
    }],
    theme: Theme,
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess')
  }
}`,...(f=S.parameters)==null||(f=f.docs)==null?void 0:f.source}}},C.parameters={...C.parameters,docs:{...(p=C.parameters)?.docs,source:{originalSource:`{
  args: {
    action: failurePhoneCall,
    children: <ShareButtons theme={Theme} />,
    script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    userPhoneNumber: '+55 11 00000-0000',
    targets: [{
      label: 'Dep. Fulano',
      phoneNumber: '+55 22 00000-0000'
    }, {
      label: 'Sen. Sicrana',
      phoneNumber: '+55 33 00000-0000'
    }],
    theme: Theme,
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess')
  }
}`,...(m=C.parameters)==null||(m=m.docs)==null?void 0:m.source}}};const w=[`Success`,`Failure`];export{y as Demo_stories_default,C as Failure,S as Success,w as __namedExportsOrder};