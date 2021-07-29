import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CorreosComponent } from './components/correos/correos/correos.component';
import { ArchivosComponent } from './components/archivos/archivos.component';
import {AngularFireStorageModule}  from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire' ;
import { environment} from '../environments/environment';
import { PersonaComponent } from './components/persona/persona.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UsuarioComponent,
    CorreosComponent,
    ArchivosComponent,
    PersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    JwtHelperService,
    {
      provide:JWT_OPTIONS,
      useValue:JWT_OPTIONS
    },
    {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
