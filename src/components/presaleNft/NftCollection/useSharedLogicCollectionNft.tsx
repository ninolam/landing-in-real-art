import { CollectionLeloluceNfts, LeloluceNft, PresaleNftCollectionButtons, PresaleNftCollectionTexts, defaultLangObject } from '../../../types/types'
import { db, storage } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from 'react'

const useSharedLogicCollectionNft = () => {

    const FIREBASE_COLLECTION = 'PresaleNFT_Collection'

    const defaultLeloluceNft = {
      description: defaultLangObject,
      image: '',
      name: defaultLangObject,
      price: '',
      urlImage: '',
      urlVideo: '',
      video: ''
  }

    const defaultTexts = {
      mainTitle: defaultLangObject,
      secondaryTitle: defaultLangObject,
      msgSuccessEmail: defaultLangObject,
      msgErrorEmail: defaultLangObject
    }

    const defaultButtons = {
      buyLeloluceNft: defaultLangObject,
      preBuyLeloluceNft: defaultLangObject,
      viewMoreNfts: defaultLangObject
    }

    const [nfts, setNfts] = useState<CollectionLeloluceNfts>([defaultLeloluceNft])
    const [texts, setTexts] = useState<PresaleNftCollectionTexts>(defaultTexts)
    const [buttons, setButtons] = useState<PresaleNftCollectionButtons>(defaultButtons)
    
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

    //------------------------------------------------------------ transformArtworksPhotos
    async function transformArtworksResources(nfts: CollectionLeloluceNfts): Promise<CollectionLeloluceNfts> {
      const promises = nfts.map(async nft => ({
          ...nft,
          urlImage: await getUrlResource(nft.image),
          urlVideo: await getUrlResource(nft.video)
      }))

      return Promise.all(promises);
    }

    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());

          //Index 0 ===> Buttons
          const buttons = data[0] as PresaleNftCollectionButtons
          setButtons(buttons) 
          
          //Index 1 ===> Nfts
          const nfts_ = data[1]['nfts'] as CollectionLeloluceNfts
          const nfts_tmp = await transformArtworksResources(nfts_)
          console.log(nfts_tmp)
          setNfts(nfts_tmp)  
          
          //Index 2 ===> Texts
          const texts = data[2] as PresaleNftCollectionTexts
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
  return { buttons, setButtons, texts, setTexts, nfts,setNfts }
}

export default useSharedLogicCollectionNft