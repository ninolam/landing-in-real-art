import { PresaleNftCollectionTexts, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'

const useSharedLogicCollectionNft = () => {

    const FIREBASE_COLLECTION = 'PresaleNFT_Collection'

    const defaultTexts = {
      mainTitle: defaultLangObject,
      secondaryTitle: defaultLangObject
    }

    const [texts, setTexts] = useState<PresaleNftCollectionTexts>(defaultTexts)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());

          //Index 1 ===> Texts
          const texts = data[1] as PresaleNftCollectionTexts
          setTexts(texts) 
          console.log(texts)
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts}
}

export default useSharedLogicCollectionNft