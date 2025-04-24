// import Image from "next/image";
import Aboutus from "@/components/Aboutus";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
import { SpecialFeatures } from "@/components/SpecialFeatures";
// import { Pricing } from "@/app/components/Pricing";

export default function SpecialInitiatives() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero backgroundImage="../../assets/special.jpg" showButton={false} children={undefined}/>
    <div className="px-[20px] lg:container lg:px-20 mx-auto">

        <h3 className="pt-10 font-bold text-2xl">SPECIAL INITIATIVES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper nisi, 
          eget finibus ligula consequat vitae. Morbi euismod, leo eget volutpat commodo,
           nunc eros tincidunt libero, nec varius ipsum elit nec ipsum. </p>

        
        {/* <Features /> */}
        <SpecialFeatures/>
        <Footer />
      </div>
    </>
  );
}
