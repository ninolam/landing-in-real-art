"use client"
import { useEffect, useState } from "react"
import { useAppContext } from "../../../context"
import { Lang, PresaleDataButtons, PresaleDataTexts, defaultLangObject } from "../../../types/types"
import Link from "next/link"
import styles from './HeroSection.module.scss'
import useSharedLogicHeroSection from "./useSharedLogicHeroSection"

const HeroSection = () => {
    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang

    
    const {
        presaleButtons, setPresaleButtons, 
        presaleTexts, setPresaleTexts, 
        seeDropButton, setSeeDropButton, 
        seeDropButtonLink, setSeeDropButtonLink
    } = useSharedLogicHeroSection()

    return (
        <div className={styles["header-presale"]}>
        <div className={styles["frame-2"]}>
            <div className={styles["frame-3"]}>   
            <p className={styles["heading"]}>
                <span className={styles["text-wrapper"]}> {presaleTexts.title1[lang_]} </span>
                <span className={styles["presale-header-title2"]}>{presaleTexts.title2[lang_]}</span>
            </p>
            <img className={styles["rectangle"]} alt=""
                src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39772@2x.png"
            />
            </div>
            <div className={styles["frame-4"]}>
            <div className={styles["div-wrapper"]}>
                <p className={styles["p"]}>
                {presaleTexts.description[lang_]}
                </p>
            </div>
            <img className={styles["img"]} alt="" src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39773.svg"
            />
            <div className={styles["button"]}>
                <Link href={seeDropButtonLink}>
                    <div className={styles["text-wrapper-2"]}>{seeDropButton}</div>
                </Link>
            </div>
            </div>
        </div>
        <img className={styles["rectangle-2"]} alt=""
            src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39771.svg"
        />
    </div>

  )
}

export default HeroSection

