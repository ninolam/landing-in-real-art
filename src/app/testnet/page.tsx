"use client"
import { useEffect, useState } from "react";
import styles from './TestnetPage.module.scss'

import { CookiesProvider } from "react-cookie";
import CookieConsent from "../../components/cookie/CookieConsent";
import HeroSection from "../../components/testnet/HeroSection/HeroSection";
import Menu from "../../components/menu/Menu";
import NewsletterMobile from "../../components/home/Newsletter/NewsletterMobile";
import FooterMobile from "../../components/footer/FooterMobile";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import useSharedLogic from "../useSharedLogic";
import HowToJoinIra from "../../components/testnet/JoinIRA/HowToJoinIra";
import HowToJoinIraMobile from "../../components/testnet/JoinIRA/HowToJoinIraMobile";
import TestnetPros from "../../components/testnet/Pros/TestnetPros";
import useSharedLogicFaq from "../../components/common/Faq/useSharedLogicFaq";
import Faq from "../../components/common/Faq/Faq";
import FaqMobile from "../../components/common/Faq/FaqMobile";
import useSharedLogicHeroSection from "../../components/home/HeroSection/useSharedLogicHeroSection";
import HeroSectionMobile from "../../components/common/HeroSection/HeroSectionMobile";

export default function HomePage() {

  const {isMobile, setIsMobile} = useSharedLogic(800)
  const FIREBASE_TESTNET_FAQ_COLLECTION = 'Testnet_Faq'
  const FIREBASE_TESTNET_HEADER_COLLECTION = 'Testnet_Header'
  const {faqButtons, faqTexts } = useSharedLogicFaq(FIREBASE_TESTNET_FAQ_COLLECTION)
  const {headerButtons, setHeaderButtons, headerTexts, setHeaderTexts} = useSharedLogicHeroSection(FIREBASE_TESTNET_HEADER_COLLECTION);

    return (

      <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

      {isMobile ? 
        <>
          <CookiesProvider>
            <CookieConsent/>
          </CookiesProvider>
          <HeroSectionMobile headerTexts={headerTexts} headerButtons={headerButtons} onlyFirstButton={true}/>
          <Menu/>
          <HowToJoinIraMobile/>
          <TestnetPros/>
          <FaqMobile faqTexts={faqTexts} faqButtons={faqButtons}/>
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
          <TestnetPros/>
          <Faq faqTexts={faqTexts} faqButtons={faqButtons} />
          <Newsletter/>
          <Footer/>
        </>  
      }

    </div>

    )


}    