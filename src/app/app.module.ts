import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { MostrarUsuarioComponent } from './componentes/mostrar-usuario/mostrar-usuario.component';
import { ProductosComponent } from './componentes/productos/productos.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    HomeComponent,
    MenuComponent,
    IngresoComponent,
    MostrarUsuarioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
