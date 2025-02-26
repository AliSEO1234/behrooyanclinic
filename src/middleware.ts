import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (
    path.startsWith("/videos") ||
    path.startsWith("/health.ico") ||
    path.startsWith("/robots.txt")
  ) {
    return NextResponse.next();
  }
  const intlMiddleware = createMiddleware(routing);
  const intlResponse = intlMiddleware(req);
  const res = intlResponse || NextResponse.next();
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
    "/(ru|en)/:path*",
  ],
};
