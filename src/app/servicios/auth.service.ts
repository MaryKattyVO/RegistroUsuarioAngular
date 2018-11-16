import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  // método para crear usuario
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
  //método login
  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }
  // devuelve datos del usuario
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
  logout() {
    return this.afAuth.auth.signOut();
  }

}
