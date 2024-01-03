"use client"
import styles from './Footer.module.css'
import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from '../../context';
import Link from 'next/link';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { FooterBlock, FooterData, Lang, defaultLangObject } from '../../types/types';

const Footer = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_FOOTER_COLLECTION = 'Footer'

    const [contactTitle, setContactTitle] = useState<Record<Lang, string>>(defaultLangObject);
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [twitterLogo, setTwitterLogo]     = useState("")
    const [linkedInLogo, setLinkedInLogo]   = useState("")
    const [instagramLogo, setInstagramLogo] = useState("")
    const [twitterUrl, setTwitterUrl]       = useState("")
    const [linkedInUrl, setLinkedInUrl]     = useState("")
    const [instagramUrl, setInstagramUrl]   = useState("")
    const [leftBlockText, setLeftBlockText] = useState("")

    const defaultFooterBlock = {
        title: defaultLangObject,
        lines: []
    }
    const [footerBlock1, setFooterBlock1] = useState<FooterBlock>(defaultFooterBlock)
    const [footerBlock2, setFooterBlock2] = useState<FooterBlock>(defaultFooterBlock)

    useEffect(() => {
        const fetchData = async () => {
            const dataDoc      = collection(db, FIREBASE_FOOTER_COLLECTION);
            const dataSnapshot = await getDocs(dataDoc);
            const dataList     = dataSnapshot.docs.map(doc => doc.data() as FooterData);
            
            //Left block
            const imageRefTwitter   = ref(storage, 'footer/twitter-logo.png')
            const imageRefLinkedIn  = ref(storage, 'footer/linkedin-logo.png') 
            const imageRefInstagram = ref(storage, 'footer/instagram-logo.png')
            const urlTwitter   = await getDownloadURL(imageRefTwitter)
            const urlLinkedIn  = await getDownloadURL(imageRefLinkedIn) 
            const urlInstagram = await getDownloadURL(imageRefInstagram)
            setTwitterLogo(urlTwitter)
            setLinkedInLogo(urlLinkedIn)
            setInstagramLogo(urlInstagram)   
            setTwitterUrl(dataList[1].twitterUrl)
            setInstagramUrl(dataList[1].instagramUrl)
            setLinkedInUrl(dataList[1].linkedInUrl)
            setLeftBlockText(dataList[1].text[lang_])

            //Links block
            setFooterBlock1(dataList[2].block1)
            setFooterBlock2(dataList[2].block2)

            //Right block  
            const contactTitle = dataList[0]['contactTitle'];
            const email   = dataList[0].Email;
            const phone   = dataList[0].Telephone;
            const address = dataList[0].Adresse;
            setEmail(email)   
            setPhone(phone)
            setAddress(address)
            setContactTitle(contactTitle)
        }
    
        fetchData();
        
      }, []);

    return (
        <>
            <div className={styles.footer}>
                <div className={styles["footer-left"]}>
                    <img className="logo-2" alt="Logo" src="/img/logo-IRA.png" />
                    <div className="logo-social-network">
                        <Link href={linkedInUrl}>
                            <img className="add" alt="Frame" src={linkedInLogo} />
                        </Link>
                        <Link href={instagramUrl}>
                            <img className="add" alt="Frame" src={instagramLogo} />
                        </Link>
                        <Link href={twitterUrl}>
                            <img className="add" alt="Frame" src={twitterLogo} />
                        </Link>
                        
                    </div>
                    <p className={styles.footerLeftFooter}>{leftBlockText}</p>
                </div>
                <div className="footer-right">
                    {/** BLOCK 1**/}
                    <div className={styles.footerBlock1}>
                        <div className={styles.footerBlock1Title}>{footerBlock1.title[lang_]}</div>
                        {
                            footerBlock1.lines.map(
                                (line, index) => (
                                    <div key={index} className={styles.footerBlockLine}>
                                        <Link className={styles.footerLink} href={line.url}>
                                            {line.text[lang_]}
                                        </Link>    
                                    </div>            
                                )
                            )
                        }
                    </div>

                    {/** BLOCK 2 **/}
                    <div className={styles.footerBlock2}>
                    <div className={styles.footerBlock1Title}>{footerBlock2.title[lang_]}</div>

                    {
                            footerBlock2.lines.map(
                                (line, index) => (
                                    <div key={index} className={styles.footerBlockLine}>
                                        <Link className={styles.footerLink} href={line.url}>
                                            {line.text[lang_]}
                                        </Link>    
                                    </div>            
                                )
                            )
                        }

                    </div>

                    <img className={styles.line2} alt="Line" src="/img/line-5.svg" />
                    
                    {/** BLOCK CONTACT **/}
                    <div className={styles.footerContact}>
                        <div className={styles.footerBlock1Title}>{contactTitle[lang_]}</div>  
                        <p className={styles.footerBlockLine}>{phone}</p>
                        <div className={styles.footerBlockLine}>{address}</div>
                        <div className={styles.footerBlockLine}>{email}</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer