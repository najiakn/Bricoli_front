import { Role } from "./Role";

export interface Admin {
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
}