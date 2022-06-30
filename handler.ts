import factorial from "./factorial.ts";

export default (request: Request): Response => {
  const number = Number(request.url.split("/")[3]);

  if (isNaN(number) || number < 0) {
    return new Response("Invalid number!", { status: 400 });
  }
  const res = factorial(number);

  return new Response(String(res), { status: 200 });
};
