import { NextResponse } from "next/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
