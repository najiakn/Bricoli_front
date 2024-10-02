import { Injectable } from '@angular/core';
import { TypeService } from '../models/TypeService';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  private apiTypeService = 'http://localhost:8083/api/typeServices';

  constructor(private http: HttpClient) { }

  
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
  
  allTypeServices(): Observable<TypeService[]> {
    const headers = this.createAuthorizationHeader();

    return this.http.get<TypeService[]>(`${this.apiTypeService}`,{ headers: headers || {} });
  }

  addTypeService(newType: TypeService): Observable<TypeService> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<TypeService>(`${this.apiTypeService}/create-type-service`, newType, { headers: headers || {} })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            // 409 Conflict - Type already exists
            return throwError(() => new Error('Ce type de service existe déjà.'));
          }
          return throwError(() => new Error('Une erreur est survenue lors de l\'ajout du type de service.'));
        })
      );
  }
}
