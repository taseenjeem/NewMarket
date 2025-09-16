"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TestAuthPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Authentication Test Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Session Status:</h3>
            <p className="text-sm bg-gray-100 p-2 rounded">{status}</p>
          </div>
          
          {session ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">User Information:</h3>
                <div className="text-sm bg-gray-100 p-4 rounded space-y-2">
                  <p><strong>ID:</strong> {session.user?.id}</p>
                  <p><strong>Email:</strong> {session.user?.email}</p>
                  <p><strong>Name:</strong> {session.user?.name}</p>
                  <p><strong>Email Verified:</strong> {session.user?.emailVerified ? 'Yes' : 'No'}</p>
                  <p><strong>Is Admin:</strong> {session.user?.isAdmin ? 'Yes' : 'No'}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Test Protected Routes:</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/profile">
                    <Button variant="outline" size="sm">Profile (Protected)</Button>
                  </Link>
                  <Link href="/admin">
                    <Button variant="outline" size="sm">Admin (Protected)</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p>You are not signed in.</p>
              <div className="flex gap-2">
                <Link href="/auth/sign-in">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/auth/sign-up">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t">
            <Link href="/">
              <Button variant="ghost">← Back to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}