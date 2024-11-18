export interface IPayFrorm {
    lastname: string;
    name: string;
    surname: string;
    telNumber:number | string;
    email: string;
    payMethod: string;
}

export interface IPayFormR {
    defaultPassangers: IPayFrorm
}