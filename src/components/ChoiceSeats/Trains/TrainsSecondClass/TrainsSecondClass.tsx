import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './TrainsSecondClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';
import { Modal_Error } from '../../../Modals/Modal_Error/Modal_Error';
import modalWindowsSlice from '../../../redux/slices/modalWindows';

export const TrainsSecondClass = memo(() => {
    const dispatch = useDispatch();
    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const priceForTickets = useSelector((state: any) => state.priceForTickets);
    const passangersState = useSelector((state: any) => state.passangersState);
    const choicesSeats = priceForTickets.choiceSeats;

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
            arrCoupe.push(pair);
        }
        arraySeatFourthPair.push(arrCoupe);
    }

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const priceUpSeat = searchSeatsState.choiceCoach.coach.top_price as number;
        const priceDownSeat = searchSeatsState.choiceCoach.coach.bottom_price as number;

        if (passangersState.countAdult + passangersState.countChild === 0) {
            dispatch(modalWindowsSlice.actions.showModalWindow({ type: "modal_error", content: "Заполните пожалуйста количество мест." }))
            return;
        }

        if (btn.classList.contains('btn-seat-choice')) {
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: priceUpSeat })) : dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: priceDownSeat }))
        } else {
            if (priceForTickets.choiceSeats.length === (passangersState.countAdult + passangersState.countChild)) return;
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: priceUpSeat })) : dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: priceDownSeat }))
        }
    }

    return (
        <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
            <div className="btn-seat-container p-0">
                <div className="seat-container flex-lg-row flex-column align-items-center ">
                    {arraySeatFourthPair.map((coupe: any, indexCoupe: number) =>
                        <div className={`coupe coupe-${indexCoupe + 1}`} key={Math.random().toString(36).substring(2)}>
                            {coupe.map((pair: any, indexPair: number) => {
                                return (
                                    indexPair == 0 ?
                                        <div className="left" key={Math.random().toString(36).substring(2)}>
                                            {pair.map((seat: any, seatIndex: number) => <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                        </div>
                                        :
                                        <div className="right" key={Math.random().toString(36).substring(2)}>
                                            {pair.map((seat: any, seatIndex: number) => <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)}
                                        </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                {(Number(passangersState.countAdult) + Number(passangersState.countChild)) === 0 ? <Modal_Error /> : <></>}
            </div>
        </div >
    )
})