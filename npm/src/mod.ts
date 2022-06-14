import * as dntShim from "./_dnt.shims.js";
export type Info = { user: string, repo: string, article?: string }

export const _repoData = async ({
  user,
  repo,
}: Info) => {
  const resp = await dntShim.fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`)
  const data = await resp.json();
  return data;
};
// helper function to get an article url
export const getArticle = async ({
  user,
  repo,
  article = "README",
}: Info) => {
  // if includes .md in filename, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  const resp = await dntShim.fetch(
    `https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`,
  );
  return {
    resp,
    content: await resp.text()
  };
};
export type Tree ={ tree: Array<{ path: string }> }
export const getArticles = async ({ user, repo }: Info) => {
  const { tree } = await _repoData({ user, repo }) as Tree;
  const articles = tree.filter((file) => file.path.includes(".md"));
  const articlePromises = articles.map((article) =>
    getArticle({ article: article.path, user, repo }),
  );
  const allArticles = await Promise.all(articlePromises);
  return allArticles;
};
