import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  //  propiedades
  public email: string;
  public password: string;
  constructor(
    public autService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  // método
  onSubmitAddUser() {
    this.autService.registerUser(this.email, this.password)
      .then((res) => {
        this.flashMensaje.show('Usuario creado correctamente',
        {cssClass:'alert-success',timeout:4000})
        this.router.navigate(['/mostrar-usuario']);
      }).catch((err) => {
        this.flashMensaje.show(err.message,{cssClass:'alert-danger',timeout:4000})
        this.router.navigate(['/mostrar-usuario']);
        console.log(err);
      });
  }
}
