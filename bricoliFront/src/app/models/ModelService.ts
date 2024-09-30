import { Categorie } from "./categorie";
import { EtatService } from "./Etat_service";
import { TypePaiement } from "./TypePaiement";
import { TypeService } from "./TypeService";


export interface ModelService {
  id: number;
  titre: string;
  description: string;
  prix: number;
  dateCreation: Date;
  etatService: EtatService;
  categorie: Categorie;
  typePaiement: TypePaiement;
  typeService: TypeService;
  imageUrl?: string;
  
}
