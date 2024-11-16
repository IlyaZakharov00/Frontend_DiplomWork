import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPayInfoPerson } from "../types/PayInfo/PayInfo";

const initialState: TPayInfoPerson = {
    email: "",
    lastname: "",
    name: "",
    payMethod: "",
    surname: "",
    telNumber: "",
}

const payInfoSlice = createSlice({
    name: 'payInfoSlice',
    initialState: initialState,
    reducers: {

        addPerson: (state: TPayInfoPerson, action: PayloadAction<any>) => {
            state.email = action.payload.email
            state.lastname = action.payload.lastname;
            state.name = action.payload.name;
            state.payMethod = action.payload.payMethod;
            state.surname = action.payload.surname;
            state.telNumber = action.payload.telNumber;
        },

    },
});

export default payInfoSlice
export const { addPerson } = payInfoSlice.actions;