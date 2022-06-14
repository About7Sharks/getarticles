import * as dntShim from "./_dnt.test_shims.js";
import { getArticles } from "./mod.js";
import { assertExists } from "./deps/deno.land/std@0.142.0/testing/asserts.js";
dntShim.Deno.test("getArticles", async () => {
    const articles = await getArticles({ user: "About7Sharks", repo: "Markdown" });
    assertExists(articles);
});
