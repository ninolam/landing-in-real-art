"use client"
import styles from './AboutArtist.module.scss'

const AboutArtist = () => {
  return (
    
    <div className={styles["about"]}>
        <div className={styles["aboutArtist"]}>About Leloluce</div>
        
        <div className={styles["aboutContent"]}>
            <div className={styles["aboutImgContainer"]}>
                
            </div>
            <div className={styles["aboutContentRight"]}>
                <div className={styles["aboutContentRightTitle"]}>
                    <div className={styles[""]}>
                        Get Premium artwork and NFT
                    </div>
                    <div className={styles["aboutContentRightDesc"]}>
                        Présentation de Leloluce et de sa collection exclusive INREALART
                    </div>
                </div>
                
                
                <div className={styles["showMoreButtonContainer"]}>
                    <div className={styles["showMoreButton"]}>Show more</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default AboutArtist