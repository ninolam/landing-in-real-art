"use client"
import VuesaxLinearStatusUp1 from '../components/VuesaxLinearStatusUp1'
import { useAppContext } from '../context'
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import parse from 'html-react-parser';
import { JoinTrendData } from '../types/types';

const JoinMovement = () => {

    //Get the language of the global context
    const {lang} = useAppContext()

    const FIREBASE_JOIN_MOVEMENT_COLLECTION = 'JoinMovement'

    const [title, setTitle]                         = useState<string>('')
    const [artgalleryTitle, setArtgalleryTitle]     = useState<string>('')
    const [artgalleryDesc, setArtgalleryDesc]       = useState<string>('')
    const [artgalleryButton, setArtgalleryButton]   = useState<string>('')
    const [aasTitle, setAasTitle]                   = useState<string>('')
    const [aasDesc, setAasDesc]                     = useState<string>('')
    const [aasButton, setAasButton]                 = useState<string>('')
    const [marketplaceTitle, setMarketplaceTitle]   = useState<string>('')
    const [marketplaceDesc, setMarketplaceDesc]     = useState<string>('')
    const [marketplaceButton, setMarketplaceButton] = useState<string>('')

    useEffect(() => {

      const fetchText = async () => {
          const joinMovementCollection = collection(db, FIREBASE_JOIN_MOVEMENT_COLLECTION);
          const joinMovementDocuments  = await getDocs(joinMovementCollection);
          const joinMovementlData      = joinMovementDocuments.docs.map(doc => doc.data() as JoinTrendData);
          
          //Buttons : indice 0
          setArtgalleryButton(joinMovementlData[0].artgallery_join[lang])
          setAasButton(joinMovementlData[0].aas_join[lang])
          setMarketplaceButton(joinMovementlData[0].marketplace_join[lang])

          //Texts : indice 1
          setTitle(joinMovementlData[1].title[lang])
          setArtgalleryTitle(joinMovementlData[1].artgallery_title[lang])
          setArtgalleryDesc(joinMovementlData[1].artgallery_description[lang])
          setAasTitle(joinMovementlData[1].aas_title[lang])
          setAasDesc(joinMovementlData[1].aas_description[lang])
          setMarketplaceTitle(joinMovementlData[1].marketplace_title[lang])
          setMarketplaceDesc(joinMovementlData[1].marketplace_description[lang])

      }
      fetchText();
  
    }, [lang]);

    
    
    return (
        <div className="overlap">
          <img className="union" alt="Union" src="/img/union-1.png" />
          <div className="group">
            <div className="text-wrapper">{parse(title)}</div>
            <div className="overlap-group">
              <div className="frame">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <VuesaxLinearStatusUp1 className="vuesax-linear-status" />
                  </div>
                </div>
                <div className="frame-2">
                  <div className="heading">
                    {parse(artgalleryTitle)}
                  </div>
                  <p className="paragraph">
                  {parse(artgalleryDesc)}
                    
                  </p>
                </div>
                <div className="heading-wrapper">
                  <div className="heading-2">{artgalleryButton}</div>
                </div>
              </div>
              <div className="frame-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <VuesaxLinearStatusUp1 className="vuesax-linear-status" />
                  </div>
                </div>
                <div className="frame-2">
                  <div className="heading-3">
                    {parse(aasTitle)}
                  </div>
                  <p className="paragraph">{parse(aasDesc)}</p>
                </div>
                <div className="heading-wrapper">
                  <div className="heading-2">{aasButton}</div>
                </div>
              </div>
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <VuesaxLinearStatusUp1 className="vuesax-linear-status" />
                  </div>
                </div>
                <div className="frame-5">
                  <div className="heading-4">{marketplaceTitle}</div>
                  <p className="paragraph">
                    {parse(marketplaceDesc)}                    
                  </p>
                </div>
                <div className="heading-wrapper">
                  <div className="heading-2">{marketplaceButton}</div>
                </div>
              </div>
              <div className="group-2">
                <img className="vector" alt="Vector" src="/img/vector-219-1.svg" />
                <div className="ellipse" />
                <div className="ellipse-2" />
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <img className="img" alt="Vector" src="/img/vector-219.svg" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default JoinMovement