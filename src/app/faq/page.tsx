"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import styles from './FaqPage.module.scss'
import HeroSection from "../../components/faqPage/HeroSection/HeroSection"
import Menu from "../../components/menu/Menu"
import { useAppContext } from "../../context"
import { Lang } from "../../types/types"
import useSharedLogic from "../useSharedLogic"
import Footer from "../../components/footer/Footer"
import FooterMobile from "../../components/footer/FooterMobile"
import useSharedLogicFaqPage from "../../components/faqPage/menu/useSharedLogicFaqPage"

export default function FaqPage() {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {isMobile, setIsMobile} = useSharedLogic(800)

    const [currentFaqSubPage, setCurrentFaqSubPage] = useState<string>('')
    
    const {faqPage, setFaqPage, currentFaqQuestions, setCurrentFaqQuestions} = useSharedLogicFaqPage()
    const faqPage_ = Object.entries(faqPage)
    
    console.log(faqPage_)

    const handleClickFaqButton = (event: any) => {
        setCurrentFaqSubPage(event.target.id)

        const currentFaqSubPage = faqPage_.filter(
            (obj) => {
                return (obj[0] === event.target.id)
            }
        )

        setCurrentFaqQuestions(currentFaqSubPage[0][1])
    }
    
    const MenuFaq = () => {
        return (
            <div className={styles.buttoncontainer}>
                {
                faqPage_.map(([key, value], index) => (
                    <Button id={key} key={index} onClick={handleClickFaqButton}>{value.textButton[lang_]}</Button>    
                         
                ))}
            </div>
        )
    }
    
    const AccordionComponent = () => {
        return (
            <Accordion defaultIndex={[0]} allowMultiple>
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
                    <div id="faqAccordion" className={styles.faqAccordion}>
                        <AccordionComponent/>
                    </div>
                    <FooterMobile/>
                </>
            : 
                <>
                    <HeroSection />
                    <MenuFaq/>
                    <Menu/>
                    <div id="faqAccordion" className={styles.faqAccordion}>
                        <AccordionComponent/>
                    </div>
                    <Footer/>    
                </>
            }    
            
        </div>        
    )

}    