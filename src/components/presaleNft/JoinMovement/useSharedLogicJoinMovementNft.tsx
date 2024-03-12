import { AboutTexts, FaqPage, FaqQuestions, PresaleNftButtons, PresaleNftTexts, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const useSharedLogicJoinMovementNft = () => {

    const FIREBASE_COLLECTION = 'PresaleNFT_JoinMovement'

    const defaultTexts = {
      mainTitle: defaultLangObject,
      mainDescription: defaultLangObject
    }

    const defaultButtons = {
        buyNft: defaultLangObject
      }
  
    const [texts, setTexts] = useState<PresaleNftTexts>(defaultTexts)
    const [buttons, setButtons] = useState<PresaleNftButtons>(defaultButtons)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> Buttons
          const buttons = data[0] as PresaleNftButtons
          setButtons(buttons) 

          //Index 1 ===> Texts
          const texts = data[1] as PresaleNftTexts
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts, buttons, setButtons}
}

export default useSharedLogicJoinMovementNft