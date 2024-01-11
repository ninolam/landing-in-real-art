"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from './FaqPage.module.scss'
import HeroSection from "./HeroSection/HeroSection";
import Menu from "../../components/menu/Menu";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FaqQuestions, Lang, defaultLangObject } from "../../types/types";


export default function FaqPage() {

    const [isMobile, setIsMobile] = useState(false)

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    
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
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 800)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        const fetchData = async () => {
            const faqCollection = collection(db, FIREBASE_FAQ_COLLECTION);
            const faqDocuments  = await getDocs(faqCollection);
            const faqData       = faqDocuments.docs.map(doc => doc.data());            
            //Index 1 ===> FAQ Page
            setFaqQuestions(faqData[1] as FaqQuestions)
        }
        fetchData();

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])



    return (
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            <HeroSection />
            <Menu/>
            <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                <Accordion defaultIndex={[0]}>

                    {
                        faqQuestions.questions.map(
                            (faqQuestion, index) => (
                                <AccordionItem>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        {index+1}. {faqQuestion.question[lang_]}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        {faqQuestion.answer[lang_]}
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                        )
                    }
                </Accordion>
            </div>
        </div>        
    )

}    