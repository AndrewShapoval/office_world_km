import {Dispatch} from "redux";
import {companiesAPI, CompanyType, StationType} from "../m3_dal/companies-api";
import {RequestStatusType, setAppStatusAC} from "./app-reducer";

const initialState = {
    companies: [] as Array<CompanyType>,
    currentCompany: null as CompanyType | null,
    currentStations: [] as Array<StationType>,
    status: "idle" as RequestStatusType,
    favoriteStations: [""] as Array<string>
}

export const companiesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_COMPANIES":
            return {...state, companies: action.companies, currentCompany: action.companies[0]}
        case "SET_CURRENT_STATIONS":
            return {...state, currentStations: action.stations}
        case "SET_CURRENT_COMPANY":
            return {...state, currentCompany: action.company}
        case "SET_COMPANIES_STATUS":
            return {...state, status: action.status}
        case "SET_FAVORITE_STATION":
            return {...state, favoriteStations: [action.stationId, ...state.favoriteStations]}
        case "REMOVE_FAVORITE_STATION":
            return {...state, favoriteStations: state.favoriteStations.filter(id => id !== action.stationId)}
        default:
            return state
    }
}

export const setCompaniesAC = (companies: Array<CompanyType>) => ({type: "SET_COMPANIES", companies} as const)
export const setCurrentStationsAC = (stations: Array<StationType>) => ({type: "SET_CURRENT_STATIONS", stations} as const)
export const setCurrentCompanyAC = (company: CompanyType) => ({type: "SET_CURRENT_COMPANY", company} as const)
export const setStationsStatusAC = (status: RequestStatusType) => ({type: "SET_COMPANIES_STATUS", status} as const)
export const setFavoriteStationAC = (stationId: string) => ({type: "SET_FAVORITE_STATION", stationId} as const)
export const removeStationAC = (stationId: string) => ({type: "REMOVE_FAVORITE_STATION", stationId} as const)

export const getCompaniesTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    companiesAPI.getCompanies()
        .then((res) => {
            dispatch(setCompaniesAC(res.networks))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setAppStatusAC("succeeded"))
        })
}

export const getStationsTC = (companies: CompanyType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStationsStatusAC("loading"))
    companiesAPI.getStations(companies.id)
        .then((res) => {
            dispatch(setCurrentStationsAC(res.network.stations))
            dispatch(setCurrentCompanyAC(companies))
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setStationsStatusAC("succeeded"))
        })
}

export type InitialStateType = typeof initialState

type ActionsType =
    ReturnType<typeof setCompaniesAC> |
    ReturnType<typeof setCurrentStationsAC> |
    ReturnType<typeof setCurrentCompanyAC> |
    ReturnType<typeof setAppStatusAC> |
    ReturnType<typeof setStationsStatusAC> |
    ReturnType<typeof setFavoriteStationAC> |
    ReturnType<typeof removeStationAC>

