"use client"

import styles from './JoinMovementMobile.module.scss'
import { VuesaxLinearStatusUpMobile } from './VuesaxLinearStatusUpMobile/VuesaxLinearStatusUpMobile'
import { useAppContext } from '../../../context'
import parse from 'html-react-parser'
import { Lang } from '../../../types/types'
import Link from 'next/link'
import useSharedLogicJoinMovement from './useSharedLogicJoinMovement'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdRealEstateAgent } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";


const JoinMovementMobile = () => {

  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const {joinTrendButtons, setJoinTrendButtons, joinTrendtexts, setJoinTrendTexts} = useSharedLogicJoinMovement()

  return (
    <div className={styles["lp-mobile__frame-48095739"]}>
    <div className={styles["lp-mobile__title"]}>
      <div className={styles["lp-mobile__rejoindre-le-mouvement"]}>
        {parse(joinTrendtexts.title[lang_])}
      </div>
    </div>
    <div className={styles["lp-mobile__wrraper-card"]}>
      <div className={styles["lp-mobile__frame-48095730"]}>
        <div className={styles["lp-mobile__frame-76"]}>
          <div className={styles["lp-mobile__rectangle-52"]}></div>
          <TfiGallery className={styles["lp-mobile__vuesax-linear-status-up-instance"]}
          />
        </div>
        <div className={styles["lp-mobile__frame-7"]}>
          <div className={styles["lp-mobile__heading2"]}>{parse(joinTrendtexts.artgallery_title[lang_])}</div>
          <div className={styles["lp-mobile__paragraph"]}>{parse(joinTrendtexts.artgallery_description[lang_])}</div>
        </div>
      </div>
      <div className={styles["lp-mobile__frame-48095731"]}>
        <div className={styles["lp-mobile__frame-76"]}>
          <div className={styles["lp-mobile__rectangle-52"]}></div>
          <MdRealEstateAgent className={styles["lp-mobile__vuesax-linear-status-up-instance"]}/>
        </div>
        <div className={styles["lp-mobile__frame-7"]}>
          <div className={styles["lp-mobile__heading4"]}>{parse(joinTrendtexts.aas_title[lang_])}</div>
          <div className={styles["lp-mobile__paragraph"]}>{parse(joinTrendtexts.aas_description[lang_])}</div>
        </div>
      </div>
      <div className={styles["lp-mobile__frame-48095732"]}>
        <div className={styles["lp-mobile__frame-76"]}>
          <div className={styles["lp-mobile__rectangle-52"]}></div>
          <HiMiniShoppingBag className={styles["lp-mobile__vuesax-linear-status-up-instance"]}/>
        </div>
        <div className={styles["lp-mobile__frame-72"]}>
          <div className={styles["lp-mobile__heading6"]}>{joinTrendtexts.marketplace_title[lang_]}</div>
          <div className={styles["lp-mobile__paragraph"]}>{parse(joinTrendtexts.marketplace_description[lang_])}</div>
        </div>
      </div>
      <div className={styles["lp-mobile__frame-3"]}>
          <Link className={styles.joinMovementLink} href={joinTrendButtons.marketplace_join_link}>  
            <div className={styles["lp-mobile__heading7"]}>{joinTrendButtons.marketplace_join[lang_]}</div>
          </Link>  
        </div>
    </div>
  </div>

  )
}

export default JoinMovementMobile