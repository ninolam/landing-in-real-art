"use client"
import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import Arrow21 from "../Arrows21"
import styles from './DropPanel.module.scss'
import useSharedLogicDropPanel from "./useSharedLogicDropPanel"

function DropPanel() {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {artWorks, buttons, texts} = useSharedLogicDropPanel()

    console.log(artWorks)
    return (
        <>
        <div className={styles["grid-wrapper"]}>
            <div className={styles["header"]}>
                <div className={styles["frame-7"]}>
                    <div className={styles["text-wrapper-3"]}>{texts.endDrop[lang_]}</div>
                </div>
                <div className={styles["text-wrapper-4"]}>65J 20H</div>
            </div>
            <div className={styles["image-grid"]}>
                {
                    artWorks.map( (artwork, index) => (
                        <div key={index} className={styles["image-container"]}>
                            <div className={styles.frameDetailArtWorkLink}>
                                <div></div>
                                <div style={{backgroundColor: 'white', padding: '2px 8px 2px 8px',borderRadius: '0px 5px', fontFamily: 'Unbounded'}}>
                                    {buttons.detailArtWork[lang_]}
                                </div>
                                
                            </div>    
                            <div className={styles["artworkUnit"]}>
                                <img src={artwork.url}/>
                            </div>    
                            <button className={styles["button-2"]}>
                                <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                            </button>
                        </div>
                    ))
                }
                
            </div>
        </div>
        </>
    

  )
}

export default DropPanel