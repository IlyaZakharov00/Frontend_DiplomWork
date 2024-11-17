import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsTravel } from './DetailsTravel/DetailsTravel'
import './AddPassengers.css'
import { FormPassenger } from './FormPassenger/FormPassenger';
import { TPassangersDataStateR, TPassangersStateR } from '../redux/types/Passengers/PassangersState';
import menuSlice from '../redux/slices/menuSlice';
import { useEffect } from 'react';

export const AddPassengers = () => {
    const passangersState = useSelector((state: TPassangersStateR) => state.passangersState);
    const passangersDataState = useSelector((state: TPassangersDataStateR) => state.passangersDataState);
    const passangerArray = new Array(passangersState.countAdult + passangersState.countChild + passangersState.countChildWithoutSeat).fill("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(menuSlice.actions.openPassangers())
    }, [])

    const nextPage = () => {
        navigate('/Frontend_DiplomWork/paymentPage')
    }

    return (
        <div className='addPassangers-container mb-5'>
            <div className="row m-auto pt-5 d-flex justify-content-between w-75 gap-5">
                <div className="col-xl-3 col-lg-12 p-0">
                    <DetailsTravel />
                </div>
                <div className="col-xl-8 col-lg-12 p-0 d-flex flex-column">
                    <div className="accordion accordion-flush d-flex flex-column gap-5 mb-5" id="accordionFlushExample_3">
                        {passangerArray.map((_item: any, itemIndex: number) => {
                            return (
                                <div className="accordion-item" key={Math.random().toString(36).substring(2)}>
                                    <h2 className="accordion-header" id={`flush-headingOne_${itemIndex + 4}`} key={Math.random().toString(36).substring(2)}>
                                        <button className="accordion-button p-3 accordion-button-passenger" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne_${itemIndex + 4}`} aria-expanded="false" aria-controls={`flush-collapseOne_${itemIndex + 4}`} key={Math.random().toString(36).substring(2)}>
                                            <div className="icon_open-close" key={Math.random().toString(36).substring(2)}></div>
                                            <h2 className='passenger_title m-0 ms-5' key={Math.random().toString(36).substring(2)}>{`Пассажир ${itemIndex + 1}`}</h2>
                                        </button>
                                    </h2>
                                    <div id={`flush-collapseOne_${itemIndex + 4}`} className="accordion-collapse collapse show" aria-labelledby={`flush-headingOne_${itemIndex + 4}`} data-bs-parent={`#accordionFlushExample_${itemIndex + 4}`} key={Math.random().toString(36).substring(2)}>
                                        <FormPassenger defaultPassangers={passangersDataState.allPassanger[itemIndex]} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button type='button' className={'btn-next col-lg-4 col-6 align-self-end mb-5 ' + `${passangersDataState.allPassanger.length < (passangersState.countAdult + passangersState.countChild + passangersState.countChildWithoutSeat) ? "btn-disabled" : ""}`} onClick={nextPage} disabled={passangersDataState.allPassanger.length < (passangersState.countAdult + passangersState.countChild + passangersState.countChildWithoutSeat)}>Далее</button>
                </div>
            </div >
        </div >
    )
}