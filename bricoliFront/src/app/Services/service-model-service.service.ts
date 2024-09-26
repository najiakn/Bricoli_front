import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelService } from 'src/app/models/ModelService';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceModelServiceService {
  private apiUrl = 'http://localhost:8083/api/services';

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
}
