'use client';
import { Card, CardBody, CardFooter, Divider, Heading, Stack, ButtonGroup, Button, Text, Image, FormControl, FormLabel, Input, FormErrorMessage, useToast } from "@chakra-ui/react"
import styles from './BuyModal.module.scss'
import { BuyModalProps } from "../../../types/types"
import { useEffect, useRef, useState } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import {Close} from '@emotion-icons/evaicons-solid'
import { IoSend } from "react-icons/io5";
import { insertEmail } from "../../../utils/supabase/supabaseFunctions";
import { COLLECTION_NFTS_TABLE } from "../../../utils/supabase/constants";
import parse from 'html-react-parser';
import VideoNft from "../Video/VideoNft";

const BuyModal: React.FC<BuyModalProps> = ({ showBuyModal, setShowBuyModal, nftName, description, imagePath, imageUrl, videoUrl, price, msgSuccessEmail, msgErrorEmail }) => {

    const [file, setFile] = useState("");
    const [cid, setCid] = useState("");
    const [uploading, setUploading] = useState(false);
    const [email, setEmail]               = useState('')
    const [isEmailValid, setEmailValid]   = useState(true)
    const toast = useToast()
    
    //const { isConnected } = useAccount();
    const buyModalRef  = useRef<HTMLDivElement>(null)
    
    const uploadFile = async (fileToUpload: any) => {
        try {
          setUploading(true);
          const data = new FormData();
          data.set("file", fileToUpload);
          const res = await fetch("/api/files", {
            method: "POST",
            body: data,
          });
          const resData = await res.json();
          setCid(resData.IpfsHash);
          setUploading(false);
        } catch (e) {
          console.log(e);
          setUploading(false);
          alert("Trouble uploading file");
        }
      }

    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
        uploadFile(e.target.files[0]);
    }

    const closeModal = () => {
        setShowBuyModal(false)
    }
    
    const mintNFT = () => {
        uploadFile(imageUrl)
    }

    // Email validation function
    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
      }
  
    const handleChangeEmail = (e: any) => setEmail(e.target.value)

        //------------------------------------------------------------------------------ handlSendEmail
        const handlSendEmail = async () => {
            if (validateEmail(email)) {
                setEmailValid(true)
      
                try {
                  //Insert in collectionNfts Table
                    
                    const msgError = await insertEmail(COLLECTION_NFTS_TABLE, email, imagePath)
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
        <div className={styles.buyModalBackdrop} ref={buyModalRef}>
            <div className={styles.buyModal}>
                <div className={styles.closeModalContainer} onClick={closeModal}>
                    <div><Close size='50px'></Close></div>
                </div>
                <Card >
                    <CardBody>
                        {
                            /*
                        <Image
                        src={imageUrl}
                        alt=''
                        borderRadius='lg'
                        />
                            */
                        }
                        
                        <VideoNft urlVideo={videoUrl}/>

                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nftName}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {price}
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>

                            {/*!isConnected 
                                ? <Button variant='solid' colorScheme='blue' disabled={uploading} onClick={mintNFT}>
                                    {uploading ? "Uploading NFT..." : "Buy"}
                                </Button>
                            
                            : 
                            <div className={styles.buttonConnectWeb3Container}>
                                <div>
                                    <ConnectButton></ConnectButton>
                                </div>
                                <div className={styles.messageNotConnected}>
                                    You are not connected on the blockchain.
                                </div>
                                <div className={styles.messageNotConnected}>
                                    You must connect to the web3 to buy this NFT
                                </div>
                            </div>
                            */
                            }
                            <div className={styles.buttonPreBuyContainer}>
                                <div className={styles.messageNotConnected}>
                                    Remplissez votre email pour accéder à l'achat du NFT
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

export default BuyModal