"use client"
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore/lite';
import { getDoc, doc } from "firebase/firestore";
import { useAppContext } from "../context";
import LanguageSelector from "./LanguagaSelector";
import { Lang, MenuButtons, MenuData, MenuElements, defaultLangObject } from "../types/types";


const Menu = () => {
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    const [isSticky, setSticky] = useState(false);

    const FIREBASE_MENU_COLLECTION = 'Menu'
    
    const [community, setCommunity] = useState<string>('')
    const [team, setTeam]           = useState<string>('')
    const [about, setAbout]         = useState<string>('')
    const [presale, setPresale]     = useState<string>('')
    const [testnet, setTestnet]     = useState<string>('')

    const defaultMenuButtons = {
        Presale: defaultLangObject,
        Testnet: defaultLangObject
    }
    const defaultMenuElements = {
        About: defaultLangObject,
        Community: defaultLangObject,
        Team: defaultLangObject
    }

    const [menuButtons, setMenuButtons]    = useState<MenuButtons>(defaultMenuButtons)
    const [menuElements, setMenuElements] = useState<MenuElements>(defaultMenuElements)
    let lastScrollTop = 0; // To keep track of scroll direction
    
    useEffect(() => {
        const fetchData = async () => {
            const menuCollection = collection(db, FIREBASE_MENU_COLLECTION);
            const menuDocuments = await getDocs(menuCollection);
            const menuData     = menuDocuments.docs.map(doc => doc.data() as MenuData);
            
            //Index 0 ===> Menu_Buttons
            setMenuButtons(menuData[0] as MenuButtons)
            setPresale(menuData[0].Presale[lang_])
            setTestnet(menuData[0].Testnet[lang_])

            //Index 1 ===> Menu_Elements
            setMenuElements(menuData[1] as MenuElements)
            setCommunity(menuData[1].Community[lang_])   
            setTeam(menuData[1].Team[lang_])
            setAbout(menuData[1].About[lang_])
        }
    
        fetchData();

    }, [])

    
    useEffect(() => {
        // Menu_Buttons
        setPresale(menuButtons.Presale[lang_])
        setTestnet(menuButtons.Testnet[lang_])

        // Menu_Elements
        setCommunity(menuElements.Community[lang_])   
        setTeam(menuElements.Team[lang_])
        setAbout(menuElements.About[lang_])        
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