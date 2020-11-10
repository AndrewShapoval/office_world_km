import React from "react";
import styles from "./Station.module.scss"
import {StationType} from "../../../../m3_dal/companies-api";
import favorite from "../../../../../assets/img/like.svg"
import like from "../../../../../assets/img/heart.svg"
import {useDispatch, useSelector} from "react-redux";
import {removeStationAC, setFavoriteStationAC} from "../../../../m2_bll/companies-reducer";
import {AppRootStateType} from "../../../../m2_bll/store";

export const Station = React.memo((props: PropsType) => {

    const dispatch = useDispatch()
    const favoriteStations = useSelector<AppRootStateType, Array<string>>(state => state.companiesState.favoriteStations)
    const setFavoriteStation = () => {
        dispatch(setFavoriteStationAC(props.station.id))
    }
    const removeFavoriteStations = () => {
        dispatch(removeStationAC(props.station.id))

    }
    const favoriteStation = favoriteStations.find(id => id === props.station.id)

    return (
        <div className={styles.station}>
            Address: {props.station.name}
            {!favoriteStation
                ? <button className={styles.button} onClick={setFavoriteStation}>
                    <img src={like} alt="Do you want to add to favourites?"/>
                </button>
                : <button className={styles.button} onClick={removeFavoriteStations}>
                    <img src={favorite} alt="Favorite"/>
                </button>
            }
            <hr/>
        </div>
    )
})

type PropsType = {
    station: StationType
}