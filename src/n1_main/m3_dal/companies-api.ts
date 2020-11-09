import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.citybik.es/v2/"
})

export const companiesAPI = {
    getCompanies() {
        return instance.get<{ networks: Array<CompanyType> }>("networks?fields=id,company,location").then(r => r.data)
    },
    getStations(id: string) {
        return instance.get<{ network: CompanyType }>(`networks/${id}`).then(r => r.data)
    }
}

export type CompanyType = {
    company: string
    id: string
    location: LocationType
    stations: Array<StationType>
}

export type LocationType = {
    city: string
    country: string
    latitude: number
    longitude: number
}

export type StationType = {
    empty_slots: number
    extra: ExtraType
    free_bikes: number
    id: string
    latitude: number
    longitude: number
    name: string
    timestamp: string
}

export type ExtraType = {
    address: string
    ebikes: number
    electric_free: number
    electric_slots: number
    normal_bikes: number
    normal_free: number
    normal_slots: number
    slots: number
    uid: string
}