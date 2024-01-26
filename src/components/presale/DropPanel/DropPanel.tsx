"use client"
import { useAppContext } from "../../../context"
import { Lang } from "../../../types/types"
import styles from './DropPanel.module.scss'
import useSharedLogicDropPanel from "./useSharedLogicDropPanel"
import { useState } from "react"
import parse from 'html-react-parser'

const DropPanel: React.FC = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {artWorks, buttons, texts} = useSharedLogicDropPanel()

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

    const closeModal = () => {
        setIsModalOpen(false)
    };

    interface ModalProps {
        description: string;
        closeButton: string;
        onClose: () => void;
    }
    
    const Modal: React.FC<ModalProps> = ({ description, closeButton, onClose }) => {
        return (
            <div className={styles["modal-backdrop"]}>
                <div className={styles["modal"]}>
                    <p>{parse(description)}</p>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
                        <button style={{cursor: 'pointer', backgroundColor: 'lightgrey', borderRadius: '5px', padding: '10px'}} onClick={onClose}>
                            {closeButton}
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    
  
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
                    artWorks.slice(0, visibleCount).map( (artwork, index) => (
                        <div key={index} id={index.toString()} className={styles["image-container"]}>
                            
                            <div className={styles.frameDetailArtWorkLink}>
                                <div></div>
                                <div style={{backgroundColor: 'white', cursor: 'pointer', padding: '2px 8px 2px 8px',borderRadius: '0px 5px', fontFamily: 'Unbounded'}} 
                                    onClick={() => showModal(artwork.description[lang_], buttons.closeArtworkDetail[lang_])}>
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

                {visibleCount < artWorks.length && (
                    <div className={styles["image-container"]} style={{justifyContent: 'center'}}>
                        <button className={styles["button-2"]} style={{cursor: 'pointer'}} onClick={loadMoreArtworks}>{buttons.viewMoreArtworks[lang_]}</button>
                    </div>    

                )}

                {isModalOpen && (
                    <Modal description={modalContent} closeButton={closeButton} onClose={closeModal} />
                )}
                
            </div>
        </div>
        </>
    

  )
}

export default DropPanel