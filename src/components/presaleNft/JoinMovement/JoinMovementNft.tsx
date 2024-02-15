"use client"
import styles from './JoinMovement.module.scss'

const JoinMovementNft = () => {
  return (
    <div className={styles["joinMovementNft"]}>
        <div className={styles["joinMovementNftHeroleft"]}>
            <div className={styles["joinMovementNftHeroleftTitle"]}>Rejoindre le mouvement</div>

            <div className={styles["joinMovementNftDescription"]}>
                Inreal Art offers buyers the possibility to acquire an NFT work linked to a
                real asset that is nothing other than the physical work. The buyer has the
                choice of sales typology and can resell it on our marketplace.
            </div>

            <div className={styles["joinMovementNftButtonsContainer"]}>
                <div className={styles["joinMovementNftButtons"]}>
                    <div className={styles["joinMovementNft__frame-1"]}>
                        <div className={styles["joinMovementNft__explore-now"]}>Explore Now</div>
                    </div>
                    <div className={styles["joinMovementNft__frame-2"]}>
                        <div className={styles["joinMovementNft__buy-nft"]}>Buy NFT</div>
                    </div>
                </div>
            </div>


        </div>
        <div className={styles["joinMovementNftGallery"]}>
            <div className={styles["joinMovementNftGalleryColumn1"]}>
                <img className={styles["joinMovementNftGalleryItem11"]} src="img/presaleNft/heroImage15.png" />
                <img className={styles["joinMovementNftGalleryItem13"]} src="img/presaleNft/heroImage20.png" />
                <img className={styles["joinMovementNftGalleryItem12"]} src="img/presaleNft/heroImage18.png" />
            </div>
            
            <div className={styles["joinMovementNftGalleryColumn2"]}>
                <img className={styles["joinMovementNftGalleryItem21"]} src="img/presaleNft/heroImage17.png" />
                <img className={styles["joinMovementNftGalleryItem23"]} src="img/presaleNft/heroImage19.png" />
                <img className={styles["joinMovementNftGalleryItem22"]} src="img/presaleNft/heroImage16.png" />
            </div>
            
            <div className={styles["joinMovementNftGalleryColumn3"]}>
                <img className={styles["joinMovementNftGalleryItem31"]} src="img/presaleNft/heroImage21.png" />
            </div>
            
        </div>
    </div>

  )
}

export default JoinMovementNft