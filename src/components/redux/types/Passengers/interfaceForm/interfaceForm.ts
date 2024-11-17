export interface IForm {
    lastname: string;
    name: string;
    surname: string;
    gender: string;
    age: string;
    date_birthday: string;
    document_type: string;
    number_document: string;
    seria_document: string;
    invalid: boolean;
}

export interface IFormProps {
    defaultPassangers: IForm
}

export type TPassangerProps = {
    passanger: IForm
}