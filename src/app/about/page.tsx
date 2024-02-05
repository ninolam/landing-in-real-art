"use client"
import styles from './AboutPage.module.scss'
import HeroSection from "../../components/faqPage/HeroSection/HeroSection"
import Menu from "../../components/menu/Menu"
import { useAppContext } from "../../context"
import { Lang } from "../../types/types"
import useSharedLogic from "../useSharedLogic"
import Footer from "../../components/footer/Footer"
import FooterMobile from "../../components/footer/FooterMobile"
import useSharedLogicAboutPage from "../../components/aboutPage/useSharedLogicAboutPage"
import SimpleHeroSection from '../../components/heroSection/SimpleHeroSection'

export default function AboutPage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const {texts, setTexts} = useSharedLogicAboutPage()
    
    const mainTitle = texts.mainTitle[lang_]
    
    return (
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            {isMobile ? 
                <>
                    <SimpleHeroSection mainTitle={mainTitle}/>
                    <Menu/>
                    <FooterMobile/>
                </>
            : 
                <>
                    <SimpleHeroSection mainTitle={mainTitle}/>
                    <Menu/>
                    <Footer/>    
                </>
            }    
            
        </div>        
    )

}    