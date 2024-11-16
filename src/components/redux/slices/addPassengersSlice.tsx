import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPassangersState } from "../types/Passengers/PassangersState";

const initialState: TPassangersState = {
    countAdult: 0,
    countChild: 0,
    countChildWithoutSeat: 0,
}

const addPassengersSlice = createSlice({
    name: 'addPassengersSlice',
    initialState: initialState,
    reducers: {

        addCountPassengers: (state: TPassangersState, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case "countAdult":
                    state.countAdult = action.payload.countPassengers
                    break;
                case "countChild":
                    state.countChild = action.payload.countPassengers
                    break;
                case "countChildWithoutSeat":
                    state.countChildWithoutSeat = action.payload.countPassengers
                    break;

                default:
                    break;
            }
        },

        clearAll: (state: TPassangersState) => {
            state.countAdult = 0;
            state.countChild = 0;
            state.countChildWithoutSeat = 0;
        },


    },
});

export default addPassengersSlice
export const { addCountPassengers } = addPassengersSlice.actions;