import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/models/TypeService';

@Component({
  selector: 'app-liste-type-service',
  templateUrl: './liste-type-service.component.html',
  styleUrls: ['./liste-type-service.component.css']
})
export class ListeTypeServiceComponent implements OnInit {
  newTypeName: string = '';
  serviceTypes: TypeService[] = [];
  private apiUrl = 'http://localhost:8083/api/typeServices'; // Adjust this URL as needed

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadServiceTypes();
  }

  loadServiceTypes() {
    this.http.get<TypeService[]>(this.apiUrl).subscribe(
      (data) => {
        this.serviceTypes = data;
      },
      (error) => {
        console.error('Error fetching service types:', error);
      }
    );
  }

  addServiceType() {
    if (this.newTypeName.trim()) {
      const newType: TypeService = { id: 0, nomType: this.newTypeName.trim() };
      this.http.post<TypeService>(this.apiUrl, newType).subscribe(
        (response) => {
          this.serviceTypes.push(response);
          this.newTypeName = '';
        },
        (error) => {
          console.error('Error adding service type:', error);
        }
      );
    }
  }
}



