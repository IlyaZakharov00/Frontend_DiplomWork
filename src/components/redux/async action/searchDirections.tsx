import { createAsyncThunk } from "@reduxjs/toolkit";
import { IState } from "../types/state";
import { baseServer } from "./server";

export const searchDirections: any = createAsyncThunk('searchDirections',
	async (options: IState) => {

		const server = new URL(baseServer + '/routes')

		server.searchParams.append('from_city_id', options.cities.from_city._id);
		server.searchParams.append('to_city_id', options.cities.to_city._id);

		(options.dates.date_start ? server.searchParams.append('date_start', options.dates.date_start) : '');
		(options.dates.date_end ? server.searchParams.append('date_end', options.dates.date_end) : '');
		(options.dates.date_start_arrival ? server.searchParams.append('date_start_arrival', options.dates.date_start_arrival) : '');
		(options.dates.date_end_arrival ? server.searchParams.append('date_end_arrival', options.dates.date_end_arrival) : '');

		(options.class.have_first_class ? server.searchParams.append('have_first_class', `${options.class.have_first_class}`) : '');
		(options.class.have_second_class ? server.searchParams.append('have_second_class', `${options.class.have_second_class}`) : '');
		(options.class.have_third_class ? server.searchParams.append('have_third_class', `${options.class.have_third_class}`) : '');
		(options.class.have_fourth_class ? server.searchParams.append('have_fourth_class', `${options.class.have_fourth_class}`) : '');

		(options.comfortOptions.have_wifi ? server.searchParams.append('have_wifi', `${options.comfortOptions.have_wifi}`) : '');
		(options.comfortOptions.have_air_conditioning ? server.searchParams.append('have_air_conditioning', `${options.comfortOptions.have_air_conditioning}`) : '');
		(options.comfortOptions.have_express ? server.searchParams.append('have_express', `${options.comfortOptions.have_express}`) : '');

		(options.prices.price_from ? server.searchParams.append('price_from', `${options.prices.price_from}`) : '');
		(options.prices.price_to ? server.searchParams.append('price_to', `${options.prices.price_to}`) : '');

		(options.times.start_departure_hour_from || options.times.start_departure_hour_from == 0 ? server.searchParams.append('start_departure_hour_from', `${options.times.start_departure_hour_from}`) : '');
		(options.times.start_departure_hour_to ? server.searchParams.append('start_departure_hour_to', `${options.times.start_departure_hour_to}`) : '');
		(options.times.start_arrival_hour_from || options.times.start_arrival_hour_from == 0 ? server.searchParams.append('start_arrival_hour_from', `${options.times.start_arrival_hour_from}`) : '');
		(options.times.start_arrival_hour_to ? server.searchParams.append('start_arrival_hour_to', `${options.times.start_arrival_hour_to}`) : '');
		(options.times.end_departure_hour_from || options.times.end_departure_hour_from == 0 ? server.searchParams.append('end_departure_hour_from', `${options.times.end_departure_hour_from}`) : '');
		(options.times.end_departure_hour_to ? server.searchParams.append('end_departure_hour_to', `${options.times.end_departure_hour_to}`) : '');

		(options.times.end_arrival_hour_from && options.dates.date_end ? server.searchParams.append('end_arrival_hour_from', `${options.times.end_arrival_hour_from}`) : '');
		(options.times.end_arrival_hour_to && options.dates.date_end ? server.searchParams.append('end_arrival_hour_to', `${options.times.end_arrival_hour_to}`) : '');

		(options.limit ? server.searchParams.append('limit', `${options.limit}`) : '');
		(options.offset ? server.searchParams.append('offset', `${options.offset}`) : '');
		(options.sort ? server.searchParams.append('sort', `${options.sort}`) : '');


		const response = await fetch(server)
			.then(response => response.json())
			.catch(error => error.rejected());

		return response;
	}
);