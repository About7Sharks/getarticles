import * as dntShim from "./_dnt.shims.js";
export declare type Info = {
    user: string;
    repo: string;
    article?: string;
};
export declare const _repoData: ({ user, repo, }: Info) => Promise<unknown>;
export declare const getArticle: ({ user, repo, article, }: Info) => Promise<{
    resp: dntShim.Response;
    content: string;
}>;
export declare type Tree = {
    tree: Array<{
        path: string;
    }>;
};
export declare const getArticles: ({ user, repo }: Info) => Promise<{
    resp: dntShim.Response;
    content: string;
}[]>;
