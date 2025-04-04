import { ArrowRight, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "../Icon/logo";
import FloatingInput from "../ui/FloatingInput";

const footerSections = [
  {
    title: "Product",
    links: [
      "Employee database",
      "Payroll",
      "Absences",
      "Time tracking",
      "Shift planner",
      "Recruiting",
    ],
  },
  {
    title: "Information",
    links: ["FAQ", "Blog", "Support"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Contact us", "Lift Media"],
  },
];

const bottomLinks = ["Terms", "Privacy", "Cookies"];

const FooterLiftBlue: React.FC = () => {
  return (
    <footer className="flex justify-center w-full bg-primary py-10 md:py-16 ">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between h-full">
          {/* Upper Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            {footerSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 sm:gap-4 items-center md:items-start"
              >
                <h3 className="font-bold text-white text-lg">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="text-white opacity-75 text-sm hover:opacity-100 transition-all duration-200"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Subscribe Section */}
            <div className="w-full sm:w-[320px] lg:w-[360px] xl:w-[380px] max-w-full mx-auto flex flex-col items-center md:items-start">
              <h3 className="font-bold text-white text-lg mb-4">Subscribe</h3>
              <div className="flex w-full max-w-[320px]">
                <div className="w-full max-w-md">
                  <FloatingInput label="Your Name" id="name" />
                </div>
                <button className="h-10 w-10 flex items-center justify-center bg-primary hover:bg-white hover:text-primary transition-all duration-150  text-white rounded-md ml-2 cursor-pointer">
                  <Link href="/about">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </button>
              </div>
              <p className="text-white opacity-60 text-xs mt-3 max-w-[320px]">
                Hello, we are Lift Media. Our goal is to revolutionize how
                companies engage with their clients & teams.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white opacity-20 my-6 md:my-8" />

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center md:text-left gap-4">
            <Logo size={130} className="text-white" />

            <div className="flex gap-5">
              {bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-white text-sm font-medium hover:opacity-75 transition-all duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300 transition-all duration-150"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300 transition-all duration-150"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLiftBlue;
