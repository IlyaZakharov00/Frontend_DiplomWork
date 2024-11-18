import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPayInfoPerson } from "../types/PayInfo/PayInfo";

const initialState: TPayInfoPerson = {
    email: "",
    lastname: "",
    name: "",
    payMethod: "",
    surname: "",
    telNumber: "",
    id: "",
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
            state.id = Math.random().toString(36).substring(2);
        },

    },
});

export default payInfoSlice
export const { addPerson } = payInfoSlice.actions;