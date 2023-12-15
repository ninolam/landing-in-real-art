"use client"
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from '../context';
import Link from 'next/link';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { FooterData, Lang } from '../types/types';



const Footer = () => {

    //Get the language of the global context
    const {lang } = useAppContext()
    const lang_ = lang as Lang
    const FIREBASE_FOOTER_COLLECTION = 'Footer'

    const [contactTitle, setContactTitle] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [twitterLogo, setTwitterLogo]     = useState("")
    const [linkedInLogo, setLinkedInLogo]   = useState("")
    const [instagramLogo, setInstagramLogo] = useState("")
    const [twitterUrl, setTwitterUrl]       = useState("")
    const [linkedInUrl, setLinkedInUrl]     = useState("")
    const [instagramUrl, setInstagramUrl]   = useState("")
    const [leftBlockText, setleftBlockText] = useState("")

    const [ourPagesTitle, setOurPagesTitle]     = useState("")
    const [ourCompanyTitle, setOurCompanyTitle] = useState("")

    const [homeLinkText, setHomeLinkText]   = useState("")
    const [homeLinkUrl, setHomeLinkUrl]     = useState("")

    const [aboutLinkText, setAboutLinkText] = useState("")
    const [aboutLinkUrl, setAboutLinkUrl]   = useState("")

    const [marketPlaceLinkText, setMarketPlaceLinkText] = useState("")
    const [marketPlaceLinkUrl, setMarketPlaceLinkUrl] = useState("")

    const [faqLinkText, setFaqLinkText] = useState("")
    const [faqLinkUrl, setFaqLinkUrl]   = useState("")

    const [teamLinkText, setTeamLinkText] = useState("")
    const [teamLinkUrl, setTeamLinkUrl]   = useState("")

    const [partnersLinkText, setPartnersLinkText] = useState("")
    const [partnersLinkUrl, setpartnersLinkUrl]   = useState("")

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
            setleftBlockText(dataList[1].text[lang_])

            //Links block
            setOurPagesTitle(dataList[2].ourPagesTitle[lang_])
            setOurCompanyTitle(dataList[2].ourCompanyTitle[lang_])
            setHomeLinkText(dataList[2].homeLinkText[lang_])
            setAboutLinkText(dataList[2].aboutLinkText[lang_])
            setMarketPlaceLinkText(dataList[2].marketPlaceLinkText[lang_])
            setFaqLinkText(dataList[2].faqLinkText[lang_])
            setTeamLinkText(dataList[2].teamLinkText[lang_])
            setPartnersLinkText(dataList[2].partnersLinkText[lang_])

            setHomeLinkUrl(dataList[2].homeLinkUrl)
            setAboutLinkUrl(dataList[2].aboutLinkUrl)
            setMarketPlaceLinkUrl(dataList[2].marketPlaceLinkUrl)
            setFaqLinkUrl(dataList[2].faqLinkUrl)
            setTeamLinkUrl(dataList[2].teamLinkUrl)
            setpartnersLinkUrl(dataList[2].partnersLinkUrl)

            //Right block  
            const contactTitle = dataList[0]['contactTitle'][lang_];
            const email   = dataList[0].Email;
            const phone   = dataList[0].Telephone;
            const address = dataList[0].Adresse;
            setEmail(email)   
            setPhone(phone)
            setAddress(address)
            setContactTitle(contactTitle)
        }
    
        fetchData();
        
      }, [lang]);

    return (
        <>
            <div className="footer">
                <div className="footer-left">
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
                    <p className="footer-left-footer">{leftBlockText}</p>
                </div>
                <div className="footer-right">
                    <div className="footer-our-pages">
                    <div className="footer-our-pages-title">{ourPagesTitle}</div>
                    <div className="footer-our-pages-line-1">
                        <Link href={homeLinkUrl}>
                            {homeLinkText}
                        </Link>    
                    </div>
                    <div className="footer-our-pages-line-2">
                        <Link href={aboutLinkUrl}>
                            {aboutLinkText}
                        </Link>    
                    </div>
                    <div className="footer-our-pages-line-3">
                        <Link href={marketPlaceLinkUrl}>
                            {marketPlaceLinkText}
                        </Link>    
                    </div>
                    <div className="footer-our-pages-line-4">
                        <Link href={faqLinkUrl}>
                            {faqLinkText}
                        </Link>    
                    </div>
                    </div>
                    <div className="footer-company">
                    <div className="footer-our-pages-title">
                        {ourCompanyTitle}
                    </div>
                    <div className="footer-our-pages-line-1">
                        <Link href={teamLinkUrl}>
                            {teamLinkText}
                        </Link>    
                    </div>
                    <div className="footer-our-pages-line-2">
                        <Link href={partnersLinkUrl}>
                            {partnersLinkText}
                        </Link>
                    </div>
                    <div className="footer-our-pages-line-3">
                        CGU
                    </div>
                    </div>
                    <img className="line-2" alt="Line" src="/img/line-5.svg" />
                    <div className="footer-contact">
                    <div className="footer-our-pages-title">{contactTitle}</div>  
                    <p className="footer-our-pages-line-1">{phone}</p>
                    <div className="footer-our-pages-line-2">{address}</div>
                    <div className="footer-our-pages-line-3">{email}</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer