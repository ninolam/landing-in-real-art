"use client"
import VuesaxLinearStatusUp1 from '../components/VuesaxLinearStatusUp1'
import { useAppContext } from '../context'
import { useEffect, useState } from "react";
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import parse from 'html-react-parser';
import { JoinTrendButtons, JoinTrendData, JoinTrendTexts, Lang, defaultLangObject } from '../types/types';
import Link from 'next/link';

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
        <div className="join-trend">
          <img className="union" alt="Union" src="/img/union-1.png" />
          <div className="join-trend-sub1">
            <div className="text-wrapper">{parse(title)}</div>
            <div className="join-trend-cards">
              <div className="join-trend-card1">
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
                <Link href="">
                  <div className="heading-wrapper">
                      <div className="heading-2">{artgalleryButton}</div>
                  </div>
                </Link>    
              </div>
              <div className="join-trend-card2">
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
                <Link href="">
                  <div className="heading-wrapper">
                    <div className="heading-2">{aasButton}</div>
                  </div>
                </Link>
              </div>
              <div className="join-trend-card3">
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
                <Link href="">
                  <div className="heading-wrapper">
                    <div className="heading-2">{marketplaceButton}</div>
                  </div>
                </Link>
              </div>
              <div className="join-trend-cards-link1">
                <img className="vector" alt="Vector" src="/img/vector-219-1.svg" />
                <div className="ellipse" />
                <div className="ellipse-2" />
              </div>
              <div className="join-trend-cards-link2">
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