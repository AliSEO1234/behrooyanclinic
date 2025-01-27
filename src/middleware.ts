import { NextRequest, NextResponse } from "next/server";

const setLanguage = (req: NextRequest, res: NextResponse) => {
  const langCookie = req.cookies.get("language");
  if (!langCookie) {
    res.cookies.set("language", "en", {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });
  }
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  setLanguage(req, res);
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
