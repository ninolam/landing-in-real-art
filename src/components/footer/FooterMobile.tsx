"use client"
import Link from 'next/link'
import styles from './FooterMobile.module.css'
import { IconFacebook } from './IconFacebook/IconFacebook'
import IconInstagram from './IconInstagram/IconInstagram'
import IconIraMobile from './IconIra/IconIraMobile'
import IconLinkedIn from './IconLinkedIn/IconLinkedIn'
import { IconTwitter } from './IconTwitter/IconTwitter'
import useSharedLogicFooter from './useSharedLogicFooter'
import { useAppContext } from '../../context'
import { Lang } from '../../types/types'


const FooterMobile = () => {

  //Get the language of the global context
  const {lang } = useAppContext()
  const lang_ = lang as Lang
  
  const {
    contactTitle, setContactTitle, email, setEmail, phone, setPhone, address, setAddress, twitterLogo, setTwitterLogo, 
    linkedInLogo, setLinkedInLogo, instagramLogo, setInstagramLogo, twitterUrl, setTwitterUrl, linkedInUrl, setLinkedInUrl,
    instagramUrl, setInstagramUrl, leftBlockText, setLeftBlockText,
    footerBlock1, setFooterBlock1,
    footerBlock2, setFooterBlock2
  } = useSharedLogicFooter()

  return (
    <div className={styles["lp-mobile__footer"]}>
    <div className={styles["lp-mobile__menu-container"]}>
      <div className={styles["lp-mobile__frame-3353"]}>
        <IconIraMobile/>
      </div>
      <div className={styles["lp-mobile__frame-48095803"]}>
        <div className={styles["lp-mobile__link-menu"]}>
        {
            footerBlock1.lines.map(
                (line, index) => (
                    <div key={index} className={styles.footerBlockLineMobile}>
                        <Link className={styles.footerLink} href={line.url}>
                            {line.text[lang_]}
                        </Link>    
                    </div>            
                )
            )
        }
        </div>

        <div className={styles["lp-mobile__link-menu"]}>
          {
              footerBlock2.lines.map(
                  (line, index) => (
                      <div key={index} className={styles.footerBlockLineMobile}>
                          <Link className={styles.footerLink} href={line.url}>
                              {line.text[lang_]}
                          </Link>    
                      </div>            
                  )
              )
          }
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

      <Link href={linkedInUrl}>
        <IconLinkedIn/>
      </Link>  
      {
        /*
        <div className={styles["lp-mobile__frame-3202"]}>
          <IconFacebook
            className={styles["lp-mobile__icon-facebook-instance"]}
          />
        </div>
        */
      }
      <Link href={instagramUrl}>
        <IconInstagram/>
      </Link>    

      <Link href={twitterUrl}>
        <div className={styles["lp-mobile__frame-3203"]}>
          <IconTwitter
            className={styles["lp-mobile__icon-twitter-instance"]}
          />
        </div>
      </Link>

    </div>
  </div>
  )
}

export default FooterMobile