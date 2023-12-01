"use client"
import { useEffect, useState } from "react"
import { useAppContext } from '../context'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import React from "react";
import { NewsletterData } from "../types/types";

const NewsLetter = () => {
  //Get the language of the global context
  const {lang } = useAppContext()

  const FIREBASE_NEWSLETTER_COLLECTION = 'Newsletter'

  const [title, setTitle]             = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [emailPh, setEmailPh]         = useState<string>('')

  useEffect(() => {

    const fetchText = async () => {
        const nlCollection = collection(db, FIREBASE_NEWSLETTER_COLLECTION);
        const nlDocuments  = await getDocs(nlCollection);
        const nlData       = nlDocuments.docs.map(doc => doc.data() as NewsletterData)
        
        setTitle(nlData[0].title[lang])
        setDescription(nlData[0].description[lang])
        setEmailPh(nlData[0].email_placeholder[lang])
        
    }
    fetchText();

  }, [lang]);
  
  const EmailInput = React.memo(() => {
    return <input type="text" className="email" autoFocus placeholder={emailPh}/>
  });

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