"use client";

import React, { useRef, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const OTP_LENGTH = 6;

const OtpVerifyPage = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [resendTimer, setResendTimer] = useState(30);
  const [submitting, setSubmitting] = useState(false);

  // Countdown for resend OTP
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  // Handle OTP input
  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Submit OTP
  const handleSubmit = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length !== OTP_LENGTH) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: fullOtp }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("OTP verified successfully!");
        // Optional: router.push('/dashboard');
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("OTP verify error:", error);
      }
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    if (resendTimer > 0) return;
    setResendTimer(30);

    try {
      const res = await fetch("/api/resend-otp", { method: "POST" });

      if (res.ok) {
        toast.message("OTP resent successfully.");
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("OTP resend error:", error);
      }
      toast.error("Unable to resend OTP.");
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-center text-primary">
        Verify OTP
      </h2>
      <p className="text-sm text-gray-600 text-center">
        Enter the 6-digit code sent to you
      </p>

      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
        {otp.map((digit, i) => (
          <Input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg font-semibold border border-gray-300 focus:border-primary focus-visible:ring-primary focus-visible:ring-1"
          />
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={otp.some((d) => d === "") || submitting}
        className="w-full bg-primary hover:bg-primary/90 text-white"
        size="lg"
      >
        {submitting ? "Verifying..." : "Verify OTP"}
      </Button>

      <p className="text-center text-sm text-muted-foreground mt-2">
        Didn&apos;t receive the code?{" "}
        <button
          onClick={handleResend}
          disabled={resendTimer > 0}
          className={`font-medium text-primary ${
            resendTimer > 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Resend {resendTimer > 0 ? `in ${resendTimer}s` : ""}
        </button>
      </p>
    </div>
  );
};

export default OtpVerifyPage;
