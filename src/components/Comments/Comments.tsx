import { users } from "./BaseComents/BaseComments"
import './Comments.css'

export const Comments = () => {

    return (
        <section className="comments_container d-flex flex-column text-center gx-0 pt-lg-5 px-lg-5 mx-lg-5" id="comments-section">
            <div className="row pt-lg-5 pt-5 ps-lg-5 ms-lg-3 gx-0">
                <div className="col-xl-2 col-lg-3 col-12 pt-lg-5 px-0">
                    <h2 className="comments_title pt-lg-2 ps-lg-4">Отзывы</h2>
                </div>
            </div>
            <div className="row gx-0">
                <div className="col-xl-10 col-12 pt-lg-5 pt-5 mt-lg-3 m-auto p-0 mt-sm-5">

                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators  mb-5">
                            {users.map((_page: any, pageIndex: number) => {
                                return (
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={pageIndex} className={pageIndex === 0 ? "active" : ""} aria-current="true" aria-label={`Slide ${pageIndex + 1}`} key={Math.random().toString(36).substring(2)}></button>
                                )
                            })}
                        </div>
                        <div className="carousel-inner">
                            {users.map((page: any, pageIndex: number) => {
                                return (
                                    <div className={pageIndex === 0 ? 'carousel-item active' : "carousel-item"} key={Math.random().toString(36).substring(2)}>
                                        <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center justify-content-between p-0 mx-4" key={Math.random().toString(36).substring(2)}>
                                            {page.map((users: any, userIndex: number) => {
                                                return (
                                                    <li className="item_container d-lg-flex align-items-center flex-xl-row" key={userIndex}>
                                                        <img src={users.photo} alt="user_photo" className="user_photo user_photo_first" key={Math.random().toString(36).substring(2)} />
                                                        <div className="comment_content d-flex flex-column text-start ps-lg-4 w-xl-50 w-100" key={Math.random().toString(36).substring(2)}>
                                                            <div className="user_name">{users.name}</div>
                                                            <p className="user_comment">"{users.comment}"
                                                            </p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-lg-0 mt-lg-5 pt-lg-5 pt-5 gap-0 mb-5">
            </div>
        </section >
    )
}
