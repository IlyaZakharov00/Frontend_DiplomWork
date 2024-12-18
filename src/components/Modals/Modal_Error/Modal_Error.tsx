import { Modal } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { StyledEngineProvider } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import icon from '../../../static-files/icons/modal/modal_error.svg'
import modalWindowsSlice from '../../redux/slices/modalWindows';
import styles from './Modal_Error.module.css'
import { TState } from "../../redux/types/State/State";

export const Modal_Error = () => {

    const modalWindows = useSelector((state: TState) => state.modalWindows);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(modalWindowsSlice.actions.closeModalWindow({ type: 'modal_error' }));

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const style2 = {
        color: "black",
        padding: "30px",
        textAlign: "center",
    };

    const style3 = {
        textAlign: "start",
        backgroundColor: "rgb(255 245 0 / 36%)",
        padding: "30px",
    }

    return (
        <StyledEngineProvider injectFirst>
            <Modal
                open={modalWindows.showModalError.show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal_error"

            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={style3}>
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns={icon}>
                            <path d="M0.30595 15.97C0.325962 7.12448 7.51043 -0.0199705 16.376 4.19404e-05C25.2014 0.0200544 32.3459 7.22454 32.3259 16.0901C32.2859 24.8755 25.1014 32.02 16.2959 32C7.4504 32 0.285938 24.8155 0.30595 15.97ZM17.8369 23.975C17.8369 20.7129 17.8369 17.571 17.8369 14.469C16.7762 14.469 15.7756 14.469 14.775 14.469C14.775 17.671 14.775 20.813 14.775 23.975C15.8156 23.975 16.8162 23.975 17.8369 23.975ZM14.795 8.04505C14.795 9.16575 14.795 10.1664 14.795 11.167C15.8556 11.167 16.8563 11.167 17.8569 11.167C17.8569 10.1063 17.8569 9.0857 17.8569 8.04505C16.7962 8.04505 15.8156 8.04505 14.795 8.04505Z" fill="#E4E0E9" />
                        </svg>
                    </Typography>
                    <Typography id="modal-modal-description" sx={style2}>{modalWindows.showModalError.content}</Typography>
                    <Typography id="modal-modal-description" sx={style2}>
                        <button className={styles.btnCloseModal} onClick={handleClose}>Понятно</button>
                    </Typography>
                </Box>
            </Modal>
        </StyledEngineProvider>
    )
}
