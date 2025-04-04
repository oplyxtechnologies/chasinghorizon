import OurTeam from "@/components/OurTeam/OurTeam";
import PageHeader from "@/components/PageHeader";
import Swiper from "@/components/Swiper/Swiper";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="tracking-tight">
      {/* <PageHeader
        title="About"
        imageSrc="/about.png" // Update this path based on your public folder
      /> */}
      <div className="flex-col">
        <Image
          src="/aboutsec.webp"
          alt="about"
          width={10000}
          height={10000}
          className="items-center justify-center mx-auto  py-10 w-xl px-2 md:w-3xl lg:w-7xl"
        />
        <div className="p-4 flex-col space-y-5 max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold">About the Company</h1>
          <p className="text-textsec text-md text-justify">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            cons, adipisci velit, sed quia non numquam eius modi ullma tempora
            incidunt ut labore et dolore magnam aliquam quaerat fruitr
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.
            Itaque earum rerum hic tea sapiente delectus, ut aut reiciendis
            voluptatibus.
          </p>
          <div className=" flex flex-wrap gap-6 mx-auto max-w-7xl items-center justify-center">
            <div className="flex-col space-y-3 max-w-md">
              <h1 className="text-xl font-medium">Our Mission</h1>
              <p className="text-textsec text-md text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Quis nostrud kemmith exercitation
                ullamco laboris nisi ut aliquip.
              </p>
            </div>
            <div className="flex-col space-y-3 max-w-md">
              <h1 className="text-xl font-medium">Our Mission</h1>
              <p className="text-textsec text-md text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Quis nostrud kemmith exercitation
                ullamco laboris nisi ut aliquip.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f8fa] p-10 space-y-16 my-10">
          <h1 className="text-center text-3xl font-black">
            {" "}
            What our clients say
          </h1>
          <div className="mx-auto max-w-7xl  ">
            <Swiper />
          </div>
        </div>

        {/* Our team */}
        <OurTeam />
      </div>
    </div>
  );
};

export default Page;
