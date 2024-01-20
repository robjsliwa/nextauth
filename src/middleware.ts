import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

function savePathMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-path", request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const authResponse = await withMiddlewareAuthRequired(savePathMiddleware)(
    request,
    event
  );
  // If response is anything other than `NextResponse.next()`,
  // it means the request was not authenticated, so return that response immediately.
  if (authResponse !== NextResponse.next()) {
    return authResponse;
  }
}

export const config = {
  matcher: ["/dashboard", "/teams", "/users"],
};
