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
        <div className={styles["buyingProcessContainer"]}>
            <div className={styles["buyingProcessContainerTitleDesc"]}>
                <div className={styles["buyingProcessMainTitle"]}>
                {texts.mainTitle[lang_]}
                </div>
                <div className={styles["buyingProcessMainDesc"]}>
                {texts.mainDescription[lang_]}
                </div>
            </div>

            {steps.map(([key, value], index) => (
                <div className={styles["buyingProcessStepsContainer"]} ref={divRefs[index]} key={key}
                style={{ display: currentStep === null || currentStep === index ? 'flex' : 'none' }}>          
                        
                            <div className={styles["buyingProcessStepsTitle"]}>
                                <div className={styles["buyingProcessStepsNumber"]}>{value.stepNumber[lang_]}</div>
                                <div className={styles["buyingProcessStepsMainTitle"]}>
                                    {texts.mainTitle[lang_]}
                                </div>
                            </div>
                            <div className={styles["buyingProcessStepsContentContainer"]}>
                                    <div className={styles["buyingProcessStepsContent"]}>
                                            <div className={styles["buyingProcessStepsDesc"]}>
                                                {parse(value.description[lang_])}
                                            </div>

                                            <div className={styles["buyingProcessStepsButtons"]}>
                                                <div className={styles["buyingProcessStepsButtonPrevious"]} onClick={() => handleStepClick('left')}>
                                                    <div className={styles["buyingProcessStepsButtonText"]}>
                                                        {buttons.previous[lang_]}
                                                    </div>
                                                </div>
                                                <div className={styles["buyingProcessStepsButtonNext"]} onClick={() => handleStepClick('rifg')}>
                                                    <div className={styles["buyingProcessStepsButtonText"]}>
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