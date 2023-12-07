"use client"
import { useEffect, useState } from "react"
import { useAppContext } from '../context'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import React from "react";
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../types/types";

const NewsLetter = () => {
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
        setTitle(nlData[0].title[lang_])
        setDescription(nlData[0].description[lang_])
        setEmailPh(nlData[0].email_placeholder[lang_])      
    }
    fetchData();

  }, []);

  useEffect(() => {
    setTitle(nlTexts.title[lang_])
    setDescription(nlTexts.description[lang_])
    setEmailPh(nlTexts.email_placeholder[lang_])      
  }, [lang]);
  
  /*
  const EmailInput = React.memo(() => {
    return <input type="text" className="email" autoFocus placeholder={emailPh}/>
  });
  */

    return (
      
        <div className="newsletter">
          <div className="overlap-4">
            <div className="rectangle-3" />
            <img className="unsplash-augtvvqxdhg" alt="Unsplash augtvvqxdhg" src="/img/unsplash-augtvvqxdhg.png" />
            <div className="group-4">
              <div className="frame-9">
                <div className="text-wrapper-6">{title}</div>
                <p className="ne-louper-pas-la">
                  {description}
                </p>
              </div>
              <div className="group-5">
                <div className="overlap-group-4">
                  {/*
                    <EmailInput></EmailInput>
                    */
                  }
                  
                  
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                  <img
                    className="material-symbols"
                    alt="Material symbols"
                    src="/img/material-symbols-arrow-insert.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default NewsLetter