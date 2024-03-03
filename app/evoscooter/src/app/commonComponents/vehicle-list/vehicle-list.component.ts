import { Component, Input, inject, OnInit } from '@angular/core';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { CommonModule } from '@angular/common';
import { AddVehicleComponent } from "./add-vehicle/add-vehicle.component";
import { VehicleService } from '../../services/vehicle.service';
import { VehicleData } from '../../types/types';

@Component({
    selector: 'app-vehicle-list',
    standalone: true,
    templateUrl: './vehicle-list.component.html',
    styleUrl: './vehicle-list.component.scss',
    imports: [VehicleCardComponent, CommonModule, AddVehicleComponent]
})
export class VehicleListComponent implements OnInit{
  @Input() showTitle!: boolean;

  vehicleList: VehicleData[] = [];
  vehicleService: VehicleService = inject(VehicleService);
  popupVisible: boolean = false;

  constructor() {  }

  async ngOnInit() {
    this.vehicleList = await this.vehicleService.getAllVehicles();
  }

  addVehicle() {
    this.popupVisible = !this.popupVisible;
  }
}
