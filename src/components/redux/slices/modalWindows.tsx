import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
    showModalInfo: {
        show: boolean;
        content: '';
    };
    showModalError: {
        show: boolean;
        content: "";
    };
}

const initialState: TState = {
    showModalInfo: {
        show: false,
        content: "",
    },
    showModalError: {
        show: false,
        content: "",
    },
}

const modalWindowsSlice = createSlice({
    name: 'modalWindowsSlice',
    initialState: initialState,
    reducers: {

        showModalWindow: (state, action: PayloadAction<any>) => {
            console.log('type', action)
            switch (action.payload.type) {
                case 'modal_info':
                    state.showModalInfo.show = true;
                    state.showModalInfo.content = action.payload.content;
                    break;

                case 'modal_error':
                    state.showModalError.show = true;
                    state.showModalError.content = action.payload.content;
                    break;

                default:
                    break;
            }
        },

        closeModalWindow: (state, action: PayloadAction<any>) => {
            switch (action.payload.type) {
                case 'modal_info':
                    state.showModalInfo.show = false;
                    state.showModalInfo.content = '';
                    break;

                case 'modal_error':
                    state.showModalError.show = false;
                    state.showModalError.content = '';
                    break;

                default:
                    break;
            }
        },


    },
});

export default modalWindowsSlice
export const { showModalWindow, closeModalWindow } = modalWindowsSlice.actions;