"use client"
import styles from './HeroSection.module.scss'
import { useAppContext } from "../../../context";
import { Lang } from "../../../types/types";
import ImageHeroSection from './ImageHeroSection';
import { useState } from 'react';
import useSharedLogicFaqHeroSection from './useSharedLogicFaqHeroSection';


const HeroSection = () => { 

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const {faqHeroSection, setFaqHeroSection} = useSharedLogicFaqHeroSection()
    return (

      <div
      className={styles["section-hero"]}
      style={{
        background: "url(/img/faq_section_hero.jpeg) center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles["section-hero__wrapper-text"]}>
        <div className={styles["section-hero__subtitle"]}>
          <div className={styles["section-hero__un-nouveau-march"]}>
            {faqHeroSection.mainTitle[lang_]}
          </div>
        </div>
      </div>
    </div>


     
    )

}

export default HeroSection