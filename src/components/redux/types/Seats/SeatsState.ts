export type TSeats = {
    responseFromServer: any,
    departureID: string,
    choiceTypeCoach: string,
    choiceNumberCoach: string,
    choiceCoach: any,
    train: any,
    loading: boolean,
    error: boolean | null,
}
export type TSeatsR = {
    searchSeatsState:TSeats
}