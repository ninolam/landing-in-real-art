"use client"
import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import parse from 'html-react-parser'
import React from "react"
import styles from './BuyingProcess.module.scss'
import useSharedLogicBuyingProcess from "./useSharedLogicBuyingProcess"

function BuyingProcess() {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang

    const { currentStep, setCurrentStep, steps, setSteps, divRefs, buttons, setButtons, texts, setTexts, handleStepClick } = useSharedLogicBuyingProcess()
    return (
        <div className={styles["frame-20"]}>
            <div className={styles["frame-21"]}>
                <div className={styles["text-wrapper-3"]}>{texts.mainTitle[lang_]}</div>
                <p className={styles["text-wrapper-7"]}>{texts.mainDescription[lang_]}</p>
            </div>
            <div className={styles["frame-22"]}>
                {steps.map(([key, value], index) => (
                    
                    <div className={styles["frame-22"]} ref={divRefs[index]} key={key}
                        style={{ display: currentStep === null || currentStep === index ? 'flex' : 'none' }}
                        >
                        <img className={styles["rectangle-5"]} alt=""
                        src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39774.svg"
                        />
                        
                        <div className={styles["frame-23"]}>
                            <div className={styles["text-wrapper-8"]}>{value.stepNumber[lang_]}</div>
                        </div>
                        
                        <p className={styles["cr-ation-d-un"]}>
                            {parse(value.title[lang_])}
                        </p>

                        <div className={styles["frame-24"]}>
                            <div className={styles["frame-25"]}>
                                <p className={styles["paragraph-2"]}>
                                    {parse(value.description[lang_])}
                                </p>
                                <div className={styles["frame-26"]}>
                                    <div className={styles["frame-27"]}>
                                        <div className={styles["heading-3"]} onClick={() => handleStepClick('left')}>{buttons.previous[lang_]}</div>
                                    </div>
                                    <div className={styles["frame-28"]}>
                                        <div className={styles["heading-3"]} onClick={() => handleStepClick('right')}>{buttons.next[lang_]}</div>
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