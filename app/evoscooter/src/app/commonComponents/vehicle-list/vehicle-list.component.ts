import { Component } from '@angular/core';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleCardComponent, CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {
  vehicleList: { name: string, value: string }[] = [
    { name: 'Object 1', value: 'Value 1' },
    { name: 'Object 2', value: 'Value 2' },
    { name: 'Object 3', value: 'Value 3' },
    { name: 'Object 4', value: 'Value 4' },
    { name: 'Object 5', value: 'Value 5' }
  ];
}
