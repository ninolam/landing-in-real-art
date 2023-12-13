"use client"
import { useAppContext } from '../../context'
import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import parse from 'html-react-parser';
import { JoinTrendButtons, JoinTrendData, JoinTrendTexts, Lang, defaultLangObject } from '../../types/types';
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
        <div className="frame-48095739">
          <div className="title2">
            <div className="rejoindre-le-mouvement">{parse(title)}</div>
          </div>
          <div className="wrraper-card">
            <div className="frame-48095730">
              <div className="frame-76">
                <div className="rectangle-52"></div>
                <div className="vuesax-linear-status-up">
                  <svg
                    className="vuesax-linear-status-up2"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.37988 18.1481V16.0781"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.5 18.1517V14.0117"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.6201 18.1497V11.9297"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.6199 5.85156L17.1599 6.39156C14.6099 9.37156 11.1899 11.4816 7.37988 12.4316"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.6904 5.85156H17.6204V8.77156"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="frame-7">
                <div className="heading2">
                  {parse(artgalleryTitle)}
                </div>
                <div className="paragraph2">
                  {parse(artgalleryDesc)}
                </div>
              </div>
              <div className="frame-3">
                <Link href="">
                  <div className="heading3">{artgalleryButton}</div>
                </Link>  
              </div>
            </div>
            <div className="frame-48095738">
              <div className="frame-48095731">
                <div className="frame-76">
                  <div className="rectangle-52"></div>
                  <div className="vuesax-linear-status-up">
                    <svg
                      className="vuesax-linear-status-up3"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.37988 18.1481V16.0781"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12.5 18.1517V14.0117"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.6201 18.1497V11.9297"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M17.6199 5.85156L17.1599 6.39156C14.6099 9.37156 11.1899 11.4816 7.37988 12.4316"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14.6904 5.85156H17.6204V8.77156"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                        stroke="#7A5F9A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="frame-7">
                  <div className="heading4">
                    {parse(aasTitle)}
                  </div>
                  <div className="paragraph2">
                    {parse(aasDesc)}
                  </div>
                </div>
                <div className="frame-3">
                  <div className="heading3">{aasButton}</div>
                </div>
              </div>
            </div>
            <div className="frame-48095732">
              <div className="frame-76">
                <div className="rectangle-52"></div>
                <div className="vuesax-linear-status-up">
                  <svg
                    className="vuesax-linear-status-up4"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.37988 18.1481V16.0781"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.5 18.1517V14.0117"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.6201 18.1497V11.9297"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.6199 5.85156L17.1599 6.39156C14.6099 9.37156 11.1899 11.4816 7.37988 12.4316"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.6904 5.85156H17.6204V8.77156"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                      stroke="#7A5F9A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="frame-72">
                <div className="heading5">{marketplaceTitle}</div>
                <div className="paragraph2">
                  {parse(marketplaceDesc)}  
                </div>
              </div>
              <div className="frame-3">
                <div className="heading3">{marketplaceButton}</div>
              </div>
            </div>
            <svg
              className="frame-48095740"
              width="178"
              height="179"
              viewBox="0 0 178 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M151.986 114.301C151.986 114.301 140.532 83.3529 107.329 79.7044C61.2677 74.6429 51.0753 97.6955 65.004 101.961C78.9327 106.227 74.1262 58.9067 42.7472 41.028"
                stroke="black"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              <circle
                cx="41.486"
                cy="40.9368"
                r="4.74333"
                transform="rotate(34.9335 41.486 40.9368)"
                fill="#5552FF"
              />
              <circle
                cx="152.486"
                cy="114.937"
                r="4.74333"
                transform="rotate(34.9335 152.486 114.937)"
                fill="#933FFE"
              />
            </svg>

            <svg
              className="frame-36600"
              width="155"
              height="78"
              viewBox="0 0 155 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M4.48499 48.4898C4.48499 48.4898 30.3913 73.1637 76.7229 64.2823C136.824 52.7615 147.14 5.00004 147.14 5.00004"
                stroke="black"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              <circle
                cx="4.60464"
                cy="49.103"
                r="4.36152"
                transform="rotate(-10.8515 4.60464 49.103)"
                fill="#FF7051"
              />
              <circle
                cx="146.605"
                cy="5.10304"
                r="4.36152"
                transform="rotate(-10.8515 146.605 5.10304)"
                fill="#5552FF"
              />
            </svg>
          </div>
        </div>
    )
}

export default JoinMovement