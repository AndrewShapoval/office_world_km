import React, {useEffect, useState} from "react";
import {getCompaniesTC, getStationsTC} from "../../../m2_bll/companies-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2_bll/store";
import {Company} from "./company/Company";
import styles from "./Companies.module.css"
import {CompanyType} from "../../../m3_dal/companies-api";
import {Preloader} from "../../common/preloader/Preloader";
import {RequestStatusType} from "../../../m2_bll/app-reducer";

export const Companies = () => {

    const dispatch = useDispatch()
    const companies = useSelector<AppRootStateType, Array<CompanyType>>(state => state.companiesState.companies)
    const currentCompany = useSelector<AppRootStateType, CompanyType | null>(state => state.companiesState.currentCompany)
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.appState.status)

    useEffect(() => {
        dispatch(getCompaniesTC())
    }, [])

    useEffect(() => {
        currentCompany && dispatch(getStationsTC(currentCompany))
    }, [currentCompany])

    return (
        <div className={styles.companies}>
            <h2 className={styles.h2}>Companies:</h2>
            {status === "loading" ? <Preloader/> : null}
            {companies ? companies.map(c => <Company key={c.id} companies={c} />) : null}
        </div>
    )
}