import React, { useEffect, useState } from 'react'
import { Lang, PartnersData, PartnersTexts, defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicPartners = () => {

    const FIREBASE_NEWSLETTER_COLLECTION = 'Partners'
  
    const defaultPartnersText = {
        mainTitle: defaultLangObject
    }

    const [partnersTexts, setPartnersTexts] = useState<PartnersTexts<Record<Lang, string>>>(defaultPartnersText)
  
    useEffect(() => {
      const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_NEWSLETTER_COLLECTION)
          const documents  = await getDocs(collection_)
          const data       = documents.docs.map(doc => doc.data() as PartnersData)
          
          setPartnersTexts(data[0] as PartnersTexts<Record<Lang, string>>)
      }
      fetchData()
  
    }, [])



    return {partnersTexts, setPartnersTexts}
}

export default useSharedLogicPartners