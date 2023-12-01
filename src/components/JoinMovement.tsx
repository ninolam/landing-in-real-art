"use client"
import VuesaxLinearStatusUp1 from '../components/VuesaxLinearStatusUp1'
import { useAppContext } from '../context'
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import parse from 'html-react-parser';

const JoinMovement = () => {

    //Get the language of the global context
    const {lang} = useAppContext()

    const FIREBASE_JOIN_MOVEMENT_COLLECTION = 'JoinMovement'
    const FIREBASE_JOIN_MOVEMENT_KEY_TITLE  = 'title'
    const FIREBASE_ARTGALLERY_TITLE         = 'artgallery_title'
    const FIREBASE_ARTGALLERY_DESC          = 'artgallery_description'
    const FIREBASE_AAS_TITLE                = 'aas_title'
    const FIREBASE_AAS_DESC                 = 'aas_description'
    const FIREBASE_MARKETPLACE_TITLE        = 'marketplace_title'
    const FIREBASE_MARKETPLACE_DESC         = 'marketplace_description'
    const FIREBASE_ARTGALLERY_BUTTON        = 'artgallery_join'
    const FIREBASE_AAS_BUTTON               = 'aas_join'
    const FIREBASE_MARKETPLACE_BUTTON       = 'marketplace_join'

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
          const joinMovementlData      = joinMovementDocuments.docs.map(doc => doc.data());
          
          //Buttons : indice 0
          setArtgalleryButton(joinMovementlData[0][FIREBASE_ARTGALLERY_BUTTON][lang])
          setAasButton(joinMovementlData[0][FIREBASE_AAS_BUTTON][lang])
          setMarketplaceButton(joinMovementlData[0][FIREBASE_MARKETPLACE_BUTTON][lang])

          //Texts : indice 1
          setTitle(joinMovementlData[1][FIREBASE_JOIN_MOVEMENT_KEY_TITLE][lang])
          setArtgalleryTitle(joinMovementlData[1][FIREBASE_ARTGALLERY_TITLE][lang])
          setArtgalleryDesc(joinMovementlData[1][FIREBASE_ARTGALLERY_DESC][lang])
          setAasTitle(joinMovementlData[1][FIREBASE_AAS_TITLE][lang])
          setAasDesc(joinMovementlData[1][FIREBASE_AAS_DESC][lang])
          setMarketplaceTitle(joinMovementlData[1][FIREBASE_MARKETPLACE_TITLE][lang])
          setMarketplaceDesc(joinMovementlData[1][FIREBASE_MARKETPLACE_DESC][lang])

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