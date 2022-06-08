import { default as fetch } from "node-fetch";
export { default as fetch, type RequestInit } from "node-fetch";
export declare const dntGlobalThis: Omit<typeof globalThis, "fetch"> & {
    fetch: typeof fetch;
};
