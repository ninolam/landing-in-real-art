"use client"
import Link from 'next/link'
import styles from './GetReadyToBuy.module.scss'

const GetReadyToBuy = () => {
  return (
    <div className={styles["getReady"]}>
        <Link href='/presale' className={styles["getReadyTitle"]}>
            Get ready to buy
            <br />
            your real world assets
        </Link>
        <div className={styles["cta__frame-1"]}>
            <div className={styles["cta__get-started"]}>Get Started</div>
            
        </div>
    </div>

  )
}

export default GetReadyToBuy
