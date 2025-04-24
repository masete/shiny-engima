// import Image from "next/image";
import Aboutus from "../Aboutus";
import { EventsFeatures } from "../EventsFeatures";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "../Features";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Navbar } from "../NavBar";
// import { Pricing } from "@/app/components/Pricing";

export default function Events() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Hero backgroundImage="../../assets/eddy.jpg" showButton={false} children={undefined}/> */}
    {/* <div className="px-[20px] lg:container lg:px-20 mx-auto"> */}

        <h3 className="pt-10 font-bold text-2xl">Events</h3>
        <p className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed consequat semper nisi, eget finibus ligula consequat vitae.
              Morbi euismod, leo eget volutpat commodo, nunc eros tincidunt libero,
               nec varius ipsum elit nec ipsum.  </p>

        
        
        <EventsFeatures />
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
