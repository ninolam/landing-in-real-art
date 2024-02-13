"use client"
import styles from './LegalNoticePage.module.scss'
import Menu from "../../components/menu/Menu"
import { useAppContext } from "../../context"
import { Lang } from "../../types/types"
import useSharedLogic from "../useSharedLogic"
import Footer from "../../components/footer/Footer"
import FooterMobile from "../../components/footer/FooterMobile"
import SimpleHeroSection from '../../components/heroSection/SimpleHeroSection'
import useSharedLogicTosPage from '../../components/tosPage/useSharedLogicTosPage'
import useSharedLogicLegalNoticePage from '../../components/legalNoticePage/useSharedLogicTosPage'
import TosContent from '../../components/tosPage/TosContent'

export default function LegalNoticePage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const {texts, setTexts} = useSharedLogicLegalNoticePage()
    
    const mainTitle = texts.mainTitle[lang_]
    const mainContent = texts.mainContent[lang_]
    
    return (
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            {isMobile ? 
                <>
                    <SimpleHeroSection mainTitle={mainTitle}/>
                    <TosContent mainContent={mainContent} />
                    <Menu/>
                    <FooterMobile/>
                </>
            : 
                <>
                    <SimpleHeroSection mainTitle={mainTitle}/>
                    <TosContent mainContent={mainContent} />
                    <Menu/>
                    <Footer/>    
                </>
            }    
            
        </div>        
    )

}    