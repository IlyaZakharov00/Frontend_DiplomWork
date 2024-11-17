import { TTrainMain } from "../Train/Train"

export type TSeats = {
    responseFromServer: any,
    departureID: string,
    choiceTypeCoach: string,
    choiceNumberCoach: string,
    choiceCoach: any,
    train: TTrainMain | null,
    loading: boolean,
    error: boolean | null,
}


export type TSeatsR = {
    searchSeatsState: TSeats
}