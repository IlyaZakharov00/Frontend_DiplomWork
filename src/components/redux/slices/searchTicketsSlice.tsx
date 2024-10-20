import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "../types/state";
import { searchDirections } from "../async action/searchDirections";

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
    isOpenSearchTicketsPage: false,

    responseFromServer: {
        total_count: 0,
        items: []
    },
    loading: false,
    error: null,
}

const searchTicketsSlice = createSlice({
    name: 'searchTicketsSlice',
    initialState: initialState,
    reducers: {

        addCities: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'from_city':
                    state.cities.from_city = action.payload.payload;
                    break;

                case 'to_city':
                    state.cities.to_city = action.payload.payload;
                    break;

                default:
                    break;
            }
        },

        addDates: (state, action: PayloadAction<any>) => {
            state.dates = action.payload
        },

        addClass: (state, action: PayloadAction<any>) => {
            const keys = Object.keys(state.class);
            const obj = state.class as any;

            keys.forEach((key) => {
                if (key === action.payload.id) obj[key] = action.payload.isChecked
            })
        },

        addComfortOptions: (state, action: PayloadAction<any>) => {
            const keys = Object.keys(state.comfortOptions);
            const obj = state.comfortOptions as any;

            keys.forEach((key) => {
                if (key === action.payload.id) obj[key] = action.payload.isChecked
            })
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
            state.isOpenSearchTicketsPage = false;

        },

        openSearchTicketsPage: (state) => {
            state.isOpenSearchTicketsPage = true;

        },

        changeCitites: (state) => {
            let tmp = state.cities.from_city;
            state.cities.from_city = state.cities.to_city
            state.cities.to_city = tmp;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(searchDirections.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchDirections.fulfilled, (state, action) => {
                state.loading = false;
                state.responseFromServer = action.payload;
            })
            .addCase(searchDirections.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
},
);

export default searchTicketsSlice
export const { addCities, addDates } = searchTicketsSlice.actions;