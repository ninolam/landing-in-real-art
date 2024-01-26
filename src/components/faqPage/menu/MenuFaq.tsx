import { Box, Flex, Spacer } from '@chakra-ui/react'
import styles from './MenuFaq.module.scss'
import Link from 'next/link'
import useSharedLogicFaqPage from './useSharedLogicFaqPage'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import { useState } from 'react'

const MenuFaq = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    
    const [currentFaqSubPage, setCurrentFaqSubPage] = useState<string>('')
    
    const {faqPage, setFaqPage} = useSharedLogicFaqPage()
    const faqPage_ = Object.entries(faqPage)
    console.log(faqPage_)

    const handleClickFaqButton = (event: any) => {
        setCurrentFaqSubPage(event.target.id)
    }

    return (
            <div className={styles.faqMenuContainer}>
                <Flex>
                    {faqPage_.map(([key, value], index) => (
                        <div key={index} >
                            <Box w='200px' h='10' bg='' marginRight={'100px'}>
                                <div className={styles.buttonFaqMenu}>
                                    <Link className={styles.faqMenuLink} href=''>
                                        <div id={key} className={styles.heading3} onClick={handleClickFaqButton}>
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

export default MenuFaq