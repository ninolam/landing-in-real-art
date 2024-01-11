"use client"
import { Button, Checkbox, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import styles from './NewsletterMobile.module.scss'
import useSharedLogicNewsletter from './useSharedLogicNewsletter'
import { IoSend } from 'react-icons/io5'
import { useState } from 'react'

const NewsletterMobile = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {nlTexts, setNlTexts, 
      email, setEmail, isEmailValid, setEmailValid, checkboxNL, setCheckboxNL, 
      checkboxPS, setCheckboxPS, validateEmail, 
      handleChangeEmail, handleChangeCheckBoxNL, handleChangeCheckBoxPS, handlSendEmail} 
      = useSharedLogicNewsletter()
  
    return (
      <div className={styles["frame-48095806"]}>
      <img className={styles["unsplash-a-ug-tvv-qx-dhg"]} src="img/img-newsletter-mobile.png"/>
      <div className={styles["frame-36598"]}>
        <div className={styles["newsletter"]}>{nlTexts.title[lang_]}</div>
        <div className={styles["newsletter-description"]}>{nlTexts.description[lang_]}</div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center'}}>
            <FormControl color={'white'} isInvalid={!isEmailValid}>
            <FormLabel color={'white'}></FormLabel>
              <Input type='email' value={email} 
                color={'grey'} backgroundColor={'white'} placeholder={nlTexts.email_placeholder [lang_]} focusBorderColor='white' 
                onChange={handleChangeEmail} />
             {!isEmailValid && <FormErrorMessage>{nlTexts.sendEmailErrorMsg[lang_]}</FormErrorMessage>}
              {/*<FormHelperText color={'white'}>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <div className={styles.rectangleSendEmail}>
            <Button leftIcon={<IoSend />} colorScheme='#465c79' variant='solid' onClick={handlSendEmail}/>
            
            </div>            
        </div>
        <div className={styles.checkboxEmail}>
          <Stack spacing={5} direction='row'>
            <Checkbox color={'white'} colorScheme='white' onChange={handleChangeCheckBoxNL}>{nlTexts.checkboxNewsLetter[lang_]}</Checkbox>
            <Checkbox  color={'white'} colorScheme='white' onChange={handleChangeCheckBoxPS}>{nlTexts.checkboxPrivateSale[lang_]}</Checkbox>
          </Stack>
        </div>

      </div>
    </div>

    )
}

export default NewsletterMobile