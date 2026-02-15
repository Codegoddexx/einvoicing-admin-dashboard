import { NextResponse } from 'next/server';

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Allow auth routes to pass through
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }
  
  // Check if user has a session token
  const token = request.cookies.get('next-auth.session-token') 
    || request.cookies.get('__Secure-next-auth.session-token');
  
  // Protected routes
  const protectedPaths = [
    '/dashboard',
    '/clients',
    '/activity',
    '/library',
    '/security',
    '/schedules',
    '/payouts',
    '/account',
    '/settings',
  ];
  
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));
  
  if (isProtectedPath && !token) {
    // Redirect to login if no token
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api/auth (auth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};