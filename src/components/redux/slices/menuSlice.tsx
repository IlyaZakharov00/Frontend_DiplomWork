import { createSlice } from "@reduxjs/toolkit";
import { TMenu } from "../types/Menu/menu";

const initialState: TMenu = {
    ticekts: false,
    passangers: false,
    pay: false,
    check: false,
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
            state.passangers = true
            state.pay = false
            state.check = false
        },
        openPay: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = true;
            state.pay = true;
            state.check = false;
        },

        openCheck: (state: TMenu) => {
            state.ticekts = true;
            state.passangers = true;
            state.pay = true;
            state.check = true;
        },

        closeAll: (state: TMenu) => {
            state.ticekts = false;
            state.passangers = false;
            state.pay = false;
            state.check = false;
        }
    }
})

export default menuSlice
export const { openTickets, openCheck, openPassangers, openPay } = menuSlice.actions;