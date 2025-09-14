"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
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
import { ArrowLeft, Lock, Eye, EyeOff, Loader2, CheckCircle, XCircle } from "lucide-react";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

type ResetStatus = 'loading' | 'valid' | 'invalid' | 'expired' | 'success' | 'error';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [status, setStatus] = useState<ResetStatus>('loading');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const password = watch('password');

  useEffect(() => {
    if (!token) {
      setStatus('invalid');
      return;
    }

    validateToken(token);
  }, [token]);

  const validateToken = async (resetToken: string) => {
    try {
      const response = await fetch('/api/auth/reset-password/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: resetToken }),
      });

      if (response.ok) {
        setStatus('valid');
      } else {
        const data = await response.json();
        if (data.error === 'Token expired') {
          setStatus('expired');
        } else {
          setStatus('invalid');
        }
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/reset-password/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        // Redirect to sign-in page after 3 seconds
        setTimeout(() => {
          router.push('/sign-in?reset=success');
        }, 3000);
      } else {
        setError(result.error || 'Failed to reset password');
      }
    } catch (err) {
      setError('An error occurred while resetting your password');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusContent = () => {
    switch (status) {
      case 'loading':
        return {
          icon: <Loader2 className="h-12 w-12 animate-spin text-blue-500" />,
          title: 'Validating Reset Link...',
          description: 'Please wait while we verify your reset token.',
        };
      case 'invalid':
        return {
          icon: <XCircle className="h-12 w-12 text-red-500" />,
          title: 'Invalid Reset Link',
          description: 'This password reset link is invalid or has been used already.',
        };
      case 'expired':
        return {
          icon: <XCircle className="h-12 w-12 text-red-500" />,
          title: 'Link Expired',
          description: 'This password reset link has expired. Please request a new one.',
        };
      case 'success':
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-500" />,
          title: 'Password Reset Successful!',
          description: 'Your password has been updated. You will be redirected to sign in.',
        };
      case 'error':
        return {
          icon: <XCircle className="h-12 w-12 text-red-500" />,
          title: 'Something Went Wrong',
          description: 'There was an error processing your request. Please try again.',
        };
      default:
        return null;
    }
  };

  // Show status screens for non-valid states
  if (status !== 'valid') {
    const content = getStatusContent();
    if (!content) return null;

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

          {/* Status Card */}
          <Card className="shadow-lg">
            <CardHeader className="space-y-4 text-center">
              <div className="flex justify-center">
                {content.icon}
              </div>
              <CardTitle className="text-2xl font-bold">
                {content.title}
              </CardTitle>
              <CardDescription>
                {content.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Action Buttons */}
              <div className="space-y-2">
                {status === 'success' ? (
                  <Button
                    onClick={() => router.push('/sign-in')}
                    className="w-full"
                  >
                    Continue to Sign In
                  </Button>
                ) : status === 'expired' || status === 'invalid' ? (
                  <Button
                    onClick={() => router.push('/auth/forgot-password')}
                    className="w-full"
                  >
                    Request New Reset Link
                  </Button>
                ) : null}

                <Button
                  onClick={() => router.push('/sign-in')}
                  variant="ghost"
                  className="w-full"
                >
                  Back to Sign In
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Show password reset form for valid tokens
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

        {/* Reset Password Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Reset Your Password
            </CardTitle>
            <CardDescription>
              Enter your new password below
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your new password"
                    className="pl-10 pr-10"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                        message: 'Password must contain uppercase, lowercase, and number',
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your new password"
                    className="pl-10 pr-10"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) =>
                        value === password || 'Passwords do not match',
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Password Requirements */}
              <div className="rounded-lg bg-muted p-3 text-sm">
                <p className="mb-2 font-medium">Password requirements:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>At least 8 characters long</li>
                  <li>Contains uppercase and lowercase letters</li>
                  <li>Contains at least one number</li>
                </ul>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating Password...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Update Password
                  </>
                )}
              </Button>
            </form>

            {/* Back to Sign In */}
            <div className="text-center">
              <Link
                href="/sign-in"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Remember your password? Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}