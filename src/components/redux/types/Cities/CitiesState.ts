export type TCitiesState = {
    sortedListFrom: { _id: string, name: string }[];
    sortedListTo: { _id: string, name: string }[];
    from_city: any;
    to_city: any;
    loading_fromCity: boolean;
    loading_toCity: boolean;
    error_fromCity: boolean | null;
    error_toCity: boolean | null;
}

export type TCitiesStateR={
    sortedCitiesList:TCitiesState
}