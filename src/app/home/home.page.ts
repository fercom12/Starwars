import { Component,OnInit } from '@angular/core';
import { StarServiceService } from '../services/star-service.service';
import { empty } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  respuestaST: any={}
  respuestaSP: any={}

  constructor(private StarServiceService:StarServiceService ) {}

  ngOnInit(){}

  enviarForm(formulario){
    const num= formulario.value.num;
    this.StarServiceService.getST(num ).subscribe(data=>{
      this.respuestaST = data
      })
  } 

  especies(){ 
  //const num1=this.respuestaST.value.respuestaST[30];
  this.StarServiceService.getSP(this.respuestaST.species[0]).subscribe(data=>{
  this.respuestaSP = data
  console.log(this.respuestaSP);
  
    })
  }

}
