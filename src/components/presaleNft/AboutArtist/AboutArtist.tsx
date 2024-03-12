"use client"
import Link from 'next/link'
import styles from './AboutArtist.module.scss'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import useSharedLogicAboutArtistNft from './useSharedLogicAboutArtistNft'

const AboutArtist = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {texts, setTexts, buttons, setButtons} = useSharedLogicAboutArtistNft()

    return (
        
        <div className={styles["about"]}>
            <div className={styles["aboutArtist"]}>{texts.mainTitle[lang_]}</div>
            
            <div className={styles["aboutContent"]}>
                <div className={styles["aboutImgContainer"]}>
                    
                </div>
                <div className={styles["aboutContentRight"]}>
                    <div className={styles["aboutContentRightTitle"]}>
                        <div className={styles[""]}>
                            {texts.secondaryTitle[lang_]}
                        </div>
                        <div className={styles["aboutContentRightDesc"]}>
                            {texts.description[lang_]}
                        </div>
                    </div>
                    
                    
                    <div className={styles["showMoreButtonContainer"]}>
                        <Link href="#collection" className={styles["showMoreButton"]}>{buttons.discoverCollection[lang_]}</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutArtist