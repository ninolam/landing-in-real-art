"use client"
import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import styles from './NewsletterMobile.module.scss'
import useSharedLogicNewsletter from './useSharedLogicNewsletter'
import { IoSend } from 'react-icons/io5'

const NewsletterMobile = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {nlTexts, setNlTexts} = useSharedLogicNewsletter()
  
  return (
    <div className={styles["frame-48095806"]}>
    <img className={styles["unsplash-a-ug-tvv-qx-dhg"]} src="img/img-newsletter-mobile.png"/>
    <div className={styles["frame-36598"]}>
      <div className={styles["newsletter"]}>{nlTexts.title[lang_]}</div>
      <div className={styles["newsletter-description"]}>{nlTexts.description[lang_]}</div>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
          <FormControl color={'white'}>
          <FormLabel color={'white'}>{nlTexts.email_placeholder [lang_]}</FormLabel>
            <Input type='email' color={'white'} placeholder={nlTexts.email_placeholder [lang_]} focusBorderColor='white'/>
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

export default NewsletterMobile