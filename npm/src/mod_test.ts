import * as dntShim from "./_dnt.test_shims.js";
import { getArticles, Markdown } from "./mod.js";
import { assertExists, assertEquals, assert } from "./deps.js";

dntShim.Deno.test("Get articles: For real user", async () => {
  const articles = await getArticles({ user: "About7Sharks", repo: "Markdown" });
  // Ensure articles exist
  assertExists(articles);
  // Make sure we have at least one article
  assert(articles.length > 0, "Article array is empty");
});
dntShim.Deno.test("Get articles for NA User", async () => {
  const articles = await getArticles({ user: "NA", repo: "NA" });
  assertEquals(articles, []);
});

dntShim.Deno.test("Render to HTML", async () => {
  const data = await getArticles({ user: "About7Sharks", repo: "Markdown" });
  const md= Markdown(data)
  assert(md.length > 0, "Markdown array is empty");
  assert(typeof md[0].data.title==="string", "should be string");
  assertExists(md);
})
