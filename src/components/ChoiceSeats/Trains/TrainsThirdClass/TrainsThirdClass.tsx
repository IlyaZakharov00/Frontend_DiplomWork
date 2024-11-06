import { useSelector } from 'react-redux';
import './TtarinsThirdClass.css'
import React from 'react';

export const TrainsThirdClass = () => {

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
            <div className="btn-seat-container-plac p-0">
                <div className="seat-container-plac d-flex flex-lg-column flex-row justify-content-between-lg justify-content-center">
                    <div className="plac-container d-flex flex-lg-row flex-column">
                        <div className="plac plac-1 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
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
                            <div className="aside seats-1">
                                <div className="aside-seat-container aside-seat-1 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className={searchSeatsState.choiceCoach.seats[32].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='33' disabled={!searchSeatsState.choiceCoach.seats[32].available} onClick={choiceSeats}>
                                            33
                                        </button>
                                    </div>
                                    <div className="seat-down">
                                        <button className={searchSeatsState.choiceCoach.seats[33].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='34' disabled={!searchSeatsState.choiceCoach.seats[33].available} onClick={choiceSeats}>
                                            34
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-2 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
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
                            <div className="aside seats-2">
                                <div className="aside-seat-container aside-seat-2  flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className={searchSeatsState.choiceCoach.seats[34].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='35' disabled={!searchSeatsState.choiceCoach.seats[34].available} onClick={choiceSeats}>
                                            35
                                        </button>
                                    </div>
                                    <div className="seat-down">
                                        <button className={searchSeatsState.choiceCoach.seats[35].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='36' disabled={!searchSeatsState.choiceCoach.seats[35].available} onClick={choiceSeats}>
                                            36
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-3 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
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
                            <div className="aside seats-3">
                                <div className="aside-seat-container aside-seat-3 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='37' disabled onClick={choiceSeats}>37</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='38' disabled onClick={choiceSeats}>38</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-4 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
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
                            <div className="aside seats-4">
                                <div className="aside-seat-container aside-seat-4 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='39' disabled onClick={choiceSeats}>39</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='40' disabled onClick={choiceSeats}>40</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-5 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
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
                            <div className="aside seats-5">
                                <div className="aside-seat-container aside-seat-5 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='41' disabled onClick={choiceSeats}>41</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='42' disabled onClick={choiceSeats}>42</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-6 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
                                <div className="left">
                                    <button className="btn-seat" disabled>21</button>
                                    <button className="btn-seat" disabled>22</button>
                                </div>
                                <div className="right">
                                    <button className="btn-seat" disabled>23</button>
                                    <button className="btn-seat" disabled>24</button>
                                </div>
                            </div>
                            <div className="aside seats-6">
                                <div className="aside-seat-container aside-seat-6 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='43' disabled onClick={choiceSeats}>43</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='44' disabled onClick={choiceSeats}>44</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-7 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
                                <div className="left">
                                    <button className="btn-seat" disabled>25</button>
                                    <button className="btn-seat" disabled>26</button>
                                </div>
                                <div className="right">
                                    <button className="btn-seat" disabled>27</button>
                                    <button className="btn-seat" disabled>28</button>
                                </div>
                            </div>
                            <div className="aside seats-7">
                                <div className="aside-seat-container aside-seat-7 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='45' disabled onClick={choiceSeats}>45</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='46' disabled onClick={choiceSeats}>46</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plac plac-8 flex-lg-column flex-row gap-5">
                            <div className="plac-container">
                                <div className="left">
                                    <button className="btn-seat" disabled>29</button>
                                    <button className="btn-seat" disabled>30</button>
                                </div>
                                <div className="right">
                                    <button className="btn-seat" disabled>31</button>
                                    <button className="btn-seat" disabled>32</button>
                                </div>
                            </div>
                            <div className="aside seats-8">
                                <div className="aside-seat-container aside-seat-8 flex-lg-row flex-column">
                                    <div className="seat-up">
                                        <button className='btn-seat btn-notAvailable' id='47' disabled onClick={choiceSeats}>47</button>
                                    </div>
                                    <div className="seat-down">
                                        <button className='btn-seat btn-notAvailable' id='48' disabled onClick={choiceSeats}>48</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}





