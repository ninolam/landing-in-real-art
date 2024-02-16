import React from 'react'
import ImageHeroSection from './ImageHeroSection'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    
    <div className={styles["frame-48095766"]}>

      <ImageHeroSection/>

      <div className={styles["frame-48095766__frame-48095764"]}>
        <div className={styles["frame-48095766__frame-48095765"]}>
          <div className={styles["frame-48095766__button"]}>
            <div className={styles["frame-48095766__rejoindre-le-test-net"]}>
              Rejoindre le TestNet
            </div>
          </div>
        </div>
        <div className={styles["frame-48095766__frame-48095763"]}>
          <div className={styles["frame-48095766__heading"]}>
            <span>
              <span className={styles["heading-span"]}>
                Whitelist
                <br />
              </span>
              <span className={styles["heading-span2"]}>TestNet</span>
            </span>
          </div>
          <div className={styles["frame-48095766__faites-partie-de-l-exp-rience-qui-red-finira-le-monde-de-l-art"]}>
            Faites partie de l’expérience qui redéfinira le monde de l’art .
          </div>
        </div>
      </div>
  </div>

  )
}

export default HeroSection