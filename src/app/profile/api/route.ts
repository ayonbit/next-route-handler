import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("authorization"));
  console.log(headersList.get("authorization"));

  console.log(theme);
  console.log(cookies().get("resultPerPage"));
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
