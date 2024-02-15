"use client"
import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import BuyingProcess from "../../components/presale/BuyingProcess/BuyingProcess"
import DropPanel from "../../components/presale/DropPanel/DropPanel"
import HeroSection from "../../components/presale/HeroSection/HeroSection"
import PresalePros from "../../components/presale/PresalePros/PresalePros"
import FooterMobile from "../../components/footer/FooterMobile"
import styles from './PresaleNftPage.module.scss'
import HeroSectionMobile from "../../components/presale/HeroSection/HeroSectionMobile"
import PresaleProsMobile from "../../components/presale/PresalePros/PresaleProsMobile"
import BuyingProcessMobile from "../../components/presale/BuyingProcess/BuyingProcessMobile"
import HeroSectionTablet from "../../components/presale/HeroSection/HeroSectionTablet"
import { CookiesProvider } from "react-cookie"
import CookieConsent from "../../components/cookie/CookieConsent"
import Invest from "../../components/presale/Invest/Invest"
import JoinMovementNft from "../../components/presaleNft/JoinMovement/JoinMovementNft"
import AboutArtist from "../../components/presaleNft/AboutArtist/AboutArtist"
import GetReadyToBuy from "../../components/presaleNft/GetReadyToBuy/GetReadyToBuy"

export default function PresalePage() {

    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 700)
        setIsTablet(window.innerWidth < 1300)
      }
  
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
  
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    
    return (
        <>
        <div className={styles["index"]}>
            <div className={styles["frame"]}>

            {isMobile 
                ?
                    <>
                        <CookiesProvider>
                            <CookieConsent/>
                        </CookiesProvider>
                        <Menu/>
                        <JoinMovementNft/>
                        <AboutArtist/>
                        <GetReadyToBuy/>
                        <FooterMobile containsEmail={true}/>
                    </>
                :
                    
                    <>    
                        <CookiesProvider>
                            <CookieConsent/>
                        </CookiesProvider>
                        <Menu/>
                        <JoinMovementNft/>
                        <AboutArtist/>
                        <GetReadyToBuy/>
                        <Footer/>
                    </>
            }
            </div>
        </div>
        </>
    )
}


        