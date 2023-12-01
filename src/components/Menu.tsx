"use client"
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDoc, doc } from "firebase/firestore";
import { useAppContext } from "../context";
import LanguageSelector from "./LanguagaSelector";
import { MenuData } from "../types/types";


const Menu = () => {
    const {lang} = useAppContext()
    const [isSticky, setSticky] = useState(false);

    const FIREBASE_MENU_COLLECTION = 'Menu'
    
    const [community, setCommunity] = useState<string>('');
    const [team, setTeam]           = useState<string>('');
    const [about, setAbout]         = useState<string>('');
    const [presale, setPresale]     = useState<string>('');
    const [testnet, setTestnet]     = useState<string>('');

    let lastScrollTop = 0; // To keep track of scroll direction
    

    useEffect(() => {
        
        const fetchText = async () => {
            const menuCollection = collection(db, FIREBASE_MENU_COLLECTION);
            const menuDocuments = await getDocs(menuCollection);
            const menuData     = menuDocuments.docs.map(doc => doc.data() as MenuData);
            
            //Index 0 ===> Menu_Buttons
            setPresale(menuData[0].Presale[lang])
            setTestnet(menuData[0].Testnet[lang])
            //Index 1 ===> Menu_Elements
            setCommunity(menuData[1].Community[lang])   
            setTeam(menuData[1].Team[lang])
            setAbout(menuData[1].About[lang])
        }
    
        fetchText();
        
      }, [lang]);


    // Use Effect to stick the menu at the top when scrolling down
    useEffect(() => {    
        const checkSticky = () => {
            const scrollTop = window.scrollY;
            const menuElement = document.getElementById('menu');

            if (menuElement) {
            const menuOffsetTop = menuElement.offsetTop;
            
            // Determine scroll direction
            const scrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Update lastScrollTop, but never less than 0

            // Set 'isSticky' based on scroll position and direction
            if (scrollingDown && scrollTop >= menuOffsetTop) {
                setSticky(true);
            } else if (!scrollingDown) {
                setSticky(false);
            }
            }

            /*
            const scrollTop = window.scrollY;
            let divOffsetTop = document.getElementById('menu')?.offsetTop
            divOffsetTop = (divOffsetTop === undefined)?0:divOffsetTop
            setSticky(scrollTop >= divOffsetTop)
            */
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
                <button className="button-presale">
                    <div className="text-wrapper-5">{presale}</div> 
                </button>
                <button className="button">
                    <div className="text-wrapper-5">{testnet}</div>
                </button>
                </div>

              <LanguageSelector/>
            </div>
        </div>

    )
}

export default Menu