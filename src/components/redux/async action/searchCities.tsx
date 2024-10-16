import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseServer } from "./server";

export const searchCities: any = createAsyncThunk('searchCities',
    async (cityName: string) => {
        const response = await fetch(`${baseServer + `/routes/cities?name=` + cityName}`)
            .then(response => response.json())
            .catch(error => console.log(error))
        return response;
    }
);