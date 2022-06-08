import { Deno } from "@deno/shim-deno";
export { Deno } from "@deno/shim-deno";
import { default as fetch } from "node-fetch";
export { default as fetch, type RequestInit } from "node-fetch";
export declare const dntGlobalThis: Omit<typeof globalThis, "fetch" | "Deno"> & {
    Deno: typeof Deno;
    fetch: typeof fetch;
};
