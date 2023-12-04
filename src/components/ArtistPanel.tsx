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
    image8Hidden: boolean,
    artistName1: string,
    artistName2: string,
    artistName3: string,
    artistName4: string,
    artistName5: string,
    artistName6: string,
    artistName7: string,
    artistName8: string,
    artistDesc1: string,
    artistDesc2: string,
    artistDesc3: string,
    artistDesc4: string,
    artistDesc5: string,
    artistDesc6: string,
    artistDesc7: string,
    artistDesc8: string,

  }

  
const ArtistPanel: React.FC<ArtistPanel> = (
    {imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8, 
      image1Hidden, image2Hidden, image3Hidden, image4Hidden, image5Hidden, image6Hidden, image7Hidden, image8Hidden}) => {

  //Get the language of the global context
  const {lang} = useAppContext()

    return (
        <>
          <div className="artists">

            {/** IMAGE 1 */}
            <div className="artist1-card-container" hidden={image1Hidden}>
              <div className="artist1-card-front">
                <img className="image1" alt="image1" src={imageUrl1} />
              </div>
              <div className="artist1-card-back">
                <h1>artist 1</h1>
                <p>desc artist1</p>
              </div>
            </div>

            {/** IMAGE 2 */}
            <div className="artist2-card-container"  hidden={image2Hidden}>
              <div className="artist2-card-front">
                <img className="image2" alt="image2" src={imageUrl2} hidden={image2Hidden}/>
              </div>
              <div className="artist3-back">
                <h1>artist 2</h1>
                <p>desc artist2</p>
              </div>
            </div>

            {/** IMAGE 3 */}
            <div className="artist3-card-container" hidden={image3Hidden}>
              <div className="artist3-card-front">
                <img className="image3" alt="Jusdevoyage" src={imageUrl3}/>
              </div>
              <div className="artist3-card-back">
                <h1>artist 3</h1>
                <p>desc artist3</p>
              </div>
            </div>
            
            {/** IMAGE 4 */}
            <div className="overlap-group-3">
              <div className="artist4-card-container" hidden={image4Hidden}>
                  <div className="artist4-card-front">
                    <img className="image4" alt="Jonas allert" src={imageUrl4} />
                  </div>
                  <div className="artist4-card-back">
                  <h1>artist 4</h1>
                  <p>desc artist4</p>
                </div>
              </div>  
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-158.png" />
            </div>

            {/** IMAGE 5 */}
            <div className="artist5-card-container" hidden={image5Hidden}>
              <div className="artist5-card-front">
                <img className="image5" alt="Rayul" src={imageUrl5} />
              </div>
              <div className="artist5-card-back">
                <h1>artist 5</h1>
                <p>desc artist5</p>
              </div>
            </div>

            {/** IMAGE 6 */}
            <div className="artist6-card-container" hidden={image6Hidden}>
              <div className="artist6-card-front">
                <img className="image6" alt="image6" src={imageUrl6} />
              </div>
              <div className="artist6-card-back">
                <h1>artist 6</h1>
                <p>desc artist6</p>
              </div>
            </div>

            {/** IMAGE 7 */}
            <div className="artist7-card-container"  hidden={image7Hidden}>
              <div className="artist7-card-front">
                <img className="image7" alt="image7" src={imageUrl7}/>
              </div>
              <div className="artist7-card-back">
                <h1>artist 7</h1>
                <p>desc artist7</p>
              </div>
            </div>

            {/** IMAGE 8 */}
            <div className="artist8-card-container" hidden={image8Hidden}>
              <div className="artist8-card-front">
                <img className="image8" alt="image8" src={imageUrl8}/>
              </div>  
              <div className="artist8-card-back">
                <h1>artist 8</h1>
                <p>desc artist8</p>
              </div>
            </div>  
          </div>  
        </>
        
      
    )
}

export default ArtistPanel
