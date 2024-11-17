import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTicketsState } from "../types/Tickets/state";
import { searchDirections } from "../async action/searchDirections";

const initialState: TTicketsState = {
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
        have_first_class: undefined,
        have_second_class: undefined,
        have_third_class: undefined,
        have_fourth_class: undefined,
    },

    comfortOptions: {
        have_wifi: undefined,
        have_air_conditioning: undefined,
        have_express: undefined,
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

    responseFromServer: {
        total_count: 0,
        items: []
    },

    activePage: 1,
    loading: false,
    error: null,
}

const searchTicketsSlice = createSlice({
    name: 'searchTicketsSlice',
    initialState: initialState,
    reducers: {

        addCities: (state: TTicketsState, action: PayloadAction<any>) => {
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

        addDates: (state: TTicketsState, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'data_start':
                    state.dates.date_start = action.payload.payload
                    break;

                case 'data_end':
                    state.dates.date_end = action.payload.payload
                    break;

                case 'date_start_arrival':
                    state.dates.date_start_arrival = action.payload.payload
                    break;

                case 'date_end_arrival':
                    state.dates.date_end_arrival = action.payload.payload
                    break;

                default:
                    break;
            }
        },

        addClass: (state: TTicketsState, action: PayloadAction<any>) => {
            const keys = Object.keys(state.class);
            const obj = state.class as any;

            keys.forEach((key) => {
                if (key === action.payload.id) obj[key] = action.payload.isChecked
            })
        },

        addComfortOptions: (state: TTicketsState, action: PayloadAction<any>) => {
            const keys = Object.keys(state.comfortOptions);
            const obj = state.comfortOptions as any;

            keys.forEach((key) => {
                if (key === action.payload.id) obj[key] = action.payload.isChecked
            })
        },

        addPrices: (state: TTicketsState, action: PayloadAction<any>) => {
            state.prices.price_from = action.payload[0]
            state.prices.price_to = action.payload[1]
        },

        addTimes: (state: TTicketsState, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'start_departure':
                    state.times.start_departure_hour_from = action.payload.payload[0];
                    state.times.start_departure_hour_to = action.payload.payload[1];
                    break;

                case 'end_departure':
                    state.times.end_departure_hour_from = action.payload.payload[0];
                    state.times.end_departure_hour_to = action.payload.payload[1];
                    break;

                case 'start_arrival':
                    state.times.start_arrival_hour_from = action.payload.payload[0];
                    state.times.start_arrival_hour_to = action.payload.payload[1];
                    break;

                case 'end_arrival':
                    state.times.end_arrival_hour_from = action.payload.payload[0];
                    state.times.end_arrival_hour_to = action.payload.payload[1];
                    break;

                default:
                    break;
            }
        },

        addLimit: (state: TTicketsState, action: PayloadAction<any>) => {
            state.limit = action.payload
        },

        addOffset: (state: TTicketsState, action: PayloadAction<any>) => {
            state.offset = action.payload
        },

        addSort: (state: TTicketsState, action: PayloadAction<any>) => {
            state.sort = action.payload
        },

        changeCitites: (state: TTicketsState) => {
            let tmp = state.cities.from_city;
            state.cities.from_city = state.cities.to_city
            state.cities.to_city = tmp;
        },

        addActivePage: (state: TTicketsState, action: PayloadAction<any>) => {
            state.activePage = action.payload
        },

        nextPage: (state: TTicketsState) => {
            state.activePage++
        },

        prevPage: (state: TTicketsState) => {
            if (state.activePage == 1) return;
            state.activePage--
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(searchDirections.pending, (state: TTicketsState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchDirections.fulfilled, (state: TTicketsState, action) => {
                state.loading = false;
                state.responseFromServer = action.payload;
            })
            .addCase(searchDirections.rejected, (state: TTicketsState) => {
                state.loading = false;
                state.error = true;
            })
    }
},
);

export default searchTicketsSlice
export const { addCities, addDates } = searchTicketsSlice.actions;