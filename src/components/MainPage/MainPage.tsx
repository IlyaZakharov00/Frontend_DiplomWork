import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { AboutUs } from "../AboutUs/AboutUs"
import { Comments } from "../Comments/Comments"
import { HowDoesThisWork } from "../HowDoesThisWork/HowDoesThisWork"
import menuSlice from "../redux/slices/menuSlice"

export const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(menuSlice.actions.closeAll());
    }, []);

    return (
        <>
            <AboutUs />
            <HowDoesThisWork />
            <Comments />
        </>
    )
}
