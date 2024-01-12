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


    return (
        <>
                {/*
        <div className={styles["frame-5"]}>
        <div className={styles["frame-6"]}>
            <div className={styles["frame-7"]}>
                <div className={styles["text-wrapper-3"]}>{texts.endDrop[lang_]}</div>
            </div>
            <div className={styles["frame-8"]}>
            <div className={styles["text-wrapper-4"]}>65J 20H</div>
            </div>
        </div>
        <div className={styles["frame-9"]}>
            <div className={styles["frame-10"]}>

            <div className={styles["frame-11"]}>
                <div className={styles["frame-3"]}>
                <img className={styles["rectangle-3"]} alt=""
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"
                />
                <div className={styles["frame-12"]}>
                    <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                    <Arrow21 className={styles["arrow"]} />
                </div>
                </div>
                <button className={styles["button-2"]}>
                <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                </button>
            </div>

            <div className={styles["frame-11"]}>
                <div className={styles["frame-3"]}>
                <img className={styles["rectangle-3"]} alt=""
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770-1.svg"
                />
                <div className={styles["frame-12"]}>
                    <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                    <Arrow21 className={styles["arrow"]} />
                </div>
                </div>
                <button className={styles["button-2"]}>
                <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                </button>
            </div>

            <div className={styles["frame-11"]}>
                <div className={styles["frame-3"]}>
                <img className={styles["rectangle-3"]} alt=""
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770-2.svg"
                />
                <div className={styles["frame-12"]}>
                    <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                    <Arrow21 className={styles["arrow"]} />
                </div>
                </div>
                <button className={styles["button-2"]}>
                <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                </button>
            </div>
            </div>

            <div className={styles["frame-10"]}>
                <div className={styles["frame-11"]}>
                    <div className={styles["frame-3"]}>
                    <img className={styles["rectangle-3"]} alt=""
                        src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770-3.svg"
                    />
                    <div className={styles["frame-12"]}>
                        <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                        <Arrow21 className={styles["arrow"]} />
                    </div>
                    </div>
                    <button className={styles["button-2"]}>
                    <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["frame-11"]}>
                    <div className={styles["frame-3"]}>
                    <img className={styles["rectangle-3"]} alt=""
                        src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770-4.svg"
                    />
                    <div className={styles["frame-12"]}>
                        <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                        <Arrow21 className={styles["arrow"]} />
                    </div>
                    </div>
                    <button className={styles["button-2"]}>
                    <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["frame-11"]}>
                    <div className={styles["frame-3"]}>
                    <img className={styles["rectangle-3"]} alt=""
                        src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770-5.svg"
                    />
                    <div className={styles["frame-12"]}>
                        <div className={styles["text-wrapper-5"]}>{buttons.detailArtWork[lang_]}</div>
                        <Arrow21 className={styles["arrow"]} />
                    </div>
                    </div>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    */}
        <div className={styles["grid-wrapper"]}>
            <div className={styles["header"]}>
                <div className={styles["frame-7"]}>
                    <div className={styles["text-wrapper-3"]}>{texts.endDrop[lang_]}</div>
                </div>
                <div className={styles["text-wrapper-4"]}>65J 20H</div>
            </div>
            <div className={styles["image-grid"]}>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
                <div className={styles["image-container"]}>
                    <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
                    <button className={styles["button-2"]}>
                        <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                    </button>
                </div>
            </div>
        </div>
        </>
    

  )
}

export default DropPanel