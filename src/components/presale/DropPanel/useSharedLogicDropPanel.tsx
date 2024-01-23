import { useEffect, useState } from "react";
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { PresaleArtWorks, PresaleDropPanelButtons, PresaleDropPanelData, PresaleDropPanelTexts, defaultLangObject } from "../../../types/types";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../firebaseConfig";

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

    const [artWorks, setArtWorks] = useState<PresaleArtWorks>([defaultArtwork])
    const [buttons, setButtons] = useState<PresaleDropPanelButtons>(defaultButton)
    const [texts, setTexts] = useState<PresaleDropPanelTexts>(defaultText)


    async function getUrlPhoto(photo: string): Promise<string> {
        if (photo === "") {
            return ""
        }

        const imageRef = ref(storage, photo)
        console.log(imageRef)
        const urlPhoto = await getDownloadURL(imageRef)
        return urlPhoto;
      }

    async function transformArtworksPhotos(artworks: PresaleArtWorks): Promise<PresaleArtWorks> {
        const promises = artworks.map(async artwork => ({
            ...artwork,
            url: await getUrlPhoto(artwork.image)
        }))

        return Promise.all(promises);
    }

    useEffect(() => {    
        const fetchData = async () => {
            const collection_ = collection(db, FIREBASE_DROPPANEL_COLLECTION);
            const documents   = await getDocs(collection_);
            const data        = documents.docs.map(doc => doc.data() as PresaleDropPanelData);
            console.log(data)
            //Index 0 ===> ArtWorks
            const artworks_ = data[0]['artworks'] as PresaleArtWorks
            const artworks_tmp = await transformArtworksPhotos(artworks_)
            setArtWorks(artworks_tmp)  
            
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