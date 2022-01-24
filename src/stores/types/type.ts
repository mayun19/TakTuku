export enum ActionType {
    ISLOGGEDIN = "isLoggedIn"
}

export interface actionIsLoggedIn {
    type: ActionType.ISLOGGEDIN
    payload: boolean
}

export type Action = actionIsLoggedIn
export type State = {
    isLoggedIn: boolean
}