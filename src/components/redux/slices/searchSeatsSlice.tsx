import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchSeats } from "../async action/searchSeats";
import { TSeats } from "../types/Seats/SeatsState";

const initialState: TSeats = {
    responseFromServer: {},
    departureID: '',
    choiceTypeCoach: "",
    choiceNumberCoach: '',
    choiceCoach: '',
    train: null,
    loading: false,
    error: null,
}

const searchSeatsSlice = createSlice({
    name: 'searchSeatsSlice',
    initialState: initialState,
    reducers: {

        choiceSeats: (state: TSeats, action: PayloadAction<any>) => {
            state.responseFromServer = action.payload;
        },

        addDepartureID: (state: TSeats, action: PayloadAction<any>) => {
            state.departureID = action.payload
        },

        closeChoiceSeats: (state: TSeats) => {
            state.departureID = '';
            state.choiceTypeCoach = "";
            state.choiceNumberCoach = '';
            state.choiceCoach = '';
            state.train = null;
        },

        addTrain: (state: TSeats, action: PayloadAction<any>) => {
            state.train = action.payload
        },

        addChoiceTypeCoach: (state: TSeats, action: PayloadAction<any>) => {
            state.choiceTypeCoach = action.payload
        },

        choiceNumberCoach: (state: TSeats, action: PayloadAction<any>) => {
            state.choiceNumberCoach = action.payload
        },

        choiceCoach: (state: TSeats, action: PayloadAction<any>) => {
            state.choiceCoach = action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(searchSeats.pending, (state: TSeats) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchSeats.fulfilled, (state: TSeats, action) => {
                state.loading = false;
                state.responseFromServer = action.payload;
            })
            .addCase(searchSeats.rejected, (state: TSeats) => {
                state.loading = false;
                state.error = true;
            })
    }
},
);

export default searchSeatsSlice
export const { choiceSeats, addDepartureID, closeChoiceSeats, addTrain } = searchSeatsSlice.actions;