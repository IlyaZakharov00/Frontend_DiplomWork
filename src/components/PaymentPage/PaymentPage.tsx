import './PaymentPage.css'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { DetailsTravel } from '../AddPassengers/DetailsTravel/DetailsTravel'
import { Modal_Info } from '../Modals/Modal_Info/Modal_Info'
import { IPayFrorm } from '../redux/types/PayForm/PayForm'
import { Modal_Error } from '../Modals/Modal_Error/Modal_Error'
import modalWindowsSlice from '../redux/slices/modalWindows'
import payInfoSlice from '../redux/slices/payInfoSlice'
import { useNavigate } from 'react-router-dom'
import menuSlice from '../redux/slices/menuSlice'
import { TState } from '../redux/types/State/State'

export const PaymentPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const statePayInfo = useSelector((state: TState) => state.payInfo)
    const menuState = useSelector((state: TState) => state.menuState)

    const { register, handleSubmit, formState, watch, reset } = useForm<IPayFrorm>({
        mode: 'onChange',
    })

    useEffect(() => {
        if (statePayInfo)
            reset({
                'email': statePayInfo.email,
                'lastname': statePayInfo.lastname,
                'name': statePayInfo.name,
                'payMethod': statePayInfo.payMethod,
                'surname': statePayInfo.surname,
                'telNumber': statePayInfo.telNumber,
            })
    }, [reset])

    useEffect(() => {
        dispatch(menuSlice.actions.openPay())
    }, [])

    const methodPay = watch('payMethod')
    useEffect(() => {
        methodPay === 'Онлайн' ? dispatch(modalWindowsSlice.actions.showModalWindow({ type: 'modal_error', content: 'К сожалению, сейчас оплата онлайн не работает. Выберите, пожалуйста, другой способ оплаты.' })) : <></>
    }, [methodPay])

    const onSubmit: SubmitHandler<IPayFrorm> = (data) => {
        if (menuState.changePassengers) {

        } else {
            dispatch(payInfoSlice.actions.addPerson(data))
        }
        navigate('/Frontend_DiplomWork/checkPage')
    }

    return (
        <div className='addPassangers-container mb-5'>
            <div className="row m-auto pt-5 d-flex justify-content-between w-75 gap-5">
                <div className="col-xl-3 col-lg-12 p-0">
                    <DetailsTravel />
                </div>
                <div className="col-xl-8 col-lg-12 p-0 d-flex flex-column">
                    <div className="accordion accordion-flush d-flex flex-column gap-5 mb-5" id="accordionFlushExample_4">

                        <div className="accordion-item" >
                            <h2 className="accordion-header" id='flush-headingOne_paymentPage'>
                                <button className="accordion-button p-3 accordion-button-paymentPage" type="button" data-bs-toggle="collapse" data-bs-target='#flush-collapseOne_paymentPage' aria-expanded="false" aria-controls='flush-collapseOne_paymentPage' key={Math.random().toString(36).substring(2)}>
                                    <div className="icon_open-close" ></div>
                                    <h2 className='personal_info m-0 ms-3'>Персональные данные</h2>
                                </button>
                            </h2>

                            <div id='flush-collapseOne_paymentPage' className="accordion-collapse collapse show" aria-labelledby='flush-headingOne_paymentPage' data-bs-parent='#accordionFlushExample_paymentPage' >
                                <form className='w-100 form-about-passanger py-5 px-4' id='personal-info' onSubmit={handleSubmit(onSubmit)}>

                                    <div className="name-passenger d-flex justify-content-center mb-5 px-3 gap-3 flex-lg-row flex-column">
                                        <div className="surname-container d-flex flex-column col-lg-4 col-12">
                                            <label className='label-text'>Фамилия</label>
                                            <input className='input-text'
                                                type="text"
                                                placeholder='Фамилия'
                                                {...register('lastname', {
                                                    required: "Это поле обязательно для заполнения."
                                                })} />
                                            {formState.errors.lastname ? <div className='input-error'>{formState.errors['lastname']?.message}</div> : <></>}
                                        </div>
                                        <div className="name-container d-flex flex-column col-lg-4 col-12">
                                            <label className='label-text'>Имя</label>
                                            <input className='input-text'
                                                type="text"
                                                placeholder='Имя'
                                                {...register('name', {
                                                    required: 'Это поле обязательно для заполнения.'
                                                })} />
                                            {formState.errors.name ? <div className='input-error'>{formState.errors['name']?.message}</div> : <></>}
                                        </div>
                                        <div className="lastname-container d-flex flex-column col-lg-4 col-12">
                                            <label className='label-text'>Отчество</label>
                                            <input className='input-text'
                                                type="text"
                                                placeholder='Отчество'
                                                {...register('surname', {
                                                    required: "Это поле обязательно для заполнения."
                                                })} />
                                            {formState.errors.surname ? <div className='input-error'>{formState.errors['surname']?.message}</div> : <></>}
                                        </div>
                                    </div>

                                    <div className="telNumber d-flex mb-5 gap-3 flex-lg-row flex-column">
                                        <div className="surname-container d-flex flex-column col-lg-4 col-12">
                                            <label className='label-text'>Телефон</label>
                                            <input className='input-text'
                                                type="text"
                                                placeholder='+7 _ _ _ _ _ _ _ _ _ _'
                                                {...register('telNumber', {
                                                    required: "Это поле обязательно для заполнения.",
                                                    pattern: {
                                                        value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gm,
                                                        message: 'Введенный номер не соответствует формату.'
                                                    }
                                                })} />
                                            {formState.errors.telNumber ? <div className='input-error'>{formState.errors['telNumber']?.message}</div> : <></>}
                                        </div>
                                    </div>

                                    <div className="email d-flex mb-5 gap-3 flex-lg-row flex-column">
                                        <div className="surname-container d-flex flex-column col-lg-4 col-12">
                                            <label className='label-text'>E-mail</label>
                                            <input className='input-text'
                                                type="email"
                                                placeholder='inbox@mail.ru'
                                                {...register('email', {
                                                    required: "Это поле обязательно для заполнения.",
                                                    pattern: {
                                                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/gm,
                                                        message: 'Неверный формат почты.'
                                                    }
                                                })} />
                                            {formState.errors.email ? <div className='input-error'>{formState.errors['email']?.message}</div> : <></>}
                                        </div>
                                    </div>

                                    <div className="invalid-container mb-5 d-flex flex-column">
                                        <label className='payMethod-label mb-3'>Способ оплаты</label>
                                        <div className="payOnline">
                                            <div className="input-container d-flex flex-row align-items-center mb-3">
                                                <input className='payMethod-input form-check-input'
                                                    value={'Онлайн'} type="radio" id='payMethod-online'
                                                    {...register('payMethod', {
                                                        required: "Это поле обязательно для заполнения."
                                                    })} />
                                                <label className='payOnline-label'>Онлайн</label>
                                                {formState.errors.payMethod ? <div className='input-error'>{formState.errors['payMethod']?.message}</div> : <></>}
                                            </div>

                                            <ul className="methodsPay-online d-flex gap-5 mb-3 p-0 justify-content-between flex-lg-row flex-column">
                                                <li className='methods-item'>Банковской картой</li>
                                                <li className='methods-item'>PayPal</li>
                                                <li className='methods-item'>Visa Qiwi Wallet</li>
                                            </ul>
                                        </div>
                                        <div className="payCash d-flex flex-row align-items-center">
                                            <input className='payMethod-input form-check-input'
                                                value='Наличными' type="radio" id='payMethod-cash'
                                                {...register('payMethod', {
                                                    required: "Это поле обязательно для заполнения."
                                                })} />
                                            <label className='payCash-label'>Наличными</label>
                                            {formState.errors.payMethod ? <div className='input-error'>{formState.errors['payMethod']?.message}</div> : <></>}
                                        </div>
                                    </div>
                                    {formState.isSubmitSuccessful ? <Modal_Info /> : <></>}
                                </form >
                            </div>
                        </div>
                        {methodPay === 'Онлайн' ? <Modal_Error /> : <></>}
                        <button type='submit' form='personal-info' className={'btn-next p-2 col-lg-4 col-6 align-self-end ' + `${methodPay === 'Онлайн' ? "btn-disabled" : ""}`} disabled={methodPay === 'Онлайн'} >Купить билеты</button>
                    </div>
                </div>
            </div >
        </div >
    )
}