import { PresaleNftAboutArtistButtons, PresaleNftAboutArtistTexts, PresaleNftJoinMovementButtons, PresaleNftJoinMovementTexts, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const useSharedLogicAboutArtistNft = () => {

    const FIREBASE_COLLECTION = 'PresaleNFT_AboutArtist'

    const defaultTexts = {
      mainTitle: defaultLangObject,
      secondaryTitle: defaultLangObject,
      description: defaultLangObject
    }

    const defaultButtons = {
        discoverCollection: defaultLangObject
      }
  
    const [texts, setTexts] = useState<PresaleNftAboutArtistTexts>(defaultTexts)
    const [buttons, setButtons] = useState<PresaleNftAboutArtistButtons>(defaultButtons)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> Buttons
          const buttons = data[0] as PresaleNftAboutArtistButtons
          setButtons(buttons) 

          //Index 1 ===> Texts
          const texts = data[1] as PresaleNftAboutArtistTexts
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts, buttons, setButtons}
}

export default useSharedLogicAboutArtistNft