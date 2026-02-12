import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // You can add logic here later if needed
  },
  {
    pages: {
      signIn: "/auth/login",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
