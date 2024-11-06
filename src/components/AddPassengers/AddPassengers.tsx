import './AddPassengers.css'
import { DetailsTravel } from './DetailsTravel/DetailsTravel'

export const AddPassengers = () => {
    return (
        <div className='addPassangers-container'>
            <div className="row m-auto pt-5 d-flex justify-content-between w-75">
                <div className="col-xl-3 col-lg-12 p-0">
                    <DetailsTravel />
                </div>
                <div className="col-xl-8 col-lg-12 p-0">
                    <div className="accordion accordion-flush" id="accordionFlushExample_3">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne_3">
                                <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_3" aria-expanded="false" aria-controls="flush-collapseOne_3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.9721 26C17.2752 26 8.72031 26 0.165369 26C-0.219806 21.9313 -0.260351 20.3648 3.83467 18.4118C9.91638 15.5229 16.0792 15.5839 22.2014 18.4118C22.9921 18.7779 23.7219 19.2865 24.4111 19.8358C25.5058 20.7106 26.0735 21.8499 25.9924 23.2943C25.9518 24.1487 25.9721 25.0235 25.9721 26Z" fill="#FFA800" />
                                        <path d="M19.4841 6.44946C19.5044 10.0503 16.6054 13.0002 13.0172 13.0206C9.42899 13.0206 6.50977 10.091 6.50977 6.51049C6.50977 2.9503 9.38844 0.0411096 12.9158 0.00042166C16.5243 -0.0402663 19.4638 2.86892 19.4841 6.44946Z" fill="#FFA800" />
                                    </svg>
                                    <h2 className='passengers_title'>Пассажиры</h2>
                                </button>
                            </h2>
                            <div id="flush-collapseOne_3" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne_3" data-bs-parent="#accordionFlushExample_3">
                                <div className="aboutPassangers-container px-4">
                                    <div className="">gfccg;bh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
