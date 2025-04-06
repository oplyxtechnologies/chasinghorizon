// components/ContactForm.tsx
"use client";
import { Mails, Phone } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <section className=" py-12 ">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Form */}
          <div>
            <h2 className="text-4xl font-medium tracking-tight  mb-4">
              Leave us your info
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-6 tracking-normal">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring...
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                className="w-full p-3 border border-primary "
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full p-3 border border-primary "
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                className="w-full p-3 border border-primary "
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message*"
                className="w-full p-3 border border-primary  h-32"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button>
                <a
                  href="#"
                  className="text-sm text-white my-2  hover:shadow-4xl hover:shadow-primary  bg-primary transition-all duration-200 px-6 py-4"
                >
                  See All
                </a>
              </button>
            </form>
          </div>

          {/* Right Section - Location and Map */}
          <div>
            <h3 className="text-4xl font-medium tracking-tight  mb-4">
              Location
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-6 tracking-normal">
              Santinagar, Baneshwore, Kathmandu, Nepal
            </p>
            <div className="flex-col space-y-4">
              <div className="flex gap-4">
                <Mails />{" "}
                <p className="text-gray-600 "> support@chasinghorizon.com</p>
              </div>
              <div className="flex gap-4">
                <Phone /> <p className="text-gray-600 "> +1-3524-3356 </p>
              </div>
            </div>
            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe
                className="w-full h-64 "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6928308752556!2d-2.982384384708316!3d53.40837197999468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b214c8a89a1c7%3A0x1336dfc65a0e83f!2sLiverpool%2C%20UK!5e0!3m2!1sen!2s!4v1642162812332!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
