import { createBilditMiddleware } from "@bildit-platform/nextjs";

export const middleware = createBilditMiddleware();

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};