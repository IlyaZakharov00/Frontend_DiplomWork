import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './TrainsFirstClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';
import modalWindowsSlice from '../../../redux/slices/modalWindows';
import { Modal_Error } from '../../../Modals/Modal_Error/Modal_Error';
import { TState } from '../../../redux/types/State/State';

export const TrainsFirstClass = memo(() => {

    const dispatch = useDispatch();
    const searchSeatsState = useSelector((state: TState) => state.searchSeatsState);
    const priceForTickets = useSelector((state: TState) => state.priceForTickets);
    const passangersState = useSelector((state: TState) => state.passangersState);
    const choicesSeats = priceForTickets.choiceSeats;

    const arraySeatsSize = 4;
    const arraySeatFourth = [];

    for (let i = 0; i < searchSeatsState.choiceCoach.seats.length; i += arraySeatsSize) {
        arraySeatFourth.push(searchSeatsState.choiceCoach.seats.slice(i, i + arraySeatsSize));
    }

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const price = searchSeatsState.choiceCoach.coach.price as number;

        if (passangersState.countAdult + passangersState.countChild === 0) {
            dispatch(modalWindowsSlice.actions.showModalWindow({ type: "modal_error", content: "Заполните пожалуйста количество мест." }))
            return;
        }
        if (btn.classList.contains('btn-seat-choice')) {
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: price })) : dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: price }))
        } else {
            if (priceForTickets.choiceSeats.length === (passangersState.countAdult + passangersState.countChild)) return;
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: price })) : dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: price }))
        }
    }

    return (
        <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
            <div className="btn-seat-container p-0">
                <div className="seat-container flex-lg-row flex-column align-items-center ">
                    {arraySeatFourth.map((coupe: any, indexCoupe: number) =>
                        <div className={`lux lux-${indexCoupe + 1} gap-1`} key={Math.random().toString(36).substring(2)}>
                            {coupe.map((seat: any, indexSeat: number) => {
                                return (
                                    <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={indexSeat}>{seat.index}</button>
                                )
                            })}
                        </div>
                    )}
                </div>
                {(Number(passangersState.countAdult) + Number(passangersState.countChild)) === 0 ? <Modal_Error /> : <></>}
            </div>
        </div>
    )
})