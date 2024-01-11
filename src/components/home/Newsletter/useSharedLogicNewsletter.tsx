import { useEffect, useState } from "react"
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicNewsletter = () => {

    const FIREBASE_NEWSLETTER_COLLECTION = 'Newsletter'
  
    const [email, setEmail]             = useState('')
    const [isEmailValid, setEmailValid] = useState(true)
    const [checkboxNL, setCheckboxNL]   = useState(false);
    const [checkboxPS, setCheckboxPS]   = useState(false);

    const defaultNlText = {
      title: defaultLangObject,
      description: defaultLangObject,
      email_placeholder: defaultLangObject,
      checkboxNewsLetter: defaultLangObject,
      checkboxPrivateSale: defaultLangObject,
      sendEmailErrorMsg: defaultLangObject
    }
    const [nlTexts, setNlTexts] = useState<NewsletterText<Record<Lang, string>>>(defaultNlText)
  
    useEffect(() => {
      const fetchData = async () => {
          const nlCollection = collection(db, FIREBASE_NEWSLETTER_COLLECTION)
          const nlDocuments  = await getDocs(nlCollection)
          const nlData       = nlDocuments.docs.map(doc => doc.data() as NewsletterData)
          
          setNlTexts(nlData[0] as NewsletterText<Record<Lang, string>>)
      }
      fetchData()
  
    }, [])

    // Email validation function
    const validateEmail = (email: string) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(String(email).toLowerCase());
    }

    const handleChangeEmail = (e: any) => setEmail(e.target.value)
    const handleChangeCheckBoxNL = (e: any) => setCheckboxNL(e.target.checked)
    const handleChangeCheckBoxPS = (e: any) => setCheckboxNL(e.target.checked)

    
    const handlSendEmail = () => {
      const isAtLeastOneCheckboxChecked = checkboxNL || checkboxPS;
      
      if (validateEmail(email) && isAtLeastOneCheckboxChecked) {
          setEmailValid(true);
          
      } else {
          setEmailValid(false)
      }
    }
    

    return {nlTexts, setNlTexts, email, setEmail, isEmailValid, setEmailValid, checkboxNL, setCheckboxNL, checkboxPS, setCheckboxPS, validateEmail, handleChangeEmail, handleChangeCheckBoxNL, handleChangeCheckBoxPS, handlSendEmail}
}    

export default useSharedLogicNewsletter