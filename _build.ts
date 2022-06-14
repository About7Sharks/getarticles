import {build, emptyDir} from 'https://deno.land/x/dnt@0.23.0/mod.ts';
await emptyDir('./npm');

await build({
  scriptModule: false,
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  shims:{
    deno: "dev",
    custom: [{
      package: {
        name: 'node-fetch',
        version: '^3.2.4',
      },
      typesPackage: {
        name: '@types/node-fetch',
        version: '2.6.1',
      },
      globalNames: [{
        name: 'fetch',
        exportName: 'default',
      }, {
        name: 'Request',
        typeOnly: true,
      }, {
        name: 'Response',
      }],
    }],
  },
  compilerOptions: {
    target: 'ES2021',
  },
  package:{
    name:"@about7sharks/get-articles",
    version:"0.0.3",
    description:"A small library to get articles from Github",
    license:"MIT",
    engines: {
      node: '>=16.6.0',
    },
    devDependencies: {
      '@types/node': '16.x.x',
    },
    files: [
      'esm/*',
      'types/*',
    ],
  },

})
Deno.copyFileSync('README.md', './npm/README.md');
