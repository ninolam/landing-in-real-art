"use client"
import Menu from "../../components/home/Menu";
import Faq from "../../components/home/Faq/Faq";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import HowToJoinIra from "../../components/home/JoinIRA/HowToJoinIra";
import JoinMovement from "../../components/home/JoinMovement/JoinMovement";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Team from "../../components/home/Team/Team";
import CarouselComponent from "../../components/home/Artists/CarouselArtists";
import { useEffect, useState } from "react";
import HeroSectionMobile from "../../components/home/HeroSection/HeroSectionMobile";

export default function HomePage() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800);
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


    return (

      <div className="home">

      {isMobile ? <HeroSectionMobile /> : <HeroSection />}
        

        <Menu/>
        
        <HowToJoinIra/>

        <JoinMovement/>

        <CarouselComponent/>
        
        <Team/>

        <Faq/>

        <Newsletter/>

        <Footer/>


    </div>

    )


}    