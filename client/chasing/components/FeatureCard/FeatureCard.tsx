import React from "react";
import { Globe, DollarSign, Headset } from "lucide-react"; // Install lucide-react if needed

const features = [
  {
    id: 1,
    icon: <Globe size={70} strokeWidth={1} className="text-blue-500" />,
    title: "700 Destinations",
    description: "Our expert team handpicked all destinations in this site.",
  },
  {
    id: 2,
    icon: <DollarSign size={70} strokeWidth={1} className="text-blue-500" />,
    title: "Best Price Guarantee",
    description: "Price match within 48 hours of order confirmation.",
  },
  {
    id: 3,
    icon: <Headset size={70} strokeWidth={1} className="text-blue-500" />,
    title: "Top Notch Support",
    description:
      "We are here to help before, during, and even after your trip.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 outline outline-gray-200 rounded-lg shadow-sm text-center   py-20"
          >
            <div className="flex justify-center mb-10">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
