import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2_bll/store";
import {CompanyType, StationType} from "../../../m3_dal/companies-api";
import styles from "./Stations.module.scss"
import {Preloader} from "../../common/preloader/Preloader";
import {RequestStatusType} from "../../../m2_bll/app-reducer";
import {Station} from "./station/Station";

export const Stations = () => {

    const stations = useSelector<AppRootStateType, Array<StationType>>(state => state.companiesState.currentStations)

    const currentCompany = useSelector<AppRootStateType, CompanyType | null>(state => state.companiesState.currentCompany)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.companiesState.status)

    return (
        <div className={styles.stations}>
            <h2 className={styles.h2}>Stations "{currentCompany && currentCompany.company}":</h2>
            <h3 className={styles.h3}>City: {currentCompany && currentCompany.location.city}</h3>
            <div className={styles.totalStations}>Total stations: {stations && stations.length}</div>
            {status === "loading" ? <Preloader/> : null}
            {status !== "loading" && stations && stations.map(s => <Station key={s.id} station={s}/>)}
        </div>
    )
}