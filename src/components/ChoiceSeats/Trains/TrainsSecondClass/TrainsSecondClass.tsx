import { useSelector } from 'react-redux';
import './TrainsSecondClass.css'

export const TrainsSecondClass = () => {
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
        <>
            <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
                <div className="btn-seat-container p-0">
                    <div className="seat-container flex-lg-row flex-column align-items-center ">
                        <div className="coupe coupe-1">
                            <div className="left">
                                <button className={searchSeatsState.choiceCoach.seats[0].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='1' disabled={!searchSeatsState.choiceCoach.seats[0].available} onClick={choiceSeats}>
                                    1
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[1].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='2' disabled={!searchSeatsState.choiceCoach.seats[1].available} onClick={choiceSeats}>
                                    2
                                </button>
                            </div>
                            <div className="right">
                                <button className={searchSeatsState.choiceCoach.seats[2].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='3' disabled={!searchSeatsState.choiceCoach.seats[2].available} onClick={choiceSeats}>
                                    3
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[3].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='4' disabled={!searchSeatsState.choiceCoach.seats[3].available} onClick={choiceSeats}>
                                    4
                                </button>
                            </div>
                        </div>
                        <div className="coupe coupe-2">
                            <div className="left">
                                <button className={searchSeatsState.choiceCoach.seats[4].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='5' disabled={!searchSeatsState.choiceCoach.seats[4].available} onClick={choiceSeats}>
                                    5
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[5].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='6' disabled={!searchSeatsState.choiceCoach.seats[5].available} onClick={choiceSeats}>
                                    6
                                </button>
                            </div>
                            <div className="right">
                                <button className={searchSeatsState.choiceCoach.seats[6].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='7' disabled={!searchSeatsState.choiceCoach.seats[6].available} onClick={choiceSeats}>
                                    7
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[7].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='8' disabled={!searchSeatsState.choiceCoach.seats[7].available} onClick={choiceSeats}>
                                    8
                                </button>
                            </div>
                        </div>
                        <div className="coupe coupe-3">
                            <div className="left">
                                <button className={searchSeatsState.choiceCoach.seats[8].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='9' disabled={!searchSeatsState.choiceCoach.seats[8].available} onClick={choiceSeats}>
                                    9
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[9].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='10' disabled={!searchSeatsState.choiceCoach.seats[9].available} onClick={choiceSeats}>
                                    10
                                </button>
                            </div>
                            <div className="right">
                                <button className={searchSeatsState.choiceCoach.seats[10].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='11' disabled={!searchSeatsState.choiceCoach.seats[10].available} onClick={choiceSeats}>
                                    11
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[11].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='12' disabled={!searchSeatsState.choiceCoach.seats[11].available} onClick={choiceSeats}>
                                    12</button>
                            </div>
                        </div>
                        <div className="coupe coupe-4">
                            <div className="left">
                                <button className={searchSeatsState.choiceCoach.seats[12].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='13' disabled={!searchSeatsState.choiceCoach.seats[12].available} onClick={choiceSeats}>
                                    13
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[13].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='14' disabled={!searchSeatsState.choiceCoach.seats[13].available} onClick={choiceSeats}>
                                    14</button>
                            </div>
                            <div className="right">
                                <button className={searchSeatsState.choiceCoach.seats[14].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='15' disabled={!searchSeatsState.choiceCoach.seats[14].available} onClick={choiceSeats}>
                                    15
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[15].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='16' disabled={!searchSeatsState.choiceCoach.seats[15].available} onClick={choiceSeats}>
                                    16
                                </button>
                            </div>
                        </div>
                        <div className="coupe coupe-5">
                            <div className="left">
                                <button className={searchSeatsState.choiceCoach.seats[16].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='17' disabled={!searchSeatsState.choiceCoach.seats[16].available} onClick={choiceSeats}>
                                    17
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[17].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='18' disabled={!searchSeatsState.choiceCoach.seats[17].available} onClick={choiceSeats}>
                                    18
                                </button>
                            </div>
                            <div className="right">
                                <button className={searchSeatsState.choiceCoach.seats[18].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='19' disabled={!searchSeatsState.choiceCoach.seats[18].available} onClick={choiceSeats}>
                                    19
                                </button>
                                <button className={searchSeatsState.choiceCoach.seats[19].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='20' disabled={!searchSeatsState.choiceCoach.seats[19].available} onClick={choiceSeats}>
                                    20
                                </button>
                            </div>
                        </div>
                        <div className="coupe coupe-6">
                            <div className="left">
                                <button className="btn-seat" disabled>21</button>
                                <button className="btn-seat" disabled>22</button>
                            </div>
                            <div className="right">
                                <button className="btn-seat" disabled>23</button>
                                <button className="btn-seat" disabled>24</button>
                            </div>
                        </div>
                        <div className="coupe coupe-7">
                            <div className="left">
                                <button className="btn-seat" disabled>25</button>
                                <button className="btn-seat" disabled>26</button>
                            </div>
                            <div className="right">
                                <button className="btn-seat" disabled>27</button>
                                <button className="btn-seat" disabled>28</button>
                            </div>
                        </div>
                        <div className="coupe coupe-8">
                            <div className="left">
                                <button className="btn-seat" disabled>29</button>
                                <button className="btn-seat" disabled>30</button>
                            </div>
                            <div className="right">
                                <button className="btn-seat" disabled>31</button>
                                <button className="btn-seat" disabled>32</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
