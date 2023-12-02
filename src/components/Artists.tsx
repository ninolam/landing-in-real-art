"use client"
import { ListResult, StorageReference, getDownloadURL, list, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { useAppContext } from "../context";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { ArtistsData } from "../types/types";
import ArtistPanel from "./ArtistPanel";

const Artists = () => {

  //Get the language of the global context
  const {lang} = useAppContext()

  const FIREBASE_ARTISTS_COLLECTION = 'Artists'

  const [imageUrl1, setImageUrl1] = useState<string>("")
  const [imageUrl2, setImageUrl2] = useState<string>("")
  const [imageUrl3, setImageUrl3] = useState<string>("")
  const [imageUrl4, setImageUrl4] = useState<string>("")
  const [imageUrl5, setImageUrl5] = useState<string>("")
  const [imageUrl6, setImageUrl6] = useState<string>("")
  const [imageUrl7, setImageUrl7] = useState<string>("")
  const [imageUrl8, setImageUrl8] = useState<string>("")

  const [image1Hidden, setImage1Hidden] = useState<boolean>(false)
  const [image2Hidden, setImage2Hidden] = useState<boolean>(false)
  const [image3Hidden, setImage3Hidden] = useState<boolean>(false)
  const [image4Hidden, setImage4Hidden] = useState<boolean>(false)
  const [image5Hidden, setImage5Hidden] = useState<boolean>(false)
  const [image6Hidden, setImage6Hidden] = useState<boolean>(false)
  const [image7Hidden, setImage7Hidden] = useState<boolean>(false)
  const [image8Hidden, setImage8Hidden] = useState<boolean>(false)

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [artistsPanels, setArtistsPanels] = useState<string[]>([]);
  
  //--------------------------------------------------------------- listDirectories
  async function listDirectories(directoryPath?: any) {
    const storageRef = ref(storage, directoryPath)
    const list_: ListResult = await listAll(storageRef)
    const directories: StorageReference[] = list_['prefixes']
    const dirName = directories.map((dir) => {
      return dir.name
    })
    return dirName
  }

    //--------------------------------------------------------------------- useEffect
    useEffect(() => {
        const fetchFirestoreImagesDirecteories = async() => {
            const artistsPanels = await listDirectories('artists')
            setArtistsPanels(artistsPanels)
        }
        // fetchFirestoreImagesDirecteories()
        
    }, [])

    //--------------------------------------------------------------------- useEffect
    useEffect(() => {
        const fetchImages = async () => {
            
            const artistsPanels = await listDirectories('artists')
            console.log(artistsPanels)
            setArtistsPanels(artistsPanels)

            let currentDir = artistsPanels[currentIndex]
            currentDir = 'artists/'+currentDir
            console.log(currentDir)
            const imageRef1 = ref(storage, `${currentDir}/artist11.png`) //seth doyle  
            const imageRef2 = ref(storage, `${currentDir}/artist2.png`) //justin luebke
            const imageRef3 = ref(storage, `${currentDir}/artist3.png`) 
            const imageRef4 = ref(storage, `${currentDir}/artist4.png`) //jonas allert
            const imageRef5 = ref(storage, `${currentDir}/artist5.png`) // Rayul
            const imageRef6 = ref(storage, `${currentDir}/artist6.png`) //jennifer marquez
            const imageRef7 = ref(storage, `${currentDir}/artist7.png`) 
            const imageRef8 = ref(storage, `${currentDir}/artist8.png`)
            
            try {
              const url1 = await getDownloadURL(imageRef1)
              setImageUrl1(url1)
            } catch (error) {
              setImage1Hidden(true)
            }
            finally {}
            try {
              const url2 = await getDownloadURL(imageRef2)
              setImageUrl2(url2)
            } catch (error) {
              setImage2Hidden(true)
            }
            try {
              const url3 = await getDownloadURL(imageRef3)
              setImageUrl3(url3)
            } catch (error) {
              setImage3Hidden(true)
            }
            try {
              const url4 = await getDownloadURL(imageRef4)
              setImageUrl4(url4)
            } catch (error) {
              setImage4Hidden(true)
            }
            try {
              const url5 = await getDownloadURL(imageRef5)
              setImageUrl5(url5)
            } catch (error) {
              setImage5Hidden(true)
            }
            try {
              const url6 = await getDownloadURL(imageRef6)
              setImageUrl6(url6)
            } catch (error) {
              setImage6Hidden(true)
            }
            try {
              const url7 = await getDownloadURL(imageRef7)
              setImageUrl7(url7)
            } catch (error) {
              setImage7Hidden(true)
            }
            try {
              const url8 = await getDownloadURL(imageRef8)
              setImageUrl8(url8)
            } catch (error) {
              setImage1Hidden(true)
            }
        }

        const fetchTexts = async() => {
          const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
          const artistsDocuments  = await getDocs(artistsCollection);
          const artistsData       = artistsDocuments.docs.map(doc => doc.data() as ArtistsData);
          setTitle(artistsData[0].title[lang])
          setDescription(artistsData[0].description[lang])
        }

        fetchImages()
        fetchTexts()
    }, [lang,currentIndex]); 
    

    //-------------------------------------------------------------- handleArrowClick
    const handleArrowClick = (direction: string) => {
      if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artistsPanels.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + artistsPanels.length) % artistsPanels.length);
      }
    };

    return (
      <div className="carousel-artists">
        <div className="arrow left-arrow" >
          <img alt="left" src="img/angle-circle-left.png" onClick={() => handleArrowClick('left')}/>
        </div>
        <div className="frame-artists">
          <div className="artists-title">
            <div className="text-wrapper-2">{title}</div>
            <p className="p">{description}</p>
          </div>
          <ArtistPanel 
            imageUrl1={imageUrl1} image1Hidden={image1Hidden}
            imageUrl2={imageUrl2} image2Hidden={image2Hidden}
            imageUrl3={imageUrl3} image3Hidden={image3Hidden}
            imageUrl4={imageUrl4} image4Hidden={image4Hidden}
            imageUrl5={imageUrl5} image5Hidden={image5Hidden}
            imageUrl6={imageUrl6} image6Hidden={image6Hidden}
            imageUrl7={imageUrl7} image7Hidden={image7Hidden}
            imageUrl8={imageUrl8} image8Hidden={image8Hidden}            
            />
        </div>
        <img className="star" alt="Star" src="/img/star-1.png" />
        <img className="polygon" alt="Polygon" src="/img/polygon-3.png" />
        <div className="arrow right-arrow">
        <img alt="right" src="img/angle-circle-right.png" onClick={() => handleArrowClick('right')}/>
        </div>
      </div>
      
    )
}

export default Artists
