import { useEffect, useState } from 'react';
import { NftProps } from '../../../types/types'
import BuyModal from '../../common/Modal/BuyModal'
import styles from './NftCollection.module.scss'


const Nft: React.FC<NftProps> = ({ artistName, nftName, imageUrl, price }) => {
    const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
    
    const closeModal = (e: any) => {
       setShowBuyModal(false)
    }

    useEffect(() => {
        setShowBuyModal(false)
        document.addEventListener('mousedown', closeModal);
        return () => {
            document.removeEventListener('mousedown', closeModal)
        }
    }, [])

    useEffect(() => {
        if (showBuyModal) {
          document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [showBuyModal]);

    return (
        <>
            {showBuyModal && (
                <BuyModal showBuyModal={showBuyModal} setShowBuyModal={setShowBuyModal} description={''} imageUrl={imageUrl} price={price}/>
            )}
            <div className={styles.nftCard}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('${imageUrl}')`}}/>
                <div className={styles.nftCardInfo}>
                    <div className={styles.nftCardNames}>
                        <a className={styles.nftCardArtistPseudo} href="">{artistName}</a>
                        <a className={styles.nftCardArtworkName} href="">{nftName}</a>
                    </div>
                    <div className={styles.nftPrice}>
                        {price} ETH
                    </div>
                </div>  
                <div className={styles.buyButtonContainer} onClick={() => setShowBuyModal(true)}>
                    <div className={styles.buyButton}>Buy</div>
                </div>
            </div>
        </>       
    )
}

export default Nft