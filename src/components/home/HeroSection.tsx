"use client"
import { useEffect, useState } from "react";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../../context";
import { HeaderButtons, HeaderTexts, Lang, defaultLangObject } from "../../types/types";
import ImageHeroSection from "./ImageHeroSection";
import SpheresHeroSection from "./SpheresHeroSection";
import Link from "next/link";


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
  <div className="hero-section__wrapper-top-contain">
    <div className="hero-section__top-contain">
      <div className="hero-section__title">
        <div className="hero-section__heading">
          <span>
            <span className="hero-section-heading-span">
              {headerTexts.title1[lang_]}
              <br />
            </span>
            <span className="hero-section-heading-span2">{headerTexts.title2[lang_]}</span>
          </span>
        </div>
      </div>
      <div className="hero-section__container-button">
        
        <div className="hero-section__button">
          <Link href="/test">
            <div className="hero-section__rejoindre-ira">{headerButtons.JoinIRA[lang_]}</div>
          </Link>
        </div>
        
        <div className="hero-section__button">
          <div className="hero-section__je-d-marre">{headerButtons.StartIRA[lang_]}</div>
        </div>
      </div>
    </div>
    <ImageHeroSection/>
  </div>
  <div className="hero-section__parapgraphe">
    <div className="hero-section__paragraph">
      {headerTexts.text1[lang_]}
    </div>

      <SpheresHeroSection/>
  </div>
</div>

     
    )

}

export default HeroSection