import { useEffect, useState } from "react"
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'
import { JoinTrendButtons, JoinTrendTexts, defaultLangObject } from "../../../types/types"

const useSharedLogicJoinMovement = () => {

    const FIREBASE_JOIN_MOVEMENT_COLLECTION = 'JoinMovement'

    const defaultJoinTrendButtons =  {   
      artgallery_join: defaultLangObject,
      artgallery_join_link: '',
      aas_join: defaultLangObject,
      aas_join_link: '',
      marketplace_join: defaultLangObject,
      marketplace_join_link: ''    
    }

    const defaultJoinTrendTexts =  {   
      title: defaultLangObject,
      artgallery_title: defaultLangObject,
      artgallery_description: defaultLangObject,
      aas_title: defaultLangObject,
      aas_description: defaultLangObject,
      marketplace_title: defaultLangObject,
      marketplace_description: defaultLangObject
      } 

    
    const [joinTrendButtons, setJoinTrendButtons] = useState<JoinTrendButtons>(defaultJoinTrendButtons)
    const [joinTrendtexts, setJoinTrendTexts]     = useState<JoinTrendTexts>(defaultJoinTrendTexts)

    useEffect(() => {
      const fetchData = async () => {
        const joinMovementCollection = collection(db, FIREBASE_JOIN_MOVEMENT_COLLECTION);
        const joinMovementDocuments  = await getDocs(joinMovementCollection);
        const joinMovementData      = joinMovementDocuments.docs.map(doc => doc.data());
        
        //Buttons : indice 0
        setJoinTrendButtons(joinMovementData[0] as JoinTrendButtons) 

        //Texts : indice 1
        setJoinTrendTexts(joinMovementData[1] as JoinTrendTexts)
      }

      fetchData();

    }, [])

    return {joinTrendButtons, setJoinTrendButtons, joinTrendtexts, setJoinTrendTexts}
}

export default useSharedLogicJoinMovement