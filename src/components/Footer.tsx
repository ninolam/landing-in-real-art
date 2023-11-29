"use client"
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useAppContext } from '../context';
import Link from 'next/link';
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";



const Footer = () => {

    //Get the language of the global context
    const {lang, setLang} = useAppContext()

    const FIREBASE_FOOTER_COLLECTION = 'Footer'

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

    useEffect(() => {
        const fetchData = async () => {
            const dataDoc      = collection(db, FIREBASE_FOOTER_COLLECTION);
            const dataSnapshot = await getDocs(dataDoc);
            const dataList     = dataSnapshot.docs.map(doc => doc.data());

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
            setTwitterUrl(dataList[1]['twitterUrl'])
            setInstagramUrl(dataList[1]['instagramUrl'])
            setLinkedInUrl(dataList[1]['linkedInUrl'])
            setleftBlockText(dataList[1]['text'][lang])

            //Right block  
            const email   = dataList[0]['Email'];
            const phone   = dataList[0]['Telephone'];
            const address = dataList[0]['Adresse'];
            setEmail(email)   
            setPhone(phone)
            setAddress(address)
            

        }
    
        fetchData();
        
      }, [lang]);

    return (
        <>
            <div className="footer">
                <div className="frame-12">
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
                    <p className="text-wrapper-9">{leftBlockText}</p>
                </div>
                <div className="frame-14">
                    <div className="group-9">
                    <div className="text-wrapper-10">Nos pages</div>
                    <div className="text-wrapper-11">Accueil</div>
                    <div className="text-wrapper-12">A propos</div>
                    <div className="text-wrapper-13">Marketplace</div>
                    <div className="text-wrapper-14">FAQ</div>
                    </div>
                    <div className="group-10">
                    <div className="text-wrapper-10">Entreprise</div>
                    <div className="text-wrapper-11">Equipes</div>
                    <div className="text-wrapper-12">Partenaire</div>
                    <div className="text-wrapper-13">CGU</div>
                    </div>
                    <img className="line-2" alt="Line" src="/img/line-5.svg" />
                    <div className="group-11">
                    <div className="text-wrapper-10">Contact</div>
                    <p className="text-wrapper-11">{phone}</p>
                    <div className="text-wrapper-12">{address}</div>
                    <div className="text-wrapper-13">{email}</div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer