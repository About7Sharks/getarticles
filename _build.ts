import {build, emptyDir} from 'https://deno.land/x/dnt/mod.ts';
await emptyDir('./npm');

await build({
  scriptModule: false,
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims:{
    deno:"dev",
    custom: [{
      package: {
        name: "node-fetch",
        version: "~3.1.0",
      },
      globalNames: [{
        // for the `fetch` global...
        name: "fetch",
        // use the default export of node-fetch
        exportName: "default",
      }, {
        name: "RequestInit",
        typeOnly: true, // only used in type declarations
      }],
    }, ]
  },
  package:{
    name:"@about7sharks/get-articles",
    version:"0.0.11",
    description:"A small library to get articles from Github",
    license:"MIT",
    devDependencies: {
      "@types/node": "16.11.26"
    },
  },

})
Deno.copyFileSync('README.md', './npm/README.md');
