import { createAsyncThunk } from "@reduxjs/toolkit";
import { IState } from "../types/state";
import { baseServer } from "./server";

export const searchSeats: any = createAsyncThunk('searchSeats',
    async (options: { state: IState, departureID: string }) => {

        // const { state, departureID } = options
        const { departureID } = options

        const server = new URL(baseServer + '/routes/' + departureID + '/seats')

        // state.class.have_first_class ? server.searchParams.append('have_first_class', `${state.class.have_first_class}`) : ""
        // state.class.have_second_class ? server.searchParams.append('have_second_class', `${state.class.have_second_class}`) : ""
        // state.class.have_third_class ? server.searchParams.append('have_third_class', `${state.class.have_third_class}`) : ""
        // state.class.have_fourth_class ? server.searchParams.append('have_fourth_class', `${state.class.have_fourth_class}`) : ""

        // state.comfortOptions.have_wifi ? server.searchParams.append('have_wifi', `${state.comfortOptions.have_wifi}`) : ""
        // state.comfortOptions.have_air_conditioning ? server.searchParams.append('have_air_conditioning', `${state.comfortOptions.have_air_conditioning}`) : ""
        // state.comfortOptions.have_express ? server.searchParams.append('have_express', `${state.comfortOptions.have_express}`) : ""

        //!!!!!!!!!!!!!!!!!!!!!!!!!сервер дает неправильный ответ. приходится убирать запрос с доп функциями!!!!!!!!!!!!!!!!!!!!!!!!!1

        const response = await fetch(server)
            .then(response => response.json())
            .catch(error => console.log(error));

        return response;
    }
);