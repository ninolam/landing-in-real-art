"use client"
import styles from './Menu.module.scss'
import Link from 'next/link';
import { useAppContext } from "../../context";
import LanguageSelector from "../language/LanguagaSelector";
import { Lang, MenuButtons, MenuData, MenuElements, defaultLangObject } from "../../types/types";
import HamburgerMenu from './HamburgerMenu';
import LogoIraMenu from './LogoIraMenu';
import useSharedLogicMenu from './useSharedLogicMenu';

const Menu = () => {

  const {lang} = useAppContext()
  const lang_ = lang as Lang

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
        
        <div className={isSticky ? styles.headerSticky : styles.header} id="menu">
          <LogoIraMenu/>
          <div className={styles.wrapperLink}>

            {!isMobile ? 
                <div className={styles.wrapperLinkMenu}>
                <div className={styles.linkText}></div>
                <div className={styles.linkText2}>
                  <div className={styles.communaut}>
                    <Link className={styles.menuLinkElement} href={communityLink}>
                      {community[lang_]}
                    </Link>
                  </div>
                </div>
                <div className={styles.linkText2}>
                  <div className={styles.equipe}>
                    <Link className={styles.menuLinkElement} href={teamLink}>
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
                            <Link className={styles.linkPresale} href="/presale">
                            <div className={styles.testnet}>{testnet[lang_]}</div>
                            </Link>  
                        </div>
                    </div>
                    <LanguageSelector/>
                </>
            : <HamburgerMenu/>
            }
          </div>
        </div>
        </>      
        )
}

export default Menu
