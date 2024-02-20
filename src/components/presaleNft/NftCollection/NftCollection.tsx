import React from 'react'
import styles from './NftCollection.module.scss'

const NftCollection = () => {
  return (
    <div className={styles.nftCollectionContainer}>
        <div className={styles.header}>
            <div className={styles.nftCollectionTitle}>Collection</div>
            <div className={styles.nftCollectionDesc}>
                Discover the collection of NFT works <br/>available online
            </div>
            <div className={styles.category}>
                <div className={styles.categoryFrame}>
                    <div className={styles.categoryLeloluce}>Leloluce</div>
                </div>
            </div>
        </div>

        <div className={styles.nftCollection}>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>
                
                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>
                
                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>
                
                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>

                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>

                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('img/presaleNft/collection3.png')`}}>

                </div>    
                <div className={styles.nftCardInfo}>
                
                </div>    
                <a className="Button Button--gold" href="/nfts/1">Buy</a>
            </div>
        </div>
    </div>
  )
}

export default NftCollection