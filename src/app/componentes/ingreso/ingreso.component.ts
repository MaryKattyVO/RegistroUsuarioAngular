import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  // propiedades
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje:FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.flashMensaje.show('Usuario logeado correctamente',
        {cssClass:'alert-success',timeout:4000})
        this.router.navigate(['/productos']);
      }).catch((err) => {
        this.flashMensaje.show(err.message,
        {cssClass:'alert-danger',timeout:4000})
        this.router.navigate(['/ingreso']);
      })
  }
}
