"use client"
import VuesaxLinearStatusUp1 from "../../VuesaxLinearStatusUp1"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from "../../../context";
import { Lang, defaultLangObject } from "../../../types/types";
import { PresaleProsButtons, PresaleProsTexts } from "../../../types/presale.types";
import parse from 'html-react-parser';
import styles from './PresalePros.module.scss'

function PresalePros() {

    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const FIREBASE_PRESALE_PROS_COLLECTION = 'Presale_Pros'
    
    const defaultPresaleProsTexts = {
        mainTitle: defaultLangObject,
        mainDescription: defaultLangObject,
        buyArtWorkTitle: defaultLangObject,
        buyArtWorkDescription: defaultLangObject,
        exclusiveBenefitsTitle: defaultLangObject,
        exclusiveBenefitsDescription: defaultLangObject,
        bonusTitle: defaultLangObject,
        bonusDescription: defaultLangObject
    }

    const defaultPresaleProsButtons = {
        buyArtWork: defaultLangObject,
        buyArtWorkLink: '',
        exclusiveBenefits: defaultLangObject,
        exclusiveBenefitsLink: '',
        bonus: defaultLangObject,
        bonusLink: ''
    }

    const [presaleProsTexts, setPresaleProsTexts]     = useState<PresaleProsTexts>(defaultPresaleProsTexts);
    const [presaleProsButtons, setPresaleProsButtons] = useState<PresaleProsButtons>(defaultPresaleProsButtons);
    
    useEffect(() => {
        const fetchData = async () => {
          const collection_ = collection(db, FIREBASE_PRESALE_PROS_COLLECTION);
          const documents  = await getDocs(collection_);
          const data       = documents.docs.map(doc => doc.data());
          
          //Index 0 ===> presalePros Buttons
          setPresaleProsButtons(data[0] as PresaleProsButtons)
          
          //Index 1 ===> presalePros Pros Texts
          setPresaleProsTexts(data[1] as PresaleProsTexts)
          
      }  
      fetchData();
      }, [])

  return (
    <div className={styles["frame-13"]}>
    <div className={styles["frame-wrapper"]}>
        <div className={styles["frame-14"]}>
        <div className={styles["avantages-d-achats"]}>
            {parse(presaleProsTexts.mainTitle[lang_])}
        </div>
        <p className={styles["ne-louper-pas-la"]}>
            {parse(presaleProsTexts.mainDescription[lang_])}
        </p>
        </div>
    </div>
    <div className={styles["frame-15"]}>
        <div className={styles["frame-16"]}>
        <div className={styles["frame-17"]}>
            <div className={styles["rectangle-4"]} />
            <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
        </div>
        <div className={styles["frame-18"]}>
            <div className={styles["heading-2"]}>{parse(presaleProsTexts.buyArtWorkTitle[lang_])}</div>
            <p className={styles["paragraph"]}>{parse(presaleProsTexts.buyArtWorkDescription[lang_])}</p>
        </div>
        <div className={styles["heading-wrapper"]}>
            <Link href={presaleProsButtons.buyArtWorkLink}>
                <div className={styles["heading-3"]}>{presaleProsButtons.buyArtWork[lang_]}</div>
            </Link>
        </div>
        </div>
        <div className={styles["frame-19"]}>
        <div className={styles["frame-3"]}>
            <div className={styles["frame-16"]}>
            <div className={styles["frame-17"]}>
                <div className={styles["rectangle-4"]} />
                <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
            </div>
            <div className={styles["frame-18"]}>
                <div className={styles["heading-2"]}>{parse(presaleProsTexts.exclusiveBenefitsTitle[lang_])}</div>
                <p className={styles["paragraph"]}>{parse(presaleProsTexts.exclusiveBenefitsDescription[lang_])}</p>
            </div>
            <div className={styles["heading-wrapper"]}>
                <Link href={presaleProsButtons.exclusiveBenefitsLink}>
                    <div className={styles["heading-3"]}>{presaleProsButtons.exclusiveBenefits[lang_]}</div>
                </Link>    
            </div>
            </div>
        </div>
        </div>
        <div className={styles["frame-16"]}>
        <div className={styles["frame-17"]}>
            <div className={styles["rectangle-4"]} />
            <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
        </div>
        <div className={styles["frame-18"]}>
            <div className={styles["heading-2"]}>{parse(presaleProsTexts.bonusTitle[lang_])}</div>
            <p className={styles["paragraph"]}>{parse(presaleProsTexts.bonusDescription[lang_])}</p>
        </div>
        <div className={styles["heading-wrapper"]}>
            <Link href={presaleProsButtons.bonusLink}>
                <div className={styles["heading-3"]}>{presaleProsButtons.bonus[lang_]}</div>
            </Link>    
        </div>
        </div>
    </div>
    </div>

  )
}

export default PresalePros