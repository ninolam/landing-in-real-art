"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from './FaqPage.module.scss'
import HeroSection from "../../components/faqPage/HeroSection/HeroSection";
import Menu from "../../components/menu/Menu";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FaqQuestions, Lang, defaultLangObject } from "../../types/types";
import useSharedLogic from "../useSharedLogic";
import Footer from "../../components/footer/Footer";
import FooterMobile from "../../components/footer/FooterMobile";
import MenuFaq from "../../components/faqPage/menu/MenuFaq";


export default function FaqPage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const FIREBASE_FAQ_COLLECTION = 'Faq'
    
    const defaultFaqQuestion = {
        answer: defaultLangObject,
        question: defaultLangObject
    }

    const defaultFaqQuestions = {
        questions: [defaultFaqQuestion]
    }
    const [faqQuestions,setFaqQuestions] = useState<FaqQuestions>(defaultFaqQuestions);
    
    useEffect(() => {

        const fetchData = async () => {
            const faqCollection = collection(db, FIREBASE_FAQ_COLLECTION);
            const faqDocuments  = await getDocs(faqCollection);
            const faqData       = faqDocuments.docs.map(doc => doc.data());            
            //Index 1 ===> FAQ Page
            setFaqQuestions(faqData[1] as FaqQuestions)
        }
        fetchData();

    }, [])


    return (
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            {isMobile ? 
                <>
                    <HeroSection />
                    <Menu/>
                    <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                        <Accordion defaultIndex={[0]}>

                          
                        </Accordion>
                    </div>
                    <FooterMobile/>
                </>
            : 
                <>
                <HeroSection />
                <MenuFaq/>
                <Menu/>
                <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                    <Accordion defaultIndex={[0]}>

                       
                    </Accordion>
                </div>
                <Footer/>    
                </>
            }    
            
        </div>        
    )

}    