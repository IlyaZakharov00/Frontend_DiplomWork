import { createAsyncThunk } from "@reduxjs/toolkit";
import { IState } from "../types/state";
import { baseServer } from "./server";

export const searchDirections: any = createAsyncThunk('searchDirections',
	async (options: IState) => {

		const server = `${baseServer + '/routes?'
			+ `from_city_id=${options.cities.from_city._id}`
			+ `&to_city_id=${options.cities.to_city._id}`

			+ (options.dates.date_start ? `&date_start=${options.dates.date_start}` : '')
			+ (options.dates.date_end ? `&date_end=${options.dates.date_end}` : '')
			+ (options.dates.date_start_arrival ? `&date_start_arrival=${options.dates.date_start_arrival}` : '')
			+ (options.dates.date_end_arrival ? `&date_end_arrival=${options.dates.date_end_arrival}` : '')

			+ (options.class.have_first_class ? `&have_first_class=${options.class.have_first_class}` : '')
			+ (options.class.have_second_class ? `&have_second_class=${options.class.have_second_class}` : '')
			+ (options.class.have_third_class ? `&have_third_class=${options.class.have_third_class}` : '')
			+ (options.class.have_fourth_class ? `&have_fourth_class=${options.class.have_fourth_class}` : '')

			+ (options.comfortOptions.have_wifi ? `&have_wifi=${options.comfortOptions.have_wifi}` : '')
			+ (options.comfortOptions.have_air_conditioning ? `&have_air_conditioning=${options.comfortOptions.have_air_conditioning}` : '')
			+ (options.comfortOptions.have_express ? `&have_express=${options.comfortOptions.have_express}` : '')

			+ (options.prices.price_from ? `&price_from=${options.prices.price_from}` : '')
			+ (options.prices.price_to ? `&price_to=${options.prices.price_to}` : '')

			+ (options.times.start_departure_hour_from ? `&start_departure_hour_from=${options.times.start_departure_hour_from}` : '')
			+ (options.times.start_departure_hour_to ? `&start_departure_hour_to=${options.times.start_departure_hour_to}` : '')
			+ (options.times.start_arrival_hour_from ? `&start_arrival_hour_from=${options.times.start_arrival_hour_from}` : '')
			+ (options.times.start_arrival_hour_to ? `&start_arrival_hour_to=${options.times.start_arrival_hour_to}` : '')
			+ (options.times.end_departure_hour_from ? `&end_departure_hour_from=${options.times.end_departure_hour_from}` : '')
			+ (options.times.end_departure_hour_to ? `&end_departure_hour_to=${options.times.end_departure_hour_to}` : '')
			+ (options.times.end_arrival_hour_from && options.dates.date_end ? `&end_arrival_hour_from=${options.times.end_arrival_hour_from}` : '')
			+ (options.times.end_arrival_hour_to && options.dates.date_end ? `&end_arrival_hour_to=${options.times.end_arrival_hour_to}` : '')

			+ (options.limit ? `&limit=${options.limit}` : '')
			+ (options.offset ? `&offset=${options.offset}` : '')
			+ (options.sort ? `&sort=${options.sort}` : '')
			}`

		const response = await fetch(server)
			.then(response => response.json())
			.catch(error => console.log(error));

		return response;
	}
);