declare type Info = {
    user: string;
    repo: string;
    article?: string;
};
export declare const repoUrl: ({ user, repo, }: Info) => string;
export declare const getArticle: ({ user, repo, article, }: Info) => Promise<any>;
export declare const getArticles: ({ user, repo }: Info) => Promise<any[]>;
export {};
