import Link from 'next/link'
import styles from './TopCreator.module.scss'

const TopCreator = () => {
  return (
    <div className={styles.topCreatorContainer}>
        <div className={styles.header}>
            <div className={styles.topCreatorTitle}>Top Creator</div>
            <div className={styles.topCreatorDesc}>
                Profile of our artists <br/>available online
            </div>
            <div className={styles.category}>
                <div className={styles.categoryFrame}>
                    <div className={styles.categoryLeloluce}></div>
                </div>
            </div>
        </div>

        <div className={styles.topCreatorGallery}>
            {/* Creator 1*/}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator3.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src="img/presaleNft/photoArtist3.png" alt="John Wick" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>John Wick</h1>
                        <p className={styles.profileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className={styles.cardFooter}>
                    <Link href="/presale" className={styles.moreInfo}>More Info</Link>
                </div>
            </div>
            {/* Creator 2*/}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator3.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src="img/presaleNft/photoArtist3.png" alt="John Wick" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>John Wick</h1>
                        <p className={styles.profileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className={styles.cardFooter}>
                    <Link href="/presale" className={styles.moreInfo}>More Info</Link>
                </div>
            </div>
            {/* Creator 3*/}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <img src="img/presaleNft/creator3.png" alt="Pattern Background" className={styles.cardBackground}/>
                    <div className={styles.cardProfile}>
                        <img src="img/presaleNft/photoArtist3.png" alt="John Wick" className={styles.profileImage}/>
                        <h1 className={styles.profileName}>John Wick</h1>
                        <p className={styles.profileDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className={styles.cardFooter}>
                    <Link href="/presale" className={styles.moreInfo}>More Info</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCreator