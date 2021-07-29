import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivosComponent } from './components/archivos/archivos.component';
import { CorreosComponent } from './components/correos/correos/correos.component';
import { PersonaComponent } from './components/persona/persona.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'navbar', component:NavbarComponent,canActivate:[AuthGuard]
  },
  {
    path: 'archivo', component:ArchivosComponent,canActivate:[AuthGuard]
  },
  {
    path: 'correo', component:CorreosComponent,canActivate:[AuthGuard]
  },
  {
    path:'usuario', component:UsuarioComponent,canActivate:[AuthGuard]
  },
  {
    path:'persona', component:PersonaComponent,canActivate:[AuthGuard]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
