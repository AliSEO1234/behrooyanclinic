import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
const intlMiddleware = createMiddleware(routing);
export default createMiddleware(routing);
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (
    path.startsWith("/videos") ||
    path.startsWith("/images") ||
    path === "/health.ico" || 
    path === "/favicon.ico" || 
    path === "/robots.txt"
  ) {
    return NextResponse.next();
  }
  const locale = path.split("/")[1]
  if(locale === "ru"){
    const newUrl = new URL(req.url)
    newUrl.pathname = newUrl.pathname.replace(/^\/ru/, "/en")
    return NextResponse.redirect(newUrl , 308)
  }
  const response = intlMiddleware(req);
  return response || NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|robots.txt).*)",
    "/",
    "/(ru|en)/:path*",
  ],
};
