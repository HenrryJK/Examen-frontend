export class Correo{
  destinatario?:string="";
  titulo?:string="";
  mensaje?:string="";
  fecha?:Date =new Date();
  idusuario?:number;

  constructor(){}
}

export class CorreoF{
  idcorreo?:number
  destinatario?:string="";
  titulo?:string="";
  mensaje?:string="";
  fecha?:Date =new Date();
  idusuario?:number;

  constructor(){}

}
