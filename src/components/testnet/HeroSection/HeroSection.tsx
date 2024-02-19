import React from 'react'
import ImageHeroSection from './ImageHeroSection'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    
    <div className={styles["heroSectionTestnetContainer"]}>
        <ImageHeroSection/>

        <div className={styles["heroSectionTestnetTexts"]}>
          <div className={styles["buttonJoinTestnetContainer"]}>
            <div className={styles["buttonJoinTestnet"]}>
              <div className={styles["buttonJoinTestnetInner"]}>
                Rejoindre le TestNet
              </div>
            </div>
          </div>
          <div className={styles["heroSectionTestnetTextsBottom"]}>
            <div className={styles["frame-48095766__heading"]}>
              <span>
                <span className={styles["heading-span"]}>
                  Whitelist
                  <br />
                </span>
                <span className={styles["heading-span2"]}>TestNet</span>
              </span>
            </div>
            <div className={styles["heroSectionTestnetTextsBottomRight"]}>
              Faites partie de l’expérience qui redéfinira le monde de l’art .
            </div>
          </div>
        </div>
  </div>

  )
}

export default HeroSection