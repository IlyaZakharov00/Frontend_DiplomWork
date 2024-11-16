export type TPassangersState = {
    countAdult: number;
    countChild: number;
    countChildWithoutSeat: number;
}

export type TPassangersStateR = {
    passangersState:TPassangersState
}

export type TPassangersDataState = {
    allPassanger: any[];
}

export type TPassangersDataStateR = {
    passangersDataState:TPassangersDataState
}