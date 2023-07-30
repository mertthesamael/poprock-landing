import { Logo } from '@/services/icons/Logo'
import styles from './style.module.scss'
import React, { FC } from 'react'
import { Basket } from '@/services/icons/Basket'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <header className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__inner__logo}>
                <Logo />
                <h1>Pop Rock Crystal</h1>
            </div>
            <div className={styles.header__inner__nav}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </nav>
                <div className={styles.header__inner__nav__basket}>
                    <Basket />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;