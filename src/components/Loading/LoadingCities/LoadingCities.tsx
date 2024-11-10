import loading from '../../../static-files/icons/header/loading.gif'
import './LoadingCities.css'

export const LoadingCities = () => {
    return (
        <img className='loading_gif_cities' src={loading} alt="loading" />
    )
}
