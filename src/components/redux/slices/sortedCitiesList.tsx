import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
    sortedListFrom: []
    sortedListTo: []
}

const initialState: TState = {
    sortedListFrom: [],
    sortedListTo: [],
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
    },
});

export default sortedCitiesListSlice
export const { addCities } = sortedCitiesListSlice.actions;