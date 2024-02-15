"use client"
import styles from './GetReadyToBuy.module.scss'

const GetReadyToBuy = () => {
  return (
    <div className={styles["getReady"]}>
        <div className={styles["getReadyTitle"]}>
            Get ready to buy
            <br />
            your artwork
        </div>
        <div className={styles["cta__frame-1"]}>
            <div className={styles["cta__get-started"]}>Get Started</div>
            
        </div>
    </div>

  )
}

export default GetReadyToBuy
