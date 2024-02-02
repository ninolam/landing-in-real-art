"use client"
import VuesaxLinearStatusUp1 from "../../VuesaxLinearStatusUp1"
import Link from 'next/link'
import { useAppContext } from "../../../context"
import { Lang, ModalProps} from "../../../types/types"
import parse from 'html-react-parser'
import styles from './PresalePros.module.scss'
import useSharedLogixPresalePros from "./useSharedLogixPresalePros"
import { useEffect, useRef, useState } from "react"

function PresalePros() {

    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const modalRef = useRef<HTMLDivElement>(null)
    const [isModalOpen, setIsModalOpen]   = useState(false)
    const [modalContent, setModalContent] = useState<string>('')
    
    const {presaleProsTexts, setPresaleProsTexts, presaleProsButtons, setPresaleProsButtons} = useSharedLogixPresalePros()
    console.log(presaleProsTexts)

    const showModal = (description: string) => {
        setModalContent(description)
        setIsModalOpen(true)
    }

    const closeModal = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false)
        }    
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => {
            document.removeEventListener('mousedown', closeModal);
        };
    }, [])

    const Modal: React.FC<ModalProps> = ({ description, closeButton }) => {
        console.log(description)
        return (
            <div className={styles["modal-backdrop"]}>
                <div ref={modalRef} className={styles["modal"]}>
                    <p>{parse(description)}</p>
                </div>
            </div>
        )
    }   

    
    return (
        <div className={styles["frame-presalePros"]}>
        <div className={styles["frame-wrapper"]}>
            <div className={styles["frame-14"]}>
            <div className={styles["avantages-d-achats"]}>
                {parse(presaleProsTexts.mainTitle[lang_])}
            </div>
            <p className={styles["ne-louper-pas-la"]}>
                {parse(presaleProsTexts.mainDescription[lang_])}
            </p>
            </div>
        </div>
        <div className={styles["frame-presalePros-cards"]}>
            <div className={styles["frame-presalePros-card"]}>
            <div className={styles["frame-17"]}>
                <div className={styles["rectangle-4"]} />
                <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
            </div>
            <div className={styles["frame-18"]}>
                <div className={styles["heading-2"]}>{parse(presaleProsTexts.buyArtWorkTitle[lang_])}</div>
                <p className={styles["paragraph"]}>{parse(presaleProsTexts.buyArtWorkDescription[lang_])}</p>
            </div>
            <div className={styles["heading-wrapper"]} onClick={() => {showModal(presaleProsTexts.buyArtWorkDetail[lang_])}}>
                <div className={styles["heading-3"]} >
                    {presaleProsButtons.buyArtWork[lang_]}
                </div>
            </div>
            </div>
            <div className={styles["frame-presalePros-centerCard"]}>
            <div className={styles["frame-3"]}>
                <div className={styles["frame-presalePros-card"]}>
                <div className={styles["frame-17"]}>
                    <div className={styles["rectangle-4"]} />
                    <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
                </div>
                <div className={styles["frame-18"]}>
                    <div className={styles["heading-2"]}>{parse(presaleProsTexts.exclusiveBenefitsTitle[lang_])}</div>
                    <p className={styles["paragraph"]}>{parse(presaleProsTexts.exclusiveBenefitsDescription[lang_])}</p>
                </div>
                <div className={styles["heading-wrapper"]} onClick={() => {showModal(presaleProsTexts.exclusiveBenefitsDetail[lang_])}}>
                    <div className={styles["heading-3"]}>{presaleProsButtons.exclusiveBenefits[lang_]}</div>
                </div>
                </div>
            </div>
            </div>
            <div className={styles["frame-presalePros-card"]}>
            <div className={styles["frame-17"]}>
                <div className={styles["rectangle-4"]} />
                <VuesaxLinearStatusUp1 className={styles["vuesax-linear-status"]} />
            </div>
            <div className={styles["frame-18"]}>
                <div className={styles["heading-2"]}>{parse(presaleProsTexts.bonusTitle[lang_])}</div>
                <p className={styles["paragraph"]}>{parse(presaleProsTexts.bonusDescription[lang_])}</p>
            </div>
            <div className={styles["heading-wrapper"]} onClick={() => {showModal(presaleProsTexts.bonusDetail[lang_])}}>
                <div className={styles["heading-3"]}>{presaleProsButtons.bonus[lang_]}</div>
            </div>
            </div>
        </div>

        {isModalOpen && (
            <Modal description={modalContent} />
        )}

        </div>

    )
}

export default PresalePros