import { enhanceMiddlewareWithBildit } from "@bildit-platform/nextjs";
import {
  trackAIBotRequestForPixel,
} from "@bildit-platform/ai-pixel/nextjs";

import { NextRequest, NextResponse } from "next/server";

export async function customMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  await trackAIBotRequestForPixel(request, {
    params: { edge: "middleware" },
  });

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const proxy = enhanceMiddlewareWithBildit(customMiddleware);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};