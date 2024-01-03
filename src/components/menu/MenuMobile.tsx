import React, { FC } from 'react'
import styles from './MenuMobile.module.scss'

export interface MenuMobileProps {
    isOpen: boolean
}


const MenuMobile: FC<MenuMobileProps> = ({isOpen}) => {
  return (
    <div id="navBarMenuMobile" className={styles.navBarMenuMobile}>
        
    </div>     
  )
}

export default MenuMobile