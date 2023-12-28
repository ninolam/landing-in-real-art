"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import { ArtistNameDesc, Artists, Lang } from '../../types/types'
import { ListResult, StorageReference, getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../firebaseConfig";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';


const CarouselArtists = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_ARTISTS_COLLECTION = 'Artists'
    
    const [allArtists, setAllArtists]   = useState<Array<ArtistNameDesc>>([])
    const [title, setTitle]             = useState<string>('')
    const [description, setDescription] = useState<string>('')
  
    //--------------------------------------------------------------------- useEffect
    /**
     * UseEffect called at the first loading : cache all the images Url we get 
     * from Firstore to be used after
     */
    useEffect(() => {
  
        const getUrl = (image: string) => {
          const imageRef = ref(storage, `artists/${image}`)
          return getDownloadURL(imageRef)
        } 
  
        const fetchTexts = async() => {
            const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
            const artistsDocuments  = await getDocs(artistsCollection);
            const artistsData       = artistsDocuments.docs.map(doc => doc.data());
            setTitle(artistsData[1].title[lang])
            setDescription(artistsData[1].description[lang])
        }
  
        const fetchArtistsNameAndDesc = async() => {
            const artistsCollection = collection(db, FIREBASE_ARTISTS_COLLECTION);
            const artistsDocuments  = await getDocs(artistsCollection);
            const artistsData       = artistsDocuments.docs.map(doc => doc.data());
            //Index 0 
            console.log(artistsData)
            const allArtists_ = artistsData[0]['artists'] as Artists
            console.log(allArtists_)
            for (let i = 0; i < allArtists_.length; i++) {
                const imageName = allArtists_[i].image
                const urlImage = (imageName)?await getUrl(imageName):''
                allArtists_[i].image = urlImage
            }    
            console.log(allArtists_)
            setAllArtists(allArtists_)
        }
  
        fetchTexts()
        fetchArtistsNameAndDesc()
        
        
    }, [])

  return (

    <div className="homeArtists">
        <div className="frame-3349">
            <div className="nos-artistes">{title}</div>
            <div className="d-couvez-notre-catalogue-de-artiste-galeries-physique-ira">
                {description}
            </div>
        </div>
            <Carousel interval={null}>
                {
                    allArtists.map(
                        (record, index) => (
                            <Carousel.Item key={index}> 
                                <img src={record.image}/>
                                <Carousel.Caption>
                                    <h3>{record.name}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        )
                    )
                }

        </Carousel>

        </div>      
    
  )
}

export default CarouselArtists