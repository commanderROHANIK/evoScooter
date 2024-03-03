import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VehicleData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleList: VehicleData[] = [];
  http = inject(HttpClient);

  constructor() { }

  async getAllVehicles() {
    await this.http.get("http://localhost:3000/vehicles").subscribe((data: any) => {
      this.vehicleList = data;
    });

    return this.vehicleList;
  } 
}
