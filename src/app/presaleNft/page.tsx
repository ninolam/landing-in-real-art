"use client"
import { useEffect, useState } from "react"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import FooterMobile from "../../components/footer/FooterMobile"
import styles from './PresaleNftPage.module.scss'
import { CookiesProvider } from "react-cookie"
import CookieConsent from "../../components/cookie/CookieConsent"
import JoinMovementNft from "../../components/presaleNft/JoinMovement/JoinMovementNft"
import AboutArtist from "../../components/presaleNft/AboutArtist/AboutArtist"
import GetReadyToBuy from "../../components/presaleNft/GetReadyToBuy/GetReadyToBuy"
import NftCollection from "../../components/presaleNft/NftCollection/NftCollection"
import TopCreator from "../../components/presaleNft/TopCreator/TopCreator"

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
                        {/*<CookiesProvider>
                            <CookieConsent/>
                        </CookiesProvider>*/}
                        <JoinMovementNft/>
                        <Menu/>
                        <AboutArtist/>
                        <NftCollection/>
                        <GetReadyToBuy/>
                        <FooterMobile containsEmail={true}/>
                    </>
                :
                    
                    <>    
                        <CookiesProvider>
                            <CookieConsent/>
                        </CookiesProvider>
                        <JoinMovementNft/>
                        <Menu/>
                        <AboutArtist/>
                        <NftCollection/>
                        <TopCreator/>
                        <GetReadyToBuy/>
                        <Footer/>
                    </>
            }
            </div>
        </div>
        </>
    )
}


        