import { Client } from './Clinet';
import { Prestataire } from './Prestataire'; // Adjust the import path as necessary

export interface Reclamation {
    id: number;
    titre: string;
    description: string;
    date: Date;
    client: Client;
    prestataire: Prestataire;
}