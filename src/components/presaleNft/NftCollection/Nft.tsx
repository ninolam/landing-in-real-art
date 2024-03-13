import { useEffect, useState } from 'react';
import { NftProps } from '../../../types/types'
import BuyModal from '../../common/Modal/BuyModal'
import styles from './NftCollection.module.scss'
import {
    useConnectModal,
    useAddRecentTransaction,
  } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const Nft: React.FC<NftProps> = ({ artistName, nftName, imagePath, imageUrl, videoUrl, msgSuccessEmail, msgErrorEmail, price, buttonBuy, buttonPreBuy }) => {
    const { isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
    
    return (
        <>
            {showBuyModal && (
                <BuyModal 
                    showBuyModal={showBuyModal}
                    setShowBuyModal={setShowBuyModal}
                    nftName={nftName}
                    description={''}
                    msgSuccessEmail={msgSuccessEmail}
                    msgErrorEmail={msgSuccessEmail}
                    imagePath={imagePath}
                    imageUrl={imageUrl} 
                    videoUrl={videoUrl}
                    price={price} 
                    buy={isConnected ? () => {console.log('Connected')} : openConnectModal}
                    />
            )}
            <div className={styles.nftCard} key={imageUrl}>
                <div className={styles.nftCardBackground} style={{backgroundImage: `url('${imageUrl}')`}}/>
                <div className={styles.nftCardInfo}>
                    <div className={styles.nftCardNames}>
                        <a className={styles.nftCardArtistPseudo} href="">{artistName}</a>
                        <a className={styles.nftCardArtworkName} href="">{nftName}</a>
                    </div>
                    <div className={styles.nftPrice}>
                        {price}
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