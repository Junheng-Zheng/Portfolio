import React, { useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return <div className={styles.hero}>
    <div className={styles.heroinformation}>
        <h2>Junheng Zheng</h2>
        <p>Web Developer ✦ Full-Stack Dev</p>
        <a className={styles.herocontact} href="#contact">Contact</a>
        <img className={styles.heroscroll} src= "./assets/heroAssets/loading.gif" alt="loadinggif"></img>
    </div>
        {/* <img className={styles.heroprofile} src= "./public/assets/heroAssets/junheropic.jpg" alt="profilepic"></img> */}
    </div>
}

export default Hero