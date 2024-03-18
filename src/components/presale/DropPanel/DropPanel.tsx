"use client"
import { useAppContext } from "../../../context"
import { AcquireModalProps, EndDateTimestamp, Lang, ModalProps } from "../../../types/types"
import styles from './DropPanel.module.scss'
import useSharedLogicDropPanel from "./useSharedLogicDropPanel"
import { useEffect, useRef, useState } from "react"
import parse from 'html-react-parser'
import CountdownTimer from "./CountDownTimer"
import { Card, CardBody, CardFooter, Divider, Heading, Stack, ButtonGroup, Button, Text, Image, FormControl, FormLabel, Input, useToast, FormErrorMessage } from "@chakra-ui/react"
import { IoSend } from "react-icons/io5"
import { validateEmail } from "../../../utils/client/clientFunctions"
import { insertEmail } from "../../../utils/supabase/supabaseFunctions"
import { PRIVATESALE_TABLE } from "../../../utils/supabase/constants"

const DropPanel: React.FC = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    
    const {artWorks, buttons, texts, showDesign, setShowDesign} = useSharedLogicDropPanel()
    
    const modalRef        = useRef<HTMLDivElement>(null)
    const acquireModalRef = useRef<HTMLDivElement>(null)

    const [isModalOpen, setIsModalOpen]   = useState(false)
    const [isAcquireModalOpen, setIsAcquireModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState<string>('')
    const [acquireModalContent, setAcquireModalContent] = useState<string>('')
    const [acquireModalTitle, setAcquireModalTitle] = useState<string>('')
    const [acquireModalSize, setAcquireModalSize] = useState<string>('')
    const [acquireModalPrice, setAcquireModalPrice] = useState<number>(0)
    const [acquireModalImageUrl, setAcquireModalImageUrl] = useState<string>('')
    const [acquireModalImagePath, setAcquireModalImagePath] = useState<string>('')
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

    const showAcquireModal = (name: string, description: string, size: string, buttonBuyStripe: string, imagePath: string, imageUrl: string, price: number) => {
        setAcquireModalContent(description.slice(0, 100))
        setAcquireButtonBuyStripe(buttonBuyStripe)
        setAcquireModalImagePath(imagePath)
        setAcquireModalImageUrl(imageUrl)
        setAcquireModalPrice(price)
        setAcquireModalTitle(name)
        setAcquireModalSize(size)
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
    
    const AcquireModal: React.FC<AcquireModalProps> = ({ name, description, size, buttonBuyStripe, imagePath, imageUrl, price, msgSuccessEmail, msgErrorEmail }) => {
        const [email, setEmail]               = useState<string>('')
        const [isEmailValid, setEmailValid]   = useState<boolean>(true)
        const toast = useToast()
        //------------------------------------------------------------------------------ handleChangeEmail
        const handleChangeEmail = (e: any) => setEmail(e.target.value)

        //------------------------------------------------------------------------------ handlSendEmail
        const handlSendEmail = async () => {
            if (validateEmail(email)) {
                setEmailValid(true)
        
                try {
                    //Insert in collectionNfts Table
                    const msgError = await insertEmail(PRIVATESALE_TABLE, email, imagePath)
                    if (msgError !== '') {
                        toast({
                        title: msgError,
                        description: '',
                        status: 'error',
                        duration: 3000,
                        isClosable: true,
                        })  
                    }
                    else {
                        // Popup a succes toast if no errors.
                        toast({
                        title: parse(msgSuccessEmail),
                        description: '',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        })
                    }
                            
                } catch (error) {
                    throw error
                }
        
            } else {
                setEmailValid(false)
                // Popup a succes toast if no errors.
                toast({
                    title: parse(msgErrorEmail),
                    description: '',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    })
            }
        }


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
                            <Heading size='md'><b>{name}</b></Heading>
                            <Text>
                                {size}
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                {price} €
                            </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                {
                                    /*
                                        <Button variant='solid' colorScheme='blue'>
                                            {buttonBuyStripe}
                                        </Button>
                                    */
                                }
                                <div className={styles.buttonPreBuyContainer}>
                                    <div className={styles.messageNotConnected}>
                                        {texts.titleFormEmail[lang_]}
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', justifyContent: 'center', borderRadius: '5px'}}>
                                        <FormControl color={'white'} isInvalid={false}>
                                        <FormLabel color={'blue'}></FormLabel>
                                            <Input type='email' color={'black'} backgroundColor={'white'} 
                                            placeholder={''} 
                                            focusBorderColor='white'
                                            onChange={handleChangeEmail} 
                                            />
                                            {!isEmailValid && <FormErrorMessage>{msgErrorEmail}</FormErrorMessage>}
                                        </FormControl>
                                        <div className={styles.rectangleSendEmail}>
                                            <Button leftIcon={<IoSend />} colorScheme='#465c79' variant='solid' left={'5px'} onClick={handlSendEmail}>
                                            </Button>
                                        </div>            
                                    </div>  
                                </div>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
  
    const handleDesignVisibility = (e: any) => {

    }

    return (
        <>
        <div id="dropPanel" className={styles["grid-wrapper"]}>
            
                {/*
                    <div className={styles["header"]}>
                        <div className={styles["frame-7"]}>
                            <div className={styles["text-wrapper-3"]}>{texts.endDrop[lang_]}</div>
                        </div>
                        <div className={styles["text-wrapper-4"]}>
                            <CountdownTimer endDate="2024-04-05T00:00:00" />
                        </div>
                    </div>
                    */
                }
            
            <div className={styles["image-grid"]}>
                {
                    artWorks.slice(0, visibleCount).map( (artwork, index) => (
                        <div key={index} id={(index+1).toString()} className={styles["image-container"]}
                            style={{
                                zIndex: showDesign === index+1 ? 1 : 1,
                                backgroundImage: showDesign === index+1?`url(${artwork.url2})`:``, 
                                backgroundSize: showDesign === index+1?`contain`:``, 
                                backgroundPosition: showDesign === index+1?`center`:``, 
                                backgroundRepeat: showDesign === index+1?`no-repeat`:``,
                                backgroundColor: showDesign === index+1?`black`:``,
                                borderRadius: showDesign === index+1?`20px`:``,
                                }}>
                            
                            <div className={styles.frameDetailArtWorkCreator}
                                style={{visibility: showDesign === index+1?`hidden`:`visible`}}>
                                <div></div>
                                <div className={styles.frameDetailArtWorkCreatorName}>
                                    {artwork.artistName}
                                </div>
                            </div>    

                            <div className={styles.frameDetailArtWorkLink} style={{visibility: showDesign === index+1?`hidden`:`visible`}}>
                                <div></div>
                                <div className={styles.frameDetailArtWorkLinkCorner}
                                    onClick={() => {showModal(artwork.description[lang_], buttons.closeArtworkDetail[lang_])}}>
                                    {buttons.detailArtWork[lang_]}
                                </div>
                            </div>    

                            <div className={styles["artworkUnit"]} 
                                style={{
                                    cursor: 'pointer', 
                                    backgroundImage: showDesign === index+1?``:`url(${artwork.url})`, 
                                    backgroundSize: showDesign === index+1?'':`contain`, 
                                    backgroundPosition: showDesign === index+1?'':`center`, 
                                    backgroundRepeat: showDesign === index+1?'':`no-repeat`, 
                                    backgroundColor: showDesign === index+1?'':`black`}}
                                onMouseOver={() => {setShowDesign(index+1)}}
                                onMouseLeave={() => {setShowDesign(null)}}
                                >
                                
                            </div>    
                            <button 
                                style={{visibility: showDesign === index+1?`hidden`:`visible`}}
                                className={styles["button-2"]} onClick={() => {showAcquireModal(artwork.name[lang_], artwork.description[lang_], artwork.size[lang_], buttons.buyArtworkNow[lang_], artwork.image, artwork.url, artwork.price)}}>
                                <div className={styles["textButtonAcquire"]}>
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
                    <AcquireModal 
                        name={acquireModalTitle}
                        description={acquireModalContent} 
                        size={acquireModalSize}
                        buttonBuyStripe={acquireButtonBuyStripe} 
                        imagePath={acquireModalImagePath} 
                        imageUrl={acquireModalImageUrl} 
                        price={acquireModalPrice} 
                        msgSuccessEmail={texts.msgSuccessEmail[lang_]} 
                        msgErrorEmail={texts.msgErrorEmail[lang_]}/>
                )}
                
            </div>
        </div>
        </>
    

  )
}

export default DropPanel