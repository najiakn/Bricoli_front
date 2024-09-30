import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelService } from 'src/app/models/ModelService';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeService } from '../models/TypeService';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelServiceService {
  private apiUrl = 'http://localhost:8083/api/services';
  private apiTypeService = 'http://localhost:8083/api/typeServices';

  // http://localhost:8083/api/services/create-service

  constructor(private http: HttpClient) { }


  allProjets(): Observable<ModelService[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<ModelService[]>(`${this.apiUrl}/offre`,{ headers: headers || {} });
  }


  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('authToken');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }


  }
  createService(serviceDto: ModelService): Observable<ModelService> {
  
    return this.http.post<ModelService>(`${this.apiUrl}/create-type-service`, serviceDto);
  }

  
   
    // Ajouter l'en-tête Authorization (JWT)
  
  


 
  getTypeServices(): Observable<TypeService[]> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<TypeService[]>(`${this.apiTypeService}`,{ headers: headers || {} });
  }
}



