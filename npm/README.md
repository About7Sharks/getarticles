# Github Blog API

I highly recommend using deno to write libraries that can be used in the overall javascript ecosystem. By utilizing deno's built in tools and TypeScript, you can
easily write libraries that can be used in the browser, node, and Deno.

> ⚠️ This package is written in Deno and transpiled with
> [dnt (Deno to Node Transform)](https://github.com/denoland/dnt). Highly
> unstable and subject to changes.

This Library fetches markdown articles by specifying a repo and a user to fetch
it from.

## Usage

```js
const info = await getArticles({ user: "about7sharks", repo: "Markdown" });
```
## Installation

### Deno
If using in deno you can use a url import directly.

```js
import { getArticles } from "https://esm.sh/@about7sharks/get-articles";
```
### Node
If using in node you first need to install the package.
```bash
npm i -g @about7sharks/get-articles
```
```js
import { getArticles } from "@about7sharks/get-articles";
```

## Build

Builds out for node/browser and publish to npm

```bash
deno run -A _build.ts
cd npm 
npm publish --access public
```
