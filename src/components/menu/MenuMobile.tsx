import React, { FC } from 'react'
import styles from './MenuMobile.module.scss'
import useSharedLogicMenu from './useSharedLogicMenu';
import { useAppContext } from '../../context';
import Link from 'next/link';
import { Lang } from '../../types/types';

export interface MenuMobileProps {
    isOpen: boolean;
    handleIsOpen: () => void
}


const MenuMobile: FC<MenuMobileProps> = ({isOpen, handleIsOpen}) => {
    const {lang} = useAppContext()
    const lang_ = lang as Lang
  
    const {
        community, setCommunity, team, setTeam, about, setAbout, 
        resources, setResources, communityLink, setCommunityLink, 
        teamLink, setTeamLink, aboutLink, setAboutLink, 
        resourcesLink, setResourcesLink, presale, setPresale,
        testnet, setTestnet
      } = useSharedLogicMenu()
    
  return (
    <div id="navBarMenuMobile" className={isOpen ? styles.navBarMenuMobileOpen : styles.navBarMenuMobile}>
        <div className={styles.menuMobileItem}>
            <Link href={`/home${communityLink}`} onClick={handleIsOpen}>
                {community[lang_]}
            </Link>
        </div>
        <div className={styles.menuMobileItem}>
            <Link href={`/home${teamLink}`} onClick={handleIsOpen}>
                {team[lang_]}
            </Link>
        </div>
        <div className={styles.menuMobileItem}>
            <Link href={aboutLink} onClick={handleIsOpen}>
                {about[lang_]}
            </Link>
        </div>
        {/* <div className={styles.menuMobileItem}>
            
                <Link className={styles.menuLinkElement} href={resourcesLink} onClick={handleIsOpen}>
                    {resources[lang_]}
                </Link>
            
        </div> */}
        <div className={styles.wrapperButton}>
            <div className={styles.menuMobileButton}>
                <Link className={styles.linkPresale} href="/presale">
                    <div className={styles.testnet}>{presale[lang_]}</div> 
                </Link>
            </div>
            <div className={styles.menuMobileButton}>
                <Link className={styles.linkPresale} href="/testnet">
                    <div className={styles.testnet}>{testnet[lang_]}</div>
                </Link>  
            </div>
        </div>
    </div>     
  )
}

export default MenuMobile