"use client"
import styles from './Faq.module.scss'
import { useRef, useState } from 'react'
import { useAppContext } from '../../../context'
import { FaqButtons, FaqTexts, Lang } from '../../../types/types';
import Link from 'next/link';
import useSharedLogicFaq from './useSharedLogicFaq';
import Question from './Question';

export interface FaqProps {
  faqTexts: FaqTexts<Record<Lang, string>>
  faqButtons: FaqButtons
}

const Faq = ({faqTexts, faqButtons, ...props}: FaqProps) => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const Question1 = () => {
      const imagePlus1Ref = useRef(null)
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
      <div className={styles.homeFaq}>
        <div className={styles.faqLeft}>
          <div className={styles.faq}>{faqTexts.faqTitle[lang_]}</div>
          <div
            className={styles.faqMainP}>
            {faqTexts.faqMain[lang_]}
            <br />
            <br />
          </div>
          <div className={styles.linkButton2}>
            <div className={styles.button2}>
              <Link href={faqButtons.readFaqLink}>
                <div className={styles.readTheFaq}>{faqButtons.readFaq[lang_]}</div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.faqRight}>
          <Question1/>
          <Question2/>
          <Question3/>
        </div>
      </div>

    )
}

export default Faq