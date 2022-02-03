export interface User {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: iAddress,
    role: Role,
    username: string,
    profilePhotoUrl: string,
    gender: Gender
}

export enum Gender {
    MALE,
    FEMALE,
    OTHER,
}
export enum Role {
    STAFF = "STAFF",
    MANAGER = "MANAGER",
    ADMIN = "ADMIN",
}
interface iAddress {
    city: string;
    street: string;
    postalCode: string;
}