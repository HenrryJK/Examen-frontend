import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { User } from '../models/user';
import { Correo } from '../models/correo';
import { Archivo } from '../models/archivo';


@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  private URL='http://localhost:3000/api/auth';

  constructor(private http:HttpClient) { }

  //meth usuario/user
  getUsers(): Observable<any>{
    return this.http.get(this.URL+'/users')
  }
  delUser(id:String){
    return this.http.delete(`${this.URL}/users/delete/${id}`);
  }
  saveuser(user:User){
    return this.http.post(`${this.URL}/users/add/`,user);
  }

  //meth persona
  getPersonas(): Observable<any>{
    return this.http.get(this.URL+'/persona')
  }
  delPersona(id:String){
    return this.http.delete(`${this.URL}/persona/delete/${id}`);
  }
  savePersonas(persona:Persona){
    return this.http.post(`${this.URL}/persona/add/`,persona);
  }

    // meth archivo
    savearchivo(archivo:Archivo){
      return this.http.post(`${this.URL}/archivos/add/`,archivo);
    }
    getArchi(): Observable<any>{
      return this.http.get(this.URL+'/archivos')
    }
    delArchi(id:String){
      return this.http.delete(`${this.URL}/archivos/delete/${id}`);
    }



  // methcorreo
  send(correo:Correo){
  return this.http.post(`${this.URL}/mail/send/`,correo);
  }
  getCorreo(): Observable<any>{
    return this.http.get(this.URL+'/mail')
  }
  delCorreo(id:String){
    return this.http.delete(`${this.URL}/mail/delete/${id}`);
  }



}
