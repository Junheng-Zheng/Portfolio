import React, { useState, useEffect } from "react";
import styles from "./About.module.css";


export const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutgrid1}>
                <img src= "./public/assets/aboutAssets/junpic.jpg" alt="junprofile"></img>
            </div>
            <div className={styles.aboutgrid2}>
                <div className={styles.aboutgrid2header}> 
                    <h2>Skills</h2>
                    <h2>✦</h2>
                </div>
                <div className={styles.aboutgrid2description}>
                    <p>Full-Stack Dev</p>
                    <p>Web Design</p>
                    <p>App Design</p> 
                </div>           
            </div>
            <div className={styles.aboutgrid3}>
                <div className={styles.aboutgrid3socials}>
                    <img src="./public/assets/aboutAssets/socials/githubicon.png"></img>
                    <img src="./public/assets/aboutAssets/socials/instagramicon.png"></img>
                    <img src="./public/assets/aboutAssets/socials/linkedinicon.png"></img>
                    <img src="./public/assets/aboutAssets/socials/xicon.png"></img>
                </div>
            </div>
            <div className={styles.aboutgrid4}>
                <div className={styles.aboutgrid4techstack}>
                    <img src="./public/assets/aboutAssets/HTML5.png"></img>
                    <img src="./public/assets/aboutAssets/CSS3.png"></img>
                    <img src="./public/assets/aboutAssets/JavaScript.png"></img>
                    <img src="./public/assets/aboutAssets/React.png"></img>
                    <img src="./public/assets/aboutAssets/Python.png"></img>
                    <img src="./public/assets/aboutAssets/Java.png"></img>
                    <img src="./public/assets/aboutAssets/Flutter.png"></img>
                    <img src="./public/assets/aboutAssets/MySQL.png"></img>
                    <img src="./public/assets/aboutAssets/VSCode.png"></img>
                    <img src="./public/assets/aboutAssets/Vite.js.png"></img>
                    <img src="./public/assets/aboutAssets/FileZilla.png"></img>
                    <img src="./public/assets/aboutAssets/PHP.png"></img>
                    <img src="./public/assets/aboutAssets/Adobe Illustrator.png"></img>
                    <img src="./public/assets/aboutAssets/Adobe Photoshop.png"></img>
                    <img src="./public/assets/aboutAssets/Figma.png"></img>
                </div>
            </div>
            <div className={styles.aboutgrid5}>
                <div className={styles.aboutgrid5header}>
                    <h2>ABOUT</h2>
                </div>
                <div className={styles.aboutgrid5details}>
                    <p>Web-Developer studying at RIT</p>
                    <p>Passionate about Web and App development</p>
                    <p>Diverse set of skills eager to put to good use</p>
                </div>
            </div>
        </div>
      );
}

