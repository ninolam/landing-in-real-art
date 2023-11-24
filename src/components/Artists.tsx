"use client"
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebaseConfig";

const Artists = () => {

  const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImages = async () => {
            const imageRef = ref(storage, 'images/clem-onojeghuo-yhgxfs80rjo-unsplash-1.png'); // Path to your image in Firebase Storage
            try {
                const url = await getDownloadURL(imageRef);
                setImageUrl(url);
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
            <img className="jusdevoyage" alt="Jusdevoyage" src="/img/jusdevoyage-a7unalmmqi-unsplash-1.png" />
            <img className="jusdevoyage-2" alt="Jusdevoyage" src="/img/jusdevoyage-eqce8q4xr08-unsplash-1.png" />
            <img
              className="clem-onojeghuo"
              alt="Clem onojeghuo"
              src={imageUrl}
            />
            <img className="rayul" alt="Rayul" src="/img/rayul.png" />
            <div className="overlap-group-3">
              <img className="jonas-allert" alt="Jonas allert" src="/img/jonas-allert-zlot9osc764-unsplash-1.png" />
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-158.png" />
            </div>
            <img className="justin-luebke" alt="Justin luebke" src="/img/justin-luebke-tmtizwshvro-unsplash-1.png" />
            <img className="seth-doyle" alt="Seth doyle" src="/img/seth-doyle-imyvzjlx3je-unsplash-1.png" />
            <img
              className="jennifer-marquez"
              alt="Jennifer marquez"
              src="/img/jennifer-marquez-ocld7rz7a6o-unsplash-1.png"
            />
          </div>
        </div>
        <img className="star" alt="Star" src="/img/star-1.png" />
        <img className="polygon" alt="Polygon" src="/img/polygon-3.png" />
      </div>

    )
}

export default Artists