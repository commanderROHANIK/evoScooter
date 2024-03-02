import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicleList: { name: string, value: string }[] = [
    { name: 'Object 1', value: 'Value 1' },
    { name: 'Object 2', value: 'Value 2' },
    { name: 'Object 3', value: 'Value 3' },
    { name: 'Object 4', value: 'Value 4' },
    { name: 'Object 5', value: 'Value 5' }
  ];

  constructor() { }

  getAllVehicles() {
    return this.vehicleList;
  }
}
