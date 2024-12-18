import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './SliderPrice.module.css'
import searchTicketsSlice from '../../redux/slices/searchTicketsSlice';
import { StyledEngineProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TState } from '../../redux/types/State/State';

export default function SliderPrice() {
    const dispatch = useDispatch();
    const state = useSelector((state: TState) => state.searchTicketsState);

    let initValue = [1920, 4500];
    const [value, setValue] = React.useState<number[]>(initValue);

    useEffect(() => {
        if (state.prices.price_from && state.prices.price_to) {
            setValue([state.prices.price_from, state.prices.price_to]);
        }
    }, [])

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const changeCommittedHenlder = () => {
        dispatch(searchTicketsSlice.actions.addPrices(value))
    }

    return (
        <StyledEngineProvider injectFirst>
            <Box>
                <div className="label-container d-flex justify-content-between">
                    <label >от</label>
                    <label >до</label>
                </div>
                <Slider
                    classes={{ thumb: styles.thumb, track: styles.track, rail: styles.rail, }}
                    value={value}
                    onChange={handleChange}
                    onChangeCommitted={changeCommittedHenlder}
                    valueLabelDisplay="off"
                    max={7000}
                    min={1920}
                    disableSwap
                    className='slider_price'
                />
                <div className="label-container d-flex justify-content-between">
                    <label >{value[0]}</label>
                    <label >{value[1]}</label>
                </div>
            </Box>
        </StyledEngineProvider>
    );
}