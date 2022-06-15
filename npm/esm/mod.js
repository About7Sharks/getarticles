import * as dntShim from "./_dnt.shims.js";
import { matter, marked } from "./deps.js";
export const _repoData = async ({ user, repo, }) => {
    const resp = await dntShim.fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`);
    const data = await resp.json();
    return data;
};
// helper function to get an article url
export const getArticle = async ({ user, repo, article = "README", }) => {
    // if includes .md in filename, remove it
    if (article.includes(".md"))
        article = article.replace(".md", "");
    const resp = await dntShim.fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
    return {
        resp,
        content: await resp.text()
    };
};
export const getArticles = async ({ user, repo }) => {
    try {
        const { tree } = await _repoData({ user, repo });
        const articles = tree.filter((file) => file.path.includes(".md"));
        const articlePromises = articles.map((article) => getArticle({ article: article.path, user, repo }));
        const allArticles = await Promise.all(articlePromises);
        return allArticles;
    }
    catch {
        // console.error("Error getting articles, returning empty array. Ensure you have the correct user and repo name.");
        return [];
    }
};
// Converts a fetched article to html and the corresponding metadata
export const Markdown = (data) => {
    return data.map(({ content }) => {
        const { data } = matter(content);
        const html = marked.parse(content);
        return { data, html };
    });
};
