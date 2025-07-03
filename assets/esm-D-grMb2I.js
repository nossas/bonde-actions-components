function e(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Array.from(typeof e==`string`?[e]:e);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,``);var i=r.reduce(function(e,t){var n=t.match(/\n([\t ]+|(?!\s).)/g);return n?e.concat(n.map(function(e){var t,n;return(n=(t=e.match(/[\t ]/g))?.length)??0})):e},[]);if(i.length){var a=RegExp(`
[	 ]{`+Math.min.apply(Math,i)+`}`,`g`);r=r.map(function(e){return e.replace(a,`
`)})}r[0]=r[0].replace(/^\r?\n/,``);var o=r[0];return t.forEach(function(e,t){var n=o.match(/(?:^|\n)( *)$/),i=n?n[1]:``,a=e;typeof e==`string`&&e.includes(`
`)&&(a=String(e).split(`
`).map(function(e,t){return t===0?e:``+i+e}).join(`
`)),o+=a+r[t+1]}),o}var t=e;export{e as dedent,t as esm_default};