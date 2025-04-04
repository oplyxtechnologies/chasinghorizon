import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div className="tracking-tight">
      <PageHeader
        title="Contact Us"
        imageSrc="/contactheader.jpeg" // Update this path based on your public folder
        description="Get In Touch"
      />
      <ContactForm />
    </div>
  );
};

export default Page;
