import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchCities } from "../async action/searchCities";
import { TCitiesState } from "../types/Cities/CitiesState";

const initialState: TCitiesState = {
    sortedListFrom: [],
    sortedListTo: [],
    from_city: { _id: "", name: "" },
    to_city: { _id: "", name: "" },
    loading_fromCity: false,
    error_fromCity: false,
    loading_toCity: false,
    error_toCity: false,
}

const sortedCitiesListSlice = createSlice({
    name: 'sortedCitiesListSlice',
    initialState: initialState,
    reducers: {

        addCities: (state: TCitiesState, action: PayloadAction<any>) => {
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

        choiceCity: (state: TCitiesState, action: PayloadAction<any>) => {
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

        changeCitites: (state: TCitiesState) => {
            let tmp = state.from_city;
            state.from_city = state.to_city
            state.to_city = tmp;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(searchCities.pending, (state: TCitiesState, action) => {
                switch (action.meta.arg.typeAction) {
                    case "from_city":
                        state.loading_fromCity = true;
                        state.error_fromCity = false;
                        break;

                    case "to_city":
                        state.loading_toCity = true;
                        state.error_toCity = false;
                        break;

                    default:
                        break;
                }
            })

            .addCase(searchCities.fulfilled, (state: TCitiesState, action) => {
                const sortCityList: any = [];
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

            .addCase(searchCities.rejected, (state: TCitiesState, action) => {
                switch (action.meta.arg.typeAction) {
                    case "from_city":
                        state.loading_fromCity = true;
                        state.error_fromCity = false;
                        break;

                    case "to_city":
                        state.loading_toCity = true;
                        state.error_toCity = false;
                        break;

                    default:
                        break;
                }
            })
    }
});

export default sortedCitiesListSlice
export const { addCities, changeCitites, choiceCity } = sortedCitiesListSlice.actions;