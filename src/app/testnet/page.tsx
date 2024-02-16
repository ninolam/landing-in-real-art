"use client"
import { useEffect, useState } from "react";
import styles from './TestnetPage.module.scss'

import { CookiesProvider } from "react-cookie";
import CookieConsent from "../../components/cookie/CookieConsent";
import HeroSection from "../../components/testnet/HeroSection/HeroSection";
import Menu from "../../components/menu/Menu";
import FaqMobile from "../../components/home/Faq/FaqMobile";
import NewsletterMobile from "../../components/home/Newsletter/NewsletterMobile";
import FooterMobile from "../../components/footer/FooterMobile";
import Faq from "../../components/home/Faq/Faq";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import useSharedLogic from "../useSharedLogic";
import HowToJoinIra from "../../components/testnet/JoinIRA/HowToJoinIra";
import HowToJoinIraMobile from "../../components/testnet/JoinIRA/HowToJoinIraMobile";

export default function HomePage() {

  const {isMobile, setIsMobile} = useSharedLogic(800)
  

    return (

      <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

      {isMobile ? 
        <>
          <CookiesProvider>
            <CookieConsent/>
          </CookiesProvider>
          <HeroSection/>
          <Menu/>
          <HowToJoinIraMobile/>
          
          <FaqMobile/>
          <NewsletterMobile/>
          <FooterMobile containsEmail={false}/>
        </>  
          : 
        <>
          <CookiesProvider>
            <CookieConsent/>
          </CookiesProvider>
          <HeroSection/>
          <Menu/>
          <HowToJoinIra/>
    
          <Faq/>
          
          <Newsletter/>
          <Footer/>
        </>  
      }

    </div>

    )


}    