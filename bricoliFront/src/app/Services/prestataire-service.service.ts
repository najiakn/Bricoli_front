import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestataire } from '../models/Prestataire';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { ModelService } from '../models/ModelService';

@Injectable({
  providedIn: 'root'
})
export class PrestataireServiceService {
  private apiUrl = 'http://localhost:8083/api/prestataires';
  private tokenKey = 'authToken'; // Assuming this is the key for JWT token
  private rolesKey = 'roles'; // Assuming this is the key for user roles
  private rolesSubject = new BehaviorSubject<any[]>([]); // Assuming you want to track user roles

  // http://localhost:8083/api/services/create-service

  constructor(private http: HttpClient) { }


  allPrestataires(): Observable<ModelService[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<ModelService[]>(`${this.apiUrl}/all`, { headers: headers || {} });
  }

  getMyInfos(): Observable<Prestataire[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Prestataire | Prestataire[]>(`${this.apiUrl}/me`, { headers: headers || {} })
        .pipe(
            catchError(this.handleError),
            map((data) => {
                // Ensure we always return an array
                return Array.isArray(data) ? data : [data]; // Wrap single object in an array
            })
        );
}

private handleError(error: HttpErrorResponse): Observable<never> {
  // Handle the error here, maybe log it and return a user-friendly message
  console.error('An error occurred:', error);
  return throwError('Something bad happened; please try again later.');
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



  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.rolesKey);
    this.rolesSubject.next([]);
    // Optionally, redirect the user after logout
    // window.location.reload(); // or use Angular Router to navigate to the login page
  }





}


