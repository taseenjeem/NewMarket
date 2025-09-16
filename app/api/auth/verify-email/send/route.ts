import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  getUserByEmail,
  createEmailVerificationToken,
} from "@/lib/auth/email-verification";
import { sendEmailVerification } from "@/lib/auth/email-service";

// Input validation schema
const sendVerificationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = sendVerificationSchema.parse(body);
    const { email } = validatedData;

    // Check if user exists
    const user = await getUserByEmail(email);

    if (!user) {
      // Return success even if user doesn't exist to prevent email enumeration
      return NextResponse.json(
        {
          success: true,
          message:
            "If an account with this email exists, a verification email has been sent.",
        },
        { status: 200 },
      );
    }

    // Check if email is already verified
    if (user.emailVerified) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is already verified.",
        },
        { status: 400 },
      );
    }

    // Generate verification token
    const verificationToken = await createEmailVerificationToken(user.id);

    // Send verification email
    await sendEmailVerification(
      email,
      verificationToken,
      user.name || undefined,
    );

    return NextResponse.json(
      {
        success: true,
        message: "Verification email sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {

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
        error: "Failed to send verification email. Please try again later.",
      },
      { status: 500 },
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
