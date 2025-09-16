import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createPasswordResetToken } from "@/lib/auth/reset-tokens";
import { sendPasswordResetEmail } from "@/lib/auth/email-service";

// Validation schema
const resetRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = resetRequestSchema.parse(body);
    const { email } = validatedData;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Always return success to prevent email enumeration attacks
    // But only send email if user actually exists
    if (user) {
      try {
        // Generate reset token
        const { token, expires } = await createPasswordResetToken(
          email.toLowerCase(),
        );

        // Send password reset email
        await sendPasswordResetEmail(
          email.toLowerCase(),
          token,
          user.name || undefined,
        );


      } catch (error) {
        // Still return success to prevent information leakage
      }
    }

    // Always return the same response regardless of whether user exists
    return NextResponse.json(
      {
        success: true,
        message:
          "If an account with that email exists, we have sent a password reset link.",
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid input data",
          errors: error.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
      },
      { status: 500 },
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 },
  );
}
