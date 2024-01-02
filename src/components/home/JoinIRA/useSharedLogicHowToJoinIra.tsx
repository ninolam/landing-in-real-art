import { useEffect, useState } from "react"
import { JoinIraDataButton, JoinIraDataText, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicHowToJoinIra = () => {

  
    const FIREBASE_JOIN_IRA_COLLECTION = 'JoinIRA'
    
    const defaultJoinIraText = {
      text1: defaultLangObject,
      text2: defaultLangObject,
      headerText: defaultLangObject
    }
  
    const defaultJoinIraButton = {
      JoinIRA: defaultLangObject,
      StartIRA: defaultLangObject,
      JoinIRALink: '',
      StartIRALink: ''
    }
  
  
    const [joinIraDataText, setJoinIraDataText] = useState<JoinIraDataText>(defaultJoinIraText);
    const [joinIraDataButton, setJoinIraDataButton] = useState<JoinIraDataButton>(defaultJoinIraButton);
  
    useEffect(() => {
      const fetchData = async () => {
        const joinIRACollection = collection(db, FIREBASE_JOIN_IRA_COLLECTION);
        const joinIRADocuments  = await getDocs(joinIRACollection);
        const joinIRAData       = joinIRADocuments.docs.map(doc => doc.data());
        
        //Index 0 ===> joinIRA Buttons
        setJoinIraDataButton(joinIRAData[0] as JoinIraDataButton)
  
        //Index 1 ===> joinIRA Text
        setJoinIraDataText(joinIRAData[1] as JoinIraDataText)
    }  
    fetchData();
    }, [])

    return {joinIraDataText, setJoinIraDataText, joinIraDataButton, setJoinIraDataButton}

}
  
export default useSharedLogicHowToJoinIra