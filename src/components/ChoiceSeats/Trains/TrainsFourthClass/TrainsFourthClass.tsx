import { useSelector } from 'react-redux';
import './TraincFourthClass.css'

export const TrainsFourthClass = () => {
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
            <div className='seats-draw col-8 col-md-3 col-lg-12 m-auto mb-5'>
                <div className="btn-seat-container p-0">
                    <div className="seat-container flex-lg-row flex-column align-items-center ">
                        <div className="row-first d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[0].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='1' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[0].available}>1</button>
                                    <button className={searchSeatsState.choiceCoach.seats[1].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='2' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[1].available}>2</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[2].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='3' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[2].available}>3</button>
                                    <button className={searchSeatsState.choiceCoach.seats[3].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='4' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[3].available}>4</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[32].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='33' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[32].available}>33</button>
                                    <button className={searchSeatsState.choiceCoach.seats[33].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='34' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[33].available}>34</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[34].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='35' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[34].available}>35</button>
                                    <button className={searchSeatsState.choiceCoach.seats[35].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='36' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[35].available}>36</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-second d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[4].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='5' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[4].available}>5</button>
                                    <button className={searchSeatsState.choiceCoach.seats[5].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='6' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[5].available}>6</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[6].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='7' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[6].available}>7</button>
                                    <button className={searchSeatsState.choiceCoach.seats[7].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='8' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[7].available}>8</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[36].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='37' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[36].available}>36</button>
                                    <button className={searchSeatsState.choiceCoach.seats[37].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='38' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[37].available}>38</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[38].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='39' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[38].available}>39</button>
                                    <button className={searchSeatsState.choiceCoach.seats[39].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='40' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[39].available}>40</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-third d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[8].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='9' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[8].available}>9</button>
                                    <button className={searchSeatsState.choiceCoach.seats[9].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='10' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[9].available}>10</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[10].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='11' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[10].available}>11</button>
                                    <button className={searchSeatsState.choiceCoach.seats[11].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='12' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[11].available}>12</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[40].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='41' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[40].available}>41</button>
                                    <button className={searchSeatsState.choiceCoach.seats[41].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='42' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[41].available}>42</button>
                                </div>
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[42].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='43' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[42].available}>43</button>
                                    <button className={searchSeatsState.choiceCoach.seats[43].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='44' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[43].available}>44</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-fourth d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[12].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='13' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[12].available}>13</button>
                                    <button className={searchSeatsState.choiceCoach.seats[13].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='14' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[13].available}>14</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[14].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='15' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[14].available}>15</button>
                                    <button className={searchSeatsState.choiceCoach.seats[15].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='16' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[15].available}>16</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[44].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='45' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[44].available}>45</button>
                                    <button className={searchSeatsState.choiceCoach.seats[45].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='46' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[45].available}>46</button>
                                </div>
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[46].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='47' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[46].available}>47</button>
                                    <button className={searchSeatsState.choiceCoach.seats[47].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='48' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[47].available}>48</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-five d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[16].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='17' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[16].available}>17</button>
                                    <button className={searchSeatsState.choiceCoach.seats[17].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='18' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[17].available}>18</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[18].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='19' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[18].available}>19</button>
                                    <button className={searchSeatsState.choiceCoach.seats[19].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='20' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[19].available}>20</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[48].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='49' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[48].available}>49</button>
                                    <button className={searchSeatsState.choiceCoach.seats[49].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='50' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[49].available}>50</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[50].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='51' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[50].available}>51</button>
                                    <button className={searchSeatsState.choiceCoach.seats[51].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='52' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[51].available}>52</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-six d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[20].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='21' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[20].available}>21</button>
                                    <button className={searchSeatsState.choiceCoach.seats[21].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='22' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[21].available}>22</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[22].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='23' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[22].available}>23</button>
                                    <button className={searchSeatsState.choiceCoach.seats[23].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='24' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[23].available}>24</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[52].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='53' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[52].available}>53</button>
                                    <button className={searchSeatsState.choiceCoach.seats[53].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='54' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[53].available}>54</button>
                                </div>
                                <div className="row-right">
                                    <button className='btn-seat btn-notAvailable' id='55' onClick={choiceSeats} disabled>55</button>
                                    <button className='btn-seat btn-notAvailable' id='56' onClick={choiceSeats} disabled>56</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-seven d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[24].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='25' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[24].available}>25</button>
                                    <button className={searchSeatsState.choiceCoach.seats[25].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='26' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[25].available}>26</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[26].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='27' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[26].available}>27</button>
                                    <button className={searchSeatsState.choiceCoach.seats[27].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='28' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[27].available}>28</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className='btn-seat btn-notAvailable' id='57' onClick={choiceSeats} disabled>57</button>
                                    <button className='btn-seat btn-notAvailable' id='58' onClick={choiceSeats} disabled>58</button>
                                </div>
                                <div className="row-right">
                                    <button className='btn-seat btn-notAvailable' id='59' onClick={choiceSeats} disabled>59</button>
                                    <button className='btn-seat btn-notAvailable' id='60' onClick={choiceSeats} disabled>60</button>
                                </div>
                            </div>
                        </div>
                        <div className="row-eight d-flex flex-lg-column flex-row">
                            <div className="up">
                                <div className="row-left">
                                    <button className={searchSeatsState.choiceCoach.seats[28].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='29' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[28].available}>29</button>
                                    <button className={searchSeatsState.choiceCoach.seats[29].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='30' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[29].available}>30</button>
                                </div>
                                <div className="row-right">
                                    <button className={searchSeatsState.choiceCoach.seats[30].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='31' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[30].available}>31</button>
                                    <button className={searchSeatsState.choiceCoach.seats[31].available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id='32' onClick={choiceSeats} disabled={!searchSeatsState.choiceCoach.seats[31].available}>32</button>
                                </div>
                            </div>
                            <div className="down">
                                <div className="row-left">
                                    <button className='btn-seat btn-notAvailable' id='61' onClick={choiceSeats} disabled>61</button>
                                    <button className='btn-seat btn-notAvailable' id='62' onClick={choiceSeats} disabled>62</button>
                                </div>
                                <div className="row-right">
                                    <button className='btn-seat btn-notAvailable' id='63' onClick={choiceSeats} disabled>63</button>
                                    <button className='btn-seat btn-notAvailable' id='64' onClick={choiceSeats} disabled>64</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
