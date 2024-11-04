import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchSeats } from "../async action/searchSeats";

const initialState: any = {
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

        choiceSeats: (state, action: PayloadAction<any>) => {
            state.responseFromServer = action.payload;
        },

        addDepartureID: (state, action: PayloadAction<any>) => {
            state.departureID = action.payload
        },

        closeChoiceSeats: (state) => {
            state.responseFromServer = {};
            state.departureID = '';
            state.choiceTypeCoach = "";
            state.choiceNumberCoach = '';
            state.choiceCoach = '';
            state.train = null;
        },

        addTrain: (state, action: PayloadAction<any>) => {
            state.train = action.payload
        },

        addChoiceTypeCoach: (state, action: PayloadAction<any>) => {
            state.choiceTypeCoach = action.payload
        },

        choiceNumberCoach: (state, action: PayloadAction<any>) => {
            state.choiceNumberCoach = action.payload
        },

        choiceCoach: (state, action: PayloadAction<any>) => {
            state.choiceCoach = action.payload
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(searchSeats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchSeats.fulfilled, (state, action) => {
                state.loading = false;
                state.responseFromServer = action.payload;
            })
            .addCase(searchSeats.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
},
);

export default searchSeatsSlice
export const { choiceSeats, addDepartureID, closeChoiceSeats, addTrain } = searchSeatsSlice.actions;