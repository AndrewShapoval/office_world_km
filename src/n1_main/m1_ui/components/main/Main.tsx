import React from "react";
import {Companies} from "../companies/Companies";
import styles from "./Main.module.css"
import {Stations} from "../stations/Stations";

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <h1>CityBikes</h1>
            <div className={styles.mainContainer}>
                <Companies/>
                <Stations/>
            </div>
        </div>
    )
}