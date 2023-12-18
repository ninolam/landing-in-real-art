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

        //Texts : indice 1
        setJoinTrendTexts(joinMovementData[1] as JoinTrendTexts)
      }

      fetchData();

    }, [])

    return (
        <div className="frame-48095739">
          <div className="title2">
            <div className="rejoindre-le-mouvement">{parse(joinTrendtexts.title[lang_])}</div>
          </div>
          <div className="wrraper-card">
            <div className="frame-artgallery">
              <div className="frame-76">
                <div className="rectangle-52"></div>

                <VuesaxLinearStatusUp/>

              </div>
              <div className="frame-7">
                <div className="heading2">
                  {parse(joinTrendtexts.artgallery_title[lang_])}
                </div>
                <div className="paragraph2">
                  {parse(joinTrendtexts.artgallery_description[lang_])}
                </div>
              </div>
              <div className="button-join-movement">
                <Link href={joinTrendButtons.artgallery_join_link}>
                  <div className="heading3">{joinTrendButtons.artgallery_join[lang_]}</div>
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
                    {parse(joinTrendtexts.aas_title[lang_])}
                  </div>
                  <div className="paragraph2">
                    {parse(joinTrendtexts.aas_description[lang_])}
                  </div>
                </div>
                <div className="button-join-movement">
                  <Link href={joinTrendButtons.aas_join_link}>
                    <div className="heading3">{joinTrendButtons.aas_join[lang_]}</div>
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
                <div className="heading5">{joinTrendtexts.marketplace_title[lang_]}</div>
                <div className="paragraph2">
                  {parse(joinTrendtexts.marketplace_description[lang_])}  
                </div>
              </div>
              <div className="button-join-movement">
                <Link href={joinTrendButtons.marketplace_join_link}>
                  <div className="heading3">{joinTrendButtons.marketplace_join[lang_]}</div>
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