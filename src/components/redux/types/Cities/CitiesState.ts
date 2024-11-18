export type TCitiesState = {
    sortedListFrom: { _id: string, name: string }[];
    sortedListTo: { _id: string, name: string }[];
    from_city: { _id: string, name: string };
    to_city: { _id: string, name: string };
    loading_fromCity: boolean;
    loading_toCity: boolean;
    error_fromCity: boolean;
    error_toCity: boolean;
}