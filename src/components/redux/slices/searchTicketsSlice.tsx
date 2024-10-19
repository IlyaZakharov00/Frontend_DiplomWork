import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/state";

const initialState: IState = {
    cities: {
        from_city: {
            _id: '',
            name: ''
        },
        to_city: {
            _id: '',
            name: ''
        },
    },

    dates: {
        date_start: "",
        date_end: "",
        date_start_arrival: "",
        date_end_arrival: '',
    },

    class: {
        have_first_class: false,
        have_second_class: false,
        have_third_class: false,
        have_fourth_class: false,
    },

    comfortOptions: {
        have_wifi: false,
        have_air_conditioning: false,
        have_express: false,
    },

    prices: {
        price_from: undefined,
        price_to: undefined,
    },

    times: {
        start_departure_hour_from: undefined,
        start_departure_hour_to: undefined,
        start_arrival_hour_from: undefined,
        start_arrival_hour_to: undefined,
        end_departure_hour_from: undefined,
        end_departure_hour_to: undefined,
        end_arrival_hour_from: undefined,
        end_arrival_hour_to: undefined,
    },

    limit: "",
    offset: "",
    sort: "",
    openSearchTicketsPage: false,
}

const searchTicketsSlice = createSlice({
    name: 'searchTicketsSlice',
    initialState: initialState,
    reducers: {

        addCities: (state, action: PayloadAction<any>) => {
            state.cities = action.payload
            state.openSearchTicketsPage = true;
        },

        addDates: (state, action: PayloadAction<any>) => {
            state.dates = action.payload
        },

        addClass: (state, action: PayloadAction<any>) => {
            state.class = action.payload
        },

        addComfortOptions: (state, action: PayloadAction<any>) => {
            state.comfortOptions = action.payload
        },

        addPrices: (state, action: PayloadAction<any>) => {
            state.prices = action.payload
        },

        addTimes: (state, action: PayloadAction<any>) => {
            state.times = action.payload
        },

        addLimit: (state, action: PayloadAction<any>) => {
            state.limit = action.payload
        },

        addOffset: (state, action: PayloadAction<any>) => {
            state.offset = action.payload
        },

        addSort: (state, action: PayloadAction<any>) => {
            state.sort = action.payload
        },

        closeSearchTicketsPage: (state) => {
            state.openSearchTicketsPage = false;
        }
    },
    //     extraReducers: (builder) => {
    //         builder
    //             .addCase(fetchBestSellers.pending, (state) => {
    //                 state.loading = true;
    //                 state.error = null;
    //             })
    //             .addCase(fetchBestSellers.fulfilled, (state, action) => {
    //                 state.loading = false;
    //                 state.bestSellersArray = action.payload;
    //             })
    //             .addCase(fetchBestSellers.rejected, (state) => {
    //                 state.loading = false;
    //                 state.error = true;
    //             })
    //     }
},
);

export default searchTicketsSlice
export const { addCities, addDates } = searchTicketsSlice.actions;