import loading_gif from '../../static-files/gif/loading.gif'
import './Loading.css'

export const Loading = () => {
    return (
        <img src={loading_gif} className="loading_gif" alt="загрузка" />
    )
}
