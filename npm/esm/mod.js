import * as dntShim from "./_dnt.shims.js";
export const _repoData = async ({ user, repo, }) => {
    let data = await dntShim.fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`);
    data = await data.json();
    return data;
};
// helper function to get an article url
export const getArticle = async ({ user, repo, article = "README", }) => {
    // if includes .md in filename, remove it
    if (article.includes(".md"))
        article = article.replace(".md", "");
    let data = await dntShim.fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
    return {
        data,
        content: await data.text()
    };
    ;
};
export const getArticles = async ({ user, repo }) => {
    let { tree } = await _repoData({ user, repo });
    let articles = tree.filter((file) => file.path.includes(".md"));
    let articlePromises = articles.map((article) => getArticle({ article: article.path, user, repo }));
    let allArticles = await Promise.all(articlePromises);
    return allArticles;
};
