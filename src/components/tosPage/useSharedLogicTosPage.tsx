import { AboutTexts, FaqPage, FaqQuestions, TosTexts, defaultLangObject } from '../../types/types'
import { db } from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const useSharedLogicTosPage = (fireBaseTosPageCollection:string) => {

    const defaultTosTexts = {
      mainTitle: defaultLangObject,
      mainContent: defaultLangObject,
    }

    const [texts, setTexts] = useState<TosTexts>(defaultTosTexts)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, fireBaseTosPageCollection);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> About Page Texts
          const texts = data[0] as TosTexts
          console.log(texts)
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts}
}

export default useSharedLogicTosPage