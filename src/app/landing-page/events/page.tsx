// import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import { EventsFeatures } from "@/components/EventsFeatures";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
// import { Pricing } from "@/app/components/Pricing";

export default function Events() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero backgroundImage="../../assets/eddy.jpg" showButton={false} children={undefined}/>
    <div className="px-[20px] lg:container lg:px-20 mx-auto">

        <h3 className="pt-10 font-bold text-2xl">Events</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed consequat semper nisi, eget finibus ligula consequat vitae.
              Morbi euismod, leo eget volutpat commodo, nunc eros tincidunt libero,
               nec varius ipsum elit nec ipsum.  </p>

               <div className="sm:w-3/3 lg:py-[56px] lg:pr-[56px]">
                    <div>Timer</div>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px] text-center">
                            EVENT: MARKETPLACE CONVENTION 2024
                            DATE: 27th July 2023
                            VENUE: Watoto Church Ntinda
                    </p>
                
                </div>

        
        {/* <Features /> */}
        <EventsFeatures />
        <Footer />
      </div>
    </>
  );
}
