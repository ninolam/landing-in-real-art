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
        <div id="partners" className={styles.partnersContainer}>
            <div className={styles.partnersTitle}>
                {partnersTexts.mainTitle[lang_]}
            </div>
            <SimpleGrid columns={[1, null, 3]} spacing='100px' border='10px'>
                <Box height='100px' width='150px' margin={'auto'} >
                    <img src='img/partners/byebuycar.webp' alt=''/>
                </Box>
                <Box height='100px' width='200px' margin={'auto'} >
                    <img src='img/partners/retrovrs.png' alt=''/>
                </Box>
                <Box height='100px' width='200px' margin={'auto'} style={{position: 'relative', top: '-50px'}}>
                    <img src='img/partners/cyberAlt.jpg' alt=''/>
                </Box>
            </SimpleGrid>
        </div> 
)
}

export default Partners