"use client"
import styles from './HeroSection.module.scss'
import { useAppContext } from "../../../context";
import { Lang } from "../../../types/types";
import ImageHeroSection from './ImageHeroSection';


const HeroSection = () => { 

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    return (
      <div className={styles.heroSection}>
        <div className={styles.heroSectionWrapperTopContain}>
          <div className={styles.heroSectionTopContain}>
            <div className={styles.heroSectionTitle}>
              <div className={styles.heroSectionHeading}>
                <span>
                  <span className={styles.heroSectionHeadingSpan}>
                    FAQ
                    <br />
                  </span>
                  
                </span>
              </div>
            </div>
            
          </div>
          <ImageHeroSection/>
        </div>
        
      </div>

     
    )

}

export default HeroSection