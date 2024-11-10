import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    sumPrice: 0,
    air_conditioning: undefined,
    wifi: { type: '', payload: { price: 0, choice: false, } },
    linens: { type: '', payload: { price: 0, choice: false, } },
    choiceSeats: [],
}

const priceForTicketstsSlice = createSlice({
    name: 'priceForTicketstsSlice',
    initialState: initialState,
    reducers: {

        addSeat: (state, action: PayloadAction<any>) => {
            console.log(action)
            if (state.wifi.payload.choice) action.payload.price += state.wifi.payload.price;
            if (state.linens.payload.choice) action.payload.price += state.linens.payload.price;
            state.sumPrice = state.sumPrice + action.payload.price;
            state.choiceSeats.push(action.payload);
        },

        deleteSeat: (state, action: PayloadAction<any>) => {
            console.log(action)
            if (state.wifi.payload.choice) action.payload.price += state.wifi.payload.price
            if (state.linens.payload.choice) action.payload.price += state.linens.payload.price
            state.sumPrice = state.sumPrice - action.payload.price;
            state.choiceSeats = state.choiceSeats.filter((item: any) => item.numberSeat !== action.payload.numberSeat)
        },

        addFunction: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'wifi':
                    console.log(action)
                    state.wifi = action.payload
                    state.sumPrice = state.sumPrice + state.choiceSeats.length * state.wifi.payload.price
                    break;
                case 'linens':
                    console.log(action)
                    state.linens = action.payload
                    state.sumPrice = state.sumPrice + state.choiceSeats.length * state.linens.payload.price
                    break;
                default:
                    break;
            }
        },

        deleteFunction: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'wifi':
                    state.wifi = action.payload
                    state.sumPrice = state.sumPrice - state.choiceSeats.length * state.wifi.payload.price
                    break;
                case 'linens':
                    state.linens = action.payload
                    state.sumPrice = state.sumPrice - state.choiceSeats.length * state.linens.payload.price
                    break;
                default:
                    break;
            }
        },

        clearAll: (state) => {
            state.sumPrice = 0;
            state.air_conditioning = undefined;
            state.wifi = { type: '', payload: { price: 0, choice: false, } };
            state.linens = { type: '', payload: { price: 0, choice: false, } };
            state.choiceSeats = [];
        }
    },
});

export default priceForTicketstsSlice
export const { addSeat, deleteSeat } = priceForTicketstsSlice.actions;