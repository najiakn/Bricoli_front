import { Categorie } from "./Categorie";
import { EtatService } from "./Etat_service";
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
  imageUrl: string;
  

}
