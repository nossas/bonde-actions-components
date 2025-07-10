import{__toESM as e}from"./chunk-D3B-zxXs.js";import{require_react as t}from"./react-NX0r4bef.js";import{Button as n,ChakraProvider as r,action as i,jsx as a,jsxs as o}from"./jsx-runtime-C0TUbHIs.js";import{PhoneCall as s,ShareButtons as c,sleep as l}from"./ShareButtons-CavVqeFr.js";var u,d,f,p,m=e(t());function h(e,t){return(...n)=>{t(!1),e(...n)}}const g=function(e,{args:t}){let[i,s]=(0,m.useState)(!1),c=()=>s(!0),l=h(t.onFinish,s);return o(r,{children:[a(n,{type:`button`,variant:`solid`,onClick:c,children:`Ligar`}),i&&a(e,{args:{...t,onFinish:l}})]})},_={title:`Phone Call`,component:s,decorators:g,argTypes:{action:{description:`Callback de ligação telefônica (por padrão, usa API do Bonde)`,type:`function`},children:{description:`Conteúdo exibido ao compartilhar a campanha`,defaultValue:void 0,table:{type:`JSX.Element`}},guideline:{description:`Roteiro da ligação`,type:`string`},linkColor:{description:`Cor dos links do modal`,type:`string`},mainColor:{description:`Cor primária da campanha`,type:`string`},phone:{description:`Número de telefone do usuário`,type:`string`},targets:{description:`Lista de alvos`},onFail:{description:`Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)`,type:`function`},onFinish:{description:`Evento disparado quando a interação do usuário foi encerrada (o modal de ligação foi fechado)`,type:`function`},onSuccess:{description:`Evento disparado quando a ligação foi finalizada com sucesso`,type:`function`}},parameters:{controls:{exclude:[`action`,`children`,`onFail`,`onFinish`,`onSuccess`]}}};var v=_;const y=async e=>{await l(1e3),e(`ringing`),await l(3e3),e(`in-progress`),await l(3e3),e(`completed`)},b=async e=>{await l(1e3),e(`ringing`),await l(3e3),e(`failed`)},x={args:{action:y,children:a(c,{}),guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,phone:`+55 11 00000-0000`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],onFail:i(`onFail`),onFinish:i(`onFinish`),onSuccess:i(`onSuccess`)}},S={args:{action:b,children:a(c,{}),guideline:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,phone:`+55 11 00000-0000`,targets:[{name:`Dep. Fulano`,phone:`+55 22 00000-0000`},{name:`Sen. Sicrana`,phone:`+55 33 00000-0000`}],onFail:i(`onFail`),onFinish:i(`onFinish`),onSuccess:i(`onSuccess`)}};x.parameters={...x.parameters,docs:{...(u=x.parameters)?.docs,source:{originalSource:`{
  args: {
    action: successPhoneCall,
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    phone: '+55 11 00000-0000',
    targets: [{
      name: 'Dep. Fulano',
      phone: '+55 22 00000-0000'
    }, {
      name: 'Sen. Sicrana',
      phone: '+55 33 00000-0000'
    }],
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess')
  }
}`,...(d=x.parameters)==null||(d=d.docs)==null?void 0:d.source}}},S.parameters={...S.parameters,docs:{...(f=S.parameters)?.docs,source:{originalSource:`{
  args: {
    action: failurePhoneCall,
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    phone: '+55 11 00000-0000',
    targets: [{
      name: 'Dep. Fulano',
      phone: '+55 22 00000-0000'
    }, {
      name: 'Sen. Sicrana',
      phone: '+55 33 00000-0000'
    }],
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess')
  }
}`,...(p=S.parameters)==null||(p=p.docs)==null?void 0:p.source}}};const C=[`Success`,`Failure`];export{v as Demo_stories_default,S as Failure,x as Success,C as __namedExportsOrder};