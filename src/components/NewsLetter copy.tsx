"use client"
import { useEffect, useState } from "react"
import { useAppContext } from '../context'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';

const NewsLetter = () => {
  //Get the language of the global context
  const {lang } = useAppContext()

  const FIREBASE_NEWSLETTER_COLLECTION = 'Newsletter'
  const FIREBASE_KEY_TITLE             = 'title'
  const FIREBASE_KEY_DESC              = 'description'
  const FIREBASE_KEY_EMAIL_PH_DESC     = 'email_placeholder'
  

  const [title, setTitle]             = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [emailPh, setEmailPh]         = useState<string>('')

  useEffect(() => {

    const fetchText = async () => {
        const nlCollection = collection(db, FIREBASE_NEWSLETTER_COLLECTION);
        const nlDocuments  = await getDocs(nlCollection);
        const nlData       = nlDocuments.docs.map(doc => doc.data());
        
        setTitle(nlData[0][FIREBASE_KEY_TITLE][lang])
        setDescription(nlData[0][FIREBASE_KEY_DESC][lang])
        setEmailPh(nlData[0][FIREBASE_KEY_EMAIL_PH_DESC][lang])
        
    }
    fetchText();

  }, [lang]);
  
    return (
      
        <div className="newsletter">
          <div className="overlap-4">
            <div className="rectangle-3" />
            <img className="unsplash-augtvvqxdhg" alt="Unsplash augtvvqxdhg" src="/img/unsplash-augtvvqxdhg.png" />
            <div className="newsletter-left-blank"></div>
            <div className="newsletter-left">
              <div className="frame-9">
                <div className="text-wrapper-6">{title}</div>
                <p className="ne-louper-pas-la">
                  {description}
                </p>
                <input type="email" placeholder="Envoyez votre mail !" />
              </div>
              
              <div>
                <input type="email" placeholder="Envoyez votre mail !" />
                <button type="submit"><i className="arrow">→</i></button>
              </div>
            </div>
          </div>
        </div>

    )
}

export default NewsLetter