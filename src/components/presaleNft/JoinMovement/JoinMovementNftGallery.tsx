"use client"
import styles from './JoinMovement.module.scss'

const JoinMovementNftGallery = () => {
  return (
        <div className={styles["joinMovementNftGallery"]}>
            <div className={styles["joinMovementNftGalleryColumn1"]}>
                <img className={styles["joinMovementNftGalleryItem11"]} src="img/presaleNft/heroSection/heroLeloluce1.jpg" />
                <img className={styles["joinMovementNftGalleryItem13"]} src="img/presaleNft/heroSection/heroLeloluce2.jpg" />
                <img className={styles["joinMovementNftGalleryItem12"]} src="img/presaleNft/heroSection/heroLeloluce3.jpg" />
            </div>
            
            <div className={styles["joinMovementNftGalleryColumn2"]}>
                <img className={styles["joinMovementNftGalleryItem21"]} src="img/presaleNft/heroSection/heroLeloluce4.jpg" />
                <img className={styles["joinMovementNftGalleryItem23"]} src="img/presaleNft/heroSection/heroLeloluce5.jpg" />
                <img className={styles["joinMovementNftGalleryItem22"]} src="img/presaleNft/heroSection/heroLeloluce6.jpg" />
            </div>
            
            <div className={styles["joinMovementNftGalleryColumn3"]}>
                <img className={styles["joinMovementNftGalleryItem31"]} src="img/presaleNft/heroSection/heroLeloluce7.jpg" />
            </div>
            
        </div>
  )
}

export default JoinMovementNftGallery