import React, { FC } from 'react'
import styles from './MenuMobile.module.scss'
import useSharedLogicMenu from './useSharedLogicMenu';
import { useAppContext } from '../../context';
import Link from 'next/link';
import { Lang } from '../../types/types';

export interface MenuMobileProps {
    isOpen: boolean
}


const MenuMobile: FC<MenuMobileProps> = ({isOpen}) => {
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
        <div>
            <div className={styles.communaut}>
            <Link className={styles.menuLinkElement} href={communityLink}>
                {community[lang_]}
            </Link>
            </div>
        </div>
        <div>
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
  )
}

export default MenuMobile