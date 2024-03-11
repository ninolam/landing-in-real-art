import { useEffect, useState } from "react"
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { supabase } from "../../../utils/supabase/supabaseConnection"
import {NEWSLETTER_TABLE, PRIVATESALE_TABLE} from '../../../utils/supabase/constants'
import { useToast } from '@chakra-ui/react'

const useSharedLogicNewsletter = () => {
    const toast = useToast()
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
    const handleChangeCheckBoxPS = (e: any) => setCheckboxPS(e.target.checked)

    //------------------------------------------------------------------------------ checkEmailDoesNotExist
    const checkEmailDoesNotExist = async () => {

    }
    
    //------------------------------------------------------------------------------ insertEmail
    const insertEmail = async (table: string) => {
        const { error } = await supabase
          .from(table)
          .insert({ email: email })
        console.log('error email', error)  
        return error  
    }

    //------------------------------------------------------------------------------ handlSendEmail
    const handlSendEmail = async () => {
      const isAtLeastOneCheckboxChecked = checkboxNL || checkboxPS;
      
      if (validateEmail(email) && isAtLeastOneCheckboxChecked) {
          setEmailValid(true);
          //Insert in Newsletter Table
          if (checkboxNL) {
            const error = await insertEmail(NEWSLETTER_TABLE)
            // Handle any errors.
            if (error) { 
              throw error 
            }
            else {
              toast({
                title: 'Check your email with some great future news !',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }
          }
          //Insert in Privatesale Table
          if (checkboxPS) {
            const error = await insertEmail(PRIVATESALE_TABLE)
            // Handle any errors.
            if (error) { 
              throw error 
            }
            else {
              toast({
                title: 'Check your email to be notified about future news on private sale !',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }
          }
          
      } else {
          setEmailValid(false)
      }
    }
    

    return {nlTexts, setNlTexts, email, setEmail, isEmailValid, setEmailValid, checkboxNL, setCheckboxNL, checkboxPS, setCheckboxPS, validateEmail, handleChangeEmail, handleChangeCheckBoxNL, handleChangeCheckBoxPS, handlSendEmail}
}    

export default useSharedLogicNewsletter