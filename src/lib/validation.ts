import { z } from "zod";

export const phoneSchema = z.object({
  countryCode: z.string().min(1, "Please select a country "),
  phone: z
    .string()
    .min(10, "Phone number must be atleast 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only digits"),
});
