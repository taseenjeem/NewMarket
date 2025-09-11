"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  resetPasswordStart,
  resetPasswordSuccess,
  clearError,
} from "@/store/slices/authSlice";

type ResetPasswordFormData = {
  email: string;
};

export default function ResetPasswordPage() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ResetPasswordFormData>();

  const onSubmit = async (data: ResetPasswordFormData) => {
    dispatch(resetPasswordStart());
    dispatch(clearError());

    // TODO: Implement actual password reset logic
    setTimeout(() => {
      dispatch(resetPasswordSuccess());
      setIsSubmitted(true);
      console.log("Password reset requested for:", data.email);
    }, 1000);
  };

  if (isSubmitted) {
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

          {/* Success Card */}
          <Card className="shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Check your email
              </CardTitle>
              <CardDescription className="text-center">
                We've sent a password reset link to
                <br />
                <span className="text-foreground font-medium">
                  {getValues("email")}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Clock className="h-4 w-4" />
                <AlertDescription>
                  The reset link will expire in 15 minutes for security reasons.
                </AlertDescription>
              </Alert>

              <div className="text-muted-foreground space-y-3 text-sm">
                <p>If you don't see the email in your inbox:</p>
                <ul className="ml-4 list-inside list-disc space-y-1">
                  <li>Check your spam or junk folder</li>
                  <li>Make sure you entered the correct email address</li>
                  <li>Wait a few minutes for the email to arrive</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Try a different email
                </Button>

                <div className="text-center text-sm">
                  <span className="text-muted-foreground">
                    Remember your password?{" "}
                  </span>
                  <Link
                    href="/sign-in"
                    className="text-primary font-medium hover:underline"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="from-background via-muted/20 to-background flex min-h-screen items-center justify-center bg-gradient-to-br p-4">
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

        {/* Reset Password Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Reset your password
            </CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Reset Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="text-muted-foreground absolute left-3 top-3 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
                <p className="text-muted-foreground text-xs">
                  We'll send reset instructions to this email address
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending reset link..." : "Send reset link"}
              </Button>
            </form>

            {/* Back to Sign In */}
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Remember your password?{" "}
              </span>
              <Link
                href="/sign-in"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </Link>
            </div>

            {/* Additional Help */}
            <div className="border-border border-t pt-4">
              <div className="text-muted-foreground text-center text-sm">
                <p className="mb-2">Need help?</p>
                <Link
                  href="/help-and-support"
                  className="text-primary hover:underline"
                >
                  Contact our support team
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Note */}
        <div className="text-muted-foreground text-center text-xs">
          <p>
            For security reasons, we don't reveal whether an email address is
            registered with us. If you don't receive an email, the address may
            not be associated with an account.
          </p>
        </div>
      </div>
    </div>
  );
}
