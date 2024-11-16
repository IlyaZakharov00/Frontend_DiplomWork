export type TLastTicketsState = {
    lastTickets: [];
}
export type TLastTicketsStateR={
    lastTickets: TLastTicketsState;
}

export type TLastTicket={
    available_seats:number,
    available_seats_info:any,
    departure:any,
    have_air_conditioning:boolean,
    have_first_class:boolean,
    have_fourth_class:boolean,
    have_second_class:boolean,
    have_third_class:boolean,
    have_wifi:boolean,
    is_express:boolean,
    min_price:number,
} 

export type TLastTicketsProps = {
    ticket:TLastTicket
}

