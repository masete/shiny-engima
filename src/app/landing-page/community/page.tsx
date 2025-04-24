// import Image from "next/image";
// import Aboutus from "@/app/components/Aboutus";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
// import { Pricing } from "@/app/components/Pricing";

export default function Community() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero backgroundImage="../../assets/istockphoto-1496195459-1024x1024.jpg" showButton={false} children={undefined}/>
    <div className="px-[20px] lg:container lg:px-20 mx-auto">

        <h5 className="pt-10 font-bold text-2xl">COMMUNITY</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed consequat semper nisi, eget finibus ligula consequat vitae.
             Morbi euismod, leo eget volutpat commodo, nunc eros tincidunt libero,
              nec varius ipsum elit nec ipsum.</p>

        <h5 className="pt-10 font-bold text-2xl">Jobs</h5>
        <p>A 1 week Training Programme to educate you about the business landscape.
           It mostly designed for people with businesses or intending to start businesses.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper nisi,
            eget finibus ligula consequat vitae. Morbi euismod, leo eget volutpat commodo,
             nunc eros tincidunt libero, nec varius ipsum elit nec ipsum. Duis nec risus
              vel elit vehicula feugiat. Integer consectetur mauris in nisi ultricies, 
              vel porta sem eleifend. Vestibulum ante ipsum primis in faucibus orci 
              luctus et ultrices posuere cubilia Curae; Pellentesque nec turpis vestibulum,
               faucibus elit vitae, gravida justo. Nullam et libero at risus lacinia elementum.
                Vivamus euismod nisi eget justo dignissim, vel consectetur lorem bibendum.</p>


        <h5 className="pt-10 font-bold text-2xl">My Marketplace</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper nisi, 
            eget finibus ligula consequat vitae. Morbi euismod, leo eget volutpat commodo, nunc
             eros tincidunt libero, nec varius ipsum elit nec ipsum. Duis nec risus vel elit 
             vehicula feugiat. Integer consectetur mauris in nisi ultricies, vel porta sem eleifend.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
               Pellentesque nec turpis vestibulum, faucibus elit vitae, gravida justo. Nullam et 
               libero at risus lacinia elementum. Vivamus euismod nisi eget justo dignissim,
                vel consectetur lorem bibendum.</p>

        <h5 className="pt-10 font-bold text-2xl">Networks & Connections</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat semper nisi, 
            eget finibus ligula consequat vitae. Morbi euismod, leo eget volutpat commodo, nunc 
            eros tincidunt libero, nec varius ipsum elit nec ipsum. Duis nec risus vel elit vehicula
             feugiat. Integer consectetur mauris in nisi ultricies, vel porta sem eleifend. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque
               nec turpis vestibulum, faucibus elit vitae, gravida justo. Nullam et libero at risus lacinia 
               elementum. Vivamus euismod nisi eget justo dignissim, vel consectetur lorem bibendum.</p>

      
        <Footer />
      </div>
    </>
  );
}
