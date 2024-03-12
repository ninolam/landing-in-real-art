import { useEffect, useState } from 'react';
import { NftProps } from '../../../types/types'
import BuyModal from '../../common/Modal/BuyModal'
import styles from './NftCollection.module.scss'
import {
    useConnectModal,
    useAddRecentTransaction,
  } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Nft: React.FC<NftProps> = ({ artistName, nftName, imageUrl, price, buttonBuy, buttonPreBuy }) => {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
    
    return (
        <>
            {showBuyModal && (
                <BuyModal 
                    showBuyModal={showBuyModal}
                    setShowBuyModal={setShowBuyModal}
                    description={''}
                    imageUrl={imageUrl} price={price} 
                    buy={isConnected ? () => {console.log('Connected')} : openConnectModal}
                    />
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
                    <div className={styles.buyButton}>{buttonBuy}</div>
                </div>
            </div>
        </>       
    )
}

export default Nft