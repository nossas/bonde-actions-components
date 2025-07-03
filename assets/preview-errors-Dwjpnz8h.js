import{esm_default as e}from"./esm-D-grMb2I.js";let t;const n=new Uint8Array(16);function r(){if(!t&&(t=typeof crypto<`u`&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!t))throw Error(`crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`);return t(n)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function a(e,t=0){return i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+`-`+i[e[t+4]]+i[e[t+5]]+`-`+i[e[t+6]]+i[e[t+7]]+`-`+i[e[t+8]]+i[e[t+9]]+`-`+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]}const o=typeof crypto<`u`&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var s={randomUUID:o};function c(e,t,n){if(s.randomUUID&&!t&&!e)return s.randomUUID();e||={};let i=e.random||(e.rng||r)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){n||=0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return a(i)}var l=c,u=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let e=String(this.code).padStart(4,`0`);return`SB_${this.category}_${e}`}get name(){let e=this.constructor.name;return`${this.fullErrorCode} (${e})`}get message(){let e;return this.documentation===!0?e=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation==`string`?e=this.documentation:Array.isArray(this.documentation)&&(e=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${e==null?``:`

More info: ${e}
`}`}},d=(e=>(e.PREVIEW_CLIENT_LOGGER=`PREVIEW_CLIENT-LOGGER`,e.PREVIEW_CHANNELS=`PREVIEW_CHANNELS`,e.PREVIEW_CORE_EVENTS=`PREVIEW_CORE-EVENTS`,e.PREVIEW_INSTRUMENTER=`PREVIEW_INSTRUMENTER`,e.PREVIEW_API=`PREVIEW_API`,e.PREVIEW_REACT_DOM_SHIM=`PREVIEW_REACT-DOM-SHIM`,e.PREVIEW_ROUTER=`PREVIEW_ROUTER`,e.PREVIEW_THEMING=`PREVIEW_THEMING`,e.RENDERER_HTML=`RENDERER_HTML`,e.RENDERER_PREACT=`RENDERER_PREACT`,e.RENDERER_REACT=`RENDERER_REACT`,e.RENDERER_SERVER=`RENDERER_SERVER`,e.RENDERER_SVELTE=`RENDERER_SVELTE`,e.RENDERER_VUE=`RENDERER_VUE`,e.RENDERER_VUE3=`RENDERER_VUE3`,e.RENDERER_WEB_COMPONENTS=`RENDERER_WEB-COMPONENTS`,e))(d||{}),f=class extends u{constructor(e){super(),this.data=e,this.category=`PREVIEW_API`,this.code=1}template(){return e`
    Couldn't find story matching id '${this.data.storyId}' after HMR.
    - Did you just rename a story?
    - Did you remove it from your CSF file?
    - Are you sure a story with the id '${this.data.storyId}' exists?
    - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
    - Also check the browser console and terminal for potential error messages.`}},p=class extends u{constructor(e){super(),this.data=e,this.category=`PREVIEW_API`,this.code=2,this.documentation=`https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function`}template(){return e`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:``}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};export{p as ImplicitActionsDuringRendering,l as v4_default};