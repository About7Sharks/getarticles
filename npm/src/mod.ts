import * as dntShim from "./_dnt.shims.js";

type Info = { user: string, repo: string, article?: string }

export const repoUrl = ({
  user,
  repo,
}: Info): string => {
  return `https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`;
};
// helper function to get an article url
export const getArticle = async ({
  user,
  repo,
  article = "README",
}: Info) => {
  // if includes .md, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  let data: any = await dntShim.fetch(
    `https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`,
  );
  data = await data.text();
  return data;
};
export const getArticles = async ({ user, repo }: Info) => {
  let data = await dntShim.fetch(repoUrl({ user, repo }));
  let json:any = await data.json();
  let files = json.tree;
  let articles = files.filter((file: any) => file.path.includes(".md"));
  let articlePromises = articles.map((article: any) =>
    getArticle({ article: article.path, user, repo }),
  );
  let allArticles = await Promise.all(articlePromises);
  return allArticles;
};
