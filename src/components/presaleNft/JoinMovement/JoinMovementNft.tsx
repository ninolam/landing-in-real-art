"use client"
import { useEffect, useState } from 'react'
import styles from './JoinMovement.module.scss'
import JoinMovementNftGallery from './JoinMovementNftGallery'
import JoinMovementNftGallery1100 from './JoinMovementNftGallery1100'
import JoinMovementNftGallery950 from './JoinMovementNftGallery950'
import Link from 'next/link'

const JoinMovementNft = () => {

    const [isUnder1100, setIsUnder1100] = useState(false)
    const [isUnder950, setIsUnder950] = useState(false)

    useEffect(() => {
      const checkScreenSize = () => {
        if (window.innerWidth < 1100 && window.innerWidth > 950) {
            setIsUnder1100(true)
            setIsUnder950(false)
        }
        if (window.innerWidth < 950) {
            setIsUnder950(true)
            setIsUnder1100(false)
        }
        
        
      }
  
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
  
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])


  return (
    <div className={styles["joinMovementNft"]}>
        <div className={styles["joinMovementNftHeroleft"]}>
            <div className={styles["joinMovementNftHeroleftTitle"]}>Rejoindre le mouvement</div>

            <div className={styles["joinMovementNftDescription"]}>
                Inreal Art offers buyers the possibility to acquire an NFT work linked to a
                real asset that is nothing other than the physical work. The buyer has the
                choice of sales typology and can resell it on our marketplace.
            </div>

            <div className={styles["joinMovementNftButtonsContainer"]}>
                <div className={styles["joinMovementNftButtons"]}>
                    <div className={styles["joinMovementNft__frame-2"]}>
                        <Link href="#collection" className={styles["joinMovementNft__buy-nft"]}>Buy NFT</Link>
                    </div>
                </div>
            </div>


        </div>
        {   
            isUnder1100 
                ?<JoinMovementNftGallery1100/>
                : (isUnder950 ? <JoinMovementNftGallery950/> : <JoinMovementNftGallery/>) 

        }
        
    </div>

  )
}

export default JoinMovementNft