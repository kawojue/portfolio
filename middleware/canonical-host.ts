import { defineHandler } from "nitro";

const CANONICAL_HOST = "kawojue.dev";

/** Redirect www → apex so Google sees one URL, not “alternate page with canonical”. */
export default defineHandler((event) => {
    const hostHeader =
        event.req.headers.get("x-forwarded-host") ??
        event.req.headers.get("host") ??
        "";
    const hostname = hostHeader.split(":")[0]?.toLowerCase() ?? "";

    if (hostname !== `www.${CANONICAL_HOST}`) {
        return;
    }

    const url = new URL(event.req.url);
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
});
