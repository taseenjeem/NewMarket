import crypto from "crypto";
import { prisma } from "@/lib/prisma";

/**
 * Generate a cryptographically secure email verification token
 */
export function generateEmailVerificationToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Hash an email verification token using SHA-256
 */
export function hashEmailVerificationToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Create and store an email verification token for a user
 * @param userId - The user's ID
 * @returns The plain text token (to be sent via email)
 */
export async function createEmailVerificationToken(
  userId: string,
): Promise<string> {
  const token = generateEmailVerificationToken();
  const hashedToken = hashEmailVerificationToken(token);
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

  await prisma.user.update({
    where: { id: userId },
    data: {
      emailVerificationToken: hashedToken,
      emailVerificationExpires: expires,
    },
  });

  return token;
}

/**
 * Validate an email verification token
 * @param token - The plain text token from the email link
 * @returns The user if token is valid, null otherwise
 */
export async function validateEmailVerificationToken(token: string) {
  const hashedToken = hashEmailVerificationToken(token);

  const user = await prisma.user.findFirst({
    where: {
      emailVerificationToken: hashedToken,
      emailVerificationExpires: {
        gt: new Date(),
      },
    },
  });

  return user;
}

/**
 * Mark user's email as verified and clear verification token
 * @param userId - The user's ID
 */
export async function markEmailAsVerified(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: {
      emailVerified: new Date(),
      emailVerificationToken: null,
      emailVerificationExpires: null,
    },
  });
}

/**
 * Clean up expired email verification tokens
 * This should be run periodically (e.g., via a cron job)
 */
export async function cleanupExpiredEmailVerificationTokens(): Promise<number> {
  const result = await prisma.user.updateMany({
    where: {
      emailVerificationExpires: {
        lt: new Date(),
      },
    },
    data: {
      emailVerificationToken: null,
      emailVerificationExpires: null,
    },
  });

  return result.count;
}

/**
 * Check if a user's email is verified
 * @param userId - The user's ID
 * @returns True if email is verified, false otherwise
 */
export async function isEmailVerified(userId: string): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { emailVerified: true },
  });

  return !!user?.emailVerified;
}

/**
 * Get user by email for verification purposes
 * @param email - The user's email
 * @returns The user if found, null otherwise
 */
export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      emailVerified: true,
      name: true,
    },
  });
}
