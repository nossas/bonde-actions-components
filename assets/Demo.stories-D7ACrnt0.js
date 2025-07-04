import{__toESM as e}from"./chunk-D3B-zxXs.js";import{require_react as t}from"./react-NX0r4bef.js";import{Button as n,ChakraProvider as r,Modal as i,ShareButtons as a,action as o,jsx as s,jsxs as c,stateSwitcher as l,theme as u}from"./ShareButtons-Bw3UpBGY.js";var d,f,p,m;function h(e){return new Promise(t=>{setTimeout(t,e)})}async function g(e,t,n){await h(1e3),e(`ringing`),await h(3e3),e(`in-progress`),await h(3e3),e(`completed`)}var _=e(t());function v(){}function y({action:e=g,children:t=void 0,script:n,targets:r,theme:a=u,userPhoneNumber:o,onFail:c=v,onFinish:d=v,onSuccess:f=v}){let[p,m]=(0,_.useState)(`idle`),[h,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(0);(0,_.useEffect)(()=>{p===`completed`&&f()},[f,p]);let S=(0,_.useCallback)(()=>{y(!0),c(p)},[c,y,p]),C=(0,_.useCallback)(()=>{p!==`completed`&&!h&&c(p),d(p),m(`idle`)},[c,d,m,p,h]),w=(0,_.useMemo)(()=>{if(r.length<=1)return r;let e=[...r];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},[r]),T=(0,_.useMemo)(()=>w[b%w.length],[w,b]),E=(0,_.useMemo)(()=>{let e=Math.ceil(r.length*1.5);return b<e},[b,r]),D=(0,_.useCallback)(()=>{m(`idle`),x(e=>e+1)},[x,m]);(0,_.useEffect)(()=>{async function t(){await e(m,o,T.phoneNumber)}t()},[e,m,T,o]);let O=l(p,h);if(O){let e={canRetry:E,postActions:t,script:n,target:T,theme:a,userPhoneNumber:o,onDismiss:C,onRetry:D,onShare:S};return s(i,{theme:a,onDismiss:C,...O(e)})}else return null}try{y.displayName=`PhoneCall`,y.__docgenInfo={description:``,displayName:`PhoneCall`,props:{action:{defaultValue:null,description:``,name:`action`,required:!1,type:{name:`PhoneCallAction`}},script:{defaultValue:null,description:``,name:`script`,required:!0,type:{name:`string`}},targets:{defaultValue:null,description:``,name:`targets`,required:!0,type:{name:`PhoneTarget[]`}},theme:{defaultValue:null,description:``,name:`theme`,required:!0,type:{name:`{ brand: { main: string; dark: string; light: string; }; commons: { dark: string; main: string; light: string; }; fontFamily: string; body: { padding: number; background: { light: string; main: string; dark: string; }; }; ... 4 more ...; error: string; }`}},userPhoneNumber:{defaultValue:null,description:``,name:`userPhoneNumber`,required:!0,type:{name:`string`}},onFail:{defaultValue:null,description:``,name:`onFail`,required:!1,type:{name:`((state: PhoneCallState) => void)`}},onFinish:{defaultValue:null,description:``,name:`onFinish`,required:!1,type:{name:`((state: PhoneCallState) => void)`}},onSuccess:{defaultValue:null,description:``,name:`onSuccess`,required:!1,type:{name:`(() => void)`}}}}}catch{}function b(e,t){return(...n)=>{t(!1),e(...n)}}const x=function(e,{args:t}){let[i,a]=(0,_.useState)(!1),o=()=>a(!0),l=b(t.onFinish,a);return c(r,{children:[s(n,{type:`button`,variant:`solid`,onClick:o,children:`Ligar`}),i&&s(e,{args:{...t,onFinish:l}})]})},S={title:`Phone Call`,component:y,decorators:x,argTypes:{action:{description:`Callback de ligação telefônica (por padrão, usa API do Bonde)`,type:`function`},children:{description:`Conteúdo exibido ao compartilhar a campanha`,defaultValue:void 0,table:{type:`JSX.Element`}},script:{description:`Roteiro da ligação`,type:`string`},targets:{description:`Lista de alvos`},theme:{description:`Tema da campanha`},userPhoneNumber:{description:`Número de telefone do usuário`,type:`string`},onFail:{description:`Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)`,type:`function`},onFinish:{description:`Evento disparado quando a interação do usuário foi encerrada (o modal de ligação foi fechado)`,type:`function`},onSuccess:{description:`Evento disparado quando a ligação foi finalizada com sucesso`,type:`function`}},parameters:{controls:{exclude:[`children`,`onFail`,`onFinish`,`onSuccess`]}}};var C=S;const w=async e=>{await h(1e3),e(`ringing`),await h(3e3),e(`in-progress`),await h(3e3),e(`completed`)},T=async e=>{await h(1e3),e(`ringing`),await h(3e3),e(`failed`)},E={args:{action:w,children:s(a,{theme:u}),script:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,userPhoneNumber:`+55 11 00000-0000`,targets:[{label:`Dep. Fulano`,phoneNumber:`+55 22 00000-0000`},{label:`Sen. Sicrana`,phoneNumber:`+55 33 00000-0000`}],theme:u,onFail:o(`onFail`),onFinish:o(`onFinish`),onSuccess:o(`onSuccess`)}},D={args:{action:T,children:s(a,{theme:u}),script:`Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!`,userPhoneNumber:`+55 11 00000-0000`,targets:[{label:`Dep. Fulano`,phoneNumber:`+55 22 00000-0000`},{label:`Sen. Sicrana`,phoneNumber:`+55 33 00000-0000`}],theme:u,onFail:o(`onFail`),onFinish:o(`onFinish`),onSuccess:o(`onSuccess`)}};E.parameters={...E.parameters,docs:{...(d=E.parameters)?.docs,source:{originalSource:`{
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
}`,...(f=E.parameters)==null||(f=f.docs)==null?void 0:f.source}}},D.parameters={...D.parameters,docs:{...(p=D.parameters)?.docs,source:{originalSource:`{
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
}`,...(m=D.parameters)==null||(m=m.docs)==null?void 0:m.source}}};const O=[`Success`,`Failure`];export{C as Demo_stories_default,D as Failure,E as Success,O as __namedExportsOrder};