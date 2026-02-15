// src/middleware.js
cat > src/proxy.js << 'EOF'
// export { default } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export function proxy(request) {
  // For NextAuth, just let it pass through to the auth routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/activity/:path*",
    "/library/:path*",
    "/security/:path*",
    "/schedules/:path*",
    "/payouts/:path*",
    "/account/:path*",
    "/settings/:path*",
  ],
};
