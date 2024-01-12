import Link from "next/link";
import { useAppContext } from "../../../context";
import { Lang } from "../../../types/types";
import styles from "./HeroSectionMobile.module.scss";
import ImageHeroSectionMobile from "./ImageHeroSectionMobile";
import useSharedLogicHeroSection from "./useSharedLogicHeroSection";

export interface HeroSectionMobileProps {
  className?: string;
}

const HeroSectionMobile = ({
  className,
  ...props
}: HeroSectionMobileProps): JSX.Element => {

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
    <div className={styles["container"] + " " + className}>
      <div className={styles["title"]}>
        <div className={styles["container__heading"]}>
          <span>
            <span className={styles["heading-span"]}>
              {presaleTexts.title1[lang_]}
              <br />
            </span>
            <span className={styles["heading-span2"]}>{presaleTexts.title2[lang_]}</span>
          </span>
        </div>
        <img
          className={styles["container__rectangle-39772"]}
          src="img/eye-herosection-mobile.png"
        />
      </div>

        <div className={styles["containerImageHeroSectionMobile"]}>
            <ImageHeroSectionMobile/>
        </div>
      

      <div className={styles["container__container-button"]}>
        <div className={styles["container__button"]}>
            <Link href={seeDropButtonLink}>
                <div className={styles["container__voir-le-drop"]}>
                    {seeDropButton}
                </div>
            </Link>    
        </div>
      </div>

      
    </div>
  );
};

export default HeroSectionMobile;