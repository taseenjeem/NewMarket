"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Mail, CheckCircle, XCircle, Loader2 } from "lucide-react";

type VerificationStatus =
  | "loading"
  | "success"
  | "error"
  | "expired"
  | "invalid";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [message, setMessage] = useState<string>("");
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState<string>("");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      setMessage("No verification token provided");
      return;
    }

    verifyEmail(token);
  }, [token]);

  const verifyEmail = async (verificationToken: string) => {
    try {
      const response = await fetch("/api/auth/verify-email/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: verificationToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Your email has been successfully verified!");
        // Redirect to sign-in page after 3 seconds
        setTimeout(() => {
          router.push("/auth/sign-in?verified=true");
        }, 3000);
      } else {
        if (data.error === "Token expired") {
          setStatus("expired");
          setMessage(
            "Your verification link has expired. Please request a new one.",
          );
        } else {
          setStatus("error");
          setMessage(data.error || "Email verification failed");
        }
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred during verification");
    }
  };

  const handleResendVerification = async () => {
    setIsResending(true);
    setResendMessage("");

    try {
      const response = await fetch("/api/auth/verify-email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok) {
        setResendMessage("Verification email sent! Please check your inbox.");
      } else {
        setResendMessage(data.error || "Failed to send verification email");
      }
    } catch (error) {
      setResendMessage("An error occurred while sending verification email");
    } finally {
      setIsResending(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "loading":
        return <Loader2 className="h-12 w-12 animate-spin text-blue-500" />;
      case "success":
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      case "error":
      case "expired":
      case "invalid":
        return <XCircle className="h-12 w-12 text-red-500" />;
      default:
        return <Mail className="h-12 w-12 text-gray-500" />;
    }
  };

  const getStatusTitle = () => {
    switch (status) {
      case "loading":
        return "Verifying Your Email...";
      case "success":
        return "Email Verified!";
      case "expired":
        return "Link Expired";
      case "error":
        return "Verification Failed";
      case "invalid":
        return "Invalid Link";
      default:
        return "Email Verification";
    }
  };

  const getStatusDescription = () => {
    switch (status) {
      case "loading":
        return "Please wait while we verify your email address...";
      case "success":
        return "You will be redirected to the sign-in page shortly.";
      case "expired":
        return "Your verification link has expired. Request a new one below.";
      case "error":
        return "There was a problem verifying your email address.";
      case "invalid":
        return "The verification link is invalid or malformed.";
      default:
        return "Verify your email address to continue.";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Back to Home */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to New Market
          </Link>
        </div>

        {/* Verification Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center">{getStatusIcon()}</div>
            <CardTitle className="text-2xl font-bold">
              {getStatusTitle()}
            </CardTitle>
            <CardDescription>{getStatusDescription()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Status Message */}
            {message && (
              <Alert variant={status === "success" ? "default" : "destructive"}>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {/* Resend Verification (for expired/error states) */}
            {(status === "expired" || status === "error") && (
              <div className="space-y-3">
                <Button
                  onClick={handleResendVerification}
                  disabled={isResending}
                  className="w-full"
                  variant="outline"
                >
                  {isResending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Resend Verification Email
                    </>
                  )}
                </Button>

                {resendMessage && (
                  <Alert>
                    <AlertDescription>{resendMessage}</AlertDescription>
                  </Alert>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              {status === "success" ? (
                <Button
                  onClick={() => router.push("/auth/sign-in")}
                  className="w-full"
                >
                  Continue to Sign In
                </Button>
              ) : status !== "loading" ? (
                <Button
                  onClick={() => router.push("/auth/sign-up")}
                  variant="outline"
                  className="w-full"
                >
                  Back to Sign Up
                </Button>
              ) : null}

              <Button
                onClick={() => router.push("/auth/sign-in")}
                variant="ghost"
                className="w-full"
              >
                Already have an account? Sign In
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="text-muted-foreground text-center text-sm">
          <p>
            Didn't receive the email? Check your spam folder or{" "}
            <Link
              href="/help-and-support"
              className="hover:text-foreground underline"
            >
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
