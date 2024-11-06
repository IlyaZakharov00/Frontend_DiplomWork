import { useSelector } from 'react-redux';
import './TrainsFirstClass.css'

export const TrainsFirstClass = () => {

    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    // const seats = searchSeatsState.choiceCoach.seats
    // const numberCoach = searchSeatsState.choiceNumberCoach

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        if (btn.classList.contains('btn-seat-choice')) {
            btn.classList.remove("btn-seat-choice")
        } else {
            btn.classList.add('btn-seat-choice')
        }
    }
    return (
        <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
            <div className="btn-seat-container p-0">
                <div className="seat-container flex-lg-row flex-column align-items-center ">
                    <div className="lux lux-1 gap-1">
                        <button className={searchSeatsState.choiceCoach.seats[0].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='1' disabled={!searchSeatsState.choiceCoach.seats[0].available} onClick={choiceSeats}>
                            1
                        </button>
                        <button className={searchSeatsState.choiceCoach.seats[1].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='2' disabled={!searchSeatsState.choiceCoach.seats[1].available} onClick={choiceSeats}>
                            2
                        </button>
                    </div>
                    <div className="lux lux-2 gap-1">
                        <button className={searchSeatsState.choiceCoach.seats[2].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='3' disabled={!searchSeatsState.choiceCoach.seats[2].available} onClick={choiceSeats}>
                            3
                        </button>
                        <button className={searchSeatsState.choiceCoach.seats[3].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='4' disabled={!searchSeatsState.choiceCoach.seats[3].available} onClick={choiceSeats}>
                            4
                        </button>
                    </div>
                    <div className="lux lux-3 gap-1">
                        <button className='btn-seat btn-notAvailable' id='5' disabled onClick={choiceSeats}>5</button>
                        <button className='btn-seat btn-notAvailable' id='6' disabled onClick={choiceSeats}>6</button>
                    </div>
                    <div className="lux lux-4 gap-1">
                        <button className='btn-seat btn-notAvailable' id='7' disabled onClick={choiceSeats}>7</button>
                        <button className='btn-seat btn-notAvailable' id='8' disabled onClick={choiceSeats}>8</button>
                    </div>
                    <div className="lux lux-5 gap-1">
                        <button className='btn-seat btn-notAvailable' id='9' disabled onClick={choiceSeats}>9</button>
                        <button className='btn-seat btn-notAvailable' id='10' disabled onClick={choiceSeats}>10</button>
                    </div>
                    <div className="lux lux-6 gap-1">
                        <button className='btn-seat btn-notAvailable' id='11' disabled onClick={choiceSeats}>11</button>
                        <button className='btn-seat btn-notAvailable' id='12' disabled onClick={choiceSeats}>12</button>
                    </div>
                    <div className="lux lux-7 gap-1">
                        <button className='btn-seat btn-notAvailable' id='13' disabled onClick={choiceSeats}>13</button>
                        <button className='btn-seat btn-notAvailable' id='14' disabled onClick={choiceSeats}>14</button>
                    </div>
                    <div className="lux lux-8 gap-1">
                        <button className='btn-seat btn-notAvailable' id='14' disabled onClick={choiceSeats}>15</button>
                        <button className='btn-seat btn-notAvailable' id='15' disabled onClick={choiceSeats}>16</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
