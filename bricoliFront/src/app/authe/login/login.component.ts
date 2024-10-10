import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string | null = null; //login errors

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { mail, password } = form.value;
    console.log("nom " + mail, "passe" + password);
    this.authService.login(mail, password).subscribe(
      (response: { token: string; user_id: number; }) => {
        this.authService.saveToken(response.token);
        const role = this.authService.getRole();
        console.log('Role after login:', role);

        if (role === 'CLIENT') {
          console.log('Redirection vers la page CLIENT');
          this.router.navigate(['/ClientHome']);
        }
        else if (role === 'PRESTATAIRE') {
          console.log('Redirection vers la page PRESTATAIRE');
          this.router.navigate(['/home']);
        }
        else if (role === 'ADMIN') {
          console.log('Redirection vers la page PRESTATAIRE');
          this.router.navigate(['/AdminHome']);
        }
        else {
          console.log('Redirection vers la page par défaut');
          this.router.navigate(['/AdminHome']);
        }
      },
      (error: any) => {
        console.error('Échec de la connexion', error);
        this.errorMessage = 'Échec de la connexion. Veuillez vérifier votre nom d\'utilisateur et mot de passe.';
      }
    );
  }
}    