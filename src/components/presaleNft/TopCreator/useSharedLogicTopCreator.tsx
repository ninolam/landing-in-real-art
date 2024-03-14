import { CollectionLeloluceNfts, LeloluceNft, PresaleNftCollectionButtons, PresaleNftCollectionTexts, PresaleNftTopCreator, PresaleNftTopCreators, PresaleNftTopCreatorsButtons, PresaleNftTopCreatorsTexts, defaultLangObject } from '../../../types/types'
import { db, storage } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from 'react'

const useSharedLogicTopCreator = () => {

    const FIREBASE_COLLECTION = 'PresaleNft_TopCreators'

    const defaultTopCreator = {
      artistName: '',
      artistDescription: defaultLangObject,
      photo: '',
      urlPhoto: '',
    }

    const defaultTopCreators = {
      card1: defaultTopCreator,
      card2: defaultTopCreator,
      card3: defaultTopCreator
    }

    const defaultTexts = {
      mainDescription: defaultLangObject,
      mainTitle: defaultLangObject
    }

    const defaultButtons = {
      discoverRwa: defaultLangObject,
    }

    const [topCreators, setTopCreators] = useState<PresaleNftTopCreators>(defaultTopCreators)
    const [texts, setTexts]             = useState<PresaleNftTopCreatorsTexts>(defaultTexts)
    const [buttons, setButtons]         = useState<PresaleNftTopCreatorsButtons>(defaultButtons)
    
    //------------------------------------------------------------ getUrlPhoto
    async function getUrlResource(photo: string): Promise<string> {
      if (photo === "") {
          return ""
      }

      let resourceRef: any = null
      try {
        resourceRef = ref(storage, photo)
          const urlPhoto = await getDownloadURL(resourceRef)
          return urlPhoto;    
      } catch (error) {
          return ''
      }
    }

    //------------------------------------------------------------ transformTopCreatorPhoto
    async function transformTopCreatorPhoto(topCreator: PresaleNftTopCreator) {
      const urlPhoto_ = await getUrlResource(topCreator.photo)
      return urlPhoto_
    }

    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());

          //Index 0 ===> Buttons
          const buttons = data[0] as PresaleNftTopCreatorsButtons
          setButtons(buttons) 
          
          //Index 1 ===> Top Creators Cards
          const topCreators = data[1] as PresaleNftTopCreators
          topCreators.card1.urlPhoto = await transformTopCreatorPhoto(topCreators.card1)
          topCreators.card2.urlPhoto = await transformTopCreatorPhoto(topCreators.card2)
          topCreators.card3.urlPhoto = await transformTopCreatorPhoto(topCreators.card3)
          setTopCreators(topCreators) 

          //Index 2 ===> Texts
          const texts = data[2] as PresaleNftTopCreatorsTexts
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return { buttons, setButtons, texts, setTexts, topCreators, setTopCreators }
}

export default useSharedLogicTopCreator