import { Deno } from "@deno/shim-deno";
export { Deno } from "@deno/shim-deno";
import { default as fetch, Response } from "node-fetch";
export { default as fetch, type Request, Response } from "node-fetch";
export declare const dntGlobalThis: Omit<typeof globalThis, "fetch" | "Response" | "Deno"> & {
    Deno: typeof Deno;
    fetch: typeof fetch;
    Response: typeof Response;
};
