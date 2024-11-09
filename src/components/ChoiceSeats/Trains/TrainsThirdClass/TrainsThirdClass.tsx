import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './TtarinsThirdClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';

export const TrainsThirdClass = memo(() => {

    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);

    const arraySeatsSize = 4;
    const arraySeatFourth = [];
    const arraySeatFourthPair = [];
    let indexSideSeat = 32;
    let indexSideSeat_ = 32;

    for (let i = 0; i < searchSeatsState.choiceCoach.seats.length; i += arraySeatsSize) {
        arraySeatFourth.push(searchSeatsState.choiceCoach.seats.slice(i, i + arraySeatsSize));
    }

    for (const item of arraySeatFourth) {
        const arrSide = [];
        let arrCoupe = [];
        let count = 0;
        let pair = [];

        for (let i = indexSideSeat; i < searchSeatsState.choiceCoach.seats.length; i++) {
            if (count === 2) continue;
            pair.push(searchSeatsState.choiceCoach.seats[i]);
            arrSide.push(searchSeatsState.choiceCoach.seats[i]);
            count++;
            indexSideSeat++;
        }

        for (let i = 0; i < item.length; i += 2) {
            const pair = item.slice(i, i + 2);
            arrCoupe.push(pair);
        }
        arraySeatFourthPair.push([arrCoupe, arrSide]);
    }

    for (const arrays of arraySeatFourthPair) {
        for (const itemArr of arrays[0]) {
            for (const item of itemArr) {
                if (item.index > indexSideSeat_) {
                    arraySeatFourthPair.splice(arraySeatFourthPair.indexOf(arrays))
                    break;
                }
            }
        }
    }

    const dispatch = useDispatch();

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const priceUpSeat = searchSeatsState.choiceCoach.coach.top_price as number;
        const priceDownSeat = searchSeatsState.choiceCoach.coach.bottom_price as number;
        const priceSideSeat = searchSeatsState.choiceCoach.coach.side_price as number;

        if (btn.classList.contains('btn-seat-choice')) {
            btn.classList.remove("btn-seat-choice")
            if (idSeat > indexSideSeat_) {
                dispatch(priceForTicketstsSlice.actions.deleteSeat(priceSideSeat))
                return;
            }
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.deleteSeat(priceDownSeat))
        } else {
            btn.classList.add('btn-seat-choice')
            if (idSeat > indexSideSeat_) {
                dispatch(priceForTicketstsSlice.actions.addSeat(priceSideSeat))
                return;
            }
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.addSeat(priceDownSeat))
        }
    }

    return (
        <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
            <div className="btn-seat-container-plac p-0">
                <div className="seat-container-plac d-flex flex-lg-column flex-row justify-content-between-lg justify-content-center">
                    <div className="plac-container d-flex flex-lg-row flex-column">

                        {arraySeatFourthPair.map((coupe: any, indexCoupe: number) => {
                            return (
                                <div className={`plac plac-${indexCoupe + 1} flex-lg-column flex-row gap-5`} key={Math.random().toString(36).substring(2)}>
                                    {coupe.map((item: any, itemIndex: number) => {
                                        return (
                                            itemIndex === 0 ?
                                                <div className="plac-container" key={Math.random().toString(36).substring(2)}>
                                                    {item.map((pair: any, indexPair: number) => {
                                                        return (
                                                            indexPair === 0 ?
                                                                <div className="left" key={Math.random().toString(36).substring(2)}>
                                                                    {pair.map((seat: any, seatIndex: number) => <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                                                </div> :
                                                                <div className="right" key={Math.random().toString(36).substring(2)}>
                                                                    {pair.map((seat: any, seatIndex: number) => <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                                                </div>
                                                        )
                                                    })}
                                                </div> :
                                                <div className={`aside seats-${itemIndex}`} key={Math.random().toString(36).substring(2)}>
                                                    <div className="aside-seat-container aside-seat-1 flex-lg-row flex-column" key={Math.random().toString(36).substring(2)}>
                                                        <div className="seat-up d-flex flex-lg-row flex-column" key={Math.random().toString(36).substring(2)}>
                                                            {item.map((seat: any, seatIndex: number) => <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
})