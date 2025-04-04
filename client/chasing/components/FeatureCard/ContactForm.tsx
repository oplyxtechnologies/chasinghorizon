"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    console.log("Form Data:", data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="text-center items-center justify-center min-h-screen px-4 md:px-12  flex flex-col space-y-10 ">
      <h2 className="text-5xl font-medium tracking-tight -mt-10">
        Any questions? Feel free to ask us!
      </h2>
      <div className=" flex flex-col md:flex-row justify-center gap-12 mt-10 ">
        <div className="w-full md:w-md text-center md:text-left">
          <p className="text-gray-600 mt-3 text-lg tracking-tight leading-8">
            <strong>Have a question or comment about us?</strong> We love
            hearing from you! Complete the form and our Customer Care team will
            get back to you soon.
          </p>
          <p className="text-gray-600 mt-3 text-lg tracking-tight leading-8">
            Your Customer Care team is just a phone call away at
          </p>
          <p className="my-2 text-blue-500"> 212-343-7012</p>
          <p className="text-blue-500"> Monday – Saturday, 9AM–5PM EST</p>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-white shadow-lg  p-6 md:p-8">
          {submitted ? (
            <p className="text-green-600 font-semibold text-center">
              ✅ Message Sent Successfully!
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("fullName", { required: "Full Name is required" })}
                type="text"
                placeholder="Full Name*"
                className="w-full p-3 border border-gray-200    "
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-200   "
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                placeholder="Subject*"
                className="w-full p-3 border border-gray-200   "
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}

              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message*"
                rows={4}
                className="w-full p-3 border border-gray-200   "
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm">
                  By clicking here, you agree to our{" "}
                  <a href="#" className="text-primary underline">
                    terms and policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-3 bg-primary text-white font-semibold  hover:bg-primary-100 transition"
              >
                <a href="">{isSubmitting ? "Submitting..." : "SUBMIT NOW"}</a>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
