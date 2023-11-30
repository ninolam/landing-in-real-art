"use client"
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import Add1 from '../components/Add1'
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
  const [isAnswer1Visible, setIsAnswer1Visible] = useState<boolean>(false);
  const [isAnswer2Visible, setIsAnswer2Visible] = useState<boolean>(false);
  const [isAnswer3Visible, setIsAnswer3Visible] = useState<boolean>(false);
  const [imageExpandQuestion1, setImageExpandQuestion1] = useState<string>("/img/plus_16px.png");
  const [imageExpandQuestion2, setImageExpandQuestion2] = useState<string>("/img/plus_16px.png");
  const [imageExpandQuestion3, setImageExpandQuestion3] = useState<string>("/img/plus_16px.png");

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
  
  
  //-------------------------------------------------------------------
  const toggleAnswer = (index: number) => {
    const currentImage: any = index === 1 ? imagePlus1Ref.current : index === 2 ? imagePlus2Ref.current : imagePlus3Ref.current;
    if (currentImage) {
      const src = currentImage.src; 
      if (src.includes('plus')) {
        if (index === 1) {
          setIsAnswer1Visible(true);
          setImageExpandQuestion1("/img/minus_16px.png");
        } else if (index === 2) {
          setIsAnswer2Visible(true);
          setImageExpandQuestion2("/img/minus_16px.png");
        } else if (index === 3) {
          setIsAnswer3Visible(true);
          setImageExpandQuestion3("/img/minus_16px.png");
        }
      } else {
        if (index === 1) {
          setIsAnswer1Visible(false);
          setImageExpandQuestion1("/img/plus_16px.png");
        } else if (index === 2) {
          setIsAnswer2Visible(false);
          setImageExpandQuestion2("/img/plus_16px.png");
        } else if (index === 3) {
          setIsAnswer3Visible(false);
          setImageExpandQuestion3("/img/plus_16px.png");
        }
      }
    }
  }

    return (
        <div className="group-3">
          <div className="wrapper">
            <div className="question">
              <p className="text-wrapper-3">{question1}</p>
              <div onClick={() => toggleAnswer(1)}>
                <img ref={imagePlus1Ref} className="plus" alt="plus" src={imageExpandQuestion1} />
              </div>
            </div>
            {isAnswer1Visible && (
              <div className="answer">
                {answer1}
              </div>
              )}
            <div className="question">
              <div className="text-wrapper-3">{question2}</div>
              <div onClick={() => toggleAnswer(2)}>
                <img ref={imagePlus2Ref} className="plus" alt="plus" src={imageExpandQuestion2} />
              </div>
            </div>
            {isAnswer2Visible && (
              <div className="answer">
                {answer2}
              </div>
              )}
            <div className="question">
              <p className="text-wrapper-3">{question3}</p>
              <div onClick={() => toggleAnswer(3)}>
                <img ref={imagePlus3Ref} className="plus" alt="plus" src={imageExpandQuestion3} />
              </div>
            </div>
            {isAnswer3Visible && (
              <div className="answer">
                {answer3}
              </div>
              )}
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