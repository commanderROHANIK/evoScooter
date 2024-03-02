import { Component } from '@angular/core';
import { HeaderComponent } from '../commonComponents/header/header.component';
import { VehicleListComponent } from "../commonComponents/vehicle-list/vehicle-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, VehicleListComponent]
})
export class HomeComponent {

}
