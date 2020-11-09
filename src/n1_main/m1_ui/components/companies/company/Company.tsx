import React from "react";
import styles from "./Company.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getStationsTC} from "../../../../m2_bll/companies-reducer";
import {CompanyType} from "../../../../m3_dal/companies-api";
import {AppRootStateType} from "../../../../m2_bll/store";

export const Company = React.memo((props: PropsType) => {
    const dispatch = useDispatch()
    const currentCompanyID = useSelector<AppRootStateType, string | undefined>
    (state => state.companiesState.currentCompany?.id)

    const handleClickCompany = () => {
        dispatch(getStationsTC(props.companies))
    }
    return (
        <div className={styles.company}>
            <button className={styles.button}
                    onClick={handleClickCompany}
                    disabled={currentCompanyID === props.companies.id}>
                <div>Company: "{props.companies.company}"</div>
                <div>City: {props.companies && props.companies.location.city}</div>
            </button>
        </div>
    )
})

type PropsType = {
    companies: CompanyType
}