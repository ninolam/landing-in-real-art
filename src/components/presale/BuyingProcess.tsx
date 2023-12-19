"use client"
import { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Lang, defaultLangObject } from "../../types/types";
import parse from 'html-react-parser';
import Link from "next/link";
import { PresaleBuyingProcessButtons, PresaleBuyingProcessTexts, defaultStepsObject } from "../../types/presale.types";


function BuyingProcess() {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_PRESALE_BUYING_PROCESS_COLLECTION  = 'Presale_BuyingProcess'
    
    const defaultPresaleBuyingProcessTexts = {
        mainTitle: defaultLangObject,
        mainDescription: defaultLangObject,
        steps: defaultStepsObject
    }

    const defaultPresaleBuyingProcessButtons = {
        next: defaultLangObject,
        previous: defaultLangObject
    }

    const [buttons, setButtons] = useState<PresaleBuyingProcessButtons>(defaultPresaleBuyingProcessButtons);
    const [texts, setTexts] = useState<PresaleBuyingProcessTexts>(defaultPresaleBuyingProcessTexts);
  
    useEffect(() => {
      const fetchData = async () => {
        const collection_ = collection(db, FIREBASE_PRESALE_BUYING_PROCESS_COLLECTION);
        const documents  = await getDocs(collection_); 
        const data       = documents.docs.map(doc => doc.data());
        //Index 0 ===> Header_Buttons
        setButtons(data[0] as PresaleBuyingProcessButtons)

        //Index 1 ===> Header Text
        setTexts(data[1] as PresaleBuyingProcessTexts)
      }
  
      fetchData();
    }, [])

  return (
    <div className="frame-20">
        <div className="frame-21">
            <div className="text-wrapper-3">{texts.mainTitle[lang_]}</div>
            <p className="text-wrapper-7">{texts.mainDescription[lang_]}</p>
        </div>
        <div className="frame-22">
            {Object.entries(texts.steps).map(([key, value], index) => (
                <>
                    <img
                    className="rectangle-5"
                    alt="Rectangle"
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39774.svg"
                    />
                    
                    <div className="frame-23">
                        <div className="text-wrapper-8">{value.stepNumber[lang_]}</div>
                    </div>
                    
                    <p className="cr-ation-d-un">
                        {parse(value.title[lang_])}
                    </p>

                    <div className="frame-24">
                        <div className="frame-25">
                            <p className="paragraph-2">
                                {parse(value.description[lang_])}
                            </p>
                            <div className="frame-26">
                                <div className="frame-27">
                                    <div className="heading-3">{buttons.previous[lang_]}</div>
                                </div>
                                <div className="frame-28">
                                    <div className="heading-3">{buttons.next[lang_]}</div>
                                </div>
                            </div>
                        </div>               
                    </div>
                </>
            ))}
        </div>
    </div>

  )
}

export default BuyingProcess