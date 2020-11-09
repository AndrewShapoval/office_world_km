const initialState = {
    status: "idle" as RequestStatusType
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_APP_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: "SET_APP_STATUS", status} as const)

export type InitialStateType = typeof initialState

type ActionsType = ReturnType<typeof setAppStatusAC>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';