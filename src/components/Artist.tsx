"use client"
import { useAppContext } from "../context";

interface Artist {
    imageUrl1: string
    imageUrl2: string
    imageUrl3: string
    imageUrl4: string
    imageUrl5: string
    imageUrl6: string
    imageUrl7: string
    imageUrl8: string
  }

  
const Artist: React.FC<Artist> = ({imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8}) => {

  //Get the language of the global context
  const {lang} = useAppContext()

    return (
        <>
          <div className="artists">
            <img className="jusdevoyage" alt="Jusdevoyage" src={imageUrl3} />
            <img className="jusdevoyage-2" alt="Jusdevoyage" src={imageUrl7} />
            <img className="clem-onojeghuo" alt="" src={imageUrl8}/>
            <img className="rayul" alt="Rayul" src={imageUrl5} />
            <div className="overlap-group-3">
              <img className="jonas-allert" alt="Jonas allert" src={imageUrl4} />
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-158.png" />
            </div>
            <img className="justin-luebke" alt="Justin luebke" src={imageUrl2} />
            <img className="seth-doyle" alt="Seth doyle" src={imageUrl1} />
            <img className="jennifer-marquez" alt="Jennifer marquez" src={imageUrl6}/>
          </div>
        </>
        
      
    )
}

export default Artist
