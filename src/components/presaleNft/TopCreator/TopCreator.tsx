import Link from 'next/link'
import styles from './TopCreator.module.scss'
import { useAppContext } from '../../../context'
import useSharedLogicTopCreator from './useSharedLogicTopCreator'
import { Lang } from '../../../types/types'
import parse from 'html-react-parser';

const TopCreator = () => {

        //Get the language of the global context
        const {lang } = useAppContext()
        const lang_ = lang as Lang
        
        const { buttons, setButtons, texts, setTexts, topCreators, setTopCreators } = useSharedLogicTopCreator()

        
  return (
    <div className={styles.topCreatorContainer}>
        <div className={styles.header}>
            <div className={styles.topCreatorTitle}>{texts?.mainTitle[lang_]}</div>
            <div className={styles.topCreatorDesc}>
                {parse(texts?.mainDescription[lang_])}
            </div>
            <div className={styles.category}>
                <div className={styles.categoryFrame}>
                    <div className={styles.categoryLeloluce}></div>
                </div>
            </div>
        </div>

        <div className={styles.topCreatorGallery}>
            {/* Creator 1*/}
            <div className={styles.card1}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator1Header.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src={topCreators.card1.urlPhoto} alt="" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>{topCreators?.card1.artistName}</h1>
                        <p className={styles.profileDescription}>{parse(topCreators?.card1.artistDescription[lang_])}</p>
                    </div>
                </div>
                <div className={styles.cardFooter1}>
                    <Link href="/presale" className={styles.moreInfo}>{buttons?.discoverRwa[lang_]}</Link>
                </div>
            </div>
            {/* Creator 2*/}
            <div className={styles.card2}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator2Header.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src={topCreators.card2.urlPhoto} alt="" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>{topCreators?.card2.artistName}</h1>
                        <p className={styles.profileDescription}>{parse(topCreators?.card2.artistDescription[lang_])}</p>
                    </div>
                </div>
                <div className={styles.cardFooter2}>
                    <Link href="/presale" className={styles.moreInfo}>{buttons?.discoverRwa[lang_]}</Link>
                </div>
            </div>
            {/* Creator 3*/}
            <div className={styles.card3}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator3Header.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src={topCreators.card3.urlPhoto} alt="John Wick" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>{topCreators?.card3?.artistName}</h1>
                        <p className={styles.profileDescription}>{parse(topCreators?.card3?.artistDescription[lang_])}</p>
                    </div>
                </div>
                <div className={styles.cardFooter3}>
                    <Link href="/presale" className={styles.moreInfo}>{buttons?.discoverRwa[lang_]}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCreator