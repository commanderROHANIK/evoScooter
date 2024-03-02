import { Component, inject } from '@angular/core';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleCardComponent, CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})

export class VehicleListComponent {
  vehicleList: { name: string; value: string; }[] | undefined;
  vehicleService: VehicleService = inject(VehicleService);

  constructor() {
    this.vehicleList = this.vehicleService.getAllVehicles();
  }
}
