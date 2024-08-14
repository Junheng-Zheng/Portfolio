import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return <nav className={styles.navbar}>
    <div className={styles.navbarfixed}>
        <a className={styles.navbaricon} href="/"> JZ</a>
        <input type="checkbox" className={styles.navbarhamburgercheckbox} id="hamburger-toggle"/>
        <label htmlFor="hamburger-toggle" className={styles.navbarhamburgerbutton}>
            <ul className={styles.navbarhamburger}>
                <li className={styles.navbarhamburgerstroke}></li>
                <li className={styles.navbarhamburgerstroke}></li>
                <li className={styles.navbarhamburgerstroke}></li>
            </ul>
        </label>
        <ul className={styles.navbarmenu}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
</nav>

}

export default Navbar