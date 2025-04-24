// import Image from "next/image";
import Aboutus from "@/components/Aboutus";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
// import { Pricing } from "@/app/components/Pricing";


export default function Resources() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero backgroundImage="../../assets/graduation-995042_1280.jpg" showButton={false} children={undefined}/>
    <div className="px-[20px] lg:container lg:px-20 mx-auto">

        <h3 className="pt-10 font-bold text-2xl">Programs</h3>
        <p>The Ministry currently has two programs that have
             a yearly intake all catering towards different categories of people.</p>

        
        <Features />
        <Footer />
      </div>
    </>
  );
}
