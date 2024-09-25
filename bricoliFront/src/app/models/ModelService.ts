import { Categorie } from "./Categorie";
import { Client } from "./Clinet";
import { EtatService } from "./Etat_service";
import { Prestataire } from "./Prestataire";
import { TypePaiement } from "./TypePaiement";
import { TypeService } from "./TypeService";


export interface ModelService {
  id: number;
  titre: string;
  description: string;
  prix: number;
  image: string;
  dateCreation: Date;
  etatService: EtatService;
  categorie: Categorie;
  typePaiement: TypePaiement;
  typeService: TypeService;
  
  

}
