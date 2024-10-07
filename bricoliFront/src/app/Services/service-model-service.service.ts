import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelService } from 'src/app/models/ModelService';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeService } from '../models/TypeService';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelServiceService {
  private apiUrl = 'http://localhost:8083/api/services';
  private apiTypeService = 'http://localhost:8083/api/typeServices';
  private tokenKey = 'authToken'; // Assuming this is the key for JWT token
  private rolesKey = 'roles'; // Assuming this is the key for user roles
  private rolesSubject = new BehaviorSubject<any[]>([]); // Assuming you want to track user roles

  // http://localhost:8083/api/services/create-service

  constructor(private http: HttpClient) { }


  allServices(): Observable<ModelService[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<ModelService[]>(`${this.apiUrl}/offre`, { headers: headers || {} });
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
    const headers = this.createAuthorizationHeader();

    return this.http.post<ModelService>(`${this.apiUrl}/create-service`, serviceDto, { headers: headers || {} });
  }



  // Ajouter l'en-tête Authorization (JWT)





  getTypeServices(): Observable<TypeService[]> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<TypeService[]>(`${this.apiTypeService}`, { headers: headers || {} });
  }




  allCategoriServices(): Observable<ModelService[]> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<ModelService[]>(`${this.apiUrl}/categoriService`, { headers: headers || {} });
  }





  deleteService(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();

    return this.http.delete<void>(`${this.apiUrl}/delete-service/${id}`, { headers: headers || {} });
  }


  getServiceById(id: number): Observable<ModelService> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<ModelService>(`${this.apiUrl}/${id}`, { headers: headers || {} });
  }
  
  updateService(serviceDto: ModelService): Observable<ModelService> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<ModelService>(`${this.apiUrl}/update-service/${serviceDto.id}`, serviceDto, { headers: headers || {} });
  }
  
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.rolesKey);
    this.rolesSubject.next([]);
    // Optionally, redirect the user after logout
    // window.location.reload(); // or use Angular Router to navigate to the login page
  }


}



