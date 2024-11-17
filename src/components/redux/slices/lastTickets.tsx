import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchLastTickets } from "../async action/searchLastTickets";
import { TLastTicketsState } from "../types/LastTickets/LastTicketsState";

const initialState: TLastTicketsState = {
    lastTickets: [],
    loading: false,
    error: null,
}

const lastTickets = createSlice({
    name: 'lastTicketsSlice',
    initialState: initialState,
    reducers: {

        addTickets: (state: TLastTicketsState, action: PayloadAction<any>) => {
            state.lastTickets = action.payload.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(searchLastTickets.pending, (state: TLastTicketsState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchLastTickets.fulfilled, (state: TLastTicketsState, action) => {
                state.loading = false;
                state.lastTickets = action.payload;
            })
            .addCase(searchLastTickets.rejected, (state: TLastTicketsState) => {
                state.loading = false;
                state.error = true;
            })
    }
});

export default lastTickets
export const { addTickets } = lastTickets.actions;