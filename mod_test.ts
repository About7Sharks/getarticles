import { getArticles } from "./mod.ts";
import { assertExists, assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("getArticles", async () => {
  const articles = await getArticles({user: "About7Sharks", repo: "Markdown"});
  assertExists(articles);
});
Deno.test("NA User Test", async () => {
  const articles = await getArticles({user: "NA", repo: "NA"});
  assertEquals(articles,[]);
});
