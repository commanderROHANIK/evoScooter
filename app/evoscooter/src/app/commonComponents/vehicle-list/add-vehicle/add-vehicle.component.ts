import { Component, Input } from '@angular/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { VehicleService } from '../../../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent {
  @Input() vehicleService!: VehicleService;
  idFormControl!: FormControl<any>;
  typeFormControl!: FormControl<any>;
  siteFormControl!: FormControl<any>;

  constructor() {
    this.idFormControl = new FormControl('');
    this.typeFormControl = new FormControl('');
    this.siteFormControl = new FormControl('');
  }

  onFormSubmit($event: SubmitEvent) {
    $event.preventDefault();
    this.vehicleService.addVehicle({  name: this.idFormControl.value, value: this.typeFormControl.value });
  }
}
