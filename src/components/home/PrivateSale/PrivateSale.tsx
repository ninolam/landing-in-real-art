"use client"
import styles from './PrivateSale.module.scss'
import { useAppContext } from '../../../context'
import React from "react";
import { Lang } from "../../../types/types";
import useSharedLogicPrivateSale from './useSharedLogicPrivateSale';
import parse from 'html-react-parser';

const PrivateSale = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {psTexts, setPsTexts} = useSharedLogicPrivateSale()
    /*
    const EmailInput = React.memo(() => {
      return <input type="text" className="email" autoFocus placeholder={emailPh}/>
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
            <div className={styles.group159}>
              <div className={styles.envoyezVotreMail}>{psTexts.email_placeholder[lang_]}</div>
              <div className={styles.rectangle96}></div>
              <div className={styles.rectangle97}></div>
              

            </div>
          </div>
          <div>
            <img className={styles.imagePS} src="/img/privateSale.png" />
          </div>
        
      </div>

    )
}

export default PrivateSale