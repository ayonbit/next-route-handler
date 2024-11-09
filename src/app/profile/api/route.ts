import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  console.log(requestHeaders.get("authorization"));
  console.log(headersList.get("authorization"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
