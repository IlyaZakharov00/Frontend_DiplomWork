import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPassangersDataState } from "../types/Passengers/PassangersState";

const initialState: TPassangersDataState = {
    allPassanger: [],
}

const passangerDataSlice = createSlice({
    name: 'passangerDataSlice',
    initialState: initialState,
    reducers: {

        addPassenger: (state: TPassangersDataState, action: PayloadAction<any>) => {
            state.allPassanger.push(action.payload);
        },

        clearAll: (state: TPassangersDataState) => {
            state.allPassanger = [];
        }

    },
});

export default passangerDataSlice
export const { addPassenger } = passangerDataSlice.actions;