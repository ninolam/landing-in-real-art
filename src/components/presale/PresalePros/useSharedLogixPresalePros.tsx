import React, { useEffect, useState } from 'react'
import { defaultLangObject } from '../../../types/types'
import { PresaleProsButtons, PresaleProsTexts } from '../../../types/presale.types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogixPresalePros = () => {
    const FIREBASE_PRESALE_PROS_COLLECTION = 'Presale_Pros'
    
    const defaultPresaleProsTexts = {
        mainTitle: defaultLangObject,
        mainDescription: defaultLangObject,
        buyArtWorkTitle: defaultLangObject,
        buyArtWorkDescription: defaultLangObject,
        exclusiveBenefitsTitle: defaultLangObject,
        exclusiveBenefitsDescription: defaultLangObject,
        bonusTitle: defaultLangObject,
        bonusDescription: defaultLangObject
    }

    const defaultPresaleProsButtons = {
        buyArtWork: defaultLangObject,
        buyArtWorkLink: '',
        exclusiveBenefits: defaultLangObject,
        exclusiveBenefitsLink: '',
        bonus: defaultLangObject,
        bonusLink: ''
    }

    const [presaleProsTexts, setPresaleProsTexts]     = useState<PresaleProsTexts>(defaultPresaleProsTexts)
    const [presaleProsButtons, setPresaleProsButtons] = useState<PresaleProsButtons>(defaultPresaleProsButtons)
    
    useEffect(() => {
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_PRESALE_PROS_COLLECTION);
          const documents  = await getDocs(collection_);
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> presalePros Buttons
          setPresaleProsButtons(data[0] as PresaleProsButtons)
          
          //Index 1 ===> presalePros Pros Texts
          setPresaleProsTexts(data[1] as PresaleProsTexts)
          
      }  
      fetchData()
      }, [])

      
  return {presaleProsTexts, setPresaleProsTexts, presaleProsButtons, setPresaleProsButtons}

}
export default useSharedLogixPresalePros