import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/componentes/home/home.component';
import { IngresoComponent}from '../app/componentes/ingreso/ingreso.component';
import { MenuComponent } from '../app/componentes/menu/menu.component';
import { MostrarUsuarioComponent } from '../app/componentes/mostrar-usuario/mostrar-usuario.component';
import { ProductosComponent } from '../app/componentes/productos/productos.component';
import { RegistrarComponent } from '../app/componentes/registrar/registrar.component';

import {AuthGuard} from './guards/auth.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'mostrar-usuario', component: MostrarUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'productos', component: ProductosComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
