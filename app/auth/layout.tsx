import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - New Market",
  description:
    "Sign in or create an account to access your New Market profile and enjoy personalized shopping experience.",
  keywords: [
    "authentication",
    "sign in",
    "sign up",
    "New Market",
    "account",
    "login",
  ],
  openGraph: {
    title: "Authentication - New Market",
    description:
      "Sign in or create an account to access your New Market profile and enjoy personalized shopping experience.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
