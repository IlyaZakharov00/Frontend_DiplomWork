import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AboutUs } from "../AboutUs/AboutUs"
import { Comments } from "../Comments/Comments"
import { HowDoesThisWork } from "../HowDoesThisWork/HowDoesThisWork"
import searchTicketsSlice from "../redux/slices/searchTicketsSlice"

export const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchTicketsSlice.actions.closeSearchTicketsPage());
    });

    return (
        <>
            <AboutUs />
            <HowDoesThisWork />
            <Comments />
        </>
    )
}
