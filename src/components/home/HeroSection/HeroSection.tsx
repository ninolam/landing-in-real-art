"use client"
import styles from './HeroSection.module.scss'
import { useEffect, useState } from "react";
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../../../context";
import { HeaderButtons, HeaderTexts, Lang, defaultLangObject } from "../../../types/types";
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
      <div className={styles.heroSection}>
        <div className={styles.heroSectionWrapperTopContain}>
          <div className={styles.heroSectionTopContain}>
            <div className={styles.heroSectionTitle}>
              <div className={styles.heroSectionHeading}>
                <span>
                  <span className={styles.heroSectionHeadingSpan}>
                    {headerTexts.title1[lang_]}
                    <br />
                  </span>
                  <span className={styles.heroSectionHeadingSpan2}>{headerTexts.title2[lang_]}</span>
                </span>
              </div>
            </div>
            <div className={styles.heroSectionContainerButton}>
              
              <div className={styles.heroSectionButton}>
                <Link href="/test">
                  <div className={styles.heroSectionRejoindreIra}>{headerButtons.JoinIRA[lang_]}</div>
                </Link>
              </div>
              
              <div className={styles.heroSectionButton}>
                <div className={styles.heroSectionJeDemarre}>{headerButtons.StartIRA[lang_]}</div>
              </div>
            </div>
          </div>
          <ImageHeroSection/>
        </div>
        <div className={styles.heroSectionParapgraphe}>
          <div className={styles.heroSectionParagraph}>
            {headerTexts.text1[lang_]}
          </div>

            <SpheresHeroSection/>
        </div>
      </div>

     
    )

}

export default HeroSection