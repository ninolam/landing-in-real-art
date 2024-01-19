"use client"
import styles from './PrivateSale.module.scss'
import { useAppContext } from '../../../context'
import React from "react";
import { Lang } from "../../../types/types";
import useSharedLogicPrivateSale from './useSharedLogicPrivateSale';
import parse from 'html-react-parser';
import { Button, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { IoSend } from 'react-icons/io5';

const PrivateSale = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {psTexts, setPsTexts} = useSharedLogicPrivateSale()
    /*
    const EmailInput = React.memo(() => {
      return <input type="text" className={styles.email} autoFocus placeholder={emailPh}/>
    });
    */
  
    return (
        <div id="privateSale" className={styles.frame36598}>
          <div className={styles.frame36563}>
            <div className={styles.frame3351}>
              <div className={styles.newsletter}>{psTexts.title[lang_]}</div>
              <div className={styles.newsletterP1}>
                {parse(psTexts.description[lang_])}
              </div>
            </div>
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
          <div>
            <img className={styles.imagePS} src="/img/privateSale.png" />
          </div>
        
      </div>

    )
}

export default PrivateSale