import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import searchTicketsSlice from '../../redux/slices/searchTicketsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import { useEffect } from 'react';
import './SliderTime.css'
import { TTicketsStateR } from '../../redux/types/Tickets/state';

export default function SliderTimeArrival() {
    const dispatch = useDispatch();
    const state = useSelector((state: TTicketsStateR) => state.searchTicketsState);

    let initValue = [0, 11];

    const [value_start, setValueStart] = React.useState<number[]>(initValue);
    const [value_end, setValueEnd] = React.useState<number[]>(initValue);

    useEffect(() => {
        if (state.times.start_arrival_hour_from >= 0 && state.times.start_arrival_hour_to) {
            setValueStart([state.times.start_arrival_hour_from, state.times.start_arrival_hour_to]);
        }
        if (state.times.end_arrival_hour_from >= 0 && state.times.end_arrival_hour_to) {
            setValueEnd([state.times.end_arrival_hour_from, state.times.end_arrival_hour_to]);
        }
    }, [])

    const handleChangeStart = (_event: Event, newValue: number | number[]) => {
        setValueStart(newValue as number[]);
    };

    const handleChangeEnd = (_event: Event, newValue: number | number[]) => {
        setValueEnd(newValue as number[]);
    };

    const changeCommittedHenlder = () => {
        dispatch(searchTicketsSlice.actions.addTimes({ type: 'start_arrival', payload: value_start }))
        dispatch(searchTicketsSlice.actions.addTimes({ type: 'end_arrival', payload: value_end }))
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box sx={{ width: 300 }}>
                    <div className="container-departure-time">
                        <div className="label-container d-flex justify-content-between">
                            <label >Время отбытия</label>
                        </div>
                        <Slider
                            value={value_start}
                            onChange={handleChangeStart}
                            onChangeCommitted={changeCommittedHenlder}
                            valueLabelDisplay="off"
                            max={23}
                            min={0}
                            disableSwap
                            className='slider_time'
                        />
                        <div className="label-container d-flex justify-content-between">
                            <label >{`${value_start[0]}:00`}</label>
                            <label >{`${value_start[1]}:00`}</label>
                        </div>
                    </div>
                </Box>
            </StyledEngineProvider>
            <StyledEngineProvider injectFirst>
                <Box>
                    <div className="container-arrival-time">
                        <div className="label-container d-flex justify-content-between">
                            <label >Время прибытия</label>
                        </div>
                        <Slider
                            value={value_end}
                            onChange={handleChangeEnd}
                            onChangeCommitted={changeCommittedHenlder}
                            valueLabelDisplay="off"
                            max={23}
                            min={0}
                            disableSwap
                            className='slider_time'
                        />
                        <div className="label-container d-flex justify-content-between">
                            <label >{`${value_end[0]}:00`}</label>
                            <label >{`${value_end[1]}:00`}</label>
                        </div>
                    </div>
                </Box>
            </StyledEngineProvider >
        </>
    );
}