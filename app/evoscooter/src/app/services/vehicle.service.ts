import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleList: any = [];
  http = inject(HttpClient);

  constructor() { }

  async getAllVehicles() {
    await this.http.get("http://localhost:3000/vehicles").subscribe((data: any) => {
      console.log(data);
      this.vehicleList = data;
    });

    return this.vehicleList;
  } 

  addVehicle(vehicle: { name: string, value: string }) {
    this.vehicleList.push(vehicle);
  }
}
