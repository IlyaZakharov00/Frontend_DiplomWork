import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';
import './TraincFourthClass.css'
import modalWindowsSlice from '../../../redux/slices/modalWindows';
import { Modal_Error } from '../../../Modals/Modal_Error/Modal_Error';
import { TState } from '../../../redux/types/State/State';

export const TrainsFourthClass = memo(() => {
    const dispatch = useDispatch();
    const searchSeatsState = useSelector((state: TState) => state.searchSeatsState);
    const priceForTickets = useSelector((state: TState) => state.priceForTickets);
    const passangersState = useSelector((state: TState) => state.passangersState);
    const choicesSeats = priceForTickets.choiceSeats;

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
            arrCoupe.push(pair);
        }
        arraySeatFourth.push(arrCoupe);
    }

    for (const item of arraySeatFourth) {
        const arrCoupe = [];
        for (let i = 0; i < item.length; i += arraySeatsSizeFourth) {
            const pair = item.slice(i, i + arraySeatsSizeFourth);
            arrCoupe.push(pair);
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
            arraySeatFourthPair2.push([arrLeft, arrRight]);
        }
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
                                                            return (
                                                                <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)
                                                        })}
                                                    </div> :
                                                    <div className='row-right' key={Math.random().toString(36).substring(2)}>
                                                        {pair.map((seat: any, seatIndex: number) => {
                                                            return (
                                                                <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={seatIndex}>{seat.index}</button>)
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
                {(Number(passangersState.countAdult) + Number(passangersState.countChild)) === 0 ? <Modal_Error /> : <></>}
            </div>
        </div>
    )
})
