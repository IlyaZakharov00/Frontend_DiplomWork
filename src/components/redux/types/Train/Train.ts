
export type TTrainMainProps = {
    item: TTrainMain
}

export type TTrainMain = {
    available_seats: number,
    available_seats_info: TAvailableSeatsInfo,
    departure: TDeparture,
    have_air_conditioning: boolean,
    have_first_class: boolean,
    have_fourth_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_wifi: boolean,
    is_express: boolean,
    min_price: number
}

type TDeparture={
    available_seats: number,
    available_seats_info: TAvailableSeatsInfo,
    duration: number,
    from: TFrom,
    have_air_conditioning: boolean,
    have_first_class: boolean,
    have_fourth_class: boolean,
    have_second_class: boolean,
    have_third_class: boolean,
    have_wifi: boolean,
    is_express: boolean,
    min_price: number,
    price_info: TPriceInfo
    to: TTo,
    train: TTrain,
    _id: string
}

type TAvailableSeatsInfo={
    first: number,
    second: number,
    third: number,
    fourth: number,
}

type TTrain = {
    _id: string,
    name: string
}

type TFrom ={
    railway_station_name: string,
    city: {
        _id: string,
        name: string,
    },
    datetime: number,
}

type TTo = {
    railway_station_name: string,
    city: {
        _id: string,
        name: string,
    },
    datetime: number,
}

type TPriceInfo = {
    first: {
        bottom_price: number,
        price: number,
        top_price:number,
    },
    second: {
        top_price: number, 
        bottom_price: number
    },
    third: {
        top_price: number,
        bottom_price: number,
        side_price: number
    },
    fourth: {
        top_price: number,
        bottom_price: number
    }
}