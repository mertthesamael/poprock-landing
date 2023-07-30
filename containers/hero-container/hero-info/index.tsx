import SecondaryButton from '@/components/Buttons/SecondaryButton';
import styles from './style.module.scss'
import React, { FC } from 'react'
import Link from 'next/link';

interface HeroInfoProps {
  
}

const HeroInfo: FC<HeroInfoProps> = ({  }) => {
  return (
    <div className={styles.heroInfo}>
     <div className={styles.heroInfo__title}>
            <span>Welcome to</span>
            <h1>Pop Rock Crystal Shop!</h1>
    </div>
    <div className={styles.heroInfo__desc}>
            <p>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
    </div>
    <div className={styles.heroInfo__buttons}>
            <SecondaryButton text='SHOP NOW' />
            <Link href={'/'}>about us</Link>
    </div>
    </div>
  )
}

export default HeroInfo;