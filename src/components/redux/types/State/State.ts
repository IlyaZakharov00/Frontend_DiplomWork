import { TCitiesState } from "../Cities/CitiesState"
import { TLastTicketsState } from "../LastTickets/LastTicketsState"
import { TMenu } from "../Menu/menu"
import { TModalState } from "../Modals/ModalState"
import { TPassangersState, TPassangersDataState } from "../Passengers/PassangersState"
import { TPayInfoPerson } from "../PayInfo/PayInfo"
import { TPriceState } from "../Price/PriceState"
import { TSeats } from "../Seats/SeatsState"
import { TTicketsState } from "../Tickets/state"

export type TState = {
    searchTicketsState: TTicketsState,
    sortedCitiesList: TCitiesState,
    searchSeatsState: TSeats,
    lastTickets: TLastTicketsState,
    priceForTickets: TPriceState,
    modalWindows: TModalState,
    passangersState: TPassangersState,
    passangersDataState: TPassangersDataState,
    menuState: TMenu,
    payInfo: TPayInfoPerson,
}