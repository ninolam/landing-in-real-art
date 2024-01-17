import { Box, SimpleGrid } from '@chakra-ui/react'
import styles from './Partners.module.scss'
import useSharedLogicPartners from './useSharedLogicPartners'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'


const Partners = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {partnersTexts, setPartnersTexts} = useSharedLogicPartners()

    return (
        // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
        // will have the same effect.*/}
        <div className={styles.partnersContainer}>
            <div id="partners" className={styles.partnersTitle}>
                {partnersTexts.mainTitle[lang_]}
            </div>
            <SimpleGrid columns={[1, null, 2]} spacing='150px' border='10px'>
                <Box height='150px' margin={'auto'} >
                    <img src='https://bye-buy-car.com/wp-content/uploads/2023/11/Logo.webp'/>
                </Box>
                <Box height='150px' margin={'auto'} >
                    <img src='https://bolides-legendes.com/wp-content/uploads/2023/06/logo.webp'/>
                </Box>
            </SimpleGrid>
        </div> 
)
}

export default Partners