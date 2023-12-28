"use client"
import styles from './Faq.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../../context'
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FaqButtons, FaqTexts, HelpIraData, Lang, defaultLangObject } from '../../../types/types';

const Faq = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const FIREBASE_FAQ_COLLECTION = 'Faq'
    
    const defaultFaqButtons = {
      readFaq: defaultLangObject
    }
    const defaultFaqTexts = {
      faqMain: defaultLangObject,
      question1: defaultLangObject,
      question2: defaultLangObject,
      question3: defaultLangObject,
      answer1: defaultLangObject,
      answer2: defaultLangObject,
      answer3: defaultLangObject
    }
  
    const [faqButtons,setFaqButtons] = useState<FaqButtons>(defaultFaqButtons);
    const [faqTexts,setFaqTexts]     = useState<FaqTexts>(defaultFaqTexts);
  
    useEffect(() => {
      const fetchData = async () => {
        const faqCollection = collection(db, FIREBASE_FAQ_COLLECTION);
        const faqDocuments  = await getDocs(faqCollection);
        const faqData       = faqDocuments.docs.map(doc => doc.data());
        
        //Index 0 ===> FAQ Buttons
        setFaqButtons(faqData[0] as FaqButtons)
        
        //Index 1 ===> FAQ Text
        setFaqTexts(faqData[1] as FaqTexts)
      }
      fetchData();
    }, [])
  
    const imagePlus1Ref = useRef(null);
    const imagePlus2Ref = useRef(null);
    const imagePlus3Ref = useRef(null);
    
    
    const useQuestionVisibility = (initialVisibility: boolean, plusImageSrc: string, minusImageSrc: string) => {
      const [isVisible, setIsVisible] = useState<boolean>(initialVisibility);
      const [imageSrc, setImageSrc] = useState<string>(plusImageSrc);
    
      const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setImageSrc(isVisible ? plusImageSrc : minusImageSrc);
      };
    
      return { isVisible, imageSrc, toggleVisibility };
    };
    
    const Question1 = () => {
      const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png");
      return (
        <>
           <div className={styles.question01}>
            <div className={styles.commentFonctionneLaInrealart}>
              {faqTexts.question1[lang_]}
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus1Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
          </div>
          {isVisible && (
              <div className={styles.answer}>
                {faqTexts.answer1[lang_]}
              </div>
            )}
        </>  
      )
    }
    
    const Question2 = () => {
      const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png");
      return (
        <>
          <div className={styles.question02}>
            <div className={styles.pourQui}>{faqTexts.question2[lang_]}</div>        
            <div onClick={toggleVisibility}>
              <img ref={imagePlus2Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
          </div>
          
          {isVisible && (
              <div className={styles.answer}>
                {faqTexts.answer2[lang_]}
              </div>
            )}
        </>
      )
    }
    
    const Question3 = () => {
      const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png");
      return (
        <>
          <div className={styles.question03}>
            <div className={styles.startingGuide}>{faqTexts.question3[lang_]}</div>  
            <div onClick={toggleVisibility}>
              <img ref={imagePlus3Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
          </div>          
          {isVisible && (
            <div className={styles.answer}>
              {faqTexts.answer3[lang_]}
            </div>
          )}
        </>
      );
    }

    
    return (
      <div className={styles.homeFaq}>
        <div className={styles.faqLeft}>
          <div className={styles.faq}>FAQ</div>
          <div
            className={styles.faqMainP}>
            {faqTexts.faqMain[lang_]}
            <br />
            <br />
          </div>
          <div className={styles.linkButton2}>
            <div className={styles.button2}>
              <div className={styles.readTheFaq}>{faqButtons.readFaq[lang_]}</div>
            </div>
          </div>
        </div>
        
        <div className={styles.faqRight}>
          <Question1/>
          <Question2/>
          <Question3/>
        </div>
      </div>

    )
}

export default Faq