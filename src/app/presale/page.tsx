"use client"
import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import BuyingProcess from "../../components/presale/BuyingProcess/BuyingProcess"
import DropPanel from "../../components/presale/DropPanel/DropPanel"
import HeroSection from "../../components/presale/HeroSection/HeroSection"
import PresalePros from "../../components/presale/PresalePros/PresalePros"


export default function PresalePage() {

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
        <>
        <div className="index">
            <div className="frame">

            {isMobile ? 
                <>
                    <HeroSection/>
                    <Menu/>
                    <DropPanel/>
                    <PresalePros/>
                    <BuyingProcess/>
                    <Footer/>
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


        