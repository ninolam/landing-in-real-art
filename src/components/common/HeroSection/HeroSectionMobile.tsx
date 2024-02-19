import styles from './HeroSectionMobile.module.scss'
import HeroSectionImageMobile from './HeroSectionImageMobile'
import { useAppContext } from '../../../context'
import { HeaderButtons, HeaderTexts, Lang } from '../../../types/types'
import useSharedLogicHeroSection from '../../home/HeroSection/useSharedLogicHeroSection'
import Link from 'next/link'

export interface HeroSectionMobileProps {
  headerTexts: HeaderTexts
  headerButtons: HeaderButtons
  onlyFirstButton: boolean
}


const HeroSectionMobile = ({headerTexts, headerButtons, onlyFirstButton, ...props}: HeroSectionMobileProps) => {
  
  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  return (
    <div className={styles["frame-48095810"]}>
    <div className={styles["frame-48095809"]}>
      <div className={styles["heading"]}>
        <span>
          <span className={styles["heading-span"]}>
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
          <Link href={headerButtons.button1Link}>
            <div className={styles["rejoindre-ira"]}>
              {headerButtons.button1[lang_]}
            </div>
          </Link>  
        </div>
      </div>
      {
        onlyFirstButton === false &&   
          (
            <div className={styles["frame-button2"]}>
              <div className={styles["button"]}>
                <Link href={headerButtons.button2Link}>
                  <div className={styles["je-d-marre"]}>
                    {headerButtons.button2[lang_]}
                  </div>  
                </Link>  
              </div>
            </div>
          )
      }
      
    </div>

    <HeroSectionImageMobile/>
  </div>

  )
}

export default HeroSectionMobile