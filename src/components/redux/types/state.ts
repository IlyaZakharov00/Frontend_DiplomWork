import { TCities } from "./citiy";
import { TDates } from "./dates";
import { TClass } from "./class";
import { TComfortOptions } from "./comfortOptions";
import { TPrice } from "./price";
import { TTimes } from "./times";

export type IState = {
    cities: TCities,
    dates: TDates,
    class: TClass,
    comfortOptions: TComfortOptions,
    prices: TPrice,
    times: TTimes,
    limit: string,
    offset: string,
    sort: string,
    isOpenSearchTicketsPage: boolean,
}