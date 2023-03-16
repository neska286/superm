import React from 'react'
import styles from "../../products.module.css";


const Product = ({data}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
      <div className={styles.productQuantityContainer}>
        <div className={styles.productQuantity}>3</div>
        </div>
        <a href="/">
          <img
            width="100"
            height="100"
            class="product-details-image"
            src={data.productImage}
            alt="Cheese"
          />
        </a>
      </div>
      <div className={styles.productInfo}>
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
      </div>
      <div className={styles.productCheckout}>
        <div>
        <button className={`${styles.btn} ${styles.btnOutline} ${styles.productDelete}`}>x</button>
        </div>
        <button className={`${styles.btn} ${styles.btnOutline}`}>
          ${data.price}
        </button>
      </div>
    </div>
  )
}

export default Product