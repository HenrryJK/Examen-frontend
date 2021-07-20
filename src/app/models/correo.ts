export class Correo{
  destinario?:string="";
  titulo?:string="";
  mensaje?:string="";
  fecha?:Date =new Date();
  idusuario?:number;

  constructor(){}
}

export class CorreoF{
  idcorreo?:number
  destinario?:string="";
  titulo?:string="";
  mensaje?:string="";
  fecha?:Date =new Date();
  idusuario?:number;

  constructor(){}

}
