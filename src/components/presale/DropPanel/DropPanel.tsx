"use client"
import { useAppContext } from "../../../context"
import { EndDateTimestamp, Lang, ModalProps } from "../../../types/types"
import styles from './DropPanel.module.scss'
import useSharedLogicDropPanel from "./useSharedLogicDropPanel"
import { useEffect, useRef, useState } from "react"
import parse from 'html-react-parser'
import CountdownTimer from "./CountDownTimer"

const DropPanel: React.FC = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {artWorks, buttons, texts} = useSharedLogicDropPanel()
    console.log(artWorks)
    const modalRef = useRef<HTMLDivElement>(null)
    
    const [isModalOpen, setIsModalOpen]   = useState(false)
    const [modalContent, setModalContent] = useState<string>('')
    const [closeButton, setCloseButton]   = useState<string>('')

    // State to keep track of how many images are currently displayed
    const [visibleCount, setVisibleCount] = useState(10)

    // Function to load more images
    const loadMoreArtworks = () => {
        setVisibleCount(prevCount => prevCount + 10);
    };

    const showModal = (description: string, closeButton: string) => {
        setModalContent(description)
        setCloseButton(closeButton)
        setIsModalOpen(true)
    };

    const closeModal = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false)
        }    
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => {
            document.removeEventListener('mousedown', closeModal);
        };
    }, []);
    
    const Modal: React.FC<ModalProps> = ({ description, closeButton }) => {
        return (
            <div className={styles["modal-backdrop"]}>
                <div ref={modalRef} className={styles["modal"]}>
                    <p>{parse(description)}</p>
                </div>
            </div>
        );
    };
    
  
    return (
        <>
        <div id="dropPanel" className={styles["grid-wrapper"]}>
            <div className={styles["header"]}>
                <div className={styles["frame-7"]}>
                    <div className={styles["text-wrapper-3"]}>{texts.endDrop[lang_]}</div>
                </div>
                <div className={styles["text-wrapper-4"]}>
                <CountdownTimer endDate="2024-03-01T00:00:00" />
                </div>
            </div>
            
            <div className={styles["image-grid"]}>
                {
                    artWorks.slice(0, visibleCount).map( (artwork, index) => (
                        <div key={index} id={index.toString()} className={styles["image-container"]}>
                            
                            <div className={styles.frameDetailArtWorkCreator}>
                                <div></div>
                                <div className={styles.frameDetailArtWorkCreatorName}>
                                    {artwork.artistName}
                                </div>
                            </div>    

                            <div className={styles.frameDetailArtWorkLink}>
                                <div></div>
                                <div className={styles.frameDetailArtWorkLinkCorner}
                                    onClick={() => {showModal(artwork.description[lang_], buttons.closeArtworkDetail[lang_]); console.log(artwork.description[lang_])}}>
                                    {buttons.detailArtWork[lang_]}
                                </div>
                            </div>    

                            <div className={styles["artworkUnit"]} style={{backgroundImage: `url(${artwork.url})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                                
                            </div>    
                            <button className={styles["button-2"]}>
                                <div className={styles["text-wrapper-6"]}>{buttons.acquireArtWork[lang_]}</div>
                            </button>
                        </div>
                    ))
                }

                {visibleCount < artWorks.length && (
                    <div className={styles["image-container"]} style={{justifyContent: 'center'}}>
                        <button className={styles["button-2"]} style={{cursor: 'pointer'}} onClick={loadMoreArtworks}>{buttons.viewMoreArtworks[lang_]}</button>
                    </div>    

                )}

                {isModalOpen && (
                    <Modal description={modalContent} closeButton={closeButton} />
                )}
                
            </div>
        </div>
        </>
    

  )
}

export default DropPanel