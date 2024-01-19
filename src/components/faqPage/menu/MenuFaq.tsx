import { Box, Flex, Spacer } from '@chakra-ui/react'
import styles from './MenuFaq.module.scss'
import Link from 'next/link'
import useSharedLogicFaqPage from './useSharedLogicFaqPage'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'

export interface MenuFaqProps {
    containsEmail?: boolean
  }
  
const MenuFaq = ({containsEmail, ...props}: MenuFaqProps) => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    
    const {faqPage, setFaqPage} = useSharedLogicFaqPage()
    const faqPage_ = Object.entries(faqPage)
    console.log(faqPage_)

  return (

        <div className={styles.faqMenuContainer}>
        <Flex >
            {faqPage_.map(([key, value], index) => (
                <>
                <Box w='200px' h='10' bg='' marginRight={'100px'}>
                    <div className={styles.buttonFaqMenu}>
                        <Link className={styles.faqMenuLink} href=''>
                            <div className={styles.heading3}>{value.textButton[lang_]}</div>
                        </Link>  
                        </div>

                </Box>    
                <Spacer/>
                </>
            ))}
        </Flex>
        </div>
        
  )
}

export default MenuFaq