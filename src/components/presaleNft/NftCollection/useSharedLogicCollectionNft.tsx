import { CollectionLeloluceNfts, LeloluceNft, PresaleNftCollectionTexts, defaultLangObject } from '../../../types/types'
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
      url: ''
  }

    const defaultTexts = {
      mainTitle: defaultLangObject,
      secondaryTitle: defaultLangObject
    }

    const [nfts, setNfts] = useState<CollectionLeloluceNfts>([defaultLeloluceNft])
    const [texts, setTexts] = useState<PresaleNftCollectionTexts>(defaultTexts)

    async function getUrlPhoto(photo: string): Promise<string> {
      if (photo === "") {
          return ""
      }

      let imageRef: any = null
      try {
          imageRef = ref(storage, photo)
          const urlPhoto = await getDownloadURL(imageRef)
          return urlPhoto;    
      } catch (error) {
          return ''
      }
    }


    async function transformArtworksPhotos(nfts: CollectionLeloluceNfts): Promise<CollectionLeloluceNfts> {
      const promises = nfts.map(async nft => ({
          ...nft,
          url: await getUrlPhoto(nft.image)
      }))

      return Promise.all(promises);
  }


    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());

          //Index 0 ===> Nfts
          const nfts_ = data[0]['nfts'] as CollectionLeloluceNfts
          const nfts_tmp = await transformArtworksPhotos(nfts_)
          setNfts(nfts_tmp)  
          
          //Index 1 ===> Texts
          const texts = data[1] as PresaleNftCollectionTexts
          setTexts(texts) 
          console.log(texts)
        }
        
        fetchData();
        
      }, [])
  
  return {texts, setTexts, nfts,setNfts }
}

export default useSharedLogicCollectionNft