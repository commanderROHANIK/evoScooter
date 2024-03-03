import { Component, Input, inject } from '@angular/core';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { AddVehicleComponent } from "./add-vehicle/add-vehicle.component";

@Component({
    selector: 'app-vehicle-list',
    standalone: true,
    templateUrl: './vehicle-list.component.html',
    styleUrl: './vehicle-list.component.scss',
    imports: [VehicleCardComponent, CommonModule, AddVehicleComponent]
})

export class VehicleListComponent {
  @Input() showTitle!: boolean;

  vehicleList: { name: string; value: string; }[] | undefined;
  vehicleService: VehicleService = inject(VehicleService);
  popupVisible: boolean = false;

  constructor() {
    this.vehicleList = this.vehicleService.getAllVehicles();
  }

  addVehicle() {
    this.popupVisible = !this.popupVisible;
    this.vehicleList = this.vehicleService.getAllVehicles();
  }
}
