"use client"
import { useAppContext } from "../../../context"
import { AcquireModalProps, EndDateTimestamp, Lang, ModalProps } from "../../../types/types"
import styles from './DropPanel.module.scss'
import useSharedLogicDropPanel from "./useSharedLogicDropPanel"
import { useEffect, useRef, useState } from "react"
import parse from 'html-react-parser'
import CountdownTimer from "./CountDownTimer"
import { Card, CardBody, CardFooter, Divider, Heading, Stack, ButtonGroup, Button, Text, Image } from "@chakra-ui/react"

const DropPanel: React.FC = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {artWorks, buttons, texts} = useSharedLogicDropPanel()
    
    const modalRef        = useRef<HTMLDivElement>(null)
    const acquireModalRef = useRef<HTMLDivElement>(null)

    const [isModalOpen, setIsModalOpen]   = useState(false)
    const [isAcquireModalOpen, setIsAcquireModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<string>('')
    const [acquireModalContent, setAcquireModalContent] = useState<string>('')
    const [acquireModalPrice, setAcquireModalPrice] = useState<number>(0)
    const [acquireModalImageUrl, setAcquireModalImageUrl] = useState<string>('')
    const [acquireButtonBuyStripe, setAcquireButtonBuyStripe] = useState<string>('')
    const [closeButton, setCloseButton]   = useState<string>('')

    // State to keep track of how many images are currently displayed
    const [visibleCount, setVisibleCount] = useState(10)

    // Function to load more images
    const loadMoreArtworks = () => {
        setVisibleCount(prevCount => prevCount + 10);
    }

    const showModal = (description: string, closeButton: string) => {
        setModalContent(description)
        setCloseButton(closeButton)
        setIsModalOpen(true)
    }

    const showAcquireModal = (description: string, buttonBuyStripe: string, imageUrl: string, price: number) => {
        console.log('test')
        setAcquireModalContent(description.slice(0, 100))
        setAcquireButtonBuyStripe(buttonBuyStripe)
        setAcquireModalImageUrl(imageUrl)
        setAcquireModalPrice(price)
        setIsAcquireModalOpen(true)
    }

    const closeModal = (e: any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalOpen(false)
        }
        if (acquireModalRef.current && !acquireModalRef.current.contains(e.target)) {
            setIsAcquireModalOpen(false)
        }    
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeModal);
        return () => {
            document.removeEventListener('mousedown', closeModal)
        }
    }, [])
    
    const Modal: React.FC<ModalProps> = ({ description, closeButton }) => {
        return (
            <div className={styles["modal-backdrop"]}>
                <div ref={modalRef} className={styles["modal"]}>
                    <p>{parse(description)}</p>
                </div>
            </div>
        )
    }
    
    const AcquireModal: React.FC<AcquireModalProps> = ({ description, buttonBuyStripe, imageUrl, price }) => {
        return (
            <div className={styles["acquire-modal-backdrop"]}>
                <div ref={acquireModalRef} className={styles["acquire-modal"]}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                            src={imageUrl}
                            alt=''
                            borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                            <Heading size='md'>Artwork</Heading>
                            <Text>
                                {description}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {price} €
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue'>
                                    {buttonBuyStripe}
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
  
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
                                    onClick={() => {showModal(artwork.description[lang_], buttons.closeArtworkDetail[lang_])}}>
                                    {buttons.detailArtWork[lang_]}
                                </div>
                            </div>    

                            <div className={styles["artworkUnit"]} style={{backgroundImage: `url(${artwork.url})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: 'black'}}>
                                
                            </div>    
                            <button className={styles["button-2"]} onClick={() => {showAcquireModal(artwork.description[lang_], buttons.buyArtworkNow[lang_], artwork.url, artwork.price)}}>
                                <div className={styles["text-wrapper-6"]}>
                                        {buttons.acquireArtWork[lang_]}
                                </div>
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
                {isAcquireModalOpen && (
                    <AcquireModal description={acquireModalContent} buttonBuyStripe={acquireButtonBuyStripe} imageUrl={acquireModalImageUrl} price={acquireModalPrice} />
                )}
                
            </div>
        </div>
        </>
    

  )
}

export default DropPanel