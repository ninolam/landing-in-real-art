"use client"
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '../context'
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';


const HelpIra = () => {
  
  //Get the language of the global context
  const {lang } = useAppContext()

  const FIREBASE_FAQ_COLLECTION = 'Faq'
  const FIREBASE_KEY_FAQ_MAIN   = 'faqMain'
  const FIREBASE_KEY_QUESTION1  = 'question1'
  const FIREBASE_KEY_QUESTION2  = 'question2'
  const FIREBASE_KEY_QUESTION3  = 'question3'
  const FIREBASE_KEY_ANSWER1    = 'answer1'
  const FIREBASE_KEY_ANSWER2    = 'answer2'
  const FIREBASE_KEY_ANSWER3    = 'answer3'
  const FIREBASE_KEY_READ_FAQ   = 'readFaq'
  
  let LANGUAGE                  = lang

  const [question1, setQuestion1] = useState<string>('');
  const [question2, setQuestion2] = useState<string>('');
  const [question3, setQuestion3] = useState<string>('');
  const [answer1, setAnswer1]     = useState<string>('');
  const [answer2, setAnswer2]     = useState<string>('');
  const [answer3, setAnswer3]     = useState<string>('');
  const [faqMain, seFaqMain]      = useState<string>('');
  const [readFaq, setReadFaq]     = useState<string>('');
  useEffect(() => {

    const fetchText = async () => {
        const faqCollection = collection(db, FIREBASE_FAQ_COLLECTION);
        const faqDocuments  = await getDocs(faqCollection);
        const faqData       = faqDocuments.docs.map(doc => doc.data());
        //console.log(faqData)  
        //Index 0 ===> FAQ Buttons
        setReadFaq(faqData[0][FIREBASE_KEY_READ_FAQ][LANGUAGE])
        
        //Index 1 ===> FAQ Text
        seFaqMain(faqData[1][FIREBASE_KEY_FAQ_MAIN][LANGUAGE])
        setQuestion1(faqData[1][FIREBASE_KEY_QUESTION1][LANGUAGE])
        setQuestion2(faqData[1][FIREBASE_KEY_QUESTION2][LANGUAGE])
        setQuestion3(faqData[1][FIREBASE_KEY_QUESTION3][LANGUAGE])
        setAnswer1(faqData[1][FIREBASE_KEY_ANSWER1][LANGUAGE])
        setAnswer2(faqData[1][FIREBASE_KEY_ANSWER2][LANGUAGE])
        setAnswer3(faqData[1][FIREBASE_KEY_ANSWER3][LANGUAGE])
    }
    fetchText();

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
        <div className="group-3">
          <div className="wrapper">
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