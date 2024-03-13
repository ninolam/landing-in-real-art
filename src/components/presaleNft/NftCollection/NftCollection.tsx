import { useState } from 'react'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import BuyModal from '../../common/Modal/BuyModal'
import Nft from './Nft'
import styles from './NftCollection.module.scss'
import useSharedLogicCollectionNft from './useSharedLogicCollectionNft'
import parse from 'html-react-parser';

const NftCollection = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const { buttons, setButtons, texts, setTexts, nfts,setNfts } = useSharedLogicCollectionNft()
    
    // State to keep track of how many images are currently displayed
    const [visibleCount, setVisibleCount] = useState(10)

    const ARTIST_NAME = 'Leloluce'

    return (
        <div id="collection" className={styles.nftCollectionContainer}>
            <div className={styles.header}>
                <div className={styles.nftCollectionTitle}>{texts?.mainTitle[lang_]}</div>
                <div className={styles.nftCollectionDesc}>
                    {parse(texts?.secondaryTitle[lang_])}
                </div>
                <div className={styles.category}>
                    <div className={styles.categoryFrame}>
                        <div className={styles.categoryLeloluce}>{ARTIST_NAME}</div>
                    </div>
                </div>
            </div>

            <div className={styles.nftCollection}>
            {
                    nfts.slice(0, visibleCount).map( (nft, index) => (
                        <Nft 
                            key={index}
                            artistName={'@Leloluce'} 
                            nftName={nft.name[lang_]} 
                            imagePath={nft.image}
                            imageUrl={nft.urlImage} 
                            videoUrl={nft.urlVideo} 
                            price={nft.price} 
                            msgSuccessEmail={texts.msgSuccessEmail[lang_]}
                            msgErrorEmail={texts.msgErrorEmail[lang_]}
                            buttonBuy={buttons.buyLeloluceNft[lang_]} 
                            buttonPreBuy={buttons.preBuyLeloluceNft[lang_]}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default NftCollection