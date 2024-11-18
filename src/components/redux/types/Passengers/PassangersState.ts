import { IForm } from "./interfaceForm/interfaceForm";

export type TPassangersState = {
    countAdult: number;
    countChild: number;
    countChildWithoutSeat: number;
}

export type TPassangersDataState = {
    allPassanger: IForm[];
}
