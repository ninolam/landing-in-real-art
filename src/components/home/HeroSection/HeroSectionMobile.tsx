import styles from './HeroSectionMobile.module.scss'
import HeroSectionImage from './HeroSectionImageMobile'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import useSharedLogicHeroSection from './useSharedLogicHeroSection'


const HeroSectionMobile = () => {
  
  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {headerButtons, setHeaderButtons, headerTexts, setHeaderTexts} = useSharedLogicHeroSection();
  
  return (
    <div className={styles["lp-mobile__frame-48095810"]}>
    <div className={styles["lp-mobile__frame-48095809"]}>
      <div className={styles["lp-mobile__heading"]}>
        <span>
          <span className={styles["lp-mobile-heading-span"]}>
            {headerTexts.title1[lang_]}
          </span>
          {
            /*
            <span className={styles["lp-mobile-heading-span2"]}>réel</span>
            */
          }
          
        </span>{" "}
      </div>
    </div>
    <div className={styles["lp-mobile__container-button"]}>
      <div className={styles["lp-mobile__frame-button"]}>
        <div className={styles["lp-mobile__button"]}>
          <div className={styles["lp-mobile__rejoindre-ira"]}>
            {headerButtons.JoinIRA[lang_]}
          </div>
        </div>
      </div>
      <div className={styles["lp-mobile__frame-button2"]}>
        <div className={styles["lp-mobile__button"]}>
          <div className={styles["lp-mobile__je-d-marre"]}>
            {headerButtons.StartIRA[lang_]}
          </div>
        </div>
      </div>
    </div>

    <HeroSectionImage/>
  </div>

  )
}

export default HeroSectionMobile