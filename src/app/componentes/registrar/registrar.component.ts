import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
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
    public router: Router
  ) { }

  ngOnInit() {
  }
  // método
  onSubmitAddUser() {
    this.autService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/productos']);
      }).catch((err) => {
        console.log(err);
      });
  }
}
