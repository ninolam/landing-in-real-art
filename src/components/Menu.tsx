"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDoc, doc } from "firebase/firestore";


const Menu = () => {
    const [isSticky, setSticky] = useState(false);

    const FIREBASE_MENU_COLLECTION = 'Menu'
    
    const FIREBASE_KEY_PRESALE     = 'Presale'
    const FIREBASE_KEY_TESTNET     = 'Testnet'
    const FIREBASE_KEY_COMMUNITY   = 'Community'
    const FIREBASE_KEY_TEAM        = 'Team'
    const FIREBASE_KEY_ABOUT       = 'About'
    const LANGUAGE                 = 'FR'

    const [community, setCommunity] = useState<string>('');
    const [team, setTeam]           = useState<string>('');
    const [about, setAbout]         = useState<string>('');
    const [presale, setPresale]     = useState<string>('');
    const [testnet, setTestnet]     = useState<string>('');

    useEffect(() => {
        const fetchText = async () => {
            const menuCollection = collection(db, FIREBASE_MENU_COLLECTION);
            const menuDocuments = await getDocs(menuCollection);
            const menuData     = menuDocuments.docs.map(doc => doc.data());
            console.log(menuData)
            //Index 0 ===> Menu_Buttons
            setPresale(menuData[0][FIREBASE_KEY_PRESALE][LANGUAGE])
            setTestnet(menuData[0][FIREBASE_KEY_TESTNET][LANGUAGE])
            //Index 1 ===> Menu_Elements
            setCommunity(menuData[1][FIREBASE_KEY_COMMUNITY][LANGUAGE])   
            setTeam(menuData[1][FIREBASE_KEY_TEAM][LANGUAGE])
            setAbout(menuData[1][FIREBASE_KEY_ABOUT][LANGUAGE])
        }
    
        fetchText();
        
      }, []);


    // Use Effect to stick the menu at the top when scrolling down
    useEffect(() => {    
        const checkSticky = () => {
            const scrollTop = window.scrollY;
            let divOffsetTop = document.getElementById('menu')?.offsetTop
            divOffsetTop = (divOffsetTop === undefined)?0:divOffsetTop
            setSticky(scrollTop >= divOffsetTop)
        }
        window.addEventListener('scroll', checkSticky);
        return () => {
            window.removeEventListener('scroll', checkSticky);
    }
      }, []);
      
    return (
        <div className={isSticky ? 'menu-sticky' : 'menu'} id="menu">
            <img className="logo-2" alt="Logo" src="/img/logo.png" />
            <div className="wrapper-link">
                <div className="div-2">
                <div className="add" />
                <div className="link-text">
                    <Link className="menu-link-element" href="/">
                        {community}
                    </Link>
                </div>
                <div className="link-text">
                    <Link className="menu-link-element" href="/">
                        {team}
                    </Link>
                </div>
                <div className="link-text">
                    <Link className="menu-link-element" href="/">
                        {about}
                    </Link>
                </div>
                <div className="link-text">
                    <Link className="menu-link-element" href="/">
                        Ressources
                    </Link>
                </div>
                </div>
                <div className="div-2">
                <button className="button-5">
                    <div className="text-wrapper-5">{presale}</div>
                </button>
                <button className="button">
                    <div className="text-wrapper-5">{testnet}</div>
                </button>
                </div>
            </div>
        </div>

    )
}

export default Menu