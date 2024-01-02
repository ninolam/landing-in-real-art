"use client"
import Link from 'next/link'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import styles from './HowToJoinIraMobile.module.scss'
import useSharedLogicHowToJoinIra from './useSharedLogicHowToJoinIra'

const HowToJoinIraMobile = () => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {joinIraDataText, setJoinIraDataText, joinIraDataButton, setJoinIraDataButton} = useSharedLogicHowToJoinIra()
  
  return (
    <div className={styles["lp-mobile__feature"]}>
    <img
      className={styles["lp-mobile__rectangle-210"]}
      src="img/rectangle-2100.png"
    />
    <div className={styles["lp-mobile__frame-303"]}>
      <div className={styles["lp-mobile__comment"]}>Comment ? </div>
      <div className={styles["lp-mobile-join-ira-main-description"]}>
        {joinIraDataText.text1[lang_]}
      </div>
      <div className={styles["lp-mobile__link-button"]}>
        <div className={styles["lp-mobile__button2"]}>
          <Link className={styles.joinIRALink} href={joinIraDataButton.JoinIRALink}>
            <div className={styles["lp-mobile__rejoindre-ira2"]}>
              {joinIraDataButton.JoinIRA[lang_]}
            </div>
         </Link>   
        </div>
        <div className={styles["lp-mobile__button3"]}>
          <Link className={styles.startIRALink} href={joinIraDataButton.StartIRALink}>
            <div className={styles["lp-mobile__je-d-marre2"]}>
              {joinIraDataButton.StartIRA[lang_]}
            </div>
          </Link>     
        </div>
      </div>
    </div>
  </div>
  )
}

export default HowToJoinIraMobile