import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Handle local development testing (optional but helpful)
  const isLandingSubdomain = hostname.startsWith('landing.zambranosauto.com');
  const isMainDomain = hostname.startsWith('www.zambranosauto.com') || hostname === 'zambranosauto.com';

  if (isLandingSubdomain) {
    // Check if the path is already prefixed to avoid double prefixing
    if (!url.pathname.startsWith('/landing')) {
      // Rewrite any path to the /landing directory
      url.pathname = `/landing${url.pathname === '/' ? '' : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Prevent accessing /landing from the main domains
  if (isMainDomain && url.pathname.startsWith('/landing')) {
    const newPath = url.pathname.replace('/landing', '') || '/';
    url.pathname = newPath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
