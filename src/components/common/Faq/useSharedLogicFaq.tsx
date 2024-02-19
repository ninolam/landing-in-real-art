import { useEffect, useState } from "react";
import { FaqButtons, FaqTexts, Lang, defaultLangObject } from "../../../types/types";
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';


const useSharedLogicFaq = () => {

    const FIREBASE_FAQ_COLLECTION = 'Faq'
    
    const defaultFaqButtons = {
      readFaq: defaultLangObject,
      readFaqLink: ''
    }
    const defaultFaqTexts = {
        faqTitle: defaultLangObject,  
        faqMain: defaultLangObject,
        question1: defaultLangObject,
        question2: defaultLangObject,
        question3: defaultLangObject,
        answer1: defaultLangObject,
        answer2: defaultLangObject,
        answer3: defaultLangObject
    }
  
    const [faqButtons,setFaqButtons] = useState<FaqButtons>(defaultFaqButtons);
    const [faqTexts,setFaqTexts]     = useState<FaqTexts<Record<Lang, string>>>(defaultFaqTexts);
  
    useEffect(() => {
      const fetchData = async () => {
        const faqCollection = collection(db, FIREBASE_FAQ_COLLECTION);
        const faqDocuments  = await getDocs(faqCollection);
        const faqData       = faqDocuments.docs.map(doc => doc.data());
        
        //Index 0 ===> FAQ Buttons
        setFaqButtons(faqData[0] as FaqButtons)
        
        //Index 1 ===> FAQ Page

        //Index 2 ===> FAQ Text
        setFaqTexts(faqData[2] as FaqTexts<Record<Lang, string>>)
      }
      fetchData();
    }, [])


  return {faqButtons, faqTexts}
}

export default useSharedLogicFaq