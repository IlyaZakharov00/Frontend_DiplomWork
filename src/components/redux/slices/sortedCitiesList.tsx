import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchCities } from "../async action/searchCities";

type TState = {
    sortedListFrom: string[];
    sortedListTo: string[];
    from_city: {};
    to_city: {};
    loading_fromCity: boolean;
    loading_toCity: boolean;
    error_fromCity: boolean | null;
    error_toCity: boolean | null;
}

const initialState: TState = {
    sortedListFrom: [],
    sortedListTo: [],
    from_city: {},
    to_city: {},
    loading_fromCity: false,
    error_fromCity: null,
    loading_toCity: false,
    error_toCity: null,
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

    extraReducers: (builder) => {
        builder
            .addCase(searchCities.pending, (state, action) => {
                switch (action.meta.arg.typeAction) {
                    case "from_city":
                        state.loading_fromCity = true;
                        state.error_fromCity = null;
                        break;

                    case "to_city":
                        state.loading_toCity = true;
                        state.error_toCity = null;
                        break;

                    default:
                        break;
                }
            })

            .addCase(searchCities.fulfilled, (state, action) => {
                const sortCityList: string[] = [];
                const typeAction = action.meta.arg.typeAction
                const letter = action.meta.arg.cityName

                const reg = new RegExp('^' + letter.toLowerCase(), 'g');

                for (const city of action.payload) {
                    if (city.name.match(reg)) sortCityList.push(city);
                }

                switch (typeAction) {
                    case "from_city":
                        state.loading_fromCity = false;
                        state.sortedListFrom = sortCityList;
                        break;

                    case "to_city":
                        state.loading_toCity = false;
                        state.sortedListTo = sortCityList;
                        break;

                    default:
                        break;
                }
            })

            .addCase(searchCities.rejected, (state, action) => {
                switch (action.meta.arg.typeAction) {
                    case "from_city":
                        state.loading_fromCity = true;
                        state.error_fromCity = null;
                        break;

                    case "to_city":
                        state.loading_toCity = true;
                        state.error_toCity = null;
                        break;

                    default:
                        break;
                }
            })
    }
});

export default sortedCitiesListSlice
export const { addCities } = sortedCitiesListSlice.actions;