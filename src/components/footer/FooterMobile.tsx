"use client"
import styles from './FooterMobile.module.css'
import { IconFacebook } from './IconFacebook/IconFacebook'
import IconInstagram from './IconInstagram/IconInstagram'
import IconIraMobile from './IconIra/IconIraMobile'
import IconLinkedIn from './IconLinkedIn/IconLinkedIn'
import { IconTwitter } from './IconTwitter/IconTwitter'


const FooterMobile = () => {
  return (
    <div className={styles["lp-mobile__footer"]}>
    <div className={styles["lp-mobile__menu-container"]}>
      <div className={styles["lp-mobile__frame-3353"]}>
        <IconIraMobile/>
      </div>
      <div className={styles["lp-mobile__frame-48095803"]}>
        <div className={styles["lp-mobile__link-menu"]}>
          <div className={styles["footerBlockLineMobile"]}>Accueil </div>
          <div className={styles["footerBlockLineMobile"]}>A propos </div>
          <div className={styles["footerBlockLineMobile"]}>Marketplace</div>
          <div className={styles["footerBlockLineMobile"]}>FAQ </div>
        </div>

        <div className={styles["lp-mobile__link-menu"]}>
          <div className={styles["footerBlockLineMobile"]}>Equipes </div>
          <div className={styles["footerBlockLineMobile"]}>Partenaire</div>
          <div className={styles["footerBlockLineMobile"]}>CGU </div>
        </div>
      </div>
    </div>

    <div className={styles["lp-mobile__newsletter2"]}>
      <div className={styles["lp-mobile__h-3"]}>Restez informée </div>
      <div className={styles["lp-mobile__search-bar"]}>
        <div className={styles["lp-mobile__frame-55"]}>
          <div className={styles["lp-mobile__adresse-mail"]}>
            Adresse mail{" "}
          </div>
          
        </div>
      </div>
    </div>
    <div className={styles["lp-mobile__link-social"]}>

      <IconLinkedIn/>
      <div className={styles["lp-mobile__frame-3202"]}>
        <IconFacebook
          className={styles["lp-mobile__icon-facebook-instance"]}
        />
      </div>

      <IconInstagram/>

      <div className={styles["lp-mobile__frame-3203"]}>
        <IconTwitter
          className={styles["lp-mobile__icon-twitter-instance"]}
        />
      </div>
    </div>
  </div>
  )
}

export default FooterMobile