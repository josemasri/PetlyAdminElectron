import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { LoginService } from '../../core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'admin1@test.com';
  password = 'Jose1336';
  faSignInAlt = faSignInAlt;


  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.ValidateEmail(this.email)) {
      if(this.password.length < 8) {
        this.errorAlert('La contraseña no es valida');
        return;
      }
      this.loginService.verifyLogin(this.email, this.password);
    }
  }

  ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    this.errorAlert('El email no es valido');
    return false;
  }

  errorAlert(error: string) {
    Swal.fire(
      'Ha ocurrido un error',
      error,
      'error'
    );
  }

  forgetPassword() {
    Swal.fire(
      'Comunicate con el Admin',
      'Porfavor comunicate con el administrador del sistema',
      'info'
    );
  }

}
