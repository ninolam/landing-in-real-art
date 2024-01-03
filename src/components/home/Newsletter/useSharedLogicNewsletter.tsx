import { useEffect, useState } from "react"
import { NewsletterData, NewsletterText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicNewsletter = () => {

    const FIREBASE_NEWSLETTER_COLLECTION = 'Newsletter'
  
    const [emailPh, setEmailPh]         = useState<string>('')
    const defaultNlText = {
      title: defaultLangObject,
      description: defaultLangObject,
      email_placeholder: defaultLangObject,
    }
    const [nlTexts, setNlTexts] = useState<NewsletterText>(defaultNlText)
  
    useEffect(() => {
      const fetchData = async () => {
          const nlCollection = collection(db, FIREBASE_NEWSLETTER_COLLECTION)
          const nlDocuments  = await getDocs(nlCollection)
          const nlData       = nlDocuments.docs.map(doc => doc.data() as NewsletterData)
          
          setNlTexts(nlData[0] as NewsletterText)
      }
      fetchData()
  
    }, [])


    return {nlTexts, setNlTexts}
}    

export default useSharedLogicNewsletter