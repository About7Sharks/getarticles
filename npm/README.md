# Github Blog API
This Library fetches markdown articles by specifying a repo and a user to fetch it from.

```
let info = await getArticles({user: "about7sharks",repo:'Markdown'});
```



### Build out for node and publish to npm
```
deno run -A _build.ts
cd npm 
npm publish --access public
```
