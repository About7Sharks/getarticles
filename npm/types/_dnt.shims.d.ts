import { default as fetch, Response } from "node-fetch";
export { default as fetch, type Request, Response } from "node-fetch";
export declare const dntGlobalThis: Omit<typeof globalThis, "fetch" | "Response"> & {
    fetch: typeof fetch;
    Response: typeof Response;
};
