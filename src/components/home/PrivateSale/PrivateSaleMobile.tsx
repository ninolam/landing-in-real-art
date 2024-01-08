"use client"
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import styles from './PrivateSaleMobile.module.scss'
import useSharedLogicPrivateSale from './useSharedLogicPrivateSale'
import parse from 'html-react-parser';

const PrivateSaleMobile = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
  
    const {psTexts, setPsTexts} = useSharedLogicPrivateSale()
  
  return (
    <div id="privateSale" className={styles["frame-48095806"]}>
    {/*<img className={styles["unsplash-a-ug-tvv-qx-dhg"]} src="img/privateSale.png"/>*/}
    <div className={styles["frame-36598"]}>
      <div className={styles["newsletter"]}>{psTexts.title[lang_]}</div>
      <div className={styles["newsletter-description"]}>{parse(psTexts.description[lang_])}</div>
      <div className={styles["frame-48095805"]}>
        <div className={styles["group-159"]}>
          <div className={styles["frame-48095804"]}>
            <div className={styles["envoyez-votre-mail"]}>
            {psTexts.email_placeholder[lang_]}
            </div>
          </div>
        </div>
        <div className={styles["group-36616"]}>
          <div className={styles["rectangle-97"]}></div>
          <svg className={styles["material-symbols-arrow-insert"]} width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_851_41484)">
              <path
                d="M10.3053 18.5711L24.1158 18.5711L17.9298 12.3851L19.3684 10.9465L28 19.5781L19.3684 28.2097L17.9298 26.7711L24.1158 20.5851L10.3053 20.5851V18.5711Z"
                fill="#7472FF"
              />
              <path
                d="M10.3053 18.5711L24.1158 18.5711L17.9298 12.3851L19.3684 10.9465L28 19.5781L19.3684 28.2097L17.9298 26.7711L24.1158 20.5851L10.3053 20.5851V18.5711Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_851_41484">
                <rect
                  x="37.1875"
                  y="18.7812"
                  width="26.2222"
                  height="26.2222"
                  rx="13.1111"
                  transform="rotate(135 37.1875 18.7812)"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>

  )
}

export default PrivateSaleMobile