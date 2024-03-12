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
    
    const {texts, setTexts } = useSharedLogicCollectionNft()
    console.log(texts)
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