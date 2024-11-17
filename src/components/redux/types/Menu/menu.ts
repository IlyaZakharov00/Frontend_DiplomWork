export type TMenu = {
    ticekts: boolean;
    passangers: boolean;
    pay: boolean;
    check: boolean;
    changeTrain: boolean;
    changePassengers: boolean;
    changePayMethod:boolean;
}

export type TMenuState ={
    menuState: TMenu
}