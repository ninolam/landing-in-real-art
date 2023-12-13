"use client"
import Image from "next/image";
import { useAppContext } from "../../context";
import Rectangle from "./Rectangle";

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
    {
      imageUrl1, imageUrl2, imageUrl3, imageUrl4, imageUrl5, imageUrl6, imageUrl7, imageUrl8, 
      image1Hidden, image2Hidden, image3Hidden, image4Hidden, image5Hidden, image6Hidden, image7Hidden, image8Hidden,
      artistName1, artistName2, artistName3, artistName4, artistName5, artistName6, artistName7, artistName8,
      artistDesc1, artistDesc2, artistDesc3, artistDesc4, artistDesc5, artistDesc6, artistDesc7, artistDesc8,
    }) => {

  //Get the language of the global context
  const {lang} = useAppContext()

    return (
        <>
          <div className="frame-48095747">
            <div className="image-1-2">
              {/** IMAGE 1 */}
              <div className="artist1-card-container" hidden={image1Hidden}>
                <div className="artist1-card-front">
                 <Image className="image1" alt="image1" src={imageUrl1} fill={true} />
                </div>
                <div className="artist1-card-back">
                  <h1>{artistName1}</h1>
                  <p>{artistDesc1}</p>
                </div>  
              </div>

              {/** IMAGE 2 */}
              <div className="artist2-card-container"  hidden={image2Hidden}>
                <div className="artist2-card-front">
                  <Image className="image2" alt="image2" src={imageUrl2} hidden={image2Hidden} fill={true}/>
                </div>
                <div className="artist2-card-back">
                  <h1>{artistName2}</h1>
                  <p>{artistDesc2}</p>
                </div>
              </div>

            </div>
            <div className="frame-48095746">
              <div className="image-3-5-6">
                <img
                  className="jusdevoyage-a-7-un-al-m-mq-i-unsplash-1"
                  src="jusdevoyage-a-7-un-al-m-mq-i-unsplash-10.png"
                />
                <img
                  className="rayul-m-6-gy-9-o-hg-ii-unsplash-1"
                  src="rayul-m-6-gy-9-o-hg-ii-unsplash-10.png"
                />
                <img
                  className="jennifer-marquez-oc-ld-7-rz-7-a-6-o-unsplash-1"
                  src="jennifer-marquez-oc-ld-7-rz-7-a-6-o-unsplash-10.png"
                />
              </div>
              <div className="frame-48095745">
                <div className="frame-48095744">
                  <img
                    className="jonas-allert-zlot-9-osc-764-unsplash-1"
                    src="jonas-allert-zlot-9-osc-764-unsplash-10.png"
                  />
                </div>
                <div className="frame-48095742">
                  <img
                    className="jusdevoyage-eq-ce-8-q-4-xr-08-unsplash-1"
                    src="jusdevoyage-eq-ce-8-q-4-xr-08-unsplash-10.png"
                  />
                  <img
                    className="clem-onojeghuo-yhg-xfs-80-r-jo-unsplash-1"
                    src="clem-onojeghuo-yhg-xfs-80-r-jo-unsplash-10.png"
                  />
                </div>
              </div>
            </div>
          
            <Rectangle/>

          </div>
        </>
        
      
    )
}

export default ArtistPanel
