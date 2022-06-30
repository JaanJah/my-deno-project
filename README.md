# My deno project

Just a project to play around with Deno.


### Start server

```bash
# Start project
deno run --allow-net server.ts
```

### How to use

Open in browser

```
http://localhost:3000/4
```

And the response is the factorial of that number!

### Run tests

```bash
deno test **/*_test.ts
```

### Run benchmark

```bash
deno bench --unstable handler_bench.ts
```

Run on my local PC:

```
> deno bench --unstable handler_bench.ts
Check file:///home/jaan/Documents/my-deno-project/handler_bench.ts
cpu: Intel(R) Core(TM) i7-4770 CPU @ 3.40GHz
runtime: deno 1.23.1 (x86_64-unknown-linux-gnu)

file:///home/jaan/Documents/my-deno-project/handler_bench.ts
benchmark                                time (avg)             (min … max)       p75       p99      p995
--------------------------------------------------------------------------- -----------------------------
handler("http://localhost:3000/10")    4.93 µs/iter   (3.95 µs … 256.39 µs)   4.24 µs  22.46 µs  27.47 µs
```