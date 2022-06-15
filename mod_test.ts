import { getArticles, Markdown } from "./mod.ts";
import { assertExists, assertEquals, assert } from "./deps.ts";

Deno.test("Get articles: For real user", async () => {
  const articles = await getArticles({ user: "About7Sharks", repo: "Markdown" });
  // Ensure articles exist
  assertExists(articles);
  // Make sure we have at least one article
  assert(articles.length > 0, "Article array is empty");
});
Deno.test("Get articles for NA User", async () => {
  const articles = await getArticles({ user: "NA", repo: "NA" });
  assertEquals(articles, []);
});

Deno.test("Render to HTML", async () => {
  const data = await getArticles({ user: "About7Sharks", repo: "Markdown" });
  const md= Markdown(data)
  assert(md.length > 0, "Markdown array is empty");
  assert(typeof md[0].data.title==="string", "should be string");
  assertExists(md);
})
