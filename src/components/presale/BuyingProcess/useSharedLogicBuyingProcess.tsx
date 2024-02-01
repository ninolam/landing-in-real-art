import React, { RefObject, useEffect, useRef, useState } from 'react'
import { PresaleBuyingProcessButtons, PresaleBuyingProcessStep, PresaleBuyingProcessTexts, defaultStepsObject } from '../../../types/presale.types'
import { defaultLangObject } from '../../../types/types'
import { db } from '../../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite'


const useSharedLogicBuyingProcess = () => {

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


    return { currentStep, setCurrentStep, steps, setSteps, divRefs, buttons, setButtons, texts, setTexts, handleStepClick }
}

export default useSharedLogicBuyingProcess