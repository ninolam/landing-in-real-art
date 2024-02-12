import { AboutTexts, FaqPage, FaqQuestions, defaultLangObject } from '../../types/types'
import { db } from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const useSharedLogicAboutPage = () => {

    const FIREBASE_ABOUT_PAGE_COLLECTION = 'About'

    const defaultAboutTexts = {
      mainTitle: defaultLangObject,
      mainDescription: defaultLangObject
    }

    const [texts, setTexts] = useState<AboutTexts>(defaultAboutTexts)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_ABOUT_PAGE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> About Page Texts
          const texts = data[0] as AboutTexts
          console.log(texts)
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts}
}

export default useSharedLogicAboutPage