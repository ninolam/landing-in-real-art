"use client"
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../../context'
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FaqButtons, FaqTexts, HelpIraData, Lang, defaultLangObject } from '../../types/types';

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
           <div className="question-01">
            <div className="comment-fonctionne-la-inrealart">
              {faqTexts.question1[lang_]}
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus1Ref} className="plus" alt="plus" src={imageSrc} />
            </div>
          </div>
          {isVisible && (
              <div className="answer">
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
          <div className="question-02">
            <div className="pour-qui">{faqTexts.question2[lang_]}</div>        
            <div onClick={toggleVisibility}>
              <img ref={imagePlus2Ref} className="plus" alt="plus" src={imageSrc} />
            </div>
          </div>
          
          {isVisible && (
              <div className="answer">
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
          <div className="question-03">
            <div className="y-a-t-il-un-guide-de-d-marrage">{faqTexts.question3[lang_]}</div>  
            <div onClick={toggleVisibility}>
              <img ref={imagePlus3Ref} className="plus" alt="plus" src={imageSrc} />
            </div>
          </div>          
          {isVisible && (
            <div className="answer">
              {faqTexts.answer3[lang_]}
            </div>
          )}
        </>
      );
    }

    
    return (
        <div className="home-faq">
        <div className="faq-left">
          <div className="faq">FAQ</div>
          <div
            className="faq-main-p">
            {faqTexts.faqMain[lang_]}
            <br />
            <br />
          </div>
          <div className="link-button2">
            <div className="button2">
              <div className="consulter-la-faq">{faqButtons.readFaq[lang_]}</div>
            </div>
          </div>
        </div>
        
        <div className="faq-right">
          <Question1/>
          <Question2/>
          <Question3/>
        </div>
      </div>

    )
}

export default Faq