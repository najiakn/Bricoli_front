import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerAdmin(): void {
    if (this.registerForm.valid) {
      this.authService.registerAdmin(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration failed', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  get mail() {
    return this.registerForm.get('mail');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
