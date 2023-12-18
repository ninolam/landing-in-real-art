"use client"
import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../../context";
import { HeaderButtons, HeaderTexts, Lang, defaultLangObject } from "../../types/types";


const HeroSection = () => { 

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const FIREBASE_HEADER_COLLECTION = 'Header'
  
    const defaultHeaderButtons = {
      JoinIRA: defaultLangObject,
      StartIRA: defaultLangObject,
    }
  
    const defaultHeaderTexts = {
      title1: defaultLangObject,
      title2: defaultLangObject,
      text1: defaultLangObject
    }
    const [headerButtons, setHeaderButtons] = useState<HeaderButtons>(defaultHeaderButtons);
    const [headerTexts, setHeaderTexts] = useState<HeaderTexts>(defaultHeaderTexts);
  
    useEffect(() => {
      const fetchData = async () => {
        const headerCollection = collection(db, FIREBASE_HEADER_COLLECTION);
        const headerDocuments  = await getDocs(headerCollection); 
        const headerData       = headerDocuments.docs.map(doc => doc.data());
        //Index 0 ===> Header_Buttons
        setHeaderButtons(headerData[0] as HeaderButtons)

        //Index 1 ===> Header Text
        setHeaderTexts(headerData[1] as HeaderTexts)
      }
  
      fetchData();
    }, [])
  
  
    return (
        <div className="hero-section">
        <div className="wrapper-top-contain">
          <div className="top-contain">
            <div className="title">
              <div className="heading">
                <span>
                  <span className="heading-span">
                  {headerTexts.title1[lang_]}
                    <br />
                  </span>
                  <span className="heading-span2">{headerTexts.title2[lang_]}</span>
                </span>
              </div>
            </div>
            <div className="container-button">
              <div className="button-hero-section">
                <div className="rejoindre-ira">{headerButtons.JoinIRA[lang_]}</div>
              </div>
              <div className="button-hero-section">
                <div className="je-d-marre">{headerButtons.StartIRA[lang_]}</div>
              </div>
            </div>
            
          </div>
          <img className="union-2" alt="Union" src="/img/union.png" />
        </div>
        <div className="parapgraphe">
          <div className="paragraph">
            {headerTexts.text1[lang_]}
          </div>
         
        </div>
      </div>

    )

}

export default HeroSection