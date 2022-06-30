import { serve } from "./deps.ts";
import factorial from "./factorial.ts";

const port = 3000;

const handler = (request: Request): Response => {
    const number = Number(request.url.split('/')[3]);

    if (isNaN(number)) {
        return new Response('Not a number!', { status: 400 });
    }
    const res = factorial(number);

    return new Response(`Answer is ${res}`, { status: 200});
}

await serve(handler, { port });