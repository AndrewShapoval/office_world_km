import {
    companiesReducer,
    InitialStateType,
    setCompaniesAC, setCurrentCompanyAC,
    setCurrentStationsAC,
} from "./companies-reducer";
import {CompanyType, StationType} from "../m3_dal/companies-api";
import {RequestStatusType} from "./app-reducer";

let startState: InitialStateType = {
    companies: [] as Array<CompanyType>,
    currentCompany: null as CompanyType | null,
    currentStations: [] as Array<StationType>,
    status: "idle" as RequestStatusType,
    favoriteStations: [""] as Array<string>
};

test('Companies and current company should be added', () => {
    const action = setCompaniesAC([{
        company: ["ЗАО «СитиБайк»"],
        id: "velobike-moscow",
        location: {city: "Moscow", country: "RU", latitude: 55.75, longitude: 37.616667},
        stations: []
    }, {
        company: ["Gobike A/S"],
        id: "bycyklen",
        location: {city: "Copenhagen", country: "DK", latitude: 55.673582, longitude: 12.564984},
        stations: []
    }]);

    const endState = companiesReducer(startState, action)

    expect(endState.companies[0].id).toBe("velobike-moscow");
    expect(endState.companies[1].location.city).toBe("Copenhagen");
    expect(endState.currentCompany?.company).toStrictEqual(["ЗАО «СитиБайк»"]);
});

test('Stations should be added', () => {
    const action = setCurrentStationsAC([
        {
            empty_slots: 4,
            extra: {
                address: "ст. м. Кропоткинская (выход к Гоголевскому бульвару)",
                ebikes: 1,
                electric_free: 0,
                electric_slots: 0,
                normal_bikes: 8,
                normal_free: 4,
                normal_slots: 12,
                slots: 12,
                uid: "0001"
            },
            free_bikes: 9,
            id: "c8a5761ea95e927808b2f37fd65a00f6",
            latitude: 55.7449006,
            longitude: 37.6020183,
            name: "ст. м. Кропоткинская (выход к Гоголевскому бульвару)",
            timestamp: "2020-10-27T22:48:39.333000Z"
        }]);

    const endState = companiesReducer(startState, action)

    expect(endState.currentStations[0].id).toBe("c8a5761ea95e927808b2f37fd65a00f6");
});

test('Current company should be added', () => {
    const action = setCurrentCompanyAC({
        company: ["Urban Infrastructure Partner"],
        id: "baerum-bysykkel",
        location: {
            city: "Bærum",
            country: "NO",
            latitude: 59.89455,
            longitude: 10.546343
        },
        stations: []
    });

    const endState = companiesReducer(startState, action)

    expect(endState.currentCompany?.company).toStrictEqual(["Urban Infrastructure Partner"]);
});