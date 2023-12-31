import styles from './HeroSection.module.scss'
import HeroSectionImage from './HeroSectionImage'


const HeroSection = () => {
  return (
    <div className={styles["lp-mobile__frame-48095810"]}>
    <div className={styles["lp-mobile__frame-48095809"]}>
      <div className={styles["lp-mobile__heading"]}>
        <span>
          <span className={styles["lp-mobile-heading-span"]}>
            Rendre le web3{" "}
          </span>
          <span className={styles["lp-mobile-heading-span2"]}>réel</span>
        </span>{" "}
      </div>
    </div>
    <div className={styles["lp-mobile__container-button"]}>
      <div className={styles["lp-mobile__frame-button"]}>
        <div className={styles["lp-mobile__button"]}>
          <div className={styles["lp-mobile__rejoindre-ira"]}>
            Rejoindre IRA{" "}
          </div>
        </div>
      </div>
      <div className={styles["lp-mobile__frame-button2"]}>
        <div className={styles["lp-mobile__button"]}>
          <div className={styles["lp-mobile__je-d-marre"]}>
            Je démarre{" "}
          </div>
        </div>
      </div>
    </div>

    <HeroSectionImage/>
  </div>

  )
}

export default HeroSection