import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  validateEmailVerificationToken,
  markEmailAsVerified,
} from "@/lib/auth/email-verification";

// Input validation schema
const confirmVerificationSchema = z.object({
  token: z.string().min(1, "Token is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = confirmVerificationSchema.parse(body);
    const { token } = validatedData;

    // Validate the verification token
    const user = await validateEmailVerificationToken(token);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired verification token.",
        },
        { status: 400 },
      );
    }

    // Check if email is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        {
          success: true,
          message: "Email is already verified.",
        },
        { status: 200 },
      );
    }

    // Mark email as verified
    await markEmailAsVerified(user.id);

    // Log for development
    if (process.env.NODE_ENV === "development") {
      console.log(`Email verified for user: ${user.email}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email verified successfully!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email verification error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input data",
          details: error.issues,
        },
        { status: 400 },
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: "Failed to verify email. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// GET method for token validation (useful for frontend to check token validity)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "Token is required",
        },
        { status: 400 },
      );
    }

    // Validate the verification token
    const user = await validateEmailVerificationToken(token);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired verification token.",
        },
        { status: 400 },
      );
    }

    // Check if email is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        {
          success: true,
          message: "Email is already verified.",
          alreadyVerified: true,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Token is valid and ready for verification.",
        user: {
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Token validation error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to validate token. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// Handle unsupported methods
export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
