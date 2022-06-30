import handler from "./handler.ts";

Deno.bench('handler("http://localhost:3000/10")', async () => {
    const request = new Request('http://localhost:3000/10');
    const res = handler(request);
    await res.text();
});