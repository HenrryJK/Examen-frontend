import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireStorageModule}  from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire' ;
import { environment} from '../environments/environment';
import { ArchivosComponent } from './components/archivos/archivos.component';
import { CorreosComponent } from './components/correos/correos/correos.component';
import { PersonaComponent } from './components/persona/persona/persona.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    ArchivosComponent,
    CorreosComponent,
    PersonaComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
