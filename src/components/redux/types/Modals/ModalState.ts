export type TModalState = {
    showModalInfo: {
        show: boolean;
        content: '';
    };
    showModalError: {
        show: boolean;
        content: "";
    };
}

export type TModalStateR={
    modalWindows:TModalState
}