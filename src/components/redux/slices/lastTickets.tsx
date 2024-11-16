import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLastTicketsState } from "../types/LastTickets/LastTicketsState";

const initialState: TLastTicketsState = {
    lastTickets: []
}

const lastTickets = createSlice({
    name: 'lastTicketsSlice',
    initialState: initialState,
    reducers: {

        addTickets: (state: TLastTicketsState, action: PayloadAction<any>) => {
            state.lastTickets = action.payload.payload
        },

    },
});

export default lastTickets
export const { addTickets } = lastTickets.actions;