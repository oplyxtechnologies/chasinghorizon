"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mails, Eye, EyeOff, Lock } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const socialLogins = [
    { id: 1, icon: "/googlewhite.svg", alt: "Google G Logo" },
    { id: 2, icon: "/facebook.svg", alt: "Facebook Logo" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        // Redirect or update UI here
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
          <Image
            src="/login.jpg"
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 relative">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardContent className="p-0 relative">
              <form onSubmit={handleSubmit}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight">
                    Welcome
                  </h2>
                  <p className="mt-2 text-base text-[#00000080]">
                    Login with Email
                  </p>
                </div>

                {/* Email Field */}
                <div className="relative mb-6">
                  <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                    Email Id
                  </label>
                  <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Mails />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-full pl-12 text-sm font-medium placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="relative mb-6">
                  <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                    Password
                  </label>
                  <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Lock />
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="h-full pl-12 pr-10 text-sm font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Forgot password */}
                <div className="text-right text-xs mb-6">
                  <a
                    href="forgetpassword"
                    className="text-[#00000080] font-bold"
                  >
                    Forgot your password?
                  </a>
                </div>

                {/* Login Button */}
                <div className="flex justify-center mb-8">
                  <Button
                    type="submit"
                    className="w-full sm:w-40 h-12 bg-primary text-white font-bold text-sm shadow-md"
                  >
                    LOGIN
                  </Button>
                </div>
              </form>

              {/* OR Separator */}
              <div className="flex items-center justify-center mb-8 gap-2">
                <Separator className="flex-1 max-w-[100px] sm:max-w-[150px]" />
                <span className="text-sm text-black">OR</span>
                <Separator className="flex-1 max-w-[100px] sm:max-w-[150px]" />
              </div>

              {/* Social Logins */}
              <div className="flex justify-center gap-4 mb-6">
                {socialLogins.map(({ id, icon, alt }) => (
                  <Button
                    key={id}
                    className="w-[95px] h-[54px] bg-primary rounded-lg flex items-center justify-center"
                  >
                    <Image src={icon} alt={alt} className="w-6 h-6" />
                  </Button>
                ))}
              </div>

              {/* Register Link */}
              <p className="text-center text-sm">
                <span className="text-black font-medium">
                  Don&apos;t have an account?{" "}
                </span>
                <a href="register" className="font-bold text-black">
                  Register Now
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
