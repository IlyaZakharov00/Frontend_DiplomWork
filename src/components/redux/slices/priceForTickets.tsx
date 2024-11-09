import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    sumPrice: 0,
    air_conditioning: undefined,
    wifi: { type: '', payload: { price: 0, choice: false, } },
    linens: { type: '', payload: { price: 0, choice: false, } },
    countSeat: 0,
}

const priceForTicketstsSlice = createSlice({
    name: 'priceForTicketstsSlice',
    initialState: initialState,
    reducers: {

        addSeat: (state, action: PayloadAction<any>) => {
            if (state.wifi.payload.choice) action.payload += state.wifi.payload.price
            if (state.linens.payload.choice) action.payload += state.linens.payload.price
            console.log(action.payload, 'add')
            state.sumPrice = state.sumPrice + action.payload;
            state.countSeat++
        },

        deleteSeat: (state, action: PayloadAction<any>) => {
            if (state.wifi.payload.choice) action.payload += state.wifi.payload.price
            if (state.linens.payload.choice) action.payload += state.linens.payload.price
            console.log(action.payload, 'delete')
            state.sumPrice = state.sumPrice - action.payload
            state.countSeat--
        },

        addFunction: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'wifi':
                    console.log(action)
                    state.wifi = action.payload
                    state.sumPrice = state.sumPrice + state.countSeat * state.wifi.payload.price
                    break;
                case 'linens':
                    console.log(action)
                    state.linens = action.payload
                    state.sumPrice = state.sumPrice + state.countSeat * state.linens.payload.price
                    break;
                default:
                    break;
            }
        },

        deleteFunction: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'wifi':
                    state.wifi = action.payload
                    state.sumPrice = state.sumPrice - state.countSeat * state.wifi.payload.price
                    break;
                case 'linens':
                    state.linens = action.payload
                    state.sumPrice = state.sumPrice - state.countSeat * state.linens.payload.price
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
            state.countSeat = 0;
        }
    },
});

export default priceForTicketstsSlice
export const { addSeat, deleteSeat } = priceForTicketstsSlice.actions;