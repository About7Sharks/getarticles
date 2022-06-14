export declare type Info = {
    user: string;
    repo: string;
    article?: string;
};
export declare const _repoData: ({ user, repo, }: Info) => Promise<any>;
export declare const getArticle: ({ user, repo, article, }: Info) => Promise<{
    data: any;
    content: any;
}>;
export declare const getArticles: ({ user, repo }: Info) => Promise<any[]>;
