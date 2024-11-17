import { TCities } from "./citiy";
import { TDates } from "./dates";
import { TClass } from "../Tickets/class";
import { TComfortOptions } from "./comfortOptions";
import { TPrice } from "./price";
import { TTimes } from "./times";

export type TTicketsState = {
    cities: TCities,
    dates: TDates,
    class: TClass,
    comfortOptions: TComfortOptions,
    prices: TPrice,
    times: TTimes,
    limit: number,
    offset: string,
    sort: string,
    responseFromServer: {total_count: number, items:any},
    activePage: number,
    loading: boolean,
    error: boolean | null,
}


export type TTicketsStateR = {
    searchTicketsState:TTicketsState
}

