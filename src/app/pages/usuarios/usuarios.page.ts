import { Component, OnInit } from '@angular/core';
import { MenuController,LoadingController } from '@ionic/angular';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  
  Usuario:string="";
  Contrasena:string="";
  Rol:string="";
  Estado:string="";
  
  constructor(
    private menuCtrl: MenuController, 
    private ReservaService:ReservaService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }
ionViewDidLoad(){
  console.log('ionViewDidLoad UsuariosPage')
}
async usuario(){
  console.log(this.Usuario);
  const controller=await this.loadingCtrl.create({
    message:'Espere por favor',
    spinner:'crescent'
  });

  await controller.present();
  this.ReservaService.usuario(this.Usuario,this.Contrasena,this.Estado,this.Rol).subscribe((res)=> {
    controller.dismiss();
    console.log(res);
},error=> {
  controller.dismiss();
  console.log(error);
});
}



  ngOnInit() {
  }

}
