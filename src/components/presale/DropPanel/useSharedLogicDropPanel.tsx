import { useEffect, useState } from "react";
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { PresaleDropPanelArtworks, PresaleDropPanelButtons, PresaleDropPanelData, PresaleDropPanelTexts, defaultLangObject } from "../../../types/types";


const useSharedLogicDropPanel = () => {
    const FIREBASE_DROPPANEL_COLLECTION = 'Presale_DropPanel'

    const defaultText = {
        endDrop: defaultLangObject
    }

    const defaultButton = {
        acquireArtWork: defaultLangObject,
        detailArtWork: defaultLangObject

    }

    const defaultArtwork = {
        image: '',
        url: ''
    }

    const [artWorks, setArtWorks] = useState<PresaleDropPanelArtworks>({artworks: [defaultArtwork]})
    const [buttons, setButtons] = useState<PresaleDropPanelButtons>(defaultButton)
    const [texts, setTexts] = useState<PresaleDropPanelTexts>(defaultText)


    useEffect(() => {    
        const fetchData = async () => {
            const collection_ = collection(db, FIREBASE_DROPPANEL_COLLECTION);
            const documents   = await getDocs(collection_);
            const data        = documents.docs.map(doc => doc.data() as PresaleDropPanelData);
            console.log(data)
            //Index 0 ===> ArtWorks
            setArtWorks(data[0])  
            
            //Index 1 ===> Buttons
            setButtons(data[1])  

            //Index 2 ===> Texts
            setTexts(data[2])  
        }
        fetchData()
    }, [])

    return {artWorks, buttons, texts}
}
  


export default useSharedLogicDropPanel