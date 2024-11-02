import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
    lastTickets: [];
}

const initialState: TState = {
    lastTickets: []
}

const lastTickets = createSlice({
    name: 'lastTicketsSlice',
    initialState: initialState,
    reducers: {

        addTickets: (state, action: PayloadAction<any>) => {
            state.lastTickets = action.payload.payload
        },

    },
});

export default lastTickets
export const { addTickets } = lastTickets.actions;