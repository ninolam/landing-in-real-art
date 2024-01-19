"use client"
import { ArtistMemberProps } from '../../../types/types'
import styles from './CarouselArtists.module.scss'

const Artist: React.FC<ArtistMemberProps> = ( {name, image, desc} ) => {
  return (
    <>
        <div className={styles["frame-artist-carousel"]}>
          <img id="photo-member" className={styles["photo-artist"]} alt="" src={image} />
        </div>
        <div className={styles["frame-artist-description"]}>
            <div className={styles["wrapper-text"]}>
                <div className={styles["def"]}>
                    <div id="artistDesc" className={styles["artistDesc"]}>
                        {desc}
                    </div>
                </div>
                <div className={styles["frameArtistName"]}>
                    <div id="member-name" className={styles["artistName"]}>{name}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Artist