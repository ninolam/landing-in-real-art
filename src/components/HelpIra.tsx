"use client"
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { FaqButtons, FaqTexts, HelpIraData, Lang, defaultLangObject } from '../types/types';


const HelpIra = () => {
  
  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const FIREBASE_FAQ_COLLECTION = 'Faq'
  
  const [question1, setQuestion1] = useState<string>('');
  const [question2, setQuestion2] = useState<string>('');
  const [question3, setQuestion3] = useState<string>('');
  const [answer1, setAnswer1]     = useState<string>('');
  const [answer2, setAnswer2]     = useState<string>('');
  const [answer3, setAnswer3]     = useState<string>('');
  const [faqMain, seFaqMain]      = useState<string>('');
  const [readFaq, setReadFaq]     = useState<string>('');
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
      setReadFaq(faqData[0].readFaq[lang])
      
      //Index 1 ===> FAQ Text
      setFaqTexts(faqData[1] as FaqTexts)
      seFaqMain(faqData[1].faqMain[lang])
      setQuestion1(faqData[1].question1[lang])
      setQuestion2(faqData[1].question2[lang])
      setQuestion3(faqData[1].question3[lang])
      setAnswer1(faqData[1].answer1[lang])
      setAnswer2(faqData[1].answer2[lang])
      setAnswer3(faqData[1].answer3[lang])
    }
    fetchData();
  }, [])

  useEffect(() => {
    // Buttons
    setReadFaq(faqButtons.readFaq[lang_])
      
    // Texts
    seFaqMain(faqTexts.faqMain[lang_])
    setQuestion1(faqTexts.question1[lang_])
    setQuestion2(faqTexts.question2[lang_])
    setQuestion3(faqTexts.question3[lang_])
    setAnswer1(faqTexts.answer1[lang_])
    setAnswer2(faqTexts.answer2[lang_])
    setAnswer3(faqTexts.answer3[lang_])
  }, [lang]);

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
        <div className="question">
          <p className="text-wrapper-3">{question1}</p>
          <div onClick={toggleVisibility}>
            <img ref={imagePlus1Ref} className="plus" alt="plus" src={imageSrc} />
          </div>
        </div>
        {isVisible && (
            <div className="answer">
              {answer1}
            </div>
          )}
      </>  
    )
  }
  
  const Question2 = () => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png");
    return (
      <>
        <div className="question">
          <div className="text-wrapper-3">{question2}</div>
          <div onClick={toggleVisibility}>
            <img ref={imagePlus2Ref} className="plus" alt="plus" src={imageSrc} />
          </div>
        </div>
        {isVisible && (
            <div className="answer">
              {answer2}
            </div>
          )}
      </>
    )
  }
  
  const Question3 = () => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png");
    return (
      <>
        <div className="question">
          <p className="text-wrapper-3">{question3}</p>
          <div onClick={toggleVisibility}>
            <img ref={imagePlus3Ref} className="plus" alt="plus" src={imageSrc} />
          </div>
          
        </div>
        {isVisible && (
          <div className="answer">
            {answer3}
          </div>
        )}
      </>
    );
  }

    return (
        <div className="help">
          <div className="help-right">
            <Question1 />
            <Question2 />
            <Question3 />
          </div>
          <div className="frame-9">
            <div className="text-wrapper-2">FAQ</div>
            <p className="text-wrapper-4">
              {faqMain}
            </p>
            <div className="link-button">
              <button className="button">
                <div className="text-wrapper-5">{readFaq}</div>
              </button>
            </div>
          </div>
        </div>


    )

}

export default HelpIra