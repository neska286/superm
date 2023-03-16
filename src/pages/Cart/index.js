import React from 'react'
import styles from './cart.module.css'

const Cart = () => {
  return (
    <section className={styles.cartLayout}>
        <h1>Your Cart</h1>
        <p>You have not added any product to your cart yet.</p>
        {/* if the cart has product */}
        <table className={`${styles.table} ${styles.tableCart}`}>
              <thead>
                <tr>
                  <th width="25%" className={styles.thProduct}>
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td>
                        {/* <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "} */}
                       product name
                      </td>
                      <td>product.price</td>
                      <td>product.quantity</td>
                      <td>
                        <strong>price*quantity</strong>
                      </td>
                    </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className={styles.cartHighlight}>Total</th>
                  <th className={styles.cartHighlight}>total Price</th>
                </tr>
              </tfoot>
            </table>
            <form class="pay-form">
            <p>Enter your email and then click on pay and your products will be delivered to you on the same day!<br/>
            <em>Enter your own Stripe Publishable Key in Cart.js for the checkout to work</em></p>
            <label class={styles.label}>Email<span class={styles.inputRequired}>*</span><div>
            <input type="email" placeholder="Email" class={styles.input} required="" value=""/></div>
            </label>
            <button class={`${styles.btn} ${styles.btnDefault}`} type="submit">Pay</button>
            </form>
    </section>
  )
}

export default Cart
