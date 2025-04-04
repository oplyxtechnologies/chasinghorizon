import React from "react";
import Image from "next/image";
import FeaturesSection from "@/components/FeatureCard/FeatureCard";
import TourismSection from "@/components/FeatureCard/TourismSection";
import ContactForm from "@/components/FeatureCard/ContactForm";

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl space-y-4">
          <h3 className="text-xl font-medium text-primary">
            Great Service, Great Price
          </h3>
          <h1 className="text-4xl font-medium leading-tight tracking-tight mt-4">
            Freedom to Discover, Confidence to Explore
          </h1>
          <p className="text-gray-600 ">
            Leave your guidebooks at home and dive into the local cultures that
            make each destination special. We&apos;ll connect you with exclusive
            experiences. Each trip is carefully crafted to let you enjoy your
            vacation.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="text-sm rounded-sm text-white bg-primary px-6 py-4 transition duration-200 hover:shadow-lg hover:shadow-primary "
            >
              See All
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="max-w-xl">
          <Image
            src="/family.webp"
            alt="Family enjoying their trip"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
      <FeaturesSection />
      <TourismSection />

      <ContactForm />
    </section>
  );
};

export default Page;
