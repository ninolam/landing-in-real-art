import React from 'react'
import styles from './TestPage.module.scss'

const TestPage = () => {
  return (
    <>
    <div className={styles["header"]}>
        <h1>Title</h1>
        <button>Header Button</button>
    </div>
    <div className={styles["image-grid"]}>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
        <div className={styles["image-container"]}>
        <img src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/rectangle-39770.svg"/>
            <button>Button 1</button>
        </div>
    </div>
    </>
  )
}

export default TestPage