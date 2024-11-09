import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';
import './TraincFourthClass.css'

export const TrainsFourthClass = memo(() => {
    const dispatch = useDispatch();
    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const priceForTicketsState = useSelector((state: any) => state.priceForTickets);

    const arraySeatsSize = 8;
    const arraySeatsSizeFourth = 4;

    const arraySeat = [];
    const arraySeatFourth = [];
    const arraySeatFourthPair = [];
    const arraySeatFourthPair2 = [];

    for (let i = 0; i < searchSeatsState.choiceCoach.seats.length; i += arraySeatsSize) {
        arraySeat.push(searchSeatsState.choiceCoach.seats.slice(i, i + arraySeatsSize));
    }

    for (const item of arraySeat) {
        const arrCoupe = [];
        for (let i = 0; i < item.length; i += arraySeatsSizeFourth) {
            const pair = item.slice(i, i + arraySeatsSizeFourth);
            arrCoupe.push(pair)
        }
        arraySeatFourth.push(arrCoupe);
    }

    for (const item of arraySeatFourth) {
        const arrCoupe = [];
        for (let i = 0; i < item.length; i += arraySeatsSizeFourth) {
            const pair = item.slice(i, i + arraySeatsSizeFourth);
            arrCoupe.push(pair)
        }
        arraySeatFourthPair.push(arrCoupe);
    }

    for (const arraysFourth of arraySeatFourthPair) {
        const arrLeft = [];
        const arrRight = [];
        let count = 0;
        for (const arrayTwo of arraysFourth) {
            count = 0;
            for (const itemArr of arrayTwo) {
                for (let i = 0; i < itemArr.length; i += 2) {
                    const pair = itemArr.slice(i, i + 2);
                    count < 2 ? arrLeft.push(pair) : arrRight.push(pair)
                    count++
                }
            }
            arraySeatFourthPair2.push([arrLeft, arrRight])
        }
    }

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const priceUpSeat = searchSeatsState.choiceCoach.coach.top_price as number;
        const priceDownSeat = searchSeatsState.choiceCoach.coach.bottom_price as number;
        const priceLinens = searchSeatsState.choiceCoach.coach.linens_price as number;

        if (btn.classList.contains('btn-seat-choice')) {
            btn.classList.remove("btn-seat-choice")
            !searchSeatsState.choiceCoach.coach.is_linens_included && !priceForTicketsState.linens.payload.choice ? dispatch(priceForTicketstsSlice.actions.deleteSeat(priceLinens)) : <></>;
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.deleteSeat(priceDownSeat))
        } else {
            btn.classList.add('btn-seat-choice')
            !searchSeatsState.choiceCoach.coach.is_linens_included && priceForTicketsState.linens.payload.choice ? dispatch(priceForTicketstsSlice.actions.addSeat(priceLinens)) : <></>;
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.addSeat(priceDownSeat))
        }
    }

    return (
        <>
            <div className='seats-draw col-8 col-md-3 col-lg-12 m-auto mb-5'>
                <div className="btn-seat-container p-0">
                    <div className="seat-container flex-lg-row flex-column align-items-center align-items-lg-start">
                        {arraySeatFourthPair2.map((coupe: any, indexCoupe: number) =>
                            <div className={`range-${indexCoupe + 1} d-flex flex-lg-column flex-row`} key={Math.random().toString(36).substring(2)}>
                                {coupe.map((twoArraysSeat: any, indexTwoArraysSeat: number) => {
                                    return (
                                        <div className={indexTwoArraysSeat === 0 ? 'up' : 'down'} key={Math.random().toString(36).substring(2)}>
                                            {twoArraysSeat.map((pair: any, pairIndex: number) => {
                                                return (
                                                    pairIndex === 0 ?
                                                        <div className='row-left' key={Math.random().toString(36).substring(2)}>
                                                            {pair.map((seat: any, seatIndex: number) => {
                                                                return (<button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)
                                                            })}
                                                        </div> :
                                                        <div className='row-right' key={Math.random().toString(36).substring(2)}>
                                                            {pair.map((seat: any, seatIndex: number) => {
                                                                return (<button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)
                                                            })}
                                                        </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
})
