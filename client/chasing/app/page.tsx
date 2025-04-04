import OverView from "@/components/Booking/overview";
import Hero from "@/components/HeroLanding/Hero.";
import Locationtrip from "@/components/Locationtrip/Locationtrip";
import Reviews from "@/components/Reviews/Reviews";
import TravelOptions from "@/components/Service/Traveloption";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OverView />
      <Locationtrip />
      <TravelOptions />
      <Reviews />
    </div>
  );
}
