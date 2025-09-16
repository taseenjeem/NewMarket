import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createEmailVerificationToken } from "@/lib/auth/email-verification";
import { sendEmailVerification } from "@/lib/auth/email-service";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, password } =
      await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        password: hashedPassword,
        // Add phone if provided
        ...(phone && { phone }),
      },
    });

    // Generate and send email verification
    try {
      const verificationToken = await createEmailVerificationToken(user.id);
      await sendEmailVerification(
        email,
        verificationToken,
        user.name ?? undefined,
      );

    } catch (emailError) {
      // Don't fail registration if email sending fails
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message:
          "User created successfully. Please check your email to verify your account.",
        user: userWithoutPassword,
        emailVerificationSent: true,
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
