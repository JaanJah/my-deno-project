import { serve } from "./deps.ts";
import handler from "./handler.ts";

const port = 3000;

await serve(handler, { port });