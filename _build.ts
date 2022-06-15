import {build, emptyDir} from 'https://deno.land/x/dnt@0.23.0/mod.ts';
await emptyDir('./npm');

await build({
  scriptModule: false,
  entryPoints: ['./mod.ts'],
  outDir: './npm',
  compilerOptions: {
    importHelpers: true,
    target: "ES2021",
  },
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
  package:{
    name:"@about7sharks/get-articles",
    version:"0.0.33",
    description:"A small library to get articles from Github",
    license:"MIT",
    dependencies: {
      "gray-matter": "^4.0.3",
      "marked": "^4",
    },
    devDependencies: {
      "@types/marked":"^4"
  }}

})
Deno.copyFileSync('README.md', './npm/README.md');
