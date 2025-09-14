import * as crypto from "crypto";
import { prisma } from "../prisma";

export function generateResetToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function hashResetToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createPasswordResetToken(email: string) {
  const token = generateResetToken();
  const hashedToken = hashResetToken(token);
  const expires = new Date(Date.now() + 15 * 60 * 1000);

  // Update user with reset token
  await prisma.user.update({
    where: { email },
    data: {
      resetPasswordToken: hashedToken,
      resetPasswordExpires: expires,
    },
  });

  return {
    token,
    expires,
  };
}

export async function validateResetToken(token: string) {
  const hashedToken = hashResetToken(token);

  const user = await prisma.user.findFirst({
    where: {
      resetPasswordToken: hashedToken,
      resetPasswordExpires: {
        gt: new Date(),
      },
    },
  });

  return user;
}

export async function clearResetToken(userId: string) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      resetPasswordToken: null,
      resetPasswordExpires: null,
    },
  });
}

export async function cleanupExpiredTokens() {
  await prisma.user.updateMany({
    where: {
      resetPasswordExpires: {
        lt: new Date(),
      },
    },
    data: {
      resetPasswordToken: null,
      resetPasswordExpires: null,
    },
  });
}
