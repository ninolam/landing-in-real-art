"use client"
import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Lang, PresaleDataButtons, PresaleDataTexts, defaultLangObject } from "../../types/types";

const HeroSection = () => {
    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_PRESALE_HERO_SECTION_COLLECTION  = 'Presale_HeroSection'
    const FIREBASE_PRESALE_HERO_SECTION_TITLE_1     = 'title1'
    const FIREBASE_PRESALE_HERO_SECTION_TITLE_2     = 'title2'
    const FIREBASE_PRESALE_HERO_SECTION_DESCRIPTION = 'description'
    const FIREBASE_PRESALE_HERO_SECTION_SEE_DROP = 'seeDrop'
    const FIREBASE_PRESALE_HERO_SECTION_SEE_DROP_LINK = 'seeDropLink'

    const defaultPresaleButtons = {
        seeDrop: defaultLangObject,
        seeDropLink: ''
    }

    const defaultPresaleTexts = {
        title1: defaultLangObject,
        title2: defaultLangObject,
        description: defaultLangObject
    }

    const [presaleButtons, setPresaleButtons] = useState<PresaleDataButtons>(defaultPresaleButtons)
    const [presaleTexts, setPresaleTexts]     = useState<PresaleDataTexts>(defaultPresaleTexts)
    const [title1, setTitle1] = useState<string>('')
    const [title2, setTitle2] = useState<string>('')
    const [desc, setDesc]     = useState<string>('')
    const [seeDropButton, setSeeDropButton] = useState<string>('')
    const [seeDropButtonLink, setSeeDropButtonLink] = useState<string>('')
    
    useEffect(() => {
      const fetchData = async () => {
        const presaleCollection = collection(db, FIREBASE_PRESALE_HERO_SECTION_COLLECTION);
        const presaleDocuments  = await getDocs(presaleCollection);
        const presaleData       = presaleDocuments.docs.map(doc => doc.data())

        //Index 0 ===> Header_Buttons
        setPresaleButtons(presaleData[0] as PresaleDataButtons)
        
        //Index 1 ===> Header Text
        setPresaleTexts(presaleData[1] as PresaleDataTexts)
        
        setSeeDropButton(presaleData[0][FIREBASE_PRESALE_HERO_SECTION_SEE_DROP][lang_])
        setSeeDropButtonLink(presaleData[0][FIREBASE_PRESALE_HERO_SECTION_SEE_DROP_LINK])

        setTitle1(presaleData[1][FIREBASE_PRESALE_HERO_SECTION_TITLE_1][lang_])
        setTitle2(presaleData[1][FIREBASE_PRESALE_HERO_SECTION_TITLE_2][lang_])
        setDesc(presaleData[1][FIREBASE_PRESALE_HERO_SECTION_DESCRIPTION][lang_])
      }
  
      fetchData();
    }, [])
  
  
    useEffect(() => {
        setSeeDropButton(presaleButtons[FIREBASE_PRESALE_HERO_SECTION_SEE_DROP][lang_])
        setSeeDropButtonLink(presaleButtons[FIREBASE_PRESALE_HERO_SECTION_SEE_DROP_LINK])
        setTitle1(presaleTexts[FIREBASE_PRESALE_HERO_SECTION_TITLE_1][lang_])
        setTitle2(presaleTexts[FIREBASE_PRESALE_HERO_SECTION_TITLE_2][lang_])
        setDesc(presaleTexts[FIREBASE_PRESALE_HERO_SECTION_DESCRIPTION][lang_])
    }, [lang]);

    
  return (
    <div className="header-presale">
    <div className="frame-2">
        <div className="frame-3">   
        <p className="heading">
            <span className="text-wrapper"> {title1} </span>
            <span className="span">{title2}</span>
        </p>
        <img
            className="rectangle"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39772@2x.png"
        />
        </div>
        <div className="frame-4">
        <div className="div-wrapper">
            <p className="p">
            {desc}
            </p>
        </div>
        <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39773.svg"
        />
        <button className="button">
            <div className="text-wrapper-2">{seeDropButton}</div>
        </button>
        </div>
    </div>
    <img
        className="rectangle-2"
        alt="Rectangle"
        src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39771.svg"
    />
</div>

  )
}

export default HeroSection

