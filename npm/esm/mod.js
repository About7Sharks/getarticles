import * as dntShim from "./_dnt.shims.js";
export const repoUrl = ({ user, repo, }) => {
    return `https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`;
};
// helper function to get an article url
export const getArticle = async ({ user, repo, article = "README", }) => {
    // if includes .md, remove it
    if (article.includes(".md"))
        article = article.replace(".md", "");
    let data = await dntShim.fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
    data = await data.text();
    return data;
};
export const getArticles = async ({ user, repo }) => {
    let data = await dntShim.fetch(repoUrl({ user, repo }));
    let json = await data.json();
    let files = json.tree;
    let articles = files.filter((file) => file.path.includes(".md"));
    let articlePromises = articles.map((article) => getArticle({ article: article.path, user, repo }));
    let allArticles = await Promise.all(articlePromises);
    return allArticles;
};
