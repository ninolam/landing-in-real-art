import { useEffect, useState } from "react"
import { Lang, NewsletterData, NewsletterText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { supabase } from "../../../utils/supabase/supabaseConnection"
import {CODE_UNIQUE_KEY_VIOLATION, NEWSLETTER_TABLE, PRIVATESALE_TABLE} from '../../../utils/supabase/constants'
import { useToast } from '@chakra-ui/react'
import parse from 'html-react-parser';
import { useAppContext } from "../../../context"

const useSharedLogicNewsletter = () => {
    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
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
      sendEmailErrorMsg: defaultLangObject,
      msgSuccessNewsLetter: defaultLangObject,
      msgSuccessPrivateSale: defaultLangObject
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

    //------------------------------------------------------------------------------ insertEmail
    const insertEmail = async (table: string) => {
      let msgError = ''
      const { error } = await supabase
        .from(table)
        .insert({ email: email })
      if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
        msgError = 'This email already exists in our e-mail base'    
      }
      else {
        if (error) throw error  
      }
      return msgError
    }

    //------------------------------------------------------------------------------ handlSendEmail
    const handlSendEmail = async () => {
      const isAtLeastOneCheckboxChecked = checkboxNL || checkboxPS;
      
      if (validateEmail(email) && isAtLeastOneCheckboxChecked) {
          setEmailValid(true)

          try {
            //Insert in Newsletter Table
            if (checkboxNL) {
              const msgError = await insertEmail(NEWSLETTER_TABLE)
              if (msgError !== '') {
                toast({
                  title: msgError,
                  description: '',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                })  
              }
              else {
                // Popup a succes toast if no errors.
                toast({
                  title: parse(nlTexts.msgSuccessNewsLetter[lang_]),
                  description: '',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
              }
              
            }
            //Insert in Privatesale Table
            if (checkboxPS) {
              const msgError = await insertEmail(PRIVATESALE_TABLE)
              if (msgError !== '') {
                toast({
                  title: msgError,
                  description: '',
                  status: 'error',
                  duration: 3000,
                  isClosable: true,
                })  
              }
              else {
                // Popup a succes toast if no errors.
                toast({
                  title: parse(nlTexts.msgSuccessPrivateSale[lang_]),
                  description: '',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
              }
            }          
          } catch (error) {
            throw error
          }

      } else {
          setEmailValid(false)
      }
    }
    

    return {nlTexts, setNlTexts, email, setEmail, isEmailValid, setEmailValid, checkboxNL, setCheckboxNL, checkboxPS, setCheckboxPS, validateEmail, handleChangeEmail, handleChangeCheckBoxNL, handleChangeCheckBoxPS, handlSendEmail}
}    

export default useSharedLogicNewsletter