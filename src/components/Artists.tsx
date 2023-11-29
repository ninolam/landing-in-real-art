"use client"
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";
import { useAppContext } from "../context";

const Artists = () => {

  const [imageUrl1, setImageUrl1] = useState("")
  const [imageUrl2, setImageUrl2] = useState("")
  const [imageUrl3, setImageUrl3] = useState("")
  const [imageUrl4, setImageUrl4] = useState("")
  const [imageUrl5, setImageUrl5] = useState("")
  const [imageUrl6, setImageUrl6] = useState("")
  const [imageUrl7, setImageUrl7] = useState("")
  const [imageUrl8, setImageUrl8] = useState("")

  //Get the language of the global context
  const {lang, setLang} = useAppContext()

    useEffect(() => {
        const fetchImages = async () => {
            const imageRef1 = ref(storage, 'artists/artist1.png') //seth doyle
            const imageRef2 = ref(storage, 'artists/artist2.png') //justin luebke
            const imageRef3 = ref(storage, 'artists/artist3.png') 
            const imageRef4 = ref(storage, 'artists/artist4.png') //jonas allert
            const imageRef5 = ref(storage, 'artists/artist5.png') // Rayul
            const imageRef6 = ref(storage, 'artists/artist6.png') //jennifer marquez
            const imageRef7 = ref(storage, 'artists/artist7.png') 
            const imageRef8 = ref(storage, 'artists/artist8.png')
            
            try {
              const url1 = await getDownloadURL(imageRef1)
              const url2 = await getDownloadURL(imageRef2) 
              const url3 = await getDownloadURL(imageRef3)
              const url4 = await getDownloadURL(imageRef4)
              const url5 = await getDownloadURL(imageRef5)
              const url6 = await getDownloadURL(imageRef6)
              const url7 = await getDownloadURL(imageRef7)
              const url8 = await getDownloadURL(imageRef8)

              console.log('URL8 : ' + url8)
              setImageUrl1(url1)
              setImageUrl2(url2)
              setImageUrl3(url3)
              setImageUrl4(url4)
              setImageUrl5(url5)
              setImageUrl6(url6)
              setImageUrl7(url7)
              setImageUrl8(url8);

            } catch (error) {
                console.error("Error fetching image", error);
            }
        };

        fetchImages();
    }, []);
    
    return (

        <div className="overlap-3">
        <div className="frame-6">
          <div className="frame-7">
            <div className="text-wrapper-2">Nos artistes</div>
            <p className="p">Découvez notre catalogue de’artiste galeries physique IRA</p>
          </div>
          <div className="frame-8">
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
        </div>
        <img className="star" alt="Star" src="/img/star-1.png" />
        <img className="polygon" alt="Polygon" src="/img/polygon-3.png" />
      </div>

    )
}

export default Artists
