import { assertEquals } from "./deps.ts";
import handler from "./handler.ts";

Deno.test("Handler tests", async (t) => {
    await t.step('Should return "Invalid number!" on random input', async () => {
        const request = new Request('http://localhost:3000/not-a-number');
        const res = handler(request);
        const text = await res.text();
        assertEquals(text, 'Invalid number!');
        assertEquals(res.status, 400);
    });

    await t.step('Should return "Invalid number!" on negative input', async () => {
        const request = new Request('http://localhost:3000/-10');
        const res = handler(request);
        const text = await res.text();
        assertEquals(text, 'Invalid number!');
        assertEquals(res.status, 400);
    });

    await t.step('Should return "1" on 1', async () => {
        const request = new Request('http://localhost:3000/1');
        const res = handler(request);
        const text = await res.text();
        assertEquals(text, '1');
        assertEquals(res.status, 200);
    });

    await t.step('Should return "120" on 5', async () => {
        const request = new Request('http://localhost:3000/5');
        const res = handler(request);
        const text = await res.text();
        assertEquals(text, '120');
        assertEquals(res.status, 200);
    });

    await t.step('Should return "3628800" on 10', async () => {
        const request = new Request('http://localhost:3000/10');
        const res = handler(request);
        const text = await res.text();
        assertEquals(text, '3628800');
        assertEquals(res.status, 200);
    });
})