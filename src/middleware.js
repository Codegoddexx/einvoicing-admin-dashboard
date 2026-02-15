// src/middleware.js
export { default } from "next-auth/middleware";

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





// ```

// That's it! Just those lines. Remove everything else from the middleware.js file.

// ---

// ## 🌐 How to Access Your App (This is just info, not code):

// **Local:**
// ```
// http://localhost:3000/auth/login
// ```

// **Vercel:**
// ```
// https://einvoicing-admin-dashboard.vercel.app/auth/login
// ```

// **Codespaces:**
// ```
// https://bug-free-memory-px7gg9x955x26xr4-3000.app.github.dev/auth/login