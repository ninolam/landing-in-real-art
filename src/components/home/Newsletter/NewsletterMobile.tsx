"use client"
import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
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
          <FormLabel color={'white'}></FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'} placeholder={nlTexts.email_placeholder [lang_]} focusBorderColor='white'/>
            {/*<FormHelperText color={'white'}>We'll never share your email.</FormHelperText>*/}
          </FormControl>
          <div className={styles.rectangleSendEmail}>
          <Button leftIcon={<IoSend />} colorScheme='#465c79' variant='solid'>
          </Button>
          </div>            
      </div>
      <div className={styles.checkboxEmail}>
        <Stack spacing={5} direction='row'>
          <Checkbox color={'white'} colorScheme='white'>Newsletter</Checkbox>
          <Checkbox  color={'white'} colorScheme='white'>
            Vente privée
          </Checkbox>
        </Stack>
      </div>

    </div>
  </div>

  )
}

export default NewsletterMobile