import { useEffect, useState } from "react"
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { PresaleInvestmentsTexts, defaultLangObject } from "../../../types/types";


const useSharedLogicInvestment = () => {

    const FIREBASE_PRESALE_INVESTMENT_COLLECTION = 'Presale_Investments'

    const defaultInvestmentCard = {
      number: defaultLangObject,
      title1: defaultLangObject,
      title2: defaultLangObject,
      details: defaultLangObject,
      image: ''
    }

    const defaultInvestmentTexts = {
        card1: defaultInvestmentCard,
        card2: defaultInvestmentCard,
        card3: defaultInvestmentCard
    }

    const [texts, setTexts] = useState<PresaleInvestmentsTexts>(defaultInvestmentTexts)
    
    useEffect(() => {
        
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_PRESALE_INVESTMENT_COLLECTION);
          const documents  = await getDocs(collection_); 
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> Presale Investment Texts
          const texts = data[0] as PresaleInvestmentsTexts
          console.log(texts)
          setTexts(texts) 
        }
        
        fetchData();
        
      }, [])
  
    return {texts, setTexts}

}

export default useSharedLogicInvestment