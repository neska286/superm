import React from 'react'
import styles from './home.module.css'

const Home = () => {
  return (
    <section >
    <div className={styles.homeLayout}>
    <div>
      <h1>Online shopping simplified</h1>
      <p >Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
      <a href="/" className={styles.btn}>Start shopping</a>
    </div>
    <img src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg" width="350" height="240" 
    className={styles.rounded} alt=""/>
    </div>
    </section>
  )
}

export default Home