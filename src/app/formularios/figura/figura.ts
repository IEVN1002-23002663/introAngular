import { Component } from '@angular/core';

@Component({
  selector: 'app-figura',
  standalone: false,
  templateUrl: './figura.html',
})
export class Figura {
  base:string=''
  altura:string=''
  resultado:number=0
  pi:number=3.1416
  operacion:string='sumar'

  calcular():void{
    switch (this.operacion) {

      case 'triangulo':
        this.resultado=parseInt(this.base)*parseInt(this.altura)/2
        break;

      case 'rectangulo':
        this.resultado=parseInt(this.base)*parseInt(this.altura)
        break;

      case 'circulo':
        this.resultado=(this.pi)*(parseInt(this.altura)*parseInt(this.altura))
        break;

      case 'pentagono':
        this.resultado=parseInt(this.base)*parseInt(this.altura)/2      
      
        break;
    }
  }
}
