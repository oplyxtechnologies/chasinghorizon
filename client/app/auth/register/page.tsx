"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Lock, Mails, User, Phone } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = formData;

    if (!validatePhone(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Registration successful", data);
        // Optional: redirect after successful registration
      } else {
        console.error("Registration failed", data.message);
      }
    } catch (err) {
      console.error("Error during registration:", err);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-lg overflow-hidden">
        {/* Left */}
        <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
          <Image
            src="/login.jpg"
            alt="Background"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-5xl font-bold text-primary">
                    Register
                  </h2>
                  <p className="mt-2 text-base text-[#00000080]">
                    Create your account
                  </p>
                </div>

                <div className="relative mb-6">
                  <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                    Full Name
                  </label>
                  <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <User />
                    </div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-full pl-12 text-sm font-medium placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Email */}
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-full pl-12 text-sm font-medium placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative mb-6">
                  <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                    Phone Number
                  </label>
                  <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Phone />
                    </div>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="h-full pl-12 text-sm font-medium placeholder:text-gray-500"
                    />
                  </div>
                </div>

                {/* Password */}
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="h-full pl-12 pr-10 text-sm font-medium placeholder:text-gray-500"
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

                {/* Confirm Password */}
                <div className="relative mb-6">
                  <label className="absolute bg-white z-10 px-2 text-[10px] tracking-wide text-primary left-4 -top-2">
                    Confirm Password
                  </label>
                  <div className="relative mt-2 border border-primary rounded-lg h-[54px]">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Lock />
                    </div>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="h-full pl-12 pr-10 text-sm font-medium placeholder:text-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Register Button */}
                <div className="flex justify-center mb-8">
                  <Button
                    type="submit"
                    className="w-full sm:w-40 h-12 bg-primary text-white font-bold text-sm shadow-md"
                  >
                    REGISTER
                  </Button>
                </div>
              </form>

              {/* OR Separator */}
              <div className="flex items-center justify-center mb-8 gap-2">
                <Separator className="flex-1 max-w-[100px] sm:max-w-[150px]" />
                <span className="text-sm text-black">OR</span>
                <Separator className="flex-1 max-w-[100px] sm:max-w-[150px]" />
              </div>

              {/* Social Buttons */}
              <div className="flex justify-center gap-4 mb-6">
                {[
                  { icon: "/googlewhite.svg", alt: "Google" },
                  { icon: "/facebook.svg", alt: "Facebook" },
                ].map(({ icon, alt }) => (
                  <Button
                    key={alt}
                    className="w-[95px] h-[54px] bg-primary flex justify-center items-center"
                  >
                    <img src={icon} alt={alt} className="w-6 h-6" />
                  </Button>
                ))}
              </div>

              {/* Login Link */}
              <p className="text-center text-sm">
                <span className="text-black font-medium">
                  Already have an account?{" "}
                </span>
                <a href="login" className="font-bold text-black">
                  Login
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
