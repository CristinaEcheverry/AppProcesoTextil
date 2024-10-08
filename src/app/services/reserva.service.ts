import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { UsuarioResponse } from '../interface/UsuariosResponse';
import { LogueoResponse } from '../interface/UsuariosResponse';
import { UsuariosPage } from '../pages/usuarios/usuarios.page';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
path_server:string="http://localhost/AppProcesoTextil/conexion_app/"
  constructor(
public http: HttpClient
  ) { }

  usuario(Usuario:string,Contrasena:string,Rol:string,Estado:string){
let datos={"Usuario":Usuario,"Contrasena":Contrasena,"Rol":Rol,"Estado":Estado};
let option={
  headers:{'Content-type':'application/json'}
};
console.log(datos + " usuario datos");
var url=this.path_server+'index.php';
return this.http.post<UsuarioResponse>(url,JSON.stringify(datos),option);

  }

  logueo(Usuario:string){
    let datos={"Usuario":Usuario};
    let option={
      headers:{'Content-type':'application/json'}
    };
    console.log(datos + "usuario datos");
    var url=this.path_server +'logueo.php';
    return this.http.post<LogueoResponse>(url,JSON.stringify(datos),option);
    
      }



}
