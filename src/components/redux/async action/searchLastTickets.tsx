import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseServer } from "./server";

export const searchLastTickets: any = createAsyncThunk('searchLastTickets',
    async () => {

        const server = `${baseServer + '/routes/last'}`

        const response = await fetch(server)
            .then(response => response.json())
            .catch(error => error.rejected());

        return response;
    }
);