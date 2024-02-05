"use client"
import styles from './TermsOfServicePage.module.scss'
import Menu from "../../components/menu/Menu"
import { useAppContext } from "../../context"
import { Lang } from "../../types/types"
import useSharedLogic from "../useSharedLogic"
import Footer from "../../components/footer/Footer"
import FooterMobile from "../../components/footer/FooterMobile"
import SimpleHeroSection from '../../components/heroSection/SimpleHeroSection'
import useSharedLogicTosPage from '../../components/tosPage/useSharedLogicTosPage'

export default function TermsOfServicePage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const {texts, setTexts} = useSharedLogicTosPage()
    
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