"use client"
import styles from './Newsletter.module.scss'
import { useEffect, useState } from "react"
import { useAppContext } from '../../../context'
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import React from "react";
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../../../types/types";


const Newsletter = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const FIREBASE_NEWSLETTER_COLLECTION = 'Newsletter'
  
    const [title, setTitle]             = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [emailPh, setEmailPh]         = useState<string>('')
    const defaultNlText = {
      title: defaultLangObject,
      description: defaultLangObject,
      email_placeholder: defaultLangObject,
    }
    const [nlTexts, setNlTexts] = useState<NewsletterText>(defaultNlText)
  
    useEffect(() => {
      const fetchData = async () => {
          const nlCollection = collection(db, FIREBASE_NEWSLETTER_COLLECTION);
          const nlDocuments  = await getDocs(nlCollection);
          const nlData       = nlDocuments.docs.map(doc => doc.data() as NewsletterData)
          
          setNlTexts(nlData[0] as NewsletterText)
      }
      fetchData();
  
    }, []);
  
    /*
    const EmailInput = React.memo(() => {
      return <input type="text" className="email" autoFocus placeholder={emailPh}/>
    });
    */
  
    return (
        <div className={styles.frame36598}>
        <div className={styles.frame36563}>
          <div className={styles.frame3351}>
            <div className={styles.newsletter}>{nlTexts.title[lang_]}</div>
            <div className={styles.newsletterP1}>
              {nlTexts.description[lang_]}
            </div>
          </div>
          <div className={styles.group159}>
            <div className={styles.envoyezVotreMail}>{nlTexts.email_placeholder[lang_]}</div>
            <div className={styles.rectangle96}></div>
            <div className={styles.rectangle97}></div>
            

          </div>
        </div>
        <img className={styles.imageNL} src="/img/unsplash-augtvvqxdhg.png" />
      </div>

    )
}

export default Newsletter