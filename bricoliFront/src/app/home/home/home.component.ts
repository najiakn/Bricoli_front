import { Component, OnInit } from '@angular/core';

interface Service {
  id: number;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: Service[] = [
    { id: 1, description: "Informations sur le service proposé par le client" },
    { id: 2, description: "Informations sur le service proposé par le client" },
    { id: 3, description: "Informations sur le service proposé par le client" },
    { id: 4, description: "Informations sur le service proposé par le client" },
    { id: 5, description: "Informations sur le service proposé par le client" },
    { id: 6, description: "Informations sur le service proposé par le client" },
  ];

  constructor() { }

  ngOnInit(): void {
    // Ici, vous pourriez charger les services depuis une API
  }

  handleDelete(id: number): void {
    this.services = this.services.filter(service => service.id !== id);
  }

  handleConfirm(id: number): void {
    // Implémentez la logique de confirmation ici
    console.log(`Service ${id} confirmé`);
  }
}