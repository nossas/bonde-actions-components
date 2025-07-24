import"./react-NX0r4bef.js";import{useMDXComponents as e}from"./lib-DEpmf2gv.js";import"./preview-errors-Dwjpnz8h.js";import"./esm-D-grMb2I.js";import"./react-dom-DQyN7wN3.js";import"./chunk-GWAJ4KRU-w97Po8Qr.js";import"./dist-ColS9MvF.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Cyey4TpT.js";import"./chunk-JRLSWQMA-DyL5gNFu.js";import"./chunk-VZ2J7KYM-gxzRqsjp.js";import"./chunk-NE5YGCQB-FCuWKLnk.js";import"./dist-BtmFvy9i.js";import"./inheritsLoose-riykfhLK.js";import{ArgTypes as t,Canvas as n,Meta as r}from"./dist-BBfhTtxb.js";import"./dist-Yw1E82vv.js";import"./isSymbol-rHClC8w_.js";import"./prop-types-X27JUbnB.js";import{Fragment as i,jsx as a,jsxs as o}from"./jsx-runtime--pC3LNoF.js";import"./ActionForm-ULnUYkG-.js";import{Form_stories_default as s,Success as c}from"./Form.stories-DTPbBjFF.js";import"./PhoneCall-Bs9F6MIG.js";const{deprecate:l}=__STORYBOOK_MODULE_CLIENT_LOGGER__;l(`Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.`);function u(l){let u=Object.assign({h1:`h1`,code:`code`,p:`p`,a:`a`,h2:`h2`,pre:`pre`},e(),l.components);return o(i,{children:[a(r,{of:s}),`
`,a(u.h1,{id:`phonepressureform`,children:a(u.code,{children:`<PhonePressureForm>`})}),`
`,o(u.p,{children:[`Este formulário realiza ligações telefônicas síncronas via `,a(u.a,{href:`https://www.twilio.com/pt-br`,target:`_blank`,rel:`nofollow noopener noreferrer`,children:`Twilio`}),`.`]}),`
`,a(n,{of:c}),`
`,a(u.h2,{id:`props`,children:`Props`}),`
`,a(t,{}),`
`,o(u.p,{children:[a(u.code,{children:`PhoneCallState`}),` é uma string.`]}),`
`,o(u.p,{children:[a(u.code,{children:`PhoneTarget`}),` possui o seguinte formato:`]}),`
`,a(u.pre,{children:a(u.code,{className:`language-ts`,children:`interface PhoneTarget {
  name: string
  number: string
}
`})}),`
`,o(u.p,{children:[a(u.code,{children:`PhoneCallAction`}),` possui o seguinte formato:`]}),`
`,a(u.pre,{children:a(u.code,{className:`language-ts`,children:`type PhoneCallAction = (payload: PhoneActionPayload, setState: SetState<PhoneCallState>) => Promise<void>
`})}),`
`,o(u.p,{children:[a(u.code,{children:`PhoneActionPayload`}),` possui o seguinte formato:`]}),`
`,a(u.pre,{children:a(u.code,{className:`language-ts`,children:`interface PhoneActionPayload {
  activist: {
    name: string
    email: string
    phone: string
  }

  input: {
    custom_fields: {
      target: PhoneTarget
      status: PhoneCallState
    }
  }

  widget_id: number
}
`})})]})}function d(t={}){let{wrapper:n}=Object.assign({},e(),t.components);return n?a(n,Object.assign({},t,{children:a(u,t)})):u(t)}var f=d;export{f as default};