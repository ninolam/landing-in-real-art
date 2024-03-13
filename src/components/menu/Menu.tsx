"use client"
import styles from './Menu.module.scss'
import Link from 'next/link';
import { useAppContext } from "../../context";
import LanguageSelector from "../language/LanguagaSelector";
import { Lang  } from "../../types/types";
import LogoIraMenu from './LogoIraMenu';
import useSharedLogicMenu from './useSharedLogicMenu';
import classNames from 'classnames'
import MenuMobile from './MenuMobile';
import { useState } from 'react';

const Menu = () => {

  const {lang} = useAppContext()
  const lang_ = lang as Lang

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }
  const {
    isSticky, isMobile,
    community, setCommunity, team, setTeam, about, setAbout, 
    resources, setResources, communityLink, setCommunityLink, 
    teamLink, setTeamLink, aboutLink, setAboutLink, 
    resourcesLink, setResourcesLink, presale, setPresale,
    testnet, setTestnet
  } = useSharedLogicMenu()

    return (
        <>
        
        <div className={(isMobile || isSticky) ? styles.headerSticky : styles.header} id="menu">
          <LogoIraMenu/>
          <div className={styles.wrapperLink}>

            {!isMobile ? 
                <div className={styles.wrapperLinkMenu}>
                <div className={styles.linkText}></div>
                <div className={styles.linkText2}>
                  <div className={styles.communaut}>
                    <Link className={styles.menuLinkElement} href={`/home${communityLink}`}>
                      {community[lang_]}
                    </Link>
                  </div>
                </div>
                <div className={styles.linkText2}>
                  <div className={styles.equipe}>
                    <Link className={styles.menuLinkElement} href={`/home${teamLink}`}>
                      {team[lang_]}
                    </Link>
                  </div>
                </div>
                <div className={styles.linkText2}>
                  <div className={styles.aPropos2}>
                    <Link className={styles.menuLinkElement} href={aboutLink}>
                      {about[lang_]}
                    </Link>
                  </div>
                </div>
                <div className={styles.linkText2}>
                  <div className={styles.ressources}>
                    <Link className={styles.menuLinkElement} href={resourcesLink}>
                      {resources[lang_]}
                    </Link>
                  </div>
                </div>
              </div>
            : ''}
            

            {!isMobile ? 
                <>
                    <div className={styles.wrapperButton}>
                        <div className={styles.menuButtonPresale}>
                        <div className={styles.prSale}>
                            <Link className={styles.linkPresale} href="/presale">
                            <div className={styles.testnet}>{presale[lang_]}</div> 
                            </Link>    
                        </div>
                        </div>
                        <div className={styles.button2}>
                            <Link className={styles.linkPresale} href="/testnet">
                            <div className={styles.testnet}>{testnet[lang_]}</div>
                            </Link>  
                        </div>
                    </div>
                    <LanguageSelector isClosed={isMenuMobileOpen}/>
                </>
            : 
            <>
              <LanguageSelector isClosed={isMenuMobileOpen}/>
              {/*  Hamburger Menu Begin */}
              <div id="hamburgerMenu" onClick={toggleMenu}>
                <svg className={classNames(styles.menuStyle, styles.menuInstance)} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 16.7109H20.25M3.75 7.71094H20.25H3.75ZM3.75 12.2109H20.25H3.75Z" stroke="#F6F8FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round">
                    </path>
                </svg>
              </div>
              <MenuMobile isOpen={isMenuMobileOpen} handleIsOpen={toggleMenu}/>
              {/*  Hamburger Menu End*/}
            </>
            }
          </div>
        </div>
        </>      
        )
}

export default Menu
