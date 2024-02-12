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
import styles from './HomePage.module.scss'
import Partners from "../../components/home/Partners/Partners";
import useSharedLogic from "../useSharedLogic";
import CookieConsent from "../../components/cookie/CookieConsent";
import { CookiesProvider } from "react-cookie";

export default function HomePage() {

  const {isMobile, setIsMobile} = useSharedLogic(800)
  

    return (

      <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

      {isMobile ? 
        <>
          <CookiesProvider>
            <CookieConsent/>
          </CookiesProvider>
          <HeroSectionMobile />
          <Menu/>
          <HowToJoinIraMobile/>
          <JoinMovementMobile/>
          <CarouselArtists/>
          <Team/>
          <FaqMobile/>
          <Partners/>
          <NewsletterMobile/>
          {/*<PrivateSaleMobile/>*/}
          <FooterMobile containsEmail={false}/>
        </>  
          : 
        <>
          <CookiesProvider>
            <CookieConsent/>
          </CookiesProvider>
          <HeroSection />
          <Menu/>
          <HowToJoinIra/>
          <JoinMovement/>
          <CarouselArtists/>
          <Team/>
          <Faq/>
          <Partners/>
          <Newsletter/>
          {/*<PrivateSale/>*/}
          <Footer/>
        </>  
      }

    </div>

    )


}    