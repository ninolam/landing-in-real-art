"use client"
import Link from 'next/link'
import styles from './FooterMobile.module.css'
import { IconFacebook } from './IconFacebook/IconFacebook'
import IconInstagram from './IconInstagram/IconInstagram'
import IconIraMobile from './IconIra/IconIraMobile'
import IconLinkedIn from './IconLinkedIn/IconLinkedIn'
import { IconTwitter } from './IconTwitter/IconTwitter'
import useSharedLogicFooter from './useSharedLogicFooter'
import { useAppContext } from '../../context'
import { Lang } from '../../types/types'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { IoSend } from 'react-icons/io5'

export interface FooterMobileProps {
  containsEmail?: boolean
}


const FooterMobile = ({containsEmail, ...props}: FooterMobileProps) => {

  //Get the language of the global context
  const {lang } = useAppContext()
  const lang_ = lang as Lang
  
  const {
    contactTitle, setContactTitle, email, setEmail, phone, setPhone, address, setAddress, twitterLogo, setTwitterLogo, 
    linkedInLogo, setLinkedInLogo, instagramLogo, setInstagramLogo, twitterUrl, setTwitterUrl, linkedInUrl, setLinkedInUrl,
    instagramUrl, setInstagramUrl, leftBlockText, setLeftBlockText,
    footerBlock1, setFooterBlock1,
    footerBlock2, setFooterBlock2,
    texts, setTexts
  } = useSharedLogicFooter()

  return (
    <div className={styles["footer"]}>
    <div className={styles["menu-container"]}>
      <div className={styles["frame-3353"]}>
        <IconIraMobile/>
      </div>
      <div className={styles["frame-48095803"]}>
        <div className={styles["link-menu"]}>
        {
            footerBlock1.lines.map(
                (line, index) => (
                    <div key={index} className={styles.footerBlockLineMobile}>
                        <Link className={styles.footerLink} href={line.url}>
                            {line.text[lang_]}
                        </Link>    
                    </div>            
                )
            )
        }
        </div>

        <div className={styles["link-menu"]}>
          {
              footerBlock2.lines.map(
                  (line, index) => (
                      <div key={index} className={styles.footerBlockLineMobile}>
                          <Link className={styles.footerLink} href={line.url}>
                              {line.text[lang_]}
                          </Link>    
                      </div>            
                  )
              )
          }
        </div>
      </div>
    </div>

    {containsEmail ?
        <div className={styles["newsletter2"]}>
          <div className={styles["h-3"]}>{texts.emailTitle[lang_]}</div>  
          <div className={styles["email"]}>
              <FormControl color={'white'}>
                <FormLabel color={'white'}></FormLabel>
                  <Input type='email' color={'grey'} backgroundColor={'white'} 
                  placeholder={texts.emailPlaceHolder[lang_]} 
                  focusBorderColor='white'/>
                  {/*<FormHelperText color={'white'}>We'll never share your email.</FormHelperText>*/}
              </FormControl>  
              <div className={styles.rectangleSendEmail}>
                <Button leftIcon={<IoSend />} colorScheme='#465c79' variant='solid' left={'5px'}>
                </Button>
              </div>            
          </div>
        </div>  
      : ''
    }
    <div className={styles["link-social"]}>

      <Link href={linkedInUrl}>
        <IconLinkedIn/>
      </Link>  
      {
        /*
        <div className={styles["frame-3202"]}>
          <IconFacebook
            className={styles["icon-facebook-instance"]}
          />
        </div>
        */
      }
      <Link href={instagramUrl}>
        <IconInstagram/>
      </Link>    

      <Link href={twitterUrl}>
        <div className={styles["frame-3203"]}>
          <IconTwitter
            className={styles["icon-twitter-instance"]}
          />
        </div>
      </Link>

    </div>
  </div>
  )
}

export default FooterMobile