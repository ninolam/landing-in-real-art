import React, { useEffect, useState } from 'react'
import { FaqHeroSection, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicFaqHeroSection = () => {

    const FIREBASE_FAQ_COLLECTION = 'Faq'
    
    const defaultFaqHeroSection = {
      mainTitle: defaultLangObject
    }
    
    const [faqHeroSection, setFaqHeroSection] = useState<FaqHeroSection>(defaultFaqHeroSection)

    useEffect(() => {
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_FAQ_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 3 ===> Faq HeroSection
          const faqHeroSection = data[3] as FaqHeroSection
          setFaqHeroSection(faqHeroSection) 
        }
        
        fetchData();
        
      }, [])


  return {faqHeroSection, setFaqHeroSection}
}

export default useSharedLogicFaqHeroSection