import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './TrainsSecondClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';

export const TrainsSecondClass = memo(() => {
    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const arraySeatsSize = 4;
    const arraySeatFourth = [];
    const arraySeatFourthPair = [];

    for (let i = 0; i < searchSeatsState.choiceCoach.seats.length; i += arraySeatsSize) {
        arraySeatFourth.push(searchSeatsState.choiceCoach.seats.slice(i, i + arraySeatsSize));
    }

    for (const item of arraySeatFourth) {
        const arrCoupe = [];
        for (let i = 0; i < item.length; i += 2) {
            const pair = item.slice(i, i + 2);
            arrCoupe.push(pair)
        }
        arraySeatFourthPair.push(arrCoupe);
    }

    const dispatch = useDispatch();

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const priceUpSeat = searchSeatsState.choiceCoach.coach.top_price as number;
        const priceDownSeat = searchSeatsState.choiceCoach.coach.bottom_price as number;

        if (btn.classList.contains('btn-seat-choice')) {
            btn.classList.remove("btn-seat-choice")
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.deleteSeat(priceDownSeat))
        } else {
            btn.classList.add('btn-seat-choice')
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat(priceUpSeat)) : dispatch(priceForTicketstsSlice.actions.addSeat(priceDownSeat))
        }
    }

    return (
        <>
            <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
                <div className="btn-seat-container p-0">
                    <div className="seat-container flex-lg-row flex-column align-items-center ">
                        {arraySeatFourthPair.map((coupe: any, indexCoupe: number) =>
                            <div className={`coupe coupe-${indexCoupe + 1}`} key={Math.random().toString(36).substring(2)}>
                                {coupe.map((pair: any, indexPair: number) => {
                                    return (
                                        indexPair == 0 ?
                                            <div className="left" key={Math.random().toString(36).substring(2)}>
                                                {pair.map((seat: any, seatIndex: number) => <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                            </div>
                                            :
                                            <div className="right" key={Math.random().toString(36).substring(2)}>
                                                {pair.map((seat: any, seatIndex: number) => <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                            </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}
)