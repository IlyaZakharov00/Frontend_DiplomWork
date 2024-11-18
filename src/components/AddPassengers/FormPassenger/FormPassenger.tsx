import { FormEvent, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { IForm, IFormProps } from '../../redux/types/Passengers/interfaceForm/interfaceForm'
import { Modal_Info } from '../../Modals/Modal_Info/Modal_Info'
import modalWindowsSlice from '../../redux/slices/modalWindows'
import passangerDataSlice from '../../redux/slices/passangersDataSlice'
import './FormPassanger.css'
import { TState } from '../../redux/types/State/State'

export const FormPassenger = (props: IFormProps) => {
    const dispatch = useDispatch();
    const passangersDataState = useSelector((state: TState) => state.passangersDataState)

    const { register, handleSubmit, formState, watch, reset, setValue } = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            'document_type': 'Паспорт РФ',
            'age': "Взрослый",
        },
    })

    const documentType = watch('document_type')

    useEffect(() => {
        if (props.defaultPassangers)
            reset({
                'age': props.defaultPassangers.age,
                'date_birthday': props.defaultPassangers.date_birthday,
                'document_type': props.defaultPassangers.document_type,
                'gender': props.defaultPassangers.gender,
                'invalid': props.defaultPassangers.invalid,
                'lastname': props.defaultPassangers.lastname,
                'name': props.defaultPassangers.name,
                'number_document': props.defaultPassangers.number_document,
                'seria_document': props.defaultPassangers.seria_document,
                'surname': props.defaultPassangers.surname,
            })
    }, [reset])

    useEffect(() => {
        setValue('number_document', "")
        setValue('seria_document', "")
    }, [watch('document_type')])


    const onSubmit: (SubmitHandler<IForm> | FormEvent) = (data, e) => {
        const form = e?.target as HTMLFormElement;
        const formID = form.getAttribute("id")
        formID ? data.id = formID : ""

        for (let i = 0; i < passangersDataState.allPassanger.length; i++) {
            if (passangersDataState.allPassanger[i].id === formID) {
                dispatch(passangerDataSlice.actions.changePassangers(data))
                dispatch(modalWindowsSlice.actions.showModalWindow({ type: 'modal_info', content: 'Данные пассажира успешно изменены!' }))
                return
            }
        }

        dispatch(modalWindowsSlice.actions.showModalWindow({ type: 'modal_info', content: 'Пассажир успешно добавлен!' }))
        dispatch(passangerDataSlice.actions.addPassenger(data))
    }

    return (
        <form className='w-100 form-about-passanger px-4 py-5' onSubmit={handleSubmit(onSubmit)} id={props.defaultPassangers ? props.defaultPassangers.id : Math.random().toString(36).substring(2)} >

            <div className="age-passenger mb-5" >
                <select className='select-age-passenger col-lg-5 col-12 p-2' {...register('age')} >
                    <option className='age-passenger-option' value="Взрослый" >Взрослый</option>
                    <option className='age-passenger-option' value="Ребенок" >Детский</option>
                    <option className='age-passenger-option' value="Ребенок без места">Детский без места</option>
                </select>
            </div>

            <div className="name-passenger d-flex justify-content-center mb-5 gap-3 px-3 flex-lg-row flex-column">
                <div className="surname-container d-flex flex-column col-lg-4 col-12">
                    <label className='label-text'>Фамилия</label>
                    <input className='input-text'
                        type="text"
                        placeholder='Фамилия'
                        {...register('lastname', {
                            required: "Это поле обязательно для заполнения.",
                        })} />
                    {formState.errors.lastname ? <div className='input-error'>{formState.errors['lastname']?.message}</div> : <></>}
                </div>
                <div className="name-container d-flex flex-column col-lg-4 col-12">
                    <label className='label-text'>Имя</label>
                    <input className='input-text'
                        type="text"
                        placeholder='Имя'
                        {...register('name', {
                            required: 'Это поле обязательно для заполнения.',
                        })} />
                    {formState.errors.name ? <div className='input-error'>{formState.errors['name']?.message}</div> : <></>}
                </div>
                <div className="lastname-container d-flex flex-column col-lg-4 col-12">
                    <label className='label-text'>Отчество</label>
                    <input className='input-text'
                        type="text"
                        placeholder='Отчество'
                        {...register('surname', {
                            required: "Это поле обязательно для заполнения.",
                        })} />
                    {formState.errors.surname ? <div className='input-error'>{formState.errors['surname']?.message}</div> : <></>}
                </div>
            </div>
            <div className="gender-and-birthday-passanger-container d-flex mb-5 gap-5 flex-column flex-lg-row" >

                <div className="gender-conainer col-3 d-flex flex-column col-lg-4 col-12">
                    <div className="gender-checkbox-container" >
                        <label className='label-text'>Пол</label>
                    </div>

                    <div className="container-label-gender w-75 d-flex">
                        <label className="checkbox-container d-flex ">
                            <input className='checkbox-input'
                                type="radio"
                                value={"Мужской"}
                                {...register('gender', {
                                    required: "Это поле обязательно для заполнения."
                                })} />
                            <span className='gender-letter'>М</span>
                        </label>

                        <label className="checkbox-container d-flex ">
                            <input className='checkbox-input'
                                type="radio"
                                value={"Женский"}
                                {...register('gender', {
                                    required: 'Это поле обязательно для заполнения.'
                                })} />
                            <span className='gender-letter'>Ж</span>
                        </label>
                    </div>
                    {formState.errors.gender ? <div className='input-error'>{formState.errors['gender']?.message}</div> : <></>}
                </div>

                <div className="birhday-container d-flex flex-column justify-content-between col-lg-4 col-12 " >
                    <label className='label-text'>Дата рождения</label>
                    <input className='input-text'
                        type="text"
                        placeholder='ДД/ММ/ГГ'
                        {...register('date_birthday', {
                            required: 'Это поле обязательно для заполнения.',
                            pattern: {
                                value: /\d{2}.\d{2}.\d{4}/,
                                message: "Дата введена в неверном формате."
                            }
                        })} />
                    {formState.errors.date_birthday ? <div className='input-error'>{formState.errors['date_birthday']?.message}</div> : <></>}
                </div>
            </div>

            <div className="invalid-container mb-5 d-flex align-items-center">
                <input className='invalid-input form-check-input' type="checkbox" id='invalid'{...register("invalid")} />
                <label className='invalid-label ms-3' >ограниченная подвижность</label>
            </div>

            <div className="document-passenger d-flex justify-content-center mb-5 gap-3 d-flex flex-column flex-lg-row">

                <div className={documentType === 'Паспорт РФ' ? "select-container col-lg-4 col-12" : "select-container col-lg-5 col-12"} >
                    <label className='label-text'>Тип документа</label>
                    <select className="type-document-select w-100 p-2" {...register("document_type")}>
                        <option className='document-option' value="Паспорт РФ">Паспорт РФ</option>
                        <option className='document-option' value="Свидетельство о рождении">Свидетельсвто о рождении</option>
                    </select>
                </div>

                {documentType === 'Паспорт РФ' ?
                    <div className="seria-document-container d-flex flex-column col-lg-4 col-12" >
                        <label className='label-text'>Серия</label>
                        <input className='input-seria-document m-0 p-2'
                            type="text"
                            placeholder='_  _  _  _'
                            {...register('seria_document', {
                                required: "Это поле обязательно для заполнения.",
                                maxLength: {
                                    value: 4,
                                    message: "Серия документа введена в неверном формате."
                                },
                                pattern: {
                                    value: /\d{4}/,
                                    message: "Неверная серия документа."
                                }
                            })} />
                        {formState.errors.seria_document ? <div className='input-error'>{formState.errors['seria_document']?.message}</div> : <></>}
                    </div> : <></>}

                <div className="number-document-container d-flex flex-column col-lg-4 col-12">
                    <label className='label-text'>Номер</label>
                    <input className='input-number-document m-0 p-2'
                        type="text"
                        placeholder='_  _  _  _  _  _'
                        {...register("number_document", {
                            required: "Это поле обязательно для заполнения.",
                            maxLength: {
                                value: documentType === 'Паспорт РФ' ? 6 : 12,
                                message: 'Неверный номер документа'
                            },
                            pattern: {
                                value: documentType === 'Паспорт РФ' ? /\d{6}/ : /[A-Za-zА-Я]{6}\d{6}/gm,
                                message: "Номер документа введен в неверном формате."
                            }
                        })} />
                    {formState.errors.number_document ? <div className='input-error'>{formState.errors['number_document']?.message}</div> : <></>}
                </div>
            </div>
            {/* <button className={formState.isSubmitSuccessful ? "btn-disabled p-2" : "btn-next p-2"} disabled={formState.isSubmitSuccessful}>Подтвердить пассажира</button> */}
            <button className={"btn-next p-2"}>Подтвердить пассажира</button>
            {formState.isSubmitSuccessful ? <Modal_Info /> : <></>}
        </form >
    )
}