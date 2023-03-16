import React, { useState } from 'react'
import styles from './inputs.module.css'
import memesData from '../../memesData'

const Inputs = () => {
   const[memeImage,setMemeImage]=useState("")
   const[isGoingOut,setIsGoingOut] = useState(true)
   const[isThings,setIsThings] = useState(["Thing 1", "Thing 2"])
   function handleAddItem(){
    setIsThings(prevState => [...prevState,`Things ${prevState.length +1}`])
   }

    function getMemeImage(){
    //  const image =    memesData.data.memes.map(item=>(
    //         console.log('item',item.url)
    //     ))
    const memesArray = memesData.data.memes
    console.log(memesArray)
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    console.log(randomNumber)
    const url = memesArray[randomNumber].url
    console.log(url)
    setMemeImage(url)
    }
    function handleChangeOut(){
      setIsGoingOut(prevState=> !prevState)
    }
  
  return (
    <>
    <div className={styles.inputWrapper}>
        <input type="text"  name="shutUp" placeholder='Shut up'/>
        <input type="text"  name="shutUp" placeholder='and take my money'/>
        <div  onClick={handleChangeOut}>
    <h1>{isGoingOut? "Yes":"false"}</h1>
    </div>
    </div>
    <div className={styles.buttonWrapper}>
    <button type="submit" onClick={getMemeImage}>Get a new meme image  🖼</button>
    </div>
    {/* <div>{memeImage}</div> */}
    <div className={styles.memePhoto}>
    <img src={memeImage} alt="meme img" />
    </div>
    <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
      <button onClick={handleAddItem}>Add item</button>
      {isThings.map(item=> (
        <h2>{item}</h2>
      ))}
    </div>
    </>
  )
}

export default Inputs