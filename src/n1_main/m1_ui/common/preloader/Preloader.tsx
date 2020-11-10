import React from "react";
import s from "./Preloader.module.scss"
import preloader from "./preloader2.gif"

export const Preloader = () => {
    return(
        <div className={s.wrapper}>
            <img src={preloader} alt="loading..."/>
        </div>
    );
}