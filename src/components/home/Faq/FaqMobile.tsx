import Link from "next/link"
import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import styles from "./FaqMobile.module.scss"
import stylesFaq from "./Faq.module.scss"
import classNames from 'classnames'
import useSharedLogicFaq from "./useSharedLogicFaq"
import { useRef } from "react"


export interface IFaqProps {
  className?: string
}

const FaqMobile = ({ className, ...props }: IFaqProps): JSX.Element => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {faqButtons, setFaqButtons, faqTexts, setFaqTexts, useQuestionVisibility} = useSharedLogicFaq()
  
  const imagePlus1Ref = useRef(null)
  const imagePlus2Ref = useRef(null)
  const imagePlus3Ref = useRef(null)

  const Question1 = () => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png")
    return (
      <>
        <div className={classNames(styles["mobile-instance-1"], styles["mobile-instance-2"])}>
          <div className={styles["faq-mobile-block"]}>
            <div className={styles["faq-mobile-question"]}>
              <div className={styles["faq-mobile-question-h3"]}>
                {faqTexts.question1[lang_]}
              </div>
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus1Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
            
          </div>
        </div>
        {isVisible && (
            <div className={styles.answer}>
              {faqTexts.answer1[lang_]}
            </div>
          )}
      </>  
    )
  }

  const Question2 = () => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png")
    return (
      <>
        <div className={classNames(styles["mobile-instance-1"], styles["mobile-instance-2"])}>
          <div className={styles["faq-mobile-block"]}>
            <div className={styles["faq-mobile-question"]}>
              <div className={styles["faq-mobile-question-h3"]}>
                {faqTexts.question2[lang_]}
              </div>
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus2Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
            
          </div>
        </div>
        {isVisible && (
            <div className={styles.answer}>
              {faqTexts.answer2[lang_]}
            </div>
          )}
      </>  
    )
  }

  const Question3 = () => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png")
    return (
      <>
        <div className={classNames(styles["mobile-instance-1"], styles["mobile-instance-2"])}>
          <div className={styles["faq-mobile-block"]}>
            <div className={styles["faq-mobile-question"]}>
              <div className={styles["faq-mobile-question-h3"]}>
                {faqTexts.question3[lang_]}
              </div>
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus3Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
            
          </div>
        </div>
        {isVisible && (
            <div className={styles.answer}>
              {faqTexts.answer3[lang_]}
            </div>
          )}
      </>  
    )
  }

  return (
    <div className={styles["faq"] + " " + className}>
      <div className={styles["faq-mobile-title"]}>
        {faqTexts.faqTitle[lang_]}
      </div>
      <div className={styles["faq-contain"]}>
        <Question1/>
        <Question2/>
        <Question3/>
      </div>
      <div className={stylesFaq.linkButton2} style={{left: '130px'}}>
        <div className={stylesFaq.button2}>
          <Link href={faqButtons.readFaqLink}>
            <div className={stylesFaq.readTheFaq}>{faqButtons.readFaq[lang_]}</div>
          </Link>
        </div>
      </div>

    </div>
  )
}


export default FaqMobile
