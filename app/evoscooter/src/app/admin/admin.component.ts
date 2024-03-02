import { Component } from '@angular/core';
import { HeaderComponent } from "../commonComponents/header/header.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [HeaderComponent]
})
export class AdminComponent {

}
