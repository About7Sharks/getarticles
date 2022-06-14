import { getArticles } from "./mod.ts";
import { assertExists } from "https://deno.land/std/testing/asserts.ts";

Deno.test("getArticles", async () => {
  const articles = await getArticles({user: "About7Sharks", repo: "Markdown"});
  assertExists(articles);
});
