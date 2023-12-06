"use client"
import { ListResult, StorageReference, getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { useAppContext } from "../context";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { ArtistCarouselElement, Artists, Lang } from "../types/types";
import ArtistPanel from "./ArtistPanel";

const Artists = () => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang
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

  const [artistName1, setArtistName1] = useState<string>("")
  const [artistName2, setArtistName2] = useState<string>("")
  const [artistName3, setArtistName3] = useState<string>("")
  const [artistName4, setArtistName4] = useState<string>("")
  const [artistName5, setArtistName5] = useState<string>("")
  const [artistName6, setArtistName6] = useState<string>("")
  const [artistName7, setArtistName7] = useState<string>("")
  const [artistName8, setArtistName8] = useState<string>("")

  const [artistDesc1, setArtistDesc1] = useState<string>("")
  const [artistDesc2, setArtistDesc2] = useState<string>("")
  const [artistDesc3, setArtistDesc3] = useState<string>("")
  const [artistDesc4, setArtistDesc4] = useState<string>("")
  const [artistDesc5, setArtistDesc5] = useState<string>("")
  const [artistDesc6, setArtistDesc6] = useState<string>("")
  const [artistDesc7, setArtistDesc7] = useState<string>("")
  const [artistDesc8, setArtistDesc8] = useState<string>("")

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [artistsPanels, setArtistsPanels]     = useState<string[]>([]);
  const [artistsCarousel, setArtistsCarousel] = useState<Array<string[]>>([]);
  const [listDirArtistPhotos, setListDirArtistPhotos ]= useState<string[]>([]);
  const [allArtists, setAllArtists]           = useState<Artists>([])
  const [currentIndex, setCurrentIndex]       = useState<number>(0);

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

  //----------------------------------------------------------------- setImagesUrls
  const setImagesUrls = (artistsCarousel: Array<string[]>) => {
    let currentIndex_ = currentIndex
    if (Number.isNaN(currentIndex)) { 
      currentIndex_ = 0
    }
    console.log(artistsCarousel)
    setImageUrl1(artistsCarousel[currentIndex_][0])
    setImageUrl2(artistsCarousel[currentIndex_][1])
    setImageUrl3(artistsCarousel[currentIndex_][2])
    setImageUrl4(artistsCarousel[currentIndex_][3])
    setImageUrl5(artistsCarousel[currentIndex_][4])
    setImageUrl6(artistsCarousel[currentIndex_][5])
    setImageUrl7(artistsCarousel[currentIndex_][6])
    setImageUrl8(artistsCarousel[currentIndex_][7])
  }

  //----------------------------------------------------------------- setImagesUrls
  const setImagesHidden = (artistsCarousel: Array<string[]>) => {
    let currentIndex_ = currentIndex
    if (Number.isNaN(currentIndex)) { 
      currentIndex_ = 0
    }
    setImage1Hidden((artistsCarousel[currentIndex_][0])?false:true)
    setImage2Hidden((artistsCarousel[currentIndex_][1])?false:true)
    setImage3Hidden((artistsCarousel[currentIndex_][2])?false:true)
    setImage4Hidden((artistsCarousel[currentIndex_][3])?false:true)
    setImage5Hidden((artistsCarousel[currentIndex_][4])?false:true)
    setImage6Hidden((artistsCarousel[currentIndex_][5])?false:true)
    setImage7Hidden((artistsCarousel[currentIndex_][6])?false:true)
    setImage8Hidden((artistsCarousel[currentIndex_][7])?false:true)
  }

  //--------------------------------------------------------------------- useEffect
  /**
   * UseEffect called at the first loading : cache all the images Url we get 
   * from Firstore to be used after
   */
  useEffect(() => {

      const getUrl = (currentDir: string, image: string) => {
        const imageRef = ref(storage, `artists/${currentDir}/${image}`) //seth doyle  
        return getDownloadURL(imageRef)
      } 

      //Can not be used as we have one token per image 
      //It will work if we can set unique token for all images but don't know how to do it
      
      const generateImageUrl = (directory: string, imageName: string) => {
        let domain = 'firebasestorage.googleapis.com'
        let urlImage = `https://${domain}/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/o/artists`
        let subUrlImg = encodeURIComponent(`/${directory}/${imageName}`)
        urlImage += subUrlImg
        const urlImg = new URL(urlImage)
        urlImg.searchParams.append('alt', 'media')
        urlImg.searchParams.append('token', '514b5e2e-db08-445c-a2f8-7bdb31acf863')
        return `${urlImg}`;
      } 
    
      /*
      Another way to get the results of images URL is by using "allSettled" of "Promise" object
      const promisesImageUrl: Promise<string>[] = []

      for (let i = 1; i <= 8; i++) {
        promisesImageUrl.push(getUrl(i, 'artists/carousel_2'));
      }

      Promise.allSettled(promisesImageUrl).then(results => {
        const finalResults: string[] = results.map(result => 
          result.status === 'fulfilled' ? result.value : ""
        );  
      });
      */

      const fetchFirestoreImagesUrls = async() => {
        const artistsPanels = await listDirectories('artists')
        const indexFirstPanel = 1
        const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
        const artistsDocuments  = await getDocs(artistsCollection);
        const artistsData       = artistsDocuments.docs.map(doc => doc.data());
        let allArtists_ = artistsData[0] as Artists
        const listDirArtistPhotos = Object.keys(allArtists_) 
        
        //Test 
        // const urlImage = await getUrl('artists/2', 'gilles_bruno.jpeg')
        // console.log(urlImage)

        let artistsCarousel: Array<string[]> = []
        let currentDir: string
        let currentDirInFirebase: string
        allArtists_ = Object.values(allArtists_)
        for (let i = 0; i < allArtists_.length; i++) {
          let urlImages: Array<string> = []
          currentDir = i.toString()
          currentDirInFirebase = (i+1).toString()
          const artistsOfCurrentCarousel = allArtists_[i] as ArtistCarouselElement
          const artistsOfCurrentCarousel_ = Object.values(artistsOfCurrentCarousel)
          for (let j=0; j< artistsOfCurrentCarousel_.length; j++) {
            const imageName = artistsOfCurrentCarousel_[j]['image']
            const urlImage = (imageName)?await getUrl(currentDirInFirebase, imageName):''
            urlImages.push(urlImage)
          }
          artistsCarousel[i] = urlImages
        }
        setArtistsCarousel(artistsCarousel)
        setImagesUrls(artistsCarousel)
        setImagesHidden(artistsCarousel)
        setArtistsPanels(artistsPanels)
      }

      const fetchArtistsNameAndDesc = async() => {
        const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
        const artistsDocuments  = await getDocs(artistsCollection);
        const artistsData       = artistsDocuments.docs.map(doc => doc.data());
        const allArtists_ = artistsData[0] as Artists
        const listDirArtistPhotos = Object.keys(allArtists_) 
        setListDirArtistPhotos(listDirArtistPhotos)
        setAllArtists(allArtists_)
        const indexCurrentPanel = currentIndex+1
        setArtistName1(allArtists_[indexCurrentPanel]['0']['name'])  
        setArtistName2(allArtists_[indexCurrentPanel]['1']['name'])  
        setArtistName3(allArtists_[indexCurrentPanel]['2']['name'])  
        setArtistName4(allArtists_[indexCurrentPanel]['3']['name'])  
        setArtistName5(allArtists_[indexCurrentPanel]['4']['name'])  
        setArtistName6(allArtists_[indexCurrentPanel]['5']['name'])  
        setArtistName7(allArtists_[indexCurrentPanel]['6']['name'])  
        setArtistName8(allArtists_[indexCurrentPanel]['7']['name'])  
        
        setArtistDesc1(allArtists_[indexCurrentPanel]['0']['desc'][lang_])  
        setArtistDesc2(allArtists_[indexCurrentPanel]['1']['desc'][lang_])  
        setArtistDesc3(allArtists_[indexCurrentPanel]['2']['desc'][lang_])  
        setArtistDesc4(allArtists_[indexCurrentPanel]['3']['desc'][lang_])  
        setArtistDesc5(allArtists_[indexCurrentPanel]['4']['desc'][lang_])  
        setArtistDesc6(allArtists_[indexCurrentPanel]['5']['desc'][lang_])  
        setArtistDesc7(allArtists_[indexCurrentPanel]['6']['desc'][lang_])  
        setArtistDesc8(allArtists_[indexCurrentPanel]['7']['desc'][lang_])   

      }

      fetchFirestoreImagesUrls()
      fetchArtistsNameAndDesc()
      
  }, [])

    //--------------------------------------------------------------------- useEffect
    /**
     * UseEffect called when we scroll right or left on the artists carousel. 
     * It reset all the props for the child Component
     */
    useEffect(() => {
      if (artistsCarousel.length !== 0) {
        console.log(artistsCarousel)
        setImagesUrls(artistsCarousel)
        setImagesHidden(artistsCarousel)
      }
    }, [currentIndex])

  //--------------------------------------------------------------------- useEffect
  /**
   * UseEffect called when the lang is changed
   */
    useEffect(() => {
        const fetchTexts = async() => {
          const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
          const artistsDocuments  = await getDocs(artistsCollection);
          const artistsData       = artistsDocuments.docs.map(doc => doc.data());
          setTitle(artistsData[1].title[lang])
          setDescription(artistsData[1].description[lang])
        }

        const fetchArtistsNameAndDesc = async () => {
          if (allArtists.length !==0) {
            console.log(allArtists)
            console.log(currentIndex)
            const currentIndex_ = currentIndex+1
            setArtistDesc1(allArtists[currentIndex_]['0']['desc'][lang_])  
            setArtistDesc2(allArtists[currentIndex_]['1']['desc'][lang_])  
            setArtistDesc3(allArtists[currentIndex_]['2']['desc'][lang_])  
            setArtistDesc4(allArtists[currentIndex_]['3']['desc'][lang_])  
            setArtistDesc5(allArtists[currentIndex_]['4']['desc'][lang_])  
            setArtistDesc6(allArtists[currentIndex_]['5']['desc'][lang_])  
            setArtistDesc7(allArtists[currentIndex_]['6']['desc'][lang_])  
            setArtistDesc8(allArtists[currentIndex_]['7']['desc'][lang_])   
          }
        }
        fetchTexts()
        fetchArtistsNameAndDesc()
    }, [lang]); 
    

    //-------------------------------------------------------------- handleArrowClick
    const handleArrowClick = (direction: string) => {
      if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artistsPanels.length);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + artistsPanels.length) % artistsPanels.length);
      }
    }

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
            imageUrl1={imageUrl1} image1Hidden={image1Hidden} artistName1={artistName1} artistDesc1={artistDesc1} 
            imageUrl2={imageUrl2} image2Hidden={image2Hidden} artistName2={artistName2} artistDesc2={artistDesc2} 
            imageUrl3={imageUrl3} image3Hidden={image3Hidden} artistName3={artistName3} artistDesc3={artistDesc3} 
            imageUrl4={imageUrl4} image4Hidden={image4Hidden} artistName4={artistName4} artistDesc4={artistDesc4} 
            imageUrl5={imageUrl5} image5Hidden={image5Hidden} artistName5={artistName5} artistDesc5={artistDesc5} 
            imageUrl6={imageUrl6} image6Hidden={image6Hidden} artistName6={artistName6} artistDesc6={artistDesc6} 
            imageUrl7={imageUrl7} image7Hidden={image7Hidden} artistName7={artistName7} artistDesc7={artistDesc7} 
            imageUrl8={imageUrl8} image8Hidden={image8Hidden} artistName8={artistName8} artistDesc8={artistDesc8} 
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
