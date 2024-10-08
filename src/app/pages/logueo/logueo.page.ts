import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsuariosPage } from '../usuarios/usuarios.page';
import { MenuController,LoadingController } from '@ionic/angular';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.page.html',
  styleUrls: ['./logueo.page.scss'],
})
export class LogueoPage implements OnInit {

  Usuario:string="";
  Contrasena:string="";

constructor(
  private menuCtrl: MenuController, 
  private ReservaService:ReservaService,
  private loadingCtrl: LoadingController,
  private router: Router
) { }
ionViewDidLoad(){
console.log('ionViewDidLoad UsuariosPage')
}
async logueo(){
const controller=await this.loadingCtrl.create({
  message:'Espere por favor',
  spinner:'crescent'
});

await controller.present();
this.ReservaService.logueo(this.Usuario).subscribe((res)=> {
  controller.dismiss();
  console.log(res);
},error=> {
controller.dismiss();
console.log(error);
});

console.log(this.Contrasena + "esto me lo muestra en el page")
//esto fue lo ultimo que registre
}

  ngOnInit() {  

  }

  
}
