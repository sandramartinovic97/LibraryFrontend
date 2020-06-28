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

    constructor(name: string, surname: string, username: string, gender: string, phone: string, email: string, country: string, city: string, street: string, password: string, role: Role ) {
        this.customerName = name;
        this.customerSurname = surname;
        this.customerUsername = username;
        this.customerGender = gender;
        this.customerPhoneNum = phone;
        this.customerEmail = email;
        this.customerCountry = country;
        this.customerCity = city;
        this.customerStreet = street;
        this.customerPassword = password;
        this.roleDto = role;
    }
}
