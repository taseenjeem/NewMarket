import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Define protected routes
const protectedRoutes = ["/profile", "/admin", "/api/user", "/api/admin"];

// Define routes that require email verification
const emailVerificationRequiredRoutes = ["/profile", "/admin", "/api/user", "/api/admin"];

// Define admin-only routes
const adminRoutes = ["/admin", "/api/admin"];

// Define auth routes (redirect if already authenticated)
const authRoutes = [
  "/sign-in",
  "/sign-up",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verify-email",
];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Check if user is trying to access auth pages while logged in
    if (token && authRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Check email verification for routes that require it
    if (token && emailVerificationRequiredRoutes.some((route) => pathname.startsWith(route))) {
      if (!token.emailVerified) {
        // Redirect to email verification page
        return NextResponse.redirect(new URL("/auth/verify-email", req.url));
      }
    }

    // Check if user is trying to access admin routes
    if (adminRoutes.some((route) => pathname.startsWith(route))) {
      if (!token?.isAdmin) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (!protectedRoutes.some((route) => pathname.startsWith(route))) {
          return true;
        }

        return !!token;
      },
    },
    pages: {
      signIn: "/sign-in",
    },
  },
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth.js routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
