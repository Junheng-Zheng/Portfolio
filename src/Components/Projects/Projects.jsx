import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";


export const Projects = () => {
return (
    <div className={styles.project}>
      <div className={styles.projectslide}>
        <img className={styles.projectslideimage} src="./public/assets/projectAssets/weatherlite.jpg" alt="weatherlite"></img>
          <div className={styles.slideheader}>
            <h2>WeatherLite</h2>
          </div>
          <div className={styles.projectslidedetail}>
            <div>
              <p>A basic and elegant weather app. </p>
              <p>Created with flutter.</p>
            </div>
            <div className={styles.projectslidebutton}>
              <a>Details</a>
            </div>
          </div>
      </div>
      {/* <div className={styles.projectslide}>
        <img className={styles.projectslideimage} src="./public/assets/projectAssets/weatherlite.jpg" alt="weatherlite"></img>
          <div className={styles.slideheader}>
            <h2>DBell.ai</h2>
          </div>
          <div className={styles.projectslidedetail}>
            <div>
              <p>An AI fitness trainer using openAPI. </p>
              <p>Created with Vite and React.</p>
            </div>
            <div className={styles.projectslidebutton}>
              <a>Details</a>
            </div>
          </div>
      </div> */}
      <div className={styles.projectslide}>
        <img className={styles.projectslideimage} src="./public/assets/projectAssets/discmanhattan.jpg" alt="weatherlite"></img>
          <div className={styles.slideheader}>
            <h2>Disc. Manhattan</h2>
          </div>
          <div className={styles.projectslidedetail}>
            <div>
              <p>A website showcasing Manhattan </p>
              <p>Utilized HTML, CSS, JS, and PHP.</p>
            </div>
            <div className={styles.projectslidebutton}>
              <a href= "#about">Details</a>
            </div>
          </div>
      </div>
    </div>
  );
}

