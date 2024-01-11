"use client"
import styles from './Faq.module.scss'
import { useRef, useState } from 'react'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types';
import Link from 'next/link';
import useSharedLogicFaq from './useSharedLogicFaq';

const Faq = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const {faqButtons, setFaqButtons, faqTexts, setFaqTexts, useQuestionVisibility} = useSharedLogicFaq()
  
    const imagePlus1Ref = useRef(null);
    const imagePlus2Ref = useRef(null);
    const imagePlus3Ref = useRef(null);
    
    const Question1 = () => {
      const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png")
      return (
        <>
           <div className={styles.questionBlock}>
            <div className={styles.question}>
              {faqTexts.question1[lang_]}
            </div>
            <div onClick={toggleVisibility}>
              <img ref={imagePlus1Ref} className={styles.plus} alt="plus" src={imageSrc} />
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
          <div className={styles.questionBlock}>
            <div className={styles.question}>{faqTexts.question2[lang_]}</div>        
            <div onClick={toggleVisibility}>
              <img ref={imagePlus2Ref} className={styles.plus} alt="plus" src={imageSrc} />
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
          <div className={styles.questionBlock}>
            <div className={styles.question}>{faqTexts.question3[lang_]}</div>  
            <div onClick={toggleVisibility}>
              <img ref={imagePlus3Ref} className={styles.plus} alt="plus" src={imageSrc} />
            </div>
          </div>          
          {isVisible && (
            <div className={styles.answer}>
              {faqTexts.answer3[lang_]}
            </div>
          )}
        </>
      );
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