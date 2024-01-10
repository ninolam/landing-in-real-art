"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from './FaqPage.module.scss'
import HeroSection from "./HeroSection/HeroSection";
import Menu from "../../components/menu/Menu";


export default function FaqPage() {

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
        <div id="home" className={styles["home"]} style={isMobile?{paddingTop:'0px'}:{paddingTop:''}}>

            <HeroSection />
            <Menu/>
            <div style={{width: '70%', height: '100%', marginBottom: "100px"}}>
                <Accordion defaultIndex={[0]}>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            Section 2 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>        
    )

}    