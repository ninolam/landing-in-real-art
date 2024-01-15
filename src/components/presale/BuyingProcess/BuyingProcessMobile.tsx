import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import styles from "./BuyingProcessMobile.module.scss"
import useSharedLogicBuyingProcess from "./useSharedLogicBuyingProcess"
import parse from 'html-react-parser'

const BuyingProcessMobile = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang

    const { currentStep, setCurrentStep, steps, setSteps, divRefs, buttons, setButtons, texts, setTexts, handleStepClick } = useSharedLogicBuyingProcess()

        
    return (
        <div className={styles["frame-48095817"]}>
        <div className={styles["frame-48095817__frame-3349"]}>
            <div className={styles["buyingProcessMainTitle"]}>
            {texts.mainTitle[lang_]}
            </div>
            <div className={styles["buyingProcessMainDesc"]}>
            {texts.mainDescription[lang_]}
            </div>
        </div>

        {steps.map(([key, value], index) => (
            <div className={styles["frame-48095817__frame-48095816"]} ref={divRefs[index]} key={key}
            style={{ display: currentStep === null || currentStep === index ? 'flex' : 'none' }}>          
                    
                        <div className={styles["frame-48095817__frame-48095791"]}>
                            <div className={styles["frame-48095817__etape-01"]}>{value.stepNumber[lang_]}</div>
                            <div className={styles["frame-48095817__cr-ation-d-un-contrat-intelligent-pour-la-pr-vente"]}>
                                {texts.mainTitle[lang_]}
                            </div>
                        </div>
                        <div className={styles["frame-48095817__frame-48095796"]}>
                                <div className={styles["frame-48095817__frame-48095795"]}>
                                        <div className={styles["frame-48095817__paragraph"]}>
                                            {parse(value.description[lang_])}
                                        </div>

                                        <div className={styles["frame-48095817__frame-48095794"]}>
                                            <div className={styles["frame-48095817__frame-48095793"]}>
                                                <div className={styles["frame-48095817__heading"]} onClick={() => handleStepClick('left')}>
                                                    {buttons.previous[lang_]}
                                                </div>
                                            </div>
                                            <div className={styles["frame-48095817__frame-3"]}>
                                                <div className={styles["frame-48095817__heading"]} onClick={() => handleStepClick('rifg')}>
                                                    {buttons.next[lang_]}
                                                </div>
                                            </div>
                                        </div>


                                </div>
                        </div>
            </div>
        ))}
    </div>
  )
}


export default BuyingProcessMobile