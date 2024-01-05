import { useEffect, useState } from "react"
import { NewsletterData, NewsletterText, PrivateSaleData, PrivateSaleText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicPrivateSale = () => {

    const FIREBASE_PRIVATESALE_COLLECTION = 'PrivateSale'
  
    const [emailPh, setEmailPh]         = useState<string>('')
    const defaultPsText = {
      title: defaultLangObject,
      description: defaultLangObject,
      email_placeholder: defaultLangObject,
    }
    const [psTexts, setPsTexts] = useState<PrivateSaleText>(defaultPsText)
  
    useEffect(() => {
      const fetchData = async () => {
          const nlCollection = collection(db, FIREBASE_PRIVATESALE_COLLECTION)
          const nlDocuments  = await getDocs(nlCollection)
          const nlData       = nlDocuments.docs.map(doc => doc.data() as PrivateSaleData)
          
          setPsTexts(nlData[0] as PrivateSaleText)
      }
      fetchData()
  
    }, [])


    return {psTexts, setPsTexts}
}    

export default useSharedLogicPrivateSale