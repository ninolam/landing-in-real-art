import { Card, CardBody, CardFooter, Divider, Heading, Stack, ButtonGroup, Button, Text, Image } from "@chakra-ui/react"
import styles from './BuyModal.module.scss'
import { BuyModalProps } from "../../../types/types"
import { useEffect } from "react"

const BuyModal: React.FC<BuyModalProps> = ({ showBuyModal, setShowBuyModal, description, imageUrl, price }) => {
   
    useEffect(() => {
        if (showBuyModal) {
          document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [showBuyModal]);
    
  return (
    <div className={styles.buyModalBackdrop}>
    <div className={styles.buyModal}>
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
                    <Button variant='solid' colorScheme='blue'>
                        Buy
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>
</div>

  )
}

export default BuyModal