"use client"
import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import BuyingProcess from "../../components/presale/BuyingProcess/BuyingProcess"
import DropPanel from "../../components/presale/DropPanel/DropPanel"
import HeroSection from "../../components/presale/HeroSection/HeroSection"
import PresalePros from "../../components/presale/PresalePros/PresalePros"
import FooterMobile from "../../components/footer/FooterMobile"
import styles from './PresalePage.module.scss'
import HeroSectionMobile from "../../components/presale/HeroSection/HeroSectionMobile"
import PresaleProsMobile from "../../components/presale/PresalePros/PresaleProsMobile"
import BuyingProcessMobile from "../../components/presale/BuyingProcess/BuyingProcessMobile"
import HeroSection2 from "../../components/presale/HeroSection/HeroSection2"

export default function PresalePage() {

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 700)
      }
  
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
  
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    
    return (
        <>
        <div className={styles["index"]}>
            <div className={styles["frame"]}>

            {isMobile ? 
                <>
                    <HeroSectionMobile/>
                    <Menu/>
                    <DropPanel/>
                    <PresaleProsMobile/>
                    <BuyingProcessMobile/>
                    <FooterMobile containsEmail={true}/>
                </>
                    :
                <>    
                    <HeroSection/>
                    <Menu/>
                    <DropPanel/>
                    <PresalePros/>
                    <BuyingProcess/>
                    <Footer/>
                </>
            }
            </div>
        </div>
        </>
    )
}


        