"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Spacer } from "@chakra-ui/react";
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
import Link from "next/link";
import useSharedLogicFaqPage from "../../components/faqPage/menu/useSharedLogicFaqPage";
import stylesMenuFaq from '../../components/faqPage/menu/MenuFaq.module.scss'

export default function FaqPage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const FIREBASE_FAQ_COLLECTION = 'Faq'
    
    const [currentFaqSubPage, setCurrentFaqSubPage] = useState<string>('')
    
    const {faqPage, setFaqPage, currentFaqQuestions, setCurrentFaqQuestions} = useSharedLogicFaqPage()
    const faqPage_ = Object.entries(faqPage)

    const handleClickFaqButton = (event: any) => {
        console.log(event.target.id)
        setCurrentFaqSubPage(event.target.id)
        
        console.log(faqPage_)
        const currentFaqSubPage = faqPage_.filter(
            (obj) => {
                return (obj[0] === event.target.id)
            }
        )
        // console.log(currentFaqSubPage[0][1]['items'])
        setCurrentFaqQuestions(currentFaqSubPage[0][1])
        console.log(currentFaqSubPage[0][1])
        // const faqSubPageItems = faqPage[currentFaqSubPage]
    }
    
    const MenuFaq = () => {

        return (
                <div className={styles.faqMenuContainer}>
                    <Flex>
                        {faqPage_.map(([key, value], index) => (
                            <div key={index} >
                                <Box w='200px' h='10' bg='' marginRight={'100px'}>
                                    <div className={stylesMenuFaq.buttonFaqMenu}>
                                        <Link className={stylesMenuFaq.faqMenuLink} href=''>
                                            <div id={key} className={stylesMenuFaq.heading3} onClick={handleClickFaqButton}>
                                                {value.textButton[lang_]}
                                            </div>
                                        </Link>  
                                        </div>
                                </Box>    
                            <Spacer/>
                            </div>
                        ))}
                    </Flex>
    
                </div>       
        )
    
    }
    
    const AccordionComponent = () => {
        return (
            <Accordion defaultIndex={[0]}>
                {
                    currentFaqQuestions.items.map(
                        (faqQuestion, index) => (
                            <AccordionItem key={index}>
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
        )
    }

    return (
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            {isMobile ? 
                <>
                    <HeroSection />
                    <MenuFaq/>
                    <Menu/>
                    <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                        <Accordion defaultIndex={[0]}>
                            {
                                currentFaqQuestions.items.map(
                                    (faqQuestion, index) => (
                                        <AccordionItem key={index}>
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
                    <FooterMobile/>
                </>
            : 
                <>
                    <HeroSection />
                    <MenuFaq/>
                    <Menu/>
                    <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                        <AccordionComponent/>
                    </div>
                    <Footer/>    
                </>
            }    
            
        </div>        
    )

}    