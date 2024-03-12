"use client"
import { useEffect, useState } from 'react'
import styles from './JoinMovement.module.scss'
import JoinMovementNftGallery from './JoinMovementNftGallery'
import JoinMovementNftGallery1100 from './JoinMovementNftGallery1100'
import JoinMovementNftGallery950 from './JoinMovementNftGallery950'
import Link from 'next/link'
import { useAppContext } from '../../../context'
import { Lang } from '../../../types/types'
import useSharedLogicJoinMovementNft from './useSharedLogicJoinMovementNft'

const JoinMovementNft = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang

    const {texts, setTexts, buttons, setButtons} = useSharedLogicJoinMovementNft()

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
            <div className={styles["joinMovementNftHeroleftTitle"]}>{texts.mainTitle[lang_]}</div>

            <div className={styles["joinMovementNftDescription"]}>
                {texts.mainDescription[lang_]}
            </div>

            <div className={styles["joinMovementNftButtonsContainer"]}>
                <div className={styles["joinMovementNftButtons"]}>
                    <div className={styles["joinMovementNft__frame-2"]}>
                        <Link href="#collection" className={styles["joinMovementNft__buy-nft"]}>{buttons.buyNft[lang_]}</Link>
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