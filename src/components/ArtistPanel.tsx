"use client"
import { useAppContext } from "../context";

interface ArtistPanel {
    imageUrl1: string
    imageUrl2: string
    imageUrl3: string
    imageUrl4: string
    imageUrl5: string
    imageUrl6: string
    imageUrl7: string
    imageUrl8: string
    image1Hidden: boolean
    image2Hidden: boolean
    image3Hidden: boolean
    image4Hidden: boolean
    image5Hidden: boolean
    image6Hidden: boolean
    image7Hidden: boolean
    image8Hidden: boolean
  }

  
const ArtistPanel: React.FC<ArtistPanel> = (
    {imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8, 
      image1Hidden, image2Hidden, image3Hidden, image4Hidden, image5Hidden, image6Hidden, image7Hidden, image8Hidden}) => {

  //Get the language of the global context
  const {lang} = useAppContext()

    return (
        <>
          <div className="artists">
            <img className="jusdevoyage" alt="Jusdevoyage" src={imageUrl3} hidden={image3Hidden}/>
            <img className="jusdevoyage-2" alt="Jusdevoyage" src={imageUrl7} hidden={image7Hidden}/>
            <img className="clem-onojeghuo" alt="" src={imageUrl8} hidden={image8Hidden}/>
            <img className="rayul" alt="Rayul" src={imageUrl5} hidden={image5Hidden}/>
            <div className="overlap-group-3">
              <img className="jonas-allert" alt="Jonas allert" src={imageUrl4} hidden={image4Hidden}/>
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-158.png" />
            </div>
            <img className="justin-luebke" alt="Justin luebke" src={imageUrl2} hidden={image2Hidden}/>
            <img className="seth-doyle" alt="Seth doyle" src={imageUrl1} hidden={image1Hidden}/>
            <img className="jennifer-marquez" alt="Jennifer marquez" src={imageUrl6} hidden={image6Hidden}/>
          </div>
        </>
        
      
    )
}

export default ArtistPanel
