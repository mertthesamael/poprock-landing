import styles from './style.module.scss'
import React, { FC } from 'react'

interface ProductsSectionProps {
  
}

const ProductsSection: FC<ProductsSectionProps> = ({  }) => {
  return (
    <section className={styles.productsSection}>
        <div className={styles.productsSection__title}>
            <h2>All product</h2>
            <hr/>
        </div>
        <div className={styles.productsSection__body}>
            <div className={styles.productsSection__body__filter}>

            </div>
            <div className={styles.productsSection__body__items}>

            </div>
            <div className={styles.productsSection__body__footer}>

            </div>
        </div>
    </section>
  )
}

export default ProductsSection;