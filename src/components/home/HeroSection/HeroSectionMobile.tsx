import styles from './HeroSectionMobile.module.scss'
import HeroSectionImageMobile from './HeroSectionImageMobile'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import useSharedLogicHeroSection from './useSharedLogicHeroSection'
import Link from 'next/link'


const HeroSectionMobile = () => {
  
  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {headerButtons, setHeaderButtons, headerTexts, setHeaderTexts} = useSharedLogicHeroSection();
  
  return (
    <div className={styles["frame-48095810"]}>
    <div className={styles["frame-48095809"]}>
      <div className={styles["heading"]}>
        <span>
          <span className={styles["lp-mobile-heading-span"]}>
            {headerTexts.title1[lang_]}
          </span>
          {
            /*
            <span className={styles["lp-mobile-heading-span2"]}>réel</span>
            */
          }
          
        </span>
      </div>
    </div>
    <div className={styles["container-button"]}>
      <div className={styles["frame-button"]}>
        <div className={styles["button"]}>
          <Link href={headerButtons.JoinIRALink}>
            <div className={styles["rejoindre-ira"]}>
              {headerButtons.JoinIRA[lang_]}
            </div>
          </Link>  
        </div>
      </div>
      <div className={styles["frame-button2"]}>
        <div className={styles["button"]}>
          <Link href={headerButtons.StartIRALink}>
            <div className={styles["je-d-marre"]}>
              {headerButtons.StartIRA[lang_]}
            </div>  
           </Link>  
        </div>
      </div>
    </div>

    <HeroSectionImageMobile/>
  </div>

  )
}

export default HeroSectionMobile