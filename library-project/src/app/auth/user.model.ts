import { Role } from './role.model';

export class User {
    public id: number;
    public customerName: string;
    public customerSurname: string;
    public customerUsername: string;
    public customerGender: string;
    public customerPhoneNum: string;
    public customerEmail: string;
    public customerCountry: string;
    public customerCity: string;
    public customerStreet: string;
    public customerPassword: string;
    public roleDto: Role;
}