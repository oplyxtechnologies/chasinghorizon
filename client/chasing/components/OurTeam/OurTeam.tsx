import React from "react";
import Image from "next/image";
const teamMembers = [
  { name: "Aanand Mahatou", role: "Co-Founder, CEO", image: "/team1.png" },
  { name: "Jane Doe", role: "CTO", image: "/team2.png" },
  { name: "John Smith", role: "Lead Developer", image: "/team3.png" },
  { name: "Emily Johnson", role: "UI/UX Designer", image: "/team4.png" },
  { name: "Michael Brown", role: "Marketing Head", image: "/team5.png" },
  { name: "Sarah Wilson", role: "Project Manager", image: "/team6.png" },
  {
    name: "Peter Parker",
    role: "Administrative Incharge",
    image: "/team7.png",
  },
  { name: "Steave Rogers", role: "CA", image: "/team8.webp" },
];

const OurTeam = () => {
  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-black mb-10">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-md mx-auto space-y-4 group">
            <div className="relative w-full ">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 "
              />{" "}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-textsec">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
