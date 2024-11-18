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
        },

        changePassangers: (state: TPassangersDataState, action: PayloadAction<any>) => {
            for (let i = 0; i < state.allPassanger.length; i++) {
                if (state.allPassanger[i].id === action.payload.id) {
                    state.allPassanger[i] = action.payload
                }
            }
        }

    },
});

export default passangerDataSlice
export const { addPassenger } = passangerDataSlice.actions;