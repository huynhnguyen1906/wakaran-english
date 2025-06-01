import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function middleware(request: NextRequest) {
	console.log("🌐 Middleware - URL:", request.url);
	console.log("🌐 Middleware - Accept-Language:", request.headers.get("accept-language"));
	console.log("🌐 Middleware - Default Locale:", routing.defaultLocale);

	return intlMiddleware(request);
}

export default middleware;

export const config = {
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
