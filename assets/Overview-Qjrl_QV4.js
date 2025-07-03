import"./react-NX0r4bef.js";import{useMDXComponents as e}from"./lib-DEpmf2gv.js";import"./preview-errors-Dwjpnz8h.js";import"./esm-D-grMb2I.js";import"./react-dom-DQyN7wN3.js";import"./chunk-GWAJ4KRU-w97Po8Qr.js";import"./dist-ColS9MvF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Cyey4TpT.js";import"./chunk-JRLSWQMA-DyL5gNFu.js";import"./chunk-VZ2J7KYM-gxzRqsjp.js";import"./chunk-NE5YGCQB-FCuWKLnk.js";import"./dist-hibTN6Sh.js";import"./cloneDeep-DlBIA5n_.js";import{ArgTypes as t,Canvas as n,Meta as r}from"./dist-DwUcL8vi.js";import"./_baseForOwn-Bq7u0vxN.js";import"./isSymbol-rHClC8w_.js";import"./dist-DpJsmfOp.js";import"./isString-DeKAGfy3.js";import{Fragment as i,jsx as a,jsxs as o}from"./ShareButtons-Bw3UpBGY.js";import{Demo as s,Demo_stories_exports as c}from"./Demo.stories-CLCNQhUw.js";const{deprecate:l}=__STORYBOOK_MODULE_CLIENT_LOGGER__;l(`Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.`);function u(l){let u=Object.assign({h1:`h1`,code:`code`,p:`p`,a:`a`,h2:`h2`,pre:`pre`},e(),l.components);return o(i,{children:[a(r,{of:c}),`
`,a(u.h1,{id:`phonecall`,children:a(u.code,{children:`<PhoneCall>`})}),`
`,o(u.p,{children:[`Este componente realiza ligações telefônicas síncronas via `,a(u.a,{href:`https://www.twilio.com/pt-br`,target:`_blank`,rel:`nofollow noopener noreferrer`,children:`Twilio`}),`.`]}),`
`,a(u.p,{children:`O componente deve ser renderizado condicionalmente (apenas quando a ligação deve ser iniciada).`}),`
`,a(n,{of:s}),`
`,a(u.h2,{id:`props`,children:`Props`}),`
`,a(t,{}),`
`,o(u.p,{children:[`onde `,a(u.code,{children:`PhoneCallState`}),` é uma string e `,a(u.code,{children:`PhoneTarget`}),` possui o seguinte formato:`]}),`
`,a(u.pre,{children:a(u.code,{className:`language-ts`,children:`interface PhoneTarget {
  // Nome do alvo (na UI)
  label: string
  // Número de telefone do alvo
  phoneNumber: string
}
`})}),`
`,a(u.h2,{id:`exemplo-de-uso`,children:`Exemplo de uso`}),`
`,a(u.p,{children:`Disparo de ligação ao clicar no botão:`}),`
`,a(u.pre,{children:a(u.code,{className:`language-jsx`,children:`import { PhoneCall } from 'bonde-action-components'
import { useState } from 'react'

export function MyComponent ({ children, script, userPhoneNumber, targets, theme }) {
  const [isCalling, setIsCalling] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsCalling(true)}>
        Ligar
      </button>
      {isCalling && (
        <PhoneCall
          userPhoneNumber={userPhoneNumber}
          targets={targets}
          theme={theme}
          onFinish={() => setIsCalling(false)}
        >
          {children}
        </PhoneCall>
      )}
    </>
  )
}
`})})]})}function d(t={}){let{wrapper:n}=Object.assign({},e(),t.components);return n?a(n,Object.assign({},t,{children:a(u,t)})):u(t)}var f=d;export{f as default};