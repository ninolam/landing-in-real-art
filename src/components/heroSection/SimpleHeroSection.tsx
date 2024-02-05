"use client"
import { useState } from 'react'
import { AboutTexts, Lang, defaultLangObject } from '../../types/types'
import styles from './SimpleHeroSection.module.scss'
import { useAppContext } from '../../context'
import useSharedLogicAboutPage from '../aboutPage/useSharedLogicAboutPage'

export interface SimpleHeroSectionProps {
    mainTitle?: string
}


const SimpleHeroSection = ({mainTitle, ...props}: SimpleHeroSectionProps) => { 

    return (
      <div className={styles["section-hero"]} style={{backgroundImage: 'url(/img/faq_section_hero.jpeg)'}}>
      <div className={styles["section-hero__wrapper-text"]}>
        <div className={styles["section-hero__subtitle"]}>
          <div className={styles["section-hero__un-nouveau-march"]}>
            {mainTitle}
          </div>
        </div>
      </div>
    </div>


     
    )

}

export default SimpleHeroSection