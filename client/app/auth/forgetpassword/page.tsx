"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mails } from "lucide-react";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Send reset link to:", email);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl mx-auto flex shadow-lg rounded-2xl overflow-hidden bg-white border border-gray-200">
        {/* Left: Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100 p-8">
          <Image
            src="/forgetpassword.svg"
            alt="Forgot Password Illustration"
            width={480}
            height={480}
            className="object-contain max-h-[420px]"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-2 text-center text-primary">
            Forgot your password?
          </h2>
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Enter your email address and we’ll send you a reset link.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                Email
              </label>
              <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                  <Mails />
                </div>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-full pl-12 text-sm font-medium placeholder:text-gray-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-[54px] rounded-xl text-[15px] font-semibold tracking-wide"
            >
              Send Reset Link
            </Button>
          </form>

          <div className="text-sm text-center mt-4">
            Remembered your password?{" "}
            <Link
              href="login"
              className="text-primary underline underline-offset-4"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
