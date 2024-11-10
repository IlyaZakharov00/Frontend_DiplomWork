import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseServer } from "./server";

export const searchCities: any = createAsyncThunk('searchCities',
    async (props: any) => {
        const { cityName } = props;

        const response = await fetch(`${baseServer + `/routes/cities?name=` + cityName}`)
            .then(response => response.json())
            .catch(error => error.rejected())
        return response;
    }
);