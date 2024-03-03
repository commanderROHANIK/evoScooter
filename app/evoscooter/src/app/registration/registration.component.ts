import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserData } from '../types/types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  userServices: UserService = inject(UserService);

  registrationForm = new FormGroup({
    emailFormControl: new FormControl(''),
    passwordFormControl: new FormControl(''),
    passwordAgainFormControl: new FormControl(''),
    siteFomrControl: new FormControl('')
  });


  async onSubmit() {
    const user: UserData = {
      email: this.registrationForm.get('emailFormControl')?.value ?? "",
      name: "Smith",
      licenseNumber: "1234",
      type: "user",
      password: this.registrationForm.get('passwordFormControl')?.value ?? "",
      siteAddress: "Szeged"
    };

    await this.userServices.createUser(user);
  }
}
