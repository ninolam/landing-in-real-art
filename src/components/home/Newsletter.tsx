"use client"
"use client"
import { useEffect, useState } from "react"
import { useAppContext } from '../../context'
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import React from "react";
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../../types/types";


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
        <div className="frame-36598">
        <div className="frame-36563">
          <div className="frame-3351">
            <div className="newsletter">{nlTexts.title[lang_]}</div>
            <div className="newsletter-p-1">
              {nlTexts.description[lang_]}
            </div>
          </div>
          <div className="group-159">
            <div className="envoyez-votre-mail">{nlTexts.email_placeholder[lang_]}</div>
            <div className="rectangle-96"></div>
            <div className="rectangle-97"></div>
            

          </div>
        </div>
        <img className="unsplash-a-ug-tvv-qx-dhg" src="/img/unsplash-augtvvqxdhg.png" />
      </div>

    )
}

export default Newsletter