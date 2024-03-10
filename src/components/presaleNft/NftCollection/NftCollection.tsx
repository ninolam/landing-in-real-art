import BuyModal from '../../common/Modal/BuyModal'
import Nft from './Nft'
import styles from './NftCollection.module.scss'

const NftCollection = () => {
  return (
    <div id="collection" className={styles.nftCollectionContainer}>
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
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce1.jpg'} price={1} ></Nft>
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce2.jpg'} price={0.5} ></Nft>
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce3.jpg'} price={2.5} ></Nft>
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce4.jpg'} price={0.8} ></Nft>
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce5.jpg'} price={0.8} ></Nft>
            <Nft artistName={'@Leloluce'} nftName={'Musicata'} imageUrl={'img/presaleNft/leloluce6.jpg'} price={0.8} ></Nft>
        </div>
    </div>
  )
}

export default NftCollection