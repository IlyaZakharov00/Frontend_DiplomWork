import { createSlice } from "@reduxjs/toolkit";
import { TMenu } from "../types/Menu/menu";

const initialState: TMenu = {
    ticekts: false,
    passangers: false,
    pay: false,
    check: false,
    changePassengers: false,
    changePayMethod: false,
    changeTrain: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {

        openTickets: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = false;
            state.pay = false;
            state.check = false;
        },

        openPassangers: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = true;
            state.pay = false;
            state.check = false;
            state.changeTrain = false;
        },

        openPay: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = true;
            state.pay = true;
            state.check = false;
            state.changePassengers = false;
        },

        openCheck: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = true;
            state.pay = true;
            state.check = true;
            state.changePayMethod = false;
        },

        closeAll: (state: TMenu) => {
            state.ticekts = false;
            state.passangers = false;
            state.pay = false;
            state.check = false;
            state.changePassengers = false;
            state.changePayMethod = false;
            state.changeTrain = false;
        },

        changeTrain: (state: TMenu) => {
            state.changeTrain = true;
        },

        changePassenger: (state: TMenu) => {
            state.changePassengers = true;
        },

        changePayMethod: (state: TMenu) => {
            state.changePayMethod = true;
        }
    }
})

export default menuSlice
export const { openTickets, openCheck, openPassangers, openPay } = menuSlice.actions;