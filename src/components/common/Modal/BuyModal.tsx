'use client';
import { Card, CardBody, CardFooter, Divider, Heading, Stack, ButtonGroup, Button, Text, Image } from "@chakra-ui/react"
import styles from './BuyModal.module.scss'
import { BuyModalProps } from "../../../types/types"
import { useEffect, useRef } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import {Close} from '@emotion-icons/evaicons-solid'

const BuyModal: React.FC<BuyModalProps> = ({ showBuyModal, setShowBuyModal, description, imageUrl, price }) => {

    const { isConnected } = useAccount();
    const buyModalRef  = useRef<HTMLDivElement>(null)
    
    const closeModal = () => {
        setShowBuyModal(false)
    }
    
    return (
        <div className={styles.buyModalBackdrop} ref={buyModalRef}>
            <div className={styles.buyModal}>
                <div className={styles.closeModalContainer} onClick={closeModal}>
                    <div><Close size='50px'></Close></div>
                </div>
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
                            {price} ETH
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            {isConnected 
                                ? <Button variant='solid' colorScheme='blue'>
                                    Buy
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
                            
                            
                            }

                            
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
        </div>

    )
}

export default BuyModal