import React from 'react'
import styles from './navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
       <a href="/" className={styles.navBrand}>SuperM</a>
       <ul>
        <li className={styles.navItem}>
          {/* <a href='/' className={styles.active} >Home</a> */}
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li  className={styles.navItem}>
        {/* <a href='/' >About Us</a> */}
        <NavLink exact activeClassName={styles.active} to="/about">
        About Us
          </NavLink>
          </li>
        <li className={styles.navItem}>
        {/* <a href='/' >Products</a> */}
        <NavLink exact activeClassName="active" to="/products">
        Products
          </NavLink>
          </li>
        <li  >
        {/* <a href='/' className={`${styles.navItem} ${styles.navCart} ${styles.btn}`} >Cart</a> */}
        <NavLink  className={`${styles.navItem} ${styles.navCart} ${styles.btn}`} to="cart">
        Cart
          </NavLink>
          </li>
       </ul>
        
        </nav>
  )
}

export default Navbar