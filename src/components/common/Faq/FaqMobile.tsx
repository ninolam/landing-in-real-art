import Link from "next/link"
import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import styles from "./FaqMobile.module.scss"
import stylesFaq from "./Faq.module.scss"
import classNames from 'classnames'
import useSharedLogicFaq from "./useSharedLogicFaq"
import { useRef } from "react"
import Question from "./Question"


export interface IFaqProps {
  className?: string
}

const FaqMobile = ({ className, ...props }: IFaqProps): JSX.Element => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {faqButtons, faqTexts} = useSharedLogicFaq()
  
  const Question1 = () => {
    const imagePlus1Ref = useRef(null);
    return (
        <Question question={faqTexts.question1[lang_]} answer={faqTexts.answer1[lang_]} imagePlusRef={imagePlus1Ref}/>
    )
  }

  const Question2 = () => {
    const imagePlus2Ref = useRef(null)
    return (
        <Question question={faqTexts.question2[lang_]} answer={faqTexts.answer2[lang_]} imagePlusRef={imagePlus2Ref}/>
    )
  }

  const Question3 = () => {
    const imagePlus3Ref = useRef(null)
    return (
        <Question question={faqTexts.question3[lang_]} answer={faqTexts.answer3[lang_]} imagePlusRef={imagePlus3Ref}/>
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
