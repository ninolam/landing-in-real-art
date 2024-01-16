import React, { useEffect, useState } from 'react'
import { Lang, PresaleDataButtons, PresaleDataTexts, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useAppContext } from '../../../context'


const useSharedLogicHeroSection = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const FIREBASE_PRESALE_HERO_SECTION_COLLECTION  = 'Presale_HeroSection'

    const defaultPresaleButtons = {
        seeDrop: defaultLangObject,
        seeDropLink: ''
    }

    const defaultPresaleTexts = {
        title1: defaultLangObject,
        title2: defaultLangObject,
        description: defaultLangObject
    }

    const [presaleButtons, setPresaleButtons] = useState<PresaleDataButtons>(defaultPresaleButtons)
    const [presaleTexts, setPresaleTexts]     = useState<PresaleDataTexts>(defaultPresaleTexts)
    
    useEffect(() => {
      const fetchData = async () => {
        const presaleCollection = collection(db, FIREBASE_PRESALE_HERO_SECTION_COLLECTION);
        const presaleDocuments  = await getDocs(presaleCollection);
        const presaleData       = presaleDocuments.docs.map(doc => doc.data())

        //Index 0 ===> Header_Buttons
        setPresaleButtons(presaleData[0] as PresaleDataButtons)
        
        //Index 1 ===> Header Text
        setPresaleTexts(presaleData[1] as PresaleDataTexts)
        
      }
  
      fetchData();
    }, [])
  

    
  return {
        presaleButtons, setPresaleButtons, 
        presaleTexts, setPresaleTexts
  }

}

export default useSharedLogicHeroSection