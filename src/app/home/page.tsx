"use client"
import Menu from "../../components/menu/Menu";
import Faq from "../../components/home/Faq/Faq";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import HowToJoinIra from "../../components/home/JoinIRA/HowToJoinIra";
import JoinMovement from "../../components/home/JoinMovement/JoinMovement";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Team from "../../components/home/Team/Team";
import { useEffect, useState } from "react";
import HeroSectionMobile from "../../components/home/HeroSection/HeroSectionMobile";
import HowToJoinIraMobile from "../../components/home/JoinIRA/HowToJoinIraMobile";
import JoinMovementMobile from "../../components/home/JoinMovement/JoinMovementMobile";
import FaqMobile from "../../components/home/Faq/FaqMobile";
import NewsletterMobile from "../../components/home/Newsletter/NewsletterMobile";
import FooterMobile from "../../components/footer/FooterMobile";
import CarouselArtists from "../../components/home/Artists/CarouselArtists";

export default function HomePage() {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])


    return (

      <div id="home" className="home">

      {isMobile ? <HeroSectionMobile /> : <HeroSection />}
        
      {isMobile ? <Menu/> : <Menu/>}

      {isMobile ? <HowToJoinIraMobile/> : <HowToJoinIra/>}  
        
      {isMobile ? <JoinMovementMobile/> : <JoinMovement/>}    

      {isMobile ? <CarouselArtists/> : <CarouselArtists/>}      

      {isMobile ? <Team/> : <Team/>}        
        
      {isMobile ? <FaqMobile/> : <Faq/>}          

      {isMobile ? <NewsletterMobile/> : <Newsletter/>}            

      {isMobile ?  <FooterMobile/> :  <Footer/>}              

       


    </div>

    )


}    