// import Image from "next/image";
import Aboutus from "@/components/Aboutus";
import Community from "@/components/Community/page";
import Container from "@/components/Container";
import Events from "@/components/Events/page";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import HomeBanner from "@/components/HomeBanner";
import { Navbar } from "@/components/NavBar";
import Resources from "@/components/Resources/layout"
import { SpecialFeatures } from "@/components/SpecialFeatures";
// import Resources from "./components/programs/page";
// import Carousel from "@/app/components/Articles/ArticleList"
const background = '../../assets/background.jpeg';


export default function Home() {
  return (
  <>
    {/* <Navbar/> */}
    <div className="p-10">
      <HomeBanner/>
    </div>
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Aboutus/>
        <Features/>
        <Community/>
        <Resources/>
        <Events/>
        <SpecialFeatures/>
        <Footer />
      </div>
    </>
  );
}
