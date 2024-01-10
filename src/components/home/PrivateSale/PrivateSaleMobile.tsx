"use client"
import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import styles from './PrivateSaleMobile.module.scss'
import useSharedLogicPrivateSale from './useSharedLogicPrivateSale'
import parse from 'html-react-parser';
import { IoSend } from 'react-icons/io5'

const PrivateSaleMobile = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {psTexts, setPsTexts} = useSharedLogicPrivateSale()
  
  return (
    <div id="privateSale" className={styles["frame-PS-mobile"]}>
    {/*<img className={styles["unsplash-a-ug-tvv-qx-dhg"]} src="img/privateSale.png"/>*/}
    <div className={styles["frame-36598"]}>
      <div className={styles["newsletter"]}>{psTexts.title[lang_]}</div>
      <div className={styles["newsletter-description"]}>{parse(psTexts.description[lang_])}</div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          <FormControl color={'white'}>
          <FormLabel color={'white'}>{psTexts.email_placeholder [lang_]}</FormLabel>
            <Input type='email' color={'white'} placeholder={psTexts.email_placeholder [lang_]} focusBorderColor='white'/>
            <FormHelperText color={'white'}>We'll never share your email.</FormHelperText>
          </FormControl>
          <div className={styles.rectangleSendEmail}>
          <Button leftIcon={<IoSend />} colorScheme='#465c79' variant='solid'>
          </Button>
          </div>            
      </div>


    </div>
  </div>

  )
}

export default PrivateSaleMobile