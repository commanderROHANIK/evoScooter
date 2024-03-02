import { Component } from '@angular/core';
import { HeaderComponent } from "../commonComponents/header/header.component";
import { VehicleListComponent } from "../commonComponents/vehicle-list/vehicle-list.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [HeaderComponent, VehicleListComponent]
})
export class AdminComponent {

}
