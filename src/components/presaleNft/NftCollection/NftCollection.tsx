import React from 'react'
import styles from './NftCollection.module.scss'

const NftCollection = () => {
  return (
    <div className={styles.nftCollection}>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground}>
              NFT
            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground}>
            NFT
            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground} >
            NFT
            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground} >

            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground} >

            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
        <div className={styles.nftCard}>
            <div className={styles.nftCardBackground} >

            </div>    
            <div className={styles.nftCardInfo}>
              
            </div>    
            <a className="Button Button--gold" href="/nfts/1">Buy</a>
        </div>
    </div>
  )
}

export default NftCollection