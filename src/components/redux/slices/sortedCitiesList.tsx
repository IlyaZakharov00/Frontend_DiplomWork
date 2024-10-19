import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
    sortedListFrom: [];
    sortedListTo: [];
    from_city: {};
    to_city: {};
}

const initialState: TState = {
    sortedListFrom: [],
    sortedListTo: [],
    from_city: {},
    to_city: {},
}

const sortedCitiesListSlice = createSlice({
    name: 'sortedCitiesListSlice',
    initialState: initialState,
    reducers: {

        addCities: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'from_city':
                    state.sortedListFrom = action.payload.payload;
                    break;

                case 'to_city':
                    state.sortedListTo = action.payload.payload;
                    break;

                default:
                    break;
            }
        },

        choiceCity: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'from_city':
                    state.from_city = action.payload.payload;
                    state.sortedListFrom = [];
                    break;

                case 'to_city':
                    state.to_city = action.payload.payload;
                    state.sortedListTo = [];
                    break;

                default:
                    break;
            }
        },

        changeCitites: (state) => {
            let tmp = state.from_city;
            state.from_city = state.to_city
            state.to_city = tmp;
        }
    },
});

export default sortedCitiesListSlice
export const { addCities } = sortedCitiesListSlice.actions;