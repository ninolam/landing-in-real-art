"use client"
import { ListResult, StorageReference, getDownloadURL, list, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { useAppContext } from "../context";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Artists, ArtistsData, Lang } from "../types/types";

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
  const setImagesUrls = (artistsCarousel: Array<string[]>, currentIndex: number) => {
    setImageUrl1(artistsCarousel[currentIndex][0])
    setImageUrl2(artistsCarousel[currentIndex][1])
    setImageUrl3(artistsCarousel[currentIndex][2])
    setImageUrl4(artistsCarousel[currentIndex][3])
    setImageUrl5(artistsCarousel[currentIndex][4])
    setImageUrl6(artistsCarousel[currentIndex][5])
    setImageUrl7(artistsCarousel[currentIndex][6])
    setImageUrl8(artistsCarousel[currentIndex][7])
  }

  //----------------------------------------------------------------- setImagesUrls
  const setImagesHidden = (artistsCarousel: Array<string[]>, currentIndex: number) => {
    setImage1Hidden((artistsCarousel[currentIndex][0])?false:true)
    setImage2Hidden((artistsCarousel[currentIndex][1])?false:true)
    setImage3Hidden((artistsCarousel[currentIndex][2])?false:true)
    setImage4Hidden((artistsCarousel[currentIndex][3])?false:true)
    setImage5Hidden((artistsCarousel[currentIndex][4])?false:true)
    setImage6Hidden((artistsCarousel[currentIndex][5])?false:true)
    setImage7Hidden((artistsCarousel[currentIndex][6])?false:true)
    setImage8Hidden((artistsCarousel[currentIndex][7])?false:true)
  }

  //--------------------------------------------------------------------- useEffect
  /**
   * UseEffect called at the first loading : cache all the images Url we get 
   * from Firstore to be used after
   */
  useEffect(() => {

      const getUrl = (imageNr: number, currentDir: string) => {
        const imageRef = ref(storage, `${currentDir}/artist${imageNr}.png`) //seth doyle  
        return getDownloadURL(imageRef)
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
          let artistsCarousel: Array<string[]> = []
          let currentDir = ''
          for (let i=0; i< artistsPanels.length; i++) {
            currentDir = 'artists/'+artistsPanels[i]
            const urlImages: string[] = [];
            for (let j=1; j<=8; j++) {
              try {
                const urlImage = await getUrl(j, currentDir);
                urlImages.push(urlImage)
              } catch (error) {
                urlImages.push(""); // Push an empty string for image Url if there's an error
              }     
            }            
            artistsCarousel[i] = urlImages
          }
          
          setArtistsCarousel(artistsCarousel)
          setImagesUrls(artistsCarousel, currentIndex)
          setImagesHidden(artistsCarousel, currentIndex)
          setArtistsPanels(artistsPanels)
      }

      const fetchArtistsNameAndDesc = async() => {
        const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
        const artistsDocuments  = await getDocs(artistsCollection);
        const artistsData       = artistsDocuments.docs.map(doc => doc.data());
        const allArtists_ = artistsData[0] as Artists
        setAllArtists(allArtists_)

        setArtistName1(allArtists_[currentIndex]['artist1']['name'])  
        setArtistName2(allArtists_[currentIndex]['artist2']['name'])  
        setArtistName3(allArtists_[currentIndex]['artist3']['name'])  
        setArtistName4(allArtists_[currentIndex]['artist4']['name'])  
        setArtistName5(allArtists_[currentIndex]['artist5']['name'])  
        setArtistName6(allArtists_[currentIndex]['artist6']['name'])  
        setArtistName7(allArtists_[currentIndex]['artist7']['name'])  
        setArtistName8(allArtists_[currentIndex]['artist8']['name'])  


        setArtistDesc1(allArtists_[currentIndex]['artist1']['desc'][lang])  
        setArtistDesc2(allArtists_[currentIndex]['artist2']['desc'][lang])  
        setArtistDesc3(allArtists_[currentIndex]['artist3']['desc'][lang])  
        setArtistDesc4(allArtists_[currentIndex]['artist4']['desc'][lang])  
        setArtistDesc5(allArtists_[currentIndex]['artist5']['desc'][lang])  
        setArtistDesc6(allArtists_[currentIndex]['artist6']['desc'][lang])  
        setArtistDesc7(allArtists_[currentIndex]['artist7']['desc'][lang])  
        setArtistDesc8(allArtists_[currentIndex]['artist8']['desc'][lang])   

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
        setImagesUrls(artistsCarousel, currentIndex)
        setImagesHidden(artistsCarousel, currentIndex)
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
          console.log(allArtists)
          if (allArtists.length !==0) {
            setArtistName1(allArtists[currentIndex]['artist1']['name'])  
            setArtistName2(allArtists[currentIndex]['artist2']['name'])  
            setArtistName3(allArtists[currentIndex]['artist3']['name'])  
            setArtistName4(allArtists[currentIndex]['artist4']['name'])  
            setArtistName5(allArtists[currentIndex]['artist5']['name'])  
            setArtistName6(allArtists[currentIndex]['artist6']['name'])  
            setArtistName7(allArtists[currentIndex]['artist7']['name'])  
            setArtistName8(allArtists[currentIndex]['artist8']['name'])  
  
  
            setArtistDesc1(allArtists[currentIndex]['artist1']['desc'][lang])  
            setArtistDesc2(allArtists[currentIndex]['artist2']['desc'][lang])  
            setArtistDesc3(allArtists[currentIndex]['artist3']['desc'][lang])  
            setArtistDesc4(allArtists[currentIndex]['artist4']['desc'][lang])  
            setArtistDesc5(allArtists[currentIndex]['artist5']['desc'][lang])  
            setArtistDesc6(allArtists[currentIndex]['artist6']['desc'][lang])  
            setArtistDesc7(allArtists[currentIndex]['artist7']['desc'][lang])  
            setArtistDesc8(allArtists[currentIndex]['artist8']['desc'][lang])   
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
