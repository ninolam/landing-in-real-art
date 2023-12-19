"use client"
import { RefObject, useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context";
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Lang, defaultLangObject } from "../../types/types";
import parse from 'html-react-parser';
import { PresaleBuyingProcessButtons, PresaleBuyingProcessStep, PresaleBuyingProcessTexts, defaultStepsObject } from "../../types/presale.types";
import React from "react";


function BuyingProcess() {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_PRESALE_BUYING_PROCESS_COLLECTION  = 'Presale_BuyingProcess'
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState<[string, PresaleBuyingProcessStep][]>([])

    // Create an array of refs
    const divRefs: RefObject<HTMLDivElement>[] = useRef(steps.map(() => React.createRef<HTMLDivElement>())).current;


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
        const texts_ = data[1] as PresaleBuyingProcessTexts
        setTexts(texts_)
        const steps = Object.entries(texts_.steps)
        setSteps(steps)
        /*
        for (const [key, value] of steps) {
            const val = value as PresaleBuyingProcessStep
            console.dir(`${key}: ${val.stepNumber[lang_]}`);
            console.dir(`${key}: ${val.title[lang_]}`);
            console.dir(`${key}: ${val.description[lang_]}`);
        }*/
        

        divRefs.forEach((ref, index) => {
            console.log(`Div ${index} current:`, ref.current);
          })
      }
  
      fetchData();
    }, [])

    //--------------------------------------------------------------------- useEffect
    /**
     * UseEffect called when 'currentStep' has changed
     */
    useEffect(() => {
        const stepsLength = Object.entries(texts.steps).length
        if (stepsLength !== 0) {
            
        }
    }, [currentStep])

    //--------------------------------------------------------------- handleStepClick
    const handleStepClick = (direction: string) => {
        const stepsLength = steps.length 
        if (direction === 'right') {
            setCurrentStep((prevIndex) => (prevIndex + 1) % stepsLength);
        } else {
            setCurrentStep((prevIndex) => (prevIndex - 1 + stepsLength) % stepsLength);
        }
      };


  return (
    <div className="frame-20">
        <div className="frame-21">
            <div className="text-wrapper-3">{texts.mainTitle[lang_]}</div>
            <p className="text-wrapper-7">{texts.mainDescription[lang_]}</p>
        </div>
        <div className="frame-22">
            {steps.map(([key, value], index) => (
                
                <div className="frame-22" 
                    ref={divRefs[index]} 
                    key={key}
                    style={{ display: currentStep === null || currentStep === index ? 'flex' : 'none' }}
                    >
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
                                    <div className="heading-3" onClick={() => handleStepClick('left')}>{buttons.previous[lang_]}</div>
                                </div>
                                <div className="frame-28">
                                    <div className="heading-3" onClick={() => handleStepClick('right')}>{buttons.next[lang_]}</div>
                                </div>
                            </div>
                        </div>               
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default BuyingProcess