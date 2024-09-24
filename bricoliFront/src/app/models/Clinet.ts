import { Role } from "./Role";

export interface Client {
id: number;
nom: string;
prenom: string;
age: number;
genre: string;
telephone: string;
ville: string;
email: string;
password: string;
role: Role;
cnie:string,
profil:string,
zoneDeplacement:string

}