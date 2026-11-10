import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { trackAIBotRequestForPixel } from "@bildit-platform/ai-pixel/nextjs";

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  await trackAIBotRequestForPixel(request, {
    params: { edge: "middleware" },
  });

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};