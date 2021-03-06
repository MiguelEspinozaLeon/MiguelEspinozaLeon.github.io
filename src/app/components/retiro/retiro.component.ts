import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AñadirRetiroModel } from 'src/app/interfaces/añadir-retiro.model';
import { ServicioApiService } from 'src/app/services/servicio-api.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit{
  
  time = new Date();
  rxTime = new Date();
  intervalId;
numero_transaccion: number;
date: string;




formulario: FormGroup;
  constructor(private service: ServicioApiService, private fb: FormBuilder) {
   
    
   
   }
 
  

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString()
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.formulario = this.fb.group({
      numero_tarjeta: [],
   
    monto_transaccion: [],
   
    });
  }


  guardarRetiro(){
    if (this.formulario.status=='VALID'){
      console.log(this.formulario.value);
      const info = this.formulario.value;
     
      const Retiro: AñadirRetiroModel = {
        numero_tarjeta : info.numero_tarjeta,
       
        monto_transaccion: info.monto_transaccion,
       




      }
      this.service.postRetiro(Retiro).subscribe(res =>{
        
        console.log(res);
      });

  }

}
}
