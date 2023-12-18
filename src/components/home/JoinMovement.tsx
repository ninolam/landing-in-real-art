"use client"
import { useAppContext } from '../../context'
import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import parse from 'html-react-parser';
import { JoinTrendButtons, JoinTrendData, JoinTrendTexts, Lang, defaultLangObject } from '../../types/types';
import Link from 'next/link';
import JoinMovementLink1 from './JoinMovementLink1';
import VuesaxLinearStatusUp from './VuesaxLinearStatusUp';
import JoinMovementLink2 from './JoinMovementLink2';

const JoinMovement = () => {
    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_JOIN_MOVEMENT_COLLECTION = 'JoinMovement'

    const [title, setTitle]                                 = useState<string>('')
    const [artgalleryTitle, setArtgalleryTitle]             = useState<string>('')
    const [artgalleryDesc, setArtgalleryDesc]               = useState<string>('')
    const [artgalleryButton, setArtgalleryButton]           = useState<string>('')
    const [artgalleryButtonLink, setArtgalleryButtonLink]   = useState<string>('')
    const [aasTitle, setAasTitle]                           = useState<string>('')
    const [aasDesc, setAasDesc]                             = useState<string>('')
    const [aasButton, setAasButton]                         = useState<string>('')
    const [aasButtonLink, setAasButtonLink]                 = useState<string>('')
    const [marketplaceTitle, setMarketplaceTitle]           = useState<string>('')
    const [marketplaceDesc, setMarketplaceDesc]             = useState<string>('')
    const [marketplaceButton, setMarketplaceButton]         = useState<string>('')
    const [marketplaceButtonLink, setMarketplaceButtonLink] = useState<string>('')
    const defaultJoinTrendButtons =  {   
      artgallery_join: defaultLangObject,
      artgallery_join_link: '',
      aas_join: defaultLangObject,
      aas_join_link: '',
      marketplace_join: defaultLangObject,
      marketplace_join_link: ''    
    }

    const defaultJoinTrendTexts =  {   
      title: defaultLangObject,
      artgallery_title: defaultLangObject,
      artgallery_description: defaultLangObject,
      aas_title: defaultLangObject,
      aas_description: defaultLangObject,
      marketplace_title: defaultLangObject,
      marketplace_description: defaultLangObject
      } 

    
    const [joinTrendButtons, setJoinTrendButtons] = useState<JoinTrendButtons>(defaultJoinTrendButtons)
    const [joinTrendtexts, setJoinTrendTexts]     = useState<JoinTrendTexts>(defaultJoinTrendTexts)

    useEffect(() => {
      const fetchData = async () => {
        const joinMovementCollection = collection(db, FIREBASE_JOIN_MOVEMENT_COLLECTION);
        const joinMovementDocuments  = await getDocs(joinMovementCollection);
        const joinMovementData      = joinMovementDocuments.docs.map(doc => doc.data());
        
        //Buttons : indice 0
        setJoinTrendButtons(joinMovementData[0] as JoinTrendButtons) 
        setArtgalleryButton(joinMovementData[0].artgallery_join[lang])
        setAasButton(joinMovementData[0].aas_join[lang])
        setMarketplaceButton(joinMovementData[0].marketplace_join[lang])

        //Texts : indice 1
        setJoinTrendTexts(joinMovementData[1] as JoinTrendTexts)
        setTitle(joinMovementData[1].title[lang])
        setArtgalleryTitle(joinMovementData[1].artgallery_title[lang])
        setArtgalleryDesc(joinMovementData[1].artgallery_description[lang])
        setAasTitle(joinMovementData[1].aas_title[lang])
        setAasDesc(joinMovementData[1].aas_description[lang])
        setMarketplaceTitle(joinMovementData[1].marketplace_title[lang])
        setMarketplaceDesc(joinMovementData[1].marketplace_description[lang])
      }

      fetchData();

    }, [])

    useEffect(() => {
      //Buttons
      setArtgalleryButton(joinTrendButtons.artgallery_join[lang_])
      setAasButton(joinTrendButtons.aas_join[lang_])
      setMarketplaceButton(joinTrendButtons.marketplace_join[lang_])

      //Texts 
      setTitle(joinTrendtexts.title[lang_])
      setArtgalleryTitle(joinTrendtexts.artgallery_title[lang_])
      setArtgalleryDesc(joinTrendtexts.artgallery_description[lang_])
      setAasTitle(joinTrendtexts.aas_title[lang_])
      setAasDesc(joinTrendtexts.aas_description[lang_])
      setMarketplaceTitle(joinTrendtexts.marketplace_title[lang_])
      setMarketplaceDesc(joinTrendtexts.marketplace_description[lang_])
  
    }, [lang]);

    return (
        <div className="frame-48095739">
          <div className="title2">
            <div className="rejoindre-le-mouvement">{parse(title)}</div>
          </div>
          <div className="wrraper-card">
            <div className="frame-artgallery">
              <div className="frame-76">
                <div className="rectangle-52"></div>

                <VuesaxLinearStatusUp/>

              </div>
              <div className="frame-7">
                <div className="heading2">
                  {parse(artgalleryTitle)}
                </div>
                <div className="paragraph2">
                  {parse(artgalleryDesc)}
                </div>
              </div>
              <div className="button-join-movement">
                <Link href={artgalleryButtonLink}>
                  <div className="heading3">{artgalleryButton}</div>
                </Link>  
              </div>
            </div>
            <div className="frame-artasservice">
              <div className="frame-48095731">
                <div className="frame-76">
                  <div className="rectangle-52"></div>
                  <VuesaxLinearStatusUp/>
                </div>
                <div className="frame-7">
                  <div className="heading4">
                    {parse(aasTitle)}
                  </div>
                  <div className="paragraph2">
                    {parse(aasDesc)}
                  </div>
                </div>
                <div className="button-join-movement">
                  <Link href={aasButtonLink}>
                    <div className="heading3">{aasButton}</div>
                  </Link>  
                </div>
              </div>
            </div>
            <div className="frame-marketplace">
              <div className="frame-76">
                <div className="rectangle-52"></div>
                <VuesaxLinearStatusUp/>

              </div>
              <div className="frame-72">
                <div className="heading5">{marketplaceTitle}</div>
                <div className="paragraph2">
                  {parse(marketplaceDesc)}  
                </div>
              </div>
              <div className="button-join-movement">
                <Link href={marketplaceButtonLink}>
                  <div className="heading3">{marketplaceButton}</div>
                </Link>  
              </div>
            </div>

            <JoinMovementLink1/>
            <JoinMovementLink2/>
            

          </div>
        </div>
    )
}

export default JoinMovement