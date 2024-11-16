export type TPriceState = {
    sumPrice: number,
    air_conditioning: undefined | boolean,
    wifi: { type: string, payload: { price: number, choice: boolean, } },
    linens: { type: string, payload: { price: number, choice: boolean, } },
    choiceSeats: any[],
}

export type TPriceStateR = {
    priceForTickets: TPriceState
}