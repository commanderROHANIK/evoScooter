import { Component } from '@angular/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
onFormSubmit($event: SubmitEvent) {
  $event.preventDefault();
}
  emailFormControl!: FormControl<any>;
  passwordFormControl!: FormControl<any>;
}

