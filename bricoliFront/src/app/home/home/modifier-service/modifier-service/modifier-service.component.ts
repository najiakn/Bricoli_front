import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from 'src/app/models/ModelService';
import { TypeService } from 'src/app/models/TypeService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';

@Component({
  selector: 'app-modifier-service',
  templateUrl: './modifier-service.component.html',
  styleUrls: ['./modifier-service.component.css']
})
export class ModifierServiceComponent implements OnInit {
  service: ModelService = {} as ModelService; // Initialize service object
  typeServices: TypeService[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceModelService: ServiceModelServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get ID from the route
    if (id) {
      this.serviceModelService.getServiceById(+id).subscribe((data) => {
        this.service = data; // Populate service object with data
      });
    }

    this.serviceModelService.getTypeServices().subscribe((data) => {
      this.typeServices = data; // Get type services for dropdown
    });
  }

  onSubmit(): void {
    this.serviceModelService.updateService(this.service).subscribe(() => {
      this.router.navigate(['/listeService']); // Navigate back to service list after modification
    });
  }
}


// service-model-service.service.ts



