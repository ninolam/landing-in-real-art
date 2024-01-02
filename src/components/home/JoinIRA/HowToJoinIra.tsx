"use client"
import styles from './HowToJoinIra.module.scss'
import { useEffect, useState } from "react"
import { useAppContext } from "../../../context"
import { JoinIraDataButton, JoinIraDataText, Lang, defaultLangObject } from "../../../types/types"
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import Link from 'next/link';
import useSharedLogicHowToJoinIra from './useSharedLogicHowToJoinIra'


const HowToJoinIra = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const {joinIraDataText, setJoinIraDataText, joinIraDataButton, setJoinIraDataButton} = useSharedLogicHowToJoinIra()

    return (
        <div className={styles.feature}>
        <div className={styles.frame36597}>
          <div className={styles.frame48095734}>
            <img className={styles.rectangle62} src="/img/rectangle-62.svg" />
          </div>
          <div className={styles.frame48095735}>
            <img className={styles.rectangle210} src="/img/rectangle-210.svg" />
          </div>
        </div>
        <div className={styles.frame48095733}>
          <div className={styles.frame303}>
            <div className={styles.comment}>{joinIraDataText.headerText[lang_]}</div>
            <div className={styles.iraAmbition}>
              {joinIraDataText.text1[lang_]}
              <br />
              <br />
              {joinIraDataText.text2[lang_]}
            </div>
            <div className={styles.linkButton}>
              <div className={styles.button2}>
                <Link className={styles.joinIRALink} href={joinIraDataButton.JoinIRALink}>
                  <div className={styles.rejoindreIra2}>{joinIraDataButton.JoinIRA[lang_]}</div>
                </Link>  
              </div>
              <div className={styles.button3}>
                <Link className={styles.startIRALink} href={joinIraDataButton.StartIRALink}>
                  <div className={styles.jeDemarre2}>{joinIraDataButton.StartIRA[lang_]}</div>
                </Link>  
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default HowToJoinIra