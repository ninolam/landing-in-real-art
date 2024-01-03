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
            <Link href={communityLink}>
                {community[lang_]}
            </Link>
        </div>
        <div>
            <Link href={teamLink}>
                {team[lang_]}
            </Link>
        </div>
        <div>
            <Link href={aboutLink}>
                {about[lang_]}
            </Link>
        </div>
        <div>
            <Link className={styles.menuLinkElement} href={resourcesLink}>
                {resources[lang_]}
            </Link>
        </div>
    </div>     
  )
}

export default MenuMobile